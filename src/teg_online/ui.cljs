(ns teg-online.ui
  (:require [clojure.core.async :as a :refer [go <!]]
            [clojure.pprint :as pp]
            [teg-online.utils.async :refer [<? go-try]]
            [clojure.string :as str]
            [oops.core :refer [oget oset! ocall!]]
            [crate.core :as crate]
            [teg-online.utils.minimorphic :as mm]
            [teg-online.utils.bootstrap :as bs]
            [teg-online.utils.core :as u]
            [teg-online.ui-constants :refer [country-data player-colors dice-images card-images]]
            [teg-online.game :as teg]
            [teg-online.board :as b]
            [teg-online.ai.client :as ai]
            [teg-online.ai.models :refer [models models-by-id]]
            [teg-online.ai.scoring :as score]
            [teg-online.ai.response :as response]))

(defonce world (js/World. (js/document.querySelector "#board-canvas")))

(defn resize-board []
  (let [board-panel (js/document.querySelector "#board-panel")
        top-bar (js/document.querySelector "#top-bar")
        new-height (u/format "calc(100% - %1px)"
                             (oget top-bar :offsetHeight))]
    (oset! board-panel :style.height
           new-height)))

(.addEventListener js/window "resize" resize-board)
(resize-board)

(defn is-my-turn? [user game]
  (and (not (teg/game-over? game))
       ; HACK(Richo): Just for testing!
       (= (get user :id)
          (teg/get-current-player game))))

(defn show-toast [msg]
  (-> (bs/make-toast :header (list [:h5 msg]
                                   [:span.me-auto]
                                   bs/close-toast-btn))
      (bs/show-toast {:delay 2500})))

(defn show-add-army-dialog [& {:keys [title message min-value max-value default-value show-cancel?]
                               :or {title nil, message nil, default-value 0, show-cancel? true}}]
  (go (let [result-value (atom default-value)
            counter-value (atom default-value :validator #(and (>= % min-value) (<= % max-value)))
            counter-span (crate/html [:span.text-black-50])
            minus-10-btn (bs/on-click
                          (crate/html [:button.btn.btn-danger.btn-lg {:type "button"} [:i.fas.fa-minus.pe-1] "10"])
                          #(swap! counter-value - 10))
            minus-1-btn (bs/on-click
                         (crate/html [:button.btn.btn-danger.btn-lg {:type "button"} [:i.fas.fa-minus]])
                         #(swap! counter-value dec))
            plus-1-btn (bs/on-click
                        (crate/html [:button.btn.btn-success.btn-lg {:type "button"} [:i.fas.fa-plus]])
                        #(swap! counter-value inc))
            plus-10-btn (bs/on-click
                         (crate/html [:button.btn.btn-success.btn-lg {:type "button"} [:i.fas.fa-plus.pe-1] "10"])
                         #(swap! counter-value + 10))
            accept-button (bs/on-click
                           (crate/html bs/accept-modal-btn)
                           #(reset! result-value @counter-value))
            cancel-button (bs/on-click
                           (crate/html bs/cancel-modal-btn)
                           #(reset! result-value default-value))]
        (add-watch counter-value :update
                   (fn [_ _ _ val]
                     (oset! minus-10-btn :disabled (<= (- val 9) min-value))
                     (oset! minus-1-btn :disabled (<= val min-value))
                     (oset! plus-1-btn :disabled (>= val max-value))
                     (oset! plus-10-btn :disabled (>= (+ val 9) max-value))
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
                                       (when (>= (- max-value min-value) 10)
                                         [:div.col [:div.d-grid minus-10-btn]])
                                       [:div.col [:div.d-grid minus-1-btn]]
                                       [:div.col [:div.d-grid plus-1-btn]]
                                       (when (>= (- max-value min-value) 10)
                                         [:div.col [:div.d-grid plus-10-btn]])]]
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

(defn show-attack-dialog [state & {:keys [attacker defender on-dice-roll]}] ; TODO(Richo): This function is a mess!
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
                           (let [game (:game @state)]
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
                            (let [[a-count d-count] (teg/get-dice-count (:game @state) attacker defender)
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
                            (let [game (:game @state)]
                              (when (or (= 0 (teg/get-army game defender))
                                        (= 1 (teg/get-army game attacker)))
                                (<! (a/timeout 750)) ; Give user time to read the dice
                                (bs/hide-modal modal))))))
        (<! (bs/show-modal modal))
        (let [game (:game @state)]
          (cond
            (= 0 (teg/get-army game defender)) :success
            (= 1 (teg/get-army game attacker)) :failure
            :else :cancel)))))

(defn show-draw-card-dialog [game country-id]
  (go (let [country-name (:name (b/countries country-id))
            card-image (-> game :cards country-id :type card-images)]
        (<! (-> (bs/make-modal :header (list [:h2 "Conseguiste una tarjeta de país"]
                                             bs/close-modal-btn)
                               :body [:div.container.text-center
                                      [:div.row
                                       [:div.col]
                                       [:div.col-auto
                                        [:div.row.border.border-dark.align-items-center
                                         [:div.col-6 [:h1 country-name]]
                                         [:div.col-6 [:img.img-fluid {:src card-image}]]]]
                                       [:div.col]]]
                               :footer bs/accept-modal-btn)
                (bs/show-modal))))))

(defn show-card-list-dialog [game countries]
  (go (<! (-> (bs/make-modal :header (list [:h2 "Tarjetas de país"] bs/close-modal-btn)
                             :body [:div.container.text-center
                                    [:div.row
                                     [:div.col]
                                     [:div.col-auto
                                      (if (empty? countries)
                                        [:h3 "No tenés ninguna tarjeta de país"]
                                        (map (fn [country-id]
                                             (let [country-name (:name (b/countries country-id))
                                                   card-image (-> game :cards country-id :type card-images)]
                                               [:div.row.my-2.border.border-dark.align-items-center
                                                [:div.col-6 [:h1 country-name]]
                                                [:div.col-6 [:img.img-fluid {:src card-image}]]]))
                                           countries))]
                                     [:div.col]]]
                             :footer bs/accept-modal-btn)
              (bs/show-modal)))))

(defn show-exchange-dialog [state forced?]
  (go (let [result (atom nil)
            selection (atom nil)
            game (:game @state)
            user (:user @state)
            user-id (get user :id)
            countries (teg/get-player-cards game user-id)
            accept-button (bs/on-click (crate/html bs/accept-modal-btn)
                                       #(reset! result @selection))
            cancel-button (crate/html bs/cancel-modal-btn)
            close-button (crate/html bs/close-modal-btn)
            modal (bs/make-modal :header (list [:h2 "Seleccionar 3 tarjetas"] close-button)
                                 :body [:div.container.text-center
                                        [:div.row
                                         [:div.col]
                                         [:div.col-auto
                                          (if (empty? countries)
                                            [:h3 "Todavía no conseguiste ninguna tarjeta de país"]
                                            (map (fn [country-id]
                                                   (let [country-name (:name (b/countries country-id))
                                                         card-image (-> game :cards country-id :type card-images)
                                                         country-row (crate/html [:div.row.my-2.border.border-dark.bg-gradient.align-items-center
                                                                                  [:div.col-6 [:h1 country-name]]
                                                                                  [:div.col-6 [:img.img-fluid {:src card-image}]]])]
                                                     (bs/on-click country-row
                                                                  #(if (contains? @selection country-id)
                                                                     (do (swap! selection disj country-id)
                                                                         (.remove (oget country-row :classList) "bg-primary"))
                                                                     (when (< (count @selection) 3)
                                                                       (swap! selection conj country-id)
                                                                       (.add (oget country-row :classList) "bg-primary"))))))
                                                 countries))]
                                         [:div.col]]]
                                 :footer (list accept-button
                                               cancel-button))]
        (add-watch selection ::selection-change
                   (fn [_ _ _ value]
                     (oset! accept-button :disabled
                            (not (teg/valid-exchange? game value)))))
        (oset! cancel-button :disabled forced?)
        (oset! close-button :disabled forced?)
        (reset! selection #{})
        (<! (bs/show-modal modal
                           (if forced?
                             {:backdrop "static"
                              :keyboard false}
                             {})))
        @result)))

(defn surrender! [state]
  (go (when (<! (bs/confirm "¡Cobarde!" "¿Estás seguro de que querés abandonar?"))
        (swap! state update :game teg/surrender (get (:user @state) :id)))))

(defn show-menu! [state]
  (go (let [user-id (get (:user @state) :id)
            cards-btn (crate/html [:button.btn.btn-primary.btn-lg
                                   {:type "button"}
                                   "Ver tarjetas de país"])
            secret-goal-btn (crate/html [:button.btn.btn-secondary.btn-lg
                                         {:type "button"}
                                         "Ver objetivo secreto"])
            common-goal-btn (crate/html [:button.btn.btn-secondary.btn-lg
                                         {:type "button"}
                                         "Ver objetivo común"])
            surrender-btn (crate/html [:button.btn.btn-danger.btn-lg
                                       {:type "button"}
                                       "Abandonar partida"])
            modal (bs/make-modal
                   :body [:div.container-fluid
                          [:div.row cards-btn]
                          [:div.row.m-1]
                          [:div.row secret-goal-btn]
                          [:div.row.m-1]
                          [:div.row common-goal-btn]
                          [:div.row.m-1]
                          [:div.row surrender-btn]])
            update-menu (fn [game]
                          (if-not (teg/get-player game user-id)
                            (do (oset! secret-goal-btn :disabled true)
                                (oset! surrender-btn :disabled true))
                            (do (oset! secret-goal-btn :disabled false)
                                (oset! surrender-btn :disabled
                                       (or (teg/game-over? game)
                                           (not (teg/still-playing? game user-id)))))))]
        (bs/on-click cards-btn
                     #(let [game (:game @state)
                            countries (teg/get-player-cards game user-id)]
                        (show-card-list-dialog game countries)))
        (bs/on-click secret-goal-btn
                     #(bs/alert "Objetivo secreto"
                                (:name (teg/get-player-goal (:game @state) user-id))))
        (bs/on-click common-goal-btn
                     #(bs/alert "Objetivo común"
                                (:name teg/common-goal)))
        (bs/on-click surrender-btn #(surrender! state))
        (add-watch state ::menu-update (fn [_ _ _ new] (update-menu (:game new))))
        (update-menu (:game @state))
        (<! (bs/show-modal modal))
        (remove-watch state ::menu-update))))

(defmulti finish-turn! (fn [state] (-> @state :game :phase)))

(defmethod finish-turn! ::teg/add-army [state]
  (go (when (<! (bs/confirm "Confirmar" "¿Terminar incorporación de ejércitos?"))
        (let [additions (get-in @state [:ui :user-data :additions] {})]
          (swap! state
                 #(-> %
                      (update :ui dissoc :user-data)
                      (update :game (fn [game]
                                      (teg/finish-action
                                       (reduce (fn [game [country-id extra-army]]
                                                 (if (> extra-army 0)
                                                   (teg/add-army game country-id extra-army)
                                                   game))
                                               game
                                               additions))))))))))

(defmethod finish-turn! ::teg/add-army-continent [state]
  (go (when (<! (bs/confirm "Confirmar"
                            (u/format "¿Terminar incorporación de ejércitos en %1?"
                                      (b/get-continent-name (get-in @state [:ui :user-data :continent])))))
        (let [additions (get-in @state [:ui :user-data :additions] {})]
          (swap! state
                 #(-> %1
                      (update :ui dissoc :user-data)
                      (update :game (fn [game]
                                      (teg/finish-action
                                       (reduce (fn [game [country-id extra-army]]
                                                 (if (> extra-army 0)
                                                   (teg/add-army game country-id extra-army)
                                                   game))
                                               game
                                               additions))))))))))

(defmethod finish-turn! ::teg/attack [state]
  (go (when (<! (bs/confirm "Confirmar" "¿Terminar ataque?"))
        (swap! state update :game teg/finish-action))))

(defmethod finish-turn! ::teg/regroup [state]
  (go (when (<! (bs/confirm "Confirmar" "¿Terminar turno?"))
        (let [regroups (get-in @state [:ui :user-data :regroups] [])]
          (swap! state 
                 #(-> %
                      (update :ui dissoc :user-data)
                      (update :game (fn [game]
                                      (reduce (fn [game [country-a country-b moving-army]]
                                                (if (> moving-army 0)
                                                  (teg/regroup game country-a country-b moving-army)
                                                  game))
                                              game
                                              regroups)))))
          (when (teg/draw-card? (:game @state))
            (let [random-card (rand-nth (teg/get-free-cards (:game @state)))]
              (swap! state update :game teg/draw-card random-card)
              (show-draw-card-dialog (:game @state) random-card)))
          (swap! state update :game (comp teg/finish-action teg/check-unused-cards))))))

(defmulti can-interact-with-country?
  (fn [state _country _player]
    (let [{:keys [phase] :as game} (:game @state)
          user (:user @state)]
      (when (and (nil? (-> @state :debug :selected-snapshot))
                 (is-my-turn? user game))
        phase))))

(defmethod can-interact-with-country? ::teg/add-army [state country-id player-id]
  (= player-id (teg/country-owner (:game @state) country-id)))

(defmethod can-interact-with-country? ::teg/add-army-continent [state country-id player-id]
  (and (= (get-in @state [:ui :user-data :continent])
          (-> b/countries country-id :continent))
       (= player-id (teg/country-owner (:game @state) country-id))))

(defmethod can-interact-with-country? ::teg/attack [state country-id player-id]
  (let [game (:game @state)]
    (if (= player-id (teg/country-owner game country-id))
      (> (teg/get-army game country-id) 1)
      (when-let [selected-country (get-in @state [:ui :user-data :selected-country])]
        (contains? (get-in b/countries [selected-country :neighbours]) country-id)))))

(defmethod can-interact-with-country? ::teg/regroup [state country-id player-id]
  (= player-id (teg/country-owner (:game @state) country-id)))

(defmethod can-interact-with-country? :default [_] false)

(defn moved-army-effect [state country-id value]
  (let [{:strs [x y]} (-> @state
                          (get-in [:ui :countries country-id :counter])
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

(defmulti click-country! (fn [state _country-id] (-> @state :game :phase)))

(defmethod click-country! ::teg/add-army [state country-id]
  (go (let [game (:game @state)
            country-name (:name (b/countries country-id))
            initial-army (teg/get-army game country-id)
            current-army (+ initial-army
                            (get-in @state [:ui :user-data :additions country-id] 0))
            remaining (get-in @state [:ui :user-data :remaining] 0)
            addition (<! (show-add-army-dialog
                          :title (list [:span "Incorporar ejércitos a "]
                                       [:span.fw-bolder.text-nowrap country-name])
                          :default-value 0
                          :min-value (- initial-army current-army)
                          :max-value remaining))]
        (print addition)
        (when-not (zero? addition)
          (swap! state #(-> %
                            (update-in [:ui :user-data :remaining] - addition)
                            (update-in [:ui :user-data :additions country-id] + addition)))
          (when (zero? (-> @state :ui :user-data :remaining))
            (<! (finish-turn! state)))))))

(defn attack! [state attacker defender]
  (go (case (<! (show-attack-dialog
                 state
                 :attacker attacker
                 :defender defender
                 :on-dice-roll (fn [a-throw d-throw]
                                     ; TODO(Richo): Maybe add the army effect here?
                                 (swap! state
                                        update :game
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
                                 :max-value (min 3 (dec (teg/get-army (:game @state) attacker)))))]
                   (swap! state update :game teg/invade attacker defender army))
        :failure (<! (bs/alert "Invasión fallida"))
        :cancel :nop)
      (let [new-attacker-army (teg/get-army (:game @state) attacker)]
        (when (<= new-attacker-army 1)
          (swap! state assoc-in [:ui :user-data :selected-country] nil)))))

(defmethod click-country! ::teg/attack [state country-id]
  (go (if-let [selected-country (get-in @state [:ui :user-data :selected-country])]
        (if (= selected-country country-id)
          (swap! state assoc-in [:ui :user-data :selected-country] nil)
          (let [game (:game @state)]
            (if (= (teg/country-owner game selected-country)
                   (teg/country-owner game country-id))
              (swap! state assoc-in [:ui :user-data :selected-country] country-id)
              (attack! state selected-country country-id))))
        (swap! state assoc-in [:ui :user-data :selected-country] country-id))))

(defmethod click-country! ::teg/regroup [state country-id]
  (go (if-let [selected-country (get-in @state [:ui :user-data :selected-country])]
        (if (= selected-country country-id)
          (swap! state assoc-in [:ui :user-data :selected-country] nil)
          (if (contains? (get-in b/countries [selected-country :neighbours]) country-id)
            (let [initial-army (teg/get-army (:game @state) selected-country)
                  substractions (reduce + (map (fn [[_ _ v]] v)
                                               (filter (fn [[c]] (= c selected-country))
                                                       (get-in @state [:ui :user-data :regroups]))))
                  additions (reduce + (map (fn [[_ _ v]] v)
                                           (filter (fn [[_ c]] (= c selected-country))
                                                   (get-in @state [:ui :user-data :regroups]))))
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
                (swap! state update-in [:ui :user-data :regroups] conj [selected-country country-id army]))
              (swap! state assoc-in [:ui :user-data :selected-country] nil))
            (swap! state assoc-in [:ui :user-data :selected-country] country-id)))
        (swap! state assoc-in [:ui :user-data :selected-country] country-id))))

(defn init-country [state [country-id {[x y] :position, img :img, [ox oy] :counter-offset}]]
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
        (mm/on-mouse-move #(let [game (:game @state)
                                 current-player (teg/get-current-player game)]
                             (if (can-interact-with-country? state country-id current-player)
                               (oset! (js/document.querySelector "#board-panel") :style.cursor "pointer")
                               (oset! (js/document.querySelector "#board-panel") :style.cursor "default"))))
        (mm/on-mouse-down #(let [game (:game @state)
                                 current-player (teg/get-current-player game)]
                             (when (can-interact-with-country? state country-id current-player)
                               (oset! morph :alpha selected-alpha))))
        (mm/on-mouse-up #(go (let [game (:game @state)
                                   current-player (teg/get-current-player game)]
                               (when (can-interact-with-country? state country-id current-player)
                                 (<! (click-country! state country-id))
                                 (oset! morph :alpha 0.5))))))
      (swap! state
             assoc-in [:ui :countries country-id]
             {:morph morph
              :counter counter}))))

(defn init-countries [state]
  (go (<! (a/map vector (map (partial init-country state) 
                             (shuffle country-data))))))

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

(defn update-country [state player-indices {:keys [id owner army]}]
  (go (when-let [{:keys [morph counter]}
                 (get-in @state [:ui :countries id])]
        (let [user-data (-> @state :ui :user-data)
              player-idx (player-indices owner)
              color (get player-colors player-idx "white")
              original-form (oget morph :originalForm)
              tinted-form (if player-idx
                            (<! (mm/tint original-form color))
                            original-form)
              additions (+ (get-in user-data [:additions id] 0)
                           (reduce + (map (fn [[_ _ v]] v)
                                          (filter (fn [[_ c]] (= c id))
                                                  (get user-data :regroups [])))))
              substractions (reduce + (map (fn [[_ _ v]] v)
                                           (filter (fn [[c]] (= c id))
                                                   (get user-data :regroups []))))
              selected? (= id (get user-data :selected-country))]
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

(defn update-countries [state]
  (go (let [{:keys [turn-order countries]} (:game @state)
            player-indices (into {} (map-indexed (fn [idx pid] [pid idx])
                                                 turn-order))]
        (<! (a/map vector
                   (map (partial update-country state player-indices)
                        (vals countries)))))))

(defn update-players [state]
  (go (let [{:keys [players turn-order turn] :as game} (:game @state)
            player-scores (score/calculate-scores game)
            players-row (js/document.querySelector "#players-bar .row")
            player-count (count turn-order)
            player-width (/ 12 (if (> player-count 4)
                                 (js/Math.ceil (/ player-count 2))
                                 player-count))]
        (oset! players-row :innerHTML "")
        (doseq [[idx pid] (map-indexed vector turn-order)]
          (let [player (players pid)
                scores (player-scores pid)
                game-started? (teg/game-started? game)
                playing? (and (:playing? player)
                              (seq (teg/player-countries game pid)))
                icon-style (u/format "color: %1;" (player-colors idx))]
            (.appendChild players-row
                          (crate/html
                           [:div {:class (u/format "col-sm-%1 player %2"
                                                   player-width
                                                   (when (= idx (mod turn player-count))
                                                     "player-turn"))}
                            [:div.row
                             [:div.col-auto.text-truncate
                              [:i.fas.fa-square.me-1 {:style icon-style}]
                              [:span {:class (when (and game-started?
                                                        (not playing?)) 
                                               "text-decoration-line-through")}
                               (player :name)]]]
                            [:div.row
                             [:div.col-auto
                              [:i.fas.fa-flag.me-1 {:style icon-style}]
                              [:span (count (teg/player-countries game pid))]]
                             [:div.col-auto
                              [:i.fas.fa-shield-alt.me-1 {:style icon-style}]
                              [:span (teg/player-army-count game pid)]]
                             [:div.col-auto
                              [:i.far.fa-star.me-1 {:style icon-style}]
                              [:span (.toFixed (:absolute scores) 2)]]
                             [:div.col-auto
                              [:i.fas.fa-star.me-1 {:style icon-style}]
                              [:span (.toFixed (* 100 (:normalized scores)) 2)]]]])))))))

(defn exchange-button-visible? [user game]
  (and (is-my-turn? user game)
       (= ::teg/add-army (:phase game))))

(defmulti finish-turn-enabled? (fn [state] (-> @state :game :phase)))

(defmethod finish-turn-enabled? ::teg/add-army [state]
  (and (is-my-turn? (:user @state)
                    (:game @state))
       (= 0 (get-in @state [:ui :user-data :remaining] 0))))

(defmethod finish-turn-enabled? :default [state]
  (is-my-turn? (:user @state) 
               (:game @state)))

(defmulti status-panel-title (fn [state] (-> @state :game :phase)))

(defmethod status-panel-title ::teg/add-army [state]
  (let [game (:game @state)
        user (:user @state)
        remaining (if (is-my-turn? user game) ; TODO(Richo): I think this is a bug
                    (get-in @state [:ui :user-data :remaining] 0)
                    (get-in game [:current-turn :extra-army] 0))]
    (list [:span "Incorporando ejércitos "]
          [:span.text-nowrap
           (u/format "(%1 %2)"
                     remaining
                     (if (= 1 remaining) "restante" "restantes"))])))

(defmethod status-panel-title ::teg/add-army-continent [state]
  (let [game (:game @state)
        user (:user @state)
        remaining (if (is-my-turn? user game) ; TODO(Richo): I think this is a bug
                    (get-in @state [:ui :user-data :remaining] 0)
                    (get-in game [:current-turn :extra-army] 0))
        continent (get-in @state [:ui :user-data :continent])]
    (list [:span "Incorporando ejércitos en "]
          [:span.fw-bolder.text-nowrap (b/get-continent-name continent)]
          [:span " "]
          [:span.text-nowrap
           (u/format "(%1 %2)"
                     remaining
                     (if (= 1 remaining) "restante" "restantes"))])))

(defmethod status-panel-title ::teg/attack [_] "Atacando...")
(defmethod status-panel-title ::teg/regroup [_] "Reagrupando...")

(defmulti finish-btn-label :phase)
(defmethod finish-btn-label ::teg/add-army [_] "Confirmar")
(defmethod finish-btn-label ::teg/attack [_] "Reagrupar")
(defmethod finish-btn-label ::teg/regroup [_] "Finalizar turno")

(defn exchange-cards! [state & {:keys [forced?] :or {forced? false}}]
  (go (when-let [countries (<! (show-exchange-dialog state forced?))]
        (let [game (:game @state)
              exchange-bonus (teg/get-exchange-bonus game)]
          (swap! state
                 #(-> %
                      (update :game teg/exchange-cards (seq countries))
                      (update-in [:ui :user-data :remaining] + exchange-bonus)))))))

(defn update-status-panel [state]
  (go (let [{:keys [turn] :as game} (:game @state)
            user (:user @state)
            status-bar (js/document.querySelector "#status-bar")
            show-buttons? (nil? (-> @state :debug :selected-snapshot))]
        (oset! status-bar :innerHTML "")
        (if (is-my-turn? user game)
          (.add (oget status-bar :classList) "player-turn")
          (.remove (oget status-bar :classList) "player-turn"))
        (when turn
          (.appendChild status-bar
                        (crate/html
                         [:div.row.align-items-center.py-1.g-1
                          [:div.col-auto
                           [:button#menu-button.btn.btn-lg.btn-outline-dark {:type "button"}
                            [:i.fas.fa-bars]]]
                          [:div.col.text-center
                           [:h4 (when-not (teg/game-over? game)
                                  (status-panel-title state))]]
                          (when (and show-buttons?
                                     (exchange-button-visible? user game))
                            [:div.col-auto
                             [:button#exchange-button.btn.btn-secondary.btn-lg {:type "button"} "Canje"]])
                          (when show-buttons?
                            [:div.col-auto
                             [:button#finish-turn-button.btn.btn-primary.btn-lg
                              {:type "button" :disabled (not (finish-turn-enabled? state))}
                              (finish-btn-label game)]])]))
          (.addEventListener (js/document.querySelector "#menu-button")
                             "click"
                             #(show-menu! state))
          (when-let [finish-turn-btn (js/document.querySelector "#finish-turn-button")]
            (.addEventListener finish-turn-btn
                               "click"
                               #(finish-turn! state)))
          (when-let [exchange-btn (js/document.querySelector "#exchange-button")]
            (.addEventListener exchange-btn
                               "click"
                               #(exchange-cards! state))
            (oset! exchange-btn :disabled
                   (not (teg/can-exchange? game (get user :id)))))))))

(defn set-current-snapshot! [state snapshot-idx]
  (let [snapshots (-> @state :debug :snapshots)]
    (when-let [snapshot (nth snapshots snapshot-idx nil)]
      (swap! state
             #(-> %
                  (assoc-in [:debug :selected-snapshot] snapshot-idx)
                  (assoc :game snapshot))))))

(defn set-previous-snapshot! [state]
  (if-let [selected-snapshot (-> @state :debug :selected-snapshot)]
    (when (> selected-snapshot 0)
      (set-current-snapshot! state (dec selected-snapshot)))
    (set-current-snapshot! state (- (count (-> @state :debug :snapshots)) 2))))

(defn set-next-snapshot! [state]
  (let [selected-snapshot (-> @state :debug :selected-snapshot)]
    (when (< selected-snapshot (dec (count (-> @state :debug :snapshots))))
      (set-current-snapshot! state (inc selected-snapshot)))))

(defn restart-from-current-snapshot! [state]
  (let [selected-snapshot (-> @state :debug :selected-snapshot)]
    (println selected-snapshot)
    (when-let [snapshot (nth (-> @state :debug :snapshots)
                             selected-snapshot nil)]
      (println snapshot)
      (let [old @state
            new (swap! state #(-> %
                                  (update-in [:debug :snapshots] subvec 0 (inc selected-snapshot))
                                  (assoc-in [:debug :selected-snapshot] nil)
                                  (assoc :game snapshot)))]
        (println (= old new))))))

(defn pause-from-current-snapshot! [state]
  (swap! state assoc-in [:debug :selected-snapshot] 
         (dec (count (-> @state :debug :snapshots)))))

(defn init-debug-panel! [state]
  (doto (js/document.querySelector "#debug-panel")
    (oset! :innerHTML "")
    (.appendChild
     (crate/html
      [:div#bottom-bar.row.text-center.py-2.bg-light.justify-content-center.align-items-center.border.border-4
       [:div.col-auto
        [:button#snapshot-print.btn.btn-lg.btn-outline-dark [:i.fas.fa-terminal]]
        [:span.mx-1]
        [:button#snapshot-copy.btn.btn-lg.btn-outline-dark [:i.fa.fa-copy]]]
       [:div.col
        [:input#snapshot-range.form-range {:type "range" :min 0 :max 10 :step 1}]]
       [:div.col-auto
        [:div.btn-group.btn-group-lg {:role "group"}
         [:button#snapshot-previous.btn.btn-outline-dark [:i.fas.fa-step-backward]]
         [:button#snapshot-play.btn.btn-outline-dark [:i.fas.fa-play]]
         [:button#snapshot-pause.btn.btn-outline-dark [:i.fas.fa-pause]]
         [:button#snapshot-next.btn.btn-outline-dark [:i.fas.fa-step-forward]]]]])))
  (let [snapshot-previous (js/document.getElementById "snapshot-previous")]
    (bs/on-click snapshot-previous #(set-previous-snapshot! state)))
  (let [snapshot-next (js/document.getElementById "snapshot-next")]
    (bs/on-click snapshot-next #(set-next-snapshot! state)))
  (let [snapshot-play (js/document.getElementById "snapshot-play")]
    (bs/on-click snapshot-play #(restart-from-current-snapshot! state)))
  (let [snapshot-pause (js/document.getElementById "snapshot-pause")]
    (bs/on-click snapshot-pause #(pause-from-current-snapshot! state)))
  (let [snapshot-range (js/document.getElementById "snapshot-range")]
    (bs/on-input snapshot-range
                 #(set-current-snapshot! state (int (oget snapshot-range :value)))))
  (let [snapshot-print (js/document.getElementById "snapshot-print")]
    (bs/on-click snapshot-print
                 #(do
                    (bs/show-toast-msg "Current snapshot printed to the console"
                                       [:i.fas.fa-terminal])
                    (js/console.log (clj->js (:game @state))))))
  (let [snapshot-copy (js/document.getElementById "snapshot-copy")]
    (bs/on-click snapshot-copy
                 #(let [str (pr-str (:game @state))]
                    (bs/show-modal
                     (bs/make-modal :header (list bs/close-modal-btn)
                                    :body [:div.font-monospace
                                           {:style "user-select: all;"}
                                           str]))))))

(defn update-debug-panel [state]
  (go (let [debug-data (-> @state :debug)
            history (:snapshots debug-data)
            max (-> history count dec)
            disabled? (empty? history)
            selected-snapshot (:selected-snapshot debug-data)]
        (doto (js/document.getElementById "snapshot-print")
          (oset! :disabled disabled?))
        (doto (js/document.getElementById "snapshot-copy")
          (oset! :disabled disabled?))
        (doto (js/document.getElementById "snapshot-range")
          (oset! :disabled disabled?)
          (oset! :max max)
          (oset! :value (or selected-snapshot max)))
        (doto (js/document.getElementById "snapshot-play")
          (oset! :hidden (nil? selected-snapshot))
          (oset! :disabled (or disabled?
                               (nil? (:selected-snapshot debug-data)))))
        (doto (js/document.getElementById "snapshot-pause")
          (oset! :disabled disabled?)
          (oset! :hidden (some? selected-snapshot)))
        (doto (js/document.getElementById "snapshot-previous")
          (oset! :disabled (or disabled?
                               (and (some? selected-snapshot)
                                    (<= selected-snapshot 0)))))
        (doto (js/document.getElementById "snapshot-next")
          (oset! :disabled (or disabled?
                               (nil? (:selected-snapshot debug-data))
                               (>= selected-snapshot max)))))))

(defn update-ui [state]
  (go (<! (update-players state))
      (<! (update-countries state))
      (<! (update-status-panel state))
      (<! (update-debug-panel state))
      (resize-board)))


(defmulti reset-user-data :phase)

(defmethod reset-user-data ::teg/add-army [game]
  {:remaining (teg/get-extra-army game)
   :additions {}})

(defmethod reset-user-data ::teg/add-army-asia [_]
  {:remaining (b/get-continent-bonus ::b/asia)
   :continent ::b/asia
   :additions {}})

(defmethod reset-user-data ::teg/add-army-europa [_]
  {:remaining (b/get-continent-bonus ::b/europa)
   :continent ::b/europa
   :additions {}})

(defmethod reset-user-data ::teg/add-army-north-america [_]
  {:remaining (b/get-continent-bonus ::b/north-america)
   :continent ::b/north-america
   :additions {}})

(defmethod reset-user-data ::teg/add-army-south-america [_]
  {:remaining (b/get-continent-bonus ::b/south-america)
   :continent ::b/south-america
   :additions {}})

(defmethod reset-user-data ::teg/add-army-africa [_]
  {:remaining (b/get-continent-bonus ::b/africa)
   :continent ::b/africa
   :additions {}})

(defmethod reset-user-data ::teg/add-army-oceania [_]
  {:remaining (b/get-continent-bonus ::b/oceania)
   :continent ::b/oceania
   :additions {}})

(defmethod reset-user-data ::teg/attack [_]
  {:selected-country nil})

(defmethod reset-user-data ::teg/regroup [_]
  {:selected-country nil
   :regroups []})

(defmethod reset-user-data :default [_] {})

(defn maybe-reset-user-data
  [state 
   {old-turn :turn, old-phase :phase}
   {new-turn :turn, new-phase :phase, :as new-game}]
  (when-not (= [old-phase old-turn]
               [new-phase new-turn])
    (swap! state assoc-in [:ui :user-data]
           (reset-user-data new-game))))

(defn start-fireworks []
  (let [begin-time (js/Date.now)
        fireworks (-> (mm/make-morph :color "black"
                                     :alpha 0
                                     :width (oget world :width)
                                     :height (oget world :height))
                      (mm/appear 2 0.75))]
    (.addMorph world fireworks)
    (mm/on-step fireworks
                (fn []
                  (when (and (< (- (js/Date.now) begin-time) 5000)
                         (>= (oget fireworks :alpha) 0.15)
                             (< (rand) 0.15))
                    (let [x (rand (oget fireworks :width))
                          y (rand (oget fireworks :height))
                          amount (+ 150 (rand 300))
                          min 0
                          max (+ 200 (rand 400))]
                      (mm/fireworks world (clj->js {:x x :y y})
                                    :amount amount
                                    :min-magnitude min
                                    :max-magnitude max)))))
    (go (<! (a/timeout 6000))
        (mm/vanish fireworks 1))))

(defn maybe-show-forced-exchange-dialog
  [state
   {old-turn :turn, old-phase :phase}
   {new-turn :turn, new-phase :phase, :as new-game}]
  (when-not (teg/game-over? new-game)
    (when-not (= [old-phase old-turn]
                 [new-phase new-turn])
      (let [user (:user @state)]
        (when (and (is-my-turn? user new-game)
                   (isa? new-phase ::teg/add-army)
                   (>= (count (teg/get-player-cards new-game (get user :id)))
                       5))
          (exchange-cards! state :forced? true))))))

(defn maybe-show-secret-goal-dialog [state old-game new-game]
  (when-not (teg/game-over? new-game)
    (let [user-id (get (:user @state) :id)
          {secret-goal :name} (teg/get-player-goal new-game user-id)]
      (when (and secret-goal
                 (nil? (teg/get-player-goal old-game user-id)))
        (bs/alert "Objetivo secreto" secret-goal)))))

(:richo nil)


(defn maybe-show-game-over-dialog [state old-game new-game]
  (when (and (nil? (:winner old-game))
             (:winner new-game))
    (when (or true
              (= (get (:user @state) :id)
                 (:winner new-game)))
      (start-fireworks))
    (bs/alert "Fin del juego"
              (let [winner (:winner new-game)
                    winner-name (:name (teg/get-player new-game winner))
                    secret-goal (teg/get-player-goal new-game winner)]
                [:div.container
                 [:div.row [:h2
                            [:span "El ganador es "]
                            [:span.fw-bolder.text-nowrap winner-name]]]
                 [:div.row.m-2]
                 [:div.row [:h3
                            [:i.fas.fa-angle-right.me-2]
                            (if (and secret-goal ; Secret goal could be nil!
                                     (secret-goal :validator-fn) old-game new-game winner)
                              (secret-goal :name)
                              (if ((teg/common-goal :validator-fn) old-game new-game winner)
                                (teg/common-goal :name)
                                (secret-goal :name)))]]]))))

(defn maybe-show-turn-notification
  [state {old-turn :turn} {new-turn :turn, :as new-game}]
  (when-not (teg/game-over? new-game)
    (when-not (= old-turn new-turn)
      (when (nil? (-> @state :debug :selected-snapshot))
        (show-toast (if (is-my-turn? (:user @state) new-game)
                      "¡Es tu turno!"
                      (list [:span "Es el turno de "]
                            [:span.fw-bolder.text-nowrap
                             (teg/get-current-player-name new-game)])))))))

(defn maybe-show-phase-notification
  [state
   {old-turn :turn, old-phase :phase}
   {new-turn :turn, new-phase :phase, :as new-game}]
  (when-not (teg/game-over? new-game)
    (when-not (= [old-phase old-turn]
                 [new-phase new-turn])
      (when (and (is-my-turn? (:user @state) new-game)
                 (isa? new-phase ::teg/add-army-continent))
        (show-toast (u/format "Incorporar %1 ejércitos en %2"
                              (get-in @state [:ui :user-data :remaining])
                              (b/get-continent-name (get-in @state [:ui :user-data :continent]))))))))

(defn maybe-show-exchange-notification [state old-game new-game]
  (when-not (teg/game-over? new-game)
    (when-not (is-my-turn? (:user @state) new-game)
      (when (= (:turn old-game) (:turn new-game))
        (let [player-id (teg/get-current-player new-game)]
          (when (> (get-in new-game [:players player-id :exchanges])
                   (get-in old-game [:players player-id :exchanges]))
            (let [exchanges (get-in new-game [:players player-id :exchanges])]
              (if (<= exchanges 10)
                (show-toast (u/format "%1 realizó su %2 canje"
                                      (teg/get-current-player-name new-game)
                                      (nth ["primer" "segundo" "tercer" "cuarto" "quinto"
                                            "sexto" "séptimo" "octavo" "noveno" "décimo"]
                                           (dec exchanges))))
                (show-toast (u/format "%1 realizó su canje número %2"
                                      (teg/get-current-player-name new-game)
                                      exchanges))))))))))

(defn maybe-show-moving-army-effect [state old-game new-game]
  (when-not (teg/game-over? new-game)
    (doseq [country (keys b/countries)]
      (when-let [delta-army (- (teg/get-army new-game country)
                               (teg/get-army old-game country))]
        (when-not (zero? delta-army)
          (moved-army-effect state country delta-army))))))

(defn update-response-item!
  [model-name response header body select-response!]
  (if-let [error (:error response)]
    (do
      (doto header
        (oset! :innerText "")
        (.appendChild
         (crate/html [:div.d-flex.align-items-center.w-100
                      [:strong {:role "status"} model-name]
                      [:span.ms-auto.me-3.text-danger "ERROR"]])))
      (doto body
        (oset! :innerText
               (str (when-let [{:keys [errors]} (ex-data error)]
                      (str/join (keep (fn [error-msg]
                                        (when-not (str/blank? error-msg)
                                          (str error-msg "\n\n")))
                                      errors)))
                    (ex-message error)))))
    (do
      (doto header
        (oset! :innerText "")
        (.appendChild
         (crate/html [:div.d-flex.align-items-center.w-100
                      [:strong {:role "status"} model-name]
                      (let [score (* 100 (-> response :score :mean))
                            formatted-score (str (if (pos? score) "+" "")
                                                 (.toFixed score 2))
                            base-tag :span.ms-auto.me-3
                            tag (keyword (str (subs (str base-tag) 1)
                                              (cond
                                                (pos? score) ".text-success"
                                                (neg? score) ".text-danger"
                                                :else ".text-secondary")))]
                        [tag formatted-score])])))
      (doto body
        (oset! :innerText "")
        (oset! :style.max-height "500px")
        (oset! :style.overflow "scroll"))
      (doseq [[idx [prompt resp]] (->> (:conversation response)
                                       (partition-all 2)
                                       (map-indexed vector))]
        (doto body
          (.appendChild (crate/html
                         [:details
                          [:summary (str "Prompt #" (inc idx))]
                          [:p [:pre prompt]]]))
          (.appendChild (crate/html
                         [:details
                          [:summary (str "Response #" (inc idx))]
                          [:p [:pre resp]]]))))
      (doto body
        (.appendChild (crate/html
                       [:p.my-2
                        [:strong "Actions"]
                        (->> (:actions response)
                             (map (fn [action]
                                    [:pre (pp/write action :stream nil)])))]))
        (.appendChild (doto (crate/html [:button.btn.btn-primary "Aplicar"])
                        (bs/on-click #(select-response! response))))))))

(defn make-response-item! [idx model response-chan select-response!]
  (let [model-name (:display-name model)
        header (crate/html
                [:div.d-flex.align-items-center.w-100
                 [:strong {:role "status"} model-name]
                 [:div.spinner-border.spinner-border-sm.ms-auto.me-3]])
        body (crate/html
              [:div.accordion-body "Thinking..."])
        item
        [:div.accordion-item
         [:h2.accordion-header
          {:id (str "heading" idx)}
          [:button.accordion-button.collapsed
           {:type "button"
            :data-bs-toggle "collapse"
            :data-bs-target (str "#collapse" idx)
            :aria-expanded "false"
            :aria-controls (str "collapse" idx)}
           header]]
         [:div.accordion-collapse.collapse
          {:id (str "collapse" idx)
           :aria-labelledby (str "heading" idx)
           :data-bs-parent "#accordion"}
          body]]]
    (go ;; Wait for response async and update UI when it arrives
      (let [response (<? response-chan)]
        (update-response-item! model-name
                               response
                               header body
                               select-response!)))
    ;; Return item so that we can render it immediately
    item))

(defn show-ai-response-modal [responses]
  (let [selected-response (a/promise-chan)
        select-response! #(a/put! selected-response %)
        modal (-> (bs/make-modal
                   :header [:h5.font-monospace "Preguntando a la IA"]
                   :body [:div.container.overflow-hidden
                          [:div.row
                           [:div#accordion.accordion.font-monospace
                            (->> models
                                 (map-indexed
                                  (fn [i model]
                                    (when-let [response-chan (responses (:id model))]
                                      (make-response-item! i model
                                                           response-chan
                                                           select-response!))))
                                 (remove nil?))]]]))]
    (doto modal
      (js/makeDraggable)
      (bs/show-modal {:backdrop "static" :keyboard false}))
    (go ; Wait until the user chooses an option, then return
      (let [result (<? selected-response)]
        (bs/hide-modal modal)
        result))))

(defn try-update-ai! [state]
  (go
    (loop [turn-actions []]
      (let [responses (ai/ask! @state turn-actions)]
        (<! (a/timeout 1500)) ; Small delay before showing the modal
        (let [{:keys [original-state pass?
                      actions mutation]}
              (<? (show-ai-response-modal responses))]
          (if (= (:game @state)
                 (:game original-state))
            (if (nil? (-> @state :debug :selected-snapshot))
              (do (swap! state update :game mutation)
                  (when-not pass?
                    (recur (apply conj turn-actions actions))))
              (println "Game is paused! Ignoring AI response..."))
            (println "Different game! Ignoring AI response...")))))))

(defn on-state-change
  [state old new]
  (let [old-game (:game old)
        new-game (:game new)]
    ;; Append new snapshot
    (when (and (nil? (-> @state :debug :selected-snapshot))
               (not= [(:turn old-game) (:phase old-game)]
                     [(:turn new-game) (:phase new-game)])
               (not= new-game (-> @state :debug :snapshots peek)))
      (swap! state update-in [:debug :snapshots] conj new-game))
    ;; Update UI
    (when (or (not= old-game new-game)
              (not= (-> old :ui :user-data)
                    (-> new :ui :user-data))
              (not= (-> old :debug)
                    (-> new :debug)))
      (maybe-reset-user-data state old-game new-game)
      (maybe-show-forced-exchange-dialog state old-game new-game)
      (maybe-show-secret-goal-dialog state old-game new-game)
      (maybe-show-game-over-dialog state old-game new-game)
      (maybe-show-turn-notification state old-game new-game)
      (maybe-show-phase-notification state old-game new-game)
      (maybe-show-exchange-notification state old-game new-game)
      (maybe-show-moving-army-effect state old-game new-game)
      (update-ui state))
    ;; Maybe update AI
    (when (and (nil? (-> new :debug :selected-snapshot))
               (or (some? (-> old :debug :selected-snapshot))
                   (not= [(:turn old-game) (:phase old-game)]
                         [(:turn new-game) (:phase new-game)])))
      (when (str/starts-with?
             (str (teg/get-current-player new-game))
             ":ai")
        (try-update-ai! state)))))

(defn initialize [state]
  (go (.removeAllSubmorphs world)
      (init-debug-panel! state)
      (<! (init-map))
      (<! (init-countries state))
      (add-watch state :state-change
                 (fn [_ _ old new]
                   (on-state-change state old new)))
      (swap! state update :debug
             #(or % {:snapshots []
                     :selected-snapshot nil}))
      (on-state-change state {} @state) ; Force update now
      ))

(comment
  
  (inc nil)
  

  (def state teg-online.main/state)
  (-> @state :debug :selected-snapshot)

  (restart-from-current-snapshot! state)
  (update-debug-panel state)

  [(-> @state :debug :snapshots count)
   (-> @state :debug :selected-snapshot)]

  (tap> @state)
  )