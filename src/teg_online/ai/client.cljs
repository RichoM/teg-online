(ns teg-online.ai.client
  (:require [clojure.core.async :as a :refer [go <!]]
            [clojure.string :as str]
            [teg-online.utils.async :refer [<? go-try]]
            [cognitect.transit :as t]
            [teg-online.game :as teg]
            [teg-online.ai.response :as r]
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
    (r/apply-action action game)
    (catch :default err
      (println "ERROR trying to apply action:" err)
      game)))

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
                                 {:actions [r/pass]})]
                           {:original-state state
                            :conversation conversation
                            :actions actions
                            :pass? (= r/pass (last actions))
                            ;; TODO(Richo): Before applying the mutation we need to check that the new game state
                            ;; is equal the original game state, and also that we don't have a selected-snapshot!
                            :mutation (fn [game]
                                        (reduce (fn [game action]
                                                  (try-apply-action game action))
                                                game
                                                actions))})
                         (catch :default err
                           {:error err})))])))
         (into {}))))
