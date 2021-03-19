(ns com.github.katievogel.bear-ninja-cowboy.html)

(defn Jumbotron []
  [:div.jumbotron.jumbotron-fluid
   [:div.container
    [:h1.display-4 "Bear Ninja Cowboy"]
    [:p.lead "Like Rock Paper Scissors... but better... because bears"]]])

(defn PlayerScore
  [label score]
  [:div.card
   [:div.card-header label]
   [:div.card-body score]])

(defn GameResult
  [p1-choice p2-choice]
  [:div.result-box.row
   [:div.result.container-md.col-9
    (if (= p1-choice p2-choice)
      "It's a tie. Play again."
      (case [p1-choice p2-choice]
        [:bear :ninja] "Bear bites ninja! Player 1 wins!"
        [:bear :cowboy] "Cowboy shoots bear! Player 2 wins!"
        [:ninja :bear] "Bear bites ninja! Player 2 wins!"
        [:ninja :cowboy] "Ninja strikes cowboy! Player 1 wins!"
        [:cowboy :bear] "Cowboy shoots bear! Player 1 wins!"
        [:cowboy :ninja] "Ninja strikes cowboy! Player 2 wins!"
        nil))]])

(defn ChoicesButtons
  []
  [:div.choices-box.row
   [:div.choice.container-md.col-3 [:button {:type "input" :class "btn-b"} [:img {:src "assets/happy-bear.jpg"}]]]
   [:div.choice.container-md.col-3 [:button {:type "input" :class "btn-n"} [:img {:src "assets/cat-ninja.jpg"}]]]
   [:div.choice.container-md.col-3 [:button {:type "input" :class "btn-c"} [:img {:src "assets/ridiculous-cowboy.jpg"}]]]])

(defn WinnerMessage
  [winner-gif]
  [:div.gif
   [:img {:src winner-gif}]])

(defn GameRules
  []
  [:div {:class "rules"} [:h3 "Welcome to Bear Ninja Cowboy!"]
   [:p "It's played just like Rock Paper Scissors, but with bears, ninjas, and cowboys."
    [:ul
     [:li "Bear beats Ninja. Ninja beats Cowboy. Cowboy beats Bear."]
     [:li "Click on an image below to select your choice"]
     [:li "Player 2 (the computer) will pick randomly"]
     [:li "The winner is listed at the top with a related gif and earns a point."]]]])

(defn BearNinjaCowboyApp
  [{:keys [p1-choice p2-choice winner-gif p1-score p2-score] :as v}]
  [:div
   (Jumbotron)
   [:div
    [:div.container.game-container
     (when (and p1-choice p2-choice)
       (GameResult p1-choice p2-choice))
     [:div.gif-box.row
      (PlayerScore "P1 Score" p1-score)
      [:div.funny-gif
       (if winner-gif
         (WinnerMessage winner-gif)
         (GameRules))]
      (PlayerScore "P2 Score" p2-score)]
     (ChoicesButtons)]]

   #_[:hr]
   #_[:h1 "debug"]
   #_[:pre (pr-str v)]])
