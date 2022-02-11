(ns teg-online.ui
  (:require [clojure.core.async :as a :refer [go go-loop <! timeout]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [teg-online.utils.async :refer [go-try <? chan->promise]]
            [teg-online.utils.minimorphic :as mm]
            [teg-online.utils.modals :as modals]
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
                  (set! (.-alpha morph) min-alpha)
                  (swap! game teg/add-army country-id 1))))
      (swap! state
             assoc-in [:countries country-id]
             {:morph morph
              :counter counter}))))

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

(defn update-country [player-indices {:keys [id owner army]}]
  (go (when-let [{:keys [^js/Morph morph counter]}
                 (get-in @state [:countries id])]
        (let [player-idx (player-indices owner)
              color (get player-colors player-idx "white")
              ^js/Form original-form (.-originalForm morph)
              ^js/Form tinted-form (if player-idx
                                     (<! (mm/tint original-form color))
                                     original-form)]
          (set! (.-form morph) tinted-form)
          (set! (.-alpha morph) (if player-idx 0.5 0))
          (set! (.-alpha counter) (if player-idx 1 0))
          (update-army-counter counter color (if player-idx army 0))))))

(defn update-countries [{:keys [turn-order countries]}]
  (go (let [player-indices (into {} (map-indexed (fn [idx pid] [pid idx])
                                                 turn-order))]
        (<! (a/map vector
                   (map (partial update-country player-indices)
                        (vals countries)))))))

(defn update-players [{:keys [players turn-order turn] :as game}]
  (go (let [players-row (js/document.querySelector "#players-bar .row")
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
                              [:span.mx-1 (teg/player-army-count game pid)]]]])))))))

(defn update-status-panel [{:keys [phase]}]
  (go (let [status-bar (js/document.querySelector "#status-bar")]
        (set! (.-innerHTML status-bar) "")
        (.appendChild status-bar
                      (crate/html
                       [:div.row.align-items-center.p-1
                        [:div.col.text-truncate
                         [:h4.text-truncate
                          (case phase
                            ::teg/add-army "Incorporando ejércitos..."
                            ::teg/attack "Atacando..."
                            ::teg/regroup "Reagrupando..."
                            "")]]
                        [:div.col-auto
                         [:button#confirm-button.btn.btn-primary.btn-lg
                          {:type "button" :disabled false}
                          (case phase
                            ::teg/add-army "Confirmar"
                            ::teg/attack "Reagrupar"
                            ::teg/regroup "Finalizar turno")]]]))
        (.addEventListener (js/document.querySelector "#confirm-button")
                           "click"
                           #(go (print (js/Date.now))
                                (when-let [nombre (<! (modals/prompt "Bienvenido" "Ingrese su nombre" "??"))]
                                  (<! (modals/alert "Su nombre es..." nombre)))
                                (<! (modals/alert "Woooo" "Este es un mensaje del más allá..."))
                                (<! (modals/alert "2" "Segundo mensaje"))
                                (when (<! (modals/confirm "Pregunta:" "Querés ver un tercer mensaje??"))
                                  (<! (modals/alert "3" "Este es el tercer y último mensaje"))))))))

(defn update-ui [game]
  (go (<! (update-players game))
      (<! (update-countries game))
      (<! (update-status-panel game))
      (resize-board)))

(defn start-update-loop []
  (go (loop []
        (when-some [update (<! (@state :updates))]
          (<! (update-ui update))
          (recur)))))

(defn initialize [game]
  (go (reset! state {:game game
                     :updates (a/chan (a/sliding-buffer 1))})
      (.removeAllSubmorphs world)
      (<! (init-map))
      (<! (init-countries game))
      (add-watch game :state-change
                 (fn [_key _atom _old-state new-state]
                   (a/put! (@state :updates) new-state)))
      (start-update-loop)
      (update-ui @game)))

(defn terminate []
  (go (a/close! (@state :updates))))

(comment
  (initialize (@state :game))
  (update-ui @(@state :game))

  (get-in @state [:game :players])
  (def m (js/Morph.))
  (.addMorph world m)
  (set! (.-width m) 10)
  (set! (.-height m) 10)
  (set! (.-position m) #js {:x 20 :y 20})
  (.-position m)
  )