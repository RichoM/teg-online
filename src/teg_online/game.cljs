(ns teg-online.game
  (:require [clojure.set :as set]
            [teg-online.board :as board]
            [teg-online.utils.core :as u]))

(defn new-game []
  {:players {}
   :countries (reduce-kv #(assoc %1 %2 {:id %2, :owner nil, :army 0})
                         {}
                         board/countries)
   :cards (->> board/cards
               (map (fn [[country type]]
                      {:country country, :type type, :owner nil, :used? false}))
               (u/index-by :country))
   :turn-order []
   :phase nil
   :turn nil
   :winner nil
   :current-turn nil})

(defn new-player [id name]
  {:id id
   :goal nil
   :name name
   :playing? true
   :exchanges 0})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Queries

(defn game-started? [game]
  (some? (game :turn)))

(defn game-over? [game]
  (some? (game :winner)))

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

(defn still-playing? [game player-id]
  (and (seq (player-countries game player-id))
       (:playing? (get-player game player-id))))

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

(defn get-extra-army [game]
  (get-in game [:current-turn :extra-army]))

(defn country-exists? [game country-id]
  (contains? (game :countries) country-id))

(defn country-owner [game country-id]
  (get-in game [:countries country-id :owner]))

(defn is-next-player-the-first-player? [{:keys [turn players]}]
  (zero? (mod (inc turn) (count players))))

(defn player-continents [game player-id]
  (let [countries (set (player-countries game player-id))]
    (filter (fn [continent]
              (set/subset? (board/get-countries-by-continent continent)
                           countries))
            [::board/asia
             ::board/europa
             ::board/north-america
             ::board/south-america
             ::board/africa
             ::board/oceania])))

(defn get-dice-count [game attacker-id defender-id]
  [(min 3 (dec (get-army game attacker-id)))
   (min 3 (get-army game defender-id))])

(defn player-countries-by-continent [game player-id]
  (->> (player-countries game player-id)
       (map board/countries)
       (group-by :continent)))

(declare occupation-goals)
(declare destruction-goal)

(defn get-player-goal [game player-id]
  (when-let [goal-idx (get-in game [:players player-id :goal])]
    (if (< goal-idx (count occupation-goals))
      (get occupation-goals goal-idx)
      (destruction-goal (nth (get-players game)
                             (- goal-idx
                                (count occupation-goals)))))))

(defn draw-card? [game]
  (get-in game [:current-turn :draw-card?]))

(defn get-player-cards [game player-id]
  (->> (vals (game :cards))
       (filter #(= player-id (:owner %)))
       (map :country)))

(defn get-free-cards [game]
  (->> (vals (game :cards))
       (filter #(nil? (:owner %)))
       (map :country)))

(defn- group-cards-by-type [game cards]
  (let [grouped-cards (->> cards
                           (map (game :cards))
                           (group-by :type))]
    (reduce (fn [grouped-cards card]
              (-> grouped-cards
                  (update ::board/balloon conj card)
                  (update ::board/cannon conj card)
                  (update ::board/ship conj card)))
            (dissoc grouped-cards ::board/all)
            (grouped-cards ::board/all))))

(defn valid-exchange? [game cards]
  (let [cards (->> (set cards)
                   (group-cards-by-type game))]
    (or (>= (count (keys cards)) 3)
        (some (fn [[_ c]] (>= (count c) 3)) cards))))

(defn can-exchange?
  ([game] (can-exchange? game (get-current-player game)))
  ([game player-id]
   (valid-exchange? game (get-player-cards game player-id))))

(defn get-exchange-bonus
  ([game] (get-exchange-bonus game (get-current-player game)))
  ([game player-id]
   (let [exchanges (get-in game [:players player-id :exchanges] 0)
         bonus (concat [4 7 10]
                       (iterate (partial + 5) 15))]
     (nth bonus exchanges))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Game phases

(derive ::attack ::game-phase)
(derive ::regroup ::game-phase)
(derive ::add-army ::game-phase)
(derive ::add-army-1 ::add-army) ; Special case for first round
(derive ::add-army-2 ::add-army) ; Special case for second round
(derive ::add-army-continent ::add-army) ; Special cases for continent bonus
(derive ::add-army-asia ::add-army-continent)
(derive ::add-army-europa ::add-army-continent)
(derive ::add-army-north-america ::add-army-continent)
(derive ::add-army-south-america ::add-army-continent)
(derive ::add-army-africa ::add-army-continent)
(derive ::add-army-oceania ::add-army-continent)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Goals

(def common-goal
  {:name "Ocupar 30 pa??ses"
   :validator-fn (fn [_ new-game player-id]
                   (>= (count (player-countries new-game player-id)) 30))})

(def occupation-goals
  [{:name "Ocupar ??frica, 5 pa??ses de Am??rica del Norte y 4 pa??ses de Europa"
    :validator-fn (fn [_ new-game player-id]
                    (let [countries (player-countries-by-continent new-game player-id)]
                      (and (>= (-> ::board/africa countries count)
                               (-> ::board/africa board/get-countries-by-continent count))
                           (>= (-> ::board/north-america countries count) 5)
                           (>= (-> ::board/europa countries count) 4))))}
   {:name "Ocupar Am??rica del Sur, 7 pa??ses de Europa y 3 pa??ses lim??trofes entre s?? en cualquier lugar del mapa"
    :validator-fn (fn [_ new-game player-id]
                    (let [countries (player-countries new-game player-id)
                          triplets (board/neighbour-triplets countries)]
                      (some (fn [triplet]
                              (let [countries-without-triplet (->> countries
                                                                   (remove triplet)
                                                                   (map board/countries)
                                                                   (group-by :continent))]
                                (and (>= (-> ::board/south-america countries-without-triplet count)
                                         (-> ::board/south-america board/get-countries-by-continent count))
                                     (>= (-> ::board/europa countries-without-triplet count) 7))))
                            triplets)))}
   {:name "Ocupar Asia y 2 pa??ses de Am??rica del Sur"
    :validator-fn (fn [_ new-game player-id]
                    (let [countries (player-countries-by-continent new-game player-id)]
                      (and (>= (-> ::board/asia countries count)
                               (-> ::board/asia board/get-countries-by-continent count))
                           (>= (-> ::board/south-america countries count) 2))))}
   {:name "Ocupar Europa, 4 pa??ses de Asia y 2 pa??ses de Am??rica del Sur"
    :validator-fn (fn [_ new-game player-id]
                    (let [countries (player-countries-by-continent new-game player-id)]
                      (and (>= (-> ::board/europa countries count)
                               (-> ::board/europa board/get-countries-by-continent count))
                           (>= (-> ::board/asia countries count) 4)
                           (>= (-> ::board/south-america countries count) 2))))}
   {:name "Ocupar am??rica del Norte, 2 pa??ses de Ocean??a y 4 de Asia"
    :validator-fn (fn [_ new-game player-id]
                    (let [countries (player-countries-by-continent new-game player-id)]
                      (and (>= (-> ::board/north-america countries count)
                               (-> ::board/north-america board/get-countries-by-continent count))
                           (>= (-> ::board/oceania countries count) 2)
                           (>= (-> ::board/asia countries count) 4))))}
   {:name "Ocupar 2 pa??ses de Ocean??a, 2 pa??ses de ??frica, 2 pa??ses de Am??rica del Sur, 3 pa??ses de Europa, 4 de Am??rica del Norte y 3 de Asia"
    :validator-fn (fn [_ new-game player-id]
                    (let [countries (player-countries-by-continent new-game player-id)]
                      (and (>= (-> ::board/oceania countries count) 2)
                           (>= (-> ::board/africa countries count) 2)
                           (>= (-> ::board/south-america countries count) 2)
                           (>= (-> ::board/europa countries count) 3)
                           (>= (-> ::board/north-america countries count) 4)
                           (>= (-> ::board/asia countries count) 3))))}
   {:name "Ocupar Ocean??a, Am??rica del Norte y 2 pa??ses de Europa"
    :validator-fn (fn [_ new-game player-id]
                    (let [countries (player-countries-by-continent new-game player-id)]
                      (and (>= (-> ::board/north-america countries count)
                               (-> ::board/north-america board/get-countries-by-continent count))
                           (>= (-> ::board/oceania countries count)
                               (-> ::board/oceania board/get-countries-by-continent count))
                           (>= (-> ::board/europa countries count) 2))))}
   {:name "Ocupar Am??rica del Sur, ??frica y 4 pa??ses de Asia"
    :validator-fn (fn [_ new-game player-id]
                    (let [countries (player-countries-by-continent new-game player-id)]
                      (and (>= (-> ::board/south-america countries count)
                               (-> ::board/south-america board/get-countries-by-continent count))
                           (>= (-> ::board/africa countries count)
                               (-> ::board/africa board/get-countries-by-continent count))
                           (>= (-> ::board/asia countries count) 4))))}
   {:name "Ocupar Ocean??a, ??frica y 5 pa??ses de Am??rica del Norte"
    :validator-fn (fn [_ new-game player-id]
                    (let [countries (player-countries-by-continent new-game player-id)]
                      (and (>= (-> ::board/oceania countries count)
                               (-> ::board/oceania board/get-countries-by-continent count))
                           (>= (-> ::board/africa countries count)
                               (-> ::board/africa board/get-countries-by-continent count))
                           (>= (-> ::board/north-america countries count) 5))))}])

(defn destruction-goal [{:keys [id name]}]
  {:name (u/format "Destruir al ej??rcito del jugador %1" name)
   :validator-fn (fn [old-game new-game _]
                   (and (or (nil? (get-player old-game id))
                            (seq (player-countries old-game id)))
                        (empty? (player-countries new-game id))))})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Assertions

(defn assert-valid-country [game country]
  (when-not (country-exists? game country)
    (throw (ex-info (u/format "Country %1 does not exist" country)
                    {:game game, :country-id country})))
  (when-not (country-owner game country)
    (throw (ex-info (u/format "Country %1 has no owner" country)
                    {:game game, :country-id country}))))

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

(defn assert-valid-regrouping-army [game src-id moving-army]
  (when (< moving-army 1)
    (throw (ex-info (u/format "Country %1 should regroup with at least 1 army" src-id)
                      {:game game, :country src-id, :army moving-army})))
  (let [max-army (dec (get-army game src-id))]
    (when (> moving-army max-army)
      (throw (ex-info (u/format "Country %1 should regroup with at most %2 army" src-id max-army)
                    {:game game, :country src-id, :army moving-army})))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; End turn

(defn reset-current-turn [game]
  (assoc game :current-turn
         {:draw-card? false
          :extra-army (calculate-extra-army game)}))

(defn next-turn [game]
  (-> game 
      (update :turn inc)
      (reset-current-turn)))

(defn get-next-phase-add-army [game next-player & [begin-continent]]
  (let [continents (player-continents game next-player)]
    (case (if begin-continent
            (fnext (drop-while #(not= % begin-continent)
                               continents))
            (first continents))
      ::board/asia ::add-army-asia
      ::board/europa ::add-army-europa
      ::board/north-america ::add-army-north-america
      ::board/south-america ::add-army-south-america
      ::board/africa ::add-army-africa
      ::board/oceania ::add-army-oceania
      ::add-army)))

(defmulti get-next-phase :phase)

(defmethod get-next-phase ::add-army-1 [{:keys [turn players] :as game}]
  (if (is-next-player-the-first-player? game)
    ::add-army-2
    ::add-army-1))

(defmethod get-next-phase ::add-army-2 [{:keys [turn players] :as game}]
  (if (is-next-player-the-first-player? game)
    ::attack
    ::add-army-2))

(defmethod get-next-phase ::add-army [{:keys [turn players] :as game}]
  (if (is-next-player-the-first-player? game)
    ::attack
    (get-next-phase-add-army game (get-current-player (next-turn game)))))

(defmethod get-next-phase ::attack [_] ::regroup)

(defmethod get-next-phase ::regroup [{:keys [turn players] :as game}]
  (if (is-next-player-the-first-player? game)
    (get-next-phase-add-army game (get-current-player (next-turn game)))
    ::attack))

(defmethod get-next-phase ::add-army-asia [game]
  (get-next-phase-add-army game (get-current-player game) ::board/asia))

(defmethod get-next-phase ::add-army-europa [game]
  (get-next-phase-add-army game (get-current-player game) ::board/europa))

(defmethod get-next-phase ::add-army-north-america [game]
  (get-next-phase-add-army game (get-current-player game) ::board/north-america))

(defmethod get-next-phase ::add-army-south-america [game]
  (get-next-phase-add-army game (get-current-player game) ::board/south-america))

(defmethod get-next-phase ::add-army-africa [game]
  (get-next-phase-add-army game (get-current-player game) ::board/africa))

(defmethod get-next-phase ::add-army-oceania [game]
  (get-next-phase-add-army game (get-current-player game) ::board/oceania))

(defn next-phase [game]
  (assoc game :phase (get-next-phase game)))

(defmulti finish-action* :phase)

(defmethod finish-action* ::add-army [game]
  (next-turn (next-phase game)))

(defmethod finish-action* ::add-army-continent [game]
  (next-phase game))

(defmethod finish-action* ::attack [game]
  (next-phase game))

(defmethod finish-action* ::regroup [game]
  (next-turn (next-phase game)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Actions

(defn with-winner-check [action]
  (fn [game & args]
    (if (game :winner)
      game ; Do nothing if the game is already over
      (let [player-id (get-current-player game)
            validator-fn (get (get-player-goal game player-id)
                              :validator-fn
                              (constantly false))
            new-game (apply action game args)]
        (if (and (nil? (new-game :winner))
                 (or (validator-fn game new-game player-id)
                     ((common-goal :validator-fn) game new-game player-id)))
          (assoc new-game :winner player-id)
          new-game)))))

(defn join-game [game id name]
  (if (contains? (game :players) id)
    (throw (ex-info (u/format "Player with id %1 already joined" id)
                    {:game game, :id id, :name name}))
    (-> game
        (update :turn-order conj id)
        (update :players assoc id (new-player id name)))))

(defn start-game [game]
  (-> game
      (assoc :turn 0
             :phase ::add-army-1)
      (reset-current-turn)))

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

(defn distribute-goals [game]
  (let [goals (atom #{})
        rand-goal (fn []
                    (let [goal (rand-int 15)]
                      (if (contains? @goals goal)
                        (recur)
                        goal)))
        temp (atom game)]
    (doseq [player-id (game :turn-order)]
      (let [goal (let [rnd (rand-goal)]
                   (if (< rnd (count occupation-goals))
                     rnd
                     (let [target (rand-nth (remove #(= % player-id)
                                                    (game :turn-order)))]
                       (+ (count occupation-goals)
                          (u/index-of (game :turn-order) target)))))]
        (swap! goals conj goal)
        (swap! temp assoc-in [:players player-id :goal] goal)))
    @temp))

(def add-army
  (with-winner-check
    (fn [game country army]
      (assert-valid-country game country)
      (update-in game [:countries country :army] + army))))

(def attack
  (with-winner-check
    (fn [game [attacker-id attacker-throw] [defender-id defender-throw]]
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
            (update-in [:countries attacker-id :army] - attacker-hits))))))

(def invade 
  (with-winner-check
    (fn [game attacker-id defender-id moving-army]
      (assert-valid-country game attacker-id)
      (assert-valid-country game defender-id)
      (assert-neighbours game attacker-id defender-id)
      (assert-zero-army game defender-id)
      (assert-valid-invading-army game attacker-id moving-army)
      (let [current-player (get-current-player game)]
        (assert-country-owner game attacker-id current-player)
        (assert-country-owner-any game defender-id (dissoc (game :players) current-player))
        ; TODO(Richo): If the player has a card for this country, we should add two units to its army
        ; (at the end of the turn!!). Maybe I can add the invaded countries to a list in the current
        ; turn data so that I know which countries were invaded in this turn (to avoid using a card 
        ; twice). Or maybe its easier to mark the cards with a used? flag and then at the end of turn 
        ; check the unused cards and owned countries
        (-> game
            (update-in [:countries attacker-id :army] - moving-army)
            (update-in [:countries defender-id :army] + moving-army)
            (assoc-in [:countries defender-id :owner] current-player)
            (assoc-in [:current-turn :draw-card?] true))))))

(def regroup 
  (with-winner-check
    (fn [game src-id dst-id moving-army]
      (assert-valid-country game src-id)
      (assert-valid-country game dst-id)
      (assert-neighbours game src-id dst-id)
      (assert-valid-regrouping-army game src-id moving-army)
      (let [current-player (get-current-player game)]
        (assert-country-owner game src-id current-player)
        (assert-country-owner game dst-id current-player))
      (-> game
          (update-in [:countries src-id :army] - moving-army)
          (update-in [:countries dst-id :army] + moving-army)))))


(def finish-action
  (with-winner-check
    (fn [game]
      (let [game' (finish-action* game)
            current-player (get-current-player game')]
        (if-not (still-playing? game' current-player)
          (finish-action game')
          game')))))

(def surrender
  (with-winner-check
    (fn [game player-id]
      (let [game' (assoc-in game [:players player-id :playing?] false)
            still-playing (->> (game' :turn-order)
                               (filter (partial still-playing? game')))]
        (if (= 1 (count still-playing))
          (assoc game' :winner (first still-playing))
          (if (= player-id (get-current-player game'))
            (finish-action game')
            game'))))))

(def draw-card
  (with-winner-check
    (fn [game country-id]
      (if (draw-card? game)
        (if-not (get-in game [:cards country-id :owner])
          ; TODO(Richo): If the player already owns this country we should add 2 units to its army
          (-> game
              (assoc-in [:cards country-id :owner] (get-current-player game))
              (assoc-in [:cards country-id :used?] false)
              (assoc-in [:current-turn :draw-card?] false))
          (throw (ex-info (u/format "Current player is not allowed to draw card %1 because it belongs to other player!"
                                    country-id)
                          {:game game, :country country-id})))
        (throw (ex-info "Current player is not allowed to draw card!"
                        {:game game}))))))

(def check-unused-cards
  (with-winner-check
    (fn [game]
      (let [player (get-current-player game)
            countries (set (player-countries game player))
            cards (->> (get-player-cards game player)
                       (map (game :cards))
                       (remove :used?)
                       (map :country)
                       (filter countries))]
        (reduce (fn [game card]
                  (-> game
                      (update-in [:countries card :army] + 2)
                      (assoc-in [:cards card :used?] true)))
                game cards)))))

(def exchange-cards
  (with-winner-check
    (fn [game [card-1 card-2 card-3]]
      (let [player-id (get-current-player game)]
        (when-not (set/subset? #{card-1 card-2 card-3}
                               (set (get-player-cards game player-id)))
          (throw (ex-info "Current player doesn't own the cards being exchanged"
                          {:game game, :cards [card-1 card-2 card-3]})))
        (when-not (valid-exchange? game [card-1 card-2 card-3])
          (throw (ex-info "Cards are not eligible for exchange"
                          {:game game, :cards [card-1 card-2 card-3]})))
        (-> game
            (assoc-in [:cards card-1 :owner] nil)
            (assoc-in [:cards card-1 :used?] false)
            (assoc-in [:cards card-2 :owner] nil)
            (assoc-in [:cards card-2 :used?] false)
            (assoc-in [:cards card-3 :owner] nil)
            (assoc-in [:cards card-3 :used?] false)
            (update-in [:current-turn :extra-army] + (get-exchange-bonus game player-id))
            (update-in [:players player-id :exchanges] inc))))))