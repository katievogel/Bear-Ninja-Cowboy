goog.provide('com.github.katievogel.bear_ninja_cowboy.core');
com.github.katievogel.bear_ninja_cowboy.core.Root = (function com$github$katievogel$bear_ninja_cowboy$core$Root(r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.bear_ninja_cowboy.html.BearNinjaCowboyApp,cljs.core.deref(r)], null);
});
com.github.katievogel.bear_ninja_cowboy.core.init_BANG_ = goog.functions.once((function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Welcome to Bear, Ninja, Cowboy! \uD83D\uDC3B"], 0));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.github.katievogel.bear_ninja_cowboy.core.Root,com.github.katievogel.bear_ninja_cowboy.state.app_db], null),goog.dom.getElement("appContainer"));
}));
(com.github.katievogel.bear_ninja_cowboy.core.init_BANG_.cljs$core$IFn$_invoke$arity$0 ? com.github.katievogel.bear_ninja_cowboy.core.init_BANG_.cljs$core$IFn$_invoke$arity$0() : com.github.katievogel.bear_ninja_cowboy.core.init_BANG_.call(null));

//# sourceMappingURL=com.github.katievogel.bear_ninja_cowboy.core.js.map
