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
                 (teg/add-army ::b/argentina 5) teg/finish-action
                 (teg/add-army ::b/chile 5) teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/chile 3) teg/finish-action
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
                 (teg/add-army ::b/argentina 5) teg/finish-action
                 (teg/add-army ::b/chile 5) teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/chile 3) teg/finish-action
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
                 (teg/add-army ::b/argentina 5) teg/finish-action
                 (teg/add-army ::b/alaska 5) teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/alaska 3) teg/finish-action)]
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
                 (teg/add-army ::b/argentina 5) teg/finish-action
                 (teg/add-army ::b/chile 5) teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/chile 3) teg/finish-action)]
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
                 (teg/add-army ::b/argentina 5) teg/finish-action
                 (teg/add-army ::b/uruguay 5) teg/finish-action
                 (teg/add-army ::b/chile 3) teg/finish-action
                 (teg/add-army ::b/colombia 3) teg/finish-action)]
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
                 teg/finish-action
                 (teg/add-army ::b/chile 1)
                 (teg/add-army ::b/uruguay 4)
                 teg/finish-action
                 (teg/add-army ::b/colombia 3) teg/finish-action
                 (teg/add-army ::b/uruguay 3) teg/finish-action)]
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
                 teg/finish-action
                 (teg/add-army ::b/brasil 5)
                 teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
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
                 teg/finish-action
                 (teg/add-army ::b/brasil 5)
                 teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
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
                 teg/finish-action
                 (teg/add-army ::b/brasil 5)
                 teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
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
                 teg/finish-action
                 (teg/add-army ::b/brasil 5)
                 teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
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
                 teg/finish-action
                 (teg/add-army ::b/brasil 5)
                 teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [5 5 5]])
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [5]])
                 teg/finish-action
                 teg/finish-action
                 (teg/attack [::b/brasil [6 6 6]]
                             [::b/uruguay [1]])
                 teg/finish-action
                 teg/finish-action)]
    (print (game :phase))
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
                 teg/finish-action
                 (teg/add-army ::b/brasil 5)
                 teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
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
                 teg/finish-action
                 (teg/add-army ::b/brasil 5)
                 teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
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

(deftest finish-action
  (let [game-atom (atom (-> (teg/new-game)
                            (teg/join-game ::p1 "Richo")
                            (teg/join-game ::p2 "Diego")
                            (teg/distribute-countries [::b/argentina ::b/peru
                                                       ::b/uruguay ::b/brasil])
                            teg/start-game))
        get-current-state #(let [game @game-atom]
                             [(teg/get-current-player game)
                              (teg/get-current-phase game)])]
    (is (= (get-current-state) [::p1 ::teg/add-army-1]) "T: 0")
    (swap! game-atom teg/finish-action)
    (is (= (get-current-state) [::p2 ::teg/add-army-1]) "T: 1")
    (swap! game-atom teg/finish-action)
    (is (= (get-current-state) [::p1 ::teg/add-army-2]) "T: 2")
    (swap! game-atom teg/finish-action)
    (is (= (get-current-state) [::p2 ::teg/add-army-2]) "T: 3")
    (swap! game-atom teg/finish-action)
    (is (= (get-current-state) [::p1 ::teg/attack]) "T: 4")
    (swap! game-atom teg/finish-action)
    (is (= (get-current-state) [::p1 ::teg/regroup]) "T: 5")
    (swap! game-atom teg/finish-action)
    (is (= (get-current-state) [::p2 ::teg/attack]) "T: 6")
    (swap! game-atom teg/finish-action)
    (is (= (get-current-state) [::p2 ::teg/regroup]) "T: 7")
    (swap! game-atom teg/finish-action)
    (is (= (get-current-state) [::p1 ::teg/add-army]) "T: 8")
    (swap! game-atom teg/finish-action)
    (is (= (get-current-state) [::p2 ::teg/add-army]) "T: 9")
    (swap! game-atom teg/finish-action)
    (is (= (get-current-state) [::p1 ::teg/attack]) "T: A")
    (swap! game-atom teg/finish-action)
    (is (= (get-current-state) [::p1 ::teg/regroup]) "T: B")
    (swap! game-atom teg/finish-action)
    (is (= (get-current-state) [::p2 ::teg/attack]) "T: C")
    (swap! game-atom teg/finish-action)
    (is (= (get-current-state) [::p2 ::teg/regroup]) "T: D")))

(deftest regroup-should-move-army
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/peru
                                            ::b/uruguay ::b/brasil])
                 teg/start-game
                 (teg/add-army ::b/argentina 4)
                 (teg/add-army ::b/uruguay 1)
                 teg/finish-action
                 (teg/add-army ::b/brasil 5)
                 teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
                 teg/finish-action
                 (teg/regroup ::b/argentina ::b/uruguay 4))]
    (is (= 4 (teg/get-army game ::b/argentina)))
    (is (= 6 (teg/get-army game ::b/uruguay)))))

(deftest regroup-should-involve-valid-countries
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/peru
                                            ::b/uruguay ::b/brasil])
                 teg/start-game
                 (teg/add-army ::b/argentina 4)
                 (teg/add-army ::b/uruguay 1)
                 teg/finish-action
                 (teg/add-army ::b/brasil 5)
                 teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
                 teg/finish-action)]
    (is (thrown? js/Error (teg/regroup game ::b/richopolis ::b/uruguay 1))
        "Regroup from non-existent country should throw error")
    (is (thrown? js/Error (teg/regroup game ::b/uruguay ::b/richopolis 1))
        "Regroup from non-existent country should throw error")
    (is (thrown? js/Error (teg/regroup game ::b/colombia ::b/uruguay 1))
        "Regroup from non-existent country should throw error")
    (is (thrown? js/Error (teg/regroup game ::b/uruguay ::b/colombia 1))
        "Regroup from non-existent country should throw error")))

(deftest regroup-should-originate-from-country-owned-by-current-player
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/peru
                                            ::b/uruguay ::b/brasil])
                 teg/start-game
                 (teg/add-army ::b/argentina 4)
                 (teg/add-army ::b/uruguay 1)
                 teg/finish-action
                 (teg/add-army ::b/brasil 5)
                 teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
                 teg/finish-action)]
    (is (thrown? js/Error (teg/regroup game ::b/argentina ::b/peru 1))
        "Regroup from a country that is not owned by current player should throw error")
    (is (thrown? js/Error (teg/regroup game ::b/peru ::b/argentina 1))
        "Regroup from a country that is not owned by current player should throw error")))

(deftest regroup-cannot-move-army-to-source-country
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/peru
                                            ::b/uruguay ::b/brasil])
                 teg/start-game
                 (teg/add-army ::b/argentina 5)
                 teg/finish-action
                 (teg/add-army ::b/brasil 5)
                 teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
                 teg/finish-action)]
    (is (thrown? js/Error (teg/regroup game ::b/argentina ::b/argentina 1))
        "Attempting to regroup to the same source country should throw error")))

(deftest regroup-should-move-a-valid-number-of-troops
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/peru
                                            ::b/uruguay ::b/brasil])
                 teg/start-game
                 (teg/add-army ::b/argentina 4)
                 (teg/add-army ::b/uruguay 1)
                 teg/finish-action
                 (teg/add-army ::b/brasil 5)
                 teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
                 teg/finish-action)]
    (is (thrown? js/Error (teg/regroup game ::b/argentina ::b/uruguay 0))
        "Attempting to regroup moving less than 1 army should throw error")))

(deftest regroup-should-never-leave-less-than-1-army-in-attacker-country
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/distribute-countries [::b/argentina ::b/peru
                                            ::b/uruguay ::b/brasil])
                 teg/start-game
                 (teg/add-army ::b/argentina 4)
                 (teg/add-army ::b/uruguay 1)
                 teg/finish-action
                 (teg/add-army ::b/brasil 5)
                 teg/finish-action
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
                 teg/finish-action)]
    (let [game' (teg/regroup game ::b/argentina ::b/uruguay 1)]
      (is (= 7 (teg/get-army game' ::b/argentina)))
      (is (= 3 (teg/get-army game' ::b/uruguay))))
    (is (thrown? js/Error (teg/regroup game ::b/argentina ::b/uruguay 8))
        "Attempting to regroup moving more troops than allowed should throw error")
    (is (thrown? js/Error (teg/regroup game ::b/argentina ::b/uruguay 9))
        "Attempting to regroup moving more troops than allowed should throw error")))

(deftest finish-action-should-ignore-players-without-countries
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/join-game ::p3 "Sofía")
                 (teg/distribute-countries [::b/argentina ::b/peru ::b/chile])
                 teg/start-game

                 ; add-army-1
                 (teg/add-army ::b/argentina 5) teg/finish-action
                 (teg/add-army ::b/peru 5) teg/finish-action
                 (teg/add-army ::b/chile 5) teg/finish-action
                 ; add-army-2
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
                 (teg/add-army ::b/chile 3) teg/finish-action

                 ; attack (Richo)
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [1 1 1]])
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [1 1 1]])
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [1 1 1]])
                 (teg/invade ::b/argentina ::b/peru 1)
                 teg/finish-action

                 ; regroup (Richo)
                 teg/finish-action)]
    (is (zero? (count (teg/player-countries game ::p2))))
    (is (= ::p3 (teg/get-current-player game)))))

(deftest finish-action-should-ignore-players-without-countries-2
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/join-game ::p3 "Sofía")
                 (teg/distribute-countries [::b/argentina ::b/peru ::b/chile])
                 teg/start-game

                 ; add-army-1
                 (teg/add-army ::b/argentina 5) teg/finish-action
                 (teg/add-army ::b/peru 5) teg/finish-action
                 (teg/add-army ::b/chile 5) teg/finish-action
                 ; add-army-2
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/peru 3) teg/finish-action
                 (teg/add-army ::b/chile 3) teg/finish-action

                 ; attack (Richo)
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [1 1 1]])
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [1 1 1]])
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/peru [1 1 1]])
                 (teg/invade ::b/argentina ::b/peru 1)
                 teg/finish-action

                 ; regroup (Richo)
                 teg/finish-action

                 ; attack (Sofía)
                 teg/finish-action
                 teg/finish-action
                 
                 ; add-army
                 (teg/add-army ::b/argentina 3) teg/finish-action
                 (teg/add-army ::b/chile 3) teg/finish-action
                                  
                 ; attack (Richo)
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/chile [1 1 1]])
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/chile [1 1 1]])
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/chile [1 1 1]])
                 (teg/attack [::b/argentina [6 6 6]]
                             [::b/chile [1 1 1]])
                 (teg/invade ::b/argentina ::b/chile 1))]
    (is (zero? (count (teg/player-countries game ::p2))))
    (is (zero? (count (teg/player-countries game ::p3))))
    (is (= ::p1 (teg/get-current-player game)))))

(deftest finish-action-after-regroup-should-consider-continent-ownership
  (let [game (-> (teg/new-game)
                 (teg/join-game ::p1 "Richo")
                 (teg/join-game ::p2 "Diego")
                 (teg/join-game ::p3 "Sofía")
                 (teg/distribute-countries
                  [::b/australia ::b/india  ::b/malasia
                   ::b/sumatra   ::b/china  ::b/gobi
                   ::b/borneo    ::b/java   ::b/iran])
                 teg/start-game

                 ; add-army-1
                 (teg/add-army ::b/australia 5) teg/finish-action
                 (teg/add-army ::b/india 5) teg/finish-action
                 (teg/add-army ::b/malasia 5) teg/finish-action

                 ; add-army-2
                 (teg/add-army ::b/australia 3) teg/finish-action
                 (teg/add-army ::b/china 3) teg/finish-action
                 (teg/add-army ::b/gobi 3) teg/finish-action

                 ; attack (Richo)
                 (teg/attack [::b/australia [6 6 6]]
                             [::b/java [1]])
                 (teg/invade ::b/australia ::b/java 1)
                 teg/finish-action

                 ; regroup (Richo)
                 teg/finish-action

                 ; attack/regroup (Diego)
                 teg/finish-action teg/finish-action

                 ; attack/regroup (Sofía)
                 teg/finish-action teg/finish-action)]
    (is (= ::teg/add-army-oceania (teg/get-current-phase game)))))

(deftest finish-action-after-add-army-should-consider-same-player-continent-ownership
  (let [game-atom (atom (-> (teg/new-game)
                            (teg/join-game ::p1 "Richo")
                            (teg/join-game ::p2 "Diego")
                            (teg/join-game ::p3 "Sofía")
                            (teg/distribute-countries (sort (keys b/countries)))
                            teg/start-game))]
    ; HACK(Richo): I'm changing the ownership of africa and south-america by hand 
    ; because invading each country seems too much work.
    (doseq [country (b/get-countries-by-continent ::b/africa)]
      (swap! game-atom assoc-in [:countries country :owner] ::p1))
    (doseq [country (b/get-countries-by-continent ::b/south-america)]
      (swap! game-atom assoc-in [:countries country :owner] ::p1))
    (swap! game-atom
           #(-> %
                ; add-army-1
                (teg/add-army ::b/alaska 5) teg/finish-action
                (teg/add-army ::b/alemania 5) teg/finish-action
                (teg/add-army ::b/arabia 5) teg/finish-action

                ; add-army-2
                (teg/add-army ::b/alaska 3) teg/finish-action
                (teg/add-army ::b/alemania 3) teg/finish-action
                (teg/add-army ::b/arabia 3) teg/finish-action

                ; attack/regroup (Richo)
                teg/finish-action teg/finish-action

                ; attack/regroup (Diego)
                teg/finish-action teg/finish-action

                ; attack/regroup (Sofía)
                teg/finish-action teg/finish-action))
    (is (= ::teg/add-army-south-america (teg/get-current-phase @game-atom)))
    (swap! game-atom #(-> %
                          (teg/add-army ::b/argentina 3)
                          teg/finish-action))
    (is (= ::teg/add-army-africa (teg/get-current-phase @game-atom)))
    (swap! game-atom #(-> %
                          (teg/add-army ::b/sahara 3)
                          teg/finish-action))
    (is (= ::teg/add-army (teg/get-current-phase @game-atom)))))

(deftest finish-action-after-add-army-should-consider-different-player-continent-ownership
  (let [game-atom (atom (-> (teg/new-game)
                            (teg/join-game ::p1 "Richo")
                            (teg/join-game ::p2 "Diego")
                            (teg/join-game ::p3 "Sofía")
                            (teg/distribute-countries (sort (keys b/countries)))
                            teg/start-game))]
    ; HACK(Richo): I'm changing the ownership of africa and south-america by hand 
    ; because invading each country seems too much work.
    (doseq [country (b/get-countries-by-continent ::b/africa)]
      (swap! game-atom assoc-in [:countries country :owner] ::p1))
    (doseq [country (b/get-countries-by-continent ::b/south-america)]
      (swap! game-atom assoc-in [:countries country :owner] ::p2))
    (swap! game-atom
           #(-> %
                ; add-army-1
                (teg/add-army ::b/alaska 5) teg/finish-action
                (teg/add-army ::b/alemania 5) teg/finish-action
                (teg/add-army ::b/arabia 5) teg/finish-action

                ; add-army-2
                (teg/add-army ::b/alaska 3) teg/finish-action
                (teg/add-army ::b/alemania 3) teg/finish-action
                (teg/add-army ::b/arabia 3) teg/finish-action

                ; attack/regroup (Richo)
                teg/finish-action teg/finish-action

                ; attack/regroup (Diego)
                teg/finish-action teg/finish-action

                ; attack/regroup (Sofía)
                teg/finish-action teg/finish-action))
    (is (= ::teg/add-army-africa (teg/get-current-phase @game-atom)))
    (is (= ::p1 (teg/get-current-player @game-atom)))
    (swap! game-atom #(-> %
                          (teg/add-army ::b/sahara 3)
                          teg/finish-action))
    (is (= ::teg/add-army (teg/get-current-phase @game-atom)))
    (is (= ::p1 (teg/get-current-player @game-atom)))
    (swap! game-atom #(-> %
                          (teg/add-army ::b/sahara (teg/calculate-extra-army @game-atom))
                          teg/finish-action))
    (is (= ::teg/add-army-south-america (teg/get-current-phase @game-atom)))
    (is (= ::p2 (teg/get-current-player @game-atom)))))
