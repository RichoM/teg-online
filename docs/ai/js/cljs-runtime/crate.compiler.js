goog.provide('crate.compiler');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",856789142),"http://www.w3.org/2000/svg"], null);


crate.compiler.group_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
crate.compiler.bindings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function crate$compiler$capture_binding(tag,b){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});

/**
 * @interface
 */
crate.compiler.Element = function(){};

var crate$compiler$Element$_elem$dyn_29432 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (crate.compiler._elem[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (crate.compiler._elem["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Element.-elem",this$);
}
}
});
crate.compiler._elem = (function crate$compiler$_elem(this$){
if((((!((this$ == null)))) && ((!((this$.crate$compiler$Element$_elem$arity$1 == null)))))){
return this$.crate$compiler$Element$_elem$arity$1(this$);
} else {
return crate$compiler$Element$_elem$dyn_29432(this$);
}
});

crate.compiler.as_content = (function crate$compiler$as_content(parent,content){
var seq__29119 = cljs.core.seq(content);
var chunk__29120 = null;
var count__29121 = (0);
var i__29122 = (0);
while(true){
if((i__29122 < count__29121)){
var c = chunk__29120.cljs$core$IIndexed$_nth$arity$2(null,i__29122);
var child_29435 = (((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.crate$compiler$Element$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(crate.compiler.Element,c):false)):cljs.core.native_satisfies_QMARK_(crate.compiler.Element,c)))?crate.compiler._elem(c):(((c == null))?null:((cljs.core.map_QMARK_(c))?(function (){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?(crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2(parent,c) : crate.compiler.as_content.call(null,parent,c)):((crate.binding.binding_coll_QMARK_(c))?(function (){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"coll","coll",1647737163),c);

var G__29159 = parent;
var G__29160 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null);
return (crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2(G__29159,G__29160) : crate.compiler.as_content.call(null,G__29159,G__29160));
})()
:((crate.binding.binding_QMARK_(c))?(function (){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"text","text",-1790561697),c);

var G__29161 = parent;
var G__29162 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null);
return (crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2(G__29161,G__29162) : crate.compiler.as_content.call(null,G__29161,G__29162));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)))
))))))))));
if(cljs.core.truth_(child_29435)){
goog.dom.appendChild(parent,child_29435);
} else {
}


var G__29436 = seq__29119;
var G__29437 = chunk__29120;
var G__29438 = count__29121;
var G__29439 = (i__29122 + (1));
seq__29119 = G__29436;
chunk__29120 = G__29437;
count__29121 = G__29438;
i__29122 = G__29439;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29119);
if(temp__5825__auto__){
var seq__29119__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29119__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__29119__$1);
var G__29441 = cljs.core.chunk_rest(seq__29119__$1);
var G__29442 = c__5694__auto__;
var G__29443 = cljs.core.count(c__5694__auto__);
var G__29444 = (0);
seq__29119 = G__29441;
chunk__29120 = G__29442;
count__29121 = G__29443;
i__29122 = G__29444;
continue;
} else {
var c = cljs.core.first(seq__29119__$1);
var child_29445 = (((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.crate$compiler$Element$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(crate.compiler.Element,c):false)):cljs.core.native_satisfies_QMARK_(crate.compiler.Element,c)))?crate.compiler._elem(c):(((c == null))?null:((cljs.core.map_QMARK_(c))?(function (){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?(crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2(parent,c) : crate.compiler.as_content.call(null,parent,c)):((crate.binding.binding_coll_QMARK_(c))?(function (){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"coll","coll",1647737163),c);

var G__29166 = parent;
var G__29167 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null);
return (crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2(G__29166,G__29167) : crate.compiler.as_content.call(null,G__29166,G__29167));
})()
:((crate.binding.binding_QMARK_(c))?(function (){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"text","text",-1790561697),c);

var G__29171 = parent;
var G__29172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null);
return (crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2(G__29171,G__29172) : crate.compiler.as_content.call(null,G__29171,G__29172));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)))
))))))))));
if(cljs.core.truth_(child_29445)){
goog.dom.appendChild(parent,child_29445);
} else {
}


var G__29454 = cljs.core.next(seq__29119__$1);
var G__29455 = null;
var G__29456 = (0);
var G__29457 = (0);
seq__29119 = G__29454;
chunk__29120 = G__29455;
count__29121 = G__29456;
i__29122 = G__29457;
continue;
}
} else {
return null;
}
}
break;
}
});
if((typeof crate !== 'undefined') && (typeof crate.compiler !== 'undefined') && (typeof crate.compiler.dom_binding !== 'undefined')){
} else {
crate.compiler.dom_binding = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29173 = cljs.core.get_global_hierarchy;
return (fexpr__29173.cljs$core$IFn$_invoke$arity$0 ? fexpr__29173.cljs$core$IFn$_invoke$arity$0() : fexpr__29173.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("crate.compiler","dom-binding"),(function (type,_,___$1){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (_,b,elem){
return crate.binding.on_change(b,(function (v){
goog.dom.removeChildren(elem);

return crate.compiler.as_content(elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_,p__29177,elem){
var vec__29178 = p__29177;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29178,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29178,(1),null);
return crate.binding.on_change(b,(function (v){
return (crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_attr.call(null,elem,k,v));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"style","style",-496642736),(function (_,p__29185,elem){
var vec__29186 = p__29185;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29186,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29186,(1),null);
return crate.binding.on_change(b,(function (v){
if(cljs.core.truth_(k)){
return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_style.call(null,elem,k,v));
} else {
return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,v) : crate.compiler.dom_style.call(null,elem,v));
}
}));
}));
crate.compiler.dom_add = (function crate$compiler$dom_add(bc,parent,elem,v){
var temp__5823__auto__ = crate.binding.opt(bc,new cljs.core.Keyword(null,"add","add",235287739));
if(cljs.core.truth_(temp__5823__auto__)){
var adder = temp__5823__auto__;
return (adder.cljs$core$IFn$_invoke$arity$3 ? adder.cljs$core$IFn$_invoke$arity$3(parent,elem,v) : adder.call(null,parent,elem,v));
} else {
return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function crate$compiler$dom_remove(bc,elem){
var temp__5823__auto__ = crate.binding.opt(bc,new cljs.core.Keyword(null,"remove","remove",-131428414));
if(cljs.core.truth_(temp__5823__auto__)){
var remover = temp__5823__auto__;
return (remover.cljs$core$IFn$_invoke$arity$1 ? remover.cljs$core$IFn$_invoke$arity$1(elem) : remover.call(null,elem));
} else {
return goog.dom.removeNode(elem);
}
});
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"coll","coll",1647737163),(function (_,bc,parent){
return crate.binding.on_change(bc,(function (type,elem,v){
var pred__29200 = cljs.core._EQ_;
var expr__29201 = type;
if(cljs.core.truth_((pred__29200.cljs$core$IFn$_invoke$arity$2 ? pred__29200.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add","add",235287739),expr__29201) : pred__29200.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__29201)))){
return crate.compiler.dom_add(bc,parent,elem,v);
} else {
if(cljs.core.truth_((pred__29200.cljs$core$IFn$_invoke$arity$2 ? pred__29200.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove","remove",-131428414),expr__29201) : pred__29200.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__29201)))){
return crate.compiler.dom_remove(bc,elem);
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29201))));
}
}
}));
}));
crate.compiler.handle_bindings = (function crate$compiler$handle_bindings(bs,elem){
var seq__29206 = cljs.core.seq(bs);
var chunk__29207 = null;
var count__29208 = (0);
var i__29209 = (0);
while(true){
if((i__29209 < count__29208)){
var vec__29225 = chunk__29207.cljs$core$IIndexed$_nth$arity$2(null,i__29209);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29225,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29225,(1),null);
crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem);


var G__29480 = seq__29206;
var G__29481 = chunk__29207;
var G__29482 = count__29208;
var G__29483 = (i__29209 + (1));
seq__29206 = G__29480;
chunk__29207 = G__29481;
count__29208 = G__29482;
i__29209 = G__29483;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29206);
if(temp__5825__auto__){
var seq__29206__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29206__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__29206__$1);
var G__29485 = cljs.core.chunk_rest(seq__29206__$1);
var G__29486 = c__5694__auto__;
var G__29487 = cljs.core.count(c__5694__auto__);
var G__29488 = (0);
seq__29206 = G__29485;
chunk__29207 = G__29486;
count__29208 = G__29487;
i__29209 = G__29488;
continue;
} else {
var vec__29233 = cljs.core.first(seq__29206__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29233,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29233,(1),null);
crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem);


var G__29491 = cljs.core.next(seq__29206__$1);
var G__29495 = null;
var G__29497 = (0);
var G__29498 = (0);
seq__29206 = G__29491;
chunk__29207 = G__29495;
count__29208 = G__29497;
i__29209 = G__29498;
continue;
}
} else {
return null;
}
}
break;
}
});
crate.compiler.dom_style = (function crate$compiler$dom_style(var_args){
var G__29239 = arguments.length;
switch (G__29239) {
case 2:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 = (function (elem,v){
if(typeof v === 'string'){
elem.setAttribute("style",v);
} else {
if(cljs.core.map_QMARK_(v)){
var seq__29249_29510 = cljs.core.seq(v);
var chunk__29250_29511 = null;
var count__29251_29512 = (0);
var i__29252_29513 = (0);
while(true){
if((i__29252_29513 < count__29251_29512)){
var vec__29260_29514 = chunk__29250_29511.cljs$core$IIndexed$_nth$arity$2(null,i__29252_29513);
var k_29515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29260_29514,(0),null);
var v_29516__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29260_29514,(1),null);
crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_29515,v_29516__$1);


var G__29520 = seq__29249_29510;
var G__29521 = chunk__29250_29511;
var G__29522 = count__29251_29512;
var G__29523 = (i__29252_29513 + (1));
seq__29249_29510 = G__29520;
chunk__29250_29511 = G__29521;
count__29251_29512 = G__29522;
i__29252_29513 = G__29523;
continue;
} else {
var temp__5825__auto___29527 = cljs.core.seq(seq__29249_29510);
if(temp__5825__auto___29527){
var seq__29249_29528__$1 = temp__5825__auto___29527;
if(cljs.core.chunked_seq_QMARK_(seq__29249_29528__$1)){
var c__5694__auto___29533 = cljs.core.chunk_first(seq__29249_29528__$1);
var G__29534 = cljs.core.chunk_rest(seq__29249_29528__$1);
var G__29535 = c__5694__auto___29533;
var G__29536 = cljs.core.count(c__5694__auto___29533);
var G__29537 = (0);
seq__29249_29510 = G__29534;
chunk__29250_29511 = G__29535;
count__29251_29512 = G__29536;
i__29252_29513 = G__29537;
continue;
} else {
var vec__29263_29538 = cljs.core.first(seq__29249_29528__$1);
var k_29539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29263_29538,(0),null);
var v_29540__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29263_29538,(1),null);
crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_29539,v_29540__$1);


var G__29541 = cljs.core.next(seq__29249_29528__$1);
var G__29542 = null;
var G__29543 = (0);
var G__29544 = (0);
seq__29249_29510 = G__29541;
chunk__29250_29511 = G__29542;
count__29251_29512 = G__29543;
i__29252_29513 = G__29544;
continue;
}
} else {
}
}
break;
}
} else {
if(crate.binding.binding_QMARK_(v)){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));

crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,crate.binding.value(v));
} else {
}
}
}

return elem;
}));

(crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var v__$1 = ((crate.binding.binding_QMARK_(v))?(function (){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value(v);
})()
:v);
return goog.style.setStyle(elem,cljs.core.name(k),v__$1);
}));

(crate.compiler.dom_style.cljs$lang$maxFixedArity = 3);

crate.compiler.dom_attr = (function crate$compiler$dom_attr(var_args){
var G__29267 = arguments.length;
switch (G__29267) {
case 2:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2 = (function (elem,attrs){
if(cljs.core.truth_(elem)){
if((!(cljs.core.map_QMARK_(attrs)))){
return elem.getAttribute(cljs.core.name(attrs));
} else {
var seq__29269_29557 = cljs.core.seq(attrs);
var chunk__29270_29558 = null;
var count__29271_29559 = (0);
var i__29272_29560 = (0);
while(true){
if((i__29272_29560 < count__29271_29559)){
var vec__29306_29561 = chunk__29270_29558.cljs$core$IIndexed$_nth$arity$2(null,i__29272_29560);
var k_29562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29306_29561,(0),null);
var v_29563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29306_29561,(1),null);
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_29562,v_29563);


var G__29564 = seq__29269_29557;
var G__29565 = chunk__29270_29558;
var G__29566 = count__29271_29559;
var G__29567 = (i__29272_29560 + (1));
seq__29269_29557 = G__29564;
chunk__29270_29558 = G__29565;
count__29271_29559 = G__29566;
i__29272_29560 = G__29567;
continue;
} else {
var temp__5825__auto___29568 = cljs.core.seq(seq__29269_29557);
if(temp__5825__auto___29568){
var seq__29269_29569__$1 = temp__5825__auto___29568;
if(cljs.core.chunked_seq_QMARK_(seq__29269_29569__$1)){
var c__5694__auto___29573 = cljs.core.chunk_first(seq__29269_29569__$1);
var G__29574 = cljs.core.chunk_rest(seq__29269_29569__$1);
var G__29575 = c__5694__auto___29573;
var G__29576 = cljs.core.count(c__5694__auto___29573);
var G__29577 = (0);
seq__29269_29557 = G__29574;
chunk__29270_29558 = G__29575;
count__29271_29559 = G__29576;
i__29272_29560 = G__29577;
continue;
} else {
var vec__29311_29580 = cljs.core.first(seq__29269_29569__$1);
var k_29581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29311_29580,(0),null);
var v_29582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29311_29580,(1),null);
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_29581,v_29582);


var G__29589 = cljs.core.next(seq__29269_29569__$1);
var G__29590 = null;
var G__29592 = (0);
var G__29594 = (0);
seq__29269_29557 = G__29589;
chunk__29270_29558 = G__29590;
count__29271_29559 = G__29592;
i__29272_29560 = G__29594;
continue;
}
} else {
}
}
break;
}

return elem;
}
} else {
return null;
}
}));

(crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"style","style",-496642736))){
crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,v);
} else {
var v_29600__$1 = ((crate.binding.binding_QMARK_(v))?(function (){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value(v);
})()
:v);
elem.setAttribute(cljs.core.name(k),v_29600__$1);
}

return elem;
}));

(crate.compiler.dom_attr.cljs$lang$maxFixedArity = 3);

/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function crate$compiler$normalize_map_attrs(map_attrs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29353){
var vec__29354 = p__29353;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29354,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29354,(1),null);
if(v === true){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name(n)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
 * Ensure a tag vector is of the form [tag-name attrs content].
 */
crate.compiler.normalize_element = (function crate$compiler$normalize_element(p__29361){
var vec__29362 = p__29361;
var seq__29363 = cljs.core.seq(vec__29362);
var first__29364 = cljs.core.first(seq__29363);
var seq__29363__$1 = cljs.core.next(seq__29363);
var tag = first__29364;
var content = seq__29363__$1;
if((!((((tag instanceof cljs.core.Keyword)) || ((((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))))))){
throw (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+" is not a valid tag name.");
} else {
}

var vec__29366 = cljs.core.re_matches(crate.compiler.re_tag,cljs.core.name(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29366,(0),null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29366,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29366,(2),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29366,(3),null);
var vec__29369 = (function (){var vec__29372 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(tag__$1,/:/);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29372,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29372,(1),null);
var ns_xmlns = (function (){var G__29376 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(nsp);
return (crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1(G__29376) : crate.compiler.xmlns.call(null,G__29376));
})();
if(cljs.core.truth_(t)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5162__auto__ = ns_xmlns;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return nsp;
}
})(),t], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(0),null);
var tag__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(1),null);
var tag_attrs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29358_SHARP_){
return (!((cljs.core.second(p1__29358_SHARP_) == null)));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5162__auto__ = id;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return null;
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null)], null)));
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_attrs,crate.compiler.normalize_map_attrs(map_attrs)], 0)),cljs.core.next(content)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function crate$compiler$parse_content(elem,content){
var attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(attrs)){
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);

return cljs.core.rest(content);
} else {
return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.compiler.elem_factory = (function crate$compiler$elem_factory(tag_def){
var bindings_orig_val__29406 = crate.compiler.bindings;
var bindings_temp_val__29407 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
(crate.compiler.bindings = bindings_temp_val__29407);

try{var vec__29409 = crate.compiler.normalize_element(tag_def);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29409,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29409,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29409,(2),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29409,(3),null);
var elem = crate.compiler.create_elem(nsp,tag);
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);

crate.compiler.as_content(elem,content);

crate.compiler.handle_bindings(cljs.core.deref(crate.compiler.bindings),elem);

return elem;
}finally {(crate.compiler.bindings = bindings_orig_val__29406);
}});
/**
 * Add an optional attribute argument to a function that returns a vector tag.
 */
crate.compiler.add_optional_attrs = (function crate$compiler$add_optional_attrs(func){
return (function() { 
var G__29624__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__29416 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__29417 = cljs.core.seq(vec__29416);
var first__29418 = cljs.core.first(seq__29417);
var seq__29417__$1 = cljs.core.next(seq__29417);
var tag = first__29418;
var body = seq__29417__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__29624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29629__i = 0, G__29629__a = new Array(arguments.length -  0);
while (G__29629__i < G__29629__a.length) {G__29629__a[G__29629__i] = arguments[G__29629__i + 0]; ++G__29629__i;}
  args = new cljs.core.IndexedSeq(G__29629__a,0,null);
} 
return G__29624__delegate.call(this,args);};
G__29624.cljs$lang$maxFixedArity = 0;
G__29624.cljs$lang$applyTo = (function (arglist__29631){
var args = cljs.core.seq(arglist__29631);
return G__29624__delegate(args);
});
G__29624.cljs$core$IFn$_invoke$arity$variadic = G__29624__delegate;
return G__29624;
})()
;
});

//# sourceMappingURL=crate.compiler.js.map
