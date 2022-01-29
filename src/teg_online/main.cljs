(ns teg-online.main
  (:require [teg-online.game :as teg]
            [teg-online.utils.async :as a]))

(defn init []
  (print "RICHO!"))


(comment
  (def world (js/World. (js/document.querySelector "#board")))
  (def board (js/Morph.))
  (.addMorph world board)

   
  )