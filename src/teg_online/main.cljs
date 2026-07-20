(ns teg-online.main
  (:require [clojure.core.async :as a :refer [go <!]]
            [clojure.string :as str]
            [oops.core :refer [oget oget+ oset!]]
            [crate.core :as crate]
            [teg-online.utils.bootstrap :as bs]
            [teg-online.firebase :as fb]
            [teg-online.game :as teg]
            [teg-online.board :as b]
            [teg-online.ui :as ui]))

(enable-console-print!)

(defonce state (atom {:game (teg/new-game)
                      :user nil
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

(defn initialize-ai [state]
  (swap! state update :game
         (fn [game]
           (let [{user-id :id, user-name :name} (:user @state)]
             (-> game
                 (teg/join-game user-id user-name)
                 (teg/join-game :ai-1 "AI 1")
                 (teg/join-game :ai-2 "AI 2")
                 ;(teg/join-game :ai-3 "AI 3")
                 ;(teg/join-game :ai-4 "AI 4")
                 teg/start-game
                 teg/distribute-goals
                 teg/distribute-countries)))))

(defn init []
  (go
    (print "HELLO")
    (ui/initialize state)
    (swap! state assoc :user (<! (get-this-user)))
    (initialize-ai state)
    (print "BYE")))


(defn ^:dev/before-load-async reload-begin* [done]
  (go (fb/disconnect!)
      (done)))

(defn ^:dev/after-load-async reload-end* [done]
  (go (<! (ui/initialize state))
      (done)))

(comment
  @state

  ()

  
  )