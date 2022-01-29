(ns teg-online.game
  (:require [teg-online.board :as board]
            [teg-online.utils.core :as u]))


(defn new-game []
  {:players []})

(defn new-player [id name]
  {:id id
   :name name
   :cards #{}
   :army {}})

(defn join-game [game id name]
  (if (some #(= id (:id %)) (game :players))
    (throw (ex-info (u/format "Player with id %1 already joined" id)
                    {:game game :id id, :name name}))
    (update game :players conj (new-player id name))))

(defn distribute-countries [game]
  (let [player-countries (u/deal (shuffle (keys board/countries))
                                 (game :players))]
    (assoc game :players
           (mapv (fn [p]
                   (assoc p :army
                          (into {} (mapv (fn [c] [c 1])
                                         (player-countries p)))))
                 (game :players)))))

(defn get-player [game player-id]
  (u/seek #(= (:id %) player-id)
          (game :players)))

(defn player-countries [player]
  (-> player :army keys))

(defn player-army-count [player]
  (reduce + (-> player :army vals)))

(defn add-army [game player-id country army]
  (let [player-idx (u/index-of (game :players)
                               (get-player game player-id))]
    (update-in game [:players player-idx :army country] 
               + army)))

(comment

  (u/deal (range 13) "ABC")

  (def game @game)
  (def game (atom (new-game)))
  (swap! game join-game ::p1 "Richo")
  (swap! game join-game ::p2 "Lechu")
  (swap! game join-game ::p3 "Diego")
  (swap! game distribute-countries)

  (reduce + (-> @game :players (nth 0) :army vals)))