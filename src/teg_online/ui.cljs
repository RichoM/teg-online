(ns teg-online.ui
  (:require [clojure.core.async :as a :refer [go go-loop <! timeout]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [teg-online.utils.async :refer [go-try <? chan->promise]]
            [teg-online.utils.core :as u]
            [teg-online.game :as teg]
            [teg-online.board :as b]))

(defonce world (js/World. (js/document.querySelector "#board-canvas")))

(def state (atom {:countries {}}))

(defn resize-canvas [canvas w h]
  (print [w h])
  (set! (.-width canvas) w)
  (set! (.-height canvas) h))

(def country-data
  {; South America
   ::b/colombia {:position [718 1028]
                 :img "imgs/colombia.png"
               :counter-offset [-15 -34]}
   ::b/peru {:position [751 1154]
             :img "imgs/peru.png"
               :counter-offset [-26 -28]}
   ::b/argentina {:position [811 1281]
                  :img "imgs/argentina.png"
               :counter-offset [22 -20]}
   ::b/chile {:position [790 1287]
              :img "imgs/chile.png"
               :counter-offset [-13 3]}
   ::b/uruguay {:position [949 1281]
                :img "imgs/uruguay.png"
               :counter-offset [-5 -33]}
   ::b/brasil {:position [892 1045]
               :img "imgs/brasil.png"
               :counter-offset [-39 -31]}
   
   ; North America
   ::b/alaska {:position [23 550]
               :img "imgs/alaska.png"
               :counter-offset [-23 -37]}
   ::b/california {:position [263 774]
                   :img "imgs/california.png"
               :counter-offset [-90 14]}
   ::b/canada {:position [289 269]
               :img "imgs/canada.png"
               :counter-offset [-40 -54]}
   ::b/groenlandia {:position [721 277]
                    :img "imgs/groenlandia.png"
               :counter-offset [42 -84]}
   ::b/labrador {:position [618 475]
                 :img "imgs/labrador.png"
                 :counter-offset [-5 -12]}
   ::b/mexico {:position [429 869]
               :img "imgs/mexico.png"
               :counter-offset [-51 -65]}
   ::b/nueva-york {:position [399 562]
                   :img "imgs/nueva_york.png"
               :counter-offset [47 64]}
   ::b/oregon {:position [70 689]
               :img "imgs/oregon.png"
               :counter-offset [-60 26]}
   ::b/terranova {:position [480 532]
                  :img "imgs/terranova.png"
               :counter-offset [-60 -14]}
   ::b/yukon {:position [134 416]
              :img "imgs/yukon.png"
               :counter-offset [-23 8]}
   })

(def player-colors-ACAACA
  ["red"
   "green"
   "blue"
   "yellow"
   "orange"
   "hotpink"
   "black"
   "skyblue"])

(def player-colors
  ["#e41a1c"
   "#377eb8"
   "#4daf4a"
   "#ff7f00"
   "#ffff33"
   "#a65628"
   "#f781bf"
   "black"])

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

(defn hex [n]
  (let [s (.toString n 16)]
    (if (< (count s) 2)
      (str "0" s)
      s)))

(defn color->str [color]
  (if (string? color)
    color
    (let [[r g b] color]
      (str "#"
           (hex r)
           (hex g)
           (hex b)))))

(defn make-army-counter [color]
  (let [morph (js/Ellipse.)
        label (js/Label. "1")
        text-color (if (contains? #{"black" "blue" "green"} color)
                     "white"
                     "black")]
    (print text-color)
    (set! (.-width morph) 38)
    (set! (.-height morph) 38)
    (set! (.-color morph) (color->str color))
    (set! (.-border morph) text-color)
    (.addMorph morph label)
    (set! (.-center label) (.-center morph))
    (set! (.-color label) text-color)
    (set! (.-alpha morph) 0)
    morph))

(defn update-army-counter [^js morph color count]
  (set! (.-color morph) color)
  (let [text-color (if (contains? #{"black" "blue" "green"} color)
                     "white"
                     "black")]
    (set! (.-border morph) text-color)
    (let [label (first (.-submorphs morph))]
      (set! (.-text label) (str count))
      (set! (.-color label) text-color)
      (set! (.-center label) (.-center morph)))))
  

(defn init-country [idx name {[x y] :position, img :img, [ox oy] :counter-offset} game]
  (go
    (print idx ". " name)
    (let [original-form (<! (load-form img))
          tinted-forms (<! (a/map vector
                                  (mapv (fn [c] (tint original-form (color->str c)))
                                        player-colors)))
          morph (js/Sprite. original-form)
          counter (make-army-counter "black")
          min-alpha 0.5
          max-alpha 1.0]
      (set! (.-position morph) #js {:x x :y y})
      (let [cx (+ x (/ (.-width morph) 2))
            cy (+ y (/ (.-height morph) 2))]
        (let [d 6]
          (set! (.-width morph) (- (.-width morph) d))
          (set! (.-height morph) (- (.-height morph) d))
          (set! (.-center morph) (clj->js {:x cx :y cy}))
          (set! (.-center counter) (clj->js {:x (+ cx ox) :y (+ cy oy)}))))
      (set! (.-alpha morph) 0) ; Initially transparent
      (.addMorph world morph)
      (.addMorph world counter)
      (doto morph
        (.on "mouseDown"
             #(set! (.-alpha morph) max-alpha))
        (.on "mouseUp" 
             #(do (print name)
                  (.addMorph world morph)
                  (.addMorph world counter)
                  (set! (.-alpha morph) min-alpha))))
      (swap! state 
             assoc-in [:countries name] 
             {:morph morph
              :counter counter
              :tinted-forms tinted-forms}))))

(defn init-countries [game]
  (go
    (doseq [[i [name data]] (map-indexed vector (shuffle country-data))]
      (init-country i name data game))))

(defn init-map []
  (go
    (let [form (<! (load-form "imgs/teg_board.png"))
          map (js/Sprite. form)]
      (.addMorph world map)
      (resize-canvas (-> world .-canvas .-html)
                     (.-width map)
                     (.-height map)))))

(defn init [game]
  (go (.removeAllSubmorphs world)
      (<! (init-map))
      (<! (init-countries game))))

(defn update-ui [{:keys [players turn-order]}]
  (doseq [[idx pid] (map-indexed vector turn-order)]
    (let [{:keys [army]} (players pid)]
      (doseq [[country army-count] army]
        (print country army-count)
        (when-let [{:keys [morph counter tinted-forms]} (get-in @state [:countries country])]
          (set! (.-form morph) (nth tinted-forms idx))
          (set! (.-alpha morph) 0.5)
          (set! (.-alpha counter) 1)
          (update-army-counter counter (nth player-colors idx) army-count))))))
