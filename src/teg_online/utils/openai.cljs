(ns teg-online.utils.openai
  (:require ["node:process" :refer [loadEnvFile]]
            ["openai$default" :as OpenAI]
            [oops.core :refer [ocall!]]
            [clojure.core.async :as a]))

(loadEnvFile)

(def llm (OpenAI.))

(defn create-response! [args]
  (let [c (a/promise-chan)]
    (doto (ocall! llm :responses.create
                  (clj->js args))
      (.then (fn [response]
               (a/put! c (js->clj response :keywordize-keys true)))
             (fn [error]
               (a/put! c (if (instance? js/Error error) error
                             (js/Error. "ERROR!" (clj->js {:cause error})))))))
    c))