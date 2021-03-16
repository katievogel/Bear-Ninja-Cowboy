# Bear-Ninja-Cowboy
A very simple Rock Paper Scissors game but using Bear Ninja Cowboy instead, written in Clojurescript

### Playing the game 
* A user clicks one of the images to represent their choice
* The computer (player 2) randomly selectes Bear, Ninja, or Cowboy.
* The conditional logic resolves the winner, and a related amusing gif displays. The winner gets a point.
* This is a very, very simple app. You can reset the game by refreshing the page. (Terrible, I know.)
* Check it out - https://katievogel.github.io/Bear-Ninja-Cowboy/

### Observations
This was my first real dive in Clojurescript outside of CLI scripts and running items in the REPL. The primary challenge for me was wrestling with knowing how to do something in javascript and translating/thinking through it in Clojurescript. For example, really coming to terms with everything is functions and data structures. Functions are generally 'simpler' versus some of the pyramids of doom I have written in javascript in the past, but direct with easily tracked outputs. The idea of atoms and state were also new to me. Not quite a variable, but just like a box where you put the things that change over time. 

The Hiccup library made the HTML pretty clean, though it seemed a bit finicky about adding classes or other attributes to tags. On occasion I would add something but it would just display the code text on the browser page. Not quite sure why, but I just worked around it. CSS had it's own share of problems, but when does it not? Does anyone really know CSS? That's like saying you're proficient in Excel (total shenanigans). 

Deployment had some difficulties. I opted to use Github pages since I've used that for vary basic SPAs in the past. However, it's not really optimized for clojurescript deployments and took some finagling. Ended up creating prod branches I didn't need. Ultimately resulted in me renaming folders to jive with their process to make it work which just seemed hacky.

### Future Enhancements
* Mobile Responsiveness
* Reset button
* 2 Player functionality
* Player chat

### Running it locally on your machine
* Pull down the copy of the repo
* Run 'npx shadow-cljs server'. Use this info set up your REPL.
* * Note: If you use Cursive in IntelliJ Idea, you will need a deps.edn as well
* Click on the server link in the terminal and click 'watch' or run 'npx shadow-cljs watch app' in terminal
* Navigate to the localhost designated for the browser
