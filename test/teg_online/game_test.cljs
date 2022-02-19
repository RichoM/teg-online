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
        "Adding army to free country should throw error")
    (is (thrown? js/Error (teg/add-army game ::b/richopolis 1))
        "Adding army to non-existent country should throw error")))

(deftest get-dice-count-with-only-one-army
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/chile]))]
    (is (= [0 1] (teg/get-dice-count game ::b/argentina ::b/chile)))))

(deftest get-dice-count-with-more-than-one-army
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/chile])
                 (teg/add-army ::b/argentina 1)
                 (teg/add-army ::b/chile 1))]
    (is (= [1 2] (teg/get-dice-count game ::b/argentina ::b/chile)))))

(deftest get-dice-count-with-more-than-max-army
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/chile])
                 (teg/add-army ::b/argentina 10)
                 (teg/add-army ::b/chile 10))]
    (is (= [3 3] (teg/get-dice-count game ::b/argentina ::b/chile)))))

(deftest attack-should-reduce-the-army-count-according-to-dice-throws
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/chile])
                 teg/start-game
                 (teg/add-army ::b/argentina 5) teg/next-turn
                 (teg/add-army ::b/chile 5) teg/next-turn
                 (teg/add-army ::b/argentina 3) teg/next-turn
                 (teg/add-army ::b/chile 3) teg/next-turn
                 (teg/next-phase ::teg/attack)
                 (teg/attack [::b/argentina [4 5 6]] 
                             [::b/chile [5 5 5]]))]
    (is (= 7 (teg/get-army game ::b/argentina)))
    (is (= 8 (teg/get-army game ::b/chile)))))

(deftest attack-should-involve-valid-countries
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/chile])
                 teg/start-game
                 (teg/add-army ::b/argentina 5) teg/next-turn
                 (teg/add-army ::b/chile 5) teg/next-turn
                 (teg/add-army ::b/argentina 3) teg/next-turn
                 (teg/add-army ::b/chile 3) teg/next-turn
                 (teg/next-phase ::teg/attack)
                 (teg/attack [::b/argentina [4 5 6]]
                             [::b/chile [5 5 5]]))]
    (is (thrown? js/Error (teg/attack game
                                      [::b/colombia [1 2 3]]
                                      [::b/argentina [1 2 3]]))
        "Attacking from a free country should throw error")
    (is (thrown? js/Error (teg/attack game
                                      [::b/argentina [1 2 3]]
                                      [::b/richopolis [1 2 3]]))
        "Attacking a non existent country should throw error")))

(deftest attack-should-involve-neighbour-countries
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/alaska])
                 teg/start-game
                 (teg/add-army ::b/argentina 5) teg/next-turn
                 (teg/add-army ::b/alaska 5) teg/next-turn
                 (teg/add-army ::b/argentina 3) teg/next-turn
                 (teg/add-army ::b/alaska 3) teg/next-turn
                 (teg/next-phase ::teg/attack))]
    (is (thrown? js/Error (teg/attack game
                                      [::b/alaska [1 2 3]]
                                      [::b/argentina [1 2 3]]))
        "Attacking from a distant country should throw error")
    (is (thrown? js/Error (teg/attack game
                                      [::b/argentina [1 2 3]]
                                      [::b/alaska [1 2 3]]))
        "Attacking a distant country should throw error")))

(deftest attack-should-originate-from-current-player
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/chile])
                 teg/start-game
                 (teg/add-army ::b/argentina 5) teg/next-turn
                 (teg/add-army ::b/chile 5) teg/next-turn
                 (teg/add-army ::b/argentina 3) teg/next-turn
                 (teg/add-army ::b/chile 3) teg/next-turn
                 (teg/next-phase ::teg/attack))]
    (is (thrown? js/Error (teg/attack game
                                      [::b/chile [1 2 3]]
                                      [::b/argentina [1 2 3]]))
        "Attacking from a country that doesn't belong to current player should throw error")))

(deftest attack-should-not-be-self-inflicted
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/uruguay
                                            ::b/chile ::b/colombia])
                 teg/start-game
                 (teg/add-army ::b/argentina 5) teg/next-turn
                 (teg/add-army ::b/uruguay 5) teg/next-turn
                 (teg/add-army ::b/chile 3) teg/next-turn
                 (teg/add-army ::b/colombia 3) teg/next-turn
                 (teg/next-phase ::teg/attack))]
    (is (thrown? js/Error (teg/attack game
                                      [::b/argentina [1 2 3]]
                                      [::b/argentina [1 2 3]]))
        "Attacking the same country should throw error")
    (is (thrown? js/Error (teg/attack game
                                      [::b/argentina [1 2 3]]
                                      [::b/chile [1 2 3]]))
        "Attacking a country that belongs to current player should throw error")))

(deftest attack-throws-should-have-correct-number-of-dice
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/chile
                                            ::b/colombia ::b/uruguay])
                 teg/start-game
                 (teg/add-army ::b/argentina 1)
                 (teg/add-army ::b/colombia 4)
                 teg/next-turn
                 (teg/add-army ::b/chile 1)
                 (teg/add-army ::b/uruguay 4)
                 teg/next-turn
                 (teg/add-army ::b/colombia 3) teg/next-turn
                 (teg/add-army ::b/uruguay 3) teg/next-turn
                 (teg/next-phase ::teg/attack))]
    (let [game-2 (teg/attack game
                        [::b/argentina [4]]
                        [::b/chile [5 5]])]
      (is (= 1 (teg/get-army game-2 ::b/argentina))))
    (is (thrown? js/Error (teg/attack game
                                      [::b/argentina [4 5]]
                                      [::b/chile [5 5]]))
        "Attacking with 1 more dice than allowed should throw error")
    (is (thrown? js/Error (teg/attack game
                                      [::b/argentina [4 5 6]]
                                      [::b/chile [5 5]]))
        "Attacking with 2 more dice than allowed should throw error")
    (is (thrown? js/Error (teg/attack game
                                      [::b/argentina [1]]
                                      [::b/chile [1 2 3]]))
        "Defending with more dice than allowed should throw error")
    (is (thrown? js/Error (teg/attack game
                                      [::b/argentina [1]]
                                      [::b/chile [1]]))
        "Defending with less dice than allowed should throw error")))

(deftest invade-should-move-army-and-change-owner
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/peru
                                            ::b/uruguay ::b/brasil])
                 teg/start-game
                 (teg/add-army ::b/argentina 4)
                 (teg/add-army ::b/uruguay 1)
                 teg/next-turn
                 (teg/add-army ::b/brasil 5)
                 teg/next-turn
                 (teg/add-army ::b/argentina 3) teg/next-turn
                 (teg/add-army ::b/peru 3) teg/next-turn
                 (teg/next-phase ::teg/attack)
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [5 5 5]])
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [5]])
                 (teg/invade ::b/argentina ::b/peru 1))]
    (is (= 7 (teg/get-army game ::b/argentina)))
    (is (= 1 (teg/get-army game ::b/peru)))
    (is (= ::p1 (teg/country-owner game ::b/argentina)))
    (is (= ::p1 (teg/country-owner game ::b/peru)))))

(deftest invade-should-involve-valid-countries
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/peru
                                            ::b/uruguay ::b/brasil])
                 teg/start-game
                 (teg/add-army ::b/argentina 4)
                 (teg/add-army ::b/uruguay 1)
                 teg/next-turn
                 (teg/add-army ::b/brasil 5)
                 teg/next-turn
                 (teg/add-army ::b/argentina 3) teg/next-turn
                 (teg/add-army ::b/peru 3) teg/next-turn
                 (teg/next-phase ::teg/attack)
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [5 5 5]])
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [5]]))]
    (is (thrown? js/Error (teg/invade game ::b/richopolis ::b/peru 1))
        "Invading from non-existent country should throw error")))

(deftest invade-should-only-work-if-defender-army-is-zero
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/peru
                                            ::b/uruguay ::b/brasil])
                 teg/start-game
                 (teg/add-army ::b/argentina 4)
                 (teg/add-army ::b/uruguay 1)
                 teg/next-turn
                 (teg/add-army ::b/brasil 5)
                 teg/next-turn
                 (teg/add-army ::b/argentina 3) teg/next-turn
                 (teg/add-army ::b/peru 3) teg/next-turn
                 (teg/next-phase ::teg/attack)
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [5 5 5]]))]
    (is (thrown? js/Error (teg/invade game ::b/argentina ::b/peru 1))
        "Attempting to invade country with more than 0 army should throw error")
    (is (= 8 (teg/get-army game ::b/argentina)))
    (is (= 1 (teg/get-army game ::b/peru)))
    (is (= ::p1 (teg/country-owner game ::b/argentina)))
    (is (= ::p2 (teg/country-owner game ::b/peru)))))

(deftest invade-should-originate-from-country-owned-by-current-player
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/peru
                                            ::b/uruguay ::b/brasil])
                 teg/start-game
                 (teg/add-army ::b/argentina 4)
                 (teg/add-army ::b/uruguay 1)
                 teg/next-turn
                 (teg/add-army ::b/brasil 5)
                 teg/next-turn
                 (teg/add-army ::b/argentina 3) teg/next-turn
                 (teg/add-army ::b/peru 3) teg/next-turn
                 (teg/next-phase ::teg/attack)
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [5 5 5]])
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [5]])
                 teg/next-turn)]
    (is (thrown? js/Error (teg/invade game ::b/argentina ::b/peru 1))
        "Invading from a country that is not owned by current player should throw error")))

(deftest invade-cannot-be-self-inflicted
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/peru
                                            ::b/uruguay ::b/brasil])
                 teg/start-game
                 (teg/add-army ::b/argentina 5)
                 teg/next-turn
                 (teg/add-army ::b/brasil 5)
                 teg/next-turn
                 (teg/add-army ::b/argentina 3) teg/next-turn
                 (teg/add-army ::b/peru 3) teg/next-turn
                 (teg/next-phase ::teg/attack)
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [5 5 5]])
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [5]])
                 teg/next-turn
                 (teg/attack [::b/brasil [6 6 6]]
                             [::b/uruguay [1]])
                 teg/next-turn)]
    (is (thrown? js/Error (teg/invade game ::b/argentina ::b/uruguay 1))
        "Invading a country that is owned by current player should throw error")))

(deftest invade-should-move-a-valid-number-of-troops
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/peru
                                            ::b/uruguay ::b/brasil])
                 teg/start-game
                 (teg/add-army ::b/argentina 4)
                 (teg/add-army ::b/uruguay 1)
                 teg/next-turn
                 (teg/add-army ::b/brasil 5)
                 teg/next-turn
                 (teg/add-army ::b/argentina 3) teg/next-turn
                 (teg/add-army ::b/peru 3) teg/next-turn
                 (teg/next-phase ::teg/attack)
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [5 5 5]])
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [5]]))]
    (is (thrown? js/Error (teg/invade game ::b/argentina ::b/peru 0))
        "Attempting to invade moving less than 1 army should throw error")
    (is (thrown? js/Error (teg/invade game ::b/argentina ::b/peru 4))
        "Attempting to invade moving more than 3 army should throw error")))

(deftest invade-should-never-leave-less-than-1-army-in-attacker-country
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/peru
                                            ::b/uruguay ::b/brasil])
                 teg/start-game
                 (teg/add-army ::b/argentina 4)
                 (teg/add-army ::b/uruguay 1)
                 teg/next-turn
                 (teg/add-army ::b/brasil 5)
                 teg/next-turn
                 (teg/add-army ::b/argentina 3) teg/next-turn
                 (teg/add-army ::b/peru 3) teg/next-turn
                 (teg/next-phase ::teg/attack)
                 (teg/attack [::b/argentina [5 5 5]]
                             [::b/peru [5 5 5]])                 
                 (teg/attack [::b/argentina [6 1 1]]
                             [::b/peru [5 5 5]])
                 (teg/attack [::b/argentina [6 6]]
                             [::b/peru [6 5 5]])
                 (teg/attack [::b/argentina [6]]
                             [::b/peru [5 5]])
                 (teg/attack [::b/argentina [6]]
                             [::b/peru [5]]))]
    (let [game' (teg/invade game ::b/argentina ::b/peru 1)]
      (is (= 1 (teg/get-army game' ::b/argentina)))
      (is (= 1 (teg/get-army game' ::b/peru)))
      (is (= ::p1 (teg/country-owner game' ::b/argentina)))
      (is (= ::p1 (teg/country-owner game' ::b/peru))))
    (is (thrown? js/Error (teg/invade game ::b/argentina ::b/peru 2))
        "Attempting to invade moving more troops than allowed should throw error")
    (is (thrown? js/Error (teg/invade game ::b/argentina ::b/peru 3))
        "Attempting to invade moving more troops than allowed should throw error")))

(deftest finish-current-action
  (let [game-atom (atom (-> (teg/new-game)
                            (teg/join-game ::p1 "Richo")
                            (teg/join-game ::p2 "Diego")
                            (teg/distribute-countries [::b/argentina ::b/peru
                                                       ::b/uruguay ::b/brasil])
                            teg/start-game))
        get-current-state #(let [game @game-atom]
                             [(teg/get-current-player game)
                              (teg/get-current-phase game)])]
    (is (= [::p1 ::teg/add-army] (get-current-state)))
    (swap! game-atom teg/finish-current-action)
    (is (= [::p2 ::teg/add-army] (get-current-state)))
    (swap! game-atom teg/finish-current-action)
    (is (= [::p1 ::teg/add-army] (get-current-state)))
    (swap! game-atom teg/finish-current-action)
    (is (= [::p2 ::teg/add-army] (get-current-state)))
    (swap! game-atom teg/finish-current-action)
    (is (= [::p1 ::teg/attack] (get-current-state)))
    (swap! game-atom teg/finish-current-action)
    (is (= [::p2 ::teg/attack] (get-current-state)))
    (swap! game-atom teg/finish-current-action)
    (is (= [::p1 ::teg/add-army] (get-current-state)))
    (swap! game-atom teg/finish-current-action)
    (is (= [::p2 ::teg/add-army] (get-current-state)))
    (swap! game-atom teg/finish-current-action)
    (is (= [::p1 ::teg/attack] (get-current-state)))
    (swap! game-atom teg/finish-current-action)
    (is (= [::p2 ::teg/attack] (get-current-state)))))

(comment
  (def game-atom (atom (-> (teg/new-game)
                           (teg/join-game ::p1 "Richo")
                           (teg/join-game ::p2 "Diego")
                           (teg/distribute-countries [::b/argentina ::b/peru
                                                      ::b/uruguay ::b/brasil])
                           teg/start-game)))
  (def get-current-state #(let [game @game-atom]
                            [(teg/get-current-player game)
                             (teg/get-current-phase game)]))
  (def game (-> (teg/new-game)
                (teg/join-game ::p1 "Richo")
                (teg/join-game ::p2 "Diego")
                (teg/distribute-countries [::b/argentina ::b/peru
                                           ::b/uruguay ::b/brasil])
                teg/start-game))
  
  (teg/get-army game ::b/peru)

  (teg/get-army game ::b/argentina)

  (def country (first (teg/player-countries game ::p1)))
  (-> game (teg/get-player ::p1))

  country
  (teg/get-player game ::p1)
  (group-by :id (game :players))
  (u/seek #(= (:id %) ::p1)
          (game :players)))