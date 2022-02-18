(ns teg-online.game
  (:require [teg-online.board :as board]
            [teg-online.utils.core :as u]))

(def game-phases 
  [::add-army
   ::attack
   ::regroup])

(defn new-game []
  {:players {}
   :countries (reduce-kv #(assoc %1 %2 {:id %2, :owner nil, :army 0})
                         {}
                         board/countries)
   :turn-order []
   :phase ::add-army
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
  (assoc game :turn 0))

(defn get-players [game]
  (map (game :players)
       (game :turn-order)))

(defn get-player [game player-id]
  (get-in game [:players player-id]))

(defn get-current-player [{:keys [turn turn-order]}]
  (when turn (nth turn-order (mod turn (count turn-order)))))

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

(defn add-army [game country army]
  (when-not (country-exists? game country)
    (throw (ex-info (u/format "Country %1 does not exist" country)
                    {:game game, :country-id country})))
  (when-not (country-owner game country)
    (throw (ex-info (u/format "Country %1 has no owner" country)
                    {:game game, :country-id country})))
  (update-in game [:countries country :army] + army))

(defn next-turn [game]
  (update game :turn inc))

(comment

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