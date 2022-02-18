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

(deftest add-army-should-throw-if-invalid-country
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego"))]
    (is (thrown? js/Error (teg/add-army game ::b/argentina 1))
        "Adding army to free country")
    (is (thrown? js/Error (teg/add-army game ::b/richopolis 1))
        "Adding army to non-existent country")))

(deftest get-dice-count-with-only-one-army
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/chile]))]
    (is (= 0 (teg/get-attacker-dice-count game ::b/argentina)))
    (is (= 1 (teg/get-defender-dice-count game ::b/chile)))))

(deftest get-dice-count-with-more-than-one-army
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/chile])
                 (teg/add-army ::b/argentina 1)
                 (teg/add-army ::b/chile 1))]
    (is (= 1 (teg/get-attacker-dice-count game ::b/argentina)))
    (is (= 2 (teg/get-defender-dice-count game ::b/chile)))))

(deftest get-dice-count-with-more-than-max-army
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/chile])
                 (teg/add-army ::b/argentina 10)
                 (teg/add-army ::b/chile 10))]
    (is (= 3 (teg/get-attacker-dice-count game ::b/argentina)))
    (is (= 3 (teg/get-defender-dice-count game ::b/chile)))))

(comment
  (teg/get-army game ::b/argentina)
  (def game (-> (teg/new-game)
                (teg/join-game ::p1 "Richo")
                (teg/join-game ::p2 "Diego")
                (teg/distribute-countries [::b/argentina ::b/chile])
                (teg/add-army ::b/argentina 2)
                (teg/add-army ::b/chile 2)))
  (def country (first (teg/player-countries game ::p1)))
  (-> game (teg/get-player ::p1))

  country
  (teg/get-player game ::p1)
  (group-by :id (game :players))
  (u/seek #(= (:id %) ::p1)
          (game :players))
  )