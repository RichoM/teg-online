(ns teg-online.utils.minimorphic
  (:require [clojure.core.async :as a :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [oops.core :refer [oget oset!]]))

(defn load-form [path]
  (go (<p! (js/Form.loadImage path))))

(def tint
  (memoize
   (fn [^js/Form form color]
     (let [img (oget form :img)
           w (oget img :width)
           h (oget img :height)
           canvas (js/document.createElement "canvas")
           ctx (.getContext canvas "2d")]
       (oset! canvas :width w)
       (oset! canvas :height h)
       (oset! ctx :fillStyle color)
       (.drawImage ctx img 0 0)
       (oset! ctx :globalCompositeOperation "source-atop")
       (.fillRect ctx 0 0 w h)
       (let [result-img (js/Image.)
             result-chan (a/promise-chan)]
         (oset! result-img :onload
                #(a/put! result-chan (js/Form. result-img)))
         (oset! result-img :src (.toDataURL canvas))
         result-chan)))))

(defn on-mouse-enter [^js/Morph morph callback]
  (doto morph (.on "mouseEnter" callback)))

(defn on-mouse-leave [^js/Morph morph callback]
  (doto morph (.on "mouseLeave" callback)))

(defn on-mouse-down [^js/Morph morph callback]
  (doto morph (.on "mouseDown" callback)))

(defn on-mouse-up [^js/Morph morph callback]
  (doto morph (.on "mouseUp" callback)))

(defn on-step [^js/Morph morph callback]
  (doto morph (.on "step" callback)))

(defn make-draggable [^js/Morph morph]
  (let [picked? (atom false)
        offset (atom [0 0])]
    (-> morph
        (on-step #(when @picked?
                    (oset! morph :center
                           (clj->js {:x (+ (@offset :x) (oget js/World.cursor :x))
                                     :y (+ (@offset :y) (oget js/World.cursor :y))}))
                    (let [{x "x" y "y"} (js->clj (oget morph :center))
                          {ox "x" oy "y"} (js->clj (oget morph :owner.center))]
                      (print [(- x ox) (- y oy)]))))
        (on-mouse-down #(do (reset! offset
                                    {:x (- (oget morph :center.x) (oget js/World.cursor :x))
                                     :y (- (oget morph :center.y) (oget js/World.cursor :y))})
                            (reset! picked? true)))
        (on-mouse-up #(do (reset! picked? false))))))

(comment
  (make-draggable (first (oget js/World.current :submorphs)))
  )

(defn vanish [^js/Morph morph seconds]
  (doto morph
    (.on "step"
         (fn [_ delta]
           (oset! morph :top (- (oget morph :top)
                                (* 20 delta)))
           (let [alpha (- (oget morph :alpha) 
                          (/ delta seconds))]
             (oset! morph :alpha alpha)
             (when (< alpha 0.01)
               (.remove morph)))))))
