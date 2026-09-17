goog.provide('crate.binding');

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.atm)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path);
} else {
return null;
}
}));

(crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,(""+"#<SubAtom: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path)], 0)))+">"));
}));

(crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__28201 = cljs.core.seq(self__.watches);
var chunk__28202 = null;
var count__28203 = (0);
var i__28204 = (0);
while(true){
if((i__28204 < count__28203)){
var vec__28214 = chunk__28202.cljs$core$IIndexed$_nth$arity$2(null,i__28204);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28214,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28214,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key__$1,this$__$1,oldval,newval) : f.call(null,key__$1,this$__$1,oldval,newval));


var G__28715 = seq__28201;
var G__28716 = chunk__28202;
var G__28717 = count__28203;
var G__28718 = (i__28204 + (1));
seq__28201 = G__28715;
chunk__28202 = G__28716;
count__28203 = G__28717;
i__28204 = G__28718;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28201);
if(temp__5825__auto__){
var seq__28201__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28201__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28201__$1);
var G__28719 = cljs.core.chunk_rest(seq__28201__$1);
var G__28720 = c__5694__auto__;
var G__28721 = cljs.core.count(c__5694__auto__);
var G__28722 = (0);
seq__28201 = G__28719;
chunk__28202 = G__28720;
count__28203 = G__28721;
i__28204 = G__28722;
continue;
} else {
var vec__28218 = cljs.core.first(seq__28201__$1);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28218,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28218,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key__$1,this$__$1,oldval,newval) : f.call(null,key__$1,this$__$1,oldval,newval));


var G__28723 = cljs.core.next(seq__28201__$1);
var G__28724 = null;
var G__28725 = (0);
var G__28726 = (0);
seq__28201 = G__28723;
chunk__28202 = G__28724;
count__28203 = G__28725;
i__28204 = G__28726;
continue;
}
} else {
return null;
}
}
break;
}
}));

(crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return (this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__$1,f));
} else {
return null;
}
}));

(crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__$1));
}));

(crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(crate.binding.SubAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"prevhash","prevhash",1446045952,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(crate.binding.SubAtom.cljs$lang$type = true);

(crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom");

(crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"crate.binding/SubAtom");
}));

/**
 * Positional factory function for crate.binding/SubAtom.
 */
crate.binding.__GT_SubAtom = (function crate$binding$__GT_SubAtom(atm,path,prevhash,watches,key){
return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});

crate.binding.subatom = (function crate$binding$subatom(atm,path){
var path__$1 = ((cljs.core.coll_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var vec__28239 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));
var atm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28239,(0),null);
var path__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28239,(1),null);
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(atm__$1),path__$2)),null,k));
cljs.core.add_watch(atm__$1,k,(function (_,___$1,ov,nv){
var latest = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nv,path__$2);
var prev = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ov,path__$2);
var latest_hash = cljs.core.hash(latest);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,latest)))){
(sa.prevhash = latest_hash);

return sa.cljs$core$IWatchable$_notify_watches$arity$3(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ov,path__$2),latest);
} else {
return null;
}
}));

return sa;
});
/**
 * Sets the value of atom to newval without regard for the
 *   current value. Returns newval.
 */
crate.binding.sub_reset_BANG_ = (function crate$binding$sub_reset_BANG_(sa,new_value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sa.atm,cljs.core.assoc_in,sa.path,new_value);

return new_value;
});
/**
 * Atomically swaps the value of atom to be:
 *   (apply f current-value-of-atom args). Note that f may be called
 *   multiple times, and thus should be free of side effects.  Returns
 *   the value that was swapped in.
 */
crate.binding.sub_swap_BANG_ = (function crate$binding$sub_swap_BANG_(var_args){
var G__28268 = arguments.length;
switch (G__28268) {
case 2:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___28731 = arguments.length;
var i__5898__auto___28732 = (0);
while(true){
if((i__5898__auto___28732 < len__5897__auto___28731)){
args_arr__5922__auto__.push((arguments[i__5898__auto___28732]));

var G__28733 = (i__5898__auto___28732 + (1));
i__5898__auto___28732 = G__28733;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((5) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((5)),(0),null)):null);
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5923__auto__);

}
});

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sa,f){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__28288 = cljs.core.deref(sa);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28288) : f.call(null,G__28288));
})());
}));

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (sa,f,x){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__28291 = cljs.core.deref(sa);
var G__28292 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28291,G__28292) : f.call(null,G__28291,G__28292));
})());
}));

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (sa,f,x,y){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__28300 = cljs.core.deref(sa);
var G__28301 = x;
var G__28302 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28300,G__28301,G__28302) : f.call(null,G__28300,G__28301,G__28302));
})());
}));

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (sa,f,x,y,z){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__28310 = cljs.core.deref(sa);
var G__28311 = x;
var G__28312 = y;
var G__28313 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__28310,G__28311,G__28312,G__28313) : f.call(null,G__28310,G__28311,G__28312,G__28313));
})());
}));

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_(sa,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.deref(sa),x,y,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
}));

/** @this {Function} */
(crate.binding.sub_swap_BANG_.cljs$lang$applyTo = (function (seq28262){
var G__28263 = cljs.core.first(seq28262);
var seq28262__$1 = cljs.core.next(seq28262);
var G__28264 = cljs.core.first(seq28262__$1);
var seq28262__$2 = cljs.core.next(seq28262__$1);
var G__28265 = cljs.core.first(seq28262__$2);
var seq28262__$3 = cljs.core.next(seq28262__$2);
var G__28266 = cljs.core.first(seq28262__$3);
var seq28262__$4 = cljs.core.next(seq28262__$3);
var G__28267 = cljs.core.first(seq28262__$4);
var seq28262__$5 = cljs.core.next(seq28262__$4);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28263,G__28264,G__28265,G__28266,G__28267,seq28262__$5);
}));

(crate.binding.sub_swap_BANG_.cljs$lang$maxFixedArity = (5));

crate.binding.sub_destroy_BANG_ = (function crate$binding$sub_destroy_BANG_(sa){
cljs.core.remove_watch(sa.atm,sa.key);

(sa.watches = null);

return (sa.atm = null);
});

/**
 * @interface
 */
crate.binding.computable = function(){};

var crate$binding$computable$_depend$dyn_28735 = (function (this$,atm){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (crate.binding._depend[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,atm) : m__5520__auto__.call(null,this$,atm));
} else {
var m__5518__auto__ = (crate.binding._depend["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,atm) : m__5518__auto__.call(null,this$,atm));
} else {
throw cljs.core.missing_protocol("computable.-depend",this$);
}
}
});
/**
 * depend on an atom
 */
crate.binding._depend = (function crate$binding$_depend(this$,atm){
if((((!((this$ == null)))) && ((!((this$.crate$binding$computable$_depend$arity$2 == null)))))){
return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else {
return crate$binding$computable$_depend$dyn_28735(this$,atm);
}
});

var crate$binding$computable$_compute$dyn_28737 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (crate.binding._compute[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (crate.binding._compute["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("computable.-compute",this$);
}
}
});
/**
 * compute the latest value
 */
crate.binding._compute = (function crate$binding$_compute(this$){
if((((!((this$ == null)))) && ((!((this$.crate$binding$computable$_compute$arity$1 == null)))))){
return this$.crate$binding$computable$_compute$arity$1(this$);
} else {
return crate$binding$computable$_compute$dyn_28737(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {crate.binding.computable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
crate.binding.Computed = (function (atms,value,func,watches,key,meta){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
}));

(crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,(""+"#<Computed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.value], 0)))+">"));
}));

(crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__28398 = cljs.core.seq(self__.watches);
var chunk__28399 = null;
var count__28400 = (0);
var i__28401 = (0);
while(true){
if((i__28401 < count__28400)){
var vec__28417 = chunk__28399.cljs$core$IIndexed$_nth$arity$2(null,i__28401);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28417,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28417,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key__$1,this$__$1,oldval,newval) : f.call(null,key__$1,this$__$1,oldval,newval));


var G__28739 = seq__28398;
var G__28740 = chunk__28399;
var G__28741 = count__28400;
var G__28742 = (i__28401 + (1));
seq__28398 = G__28739;
chunk__28399 = G__28740;
count__28400 = G__28741;
i__28401 = G__28742;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28398);
if(temp__5825__auto__){
var seq__28398__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28398__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28398__$1);
var G__28743 = cljs.core.chunk_rest(seq__28398__$1);
var G__28744 = c__5694__auto__;
var G__28745 = cljs.core.count(c__5694__auto__);
var G__28746 = (0);
seq__28398 = G__28743;
chunk__28399 = G__28744;
count__28400 = G__28745;
i__28401 = G__28746;
continue;
} else {
var vec__28421 = cljs.core.first(seq__28398__$1);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key__$1,this$__$1,oldval,newval) : f.call(null,key__$1,this$__$1,oldval,newval));


var G__28748 = cljs.core.next(seq__28398__$1);
var G__28749 = null;
var G__28750 = (0);
var G__28751 = (0);
seq__28398 = G__28748;
chunk__28399 = G__28749;
count__28400 = G__28750;
i__28401 = G__28751;
continue;
}
} else {
return null;
}
}
break;
}
}));

(crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return (this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__$1,f));
} else {
return null;
}
}));

(crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__$1));
}));

(crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(crate.binding.Computed.prototype.crate$binding$computable$ = cljs.core.PROTOCOL_SENTINEL);

(crate.binding.Computed.prototype.crate$binding$computable$_depend$arity$2 = (function (this$,atm){
var self__ = this;
var this$__$1 = this;
(this$__$1.atms = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(this$__$1.atms,atm));

return cljs.core.add_watch(atm,self__.key,(function (_,___$1,___$2,___$3){
return this$__$1.crate$binding$computable$_compute$arity$1(null);
}));
}));

(crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var old = this$__$1.value;
var nv = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.func,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,self__.atms));
(this$__$1.value = nv);

return this$__$1.cljs$core$IWatchable$_notify_watches$arity$3(null,old,nv);
}));

(crate.binding.Computed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atms","atms",-855465715,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(crate.binding.Computed.cljs$lang$type = true);

(crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed");

(crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"crate.binding/Computed");
}));

/**
 * Positional factory function for crate.binding/Computed.
 */
crate.binding.__GT_Computed = (function crate$binding$__GT_Computed(atms,value,func,watches,key,meta){
return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});

crate.binding.computed = (function crate$binding$computed(atms,func){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("computed");
var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));
neue.crate$binding$computable$_compute$arity$1(null);

var seq__28454_28756 = cljs.core.seq(atms);
var chunk__28455_28757 = null;
var count__28456_28758 = (0);
var i__28457_28759 = (0);
while(true){
if((i__28457_28759 < count__28456_28758)){
var atm_28761 = chunk__28455_28757.cljs$core$IIndexed$_nth$arity$2(null,i__28457_28759);
neue.crate$binding$computable$_depend$arity$2(null,atm_28761);


var G__28762 = seq__28454_28756;
var G__28763 = chunk__28455_28757;
var G__28764 = count__28456_28758;
var G__28765 = (i__28457_28759 + (1));
seq__28454_28756 = G__28762;
chunk__28455_28757 = G__28763;
count__28456_28758 = G__28764;
i__28457_28759 = G__28765;
continue;
} else {
var temp__5825__auto___28766 = cljs.core.seq(seq__28454_28756);
if(temp__5825__auto___28766){
var seq__28454_28767__$1 = temp__5825__auto___28766;
if(cljs.core.chunked_seq_QMARK_(seq__28454_28767__$1)){
var c__5694__auto___28768 = cljs.core.chunk_first(seq__28454_28767__$1);
var G__28769 = cljs.core.chunk_rest(seq__28454_28767__$1);
var G__28770 = c__5694__auto___28768;
var G__28771 = cljs.core.count(c__5694__auto___28768);
var G__28772 = (0);
seq__28454_28756 = G__28769;
chunk__28455_28757 = G__28770;
count__28456_28758 = G__28771;
i__28457_28759 = G__28772;
continue;
} else {
var atm_28773 = cljs.core.first(seq__28454_28767__$1);
neue.crate$binding$computable$_depend$arity$2(null,atm_28773);


var G__28775 = cljs.core.next(seq__28454_28767__$1);
var G__28776 = null;
var G__28777 = (0);
var G__28778 = (0);
seq__28454_28756 = G__28775;
chunk__28455_28757 = G__28776;
count__28456_28758 = G__28777;
i__28457_28759 = G__28778;
continue;
}
} else {
}
}
break;
}

return neue;
});
crate.binding.compute = (function crate$binding$compute(compu){
return crate.binding._compute(compu);
});
crate.binding.depend_on = (function crate$binding$depend_on(compu,atm){
return crate.binding._depend(compu,atm);
});
crate.binding.notify = (function crate$binding$notify(w,o,v){
return cljs.core._notify_watches(w,o,v);
});

/**
 * @interface
 */
crate.binding.bindable_coll = function(){};


/**
 * @interface
 */
crate.binding.bindable = function(){};

var crate$binding$bindable$_value$dyn_28779 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (crate.binding._value[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (crate.binding._value["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("bindable.-value",this$);
}
}
});
/**
 * get the current value of this binding
 */
crate.binding._value = (function crate$binding$_value(this$){
if((((!((this$ == null)))) && ((!((this$.crate$binding$bindable$_value$arity$1 == null)))))){
return this$.crate$binding$bindable$_value$arity$1(this$);
} else {
return crate$binding$bindable$_value$dyn_28779(this$);
}
});

var crate$binding$bindable$_on_change$dyn_28781 = (function (this$,func){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (crate.binding._on_change[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,func) : m__5520__auto__.call(null,this$,func));
} else {
var m__5518__auto__ = (crate.binding._on_change["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,func) : m__5518__auto__.call(null,this$,func));
} else {
throw cljs.core.missing_protocol("bindable.-on-change",this$);
}
}
});
/**
 * On change of this binding execute func
 */
crate.binding._on_change = (function crate$binding$_on_change(this$,func){
if((((!((this$ == null)))) && ((!((this$.crate$binding$bindable$_on_change$arity$2 == null)))))){
return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else {
return crate$binding$bindable$_on_change$dyn_28781(this$,func);
}
});


/**
* @constructor
 * @implements {crate.binding.bindable}
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
});
(crate.binding.atom_binding.prototype.crate$binding$bindable$ = cljs.core.PROTOCOL_SENTINEL);

(crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__28508 = cljs.core.deref(self__.atm);
return (self__.value_func.cljs$core$IFn$_invoke$arity$1 ? self__.value_func.cljs$core$IFn$_invoke$arity$1(G__28508) : self__.value_func.call(null,G__28508));
}));

(crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch(self__.atm,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("atom-binding"),(function (){
var G__28513 = this$__$1.crate$binding$bindable$_value$arity$1(null);
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(G__28513) : func.call(null,G__28513));
}));
}));

(crate.binding.atom_binding.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"value-func","value-func",2077951825,null)], null);
}));

(crate.binding.atom_binding.cljs$lang$type = true);

(crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding");

(crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"crate.binding/atom-binding");
}));

/**
 * Positional factory function for crate.binding/atom-binding.
 */
crate.binding.__GT_atom_binding = (function crate$binding$__GT_atom_binding(atm,value_func){
return (new crate.binding.atom_binding(atm,value_func));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 2;
this.cljs$lang$protocol_mask$partition0$ = 0;
});
(crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__28528 = cljs.core.seq(self__.watches);
var chunk__28529 = null;
var count__28530 = (0);
var i__28531 = (0);
while(true){
if((i__28531 < count__28530)){
var vec__28545 = chunk__28529.cljs$core$IIndexed$_nth$arity$2(null,i__28531);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28545,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28545,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));


var G__28784 = seq__28528;
var G__28785 = chunk__28529;
var G__28786 = count__28530;
var G__28787 = (i__28531 + (1));
seq__28528 = G__28784;
chunk__28529 = G__28785;
count__28530 = G__28786;
i__28531 = G__28787;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28528);
if(temp__5825__auto__){
var seq__28528__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28528__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28528__$1);
var G__28788 = cljs.core.chunk_rest(seq__28528__$1);
var G__28789 = c__5694__auto__;
var G__28790 = cljs.core.count(c__5694__auto__);
var G__28791 = (0);
seq__28528 = G__28788;
chunk__28529 = G__28789;
count__28530 = G__28790;
i__28531 = G__28791;
continue;
} else {
var vec__28555 = cljs.core.first(seq__28528__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28555,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28555,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));


var G__28793 = cljs.core.next(seq__28528__$1);
var G__28794 = null;
var G__28795 = (0);
var G__28796 = (0);
seq__28528 = G__28793;
chunk__28529 = G__28794;
count__28530 = G__28795;
i__28531 = G__28796;
continue;
}
} else {
return null;
}
}
break;
}
}));

(crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f));
}));

(crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key));
}));

(crate.binding.notifier.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
}));

(crate.binding.notifier.cljs$lang$type = true);

(crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier");

(crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"crate.binding/notifier");
}));

/**
 * Positional factory function for crate.binding/notifier.
 */
crate.binding.__GT_notifier = (function crate$binding$__GT_notifier(watches){
return (new crate.binding.notifier(watches));
});


/**
* @constructor
 * @implements {crate.binding.bindable}
 * @implements {crate.binding.bindable_coll}
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
});
(crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = cljs.core.PROTOCOL_SENTINEL);

(crate.binding.bound_collection.prototype.crate$binding$bindable$ = cljs.core.PROTOCOL_SENTINEL);

(crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elem","elem",618631056),cljs.core.vals(this$__$1.stuff));
}));

(crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch(self__.notif,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),(function (_,___$1,___$2,p__28579){
var vec__28580 = p__28579;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28580,(0),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28580,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28580,(2),null);
return (func.cljs$core$IFn$_invoke$arity$3 ? func.cljs$core$IFn$_invoke$arity$3(event,el,v) : func.call(null,event,el,v));
}));
}));

(crate.binding.bound_collection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"notif","notif",-1551848296,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"stuff","stuff",-411032116,null)], null);
}));

(crate.binding.bound_collection.cljs$lang$type = true);

(crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection");

(crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"crate.binding/bound-collection");
}));

/**
 * Positional factory function for crate.binding/bound-collection.
 */
crate.binding.__GT_bound_collection = (function crate$binding$__GT_bound_collection(atm,notif,opts,stuff){
return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});

crate.binding.opt = (function crate$binding$opt(bc,k){
var fexpr__28596 = bc.opts;
return (fexpr__28596.cljs$core$IFn$_invoke$arity$1 ? fexpr__28596.cljs$core$IFn$_invoke$arity$1(k) : fexpr__28596.call(null,k));
});
crate.binding.bc_add = (function crate$binding$bc_add(bc,path,key){
var sa = crate.binding.subatom(bc.atm,path);
var elem = (function (){var fexpr__28603 = crate.binding.opt(bc,new cljs.core.Keyword(null,"as","as",1148689641));
return (fexpr__28603.cljs$core$IFn$_invoke$arity$1 ? fexpr__28603.cljs$core$IFn$_invoke$arity$1(sa) : fexpr__28603.call(null,sa));
})();
(bc.stuff = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"subatom","subatom",-95454370),sa], null)));

return crate.binding.notify(bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",235287739),elem,cljs.core.deref(sa)], null));
});
crate.binding.bc_remove = (function crate$binding$bc_remove(bc,key){
var notif = bc.notif;
var prev = (function (){var fexpr__28611 = bc.stuff;
return (fexpr__28611.cljs$core$IFn$_invoke$arity$1 ? fexpr__28611.cljs$core$IFn$_invoke$arity$1(key) : fexpr__28611.call(null,key));
})();
(bc.stuff = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bc.stuff,key));

crate.binding.notify(bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(prev),null], null));

return crate.binding.sub_destroy_BANG_(new cljs.core.Keyword(null,"subatom","subatom",-95454370).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function crate$binding$__GT_indexed(coll){
if(cljs.core.map_QMARK_(coll)){
return cljs.core.seq(coll);
} else {
if(cljs.core.set_QMARK_(coll)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.identity),coll);
} else {
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);

}
}
});
crate.binding.__GT_keyed = (function crate$binding$__GT_keyed(coll,keyfn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(keyfn,crate.binding.__GT_indexed(coll)));
});
crate.binding.__GT_path = (function crate$binding$__GT_path(var_args){
var args__5903__auto__ = [];
var len__5897__auto___28803 = arguments.length;
var i__5898__auto___28804 = (0);
while(true){
if((i__5898__auto___28804 < len__5897__auto___28803)){
args__5903__auto__.push((arguments[i__5898__auto___28804]));

var G__28806 = (i__5898__auto___28804 + (1));
i__5898__auto___28804 = G__28806;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic = (function (bc,segs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var or__5162__auto__ = crate.binding.opt(bc,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
}));

(crate.binding.__GT_path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(crate.binding.__GT_path.cljs$lang$applyTo = (function (seq28625){
var G__28626 = cljs.core.first(seq28625);
var seq28625__$1 = cljs.core.next(seq28625);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28626,seq28625__$1);
}));

crate.binding.bc_compare = (function crate$binding$bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(prev));
var nset = crate.binding.__GT_keyed(neue,crate.binding.opt(bc,new cljs.core.Keyword(null,"keyfn","keyfn",780060332)));
var added = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(nset,pset));
var removed = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(pset,nset));
var seq__28644_28807 = cljs.core.seq(added);
var chunk__28645_28808 = null;
var count__28646_28809 = (0);
var i__28647_28810 = (0);
while(true){
if((i__28647_28810 < count__28646_28809)){
var a_28812 = chunk__28645_28808.cljs$core$IIndexed$_nth$arity$2(null,i__28647_28810);
crate.binding.bc_add(bc,a_28812,a_28812);


var G__28813 = seq__28644_28807;
var G__28814 = chunk__28645_28808;
var G__28815 = count__28646_28809;
var G__28816 = (i__28647_28810 + (1));
seq__28644_28807 = G__28813;
chunk__28645_28808 = G__28814;
count__28646_28809 = G__28815;
i__28647_28810 = G__28816;
continue;
} else {
var temp__5825__auto___28817 = cljs.core.seq(seq__28644_28807);
if(temp__5825__auto___28817){
var seq__28644_28818__$1 = temp__5825__auto___28817;
if(cljs.core.chunked_seq_QMARK_(seq__28644_28818__$1)){
var c__5694__auto___28819 = cljs.core.chunk_first(seq__28644_28818__$1);
var G__28820 = cljs.core.chunk_rest(seq__28644_28818__$1);
var G__28821 = c__5694__auto___28819;
var G__28822 = cljs.core.count(c__5694__auto___28819);
var G__28823 = (0);
seq__28644_28807 = G__28820;
chunk__28645_28808 = G__28821;
count__28646_28809 = G__28822;
i__28647_28810 = G__28823;
continue;
} else {
var a_28825 = cljs.core.first(seq__28644_28818__$1);
crate.binding.bc_add(bc,a_28825,a_28825);


var G__28827 = cljs.core.next(seq__28644_28818__$1);
var G__28828 = null;
var G__28829 = (0);
var G__28830 = (0);
seq__28644_28807 = G__28827;
chunk__28645_28808 = G__28828;
count__28646_28809 = G__28829;
i__28647_28810 = G__28830;
continue;
}
} else {
}
}
break;
}

var seq__28649 = cljs.core.seq(removed);
var chunk__28650 = null;
var count__28651 = (0);
var i__28652 = (0);
while(true){
if((i__28652 < count__28651)){
var r = chunk__28650.cljs$core$IIndexed$_nth$arity$2(null,i__28652);
crate.binding.bc_remove(bc,r);


var G__28833 = seq__28649;
var G__28834 = chunk__28650;
var G__28835 = count__28651;
var G__28836 = (i__28652 + (1));
seq__28649 = G__28833;
chunk__28650 = G__28834;
count__28651 = G__28835;
i__28652 = G__28836;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28649);
if(temp__5825__auto__){
var seq__28649__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28649__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28649__$1);
var G__28837 = cljs.core.chunk_rest(seq__28649__$1);
var G__28838 = c__5694__auto__;
var G__28839 = cljs.core.count(c__5694__auto__);
var G__28840 = (0);
seq__28649 = G__28837;
chunk__28650 = G__28838;
count__28651 = G__28839;
i__28652 = G__28840;
continue;
} else {
var r = cljs.core.first(seq__28649__$1);
crate.binding.bc_remove(bc,r);


var G__28841 = cljs.core.next(seq__28649__$1);
var G__28842 = null;
var G__28843 = (0);
var G__28844 = (0);
seq__28649 = G__28841;
chunk__28650 = G__28842;
count__28651 = G__28843;
i__28652 = G__28844;
continue;
}
} else {
return null;
}
}
break;
}
});
crate.binding.bound_coll = (function crate$binding$bound_coll(var_args){
var args__5903__auto__ = [];
var len__5897__auto___28845 = arguments.length;
var i__5898__auto___28846 = (0);
while(true){
if((i__5898__auto___28846 < len__5897__auto___28845)){
args__5903__auto__.push((arguments[i__5898__auto___28846]));

var G__28848 = (i__5898__auto___28846 + (1));
i__5898__auto___28846 = G__28848;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__28658){
var vec__28659 = p__28658;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28659,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28659,(1),null);
var vec__28662 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28662,(0),null);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28662,(1),null);
var atm__$1 = ((cljs.core.not(path__$1))?atm:crate.binding.subatom(atm,path__$1));
var opts__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);
var opts__$3 = ((cljs.core.not(new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map()));
cljs.core.add_watch(atm__$1,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),(function (_,___$1,___$2,neue){
return crate.binding.bc_compare(bc,neue);
}));

crate.binding.bc_compare(bc,cljs.core.deref(atm__$1));

return bc;
}));

(crate.binding.bound_coll.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(crate.binding.bound_coll.cljs$lang$applyTo = (function (seq28655){
var G__28657 = cljs.core.first(seq28655);
var seq28655__$1 = cljs.core.next(seq28655);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28657,seq28655__$1);
}));

crate.binding.map_bound = (function crate$binding$map_bound(var_args){
var args__5903__auto__ = [];
var len__5897__auto___28855 = arguments.length;
var i__5898__auto___28858 = (0);
while(true){
if((i__5898__auto___28858 < len__5897__auto___28855)){
args__5903__auto__.push((arguments[i__5898__auto___28858]));

var G__28859 = (i__5898__auto___28858 + (1));
i__5898__auto___28858 = G__28859;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic = (function (as,atm,p__28685){
var vec__28686 = p__28685;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28686,(0),null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"as","as",1148689641),as);
var atm__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom(atm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)));
var opts__$2 = ((cljs.core.not(new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map()));
cljs.core.add_watch(atm__$1,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),(function (_,___$1,___$2,neue){
return crate.binding.bc_compare(bc,neue);
}));

crate.binding.bc_compare(bc,cljs.core.deref(atm__$1));

return bc;
}));

(crate.binding.map_bound.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(crate.binding.map_bound.cljs$lang$applyTo = (function (seq28680){
var G__28681 = cljs.core.first(seq28680);
var seq28680__$1 = cljs.core.next(seq28680);
var G__28682 = cljs.core.first(seq28680__$1);
var seq28680__$2 = cljs.core.next(seq28680__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28681,G__28682,seq28680__$2);
}));

crate.binding.binding_QMARK_ = (function crate$binding$binding_QMARK_(b){
if((!((b == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === b.crate$binding$bindable$)))){
return true;
} else {
if((!b.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable,b);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable,b);
}
});
crate.binding.binding_coll_QMARK_ = (function crate$binding$binding_coll_QMARK_(b){
if((!((b == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === b.crate$binding$bindable_coll$)))){
return true;
} else {
if((!b.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable_coll,b);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable_coll,b);
}
});
crate.binding.deref_QMARK_ = (function crate$binding$deref_QMARK_(atm){
if((!((atm == null)))){
if((((atm.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === atm.cljs$core$IDeref$)))){
return true;
} else {
if((!atm.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atm);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atm);
}
});
crate.binding.value = (function crate$binding$value(b){
return crate.binding._value(b);
});
crate.binding.index = (function crate$binding$index(sub_atom){
return cljs.core.last(sub_atom.path);
});
crate.binding.on_change = (function crate$binding$on_change(b,func){
return crate.binding._on_change(b,func);
});
crate.binding.bound = (function crate$binding$bound(var_args){
var args__5903__auto__ = [];
var len__5897__auto___28871 = arguments.length;
var i__5898__auto___28872 = (0);
while(true){
if((i__5898__auto___28872 < len__5897__auto___28871)){
args__5903__auto__.push((arguments[i__5898__auto___28872]));

var G__28875 = (i__5898__auto___28872 + (1));
i__5898__auto___28872 = G__28875;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__28704){
var vec__28705 = p__28704;
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28705,(0),null);
var func__$1 = (function (){var or__5162__auto__ = func;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.identity;
}
})();
return (new crate.binding.atom_binding(atm,func__$1));
}));

(crate.binding.bound.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(crate.binding.bound.cljs$lang$applyTo = (function (seq28702){
var G__28703 = cljs.core.first(seq28702);
var seq28702__$1 = cljs.core.next(seq28702);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28703,seq28702__$1);
}));


//# sourceMappingURL=crate.binding.js.map
