(ns teg-online.ai.client
  (:require [clojure.core.async :as a :refer [go <!]]
            [clojure.string :as str]
            [teg-online.utils.async :refer [<? go-try]]
            [cognitect.transit :as t]
            [teg-online.game :as teg]
            [teg-online.ai.response :as r]))


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

(defn update! [game-atom next-step-chan]
  (go
    (loop [turn-actions []]
      (try
        #_(do (println "Waiting on next-step")
            (<! next-step-chan)
            (println "Updating now!"))
        (let [game @game-atom
              body (t/write writer {:game game
                                    :turn-actions turn-actions})
              response (<? (fetch-response body))
              {:keys [actions conversation]}
              (if response
                (t/read reader response)
                {:actions [r/pass]})]
          (let [game @game-atom]
            (println (:turn game) ". " (:phase game)
                     " / "
                     (teg/get-current-player-name game)))
          (doseq [t conversation]
            (println t))
          (doseq [action actions]
            (swap! game-atom #(try-apply-action % action)))
          (when-not (= r/pass (last actions))
            (recur (apply conj turn-actions actions))))
        (catch :default err
          (println "ERROR" err))))))

(defn initialize [game-atom next-step-chan]
  (add-watch game-atom ::ai
             (fn [_ _ prev-state curr-state]
               (when (str/starts-with?
                      (str (teg/get-current-player curr-state))
                      ":ai")
                 (when (not= [(:turn prev-state) (:phase prev-state)]
                             [(:turn curr-state) (:phase curr-state)])
                   (update! game-atom next-step-chan))))))


(comment

  )