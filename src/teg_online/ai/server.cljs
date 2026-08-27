(ns teg-online.ai.server
  (:require [clojure.core.async :as a :refer [go <!]]
            [teg-online.utils.async :refer [go-try <?]]
            [oops.core :refer [oget oget+ oset! ocall! ocall!+]]
            ["express" :as express]
            ["body-parser" :as body-parser]
            ["cors" :as cors]
            [cognitect.transit :as t]
            [teg-online.game :as teg]
            [teg-online.ai.model-handlers :refer [handler-by-id]]
            [teg-online.ai.attack-prob :refer [initialize-chances]]
            [teg-online.ai.models :refer [models-by-id]]
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
  (t/read reader (oget req :body)))

(defn write-response [response]
  (t/write writer response))

(defn init-ai-controller! [^js app]
  (-> (.route app "/ai")
      (.post (fn [req res]
               (let [log (partial log (.toISOString (js/Date.)))]
                 (go (try
                       (let [{:keys [game turn-actions model]} (parse-request req)
                             model (models-by-id model)
                             get-actions! (handler-by-id (:id model))
                             actions (<? (get-actions! game turn-actions model log)) ]
                         (doto res
                           (.type "text")
                           (.send (write-response actions))))
                       (catch :default err
                         (js/console.error "ERROR!" err)
                         (when-not (oget res :?headersSent)
                           (doto res
                             (.status (or (oget err :?statusCode) 500))
                             (.send (.-message err))))))))))))

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