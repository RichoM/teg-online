(ns teg-online.ai.response
  (:require [teg-online.game :as teg]
            [teg-online.board :as board]
            [clojure.string :as str]))

(defmulti apply-action :action)

(defmethod apply-action ::add-army [{:keys [additions]} game]
  (reduce (fn [game [country-id extra-army]]
            (if (> extra-army 0)
              (teg/add-army game country-id extra-army)
              game))
          game
          additions))

(defn valid-attack? [game attacker defender]
  (and (not= (teg/country-owner game attacker)
             (teg/country-owner game defender))
       (> (teg/get-army game attacker) 1)
       (= (teg/country-owner game attacker)
          (teg/get-current-player game))))

(defmethod apply-action ::attack [{:keys [attacks]} game]
  (reduce (fn [game [attacker defender sacrifice move]]
            (let [min-army (max 1 (- (teg/get-army game attacker) sacrifice))]
              (loop [game game]
                (if-not (valid-attack? game attacker defender)
                  game
                  (let [[a-count d-count] (teg/get-dice-count game attacker defender)]
                    (println "Attacking" attacker "->" defender ":" [a-count d-count])
                    (let [a-throw (sort > (repeatedly a-count (partial rand-int 6)))
                          d-throw (sort > (repeatedly d-count (partial rand-int 6)))
                          game (-> game
                                   (teg/attack
                                    [attacker a-throw]
                                    [defender d-throw]))]
                      (cond
                        (= 0 (teg/get-army game defender))
                        (teg/invade game attacker defender
                                    (min move (dec (teg/get-army game attacker))))

                        (> (teg/get-army game attacker) min-army)
                        (recur game)

                        :else game)))))))
          game
          attacks))

(defn valid-regroup? [game src dest]
  (and (= (teg/country-owner game src)
          (teg/country-owner game dest))
       (> (teg/get-army game src) 1)))

(defmethod apply-action ::regroup [{:keys [moves]} game]
  (reduce (fn [game [src dest move]]
            (if-not (valid-regroup? game src dest)
              game
              (teg/regroup game src dest
                           (min move (dec (teg/get-army game src))))))
          game
          moves))

(defmulti parse-response :phase)

(defmethod parse-response ::teg/add-army [game response]
  (try
    (println response)
    (let [additions (->> response
                         (str/split-lines)
                         (map (fn [line] (str/split line #",")))
                         (keep (fn [[country-name units]]
                                 (let [country-id (board/find-country-by-name country-name)
                                       units (parse-long (str/trim units))]
                                   (when (and country-id
                                              (pos-int? units))
                                     [country-id units]))))
                         (vec))
          action {:action ::add-army
                  :additions additions}]
      (println action)
      (apply-action action game)
      action)
    (catch :default error
      (println "ERROR!" error)
      nil)))

(defmethod parse-response ::teg/attack [game response]
  (try
    (println response)
    (let [attacks (->> response
                       (str/split-lines)
                       (map (fn [line] (str/split line #",")))
                       (keep (fn [[attacker-name defender-name sacrifice move]]
                               (let [attacker (board/find-country-by-name attacker-name)
                                     defender (board/find-country-by-name defender-name)
                                     sacrifice (parse-long (str/trim sacrifice))
                                     move (parse-long (str/trim move))]
                                 (when (and attacker
                                            defender
                                            (pos-int? sacrifice)
                                            (pos-int? move))
                                   [attacker defender sacrifice move]))))
                       (vec))
          action {:action ::attack
                  :attacks attacks}]
      (println action)
      (apply-action action game)
      action)
    (catch :default error
      (println "ERROR!" error)
      nil)))

(defmethod parse-response ::teg/regroup [game response]
  (try
    (println response)
    (let [regroups (->> response
                        (str/split-lines)
                        (map (fn [line] (str/split line #",")))
                        (keep (fn [[src-name dest-name move]]
                                (let [src (board/find-country-by-name src-name)
                                      dest (board/find-country-by-name dest-name)
                                      move (parse-long (str/trim move))]
                                  (when (and src dest (pos-int? move))
                                    [src dest move])))))
          action {:action ::regroup
                  :moves regroups}]
      (println action)
      (apply-action action game)
      action)
    (catch :default error
      (println "ERROR!" error)
      nil)))

(comment
  

  (def response "Alemania,Polonia,3,2
Japón,China,2,2
Groenlandia,Nueva York,3,2
")
  

  
  (require '[teg-online.main :refer [game-atom user-atom]])

  (tap> @game-atom)
  (def game @game-atom)

  (parse-response game nil)

  (apply-action {:action ::add-army
                 :additions [[::board/alemani2a 2]
                             [::board/argentina 21]]}
                game)

  (tap> *1)


  )