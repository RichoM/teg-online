(ns teg-online.ai.models 
  (:require
    [teg-online.utils.core :as u]))

(def models (->> [{:id :random
                   :name "random"}
                  {:id :gpt-4.1-mini/basic_t00
                   :name "gpt-4.1-mini"
                   :basic? true
                   :temperature 0
                   :display-name "gpt-4.1-mini (basic, t: 0)"}
                  #_{:id :gpt-4.1-mini/basic_t04
                     :name "gpt-4.1-mini"
                     :basic? true
                     :temperature 0.4
                     :display-name "gpt-4.1-mini (basic, t: 0.4)"}
                  {:id :gpt-4.1-mini/basic_t05
                   :name "gpt-4.1-mini"
                   :basic? true
                   :temperature 0.5
                   :display-name "gpt-4.1-mini (basic, t: 0.5)"}
                  #_{:id :gpt-4.1-mini/basic_t07
                     :name "gpt-4.1-mini"
                     :basic? true
                     :temperature 0.7
                     :display-name "gpt-4.1-mini (basic, t: 0.7)"}
                  {:id :gpt-4.1-mini/basic_t10
                   :name "gpt-4.1-mini"
                   :basic? true
                   :temperature 1.0
                   :display-name "gpt-4.1-mini (basic, t: 1)"}
                  {:id :gpt-4.1-mini/strat_t00
                   :name "gpt-4.1-mini"
                   :basic? false
                   :temperature 0}
                  #_{:id :gpt-4.1-mini/strat_t04
                     :name "gpt-4.1-mini"
                     :basic? false
                     :temperature 0.4
                     :display-name "gpt-4.1-mini (t: 0.4)"}
                  {:id :gpt-4.1-mini/strat_t05
                   :name "gpt-4.1-mini"
                   :basic? false
                   :temperature 0.5
                   :display-name "gpt-4.1-mini (t: 0.5)"}
                  #_{:id :gpt-4.1-mini/strat_t07
                     :basic? false
                     :temperature 0.7
                     :name "gpt-4.1-mini (t: 0.7)"}
                  {:id :gpt-4.1-mini/strat_t10
                   :name "gpt-4.1-mini"
                   :basic? false
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