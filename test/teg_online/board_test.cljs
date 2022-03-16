(ns teg-online.board-test
  (:require [cljs.test :refer-macros [deftest is]]
            [teg-online.board :as b]
            [teg-online.utils.core :as u]))

(deftest countries-should-have-a-valid-continent
  (doseq [[id {:keys [name continent]}] b/countries]
    (is (contains? b/continents continent)
        (u/format "%1 (%2) has an invalid continent (%3)"
                  name id continent))))

(deftest countries-should-have-valid-neighbours
  (doseq [[id {:keys [name neighbours]}] b/countries]
    (is (seq neighbours)
        (u/format "%1 (%2) should have at least one neighbour"
                  name id))
    (doseq [neighbour neighbours]
      (is (not= id neighbour)
          (u/format "%1 (%2) cannot be its own neighbour"
                    name id))
      (is (contains? b/countries neighbour)
          (u/format "%1 (%2) has an invalid neighour (%3)"
                    name id neighbour))
      (is (contains? ((b/countries neighbour) :neighbours) id)
          (u/format "%1 (%2) has non corresponding neighbour (%3)"
                    name id neighbour)))))

(deftest cards-should-correspond-to-countries
  (let [cards-by-country (group-by first b/cards)]
    (doseq [id (keys b/countries)]
      (is (contains? cards-by-country id)
          (u/format "%1 doesn't have a card" id)))))

(deftest card-types-should-match
  (let [cards-by-type (group-by second b/cards)]
    (is (= 2 (count (cards-by-type ::b/all))))
    (is (= 16 (count (cards-by-type ::b/balloon))))
    (is (= 16 (count (cards-by-type ::b/cannon))))
    (is (= 16 (count (cards-by-type ::b/ship))))))