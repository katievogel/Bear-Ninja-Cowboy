goog.provide('ajax.formats');
/**
 * This will literally return whatever the underlying implementation
 * considers has been sent. Obviously, this is highly implementation
 * dependent, gives different results depending on your platform but
 * is nonetheless really rather useful.
 */
ajax.formats.raw_response_format = (function ajax$formats$raw_response_format(var_args){
var G__51465 = arguments.length;
switch (G__51465) {
case 0:
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
}));

(ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();
}));

(ajax.formats.raw_response_format.cljs$lang$maxFixedArity = 1);

ajax.formats.text_request_format = (function ajax$formats$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.util.to_utf8_writer(cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain; charset=utf-8"], null);
});
ajax.formats.text_response_format = ajax.formats.raw_response_format;
ajax.formats.get_format = (function ajax$formats$get_format(var_args){
var G__51481 = arguments.length;
switch (G__51481) {
case 2:
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){

if((((format_entry == null)) || (cljs.core.map_QMARK_(format_entry)))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
}));

(ajax.formats.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){

if((((format_entry == null)) || (cljs.core.map_QMARK_(format_entry)))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});
}));

(ajax.formats.get_format.cljs$lang$maxFixedArity = 2);

ajax.formats.get_accept_entries = (function ajax$formats$get_accept_entries(var_args){
var G__51519 = arguments.length;
switch (G__51519) {
case 2:
return ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
}));

(ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
}));

(ajax.formats.get_accept_entries.cljs$lang$maxFixedArity = 2);

ajax.formats.content_type_matches = (function ajax$formats$content_type_matches(var_args){
var G__51554 = arguments.length;
switch (G__51554) {
case 2:
return ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0))));
}));

(ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0))));
});
}));

(ajax.formats.content_type_matches.cljs$lang$maxFixedArity = 2);

ajax.formats.detect_content_type = (function ajax$formats$detect_content_type(var_args){
var G__51585 = arguments.length;
switch (G__51585) {
case 3:
return ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
}));

(ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
}));

(ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
}));

(ajax.formats.detect_content_type.cljs$lang$maxFixedArity = 3);

ajax.formats.get_default_format = (function ajax$formats$get_default_format(response,p__51591){
var map__51592 = p__51591;
var map__51592__$1 = (((((!((map__51592 == null))))?(((((map__51592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51592):map__51592);
var request = map__51592__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51592__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$2(ajax.util.get_content_type(response),request);
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.formats.detect_response_format_read = (function ajax$formats$detect_response_format_read(var_args){
var G__51595 = arguments.length;
switch (G__51595) {
case 2:
return ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.formats.get_default_format(response,request);
var fexpr__51596 = new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format);
return (fexpr__51596.cljs$core$IFn$_invoke$arity$1 ? fexpr__51596.cljs$core$IFn$_invoke$arity$1(response) : fexpr__51596.call(null,response));
}));

(ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.formats.get_default_format(response,request);
var fexpr__51597 = new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format);
return (fexpr__51597.cljs$core$IFn$_invoke$arity$1 ? fexpr__51597.cljs$core$IFn$_invoke$arity$1(response) : fexpr__51597.call(null,response));
});
}));

(ajax.formats.detect_response_format_read.cljs$lang$maxFixedArity = 2);

ajax.formats.accept_header = (function ajax$formats$accept_header(p__51598){
var map__51599 = p__51598;
var map__51599__$1 = (((((!((map__51599 == null))))?(((((map__51599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51599):map__51599);
var request = map__51599__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51599__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_(response_format)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$1(request),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_format], 0));
} else {
return ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,response_format);
}
});
ajax.formats.detect_response_format = (function ajax$formats$detect_response_format(opts){

var accept = ajax.formats.accept_header(opts);
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"format","format",-1306924766),["(from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(accept),")"].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

//# sourceMappingURL=ajax.formats.js.map
