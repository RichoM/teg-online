(ns teg-online.utils.core
  (:refer-clojure :exclude [format])
  (:require [clojure.string :as str]))

(defn deal [cards players]
  (let [player-count (count players)
        shuffled-cards (shuffle cards)]
    (into {}
          (map-indexed (fn [i p]
                         [p (take-nth player-count (drop i shuffled-cards))])
                       players))))

(defn seek
  ([pred coll]
   (reduce #(when (pred %2) (reduced %2)) nil coll))
  ([pred coll default-value]
   (or (reduce #(when (pred %2) (reduced %2)) nil coll)
       default-value)))

(defn index-of ^long
  [^java.util.List v e]
  (.indexOf v e))

(defn format
  "Simple string formatting function. It doesn't support any fancy features
  (but works in cljs)"
  [text & args]
  (loop [t text, i 0]
    (if-let [val (nth args i nil)]
      (recur
       (str/replace t (str "%" (inc i)) (str val))
       (inc i))
      t)))
