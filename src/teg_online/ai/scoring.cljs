(ns teg-online.ai.scoring
  (:require [teg-online.game :as teg]
            [teg-online.board :as b]
            [clojure.set :as set]))

(defn connected-countries [game country]
  (let [frontier #js [country]]
    (loop [reached #{country}]
      (if (empty? frontier)
        reached
        (let [current (.shift frontier)
              owner (-> game :countries current :owner)
              neighbours (->> (-> b/countries current :neighbours)
                              (filter #(= owner (-> game :countries % :owner)))
                              (set))]
        
          (doseq [neigbour neighbours]
            (when-not (reached neigbour)
              (.push frontier neigbour)))
          (recur (set/union reached neighbours)))))))

(defn player-empires [game player-id]
  (loop [empires []
         [country & rest] (teg/player-countries game player-id)]
    (if country
      (let [empire (connected-countries game country)]
        (recur (conj empires empire) 
               (remove empire rest)))
      empires)))

(defn in-conflict? [game country]
  (let [owner (-> game :countries country :owner)]
    (boolean
     (some (fn [neighbour]
             (not= owner (-> game :countries neighbour :owner)))
           (-> b/countries country :neighbours)))))

(defn split-active [game empire]
  (let [conflicts (group-by (partial in-conflict? game)
                            empire)]
    [(conflicts true)
     (conflicts false)]))

(defn count-army [game countries]
  (->> countries
       (map (:countries game))
       (map :army)
       (reduce +)))

(defn empire-score [game empire]
  (let [[active-countries inactive-countries] (split-active game empire)
        active-armies (count-army game active-countries)
        inactive-armies (count-army game inactive-countries)
        isolated-by-continent (->> inactive-countries
                                   (group-by #(-> b/countries % :continent))
                                   (vals)
                                   (map count))]
    (+ (* (+ active-armies
             (* 0.75 inactive-armies))
          (count empire))
       (reduce * isolated-by-continent))))

(defn player-absolute-score [game player-id]
  (->> (player-empires game player-id)
       (map (partial empire-score game))
       (reduce +)))

(defn calculate-scores [game]
  (let [absolute-scores (->> (:turn-order game)
                    (mapv (partial player-absolute-score game)))
        total-score (reduce + absolute-scores)]
    (zipmap (:turn-order game)
            (->> absolute-scores
                 (map (fn [absolute-score]
                        {:absolute absolute-score
                         :normalized (/ absolute-score total-score)}))))))

(comment

  (do
    (def game (-> @teg-online.main/state :game))
    (def player-id (teg/get-current-player game)))

  (tap> game)

  (swap! teg-online.main/state assoc :game {:players {:0c9ca105-f649-493f-b322-79e63d456308 {:id :0c9ca105-f649-493f-b322-79e63d456308, :goal nil, :name "Richo", :playing? true, :exchanges 0}, :ai-1 {:id :ai-1, :goal nil, :name "AI 1", :playing? true, :exchanges 0}, :ai-2 {:id :ai-2, :goal nil, :name "AI 2", :playing? true, :exchanges 0}}, :countries {:teg-online.board/rusia {:id :teg-online.board/rusia, :owner :ai-2, :army 1}, :teg-online.board/terranova {:id :teg-online.board/terranova, :owner :ai-2, :army 1}, :teg-online.board/gran-bretaña {:id :teg-online.board/gran-bretaña, :owner :ai-1, :army 1}, :teg-online.board/islandia {:id :teg-online.board/islandia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/borneo {:id :teg-online.board/borneo, :owner :ai-1, :army 1}, :teg-online.board/alemania {:id :teg-online.board/alemania, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 4}, :teg-online.board/italia {:id :teg-online.board/italia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/arabia {:id :teg-online.board/arabia, :owner :ai-2, :army 1}, :teg-online.board/aral {:id :teg-online.board/aral, :owner :ai-1, :army 1}, :teg-online.board/sudafrica {:id :teg-online.board/sudafrica, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/yukon {:id :teg-online.board/yukon, :owner :ai-2, :army 1}, :teg-online.board/australia {:id :teg-online.board/australia, :owner :ai-1, :army 5}, :teg-online.board/siberia {:id :teg-online.board/siberia, :owner :ai-2, :army 1}, :teg-online.board/colombia {:id :teg-online.board/colombia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/argentina {:id :teg-online.board/argentina, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/uruguay {:id :teg-online.board/uruguay, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/sumatra {:id :teg-online.board/sumatra, :owner :ai-1, :army 1}, :teg-online.board/israel {:id :teg-online.board/israel, :owner :ai-2, :army 1}, :teg-online.board/oregon {:id :teg-online.board/oregon, :owner :ai-2, :army 1}, :teg-online.board/japon {:id :teg-online.board/japon, :owner :ai-2, :army 1}, :teg-online.board/sahara {:id :teg-online.board/sahara, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/francia {:id :teg-online.board/francia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/mexico {:id :teg-online.board/mexico, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/turquia {:id :teg-online.board/turquia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 4}, :teg-online.board/groenlandia {:id :teg-online.board/groenlandia, :owner :ai-2, :army 12}, :teg-online.board/katchatka {:id :teg-online.board/katchatka, :owner :ai-2, :army 1}, :teg-online.board/egipto {:id :teg-online.board/egipto, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/iran {:id :teg-online.board/iran, :owner :ai-1, :army 1}, :teg-online.board/españa {:id :teg-online.board/españa, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/peru {:id :teg-online.board/peru, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/taimir {:id :teg-online.board/taimir, :owner :ai-2, :army 1}, :teg-online.board/brasil {:id :teg-online.board/brasil, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/tartaria {:id :teg-online.board/tartaria, :owner :ai-2, :army 1}, :teg-online.board/china {:id :teg-online.board/china, :owner :ai-1, :army 2}, :teg-online.board/polonia {:id :teg-online.board/polonia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 3}, :teg-online.board/mongolia {:id :teg-online.board/mongolia, :owner :ai-2, :army 1}, :teg-online.board/malasia {:id :teg-online.board/malasia, :owner :ai-1, :army 7}, :teg-online.board/suecia {:id :teg-online.board/suecia, :owner :ai-2, :army 1}, :teg-online.board/madagascar {:id :teg-online.board/madagascar, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/java {:id :teg-online.board/java, :owner :ai-1, :army 1}, :teg-online.board/california {:id :teg-online.board/california, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/labrador {:id :teg-online.board/labrador, :owner :ai-2, :army 1}, :teg-online.board/gobi {:id :teg-online.board/gobi, :owner :ai-2, :army 1}, :teg-online.board/nueva-york {:id :teg-online.board/nueva-york, :owner :ai-2, :army 1}, :teg-online.board/chile {:id :teg-online.board/chile, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 4}, :teg-online.board/zaire {:id :teg-online.board/zaire, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/india {:id :teg-online.board/india, :owner :ai-1, :army 4}, :teg-online.board/alaska {:id :teg-online.board/alaska, :owner :ai-2, :army 1}, :teg-online.board/etiopia {:id :teg-online.board/etiopia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/canada {:id :teg-online.board/canada, :owner :ai-2, :army 1}}, :cards {:teg-online.board/rusia {:country :teg-online.board/rusia, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/terranova {:country :teg-online.board/terranova, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/gran-bretaña {:country :teg-online.board/gran-bretaña, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/islandia {:country :teg-online.board/islandia, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/borneo {:country :teg-online.board/borneo, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/alemania {:country :teg-online.board/alemania, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/italia {:country :teg-online.board/italia, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/arabia {:country :teg-online.board/arabia, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/aral {:country :teg-online.board/aral, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/sudafrica {:country :teg-online.board/sudafrica, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/yukon {:country :teg-online.board/yukon, :type :teg-online.board/balloon, :owner :0c9ca105-f649-493f-b322-79e63d456308, :used? false}, :teg-online.board/australia {:country :teg-online.board/australia, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/siberia {:country :teg-online.board/siberia, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/colombia {:country :teg-online.board/colombia, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/argentina {:country :teg-online.board/argentina, :type :teg-online.board/all, :owner nil, :used? false}, :teg-online.board/uruguay {:country :teg-online.board/uruguay, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/sumatra {:country :teg-online.board/sumatra, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/israel {:country :teg-online.board/israel, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/oregon {:country :teg-online.board/oregon, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/japon {:country :teg-online.board/japon, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/sahara {:country :teg-online.board/sahara, :type :teg-online.board/cannon, :owner :0c9ca105-f649-493f-b322-79e63d456308, :used? true}, :teg-online.board/francia {:country :teg-online.board/francia, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/mexico {:country :teg-online.board/mexico, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/turquia {:country :teg-online.board/turquia, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/groenlandia {:country :teg-online.board/groenlandia, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/katchatka {:country :teg-online.board/katchatka, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/egipto {:country :teg-online.board/egipto, :type :teg-online.board/balloon, :owner :0c9ca105-f649-493f-b322-79e63d456308, :used? true}, :teg-online.board/iran {:country :teg-online.board/iran, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/españa {:country :teg-online.board/españa, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/peru {:country :teg-online.board/peru, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/taimir {:country :teg-online.board/taimir, :type :teg-online.board/all, :owner nil, :used? false}, :teg-online.board/brasil {:country :teg-online.board/brasil, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/tartaria {:country :teg-online.board/tartaria, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/china {:country :teg-online.board/china, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/polonia {:country :teg-online.board/polonia, :type :teg-online.board/cannon, :owner :0c9ca105-f649-493f-b322-79e63d456308, :used? true}, :teg-online.board/mongolia {:country :teg-online.board/mongolia, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/malasia {:country :teg-online.board/malasia, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/suecia {:country :teg-online.board/suecia, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/madagascar {:country :teg-online.board/madagascar, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/java {:country :teg-online.board/java, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/california {:country :teg-online.board/california, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/labrador {:country :teg-online.board/labrador, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/gobi {:country :teg-online.board/gobi, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/nueva-york {:country :teg-online.board/nueva-york, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/chile {:country :teg-online.board/chile, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/zaire {:country :teg-online.board/zaire, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/india {:country :teg-online.board/india, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/alaska {:country :teg-online.board/alaska, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/etiopia {:country :teg-online.board/etiopia, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/canada {:country :teg-online.board/canada, :type :teg-online.board/cannon, :owner nil, :used? false}}, :turn-order [:0c9ca105-f649-493f-b322-79e63d456308 :ai-1 :ai-2], :phase :teg-online.game/attack, :turn 26, :winner nil, :current-turn {:draw-card? false, :extra-army 9}})

  (player-empires game :ai-1)
  (tap> *1)
  (calculate-scores game)
  )