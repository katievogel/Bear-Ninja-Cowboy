(ns katie-e-vogel-main.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require #_[katie-e-vogel-main.api-connections]
            [katie-e-vogel-main.game-logic]
            [katie-e-vogel-main.player-chat]
            [katie-e-vogel-main.player-management]
            [katie-e-vogel-main.player-connection]
            [katie-e-vogel-main.html]
            [goog.dom :as gdom]
            [oops.core :refer [ocall oget oset!]]))

(defn set-app-html!
  [html-str]
  (let [el (gdom/getElement "appContainer")]
    (oset! el "innerHTML" html-str)))

(defonce state (atom 1))

(hiccups/defhtml
  render-bnc [v]
  [:div
   [:h3 "B N C"]
   [:div {:class "game-container"}
    [:div {:class "result-box row"}
      [:div {:class "result container-md col-9"} "Winner result goes here."]]
    [:div {:id "gif-box row"}
     [:div {:class "funny-gif"} "Humorous gif goes here."]]
    [:div {:class "choices-box row"}
     [:div {:class "choice container-md col-3"} [:button {:type "input" :class "btn-b btn-dark"} [:img {:src "assets/happy-bear.jpg"}]]]
     [:div {:class "choice container-md col-3"} [:button {:type "input" :class "btn-n btn-dark"} [:img {:src "assets/cat-ninja.jpg"}]]]
     [:div {:class "choice container-md col-3"} [:button {:type "input" :class "btn-c btn-dark"} [:img {:src "assets/ridiculous-cowboy.jpg"}]]]]]])


(defn render-ui! [_ _ prev-val new-val]
  (set-app-html! (render-bnc new-val)))

(comment
  (render-ui! nil nil nil @state))


(defn init! []
  (add-watch state :render-ui render-ui!)
  #_(add-watch state :render-gif render-gif!)
  (println "running"))

(comment (init!))
