(ns teg-online.game-test
  (:require [cljs.test :refer-macros [deftest is]]
            [teg-online.game :as teg]
            [teg-online.board :as b]
            [teg-online.utils :as u]))

(deftest player-list-should-start-empty
  (let [game (teg/new-game)]
    (is (empty? (game :players))
        "Player list should start empty")))

(deftest player-join-should-add-players-to-the-game
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego"))]
    (is (= 2 (count (game :players)))
        "There should be two players")
    (is (= [::p1 ::p2]
           (map :id (game :players))))))

(deftest distribute-countries-should-randomly-assign-countries-to-each-player
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 teg/distribute-countries)
        countries-per-player (/ (count b/countries) 2)
        p1-countries (js/Math.ceil countries-per-player)
        p2-countries (js/Math.floor countries-per-player)]
    (is (= p1-countries
           (count (-> game 
                      (teg/get-player ::p1)
                      teg/player-countries))))
    (is (= p2-countries
           (count (-> game
                      (teg/get-player ::p2)
                      teg/player-countries))))))

(deftest distribute-countries-should-set-one-army-to-each-country-assigned
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 teg/distribute-countries)
        countries-per-player (/ (count b/countries) 2)
        p1-countries (js/Math.ceil countries-per-player)
        p2-countries (js/Math.floor countries-per-player)]
    (is (= p1-countries
           (-> game
               (teg/get-player ::p1)
               teg/player-army-count)))
    (is (= p2-countries
           (-> game
               (teg/get-player ::p2)
               teg/player-army-count)))))

(deftest add-army-should-increment-the-ACAACA
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 teg/distribute-countries)
        country (first (teg/player-countries (teg/get-player game ::p1)))
        game (-> game
                 (teg/add-army ::p1 country 3))]
    (is (= (-> game (teg/get-player ::p1) :army (get country))
           4))))

(comment
  (def game (-> (teg/new-game)
                (teg/join-game ::p1 "Richo")
                (teg/join-game ::p2 "Diego")
                teg/distribute-countries))
  (def country (first (teg/player-countries (teg/get-player game ::p1))))
  (def game (-> game
                (teg/add-army ::p1 country 3)))
  (-> game (teg/get-player ::p1))

  country
  (teg/get-player game ::p1)
  (group-by :id (game :players))
  (u/seek #(= (:id %) ::p1)
          (game :players))
  )