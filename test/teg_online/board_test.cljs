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
                    name id neighbour)))))
