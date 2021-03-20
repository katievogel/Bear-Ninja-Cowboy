(ns com.github.katievogel.bear-ninja-cowboy.util.dom
  "various DOM helper functions")

(defn query-select [qs]
  (.querySelector js/document qs))

(defn attach-click-event! [qs the-fn]
  (let [el (query-select qs)]
    (.addEventListener el "click" the-fn)))
