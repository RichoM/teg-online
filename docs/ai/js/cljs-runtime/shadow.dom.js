goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_21238 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_21238(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_21242 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_21242(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19910 = coll;
var G__19911 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19910,G__19911) : shadow.dom.lazy_native_coll_seq.call(null,G__19910,G__19911));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5162__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19954 = arguments.length;
switch (G__19954) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19960 = arguments.length;
switch (G__19960) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19963 = arguments.length;
switch (G__19963) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19981 = arguments.length;
switch (G__19981) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19995 = arguments.length;
switch (G__19995) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__20004 = arguments.length;
switch (G__20004) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e20021){if((e20021 instanceof Object)){
var e = e20021;
return console.log("didnt support attachEvent",el,e);
} else {
throw e20021;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__20027 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20028 = null;
var count__20029 = (0);
var i__20030 = (0);
while(true){
if((i__20030 < count__20029)){
var el = chunk__20028.cljs$core$IIndexed$_nth$arity$2(null,i__20030);
var handler_21293__$1 = ((function (seq__20027,chunk__20028,count__20029,i__20030,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20027,chunk__20028,count__20029,i__20030,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21293__$1);


var G__21294 = seq__20027;
var G__21295 = chunk__20028;
var G__21296 = count__20029;
var G__21297 = (i__20030 + (1));
seq__20027 = G__21294;
chunk__20028 = G__21295;
count__20029 = G__21296;
i__20030 = G__21297;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20027);
if(temp__5825__auto__){
var seq__20027__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20027__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__20027__$1);
var G__21299 = cljs.core.chunk_rest(seq__20027__$1);
var G__21300 = c__5694__auto__;
var G__21301 = cljs.core.count(c__5694__auto__);
var G__21302 = (0);
seq__20027 = G__21299;
chunk__20028 = G__21300;
count__20029 = G__21301;
i__20030 = G__21302;
continue;
} else {
var el = cljs.core.first(seq__20027__$1);
var handler_21303__$1 = ((function (seq__20027,chunk__20028,count__20029,i__20030,el,seq__20027__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20027,chunk__20028,count__20029,i__20030,el,seq__20027__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21303__$1);


var G__21307 = cljs.core.next(seq__20027__$1);
var G__21308 = null;
var G__21309 = (0);
var G__21310 = (0);
seq__20027 = G__21307;
chunk__20028 = G__21308;
count__20029 = G__21309;
i__20030 = G__21310;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__20042 = arguments.length;
switch (G__20042) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__20058 = cljs.core.seq(events);
var chunk__20059 = null;
var count__20060 = (0);
var i__20061 = (0);
while(true){
if((i__20061 < count__20060)){
var vec__20072 = chunk__20059.cljs$core$IIndexed$_nth$arity$2(null,i__20061);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20072,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20072,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21318 = seq__20058;
var G__21319 = chunk__20059;
var G__21320 = count__20060;
var G__21321 = (i__20061 + (1));
seq__20058 = G__21318;
chunk__20059 = G__21319;
count__20060 = G__21320;
i__20061 = G__21321;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20058);
if(temp__5825__auto__){
var seq__20058__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20058__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__20058__$1);
var G__21322 = cljs.core.chunk_rest(seq__20058__$1);
var G__21323 = c__5694__auto__;
var G__21324 = cljs.core.count(c__5694__auto__);
var G__21325 = (0);
seq__20058 = G__21322;
chunk__20059 = G__21323;
count__20060 = G__21324;
i__20061 = G__21325;
continue;
} else {
var vec__20075 = cljs.core.first(seq__20058__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20075,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20075,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21326 = cljs.core.next(seq__20058__$1);
var G__21327 = null;
var G__21328 = (0);
var G__21329 = (0);
seq__20058 = G__21326;
chunk__20059 = G__21327;
count__20060 = G__21328;
i__20061 = G__21329;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__20080 = cljs.core.seq(styles);
var chunk__20081 = null;
var count__20082 = (0);
var i__20083 = (0);
while(true){
if((i__20083 < count__20082)){
var vec__20101 = chunk__20081.cljs$core$IIndexed$_nth$arity$2(null,i__20083);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20101,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20101,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21332 = seq__20080;
var G__21333 = chunk__20081;
var G__21334 = count__20082;
var G__21335 = (i__20083 + (1));
seq__20080 = G__21332;
chunk__20081 = G__21333;
count__20082 = G__21334;
i__20083 = G__21335;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20080);
if(temp__5825__auto__){
var seq__20080__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20080__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__20080__$1);
var G__21336 = cljs.core.chunk_rest(seq__20080__$1);
var G__21337 = c__5694__auto__;
var G__21338 = cljs.core.count(c__5694__auto__);
var G__21339 = (0);
seq__20080 = G__21336;
chunk__20081 = G__21337;
count__20082 = G__21338;
i__20083 = G__21339;
continue;
} else {
var vec__20105 = cljs.core.first(seq__20080__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20105,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20105,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21342 = cljs.core.next(seq__20080__$1);
var G__21343 = null;
var G__21344 = (0);
var G__21345 = (0);
seq__20080 = G__21342;
chunk__20081 = G__21343;
count__20082 = G__21344;
i__20083 = G__21345;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__20116_21346 = key;
var G__20116_21347__$1 = (((G__20116_21346 instanceof cljs.core.Keyword))?G__20116_21346.fqn:null);
switch (G__20116_21347__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_21350 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_21350,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_21350,"aria-");
}
})())){
el.setAttribute(ks_21350,value);
} else {
(el[ks_21350] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20171){
var map__20172 = p__20171;
var map__20172__$1 = cljs.core.__destructure_map(map__20172);
var props = map__20172__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20172__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20174 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20174,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20174,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20174,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20178 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20178,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20178;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20187 = arguments.length;
switch (G__20187) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20194){
var vec__20195 = p__20194;
var seq__20196 = cljs.core.seq(vec__20195);
var first__20197 = cljs.core.first(seq__20196);
var seq__20196__$1 = cljs.core.next(seq__20196);
var nn = first__20197;
var first__20197__$1 = cljs.core.first(seq__20196__$1);
var seq__20196__$2 = cljs.core.next(seq__20196__$1);
var np = first__20197__$1;
var nc = seq__20196__$2;
var node = vec__20195;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20198 = nn;
var G__20199 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20198,G__20199) : create_fn.call(null,G__20198,G__20199));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20200 = nn;
var G__20201 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20200,G__20201) : create_fn.call(null,G__20200,G__20201));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20203 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20203,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20203,(1),null);
var seq__20206_21371 = cljs.core.seq(node_children);
var chunk__20207_21372 = null;
var count__20208_21373 = (0);
var i__20209_21374 = (0);
while(true){
if((i__20209_21374 < count__20208_21373)){
var child_struct_21375 = chunk__20207_21372.cljs$core$IIndexed$_nth$arity$2(null,i__20209_21374);
var children_21376 = shadow.dom.dom_node(child_struct_21375);
if(cljs.core.seq_QMARK_(children_21376)){
var seq__20235_21381 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21376));
var chunk__20237_21382 = null;
var count__20238_21383 = (0);
var i__20239_21384 = (0);
while(true){
if((i__20239_21384 < count__20238_21383)){
var child_21386 = chunk__20237_21382.cljs$core$IIndexed$_nth$arity$2(null,i__20239_21384);
if(cljs.core.truth_(child_21386)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21386);


var G__21387 = seq__20235_21381;
var G__21388 = chunk__20237_21382;
var G__21389 = count__20238_21383;
var G__21390 = (i__20239_21384 + (1));
seq__20235_21381 = G__21387;
chunk__20237_21382 = G__21388;
count__20238_21383 = G__21389;
i__20239_21384 = G__21390;
continue;
} else {
var G__21391 = seq__20235_21381;
var G__21392 = chunk__20237_21382;
var G__21393 = count__20238_21383;
var G__21394 = (i__20239_21384 + (1));
seq__20235_21381 = G__21391;
chunk__20237_21382 = G__21392;
count__20238_21383 = G__21393;
i__20239_21384 = G__21394;
continue;
}
} else {
var temp__5825__auto___21396 = cljs.core.seq(seq__20235_21381);
if(temp__5825__auto___21396){
var seq__20235_21397__$1 = temp__5825__auto___21396;
if(cljs.core.chunked_seq_QMARK_(seq__20235_21397__$1)){
var c__5694__auto___21398 = cljs.core.chunk_first(seq__20235_21397__$1);
var G__21399 = cljs.core.chunk_rest(seq__20235_21397__$1);
var G__21400 = c__5694__auto___21398;
var G__21401 = cljs.core.count(c__5694__auto___21398);
var G__21402 = (0);
seq__20235_21381 = G__21399;
chunk__20237_21382 = G__21400;
count__20238_21383 = G__21401;
i__20239_21384 = G__21402;
continue;
} else {
var child_21403 = cljs.core.first(seq__20235_21397__$1);
if(cljs.core.truth_(child_21403)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21403);


var G__21405 = cljs.core.next(seq__20235_21397__$1);
var G__21406 = null;
var G__21407 = (0);
var G__21408 = (0);
seq__20235_21381 = G__21405;
chunk__20237_21382 = G__21406;
count__20238_21383 = G__21407;
i__20239_21384 = G__21408;
continue;
} else {
var G__21409 = cljs.core.next(seq__20235_21397__$1);
var G__21410 = null;
var G__21411 = (0);
var G__21412 = (0);
seq__20235_21381 = G__21409;
chunk__20237_21382 = G__21410;
count__20238_21383 = G__21411;
i__20239_21384 = G__21412;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21376);
}


var G__21413 = seq__20206_21371;
var G__21414 = chunk__20207_21372;
var G__21415 = count__20208_21373;
var G__21416 = (i__20209_21374 + (1));
seq__20206_21371 = G__21413;
chunk__20207_21372 = G__21414;
count__20208_21373 = G__21415;
i__20209_21374 = G__21416;
continue;
} else {
var temp__5825__auto___21417 = cljs.core.seq(seq__20206_21371);
if(temp__5825__auto___21417){
var seq__20206_21418__$1 = temp__5825__auto___21417;
if(cljs.core.chunked_seq_QMARK_(seq__20206_21418__$1)){
var c__5694__auto___21419 = cljs.core.chunk_first(seq__20206_21418__$1);
var G__21420 = cljs.core.chunk_rest(seq__20206_21418__$1);
var G__21421 = c__5694__auto___21419;
var G__21422 = cljs.core.count(c__5694__auto___21419);
var G__21423 = (0);
seq__20206_21371 = G__21420;
chunk__20207_21372 = G__21421;
count__20208_21373 = G__21422;
i__20209_21374 = G__21423;
continue;
} else {
var child_struct_21424 = cljs.core.first(seq__20206_21418__$1);
var children_21425 = shadow.dom.dom_node(child_struct_21424);
if(cljs.core.seq_QMARK_(children_21425)){
var seq__20254_21426 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21425));
var chunk__20256_21427 = null;
var count__20257_21428 = (0);
var i__20258_21429 = (0);
while(true){
if((i__20258_21429 < count__20257_21428)){
var child_21431 = chunk__20256_21427.cljs$core$IIndexed$_nth$arity$2(null,i__20258_21429);
if(cljs.core.truth_(child_21431)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21431);


var G__21432 = seq__20254_21426;
var G__21433 = chunk__20256_21427;
var G__21434 = count__20257_21428;
var G__21435 = (i__20258_21429 + (1));
seq__20254_21426 = G__21432;
chunk__20256_21427 = G__21433;
count__20257_21428 = G__21434;
i__20258_21429 = G__21435;
continue;
} else {
var G__21436 = seq__20254_21426;
var G__21437 = chunk__20256_21427;
var G__21438 = count__20257_21428;
var G__21439 = (i__20258_21429 + (1));
seq__20254_21426 = G__21436;
chunk__20256_21427 = G__21437;
count__20257_21428 = G__21438;
i__20258_21429 = G__21439;
continue;
}
} else {
var temp__5825__auto___21440__$1 = cljs.core.seq(seq__20254_21426);
if(temp__5825__auto___21440__$1){
var seq__20254_21441__$1 = temp__5825__auto___21440__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20254_21441__$1)){
var c__5694__auto___21442 = cljs.core.chunk_first(seq__20254_21441__$1);
var G__21444 = cljs.core.chunk_rest(seq__20254_21441__$1);
var G__21445 = c__5694__auto___21442;
var G__21446 = cljs.core.count(c__5694__auto___21442);
var G__21447 = (0);
seq__20254_21426 = G__21444;
chunk__20256_21427 = G__21445;
count__20257_21428 = G__21446;
i__20258_21429 = G__21447;
continue;
} else {
var child_21448 = cljs.core.first(seq__20254_21441__$1);
if(cljs.core.truth_(child_21448)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21448);


var G__21449 = cljs.core.next(seq__20254_21441__$1);
var G__21450 = null;
var G__21451 = (0);
var G__21452 = (0);
seq__20254_21426 = G__21449;
chunk__20256_21427 = G__21450;
count__20257_21428 = G__21451;
i__20258_21429 = G__21452;
continue;
} else {
var G__21453 = cljs.core.next(seq__20254_21441__$1);
var G__21454 = null;
var G__21455 = (0);
var G__21456 = (0);
seq__20254_21426 = G__21453;
chunk__20256_21427 = G__21454;
count__20257_21428 = G__21455;
i__20258_21429 = G__21456;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21425);
}


var G__21457 = cljs.core.next(seq__20206_21418__$1);
var G__21458 = null;
var G__21459 = (0);
var G__21460 = (0);
seq__20206_21371 = G__21457;
chunk__20207_21372 = G__21458;
count__20208_21373 = G__21459;
i__20209_21374 = G__21460;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20275 = cljs.core.seq(node);
var chunk__20276 = null;
var count__20277 = (0);
var i__20278 = (0);
while(true){
if((i__20278 < count__20277)){
var n = chunk__20276.cljs$core$IIndexed$_nth$arity$2(null,i__20278);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21475 = seq__20275;
var G__21476 = chunk__20276;
var G__21477 = count__20277;
var G__21478 = (i__20278 + (1));
seq__20275 = G__21475;
chunk__20276 = G__21476;
count__20277 = G__21477;
i__20278 = G__21478;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20275);
if(temp__5825__auto__){
var seq__20275__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20275__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__20275__$1);
var G__21485 = cljs.core.chunk_rest(seq__20275__$1);
var G__21486 = c__5694__auto__;
var G__21487 = cljs.core.count(c__5694__auto__);
var G__21488 = (0);
seq__20275 = G__21485;
chunk__20276 = G__21486;
count__20277 = G__21487;
i__20278 = G__21488;
continue;
} else {
var n = cljs.core.first(seq__20275__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21494 = cljs.core.next(seq__20275__$1);
var G__21495 = null;
var G__21496 = (0);
var G__21497 = (0);
seq__20275 = G__21494;
chunk__20276 = G__21495;
count__20277 = G__21496;
i__20278 = G__21497;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20293 = arguments.length;
switch (G__20293) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20300 = arguments.length;
switch (G__20300) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20313 = arguments.length;
switch (G__20313) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5162__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5903__auto__ = [];
var len__5897__auto___21528 = arguments.length;
var i__5898__auto___21529 = (0);
while(true){
if((i__5898__auto___21529 < len__5897__auto___21528)){
args__5903__auto__.push((arguments[i__5898__auto___21529]));

var G__21532 = (i__5898__auto___21529 + (1));
i__5898__auto___21529 = G__21532;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20345_21537 = cljs.core.seq(nodes);
var chunk__20347_21538 = null;
var count__20348_21540 = (0);
var i__20349_21541 = (0);
while(true){
if((i__20349_21541 < count__20348_21540)){
var node_21544 = chunk__20347_21538.cljs$core$IIndexed$_nth$arity$2(null,i__20349_21541);
fragment.appendChild(shadow.dom._to_dom(node_21544));


var G__21547 = seq__20345_21537;
var G__21548 = chunk__20347_21538;
var G__21549 = count__20348_21540;
var G__21550 = (i__20349_21541 + (1));
seq__20345_21537 = G__21547;
chunk__20347_21538 = G__21548;
count__20348_21540 = G__21549;
i__20349_21541 = G__21550;
continue;
} else {
var temp__5825__auto___21552 = cljs.core.seq(seq__20345_21537);
if(temp__5825__auto___21552){
var seq__20345_21553__$1 = temp__5825__auto___21552;
if(cljs.core.chunked_seq_QMARK_(seq__20345_21553__$1)){
var c__5694__auto___21554 = cljs.core.chunk_first(seq__20345_21553__$1);
var G__21555 = cljs.core.chunk_rest(seq__20345_21553__$1);
var G__21556 = c__5694__auto___21554;
var G__21557 = cljs.core.count(c__5694__auto___21554);
var G__21558 = (0);
seq__20345_21537 = G__21555;
chunk__20347_21538 = G__21556;
count__20348_21540 = G__21557;
i__20349_21541 = G__21558;
continue;
} else {
var node_21559 = cljs.core.first(seq__20345_21553__$1);
fragment.appendChild(shadow.dom._to_dom(node_21559));


var G__21560 = cljs.core.next(seq__20345_21553__$1);
var G__21561 = null;
var G__21562 = (0);
var G__21563 = (0);
seq__20345_21537 = G__21560;
chunk__20347_21538 = G__21561;
count__20348_21540 = G__21562;
i__20349_21541 = G__21563;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20336){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20336));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20416_21569 = cljs.core.seq(scripts);
var chunk__20417_21570 = null;
var count__20418_21571 = (0);
var i__20419_21572 = (0);
while(true){
if((i__20419_21572 < count__20418_21571)){
var vec__20442_21574 = chunk__20417_21570.cljs$core$IIndexed$_nth$arity$2(null,i__20419_21572);
var script_tag_21575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20442_21574,(0),null);
var script_body_21576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20442_21574,(1),null);
eval(script_body_21576);


var G__21581 = seq__20416_21569;
var G__21582 = chunk__20417_21570;
var G__21583 = count__20418_21571;
var G__21584 = (i__20419_21572 + (1));
seq__20416_21569 = G__21581;
chunk__20417_21570 = G__21582;
count__20418_21571 = G__21583;
i__20419_21572 = G__21584;
continue;
} else {
var temp__5825__auto___21587 = cljs.core.seq(seq__20416_21569);
if(temp__5825__auto___21587){
var seq__20416_21588__$1 = temp__5825__auto___21587;
if(cljs.core.chunked_seq_QMARK_(seq__20416_21588__$1)){
var c__5694__auto___21589 = cljs.core.chunk_first(seq__20416_21588__$1);
var G__21591 = cljs.core.chunk_rest(seq__20416_21588__$1);
var G__21592 = c__5694__auto___21589;
var G__21593 = cljs.core.count(c__5694__auto___21589);
var G__21594 = (0);
seq__20416_21569 = G__21591;
chunk__20417_21570 = G__21592;
count__20418_21571 = G__21593;
i__20419_21572 = G__21594;
continue;
} else {
var vec__20451_21595 = cljs.core.first(seq__20416_21588__$1);
var script_tag_21596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20451_21595,(0),null);
var script_body_21597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20451_21595,(1),null);
eval(script_body_21597);


var G__21598 = cljs.core.next(seq__20416_21588__$1);
var G__21599 = null;
var G__21600 = (0);
var G__21601 = (0);
seq__20416_21569 = G__21598;
chunk__20417_21570 = G__21599;
count__20418_21571 = G__21600;
i__20419_21572 = G__21601;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20464){
var vec__20466 = p__20464;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20497 = arguments.length;
switch (G__20497) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20528 = cljs.core.seq(style_keys);
var chunk__20529 = null;
var count__20530 = (0);
var i__20531 = (0);
while(true){
if((i__20531 < count__20530)){
var it = chunk__20529.cljs$core$IIndexed$_nth$arity$2(null,i__20531);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21621 = seq__20528;
var G__21622 = chunk__20529;
var G__21624 = count__20530;
var G__21625 = (i__20531 + (1));
seq__20528 = G__21621;
chunk__20529 = G__21622;
count__20530 = G__21624;
i__20531 = G__21625;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20528);
if(temp__5825__auto__){
var seq__20528__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20528__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__20528__$1);
var G__21626 = cljs.core.chunk_rest(seq__20528__$1);
var G__21627 = c__5694__auto__;
var G__21628 = cljs.core.count(c__5694__auto__);
var G__21629 = (0);
seq__20528 = G__21626;
chunk__20529 = G__21627;
count__20530 = G__21628;
i__20531 = G__21629;
continue;
} else {
var it = cljs.core.first(seq__20528__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21634 = cljs.core.next(seq__20528__$1);
var G__21635 = null;
var G__21636 = (0);
var G__21637 = (0);
seq__20528 = G__21634;
chunk__20529 = G__21635;
count__20530 = G__21636;
i__20531 = G__21637;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k20547,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__20568 = k20547;
var G__20568__$1 = (((G__20568 instanceof cljs.core.Keyword))?G__20568.fqn:null);
switch (G__20568__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20547,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__20571){
var vec__20572 = p__20571;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20572,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20572,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20546){
var self__ = this;
var G__20546__$1 = this;
return (new cljs.core.RecordIter((0),G__20546__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20548,other20549){
var self__ = this;
var this20548__$1 = this;
return (((!((other20549 == null)))) && ((((this20548__$1.constructor === other20549.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20548__$1.x,other20549.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20548__$1.y,other20549.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20548__$1.__extmap,other20549.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k20547){
var self__ = this;
var this__5476__auto____$1 = this;
var G__20638 = k20547;
var G__20638__$1 = (((G__20638 instanceof cljs.core.Keyword))?G__20638.fqn:null);
switch (G__20638__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20547);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__20546){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__20641 = cljs.core.keyword_identical_QMARK_;
var expr__20642 = k__5478__auto__;
if(cljs.core.truth_((pred__20641.cljs$core$IFn$_invoke$arity$2 ? pred__20641.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20642) : pred__20641.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20642)))){
return (new shadow.dom.Coordinate(G__20546,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20641.cljs$core$IFn$_invoke$arity$2 ? pred__20641.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20642) : pred__20641.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20642)))){
return (new shadow.dom.Coordinate(self__.x,G__20546,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__20546),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__20546){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20546,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20559){
var extmap__5511__auto__ = (function (){var G__20662 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20559,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20559)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20662);
} else {
return G__20662;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20559),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20559),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k20678,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__20689 = k20678;
var G__20689__$1 = (((G__20689 instanceof cljs.core.Keyword))?G__20689.fqn:null);
switch (G__20689__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20678,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__20693){
var vec__20694 = p__20693;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20694,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20694,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Size{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20677){
var self__ = this;
var G__20677__$1 = this;
return (new cljs.core.RecordIter((0),G__20677__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20679,other20680){
var self__ = this;
var this20679__$1 = this;
return (((!((other20680 == null)))) && ((((this20679__$1.constructor === other20680.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20679__$1.w,other20680.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20679__$1.h,other20680.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20679__$1.__extmap,other20680.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k20678){
var self__ = this;
var this__5476__auto____$1 = this;
var G__20728 = k20678;
var G__20728__$1 = (((G__20728 instanceof cljs.core.Keyword))?G__20728.fqn:null);
switch (G__20728__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20678);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__20677){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__20734 = cljs.core.keyword_identical_QMARK_;
var expr__20735 = k__5478__auto__;
if(cljs.core.truth_((pred__20734.cljs$core$IFn$_invoke$arity$2 ? pred__20734.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20735) : pred__20734.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20735)))){
return (new shadow.dom.Size(G__20677,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20734.cljs$core$IFn$_invoke$arity$2 ? pred__20734.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20735) : pred__20734.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20735)))){
return (new shadow.dom.Size(self__.w,G__20677,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__20677),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__20677){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20677,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20683){
var extmap__5511__auto__ = (function (){var G__20766 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20683,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20683)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20766);
} else {
return G__20766;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20683),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20683),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5759__auto__ = opts;
var l__5760__auto__ = a__5759__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5760__auto__)){
var G__21786 = (i + (1));
var G__21787 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21786;
ret = G__21787;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20840){
var vec__20843 = p__20840;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20843,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20861 = arguments.length;
switch (G__20861) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21808 = ps;
var G__21809 = (i + (1));
el__$1 = G__21808;
i = G__21809;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20923 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20923,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20923,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20923,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20929_21838 = cljs.core.seq(props);
var chunk__20930_21839 = null;
var count__20931_21840 = (0);
var i__20932_21841 = (0);
while(true){
if((i__20932_21841 < count__20931_21840)){
var vec__20948_21844 = chunk__20930_21839.cljs$core$IIndexed$_nth$arity$2(null,i__20932_21841);
var k_21845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20948_21844,(0),null);
var v_21846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20948_21844,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_21845);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21845),v_21846);


var G__21851 = seq__20929_21838;
var G__21852 = chunk__20930_21839;
var G__21853 = count__20931_21840;
var G__21854 = (i__20932_21841 + (1));
seq__20929_21838 = G__21851;
chunk__20930_21839 = G__21852;
count__20931_21840 = G__21853;
i__20932_21841 = G__21854;
continue;
} else {
var temp__5825__auto___21855 = cljs.core.seq(seq__20929_21838);
if(temp__5825__auto___21855){
var seq__20929_21856__$1 = temp__5825__auto___21855;
if(cljs.core.chunked_seq_QMARK_(seq__20929_21856__$1)){
var c__5694__auto___21858 = cljs.core.chunk_first(seq__20929_21856__$1);
var G__21860 = cljs.core.chunk_rest(seq__20929_21856__$1);
var G__21861 = c__5694__auto___21858;
var G__21862 = cljs.core.count(c__5694__auto___21858);
var G__21863 = (0);
seq__20929_21838 = G__21860;
chunk__20930_21839 = G__21861;
count__20931_21840 = G__21862;
i__20932_21841 = G__21863;
continue;
} else {
var vec__20952_21865 = cljs.core.first(seq__20929_21856__$1);
var k_21866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20952_21865,(0),null);
var v_21867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20952_21865,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_21866);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21866),v_21867);


var G__21874 = cljs.core.next(seq__20929_21856__$1);
var G__21875 = null;
var G__21876 = (0);
var G__21877 = (0);
seq__20929_21838 = G__21874;
chunk__20930_21839 = G__21875;
count__20931_21840 = G__21876;
i__20932_21841 = G__21877;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20976 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20976,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20976,(1),null);
var seq__20982_21884 = cljs.core.seq(node_children);
var chunk__20985_21885 = null;
var count__20986_21886 = (0);
var i__20987_21887 = (0);
while(true){
if((i__20987_21887 < count__20986_21886)){
var child_struct_21890 = chunk__20985_21885.cljs$core$IIndexed$_nth$arity$2(null,i__20987_21887);
if((!((child_struct_21890 == null)))){
if(typeof child_struct_21890 === 'string'){
var text_21892 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21892)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_21890)));
} else {
var children_21894 = shadow.dom.svg_node(child_struct_21890);
if(cljs.core.seq_QMARK_(children_21894)){
var seq__21100_21895 = cljs.core.seq(children_21894);
var chunk__21102_21896 = null;
var count__21103_21897 = (0);
var i__21104_21898 = (0);
while(true){
if((i__21104_21898 < count__21103_21897)){
var child_21903 = chunk__21102_21896.cljs$core$IIndexed$_nth$arity$2(null,i__21104_21898);
if(cljs.core.truth_(child_21903)){
node.appendChild(child_21903);


var G__21909 = seq__21100_21895;
var G__21910 = chunk__21102_21896;
var G__21911 = count__21103_21897;
var G__21912 = (i__21104_21898 + (1));
seq__21100_21895 = G__21909;
chunk__21102_21896 = G__21910;
count__21103_21897 = G__21911;
i__21104_21898 = G__21912;
continue;
} else {
var G__21913 = seq__21100_21895;
var G__21914 = chunk__21102_21896;
var G__21915 = count__21103_21897;
var G__21916 = (i__21104_21898 + (1));
seq__21100_21895 = G__21913;
chunk__21102_21896 = G__21914;
count__21103_21897 = G__21915;
i__21104_21898 = G__21916;
continue;
}
} else {
var temp__5825__auto___21918 = cljs.core.seq(seq__21100_21895);
if(temp__5825__auto___21918){
var seq__21100_21919__$1 = temp__5825__auto___21918;
if(cljs.core.chunked_seq_QMARK_(seq__21100_21919__$1)){
var c__5694__auto___21921 = cljs.core.chunk_first(seq__21100_21919__$1);
var G__21923 = cljs.core.chunk_rest(seq__21100_21919__$1);
var G__21924 = c__5694__auto___21921;
var G__21925 = cljs.core.count(c__5694__auto___21921);
var G__21926 = (0);
seq__21100_21895 = G__21923;
chunk__21102_21896 = G__21924;
count__21103_21897 = G__21925;
i__21104_21898 = G__21926;
continue;
} else {
var child_21929 = cljs.core.first(seq__21100_21919__$1);
if(cljs.core.truth_(child_21929)){
node.appendChild(child_21929);


var G__21930 = cljs.core.next(seq__21100_21919__$1);
var G__21931 = null;
var G__21932 = (0);
var G__21933 = (0);
seq__21100_21895 = G__21930;
chunk__21102_21896 = G__21931;
count__21103_21897 = G__21932;
i__21104_21898 = G__21933;
continue;
} else {
var G__21934 = cljs.core.next(seq__21100_21919__$1);
var G__21935 = null;
var G__21936 = (0);
var G__21937 = (0);
seq__21100_21895 = G__21934;
chunk__21102_21896 = G__21935;
count__21103_21897 = G__21936;
i__21104_21898 = G__21937;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21894);
}
}


var G__21942 = seq__20982_21884;
var G__21943 = chunk__20985_21885;
var G__21944 = count__20986_21886;
var G__21945 = (i__20987_21887 + (1));
seq__20982_21884 = G__21942;
chunk__20985_21885 = G__21943;
count__20986_21886 = G__21944;
i__20987_21887 = G__21945;
continue;
} else {
var G__21947 = seq__20982_21884;
var G__21948 = chunk__20985_21885;
var G__21949 = count__20986_21886;
var G__21950 = (i__20987_21887 + (1));
seq__20982_21884 = G__21947;
chunk__20985_21885 = G__21948;
count__20986_21886 = G__21949;
i__20987_21887 = G__21950;
continue;
}
} else {
var temp__5825__auto___21952 = cljs.core.seq(seq__20982_21884);
if(temp__5825__auto___21952){
var seq__20982_21955__$1 = temp__5825__auto___21952;
if(cljs.core.chunked_seq_QMARK_(seq__20982_21955__$1)){
var c__5694__auto___21958 = cljs.core.chunk_first(seq__20982_21955__$1);
var G__21961 = cljs.core.chunk_rest(seq__20982_21955__$1);
var G__21962 = c__5694__auto___21958;
var G__21963 = cljs.core.count(c__5694__auto___21958);
var G__21964 = (0);
seq__20982_21884 = G__21961;
chunk__20985_21885 = G__21962;
count__20986_21886 = G__21963;
i__20987_21887 = G__21964;
continue;
} else {
var child_struct_21972 = cljs.core.first(seq__20982_21955__$1);
if((!((child_struct_21972 == null)))){
if(typeof child_struct_21972 === 'string'){
var text_21977 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21977)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_21972)));
} else {
var children_21986 = shadow.dom.svg_node(child_struct_21972);
if(cljs.core.seq_QMARK_(children_21986)){
var seq__21160_21999 = cljs.core.seq(children_21986);
var chunk__21162_22000 = null;
var count__21163_22001 = (0);
var i__21164_22002 = (0);
while(true){
if((i__21164_22002 < count__21163_22001)){
var child_22007 = chunk__21162_22000.cljs$core$IIndexed$_nth$arity$2(null,i__21164_22002);
if(cljs.core.truth_(child_22007)){
node.appendChild(child_22007);


var G__22009 = seq__21160_21999;
var G__22010 = chunk__21162_22000;
var G__22011 = count__21163_22001;
var G__22012 = (i__21164_22002 + (1));
seq__21160_21999 = G__22009;
chunk__21162_22000 = G__22010;
count__21163_22001 = G__22011;
i__21164_22002 = G__22012;
continue;
} else {
var G__22013 = seq__21160_21999;
var G__22014 = chunk__21162_22000;
var G__22015 = count__21163_22001;
var G__22016 = (i__21164_22002 + (1));
seq__21160_21999 = G__22013;
chunk__21162_22000 = G__22014;
count__21163_22001 = G__22015;
i__21164_22002 = G__22016;
continue;
}
} else {
var temp__5825__auto___22017__$1 = cljs.core.seq(seq__21160_21999);
if(temp__5825__auto___22017__$1){
var seq__21160_22019__$1 = temp__5825__auto___22017__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21160_22019__$1)){
var c__5694__auto___22020 = cljs.core.chunk_first(seq__21160_22019__$1);
var G__22022 = cljs.core.chunk_rest(seq__21160_22019__$1);
var G__22023 = c__5694__auto___22020;
var G__22024 = cljs.core.count(c__5694__auto___22020);
var G__22025 = (0);
seq__21160_21999 = G__22022;
chunk__21162_22000 = G__22023;
count__21163_22001 = G__22024;
i__21164_22002 = G__22025;
continue;
} else {
var child_22027 = cljs.core.first(seq__21160_22019__$1);
if(cljs.core.truth_(child_22027)){
node.appendChild(child_22027);


var G__22029 = cljs.core.next(seq__21160_22019__$1);
var G__22030 = null;
var G__22031 = (0);
var G__22032 = (0);
seq__21160_21999 = G__22029;
chunk__21162_22000 = G__22030;
count__21163_22001 = G__22031;
i__21164_22002 = G__22032;
continue;
} else {
var G__22033 = cljs.core.next(seq__21160_22019__$1);
var G__22034 = null;
var G__22035 = (0);
var G__22037 = (0);
seq__21160_21999 = G__22033;
chunk__21162_22000 = G__22034;
count__21163_22001 = G__22035;
i__21164_22002 = G__22037;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21986);
}
}


var G__22040 = cljs.core.next(seq__20982_21955__$1);
var G__22041 = null;
var G__22042 = (0);
var G__22043 = (0);
seq__20982_21884 = G__22040;
chunk__20985_21885 = G__22041;
count__20986_21886 = G__22042;
i__20987_21887 = G__22043;
continue;
} else {
var G__22046 = cljs.core.next(seq__20982_21955__$1);
var G__22047 = null;
var G__22048 = (0);
var G__22049 = (0);
seq__20982_21884 = G__22046;
chunk__20985_21885 = G__22047;
count__20986_21886 = G__22048;
i__20987_21887 = G__22049;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___22063 = arguments.length;
var i__5898__auto___22064 = (0);
while(true){
if((i__5898__auto___22064 < len__5897__auto___22063)){
args__5903__auto__.push((arguments[i__5898__auto___22064]));

var G__22067 = (i__5898__auto___22064 + (1));
i__5898__auto___22064 = G__22067;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq21222){
var G__21223 = cljs.core.first(seq21222);
var seq21222__$1 = cljs.core.next(seq21222);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21223,seq21222__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
