(ns teg-online.utils.modals
  (:require [clojure.core.async :as a :refer [go go-loop <! timeout]]
            [crate.core :as crate]))

(defonce current-modal (atom nil))

(defn make-modal [header body footer]
  [:div.modal.fade {:tabindex -1 :role "dialog"}
   [:div.modal-dialog.modal-dialog-centered.modal-lg {:role "document"}
    [:div.modal-content
     (when header [:div.modal-header header])
     (when body [:div.modal-body body])
     (when footer [:div.modal-footer footer])]]])

(def close-button
  [:button.btn-close {:type "button" :data-bs-dismiss "modal" :aria-label "Close"}])

(defn hide []
  (when-let [{:keys [modal ready]} @current-modal]
    (reset! current-modal nil)
    (a/take! ready #(.hide modal) true)))

(defn find-container []
  (or
   (js/document.querySelector "#modal-dialogs")
   js/document.body))

(defn show [& {:keys [header body footer]}]
  (hide)
  (let [container (find-container)
        html-modal (crate/html (make-modal header body footer))
        bs-modal (js/bootstrap.Modal. html-modal)
        ready-chan (a/chan)
        current {:modal bs-modal
                 :ready ready-chan}]
    (reset! current-modal current)
    (doto html-modal
      (.addEventListener "shown.bs.modal"
                         #(a/close! ready-chan))
      (.addEventListener "hidden.bs.modal"
                         #(do (.remove html-modal)
                              (compare-and-set! current-modal current nil))))
    (.appendChild container html-modal)
    (.show bs-modal)
    html-modal))

(comment
  (hide)

  (show :header (list [:h1 "Título"] close-button)
        :body [:h1 "Richo capo"]
        :footer [:button.btn.btn-primary.btn-lg {:type "button" :data-bs-dismiss "modal"} "Aceptar"])

  @current-modal

  (loop [i 10]
    (when (> i 0)
      (show :body [:h1 "Richo capo"])
      (recur (dec i))))
  
  (print "testing modals")
  )