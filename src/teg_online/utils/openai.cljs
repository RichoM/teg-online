(ns teg-online.utils.openai
  (:require ["node:process" :refer [loadEnvFile]]
            ["openai$default" :as OpenAI]
            [oops.core :refer [ocall!]]
            [clojure.core.async :as a]))

(loadEnvFile)

(def llm (OpenAI.))

(defn promise-error [err]
  (ex-info "Promise error"
           {:error :promise-error}
           err))

(defn create-response! [args]
  (let [c (a/promise-chan)]
    (doto (ocall! llm :responses.create
                  (clj->js args))
      (.then (fn [response]
               (a/put! c (js->clj response :keywordize-keys true)))
             (fn [error]
               (a/put! c (promise-error error)))))
    c))