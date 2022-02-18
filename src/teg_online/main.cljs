(ns teg-online.main
  (:require [clojure.core.async :as a :refer [go <!]]
            [teg-online.game :as teg]
            [teg-online.ui :as ui]))

(defonce game (atom (teg/new-game)))

(defn init []
  (go
    (print "HELLO!")
    (<! (ui/initialize game))
    (do
      (reset! game (teg/new-game))
      (swap! game teg/join-game ::p1 "Richo")
      (swap! game teg/join-game ::p2 "Lechu")
      (swap! game teg/join-game ::p3 "Diego")
      (swap! game teg/join-game ::p4 "Sofi")
      (swap! game teg/join-game ::p5 "Santi")
      (swap! game teg/join-game ::p6 "Papa")
      (swap! game teg/join-game ::p7 "Tera")
      (swap! game teg/join-game ::p8 "Maxi")
      (swap! game teg/distribute-countries)
      (swap! game teg/start-game)
      )
    (print "BYE!")))

(defn ^:dev/before-load-async reload-begin* [done]
  (go (<! (ui/terminate))
      (done)))

(defn ^:dev/after-load-async reload-end* [done]
  (go (<! (ui/initialize game))
      (done)))

(comment
  (def game @game)

  (do
    (reset! game (teg/new-game))
    (swap! game teg/join-game ::p1 "Richo")
    (swap! game teg/join-game ::p2 "Lechu")
    (swap! game teg/join-game ::p3 "Diego")
    (swap! game teg/distribute-countries)
    (swap! game teg/start-game)
    (swap! game teg/add-army :teg-online.board/argentina 2)
    (swap! game teg/add-army :teg-online.board/chile 2))

  (reset! game (teg/new-game))
  (swap! game teg/join-game ::p1 "Richo")
  (swap! game teg/join-game ::p2 "Lechu")
  (swap! game teg/join-game ::p3 "Diego")
  (swap! game teg/distribute-countries)
  (swap! game teg/add-army :teg-online.board/israel 10)

  (swap! game update-in [:turn] inc)
  (swap! game update-in [:players ::p1 :name] (constantly "Un nombre mucho muy muuuuy largo"))

  (ui/update-ui @game)
  (get-in @game [:players ::p1 :army])

  (get-in @game [:countries :teg-online.board/alaska :owner])
  (swap! game assoc-in [:countries :teg-online.board/siberia :owner] ::p1)

  (swap! game assoc-in [:phase] ::teg/regroup)

  (teg/get-current-player @game)
  )