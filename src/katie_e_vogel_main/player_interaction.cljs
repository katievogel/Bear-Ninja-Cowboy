(ns katie-e-vogel-main.player-interaction
  (:require [katie-e-vogel-main.game-logic :refer [game-action]]
            [katie-e-vogel-main.api-connections :refer [fetch-gif!]]
            [goog.dom :as gdom]
            [goog.functions :as gfunctions]
            [oops.core :refer [ocall oget oset!]]))


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
                     :winner winner
                     :p1-score (case winner
                                 :p1 (inc (:p1-score v 0))
                                 (:p1-score v))
                     :p2-score (case winner
                                 :p2 (inc (:p2-score v 0))
                                 (:p2-score v)))))))