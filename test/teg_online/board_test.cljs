(ns teg-online.board-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [teg-online.board :as b]))

(deftest countries-should-have-a-valid-continent
  (doseq [[id {:keys [name continent]}] b/countries]
    (is (contains? b/continents continent)
        (str name " (" id ") has an invalid continent (" continent ")"))))

(deftest countries-should-have-valid-neighbours
  (doseq [[id {:keys [name neighbours]}] b/countries]
    (is (seq neighbours)
        (str name " (" id ") should have at least one neighbour"))
    (doseq [neighbour neighbours]
      (is (not= id neighbour)
          (str name " (" id ") cannot be its own neighbour"))
      (is (contains? b/countries neighbour)
          (str name " (" id ") has an invalid neighbour (" neighbour ")")))))
