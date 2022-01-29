(ns teg-online.main
  (:require [clojure.core.async :as a :refer [go go-loop <! timeout]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [teg-online.utils.async :refer [go-try <? chan->promise]]
            [teg-online.game :as teg]
            [teg-online.board :as b]))

(defonce world (js/World. (js/document.querySelector "#board-canvas")))

(defn resize-canvas [canvas w h]
  (print [w h])
  (set! (.-width canvas) w)
  (set! (.-height canvas) h))

(def country-data
  {::b/colombia {:position [830 1108]
                 :img "imgs/colombia.png"}
   ::b/peru {:position [850 1230]
             :img "imgs/peru.png"}
   ::b/argentina {:position [899 1456]
                  :img "imgs/argentina.png"}
   ::b/chile {:position [826 1433]
              :img "imgs/chile.png"}
   ::b/uruguay {:position [1029 1356]
                :img "imgs/uruguay.png"}
   ::b/brasil {:position [1058 1181]
               :img "imgs/brasil.png"}})

(defn load-form [path]
  (go (<p! (js/Form.loadImage path))))

(defn highlight-form [^js/Form form]
  (go (<p! (.tint form 155 205 0))))

(defn init-country [{[x y] :position, img :img}]
  (go
    (let [original-form (<! (load-form img))
          tinted-form (<! (highlight-form original-form))
          morph (js/Sprite. original-form)
          picked? (atom false)
          label (js/Label. "")
          update-label! (fn []
                          (set! (.-color label) "red")
                          (set! (.-text label) (js/JSON.stringify (.-center morph)))
                          (set! (.-center label) (.-center morph)))]
      (set! (.-center morph) #js {:x x :y y})
      (set! (.-alpha morph) 0.5)
      (.addMorph world morph)
      (update-label!)
      (doto morph
        (.addMorph label)
        (.on "step" #(when @picked?
                       (set! (.-center morph) (.-cursor js/World))
                       (update-label!)))
        (.on "mouseDown" #(do
                            ;(reset! picked? true)
                            (set! (.-alpha morph) 0)
                            (.addMorph world morph) ; Send to top
                            (set! (.-form morph) tinted-form)))
        (.on "mouseUp" #(do
                          (reset! picked? false)
                          (set! (.-alpha morph) 0.5)
                          #_(set! (.-form morph) original-form)))))))

(defn init-countries []
  (go
    (doseq [[_ country] country-data]
      (init-country country))))

(defn init-map []
  (go
    (let [form (<! (load-form "imgs/teg_board.png"))
          map (js/Sprite. form)]
      (.addMorph world map)
      (resize-canvas (-> world .-canvas .-html)
                     (.-width map)
                     (.-height map)))))

(defn init []
  (go
    (print "HELLO!")
    (<! (init-countries))
    (<! (init-map))
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