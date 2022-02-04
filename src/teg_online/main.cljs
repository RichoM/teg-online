(ns teg-online.main
  (:require [clojure.core.async :as a :refer [go go-loop <! timeout]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [teg-online.utils.async :refer [go-try <? chan->promise]]
            [teg-online.game :as teg]
            [teg-online.ui :as ui]))

(defonce game (atom (teg/new-game)))

(defn init []
  (go
    (print "HELLO!")
    (add-watch game :state-change
               (fn [key atom old-state new-state]
                 (ui/update-ui new-state)
                 (print "State changed!")))
    (<! (ui/init game))
    (print "BYE!")))


(comment
  (def game @game)
  (reset! game (teg/new-game))
  (swap! game teg/join-game ::p1 "Richo")
  (swap! game teg/join-game ::p2 "Lechu")
  (swap! game teg/join-game ::p3 "Diego")
  (swap! game teg/distribute-countries)
  (swap! game teg/add-army ::p1 :teg-online.board/california 10)
  (ui/update-ui @game)
(get-in @game [:players ::p1 :army])
  )