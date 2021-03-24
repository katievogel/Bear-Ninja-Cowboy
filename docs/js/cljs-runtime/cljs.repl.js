goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50090){
var map__50092 = p__50090;
var map__50092__$1 = (((((!((map__50092 == null))))?(((((map__50092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50092):map__50092);
var m = map__50092__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50092__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50098_50235 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50099_50236 = null;
var count__50100_50237 = (0);
var i__50101_50238 = (0);
while(true){
if((i__50101_50238 < count__50100_50237)){
var f_50239 = chunk__50099_50236.cljs$core$IIndexed$_nth$arity$2(null,i__50101_50238);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50239], 0));


var G__50240 = seq__50098_50235;
var G__50241 = chunk__50099_50236;
var G__50242 = count__50100_50237;
var G__50243 = (i__50101_50238 + (1));
seq__50098_50235 = G__50240;
chunk__50099_50236 = G__50241;
count__50100_50237 = G__50242;
i__50101_50238 = G__50243;
continue;
} else {
var temp__5735__auto___50244 = cljs.core.seq(seq__50098_50235);
if(temp__5735__auto___50244){
var seq__50098_50245__$1 = temp__5735__auto___50244;
if(cljs.core.chunked_seq_QMARK_(seq__50098_50245__$1)){
var c__4556__auto___50246 = cljs.core.chunk_first(seq__50098_50245__$1);
var G__50247 = cljs.core.chunk_rest(seq__50098_50245__$1);
var G__50248 = c__4556__auto___50246;
var G__50249 = cljs.core.count(c__4556__auto___50246);
var G__50250 = (0);
seq__50098_50235 = G__50247;
chunk__50099_50236 = G__50248;
count__50100_50237 = G__50249;
i__50101_50238 = G__50250;
continue;
} else {
var f_50253 = cljs.core.first(seq__50098_50245__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50253], 0));


var G__50255 = cljs.core.next(seq__50098_50245__$1);
var G__50256 = null;
var G__50257 = (0);
var G__50258 = (0);
seq__50098_50235 = G__50255;
chunk__50099_50236 = G__50256;
count__50100_50237 = G__50257;
i__50101_50238 = G__50258;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50263 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50263], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50263)))?cljs.core.second(arglists_50263):arglists_50263)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50111_50273 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50112_50274 = null;
var count__50113_50275 = (0);
var i__50114_50276 = (0);
while(true){
if((i__50114_50276 < count__50113_50275)){
var vec__50127_50281 = chunk__50112_50274.cljs$core$IIndexed$_nth$arity$2(null,i__50114_50276);
var name_50282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50127_50281,(0),null);
var map__50130_50283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50127_50281,(1),null);
var map__50130_50284__$1 = (((((!((map__50130_50283 == null))))?(((((map__50130_50283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50130_50283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50130_50283):map__50130_50283);
var doc_50285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50130_50284__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50130_50284__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50282], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50286], 0));

if(cljs.core.truth_(doc_50285)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50285], 0));
} else {
}


var G__50301 = seq__50111_50273;
var G__50302 = chunk__50112_50274;
var G__50303 = count__50113_50275;
var G__50304 = (i__50114_50276 + (1));
seq__50111_50273 = G__50301;
chunk__50112_50274 = G__50302;
count__50113_50275 = G__50303;
i__50114_50276 = G__50304;
continue;
} else {
var temp__5735__auto___50305 = cljs.core.seq(seq__50111_50273);
if(temp__5735__auto___50305){
var seq__50111_50306__$1 = temp__5735__auto___50305;
if(cljs.core.chunked_seq_QMARK_(seq__50111_50306__$1)){
var c__4556__auto___50307 = cljs.core.chunk_first(seq__50111_50306__$1);
var G__50308 = cljs.core.chunk_rest(seq__50111_50306__$1);
var G__50309 = c__4556__auto___50307;
var G__50310 = cljs.core.count(c__4556__auto___50307);
var G__50311 = (0);
seq__50111_50273 = G__50308;
chunk__50112_50274 = G__50309;
count__50113_50275 = G__50310;
i__50114_50276 = G__50311;
continue;
} else {
var vec__50133_50312 = cljs.core.first(seq__50111_50306__$1);
var name_50313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50133_50312,(0),null);
var map__50136_50314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50133_50312,(1),null);
var map__50136_50315__$1 = (((((!((map__50136_50314 == null))))?(((((map__50136_50314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50136_50314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50136_50314):map__50136_50314);
var doc_50316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136_50315__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136_50315__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50313], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50317], 0));

if(cljs.core.truth_(doc_50316)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50316], 0));
} else {
}


var G__50328 = cljs.core.next(seq__50111_50306__$1);
var G__50329 = null;
var G__50330 = (0);
var G__50331 = (0);
seq__50111_50273 = G__50328;
chunk__50112_50274 = G__50329;
count__50113_50275 = G__50330;
i__50114_50276 = G__50331;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50138 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50139 = null;
var count__50140 = (0);
var i__50141 = (0);
while(true){
if((i__50141 < count__50140)){
var role = chunk__50139.cljs$core$IIndexed$_nth$arity$2(null,i__50141);
var temp__5735__auto___50346__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50346__$1)){
var spec_50347 = temp__5735__auto___50346__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50347)], 0));
} else {
}


var G__50348 = seq__50138;
var G__50349 = chunk__50139;
var G__50350 = count__50140;
var G__50351 = (i__50141 + (1));
seq__50138 = G__50348;
chunk__50139 = G__50349;
count__50140 = G__50350;
i__50141 = G__50351;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50138);
if(temp__5735__auto____$1){
var seq__50138__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50138__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50138__$1);
var G__50353 = cljs.core.chunk_rest(seq__50138__$1);
var G__50354 = c__4556__auto__;
var G__50355 = cljs.core.count(c__4556__auto__);
var G__50356 = (0);
seq__50138 = G__50353;
chunk__50139 = G__50354;
count__50140 = G__50355;
i__50141 = G__50356;
continue;
} else {
var role = cljs.core.first(seq__50138__$1);
var temp__5735__auto___50357__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50357__$2)){
var spec_50358 = temp__5735__auto___50357__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50358)], 0));
} else {
}


var G__50359 = cljs.core.next(seq__50138__$1);
var G__50360 = null;
var G__50361 = (0);
var G__50362 = (0);
seq__50138 = G__50359;
chunk__50139 = G__50360;
count__50140 = G__50361;
i__50141 = G__50362;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50373 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50374 = cljs.core.ex_cause(t);
via = G__50373;
t = G__50374;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50146 = datafied_throwable;
var map__50146__$1 = (((((!((map__50146 == null))))?(((((map__50146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50146):map__50146);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50146__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50146__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50146__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50147 = cljs.core.last(via);
var map__50147__$1 = (((((!((map__50147 == null))))?(((((map__50147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50147):map__50147);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50147__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50147__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50147__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50148 = data;
var map__50148__$1 = (((((!((map__50148 == null))))?(((((map__50148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50148):map__50148);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50148__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50148__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50148__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50149 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50149__$1 = (((((!((map__50149 == null))))?(((((map__50149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50149):map__50149);
var top_data = map__50149__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50149__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50156 = phase;
var G__50156__$1 = (((G__50156 instanceof cljs.core.Keyword))?G__50156.fqn:null);
switch (G__50156__$1) {
case "read-source":
var map__50157 = data;
var map__50157__$1 = (((((!((map__50157 == null))))?(((((map__50157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50157):map__50157);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50157__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50157__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50159 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50159__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50159,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50159);
var G__50159__$2 = (cljs.core.truth_((function (){var fexpr__50160 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50160.cljs$core$IFn$_invoke$arity$1 ? fexpr__50160.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50160.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50159__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50159__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50159__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50159__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50161 = top_data;
var G__50161__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50161,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50161);
var G__50161__$2 = (cljs.core.truth_((function (){var fexpr__50162 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50162.cljs$core$IFn$_invoke$arity$1 ? fexpr__50162.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50162.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50161__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50161__$1);
var G__50161__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50161__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50161__$2);
var G__50161__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50161__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50161__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50161__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50161__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50164 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50164,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50164,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50164,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50164,(3),null);
var G__50167 = top_data;
var G__50167__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50167,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50167);
var G__50167__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50167__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50167__$1);
var G__50167__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50167__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50167__$2);
var G__50167__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50167__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50167__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50167__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50167__$4;
}

break;
case "execution":
var vec__50168 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50168,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50168,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50168,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50168,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50145_SHARP_){
var or__4126__auto__ = (p1__50145_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__50172 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50172.cljs$core$IFn$_invoke$arity$1 ? fexpr__50172.cljs$core$IFn$_invoke$arity$1(p1__50145_SHARP_) : fexpr__50172.call(null,p1__50145_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__50173 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50173__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50173,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50173);
var G__50173__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50173__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50173__$1);
var G__50173__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50173__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50173__$2);
var G__50173__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50173__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50173__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50173__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50173__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50156__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50178){
var map__50179 = p__50178;
var map__50179__$1 = (((((!((map__50179 == null))))?(((((map__50179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50179):map__50179);
var triage_data = map__50179__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50181 = phase;
var G__50181__$1 = (((G__50181 instanceof cljs.core.Keyword))?G__50181.fqn:null);
switch (G__50181__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50182 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50183 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50184 = loc;
var G__50185 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50186_50431 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50187_50432 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50188_50433 = true;
var _STAR_print_fn_STAR__temp_val__50189_50434 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50188_50433);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50189_50434);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50176_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50176_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50187_50432);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50186_50431);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50182,G__50183,G__50184,G__50185) : format.call(null,G__50182,G__50183,G__50184,G__50185));

break;
case "macroexpansion":
var G__50190 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50191 = cause_type;
var G__50192 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50193 = loc;
var G__50194 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50190,G__50191,G__50192,G__50193,G__50194) : format.call(null,G__50190,G__50191,G__50192,G__50193,G__50194));

break;
case "compile-syntax-check":
var G__50195 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50196 = cause_type;
var G__50197 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50198 = loc;
var G__50199 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50195,G__50196,G__50197,G__50198,G__50199) : format.call(null,G__50195,G__50196,G__50197,G__50198,G__50199));

break;
case "compilation":
var G__50200 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50201 = cause_type;
var G__50202 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50203 = loc;
var G__50204 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50200,G__50201,G__50202,G__50203,G__50204) : format.call(null,G__50200,G__50201,G__50202,G__50203,G__50204));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50205 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50206 = symbol;
var G__50207 = loc;
var G__50208 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50209_50447 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50210_50448 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50211_50449 = true;
var _STAR_print_fn_STAR__temp_val__50212_50450 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50211_50449);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50212_50450);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50177_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50177_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50210_50448);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50209_50447);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50205,G__50206,G__50207,G__50208) : format.call(null,G__50205,G__50206,G__50207,G__50208));
} else {
var G__50221 = "Execution error%s at %s(%s).\n%s\n";
var G__50222 = cause_type;
var G__50223 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50224 = loc;
var G__50225 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50221,G__50222,G__50223,G__50224,G__50225) : format.call(null,G__50221,G__50222,G__50223,G__50224,G__50225));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50181__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
