(ns teg-online.main
  (:require [clojure.core.async :as a :refer [go <!]]
            [clojure.string :as str]
            [oops.core :refer [oget oget+ oset!]]
            [crate.core :as crate]
            [teg-online.utils.bootstrap :as bs]
            [teg-online.firebase :as fb]
            [teg-online.game :as teg]
            [teg-online.board :as b]
            [teg-online.ui :as ui]
            [teg-online.ai.client :as ai-client]))

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
  (ai-client/initialize state)
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

  
  (swap! state assoc :selected-snapshot nil)

  (count (:history @state))
  (tap> state)
  (tap> board/countries)



  (def game (:game @state))
  (def players (:players game))

  (teg/get-dice-count (:game @state) ::b/alemania ::b/alaska)

  (go (println (<! (show-main-menu))))

  (do
    (bs/hide-modals)
    (swap! state assoc :game
           (-> (teg/new-game)
               (teg/join-game :p1 "Richo")
               (teg/join-game :p2 "Lechu")
               (teg/join-game :p3 "Diego")
               (teg/distribute-countries (sort (keys b/countries)))
               (teg/distribute-goals)
               (teg/start-game))))

  (map (fn [player-id]
         (let [{:keys [name goal]} (teg/get-player @game-atom player-id)]
           [name goal (:name (teg/get-player-goal @game-atom player-id))]))
       (@game-atom :turn-order))

  (teg/get-player-goal @game-atom :p3)


  (doseq [[i c] (map-indexed vector (teg/player-countries @game-atom (last (@game-atom :turn-order))))]
    (swap! game-atom assoc-in [:countries c :owner] (if (odd? i)
                                                      (first (@game-atom :turn-order))
                                                      (second (@game-atom :turn-order)))))

  (swap! game-atom assoc :phase ::teg/add-army-europa)

  (doseq [country (-> (b/get-countries-by-continent ::b/europa)
                      (disj ::b/rusia))]
    (swap! game-atom assoc-in [:countries country :owner] :p1))

  (doseq [country (b/get-countries-by-continent ::b/africa)]
    (swap! game-atom assoc-in [:countries country :owner] :p1))

  (swap! game-atom assoc-in [:countries ::b/argentina :owner] :p1)


  (require '[cognitect.transit :as t])

  (def writer (t/writer :json))


  (tap> @game-atom)
  (def game-transit (t/write writer @game-atom))

  (def reader (t/reader :json))

  (/ (count game-transit)
     (count (js/JSON.stringify @game-atom)))
  (tap> (t/read reader game-transit))

  )