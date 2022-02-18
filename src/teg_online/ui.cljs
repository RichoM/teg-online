(ns teg-online.ui
  (:require [clojure.core.async :as a :refer [go <!]]
            [oops.core :refer [oget oset!]]
            [teg-online.utils.minimorphic :as mm]
            [teg-online.utils.bootstrap :as bs]
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
    (oset! board-panel :style.height
           (u/format "calc(100% - %1px)" (oget top-bar :offsetHeight)))))

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
            minus-btn (bs/on-click
                       (crate/html [:button.btn.btn-danger.btn-lg {:type "button"} [:i.fas.fa-minus]])
                       #(swap! counter-value dec))
            plus-btn (bs/on-click
                      (crate/html [:button.btn.btn-success.btn-lg {:type "button"} [:i.fas.fa-plus]])
                      #(swap! counter-value inc))
            accept-button (bs/on-click
                           (crate/html bs/accept-modal-btn)
                           #(reset! result-value (get-delta)))
            cancel-button (bs/on-click
                           (crate/html bs/cancel-modal-btn)
                           #(reset! result-value 0))]
        (add-watch counter-value :update
                   (fn [_ _ _ val] 
                     (oset! minus-btn :disabled (<= val min-value))
                     (oset! plus-btn :disabled (>= val max-value))
                     (oset! counter-span :innerText val)
                     (let [delta (get-delta)]
                       (oset! delta-span :innerText
                              (u/format "(%1%2)"
                                        (if (neg? delta) "-" "+")
                                        (js/Math.abs delta))))))
        (reset! counter-value initial-value)
        (<! (-> (bs/make-modal :header (list [:h1 country-name]
                                             bs/close-modal-btn)
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
                (bs/on-modal-keypress-enter (fn [modal]
                                              (reset! result-value (get-delta))
                                              (bs/hide-modal modal)))
                bs/show-modal))
        @result-value)))

(defn show-attack-dialog [attacker defender]
  (go (let [imgs ["imgs/Dice-1.svg"
                  "imgs/Dice-2.svg"
                  "imgs/Dice-3.svg"
                  "imgs/Dice-4.svg"
                  "imgs/Dice-5.svg"
                  "imgs/Dice-6a.svg"]
            attack-btn (crate/html [:button.btn.btn-primary.btn-lg {:type "button"} "Atacar"])
            finish-btn (crate/html [:button.btn.btn-secondary.btn-lg {:type "button"} "Finalizar"])
            modal (bs/make-modal
                   :header bs/close-modal-btn
                   :body [:div.container
                          [:div.row
                           [:div.col-6.text-center [:h1.text-truncate (get-in b/countries [attacker :name])]]
                           [:div.col-6.text-center [:h1.text-truncate (get-in b/countries [defender :name])]]]
                          [:div.row
                           [:div.col-6.text-center.fa-2x 
                            [:i.fas.fa-shield-alt.pe-3]
                            [:span 4]]                           
                           [:div.col-6.text-center.fa-2x
                            [:i.fas.fa-shield-alt.pe-3]
                            [:span 4]]]
                          [:hr]
                          [:div.row.py-2
                           [:div.col-6.text-center [:img.img-fluid.dice {:src (nth imgs 5)}]]
                           [:div.col-6.text-center [:img.img-fluid.dice {:src (nth imgs 5)}]]]
                          [:div.row.py-2
                           [:div.col-6.text-center [:img.img-fluid.dice {:src (nth imgs 5)}]]
                           [:div.col-6.text-center [:img.img-fluid.dice {:src (nth imgs 5)}]]]
                          [:div.row.py-2
                           [:div.col-6.text-center [:img.img-fluid.dice {:src (nth imgs 5)}]]
                           [:div.col-6.text-center [:img.img-fluid.dice {:src (nth imgs 5)}]]]
                          [:hr]
                          [:div.row
                           [:div.col.d-grid attack-btn]
                           [:div.col.d-grid finish-btn]]])]
        (bs/on-click finish-btn #(go (let [dice (.querySelectorAll modal "img")]
                                       (doseq [die dice]
                                         (oset! die :src (rand-nth imgs))))))
        (bs/on-click attack-btn #(go (let [dice (.querySelectorAll modal "img")]
                                       (oset! attack-btn :disabled true)
                                       (doseq [die dice] (.add (oget die :classList) "rotate-center"))
                                       (<! (a/timeout 200))
                                       (let [delay 15]
                                         (loop [i 0]
                                           (when (<= (* i delay) 200)
                                             (oset! (aget dice (mod i 6)) :src (rand-nth imgs))
                                             (<! (a/timeout delay))
                                             (recur (inc i)))))
                                       #_(doseq [die dice]
                                           (oset! die :src (nth imgs 3)))
                                       (<! (a/timeout 200))
                                       (doseq [die dice] (.remove (oget die :classList) "rotate-center"))
                                       (oset! attack-btn :disabled false))))
        (<! (bs/show-modal modal)))))

(comment

  (show-attack-dialog ::b/argentina ::b/chile)
  
  
  )

(defn finish-turn []
  (go
    (when (<! (bs/confirm "Confirmar" "¿Terminar incorporación de ejércitos?"))
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
            (print addition)
            (when (not (zero? addition))
              (let [{:strs [x y]} (-> @state
                                      (get-in [:countries country-id :counter])
                                      (oget :center)
                                      js->clj)
                    label (-> (mm/make-label (u/format "%1%2"
                                                       (if (pos? addition) "+" "-")
                                                       (js/Math.abs addition))
                                             :font "bold 30px Arial"
                                             :color (if (pos? addition) "lawngreen" "darkred")
                                             :center (clj->js {:x x, :y (- y 30)}))
                              (mm/translate 0 -100 2)
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
          morph (mm/make-sprite
                 original-form
                 :position {:x x :y y}
                 :alpha 0)
          counter (mm/make-ellipse
                   :extent {:w 30 :h 30}
                   :center (let [{cx "x" cy "y"} (js->clj (oget morph :center))]
                             {:x (+ cx ox), :y (+ cy oy)})
                   :alpha 0)
          selected-alpha 0.25]
      (.addMorph world morph)
      (.addMorph world counter)
      (doto morph
        (mm/on-mouse-enter #(when (can-interact-with-country? country-id)
                              (oset! morph :alpha selected-alpha)))
        (mm/on-mouse-leave #(when (can-interact-with-country? country-id)
                              (oset! morph :alpha 0.5)))
        (mm/on-mouse-down #(when (can-interact-with-country? country-id)
                             (oset! morph :alpha selected-alpha)))
        (mm/on-mouse-up #(go (when (can-interact-with-country? country-id)
                               (<! (click-country country-id))
                               (oset! morph :alpha 0.5)))))
      (swap! state
             assoc-in [:countries country-id]
             {:morph morph
              :counter counter}))))

(defn init-countries []
  (go (<! (a/map vector (map init-country (shuffle country-data))))))

(defn init-map []
  (go
    (let [form (<! (mm/load-form "imgs/teg_board.png"))
          map (mm/make-sprite form)]
      (.addMorph world map)
      (let [canvas (oget world :canvas.html)]
        (oset! canvas :width (oget map :width))
        (oset! canvas :height (oget map :height))))))

(defn update-army-counter [^js/Morph morph color count highlight?]
  (.removeAllSubmorphs morph)
  (let [text-color (if (contains? #{"black" "purple"} color)
                     "white"
                     "black")]
    (doto morph
      (oset! :color color)
      (oset! :!border text-color))
    (let [label (mm/make-label
                 (str count)
                 :font "14px Arial"
                 :color text-color)
          stack (mm/make-ellipse
                 :color color
                 :!border text-color
                 :extent (oget morph :extent)
                 :position {:x (+ (oget morph :x) 1)
                            :y (- (oget morph :y) 3)})]      
      (oset! label :center 
             (oget (if highlight? stack morph) 
                   :center))
      (when highlight? 
        (.addMorph morph stack))
      (.addMorph morph label))))

(defn update-country [player-indices {:keys [id owner army]}]
  (go (when-let [{:keys [morph counter]}
                 (get-in @state [:countries id])]
        (let [player-idx (player-indices owner)
              color (get player-colors player-idx "white")
              original-form (oget morph :originalForm)
              tinted-form (if player-idx
                            (<! (mm/tint original-form color))
                            original-form)
              additions (get-in @state [:user-data :additions id] 0)]
          (oset! morph :form tinted-form)
          (oset! morph :alpha (if player-idx 0.5 0))
          (oset! counter :alpha (if player-idx 1 0))
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
        (oset! players-row :innerHTML "")
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

(defn finish-turn-enabled? []
  (let [game-atom (@state :game-atom)
        {:keys [phase]} @game-atom]
    (case phase
      ::teg/add-army (= 0 (get-in @state [:user-data :remaining] 0))
      false)))

(defn update-status-panel [{:keys [phase turn]}]
  (go (let [status-bar (js/document.querySelector "#status-bar")]
        (oset! status-bar :innerHTML "")
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
                            {:type "button" :disabled (not (finish-turn-enabled?))}
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
