(ns teg-online.firebase
  (:require [clojure.core.async :as a :refer [go <!]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [oops.core :refer [oget oset!]]
            [teg-online.game :as teg]
            [teg-online.board :as b]))


(def collection-id "games_dev")
(def sorted-countries (-> b/countries keys sort vec))

(def unsubscribe (atom []))

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

(defn connect [doc-id game-atom]
  (let [result (a/chan)
        last-update (atom nil)]
    (add-watch game-atom :firebase
               (fn [_ _ _ game]
                 (when (not= game @last-update)
                   (-> js/db
                       (.collection collection-id)
                       (.doc doc-id)
                       (.set (clj->js (game->doc game)))))))
    (swap! unsubscribe conj
           (-> js/db
               (.collection collection-id)
               (.doc doc-id)
               (.onSnapshot (fn [doc]
                              (when-not (oget doc :metadata.hasPendingWrites)
                                (let [game (doc->game (js->clj (.data doc)
                                                               :keywordize-keys true))]
                                  (reset! last-update game)
                                  (reset! game-atom game)
                                  (a/close! result)))))))
    result))

(comment
  
  
  ,,,)

(defn disconnect []
  (doseq [unsub @unsubscribe]
    (unsub)))


(defn create-game! []
  (go (let [game (-> (teg/new-game))
            doc (<p! (-> js/db
                         (.collection collection-id)
                         (.add (-> game
                                   game->doc
                                   clj->js))))]
        (oget doc :id))))

(defn join-game! [game-id]
  (go (<p! (-> js/db))
      game-id))

(comment
  (<p! (-> js/db
           (.collection collection-id)
           (.doc "lobby")))

  (-> js/db
      (.collection collection-id)
      (.doc "fail"))
  )