(ns com.github.katievogel.bear-ninja-cowboy.core
  (:require
   [com.github.katievogel.bear-ninja-cowboy.html :refer [BearNinjaCowboyApp]]
   [com.github.katievogel.bear-ninja-cowboy.state :refer [app-db]]
   [com.github.katievogel.bear-ninja-cowboy.util.dom :refer [attach-click-event!]]
   [goog.dom :as gdom]
   [goog.functions :as gfunctions]
   [reagent.dom]
   [oops.core :refer [ocall oget oset!]]))

(defn Root [r]
  [BearNinjaCowboyApp @r])

(def init! (gfunctions/once
             (fn []
               (println "Welcome to Bear, Ninja, Cowboy! 🐻")
               ;renders on state change
               (reagent.dom/render [Root app-db] (gdom/getElement "appContainer")))))

(init!)
