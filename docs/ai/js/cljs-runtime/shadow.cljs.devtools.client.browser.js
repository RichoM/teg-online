goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___30340 = arguments.length;
var i__5898__auto___30341 = (0);
while(true){
if((i__5898__auto___30341 < len__5897__auto___30340)){
args__5903__auto__.push((arguments[i__5898__auto___30341]));

var G__30342 = (i__5898__auto___30341 + (1));
i__5898__auto___30341 = G__30342;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq29069){
var G__29070 = cljs.core.first(seq29069);
var seq29069__$1 = cljs.core.next(seq29069);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29070,seq29069__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__29097 = cljs.core.seq(sources);
var chunk__29098 = null;
var count__29099 = (0);
var i__29100 = (0);
while(true){
if((i__29100 < count__29099)){
var map__29118 = chunk__29098.cljs$core$IIndexed$_nth$arity$2(null,i__29100);
var map__29118__$1 = cljs.core.__destructure_map(map__29118);
var src = map__29118__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29118__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29118__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29118__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29118__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e29123){var e_30347 = e29123;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_30347);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_30347.message))));
}

var G__30349 = seq__29097;
var G__30350 = chunk__29098;
var G__30351 = count__29099;
var G__30352 = (i__29100 + (1));
seq__29097 = G__30349;
chunk__29098 = G__30350;
count__29099 = G__30351;
i__29100 = G__30352;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29097);
if(temp__5825__auto__){
var seq__29097__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29097__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__29097__$1);
var G__30353 = cljs.core.chunk_rest(seq__29097__$1);
var G__30354 = c__5694__auto__;
var G__30355 = cljs.core.count(c__5694__auto__);
var G__30356 = (0);
seq__29097 = G__30353;
chunk__29098 = G__30354;
count__29099 = G__30355;
i__29100 = G__30356;
continue;
} else {
var map__29127 = cljs.core.first(seq__29097__$1);
var map__29127__$1 = cljs.core.__destructure_map(map__29127);
var src = map__29127__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29127__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29127__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29127__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29127__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e29128){var e_30357 = e29128;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_30357);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_30357.message))));
}

var G__30359 = cljs.core.next(seq__29097__$1);
var G__30360 = null;
var G__30361 = (0);
var G__30362 = (0);
seq__29097 = G__30359;
chunk__29098 = G__30360;
count__29099 = G__30361;
i__29100 = G__30362;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__29136 = cljs.core.seq(js_requires);
var chunk__29137 = null;
var count__29138 = (0);
var i__29139 = (0);
while(true){
if((i__29139 < count__29138)){
var js_ns = chunk__29137.cljs$core$IIndexed$_nth$arity$2(null,i__29139);
var require_str_30368 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_30368);


var G__30370 = seq__29136;
var G__30371 = chunk__29137;
var G__30372 = count__29138;
var G__30373 = (i__29139 + (1));
seq__29136 = G__30370;
chunk__29137 = G__30371;
count__29138 = G__30372;
i__29139 = G__30373;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29136);
if(temp__5825__auto__){
var seq__29136__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29136__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__29136__$1);
var G__30376 = cljs.core.chunk_rest(seq__29136__$1);
var G__30377 = c__5694__auto__;
var G__30378 = cljs.core.count(c__5694__auto__);
var G__30379 = (0);
seq__29136 = G__30376;
chunk__29137 = G__30377;
count__29138 = G__30378;
i__29139 = G__30379;
continue;
} else {
var js_ns = cljs.core.first(seq__29136__$1);
var require_str_30381 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_30381);


var G__30382 = cljs.core.next(seq__29136__$1);
var G__30383 = null;
var G__30384 = (0);
var G__30385 = (0);
seq__29136 = G__30382;
chunk__29137 = G__30383;
count__29138 = G__30384;
i__29139 = G__30385;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__29175){
var map__29176 = p__29175;
var map__29176__$1 = cljs.core.__destructure_map(map__29176);
var msg = map__29176__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29176__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29176__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29194(s__29195){
return (new cljs.core.LazySeq(null,(function (){
var s__29195__$1 = s__29195;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__29195__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__29203 = cljs.core.first(xs__6385__auto__);
var map__29203__$1 = cljs.core.__destructure_map(map__29203);
var src = map__29203__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29203__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29203__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__29195__$1,map__29203,map__29203__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__29176,map__29176__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29194_$_iter__29196(s__29197){
return (new cljs.core.LazySeq(null,((function (s__29195__$1,map__29203,map__29203__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__29176,map__29176__$1,msg,info,reload_info){
return (function (){
var s__29197__$1 = s__29197;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__29197__$1);
if(temp__5825__auto____$1){
var s__29197__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29197__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__29197__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__29199 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__29198 = (0);
while(true){
if((i__29198 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__29198);
cljs.core.chunk_append(b__29199,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__30408 = (i__29198 + (1));
i__29198 = G__30408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29199),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29194_$_iter__29196(cljs.core.chunk_rest(s__29197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29199),null);
}
} else {
var warning = cljs.core.first(s__29197__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29194_$_iter__29196(cljs.core.rest(s__29197__$2)));
}
} else {
return null;
}
break;
}
});})(s__29195__$1,map__29203,map__29203__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__29176,map__29176__$1,msg,info,reload_info))
,null,null));
});})(s__29195__$1,map__29203,map__29203__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__29176,map__29176__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29194(cljs.core.rest(s__29195__$1)));
} else {
var G__30409 = cljs.core.rest(s__29195__$1);
s__29195__$1 = G__30409;
continue;
}
} else {
var G__30410 = cljs.core.rest(s__29195__$1);
s__29195__$1 = G__30410;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__29228_30411 = cljs.core.seq(warnings);
var chunk__29229_30412 = null;
var count__29230_30413 = (0);
var i__29231_30414 = (0);
while(true){
if((i__29231_30414 < count__29230_30413)){
var map__29244_30415 = chunk__29229_30412.cljs$core$IIndexed$_nth$arity$2(null,i__29231_30414);
var map__29244_30416__$1 = cljs.core.__destructure_map(map__29244_30415);
var w_30417 = map__29244_30416__$1;
var msg_30418__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29244_30416__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_30419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29244_30416__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_30420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29244_30416__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_30421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29244_30416__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_30421)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_30419)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_30420)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_30418__$1)));


var G__30425 = seq__29228_30411;
var G__30426 = chunk__29229_30412;
var G__30427 = count__29230_30413;
var G__30428 = (i__29231_30414 + (1));
seq__29228_30411 = G__30425;
chunk__29229_30412 = G__30426;
count__29230_30413 = G__30427;
i__29231_30414 = G__30428;
continue;
} else {
var temp__5825__auto___30429 = cljs.core.seq(seq__29228_30411);
if(temp__5825__auto___30429){
var seq__29228_30430__$1 = temp__5825__auto___30429;
if(cljs.core.chunked_seq_QMARK_(seq__29228_30430__$1)){
var c__5694__auto___30431 = cljs.core.chunk_first(seq__29228_30430__$1);
var G__30433 = cljs.core.chunk_rest(seq__29228_30430__$1);
var G__30434 = c__5694__auto___30431;
var G__30435 = cljs.core.count(c__5694__auto___30431);
var G__30436 = (0);
seq__29228_30411 = G__30433;
chunk__29229_30412 = G__30434;
count__29230_30413 = G__30435;
i__29231_30414 = G__30436;
continue;
} else {
var map__29256_30438 = cljs.core.first(seq__29228_30430__$1);
var map__29256_30439__$1 = cljs.core.__destructure_map(map__29256_30438);
var w_30440 = map__29256_30439__$1;
var msg_30441__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29256_30439__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_30442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29256_30439__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_30443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29256_30439__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_30444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29256_30439__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_30444)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_30442)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_30443)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_30441__$1)));


var G__30446 = cljs.core.next(seq__29228_30430__$1);
var G__30447 = null;
var G__30448 = (0);
var G__30449 = (0);
seq__29228_30411 = G__30446;
chunk__29229_30412 = G__30447;
count__29230_30413 = G__30448;
i__29231_30414 = G__30449;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__29164_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__29164_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5160__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5160__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29268 = node_uri;
G__29268.setQuery(null);

G__29268.setPath(new$);

return G__29268;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__29277){
var map__29285 = p__29277;
var map__29285__$1 = cljs.core.__destructure_map(map__29285);
var msg = map__29285__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29285__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29285__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__29287 = cljs.core.seq(updates);
var chunk__29289 = null;
var count__29290 = (0);
var i__29291 = (0);
while(true){
if((i__29291 < count__29290)){
var path = chunk__29289.cljs$core$IIndexed$_nth$arity$2(null,i__29291);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__29829_30466 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__29833_30467 = null;
var count__29834_30468 = (0);
var i__29835_30469 = (0);
while(true){
if((i__29835_30469 < count__29834_30468)){
var node_30471 = chunk__29833_30467.cljs$core$IIndexed$_nth$arity$2(null,i__29835_30469);
if(cljs.core.not(node_30471.shadow$old)){
var path_match_30472 = shadow.cljs.devtools.client.browser.match_paths(node_30471.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30472)){
var new_link_30473 = (function (){var G__29925 = node_30471.cloneNode(true);
G__29925.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30472)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__29925;
})();
(node_30471.shadow$old = true);

(new_link_30473.onload = ((function (seq__29829_30466,chunk__29833_30467,count__29834_30468,i__29835_30469,seq__29287,chunk__29289,count__29290,i__29291,new_link_30473,path_match_30472,node_30471,path,map__29285,map__29285__$1,msg,updates,reload_info){
return (function (e){
var seq__29926_30478 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__29928_30479 = null;
var count__29929_30480 = (0);
var i__29930_30481 = (0);
while(true){
if((i__29930_30481 < count__29929_30480)){
var map__29947_30485 = chunk__29928_30479.cljs$core$IIndexed$_nth$arity$2(null,i__29930_30481);
var map__29947_30486__$1 = cljs.core.__destructure_map(map__29947_30485);
var task_30487 = map__29947_30486__$1;
var fn_str_30488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29947_30486__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29947_30486__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30491 = goog.getObjectByName(fn_str_30488,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30489)));

(fn_obj_30491.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30491.cljs$core$IFn$_invoke$arity$2(path,new_link_30473) : fn_obj_30491.call(null,path,new_link_30473));


var G__30493 = seq__29926_30478;
var G__30494 = chunk__29928_30479;
var G__30495 = count__29929_30480;
var G__30496 = (i__29930_30481 + (1));
seq__29926_30478 = G__30493;
chunk__29928_30479 = G__30494;
count__29929_30480 = G__30495;
i__29930_30481 = G__30496;
continue;
} else {
var temp__5825__auto___30497 = cljs.core.seq(seq__29926_30478);
if(temp__5825__auto___30497){
var seq__29926_30500__$1 = temp__5825__auto___30497;
if(cljs.core.chunked_seq_QMARK_(seq__29926_30500__$1)){
var c__5694__auto___30501 = cljs.core.chunk_first(seq__29926_30500__$1);
var G__30502 = cljs.core.chunk_rest(seq__29926_30500__$1);
var G__30503 = c__5694__auto___30501;
var G__30504 = cljs.core.count(c__5694__auto___30501);
var G__30505 = (0);
seq__29926_30478 = G__30502;
chunk__29928_30479 = G__30503;
count__29929_30480 = G__30504;
i__29930_30481 = G__30505;
continue;
} else {
var map__29954_30506 = cljs.core.first(seq__29926_30500__$1);
var map__29954_30507__$1 = cljs.core.__destructure_map(map__29954_30506);
var task_30508 = map__29954_30507__$1;
var fn_str_30509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29954_30507__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29954_30507__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30511 = goog.getObjectByName(fn_str_30509,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30510)));

(fn_obj_30511.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30511.cljs$core$IFn$_invoke$arity$2(path,new_link_30473) : fn_obj_30511.call(null,path,new_link_30473));


var G__30515 = cljs.core.next(seq__29926_30500__$1);
var G__30516 = null;
var G__30517 = (0);
var G__30518 = (0);
seq__29926_30478 = G__30515;
chunk__29928_30479 = G__30516;
count__29929_30480 = G__30517;
i__29930_30481 = G__30518;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_30471);
});})(seq__29829_30466,chunk__29833_30467,count__29834_30468,i__29835_30469,seq__29287,chunk__29289,count__29290,i__29291,new_link_30473,path_match_30472,node_30471,path,map__29285,map__29285__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30472], 0));

goog.dom.insertSiblingAfter(new_link_30473,node_30471);


var G__30522 = seq__29829_30466;
var G__30523 = chunk__29833_30467;
var G__30524 = count__29834_30468;
var G__30525 = (i__29835_30469 + (1));
seq__29829_30466 = G__30522;
chunk__29833_30467 = G__30523;
count__29834_30468 = G__30524;
i__29835_30469 = G__30525;
continue;
} else {
var G__30526 = seq__29829_30466;
var G__30527 = chunk__29833_30467;
var G__30528 = count__29834_30468;
var G__30529 = (i__29835_30469 + (1));
seq__29829_30466 = G__30526;
chunk__29833_30467 = G__30527;
count__29834_30468 = G__30528;
i__29835_30469 = G__30529;
continue;
}
} else {
var G__30530 = seq__29829_30466;
var G__30531 = chunk__29833_30467;
var G__30532 = count__29834_30468;
var G__30533 = (i__29835_30469 + (1));
seq__29829_30466 = G__30530;
chunk__29833_30467 = G__30531;
count__29834_30468 = G__30532;
i__29835_30469 = G__30533;
continue;
}
} else {
var temp__5825__auto___30534 = cljs.core.seq(seq__29829_30466);
if(temp__5825__auto___30534){
var seq__29829_30535__$1 = temp__5825__auto___30534;
if(cljs.core.chunked_seq_QMARK_(seq__29829_30535__$1)){
var c__5694__auto___30537 = cljs.core.chunk_first(seq__29829_30535__$1);
var G__30538 = cljs.core.chunk_rest(seq__29829_30535__$1);
var G__30539 = c__5694__auto___30537;
var G__30540 = cljs.core.count(c__5694__auto___30537);
var G__30541 = (0);
seq__29829_30466 = G__30538;
chunk__29833_30467 = G__30539;
count__29834_30468 = G__30540;
i__29835_30469 = G__30541;
continue;
} else {
var node_30543 = cljs.core.first(seq__29829_30535__$1);
if(cljs.core.not(node_30543.shadow$old)){
var path_match_30544 = shadow.cljs.devtools.client.browser.match_paths(node_30543.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30544)){
var new_link_30547 = (function (){var G__29969 = node_30543.cloneNode(true);
G__29969.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30544)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__29969;
})();
(node_30543.shadow$old = true);

(new_link_30547.onload = ((function (seq__29829_30466,chunk__29833_30467,count__29834_30468,i__29835_30469,seq__29287,chunk__29289,count__29290,i__29291,new_link_30547,path_match_30544,node_30543,seq__29829_30535__$1,temp__5825__auto___30534,path,map__29285,map__29285__$1,msg,updates,reload_info){
return (function (e){
var seq__29972_30548 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__29974_30549 = null;
var count__29975_30550 = (0);
var i__29976_30551 = (0);
while(true){
if((i__29976_30551 < count__29975_30550)){
var map__29993_30553 = chunk__29974_30549.cljs$core$IIndexed$_nth$arity$2(null,i__29976_30551);
var map__29993_30554__$1 = cljs.core.__destructure_map(map__29993_30553);
var task_30555 = map__29993_30554__$1;
var fn_str_30556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29993_30554__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29993_30554__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30561 = goog.getObjectByName(fn_str_30556,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30557)));

(fn_obj_30561.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30561.cljs$core$IFn$_invoke$arity$2(path,new_link_30547) : fn_obj_30561.call(null,path,new_link_30547));


var G__30562 = seq__29972_30548;
var G__30563 = chunk__29974_30549;
var G__30564 = count__29975_30550;
var G__30565 = (i__29976_30551 + (1));
seq__29972_30548 = G__30562;
chunk__29974_30549 = G__30563;
count__29975_30550 = G__30564;
i__29976_30551 = G__30565;
continue;
} else {
var temp__5825__auto___30567__$1 = cljs.core.seq(seq__29972_30548);
if(temp__5825__auto___30567__$1){
var seq__29972_30568__$1 = temp__5825__auto___30567__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29972_30568__$1)){
var c__5694__auto___30570 = cljs.core.chunk_first(seq__29972_30568__$1);
var G__30571 = cljs.core.chunk_rest(seq__29972_30568__$1);
var G__30572 = c__5694__auto___30570;
var G__30573 = cljs.core.count(c__5694__auto___30570);
var G__30574 = (0);
seq__29972_30548 = G__30571;
chunk__29974_30549 = G__30572;
count__29975_30550 = G__30573;
i__29976_30551 = G__30574;
continue;
} else {
var map__30004_30579 = cljs.core.first(seq__29972_30568__$1);
var map__30004_30580__$1 = cljs.core.__destructure_map(map__30004_30579);
var task_30581 = map__30004_30580__$1;
var fn_str_30582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004_30580__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004_30580__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30584 = goog.getObjectByName(fn_str_30582,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30583)));

(fn_obj_30584.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30584.cljs$core$IFn$_invoke$arity$2(path,new_link_30547) : fn_obj_30584.call(null,path,new_link_30547));


var G__30585 = cljs.core.next(seq__29972_30568__$1);
var G__30586 = null;
var G__30587 = (0);
var G__30588 = (0);
seq__29972_30548 = G__30585;
chunk__29974_30549 = G__30586;
count__29975_30550 = G__30587;
i__29976_30551 = G__30588;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_30543);
});})(seq__29829_30466,chunk__29833_30467,count__29834_30468,i__29835_30469,seq__29287,chunk__29289,count__29290,i__29291,new_link_30547,path_match_30544,node_30543,seq__29829_30535__$1,temp__5825__auto___30534,path,map__29285,map__29285__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30544], 0));

goog.dom.insertSiblingAfter(new_link_30547,node_30543);


var G__30591 = cljs.core.next(seq__29829_30535__$1);
var G__30592 = null;
var G__30593 = (0);
var G__30594 = (0);
seq__29829_30466 = G__30591;
chunk__29833_30467 = G__30592;
count__29834_30468 = G__30593;
i__29835_30469 = G__30594;
continue;
} else {
var G__30595 = cljs.core.next(seq__29829_30535__$1);
var G__30596 = null;
var G__30597 = (0);
var G__30598 = (0);
seq__29829_30466 = G__30595;
chunk__29833_30467 = G__30596;
count__29834_30468 = G__30597;
i__29835_30469 = G__30598;
continue;
}
} else {
var G__30599 = cljs.core.next(seq__29829_30535__$1);
var G__30600 = null;
var G__30601 = (0);
var G__30602 = (0);
seq__29829_30466 = G__30599;
chunk__29833_30467 = G__30600;
count__29834_30468 = G__30601;
i__29835_30469 = G__30602;
continue;
}
}
} else {
}
}
break;
}


var G__30604 = seq__29287;
var G__30605 = chunk__29289;
var G__30606 = count__29290;
var G__30607 = (i__29291 + (1));
seq__29287 = G__30604;
chunk__29289 = G__30605;
count__29290 = G__30606;
i__29291 = G__30607;
continue;
} else {
var G__30608 = seq__29287;
var G__30609 = chunk__29289;
var G__30610 = count__29290;
var G__30611 = (i__29291 + (1));
seq__29287 = G__30608;
chunk__29289 = G__30609;
count__29290 = G__30610;
i__29291 = G__30611;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29287);
if(temp__5825__auto__){
var seq__29287__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29287__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__29287__$1);
var G__30612 = cljs.core.chunk_rest(seq__29287__$1);
var G__30613 = c__5694__auto__;
var G__30614 = cljs.core.count(c__5694__auto__);
var G__30615 = (0);
seq__29287 = G__30612;
chunk__29289 = G__30613;
count__29290 = G__30614;
i__29291 = G__30615;
continue;
} else {
var path = cljs.core.first(seq__29287__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__30040_30616 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__30044_30617 = null;
var count__30045_30618 = (0);
var i__30046_30619 = (0);
while(true){
if((i__30046_30619 < count__30045_30618)){
var node_30622 = chunk__30044_30617.cljs$core$IIndexed$_nth$arity$2(null,i__30046_30619);
if(cljs.core.not(node_30622.shadow$old)){
var path_match_30623 = shadow.cljs.devtools.client.browser.match_paths(node_30622.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30623)){
var new_link_30625 = (function (){var G__30186 = node_30622.cloneNode(true);
G__30186.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30623)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__30186;
})();
(node_30622.shadow$old = true);

(new_link_30625.onload = ((function (seq__30040_30616,chunk__30044_30617,count__30045_30618,i__30046_30619,seq__29287,chunk__29289,count__29290,i__29291,new_link_30625,path_match_30623,node_30622,path,seq__29287__$1,temp__5825__auto__,map__29285,map__29285__$1,msg,updates,reload_info){
return (function (e){
var seq__30190_30626 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__30192_30627 = null;
var count__30193_30628 = (0);
var i__30194_30629 = (0);
while(true){
if((i__30194_30629 < count__30193_30628)){
var map__30205_30630 = chunk__30192_30627.cljs$core$IIndexed$_nth$arity$2(null,i__30194_30629);
var map__30205_30631__$1 = cljs.core.__destructure_map(map__30205_30630);
var task_30632 = map__30205_30631__$1;
var fn_str_30633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30205_30631__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30205_30631__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30635 = goog.getObjectByName(fn_str_30633,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30634)));

(fn_obj_30635.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30635.cljs$core$IFn$_invoke$arity$2(path,new_link_30625) : fn_obj_30635.call(null,path,new_link_30625));


var G__30636 = seq__30190_30626;
var G__30637 = chunk__30192_30627;
var G__30638 = count__30193_30628;
var G__30639 = (i__30194_30629 + (1));
seq__30190_30626 = G__30636;
chunk__30192_30627 = G__30637;
count__30193_30628 = G__30638;
i__30194_30629 = G__30639;
continue;
} else {
var temp__5825__auto___30640__$1 = cljs.core.seq(seq__30190_30626);
if(temp__5825__auto___30640__$1){
var seq__30190_30641__$1 = temp__5825__auto___30640__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30190_30641__$1)){
var c__5694__auto___30642 = cljs.core.chunk_first(seq__30190_30641__$1);
var G__30643 = cljs.core.chunk_rest(seq__30190_30641__$1);
var G__30644 = c__5694__auto___30642;
var G__30645 = cljs.core.count(c__5694__auto___30642);
var G__30646 = (0);
seq__30190_30626 = G__30643;
chunk__30192_30627 = G__30644;
count__30193_30628 = G__30645;
i__30194_30629 = G__30646;
continue;
} else {
var map__30206_30647 = cljs.core.first(seq__30190_30641__$1);
var map__30206_30648__$1 = cljs.core.__destructure_map(map__30206_30647);
var task_30649 = map__30206_30648__$1;
var fn_str_30650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30206_30648__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30206_30648__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30659 = goog.getObjectByName(fn_str_30650,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30651)));

(fn_obj_30659.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30659.cljs$core$IFn$_invoke$arity$2(path,new_link_30625) : fn_obj_30659.call(null,path,new_link_30625));


var G__30664 = cljs.core.next(seq__30190_30641__$1);
var G__30665 = null;
var G__30666 = (0);
var G__30667 = (0);
seq__30190_30626 = G__30664;
chunk__30192_30627 = G__30665;
count__30193_30628 = G__30666;
i__30194_30629 = G__30667;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_30622);
});})(seq__30040_30616,chunk__30044_30617,count__30045_30618,i__30046_30619,seq__29287,chunk__29289,count__29290,i__29291,new_link_30625,path_match_30623,node_30622,path,seq__29287__$1,temp__5825__auto__,map__29285,map__29285__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30623], 0));

goog.dom.insertSiblingAfter(new_link_30625,node_30622);


var G__30674 = seq__30040_30616;
var G__30675 = chunk__30044_30617;
var G__30676 = count__30045_30618;
var G__30677 = (i__30046_30619 + (1));
seq__30040_30616 = G__30674;
chunk__30044_30617 = G__30675;
count__30045_30618 = G__30676;
i__30046_30619 = G__30677;
continue;
} else {
var G__30679 = seq__30040_30616;
var G__30680 = chunk__30044_30617;
var G__30681 = count__30045_30618;
var G__30682 = (i__30046_30619 + (1));
seq__30040_30616 = G__30679;
chunk__30044_30617 = G__30680;
count__30045_30618 = G__30681;
i__30046_30619 = G__30682;
continue;
}
} else {
var G__30684 = seq__30040_30616;
var G__30685 = chunk__30044_30617;
var G__30686 = count__30045_30618;
var G__30687 = (i__30046_30619 + (1));
seq__30040_30616 = G__30684;
chunk__30044_30617 = G__30685;
count__30045_30618 = G__30686;
i__30046_30619 = G__30687;
continue;
}
} else {
var temp__5825__auto___30693__$1 = cljs.core.seq(seq__30040_30616);
if(temp__5825__auto___30693__$1){
var seq__30040_30697__$1 = temp__5825__auto___30693__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30040_30697__$1)){
var c__5694__auto___30698 = cljs.core.chunk_first(seq__30040_30697__$1);
var G__30700 = cljs.core.chunk_rest(seq__30040_30697__$1);
var G__30701 = c__5694__auto___30698;
var G__30702 = cljs.core.count(c__5694__auto___30698);
var G__30703 = (0);
seq__30040_30616 = G__30700;
chunk__30044_30617 = G__30701;
count__30045_30618 = G__30702;
i__30046_30619 = G__30703;
continue;
} else {
var node_30706 = cljs.core.first(seq__30040_30697__$1);
if(cljs.core.not(node_30706.shadow$old)){
var path_match_30707 = shadow.cljs.devtools.client.browser.match_paths(node_30706.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30707)){
var new_link_30712 = (function (){var G__30208 = node_30706.cloneNode(true);
G__30208.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30707)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__30208;
})();
(node_30706.shadow$old = true);

(new_link_30712.onload = ((function (seq__30040_30616,chunk__30044_30617,count__30045_30618,i__30046_30619,seq__29287,chunk__29289,count__29290,i__29291,new_link_30712,path_match_30707,node_30706,seq__30040_30697__$1,temp__5825__auto___30693__$1,path,seq__29287__$1,temp__5825__auto__,map__29285,map__29285__$1,msg,updates,reload_info){
return (function (e){
var seq__30210_30715 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__30212_30716 = null;
var count__30213_30717 = (0);
var i__30214_30718 = (0);
while(true){
if((i__30214_30718 < count__30213_30717)){
var map__30220_30721 = chunk__30212_30716.cljs$core$IIndexed$_nth$arity$2(null,i__30214_30718);
var map__30220_30722__$1 = cljs.core.__destructure_map(map__30220_30721);
var task_30723 = map__30220_30722__$1;
var fn_str_30724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30220_30722__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30220_30722__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30726 = goog.getObjectByName(fn_str_30724,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30725)));

(fn_obj_30726.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30726.cljs$core$IFn$_invoke$arity$2(path,new_link_30712) : fn_obj_30726.call(null,path,new_link_30712));


var G__30727 = seq__30210_30715;
var G__30728 = chunk__30212_30716;
var G__30729 = count__30213_30717;
var G__30730 = (i__30214_30718 + (1));
seq__30210_30715 = G__30727;
chunk__30212_30716 = G__30728;
count__30213_30717 = G__30729;
i__30214_30718 = G__30730;
continue;
} else {
var temp__5825__auto___30732__$2 = cljs.core.seq(seq__30210_30715);
if(temp__5825__auto___30732__$2){
var seq__30210_30734__$1 = temp__5825__auto___30732__$2;
if(cljs.core.chunked_seq_QMARK_(seq__30210_30734__$1)){
var c__5694__auto___30735 = cljs.core.chunk_first(seq__30210_30734__$1);
var G__30738 = cljs.core.chunk_rest(seq__30210_30734__$1);
var G__30739 = c__5694__auto___30735;
var G__30740 = cljs.core.count(c__5694__auto___30735);
var G__30741 = (0);
seq__30210_30715 = G__30738;
chunk__30212_30716 = G__30739;
count__30213_30717 = G__30740;
i__30214_30718 = G__30741;
continue;
} else {
var map__30221_30742 = cljs.core.first(seq__30210_30734__$1);
var map__30221_30743__$1 = cljs.core.__destructure_map(map__30221_30742);
var task_30744 = map__30221_30743__$1;
var fn_str_30745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30221_30743__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_30746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30221_30743__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_30747 = goog.getObjectByName(fn_str_30745,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_30746)));

(fn_obj_30747.cljs$core$IFn$_invoke$arity$2 ? fn_obj_30747.cljs$core$IFn$_invoke$arity$2(path,new_link_30712) : fn_obj_30747.call(null,path,new_link_30712));


var G__30748 = cljs.core.next(seq__30210_30734__$1);
var G__30749 = null;
var G__30750 = (0);
var G__30751 = (0);
seq__30210_30715 = G__30748;
chunk__30212_30716 = G__30749;
count__30213_30717 = G__30750;
i__30214_30718 = G__30751;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_30706);
});})(seq__30040_30616,chunk__30044_30617,count__30045_30618,i__30046_30619,seq__29287,chunk__29289,count__29290,i__29291,new_link_30712,path_match_30707,node_30706,seq__30040_30697__$1,temp__5825__auto___30693__$1,path,seq__29287__$1,temp__5825__auto__,map__29285,map__29285__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30707], 0));

goog.dom.insertSiblingAfter(new_link_30712,node_30706);


var G__30754 = cljs.core.next(seq__30040_30697__$1);
var G__30755 = null;
var G__30756 = (0);
var G__30757 = (0);
seq__30040_30616 = G__30754;
chunk__30044_30617 = G__30755;
count__30045_30618 = G__30756;
i__30046_30619 = G__30757;
continue;
} else {
var G__30758 = cljs.core.next(seq__30040_30697__$1);
var G__30759 = null;
var G__30760 = (0);
var G__30761 = (0);
seq__30040_30616 = G__30758;
chunk__30044_30617 = G__30759;
count__30045_30618 = G__30760;
i__30046_30619 = G__30761;
continue;
}
} else {
var G__30763 = cljs.core.next(seq__30040_30697__$1);
var G__30764 = null;
var G__30765 = (0);
var G__30766 = (0);
seq__30040_30616 = G__30763;
chunk__30044_30617 = G__30764;
count__30045_30618 = G__30765;
i__30046_30619 = G__30766;
continue;
}
}
} else {
}
}
break;
}


var G__30768 = cljs.core.next(seq__29287__$1);
var G__30769 = null;
var G__30770 = (0);
var G__30771 = (0);
seq__29287 = G__30768;
chunk__29289 = G__30769;
count__29290 = G__30770;
i__29291 = G__30771;
continue;
} else {
var G__30772 = cljs.core.next(seq__29287__$1);
var G__30773 = null;
var G__30774 = (0);
var G__30775 = (0);
seq__29287 = G__30772;
chunk__29289 = G__30773;
count__29290 = G__30774;
i__29291 = G__30775;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__30259 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__30259) : success.call(null,G__30259));
}catch (e30258){var e = e30258;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__30262,success,fail){
var map__30263 = p__30262;
var map__30263__$1 = cljs.core.__destructure_map(map__30263);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30263__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__30267 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__30267) : success.call(null,G__30267));
}catch (e30266){var e = e30266;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__30270,done,error){
var map__30271 = p__30270;
var map__30271__$1 = cljs.core.__destructure_map(map__30271);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30271__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__30280,done,error){
var map__30281 = p__30280;
var map__30281__$1 = cljs.core.__destructure_map(map__30281);
var msg = map__30281__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30281__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30281__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30281__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__30283){
var map__30284 = p__30283;
var map__30284__$1 = cljs.core.__destructure_map(map__30284);
var src = map__30284__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30284__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__30286 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__30286) : done.call(null,G__30286));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__30292){
var map__30293 = p__30292;
var map__30293__$1 = cljs.core.__destructure_map(map__30293);
var msg__$1 = map__30293__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30293__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e30294){var ex = e30294;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__30297){
var map__30298 = p__30297;
var map__30298__$1 = cljs.core.__destructure_map(map__30298);
var env = map__30298__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30298__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__30315){
var map__30317 = p__30315;
var map__30317__$1 = cljs.core.__destructure_map(map__30317);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30317__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30317__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__30324){
var map__30325 = p__30324;
var map__30325__$1 = cljs.core.__destructure_map(map__30325);
var svc = map__30325__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30325__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
