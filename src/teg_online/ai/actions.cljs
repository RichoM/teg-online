(ns teg-online.ai.actions
  (:require [teg-online.game :as teg]
            [teg-online.board :as board]
            [teg-online.ai.scoring :as score]))

(defn get-valid-regroups [game]
  (let [player-id (teg/get-current-player game)
        player-countries (set (teg/player-countries game player-id))]
    (->> player-countries
         (filter (fn [country-id]
                   (> (teg/get-army game country-id) 1)))
         (mapcat (fn [country-id]
                   (->> (:neighbours (board/countries country-id))
                        (filter player-countries)
                        (map (fn [neighbour]
                               [country-id neighbour]))))))))

(defn get-valid-attacks [game]
  (let [player-id (teg/get-current-player game)
        player-countries (set (teg/player-countries game player-id))]
    (->> player-countries
         (filter (fn [country-id]
                   (> (teg/get-army game country-id) 1)))
         (mapcat (fn [country-id]
                   (->> (:neighbours (board/countries country-id))
                        (remove player-countries)
                        (map (fn [neighbour]
                               [country-id neighbour]))))))))


(defmulti apply-action :action)

(defmethod apply-action ::pass [_ game]
  (teg/finish-action game))

(defmethod apply-action ::add-army [{:keys [country units]} game]
  (when-not (> units 0)
    (throw (ex-info "Units should be more than zero"
                    {:game game, :country-id country :units units})))
  ;; TODO(Richo): This assertion should be in teg/add-army
  (teg/assert-country-owner game country (teg/get-current-player game))
  (teg/add-army game country units))

(defn valid-attack? [game attacker defender]
  (and (not= (teg/country-owner game attacker)
             (teg/country-owner game defender))
       (> (teg/get-army game attacker) 1)
       (= (teg/country-owner game attacker)
          (teg/get-current-player game))))

(defmethod apply-action ::attack [{:keys [attacker defender move]} game]
  (when-not (valid-attack? game attacker defender)
    (throw (ex-info "Invalid attack"
                    {:game game :attacker attacker :defender defender})))
  (let [[a-count d-count] (teg/get-dice-count game attacker defender)
        a-throw (sort > (repeatedly a-count (partial rand-int 6)))
        d-throw (sort > (repeatedly d-count (partial rand-int 6)))
        game (-> game
                 (teg/attack
                  [attacker a-throw]
                  [defender d-throw]))]
    (if (= 0 (teg/get-army game defender))
      (teg/invade game attacker defender
                  (min 3 move (dec (teg/get-army game attacker))))
      game)))

(defn valid-regroup? [game src dest]
  (and (= (teg/country-owner game src)
          (teg/country-owner game dest))
       (> (teg/get-army game src) 1)))

(defmethod apply-action ::regroup [{:keys [origin destination move]} game]
  (when-not (valid-regroup? game origin destination)
    (throw (ex-info "Invalid regroup"
                    {:game game :origin origin :destination destination})))
  (teg/regroup game origin destination
               (min move (dec (teg/get-army game origin)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def pass {:action ::pass})

(defn add-army 
  [& {:keys [country units]}]
  {:action ::add-army
   :country country
   :units units})

(defn attack
  [& {:keys [attacker defender move]}]
  {:action ::attack
   :attacker attacker
   :defender defender
   :move move})

(defn regroup
  [& {:keys [origin destination move]}]
  {:action ::regroup
   :origin origin
   :destination destination
   :move move})


(defn valid? [game action]
  (try
    (apply-action action game)
    true
    (catch :default error
      (println "Invalid action:" (ex-message error))
      false)))

(defn ensure-valid [game actions]
  ; TODO(Richo): Some game states cannot be passed! If we have an invalid action for
  ; add-army we fail with a pass when we should retry first!
  (let [valid-actions (->> actions
                           (filterv (partial valid? game))
                           (take-while #(not= pass %))
                           (vec))]
    (if (seq valid-actions)
      valid-actions
      [pass])))

(defn try-apply-action [game action]
  (try
    (apply-action action game)
    (catch :default err
      (println "ERROR trying to apply action:" err)
      game)))

(defn mean [coll]
  (/ (reduce + coll)
     (count coll)))

(defn calculate-score
  ([game mutation]
   (calculate-score game mutation
                    (if (isa? (teg/get-current-phase game)
                              ::teg/attack)
                      100
                      1)))
  ([game mutation times]
   (let [initial-scores (score/calculate-scores game)
         delta-scores
         (apply merge-with into
                (->> (repeatedly times #(mutation game))
                     (map score/calculate-scores)
                     (map (fn [scores]
                            (->> scores
                                 (map (fn [[player-id score]]
                                        (let [{:keys [absolute]}
                                              (initial-scores player-id)]
                                          [player-id (- (:absolute score)
                                                        absolute)])))
                                 (into {}))))
                     (map (fn [delta-scores]
                            (update-vals delta-scores
                                         vector)))))]
     (update-vals delta-scores mean))))

(defn make-mutation [actions]
  (fn [game]
    (reduce (fn [game action]
              (try-apply-action game action))
            game
            actions)))


(defmulti random-actions (fn [game _turn-actions] (:phase game)))

(defmethod random-actions ::teg/add-army [game turn-actions]
  (let [player-id (teg/get-current-player game)]
    (loop [actions []
           countries (set (teg/player-countries game player-id))
           remaining (- (teg/get-extra-army game)
                        (reduce + (map :units turn-actions)))]
      (if (<= remaining 0)
        (conj actions pass)
        (let [country (rand-nth (vec countries))
              units (inc (rand-int remaining))]
          (recur (conj actions (add-army
                                :country country
                                :units units))
                 (disj countries country)
                 (- remaining units)))))))

(defmethod random-actions ::teg/attack [game _]
  (let [valid-attacks (get-valid-attacks game)]
    (if (seq valid-attacks)
      (let [[attacker defender] (rand-nth valid-attacks)
            attacker-army (teg/get-army game attacker)
            move (inc (rand-int (min 3 (dec attacker-army))))]
        [(attack
          :attacker attacker
          :defender defender
          :move move)])
      [pass])))

(defmethod random-actions :default [_ _] [pass])



(comment

  (do
    (def game (-> @teg-online.main/state :game))
    (def player-id (teg/get-current-player game)))

  (:phase game)
  (def actions (random-actions game))

  (get-valid-attacks game)

  (do
    (def game (assoc-in {:players {:0c9ca105-f649-493f-b322-79e63d456308 {:id :0c9ca105-f649-493f-b322-79e63d456308, :goal nil, :name "Richo", :playing? true, :exchanges 0}, :ai-1 {:id :ai-1, :goal nil, :name "AI 1", :playing? true, :exchanges 0}, :ai-2 {:id :ai-2, :goal nil, :name "AI 2", :playing? true, :exchanges 0}}, :countries {:teg-online.board/rusia {:id :teg-online.board/rusia, :owner :ai-2, :army 1}, :teg-online.board/terranova {:id :teg-online.board/terranova, :owner :ai-2, :army 1}, :teg-online.board/gran-bretaña {:id :teg-online.board/gran-bretaña, :owner :ai-1, :army 1}, :teg-online.board/islandia {:id :teg-online.board/islandia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/borneo {:id :teg-online.board/borneo, :owner :ai-1, :army 1}, :teg-online.board/alemania {:id :teg-online.board/alemania, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 4}, :teg-online.board/italia {:id :teg-online.board/italia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/arabia {:id :teg-online.board/arabia, :owner :ai-2, :army 1}, :teg-online.board/aral {:id :teg-online.board/aral, :owner :ai-1, :army 1}, :teg-online.board/sudafrica {:id :teg-online.board/sudafrica, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/yukon {:id :teg-online.board/yukon, :owner :ai-2, :army 1}, :teg-online.board/australia {:id :teg-online.board/australia, :owner :ai-1, :army 5}, :teg-online.board/siberia {:id :teg-online.board/siberia, :owner :ai-2, :army 1}, :teg-online.board/colombia {:id :teg-online.board/colombia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/argentina {:id :teg-online.board/argentina, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/uruguay {:id :teg-online.board/uruguay, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/sumatra {:id :teg-online.board/sumatra, :owner :ai-1, :army 1}, :teg-online.board/israel {:id :teg-online.board/israel, :owner :ai-2, :army 1}, :teg-online.board/oregon {:id :teg-online.board/oregon, :owner :ai-2, :army 1}, :teg-online.board/japon {:id :teg-online.board/japon, :owner :ai-2, :army 1}, :teg-online.board/sahara {:id :teg-online.board/sahara, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/francia {:id :teg-online.board/francia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/mexico {:id :teg-online.board/mexico, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/turquia {:id :teg-online.board/turquia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 4}, :teg-online.board/groenlandia {:id :teg-online.board/groenlandia, :owner :ai-2, :army 24}, :teg-online.board/katchatka {:id :teg-online.board/katchatka, :owner :ai-2, :army 1}, :teg-online.board/egipto {:id :teg-online.board/egipto, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/iran {:id :teg-online.board/iran, :owner :ai-1, :army 1}, :teg-online.board/españa {:id :teg-online.board/españa, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/peru {:id :teg-online.board/peru, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/taimir {:id :teg-online.board/taimir, :owner :ai-2, :army 1}, :teg-online.board/brasil {:id :teg-online.board/brasil, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/tartaria {:id :teg-online.board/tartaria, :owner :ai-2, :army 1}, :teg-online.board/china {:id :teg-online.board/china, :owner :ai-1, :army 2}, :teg-online.board/polonia {:id :teg-online.board/polonia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 3}, :teg-online.board/mongolia {:id :teg-online.board/mongolia, :owner :ai-2, :army 1}, :teg-online.board/malasia {:id :teg-online.board/malasia, :owner :ai-1, :army 7}, :teg-online.board/suecia {:id :teg-online.board/suecia, :owner :ai-2, :army 1}, :teg-online.board/madagascar {:id :teg-online.board/madagascar, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/java {:id :teg-online.board/java, :owner :ai-1, :army 1}, :teg-online.board/california {:id :teg-online.board/california, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/labrador {:id :teg-online.board/labrador, :owner :ai-2, :army 1}, :teg-online.board/gobi {:id :teg-online.board/gobi, :owner :ai-2, :army 1}, :teg-online.board/nueva-york {:id :teg-online.board/nueva-york, :owner :ai-2, :army 1}, :teg-online.board/chile {:id :teg-online.board/chile, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 4}, :teg-online.board/zaire {:id :teg-online.board/zaire, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/india {:id :teg-online.board/india, :owner :ai-1, :army 4}, :teg-online.board/alaska {:id :teg-online.board/alaska, :owner :ai-2, :army 1}, :teg-online.board/etiopia {:id :teg-online.board/etiopia, :owner :0c9ca105-f649-493f-b322-79e63d456308, :army 1}, :teg-online.board/canada {:id :teg-online.board/canada, :owner :ai-2, :army 1}}, :cards {:teg-online.board/rusia {:country :teg-online.board/rusia, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/terranova {:country :teg-online.board/terranova, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/gran-bretaña {:country :teg-online.board/gran-bretaña, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/islandia {:country :teg-online.board/islandia, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/borneo {:country :teg-online.board/borneo, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/alemania {:country :teg-online.board/alemania, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/italia {:country :teg-online.board/italia, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/arabia {:country :teg-online.board/arabia, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/aral {:country :teg-online.board/aral, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/sudafrica {:country :teg-online.board/sudafrica, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/yukon {:country :teg-online.board/yukon, :type :teg-online.board/balloon, :owner :0c9ca105-f649-493f-b322-79e63d456308, :used? false}, :teg-online.board/australia {:country :teg-online.board/australia, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/siberia {:country :teg-online.board/siberia, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/colombia {:country :teg-online.board/colombia, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/argentina {:country :teg-online.board/argentina, :type :teg-online.board/all, :owner nil, :used? false}, :teg-online.board/uruguay {:country :teg-online.board/uruguay, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/sumatra {:country :teg-online.board/sumatra, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/israel {:country :teg-online.board/israel, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/oregon {:country :teg-online.board/oregon, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/japon {:country :teg-online.board/japon, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/sahara {:country :teg-online.board/sahara, :type :teg-online.board/cannon, :owner :0c9ca105-f649-493f-b322-79e63d456308, :used? true}, :teg-online.board/francia {:country :teg-online.board/francia, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/mexico {:country :teg-online.board/mexico, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/turquia {:country :teg-online.board/turquia, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/groenlandia {:country :teg-online.board/groenlandia, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/katchatka {:country :teg-online.board/katchatka, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/egipto {:country :teg-online.board/egipto, :type :teg-online.board/balloon, :owner :0c9ca105-f649-493f-b322-79e63d456308, :used? true}, :teg-online.board/iran {:country :teg-online.board/iran, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/españa {:country :teg-online.board/españa, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/peru {:country :teg-online.board/peru, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/taimir {:country :teg-online.board/taimir, :type :teg-online.board/all, :owner nil, :used? false}, :teg-online.board/brasil {:country :teg-online.board/brasil, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/tartaria {:country :teg-online.board/tartaria, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/china {:country :teg-online.board/china, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/polonia {:country :teg-online.board/polonia, :type :teg-online.board/cannon, :owner :0c9ca105-f649-493f-b322-79e63d456308, :used? true}, :teg-online.board/mongolia {:country :teg-online.board/mongolia, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/malasia {:country :teg-online.board/malasia, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/suecia {:country :teg-online.board/suecia, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/madagascar {:country :teg-online.board/madagascar, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/java {:country :teg-online.board/java, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/california {:country :teg-online.board/california, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/labrador {:country :teg-online.board/labrador, :type :teg-online.board/cannon, :owner nil, :used? false}, :teg-online.board/gobi {:country :teg-online.board/gobi, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/nueva-york {:country :teg-online.board/nueva-york, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/chile {:country :teg-online.board/chile, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/zaire {:country :teg-online.board/zaire, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/india {:country :teg-online.board/india, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/alaska {:country :teg-online.board/alaska, :type :teg-online.board/ship, :owner nil, :used? false}, :teg-online.board/etiopia {:country :teg-online.board/etiopia, :type :teg-online.board/balloon, :owner nil, :used? false}, :teg-online.board/canada {:country :teg-online.board/canada, :type :teg-online.board/cannon, :owner nil, :used? false}}, :turn-order [:0c9ca105-f649-493f-b322-79e63d456308 :ai-1 :ai-2], :phase :teg-online.game/attack, :turn 26, :winner nil, :current-turn {:draw-card? false, :extra-army 9}}
                        [:countries ::board/groenlandia :army] 12))
    (def player-id (teg/get-current-player game)))
  
  (tap> game)

  ()
  
  (time (->> (repeatedly #(random-actions game))
             (map (fn [actions]
                    (let [mutation (make-mutation actions)
                          score (calculate-score game mutation 1)]
                      {:actions actions
                       :score (* 100 (-> score player-id))
                       :fscore (.toFixed (* 100 (-> score player-id))
                                         3)})))
             (take 100)
             (sort-by :score >)
             (first)))

  (->> (repeatedly #(random-actions game []))
       (take 100)
       (sort-by (fn [actions]
                  (let [mutation (make-mutation actions)
                        score (calculate-score game mutation)]
                    (-> score player-id)))
                >)
       (first))

  (tap> *1)

  (rand-nth (teg/player-countries game player-id))


  (sort (set (take 1000 (repeatedly #(inc (rand-int 10))))))
  )