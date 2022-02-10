(ns teg-online.ui
  (:require [clojure.core.async :as a :refer [go go-loop <! timeout]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [teg-online.utils.async :refer [go-try <? chan->promise]]
            [teg-online.utils.minimorphic :as mm]
            [teg-online.utils.core :as u]
            [teg-online.ui-constants :refer [country-data player-colors]]
            [teg-online.game :as teg]
            [teg-online.board :as b]
            [crate.core :as crate]))

(defonce world (js/World. (js/document.querySelector "#board-canvas")))

(defonce state (atom {}))

(defn resize-board []
  (let [board-panel (js/document.querySelector "#board-panel")
        top-bar (js/document.querySelector "#top-bar")]
    (aset (.-style board-panel)
          "height" (u/format "calc(100% - %1px)"
                             (.-offsetHeight top-bar)))))

(.addEventListener js/window "resize" resize-board)
(resize-board)

(defn make-army-counter [color]
  (let [morph (js/Ellipse.)
        label (js/Label. "1")
        text-color (if (contains? #{"black" "blue" "green"} color)
                     "white"
                     "black")]
    (set! (.-font label) "14px Arial")
    (set! (.-width morph) 30)
    (set! (.-height morph) 30)
    (set! (.-color morph) color)
    (set! (.-border morph) text-color)
    (.addMorph morph label)
    (set! (.-center label) (.-center morph))
    (set! (.-color label) text-color)
    (set! (.-alpha morph) 0)
    morph))

(defn init-country [country-id {[x y] :position, img :img, [ox oy] :counter-offset} game]
  (go
    (let [original-form (<! (mm/load-form img))
          tinted-forms (<! (a/map vector
                                  (mapv (fn [c] (mm/tint original-form c))
                                        player-colors)))
          morph (js/Sprite. original-form)
          counter (make-army-counter "black")
          min-alpha 0.5
          max-alpha 0.7]
      (set! (.-position morph) #js {:x x :y y})
      (let [{cx "x" cy "y"} (js->clj (.-center morph))]
        (set! (.-center morph) (clj->js {:x cx :y cy}))
        (set! (.-center counter) (clj->js {:x (+ cx ox) :y (+ cy oy)})))
      (set! (.-alpha morph) 0) ; Initially transparent
      (.addMorph world morph)
      (.addMorph world counter)
      (doto morph
        (.on "mouseDown"
             #(set! (.-alpha morph) max-alpha))
        (.on "mouseUp"
             #(do (print country-id)
                  (.addMorph world morph)
                  (.addMorph world counter)
                  (set! (.-alpha morph) min-alpha)
                  (swap! game teg/add-army country-id 1))))
      (swap! state
             assoc-in [:countries country-id]
             {:morph morph
              :counter counter
              :tinted-forms tinted-forms}))))

(defn init-countries [game]
  (go
    (<! (a/map vector
               (map (fn [[name data]] (init-country name data game))
                    (shuffle country-data))))))

(defn init-map []
  (go
    (let [form (<! (mm/load-form "imgs/teg_board.png"))
          map (js/Sprite. form)]
      (.addMorph world map)
      (let [canvas (-> world .-canvas .-html)]
        (set! (.-width canvas) (.-width map))
        (set! (.-height canvas) (.-height map))))))

(defn update-army-counter [^js morph color count]
  (set! (.-color morph) color)
  (let [text-color (if (contains? #{"black"} color)
                     "white"
                     "black")]
    (set! (.-border morph) text-color)
    (let [label (first (.-submorphs morph))]
      (set! (.-text label) (str count))
      (set! (.-color label) text-color)
      (set! (.-center label) (.-center morph)))))

(defn update-countries [{:keys [turn-order] :as game}]
  (let [player-indices (into {} (map-indexed (fn [idx pid] [pid idx])
                                             turn-order))]
    (doseq [{:keys [id owner army]} (vals (game :countries))]
      (let [player-idx (player-indices owner)]
        (when-let [{:keys [morph counter tinted-forms]}
                   (get-in @state [:countries id])]
          (if player-idx
            (do 
              (set! (.-form morph) (nth tinted-forms player-idx))
              (set! (.-alpha morph) 0.5)
              (set! (.-alpha counter) 1)
              (update-army-counter counter (nth player-colors player-idx) army))
            (do
              (set! (.-form morph) (.-originalForm morph))
              (set! (.-alpha morph) 0)
              (set! (.-alpha counter) 0)
              (update-army-counter counter "white" 0))))))))

(defn update-players [{:keys [players turn-order turn] :as game}]
  (let [players-row (js/document.querySelector "#players-bar .row")
        player-count (count turn-order)
        player-width (/ 12 (if (> player-count 4)
                             (js/Math.ceil (/ player-count 2))
                             player-count))]
    (set! (.-innerHTML players-row) "")
    (doseq [[idx pid] (map-indexed vector turn-order)]
      (let [player (players pid)]
        (.appendChild players-row
                      (crate/html
                       [:div {:class (u/format "col-sm-%1 player player-%2 %3"
                                               player-width
                                               (inc idx)
                                               (when (= idx (mod turn player-count))
                                                 "player-turn"))}
                        [:div.row
                         [:div.col-auto.text-truncate
                          [:i.fas.fa-square]
                          [:span.mx-1 (player :name)]]]
                        [:div.row
                         [:div.col-auto 
                          [:i.fas.fa-flag]
                          [:span.mx-1 (count (teg/player-countries game pid))]]
                         [:div.col-auto 
                          [:i.fas.fa-shield-alt]
                          [:span.mx-1 (teg/player-army-count game pid)]]]]))))))

(defn update-ui [game]
  (update-countries game)
  (update-players game)
  (resize-board))

(defn init [game]
  (go (reset! state {:game game})
      (.removeAllSubmorphs world)
      (<! (init-map))
      (<! (init-countries game))
      (add-watch game :state-change
                 (fn [key atom old-state new-state]
                   (update-ui new-state)
                   (print key)))
      (update-ui @game)))

(comment
  (init (@state :game))
  (update-ui @(@state :game))

  (get-in @state [:game :players])

  )