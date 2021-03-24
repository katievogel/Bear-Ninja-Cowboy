goog.provide('com.github.katievogel.bear_ninja_cowboy.game_logic');
com.github.katievogel.bear_ninja_cowboy.game_logic.determine_winner = (function com$github$katievogel$bear_ninja_cowboy$game_logic$determine_winner(p1_choice,p2_choice){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1_choice,p2_choice)){
return new cljs.core.Keyword(null,"tie","tie",-487201694);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1_choice,new cljs.core.Keyword(null,"bear","bear",-413943675))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2_choice,new cljs.core.Keyword(null,"ninja","ninja",-751192811))))){
return new cljs.core.Keyword(null,"p1","p1",-936759954);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1_choice,new cljs.core.Keyword(null,"bear","bear",-413943675))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2_choice,new cljs.core.Keyword(null,"cowboy","cowboy",-1169819704))))){
return new cljs.core.Keyword(null,"p2","p2",905500641);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1_choice,new cljs.core.Keyword(null,"ninja","ninja",-751192811))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2_choice,new cljs.core.Keyword(null,"bear","bear",-413943675))))){
return new cljs.core.Keyword(null,"p2","p2",905500641);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1_choice,new cljs.core.Keyword(null,"ninja","ninja",-751192811))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2_choice,new cljs.core.Keyword(null,"cowboy","cowboy",-1169819704))))){
return new cljs.core.Keyword(null,"p1","p1",-936759954);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1_choice,new cljs.core.Keyword(null,"cowboy","cowboy",-1169819704))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2_choice,new cljs.core.Keyword(null,"bear","bear",-413943675))))){
return new cljs.core.Keyword(null,"p1","p1",-936759954);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1_choice,new cljs.core.Keyword(null,"cowboy","cowboy",-1169819704))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2_choice,new cljs.core.Keyword(null,"ninja","ninja",-751192811))))){
return new cljs.core.Keyword(null,"p2","p2",905500641);
} else {
return null;

}
}
}
}
}
}
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.github.katievogel.bear_ninja_cowboy.game_logic.determine_winner(new cljs.core.Keyword(null,"bear","bear",-413943675),new cljs.core.Keyword(null,"ninja","ninja",-751192811)),new cljs.core.Keyword(null,"p1","p1",-936759954))){
} else {
throw (new Error("Assert failed: (= (determine-winner :bear :ninja) :p1)"));
}

//# sourceMappingURL=com.github.katievogel.bear_ninja_cowboy.game_logic.js.map
