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
(def players (atom {:p1-choice nil
                    :p2-choice nil}))

(def score-count (atom 0)
  (swap! score-count inc))

(defn pick-bnc [b]
  (case b
    "Bear" :bear
    "Ninja" :ninja
    "Cowboy" :cowboy))

;multiple players or play against computer, randomized?
(defn click-bnc-button [p1 p2]
  (let [current-state @state
        current-turn (:p1 b) (:p2 b)]))
;onClick of bear, ninja, or cowboy button, run game-action function form game-logic ns
;try to get button click to register a choice in repl
;winner score increases
(swap! players
       (fn [players]
         (-> players
             (update :p1-choice pick-bnc)
             (update :p2-choice pick-bnc))))
;(swap! players :p1-choice pick-bnc)
;(swap! players :p2-choice pick-bnc)

(def init-dom-events!
  (gfunctions/once
    (fn []
      (ocall (gdom/getElement "appContainer") "addEventListener" "click" click-bnc-button))))