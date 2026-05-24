(ns teg-online.ai.response-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [teg-online.game :as teg]
            [teg-online.board :as board]
            [teg-online.ai.response :as r]))

(deftest sanity-check
  (is (= 0 0)))

(def base-game (-> (teg/new-game)
                   (teg/join-game ::p1 "Richo")
                   (teg/join-game ::p2 "Diego")
                   (teg/distribute-countries (keys board/countries))))

(defn apply-actions [game actions]
  (reduce #(r/apply-action %2 %1)
          game actions))

(deftest add-army-response
  (let [game (-> base-game
                 (teg/start-game))
        response "Argentina,3\nChile,2"
        actions (r/parse-response game response)]
    (is (isa? (:phase game) ::teg/add-army))
    (is (= [{:action ::r/add-army
             :country ::board/argentina
             :units 3}
            {:action ::r/add-army
             :country ::board/chile
             :units 2}]
           actions))
    (is (= (-> game
               (teg/add-army ::board/argentina 3)
               (teg/add-army ::board/chile 2))
           (apply-actions game actions)))))

(deftest add-army-pass-response
  (let [game (-> base-game
                 (teg/start-game))
        responses ["paso" "  paso" "\tpaso   " "PASO" "   Paso  "]
        actions (vec (mapcat (partial r/parse-response game) responses))]
    (is (isa? (:phase game) ::teg/add-army))
    (is (= (repeat (count responses)
                   {:action ::r/pass})
           actions))
    (is (= (teg/finish-action game)
           (apply-actions game (set actions))))))

(deftest attack-response
  (let [game (-> base-game
                 (teg/start-game)

                 ; First turn ::add-army-1
                 (teg/add-army ::board/argentina 5)
                 (teg/finish-action)
                 (teg/add-army ::board/peru 5)
                 (teg/finish-action)

                 ; Second turn ::add-army-2
                 (teg/add-army ::board/argentina 3)
                 (teg/finish-action)
                 (teg/add-army ::board/peru 3)
                 (teg/finish-action))
        response "Argentina,Uruguay,3,3"
        actions (r/parse-response game response)]
    (is (isa? (:phase game) ::teg/attack))
    (is (= [{:action ::r/attack
             :attacker ::board/argentina
             :defender ::board/uruguay
             :sacrifice 3
             :move 3}]
           actions))

    (try
      (r/rand-seed! 420)
      (is (= (-> game
                 (teg/attack [::board/argentina [5 3 1]] 
                             [::board/uruguay [0]])
                 (teg/invade ::board/argentina ::board/uruguay 3))
             (apply-actions game actions)))
      (finally
        (r/rand-seed! nil)))))

(deftest attack-pass-response
  (let [game (-> base-game
                 (teg/start-game)

                 ; First turn ::add-army-1
                 (teg/add-army ::board/argentina 5)
                 (teg/finish-action)
                 (teg/add-army ::board/peru 5)
                 (teg/finish-action)

                 ; Second turn ::add-army-2
                 (teg/add-army ::board/argentina 3)
                 (teg/finish-action)
                 (teg/add-army ::board/peru 3)
                 (teg/finish-action))
        responses ["paso" "  paso" "\tpaso   " "PASO" "   Paso  "]
        actions (vec (mapcat (partial r/parse-response game) responses))]
    (is (isa? (:phase game) ::teg/attack))
    (is (= (repeat (count responses)
                   {:action ::r/pass})
           actions))
    (is (= (teg/finish-action game)
           (apply-actions game (set actions))))))

(deftest regroup-response
  (let [game (-> base-game
                 (teg/start-game)

                  ; First turn ::add-army-1
                 (teg/add-army ::board/argentina 5)
                 (teg/finish-action)
                 (teg/add-army ::board/peru 5)
                 (teg/finish-action)

                  ; Second turn ::add-army-2
                 (teg/add-army ::board/argentina 3)
                 (teg/finish-action)
                 (teg/add-army ::board/peru 3)
                 (teg/finish-action)

                 ; Third turn :attack
                 (teg/finish-action))
        response "Argentina,Chile,3"
        actions (r/parse-response game response)]
    (is (isa? (:phase game) ::teg/regroup))
    (is (= [{:action ::r/regroup
             :origin ::board/argentina
             :destination ::board/chile
             :move 3}]
           actions))
    (is (= (teg/regroup game ::board/argentina ::board/chile 3)
           (apply-actions game actions)))))

(comment

  
  (teg/country-exists? game ::board/chile)

  (tap> *e)
  (-> (teg/new-game)
      (teg/join-game ::p1 "Richo")
      (teg/join-game ::p2 "Diego")
      (teg/distribute-countries (keys board/countries)))

  (teg/start-game base-)
  (tap> game)
  (tap> *1)
  
  
  )