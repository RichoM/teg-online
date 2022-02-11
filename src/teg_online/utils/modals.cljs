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

(def accept-button
  [:button.btn.btn-primary.btn-lg {:type "button" :data-bs-dismiss "modal"} "Aceptar"])

(def cancel-button
  [:button.btn.btn-secondary.btn-lg {:type "button" :data-bs-dismiss "modal"} "Cancelar"])

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

(defn alert [title message]
  (let [result (a/chan)
        html-modal (show :header (list [:h4
                                        [:i.fas.fa-exclamation-circle] 
                                        [:span.ms-2 title]]
                                       close-button)
                         :body [:h5 message]
                         :footer accept-button)]
    (doto html-modal
      (.addEventListener "keypress"
                         (fn [evt]
                           (let [keycode (or (.-keyCode evt)
                                             (.-which evt))]
                             (when (= 13 keycode)
                               (.hide (js/bootstrap.Modal.getInstance html-modal))))))
      (.addEventListener "hidden.bs.modal"
                         #(a/close! result)))
    result))

(defn confirm [title message]
  (let [result (a/promise-chan)
        value (atom false)
        yes-btn (doto (crate/html accept-button)
                  (.addEventListener "click"
                                     #(reset! value true)))
        no-btn (doto (crate/html cancel-button)
                 (.addEventListener "click"
                                    #(reset! value false)))
        html-modal (show :header (list [:h4
                                        [:i.fas.fa-question-circle]
                                        [:span.ms-2 title]]
                                       close-button)
                         :body [:h5 message]
                         :footer (list yes-btn no-btn))]
    (doto html-modal
      (.addEventListener "keypress"
                         (fn [evt]
                           (let [keycode (or (.-keyCode evt)
                                             (.-which evt))]
                             (when (= 13 keycode)
                               (reset! value true)
                               (.hide (js/bootstrap.Modal.getInstance html-modal))))))
      (.addEventListener "hidden.bs.modal"
                         #(a/put! result @value)))
    result))

(defn prompt [title message default]
  (let [result (a/promise-chan)
        value (atom nil)
        input (crate/html [:input.form-control {:type "text" :value default}])
        yes-btn (doto (crate/html accept-button)
                  (.addEventListener "click"
                                     #(reset! value (.-value input))))
        no-btn (doto (crate/html cancel-button)
                 (.addEventListener "click"
                                    #(reset! value nil)))
        html-modal (show :header (list [:h4
                                        [:i.fas.fa-question-circle]
                                        [:span.ms-2 title]]
                                       close-button)
                         :body [:div.container-fluid
                                [:div.row [:h5 message]]
                                [:div.row input]]
                         :footer (list yes-btn no-btn))]
    (doto html-modal
      (.addEventListener "keypress"
                         (fn [evt]
                           (let [keycode (or (.-keyCode evt)
                                             (.-which evt))]
                             (when (= 13 keycode)
                               (reset! value (.-value input))
                               (.hide (js/bootstrap.Modal.getInstance html-modal))))))
      (.addEventListener "hidden.bs.modal"
                         #(if-let [val @value]
                            (a/put! result val)
                            (a/close! result))))
    result))

(comment

  (go (print "1")
      (if-let [result (<! (prompt "Ingresá tu nombre" "Nombre:" nil))]
        (print "Nombre ingresado correctamente" result)
        (print "Anónimo?")))
  
  (def input (crate/html [:input.form-control {:type "text" :value "RICHO"}]))
  (.-value input)

  (go (print "A")
      (<! (alert "Woooooooo" "Este es un mensaje del más allá..."))
      (print "B"))

  (go (print "A")
      (if (<! (confirm "Cuidado!" "Estás seguro?"))
        (print "SÏ!")
        (print "NONONO")))
  (def title "TEST")
  (def message "Este es un mensaje")
  (hide)

  (show :header (list [:h1 "Título"] close-button)
        :body [:h1 "Richo capo"]
        :footer [:button.btn.btn-primary.btn-lg {:type "button" :data-bs-dismiss "modal"} "Aceptar"])


  (show :header (list [:h1 "Título"] close-button)
        :body [:h1 "Richo capo"]
        :footer (doto (crate/html
                       [:button.btn.btn-primary.btn-lg
                        {:type "button" :data-bs-dismiss "modal"}
                        "Aceptar"])
                  (.addEventListener "click"
                                     #(print (js/Date.now)))))


  @current-modal

  (loop [i 10]
    (when (> i 0)
      (show :body [:h1 "Richo capo"])
      (recur (dec i))))

  (print "testing modals")

  (crate/html [:div (crate/html [:h1 "Richo capo"])])
  (seqable? (crate/html [:div]))
  )