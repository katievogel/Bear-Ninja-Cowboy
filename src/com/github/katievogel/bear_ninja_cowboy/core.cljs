(ns com.github.katievogel.bear-ninja-cowboy.core
  (:require
   [com.github.katievogel.bear-ninja-cowboy.html :refer [BearNinjaCowboyApp]]
   [com.github.katievogel.bear-ninja-cowboy.player-interaction :refer [click-button]]
   [com.github.katievogel.bear-ninja-cowboy.state :refer [app-db]]
   [com.github.katievogel.bear-ninja-cowboy.util.dom :refer [attach-click-event!]]
   [goog.dom :as gdom]
   [goog.functions :as gfunctions]
   [hiccups.runtime :as hiccups]
   [oops.core :refer [ocall oget oset!]])
  (:require-macros
   [hiccups.core :as hiccups]))

(defn init-handlers! []
  (attach-click-event! ".btn-b" (fn [event]
                                  (println "bear" event)
                                  (click-button :bear)))
  (attach-click-event! ".btn-n" (fn [event]
                                  (println "ninja" event)
                                  (click-button :ninja)))
  (attach-click-event! ".btn-c" (fn [event]
                                  (println "cowboy" event)
                                  (click-button :cowboy))))

(defn set-app-html!
  [html-str]
  (let [el (gdom/getElement "appContainer")]
    (oset! el "innerHTML" html-str)
    (init-handlers!)))

(defn render-ui!
  "builds the HTML and puts it on the page
  runs everytime state changes"
  [_ _ _prev-val new-val]
  (set-app-html! (hiccups/render-html (BearNinjaCowboyApp new-val))))

(def init! (gfunctions/once
             (fn []
               (println "Welcome to Bear, Ninja, Cowboy! 🐻")
               ;; render everytime the state changes
               (add-watch app-db :render-ui render-ui!)
               (println "Atom is being watched")
               ;; trigger our first render
               (swap! app-db identity)
               (println "First render"))))

(init!)
