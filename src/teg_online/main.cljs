(ns teg-online.main
  (:require [clojure.core.async :as a :refer [go go-loop <! timeout]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [teg-online.utils.async :refer [go-try <? chan->promise]]
            [teg-online.game :as teg]))

(defonce world (js/World. (js/document.querySelector "#board-canvas")))

(defn resize-canvas [canvas w h]
  (print [w h])
  (set! (.-width canvas) w)
  (set! (.-height canvas) h))

(defn display-board []
  (go
    (let [form (<p! (js/Form.loadImage "imgs/teg_board.png"))
          sprite (js/Sprite. form)]
      (.addMorph world sprite)
      (resize-canvas (-> world .-canvas .-html)
                     (.-width sprite)
                     (.-height sprite)))))

(defn init []
  (print "HELLO!")
  (display-board)
  (print "BYE!"))


(comment
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