goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21227 = (function (f,blockable,meta21228){
this.f = f;
this.blockable = blockable;
this.meta21228 = meta21228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21229,meta21228__$1){
var self__ = this;
var _21229__$1 = this;
return (new cljs.core.async.t_cljs$core$async21227(self__.f,self__.blockable,meta21228__$1));
}));

(cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21229){
var self__ = this;
var _21229__$1 = this;
return self__.meta21228;
}));

(cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async21227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21228","meta21228",1829719054,null)], null);
}));

(cljs.core.async.t_cljs$core$async21227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21227");

(cljs.core.async.t_cljs$core$async21227.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async21227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21227.
 */
cljs.core.async.__GT_t_cljs$core$async21227 = (function cljs$core$async$__GT_t_cljs$core$async21227(f,blockable,meta21228){
return (new cljs.core.async.t_cljs$core$async21227(f,blockable,meta21228));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21225 = arguments.length;
switch (G__21225) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async21227(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21245 = arguments.length;
switch (G__21245) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
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
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__21258 = arguments.length;
switch (G__21258) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__21266 = arguments.length;
switch (G__21266) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_24701 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24701) : fn1.call(null,val_24701));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24701) : fn1.call(null,val_24701));
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
var G__21279 = arguments.length;
switch (G__21279) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
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
var n__5762__auto___24709 = n;
var x_24710 = (0);
while(true){
if((x_24710 < n__5762__auto___24709)){
(a[x_24710] = x_24710);

var G__24711 = (x_24710 + (1));
x_24710 = G__24711;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21289 = (function (flag,meta21290){
this.flag = flag;
this.meta21290 = meta21290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21291,meta21290__$1){
var self__ = this;
var _21291__$1 = this;
return (new cljs.core.async.t_cljs$core$async21289(self__.flag,meta21290__$1));
}));

(cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21291){
var self__ = this;
var _21291__$1 = this;
return self__.meta21290;
}));

(cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async21289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21290","meta21290",2062708232,null)], null);
}));

(cljs.core.async.t_cljs$core$async21289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21289");

(cljs.core.async.t_cljs$core$async21289.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async21289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21289.
 */
cljs.core.async.__GT_t_cljs$core$async21289 = (function cljs$core$async$__GT_t_cljs$core$async21289(flag,meta21290){
return (new cljs.core.async.t_cljs$core$async21289(flag,meta21290));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async21289(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21304 = (function (flag,cb,meta21305){
this.flag = flag;
this.cb = cb;
this.meta21305 = meta21305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21306,meta21305__$1){
var self__ = this;
var _21306__$1 = this;
return (new cljs.core.async.t_cljs$core$async21304(self__.flag,self__.cb,meta21305__$1));
}));

(cljs.core.async.t_cljs$core$async21304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21306){
var self__ = this;
var _21306__$1 = this;
return self__.meta21305;
}));

(cljs.core.async.t_cljs$core$async21304.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async21304.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async21304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21305","meta21305",-1704533284,null)], null);
}));

(cljs.core.async.t_cljs$core$async21304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21304");

(cljs.core.async.t_cljs$core$async21304.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async21304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21304.
 */
cljs.core.async.__GT_t_cljs$core$async21304 = (function cljs$core$async$__GT_t_cljs$core$async21304(flag,cb,meta21305){
return (new cljs.core.async.t_cljs$core$async21304(flag,cb,meta21305));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async21304(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_24718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_24718)){
if((!(((port_24718.cljs$core$IFn$_invoke$arity$1 ? port_24718.cljs$core$IFn$_invoke$arity$1((1)) : port_24718.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__24719 = (i + (1));
i = G__24719;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__21330_SHARP_){
var G__21351 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21330_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21351) : fret.call(null,G__21351));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__21331_SHARP_){
var G__21352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21331_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21352) : fret.call(null,G__21352));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24733 = (i + (1));
i = G__24733;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
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
var args__5903__auto__ = [];
var len__5897__auto___24734 = arguments.length;
var i__5898__auto___24735 = (0);
while(true){
if((i__5898__auto___24735 < len__5897__auto___24734)){
args__5903__auto__.push((arguments[i__5898__auto___24735]));

var G__24736 = (i__5898__auto___24735 + (1));
i__5898__auto___24735 = G__24736;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21359){
var map__21360 = p__21359;
var map__21360__$1 = cljs.core.__destructure_map(map__21360);
var opts = map__21360__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21356){
var G__21357 = cljs.core.first(seq21356);
var seq21356__$1 = cljs.core.next(seq21356);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21357,seq21356__$1);
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
var G__21370 = arguments.length;
switch (G__21370) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21025__auto___24745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_21503){
var state_val_21506 = (state_21503[(1)]);
if((state_val_21506 === (7))){
var inst_21484 = (state_21503[(2)]);
var state_21503__$1 = state_21503;
var statearr_21525_24746 = state_21503__$1;
(statearr_21525_24746[(2)] = inst_21484);

(statearr_21525_24746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (1))){
var state_21503__$1 = state_21503;
var statearr_21527_24747 = state_21503__$1;
(statearr_21527_24747[(2)] = null);

(statearr_21527_24747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (4))){
var inst_21462 = (state_21503[(7)]);
var inst_21462__$1 = (state_21503[(2)]);
var inst_21464 = (inst_21462__$1 == null);
var state_21503__$1 = (function (){var statearr_21539 = state_21503;
(statearr_21539[(7)] = inst_21462__$1);

return statearr_21539;
})();
if(cljs.core.truth_(inst_21464)){
var statearr_21545_24749 = state_21503__$1;
(statearr_21545_24749[(1)] = (5));

} else {
var statearr_21551_24750 = state_21503__$1;
(statearr_21551_24750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (13))){
var state_21503__$1 = state_21503;
var statearr_21566_24752 = state_21503__$1;
(statearr_21566_24752[(2)] = null);

(statearr_21566_24752[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (6))){
var inst_21462 = (state_21503[(7)]);
var state_21503__$1 = state_21503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21503__$1,(11),to,inst_21462);
} else {
if((state_val_21506 === (3))){
var inst_21490 = (state_21503[(2)]);
var state_21503__$1 = state_21503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21503__$1,inst_21490);
} else {
if((state_val_21506 === (12))){
var state_21503__$1 = state_21503;
var statearr_21605_24759 = state_21503__$1;
(statearr_21605_24759[(2)] = null);

(statearr_21605_24759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (2))){
var state_21503__$1 = state_21503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21503__$1,(4),from);
} else {
if((state_val_21506 === (11))){
var inst_21473 = (state_21503[(2)]);
var state_21503__$1 = state_21503;
if(cljs.core.truth_(inst_21473)){
var statearr_21609_24760 = state_21503__$1;
(statearr_21609_24760[(1)] = (12));

} else {
var statearr_21610_24761 = state_21503__$1;
(statearr_21610_24761[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (9))){
var state_21503__$1 = state_21503;
var statearr_21615_24762 = state_21503__$1;
(statearr_21615_24762[(2)] = null);

(statearr_21615_24762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (5))){
var state_21503__$1 = state_21503;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21616_24769 = state_21503__$1;
(statearr_21616_24769[(1)] = (8));

} else {
var statearr_21618_24770 = state_21503__$1;
(statearr_21618_24770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (14))){
var inst_21482 = (state_21503[(2)]);
var state_21503__$1 = state_21503;
var statearr_21623_24771 = state_21503__$1;
(statearr_21623_24771[(2)] = inst_21482);

(statearr_21623_24771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (10))){
var inst_21470 = (state_21503[(2)]);
var state_21503__$1 = state_21503;
var statearr_21631_24772 = state_21503__$1;
(statearr_21631_24772[(2)] = inst_21470);

(statearr_21631_24772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (8))){
var inst_21467 = cljs.core.async.close_BANG_(to);
var state_21503__$1 = state_21503;
var statearr_21638_24779 = state_21503__$1;
(statearr_21638_24779[(2)] = inst_21467);

(statearr_21638_24779[(1)] = (10));


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
var cljs$core$async$state_machine__19837__auto__ = null;
var cljs$core$async$state_machine__19837__auto____0 = (function (){
var statearr_21640 = [null,null,null,null,null,null,null,null];
(statearr_21640[(0)] = cljs$core$async$state_machine__19837__auto__);

(statearr_21640[(1)] = (1));

return statearr_21640;
});
var cljs$core$async$state_machine__19837__auto____1 = (function (state_21503){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_21503);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e21641){var ex__19840__auto__ = e21641;
var statearr_21642_24780 = state_21503;
(statearr_21642_24780[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_21503[(4)]))){
var statearr_21643_24782 = state_21503;
(statearr_21643_24782[(1)] = cljs.core.first((state_21503[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24783 = state_21503;
state_21503 = G__24783;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$state_machine__19837__auto__ = function(state_21503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19837__auto____1.call(this,state_21503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19837__auto____0;
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19837__auto____1;
return cljs$core$async$state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_21647 = f__21026__auto__();
(statearr_21647[(6)] = c__21025__auto___24745);

return statearr_21647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
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
var process__$1 = (function (p__21654){
var vec__21657 = p__21654;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21657,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21657,(1),null);
var job = vec__21657;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__21025__auto___24799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_21669){
var state_val_21670 = (state_21669[(1)]);
if((state_val_21670 === (1))){
var state_21669__$1 = state_21669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21669__$1,(2),res,v);
} else {
if((state_val_21670 === (2))){
var inst_21666 = (state_21669[(2)]);
var inst_21667 = cljs.core.async.close_BANG_(res);
var state_21669__$1 = (function (){var statearr_21678 = state_21669;
(statearr_21678[(7)] = inst_21666);

return statearr_21678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21669__$1,inst_21667);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0 = (function (){
var statearr_21679 = [null,null,null,null,null,null,null,null];
(statearr_21679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__);

(statearr_21679[(1)] = (1));

return statearr_21679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1 = (function (state_21669){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_21669);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e21680){var ex__19840__auto__ = e21680;
var statearr_21681_24806 = state_21669;
(statearr_21681_24806[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_21669[(4)]))){
var statearr_21683_24807 = state_21669;
(statearr_21683_24807[(1)] = cljs.core.first((state_21669[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24809 = state_21669;
state_21669 = G__24809;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__ = function(state_21669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1.call(this,state_21669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_21687 = f__21026__auto__();
(statearr_21687[(6)] = c__21025__auto___24799);

return statearr_21687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__21690){
var vec__21692 = p__21690;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21692,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21692,(1),null);
var job = vec__21692;
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
var n__5762__auto___24816 = n;
var __24817 = (0);
while(true){
if((__24817 < n__5762__auto___24816)){
var G__21699_24818 = type;
var G__21699_24819__$1 = (((G__21699_24818 instanceof cljs.core.Keyword))?G__21699_24818.fqn:null);
switch (G__21699_24819__$1) {
case "compute":
var c__21025__auto___24821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24817,c__21025__auto___24821,G__21699_24818,G__21699_24819__$1,n__5762__auto___24816,jobs,results,process__$1,async){
return (function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = ((function (__24817,c__21025__auto___24821,G__21699_24818,G__21699_24819__$1,n__5762__auto___24816,jobs,results,process__$1,async){
return (function (state_21721){
var state_val_21723 = (state_21721[(1)]);
if((state_val_21723 === (1))){
var state_21721__$1 = state_21721;
var statearr_21727_24822 = state_21721__$1;
(statearr_21727_24822[(2)] = null);

(statearr_21727_24822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21723 === (2))){
var state_21721__$1 = state_21721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21721__$1,(4),jobs);
} else {
if((state_val_21723 === (3))){
var inst_21718 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21721__$1,inst_21718);
} else {
if((state_val_21723 === (4))){
var inst_21710 = (state_21721[(2)]);
var inst_21711 = process__$1(inst_21710);
var state_21721__$1 = state_21721;
if(cljs.core.truth_(inst_21711)){
var statearr_21733_24829 = state_21721__$1;
(statearr_21733_24829[(1)] = (5));

} else {
var statearr_21734_24830 = state_21721__$1;
(statearr_21734_24830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21723 === (5))){
var state_21721__$1 = state_21721;
var statearr_21741_24831 = state_21721__$1;
(statearr_21741_24831[(2)] = null);

(statearr_21741_24831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21723 === (6))){
var state_21721__$1 = state_21721;
var statearr_21743_24832 = state_21721__$1;
(statearr_21743_24832[(2)] = null);

(statearr_21743_24832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21723 === (7))){
var inst_21716 = (state_21721[(2)]);
var state_21721__$1 = state_21721;
var statearr_21745_24833 = state_21721__$1;
(statearr_21745_24833[(2)] = inst_21716);

(statearr_21745_24833[(1)] = (3));


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
});})(__24817,c__21025__auto___24821,G__21699_24818,G__21699_24819__$1,n__5762__auto___24816,jobs,results,process__$1,async))
;
return ((function (__24817,switch__19836__auto__,c__21025__auto___24821,G__21699_24818,G__21699_24819__$1,n__5762__auto___24816,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0 = (function (){
var statearr_21749 = [null,null,null,null,null,null,null];
(statearr_21749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__);

(statearr_21749[(1)] = (1));

return statearr_21749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1 = (function (state_21721){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_21721);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e21750){var ex__19840__auto__ = e21750;
var statearr_21752_24838 = state_21721;
(statearr_21752_24838[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_21721[(4)]))){
var statearr_21754_24839 = state_21721;
(statearr_21754_24839[(1)] = cljs.core.first((state_21721[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24841 = state_21721;
state_21721 = G__24841;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__ = function(state_21721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1.call(this,state_21721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__;
})()
;})(__24817,switch__19836__auto__,c__21025__auto___24821,G__21699_24818,G__21699_24819__$1,n__5762__auto___24816,jobs,results,process__$1,async))
})();
var state__21027__auto__ = (function (){var statearr_21758 = f__21026__auto__();
(statearr_21758[(6)] = c__21025__auto___24821);

return statearr_21758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
});})(__24817,c__21025__auto___24821,G__21699_24818,G__21699_24819__$1,n__5762__auto___24816,jobs,results,process__$1,async))
);


break;
case "async":
var c__21025__auto___24842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24817,c__21025__auto___24842,G__21699_24818,G__21699_24819__$1,n__5762__auto___24816,jobs,results,process__$1,async){
return (function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = ((function (__24817,c__21025__auto___24842,G__21699_24818,G__21699_24819__$1,n__5762__auto___24816,jobs,results,process__$1,async){
return (function (state_21772){
var state_val_21773 = (state_21772[(1)]);
if((state_val_21773 === (1))){
var state_21772__$1 = state_21772;
var statearr_21777_24847 = state_21772__$1;
(statearr_21777_24847[(2)] = null);

(statearr_21777_24847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (2))){
var state_21772__$1 = state_21772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21772__$1,(4),jobs);
} else {
if((state_val_21773 === (3))){
var inst_21770 = (state_21772[(2)]);
var state_21772__$1 = state_21772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21772__$1,inst_21770);
} else {
if((state_val_21773 === (4))){
var inst_21762 = (state_21772[(2)]);
var inst_21763 = async(inst_21762);
var state_21772__$1 = state_21772;
if(cljs.core.truth_(inst_21763)){
var statearr_21782_24854 = state_21772__$1;
(statearr_21782_24854[(1)] = (5));

} else {
var statearr_21783_24855 = state_21772__$1;
(statearr_21783_24855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (5))){
var state_21772__$1 = state_21772;
var statearr_21785_24856 = state_21772__$1;
(statearr_21785_24856[(2)] = null);

(statearr_21785_24856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (6))){
var state_21772__$1 = state_21772;
var statearr_21788_24858 = state_21772__$1;
(statearr_21788_24858[(2)] = null);

(statearr_21788_24858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21773 === (7))){
var inst_21768 = (state_21772[(2)]);
var state_21772__$1 = state_21772;
var statearr_21792_24864 = state_21772__$1;
(statearr_21792_24864[(2)] = inst_21768);

(statearr_21792_24864[(1)] = (3));


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
});})(__24817,c__21025__auto___24842,G__21699_24818,G__21699_24819__$1,n__5762__auto___24816,jobs,results,process__$1,async))
;
return ((function (__24817,switch__19836__auto__,c__21025__auto___24842,G__21699_24818,G__21699_24819__$1,n__5762__auto___24816,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0 = (function (){
var statearr_21796 = [null,null,null,null,null,null,null];
(statearr_21796[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__);

(statearr_21796[(1)] = (1));

return statearr_21796;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1 = (function (state_21772){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_21772);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e21797){var ex__19840__auto__ = e21797;
var statearr_21798_24866 = state_21772;
(statearr_21798_24866[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_21772[(4)]))){
var statearr_21801_24867 = state_21772;
(statearr_21801_24867[(1)] = cljs.core.first((state_21772[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24868 = state_21772;
state_21772 = G__24868;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__ = function(state_21772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1.call(this,state_21772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__;
})()
;})(__24817,switch__19836__auto__,c__21025__auto___24842,G__21699_24818,G__21699_24819__$1,n__5762__auto___24816,jobs,results,process__$1,async))
})();
var state__21027__auto__ = (function (){var statearr_21806 = f__21026__auto__();
(statearr_21806[(6)] = c__21025__auto___24842);

return statearr_21806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
});})(__24817,c__21025__auto___24842,G__21699_24818,G__21699_24819__$1,n__5762__auto___24816,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21699_24819__$1))));

}

var G__24869 = (__24817 + (1));
__24817 = G__24869;
continue;
} else {
}
break;
}

var c__21025__auto___24870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_21834){
var state_val_21836 = (state_21834[(1)]);
if((state_val_21836 === (7))){
var inst_21830 = (state_21834[(2)]);
var state_21834__$1 = state_21834;
var statearr_21847_24871 = state_21834__$1;
(statearr_21847_24871[(2)] = inst_21830);

(statearr_21847_24871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21836 === (1))){
var state_21834__$1 = state_21834;
var statearr_21850_24872 = state_21834__$1;
(statearr_21850_24872[(2)] = null);

(statearr_21850_24872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21836 === (4))){
var inst_21812 = (state_21834[(7)]);
var inst_21812__$1 = (state_21834[(2)]);
var inst_21813 = (inst_21812__$1 == null);
var state_21834__$1 = (function (){var statearr_21857 = state_21834;
(statearr_21857[(7)] = inst_21812__$1);

return statearr_21857;
})();
if(cljs.core.truth_(inst_21813)){
var statearr_21859_24876 = state_21834__$1;
(statearr_21859_24876[(1)] = (5));

} else {
var statearr_21864_24877 = state_21834__$1;
(statearr_21864_24877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21836 === (6))){
var inst_21812 = (state_21834[(7)]);
var inst_21817 = (state_21834[(8)]);
var inst_21817__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21820 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21821 = [inst_21812,inst_21817__$1];
var inst_21822 = (new cljs.core.PersistentVector(null,2,(5),inst_21820,inst_21821,null));
var state_21834__$1 = (function (){var statearr_21873 = state_21834;
(statearr_21873[(8)] = inst_21817__$1);

return statearr_21873;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21834__$1,(8),jobs,inst_21822);
} else {
if((state_val_21836 === (3))){
var inst_21832 = (state_21834[(2)]);
var state_21834__$1 = state_21834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21834__$1,inst_21832);
} else {
if((state_val_21836 === (2))){
var state_21834__$1 = state_21834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21834__$1,(4),from);
} else {
if((state_val_21836 === (9))){
var inst_21827 = (state_21834[(2)]);
var state_21834__$1 = (function (){var statearr_21883 = state_21834;
(statearr_21883[(9)] = inst_21827);

return statearr_21883;
})();
var statearr_21888_24885 = state_21834__$1;
(statearr_21888_24885[(2)] = null);

(statearr_21888_24885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21836 === (5))){
var inst_21815 = cljs.core.async.close_BANG_(jobs);
var state_21834__$1 = state_21834;
var statearr_21893_24889 = state_21834__$1;
(statearr_21893_24889[(2)] = inst_21815);

(statearr_21893_24889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21836 === (8))){
var inst_21817 = (state_21834[(8)]);
var inst_21824 = (state_21834[(2)]);
var state_21834__$1 = (function (){var statearr_21902 = state_21834;
(statearr_21902[(10)] = inst_21824);

return statearr_21902;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21834__$1,(9),results,inst_21817);
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
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0 = (function (){
var statearr_21917 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__);

(statearr_21917[(1)] = (1));

return statearr_21917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1 = (function (state_21834){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_21834);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e21920){var ex__19840__auto__ = e21920;
var statearr_21922_24892 = state_21834;
(statearr_21922_24892[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_21834[(4)]))){
var statearr_21928_24893 = state_21834;
(statearr_21928_24893[(1)] = cljs.core.first((state_21834[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24897 = state_21834;
state_21834 = G__24897;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__ = function(state_21834){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1.call(this,state_21834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_21941 = f__21026__auto__();
(statearr_21941[(6)] = c__21025__auto___24870);

return statearr_21941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
}));


var c__21025__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_22004){
var state_val_22006 = (state_22004[(1)]);
if((state_val_22006 === (7))){
var inst_21995 = (state_22004[(2)]);
var state_22004__$1 = state_22004;
var statearr_22018_24903 = state_22004__$1;
(statearr_22018_24903[(2)] = inst_21995);

(statearr_22018_24903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (20))){
var state_22004__$1 = state_22004;
var statearr_22026_24904 = state_22004__$1;
(statearr_22026_24904[(2)] = null);

(statearr_22026_24904[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (1))){
var state_22004__$1 = state_22004;
var statearr_22028_24906 = state_22004__$1;
(statearr_22028_24906[(2)] = null);

(statearr_22028_24906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (4))){
var inst_21954 = (state_22004[(7)]);
var inst_21954__$1 = (state_22004[(2)]);
var inst_21956 = (inst_21954__$1 == null);
var state_22004__$1 = (function (){var statearr_22039 = state_22004;
(statearr_22039[(7)] = inst_21954__$1);

return statearr_22039;
})();
if(cljs.core.truth_(inst_21956)){
var statearr_22045_24912 = state_22004__$1;
(statearr_22045_24912[(1)] = (5));

} else {
var statearr_22050_24913 = state_22004__$1;
(statearr_22050_24913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (15))){
var inst_21975 = (state_22004[(8)]);
var state_22004__$1 = state_22004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22004__$1,(18),to,inst_21975);
} else {
if((state_val_22006 === (21))){
var inst_21990 = (state_22004[(2)]);
var state_22004__$1 = state_22004;
var statearr_22051_24916 = state_22004__$1;
(statearr_22051_24916[(2)] = inst_21990);

(statearr_22051_24916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (13))){
var inst_21992 = (state_22004[(2)]);
var state_22004__$1 = (function (){var statearr_22054 = state_22004;
(statearr_22054[(9)] = inst_21992);

return statearr_22054;
})();
var statearr_22056_24918 = state_22004__$1;
(statearr_22056_24918[(2)] = null);

(statearr_22056_24918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (6))){
var inst_21954 = (state_22004[(7)]);
var state_22004__$1 = state_22004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22004__$1,(11),inst_21954);
} else {
if((state_val_22006 === (17))){
var inst_21984 = (state_22004[(2)]);
var state_22004__$1 = state_22004;
if(cljs.core.truth_(inst_21984)){
var statearr_22065_24925 = state_22004__$1;
(statearr_22065_24925[(1)] = (19));

} else {
var statearr_22066_24926 = state_22004__$1;
(statearr_22066_24926[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (3))){
var inst_21997 = (state_22004[(2)]);
var state_22004__$1 = state_22004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22004__$1,inst_21997);
} else {
if((state_val_22006 === (12))){
var inst_21970 = (state_22004[(10)]);
var state_22004__$1 = state_22004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22004__$1,(14),inst_21970);
} else {
if((state_val_22006 === (2))){
var state_22004__$1 = state_22004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22004__$1,(4),results);
} else {
if((state_val_22006 === (19))){
var state_22004__$1 = state_22004;
var statearr_22072_24930 = state_22004__$1;
(statearr_22072_24930[(2)] = null);

(statearr_22072_24930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (11))){
var inst_21970 = (state_22004[(2)]);
var state_22004__$1 = (function (){var statearr_22073 = state_22004;
(statearr_22073[(10)] = inst_21970);

return statearr_22073;
})();
var statearr_22076_24931 = state_22004__$1;
(statearr_22076_24931[(2)] = null);

(statearr_22076_24931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (9))){
var state_22004__$1 = state_22004;
var statearr_22078_24934 = state_22004__$1;
(statearr_22078_24934[(2)] = null);

(statearr_22078_24934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (5))){
var state_22004__$1 = state_22004;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22079_24939 = state_22004__$1;
(statearr_22079_24939[(1)] = (8));

} else {
var statearr_22080_24940 = state_22004__$1;
(statearr_22080_24940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (14))){
var inst_21975 = (state_22004[(8)]);
var inst_21978 = (state_22004[(11)]);
var inst_21975__$1 = (state_22004[(2)]);
var inst_21976 = (inst_21975__$1 == null);
var inst_21978__$1 = cljs.core.not(inst_21976);
var state_22004__$1 = (function (){var statearr_22082 = state_22004;
(statearr_22082[(8)] = inst_21975__$1);

(statearr_22082[(11)] = inst_21978__$1);

return statearr_22082;
})();
if(inst_21978__$1){
var statearr_22083_24946 = state_22004__$1;
(statearr_22083_24946[(1)] = (15));

} else {
var statearr_22085_24947 = state_22004__$1;
(statearr_22085_24947[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (16))){
var inst_21978 = (state_22004[(11)]);
var state_22004__$1 = state_22004;
var statearr_22089_24948 = state_22004__$1;
(statearr_22089_24948[(2)] = inst_21978);

(statearr_22089_24948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (10))){
var inst_21967 = (state_22004[(2)]);
var state_22004__$1 = state_22004;
var statearr_22091_24949 = state_22004__$1;
(statearr_22091_24949[(2)] = inst_21967);

(statearr_22091_24949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (18))){
var inst_21981 = (state_22004[(2)]);
var state_22004__$1 = state_22004;
var statearr_22093_24962 = state_22004__$1;
(statearr_22093_24962[(2)] = inst_21981);

(statearr_22093_24962[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22006 === (8))){
var inst_21960 = cljs.core.async.close_BANG_(to);
var state_22004__$1 = state_22004;
var statearr_22095_24967 = state_22004__$1;
(statearr_22095_24967[(2)] = inst_21960);

(statearr_22095_24967[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0 = (function (){
var statearr_22102 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__);

(statearr_22102[(1)] = (1));

return statearr_22102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1 = (function (state_22004){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_22004);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e22104){var ex__19840__auto__ = e22104;
var statearr_22106_24972 = state_22004;
(statearr_22106_24972[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_22004[(4)]))){
var statearr_22107_24973 = state_22004;
(statearr_22107_24973[(1)] = cljs.core.first((state_22004[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24974 = state_22004;
state_22004 = G__24974;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__ = function(state_22004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1.call(this,state_22004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_22109 = f__21026__auto__();
(statearr_22109[(6)] = c__21025__auto__);

return statearr_22109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
}));

return c__21025__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__22118 = arguments.length;
switch (G__22118) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__22132 = arguments.length;
switch (G__22132) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__22141 = arguments.length;
switch (G__22141) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__21025__auto___25006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_22173){
var state_val_22174 = (state_22173[(1)]);
if((state_val_22174 === (7))){
var inst_22169 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
var statearr_22179_25007 = state_22173__$1;
(statearr_22179_25007[(2)] = inst_22169);

(statearr_22179_25007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (1))){
var state_22173__$1 = state_22173;
var statearr_22181_25009 = state_22173__$1;
(statearr_22181_25009[(2)] = null);

(statearr_22181_25009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (4))){
var inst_22150 = (state_22173[(7)]);
var inst_22150__$1 = (state_22173[(2)]);
var inst_22151 = (inst_22150__$1 == null);
var state_22173__$1 = (function (){var statearr_22185 = state_22173;
(statearr_22185[(7)] = inst_22150__$1);

return statearr_22185;
})();
if(cljs.core.truth_(inst_22151)){
var statearr_22187_25011 = state_22173__$1;
(statearr_22187_25011[(1)] = (5));

} else {
var statearr_22188_25012 = state_22173__$1;
(statearr_22188_25012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (13))){
var state_22173__$1 = state_22173;
var statearr_22190_25019 = state_22173__$1;
(statearr_22190_25019[(2)] = null);

(statearr_22190_25019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (6))){
var inst_22150 = (state_22173[(7)]);
var inst_22156 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22150) : p.call(null,inst_22150));
var state_22173__$1 = state_22173;
if(cljs.core.truth_(inst_22156)){
var statearr_22194_25023 = state_22173__$1;
(statearr_22194_25023[(1)] = (9));

} else {
var statearr_22195_25025 = state_22173__$1;
(statearr_22195_25025[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (3))){
var inst_22171 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22173__$1,inst_22171);
} else {
if((state_val_22174 === (12))){
var state_22173__$1 = state_22173;
var statearr_22199_25030 = state_22173__$1;
(statearr_22199_25030[(2)] = null);

(statearr_22199_25030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (2))){
var state_22173__$1 = state_22173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22173__$1,(4),ch);
} else {
if((state_val_22174 === (11))){
var inst_22150 = (state_22173[(7)]);
var inst_22160 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22173__$1,(8),inst_22160,inst_22150);
} else {
if((state_val_22174 === (9))){
var state_22173__$1 = state_22173;
var statearr_22204_25043 = state_22173__$1;
(statearr_22204_25043[(2)] = tc);

(statearr_22204_25043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (5))){
var inst_22153 = cljs.core.async.close_BANG_(tc);
var inst_22154 = cljs.core.async.close_BANG_(fc);
var state_22173__$1 = (function (){var statearr_22205 = state_22173;
(statearr_22205[(8)] = inst_22153);

return statearr_22205;
})();
var statearr_22207_25046 = state_22173__$1;
(statearr_22207_25046[(2)] = inst_22154);

(statearr_22207_25046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (14))){
var inst_22167 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
var statearr_22208_25047 = state_22173__$1;
(statearr_22208_25047[(2)] = inst_22167);

(statearr_22208_25047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (10))){
var state_22173__$1 = state_22173;
var statearr_22212_25049 = state_22173__$1;
(statearr_22212_25049[(2)] = fc);

(statearr_22212_25049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (8))){
var inst_22162 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
if(cljs.core.truth_(inst_22162)){
var statearr_22214_25053 = state_22173__$1;
(statearr_22214_25053[(1)] = (12));

} else {
var statearr_22215_25054 = state_22173__$1;
(statearr_22215_25054[(1)] = (13));

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
var cljs$core$async$state_machine__19837__auto__ = null;
var cljs$core$async$state_machine__19837__auto____0 = (function (){
var statearr_22217 = [null,null,null,null,null,null,null,null,null];
(statearr_22217[(0)] = cljs$core$async$state_machine__19837__auto__);

(statearr_22217[(1)] = (1));

return statearr_22217;
});
var cljs$core$async$state_machine__19837__auto____1 = (function (state_22173){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_22173);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e22221){var ex__19840__auto__ = e22221;
var statearr_22222_25058 = state_22173;
(statearr_22222_25058[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_22173[(4)]))){
var statearr_22223_25059 = state_22173;
(statearr_22223_25059[(1)] = cljs.core.first((state_22173[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25063 = state_22173;
state_22173 = G__25063;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$state_machine__19837__auto__ = function(state_22173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19837__auto____1.call(this,state_22173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19837__auto____0;
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19837__auto____1;
return cljs$core$async$state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_22227 = f__21026__auto__();
(statearr_22227[(6)] = c__21025__auto___25006);

return statearr_22227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
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
var c__21025__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_22257){
var state_val_22258 = (state_22257[(1)]);
if((state_val_22258 === (7))){
var inst_22253 = (state_22257[(2)]);
var state_22257__$1 = state_22257;
var statearr_22262_25067 = state_22257__$1;
(statearr_22262_25067[(2)] = inst_22253);

(statearr_22262_25067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22258 === (1))){
var inst_22235 = init;
var inst_22236 = inst_22235;
var state_22257__$1 = (function (){var statearr_22263 = state_22257;
(statearr_22263[(7)] = inst_22236);

return statearr_22263;
})();
var statearr_22264_25073 = state_22257__$1;
(statearr_22264_25073[(2)] = null);

(statearr_22264_25073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22258 === (4))){
var inst_22240 = (state_22257[(8)]);
var inst_22240__$1 = (state_22257[(2)]);
var inst_22241 = (inst_22240__$1 == null);
var state_22257__$1 = (function (){var statearr_22268 = state_22257;
(statearr_22268[(8)] = inst_22240__$1);

return statearr_22268;
})();
if(cljs.core.truth_(inst_22241)){
var statearr_22269_25079 = state_22257__$1;
(statearr_22269_25079[(1)] = (5));

} else {
var statearr_22270_25081 = state_22257__$1;
(statearr_22270_25081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22258 === (6))){
var inst_22236 = (state_22257[(7)]);
var inst_22240 = (state_22257[(8)]);
var inst_22244 = (state_22257[(9)]);
var inst_22244__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_22236,inst_22240) : f.call(null,inst_22236,inst_22240));
var inst_22245 = cljs.core.reduced_QMARK_(inst_22244__$1);
var state_22257__$1 = (function (){var statearr_22274 = state_22257;
(statearr_22274[(9)] = inst_22244__$1);

return statearr_22274;
})();
if(inst_22245){
var statearr_22277_25090 = state_22257__$1;
(statearr_22277_25090[(1)] = (8));

} else {
var statearr_22278_25091 = state_22257__$1;
(statearr_22278_25091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22258 === (3))){
var inst_22255 = (state_22257[(2)]);
var state_22257__$1 = state_22257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22257__$1,inst_22255);
} else {
if((state_val_22258 === (2))){
var state_22257__$1 = state_22257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22257__$1,(4),ch);
} else {
if((state_val_22258 === (9))){
var inst_22244 = (state_22257[(9)]);
var inst_22236 = inst_22244;
var state_22257__$1 = (function (){var statearr_22289 = state_22257;
(statearr_22289[(7)] = inst_22236);

return statearr_22289;
})();
var statearr_22291_25105 = state_22257__$1;
(statearr_22291_25105[(2)] = null);

(statearr_22291_25105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22258 === (5))){
var inst_22236 = (state_22257[(7)]);
var state_22257__$1 = state_22257;
var statearr_22292_25107 = state_22257__$1;
(statearr_22292_25107[(2)] = inst_22236);

(statearr_22292_25107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22258 === (10))){
var inst_22251 = (state_22257[(2)]);
var state_22257__$1 = state_22257;
var statearr_22293_25109 = state_22257__$1;
(statearr_22293_25109[(2)] = inst_22251);

(statearr_22293_25109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22258 === (8))){
var inst_22244 = (state_22257[(9)]);
var inst_22247 = cljs.core.deref(inst_22244);
var state_22257__$1 = state_22257;
var statearr_22295_25113 = state_22257__$1;
(statearr_22295_25113[(2)] = inst_22247);

(statearr_22295_25113[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__19837__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19837__auto____0 = (function (){
var statearr_22298 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22298[(0)] = cljs$core$async$reduce_$_state_machine__19837__auto__);

(statearr_22298[(1)] = (1));

return statearr_22298;
});
var cljs$core$async$reduce_$_state_machine__19837__auto____1 = (function (state_22257){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_22257);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e22304){var ex__19840__auto__ = e22304;
var statearr_22305_25123 = state_22257;
(statearr_22305_25123[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_22257[(4)]))){
var statearr_22309_25124 = state_22257;
(statearr_22309_25124[(1)] = cljs.core.first((state_22257[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25128 = state_22257;
state_22257 = G__25128;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19837__auto__ = function(state_22257){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19837__auto____1.call(this,state_22257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19837__auto____0;
cljs$core$async$reduce_$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19837__auto____1;
return cljs$core$async$reduce_$_state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_22316 = f__21026__auto__();
(statearr_22316[(6)] = c__21025__auto__);

return statearr_22316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
}));

return c__21025__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__21025__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_22329){
var state_val_22330 = (state_22329[(1)]);
if((state_val_22330 === (1))){
var inst_22323 = cljs.core.async.reduce(f__$1,init,ch);
var state_22329__$1 = state_22329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22329__$1,(2),inst_22323);
} else {
if((state_val_22330 === (2))){
var inst_22325 = (state_22329[(2)]);
var inst_22327 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_22325) : f__$1.call(null,inst_22325));
var state_22329__$1 = state_22329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22329__$1,inst_22327);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__19837__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19837__auto____0 = (function (){
var statearr_22339 = [null,null,null,null,null,null,null];
(statearr_22339[(0)] = cljs$core$async$transduce_$_state_machine__19837__auto__);

(statearr_22339[(1)] = (1));

return statearr_22339;
});
var cljs$core$async$transduce_$_state_machine__19837__auto____1 = (function (state_22329){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_22329);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e22340){var ex__19840__auto__ = e22340;
var statearr_22342_25193 = state_22329;
(statearr_22342_25193[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_22329[(4)]))){
var statearr_22346_25203 = state_22329;
(statearr_22346_25203[(1)] = cljs.core.first((state_22329[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25213 = state_22329;
state_22329 = G__25213;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19837__auto__ = function(state_22329){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19837__auto____1.call(this,state_22329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19837__auto____0;
cljs$core$async$transduce_$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19837__auto____1;
return cljs$core$async$transduce_$_state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_22351 = f__21026__auto__();
(statearr_22351[(6)] = c__21025__auto__);

return statearr_22351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
}));

return c__21025__auto__;
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
var G__22354 = arguments.length;
switch (G__22354) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21025__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_22391){
var state_val_22392 = (state_22391[(1)]);
if((state_val_22392 === (7))){
var inst_22370 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
var statearr_22402_25270 = state_22391__$1;
(statearr_22402_25270[(2)] = inst_22370);

(statearr_22402_25270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (1))){
var inst_22363 = cljs.core.seq(coll);
var inst_22364 = inst_22363;
var state_22391__$1 = (function (){var statearr_22404 = state_22391;
(statearr_22404[(7)] = inst_22364);

return statearr_22404;
})();
var statearr_22405_25282 = state_22391__$1;
(statearr_22405_25282[(2)] = null);

(statearr_22405_25282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (4))){
var inst_22364 = (state_22391[(7)]);
var inst_22368 = cljs.core.first(inst_22364);
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22391__$1,(7),ch,inst_22368);
} else {
if((state_val_22392 === (13))){
var inst_22382 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
var statearr_22414_25295 = state_22391__$1;
(statearr_22414_25295[(2)] = inst_22382);

(statearr_22414_25295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (6))){
var inst_22373 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
if(cljs.core.truth_(inst_22373)){
var statearr_22416_25298 = state_22391__$1;
(statearr_22416_25298[(1)] = (8));

} else {
var statearr_22418_25299 = state_22391__$1;
(statearr_22418_25299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (3))){
var inst_22386 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22391__$1,inst_22386);
} else {
if((state_val_22392 === (12))){
var state_22391__$1 = state_22391;
var statearr_22425_25303 = state_22391__$1;
(statearr_22425_25303[(2)] = null);

(statearr_22425_25303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (2))){
var inst_22364 = (state_22391[(7)]);
var state_22391__$1 = state_22391;
if(cljs.core.truth_(inst_22364)){
var statearr_22427_25306 = state_22391__$1;
(statearr_22427_25306[(1)] = (4));

} else {
var statearr_22428_25307 = state_22391__$1;
(statearr_22428_25307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (11))){
var inst_22379 = cljs.core.async.close_BANG_(ch);
var state_22391__$1 = state_22391;
var statearr_22431_25309 = state_22391__$1;
(statearr_22431_25309[(2)] = inst_22379);

(statearr_22431_25309[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (9))){
var state_22391__$1 = state_22391;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22437_25315 = state_22391__$1;
(statearr_22437_25315[(1)] = (11));

} else {
var statearr_22441_25318 = state_22391__$1;
(statearr_22441_25318[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (5))){
var inst_22364 = (state_22391[(7)]);
var state_22391__$1 = state_22391;
var statearr_22444_25336 = state_22391__$1;
(statearr_22444_25336[(2)] = inst_22364);

(statearr_22444_25336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (10))){
var inst_22384 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
var statearr_22445_25345 = state_22391__$1;
(statearr_22445_25345[(2)] = inst_22384);

(statearr_22445_25345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (8))){
var inst_22364 = (state_22391[(7)]);
var inst_22375 = cljs.core.next(inst_22364);
var inst_22364__$1 = inst_22375;
var state_22391__$1 = (function (){var statearr_22450 = state_22391;
(statearr_22450[(7)] = inst_22364__$1);

return statearr_22450;
})();
var statearr_22451_25356 = state_22391__$1;
(statearr_22451_25356[(2)] = null);

(statearr_22451_25356[(1)] = (2));


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
var cljs$core$async$state_machine__19837__auto__ = null;
var cljs$core$async$state_machine__19837__auto____0 = (function (){
var statearr_22454 = [null,null,null,null,null,null,null,null];
(statearr_22454[(0)] = cljs$core$async$state_machine__19837__auto__);

(statearr_22454[(1)] = (1));

return statearr_22454;
});
var cljs$core$async$state_machine__19837__auto____1 = (function (state_22391){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_22391);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e22457){var ex__19840__auto__ = e22457;
var statearr_22458_25357 = state_22391;
(statearr_22458_25357[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_22391[(4)]))){
var statearr_22465_25358 = state_22391;
(statearr_22465_25358[(1)] = cljs.core.first((state_22391[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25359 = state_22391;
state_22391 = G__25359;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$state_machine__19837__auto__ = function(state_22391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19837__auto____1.call(this,state_22391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19837__auto____0;
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19837__auto____1;
return cljs$core$async$state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_22472 = f__21026__auto__();
(statearr_22472[(6)] = c__21025__auto__);

return statearr_22472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
}));

return c__21025__auto__;
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
var G__22489 = arguments.length;
switch (G__22489) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

var cljs$core$async$Mux$muxch_STAR_$dyn_25390 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_25390(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25397 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_25397(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25411 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_25411(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25418 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_25418(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22557 = (function (ch,cs,meta22558){
this.ch = ch;
this.cs = cs;
this.meta22558 = meta22558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22559,meta22558__$1){
var self__ = this;
var _22559__$1 = this;
return (new cljs.core.async.t_cljs$core$async22557(self__.ch,self__.cs,meta22558__$1));
}));

(cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22559){
var self__ = this;
var _22559__$1 = this;
return self__.meta22558;
}));

(cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async22557.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async22557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22558","meta22558",2027662209,null)], null);
}));

(cljs.core.async.t_cljs$core$async22557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22557");

(cljs.core.async.t_cljs$core$async22557.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async22557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22557.
 */
cljs.core.async.__GT_t_cljs$core$async22557 = (function cljs$core$async$__GT_t_cljs$core$async22557(ch,cs,meta22558){
return (new cljs.core.async.t_cljs$core$async22557(ch,cs,meta22558));
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
var m = (new cljs.core.async.t_cljs$core$async22557(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__21025__auto___25442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_22726){
var state_val_22727 = (state_22726[(1)]);
if((state_val_22727 === (7))){
var inst_22722 = (state_22726[(2)]);
var state_22726__$1 = state_22726;
var statearr_22730_25443 = state_22726__$1;
(statearr_22730_25443[(2)] = inst_22722);

(statearr_22730_25443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (20))){
var inst_22616 = (state_22726[(7)]);
var inst_22628 = cljs.core.first(inst_22616);
var inst_22630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22628,(0),null);
var inst_22631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22628,(1),null);
var state_22726__$1 = (function (){var statearr_22734 = state_22726;
(statearr_22734[(8)] = inst_22630);

return statearr_22734;
})();
if(cljs.core.truth_(inst_22631)){
var statearr_22736_25452 = state_22726__$1;
(statearr_22736_25452[(1)] = (22));

} else {
var statearr_22737_25454 = state_22726__$1;
(statearr_22737_25454[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (27))){
var inst_22659 = (state_22726[(9)]);
var inst_22661 = (state_22726[(10)]);
var inst_22670 = (state_22726[(11)]);
var inst_22583 = (state_22726[(12)]);
var inst_22670__$1 = cljs.core._nth(inst_22659,inst_22661);
var inst_22672 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22670__$1,inst_22583,done);
var state_22726__$1 = (function (){var statearr_22740 = state_22726;
(statearr_22740[(11)] = inst_22670__$1);

return statearr_22740;
})();
if(cljs.core.truth_(inst_22672)){
var statearr_22742_25465 = state_22726__$1;
(statearr_22742_25465[(1)] = (30));

} else {
var statearr_22743_25466 = state_22726__$1;
(statearr_22743_25466[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (1))){
var state_22726__$1 = state_22726;
var statearr_22746_25467 = state_22726__$1;
(statearr_22746_25467[(2)] = null);

(statearr_22746_25467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (24))){
var inst_22616 = (state_22726[(7)]);
var inst_22636 = (state_22726[(2)]);
var inst_22637 = cljs.core.next(inst_22616);
var inst_22593 = inst_22637;
var inst_22594 = null;
var inst_22595 = (0);
var inst_22596 = (0);
var state_22726__$1 = (function (){var statearr_22748 = state_22726;
(statearr_22748[(13)] = inst_22636);

(statearr_22748[(14)] = inst_22593);

(statearr_22748[(15)] = inst_22594);

(statearr_22748[(16)] = inst_22595);

(statearr_22748[(17)] = inst_22596);

return statearr_22748;
})();
var statearr_22750_25474 = state_22726__$1;
(statearr_22750_25474[(2)] = null);

(statearr_22750_25474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (39))){
var state_22726__$1 = state_22726;
var statearr_22754_25483 = state_22726__$1;
(statearr_22754_25483[(2)] = null);

(statearr_22754_25483[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (4))){
var inst_22583 = (state_22726[(12)]);
var inst_22583__$1 = (state_22726[(2)]);
var inst_22585 = (inst_22583__$1 == null);
var state_22726__$1 = (function (){var statearr_22757 = state_22726;
(statearr_22757[(12)] = inst_22583__$1);

return statearr_22757;
})();
if(cljs.core.truth_(inst_22585)){
var statearr_22758_25484 = state_22726__$1;
(statearr_22758_25484[(1)] = (5));

} else {
var statearr_22760_25485 = state_22726__$1;
(statearr_22760_25485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (15))){
var inst_22596 = (state_22726[(17)]);
var inst_22593 = (state_22726[(14)]);
var inst_22594 = (state_22726[(15)]);
var inst_22595 = (state_22726[(16)]);
var inst_22611 = (state_22726[(2)]);
var inst_22612 = (inst_22596 + (1));
var tmp22751 = inst_22593;
var tmp22752 = inst_22595;
var tmp22753 = inst_22594;
var inst_22593__$1 = tmp22751;
var inst_22594__$1 = tmp22753;
var inst_22595__$1 = tmp22752;
var inst_22596__$1 = inst_22612;
var state_22726__$1 = (function (){var statearr_22763 = state_22726;
(statearr_22763[(18)] = inst_22611);

(statearr_22763[(14)] = inst_22593__$1);

(statearr_22763[(15)] = inst_22594__$1);

(statearr_22763[(16)] = inst_22595__$1);

(statearr_22763[(17)] = inst_22596__$1);

return statearr_22763;
})();
var statearr_22764_25486 = state_22726__$1;
(statearr_22764_25486[(2)] = null);

(statearr_22764_25486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (21))){
var inst_22640 = (state_22726[(2)]);
var state_22726__$1 = state_22726;
var statearr_22768_25487 = state_22726__$1;
(statearr_22768_25487[(2)] = inst_22640);

(statearr_22768_25487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (31))){
var inst_22670 = (state_22726[(11)]);
var inst_22675 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22670);
var state_22726__$1 = state_22726;
var statearr_22772_25488 = state_22726__$1;
(statearr_22772_25488[(2)] = inst_22675);

(statearr_22772_25488[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (32))){
var inst_22661 = (state_22726[(10)]);
var inst_22658 = (state_22726[(19)]);
var inst_22659 = (state_22726[(9)]);
var inst_22660 = (state_22726[(20)]);
var inst_22677 = (state_22726[(2)]);
var inst_22678 = (inst_22661 + (1));
var tmp22765 = inst_22659;
var tmp22766 = inst_22660;
var tmp22767 = inst_22658;
var inst_22658__$1 = tmp22767;
var inst_22659__$1 = tmp22765;
var inst_22660__$1 = tmp22766;
var inst_22661__$1 = inst_22678;
var state_22726__$1 = (function (){var statearr_22777 = state_22726;
(statearr_22777[(21)] = inst_22677);

(statearr_22777[(19)] = inst_22658__$1);

(statearr_22777[(9)] = inst_22659__$1);

(statearr_22777[(20)] = inst_22660__$1);

(statearr_22777[(10)] = inst_22661__$1);

return statearr_22777;
})();
var statearr_22778_25513 = state_22726__$1;
(statearr_22778_25513[(2)] = null);

(statearr_22778_25513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (40))){
var inst_22692 = (state_22726[(22)]);
var inst_22698 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22692);
var state_22726__$1 = state_22726;
var statearr_22785_25514 = state_22726__$1;
(statearr_22785_25514[(2)] = inst_22698);

(statearr_22785_25514[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (33))){
var inst_22681 = (state_22726[(23)]);
var inst_22685 = cljs.core.chunked_seq_QMARK_(inst_22681);
var state_22726__$1 = state_22726;
if(inst_22685){
var statearr_22789_25519 = state_22726__$1;
(statearr_22789_25519[(1)] = (36));

} else {
var statearr_22790_25521 = state_22726__$1;
(statearr_22790_25521[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (13))){
var inst_22605 = (state_22726[(24)]);
var inst_22608 = cljs.core.async.close_BANG_(inst_22605);
var state_22726__$1 = state_22726;
var statearr_22791_25523 = state_22726__$1;
(statearr_22791_25523[(2)] = inst_22608);

(statearr_22791_25523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (22))){
var inst_22630 = (state_22726[(8)]);
var inst_22633 = cljs.core.async.close_BANG_(inst_22630);
var state_22726__$1 = state_22726;
var statearr_22792_25524 = state_22726__$1;
(statearr_22792_25524[(2)] = inst_22633);

(statearr_22792_25524[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (36))){
var inst_22681 = (state_22726[(23)]);
var inst_22687 = cljs.core.chunk_first(inst_22681);
var inst_22688 = cljs.core.chunk_rest(inst_22681);
var inst_22689 = cljs.core.count(inst_22687);
var inst_22658 = inst_22688;
var inst_22659 = inst_22687;
var inst_22660 = inst_22689;
var inst_22661 = (0);
var state_22726__$1 = (function (){var statearr_22797 = state_22726;
(statearr_22797[(19)] = inst_22658);

(statearr_22797[(9)] = inst_22659);

(statearr_22797[(20)] = inst_22660);

(statearr_22797[(10)] = inst_22661);

return statearr_22797;
})();
var statearr_22802_25530 = state_22726__$1;
(statearr_22802_25530[(2)] = null);

(statearr_22802_25530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (41))){
var inst_22681 = (state_22726[(23)]);
var inst_22700 = (state_22726[(2)]);
var inst_22701 = cljs.core.next(inst_22681);
var inst_22658 = inst_22701;
var inst_22659 = null;
var inst_22660 = (0);
var inst_22661 = (0);
var state_22726__$1 = (function (){var statearr_22803 = state_22726;
(statearr_22803[(25)] = inst_22700);

(statearr_22803[(19)] = inst_22658);

(statearr_22803[(9)] = inst_22659);

(statearr_22803[(20)] = inst_22660);

(statearr_22803[(10)] = inst_22661);

return statearr_22803;
})();
var statearr_22808_25540 = state_22726__$1;
(statearr_22808_25540[(2)] = null);

(statearr_22808_25540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (43))){
var state_22726__$1 = state_22726;
var statearr_22809_25541 = state_22726__$1;
(statearr_22809_25541[(2)] = null);

(statearr_22809_25541[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (29))){
var inst_22709 = (state_22726[(2)]);
var state_22726__$1 = state_22726;
var statearr_22810_25542 = state_22726__$1;
(statearr_22810_25542[(2)] = inst_22709);

(statearr_22810_25542[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (44))){
var inst_22719 = (state_22726[(2)]);
var state_22726__$1 = (function (){var statearr_22811 = state_22726;
(statearr_22811[(26)] = inst_22719);

return statearr_22811;
})();
var statearr_22812_25543 = state_22726__$1;
(statearr_22812_25543[(2)] = null);

(statearr_22812_25543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (6))){
var inst_22650 = (state_22726[(27)]);
var inst_22649 = cljs.core.deref(cs);
var inst_22650__$1 = cljs.core.keys(inst_22649);
var inst_22651 = cljs.core.count(inst_22650__$1);
var inst_22652 = cljs.core.reset_BANG_(dctr,inst_22651);
var inst_22657 = cljs.core.seq(inst_22650__$1);
var inst_22658 = inst_22657;
var inst_22659 = null;
var inst_22660 = (0);
var inst_22661 = (0);
var state_22726__$1 = (function (){var statearr_22816 = state_22726;
(statearr_22816[(27)] = inst_22650__$1);

(statearr_22816[(28)] = inst_22652);

(statearr_22816[(19)] = inst_22658);

(statearr_22816[(9)] = inst_22659);

(statearr_22816[(20)] = inst_22660);

(statearr_22816[(10)] = inst_22661);

return statearr_22816;
})();
var statearr_22819_25545 = state_22726__$1;
(statearr_22819_25545[(2)] = null);

(statearr_22819_25545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (28))){
var inst_22658 = (state_22726[(19)]);
var inst_22681 = (state_22726[(23)]);
var inst_22681__$1 = cljs.core.seq(inst_22658);
var state_22726__$1 = (function (){var statearr_22821 = state_22726;
(statearr_22821[(23)] = inst_22681__$1);

return statearr_22821;
})();
if(inst_22681__$1){
var statearr_22822_25548 = state_22726__$1;
(statearr_22822_25548[(1)] = (33));

} else {
var statearr_22824_25549 = state_22726__$1;
(statearr_22824_25549[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (25))){
var inst_22661 = (state_22726[(10)]);
var inst_22660 = (state_22726[(20)]);
var inst_22667 = (inst_22661 < inst_22660);
var inst_22668 = inst_22667;
var state_22726__$1 = state_22726;
if(cljs.core.truth_(inst_22668)){
var statearr_22828_25553 = state_22726__$1;
(statearr_22828_25553[(1)] = (27));

} else {
var statearr_22829_25554 = state_22726__$1;
(statearr_22829_25554[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (34))){
var state_22726__$1 = state_22726;
var statearr_22830_25555 = state_22726__$1;
(statearr_22830_25555[(2)] = null);

(statearr_22830_25555[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (17))){
var state_22726__$1 = state_22726;
var statearr_22831_25560 = state_22726__$1;
(statearr_22831_25560[(2)] = null);

(statearr_22831_25560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (3))){
var inst_22724 = (state_22726[(2)]);
var state_22726__$1 = state_22726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22726__$1,inst_22724);
} else {
if((state_val_22727 === (12))){
var inst_22645 = (state_22726[(2)]);
var state_22726__$1 = state_22726;
var statearr_22833_25561 = state_22726__$1;
(statearr_22833_25561[(2)] = inst_22645);

(statearr_22833_25561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (2))){
var state_22726__$1 = state_22726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22726__$1,(4),ch);
} else {
if((state_val_22727 === (23))){
var state_22726__$1 = state_22726;
var statearr_22834_25564 = state_22726__$1;
(statearr_22834_25564[(2)] = null);

(statearr_22834_25564[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (35))){
var inst_22707 = (state_22726[(2)]);
var state_22726__$1 = state_22726;
var statearr_22835_25566 = state_22726__$1;
(statearr_22835_25566[(2)] = inst_22707);

(statearr_22835_25566[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (19))){
var inst_22616 = (state_22726[(7)]);
var inst_22620 = cljs.core.chunk_first(inst_22616);
var inst_22621 = cljs.core.chunk_rest(inst_22616);
var inst_22622 = cljs.core.count(inst_22620);
var inst_22593 = inst_22621;
var inst_22594 = inst_22620;
var inst_22595 = inst_22622;
var inst_22596 = (0);
var state_22726__$1 = (function (){var statearr_22838 = state_22726;
(statearr_22838[(14)] = inst_22593);

(statearr_22838[(15)] = inst_22594);

(statearr_22838[(16)] = inst_22595);

(statearr_22838[(17)] = inst_22596);

return statearr_22838;
})();
var statearr_22839_25573 = state_22726__$1;
(statearr_22839_25573[(2)] = null);

(statearr_22839_25573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (11))){
var inst_22593 = (state_22726[(14)]);
var inst_22616 = (state_22726[(7)]);
var inst_22616__$1 = cljs.core.seq(inst_22593);
var state_22726__$1 = (function (){var statearr_22843 = state_22726;
(statearr_22843[(7)] = inst_22616__$1);

return statearr_22843;
})();
if(inst_22616__$1){
var statearr_22844_25578 = state_22726__$1;
(statearr_22844_25578[(1)] = (16));

} else {
var statearr_22845_25580 = state_22726__$1;
(statearr_22845_25580[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (9))){
var inst_22647 = (state_22726[(2)]);
var state_22726__$1 = state_22726;
var statearr_22846_25581 = state_22726__$1;
(statearr_22846_25581[(2)] = inst_22647);

(statearr_22846_25581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (5))){
var inst_22591 = cljs.core.deref(cs);
var inst_22592 = cljs.core.seq(inst_22591);
var inst_22593 = inst_22592;
var inst_22594 = null;
var inst_22595 = (0);
var inst_22596 = (0);
var state_22726__$1 = (function (){var statearr_22848 = state_22726;
(statearr_22848[(14)] = inst_22593);

(statearr_22848[(15)] = inst_22594);

(statearr_22848[(16)] = inst_22595);

(statearr_22848[(17)] = inst_22596);

return statearr_22848;
})();
var statearr_22849_25593 = state_22726__$1;
(statearr_22849_25593[(2)] = null);

(statearr_22849_25593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (14))){
var state_22726__$1 = state_22726;
var statearr_22853_25595 = state_22726__$1;
(statearr_22853_25595[(2)] = null);

(statearr_22853_25595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (45))){
var inst_22716 = (state_22726[(2)]);
var state_22726__$1 = state_22726;
var statearr_22856_25599 = state_22726__$1;
(statearr_22856_25599[(2)] = inst_22716);

(statearr_22856_25599[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (26))){
var inst_22650 = (state_22726[(27)]);
var inst_22711 = (state_22726[(2)]);
var inst_22713 = cljs.core.seq(inst_22650);
var state_22726__$1 = (function (){var statearr_22857 = state_22726;
(statearr_22857[(29)] = inst_22711);

return statearr_22857;
})();
if(inst_22713){
var statearr_22858_25600 = state_22726__$1;
(statearr_22858_25600[(1)] = (42));

} else {
var statearr_22859_25601 = state_22726__$1;
(statearr_22859_25601[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (16))){
var inst_22616 = (state_22726[(7)]);
var inst_22618 = cljs.core.chunked_seq_QMARK_(inst_22616);
var state_22726__$1 = state_22726;
if(inst_22618){
var statearr_22861_25605 = state_22726__$1;
(statearr_22861_25605[(1)] = (19));

} else {
var statearr_22862_25606 = state_22726__$1;
(statearr_22862_25606[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (38))){
var inst_22704 = (state_22726[(2)]);
var state_22726__$1 = state_22726;
var statearr_22869_25608 = state_22726__$1;
(statearr_22869_25608[(2)] = inst_22704);

(statearr_22869_25608[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (30))){
var state_22726__$1 = state_22726;
var statearr_22870_25609 = state_22726__$1;
(statearr_22870_25609[(2)] = null);

(statearr_22870_25609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (10))){
var inst_22594 = (state_22726[(15)]);
var inst_22596 = (state_22726[(17)]);
var inst_22604 = cljs.core._nth(inst_22594,inst_22596);
var inst_22605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22604,(0),null);
var inst_22606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22604,(1),null);
var state_22726__$1 = (function (){var statearr_22871 = state_22726;
(statearr_22871[(24)] = inst_22605);

return statearr_22871;
})();
if(cljs.core.truth_(inst_22606)){
var statearr_22872_25614 = state_22726__$1;
(statearr_22872_25614[(1)] = (13));

} else {
var statearr_22873_25615 = state_22726__$1;
(statearr_22873_25615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (18))){
var inst_22643 = (state_22726[(2)]);
var state_22726__$1 = state_22726;
var statearr_22874_25616 = state_22726__$1;
(statearr_22874_25616[(2)] = inst_22643);

(statearr_22874_25616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (42))){
var state_22726__$1 = state_22726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22726__$1,(45),dchan);
} else {
if((state_val_22727 === (37))){
var inst_22681 = (state_22726[(23)]);
var inst_22692 = (state_22726[(22)]);
var inst_22583 = (state_22726[(12)]);
var inst_22692__$1 = cljs.core.first(inst_22681);
var inst_22695 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22692__$1,inst_22583,done);
var state_22726__$1 = (function (){var statearr_22876 = state_22726;
(statearr_22876[(22)] = inst_22692__$1);

return statearr_22876;
})();
if(cljs.core.truth_(inst_22695)){
var statearr_22877_25622 = state_22726__$1;
(statearr_22877_25622[(1)] = (39));

} else {
var statearr_22878_25623 = state_22726__$1;
(statearr_22878_25623[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22727 === (8))){
var inst_22596 = (state_22726[(17)]);
var inst_22595 = (state_22726[(16)]);
var inst_22598 = (inst_22596 < inst_22595);
var inst_22599 = inst_22598;
var state_22726__$1 = state_22726;
if(cljs.core.truth_(inst_22599)){
var statearr_22892_25625 = state_22726__$1;
(statearr_22892_25625[(1)] = (10));

} else {
var statearr_22894_25626 = state_22726__$1;
(statearr_22894_25626[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__19837__auto__ = null;
var cljs$core$async$mult_$_state_machine__19837__auto____0 = (function (){
var statearr_22901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22901[(0)] = cljs$core$async$mult_$_state_machine__19837__auto__);

(statearr_22901[(1)] = (1));

return statearr_22901;
});
var cljs$core$async$mult_$_state_machine__19837__auto____1 = (function (state_22726){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_22726);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e22903){var ex__19840__auto__ = e22903;
var statearr_22904_25628 = state_22726;
(statearr_22904_25628[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_22726[(4)]))){
var statearr_22906_25629 = state_22726;
(statearr_22906_25629[(1)] = cljs.core.first((state_22726[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25634 = state_22726;
state_22726 = G__25634;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19837__auto__ = function(state_22726){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19837__auto____1.call(this,state_22726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19837__auto____0;
cljs$core$async$mult_$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19837__auto____1;
return cljs$core$async$mult_$_state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_22914 = f__21026__auto__();
(statearr_22914[(6)] = c__21025__auto___25442);

return statearr_22914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
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
var G__22922 = arguments.length;
switch (G__22922) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

var cljs$core$async$Mix$admix_STAR_$dyn_25645 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_25645(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_25650 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_25650(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25652 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25652(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25653 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_25653(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25656 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25656(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___25664 = arguments.length;
var i__5898__auto___25665 = (0);
while(true){
if((i__5898__auto___25665 < len__5897__auto___25664)){
args__5903__auto__.push((arguments[i__5898__auto___25665]));

var G__25666 = (i__5898__auto___25665 + (1));
i__5898__auto___25665 = G__25666;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22996){
var map__22997 = p__22996;
var map__22997__$1 = cljs.core.__destructure_map(map__22997);
var opts = map__22997__$1;
var statearr_22998_25669 = state;
(statearr_22998_25669[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_23001_25670 = state;
(statearr_23001_25670[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_23002_25671 = state;
(statearr_23002_25671[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22983){
var G__22984 = cljs.core.first(seq22983);
var seq22983__$1 = cljs.core.next(seq22983);
var G__22985 = cljs.core.first(seq22983__$1);
var seq22983__$2 = cljs.core.next(seq22983__$1);
var G__22986 = cljs.core.first(seq22983__$2);
var seq22983__$3 = cljs.core.next(seq22983__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22984,G__22985,G__22986,seq22983__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23025 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23026){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23026 = meta23026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23027,meta23026__$1){
var self__ = this;
var _23027__$1 = this;
return (new cljs.core.async.t_cljs$core$async23025(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23026__$1));
}));

(cljs.core.async.t_cljs$core$async23025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23027){
var self__ = this;
var _23027__$1 = this;
return self__.meta23026;
}));

(cljs.core.async.t_cljs$core$async23025.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async23025.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23025.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async23025.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async23025.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async23025.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async23025.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async23025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23026","meta23026",257201060,null)], null);
}));

(cljs.core.async.t_cljs$core$async23025.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23025");

(cljs.core.async.t_cljs$core$async23025.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async23025");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23025.
 */
cljs.core.async.__GT_t_cljs$core$async23025 = (function cljs$core$async$__GT_t_cljs$core$async23025(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23026){
return (new cljs.core.async.t_cljs$core$async23025(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23026));
});


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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async23025(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__21025__auto___25714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_23136){
var state_val_23140 = (state_23136[(1)]);
if((state_val_23140 === (7))){
var inst_23089 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
if(cljs.core.truth_(inst_23089)){
var statearr_23147_25718 = state_23136__$1;
(statearr_23147_25718[(1)] = (8));

} else {
var statearr_23148_25720 = state_23136__$1;
(statearr_23148_25720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (20))){
var inst_23078 = (state_23136[(7)]);
var state_23136__$1 = state_23136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23136__$1,(23),out,inst_23078);
} else {
if((state_val_23140 === (1))){
var inst_23058 = calc_state();
var inst_23059 = cljs.core.__destructure_map(inst_23058);
var inst_23060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23059,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23059,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23059,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23065 = inst_23058;
var state_23136__$1 = (function (){var statearr_23152 = state_23136;
(statearr_23152[(8)] = inst_23060);

(statearr_23152[(9)] = inst_23061);

(statearr_23152[(10)] = inst_23064);

(statearr_23152[(11)] = inst_23065);

return statearr_23152;
})();
var statearr_23153_25731 = state_23136__$1;
(statearr_23153_25731[(2)] = null);

(statearr_23153_25731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (24))){
var inst_23068 = (state_23136[(12)]);
var inst_23065 = inst_23068;
var state_23136__$1 = (function (){var statearr_23155 = state_23136;
(statearr_23155[(11)] = inst_23065);

return statearr_23155;
})();
var statearr_23156_25734 = state_23136__$1;
(statearr_23156_25734[(2)] = null);

(statearr_23156_25734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (4))){
var inst_23078 = (state_23136[(7)]);
var inst_23084 = (state_23136[(13)]);
var inst_23076 = (state_23136[(2)]);
var inst_23078__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23076,(0),null);
var inst_23079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23076,(1),null);
var inst_23084__$1 = (inst_23078__$1 == null);
var state_23136__$1 = (function (){var statearr_23158 = state_23136;
(statearr_23158[(7)] = inst_23078__$1);

(statearr_23158[(14)] = inst_23079);

(statearr_23158[(13)] = inst_23084__$1);

return statearr_23158;
})();
if(cljs.core.truth_(inst_23084__$1)){
var statearr_23159_25736 = state_23136__$1;
(statearr_23159_25736[(1)] = (5));

} else {
var statearr_23160_25739 = state_23136__$1;
(statearr_23160_25739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (15))){
var inst_23069 = (state_23136[(15)]);
var inst_23107 = (state_23136[(16)]);
var inst_23107__$1 = cljs.core.empty_QMARK_(inst_23069);
var state_23136__$1 = (function (){var statearr_23164 = state_23136;
(statearr_23164[(16)] = inst_23107__$1);

return statearr_23164;
})();
if(inst_23107__$1){
var statearr_23165_25742 = state_23136__$1;
(statearr_23165_25742[(1)] = (17));

} else {
var statearr_23168_25745 = state_23136__$1;
(statearr_23168_25745[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (21))){
var inst_23068 = (state_23136[(12)]);
var inst_23065 = inst_23068;
var state_23136__$1 = (function (){var statearr_23169 = state_23136;
(statearr_23169[(11)] = inst_23065);

return statearr_23169;
})();
var statearr_23170_25749 = state_23136__$1;
(statearr_23170_25749[(2)] = null);

(statearr_23170_25749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (13))){
var inst_23098 = (state_23136[(2)]);
var inst_23099 = calc_state();
var inst_23065 = inst_23099;
var state_23136__$1 = (function (){var statearr_23172 = state_23136;
(statearr_23172[(17)] = inst_23098);

(statearr_23172[(11)] = inst_23065);

return statearr_23172;
})();
var statearr_23173_25752 = state_23136__$1;
(statearr_23173_25752[(2)] = null);

(statearr_23173_25752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (22))){
var inst_23128 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
var statearr_23174_25757 = state_23136__$1;
(statearr_23174_25757[(2)] = inst_23128);

(statearr_23174_25757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (6))){
var inst_23079 = (state_23136[(14)]);
var inst_23087 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23079,change);
var state_23136__$1 = state_23136;
var statearr_23175_25766 = state_23136__$1;
(statearr_23175_25766[(2)] = inst_23087);

(statearr_23175_25766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (25))){
var state_23136__$1 = state_23136;
var statearr_23176_25769 = state_23136__$1;
(statearr_23176_25769[(2)] = null);

(statearr_23176_25769[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (17))){
var inst_23070 = (state_23136[(18)]);
var inst_23079 = (state_23136[(14)]);
var inst_23109 = (inst_23070.cljs$core$IFn$_invoke$arity$1 ? inst_23070.cljs$core$IFn$_invoke$arity$1(inst_23079) : inst_23070.call(null,inst_23079));
var inst_23110 = cljs.core.not(inst_23109);
var state_23136__$1 = state_23136;
var statearr_23177_25781 = state_23136__$1;
(statearr_23177_25781[(2)] = inst_23110);

(statearr_23177_25781[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (3))){
var inst_23132 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23136__$1,inst_23132);
} else {
if((state_val_23140 === (12))){
var state_23136__$1 = state_23136;
var statearr_23182_25784 = state_23136__$1;
(statearr_23182_25784[(2)] = null);

(statearr_23182_25784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (2))){
var inst_23065 = (state_23136[(11)]);
var inst_23068 = (state_23136[(12)]);
var inst_23068__$1 = cljs.core.__destructure_map(inst_23065);
var inst_23069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23068__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23068__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23068__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23136__$1 = (function (){var statearr_23184 = state_23136;
(statearr_23184[(12)] = inst_23068__$1);

(statearr_23184[(15)] = inst_23069);

(statearr_23184[(18)] = inst_23070);

return statearr_23184;
})();
return cljs.core.async.ioc_alts_BANG_(state_23136__$1,(4),inst_23071);
} else {
if((state_val_23140 === (23))){
var inst_23119 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
if(cljs.core.truth_(inst_23119)){
var statearr_23185_25805 = state_23136__$1;
(statearr_23185_25805[(1)] = (24));

} else {
var statearr_23188_25807 = state_23136__$1;
(statearr_23188_25807[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (19))){
var inst_23113 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
var statearr_23191_25817 = state_23136__$1;
(statearr_23191_25817[(2)] = inst_23113);

(statearr_23191_25817[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (11))){
var inst_23079 = (state_23136[(14)]);
var inst_23094 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23079);
var state_23136__$1 = state_23136;
var statearr_23193_25818 = state_23136__$1;
(statearr_23193_25818[(2)] = inst_23094);

(statearr_23193_25818[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (9))){
var inst_23069 = (state_23136[(15)]);
var inst_23079 = (state_23136[(14)]);
var inst_23103 = (state_23136[(19)]);
var inst_23103__$1 = (inst_23069.cljs$core$IFn$_invoke$arity$1 ? inst_23069.cljs$core$IFn$_invoke$arity$1(inst_23079) : inst_23069.call(null,inst_23079));
var state_23136__$1 = (function (){var statearr_23196 = state_23136;
(statearr_23196[(19)] = inst_23103__$1);

return statearr_23196;
})();
if(cljs.core.truth_(inst_23103__$1)){
var statearr_23197_25823 = state_23136__$1;
(statearr_23197_25823[(1)] = (14));

} else {
var statearr_23200_25826 = state_23136__$1;
(statearr_23200_25826[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (5))){
var inst_23084 = (state_23136[(13)]);
var state_23136__$1 = state_23136;
var statearr_23209_25835 = state_23136__$1;
(statearr_23209_25835[(2)] = inst_23084);

(statearr_23209_25835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (14))){
var inst_23103 = (state_23136[(19)]);
var state_23136__$1 = state_23136;
var statearr_23210_25840 = state_23136__$1;
(statearr_23210_25840[(2)] = inst_23103);

(statearr_23210_25840[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (26))){
var inst_23124 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
var statearr_23212_25846 = state_23136__$1;
(statearr_23212_25846[(2)] = inst_23124);

(statearr_23212_25846[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (16))){
var inst_23115 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
if(cljs.core.truth_(inst_23115)){
var statearr_23215_25849 = state_23136__$1;
(statearr_23215_25849[(1)] = (20));

} else {
var statearr_23216_25853 = state_23136__$1;
(statearr_23216_25853[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (10))){
var inst_23130 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
var statearr_23221_25858 = state_23136__$1;
(statearr_23221_25858[(2)] = inst_23130);

(statearr_23221_25858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (18))){
var inst_23107 = (state_23136[(16)]);
var state_23136__$1 = state_23136;
var statearr_23225_25863 = state_23136__$1;
(statearr_23225_25863[(2)] = inst_23107);

(statearr_23225_25863[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (8))){
var inst_23078 = (state_23136[(7)]);
var inst_23091 = (inst_23078 == null);
var state_23136__$1 = state_23136;
if(cljs.core.truth_(inst_23091)){
var statearr_23226_25868 = state_23136__$1;
(statearr_23226_25868[(1)] = (11));

} else {
var statearr_23227_25872 = state_23136__$1;
(statearr_23227_25872[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__19837__auto__ = null;
var cljs$core$async$mix_$_state_machine__19837__auto____0 = (function (){
var statearr_23234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23234[(0)] = cljs$core$async$mix_$_state_machine__19837__auto__);

(statearr_23234[(1)] = (1));

return statearr_23234;
});
var cljs$core$async$mix_$_state_machine__19837__auto____1 = (function (state_23136){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_23136);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e23237){var ex__19840__auto__ = e23237;
var statearr_23238_25884 = state_23136;
(statearr_23238_25884[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_23136[(4)]))){
var statearr_23239_25886 = state_23136;
(statearr_23239_25886[(1)] = cljs.core.first((state_23136[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25892 = state_23136;
state_23136 = G__25892;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19837__auto__ = function(state_23136){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19837__auto____1.call(this,state_23136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19837__auto____0;
cljs$core$async$mix_$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19837__auto____1;
return cljs$core$async$mix_$_state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_23240 = f__21026__auto__();
(statearr_23240[(6)] = c__21025__auto___25714);

return statearr_23240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_25909 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_25909(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25925 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_25925(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25935 = (function() {
var G__25936 = null;
var G__25936__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__25936__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__25936 = function(p,v){
switch(arguments.length){
case 1:
return G__25936__1.call(this,p);
case 2:
return G__25936__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25936.cljs$core$IFn$_invoke$arity$1 = G__25936__1;
G__25936.cljs$core$IFn$_invoke$arity$2 = G__25936__2;
return G__25936;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23262 = arguments.length;
switch (G__23262) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25935(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25935(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23289 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23290){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23290 = meta23290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23291,meta23290__$1){
var self__ = this;
var _23291__$1 = this;
return (new cljs.core.async.t_cljs$core$async23289(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23290__$1));
}));

(cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23291){
var self__ = this;
var _23291__$1 = this;
return self__.meta23290;
}));

(cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async23289.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async23289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23290","meta23290",1961265054,null)], null);
}));

(cljs.core.async.t_cljs$core$async23289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23289");

(cljs.core.async.t_cljs$core$async23289.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async23289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23289.
 */
cljs.core.async.__GT_t_cljs$core$async23289 = (function cljs$core$async$__GT_t_cljs$core$async23289(ch,topic_fn,buf_fn,mults,ensure_mult,meta23290){
return (new cljs.core.async.t_cljs$core$async23289(ch,topic_fn,buf_fn,mults,ensure_mult,meta23290));
});


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
var G__23284 = arguments.length;
switch (G__23284) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__23280_SHARP_){
if(cljs.core.truth_((p1__23280_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23280_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__23280_SHARP_.call(null,topic)))){
return p1__23280_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23280_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async23289(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__21025__auto___25966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_23396){
var state_val_23397 = (state_23396[(1)]);
if((state_val_23397 === (7))){
var inst_23392 = (state_23396[(2)]);
var state_23396__$1 = state_23396;
var statearr_23399_25970 = state_23396__$1;
(statearr_23399_25970[(2)] = inst_23392);

(statearr_23399_25970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (20))){
var state_23396__$1 = state_23396;
var statearr_23400_25971 = state_23396__$1;
(statearr_23400_25971[(2)] = null);

(statearr_23400_25971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (1))){
var state_23396__$1 = state_23396;
var statearr_23402_25972 = state_23396__$1;
(statearr_23402_25972[(2)] = null);

(statearr_23402_25972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (24))){
var inst_23375 = (state_23396[(7)]);
var inst_23384 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23375);
var state_23396__$1 = state_23396;
var statearr_23405_25977 = state_23396__$1;
(statearr_23405_25977[(2)] = inst_23384);

(statearr_23405_25977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (4))){
var inst_23314 = (state_23396[(8)]);
var inst_23314__$1 = (state_23396[(2)]);
var inst_23315 = (inst_23314__$1 == null);
var state_23396__$1 = (function (){var statearr_23409 = state_23396;
(statearr_23409[(8)] = inst_23314__$1);

return statearr_23409;
})();
if(cljs.core.truth_(inst_23315)){
var statearr_23410_25984 = state_23396__$1;
(statearr_23410_25984[(1)] = (5));

} else {
var statearr_23411_25985 = state_23396__$1;
(statearr_23411_25985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (15))){
var inst_23369 = (state_23396[(2)]);
var state_23396__$1 = state_23396;
var statearr_23412_25991 = state_23396__$1;
(statearr_23412_25991[(2)] = inst_23369);

(statearr_23412_25991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (21))){
var inst_23389 = (state_23396[(2)]);
var state_23396__$1 = (function (){var statearr_23428 = state_23396;
(statearr_23428[(9)] = inst_23389);

return statearr_23428;
})();
var statearr_23429_25992 = state_23396__$1;
(statearr_23429_25992[(2)] = null);

(statearr_23429_25992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (13))){
var inst_23341 = (state_23396[(10)]);
var inst_23345 = cljs.core.chunked_seq_QMARK_(inst_23341);
var state_23396__$1 = state_23396;
if(inst_23345){
var statearr_23439_25994 = state_23396__$1;
(statearr_23439_25994[(1)] = (16));

} else {
var statearr_23440_25995 = state_23396__$1;
(statearr_23440_25995[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (22))){
var inst_23381 = (state_23396[(2)]);
var state_23396__$1 = state_23396;
if(cljs.core.truth_(inst_23381)){
var statearr_23441_25996 = state_23396__$1;
(statearr_23441_25996[(1)] = (23));

} else {
var statearr_23442_25997 = state_23396__$1;
(statearr_23442_25997[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (6))){
var inst_23314 = (state_23396[(8)]);
var inst_23375 = (state_23396[(7)]);
var inst_23377 = (state_23396[(11)]);
var inst_23375__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_23314) : topic_fn.call(null,inst_23314));
var inst_23376 = cljs.core.deref(mults);
var inst_23377__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23376,inst_23375__$1);
var state_23396__$1 = (function (){var statearr_23443 = state_23396;
(statearr_23443[(7)] = inst_23375__$1);

(statearr_23443[(11)] = inst_23377__$1);

return statearr_23443;
})();
if(cljs.core.truth_(inst_23377__$1)){
var statearr_23452_26002 = state_23396__$1;
(statearr_23452_26002[(1)] = (19));

} else {
var statearr_23453_26004 = state_23396__$1;
(statearr_23453_26004[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (25))){
var inst_23386 = (state_23396[(2)]);
var state_23396__$1 = state_23396;
var statearr_23460_26007 = state_23396__$1;
(statearr_23460_26007[(2)] = inst_23386);

(statearr_23460_26007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (17))){
var inst_23341 = (state_23396[(10)]);
var inst_23360 = cljs.core.first(inst_23341);
var inst_23361 = cljs.core.async.muxch_STAR_(inst_23360);
var inst_23362 = cljs.core.async.close_BANG_(inst_23361);
var inst_23363 = cljs.core.next(inst_23341);
var inst_23324 = inst_23363;
var inst_23325 = null;
var inst_23326 = (0);
var inst_23327 = (0);
var state_23396__$1 = (function (){var statearr_23467 = state_23396;
(statearr_23467[(12)] = inst_23362);

(statearr_23467[(13)] = inst_23324);

(statearr_23467[(14)] = inst_23325);

(statearr_23467[(15)] = inst_23326);

(statearr_23467[(16)] = inst_23327);

return statearr_23467;
})();
var statearr_23468_26013 = state_23396__$1;
(statearr_23468_26013[(2)] = null);

(statearr_23468_26013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (3))){
var inst_23394 = (state_23396[(2)]);
var state_23396__$1 = state_23396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23396__$1,inst_23394);
} else {
if((state_val_23397 === (12))){
var inst_23371 = (state_23396[(2)]);
var state_23396__$1 = state_23396;
var statearr_23469_26018 = state_23396__$1;
(statearr_23469_26018[(2)] = inst_23371);

(statearr_23469_26018[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (2))){
var state_23396__$1 = state_23396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23396__$1,(4),ch);
} else {
if((state_val_23397 === (23))){
var state_23396__$1 = state_23396;
var statearr_23470_26025 = state_23396__$1;
(statearr_23470_26025[(2)] = null);

(statearr_23470_26025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (19))){
var inst_23377 = (state_23396[(11)]);
var inst_23314 = (state_23396[(8)]);
var inst_23379 = cljs.core.async.muxch_STAR_(inst_23377);
var state_23396__$1 = state_23396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23396__$1,(22),inst_23379,inst_23314);
} else {
if((state_val_23397 === (11))){
var inst_23324 = (state_23396[(13)]);
var inst_23341 = (state_23396[(10)]);
var inst_23341__$1 = cljs.core.seq(inst_23324);
var state_23396__$1 = (function (){var statearr_23477 = state_23396;
(statearr_23477[(10)] = inst_23341__$1);

return statearr_23477;
})();
if(inst_23341__$1){
var statearr_23480_26030 = state_23396__$1;
(statearr_23480_26030[(1)] = (13));

} else {
var statearr_23482_26035 = state_23396__$1;
(statearr_23482_26035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (9))){
var inst_23373 = (state_23396[(2)]);
var state_23396__$1 = state_23396;
var statearr_23484_26038 = state_23396__$1;
(statearr_23484_26038[(2)] = inst_23373);

(statearr_23484_26038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (5))){
var inst_23321 = cljs.core.deref(mults);
var inst_23322 = cljs.core.vals(inst_23321);
var inst_23323 = cljs.core.seq(inst_23322);
var inst_23324 = inst_23323;
var inst_23325 = null;
var inst_23326 = (0);
var inst_23327 = (0);
var state_23396__$1 = (function (){var statearr_23485 = state_23396;
(statearr_23485[(13)] = inst_23324);

(statearr_23485[(14)] = inst_23325);

(statearr_23485[(15)] = inst_23326);

(statearr_23485[(16)] = inst_23327);

return statearr_23485;
})();
var statearr_23486_26054 = state_23396__$1;
(statearr_23486_26054[(2)] = null);

(statearr_23486_26054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (14))){
var state_23396__$1 = state_23396;
var statearr_23490_26059 = state_23396__$1;
(statearr_23490_26059[(2)] = null);

(statearr_23490_26059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (16))){
var inst_23341 = (state_23396[(10)]);
var inst_23348 = cljs.core.chunk_first(inst_23341);
var inst_23350 = cljs.core.chunk_rest(inst_23341);
var inst_23351 = cljs.core.count(inst_23348);
var inst_23324 = inst_23350;
var inst_23325 = inst_23348;
var inst_23326 = inst_23351;
var inst_23327 = (0);
var state_23396__$1 = (function (){var statearr_23494 = state_23396;
(statearr_23494[(13)] = inst_23324);

(statearr_23494[(14)] = inst_23325);

(statearr_23494[(15)] = inst_23326);

(statearr_23494[(16)] = inst_23327);

return statearr_23494;
})();
var statearr_23495_26064 = state_23396__$1;
(statearr_23495_26064[(2)] = null);

(statearr_23495_26064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (10))){
var inst_23325 = (state_23396[(14)]);
var inst_23327 = (state_23396[(16)]);
var inst_23324 = (state_23396[(13)]);
var inst_23326 = (state_23396[(15)]);
var inst_23333 = cljs.core._nth(inst_23325,inst_23327);
var inst_23334 = cljs.core.async.muxch_STAR_(inst_23333);
var inst_23335 = cljs.core.async.close_BANG_(inst_23334);
var inst_23337 = (inst_23327 + (1));
var tmp23487 = inst_23324;
var tmp23488 = inst_23326;
var tmp23489 = inst_23325;
var inst_23324__$1 = tmp23487;
var inst_23325__$1 = tmp23489;
var inst_23326__$1 = tmp23488;
var inst_23327__$1 = inst_23337;
var state_23396__$1 = (function (){var statearr_23496 = state_23396;
(statearr_23496[(17)] = inst_23335);

(statearr_23496[(13)] = inst_23324__$1);

(statearr_23496[(14)] = inst_23325__$1);

(statearr_23496[(15)] = inst_23326__$1);

(statearr_23496[(16)] = inst_23327__$1);

return statearr_23496;
})();
var statearr_23497_26073 = state_23396__$1;
(statearr_23497_26073[(2)] = null);

(statearr_23497_26073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (18))){
var inst_23366 = (state_23396[(2)]);
var state_23396__$1 = state_23396;
var statearr_23498_26077 = state_23396__$1;
(statearr_23498_26077[(2)] = inst_23366);

(statearr_23498_26077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23397 === (8))){
var inst_23327 = (state_23396[(16)]);
var inst_23326 = (state_23396[(15)]);
var inst_23330 = (inst_23327 < inst_23326);
var inst_23331 = inst_23330;
var state_23396__$1 = state_23396;
if(cljs.core.truth_(inst_23331)){
var statearr_23504_26079 = state_23396__$1;
(statearr_23504_26079[(1)] = (10));

} else {
var statearr_23505_26080 = state_23396__$1;
(statearr_23505_26080[(1)] = (11));

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
var cljs$core$async$state_machine__19837__auto__ = null;
var cljs$core$async$state_machine__19837__auto____0 = (function (){
var statearr_23510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23510[(0)] = cljs$core$async$state_machine__19837__auto__);

(statearr_23510[(1)] = (1));

return statearr_23510;
});
var cljs$core$async$state_machine__19837__auto____1 = (function (state_23396){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_23396);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e23511){var ex__19840__auto__ = e23511;
var statearr_23512_26084 = state_23396;
(statearr_23512_26084[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_23396[(4)]))){
var statearr_23513_26085 = state_23396;
(statearr_23513_26085[(1)] = cljs.core.first((state_23396[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26088 = state_23396;
state_23396 = G__26088;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$state_machine__19837__auto__ = function(state_23396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19837__auto____1.call(this,state_23396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19837__auto____0;
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19837__auto____1;
return cljs$core$async$state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_23514 = f__21026__auto__();
(statearr_23514[(6)] = c__21025__auto___25966);

return statearr_23514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
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
var G__23516 = arguments.length;
switch (G__23516) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__23522 = arguments.length;
switch (G__23522) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__23529 = arguments.length;
switch (G__23529) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__21025__auto___26105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_23594){
var state_val_23595 = (state_23594[(1)]);
if((state_val_23595 === (7))){
var state_23594__$1 = state_23594;
var statearr_23596_26106 = state_23594__$1;
(statearr_23596_26106[(2)] = null);

(statearr_23596_26106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (1))){
var state_23594__$1 = state_23594;
var statearr_23600_26112 = state_23594__$1;
(statearr_23600_26112[(2)] = null);

(statearr_23600_26112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (4))){
var inst_23548 = (state_23594[(7)]);
var inst_23547 = (state_23594[(8)]);
var inst_23550 = (inst_23548 < inst_23547);
var state_23594__$1 = state_23594;
if(cljs.core.truth_(inst_23550)){
var statearr_23611_26117 = state_23594__$1;
(statearr_23611_26117[(1)] = (6));

} else {
var statearr_23612_26119 = state_23594__$1;
(statearr_23612_26119[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (15))){
var inst_23576 = (state_23594[(9)]);
var inst_23581 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23576);
var state_23594__$1 = state_23594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23594__$1,(17),out,inst_23581);
} else {
if((state_val_23595 === (13))){
var inst_23576 = (state_23594[(9)]);
var inst_23576__$1 = (state_23594[(2)]);
var inst_23577 = cljs.core.some(cljs.core.nil_QMARK_,inst_23576__$1);
var state_23594__$1 = (function (){var statearr_23614 = state_23594;
(statearr_23614[(9)] = inst_23576__$1);

return statearr_23614;
})();
if(cljs.core.truth_(inst_23577)){
var statearr_23618_26133 = state_23594__$1;
(statearr_23618_26133[(1)] = (14));

} else {
var statearr_23619_26135 = state_23594__$1;
(statearr_23619_26135[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (6))){
var state_23594__$1 = state_23594;
var statearr_23620_26140 = state_23594__$1;
(statearr_23620_26140[(2)] = null);

(statearr_23620_26140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (17))){
var inst_23583 = (state_23594[(2)]);
var state_23594__$1 = (function (){var statearr_23625 = state_23594;
(statearr_23625[(10)] = inst_23583);

return statearr_23625;
})();
var statearr_23627_26142 = state_23594__$1;
(statearr_23627_26142[(2)] = null);

(statearr_23627_26142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (3))){
var inst_23588 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23594__$1,inst_23588);
} else {
if((state_val_23595 === (12))){
var _ = (function (){var statearr_23634 = state_23594;
(statearr_23634[(4)] = cljs.core.rest((state_23594[(4)])));

return statearr_23634;
})();
var state_23594__$1 = state_23594;
var ex23622 = (state_23594__$1[(2)]);
var statearr_23637_26153 = state_23594__$1;
(statearr_23637_26153[(5)] = ex23622);


if((ex23622 instanceof Object)){
var statearr_23639_26158 = state_23594__$1;
(statearr_23639_26158[(1)] = (11));

(statearr_23639_26158[(5)] = null);

} else {
throw ex23622;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (2))){
var inst_23546 = cljs.core.reset_BANG_(dctr,cnt);
var inst_23547 = cnt;
var inst_23548 = (0);
var state_23594__$1 = (function (){var statearr_23643 = state_23594;
(statearr_23643[(11)] = inst_23546);

(statearr_23643[(8)] = inst_23547);

(statearr_23643[(7)] = inst_23548);

return statearr_23643;
})();
var statearr_23645_26163 = state_23594__$1;
(statearr_23645_26163[(2)] = null);

(statearr_23645_26163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (11))){
var inst_23555 = (state_23594[(2)]);
var inst_23556 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_23594__$1 = (function (){var statearr_23648 = state_23594;
(statearr_23648[(12)] = inst_23555);

return statearr_23648;
})();
var statearr_23649_26164 = state_23594__$1;
(statearr_23649_26164[(2)] = inst_23556);

(statearr_23649_26164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (9))){
var inst_23548 = (state_23594[(7)]);
var _ = (function (){var statearr_23650 = state_23594;
(statearr_23650[(4)] = cljs.core.cons((12),(state_23594[(4)])));

return statearr_23650;
})();
var inst_23562 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_23548) : chs__$1.call(null,inst_23548));
var inst_23563 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_23548) : done.call(null,inst_23548));
var inst_23564 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23562,inst_23563);
var ___$1 = (function (){var statearr_23651 = state_23594;
(statearr_23651[(4)] = cljs.core.rest((state_23594[(4)])));

return statearr_23651;
})();
var state_23594__$1 = state_23594;
var statearr_23655_26179 = state_23594__$1;
(statearr_23655_26179[(2)] = inst_23564);

(statearr_23655_26179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (5))){
var inst_23574 = (state_23594[(2)]);
var state_23594__$1 = (function (){var statearr_23657 = state_23594;
(statearr_23657[(13)] = inst_23574);

return statearr_23657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23594__$1,(13),dchan);
} else {
if((state_val_23595 === (14))){
var inst_23579 = cljs.core.async.close_BANG_(out);
var state_23594__$1 = state_23594;
var statearr_23659_26188 = state_23594__$1;
(statearr_23659_26188[(2)] = inst_23579);

(statearr_23659_26188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (16))){
var inst_23586 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
var statearr_23660_26191 = state_23594__$1;
(statearr_23660_26191[(2)] = inst_23586);

(statearr_23660_26191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (10))){
var inst_23548 = (state_23594[(7)]);
var inst_23567 = (state_23594[(2)]);
var inst_23568 = (inst_23548 + (1));
var inst_23548__$1 = inst_23568;
var state_23594__$1 = (function (){var statearr_23661 = state_23594;
(statearr_23661[(14)] = inst_23567);

(statearr_23661[(7)] = inst_23548__$1);

return statearr_23661;
})();
var statearr_23662_26198 = state_23594__$1;
(statearr_23662_26198[(2)] = null);

(statearr_23662_26198[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (8))){
var inst_23572 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
var statearr_23663_26202 = state_23594__$1;
(statearr_23663_26202[(2)] = inst_23572);

(statearr_23663_26202[(1)] = (5));


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
var cljs$core$async$state_machine__19837__auto__ = null;
var cljs$core$async$state_machine__19837__auto____0 = (function (){
var statearr_23664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23664[(0)] = cljs$core$async$state_machine__19837__auto__);

(statearr_23664[(1)] = (1));

return statearr_23664;
});
var cljs$core$async$state_machine__19837__auto____1 = (function (state_23594){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_23594);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e23665){var ex__19840__auto__ = e23665;
var statearr_23666_26212 = state_23594;
(statearr_23666_26212[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_23594[(4)]))){
var statearr_23667_26214 = state_23594;
(statearr_23667_26214[(1)] = cljs.core.first((state_23594[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26215 = state_23594;
state_23594 = G__26215;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$state_machine__19837__auto__ = function(state_23594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19837__auto____1.call(this,state_23594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19837__auto____0;
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19837__auto____1;
return cljs$core$async$state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_23669 = f__21026__auto__();
(statearr_23669[(6)] = c__21025__auto___26105);

return statearr_23669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
}));

}

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
var G__23675 = arguments.length;
switch (G__23675) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21025__auto___26226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_23718){
var state_val_23719 = (state_23718[(1)]);
if((state_val_23719 === (7))){
var inst_23694 = (state_23718[(7)]);
var inst_23695 = (state_23718[(8)]);
var inst_23694__$1 = (state_23718[(2)]);
var inst_23695__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23694__$1,(0),null);
var inst_23696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23694__$1,(1),null);
var inst_23697 = (inst_23695__$1 == null);
var state_23718__$1 = (function (){var statearr_23730 = state_23718;
(statearr_23730[(7)] = inst_23694__$1);

(statearr_23730[(8)] = inst_23695__$1);

(statearr_23730[(9)] = inst_23696);

return statearr_23730;
})();
if(cljs.core.truth_(inst_23697)){
var statearr_23731_26232 = state_23718__$1;
(statearr_23731_26232[(1)] = (8));

} else {
var statearr_23732_26233 = state_23718__$1;
(statearr_23732_26233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23719 === (1))){
var inst_23681 = cljs.core.vec(chs);
var inst_23682 = inst_23681;
var state_23718__$1 = (function (){var statearr_23736 = state_23718;
(statearr_23736[(10)] = inst_23682);

return statearr_23736;
})();
var statearr_23737_26235 = state_23718__$1;
(statearr_23737_26235[(2)] = null);

(statearr_23737_26235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23719 === (4))){
var inst_23682 = (state_23718[(10)]);
var state_23718__$1 = state_23718;
return cljs.core.async.ioc_alts_BANG_(state_23718__$1,(7),inst_23682);
} else {
if((state_val_23719 === (6))){
var inst_23714 = (state_23718[(2)]);
var state_23718__$1 = state_23718;
var statearr_23738_26240 = state_23718__$1;
(statearr_23738_26240[(2)] = inst_23714);

(statearr_23738_26240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23719 === (3))){
var inst_23716 = (state_23718[(2)]);
var state_23718__$1 = state_23718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23718__$1,inst_23716);
} else {
if((state_val_23719 === (2))){
var inst_23682 = (state_23718[(10)]);
var inst_23684 = cljs.core.count(inst_23682);
var inst_23685 = (inst_23684 > (0));
var state_23718__$1 = state_23718;
if(cljs.core.truth_(inst_23685)){
var statearr_23752_26245 = state_23718__$1;
(statearr_23752_26245[(1)] = (4));

} else {
var statearr_23757_26246 = state_23718__$1;
(statearr_23757_26246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23719 === (11))){
var inst_23682 = (state_23718[(10)]);
var inst_23707 = (state_23718[(2)]);
var tmp23739 = inst_23682;
var inst_23682__$1 = tmp23739;
var state_23718__$1 = (function (){var statearr_23761 = state_23718;
(statearr_23761[(11)] = inst_23707);

(statearr_23761[(10)] = inst_23682__$1);

return statearr_23761;
})();
var statearr_23762_26253 = state_23718__$1;
(statearr_23762_26253[(2)] = null);

(statearr_23762_26253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23719 === (9))){
var inst_23695 = (state_23718[(8)]);
var state_23718__$1 = state_23718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23718__$1,(11),out,inst_23695);
} else {
if((state_val_23719 === (5))){
var inst_23712 = cljs.core.async.close_BANG_(out);
var state_23718__$1 = state_23718;
var statearr_23777_26256 = state_23718__$1;
(statearr_23777_26256[(2)] = inst_23712);

(statearr_23777_26256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23719 === (10))){
var inst_23710 = (state_23718[(2)]);
var state_23718__$1 = state_23718;
var statearr_23781_26259 = state_23718__$1;
(statearr_23781_26259[(2)] = inst_23710);

(statearr_23781_26259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23719 === (8))){
var inst_23682 = (state_23718[(10)]);
var inst_23694 = (state_23718[(7)]);
var inst_23695 = (state_23718[(8)]);
var inst_23696 = (state_23718[(9)]);
var inst_23702 = (function (){var cs = inst_23682;
var vec__23687 = inst_23694;
var v = inst_23695;
var c = inst_23696;
return (function (p1__23673_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23673_SHARP_);
});
})();
var inst_23703 = cljs.core.filterv(inst_23702,inst_23682);
var inst_23682__$1 = inst_23703;
var state_23718__$1 = (function (){var statearr_23786 = state_23718;
(statearr_23786[(10)] = inst_23682__$1);

return statearr_23786;
})();
var statearr_23787_26265 = state_23718__$1;
(statearr_23787_26265[(2)] = null);

(statearr_23787_26265[(1)] = (2));


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
var cljs$core$async$state_machine__19837__auto__ = null;
var cljs$core$async$state_machine__19837__auto____0 = (function (){
var statearr_23795 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23795[(0)] = cljs$core$async$state_machine__19837__auto__);

(statearr_23795[(1)] = (1));

return statearr_23795;
});
var cljs$core$async$state_machine__19837__auto____1 = (function (state_23718){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_23718);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e23796){var ex__19840__auto__ = e23796;
var statearr_23797_26276 = state_23718;
(statearr_23797_26276[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_23718[(4)]))){
var statearr_23799_26281 = state_23718;
(statearr_23799_26281[(1)] = cljs.core.first((state_23718[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26284 = state_23718;
state_23718 = G__26284;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$state_machine__19837__auto__ = function(state_23718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19837__auto____1.call(this,state_23718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19837__auto____0;
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19837__auto____1;
return cljs$core$async$state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_23800 = f__21026__auto__();
(statearr_23800[(6)] = c__21025__auto___26226);

return statearr_23800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
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
var G__23802 = arguments.length;
switch (G__23802) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21025__auto___26293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_23844){
var state_val_23845 = (state_23844[(1)]);
if((state_val_23845 === (7))){
var inst_23826 = (state_23844[(7)]);
var inst_23826__$1 = (state_23844[(2)]);
var inst_23827 = (inst_23826__$1 == null);
var inst_23828 = cljs.core.not(inst_23827);
var state_23844__$1 = (function (){var statearr_23846 = state_23844;
(statearr_23846[(7)] = inst_23826__$1);

return statearr_23846;
})();
if(inst_23828){
var statearr_23847_26295 = state_23844__$1;
(statearr_23847_26295[(1)] = (8));

} else {
var statearr_23848_26297 = state_23844__$1;
(statearr_23848_26297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (1))){
var inst_23821 = (0);
var state_23844__$1 = (function (){var statearr_23849 = state_23844;
(statearr_23849[(8)] = inst_23821);

return statearr_23849;
})();
var statearr_23850_26300 = state_23844__$1;
(statearr_23850_26300[(2)] = null);

(statearr_23850_26300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (4))){
var state_23844__$1 = state_23844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23844__$1,(7),ch);
} else {
if((state_val_23845 === (6))){
var inst_23839 = (state_23844[(2)]);
var state_23844__$1 = state_23844;
var statearr_23851_26310 = state_23844__$1;
(statearr_23851_26310[(2)] = inst_23839);

(statearr_23851_26310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (3))){
var inst_23841 = (state_23844[(2)]);
var inst_23842 = cljs.core.async.close_BANG_(out);
var state_23844__$1 = (function (){var statearr_23852 = state_23844;
(statearr_23852[(9)] = inst_23841);

return statearr_23852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23844__$1,inst_23842);
} else {
if((state_val_23845 === (2))){
var inst_23821 = (state_23844[(8)]);
var inst_23823 = (inst_23821 < n);
var state_23844__$1 = state_23844;
if(cljs.core.truth_(inst_23823)){
var statearr_23853_26320 = state_23844__$1;
(statearr_23853_26320[(1)] = (4));

} else {
var statearr_23854_26321 = state_23844__$1;
(statearr_23854_26321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (11))){
var inst_23821 = (state_23844[(8)]);
var inst_23831 = (state_23844[(2)]);
var inst_23832 = (inst_23821 + (1));
var inst_23821__$1 = inst_23832;
var state_23844__$1 = (function (){var statearr_23855 = state_23844;
(statearr_23855[(10)] = inst_23831);

(statearr_23855[(8)] = inst_23821__$1);

return statearr_23855;
})();
var statearr_23856_26326 = state_23844__$1;
(statearr_23856_26326[(2)] = null);

(statearr_23856_26326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (9))){
var state_23844__$1 = state_23844;
var statearr_23857_26329 = state_23844__$1;
(statearr_23857_26329[(2)] = null);

(statearr_23857_26329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (5))){
var state_23844__$1 = state_23844;
var statearr_23858_26331 = state_23844__$1;
(statearr_23858_26331[(2)] = null);

(statearr_23858_26331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (10))){
var inst_23836 = (state_23844[(2)]);
var state_23844__$1 = state_23844;
var statearr_23859_26333 = state_23844__$1;
(statearr_23859_26333[(2)] = inst_23836);

(statearr_23859_26333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (8))){
var inst_23826 = (state_23844[(7)]);
var state_23844__$1 = state_23844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23844__$1,(11),out,inst_23826);
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
var cljs$core$async$state_machine__19837__auto__ = null;
var cljs$core$async$state_machine__19837__auto____0 = (function (){
var statearr_23860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23860[(0)] = cljs$core$async$state_machine__19837__auto__);

(statearr_23860[(1)] = (1));

return statearr_23860;
});
var cljs$core$async$state_machine__19837__auto____1 = (function (state_23844){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_23844);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e23868){var ex__19840__auto__ = e23868;
var statearr_23869_26347 = state_23844;
(statearr_23869_26347[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_23844[(4)]))){
var statearr_23870_26348 = state_23844;
(statearr_23870_26348[(1)] = cljs.core.first((state_23844[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26349 = state_23844;
state_23844 = G__26349;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$state_machine__19837__auto__ = function(state_23844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19837__auto____1.call(this,state_23844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19837__auto____0;
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19837__auto____1;
return cljs$core$async$state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_23873 = f__21026__auto__();
(statearr_23873[(6)] = c__21025__auto___26293);

return statearr_23873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23902 = (function (f,ch,meta23887,_,fn1,meta23903){
this.f = f;
this.ch = ch;
this.meta23887 = meta23887;
this._ = _;
this.fn1 = fn1;
this.meta23903 = meta23903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23904,meta23903__$1){
var self__ = this;
var _23904__$1 = this;
return (new cljs.core.async.t_cljs$core$async23902(self__.f,self__.ch,self__.meta23887,self__._,self__.fn1,meta23903__$1));
}));

(cljs.core.async.t_cljs$core$async23902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23904){
var self__ = this;
var _23904__$1 = this;
return self__.meta23903;
}));

(cljs.core.async.t_cljs$core$async23902.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async23902.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__23874_SHARP_){
var G__23910 = (((p1__23874_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23874_SHARP_) : self__.f.call(null,p1__23874_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23910) : f1.call(null,G__23910));
});
}));

(cljs.core.async.t_cljs$core$async23902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23887","meta23887",924908240,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23886","cljs.core.async/t_cljs$core$async23886",1849785534,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23903","meta23903",-807596256,null)], null);
}));

(cljs.core.async.t_cljs$core$async23902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23902");

(cljs.core.async.t_cljs$core$async23902.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async23902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23902.
 */
cljs.core.async.__GT_t_cljs$core$async23902 = (function cljs$core$async$__GT_t_cljs$core$async23902(f,ch,meta23887,_,fn1,meta23903){
return (new cljs.core.async.t_cljs$core$async23902(f,ch,meta23887,_,fn1,meta23903));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23886 = (function (f,ch,meta23887){
this.f = f;
this.ch = ch;
this.meta23887 = meta23887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23888,meta23887__$1){
var self__ = this;
var _23888__$1 = this;
return (new cljs.core.async.t_cljs$core$async23886(self__.f,self__.ch,meta23887__$1));
}));

(cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23888){
var self__ = this;
var _23888__$1 = this;
return self__.meta23887;
}));

(cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async23902(self__.f,self__.ch,self__.meta23887,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__23917 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23917) : self__.f.call(null,G__23917));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async23886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23887","meta23887",924908240,null)], null);
}));

(cljs.core.async.t_cljs$core$async23886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23886");

(cljs.core.async.t_cljs$core$async23886.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async23886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23886.
 */
cljs.core.async.__GT_t_cljs$core$async23886 = (function cljs$core$async$__GT_t_cljs$core$async23886(f,ch,meta23887){
return (new cljs.core.async.t_cljs$core$async23886(f,ch,meta23887));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async23886(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23926 = (function (f,ch,meta23927){
this.f = f;
this.ch = ch;
this.meta23927 = meta23927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23928,meta23927__$1){
var self__ = this;
var _23928__$1 = this;
return (new cljs.core.async.t_cljs$core$async23926(self__.f,self__.ch,meta23927__$1));
}));

(cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23928){
var self__ = this;
var _23928__$1 = this;
return self__.meta23927;
}));

(cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23926.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async23926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23927","meta23927",1934355099,null)], null);
}));

(cljs.core.async.t_cljs$core$async23926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23926");

(cljs.core.async.t_cljs$core$async23926.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async23926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23926.
 */
cljs.core.async.__GT_t_cljs$core$async23926 = (function cljs$core$async$__GT_t_cljs$core$async23926(f,ch,meta23927){
return (new cljs.core.async.t_cljs$core$async23926(f,ch,meta23927));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async23926(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23931 = (function (p,ch,meta23932){
this.p = p;
this.ch = ch;
this.meta23932 = meta23932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23933,meta23932__$1){
var self__ = this;
var _23933__$1 = this;
return (new cljs.core.async.t_cljs$core$async23931(self__.p,self__.ch,meta23932__$1));
}));

(cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23933){
var self__ = this;
var _23933__$1 = this;
return self__.meta23932;
}));

(cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async23931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23932","meta23932",1453453548,null)], null);
}));

(cljs.core.async.t_cljs$core$async23931.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23931");

(cljs.core.async.t_cljs$core$async23931.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async23931");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23931.
 */
cljs.core.async.__GT_t_cljs$core$async23931 = (function cljs$core$async$__GT_t_cljs$core$async23931(p,ch,meta23932){
return (new cljs.core.async.t_cljs$core$async23931(p,ch,meta23932));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async23931(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23965 = arguments.length;
switch (G__23965) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21025__auto___26505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_23988){
var state_val_23989 = (state_23988[(1)]);
if((state_val_23989 === (7))){
var inst_23983 = (state_23988[(2)]);
var state_23988__$1 = state_23988;
var statearr_23992_26512 = state_23988__$1;
(statearr_23992_26512[(2)] = inst_23983);

(statearr_23992_26512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23989 === (1))){
var state_23988__$1 = state_23988;
var statearr_23993_26518 = state_23988__$1;
(statearr_23993_26518[(2)] = null);

(statearr_23993_26518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23989 === (4))){
var inst_23969 = (state_23988[(7)]);
var inst_23969__$1 = (state_23988[(2)]);
var inst_23970 = (inst_23969__$1 == null);
var state_23988__$1 = (function (){var statearr_23995 = state_23988;
(statearr_23995[(7)] = inst_23969__$1);

return statearr_23995;
})();
if(cljs.core.truth_(inst_23970)){
var statearr_23997_26524 = state_23988__$1;
(statearr_23997_26524[(1)] = (5));

} else {
var statearr_23999_26528 = state_23988__$1;
(statearr_23999_26528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23989 === (6))){
var inst_23969 = (state_23988[(7)]);
var inst_23974 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23969) : p.call(null,inst_23969));
var state_23988__$1 = state_23988;
if(cljs.core.truth_(inst_23974)){
var statearr_24004_26541 = state_23988__$1;
(statearr_24004_26541[(1)] = (8));

} else {
var statearr_24005_26543 = state_23988__$1;
(statearr_24005_26543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23989 === (3))){
var inst_23985 = (state_23988[(2)]);
var state_23988__$1 = state_23988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23988__$1,inst_23985);
} else {
if((state_val_23989 === (2))){
var state_23988__$1 = state_23988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23988__$1,(4),ch);
} else {
if((state_val_23989 === (11))){
var inst_23977 = (state_23988[(2)]);
var state_23988__$1 = state_23988;
var statearr_24006_26558 = state_23988__$1;
(statearr_24006_26558[(2)] = inst_23977);

(statearr_24006_26558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23989 === (9))){
var state_23988__$1 = state_23988;
var statearr_24010_26564 = state_23988__$1;
(statearr_24010_26564[(2)] = null);

(statearr_24010_26564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23989 === (5))){
var inst_23972 = cljs.core.async.close_BANG_(out);
var state_23988__$1 = state_23988;
var statearr_24011_26569 = state_23988__$1;
(statearr_24011_26569[(2)] = inst_23972);

(statearr_24011_26569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23989 === (10))){
var inst_23980 = (state_23988[(2)]);
var state_23988__$1 = (function (){var statearr_24012 = state_23988;
(statearr_24012[(8)] = inst_23980);

return statearr_24012;
})();
var statearr_24013_26576 = state_23988__$1;
(statearr_24013_26576[(2)] = null);

(statearr_24013_26576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23989 === (8))){
var inst_23969 = (state_23988[(7)]);
var state_23988__$1 = state_23988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23988__$1,(11),out,inst_23969);
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
var cljs$core$async$state_machine__19837__auto__ = null;
var cljs$core$async$state_machine__19837__auto____0 = (function (){
var statearr_24017 = [null,null,null,null,null,null,null,null,null];
(statearr_24017[(0)] = cljs$core$async$state_machine__19837__auto__);

(statearr_24017[(1)] = (1));

return statearr_24017;
});
var cljs$core$async$state_machine__19837__auto____1 = (function (state_23988){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_23988);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e24018){var ex__19840__auto__ = e24018;
var statearr_24019_26583 = state_23988;
(statearr_24019_26583[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_23988[(4)]))){
var statearr_24020_26585 = state_23988;
(statearr_24020_26585[(1)] = cljs.core.first((state_23988[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26587 = state_23988;
state_23988 = G__26587;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$state_machine__19837__auto__ = function(state_23988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19837__auto____1.call(this,state_23988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19837__auto____0;
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19837__auto____1;
return cljs$core$async$state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_24021 = f__21026__auto__();
(statearr_24021[(6)] = c__21025__auto___26505);

return statearr_24021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24038 = arguments.length;
switch (G__24038) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var c__21025__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_24131){
var state_val_24132 = (state_24131[(1)]);
if((state_val_24132 === (7))){
var inst_24125 = (state_24131[(2)]);
var state_24131__$1 = state_24131;
var statearr_24142_26622 = state_24131__$1;
(statearr_24142_26622[(2)] = inst_24125);

(statearr_24142_26622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (20))){
var inst_24092 = (state_24131[(7)]);
var inst_24104 = (state_24131[(2)]);
var inst_24105 = cljs.core.next(inst_24092);
var inst_24078 = inst_24105;
var inst_24079 = null;
var inst_24080 = (0);
var inst_24081 = (0);
var state_24131__$1 = (function (){var statearr_24157 = state_24131;
(statearr_24157[(8)] = inst_24104);

(statearr_24157[(9)] = inst_24078);

(statearr_24157[(10)] = inst_24079);

(statearr_24157[(11)] = inst_24080);

(statearr_24157[(12)] = inst_24081);

return statearr_24157;
})();
var statearr_24158_26646 = state_24131__$1;
(statearr_24158_26646[(2)] = null);

(statearr_24158_26646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (1))){
var state_24131__$1 = state_24131;
var statearr_24160_26654 = state_24131__$1;
(statearr_24160_26654[(2)] = null);

(statearr_24160_26654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (4))){
var inst_24067 = (state_24131[(13)]);
var inst_24067__$1 = (state_24131[(2)]);
var inst_24068 = (inst_24067__$1 == null);
var state_24131__$1 = (function (){var statearr_24161 = state_24131;
(statearr_24161[(13)] = inst_24067__$1);

return statearr_24161;
})();
if(cljs.core.truth_(inst_24068)){
var statearr_24162_26663 = state_24131__$1;
(statearr_24162_26663[(1)] = (5));

} else {
var statearr_24163_26665 = state_24131__$1;
(statearr_24163_26665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (15))){
var state_24131__$1 = state_24131;
var statearr_24169_26670 = state_24131__$1;
(statearr_24169_26670[(2)] = null);

(statearr_24169_26670[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (21))){
var state_24131__$1 = state_24131;
var statearr_24173_26676 = state_24131__$1;
(statearr_24173_26676[(2)] = null);

(statearr_24173_26676[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (13))){
var inst_24081 = (state_24131[(12)]);
var inst_24078 = (state_24131[(9)]);
var inst_24079 = (state_24131[(10)]);
var inst_24080 = (state_24131[(11)]);
var inst_24088 = (state_24131[(2)]);
var inst_24089 = (inst_24081 + (1));
var tmp24166 = inst_24079;
var tmp24167 = inst_24078;
var tmp24168 = inst_24080;
var inst_24078__$1 = tmp24167;
var inst_24079__$1 = tmp24166;
var inst_24080__$1 = tmp24168;
var inst_24081__$1 = inst_24089;
var state_24131__$1 = (function (){var statearr_24179 = state_24131;
(statearr_24179[(14)] = inst_24088);

(statearr_24179[(9)] = inst_24078__$1);

(statearr_24179[(10)] = inst_24079__$1);

(statearr_24179[(11)] = inst_24080__$1);

(statearr_24179[(12)] = inst_24081__$1);

return statearr_24179;
})();
var statearr_24180_26687 = state_24131__$1;
(statearr_24180_26687[(2)] = null);

(statearr_24180_26687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (22))){
var state_24131__$1 = state_24131;
var statearr_24181_26689 = state_24131__$1;
(statearr_24181_26689[(2)] = null);

(statearr_24181_26689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (6))){
var inst_24067 = (state_24131[(13)]);
var inst_24076 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24067) : f.call(null,inst_24067));
var inst_24077 = cljs.core.seq(inst_24076);
var inst_24078 = inst_24077;
var inst_24079 = null;
var inst_24080 = (0);
var inst_24081 = (0);
var state_24131__$1 = (function (){var statearr_24187 = state_24131;
(statearr_24187[(9)] = inst_24078);

(statearr_24187[(10)] = inst_24079);

(statearr_24187[(11)] = inst_24080);

(statearr_24187[(12)] = inst_24081);

return statearr_24187;
})();
var statearr_24193_26697 = state_24131__$1;
(statearr_24193_26697[(2)] = null);

(statearr_24193_26697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (17))){
var inst_24092 = (state_24131[(7)]);
var inst_24096 = cljs.core.chunk_first(inst_24092);
var inst_24097 = cljs.core.chunk_rest(inst_24092);
var inst_24098 = cljs.core.count(inst_24096);
var inst_24078 = inst_24097;
var inst_24079 = inst_24096;
var inst_24080 = inst_24098;
var inst_24081 = (0);
var state_24131__$1 = (function (){var statearr_24199 = state_24131;
(statearr_24199[(9)] = inst_24078);

(statearr_24199[(10)] = inst_24079);

(statearr_24199[(11)] = inst_24080);

(statearr_24199[(12)] = inst_24081);

return statearr_24199;
})();
var statearr_24201_26713 = state_24131__$1;
(statearr_24201_26713[(2)] = null);

(statearr_24201_26713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (3))){
var inst_24128 = (state_24131[(2)]);
var state_24131__$1 = state_24131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24131__$1,inst_24128);
} else {
if((state_val_24132 === (12))){
var inst_24115 = (state_24131[(2)]);
var state_24131__$1 = state_24131;
var statearr_24207_26718 = state_24131__$1;
(statearr_24207_26718[(2)] = inst_24115);

(statearr_24207_26718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (2))){
var state_24131__$1 = state_24131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24131__$1,(4),in$);
} else {
if((state_val_24132 === (23))){
var inst_24123 = (state_24131[(2)]);
var state_24131__$1 = state_24131;
var statearr_24210_26723 = state_24131__$1;
(statearr_24210_26723[(2)] = inst_24123);

(statearr_24210_26723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (19))){
var inst_24109 = (state_24131[(2)]);
var state_24131__$1 = state_24131;
var statearr_24211_26727 = state_24131__$1;
(statearr_24211_26727[(2)] = inst_24109);

(statearr_24211_26727[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (11))){
var inst_24078 = (state_24131[(9)]);
var inst_24092 = (state_24131[(7)]);
var inst_24092__$1 = cljs.core.seq(inst_24078);
var state_24131__$1 = (function (){var statearr_24215 = state_24131;
(statearr_24215[(7)] = inst_24092__$1);

return statearr_24215;
})();
if(inst_24092__$1){
var statearr_24218_26739 = state_24131__$1;
(statearr_24218_26739[(1)] = (14));

} else {
var statearr_24219_26742 = state_24131__$1;
(statearr_24219_26742[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (9))){
var inst_24117 = (state_24131[(2)]);
var inst_24118 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_24131__$1 = (function (){var statearr_24229 = state_24131;
(statearr_24229[(15)] = inst_24117);

return statearr_24229;
})();
if(cljs.core.truth_(inst_24118)){
var statearr_24230_26745 = state_24131__$1;
(statearr_24230_26745[(1)] = (21));

} else {
var statearr_24233_26746 = state_24131__$1;
(statearr_24233_26746[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (5))){
var inst_24070 = cljs.core.async.close_BANG_(out);
var state_24131__$1 = state_24131;
var statearr_24239_26747 = state_24131__$1;
(statearr_24239_26747[(2)] = inst_24070);

(statearr_24239_26747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (14))){
var inst_24092 = (state_24131[(7)]);
var inst_24094 = cljs.core.chunked_seq_QMARK_(inst_24092);
var state_24131__$1 = state_24131;
if(inst_24094){
var statearr_24240_26748 = state_24131__$1;
(statearr_24240_26748[(1)] = (17));

} else {
var statearr_24241_26749 = state_24131__$1;
(statearr_24241_26749[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (16))){
var inst_24113 = (state_24131[(2)]);
var state_24131__$1 = state_24131;
var statearr_24246_26750 = state_24131__$1;
(statearr_24246_26750[(2)] = inst_24113);

(statearr_24246_26750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24132 === (10))){
var inst_24079 = (state_24131[(10)]);
var inst_24081 = (state_24131[(12)]);
var inst_24086 = cljs.core._nth(inst_24079,inst_24081);
var state_24131__$1 = state_24131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24131__$1,(13),out,inst_24086);
} else {
if((state_val_24132 === (18))){
var inst_24092 = (state_24131[(7)]);
var inst_24101 = cljs.core.first(inst_24092);
var state_24131__$1 = state_24131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24131__$1,(20),out,inst_24101);
} else {
if((state_val_24132 === (8))){
var inst_24081 = (state_24131[(12)]);
var inst_24080 = (state_24131[(11)]);
var inst_24083 = (inst_24081 < inst_24080);
var inst_24084 = inst_24083;
var state_24131__$1 = state_24131;
if(cljs.core.truth_(inst_24084)){
var statearr_24249_26769 = state_24131__$1;
(statearr_24249_26769[(1)] = (10));

} else {
var statearr_24250_26772 = state_24131__$1;
(statearr_24250_26772[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__19837__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19837__auto____0 = (function (){
var statearr_24254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24254[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19837__auto__);

(statearr_24254[(1)] = (1));

return statearr_24254;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19837__auto____1 = (function (state_24131){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_24131);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e24256){var ex__19840__auto__ = e24256;
var statearr_24259_26788 = state_24131;
(statearr_24259_26788[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_24131[(4)]))){
var statearr_24263_26794 = state_24131;
(statearr_24263_26794[(1)] = cljs.core.first((state_24131[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26805 = state_24131;
state_24131 = G__26805;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19837__auto__ = function(state_24131){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19837__auto____1.call(this,state_24131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19837__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19837__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_24264 = f__21026__auto__();
(statearr_24264[(6)] = c__21025__auto__);

return statearr_24264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
}));

return c__21025__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24273 = arguments.length;
switch (G__24273) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__24277 = arguments.length;
switch (G__24277) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__24281 = arguments.length;
switch (G__24281) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21025__auto___26866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_24312){
var state_val_24314 = (state_24312[(1)]);
if((state_val_24314 === (7))){
var inst_24307 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24318_26872 = state_24312__$1;
(statearr_24318_26872[(2)] = inst_24307);

(statearr_24318_26872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24314 === (1))){
var inst_24289 = null;
var state_24312__$1 = (function (){var statearr_24319 = state_24312;
(statearr_24319[(7)] = inst_24289);

return statearr_24319;
})();
var statearr_24320_26884 = state_24312__$1;
(statearr_24320_26884[(2)] = null);

(statearr_24320_26884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24314 === (4))){
var inst_24292 = (state_24312[(8)]);
var inst_24292__$1 = (state_24312[(2)]);
var inst_24293 = (inst_24292__$1 == null);
var inst_24294 = cljs.core.not(inst_24293);
var state_24312__$1 = (function (){var statearr_24327 = state_24312;
(statearr_24327[(8)] = inst_24292__$1);

return statearr_24327;
})();
if(inst_24294){
var statearr_24328_26904 = state_24312__$1;
(statearr_24328_26904[(1)] = (5));

} else {
var statearr_24329_26905 = state_24312__$1;
(statearr_24329_26905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24314 === (6))){
var state_24312__$1 = state_24312;
var statearr_24333_26907 = state_24312__$1;
(statearr_24333_26907[(2)] = null);

(statearr_24333_26907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24314 === (3))){
var inst_24309 = (state_24312[(2)]);
var inst_24310 = cljs.core.async.close_BANG_(out);
var state_24312__$1 = (function (){var statearr_24334 = state_24312;
(statearr_24334[(9)] = inst_24309);

return statearr_24334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24312__$1,inst_24310);
} else {
if((state_val_24314 === (2))){
var state_24312__$1 = state_24312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24312__$1,(4),ch);
} else {
if((state_val_24314 === (11))){
var inst_24292 = (state_24312[(8)]);
var inst_24301 = (state_24312[(2)]);
var inst_24289 = inst_24292;
var state_24312__$1 = (function (){var statearr_24343 = state_24312;
(statearr_24343[(10)] = inst_24301);

(statearr_24343[(7)] = inst_24289);

return statearr_24343;
})();
var statearr_24344_26921 = state_24312__$1;
(statearr_24344_26921[(2)] = null);

(statearr_24344_26921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24314 === (9))){
var inst_24292 = (state_24312[(8)]);
var state_24312__$1 = state_24312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24312__$1,(11),out,inst_24292);
} else {
if((state_val_24314 === (5))){
var inst_24292 = (state_24312[(8)]);
var inst_24289 = (state_24312[(7)]);
var inst_24296 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24292,inst_24289);
var state_24312__$1 = state_24312;
if(inst_24296){
var statearr_24348_26928 = state_24312__$1;
(statearr_24348_26928[(1)] = (8));

} else {
var statearr_24349_26930 = state_24312__$1;
(statearr_24349_26930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24314 === (10))){
var inst_24304 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24350_26934 = state_24312__$1;
(statearr_24350_26934[(2)] = inst_24304);

(statearr_24350_26934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24314 === (8))){
var inst_24289 = (state_24312[(7)]);
var tmp24347 = inst_24289;
var inst_24289__$1 = tmp24347;
var state_24312__$1 = (function (){var statearr_24357 = state_24312;
(statearr_24357[(7)] = inst_24289__$1);

return statearr_24357;
})();
var statearr_24358_26939 = state_24312__$1;
(statearr_24358_26939[(2)] = null);

(statearr_24358_26939[(1)] = (2));


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
var cljs$core$async$state_machine__19837__auto__ = null;
var cljs$core$async$state_machine__19837__auto____0 = (function (){
var statearr_24362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24362[(0)] = cljs$core$async$state_machine__19837__auto__);

(statearr_24362[(1)] = (1));

return statearr_24362;
});
var cljs$core$async$state_machine__19837__auto____1 = (function (state_24312){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_24312);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e24363){var ex__19840__auto__ = e24363;
var statearr_24364_26945 = state_24312;
(statearr_24364_26945[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_24312[(4)]))){
var statearr_24373_26946 = state_24312;
(statearr_24373_26946[(1)] = cljs.core.first((state_24312[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26948 = state_24312;
state_24312 = G__26948;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$state_machine__19837__auto__ = function(state_24312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19837__auto____1.call(this,state_24312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19837__auto____0;
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19837__auto____1;
return cljs$core$async$state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_24381 = f__21026__auto__();
(statearr_24381[(6)] = c__21025__auto___26866);

return statearr_24381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24383 = arguments.length;
switch (G__24383) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21025__auto___26953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_24430){
var state_val_24431 = (state_24430[(1)]);
if((state_val_24431 === (7))){
var inst_24421 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24444_26955 = state_24430__$1;
(statearr_24444_26955[(2)] = inst_24421);

(statearr_24444_26955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (1))){
var inst_24386 = (new Array(n));
var inst_24387 = inst_24386;
var inst_24388 = (0);
var state_24430__$1 = (function (){var statearr_24445 = state_24430;
(statearr_24445[(7)] = inst_24387);

(statearr_24445[(8)] = inst_24388);

return statearr_24445;
})();
var statearr_24446_26967 = state_24430__$1;
(statearr_24446_26967[(2)] = null);

(statearr_24446_26967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (4))){
var inst_24391 = (state_24430[(9)]);
var inst_24391__$1 = (state_24430[(2)]);
var inst_24393 = (inst_24391__$1 == null);
var inst_24395 = cljs.core.not(inst_24393);
var state_24430__$1 = (function (){var statearr_24447 = state_24430;
(statearr_24447[(9)] = inst_24391__$1);

return statearr_24447;
})();
if(inst_24395){
var statearr_24448_26973 = state_24430__$1;
(statearr_24448_26973[(1)] = (5));

} else {
var statearr_24449_26974 = state_24430__$1;
(statearr_24449_26974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (15))){
var inst_24415 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24451_26978 = state_24430__$1;
(statearr_24451_26978[(2)] = inst_24415);

(statearr_24451_26978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (13))){
var state_24430__$1 = state_24430;
var statearr_24452_26979 = state_24430__$1;
(statearr_24452_26979[(2)] = null);

(statearr_24452_26979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (6))){
var inst_24388 = (state_24430[(8)]);
var inst_24411 = (inst_24388 > (0));
var state_24430__$1 = state_24430;
if(cljs.core.truth_(inst_24411)){
var statearr_24454_26980 = state_24430__$1;
(statearr_24454_26980[(1)] = (12));

} else {
var statearr_24455_26981 = state_24430__$1;
(statearr_24455_26981[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (3))){
var inst_24423 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24430__$1,inst_24423);
} else {
if((state_val_24431 === (12))){
var inst_24387 = (state_24430[(7)]);
var inst_24413 = cljs.core.vec(inst_24387);
var state_24430__$1 = state_24430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24430__$1,(15),out,inst_24413);
} else {
if((state_val_24431 === (2))){
var state_24430__$1 = state_24430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24430__$1,(4),ch);
} else {
if((state_val_24431 === (11))){
var inst_24405 = (state_24430[(2)]);
var inst_24406 = (new Array(n));
var inst_24387 = inst_24406;
var inst_24388 = (0);
var state_24430__$1 = (function (){var statearr_24465 = state_24430;
(statearr_24465[(10)] = inst_24405);

(statearr_24465[(7)] = inst_24387);

(statearr_24465[(8)] = inst_24388);

return statearr_24465;
})();
var statearr_24466_26990 = state_24430__$1;
(statearr_24466_26990[(2)] = null);

(statearr_24466_26990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (9))){
var inst_24387 = (state_24430[(7)]);
var inst_24403 = cljs.core.vec(inst_24387);
var state_24430__$1 = state_24430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24430__$1,(11),out,inst_24403);
} else {
if((state_val_24431 === (5))){
var inst_24387 = (state_24430[(7)]);
var inst_24388 = (state_24430[(8)]);
var inst_24391 = (state_24430[(9)]);
var inst_24398 = (state_24430[(11)]);
var inst_24397 = (inst_24387[inst_24388] = inst_24391);
var inst_24398__$1 = (inst_24388 + (1));
var inst_24399 = (inst_24398__$1 < n);
var state_24430__$1 = (function (){var statearr_24467 = state_24430;
(statearr_24467[(12)] = inst_24397);

(statearr_24467[(11)] = inst_24398__$1);

return statearr_24467;
})();
if(cljs.core.truth_(inst_24399)){
var statearr_24471_26994 = state_24430__$1;
(statearr_24471_26994[(1)] = (8));

} else {
var statearr_24472_26995 = state_24430__$1;
(statearr_24472_26995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (14))){
var inst_24418 = (state_24430[(2)]);
var inst_24419 = cljs.core.async.close_BANG_(out);
var state_24430__$1 = (function (){var statearr_24478 = state_24430;
(statearr_24478[(13)] = inst_24418);

return statearr_24478;
})();
var statearr_24479_27000 = state_24430__$1;
(statearr_24479_27000[(2)] = inst_24419);

(statearr_24479_27000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (10))){
var inst_24409 = (state_24430[(2)]);
var state_24430__$1 = state_24430;
var statearr_24480_27005 = state_24430__$1;
(statearr_24480_27005[(2)] = inst_24409);

(statearr_24480_27005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24431 === (8))){
var inst_24387 = (state_24430[(7)]);
var inst_24398 = (state_24430[(11)]);
var tmp24473 = inst_24387;
var inst_24387__$1 = tmp24473;
var inst_24388 = inst_24398;
var state_24430__$1 = (function (){var statearr_24485 = state_24430;
(statearr_24485[(7)] = inst_24387__$1);

(statearr_24485[(8)] = inst_24388);

return statearr_24485;
})();
var statearr_24486_27009 = state_24430__$1;
(statearr_24486_27009[(2)] = null);

(statearr_24486_27009[(1)] = (2));


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
var cljs$core$async$state_machine__19837__auto__ = null;
var cljs$core$async$state_machine__19837__auto____0 = (function (){
var statearr_24492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24492[(0)] = cljs$core$async$state_machine__19837__auto__);

(statearr_24492[(1)] = (1));

return statearr_24492;
});
var cljs$core$async$state_machine__19837__auto____1 = (function (state_24430){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_24430);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e24496){var ex__19840__auto__ = e24496;
var statearr_24500_27026 = state_24430;
(statearr_24500_27026[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_24430[(4)]))){
var statearr_24501_27030 = state_24430;
(statearr_24501_27030[(1)] = cljs.core.first((state_24430[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27033 = state_24430;
state_24430 = G__27033;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$state_machine__19837__auto__ = function(state_24430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19837__auto____1.call(this,state_24430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19837__auto____0;
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19837__auto____1;
return cljs$core$async$state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_24505 = f__21026__auto__();
(statearr_24505[(6)] = c__21025__auto___26953);

return statearr_24505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24537 = arguments.length;
switch (G__24537) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21025__auto___27044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21026__auto__ = (function (){var switch__19836__auto__ = (function (state_24591){
var state_val_24592 = (state_24591[(1)]);
if((state_val_24592 === (7))){
var inst_24581 = (state_24591[(2)]);
var state_24591__$1 = state_24591;
var statearr_24597_27047 = state_24591__$1;
(statearr_24597_27047[(2)] = inst_24581);

(statearr_24597_27047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (1))){
var inst_24541 = [];
var inst_24542 = inst_24541;
var inst_24543 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24591__$1 = (function (){var statearr_24598 = state_24591;
(statearr_24598[(7)] = inst_24542);

(statearr_24598[(8)] = inst_24543);

return statearr_24598;
})();
var statearr_24599_27050 = state_24591__$1;
(statearr_24599_27050[(2)] = null);

(statearr_24599_27050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (4))){
var inst_24546 = (state_24591[(9)]);
var inst_24546__$1 = (state_24591[(2)]);
var inst_24547 = (inst_24546__$1 == null);
var inst_24548 = cljs.core.not(inst_24547);
var state_24591__$1 = (function (){var statearr_24600 = state_24591;
(statearr_24600[(9)] = inst_24546__$1);

return statearr_24600;
})();
if(inst_24548){
var statearr_24601_27052 = state_24591__$1;
(statearr_24601_27052[(1)] = (5));

} else {
var statearr_24602_27054 = state_24591__$1;
(statearr_24602_27054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (15))){
var inst_24542 = (state_24591[(7)]);
var inst_24573 = cljs.core.vec(inst_24542);
var state_24591__$1 = state_24591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24591__$1,(18),out,inst_24573);
} else {
if((state_val_24592 === (13))){
var inst_24568 = (state_24591[(2)]);
var state_24591__$1 = state_24591;
var statearr_24603_27055 = state_24591__$1;
(statearr_24603_27055[(2)] = inst_24568);

(statearr_24603_27055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (6))){
var inst_24542 = (state_24591[(7)]);
var inst_24570 = inst_24542.length;
var inst_24571 = (inst_24570 > (0));
var state_24591__$1 = state_24591;
if(cljs.core.truth_(inst_24571)){
var statearr_24605_27060 = state_24591__$1;
(statearr_24605_27060[(1)] = (15));

} else {
var statearr_24606_27062 = state_24591__$1;
(statearr_24606_27062[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (17))){
var inst_24578 = (state_24591[(2)]);
var inst_24579 = cljs.core.async.close_BANG_(out);
var state_24591__$1 = (function (){var statearr_24608 = state_24591;
(statearr_24608[(10)] = inst_24578);

return statearr_24608;
})();
var statearr_24609_27069 = state_24591__$1;
(statearr_24609_27069[(2)] = inst_24579);

(statearr_24609_27069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (3))){
var inst_24583 = (state_24591[(2)]);
var state_24591__$1 = state_24591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24591__$1,inst_24583);
} else {
if((state_val_24592 === (12))){
var inst_24542 = (state_24591[(7)]);
var inst_24561 = cljs.core.vec(inst_24542);
var state_24591__$1 = state_24591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24591__$1,(14),out,inst_24561);
} else {
if((state_val_24592 === (2))){
var state_24591__$1 = state_24591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24591__$1,(4),ch);
} else {
if((state_val_24592 === (11))){
var inst_24542 = (state_24591[(7)]);
var inst_24546 = (state_24591[(9)]);
var inst_24550 = (state_24591[(11)]);
var inst_24558 = inst_24542.push(inst_24546);
var tmp24610 = inst_24542;
var inst_24542__$1 = tmp24610;
var inst_24543 = inst_24550;
var state_24591__$1 = (function (){var statearr_24611 = state_24591;
(statearr_24611[(12)] = inst_24558);

(statearr_24611[(7)] = inst_24542__$1);

(statearr_24611[(8)] = inst_24543);

return statearr_24611;
})();
var statearr_24612_27082 = state_24591__$1;
(statearr_24612_27082[(2)] = null);

(statearr_24612_27082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (9))){
var inst_24543 = (state_24591[(8)]);
var inst_24554 = cljs.core.keyword_identical_QMARK_(inst_24543,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_24591__$1 = state_24591;
var statearr_24613_27088 = state_24591__$1;
(statearr_24613_27088[(2)] = inst_24554);

(statearr_24613_27088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (5))){
var inst_24546 = (state_24591[(9)]);
var inst_24550 = (state_24591[(11)]);
var inst_24543 = (state_24591[(8)]);
var inst_24551 = (state_24591[(13)]);
var inst_24550__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24546) : f.call(null,inst_24546));
var inst_24551__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24550__$1,inst_24543);
var state_24591__$1 = (function (){var statearr_24614 = state_24591;
(statearr_24614[(11)] = inst_24550__$1);

(statearr_24614[(13)] = inst_24551__$1);

return statearr_24614;
})();
if(inst_24551__$1){
var statearr_24615_27091 = state_24591__$1;
(statearr_24615_27091[(1)] = (8));

} else {
var statearr_24616_27094 = state_24591__$1;
(statearr_24616_27094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (14))){
var inst_24546 = (state_24591[(9)]);
var inst_24550 = (state_24591[(11)]);
var inst_24563 = (state_24591[(2)]);
var inst_24564 = [];
var inst_24565 = inst_24564.push(inst_24546);
var inst_24542 = inst_24564;
var inst_24543 = inst_24550;
var state_24591__$1 = (function (){var statearr_24618 = state_24591;
(statearr_24618[(14)] = inst_24563);

(statearr_24618[(15)] = inst_24565);

(statearr_24618[(7)] = inst_24542);

(statearr_24618[(8)] = inst_24543);

return statearr_24618;
})();
var statearr_24619_27099 = state_24591__$1;
(statearr_24619_27099[(2)] = null);

(statearr_24619_27099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (16))){
var state_24591__$1 = state_24591;
var statearr_24621_27101 = state_24591__$1;
(statearr_24621_27101[(2)] = null);

(statearr_24621_27101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (10))){
var inst_24556 = (state_24591[(2)]);
var state_24591__$1 = state_24591;
if(cljs.core.truth_(inst_24556)){
var statearr_24622_27103 = state_24591__$1;
(statearr_24622_27103[(1)] = (11));

} else {
var statearr_24626_27104 = state_24591__$1;
(statearr_24626_27104[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (18))){
var inst_24575 = (state_24591[(2)]);
var state_24591__$1 = state_24591;
var statearr_24627_27106 = state_24591__$1;
(statearr_24627_27106[(2)] = inst_24575);

(statearr_24627_27106[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (8))){
var inst_24551 = (state_24591[(13)]);
var state_24591__$1 = state_24591;
var statearr_24628_27111 = state_24591__$1;
(statearr_24628_27111[(2)] = inst_24551);

(statearr_24628_27111[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__19837__auto__ = null;
var cljs$core$async$state_machine__19837__auto____0 = (function (){
var statearr_24631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24631[(0)] = cljs$core$async$state_machine__19837__auto__);

(statearr_24631[(1)] = (1));

return statearr_24631;
});
var cljs$core$async$state_machine__19837__auto____1 = (function (state_24591){
while(true){
var ret_value__19838__auto__ = (function (){try{while(true){
var result__19839__auto__ = switch__19836__auto__(state_24591);
if(cljs.core.keyword_identical_QMARK_(result__19839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19839__auto__;
}
break;
}
}catch (e24633){var ex__19840__auto__ = e24633;
var statearr_24634_27121 = state_24591;
(statearr_24634_27121[(2)] = ex__19840__auto__);


if(cljs.core.seq((state_24591[(4)]))){
var statearr_24635_27122 = state_24591;
(statearr_24635_27122[(1)] = cljs.core.first((state_24591[(4)])));

} else {
throw ex__19840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27124 = state_24591;
state_24591 = G__27124;
continue;
} else {
return ret_value__19838__auto__;
}
break;
}
});
cljs$core$async$state_machine__19837__auto__ = function(state_24591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19837__auto____1.call(this,state_24591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19837__auto____0;
cljs$core$async$state_machine__19837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19837__auto____1;
return cljs$core$async$state_machine__19837__auto__;
})()
})();
var state__21027__auto__ = (function (){var statearr_24640 = f__21026__auto__();
(statearr_24640[(6)] = c__21025__auto___27044);

return statearr_24640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21027__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
