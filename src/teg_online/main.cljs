(ns teg-online.main
  (:require [clojure.core.async :as a :refer [go <!]]
            [teg-online.utils.firebase :as fb]
            [teg-online.game :as teg]
            [teg-online.ui :as ui]))

(defonce game (atom (teg/new-game)))
(defonce game-fb (atom nil))
(def sorted-countries (-> @game :countries keys sort vec))

(defn game->doc [game]
  (assoc game 
         :countries
         (mapv (fn [country]
                (let [{:keys [army owner]} (get-in game [:countries country])]
                  {:army army, :owner owner}))
              sorted-countries)))

(defn doc->game [{:keys [phase turn turn-order players countries]}]
  {:phase (keyword (namespace ::teg/*) phase)
   :turn turn
   :turn-order (mapv keyword turn-order)
   :players (reduce-kv (fn [m k {:keys [cards id] :as player}]
                         (assoc m k
                                (assoc player
                                       :cards (set cards)
                                       :id (keyword id))))
                       {}
                       players)
   :countries (into {} (map-indexed (fn [idx {:keys [army owner]}]
                                      (let [id (nth sorted-countries idx)]
                                        [id
                                         {:id id
                                          :army army
                                          :owner (keyword owner)}]))
                                    countries))})



(comment

  (def foo (atom nil))
  (reset! foo 12)
  (keyword (str (random-uuid)))
  (clojure.data/diff @game-fb @game)
  (= @game-fb
     @game)

  (let [game @game]
    (into {} (map-indexed (fn [i p] [p i]) (game :turn-order))))

  )


(def collection-id "games_dev")
(def doc-id "YkUz0FC4XJC4qKKNmViE")

(defn init-firebase [game-atom]
  (let [last-update (atom nil)]
    (add-watch game-atom :firebase
               (fn [_ _ _ game]
                 (when (not= game @last-update)
                   (-> js/db
                       (.collection collection-id)
                       (.doc doc-id)
                       (.set (clj->js (game->doc game)))))))
    (-> js/db
        (.collection collection-id)
        (.doc doc-id)
        (.onSnapshot (fn [snapshot]
                       (reset! game-atom
                               (reset! last-update (doc->game (js->clj (.data snapshot)
                                                                       :keywordize-keys true)))))))))


(defn init []
  (go
    (print "HELLO!")
    (init-firebase game)
    (<! (ui/initialize game))
    #_(do
      (reset! game (teg/new-game))
      (swap! game teg/join-game :p1 "Richo")
      (swap! game teg/join-game :p2 "Diego")
      (swap! game teg/join-game :p3 "Sofi")
      ;(swap! game teg/join-game :p4 "Lechu")
      ;(swap! game teg/join-game :p5 "Santi")
      ;(swap! game teg/join-game :p6 "Papa")
      ;(swap! game teg/join-game :p7 "Tera")
      ;(swap! game teg/join-game :p8 "Maxi")
      (swap! game teg/distribute-countries)
      (swap! game teg/start-game)
      )
    (print "BYE!")))

(defn ^:dev/before-load-async reload-begin* [done]
  (go (<! (ui/terminate))
      (done)))

(defn ^:dev/after-load-async reload-end* [done]
  (go (init-firebase game)
      (<! (ui/initialize game))
      (done)))

(comment
  (def game @game)

  (do
    (reset! game (teg/new-game))
    (swap! game teg/join-game :p1 "Richo")
    (swap! game teg/join-game :p2 "Lechu")
    (swap! game teg/join-game :p3 "Diego")
    (swap! game teg/distribute-countries)
    (swap! game teg/start-game)
    (swap! game teg/add-army :teg-online.board/argentina 4)
    (swap! game teg/add-army :teg-online.board/chile 4)    
    (swap! game assoc-in [:countries :teg-online.board/argentina :owner] :p1)
    (swap! game assoc-in [:countries :teg-online.board/chile :owner] :p2)
    (swap! game teg/next-phase ::teg/attack))

  (reset! game (teg/new-game))
  (swap! game teg/join-game :p1 "Richo")
  (swap! game teg/join-game :p2 "Lechu")
  (swap! game teg/join-game :p3 "Diego")
  (swap! game teg/distribute-countries)
  (swap! game teg/add-army :teg-online.board/chile 1)
  

  (swap! game update-in [:turn] inc)
  (swap! game update-in [:players :p1 :name] (constantly "Un nombre mucho muy muuuuy largo"))

  (ui/update-ui @game)
  (get-in @game [:players :p1 :army])

  (get-in @game [:countries :teg-online.board/alaska :owner])
  (swap! game assoc-in [:countries :teg-online.board/siberia :owner] :p1)

  (swap! game assoc-in [:phase] ::teg/regroup)

  (teg/get-current-player @game)

  (fb/save-doc! "games_dev" "prueba_4" @game)

  (key->js ::richo str)

  (js->clj (clj->js {:a ::richo}
                    :keyword-fn str)
           :keywordize-keys true)
  


  (def changes (fb/on-snapshot "games_dev" "prueba_4"))
  (go (loop []
        (when-some [data (<! changes)]
          (print data)
          (recur))))
  

  (def foo (atom 0))

  (add-watch foo :c (fn [_ _ _ v] 
                      (print v)
                      (swap! foo inc)))
  (swap! foo inc)
  )