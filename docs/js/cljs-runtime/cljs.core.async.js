goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44113 = arguments.length;
switch (G__44113) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44124 = (function (f,blockable,meta44125){
this.f = f;
this.blockable = blockable;
this.meta44125 = meta44125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44126,meta44125__$1){
var self__ = this;
var _44126__$1 = this;
return (new cljs.core.async.t_cljs$core$async44124(self__.f,self__.blockable,meta44125__$1));
}));

(cljs.core.async.t_cljs$core$async44124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44126){
var self__ = this;
var _44126__$1 = this;
return self__.meta44125;
}));

(cljs.core.async.t_cljs$core$async44124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44125","meta44125",-492756740,null)], null);
}));

(cljs.core.async.t_cljs$core$async44124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44124");

(cljs.core.async.t_cljs$core$async44124.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44124.
 */
cljs.core.async.__GT_t_cljs$core$async44124 = (function cljs$core$async$__GT_t_cljs$core$async44124(f__$1,blockable__$1,meta44125){
return (new cljs.core.async.t_cljs$core$async44124(f__$1,blockable__$1,meta44125));
});

}

return (new cljs.core.async.t_cljs$core$async44124(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44211 = arguments.length;
switch (G__44211) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44232 = arguments.length;
switch (G__44232) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44248 = arguments.length;
switch (G__44248) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47021 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47021) : fn1.call(null,val_47021));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47021) : fn1.call(null,val_47021));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44253 = arguments.length;
switch (G__44253) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___47036 = n;
var x_47037 = (0);
while(true){
if((x_47037 < n__4613__auto___47036)){
(a[x_47037] = x_47037);

var G__47038 = (x_47037 + (1));
x_47037 = G__47038;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44266 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44266 = (function (flag,meta44267){
this.flag = flag;
this.meta44267 = meta44267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44268,meta44267__$1){
var self__ = this;
var _44268__$1 = this;
return (new cljs.core.async.t_cljs$core$async44266(self__.flag,meta44267__$1));
}));

(cljs.core.async.t_cljs$core$async44266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44268){
var self__ = this;
var _44268__$1 = this;
return self__.meta44267;
}));

(cljs.core.async.t_cljs$core$async44266.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44266.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44267","meta44267",99037987,null)], null);
}));

(cljs.core.async.t_cljs$core$async44266.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44266");

(cljs.core.async.t_cljs$core$async44266.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44266");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44266.
 */
cljs.core.async.__GT_t_cljs$core$async44266 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44266(flag__$1,meta44267){
return (new cljs.core.async.t_cljs$core$async44266(flag__$1,meta44267));
});

}

return (new cljs.core.async.t_cljs$core$async44266(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44279 = (function (flag,cb,meta44280){
this.flag = flag;
this.cb = cb;
this.meta44280 = meta44280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44281,meta44280__$1){
var self__ = this;
var _44281__$1 = this;
return (new cljs.core.async.t_cljs$core$async44279(self__.flag,self__.cb,meta44280__$1));
}));

(cljs.core.async.t_cljs$core$async44279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44281){
var self__ = this;
var _44281__$1 = this;
return self__.meta44280;
}));

(cljs.core.async.t_cljs$core$async44279.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44279.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44280","meta44280",-438841169,null)], null);
}));

(cljs.core.async.t_cljs$core$async44279.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44279");

(cljs.core.async.t_cljs$core$async44279.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44279");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44279.
 */
cljs.core.async.__GT_t_cljs$core$async44279 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44279(flag__$1,cb__$1,meta44280){
return (new cljs.core.async.t_cljs$core$async44279(flag__$1,cb__$1,meta44280));
});

}

return (new cljs.core.async.t_cljs$core$async44279(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44289_SHARP_){
var G__44291 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44289_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44291) : fret.call(null,G__44291));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44290_SHARP_){
var G__44292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44290_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44292) : fret.call(null,G__44292));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47046 = (i + (1));
i = G__47046;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47050 = arguments.length;
var i__4737__auto___47051 = (0);
while(true){
if((i__4737__auto___47051 < len__4736__auto___47050)){
args__4742__auto__.push((arguments[i__4737__auto___47051]));

var G__47053 = (i__4737__auto___47051 + (1));
i__4737__auto___47051 = G__47053;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44298){
var map__44299 = p__44298;
var map__44299__$1 = (((((!((map__44299 == null))))?(((((map__44299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44299):map__44299);
var opts = map__44299__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44293){
var G__44294 = cljs.core.first(seq44293);
var seq44293__$1 = cljs.core.next(seq44293);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44294,seq44293__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44306 = arguments.length;
switch (G__44306) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44011__auto___47059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_44339){
var state_val_44340 = (state_44339[(1)]);
if((state_val_44340 === (7))){
var inst_44335 = (state_44339[(2)]);
var state_44339__$1 = state_44339;
var statearr_44344_47060 = state_44339__$1;
(statearr_44344_47060[(2)] = inst_44335);

(statearr_44344_47060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44340 === (1))){
var state_44339__$1 = state_44339;
var statearr_44345_47062 = state_44339__$1;
(statearr_44345_47062[(2)] = null);

(statearr_44345_47062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44340 === (4))){
var inst_44317 = (state_44339[(7)]);
var inst_44317__$1 = (state_44339[(2)]);
var inst_44318 = (inst_44317__$1 == null);
var state_44339__$1 = (function (){var statearr_44347 = state_44339;
(statearr_44347[(7)] = inst_44317__$1);

return statearr_44347;
})();
if(cljs.core.truth_(inst_44318)){
var statearr_44348_47064 = state_44339__$1;
(statearr_44348_47064[(1)] = (5));

} else {
var statearr_44349_47065 = state_44339__$1;
(statearr_44349_47065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44340 === (13))){
var state_44339__$1 = state_44339;
var statearr_44350_47067 = state_44339__$1;
(statearr_44350_47067[(2)] = null);

(statearr_44350_47067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44340 === (6))){
var inst_44317 = (state_44339[(7)]);
var state_44339__$1 = state_44339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44339__$1,(11),to,inst_44317);
} else {
if((state_val_44340 === (3))){
var inst_44337 = (state_44339[(2)]);
var state_44339__$1 = state_44339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44339__$1,inst_44337);
} else {
if((state_val_44340 === (12))){
var state_44339__$1 = state_44339;
var statearr_44356_47074 = state_44339__$1;
(statearr_44356_47074[(2)] = null);

(statearr_44356_47074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44340 === (2))){
var state_44339__$1 = state_44339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44339__$1,(4),from);
} else {
if((state_val_44340 === (11))){
var inst_44328 = (state_44339[(2)]);
var state_44339__$1 = state_44339;
if(cljs.core.truth_(inst_44328)){
var statearr_44361_47076 = state_44339__$1;
(statearr_44361_47076[(1)] = (12));

} else {
var statearr_44362_47077 = state_44339__$1;
(statearr_44362_47077[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44340 === (9))){
var state_44339__$1 = state_44339;
var statearr_44363_47078 = state_44339__$1;
(statearr_44363_47078[(2)] = null);

(statearr_44363_47078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44340 === (5))){
var state_44339__$1 = state_44339;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44364_47083 = state_44339__$1;
(statearr_44364_47083[(1)] = (8));

} else {
var statearr_44365_47086 = state_44339__$1;
(statearr_44365_47086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44340 === (14))){
var inst_44333 = (state_44339[(2)]);
var state_44339__$1 = state_44339;
var statearr_44370_47110 = state_44339__$1;
(statearr_44370_47110[(2)] = inst_44333);

(statearr_44370_47110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44340 === (10))){
var inst_44325 = (state_44339[(2)]);
var state_44339__$1 = state_44339;
var statearr_44371_47114 = state_44339__$1;
(statearr_44371_47114[(2)] = inst_44325);

(statearr_44371_47114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44340 === (8))){
var inst_44322 = cljs.core.async.close_BANG_(to);
var state_44339__$1 = state_44339;
var statearr_44376_47115 = state_44339__$1;
(statearr_44376_47115[(2)] = inst_44322);

(statearr_44376_47115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43841__auto__ = null;
var cljs$core$async$state_machine__43841__auto____0 = (function (){
var statearr_44391 = [null,null,null,null,null,null,null,null];
(statearr_44391[(0)] = cljs$core$async$state_machine__43841__auto__);

(statearr_44391[(1)] = (1));

return statearr_44391;
});
var cljs$core$async$state_machine__43841__auto____1 = (function (state_44339){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_44339);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e44407){var ex__43844__auto__ = e44407;
var statearr_44408_47118 = state_44339;
(statearr_44408_47118[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_44339[(4)]))){
var statearr_44415_47119 = state_44339;
(statearr_44415_47119[(1)] = cljs.core.first((state_44339[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47121 = state_44339;
state_44339 = G__47121;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$state_machine__43841__auto__ = function(state_44339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43841__auto____1.call(this,state_44339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43841__auto____0;
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43841__auto____1;
return cljs$core$async$state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_44419 = f__44012__auto__();
(statearr_44419[(6)] = c__44011__auto___47059);

return statearr_44419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__44425){
var vec__44427 = p__44425;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44427,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44427,(1),null);
var job = vec__44427;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44011__auto___47131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_44434){
var state_val_44435 = (state_44434[(1)]);
if((state_val_44435 === (1))){
var state_44434__$1 = state_44434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44434__$1,(2),res,v);
} else {
if((state_val_44435 === (2))){
var inst_44431 = (state_44434[(2)]);
var inst_44432 = cljs.core.async.close_BANG_(res);
var state_44434__$1 = (function (){var statearr_44442 = state_44434;
(statearr_44442[(7)] = inst_44431);

return statearr_44442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44434__$1,inst_44432);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0 = (function (){
var statearr_44443 = [null,null,null,null,null,null,null,null];
(statearr_44443[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__);

(statearr_44443[(1)] = (1));

return statearr_44443;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1 = (function (state_44434){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_44434);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e44447){var ex__43844__auto__ = e44447;
var statearr_44449_47137 = state_44434;
(statearr_44449_47137[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_44434[(4)]))){
var statearr_44451_47138 = state_44434;
(statearr_44451_47138[(1)] = cljs.core.first((state_44434[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47140 = state_44434;
state_44434 = G__47140;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__ = function(state_44434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1.call(this,state_44434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_44453 = f__44012__auto__();
(statearr_44453[(6)] = c__44011__auto___47131);

return statearr_44453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44454){
var vec__44456 = p__44454;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44456,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44456,(1),null);
var job = vec__44456;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___47143 = n;
var __47144 = (0);
while(true){
if((__47144 < n__4613__auto___47143)){
var G__44465_47145 = type;
var G__44465_47146__$1 = (((G__44465_47145 instanceof cljs.core.Keyword))?G__44465_47145.fqn:null);
switch (G__44465_47146__$1) {
case "compute":
var c__44011__auto___47148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47144,c__44011__auto___47148,G__44465_47145,G__44465_47146__$1,n__4613__auto___47143,jobs,results,process,async){
return (function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = ((function (__47144,c__44011__auto___47148,G__44465_47145,G__44465_47146__$1,n__4613__auto___47143,jobs,results,process,async){
return (function (state_44482){
var state_val_44483 = (state_44482[(1)]);
if((state_val_44483 === (1))){
var state_44482__$1 = state_44482;
var statearr_44484_47150 = state_44482__$1;
(statearr_44484_47150[(2)] = null);

(statearr_44484_47150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (2))){
var state_44482__$1 = state_44482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44482__$1,(4),jobs);
} else {
if((state_val_44483 === (3))){
var inst_44480 = (state_44482[(2)]);
var state_44482__$1 = state_44482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44482__$1,inst_44480);
} else {
if((state_val_44483 === (4))){
var inst_44471 = (state_44482[(2)]);
var inst_44472 = process(inst_44471);
var state_44482__$1 = state_44482;
if(cljs.core.truth_(inst_44472)){
var statearr_44492_47155 = state_44482__$1;
(statearr_44492_47155[(1)] = (5));

} else {
var statearr_44493_47156 = state_44482__$1;
(statearr_44493_47156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (5))){
var state_44482__$1 = state_44482;
var statearr_44494_47157 = state_44482__$1;
(statearr_44494_47157[(2)] = null);

(statearr_44494_47157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (6))){
var state_44482__$1 = state_44482;
var statearr_44496_47158 = state_44482__$1;
(statearr_44496_47158[(2)] = null);

(statearr_44496_47158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44483 === (7))){
var inst_44477 = (state_44482[(2)]);
var state_44482__$1 = state_44482;
var statearr_44499_47159 = state_44482__$1;
(statearr_44499_47159[(2)] = inst_44477);

(statearr_44499_47159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47144,c__44011__auto___47148,G__44465_47145,G__44465_47146__$1,n__4613__auto___47143,jobs,results,process,async))
;
return ((function (__47144,switch__43840__auto__,c__44011__auto___47148,G__44465_47145,G__44465_47146__$1,n__4613__auto___47143,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0 = (function (){
var statearr_44501 = [null,null,null,null,null,null,null];
(statearr_44501[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__);

(statearr_44501[(1)] = (1));

return statearr_44501;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1 = (function (state_44482){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_44482);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e44502){var ex__43844__auto__ = e44502;
var statearr_44503_47161 = state_44482;
(statearr_44503_47161[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_44482[(4)]))){
var statearr_44504_47162 = state_44482;
(statearr_44504_47162[(1)] = cljs.core.first((state_44482[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47163 = state_44482;
state_44482 = G__47163;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__ = function(state_44482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1.call(this,state_44482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__;
})()
;})(__47144,switch__43840__auto__,c__44011__auto___47148,G__44465_47145,G__44465_47146__$1,n__4613__auto___47143,jobs,results,process,async))
})();
var state__44013__auto__ = (function (){var statearr_44505 = f__44012__auto__();
(statearr_44505[(6)] = c__44011__auto___47148);

return statearr_44505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
});})(__47144,c__44011__auto___47148,G__44465_47145,G__44465_47146__$1,n__4613__auto___47143,jobs,results,process,async))
);


break;
case "async":
var c__44011__auto___47164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47144,c__44011__auto___47164,G__44465_47145,G__44465_47146__$1,n__4613__auto___47143,jobs,results,process,async){
return (function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = ((function (__47144,c__44011__auto___47164,G__44465_47145,G__44465_47146__$1,n__4613__auto___47143,jobs,results,process,async){
return (function (state_44518){
var state_val_44519 = (state_44518[(1)]);
if((state_val_44519 === (1))){
var state_44518__$1 = state_44518;
var statearr_44521_47165 = state_44518__$1;
(statearr_44521_47165[(2)] = null);

(statearr_44521_47165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44519 === (2))){
var state_44518__$1 = state_44518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44518__$1,(4),jobs);
} else {
if((state_val_44519 === (3))){
var inst_44516 = (state_44518[(2)]);
var state_44518__$1 = state_44518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44518__$1,inst_44516);
} else {
if((state_val_44519 === (4))){
var inst_44508 = (state_44518[(2)]);
var inst_44509 = async(inst_44508);
var state_44518__$1 = state_44518;
if(cljs.core.truth_(inst_44509)){
var statearr_44525_47168 = state_44518__$1;
(statearr_44525_47168[(1)] = (5));

} else {
var statearr_44526_47170 = state_44518__$1;
(statearr_44526_47170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44519 === (5))){
var state_44518__$1 = state_44518;
var statearr_44527_47171 = state_44518__$1;
(statearr_44527_47171[(2)] = null);

(statearr_44527_47171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44519 === (6))){
var state_44518__$1 = state_44518;
var statearr_44535_47172 = state_44518__$1;
(statearr_44535_47172[(2)] = null);

(statearr_44535_47172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44519 === (7))){
var inst_44514 = (state_44518[(2)]);
var state_44518__$1 = state_44518;
var statearr_44536_47174 = state_44518__$1;
(statearr_44536_47174[(2)] = inst_44514);

(statearr_44536_47174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47144,c__44011__auto___47164,G__44465_47145,G__44465_47146__$1,n__4613__auto___47143,jobs,results,process,async))
;
return ((function (__47144,switch__43840__auto__,c__44011__auto___47164,G__44465_47145,G__44465_47146__$1,n__4613__auto___47143,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0 = (function (){
var statearr_44543 = [null,null,null,null,null,null,null];
(statearr_44543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__);

(statearr_44543[(1)] = (1));

return statearr_44543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1 = (function (state_44518){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_44518);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e44544){var ex__43844__auto__ = e44544;
var statearr_44545_47176 = state_44518;
(statearr_44545_47176[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_44518[(4)]))){
var statearr_44546_47177 = state_44518;
(statearr_44546_47177[(1)] = cljs.core.first((state_44518[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47178 = state_44518;
state_44518 = G__47178;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__ = function(state_44518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1.call(this,state_44518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__;
})()
;})(__47144,switch__43840__auto__,c__44011__auto___47164,G__44465_47145,G__44465_47146__$1,n__4613__auto___47143,jobs,results,process,async))
})();
var state__44013__auto__ = (function (){var statearr_44548 = f__44012__auto__();
(statearr_44548[(6)] = c__44011__auto___47164);

return statearr_44548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
});})(__47144,c__44011__auto___47164,G__44465_47145,G__44465_47146__$1,n__4613__auto___47143,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44465_47146__$1)].join('')));

}

var G__47186 = (__47144 + (1));
__47144 = G__47186;
continue;
} else {
}
break;
}

var c__44011__auto___47187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_44577){
var state_val_44578 = (state_44577[(1)]);
if((state_val_44578 === (7))){
var inst_44572 = (state_44577[(2)]);
var state_44577__$1 = state_44577;
var statearr_44586_47191 = state_44577__$1;
(statearr_44586_47191[(2)] = inst_44572);

(statearr_44586_47191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (1))){
var state_44577__$1 = state_44577;
var statearr_44587_47192 = state_44577__$1;
(statearr_44587_47192[(2)] = null);

(statearr_44587_47192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (4))){
var inst_44554 = (state_44577[(7)]);
var inst_44554__$1 = (state_44577[(2)]);
var inst_44555 = (inst_44554__$1 == null);
var state_44577__$1 = (function (){var statearr_44591 = state_44577;
(statearr_44591[(7)] = inst_44554__$1);

return statearr_44591;
})();
if(cljs.core.truth_(inst_44555)){
var statearr_44596_47198 = state_44577__$1;
(statearr_44596_47198[(1)] = (5));

} else {
var statearr_44598_47199 = state_44577__$1;
(statearr_44598_47199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (6))){
var inst_44554 = (state_44577[(7)]);
var inst_44562 = (state_44577[(8)]);
var inst_44562__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44563 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44564 = [inst_44554,inst_44562__$1];
var inst_44565 = (new cljs.core.PersistentVector(null,2,(5),inst_44563,inst_44564,null));
var state_44577__$1 = (function (){var statearr_44599 = state_44577;
(statearr_44599[(8)] = inst_44562__$1);

return statearr_44599;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44577__$1,(8),jobs,inst_44565);
} else {
if((state_val_44578 === (3))){
var inst_44574 = (state_44577[(2)]);
var state_44577__$1 = state_44577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44577__$1,inst_44574);
} else {
if((state_val_44578 === (2))){
var state_44577__$1 = state_44577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44577__$1,(4),from);
} else {
if((state_val_44578 === (9))){
var inst_44569 = (state_44577[(2)]);
var state_44577__$1 = (function (){var statearr_44606 = state_44577;
(statearr_44606[(9)] = inst_44569);

return statearr_44606;
})();
var statearr_44607_47209 = state_44577__$1;
(statearr_44607_47209[(2)] = null);

(statearr_44607_47209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (5))){
var inst_44557 = cljs.core.async.close_BANG_(jobs);
var state_44577__$1 = state_44577;
var statearr_44611_47210 = state_44577__$1;
(statearr_44611_47210[(2)] = inst_44557);

(statearr_44611_47210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (8))){
var inst_44562 = (state_44577[(8)]);
var inst_44567 = (state_44577[(2)]);
var state_44577__$1 = (function (){var statearr_44613 = state_44577;
(statearr_44613[(10)] = inst_44567);

return statearr_44613;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44577__$1,(9),results,inst_44562);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0 = (function (){
var statearr_44616 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__);

(statearr_44616[(1)] = (1));

return statearr_44616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1 = (function (state_44577){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_44577);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e44618){var ex__43844__auto__ = e44618;
var statearr_44619_47222 = state_44577;
(statearr_44619_47222[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_44577[(4)]))){
var statearr_44620_47223 = state_44577;
(statearr_44620_47223[(1)] = cljs.core.first((state_44577[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47227 = state_44577;
state_44577 = G__47227;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__ = function(state_44577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1.call(this,state_44577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_44624 = f__44012__auto__();
(statearr_44624[(6)] = c__44011__auto___47187);

return statearr_44624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


var c__44011__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_44670){
var state_val_44671 = (state_44670[(1)]);
if((state_val_44671 === (7))){
var inst_44666 = (state_44670[(2)]);
var state_44670__$1 = state_44670;
var statearr_44672_47234 = state_44670__$1;
(statearr_44672_47234[(2)] = inst_44666);

(statearr_44672_47234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (20))){
var state_44670__$1 = state_44670;
var statearr_44673_47236 = state_44670__$1;
(statearr_44673_47236[(2)] = null);

(statearr_44673_47236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (1))){
var state_44670__$1 = state_44670;
var statearr_44674_47237 = state_44670__$1;
(statearr_44674_47237[(2)] = null);

(statearr_44674_47237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (4))){
var inst_44627 = (state_44670[(7)]);
var inst_44627__$1 = (state_44670[(2)]);
var inst_44633 = (inst_44627__$1 == null);
var state_44670__$1 = (function (){var statearr_44679 = state_44670;
(statearr_44679[(7)] = inst_44627__$1);

return statearr_44679;
})();
if(cljs.core.truth_(inst_44633)){
var statearr_44680_47241 = state_44670__$1;
(statearr_44680_47241[(1)] = (5));

} else {
var statearr_44681_47242 = state_44670__$1;
(statearr_44681_47242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (15))){
var inst_44648 = (state_44670[(8)]);
var state_44670__$1 = state_44670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44670__$1,(18),to,inst_44648);
} else {
if((state_val_44671 === (21))){
var inst_44661 = (state_44670[(2)]);
var state_44670__$1 = state_44670;
var statearr_44682_47245 = state_44670__$1;
(statearr_44682_47245[(2)] = inst_44661);

(statearr_44682_47245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (13))){
var inst_44663 = (state_44670[(2)]);
var state_44670__$1 = (function (){var statearr_44683 = state_44670;
(statearr_44683[(9)] = inst_44663);

return statearr_44683;
})();
var statearr_44684_47246 = state_44670__$1;
(statearr_44684_47246[(2)] = null);

(statearr_44684_47246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (6))){
var inst_44627 = (state_44670[(7)]);
var state_44670__$1 = state_44670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44670__$1,(11),inst_44627);
} else {
if((state_val_44671 === (17))){
var inst_44656 = (state_44670[(2)]);
var state_44670__$1 = state_44670;
if(cljs.core.truth_(inst_44656)){
var statearr_44689_47247 = state_44670__$1;
(statearr_44689_47247[(1)] = (19));

} else {
var statearr_44690_47248 = state_44670__$1;
(statearr_44690_47248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (3))){
var inst_44668 = (state_44670[(2)]);
var state_44670__$1 = state_44670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44670__$1,inst_44668);
} else {
if((state_val_44671 === (12))){
var inst_44645 = (state_44670[(10)]);
var state_44670__$1 = state_44670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44670__$1,(14),inst_44645);
} else {
if((state_val_44671 === (2))){
var state_44670__$1 = state_44670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44670__$1,(4),results);
} else {
if((state_val_44671 === (19))){
var state_44670__$1 = state_44670;
var statearr_44691_47253 = state_44670__$1;
(statearr_44691_47253[(2)] = null);

(statearr_44691_47253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (11))){
var inst_44645 = (state_44670[(2)]);
var state_44670__$1 = (function (){var statearr_44692 = state_44670;
(statearr_44692[(10)] = inst_44645);

return statearr_44692;
})();
var statearr_44693_47257 = state_44670__$1;
(statearr_44693_47257[(2)] = null);

(statearr_44693_47257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (9))){
var state_44670__$1 = state_44670;
var statearr_44694_47261 = state_44670__$1;
(statearr_44694_47261[(2)] = null);

(statearr_44694_47261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (5))){
var state_44670__$1 = state_44670;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44695_47263 = state_44670__$1;
(statearr_44695_47263[(1)] = (8));

} else {
var statearr_44696_47264 = state_44670__$1;
(statearr_44696_47264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (14))){
var inst_44648 = (state_44670[(8)]);
var inst_44648__$1 = (state_44670[(2)]);
var inst_44649 = (inst_44648__$1 == null);
var inst_44650 = cljs.core.not(inst_44649);
var state_44670__$1 = (function (){var statearr_44697 = state_44670;
(statearr_44697[(8)] = inst_44648__$1);

return statearr_44697;
})();
if(inst_44650){
var statearr_44698_47272 = state_44670__$1;
(statearr_44698_47272[(1)] = (15));

} else {
var statearr_44699_47273 = state_44670__$1;
(statearr_44699_47273[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (16))){
var state_44670__$1 = state_44670;
var statearr_44700_47278 = state_44670__$1;
(statearr_44700_47278[(2)] = false);

(statearr_44700_47278[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (10))){
var inst_44642 = (state_44670[(2)]);
var state_44670__$1 = state_44670;
var statearr_44701_47279 = state_44670__$1;
(statearr_44701_47279[(2)] = inst_44642);

(statearr_44701_47279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (18))){
var inst_44653 = (state_44670[(2)]);
var state_44670__$1 = state_44670;
var statearr_44707_47284 = state_44670__$1;
(statearr_44707_47284[(2)] = inst_44653);

(statearr_44707_47284[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44671 === (8))){
var inst_44636 = cljs.core.async.close_BANG_(to);
var state_44670__$1 = state_44670;
var statearr_44709_47285 = state_44670__$1;
(statearr_44709_47285[(2)] = inst_44636);

(statearr_44709_47285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0 = (function (){
var statearr_44711 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__);

(statearr_44711[(1)] = (1));

return statearr_44711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1 = (function (state_44670){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_44670);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e44712){var ex__43844__auto__ = e44712;
var statearr_44713_47291 = state_44670;
(statearr_44713_47291[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_44670[(4)]))){
var statearr_44714_47292 = state_44670;
(statearr_44714_47292[(1)] = cljs.core.first((state_44670[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47303 = state_44670;
state_44670 = G__47303;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__ = function(state_44670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1.call(this,state_44670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43841__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_44716 = f__44012__auto__();
(statearr_44716[(6)] = c__44011__auto__);

return statearr_44716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));

return c__44011__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44722 = arguments.length;
switch (G__44722) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44748 = arguments.length;
switch (G__44748) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44769 = arguments.length;
switch (G__44769) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44011__auto___47337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_44797){
var state_val_44798 = (state_44797[(1)]);
if((state_val_44798 === (7))){
var inst_44793 = (state_44797[(2)]);
var state_44797__$1 = state_44797;
var statearr_44802_47339 = state_44797__$1;
(statearr_44802_47339[(2)] = inst_44793);

(statearr_44802_47339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (1))){
var state_44797__$1 = state_44797;
var statearr_44803_47340 = state_44797__$1;
(statearr_44803_47340[(2)] = null);

(statearr_44803_47340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (4))){
var inst_44774 = (state_44797[(7)]);
var inst_44774__$1 = (state_44797[(2)]);
var inst_44775 = (inst_44774__$1 == null);
var state_44797__$1 = (function (){var statearr_44807 = state_44797;
(statearr_44807[(7)] = inst_44774__$1);

return statearr_44807;
})();
if(cljs.core.truth_(inst_44775)){
var statearr_44808_47347 = state_44797__$1;
(statearr_44808_47347[(1)] = (5));

} else {
var statearr_44809_47348 = state_44797__$1;
(statearr_44809_47348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (13))){
var state_44797__$1 = state_44797;
var statearr_44810_47349 = state_44797__$1;
(statearr_44810_47349[(2)] = null);

(statearr_44810_47349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (6))){
var inst_44774 = (state_44797[(7)]);
var inst_44780 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44774) : p.call(null,inst_44774));
var state_44797__$1 = state_44797;
if(cljs.core.truth_(inst_44780)){
var statearr_44811_47350 = state_44797__$1;
(statearr_44811_47350[(1)] = (9));

} else {
var statearr_44812_47351 = state_44797__$1;
(statearr_44812_47351[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (3))){
var inst_44795 = (state_44797[(2)]);
var state_44797__$1 = state_44797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44797__$1,inst_44795);
} else {
if((state_val_44798 === (12))){
var state_44797__$1 = state_44797;
var statearr_44813_47353 = state_44797__$1;
(statearr_44813_47353[(2)] = null);

(statearr_44813_47353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (2))){
var state_44797__$1 = state_44797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44797__$1,(4),ch);
} else {
if((state_val_44798 === (11))){
var inst_44774 = (state_44797[(7)]);
var inst_44784 = (state_44797[(2)]);
var state_44797__$1 = state_44797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44797__$1,(8),inst_44784,inst_44774);
} else {
if((state_val_44798 === (9))){
var state_44797__$1 = state_44797;
var statearr_44814_47357 = state_44797__$1;
(statearr_44814_47357[(2)] = tc);

(statearr_44814_47357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (5))){
var inst_44777 = cljs.core.async.close_BANG_(tc);
var inst_44778 = cljs.core.async.close_BANG_(fc);
var state_44797__$1 = (function (){var statearr_44815 = state_44797;
(statearr_44815[(8)] = inst_44777);

return statearr_44815;
})();
var statearr_44817_47358 = state_44797__$1;
(statearr_44817_47358[(2)] = inst_44778);

(statearr_44817_47358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (14))){
var inst_44791 = (state_44797[(2)]);
var state_44797__$1 = state_44797;
var statearr_44821_47361 = state_44797__$1;
(statearr_44821_47361[(2)] = inst_44791);

(statearr_44821_47361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (10))){
var state_44797__$1 = state_44797;
var statearr_44822_47368 = state_44797__$1;
(statearr_44822_47368[(2)] = fc);

(statearr_44822_47368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44798 === (8))){
var inst_44786 = (state_44797[(2)]);
var state_44797__$1 = state_44797;
if(cljs.core.truth_(inst_44786)){
var statearr_44829_47369 = state_44797__$1;
(statearr_44829_47369[(1)] = (12));

} else {
var statearr_44830_47374 = state_44797__$1;
(statearr_44830_47374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43841__auto__ = null;
var cljs$core$async$state_machine__43841__auto____0 = (function (){
var statearr_44831 = [null,null,null,null,null,null,null,null,null];
(statearr_44831[(0)] = cljs$core$async$state_machine__43841__auto__);

(statearr_44831[(1)] = (1));

return statearr_44831;
});
var cljs$core$async$state_machine__43841__auto____1 = (function (state_44797){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_44797);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e44832){var ex__43844__auto__ = e44832;
var statearr_44833_47381 = state_44797;
(statearr_44833_47381[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_44797[(4)]))){
var statearr_44834_47383 = state_44797;
(statearr_44834_47383[(1)] = cljs.core.first((state_44797[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47388 = state_44797;
state_44797 = G__47388;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$state_machine__43841__auto__ = function(state_44797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43841__auto____1.call(this,state_44797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43841__auto____0;
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43841__auto____1;
return cljs$core$async$state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_44835 = f__44012__auto__();
(statearr_44835[(6)] = c__44011__auto___47337);

return statearr_44835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44011__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_44860){
var state_val_44861 = (state_44860[(1)]);
if((state_val_44861 === (7))){
var inst_44856 = (state_44860[(2)]);
var state_44860__$1 = state_44860;
var statearr_44871_47393 = state_44860__$1;
(statearr_44871_47393[(2)] = inst_44856);

(statearr_44871_47393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (1))){
var inst_44839 = init;
var inst_44840 = inst_44839;
var state_44860__$1 = (function (){var statearr_44872 = state_44860;
(statearr_44872[(7)] = inst_44840);

return statearr_44872;
})();
var statearr_44873_47394 = state_44860__$1;
(statearr_44873_47394[(2)] = null);

(statearr_44873_47394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (4))){
var inst_44843 = (state_44860[(8)]);
var inst_44843__$1 = (state_44860[(2)]);
var inst_44844 = (inst_44843__$1 == null);
var state_44860__$1 = (function (){var statearr_44874 = state_44860;
(statearr_44874[(8)] = inst_44843__$1);

return statearr_44874;
})();
if(cljs.core.truth_(inst_44844)){
var statearr_44875_47397 = state_44860__$1;
(statearr_44875_47397[(1)] = (5));

} else {
var statearr_44876_47398 = state_44860__$1;
(statearr_44876_47398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (6))){
var inst_44847 = (state_44860[(9)]);
var inst_44840 = (state_44860[(7)]);
var inst_44843 = (state_44860[(8)]);
var inst_44847__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44840,inst_44843) : f.call(null,inst_44840,inst_44843));
var inst_44848 = cljs.core.reduced_QMARK_(inst_44847__$1);
var state_44860__$1 = (function (){var statearr_44877 = state_44860;
(statearr_44877[(9)] = inst_44847__$1);

return statearr_44877;
})();
if(inst_44848){
var statearr_44878_47399 = state_44860__$1;
(statearr_44878_47399[(1)] = (8));

} else {
var statearr_44879_47400 = state_44860__$1;
(statearr_44879_47400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (3))){
var inst_44858 = (state_44860[(2)]);
var state_44860__$1 = state_44860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44860__$1,inst_44858);
} else {
if((state_val_44861 === (2))){
var state_44860__$1 = state_44860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44860__$1,(4),ch);
} else {
if((state_val_44861 === (9))){
var inst_44847 = (state_44860[(9)]);
var inst_44840 = inst_44847;
var state_44860__$1 = (function (){var statearr_44880 = state_44860;
(statearr_44880[(7)] = inst_44840);

return statearr_44880;
})();
var statearr_44881_47404 = state_44860__$1;
(statearr_44881_47404[(2)] = null);

(statearr_44881_47404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (5))){
var inst_44840 = (state_44860[(7)]);
var state_44860__$1 = state_44860;
var statearr_44882_47405 = state_44860__$1;
(statearr_44882_47405[(2)] = inst_44840);

(statearr_44882_47405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (10))){
var inst_44854 = (state_44860[(2)]);
var state_44860__$1 = state_44860;
var statearr_44884_47412 = state_44860__$1;
(statearr_44884_47412[(2)] = inst_44854);

(statearr_44884_47412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (8))){
var inst_44847 = (state_44860[(9)]);
var inst_44850 = cljs.core.deref(inst_44847);
var state_44860__$1 = state_44860;
var statearr_44885_47413 = state_44860__$1;
(statearr_44885_47413[(2)] = inst_44850);

(statearr_44885_47413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43841__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43841__auto____0 = (function (){
var statearr_44888 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44888[(0)] = cljs$core$async$reduce_$_state_machine__43841__auto__);

(statearr_44888[(1)] = (1));

return statearr_44888;
});
var cljs$core$async$reduce_$_state_machine__43841__auto____1 = (function (state_44860){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_44860);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e44889){var ex__43844__auto__ = e44889;
var statearr_44890_47420 = state_44860;
(statearr_44890_47420[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_44860[(4)]))){
var statearr_44891_47421 = state_44860;
(statearr_44891_47421[(1)] = cljs.core.first((state_44860[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47422 = state_44860;
state_44860 = G__47422;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43841__auto__ = function(state_44860){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43841__auto____1.call(this,state_44860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43841__auto____0;
cljs$core$async$reduce_$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43841__auto____1;
return cljs$core$async$reduce_$_state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_44895 = f__44012__auto__();
(statearr_44895[(6)] = c__44011__auto__);

return statearr_44895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));

return c__44011__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44011__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_44910){
var state_val_44911 = (state_44910[(1)]);
if((state_val_44911 === (1))){
var inst_44905 = cljs.core.async.reduce(f__$1,init,ch);
var state_44910__$1 = state_44910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44910__$1,(2),inst_44905);
} else {
if((state_val_44911 === (2))){
var inst_44907 = (state_44910[(2)]);
var inst_44908 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44907) : f__$1.call(null,inst_44907));
var state_44910__$1 = state_44910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44910__$1,inst_44908);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43841__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43841__auto____0 = (function (){
var statearr_44912 = [null,null,null,null,null,null,null];
(statearr_44912[(0)] = cljs$core$async$transduce_$_state_machine__43841__auto__);

(statearr_44912[(1)] = (1));

return statearr_44912;
});
var cljs$core$async$transduce_$_state_machine__43841__auto____1 = (function (state_44910){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_44910);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e44917){var ex__43844__auto__ = e44917;
var statearr_44918_47435 = state_44910;
(statearr_44918_47435[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_44910[(4)]))){
var statearr_44919_47441 = state_44910;
(statearr_44919_47441[(1)] = cljs.core.first((state_44910[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47442 = state_44910;
state_44910 = G__47442;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43841__auto__ = function(state_44910){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43841__auto____1.call(this,state_44910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43841__auto____0;
cljs$core$async$transduce_$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43841__auto____1;
return cljs$core$async$transduce_$_state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_44928 = f__44012__auto__();
(statearr_44928[(6)] = c__44011__auto__);

return statearr_44928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));

return c__44011__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44942 = arguments.length;
switch (G__44942) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44011__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_44976){
var state_val_44977 = (state_44976[(1)]);
if((state_val_44977 === (7))){
var inst_44958 = (state_44976[(2)]);
var state_44976__$1 = state_44976;
var statearr_44979_47451 = state_44976__$1;
(statearr_44979_47451[(2)] = inst_44958);

(statearr_44979_47451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44977 === (1))){
var inst_44951 = cljs.core.seq(coll);
var inst_44952 = inst_44951;
var state_44976__$1 = (function (){var statearr_44980 = state_44976;
(statearr_44980[(7)] = inst_44952);

return statearr_44980;
})();
var statearr_44981_47452 = state_44976__$1;
(statearr_44981_47452[(2)] = null);

(statearr_44981_47452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44977 === (4))){
var inst_44952 = (state_44976[(7)]);
var inst_44956 = cljs.core.first(inst_44952);
var state_44976__$1 = state_44976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44976__$1,(7),ch,inst_44956);
} else {
if((state_val_44977 === (13))){
var inst_44970 = (state_44976[(2)]);
var state_44976__$1 = state_44976;
var statearr_44984_47455 = state_44976__$1;
(statearr_44984_47455[(2)] = inst_44970);

(statearr_44984_47455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44977 === (6))){
var inst_44961 = (state_44976[(2)]);
var state_44976__$1 = state_44976;
if(cljs.core.truth_(inst_44961)){
var statearr_44989_47458 = state_44976__$1;
(statearr_44989_47458[(1)] = (8));

} else {
var statearr_44990_47459 = state_44976__$1;
(statearr_44990_47459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44977 === (3))){
var inst_44974 = (state_44976[(2)]);
var state_44976__$1 = state_44976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44976__$1,inst_44974);
} else {
if((state_val_44977 === (12))){
var state_44976__$1 = state_44976;
var statearr_44992_47461 = state_44976__$1;
(statearr_44992_47461[(2)] = null);

(statearr_44992_47461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44977 === (2))){
var inst_44952 = (state_44976[(7)]);
var state_44976__$1 = state_44976;
if(cljs.core.truth_(inst_44952)){
var statearr_44993_47462 = state_44976__$1;
(statearr_44993_47462[(1)] = (4));

} else {
var statearr_44994_47464 = state_44976__$1;
(statearr_44994_47464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44977 === (11))){
var inst_44967 = cljs.core.async.close_BANG_(ch);
var state_44976__$1 = state_44976;
var statearr_44995_47467 = state_44976__$1;
(statearr_44995_47467[(2)] = inst_44967);

(statearr_44995_47467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44977 === (9))){
var state_44976__$1 = state_44976;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44996_47468 = state_44976__$1;
(statearr_44996_47468[(1)] = (11));

} else {
var statearr_44997_47469 = state_44976__$1;
(statearr_44997_47469[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44977 === (5))){
var inst_44952 = (state_44976[(7)]);
var state_44976__$1 = state_44976;
var statearr_44998_47471 = state_44976__$1;
(statearr_44998_47471[(2)] = inst_44952);

(statearr_44998_47471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44977 === (10))){
var inst_44972 = (state_44976[(2)]);
var state_44976__$1 = state_44976;
var statearr_45004_47472 = state_44976__$1;
(statearr_45004_47472[(2)] = inst_44972);

(statearr_45004_47472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44977 === (8))){
var inst_44952 = (state_44976[(7)]);
var inst_44963 = cljs.core.next(inst_44952);
var inst_44952__$1 = inst_44963;
var state_44976__$1 = (function (){var statearr_45013 = state_44976;
(statearr_45013[(7)] = inst_44952__$1);

return statearr_45013;
})();
var statearr_45015_47476 = state_44976__$1;
(statearr_45015_47476[(2)] = null);

(statearr_45015_47476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43841__auto__ = null;
var cljs$core$async$state_machine__43841__auto____0 = (function (){
var statearr_45026 = [null,null,null,null,null,null,null,null];
(statearr_45026[(0)] = cljs$core$async$state_machine__43841__auto__);

(statearr_45026[(1)] = (1));

return statearr_45026;
});
var cljs$core$async$state_machine__43841__auto____1 = (function (state_44976){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_44976);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e45027){var ex__43844__auto__ = e45027;
var statearr_45028_47479 = state_44976;
(statearr_45028_47479[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_44976[(4)]))){
var statearr_45029_47484 = state_44976;
(statearr_45029_47484[(1)] = cljs.core.first((state_44976[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47485 = state_44976;
state_44976 = G__47485;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$state_machine__43841__auto__ = function(state_44976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43841__auto____1.call(this,state_44976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43841__auto____0;
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43841__auto____1;
return cljs$core$async$state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_45031 = f__44012__auto__();
(statearr_45031[(6)] = c__44011__auto__);

return statearr_45031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));

return c__44011__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45054 = arguments.length;
switch (G__45054) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47491 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47491(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47502 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47502(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47514 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47514(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47528 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47528(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45117 = (function (ch,cs,meta45118){
this.ch = ch;
this.cs = cs;
this.meta45118 = meta45118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45119,meta45118__$1){
var self__ = this;
var _45119__$1 = this;
return (new cljs.core.async.t_cljs$core$async45117(self__.ch,self__.cs,meta45118__$1));
}));

(cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45119){
var self__ = this;
var _45119__$1 = this;
return self__.meta45118;
}));

(cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45118","meta45118",-705300651,null)], null);
}));

(cljs.core.async.t_cljs$core$async45117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45117");

(cljs.core.async.t_cljs$core$async45117.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45117.
 */
cljs.core.async.__GT_t_cljs$core$async45117 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45117(ch__$1,cs__$1,meta45118){
return (new cljs.core.async.t_cljs$core$async45117(ch__$1,cs__$1,meta45118));
});

}

return (new cljs.core.async.t_cljs$core$async45117(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44011__auto___47552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_45297){
var state_val_45298 = (state_45297[(1)]);
if((state_val_45298 === (7))){
var inst_45293 = (state_45297[(2)]);
var state_45297__$1 = state_45297;
var statearr_45309_47559 = state_45297__$1;
(statearr_45309_47559[(2)] = inst_45293);

(statearr_45309_47559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (20))){
var inst_45188 = (state_45297[(7)]);
var inst_45203 = cljs.core.first(inst_45188);
var inst_45204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45203,(0),null);
var inst_45205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45203,(1),null);
var state_45297__$1 = (function (){var statearr_45315 = state_45297;
(statearr_45315[(8)] = inst_45204);

return statearr_45315;
})();
if(cljs.core.truth_(inst_45205)){
var statearr_45317_47571 = state_45297__$1;
(statearr_45317_47571[(1)] = (22));

} else {
var statearr_45318_47572 = state_45297__$1;
(statearr_45318_47572[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (27))){
var inst_45241 = (state_45297[(9)]);
var inst_45146 = (state_45297[(10)]);
var inst_45236 = (state_45297[(11)]);
var inst_45234 = (state_45297[(12)]);
var inst_45241__$1 = cljs.core._nth(inst_45234,inst_45236);
var inst_45243 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45241__$1,inst_45146,done);
var state_45297__$1 = (function (){var statearr_45322 = state_45297;
(statearr_45322[(9)] = inst_45241__$1);

return statearr_45322;
})();
if(cljs.core.truth_(inst_45243)){
var statearr_45323_47578 = state_45297__$1;
(statearr_45323_47578[(1)] = (30));

} else {
var statearr_45326_47579 = state_45297__$1;
(statearr_45326_47579[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (1))){
var state_45297__$1 = state_45297;
var statearr_45328_47580 = state_45297__$1;
(statearr_45328_47580[(2)] = null);

(statearr_45328_47580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (24))){
var inst_45188 = (state_45297[(7)]);
var inst_45211 = (state_45297[(2)]);
var inst_45212 = cljs.core.next(inst_45188);
var inst_45159 = inst_45212;
var inst_45160 = null;
var inst_45161 = (0);
var inst_45162 = (0);
var state_45297__$1 = (function (){var statearr_45330 = state_45297;
(statearr_45330[(13)] = inst_45161);

(statearr_45330[(14)] = inst_45162);

(statearr_45330[(15)] = inst_45160);

(statearr_45330[(16)] = inst_45159);

(statearr_45330[(17)] = inst_45211);

return statearr_45330;
})();
var statearr_45332_47586 = state_45297__$1;
(statearr_45332_47586[(2)] = null);

(statearr_45332_47586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (39))){
var state_45297__$1 = state_45297;
var statearr_45338_47591 = state_45297__$1;
(statearr_45338_47591[(2)] = null);

(statearr_45338_47591[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (4))){
var inst_45146 = (state_45297[(10)]);
var inst_45146__$1 = (state_45297[(2)]);
var inst_45147 = (inst_45146__$1 == null);
var state_45297__$1 = (function (){var statearr_45340 = state_45297;
(statearr_45340[(10)] = inst_45146__$1);

return statearr_45340;
})();
if(cljs.core.truth_(inst_45147)){
var statearr_45342_47594 = state_45297__$1;
(statearr_45342_47594[(1)] = (5));

} else {
var statearr_45343_47595 = state_45297__$1;
(statearr_45343_47595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (15))){
var inst_45161 = (state_45297[(13)]);
var inst_45162 = (state_45297[(14)]);
var inst_45160 = (state_45297[(15)]);
var inst_45159 = (state_45297[(16)]);
var inst_45183 = (state_45297[(2)]);
var inst_45185 = (inst_45162 + (1));
var tmp45333 = inst_45161;
var tmp45334 = inst_45160;
var tmp45335 = inst_45159;
var inst_45159__$1 = tmp45335;
var inst_45160__$1 = tmp45334;
var inst_45161__$1 = tmp45333;
var inst_45162__$1 = inst_45185;
var state_45297__$1 = (function (){var statearr_45345 = state_45297;
(statearr_45345[(13)] = inst_45161__$1);

(statearr_45345[(14)] = inst_45162__$1);

(statearr_45345[(18)] = inst_45183);

(statearr_45345[(15)] = inst_45160__$1);

(statearr_45345[(16)] = inst_45159__$1);

return statearr_45345;
})();
var statearr_45347_47600 = state_45297__$1;
(statearr_45347_47600[(2)] = null);

(statearr_45347_47600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (21))){
var inst_45215 = (state_45297[(2)]);
var state_45297__$1 = state_45297;
var statearr_45352_47603 = state_45297__$1;
(statearr_45352_47603[(2)] = inst_45215);

(statearr_45352_47603[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (31))){
var inst_45241 = (state_45297[(9)]);
var inst_45246 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45241);
var state_45297__$1 = state_45297;
var statearr_45355_47607 = state_45297__$1;
(statearr_45355_47607[(2)] = inst_45246);

(statearr_45355_47607[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (32))){
var inst_45236 = (state_45297[(11)]);
var inst_45233 = (state_45297[(19)]);
var inst_45234 = (state_45297[(12)]);
var inst_45235 = (state_45297[(20)]);
var inst_45248 = (state_45297[(2)]);
var inst_45249 = (inst_45236 + (1));
var tmp45349 = inst_45233;
var tmp45350 = inst_45234;
var tmp45351 = inst_45235;
var inst_45233__$1 = tmp45349;
var inst_45234__$1 = tmp45350;
var inst_45235__$1 = tmp45351;
var inst_45236__$1 = inst_45249;
var state_45297__$1 = (function (){var statearr_45357 = state_45297;
(statearr_45357[(11)] = inst_45236__$1);

(statearr_45357[(19)] = inst_45233__$1);

(statearr_45357[(12)] = inst_45234__$1);

(statearr_45357[(20)] = inst_45235__$1);

(statearr_45357[(21)] = inst_45248);

return statearr_45357;
})();
var statearr_45358_47611 = state_45297__$1;
(statearr_45358_47611[(2)] = null);

(statearr_45358_47611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (40))){
var inst_45265 = (state_45297[(22)]);
var inst_45270 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45265);
var state_45297__$1 = state_45297;
var statearr_45362_47613 = state_45297__$1;
(statearr_45362_47613[(2)] = inst_45270);

(statearr_45362_47613[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (33))){
var inst_45254 = (state_45297[(23)]);
var inst_45256 = cljs.core.chunked_seq_QMARK_(inst_45254);
var state_45297__$1 = state_45297;
if(inst_45256){
var statearr_45374_47616 = state_45297__$1;
(statearr_45374_47616[(1)] = (36));

} else {
var statearr_45375_47618 = state_45297__$1;
(statearr_45375_47618[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (13))){
var inst_45173 = (state_45297[(24)]);
var inst_45180 = cljs.core.async.close_BANG_(inst_45173);
var state_45297__$1 = state_45297;
var statearr_45377_47622 = state_45297__$1;
(statearr_45377_47622[(2)] = inst_45180);

(statearr_45377_47622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (22))){
var inst_45204 = (state_45297[(8)]);
var inst_45208 = cljs.core.async.close_BANG_(inst_45204);
var state_45297__$1 = state_45297;
var statearr_45382_47629 = state_45297__$1;
(statearr_45382_47629[(2)] = inst_45208);

(statearr_45382_47629[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (36))){
var inst_45254 = (state_45297[(23)]);
var inst_45258 = cljs.core.chunk_first(inst_45254);
var inst_45261 = cljs.core.chunk_rest(inst_45254);
var inst_45262 = cljs.core.count(inst_45258);
var inst_45233 = inst_45261;
var inst_45234 = inst_45258;
var inst_45235 = inst_45262;
var inst_45236 = (0);
var state_45297__$1 = (function (){var statearr_45384 = state_45297;
(statearr_45384[(11)] = inst_45236);

(statearr_45384[(19)] = inst_45233);

(statearr_45384[(12)] = inst_45234);

(statearr_45384[(20)] = inst_45235);

return statearr_45384;
})();
var statearr_45385_47633 = state_45297__$1;
(statearr_45385_47633[(2)] = null);

(statearr_45385_47633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (41))){
var inst_45254 = (state_45297[(23)]);
var inst_45272 = (state_45297[(2)]);
var inst_45273 = cljs.core.next(inst_45254);
var inst_45233 = inst_45273;
var inst_45234 = null;
var inst_45235 = (0);
var inst_45236 = (0);
var state_45297__$1 = (function (){var statearr_45388 = state_45297;
(statearr_45388[(11)] = inst_45236);

(statearr_45388[(19)] = inst_45233);

(statearr_45388[(12)] = inst_45234);

(statearr_45388[(20)] = inst_45235);

(statearr_45388[(25)] = inst_45272);

return statearr_45388;
})();
var statearr_45389_47638 = state_45297__$1;
(statearr_45389_47638[(2)] = null);

(statearr_45389_47638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (43))){
var state_45297__$1 = state_45297;
var statearr_45392_47642 = state_45297__$1;
(statearr_45392_47642[(2)] = null);

(statearr_45392_47642[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (29))){
var inst_45281 = (state_45297[(2)]);
var state_45297__$1 = state_45297;
var statearr_45394_47643 = state_45297__$1;
(statearr_45394_47643[(2)] = inst_45281);

(statearr_45394_47643[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (44))){
var inst_45290 = (state_45297[(2)]);
var state_45297__$1 = (function (){var statearr_45396 = state_45297;
(statearr_45396[(26)] = inst_45290);

return statearr_45396;
})();
var statearr_45398_47645 = state_45297__$1;
(statearr_45398_47645[(2)] = null);

(statearr_45398_47645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (6))){
var inst_45225 = (state_45297[(27)]);
var inst_45224 = cljs.core.deref(cs);
var inst_45225__$1 = cljs.core.keys(inst_45224);
var inst_45226 = cljs.core.count(inst_45225__$1);
var inst_45227 = cljs.core.reset_BANG_(dctr,inst_45226);
var inst_45232 = cljs.core.seq(inst_45225__$1);
var inst_45233 = inst_45232;
var inst_45234 = null;
var inst_45235 = (0);
var inst_45236 = (0);
var state_45297__$1 = (function (){var statearr_45404 = state_45297;
(statearr_45404[(11)] = inst_45236);

(statearr_45404[(19)] = inst_45233);

(statearr_45404[(12)] = inst_45234);

(statearr_45404[(27)] = inst_45225__$1);

(statearr_45404[(28)] = inst_45227);

(statearr_45404[(20)] = inst_45235);

return statearr_45404;
})();
var statearr_45409_47652 = state_45297__$1;
(statearr_45409_47652[(2)] = null);

(statearr_45409_47652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (28))){
var inst_45233 = (state_45297[(19)]);
var inst_45254 = (state_45297[(23)]);
var inst_45254__$1 = cljs.core.seq(inst_45233);
var state_45297__$1 = (function (){var statearr_45411 = state_45297;
(statearr_45411[(23)] = inst_45254__$1);

return statearr_45411;
})();
if(inst_45254__$1){
var statearr_45412_47656 = state_45297__$1;
(statearr_45412_47656[(1)] = (33));

} else {
var statearr_45413_47657 = state_45297__$1;
(statearr_45413_47657[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (25))){
var inst_45236 = (state_45297[(11)]);
var inst_45235 = (state_45297[(20)]);
var inst_45238 = (inst_45236 < inst_45235);
var inst_45239 = inst_45238;
var state_45297__$1 = state_45297;
if(cljs.core.truth_(inst_45239)){
var statearr_45415_47661 = state_45297__$1;
(statearr_45415_47661[(1)] = (27));

} else {
var statearr_45416_47662 = state_45297__$1;
(statearr_45416_47662[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (34))){
var state_45297__$1 = state_45297;
var statearr_45417_47667 = state_45297__$1;
(statearr_45417_47667[(2)] = null);

(statearr_45417_47667[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (17))){
var state_45297__$1 = state_45297;
var statearr_45418_47670 = state_45297__$1;
(statearr_45418_47670[(2)] = null);

(statearr_45418_47670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (3))){
var inst_45295 = (state_45297[(2)]);
var state_45297__$1 = state_45297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45297__$1,inst_45295);
} else {
if((state_val_45298 === (12))){
var inst_45220 = (state_45297[(2)]);
var state_45297__$1 = state_45297;
var statearr_45420_47673 = state_45297__$1;
(statearr_45420_47673[(2)] = inst_45220);

(statearr_45420_47673[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (2))){
var state_45297__$1 = state_45297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45297__$1,(4),ch);
} else {
if((state_val_45298 === (23))){
var state_45297__$1 = state_45297;
var statearr_45429_47676 = state_45297__$1;
(statearr_45429_47676[(2)] = null);

(statearr_45429_47676[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (35))){
var inst_45279 = (state_45297[(2)]);
var state_45297__$1 = state_45297;
var statearr_45431_47679 = state_45297__$1;
(statearr_45431_47679[(2)] = inst_45279);

(statearr_45431_47679[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (19))){
var inst_45188 = (state_45297[(7)]);
var inst_45194 = cljs.core.chunk_first(inst_45188);
var inst_45195 = cljs.core.chunk_rest(inst_45188);
var inst_45197 = cljs.core.count(inst_45194);
var inst_45159 = inst_45195;
var inst_45160 = inst_45194;
var inst_45161 = inst_45197;
var inst_45162 = (0);
var state_45297__$1 = (function (){var statearr_45432 = state_45297;
(statearr_45432[(13)] = inst_45161);

(statearr_45432[(14)] = inst_45162);

(statearr_45432[(15)] = inst_45160);

(statearr_45432[(16)] = inst_45159);

return statearr_45432;
})();
var statearr_45433_47688 = state_45297__$1;
(statearr_45433_47688[(2)] = null);

(statearr_45433_47688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (11))){
var inst_45188 = (state_45297[(7)]);
var inst_45159 = (state_45297[(16)]);
var inst_45188__$1 = cljs.core.seq(inst_45159);
var state_45297__$1 = (function (){var statearr_45435 = state_45297;
(statearr_45435[(7)] = inst_45188__$1);

return statearr_45435;
})();
if(inst_45188__$1){
var statearr_45437_47697 = state_45297__$1;
(statearr_45437_47697[(1)] = (16));

} else {
var statearr_45439_47699 = state_45297__$1;
(statearr_45439_47699[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (9))){
var inst_45222 = (state_45297[(2)]);
var state_45297__$1 = state_45297;
var statearr_45442_47702 = state_45297__$1;
(statearr_45442_47702[(2)] = inst_45222);

(statearr_45442_47702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (5))){
var inst_45157 = cljs.core.deref(cs);
var inst_45158 = cljs.core.seq(inst_45157);
var inst_45159 = inst_45158;
var inst_45160 = null;
var inst_45161 = (0);
var inst_45162 = (0);
var state_45297__$1 = (function (){var statearr_45448 = state_45297;
(statearr_45448[(13)] = inst_45161);

(statearr_45448[(14)] = inst_45162);

(statearr_45448[(15)] = inst_45160);

(statearr_45448[(16)] = inst_45159);

return statearr_45448;
})();
var statearr_45449_47707 = state_45297__$1;
(statearr_45449_47707[(2)] = null);

(statearr_45449_47707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (14))){
var state_45297__$1 = state_45297;
var statearr_45455_47708 = state_45297__$1;
(statearr_45455_47708[(2)] = null);

(statearr_45455_47708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (45))){
var inst_45287 = (state_45297[(2)]);
var state_45297__$1 = state_45297;
var statearr_45457_47714 = state_45297__$1;
(statearr_45457_47714[(2)] = inst_45287);

(statearr_45457_47714[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (26))){
var inst_45225 = (state_45297[(27)]);
var inst_45283 = (state_45297[(2)]);
var inst_45284 = cljs.core.seq(inst_45225);
var state_45297__$1 = (function (){var statearr_45458 = state_45297;
(statearr_45458[(29)] = inst_45283);

return statearr_45458;
})();
if(inst_45284){
var statearr_45460_47720 = state_45297__$1;
(statearr_45460_47720[(1)] = (42));

} else {
var statearr_45462_47722 = state_45297__$1;
(statearr_45462_47722[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (16))){
var inst_45188 = (state_45297[(7)]);
var inst_45190 = cljs.core.chunked_seq_QMARK_(inst_45188);
var state_45297__$1 = state_45297;
if(inst_45190){
var statearr_45463_47724 = state_45297__$1;
(statearr_45463_47724[(1)] = (19));

} else {
var statearr_45466_47725 = state_45297__$1;
(statearr_45466_47725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (38))){
var inst_45276 = (state_45297[(2)]);
var state_45297__$1 = state_45297;
var statearr_45467_47730 = state_45297__$1;
(statearr_45467_47730[(2)] = inst_45276);

(statearr_45467_47730[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (30))){
var state_45297__$1 = state_45297;
var statearr_45469_47732 = state_45297__$1;
(statearr_45469_47732[(2)] = null);

(statearr_45469_47732[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (10))){
var inst_45162 = (state_45297[(14)]);
var inst_45160 = (state_45297[(15)]);
var inst_45172 = cljs.core._nth(inst_45160,inst_45162);
var inst_45173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45172,(0),null);
var inst_45175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45172,(1),null);
var state_45297__$1 = (function (){var statearr_45475 = state_45297;
(statearr_45475[(24)] = inst_45173);

return statearr_45475;
})();
if(cljs.core.truth_(inst_45175)){
var statearr_45476_47743 = state_45297__$1;
(statearr_45476_47743[(1)] = (13));

} else {
var statearr_45477_47744 = state_45297__$1;
(statearr_45477_47744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (18))){
var inst_45218 = (state_45297[(2)]);
var state_45297__$1 = state_45297;
var statearr_45478_47749 = state_45297__$1;
(statearr_45478_47749[(2)] = inst_45218);

(statearr_45478_47749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (42))){
var state_45297__$1 = state_45297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45297__$1,(45),dchan);
} else {
if((state_val_45298 === (37))){
var inst_45146 = (state_45297[(10)]);
var inst_45254 = (state_45297[(23)]);
var inst_45265 = (state_45297[(22)]);
var inst_45265__$1 = cljs.core.first(inst_45254);
var inst_45266 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45265__$1,inst_45146,done);
var state_45297__$1 = (function (){var statearr_45484 = state_45297;
(statearr_45484[(22)] = inst_45265__$1);

return statearr_45484;
})();
if(cljs.core.truth_(inst_45266)){
var statearr_45486_47754 = state_45297__$1;
(statearr_45486_47754[(1)] = (39));

} else {
var statearr_45488_47756 = state_45297__$1;
(statearr_45488_47756[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45298 === (8))){
var inst_45161 = (state_45297[(13)]);
var inst_45162 = (state_45297[(14)]);
var inst_45164 = (inst_45162 < inst_45161);
var inst_45165 = inst_45164;
var state_45297__$1 = state_45297;
if(cljs.core.truth_(inst_45165)){
var statearr_45489_47760 = state_45297__$1;
(statearr_45489_47760[(1)] = (10));

} else {
var statearr_45491_47761 = state_45297__$1;
(statearr_45491_47761[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__43841__auto__ = null;
var cljs$core$async$mult_$_state_machine__43841__auto____0 = (function (){
var statearr_45493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45493[(0)] = cljs$core$async$mult_$_state_machine__43841__auto__);

(statearr_45493[(1)] = (1));

return statearr_45493;
});
var cljs$core$async$mult_$_state_machine__43841__auto____1 = (function (state_45297){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_45297);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e45496){var ex__43844__auto__ = e45496;
var statearr_45497_47774 = state_45297;
(statearr_45497_47774[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_45297[(4)]))){
var statearr_45498_47775 = state_45297;
(statearr_45498_47775[(1)] = cljs.core.first((state_45297[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47776 = state_45297;
state_45297 = G__47776;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43841__auto__ = function(state_45297){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43841__auto____1.call(this,state_45297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43841__auto____0;
cljs$core$async$mult_$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43841__auto____1;
return cljs$core$async$mult_$_state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_45502 = f__44012__auto__();
(statearr_45502[(6)] = c__44011__auto___47552);

return statearr_45502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45507 = arguments.length;
switch (G__45507) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47794 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47794(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47811 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47811(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47817 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47817(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47831 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47831(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47838 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47838(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47850 = arguments.length;
var i__4737__auto___47851 = (0);
while(true){
if((i__4737__auto___47851 < len__4736__auto___47850)){
args__4742__auto__.push((arguments[i__4737__auto___47851]));

var G__47853 = (i__4737__auto___47851 + (1));
i__4737__auto___47851 = G__47853;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45547){
var map__45548 = p__45547;
var map__45548__$1 = (((((!((map__45548 == null))))?(((((map__45548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45548):map__45548);
var opts = map__45548__$1;
var statearr_45550_47859 = state;
(statearr_45550_47859[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45553_47860 = state;
(statearr_45553_47860[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_45555_47862 = state;
(statearr_45555_47862[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45538){
var G__45539 = cljs.core.first(seq45538);
var seq45538__$1 = cljs.core.next(seq45538);
var G__45540 = cljs.core.first(seq45538__$1);
var seq45538__$2 = cljs.core.next(seq45538__$1);
var G__45541 = cljs.core.first(seq45538__$2);
var seq45538__$3 = cljs.core.next(seq45538__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45539,G__45540,G__45541,seq45538__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45569 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45570){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45570 = meta45570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45571,meta45570__$1){
var self__ = this;
var _45571__$1 = this;
return (new cljs.core.async.t_cljs$core$async45569(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45570__$1));
}));

(cljs.core.async.t_cljs$core$async45569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45571){
var self__ = this;
var _45571__$1 = this;
return self__.meta45570;
}));

(cljs.core.async.t_cljs$core$async45569.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45569.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45569.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45569.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45569.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45569.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45569.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45570","meta45570",1684881199,null)], null);
}));

(cljs.core.async.t_cljs$core$async45569.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45569");

(cljs.core.async.t_cljs$core$async45569.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45569");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45569.
 */
cljs.core.async.__GT_t_cljs$core$async45569 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45569(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45570){
return (new cljs.core.async.t_cljs$core$async45569(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45570));
});

}

return (new cljs.core.async.t_cljs$core$async45569(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44011__auto___47934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_45709){
var state_val_45710 = (state_45709[(1)]);
if((state_val_45710 === (7))){
var inst_45616 = (state_45709[(2)]);
var state_45709__$1 = state_45709;
var statearr_45712_47936 = state_45709__$1;
(statearr_45712_47936[(2)] = inst_45616);

(statearr_45712_47936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (20))){
var inst_45628 = (state_45709[(7)]);
var state_45709__$1 = state_45709;
var statearr_45715_47947 = state_45709__$1;
(statearr_45715_47947[(2)] = inst_45628);

(statearr_45715_47947[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (27))){
var state_45709__$1 = state_45709;
var statearr_45716_47950 = state_45709__$1;
(statearr_45716_47950[(2)] = null);

(statearr_45716_47950[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (1))){
var inst_45599 = (state_45709[(8)]);
var inst_45599__$1 = calc_state();
var inst_45602 = (inst_45599__$1 == null);
var inst_45603 = cljs.core.not(inst_45602);
var state_45709__$1 = (function (){var statearr_45719 = state_45709;
(statearr_45719[(8)] = inst_45599__$1);

return statearr_45719;
})();
if(inst_45603){
var statearr_45720_47958 = state_45709__$1;
(statearr_45720_47958[(1)] = (2));

} else {
var statearr_45721_47959 = state_45709__$1;
(statearr_45721_47959[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (24))){
var inst_45663 = (state_45709[(9)]);
var inst_45654 = (state_45709[(10)]);
var inst_45679 = (state_45709[(11)]);
var inst_45679__$1 = (inst_45654.cljs$core$IFn$_invoke$arity$1 ? inst_45654.cljs$core$IFn$_invoke$arity$1(inst_45663) : inst_45654.call(null,inst_45663));
var state_45709__$1 = (function (){var statearr_45722 = state_45709;
(statearr_45722[(11)] = inst_45679__$1);

return statearr_45722;
})();
if(cljs.core.truth_(inst_45679__$1)){
var statearr_45723_47965 = state_45709__$1;
(statearr_45723_47965[(1)] = (29));

} else {
var statearr_45724_47966 = state_45709__$1;
(statearr_45724_47966[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (4))){
var inst_45619 = (state_45709[(2)]);
var state_45709__$1 = state_45709;
if(cljs.core.truth_(inst_45619)){
var statearr_45725_47967 = state_45709__$1;
(statearr_45725_47967[(1)] = (8));

} else {
var statearr_45726_47968 = state_45709__$1;
(statearr_45726_47968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (15))){
var inst_45648 = (state_45709[(2)]);
var state_45709__$1 = state_45709;
if(cljs.core.truth_(inst_45648)){
var statearr_45727_47971 = state_45709__$1;
(statearr_45727_47971[(1)] = (19));

} else {
var statearr_45729_47972 = state_45709__$1;
(statearr_45729_47972[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (21))){
var inst_45653 = (state_45709[(12)]);
var inst_45653__$1 = (state_45709[(2)]);
var inst_45654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45653__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45653__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45653__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45709__$1 = (function (){var statearr_45733 = state_45709;
(statearr_45733[(10)] = inst_45654);

(statearr_45733[(12)] = inst_45653__$1);

(statearr_45733[(13)] = inst_45655);

return statearr_45733;
})();
return cljs.core.async.ioc_alts_BANG_(state_45709__$1,(22),inst_45656);
} else {
if((state_val_45710 === (31))){
var inst_45690 = (state_45709[(2)]);
var state_45709__$1 = state_45709;
if(cljs.core.truth_(inst_45690)){
var statearr_45738_47991 = state_45709__$1;
(statearr_45738_47991[(1)] = (32));

} else {
var statearr_45739_47994 = state_45709__$1;
(statearr_45739_47994[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (32))){
var inst_45662 = (state_45709[(14)]);
var state_45709__$1 = state_45709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45709__$1,(35),out,inst_45662);
} else {
if((state_val_45710 === (33))){
var inst_45653 = (state_45709[(12)]);
var inst_45628 = inst_45653;
var state_45709__$1 = (function (){var statearr_45743 = state_45709;
(statearr_45743[(7)] = inst_45628);

return statearr_45743;
})();
var statearr_45744_48002 = state_45709__$1;
(statearr_45744_48002[(2)] = null);

(statearr_45744_48002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (13))){
var inst_45628 = (state_45709[(7)]);
var inst_45637 = inst_45628.cljs$lang$protocol_mask$partition0$;
var inst_45638 = (inst_45637 & (64));
var inst_45639 = inst_45628.cljs$core$ISeq$;
var inst_45640 = (cljs.core.PROTOCOL_SENTINEL === inst_45639);
var inst_45641 = ((inst_45638) || (inst_45640));
var state_45709__$1 = state_45709;
if(cljs.core.truth_(inst_45641)){
var statearr_45745_48006 = state_45709__$1;
(statearr_45745_48006[(1)] = (16));

} else {
var statearr_45746_48007 = state_45709__$1;
(statearr_45746_48007[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (22))){
var inst_45663 = (state_45709[(9)]);
var inst_45662 = (state_45709[(14)]);
var inst_45661 = (state_45709[(2)]);
var inst_45662__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45661,(0),null);
var inst_45663__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45661,(1),null);
var inst_45664 = (inst_45662__$1 == null);
var inst_45665 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45663__$1,change);
var inst_45666 = ((inst_45664) || (inst_45665));
var state_45709__$1 = (function (){var statearr_45747 = state_45709;
(statearr_45747[(9)] = inst_45663__$1);

(statearr_45747[(14)] = inst_45662__$1);

return statearr_45747;
})();
if(cljs.core.truth_(inst_45666)){
var statearr_45749_48017 = state_45709__$1;
(statearr_45749_48017[(1)] = (23));

} else {
var statearr_45750_48023 = state_45709__$1;
(statearr_45750_48023[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (36))){
var inst_45653 = (state_45709[(12)]);
var inst_45628 = inst_45653;
var state_45709__$1 = (function (){var statearr_45753 = state_45709;
(statearr_45753[(7)] = inst_45628);

return statearr_45753;
})();
var statearr_45755_48027 = state_45709__$1;
(statearr_45755_48027[(2)] = null);

(statearr_45755_48027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (29))){
var inst_45679 = (state_45709[(11)]);
var state_45709__$1 = state_45709;
var statearr_45758_48029 = state_45709__$1;
(statearr_45758_48029[(2)] = inst_45679);

(statearr_45758_48029[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (6))){
var state_45709__$1 = state_45709;
var statearr_45762_48037 = state_45709__$1;
(statearr_45762_48037[(2)] = false);

(statearr_45762_48037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (28))){
var inst_45673 = (state_45709[(2)]);
var inst_45675 = calc_state();
var inst_45628 = inst_45675;
var state_45709__$1 = (function (){var statearr_45765 = state_45709;
(statearr_45765[(15)] = inst_45673);

(statearr_45765[(7)] = inst_45628);

return statearr_45765;
})();
var statearr_45766_48052 = state_45709__$1;
(statearr_45766_48052[(2)] = null);

(statearr_45766_48052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (25))){
var inst_45704 = (state_45709[(2)]);
var state_45709__$1 = state_45709;
var statearr_45770_48057 = state_45709__$1;
(statearr_45770_48057[(2)] = inst_45704);

(statearr_45770_48057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (34))){
var inst_45702 = (state_45709[(2)]);
var state_45709__$1 = state_45709;
var statearr_45771_48066 = state_45709__$1;
(statearr_45771_48066[(2)] = inst_45702);

(statearr_45771_48066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (17))){
var state_45709__$1 = state_45709;
var statearr_45779_48067 = state_45709__$1;
(statearr_45779_48067[(2)] = false);

(statearr_45779_48067[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (3))){
var state_45709__$1 = state_45709;
var statearr_45783_48070 = state_45709__$1;
(statearr_45783_48070[(2)] = false);

(statearr_45783_48070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (12))){
var inst_45706 = (state_45709[(2)]);
var state_45709__$1 = state_45709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45709__$1,inst_45706);
} else {
if((state_val_45710 === (2))){
var inst_45599 = (state_45709[(8)]);
var inst_45607 = inst_45599.cljs$lang$protocol_mask$partition0$;
var inst_45609 = (inst_45607 & (64));
var inst_45610 = inst_45599.cljs$core$ISeq$;
var inst_45611 = (cljs.core.PROTOCOL_SENTINEL === inst_45610);
var inst_45612 = ((inst_45609) || (inst_45611));
var state_45709__$1 = state_45709;
if(cljs.core.truth_(inst_45612)){
var statearr_45792_48074 = state_45709__$1;
(statearr_45792_48074[(1)] = (5));

} else {
var statearr_45793_48075 = state_45709__$1;
(statearr_45793_48075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (23))){
var inst_45662 = (state_45709[(14)]);
var inst_45668 = (inst_45662 == null);
var state_45709__$1 = state_45709;
if(cljs.core.truth_(inst_45668)){
var statearr_45794_48078 = state_45709__$1;
(statearr_45794_48078[(1)] = (26));

} else {
var statearr_45795_48079 = state_45709__$1;
(statearr_45795_48079[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (35))){
var inst_45693 = (state_45709[(2)]);
var state_45709__$1 = state_45709;
if(cljs.core.truth_(inst_45693)){
var statearr_45798_48080 = state_45709__$1;
(statearr_45798_48080[(1)] = (36));

} else {
var statearr_45799_48085 = state_45709__$1;
(statearr_45799_48085[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (19))){
var inst_45628 = (state_45709[(7)]);
var inst_45650 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45628);
var state_45709__$1 = state_45709;
var statearr_45801_48086 = state_45709__$1;
(statearr_45801_48086[(2)] = inst_45650);

(statearr_45801_48086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (11))){
var inst_45628 = (state_45709[(7)]);
var inst_45633 = (inst_45628 == null);
var inst_45634 = cljs.core.not(inst_45633);
var state_45709__$1 = state_45709;
if(inst_45634){
var statearr_45802_48087 = state_45709__$1;
(statearr_45802_48087[(1)] = (13));

} else {
var statearr_45803_48088 = state_45709__$1;
(statearr_45803_48088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (9))){
var inst_45599 = (state_45709[(8)]);
var state_45709__$1 = state_45709;
var statearr_45806_48090 = state_45709__$1;
(statearr_45806_48090[(2)] = inst_45599);

(statearr_45806_48090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (5))){
var state_45709__$1 = state_45709;
var statearr_45808_48093 = state_45709__$1;
(statearr_45808_48093[(2)] = true);

(statearr_45808_48093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (14))){
var state_45709__$1 = state_45709;
var statearr_45810_48098 = state_45709__$1;
(statearr_45810_48098[(2)] = false);

(statearr_45810_48098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (26))){
var inst_45663 = (state_45709[(9)]);
var inst_45670 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45663);
var state_45709__$1 = state_45709;
var statearr_45811_48099 = state_45709__$1;
(statearr_45811_48099[(2)] = inst_45670);

(statearr_45811_48099[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (16))){
var state_45709__$1 = state_45709;
var statearr_45812_48100 = state_45709__$1;
(statearr_45812_48100[(2)] = true);

(statearr_45812_48100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (38))){
var inst_45698 = (state_45709[(2)]);
var state_45709__$1 = state_45709;
var statearr_45814_48101 = state_45709__$1;
(statearr_45814_48101[(2)] = inst_45698);

(statearr_45814_48101[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (30))){
var inst_45663 = (state_45709[(9)]);
var inst_45654 = (state_45709[(10)]);
var inst_45655 = (state_45709[(13)]);
var inst_45685 = cljs.core.empty_QMARK_(inst_45654);
var inst_45686 = (inst_45655.cljs$core$IFn$_invoke$arity$1 ? inst_45655.cljs$core$IFn$_invoke$arity$1(inst_45663) : inst_45655.call(null,inst_45663));
var inst_45687 = cljs.core.not(inst_45686);
var inst_45688 = ((inst_45685) && (inst_45687));
var state_45709__$1 = state_45709;
var statearr_45818_48102 = state_45709__$1;
(statearr_45818_48102[(2)] = inst_45688);

(statearr_45818_48102[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (10))){
var inst_45599 = (state_45709[(8)]);
var inst_45624 = (state_45709[(2)]);
var inst_45625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45624,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45624,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45624,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45628 = inst_45599;
var state_45709__$1 = (function (){var statearr_45827 = state_45709;
(statearr_45827[(16)] = inst_45627);

(statearr_45827[(17)] = inst_45625);

(statearr_45827[(7)] = inst_45628);

(statearr_45827[(18)] = inst_45626);

return statearr_45827;
})();
var statearr_45828_48115 = state_45709__$1;
(statearr_45828_48115[(2)] = null);

(statearr_45828_48115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (18))){
var inst_45645 = (state_45709[(2)]);
var state_45709__$1 = state_45709;
var statearr_45830_48118 = state_45709__$1;
(statearr_45830_48118[(2)] = inst_45645);

(statearr_45830_48118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (37))){
var state_45709__$1 = state_45709;
var statearr_45831_48126 = state_45709__$1;
(statearr_45831_48126[(2)] = null);

(statearr_45831_48126[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (8))){
var inst_45599 = (state_45709[(8)]);
var inst_45621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45599);
var state_45709__$1 = state_45709;
var statearr_45833_48134 = state_45709__$1;
(statearr_45833_48134[(2)] = inst_45621);

(statearr_45833_48134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__43841__auto__ = null;
var cljs$core$async$mix_$_state_machine__43841__auto____0 = (function (){
var statearr_45838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45838[(0)] = cljs$core$async$mix_$_state_machine__43841__auto__);

(statearr_45838[(1)] = (1));

return statearr_45838;
});
var cljs$core$async$mix_$_state_machine__43841__auto____1 = (function (state_45709){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_45709);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e45839){var ex__43844__auto__ = e45839;
var statearr_45842_48151 = state_45709;
(statearr_45842_48151[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_45709[(4)]))){
var statearr_45847_48153 = state_45709;
(statearr_45847_48153[(1)] = cljs.core.first((state_45709[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48162 = state_45709;
state_45709 = G__48162;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43841__auto__ = function(state_45709){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43841__auto____1.call(this,state_45709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43841__auto____0;
cljs$core$async$mix_$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43841__auto____1;
return cljs$core$async$mix_$_state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_45851 = f__44012__auto__();
(statearr_45851[(6)] = c__44011__auto___47934);

return statearr_45851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_48173 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48173(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48207 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48207(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48220 = (function() {
var G__48221 = null;
var G__48221__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48221__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48221 = function(p,v){
switch(arguments.length){
case 1:
return G__48221__1.call(this,p);
case 2:
return G__48221__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48221.cljs$core$IFn$_invoke$arity$1 = G__48221__1;
G__48221.cljs$core$IFn$_invoke$arity$2 = G__48221__2;
return G__48221;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45886 = arguments.length;
switch (G__45886) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48220(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48220(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45908 = arguments.length;
switch (G__45908) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45901_SHARP_){
if(cljs.core.truth_((p1__45901_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45901_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45901_SHARP_.call(null,topic)))){
return p1__45901_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45901_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45913 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45914){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45914 = meta45914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45915,meta45914__$1){
var self__ = this;
var _45915__$1 = this;
return (new cljs.core.async.t_cljs$core$async45913(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45914__$1));
}));

(cljs.core.async.t_cljs$core$async45913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45915){
var self__ = this;
var _45915__$1 = this;
return self__.meta45914;
}));

(cljs.core.async.t_cljs$core$async45913.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45913.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45913.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45913.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45913.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45913.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45913.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45914","meta45914",-568385967,null)], null);
}));

(cljs.core.async.t_cljs$core$async45913.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45913");

(cljs.core.async.t_cljs$core$async45913.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45913");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45913.
 */
cljs.core.async.__GT_t_cljs$core$async45913 = (function cljs$core$async$__GT_t_cljs$core$async45913(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45914){
return (new cljs.core.async.t_cljs$core$async45913(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45914));
});

}

return (new cljs.core.async.t_cljs$core$async45913(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44011__auto___48278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_46013){
var state_val_46014 = (state_46013[(1)]);
if((state_val_46014 === (7))){
var inst_46008 = (state_46013[(2)]);
var state_46013__$1 = state_46013;
var statearr_46018_48283 = state_46013__$1;
(statearr_46018_48283[(2)] = inst_46008);

(statearr_46018_48283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (20))){
var state_46013__$1 = state_46013;
var statearr_46021_48285 = state_46013__$1;
(statearr_46021_48285[(2)] = null);

(statearr_46021_48285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (1))){
var state_46013__$1 = state_46013;
var statearr_46024_48287 = state_46013__$1;
(statearr_46024_48287[(2)] = null);

(statearr_46024_48287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (24))){
var inst_45989 = (state_46013[(7)]);
var inst_46000 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45989);
var state_46013__$1 = state_46013;
var statearr_46026_48295 = state_46013__$1;
(statearr_46026_48295[(2)] = inst_46000);

(statearr_46026_48295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (4))){
var inst_45940 = (state_46013[(8)]);
var inst_45940__$1 = (state_46013[(2)]);
var inst_45941 = (inst_45940__$1 == null);
var state_46013__$1 = (function (){var statearr_46027 = state_46013;
(statearr_46027[(8)] = inst_45940__$1);

return statearr_46027;
})();
if(cljs.core.truth_(inst_45941)){
var statearr_46028_48302 = state_46013__$1;
(statearr_46028_48302[(1)] = (5));

} else {
var statearr_46030_48304 = state_46013__$1;
(statearr_46030_48304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (15))){
var inst_45983 = (state_46013[(2)]);
var state_46013__$1 = state_46013;
var statearr_46031_48306 = state_46013__$1;
(statearr_46031_48306[(2)] = inst_45983);

(statearr_46031_48306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (21))){
var inst_46005 = (state_46013[(2)]);
var state_46013__$1 = (function (){var statearr_46032 = state_46013;
(statearr_46032[(9)] = inst_46005);

return statearr_46032;
})();
var statearr_46033_48318 = state_46013__$1;
(statearr_46033_48318[(2)] = null);

(statearr_46033_48318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (13))){
var inst_45965 = (state_46013[(10)]);
var inst_45967 = cljs.core.chunked_seq_QMARK_(inst_45965);
var state_46013__$1 = state_46013;
if(inst_45967){
var statearr_46035_48324 = state_46013__$1;
(statearr_46035_48324[(1)] = (16));

} else {
var statearr_46036_48326 = state_46013__$1;
(statearr_46036_48326[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (22))){
var inst_45997 = (state_46013[(2)]);
var state_46013__$1 = state_46013;
if(cljs.core.truth_(inst_45997)){
var statearr_46039_48329 = state_46013__$1;
(statearr_46039_48329[(1)] = (23));

} else {
var statearr_46040_48330 = state_46013__$1;
(statearr_46040_48330[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (6))){
var inst_45993 = (state_46013[(11)]);
var inst_45989 = (state_46013[(7)]);
var inst_45940 = (state_46013[(8)]);
var inst_45989__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45940) : topic_fn.call(null,inst_45940));
var inst_45992 = cljs.core.deref(mults);
var inst_45993__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45992,inst_45989__$1);
var state_46013__$1 = (function (){var statearr_46043 = state_46013;
(statearr_46043[(11)] = inst_45993__$1);

(statearr_46043[(7)] = inst_45989__$1);

return statearr_46043;
})();
if(cljs.core.truth_(inst_45993__$1)){
var statearr_46045_48346 = state_46013__$1;
(statearr_46045_48346[(1)] = (19));

} else {
var statearr_46046_48351 = state_46013__$1;
(statearr_46046_48351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (25))){
var inst_46002 = (state_46013[(2)]);
var state_46013__$1 = state_46013;
var statearr_46047_48358 = state_46013__$1;
(statearr_46047_48358[(2)] = inst_46002);

(statearr_46047_48358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (17))){
var inst_45965 = (state_46013[(10)]);
var inst_45974 = cljs.core.first(inst_45965);
var inst_45975 = cljs.core.async.muxch_STAR_(inst_45974);
var inst_45976 = cljs.core.async.close_BANG_(inst_45975);
var inst_45977 = cljs.core.next(inst_45965);
var inst_45950 = inst_45977;
var inst_45951 = null;
var inst_45952 = (0);
var inst_45953 = (0);
var state_46013__$1 = (function (){var statearr_46048 = state_46013;
(statearr_46048[(12)] = inst_45951);

(statearr_46048[(13)] = inst_45950);

(statearr_46048[(14)] = inst_45953);

(statearr_46048[(15)] = inst_45976);

(statearr_46048[(16)] = inst_45952);

return statearr_46048;
})();
var statearr_46049_48368 = state_46013__$1;
(statearr_46049_48368[(2)] = null);

(statearr_46049_48368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (3))){
var inst_46010 = (state_46013[(2)]);
var state_46013__$1 = state_46013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46013__$1,inst_46010);
} else {
if((state_val_46014 === (12))){
var inst_45985 = (state_46013[(2)]);
var state_46013__$1 = state_46013;
var statearr_46052_48377 = state_46013__$1;
(statearr_46052_48377[(2)] = inst_45985);

(statearr_46052_48377[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (2))){
var state_46013__$1 = state_46013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46013__$1,(4),ch);
} else {
if((state_val_46014 === (23))){
var state_46013__$1 = state_46013;
var statearr_46053_48382 = state_46013__$1;
(statearr_46053_48382[(2)] = null);

(statearr_46053_48382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (19))){
var inst_45993 = (state_46013[(11)]);
var inst_45940 = (state_46013[(8)]);
var inst_45995 = cljs.core.async.muxch_STAR_(inst_45993);
var state_46013__$1 = state_46013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46013__$1,(22),inst_45995,inst_45940);
} else {
if((state_val_46014 === (11))){
var inst_45950 = (state_46013[(13)]);
var inst_45965 = (state_46013[(10)]);
var inst_45965__$1 = cljs.core.seq(inst_45950);
var state_46013__$1 = (function (){var statearr_46056 = state_46013;
(statearr_46056[(10)] = inst_45965__$1);

return statearr_46056;
})();
if(inst_45965__$1){
var statearr_46057_48405 = state_46013__$1;
(statearr_46057_48405[(1)] = (13));

} else {
var statearr_46058_48408 = state_46013__$1;
(statearr_46058_48408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (9))){
var inst_45987 = (state_46013[(2)]);
var state_46013__$1 = state_46013;
var statearr_46059_48411 = state_46013__$1;
(statearr_46059_48411[(2)] = inst_45987);

(statearr_46059_48411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (5))){
var inst_45947 = cljs.core.deref(mults);
var inst_45948 = cljs.core.vals(inst_45947);
var inst_45949 = cljs.core.seq(inst_45948);
var inst_45950 = inst_45949;
var inst_45951 = null;
var inst_45952 = (0);
var inst_45953 = (0);
var state_46013__$1 = (function (){var statearr_46060 = state_46013;
(statearr_46060[(12)] = inst_45951);

(statearr_46060[(13)] = inst_45950);

(statearr_46060[(14)] = inst_45953);

(statearr_46060[(16)] = inst_45952);

return statearr_46060;
})();
var statearr_46061_48428 = state_46013__$1;
(statearr_46061_48428[(2)] = null);

(statearr_46061_48428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (14))){
var state_46013__$1 = state_46013;
var statearr_46065_48432 = state_46013__$1;
(statearr_46065_48432[(2)] = null);

(statearr_46065_48432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (16))){
var inst_45965 = (state_46013[(10)]);
var inst_45969 = cljs.core.chunk_first(inst_45965);
var inst_45970 = cljs.core.chunk_rest(inst_45965);
var inst_45971 = cljs.core.count(inst_45969);
var inst_45950 = inst_45970;
var inst_45951 = inst_45969;
var inst_45952 = inst_45971;
var inst_45953 = (0);
var state_46013__$1 = (function (){var statearr_46066 = state_46013;
(statearr_46066[(12)] = inst_45951);

(statearr_46066[(13)] = inst_45950);

(statearr_46066[(14)] = inst_45953);

(statearr_46066[(16)] = inst_45952);

return statearr_46066;
})();
var statearr_46067_48436 = state_46013__$1;
(statearr_46067_48436[(2)] = null);

(statearr_46067_48436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (10))){
var inst_45951 = (state_46013[(12)]);
var inst_45950 = (state_46013[(13)]);
var inst_45953 = (state_46013[(14)]);
var inst_45952 = (state_46013[(16)]);
var inst_45959 = cljs.core._nth(inst_45951,inst_45953);
var inst_45960 = cljs.core.async.muxch_STAR_(inst_45959);
var inst_45961 = cljs.core.async.close_BANG_(inst_45960);
var inst_45962 = (inst_45953 + (1));
var tmp46062 = inst_45951;
var tmp46063 = inst_45950;
var tmp46064 = inst_45952;
var inst_45950__$1 = tmp46063;
var inst_45951__$1 = tmp46062;
var inst_45952__$1 = tmp46064;
var inst_45953__$1 = inst_45962;
var state_46013__$1 = (function (){var statearr_46070 = state_46013;
(statearr_46070[(12)] = inst_45951__$1);

(statearr_46070[(13)] = inst_45950__$1);

(statearr_46070[(14)] = inst_45953__$1);

(statearr_46070[(16)] = inst_45952__$1);

(statearr_46070[(17)] = inst_45961);

return statearr_46070;
})();
var statearr_46071_48447 = state_46013__$1;
(statearr_46071_48447[(2)] = null);

(statearr_46071_48447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (18))){
var inst_45980 = (state_46013[(2)]);
var state_46013__$1 = state_46013;
var statearr_46072_48450 = state_46013__$1;
(statearr_46072_48450[(2)] = inst_45980);

(statearr_46072_48450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (8))){
var inst_45953 = (state_46013[(14)]);
var inst_45952 = (state_46013[(16)]);
var inst_45956 = (inst_45953 < inst_45952);
var inst_45957 = inst_45956;
var state_46013__$1 = state_46013;
if(cljs.core.truth_(inst_45957)){
var statearr_46074_48456 = state_46013__$1;
(statearr_46074_48456[(1)] = (10));

} else {
var statearr_46075_48457 = state_46013__$1;
(statearr_46075_48457[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43841__auto__ = null;
var cljs$core$async$state_machine__43841__auto____0 = (function (){
var statearr_46078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46078[(0)] = cljs$core$async$state_machine__43841__auto__);

(statearr_46078[(1)] = (1));

return statearr_46078;
});
var cljs$core$async$state_machine__43841__auto____1 = (function (state_46013){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_46013);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e46081){var ex__43844__auto__ = e46081;
var statearr_46082_48467 = state_46013;
(statearr_46082_48467[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_46013[(4)]))){
var statearr_46083_48468 = state_46013;
(statearr_46083_48468[(1)] = cljs.core.first((state_46013[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48477 = state_46013;
state_46013 = G__48477;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$state_machine__43841__auto__ = function(state_46013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43841__auto____1.call(this,state_46013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43841__auto____0;
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43841__auto____1;
return cljs$core$async$state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_46086 = f__44012__auto__();
(statearr_46086[(6)] = c__44011__auto___48278);

return statearr_46086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46088 = arguments.length;
switch (G__46088) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46096 = arguments.length;
switch (G__46096) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46098 = arguments.length;
switch (G__46098) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__44011__auto___48511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_46146){
var state_val_46147 = (state_46146[(1)]);
if((state_val_46147 === (7))){
var state_46146__$1 = state_46146;
var statearr_46165_48524 = state_46146__$1;
(statearr_46165_48524[(2)] = null);

(statearr_46165_48524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (1))){
var state_46146__$1 = state_46146;
var statearr_46166_48533 = state_46146__$1;
(statearr_46166_48533[(2)] = null);

(statearr_46166_48533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (4))){
var inst_46107 = (state_46146[(7)]);
var inst_46106 = (state_46146[(8)]);
var inst_46109 = (inst_46107 < inst_46106);
var state_46146__$1 = state_46146;
if(cljs.core.truth_(inst_46109)){
var statearr_46167_48545 = state_46146__$1;
(statearr_46167_48545[(1)] = (6));

} else {
var statearr_46168_48550 = state_46146__$1;
(statearr_46168_48550[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (15))){
var inst_46132 = (state_46146[(9)]);
var inst_46137 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46132);
var state_46146__$1 = state_46146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46146__$1,(17),out,inst_46137);
} else {
if((state_val_46147 === (13))){
var inst_46132 = (state_46146[(9)]);
var inst_46132__$1 = (state_46146[(2)]);
var inst_46133 = cljs.core.some(cljs.core.nil_QMARK_,inst_46132__$1);
var state_46146__$1 = (function (){var statearr_46169 = state_46146;
(statearr_46169[(9)] = inst_46132__$1);

return statearr_46169;
})();
if(cljs.core.truth_(inst_46133)){
var statearr_46170_48567 = state_46146__$1;
(statearr_46170_48567[(1)] = (14));

} else {
var statearr_46171_48569 = state_46146__$1;
(statearr_46171_48569[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (6))){
var state_46146__$1 = state_46146;
var statearr_46173_48574 = state_46146__$1;
(statearr_46173_48574[(2)] = null);

(statearr_46173_48574[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (17))){
var inst_46139 = (state_46146[(2)]);
var state_46146__$1 = (function (){var statearr_46176 = state_46146;
(statearr_46176[(10)] = inst_46139);

return statearr_46176;
})();
var statearr_46177_48586 = state_46146__$1;
(statearr_46177_48586[(2)] = null);

(statearr_46177_48586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (3))){
var inst_46144 = (state_46146[(2)]);
var state_46146__$1 = state_46146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46146__$1,inst_46144);
} else {
if((state_val_46147 === (12))){
var _ = (function (){var statearr_46178 = state_46146;
(statearr_46178[(4)] = cljs.core.rest((state_46146[(4)])));

return statearr_46178;
})();
var state_46146__$1 = state_46146;
var ex46175 = (state_46146__$1[(2)]);
var statearr_46179_48599 = state_46146__$1;
(statearr_46179_48599[(5)] = ex46175);


if((ex46175 instanceof Object)){
var statearr_46180_48604 = state_46146__$1;
(statearr_46180_48604[(1)] = (11));

(statearr_46180_48604[(5)] = null);

} else {
throw ex46175;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (2))){
var inst_46105 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46106 = cnt;
var inst_46107 = (0);
var state_46146__$1 = (function (){var statearr_46185 = state_46146;
(statearr_46185[(11)] = inst_46105);

(statearr_46185[(7)] = inst_46107);

(statearr_46185[(8)] = inst_46106);

return statearr_46185;
})();
var statearr_46192_48609 = state_46146__$1;
(statearr_46192_48609[(2)] = null);

(statearr_46192_48609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (11))){
var inst_46111 = (state_46146[(2)]);
var inst_46112 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46146__$1 = (function (){var statearr_46193 = state_46146;
(statearr_46193[(12)] = inst_46111);

return statearr_46193;
})();
var statearr_46194_48610 = state_46146__$1;
(statearr_46194_48610[(2)] = inst_46112);

(statearr_46194_48610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (9))){
var inst_46107 = (state_46146[(7)]);
var _ = (function (){var statearr_46195 = state_46146;
(statearr_46195[(4)] = cljs.core.cons((12),(state_46146[(4)])));

return statearr_46195;
})();
var inst_46118 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46107) : chs__$1.call(null,inst_46107));
var inst_46119 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46107) : done.call(null,inst_46107));
var inst_46120 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46118,inst_46119);
var ___$1 = (function (){var statearr_46197 = state_46146;
(statearr_46197[(4)] = cljs.core.rest((state_46146[(4)])));

return statearr_46197;
})();
var state_46146__$1 = state_46146;
var statearr_46198_48629 = state_46146__$1;
(statearr_46198_48629[(2)] = inst_46120);

(statearr_46198_48629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (5))){
var inst_46130 = (state_46146[(2)]);
var state_46146__$1 = (function (){var statearr_46200 = state_46146;
(statearr_46200[(13)] = inst_46130);

return statearr_46200;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46146__$1,(13),dchan);
} else {
if((state_val_46147 === (14))){
var inst_46135 = cljs.core.async.close_BANG_(out);
var state_46146__$1 = state_46146;
var statearr_46201_48638 = state_46146__$1;
(statearr_46201_48638[(2)] = inst_46135);

(statearr_46201_48638[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (16))){
var inst_46142 = (state_46146[(2)]);
var state_46146__$1 = state_46146;
var statearr_46203_48639 = state_46146__$1;
(statearr_46203_48639[(2)] = inst_46142);

(statearr_46203_48639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (10))){
var inst_46107 = (state_46146[(7)]);
var inst_46123 = (state_46146[(2)]);
var inst_46124 = (inst_46107 + (1));
var inst_46107__$1 = inst_46124;
var state_46146__$1 = (function (){var statearr_46207 = state_46146;
(statearr_46207[(7)] = inst_46107__$1);

(statearr_46207[(14)] = inst_46123);

return statearr_46207;
})();
var statearr_46210_48641 = state_46146__$1;
(statearr_46210_48641[(2)] = null);

(statearr_46210_48641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (8))){
var inst_46128 = (state_46146[(2)]);
var state_46146__$1 = state_46146;
var statearr_46211_48642 = state_46146__$1;
(statearr_46211_48642[(2)] = inst_46128);

(statearr_46211_48642[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43841__auto__ = null;
var cljs$core$async$state_machine__43841__auto____0 = (function (){
var statearr_46214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46214[(0)] = cljs$core$async$state_machine__43841__auto__);

(statearr_46214[(1)] = (1));

return statearr_46214;
});
var cljs$core$async$state_machine__43841__auto____1 = (function (state_46146){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_46146);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e46215){var ex__43844__auto__ = e46215;
var statearr_46216_48650 = state_46146;
(statearr_46216_48650[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_46146[(4)]))){
var statearr_46218_48651 = state_46146;
(statearr_46218_48651[(1)] = cljs.core.first((state_46146[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48652 = state_46146;
state_46146 = G__48652;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$state_machine__43841__auto__ = function(state_46146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43841__auto____1.call(this,state_46146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43841__auto____0;
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43841__auto____1;
return cljs$core$async$state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_46221 = f__44012__auto__();
(statearr_46221[(6)] = c__44011__auto___48511);

return statearr_46221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46226 = arguments.length;
switch (G__46226) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44011__auto___48659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_46269){
var state_val_46270 = (state_46269[(1)]);
if((state_val_46270 === (7))){
var inst_46244 = (state_46269[(7)]);
var inst_46246 = (state_46269[(8)]);
var inst_46244__$1 = (state_46269[(2)]);
var inst_46246__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46244__$1,(0),null);
var inst_46247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46244__$1,(1),null);
var inst_46249 = (inst_46246__$1 == null);
var state_46269__$1 = (function (){var statearr_46280 = state_46269;
(statearr_46280[(9)] = inst_46247);

(statearr_46280[(7)] = inst_46244__$1);

(statearr_46280[(8)] = inst_46246__$1);

return statearr_46280;
})();
if(cljs.core.truth_(inst_46249)){
var statearr_46281_48695 = state_46269__$1;
(statearr_46281_48695[(1)] = (8));

} else {
var statearr_46283_48700 = state_46269__$1;
(statearr_46283_48700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46270 === (1))){
var inst_46230 = cljs.core.vec(chs);
var inst_46231 = inst_46230;
var state_46269__$1 = (function (){var statearr_46284 = state_46269;
(statearr_46284[(10)] = inst_46231);

return statearr_46284;
})();
var statearr_46285_48701 = state_46269__$1;
(statearr_46285_48701[(2)] = null);

(statearr_46285_48701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46270 === (4))){
var inst_46231 = (state_46269[(10)]);
var state_46269__$1 = state_46269;
return cljs.core.async.ioc_alts_BANG_(state_46269__$1,(7),inst_46231);
} else {
if((state_val_46270 === (6))){
var inst_46263 = (state_46269[(2)]);
var state_46269__$1 = state_46269;
var statearr_46286_48709 = state_46269__$1;
(statearr_46286_48709[(2)] = inst_46263);

(statearr_46286_48709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46270 === (3))){
var inst_46265 = (state_46269[(2)]);
var state_46269__$1 = state_46269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46269__$1,inst_46265);
} else {
if((state_val_46270 === (2))){
var inst_46231 = (state_46269[(10)]);
var inst_46236 = cljs.core.count(inst_46231);
var inst_46237 = (inst_46236 > (0));
var state_46269__$1 = state_46269;
if(cljs.core.truth_(inst_46237)){
var statearr_46288_48725 = state_46269__$1;
(statearr_46288_48725[(1)] = (4));

} else {
var statearr_46289_48726 = state_46269__$1;
(statearr_46289_48726[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46270 === (11))){
var inst_46231 = (state_46269[(10)]);
var inst_46256 = (state_46269[(2)]);
var tmp46287 = inst_46231;
var inst_46231__$1 = tmp46287;
var state_46269__$1 = (function (){var statearr_46291 = state_46269;
(statearr_46291[(10)] = inst_46231__$1);

(statearr_46291[(11)] = inst_46256);

return statearr_46291;
})();
var statearr_46293_48734 = state_46269__$1;
(statearr_46293_48734[(2)] = null);

(statearr_46293_48734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46270 === (9))){
var inst_46246 = (state_46269[(8)]);
var state_46269__$1 = state_46269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46269__$1,(11),out,inst_46246);
} else {
if((state_val_46270 === (5))){
var inst_46261 = cljs.core.async.close_BANG_(out);
var state_46269__$1 = state_46269;
var statearr_46297_48739 = state_46269__$1;
(statearr_46297_48739[(2)] = inst_46261);

(statearr_46297_48739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46270 === (10))){
var inst_46259 = (state_46269[(2)]);
var state_46269__$1 = state_46269;
var statearr_46299_48740 = state_46269__$1;
(statearr_46299_48740[(2)] = inst_46259);

(statearr_46299_48740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46270 === (8))){
var inst_46247 = (state_46269[(9)]);
var inst_46244 = (state_46269[(7)]);
var inst_46246 = (state_46269[(8)]);
var inst_46231 = (state_46269[(10)]);
var inst_46251 = (function (){var cs = inst_46231;
var vec__46239 = inst_46244;
var v = inst_46246;
var c = inst_46247;
return (function (p1__46222_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46222_SHARP_);
});
})();
var inst_46252 = cljs.core.filterv(inst_46251,inst_46231);
var inst_46231__$1 = inst_46252;
var state_46269__$1 = (function (){var statearr_46307 = state_46269;
(statearr_46307[(10)] = inst_46231__$1);

return statearr_46307;
})();
var statearr_46310_48742 = state_46269__$1;
(statearr_46310_48742[(2)] = null);

(statearr_46310_48742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43841__auto__ = null;
var cljs$core$async$state_machine__43841__auto____0 = (function (){
var statearr_46311 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46311[(0)] = cljs$core$async$state_machine__43841__auto__);

(statearr_46311[(1)] = (1));

return statearr_46311;
});
var cljs$core$async$state_machine__43841__auto____1 = (function (state_46269){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_46269);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e46313){var ex__43844__auto__ = e46313;
var statearr_46315_48743 = state_46269;
(statearr_46315_48743[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_46269[(4)]))){
var statearr_46316_48744 = state_46269;
(statearr_46316_48744[(1)] = cljs.core.first((state_46269[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48747 = state_46269;
state_46269 = G__48747;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$state_machine__43841__auto__ = function(state_46269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43841__auto____1.call(this,state_46269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43841__auto____0;
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43841__auto____1;
return cljs$core$async$state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_46317 = f__44012__auto__();
(statearr_46317[(6)] = c__44011__auto___48659);

return statearr_46317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46322 = arguments.length;
switch (G__46322) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44011__auto___48753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_46349){
var state_val_46350 = (state_46349[(1)]);
if((state_val_46350 === (7))){
var inst_46331 = (state_46349[(7)]);
var inst_46331__$1 = (state_46349[(2)]);
var inst_46332 = (inst_46331__$1 == null);
var inst_46333 = cljs.core.not(inst_46332);
var state_46349__$1 = (function (){var statearr_46351 = state_46349;
(statearr_46351[(7)] = inst_46331__$1);

return statearr_46351;
})();
if(inst_46333){
var statearr_46352_48766 = state_46349__$1;
(statearr_46352_48766[(1)] = (8));

} else {
var statearr_46353_48772 = state_46349__$1;
(statearr_46353_48772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (1))){
var inst_46325 = (0);
var state_46349__$1 = (function (){var statearr_46354 = state_46349;
(statearr_46354[(8)] = inst_46325);

return statearr_46354;
})();
var statearr_46355_48779 = state_46349__$1;
(statearr_46355_48779[(2)] = null);

(statearr_46355_48779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (4))){
var state_46349__$1 = state_46349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46349__$1,(7),ch);
} else {
if((state_val_46350 === (6))){
var inst_46344 = (state_46349[(2)]);
var state_46349__$1 = state_46349;
var statearr_46356_48787 = state_46349__$1;
(statearr_46356_48787[(2)] = inst_46344);

(statearr_46356_48787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (3))){
var inst_46346 = (state_46349[(2)]);
var inst_46347 = cljs.core.async.close_BANG_(out);
var state_46349__$1 = (function (){var statearr_46357 = state_46349;
(statearr_46357[(9)] = inst_46346);

return statearr_46357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46349__$1,inst_46347);
} else {
if((state_val_46350 === (2))){
var inst_46325 = (state_46349[(8)]);
var inst_46328 = (inst_46325 < n);
var state_46349__$1 = state_46349;
if(cljs.core.truth_(inst_46328)){
var statearr_46361_48788 = state_46349__$1;
(statearr_46361_48788[(1)] = (4));

} else {
var statearr_46362_48797 = state_46349__$1;
(statearr_46362_48797[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (11))){
var inst_46325 = (state_46349[(8)]);
var inst_46336 = (state_46349[(2)]);
var inst_46337 = (inst_46325 + (1));
var inst_46325__$1 = inst_46337;
var state_46349__$1 = (function (){var statearr_46366 = state_46349;
(statearr_46366[(10)] = inst_46336);

(statearr_46366[(8)] = inst_46325__$1);

return statearr_46366;
})();
var statearr_46367_48806 = state_46349__$1;
(statearr_46367_48806[(2)] = null);

(statearr_46367_48806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (9))){
var state_46349__$1 = state_46349;
var statearr_46371_48813 = state_46349__$1;
(statearr_46371_48813[(2)] = null);

(statearr_46371_48813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (5))){
var state_46349__$1 = state_46349;
var statearr_46373_48814 = state_46349__$1;
(statearr_46373_48814[(2)] = null);

(statearr_46373_48814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (10))){
var inst_46341 = (state_46349[(2)]);
var state_46349__$1 = state_46349;
var statearr_46374_48815 = state_46349__$1;
(statearr_46374_48815[(2)] = inst_46341);

(statearr_46374_48815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (8))){
var inst_46331 = (state_46349[(7)]);
var state_46349__$1 = state_46349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46349__$1,(11),out,inst_46331);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43841__auto__ = null;
var cljs$core$async$state_machine__43841__auto____0 = (function (){
var statearr_46377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46377[(0)] = cljs$core$async$state_machine__43841__auto__);

(statearr_46377[(1)] = (1));

return statearr_46377;
});
var cljs$core$async$state_machine__43841__auto____1 = (function (state_46349){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_46349);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e46381){var ex__43844__auto__ = e46381;
var statearr_46384_48820 = state_46349;
(statearr_46384_48820[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_46349[(4)]))){
var statearr_46385_48829 = state_46349;
(statearr_46385_48829[(1)] = cljs.core.first((state_46349[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48831 = state_46349;
state_46349 = G__48831;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$state_machine__43841__auto__ = function(state_46349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43841__auto____1.call(this,state_46349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43841__auto____0;
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43841__auto____1;
return cljs$core$async$state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_46392 = f__44012__auto__();
(statearr_46392[(6)] = c__44011__auto___48753);

return statearr_46392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46395 = (function (f,ch,meta46396){
this.f = f;
this.ch = ch;
this.meta46396 = meta46396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46397,meta46396__$1){
var self__ = this;
var _46397__$1 = this;
return (new cljs.core.async.t_cljs$core$async46395(self__.f,self__.ch,meta46396__$1));
}));

(cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46397){
var self__ = this;
var _46397__$1 = this;
return self__.meta46396;
}));

(cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46403 = (function (f,ch,meta46396,_,fn1,meta46404){
this.f = f;
this.ch = ch;
this.meta46396 = meta46396;
this._ = _;
this.fn1 = fn1;
this.meta46404 = meta46404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46405,meta46404__$1){
var self__ = this;
var _46405__$1 = this;
return (new cljs.core.async.t_cljs$core$async46403(self__.f,self__.ch,self__.meta46396,self__._,self__.fn1,meta46404__$1));
}));

(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46405){
var self__ = this;
var _46405__$1 = this;
return self__.meta46404;
}));

(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46394_SHARP_){
var G__46422 = (((p1__46394_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46394_SHARP_) : self__.f.call(null,p1__46394_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46422) : f1.call(null,G__46422));
});
}));

(cljs.core.async.t_cljs$core$async46403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46396","meta46396",-1136796715,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46395","cljs.core.async/t_cljs$core$async46395",-305677012,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46404","meta46404",-1100761948,null)], null);
}));

(cljs.core.async.t_cljs$core$async46403.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46403");

(cljs.core.async.t_cljs$core$async46403.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46403");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46403.
 */
cljs.core.async.__GT_t_cljs$core$async46403 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46403(f__$1,ch__$1,meta46396__$1,___$2,fn1__$1,meta46404){
return (new cljs.core.async.t_cljs$core$async46403(f__$1,ch__$1,meta46396__$1,___$2,fn1__$1,meta46404));
});

}

return (new cljs.core.async.t_cljs$core$async46403(self__.f,self__.ch,self__.meta46396,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46440 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46440) : self__.f.call(null,G__46440));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46395.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46396","meta46396",-1136796715,null)], null);
}));

(cljs.core.async.t_cljs$core$async46395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46395");

(cljs.core.async.t_cljs$core$async46395.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46395.
 */
cljs.core.async.__GT_t_cljs$core$async46395 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46395(f__$1,ch__$1,meta46396){
return (new cljs.core.async.t_cljs$core$async46395(f__$1,ch__$1,meta46396));
});

}

return (new cljs.core.async.t_cljs$core$async46395(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46450 = (function (f,ch,meta46451){
this.f = f;
this.ch = ch;
this.meta46451 = meta46451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46452,meta46451__$1){
var self__ = this;
var _46452__$1 = this;
return (new cljs.core.async.t_cljs$core$async46450(self__.f,self__.ch,meta46451__$1));
}));

(cljs.core.async.t_cljs$core$async46450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46452){
var self__ = this;
var _46452__$1 = this;
return self__.meta46451;
}));

(cljs.core.async.t_cljs$core$async46450.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46450.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46450.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46450.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46450.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46450.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46451","meta46451",-1618192207,null)], null);
}));

(cljs.core.async.t_cljs$core$async46450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46450");

(cljs.core.async.t_cljs$core$async46450.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46450.
 */
cljs.core.async.__GT_t_cljs$core$async46450 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46450(f__$1,ch__$1,meta46451){
return (new cljs.core.async.t_cljs$core$async46450(f__$1,ch__$1,meta46451));
});

}

return (new cljs.core.async.t_cljs$core$async46450(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46461 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46461 = (function (p,ch,meta46462){
this.p = p;
this.ch = ch;
this.meta46462 = meta46462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46463,meta46462__$1){
var self__ = this;
var _46463__$1 = this;
return (new cljs.core.async.t_cljs$core$async46461(self__.p,self__.ch,meta46462__$1));
}));

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46463){
var self__ = this;
var _46463__$1 = this;
return self__.meta46462;
}));

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46462","meta46462",-2101557886,null)], null);
}));

(cljs.core.async.t_cljs$core$async46461.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46461");

(cljs.core.async.t_cljs$core$async46461.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46461");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46461.
 */
cljs.core.async.__GT_t_cljs$core$async46461 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46461(p__$1,ch__$1,meta46462){
return (new cljs.core.async.t_cljs$core$async46461(p__$1,ch__$1,meta46462));
});

}

return (new cljs.core.async.t_cljs$core$async46461(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46478 = arguments.length;
switch (G__46478) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44011__auto___48860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_46520){
var state_val_46521 = (state_46520[(1)]);
if((state_val_46521 === (7))){
var inst_46515 = (state_46520[(2)]);
var state_46520__$1 = state_46520;
var statearr_46540_48869 = state_46520__$1;
(statearr_46540_48869[(2)] = inst_46515);

(statearr_46540_48869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46521 === (1))){
var state_46520__$1 = state_46520;
var statearr_46548_48870 = state_46520__$1;
(statearr_46548_48870[(2)] = null);

(statearr_46548_48870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46521 === (4))){
var inst_46493 = (state_46520[(7)]);
var inst_46493__$1 = (state_46520[(2)]);
var inst_46494 = (inst_46493__$1 == null);
var state_46520__$1 = (function (){var statearr_46551 = state_46520;
(statearr_46551[(7)] = inst_46493__$1);

return statearr_46551;
})();
if(cljs.core.truth_(inst_46494)){
var statearr_46552_48879 = state_46520__$1;
(statearr_46552_48879[(1)] = (5));

} else {
var statearr_46553_48880 = state_46520__$1;
(statearr_46553_48880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46521 === (6))){
var inst_46493 = (state_46520[(7)]);
var inst_46502 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46493) : p.call(null,inst_46493));
var state_46520__$1 = state_46520;
if(cljs.core.truth_(inst_46502)){
var statearr_46558_48886 = state_46520__$1;
(statearr_46558_48886[(1)] = (8));

} else {
var statearr_46559_48887 = state_46520__$1;
(statearr_46559_48887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46521 === (3))){
var inst_46517 = (state_46520[(2)]);
var state_46520__$1 = state_46520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46520__$1,inst_46517);
} else {
if((state_val_46521 === (2))){
var state_46520__$1 = state_46520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46520__$1,(4),ch);
} else {
if((state_val_46521 === (11))){
var inst_46505 = (state_46520[(2)]);
var state_46520__$1 = state_46520;
var statearr_46564_48891 = state_46520__$1;
(statearr_46564_48891[(2)] = inst_46505);

(statearr_46564_48891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46521 === (9))){
var state_46520__$1 = state_46520;
var statearr_46565_48893 = state_46520__$1;
(statearr_46565_48893[(2)] = null);

(statearr_46565_48893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46521 === (5))){
var inst_46496 = cljs.core.async.close_BANG_(out);
var state_46520__$1 = state_46520;
var statearr_46566_48894 = state_46520__$1;
(statearr_46566_48894[(2)] = inst_46496);

(statearr_46566_48894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46521 === (10))){
var inst_46512 = (state_46520[(2)]);
var state_46520__$1 = (function (){var statearr_46567 = state_46520;
(statearr_46567[(8)] = inst_46512);

return statearr_46567;
})();
var statearr_46572_48897 = state_46520__$1;
(statearr_46572_48897[(2)] = null);

(statearr_46572_48897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46521 === (8))){
var inst_46493 = (state_46520[(7)]);
var state_46520__$1 = state_46520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46520__$1,(11),out,inst_46493);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43841__auto__ = null;
var cljs$core$async$state_machine__43841__auto____0 = (function (){
var statearr_46573 = [null,null,null,null,null,null,null,null,null];
(statearr_46573[(0)] = cljs$core$async$state_machine__43841__auto__);

(statearr_46573[(1)] = (1));

return statearr_46573;
});
var cljs$core$async$state_machine__43841__auto____1 = (function (state_46520){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_46520);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e46574){var ex__43844__auto__ = e46574;
var statearr_46575_48903 = state_46520;
(statearr_46575_48903[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_46520[(4)]))){
var statearr_46578_48908 = state_46520;
(statearr_46578_48908[(1)] = cljs.core.first((state_46520[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48910 = state_46520;
state_46520 = G__48910;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$state_machine__43841__auto__ = function(state_46520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43841__auto____1.call(this,state_46520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43841__auto____0;
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43841__auto____1;
return cljs$core$async$state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_46581 = f__44012__auto__();
(statearr_46581[(6)] = c__44011__auto___48860);

return statearr_46581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46583 = arguments.length;
switch (G__46583) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44011__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_46649){
var state_val_46650 = (state_46649[(1)]);
if((state_val_46650 === (7))){
var inst_46645 = (state_46649[(2)]);
var state_46649__$1 = state_46649;
var statearr_46653_48929 = state_46649__$1;
(statearr_46653_48929[(2)] = inst_46645);

(statearr_46653_48929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (20))){
var inst_46614 = (state_46649[(7)]);
var inst_46625 = (state_46649[(2)]);
var inst_46626 = cljs.core.next(inst_46614);
var inst_46599 = inst_46626;
var inst_46600 = null;
var inst_46601 = (0);
var inst_46602 = (0);
var state_46649__$1 = (function (){var statearr_46654 = state_46649;
(statearr_46654[(8)] = inst_46600);

(statearr_46654[(9)] = inst_46601);

(statearr_46654[(10)] = inst_46602);

(statearr_46654[(11)] = inst_46599);

(statearr_46654[(12)] = inst_46625);

return statearr_46654;
})();
var statearr_46655_48947 = state_46649__$1;
(statearr_46655_48947[(2)] = null);

(statearr_46655_48947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (1))){
var state_46649__$1 = state_46649;
var statearr_46656_48952 = state_46649__$1;
(statearr_46656_48952[(2)] = null);

(statearr_46656_48952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (4))){
var inst_46586 = (state_46649[(13)]);
var inst_46586__$1 = (state_46649[(2)]);
var inst_46588 = (inst_46586__$1 == null);
var state_46649__$1 = (function (){var statearr_46657 = state_46649;
(statearr_46657[(13)] = inst_46586__$1);

return statearr_46657;
})();
if(cljs.core.truth_(inst_46588)){
var statearr_46659_48963 = state_46649__$1;
(statearr_46659_48963[(1)] = (5));

} else {
var statearr_46661_48964 = state_46649__$1;
(statearr_46661_48964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (15))){
var state_46649__$1 = state_46649;
var statearr_46669_48968 = state_46649__$1;
(statearr_46669_48968[(2)] = null);

(statearr_46669_48968[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (21))){
var state_46649__$1 = state_46649;
var statearr_46670_48975 = state_46649__$1;
(statearr_46670_48975[(2)] = null);

(statearr_46670_48975[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (13))){
var inst_46600 = (state_46649[(8)]);
var inst_46601 = (state_46649[(9)]);
var inst_46602 = (state_46649[(10)]);
var inst_46599 = (state_46649[(11)]);
var inst_46610 = (state_46649[(2)]);
var inst_46611 = (inst_46602 + (1));
var tmp46664 = inst_46600;
var tmp46665 = inst_46601;
var tmp46666 = inst_46599;
var inst_46599__$1 = tmp46666;
var inst_46600__$1 = tmp46664;
var inst_46601__$1 = tmp46665;
var inst_46602__$1 = inst_46611;
var state_46649__$1 = (function (){var statearr_46671 = state_46649;
(statearr_46671[(8)] = inst_46600__$1);

(statearr_46671[(9)] = inst_46601__$1);

(statearr_46671[(14)] = inst_46610);

(statearr_46671[(10)] = inst_46602__$1);

(statearr_46671[(11)] = inst_46599__$1);

return statearr_46671;
})();
var statearr_46672_49001 = state_46649__$1;
(statearr_46672_49001[(2)] = null);

(statearr_46672_49001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (22))){
var state_46649__$1 = state_46649;
var statearr_46675_49008 = state_46649__$1;
(statearr_46675_49008[(2)] = null);

(statearr_46675_49008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (6))){
var inst_46586 = (state_46649[(13)]);
var inst_46597 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46586) : f.call(null,inst_46586));
var inst_46598 = cljs.core.seq(inst_46597);
var inst_46599 = inst_46598;
var inst_46600 = null;
var inst_46601 = (0);
var inst_46602 = (0);
var state_46649__$1 = (function (){var statearr_46685 = state_46649;
(statearr_46685[(8)] = inst_46600);

(statearr_46685[(9)] = inst_46601);

(statearr_46685[(10)] = inst_46602);

(statearr_46685[(11)] = inst_46599);

return statearr_46685;
})();
var statearr_46686_49026 = state_46649__$1;
(statearr_46686_49026[(2)] = null);

(statearr_46686_49026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (17))){
var inst_46614 = (state_46649[(7)]);
var inst_46618 = cljs.core.chunk_first(inst_46614);
var inst_46619 = cljs.core.chunk_rest(inst_46614);
var inst_46620 = cljs.core.count(inst_46618);
var inst_46599 = inst_46619;
var inst_46600 = inst_46618;
var inst_46601 = inst_46620;
var inst_46602 = (0);
var state_46649__$1 = (function (){var statearr_46695 = state_46649;
(statearr_46695[(8)] = inst_46600);

(statearr_46695[(9)] = inst_46601);

(statearr_46695[(10)] = inst_46602);

(statearr_46695[(11)] = inst_46599);

return statearr_46695;
})();
var statearr_46700_49037 = state_46649__$1;
(statearr_46700_49037[(2)] = null);

(statearr_46700_49037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (3))){
var inst_46647 = (state_46649[(2)]);
var state_46649__$1 = state_46649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46649__$1,inst_46647);
} else {
if((state_val_46650 === (12))){
var inst_46634 = (state_46649[(2)]);
var state_46649__$1 = state_46649;
var statearr_46702_49051 = state_46649__$1;
(statearr_46702_49051[(2)] = inst_46634);

(statearr_46702_49051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (2))){
var state_46649__$1 = state_46649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46649__$1,(4),in$);
} else {
if((state_val_46650 === (23))){
var inst_46643 = (state_46649[(2)]);
var state_46649__$1 = state_46649;
var statearr_46704_49062 = state_46649__$1;
(statearr_46704_49062[(2)] = inst_46643);

(statearr_46704_49062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (19))){
var inst_46629 = (state_46649[(2)]);
var state_46649__$1 = state_46649;
var statearr_46705_49071 = state_46649__$1;
(statearr_46705_49071[(2)] = inst_46629);

(statearr_46705_49071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (11))){
var inst_46614 = (state_46649[(7)]);
var inst_46599 = (state_46649[(11)]);
var inst_46614__$1 = cljs.core.seq(inst_46599);
var state_46649__$1 = (function (){var statearr_46706 = state_46649;
(statearr_46706[(7)] = inst_46614__$1);

return statearr_46706;
})();
if(inst_46614__$1){
var statearr_46708_49088 = state_46649__$1;
(statearr_46708_49088[(1)] = (14));

} else {
var statearr_46710_49090 = state_46649__$1;
(statearr_46710_49090[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (9))){
var inst_46636 = (state_46649[(2)]);
var inst_46637 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46649__$1 = (function (){var statearr_46712 = state_46649;
(statearr_46712[(15)] = inst_46636);

return statearr_46712;
})();
if(cljs.core.truth_(inst_46637)){
var statearr_46713_49092 = state_46649__$1;
(statearr_46713_49092[(1)] = (21));

} else {
var statearr_46714_49094 = state_46649__$1;
(statearr_46714_49094[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (5))){
var inst_46591 = cljs.core.async.close_BANG_(out);
var state_46649__$1 = state_46649;
var statearr_46715_49096 = state_46649__$1;
(statearr_46715_49096[(2)] = inst_46591);

(statearr_46715_49096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (14))){
var inst_46614 = (state_46649[(7)]);
var inst_46616 = cljs.core.chunked_seq_QMARK_(inst_46614);
var state_46649__$1 = state_46649;
if(inst_46616){
var statearr_46716_49100 = state_46649__$1;
(statearr_46716_49100[(1)] = (17));

} else {
var statearr_46717_49101 = state_46649__$1;
(statearr_46717_49101[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (16))){
var inst_46632 = (state_46649[(2)]);
var state_46649__$1 = state_46649;
var statearr_46718_49109 = state_46649__$1;
(statearr_46718_49109[(2)] = inst_46632);

(statearr_46718_49109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (10))){
var inst_46600 = (state_46649[(8)]);
var inst_46602 = (state_46649[(10)]);
var inst_46608 = cljs.core._nth(inst_46600,inst_46602);
var state_46649__$1 = state_46649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46649__$1,(13),out,inst_46608);
} else {
if((state_val_46650 === (18))){
var inst_46614 = (state_46649[(7)]);
var inst_46623 = cljs.core.first(inst_46614);
var state_46649__$1 = state_46649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46649__$1,(20),out,inst_46623);
} else {
if((state_val_46650 === (8))){
var inst_46601 = (state_46649[(9)]);
var inst_46602 = (state_46649[(10)]);
var inst_46605 = (inst_46602 < inst_46601);
var inst_46606 = inst_46605;
var state_46649__$1 = state_46649;
if(cljs.core.truth_(inst_46606)){
var statearr_46719_49117 = state_46649__$1;
(statearr_46719_49117[(1)] = (10));

} else {
var statearr_46720_49122 = state_46649__$1;
(statearr_46720_49122[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43841__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43841__auto____0 = (function (){
var statearr_46723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46723[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43841__auto__);

(statearr_46723[(1)] = (1));

return statearr_46723;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43841__auto____1 = (function (state_46649){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_46649);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e46726){var ex__43844__auto__ = e46726;
var statearr_46727_49130 = state_46649;
(statearr_46727_49130[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_46649[(4)]))){
var statearr_46730_49132 = state_46649;
(statearr_46730_49132[(1)] = cljs.core.first((state_46649[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49134 = state_46649;
state_46649 = G__49134;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43841__auto__ = function(state_46649){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43841__auto____1.call(this,state_46649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43841__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43841__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_46731 = f__44012__auto__();
(statearr_46731[(6)] = c__44011__auto__);

return statearr_46731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));

return c__44011__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46735 = arguments.length;
switch (G__46735) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46739 = arguments.length;
switch (G__46739) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46743 = arguments.length;
switch (G__46743) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44011__auto___49174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_46775){
var state_val_46776 = (state_46775[(1)]);
if((state_val_46776 === (7))){
var inst_46770 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46777_49178 = state_46775__$1;
(statearr_46777_49178[(2)] = inst_46770);

(statearr_46777_49178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (1))){
var inst_46751 = null;
var state_46775__$1 = (function (){var statearr_46779 = state_46775;
(statearr_46779[(7)] = inst_46751);

return statearr_46779;
})();
var statearr_46780_49179 = state_46775__$1;
(statearr_46780_49179[(2)] = null);

(statearr_46780_49179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (4))){
var inst_46754 = (state_46775[(8)]);
var inst_46754__$1 = (state_46775[(2)]);
var inst_46755 = (inst_46754__$1 == null);
var inst_46756 = cljs.core.not(inst_46755);
var state_46775__$1 = (function (){var statearr_46781 = state_46775;
(statearr_46781[(8)] = inst_46754__$1);

return statearr_46781;
})();
if(inst_46756){
var statearr_46782_49183 = state_46775__$1;
(statearr_46782_49183[(1)] = (5));

} else {
var statearr_46783_49184 = state_46775__$1;
(statearr_46783_49184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (6))){
var state_46775__$1 = state_46775;
var statearr_46784_49185 = state_46775__$1;
(statearr_46784_49185[(2)] = null);

(statearr_46784_49185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (3))){
var inst_46772 = (state_46775[(2)]);
var inst_46773 = cljs.core.async.close_BANG_(out);
var state_46775__$1 = (function (){var statearr_46785 = state_46775;
(statearr_46785[(9)] = inst_46772);

return statearr_46785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46775__$1,inst_46773);
} else {
if((state_val_46776 === (2))){
var state_46775__$1 = state_46775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46775__$1,(4),ch);
} else {
if((state_val_46776 === (11))){
var inst_46754 = (state_46775[(8)]);
var inst_46764 = (state_46775[(2)]);
var inst_46751 = inst_46754;
var state_46775__$1 = (function (){var statearr_46786 = state_46775;
(statearr_46786[(10)] = inst_46764);

(statearr_46786[(7)] = inst_46751);

return statearr_46786;
})();
var statearr_46787_49191 = state_46775__$1;
(statearr_46787_49191[(2)] = null);

(statearr_46787_49191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (9))){
var inst_46754 = (state_46775[(8)]);
var state_46775__$1 = state_46775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46775__$1,(11),out,inst_46754);
} else {
if((state_val_46776 === (5))){
var inst_46754 = (state_46775[(8)]);
var inst_46751 = (state_46775[(7)]);
var inst_46758 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46754,inst_46751);
var state_46775__$1 = state_46775;
if(inst_46758){
var statearr_46790_49192 = state_46775__$1;
(statearr_46790_49192[(1)] = (8));

} else {
var statearr_46791_49193 = state_46775__$1;
(statearr_46791_49193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (10))){
var inst_46767 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46793_49195 = state_46775__$1;
(statearr_46793_49195[(2)] = inst_46767);

(statearr_46793_49195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (8))){
var inst_46751 = (state_46775[(7)]);
var tmp46788 = inst_46751;
var inst_46751__$1 = tmp46788;
var state_46775__$1 = (function (){var statearr_46795 = state_46775;
(statearr_46795[(7)] = inst_46751__$1);

return statearr_46795;
})();
var statearr_46796_49196 = state_46775__$1;
(statearr_46796_49196[(2)] = null);

(statearr_46796_49196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43841__auto__ = null;
var cljs$core$async$state_machine__43841__auto____0 = (function (){
var statearr_46797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46797[(0)] = cljs$core$async$state_machine__43841__auto__);

(statearr_46797[(1)] = (1));

return statearr_46797;
});
var cljs$core$async$state_machine__43841__auto____1 = (function (state_46775){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_46775);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e46800){var ex__43844__auto__ = e46800;
var statearr_46801_49197 = state_46775;
(statearr_46801_49197[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_46775[(4)]))){
var statearr_46802_49198 = state_46775;
(statearr_46802_49198[(1)] = cljs.core.first((state_46775[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49203 = state_46775;
state_46775 = G__49203;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$state_machine__43841__auto__ = function(state_46775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43841__auto____1.call(this,state_46775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43841__auto____0;
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43841__auto____1;
return cljs$core$async$state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_46803 = f__44012__auto__();
(statearr_46803[(6)] = c__44011__auto___49174);

return statearr_46803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46806 = arguments.length;
switch (G__46806) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44011__auto___49217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_46851){
var state_val_46852 = (state_46851[(1)]);
if((state_val_46852 === (7))){
var inst_46847 = (state_46851[(2)]);
var state_46851__$1 = state_46851;
var statearr_46854_49218 = state_46851__$1;
(statearr_46854_49218[(2)] = inst_46847);

(statearr_46854_49218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (1))){
var inst_46813 = (new Array(n));
var inst_46814 = inst_46813;
var inst_46815 = (0);
var state_46851__$1 = (function (){var statearr_46855 = state_46851;
(statearr_46855[(7)] = inst_46815);

(statearr_46855[(8)] = inst_46814);

return statearr_46855;
})();
var statearr_46856_49222 = state_46851__$1;
(statearr_46856_49222[(2)] = null);

(statearr_46856_49222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (4))){
var inst_46819 = (state_46851[(9)]);
var inst_46819__$1 = (state_46851[(2)]);
var inst_46820 = (inst_46819__$1 == null);
var inst_46821 = cljs.core.not(inst_46820);
var state_46851__$1 = (function (){var statearr_46858 = state_46851;
(statearr_46858[(9)] = inst_46819__$1);

return statearr_46858;
})();
if(inst_46821){
var statearr_46859_49224 = state_46851__$1;
(statearr_46859_49224[(1)] = (5));

} else {
var statearr_46860_49225 = state_46851__$1;
(statearr_46860_49225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (15))){
var inst_46841 = (state_46851[(2)]);
var state_46851__$1 = state_46851;
var statearr_46861_49238 = state_46851__$1;
(statearr_46861_49238[(2)] = inst_46841);

(statearr_46861_49238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (13))){
var state_46851__$1 = state_46851;
var statearr_46862_49239 = state_46851__$1;
(statearr_46862_49239[(2)] = null);

(statearr_46862_49239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (6))){
var inst_46815 = (state_46851[(7)]);
var inst_46837 = (inst_46815 > (0));
var state_46851__$1 = state_46851;
if(cljs.core.truth_(inst_46837)){
var statearr_46863_49240 = state_46851__$1;
(statearr_46863_49240[(1)] = (12));

} else {
var statearr_46864_49242 = state_46851__$1;
(statearr_46864_49242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (3))){
var inst_46849 = (state_46851[(2)]);
var state_46851__$1 = state_46851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46851__$1,inst_46849);
} else {
if((state_val_46852 === (12))){
var inst_46814 = (state_46851[(8)]);
var inst_46839 = cljs.core.vec(inst_46814);
var state_46851__$1 = state_46851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46851__$1,(15),out,inst_46839);
} else {
if((state_val_46852 === (2))){
var state_46851__$1 = state_46851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46851__$1,(4),ch);
} else {
if((state_val_46852 === (11))){
var inst_46831 = (state_46851[(2)]);
var inst_46832 = (new Array(n));
var inst_46814 = inst_46832;
var inst_46815 = (0);
var state_46851__$1 = (function (){var statearr_46868 = state_46851;
(statearr_46868[(7)] = inst_46815);

(statearr_46868[(10)] = inst_46831);

(statearr_46868[(8)] = inst_46814);

return statearr_46868;
})();
var statearr_46869_49246 = state_46851__$1;
(statearr_46869_49246[(2)] = null);

(statearr_46869_49246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (9))){
var inst_46814 = (state_46851[(8)]);
var inst_46829 = cljs.core.vec(inst_46814);
var state_46851__$1 = state_46851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46851__$1,(11),out,inst_46829);
} else {
if((state_val_46852 === (5))){
var inst_46824 = (state_46851[(11)]);
var inst_46815 = (state_46851[(7)]);
var inst_46819 = (state_46851[(9)]);
var inst_46814 = (state_46851[(8)]);
var inst_46823 = (inst_46814[inst_46815] = inst_46819);
var inst_46824__$1 = (inst_46815 + (1));
var inst_46825 = (inst_46824__$1 < n);
var state_46851__$1 = (function (){var statearr_46870 = state_46851;
(statearr_46870[(11)] = inst_46824__$1);

(statearr_46870[(12)] = inst_46823);

return statearr_46870;
})();
if(cljs.core.truth_(inst_46825)){
var statearr_46871_49252 = state_46851__$1;
(statearr_46871_49252[(1)] = (8));

} else {
var statearr_46872_49262 = state_46851__$1;
(statearr_46872_49262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (14))){
var inst_46844 = (state_46851[(2)]);
var inst_46845 = cljs.core.async.close_BANG_(out);
var state_46851__$1 = (function (){var statearr_46874 = state_46851;
(statearr_46874[(13)] = inst_46844);

return statearr_46874;
})();
var statearr_46875_49270 = state_46851__$1;
(statearr_46875_49270[(2)] = inst_46845);

(statearr_46875_49270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (10))){
var inst_46835 = (state_46851[(2)]);
var state_46851__$1 = state_46851;
var statearr_46876_49271 = state_46851__$1;
(statearr_46876_49271[(2)] = inst_46835);

(statearr_46876_49271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (8))){
var inst_46824 = (state_46851[(11)]);
var inst_46814 = (state_46851[(8)]);
var tmp46873 = inst_46814;
var inst_46814__$1 = tmp46873;
var inst_46815 = inst_46824;
var state_46851__$1 = (function (){var statearr_46878 = state_46851;
(statearr_46878[(7)] = inst_46815);

(statearr_46878[(8)] = inst_46814__$1);

return statearr_46878;
})();
var statearr_46879_49275 = state_46851__$1;
(statearr_46879_49275[(2)] = null);

(statearr_46879_49275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43841__auto__ = null;
var cljs$core$async$state_machine__43841__auto____0 = (function (){
var statearr_46880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46880[(0)] = cljs$core$async$state_machine__43841__auto__);

(statearr_46880[(1)] = (1));

return statearr_46880;
});
var cljs$core$async$state_machine__43841__auto____1 = (function (state_46851){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_46851);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e46881){var ex__43844__auto__ = e46881;
var statearr_46882_49280 = state_46851;
(statearr_46882_49280[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_46851[(4)]))){
var statearr_46883_49283 = state_46851;
(statearr_46883_49283[(1)] = cljs.core.first((state_46851[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49284 = state_46851;
state_46851 = G__49284;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$state_machine__43841__auto__ = function(state_46851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43841__auto____1.call(this,state_46851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43841__auto____0;
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43841__auto____1;
return cljs$core$async$state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_46884 = f__44012__auto__();
(statearr_46884[(6)] = c__44011__auto___49217);

return statearr_46884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46887 = arguments.length;
switch (G__46887) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44011__auto___49288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44012__auto__ = (function (){var switch__43840__auto__ = (function (state_46930){
var state_val_46931 = (state_46930[(1)]);
if((state_val_46931 === (7))){
var inst_46926 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
var statearr_46932_49289 = state_46930__$1;
(statearr_46932_49289[(2)] = inst_46926);

(statearr_46932_49289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (1))){
var inst_46888 = [];
var inst_46889 = inst_46888;
var inst_46890 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46930__$1 = (function (){var statearr_46934 = state_46930;
(statearr_46934[(7)] = inst_46889);

(statearr_46934[(8)] = inst_46890);

return statearr_46934;
})();
var statearr_46935_49303 = state_46930__$1;
(statearr_46935_49303[(2)] = null);

(statearr_46935_49303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (4))){
var inst_46893 = (state_46930[(9)]);
var inst_46893__$1 = (state_46930[(2)]);
var inst_46894 = (inst_46893__$1 == null);
var inst_46895 = cljs.core.not(inst_46894);
var state_46930__$1 = (function (){var statearr_46937 = state_46930;
(statearr_46937[(9)] = inst_46893__$1);

return statearr_46937;
})();
if(inst_46895){
var statearr_46938_49304 = state_46930__$1;
(statearr_46938_49304[(1)] = (5));

} else {
var statearr_46939_49305 = state_46930__$1;
(statearr_46939_49305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (15))){
var inst_46920 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
var statearr_46940_49311 = state_46930__$1;
(statearr_46940_49311[(2)] = inst_46920);

(statearr_46940_49311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (13))){
var state_46930__$1 = state_46930;
var statearr_46941_49319 = state_46930__$1;
(statearr_46941_49319[(2)] = null);

(statearr_46941_49319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (6))){
var inst_46889 = (state_46930[(7)]);
var inst_46915 = inst_46889.length;
var inst_46916 = (inst_46915 > (0));
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46916)){
var statearr_46942_49320 = state_46930__$1;
(statearr_46942_49320[(1)] = (12));

} else {
var statearr_46943_49321 = state_46930__$1;
(statearr_46943_49321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (3))){
var inst_46928 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46930__$1,inst_46928);
} else {
if((state_val_46931 === (12))){
var inst_46889 = (state_46930[(7)]);
var inst_46918 = cljs.core.vec(inst_46889);
var state_46930__$1 = state_46930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46930__$1,(15),out,inst_46918);
} else {
if((state_val_46931 === (2))){
var state_46930__$1 = state_46930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46930__$1,(4),ch);
} else {
if((state_val_46931 === (11))){
var inst_46897 = (state_46930[(10)]);
var inst_46893 = (state_46930[(9)]);
var inst_46908 = (state_46930[(2)]);
var inst_46909 = [];
var inst_46910 = inst_46909.push(inst_46893);
var inst_46889 = inst_46909;
var inst_46890 = inst_46897;
var state_46930__$1 = (function (){var statearr_46945 = state_46930;
(statearr_46945[(11)] = inst_46910);

(statearr_46945[(7)] = inst_46889);

(statearr_46945[(12)] = inst_46908);

(statearr_46945[(8)] = inst_46890);

return statearr_46945;
})();
var statearr_46947_49336 = state_46930__$1;
(statearr_46947_49336[(2)] = null);

(statearr_46947_49336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (9))){
var inst_46889 = (state_46930[(7)]);
var inst_46906 = cljs.core.vec(inst_46889);
var state_46930__$1 = state_46930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46930__$1,(11),out,inst_46906);
} else {
if((state_val_46931 === (5))){
var inst_46897 = (state_46930[(10)]);
var inst_46893 = (state_46930[(9)]);
var inst_46890 = (state_46930[(8)]);
var inst_46897__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46893) : f.call(null,inst_46893));
var inst_46899 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46897__$1,inst_46890);
var inst_46900 = cljs.core.keyword_identical_QMARK_(inst_46890,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46901 = ((inst_46899) || (inst_46900));
var state_46930__$1 = (function (){var statearr_46955 = state_46930;
(statearr_46955[(10)] = inst_46897__$1);

return statearr_46955;
})();
if(cljs.core.truth_(inst_46901)){
var statearr_46957_49346 = state_46930__$1;
(statearr_46957_49346[(1)] = (8));

} else {
var statearr_46958_49347 = state_46930__$1;
(statearr_46958_49347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (14))){
var inst_46923 = (state_46930[(2)]);
var inst_46924 = cljs.core.async.close_BANG_(out);
var state_46930__$1 = (function (){var statearr_46960 = state_46930;
(statearr_46960[(13)] = inst_46923);

return statearr_46960;
})();
var statearr_46961_49352 = state_46930__$1;
(statearr_46961_49352[(2)] = inst_46924);

(statearr_46961_49352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (10))){
var inst_46913 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
var statearr_46962_49359 = state_46930__$1;
(statearr_46962_49359[(2)] = inst_46913);

(statearr_46962_49359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (8))){
var inst_46897 = (state_46930[(10)]);
var inst_46889 = (state_46930[(7)]);
var inst_46893 = (state_46930[(9)]);
var inst_46903 = inst_46889.push(inst_46893);
var tmp46959 = inst_46889;
var inst_46889__$1 = tmp46959;
var inst_46890 = inst_46897;
var state_46930__$1 = (function (){var statearr_46963 = state_46930;
(statearr_46963[(7)] = inst_46889__$1);

(statearr_46963[(14)] = inst_46903);

(statearr_46963[(8)] = inst_46890);

return statearr_46963;
})();
var statearr_46964_49366 = state_46930__$1;
(statearr_46964_49366[(2)] = null);

(statearr_46964_49366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43841__auto__ = null;
var cljs$core$async$state_machine__43841__auto____0 = (function (){
var statearr_46965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46965[(0)] = cljs$core$async$state_machine__43841__auto__);

(statearr_46965[(1)] = (1));

return statearr_46965;
});
var cljs$core$async$state_machine__43841__auto____1 = (function (state_46930){
while(true){
var ret_value__43842__auto__ = (function (){try{while(true){
var result__43843__auto__ = switch__43840__auto__(state_46930);
if(cljs.core.keyword_identical_QMARK_(result__43843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43843__auto__;
}
break;
}
}catch (e46967){var ex__43844__auto__ = e46967;
var statearr_46968_49373 = state_46930;
(statearr_46968_49373[(2)] = ex__43844__auto__);


if(cljs.core.seq((state_46930[(4)]))){
var statearr_46969_49374 = state_46930;
(statearr_46969_49374[(1)] = cljs.core.first((state_46930[(4)])));

} else {
throw ex__43844__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49391 = state_46930;
state_46930 = G__49391;
continue;
} else {
return ret_value__43842__auto__;
}
break;
}
});
cljs$core$async$state_machine__43841__auto__ = function(state_46930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43841__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43841__auto____1.call(this,state_46930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43841__auto____0;
cljs$core$async$state_machine__43841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43841__auto____1;
return cljs$core$async$state_machine__43841__auto__;
})()
})();
var state__44013__auto__ = (function (){var statearr_46971 = f__44012__auto__();
(statearr_46971[(6)] = c__44011__auto___49288);

return statearr_46971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44013__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
