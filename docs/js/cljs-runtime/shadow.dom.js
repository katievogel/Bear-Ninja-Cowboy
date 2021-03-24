goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48183 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48183(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48199 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48199(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47041 = coll;
var G__47042 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47041,G__47042) : shadow.dom.lazy_native_coll_seq.call(null,G__47041,G__47042));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47054 = arguments.length;
switch (G__47054) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47058 = arguments.length;
switch (G__47058) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47063 = arguments.length;
switch (G__47063) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47075 = arguments.length;
switch (G__47075) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47113 = arguments.length;
switch (G__47113) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47130 = arguments.length;
switch (G__47130) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47141){if((e47141 instanceof Object)){
var e = e47141;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47141;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47151 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47152 = null;
var count__47153 = (0);
var i__47154 = (0);
while(true){
if((i__47154 < count__47153)){
var el = chunk__47152.cljs$core$IIndexed$_nth$arity$2(null,i__47154);
var handler_48288__$1 = ((function (seq__47151,chunk__47152,count__47153,i__47154,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47151,chunk__47152,count__47153,i__47154,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48288__$1);


var G__48291 = seq__47151;
var G__48292 = chunk__47152;
var G__48293 = count__47153;
var G__48294 = (i__47154 + (1));
seq__47151 = G__48291;
chunk__47152 = G__48292;
count__47153 = G__48293;
i__47154 = G__48294;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47151);
if(temp__5735__auto__){
var seq__47151__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47151__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47151__$1);
var G__48298 = cljs.core.chunk_rest(seq__47151__$1);
var G__48299 = c__4556__auto__;
var G__48300 = cljs.core.count(c__4556__auto__);
var G__48301 = (0);
seq__47151 = G__48298;
chunk__47152 = G__48299;
count__47153 = G__48300;
i__47154 = G__48301;
continue;
} else {
var el = cljs.core.first(seq__47151__$1);
var handler_48303__$1 = ((function (seq__47151,chunk__47152,count__47153,i__47154,el,seq__47151__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47151,chunk__47152,count__47153,i__47154,el,seq__47151__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48303__$1);


var G__48307 = cljs.core.next(seq__47151__$1);
var G__48308 = null;
var G__48309 = (0);
var G__48310 = (0);
seq__47151 = G__48307;
chunk__47152 = G__48308;
count__47153 = G__48309;
i__47154 = G__48310;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47169 = arguments.length;
switch (G__47169) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47179 = cljs.core.seq(events);
var chunk__47180 = null;
var count__47181 = (0);
var i__47182 = (0);
while(true){
if((i__47182 < count__47181)){
var vec__47200 = chunk__47180.cljs$core$IIndexed$_nth$arity$2(null,i__47182);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47200,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47200,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48338 = seq__47179;
var G__48339 = chunk__47180;
var G__48340 = count__47181;
var G__48341 = (i__47182 + (1));
seq__47179 = G__48338;
chunk__47180 = G__48339;
count__47181 = G__48340;
i__47182 = G__48341;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47179);
if(temp__5735__auto__){
var seq__47179__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47179__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47179__$1);
var G__48342 = cljs.core.chunk_rest(seq__47179__$1);
var G__48343 = c__4556__auto__;
var G__48344 = cljs.core.count(c__4556__auto__);
var G__48345 = (0);
seq__47179 = G__48342;
chunk__47180 = G__48343;
count__47181 = G__48344;
i__47182 = G__48345;
continue;
} else {
var vec__47206 = cljs.core.first(seq__47179__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48352 = cljs.core.next(seq__47179__$1);
var G__48353 = null;
var G__48354 = (0);
var G__48355 = (0);
seq__47179 = G__48352;
chunk__47180 = G__48353;
count__47181 = G__48354;
i__47182 = G__48355;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47211 = cljs.core.seq(styles);
var chunk__47212 = null;
var count__47213 = (0);
var i__47214 = (0);
while(true){
if((i__47214 < count__47213)){
var vec__47224 = chunk__47212.cljs$core$IIndexed$_nth$arity$2(null,i__47214);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47224,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47224,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48364 = seq__47211;
var G__48365 = chunk__47212;
var G__48366 = count__47213;
var G__48367 = (i__47214 + (1));
seq__47211 = G__48364;
chunk__47212 = G__48365;
count__47213 = G__48366;
i__47214 = G__48367;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47211);
if(temp__5735__auto__){
var seq__47211__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47211__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47211__$1);
var G__48370 = cljs.core.chunk_rest(seq__47211__$1);
var G__48371 = c__4556__auto__;
var G__48372 = cljs.core.count(c__4556__auto__);
var G__48373 = (0);
seq__47211 = G__48370;
chunk__47212 = G__48371;
count__47213 = G__48372;
i__47214 = G__48373;
continue;
} else {
var vec__47231 = cljs.core.first(seq__47211__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47231,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47231,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48378 = cljs.core.next(seq__47211__$1);
var G__48379 = null;
var G__48380 = (0);
var G__48381 = (0);
seq__47211 = G__48378;
chunk__47212 = G__48379;
count__47213 = G__48380;
i__47214 = G__48381;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47238_48383 = key;
var G__47238_48384__$1 = (((G__47238_48383 instanceof cljs.core.Keyword))?G__47238_48383.fqn:null);
switch (G__47238_48384__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48401 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_48401,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_48401,"aria-");
}
})())){
el.setAttribute(ks_48401,value);
} else {
(el[ks_48401] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47254){
var map__47255 = p__47254;
var map__47255__$1 = (((((!((map__47255 == null))))?(((((map__47255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47255):map__47255);
var props = map__47255__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47255__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47258 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47258,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47258,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47258,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47262 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47262,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47262;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47271 = arguments.length;
switch (G__47271) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47287){
var vec__47288 = p__47287;
var seq__47289 = cljs.core.seq(vec__47288);
var first__47290 = cljs.core.first(seq__47289);
var seq__47289__$1 = cljs.core.next(seq__47289);
var nn = first__47290;
var first__47290__$1 = cljs.core.first(seq__47289__$1);
var seq__47289__$2 = cljs.core.next(seq__47289__$1);
var np = first__47290__$1;
var nc = seq__47289__$2;
var node = vec__47288;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47295 = nn;
var G__47296 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47295,G__47296) : create_fn.call(null,G__47295,G__47296));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47297 = nn;
var G__47298 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47297,G__47298) : create_fn.call(null,G__47297,G__47298));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47305 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47305,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47305,(1),null);
var seq__47308_48485 = cljs.core.seq(node_children);
var chunk__47309_48486 = null;
var count__47310_48487 = (0);
var i__47311_48488 = (0);
while(true){
if((i__47311_48488 < count__47310_48487)){
var child_struct_48489 = chunk__47309_48486.cljs$core$IIndexed$_nth$arity$2(null,i__47311_48488);
var children_48490 = shadow.dom.dom_node(child_struct_48489);
if(cljs.core.seq_QMARK_(children_48490)){
var seq__47341_48491 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48490));
var chunk__47343_48492 = null;
var count__47344_48493 = (0);
var i__47345_48494 = (0);
while(true){
if((i__47345_48494 < count__47344_48493)){
var child_48496 = chunk__47343_48492.cljs$core$IIndexed$_nth$arity$2(null,i__47345_48494);
if(cljs.core.truth_(child_48496)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48496);


var G__48506 = seq__47341_48491;
var G__48507 = chunk__47343_48492;
var G__48508 = count__47344_48493;
var G__48509 = (i__47345_48494 + (1));
seq__47341_48491 = G__48506;
chunk__47343_48492 = G__48507;
count__47344_48493 = G__48508;
i__47345_48494 = G__48509;
continue;
} else {
var G__48512 = seq__47341_48491;
var G__48513 = chunk__47343_48492;
var G__48514 = count__47344_48493;
var G__48515 = (i__47345_48494 + (1));
seq__47341_48491 = G__48512;
chunk__47343_48492 = G__48513;
count__47344_48493 = G__48514;
i__47345_48494 = G__48515;
continue;
}
} else {
var temp__5735__auto___48520 = cljs.core.seq(seq__47341_48491);
if(temp__5735__auto___48520){
var seq__47341_48521__$1 = temp__5735__auto___48520;
if(cljs.core.chunked_seq_QMARK_(seq__47341_48521__$1)){
var c__4556__auto___48526 = cljs.core.chunk_first(seq__47341_48521__$1);
var G__48527 = cljs.core.chunk_rest(seq__47341_48521__$1);
var G__48528 = c__4556__auto___48526;
var G__48529 = cljs.core.count(c__4556__auto___48526);
var G__48530 = (0);
seq__47341_48491 = G__48527;
chunk__47343_48492 = G__48528;
count__47344_48493 = G__48529;
i__47345_48494 = G__48530;
continue;
} else {
var child_48534 = cljs.core.first(seq__47341_48521__$1);
if(cljs.core.truth_(child_48534)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48534);


var G__48535 = cljs.core.next(seq__47341_48521__$1);
var G__48536 = null;
var G__48537 = (0);
var G__48538 = (0);
seq__47341_48491 = G__48535;
chunk__47343_48492 = G__48536;
count__47344_48493 = G__48537;
i__47345_48494 = G__48538;
continue;
} else {
var G__48539 = cljs.core.next(seq__47341_48521__$1);
var G__48540 = null;
var G__48541 = (0);
var G__48542 = (0);
seq__47341_48491 = G__48539;
chunk__47343_48492 = G__48540;
count__47344_48493 = G__48541;
i__47345_48494 = G__48542;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48490);
}


var G__48546 = seq__47308_48485;
var G__48547 = chunk__47309_48486;
var G__48548 = count__47310_48487;
var G__48549 = (i__47311_48488 + (1));
seq__47308_48485 = G__48546;
chunk__47309_48486 = G__48547;
count__47310_48487 = G__48548;
i__47311_48488 = G__48549;
continue;
} else {
var temp__5735__auto___48554 = cljs.core.seq(seq__47308_48485);
if(temp__5735__auto___48554){
var seq__47308_48555__$1 = temp__5735__auto___48554;
if(cljs.core.chunked_seq_QMARK_(seq__47308_48555__$1)){
var c__4556__auto___48556 = cljs.core.chunk_first(seq__47308_48555__$1);
var G__48557 = cljs.core.chunk_rest(seq__47308_48555__$1);
var G__48558 = c__4556__auto___48556;
var G__48559 = cljs.core.count(c__4556__auto___48556);
var G__48560 = (0);
seq__47308_48485 = G__48557;
chunk__47309_48486 = G__48558;
count__47310_48487 = G__48559;
i__47311_48488 = G__48560;
continue;
} else {
var child_struct_48561 = cljs.core.first(seq__47308_48555__$1);
var children_48562 = shadow.dom.dom_node(child_struct_48561);
if(cljs.core.seq_QMARK_(children_48562)){
var seq__47362_48563 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48562));
var chunk__47364_48564 = null;
var count__47365_48565 = (0);
var i__47366_48566 = (0);
while(true){
if((i__47366_48566 < count__47365_48565)){
var child_48570 = chunk__47364_48564.cljs$core$IIndexed$_nth$arity$2(null,i__47366_48566);
if(cljs.core.truth_(child_48570)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48570);


var G__48575 = seq__47362_48563;
var G__48576 = chunk__47364_48564;
var G__48577 = count__47365_48565;
var G__48578 = (i__47366_48566 + (1));
seq__47362_48563 = G__48575;
chunk__47364_48564 = G__48576;
count__47365_48565 = G__48577;
i__47366_48566 = G__48578;
continue;
} else {
var G__48581 = seq__47362_48563;
var G__48582 = chunk__47364_48564;
var G__48583 = count__47365_48565;
var G__48584 = (i__47366_48566 + (1));
seq__47362_48563 = G__48581;
chunk__47364_48564 = G__48582;
count__47365_48565 = G__48583;
i__47366_48566 = G__48584;
continue;
}
} else {
var temp__5735__auto___48585__$1 = cljs.core.seq(seq__47362_48563);
if(temp__5735__auto___48585__$1){
var seq__47362_48587__$1 = temp__5735__auto___48585__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47362_48587__$1)){
var c__4556__auto___48588 = cljs.core.chunk_first(seq__47362_48587__$1);
var G__48589 = cljs.core.chunk_rest(seq__47362_48587__$1);
var G__48590 = c__4556__auto___48588;
var G__48591 = cljs.core.count(c__4556__auto___48588);
var G__48592 = (0);
seq__47362_48563 = G__48589;
chunk__47364_48564 = G__48590;
count__47365_48565 = G__48591;
i__47366_48566 = G__48592;
continue;
} else {
var child_48594 = cljs.core.first(seq__47362_48587__$1);
if(cljs.core.truth_(child_48594)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48594);


var G__48595 = cljs.core.next(seq__47362_48587__$1);
var G__48596 = null;
var G__48597 = (0);
var G__48598 = (0);
seq__47362_48563 = G__48595;
chunk__47364_48564 = G__48596;
count__47365_48565 = G__48597;
i__47366_48566 = G__48598;
continue;
} else {
var G__48600 = cljs.core.next(seq__47362_48587__$1);
var G__48601 = null;
var G__48602 = (0);
var G__48603 = (0);
seq__47362_48563 = G__48600;
chunk__47364_48564 = G__48601;
count__47365_48565 = G__48602;
i__47366_48566 = G__48603;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48562);
}


var G__48605 = cljs.core.next(seq__47308_48555__$1);
var G__48606 = null;
var G__48607 = (0);
var G__48608 = (0);
seq__47308_48485 = G__48605;
chunk__47309_48486 = G__48606;
count__47310_48487 = G__48607;
i__47311_48488 = G__48608;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47406 = cljs.core.seq(node);
var chunk__47408 = null;
var count__47409 = (0);
var i__47410 = (0);
while(true){
if((i__47410 < count__47409)){
var n = chunk__47408.cljs$core$IIndexed$_nth$arity$2(null,i__47410);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48611 = seq__47406;
var G__48612 = chunk__47408;
var G__48613 = count__47409;
var G__48614 = (i__47410 + (1));
seq__47406 = G__48611;
chunk__47408 = G__48612;
count__47409 = G__48613;
i__47410 = G__48614;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47406);
if(temp__5735__auto__){
var seq__47406__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47406__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47406__$1);
var G__48615 = cljs.core.chunk_rest(seq__47406__$1);
var G__48616 = c__4556__auto__;
var G__48617 = cljs.core.count(c__4556__auto__);
var G__48618 = (0);
seq__47406 = G__48615;
chunk__47408 = G__48616;
count__47409 = G__48617;
i__47410 = G__48618;
continue;
} else {
var n = cljs.core.first(seq__47406__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48621 = cljs.core.next(seq__47406__$1);
var G__48622 = null;
var G__48623 = (0);
var G__48624 = (0);
seq__47406 = G__48621;
chunk__47408 = G__48622;
count__47409 = G__48623;
i__47410 = G__48624;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47429 = arguments.length;
switch (G__47429) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47436 = arguments.length;
switch (G__47436) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47454 = arguments.length;
switch (G__47454) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48646 = arguments.length;
var i__4737__auto___48647 = (0);
while(true){
if((i__4737__auto___48647 < len__4736__auto___48646)){
args__4742__auto__.push((arguments[i__4737__auto___48647]));

var G__48649 = (i__4737__auto___48647 + (1));
i__4737__auto___48647 = G__48649;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47480_48664 = cljs.core.seq(nodes);
var chunk__47481_48665 = null;
var count__47482_48666 = (0);
var i__47483_48667 = (0);
while(true){
if((i__47483_48667 < count__47482_48666)){
var node_48675 = chunk__47481_48665.cljs$core$IIndexed$_nth$arity$2(null,i__47483_48667);
fragment.appendChild(shadow.dom._to_dom(node_48675));


var G__48676 = seq__47480_48664;
var G__48677 = chunk__47481_48665;
var G__48678 = count__47482_48666;
var G__48679 = (i__47483_48667 + (1));
seq__47480_48664 = G__48676;
chunk__47481_48665 = G__48677;
count__47482_48666 = G__48678;
i__47483_48667 = G__48679;
continue;
} else {
var temp__5735__auto___48683 = cljs.core.seq(seq__47480_48664);
if(temp__5735__auto___48683){
var seq__47480_48684__$1 = temp__5735__auto___48683;
if(cljs.core.chunked_seq_QMARK_(seq__47480_48684__$1)){
var c__4556__auto___48689 = cljs.core.chunk_first(seq__47480_48684__$1);
var G__48690 = cljs.core.chunk_rest(seq__47480_48684__$1);
var G__48691 = c__4556__auto___48689;
var G__48692 = cljs.core.count(c__4556__auto___48689);
var G__48693 = (0);
seq__47480_48664 = G__48690;
chunk__47481_48665 = G__48691;
count__47482_48666 = G__48692;
i__47483_48667 = G__48693;
continue;
} else {
var node_48694 = cljs.core.first(seq__47480_48684__$1);
fragment.appendChild(shadow.dom._to_dom(node_48694));


var G__48696 = cljs.core.next(seq__47480_48684__$1);
var G__48697 = null;
var G__48698 = (0);
var G__48699 = (0);
seq__47480_48664 = G__48696;
chunk__47481_48665 = G__48697;
count__47482_48666 = G__48698;
i__47483_48667 = G__48699;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47477){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47477));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47495_48702 = cljs.core.seq(scripts);
var chunk__47496_48703 = null;
var count__47497_48704 = (0);
var i__47498_48705 = (0);
while(true){
if((i__47498_48705 < count__47497_48704)){
var vec__47510_48706 = chunk__47496_48703.cljs$core$IIndexed$_nth$arity$2(null,i__47498_48705);
var script_tag_48707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47510_48706,(0),null);
var script_body_48708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47510_48706,(1),null);
eval(script_body_48708);


var G__48710 = seq__47495_48702;
var G__48711 = chunk__47496_48703;
var G__48712 = count__47497_48704;
var G__48713 = (i__47498_48705 + (1));
seq__47495_48702 = G__48710;
chunk__47496_48703 = G__48711;
count__47497_48704 = G__48712;
i__47498_48705 = G__48713;
continue;
} else {
var temp__5735__auto___48715 = cljs.core.seq(seq__47495_48702);
if(temp__5735__auto___48715){
var seq__47495_48719__$1 = temp__5735__auto___48715;
if(cljs.core.chunked_seq_QMARK_(seq__47495_48719__$1)){
var c__4556__auto___48720 = cljs.core.chunk_first(seq__47495_48719__$1);
var G__48721 = cljs.core.chunk_rest(seq__47495_48719__$1);
var G__48722 = c__4556__auto___48720;
var G__48723 = cljs.core.count(c__4556__auto___48720);
var G__48724 = (0);
seq__47495_48702 = G__48721;
chunk__47496_48703 = G__48722;
count__47497_48704 = G__48723;
i__47498_48705 = G__48724;
continue;
} else {
var vec__47515_48727 = cljs.core.first(seq__47495_48719__$1);
var script_tag_48728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47515_48727,(0),null);
var script_body_48729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47515_48727,(1),null);
eval(script_body_48729);


var G__48730 = cljs.core.next(seq__47495_48719__$1);
var G__48731 = null;
var G__48732 = (0);
var G__48733 = (0);
seq__47495_48702 = G__48730;
chunk__47496_48703 = G__48731;
count__47497_48704 = G__48732;
i__47498_48705 = G__48733;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47520){
var vec__47522 = p__47520;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47522,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47522,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47537 = arguments.length;
switch (G__47537) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47573 = cljs.core.seq(style_keys);
var chunk__47574 = null;
var count__47575 = (0);
var i__47576 = (0);
while(true){
if((i__47576 < count__47575)){
var it = chunk__47574.cljs$core$IIndexed$_nth$arity$2(null,i__47576);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48749 = seq__47573;
var G__48750 = chunk__47574;
var G__48751 = count__47575;
var G__48752 = (i__47576 + (1));
seq__47573 = G__48749;
chunk__47574 = G__48750;
count__47575 = G__48751;
i__47576 = G__48752;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47573);
if(temp__5735__auto__){
var seq__47573__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47573__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47573__$1);
var G__48755 = cljs.core.chunk_rest(seq__47573__$1);
var G__48756 = c__4556__auto__;
var G__48757 = cljs.core.count(c__4556__auto__);
var G__48758 = (0);
seq__47573 = G__48755;
chunk__47574 = G__48756;
count__47575 = G__48757;
i__47576 = G__48758;
continue;
} else {
var it = cljs.core.first(seq__47573__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48759 = cljs.core.next(seq__47573__$1);
var G__48760 = null;
var G__48761 = (0);
var G__48762 = (0);
seq__47573 = G__48759;
chunk__47574 = G__48760;
count__47575 = G__48761;
i__47576 = G__48762;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47588,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47599 = k47588;
var G__47599__$1 = (((G__47599 instanceof cljs.core.Keyword))?G__47599.fqn:null);
switch (G__47599__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47588,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47602){
var vec__47604 = p__47602;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47604,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47604,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47587){
var self__ = this;
var G__47587__$1 = this;
return (new cljs.core.RecordIter((0),G__47587__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47589,other47590){
var self__ = this;
var this47589__$1 = this;
return (((!((other47590 == null)))) && ((this47589__$1.constructor === other47590.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47589__$1.x,other47590.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47589__$1.y,other47590.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47589__$1.__extmap,other47590.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47587){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47634 = cljs.core.keyword_identical_QMARK_;
var expr__47635 = k__4388__auto__;
if(cljs.core.truth_((pred__47634.cljs$core$IFn$_invoke$arity$2 ? pred__47634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47635) : pred__47634.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47635)))){
return (new shadow.dom.Coordinate(G__47587,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47634.cljs$core$IFn$_invoke$arity$2 ? pred__47634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47635) : pred__47634.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47635)))){
return (new shadow.dom.Coordinate(self__.x,G__47587,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47587),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47587){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47587,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47592){
var extmap__4419__auto__ = (function (){var G__47649 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47592,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47592)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47649);
} else {
return G__47649;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47592),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47592),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47664,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47675 = k47664;
var G__47675__$1 = (((G__47675 instanceof cljs.core.Keyword))?G__47675.fqn:null);
switch (G__47675__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47664,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47681){
var vec__47682 = p__47681;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47682,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47682,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47663){
var self__ = this;
var G__47663__$1 = this;
return (new cljs.core.RecordIter((0),G__47663__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47665,other47666){
var self__ = this;
var this47665__$1 = this;
return (((!((other47666 == null)))) && ((this47665__$1.constructor === other47666.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47665__$1.w,other47666.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47665__$1.h,other47666.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47665__$1.__extmap,other47666.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47663){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47733 = cljs.core.keyword_identical_QMARK_;
var expr__47734 = k__4388__auto__;
if(cljs.core.truth_((pred__47733.cljs$core$IFn$_invoke$arity$2 ? pred__47733.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47734) : pred__47733.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47734)))){
return (new shadow.dom.Size(G__47663,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47733.cljs$core$IFn$_invoke$arity$2 ? pred__47733.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47734) : pred__47733.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47734)))){
return (new shadow.dom.Size(self__.w,G__47663,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47663),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47663){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47663,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47669){
var extmap__4419__auto__ = (function (){var G__47758 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47669,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47669)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47758);
} else {
return G__47758;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47669),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47669),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__48881 = (i + (1));
var G__48882 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48881;
ret = G__48882;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47806){
var vec__47808 = p__47806;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47808,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47808,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47816 = arguments.length;
switch (G__47816) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48901 = ps;
var G__48902 = (i + (1));
el__$1 = G__48901;
i = G__48902;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47878 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47878,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47878,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47878,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47886_48919 = cljs.core.seq(props);
var chunk__47887_48920 = null;
var count__47888_48921 = (0);
var i__47889_48922 = (0);
while(true){
if((i__47889_48922 < count__47888_48921)){
var vec__47911_48923 = chunk__47887_48920.cljs$core$IIndexed$_nth$arity$2(null,i__47889_48922);
var k_48924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47911_48923,(0),null);
var v_48925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47911_48923,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48924);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48924),v_48925);


var G__48931 = seq__47886_48919;
var G__48932 = chunk__47887_48920;
var G__48933 = count__47888_48921;
var G__48934 = (i__47889_48922 + (1));
seq__47886_48919 = G__48931;
chunk__47887_48920 = G__48932;
count__47888_48921 = G__48933;
i__47889_48922 = G__48934;
continue;
} else {
var temp__5735__auto___48936 = cljs.core.seq(seq__47886_48919);
if(temp__5735__auto___48936){
var seq__47886_48939__$1 = temp__5735__auto___48936;
if(cljs.core.chunked_seq_QMARK_(seq__47886_48939__$1)){
var c__4556__auto___48940 = cljs.core.chunk_first(seq__47886_48939__$1);
var G__48942 = cljs.core.chunk_rest(seq__47886_48939__$1);
var G__48943 = c__4556__auto___48940;
var G__48944 = cljs.core.count(c__4556__auto___48940);
var G__48945 = (0);
seq__47886_48919 = G__48942;
chunk__47887_48920 = G__48943;
count__47888_48921 = G__48944;
i__47889_48922 = G__48945;
continue;
} else {
var vec__47924_48948 = cljs.core.first(seq__47886_48939__$1);
var k_48949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47924_48948,(0),null);
var v_48950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47924_48948,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48949);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48949),v_48950);


var G__48956 = cljs.core.next(seq__47886_48939__$1);
var G__48957 = null;
var G__48958 = (0);
var G__48959 = (0);
seq__47886_48919 = G__48956;
chunk__47887_48920 = G__48957;
count__47888_48921 = G__48958;
i__47889_48922 = G__48959;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47937 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47937,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47937,(1),null);
var seq__47940_48970 = cljs.core.seq(node_children);
var chunk__47942_48971 = null;
var count__47943_48972 = (0);
var i__47944_48973 = (0);
while(true){
if((i__47944_48973 < count__47943_48972)){
var child_struct_48974 = chunk__47942_48971.cljs$core$IIndexed$_nth$arity$2(null,i__47944_48973);
if((!((child_struct_48974 == null)))){
if(typeof child_struct_48974 === 'string'){
var text_48980 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48980),child_struct_48974].join(''));
} else {
var children_48981 = shadow.dom.svg_node(child_struct_48974);
if(cljs.core.seq_QMARK_(children_48981)){
var seq__48018_48982 = cljs.core.seq(children_48981);
var chunk__48020_48983 = null;
var count__48021_48984 = (0);
var i__48022_48985 = (0);
while(true){
if((i__48022_48985 < count__48021_48984)){
var child_48986 = chunk__48020_48983.cljs$core$IIndexed$_nth$arity$2(null,i__48022_48985);
if(cljs.core.truth_(child_48986)){
node.appendChild(child_48986);


var G__48990 = seq__48018_48982;
var G__48991 = chunk__48020_48983;
var G__48992 = count__48021_48984;
var G__48993 = (i__48022_48985 + (1));
seq__48018_48982 = G__48990;
chunk__48020_48983 = G__48991;
count__48021_48984 = G__48992;
i__48022_48985 = G__48993;
continue;
} else {
var G__48995 = seq__48018_48982;
var G__48996 = chunk__48020_48983;
var G__48997 = count__48021_48984;
var G__48998 = (i__48022_48985 + (1));
seq__48018_48982 = G__48995;
chunk__48020_48983 = G__48996;
count__48021_48984 = G__48997;
i__48022_48985 = G__48998;
continue;
}
} else {
var temp__5735__auto___48999 = cljs.core.seq(seq__48018_48982);
if(temp__5735__auto___48999){
var seq__48018_49000__$1 = temp__5735__auto___48999;
if(cljs.core.chunked_seq_QMARK_(seq__48018_49000__$1)){
var c__4556__auto___49003 = cljs.core.chunk_first(seq__48018_49000__$1);
var G__49004 = cljs.core.chunk_rest(seq__48018_49000__$1);
var G__49005 = c__4556__auto___49003;
var G__49006 = cljs.core.count(c__4556__auto___49003);
var G__49007 = (0);
seq__48018_48982 = G__49004;
chunk__48020_48983 = G__49005;
count__48021_48984 = G__49006;
i__48022_48985 = G__49007;
continue;
} else {
var child_49009 = cljs.core.first(seq__48018_49000__$1);
if(cljs.core.truth_(child_49009)){
node.appendChild(child_49009);


var G__49010 = cljs.core.next(seq__48018_49000__$1);
var G__49011 = null;
var G__49012 = (0);
var G__49013 = (0);
seq__48018_48982 = G__49010;
chunk__48020_48983 = G__49011;
count__48021_48984 = G__49012;
i__48022_48985 = G__49013;
continue;
} else {
var G__49014 = cljs.core.next(seq__48018_49000__$1);
var G__49015 = null;
var G__49016 = (0);
var G__49017 = (0);
seq__48018_48982 = G__49014;
chunk__48020_48983 = G__49015;
count__48021_48984 = G__49016;
i__48022_48985 = G__49017;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48981);
}
}


var G__49018 = seq__47940_48970;
var G__49019 = chunk__47942_48971;
var G__49020 = count__47943_48972;
var G__49021 = (i__47944_48973 + (1));
seq__47940_48970 = G__49018;
chunk__47942_48971 = G__49019;
count__47943_48972 = G__49020;
i__47944_48973 = G__49021;
continue;
} else {
var G__49022 = seq__47940_48970;
var G__49023 = chunk__47942_48971;
var G__49024 = count__47943_48972;
var G__49025 = (i__47944_48973 + (1));
seq__47940_48970 = G__49022;
chunk__47942_48971 = G__49023;
count__47943_48972 = G__49024;
i__47944_48973 = G__49025;
continue;
}
} else {
var temp__5735__auto___49027 = cljs.core.seq(seq__47940_48970);
if(temp__5735__auto___49027){
var seq__47940_49028__$1 = temp__5735__auto___49027;
if(cljs.core.chunked_seq_QMARK_(seq__47940_49028__$1)){
var c__4556__auto___49029 = cljs.core.chunk_first(seq__47940_49028__$1);
var G__49030 = cljs.core.chunk_rest(seq__47940_49028__$1);
var G__49031 = c__4556__auto___49029;
var G__49032 = cljs.core.count(c__4556__auto___49029);
var G__49033 = (0);
seq__47940_48970 = G__49030;
chunk__47942_48971 = G__49031;
count__47943_48972 = G__49032;
i__47944_48973 = G__49033;
continue;
} else {
var child_struct_49034 = cljs.core.first(seq__47940_49028__$1);
if((!((child_struct_49034 == null)))){
if(typeof child_struct_49034 === 'string'){
var text_49035 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49035),child_struct_49034].join(''));
} else {
var children_49036 = shadow.dom.svg_node(child_struct_49034);
if(cljs.core.seq_QMARK_(children_49036)){
var seq__48060_49038 = cljs.core.seq(children_49036);
var chunk__48062_49039 = null;
var count__48063_49040 = (0);
var i__48064_49041 = (0);
while(true){
if((i__48064_49041 < count__48063_49040)){
var child_49042 = chunk__48062_49039.cljs$core$IIndexed$_nth$arity$2(null,i__48064_49041);
if(cljs.core.truth_(child_49042)){
node.appendChild(child_49042);


var G__49043 = seq__48060_49038;
var G__49044 = chunk__48062_49039;
var G__49045 = count__48063_49040;
var G__49046 = (i__48064_49041 + (1));
seq__48060_49038 = G__49043;
chunk__48062_49039 = G__49044;
count__48063_49040 = G__49045;
i__48064_49041 = G__49046;
continue;
} else {
var G__49047 = seq__48060_49038;
var G__49048 = chunk__48062_49039;
var G__49049 = count__48063_49040;
var G__49050 = (i__48064_49041 + (1));
seq__48060_49038 = G__49047;
chunk__48062_49039 = G__49048;
count__48063_49040 = G__49049;
i__48064_49041 = G__49050;
continue;
}
} else {
var temp__5735__auto___49052__$1 = cljs.core.seq(seq__48060_49038);
if(temp__5735__auto___49052__$1){
var seq__48060_49053__$1 = temp__5735__auto___49052__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48060_49053__$1)){
var c__4556__auto___49055 = cljs.core.chunk_first(seq__48060_49053__$1);
var G__49056 = cljs.core.chunk_rest(seq__48060_49053__$1);
var G__49057 = c__4556__auto___49055;
var G__49058 = cljs.core.count(c__4556__auto___49055);
var G__49059 = (0);
seq__48060_49038 = G__49056;
chunk__48062_49039 = G__49057;
count__48063_49040 = G__49058;
i__48064_49041 = G__49059;
continue;
} else {
var child_49061 = cljs.core.first(seq__48060_49053__$1);
if(cljs.core.truth_(child_49061)){
node.appendChild(child_49061);


var G__49063 = cljs.core.next(seq__48060_49053__$1);
var G__49064 = null;
var G__49065 = (0);
var G__49066 = (0);
seq__48060_49038 = G__49063;
chunk__48062_49039 = G__49064;
count__48063_49040 = G__49065;
i__48064_49041 = G__49066;
continue;
} else {
var G__49067 = cljs.core.next(seq__48060_49053__$1);
var G__49068 = null;
var G__49069 = (0);
var G__49070 = (0);
seq__48060_49038 = G__49067;
chunk__48062_49039 = G__49068;
count__48063_49040 = G__49069;
i__48064_49041 = G__49070;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49036);
}
}


var G__49072 = cljs.core.next(seq__47940_49028__$1);
var G__49073 = null;
var G__49074 = (0);
var G__49075 = (0);
seq__47940_48970 = G__49072;
chunk__47942_48971 = G__49073;
count__47943_48972 = G__49074;
i__47944_48973 = G__49075;
continue;
} else {
var G__49076 = cljs.core.next(seq__47940_49028__$1);
var G__49077 = null;
var G__49078 = (0);
var G__49079 = (0);
seq__47940_48970 = G__49076;
chunk__47942_48971 = G__49077;
count__47943_48972 = G__49078;
i__47944_48973 = G__49079;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49082 = arguments.length;
var i__4737__auto___49086 = (0);
while(true){
if((i__4737__auto___49086 < len__4736__auto___49082)){
args__4742__auto__.push((arguments[i__4737__auto___49086]));

var G__49087 = (i__4737__auto___49086 + (1));
i__4737__auto___49086 = G__49087;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48096){
var G__48097 = cljs.core.first(seq48096);
var seq48096__$1 = cljs.core.next(seq48096);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48097,seq48096__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48106 = arguments.length;
switch (G__48106) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__44011__auto___49113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_48124){
var state_val_48125 = (state_48124[(1)]);
if((state_val_48125 === (1))){
var state_48124__$1 = state_48124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48124__$1,(2),once_or_cleanup);
} else {
if((state_val_48125 === (2))){
var inst_48121 = (state_48124[(2)]);
var inst_48122 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48124__$1 = (function (){var statearr_48140 = state_48124;
(statearr_48140[(7)] = inst_48121);

return statearr_48140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48124__$1,inst_48122);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43841__auto__ = null;
var shadow$dom$state_machine__43841__auto____0 = (function (){
var statearr_48146 = [null,null,null,null,null,null,null,null];
(statearr_48146[(0)] = shadow$dom$state_machine__43841__auto__);

(statearr_48146[(1)] = (1));

return statearr_48146;
});
var shadow$dom$state_machine__43841__auto____1 = (function (state_48124){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_48124);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e48152){var ex__43844__auto__ = e48152;
var statearr_48154_49129 = state_48124;
(statearr_48154_49129[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_48124[(4)]))){
var statearr_48157_49131 = state_48124;
(statearr_48157_49131[(1)] = cljs.core.first((state_48124[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49133 = state_48124;
state_48124 = G__49133;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
shadow$dom$state_machine__43841__auto__ = function(state_48124){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43841__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43841__auto____1.call(this,state_48124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43841__auto____0;
shadow$dom$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43841__auto____1;
return shadow$dom$state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_48164 = f__44012__auto__();
(statearr_48164[(6)] = c__44011__auto___49113);

return statearr_48164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
