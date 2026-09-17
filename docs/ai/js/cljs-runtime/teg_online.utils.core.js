goog.provide('teg_online.utils.core');
teg_online.utils.core.deal = (function teg_online$utils$core$deal(cards,players){
var player_count = cljs.core.count(players);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2(player_count,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(i,cards))], null);
}),players));
});
teg_online.utils.core.seek = (function teg_online$utils$core$seek(var_args){
var G__73744 = arguments.length;
switch (G__73744) {
case 2:
return teg_online.utils.core.seek.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return teg_online.utils.core.seek.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.utils.core.seek.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__73736_SHARP_,p2__73735_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__73735_SHARP_) : pred.call(null,p2__73735_SHARP_)))){
return cljs.core.reduced(p2__73735_SHARP_);
} else {
return null;
}
}),null,coll);
}));

(teg_online.utils.core.seek.cljs$core$IFn$_invoke$arity$3 = (function (pred,coll,default_value){
var or__5162__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__73738_SHARP_,p2__73737_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__73737_SHARP_) : pred.call(null,p2__73737_SHARP_)))){
return cljs.core.reduced(p2__73737_SHARP_);
} else {
return null;
}
}),null,coll);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default_value;
}
}));

(teg_online.utils.core.seek.cljs$lang$maxFixedArity = 3);

/**
 * Returns a map of the elements of `coll` keyed by the result of `f` on each
 * element.  The value at each key will be a single element (in contrast to
 * `clojure.core/group-by`).  Therefore `f` should generally return an unique
 * key for every element - otherwise elements get discarded.
 */
teg_online.utils.core.index_by = (function teg_online$utils$core$index_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__73748_SHARP_,p2__73749_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__73748_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__73749_SHARP_) : f.call(null,p2__73749_SHARP_)),p2__73749_SHARP_);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
teg_online.utils.core.index_of = (function teg_online$utils$core$index_of(v,e){
return v.indexOf(e);
});
/**
 * Simple string formatting function. It doesn't support any fancy features
 *   (but works in cljs)
 */
teg_online.utils.core.format = (function teg_online$utils$core$format(var_args){
var args__5903__auto__ = [];
var len__5897__auto___73921 = arguments.length;
var i__5898__auto___73922 = (0);
while(true){
if((i__5898__auto___73922 < len__5897__auto___73921)){
args__5903__auto__.push((arguments[i__5898__auto___73922]));

var G__73926 = (i__5898__auto___73922 + (1));
i__5898__auto___73922 = G__73926;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (text,args){
var t = text;
var i = (0);
while(true){
var temp__5823__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,i,null);
if(cljs.core.truth_(temp__5823__auto__)){
var val = temp__5823__auto__;
var G__73928 = clojure.string.replace(t,(""+"%"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1)))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)));
var G__73929 = (i + (1));
t = G__73928;
i = G__73929;
continue;
} else {
return t;
}
break;
}
}));

(teg_online.utils.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(teg_online.utils.core.format.cljs$lang$applyTo = (function (seq73750){
var G__73751 = cljs.core.first(seq73750);
var seq73750__$1 = cljs.core.next(seq73750);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73751,seq73750__$1);
}));

teg_online.utils.core.rand_int = (function teg_online$utils$core$rand_int(var_args){
var G__73761 = arguments.length;
switch (G__73761) {
case 1:
return teg_online.utils.core.rand_int.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return teg_online.utils.core.rand_int.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.utils.core.rand_int.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs.core.rand_int(n);
}));

(teg_online.utils.core.rand_int.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (min + cljs.core.rand_int((max - min)));
}));

(teg_online.utils.core.rand_int.cljs$lang$maxFixedArity = 2);

teg_online.utils.core.partitions = (function teg_online$utils$core$partitions(var_args){
var G__73766 = arguments.length;
switch (G__73766) {
case 1:
return teg_online.utils.core.partitions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return teg_online.utils.core.partitions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.utils.core.partitions.cljs$core$IFn$_invoke$arity$1 = (function (n){
return teg_online.utils.core.partitions.cljs$core$IFn$_invoke$arity$2(n,n);
}));

(teg_online.utils.core.partitions.cljs$core$IFn$_invoke$arity$2 = (function (remaining,max_part){
if((remaining === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
var iter__5649__auto__ = (function teg_online$utils$core$iter__73811(s__73813){
return (new cljs.core.LazySeq(null,(function (){
var s__73813__$1 = s__73813;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__73813__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var part = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__73813__$1,part,xs__6385__auto__,temp__5825__auto__){
return (function teg_online$utils$core$iter__73811_$_iter__73816(s__73817){
return (new cljs.core.LazySeq(null,((function (s__73813__$1,part,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__73817__$1 = s__73817;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__73817__$1);
if(temp__5825__auto____$1){
var s__73817__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73817__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__73817__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__73823 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__73820 = (0);
while(true){
if((i__73820 < size__5648__auto__)){
var rest = cljs.core._nth(c__5647__auto__,i__73820);
cljs.core.chunk_append(b__73823,cljs.core.cons(part,rest));

var G__73943 = (i__73820 + (1));
i__73820 = G__73943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73823),teg_online$utils$core$iter__73811_$_iter__73816(cljs.core.chunk_rest(s__73817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73823),null);
}
} else {
var rest = cljs.core.first(s__73817__$2);
return cljs.core.cons(cljs.core.cons(part,rest),teg_online$utils$core$iter__73811_$_iter__73816(cljs.core.rest(s__73817__$2)));
}
} else {
return null;
}
break;
}
});})(s__73813__$1,part,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__73813__$1,part,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(teg_online.utils.core.partitions.cljs$core$IFn$_invoke$arity$2((remaining - part),part)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,teg_online$utils$core$iter__73811(cljs.core.rest(s__73813__$1)));
} else {
var G__73944 = cljs.core.rest(s__73813__$1);
s__73813__$1 = G__73944;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.min.cljs$core$IFn$_invoke$arity$2(remaining,max_part),(0),(-1)));
}
}));

(teg_online.utils.core.partitions.cljs$lang$maxFixedArity = 2);

teg_online.utils.core.combinations = (function teg_online$utils$core$combinations(items,n){
if((n < (1))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,items);
} else {
var items__$1 = cljs.core.set(items);
var iter__5649__auto__ = (function teg_online$utils$core$combinations_$_iter__73885(s__73886){
return (new cljs.core.LazySeq(null,(function (){
var s__73886__$1 = s__73886;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__73886__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var item = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__73886__$1,item,xs__6385__auto__,temp__5825__auto__,items__$1){
return (function teg_online$utils$core$combinations_$_iter__73885_$_iter__73887(s__73888){
return (new cljs.core.LazySeq(null,((function (s__73886__$1,item,xs__6385__auto__,temp__5825__auto__,items__$1){
return (function (){
var s__73888__$1 = s__73888;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__73888__$1);
if(temp__5825__auto____$1){
var s__73888__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73888__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__73888__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__73890 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__73889 = (0);
while(true){
if((i__73889 < size__5648__auto__)){
var rest = cljs.core._nth(c__5647__auto__,i__73889);
cljs.core.chunk_append(b__73890,cljs.core.cons(item,rest));

var G__73949 = (i__73889 + (1));
i__73889 = G__73949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73890),teg_online$utils$core$combinations_$_iter__73885_$_iter__73887(cljs.core.chunk_rest(s__73888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73890),null);
}
} else {
var rest = cljs.core.first(s__73888__$2);
return cljs.core.cons(cljs.core.cons(item,rest),teg_online$utils$core$combinations_$_iter__73885_$_iter__73887(cljs.core.rest(s__73888__$2)));
}
} else {
return null;
}
break;
}
});})(s__73886__$1,item,xs__6385__auto__,temp__5825__auto__,items__$1))
,null,null));
});})(s__73886__$1,item,xs__6385__auto__,temp__5825__auto__,items__$1))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__((function (){var G__73897 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(items__$1,item);
var G__73898 = (n - (1));
return (teg_online.utils.core.combinations.cljs$core$IFn$_invoke$arity$2 ? teg_online.utils.core.combinations.cljs$core$IFn$_invoke$arity$2(G__73897,G__73898) : teg_online.utils.core.combinations.call(null,G__73897,G__73898));
})()));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,teg_online$utils$core$combinations_$_iter__73885(cljs.core.rest(s__73886__$1)));
} else {
var G__73950 = cljs.core.rest(s__73886__$1);
s__73886__$1 = G__73950;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(items__$1);

}
}
});

//# sourceMappingURL=teg_online.utils.core.js.map
