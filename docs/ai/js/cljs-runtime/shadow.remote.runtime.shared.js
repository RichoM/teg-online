goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__20279){
var map__20280 = p__20279;
var map__20280__$1 = cljs.core.__destructure_map(map__20280);
var runtime = map__20280__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20280__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5162__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_20544 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_20544)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__20287 = runtime;
var G__20288 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_20544);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__20287,G__20288) : shadow.remote.runtime.shared.process.call(null,G__20287,G__20288));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__20296,res){
var map__20297 = p__20296;
var map__20297__$1 = cljs.core.__destructure_map(map__20297);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20297__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20297__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__20299 = res;
var G__20299__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20299,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__20299);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20299__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__20299__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__20305 = arguments.length;
switch (G__20305) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__20315,msg,handlers,timeout_after_ms){
var map__20316 = p__20315;
var map__20316__$1 = cljs.core.__destructure_map(map__20316);
var runtime = map__20316__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20316__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___20575 = arguments.length;
var i__5898__auto___20576 = (0);
while(true){
if((i__5898__auto___20576 < len__5897__auto___20575)){
args__5903__auto__.push((arguments[i__5898__auto___20576]));

var G__20577 = (i__5898__auto___20576 + (1));
i__5898__auto___20576 = G__20577;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__20346,ev,args){
var map__20350 = p__20346;
var map__20350__$1 = cljs.core.__destructure_map(map__20350);
var runtime = map__20350__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20350__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__20353 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__20356 = null;
var count__20357 = (0);
var i__20358 = (0);
while(true){
if((i__20358 < count__20357)){
var ext = chunk__20356.cljs$core$IIndexed$_nth$arity$2(null,i__20358);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20584 = seq__20353;
var G__20585 = chunk__20356;
var G__20586 = count__20357;
var G__20587 = (i__20358 + (1));
seq__20353 = G__20584;
chunk__20356 = G__20585;
count__20357 = G__20586;
i__20358 = G__20587;
continue;
} else {
var G__20590 = seq__20353;
var G__20591 = chunk__20356;
var G__20592 = count__20357;
var G__20593 = (i__20358 + (1));
seq__20353 = G__20590;
chunk__20356 = G__20591;
count__20357 = G__20592;
i__20358 = G__20593;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20353);
if(temp__5825__auto__){
var seq__20353__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20353__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__20353__$1);
var G__20602 = cljs.core.chunk_rest(seq__20353__$1);
var G__20603 = c__5694__auto__;
var G__20604 = cljs.core.count(c__5694__auto__);
var G__20605 = (0);
seq__20353 = G__20602;
chunk__20356 = G__20603;
count__20357 = G__20604;
i__20358 = G__20605;
continue;
} else {
var ext = cljs.core.first(seq__20353__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20608 = cljs.core.next(seq__20353__$1);
var G__20609 = null;
var G__20610 = (0);
var G__20611 = (0);
seq__20353 = G__20608;
chunk__20356 = G__20609;
count__20357 = G__20610;
i__20358 = G__20611;
continue;
} else {
var G__20616 = cljs.core.next(seq__20353__$1);
var G__20617 = null;
var G__20618 = (0);
var G__20619 = (0);
seq__20353 = G__20616;
chunk__20356 = G__20617;
count__20357 = G__20618;
i__20358 = G__20619;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq20333){
var G__20334 = cljs.core.first(seq20333);
var seq20333__$1 = cljs.core.next(seq20333);
var G__20335 = cljs.core.first(seq20333__$1);
var seq20333__$2 = cljs.core.next(seq20333__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20334,G__20335,seq20333__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__20373,p__20374){
var map__20375 = p__20373;
var map__20375__$1 = cljs.core.__destructure_map(map__20375);
var runtime = map__20375__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20375__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20376 = p__20374;
var map__20376__$1 = cljs.core.__destructure_map(map__20376);
var msg = map__20376__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20376__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__20378 = cljs.core.deref(state_ref);
var map__20378__$1 = cljs.core.__destructure_map(map__20378);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20378__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20378__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__20388,msg){
var map__20389 = p__20388;
var map__20389__$1 = cljs.core.__destructure_map(map__20389);
var runtime = map__20389__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20389__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__20395,key,p__20396){
var map__20398 = p__20395;
var map__20398__$1 = cljs.core.__destructure_map(map__20398);
var state = map__20398__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20398__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__20399 = p__20396;
var map__20399__$1 = cljs.core.__destructure_map(map__20399);
var spec = map__20399__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20399__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20399__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__20404,key,spec){
var map__20405 = p__20404;
var map__20405__$1 = cljs.core.__destructure_map(map__20405);
var runtime = map__20405__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20405__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___20673 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___20673 == null)){
} else {
var on_welcome_20675 = temp__5829__auto___20673;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_20675.cljs$core$IFn$_invoke$arity$0 ? on_welcome_20675.cljs$core$IFn$_invoke$arity$0() : on_welcome_20675.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__20406_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__20406_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__20408_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__20408_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__20409_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__20409_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__20410_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__20410_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__20411_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__20411_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__20426,key){
var map__20428 = p__20426;
var map__20428__$1 = cljs.core.__destructure_map(map__20428);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20428__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__20433,msg){
var map__20434 = p__20433;
var map__20434__$1 = cljs.core.__destructure_map(map__20434);
var runtime = map__20434__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20434__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__20446,p__20447){
var map__20448 = p__20446;
var map__20448__$1 = cljs.core.__destructure_map(map__20448);
var runtime = map__20448__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20448__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20449 = p__20447;
var map__20449__$1 = cljs.core.__destructure_map(map__20449);
var msg = map__20449__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20449__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20449__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__20483 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__20485 = null;
var count__20486 = (0);
var i__20487 = (0);
while(true){
if((i__20487 < count__20486)){
var map__20505 = chunk__20485.cljs$core$IIndexed$_nth$arity$2(null,i__20487);
var map__20505__$1 = cljs.core.__destructure_map(map__20505);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20505__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20777 = seq__20483;
var G__20778 = chunk__20485;
var G__20779 = count__20486;
var G__20780 = (i__20487 + (1));
seq__20483 = G__20777;
chunk__20485 = G__20778;
count__20486 = G__20779;
i__20487 = G__20780;
continue;
} else {
var G__20789 = seq__20483;
var G__20790 = chunk__20485;
var G__20791 = count__20486;
var G__20792 = (i__20487 + (1));
seq__20483 = G__20789;
chunk__20485 = G__20790;
count__20486 = G__20791;
i__20487 = G__20792;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20483);
if(temp__5825__auto__){
var seq__20483__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20483__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__20483__$1);
var G__20794 = cljs.core.chunk_rest(seq__20483__$1);
var G__20795 = c__5694__auto__;
var G__20796 = cljs.core.count(c__5694__auto__);
var G__20797 = (0);
seq__20483 = G__20794;
chunk__20485 = G__20795;
count__20486 = G__20796;
i__20487 = G__20797;
continue;
} else {
var map__20512 = cljs.core.first(seq__20483__$1);
var map__20512__$1 = cljs.core.__destructure_map(map__20512);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20512__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20804 = cljs.core.next(seq__20483__$1);
var G__20805 = null;
var G__20806 = (0);
var G__20808 = (0);
seq__20483 = G__20804;
chunk__20485 = G__20805;
count__20486 = G__20806;
i__20487 = G__20808;
continue;
} else {
var G__20818 = cljs.core.next(seq__20483__$1);
var G__20819 = null;
var G__20820 = (0);
var G__20821 = (0);
seq__20483 = G__20818;
chunk__20485 = G__20819;
count__20486 = G__20820;
i__20487 = G__20821;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
