(ns katie-e-vogel-main.html
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [hiccups.runtime :as hiccups]
            [goog.dom :as gdom]
            [oops.core :refer [ocall oget oset!]]))


(hiccups/defhtml
  render-bnc [{:keys [p1-choice p2-choice winner-gif p1-score p2-score] :as v}]
  [:div {:class "jumbotron jumbotron-fluid"}
   [:div {:class "container"}
    [:h1 {:class "display-4" } "Bear Ninja Cowboy"]
    [:p {:class "lead"} "Like Rock Paper Scissors... but better... because bears"]]]
  [:div
   [:div {:class "container game-container"}
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
    [:div {:class "gif-box row"}
     [:div {:class "card"}
      [:div {:class "card-header"} "P1 Score"]
      [:div {:class "card-body"} p1-score]]
     [:div {:class "funny-gif"}
      (if winner-gif
        [:div {:class "gif"}
         [:img {:src winner-gif}]]
        [:div {:class "rules"} [:h3 "Welcome to Bear Ninja Cowboy!"]
         [:p "It's played just like Rock Paper Scissors, but with bears, ninjas, and cowboys."
          [:ul
           [:li "Bear beats Ninja. Ninja beats Cowboy. Cowboy beats Bear."]
           [:li "Click on an image below to select your choice"]
           [:li "Player 2 (the computer) will pick randomly"]
           [:li "The winner is listed at the top with a related gif and earns a point."]]]])]
     [:div {:class "card"}
      [:div {:class "card-header"} "P2 Score"]
      [:div {:class "card-body"} p2-score]]]
    [:div {:class "choices-box row"}
     [:div {:class "choice container-md col-3"} [:button {:type "input" :class "btn-b"} [:img {:src "assets/happy-bear.jpg"}]]]
     [:div {:class "choice container-md col-3"} [:button {:type "input" :class "btn-n"} [:img {:src "assets/cat-ninja.jpg"}]]]
     [:div {:class "choice container-md col-3"} [:button {:type "input" :class "btn-c"} [:img {:src "assets/ridiculous-cowboy.jpg"}]]]]]
   #_[:hr]
   #_[:h1 "debug"]
   #_[:pre (pr-str v)]])