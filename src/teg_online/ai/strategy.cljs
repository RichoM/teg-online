(ns teg-online.ai.strategy
  (:require [teg-online.game :as teg]
            [teg-online.board :as board]
            [teg-online.ai.response :as r]
            [teg-online.ai.attack-prob :refer [calculate-win-chance]]
            [clojure.string :as str]))

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

(def board-geography
  (str "El tablero de TEG está dividido en 6 continentes.\n"
       "Cada continente tiene una cantidad variable de países y cada país limita con países vecinos.\n"
       "Conquistar todos los países de un mismo continente te permite acceder a una bonificación de ejércitos extra en cada turno.\n"
       "A continuación, te dejo la lista de continentes con sus respectivas bonificaciones y países:\n\n"
       (->> (vals board/countries)
            (group-by :continent)
            (sort-by (comp count second) >)
            (map-indexed (fn [idx [continent-id countries]]
                   (let [continent (board/continents continent-id)]
                     (str (inc idx) ". "
                          (:name continent) " (bonificación: " (:bonus continent) " ejércitos extra)\n"
                          (->> countries
                               (map (fn [{:keys [name neighbours]}]
                                      (str "   - " name " (vecinos: "
                                           (->> neighbours
                                                (map (comp :name board/countries))
                                                (str/join ", "))
                                           ")")))
                               (str/join "\n"))))))
            (str/join "\n\n"))))

(defn get-board-state [{:keys [countries turn-order]}]
  (let [countries-by-player (->> countries
                                 (map second)
                                 (group-by :owner))]
    (->> (map-indexed vector turn-order)
         (map (fn [[idx player-id]]
                (let [player-name (str "Jugador " (inc idx))

                      player-countries (countries-by-player player-id)]
                  (str "\n" player-name ":\n"
                       (->> player-countries
                            (map (fn [{:keys [id army]}]
                                   (str "- " (-> board/countries id :name) ": "
                                        army " " (if (= 1 army) "ejército" "ejércitos"))))
                            (str/join "\n"))))))
         (str/join "\n"))))


(defmulti game-phase-prompt (fn [game _turn-actions]
                              (:phase game)))

(defmethod game-phase-prompt ::teg/add-army [game turn-actions]
  (let [remaining (- (teg/get-extra-army game)
           (reduce + (map :units turn-actions)))]
    (when (> remaining 0)
      (str "Es tu turno de incorporar ejércitos. Tenés "
           remaining " ejércitos para incorporar.\n"
           "Tus opciones son:\n"
           (str/join "\n"
                     (map (fn [country-id]
                            (str "- " (-> board/countries country-id :name)))
                          (teg/player-countries game (teg/get-current-player game))))))))

(defmethod game-phase-prompt ::teg/add-army-continent [game turn-actions]
  (let [continent (case (:phase game)
                    ::teg/add-army-africa ::board/africa
                    ::teg/add-army-asia ::board/asia
                    ::teg/add-army-europa ::board/europa
                    ::teg/add-army-north-america ::board/north-america
                    ::teg/add-army-oceania ::board/oceania
                    ::teg/add-army-south-america ::board/south-america)
        remaining (- (board/get-continent-bonus continent)
                     (reduce + (map :units turn-actions)))]
    (when (> remaining 0)
      (str "Es tu turno de incorporar ejércitos en "
           (board/get-continent-name continent) ". Tenés "
           remaining " ejércitos para incorporar.\n"))))

(defn country-name [country-id]
  (-> board/countries country-id :name))

(defn format-options [options]
  (str/join "\n" (->> options
                      (map (fn [[country-a country-b]]
                             (str "* "
                                  (country-name country-a)
                                  " -> "
                                  (country-name country-b )))))))

(defmethod game-phase-prompt ::teg/attack [game turn-actions]
  (when-let [options (seq (get-valid-attacks game))]
    (str "Es tu turno de atacar. En caso de que quieras atacar, tenés que decidir qué país querés atacar, cuántos ejércitos estás dispuesto a perder, y cuántos ejércitos moverías al país destino (en caso de ganar el ataque).\n"
         "Tus opciones son:\n"
         (str/join "\n" (->> options
                             (map (fn [[country-a country-b]]
                                    (str "* "
                                         (country-name country-a)
                                         " -> "
                                         (country-name country-b)
                                         " ("
                                         (calculate-win-chance
                                          (teg/get-army game country-a)
                                          (teg/get-army game country-b))
                                         "% probabilidad de éxito)"))))))))

(defmethod game-phase-prompt ::teg/regroup [game turn-actions]
  (when-let [options (seq (get-valid-regroups game))]
    (str "Es tu turno de reagrupar. En caso de que quieras reagrupar, tenés que decidir de qué países a qué países vas a mover tus tropas y cuántos ejércitos en cada país.\n"
         "Tus opciones son:\n"
         (format-options options)
         )))

(defn turn-actions-prompt [actions]
  (if (seq actions)
    (str "En este turno ya realizaste las siguientes acciones:\n"
         (str/join "\n"
                   (map-indexed
                    (fn [idx action]
                      (str (inc idx) ". "
                           (case (:action action)
                             ::r/add-army (str "Agregaste " (:units action)
                                               " ejércitos a " (country-name (:country action)))
                             ::r/attack (str "Atacaste desde " (country-name (:attacker action))
                                             " a " (country-name (:defender action)))
                             ::r/regroup (str "Reagrupaste " (:move action) " ejércitos desde "
                                              (country-name (:origin action)) " a "
                                              (country-name (:destination action))))))
                    actions))
         "\n\n")
    ""))


(defn strategy-prompt 
  [{:keys [players turn phase] :as game} turn-actions]
  (when-let [current-player (teg/get-current-player game)]
    (when-let [phase-prompt (game-phase-prompt game turn-actions)]
      (let [turn-actions-prompt (turn-actions-prompt turn-actions)
            goal (teg/get-player-goal game current-player)]
        (println)
        (println turn phase)
        (str "Estás jugando una partida de T.E.G. (Plan Táctico y Estratégico de la Guerra).\n"
             "Vos sos el jugador " (inc (mod turn (count players))) ".\n"
             "Tu objetivo secreto es: " (:name goal) ".\n"
             board-geography
             "\n\n"
             "El estado del tablero en este momento de la partida es el siguiente.\n"
             (get-board-state game) "\n\n"
             turn-actions-prompt
             phase-prompt
             "Teniendo en cuenta el estado actual del tablero y los objetivos a mediano plazo, describí *brevemente* qué harías a continuación y por qué.\n\n"
             "Consideraciones importantes:\n"
             "1. Si lo que vas a hacer es _incorporar o reagrupar ejércitos_, tené en cuenta los ejércitos de países enemigos y los posibles ataques que podrías recibir.\n"
             "2. Si lo que vas a hacer es _atacar_, tené en cuenta que los ataques fallidos pueden dejar el país desprotegido para el próximo turno.\n"
             "3. No estás obligado a _atacar_ siempre, a veces es preferible preservar las fuerzas para el futuro.")))))

(defmulti action-prompt (fn [game _strat] (:phase game)))

(defmethod action-prompt ::teg/add-army [game strat]
  (str "Estás jugando una partida de T.E.G. (Plan Táctico y Estratégico de la Guerra).\n"
       "Necesito que resumas la siguiente estrategia en una acción concreta.\n"
       "Estrategia:\n" strat "\n\n"
       "Tené en cuenta que es tu turno de incorporar ejércitos. Decime en qué países deberías incorporarlos en base a la estrategia mencionada previamente.\n"
       "Respondé sólo con la lista de países y la cantidad de ejércitos separadas por coma (una línea por país)"))

(defmethod action-prompt ::teg/attack [game strat]
  (str "Estás jugando una partida de T.E.G. (Plan Táctico y Estratégico de la Guerra).\n"
       "Necesito que resumas la siguiente estrategia en una acción concreta.\n"
       "Estrategia:\n" strat "\n\n"
       "Tené en cuenta que es tu turno de atacar. En base a la estrategia mencionada previamente, decime si conviene atacar o no.\n"
       "En caso de que convenga atacar, respondé con el país atacante, el país defensor, la cantidad de ejércitos a sacrificar, y la cantidad de ejércitos a mover, separadas por coma (una línea).\n"
       "Ejemplos:\n"
       "Rusia,Polonia,3,2\n"
       "Argentina,Uruguay,1,1\n"
       "\n"
       "En caso de que convenga NO atacar en este turno, respondé sólo con la palabra: paso"))

(defmethod action-prompt ::teg/regroup [game strat]
  (str "Estás jugando una partida de T.E.G. (Plan Táctico y Estratégico de la Guerra).\n"
       "Necesito que resumas la siguiente estrategia en una acción concreta.\n"
       "Estrategia:\n" strat "\n\n"
       "Tené en cuenta que es tu turno de reagrupar ejércitos. En base a la estrategia mencionada previamente, decime si conviene reagrupar o no.\n"
       "En caso de que convenga reagrupar, respondé con la lista de países origen, destino, y la cantidad de ejércitos separadas por coma (una línea por cada par de países).\n"
       "Por ejemplo:\n"
       "Rusia,Polonia,3\n"
       "India,China,1\n"
       "\n"
       "En caso de que convenga NO reagrupar en este turno, respondé sólo con la palabra: paso"))

(comment
  (require '[teg-online.main :refer [game-atom user-atom]])

  (-> board/countries ::board/alaska :name)
  

  (tap> *1)
  (board/continents)
  board/continents
  (tap> board/countries)
  (tap> @game-atom)
  (def game @game-atom)

  (teg/get-army game ::board/alemania)

  (teg/get-current-player game)


  )