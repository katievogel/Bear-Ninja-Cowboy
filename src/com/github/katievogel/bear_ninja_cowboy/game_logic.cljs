(ns com.github.katievogel.bear-ninja-cowboy.game-logic)

;; Rules:
; - Bear bites Ninja
; - Ninja strikes Cowboy
; - Cowboy shoots Bear

;; TODO: this good candidate for a few unit tests or assets (see below)
(defn determine-winner [p1-choice p2-choice]
  (cond
    (= p1-choice p2-choice) :tie
    (and (= p1-choice :bear) (= p2-choice :ninja)) :p1
    (and (= p1-choice :bear) (= p2-choice :cowboy)) :p2
    (and (= p1-choice :ninja) (= p2-choice :bear)) :p2
    (and (= p1-choice :ninja) (= p2-choice :cowboy)) :p1
    (and (= p1-choice :cowboy) (= p2-choice :bear)) :p1
    (and (= p1-choice :cowboy) (= p2-choice :ninja)) :p2
    :else nil)) ;; NOTE: this should never happen

(comment
  (determine-winner :bear :ninja)
  (determine-winner :bear :cowboy)
  (determine-winner :bear :bear))

(assert (= (determine-winner :bear :ninja) :p1))
