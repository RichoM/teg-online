(ns teg-online.ui
  (:require [clojure.core.async :as a :refer [go go-loop <! timeout]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                               oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]
            [teg-online.utils.async :refer [go-try <? chan->promise]]
            [teg-online.utils.minimorphic :as mm]
            [teg-online.utils.bootstrap :as bt]
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
  (when-let [game-atom (@state :game-atom)]
    @game-atom))

(defn show-add-army-dialog [country-name initial-value min-value max-value]
  (go (let [result-value (atom 0)
            counter-value (atom initial-value :validator #(and (>= % min-value) (<= % max-value)))
            counter-span (crate/html [:span @counter-value])
            get-delta #(- @counter-value initial-value)
            delta-span (crate/html [:span.ps-5.text-black-50 ""])
            minus-btn (bt/on-click
                       (crate/html [:button.btn.btn-danger.btn-lg {:type "button"} [:i.fas.fa-minus]])
                       #(swap! counter-value dec))
            plus-btn (bt/on-click
                      (crate/html [:button.btn.btn-success.btn-lg {:type "button"} [:i.fas.fa-plus]])
                      #(swap! counter-value inc))
            accept-button (bt/on-click
                           (crate/html bt/accept-modal-btn)
                           #(reset! result-value (get-delta)))
            cancel-button (bt/on-click
                           (crate/html bt/cancel-modal-btn)
                           #(reset! result-value 0))]
        (add-watch counter-value :update
                   (fn [_ _ _ val] 
                     (set! (.-disabled minus-btn) (<= val min-value))
                     (set! (.-disabled plus-btn) (>= val max-value))
                     (set! (.-innerText counter-span) val)
                     (let [delta (get-delta)]
                       (set! (.-innerText delta-span)
                             (u/format "(%1%2)"
                                       (if (neg? delta) "-" "+")
                                       (js/Math.abs delta))))))
        (reset! counter-value initial-value)
        (<! (-> (bt/make-modal :header (list [:h1 country-name]
                                             bt/close-modal-btn)
                               :body [:div.container
                                      [:div.row
                                       [:div.col-12.text-center.fa-4x
                                        [:i.fas.fa-shield-alt.pe-3]
                                        counter-span
                                        delta-span]]
                                      [:div.row.py-3
                                       [:div.col-6 [:div.d-grid minus-btn]]
                                       [:div.col-6 [:div.d-grid plus-btn]]]]
                               :footer (list accept-button cancel-button))
                (bt/on-modal-keypress-enter (fn [modal]
                                              (reset! result-value (get-delta))
                                              (bt/hide-modal modal)))
                bt/show-modal))
        @result-value)))

(defn finish-turn []
  (go
    (when (<! (bt/confirm "Confirmar" "¿Terminar incorporación de ejércitos?"))
      (let [game-atom (@state :game-atom)
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
              (let [{:strs [x y]} (js->clj (.-center (get-in @state [:countries country-id :counter])))
                    label (doto (js/Label. (u/format "%1%2"
                                                     (if (pos? addition) "+" "-")
                                                     (js/Math.abs addition)))
                            (oset! :font "bold 30px Arial")
                            (oset! :color (if (pos? addition) "lawngreen" "darkred"))
                            (oset! :center (clj->js {:x x :y (- y 30)}))
                            (mm/vanish 2))]
                (.addMorph world label))
              (swap! state #(-> %
                                (update-in [:user-data :remaining] - addition)
                                (update-in [:user-data :additions country-id] + addition)))
              (when (zero? (-> @state :user-data :remaining))
                (<! (finish-turn)))))))))

(defn init-country [[country-id {[x y] :position, img :img, [ox oy] :counter-offset}]]
  (go
    (let [original-form (<! (mm/load-form img))
          morph (js/Sprite. original-form)
          counter (js/Ellipse.)
          selected-alpha 0.25]
      (set! (.-extent counter) #js {:w 30 :h 30})
      (set! (.-position morph) #js {:x x :y y})
      (let [{cx "x" cy "y"} (js->clj (.-center morph))]
        (set! (.-center counter) (clj->js {:x (+ cx ox), :y (+ cy oy)})))
      (set! (.-alpha morph) 0) ; Initially transparent
      (set! (.-alpha counter) 0)
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

(defn init-countries []
  (go (<! (a/map vector (map init-country (shuffle country-data))))))

(defn init-map []
  (go
    (let [form (<! (mm/load-form "imgs/teg_board.png"))
          map (js/Sprite. form)]
      (.addMorph world map)
      (let [canvas (-> world .-canvas .-html)]
        (set! (.-width canvas) (.-width map))
        (set! (.-height canvas) (.-height map))))))

(defn update-army-counter [^js morph color count highlight?]
  (.removeAllSubmorphs morph)
  (let [text-color (if (contains? #{"black" "purple"} color)
                     "white"
                     "black")]
    (doto morph
      (oset! :color color)
      (oset! :!border text-color))
    (let [label (doto (js/Label. (str count))
                  (oset! :font "14px Arial")
                  (oset! :color text-color))
          stack (doto (js/Ellipse.)
                  (oset! :color color)
                  (oset! :!border text-color)
                  (oset! :extent (.-extent morph))
                  (oset! :position (clj->js {:x (+ (.-x morph) 1)
                                             :y (- (.-y morph) 3)})))]
      (if highlight?
        (do (.addMorph morph stack)
            (set! (.-center label) (.-center stack)))
        (set! (.-center label) (.-center morph)))
      (.addMorph morph label))))

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
          (let [player (players pid)
                icon-style (u/format "color: %1;" (player-colors idx))]
            (.appendChild players-row
                          (crate/html
                           [:div {:class (u/format "col-sm-%1 player %2"
                                                   player-width
                                                   (when (= idx (mod turn player-count))
                                                     "player-turn"))}
                            [:div.row
                             [:div.col-auto.text-truncate
                              [:i.fas.fa-square {:style icon-style}]
                              [:span.mx-1 (player :name)]]]
                            [:div.row
                             [:div.col-auto
                              [:i.fas.fa-flag {:style icon-style}]
                              [:span.mx-1 (count (teg/player-countries game pid))]]
                             [:div.col-auto
                              [:i.fas.fa-shield-alt {:style icon-style}]
                              [:span.mx-1 (teg/player-army-count game pid)]]]])))))))

(defn finish-turn-enabled []
  (let [game-atom (@state :game-atom)
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


(defn initialize [game-atom]
  (go (reset! state {:game-atom game-atom
                     :updates (a/chan (a/sliding-buffer 1))})
      (.removeAllSubmorphs world)
      (<! (init-map))
      (<! (init-countries))
      (add-watch state :ui-change
                 #(a/put! (@state :updates) @game-atom))
      (let [state-change (fn [_key _atom old-state new-state]
                           (when (not= (old-state :turn)
                                       (new-state :turn))
                             (swap! state assoc :user-data
                                    (reset-user-data new-state)))
                           (a/put! (@state :updates) new-state))]
        (add-watch game-atom :state-change state-change)
        (state-change :state-change game-atom {} @game-atom))
      (start-update-loop)))

(defn terminate []
  (go (a/close! (@state :updates))))

(comment
  @(@state :game-atom)
  (initialize (@state :game-atom))
  (update-ui @(@state :game-atom))

  (get-in @state [:game-atom :players])
  (def m (js/Morph.))
  (.addMorph world m)
  (set! (.-width m) 10)
  (set! (.-height m) 10)
  (set! (.-position m) #js {:x 20 :y 20})
  (.-position m)

  (def t (atom 0 :validator #(> % 0)))

  (swap! t dec)
  
  (go (print (<! (show-add-army-dialog "Argentina" 6 5 10))))

  
  (swap! (@state :game-atom) update-in [:turn] inc)
  (-> @state :user-data)
  (@(@state :game-atom) :turn)

  )