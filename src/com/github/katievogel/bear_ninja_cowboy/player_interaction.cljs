(ns com.github.katievogel.bear-ninja-cowboy.player-interaction
  (:require
   [com.github.katievogel.bear-ninja-cowboy.api-connections :refer [fetch-gif!]]
   [com.github.katievogel.bear-ninja-cowboy.game-logic :refer [determine-winner]]
   [com.github.katievogel.bear-ninja-cowboy.state :refer [app-db]]))

(defn click-button [p1-choice]
  (println "in button" p1-choice)
  (let [p2-choice (rand-nth [:bear :ninja :cowboy])
        winner (determine-winner p1-choice p2-choice)]
    (fetch-gif! (case winner
                  :p1 p1-choice
                  :p2 p2-choice
                  :tie :tie)
                (fn [result]
                  (swap! app-db (fn [s]
                                  (assoc s :winner-gif result)))))
    (swap! app-db (fn [s]
                    (assoc s
                      :p1-choice p1-choice
                      :p2-choice p2-choice
                      :winner winner
                      :p1-score (case winner
                                  :p1 (inc (:p1-score s 0))
                                  (:p1-score s))
                      :p2-score (case winner
                                  :p2 (inc (:p2-score s 0))
                                  (:p2-score s)))))))

;test case for debugging
(comment
  (let [p1-choice :bear
        p2-choice :ninja]
    (case [p1-choice p2-choice]
      [:bear :ninja] "Bear bites ninja!")))
