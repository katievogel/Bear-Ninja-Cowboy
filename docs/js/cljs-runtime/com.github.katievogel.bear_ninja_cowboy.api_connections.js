goog.provide('com.github.katievogel.bear_ninja_cowboy.api_connections');
com.github.katievogel.bear_ninja_cowboy.api_connections.fetch_gif_BANG_ = (function com$github$katievogel$bear_ninja_cowboy$api_connections$fetch_gif_BANG_(winner,success_callback){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://api.giphy.com/v1/gifs/search",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"api_key","api_key",-1567758224),"FgUBaM6Yua0703Df7Y2I4lrReCPOiw54",new cljs.core.Keyword(null,"q","q",689001697),(function (){var G__51735 = winner;
var G__51735__$1 = (((G__51735 instanceof cljs.core.Keyword))?G__51735.fqn:null);
switch (G__51735__$1) {
case "bear":
return "bear";

break;
case "ninja":
return "ninja";

break;
case "cowboy":
return "cowboy";

break;
case "tie":
return "tug of war";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51735__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"limit","limit",-1355822363),(100),new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.rand_int((25)),new cljs.core.Keyword(null,"rating","rating",144173662),"g",new cljs.core.Keyword(null,"lang","lang",-1819677104),"en"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (gif_url){
var G__51738 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(gif_url,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"images","images",1757475080),new cljs.core.Keyword(null,"downsized_medium","downsized_medium",-661475068),new cljs.core.Keyword(null,"url","url",276297046)], null));
return (success_callback.cljs$core$IFn$_invoke$arity$1 ? success_callback.cljs$core$IFn$_invoke$arity$1(G__51738) : success_callback.call(null,G__51738));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (e){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["error",e], 0));
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)], 0));
});

//# sourceMappingURL=com.github.katievogel.bear_ninja_cowboy.api_connections.js.map
