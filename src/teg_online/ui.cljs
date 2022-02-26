(ns teg-online.ui
  (:require [clojure.core.async :as a :refer [go <!]]
            [oops.core :refer [oget oset!]]
            [teg-online.utils.minimorphic :as mm]
            [teg-online.utils.bootstrap :as bs]
            [teg-online.utils.core :as u]
            [teg-online.ui-constants :refer [country-data player-colors dice-images]]
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

(defn get-user []
  (when-let [user-atom (@state :user-atom)]
    @user-atom))

(defn is-my-turn? [game]
  (= (:id (get-user))
     (teg/get-current-player game)))

(defn show-add-army-dialog [&{:keys [title message min-value max-value default-value show-cancel?]
                              :or {title nil, message nil, default-value 0, show-cancel? true}}]
  (go (let [result-value (atom default-value)
            counter-value (atom default-value :validator #(and (>= % min-value) (<= % max-value)))
            counter-span (crate/html [:span.text-black-50])
            minus-btn (bs/on-click
                       (crate/html [:button.btn.btn-danger.btn-lg {:type "button"} [:i.fas.fa-minus]])
                       #(swap! counter-value dec))
            plus-btn (bs/on-click
                      (crate/html [:button.btn.btn-success.btn-lg {:type "button"} [:i.fas.fa-plus]])
                      #(swap! counter-value inc))
            accept-button (bs/on-click
                           (crate/html bs/accept-modal-btn)
                           #(reset! result-value @counter-value))
            cancel-button (bs/on-click
                           (crate/html bs/cancel-modal-btn)
                           #(reset! result-value default-value))]
        (add-watch counter-value :update
                   (fn [_ _ _ val]
                     (oset! minus-btn :disabled (<= val min-value))
                     (oset! plus-btn :disabled (>= val max-value))
                     (oset! counter-span :innerText
                            (u/format "%1%2"
                                      (if (neg? val) "-" "+")
                                      (js/Math.abs val)))))
        (reset! counter-value default-value) ; Just to force the GUI update
        (<! (-> (bs/make-modal :header (list [:h2 title]
                                             bs/close-modal-btn)
                               :body [:div.container
                                      (when message [:div.row [:h3 message]])
                                      [:div.row
                                       [:div.col-12.text-center.fa-4x
                                        [:i.fas.fa-shield-alt.pe-3]
                                        counter-span]]
                                      [:div.row.py-3
                                       [:div.col-6 [:div.d-grid minus-btn]]
                                       [:div.col-6 [:div.d-grid plus-btn]]]]
                               :footer (if show-cancel?
                                         (list accept-button cancel-button)
                                         accept-button))
                (bs/on-modal-keypress-enter (fn [modal]
                                              (reset! result-value @counter-value)
                                              (bs/hide-modal modal)))
                bs/show-modal))
        @result-value)))

(defn dice-roll-effect [dice imgs]
  (go (let [delay 15]
        (loop [i 0]
          (when (<= (* i delay) 200)
            (oset! (aget dice (mod i 6)) :src (rand-nth imgs))
            (<! (a/timeout delay))
            (recur (inc i)))))))

(defn show-attack-dialog [& {:keys [attacker defender on-dice-roll]}] ; TODO(Richo): This function is a mess!
  (go (let [imgs dice-images
            attack-btn (crate/html [:button.btn.btn-primary.btn-lg {:type "button"} "Atacar"])
            finish-btn (crate/html [:button.btn.btn-secondary.btn-lg {:type "button"} "Finalizar"])
            attacker-army-span (crate/html [:span])
            defender-army-span (crate/html [:span])
            modal (bs/make-modal
                   :header bs/close-modal-btn
                   :body [:div.container
                          [:div.row
                           [:div.col-6.text-center [:h1.text-truncate (get-in b/countries [attacker :name])]]
                           [:div.col-6.text-center [:h1.text-truncate (get-in b/countries [defender :name])]]]
                          [:div.row
                           [:div.col-6.text-center.fa-2x
                            [:i.fas.fa-shield-alt.pe-3]
                            attacker-army-span]
                           [:div.col-6.text-center.fa-2x
                            [:i.fas.fa-shield-alt.pe-3]
                            defender-army-span]]
                          [:hr]
                          [:div
                           [:div.row.py-2
                            [:div.col-6.text-center [:img.dice {:src (last imgs)}]]
                            [:div.col-6.text-center [:img.dice {:src (last imgs)}]]]
                           [:div.row.py-2
                            [:div.col-6.text-center [:img.dice {:src (last imgs)}]]
                            [:div.col-6.text-center [:img.dice {:src (last imgs)}]]]
                           [:div.row.py-2
                            [:div.col-6.text-center [:img.dice {:src (last imgs)}]]
                            [:div.col-6.text-center [:img.dice {:src (last imgs)}]]]]
                          [:hr]
                          [:div.row
                           [:div.col.d-grid attack-btn]
                           [:div.col.d-grid finish-btn]]])
            get-dice #(.querySelectorAll modal ".dice")
            get-dice-pairs #(partition-all 2 (get-dice))
            update-modal (fn [& {:keys [hide-dice?]}]
                           (let [game (get-game)]
                             (oset! attacker-army-span :innerText (str (teg/get-army game attacker)))
                             (oset! defender-army-span :innerText (str (teg/get-army game defender)))
                             (let [[a-count d-count] (teg/get-dice-count game attacker defender)
                                   class (if hide-dice? "d-none" "dice-disabled")]
                               (oset! attack-btn :disabled (or (<= a-count 0)
                                                               (<= d-count 0)))
                               (doseq [[idx [a-die d-die]] (map-indexed vector (get-dice-pairs))]
                                 (if (>= idx a-count)
                                   (.add (oget a-die :classList) class)
                                   (.remove (oget a-die :classList) class))
                                 (if (>= idx d-count)
                                   (.add (oget d-die :classList) class)
                                   (.remove (oget d-die :classList) class))))))]
        (update-modal :hide-dice? true)
        (bs/on-click finish-btn (partial bs/hide-modal modal))
        (bs/on-click attack-btn
                     #(go (let [dice (get-dice)]
                            (update-modal :hide-dice? true)
                            (oset! attack-btn :disabled true)
                            (doseq [die dice]
                              (doto (oget die :classList)
                                (.remove "dice-winner")
                                (.remove "dice-loser")
                                (.remove "dice-disabled")
                                (.add "rotate-center")))
                            (<! (a/timeout 200))
                            (<! (dice-roll-effect dice imgs))
                            (let [[a-count d-count] (teg/get-dice-count (get-game) attacker defender)
                                  a-throw (sort > (repeatedly a-count (partial rand-int 6)))
                                  d-throw (sort > (repeatedly d-count (partial rand-int 6)))]
                              (doseq [[i [a-die d-die]] (map-indexed vector (get-dice-pairs))]
                                (let [a (nth a-throw i nil)
                                      d (nth d-throw i nil)]
                                  (oset! a-die :src (if a (nth imgs a) (last imgs)))
                                  (oset! d-die :src (if d (nth imgs d) (last imgs)))
                                  (when (< i (min a-count d-count))
                                    (if (> a d)
                                      (do (.add (oget a-die :classList) "dice-winner")
                                          (.add (oget d-die :classList) "dice-loser"))
                                      (do (.add (oget d-die :classList) "dice-winner")
                                          (.add (oget a-die :classList) "dice-loser"))))))
                              (when on-dice-roll
                                (on-dice-roll a-throw d-throw)))
                            (<! (a/timeout 200))
                            (doseq [die dice] (.remove (oget die :classList) "rotate-center"))
                            (update-modal :hide-dice? false)
                            (let [game (get-game)]
                              (when (or (= 0 (teg/get-army game defender))
                                        (= 1 (teg/get-army game attacker)))
                                (<! (a/timeout 750)) ; Give user time to read the dice
                                (bs/hide-modal modal))))))
        (<! (bs/show-modal modal))
        (let [game (get-game)]
          (cond
            (= 0 (teg/get-army game defender)) :success
            (= 1 (teg/get-army game attacker)) :failure
            :else :cancel)))))

(defmulti finish-turn! (fn [game-atom] (@game-atom :phase)))

(defmethod finish-turn! ::teg/add-army [game-atom]
  (go (when (<! (bs/confirm "Confirmar" "¿Terminar incorporación de ejércitos?"))
        (let [additions (get-in @state [:user-data :additions] {})]
          (swap! state dissoc :user-data)
          (doseq [[country-id extra-army] additions]
            (when (> extra-army 0)
              (swap! game-atom teg/add-army country-id extra-army)))
          (swap! game-atom teg/finish-action)))))

(defmethod finish-turn! ::teg/attack [game-atom]
  (go (when (<! (bs/confirm "Confirmar" "¿Terminar ataque?"))
        (swap! game-atom teg/finish-action))))

(defmethod finish-turn! ::teg/regroup [game-atom]
  (go (when (<! (bs/confirm "Confirmar" "¿Terminar turno?"))
        (let [regroups (get-in @state [:user-data :regroups] [])]
          (swap! state dissoc :user-data)
          (doseq [[country-a country-b moving-army] regroups]
            (when (> moving-army 0)
              (swap! game-atom teg/regroup country-a country-b moving-army))))
        (swap! game-atom teg/finish-action))))

(defmulti can-interact-with-country? 
  (fn [{:keys [phase] :as game} _country _player]
    (when (is-my-turn? game)
      phase)))

(defmethod can-interact-with-country? ::teg/add-army [game country-id player-id]
  (= player-id (teg/country-owner game country-id)))

(defmethod can-interact-with-country? ::teg/attack [game country-id player-id]
  (if (= player-id (teg/country-owner game country-id))
    (> (teg/get-army game country-id) 1)
    (when-let [selected-country (get-in @state [:user-data :selected-country])]
      (contains? (get-in b/countries [selected-country :neighbours]) country-id))))

(defmethod can-interact-with-country? ::teg/regroup [game country-id player-id]
  (= player-id (teg/country-owner game country-id)))

(defmethod can-interact-with-country? :default [_] false)

(defn moved-army-effect [country-id value]
  (let [{:strs [x y]} (-> @state
                          (get-in [:countries country-id :counter])
                          (oget :center)
                          js->clj)
        label (-> (mm/make-label (u/format "%1%2"
                                           (if (pos? value) "+" "-")
                                           (js/Math.abs value))
                                 :font "bold 30px Arial"
                                 :color (if (pos? value) "lawngreen" "darkred")
                                 :center (clj->js {:x x, :y (- y 30)}))
                  (mm/translate 0 -100 2)
                  (mm/vanish 2))]
    (.addMorph world label)))

(defmulti click-country! (fn [game-atom _country-id] (@game-atom :phase)))

(defmethod click-country! ::teg/add-army [game-atom country-id]
  (go (let [game @game-atom
            country-name (:name (b/countries country-id))
            initial-army (teg/get-army game country-id)
            current-army (+ initial-army
                            (get-in @state [:user-data :additions country-id] 0))
            remaining (get-in @state [:user-data :remaining] 0)
            addition (<! (show-add-army-dialog
                          :title (list [:span "Incorporar ejércitos a "]
                                       [:span.fw-bolder.text-nowrap country-name])
                          :default-value 0
                          :min-value (- initial-army current-army)
                          :max-value remaining))]
        (print addition)
        (when-not (zero? addition)
          (swap! state #(-> %
                            (update-in [:user-data :remaining] - addition)
                            (update-in [:user-data :additions country-id] + addition)))
          (when (zero? (-> @state :user-data :remaining))
            (<! (finish-turn! game-atom)))))))

(defn attack! [game-atom attacker defender]
  (go (case (<! (show-attack-dialog
                 :attacker attacker
                 :defender defender
                 :on-dice-roll (fn [a-throw d-throw]
                                     ; TODO(Richo): Maybe add the army effect here?
                                 (swap! game-atom
                                        teg/attack
                                        [attacker a-throw]
                                        [defender d-throw]))))
        :success (let [army (<! (show-add-army-dialog
                                 :title (list [:span.fw-bolder.text-nowrap
                                               (get-in b/countries [attacker :name])]
                                              [:span " invadió "]
                                              [:span.fw-bolder.text-nowrap
                                               (get-in b/countries [defender :name])])
                                 :message "¿Cuántas tropas enviar?"
                                 :show-cancel? false
                                 :default-value 1
                                 :min-value 1
                                 :max-value (min 3 (dec (teg/get-army @game-atom attacker)))))]
                   (swap! game-atom teg/invade attacker defender army))
        :failure (<! (bs/alert "Invasión fallida"))
        :cancel :nop)
      (let [new-attacker-army (teg/get-army @game-atom attacker)]
        (when (<= new-attacker-army 1)
          (swap! state assoc-in [:user-data :selected-country] nil)))))

(defmethod click-country! ::teg/attack [game-atom country-id]
  (go (if-let [selected-country (get-in @state [:user-data :selected-country])]
        (if (= selected-country country-id)
          (swap! state assoc-in [:user-data :selected-country] nil)
          (let [game @game-atom]
            (if (= (teg/country-owner game selected-country)
                   (teg/country-owner game country-id))
              (swap! state assoc-in [:user-data :selected-country] country-id)
              (attack! game-atom selected-country country-id))))
        (swap! state assoc-in [:user-data :selected-country] country-id))))

(defmethod click-country! ::teg/regroup [game-atom country-id]
  (go (if-let [selected-country (get-in @state [:user-data :selected-country])]
        (if (= selected-country country-id)
          (swap! state assoc-in [:user-data :selected-country] nil)
          (if (contains? (get-in b/countries [selected-country :neighbours]) country-id)
            (let [initial-army (teg/get-army @game-atom selected-country)
                  substractions (reduce + (map (fn [[_ _ v]] v)
                                               (filter (fn [[c]] (= c selected-country))
                                                       (get-in @state [:user-data :regroups]))))
                  additions (reduce + (map (fn [[_ _ v]] v)
                                           (filter (fn [[_ c]] (= c selected-country))
                                                   (get-in @state [:user-data :regroups]))))
                  current-army (+ (- initial-army substractions) additions)
                  max-out (- initial-army substractions)
                  army (<! (show-add-army-dialog
                            :title (list [:span "Mover tropas de "]
                                         [:span.fw-bolder.text-nowrap (get-in b/countries [selected-country :name])]
                                         [:span " a "]
                                         [:span.fw-bolder.text-nowrap (get-in b/countries [country-id :name])])
                            :default-value 0
                            :min-value 0
                            ; TODO(Richo): I'm not sure this max-out calculation is correct. I *think* I'm allowed
                            ; to move the entire initial-army as long as I leave at least one army behind. So if I
                            ; want to be able to move the full initial-army I need to have received more additions
                            ; than substractions, right? But anyway, I don't remember the exact rules here anyway. 
                            :max-value (if (> current-army initial-army)
                                         max-out
                                         (dec max-out))))]
              (when (> army 0)
                (swap! state update-in [:user-data :regroups] conj [selected-country country-id army]))
              (swap! state assoc-in [:user-data :selected-country] nil))
            (swap! state assoc-in [:user-data :selected-country] country-id)))
        (swap! state assoc-in [:user-data :selected-country] country-id))))

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
        (mm/on-mouse-move #(let [game (get-game)
                                 current-player (teg/get-current-player game)]
                             (if (can-interact-with-country? game country-id current-player)
                               (oset! (js/document.querySelector "#board-panel") :style.cursor "pointer")
                               (oset! (js/document.querySelector "#board-panel") :style.cursor "default"))))
        (mm/on-mouse-down #(let [game (get-game)
                                 current-player (teg/get-current-player game)]
                             (when (can-interact-with-country? game country-id current-player)
                               (oset! morph :alpha selected-alpha))))
        (mm/on-mouse-up #(go (let [game (get-game)
                                   current-player (teg/get-current-player game)]
                               (when (can-interact-with-country? game country-id current-player)
                                 (<! (click-country! (@state :game-atom) country-id))
                                 (oset! morph :alpha 0.5))))))
      (swap! state
             assoc-in [:countries country-id]
             {:morph morph
              :counter counter}))))

(defn init-countries []
  (go (<! (a/map vector (map init-country (shuffle country-data))))))

(defn init-map []
  (go
    (let [form (<! (mm/load-form "imgs/teg_board.png"))
          map (-> (mm/make-sprite form :alpha 0)
                  (mm/appear 2))]
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
              additions (+ (get-in @state [:user-data :additions id] 0)
                           (reduce + (map (fn [[_ _ v]] v)
                                          (filter (fn [[_ c]] (= c id))
                                                  (get-in @state [:user-data :regroups] [])))))
              substractions (reduce + (map (fn [[_ _ v]] v)
                                           (filter (fn [[c]] (= c id))
                                                   (get-in @state [:user-data :regroups] []))))
              selected? (= id (get-in @state [:user-data :selected-country]))]
          (oset! morph :form tinted-form)
          (oset! morph :alpha (if player-idx 
                                (if selected? 0.25 0.5)
                                0))
          (oset! counter :alpha (if player-idx 1 0))
          (update-army-counter counter color 
                               (if player-idx
                                 (- (+ army additions)
                                    substractions)
                                 0)
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

(defmulti finish-turn-enabled? :phase)

(defmethod finish-turn-enabled? ::teg/add-army [game]
  (and (is-my-turn? game)
       (= 0 (get-in @state [:user-data :remaining] 0))))

(defmethod finish-turn-enabled? :default [game]
  (is-my-turn? game))

(defmulti status-panel-title :phase)

(defmethod status-panel-title ::teg/add-army [_]
  (let [remaining (get-in @state [:user-data :remaining] 0)]
    (u/format "Incorporando ejércitos (%1 %2)"
              remaining
              (if (= 1 remaining) "restante" "restantes"))))

(defmethod status-panel-title ::teg/attack [_] "Atacando...")
(defmethod status-panel-title ::teg/regroup [_] "Reagrupando...")

(defmulti finish-btn-label :phase)
(defmethod finish-btn-label ::teg/add-army [_] "Confirmar")
(defmethod finish-btn-label ::teg/attack [_] "Reagrupar")
(defmethod finish-btn-label ::teg/regroup [_] "Finalizar turno")

(defn update-status-panel [{:keys [turn]}]
  (go (let [game (get-game)
            status-bar (js/document.querySelector "#status-bar")]
        (oset! status-bar :innerHTML "")
        (when turn
          (.appendChild status-bar
                        (crate/html
                         [:div.row.align-items-center.p-1
                          [:div.col.text-truncate
                           [:h4.text-truncate
                            (status-panel-title game)]]
                          [:div.col-auto
                           [:button#finish-turn-button.btn.btn-primary.btn-lg
                            {:type "button" :disabled (not (finish-turn-enabled? game))}
                            (finish-btn-label game)]]]))
          (.addEventListener (js/document.querySelector "#finish-turn-button")
                             "click"
                             #(finish-turn! (@state :game-atom)))))))

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

(defmulti reset-user-data :phase)

(defmethod reset-user-data ::teg/add-army [game]
  {:remaining (teg/calculate-extra-army game)
   :additions {}})

(defmethod reset-user-data ::teg/attack [_] 
  {:selected-country nil})

(defmethod reset-user-data ::teg/regroup [_]
  {:selected-country nil
   :regroups []})

(defmethod reset-user-data :default [_] {})

(defn show-toast [msg]
  (-> (bs/make-toast :header (list [:h5 msg]
                                [:span.me-auto] bs/close-toast-btn))
      (bs/show-toast {:delay 2500})))

(defn initialize [game-atom user-atom]
  (go (reset! state {:game-atom game-atom
                     :user-atom user-atom
                     :updates (a/chan (a/sliding-buffer 1))})
      (.removeAllSubmorphs world)
      (<! (init-map))
      (<! (init-countries))
      (add-watch state :ui-change
                 #(a/put! (@state :updates) @game-atom))
      (let [state-change (fn [_key _atom old-state new-state]
                           (when-not (= (old-state :turn)
                                        (new-state :turn))
                             (show-toast (if (is-my-turn? new-state)
                                           "¡Es tu turno!"
                                           (list [:span "Es el turno de "]
                                                 [:span.fw-bolder.text-nowrap
                                                  (teg/get-current-player-name new-state)]))))
                           (when (not= [(old-state :phase) (old-state :turn)]
                                       [(new-state :phase) (new-state :turn)])
                             (swap! state assoc :user-data
                                    (reset-user-data new-state)))
                           (doseq [country (keys b/countries)]
                             (let [delta-army (- (teg/get-army new-state country)
                                                 (teg/get-army old-state country))]
                               (when-not (zero? delta-army)
                                 (moved-army-effect country delta-army))))
                           (a/put! (@state :updates) new-state))]
        (add-watch game-atom :state-change state-change)
        (state-change :state-change game-atom {} @game-atom))
      (start-update-loop)))

(defn terminate []
  (go (a/close! (@state :updates))))
