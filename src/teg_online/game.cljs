(ns teg-online.game
  (:require [teg-online.board :as board]
            [teg-online.utils.core :as u]))

(defn new-game []
  {:players {}
   :turn-order []})

(defn new-player [id name]
  {:id id
   :name name
   :cards #{}
   :army {}})

(defn join-game [game id name]
  (if (contains? (game :players) id)
    (throw (ex-info (u/format "Player with id %1 already joined" id)
                    {:game game :id id, :name name}))
    (-> game
        (update :turn-order conj id)
        (update :players assoc id (new-player id name)))))

(defn get-players [game]
  (map (game :players)
       (game :turn-order)))

(defn get-player [game player-id]
  (get-in game [:players player-id]))

(defn player-countries [player]
  (-> player :army keys))

(defn player-army-count [player]
  (reduce + (-> player :army vals)))

(defn distribute-countries
  ([game] (distribute-countries game (shuffle (keys board/countries))))
  ([game countries]
   (let [countries-for-player (u/deal countries (get-players game))]
     (update game :players
             (fn [players]
               (reduce-kv (fn [m id p]
                            (assoc m id
                                   (assoc p :army
                                          (reduce (fn [m c]
                                                    (assoc m c 1))
                                                  {}
                                                  (countries-for-player p)))))
                          {}
                          players))))))

(defn add-army [game player-id country army]
  (update-in game [:players player-id :army country]
             + army))

(comment

  (u/deal (range 13) "ABC")

  (def game @game)
  (def game (atom (new-game)))
  (swap! game join-game ::p1 "Richo")
  (swap! game join-game ::p2 "Lechu")
  (swap! game join-game ::p3 "Diego")
  (swap! game distribute-countries)

  (reduce + (-> @game :players (nth 0) :army vals)))