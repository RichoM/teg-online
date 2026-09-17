goog.provide('teg_online.history');
if((typeof teg_online !== 'undefined') && (typeof teg_online.history !== 'undefined') && (typeof teg_online.history.history !== 'undefined')){
} else {
teg_online.history.history = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
teg_online.history.initialize = (function teg_online$history$initialize(game_atom){
return cljs.core.add_watch(game_atom,new cljs.core.Keyword("teg-online.history","history-update","teg-online.history/history-update",-39835749),(function (_,___$1,___$2,state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(teg_online.history.history,cljs.core.conj,state);
}));
});
teg_online.history.count = (function teg_online$history$count(){
return cljs.core.count(cljs.core.deref(teg_online.history.history));
});
teg_online.history.empty_QMARK_ = (function teg_online$history$empty_QMARK_(){
return cljs.core.empty_QMARK_(cljs.core.deref(teg_online.history.history));
});

//# sourceMappingURL=teg_online.history.js.map
