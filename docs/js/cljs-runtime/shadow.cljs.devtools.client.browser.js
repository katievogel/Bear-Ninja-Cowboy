goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51385 = arguments.length;
var i__4737__auto___51386 = (0);
while(true){
if((i__4737__auto___51386 < len__4736__auto___51385)){
args__4742__auto__.push((arguments[i__4737__auto___51386]));

var G__51387 = (i__4737__auto___51386 + (1));
i__4737__auto___51386 = G__51387;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51109){
var G__51111 = cljs.core.first(seq51109);
var seq51109__$1 = cljs.core.next(seq51109);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51111,seq51109__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51120 = cljs.core.seq(sources);
var chunk__51121 = null;
var count__51122 = (0);
var i__51123 = (0);
while(true){
if((i__51123 < count__51122)){
var map__51146 = chunk__51121.cljs$core$IIndexed$_nth$arity$2(null,i__51123);
var map__51146__$1 = (((((!((map__51146 == null))))?(((((map__51146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51146):map__51146);
var src = map__51146__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51146__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51146__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51146__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51146__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51151){var e_51388 = e51151;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51388);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51388.message)].join('')));
}

var G__51389 = seq__51120;
var G__51390 = chunk__51121;
var G__51391 = count__51122;
var G__51392 = (i__51123 + (1));
seq__51120 = G__51389;
chunk__51121 = G__51390;
count__51122 = G__51391;
i__51123 = G__51392;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51120);
if(temp__5735__auto__){
var seq__51120__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51120__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51120__$1);
var G__51393 = cljs.core.chunk_rest(seq__51120__$1);
var G__51394 = c__4556__auto__;
var G__51395 = cljs.core.count(c__4556__auto__);
var G__51396 = (0);
seq__51120 = G__51393;
chunk__51121 = G__51394;
count__51122 = G__51395;
i__51123 = G__51396;
continue;
} else {
var map__51156 = cljs.core.first(seq__51120__$1);
var map__51156__$1 = (((((!((map__51156 == null))))?(((((map__51156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51156):map__51156);
var src = map__51156__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51156__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51156__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51156__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51156__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51159){var e_51397 = e51159;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51397);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51397.message)].join('')));
}

var G__51401 = cljs.core.next(seq__51120__$1);
var G__51402 = null;
var G__51403 = (0);
var G__51404 = (0);
seq__51120 = G__51401;
chunk__51121 = G__51402;
count__51122 = G__51403;
i__51123 = G__51404;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51161 = cljs.core.seq(js_requires);
var chunk__51162 = null;
var count__51163 = (0);
var i__51164 = (0);
while(true){
if((i__51164 < count__51163)){
var js_ns = chunk__51162.cljs$core$IIndexed$_nth$arity$2(null,i__51164);
var require_str_51405 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51405);


var G__51406 = seq__51161;
var G__51407 = chunk__51162;
var G__51408 = count__51163;
var G__51409 = (i__51164 + (1));
seq__51161 = G__51406;
chunk__51162 = G__51407;
count__51163 = G__51408;
i__51164 = G__51409;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51161);
if(temp__5735__auto__){
var seq__51161__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51161__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51161__$1);
var G__51410 = cljs.core.chunk_rest(seq__51161__$1);
var G__51411 = c__4556__auto__;
var G__51412 = cljs.core.count(c__4556__auto__);
var G__51413 = (0);
seq__51161 = G__51410;
chunk__51162 = G__51411;
count__51163 = G__51412;
i__51164 = G__51413;
continue;
} else {
var js_ns = cljs.core.first(seq__51161__$1);
var require_str_51414 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51414);


var G__51415 = cljs.core.next(seq__51161__$1);
var G__51416 = null;
var G__51417 = (0);
var G__51418 = (0);
seq__51161 = G__51415;
chunk__51162 = G__51416;
count__51163 = G__51417;
i__51164 = G__51418;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51169){
var map__51170 = p__51169;
var map__51170__$1 = (((((!((map__51170 == null))))?(((((map__51170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51170):map__51170);
var msg = map__51170__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51170__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51170__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51172(s__51173){
return (new cljs.core.LazySeq(null,(function (){
var s__51173__$1 = s__51173;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51173__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__51178 = cljs.core.first(xs__6292__auto__);
var map__51178__$1 = (((((!((map__51178 == null))))?(((((map__51178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51178):map__51178);
var src = map__51178__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__51173__$1,map__51178,map__51178__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51170,map__51170__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51172_$_iter__51174(s__51175){
return (new cljs.core.LazySeq(null,((function (s__51173__$1,map__51178,map__51178__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51170,map__51170__$1,msg,info,reload_info){
return (function (){
var s__51175__$1 = s__51175;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51175__$1);
if(temp__5735__auto____$1){
var s__51175__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51175__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51175__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51177 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51176 = (0);
while(true){
if((i__51176 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__51176);
cljs.core.chunk_append(b__51177,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51423 = (i__51176 + (1));
i__51176 = G__51423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51177),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51172_$_iter__51174(cljs.core.chunk_rest(s__51175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51177),null);
}
} else {
var warning = cljs.core.first(s__51175__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51172_$_iter__51174(cljs.core.rest(s__51175__$2)));
}
} else {
return null;
}
break;
}
});})(s__51173__$1,map__51178,map__51178__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51170,map__51170__$1,msg,info,reload_info))
,null,null));
});})(s__51173__$1,map__51178,map__51178__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51170,map__51170__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51172(cljs.core.rest(s__51173__$1)));
} else {
var G__51424 = cljs.core.rest(s__51173__$1);
s__51173__$1 = G__51424;
continue;
}
} else {
var G__51425 = cljs.core.rest(s__51173__$1);
s__51173__$1 = G__51425;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51185_51426 = cljs.core.seq(warnings);
var chunk__51186_51427 = null;
var count__51187_51428 = (0);
var i__51188_51429 = (0);
while(true){
if((i__51188_51429 < count__51187_51428)){
var map__51198_51430 = chunk__51186_51427.cljs$core$IIndexed$_nth$arity$2(null,i__51188_51429);
var map__51198_51431__$1 = (((((!((map__51198_51430 == null))))?(((((map__51198_51430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51198_51430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51198_51430):map__51198_51430);
var w_51432 = map__51198_51431__$1;
var msg_51433__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198_51431__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198_51431__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198_51431__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198_51431__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51436)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51434),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51435),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51433__$1)].join(''));


var G__51437 = seq__51185_51426;
var G__51438 = chunk__51186_51427;
var G__51439 = count__51187_51428;
var G__51440 = (i__51188_51429 + (1));
seq__51185_51426 = G__51437;
chunk__51186_51427 = G__51438;
count__51187_51428 = G__51439;
i__51188_51429 = G__51440;
continue;
} else {
var temp__5735__auto___51441 = cljs.core.seq(seq__51185_51426);
if(temp__5735__auto___51441){
var seq__51185_51442__$1 = temp__5735__auto___51441;
if(cljs.core.chunked_seq_QMARK_(seq__51185_51442__$1)){
var c__4556__auto___51443 = cljs.core.chunk_first(seq__51185_51442__$1);
var G__51445 = cljs.core.chunk_rest(seq__51185_51442__$1);
var G__51446 = c__4556__auto___51443;
var G__51447 = cljs.core.count(c__4556__auto___51443);
var G__51448 = (0);
seq__51185_51426 = G__51445;
chunk__51186_51427 = G__51446;
count__51187_51428 = G__51447;
i__51188_51429 = G__51448;
continue;
} else {
var map__51201_51451 = cljs.core.first(seq__51185_51442__$1);
var map__51201_51452__$1 = (((((!((map__51201_51451 == null))))?(((((map__51201_51451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51201_51451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51201_51451):map__51201_51451);
var w_51453 = map__51201_51452__$1;
var msg_51454__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51201_51452__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51201_51452__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51201_51452__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51201_51452__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51457)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51455),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51456),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51454__$1)].join(''));


var G__51458 = cljs.core.next(seq__51185_51442__$1);
var G__51459 = null;
var G__51460 = (0);
var G__51461 = (0);
seq__51185_51426 = G__51458;
chunk__51186_51427 = G__51459;
count__51187_51428 = G__51460;
i__51188_51429 = G__51461;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51168_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51168_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51218){
var map__51219 = p__51218;
var map__51219__$1 = (((((!((map__51219 == null))))?(((((map__51219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51219):map__51219);
var msg = map__51219__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51219__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51224 = cljs.core.seq(updates);
var chunk__51226 = null;
var count__51227 = (0);
var i__51228 = (0);
while(true){
if((i__51228 < count__51227)){
var path = chunk__51226.cljs$core$IIndexed$_nth$arity$2(null,i__51228);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51272_51468 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51276_51469 = null;
var count__51277_51470 = (0);
var i__51278_51471 = (0);
while(true){
if((i__51278_51471 < count__51277_51470)){
var node_51474 = chunk__51276_51469.cljs$core$IIndexed$_nth$arity$2(null,i__51278_51471);
if(cljs.core.not(node_51474.shadow$old)){
var path_match_51475 = shadow.cljs.devtools.client.browser.match_paths(node_51474.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51475)){
var new_link_51476 = (function (){var G__51294 = node_51474.cloneNode(true);
G__51294.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51475),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51294;
})();
(node_51474.shadow$old = true);

(new_link_51476.onload = ((function (seq__51272_51468,chunk__51276_51469,count__51277_51470,i__51278_51471,seq__51224,chunk__51226,count__51227,i__51228,new_link_51476,path_match_51475,node_51474,path,map__51219,map__51219__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51474);
});})(seq__51272_51468,chunk__51276_51469,count__51277_51470,i__51278_51471,seq__51224,chunk__51226,count__51227,i__51228,new_link_51476,path_match_51475,node_51474,path,map__51219,map__51219__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51475], 0));

goog.dom.insertSiblingAfter(new_link_51476,node_51474);


var G__51482 = seq__51272_51468;
var G__51483 = chunk__51276_51469;
var G__51484 = count__51277_51470;
var G__51485 = (i__51278_51471 + (1));
seq__51272_51468 = G__51482;
chunk__51276_51469 = G__51483;
count__51277_51470 = G__51484;
i__51278_51471 = G__51485;
continue;
} else {
var G__51486 = seq__51272_51468;
var G__51487 = chunk__51276_51469;
var G__51488 = count__51277_51470;
var G__51489 = (i__51278_51471 + (1));
seq__51272_51468 = G__51486;
chunk__51276_51469 = G__51487;
count__51277_51470 = G__51488;
i__51278_51471 = G__51489;
continue;
}
} else {
var G__51490 = seq__51272_51468;
var G__51491 = chunk__51276_51469;
var G__51492 = count__51277_51470;
var G__51493 = (i__51278_51471 + (1));
seq__51272_51468 = G__51490;
chunk__51276_51469 = G__51491;
count__51277_51470 = G__51492;
i__51278_51471 = G__51493;
continue;
}
} else {
var temp__5735__auto___51494 = cljs.core.seq(seq__51272_51468);
if(temp__5735__auto___51494){
var seq__51272_51495__$1 = temp__5735__auto___51494;
if(cljs.core.chunked_seq_QMARK_(seq__51272_51495__$1)){
var c__4556__auto___51496 = cljs.core.chunk_first(seq__51272_51495__$1);
var G__51497 = cljs.core.chunk_rest(seq__51272_51495__$1);
var G__51498 = c__4556__auto___51496;
var G__51499 = cljs.core.count(c__4556__auto___51496);
var G__51500 = (0);
seq__51272_51468 = G__51497;
chunk__51276_51469 = G__51498;
count__51277_51470 = G__51499;
i__51278_51471 = G__51500;
continue;
} else {
var node_51501 = cljs.core.first(seq__51272_51495__$1);
if(cljs.core.not(node_51501.shadow$old)){
var path_match_51503 = shadow.cljs.devtools.client.browser.match_paths(node_51501.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51503)){
var new_link_51505 = (function (){var G__51295 = node_51501.cloneNode(true);
G__51295.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51503),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51295;
})();
(node_51501.shadow$old = true);

(new_link_51505.onload = ((function (seq__51272_51468,chunk__51276_51469,count__51277_51470,i__51278_51471,seq__51224,chunk__51226,count__51227,i__51228,new_link_51505,path_match_51503,node_51501,seq__51272_51495__$1,temp__5735__auto___51494,path,map__51219,map__51219__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51501);
});})(seq__51272_51468,chunk__51276_51469,count__51277_51470,i__51278_51471,seq__51224,chunk__51226,count__51227,i__51228,new_link_51505,path_match_51503,node_51501,seq__51272_51495__$1,temp__5735__auto___51494,path,map__51219,map__51219__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51503], 0));

goog.dom.insertSiblingAfter(new_link_51505,node_51501);


var G__51506 = cljs.core.next(seq__51272_51495__$1);
var G__51507 = null;
var G__51508 = (0);
var G__51509 = (0);
seq__51272_51468 = G__51506;
chunk__51276_51469 = G__51507;
count__51277_51470 = G__51508;
i__51278_51471 = G__51509;
continue;
} else {
var G__51510 = cljs.core.next(seq__51272_51495__$1);
var G__51511 = null;
var G__51512 = (0);
var G__51513 = (0);
seq__51272_51468 = G__51510;
chunk__51276_51469 = G__51511;
count__51277_51470 = G__51512;
i__51278_51471 = G__51513;
continue;
}
} else {
var G__51515 = cljs.core.next(seq__51272_51495__$1);
var G__51516 = null;
var G__51517 = (0);
var G__51518 = (0);
seq__51272_51468 = G__51515;
chunk__51276_51469 = G__51516;
count__51277_51470 = G__51517;
i__51278_51471 = G__51518;
continue;
}
}
} else {
}
}
break;
}


var G__51520 = seq__51224;
var G__51521 = chunk__51226;
var G__51522 = count__51227;
var G__51523 = (i__51228 + (1));
seq__51224 = G__51520;
chunk__51226 = G__51521;
count__51227 = G__51522;
i__51228 = G__51523;
continue;
} else {
var G__51524 = seq__51224;
var G__51525 = chunk__51226;
var G__51526 = count__51227;
var G__51527 = (i__51228 + (1));
seq__51224 = G__51524;
chunk__51226 = G__51525;
count__51227 = G__51526;
i__51228 = G__51527;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51224);
if(temp__5735__auto__){
var seq__51224__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51224__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51224__$1);
var G__51528 = cljs.core.chunk_rest(seq__51224__$1);
var G__51529 = c__4556__auto__;
var G__51530 = cljs.core.count(c__4556__auto__);
var G__51531 = (0);
seq__51224 = G__51528;
chunk__51226 = G__51529;
count__51227 = G__51530;
i__51228 = G__51531;
continue;
} else {
var path = cljs.core.first(seq__51224__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51296_51532 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51300_51533 = null;
var count__51301_51534 = (0);
var i__51302_51535 = (0);
while(true){
if((i__51302_51535 < count__51301_51534)){
var node_51536 = chunk__51300_51533.cljs$core$IIndexed$_nth$arity$2(null,i__51302_51535);
if(cljs.core.not(node_51536.shadow$old)){
var path_match_51537 = shadow.cljs.devtools.client.browser.match_paths(node_51536.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51537)){
var new_link_51538 = (function (){var G__51311 = node_51536.cloneNode(true);
G__51311.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51537),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51311;
})();
(node_51536.shadow$old = true);

(new_link_51538.onload = ((function (seq__51296_51532,chunk__51300_51533,count__51301_51534,i__51302_51535,seq__51224,chunk__51226,count__51227,i__51228,new_link_51538,path_match_51537,node_51536,path,seq__51224__$1,temp__5735__auto__,map__51219,map__51219__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51536);
});})(seq__51296_51532,chunk__51300_51533,count__51301_51534,i__51302_51535,seq__51224,chunk__51226,count__51227,i__51228,new_link_51538,path_match_51537,node_51536,path,seq__51224__$1,temp__5735__auto__,map__51219,map__51219__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51537], 0));

goog.dom.insertSiblingAfter(new_link_51538,node_51536);


var G__51540 = seq__51296_51532;
var G__51541 = chunk__51300_51533;
var G__51542 = count__51301_51534;
var G__51543 = (i__51302_51535 + (1));
seq__51296_51532 = G__51540;
chunk__51300_51533 = G__51541;
count__51301_51534 = G__51542;
i__51302_51535 = G__51543;
continue;
} else {
var G__51544 = seq__51296_51532;
var G__51545 = chunk__51300_51533;
var G__51546 = count__51301_51534;
var G__51547 = (i__51302_51535 + (1));
seq__51296_51532 = G__51544;
chunk__51300_51533 = G__51545;
count__51301_51534 = G__51546;
i__51302_51535 = G__51547;
continue;
}
} else {
var G__51549 = seq__51296_51532;
var G__51550 = chunk__51300_51533;
var G__51551 = count__51301_51534;
var G__51552 = (i__51302_51535 + (1));
seq__51296_51532 = G__51549;
chunk__51300_51533 = G__51550;
count__51301_51534 = G__51551;
i__51302_51535 = G__51552;
continue;
}
} else {
var temp__5735__auto___51553__$1 = cljs.core.seq(seq__51296_51532);
if(temp__5735__auto___51553__$1){
var seq__51296_51555__$1 = temp__5735__auto___51553__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51296_51555__$1)){
var c__4556__auto___51556 = cljs.core.chunk_first(seq__51296_51555__$1);
var G__51557 = cljs.core.chunk_rest(seq__51296_51555__$1);
var G__51558 = c__4556__auto___51556;
var G__51559 = cljs.core.count(c__4556__auto___51556);
var G__51560 = (0);
seq__51296_51532 = G__51557;
chunk__51300_51533 = G__51558;
count__51301_51534 = G__51559;
i__51302_51535 = G__51560;
continue;
} else {
var node_51562 = cljs.core.first(seq__51296_51555__$1);
if(cljs.core.not(node_51562.shadow$old)){
var path_match_51563 = shadow.cljs.devtools.client.browser.match_paths(node_51562.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51563)){
var new_link_51564 = (function (){var G__51315 = node_51562.cloneNode(true);
G__51315.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51563),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51315;
})();
(node_51562.shadow$old = true);

(new_link_51564.onload = ((function (seq__51296_51532,chunk__51300_51533,count__51301_51534,i__51302_51535,seq__51224,chunk__51226,count__51227,i__51228,new_link_51564,path_match_51563,node_51562,seq__51296_51555__$1,temp__5735__auto___51553__$1,path,seq__51224__$1,temp__5735__auto__,map__51219,map__51219__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51562);
});})(seq__51296_51532,chunk__51300_51533,count__51301_51534,i__51302_51535,seq__51224,chunk__51226,count__51227,i__51228,new_link_51564,path_match_51563,node_51562,seq__51296_51555__$1,temp__5735__auto___51553__$1,path,seq__51224__$1,temp__5735__auto__,map__51219,map__51219__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51563], 0));

goog.dom.insertSiblingAfter(new_link_51564,node_51562);


var G__51568 = cljs.core.next(seq__51296_51555__$1);
var G__51569 = null;
var G__51570 = (0);
var G__51571 = (0);
seq__51296_51532 = G__51568;
chunk__51300_51533 = G__51569;
count__51301_51534 = G__51570;
i__51302_51535 = G__51571;
continue;
} else {
var G__51572 = cljs.core.next(seq__51296_51555__$1);
var G__51573 = null;
var G__51574 = (0);
var G__51575 = (0);
seq__51296_51532 = G__51572;
chunk__51300_51533 = G__51573;
count__51301_51534 = G__51574;
i__51302_51535 = G__51575;
continue;
}
} else {
var G__51577 = cljs.core.next(seq__51296_51555__$1);
var G__51578 = null;
var G__51579 = (0);
var G__51580 = (0);
seq__51296_51532 = G__51577;
chunk__51300_51533 = G__51578;
count__51301_51534 = G__51579;
i__51302_51535 = G__51580;
continue;
}
}
} else {
}
}
break;
}


var G__51581 = cljs.core.next(seq__51224__$1);
var G__51582 = null;
var G__51583 = (0);
var G__51584 = (0);
seq__51224 = G__51581;
chunk__51226 = G__51582;
count__51227 = G__51583;
i__51228 = G__51584;
continue;
} else {
var G__51586 = cljs.core.next(seq__51224__$1);
var G__51587 = null;
var G__51588 = (0);
var G__51589 = (0);
seq__51224 = G__51586;
chunk__51226 = G__51587;
count__51227 = G__51588;
i__51228 = G__51589;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51321){
var map__51323 = p__51321;
var map__51323__$1 = (((((!((map__51323 == null))))?(((((map__51323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51323):map__51323);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51323__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51331){
var map__51333 = p__51331;
var map__51333__$1 = (((((!((map__51333 == null))))?(((((map__51333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51333):map__51333);
var _ = map__51333__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51333__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51340,done,error){
var map__51342 = p__51340;
var map__51342__$1 = (((((!((map__51342 == null))))?(((((map__51342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51342):map__51342);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51342__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51345,done,error){
var map__51346 = p__51345;
var map__51346__$1 = (((((!((map__51346 == null))))?(((((map__51346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51346):map__51346);
var msg = map__51346__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51346__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51346__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51346__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51348){
var map__51349 = p__51348;
var map__51349__$1 = (((((!((map__51349 == null))))?(((((map__51349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51349):map__51349);
var src = map__51349__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51349__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51351 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51351) : done.call(null,G__51351));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51352){
var map__51353 = p__51352;
var map__51353__$1 = (((((!((map__51353 == null))))?(((((map__51353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51353):map__51353);
var msg__$1 = map__51353__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51353__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51355){var ex = e51355;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51356){
var map__51357 = p__51356;
var map__51357__$1 = (((((!((map__51357 == null))))?(((((map__51357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51357):map__51357);
var env = map__51357__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51357__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51363){
var map__51364 = p__51363;
var map__51364__$1 = (((((!((map__51364 == null))))?(((((map__51364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51364):map__51364);
var msg = map__51364__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51364__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51372){
var map__51373 = p__51372;
var map__51373__$1 = (((((!((map__51373 == null))))?(((((map__51373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51373):map__51373);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51373__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51373__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51381){
var map__51383 = p__51381;
var map__51383__$1 = (((((!((map__51383 == null))))?(((((map__51383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51383):map__51383);
var svc = map__51383__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51383__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
