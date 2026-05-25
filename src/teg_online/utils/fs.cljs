(ns teg-online.utils.fs
  (:refer-clojure :exclude [exists?])
  (:require [clojure.core.async :as a :refer [go <!]]
            ["fs" :as fs]))

(defn callback [p]
  (fn [err]
    (if err
      (a/put! p err)
      (a/close! p))))

(defn mkdir [path]
  (let [result (a/promise-chan)]
    (fs/mkdir path (callback result))
    result))

(defn write-file 
  ([path data] (write-file path data {}))
  ([path data options]
  (let [result (a/promise-chan)]
    (fs/writeFile path data 
                  (clj->js options) 
                  (callback result))
    result)))

(defn read-file
  ([path] (read-file path {}))
  ([path options]
   (let [result (a/promise-chan)]
     (fs/readFile path
                   (clj->js options)
                   (fn [err data] (a/put! result (or err data))))
     result)))

(defn exists? [file]
  (let [result (a/promise-chan)]
    (fs/access file (fn [err] (a/put! result (nil? err))))
    result))
