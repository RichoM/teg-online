(ns teg-online.utils.bootstrap
  (:require [clojure.core.async :as a :refer [go <!]]
            [crate.core :as crate]))

(defn find-container [selector]
  (or
   (js/document.querySelector selector)
   js/document.body))

(defn on-click [element callback]
  (doto element (.addEventListener "click" callback)))

(defn on-keypress [element keycode callback]
  (doto element
    (.addEventListener "keypress"
                       (fn [evt]
                         (let [kc (or (.-keyCode evt)
                                      (.-which evt))]
                           (when (= kc keycode)
                             (callback)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Modals
(defonce current-modal (atom nil))

(defn make-modal [& {:keys [header body footer]}]
  (crate/html [:div.modal.fade {:tabindex -1 :role "dialog"}
               [:div.modal-dialog.modal-dialog-centered.modal-lg {:role "document"}
                [:div.modal-content
                 (when header [:div.modal-header header])
                 (when body [:div.modal-body body])
                 (when footer [:div.modal-footer footer])]]]))

(def close-modal-btn
  [:button.btn-close {:type "button" :data-bs-dismiss "modal" :aria-label "Close"}])

(def accept-modal-btn
  [:button.btn.btn-primary.btn-lg {:type "button" :data-bs-dismiss "modal" :aria-label "Accept"} "Aceptar"])

(def cancel-modal-btn
  [:button.btn.btn-secondary.btn-lg {:type "button" :data-bs-dismiss "modal" :aria-label "Cancel"} "Cancelar"])

(defn hide-modals []
  (when-let [{:keys [modal ready]} @current-modal]
    (reset! current-modal nil)
    (a/take! ready #(.hide modal) true)))

(defn hide-modal [modal]
  (when-let [bs-modal (js/bootstrap.Modal.getInstance modal)]
    (.hide bs-modal)))

(defn on-modal-keypress-enter [modal callback]
  (on-keypress modal 13
               #(do (callback modal)
                    (hide-modal modal))))

(defn on-modal-shown [modal callback]
  (doto modal (.addEventListener "shown.bs.modal" (partial callback modal))))

(defn on-modal-hidden [modal callback]
  (doto modal (.addEventListener "hidden.bs.modal" (partial callback modal))))

(defn show-modal
  ([modal] (show-modal modal {}))
  ([modal options]
   (hide-modals)
   (let [result (a/chan)
         container (find-container "#modal-dialogs")
         html-modal modal
         bs-modal (js/bootstrap.Modal. html-modal (clj->js options))
         ready-chan (a/chan)
         current {:modal bs-modal
                  :ready ready-chan}]
     (reset! current-modal current)
     (.appendChild container html-modal)
     (.show bs-modal)
     (doto html-modal
       (on-modal-shown #(a/close! ready-chan))
       (on-modal-hidden #(do (.remove html-modal)
                             (compare-and-set! current-modal current nil)
                             (a/close! result))))
     result)))

(defn alert [title & message]
  (-> (make-modal :header (list [:h2
                                 [:i.fas.fa-exclamation-circle]
                                 [:span.ms-2 title]]
                                close-modal-btn)
                  :body (when message [:h3 message])
                  :footer accept-modal-btn)
      (on-modal-keypress-enter hide-modal)
      show-modal))

(comment
  (go (print "HOLA")
      (<! (alert "CUIDADO!" "Hombre radioactivo!"))
      (print "CHAU"))
  )

(defn confirm [title & message]
  (go (let [result (atom false)
            yes-btn (on-click (crate/html accept-modal-btn)
                              #(reset! result true))
            no-btn (on-click (crate/html cancel-modal-btn)
                             #(reset! result false))]
        (<! (-> (make-modal :header (list [:h2
                                           [:i.fas.fa-question-circle]
                                           [:span.ms-2 title]]
                                          close-modal-btn)
                            :body (when message [:h3 message])
                            :footer (list yes-btn no-btn))
                (on-modal-keypress-enter (fn [modal]
                                           (reset! result true)
                                           (hide-modal modal)))
                show-modal))
        @result)))

(comment
  (go (print "HOLA")
      (if (<! (confirm "English?" "Yes or NO"))
        (print "BYE")
        (print "CHAU")))
  )
 
(defn prompt [title message & [default]]
  (go (let [result (atom nil)
            input (crate/html [:input.form-control {:type "text" :value default}])
            yes-btn (on-click (crate/html accept-modal-btn)
                              #(reset! result (.-value input)))
            no-btn (on-click (crate/html cancel-modal-btn)
                             #(reset! result nil))]
        (<! (-> (make-modal :header (list [:h2
                                           [:i.fas.fa-question-circle]
                                           [:span.ms-2 title]]
                                          close-modal-btn)
                            :body [:div.container-fluid
                                   [:div.row [:h3 message]]
                                   [:div.row input]]
                            :footer (list yes-btn no-btn))
                (on-modal-keypress-enter (fn [modal]
                                           (reset! result (.-value input))
                                           (hide-modal modal)))
                show-modal))
        @result)))

(comment
  (go (print 1)
      (if-let [val (<! (prompt "Richo capo?" "AAAH" 5))]
        (print val)
        (print false)))
  
  )