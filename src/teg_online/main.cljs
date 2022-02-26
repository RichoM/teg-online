(ns teg-online.main
  (:require [clojure.core.async :as a :refer [go <!]]
            [clojure.string :as str]
            [oops.core :refer [oget oget+ oset!]]
            [crate.core :as crate]
            [teg-online.utils.bootstrap :as bs]
            [teg-online.firebase :as fb]
            [teg-online.game :as teg]
            [teg-online.ui :as ui]))

(defonce game-atom (atom (teg/new-game)))
(defonce game-id (atom nil))
(defonce user-atom (atom nil))

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

(defn show-waiting-dialog []
  (go (let [host? (= (:id @user-atom)
                     (:id (first (teg/get-players @game-atom))))
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
                                                   (str @game-id)]]]]
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
        (add-watch game-atom ::waiting-for-players
                   (fn [_ _ _ game]
                     (update-modal game)))
        (update-modal @game-atom)
        (bs/on-click start-game-btn 
                     #(swap! game-atom (comp teg/distribute-countries teg/start-game)))
        (<! (bs/show-modal modal
                           {:backdrop "static"
                            :keyboard false}))
        (remove-watch game-atom ::waiting-for-players))))

(defn initialize-network []
  (go (let [hash (subs (or (oget js/location :?hash) "") 1)
            action (if (empty? hash)
                     (<! (show-main-menu))
                     :hash-game)
            doc-id (reset! game-id
                           (case action
                             :new-game (do (-> (bs/make-modal
                                                :body [:div.container
                                                       [:div.row.text-center [:h3 "Creando partida..."]]
                                                       [:div.row.m-1]
                                                       [:div.row.text-center [:i.fas.fa-circle-notch.fa-spin.fa-4x]]])
                                               (bs/show-modal {:backdrop "static"
                                                               :keyboard false}))
                                           (<! (fb/create-game!)))
                             :join-game (<! (bs/prompt "Código:" ""))
                             :hash-game hash))]
        (if (<! (fb/connect! doc-id game-atom))
          (do (oset! js/location :!hash doc-id)
              (let [game @game-atom
                    {user-id :id, user-name :name} @user-atom]
                (when-not (teg/game-started? game)
                  (when-not (contains? (game :players) user-id)
                    (swap! game-atom teg/join-game user-id user-name))
                  (<! (show-waiting-dialog)))))
          (do (<! (bs/alert "ERROR" 
                            (list [:span "La partida "]
                                  [:span.fw-bolder.text-nowrap doc-id]
                                  [:span " NO existe"])))
              (oset! js/location :hash "")
              (<! (initialize-network)))))))

(defn init []
  (go
    (print "HELLO")
    (ui/initialize game-atom user-atom)
    (reset! user-atom (<! (get-this-user)))
    (<! (initialize-network))
    (print "BYE")))


(defn ^:dev/before-load-async reload-begin* [done]
  (go (<! (ui/terminate))
      (fb/disconnect!)
      (done)))

(defn ^:dev/after-load-async reload-end* [done]
  (go (when-let [id @game-id]
        (fb/connect! id game-atom))
      (<! (ui/initialize game-atom user-atom))
      (done)))

(comment
  @game-id
  @user-atom

  (go (print (<! (show-main-menu))))

  (do
    (bs/hide-modals)
    (reset! game-atom (teg/new-game))
    (swap! game-atom teg/join-game :p1 "Richo")
    (swap! game-atom teg/join-game :p2 "Lechu")
    (swap! game-atom teg/join-game :p3 "Diego")
    (swap! game-atom teg/distribute-countries)
    (swap! game-atom teg/start-game)
    (swap! game-atom teg/add-army :teg-online.board/argentina 4)
    (swap! game-atom teg/add-army :teg-online.board/chile 4)
    (swap! game-atom assoc-in [:countries :teg-online.board/argentina :owner] :p1)
    (swap! game-atom assoc-in [:countries :teg-online.board/chile :owner] :p2)
    (swap! game-atom teg/next-phase ::teg/attack))

  (swap! game-atom update-in [:turn] inc)
  (swap! game-atom update-in [:players :p1 :name] (constantly "Un nombre mucho muy muuuuy largo"))

  (ui/update-ui @game-atom)
  (get-in @game-atom [:players :p1 :army])

  (get-in @game-atom [:countries :teg-online.board/alaska :owner])
  (swap! game-atom assoc-in [:countries :teg-online.board/sahara :owner]
         (teg/get-current-player @game-atom))


  (let [game @game-atom
        winner (second (@game-atom :turn-order))
        loser (first (@game-atom :turn-order))]
    (doseq [country (keys teg-online.board/countries)]
      (when (= loser (teg/country-owner game country))
        (swap! game-atom assoc-in [:countries country :owner] winner))))

  (swap! game-atom assoc-in [:phase] ::teg/regroup)

  (teg/get-current-player @game-atom)
  )