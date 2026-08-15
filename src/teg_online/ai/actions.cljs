(ns teg-online.ai.actions
  (:require [teg-online.game :as teg]
            [teg-online.board :as board]))

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
