(ns katie-e-vogel-main.game-logic)

;bear bites ninja
;ninja karate chops cowboy
;cowboy shoots bear

;(def rules ({:bear [:cowboy :ninja :bear]
;             :cowboy [:ninja :bear :cowboy]
;             :ninja [:bear :cowboy :ninja]}))

(defn game-action [p1-input p2-input]
  (if (and (= p1-input :bear) (= p2-input :ninja)) (println "Bear bites ninja! Player 1 wins!"))
  (if (and (= p1-input :bear) (= p2-input :cowboy)) (println "Cowboy shoots bear! Player 2 wins!"))
  (if (and (= p1-input :bear) (= p2-input :bear)) (println "It's a tie!"))
  (if (and (= p1-input :ninja) (= p2-input :bear)) (println "Bear bites ninja! Player 2 wins!"))
  (if (and (= p1-input :ninja) (= p2-input :cowboy)) (println "Ninja strikes cowboy! Player 1 wins!"))
  (if (and (= p1-input :ninja) (= p2-input :ninja)) (println "It's a tie!"))
  (if (and (= p1-input :cowboy) (= p2-input :bear)) (println "Cowboy shoots bear! Player 1 wins!"))
  (if (and (= p1-input :cowboy) (= p2-input :ninja)) (println "Ninja strikes cowboy! Player 2 wins!"))
  (if (and (= p1-input :cowboy) (= p2-input :cowboy)) (println "It's a tie!")))



(comment
  (game-action :bear :ninja)
  (game-action :bear :cowboy))


