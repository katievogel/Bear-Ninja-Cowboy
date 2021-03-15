(ns katie-e-vogel-main.core
  (:require [katie-e-vogel-main.api-connections :refer [fetch-gif!]]
            [katie-e-vogel-main.game-logic :refer [game-action]]
            [katie-e-vogel-main.player-management]
            [katie-e-vogel-main.html :refer [render-bnc]]
            [goog.dom :as gdom]
            [goog.functions :as gfunctions]
            [oops.core :refer [ocall oget oset!]]))

;this should go in the state file
(defonce state (atom {:p1-choice nil
                      :p2-choice nil
                      :winner nil
                      :p1-score 0
                      :p2-score 0}))

;add this to html-cljs file
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

(comment
  (score :p1 @state))


(comment (game-action :bear :ninja))

;stays in core?
(defn init-handlers! []
  (let [el (.querySelector js/document ".btn-b")]
    (.addEventListener el "click" (fn [event]
                                    (println "bear" event)
                                    (click-bnc-button :bear))))
  (let [el (.querySelector js/document ".btn-n")]
    (.addEventListener el "click" (fn [event]
                                    (println "ninja" event)
                                    (click-bnc-button :ninja))))
  (let [el (.querySelector js/document ".btn-c")]
    (.addEventListener el "click" (fn [event]
                                    (println "cowboy" event)
                                    (click-bnc-button :cowboy)))))

(comment
  (let [p1-choice :bear
        p2-choice :ninja]
    (case [p1-choice p2-choice]
      [:bear :ninja] "Bear bites ninja!")))


;stays in core file?
(defn set-app-html!
  [html-str]
  (let [el (gdom/getElement "appContainer")]
    (oset! el "innerHTML" html-str)
    (init-handlers!)))

(defn render-ui! [_ _ _prev-val new-val]
  (set-app-html! (render-bnc new-val)))

(def init! (gfunctions/once (fn []
                              (add-watch state :render-ui render-ui!)
                              (render-ui! nil nil nil @state)
                              (println "running"))))

(init!)

