(ns teg-online.ai.client
  (:require [clojure.core.async :as a :refer [go <!]]
            [clojure.string :as str]
            [teg-online.utils.async :refer [<? go-try]]
            [cognitect.transit :as t]
            [teg-online.game :as teg]
            [teg-online.ai.scoring :as score]
            [teg-online.ai.actions :as actions]
            [teg-online.ai.models :refer [models]]))


(defonce reader (t/reader :json))
(defonce writer (t/writer :json))

(defn error-handler [result-chan]
  (fn [err]
    (let [actual-error (if (instance? js/Error err) err
                           (js/Error. "ERROR!" (clj->js {:cause err})))]
      (a/put! result-chan actual-error))))

(defn POST [url data]
  (let [result-chan (a/promise-chan)]
    (doto (js/fetch url
                    (clj->js {:method "POST"
                              :headers {"Content-Type" "text/plain"}
                              :body data}))
      (.catch (error-handler result-chan))
      (.then (fn [^js response]
               (doto (.text response)
                 (.then (fn [text]
                          (a/put! result-chan text)))
                 (.catch (error-handler result-chan))))))
    result-chan))

(defn fetch-response 
  ([data] (fetch-response data 0))
  ([data retry]
   (go-try
    (try
      (<? (POST "http://localhost:3000/ai" data))
      (catch :default error
        (println (str "ERROR fetching response. Retry: " retry) error)
        (if (< retry 3)
          (<? (fetch-response data (inc retry)))
          (throw (ex-info "Too many retries!" {:data data :retry retry}))))))))

(defn try-apply-action [game action]
  (try
    (actions/apply-action action game)
    (catch :default err
      (println "ERROR trying to apply action:" err)
      game)))

(defn mean [coll]
  (/ (reduce + coll)
     (count coll)))

(defn calculate-score
  ([game mutation]
   (calculate-score game mutation
                    (if (isa? (teg/get-current-phase game)
                              ::teg/attack)
                      100
                      1)))
  ([game mutation times]
   (let [initial-scores (score/normalized-scores game)
         delta-scores
         (apply merge-with into
                (->> (repeatedly times #(mutation game))
                     (map score/normalized-scores)
                     (map (fn [scores]
                            (->> scores
                                 (map (fn [[player-id score]]
                                        [player-id (- score (initial-scores player-id))]))
                                 (into {}))))
                     (map #(update-vals % vector))))]
     (update-vals delta-scores mean))))

(defn ask! [state turn-actions]
  (let [game (:game state)]
    (->> models
         (map (fn [{:keys [id]}]
                (let [body (t/write writer {:game game
                                            :turn-actions turn-actions
                                            :model id})]
                  [id
                   (go (try
                         (let [response (<? (fetch-response body))
                               
                               {:keys [actions conversation]}
                               (if response
                                 (t/read reader response)
                                 {:actions [actions/pass]})
                               
                               mutation (fn [game]
                                          (reduce (fn [game action]
                                                    (try-apply-action game action))
                                                  game
                                                  actions))]
                           {:original-state state
                            :conversation conversation
                            :actions actions
                            :pass? (= actions/pass (last actions))
                            ;; TODO(Richo): Before applying the mutation we need to check that the new game state
                            ;; is equal the original game state, and also that we don't have a selected-snapshot!
                            :mutation mutation
                            :score {:mean (get (calculate-score game mutation)
                                               (teg/get-current-player game))}})
                         (catch :default err
                           {:error err})))])))
         (into {}))))
