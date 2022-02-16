(ns teg-online.utils.minimorphic
  (:require [clojure.core.async :as a :refer [go go-loop <! timeout]]
            [cljs.core.async.interop :refer-macros [<p!]]))

(defn load-form [path]
  (go (<p! (js/Form.loadImage path))))

(def tint
  (memoize
   (fn [^js/Form form color]
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
         result-chan)))))

(defn set-width! [morph width]
  (set! (.-width morph) width))

(defn set-height! [morph height]
  (set! (.-height morph) height))

(defn set-top! [morph top]
  (set! (.-top morph) top))

(defn set-left! [morph left]
  (set! (.-left morph) left))

(defn set-center! [^js/Morph morph center]
  (set! (.-center morph) center))

(defn set-color! [morph color]
  (set! (.-color morph) color))

(defn set-border! [^js morph border]
  (set! (.-border morph) border))

(defn set-font! [morph font]
  (set! (.-font morph) font))

(defn set-text! [morph text]
  (set! (.-text morph) text))

(defn make-pickable [^js/Morph morph]
  (let [picked? (atom false)]
    (doto morph
      (.on "step" #(when @picked?
                     (set! (.-center morph) js/World.cursor)
                     (let [{x "x" y "y"} (js->clj (.-center morph))
                           {cx "x" cy "y"} (js->clj (.-center (.-owner morph)))]
                       (print [(- x cx) (- y cy)]))))
      (.on "mouseDown" #(do (reset! picked? true)))
      (.on "mouseUp" #(do (reset! picked? false))))))

(defn vanish [^js/Morph morph seconds]
  (doto morph
    (.on "step"
         (fn [_ delta]
           (set! (.-top morph) (- (.-top morph) (* 20 delta)))
           (let [alpha (- (.-alpha morph) (/ delta seconds))]
             (set! (.-alpha morph) alpha)
             (when (< alpha 0.01)
               (.remove morph)))))))
