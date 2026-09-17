goog.provide('portal.async');
portal.async.race = (function portal$async$race(var_args){
var args__5903__auto__ = [];
var len__5897__auto___20261 = arguments.length;
var i__5898__auto___20263 = (0);
while(true){
if((i__5898__auto___20263 < len__5897__auto___20261)){
args__5903__auto__.push((arguments[i__5898__auto___20263]));

var G__20265 = (i__5898__auto___20263 + (1));
i__5898__auto___20263 = G__20265;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return portal.async.race.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(portal.async.race.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return Promise.race(args);
}));

(portal.async.race.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(portal.async.race.cljs$lang$applyTo = (function (seq20240){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20240));
}));


//# sourceMappingURL=portal.async.js.map
