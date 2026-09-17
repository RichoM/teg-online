goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24899){
var map__24901 = p__24899;
var map__24901__$1 = cljs.core.__destructure_map(map__24901);
var m = map__24901__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24901__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24901__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24905_25310 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24907_25311 = null;
var count__24908_25312 = (0);
var i__24909_25313 = (0);
while(true){
if((i__24909_25313 < count__24908_25312)){
var f_25317 = chunk__24907_25311.cljs$core$IIndexed$_nth$arity$2(null,i__24909_25313);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25317], 0));


var G__25319 = seq__24905_25310;
var G__25320 = chunk__24907_25311;
var G__25321 = count__24908_25312;
var G__25322 = (i__24909_25313 + (1));
seq__24905_25310 = G__25319;
chunk__24907_25311 = G__25320;
count__24908_25312 = G__25321;
i__24909_25313 = G__25322;
continue;
} else {
var temp__5825__auto___25332 = cljs.core.seq(seq__24905_25310);
if(temp__5825__auto___25332){
var seq__24905_25335__$1 = temp__5825__auto___25332;
if(cljs.core.chunked_seq_QMARK_(seq__24905_25335__$1)){
var c__5694__auto___25337 = cljs.core.chunk_first(seq__24905_25335__$1);
var G__25341 = cljs.core.chunk_rest(seq__24905_25335__$1);
var G__25342 = c__5694__auto___25337;
var G__25343 = cljs.core.count(c__5694__auto___25337);
var G__25344 = (0);
seq__24905_25310 = G__25341;
chunk__24907_25311 = G__25342;
count__24908_25312 = G__25343;
i__24909_25313 = G__25344;
continue;
} else {
var f_25346 = cljs.core.first(seq__24905_25335__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25346], 0));


var G__25347 = cljs.core.next(seq__24905_25335__$1);
var G__25348 = null;
var G__25349 = (0);
var G__25350 = (0);
seq__24905_25310 = G__25347;
chunk__24907_25311 = G__25348;
count__24908_25312 = G__25349;
i__24909_25313 = G__25350;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25351 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_25351], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_25351)))?cljs.core.second(arglists_25351):arglists_25351)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24935_25360 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24936_25361 = null;
var count__24937_25362 = (0);
var i__24938_25363 = (0);
while(true){
if((i__24938_25363 < count__24937_25362)){
var vec__24968_25364 = chunk__24936_25361.cljs$core$IIndexed$_nth$arity$2(null,i__24938_25363);
var name_25365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24968_25364,(0),null);
var map__24971_25366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24968_25364,(1),null);
var map__24971_25367__$1 = cljs.core.__destructure_map(map__24971_25366);
var doc_25368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24971_25367__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24971_25367__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25365], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25369], 0));

if(cljs.core.truth_(doc_25368)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25368], 0));
} else {
}


var G__25373 = seq__24935_25360;
var G__25374 = chunk__24936_25361;
var G__25375 = count__24937_25362;
var G__25376 = (i__24938_25363 + (1));
seq__24935_25360 = G__25373;
chunk__24936_25361 = G__25374;
count__24937_25362 = G__25375;
i__24938_25363 = G__25376;
continue;
} else {
var temp__5825__auto___25377 = cljs.core.seq(seq__24935_25360);
if(temp__5825__auto___25377){
var seq__24935_25378__$1 = temp__5825__auto___25377;
if(cljs.core.chunked_seq_QMARK_(seq__24935_25378__$1)){
var c__5694__auto___25379 = cljs.core.chunk_first(seq__24935_25378__$1);
var G__25380 = cljs.core.chunk_rest(seq__24935_25378__$1);
var G__25381 = c__5694__auto___25379;
var G__25382 = cljs.core.count(c__5694__auto___25379);
var G__25383 = (0);
seq__24935_25360 = G__25380;
chunk__24936_25361 = G__25381;
count__24937_25362 = G__25382;
i__24938_25363 = G__25383;
continue;
} else {
var vec__24980_25384 = cljs.core.first(seq__24935_25378__$1);
var name_25385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24980_25384,(0),null);
var map__24983_25386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24980_25384,(1),null);
var map__24983_25387__$1 = cljs.core.__destructure_map(map__24983_25386);
var doc_25388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24983_25387__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24983_25387__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25385], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25389], 0));

if(cljs.core.truth_(doc_25388)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25388], 0));
} else {
}


var G__25392 = cljs.core.next(seq__24935_25378__$1);
var G__25393 = null;
var G__25394 = (0);
var G__25395 = (0);
seq__24935_25360 = G__25392;
chunk__24936_25361 = G__25393;
count__24937_25362 = G__25394;
i__24938_25363 = G__25395;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__24995 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24996 = null;
var count__24997 = (0);
var i__24998 = (0);
while(true){
if((i__24998 < count__24997)){
var role = chunk__24996.cljs$core$IIndexed$_nth$arity$2(null,i__24998);
var temp__5825__auto___25399__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___25399__$1)){
var spec_25400 = temp__5825__auto___25399__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_25400)], 0));
} else {
}


var G__25401 = seq__24995;
var G__25402 = chunk__24996;
var G__25403 = count__24997;
var G__25404 = (i__24998 + (1));
seq__24995 = G__25401;
chunk__24996 = G__25402;
count__24997 = G__25403;
i__24998 = G__25404;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__24995);
if(temp__5825__auto____$1){
var seq__24995__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24995__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__24995__$1);
var G__25407 = cljs.core.chunk_rest(seq__24995__$1);
var G__25408 = c__5694__auto__;
var G__25409 = cljs.core.count(c__5694__auto__);
var G__25410 = (0);
seq__24995 = G__25407;
chunk__24996 = G__25408;
count__24997 = G__25409;
i__24998 = G__25410;
continue;
} else {
var role = cljs.core.first(seq__24995__$1);
var temp__5825__auto___25412__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___25412__$2)){
var spec_25413 = temp__5825__auto___25412__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_25413)], 0));
} else {
}


var G__25414 = cljs.core.next(seq__24995__$1);
var G__25415 = null;
var G__25416 = (0);
var G__25417 = (0);
seq__24995 = G__25414;
chunk__24996 = G__25415;
count__24997 = G__25416;
i__24998 = G__25417;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__25048 = datafied_throwable;
var map__25048__$1 = cljs.core.__destructure_map(map__25048);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25048__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25048__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25048__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__25050 = cljs.core.last(via);
var map__25050__$1 = cljs.core.__destructure_map(map__25050);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25050__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25050__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25050__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__25051 = data;
var map__25051__$1 = cljs.core.__destructure_map(map__25051);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25051__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25051__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25051__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__25052 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__25052__$1 = cljs.core.__destructure_map(map__25052);
var top_data = map__25052__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25052__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__25057 = phase;
var G__25057__$1 = (((G__25057 instanceof cljs.core.Keyword))?G__25057.fqn:null);
switch (G__25057__$1) {
case "read-source":
var map__25060 = data;
var map__25060__$1 = cljs.core.__destructure_map(map__25060);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25060__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25060__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__25064 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__25064__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25064,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25064);
var G__25064__$2 = (cljs.core.truth_((function (){var fexpr__25065 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25065.cljs$core$IFn$_invoke$arity$1 ? fexpr__25065.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25065.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25064__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25064__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25064__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25064__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25066 = top_data;
var G__25066__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25066,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25066);
var G__25066__$2 = (cljs.core.truth_((function (){var fexpr__25068 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25068.cljs$core$IFn$_invoke$arity$1 ? fexpr__25068.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25068.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25066__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25066__$1);
var G__25066__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25066__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25066__$2);
var G__25066__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25066__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25066__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25066__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25066__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__25074 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25074,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25074,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25074,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25074,(3),null);
var G__25080 = top_data;
var G__25080__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25080,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__25080);
var G__25080__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25080__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__25080__$1);
var G__25080__$3 = (cljs.core.truth_((function (){var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25080__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__25080__$2);
var G__25080__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25080__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25080__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25080__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25080__$4;
}

break;
case "execution":
var vec__25092 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25092,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25092,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25092,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25092,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25045_SHARP_){
var or__5162__auto__ = (p1__25045_SHARP_ == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var fexpr__25104 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25104.cljs$core$IFn$_invoke$arity$1 ? fexpr__25104.cljs$core$IFn$_invoke$arity$1(p1__25045_SHARP_) : fexpr__25104.call(null,p1__25045_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return line;
}
})();
var G__25106 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__25106__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25106,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__25106);
var G__25106__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25106__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25106__$1);
var G__25106__$3 = (cljs.core.truth_((function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25106__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25106__$2);
var G__25106__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25106__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__25106__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25106__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25106__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25057__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25156){
var map__25162 = p__25156;
var map__25162__$1 = cljs.core.__destructure_map(map__25162);
var triage_data = map__25162__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25162__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25162__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25162__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25162__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25162__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25162__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25162__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25162__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = source;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = line;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5162__auto__ = class$;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__25191 = phase;
var G__25191__$1 = (((G__25191 instanceof cljs.core.Keyword))?G__25191.fqn:null);
switch (G__25191__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__25199 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__25200 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__25201 = loc;
var G__25202 = (cljs.core.truth_(spec)?(function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25204_25500 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25205_25501 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25206_25502 = true;
var _STAR_print_fn_STAR__temp_val__25207_25503 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25206_25502);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25207_25503);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25126_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25126_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25205_25501);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25204_25500);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25199,G__25200,G__25201,G__25202) : format.call(null,G__25199,G__25200,G__25201,G__25202));

break;
case "macroexpansion":
var G__25223 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__25224 = cause_type;
var G__25225 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__25227 = loc;
var G__25228 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25223,G__25224,G__25225,G__25227,G__25228) : format.call(null,G__25223,G__25224,G__25225,G__25227,G__25228));

break;
case "compile-syntax-check":
var G__25238 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__25239 = cause_type;
var G__25240 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__25241 = loc;
var G__25242 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25238,G__25239,G__25240,G__25241,G__25242) : format.call(null,G__25238,G__25239,G__25240,G__25241,G__25242));

break;
case "compilation":
var G__25245 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__25246 = cause_type;
var G__25247 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__25248 = loc;
var G__25249 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25245,G__25246,G__25247,G__25248,G__25249) : format.call(null,G__25245,G__25246,G__25247,G__25248,G__25249));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__25262 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__25263 = symbol;
var G__25264 = loc;
var G__25265 = (function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25266_25536 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25267_25537 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25268_25538 = true;
var _STAR_print_fn_STAR__temp_val__25269_25539 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25268_25538);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25269_25539);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25143_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25143_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25267_25537);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25266_25536);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25262,G__25263,G__25264,G__25265) : format.call(null,G__25262,G__25263,G__25264,G__25265));
} else {
var G__25283 = "Execution error%s at %s(%s).\n%s\n";
var G__25284 = cause_type;
var G__25285 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__25286 = loc;
var G__25287 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25283,G__25284,G__25285,G__25286,G__25287) : format.call(null,G__25283,G__25284,G__25285,G__25286,G__25287));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25191__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
