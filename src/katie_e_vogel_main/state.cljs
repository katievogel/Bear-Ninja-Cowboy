(ns katie-e-vogel-main.state
  (:require [katie-e-vogel-main.player-interaction :as player-interaction]))

(def initial-state
  {:choice nil
   :result :not-started
   :player-state (player-interaction/players)})

(def state (atom initial-state))