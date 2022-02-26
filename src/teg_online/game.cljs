(ns teg-online.game
  (:require [teg-online.board :as board]
            [teg-online.utils.core :as u]))

(derive ::attack ::game-phase)
(derive ::regroup ::game-phase)
(derive ::add-army ::game-phase)
(derive ::add-army-1 ::add-army) ; Special case for first round
(derive ::add-army-2 ::add-army) ; Special case for second round

(defn new-game []
  {:players {}
   :countries (reduce-kv #(assoc %1 %2 {:id %2, :owner nil, :army 0})
                         {}
                         board/countries)
   :turn-order []
   :phase nil
   :turn nil})

(defn new-player [id name]
  {:id id
   :name name
   :cards #{}})

(defn join-game [game id name]
  (if (contains? (game :players) id)
    (throw (ex-info (u/format "Player with id %1 already joined" id)
                    {:game game, :id id, :name name}))
    (-> game
        (update :turn-order conj id)
        (update :players assoc id (new-player id name)))))

(defn start-game [game]
  (assoc game
         :turn 0
         :phase ::add-army-1))

(defn game-started? [game]
  (some? (game :turn)))

(defn get-players [game]
  (map (game :players)
       (game :turn-order)))

(defn get-player [game player-id]
  (get-in game [:players player-id]))

(defn get-current-player [{:keys [turn turn-order]}]
  (when turn (nth turn-order (mod turn (count turn-order)))))

(defn get-current-player-name [game]
  (:name (get-player game (get-current-player game))))

(defn get-current-phase [{:keys [phase]}] phase)

(defn get-army [game country-id]
  (get-in game [:countries country-id :army]))

(defn player-countries [game player-id]
  (map :id (get (group-by :owner (-> game :countries vals))
                player-id)))

(defn player-army-count [game player-id]
  (reduce + (map :army (get (group-by :owner (-> game :countries vals))
                            player-id))))

(defn calculate-extra-army 
  ([game] (calculate-extra-army game (get-current-player game)))
  ([{:keys [turn turn-order] :as game} player-id]
   (when turn
     (let [player-count (count turn-order)]
       (condp > turn
         player-count 5
         (* 2 player-count) 3
         (max 3 (js/Math.floor
                 (/ (count (player-countries game player-id))
                    2))))))))

(defn distribute-countries
  ([game] (distribute-countries game (shuffle (keys board/countries))))
  ([game countries]
   (let [countries-for-player (u/deal countries (get-players game))
         temp (atom game)]
     (doseq [[{player :id} countries] countries-for-player]
       (doseq [country countries]
         (swap! temp assoc-in [:countries country] 
                {:id country, :owner player, :army 1})))
     @temp)))

(defn country-exists? [game country-id]
  (contains? (game :countries) country-id))

(defn country-owner [game country-id]
  (get-in game [:countries country-id :owner]))

(defn assert-valid-country [game country]
  (when-not (country-exists? game country)
    (throw (ex-info (u/format "Country %1 does not exist" country)
                    {:game game, :country-id country})))
  (when-not (country-owner game country)
    (throw (ex-info (u/format "Country %1 has no owner" country)
                    {:game game, :country-id country}))))

(defn add-army [game country army]
  (assert-valid-country game country)
  (update-in game [:countries country :army] + army))

(defn next-turn [game]
  (update game :turn inc))

(defmulti get-next-phase :phase)
(defmethod get-next-phase ::add-army-1 [_] ::add-army-2)
(defmethod get-next-phase ::add-army-2 [_] ::attack)
(defmethod get-next-phase ::add-army [_] ::attack)
(defmethod get-next-phase ::attack [_] ::regroup)
(defmethod get-next-phase ::regroup [{:keys [turn players]}]
  (if (zero? (mod (inc turn) (count players)))
    ::add-army
    ::attack))

(defn next-phase [game]
  (assoc game :phase (get-next-phase game)))

(defmulti finish-action* :phase)

(defmethod finish-action* ::add-army [{:keys [turn players] :as game}]
  (if (zero? (mod (inc turn) (count players)))
      (next-turn (next-phase game))
      (next-turn game)))

(defmethod finish-action* ::attack [game]
  (next-phase game))

(defmethod finish-action* ::regroup [game]
  (next-turn (next-phase game)))

(defn finish-action [game]
  (let [game' (finish-action* game)
        current-player (get-current-player game')]
    (if-not (seq (player-countries game' current-player))
      (finish-action game')
      game')))

(defn get-dice-count [game attacker-id defender-id]
  [(min 3 (dec (get-army game attacker-id)))
   (min 3 (get-army game defender-id))])

(defn assert-neighbours [game country-1 country-2]
  (when-not (contains? (get-in board/countries [country-1 :neighbours])
                       country-2)
    (throw (ex-info (u/format "Countries %1 and %2 are not neighbours" country-1 country-2)
                    {:game game, :countries [country-1 country-2]}))))

(defn assert-country-owner [game country-id player-id]
  (when-not (= player-id (country-owner game country-id))
    (throw (ex-info (u/format "Country %1 doesn't belong to player %2" country-id player-id)
                    {:game game, :country country-id, :player player-id}))))

(defn assert-country-owner-any [game country-id players]
  (when-not (contains? players (country-owner game country-id))
    (throw (ex-info (u/format "Country %1 doesn't belong to any of the following players: %2" country-id (keys players))
                    {:game game, :country country-id, :players players}))))

(defn assert-valid-throw [game country-id allowed throw]
  (let [throw-count (count throw)]
    (when-not (= allowed throw-count)
      (throw (ex-info (u/format "Country %1 is allowed to throw %2 dice but threw %3"
                                country-id allowed throw-count)
                      {:game game, :country country-id, :allowed allowed, :throw throw})))))

(defn assert-valid-phase [game expected-phase]
  (let [actual-phase (game :phase)]
    (when-not (= actual-phase expected-phase)
      (throw (ex-info (u/format "Game should be in phase %1 but was %2" expected-phase actual-phase)
                      {:game game, :expected expected-phase, :actual actual-phase})))))

(defn attack [game [attacker-id attacker-throw] [defender-id defender-throw]]
  (assert-valid-country game attacker-id)
  (assert-valid-country game defender-id)
  (assert-neighbours game attacker-id defender-id)
  (let [current-player (get-current-player game)]
    (assert-country-owner game attacker-id current-player)
    (assert-country-owner-any game defender-id (dissoc (game :players) current-player)))
  (let [[a-count d-count] (get-dice-count game attacker-id defender-id)]
    (assert-valid-throw game attacker-id a-count attacker-throw)
    (assert-valid-throw game defender-id d-count defender-throw))
  (assert-valid-phase game ::attack)
  (let [dice-count (min (count attacker-throw)
                        (count defender-throw))
        attacker-wins (map (fn [a d] (> a d))
                           (take dice-count (sort > attacker-throw))
                           (take dice-count (sort > defender-throw)))
        defender-hits (count (filter true? attacker-wins))
        attacker-hits (count (filter false? attacker-wins))]
    (-> game
        (update-in [:countries defender-id :army] - defender-hits)
        (update-in [:countries attacker-id :army] - attacker-hits))))

(defn assert-zero-army [game country-id]
  (let [army (get-army game country-id)]
    (when-not (zero? army)
      (throw (ex-info (u/format "Country %1 should have 0 army but it had %2" country-id army)
                      {:game game, :country country-id, :army army})))))

(defn assert-valid-invading-army [game attacker-id moving-army]
  (when (< moving-army 1)
    (throw (ex-info (u/format "Country %1 should invade with at least 1 army" attacker-id)
                      {:game game, :country attacker-id, :army moving-army})))
  (let [max-army (min 3 (dec (get-army game attacker-id)))]
    (when (> moving-army max-army)
      (throw (ex-info (u/format "Country %1 should invade with at most %2 army" attacker-id max-army)
                    {:game game, :country attacker-id, :army moving-army})))))

(defn invade [game attacker-id defender-id moving-army]
  (assert-valid-country game attacker-id)
  (assert-valid-country game defender-id)
  (assert-neighbours game attacker-id defender-id)
  (assert-zero-army game defender-id)
  (assert-valid-invading-army game attacker-id moving-army)
  (let [current-player (get-current-player game)]
    (assert-country-owner game attacker-id current-player)
    (assert-country-owner-any game defender-id (dissoc (game :players) current-player))
    (-> game
        (update-in [:countries attacker-id :army] - moving-army)
        (update-in [:countries defender-id :army] + moving-army)
        (assoc-in [:countries defender-id :owner] current-player))))

(defn assert-valid-regrouping-army [game src-id moving-army]
  (when (< moving-army 1)
    (throw (ex-info (u/format "Country %1 should regroup with at least 1 army" src-id)
                      {:game game, :country src-id, :army moving-army})))
  (let [max-army (dec (get-army game src-id))]
    (when (> moving-army max-army)
      (throw (ex-info (u/format "Country %1 should regroup with at most %2 army" src-id max-army)
                    {:game game, :country src-id, :army moving-army})))))

(defn regroup [game src-id dst-id moving-army]
  (assert-valid-country game src-id)
  (assert-valid-country game dst-id)
  (assert-neighbours game src-id dst-id)
  (assert-valid-regrouping-army game src-id moving-army)
  (let [current-player (get-current-player game)]
    (assert-country-owner game src-id current-player)
    (assert-country-owner game dst-id current-player))
  (-> game
      (update-in [:countries src-id :army] - moving-army)
      (update-in [:countries dst-id :army] + moving-army)))

(comment
(map (fn [a b] (> a b)) 
     [1 2 3] [4 5 6])
  (u/deal (range 13) "ABC")

  (def game @game)
  (def game (atom (new-game)))
  (swap! game join-game ::p1 "Richo")
  (swap! game join-game ::p2 "Lechu")
  (swap! game join-game ::p3 "Diego")
  (swap! game distribute-countries)

  (map :id (get (->> game :countries vals (group-by :owner))
       ::p1))
  (player-countries game ::p1)
  game
  (update-in game [:countries ::board/alaska :army] + 4)

  (reduce + (-> @game :players (nth 0) :army vals))
  )