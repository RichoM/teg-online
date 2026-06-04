(ns teg-online.ai.server
  (:require [clojure.core.async :as a :refer [go <!]]
            [teg-online.utils.async :refer [<?]]
            [oops.core :refer [oget oget+ oset! ocall! ocall!+]]
            ["express" :as express]
            ["body-parser" :as body-parser]
            ["cors" :as cors]
            [cognitect.transit :as t]
            [teg-online.game :as teg]
            [teg-online.board :as board]
            [teg-online.ai.attack-prob :refer [initialize-chances]]
            [clojure.string :as str]
            [teg-online.utils.openai :as ai]
            [teg-online.ai.prompt :refer [make-prompt]]
            [teg-online.ai.strategy :refer [strategy-prompt action-prompt]]
            [teg-online.ai.response :as response]
            [teg-online.utils.fs :as fs]))

(defonce server (atom nil))

(defonce reader (t/reader :json))
(defonce writer (t/writer :json))

(defn log [timestamp data]
  (go (try
        (let [file-path (str "logs/" timestamp ".log")]
          (when (<? (fs/exists? file-path))
            (<? (fs/write-file file-path "\n;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\n"
                               {:flag "a"})))
          (<? (fs/write-file file-path (str data) {:flag "a"})))
        (catch :default error
          (println "ERROR writing log:" error)))))

(defn parse-request [req]
  (try
    (t/read reader (oget req :body))
    (catch :default error
      (println "ERROR parsing game:" error)
      (throw error))))

(defn write-response [response]
  (try
    (t/write writer response)
    (catch :default error
      (println "ERROR writing response:" error)
      (throw error))))

(defn get-basic-actions! [game turn-actions log]
  (go
    (let [prompt (make-prompt game turn-actions)
          response (when prompt
                     (:output_text
                      (<? (ai/create-response!
                           {:model "gpt-4.1-mini"
                            :temperature 0
                            :input prompt}))))
          actions (if response
                    (response/parse-response game
                                             turn-actions
                                             response)
                    [response/pass])]
      (<? (log (str "Basic action\n"
                    (:turn game) ". " (:phase game)
                    " / "
                    (teg/get-current-player-name game))))
      (<? (log (str ">>> PROMPT:\n" prompt)))
      (<? (log (str ">>> RESPONSE:\n" response)))
      (<? (log actions))
      {:actions actions
       :conversation ["BASIC" prompt response]})))

(defn get-strategy! [game turn-actions log]
  (go
    (let [initial-prompt (strategy-prompt game turn-actions)
          strat-response (when initial-prompt
                           (:output_text
                            (<? (ai/create-response!
                                 {:model "gpt-4.1-mini"
                                  :temperature 0
                                  :input initial-prompt}))))
          second-prompt (action-prompt game strat-response)
          action-response (when strat-response
                            (:output_text
                             (<? (ai/create-response!
                                  {:model "gpt-4.1-mini"
                                   :temperature 0
                                   :input second-prompt}))))
          actions (if action-response
                    (response/parse-response game
                                             turn-actions
                                             action-response)
                    [response/pass])]
      (<? (log (str "Strategy\n"
                    (:turn game) ". " (:phase game)
                    " / "
                    (teg/get-current-player-name game))))
      (when initial-prompt
        (<? (log (str ">>> INITIAL PROMPT:\n" initial-prompt))))
      (when strat-response
        (<? (log (str ">>> STRATEGY:\n" strat-response))))
      (when second-prompt
        (<? (log (str ">>> SECOND PROMPT:\n" second-prompt))))
      (when action-response
        (<? (log (str ">>> ACTION:\n" action-response))))
      (when actions
        (<? (log actions)))
      {:conversation ["STRATEGY"
                      initial-prompt
                      strat-response
                      second-prompt
                      action-response]
       :actions actions})))

(defn init-ai-controller! [^js app]
  (-> (.route app "/ai")
      (.post (fn [req res]
               (let [log (partial log (.toISOString (js/Date.)))]
                 (go (try
                       (let [{:keys [game turn-actions]} (parse-request req)
                             actions (if (= :ai-2 (teg/get-current-player game))
                                       (<? (get-strategy! game turn-actions log))
                                       (<? (get-basic-actions! game turn-actions log)))]
                         (doto res
                           (.type "text")
                           (.send (write-response actions))))
                       (catch :default err
                         (println "ERROR" err)
                         ;(js/console.log "Request:" req)
                         (when-not (oget res :?headersSent)
                           (doto res
                             (ocall! :status (or (oget err :?statusCode) 500))
                             (ocall! :send err)))))))))))

(defn start-server []
  (println "Starting server...")
  (go
    (<! (fs/mkdir "logs"))
    (<! (initialize-chances))
    (let [wait-chan (a/chan)
          port (or js/process.env.PORT 3000)
          app (doto (express)
                (.use (cors))
                  ;(.use (express/json))
                  ;(.use (express/urlencoded #js {:extended true}))
                (.use (body-parser/text #js {:type "*/*"}))
                #_(.use (body-parser/raw #js {:type "application/octet-stream"
                                              :limit "2mb"}))
                (.get "/" (fn [_ res] (.send res "Hello, world")))
                (init-ai-controller!))
          server (.listen app port
                          #(do (println "Server listening on port:" port)
                               (a/close! wait-chan)))]
      (<! wait-chan)
      server)))

(defn stop! []
  (let [wait-chan (a/chan)
        [old _] (reset-vals! server nil)]
    (if old
      (.close old #(a/close! wait-chan))
      (a/close! wait-chan))
    wait-chan))

(defn start! []
  (go (reset! server (<! (start-server)))))

(defn main []
  (start!))

(defn ^:dev/before-load-async reload-begin* [done]
  (go (<! (stop!))
      (done)))

(defn ^:dev/after-load-async reload-end* [done]
  (go (<! (start!))
      (done)))