(ns katie-e-vogel-main.api-connections
  (:require [ajax.core :refer [GET]]))

;connect to giphy API
;generate bear, ninja, or cowboy using winner as search query


(defn fetch-gif! [winner success-callback]
  (GET "https://api.giphy.com/v1/gifs/search"
       {:method          :get
        :params          {:api_key "FgUBaM6Yua0703Df7Y2I4lrReCPOiw54"
                          :q       (case winner
                                     :bear "bear"
                                     :ninja "ninja"
                                     :cowboy "cowboy"
                                     :tie "tie-game")
                          :limit   25
                          :offset  (rand-int 25)
                          :rating  "g"
                          :lang    "en"}
        :handler         (fn [gif-url]
                           (success-callback (get-in gif-url [:data 0 :images :downsized_medium :url])))
        :error-handler   (fn [e] (println "error" e))
        :response-format :json
        :keywords?       true}))

(comment
  (fetch-gif! :bear)
  (fetch-gif! :ninja)
  (fetch-gif! :cowboy)
  (def result (atom nil))
  (fetch-gif! :bear (fn [v]
                      (reset! result v)
                      (println "success" v))))
;@result
;(get-in @result [:data 0 :images :downsized_medium :url])


