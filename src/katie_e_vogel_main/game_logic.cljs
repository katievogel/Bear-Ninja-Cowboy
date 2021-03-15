(ns katie-e-vogel-main.game-logic)

;bear bites ninja
;ninja strikes cowboy
;cowboy shoots bear

(defn game-action [p1-choice p2-choice]
  (cond
    (and (= p1-choice :bear) (= p2-choice :ninja)) :p1
    (and (= p1-choice :bear) (= p2-choice :cowboy)) :p2
    (and (= p1-choice :bear) (= p2-choice :bear)) :tie
    (and (= p1-choice :ninja) (= p2-choice :bear)) :p2
    (and (= p1-choice :ninja) (= p2-choice :cowboy)) :p1
    (and (= p1-choice :ninja) (= p2-choice :ninja)) :tie
    (and (= p1-choice :cowboy) (= p2-choice :bear)) :p1
    (and (= p1-choice :cowboy) (= p2-choice :ninja)) :p2
    (and (= p1-choice :cowboy) (= p2-choice :cowboy)) :tie))

(comment
  (game-action :bear :ninja)
  (game-action :bear :cowboy)
  (game-action :bear :bear))
