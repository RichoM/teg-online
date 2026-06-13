(ns teg-online.history
  (:refer-clojure :exclude [count empty?]))

(defonce history (atom []))

(defn initialize [game-atom]
  (add-watch game-atom ::history-update
             (fn [_ _ _ state]
               (swap! history conj state))))

(defn count []
  (clojure.core/count @history))

(defn empty? []
  (clojure.core/empty? @history))


(comment
  
  (tap> history)
  
  )