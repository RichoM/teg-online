(ns teg-online.ai.server
  (:require [clojure.core.async :as a :refer [go <!]]
            [teg-online.utils.async :refer [go-try <?]]
            [oops.core :refer [oget oget+ oset! ocall! ocall!+]]
            ["express" :as express]
            ["body-parser" :as body-parser]
            ["cors" :as cors]
            [cognitect.transit :as t]
            [teg-online.game :as teg]
            [teg-online.board :as board]
            [teg-online.ai.attack-prob :refer [initialize-chances]]
            [teg-online.utils.openai :as ai]
            [teg-online.ai.basic-prompt :refer [make-prompt]]
            [teg-online.ai.strategy-prompt :refer [strategy-prompt action-prompt]]
            [teg-online.ai.response :as response]
            [teg-online.ai.models :refer [models-by-id]]
            [teg-online.ai.actions :as actions]
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

(defn fetch-response [model prompt]
  (let [model-name (:name model)
        temperature (:temperature model)]
    (ai/create-response!
     (cond-> {:model model-name
              :input prompt}
       ; Only send the temperature if the model specifies it
       (some? temperature)
       (assoc :temperature temperature)))))

(defn get-basic-actions! [game turn-actions model log]
  (go-try
    (let [prompt (make-prompt game turn-actions)
          response (when prompt
                     (:output_text
                      (<? (fetch-response model prompt))))
          actions (if response
                    (response/parse-response game
                                             turn-actions
                                             response)
                    [actions/pass])]
      (<? (log (str "Basic action\n"
                    (:turn game) ". " (:phase game)
                    " / "
                    (teg/get-current-player-name game))))
      (<? (log (str ">>> PROMPT:\n" prompt)))
      (<? (log (str ">>> RESPONSE:\n" response)))
      (<? (log actions))
      {:actions actions
       :conversation [prompt response]})))

(defn get-strategy! [game turn-actions model log]
  (go-try
    (let [initial-prompt (strategy-prompt game turn-actions)
          strat-response (when initial-prompt
                           (:output_text
                            (<? (fetch-response model initial-prompt))))
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
                    [actions/pass])]
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
      {:conversation [initial-prompt
                      strat-response
                      second-prompt
                      action-response]
       :actions actions})))

(defn get-random-actions! [game turn-actions model log]
  (go-try
   (let [player-id (teg/get-current-player game)
         scored-actions
         (->> (repeatedly #(actions/random-actions game))
              (map (fn [actions]
                     (let [mutation (actions/make-mutation actions)
                           score (actions/calculate-score game mutation)]
                       {:actions actions
                        :score (-> score player-id)})))
              (take 100)
              (vec))

         best-normalized (->> scored-actions
                              (sort-by (comp :normalized :score) >)
                              (first))
         best (if (pos? (-> best-normalized 
                            :score :absolute))
                best-normalized
                (->> scored-actions
                     (sort-by (comp :absolute :score) >)
                     (first)))]
     (println "ACTION:" best)
     {:conversation []
      :actions (if (> (-> best :score :absolute) 0.0)
                 (:actions best)
                 [actions/pass])})))

(comment
  
  (do
    (def game (-> @teg-online.main/state :game))
    (def player-id (teg/get-current-player game)))
  )

(defn get-placeholder-actions! [game turn-actions model log]
  (go-try
   ;(<? (a/timeout (* 1000 (+ 2 (rand-int 10)))))
   {:conversation [(strategy-prompt game turn-actions)
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum eros eu felis rhoncus lacinia. Fusce ullamcorper diam sit amet lacus molestie, aliquam sodales felis hendrerit. Nunc iaculis nulla et convallis volutpat. Duis risus libero, dignissim at leo at, interdum rutrum tortor. Vivamus ac rhoncus sapien. Ut lobortis tristique eleifend. Morbi malesuada, ex eu pretium maximus, libero nulla condimentum magna, nec accumsan diam felis ac tortor. Nulla at justo orci. Donec at convallis arcu, quis pellentesque orci. Duis ornare erat leo, eget bibendum nulla interdum quis. Donec viverra, risus at lacinia congue, odio mauris fringilla mauris, ac faucibus lacus nulla eget massa.
  
  Aenean mattis facilisis urna, sit amet pharetra augue ullamcorper at. Aenean maximus velit purus, quis facilisis erat vulputate pharetra. Aliquam erat volutpat. Praesent arcu metus, rhoncus vitae urna non, vulputate eleifend metus. Nunc tristique, risus nec fermentum efficitur, ex leo consectetur metus, sit amet posuere neque turpis id lectus. Nullam feugiat volutpat egestas. Quisque quis augue aliquam, volutpat lorem et, varius ipsum. Morbi tristique neque quis augue luctus sagittis. Duis tincidunt porta tellus non ultricies. Nulla id diam arcu. Pellentesque elementum scelerisque turpis. Nam varius arcu et dui fringilla gravida a eu tortor. Sed ultricies sem vitae felis varius, vitae maximus ex commodo."
                   "ACAACA second prompt"
                   "ACAACA actions"]
    :actions [actions/pass]}))

(defn init-ai-controller! [^js app]
  (-> (.route app "/ai")
      (.post (fn [req res]
               (let [log (partial log (.toISOString (js/Date.)))]
                 (go (try
                       (let [{:keys [game turn-actions model]} (parse-request req)
                             {:keys [basic?] :as model} (models-by-id model)
                             random? (= :random (:id model))
                             ;; TODO(Richo): Just for testing
                             actions (cond
                                       random? (<? (get-random-actions! game turn-actions model log))
                                       true (<? (get-placeholder-actions! game turn-actions model log))
                                       basic? (<? (get-basic-actions! game turn-actions model log))
                                       :else (<? (get-strategy! game turn-actions model log)))]
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