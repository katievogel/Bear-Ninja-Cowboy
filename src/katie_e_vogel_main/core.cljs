(ns katie-e-vogel-main.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [katie-e-vogel-main.api-connections :refer [fetch-gif!]]
            [katie-e-vogel-main.game-logic :refer [game-action]]
            [katie-e-vogel-main.player-chat]
            [katie-e-vogel-main.player-management]
            [katie-e-vogel-main.html]
            [goog.dom :as gdom]
            [oops.core :refer [ocall oget oset!]]))


(defonce state (atom {:p1-choice nil
                      :p2-choice nil
                      :winner nil}))

(defn click-bnc-button [p1-choice]
  (println "in button" p1-choice)
  (let [p2-choice (rand-nth [:bear :ninja :cowboy])
        winner (game-action p1-choice p2-choice)]
    (fetch-gif! (case winner
                  :p1 p1-choice
                  :p2 p2-choice
                  :tie :tie)
                (fn [v]
                  (swap! state (fn [o]
                                 (assoc o :winner-gif v)))))


    (swap! state (fn [v]
                   (assoc v
                     :p1-choice p1-choice
                     :p2-choice p2-choice
                     :winner winner)))))

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

(comment
  (let [p1-choice :bear
        p2-choice :ninja]
    (case [p1-choice p2-choice]
      [:bear :ninja] "Bear bites ninja!")))


(hiccups/defhtml
  render-bnc [{:keys [p1-choice p2-choice winner-gif] :as v}]
  [:div
   [:div {:class "jumbotron jumbotron-fluid"}
    [:div {:class "container"}
     [:h1 {:class "display-4" } "Bear Ninja Cowboy"]
     [:p {:class "lead"} "Like Rock Paper Scissors... but better... because bears"]]]
   [:div {:class "game-container"}
    [:div {:class "result-box row"}
      [:div {:class "result container-md col-9"} (case [p1-choice p2-choice]
                                                   [:bear :ninja] "Bear bites ninja! Player 1 wins!"
                                                   [:bear :cowboy] "Cowboy shoots bear! Player 2 wins!"
                                                   [:bear :bear] "It's a tie. Play again."
                                                   [:ninja :bear] "Bear bites ninja! Player 2 wins!"
                                                   [:ninja :cowboy] "Ninja strikes cowboy! Player 1 wins!"
                                                   [:ninja :ninja] "It's a tie. Play again."
                                                   [:cowboy :bear] "Cowboy shoots bear! Player 1 wins!"
                                                   [:cowboy :ninja] "Ninja strikes cowboy! Player 2 wins!"
                                                   [:cowboy :cowboy] "It's a tie. Play again."
                                                   nil)]]
    [:div {:id "gif-box row"}
     [:div {:class "funny-gif"} [:img {:src winner-gif}]]]
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
