(ns teg-online.ai.models
  (:require [teg-online.utils.core :as u]))

(def models (->> [{:id :random
                   :name "random"}
                  {:id :best
                   :name "best"}
                  {:id :gpt-4.1-mini/basic_t00
                   :name "gpt-4.1-mini"
                   :temperature 0
                   :display-name "gpt-4.1-mini (basic, t: 0)"}
                  {:id :gpt-4.1-mini/basic_t05
                   :name "gpt-4.1-mini"
                   :temperature 0.5
                   :display-name "gpt-4.1-mini (basic, t: 0.5)"}
                  {:id :gpt-4.1-mini/basic_t10
                   :name "gpt-4.1-mini"
                   :temperature 1.0
                   :display-name "gpt-4.1-mini (basic, t: 1)"}
                  {:id :gpt-4.1-mini/strat_t00
                   :name "gpt-4.1-mini"
                   :temperature 0}
                  {:id :gpt-4.1-mini/strat_t05
                   :name "gpt-4.1-mini"
                   :temperature 0.5
                   :display-name "gpt-4.1-mini (t: 0.5)"}
                  {:id :gpt-4.1-mini/strat_t10
                   :name "gpt-4.1-mini"
                   :temperature 1.0
                   :display-name "gpt-4.1-mini (t: 1)"}
                  {:id :gpt-5.4-mini
                   :name "gpt-5.4-mini"}
                  {:id :gpt-5.4
                   :name "gpt-5.4"}]
                 (mapv (fn [{:keys [name display-name] :as model}]
                         (assoc model :display-name
                                (or display-name name))))))

(def models-by-id (u/index-by :id models))

(assert (= (count models) 
           (count models-by-id)))