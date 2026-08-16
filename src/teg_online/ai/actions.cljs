(ns teg-online.ai.actions
  (:require [teg-online.game :as teg]
            [teg-online.board :as board]
            [teg-online.ai.scoring :as score]))

(defn get-valid-regroups [game]
  (let [player-id (teg/get-current-player game)
        player-countries (set (teg/player-countries game player-id))]
    (->> player-countries
         (filter (fn [country-id]
                   (> (teg/get-army game country-id) 1)))
         (mapcat (fn [country-id]
                   (->> (:neighbours (board/countries country-id))
                        (filter player-countries)
                        (map (fn [neighbour]
                               [country-id neighbour]))))))))

(defn get-valid-attacks [game]
  (let [player-id (teg/get-current-player game)
        player-countries (set (teg/player-countries game player-id))]
    (->> player-countries
         (filter (fn [country-id]
                   (> (teg/get-army game country-id) 1)))
         (mapcat (fn [country-id]
                   (->> (:neighbours (board/countries country-id))
                        (remove player-countries)
                        (map (fn [neighbour]
                               [country-id neighbour]))))))))


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

(defmethod apply-action ::attack [{:keys [attacker defender move]} game]
  (when-not (valid-attack? game attacker defender)
    (throw (ex-info "Invalid attack"
                    {:game game :attacker attacker :defender defender})))
  (let [[a-count d-count] (teg/get-dice-count game attacker defender)
        a-throw (sort > (repeatedly a-count (partial rand-int 6)))
        d-throw (sort > (repeatedly d-count (partial rand-int 6)))
        game (-> game
                 (teg/attack
                  [attacker a-throw]
                  [defender d-throw]))]
    (if (= 0 (teg/get-army game defender))
      (teg/invade game attacker defender
                  (min 3 move (dec (teg/get-army game attacker))))
      game)))

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

(defn add-army 
  [& {:keys [country units]}]
  {:action ::add-army
   :country country
   :units units})

(defn attack
  [& {:keys [attacker defender move]}]
  {:action ::attack
   :attacker attacker
   :defender defender
   :move move})

(defn regroup
  [& {:keys [origin destination move]}]
  {:action ::regroup
   :origin origin
   :destination destination
   :move move})


(defn valid? [game action]
  (try
    (apply-action action game)
    true
    (catch :default error
      (println "Invalid action:" (ex-message error))
      false)))

(defn ensure-valid [game actions]
  ; TODO(Richo): Some game states cannot be passed! If we have an invalid action for
  ; add-army we fail with a pass when we should retry first!
  (let [valid-actions (->> actions
                           (filterv (partial valid? game))
                           (take-while #(not= pass %))
                           (vec))]
    (if (seq valid-actions)
      valid-actions
      [pass])))

(defn try-apply-action [game action]
  (try
    (apply-action action game)
    (catch :default err
      (println "ERROR trying to apply action:" err)
      game)))

(defn mean [coll]
  (/ (reduce + coll)
     (count coll)))

(defn calculate-score
  ([game mutation]
   (calculate-score game mutation
                    (if (isa? (teg/get-current-phase game)
                              ::teg/attack)
                      100
                      1)))
  ([game mutation times]
   (let [initial-scores (score/normalized-scores game)
         delta-scores
         (apply merge-with into
                (->> (repeatedly times #(mutation game))
                     (map score/normalized-scores)
                     (map (fn [scores]
                            (->> scores
                                 (map (fn [[player-id score]]
                                        [player-id (- score (initial-scores player-id))]))
                                 (into {}))))
                     (map #(update-vals % vector))))]
     (update-vals delta-scores mean))))

(defn make-mutation [actions]
  (fn [game]
    (reduce (fn [game action]
              (try-apply-action game action))
            game
            actions)))


(defmulti random-actions (fn [game _turn-actions] (:phase game)))

(defmethod random-actions ::teg/add-army [game turn-actions]
  (let [player-id (teg/get-current-player game)]
    (loop [actions []
           countries (set (teg/player-countries game player-id))
           remaining (- (teg/get-extra-army game)
                        (reduce + (map :units turn-actions)))]
      (if (<= remaining 0)
        (conj actions pass)
        (let [country (rand-nth (vec countries))
              units (inc (rand-int remaining))]
          (recur (conj actions (add-army
                                :country country
                                :units units))
                 (disj countries country)
                 (- remaining units)))))))

(defmethod random-actions ::teg/attack [game _]
  (let [valid-attacks (get-valid-attacks game)]
    (if (seq valid-attacks)
      (let [[attacker defender] (rand-nth valid-attacks)
            attacker-army (teg/get-army game attacker)
            move (inc (rand-int (min 3 (dec attacker-army))))]
        [(attack
          :attacker attacker
          :defender defender
          :move move)])
      [pass])))

(defmethod random-actions :default [_ _] [pass])



(comment

  (do
    (def game (-> @teg-online.main/state :game))
    (def player-id (teg/get-current-player game)))

  (:phase game)
  (def actions (random-actions game))

  (get-valid-attacks game)


  (time (tap> (->> (repeatedly #(random-actions game))
                   (map (fn [actions]
                          (let [mutation (make-mutation actions)
                                score (calculate-score game mutation 1)]
                            {:actions actions
                             :score (-> score player-id)})))
                   (take 100)
                   (sort-by :score >))))

  (->> (repeatedly #(random-actions game []))
       (take 100)
       (sort-by (fn [actions]
                  (let [mutation (make-mutation actions)
                        score (calculate-score game mutation)]
                    (-> score player-id)))
                >)
       (first))
  
  (tap> *1)

  (rand-nth (teg/player-countries game player-id))


  (sort (set (take 1000 (repeatedly #(inc (rand-int 10))))))
  )