(ns teg-online.ai.local-handlers
  (:require [clojure.string :as str]
            [clojure.pprint :as pp]
            [clojure.core.async :as a]
            [teg-online.utils.async :refer [go-try <?]]
            [teg-online.ai.actions :as actions]
            [teg-online.game :as teg]))

(defn get-random-actions! [game turn-actions _ _]
  (go-try
   (let [player-id (teg/get-current-player game)
         actions (->> (repeatedly #(actions/random-actions game turn-actions))
                      (take 1000)
                      (vec)
                      (rand-nth))
         mutation (actions/make-mutation actions)
         score (get (<? (actions/calculate-score game mutation))
                    player-id)]
     {:conversation []
      :actions (if (pos? (:absolute score))
                 actions
                 [actions/pass])})))

(defn get-best-actions! [game turn-actions _ _]
  (go-try
   (let [player-id (teg/get-current-player game)
         all-actions (<? (->> (actions/all-actions game turn-actions)
                              (take 1000)
                              (map (fn [actions]
                                     (go-try
                                      (let [mutation (actions/make-mutation actions)
                                            score (<? (actions/calculate-score game mutation))]
                                        {:actions actions
                                         :score (-> score player-id)}))))
                              (a/map vector)))
         sort-normalized (delay
                           (->> all-actions
                                (sort-by (comp :normalized :score) >)))
         sort-absolute (delay
                         (->> all-actions
                              (sort-by (comp :absolute :score) >)))
         best-normalized (delay
                           (first @sort-normalized))
         best-absolute (delay
                         (first @sort-absolute))
         best (if (and (pos? (-> @best-normalized :score :normalized))
                       (pos? (-> @best-normalized :score :absolute)))
                @best-normalized
                @best-absolute)]
     (println "ACTION:" best)
     {:conversation [(str "Options (" (count all-actions) ")"
                          "\n\n"
                          (->> @sort-normalized
                               (map (fn [scored-action]
                                      (pp/write scored-action :stream nil)))
                               (str/join "\n\n")))]
      :actions (if (> (-> best :score :absolute) 0.0)
                 (:actions best)
                 [actions/pass])})))

(defn get-placeholder-actions! [game turn-actions model log]
  (go-try
   {:conversation []
    :actions [actions/pass]}))

(defn handler-by-id [model-id]
  (case model-id
    :random get-random-actions!
    :best get-best-actions!
    get-placeholder-actions!))
