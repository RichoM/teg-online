(ns teg-online.ai.attack-prob
  (:require [clojure.core.async :as a :refer [go <!]]
            [teg-online.utils.async :refer [<? go-try]]
            [teg-online.utils.fs :as fs]
            [clojure.string :as str]))

(defonce !chances (atom nil))

(def MAX_IDX 99)

(defn initialize-chances []
  (go
    (try
      (let [file-data (<? (fs/read-file "teg.txt"))
            chances (->> file-data
                         (str/split-lines)
                         (mapv #(->> (str/split % #"\s+")
                                     (remove str/blank?)
                                     (mapv parse-double))))]
        (reset! !chances chances))
      (catch :default err
        (println "ERROR calculating attack chances!" err)))))

(defn calculate-win-chance [attacker-armies defender-armies]
  (let [attacker-idx (min (- attacker-armies 2) MAX_IDX)
        defender-idx (min (- defender-armies 1) MAX_IDX)]
    (cond
      (< attacker-idx 0) 0.0
      (< defender-idx 0) 100.0
      :else
      (get-in @!chances [attacker-idx defender-idx]))))

(comment
  
  (go-try (<? (initialize-chances)))

  (go-try (println (<? (fs/read-file "shadow-cljs.edn"))))

  (calculate-win-chance 5 2)
  @!chances
  
  
  )