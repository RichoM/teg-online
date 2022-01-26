(ns teg-online.main-test
  (:require [cljs.test :refer-macros [deftest is]]
            [teg-online.main :as m]
            [teg-online.board :as b]
            [teg-online.utils :as u]))

(deftest player-list-should-start-empty
  (let [game (m/new-game)]
    (is (empty? (game :players))
        "Player list should start empty")))

(deftest player-join-should-add-players-to-the-game
  (let [game (-> (m/new-game)
                 (m/join-game (m/new-player ::p1 "Richo"))
                 (m/join-game (m/new-player ::p2 "Diego")))]
    (is (= 2 (count (game :players)))
        "There should be two players")
    (is (= [::p1 ::p2]
           (map :id (game :players))))))

(deftest distribute-countries
  (let [game (-> (m/new-game)
                 (m/join-game (m/new-player ::p1 "Richo"))
                 (m/join-game (m/new-player ::p2 "Diego"))
                 m/distribute-countries)
        countries-per-player (/ (count b/countries) 2)]
    (is (= (js/Math.ceil countries-per-player)
           (count (-> game 
                      (m/get-player ::p1)
                      m/player-countries))))
    (is (= (js/Math.floor countries-per-player)
           (count (-> game
                      (m/get-player ::p2)
                      m/player-countries))))))

(comment
  (def game (-> (m/new-game)
                (m/join-game (m/new-player ::p1 "Richo"))
                (m/join-game (m/new-player ::p2 "Diego"))
                m/distribute-countries))
 (m/get-player game ::p1)
  (group-by :id (game :players))
  (u/seek #(= (:id %) ::p1)
          (game :players))
  )