(ns teg-online.firebase
  (:refer-clojure :exclude [exists?])
  (:require [clojure.core.async :as a :refer [go <!]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [oops.core :refer [oget oset! ocall!]]
            [teg-online.game :as teg]
            [teg-online.board :as b]))

(def collection-id "games_dev")
(def sorted-countries (-> b/countries keys sort vec))

(def destructors (atom []))

(defn game->doc [game]
  (assoc (select-keys game [:phase :turn :turn-order :players])
         :countries (mapv (fn [country]
                            (let [{:keys [army owner]} (get-in game [:countries country])]
                              {:army army, :owner owner}))
                          sorted-countries)))

(defn doc->game [{:keys [phase turn turn-order players countries]}]
  {:phase (keyword (namespace ::teg/*) phase)
   :turn turn
   :turn-order (mapv keyword turn-order)
   :players (into {} (map (fn [[id {:keys [cards name]}]]
                            [id {:id id
                                 :cards (set cards)
                                 :name name}])
                          players))
   :countries (into {} (map-indexed (fn [idx {:keys [army owner]}]
                                      (let [id (nth sorted-countries idx)]
                                        [id {:id id
                                             :army army
                                             :owner (keyword owner)}]))
                                    countries))})

(defn create-game! []
  (go (let [doc (<p! (-> js/db
                         (.collection collection-id)
                         (.add (-> (-> (teg/new-game))
                                   game->doc
                                   clj->js))))]
        (oget doc :id))))

(defn exists? [doc-ref]
  (go (let [doc (<p! (.get doc-ref))]
        (oget doc :exists))))

(defn on-snapshot [doc-ref callback]
  (go (let [wait (a/chan)
            unsub (ocall! doc-ref :onSnapshot
                          (fn [doc]
                            (callback doc)
                            (a/close! wait)))]
        (<! wait)
        unsub)))

(defn connect [doc-id game-atom]
  (go (let [doc-ref (-> js/db
                        (.collection collection-id)
                        (.doc doc-id))]
        (when (<! (exists? doc-ref))
          (let [last-update (atom nil)]
            (add-watch game-atom ::firebase-connection
                       (fn [_ _ _ game]
                         (when (not= game @last-update)
                           (-> js/db
                               (.collection collection-id)
                               (.doc doc-id)
                               (.set (clj->js (game->doc game)))))))
            (swap! destructors conj
                   #(remove-watch game-atom ::firebase-connection))
            (swap! destructors conj
                   (<! (on-snapshot doc-ref
                                    (fn [doc]
                                      (print "CHANGES!" (js/Date.now))
                                      (when-not (oget doc :metadata.hasPendingWrites)
                                        (let [game (doc->game (js->clj (.data doc)
                                                                       :keywordize-keys true))]
                                          (reset! last-update game)
                                          (reset! game-atom game)))))))
            true)))))

(defn disconnect []
  (doseq [destructor (first (reset-vals! destructors []))]
    (destructor)))
