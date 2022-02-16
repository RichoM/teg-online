(ns teg-online.utils.bootstrap
  (:require [clojure.core.async :as a :refer [go go-loop <! timeout]]
            [clojure.string :as str]
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

(defn make-modal [header body footer]
  [:div.modal.fade {:tabindex -1 :role "dialog"}
   [:div.modal-dialog.modal-dialog-centered.modal-lg {:role "document"}
    [:div.modal-content
     (when header [:div.modal-header header])
     (when body [:div.modal-body body])
     (when footer [:div.modal-footer footer])]]])

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


(defn on-modal-keypress-enter [element callback]
  (on-keypress element 13
               #(do (callback)
                    (.hide (js/bootstrap.Modal.getInstance element)))))

(defn on-modal-shown [element callback]
  (doto element (.addEventListener "shown.bs.modal" callback)))

(defn on-modal-hidden [element callback]
  (doto element (.addEventListener "hidden.bs.modal" callback)))

(defn show-modal [& {:keys [header body footer]}]
  (hide-modals)
  (let [container (find-container "#modal-dialogs")
        html-modal (crate/html (make-modal header body footer))
        bs-modal (js/bootstrap.Modal. html-modal)
        ready-chan (a/chan)
        current {:modal bs-modal
                 :ready ready-chan}]
    (reset! current-modal current)
    (.appendChild container html-modal)
    (.show bs-modal)
    (doto html-modal
      (on-modal-shown #(a/close! ready-chan))
      (on-modal-hidden #(do (.remove html-modal)
                            (compare-and-set! current-modal current nil))))))

(defn alert [title message]
  (let [result (a/chan)
        html-modal (show-modal :header (list [:h4
                                              [:i.fas.fa-exclamation-circle]
                                              [:span.ms-2 title]]
                                             close-modal-btn)
                               :body [:h5 message]
                               :footer accept-modal-btn)]
    (doto html-modal
      (on-modal-keypress-enter (constantly :nop))
      (on-modal-hidden #(a/close! result)))
    result))

(defn confirm [title message]
  (let [result (a/promise-chan)
        value (atom false)
        yes-btn (on-click (crate/html accept-modal-btn)
                          #(reset! value true))
        no-btn (on-click (crate/html cancel-modal-btn)
                         #(reset! value false))
        html-modal (show-modal :header (list [:h4
                                              [:i.fas.fa-question-circle]
                                              [:span.ms-2 title]]
                                             close-modal-btn)
                               :body [:h5 message]
                               :footer (list yes-btn no-btn))]
    (doto html-modal
      (on-modal-keypress-enter #(reset! value true))
      (on-modal-hidden #(a/put! result @value)))
    result))

(defn prompt [title message default]
  (let [result (a/promise-chan)
        value (atom nil)
        input (crate/html [:input.form-control {:type "text" :value default}])
        yes-btn (on-click (crate/html accept-modal-btn)
                          #(reset! value (.-value input)))
        no-btn (on-click (crate/html cancel-modal-btn)
                         #(reset! value nil))
        html-modal (show-modal :header (list [:h4
                                              [:i.fas.fa-question-circle]
                                              [:span.ms-2 title]]
                                             close-modal-btn)
                               :body [:div.container-fluid
                                      [:div.row [:h5 message]]
                                      [:div.row input]]
                               :footer (list yes-btn no-btn))]
    (doto html-modal
      (on-modal-keypress-enter #(reset! value (.-value input)))
      (on-modal-hidden #(if-let [val @value]
                          (a/put! result val)
                          (a/close! result))))
    result))
