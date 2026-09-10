(ns teg-online.ai.model-handlers
  (:require [clojure.string :as str]
            [clojure.pprint :as pp]
            [teg-online.utils.async :refer [go-try <?]]
            [teg-online.ai.basic-prompt :refer [make-prompt]]
            [teg-online.ai.strategy-prompt :refer [strategy-prompt action-prompt]]
            [teg-online.ai.response :as response]
            [teg-online.ai.actions :as actions]
            [teg-online.utils.openai :as ai]
            [teg-online.game :as teg]))


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
      :conversation [(str "Prompt\n" prompt)
                     (str "Response\n" response)]})))

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
     {:conversation [(str "Prompt #1\n" initial-prompt)
                     (str "Response #1\n" strat-response)
                     (str "Prompt #2\n" second-prompt)
                     (str "Response #2\n" action-response)]
      :actions actions})))

(defn get-random-actions! [game turn-actions model log]
  (go-try
   (let [player-id (teg/get-current-player game)
         actions (->> (repeatedly #(actions/random-actions game turn-actions))
                      (take 1000)
                      (vec)
                      (rand-nth))
         score (get (actions/calculate-score
                     game
                     (actions/make-mutation actions))
                    player-id)]
     {:conversation []
      :actions (if (pos? (:absolute score))
                 actions
                 [actions/pass])})))

(defn get-best-actions! [game turn-actions model log]
  (go-try
   (let [player-id (teg/get-current-player game)
         all-actions (->> (actions/all-actions game turn-actions)
                          (take 1000)
                          (mapv (fn [actions]
                                  (let [mutation (actions/make-mutation actions)
                                        score (actions/calculate-score game mutation)]
                                    {:actions actions
                                     :score (-> score player-id)}))))
         sort-normalized (delay
                           (->> all-actions
                                (sort-by (comp :normalized :score) >)))
         sort-absolute (delay
                         (->> all-actions
                              (sort-by (comp :absolute :score) >)))
         best-normalized (delay
                           (first @sort-normalized))
         best-absolute (delay
                         (first @sort-absolute))
         best (if (and (pos? (-> @best-normalized :score :normalized))
                       (pos? (-> @best-normalized :score :absolute)))
                @best-normalized
                @best-absolute)]
     (println "ACTION:" best)
     {:conversation [(str "Options (" (count all-actions) ")"
                          "\n\n"
                          (->> @sort-normalized
                               (map (fn [scored-action]
                                      (pp/write scored-action :stream nil)))
                               (str/join "\n\n")))]
      :actions (if (> (-> best :score :absolute) 0.0)
                 (:actions best)
                 [actions/pass])})))

(defn get-placeholder-actions! [game turn-actions model log]
  (go-try
   ;(<? (a/timeout (* 1000 (+ 2 (rand-int 10)))))
   {:conversation [(str "Prompt #1" "\n" (strategy-prompt game turn-actions))
                   "Response #1\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum eros eu felis rhoncus lacinia. Fusce ullamcorper diam sit amet lacus molestie, aliquam sodales felis hendrerit. Nunc iaculis nulla et convallis volutpat. Duis risus libero, dignissim at leo at, interdum rutrum tortor. Vivamus ac rhoncus sapien. Ut lobortis tristique eleifend. Morbi malesuada, ex eu pretium maximus, libero nulla condimentum magna, nec accumsan diam felis ac tortor. Nulla at justo orci. Donec at convallis arcu, quis pellentesque orci. Duis ornare erat leo, eget bibendum nulla interdum quis. Donec viverra, risus at lacinia congue, odio mauris fringilla mauris, ac faucibus lacus nulla eget massa.
  
  Aenean mattis facilisis urna, sit amet pharetra augue ullamcorper at. Aenean maximus velit purus, quis facilisis erat vulputate pharetra. Aliquam erat volutpat. Praesent arcu metus, rhoncus vitae urna non, vulputate eleifend metus. Nunc tristique, risus nec fermentum efficitur, ex leo consectetur metus, sit amet posuere neque turpis id lectus. Nullam feugiat volutpat egestas. Quisque quis augue aliquam, volutpat lorem et, varius ipsum. Morbi tristique neque quis augue luctus sagittis. Duis tincidunt porta tellus non ultricies. Nulla id diam arcu. Pellentesque elementum scelerisque turpis. Nam varius arcu et dui fringilla gravida a eu tortor. Sed ultricies sem vitae felis varius, vitae maximus ex commodo."
                   "Prompt #2\nACAACA second prompt"
                   "Response #2\nACAACA actions"]
    :actions [actions/pass]}))

(defn handler-by-id [model-id]
  (condp contains? model-id
    #{:random} get-random-actions!
    #{:best} get-best-actions!

    #_(#{:gpt-4.1-mini/basic_t00
         :gpt-4.1-mini/basic_t05
         :gpt-4.1-mini/basic_t10}
       get-basic-actions!

       #{:gpt-4.1-mini/strat_t00
         :gpt-4.1-mini/strat_t05
         :gpt-4.1-mini/strat_t10
         :gpt-5.4-mini
         :gpt-5.4}
       get-strategy!)

    get-placeholder-actions!))
