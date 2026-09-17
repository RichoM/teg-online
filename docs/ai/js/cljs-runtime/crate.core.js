goog.provide('crate.core');
crate.core.group_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
crate.core.raw = (function crate$core$raw(html_str){
return goog.dom.htmlToDocumentFragment(html_str);
});
crate.core.html = (function crate$core$html(var_args){
var args__5903__auto__ = [];
var len__5897__auto___29619 = arguments.length;
var i__5898__auto___29620 = (0);
while(true){
if((i__5898__auto___29620 < len__5897__auto___29619)){
args__5903__auto__.push((arguments[i__5898__auto___29620]));

var G__29621 = (i__5898__auto___29620 + (1));
i__5898__auto___29620 = G__29621;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(crate.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (tags){
var res = cljs.core.map.cljs$core$IFn$_invoke$arity$2(crate.compiler.elem_factory,tags);
if(cljs.core.truth_(cljs.core.second(res))){
return res;
} else {
return cljs.core.first(res);
}
}));

(crate.core.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(crate.core.html.cljs$lang$applyTo = (function (seq29595){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29595));
}));

/**
 * Alias for crate.util/escape-html
 */
crate.core.h = crate.util.escape_html;

//# sourceMappingURL=crate.core.js.map
