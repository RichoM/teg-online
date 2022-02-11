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


(defn on-click [element callback]
  (doto element (.addEventListener "click" callback)))

(defn on-enter [element callback]
  (doto element
    (.addEventListener "keypress"
                       (fn [evt]
                         (let [keycode (or (.-keyCode evt)
                                           (.-which evt))]
                           (when (= 13 keycode)
                             (callback)
                             (.hide (js/bootstrap.Modal.getInstance element))))))))

(defn on-shown [element callback]
  (doto element (.addEventListener "shown.bs.modal" callback)))

(defn on-hidden [element callback]
  (doto element (.addEventListener "hidden.bs.modal" callback)))

(defn show [& {:keys [header body footer]}]
  (hide)
  (let [container (find-container)
        html-modal (crate/html (make-modal header body footer))
        bs-modal (js/bootstrap.Modal. html-modal)
        ready-chan (a/chan)
        current {:modal bs-modal
                 :ready ready-chan}]
    (reset! current-modal current)
    (.appendChild container html-modal)
    (.show bs-modal)
    (doto html-modal
      (on-shown #(a/close! ready-chan))
      (on-hidden #(do (.remove html-modal)
                      (compare-and-set! current-modal current nil))))))

(defn alert [title message]
  (let [result (a/chan)
        html-modal (show :header (list [:h4
                                        [:i.fas.fa-exclamation-circle] 
                                        [:span.ms-2 title]]
                                       close-button)
                         :body [:h5 message]
                         :footer accept-button)]
    (doto html-modal
      (on-enter (constantly :nop))
      (on-hidden #(a/close! result)))
    result))

(defn confirm [title message]
  (let [result (a/promise-chan)
        value (atom false)
        yes-btn (on-click (crate/html accept-button)
                          #(reset! value true))
        no-btn (on-click (crate/html cancel-button)
                         #(reset! value false))
        html-modal (show :header (list [:h4
                                        [:i.fas.fa-question-circle]
                                        [:span.ms-2 title]]
                                       close-button)
                         :body [:h5 message]
                         :footer (list yes-btn no-btn))]
    (doto html-modal
      (on-enter #(reset! value true))
      (on-hidden #(a/put! result @value)))
    result))

(defn prompt [title message default]
  (let [result (a/promise-chan)
        value (atom nil)
        input (crate/html [:input.form-control {:type "text" :value default}])
        yes-btn (on-click (crate/html accept-button)
                          #(reset! value (.-value input)))
        no-btn (on-click (crate/html cancel-button)
                         #(reset! value nil))
        html-modal (show :header (list [:h4
                                        [:i.fas.fa-question-circle]
                                        [:span.ms-2 title]]
                                       close-button)
                         :body [:div.container-fluid
                                [:div.row [:h5 message]]
                                [:div.row input]]
                         :footer (list yes-btn no-btn))]
    (doto html-modal
      (on-enter #(reset! value (.-value input)))
      (on-hidden #(if-let [val @value]
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