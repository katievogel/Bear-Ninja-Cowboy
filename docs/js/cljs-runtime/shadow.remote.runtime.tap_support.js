goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__50663,p__50664){
var map__50666 = p__50663;
var map__50666__$1 = (((((!((map__50666 == null))))?(((((map__50666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50666):map__50666);
var svc = map__50666__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50666__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50666__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50666__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50667 = p__50664;
var map__50667__$1 = (((((!((map__50667 == null))))?(((((map__50667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50667):map__50667);
var msg = map__50667__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50667__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50667__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50667__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50667__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__50676,p__50677){
var map__50678 = p__50676;
var map__50678__$1 = (((((!((map__50678 == null))))?(((((map__50678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50678):map__50678);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50678__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__50679 = p__50677;
var map__50679__$1 = (((((!((map__50679 == null))))?(((((map__50679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50679):map__50679);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50679__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__50689,p__50690){
var map__50692 = p__50689;
var map__50692__$1 = (((((!((map__50692 == null))))?(((((map__50692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50692):map__50692);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50692__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50692__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50693 = p__50690;
var map__50693__$1 = (((((!((map__50693 == null))))?(((((map__50693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50693):map__50693);
var msg = map__50693__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50693__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__50701,tid){
var map__50702 = p__50701;
var map__50702__$1 = (((((!((map__50702 == null))))?(((((map__50702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50702):map__50702);
var svc = map__50702__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50702__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__50717 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__50718 = null;
var count__50719 = (0);
var i__50720 = (0);
while(true){
if((i__50720 < count__50719)){
var vec__50732 = chunk__50718.cljs$core$IIndexed$_nth$arity$2(null,i__50720);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50732,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50732,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50742 = seq__50717;
var G__50743 = chunk__50718;
var G__50744 = count__50719;
var G__50745 = (i__50720 + (1));
seq__50717 = G__50742;
chunk__50718 = G__50743;
count__50719 = G__50744;
i__50720 = G__50745;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50717);
if(temp__5735__auto__){
var seq__50717__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50717__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50717__$1);
var G__50746 = cljs.core.chunk_rest(seq__50717__$1);
var G__50747 = c__4556__auto__;
var G__50748 = cljs.core.count(c__4556__auto__);
var G__50749 = (0);
seq__50717 = G__50746;
chunk__50718 = G__50747;
count__50719 = G__50748;
i__50720 = G__50749;
continue;
} else {
var vec__50735 = cljs.core.first(seq__50717__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50735,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50735,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50750 = cljs.core.next(seq__50717__$1);
var G__50751 = null;
var G__50752 = (0);
var G__50753 = (0);
seq__50717 = G__50750;
chunk__50718 = G__50751;
count__50719 = G__50752;
i__50720 = G__50753;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__50710_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__50710_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__50711_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__50711_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__50712_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__50712_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__50713_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__50713_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__50739){
var map__50740 = p__50739;
var map__50740__$1 = (((((!((map__50740 == null))))?(((((map__50740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50740):map__50740);
var svc = map__50740__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50740__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50740__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
