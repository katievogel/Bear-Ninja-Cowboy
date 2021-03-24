goog.provide('com.github.katievogel.bear_ninja_cowboy.player_interaction');
com.github.katievogel.bear_ninja_cowboy.player_interaction.click_button = (function com$github$katievogel$bear_ninja_cowboy$player_interaction$click_button(p1_choice){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in button",p1_choice], 0));

var p2_choice = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bear","bear",-413943675),new cljs.core.Keyword(null,"ninja","ninja",-751192811),new cljs.core.Keyword(null,"cowboy","cowboy",-1169819704)], null));
var winner = com.github.katievogel.bear_ninja_cowboy.game_logic.determine_winner(p1_choice,p2_choice);
com.github.katievogel.bear_ninja_cowboy.api_connections.fetch_gif_BANG_((function (){var G__43445 = winner;
var G__43445__$1 = (((G__43445 instanceof cljs.core.Keyword))?G__43445.fqn:null);
switch (G__43445__$1) {
case "p1":
return p1_choice;

break;
case "p2":
return p2_choice;

break;
case "tie":
return new cljs.core.Keyword(null,"tie","tie",-487201694);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43445__$1)].join('')));

}
})(),(function (result){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.github.katievogel.bear_ninja_cowboy.state.app_db,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"winner-gif","winner-gif",291155806),result);
}));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.github.katievogel.bear_ninja_cowboy.state.app_db,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"p1-choice","p1-choice",1082724594),p1_choice,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"p2-choice","p2-choice",1120019175),p2_choice,new cljs.core.Keyword(null,"winner","winner",714604679),winner,new cljs.core.Keyword(null,"p1-score","p1-score",998949183),(function (){var G__43446 = winner;
var G__43446__$1 = (((G__43446 instanceof cljs.core.Keyword))?G__43446.fqn:null);
switch (G__43446__$1) {
case "p1":
return (new cljs.core.Keyword(null,"p1-score","p1-score",998949183).cljs$core$IFn$_invoke$arity$2(s,(0)) + (1));

break;
default:
return new cljs.core.Keyword(null,"p1-score","p1-score",998949183).cljs$core$IFn$_invoke$arity$1(s);

}
})(),new cljs.core.Keyword(null,"p2-score","p2-score",665926281),(function (){var G__43447 = winner;
var G__43447__$1 = (((G__43447 instanceof cljs.core.Keyword))?G__43447.fqn:null);
switch (G__43447__$1) {
case "p2":
return (new cljs.core.Keyword(null,"p2-score","p2-score",665926281).cljs$core$IFn$_invoke$arity$2(s,(0)) + (1));

break;
default:
return new cljs.core.Keyword(null,"p2-score","p2-score",665926281).cljs$core$IFn$_invoke$arity$1(s);

}
})()], 0));
}));
});

//# sourceMappingURL=com.github.katievogel.bear_ninja_cowboy.player_interaction.js.map
