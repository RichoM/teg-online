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

(defn get-placeholder-actions! [game turn-actions model log]
  (go-try
   {:conversation []
    :actions [actions/pass]}))

(defn handler-by-id [model-id]
  (condp contains? model-id
    #{:gpt-4.1-mini/basic_t00
      :gpt-4.1-mini/basic_t05
      :gpt-4.1-mini/basic_t10}
    get-basic-actions!

    #{:gpt-4.1-mini/strat_t00
      :gpt-4.1-mini/strat_t05
      :gpt-4.1-mini/strat_t10
      :gpt-5.4-mini
      :gpt-5.4}
    get-strategy!

    get-placeholder-actions!))
