(ns teg-online.ui
  (:require [clojure.core.async :as a :refer [go go-loop <! timeout]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [teg-online.utils.async :refer [go-try <? chan->promise]]
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

(def player-colors
  [[255 0 0]
   [0 255 0]
   [0 0 255]
   [255 0 255]
   [0 255 255]
   [255 255 0]
   [0 0 0]
   [255 255 255]])

(defn load-form [path]
  (go (<p! (js/Form.loadImage path))))

(defn highlight-form [^js/Form form [r g b]]
  (go (<p! (.tint form r g b))))

(defn hex [n]
  (let [s (.toString n 16)]
    (if (< (count s) 2)
      (str "0" s)
      s)))

(defn color->str [[r g b]]
  (str "#"
       (hex r)
       (hex g)
       (hex b)))

(defn make-army-counter [color]
  (let [morph (js/Ellipse.)
        label (js/Label. 1)]
    (set! (.-width morph) 40)
    (set! (.-height morph) 40)
    (set! (.-color morph) (color->str color))
    (set! (.-border morph) "3px solid black")
    (.addMorph morph label)
    (set! (.-center label) (.-center label))
    morph))

(.toString 255 16)


(defn init-country [idx name {[x y] :position, img :img}]
  (go
    (let [color (nth player-colors idx)
          original-form (<! (load-form img))
          tinted-form (<! (highlight-form original-form color))
          morph (js/Sprite. original-form)
          picked? (atom false)
          label (js/Label. "")
          counter (make-army-counter color)
          update-label! (fn []
                          (set! (.-color label) "red")
                          (set! (.-text label) (js/JSON.stringify (clj->js color) #_(.-center morph)))
                          (set! (.-center label) (.-center morph)))]
      (set! (.-center morph) #js {:x x :y y})
      (set! (.-center counter) (.-center morph))
      (set! (.-alpha morph) 0.25)
      (.addMorph world morph)
      (.addMorph world counter)
      (update-label!)
      (set! (.-form morph) tinted-form)
      (doto morph
        (.addMorph label)
        ;(.addMorph counter)
        (.on "step" #(when @picked?
                       (set! (.-center morph) (.-cursor js/World))
                       (update-label!)))
        (.on "mouseDown" #(do
                            ;(reset! picked? true)
                            (.addMorph world morph) ; Send to top
                            (set! (.-form morph) tinted-form)))
        (.on "mouseUp" #(do
                          (reset! picked? false)
                          #_(set! (.-form morph) original-form)))))))

(defn init-countries []
  (go
    (doseq [[i [name data]] (map-indexed vector country-data)]
      (init-country i name data))))

(defn init-map []
  (go
    (let [form (<! (load-form "imgs/teg_board.png"))
          map (js/Sprite. form)]
      (.addMorph world map)
      (resize-canvas (-> world .-canvas .-html)
                     (.-width map)
                     (.-height map)))))

(defn update-ui [{:keys [players]}]
  ())