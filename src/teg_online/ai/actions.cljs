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