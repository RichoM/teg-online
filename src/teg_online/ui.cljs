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

(defn get-game []
  (when-let [game-atom (@state :game)]
    @game-atom))

(defn show-add-army-dialog [country-name initial-value min-value max-value]
  (let [result-chan (a/promise-chan)
        result-value (atom nil)
        counter-value (atom initial-value :validator #(and (>= % min-value) (<= % max-value)))
        counter-span (crate/html [:span @counter-value])
        minus-btn (modals/on-click
                   (crate/html [:button.btn.btn-danger.btn-lg {:type "button"} [:i.fas.fa-minus]])
                   #(swap! counter-value dec))
        plus-btn (modals/on-click
                  (crate/html [:button.btn.btn-success.btn-lg {:type "button"} [:i.fas.fa-plus]])
                  #(swap! counter-value inc))
        accept-button (modals/on-click
                       (crate/html modals/accept-button)
                       #(reset! result-value (- @counter-value initial-value)))
        cancel-button (modals/on-click
                       (crate/html modals/cancel-button)
                       #(reset! result-value 0))]
    (add-watch counter-value :update
               (fn [_ _ _ val] (set! (.-innerText counter-span) val)))
    (doto (modals/show :header (list [:h1 country-name]
                                     modals/close-button)
                       :body [:div.container
                              [:div.row
                               [:div.col-12.text-center.fa-4x
                                [:i.fas.fa-shield-alt.pe-3]
                                counter-span]]
                              [:div.row.py-3
                               [:div.col-6 [:div.d-grid minus-btn]]
                               [:div.col-6 [:div.d-grid plus-btn]]]]
                       :footer (list accept-button cancel-button))
      (modals/on-enter #(reset! result-value @counter-value))
      (modals/on-hidden #(if-let [val @result-value]
                           (a/put! result-chan val)
                           (a/close! result-chan))))
    result-chan))

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


(defn finish-turn []
  (go
    (when (<! (modals/confirm "Confirmar" "¿Terminar incorporación de ejércitos?"))
      (let [game-atom (@state :game)
            additions (get-in @state [:user-data :additions] {})]
        (swap! state dissoc :user-data)
        (doseq [[country-id extra-army] additions]
          (when (> extra-army 0)
            (swap! game-atom teg/add-army country-id extra-army)))
        (swap! game-atom teg/next-turn)))))

(defn can-interact-with-country? [country-id]
  (when-let [game (get-game)]
    (when-let [current-player (teg/get-current-player game)]
      (= current-player (get-in game [:countries country-id :owner])))))

(defn click-country [country-id]
  (go (let [{:keys [phase] :as game} (get-game)]
        (case phase
          ::teg/add-army
          (let [country-name (:name (b/countries country-id))
                initial-army (teg/get-army game country-id)
                current-army (+ initial-army
                                (get-in @state [:user-data :additions country-id] 0))
                remaining (get-in @state [:user-data :remaining] 0)
                addition (<! (show-add-army-dialog country-name
                                                   current-army
                                                   initial-army
                                                   (+ current-army remaining)))]
            (when (not (zero? addition))
              (swap! state #(-> %
                                (update-in [:user-data :remaining] - addition)
                                (update-in [:user-data :additions country-id] + addition)))
              (when (zero? (-> @state :user-data :remaining))
                (<! (finish-turn)))))))))

(defn init-country [[country-id {[x y] :position, img :img, [ox oy] :counter-offset}]]
  (go
    (let [original-form (<! (mm/load-form img))
          morph (js/Sprite. original-form)
          counter (make-army-counter "black")
          selected-alpha 0.25]
      (set! (.-position morph) #js {:x x :y y})
      (let [{cx "x" cy "y"} (js->clj (.-center morph))]
        (set! (.-center morph) (clj->js {:x cx :y cy}))
        (set! (.-center counter) (clj->js {:x (+ cx ox) :y (+ cy oy)})))
      (set! (.-alpha morph) 0) ; Initially transparent
      (.addMorph world morph)
      (.addMorph world counter)
      (doto morph
        (.on "mouseEnter"
             #(when (can-interact-with-country? country-id)
                (set! (.-alpha morph) selected-alpha)))
        (.on "mouseLeave"
             #(when (can-interact-with-country? country-id)
                (set! (.-alpha morph) 0.5)))
        (.on "mouseDown"
             #(when (can-interact-with-country? country-id)
                (set! (.-alpha morph) selected-alpha)))
        (.on "mouseUp"
             #(go (when (can-interact-with-country? country-id)
                    (<! (click-country country-id))
                    (set! (.-alpha morph) 0.5)))))
      (swap! state
             assoc-in [:countries country-id]
             {:morph morph
              :counter counter}))))

(defn init-countries [game]
  (go
    (<! (a/map vector
               (map init-country (shuffle country-data))))))

(defn init-map []
  (go
    (let [form (<! (mm/load-form "imgs/teg_board.png"))
          map (js/Sprite. form)]
      (.addMorph world map)
      (let [canvas (-> world .-canvas .-html)]
        (set! (.-width canvas) (.-width map))
        (set! (.-height canvas) (.-height map))))))

(defn update-army-counter [^js morph color count highlight?]
  (set! (.-color morph) color)
  (let [text-color (if (contains? #{"black"} color)
                     "white"
                     "black")]
    (set! (.-border morph) text-color)
    (set! (.-lineWidth morph) (if highlight? 3 1))
    (let [label (first (.-submorphs morph))]
      (set! (.-text label) (str count))
      (set! (.-color label) text-color)
      (set! (.-center label) (.-center morph)))))

(defn update-country [player-indices {:keys [id owner army]}]
  (go (when-let [{:keys [morph counter]}
                 (get-in @state [:countries id])]
        (let [player-idx (player-indices owner)
              color (get player-colors player-idx "white")
              ^js/Form original-form (.-originalForm morph)
              ^js/Form tinted-form (if player-idx
                                     (<! (mm/tint original-form color))
                                     original-form)
              additions (get-in @state [:user-data :additions id] 0)]
          (set! (.-form morph) tinted-form)
          (set! (.-alpha morph) (if player-idx 0.5 0))
          (set! (.-alpha counter) (if player-idx 1 0))
          (update-army-counter counter color 
                               (if player-idx (+ army additions) 0)
                               (> additions 0))))))

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

(defn finish-turn-enabled []
  (let [game-atom (@state :game)
        {:keys [phase]} @game-atom]
    (case phase
      ::teg/add-army (= 0 (get-in @state [:user-data :remaining] 0))
      false)))

(defn update-status-panel [{:keys [phase turn]}]
  (go (let [status-bar (js/document.querySelector "#status-bar")]
        (set! (.-innerHTML status-bar) "")
        (when turn
          (.appendChild status-bar
                        (crate/html
                         [:div.row.align-items-center.p-1
                          [:div.col.text-truncate
                           [:h4.text-truncate
                            (case phase
                              ::teg/add-army (let [remaining (get-in @state [:user-data :remaining] 0)]
                                               (u/format "Incorporando ejércitos (%1 %2)"
                                                         remaining
                                                         (if (= 1 remaining) "restante" "restantes")))
                              ::teg/attack "Atacando..."
                              ::teg/regroup "Reagrupando..."
                              "")]]
                          [:div.col-auto
                           [:button#finish-turn-button.btn.btn-primary.btn-lg
                            {:type "button" :disabled (not (finish-turn-enabled))}
                            (case phase
                              ::teg/add-army "Confirmar"
                              ::teg/attack "Reagrupar"
                              ::teg/regroup "Finalizar turno")]]]))
          (.addEventListener (js/document.querySelector "#finish-turn-button")
                             "click"
                             finish-turn)))))

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

(defn reset-user-data [{:keys [phase] :as game}]
  (when (= phase ::teg/add-army)
    {:remaining (teg/calculate-extra-army game)
     :additions {}}))


(defn initialize [game]
  (go (reset! state {:game game
                     :updates (a/chan (a/sliding-buffer 1))})
      (.removeAllSubmorphs world)
      (<! (init-map))
      (<! (init-countries game))
      (add-watch state :ui-change
                 #(a/put! (@state :updates) @game))
      (let [state-change (fn [_key _atom old-state new-state]
                           (when (not= (old-state :turn)
                                       (new-state :turn))
                             (swap! state assoc :user-data
                                    (reset-user-data new-state)))
                           (a/put! (@state :updates) new-state))]
        (add-watch game :state-change state-change)
        (state-change :state-change game {} @game))
      (start-update-loop)))

(defn terminate []
  (go (a/close! (@state :updates))))

(comment
  @(@state :game)
  (initialize (@state :game))
  (update-ui @(@state :game))

  (get-in @state [:game :players])
  (def m (js/Morph.))
  (.addMorph world m)
  (set! (.-width m) 10)
  (set! (.-height m) 10)
  (set! (.-position m) #js {:x 20 :y 20})
  (.-position m)

  (def t (atom 0 :validator #(> % 0)))

  (swap! t dec)
  
  (go (print (<! (show-add-army-dialog "Argentina" 6 5 10))))

  
  (swap! (@state :game) update-in [:turn] inc)
  (-> @state :user-data)
  (@(@state :game) :turn)

  )