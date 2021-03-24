goog.provide('com.github.katievogel.bear_ninja_cowboy.html');
com.github.katievogel.bear_ninja_cowboy.html.Jumbotron = (function com$github$katievogel$bear_ninja_cowboy$html$Jumbotron(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron.jumbotron-fluid","div.jumbotron.jumbotron-fluid",-1652047554),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.display-4","h1.display-4",-1851927864),"Bear Ninja Cowboy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.lead","p.lead",-1826375077),"Like Rock Paper Scissors... but better... because bears"], null)], null)], null);
});
com.github.katievogel.bear_ninja_cowboy.html.PlayerScore = (function com$github$katievogel$bear_ninja_cowboy$html$PlayerScore(label,score){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header","div.card-header",1547492121),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),score], null)], null);
});
com.github.katievogel.bear_ninja_cowboy.html.GameResult = (function com$github$katievogel$bear_ninja_cowboy$html$GameResult(p1_choice,p2_choice){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result-box.row","div.result-box.row",972793510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result.container-md.col-9","div.result.container-md.col-9",-1207790291),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1_choice,p2_choice))?"It's a tie. Play again.":(function (){var G__43337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1_choice,p2_choice], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bear","bear",-413943675),new cljs.core.Keyword(null,"ninja","ninja",-751192811)], null),G__43337)){
return "Bear bites ninja! Player 1 wins!";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bear","bear",-413943675),new cljs.core.Keyword(null,"cowboy","cowboy",-1169819704)], null),G__43337)){
return "Cowboy shoots bear! Player 2 wins!";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ninja","ninja",-751192811),new cljs.core.Keyword(null,"bear","bear",-413943675)], null),G__43337)){
return "Bear bites ninja! Player 2 wins!";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ninja","ninja",-751192811),new cljs.core.Keyword(null,"cowboy","cowboy",-1169819704)], null),G__43337)){
return "Ninja strikes cowboy! Player 1 wins!";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cowboy","cowboy",-1169819704),new cljs.core.Keyword(null,"bear","bear",-413943675)], null),G__43337)){
return "Cowboy shoots bear! Player 1 wins!";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cowboy","cowboy",-1169819704),new cljs.core.Keyword(null,"ninja","ninja",-751192811)], null),G__43337)){
return "Ninja strikes cowboy! Player 2 wins!";
} else {
return null;

}
}
}
}
}
}
})())], null)], null);
});
com.github.katievogel.bear_ninja_cowboy.html.ChoicesButtons = (function com$github$katievogel$bear_ninja_cowboy$html$ChoicesButtons(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choices-box.row","div.choices-box.row",-1116213114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choice.container-md.col-3","div.choice.container-md.col-3",-890377024),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"input",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-b",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["bear",event], 0));

return com.github.katievogel.bear_ninja_cowboy.player_interaction.click_button(new cljs.core.Keyword(null,"bear","bear",-413943675));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"assets/happy-bear.jpg"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choice.container-md.col-3","div.choice.container-md.col-3",-890377024),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"input",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-n",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ninja",event], 0));

return com.github.katievogel.bear_ninja_cowboy.player_interaction.click_button(new cljs.core.Keyword(null,"ninja","ninja",-751192811));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"assets/cat-ninja.jpg"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choice.container-md.col-3","div.choice.container-md.col-3",-890377024),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"input",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-c",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cowboy",event], 0));

return com.github.katievogel.bear_ninja_cowboy.player_interaction.click_button(new cljs.core.Keyword(null,"cowboy","cowboy",-1169819704));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"assets/ridiculous-cowboy.jpg"], null)], null)], null)], null)], null);
});
com.github.katievogel.bear_ninja_cowboy.html.WinnerMessage = (function com$github$katievogel$bear_ninja_cowboy$html$WinnerMessage(winner_gif){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gif","div.gif",-1080078770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),winner_gif], null)], null)], null);
});
com.github.katievogel.bear_ninja_cowboy.html.GameRules = (function com$github$katievogel$bear_ninja_cowboy$html$GameRules(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rules"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Welcome to Bear Ninja Cowboy!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It's played just like Rock Paper Scissors, but with bears, ninjas, and cowboys.",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Bear beats Ninja. Ninja beats Cowboy. Cowboy beats Bear."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Click on an image below to select your choice"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Player 2 (the computer) will pick randomly"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"The winner is listed at the top with a related gif and earns a point."], null)], null)], null)], null);
});
com.github.katievogel.bear_ninja_cowboy.html.BearNinjaCowboyApp = (function com$github$katievogel$bear_ninja_cowboy$html$BearNinjaCowboyApp(p__43338){
var map__43339 = p__43338;
var map__43339__$1 = (((((!((map__43339 == null))))?(((((map__43339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43339):map__43339);
var v = map__43339__$1;
var p1_choice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43339__$1,new cljs.core.Keyword(null,"p1-choice","p1-choice",1082724594));
var p2_choice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43339__$1,new cljs.core.Keyword(null,"p2-choice","p2-choice",1120019175));
var winner_gif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43339__$1,new cljs.core.Keyword(null,"winner-gif","winner-gif",291155806));
var p1_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43339__$1,new cljs.core.Keyword(null,"p1-score","p1-score",998949183));
var p2_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43339__$1,new cljs.core.Keyword(null,"p2-score","p2-score",665926281));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.bear_ninja_cowboy.html.Jumbotron], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.game-container","div.container.game-container",-84404242),(cljs.core.truth_((function (){var and__4115__auto__ = p1_choice;
if(cljs.core.truth_(and__4115__auto__)){
return p2_choice;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.bear_ninja_cowboy.html.GameResult,p1_choice,p2_choice], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gif-box.row","div.gif-box.row",-672668013),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.bear_ninja_cowboy.html.PlayerScore,"P1 Score",p1_score], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.funny-gif","div.funny-gif",-831989153),(cljs.core.truth_(winner_gif)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.bear_ninja_cowboy.html.WinnerMessage,winner_gif], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.bear_ninja_cowboy.html.GameRules], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.bear_ninja_cowboy.html.PlayerScore,"P2 Score",p2_score], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.bear_ninja_cowboy.html.ChoicesButtons], null)], null)], null)], null);
});

//# sourceMappingURL=com.github.katievogel.bear_ninja_cowboy.html.js.map
