goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__43237 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__43238 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__43238);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__43239 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__43240 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__43240);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__43239);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__43237);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__43245 = arguments.length;
switch (G__43245) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__43249 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43249,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43249,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__43253_43280 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__43254_43281 = null;
var count__43255_43282 = (0);
var i__43256_43283 = (0);
while(true){
if((i__43256_43283 < count__43255_43282)){
var vec__43267_43284 = chunk__43254_43281.cljs$core$IIndexed$_nth$arity$2(null,i__43256_43283);
var container_43285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43267_43284,(0),null);
var comp_43286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43267_43284,(1),null);
reagent.dom.re_render_component(comp_43286,container_43285);


var G__43287 = seq__43253_43280;
var G__43288 = chunk__43254_43281;
var G__43289 = count__43255_43282;
var G__43290 = (i__43256_43283 + (1));
seq__43253_43280 = G__43287;
chunk__43254_43281 = G__43288;
count__43255_43282 = G__43289;
i__43256_43283 = G__43290;
continue;
} else {
var temp__5735__auto___43291 = cljs.core.seq(seq__43253_43280);
if(temp__5735__auto___43291){
var seq__43253_43292__$1 = temp__5735__auto___43291;
if(cljs.core.chunked_seq_QMARK_(seq__43253_43292__$1)){
var c__4556__auto___43293 = cljs.core.chunk_first(seq__43253_43292__$1);
var G__43295 = cljs.core.chunk_rest(seq__43253_43292__$1);
var G__43296 = c__4556__auto___43293;
var G__43297 = cljs.core.count(c__4556__auto___43293);
var G__43298 = (0);
seq__43253_43280 = G__43295;
chunk__43254_43281 = G__43296;
count__43255_43282 = G__43297;
i__43256_43283 = G__43298;
continue;
} else {
var vec__43271_43299 = cljs.core.first(seq__43253_43292__$1);
var container_43300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43271_43299,(0),null);
var comp_43301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43271_43299,(1),null);
reagent.dom.re_render_component(comp_43301,container_43300);


var G__43304 = cljs.core.next(seq__43253_43292__$1);
var G__43305 = null;
var G__43306 = (0);
var G__43307 = (0);
seq__43253_43280 = G__43304;
chunk__43254_43281 = G__43305;
count__43255_43282 = G__43306;
i__43256_43283 = G__43307;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
