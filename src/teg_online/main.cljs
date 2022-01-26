(ns teg-online.main
  (:require [teg-online.board :as board]
            [teg-online.utils :as u]))

(defn new-game []
  {:players []})

(defn new-player [id name]
  {:id id
   :name name
   :cards #{}
   :army {}})

(defn join-game [game player]
  (update game :players conj player))

(defn distribute-countries [game]
  (let [player-countries (u/deal (shuffle (keys board/countries))
                                     (game :players))]
    (assoc game :players
           (mapv (fn [p]
                   (assoc p :army
                          (into {} (mapv (fn [c] [c 1])
                                         (player-countries p)))))
                 (game :players)))))

(defn init []
  (print "RICHO!"))

(comment

  (u/deal (range 13) "ABC")

  (def game @game)
  (def game (atom (new-game)))
  (swap! game join-game (new-player ::p1 "Richo"))
  (swap! game join-game (new-player ::p2 "Lechu"))
  (swap! game join-game (new-player ::p3 "Diego"))
  (swap! game distribute-countries)

  (reduce + (-> @game :players (nth 0) :army vals))
  )