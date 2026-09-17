goog.provide('teg_online.utils.bootstrap');
teg_online.utils.bootstrap.find_container = (function teg_online$utils$bootstrap$find_container(selector){
var or__5162__auto__ = document.querySelector(selector);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return document.body;
}
});
teg_online.utils.bootstrap.on_click = (function teg_online$utils$bootstrap$on_click(element,callback){
var G__73725 = element;
G__73725.addEventListener("click",callback);

return G__73725;
});
teg_online.utils.bootstrap.on_input = (function teg_online$utils$bootstrap$on_input(element,callback){
var G__73730 = element;
G__73730.addEventListener("input",callback);

return G__73730;
});
teg_online.utils.bootstrap.on_keypress = (function teg_online$utils$bootstrap$on_keypress(element,keycode,callback){
var G__73733 = element;
G__73733.addEventListener("keypress",(function (evt){
var kc = (function (){var or__5162__auto__ = evt.keyCode;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return evt.which;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kc,keycode)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}));

return G__73733;
});
if((typeof teg_online !== 'undefined') && (typeof teg_online.utils !== 'undefined') && (typeof teg_online.utils.bootstrap !== 'undefined') && (typeof teg_online.utils.bootstrap.current_modal !== 'undefined')){
} else {
teg_online.utils.bootstrap.current_modal = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
teg_online.utils.bootstrap.make_modal = (function teg_online$utils$bootstrap$make_modal(var_args){
var args__5903__auto__ = [];
var len__5897__auto___73996 = arguments.length;
var i__5898__auto___73997 = (0);
while(true){
if((i__5898__auto___73997 < len__5897__auto___73996)){
args__5903__auto__.push((arguments[i__5898__auto___73997]));

var G__73998 = (i__5898__auto___73997 + (1));
i__5898__auto___73997 = G__73998;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic = (function (p__73740){
var map__73743 = p__73740;
var map__73743__$1 = cljs.core.__destructure_map(map__73743);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73743__$1,new cljs.core.Keyword(null,"header","header",119441134));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73743__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73743__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.fade","div.modal.fade",-327881909),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",338877510),(-1),new cljs.core.Keyword(null,"role","role",-736691072),"dialog"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog.modal-dialog-centered.modal-lg.modal-dialog-scrollable","div.modal-dialog.modal-dialog-centered.modal-lg.modal-dialog-scrollable",393759248),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"document"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),(cljs.core.truth_(header)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),header], null):null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),body], null):null),(cljs.core.truth_(footer)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),footer], null):null)], null)], null)], null)], 0));
}));

(teg_online.utils.bootstrap.make_modal.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(teg_online.utils.bootstrap.make_modal.cljs$lang$applyTo = (function (seq73734){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73734));
}));

teg_online.utils.bootstrap.close_modal_btn = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-close","button.btn-close",-594363279),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-dismiss","data-bs-dismiss",-572315973),"modal",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close"], null)], null);
teg_online.utils.bootstrap.accept_modal_btn = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-lg","button.btn.btn-primary.btn-lg",613853517),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-dismiss","data-bs-dismiss",-572315973),"modal",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Accept"], null),"Aceptar"], null);
teg_online.utils.bootstrap.cancel_modal_btn = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-secondary.btn-lg","button.btn.btn-secondary.btn-lg",-1973099630),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-dismiss","data-bs-dismiss",-572315973),"modal",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Cancel"], null),"Cancelar"], null);
teg_online.utils.bootstrap.hide_modals = (function teg_online$utils$bootstrap$hide_modals(){
var temp__5825__auto__ = cljs.core.deref(teg_online.utils.bootstrap.current_modal);
if(cljs.core.truth_(temp__5825__auto__)){
var map__73747 = temp__5825__auto__;
var map__73747__$1 = cljs.core.__destructure_map(map__73747);
var modal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73747__$1,new cljs.core.Keyword(null,"modal","modal",-1031880850));
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73747__$1,new cljs.core.Keyword(null,"ready","ready",1086465795));
cljs.core.reset_BANG_(teg_online.utils.bootstrap.current_modal,null);

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(ready,(function (){
return modal.hide();
}),true);
} else {
return null;
}
});
teg_online.utils.bootstrap.hide_modal = (function teg_online$utils$bootstrap$hide_modal(modal){
var temp__5825__auto__ = bootstrap.Modal.getInstance(modal);
if(cljs.core.truth_(temp__5825__auto__)){
var bs_modal = temp__5825__auto__;
return bs_modal.hide();
} else {
return null;
}
});
teg_online.utils.bootstrap.on_modal_keypress_enter = (function teg_online$utils$bootstrap$on_modal_keypress_enter(modal,callback){
return teg_online.utils.bootstrap.on_keypress(modal,(13),(function (){
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(modal) : callback.call(null,modal));

return teg_online.utils.bootstrap.hide_modal(modal);
}));
});
teg_online.utils.bootstrap.on_modal_shown = (function teg_online$utils$bootstrap$on_modal_shown(modal,callback){
var G__73752 = modal;
G__73752.addEventListener("shown.bs.modal",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,modal));

return G__73752;
});
teg_online.utils.bootstrap.on_modal_hidden = (function teg_online$utils$bootstrap$on_modal_hidden(modal,callback){
var G__73754 = modal;
G__73754.addEventListener("hidden.bs.modal",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,modal));

return G__73754;
});
teg_online.utils.bootstrap.show_modal = (function teg_online$utils$bootstrap$show_modal(var_args){
var G__73757 = arguments.length;
switch (G__73757) {
case 1:
return teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1 = (function (modal){
return teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$2(modal,cljs.core.PersistentArrayMap.EMPTY);
}));

(teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$2 = (function (modal,options){
teg_online.utils.bootstrap.hide_modals();

var result = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var container = teg_online.utils.bootstrap.find_container("#modal-dialogs");
var html_modal = modal;
var bs_modal = (new bootstrap.Modal(html_modal,cljs.core.clj__GT_js(options)));
var ready_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var current = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal","modal",-1031880850),bs_modal,new cljs.core.Keyword(null,"ready","ready",1086465795),ready_chan], null);
cljs.core.reset_BANG_(teg_online.utils.bootstrap.current_modal,current);

container.appendChild(html_modal);

bs_modal.show();

var G__73762_74009 = html_modal;
teg_online.utils.bootstrap.on_modal_shown(G__73762_74009,(function (){
return cljs.core.async.close_BANG_(ready_chan);
}));

teg_online.utils.bootstrap.on_modal_hidden(G__73762_74009,(function (){
html_modal.remove();

cljs.core.compare_and_set_BANG_(teg_online.utils.bootstrap.current_modal,current,null);

return cljs.core.async.close_BANG_(result);
}));


return result;
}));

(teg_online.utils.bootstrap.show_modal.cljs$lang$maxFixedArity = 2);

teg_online.utils.bootstrap.alert = (function teg_online$utils$bootstrap$alert(var_args){
var args__5903__auto__ = [];
var len__5897__auto___74014 = arguments.length;
var i__5898__auto___74015 = (0);
while(true){
if((i__5898__auto___74015 < len__5897__auto___74014)){
args__5903__auto__.push((arguments[i__5898__auto___74015]));

var G__74016 = (i__5898__auto___74015 + (1));
i__5898__auto___74015 = G__74016;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return teg_online.utils.bootstrap.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(teg_online.utils.bootstrap.alert.cljs$core$IFn$_invoke$arity$variadic = (function (title,message){
return teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1(teg_online.utils.bootstrap.on_modal_keypress_enter(teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-exclamation-circle","i.fas.fa-exclamation-circle",645323953)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ms-2","span.ms-2",-2096588323),title], null)], null),(new cljs.core.List(null,teg_online.utils.bootstrap.close_modal_btn,null,(1),null)),(2),null)),new cljs.core.Keyword(null,"body","body",-2049205669),(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),message], null):null),new cljs.core.Keyword(null,"footer","footer",1606445390),teg_online.utils.bootstrap.accept_modal_btn], 0)),teg_online.utils.bootstrap.hide_modal));
}));

(teg_online.utils.bootstrap.alert.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(teg_online.utils.bootstrap.alert.cljs$lang$applyTo = (function (seq73763){
var G__73764 = cljs.core.first(seq73763);
var seq73763__$1 = cljs.core.next(seq73763);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73764,seq73763__$1);
}));

teg_online.utils.bootstrap.confirm = (function teg_online$utils$bootstrap$confirm(var_args){
var args__5903__auto__ = [];
var len__5897__auto___74023 = arguments.length;
var i__5898__auto___74025 = (0);
while(true){
if((i__5898__auto___74025 < len__5897__auto___74023)){
args__5903__auto__.push((arguments[i__5898__auto___74025]));

var G__74026 = (i__5898__auto___74025 + (1));
i__5898__auto___74025 = G__74026;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return teg_online.utils.bootstrap.confirm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(teg_online.utils.bootstrap.confirm.cljs$core$IFn$_invoke$arity$variadic = (function (title,message){
var c__18139__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18140__auto__ = (function (){var switch__18007__auto__ = (function (state_73804){
var state_val_73805 = (state_73804[(1)]);
if((state_val_73805 === (1))){
var inst_73769 = (state_73804[(7)]);
var inst_73772 = (state_73804[(8)]);
var inst_73769__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var inst_73770 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.utils.bootstrap.accept_modal_btn], 0));
var inst_73771 = (function (){var result = inst_73769__$1;
return (function (){
return cljs.core.reset_BANG_(result,true);
});
})();
var inst_73772__$1 = teg_online.utils.bootstrap.on_click(inst_73770,inst_73771);
var inst_73773 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.utils.bootstrap.cancel_modal_btn], 0));
var inst_73774 = (function (){var result = inst_73769__$1;
var yes_btn = inst_73772__$1;
return (function (){
return cljs.core.reset_BANG_(result,false);
});
})();
var inst_73775 = teg_online.utils.bootstrap.on_click(inst_73773,inst_73774);
var inst_73776 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73777 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73778 = [new cljs.core.Keyword(null,"i.fas.fa-question-circle","i.fas.fa-question-circle",-954596902)];
var inst_73779 = (new cljs.core.PersistentVector(null,1,(5),inst_73777,inst_73778,null));
var inst_73780 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73781 = [new cljs.core.Keyword(null,"span.ms-2","span.ms-2",-2096588323),title];
var inst_73782 = (new cljs.core.PersistentVector(null,2,(5),inst_73780,inst_73781,null));
var inst_73783 = [new cljs.core.Keyword(null,"h2","h2",-372662728),inst_73779,inst_73782];
var inst_73784 = (new cljs.core.PersistentVector(null,3,(5),inst_73776,inst_73783,null));
var inst_73785 = (new cljs.core.List(null,teg_online.utils.bootstrap.close_modal_btn,null,(1),null));
var inst_73786 = (new cljs.core.List(null,inst_73784,inst_73785,(2),null));
var state_73804__$1 = (function (){var statearr_73806 = state_73804;
(statearr_73806[(7)] = inst_73769__$1);

(statearr_73806[(8)] = inst_73772__$1);

(statearr_73806[(9)] = inst_73775);

(statearr_73806[(10)] = inst_73786);

return statearr_73806;
})();
if(cljs.core.truth_(message)){
var statearr_73807_74029 = state_73804__$1;
(statearr_73807_74029[(1)] = (3));

} else {
var statearr_73808_74030 = state_73804__$1;
(statearr_73808_74030[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73805 === (2))){
var inst_73769 = (state_73804[(7)]);
var inst_73801 = (state_73804[(2)]);
var inst_73802 = cljs.core.deref(inst_73769);
var state_73804__$1 = (function (){var statearr_73809 = state_73804;
(statearr_73809[(11)] = inst_73801);

return statearr_73809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73804__$1,inst_73802);
} else {
if((state_val_73805 === (3))){
var inst_73788 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73789 = [new cljs.core.Keyword(null,"h3","h3",2067611163),message];
var inst_73790 = (new cljs.core.PersistentVector(null,2,(5),inst_73788,inst_73789,null));
var state_73804__$1 = state_73804;
var statearr_73814_74031 = state_73804__$1;
(statearr_73814_74031[(2)] = inst_73790);

(statearr_73814_74031[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73805 === (4))){
var state_73804__$1 = state_73804;
var statearr_73815_74036 = state_73804__$1;
(statearr_73815_74036[(2)] = null);

(statearr_73815_74036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73805 === (5))){
var inst_73775 = (state_73804[(9)]);
var inst_73772 = (state_73804[(8)]);
var inst_73786 = (state_73804[(10)]);
var inst_73769 = (state_73804[(7)]);
var inst_73793 = (state_73804[(2)]);
var inst_73794 = (new cljs.core.List(null,inst_73775,null,(1),null));
var inst_73795 = (new cljs.core.List(null,inst_73772,inst_73794,(2),null));
var inst_73796 = teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),inst_73786,new cljs.core.Keyword(null,"body","body",-2049205669),inst_73793,new cljs.core.Keyword(null,"footer","footer",1606445390),inst_73795], 0));
var inst_73797 = (function (){var result = inst_73769;
var yes_btn = inst_73772;
var no_btn = inst_73775;
return (function (modal){
cljs.core.reset_BANG_(result,true);

return teg_online.utils.bootstrap.hide_modal(modal);
});
})();
var inst_73798 = teg_online.utils.bootstrap.on_modal_keypress_enter(inst_73796,inst_73797);
var inst_73799 = teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1(inst_73798);
var state_73804__$1 = state_73804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73804__$1,(2),inst_73799);
} else {
return null;
}
}
}
}
}
});
return (function() {
var teg_online$utils$bootstrap$state_machine__18008__auto__ = null;
var teg_online$utils$bootstrap$state_machine__18008__auto____0 = (function (){
var statearr_73824 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73824[(0)] = teg_online$utils$bootstrap$state_machine__18008__auto__);

(statearr_73824[(1)] = (1));

return statearr_73824;
});
var teg_online$utils$bootstrap$state_machine__18008__auto____1 = (function (state_73804){
while(true){
var ret_value__18009__auto__ = (function (){try{while(true){
var result__18010__auto__ = switch__18007__auto__(state_73804);
if(cljs.core.keyword_identical_QMARK_(result__18010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18010__auto__;
}
break;
}
}catch (e73825){var ex__18011__auto__ = e73825;
var statearr_73826_74043 = state_73804;
(statearr_73826_74043[(2)] = ex__18011__auto__);


if(cljs.core.seq((state_73804[(4)]))){
var statearr_73827_74044 = state_73804;
(statearr_73827_74044[(1)] = cljs.core.first((state_73804[(4)])));

} else {
throw ex__18011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74048 = state_73804;
state_73804 = G__74048;
continue;
} else {
return ret_value__18009__auto__;
}
break;
}
});
teg_online$utils$bootstrap$state_machine__18008__auto__ = function(state_73804){
switch(arguments.length){
case 0:
return teg_online$utils$bootstrap$state_machine__18008__auto____0.call(this);
case 1:
return teg_online$utils$bootstrap$state_machine__18008__auto____1.call(this,state_73804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$utils$bootstrap$state_machine__18008__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$utils$bootstrap$state_machine__18008__auto____0;
teg_online$utils$bootstrap$state_machine__18008__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$utils$bootstrap$state_machine__18008__auto____1;
return teg_online$utils$bootstrap$state_machine__18008__auto__;
})()
})();
var state__18141__auto__ = (function (){var statearr_73828 = f__18140__auto__();
(statearr_73828[(6)] = c__18139__auto__);

return statearr_73828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18141__auto__);
}));

return c__18139__auto__;
}));

(teg_online.utils.bootstrap.confirm.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(teg_online.utils.bootstrap.confirm.cljs$lang$applyTo = (function (seq73767){
var G__73768 = cljs.core.first(seq73767);
var seq73767__$1 = cljs.core.next(seq73767);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73768,seq73767__$1);
}));

teg_online.utils.bootstrap.prompt = (function teg_online$utils$bootstrap$prompt(var_args){
var args__5903__auto__ = [];
var len__5897__auto___74049 = arguments.length;
var i__5898__auto___74050 = (0);
while(true){
if((i__5898__auto___74050 < len__5897__auto___74049)){
args__5903__auto__.push((arguments[i__5898__auto___74050]));

var G__74052 = (i__5898__auto___74050 + (1));
i__5898__auto___74050 = G__74052;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return teg_online.utils.bootstrap.prompt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(teg_online.utils.bootstrap.prompt.cljs$core$IFn$_invoke$arity$variadic = (function (title,message,p__73832){
var vec__73833 = p__73832;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73833,(0),null);
var c__18139__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18140__auto__ = (function (){var switch__18007__auto__ = (function (state_73883){
var state_val_73884 = (state_73883[(1)]);
if((state_val_73884 === (1))){
var inst_73836 = (state_73883[(7)]);
var inst_73836__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var inst_73837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73838 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_73839 = ["text",default$];
var inst_73840 = cljs.core.PersistentHashMap.fromArrays(inst_73838,inst_73839);
var inst_73841 = [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),inst_73840];
var inst_73842 = (new cljs.core.PersistentVector(null,2,(5),inst_73837,inst_73841,null));
var inst_73843 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_73842], 0));
var inst_73844 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.utils.bootstrap.accept_modal_btn], 0));
var inst_73845 = (function (){var result = inst_73836__$1;
var input = inst_73843;
return (function (){
return cljs.core.reset_BANG_(result,input.value);
});
})();
var inst_73846 = teg_online.utils.bootstrap.on_click(inst_73844,inst_73845);
var inst_73847 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.utils.bootstrap.cancel_modal_btn], 0));
var inst_73848 = (function (){var result = inst_73836__$1;
var input = inst_73843;
var yes_btn = inst_73846;
return (function (){
return cljs.core.reset_BANG_(result,null);
});
})();
var inst_73849 = teg_online.utils.bootstrap.on_click(inst_73847,inst_73848);
var inst_73850 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73852 = [new cljs.core.Keyword(null,"i.fas.fa-question-circle","i.fas.fa-question-circle",-954596902)];
var inst_73853 = (new cljs.core.PersistentVector(null,1,(5),inst_73851,inst_73852,null));
var inst_73854 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73855 = [new cljs.core.Keyword(null,"span.ms-2","span.ms-2",-2096588323),title];
var inst_73856 = (new cljs.core.PersistentVector(null,2,(5),inst_73854,inst_73855,null));
var inst_73857 = [new cljs.core.Keyword(null,"h2","h2",-372662728),inst_73853,inst_73856];
var inst_73858 = (new cljs.core.PersistentVector(null,3,(5),inst_73850,inst_73857,null));
var inst_73859 = (new cljs.core.List(null,teg_online.utils.bootstrap.close_modal_btn,null,(1),null));
var inst_73860 = (new cljs.core.List(null,inst_73858,inst_73859,(2),null));
var inst_73861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73862 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73863 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73864 = [new cljs.core.Keyword(null,"h3","h3",2067611163),message];
var inst_73865 = (new cljs.core.PersistentVector(null,2,(5),inst_73863,inst_73864,null));
var inst_73866 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_73865];
var inst_73867 = (new cljs.core.PersistentVector(null,2,(5),inst_73862,inst_73866,null));
var inst_73868 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73869 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_73843];
var inst_73870 = (new cljs.core.PersistentVector(null,2,(5),inst_73868,inst_73869,null));
var inst_73871 = [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),inst_73867,inst_73870];
var inst_73872 = (new cljs.core.PersistentVector(null,3,(5),inst_73861,inst_73871,null));
var inst_73873 = (new cljs.core.List(null,inst_73849,null,(1),null));
var inst_73874 = (new cljs.core.List(null,inst_73846,inst_73873,(2),null));
var inst_73875 = teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),inst_73860,new cljs.core.Keyword(null,"body","body",-2049205669),inst_73872,new cljs.core.Keyword(null,"footer","footer",1606445390),inst_73874], 0));
var inst_73876 = (function (){var result = inst_73836__$1;
var input = inst_73843;
var yes_btn = inst_73846;
var no_btn = inst_73849;
return (function (modal){
cljs.core.reset_BANG_(result,input.value);

return teg_online.utils.bootstrap.hide_modal(modal);
});
})();
var inst_73877 = teg_online.utils.bootstrap.on_modal_keypress_enter(inst_73875,inst_73876);
var inst_73878 = teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1(inst_73877);
var state_73883__$1 = (function (){var statearr_73901 = state_73883;
(statearr_73901[(7)] = inst_73836__$1);

return statearr_73901;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73883__$1,(2),inst_73878);
} else {
if((state_val_73884 === (2))){
var inst_73836 = (state_73883[(7)]);
var inst_73880 = (state_73883[(2)]);
var inst_73881 = cljs.core.deref(inst_73836);
var state_73883__$1 = (function (){var statearr_73902 = state_73883;
(statearr_73902[(8)] = inst_73880);

return statearr_73902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73883__$1,inst_73881);
} else {
return null;
}
}
});
return (function() {
var teg_online$utils$bootstrap$state_machine__18008__auto__ = null;
var teg_online$utils$bootstrap$state_machine__18008__auto____0 = (function (){
var statearr_73903 = [null,null,null,null,null,null,null,null,null];
(statearr_73903[(0)] = teg_online$utils$bootstrap$state_machine__18008__auto__);

(statearr_73903[(1)] = (1));

return statearr_73903;
});
var teg_online$utils$bootstrap$state_machine__18008__auto____1 = (function (state_73883){
while(true){
var ret_value__18009__auto__ = (function (){try{while(true){
var result__18010__auto__ = switch__18007__auto__(state_73883);
if(cljs.core.keyword_identical_QMARK_(result__18010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18010__auto__;
}
break;
}
}catch (e73904){var ex__18011__auto__ = e73904;
var statearr_73905_74063 = state_73883;
(statearr_73905_74063[(2)] = ex__18011__auto__);


if(cljs.core.seq((state_73883[(4)]))){
var statearr_73908_74064 = state_73883;
(statearr_73908_74064[(1)] = cljs.core.first((state_73883[(4)])));

} else {
throw ex__18011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74067 = state_73883;
state_73883 = G__74067;
continue;
} else {
return ret_value__18009__auto__;
}
break;
}
});
teg_online$utils$bootstrap$state_machine__18008__auto__ = function(state_73883){
switch(arguments.length){
case 0:
return teg_online$utils$bootstrap$state_machine__18008__auto____0.call(this);
case 1:
return teg_online$utils$bootstrap$state_machine__18008__auto____1.call(this,state_73883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$utils$bootstrap$state_machine__18008__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$utils$bootstrap$state_machine__18008__auto____0;
teg_online$utils$bootstrap$state_machine__18008__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$utils$bootstrap$state_machine__18008__auto____1;
return teg_online$utils$bootstrap$state_machine__18008__auto__;
})()
})();
var state__18141__auto__ = (function (){var statearr_73911 = f__18140__auto__();
(statearr_73911[(6)] = c__18139__auto__);

return statearr_73911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18141__auto__);
}));

return c__18139__auto__;
}));

(teg_online.utils.bootstrap.prompt.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(teg_online.utils.bootstrap.prompt.cljs$lang$applyTo = (function (seq73829){
var G__73830 = cljs.core.first(seq73829);
var seq73829__$1 = cljs.core.next(seq73829);
var G__73831 = cljs.core.first(seq73829__$1);
var seq73829__$2 = cljs.core.next(seq73829__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73830,G__73831,seq73829__$2);
}));

teg_online.utils.bootstrap.make_toast = (function teg_online$utils$bootstrap$make_toast(var_args){
var args__5903__auto__ = [];
var len__5897__auto___74071 = arguments.length;
var i__5898__auto___74072 = (0);
while(true){
if((i__5898__auto___74072 < len__5897__auto___74071)){
args__5903__auto__.push((arguments[i__5898__auto___74072]));

var G__74073 = (i__5898__auto___74072 + (1));
i__5898__auto___74072 = G__74073;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return teg_online.utils.bootstrap.make_toast.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(teg_online.utils.bootstrap.make_toast.cljs$core$IFn$_invoke$arity$variadic = (function (p__73931){
var map__73932 = p__73931;
var map__73932__$1 = cljs.core.__destructure_map(map__73932);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73932__$1,new cljs.core.Keyword(null,"header","header",119441134));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73932__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toast","div.toast",-70813866),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"alert",new cljs.core.Keyword(null,"aria-live","aria-live",-467182502),"assertive",new cljs.core.Keyword(null,"aria-atomic","aria-atomic",1666973952),"true"], null),(cljs.core.truth_(header)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toast-header","div.toast-header",-2066642663),header], null):null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toast-body","div.toast-body",-326997608),body], null):null)], null)], 0));
}));

(teg_online.utils.bootstrap.make_toast.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(teg_online.utils.bootstrap.make_toast.cljs$lang$applyTo = (function (seq73924){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73924));
}));

teg_online.utils.bootstrap.close_toast_btn = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-close","button.btn-close",-594363279),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-dismiss","data-bs-dismiss",-572315973),"toast",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close"], null)], null);
teg_online.utils.bootstrap.on_toast_shown = (function teg_online$utils$bootstrap$on_toast_shown(toast,callback){
var G__73937 = toast;
G__73937.addEventListener("shown.bs.toast",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,toast));

return G__73937;
});
teg_online.utils.bootstrap.on_toast_hidden = (function teg_online$utils$bootstrap$on_toast_hidden(toast,callback){
var G__73940 = toast;
G__73940.addEventListener("hidden.bs.toast",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,toast));

return G__73940;
});
teg_online.utils.bootstrap.show_toast = (function teg_online$utils$bootstrap$show_toast(var_args){
var G__73947 = arguments.length;
switch (G__73947) {
case 1:
return teg_online.utils.bootstrap.show_toast.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return teg_online.utils.bootstrap.show_toast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.utils.bootstrap.show_toast.cljs$core$IFn$_invoke$arity$1 = (function (toast){
return teg_online.utils.bootstrap.show_toast.cljs$core$IFn$_invoke$arity$2(toast,cljs.core.PersistentArrayMap.EMPTY);
}));

(teg_online.utils.bootstrap.show_toast.cljs$core$IFn$_invoke$arity$2 = (function (toast,options){
var result = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var container = teg_online.utils.bootstrap.find_container("#toast-container");
var html_toast = toast;
var bs_toast = (new bootstrap.Toast(toast,cljs.core.clj__GT_js(options)));
container.appendChild(html_toast);

bs_toast.show();

var G__73951_74077 = html_toast;
teg_online.utils.bootstrap.on_toast_shown(G__73951_74077,(function (){
return cljs.core.async.close_BANG_(result);
}));

teg_online.utils.bootstrap.on_toast_hidden(G__73951_74077,(function (){
return html_toast.remove();
}));


return result;
}));

(teg_online.utils.bootstrap.show_toast.cljs$lang$maxFixedArity = 2);

teg_online.utils.bootstrap.show_toast_msg = (function teg_online$utils$bootstrap$show_toast_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___74079 = arguments.length;
var i__5898__auto___74080 = (0);
while(true){
if((i__5898__auto___74080 < len__5897__auto___74079)){
args__5903__auto__.push((arguments[i__5898__auto___74080]));

var G__74081 = (i__5898__auto___74080 + (1));
i__5898__auto___74080 = G__74081;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return teg_online.utils.bootstrap.show_toast_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(teg_online.utils.bootstrap.show_toast_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,p__73968){
var vec__73969 = p__73968;
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73969,(0),null);
return teg_online.utils.bootstrap.show_toast.cljs$core$IFn$_invoke$arity$1(teg_online.utils.bootstrap.make_toast.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),(new cljs.core.List(null,(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.me-3","span.me-3",-1781943083),icon], null):null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.me-auto","strong.me-auto",1754009893),msg], null),(new cljs.core.List(null,teg_online.utils.bootstrap.close_toast_btn,null,(1),null)),(2),null)),(3),null))], 0)));
}));

(teg_online.utils.bootstrap.show_toast_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(teg_online.utils.bootstrap.show_toast_msg.cljs$lang$applyTo = (function (seq73953){
var G__73954 = cljs.core.first(seq73953);
var seq73953__$1 = cljs.core.next(seq73953);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73954,seq73953__$1);
}));


//# sourceMappingURL=teg_online.utils.bootstrap.js.map
