(ns katie-e-vogel-main.player-interaction
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

