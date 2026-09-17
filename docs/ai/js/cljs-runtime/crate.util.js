goog.provide('crate.util');
crate.util._STAR_base_url_STAR_ = null;
crate.util.as_str = (function crate$util$as_str(var_args){
var G__28198 = arguments.length;
switch (G__28198) {
case 0:
return crate.util.as_str.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return crate.util.as_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___28271 = arguments.length;
var i__5898__auto___28272 = (0);
while(true){
if((i__5898__auto___28272 < len__5897__auto___28271)){
args_arr__5922__auto__.push((arguments[i__5898__auto___28272]));

var G__28273 = (i__5898__auto___28272 + (1));
i__5898__auto___28272 = G__28273;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((1) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((1)),(0),null)):null);
return crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5923__auto__);

}
});

(crate.util.as_str.cljs$core$IFn$_invoke$arity$0 = (function (){
return "";
}));

(crate.util.as_str.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((((x instanceof cljs.core.Symbol)) || ((x instanceof cljs.core.Keyword)))){
return cljs.core.name(x);
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
}
}));

(crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
return (function (s,more){
while(true){
if(cljs.core.truth_(more)){
var G__28280 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.as_str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more))));
var G__28282 = cljs.core.next(more);
s = G__28280;
more = G__28282;
continue;
} else {
return s;
}
break;
}
})(crate.util.as_str.cljs$core$IFn$_invoke$arity$1(x),xs);
}));

/** @this {Function} */
(crate.util.as_str.cljs$lang$applyTo = (function (seq28195){
var G__28197 = cljs.core.first(seq28195);
var seq28195__$1 = cljs.core.next(seq28195);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28197,seq28195__$1);
}));

(crate.util.as_str.cljs$lang$maxFixedArity = (1));

/**
 * Change special characters into HTML character entities.
 */
crate.util.escape_html = (function crate$util$escape_html(text){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(crate.util.as_str.cljs$core$IFn$_invoke$arity$1(text),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
/**
 * Prepends the base-url to the supplied URI.
 */
crate.util.to_uri = (function crate$util$to_uri(uri){
if(cljs.core.truth_(cljs.core.re_matches(/^\w+:.*/,uri))){
return uri;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util._STAR_base_url_STAR_)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri));
}
});
crate.util.url_encode_component = (function crate$util$url_encode_component(s){

return encodeURIComponent(crate.util.as_str.cljs$core$IFn$_invoke$arity$1(s));
});
/**
 * Turn a map of parameters into a urlencoded string.
 */
crate.util.url_encode = (function crate$util$url_encode(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",(function (){var iter__5649__auto__ = (function crate$util$url_encode_$_iter__28224(s__28225){
return (new cljs.core.LazySeq(null,(function (){
var s__28225__$1 = s__28225;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28225__$1);
if(temp__5825__auto__){
var s__28225__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28225__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28225__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28227 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28226 = (0);
while(true){
if((i__28226 < size__5648__auto__)){
var vec__28230 = cljs.core._nth(c__5647__auto__,i__28226);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28230,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28230,(1),null);
cljs.core.chunk_append(b__28227,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.url_encode_component(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.url_encode_component(v))));

var G__28304 = (i__28226 + (1));
i__28226 = G__28304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28227),crate$util$url_encode_$_iter__28224(cljs.core.chunk_rest(s__28225__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28227),null);
}
} else {
var vec__28235 = cljs.core.first(s__28225__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28235,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28235,(1),null);
return cljs.core.cons((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.url_encode_component(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.url_encode_component(v))),crate$util$url_encode_$_iter__28224(cljs.core.rest(s__28225__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(params);
})());
});
/**
 * Creates a URL string from a variable list of arguments and an optional
 *   parameter map as the last argument. For example:
 *  (url "/group/" 4 "/products" {:page 9})
 *  => "/group/4/products?page=9"
 */
crate.util.url = (function crate$util$url(var_args){
var args__5903__auto__ = [];
var len__5897__auto___28317 = arguments.length;
var i__5898__auto___28319 = (0);
while(true){
if((i__5898__auto___28319 < len__5897__auto___28317)){
args__5903__auto__.push((arguments[i__5898__auto___28319]));

var G__28321 = (i__5898__auto___28319 + (1));
i__5898__auto___28319 = G__28321;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return crate.util.url.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(crate.util.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var params = cljs.core.last(args);
var args__$1 = cljs.core.butlast(args);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.to_uri((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args__$1))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.map_QMARK_(params))?(""+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.url_encode(params))):params))))));
}));

(crate.util.url.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(crate.util.url.cljs$lang$applyTo = (function (seq28242){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28242));
}));


//# sourceMappingURL=crate.util.js.map
