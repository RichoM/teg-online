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
  {; South America
   ::b/colombia {:position [718 1028]
                 :img "imgs/colombia.png"}
   ::b/peru {:position [751 1154]
             :img "imgs/peru.png"}
   ::b/argentina {:position [811 1281]
                  :img "imgs/argentina.png"}
   ::b/chile {:position [790 1287]
              :img "imgs/chile.png"}
   ::b/uruguay {:position [949 1281]
                :img "imgs/uruguay.png"}
   ::b/brasil {:position [892 1045]
               :img "imgs/brasil.png"}
   
   ; North America
   ::b/alaska {:position [23 550]
               :img "imgs/alaska.png"}
   ::b/california {:position [263 774]
                   :img "imgs/california.png"}
   ::b/canada {:position [289 269]
               :img "imgs/canada.png"}
   ::b/groenlandia {:position [721 277]
                    :img "imgs/groenlandia.png"}
   ::b/labrador {:position [618 475]
                 :img "imgs/labrador.png"}
   ::b/mexico {:position [429 869]
               :img "imgs/mexico.png"}
   ::b/nueva-york {:position [399 562]
                   :img "imgs/nueva_york.png"}
   ::b/oregon {:position [70 689]
               :img "imgs/oregon.png"}
   ::b/terranova {:position [480 532]
                  :img "imgs/terranova.png"}
   ::b/yukon {:position [134 416]
              :img "imgs/yukon.png"}
   })

(def player-colors
  [[0 0 0]
   [255 125 0]
   [255 0 0]
   [0 255 0]
   [0 0 255]
   [205 0 255]
   [0 255 255]
   [255 255 0]])

(defn load-form [path]
  (go (<p! (js/Form.loadImage path))))

(defn tint [^js/Form form color]
  (let [img (.-img form)
        w (.-width img)
        h (.-height img)
        canvas (js/document.createElement "canvas")
        ctx (.getContext canvas "2d")]
    (set! (.-width canvas) w)
    (set! (.-height canvas) h)
    (set! (.-fillStyle ctx) color)
    (.drawImage ctx img 0 0)
    (set! (.-globalCompositeOperation ctx) "source-atop")
    (.fillRect ctx 0 0 w h)
    (let [result-img (js/Image.)
          result-chan (a/promise-chan)]
      (set! (.-onload result-img)
            #(a/put! result-chan (js/Form. result-img)))
      (set! (.-src result-img) (.toDataURL canvas))
      result-chan)))

(comment
  (init)
  )

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
        label (js/Label. "1")]
    (set! (.-width morph) 40)
    (set! (.-height morph) 40)
    (set! (.-color morph) (color->str color))
    (set! (.-border morph) "3px solid black")
    (.addMorph morph label)
    (set! (.-center label) (.-center morph))
    (set! (.-color label) "black")
    morph))

(defn init-country [idx name {[x y] :position, img :img}]
  (go
    (print idx ". " name)
    (let [color (nth player-colors (mod idx (count player-colors)))
          original-form (<! (load-form img))
          tinted-form (<! (tint original-form (color->str color)))
          morph (js/Sprite. original-form)
          picked? (atom false)
          label (js/Label. "")
          counter (make-army-counter color)
          update-label! (fn []
                          (set! (.-color label) "white")
                          (set! (.-text label) (js/JSON.stringify (clj->js color) #_(.-center morph)))
                          (set! (.-center label) (.-center morph)))]
      (set! (.-position morph) #js {:x x :y y})
      (set! (.-center counter) (.-center morph))
      (set! (.-alpha morph) 0.5)
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
                            ;(.addMorph world morph) ; Send to top
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
                     (.-height map))
      #_(let [temp (js/Sprite. form)
            color-idx (atom -1)]
        (.addMorph world temp)
        (set! (.-alpha temp) 0.75)
        (doto temp
          (.on "mouseUp" 
               #(go
                  (print "Wait...")
                  (let [idx (mod (swap! color-idx inc)
                                 (count player-colors))
                        color (nth player-colors idx)
                        tinted-form (<! (highlight-form form color))]
                    (set! (.-form temp) tinted-form)
                    (print (js/JSON.stringify (clj->js color))))
                  (print "Done!"))))))))

(defn init []
  (go (.removeAllSubmorphs world)
      (<! (init-map))
      (<! (init-countries))
      ))


(comment
  (def a (atom 0))
  (swap! a inc)

  (mod 14 13)
  (init)
  (init-countries)
  )

(defn update-ui [{:keys [players]}]
  ())