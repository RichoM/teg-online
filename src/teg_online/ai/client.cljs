(ns teg-online.ai.client
  (:require [clojure.core.async :as a :refer [go <!]]
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

(defn update! [game-atom]
  (go
    (try
      (let [body (t/write writer @game-atom)
            response (<? (POST "http://localhost:3000/ai" body))
            action (t/read reader response)]
        (println action)
        (swap! game-atom #(r/apply-action action %))
        (swap! game-atom teg/finish-action))
      (catch :default err
        (println "ERROR" err)))))


(defn initialize [game-atom]
  (add-watch game-atom ::ai
             (fn [_ _ prev-state curr-state]
               (println "PREV:" (:turn prev-state) (:phase prev-state))
               (println "CURR:" (:turn curr-state) (:phase curr-state))
               (when (not= [(:turn prev-state) (:phase prev-state)]
                           [(:turn curr-state) (:phase curr-state)])
                 (update! game-atom)))))