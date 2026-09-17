goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__27545,p__27546){
var map__27547 = p__27545;
var map__27547__$1 = cljs.core.__destructure_map(map__27547);
var svc = map__27547__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27547__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27547__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27547__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__27548 = p__27546;
var map__27548__$1 = cljs.core.__destructure_map(map__27548);
var msg = map__27548__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27548__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27548__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27548__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27548__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__27562,p__27563){
var map__27564 = p__27562;
var map__27564__$1 = cljs.core.__destructure_map(map__27564);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27564__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__27565 = p__27563;
var map__27565__$1 = cljs.core.__destructure_map(map__27565);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27565__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__27567,p__27568){
var map__27571 = p__27567;
var map__27571__$1 = cljs.core.__destructure_map(map__27571);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27571__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27571__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__27572 = p__27568;
var map__27572__$1 = cljs.core.__destructure_map(map__27572);
var msg = map__27572__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27572__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__27579,tid){
var map__27581 = p__27579;
var map__27581__$1 = cljs.core.__destructure_map(map__27581);
var svc = map__27581__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27581__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__27592 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__27593 = null;
var count__27594 = (0);
var i__27595 = (0);
while(true){
if((i__27595 < count__27594)){
var vec__27607 = chunk__27593.cljs$core$IIndexed$_nth$arity$2(null,i__27595);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27607,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27607,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__27646 = seq__27592;
var G__27647 = chunk__27593;
var G__27648 = count__27594;
var G__27649 = (i__27595 + (1));
seq__27592 = G__27646;
chunk__27593 = G__27647;
count__27594 = G__27648;
i__27595 = G__27649;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27592);
if(temp__5825__auto__){
var seq__27592__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27592__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__27592__$1);
var G__27650 = cljs.core.chunk_rest(seq__27592__$1);
var G__27651 = c__5694__auto__;
var G__27653 = cljs.core.count(c__5694__auto__);
var G__27654 = (0);
seq__27592 = G__27650;
chunk__27593 = G__27651;
count__27594 = G__27653;
i__27595 = G__27654;
continue;
} else {
var vec__27611 = cljs.core.first(seq__27592__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27611,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27611,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__27655 = cljs.core.next(seq__27592__$1);
var G__27656 = null;
var G__27657 = (0);
var G__27658 = (0);
seq__27592 = G__27655;
chunk__27593 = G__27656;
count__27594 = G__27657;
i__27595 = G__27658;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__27583_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__27583_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__27584_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__27584_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__27585_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__27585_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__27586_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__27586_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__27616){
var map__27618 = p__27616;
var map__27618__$1 = cljs.core.__destructure_map(map__27618);
var svc = map__27618__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27618__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27618__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
