(ns com.github.katievogel.bear-ninja-cowboy.state
  (:require [reagent.core :as r]))

(def initial-state
  {:p1-choice nil
   :p2-choice nil
   :winner nil
   :p1-score 0
   :p2-score 0})

(defonce app-db (r/atom initial-state))
