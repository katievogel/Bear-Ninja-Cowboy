;(ns katie-e-vogel-main.api-connections
;  (:require [ajax.core :refer [GET]]
;            [goog.dom :as gdom]
;            [oops.core :refer [ocall oget oset!]]
;            [hiccups.runtime :as hiccups]))

;connect to giphy API
;generate bear, ninja, or cowboy based on winner

;(defn handler [[ok response]]
;  (if ok
;    (.log js/console (str response))
;    (.error js/console (str response))))
;
;(defn get-gif (ajax-request
;                {:uri    "https://api.giphy.com/v1/gifs/search?api_key=FgUBaM6Yua0703Df7Y2I4lrReCPOiw54&q=bear&limit=25&offset=0&rating=g&lang=en"
;                 :method :get
;                 :params {:data {:url "https://giphy.com/gifs/bear-hello-waving-IThjAlJnD9WNO"}}
;                 :handler handler
;                 :format (:json)
;                 :response-format (:json {:keywords? true})}))
;
;
;(defn set-gif-html!
;  [html-str]
;  (let [el (gdom/getElement "gif-box row")]
;    (oset! el "innerHTML" html-str)))
;
;(hiccups/defhtml
;  render-gif [g]
;  [:div [:class "funny-gif"
;         [:span [:class "winner-gif"]]]])
;
;(defn render-gif! [_ _ prev-val new-val]
;  (set-gif-html! (render-gif new-val)))

