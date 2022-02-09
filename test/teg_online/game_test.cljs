(ns teg-online.game-test
  (:require [cljs.test :refer-macros [deftest is]]
            [teg-online.game :as teg]
            [teg-online.board :as b]
            [teg-online.utils.core :as u]))

(deftest player-list-should-start-empty
  (let [game (teg/new-game)]
    (is (empty? (game :players))
        "Player list should start empty")))

(deftest player-join-should-add-players-to-the-game
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego"))]
    (is (= 2 (count (teg/get-players game)))
        "There should be two players")
    (is (= [::p1 ::p2]
           (map :id (teg/get-players game))))))

(deftest player-join-with-same-id-should-be-forbidden
  (is (thrown? js/Error
               (-> (teg/new-game)
                   (teg/join-game ::p1 "Richo")
                   (teg/join-game ::p1 "Diego")))))

(deftest distribute-countries-should-assign-countries-to-each-player-fairly
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/chile
                                            ::b/uruguay ::b/brasil
                                            ::b/colombia]))]
    (is (= #{::b/argentina ::b/uruguay ::b/colombia}
           (set (teg/player-countries game ::p1))))
    (is (= #{::b/chile ::b/brasil}
           (set (teg/player-countries game ::p2))))))

(deftest distribute-countries-should-set-one-army-to-each-country-assigned
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/chile
                                            ::b/uruguay ::b/brasil
                                            ::b/colombia]))]
    (is (= 3 (teg/player-army-count game ::p1)))
    (is (= 2 (teg/player-army-count game ::p2)))))

(deftest add-army-should-increment-the-counter
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 teg/distribute-countries)
        country (first (teg/player-countries game ::p1))
        game (teg/add-army game country 3)]
    (is (= (teg/get-army game country)
           4))))

(comment
  (def game (-> (teg/new-game)
                (teg/join-game ::p1 "Richo")
                (teg/join-game ::p2 "Diego")
                teg/distribute-countries))
  (def country (first (teg/player-countries game ::p1)))
  (def game (-> game
                (teg/add-army ::p1 country 3)))
  (-> game (teg/get-player ::p1))

  country
  (teg/get-player game ::p1)
  (group-by :id (game :players))
  (u/seek #(= (:id %) ::p1)
          (game :players))
  )