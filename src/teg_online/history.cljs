(ns teg-online.history)

(defonce history (atom []))

(defn initialize [game-atom]
  (add-watch game-atom ::history-update
             (fn [_ _ _ state]
               (swap! history conj state))))

(comment
  
  (tap> history)
  
  )