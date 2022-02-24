(ns teg-online.main
  (:require [clojure.core.async :as a :refer [go <!]]
            [clojure.string :as str]
            [oops.core :refer [oget oget+ oset!]]
            [teg-online.utils.bootstrap :as bs]
            [teg-online.firebase :as fb]
            [teg-online.game :as teg]
            [teg-online.ui :as ui]))

(defonce game (atom (teg/new-game)))
(defonce this-user (atom nil))

(defn ask-user-name []
  (go (let [user-name (str/trim (or (<! (bs/prompt "User name:" "")) ""))]
        (if-not (empty? user-name)
          user-name
          (<! (ask-user-name))))))

(defn get-this-user []
  (go (if-let [this-user (oget js/localStorage "?teg-online\\.this-user")]
        (js->clj (js/JSON.parse this-user))
        (let [user-name (<! (ask-user-name))
              this-user {:id (str (random-uuid))
                         :name user-name}]
          (oset! js/localStorage "!teg-online\\.this-user"
                 (js/JSON.stringify (clj->js this-user)))
          this-user))))

(defn init []
  (go
    (fb/initialize game)
    (ui/initialize game)
    (reset! this-user (<! (get-this-user)))))

(defn ^:dev/before-load-async reload-begin* [done]
  (go (<! (ui/terminate))
      (fb/terminate)
      (done)))

(defn ^:dev/after-load-async reload-end* [done]
  (go (fb/initialize game)
      (<! (ui/initialize game))
      (done)))

(comment
  (def game @game)

  (do
    (reset! game (teg/new-game))
    (swap! game teg/join-game :p1 "Richo")
    (swap! game teg/join-game :p2 "Lechu")
    (swap! game teg/join-game :p3 "Diego")
    (swap! game teg/distribute-countries)
    (swap! game teg/start-game)
    (swap! game teg/add-army :teg-online.board/argentina 4)
    (swap! game teg/add-army :teg-online.board/chile 4)    
    (swap! game assoc-in [:countries :teg-online.board/argentina :owner] :p1)
    (swap! game assoc-in [:countries :teg-online.board/chile :owner] :p2)
    (swap! game teg/next-phase ::teg/attack))

  (reset! game (teg/new-game))
  (swap! game teg/join-game :p1 "Richo")
  (swap! game teg/join-game :p2 "Lechu")
  (swap! game teg/join-game :p3 "Diego")
  (swap! game teg/distribute-countries)
  (swap! game teg/add-army :teg-online.board/chile 1)
  

  (swap! game update-in [:turn] inc)
  (swap! game update-in [:players :p1 :name] (constantly "Un nombre mucho muy muuuuy largo"))

  (ui/update-ui @game)
  (get-in @game [:players :p1 :army])

  (get-in @game [:countries :teg-online.board/alaska :owner])
  (swap! game assoc-in [:countries :teg-online.board/siberia :owner] :p1)

  (swap! game assoc-in [:phase] ::teg/regroup)

  (teg/get-current-player @game)

  (fb/save-doc! "games_dev" "prueba_4" @game)

  (key->js ::richo str)

  (js->clj (clj->js {:a ::richo}
                    :keyword-fn str)
           :keywordize-keys true)
  


  (def changes (fb/on-snapshot "games_dev" "prueba_4"))
  (go (loop []
        (when-some [data (<! changes)]
          (print data)
          (recur))))
  

  (def foo (atom 0))

  (add-watch foo :c (fn [_ _ _ v] 
                      (print v)
                      (swap! foo inc)))
  (swap! foo inc)
  )