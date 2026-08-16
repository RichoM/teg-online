(ns teg-online.ai.response
  (:require [teg-online.game :as teg]
            [teg-online.board :as board]
            [teg-online.ai.actions :as actions]
            [clojure.string :as str]))

(defmulti parse-response
  (fn [game _turn-actions _response]
    (:phase game)))

(defmethod parse-response ::teg/add-army [game turn-actions response]
  (try
    (println response)
    (let [actions (if (= "paso" (str/trim (str/lower-case response)))
                    [actions/pass]
                    (->> response
                         (str/split-lines)
                         (map (fn [line] (str/split line #",")))
                         (keep (fn [[country-name units]]
                                 (let [country-id (board/find-country-by-name country-name)
                                       units (parse-long (str/trim units))]
                                   (when (and country-id
                                              (pos-int? units))
                                     (actions/add-army
                                      :country country-id
                                      :units units)))))
                         (actions/ensure-valid game)))]
      (doseq [action actions]
        (println action))
      (if (= (teg/get-extra-army game)
             (reduce + (map :units (concat turn-actions actions))))
        (conj actions actions/pass)
        actions))
    (catch :default error
      (println "ERROR parsing-response!" error)
      nil)))

(defmethod parse-response ::teg/attack [game turn-actions response]
  (try
    (println response)
    (let [actions (if (= "paso" (str/trim (str/lower-case response)))
                    [actions/pass]
                    (->> response
                         (str/split-lines)
                         (map (fn [line] (str/split line #",")))
                         (keep (fn [[attacker-name defender-name move]]
                                 (let [attacker (board/find-country-by-name attacker-name)
                                       defender (board/find-country-by-name defender-name)
                                       move (parse-long (str/trim move))]
                                   (when (and attacker
                                              defender
                                              (pos-int? move))
                                     (actions/attack
                                      :attacker attacker
                                      :defender defender
                                      :move move)))))
                         (actions/ensure-valid game)))]
      (doseq [action actions]
        (println action))
      actions)
    (catch :default error
      (println "ERROR!" error)
      nil)))

(defmethod parse-response ::teg/regroup [game turn-actions response]
  (try
    (println response)
    (let [invalid-regroups (->> turn-actions
                                (map (fn [{:keys [origin destination]}]
                                       [destination origin]))
                                (set))
          actions (if (= "paso" (str/trim response))
                    [actions/pass]
                    (->> response
                         (str/split-lines)
                         (map (fn [line] (str/split line #",")))
                         (keep (fn [[src-name dest-name move]]
                                 (let [src (board/find-country-by-name src-name)
                                       dest (board/find-country-by-name dest-name)
                                       move (parse-long (str/trim move))]
                                   (when (and src dest (pos-int? move)
                                              (not (invalid-regroups [src dest])))
                                     (actions/regroup
                                      :origin src
                                      :destination dest
                                      :move move)))))
                         (actions/ensure-valid game)))]
      (doseq [action actions]
        (println action))
      (if (not= actions/pass (last actions))
        (conj actions actions/pass)
        actions))
    (catch :default error
      (println "ERROR!" error)
      nil)))
