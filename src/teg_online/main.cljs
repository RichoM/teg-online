(ns teg-online.main
  (:require [clojure.core.async :as a :refer [go <!]]
            [clojure.string :as str]
            [oops.core :refer [oget oget+ oset! ocall!]]
            [crate.core :as crate]
            [teg-online.utils.bootstrap :as bs]
            [teg-online.firebase :as fb]
            [teg-online.game :as teg]
            [teg-online.board :as b]
            [teg-online.ui :as ui]
            [teg-online.ai.models :refer [models]]))

(enable-console-print!)

(defonce state (atom {:game (teg/new-game)
                      :game-id nil}))

(defn ask-user-name []
  (go (let [user-name (str/trim (or (<! (bs/prompt "Nombre de usuario:" "")) ""))]
        (if-not (empty? user-name)
          user-name
          (<! (ask-user-name))))))

(defn get-this-user []
  (go (if-let [this-user (oget js/localStorage "?teg-online\\.this-user")]
        (update (js->clj (js/JSON.parse this-user)
                 :keywordize-keys true)
                :id keyword)
        (let [user-name (<! (ask-user-name))
              this-user {:id (keyword (str (random-uuid)))
                         :name user-name}]
          (oset! js/localStorage "!teg-online\\.this-user"
                 (js/JSON.stringify (clj->js this-user)))
          this-user))))

(defn show-main-menu []
  (go (let [action (atom nil)
            new-game-btn (crate/html [:button.btn.btn-primary.btn-lg
                                      {:type "button" :data-bs-dismiss "modal"}
                                      "Crear partida"])
            join-game-btn (crate/html [:button.btn.btn-secondary.btn-lg
                                       {:type "button" :data-bs-dismiss "modal"}
                                       "Entrar a partida existente"])
            modal (bs/make-modal
                   :body [:div.container-fluid
                          [:div.row new-game-btn]
                          [:div.row.m-1]
                          [:div.row join-game-btn]])]
        (bs/on-click new-game-btn #(reset! action :new-game))
        (bs/on-click join-game-btn #(reset! action :join-game))
        (<! (bs/show-modal modal
                           {:backdrop "static"
                            :keyboard false}))
        @action)))

(comment
  
  (def s {:game 1})
  (def a (atom {:game 1}))
  (swap! a update :game inc)
  
  )

(defn try-to-join [state]
  (let [{:keys [game user]} @state
        {user-id :id, user-name :name} user]
    (when-not (contains? (game :players) user-id)
      (swap! state update :game 
             teg/join-game user-id user-name))))

(defn show-waiting-dialog [state]
  (go (let [{:keys [user game game-id]} @state
            host? (= (:id user)
                     (:id (first (teg/get-players game))))
            start-game-btn (crate/html [:button.btn.btn-primary.btn-lg
                                        {:type "button" :data-bs-dismiss "modal"}
                                        "Iniciar partida"])
            player-list (crate/html [:ol.list-group])
            modal (bs/make-modal
                   :body [:div.container-fluid
                          [:div.row.text-center [:h2
                                                 [:span "Código de la partida: "]
                                                 [:span.fw-bolder.text-nowrap
                                                  {:style "user-select: all;"}
                                                  [:a {:href (oget js/location :href)}
                                                   (str game-id)]]]]
                          [:div.row.m-2]
                          [:div.row.text-center [:h3 "Esperando jugadores..."]]
                          [:div.row.fs-3
                           [:div.col player-list]]
                          (when host? [:div.row.mt-3 start-game-btn])])
            update-modal (fn [game]
                           (oset! start-game-btn :disabled (<= (count (game :players)) 1))
                           (oset! player-list :innerHTML "")
                           (doseq [[idx {:keys [name]}] (map-indexed vector (teg/get-players game))]
                             (.appendChild player-list
                                           (crate/html [:li.list-group-item (inc idx) ". " name])))
                           (when (teg/game-started? game)
                             (bs/hide-modal modal)))]
        (add-watch state ::waiting-for-players
                   (fn [_ _ _ {:keys [game]}]
                     (update-modal game)
                     ;; HACK(Richo): We try to join again just in case some other player got there first...
                     (try-to-join state)))
        (update-modal (:game @state))
        (bs/on-click start-game-btn
                     #(swap! state update :game
                             (comp teg/start-game
                                   teg/distribute-goals
                                   teg/distribute-countries)))
        (<! (bs/show-modal modal
                           {:backdrop "static"
                            :keyboard false}))
        (remove-watch state ::waiting-for-players))))

(defn show-new-game-dialog []
  (go (let [get-form-data (fn [form]
                            (let [regex #"elements\[(\d+)\]\[(\w+)\]"]
                              (->> (js->clj (js/Object.fromEntries (js/FormData. form)))
                                   (map (fn [[key val]]
                                          (let [[_ index key] (re-matches regex key)]
                                            {:index (int index)
                                             :key (keyword key)
                                             :value val}))))))

            get-players (fn [form]
                          (->> (get-form-data form)
                               (group-by :index)
                               (map (fn [[_ values]]
                                      (merge (->> values
                                                  (map (fn [{:keys [key value]}]
                                                         [key value]))
                                                  (into {})))))
                               (mapv (fn [{:keys [name type]}]
                                       {:name name
                                        :type (keyword type)}))))

            make-element!
            (fn [idx]
              (let [input (crate/html
                           [:input.form-control.form-control-lg.text-center
                            {:type "text" :name (str "elements[" idx "][name]")
                             :value (str "Jugador " (inc idx))
                             :required true}])

                    row (crate/html
                         [:tr
                          [:td
                           input]
                          [:td.text-center
                           [:select.form-select.form-select-lg.text-center
                            {:name (str "elements[" idx "][type]")}
                            [:option {:value "human"} "human"]
                            (->> models
                                 (map (fn [{:keys [id display-name]}]
                                        [:option {:value (subs (str id) 1)} display-name])))
                            [:option {:value "debug"} "all (debug)"]]]
                          [:td.text-center
                           [:button.btn.btn-lg.btn-outline-danger {:type "button"}
                            [:i.fas.fa-trash]]]])]
                (doto input
                  (.addEventListener
                   "keyup" #(if (.checkValidity input)
                              (ocall! input :classList.remove "is-invalid")
                              (ocall! input :classList.add "is-invalid"))))
                (doto (.querySelector row "button")
                  (bs/on-click #(.remove row)))
                row))

            add-player-btn (crate/html
                            [:button.btn.btn-secondary.btn-lg
                             {:type "button" :aria-label "Agregar jugador"}
                             "Agregar jugador"])

            start-game-btn (crate/html
                            [:button.btn.btn-primary.btn-lg
                             {:type "button" :aria-label "Iniciar partida"}
                             "Iniciar partida!"])

            form (crate/html [:form.container.needs-validation
                              {:novalidate true}
                              [:div.row
                               [:table.table.table-borderless.text-center
                                [:thead
                                 [:tr
                                  [:th.text-center "Nombre"]
                                  [:th.text-center "Tipo"]
                                  [:th.text-center]]]
                                [:tbody]]]
                              [:div.row.justify-content-center
                               [:div.col-auto add-player-btn]
                               [:div.col-auto start-game-btn]]])
            add-player! (fn []
                          (let [tbody (.querySelector form "tbody")
                                idx (.-length (.querySelectorAll tbody "tr"))
                                row (make-element! idx)]
                            (.appendChild tbody row)))
            modal (bs/make-modal
                   :body [:div.container-fluid.font-monospace
                          form])]
        (doto add-player-btn
          (bs/on-click #(let [tbody (.querySelector form "tbody")
                              indices (->> (get-form-data form)
                                           (map :index)
                                           (set))]
                          (when (< (count indices) 8)
                            (let [idx (apply max indices)
                                  row (make-element! (if idx (inc idx) 0))]
                              (.appendChild tbody row))))))
        (doto start-game-btn
          (bs/on-click #(when (and (.checkValidity form)
                                   (<= 2 (count (get-players form)) 8))
                          (bs/hide-modal modal))))
        (dotimes [_ 4]
          (add-player!))
        (<! (bs/show-modal modal {:backdrop "static"
                                  :keyboard false}))
        (get-players form))))

(defn start-game! [state players]
  (swap! state update :game
         (fn [game]
           (-> (reduce (fn [game {:keys [name type]}]
                         (teg/join-game game (keyword (str (random-uuid)))
                                        name type))
                       game
                       players)
               teg/start-game
               teg/distribute-goals
               teg/distribute-countries))))

(defn init []
  (go
    (print "HELLO")
    (ui/initialize state)
    ;(swap! state assoc :user (<! (get-this-user)))
    (start-game! state (<! (show-new-game-dialog)))
    (print "BYE")))


(defn ^:dev/before-load-async reload-begin* [done]
  (go (fb/disconnect!)
      (done)))

(defn ^:dev/after-load-async reload-end* [done]
  (go (<! (ui/initialize state))
      (done)))

(comment
  @state


  (def game (-> @state :game))
  
  (def player (-> game :turn-order first))
  (tap> game)

  (b/continents ::b/africa)
  (b/get-countries-by-continent ::b/africa)
  
  (reduce (fn [game country]
            (assoc-in game [:countries country :owner] player))
          game
          (b/get-countries-by-continent ::b/africa))
  (tap> *1)

  
  (swap! state update :game #(reduce (fn [game country]
                                       (assoc-in game [:countries country :owner] player))
                                     %
                                     (b/get-countries-by-continent ::b/africa)))
  
  (swap! state update :game
         #(-> %
              (assoc-in [:countries ::b/españa :army] 3)
              (assoc-in [:countries ::b/polonia :army] 2)
              (assoc-in [:countries ::b/turquia :army] 2)
              (assoc-in [:countries ::b/israel :army] 3)))

  (swap! state update :game
         #(-> %
              (assoc-in [:countries ::b/sahara :army] 3)
              (assoc-in [:countries ::b/egipto :army] 5)))
  
  (swap! state update :game
         #(-> %
              (assoc-in [:countries ::b/sahara :army] 1)
              (assoc-in [:countries ::b/egipto :army] 1)
              (assoc-in [:countries ::b/sudafrica :army] 4)
              (assoc-in [:countries ::b/zaire :army] 2)
              (assoc-in [:countries ::b/etiopia :army] 2)
              (assoc-in [:countries ::b/madagascar :army] 3)))

  )