(ns katie-e-vogel-main.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require #_[katie-e-vogel-main.api-connections]
            [katie-e-vogel-main.game-logic :refer [game-action]]
            [katie-e-vogel-main.player-chat]
            [katie-e-vogel-main.player-management]
            [katie-e-vogel-main.html]
            [goog.dom :as gdom]
            [oops.core :refer [ocall oget oset!]]))


(defonce state (atom {:p1-choice nil
                      :p2-choice nil}))

(defn click-bnc-button [p1-choice]
  (println "in button" p1-choice)
  (swap! state (fn [v]
                 (let [p2-choice (rand-nth [:bear :ninja :cowboy])]
                   (assoc v
                     :p1-choice p1-choice
                     :p2-choice p2-choice
                     :winner (game-action p1-choice p2-choice))))))

(comment (game-action :bear :ninja))

(defn init-handlers! []
  (let [el (.querySelector js/document ".btn-b")]
    (.addEventListener el "click" (fn [event]
                                    (println "bear" event)
                                    (click-bnc-button :bear))))
  (let [el (.querySelector js/document ".btn-n")]
    (.addEventListener el "click" (fn [event]
                                    (println "ninja" event)
                                    (click-bnc-button :ninja))))
  (let [el (.querySelector js/document ".btn-c")]
    (.addEventListener el "click" (fn [event]
                                    (println "cowboy" event)
                                    (click-bnc-button :cowboy)))))

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
     [:div {:class "choice container-md col-3"} [:button {:type "input" :class "btn-c btn-dark"} [:img {:src "assets/ridiculous-cowboy.jpg"}]]]]]
   [:hr]
   [:h1 "debug"]
   [:pre (pr-str v)]])

(defn set-app-html!
  [html-str]
  (let [el (gdom/getElement "appContainer")]
    (oset! el "innerHTML" html-str)
    (init-handlers!)))

(defn render-ui! [_ _ prev-val new-val]
  (set-app-html! (render-bnc new-val)))

(defn init! []
  (add-watch state :render-ui render-ui!)
  (render-ui! nil nil nil @state)
  #_(add-watch state :render-gif render-gif!)
  (println "running"))

(comment (init!))
