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
    (<! (ui/init-countries))
    (<! (ui/init-map))
    (print "BYE!")))


(comment
  
  (count (.-submorphs world))
  (def world (js/World. (js/document.querySelector "#board")))
  (def board (js/Morph.))
  (.addMorph world (let [m (js/Morph.)]
                     (set! (.-width m) 300)
                     (set! (.-height m) 400)
                     m))
  
  

  (.-width world)

  (set! (.-width (js/document.querySelector "#board-canvas")) (.-width board))
  (set! (.-height (js/document.querySelector "#board-canvas")) (.-height board))
  (.changed world)
  world
  (def board (first (.-submorphs world)))
  
  )