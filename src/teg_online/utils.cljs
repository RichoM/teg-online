(ns teg-online.utils)

(defn deal [cards players]
  (let [player-count (count players)
        shuffled-cards (shuffle cards)]
    (into {}
          (map-indexed (fn [i p]
                         [p (take-nth player-count (drop i shuffled-cards))])
                       players))))