(ns teg-online.ai.scoring
  (:require [teg-online.game :as teg]
            [teg-online.board :as b]))

(defn player-score [game player-id]
  (let [player-countries (set (teg/player-countries game player-id))
        countries-in-conflict (->> player-countries
                                   (filter (fn [country-id]
                                             (->> (-> b/countries country-id :neighbours)
                                                  (remove player-countries)
                                                  (seq)))))
        isolated-countries (->> player-countries
                                (remove (fn [country-id]
                                          (->> (-> b/countries country-id :neighbours)
                                               (filter player-countries)
                                               (seq)))))

        total-armies (->> player-countries
                          (map (:countries game))
                          (map :army)
                          (reduce +))
        active-armies (->> countries-in-conflict
                           (map (:countries game))
                           (map :army)
                           (reduce +))
        isolated-armies (->> isolated-countries
                             (map (:countries game))
                             (map :army)
                             (reduce +))
        continent-bonus (->> (teg/player-continents game player-id)
                             (map b/get-continent-bonus)
                             (reduce +))]
    (+ (count player-countries)
       total-armies
       active-armies
       (* -1 isolated-armies)
       continent-bonus)))

(comment
  (def state teg-online.main/state)
  
  (def game (-> @state :game))
  
  (def player-id :ai-1)

  (teg/player-continents game player-id)

  (tap> (-> @state :game))

  (->> (vals (:players game))
       (map (fn [{:keys [id]}]
              [id (player-score game id)]))
       (sort-by second >))

  (->> player-countries
       (remove (fn [country-id]
                 (->> (-> b/countries country-id :neighbours)
                      (filter player-countries)
                      (seq)))))
  
  
  )