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
   ::b/colombia {:position [572 822]
                 :img "imgs/colombia.png"
                 :counter-offset [-15 -34]}
   ::b/peru {:position [598 922]
             :img "imgs/peru.png"
             :counter-offset [-26 -28]}
   ::b/argentina {:position [646 1023]
                  :img "imgs/argentina.png"
                  :counter-offset [22 -20]}
   ::b/chile {:position [630 1028]
              :img "imgs/chile.png"
              :counter-offset [-13 3]}
   ::b/uruguay {:position [758 1023]
                :img "imgs/uruguay.png"
                :counter-offset [-5 -33]}
   ::b/brasil {:position [711 835]
               :img "imgs/brasil.png"
               :counter-offset [-39 -31]}

   ; North America
   ::b/alaska {:position [16 438]
               :img "imgs/alaska.png"
               :counter-offset [-23 -37]}
   ::b/california {:position [208 618]
                   :img "imgs/california.png"
                   :counter-offset [-90 14]}
   ::b/canada {:position [229 213]
               :img "imgs/canada.png"
               :counter-offset [-40 -54]}
   ::b/groenlandia {:position [575 219]
                    :img "imgs/groenlandia.png"
                    :counter-offset [42 -84]}
   ::b/labrador {:position [492 378]
                 :img "imgs/labrador.png"
                 :counter-offset [-5 -12]}
   ::b/mexico {:position [341 693]
               :img "imgs/mexico.png"
               :counter-offset [-51 -65]}
   ::b/nueva-york {:position [317 447]
                   :img "imgs/nueva_york.png"
                   :counter-offset [47 64]}
   ::b/oregon {:position [54 549]
               :img "imgs/oregon.png"
               :counter-offset [-60 26]}
   ::b/terranova {:position [382 423]
                  :img "imgs/terranova.png"
                  :counter-offset [-60 -14]}
   ::b/yukon {:position [105 331]
              :img "imgs/yukon.png"
              :counter-offset [-23 8]}

   ; Africa
   ::b/egipto {:position [1393 948]
               :img "imgs/egipto.png"
               :counter-offset [0 0]}
   ::b/etiopia {:position [1380 1030]
                :img "imgs/etiopia.png"
                :counter-offset [0 0]}
   ::b/madagascar {:position [1647 1086]
                   :img "imgs/madagascar.png"
                   :counter-offset [0 0]}
   ::b/sahara {:position [1190 962]
               :img "imgs/sahara.png"
               :counter-offset [0 0]}
   ::b/sudafrica {:position [1441 1149]
                  :img "imgs/sudafrica.png"
                  :counter-offset [0 0]}
   ::b/zaire {:position [1301 1088]
              :img "imgs/zaire.png"
              :counter-offset [0 0]}

   ; Europa
   ::b/alemania {:position [1301 595]
                 :img "imgs/alemania.png"
                 :counter-offset [0 0]}
   ::b/españa {:position [1038 781]
               :img "imgs/españa.png"
               :counter-offset [0 0]}
   ::b/francia {:position [1158 648]
                :img "imgs/francia.png"
                :counter-offset [0 0]}
   ::b/gran-bretaña {:position [1069 513]
                     :img "imgs/gran_bretaña.png"
                     :counter-offset [0 0]}
   ::b/islandia {:position [854 489]
                 :img "imgs/islandia.png"
                 :counter-offset [0 0]}
   ::b/italia {:position [1311 770]
               :img "imgs/italia.png"
               :counter-offset [0 0]}
   ::b/polonia {:position [1358 577]
                :img "imgs/polonia.png"
                :counter-offset [0 0]}
   ::b/rusia {:position [1364 297]
              :img "imgs/rusia.png"
              :counter-offset [0 0]}
   ::b/suecia {:position [1229 322]
               :img "imgs/suecia.png"
               :counter-offset [0 0]}

   ; Asia
   ::b/arabia {:position [1617 799]
               :img "imgs/arabia.png"
               :counter-offset [0 0]}
   ::b/aral {:position [1505 259]
             :img "imgs/aral.png"
             :counter-offset [0 0]}
   ::b/china {:position [1778 364]
              :img "imgs/china.png"
              :counter-offset [0 0]}
   ::b/gobi {:position [1719 505]
             :img "imgs/gobi.png"
             :counter-offset [0 0]}
   ::b/india {:position [1804 724]
              :img "imgs/india.png"
              :counter-offset [0 0]}
   ::b/iran {:position [1580 452]
             :img "imgs/iran.png"
             :counter-offset [0 0]}
   ::b/israel {:position [1535 772]
               :img "imgs/israel.png"
               :counter-offset [0 0]}
   ::b/japon {:position [1965 323]
              :img "imgs/japon.png"
              :counter-offset [0 0]}
   ::b/katchatka {:position [1794 247]
                  :img "imgs/katchatka.png"
                  :counter-offset [0 0]}
   ::b/malasia {:position [1940 654]
                :img "imgs/malasia.png"
                :counter-offset [0 0]}
   ::b/mongolia {:position [1626 412]
                 :img "imgs/mongolia.png"
                 :counter-offset [0 0]}
   ::b/siberia {:position [1615 280]
                :img "imgs/siberia.png"
                :counter-offset [0 0]}
   ::b/taimir {:position [1662 231]
               :img "imgs/taimir.png"
               :counter-offset [0 0]}
   ::b/tartaria {:position [1567 204]
                 :img "imgs/tartaria.png"
                 :counter-offset [0 0]}
   ::b/turquia {:position [1496 673]
                :img "imgs/turquia.png"
                :counter-offset [0 0]}
   
   ; Oceanía
   ::b/australia {:position [1878 999]
                  :img "imgs/australia.png"
                  :counter-offset [0 0]}
   ::b/borneo {:position [1921 825]
               :img "imgs/borneo.png"
               :counter-offset [0 0]}
   ::b/java {:position [2023 824]
             :img "imgs/java.png"
             :counter-offset [0 0]}
   ::b/sumatra {:position [1754 938]
                :img "imgs/sumatra.png"
                :counter-offset [0 0]}
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
    (set! (.-width morph) 30)
    (set! (.-height morph) 30)
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
          max-alpha 0.75]
      (set! (.-position morph) #js {:x x :y y})
      (let [cx (+ x (/ (.-width morph) 2))
            cy (+ y (/ (.-height morph) 2))]
        (set! (.-center morph) (clj->js {:x cx :y cy}))
        (set! (.-center counter) (clj->js {:x (+ cx ox) :y (+ cy oy)})))
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
