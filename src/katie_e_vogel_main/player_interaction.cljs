(ns katie-e-vogel-main.player-interaction
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [goog.dom :as gdom]
            [oops.core :refer [ocall oget oset!]]))

;player1 clicks a b n or c button as choice
;choice is saved somewhere
;player2 clicks a b n or c button as choice
;choice is saved somewhere
;choice is reset to initial state of nil after match
(def choice (atom nil))

(defn pick-bnc [b]
  (.querySelector js/document (swap! choice )))
