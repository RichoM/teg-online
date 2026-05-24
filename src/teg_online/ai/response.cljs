(ns teg-online.ai.response
  (:refer-clojure :exclude [rand-int])
  (:require [teg-online.game :as teg]
            [teg-online.board :as board]
            [teg-online.utils.core :as u]
            [clojure.string :as str]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Hack to make deterministic random
(def !rng (atom nil))

(defn rand-int [n]
  (if-let [rng @!rng]
    (Math/floor (* (rng) n))
    (cljs.core/rand-int n)))

(defn rand-seed! [seed]
  (reset! !rng (js/Math.seedrandom. seed)))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti apply-action :action)

(defmethod apply-action ::pass [_ game]
  (teg/finish-action game))

(defmethod apply-action ::add-army [{:keys [country units]} game]
  (when-not (> units 0)
    (throw (ex-info "Units should be more than zero"
                    {:game game, :country-id country :units units})))
  ;; TODO(Richo): This assertion should be in teg/add-army
  (teg/assert-country-owner game country (teg/get-current-player game))
  (teg/add-army game country units))

(defn valid-attack? [game attacker defender]
  (and (not= (teg/country-owner game attacker)
             (teg/country-owner game defender))
       (> (teg/get-army game attacker) 1)
       (= (teg/country-owner game attacker)
          (teg/get-current-player game))))

(defmethod apply-action ::attack [{:keys [attacker defender sacrifice move]} game]
  (let [min-army (max 1 (- (teg/get-army game attacker) sacrifice))]
    (loop [game game]
      (let [[a-count d-count] (teg/get-dice-count game attacker defender)
            a-throw (sort > (repeatedly a-count (partial rand-int 6)))
            d-throw (sort > (repeatedly d-count (partial rand-int 6)))
            game (-> game
                     (teg/attack
                      [attacker a-throw]
                      [defender d-throw]))]
        (cond
          (= 0 (teg/get-army game defender))
          (teg/invade game attacker defender
                      (min 3 move (dec (teg/get-army game attacker))))
      
          (> (teg/get-army game attacker) min-army)
          (if (valid-attack? game attacker defender)
            (recur game)
            game)
      
          :else game)))))

(defn valid-regroup? [game src dest]
  (and (= (teg/country-owner game src)
          (teg/country-owner game dest))
       (> (teg/get-army game src) 1)))

(defmethod apply-action ::regroup [{:keys [origin destination move]} game]
  (when-not (valid-regroup? game origin destination)
    (throw (ex-info "Invalid regroup"
                    {:game game :origin origin :destination destination})))
  (teg/regroup game origin destination
               (min move (dec (teg/get-army game origin)))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def pass {:action ::pass})

(defn valid? [game action]
  (try
    (apply-action action game)
    true
    (catch :default error
      (println "Invalid action:" (ex-message error))
      false)))

(defn ensure-valid [game actions]
  (let [valid-actions (->> actions
                           (filterv (partial valid? game))
                           (take-while #(not= pass %))
                           (vec))]
    (if (seq valid-actions)
      valid-actions
      [pass])))


(defmulti parse-response
  (fn [game _turn-actions _response]
    (:phase game)))

(defmethod parse-response ::teg/add-army [game turn-actions response]
  (try
    (println response)
    (let [actions (if (= "paso" (str/trim (str/lower-case response)))
                    [pass]
                    (->> response
                         (str/split-lines)
                         (map (fn [line] (str/split line #",")))
                         (keep (fn [[country-name units]]
                                 (let [country-id (board/find-country-by-name country-name)
                                       units (parse-long (str/trim units))]
                                   (when (and country-id
                                              (pos-int? units))
                                     {:action ::add-army
                                      :country country-id
                                      :units units}))))
                         (ensure-valid game)))]
      (doseq [action actions]
        (println action))
      (if (= (teg/get-extra-army game)
             (reduce + (map :units (concat turn-actions actions))))
        (conj actions pass)
        actions))
    (catch :default error
      (println "ERROR parsing-response!" error)
      nil)))

(defmethod parse-response ::teg/attack [game turn-actions response]
  (try
    (println response)
    (let [actions (if (= "paso" (str/trim (str/lower-case response)))
                    [pass]
                    (->> response
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
                                     {:action ::attack
                                      :attacker attacker
                                      :defender defender
                                      :sacrifice sacrifice
                                      :move move}))))
                         (ensure-valid game)))]
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
                    [pass]
                    (->> response
                         (str/split-lines)
                         (map (fn [line] (str/split line #",")))
                         (keep (fn [[src-name dest-name move]]
                                 (let [src (board/find-country-by-name src-name)
                                       dest (board/find-country-by-name dest-name)
                                       move (parse-long (str/trim move))]
                                   (when (and src dest (pos-int? move)
                                              (not (invalid-regroups [src dest])))
                                     {:action ::regroup
                                      :origin src
                                      :destination dest
                                      :move move}))))
                         (ensure-valid game)))]
      (doseq [action actions]
        (println action))
      (if (not= pass (last actions))
        (conj actions pass)
        actions))
    (catch :default error
      (println "ERROR!" error)
      nil)))

(comment
  
  
  (take-while #(not= pass %)
              [1 2 3
               ])

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