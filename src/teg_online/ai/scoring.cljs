(ns teg-online.ai.scoring
  (:require [teg-online.game :as teg]
            [teg-online.board :as b]
            [clojure.set :as set]))

(defn connected-countries [game country]
  (let [frontier #js [country]]
    (loop [reached #{country}]
      (if (empty? frontier)
        reached
        (let [current (.shift frontier)
              owner (-> game :countries current :owner)
              neighbours (->> (-> b/countries current :neighbours)
                              (filter #(= owner (-> game :countries % :owner)))
                              (set))]
        
          (doseq [neigbour neighbours]
            (when-not (reached neigbour)
              (.push frontier neigbour)))
          (recur (set/union reached neighbours)))))))

(defn player-empires [game player-id]
  (loop [empires []
         [country & rest] (teg/player-countries game player-id)]
    (if country
      (let [empire (connected-countries game country)]
        (recur (conj empires empire) 
               (remove empire rest)))
      empires)))

(defn in-conflict? [game country]
  (let [owner (-> game :countries country :owner)]
    (boolean
     (some (fn [neighbour]
             (not= owner (-> game :countries neighbour :owner)))
           (-> b/countries country :neighbours)))))

(defn empire-score [game empire]
  (let [conflicts (group-by (partial in-conflict? game)
                            empire)
        active-armies (->> (conflicts true)
                           (map (:countries game))
                           (map :army)
                           (reduce +))
        isolated-countries (conflicts false)
        isolated-by-continent (->> isolated-countries
                                   (group-by #(-> b/countries % :continent))
                                   (vals)
                                   (map count))]
    (* active-armies
       (count empire)
       (reduce * isolated-by-continent))))

(defn player-score [game player-id]
  (->> (player-empires game player-id)
       (map (partial empire-score game))
       (reduce +)))

(defn normalized-scores [game]
  (let [scores (->> (:turn-order game)
                    (mapv (partial player-score game)))
        total-score (reduce + scores)]
    (zipmap (:turn-order game)
            (->> scores
                 (map #(/ % total-score))))))

(comment
  
  (def game (-> @teg-online.main/state :game))

  (normalized-scores game)
  )