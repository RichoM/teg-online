(ns teg-online.ai.prompt
  (:require [teg-online.game :as teg]
            [teg-online.board :as board]
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


(defmulti game-phase-prompt :phase)

(defmethod game-phase-prompt ::teg/add-army [game]
  (str "Es tu turno de incorporar ejércitos. Tenés "
       (teg/get-extra-army game) " ejércitos para incorporar.\n"
       "Decime en qué países querés incorporarlos y cuántos ejércitos en cada país.\n"
       "Respondé sólo con la lista de países y la cantidad de ejércitos separadas por coma (una línea por país)"))

(defmethod game-phase-prompt ::teg/add-army-continent [game]
  (let [continent (case (:phase game)
                    ::teg/add-army-africa ::board/africa
                    ::teg/add-army-asia ::board/asia
                    ::teg/add-army-europa ::board/europa
                    ::teg/add-army-north-america ::board/north-america
                    ::teg/add-army-oceania ::board/oceania
                    ::teg/add-army-south-america ::board/south-america)]
    (str "Es tu turno de incorporar ejércitos en "
         (board/get-continent-name continent) ". Tenés "
         (board/get-continent-bonus continent) " ejércitos para incorporar.\n"
         "Decime en qué países querés incorporarlos y cuántos ejércitos en cada país.\n"
         "Respondé sólo con la lista de países y la cantidad de ejércitos separadas por coma (una línea por país)")))

(defn format-options [options]
  (str/join "\n" (->> options
                      (map (fn [[country-a country-b]]
                             (str "* "
                                  (-> board/countries country-a :name)
                                  " -> "
                                  (-> board/countries country-b :name)))))))

(defmethod game-phase-prompt ::teg/attack [game]
  (when-let [options (seq (get-valid-attacks game))]
    (str "Es tu turno de atacar. Decime qué países querés atacar, cuántos ejércitos estás dispuesto a perder en cada ataque, y cuántos ejércitos moverías al país destino (en caso de ganar el ataque).\n"
         "Tus opciones son:\n"
         (format-options options)
         "\n\n"
         "Respondé sólo con la lista de países, la cantidad de ejércitos a sacrificar, y la cantidad de ejércitos a mover, separadas por coma (una línea por país).\n"
         "Por ejemplo:\n"
         "Rusia,Polonia,3,2\n"
         "India,China,1,1\n"
         "\n"
         "Si preferís no hacer nada en este turno, respondé con la palabra: paso")))

(defmethod game-phase-prompt ::teg/regroup [game]
  (when-let [options (seq (get-valid-regroups game))]
    (str "Es tu turno de reagrupar. Decimé de qué países a qué países vas a mover tus tropas y cuántos ejércitos en cada país.\n"
         "Tus opciones son:\n"
         (format-options options)
         "\n\n"
         "Respondé sólo con la lista de países origen, destino, y la cantidad de ejércitos separadas por coma (una línea por cada par de países).\n"
         "Por ejemplo:\n"
         "Rusia,Polonia,3\n"
         "India,China,1\n"
         "\n"
         "Si preferís no hacer nada en este turno, respondé con la palabra: paso")))


(defn make-prompt [{:keys [players turn phase] :as game}]
  (when-let [current-player (teg/get-current-player game)]
    (when-let [phase-prompt (game-phase-prompt game)]
      (let [goal (teg/get-player-goal game current-player)]
        (println)
        (println turn phase)
        (str "Estás jugando una partida de T.E.G. (Plan Táctico y Estratégico de la Guerra).\n"
             "Vos sos el jugador " (inc (mod turn (count players))) ".\n"
             "Tu objetivo secreto es: " (:name goal) ".\n"
             "El estado del tablero es el siguiente.\n"
             (get-board-state game) "\n\n"
             phase-prompt)))))

(comment
  (require '[teg-online.main :refer [game-atom user-atom]])
  
  (tap> @game-atom)
  (def game @game-atom)

  (teg/get-current-player game)
  
  (println (make-prompt game))
  
  )