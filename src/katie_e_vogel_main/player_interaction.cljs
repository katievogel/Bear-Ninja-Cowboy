(ns katie-e-vogel-main.player-interaction
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [goog.dom :as gdom]
            [goog.functions :as gfunctions]
            [oops.core :refer [ocall oget oset!]]))

;player1 clicks a b n or c button as choice
;choice is saved somewhere
;player2 clicks a b n or c button as choice
;choice is saved somewhere
;choice is reset to initial state of nil after match

;multiple players or play against computer, randomized?





;onClick of bear, ninja, or cowboy button, run game-action function form game-logic ns
;try to get button click to register a choice in repl
;winner score increases
;(swap! players
;       (fn [players]
;         (-> players
;             (update :p1-choice pick-bnc)
;             (update :p2-choice pick-bnc))))
;(swap! players :p1-choice pick-bnc)
;(swap! players :p2-choice pick-bnc)

(comment
  (reset! players {:p1-choice nil
                   :p2-choice nil})
  (assoc @players :p1-choice :bear)
  @players
  players
  (swap! players (fn [v]
                   (assoc v :p1-choice :bear)))

  (swap! players (fn [v]
                   (assoc v :p2-choice :ninja)))


  @players)

(comment
  (.querySelector js/document "#appContainer")

  (let [el (.querySelector js/document ".btn-b")]
    #_(.addEventListener el "click" (println "katie"))
    #_(.addEventListener el "click" nil)
    #_(.addEventListener el "click" println)
    (.addEventListener el "click" js/console.log)
    (.addEventListener el "click" (fn [event]
                                    (println "katie" event)))))
