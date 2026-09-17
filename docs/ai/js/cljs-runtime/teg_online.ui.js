goog.provide('teg_online.ui');
if((typeof teg_online !== 'undefined') && (typeof teg_online.ui !== 'undefined') && (typeof teg_online.ui.world !== 'undefined')){
} else {
teg_online.ui.world = (new World(document.querySelector("#board-canvas")));
}
teg_online.ui.resize_board = (function teg_online$ui$resize_board(){
var board_panel = document.querySelector("#board-panel");
var top_bar = document.querySelector("#top-bar");
var new_height = teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("calc(100% - %1px)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var target_obj_173560 = top_bar;
var _STAR_runtime_state_STAR__orig_val__173562 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__173563 = oops.state.prepare_state(target_obj_173560,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__173563);

try{var next_obj_173561 = ((oops.core.validate_object_access_dynamically(target_obj_173560,(0),"offsetHeight",true,true,false))?(target_obj_173560["offsetHeight"]):null);
return next_obj_173561;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__173562);
}})()], 0));
var target_obj_173564 = board_panel;
var _STAR_runtime_state_STAR__orig_val__173567 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__173568 = oops.state.prepare_state(target_obj_173564,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__173568);

try{var parent_obj_173565_178684 = (function (){var next_obj_173566 = ((oops.core.validate_object_access_dynamically(target_obj_173564,(0),"style",true,true,false))?(target_obj_173564["style"]):null);
return next_obj_173566;
})();
if(oops.core.validate_object_access_dynamically(parent_obj_173565_178684,(0),"height",true,true,true)){
(parent_obj_173565_178684["height"] = new_height);
} else {
}

return target_obj_173564;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__173567);
}});
window.addEventListener("resize",teg_online.ui.resize_board);
teg_online.ui.resize_board();
teg_online.ui.is_my_turn_QMARK_ = (function teg_online$ui$is_my_turn_QMARK_(user,game){
return (((!(teg_online.game.game_over_QMARK_(game)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(teg_online.game.get_player(game,teg_online.game.get_current_player(game))))));
});
teg_online.ui.show_toast = (function teg_online$ui$show_toast(msg){
return teg_online.utils.bootstrap.show_toast.cljs$core$IFn$_invoke$arity$2(teg_online.utils.bootstrap.make_toast.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),msg], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.me-auto","span.me-auto",32406433)], null),(new cljs.core.List(null,teg_online.utils.bootstrap.close_toast_btn,null,(1),null)),(2),null)),(3),null))], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delay","delay",-574225219),(2500)], null));
});
teg_online.ui.show_add_army_dialog = (function teg_online$ui$show_add_army_dialog(var_args){
var args__5903__auto__ = [];
var len__5897__auto___178685 = arguments.length;
var i__5898__auto___178686 = (0);
while(true){
if((i__5898__auto___178686 < len__5897__auto___178685)){
args__5903__auto__.push((arguments[i__5898__auto___178686]));

var G__178687 = (i__5898__auto___178686 + (1));
i__5898__auto___178686 = G__178687;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return teg_online.ui.show_add_army_dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(teg_online.ui.show_add_army_dialog.cljs$core$IFn$_invoke$arity$variadic = (function (p__173571){
var map__173572 = p__173571;
var map__173572__$1 = cljs.core.__destructure_map(map__173572);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__173572__$1,new cljs.core.Keyword(null,"title","title",636505583),null);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__173572__$1,new cljs.core.Keyword(null,"message","message",-406056002),null);
var min_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__173572__$1,new cljs.core.Keyword(null,"min-value","min-value",-1119123315));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__173572__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__173572__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170),(0));
var show_cancel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__173572__$1,new cljs.core.Keyword(null,"show-cancel?","show-cancel?",-1794435018),true);
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_173717){
var state_val_173718 = (state_173717[(1)]);
if((state_val_173718 === (7))){
var state_173717__$1 = state_173717;
var statearr_173719_178688 = state_173717__$1;
(statearr_173719_178688[(2)] = null);

(statearr_173719_178688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173718 === (1))){
var inst_173573 = (state_173717[(7)]);
var inst_173575 = (state_173717[(8)]);
var inst_173579 = (state_173717[(9)]);
var inst_173591 = (state_173717[(10)]);
var inst_173603 = (state_173717[(11)]);
var inst_173615 = (state_173717[(12)]);
var inst_173627 = (state_173717[(13)]);
var inst_173630 = (state_173717[(14)]);
var inst_173633 = (state_173717[(15)]);
var inst_173573__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_value);
var inst_173574 = (function (){var result_value = inst_173573__$1;
return (function (p1__173569_SHARP_){
return (((p1__173569_SHARP_ >= min_value)) && ((p1__173569_SHARP_ <= max_value)));
});
})();
var inst_173575__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(default_value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"validator","validator",-1966190681),inst_173574], 0));
var inst_173576 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173577 = [new cljs.core.Keyword(null,"span.text-black-50","span.text-black-50",962019126)];
var inst_173578 = (new cljs.core.PersistentVector(null,1,(5),inst_173576,inst_173577,null));
var inst_173579__$1 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_173578], 0));
var inst_173580 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173581 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_173582 = ["button"];
var inst_173583 = cljs.core.PersistentHashMap.fromArrays(inst_173581,inst_173582);
var inst_173584 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173585 = [new cljs.core.Keyword(null,"i.fas.fa-minus.pe-1","i.fas.fa-minus.pe-1",626894741)];
var inst_173586 = (new cljs.core.PersistentVector(null,1,(5),inst_173584,inst_173585,null));
var inst_173587 = [new cljs.core.Keyword(null,"button.btn.btn-danger.btn-lg","button.btn.btn-danger.btn-lg",1370084090),inst_173583,inst_173586,"10"];
var inst_173588 = (new cljs.core.PersistentVector(null,4,(5),inst_173580,inst_173587,null));
var inst_173589 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_173588], 0));
var inst_173590 = (function (){var result_value = inst_173573__$1;
var counter_value = inst_173575__$1;
var counter_span = inst_173579__$1;
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(counter_value,cljs.core._,(10));
});
})();
var inst_173591__$1 = teg_online.utils.bootstrap.on_click(inst_173589,inst_173590);
var inst_173592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173593 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_173594 = ["button"];
var inst_173595 = cljs.core.PersistentHashMap.fromArrays(inst_173593,inst_173594);
var inst_173596 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173597 = [new cljs.core.Keyword(null,"i.fas.fa-minus","i.fas.fa-minus",1931739889)];
var inst_173598 = (new cljs.core.PersistentVector(null,1,(5),inst_173596,inst_173597,null));
var inst_173599 = [new cljs.core.Keyword(null,"button.btn.btn-danger.btn-lg","button.btn.btn-danger.btn-lg",1370084090),inst_173595,inst_173598];
var inst_173600 = (new cljs.core.PersistentVector(null,3,(5),inst_173592,inst_173599,null));
var inst_173601 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_173600], 0));
var inst_173602 = (function (){var result_value = inst_173573__$1;
var counter_value = inst_173575__$1;
var counter_span = inst_173579__$1;
var minus_10_btn = inst_173591__$1;
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter_value,cljs.core.dec);
});
})();
var inst_173603__$1 = teg_online.utils.bootstrap.on_click(inst_173601,inst_173602);
var inst_173604 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173605 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_173606 = ["button"];
var inst_173607 = cljs.core.PersistentHashMap.fromArrays(inst_173605,inst_173606);
var inst_173608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173609 = [new cljs.core.Keyword(null,"i.fas.fa-plus","i.fas.fa-plus",-1040906949)];
var inst_173610 = (new cljs.core.PersistentVector(null,1,(5),inst_173608,inst_173609,null));
var inst_173611 = [new cljs.core.Keyword(null,"button.btn.btn-success.btn-lg","button.btn.btn-success.btn-lg",1223491391),inst_173607,inst_173610];
var inst_173612 = (new cljs.core.PersistentVector(null,3,(5),inst_173604,inst_173611,null));
var inst_173613 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_173612], 0));
var inst_173614 = (function (){var result_value = inst_173573__$1;
var counter_value = inst_173575__$1;
var counter_span = inst_173579__$1;
var minus_10_btn = inst_173591__$1;
var minus_1_btn = inst_173603__$1;
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter_value,cljs.core.inc);
});
})();
var inst_173615__$1 = teg_online.utils.bootstrap.on_click(inst_173613,inst_173614);
var inst_173616 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173617 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_173618 = ["button"];
var inst_173619 = cljs.core.PersistentHashMap.fromArrays(inst_173617,inst_173618);
var inst_173620 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173621 = [new cljs.core.Keyword(null,"i.fas.fa-plus.pe-1","i.fas.fa-plus.pe-1",-82457172)];
var inst_173622 = (new cljs.core.PersistentVector(null,1,(5),inst_173620,inst_173621,null));
var inst_173623 = [new cljs.core.Keyword(null,"button.btn.btn-success.btn-lg","button.btn.btn-success.btn-lg",1223491391),inst_173619,inst_173622,"10"];
var inst_173624 = (new cljs.core.PersistentVector(null,4,(5),inst_173616,inst_173623,null));
var inst_173625 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_173624], 0));
var inst_173626 = (function (){var result_value = inst_173573__$1;
var counter_value = inst_173575__$1;
var counter_span = inst_173579__$1;
var minus_10_btn = inst_173591__$1;
var minus_1_btn = inst_173603__$1;
var plus_1_btn = inst_173615__$1;
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(counter_value,cljs.core._PLUS_,(10));
});
})();
var inst_173627__$1 = teg_online.utils.bootstrap.on_click(inst_173625,inst_173626);
var inst_173628 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.utils.bootstrap.accept_modal_btn], 0));
var inst_173629 = (function (){var result_value = inst_173573__$1;
var counter_value = inst_173575__$1;
var counter_span = inst_173579__$1;
var minus_10_btn = inst_173591__$1;
var minus_1_btn = inst_173603__$1;
var plus_1_btn = inst_173615__$1;
var plus_10_btn = inst_173627__$1;
return (function (){
return cljs.core.reset_BANG_(result_value,cljs.core.deref(counter_value));
});
})();
var inst_173630__$1 = teg_online.utils.bootstrap.on_click(inst_173628,inst_173629);
var inst_173631 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.utils.bootstrap.cancel_modal_btn], 0));
var inst_173632 = (function (){var result_value = inst_173573__$1;
var counter_value = inst_173575__$1;
var counter_span = inst_173579__$1;
var minus_10_btn = inst_173591__$1;
var minus_1_btn = inst_173603__$1;
var plus_1_btn = inst_173615__$1;
var plus_10_btn = inst_173627__$1;
var accept_button = inst_173630__$1;
return (function (){
return cljs.core.reset_BANG_(result_value,default_value);
});
})();
var inst_173633__$1 = teg_online.utils.bootstrap.on_click(inst_173631,inst_173632);
var inst_173634 = (function (){var counter_value = inst_173575__$1;
var accept_button = inst_173630__$1;
var counter_span = inst_173579__$1;
var plus_1_btn = inst_173615__$1;
var minus_1_btn = inst_173603__$1;
var result_value = inst_173573__$1;
var minus_10_btn = inst_173591__$1;
var plus_10_btn = inst_173627__$1;
var cancel_button = inst_173633__$1;
return (function (_,___$1,___$2,val){
var target_obj_173720_178689 = minus_10_btn;
var _STAR_runtime_state_STAR__orig_val__173722_178690 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__173723_178691 = oops.state.prepare_state(target_obj_173720_178689,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__173723_178691);

try{var parent_obj_173721_178692 = target_obj_173720_178689;
if(oops.core.validate_object_access_dynamically(parent_obj_173721_178692,(0),"disabled",true,true,true)){
(parent_obj_173721_178692["disabled"] = ((val - (9)) <= min_value));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__173722_178690);
}
var target_obj_173724_178693 = minus_1_btn;
var _STAR_runtime_state_STAR__orig_val__173726_178694 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__173727_178695 = oops.state.prepare_state(target_obj_173724_178693,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__173727_178695);

try{var parent_obj_173725_178696 = target_obj_173724_178693;
if(oops.core.validate_object_access_dynamically(parent_obj_173725_178696,(0),"disabled",true,true,true)){
(parent_obj_173725_178696["disabled"] = (val <= min_value));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__173726_178694);
}
var target_obj_173728_178697 = plus_1_btn;
var _STAR_runtime_state_STAR__orig_val__173730_178698 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__173731_178699 = oops.state.prepare_state(target_obj_173728_178697,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__173731_178699);

try{var parent_obj_173729_178700 = target_obj_173728_178697;
if(oops.core.validate_object_access_dynamically(parent_obj_173729_178700,(0),"disabled",true,true,true)){
(parent_obj_173729_178700["disabled"] = (val >= max_value));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__173730_178698);
}
var target_obj_173732_178701 = plus_10_btn;
var _STAR_runtime_state_STAR__orig_val__173734_178702 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__173735_178703 = oops.state.prepare_state(target_obj_173732_178701,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__173735_178703);

try{var parent_obj_173733_178704 = target_obj_173732_178701;
if(oops.core.validate_object_access_dynamically(parent_obj_173733_178704,(0),"disabled",true,true,true)){
(parent_obj_173733_178704["disabled"] = ((val + (9)) >= max_value));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__173734_178702);
}
var target_obj_173736 = counter_span;
var _STAR_runtime_state_STAR__orig_val__173738 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__173739 = oops.state.prepare_state(target_obj_173736,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__173739);

try{var parent_obj_173737_178705 = target_obj_173736;
if(oops.core.validate_object_access_dynamically(parent_obj_173737_178705,(0),"innerText",true,true,true)){
(parent_obj_173737_178705["innerText"] = teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("%1%2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((val < (0)))?"-":"+"),Math.abs(val)], 0)));
} else {
}

return target_obj_173736;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__173738);
}});
})();
var inst_173635 = cljs.core.add_watch(inst_173575__$1,new cljs.core.Keyword(null,"update","update",1045576396),inst_173634);
var inst_173636 = cljs.core.reset_BANG_(inst_173575__$1,default_value);
var inst_173637 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173638 = [new cljs.core.Keyword(null,"h2","h2",-372662728),title];
var inst_173639 = (new cljs.core.PersistentVector(null,2,(5),inst_173637,inst_173638,null));
var inst_173640 = (new cljs.core.List(null,teg_online.utils.bootstrap.close_modal_btn,null,(1),null));
var inst_173641 = (new cljs.core.List(null,inst_173639,inst_173640,(2),null));
var inst_173642 = cljs.core.PersistentVector.EMPTY_NODE;
var state_173717__$1 = (function (){var statearr_173740 = state_173717;
(statearr_173740[(7)] = inst_173573__$1);

(statearr_173740[(8)] = inst_173575__$1);

(statearr_173740[(9)] = inst_173579__$1);

(statearr_173740[(10)] = inst_173591__$1);

(statearr_173740[(11)] = inst_173603__$1);

(statearr_173740[(12)] = inst_173615__$1);

(statearr_173740[(13)] = inst_173627__$1);

(statearr_173740[(14)] = inst_173630__$1);

(statearr_173740[(15)] = inst_173633__$1);

(statearr_173740[(16)] = inst_173635);

(statearr_173740[(17)] = inst_173636);

(statearr_173740[(18)] = inst_173641);

(statearr_173740[(19)] = inst_173642);

return statearr_173740;
})();
if(cljs.core.truth_(message)){
var statearr_173741_178706 = state_173717__$1;
(statearr_173741_178706[(1)] = (3));

} else {
var statearr_173742_178707 = state_173717__$1;
(statearr_173742_178707[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173718 === (4))){
var state_173717__$1 = state_173717;
var statearr_173743_178708 = state_173717__$1;
(statearr_173743_178708[(2)] = null);

(statearr_173743_178708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173718 === (13))){
var inst_173630 = (state_173717[(14)]);
var state_173717__$1 = state_173717;
var statearr_173744_178709 = state_173717__$1;
(statearr_173744_178709[(2)] = inst_173630);

(statearr_173744_178709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173718 === (6))){
var inst_173591 = (state_173717[(10)]);
var inst_173666 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173667 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173668 = [new cljs.core.Keyword(null,"div.d-grid","div.d-grid",-1953151057),inst_173591];
var inst_173669 = (new cljs.core.PersistentVector(null,2,(5),inst_173667,inst_173668,null));
var inst_173670 = [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),inst_173669];
var inst_173671 = (new cljs.core.PersistentVector(null,2,(5),inst_173666,inst_173670,null));
var state_173717__$1 = state_173717;
var statearr_173745_178710 = state_173717__$1;
(statearr_173745_178710[(2)] = inst_173671);

(statearr_173745_178710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173718 === (3))){
var inst_173644 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173645 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173646 = [new cljs.core.Keyword(null,"h3","h3",2067611163),message];
var inst_173647 = (new cljs.core.PersistentVector(null,2,(5),inst_173645,inst_173646,null));
var inst_173648 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_173647];
var inst_173649 = (new cljs.core.PersistentVector(null,2,(5),inst_173644,inst_173648,null));
var state_173717__$1 = state_173717;
var statearr_173746_178711 = state_173717__$1;
(statearr_173746_178711[(2)] = inst_173649);

(statearr_173746_178711[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173718 === (12))){
var inst_173633 = (state_173717[(15)]);
var inst_173630 = (state_173717[(14)]);
var inst_173704 = (new cljs.core.List(null,inst_173633,null,(1),null));
var inst_173705 = (new cljs.core.List(null,inst_173630,inst_173704,(2),null));
var state_173717__$1 = state_173717;
var statearr_173747_178712 = state_173717__$1;
(statearr_173747_178712[(2)] = inst_173705);

(statearr_173747_178712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173718 === (2))){
var inst_173573 = (state_173717[(7)]);
var inst_173714 = (state_173717[(2)]);
var inst_173715 = cljs.core.deref(inst_173573);
var state_173717__$1 = (function (){var statearr_173748 = state_173717;
(statearr_173748[(20)] = inst_173714);

return statearr_173748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_173717__$1,inst_173715);
} else {
if((state_val_173718 === (11))){
var inst_173674 = (state_173717[(21)]);
var inst_173680 = (state_173717[(22)]);
var inst_173686 = (state_173717[(23)]);
var inst_173662 = (state_173717[(24)]);
var inst_173652 = (state_173717[(25)]);
var inst_173661 = (state_173717[(26)]);
var inst_173642 = (state_173717[(19)]);
var inst_173698 = (state_173717[(2)]);
var inst_173699 = [new cljs.core.Keyword(null,"div.row.py-3","div.row.py-3",140465608),inst_173674,inst_173680,inst_173686,inst_173698];
var inst_173700 = (new cljs.core.PersistentVector(null,5,(5),inst_173662,inst_173699,null));
var inst_173701 = [new cljs.core.Keyword(null,"div.container","div.container",72419955),inst_173652,inst_173661,inst_173700];
var inst_173702 = (new cljs.core.PersistentVector(null,4,(5),inst_173642,inst_173701,null));
var state_173717__$1 = (function (){var statearr_173749 = state_173717;
(statearr_173749[(27)] = inst_173702);

return statearr_173749;
})();
if(cljs.core.truth_(show_cancel_QMARK_)){
var statearr_173750_178713 = state_173717__$1;
(statearr_173750_178713[(1)] = (12));

} else {
var statearr_173751_178714 = state_173717__$1;
(statearr_173751_178714[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173718 === (9))){
var inst_173627 = (state_173717[(13)]);
var inst_173690 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173691 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173692 = [new cljs.core.Keyword(null,"div.d-grid","div.d-grid",-1953151057),inst_173627];
var inst_173693 = (new cljs.core.PersistentVector(null,2,(5),inst_173691,inst_173692,null));
var inst_173694 = [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),inst_173693];
var inst_173695 = (new cljs.core.PersistentVector(null,2,(5),inst_173690,inst_173694,null));
var state_173717__$1 = state_173717;
var statearr_173752_178715 = state_173717__$1;
(statearr_173752_178715[(2)] = inst_173695);

(statearr_173752_178715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173718 === (5))){
var inst_173579 = (state_173717[(9)]);
var inst_173652 = (state_173717[(2)]);
var inst_173653 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173654 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173655 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173656 = [new cljs.core.Keyword(null,"i.fas.fa-shield-alt.pe-3","i.fas.fa-shield-alt.pe-3",-758986401)];
var inst_173657 = (new cljs.core.PersistentVector(null,1,(5),inst_173655,inst_173656,null));
var inst_173658 = [new cljs.core.Keyword(null,"div.col-12.text-center.fa-4x","div.col-12.text-center.fa-4x",157823348),inst_173657,inst_173579];
var inst_173659 = (new cljs.core.PersistentVector(null,3,(5),inst_173654,inst_173658,null));
var inst_173660 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_173659];
var inst_173661 = (new cljs.core.PersistentVector(null,2,(5),inst_173653,inst_173660,null));
var inst_173662 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173663 = (max_value - min_value);
var inst_173664 = (inst_173663 >= (10));
var state_173717__$1 = (function (){var statearr_173753 = state_173717;
(statearr_173753[(25)] = inst_173652);

(statearr_173753[(26)] = inst_173661);

(statearr_173753[(24)] = inst_173662);

return statearr_173753;
})();
if(cljs.core.truth_(inst_173664)){
var statearr_173754_178716 = state_173717__$1;
(statearr_173754_178716[(1)] = (6));

} else {
var statearr_173755_178717 = state_173717__$1;
(statearr_173755_178717[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173718 === (14))){
var inst_173641 = (state_173717[(18)]);
var inst_173702 = (state_173717[(27)]);
var inst_173575 = (state_173717[(8)]);
var inst_173630 = (state_173717[(14)]);
var inst_173579 = (state_173717[(9)]);
var inst_173615 = (state_173717[(12)]);
var inst_173603 = (state_173717[(11)]);
var inst_173573 = (state_173717[(7)]);
var inst_173591 = (state_173717[(10)]);
var inst_173627 = (state_173717[(13)]);
var inst_173633 = (state_173717[(15)]);
var inst_173708 = (state_173717[(2)]);
var inst_173709 = teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),inst_173641,new cljs.core.Keyword(null,"body","body",-2049205669),inst_173702,new cljs.core.Keyword(null,"footer","footer",1606445390),inst_173708], 0));
var inst_173710 = (function (){var counter_value = inst_173575;
var accept_button = inst_173630;
var counter_span = inst_173579;
var plus_1_btn = inst_173615;
var minus_1_btn = inst_173603;
var result_value = inst_173573;
var minus_10_btn = inst_173591;
var plus_10_btn = inst_173627;
var cancel_button = inst_173633;
return (function (modal){
cljs.core.reset_BANG_(result_value,cljs.core.deref(counter_value));

return teg_online.utils.bootstrap.hide_modal(modal);
});
})();
var inst_173711 = teg_online.utils.bootstrap.on_modal_keypress_enter(inst_173709,inst_173710);
var inst_173712 = teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1(inst_173711);
var state_173717__$1 = state_173717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_173717__$1,(2),inst_173712);
} else {
if((state_val_173718 === (10))){
var state_173717__$1 = state_173717;
var statearr_173756_178718 = state_173717__$1;
(statearr_173756_178718[(2)] = null);

(statearr_173756_178718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173718 === (8))){
var inst_173603 = (state_173717[(11)]);
var inst_173615 = (state_173717[(12)]);
var inst_173674 = (state_173717[(2)]);
var inst_173675 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173676 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173677 = [new cljs.core.Keyword(null,"div.d-grid","div.d-grid",-1953151057),inst_173603];
var inst_173678 = (new cljs.core.PersistentVector(null,2,(5),inst_173676,inst_173677,null));
var inst_173679 = [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),inst_173678];
var inst_173680 = (new cljs.core.PersistentVector(null,2,(5),inst_173675,inst_173679,null));
var inst_173681 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173682 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173683 = [new cljs.core.Keyword(null,"div.d-grid","div.d-grid",-1953151057),inst_173615];
var inst_173684 = (new cljs.core.PersistentVector(null,2,(5),inst_173682,inst_173683,null));
var inst_173685 = [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),inst_173684];
var inst_173686 = (new cljs.core.PersistentVector(null,2,(5),inst_173681,inst_173685,null));
var inst_173687 = (max_value - min_value);
var inst_173688 = (inst_173687 >= (10));
var state_173717__$1 = (function (){var statearr_173757 = state_173717;
(statearr_173757[(21)] = inst_173674);

(statearr_173757[(22)] = inst_173680);

(statearr_173757[(23)] = inst_173686);

return statearr_173757;
})();
if(cljs.core.truth_(inst_173688)){
var statearr_173758_178719 = state_173717__$1;
(statearr_173758_178719[(1)] = (9));

} else {
var statearr_173759_178720 = state_173717__$1;
(statearr_173759_178720[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$state_machine__18069__auto__ = null;
var teg_online$ui$state_machine__18069__auto____0 = (function (){
var statearr_173760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_173760[(0)] = teg_online$ui$state_machine__18069__auto__);

(statearr_173760[(1)] = (1));

return statearr_173760;
});
var teg_online$ui$state_machine__18069__auto____1 = (function (state_173717){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_173717);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e173761){var ex__18072__auto__ = e173761;
var statearr_173762_178721 = state_173717;
(statearr_173762_178721[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_173717[(4)]))){
var statearr_173763_178722 = state_173717;
(statearr_173763_178722[(1)] = cljs.core.first((state_173717[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__178723 = state_173717;
state_173717 = G__178723;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$state_machine__18069__auto__ = function(state_173717){
switch(arguments.length){
case 0:
return teg_online$ui$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$state_machine__18069__auto____1.call(this,state_173717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$state_machine__18069__auto____0;
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$state_machine__18069__auto____1;
return teg_online$ui$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_173764 = f__19294__auto__();
(statearr_173764[(6)] = c__19293__auto__);

return statearr_173764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
}));

(teg_online.ui.show_add_army_dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(teg_online.ui.show_add_army_dialog.cljs$lang$applyTo = (function (seq173570){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq173570));
}));

teg_online.ui.dice_roll_effect = (function teg_online$ui$dice_roll_effect(dice,imgs){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_173812){
var state_val_173813 = (state_173812[(1)]);
if((state_val_173813 === (7))){
var inst_173773 = (state_173812[(7)]);
var _ = (function (){var statearr_173814 = state_173812;
(statearr_173814[(4)] = cljs.core.cons((9),(state_173812[(4)])));

return statearr_173814;
})();
var ___$1 = (function (){var statearr_173815 = state_173812;
(statearr_173815[(4)] = cljs.core.cons((10),(state_173812[(4)])));

return statearr_173815;
})();
var inst_173791 = oops.core.validate_object_access_dynamically(inst_173773,(0),"src",true,true,true);
var state_173812__$1 = state_173812;
if(inst_173791){
var statearr_173816_178724 = state_173812__$1;
(statearr_173816_178724[(1)] = (11));

} else {
var statearr_173817_178725 = state_173812__$1;
(statearr_173817_178725[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173813 === (1))){
var inst_173765 = (0);
var state_173812__$1 = (function (){var statearr_173818 = state_173812;
(statearr_173818[(8)] = inst_173765);

return statearr_173818;
})();
var statearr_173819_178726 = state_173812__$1;
(statearr_173819_178726[(2)] = null);

(statearr_173819_178726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173813 === (4))){
var inst_173765 = (state_173812[(8)]);
var inst_173773 = (state_173812[(7)]);
var inst_173772 = cljs.core.mod(inst_173765,(6));
var inst_173773__$1 = (dice[inst_173772]);
var inst_173776 = oops.state._STAR_runtime_state_STAR_;
var inst_173777 = (new Error());
var inst_173778 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_173779 = oops.state.prepare_state(inst_173773__$1,inst_173777,inst_173778);
var inst_173780 = (oops.state._STAR_runtime_state_STAR_ = inst_173779);
var state_173812__$1 = (function (){var statearr_173820 = state_173812;
(statearr_173820[(7)] = inst_173773__$1);

(statearr_173820[(9)] = inst_173776);

(statearr_173820[(10)] = inst_173780);

return statearr_173820;
})();
var statearr_173821_178727 = state_173812__$1;
(statearr_173821_178727[(2)] = null);

(statearr_173821_178727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173813 === (13))){
var inst_173773 = (state_173812[(7)]);
var inst_173797 = (state_173812[(2)]);
var _ = (function (){var statearr_173822 = state_173812;
(statearr_173822[(4)] = cljs.core.rest((state_173812[(4)])));

return statearr_173822;
})();
var state_173812__$1 = (function (){var statearr_173823 = state_173812;
(statearr_173823[(11)] = inst_173797);

return statearr_173823;
})();
var statearr_173824_178728 = state_173812__$1;
(statearr_173824_178728[(2)] = inst_173773);

(statearr_173824_178728[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173813 === (6))){
var inst_173808 = (state_173812[(2)]);
var state_173812__$1 = state_173812;
var statearr_173825_178729 = state_173812__$1;
(statearr_173825_178729[(2)] = inst_173808);

(statearr_173825_178729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173813 === (3))){
var inst_173810 = (state_173812[(2)]);
var state_173812__$1 = state_173812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_173812__$1,inst_173810);
} else {
if((state_val_173813 === (12))){
var state_173812__$1 = state_173812;
var statearr_173826_178730 = state_173812__$1;
(statearr_173826_178730[(2)] = null);

(statearr_173826_178730[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173813 === (2))){
var inst_173765 = (state_173812[(8)]);
var inst_173767 = (inst_173765 * (15));
var inst_173768 = (inst_173767 <= (200));
var state_173812__$1 = state_173812;
if(cljs.core.truth_(inst_173768)){
var statearr_173827_178731 = state_173812__$1;
(statearr_173827_178731[(1)] = (4));

} else {
var statearr_173828_178732 = state_173812__$1;
(statearr_173828_178732[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173813 === (11))){
var inst_173773 = (state_173812[(7)]);
var inst_173793 = cljs.core.rand_nth(imgs);
var inst_173794 = (inst_173773["src"] = inst_173793);
var state_173812__$1 = state_173812;
var statearr_173829_178733 = state_173812__$1;
(statearr_173829_178733[(2)] = inst_173794);

(statearr_173829_178733[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173813 === (9))){
var inst_173776 = (state_173812[(9)]);
var _ = (function (){var statearr_173830 = state_173812;
(statearr_173830[(4)] = cljs.core.rest((state_173812[(4)])));

return statearr_173830;
})();
var inst_173782 = (state_173812[(2)]);
var inst_173783 = (oops.state._STAR_runtime_state_STAR_ = inst_173776);
var ___$1 = (function (){var temp__5825__auto__ = (state_173812[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_173812__$1 = (function (){var statearr_173831 = state_173812;
(statearr_173831[(12)] = inst_173783);

return statearr_173831;
})();
var statearr_173832_178734 = state_173812__$1;
(statearr_173832_178734[(2)] = inst_173782);

(statearr_173832_178734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173813 === (5))){
var state_173812__$1 = state_173812;
var statearr_173834_178735 = state_173812__$1;
(statearr_173834_178735[(2)] = null);

(statearr_173834_178735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173813 === (14))){
var inst_173765 = (state_173812[(8)]);
var inst_173803 = (state_173812[(2)]);
var inst_173804 = (inst_173765 + (1));
var inst_173765__$1 = inst_173804;
var state_173812__$1 = (function (){var statearr_173835 = state_173812;
(statearr_173835[(13)] = inst_173803);

(statearr_173835[(8)] = inst_173765__$1);

return statearr_173835;
})();
var statearr_173836_178736 = state_173812__$1;
(statearr_173836_178736[(2)] = null);

(statearr_173836_178736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173813 === (10))){
var _ = (function (){var statearr_173837 = state_173812;
(statearr_173837[(4)] = cljs.core.rest((state_173812[(4)])));

return statearr_173837;
})();
var state_173812__$1 = state_173812;
var ex173833 = (state_173812__$1[(2)]);
var statearr_173838_178737 = state_173812__$1;
(statearr_173838_178737[(5)] = ex173833);


throw ex173833;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173813 === (8))){
var inst_173800 = (state_173812[(2)]);
var inst_173801 = cljs.core.async.timeout((15));
var state_173812__$1 = (function (){var statearr_173839 = state_173812;
(statearr_173839[(14)] = inst_173800);

return statearr_173839;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_173812__$1,(14),inst_173801);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$dice_roll_effect_$_state_machine__18069__auto__ = null;
var teg_online$ui$dice_roll_effect_$_state_machine__18069__auto____0 = (function (){
var statearr_173840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_173840[(0)] = teg_online$ui$dice_roll_effect_$_state_machine__18069__auto__);

(statearr_173840[(1)] = (1));

return statearr_173840;
});
var teg_online$ui$dice_roll_effect_$_state_machine__18069__auto____1 = (function (state_173812){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_173812);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e173841){var ex__18072__auto__ = e173841;
var statearr_173842_178738 = state_173812;
(statearr_173842_178738[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_173812[(4)]))){
var statearr_173843_178739 = state_173812;
(statearr_173843_178739[(1)] = cljs.core.first((state_173812[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__178740 = state_173812;
state_173812 = G__178740;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$dice_roll_effect_$_state_machine__18069__auto__ = function(state_173812){
switch(arguments.length){
case 0:
return teg_online$ui$dice_roll_effect_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$dice_roll_effect_$_state_machine__18069__auto____1.call(this,state_173812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$dice_roll_effect_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$dice_roll_effect_$_state_machine__18069__auto____0;
teg_online$ui$dice_roll_effect_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$dice_roll_effect_$_state_machine__18069__auto____1;
return teg_online$ui$dice_roll_effect_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_173844 = f__19294__auto__();
(statearr_173844[(6)] = c__19293__auto__);

return statearr_173844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.show_attack_dialog = (function teg_online$ui$show_attack_dialog(var_args){
var args__5903__auto__ = [];
var len__5897__auto___178741 = arguments.length;
var i__5898__auto___178742 = (0);
while(true){
if((i__5898__auto___178742 < len__5897__auto___178741)){
args__5903__auto__.push((arguments[i__5898__auto___178742]));

var G__178743 = (i__5898__auto___178742 + (1));
i__5898__auto___178742 = G__178743;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return teg_online.ui.show_attack_dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(teg_online.ui.show_attack_dialog.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__173847){
var map__173848 = p__173847;
var map__173848__$1 = cljs.core.__destructure_map(map__173848);
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__173848__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var defender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__173848__$1,new cljs.core.Keyword(null,"defender","defender",1458963871));
var on_dice_roll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__173848__$1,new cljs.core.Keyword(null,"on-dice-roll","on-dice-roll",1023353328));
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_174032){
var state_val_174033 = (state_174032[(1)]);
if((state_val_174033 === (7))){
var state_174032__$1 = state_174032;
var statearr_174034_178744 = state_174032__$1;
(statearr_174034_178744[(1)] = (9));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174033 === (1))){
var inst_173849 = teg_online.ui_constants.dice_images;
var inst_173850 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173851 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_173852 = ["button"];
var inst_173853 = cljs.core.PersistentHashMap.fromArrays(inst_173851,inst_173852);
var inst_173854 = [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-lg","button.btn.btn-primary.btn-lg",613853517),inst_173853,"Atacar"];
var inst_173855 = (new cljs.core.PersistentVector(null,3,(5),inst_173850,inst_173854,null));
var inst_173856 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_173855], 0));
var inst_173857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173858 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_173859 = ["button"];
var inst_173860 = cljs.core.PersistentHashMap.fromArrays(inst_173858,inst_173859);
var inst_173861 = [new cljs.core.Keyword(null,"button.btn.btn-secondary.btn-lg","button.btn.btn-secondary.btn-lg",-1973099630),inst_173860,"Finalizar"];
var inst_173862 = (new cljs.core.PersistentVector(null,3,(5),inst_173857,inst_173861,null));
var inst_173863 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_173862], 0));
var inst_173864 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173865 = [new cljs.core.Keyword(null,"span","span",1394872991)];
var inst_173866 = (new cljs.core.PersistentVector(null,1,(5),inst_173864,inst_173865,null));
var inst_173867 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_173866], 0));
var inst_173868 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173869 = [new cljs.core.Keyword(null,"span","span",1394872991)];
var inst_173870 = (new cljs.core.PersistentVector(null,1,(5),inst_173868,inst_173869,null));
var inst_173871 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_173870], 0));
var inst_173872 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173873 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173875 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173876 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173877 = [attacker,new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_173878 = (new cljs.core.PersistentVector(null,2,(5),inst_173876,inst_173877,null));
var inst_173879 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(teg_online.board.countries,inst_173878);
var inst_173880 = [new cljs.core.Keyword(null,"h1.text-truncate","h1.text-truncate",-1810338654),inst_173879];
var inst_173881 = (new cljs.core.PersistentVector(null,2,(5),inst_173875,inst_173880,null));
var inst_173882 = [new cljs.core.Keyword(null,"div.col-6.text-center","div.col-6.text-center",-1909306389),inst_173881];
var inst_173883 = (new cljs.core.PersistentVector(null,2,(5),inst_173874,inst_173882,null));
var inst_173884 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173885 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173887 = [defender,new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_173888 = (new cljs.core.PersistentVector(null,2,(5),inst_173886,inst_173887,null));
var inst_173889 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(teg_online.board.countries,inst_173888);
var inst_173890 = [new cljs.core.Keyword(null,"h1.text-truncate","h1.text-truncate",-1810338654),inst_173889];
var inst_173891 = (new cljs.core.PersistentVector(null,2,(5),inst_173885,inst_173890,null));
var inst_173892 = [new cljs.core.Keyword(null,"div.col-6.text-center","div.col-6.text-center",-1909306389),inst_173891];
var inst_173893 = (new cljs.core.PersistentVector(null,2,(5),inst_173884,inst_173892,null));
var inst_173894 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_173883,inst_173893];
var inst_173895 = (new cljs.core.PersistentVector(null,3,(5),inst_173873,inst_173894,null));
var inst_173896 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173897 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173898 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173899 = [new cljs.core.Keyword(null,"i.fas.fa-shield-alt.pe-3","i.fas.fa-shield-alt.pe-3",-758986401)];
var inst_173900 = (new cljs.core.PersistentVector(null,1,(5),inst_173898,inst_173899,null));
var inst_173901 = [new cljs.core.Keyword(null,"div.col-6.text-center.fa-2x","div.col-6.text-center.fa-2x",1486074793),inst_173900,inst_173867];
var inst_173902 = (new cljs.core.PersistentVector(null,3,(5),inst_173897,inst_173901,null));
var inst_173903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173904 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173905 = [new cljs.core.Keyword(null,"i.fas.fa-shield-alt.pe-3","i.fas.fa-shield-alt.pe-3",-758986401)];
var inst_173906 = (new cljs.core.PersistentVector(null,1,(5),inst_173904,inst_173905,null));
var inst_173907 = [new cljs.core.Keyword(null,"div.col-6.text-center.fa-2x","div.col-6.text-center.fa-2x",1486074793),inst_173906,inst_173871];
var inst_173908 = (new cljs.core.PersistentVector(null,3,(5),inst_173903,inst_173907,null));
var inst_173909 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_173902,inst_173908];
var inst_173910 = (new cljs.core.PersistentVector(null,3,(5),inst_173896,inst_173909,null));
var inst_173911 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173912 = [new cljs.core.Keyword(null,"hr","hr",1377740067)];
var inst_173913 = (new cljs.core.PersistentVector(null,1,(5),inst_173911,inst_173912,null));
var inst_173914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173915 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173916 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173917 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173918 = [new cljs.core.Keyword(null,"src","src",-1651076051)];
var inst_173919 = cljs.core.last(inst_173849);
var inst_173920 = [inst_173919];
var inst_173921 = cljs.core.PersistentHashMap.fromArrays(inst_173918,inst_173920);
var inst_173922 = [new cljs.core.Keyword(null,"img.dice","img.dice",695259526),inst_173921];
var inst_173923 = (new cljs.core.PersistentVector(null,2,(5),inst_173917,inst_173922,null));
var inst_173924 = [new cljs.core.Keyword(null,"div.col-6.text-center","div.col-6.text-center",-1909306389),inst_173923];
var inst_173925 = (new cljs.core.PersistentVector(null,2,(5),inst_173916,inst_173924,null));
var inst_173926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173928 = [new cljs.core.Keyword(null,"src","src",-1651076051)];
var inst_173929 = cljs.core.last(inst_173849);
var inst_173930 = [inst_173929];
var inst_173931 = cljs.core.PersistentHashMap.fromArrays(inst_173928,inst_173930);
var inst_173932 = [new cljs.core.Keyword(null,"img.dice","img.dice",695259526),inst_173931];
var inst_173933 = (new cljs.core.PersistentVector(null,2,(5),inst_173927,inst_173932,null));
var inst_173934 = [new cljs.core.Keyword(null,"div.col-6.text-center","div.col-6.text-center",-1909306389),inst_173933];
var inst_173935 = (new cljs.core.PersistentVector(null,2,(5),inst_173926,inst_173934,null));
var inst_173936 = [new cljs.core.Keyword(null,"div.row.py-2","div.row.py-2",2048209450),inst_173925,inst_173935];
var inst_173937 = (new cljs.core.PersistentVector(null,3,(5),inst_173915,inst_173936,null));
var inst_173938 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173941 = [new cljs.core.Keyword(null,"src","src",-1651076051)];
var inst_173942 = cljs.core.last(inst_173849);
var inst_173943 = [inst_173942];
var inst_173944 = cljs.core.PersistentHashMap.fromArrays(inst_173941,inst_173943);
var inst_173945 = [new cljs.core.Keyword(null,"img.dice","img.dice",695259526),inst_173944];
var inst_173946 = (new cljs.core.PersistentVector(null,2,(5),inst_173940,inst_173945,null));
var inst_173947 = [new cljs.core.Keyword(null,"div.col-6.text-center","div.col-6.text-center",-1909306389),inst_173946];
var inst_173948 = (new cljs.core.PersistentVector(null,2,(5),inst_173939,inst_173947,null));
var inst_173949 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173950 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173951 = [new cljs.core.Keyword(null,"src","src",-1651076051)];
var inst_173952 = cljs.core.last(inst_173849);
var inst_173953 = [inst_173952];
var inst_173954 = cljs.core.PersistentHashMap.fromArrays(inst_173951,inst_173953);
var inst_173955 = [new cljs.core.Keyword(null,"img.dice","img.dice",695259526),inst_173954];
var inst_173956 = (new cljs.core.PersistentVector(null,2,(5),inst_173950,inst_173955,null));
var inst_173957 = [new cljs.core.Keyword(null,"div.col-6.text-center","div.col-6.text-center",-1909306389),inst_173956];
var inst_173958 = (new cljs.core.PersistentVector(null,2,(5),inst_173949,inst_173957,null));
var inst_173959 = [new cljs.core.Keyword(null,"div.row.py-2","div.row.py-2",2048209450),inst_173948,inst_173958];
var inst_173960 = (new cljs.core.PersistentVector(null,3,(5),inst_173938,inst_173959,null));
var inst_173961 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173962 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173964 = [new cljs.core.Keyword(null,"src","src",-1651076051)];
var inst_173965 = cljs.core.last(inst_173849);
var inst_173966 = [inst_173965];
var inst_173967 = cljs.core.PersistentHashMap.fromArrays(inst_173964,inst_173966);
var inst_173968 = [new cljs.core.Keyword(null,"img.dice","img.dice",695259526),inst_173967];
var inst_173969 = (new cljs.core.PersistentVector(null,2,(5),inst_173963,inst_173968,null));
var inst_173970 = [new cljs.core.Keyword(null,"div.col-6.text-center","div.col-6.text-center",-1909306389),inst_173969];
var inst_173971 = (new cljs.core.PersistentVector(null,2,(5),inst_173962,inst_173970,null));
var inst_173972 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173974 = [new cljs.core.Keyword(null,"src","src",-1651076051)];
var inst_173975 = cljs.core.last(inst_173849);
var inst_173976 = [inst_173975];
var inst_173977 = cljs.core.PersistentHashMap.fromArrays(inst_173974,inst_173976);
var inst_173978 = [new cljs.core.Keyword(null,"img.dice","img.dice",695259526),inst_173977];
var inst_173979 = (new cljs.core.PersistentVector(null,2,(5),inst_173973,inst_173978,null));
var inst_173980 = [new cljs.core.Keyword(null,"div.col-6.text-center","div.col-6.text-center",-1909306389),inst_173979];
var inst_173981 = (new cljs.core.PersistentVector(null,2,(5),inst_173972,inst_173980,null));
var inst_173982 = [new cljs.core.Keyword(null,"div.row.py-2","div.row.py-2",2048209450),inst_173971,inst_173981];
var inst_173983 = (new cljs.core.PersistentVector(null,3,(5),inst_173961,inst_173982,null));
var inst_173984 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_173937,inst_173960,inst_173983];
var inst_173985 = (new cljs.core.PersistentVector(null,4,(5),inst_173914,inst_173984,null));
var inst_173986 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173987 = [new cljs.core.Keyword(null,"hr","hr",1377740067)];
var inst_173988 = (new cljs.core.PersistentVector(null,1,(5),inst_173986,inst_173987,null));
var inst_173989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173990 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173991 = [new cljs.core.Keyword(null,"div.col.d-grid","div.col.d-grid",720657787),inst_173856];
var inst_173992 = (new cljs.core.PersistentVector(null,2,(5),inst_173990,inst_173991,null));
var inst_173993 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_173994 = [new cljs.core.Keyword(null,"div.col.d-grid","div.col.d-grid",720657787),inst_173863];
var inst_173995 = (new cljs.core.PersistentVector(null,2,(5),inst_173993,inst_173994,null));
var inst_173996 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_173992,inst_173995];
var inst_173997 = (new cljs.core.PersistentVector(null,3,(5),inst_173989,inst_173996,null));
var inst_173998 = [new cljs.core.Keyword(null,"div.container","div.container",72419955),inst_173895,inst_173910,inst_173913,inst_173985,inst_173988,inst_173997];
var inst_173999 = (new cljs.core.PersistentVector(null,7,(5),inst_173872,inst_173998,null));
var inst_174000 = teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),teg_online.utils.bootstrap.close_modal_btn,new cljs.core.Keyword(null,"body","body",-2049205669),inst_173999], 0));
var inst_174001 = (function (){var imgs = inst_173849;
var attack_btn = inst_173856;
var finish_btn = inst_173863;
var attacker_army_span = inst_173867;
var defender_army_span = inst_173871;
var modal = inst_174000;
return (function (){
return modal.querySelectorAll(".dice");
});
})();
var inst_174002 = (function (){var imgs = inst_173849;
var attack_btn = inst_173856;
var finish_btn = inst_173863;
var attacker_army_span = inst_173867;
var defender_army_span = inst_173871;
var modal = inst_174000;
var get_dice = inst_174001;
return (function (){
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),get_dice());
});
})();
var inst_174004 = (function (){var imgs = inst_173849;
var attack_btn = inst_173856;
var finish_btn = inst_173863;
var attacker_army_span = inst_173867;
var defender_army_span = inst_173871;
var modal = inst_174000;
var get_dice = inst_174001;
var get_dice_pairs = inst_174002;
return (function() { 
var G__178745__delegate = function (p__174003){
var map__174036 = p__174003;
var map__174036__$1 = cljs.core.__destructure_map(map__174036);
var hide_dice_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__174036__$1,new cljs.core.Keyword(null,"hide-dice?","hide-dice?",328342318));
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var target_obj_174037_178746 = attacker_army_span;
var _STAR_runtime_state_STAR__orig_val__174039_178747 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__174040_178748 = oops.state.prepare_state(target_obj_174037_178746,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__174040_178748);

try{var parent_obj_174038_178749 = target_obj_174037_178746;
if(oops.core.validate_object_access_dynamically(parent_obj_174038_178749,(0),"innerText",true,true,true)){
(parent_obj_174038_178749["innerText"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(teg_online.game.get_army(game,attacker))));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__174039_178747);
}
var target_obj_174041_178750 = defender_army_span;
var _STAR_runtime_state_STAR__orig_val__174043_178751 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__174044_178752 = oops.state.prepare_state(target_obj_174041_178750,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__174044_178752);

try{var parent_obj_174042_178753 = target_obj_174041_178750;
if(oops.core.validate_object_access_dynamically(parent_obj_174042_178753,(0),"innerText",true,true,true)){
(parent_obj_174042_178753["innerText"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(teg_online.game.get_army(game,defender))));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__174043_178751);
}
var vec__174045 = teg_online.game.get_dice_count(game,attacker,defender);
var a_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174045,(0),null);
var d_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174045,(1),null);
var class$ = (cljs.core.truth_(hide_dice_QMARK_)?"d-none":"dice-disabled");
var target_obj_174048_178754 = attack_btn;
var _STAR_runtime_state_STAR__orig_val__174050_178755 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__174051_178756 = oops.state.prepare_state(target_obj_174048_178754,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__174051_178756);

try{var parent_obj_174049_178757 = target_obj_174048_178754;
if(oops.core.validate_object_access_dynamically(parent_obj_174049_178757,(0),"disabled",true,true,true)){
(parent_obj_174049_178757["disabled"] = (((a_count <= (0))) || ((d_count <= (0)))));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__174050_178755);
}
var seq__174052 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,get_dice_pairs()));
var chunk__174053 = null;
var count__174054 = (0);
var i__174055 = (0);
while(true){
if((i__174055 < count__174054)){
var vec__174100 = chunk__174053.cljs$core$IIndexed$_nth$arity$2(null,i__174055);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174100,(0),null);
var vec__174103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174100,(1),null);
var a_die = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174103,(0),null);
var d_die = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174103,(1),null);
if((idx >= a_count)){
(function (){var target_obj_174106 = a_die;
var _STAR_runtime_state_STAR__orig_val__174108 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__174109 = oops.state.prepare_state(target_obj_174106,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__174109);

try{var next_obj_174107 = ((oops.core.validate_object_access_dynamically(target_obj_174106,(0),"classList",true,true,false))?(target_obj_174106["classList"]):null);
return next_obj_174107;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__174108);
}})().add(class$);
} else {
(function (){var target_obj_174110 = a_die;
var _STAR_runtime_state_STAR__orig_val__174112 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__174113 = oops.state.prepare_state(target_obj_174110,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__174113);

try{var next_obj_174111 = ((oops.core.validate_object_access_dynamically(target_obj_174110,(0),"classList",true,true,false))?(target_obj_174110["classList"]):null);
return next_obj_174111;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__174112);
}})().remove(class$);
}

if((idx >= d_count)){
(function (){var target_obj_174114 = d_die;
var _STAR_runtime_state_STAR__orig_val__174116 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__174117 = oops.state.prepare_state(target_obj_174114,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__174117);

try{var next_obj_174115 = ((oops.core.validate_object_access_dynamically(target_obj_174114,(0),"classList",true,true,false))?(target_obj_174114["classList"]):null);
return next_obj_174115;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__174116);
}})().add(class$);
} else {
(function (){var target_obj_174118 = d_die;
var _STAR_runtime_state_STAR__orig_val__174120 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__174121 = oops.state.prepare_state(target_obj_174118,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__174121);

try{var next_obj_174119 = ((oops.core.validate_object_access_dynamically(target_obj_174118,(0),"classList",true,true,false))?(target_obj_174118["classList"]):null);
return next_obj_174119;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__174120);
}})().remove(class$);
}


var G__178758 = seq__174052;
var G__178759 = chunk__174053;
var G__178760 = count__174054;
var G__178761 = (i__174055 + (1));
seq__174052 = G__178758;
chunk__174053 = G__178759;
count__174054 = G__178760;
i__174055 = G__178761;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__174052);
if(temp__5825__auto__){
var seq__174052__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__174052__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__174052__$1);
var G__178762 = cljs.core.chunk_rest(seq__174052__$1);
var G__178763 = c__5694__auto__;
var G__178764 = cljs.core.count(c__5694__auto__);
var G__178765 = (0);
seq__174052 = G__178762;
chunk__174053 = G__178763;
count__174054 = G__178764;
i__174055 = G__178765;
continue;
} else {
var vec__174122 = cljs.core.first(seq__174052__$1);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174122,(0),null);
var vec__174125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174122,(1),null);
var a_die = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174125,(0),null);
var d_die = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174125,(1),null);
if((idx >= a_count)){
(function (){var target_obj_174128 = a_die;
var _STAR_runtime_state_STAR__orig_val__174130 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__174131 = oops.state.prepare_state(target_obj_174128,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__174131);

try{var next_obj_174129 = ((oops.core.validate_object_access_dynamically(target_obj_174128,(0),"classList",true,true,false))?(target_obj_174128["classList"]):null);
return next_obj_174129;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__174130);
}})().add(class$);
} else {
(function (){var target_obj_174132 = a_die;
var _STAR_runtime_state_STAR__orig_val__174134 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__174135 = oops.state.prepare_state(target_obj_174132,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__174135);

try{var next_obj_174133 = ((oops.core.validate_object_access_dynamically(target_obj_174132,(0),"classList",true,true,false))?(target_obj_174132["classList"]):null);
return next_obj_174133;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__174134);
}})().remove(class$);
}

if((idx >= d_count)){
(function (){var target_obj_174136 = d_die;
var _STAR_runtime_state_STAR__orig_val__174138 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__174139 = oops.state.prepare_state(target_obj_174136,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__174139);

try{var next_obj_174137 = ((oops.core.validate_object_access_dynamically(target_obj_174136,(0),"classList",true,true,false))?(target_obj_174136["classList"]):null);
return next_obj_174137;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__174138);
}})().add(class$);
} else {
(function (){var target_obj_174140 = d_die;
var _STAR_runtime_state_STAR__orig_val__174142 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__174143 = oops.state.prepare_state(target_obj_174140,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__174143);

try{var next_obj_174141 = ((oops.core.validate_object_access_dynamically(target_obj_174140,(0),"classList",true,true,false))?(target_obj_174140["classList"]):null);
return next_obj_174141;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__174142);
}})().remove(class$);
}


var G__178766 = cljs.core.next(seq__174052__$1);
var G__178767 = null;
var G__178768 = (0);
var G__178769 = (0);
seq__174052 = G__178766;
chunk__174053 = G__178767;
count__174054 = G__178768;
i__174055 = G__178769;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__178745 = function (var_args){
var p__174003 = null;
if (arguments.length > 0) {
var G__178770__i = 0, G__178770__a = new Array(arguments.length -  0);
while (G__178770__i < G__178770__a.length) {G__178770__a[G__178770__i] = arguments[G__178770__i + 0]; ++G__178770__i;}
  p__174003 = new cljs.core.IndexedSeq(G__178770__a,0,null);
} 
return G__178745__delegate.call(this,p__174003);};
G__178745.cljs$lang$maxFixedArity = 0;
G__178745.cljs$lang$applyTo = (function (arglist__178771){
var p__174003 = cljs.core.seq(arglist__178771);
return G__178745__delegate(p__174003);
});
G__178745.cljs$core$IFn$_invoke$arity$variadic = G__178745__delegate;
return G__178745;
})()
;
})();
var inst_174005 = inst_174004(new cljs.core.Keyword(null,"hide-dice?","hide-dice?",328342318),true);
var inst_174006 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(teg_online.utils.bootstrap.hide_modal,inst_174000);
var inst_174007 = teg_online.utils.bootstrap.on_click(inst_173863,inst_174006);
var inst_174008 = (function (){var defender_army_span = inst_173871;
var attack_btn = inst_173856;
var attacker_army_span = inst_173867;
var finish_btn = inst_173863;
var modal = inst_174000;
var update_modal = inst_174004;
var get_dice_pairs = inst_174002;
var get_dice = inst_174001;
var imgs = inst_173849;
return (function (){
var c__19293__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_174877){
var state_val_174878 = (state_174877[(1)]);
if((state_val_174878 === (121))){
var inst_174545 = (state_174877[(7)]);
var inst_174546 = (state_174877[(8)]);
var inst_174618 = (inst_174545 > inst_174546);
var state_174877__$1 = state_174877;
if(cljs.core.truth_(inst_174618)){
var statearr_174880_178772 = state_174877__$1;
(statearr_174880_178772[(1)] = (124));

} else {
var statearr_174881_178773 = state_174877__$1;
(statearr_174881_178773[(1)] = (125));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (65))){
var inst_174324 = (state_174877[(9)]);
var inst_174463 = oops.state._STAR_runtime_state_STAR_;
var inst_174464 = (new Error());
var inst_174465 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174466 = oops.state.prepare_state(inst_174324,inst_174464,inst_174465);
var inst_174467 = (oops.state._STAR_runtime_state_STAR_ = inst_174466);
var state_174877__$1 = (function (){var statearr_174882 = state_174877;
(statearr_174882[(10)] = inst_174463);

(statearr_174882[(11)] = inst_174467);

return statearr_174882;
})();
var statearr_174883_178774 = state_174877__$1;
(statearr_174883_178774[(2)] = null);

(statearr_174883_178774[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (70))){
var _ = (function (){var statearr_174884 = state_174877;
(statearr_174884[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_174884;
})();
var state_174877__$1 = state_174877;
var ex174879 = (state_174877__$1[(2)]);
var statearr_174885_178775 = state_174877__$1;
(statearr_174885_178775[(5)] = ex174879);


throw ex174879;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (62))){
var state_174877__$1 = state_174877;
var statearr_174886_178776 = state_174877__$1;
(statearr_174886_178776[(2)] = null);

(statearr_174886_178776[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (74))){
var inst_174324 = (state_174877[(9)]);
var _ = (function (){var statearr_174887 = state_174877;
(statearr_174887[(4)] = cljs.core.cons((76),(state_174877[(4)])));

return statearr_174887;
})();
var ___$1 = (function (){var statearr_174888 = state_174877;
(statearr_174888[(4)] = cljs.core.cons((77),(state_174877[(4)])));

return statearr_174888;
})();
var inst_174448 = oops.core.validate_object_access_dynamically(inst_174324,(0),"classList",true,true,false);
var state_174877__$1 = state_174877;
if(inst_174448){
var statearr_174889_178777 = state_174877__$1;
(statearr_174889_178777[(1)] = (78));

} else {
var statearr_174890_178778 = state_174877__$1;
(statearr_174890_178778[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (164))){
var inst_174774 = (state_174877[(12)]);
var _ = (function (){var statearr_174891 = state_174877;
(statearr_174891[(4)] = cljs.core.cons((166),(state_174877[(4)])));

return statearr_174891;
})();
var ___$1 = (function (){var statearr_174892 = state_174877;
(statearr_174892[(4)] = cljs.core.cons((167),(state_174877[(4)])));

return statearr_174892;
})();
var inst_174794 = oops.core.validate_object_access_dynamically(inst_174774,(0),"classList",true,true,false);
var state_174877__$1 = state_174877;
if(inst_174794){
var statearr_174893_178779 = state_174877__$1;
(statearr_174893_178779[(1)] = (168));

} else {
var statearr_174894_178780 = state_174877__$1;
(statearr_174894_178780[(1)] = (169));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (186))){
var inst_174867 = (state_174877[(2)]);
var state_174877__$1 = state_174877;
if(cljs.core.truth_(inst_174867)){
var statearr_174895_178781 = state_174877__$1;
(statearr_174895_178781[(1)] = (187));

} else {
var statearr_174896_178782 = state_174877__$1;
(statearr_174896_178782[(1)] = (188));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (188))){
var state_174877__$1 = state_174877;
var statearr_174898_178783 = state_174877__$1;
(statearr_174898_178783[(2)] = null);

(statearr_174898_178783[(1)] = (189));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (110))){
var inst_174543 = (state_174877[(13)]);
var inst_174573 = (state_174877[(2)]);
var inst_174574 = (inst_174543["src"] = inst_174573);
var state_174877__$1 = state_174877;
var statearr_174899_178784 = state_174877__$1;
(statearr_174899_178784[(2)] = inst_174574);

(statearr_174899_178784[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (130))){
var _ = (function (){var statearr_174900 = state_174877;
(statearr_174900[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_174900;
})();
var state_174877__$1 = state_174877;
var ex174897 = (state_174877__$1[(2)]);
var statearr_174901_178785 = state_174877__$1;
(statearr_174901_178785[(5)] = ex174897);


throw ex174897;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (128))){
var inst_174544 = (state_174877[(14)]);
var inst_174647 = (state_174877[(2)]);
var inst_174648 = inst_174647.add("dice-winner");
var inst_174653 = oops.state._STAR_runtime_state_STAR_;
var inst_174654 = (new Error());
var inst_174655 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174656 = oops.state.prepare_state(inst_174544,inst_174654,inst_174655);
var inst_174657 = (oops.state._STAR_runtime_state_STAR_ = inst_174656);
var state_174877__$1 = (function (){var statearr_174902 = state_174877;
(statearr_174902[(15)] = inst_174648);

(statearr_174902[(16)] = inst_174653);

(statearr_174902[(17)] = inst_174657);

return statearr_174902;
})();
var statearr_174903_178786 = state_174877__$1;
(statearr_174903_178786[(2)] = null);

(statearr_174903_178786[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (153))){
var state_174877__$1 = state_174877;
var statearr_174904_178787 = state_174877__$1;
(statearr_174904_178787[(2)] = null);

(statearr_174904_178787[(1)] = (154));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (7))){
var state_174877__$1 = state_174877;
var statearr_174905_178788 = state_174877__$1;
(statearr_174905_178788[(2)] = null);

(statearr_174905_178788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (59))){
var inst_174385 = cljs.core.last(imgs);
var state_174877__$1 = state_174877;
var statearr_174906_178789 = state_174877__$1;
(statearr_174906_178789[(2)] = inst_174385);

(statearr_174906_178789[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (86))){
var state_174877__$1 = state_174877;
var statearr_174907_178790 = state_174877__$1;
(statearr_174907_178790[(2)] = null);

(statearr_174907_178790[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (154))){
var inst_174732 = (state_174877[(2)]);
var _ = (function (){var statearr_174908 = state_174877;
(statearr_174908[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_174908;
})();
var state_174877__$1 = state_174877;
var statearr_174909_178791 = state_174877__$1;
(statearr_174909_178791[(2)] = inst_174732);

(statearr_174909_178791[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (20))){
var inst_174214 = (state_174877[(2)]);
var _ = (function (){var statearr_174910 = state_174877;
(statearr_174910[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_174910;
})();
var state_174877__$1 = state_174877;
var statearr_174911_178792 = state_174877__$1;
(statearr_174911_178792[(2)] = inst_174214);

(statearr_174911_178792[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (72))){
var state_174877__$1 = state_174877;
var statearr_174912_178793 = state_174877__$1;
(statearr_174912_178793[(2)] = null);

(statearr_174912_178793[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (58))){
var inst_174326 = (state_174877[(18)]);
var inst_174383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(imgs,inst_174326);
var state_174877__$1 = state_174877;
var statearr_174913_178794 = state_174877__$1;
(statearr_174913_178794[(2)] = inst_174383);

(statearr_174913_178794[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (60))){
var inst_174324 = (state_174877[(9)]);
var inst_174387 = (state_174877[(2)]);
var inst_174388 = (inst_174324["src"] = inst_174387);
var state_174877__$1 = state_174877;
var statearr_174914_178795 = state_174877__$1;
(statearr_174914_178795[(2)] = inst_174388);

(statearr_174914_178795[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (175))){
var inst_174807 = (state_174877[(19)]);
var inst_174816 = (state_174877[(20)]);
var inst_174816__$1 = cljs.core.first(inst_174807);
var inst_174821 = oops.state._STAR_runtime_state_STAR_;
var inst_174822 = (new Error());
var inst_174823 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174824 = oops.state.prepare_state(inst_174816__$1,inst_174822,inst_174823);
var inst_174825 = (oops.state._STAR_runtime_state_STAR_ = inst_174824);
var state_174877__$1 = (function (){var statearr_174915 = state_174877;
(statearr_174915[(20)] = inst_174816__$1);

(statearr_174915[(21)] = inst_174821);

(statearr_174915[(22)] = inst_174825);

return statearr_174915;
})();
var statearr_174916_178796 = state_174877__$1;
(statearr_174916_178796[(2)] = null);

(statearr_174916_178796[(1)] = (177));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (27))){
var inst_174234 = (state_174877[(23)]);
var _ = (function (){var statearr_174917 = state_174877;
(statearr_174917[(4)] = cljs.core.cons((29),(state_174877[(4)])));

return statearr_174917;
})();
var ___$1 = (function (){var statearr_174918 = state_174877;
(statearr_174918[(4)] = cljs.core.cons((30),(state_174877[(4)])));

return statearr_174918;
})();
var inst_174255 = oops.core.validate_object_access_dynamically(inst_174234,(0),"classList",true,true,false);
var state_174877__$1 = state_174877;
if(inst_174255){
var statearr_174919_178797 = state_174877__$1;
(statearr_174919_178797[(1)] = (31));

} else {
var statearr_174920_178798 = state_174877__$1;
(statearr_174920_178798[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (1))){
var inst_174148 = (state_174877[(24)]);
var inst_174144 = get_dice();
var inst_174145 = update_modal(new cljs.core.Keyword(null,"hide-dice?","hide-dice?",328342318),true);
var inst_174148__$1 = attack_btn;
var inst_174151 = oops.state._STAR_runtime_state_STAR_;
var inst_174152 = (new Error());
var inst_174153 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174154 = oops.state.prepare_state(inst_174148__$1,inst_174152,inst_174153);
var inst_174155 = (oops.state._STAR_runtime_state_STAR_ = inst_174154);
var state_174877__$1 = (function (){var statearr_174921 = state_174877;
(statearr_174921[(25)] = inst_174144);

(statearr_174921[(26)] = inst_174145);

(statearr_174921[(24)] = inst_174148__$1);

(statearr_174921[(27)] = inst_174151);

(statearr_174921[(28)] = inst_174155);

return statearr_174921;
})();
var statearr_174922_178799 = state_174877__$1;
(statearr_174922_178799[(2)] = null);

(statearr_174922_178799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (69))){
var inst_174404 = (state_174877[(29)]);
var _ = (function (){var statearr_174923 = state_174877;
(statearr_174923[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_174923;
})();
var inst_174410 = (state_174877[(2)]);
var inst_174411 = (oops.state._STAR_runtime_state_STAR_ = inst_174404);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_174924 = state_174877;
(statearr_174924[(30)] = inst_174411);

return statearr_174924;
})();
var statearr_174925_178800 = state_174877__$1;
(statearr_174925_178800[(2)] = inst_174410);

(statearr_174925_178800[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (101))){
var inst_174543 = (state_174877[(13)]);
var _ = (function (){var statearr_174926 = state_174877;
(statearr_174926[(4)] = cljs.core.cons((103),(state_174877[(4)])));

return statearr_174926;
})();
var ___$1 = (function (){var statearr_174927 = state_174877;
(statearr_174927[(4)] = cljs.core.cons((104),(state_174877[(4)])));

return statearr_174927;
})();
var inst_174566 = oops.core.validate_object_access_dynamically(inst_174543,(0),"src",true,true,true);
var state_174877__$1 = state_174877;
if(inst_174566){
var statearr_174928_178801 = state_174877__$1;
(statearr_174928_178801[(1)] = (105));

} else {
var statearr_174929_178802 = state_174877__$1;
(statearr_174929_178802[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (24))){
var inst_174225 = (state_174877[(31)]);
var inst_174229 = cljs.core.chunk_first(inst_174225);
var inst_174230 = cljs.core.chunk_rest(inst_174225);
var inst_174231 = cljs.core.count(inst_174229);
var inst_174180 = inst_174230;
var inst_174181 = inst_174229;
var inst_174182 = inst_174231;
var inst_174183 = (0);
var state_174877__$1 = (function (){var statearr_174930 = state_174877;
(statearr_174930[(32)] = inst_174180);

(statearr_174930[(33)] = inst_174181);

(statearr_174930[(34)] = inst_174182);

(statearr_174930[(35)] = inst_174183);

return statearr_174930;
})();
var statearr_174931_178803 = state_174877__$1;
(statearr_174931_178803[(2)] = null);

(statearr_174931_178803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (102))){
var inst_174544 = (state_174877[(14)]);
var inst_174580 = (state_174877[(2)]);
var inst_174585 = oops.state._STAR_runtime_state_STAR_;
var inst_174586 = (new Error());
var inst_174587 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174588 = oops.state.prepare_state(inst_174544,inst_174586,inst_174587);
var inst_174589 = (oops.state._STAR_runtime_state_STAR_ = inst_174588);
var state_174877__$1 = (function (){var statearr_174932 = state_174877;
(statearr_174932[(36)] = inst_174580);

(statearr_174932[(37)] = inst_174585);

(statearr_174932[(38)] = inst_174589);

return statearr_174932;
})();
var statearr_174933_178804 = state_174877__$1;
(statearr_174933_178804[(2)] = null);

(statearr_174933_178804[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (135))){
var inst_174676 = (state_174877[(2)]);
var inst_174677 = inst_174676.add("dice-loser");
var state_174877__$1 = state_174877;
var statearr_174937_178805 = state_174877__$1;
(statearr_174937_178805[(2)] = inst_174677);

(statearr_174937_178805[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (55))){
var inst_174326 = (state_174877[(18)]);
var state_174877__$1 = state_174877;
if(cljs.core.truth_(inst_174326)){
var statearr_174938_178806 = state_174877__$1;
(statearr_174938_178806[(1)] = (58));

} else {
var statearr_174939_178807 = state_174877__$1;
(statearr_174939_178807[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (165))){
var inst_174769 = (state_174877[(39)]);
var inst_174766 = (state_174877[(40)]);
var inst_174767 = (state_174877[(41)]);
var inst_174768 = (state_174877[(42)]);
var inst_174802 = (state_174877[(2)]);
var inst_174803 = inst_174802.remove("rotate-center");
var inst_174804 = (inst_174769 + (1));
var tmp174934 = inst_174768;
var tmp174935 = inst_174766;
var tmp174936 = inst_174767;
var inst_174766__$1 = tmp174935;
var inst_174767__$1 = tmp174936;
var inst_174768__$1 = tmp174934;
var inst_174769__$1 = inst_174804;
var state_174877__$1 = (function (){var statearr_174940 = state_174877;
(statearr_174940[(43)] = inst_174803);

(statearr_174940[(40)] = inst_174766__$1);

(statearr_174940[(41)] = inst_174767__$1);

(statearr_174940[(42)] = inst_174768__$1);

(statearr_174940[(39)] = inst_174769__$1);

return statearr_174940;
})();
var statearr_174941_178808 = state_174877__$1;
(statearr_174941_178808[(2)] = null);

(statearr_174941_178808[(1)] = (159));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (85))){
var inst_174324 = (state_174877[(9)]);
var inst_174480 = (inst_174324["classList"]);
var state_174877__$1 = state_174877;
var statearr_174942_178809 = state_174877__$1;
(statearr_174942_178809[(2)] = inst_174480);

(statearr_174942_178809[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (39))){
var inst_174306 = (state_174877[(44)]);
var inst_174525 = (state_174877[(45)]);
var inst_174525__$1 = cljs.core.seq(inst_174306);
var state_174877__$1 = (function (){var statearr_174943 = state_174877;
(statearr_174943[(45)] = inst_174525__$1);

return statearr_174943;
})();
if(inst_174525__$1){
var statearr_174944_178810 = state_174877__$1;
(statearr_174944_178810[(1)] = (95));

} else {
var statearr_174945_178811 = state_174877__$1;
(statearr_174945_178811[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (88))){
var inst_174323 = (state_174877[(46)]);
var _ = (function (){var statearr_174946 = state_174877;
(statearr_174946[(4)] = cljs.core.cons((90),(state_174877[(4)])));

return statearr_174946;
})();
var ___$1 = (function (){var statearr_174947 = state_174877;
(statearr_174947[(4)] = cljs.core.cons((91),(state_174877[(4)])));

return statearr_174947;
})();
var inst_174507 = oops.core.validate_object_access_dynamically(inst_174323,(0),"classList",true,true,false);
var state_174877__$1 = state_174877;
if(inst_174507){
var statearr_174948_178812 = state_174877__$1;
(statearr_174948_178812[(1)] = (92));

} else {
var statearr_174949_178813 = state_174877__$1;
(statearr_174949_178813[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (46))){
var state_174877__$1 = state_174877;
var statearr_174950_178814 = state_174877__$1;
(statearr_174950_178814[(2)] = null);

(statearr_174950_178814[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (149))){
var inst_174735 = (state_174877[(2)]);
var inst_174736 = inst_174735.add("dice-loser");
var state_174877__$1 = state_174877;
var statearr_174951_178815 = state_174877__$1;
(statearr_174951_178815[(2)] = inst_174736);

(statearr_174951_178815[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (157))){
var inst_174757 = (state_174877[(2)]);
var inst_174758 = cljs.core.async.timeout((200));
var state_174877__$1 = (function (){var statearr_174953 = state_174877;
(statearr_174953[(47)] = inst_174757);

return statearr_174953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_174877__$1,(158),inst_174758);
} else {
if((state_val_174878 === (4))){
var inst_174151 = (state_174877[(27)]);
var _ = (function (){var statearr_174954 = state_174877;
(statearr_174954[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_174954;
})();
var inst_174157 = (state_174877[(2)]);
var inst_174158 = (oops.state._STAR_runtime_state_STAR_ = inst_174151);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_174955 = state_174877;
(statearr_174955[(48)] = inst_174158);

return statearr_174955;
})();
var statearr_174956_178816 = state_174877__$1;
(statearr_174956_178816[(2)] = inst_174157);

(statearr_174956_178816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (77))){
var _ = (function (){var statearr_174957 = state_174877;
(statearr_174957[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_174957;
})();
var state_174877__$1 = state_174877;
var ex174952 = (state_174877__$1[(2)]);
var statearr_174958_178817 = state_174877__$1;
(statearr_174958_178817[(5)] = ex174952);


throw ex174952;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (106))){
var state_174877__$1 = state_174877;
var statearr_174959_178818 = state_174877__$1;
(statearr_174959_178818[(2)] = null);

(statearr_174959_178818[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (119))){
var inst_174605 = cljs.core.last(imgs);
var state_174877__$1 = state_174877;
var statearr_174961_178819 = state_174877__$1;
(statearr_174961_178819[(2)] = inst_174605);

(statearr_174961_178819[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (95))){
var inst_174525 = (state_174877[(45)]);
var inst_174527 = cljs.core.chunked_seq_QMARK_(inst_174525);
var state_174877__$1 = state_174877;
if(inst_174527){
var statearr_174962_178820 = state_174877__$1;
(statearr_174962_178820[(1)] = (98));

} else {
var statearr_174963_178821 = state_174877__$1;
(statearr_174963_178821[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (144))){
var _ = (function (){var statearr_174965 = state_174877;
(statearr_174965[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_174965;
})();
var state_174877__$1 = state_174877;
var ex174960 = (state_174877__$1[(2)]);
var statearr_174966_178822 = state_174877__$1;
(statearr_174966_178822[(5)] = ex174960);


throw ex174960;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (176))){
var inst_174849 = (state_174877[(2)]);
var state_174877__$1 = state_174877;
var statearr_174967_178823 = state_174877__$1;
(statearr_174967_178823[(2)] = inst_174849);

(statearr_174967_178823[(1)] = (173));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (54))){
var _ = (function (){var statearr_174968 = state_174877;
(statearr_174968[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_174968;
})();
var state_174877__$1 = state_174877;
var ex174964 = (state_174877__$1[(2)]);
var statearr_174969_178824 = state_174877__$1;
(statearr_174969_178824[(5)] = ex174964);


throw ex174964;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (92))){
var inst_174323 = (state_174877[(46)]);
var inst_174509 = (inst_174323["classList"]);
var state_174877__$1 = state_174877;
var statearr_174971_178825 = state_174877__$1;
(statearr_174971_178825[(2)] = inst_174509);

(statearr_174971_178825[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (141))){
var inst_174544 = (state_174877[(14)]);
var _ = (function (){var statearr_174973 = state_174877;
(statearr_174973[(4)] = cljs.core.cons((143),(state_174877[(4)])));

return statearr_174973;
})();
var ___$1 = (function (){var statearr_174974 = state_174877;
(statearr_174974[(4)] = cljs.core.cons((144),(state_174877[(4)])));

return statearr_174974;
})();
var inst_174698 = oops.core.validate_object_access_dynamically(inst_174544,(0),"classList",true,true,false);
var state_174877__$1 = state_174877;
if(inst_174698){
var statearr_174975_178826 = state_174877__$1;
(statearr_174975_178826[(1)] = (145));

} else {
var statearr_174976_178827 = state_174877__$1;
(statearr_174976_178827[(1)] = (146));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (137))){
var _ = (function (){var statearr_174980 = state_174877;
(statearr_174980[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_174980;
})();
var state_174877__$1 = state_174877;
var ex174970 = (state_174877__$1[(2)]);
var statearr_174981_178828 = state_174877__$1;
(statearr_174981_178828[(5)] = ex174970);


throw ex174970;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (104))){
var _ = (function (){var statearr_174982 = state_174877;
(statearr_174982[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_174982;
})();
var state_174877__$1 = state_174877;
var ex174972 = (state_174877__$1[(2)]);
var statearr_174983_178829 = state_174877__$1;
(statearr_174983_178829[(5)] = ex174972);


throw ex174972;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (15))){
var inst_174183 = (state_174877[(35)]);
var inst_174180 = (state_174877[(32)]);
var inst_174181 = (state_174877[(33)]);
var inst_174182 = (state_174877[(34)]);
var inst_174217 = (state_174877[(2)]);
var inst_174218 = inst_174217.remove("dice-winner");
var inst_174219 = inst_174217.remove("dice-loser");
var inst_174220 = inst_174217.remove("dice-disabled");
var inst_174221 = inst_174217.add("rotate-center");
var inst_174222 = (inst_174183 + (1));
var tmp174977 = inst_174180;
var tmp174978 = inst_174181;
var tmp174979 = inst_174182;
var inst_174180__$1 = tmp174977;
var inst_174181__$1 = tmp174978;
var inst_174182__$1 = tmp174979;
var inst_174183__$1 = inst_174222;
var state_174877__$1 = (function (){var statearr_174984 = state_174877;
(statearr_174984[(49)] = inst_174218);

(statearr_174984[(50)] = inst_174219);

(statearr_174984[(51)] = inst_174220);

(statearr_174984[(52)] = inst_174221);

(statearr_174984[(32)] = inst_174180__$1);

(statearr_174984[(33)] = inst_174181__$1);

(statearr_174984[(34)] = inst_174182__$1);

(statearr_174984[(35)] = inst_174183__$1);

return statearr_174984;
})();
var statearr_174985_178830 = state_174877__$1;
(statearr_174985_178830[(2)] = null);

(statearr_174985_178830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (48))){
var inst_174325 = (state_174877[(53)]);
var inst_174349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(imgs,inst_174325);
var state_174877__$1 = state_174877;
var statearr_174986_178831 = state_174877__$1;
(statearr_174986_178831[(2)] = inst_174349);

(statearr_174986_178831[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (50))){
var inst_174323 = (state_174877[(46)]);
var inst_174353 = (state_174877[(2)]);
var inst_174354 = (inst_174323["src"] = inst_174353);
var state_174877__$1 = state_174877;
var statearr_174987_178832 = state_174877__$1;
(statearr_174987_178832[(2)] = inst_174354);

(statearr_174987_178832[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (116))){
var state_174877__$1 = state_174877;
var statearr_174988_178833 = state_174877__$1;
(statearr_174988_178833[(2)] = null);

(statearr_174988_178833[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (75))){
var inst_174456 = (state_174877[(2)]);
var inst_174457 = inst_174456.add("dice-loser");
var state_174877__$1 = state_174877;
var statearr_174989_178834 = state_174877__$1;
(statearr_174989_178834[(2)] = inst_174457);

(statearr_174989_178834[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (159))){
var inst_174769 = (state_174877[(39)]);
var inst_174768 = (state_174877[(42)]);
var inst_174771 = (inst_174769 < inst_174768);
var inst_174772 = inst_174771;
var state_174877__$1 = state_174877;
if(cljs.core.truth_(inst_174772)){
var statearr_174990_178835 = state_174877__$1;
(statearr_174990_178835[(1)] = (161));

} else {
var statearr_174991_178836 = state_174877__$1;
(statearr_174991_178836[(1)] = (162));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (99))){
var inst_174525 = (state_174877[(45)]);
var inst_174295 = (state_174877[(54)]);
var inst_174541 = (state_174877[(55)]);
var inst_174298 = (state_174877[(56)]);
var inst_174543 = (state_174877[(13)]);
var inst_174540 = cljs.core.first(inst_174525);
var inst_174541__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174540,(0),null);
var inst_174542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174540,(1),null);
var inst_174543__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174542,(0),null);
var inst_174544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174542,(1),null);
var inst_174545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174295,inst_174541__$1,null);
var inst_174546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174298,inst_174541__$1,null);
var inst_174551 = oops.state._STAR_runtime_state_STAR_;
var inst_174552 = (new Error());
var inst_174553 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174554 = oops.state.prepare_state(inst_174543__$1,inst_174552,inst_174553);
var inst_174555 = (oops.state._STAR_runtime_state_STAR_ = inst_174554);
var state_174877__$1 = (function (){var statearr_174992 = state_174877;
(statearr_174992[(55)] = inst_174541__$1);

(statearr_174992[(13)] = inst_174543__$1);

(statearr_174992[(14)] = inst_174544);

(statearr_174992[(7)] = inst_174545);

(statearr_174992[(8)] = inst_174546);

(statearr_174992[(57)] = inst_174551);

(statearr_174992[(58)] = inst_174555);

return statearr_174992;
})();
var statearr_174993_178837 = state_174877__$1;
(statearr_174993_178837[(2)] = null);

(statearr_174993_178837[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (21))){
var inst_174225 = (state_174877[(31)]);
var inst_174227 = cljs.core.chunked_seq_QMARK_(inst_174225);
var state_174877__$1 = state_174877;
if(inst_174227){
var statearr_174994_178838 = state_174877__$1;
(statearr_174994_178838[(1)] = (24));

} else {
var statearr_174995_178839 = state_174877__$1;
(statearr_174995_178839[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (31))){
var inst_174234 = (state_174877[(23)]);
var inst_174257 = (inst_174234["classList"]);
var state_174877__$1 = state_174877;
var statearr_174996_178840 = state_174877__$1;
(statearr_174996_178840[(2)] = inst_174257);

(statearr_174996_178840[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (113))){
var inst_174585 = (state_174877[(37)]);
var _ = (function (){var statearr_174997 = state_174877;
(statearr_174997[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_174997;
})();
var inst_174591 = (state_174877[(2)]);
var inst_174592 = (oops.state._STAR_runtime_state_STAR_ = inst_174585);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_174998 = state_174877;
(statearr_174998[(59)] = inst_174592);

return statearr_174998;
})();
var statearr_174999_178841 = state_174877__$1;
(statearr_174999_178841[(2)] = inst_174591);

(statearr_174999_178841[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (32))){
var state_174877__$1 = state_174877;
var statearr_175000_178842 = state_174877__$1;
(statearr_175000_178842[(2)] = null);

(statearr_175000_178842[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (136))){
var inst_174653 = (state_174877[(16)]);
var _ = (function (){var statearr_175001 = state_174877;
(statearr_175001[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175001;
})();
var inst_174659 = (state_174877[(2)]);
var inst_174660 = (oops.state._STAR_runtime_state_STAR_ = inst_174653);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175002 = state_174877;
(statearr_175002[(60)] = inst_174660);

return statearr_175002;
})();
var statearr_175003_178843 = state_174877__$1;
(statearr_175003_178843[(2)] = inst_174659);

(statearr_175003_178843[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (139))){
var state_174877__$1 = state_174877;
var statearr_175004_178844 = state_174877__$1;
(statearr_175004_178844[(2)] = null);

(statearr_175004_178844[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (174))){
var inst_174807 = (state_174877[(19)]);
var inst_174811 = cljs.core.chunk_first(inst_174807);
var inst_174812 = cljs.core.chunk_rest(inst_174807);
var inst_174813 = cljs.core.count(inst_174811);
var inst_174766 = inst_174812;
var inst_174767 = inst_174811;
var inst_174768 = inst_174813;
var inst_174769 = (0);
var state_174877__$1 = (function (){var statearr_175005 = state_174877;
(statearr_175005[(40)] = inst_174766);

(statearr_175005[(41)] = inst_174767);

(statearr_175005[(42)] = inst_174768);

(statearr_175005[(39)] = inst_174769);

return statearr_175005;
})();
var statearr_175006_178845 = state_174877__$1;
(statearr_175006_178845[(2)] = null);

(statearr_175006_178845[(1)] = (159));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (182))){
var state_174877__$1 = state_174877;
var statearr_175007_178846 = state_174877__$1;
(statearr_175007_178846[(2)] = null);

(statearr_175007_178846[(1)] = (183));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (40))){
var inst_174750 = (state_174877[(2)]);
var state_174877__$1 = state_174877;
var statearr_175009_178847 = state_174877__$1;
(statearr_175009_178847[(2)] = inst_174750);

(statearr_175009_178847[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (129))){
var inst_174624 = (state_174877[(61)]);
var _ = (function (){var statearr_175010 = state_174877;
(statearr_175010[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175010;
})();
var inst_174630 = (state_174877[(2)]);
var inst_174631 = (oops.state._STAR_runtime_state_STAR_ = inst_174624);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175011 = state_174877;
(statearr_175011[(62)] = inst_174631);

return statearr_175011;
})();
var statearr_175012_178848 = state_174877__$1;
(statearr_175012_178848[(2)] = inst_174630);

(statearr_175012_178848[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (91))){
var _ = (function (){var statearr_175013 = state_174877;
(statearr_175013[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175013;
})();
var state_174877__$1 = state_174877;
var ex175008 = (state_174877__$1[(2)]);
var statearr_175014_178849 = state_174877__$1;
(statearr_175014_178849[(5)] = ex175008);


throw ex175008;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (117))){
var inst_174544 = (state_174877[(14)]);
var inst_174611 = (state_174877[(2)]);
var _ = (function (){var statearr_175015 = state_174877;
(statearr_175015[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175015;
})();
var state_174877__$1 = (function (){var statearr_175016 = state_174877;
(statearr_175016[(63)] = inst_174611);

return statearr_175016;
})();
var statearr_175017_178850 = state_174877__$1;
(statearr_175017_178850[(2)] = inst_174544);

(statearr_175017_178850[(1)] = (113));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (172))){
var state_174877__$1 = state_174877;
var statearr_175018_178851 = state_174877__$1;
(statearr_175018_178851[(2)] = null);

(statearr_175018_178851[(1)] = (173));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (108))){
var inst_174545 = (state_174877[(7)]);
var inst_174569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(imgs,inst_174545);
var state_174877__$1 = state_174877;
var statearr_175019_178852 = state_174877__$1;
(statearr_175019_178852[(2)] = inst_174569);

(statearr_175019_178852[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (156))){
var state_174877__$1 = state_174877;
var statearr_175020_178853 = state_174877__$1;
(statearr_175020_178853[(2)] = null);

(statearr_175020_178853[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (181))){
var inst_174816 = (state_174877[(20)]);
var inst_174838 = (inst_174816["classList"]);
var state_174877__$1 = state_174877;
var statearr_175021_178854 = state_174877__$1;
(statearr_175021_178854[(2)] = inst_174838);

(statearr_175021_178854[(1)] = (183));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (56))){
var state_174877__$1 = state_174877;
var statearr_175022_178855 = state_174877__$1;
(statearr_175022_178855[(2)] = null);

(statearr_175022_178855[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (33))){
var inst_174260 = (state_174877[(2)]);
var _ = (function (){var statearr_175023 = state_174877;
(statearr_175023[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175023;
})();
var state_174877__$1 = state_174877;
var statearr_175024_178856 = state_174877__$1;
(statearr_175024_178856[(2)] = inst_174260);

(statearr_175024_178856[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (13))){
var inst_174276 = (state_174877[(2)]);
var state_174877__$1 = state_174877;
var statearr_175025_178857 = state_174877__$1;
(statearr_175025_178857[(2)] = inst_174276);

(statearr_175025_178857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (22))){
var state_174877__$1 = state_174877;
var statearr_175026_178858 = state_174877__$1;
(statearr_175026_178858[(2)] = null);

(statearr_175026_178858[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (168))){
var inst_174774 = (state_174877[(12)]);
var inst_174796 = (inst_174774["classList"]);
var state_174877__$1 = state_174877;
var statearr_175027_178859 = state_174877__$1;
(statearr_175027_178859[(2)] = inst_174796);

(statearr_175027_178859[(1)] = (170));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (90))){
var inst_174492 = (state_174877[(64)]);
var _ = (function (){var statearr_175028 = state_174877;
(statearr_175028[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175028;
})();
var inst_174498 = (state_174877[(2)]);
var inst_174499 = (oops.state._STAR_runtime_state_STAR_ = inst_174492);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175029 = state_174877;
(statearr_175029[(65)] = inst_174499);

return statearr_175029;
})();
var statearr_175030_178860 = state_174877__$1;
(statearr_175030_178860[(2)] = inst_174498);

(statearr_175030_178860[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (109))){
var inst_174571 = cljs.core.last(imgs);
var state_174877__$1 = state_174877;
var statearr_175031_178861 = state_174877__$1;
(statearr_175031_178861[(2)] = inst_174571);

(statearr_175031_178861[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (143))){
var inst_174683 = (state_174877[(66)]);
var _ = (function (){var statearr_175033 = state_174877;
(statearr_175033[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175033;
})();
var inst_174689 = (state_174877[(2)]);
var inst_174690 = (oops.state._STAR_runtime_state_STAR_ = inst_174683);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175034 = state_174877;
(statearr_175034[(67)] = inst_174690);

return statearr_175034;
})();
var statearr_175035_178862 = state_174877__$1;
(statearr_175035_178862[(2)] = inst_174689);

(statearr_175035_178862[(1)] = (142));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (178))){
var inst_174807 = (state_174877[(19)]);
var inst_174844 = (state_174877[(2)]);
var inst_174845 = inst_174844.remove("rotate-center");
var inst_174846 = cljs.core.next(inst_174807);
var inst_174766 = inst_174846;
var inst_174767 = null;
var inst_174768 = (0);
var inst_174769 = (0);
var state_174877__$1 = (function (){var statearr_175036 = state_174877;
(statearr_175036[(68)] = inst_174845);

(statearr_175036[(40)] = inst_174766);

(statearr_175036[(41)] = inst_174767);

(statearr_175036[(42)] = inst_174768);

(statearr_175036[(39)] = inst_174769);

return statearr_175036;
})();
var statearr_175037_178863 = state_174877__$1;
(statearr_175037_178863[(2)] = null);

(statearr_175037_178863[(1)] = (159));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (167))){
var _ = (function (){var statearr_175038 = state_174877;
(statearr_175038[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175038;
})();
var state_174877__$1 = state_174877;
var ex175032 = (state_174877__$1[(2)]);
var statearr_175039_178864 = state_174877__$1;
(statearr_175039_178864[(5)] = ex175032);


throw ex175032;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (36))){
var inst_174309 = (state_174877[(69)]);
var inst_174308 = (state_174877[(70)]);
var inst_174311 = (inst_174309 < inst_174308);
var inst_174312 = inst_174311;
var state_174877__$1 = state_174877;
if(cljs.core.truth_(inst_174312)){
var statearr_175040_178865 = state_174877__$1;
(statearr_175040_178865[(1)] = (38));

} else {
var statearr_175041_178866 = state_174877__$1;
(statearr_175041_178866[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (41))){
var inst_174323 = (state_174877[(46)]);
var _ = (function (){var statearr_175042 = state_174877;
(statearr_175042[(4)] = cljs.core.cons((43),(state_174877[(4)])));

return statearr_175042;
})();
var ___$1 = (function (){var statearr_175043 = state_174877;
(statearr_175043[(4)] = cljs.core.cons((44),(state_174877[(4)])));

return statearr_175043;
})();
var inst_174346 = oops.core.validate_object_access_dynamically(inst_174323,(0),"src",true,true,true);
var state_174877__$1 = state_174877;
if(inst_174346){
var statearr_175044_178867 = state_174877__$1;
(statearr_175044_178867[(1)] = (45));

} else {
var statearr_175045_178868 = state_174877__$1;
(statearr_175045_178868[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (187))){
var inst_174869 = cljs.core.async.timeout((750));
var state_174877__$1 = state_174877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_174877__$1,(190),inst_174869);
} else {
if((state_val_174878 === (118))){
var inst_174546 = (state_174877[(8)]);
var inst_174603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(imgs,inst_174546);
var state_174877__$1 = state_174877;
var statearr_175046_178869 = state_174877__$1;
(statearr_175046_178869[(2)] = inst_174603);

(statearr_175046_178869[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (150))){
var inst_174712 = (state_174877[(71)]);
var _ = (function (){var statearr_175047 = state_174877;
(statearr_175047[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175047;
})();
var inst_174718 = (state_174877[(2)]);
var inst_174719 = (oops.state._STAR_runtime_state_STAR_ = inst_174712);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175048 = state_174877;
(statearr_175048[(72)] = inst_174719);

return statearr_175048;
})();
var statearr_175049_178870 = state_174877__$1;
(statearr_175049_178870[(2)] = inst_174718);

(statearr_175049_178870[(1)] = (149));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (162))){
var inst_174766 = (state_174877[(40)]);
var inst_174807 = (state_174877[(19)]);
var inst_174807__$1 = cljs.core.seq(inst_174766);
var state_174877__$1 = (function (){var statearr_175050 = state_174877;
(statearr_175050[(19)] = inst_174807__$1);

return statearr_175050;
})();
if(inst_174807__$1){
var statearr_175051_178871 = state_174877__$1;
(statearr_175051_178871[(1)] = (171));

} else {
var statearr_175052_178872 = state_174877__$1;
(statearr_175052_178872[(1)] = (172));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (184))){
var inst_174861 = (state_174877[(73)]);
var state_174877__$1 = state_174877;
var statearr_175053_178873 = state_174877__$1;
(statearr_175053_178873[(2)] = inst_174861);

(statearr_175053_178873[(1)] = (186));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (89))){
var inst_174515 = (state_174877[(2)]);
var inst_174516 = inst_174515.add("dice-loser");
var state_174877__$1 = state_174877;
var statearr_175054_178874 = state_174877__$1;
(statearr_175054_178874[(2)] = inst_174516);

(statearr_175054_178874[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (100))){
var inst_174745 = (state_174877[(2)]);
var state_174877__$1 = state_174877;
var statearr_175055_178875 = state_174877__$1;
(statearr_175055_178875[(2)] = inst_174745);

(statearr_175055_178875[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (131))){
var inst_174543 = (state_174877[(13)]);
var inst_174641 = (inst_174543["classList"]);
var state_174877__$1 = state_174877;
var statearr_175056_178876 = state_174877__$1;
(statearr_175056_178876[(2)] = inst_174641);

(statearr_175056_178876[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (122))){
var state_174877__$1 = state_174877;
var statearr_175057_178877 = state_174877__$1;
(statearr_175057_178877[(2)] = null);

(statearr_175057_178877[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (43))){
var inst_174331 = (state_174877[(74)]);
var _ = (function (){var statearr_175058 = state_174877;
(statearr_175058[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175058;
})();
var inst_174337 = (state_174877[(2)]);
var inst_174338 = (oops.state._STAR_runtime_state_STAR_ = inst_174331);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175059 = state_174877;
(statearr_175059[(75)] = inst_174338);

return statearr_175059;
})();
var statearr_175060_178878 = state_174877__$1;
(statearr_175060_178878[(2)] = inst_174337);

(statearr_175060_178878[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (61))){
var inst_174325 = (state_174877[(53)]);
var inst_174326 = (state_174877[(18)]);
var inst_174398 = (inst_174325 > inst_174326);
var state_174877__$1 = state_174877;
if(cljs.core.truth_(inst_174398)){
var statearr_175062_178879 = state_174877__$1;
(statearr_175062_178879[(1)] = (64));

} else {
var statearr_175063_178880 = state_174877__$1;
(statearr_175063_178880[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (29))){
var inst_174240 = (state_174877[(76)]);
var _ = (function (){var statearr_175065 = state_174877;
(statearr_175065[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175065;
})();
var inst_174246 = (state_174877[(2)]);
var inst_174247 = (oops.state._STAR_runtime_state_STAR_ = inst_174240);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175066 = state_174877;
(statearr_175066[(77)] = inst_174247);

return statearr_175066;
})();
var statearr_175067_178881 = state_174877__$1;
(statearr_175067_178881[(2)] = inst_174246);

(statearr_175067_178881[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (151))){
var _ = (function (){var statearr_175068 = state_174877;
(statearr_175068[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175068;
})();
var state_174877__$1 = state_174877;
var ex175061 = (state_174877__$1[(2)]);
var statearr_175069_178882 = state_174877__$1;
(statearr_175069_178882[(5)] = ex175061);


throw ex175061;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (44))){
var _ = (function (){var statearr_175070 = state_174877;
(statearr_175070[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175070;
})();
var state_174877__$1 = state_174877;
var ex175064 = (state_174877__$1[(2)]);
var statearr_175071_178883 = state_174877__$1;
(statearr_175071_178883[(5)] = ex175064);


throw ex175064;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (93))){
var state_174877__$1 = state_174877;
var statearr_175072_178884 = state_174877__$1;
(statearr_175072_178884[(2)] = null);

(statearr_175072_178884[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (6))){
var inst_174148 = (state_174877[(24)]);
var inst_174168 = (inst_174148["disabled"] = true);
var state_174877__$1 = state_174877;
var statearr_175073_178885 = state_174877__$1;
(statearr_175073_178885[(2)] = inst_174168);

(statearr_175073_178885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (111))){
var inst_174544 = (state_174877[(14)]);
var _ = (function (){var statearr_175074 = state_174877;
(statearr_175074[(4)] = cljs.core.cons((113),(state_174877[(4)])));

return statearr_175074;
})();
var ___$1 = (function (){var statearr_175075 = state_174877;
(statearr_175075[(4)] = cljs.core.cons((114),(state_174877[(4)])));

return statearr_175075;
})();
var inst_174600 = oops.core.validate_object_access_dynamically(inst_174544,(0),"src",true,true,true);
var state_174877__$1 = state_174877;
if(inst_174600){
var statearr_175076_178886 = state_174877__$1;
(statearr_175076_178886[(1)] = (115));

} else {
var statearr_175077_178887 = state_174877__$1;
(statearr_175077_178887[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (28))){
var inst_174225 = (state_174877[(31)]);
var inst_174263 = (state_174877[(2)]);
var inst_174264 = inst_174263.remove("dice-winner");
var inst_174265 = inst_174263.remove("dice-loser");
var inst_174266 = inst_174263.remove("dice-disabled");
var inst_174267 = inst_174263.add("rotate-center");
var inst_174268 = cljs.core.next(inst_174225);
var inst_174180 = inst_174268;
var inst_174181 = null;
var inst_174182 = (0);
var inst_174183 = (0);
var state_174877__$1 = (function (){var statearr_175078 = state_174877;
(statearr_175078[(78)] = inst_174264);

(statearr_175078[(79)] = inst_174265);

(statearr_175078[(80)] = inst_174266);

(statearr_175078[(81)] = inst_174267);

(statearr_175078[(32)] = inst_174180);

(statearr_175078[(33)] = inst_174181);

(statearr_175078[(34)] = inst_174182);

(statearr_175078[(35)] = inst_174183);

return statearr_175078;
})();
var statearr_175079_178888 = state_174877__$1;
(statearr_175079_178888[(2)] = null);

(statearr_175079_178888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (134))){
var inst_174544 = (state_174877[(14)]);
var _ = (function (){var statearr_175080 = state_174877;
(statearr_175080[(4)] = cljs.core.cons((136),(state_174877[(4)])));

return statearr_175080;
})();
var ___$1 = (function (){var statearr_175081 = state_174877;
(statearr_175081[(4)] = cljs.core.cons((137),(state_174877[(4)])));

return statearr_175081;
})();
var inst_174668 = oops.core.validate_object_access_dynamically(inst_174544,(0),"classList",true,true,false);
var state_174877__$1 = state_174877;
if(inst_174668){
var statearr_175082_178889 = state_174877__$1;
(statearr_175082_178889[(1)] = (138));

} else {
var statearr_175083_178890 = state_174877__$1;
(statearr_175083_178890[(1)] = (139));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (64))){
var inst_174323 = (state_174877[(46)]);
var inst_174404 = oops.state._STAR_runtime_state_STAR_;
var inst_174405 = (new Error());
var inst_174406 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174407 = oops.state.prepare_state(inst_174323,inst_174405,inst_174406);
var inst_174408 = (oops.state._STAR_runtime_state_STAR_ = inst_174407);
var state_174877__$1 = (function (){var statearr_175084 = state_174877;
(statearr_175084[(29)] = inst_174404);

(statearr_175084[(82)] = inst_174408);

return statearr_175084;
})();
var statearr_175085_178891 = state_174877__$1;
(statearr_175085_178891[(2)] = null);

(statearr_175085_178891[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (189))){
var inst_174875 = (state_174877[(2)]);
var state_174877__$1 = state_174877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_174877__$1,inst_174875);
} else {
if((state_val_174878 === (155))){
var inst_174295 = (state_174877[(54)]);
var inst_174298 = (state_174877[(56)]);
var inst_174754 = (on_dice_roll.cljs$core$IFn$_invoke$arity$2 ? on_dice_roll.cljs$core$IFn$_invoke$arity$2(inst_174295,inst_174298) : on_dice_roll.call(null,inst_174295,inst_174298));
var state_174877__$1 = state_174877;
var statearr_175086_178892 = state_174877__$1;
(statearr_175086_178892[(2)] = inst_174754);

(statearr_175086_178892[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (103))){
var inst_174551 = (state_174877[(57)]);
var _ = (function (){var statearr_175087 = state_174877;
(statearr_175087[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175087;
})();
var inst_174557 = (state_174877[(2)]);
var inst_174558 = (oops.state._STAR_runtime_state_STAR_ = inst_174551);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175088 = state_174877;
(statearr_175088[(83)] = inst_174558);

return statearr_175088;
})();
var statearr_175089_178893 = state_174877__$1;
(statearr_175089_178893[(2)] = inst_174557);

(statearr_175089_178893[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (170))){
var inst_174799 = (state_174877[(2)]);
var _ = (function (){var statearr_175090 = state_174877;
(statearr_175090[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175090;
})();
var state_174877__$1 = state_174877;
var statearr_175091_178894 = state_174877__$1;
(statearr_175091_178894[(2)] = inst_174799);

(statearr_175091_178894[(1)] = (166));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (51))){
var inst_174324 = (state_174877[(9)]);
var _ = (function (){var statearr_175092 = state_174877;
(statearr_175092[(4)] = cljs.core.cons((53),(state_174877[(4)])));

return statearr_175092;
})();
var ___$1 = (function (){var statearr_175093 = state_174877;
(statearr_175093[(4)] = cljs.core.cons((54),(state_174877[(4)])));

return statearr_175093;
})();
var inst_174380 = oops.core.validate_object_access_dynamically(inst_174324,(0),"src",true,true,true);
var state_174877__$1 = state_174877;
if(inst_174380){
var statearr_175094_178895 = state_174877__$1;
(statearr_175094_178895[(1)] = (55));

} else {
var statearr_175095_178896 = state_174877__$1;
(statearr_175095_178896[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (25))){
var inst_174225 = (state_174877[(31)]);
var inst_174234 = (state_174877[(23)]);
var inst_174234__$1 = cljs.core.first(inst_174225);
var inst_174240 = oops.state._STAR_runtime_state_STAR_;
var inst_174241 = (new Error());
var inst_174242 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174243 = oops.state.prepare_state(inst_174234__$1,inst_174241,inst_174242);
var inst_174244 = (oops.state._STAR_runtime_state_STAR_ = inst_174243);
var state_174877__$1 = (function (){var statearr_175096 = state_174877;
(statearr_175096[(23)] = inst_174234__$1);

(statearr_175096[(76)] = inst_174240);

(statearr_175096[(84)] = inst_174244);

return statearr_175096;
})();
var statearr_175097_178897 = state_174877__$1;
(statearr_175097_178897[(2)] = null);

(statearr_175097_178897[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (166))){
var inst_174779 = (state_174877[(85)]);
var _ = (function (){var statearr_175098 = state_174877;
(statearr_175098[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175098;
})();
var inst_174785 = (state_174877[(2)]);
var inst_174786 = (oops.state._STAR_runtime_state_STAR_ = inst_174779);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175099 = state_174877;
(statearr_175099[(86)] = inst_174786);

return statearr_175099;
})();
var statearr_175100_178898 = state_174877__$1;
(statearr_175100_178898[(2)] = inst_174785);

(statearr_175100_178898[(1)] = (165));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (34))){
var inst_174144 = (state_174877[(25)]);
var inst_174281 = (state_174877[(2)]);
var inst_174282 = teg_online.ui.dice_roll_effect(inst_174144,imgs);
var state_174877__$1 = (function (){var statearr_175101 = state_174877;
(statearr_175101[(87)] = inst_174281);

return statearr_175101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_174877__$1,(35),inst_174282);
} else {
if((state_val_174878 === (146))){
var state_174877__$1 = state_174877;
var statearr_175102_178899 = state_174877__$1;
(statearr_175102_178899[(2)] = null);

(statearr_175102_178899[(1)] = (147));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (125))){
var inst_174544 = (state_174877[(14)]);
var inst_174683 = oops.state._STAR_runtime_state_STAR_;
var inst_174684 = (new Error());
var inst_174685 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174686 = oops.state.prepare_state(inst_174544,inst_174684,inst_174685);
var inst_174687 = (oops.state._STAR_runtime_state_STAR_ = inst_174686);
var state_174877__$1 = (function (){var statearr_175104 = state_174877;
(statearr_175104[(66)] = inst_174683);

(statearr_175104[(88)] = inst_174687);

return statearr_175104;
})();
var statearr_175105_178900 = state_174877__$1;
(statearr_175105_178900[(2)] = null);

(statearr_175105_178900[(1)] = (141));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (148))){
var inst_174543 = (state_174877[(13)]);
var _ = (function (){var statearr_175106 = state_174877;
(statearr_175106[(4)] = cljs.core.cons((150),(state_174877[(4)])));

return statearr_175106;
})();
var ___$1 = (function (){var statearr_175107 = state_174877;
(statearr_175107[(4)] = cljs.core.cons((151),(state_174877[(4)])));

return statearr_175107;
})();
var inst_174727 = oops.core.validate_object_access_dynamically(inst_174543,(0),"classList",true,true,false);
var state_174877__$1 = state_174877;
if(inst_174727){
var statearr_175108_178901 = state_174877__$1;
(statearr_175108_178901[(1)] = (152));

} else {
var statearr_175109_178902 = state_174877__$1;
(statearr_175109_178902[(1)] = (153));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (17))){
var _ = (function (){var statearr_175110 = state_174877;
(statearr_175110[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175110;
})();
var state_174877__$1 = state_174877;
var ex175103 = (state_174877__$1[(2)]);
var statearr_175111_178903 = state_174877__$1;
(statearr_175111_178903[(5)] = ex175103);


throw ex175103;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (3))){
var inst_174144 = (state_174877[(25)]);
var inst_174174 = (state_174877[(2)]);
var inst_174179 = cljs.core.seq(inst_174144);
var inst_174180 = inst_174179;
var inst_174181 = null;
var inst_174182 = (0);
var inst_174183 = (0);
var state_174877__$1 = (function (){var statearr_175112 = state_174877;
(statearr_175112[(89)] = inst_174174);

(statearr_175112[(32)] = inst_174180);

(statearr_175112[(33)] = inst_174181);

(statearr_175112[(34)] = inst_174182);

(statearr_175112[(35)] = inst_174183);

return statearr_175112;
})();
var statearr_175113_178904 = state_174877__$1;
(statearr_175113_178904[(2)] = null);

(statearr_175113_178904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (12))){
var inst_174180 = (state_174877[(32)]);
var inst_174225 = (state_174877[(31)]);
var inst_174225__$1 = cljs.core.seq(inst_174180);
var state_174877__$1 = (function (){var statearr_175114 = state_174877;
(statearr_175114[(31)] = inst_174225__$1);

return statearr_175114;
})();
if(inst_174225__$1){
var statearr_175115_178905 = state_174877__$1;
(statearr_175115_178905[(1)] = (21));

} else {
var statearr_175116_178906 = state_174877__$1;
(statearr_175116_178906[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (152))){
var inst_174543 = (state_174877[(13)]);
var inst_174729 = (inst_174543["classList"]);
var state_174877__$1 = state_174877;
var statearr_175117_178907 = state_174877__$1;
(statearr_175117_178907[(2)] = inst_174729);

(statearr_175117_178907[(1)] = (154));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (2))){
var inst_174148 = (state_174877[(24)]);
var _ = (function (){var statearr_175118 = state_174877;
(statearr_175118[(4)] = cljs.core.cons((4),(state_174877[(4)])));

return statearr_175118;
})();
var ___$1 = (function (){var statearr_175119 = state_174877;
(statearr_175119[(4)] = cljs.core.cons((5),(state_174877[(4)])));

return statearr_175119;
})();
var inst_174166 = oops.core.validate_object_access_dynamically(inst_174148,(0),"disabled",true,true,true);
var state_174877__$1 = state_174877;
if(inst_174166){
var statearr_175120_178908 = state_174877__$1;
(statearr_175120_178908[(1)] = (6));

} else {
var statearr_175121_178909 = state_174877__$1;
(statearr_175121_178909[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (66))){
var inst_174518 = (state_174877[(2)]);
var state_174877__$1 = state_174877;
var statearr_175122_178910 = state_174877__$1;
(statearr_175122_178910[(2)] = inst_174518);

(statearr_175122_178910[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (142))){
var inst_174543 = (state_174877[(13)]);
var inst_174706 = (state_174877[(2)]);
var inst_174707 = inst_174706.add("dice-winner");
var inst_174712 = oops.state._STAR_runtime_state_STAR_;
var inst_174713 = (new Error());
var inst_174714 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174715 = oops.state.prepare_state(inst_174543,inst_174713,inst_174714);
var inst_174716 = (oops.state._STAR_runtime_state_STAR_ = inst_174715);
var state_174877__$1 = (function (){var statearr_175123 = state_174877;
(statearr_175123[(90)] = inst_174707);

(statearr_175123[(71)] = inst_174712);

(statearr_175123[(91)] = inst_174716);

return statearr_175123;
})();
var statearr_175124_178911 = state_174877__$1;
(statearr_175124_178911[(2)] = null);

(statearr_175124_178911[(1)] = (148));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (107))){
var inst_174543 = (state_174877[(13)]);
var inst_174577 = (state_174877[(2)]);
var _ = (function (){var statearr_175125 = state_174877;
(statearr_175125[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175125;
})();
var state_174877__$1 = (function (){var statearr_175126 = state_174877;
(statearr_175126[(92)] = inst_174577);

return statearr_175126;
})();
var statearr_175127_178912 = state_174877__$1;
(statearr_175127_178912[(2)] = inst_174543);

(statearr_175127_178912[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (23))){
var inst_174274 = (state_174877[(2)]);
var state_174877__$1 = state_174877;
var statearr_175129_178913 = state_174877__$1;
(statearr_175129_178913[(2)] = inst_174274);

(statearr_175129_178913[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (47))){
var inst_174323 = (state_174877[(46)]);
var inst_174357 = (state_174877[(2)]);
var _ = (function (){var statearr_175130 = state_174877;
(statearr_175130[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175130;
})();
var state_174877__$1 = (function (){var statearr_175131 = state_174877;
(statearr_175131[(93)] = inst_174357);

return statearr_175131;
})();
var statearr_175132_178914 = state_174877__$1;
(statearr_175132_178914[(2)] = inst_174323);

(statearr_175132_178914[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (180))){
var _ = (function (){var statearr_175133 = state_174877;
(statearr_175133[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175133;
})();
var state_174877__$1 = state_174877;
var ex175128 = (state_174877__$1[(2)]);
var statearr_175134_178915 = state_174877__$1;
(statearr_175134_178915[(5)] = ex175128);


throw ex175128;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (158))){
var inst_174144 = (state_174877[(25)]);
var inst_174760 = (state_174877[(2)]);
var inst_174765 = cljs.core.seq(inst_174144);
var inst_174766 = inst_174765;
var inst_174767 = null;
var inst_174768 = (0);
var inst_174769 = (0);
var state_174877__$1 = (function (){var statearr_175135 = state_174877;
(statearr_175135[(94)] = inst_174760);

(statearr_175135[(40)] = inst_174766);

(statearr_175135[(41)] = inst_174767);

(statearr_175135[(42)] = inst_174768);

(statearr_175135[(39)] = inst_174769);

return statearr_175135;
})();
var statearr_175136_178916 = state_174877__$1;
(statearr_175136_178916[(2)] = null);

(statearr_175136_178916[(1)] = (159));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (35))){
var inst_174291 = (state_174877[(95)]);
var inst_174292 = (state_174877[(96)]);
var inst_174284 = (state_174877[(2)]);
var inst_174288 = cljs.core.deref(state);
var inst_174289 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_174288);
var inst_174290 = teg_online.game.get_dice_count(inst_174289,attacker,defender);
var inst_174291__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174290,(0),null);
var inst_174292__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174290,(1),null);
var inst_174293 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.rand_int,(6));
var inst_174294 = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(inst_174291__$1,inst_174293);
var inst_174295 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,inst_174294);
var inst_174296 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.rand_int,(6));
var inst_174297 = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(inst_174292__$1,inst_174296);
var inst_174298 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,inst_174297);
var inst_174303 = get_dice_pairs();
var inst_174304 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,inst_174303);
var inst_174305 = cljs.core.seq(inst_174304);
var inst_174306 = inst_174305;
var inst_174307 = null;
var inst_174308 = (0);
var inst_174309 = (0);
var state_174877__$1 = (function (){var statearr_175137 = state_174877;
(statearr_175137[(97)] = inst_174284);

(statearr_175137[(95)] = inst_174291__$1);

(statearr_175137[(96)] = inst_174292__$1);

(statearr_175137[(54)] = inst_174295);

(statearr_175137[(56)] = inst_174298);

(statearr_175137[(44)] = inst_174306);

(statearr_175137[(98)] = inst_174307);

(statearr_175137[(70)] = inst_174308);

(statearr_175137[(69)] = inst_174309);

return statearr_175137;
})();
var statearr_175138_178917 = state_174877__$1;
(statearr_175138_178917[(2)] = null);

(statearr_175138_178917[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (127))){
var inst_174543 = (state_174877[(13)]);
var _ = (function (){var statearr_175139 = state_174877;
(statearr_175139[(4)] = cljs.core.cons((129),(state_174877[(4)])));

return statearr_175139;
})();
var ___$1 = (function (){var statearr_175140 = state_174877;
(statearr_175140[(4)] = cljs.core.cons((130),(state_174877[(4)])));

return statearr_175140;
})();
var inst_174639 = oops.core.validate_object_access_dynamically(inst_174543,(0),"classList",true,true,false);
var state_174877__$1 = state_174877;
if(inst_174639){
var statearr_175141_178918 = state_174877__$1;
(statearr_175141_178918[(1)] = (131));

} else {
var statearr_175142_178919 = state_174877__$1;
(statearr_175142_178919[(1)] = (132));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (82))){
var inst_174323 = (state_174877[(46)]);
var inst_174486 = (state_174877[(2)]);
var inst_174487 = inst_174486.add("dice-winner");
var inst_174492 = oops.state._STAR_runtime_state_STAR_;
var inst_174493 = (new Error());
var inst_174494 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174495 = oops.state.prepare_state(inst_174323,inst_174493,inst_174494);
var inst_174496 = (oops.state._STAR_runtime_state_STAR_ = inst_174495);
var state_174877__$1 = (function (){var statearr_175143 = state_174877;
(statearr_175143[(99)] = inst_174487);

(statearr_175143[(64)] = inst_174492);

(statearr_175143[(100)] = inst_174496);

return statearr_175143;
})();
var statearr_175144_178920 = state_174877__$1;
(statearr_175144_178920[(2)] = null);

(statearr_175144_178920[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (76))){
var inst_174433 = (state_174877[(101)]);
var _ = (function (){var statearr_175145 = state_174877;
(statearr_175145[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175145;
})();
var inst_174439 = (state_174877[(2)]);
var inst_174440 = (oops.state._STAR_runtime_state_STAR_ = inst_174433);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175146 = state_174877;
(statearr_175146[(102)] = inst_174440);

return statearr_175146;
})();
var statearr_175147_178921 = state_174877__$1;
(statearr_175147_178921[(2)] = inst_174439);

(statearr_175147_178921[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (97))){
var inst_174748 = (state_174877[(2)]);
var state_174877__$1 = state_174877;
var statearr_175148_178922 = state_174877__$1;
(statearr_175148_178922[(2)] = inst_174748);

(statearr_175148_178922[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (19))){
var state_174877__$1 = state_174877;
var statearr_175149_178923 = state_174877__$1;
(statearr_175149_178923[(2)] = null);

(statearr_175149_178923[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (57))){
var inst_174324 = (state_174877[(9)]);
var inst_174391 = (state_174877[(2)]);
var _ = (function (){var statearr_175150 = state_174877;
(statearr_175150[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175150;
})();
var state_174877__$1 = (function (){var statearr_175151 = state_174877;
(statearr_175151[(103)] = inst_174391);

return statearr_175151;
})();
var statearr_175152_178924 = state_174877__$1;
(statearr_175152_178924[(2)] = inst_174324);

(statearr_175152_178924[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (68))){
var inst_174324 = (state_174877[(9)]);
var inst_174427 = (state_174877[(2)]);
var inst_174428 = inst_174427.add("dice-winner");
var inst_174433 = oops.state._STAR_runtime_state_STAR_;
var inst_174434 = (new Error());
var inst_174435 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174436 = oops.state.prepare_state(inst_174324,inst_174434,inst_174435);
var inst_174437 = (oops.state._STAR_runtime_state_STAR_ = inst_174436);
var state_174877__$1 = (function (){var statearr_175153 = state_174877;
(statearr_175153[(104)] = inst_174428);

(statearr_175153[(101)] = inst_174433);

(statearr_175153[(105)] = inst_174437);

return statearr_175153;
})();
var statearr_175154_178925 = state_174877__$1;
(statearr_175154_178925[(2)] = null);

(statearr_175154_178925[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (11))){
var inst_174181 = (state_174877[(33)]);
var inst_174183 = (state_174877[(35)]);
var inst_174188 = (state_174877[(106)]);
var inst_174188__$1 = cljs.core._nth(inst_174181,inst_174183);
var inst_174194 = oops.state._STAR_runtime_state_STAR_;
var inst_174195 = (new Error());
var inst_174196 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174197 = oops.state.prepare_state(inst_174188__$1,inst_174195,inst_174196);
var inst_174198 = (oops.state._STAR_runtime_state_STAR_ = inst_174197);
var state_174877__$1 = (function (){var statearr_175155 = state_174877;
(statearr_175155[(106)] = inst_174188__$1);

(statearr_175155[(107)] = inst_174194);

(statearr_175155[(108)] = inst_174198);

return statearr_175155;
})();
var statearr_175156_178926 = state_174877__$1;
(statearr_175156_178926[(2)] = null);

(statearr_175156_178926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (115))){
var inst_174546 = (state_174877[(8)]);
var state_174877__$1 = state_174877;
if(cljs.core.truth_(inst_174546)){
var statearr_175157_178927 = state_174877__$1;
(statearr_175157_178927[(1)] = (118));

} else {
var statearr_175158_178928 = state_174877__$1;
(statearr_175158_178928[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (9))){
var inst_174183 = (state_174877[(35)]);
var inst_174182 = (state_174877[(34)]);
var inst_174185 = (inst_174183 < inst_174182);
var inst_174186 = inst_174185;
var state_174877__$1 = state_174877;
if(cljs.core.truth_(inst_174186)){
var statearr_175160_178929 = state_174877__$1;
(statearr_175160_178929[(1)] = (11));

} else {
var statearr_175161_178930 = state_174877__$1;
(statearr_175161_178930[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (145))){
var inst_174544 = (state_174877[(14)]);
var inst_174700 = (inst_174544["classList"]);
var state_174877__$1 = state_174877;
var statearr_175162_178931 = state_174877__$1;
(statearr_175162_178931[(2)] = inst_174700);

(statearr_175162_178931[(1)] = (147));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (5))){
var _ = (function (){var statearr_175163 = state_174877;
(statearr_175163[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175163;
})();
var state_174877__$1 = state_174877;
var ex175159 = (state_174877__$1[(2)]);
var statearr_175164_178932 = state_174877__$1;
(statearr_175164_178932[(5)] = ex175159);


throw ex175159;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (112))){
var inst_174291 = (state_174877[(95)]);
var inst_174292 = (state_174877[(96)]);
var inst_174541 = (state_174877[(55)]);
var inst_174614 = (state_174877[(2)]);
var inst_174615 = cljs.core.min.cljs$core$IFn$_invoke$arity$2(inst_174291,inst_174292);
var inst_174616 = (inst_174541 < inst_174615);
var state_174877__$1 = (function (){var statearr_175165 = state_174877;
(statearr_175165[(109)] = inst_174614);

return statearr_175165;
})();
if(cljs.core.truth_(inst_174616)){
var statearr_175166_178933 = state_174877__$1;
(statearr_175166_178933[(1)] = (121));

} else {
var statearr_175167_178934 = state_174877__$1;
(statearr_175167_178934[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (179))){
var inst_174821 = (state_174877[(21)]);
var _ = (function (){var statearr_175168 = state_174877;
(statearr_175168[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175168;
})();
var inst_174827 = (state_174877[(2)]);
var inst_174828 = (oops.state._STAR_runtime_state_STAR_ = inst_174821);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175169 = state_174877;
(statearr_175169[(110)] = inst_174828);

return statearr_175169;
})();
var statearr_175170_178935 = state_174877__$1;
(statearr_175170_178935[(2)] = inst_174827);

(statearr_175170_178935[(1)] = (178));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (83))){
var inst_174463 = (state_174877[(10)]);
var _ = (function (){var statearr_175171 = state_174877;
(statearr_175171[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175171;
})();
var inst_174469 = (state_174877[(2)]);
var inst_174470 = (oops.state._STAR_runtime_state_STAR_ = inst_174463);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175172 = state_174877;
(statearr_175172[(111)] = inst_174470);

return statearr_175172;
})();
var statearr_175173_178936 = state_174877__$1;
(statearr_175173_178936[(2)] = inst_174469);

(statearr_175173_178936[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (138))){
var inst_174544 = (state_174877[(14)]);
var inst_174670 = (inst_174544["classList"]);
var state_174877__$1 = state_174877;
var statearr_175174_178937 = state_174877__$1;
(statearr_175174_178937[(2)] = inst_174670);

(statearr_175174_178937[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (14))){
var inst_174188 = (state_174877[(106)]);
var _ = (function (){var statearr_175175 = state_174877;
(statearr_175175[(4)] = cljs.core.cons((16),(state_174877[(4)])));

return statearr_175175;
})();
var ___$1 = (function (){var statearr_175176 = state_174877;
(statearr_175176[(4)] = cljs.core.cons((17),(state_174877[(4)])));

return statearr_175176;
})();
var inst_174209 = oops.core.validate_object_access_dynamically(inst_174188,(0),"classList",true,true,false);
var state_174877__$1 = state_174877;
if(inst_174209){
var statearr_175177_178938 = state_174877__$1;
(statearr_175177_178938[(1)] = (18));

} else {
var statearr_175178_178939 = state_174877__$1;
(statearr_175178_178939[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (45))){
var inst_174325 = (state_174877[(53)]);
var state_174877__$1 = state_174877;
if(cljs.core.truth_(inst_174325)){
var statearr_175179_178940 = state_174877__$1;
(statearr_175179_178940[(1)] = (48));

} else {
var statearr_175180_178941 = state_174877__$1;
(statearr_175180_178941[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (53))){
var inst_174365 = (state_174877[(112)]);
var _ = (function (){var statearr_175181 = state_174877;
(statearr_175181[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175181;
})();
var inst_174371 = (state_174877[(2)]);
var inst_174372 = (oops.state._STAR_runtime_state_STAR_ = inst_174365);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175182 = state_174877;
(statearr_175182[(113)] = inst_174372);

return statearr_175182;
})();
var statearr_175183_178942 = state_174877__$1;
(statearr_175183_178942[(2)] = inst_174371);

(statearr_175183_178942[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (78))){
var inst_174324 = (state_174877[(9)]);
var inst_174450 = (inst_174324["classList"]);
var state_174877__$1 = state_174877;
var statearr_175184_178943 = state_174877__$1;
(statearr_175184_178943[(2)] = inst_174450);

(statearr_175184_178943[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (132))){
var state_174877__$1 = state_174877;
var statearr_175185_178944 = state_174877__$1;
(statearr_175185_178944[(2)] = null);

(statearr_175185_178944[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (26))){
var inst_174271 = (state_174877[(2)]);
var state_174877__$1 = state_174877;
var statearr_175186_178945 = state_174877__$1;
(statearr_175186_178945[(2)] = inst_174271);

(statearr_175186_178945[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (123))){
var inst_174525 = (state_174877[(45)]);
var inst_174741 = (state_174877[(2)]);
var inst_174742 = cljs.core.next(inst_174525);
var inst_174306 = inst_174742;
var inst_174307 = null;
var inst_174308 = (0);
var inst_174309 = (0);
var state_174877__$1 = (function (){var statearr_175187 = state_174877;
(statearr_175187[(114)] = inst_174741);

(statearr_175187[(44)] = inst_174306);

(statearr_175187[(98)] = inst_174307);

(statearr_175187[(70)] = inst_174308);

(statearr_175187[(69)] = inst_174309);

return statearr_175187;
})();
var statearr_175188_178946 = state_174877__$1;
(statearr_175188_178946[(2)] = null);

(statearr_175188_178946[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (140))){
var inst_174673 = (state_174877[(2)]);
var _ = (function (){var statearr_175189 = state_174877;
(statearr_175189[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175189;
})();
var state_174877__$1 = state_174877;
var statearr_175190_178947 = state_174877__$1;
(statearr_175190_178947[(2)] = inst_174673);

(statearr_175190_178947[(1)] = (136));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (16))){
var inst_174194 = (state_174877[(107)]);
var _ = (function (){var statearr_175191 = state_174877;
(statearr_175191[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175191;
})();
var inst_174200 = (state_174877[(2)]);
var inst_174201 = (oops.state._STAR_runtime_state_STAR_ = inst_174194);
var ___$1 = (function (){var temp__5825__auto__ = (state_174877[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_174877__$1 = (function (){var statearr_175192 = state_174877;
(statearr_175192[(115)] = inst_174201);

return statearr_175192;
})();
var statearr_175193_178948 = state_174877__$1;
(statearr_175193_178948[(2)] = inst_174200);

(statearr_175193_178948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (133))){
var inst_174644 = (state_174877[(2)]);
var _ = (function (){var statearr_175194 = state_174877;
(statearr_175194[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175194;
})();
var state_174877__$1 = state_174877;
var statearr_175195_178949 = state_174877__$1;
(statearr_175195_178949[(2)] = inst_174644);

(statearr_175195_178949[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (163))){
var inst_174854 = (state_174877[(2)]);
var state_174877__$1 = state_174877;
var statearr_175196_178950 = state_174877__$1;
(statearr_175196_178950[(2)] = inst_174854);

(statearr_175196_178950[(1)] = (160));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (81))){
var inst_174324 = (state_174877[(9)]);
var _ = (function (){var statearr_175197 = state_174877;
(statearr_175197[(4)] = cljs.core.cons((83),(state_174877[(4)])));

return statearr_175197;
})();
var ___$1 = (function (){var statearr_175198 = state_174877;
(statearr_175198[(4)] = cljs.core.cons((84),(state_174877[(4)])));

return statearr_175198;
})();
var inst_174478 = oops.core.validate_object_access_dynamically(inst_174324,(0),"classList",true,true,false);
var state_174877__$1 = state_174877;
if(inst_174478){
var statearr_175199_178951 = state_174877__$1;
(statearr_175199_178951[(1)] = (85));

} else {
var statearr_175200_178952 = state_174877__$1;
(statearr_175200_178952[(1)] = (86));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (120))){
var inst_174544 = (state_174877[(14)]);
var inst_174607 = (state_174877[(2)]);
var inst_174608 = (inst_174544["src"] = inst_174607);
var state_174877__$1 = state_174877;
var statearr_175201_178953 = state_174877__$1;
(statearr_175201_178953[(2)] = inst_174608);

(statearr_175201_178953[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (79))){
var state_174877__$1 = state_174877;
var statearr_175202_178954 = state_174877__$1;
(statearr_175202_178954[(2)] = null);

(statearr_175202_178954[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (38))){
var inst_174307 = (state_174877[(98)]);
var inst_174309 = (state_174877[(69)]);
var inst_174295 = (state_174877[(54)]);
var inst_174321 = (state_174877[(116)]);
var inst_174298 = (state_174877[(56)]);
var inst_174323 = (state_174877[(46)]);
var inst_174320 = cljs.core._nth(inst_174307,inst_174309);
var inst_174321__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174320,(0),null);
var inst_174322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174320,(1),null);
var inst_174323__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174322,(0),null);
var inst_174324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174322,(1),null);
var inst_174325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174295,inst_174321__$1,null);
var inst_174326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_174298,inst_174321__$1,null);
var inst_174331 = oops.state._STAR_runtime_state_STAR_;
var inst_174332 = (new Error());
var inst_174333 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174334 = oops.state.prepare_state(inst_174323__$1,inst_174332,inst_174333);
var inst_174335 = (oops.state._STAR_runtime_state_STAR_ = inst_174334);
var state_174877__$1 = (function (){var statearr_175203 = state_174877;
(statearr_175203[(116)] = inst_174321__$1);

(statearr_175203[(46)] = inst_174323__$1);

(statearr_175203[(9)] = inst_174324);

(statearr_175203[(53)] = inst_174325);

(statearr_175203[(18)] = inst_174326);

(statearr_175203[(74)] = inst_174331);

(statearr_175203[(117)] = inst_174335);

return statearr_175203;
})();
var statearr_175204_178955 = state_174877__$1;
(statearr_175204_178955[(2)] = null);

(statearr_175204_178955[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (173))){
var inst_174852 = (state_174877[(2)]);
var state_174877__$1 = state_174877;
var statearr_175205_178956 = state_174877__$1;
(statearr_175205_178956[(2)] = inst_174852);

(statearr_175205_178956[(1)] = (163));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (126))){
var inst_174738 = (state_174877[(2)]);
var state_174877__$1 = state_174877;
var statearr_175206_178957 = state_174877__$1;
(statearr_175206_178957[(2)] = inst_174738);

(statearr_175206_178957[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (98))){
var inst_174525 = (state_174877[(45)]);
var inst_174529 = cljs.core.chunk_first(inst_174525);
var inst_174530 = cljs.core.chunk_rest(inst_174525);
var inst_174531 = cljs.core.count(inst_174529);
var inst_174306 = inst_174530;
var inst_174307 = inst_174529;
var inst_174308 = inst_174531;
var inst_174309 = (0);
var state_174877__$1 = (function (){var statearr_175207 = state_174877;
(statearr_175207[(44)] = inst_174306);

(statearr_175207[(98)] = inst_174307);

(statearr_175207[(70)] = inst_174308);

(statearr_175207[(69)] = inst_174309);

return statearr_175207;
})();
var statearr_175208_178958 = state_174877__$1;
(statearr_175208_178958[(2)] = null);

(statearr_175208_178958[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (124))){
var inst_174543 = (state_174877[(13)]);
var inst_174624 = oops.state._STAR_runtime_state_STAR_;
var inst_174625 = (new Error());
var inst_174626 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174627 = oops.state.prepare_state(inst_174543,inst_174625,inst_174626);
var inst_174628 = (oops.state._STAR_runtime_state_STAR_ = inst_174627);
var state_174877__$1 = (function (){var statearr_175209 = state_174877;
(statearr_175209[(61)] = inst_174624);

(statearr_175209[(118)] = inst_174628);

return statearr_175209;
})();
var statearr_175210_178959 = state_174877__$1;
(statearr_175210_178959[(2)] = null);

(statearr_175210_178959[(1)] = (127));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (171))){
var inst_174807 = (state_174877[(19)]);
var inst_174809 = cljs.core.chunked_seq_QMARK_(inst_174807);
var state_174877__$1 = state_174877;
if(inst_174809){
var statearr_175211_178960 = state_174877__$1;
(statearr_175211_178960[(1)] = (174));

} else {
var statearr_175212_178961 = state_174877__$1;
(statearr_175212_178961[(1)] = (175));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (87))){
var inst_174483 = (state_174877[(2)]);
var _ = (function (){var statearr_175213 = state_174877;
(statearr_175213[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175213;
})();
var state_174877__$1 = state_174877;
var statearr_175214_178962 = state_174877__$1;
(statearr_175214_178962[(2)] = inst_174483);

(statearr_175214_178962[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (169))){
var state_174877__$1 = state_174877;
var statearr_175216_178963 = state_174877__$1;
(statearr_175216_178963[(2)] = null);

(statearr_175216_178963[(1)] = (170));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (160))){
var inst_174859 = (state_174877[(119)]);
var inst_174861 = (state_174877[(73)]);
var inst_174856 = (state_174877[(2)]);
var inst_174857 = update_modal(new cljs.core.Keyword(null,"hide-dice?","hide-dice?",328342318),false);
var inst_174858 = cljs.core.deref(state);
var inst_174859__$1 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_174858);
var inst_174860 = teg_online.game.get_army(inst_174859__$1,defender);
var inst_174861__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),inst_174860);
var state_174877__$1 = (function (){var statearr_175217 = state_174877;
(statearr_175217[(120)] = inst_174856);

(statearr_175217[(121)] = inst_174857);

(statearr_175217[(119)] = inst_174859__$1);

(statearr_175217[(73)] = inst_174861__$1);

return statearr_175217;
})();
if(inst_174861__$1){
var statearr_175218_178964 = state_174877__$1;
(statearr_175218_178964[(1)] = (184));

} else {
var statearr_175219_178965 = state_174877__$1;
(statearr_175219_178965[(1)] = (185));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (30))){
var _ = (function (){var statearr_175220 = state_174877;
(statearr_175220[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175220;
})();
var state_174877__$1 = state_174877;
var ex175215 = (state_174877__$1[(2)]);
var statearr_175221_178966 = state_174877__$1;
(statearr_175221_178966[(5)] = ex175215);


throw ex175215;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (73))){
var inst_174424 = (state_174877[(2)]);
var _ = (function (){var statearr_175222 = state_174877;
(statearr_175222[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175222;
})();
var state_174877__$1 = state_174877;
var statearr_175223_178967 = state_174877__$1;
(statearr_175223_178967[(2)] = inst_174424);

(statearr_175223_178967[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (96))){
var state_174877__$1 = state_174877;
var statearr_175224_178968 = state_174877__$1;
(statearr_175224_178968[(2)] = null);

(statearr_175224_178968[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (10))){
var inst_174278 = (state_174877[(2)]);
var inst_174279 = cljs.core.async.timeout((200));
var state_174877__$1 = (function (){var statearr_175225 = state_174877;
(statearr_175225[(122)] = inst_174278);

return statearr_175225;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_174877__$1,(34),inst_174279);
} else {
if((state_val_174878 === (18))){
var inst_174188 = (state_174877[(106)]);
var inst_174211 = (inst_174188["classList"]);
var state_174877__$1 = state_174877;
var statearr_175226_178969 = state_174877__$1;
(statearr_175226_178969[(2)] = inst_174211);

(statearr_175226_178969[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (105))){
var inst_174545 = (state_174877[(7)]);
var state_174877__$1 = state_174877;
if(cljs.core.truth_(inst_174545)){
var statearr_175227_178970 = state_174877__$1;
(statearr_175227_178970[(1)] = (108));

} else {
var statearr_175228_178971 = state_174877__$1;
(statearr_175228_178971[(1)] = (109));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (185))){
var inst_174859 = (state_174877[(119)]);
var inst_174864 = teg_online.game.get_army(inst_174859,attacker);
var inst_174865 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_174864);
var state_174877__$1 = state_174877;
var statearr_175230_178972 = state_174877__$1;
(statearr_175230_178972[(2)] = inst_174865);

(statearr_175230_178972[(1)] = (186));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (52))){
var inst_174291 = (state_174877[(95)]);
var inst_174292 = (state_174877[(96)]);
var inst_174321 = (state_174877[(116)]);
var inst_174394 = (state_174877[(2)]);
var inst_174395 = cljs.core.min.cljs$core$IFn$_invoke$arity$2(inst_174291,inst_174292);
var inst_174396 = (inst_174321 < inst_174395);
var state_174877__$1 = (function (){var statearr_175231 = state_174877;
(statearr_175231[(123)] = inst_174394);

return statearr_175231;
})();
if(cljs.core.truth_(inst_174396)){
var statearr_175232_178973 = state_174877__$1;
(statearr_175232_178973[(1)] = (61));

} else {
var statearr_175233_178974 = state_174877__$1;
(statearr_175233_178974[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (114))){
var _ = (function (){var statearr_175234 = state_174877;
(statearr_175234[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175234;
})();
var state_174877__$1 = state_174877;
var ex175229 = (state_174877__$1[(2)]);
var statearr_175235_178975 = state_174877__$1;
(statearr_175235_178975[(5)] = ex175229);


throw ex175229;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (147))){
var inst_174703 = (state_174877[(2)]);
var _ = (function (){var statearr_175236 = state_174877;
(statearr_175236[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175236;
})();
var state_174877__$1 = state_174877;
var statearr_175237_178976 = state_174877__$1;
(statearr_175237_178976[(2)] = inst_174703);

(statearr_175237_178976[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (67))){
var inst_174323 = (state_174877[(46)]);
var _ = (function (){var statearr_175238 = state_174877;
(statearr_175238[(4)] = cljs.core.cons((69),(state_174877[(4)])));

return statearr_175238;
})();
var ___$1 = (function (){var statearr_175239 = state_174877;
(statearr_175239[(4)] = cljs.core.cons((70),(state_174877[(4)])));

return statearr_175239;
})();
var inst_174419 = oops.core.validate_object_access_dynamically(inst_174323,(0),"classList",true,true,false);
var state_174877__$1 = state_174877;
if(inst_174419){
var statearr_175240_178977 = state_174877__$1;
(statearr_175240_178977[(1)] = (71));

} else {
var statearr_175241_178978 = state_174877__$1;
(statearr_175241_178978[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (161))){
var inst_174767 = (state_174877[(41)]);
var inst_174769 = (state_174877[(39)]);
var inst_174774 = (state_174877[(12)]);
var inst_174774__$1 = cljs.core._nth(inst_174767,inst_174769);
var inst_174779 = oops.state._STAR_runtime_state_STAR_;
var inst_174780 = (new Error());
var inst_174781 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174782 = oops.state.prepare_state(inst_174774__$1,inst_174780,inst_174781);
var inst_174783 = (oops.state._STAR_runtime_state_STAR_ = inst_174782);
var state_174877__$1 = (function (){var statearr_175242 = state_174877;
(statearr_175242[(12)] = inst_174774__$1);

(statearr_175242[(85)] = inst_174779);

(statearr_175242[(124)] = inst_174783);

return statearr_175242;
})();
var statearr_175243_178979 = state_174877__$1;
(statearr_175243_178979[(2)] = null);

(statearr_175243_178979[(1)] = (164));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (71))){
var inst_174323 = (state_174877[(46)]);
var inst_174421 = (inst_174323["classList"]);
var state_174877__$1 = state_174877;
var statearr_175244_178980 = state_174877__$1;
(statearr_175244_178980[(2)] = inst_174421);

(statearr_175244_178980[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (42))){
var inst_174324 = (state_174877[(9)]);
var inst_174360 = (state_174877[(2)]);
var inst_174365 = oops.state._STAR_runtime_state_STAR_;
var inst_174366 = (new Error());
var inst_174367 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_174368 = oops.state.prepare_state(inst_174324,inst_174366,inst_174367);
var inst_174369 = (oops.state._STAR_runtime_state_STAR_ = inst_174368);
var state_174877__$1 = (function (){var statearr_175245 = state_174877;
(statearr_175245[(125)] = inst_174360);

(statearr_175245[(112)] = inst_174365);

(statearr_175245[(126)] = inst_174369);

return statearr_175245;
})();
var statearr_175246_178981 = state_174877__$1;
(statearr_175246_178981[(2)] = null);

(statearr_175246_178981[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (80))){
var inst_174453 = (state_174877[(2)]);
var _ = (function (){var statearr_175247 = state_174877;
(statearr_175247[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175247;
})();
var state_174877__$1 = state_174877;
var statearr_175248_178982 = state_174877__$1;
(statearr_175248_178982[(2)] = inst_174453);

(statearr_175248_178982[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (37))){
var inst_174752 = (state_174877[(2)]);
var state_174877__$1 = (function (){var statearr_175252 = state_174877;
(statearr_175252[(127)] = inst_174752);

return statearr_175252;
})();
if(cljs.core.truth_(on_dice_roll)){
var statearr_175253_178983 = state_174877__$1;
(statearr_175253_178983[(1)] = (155));

} else {
var statearr_175254_178984 = state_174877__$1;
(statearr_175254_178984[(1)] = (156));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (183))){
var inst_174841 = (state_174877[(2)]);
var _ = (function (){var statearr_175255 = state_174877;
(statearr_175255[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175255;
})();
var state_174877__$1 = state_174877;
var statearr_175256_178985 = state_174877__$1;
(statearr_175256_178985[(2)] = inst_174841);

(statearr_175256_178985[(1)] = (179));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (63))){
var inst_174309 = (state_174877[(69)]);
var inst_174306 = (state_174877[(44)]);
var inst_174307 = (state_174877[(98)]);
var inst_174308 = (state_174877[(70)]);
var inst_174521 = (state_174877[(2)]);
var inst_174522 = (inst_174309 + (1));
var tmp175249 = inst_174307;
var tmp175250 = inst_174308;
var tmp175251 = inst_174306;
var inst_174306__$1 = tmp175251;
var inst_174307__$1 = tmp175249;
var inst_174308__$1 = tmp175250;
var inst_174309__$1 = inst_174522;
var state_174877__$1 = (function (){var statearr_175257 = state_174877;
(statearr_175257[(128)] = inst_174521);

(statearr_175257[(44)] = inst_174306__$1);

(statearr_175257[(98)] = inst_174307__$1);

(statearr_175257[(70)] = inst_174308__$1);

(statearr_175257[(69)] = inst_174309__$1);

return statearr_175257;
})();
var statearr_175258_178986 = state_174877__$1;
(statearr_175258_178986[(2)] = null);

(statearr_175258_178986[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (94))){
var inst_174512 = (state_174877[(2)]);
var _ = (function (){var statearr_175259 = state_174877;
(statearr_175259[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175259;
})();
var state_174877__$1 = state_174877;
var statearr_175260_178987 = state_174877__$1;
(statearr_175260_178987[(2)] = inst_174512);

(statearr_175260_178987[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (8))){
var inst_174148 = (state_174877[(24)]);
var inst_174171 = (state_174877[(2)]);
var _ = (function (){var statearr_175261 = state_174877;
(statearr_175261[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175261;
})();
var state_174877__$1 = (function (){var statearr_175262 = state_174877;
(statearr_175262[(129)] = inst_174171);

return statearr_175262;
})();
var statearr_175263_178988 = state_174877__$1;
(statearr_175263_178988[(2)] = inst_174148);

(statearr_175263_178988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (190))){
var inst_174871 = (state_174877[(2)]);
var inst_174872 = teg_online.utils.bootstrap.hide_modal(modal);
var state_174877__$1 = (function (){var statearr_175264 = state_174877;
(statearr_175264[(130)] = inst_174871);

return statearr_175264;
})();
var statearr_175265_178989 = state_174877__$1;
(statearr_175265_178989[(2)] = inst_174872);

(statearr_175265_178989[(1)] = (189));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (177))){
var inst_174816 = (state_174877[(20)]);
var _ = (function (){var statearr_175267 = state_174877;
(statearr_175267[(4)] = cljs.core.cons((179),(state_174877[(4)])));

return statearr_175267;
})();
var ___$1 = (function (){var statearr_175268 = state_174877;
(statearr_175268[(4)] = cljs.core.cons((180),(state_174877[(4)])));

return statearr_175268;
})();
var inst_174836 = oops.core.validate_object_access_dynamically(inst_174816,(0),"classList",true,true,false);
var state_174877__$1 = state_174877;
if(inst_174836){
var statearr_175269_178990 = state_174877__$1;
(statearr_175269_178990[(1)] = (181));

} else {
var statearr_175270_178991 = state_174877__$1;
(statearr_175270_178991[(1)] = (182));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (49))){
var inst_174351 = cljs.core.last(imgs);
var state_174877__$1 = state_174877;
var statearr_175271_178992 = state_174877__$1;
(statearr_175271_178992[(2)] = inst_174351);

(statearr_175271_178992[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174878 === (84))){
var _ = (function (){var statearr_175272 = state_174877;
(statearr_175272[(4)] = cljs.core.rest((state_174877[(4)])));

return statearr_175272;
})();
var state_174877__$1 = state_174877;
var ex175266 = (state_174877__$1[(2)]);
var statearr_175273_178993 = state_174877__$1;
(statearr_175273_178993[(5)] = ex175266);


throw ex175266;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$state_machine__18069__auto__ = null;
var teg_online$ui$state_machine__18069__auto____0 = (function (){
var statearr_175274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_175274[(0)] = teg_online$ui$state_machine__18069__auto__);

(statearr_175274[(1)] = (1));

return statearr_175274;
});
var teg_online$ui$state_machine__18069__auto____1 = (function (state_174877){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_174877);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e175275){var ex__18072__auto__ = e175275;
var statearr_175276_178994 = state_174877;
(statearr_175276_178994[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_174877[(4)]))){
var statearr_175277_178995 = state_174877;
(statearr_175277_178995[(1)] = cljs.core.first((state_174877[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__178996 = state_174877;
state_174877 = G__178996;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$state_machine__18069__auto__ = function(state_174877){
switch(arguments.length){
case 0:
return teg_online$ui$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$state_machine__18069__auto____1.call(this,state_174877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$state_machine__18069__auto____0;
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$state_machine__18069__auto____1;
return teg_online$ui$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_175278 = f__19294__auto__();
(statearr_175278[(6)] = c__19293__auto____$1);

return statearr_175278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto____$1;
});
})();
var inst_174009 = teg_online.utils.bootstrap.on_click(inst_173856,inst_174008);
var inst_174010 = teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1(inst_174000);
var state_174032__$1 = (function (){var statearr_175279 = state_174032;
(statearr_175279[(7)] = inst_174005);

(statearr_175279[(8)] = inst_174007);

(statearr_175279[(9)] = inst_174009);

return statearr_175279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_174032__$1,(2),inst_174010);
} else {
if((state_val_174033 === (4))){
var inst_174014 = (state_174032[(10)]);
var inst_174019 = teg_online.game.get_army(inst_174014,attacker);
var inst_174020 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_174019);
var state_174032__$1 = state_174032;
if(inst_174020){
var statearr_175280_178997 = state_174032__$1;
(statearr_175280_178997[(1)] = (6));

} else {
var statearr_175281_178998 = state_174032__$1;
(statearr_175281_178998[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174033 === (6))){
var state_174032__$1 = state_174032;
var statearr_175282_178999 = state_174032__$1;
(statearr_175282_178999[(2)] = new cljs.core.Keyword(null,"failure","failure",720415879));

(statearr_175282_178999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174033 === (3))){
var state_174032__$1 = state_174032;
var statearr_175283_179000 = state_174032__$1;
(statearr_175283_179000[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_175283_179000[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174033 === (2))){
var inst_174014 = (state_174032[(10)]);
var inst_174012 = (state_174032[(2)]);
var inst_174013 = cljs.core.deref(state);
var inst_174014__$1 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_174013);
var inst_174015 = teg_online.game.get_army(inst_174014__$1,defender);
var inst_174016 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),inst_174015);
var state_174032__$1 = (function (){var statearr_175284 = state_174032;
(statearr_175284[(11)] = inst_174012);

(statearr_175284[(10)] = inst_174014__$1);

return statearr_175284;
})();
if(inst_174016){
var statearr_175285_179001 = state_174032__$1;
(statearr_175285_179001[(1)] = (3));

} else {
var statearr_175286_179002 = state_174032__$1;
(statearr_175286_179002[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174033 === (11))){
var inst_174026 = (state_174032[(2)]);
var state_174032__$1 = state_174032;
var statearr_175287_179003 = state_174032__$1;
(statearr_175287_179003[(2)] = inst_174026);

(statearr_175287_179003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174033 === (9))){
var state_174032__$1 = state_174032;
var statearr_175288_179004 = state_174032__$1;
(statearr_175288_179004[(2)] = new cljs.core.Keyword(null,"cancel","cancel",-1964088360));

(statearr_175288_179004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174033 === (5))){
var inst_174030 = (state_174032[(2)]);
var state_174032__$1 = state_174032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_174032__$1,inst_174030);
} else {
if((state_val_174033 === (10))){
var state_174032__$1 = state_174032;
var statearr_175289_179005 = state_174032__$1;
(statearr_175289_179005[(2)] = null);

(statearr_175289_179005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174033 === (8))){
var inst_174028 = (state_174032[(2)]);
var state_174032__$1 = state_174032;
var statearr_175290_179006 = state_174032__$1;
(statearr_175290_179006[(2)] = inst_174028);

(statearr_175290_179006[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$state_machine__18069__auto__ = null;
var teg_online$ui$state_machine__18069__auto____0 = (function (){
var statearr_175291 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_175291[(0)] = teg_online$ui$state_machine__18069__auto__);

(statearr_175291[(1)] = (1));

return statearr_175291;
});
var teg_online$ui$state_machine__18069__auto____1 = (function (state_174032){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_174032);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e175292){var ex__18072__auto__ = e175292;
var statearr_175293_179007 = state_174032;
(statearr_175293_179007[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_174032[(4)]))){
var statearr_175294_179008 = state_174032;
(statearr_175294_179008[(1)] = cljs.core.first((state_174032[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179009 = state_174032;
state_174032 = G__179009;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$state_machine__18069__auto__ = function(state_174032){
switch(arguments.length){
case 0:
return teg_online$ui$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$state_machine__18069__auto____1.call(this,state_174032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$state_machine__18069__auto____0;
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$state_machine__18069__auto____1;
return teg_online$ui$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_175295 = f__19294__auto__();
(statearr_175295[(6)] = c__19293__auto__);

return statearr_175295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
}));

(teg_online.ui.show_attack_dialog.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(teg_online.ui.show_attack_dialog.cljs$lang$applyTo = (function (seq173845){
var G__173846 = cljs.core.first(seq173845);
var seq173845__$1 = cljs.core.next(seq173845);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__173846,seq173845__$1);
}));

teg_online.ui.show_draw_card_dialog = (function teg_online$ui$show_draw_card_dialog(game,country_id){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_175345){
var state_val_175346 = (state_175345[(1)]);
if((state_val_175346 === (1))){
var inst_175296 = (teg_online.board.countries.cljs$core$IFn$_invoke$arity$1 ? teg_online.board.countries.cljs$core$IFn$_invoke$arity$1(country_id) : teg_online.board.countries.call(null,country_id));
var inst_175297 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_175296);
var inst_175298 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(game);
var inst_175299 = (country_id.cljs$core$IFn$_invoke$arity$1 ? country_id.cljs$core$IFn$_invoke$arity$1(inst_175298) : country_id.call(null,inst_175298));
var inst_175300 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_175299);
var inst_175301 = (teg_online.ui_constants.card_images.cljs$core$IFn$_invoke$arity$1 ? teg_online.ui_constants.card_images.cljs$core$IFn$_invoke$arity$1(inst_175300) : teg_online.ui_constants.card_images.call(null,inst_175300));
var inst_175302 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175303 = [new cljs.core.Keyword(null,"h2","h2",-372662728),"Conseguiste una tarjeta de pa\u00EDs"];
var inst_175304 = (new cljs.core.PersistentVector(null,2,(5),inst_175302,inst_175303,null));
var inst_175305 = (new cljs.core.List(null,teg_online.utils.bootstrap.close_modal_btn,null,(1),null));
var inst_175306 = (new cljs.core.List(null,inst_175304,inst_175305,(2),null));
var inst_175307 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175308 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175309 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175310 = [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)];
var inst_175311 = (new cljs.core.PersistentVector(null,1,(5),inst_175309,inst_175310,null));
var inst_175312 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175313 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175314 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175315 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175316 = [new cljs.core.Keyword(null,"h1","h1",-1896887462),inst_175297];
var inst_175317 = (new cljs.core.PersistentVector(null,2,(5),inst_175315,inst_175316,null));
var inst_175318 = [new cljs.core.Keyword(null,"div.col-6","div.col-6",-2040623677),inst_175317];
var inst_175319 = (new cljs.core.PersistentVector(null,2,(5),inst_175314,inst_175318,null));
var inst_175320 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175321 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175322 = [new cljs.core.Keyword(null,"src","src",-1651076051)];
var inst_175323 = [inst_175301];
var inst_175324 = cljs.core.PersistentHashMap.fromArrays(inst_175322,inst_175323);
var inst_175325 = [new cljs.core.Keyword(null,"img.img-fluid","img.img-fluid",1384539413),inst_175324];
var inst_175326 = (new cljs.core.PersistentVector(null,2,(5),inst_175321,inst_175325,null));
var inst_175327 = [new cljs.core.Keyword(null,"div.col-6","div.col-6",-2040623677),inst_175326];
var inst_175328 = (new cljs.core.PersistentVector(null,2,(5),inst_175320,inst_175327,null));
var inst_175329 = [new cljs.core.Keyword(null,"div.row.border.border-dark.align-items-center","div.row.border.border-dark.align-items-center",-2059264943),inst_175319,inst_175328];
var inst_175330 = (new cljs.core.PersistentVector(null,3,(5),inst_175313,inst_175329,null));
var inst_175331 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_175330];
var inst_175332 = (new cljs.core.PersistentVector(null,2,(5),inst_175312,inst_175331,null));
var inst_175333 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175334 = [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)];
var inst_175335 = (new cljs.core.PersistentVector(null,1,(5),inst_175333,inst_175334,null));
var inst_175336 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_175311,inst_175332,inst_175335];
var inst_175337 = (new cljs.core.PersistentVector(null,4,(5),inst_175308,inst_175336,null));
var inst_175338 = [new cljs.core.Keyword(null,"div.container.text-center","div.container.text-center",-1740706728),inst_175337];
var inst_175339 = (new cljs.core.PersistentVector(null,2,(5),inst_175307,inst_175338,null));
var inst_175340 = teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),inst_175306,new cljs.core.Keyword(null,"body","body",-2049205669),inst_175339,new cljs.core.Keyword(null,"footer","footer",1606445390),teg_online.utils.bootstrap.accept_modal_btn], 0));
var inst_175341 = teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1(inst_175340);
var state_175345__$1 = state_175345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175345__$1,(2),inst_175341);
} else {
if((state_val_175346 === (2))){
var inst_175343 = (state_175345[(2)]);
var state_175345__$1 = state_175345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_175345__$1,inst_175343);
} else {
return null;
}
}
});
return (function() {
var teg_online$ui$show_draw_card_dialog_$_state_machine__18069__auto__ = null;
var teg_online$ui$show_draw_card_dialog_$_state_machine__18069__auto____0 = (function (){
var statearr_175347 = [null,null,null,null,null,null,null];
(statearr_175347[(0)] = teg_online$ui$show_draw_card_dialog_$_state_machine__18069__auto__);

(statearr_175347[(1)] = (1));

return statearr_175347;
});
var teg_online$ui$show_draw_card_dialog_$_state_machine__18069__auto____1 = (function (state_175345){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_175345);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e175348){var ex__18072__auto__ = e175348;
var statearr_175349_179010 = state_175345;
(statearr_175349_179010[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_175345[(4)]))){
var statearr_175350_179011 = state_175345;
(statearr_175350_179011[(1)] = cljs.core.first((state_175345[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179012 = state_175345;
state_175345 = G__179012;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$show_draw_card_dialog_$_state_machine__18069__auto__ = function(state_175345){
switch(arguments.length){
case 0:
return teg_online$ui$show_draw_card_dialog_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$show_draw_card_dialog_$_state_machine__18069__auto____1.call(this,state_175345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$show_draw_card_dialog_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$show_draw_card_dialog_$_state_machine__18069__auto____0;
teg_online$ui$show_draw_card_dialog_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$show_draw_card_dialog_$_state_machine__18069__auto____1;
return teg_online$ui$show_draw_card_dialog_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_175351 = f__19294__auto__();
(statearr_175351[(6)] = c__19293__auto__);

return statearr_175351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.show_card_list_dialog = (function teg_online$ui$show_card_list_dialog(game,countries){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_175387){
var state_val_175388 = (state_175387[(1)]);
if((state_val_175388 === (1))){
var inst_175352 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175353 = [new cljs.core.Keyword(null,"h2","h2",-372662728),"Tarjetas de pa\u00EDs"];
var inst_175354 = (new cljs.core.PersistentVector(null,2,(5),inst_175352,inst_175353,null));
var inst_175355 = (new cljs.core.List(null,teg_online.utils.bootstrap.close_modal_btn,null,(1),null));
var inst_175356 = (new cljs.core.List(null,inst_175354,inst_175355,(2),null));
var inst_175357 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175358 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175359 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175360 = [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)];
var inst_175361 = (new cljs.core.PersistentVector(null,1,(5),inst_175359,inst_175360,null));
var inst_175362 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175363 = cljs.core.empty_QMARK_(countries);
var state_175387__$1 = (function (){var statearr_175389 = state_175387;
(statearr_175389[(7)] = inst_175356);

(statearr_175389[(8)] = inst_175357);

(statearr_175389[(9)] = inst_175358);

(statearr_175389[(10)] = inst_175361);

(statearr_175389[(11)] = inst_175362);

return statearr_175389;
})();
if(inst_175363){
var statearr_175390_179013 = state_175387__$1;
(statearr_175390_179013[(1)] = (3));

} else {
var statearr_175391_179014 = state_175387__$1;
(statearr_175391_179014[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175388 === (2))){
var inst_175385 = (state_175387[(2)]);
var state_175387__$1 = state_175387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_175387__$1,inst_175385);
} else {
if((state_val_175388 === (3))){
var inst_175365 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175366 = [new cljs.core.Keyword(null,"h3","h3",2067611163),"No ten\u00E9s ninguna tarjeta de pa\u00EDs"];
var inst_175367 = (new cljs.core.PersistentVector(null,2,(5),inst_175365,inst_175366,null));
var state_175387__$1 = state_175387;
var statearr_175392_179015 = state_175387__$1;
(statearr_175392_179015[(2)] = inst_175367);

(statearr_175392_179015[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175388 === (4))){
var inst_175369 = (function (){return (function (country_id){
var country_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((teg_online.board.countries.cljs$core$IFn$_invoke$arity$1 ? teg_online.board.countries.cljs$core$IFn$_invoke$arity$1(country_id) : teg_online.board.countries.call(null,country_id)));
var card_image = (function (){var G__175393 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1((function (){var G__175394 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(game);
return (country_id.cljs$core$IFn$_invoke$arity$1 ? country_id.cljs$core$IFn$_invoke$arity$1(G__175394) : country_id.call(null,G__175394));
})());
return (teg_online.ui_constants.card_images.cljs$core$IFn$_invoke$arity$1 ? teg_online.ui_constants.card_images.cljs$core$IFn$_invoke$arity$1(G__175393) : teg_online.ui_constants.card_images.call(null,G__175393));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.my-2.border.border-dark.align-items-center","div.row.my-2.border.border-dark.align-items-center",-2095216365),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-6","div.col-6",-2040623677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),country_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-6","div.col-6",-2040623677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-fluid","img.img-fluid",1384539413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),card_image], null)], null)], null)], null);
});
})();
var inst_175370 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_175369,countries);
var state_175387__$1 = state_175387;
var statearr_175395_179016 = state_175387__$1;
(statearr_175395_179016[(2)] = inst_175370);

(statearr_175395_179016[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175388 === (5))){
var inst_175362 = (state_175387[(11)]);
var inst_175361 = (state_175387[(10)]);
var inst_175358 = (state_175387[(9)]);
var inst_175357 = (state_175387[(8)]);
var inst_175356 = (state_175387[(7)]);
var inst_175372 = (state_175387[(2)]);
var inst_175373 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_175372];
var inst_175374 = (new cljs.core.PersistentVector(null,2,(5),inst_175362,inst_175373,null));
var inst_175375 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175376 = [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)];
var inst_175377 = (new cljs.core.PersistentVector(null,1,(5),inst_175375,inst_175376,null));
var inst_175378 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_175361,inst_175374,inst_175377];
var inst_175379 = (new cljs.core.PersistentVector(null,4,(5),inst_175358,inst_175378,null));
var inst_175380 = [new cljs.core.Keyword(null,"div.container.text-center","div.container.text-center",-1740706728),inst_175379];
var inst_175381 = (new cljs.core.PersistentVector(null,2,(5),inst_175357,inst_175380,null));
var inst_175382 = teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),inst_175356,new cljs.core.Keyword(null,"body","body",-2049205669),inst_175381,new cljs.core.Keyword(null,"footer","footer",1606445390),teg_online.utils.bootstrap.accept_modal_btn], 0));
var inst_175383 = teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1(inst_175382);
var state_175387__$1 = state_175387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175387__$1,(2),inst_175383);
} else {
return null;
}
}
}
}
}
});
return (function() {
var teg_online$ui$show_card_list_dialog_$_state_machine__18069__auto__ = null;
var teg_online$ui$show_card_list_dialog_$_state_machine__18069__auto____0 = (function (){
var statearr_175396 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_175396[(0)] = teg_online$ui$show_card_list_dialog_$_state_machine__18069__auto__);

(statearr_175396[(1)] = (1));

return statearr_175396;
});
var teg_online$ui$show_card_list_dialog_$_state_machine__18069__auto____1 = (function (state_175387){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_175387);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e175397){var ex__18072__auto__ = e175397;
var statearr_175398_179017 = state_175387;
(statearr_175398_179017[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_175387[(4)]))){
var statearr_175399_179018 = state_175387;
(statearr_175399_179018[(1)] = cljs.core.first((state_175387[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179019 = state_175387;
state_175387 = G__179019;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$show_card_list_dialog_$_state_machine__18069__auto__ = function(state_175387){
switch(arguments.length){
case 0:
return teg_online$ui$show_card_list_dialog_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$show_card_list_dialog_$_state_machine__18069__auto____1.call(this,state_175387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$show_card_list_dialog_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$show_card_list_dialog_$_state_machine__18069__auto____0;
teg_online$ui$show_card_list_dialog_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$show_card_list_dialog_$_state_machine__18069__auto____1;
return teg_online$ui$show_card_list_dialog_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_175400 = f__19294__auto__();
(statearr_175400[(6)] = c__19293__auto__);

return statearr_175400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.show_exchange_dialog = (function teg_online$ui$show_exchange_dialog(state,forced_QMARK_){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_175520){
var state_val_175521 = (state_175520[(1)]);
if((state_val_175521 === (7))){
var inst_175453 = (state_175520[(7)]);
var _ = (function (){var statearr_175522 = state_175520;
(statearr_175522[(4)] = cljs.core.rest((state_175520[(4)])));

return statearr_175522;
})();
var inst_175459 = (state_175520[(2)]);
var inst_175460 = (oops.state._STAR_runtime_state_STAR_ = inst_175453);
var ___$1 = (function (){var temp__5825__auto__ = (state_175520[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_175520__$1 = (function (){var statearr_175523 = state_175520;
(statearr_175523[(8)] = inst_175460);

return statearr_175523;
})();
var statearr_175524_179020 = state_175520__$1;
(statearr_175524_179020[(2)] = inst_175459);

(statearr_175524_179020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (20))){
var inst_175508 = [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087)];
var inst_175509 = ["static",false];
var inst_175510 = cljs.core.PersistentHashMap.fromArrays(inst_175508,inst_175509);
var state_175520__$1 = state_175520;
var statearr_175525_179021 = state_175520__$1;
(statearr_175525_179021[(2)] = inst_175510);

(statearr_175525_179021[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (1))){
var inst_175406 = (state_175520[(9)]);
var inst_175404 = (state_175520[(10)]);
var inst_175407 = (state_175520[(11)]);
var inst_175401 = (state_175520[(12)]);
var inst_175402 = (state_175520[(13)]);
var inst_175408 = (state_175520[(14)]);
var inst_175413 = (state_175520[(15)]);
var inst_175401__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var inst_175402__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var inst_175403 = cljs.core.deref(state);
var inst_175404__$1 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_175403);
var inst_175405 = cljs.core.deref(state);
var inst_175406__$1 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_175405);
var inst_175407__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_175406__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var inst_175408__$1 = teg_online.game.get_player_cards(inst_175404__$1,inst_175407__$1);
var inst_175409 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.utils.bootstrap.accept_modal_btn], 0));
var inst_175410 = (function (){var result = inst_175401__$1;
var selection = inst_175402__$1;
var game = inst_175404__$1;
var user = inst_175406__$1;
var user_id = inst_175407__$1;
var countries = inst_175408__$1;
return (function (){
return cljs.core.reset_BANG_(result,cljs.core.deref(selection));
});
})();
var inst_175411 = teg_online.utils.bootstrap.on_click(inst_175409,inst_175410);
var inst_175412 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.utils.bootstrap.cancel_modal_btn], 0));
var inst_175413__$1 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.utils.bootstrap.close_modal_btn], 0));
var inst_175414 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175415 = [new cljs.core.Keyword(null,"h2","h2",-372662728),"Seleccionar 3 tarjetas"];
var inst_175416 = (new cljs.core.PersistentVector(null,2,(5),inst_175414,inst_175415,null));
var inst_175417 = (new cljs.core.List(null,inst_175413__$1,null,(1),null));
var inst_175418 = (new cljs.core.List(null,inst_175416,inst_175417,(2),null));
var inst_175419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175420 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175422 = [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)];
var inst_175423 = (new cljs.core.PersistentVector(null,1,(5),inst_175421,inst_175422,null));
var inst_175424 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175425 = cljs.core.empty_QMARK_(inst_175408__$1);
var state_175520__$1 = (function (){var statearr_175527 = state_175520;
(statearr_175527[(12)] = inst_175401__$1);

(statearr_175527[(13)] = inst_175402__$1);

(statearr_175527[(10)] = inst_175404__$1);

(statearr_175527[(9)] = inst_175406__$1);

(statearr_175527[(11)] = inst_175407__$1);

(statearr_175527[(14)] = inst_175408__$1);

(statearr_175527[(16)] = inst_175411);

(statearr_175527[(17)] = inst_175412);

(statearr_175527[(15)] = inst_175413__$1);

(statearr_175527[(18)] = inst_175418);

(statearr_175527[(19)] = inst_175419);

(statearr_175527[(20)] = inst_175420);

(statearr_175527[(21)] = inst_175423);

(statearr_175527[(22)] = inst_175424);

return statearr_175527;
})();
if(inst_175425){
var statearr_175528_179022 = state_175520__$1;
(statearr_175528_179022[(1)] = (2));

} else {
var statearr_175529_179023 = state_175520__$1;
(statearr_175529_179023[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (4))){
var inst_175424 = (state_175520[(22)]);
var inst_175423 = (state_175520[(21)]);
var inst_175420 = (state_175520[(20)]);
var inst_175419 = (state_175520[(19)]);
var inst_175412 = (state_175520[(17)]);
var inst_175411 = (state_175520[(16)]);
var inst_175418 = (state_175520[(18)]);
var inst_175402 = (state_175520[(13)]);
var inst_175406 = (state_175520[(9)]);
var inst_175404 = (state_175520[(10)]);
var inst_175413 = (state_175520[(15)]);
var inst_175407 = (state_175520[(11)]);
var inst_175408 = (state_175520[(14)]);
var inst_175446 = (state_175520[(23)]);
var inst_175401 = (state_175520[(12)]);
var inst_175434 = (state_175520[(2)]);
var inst_175435 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_175434];
var inst_175436 = (new cljs.core.PersistentVector(null,2,(5),inst_175424,inst_175435,null));
var inst_175437 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175438 = [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)];
var inst_175439 = (new cljs.core.PersistentVector(null,1,(5),inst_175437,inst_175438,null));
var inst_175440 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_175423,inst_175436,inst_175439];
var inst_175441 = (new cljs.core.PersistentVector(null,4,(5),inst_175420,inst_175440,null));
var inst_175442 = [new cljs.core.Keyword(null,"div.container.text-center","div.container.text-center",-1740706728),inst_175441];
var inst_175443 = (new cljs.core.PersistentVector(null,2,(5),inst_175419,inst_175442,null));
var inst_175444 = (new cljs.core.List(null,inst_175412,null,(1),null));
var inst_175445 = (new cljs.core.List(null,inst_175411,inst_175444,(2),null));
var inst_175446__$1 = teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),inst_175418,new cljs.core.Keyword(null,"body","body",-2049205669),inst_175443,new cljs.core.Keyword(null,"footer","footer",1606445390),inst_175445], 0));
var inst_175447 = (function (){var accept_button = inst_175411;
var selection = inst_175402;
var user = inst_175406;
var game = inst_175404;
var close_button = inst_175413;
var user_id = inst_175407;
var countries = inst_175408;
var modal = inst_175446__$1;
var cancel_button = inst_175412;
var result = inst_175401;
return (function (_,___$1,___$2,value){
var target_obj_175530 = accept_button;
var _STAR_runtime_state_STAR__orig_val__175532 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__175533 = oops.state.prepare_state(target_obj_175530,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__175533);

try{var parent_obj_175531_179024 = target_obj_175530;
if(oops.core.validate_object_access_dynamically(parent_obj_175531_179024,(0),"disabled",true,true,true)){
(parent_obj_175531_179024["disabled"] = cljs.core.not(teg_online.game.valid_exchange_QMARK_(game,value)));
} else {
}

return target_obj_175530;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__175532);
}});
})();
var inst_175448 = cljs.core.add_watch(inst_175402,new cljs.core.Keyword("teg-online.ui","selection-change","teg-online.ui/selection-change",360046638),inst_175447);
var inst_175453 = oops.state._STAR_runtime_state_STAR_;
var inst_175454 = (new Error());
var inst_175455 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_175456 = oops.state.prepare_state(inst_175412,inst_175454,inst_175455);
var inst_175457 = (oops.state._STAR_runtime_state_STAR_ = inst_175456);
var state_175520__$1 = (function (){var statearr_175534 = state_175520;
(statearr_175534[(23)] = inst_175446__$1);

(statearr_175534[(24)] = inst_175448);

(statearr_175534[(7)] = inst_175453);

(statearr_175534[(25)] = inst_175457);

return statearr_175534;
})();
var statearr_175535_179025 = state_175520__$1;
(statearr_175535_179025[(2)] = null);

(statearr_175535_179025[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (15))){
var _ = (function (){var statearr_175536 = state_175520;
(statearr_175536[(4)] = cljs.core.rest((state_175520[(4)])));

return statearr_175536;
})();
var state_175520__$1 = state_175520;
var ex175526 = (state_175520__$1[(2)]);
var statearr_175537_179026 = state_175520__$1;
(statearr_175537_179026[(5)] = ex175526);


throw ex175526;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (21))){
var inst_175512 = cljs.core.PersistentHashMap.EMPTY;
var state_175520__$1 = state_175520;
var statearr_175538_179027 = state_175520__$1;
(statearr_175538_179027[(2)] = inst_175512);

(statearr_175538_179027[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (13))){
var inst_175402 = (state_175520[(13)]);
var inst_175504 = (state_175520[(2)]);
var inst_175505 = cljs.core.PersistentHashSet.EMPTY;
var inst_175506 = cljs.core.reset_BANG_(inst_175402,inst_175505);
var state_175520__$1 = (function (){var statearr_175539 = state_175520;
(statearr_175539[(26)] = inst_175504);

(statearr_175539[(27)] = inst_175506);

return statearr_175539;
})();
if(cljs.core.truth_(forced_QMARK_)){
var statearr_175540_179028 = state_175520__$1;
(statearr_175540_179028[(1)] = (20));

} else {
var statearr_175541_179029 = state_175520__$1;
(statearr_175541_179029[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (22))){
var inst_175446 = (state_175520[(23)]);
var inst_175514 = (state_175520[(2)]);
var inst_175515 = teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$2(inst_175446,inst_175514);
var state_175520__$1 = state_175520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175520__$1,(19),inst_175515);
} else {
if((state_val_175521 === (6))){
var inst_175413 = (state_175520[(15)]);
var inst_175476 = (state_175520[(2)]);
var inst_175481 = oops.state._STAR_runtime_state_STAR_;
var inst_175482 = (new Error());
var inst_175483 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_175484 = oops.state.prepare_state(inst_175413,inst_175482,inst_175483);
var inst_175485 = (oops.state._STAR_runtime_state_STAR_ = inst_175484);
var state_175520__$1 = (function (){var statearr_175542 = state_175520;
(statearr_175542[(28)] = inst_175476);

(statearr_175542[(29)] = inst_175481);

(statearr_175542[(30)] = inst_175485);

return statearr_175542;
})();
var statearr_175543_179030 = state_175520__$1;
(statearr_175543_179030[(2)] = null);

(statearr_175543_179030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (17))){
var state_175520__$1 = state_175520;
var statearr_175544_179031 = state_175520__$1;
(statearr_175544_179031[(2)] = null);

(statearr_175544_179031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (3))){
var inst_175411 = (state_175520[(16)]);
var inst_175402 = (state_175520[(13)]);
var inst_175406 = (state_175520[(9)]);
var inst_175404 = (state_175520[(10)]);
var inst_175413 = (state_175520[(15)]);
var inst_175407 = (state_175520[(11)]);
var inst_175408 = (state_175520[(14)]);
var inst_175412 = (state_175520[(17)]);
var inst_175401 = (state_175520[(12)]);
var inst_175431 = (function (){var accept_button = inst_175411;
var selection = inst_175402;
var user = inst_175406;
var game = inst_175404;
var close_button = inst_175413;
var user_id = inst_175407;
var countries = inst_175408;
var cancel_button = inst_175412;
var result = inst_175401;
return (function (country_id){
var country_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((teg_online.board.countries.cljs$core$IFn$_invoke$arity$1 ? teg_online.board.countries.cljs$core$IFn$_invoke$arity$1(country_id) : teg_online.board.countries.call(null,country_id)));
var card_image = (function (){var G__175545 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1((function (){var G__175546 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(game);
return (country_id.cljs$core$IFn$_invoke$arity$1 ? country_id.cljs$core$IFn$_invoke$arity$1(G__175546) : country_id.call(null,G__175546));
})());
return (teg_online.ui_constants.card_images.cljs$core$IFn$_invoke$arity$1 ? teg_online.ui_constants.card_images.cljs$core$IFn$_invoke$arity$1(G__175545) : teg_online.ui_constants.card_images.call(null,G__175545));
})();
var country_row = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.my-2.border.border-dark.bg-gradient.align-items-center","div.row.my-2.border.border-dark.bg-gradient.align-items-center",1464386121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-6","div.col-6",-2040623677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),country_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-6","div.col-6",-2040623677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-fluid","img.img-fluid",1384539413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),card_image], null)], null)], null)], null)], 0));
return teg_online.utils.bootstrap.on_click(country_row,(function (){
if(cljs.core.contains_QMARK_(cljs.core.deref(selection),country_id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(selection,cljs.core.disj,country_id);

return (function (){var target_obj_175547 = country_row;
var _STAR_runtime_state_STAR__orig_val__175549 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__175550 = oops.state.prepare_state(target_obj_175547,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__175550);

try{var next_obj_175548 = ((oops.core.validate_object_access_dynamically(target_obj_175547,(0),"classList",true,true,false))?(target_obj_175547["classList"]):null);
return next_obj_175548;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__175549);
}})().remove("bg-primary");
} else {
if((cljs.core.count(cljs.core.deref(selection)) < (3))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(selection,cljs.core.conj,country_id);

return (function (){var target_obj_175551 = country_row;
var _STAR_runtime_state_STAR__orig_val__175553 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__175554 = oops.state.prepare_state(target_obj_175551,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__175554);

try{var next_obj_175552 = ((oops.core.validate_object_access_dynamically(target_obj_175551,(0),"classList",true,true,false))?(target_obj_175551["classList"]):null);
return next_obj_175552;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__175553);
}})().add("bg-primary");
} else {
return null;
}
}
}));
});
})();
var inst_175432 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_175431,inst_175408);
var state_175520__$1 = state_175520;
var statearr_175555_179032 = state_175520__$1;
(statearr_175555_179032[(2)] = inst_175432);

(statearr_175555_179032[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (12))){
var inst_175413 = (state_175520[(15)]);
var _ = (function (){var statearr_175556 = state_175520;
(statearr_175556[(4)] = cljs.core.cons((14),(state_175520[(4)])));

return statearr_175556;
})();
var ___$1 = (function (){var statearr_175557 = state_175520;
(statearr_175557[(4)] = cljs.core.cons((15),(state_175520[(4)])));

return statearr_175557;
})();
var inst_175496 = oops.core.validate_object_access_dynamically(inst_175413,(0),"disabled",true,true,true);
var state_175520__$1 = state_175520;
if(inst_175496){
var statearr_175558_179033 = state_175520__$1;
(statearr_175558_179033[(1)] = (16));

} else {
var statearr_175559_179034 = state_175520__$1;
(statearr_175559_179034[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (2))){
var inst_175427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175428 = [new cljs.core.Keyword(null,"h3","h3",2067611163),"Todav\u00EDa no conseguiste ninguna tarjeta de pa\u00EDs"];
var inst_175429 = (new cljs.core.PersistentVector(null,2,(5),inst_175427,inst_175428,null));
var state_175520__$1 = state_175520;
var statearr_175560_179035 = state_175520__$1;
(statearr_175560_179035[(2)] = inst_175429);

(statearr_175560_179035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (19))){
var inst_175401 = (state_175520[(12)]);
var inst_175517 = (state_175520[(2)]);
var inst_175518 = cljs.core.deref(inst_175401);
var state_175520__$1 = (function (){var statearr_175561 = state_175520;
(statearr_175561[(31)] = inst_175517);

return statearr_175561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_175520__$1,inst_175518);
} else {
if((state_val_175521 === (11))){
var inst_175412 = (state_175520[(17)]);
var inst_175473 = (state_175520[(2)]);
var _ = (function (){var statearr_175562 = state_175520;
(statearr_175562[(4)] = cljs.core.rest((state_175520[(4)])));

return statearr_175562;
})();
var state_175520__$1 = (function (){var statearr_175563 = state_175520;
(statearr_175563[(32)] = inst_175473);

return statearr_175563;
})();
var statearr_175564_179036 = state_175520__$1;
(statearr_175564_179036[(2)] = inst_175412);

(statearr_175564_179036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (9))){
var inst_175412 = (state_175520[(17)]);
var inst_175470 = (inst_175412["disabled"] = forced_QMARK_);
var state_175520__$1 = state_175520;
var statearr_175565_179037 = state_175520__$1;
(statearr_175565_179037[(2)] = inst_175470);

(statearr_175565_179037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (5))){
var inst_175412 = (state_175520[(17)]);
var _ = (function (){var statearr_175566 = state_175520;
(statearr_175566[(4)] = cljs.core.cons((7),(state_175520[(4)])));

return statearr_175566;
})();
var ___$1 = (function (){var statearr_175567 = state_175520;
(statearr_175567[(4)] = cljs.core.cons((8),(state_175520[(4)])));

return statearr_175567;
})();
var inst_175468 = oops.core.validate_object_access_dynamically(inst_175412,(0),"disabled",true,true,true);
var state_175520__$1 = state_175520;
if(inst_175468){
var statearr_175568_179038 = state_175520__$1;
(statearr_175568_179038[(1)] = (9));

} else {
var statearr_175569_179039 = state_175520__$1;
(statearr_175569_179039[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (14))){
var inst_175481 = (state_175520[(29)]);
var _ = (function (){var statearr_175570 = state_175520;
(statearr_175570[(4)] = cljs.core.rest((state_175520[(4)])));

return statearr_175570;
})();
var inst_175487 = (state_175520[(2)]);
var inst_175488 = (oops.state._STAR_runtime_state_STAR_ = inst_175481);
var ___$1 = (function (){var temp__5825__auto__ = (state_175520[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_175520__$1 = (function (){var statearr_175571 = state_175520;
(statearr_175571[(33)] = inst_175488);

return statearr_175571;
})();
var statearr_175572_179040 = state_175520__$1;
(statearr_175572_179040[(2)] = inst_175487);

(statearr_175572_179040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (16))){
var inst_175413 = (state_175520[(15)]);
var inst_175498 = (inst_175413["disabled"] = forced_QMARK_);
var state_175520__$1 = state_175520;
var statearr_175573_179041 = state_175520__$1;
(statearr_175573_179041[(2)] = inst_175498);

(statearr_175573_179041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (10))){
var state_175520__$1 = state_175520;
var statearr_175575_179042 = state_175520__$1;
(statearr_175575_179042[(2)] = null);

(statearr_175575_179042[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (18))){
var inst_175413 = (state_175520[(15)]);
var inst_175501 = (state_175520[(2)]);
var _ = (function (){var statearr_175576 = state_175520;
(statearr_175576[(4)] = cljs.core.rest((state_175520[(4)])));

return statearr_175576;
})();
var state_175520__$1 = (function (){var statearr_175577 = state_175520;
(statearr_175577[(34)] = inst_175501);

return statearr_175577;
})();
var statearr_175578_179043 = state_175520__$1;
(statearr_175578_179043[(2)] = inst_175413);

(statearr_175578_179043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175521 === (8))){
var _ = (function (){var statearr_175579 = state_175520;
(statearr_175579[(4)] = cljs.core.rest((state_175520[(4)])));

return statearr_175579;
})();
var state_175520__$1 = state_175520;
var ex175574 = (state_175520__$1[(2)]);
var statearr_175580_179044 = state_175520__$1;
(statearr_175580_179044[(5)] = ex175574);


throw ex175574;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$show_exchange_dialog_$_state_machine__18069__auto__ = null;
var teg_online$ui$show_exchange_dialog_$_state_machine__18069__auto____0 = (function (){
var statearr_175581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_175581[(0)] = teg_online$ui$show_exchange_dialog_$_state_machine__18069__auto__);

(statearr_175581[(1)] = (1));

return statearr_175581;
});
var teg_online$ui$show_exchange_dialog_$_state_machine__18069__auto____1 = (function (state_175520){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_175520);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e175582){var ex__18072__auto__ = e175582;
var statearr_175583_179045 = state_175520;
(statearr_175583_179045[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_175520[(4)]))){
var statearr_175584_179046 = state_175520;
(statearr_175584_179046[(1)] = cljs.core.first((state_175520[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179047 = state_175520;
state_175520 = G__179047;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$show_exchange_dialog_$_state_machine__18069__auto__ = function(state_175520){
switch(arguments.length){
case 0:
return teg_online$ui$show_exchange_dialog_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$show_exchange_dialog_$_state_machine__18069__auto____1.call(this,state_175520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$show_exchange_dialog_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$show_exchange_dialog_$_state_machine__18069__auto____0;
teg_online$ui$show_exchange_dialog_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$show_exchange_dialog_$_state_machine__18069__auto____1;
return teg_online$ui$show_exchange_dialog_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_175585 = f__19294__auto__();
(statearr_175585[(6)] = c__19293__auto__);

return statearr_175585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.surrender_BANG_ = (function teg_online$ui$surrender_BANG_(state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_175598){
var state_val_175599 = (state_175598[(1)]);
if((state_val_175599 === (1))){
var inst_175586 = teg_online.utils.bootstrap.confirm.cljs$core$IFn$_invoke$arity$variadic("\u00A1Cobarde!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\u00BFEst\u00E1s seguro de que quer\u00E9s abandonar?"], 0));
var state_175598__$1 = state_175598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175598__$1,(2),inst_175586);
} else {
if((state_val_175599 === (2))){
var inst_175588 = (state_175598[(2)]);
var state_175598__$1 = state_175598;
if(cljs.core.truth_(inst_175588)){
var statearr_175600_179048 = state_175598__$1;
(statearr_175600_179048[(1)] = (3));

} else {
var statearr_175601_179049 = state_175598__$1;
(statearr_175601_179049[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175599 === (3))){
var inst_175590 = cljs.core.deref(state);
var inst_175591 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_175590);
var inst_175592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_175591,new cljs.core.Keyword(null,"id","id",-1388402092));
var inst_175593 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"game","game",-441523833),teg_online.game.surrender,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_175592], 0));
var state_175598__$1 = state_175598;
var statearr_175602_179050 = state_175598__$1;
(statearr_175602_179050[(2)] = inst_175593);

(statearr_175602_179050[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175599 === (4))){
var state_175598__$1 = state_175598;
var statearr_175603_179051 = state_175598__$1;
(statearr_175603_179051[(2)] = null);

(statearr_175603_179051[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175599 === (5))){
var inst_175596 = (state_175598[(2)]);
var state_175598__$1 = state_175598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_175598__$1,inst_175596);
} else {
return null;
}
}
}
}
}
});
return (function() {
var teg_online$ui$surrender_BANG__$_state_machine__18069__auto__ = null;
var teg_online$ui$surrender_BANG__$_state_machine__18069__auto____0 = (function (){
var statearr_175604 = [null,null,null,null,null,null,null];
(statearr_175604[(0)] = teg_online$ui$surrender_BANG__$_state_machine__18069__auto__);

(statearr_175604[(1)] = (1));

return statearr_175604;
});
var teg_online$ui$surrender_BANG__$_state_machine__18069__auto____1 = (function (state_175598){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_175598);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e175605){var ex__18072__auto__ = e175605;
var statearr_175606_179052 = state_175598;
(statearr_175606_179052[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_175598[(4)]))){
var statearr_175607_179053 = state_175598;
(statearr_175607_179053[(1)] = cljs.core.first((state_175598[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179054 = state_175598;
state_175598 = G__179054;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$surrender_BANG__$_state_machine__18069__auto__ = function(state_175598){
switch(arguments.length){
case 0:
return teg_online$ui$surrender_BANG__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$surrender_BANG__$_state_machine__18069__auto____1.call(this,state_175598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$surrender_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$surrender_BANG__$_state_machine__18069__auto____0;
teg_online$ui$surrender_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$surrender_BANG__$_state_machine__18069__auto____1;
return teg_online$ui$surrender_BANG__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_175608 = f__19294__auto__();
(statearr_175608[(6)] = c__19293__auto__);

return statearr_175608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.show_menu_BANG_ = (function teg_online$ui$show_menu_BANG_(state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_175684){
var state_val_175685 = (state_175684[(1)]);
if((state_val_175685 === (1))){
var inst_175609 = cljs.core.deref(state);
var inst_175610 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_175609);
var inst_175611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_175610,new cljs.core.Keyword(null,"id","id",-1388402092));
var inst_175612 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175613 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_175614 = ["button"];
var inst_175615 = cljs.core.PersistentHashMap.fromArrays(inst_175613,inst_175614);
var inst_175616 = [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-lg","button.btn.btn-primary.btn-lg",613853517),inst_175615,"Ver tarjetas de pa\u00EDs"];
var inst_175617 = (new cljs.core.PersistentVector(null,3,(5),inst_175612,inst_175616,null));
var inst_175618 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_175617], 0));
var inst_175619 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175620 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_175621 = ["button"];
var inst_175622 = cljs.core.PersistentHashMap.fromArrays(inst_175620,inst_175621);
var inst_175623 = [new cljs.core.Keyword(null,"button.btn.btn-secondary.btn-lg","button.btn.btn-secondary.btn-lg",-1973099630),inst_175622,"Ver objetivo secreto"];
var inst_175624 = (new cljs.core.PersistentVector(null,3,(5),inst_175619,inst_175623,null));
var inst_175625 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_175624], 0));
var inst_175626 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175627 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_175628 = ["button"];
var inst_175629 = cljs.core.PersistentHashMap.fromArrays(inst_175627,inst_175628);
var inst_175630 = [new cljs.core.Keyword(null,"button.btn.btn-secondary.btn-lg","button.btn.btn-secondary.btn-lg",-1973099630),inst_175629,"Ver objetivo com\u00FAn"];
var inst_175631 = (new cljs.core.PersistentVector(null,3,(5),inst_175626,inst_175630,null));
var inst_175632 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_175631], 0));
var inst_175633 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175634 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_175635 = ["button"];
var inst_175636 = cljs.core.PersistentHashMap.fromArrays(inst_175634,inst_175635);
var inst_175637 = [new cljs.core.Keyword(null,"button.btn.btn-danger.btn-lg","button.btn.btn-danger.btn-lg",1370084090),inst_175636,"Abandonar partida"];
var inst_175638 = (new cljs.core.PersistentVector(null,3,(5),inst_175633,inst_175637,null));
var inst_175639 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_175638], 0));
var inst_175640 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175642 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_175618];
var inst_175643 = (new cljs.core.PersistentVector(null,2,(5),inst_175641,inst_175642,null));
var inst_175644 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175645 = [new cljs.core.Keyword(null,"div.row.m-1","div.row.m-1",-801341908)];
var inst_175646 = (new cljs.core.PersistentVector(null,1,(5),inst_175644,inst_175645,null));
var inst_175647 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175648 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_175625];
var inst_175649 = (new cljs.core.PersistentVector(null,2,(5),inst_175647,inst_175648,null));
var inst_175650 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175651 = [new cljs.core.Keyword(null,"div.row.m-1","div.row.m-1",-801341908)];
var inst_175652 = (new cljs.core.PersistentVector(null,1,(5),inst_175650,inst_175651,null));
var inst_175653 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175654 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_175632];
var inst_175655 = (new cljs.core.PersistentVector(null,2,(5),inst_175653,inst_175654,null));
var inst_175656 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175657 = [new cljs.core.Keyword(null,"div.row.m-1","div.row.m-1",-801341908)];
var inst_175658 = (new cljs.core.PersistentVector(null,1,(5),inst_175656,inst_175657,null));
var inst_175659 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175660 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_175639];
var inst_175661 = (new cljs.core.PersistentVector(null,2,(5),inst_175659,inst_175660,null));
var inst_175662 = [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),inst_175643,inst_175646,inst_175649,inst_175652,inst_175655,inst_175658,inst_175661];
var inst_175663 = (new cljs.core.PersistentVector(null,8,(5),inst_175640,inst_175662,null));
var inst_175664 = teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),inst_175663], 0));
var inst_175665 = (function (){var user_id = inst_175611;
var cards_btn = inst_175618;
var secret_goal_btn = inst_175625;
var common_goal_btn = inst_175632;
var surrender_btn = inst_175639;
var modal = inst_175664;
return (function (game){
if(cljs.core.not(teg_online.game.get_player(game,user_id))){
var target_obj_175686_179055 = secret_goal_btn;
var _STAR_runtime_state_STAR__orig_val__175688_179056 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__175689_179057 = oops.state.prepare_state(target_obj_175686_179055,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__175689_179057);

try{var parent_obj_175687_179058 = target_obj_175686_179055;
if(oops.core.validate_object_access_dynamically(parent_obj_175687_179058,(0),"disabled",true,true,true)){
(parent_obj_175687_179058["disabled"] = true);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__175688_179056);
}
var target_obj_175690 = surrender_btn;
var _STAR_runtime_state_STAR__orig_val__175692 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__175693 = oops.state.prepare_state(target_obj_175690,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__175693);

try{var parent_obj_175691_179059 = target_obj_175690;
if(oops.core.validate_object_access_dynamically(parent_obj_175691_179059,(0),"disabled",true,true,true)){
(parent_obj_175691_179059["disabled"] = true);
} else {
}

return target_obj_175690;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__175692);
}} else {
var target_obj_175694_179060 = secret_goal_btn;
var _STAR_runtime_state_STAR__orig_val__175696_179061 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__175697_179062 = oops.state.prepare_state(target_obj_175694_179060,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__175697_179062);

try{var parent_obj_175695_179063 = target_obj_175694_179060;
if(oops.core.validate_object_access_dynamically(parent_obj_175695_179063,(0),"disabled",true,true,true)){
(parent_obj_175695_179063["disabled"] = false);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__175696_179061);
}
var target_obj_175698 = surrender_btn;
var _STAR_runtime_state_STAR__orig_val__175700 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__175701 = oops.state.prepare_state(target_obj_175698,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__175701);

try{var parent_obj_175699_179064 = target_obj_175698;
if(oops.core.validate_object_access_dynamically(parent_obj_175699_179064,(0),"disabled",true,true,true)){
(parent_obj_175699_179064["disabled"] = ((teg_online.game.game_over_QMARK_(game)) || (cljs.core.not(teg_online.game.still_playing_QMARK_(game,user_id)))));
} else {
}

return target_obj_175698;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__175700);
}}
});
})();
var inst_175666 = (function (){var user_id = inst_175611;
var cards_btn = inst_175618;
var secret_goal_btn = inst_175625;
var common_goal_btn = inst_175632;
var surrender_btn = inst_175639;
var modal = inst_175664;
var update_menu = inst_175665;
return (function (){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var countries = teg_online.game.get_player_cards(game,user_id);
return teg_online.ui.show_card_list_dialog(game,countries);
});
})();
var inst_175667 = teg_online.utils.bootstrap.on_click(inst_175618,inst_175666);
var inst_175668 = (function (){var user_id = inst_175611;
var cards_btn = inst_175618;
var secret_goal_btn = inst_175625;
var common_goal_btn = inst_175632;
var surrender_btn = inst_175639;
var modal = inst_175664;
var update_menu = inst_175665;
return (function (){
return teg_online.utils.bootstrap.alert.cljs$core$IFn$_invoke$arity$variadic("Objetivo secreto",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(teg_online.game.get_player_goal(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),user_id))], 0));
});
})();
var inst_175669 = teg_online.utils.bootstrap.on_click(inst_175625,inst_175668);
var inst_175670 = (function (){var user_id = inst_175611;
var cards_btn = inst_175618;
var secret_goal_btn = inst_175625;
var common_goal_btn = inst_175632;
var surrender_btn = inst_175639;
var modal = inst_175664;
var update_menu = inst_175665;
return (function (){
return teg_online.utils.bootstrap.alert.cljs$core$IFn$_invoke$arity$variadic("Objetivo com\u00FAn",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(teg_online.game.common_goal)], 0));
});
})();
var inst_175671 = teg_online.utils.bootstrap.on_click(inst_175632,inst_175670);
var inst_175672 = (function (){var user_id = inst_175611;
var cards_btn = inst_175618;
var secret_goal_btn = inst_175625;
var common_goal_btn = inst_175632;
var surrender_btn = inst_175639;
var modal = inst_175664;
var update_menu = inst_175665;
return (function (){
return teg_online.ui.surrender_BANG_(state);
});
})();
var inst_175673 = teg_online.utils.bootstrap.on_click(inst_175639,inst_175672);
var inst_175674 = (function (){var user_id = inst_175611;
var cards_btn = inst_175618;
var secret_goal_btn = inst_175625;
var common_goal_btn = inst_175632;
var surrender_btn = inst_175639;
var modal = inst_175664;
var update_menu = inst_175665;
return (function (_,___$1,___$2,new$){
return update_menu(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(new$));
});
})();
var inst_175675 = cljs.core.add_watch(state,new cljs.core.Keyword("teg-online.ui","menu-update","teg-online.ui/menu-update",-1947386174),inst_175674);
var inst_175676 = cljs.core.deref(state);
var inst_175677 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_175676);
var inst_175678 = inst_175665(inst_175677);
var inst_175679 = teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1(inst_175664);
var state_175684__$1 = (function (){var statearr_175702 = state_175684;
(statearr_175702[(7)] = inst_175667);

(statearr_175702[(8)] = inst_175669);

(statearr_175702[(9)] = inst_175671);

(statearr_175702[(10)] = inst_175673);

(statearr_175702[(11)] = inst_175675);

(statearr_175702[(12)] = inst_175678);

return statearr_175702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175684__$1,(2),inst_175679);
} else {
if((state_val_175685 === (2))){
var inst_175681 = (state_175684[(2)]);
var inst_175682 = cljs.core.remove_watch(state,new cljs.core.Keyword("teg-online.ui","menu-update","teg-online.ui/menu-update",-1947386174));
var state_175684__$1 = (function (){var statearr_175703 = state_175684;
(statearr_175703[(13)] = inst_175681);

return statearr_175703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_175684__$1,inst_175682);
} else {
return null;
}
}
});
return (function() {
var teg_online$ui$show_menu_BANG__$_state_machine__18069__auto__ = null;
var teg_online$ui$show_menu_BANG__$_state_machine__18069__auto____0 = (function (){
var statearr_175704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_175704[(0)] = teg_online$ui$show_menu_BANG__$_state_machine__18069__auto__);

(statearr_175704[(1)] = (1));

return statearr_175704;
});
var teg_online$ui$show_menu_BANG__$_state_machine__18069__auto____1 = (function (state_175684){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_175684);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e175705){var ex__18072__auto__ = e175705;
var statearr_175706_179065 = state_175684;
(statearr_175706_179065[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_175684[(4)]))){
var statearr_175707_179066 = state_175684;
(statearr_175707_179066[(1)] = cljs.core.first((state_175684[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179067 = state_175684;
state_175684 = G__179067;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$show_menu_BANG__$_state_machine__18069__auto__ = function(state_175684){
switch(arguments.length){
case 0:
return teg_online$ui$show_menu_BANG__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$show_menu_BANG__$_state_machine__18069__auto____1.call(this,state_175684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$show_menu_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$show_menu_BANG__$_state_machine__18069__auto____0;
teg_online$ui$show_menu_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$show_menu_BANG__$_state_machine__18069__auto____1;
return teg_online$ui$show_menu_BANG__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_175708 = f__19294__auto__();
(statearr_175708[(6)] = c__19293__auto__);

return statearr_175708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
if((typeof teg_online !== 'undefined') && (typeof teg_online.ui !== 'undefined') && (typeof teg_online.ui.finish_turn_BANG_ !== 'undefined')){
} else {
teg_online.ui.finish_turn_BANG_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__175709 = cljs.core.get_global_hierarchy;
return (fexpr__175709.cljs$core$IFn$_invoke$arity$0 ? fexpr__175709.cljs$core$IFn$_invoke$arity$0() : fexpr__175709.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("teg-online.ui","finish-turn!"),(function (state){
return new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
teg_online.ui.finish_turn_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),(function (state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_175727){
var state_val_175728 = (state_175727[(1)]);
if((state_val_175728 === (1))){
var inst_175711 = teg_online.utils.bootstrap.confirm.cljs$core$IFn$_invoke$arity$variadic("Confirmar",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\u00BFTerminar incorporaci\u00F3n de ej\u00E9rcitos?"], 0));
var state_175727__$1 = state_175727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175727__$1,(2),inst_175711);
} else {
if((state_val_175728 === (2))){
var inst_175713 = (state_175727[(2)]);
var state_175727__$1 = state_175727;
if(cljs.core.truth_(inst_175713)){
var statearr_175729_179068 = state_175727__$1;
(statearr_175729_179068[(1)] = (3));

} else {
var statearr_175730_179069 = state_175727__$1;
(statearr_175730_179069[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175728 === (3))){
var inst_175715 = cljs.core.deref(state);
var inst_175716 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175717 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"additions","additions",-1894561789)];
var inst_175718 = (new cljs.core.PersistentVector(null,3,(5),inst_175716,inst_175717,null));
var inst_175719 = cljs.core.PersistentHashMap.EMPTY;
var inst_175720 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(inst_175715,inst_175718,inst_175719);
var inst_175721 = (function (){var additions = inst_175720;
return (function (p1__175710_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__175710_SHARP_,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.dissoc,new cljs.core.Keyword(null,"user-data","user-data",2143823568)),new cljs.core.Keyword(null,"game","game",-441523833),(function (game){
return teg_online.game.finish_action(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (game__$1,p__175731){
var vec__175732 = p__175731;
var country_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175732,(0),null);
var extra_army = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175732,(1),null);
if((extra_army > (0))){
return teg_online.game.add_army(game__$1,country_id,extra_army);
} else {
return game__$1;
}
}),game,additions));
}));
});
})();
var inst_175722 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,inst_175721);
var state_175727__$1 = state_175727;
var statearr_175735_179070 = state_175727__$1;
(statearr_175735_179070[(2)] = inst_175722);

(statearr_175735_179070[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175728 === (4))){
var state_175727__$1 = state_175727;
var statearr_175736_179071 = state_175727__$1;
(statearr_175736_179071[(2)] = null);

(statearr_175736_179071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175728 === (5))){
var inst_175725 = (state_175727[(2)]);
var state_175727__$1 = state_175727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_175727__$1,inst_175725);
} else {
return null;
}
}
}
}
}
});
return (function() {
var teg_online$ui$state_machine__18069__auto__ = null;
var teg_online$ui$state_machine__18069__auto____0 = (function (){
var statearr_175737 = [null,null,null,null,null,null,null];
(statearr_175737[(0)] = teg_online$ui$state_machine__18069__auto__);

(statearr_175737[(1)] = (1));

return statearr_175737;
});
var teg_online$ui$state_machine__18069__auto____1 = (function (state_175727){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_175727);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e175738){var ex__18072__auto__ = e175738;
var statearr_175739_179072 = state_175727;
(statearr_175739_179072[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_175727[(4)]))){
var statearr_175740_179073 = state_175727;
(statearr_175740_179073[(1)] = cljs.core.first((state_175727[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179074 = state_175727;
state_175727 = G__179074;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$state_machine__18069__auto__ = function(state_175727){
switch(arguments.length){
case 0:
return teg_online$ui$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$state_machine__18069__auto____1.call(this,state_175727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$state_machine__18069__auto____0;
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$state_machine__18069__auto____1;
return teg_online$ui$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_175741 = f__19294__auto__();
(statearr_175741[(6)] = c__19293__auto__);

return statearr_175741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
}));
teg_online.ui.finish_turn_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-continent","teg-online.game/add-army-continent",-1282273691),(function (state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_175766){
var state_val_175767 = (state_175766[(1)]);
if((state_val_175767 === (1))){
var inst_175743 = cljs.core.deref(state);
var inst_175744 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175745 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"continent","continent",615455043)];
var inst_175746 = (new cljs.core.PersistentVector(null,3,(5),inst_175744,inst_175745,null));
var inst_175747 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_175743,inst_175746);
var inst_175748 = teg_online.board.get_continent_name(inst_175747);
var inst_175749 = teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("\u00BFTerminar incorporaci\u00F3n de ej\u00E9rcitos en %1?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_175748], 0));
var inst_175750 = teg_online.utils.bootstrap.confirm.cljs$core$IFn$_invoke$arity$variadic("Confirmar",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_175749], 0));
var state_175766__$1 = state_175766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175766__$1,(2),inst_175750);
} else {
if((state_val_175767 === (2))){
var inst_175752 = (state_175766[(2)]);
var state_175766__$1 = state_175766;
if(cljs.core.truth_(inst_175752)){
var statearr_175768_179075 = state_175766__$1;
(statearr_175768_179075[(1)] = (3));

} else {
var statearr_175769_179076 = state_175766__$1;
(statearr_175769_179076[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175767 === (3))){
var inst_175754 = cljs.core.deref(state);
var inst_175755 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175756 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"additions","additions",-1894561789)];
var inst_175757 = (new cljs.core.PersistentVector(null,3,(5),inst_175755,inst_175756,null));
var inst_175758 = cljs.core.PersistentHashMap.EMPTY;
var inst_175759 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(inst_175754,inst_175757,inst_175758);
var inst_175760 = (function (){var additions = inst_175759;
return (function (p1__175742_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__175742_SHARP_,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.dissoc,new cljs.core.Keyword(null,"user-data","user-data",2143823568)),new cljs.core.Keyword(null,"game","game",-441523833),(function (game){
return teg_online.game.finish_action(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (game__$1,p__175770){
var vec__175771 = p__175770;
var country_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175771,(0),null);
var extra_army = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175771,(1),null);
if((extra_army > (0))){
return teg_online.game.add_army(game__$1,country_id,extra_army);
} else {
return game__$1;
}
}),game,additions));
}));
});
})();
var inst_175761 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,inst_175760);
var state_175766__$1 = state_175766;
var statearr_175774_179077 = state_175766__$1;
(statearr_175774_179077[(2)] = inst_175761);

(statearr_175774_179077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175767 === (4))){
var state_175766__$1 = state_175766;
var statearr_175775_179078 = state_175766__$1;
(statearr_175775_179078[(2)] = null);

(statearr_175775_179078[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175767 === (5))){
var inst_175764 = (state_175766[(2)]);
var state_175766__$1 = state_175766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_175766__$1,inst_175764);
} else {
return null;
}
}
}
}
}
});
return (function() {
var teg_online$ui$state_machine__18069__auto__ = null;
var teg_online$ui$state_machine__18069__auto____0 = (function (){
var statearr_175776 = [null,null,null,null,null,null,null];
(statearr_175776[(0)] = teg_online$ui$state_machine__18069__auto__);

(statearr_175776[(1)] = (1));

return statearr_175776;
});
var teg_online$ui$state_machine__18069__auto____1 = (function (state_175766){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_175766);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e175777){var ex__18072__auto__ = e175777;
var statearr_175778_179079 = state_175766;
(statearr_175778_179079[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_175766[(4)]))){
var statearr_175779_179080 = state_175766;
(statearr_175779_179080[(1)] = cljs.core.first((state_175766[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179081 = state_175766;
state_175766 = G__179081;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$state_machine__18069__auto__ = function(state_175766){
switch(arguments.length){
case 0:
return teg_online$ui$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$state_machine__18069__auto____1.call(this,state_175766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$state_machine__18069__auto____0;
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$state_machine__18069__auto____1;
return teg_online$ui$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_175780 = f__19294__auto__();
(statearr_175780[(6)] = c__19293__auto__);

return statearr_175780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
}));
teg_online.ui.finish_turn_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630),(function (state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_175790){
var state_val_175791 = (state_175790[(1)]);
if((state_val_175791 === (1))){
var inst_175781 = teg_online.utils.bootstrap.confirm.cljs$core$IFn$_invoke$arity$variadic("Confirmar",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\u00BFTerminar ataque?"], 0));
var state_175790__$1 = state_175790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175790__$1,(2),inst_175781);
} else {
if((state_val_175791 === (2))){
var inst_175783 = (state_175790[(2)]);
var state_175790__$1 = state_175790;
if(cljs.core.truth_(inst_175783)){
var statearr_175792_179082 = state_175790__$1;
(statearr_175792_179082[(1)] = (3));

} else {
var statearr_175793_179083 = state_175790__$1;
(statearr_175793_179083[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175791 === (3))){
var inst_175785 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"game","game",-441523833),teg_online.game.finish_action);
var state_175790__$1 = state_175790;
var statearr_175794_179084 = state_175790__$1;
(statearr_175794_179084[(2)] = inst_175785);

(statearr_175794_179084[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175791 === (4))){
var state_175790__$1 = state_175790;
var statearr_175795_179085 = state_175790__$1;
(statearr_175795_179085[(2)] = null);

(statearr_175795_179085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175791 === (5))){
var inst_175788 = (state_175790[(2)]);
var state_175790__$1 = state_175790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_175790__$1,inst_175788);
} else {
return null;
}
}
}
}
}
});
return (function() {
var teg_online$ui$state_machine__18069__auto__ = null;
var teg_online$ui$state_machine__18069__auto____0 = (function (){
var statearr_175796 = [null,null,null,null,null,null,null];
(statearr_175796[(0)] = teg_online$ui$state_machine__18069__auto__);

(statearr_175796[(1)] = (1));

return statearr_175796;
});
var teg_online$ui$state_machine__18069__auto____1 = (function (state_175790){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_175790);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e175797){var ex__18072__auto__ = e175797;
var statearr_175798_179086 = state_175790;
(statearr_175798_179086[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_175790[(4)]))){
var statearr_175799_179087 = state_175790;
(statearr_175799_179087[(1)] = cljs.core.first((state_175790[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179088 = state_175790;
state_175790 = G__179088;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$state_machine__18069__auto__ = function(state_175790){
switch(arguments.length){
case 0:
return teg_online$ui$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$state_machine__18069__auto____1.call(this,state_175790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$state_machine__18069__auto____0;
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$state_machine__18069__auto____1;
return teg_online$ui$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_175800 = f__19294__auto__();
(statearr_175800[(6)] = c__19293__auto__);

return statearr_175800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
}));
teg_online.ui.finish_turn_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","regroup","teg-online.game/regroup",1546790374),(function (state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_175835){
var state_val_175836 = (state_175835[(1)]);
if((state_val_175836 === (1))){
var inst_175802 = teg_online.utils.bootstrap.confirm.cljs$core$IFn$_invoke$arity$variadic("Confirmar",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\u00BFTerminar turno?"], 0));
var state_175835__$1 = state_175835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175835__$1,(2),inst_175802);
} else {
if((state_val_175836 === (2))){
var inst_175804 = (state_175835[(2)]);
var state_175835__$1 = state_175835;
if(cljs.core.truth_(inst_175804)){
var statearr_175837_179089 = state_175835__$1;
(statearr_175837_179089[(1)] = (3));

} else {
var statearr_175838_179090 = state_175835__$1;
(statearr_175838_179090[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175836 === (3))){
var inst_175806 = cljs.core.deref(state);
var inst_175807 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175808 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"regroups","regroups",865077182)];
var inst_175809 = (new cljs.core.PersistentVector(null,3,(5),inst_175807,inst_175808,null));
var inst_175810 = cljs.core.PersistentVector.EMPTY;
var inst_175811 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(inst_175806,inst_175809,inst_175810);
var inst_175812 = (function (){var regroups = inst_175811;
return (function (p1__175801_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__175801_SHARP_,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.dissoc,new cljs.core.Keyword(null,"user-data","user-data",2143823568)),new cljs.core.Keyword(null,"game","game",-441523833),(function (game){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (game__$1,p__175839){
var vec__175840 = p__175839;
var country_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175840,(0),null);
var country_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175840,(1),null);
var moving_army = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175840,(2),null);
if((moving_army > (0))){
return teg_online.game.regroup(game__$1,country_a,country_b,moving_army);
} else {
return game__$1;
}
}),game,regroups);
}));
});
})();
var inst_175813 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,inst_175812);
var inst_175814 = cljs.core.deref(state);
var inst_175815 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_175814);
var inst_175816 = teg_online.game.draw_card_QMARK_(inst_175815);
var state_175835__$1 = (function (){var statearr_175843 = state_175835;
(statearr_175843[(7)] = inst_175813);

return statearr_175843;
})();
if(cljs.core.truth_(inst_175816)){
var statearr_175844_179091 = state_175835__$1;
(statearr_175844_179091[(1)] = (6));

} else {
var statearr_175845_179092 = state_175835__$1;
(statearr_175845_179092[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175836 === (4))){
var state_175835__$1 = state_175835;
var statearr_175846_179093 = state_175835__$1;
(statearr_175846_179093[(2)] = null);

(statearr_175846_179093[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175836 === (5))){
var inst_175833 = (state_175835[(2)]);
var state_175835__$1 = state_175835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_175835__$1,inst_175833);
} else {
if((state_val_175836 === (6))){
var inst_175818 = cljs.core.deref(state);
var inst_175819 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_175818);
var inst_175820 = teg_online.game.get_free_cards(inst_175819);
var inst_175821 = cljs.core.rand_nth(inst_175820);
var inst_175822 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"game","game",-441523833),teg_online.game.draw_card,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_175821], 0));
var inst_175823 = cljs.core.deref(state);
var inst_175824 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_175823);
var inst_175825 = teg_online.ui.show_draw_card_dialog(inst_175824,inst_175821);
var state_175835__$1 = (function (){var statearr_175847 = state_175835;
(statearr_175847[(8)] = inst_175822);

return statearr_175847;
})();
var statearr_175848_179094 = state_175835__$1;
(statearr_175848_179094[(2)] = inst_175825);

(statearr_175848_179094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175836 === (7))){
var state_175835__$1 = state_175835;
var statearr_175849_179095 = state_175835__$1;
(statearr_175849_179095[(2)] = null);

(statearr_175849_179095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175836 === (8))){
var inst_175828 = (state_175835[(2)]);
var inst_175829 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(teg_online.game.finish_action,teg_online.game.check_unused_cards);
var inst_175830 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"game","game",-441523833),inst_175829);
var state_175835__$1 = (function (){var statearr_175850 = state_175835;
(statearr_175850[(9)] = inst_175828);

return statearr_175850;
})();
var statearr_175851_179096 = state_175835__$1;
(statearr_175851_179096[(2)] = inst_175830);

(statearr_175851_179096[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$state_machine__18069__auto__ = null;
var teg_online$ui$state_machine__18069__auto____0 = (function (){
var statearr_175852 = [null,null,null,null,null,null,null,null,null,null];
(statearr_175852[(0)] = teg_online$ui$state_machine__18069__auto__);

(statearr_175852[(1)] = (1));

return statearr_175852;
});
var teg_online$ui$state_machine__18069__auto____1 = (function (state_175835){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_175835);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e175853){var ex__18072__auto__ = e175853;
var statearr_175854_179097 = state_175835;
(statearr_175854_179097[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_175835[(4)]))){
var statearr_175855_179098 = state_175835;
(statearr_175855_179098[(1)] = cljs.core.first((state_175835[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179099 = state_175835;
state_175835 = G__179099;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$state_machine__18069__auto__ = function(state_175835){
switch(arguments.length){
case 0:
return teg_online$ui$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$state_machine__18069__auto____1.call(this,state_175835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$state_machine__18069__auto____0;
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$state_machine__18069__auto____1;
return teg_online$ui$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_175856 = f__19294__auto__();
(statearr_175856[(6)] = c__19293__auto__);

return statearr_175856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
}));
if((typeof teg_online !== 'undefined') && (typeof teg_online.ui !== 'undefined') && (typeof teg_online.ui.can_interact_with_country_QMARK_ !== 'undefined')){
} else {
teg_online.ui.can_interact_with_country_QMARK_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__175857 = cljs.core.get_global_hierarchy;
return (fexpr__175857.cljs$core$IFn$_invoke$arity$0 ? fexpr__175857.cljs$core$IFn$_invoke$arity$0() : fexpr__175857.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("teg-online.ui","can-interact-with-country?"),(function (state,_country,_player){
var map__175858 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var map__175858__$1 = cljs.core.__destructure_map(map__175858);
var game = map__175858__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__175858__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if((((new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))) == null)) && (teg_online.ui.is_my_turn_QMARK_(user,game)))){
return phase;
} else {
return null;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
teg_online.ui.can_interact_with_country_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),(function (state,country_id,player_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_id,teg_online.game.country_owner(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),country_id));
}));
teg_online.ui.can_interact_with_country_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-continent","teg-online.game/add-army-continent",-1282273691),(function (state,country_id,player_id){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"continent","continent",615455043)], null)),new cljs.core.Keyword(null,"continent","continent",615455043).cljs$core$IFn$_invoke$arity$1((country_id.cljs$core$IFn$_invoke$arity$1 ? country_id.cljs$core$IFn$_invoke$arity$1(teg_online.board.countries) : country_id.call(null,teg_online.board.countries))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_id,teg_online.game.country_owner(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),country_id))));
}));
teg_online.ui.can_interact_with_country_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630),(function (state,country_id,player_id){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_id,teg_online.game.country_owner(game,country_id))){
return (teg_online.game.get_army(game,country_id) > (1));
} else {
var temp__5825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var selected_country = temp__5825__auto__;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(teg_online.board.countries,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_country,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053)], null)),country_id);
} else {
return null;
}
}
}));
teg_online.ui.can_interact_with_country_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","regroup","teg-online.game/regroup",1546790374),(function (state,country_id,player_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_id,teg_online.game.country_owner(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),country_id));
}));
teg_online.ui.can_interact_with_country_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return false;
}));
teg_online.ui.moved_army_effect = (function teg_online$ui$moved_army_effect(state,country_id,value){
var map__175859 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_175860 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"countries","countries",863192750),country_id,new cljs.core.Keyword(null,"counter","counter",804008177)], null));
var _STAR_runtime_state_STAR__orig_val__175862 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__175863 = oops.state.prepare_state(target_obj_175860,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__175863);

try{var next_obj_175861 = ((oops.core.validate_object_access_dynamically(target_obj_175860,(0),"center",true,true,false))?(target_obj_175860["center"]):null);
return next_obj_175861;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__175862);
}})());
var map__175859__$1 = cljs.core.__destructure_map(map__175859);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__175859__$1,"x");
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__175859__$1,"y");
var label = teg_online.utils.minimorphic.vanish(teg_online.utils.minimorphic.translate(teg_online.utils.minimorphic.make_label.cljs$core$IFn$_invoke$arity$variadic(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("%1%2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((value > (0)))?"+":"-"),Math.abs(value)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"font","font",-1506159249),"bold 30px Arial",new cljs.core.Keyword(null,"color","color",1011675173),(((value > (0)))?"lawngreen":"darkred"),new cljs.core.Keyword(null,"center","center",-748944368),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y - (30))], null))], 0)),(0),(-100),(2)),(2));
return teg_online.ui.world.addMorph(label);
});
if((typeof teg_online !== 'undefined') && (typeof teg_online.ui !== 'undefined') && (typeof teg_online.ui.click_country_BANG_ !== 'undefined')){
} else {
teg_online.ui.click_country_BANG_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__175864 = cljs.core.get_global_hierarchy;
return (fexpr__175864.cljs$core$IFn$_invoke$arity$0 ? fexpr__175864.cljs$core$IFn$_invoke$arity$0() : fexpr__175864.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("teg-online.ui","click-country!"),(function (state,_country_id){
return new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
teg_online.ui.click_country_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),(function (state,country_id){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_175915){
var state_val_175916 = (state_175915[(1)]);
if((state_val_175916 === (7))){
var state_175915__$1 = state_175915;
var statearr_175917_179100 = state_175915__$1;
(statearr_175917_179100[(2)] = null);

(statearr_175917_179100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175916 === (1))){
var inst_175867 = (state_175915[(7)]);
var inst_175870 = (state_175915[(8)]);
var inst_175869 = (state_175915[(9)]);
var inst_175876 = (state_175915[(10)]);
var inst_175881 = (state_175915[(11)]);
var inst_175866 = cljs.core.deref(state);
var inst_175867__$1 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_175866);
var inst_175868 = (teg_online.board.countries.cljs$core$IFn$_invoke$arity$1 ? teg_online.board.countries.cljs$core$IFn$_invoke$arity$1(country_id) : teg_online.board.countries.call(null,country_id));
var inst_175869__$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_175868);
var inst_175870__$1 = teg_online.game.get_army(inst_175867__$1,country_id);
var inst_175871 = cljs.core.deref(state);
var inst_175872 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175873 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"additions","additions",-1894561789),country_id];
var inst_175874 = (new cljs.core.PersistentVector(null,4,(5),inst_175872,inst_175873,null));
var inst_175875 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(inst_175871,inst_175874,(0));
var inst_175876__$1 = (inst_175870__$1 + inst_175875);
var inst_175877 = cljs.core.deref(state);
var inst_175878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175879 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"remaining","remaining",-138926777)];
var inst_175880 = (new cljs.core.PersistentVector(null,3,(5),inst_175878,inst_175879,null));
var inst_175881__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(inst_175877,inst_175880,(0));
var inst_175882 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175883 = [new cljs.core.Keyword(null,"span","span",1394872991),"Incorporar ej\u00E9rcitos a "];
var inst_175884 = (new cljs.core.PersistentVector(null,2,(5),inst_175882,inst_175883,null));
var inst_175885 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175886 = [new cljs.core.Keyword(null,"span.fw-bolder.text-nowrap","span.fw-bolder.text-nowrap",1838451643),inst_175869__$1];
var inst_175887 = (new cljs.core.PersistentVector(null,2,(5),inst_175885,inst_175886,null));
var inst_175888 = (new cljs.core.List(null,inst_175887,null,(1),null));
var inst_175889 = (new cljs.core.List(null,inst_175884,inst_175888,(2),null));
var inst_175890 = (inst_175870__$1 - inst_175876__$1);
var inst_175891 = teg_online.ui.show_add_army_dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),inst_175889,new cljs.core.Keyword(null,"default-value","default-value",232220170),(0),new cljs.core.Keyword(null,"min-value","min-value",-1119123315),inst_175890,new cljs.core.Keyword(null,"max-value","max-value",687805168),inst_175881__$1], 0));
var state_175915__$1 = (function (){var statearr_175918 = state_175915;
(statearr_175918[(7)] = inst_175867__$1);

(statearr_175918[(9)] = inst_175869__$1);

(statearr_175918[(8)] = inst_175870__$1);

(statearr_175918[(10)] = inst_175876__$1);

(statearr_175918[(11)] = inst_175881__$1);

return statearr_175918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175915__$1,(2),inst_175891);
} else {
if((state_val_175916 === (4))){
var inst_175867 = (state_175915[(7)]);
var inst_175869 = (state_175915[(9)]);
var inst_175870 = (state_175915[(8)]);
var inst_175876 = (state_175915[(10)]);
var inst_175881 = (state_175915[(11)]);
var inst_175893 = (state_175915[(12)]);
var inst_175898 = (function (){var game = inst_175867;
var country_name = inst_175869;
var initial_army = inst_175870;
var current_army = inst_175876;
var remaining = inst_175881;
var addition = inst_175893;
return (function (p1__175865_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__175865_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"remaining","remaining",-138926777)], null),cljs.core._,addition),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"additions","additions",-1894561789),country_id], null),cljs.core._PLUS_,addition);
});
})();
var inst_175899 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,inst_175898);
var inst_175900 = cljs.core.deref(state);
var inst_175901 = new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(inst_175900);
var inst_175902 = new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(inst_175901);
var inst_175903 = new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(inst_175902);
var inst_175904 = (inst_175903 === (0));
var state_175915__$1 = (function (){var statearr_175919 = state_175915;
(statearr_175919[(13)] = inst_175899);

return statearr_175919;
})();
if(cljs.core.truth_(inst_175904)){
var statearr_175920_179101 = state_175915__$1;
(statearr_175920_179101[(1)] = (6));

} else {
var statearr_175921_179102 = state_175915__$1;
(statearr_175921_179102[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175916 === (6))){
var inst_175906 = teg_online.ui.finish_turn_BANG_.cljs$core$IFn$_invoke$arity$1(state);
var state_175915__$1 = state_175915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175915__$1,(9),inst_175906);
} else {
if((state_val_175916 === (3))){
var state_175915__$1 = state_175915;
var statearr_175922_179103 = state_175915__$1;
(statearr_175922_179103[(2)] = null);

(statearr_175922_179103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175916 === (2))){
var inst_175893 = (state_175915[(12)]);
var inst_175893__$1 = (state_175915[(2)]);
var inst_175894 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_175893__$1], 0));
var inst_175895 = (inst_175893__$1 === (0));
var state_175915__$1 = (function (){var statearr_175923 = state_175915;
(statearr_175923[(12)] = inst_175893__$1);

(statearr_175923[(14)] = inst_175894);

return statearr_175923;
})();
if(cljs.core.truth_(inst_175895)){
var statearr_175924_179104 = state_175915__$1;
(statearr_175924_179104[(1)] = (3));

} else {
var statearr_175925_179105 = state_175915__$1;
(statearr_175925_179105[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175916 === (9))){
var inst_175908 = (state_175915[(2)]);
var state_175915__$1 = state_175915;
var statearr_175926_179106 = state_175915__$1;
(statearr_175926_179106[(2)] = inst_175908);

(statearr_175926_179106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175916 === (5))){
var inst_175913 = (state_175915[(2)]);
var state_175915__$1 = state_175915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_175915__$1,inst_175913);
} else {
if((state_val_175916 === (8))){
var inst_175911 = (state_175915[(2)]);
var state_175915__$1 = state_175915;
var statearr_175927_179107 = state_175915__$1;
(statearr_175927_179107[(2)] = inst_175911);

(statearr_175927_179107[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$state_machine__18069__auto__ = null;
var teg_online$ui$state_machine__18069__auto____0 = (function (){
var statearr_175928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_175928[(0)] = teg_online$ui$state_machine__18069__auto__);

(statearr_175928[(1)] = (1));

return statearr_175928;
});
var teg_online$ui$state_machine__18069__auto____1 = (function (state_175915){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_175915);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e175929){var ex__18072__auto__ = e175929;
var statearr_175930_179108 = state_175915;
(statearr_175930_179108[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_175915[(4)]))){
var statearr_175931_179109 = state_175915;
(statearr_175931_179109[(1)] = cljs.core.first((state_175915[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179110 = state_175915;
state_175915 = G__179110;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$state_machine__18069__auto__ = function(state_175915){
switch(arguments.length){
case 0:
return teg_online$ui$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$state_machine__18069__auto____1.call(this,state_175915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$state_machine__18069__auto____0;
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$state_machine__18069__auto____1;
return teg_online$ui$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_175932 = f__19294__auto__();
(statearr_175932[(6)] = c__19293__auto__);

return statearr_175932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
}));
teg_online.ui.attack_BANG_ = (function teg_online$ui$attack_BANG_(state,attacker,defender){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_175987){
var state_val_175988 = (state_175987[(1)]);
if((state_val_175988 === (7))){
var state_175987__$1 = state_175987;
var statearr_175989_179111 = state_175987__$1;
(statearr_175989_179111[(2)] = new cljs.core.Keyword(null,"nop","nop",-1754075182));

(statearr_175989_179111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175988 === (1))){
var inst_175968 = (function (){return (function (a_throw,d_throw){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"game","game",-441523833),teg_online.game.attack,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attacker,a_throw], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defender,d_throw], null)], 0));
});
})();
var inst_175969 = teg_online.ui.show_attack_dialog.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attacker","attacker",48869964),attacker,new cljs.core.Keyword(null,"defender","defender",1458963871),defender,new cljs.core.Keyword(null,"on-dice-roll","on-dice-roll",1023353328),inst_175968], 0));
var state_175987__$1 = state_175987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175987__$1,(8),inst_175969);
} else {
if((state_val_175988 === (4))){
var inst_175960 = (state_175987[(2)]);
var inst_175961 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"game","game",-441523833),teg_online.game.invade,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attacker,defender,inst_175960], 0));
var state_175987__$1 = state_175987;
var statearr_175990_179112 = state_175987__$1;
(statearr_175990_179112[(2)] = inst_175961);

(statearr_175990_179112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175988 === (6))){
var inst_175965 = (state_175987[(2)]);
var state_175987__$1 = state_175987;
var statearr_175991_179113 = state_175987__$1;
(statearr_175991_179113[(2)] = inst_175965);

(statearr_175991_179113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175988 === (3))){
var inst_175933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175934 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175935 = [attacker,new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_175936 = (new cljs.core.PersistentVector(null,2,(5),inst_175934,inst_175935,null));
var inst_175937 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(teg_online.board.countries,inst_175936);
var inst_175938 = [new cljs.core.Keyword(null,"span.fw-bolder.text-nowrap","span.fw-bolder.text-nowrap",1838451643),inst_175937];
var inst_175939 = (new cljs.core.PersistentVector(null,2,(5),inst_175933,inst_175938,null));
var inst_175940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175941 = [new cljs.core.Keyword(null,"span","span",1394872991)," invadi\u00F3 "];
var inst_175942 = (new cljs.core.PersistentVector(null,2,(5),inst_175940,inst_175941,null));
var inst_175943 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175944 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175945 = [defender,new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_175946 = (new cljs.core.PersistentVector(null,2,(5),inst_175944,inst_175945,null));
var inst_175947 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(teg_online.board.countries,inst_175946);
var inst_175948 = [new cljs.core.Keyword(null,"span.fw-bolder.text-nowrap","span.fw-bolder.text-nowrap",1838451643),inst_175947];
var inst_175949 = (new cljs.core.PersistentVector(null,2,(5),inst_175943,inst_175948,null));
var inst_175950 = (new cljs.core.List(null,inst_175949,null,(1),null));
var inst_175951 = (new cljs.core.List(null,inst_175942,inst_175950,(2),null));
var inst_175952 = (new cljs.core.List(null,inst_175939,inst_175951,(3),null));
var inst_175953 = cljs.core.deref(state);
var inst_175954 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_175953);
var inst_175955 = teg_online.game.get_army(inst_175954,attacker);
var inst_175956 = (inst_175955 - (1));
var inst_175957 = cljs.core.min.cljs$core$IFn$_invoke$arity$2((3),inst_175956);
var inst_175958 = teg_online.ui.show_add_army_dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),inst_175952,new cljs.core.Keyword(null,"message","message",-406056002),"\u00BFCu\u00E1ntas tropas enviar?",new cljs.core.Keyword(null,"show-cancel?","show-cancel?",-1794435018),false,new cljs.core.Keyword(null,"default-value","default-value",232220170),(1),new cljs.core.Keyword(null,"min-value","min-value",-1119123315),(1),new cljs.core.Keyword(null,"max-value","max-value",687805168),inst_175957], 0));
var state_175987__$1 = state_175987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175987__$1,(4),inst_175958);
} else {
if((state_val_175988 === (2))){
var inst_175973 = (state_175987[(2)]);
var inst_175974 = cljs.core.deref(state);
var inst_175975 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_175974);
var inst_175976 = teg_online.game.get_army(inst_175975,attacker);
var inst_175977 = (inst_175976 <= (1));
var state_175987__$1 = (function (){var statearr_175992 = state_175987;
(statearr_175992[(7)] = inst_175973);

return statearr_175992;
})();
if(cljs.core.truth_(inst_175977)){
var statearr_175993_179114 = state_175987__$1;
(statearr_175993_179114[(1)] = (9));

} else {
var statearr_175994_179115 = state_175987__$1;
(statearr_175994_179115[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175988 === (11))){
var inst_175985 = (state_175987[(2)]);
var state_175987__$1 = state_175987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_175987__$1,inst_175985);
} else {
if((state_val_175988 === (9))){
var inst_175979 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_175980 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382)];
var inst_175981 = (new cljs.core.PersistentVector(null,3,(5),inst_175979,inst_175980,null));
var inst_175982 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,inst_175981,null);
var state_175987__$1 = state_175987;
var statearr_175995_179116 = state_175987__$1;
(statearr_175995_179116[(2)] = inst_175982);

(statearr_175995_179116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175988 === (5))){
var inst_175963 = teg_online.utils.bootstrap.alert("Invasi\u00F3n fallida");
var state_175987__$1 = state_175987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175987__$1,(6),inst_175963);
} else {
if((state_val_175988 === (10))){
var state_175987__$1 = state_175987;
var statearr_175996_179117 = state_175987__$1;
(statearr_175996_179117[(2)] = null);

(statearr_175996_179117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_175988 === (8))){
var inst_175971 = (state_175987[(2)]);
var state_175987__$1 = state_175987;
var G__175997_179118 = inst_175971;
var G__175997_179119__$1 = (((G__175997_179118 instanceof cljs.core.Keyword))?G__175997_179118.fqn:null);
switch (G__175997_179119__$1) {
case "success":
var statearr_175998_179121 = state_175987__$1;
(statearr_175998_179121[(1)] = (3));


break;
case "failure":
var statearr_175999_179122 = state_175987__$1;
(statearr_175999_179122[(1)] = (5));


break;
case "cancel":
var statearr_176000_179123 = state_175987__$1;
(statearr_176000_179123[(1)] = (7));


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__175997_179119__$1))));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$attack_BANG__$_state_machine__18069__auto__ = null;
var teg_online$ui$attack_BANG__$_state_machine__18069__auto____0 = (function (){
var statearr_176001 = [null,null,null,null,null,null,null,null];
(statearr_176001[(0)] = teg_online$ui$attack_BANG__$_state_machine__18069__auto__);

(statearr_176001[(1)] = (1));

return statearr_176001;
});
var teg_online$ui$attack_BANG__$_state_machine__18069__auto____1 = (function (state_175987){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_175987);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e176002){var ex__18072__auto__ = e176002;
var statearr_176003_179124 = state_175987;
(statearr_176003_179124[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_175987[(4)]))){
var statearr_176004_179125 = state_175987;
(statearr_176004_179125[(1)] = cljs.core.first((state_175987[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179126 = state_175987;
state_175987 = G__179126;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$attack_BANG__$_state_machine__18069__auto__ = function(state_175987){
switch(arguments.length){
case 0:
return teg_online$ui$attack_BANG__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$attack_BANG__$_state_machine__18069__auto____1.call(this,state_175987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$attack_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$attack_BANG__$_state_machine__18069__auto____0;
teg_online$ui$attack_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$attack_BANG__$_state_machine__18069__auto____1;
return teg_online$ui$attack_BANG__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_176005 = f__19294__auto__();
(statearr_176005[(6)] = c__19293__auto__);

return statearr_176005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.click_country_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630),(function (state,country_id){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_176043){
var state_val_176044 = (state_176043[(1)]);
if((state_val_176044 === (7))){
var inst_176034 = (state_176043[(2)]);
var state_176043__$1 = state_176043;
var statearr_176045_179127 = state_176043__$1;
(statearr_176045_179127[(2)] = inst_176034);

(statearr_176045_179127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176044 === (1))){
var inst_176010 = (state_176043[(7)]);
var inst_176006 = cljs.core.deref(state);
var inst_176007 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176008 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382)];
var inst_176009 = (new cljs.core.PersistentVector(null,3,(5),inst_176007,inst_176008,null));
var inst_176010__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_176006,inst_176009);
var state_176043__$1 = (function (){var statearr_176046 = state_176043;
(statearr_176046[(7)] = inst_176010__$1);

return statearr_176046;
})();
if(cljs.core.truth_(inst_176010__$1)){
var statearr_176047_179128 = state_176043__$1;
(statearr_176047_179128[(1)] = (2));

} else {
var statearr_176048_179129 = state_176043__$1;
(statearr_176048_179129[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176044 === (4))){
var inst_176041 = (state_176043[(2)]);
var state_176043__$1 = state_176043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_176043__$1,inst_176041);
} else {
if((state_val_176044 === (6))){
var inst_176010 = (state_176043[(7)]);
var inst_176019 = cljs.core.deref(state);
var inst_176020 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_176019);
var inst_176021 = teg_online.game.country_owner(inst_176020,inst_176010);
var inst_176022 = teg_online.game.country_owner(inst_176020,country_id);
var inst_176023 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_176021,inst_176022);
var state_176043__$1 = state_176043;
if(inst_176023){
var statearr_176049_179130 = state_176043__$1;
(statearr_176049_179130[(1)] = (8));

} else {
var statearr_176050_179131 = state_176043__$1;
(statearr_176050_179131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176044 === (3))){
var inst_176036 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176037 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382)];
var inst_176038 = (new cljs.core.PersistentVector(null,3,(5),inst_176036,inst_176037,null));
var inst_176039 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,inst_176038,country_id);
var state_176043__$1 = state_176043;
var statearr_176051_179132 = state_176043__$1;
(statearr_176051_179132[(2)] = inst_176039);

(statearr_176051_179132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176044 === (2))){
var inst_176010 = (state_176043[(7)]);
var inst_176012 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_176010,country_id);
var state_176043__$1 = state_176043;
if(inst_176012){
var statearr_176052_179133 = state_176043__$1;
(statearr_176052_179133[(1)] = (5));

} else {
var statearr_176053_179134 = state_176043__$1;
(statearr_176053_179134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176044 === (9))){
var inst_176010 = (state_176043[(7)]);
var inst_176030 = teg_online.ui.attack_BANG_(state,inst_176010,country_id);
var state_176043__$1 = state_176043;
var statearr_176054_179135 = state_176043__$1;
(statearr_176054_179135[(2)] = inst_176030);

(statearr_176054_179135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176044 === (5))){
var inst_176014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176015 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382)];
var inst_176016 = (new cljs.core.PersistentVector(null,3,(5),inst_176014,inst_176015,null));
var inst_176017 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,inst_176016,null);
var state_176043__$1 = state_176043;
var statearr_176055_179136 = state_176043__$1;
(statearr_176055_179136[(2)] = inst_176017);

(statearr_176055_179136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176044 === (10))){
var inst_176032 = (state_176043[(2)]);
var state_176043__$1 = state_176043;
var statearr_176056_179137 = state_176043__$1;
(statearr_176056_179137[(2)] = inst_176032);

(statearr_176056_179137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176044 === (8))){
var inst_176025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176026 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382)];
var inst_176027 = (new cljs.core.PersistentVector(null,3,(5),inst_176025,inst_176026,null));
var inst_176028 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,inst_176027,country_id);
var state_176043__$1 = state_176043;
var statearr_176057_179138 = state_176043__$1;
(statearr_176057_179138[(2)] = inst_176028);

(statearr_176057_179138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$state_machine__18069__auto__ = null;
var teg_online$ui$state_machine__18069__auto____0 = (function (){
var statearr_176058 = [null,null,null,null,null,null,null,null];
(statearr_176058[(0)] = teg_online$ui$state_machine__18069__auto__);

(statearr_176058[(1)] = (1));

return statearr_176058;
});
var teg_online$ui$state_machine__18069__auto____1 = (function (state_176043){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_176043);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e176059){var ex__18072__auto__ = e176059;
var statearr_176060_179139 = state_176043;
(statearr_176060_179139[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_176043[(4)]))){
var statearr_176061_179140 = state_176043;
(statearr_176061_179140[(1)] = cljs.core.first((state_176043[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179141 = state_176043;
state_176043 = G__179141;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$state_machine__18069__auto__ = function(state_176043){
switch(arguments.length){
case 0:
return teg_online$ui$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$state_machine__18069__auto____1.call(this,state_176043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$state_machine__18069__auto____0;
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$state_machine__18069__auto____1;
return teg_online$ui$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_176062 = f__19294__auto__();
(statearr_176062[(6)] = c__19293__auto__);

return statearr_176062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
}));
teg_online.ui.click_country_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","regroup","teg-online.game/regroup",1546790374),(function (state,country_id){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_176178){
var state_val_176179 = (state_176178[(1)]);
if((state_val_176179 === (7))){
var inst_176169 = (state_176178[(2)]);
var state_176178__$1 = state_176178;
var statearr_176180_179142 = state_176178__$1;
(statearr_176180_179142[(2)] = inst_176169);

(statearr_176180_179142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (1))){
var inst_176067 = (state_176178[(7)]);
var inst_176063 = cljs.core.deref(state);
var inst_176064 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176065 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382)];
var inst_176066 = (new cljs.core.PersistentVector(null,3,(5),inst_176064,inst_176065,null));
var inst_176067__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_176063,inst_176066);
var state_176178__$1 = (function (){var statearr_176181 = state_176178;
(statearr_176181[(7)] = inst_176067__$1);

return statearr_176181;
})();
if(cljs.core.truth_(inst_176067__$1)){
var statearr_176182_179143 = state_176178__$1;
(statearr_176182_179143[(1)] = (2));

} else {
var statearr_176183_179144 = state_176178__$1;
(statearr_176183_179144[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (4))){
var inst_176176 = (state_176178[(2)]);
var state_176178__$1 = state_176178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_176178__$1,inst_176176);
} else {
if((state_val_176179 === (15))){
var inst_176067 = (state_176178[(7)]);
var inst_176144 = (state_176178[(8)]);
var inst_176147 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176148 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"regroups","regroups",865077182)];
var inst_176149 = (new cljs.core.PersistentVector(null,3,(5),inst_176147,inst_176148,null));
var inst_176150 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176151 = [inst_176067,country_id,inst_176144];
var inst_176152 = (new cljs.core.PersistentVector(null,3,(5),inst_176150,inst_176151,null));
var inst_176153 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,inst_176149,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_176152], 0));
var state_176178__$1 = state_176178;
var statearr_176184_179145 = state_176178__$1;
(statearr_176184_179145[(2)] = inst_176153);

(statearr_176184_179145[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (13))){
var inst_176111 = (state_176178[(9)]);
var inst_176139 = (inst_176111 - (1));
var state_176178__$1 = state_176178;
var statearr_176185_179146 = state_176178__$1;
(statearr_176185_179146[(2)] = inst_176139);

(statearr_176185_179146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (6))){
var inst_176067 = (state_176178[(7)]);
var inst_176076 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176077 = [inst_176067,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053)];
var inst_176078 = (new cljs.core.PersistentVector(null,2,(5),inst_176076,inst_176077,null));
var inst_176079 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(teg_online.board.countries,inst_176078);
var inst_176080 = cljs.core.contains_QMARK_(inst_176079,country_id);
var state_176178__$1 = state_176178;
if(inst_176080){
var statearr_176186_179147 = state_176178__$1;
(statearr_176186_179147[(1)] = (8));

} else {
var statearr_176187_179148 = state_176178__$1;
(statearr_176187_179148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (17))){
var inst_176156 = (state_176178[(2)]);
var inst_176157 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176158 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382)];
var inst_176159 = (new cljs.core.PersistentVector(null,3,(5),inst_176157,inst_176158,null));
var inst_176160 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,inst_176159,null);
var state_176178__$1 = (function (){var statearr_176188 = state_176178;
(statearr_176188[(10)] = inst_176156);

return statearr_176188;
})();
var statearr_176189_179149 = state_176178__$1;
(statearr_176189_179149[(2)] = inst_176160);

(statearr_176189_179149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (3))){
var inst_176171 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176172 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382)];
var inst_176173 = (new cljs.core.PersistentVector(null,3,(5),inst_176171,inst_176172,null));
var inst_176174 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,inst_176173,country_id);
var state_176178__$1 = state_176178;
var statearr_176190_179150 = state_176178__$1;
(statearr_176190_179150[(2)] = inst_176174);

(statearr_176190_179150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (12))){
var inst_176111 = (state_176178[(9)]);
var state_176178__$1 = state_176178;
var statearr_176191_179151 = state_176178__$1;
(statearr_176191_179151[(2)] = inst_176111);

(statearr_176191_179151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (2))){
var inst_176067 = (state_176178[(7)]);
var inst_176069 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_176067,country_id);
var state_176178__$1 = state_176178;
if(inst_176069){
var statearr_176192_179152 = state_176178__$1;
(statearr_176192_179152[(1)] = (5));

} else {
var statearr_176193_179153 = state_176178__$1;
(statearr_176193_179153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (11))){
var inst_176144 = (state_176178[(8)]);
var inst_176144__$1 = (state_176178[(2)]);
var inst_176145 = (inst_176144__$1 > (0));
var state_176178__$1 = (function (){var statearr_176194 = state_176178;
(statearr_176194[(8)] = inst_176144__$1);

return statearr_176194;
})();
if(cljs.core.truth_(inst_176145)){
var statearr_176195_179154 = state_176178__$1;
(statearr_176195_179154[(1)] = (15));

} else {
var statearr_176196_179155 = state_176178__$1;
(statearr_176196_179155[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (9))){
var inst_176162 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176163 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382)];
var inst_176164 = (new cljs.core.PersistentVector(null,3,(5),inst_176162,inst_176163,null));
var inst_176165 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,inst_176164,country_id);
var state_176178__$1 = state_176178;
var statearr_176197_179156 = state_176178__$1;
(statearr_176197_179156[(2)] = inst_176165);

(statearr_176197_179156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (5))){
var inst_176071 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176072 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382)];
var inst_176073 = (new cljs.core.PersistentVector(null,3,(5),inst_176071,inst_176072,null));
var inst_176074 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,inst_176073,null);
var state_176178__$1 = state_176178;
var statearr_176198_179157 = state_176178__$1;
(statearr_176198_179157[(2)] = inst_176074);

(statearr_176198_179157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (14))){
var inst_176135 = (state_176178[(11)]);
var inst_176141 = (state_176178[(2)]);
var inst_176142 = teg_online.ui.show_add_army_dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),inst_176135,new cljs.core.Keyword(null,"default-value","default-value",232220170),(0),new cljs.core.Keyword(null,"min-value","min-value",-1119123315),(0),new cljs.core.Keyword(null,"max-value","max-value",687805168),inst_176141], 0));
var state_176178__$1 = state_176178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_176178__$1,(11),inst_176142);
} else {
if((state_val_176179 === (16))){
var state_176178__$1 = state_176178;
var statearr_176199_179158 = state_176178__$1;
(statearr_176199_179158[(2)] = null);

(statearr_176199_179158[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (10))){
var inst_176167 = (state_176178[(2)]);
var state_176178__$1 = state_176178;
var statearr_176200_179159 = state_176178__$1;
(statearr_176200_179159[(2)] = inst_176167);

(statearr_176200_179159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176179 === (8))){
var inst_176067 = (state_176178[(7)]);
var inst_176082 = cljs.core.deref(state);
var inst_176083 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_176082);
var inst_176084 = teg_online.game.get_army(inst_176083,inst_176067);
var inst_176086 = (function (){var temp__5823__auto__ = inst_176067;
var selected_country = inst_176067;
var initial_army = inst_176084;
return (function (p__176085){
var vec__176201 = p__176085;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176201,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176201,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176201,(2),null);
return v;
});
})();
var inst_176088 = (function (){var temp__5823__auto__ = inst_176067;
var selected_country = inst_176067;
var initial_army = inst_176084;
return (function (p__176087){
var vec__176204 = p__176087;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176204,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,selected_country);
});
})();
var inst_176089 = cljs.core.deref(state);
var inst_176090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176091 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"regroups","regroups",865077182)];
var inst_176092 = (new cljs.core.PersistentVector(null,3,(5),inst_176090,inst_176091,null));
var inst_176093 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_176089,inst_176092);
var inst_176094 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_176088,inst_176093);
var inst_176095 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_176086,inst_176094);
var inst_176096 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_176095);
var inst_176098 = (function (){var temp__5823__auto__ = inst_176067;
var selected_country = inst_176067;
var initial_army = inst_176084;
var substractions = inst_176096;
return (function (p__176097){
var vec__176207 = p__176097;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176207,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176207,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176207,(2),null);
return v;
});
})();
var inst_176100 = (function (){var temp__5823__auto__ = inst_176067;
var selected_country = inst_176067;
var initial_army = inst_176084;
var substractions = inst_176096;
return (function (p__176099){
var vec__176210 = p__176099;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176210,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176210,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,selected_country);
});
})();
var inst_176101 = cljs.core.deref(state);
var inst_176102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176103 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"regroups","regroups",865077182)];
var inst_176104 = (new cljs.core.PersistentVector(null,3,(5),inst_176102,inst_176103,null));
var inst_176105 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_176101,inst_176104);
var inst_176106 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_176100,inst_176105);
var inst_176107 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_176098,inst_176106);
var inst_176108 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_176107);
var inst_176109 = (inst_176084 - inst_176096);
var inst_176110 = (inst_176109 + inst_176108);
var inst_176111 = (inst_176084 - inst_176096);
var inst_176112 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176113 = [new cljs.core.Keyword(null,"span","span",1394872991),"Mover tropas de "];
var inst_176114 = (new cljs.core.PersistentVector(null,2,(5),inst_176112,inst_176113,null));
var inst_176115 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176117 = [inst_176067,new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_176118 = (new cljs.core.PersistentVector(null,2,(5),inst_176116,inst_176117,null));
var inst_176119 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(teg_online.board.countries,inst_176118);
var inst_176120 = [new cljs.core.Keyword(null,"span.fw-bolder.text-nowrap","span.fw-bolder.text-nowrap",1838451643),inst_176119];
var inst_176121 = (new cljs.core.PersistentVector(null,2,(5),inst_176115,inst_176120,null));
var inst_176122 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176123 = [new cljs.core.Keyword(null,"span","span",1394872991)," a "];
var inst_176124 = (new cljs.core.PersistentVector(null,2,(5),inst_176122,inst_176123,null));
var inst_176125 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176126 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176127 = [country_id,new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_176128 = (new cljs.core.PersistentVector(null,2,(5),inst_176126,inst_176127,null));
var inst_176129 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(teg_online.board.countries,inst_176128);
var inst_176130 = [new cljs.core.Keyword(null,"span.fw-bolder.text-nowrap","span.fw-bolder.text-nowrap",1838451643),inst_176129];
var inst_176131 = (new cljs.core.PersistentVector(null,2,(5),inst_176125,inst_176130,null));
var inst_176132 = (new cljs.core.List(null,inst_176131,null,(1),null));
var inst_176133 = (new cljs.core.List(null,inst_176124,inst_176132,(2),null));
var inst_176134 = (new cljs.core.List(null,inst_176121,inst_176133,(3),null));
var inst_176135 = (new cljs.core.List(null,inst_176114,inst_176134,(4),null));
var inst_176136 = (inst_176110 > inst_176084);
var state_176178__$1 = (function (){var statearr_176213 = state_176178;
(statearr_176213[(9)] = inst_176111);

(statearr_176213[(11)] = inst_176135);

return statearr_176213;
})();
if(cljs.core.truth_(inst_176136)){
var statearr_176214_179160 = state_176178__$1;
(statearr_176214_179160[(1)] = (12));

} else {
var statearr_176215_179161 = state_176178__$1;
(statearr_176215_179161[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$state_machine__18069__auto__ = null;
var teg_online$ui$state_machine__18069__auto____0 = (function (){
var statearr_176216 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_176216[(0)] = teg_online$ui$state_machine__18069__auto__);

(statearr_176216[(1)] = (1));

return statearr_176216;
});
var teg_online$ui$state_machine__18069__auto____1 = (function (state_176178){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_176178);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e176217){var ex__18072__auto__ = e176217;
var statearr_176218_179162 = state_176178;
(statearr_176218_179162[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_176178[(4)]))){
var statearr_176219_179163 = state_176178;
(statearr_176219_179163[(1)] = cljs.core.first((state_176178[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179164 = state_176178;
state_176178 = G__179164;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$state_machine__18069__auto__ = function(state_176178){
switch(arguments.length){
case 0:
return teg_online$ui$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$state_machine__18069__auto____1.call(this,state_176178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$state_machine__18069__auto____0;
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$state_machine__18069__auto____1;
return teg_online$ui$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_176220 = f__19294__auto__();
(statearr_176220[(6)] = c__19293__auto__);

return statearr_176220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
}));
teg_online.ui.init_country = (function teg_online$ui$init_country(state,p__176221){
var vec__176222 = p__176221;
var country_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176222,(0),null);
var map__176225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176222,(1),null);
var map__176225__$1 = cljs.core.__destructure_map(map__176225);
var vec__176226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__176225__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176226,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176226,(1),null);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__176225__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var vec__176229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__176225__$1,new cljs.core.Keyword(null,"counter-offset","counter-offset",974897340));
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176229,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176229,(1),null);
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_176298){
var state_val_176299 = (state_176298[(1)]);
if((state_val_176299 === (7))){
var inst_176238 = (state_176298[(7)]);
var inst_176264 = (inst_176238["center"]);
var state_176298__$1 = state_176298;
var statearr_176301_179165 = state_176298__$1;
(statearr_176301_179165[(2)] = inst_176264);

(statearr_176301_179165[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176299 === (1))){
var inst_176232 = teg_online.utils.minimorphic.load_form(img);
var state_176298__$1 = state_176298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_176298__$1,(2),inst_176232);
} else {
if((state_val_176299 === (4))){
var inst_176241 = (state_176298[(8)]);
var inst_176238 = (state_176298[(7)]);
var inst_176234 = (state_176298[(9)]);
var inst_176270 = (state_176298[(2)]);
var inst_176271 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_176270);
var inst_176272 = cljs.core.__destructure_map(inst_176271);
var inst_176273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_176272,"x");
var inst_176274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_176272,"y");
var inst_176275 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_176276 = (inst_176273 + ox);
var inst_176277 = (inst_176274 + oy);
var inst_176278 = [inst_176276,inst_176277];
var inst_176279 = cljs.core.PersistentHashMap.fromArrays(inst_176275,inst_176278);
var inst_176280 = teg_online.utils.minimorphic.make_ellipse.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extent","extent",-186399820),inst_176241,new cljs.core.Keyword(null,"center","center",-748944368),inst_176279,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(0)], 0));
var inst_176281 = teg_online.ui.world.addMorph(inst_176238);
var inst_176282 = teg_online.ui.world.addMorph(inst_176280);
var inst_176284 = (function (){var original_form = inst_176234;
var morph = inst_176238;
var counter = inst_176280;
var selected_alpha = 0.25;
var G__176283 = inst_176238;
return (function (){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var current_player = teg_online.game.get_current_player(game);
if(cljs.core.truth_(teg_online.ui.can_interact_with_country_QMARK_.cljs$core$IFn$_invoke$arity$3(state,country_id,current_player))){
var target_obj_176302 = document.querySelector("#board-panel");
var _STAR_runtime_state_STAR__orig_val__176305 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__176306 = oops.state.prepare_state(target_obj_176302,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__176306);

try{var parent_obj_176303_179166 = (function (){var next_obj_176304 = ((oops.core.validate_object_access_dynamically(target_obj_176302,(0),"style",true,true,false))?(target_obj_176302["style"]):null);
return next_obj_176304;
})();
if(oops.core.validate_object_access_dynamically(parent_obj_176303_179166,(0),"cursor",true,true,true)){
(parent_obj_176303_179166["cursor"] = "pointer");
} else {
}

return target_obj_176302;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__176305);
}} else {
var target_obj_176307 = document.querySelector("#board-panel");
var _STAR_runtime_state_STAR__orig_val__176310 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__176311 = oops.state.prepare_state(target_obj_176307,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__176311);

try{var parent_obj_176308_179167 = (function (){var next_obj_176309 = ((oops.core.validate_object_access_dynamically(target_obj_176307,(0),"style",true,true,false))?(target_obj_176307["style"]):null);
return next_obj_176309;
})();
if(oops.core.validate_object_access_dynamically(parent_obj_176308_179167,(0),"cursor",true,true,true)){
(parent_obj_176308_179167["cursor"] = "default");
} else {
}

return target_obj_176307;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__176310);
}}
});
})();
var inst_176285 = teg_online.utils.minimorphic.on_mouse_move(inst_176238,inst_176284);
var inst_176286 = (function (){var original_form = inst_176234;
var morph = inst_176238;
var counter = inst_176280;
var selected_alpha = 0.25;
var G__176283 = inst_176238;
return (function (){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var current_player = teg_online.game.get_current_player(game);
if(cljs.core.truth_(teg_online.ui.can_interact_with_country_QMARK_.cljs$core$IFn$_invoke$arity$3(state,country_id,current_player))){
var target_obj_176312 = morph;
var _STAR_runtime_state_STAR__orig_val__176314 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__176315 = oops.state.prepare_state(target_obj_176312,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__176315);

try{var parent_obj_176313_179168 = target_obj_176312;
if(oops.core.validate_object_access_dynamically(parent_obj_176313_179168,(0),"alpha",true,true,true)){
(parent_obj_176313_179168["alpha"] = selected_alpha);
} else {
}

return target_obj_176312;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__176314);
}} else {
return null;
}
});
})();
var inst_176287 = teg_online.utils.minimorphic.on_mouse_down(inst_176238,inst_176286);
var inst_176288 = (function (){var original_form = inst_176234;
var morph = inst_176238;
var counter = inst_176280;
var selected_alpha = 0.25;
var G__176283 = inst_176238;
return (function (){
var c__19293__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_176357){
var state_val_176358 = (state_176357[(1)]);
if((state_val_176358 === (7))){
var inst_176352 = (state_176357[(2)]);
var state_176357__$1 = state_176357;
var statearr_176359_179169 = state_176357__$1;
(statearr_176359_179169[(2)] = inst_176352);

(statearr_176359_179169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176358 === (1))){
var inst_176316 = cljs.core.deref(state);
var inst_176317 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_176316);
var inst_176318 = teg_online.game.get_current_player(inst_176317);
var inst_176319 = teg_online.ui.can_interact_with_country_QMARK_.cljs$core$IFn$_invoke$arity$3(state,country_id,inst_176318);
var state_176357__$1 = state_176357;
if(cljs.core.truth_(inst_176319)){
var statearr_176360_179170 = state_176357__$1;
(statearr_176360_179170[(1)] = (2));

} else {
var statearr_176361_179171 = state_176357__$1;
(statearr_176361_179171[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176358 === (4))){
var inst_176355 = (state_176357[(2)]);
var state_176357__$1 = state_176357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_176357__$1,inst_176355);
} else {
if((state_val_176358 === (6))){
var inst_176326 = (state_176357[(7)]);
var _ = (function (){var statearr_176362 = state_176357;
(statearr_176362[(4)] = cljs.core.cons((8),(state_176357[(4)])));

return statearr_176362;
})();
var ___$1 = (function (){var statearr_176363 = state_176357;
(statearr_176363[(4)] = cljs.core.cons((9),(state_176357[(4)])));

return statearr_176363;
})();
var inst_176344 = oops.core.validate_object_access_dynamically(inst_176326,(0),"alpha",true,true,true);
var state_176357__$1 = state_176357;
if(inst_176344){
var statearr_176364_179172 = state_176357__$1;
(statearr_176364_179172[(1)] = (10));

} else {
var statearr_176365_179173 = state_176357__$1;
(statearr_176365_179173[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176358 === (3))){
var state_176357__$1 = state_176357;
var statearr_176366_179174 = state_176357__$1;
(statearr_176366_179174[(2)] = null);

(statearr_176366_179174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176358 === (12))){
var inst_176326 = (state_176357[(7)]);
var inst_176349 = (state_176357[(2)]);
var _ = (function (){var statearr_176367 = state_176357;
(statearr_176367[(4)] = cljs.core.rest((state_176357[(4)])));

return statearr_176367;
})();
var state_176357__$1 = (function (){var statearr_176368 = state_176357;
(statearr_176368[(8)] = inst_176349);

return statearr_176368;
})();
var statearr_176369_179175 = state_176357__$1;
(statearr_176369_179175[(2)] = inst_176326);

(statearr_176369_179175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176358 === (2))){
var inst_176321 = teg_online.ui.click_country_BANG_.cljs$core$IFn$_invoke$arity$2(state,country_id);
var state_176357__$1 = state_176357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_176357__$1,(5),inst_176321);
} else {
if((state_val_176358 === (11))){
var state_176357__$1 = state_176357;
var statearr_176371_179176 = state_176357__$1;
(statearr_176371_179176[(2)] = null);

(statearr_176371_179176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176358 === (9))){
var _ = (function (){var statearr_176372 = state_176357;
(statearr_176372[(4)] = cljs.core.rest((state_176357[(4)])));

return statearr_176372;
})();
var state_176357__$1 = state_176357;
var ex176370 = (state_176357__$1[(2)]);
var statearr_176373_179177 = state_176357__$1;
(statearr_176373_179177[(5)] = ex176370);


throw ex176370;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176358 === (5))){
var inst_176326 = (state_176357[(7)]);
var inst_176323 = (state_176357[(2)]);
var inst_176326__$1 = morph;
var inst_176329 = oops.state._STAR_runtime_state_STAR_;
var inst_176330 = (new Error());
var inst_176331 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_176332 = oops.state.prepare_state(inst_176326__$1,inst_176330,inst_176331);
var inst_176333 = (oops.state._STAR_runtime_state_STAR_ = inst_176332);
var state_176357__$1 = (function (){var statearr_176374 = state_176357;
(statearr_176374[(9)] = inst_176323);

(statearr_176374[(7)] = inst_176326__$1);

(statearr_176374[(10)] = inst_176329);

(statearr_176374[(11)] = inst_176333);

return statearr_176374;
})();
var statearr_176375_179178 = state_176357__$1;
(statearr_176375_179178[(2)] = null);

(statearr_176375_179178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176358 === (10))){
var inst_176326 = (state_176357[(7)]);
var inst_176346 = (inst_176326["alpha"] = 0.5);
var state_176357__$1 = state_176357;
var statearr_176376_179179 = state_176357__$1;
(statearr_176376_179179[(2)] = inst_176346);

(statearr_176376_179179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176358 === (8))){
var inst_176329 = (state_176357[(10)]);
var _ = (function (){var statearr_176377 = state_176357;
(statearr_176377[(4)] = cljs.core.rest((state_176357[(4)])));

return statearr_176377;
})();
var inst_176335 = (state_176357[(2)]);
var inst_176336 = (oops.state._STAR_runtime_state_STAR_ = inst_176329);
var ___$1 = (function (){var temp__5825__auto__ = (state_176357[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_176357__$1 = (function (){var statearr_176378 = state_176357;
(statearr_176378[(12)] = inst_176336);

return statearr_176378;
})();
var statearr_176379_179180 = state_176357__$1;
(statearr_176379_179180[(2)] = inst_176335);

(statearr_176379_179180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$init_country_$_state_machine__18069__auto__ = null;
var teg_online$ui$init_country_$_state_machine__18069__auto____0 = (function (){
var statearr_176380 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_176380[(0)] = teg_online$ui$init_country_$_state_machine__18069__auto__);

(statearr_176380[(1)] = (1));

return statearr_176380;
});
var teg_online$ui$init_country_$_state_machine__18069__auto____1 = (function (state_176357){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_176357);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e176381){var ex__18072__auto__ = e176381;
var statearr_176382_179181 = state_176357;
(statearr_176382_179181[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_176357[(4)]))){
var statearr_176383_179182 = state_176357;
(statearr_176383_179182[(1)] = cljs.core.first((state_176357[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179183 = state_176357;
state_176357 = G__179183;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$init_country_$_state_machine__18069__auto__ = function(state_176357){
switch(arguments.length){
case 0:
return teg_online$ui$init_country_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$init_country_$_state_machine__18069__auto____1.call(this,state_176357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$init_country_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$init_country_$_state_machine__18069__auto____0;
teg_online$ui$init_country_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$init_country_$_state_machine__18069__auto____1;
return teg_online$ui$init_country_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_176384 = f__19294__auto__();
(statearr_176384[(6)] = c__19293__auto____$1);

return statearr_176384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto____$1;
});
})();
var inst_176289 = teg_online.utils.minimorphic.on_mouse_up(inst_176238,inst_176288);
var inst_176290 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176291 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"countries","countries",863192750),country_id];
var inst_176292 = (new cljs.core.PersistentVector(null,3,(5),inst_176290,inst_176291,null));
var inst_176293 = [new cljs.core.Keyword(null,"morph","morph",-595175877),new cljs.core.Keyword(null,"counter","counter",804008177)];
var inst_176294 = [inst_176238,inst_176280];
var inst_176295 = cljs.core.PersistentHashMap.fromArrays(inst_176293,inst_176294);
var inst_176296 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,inst_176292,inst_176295);
var state_176298__$1 = (function (){var statearr_176385 = state_176298;
(statearr_176385[(10)] = inst_176281);

(statearr_176385[(11)] = inst_176282);

(statearr_176385[(12)] = inst_176285);

(statearr_176385[(13)] = inst_176287);

(statearr_176385[(14)] = inst_176289);

return statearr_176385;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_176298__$1,inst_176296);
} else {
if((state_val_176299 === (6))){
var _ = (function (){var statearr_176386 = state_176298;
(statearr_176386[(4)] = cljs.core.rest((state_176298[(4)])));

return statearr_176386;
})();
var state_176298__$1 = state_176298;
var ex176300 = (state_176298__$1[(2)]);
var statearr_176387_179184 = state_176298__$1;
(statearr_176387_179184[(5)] = ex176300);


throw ex176300;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176299 === (3))){
var inst_176238 = (state_176298[(7)]);
var _ = (function (){var statearr_176388 = state_176298;
(statearr_176388[(4)] = cljs.core.cons((5),(state_176298[(4)])));

return statearr_176388;
})();
var ___$1 = (function (){var statearr_176389 = state_176298;
(statearr_176389[(4)] = cljs.core.cons((6),(state_176298[(4)])));

return statearr_176389;
})();
var inst_176262 = oops.core.validate_object_access_dynamically(inst_176238,(0),"center",true,true,false);
var state_176298__$1 = state_176298;
if(inst_176262){
var statearr_176390_179185 = state_176298__$1;
(statearr_176390_179185[(1)] = (7));

} else {
var statearr_176391_179186 = state_176298__$1;
(statearr_176391_179186[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176299 === (2))){
var inst_176234 = (state_176298[(9)]);
var inst_176238 = (state_176298[(7)]);
var inst_176234__$1 = (state_176298[(2)]);
var inst_176235 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_176236 = [x,y];
var inst_176237 = cljs.core.PersistentHashMap.fromArrays(inst_176235,inst_176236);
var inst_176238__$1 = teg_online.utils.minimorphic.make_sprite.cljs$core$IFn$_invoke$arity$variadic(inst_176234__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),inst_176237,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(0)], 0));
var inst_176239 = [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)];
var inst_176240 = [(30),(30)];
var inst_176241 = cljs.core.PersistentHashMap.fromArrays(inst_176239,inst_176240);
var inst_176247 = oops.state._STAR_runtime_state_STAR_;
var inst_176248 = (new Error());
var inst_176249 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_176250 = oops.state.prepare_state(inst_176238__$1,inst_176248,inst_176249);
var inst_176251 = (oops.state._STAR_runtime_state_STAR_ = inst_176250);
var state_176298__$1 = (function (){var statearr_176392 = state_176298;
(statearr_176392[(9)] = inst_176234__$1);

(statearr_176392[(7)] = inst_176238__$1);

(statearr_176392[(8)] = inst_176241);

(statearr_176392[(15)] = inst_176247);

(statearr_176392[(16)] = inst_176251);

return statearr_176392;
})();
var statearr_176393_179187 = state_176298__$1;
(statearr_176393_179187[(2)] = null);

(statearr_176393_179187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176299 === (9))){
var inst_176267 = (state_176298[(2)]);
var _ = (function (){var statearr_176394 = state_176298;
(statearr_176394[(4)] = cljs.core.rest((state_176298[(4)])));

return statearr_176394;
})();
var state_176298__$1 = state_176298;
var statearr_176395_179188 = state_176298__$1;
(statearr_176395_179188[(2)] = inst_176267);

(statearr_176395_179188[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176299 === (5))){
var inst_176247 = (state_176298[(15)]);
var _ = (function (){var statearr_176396 = state_176298;
(statearr_176396[(4)] = cljs.core.rest((state_176298[(4)])));

return statearr_176396;
})();
var inst_176253 = (state_176298[(2)]);
var inst_176254 = (oops.state._STAR_runtime_state_STAR_ = inst_176247);
var ___$1 = (function (){var temp__5825__auto__ = (state_176298[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_176298__$1 = (function (){var statearr_176397 = state_176298;
(statearr_176397[(17)] = inst_176254);

return statearr_176397;
})();
var statearr_176398_179189 = state_176298__$1;
(statearr_176398_179189[(2)] = inst_176253);

(statearr_176398_179189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176299 === (8))){
var state_176298__$1 = state_176298;
var statearr_176399_179190 = state_176298__$1;
(statearr_176399_179190[(2)] = null);

(statearr_176399_179190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$init_country_$_state_machine__18069__auto__ = null;
var teg_online$ui$init_country_$_state_machine__18069__auto____0 = (function (){
var statearr_176400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_176400[(0)] = teg_online$ui$init_country_$_state_machine__18069__auto__);

(statearr_176400[(1)] = (1));

return statearr_176400;
});
var teg_online$ui$init_country_$_state_machine__18069__auto____1 = (function (state_176298){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_176298);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e176401){var ex__18072__auto__ = e176401;
var statearr_176402_179191 = state_176298;
(statearr_176402_179191[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_176298[(4)]))){
var statearr_176403_179192 = state_176298;
(statearr_176403_179192[(1)] = cljs.core.first((state_176298[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179193 = state_176298;
state_176298 = G__179193;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$init_country_$_state_machine__18069__auto__ = function(state_176298){
switch(arguments.length){
case 0:
return teg_online$ui$init_country_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$init_country_$_state_machine__18069__auto____1.call(this,state_176298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$init_country_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$init_country_$_state_machine__18069__auto____0;
teg_online$ui$init_country_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$init_country_$_state_machine__18069__auto____1;
return teg_online$ui$init_country_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_176404 = f__19294__auto__();
(statearr_176404[(6)] = c__19293__auto__);

return statearr_176404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.init_countries = (function teg_online$ui$init_countries(state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_176412){
var state_val_176413 = (state_176412[(1)]);
if((state_val_176413 === (1))){
var inst_176405 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(teg_online.ui.init_country,state);
var inst_176406 = cljs.core.shuffle(teg_online.ui_constants.country_data);
var inst_176407 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_176405,inst_176406);
var inst_176408 = cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,inst_176407);
var state_176412__$1 = state_176412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_176412__$1,(2),inst_176408);
} else {
if((state_val_176413 === (2))){
var inst_176410 = (state_176412[(2)]);
var state_176412__$1 = state_176412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_176412__$1,inst_176410);
} else {
return null;
}
}
});
return (function() {
var teg_online$ui$init_countries_$_state_machine__18069__auto__ = null;
var teg_online$ui$init_countries_$_state_machine__18069__auto____0 = (function (){
var statearr_176414 = [null,null,null,null,null,null,null];
(statearr_176414[(0)] = teg_online$ui$init_countries_$_state_machine__18069__auto__);

(statearr_176414[(1)] = (1));

return statearr_176414;
});
var teg_online$ui$init_countries_$_state_machine__18069__auto____1 = (function (state_176412){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_176412);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e176415){var ex__18072__auto__ = e176415;
var statearr_176416_179194 = state_176412;
(statearr_176416_179194[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_176412[(4)]))){
var statearr_176417_179195 = state_176412;
(statearr_176417_179195[(1)] = cljs.core.first((state_176412[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179196 = state_176412;
state_176412 = G__179196;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$init_countries_$_state_machine__18069__auto__ = function(state_176412){
switch(arguments.length){
case 0:
return teg_online$ui$init_countries_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$init_countries_$_state_machine__18069__auto____1.call(this,state_176412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$init_countries_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$init_countries_$_state_machine__18069__auto____0;
teg_online$ui$init_countries_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$init_countries_$_state_machine__18069__auto____1;
return teg_online$ui$init_countries_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_176418 = f__19294__auto__();
(statearr_176418[(6)] = c__19293__auto__);

return statearr_176418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.init_map = (function teg_online$ui$init_map(){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_176574){
var state_val_176575 = (state_176574[(1)]);
if((state_val_176575 === (7))){
var inst_176428 = (state_176574[(7)]);
var inst_176448 = (inst_176428["canvas"]);
var state_176574__$1 = state_176574;
var statearr_176576_179197 = state_176574__$1;
(statearr_176576_179197[(2)] = inst_176448);

(statearr_176576_179197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (20))){
var inst_176423 = (state_176574[(8)]);
var _ = (function (){var statearr_176577 = state_176574;
(statearr_176577[(4)] = cljs.core.cons((22),(state_176574[(4)])));

return statearr_176577;
})();
var ___$1 = (function (){var statearr_176578 = state_176574;
(statearr_176578[(4)] = cljs.core.cons((23),(state_176574[(4)])));

return statearr_176578;
})();
var inst_176501 = oops.core.validate_object_access_dynamically(inst_176423,(0),"width",true,true,false);
var state_176574__$1 = state_176574;
if(inst_176501){
var statearr_176579_179198 = state_176574__$1;
(statearr_176579_179198[(1)] = (24));

} else {
var statearr_176580_179199 = state_176574__$1;
(statearr_176580_179199[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (27))){
var inst_176460 = (state_176574[(9)]);
var _ = (function (){var statearr_176581 = state_176574;
(statearr_176581[(4)] = cljs.core.cons((29),(state_176574[(4)])));

return statearr_176581;
})();
var ___$1 = (function (){var statearr_176582 = state_176574;
(statearr_176582[(4)] = cljs.core.cons((30),(state_176574[(4)])));

return statearr_176582;
})();
var inst_176536 = oops.core.validate_object_access_dynamically(inst_176460,(0),"height",true,true,true);
var state_176574__$1 = state_176574;
if(inst_176536){
var statearr_176583_179200 = state_176574__$1;
(statearr_176583_179200[(1)] = (31));

} else {
var statearr_176584_179201 = state_176574__$1;
(statearr_176584_179201[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (1))){
var inst_176419 = teg_online.utils.minimorphic.load_form("imgs/teg_board.png");
var state_176574__$1 = state_176574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_176574__$1,(2),inst_176419);
} else {
if((state_val_176575 === (24))){
var inst_176423 = (state_176574[(8)]);
var inst_176503 = (inst_176423["width"]);
var state_176574__$1 = state_176574;
var statearr_176585_179202 = state_176574__$1;
(statearr_176585_179202[(2)] = inst_176503);

(statearr_176585_179202[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (39))){
var state_176574__$1 = state_176574;
var statearr_176586_179203 = state_176574__$1;
(statearr_176586_179203[(2)] = null);

(statearr_176586_179203[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (4))){
var inst_176460 = (state_176574[(9)]);
var inst_176460__$1 = (state_176574[(2)]);
var inst_176465 = oops.state._STAR_runtime_state_STAR_;
var inst_176466 = (new Error());
var inst_176467 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_176468 = oops.state.prepare_state(inst_176460__$1,inst_176466,inst_176467);
var inst_176469 = (oops.state._STAR_runtime_state_STAR_ = inst_176468);
var state_176574__$1 = (function (){var statearr_176587 = state_176574;
(statearr_176587[(9)] = inst_176460__$1);

(statearr_176587[(10)] = inst_176465);

(statearr_176587[(11)] = inst_176469);

return statearr_176587;
})();
var statearr_176588_179204 = state_176574__$1;
(statearr_176588_179204[(2)] = null);

(statearr_176588_179204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (15))){
var inst_176465 = (state_176574[(10)]);
var _ = (function (){var statearr_176589 = state_176574;
(statearr_176589[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176589;
})();
var inst_176471 = (state_176574[(2)]);
var inst_176472 = (oops.state._STAR_runtime_state_STAR_ = inst_176465);
var ___$1 = (function (){var temp__5825__auto__ = (state_176574[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_176574__$1 = (function (){var statearr_176590 = state_176574;
(statearr_176590[(12)] = inst_176472);

return statearr_176590;
})();
var statearr_176591_179205 = state_176574__$1;
(statearr_176591_179205[(2)] = inst_176471);

(statearr_176591_179205[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (21))){
var inst_176460 = (state_176574[(9)]);
var inst_176509 = (state_176574[(2)]);
var inst_176510 = (inst_176460["width"] = inst_176509);
var state_176574__$1 = state_176574;
var statearr_176592_179206 = state_176574__$1;
(statearr_176592_179206[(2)] = inst_176510);

(statearr_176592_179206[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (31))){
var inst_176423 = (state_176574[(8)]);
var inst_176542 = oops.state._STAR_runtime_state_STAR_;
var inst_176543 = (new Error());
var inst_176544 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_176545 = oops.state.prepare_state(inst_176423,inst_176543,inst_176544);
var inst_176546 = (oops.state._STAR_runtime_state_STAR_ = inst_176545);
var state_176574__$1 = (function (){var statearr_176593 = state_176574;
(statearr_176593[(13)] = inst_176542);

(statearr_176593[(14)] = inst_176546);

return statearr_176593;
})();
var statearr_176594_179207 = state_176574__$1;
(statearr_176594_179207[(2)] = null);

(statearr_176594_179207[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (32))){
var state_176574__$1 = state_176574;
var statearr_176595_179208 = state_176574__$1;
(statearr_176595_179208[(2)] = null);

(statearr_176595_179208[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (40))){
var inst_176562 = (state_176574[(2)]);
var _ = (function (){var statearr_176596 = state_176574;
(statearr_176596[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176596;
})();
var state_176574__$1 = state_176574;
var statearr_176597_179209 = state_176574__$1;
(statearr_176597_179209[(2)] = inst_176562);

(statearr_176597_179209[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (33))){
var inst_176460 = (state_176574[(9)]);
var inst_176569 = (state_176574[(2)]);
var _ = (function (){var statearr_176598 = state_176574;
(statearr_176598[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176598;
})();
var state_176574__$1 = (function (){var statearr_176599 = state_176574;
(statearr_176599[(15)] = inst_176569);

return statearr_176599;
})();
var statearr_176600_179210 = state_176574__$1;
(statearr_176600_179210[(2)] = inst_176460);

(statearr_176600_179210[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (13))){
var inst_176460 = (state_176574[(9)]);
var _ = (function (){var statearr_176601 = state_176574;
(statearr_176601[(4)] = cljs.core.cons((15),(state_176574[(4)])));

return statearr_176601;
})();
var ___$1 = (function (){var statearr_176602 = state_176574;
(statearr_176602[(4)] = cljs.core.cons((16),(state_176574[(4)])));

return statearr_176602;
})();
var inst_176480 = oops.core.validate_object_access_dynamically(inst_176460,(0),"width",true,true,true);
var state_176574__$1 = state_176574;
if(inst_176480){
var statearr_176603_179211 = state_176574__$1;
(statearr_176603_179211[(1)] = (17));

} else {
var statearr_176604_179212 = state_176574__$1;
(statearr_176604_179212[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (22))){
var inst_176486 = (state_176574[(16)]);
var _ = (function (){var statearr_176605 = state_176574;
(statearr_176605[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176605;
})();
var inst_176492 = (state_176574[(2)]);
var inst_176493 = (oops.state._STAR_runtime_state_STAR_ = inst_176486);
var ___$1 = (function (){var temp__5825__auto__ = (state_176574[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_176574__$1 = (function (){var statearr_176606 = state_176574;
(statearr_176606[(17)] = inst_176493);

return statearr_176606;
})();
var statearr_176607_179213 = state_176574__$1;
(statearr_176607_179213[(2)] = inst_176492);

(statearr_176607_179213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (36))){
var inst_176542 = (state_176574[(13)]);
var _ = (function (){var statearr_176609 = state_176574;
(statearr_176609[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176609;
})();
var inst_176548 = (state_176574[(2)]);
var inst_176549 = (oops.state._STAR_runtime_state_STAR_ = inst_176542);
var ___$1 = (function (){var temp__5825__auto__ = (state_176574[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_176574__$1 = (function (){var statearr_176610 = state_176574;
(statearr_176610[(18)] = inst_176549);

return statearr_176610;
})();
var statearr_176611_179214 = state_176574__$1;
(statearr_176611_179214[(2)] = inst_176548);

(statearr_176611_179214[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (29))){
var inst_176521 = (state_176574[(19)]);
var _ = (function (){var statearr_176612 = state_176574;
(statearr_176612[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176612;
})();
var inst_176527 = (state_176574[(2)]);
var inst_176528 = (oops.state._STAR_runtime_state_STAR_ = inst_176521);
var ___$1 = (function (){var temp__5825__auto__ = (state_176574[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_176574__$1 = (function (){var statearr_176613 = state_176574;
(statearr_176613[(20)] = inst_176528);

return statearr_176613;
})();
var statearr_176614_179215 = state_176574__$1;
(statearr_176614_179215[(2)] = inst_176527);

(statearr_176614_179215[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (6))){
var _ = (function (){var statearr_176615 = state_176574;
(statearr_176615[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176615;
})();
var state_176574__$1 = state_176574;
var ex176608 = (state_176574__$1[(2)]);
var statearr_176616_179216 = state_176574__$1;
(statearr_176616_179216[(5)] = ex176608);


throw ex176608;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (28))){
var inst_176572 = (state_176574[(2)]);
var state_176574__$1 = state_176574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_176574__$1,inst_176572);
} else {
if((state_val_176575 === (25))){
var state_176574__$1 = state_176574;
var statearr_176617_179217 = state_176574__$1;
(statearr_176617_179217[(2)] = null);

(statearr_176617_179217[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (34))){
var inst_176423 = (state_176574[(8)]);
var _ = (function (){var statearr_176618 = state_176574;
(statearr_176618[(4)] = cljs.core.cons((36),(state_176574[(4)])));

return statearr_176618;
})();
var ___$1 = (function (){var statearr_176619 = state_176574;
(statearr_176619[(4)] = cljs.core.cons((37),(state_176574[(4)])));

return statearr_176619;
})();
var inst_176557 = oops.core.validate_object_access_dynamically(inst_176423,(0),"height",true,true,false);
var state_176574__$1 = state_176574;
if(inst_176557){
var statearr_176620_179218 = state_176574__$1;
(statearr_176620_179218[(1)] = (38));

} else {
var statearr_176621_179219 = state_176574__$1;
(statearr_176621_179219[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (17))){
var inst_176423 = (state_176574[(8)]);
var inst_176486 = oops.state._STAR_runtime_state_STAR_;
var inst_176487 = (new Error());
var inst_176488 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_176489 = oops.state.prepare_state(inst_176423,inst_176487,inst_176488);
var inst_176490 = (oops.state._STAR_runtime_state_STAR_ = inst_176489);
var state_176574__$1 = (function (){var statearr_176622 = state_176574;
(statearr_176622[(16)] = inst_176486);

(statearr_176622[(21)] = inst_176490);

return statearr_176622;
})();
var statearr_176623_179220 = state_176574__$1;
(statearr_176623_179220[(2)] = null);

(statearr_176623_179220[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (3))){
var inst_176428 = (state_176574[(7)]);
var _ = (function (){var statearr_176624 = state_176574;
(statearr_176624[(4)] = cljs.core.cons((5),(state_176574[(4)])));

return statearr_176624;
})();
var ___$1 = (function (){var statearr_176625 = state_176574;
(statearr_176625[(4)] = cljs.core.cons((6),(state_176574[(4)])));

return statearr_176625;
})();
var inst_176446 = oops.core.validate_object_access_dynamically(inst_176428,(0),"canvas",true,true,false);
var state_176574__$1 = state_176574;
if(inst_176446){
var statearr_176626_179221 = state_176574__$1;
(statearr_176626_179221[(1)] = (7));

} else {
var statearr_176627_179222 = state_176574__$1;
(statearr_176627_179222[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (12))){
var inst_176457 = (state_176574[(2)]);
var _ = (function (){var statearr_176629 = state_176574;
(statearr_176629[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176629;
})();
var state_176574__$1 = state_176574;
var statearr_176630_179223 = state_176574__$1;
(statearr_176630_179223[(2)] = inst_176457);

(statearr_176630_179223[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (2))){
var inst_176423 = (state_176574[(8)]);
var inst_176428 = (state_176574[(7)]);
var inst_176421 = (state_176574[(2)]);
var inst_176422 = teg_online.utils.minimorphic.make_sprite.cljs$core$IFn$_invoke$arity$variadic(inst_176421,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(0)], 0));
var inst_176423__$1 = teg_online.utils.minimorphic.appear.cljs$core$IFn$_invoke$arity$2(inst_176422,(2));
var inst_176424 = teg_online.ui.world.addMorph(inst_176423__$1);
var inst_176428__$1 = teg_online.ui.world;
var inst_176431 = oops.state._STAR_runtime_state_STAR_;
var inst_176432 = (new Error());
var inst_176433 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_176434 = oops.state.prepare_state(inst_176428__$1,inst_176432,inst_176433);
var inst_176435 = (oops.state._STAR_runtime_state_STAR_ = inst_176434);
var state_176574__$1 = (function (){var statearr_176631 = state_176574;
(statearr_176631[(8)] = inst_176423__$1);

(statearr_176631[(22)] = inst_176424);

(statearr_176631[(7)] = inst_176428__$1);

(statearr_176631[(23)] = inst_176431);

(statearr_176631[(24)] = inst_176435);

return statearr_176631;
})();
var statearr_176632_179224 = state_176574__$1;
(statearr_176632_179224[(2)] = null);

(statearr_176632_179224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (23))){
var _ = (function (){var statearr_176633 = state_176574;
(statearr_176633[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176633;
})();
var state_176574__$1 = state_176574;
var ex176628 = (state_176574__$1[(2)]);
var statearr_176634_179225 = state_176574__$1;
(statearr_176634_179225[(5)] = ex176628);


throw ex176628;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (35))){
var inst_176460 = (state_176574[(9)]);
var inst_176565 = (state_176574[(2)]);
var inst_176566 = (inst_176460["height"] = inst_176565);
var state_176574__$1 = state_176574;
var statearr_176635_179226 = state_176574__$1;
(statearr_176635_179226[(2)] = inst_176566);

(statearr_176635_179226[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (19))){
var inst_176460 = (state_176574[(9)]);
var inst_176513 = (state_176574[(2)]);
var _ = (function (){var statearr_176636 = state_176574;
(statearr_176636[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176636;
})();
var state_176574__$1 = (function (){var statearr_176637 = state_176574;
(statearr_176637[(25)] = inst_176513);

return statearr_176637;
})();
var statearr_176638_179227 = state_176574__$1;
(statearr_176638_179227[(2)] = inst_176460);

(statearr_176638_179227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (11))){
var state_176574__$1 = state_176574;
var statearr_176639_179228 = state_176574__$1;
(statearr_176639_179228[(2)] = null);

(statearr_176639_179228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (9))){
var inst_176451 = (state_176574[(26)]);
var inst_176451__$1 = (state_176574[(2)]);
var inst_176452 = oops.core.validate_object_access_dynamically(inst_176451__$1,(0),"html",true,true,false);
var state_176574__$1 = (function (){var statearr_176640 = state_176574;
(statearr_176640[(26)] = inst_176451__$1);

return statearr_176640;
})();
if(inst_176452){
var statearr_176641_179229 = state_176574__$1;
(statearr_176641_179229[(1)] = (10));

} else {
var statearr_176642_179230 = state_176574__$1;
(statearr_176642_179230[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (5))){
var inst_176431 = (state_176574[(23)]);
var _ = (function (){var statearr_176643 = state_176574;
(statearr_176643[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176643;
})();
var inst_176437 = (state_176574[(2)]);
var inst_176438 = (oops.state._STAR_runtime_state_STAR_ = inst_176431);
var ___$1 = (function (){var temp__5825__auto__ = (state_176574[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_176574__$1 = (function (){var statearr_176644 = state_176574;
(statearr_176644[(27)] = inst_176438);

return statearr_176644;
})();
var statearr_176645_179231 = state_176574__$1;
(statearr_176645_179231[(2)] = inst_176437);

(statearr_176645_179231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (14))){
var inst_176460 = (state_176574[(9)]);
var inst_176516 = (state_176574[(2)]);
var inst_176521 = oops.state._STAR_runtime_state_STAR_;
var inst_176522 = (new Error());
var inst_176523 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_176524 = oops.state.prepare_state(inst_176460,inst_176522,inst_176523);
var inst_176525 = (oops.state._STAR_runtime_state_STAR_ = inst_176524);
var state_176574__$1 = (function (){var statearr_176647 = state_176574;
(statearr_176647[(28)] = inst_176516);

(statearr_176647[(19)] = inst_176521);

(statearr_176647[(29)] = inst_176525);

return statearr_176647;
})();
var statearr_176648_179232 = state_176574__$1;
(statearr_176648_179232[(2)] = null);

(statearr_176648_179232[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (26))){
var inst_176506 = (state_176574[(2)]);
var _ = (function (){var statearr_176649 = state_176574;
(statearr_176649[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176649;
})();
var state_176574__$1 = state_176574;
var statearr_176650_179233 = state_176574__$1;
(statearr_176650_179233[(2)] = inst_176506);

(statearr_176650_179233[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (16))){
var _ = (function (){var statearr_176652 = state_176574;
(statearr_176652[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176652;
})();
var state_176574__$1 = state_176574;
var ex176646 = (state_176574__$1[(2)]);
var statearr_176653_179234 = state_176574__$1;
(statearr_176653_179234[(5)] = ex176646);


throw ex176646;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (38))){
var inst_176423 = (state_176574[(8)]);
var inst_176559 = (inst_176423["height"]);
var state_176574__$1 = state_176574;
var statearr_176654_179235 = state_176574__$1;
(statearr_176654_179235[(2)] = inst_176559);

(statearr_176654_179235[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (30))){
var _ = (function (){var statearr_176655 = state_176574;
(statearr_176655[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176655;
})();
var state_176574__$1 = state_176574;
var ex176651 = (state_176574__$1[(2)]);
var statearr_176656_179236 = state_176574__$1;
(statearr_176656_179236[(5)] = ex176651);


throw ex176651;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (10))){
var inst_176451 = (state_176574[(26)]);
var inst_176454 = (inst_176451["html"]);
var state_176574__$1 = state_176574;
var statearr_176658_179237 = state_176574__$1;
(statearr_176658_179237[(2)] = inst_176454);

(statearr_176658_179237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (18))){
var state_176574__$1 = state_176574;
var statearr_176659_179238 = state_176574__$1;
(statearr_176659_179238[(2)] = null);

(statearr_176659_179238[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (37))){
var _ = (function (){var statearr_176660 = state_176574;
(statearr_176660[(4)] = cljs.core.rest((state_176574[(4)])));

return statearr_176660;
})();
var state_176574__$1 = state_176574;
var ex176657 = (state_176574__$1[(2)]);
var statearr_176661_179239 = state_176574__$1;
(statearr_176661_179239[(5)] = ex176657);


throw ex176657;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176575 === (8))){
var state_176574__$1 = state_176574;
var statearr_176662_179240 = state_176574__$1;
(statearr_176662_179240[(2)] = null);

(statearr_176662_179240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$init_map_$_state_machine__18069__auto__ = null;
var teg_online$ui$init_map_$_state_machine__18069__auto____0 = (function (){
var statearr_176663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_176663[(0)] = teg_online$ui$init_map_$_state_machine__18069__auto__);

(statearr_176663[(1)] = (1));

return statearr_176663;
});
var teg_online$ui$init_map_$_state_machine__18069__auto____1 = (function (state_176574){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_176574);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e176664){var ex__18072__auto__ = e176664;
var statearr_176665_179241 = state_176574;
(statearr_176665_179241[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_176574[(4)]))){
var statearr_176666_179242 = state_176574;
(statearr_176666_179242[(1)] = cljs.core.first((state_176574[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179243 = state_176574;
state_176574 = G__179243;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$init_map_$_state_machine__18069__auto__ = function(state_176574){
switch(arguments.length){
case 0:
return teg_online$ui$init_map_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$init_map_$_state_machine__18069__auto____1.call(this,state_176574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$init_map_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$init_map_$_state_machine__18069__auto____0;
teg_online$ui$init_map_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$init_map_$_state_machine__18069__auto____1;
return teg_online$ui$init_map_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_176667 = f__19294__auto__();
(statearr_176667[(6)] = c__19293__auto__);

return statearr_176667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.update_army_counter = (function teg_online$ui$update_army_counter(morph,color,count,highlight_QMARK_){
morph.removeAllSubmorphs();

var text_color = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["purple",null,"black",null], null), null),color))?"white":"black");
var G__176668_179244 = morph;
var target_obj_176669_179245 = G__176668_179244;
var _STAR_runtime_state_STAR__orig_val__176671_179246 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__176672_179247 = oops.state.prepare_state(target_obj_176669_179245,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__176672_179247);

try{var parent_obj_176670_179248 = target_obj_176669_179245;
if(oops.core.validate_object_access_dynamically(parent_obj_176670_179248,(0),"color",true,true,true)){
(parent_obj_176670_179248["color"] = color);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__176671_179246);
}
var target_obj_176673_179249 = G__176668_179244;
var _STAR_runtime_state_STAR__orig_val__176675_179250 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__176676_179251 = oops.state.prepare_state(target_obj_176673_179249,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__176676_179251);

try{var parent_obj_176674_179252 = target_obj_176673_179249;
if(oops.core.validate_object_access_dynamically(parent_obj_176674_179252,(2),"border",true,true,true)){
(parent_obj_176674_179252["border"] = text_color);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__176675_179250);
}

var label = teg_online.utils.minimorphic.make_label.cljs$core$IFn$_invoke$arity$variadic((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"font","font",-1506159249),"14px Arial",new cljs.core.Keyword(null,"color","color",1011675173),text_color], 0));
var stack = teg_online.utils.minimorphic.make_ellipse.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"!border","!border",-1119967627),text_color,new cljs.core.Keyword(null,"extent","extent",-186399820),(function (){var target_obj_176677 = morph;
var _STAR_runtime_state_STAR__orig_val__176679 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__176680 = oops.state.prepare_state(target_obj_176677,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__176680);

try{var next_obj_176678 = ((oops.core.validate_object_access_dynamically(target_obj_176677,(0),"extent",true,true,false))?(target_obj_176677["extent"]):null);
return next_obj_176678;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__176679);
}})(),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((function (){var target_obj_176681 = morph;
var _STAR_runtime_state_STAR__orig_val__176683 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__176684 = oops.state.prepare_state(target_obj_176681,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__176684);

try{var next_obj_176682 = ((oops.core.validate_object_access_dynamically(target_obj_176681,(0),"x",true,true,false))?(target_obj_176681["x"]):null);
return next_obj_176682;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__176683);
}})() + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),((function (){var target_obj_176685 = morph;
var _STAR_runtime_state_STAR__orig_val__176687 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__176688 = oops.state.prepare_state(target_obj_176685,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__176688);

try{var next_obj_176686 = ((oops.core.validate_object_access_dynamically(target_obj_176685,(0),"y",true,true,false))?(target_obj_176685["y"]):null);
return next_obj_176686;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__176687);
}})() - (3))], null)], 0));
var target_obj_176689_179253 = label;
var _STAR_runtime_state_STAR__orig_val__176691_179254 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__176692_179255 = oops.state.prepare_state(target_obj_176689_179253,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__176692_179255);

try{var parent_obj_176690_179256 = target_obj_176689_179253;
if(oops.core.validate_object_access_dynamically(parent_obj_176690_179256,(0),"center",true,true,true)){
(parent_obj_176690_179256["center"] = (function (){var target_obj_176693 = (cljs.core.truth_(highlight_QMARK_)?stack:morph);
var _STAR_runtime_state_STAR__orig_val__176695 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__176696 = oops.state.prepare_state(target_obj_176693,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__176696);

try{var next_obj_176694 = ((oops.core.validate_object_access_dynamically(target_obj_176693,(0),"center",true,true,false))?(target_obj_176693["center"]):null);
return next_obj_176694;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__176695);
}})());
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__176691_179254);
}
if(cljs.core.truth_(highlight_QMARK_)){
morph.addMorph(stack);
} else {
}

return morph.addMorph(label);
});
teg_online.ui.update_country = (function teg_online$ui$update_country(state,player_indices,p__176697){
var map__176698 = p__176697;
var map__176698__$1 = cljs.core.__destructure_map(map__176698);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__176698__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var owner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__176698__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var army = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__176698__$1,new cljs.core.Keyword(null,"army","army",842961270));
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_176882){
var state_val_176883 = (state_176882[(1)]);
if((state_val_176883 === (7))){
var inst_176718 = (state_176882[(7)]);
var _ = (function (){var statearr_176884 = state_176882;
(statearr_176884[(4)] = cljs.core.rest((state_176882[(4)])));

return statearr_176884;
})();
var inst_176724 = (state_176882[(2)]);
var inst_176725 = (oops.state._STAR_runtime_state_STAR_ = inst_176718);
var ___$1 = (function (){var temp__5825__auto__ = (state_176882[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_176882__$1 = (function (){var statearr_176885 = state_176882;
(statearr_176885[(8)] = inst_176725);

return statearr_176885;
})();
var statearr_176886_179257 = state_176882__$1;
(statearr_176886_179257[(2)] = inst_176724);

(statearr_176886_179257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (20))){
var inst_176707 = (state_176882[(9)]);
var inst_176748 = (state_176882[(10)]);
var inst_176795 = (inst_176707["form"] = inst_176748);
var state_176882__$1 = state_176882;
var statearr_176887_179258 = state_176882__$1;
(statearr_176887_179258[(2)] = inst_176795);

(statearr_176887_179258[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (27))){
var inst_176712 = (state_176882[(11)]);
var state_176882__$1 = state_176882;
if(cljs.core.truth_(inst_176712)){
var statearr_176888_179259 = state_176882__$1;
(statearr_176888_179259[(1)] = (30));

} else {
var statearr_176889_179260 = state_176882__$1;
(statearr_176889_179260[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (1))){
var inst_176703 = (state_176882[(12)]);
var inst_176699 = cljs.core.deref(state);
var inst_176700 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176701 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"countries","countries",863192750),id];
var inst_176702 = (new cljs.core.PersistentVector(null,3,(5),inst_176700,inst_176701,null));
var inst_176703__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_176699,inst_176702);
var state_176882__$1 = (function (){var statearr_176891 = state_176882;
(statearr_176891[(12)] = inst_176703__$1);

return statearr_176891;
})();
if(cljs.core.truth_(inst_176703__$1)){
var statearr_176892_179261 = state_176882__$1;
(statearr_176892_179261[(1)] = (2));

} else {
var statearr_176893_179262 = state_176882__$1;
(statearr_176893_179262[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (24))){
var inst_176708 = (state_176882[(13)]);
var inst_176837 = (state_176882[(2)]);
var inst_176842 = oops.state._STAR_runtime_state_STAR_;
var inst_176843 = (new Error());
var inst_176844 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_176845 = oops.state.prepare_state(inst_176708,inst_176843,inst_176844);
var inst_176846 = (oops.state._STAR_runtime_state_STAR_ = inst_176845);
var state_176882__$1 = (function (){var statearr_176894 = state_176882;
(statearr_176894[(14)] = inst_176837);

(statearr_176894[(15)] = inst_176842);

(statearr_176894[(16)] = inst_176846);

return statearr_176894;
})();
var statearr_176895_179263 = state_176882__$1;
(statearr_176895_179263[(2)] = null);

(statearr_176895_179263[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (39))){
var _ = (function (){var statearr_176896 = state_176882;
(statearr_176896[(4)] = cljs.core.rest((state_176882[(4)])));

return statearr_176896;
})();
var state_176882__$1 = state_176882;
var ex176890 = (state_176882__$1[(2)]);
var statearr_176897_179264 = state_176882__$1;
(statearr_176897_179264[(5)] = ex176890);


throw ex176890;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (46))){
var inst_176762 = (state_176882[(17)]);
var inst_176771 = (state_176882[(18)]);
var inst_176871 = (army + inst_176762);
var inst_176872 = (inst_176871 - inst_176771);
var state_176882__$1 = state_176882;
var statearr_176898_179265 = state_176882__$1;
(statearr_176898_179265[(2)] = inst_176872);

(statearr_176898_179265[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (4))){
var inst_176880 = (state_176882[(2)]);
var state_176882__$1 = state_176882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_176882__$1,inst_176880);
} else {
if((state_val_176883 === (15))){
var inst_176745 = (state_176882[(2)]);
var state_176882__$1 = state_176882;
var statearr_176899_179266 = state_176882__$1;
(statearr_176899_179266[(2)] = inst_176745);

(statearr_176899_179266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (48))){
var inst_176762 = (state_176882[(17)]);
var inst_176708 = (state_176882[(13)]);
var inst_176713 = (state_176882[(19)]);
var inst_176875 = (state_176882[(2)]);
var inst_176876 = (inst_176762 > (0));
var inst_176877 = teg_online.ui.update_army_counter(inst_176708,inst_176713,inst_176875,inst_176876);
var state_176882__$1 = state_176882;
var statearr_176900_179267 = state_176882__$1;
(statearr_176900_179267[(2)] = inst_176877);

(statearr_176900_179267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (21))){
var state_176882__$1 = state_176882;
var statearr_176901_179268 = state_176882__$1;
(statearr_176901_179268[(2)] = null);

(statearr_176901_179268[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (31))){
var state_176882__$1 = state_176882;
var statearr_176902_179269 = state_176882__$1;
(statearr_176902_179269[(2)] = (0));

(statearr_176902_179269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (32))){
var inst_176707 = (state_176882[(9)]);
var inst_176830 = (state_176882[(2)]);
var inst_176831 = (inst_176707["alpha"] = inst_176830);
var state_176882__$1 = state_176882;
var statearr_176903_179270 = state_176882__$1;
(statearr_176903_179270[(2)] = inst_176831);

(statearr_176903_179270[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (40))){
var inst_176712 = (state_176882[(11)]);
var state_176882__$1 = state_176882;
if(cljs.core.truth_(inst_176712)){
var statearr_176904_179271 = state_176882__$1;
(statearr_176904_179271[(1)] = (43));

} else {
var statearr_176905_179272 = state_176882__$1;
(statearr_176905_179272[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (33))){
var state_176882__$1 = state_176882;
var statearr_176906_179273 = state_176882__$1;
(statearr_176906_179273[(2)] = 0.25);

(statearr_176906_179273[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (13))){
var inst_176741 = (state_176882[(20)]);
var state_176882__$1 = state_176882;
var statearr_176907_179274 = state_176882__$1;
(statearr_176907_179274[(2)] = inst_176741);

(statearr_176907_179274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (22))){
var inst_176707 = (state_176882[(9)]);
var inst_176798 = (state_176882[(2)]);
var _ = (function (){var statearr_176908 = state_176882;
(statearr_176908[(4)] = cljs.core.rest((state_176882[(4)])));

return statearr_176908;
})();
var state_176882__$1 = (function (){var statearr_176909 = state_176882;
(statearr_176909[(21)] = inst_176798);

return statearr_176909;
})();
var statearr_176910_179275 = state_176882__$1;
(statearr_176910_179275[(2)] = inst_176707);

(statearr_176910_179275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (36))){
var inst_176708 = (state_176882[(13)]);
var _ = (function (){var statearr_176911 = state_176882;
(statearr_176911[(4)] = cljs.core.cons((38),(state_176882[(4)])));

return statearr_176911;
})();
var ___$1 = (function (){var statearr_176912 = state_176882;
(statearr_176912[(4)] = cljs.core.cons((39),(state_176882[(4)])));

return statearr_176912;
})();
var inst_176857 = oops.core.validate_object_access_dynamically(inst_176708,(0),"alpha",true,true,true);
var state_176882__$1 = state_176882;
if(inst_176857){
var statearr_176913_179276 = state_176882__$1;
(statearr_176913_179276[(1)] = (40));

} else {
var statearr_176914_179277 = state_176882__$1;
(statearr_176914_179277[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (41))){
var state_176882__$1 = state_176882;
var statearr_176915_179278 = state_176882__$1;
(statearr_176915_179278[(2)] = null);

(statearr_176915_179278[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (43))){
var state_176882__$1 = state_176882;
var statearr_176916_179279 = state_176882__$1;
(statearr_176916_179279[(2)] = (1));

(statearr_176916_179279[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (29))){
var inst_176707 = (state_176882[(9)]);
var inst_176834 = (state_176882[(2)]);
var _ = (function (){var statearr_176917 = state_176882;
(statearr_176917[(4)] = cljs.core.rest((state_176882[(4)])));

return statearr_176917;
})();
var state_176882__$1 = (function (){var statearr_176918 = state_176882;
(statearr_176918[(22)] = inst_176834);

return statearr_176918;
})();
var statearr_176919_179280 = state_176882__$1;
(statearr_176919_179280[(2)] = inst_176707);

(statearr_176919_179280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (44))){
var state_176882__$1 = state_176882;
var statearr_176920_179281 = state_176882__$1;
(statearr_176920_179281[(2)] = (0));

(statearr_176920_179281[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (6))){
var inst_176712 = (state_176882[(11)]);
var inst_176741 = (state_176882[(2)]);
var state_176882__$1 = (function (){var statearr_176921 = state_176882;
(statearr_176921[(20)] = inst_176741);

return statearr_176921;
})();
if(cljs.core.truth_(inst_176712)){
var statearr_176922_179282 = state_176882__$1;
(statearr_176922_179282[(1)] = (12));

} else {
var statearr_176923_179283 = state_176882__$1;
(statearr_176923_179283[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (28))){
var state_176882__$1 = state_176882;
var statearr_176924_179284 = state_176882__$1;
(statearr_176924_179284[(2)] = null);

(statearr_176924_179284[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (25))){
var inst_176806 = (state_176882[(23)]);
var _ = (function (){var statearr_176925 = state_176882;
(statearr_176925[(4)] = cljs.core.rest((state_176882[(4)])));

return statearr_176925;
})();
var inst_176812 = (state_176882[(2)]);
var inst_176813 = (oops.state._STAR_runtime_state_STAR_ = inst_176806);
var ___$1 = (function (){var temp__5825__auto__ = (state_176882[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_176882__$1 = (function (){var statearr_176926 = state_176882;
(statearr_176926[(24)] = inst_176813);

return statearr_176926;
})();
var statearr_176927_179285 = state_176882__$1;
(statearr_176927_179285[(2)] = inst_176812);

(statearr_176927_179285[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (34))){
var state_176882__$1 = state_176882;
var statearr_176928_179286 = state_176882__$1;
(statearr_176928_179286[(2)] = 0.5);

(statearr_176928_179286[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (17))){
var inst_176707 = (state_176882[(9)]);
var inst_176801 = (state_176882[(2)]);
var inst_176806 = oops.state._STAR_runtime_state_STAR_;
var inst_176807 = (new Error());
var inst_176808 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_176809 = oops.state.prepare_state(inst_176707,inst_176807,inst_176808);
var inst_176810 = (oops.state._STAR_runtime_state_STAR_ = inst_176809);
var state_176882__$1 = (function (){var statearr_176929 = state_176882;
(statearr_176929[(25)] = inst_176801);

(statearr_176929[(23)] = inst_176806);

(statearr_176929[(26)] = inst_176810);

return statearr_176929;
})();
var statearr_176930_179287 = state_176882__$1;
(statearr_176930_179287[(2)] = null);

(statearr_176930_179287[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (3))){
var state_176882__$1 = state_176882;
var statearr_176931_179288 = state_176882__$1;
(statearr_176931_179288[(2)] = null);

(statearr_176931_179288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (12))){
var inst_176741 = (state_176882[(20)]);
var inst_176713 = (state_176882[(19)]);
var inst_176743 = teg_online.utils.minimorphic.tint(inst_176741,inst_176713);
var state_176882__$1 = state_176882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_176882__$1,(15),inst_176743);
} else {
if((state_val_176883 === (2))){
var inst_176703 = (state_176882[(12)]);
var inst_176706 = (state_176882[(27)]);
var inst_176712 = (state_176882[(11)]);
var inst_176707 = (state_176882[(9)]);
var inst_176706__$1 = cljs.core.__destructure_map(inst_176703);
var inst_176707__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_176706__$1,new cljs.core.Keyword(null,"morph","morph",-595175877));
var inst_176708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_176706__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var inst_176709 = cljs.core.deref(state);
var inst_176710 = new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(inst_176709);
var inst_176711 = new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(inst_176710);
var inst_176712__$1 = (player_indices.cljs$core$IFn$_invoke$arity$1 ? player_indices.cljs$core$IFn$_invoke$arity$1(owner) : player_indices.call(null,owner));
var inst_176713 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(teg_online.ui_constants.player_colors,inst_176712__$1,"white");
var inst_176718 = oops.state._STAR_runtime_state_STAR_;
var inst_176719 = (new Error());
var inst_176720 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_176721 = oops.state.prepare_state(inst_176707__$1,inst_176719,inst_176720);
var inst_176722 = (oops.state._STAR_runtime_state_STAR_ = inst_176721);
var state_176882__$1 = (function (){var statearr_176932 = state_176882;
(statearr_176932[(27)] = inst_176706__$1);

(statearr_176932[(9)] = inst_176707__$1);

(statearr_176932[(13)] = inst_176708);

(statearr_176932[(28)] = inst_176711);

(statearr_176932[(11)] = inst_176712__$1);

(statearr_176932[(19)] = inst_176713);

(statearr_176932[(7)] = inst_176718);

(statearr_176932[(29)] = inst_176722);

return statearr_176932;
})();
var statearr_176933_179289 = state_176882__$1;
(statearr_176933_179289[(2)] = null);

(statearr_176933_179289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (23))){
var inst_176707 = (state_176882[(9)]);
var _ = (function (){var statearr_176934 = state_176882;
(statearr_176934[(4)] = cljs.core.cons((25),(state_176882[(4)])));

return statearr_176934;
})();
var ___$1 = (function (){var statearr_176935 = state_176882;
(statearr_176935[(4)] = cljs.core.cons((26),(state_176882[(4)])));

return statearr_176935;
})();
var inst_176821 = oops.core.validate_object_access_dynamically(inst_176707,(0),"alpha",true,true,true);
var state_176882__$1 = state_176882;
if(inst_176821){
var statearr_176936_179290 = state_176882__$1;
(statearr_176936_179290[(1)] = (27));

} else {
var statearr_176937_179291 = state_176882__$1;
(statearr_176937_179291[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (47))){
var state_176882__$1 = state_176882;
var statearr_176939_179292 = state_176882__$1;
(statearr_176939_179292[(2)] = (0));

(statearr_176939_179292[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (35))){
var inst_176827 = (state_176882[(2)]);
var state_176882__$1 = state_176882;
var statearr_176940_179293 = state_176882__$1;
(statearr_176940_179293[(2)] = inst_176827);

(statearr_176940_179293[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (19))){
var _ = (function (){var statearr_176941 = state_176882;
(statearr_176941[(4)] = cljs.core.rest((state_176882[(4)])));

return statearr_176941;
})();
var state_176882__$1 = state_176882;
var ex176938 = (state_176882__$1[(2)]);
var statearr_176942_179294 = state_176882__$1;
(statearr_176942_179294[(5)] = ex176938);


throw ex176938;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (11))){
var inst_176738 = (state_176882[(2)]);
var _ = (function (){var statearr_176943 = state_176882;
(statearr_176943[(4)] = cljs.core.rest((state_176882[(4)])));

return statearr_176943;
})();
var state_176882__$1 = state_176882;
var statearr_176944_179295 = state_176882__$1;
(statearr_176944_179295[(2)] = inst_176738);

(statearr_176944_179295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (9))){
var inst_176707 = (state_176882[(9)]);
var inst_176735 = (inst_176707["originalForm"]);
var state_176882__$1 = state_176882;
var statearr_176945_179296 = state_176882__$1;
(statearr_176945_179296[(2)] = inst_176735);

(statearr_176945_179296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (5))){
var inst_176707 = (state_176882[(9)]);
var _ = (function (){var statearr_176946 = state_176882;
(statearr_176946[(4)] = cljs.core.cons((7),(state_176882[(4)])));

return statearr_176946;
})();
var ___$1 = (function (){var statearr_176947 = state_176882;
(statearr_176947[(4)] = cljs.core.cons((8),(state_176882[(4)])));

return statearr_176947;
})();
var inst_176733 = oops.core.validate_object_access_dynamically(inst_176707,(0),"originalForm",true,true,false);
var state_176882__$1 = state_176882;
if(inst_176733){
var statearr_176948_179297 = state_176882__$1;
(statearr_176948_179297[(1)] = (9));

} else {
var statearr_176949_179298 = state_176882__$1;
(statearr_176949_179298[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (14))){
var inst_176711 = (state_176882[(28)]);
var inst_176707 = (state_176882[(9)]);
var inst_176706 = (state_176882[(27)]);
var inst_176713 = (state_176882[(19)]);
var inst_176703 = (state_176882[(12)]);
var inst_176708 = (state_176882[(13)]);
var inst_176712 = (state_176882[(11)]);
var inst_176748 = (state_176882[(10)]);
var inst_176741 = (state_176882[(20)]);
var inst_176762 = (state_176882[(17)]);
var inst_176748__$1 = (state_176882[(2)]);
var inst_176749 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_176750 = [new cljs.core.Keyword(null,"additions","additions",-1894561789),id];
var inst_176751 = (new cljs.core.PersistentVector(null,2,(5),inst_176749,inst_176750,null));
var inst_176752 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(inst_176711,inst_176751,(0));
var inst_176754 = (function (){var morph = inst_176707;
var map__176705 = inst_176706;
var color = inst_176713;
var temp__5825__auto__ = inst_176703;
var user_data = inst_176711;
var counter = inst_176708;
var player_idx = inst_176712;
var tinted_form = inst_176748__$1;
var original_form = inst_176741;
return (function (p__176753){
var vec__176951 = p__176753;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176951,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176951,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176951,(2),null);
return v;
});
})();
var inst_176756 = (function (){var morph = inst_176707;
var map__176705 = inst_176706;
var color = inst_176713;
var temp__5825__auto__ = inst_176703;
var user_data = inst_176711;
var counter = inst_176708;
var player_idx = inst_176712;
var tinted_form = inst_176748__$1;
var original_form = inst_176741;
return (function (p__176755){
var vec__176954 = p__176755;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176954,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176954,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,id);
});
})();
var inst_176757 = cljs.core.PersistentVector.EMPTY;
var inst_176758 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_176711,new cljs.core.Keyword(null,"regroups","regroups",865077182),inst_176757);
var inst_176759 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_176756,inst_176758);
var inst_176760 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_176754,inst_176759);
var inst_176761 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_176760);
var inst_176762__$1 = (inst_176752 + inst_176761);
var inst_176764 = (function (){var morph = inst_176707;
var map__176705 = inst_176706;
var additions = inst_176762__$1;
var color = inst_176713;
var temp__5825__auto__ = inst_176703;
var user_data = inst_176711;
var counter = inst_176708;
var player_idx = inst_176712;
var tinted_form = inst_176748__$1;
var original_form = inst_176741;
return (function (p__176763){
var vec__176957 = p__176763;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176957,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176957,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176957,(2),null);
return v;
});
})();
var inst_176766 = (function (){var morph = inst_176707;
var map__176705 = inst_176706;
var additions = inst_176762__$1;
var color = inst_176713;
var temp__5825__auto__ = inst_176703;
var user_data = inst_176711;
var counter = inst_176708;
var player_idx = inst_176712;
var tinted_form = inst_176748__$1;
var original_form = inst_176741;
return (function (p__176765){
var vec__176960 = p__176765;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__176960,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,id);
});
})();
var inst_176767 = cljs.core.PersistentVector.EMPTY;
var inst_176768 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_176711,new cljs.core.Keyword(null,"regroups","regroups",865077182),inst_176767);
var inst_176769 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_176766,inst_176768);
var inst_176770 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_176764,inst_176769);
var inst_176771 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_176770);
var inst_176772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_176711,new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382));
var inst_176773 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,inst_176772);
var inst_176778 = oops.state._STAR_runtime_state_STAR_;
var inst_176779 = (new Error());
var inst_176780 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_176781 = oops.state.prepare_state(inst_176707,inst_176779,inst_176780);
var inst_176782 = (oops.state._STAR_runtime_state_STAR_ = inst_176781);
var state_176882__$1 = (function (){var statearr_176963 = state_176882;
(statearr_176963[(10)] = inst_176748__$1);

(statearr_176963[(17)] = inst_176762__$1);

(statearr_176963[(18)] = inst_176771);

(statearr_176963[(30)] = inst_176773);

(statearr_176963[(31)] = inst_176778);

(statearr_176963[(32)] = inst_176782);

return statearr_176963;
})();
var statearr_176964_179299 = state_176882__$1;
(statearr_176964_179299[(2)] = null);

(statearr_176964_179299[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (45))){
var inst_176708 = (state_176882[(13)]);
var inst_176862 = (state_176882[(2)]);
var inst_176863 = (inst_176708["alpha"] = inst_176862);
var state_176882__$1 = state_176882;
var statearr_176965_179300 = state_176882__$1;
(statearr_176965_179300[(2)] = inst_176863);

(statearr_176965_179300[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (26))){
var _ = (function (){var statearr_176966 = state_176882;
(statearr_176966[(4)] = cljs.core.rest((state_176882[(4)])));

return statearr_176966;
})();
var state_176882__$1 = state_176882;
var ex176950 = (state_176882__$1[(2)]);
var statearr_176967_179301 = state_176882__$1;
(statearr_176967_179301[(5)] = ex176950);


throw ex176950;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (16))){
var inst_176707 = (state_176882[(9)]);
var _ = (function (){var statearr_176968 = state_176882;
(statearr_176968[(4)] = cljs.core.cons((18),(state_176882[(4)])));

return statearr_176968;
})();
var ___$1 = (function (){var statearr_176969 = state_176882;
(statearr_176969[(4)] = cljs.core.cons((19),(state_176882[(4)])));

return statearr_176969;
})();
var inst_176793 = oops.core.validate_object_access_dynamically(inst_176707,(0),"form",true,true,true);
var state_176882__$1 = state_176882;
if(inst_176793){
var statearr_176970_179302 = state_176882__$1;
(statearr_176970_179302[(1)] = (20));

} else {
var statearr_176971_179303 = state_176882__$1;
(statearr_176971_179303[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (38))){
var inst_176842 = (state_176882[(15)]);
var _ = (function (){var statearr_176972 = state_176882;
(statearr_176972[(4)] = cljs.core.rest((state_176882[(4)])));

return statearr_176972;
})();
var inst_176848 = (state_176882[(2)]);
var inst_176849 = (oops.state._STAR_runtime_state_STAR_ = inst_176842);
var ___$1 = (function (){var temp__5825__auto__ = (state_176882[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_176882__$1 = (function (){var statearr_176973 = state_176882;
(statearr_176973[(33)] = inst_176849);

return statearr_176973;
})();
var statearr_176974_179304 = state_176882__$1;
(statearr_176974_179304[(2)] = inst_176848);

(statearr_176974_179304[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (30))){
var inst_176773 = (state_176882[(30)]);
var state_176882__$1 = state_176882;
if(cljs.core.truth_(inst_176773)){
var statearr_176975_179305 = state_176882__$1;
(statearr_176975_179305[(1)] = (33));

} else {
var statearr_176976_179306 = state_176882__$1;
(statearr_176976_179306[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (10))){
var state_176882__$1 = state_176882;
var statearr_176977_179307 = state_176882__$1;
(statearr_176977_179307[(2)] = null);

(statearr_176977_179307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (18))){
var inst_176778 = (state_176882[(31)]);
var _ = (function (){var statearr_176978 = state_176882;
(statearr_176978[(4)] = cljs.core.rest((state_176882[(4)])));

return statearr_176978;
})();
var inst_176784 = (state_176882[(2)]);
var inst_176785 = (oops.state._STAR_runtime_state_STAR_ = inst_176778);
var ___$1 = (function (){var temp__5825__auto__ = (state_176882[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_176882__$1 = (function (){var statearr_176979 = state_176882;
(statearr_176979[(34)] = inst_176785);

return statearr_176979;
})();
var statearr_176980_179308 = state_176882__$1;
(statearr_176980_179308[(2)] = inst_176784);

(statearr_176980_179308[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (42))){
var inst_176708 = (state_176882[(13)]);
var inst_176866 = (state_176882[(2)]);
var _ = (function (){var statearr_176982 = state_176882;
(statearr_176982[(4)] = cljs.core.rest((state_176882[(4)])));

return statearr_176982;
})();
var state_176882__$1 = (function (){var statearr_176983 = state_176882;
(statearr_176983[(35)] = inst_176866);

return statearr_176983;
})();
var statearr_176984_179309 = state_176882__$1;
(statearr_176984_179309[(2)] = inst_176708);

(statearr_176984_179309[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (37))){
var inst_176712 = (state_176882[(11)]);
var inst_176869 = (state_176882[(2)]);
var state_176882__$1 = (function (){var statearr_176985 = state_176882;
(statearr_176985[(36)] = inst_176869);

return statearr_176985;
})();
if(cljs.core.truth_(inst_176712)){
var statearr_176986_179310 = state_176882__$1;
(statearr_176986_179310[(1)] = (46));

} else {
var statearr_176987_179311 = state_176882__$1;
(statearr_176987_179311[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_176883 === (8))){
var _ = (function (){var statearr_176988 = state_176882;
(statearr_176988[(4)] = cljs.core.rest((state_176882[(4)])));

return statearr_176988;
})();
var state_176882__$1 = state_176882;
var ex176981 = (state_176882__$1[(2)]);
var statearr_176989_179312 = state_176882__$1;
(statearr_176989_179312[(5)] = ex176981);


throw ex176981;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$update_country_$_state_machine__18069__auto__ = null;
var teg_online$ui$update_country_$_state_machine__18069__auto____0 = (function (){
var statearr_176990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_176990[(0)] = teg_online$ui$update_country_$_state_machine__18069__auto__);

(statearr_176990[(1)] = (1));

return statearr_176990;
});
var teg_online$ui$update_country_$_state_machine__18069__auto____1 = (function (state_176882){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_176882);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e176991){var ex__18072__auto__ = e176991;
var statearr_176992_179313 = state_176882;
(statearr_176992_179313[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_176882[(4)]))){
var statearr_176993_179314 = state_176882;
(statearr_176993_179314[(1)] = cljs.core.first((state_176882[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179315 = state_176882;
state_176882 = G__179315;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$update_country_$_state_machine__18069__auto__ = function(state_176882){
switch(arguments.length){
case 0:
return teg_online$ui$update_country_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$update_country_$_state_machine__18069__auto____1.call(this,state_176882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$update_country_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$update_country_$_state_machine__18069__auto____0;
teg_online$ui$update_country_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$update_country_$_state_machine__18069__auto____1;
return teg_online$ui$update_country_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_176994 = f__19294__auto__();
(statearr_176994[(6)] = c__19293__auto__);

return statearr_176994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.update_countries = (function teg_online$ui$update_countries(state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_177012){
var state_val_177013 = (state_177012[(1)]);
if((state_val_177013 === (1))){
var inst_176996 = cljs.core.deref(state);
var inst_176997 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_176996);
var inst_176998 = cljs.core.__destructure_map(inst_176997);
var inst_176999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_176998,new cljs.core.Keyword(null,"turn-order","turn-order",669259588));
var inst_177000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_176998,new cljs.core.Keyword(null,"countries","countries",863192750));
var inst_177001 = cljs.core.PersistentHashMap.EMPTY;
var inst_177002 = (function (){var map__176995 = inst_176998;
var turn_order = inst_176999;
var countries = inst_177000;
return (function (idx,pid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid,idx], null);
});
})();
var inst_177003 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(inst_177002,inst_176999);
var inst_177004 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_177001,inst_177003);
var inst_177005 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(teg_online.ui.update_country,state,inst_177004);
var inst_177006 = cljs.core.vals(inst_177000);
var inst_177007 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_177005,inst_177006);
var inst_177008 = cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,inst_177007);
var state_177012__$1 = state_177012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_177012__$1,(2),inst_177008);
} else {
if((state_val_177013 === (2))){
var inst_177010 = (state_177012[(2)]);
var state_177012__$1 = state_177012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_177012__$1,inst_177010);
} else {
return null;
}
}
});
return (function() {
var teg_online$ui$update_countries_$_state_machine__18069__auto__ = null;
var teg_online$ui$update_countries_$_state_machine__18069__auto____0 = (function (){
var statearr_177014 = [null,null,null,null,null,null,null];
(statearr_177014[(0)] = teg_online$ui$update_countries_$_state_machine__18069__auto__);

(statearr_177014[(1)] = (1));

return statearr_177014;
});
var teg_online$ui$update_countries_$_state_machine__18069__auto____1 = (function (state_177012){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_177012);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e177015){var ex__18072__auto__ = e177015;
var statearr_177016_179316 = state_177012;
(statearr_177016_179316[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_177012[(4)]))){
var statearr_177017_179317 = state_177012;
(statearr_177017_179317[(1)] = cljs.core.first((state_177012[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179318 = state_177012;
state_177012 = G__179318;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$update_countries_$_state_machine__18069__auto__ = function(state_177012){
switch(arguments.length){
case 0:
return teg_online$ui$update_countries_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$update_countries_$_state_machine__18069__auto____1.call(this,state_177012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$update_countries_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$update_countries_$_state_machine__18069__auto____0;
teg_online$ui$update_countries_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$update_countries_$_state_machine__18069__auto____1;
return teg_online$ui$update_countries_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_177018 = f__19294__auto__();
(statearr_177018[(6)] = c__19293__auto__);

return statearr_177018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.update_players = (function teg_online$ui$update_players(state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_177343){
var state_val_177344 = (state_177343[(1)]);
if((state_val_177344 === (7))){
var inst_177041 = (state_177343[(7)]);
var _ = (function (){var statearr_177345 = state_177343;
(statearr_177345[(4)] = cljs.core.rest((state_177343[(4)])));

return statearr_177345;
})();
var inst_177047 = (state_177343[(2)]);
var inst_177048 = (oops.state._STAR_runtime_state_STAR_ = inst_177041);
var ___$1 = (function (){var temp__5825__auto__ = (state_177343[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_177343__$1 = (function (){var statearr_177346 = state_177343;
(statearr_177346[(8)] = inst_177048);

return statearr_177346;
})();
var statearr_177347_179319 = state_177343__$1;
(statearr_177347_179319[(2)] = inst_177047);

(statearr_177347_179319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (20))){
var state_177343__$1 = state_177343;
var statearr_177348_179320 = state_177343__$1;
(statearr_177348_179320[(2)] = "player-turn");

(statearr_177348_179320[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (27))){
var state_177343__$1 = state_177343;
var statearr_177349_179321 = state_177343__$1;
(statearr_177349_179321[(2)] = null);

(statearr_177349_179321[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (1))){
var inst_177022 = (state_177343[(9)]);
var inst_177024 = (state_177343[(10)]);
var inst_177028 = (state_177343[(11)]);
var inst_177020 = cljs.core.deref(state);
var inst_177021 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_177020);
var inst_177022__$1 = cljs.core.__destructure_map(inst_177021);
var inst_177023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_177022__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var inst_177024__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_177022__$1,new cljs.core.Keyword(null,"turn-order","turn-order",669259588));
var inst_177025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_177022__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var inst_177026 = teg_online.ai.scoring.calculate_scores(inst_177022__$1);
var inst_177027 = document.querySelector("#players-bar .row");
var inst_177028__$1 = cljs.core.count(inst_177024__$1);
var inst_177029 = (inst_177028__$1 > (4));
var state_177343__$1 = (function (){var statearr_177350 = state_177343;
(statearr_177350[(9)] = inst_177022__$1);

(statearr_177350[(12)] = inst_177023);

(statearr_177350[(10)] = inst_177024__$1);

(statearr_177350[(13)] = inst_177025);

(statearr_177350[(14)] = inst_177026);

(statearr_177350[(15)] = inst_177027);

(statearr_177350[(11)] = inst_177028__$1);

return statearr_177350;
})();
if(cljs.core.truth_(inst_177029)){
var statearr_177351_179322 = state_177343__$1;
(statearr_177351_179322[(1)] = (2));

} else {
var statearr_177352_179323 = state_177343__$1;
(statearr_177352_179323[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (24))){
var inst_177087 = (state_177343[(16)]);
var state_177343__$1 = state_177343;
var statearr_177353_179324 = state_177343__$1;
(statearr_177353_179324[(2)] = inst_177087);

(statearr_177353_179324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (39))){
var state_177343__$1 = state_177343;
var statearr_177354_179325 = state_177343__$1;
(statearr_177354_179325[(2)] = null);

(statearr_177354_179325[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (46))){
var inst_177249 = (state_177343[(17)]);
var inst_177217 = (state_177343[(18)]);
var inst_177248 = (state_177343[(19)]);
var inst_177247 = (state_177343[(20)]);
var inst_177241 = (state_177343[(21)]);
var inst_177240 = (state_177343[(22)]);
var inst_177228 = (state_177343[(23)]);
var inst_177022 = (state_177343[(9)]);
var inst_177216 = (state_177343[(24)]);
var inst_177218 = (state_177343[(25)]);
var inst_177239 = (state_177343[(26)]);
var inst_177229 = (state_177343[(27)]);
var inst_177027 = (state_177343[(15)]);
var inst_177202 = (state_177343[(28)]);
var inst_177258 = (state_177343[(2)]);
var inst_177259 = [inst_177258];
var inst_177260 = cljs.core.PersistentHashMap.fromArrays(inst_177249,inst_177259);
var inst_177261 = (inst_177217.cljs$core$IFn$_invoke$arity$1 ? inst_177217.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)) : inst_177217.call(null,new cljs.core.Keyword(null,"name","name",1843675177)));
var inst_177262 = [new cljs.core.Keyword(null,"span","span",1394872991),inst_177260,inst_177261];
var inst_177263 = (new cljs.core.PersistentVector(null,3,(5),inst_177248,inst_177262,null));
var inst_177264 = [new cljs.core.Keyword(null,"div.col-auto.text-truncate","div.col-auto.text-truncate",-2130444213),inst_177247,inst_177263];
var inst_177265 = (new cljs.core.PersistentVector(null,3,(5),inst_177241,inst_177264,null));
var inst_177266 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_177265];
var inst_177267 = (new cljs.core.PersistentVector(null,2,(5),inst_177240,inst_177266,null));
var inst_177268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177269 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177270 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177271 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_177272 = [inst_177228];
var inst_177273 = cljs.core.PersistentHashMap.fromArrays(inst_177271,inst_177272);
var inst_177274 = [new cljs.core.Keyword(null,"i.fas.fa-flag.me-1","i.fas.fa-flag.me-1",-2018429856),inst_177273];
var inst_177275 = (new cljs.core.PersistentVector(null,2,(5),inst_177270,inst_177274,null));
var inst_177276 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177277 = teg_online.game.player_countries(inst_177022,inst_177216);
var inst_177278 = cljs.core.count(inst_177277);
var inst_177279 = [new cljs.core.Keyword(null,"span","span",1394872991),inst_177278];
var inst_177280 = (new cljs.core.PersistentVector(null,2,(5),inst_177276,inst_177279,null));
var inst_177281 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_177275,inst_177280];
var inst_177282 = (new cljs.core.PersistentVector(null,3,(5),inst_177269,inst_177281,null));
var inst_177283 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177284 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177285 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_177286 = [inst_177228];
var inst_177287 = cljs.core.PersistentHashMap.fromArrays(inst_177285,inst_177286);
var inst_177288 = [new cljs.core.Keyword(null,"i.fas.fa-shield-alt.me-1","i.fas.fa-shield-alt.me-1",1426354795),inst_177287];
var inst_177289 = (new cljs.core.PersistentVector(null,2,(5),inst_177284,inst_177288,null));
var inst_177290 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177291 = teg_online.game.player_army_count(inst_177022,inst_177216);
var inst_177292 = [new cljs.core.Keyword(null,"span","span",1394872991),inst_177291];
var inst_177293 = (new cljs.core.PersistentVector(null,2,(5),inst_177290,inst_177292,null));
var inst_177294 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_177289,inst_177293];
var inst_177295 = (new cljs.core.PersistentVector(null,3,(5),inst_177283,inst_177294,null));
var inst_177296 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177297 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177298 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_177299 = [inst_177228];
var inst_177300 = cljs.core.PersistentHashMap.fromArrays(inst_177298,inst_177299);
var inst_177301 = [new cljs.core.Keyword(null,"i.far.fa-star.me-1","i.far.fa-star.me-1",-1891411502),inst_177300];
var inst_177302 = (new cljs.core.PersistentVector(null,2,(5),inst_177297,inst_177301,null));
var inst_177303 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177304 = new cljs.core.Keyword(null,"absolute","absolute",1655386478).cljs$core$IFn$_invoke$arity$1(inst_177218);
var inst_177305 = inst_177304.toFixed((2));
var inst_177306 = [new cljs.core.Keyword(null,"span","span",1394872991),inst_177305];
var inst_177307 = (new cljs.core.PersistentVector(null,2,(5),inst_177303,inst_177306,null));
var inst_177308 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_177302,inst_177307];
var inst_177309 = (new cljs.core.PersistentVector(null,3,(5),inst_177296,inst_177308,null));
var inst_177310 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177312 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_177313 = [inst_177228];
var inst_177314 = cljs.core.PersistentHashMap.fromArrays(inst_177312,inst_177313);
var inst_177315 = [new cljs.core.Keyword(null,"i.fas.fa-star.me-1","i.fas.fa-star.me-1",740450729),inst_177314];
var inst_177316 = (new cljs.core.PersistentVector(null,2,(5),inst_177311,inst_177315,null));
var inst_177317 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177318 = new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(inst_177218);
var inst_177319 = ((100) * inst_177318);
var inst_177320 = inst_177319.toFixed((2));
var inst_177321 = [new cljs.core.Keyword(null,"span","span",1394872991),inst_177320];
var inst_177322 = (new cljs.core.PersistentVector(null,2,(5),inst_177317,inst_177321,null));
var inst_177323 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_177316,inst_177322];
var inst_177324 = (new cljs.core.PersistentVector(null,3,(5),inst_177310,inst_177323,null));
var inst_177325 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_177282,inst_177295,inst_177309,inst_177324];
var inst_177326 = (new cljs.core.PersistentVector(null,5,(5),inst_177268,inst_177325,null));
var inst_177327 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_177239,inst_177267,inst_177326];
var inst_177328 = (new cljs.core.PersistentVector(null,4,(5),inst_177229,inst_177327,null));
var inst_177329 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_177328], 0));
var inst_177330 = inst_177027.appendChild(inst_177329);
var inst_177331 = cljs.core.next(inst_177202);
var inst_177071 = inst_177331;
var inst_177072 = null;
var inst_177073 = (0);
var inst_177074 = (0);
var state_177343__$1 = (function (){var statearr_177355 = state_177343;
(statearr_177355[(29)] = inst_177330);

(statearr_177355[(30)] = inst_177071);

(statearr_177355[(31)] = inst_177072);

(statearr_177355[(32)] = inst_177073);

(statearr_177355[(33)] = inst_177074);

return statearr_177355;
})();
var statearr_177356_179326 = state_177343__$1;
(statearr_177356_179326[(2)] = null);

(statearr_177356_179326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (4))){
var inst_177027 = (state_177343[(15)]);
var inst_177035 = (state_177343[(2)]);
var inst_177036 = ((12) / inst_177035);
var inst_177041 = oops.state._STAR_runtime_state_STAR_;
var inst_177042 = (new Error());
var inst_177043 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_177044 = oops.state.prepare_state(inst_177027,inst_177042,inst_177043);
var inst_177045 = (oops.state._STAR_runtime_state_STAR_ = inst_177044);
var state_177343__$1 = (function (){var statearr_177357 = state_177343;
(statearr_177357[(34)] = inst_177036);

(statearr_177357[(7)] = inst_177041);

(statearr_177357[(35)] = inst_177045);

return statearr_177357;
})();
var statearr_177358_179327 = state_177343__$1;
(statearr_177358_179327[(2)] = null);

(statearr_177358_179327[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (15))){
var inst_177071 = (state_177343[(30)]);
var inst_177202 = (state_177343[(28)]);
var inst_177202__$1 = cljs.core.seq(inst_177071);
var state_177343__$1 = (function (){var statearr_177359 = state_177343;
(statearr_177359[(28)] = inst_177202__$1);

return statearr_177359;
})();
if(inst_177202__$1){
var statearr_177360_179328 = state_177343__$1;
(statearr_177360_179328[(1)] = (29));

} else {
var statearr_177361_179329 = state_177343__$1;
(statearr_177361_179329[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (21))){
var state_177343__$1 = state_177343;
var statearr_177362_179330 = state_177343__$1;
(statearr_177362_179330[(2)] = null);

(statearr_177362_179330[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (31))){
var inst_177337 = (state_177343[(2)]);
var state_177343__$1 = state_177343;
var statearr_177363_179331 = state_177343__$1;
(statearr_177363_179331[(2)] = inst_177337);

(statearr_177363_179331[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (32))){
var inst_177202 = (state_177343[(28)]);
var inst_177206 = cljs.core.chunk_first(inst_177202);
var inst_177207 = cljs.core.chunk_rest(inst_177202);
var inst_177208 = cljs.core.count(inst_177206);
var inst_177071 = inst_177207;
var inst_177072 = inst_177206;
var inst_177073 = inst_177208;
var inst_177074 = (0);
var state_177343__$1 = (function (){var statearr_177364 = state_177343;
(statearr_177364[(30)] = inst_177071);

(statearr_177364[(31)] = inst_177072);

(statearr_177364[(32)] = inst_177073);

(statearr_177364[(33)] = inst_177074);

return statearr_177364;
})();
var statearr_177365_179332 = state_177343__$1;
(statearr_177365_179332[(2)] = null);

(statearr_177365_179332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (40))){
var inst_177036 = (state_177343[(34)]);
var inst_177230 = (state_177343[(36)]);
var inst_177228 = (state_177343[(23)]);
var inst_177219 = (state_177343[(37)]);
var inst_177236 = (state_177343[(2)]);
var inst_177237 = teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("col-sm-%1 player %2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_177036,inst_177236], 0));
var inst_177238 = [inst_177237];
var inst_177239 = cljs.core.PersistentHashMap.fromArrays(inst_177230,inst_177238);
var inst_177240 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177241 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177242 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177243 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_177244 = [inst_177228];
var inst_177245 = cljs.core.PersistentHashMap.fromArrays(inst_177243,inst_177244);
var inst_177246 = [new cljs.core.Keyword(null,"i.fas.fa-square.me-1","i.fas.fa-square.me-1",613446921),inst_177245];
var inst_177247 = (new cljs.core.PersistentVector(null,2,(5),inst_177242,inst_177246,null));
var inst_177248 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177249 = [new cljs.core.Keyword(null,"class","class",-2030961996)];
var state_177343__$1 = (function (){var statearr_177366 = state_177343;
(statearr_177366[(26)] = inst_177239);

(statearr_177366[(22)] = inst_177240);

(statearr_177366[(21)] = inst_177241);

(statearr_177366[(20)] = inst_177247);

(statearr_177366[(19)] = inst_177248);

(statearr_177366[(17)] = inst_177249);

return statearr_177366;
})();
if(cljs.core.truth_(inst_177219)){
var statearr_177367_179333 = state_177343__$1;
(statearr_177367_179333[(1)] = (41));

} else {
var statearr_177368_179334 = state_177343__$1;
(statearr_177368_179334[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (33))){
var inst_177202 = (state_177343[(28)]);
var inst_177023 = (state_177343[(12)]);
var inst_177216 = (state_177343[(24)]);
var inst_177026 = (state_177343[(14)]);
var inst_177022 = (state_177343[(9)]);
var inst_177217 = (state_177343[(18)]);
var inst_177220 = (state_177343[(38)]);
var inst_177214 = cljs.core.first(inst_177202);
var inst_177215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_177214,(0),null);
var inst_177216__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_177214,(1),null);
var inst_177217__$1 = (inst_177023.cljs$core$IFn$_invoke$arity$1 ? inst_177023.cljs$core$IFn$_invoke$arity$1(inst_177216__$1) : inst_177023.call(null,inst_177216__$1));
var inst_177218 = (inst_177026.cljs$core$IFn$_invoke$arity$1 ? inst_177026.cljs$core$IFn$_invoke$arity$1(inst_177216__$1) : inst_177026.call(null,inst_177216__$1));
var inst_177219 = teg_online.game.game_started_QMARK_(inst_177022);
var inst_177220__$1 = new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(inst_177217__$1);
var state_177343__$1 = (function (){var statearr_177369 = state_177343;
(statearr_177369[(39)] = inst_177215);

(statearr_177369[(24)] = inst_177216__$1);

(statearr_177369[(18)] = inst_177217__$1);

(statearr_177369[(25)] = inst_177218);

(statearr_177369[(37)] = inst_177219);

(statearr_177369[(38)] = inst_177220__$1);

return statearr_177369;
})();
if(cljs.core.truth_(inst_177220__$1)){
var statearr_177370_179335 = state_177343__$1;
(statearr_177370_179335[(1)] = (35));

} else {
var statearr_177371_179336 = state_177343__$1;
(statearr_177371_179336[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (13))){
var inst_177341 = (state_177343[(2)]);
var state_177343__$1 = state_177343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_177343__$1,inst_177341);
} else {
if((state_val_177344 === (22))){
var inst_177036 = (state_177343[(34)]);
var inst_177098 = (state_177343[(40)]);
var inst_177096 = (state_177343[(41)]);
var inst_177087 = (state_177343[(16)]);
var inst_177104 = (state_177343[(2)]);
var inst_177105 = teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("col-sm-%1 player %2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_177036,inst_177104], 0));
var inst_177106 = [inst_177105];
var inst_177107 = cljs.core.PersistentHashMap.fromArrays(inst_177098,inst_177106);
var inst_177108 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177110 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177111 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_177112 = [inst_177096];
var inst_177113 = cljs.core.PersistentHashMap.fromArrays(inst_177111,inst_177112);
var inst_177114 = [new cljs.core.Keyword(null,"i.fas.fa-square.me-1","i.fas.fa-square.me-1",613446921),inst_177113];
var inst_177115 = (new cljs.core.PersistentVector(null,2,(5),inst_177110,inst_177114,null));
var inst_177116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177117 = [new cljs.core.Keyword(null,"class","class",-2030961996)];
var state_177343__$1 = (function (){var statearr_177372 = state_177343;
(statearr_177372[(42)] = inst_177107);

(statearr_177372[(43)] = inst_177108);

(statearr_177372[(44)] = inst_177109);

(statearr_177372[(45)] = inst_177115);

(statearr_177372[(46)] = inst_177116);

(statearr_177372[(47)] = inst_177117);

return statearr_177372;
})();
if(cljs.core.truth_(inst_177087)){
var statearr_177373_179337 = state_177343__$1;
(statearr_177373_179337[(1)] = (23));

} else {
var statearr_177374_179338 = state_177343__$1;
(statearr_177374_179338[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (36))){
var inst_177220 = (state_177343[(38)]);
var state_177343__$1 = state_177343;
var statearr_177375_179339 = state_177343__$1;
(statearr_177375_179339[(2)] = inst_177220);

(statearr_177375_179339[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (41))){
var inst_177226 = (state_177343[(48)]);
var inst_177251 = cljs.core.not(inst_177226);
var state_177343__$1 = state_177343;
var statearr_177376_179340 = state_177343__$1;
(statearr_177376_179340[(2)] = inst_177251);

(statearr_177376_179340[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (43))){
var inst_177254 = (state_177343[(2)]);
var state_177343__$1 = state_177343;
if(cljs.core.truth_(inst_177254)){
var statearr_177377_179341 = state_177343__$1;
(statearr_177377_179341[(1)] = (44));

} else {
var statearr_177378_179342 = state_177343__$1;
(statearr_177378_179342[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (29))){
var inst_177202 = (state_177343[(28)]);
var inst_177204 = cljs.core.chunked_seq_QMARK_(inst_177202);
var state_177343__$1 = state_177343;
if(inst_177204){
var statearr_177379_179343 = state_177343__$1;
(statearr_177379_179343[(1)] = (32));

} else {
var statearr_177380_179344 = state_177343__$1;
(statearr_177380_179344[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (44))){
var state_177343__$1 = state_177343;
var statearr_177384_179345 = state_177343__$1;
(statearr_177384_179345[(2)] = "text-decoration-line-through");

(statearr_177384_179345[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (6))){
var inst_177024 = (state_177343[(10)]);
var inst_177064 = (state_177343[(2)]);
var inst_177069 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,inst_177024);
var inst_177070 = cljs.core.seq(inst_177069);
var inst_177071 = inst_177070;
var inst_177072 = null;
var inst_177073 = (0);
var inst_177074 = (0);
var state_177343__$1 = (function (){var statearr_177385 = state_177343;
(statearr_177385[(49)] = inst_177064);

(statearr_177385[(30)] = inst_177071);

(statearr_177385[(31)] = inst_177072);

(statearr_177385[(32)] = inst_177073);

(statearr_177385[(33)] = inst_177074);

return statearr_177385;
})();
var statearr_177386_179346 = state_177343__$1;
(statearr_177386_179346[(2)] = null);

(statearr_177386_179346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (28))){
var inst_177117 = (state_177343[(47)]);
var inst_177085 = (state_177343[(50)]);
var inst_177116 = (state_177343[(46)]);
var inst_177115 = (state_177343[(45)]);
var inst_177109 = (state_177343[(44)]);
var inst_177108 = (state_177343[(43)]);
var inst_177096 = (state_177343[(41)]);
var inst_177022 = (state_177343[(9)]);
var inst_177084 = (state_177343[(51)]);
var inst_177086 = (state_177343[(52)]);
var inst_177107 = (state_177343[(42)]);
var inst_177097 = (state_177343[(53)]);
var inst_177027 = (state_177343[(15)]);
var inst_177074 = (state_177343[(33)]);
var inst_177071 = (state_177343[(30)]);
var inst_177072 = (state_177343[(31)]);
var inst_177073 = (state_177343[(32)]);
var inst_177126 = (state_177343[(2)]);
var inst_177127 = [inst_177126];
var inst_177128 = cljs.core.PersistentHashMap.fromArrays(inst_177117,inst_177127);
var inst_177129 = (inst_177085.cljs$core$IFn$_invoke$arity$1 ? inst_177085.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)) : inst_177085.call(null,new cljs.core.Keyword(null,"name","name",1843675177)));
var inst_177130 = [new cljs.core.Keyword(null,"span","span",1394872991),inst_177128,inst_177129];
var inst_177131 = (new cljs.core.PersistentVector(null,3,(5),inst_177116,inst_177130,null));
var inst_177132 = [new cljs.core.Keyword(null,"div.col-auto.text-truncate","div.col-auto.text-truncate",-2130444213),inst_177115,inst_177131];
var inst_177133 = (new cljs.core.PersistentVector(null,3,(5),inst_177109,inst_177132,null));
var inst_177134 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_177133];
var inst_177135 = (new cljs.core.PersistentVector(null,2,(5),inst_177108,inst_177134,null));
var inst_177136 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177139 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_177140 = [inst_177096];
var inst_177141 = cljs.core.PersistentHashMap.fromArrays(inst_177139,inst_177140);
var inst_177142 = [new cljs.core.Keyword(null,"i.fas.fa-flag.me-1","i.fas.fa-flag.me-1",-2018429856),inst_177141];
var inst_177143 = (new cljs.core.PersistentVector(null,2,(5),inst_177138,inst_177142,null));
var inst_177144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177145 = teg_online.game.player_countries(inst_177022,inst_177084);
var inst_177146 = cljs.core.count(inst_177145);
var inst_177147 = [new cljs.core.Keyword(null,"span","span",1394872991),inst_177146];
var inst_177148 = (new cljs.core.PersistentVector(null,2,(5),inst_177144,inst_177147,null));
var inst_177149 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_177143,inst_177148];
var inst_177150 = (new cljs.core.PersistentVector(null,3,(5),inst_177137,inst_177149,null));
var inst_177151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177153 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_177154 = [inst_177096];
var inst_177155 = cljs.core.PersistentHashMap.fromArrays(inst_177153,inst_177154);
var inst_177156 = [new cljs.core.Keyword(null,"i.fas.fa-shield-alt.me-1","i.fas.fa-shield-alt.me-1",1426354795),inst_177155];
var inst_177157 = (new cljs.core.PersistentVector(null,2,(5),inst_177152,inst_177156,null));
var inst_177158 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177159 = teg_online.game.player_army_count(inst_177022,inst_177084);
var inst_177160 = [new cljs.core.Keyword(null,"span","span",1394872991),inst_177159];
var inst_177161 = (new cljs.core.PersistentVector(null,2,(5),inst_177158,inst_177160,null));
var inst_177162 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_177157,inst_177161];
var inst_177163 = (new cljs.core.PersistentVector(null,3,(5),inst_177151,inst_177162,null));
var inst_177164 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177165 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177166 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_177167 = [inst_177096];
var inst_177168 = cljs.core.PersistentHashMap.fromArrays(inst_177166,inst_177167);
var inst_177169 = [new cljs.core.Keyword(null,"i.far.fa-star.me-1","i.far.fa-star.me-1",-1891411502),inst_177168];
var inst_177170 = (new cljs.core.PersistentVector(null,2,(5),inst_177165,inst_177169,null));
var inst_177171 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177172 = new cljs.core.Keyword(null,"absolute","absolute",1655386478).cljs$core$IFn$_invoke$arity$1(inst_177086);
var inst_177173 = inst_177172.toFixed((2));
var inst_177174 = [new cljs.core.Keyword(null,"span","span",1394872991),inst_177173];
var inst_177175 = (new cljs.core.PersistentVector(null,2,(5),inst_177171,inst_177174,null));
var inst_177176 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_177170,inst_177175];
var inst_177177 = (new cljs.core.PersistentVector(null,3,(5),inst_177164,inst_177176,null));
var inst_177178 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177179 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177180 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_177181 = [inst_177096];
var inst_177182 = cljs.core.PersistentHashMap.fromArrays(inst_177180,inst_177181);
var inst_177183 = [new cljs.core.Keyword(null,"i.fas.fa-star.me-1","i.fas.fa-star.me-1",740450729),inst_177182];
var inst_177184 = (new cljs.core.PersistentVector(null,2,(5),inst_177179,inst_177183,null));
var inst_177185 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177186 = new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(inst_177086);
var inst_177187 = ((100) * inst_177186);
var inst_177188 = inst_177187.toFixed((2));
var inst_177189 = [new cljs.core.Keyword(null,"span","span",1394872991),inst_177188];
var inst_177190 = (new cljs.core.PersistentVector(null,2,(5),inst_177185,inst_177189,null));
var inst_177191 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_177184,inst_177190];
var inst_177192 = (new cljs.core.PersistentVector(null,3,(5),inst_177178,inst_177191,null));
var inst_177193 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_177150,inst_177163,inst_177177,inst_177192];
var inst_177194 = (new cljs.core.PersistentVector(null,5,(5),inst_177136,inst_177193,null));
var inst_177195 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_177107,inst_177135,inst_177194];
var inst_177196 = (new cljs.core.PersistentVector(null,4,(5),inst_177097,inst_177195,null));
var inst_177197 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_177196], 0));
var inst_177198 = inst_177027.appendChild(inst_177197);
var inst_177199 = (inst_177074 + (1));
var tmp177381 = inst_177071;
var tmp177382 = inst_177073;
var tmp177383 = inst_177072;
var inst_177071__$1 = tmp177381;
var inst_177072__$1 = tmp177383;
var inst_177073__$1 = tmp177382;
var inst_177074__$1 = inst_177199;
var state_177343__$1 = (function (){var statearr_177387 = state_177343;
(statearr_177387[(54)] = inst_177198);

(statearr_177387[(30)] = inst_177071__$1);

(statearr_177387[(31)] = inst_177072__$1);

(statearr_177387[(32)] = inst_177073__$1);

(statearr_177387[(33)] = inst_177074__$1);

return statearr_177387;
})();
var statearr_177388_179347 = state_177343__$1;
(statearr_177388_179347[(2)] = null);

(statearr_177388_179347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (25))){
var inst_177122 = (state_177343[(2)]);
var state_177343__$1 = state_177343;
if(cljs.core.truth_(inst_177122)){
var statearr_177389_179348 = state_177343__$1;
(statearr_177389_179348[(1)] = (26));

} else {
var statearr_177390_179349 = state_177343__$1;
(statearr_177390_179349[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (34))){
var inst_177334 = (state_177343[(2)]);
var state_177343__$1 = state_177343;
var statearr_177391_179350 = state_177343__$1;
(statearr_177391_179350[(2)] = inst_177334);

(statearr_177391_179350[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (17))){
var inst_177022 = (state_177343[(9)]);
var inst_177084 = (state_177343[(51)]);
var inst_177090 = teg_online.game.player_countries(inst_177022,inst_177084);
var inst_177091 = cljs.core.seq(inst_177090);
var state_177343__$1 = state_177343;
var statearr_177392_179351 = state_177343__$1;
(statearr_177392_179351[(2)] = inst_177091);

(statearr_177392_179351[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (3))){
var inst_177028 = (state_177343[(11)]);
var state_177343__$1 = state_177343;
var statearr_177393_179352 = state_177343__$1;
(statearr_177393_179352[(2)] = inst_177028);

(statearr_177393_179352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (12))){
var inst_177074 = (state_177343[(33)]);
var inst_177073 = (state_177343[(32)]);
var inst_177076 = (inst_177074 < inst_177073);
var inst_177077 = inst_177076;
var state_177343__$1 = state_177343;
if(cljs.core.truth_(inst_177077)){
var statearr_177394_179353 = state_177343__$1;
(statearr_177394_179353[(1)] = (14));

} else {
var statearr_177395_179354 = state_177343__$1;
(statearr_177395_179354[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (2))){
var inst_177028 = (state_177343[(11)]);
var inst_177031 = (inst_177028 / (2));
var inst_177032 = Math.ceil(inst_177031);
var state_177343__$1 = state_177343;
var statearr_177396_179355 = state_177343__$1;
(statearr_177396_179355[(2)] = inst_177032);

(statearr_177396_179355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (23))){
var inst_177094 = (state_177343[(55)]);
var inst_177119 = cljs.core.not(inst_177094);
var state_177343__$1 = state_177343;
var statearr_177397_179356 = state_177343__$1;
(statearr_177397_179356[(2)] = inst_177119);

(statearr_177397_179356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (35))){
var inst_177022 = (state_177343[(9)]);
var inst_177216 = (state_177343[(24)]);
var inst_177222 = teg_online.game.player_countries(inst_177022,inst_177216);
var inst_177223 = cljs.core.seq(inst_177222);
var state_177343__$1 = state_177343;
var statearr_177398_179357 = state_177343__$1;
(statearr_177398_179357[(2)] = inst_177223);

(statearr_177398_179357[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (19))){
var inst_177083 = (state_177343[(56)]);
var inst_177025 = (state_177343[(13)]);
var inst_177028 = (state_177343[(11)]);
var inst_177094 = (state_177343[(2)]);
var inst_177095 = (teg_online.ui_constants.player_colors.cljs$core$IFn$_invoke$arity$1 ? teg_online.ui_constants.player_colors.cljs$core$IFn$_invoke$arity$1(inst_177083) : teg_online.ui_constants.player_colors.call(null,inst_177083));
var inst_177096 = teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("color: %1;",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_177095], 0));
var inst_177097 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177098 = [new cljs.core.Keyword(null,"class","class",-2030961996)];
var inst_177099 = cljs.core.mod(inst_177025,inst_177028);
var inst_177100 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_177083,inst_177099);
var state_177343__$1 = (function (){var statearr_177399 = state_177343;
(statearr_177399[(55)] = inst_177094);

(statearr_177399[(41)] = inst_177096);

(statearr_177399[(53)] = inst_177097);

(statearr_177399[(40)] = inst_177098);

return statearr_177399;
})();
if(inst_177100){
var statearr_177400_179358 = state_177343__$1;
(statearr_177400_179358[(1)] = (20));

} else {
var statearr_177401_179359 = state_177343__$1;
(statearr_177401_179359[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (11))){
var inst_177027 = (state_177343[(15)]);
var inst_177061 = (state_177343[(2)]);
var _ = (function (){var statearr_177402 = state_177343;
(statearr_177402[(4)] = cljs.core.rest((state_177343[(4)])));

return statearr_177402;
})();
var state_177343__$1 = (function (){var statearr_177403 = state_177343;
(statearr_177403[(57)] = inst_177061);

return statearr_177403;
})();
var statearr_177404_179360 = state_177343__$1;
(statearr_177404_179360[(2)] = inst_177027);

(statearr_177404_179360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (9))){
var inst_177027 = (state_177343[(15)]);
var inst_177058 = (inst_177027["innerHTML"] = "");
var state_177343__$1 = state_177343;
var statearr_177405_179361 = state_177343__$1;
(statearr_177405_179361[(2)] = inst_177058);

(statearr_177405_179361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (5))){
var inst_177027 = (state_177343[(15)]);
var _ = (function (){var statearr_177406 = state_177343;
(statearr_177406[(4)] = cljs.core.cons((7),(state_177343[(4)])));

return statearr_177406;
})();
var ___$1 = (function (){var statearr_177407 = state_177343;
(statearr_177407[(4)] = cljs.core.cons((8),(state_177343[(4)])));

return statearr_177407;
})();
var inst_177056 = oops.core.validate_object_access_dynamically(inst_177027,(0),"innerHTML",true,true,true);
var state_177343__$1 = state_177343;
if(inst_177056){
var statearr_177408_179362 = state_177343__$1;
(statearr_177408_179362[(1)] = (9));

} else {
var statearr_177409_179363 = state_177343__$1;
(statearr_177409_179363[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (14))){
var inst_177072 = (state_177343[(31)]);
var inst_177074 = (state_177343[(33)]);
var inst_177023 = (state_177343[(12)]);
var inst_177084 = (state_177343[(51)]);
var inst_177026 = (state_177343[(14)]);
var inst_177022 = (state_177343[(9)]);
var inst_177085 = (state_177343[(50)]);
var inst_177088 = (state_177343[(58)]);
var inst_177082 = cljs.core._nth(inst_177072,inst_177074);
var inst_177083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_177082,(0),null);
var inst_177084__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_177082,(1),null);
var inst_177085__$1 = (inst_177023.cljs$core$IFn$_invoke$arity$1 ? inst_177023.cljs$core$IFn$_invoke$arity$1(inst_177084__$1) : inst_177023.call(null,inst_177084__$1));
var inst_177086 = (inst_177026.cljs$core$IFn$_invoke$arity$1 ? inst_177026.cljs$core$IFn$_invoke$arity$1(inst_177084__$1) : inst_177026.call(null,inst_177084__$1));
var inst_177087 = teg_online.game.game_started_QMARK_(inst_177022);
var inst_177088__$1 = new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(inst_177085__$1);
var state_177343__$1 = (function (){var statearr_177410 = state_177343;
(statearr_177410[(56)] = inst_177083);

(statearr_177410[(51)] = inst_177084__$1);

(statearr_177410[(50)] = inst_177085__$1);

(statearr_177410[(52)] = inst_177086);

(statearr_177410[(16)] = inst_177087);

(statearr_177410[(58)] = inst_177088__$1);

return statearr_177410;
})();
if(cljs.core.truth_(inst_177088__$1)){
var statearr_177411_179364 = state_177343__$1;
(statearr_177411_179364[(1)] = (17));

} else {
var statearr_177412_179365 = state_177343__$1;
(statearr_177412_179365[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (45))){
var state_177343__$1 = state_177343;
var statearr_177413_179366 = state_177343__$1;
(statearr_177413_179366[(2)] = null);

(statearr_177413_179366[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (26))){
var state_177343__$1 = state_177343;
var statearr_177414_179367 = state_177343__$1;
(statearr_177414_179367[(2)] = "text-decoration-line-through");

(statearr_177414_179367[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (16))){
var inst_177339 = (state_177343[(2)]);
var state_177343__$1 = state_177343;
var statearr_177415_179368 = state_177343__$1;
(statearr_177415_179368[(2)] = inst_177339);

(statearr_177415_179368[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (38))){
var state_177343__$1 = state_177343;
var statearr_177416_179369 = state_177343__$1;
(statearr_177416_179369[(2)] = "player-turn");

(statearr_177416_179369[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (30))){
var state_177343__$1 = state_177343;
var statearr_177417_179370 = state_177343__$1;
(statearr_177417_179370[(2)] = null);

(statearr_177417_179370[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (10))){
var state_177343__$1 = state_177343;
var statearr_177418_179371 = state_177343__$1;
(statearr_177418_179371[(2)] = null);

(statearr_177418_179371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (18))){
var inst_177088 = (state_177343[(58)]);
var state_177343__$1 = state_177343;
var statearr_177419_179372 = state_177343__$1;
(statearr_177419_179372[(2)] = inst_177088);

(statearr_177419_179372[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (42))){
var inst_177219 = (state_177343[(37)]);
var state_177343__$1 = state_177343;
var statearr_177421_179373 = state_177343__$1;
(statearr_177421_179373[(2)] = inst_177219);

(statearr_177421_179373[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (37))){
var inst_177215 = (state_177343[(39)]);
var inst_177025 = (state_177343[(13)]);
var inst_177028 = (state_177343[(11)]);
var inst_177226 = (state_177343[(2)]);
var inst_177227 = (teg_online.ui_constants.player_colors.cljs$core$IFn$_invoke$arity$1 ? teg_online.ui_constants.player_colors.cljs$core$IFn$_invoke$arity$1(inst_177215) : teg_online.ui_constants.player_colors.call(null,inst_177215));
var inst_177228 = teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("color: %1;",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_177227], 0));
var inst_177229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177230 = [new cljs.core.Keyword(null,"class","class",-2030961996)];
var inst_177231 = cljs.core.mod(inst_177025,inst_177028);
var inst_177232 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_177215,inst_177231);
var state_177343__$1 = (function (){var statearr_177422 = state_177343;
(statearr_177422[(48)] = inst_177226);

(statearr_177422[(23)] = inst_177228);

(statearr_177422[(27)] = inst_177229);

(statearr_177422[(36)] = inst_177230);

return statearr_177422;
})();
if(inst_177232){
var statearr_177423_179374 = state_177343__$1;
(statearr_177423_179374[(1)] = (38));

} else {
var statearr_177424_179375 = state_177343__$1;
(statearr_177424_179375[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177344 === (8))){
var _ = (function (){var statearr_177425 = state_177343;
(statearr_177425[(4)] = cljs.core.rest((state_177343[(4)])));

return statearr_177425;
})();
var state_177343__$1 = state_177343;
var ex177420 = (state_177343__$1[(2)]);
var statearr_177426_179376 = state_177343__$1;
(statearr_177426_179376[(5)] = ex177420);


throw ex177420;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$update_players_$_state_machine__18069__auto__ = null;
var teg_online$ui$update_players_$_state_machine__18069__auto____0 = (function (){
var statearr_177427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_177427[(0)] = teg_online$ui$update_players_$_state_machine__18069__auto__);

(statearr_177427[(1)] = (1));

return statearr_177427;
});
var teg_online$ui$update_players_$_state_machine__18069__auto____1 = (function (state_177343){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_177343);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e177428){var ex__18072__auto__ = e177428;
var statearr_177429_179377 = state_177343;
(statearr_177429_179377[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_177343[(4)]))){
var statearr_177430_179378 = state_177343;
(statearr_177430_179378[(1)] = cljs.core.first((state_177343[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179379 = state_177343;
state_177343 = G__179379;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$update_players_$_state_machine__18069__auto__ = function(state_177343){
switch(arguments.length){
case 0:
return teg_online$ui$update_players_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$update_players_$_state_machine__18069__auto____1.call(this,state_177343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$update_players_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$update_players_$_state_machine__18069__auto____0;
teg_online$ui$update_players_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$update_players_$_state_machine__18069__auto____1;
return teg_online$ui$update_players_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_177431 = f__19294__auto__();
(statearr_177431[(6)] = c__19293__auto__);

return statearr_177431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.exchange_button_visible_QMARK_ = (function teg_online$ui$exchange_button_visible_QMARK_(user,game){
return ((teg_online.ui.is_my_turn_QMARK_(user,game)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game))));
});
if((typeof teg_online !== 'undefined') && (typeof teg_online.ui !== 'undefined') && (typeof teg_online.ui.finish_turn_enabled_QMARK_ !== 'undefined')){
} else {
teg_online.ui.finish_turn_enabled_QMARK_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__177432 = cljs.core.get_global_hierarchy;
return (fexpr__177432.cljs$core$IFn$_invoke$arity$0 ? fexpr__177432.cljs$core$IFn$_invoke$arity$0() : fexpr__177432.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("teg-online.ui","finish-turn-enabled?"),(function (state){
return new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
teg_online.ui.finish_turn_enabled_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),(function (state){
return ((teg_online.ui.is_my_turn_QMARK_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"remaining","remaining",-138926777)], null),(0)))));
}));
teg_online.ui.finish_turn_enabled_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state){
return teg_online.ui.is_my_turn_QMARK_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
}));
if((typeof teg_online !== 'undefined') && (typeof teg_online.ui !== 'undefined') && (typeof teg_online.ui.status_panel_title !== 'undefined')){
} else {
teg_online.ui.status_panel_title = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__177433 = cljs.core.get_global_hierarchy;
return (fexpr__177433.cljs$core$IFn$_invoke$arity$0 ? fexpr__177433.cljs$core$IFn$_invoke$arity$0() : fexpr__177433.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("teg-online.ui","status-panel-title"),(function (state){
return new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
teg_online.ui.status_panel_title.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),(function (state){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var remaining = ((teg_online.ui.is_my_turn_QMARK_(user,game))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"remaining","remaining",-138926777)], null),(0)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),new cljs.core.Keyword(null,"extra-army","extra-army",-1408930582)], null),(0)));
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Incorporando ej\u00E9rcitos "], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-nowrap","span.text-nowrap",-636921013),teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("(%1 %2)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([remaining,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),remaining))?"restante":"restantes")], 0))], null),null,(1),null)),(2),null));
}));
teg_online.ui.status_panel_title.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-continent","teg-online.game/add-army-continent",-1282273691),(function (state){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var remaining = ((teg_online.ui.is_my_turn_QMARK_(user,game))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"remaining","remaining",-138926777)], null),(0)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),new cljs.core.Keyword(null,"extra-army","extra-army",-1408930582)], null),(0)));
var continent = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"continent","continent",615455043)], null));
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Incorporando ej\u00E9rcitos en "], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fw-bolder.text-nowrap","span.fw-bolder.text-nowrap",1838451643),teg_online.board.get_continent_name(continent)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," "], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-nowrap","span.text-nowrap",-636921013),teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("(%1 %2)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([remaining,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),remaining))?"restante":"restantes")], 0))], null),null,(1),null)),(2),null)),(3),null)),(4),null));
}));
teg_online.ui.status_panel_title.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630),(function (_){
return "Atacando...";
}));
teg_online.ui.status_panel_title.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","regroup","teg-online.game/regroup",1546790374),(function (_){
return "Reagrupando...";
}));
if((typeof teg_online !== 'undefined') && (typeof teg_online.ui !== 'undefined') && (typeof teg_online.ui.finish_btn_label !== 'undefined')){
} else {
teg_online.ui.finish_btn_label = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__177434 = cljs.core.get_global_hierarchy;
return (fexpr__177434.cljs$core$IFn$_invoke$arity$0 ? fexpr__177434.cljs$core$IFn$_invoke$arity$0() : fexpr__177434.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("teg-online.ui","finish-btn-label"),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
teg_online.ui.finish_btn_label.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),(function (_){
return "Confirmar";
}));
teg_online.ui.finish_btn_label.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630),(function (_){
return "Reagrupar";
}));
teg_online.ui.finish_btn_label.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","regroup","teg-online.game/regroup",1546790374),(function (_){
return "Finalizar turno";
}));
teg_online.ui.exchange_cards_BANG_ = (function teg_online$ui$exchange_cards_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___179380 = arguments.length;
var i__5898__auto___179381 = (0);
while(true){
if((i__5898__auto___179381 < len__5897__auto___179380)){
args__5903__auto__.push((arguments[i__5898__auto___179381]));

var G__179382 = (i__5898__auto___179381 + (1));
i__5898__auto___179381 = G__179382;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return teg_online.ui.exchange_cards_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(teg_online.ui.exchange_cards_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__177438){
var map__177439 = p__177438;
var map__177439__$1 = cljs.core.__destructure_map(map__177439);
var forced_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__177439__$1,new cljs.core.Keyword(null,"forced?","forced?",714800861),false);
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_177453){
var state_val_177454 = (state_177453[(1)]);
if((state_val_177454 === (1))){
var inst_177440 = teg_online.ui.show_exchange_dialog(state,forced_QMARK_);
var state_177453__$1 = state_177453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_177453__$1,(2),inst_177440);
} else {
if((state_val_177454 === (2))){
var inst_177442 = (state_177453[(7)]);
var inst_177442__$1 = (state_177453[(2)]);
var state_177453__$1 = (function (){var statearr_177455 = state_177453;
(statearr_177455[(7)] = inst_177442__$1);

return statearr_177455;
})();
if(cljs.core.truth_(inst_177442__$1)){
var statearr_177456_179383 = state_177453__$1;
(statearr_177456_179383[(1)] = (3));

} else {
var statearr_177457_179384 = state_177453__$1;
(statearr_177457_179384[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177454 === (3))){
var inst_177442 = (state_177453[(7)]);
var inst_177444 = cljs.core.deref(state);
var inst_177445 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_177444);
var inst_177446 = teg_online.game.get_exchange_bonus.cljs$core$IFn$_invoke$arity$1(inst_177445);
var inst_177447 = (function (){var temp__5825__auto__ = inst_177442;
var countries = inst_177442;
var game = inst_177445;
var exchange_bonus = inst_177446;
return (function (p1__177435_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__177435_SHARP_,new cljs.core.Keyword(null,"game","game",-441523833),teg_online.game.exchange_cards,cljs.core.seq(countries)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"remaining","remaining",-138926777)], null),cljs.core._PLUS_,exchange_bonus);
});
})();
var inst_177448 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,inst_177447);
var state_177453__$1 = state_177453;
var statearr_177458_179385 = state_177453__$1;
(statearr_177458_179385[(2)] = inst_177448);

(statearr_177458_179385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177454 === (4))){
var state_177453__$1 = state_177453;
var statearr_177459_179386 = state_177453__$1;
(statearr_177459_179386[(2)] = null);

(statearr_177459_179386[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177454 === (5))){
var inst_177451 = (state_177453[(2)]);
var state_177453__$1 = state_177453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_177453__$1,inst_177451);
} else {
return null;
}
}
}
}
}
});
return (function() {
var teg_online$ui$state_machine__18069__auto__ = null;
var teg_online$ui$state_machine__18069__auto____0 = (function (){
var statearr_177460 = [null,null,null,null,null,null,null,null];
(statearr_177460[(0)] = teg_online$ui$state_machine__18069__auto__);

(statearr_177460[(1)] = (1));

return statearr_177460;
});
var teg_online$ui$state_machine__18069__auto____1 = (function (state_177453){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_177453);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e177461){var ex__18072__auto__ = e177461;
var statearr_177462_179387 = state_177453;
(statearr_177462_179387[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_177453[(4)]))){
var statearr_177463_179388 = state_177453;
(statearr_177463_179388[(1)] = cljs.core.first((state_177453[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179389 = state_177453;
state_177453 = G__179389;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$state_machine__18069__auto__ = function(state_177453){
switch(arguments.length){
case 0:
return teg_online$ui$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$state_machine__18069__auto____1.call(this,state_177453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$state_machine__18069__auto____0;
teg_online$ui$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$state_machine__18069__auto____1;
return teg_online$ui$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_177464 = f__19294__auto__();
(statearr_177464[(6)] = c__19293__auto__);

return statearr_177464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
}));

(teg_online.ui.exchange_cards_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(teg_online.ui.exchange_cards_BANG_.cljs$lang$applyTo = (function (seq177436){
var G__177437 = cljs.core.first(seq177436);
var seq177436__$1 = cljs.core.next(seq177436);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__177437,seq177436__$1);
}));

teg_online.ui.update_status_panel = (function teg_online$ui$update_status_panel(state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_177684){
var state_val_177685 = (state_177684[(1)]);
if((state_val_177685 === (7))){
var state_177684__$1 = state_177684;
var statearr_177686_179390 = state_177684__$1;
(statearr_177686_179390[(2)] = null);

(statearr_177686_179390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (20))){
var inst_177564 = (state_177684[(2)]);
var inst_177565 = inst_177564.remove("player-turn");
var state_177684__$1 = state_177684;
var statearr_177687_179391 = state_177684__$1;
(statearr_177687_179391[(2)] = inst_177565);

(statearr_177687_179391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (27))){
var state_177684__$1 = state_177684;
var statearr_177688_179392 = state_177684__$1;
(statearr_177688_179392[(2)] = null);

(statearr_177688_179392[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (1))){
var inst_177468 = (state_177684[(7)]);
var inst_177472 = (state_177684[(8)]);
var inst_177466 = cljs.core.deref(state);
var inst_177467 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_177466);
var inst_177468__$1 = cljs.core.__destructure_map(inst_177467);
var inst_177469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_177468__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var inst_177470 = cljs.core.deref(state);
var inst_177471 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_177470);
var inst_177472__$1 = document.querySelector("#status-bar");
var inst_177473 = cljs.core.deref(state);
var inst_177474 = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(inst_177473);
var inst_177475 = new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692).cljs$core$IFn$_invoke$arity$1(inst_177474);
var inst_177476 = (inst_177475 == null);
var inst_177481 = oops.state._STAR_runtime_state_STAR_;
var inst_177482 = (new Error());
var inst_177483 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_177484 = oops.state.prepare_state(inst_177472__$1,inst_177482,inst_177483);
var inst_177485 = (oops.state._STAR_runtime_state_STAR_ = inst_177484);
var state_177684__$1 = (function (){var statearr_177689 = state_177684;
(statearr_177689[(7)] = inst_177468__$1);

(statearr_177689[(9)] = inst_177469);

(statearr_177689[(10)] = inst_177471);

(statearr_177689[(8)] = inst_177472__$1);

(statearr_177689[(11)] = inst_177476);

(statearr_177689[(12)] = inst_177481);

(statearr_177689[(13)] = inst_177485);

return statearr_177689;
})();
var statearr_177690_179393 = state_177684__$1;
(statearr_177690_179393[(2)] = null);

(statearr_177690_179393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (24))){
var state_177684__$1 = state_177684;
var statearr_177691_179394 = state_177684__$1;
(statearr_177691_179394[(2)] = null);

(statearr_177691_179394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (39))){
var state_177684__$1 = state_177684;
var statearr_177692_179395 = state_177684__$1;
(statearr_177692_179395[(2)] = null);

(statearr_177692_179395[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (46))){
var inst_177679 = (state_177684[(2)]);
var state_177684__$1 = state_177684;
var statearr_177694_179396 = state_177684__$1;
(statearr_177694_179396[(2)] = inst_177679);

(statearr_177694_179396[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (4))){
var inst_177481 = (state_177684[(12)]);
var _ = (function (){var statearr_177695 = state_177684;
(statearr_177695[(4)] = cljs.core.rest((state_177684[(4)])));

return statearr_177695;
})();
var inst_177487 = (state_177684[(2)]);
var inst_177488 = (oops.state._STAR_runtime_state_STAR_ = inst_177481);
var ___$1 = (function (){var temp__5825__auto__ = (state_177684[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_177684__$1 = (function (){var statearr_177696 = state_177684;
(statearr_177696[(14)] = inst_177488);

return statearr_177696;
})();
var statearr_177697_179397 = state_177684__$1;
(statearr_177697_179397[(2)] = inst_177487);

(statearr_177697_179397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (15))){
var _ = (function (){var statearr_177699 = state_177684;
(statearr_177699[(4)] = cljs.core.rest((state_177684[(4)])));

return statearr_177699;
})();
var state_177684__$1 = state_177684;
var ex177693 = (state_177684__$1[(2)]);
var statearr_177700_179398 = state_177684__$1;
(statearr_177700_179398[(5)] = ex177693);


throw ex177693;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (48))){
var inst_177676 = (state_177684[(2)]);
var state_177684__$1 = state_177684;
var statearr_177701_179399 = state_177684__$1;
(statearr_177701_179399[(2)] = inst_177676);

(statearr_177701_179399[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (50))){
var _ = (function (){var statearr_177702 = state_177684;
(statearr_177702[(4)] = cljs.core.rest((state_177684[(4)])));

return statearr_177702;
})();
var state_177684__$1 = state_177684;
var ex177698 = (state_177684__$1[(2)]);
var statearr_177703_179400 = state_177684__$1;
(statearr_177703_179400[(5)] = ex177698);


throw ex177698;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (21))){
var inst_177541 = (state_177684[(15)]);
var _ = (function (){var statearr_177704 = state_177684;
(statearr_177704[(4)] = cljs.core.rest((state_177684[(4)])));

return statearr_177704;
})();
var inst_177547 = (state_177684[(2)]);
var inst_177548 = (oops.state._STAR_runtime_state_STAR_ = inst_177541);
var ___$1 = (function (){var temp__5825__auto__ = (state_177684[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_177684__$1 = (function (){var statearr_177705 = state_177684;
(statearr_177705[(16)] = inst_177548);

return statearr_177705;
})();
var statearr_177706_179401 = state_177684__$1;
(statearr_177706_179401[(2)] = inst_177547);

(statearr_177706_179401[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (31))){
var inst_177583 = (state_177684[(17)]);
var inst_177582 = (state_177684[(18)]);
var inst_177476 = (state_177684[(11)]);
var inst_177589 = (state_177684[(2)]);
var inst_177590 = [new cljs.core.Keyword(null,"h4","h4",2004862993),inst_177589];
var inst_177591 = (new cljs.core.PersistentVector(null,2,(5),inst_177583,inst_177590,null));
var inst_177592 = [new cljs.core.Keyword(null,"div.col.text-center","div.col.text-center",1975951307),inst_177591];
var inst_177593 = (new cljs.core.PersistentVector(null,2,(5),inst_177582,inst_177592,null));
var state_177684__$1 = (function (){var statearr_177707 = state_177684;
(statearr_177707[(19)] = inst_177593);

return statearr_177707;
})();
if(cljs.core.truth_(inst_177476)){
var statearr_177708_179402 = state_177684__$1;
(statearr_177708_179402[(1)] = (32));

} else {
var statearr_177709_179403 = state_177684__$1;
(statearr_177709_179403[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (32))){
var inst_177471 = (state_177684[(10)]);
var inst_177468 = (state_177684[(7)]);
var inst_177595 = teg_online.ui.exchange_button_visible_QMARK_(inst_177471,inst_177468);
var state_177684__$1 = state_177684;
var statearr_177710_179404 = state_177684__$1;
(statearr_177710_179404[(2)] = inst_177595);

(statearr_177710_179404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (40))){
var inst_177581 = (state_177684[(20)]);
var inst_177593 = (state_177684[(19)]);
var inst_177611 = (state_177684[(21)]);
var inst_177569 = (state_177684[(22)]);
var inst_177472 = (state_177684[(8)]);
var inst_177468 = (state_177684[(7)]);
var inst_177469 = (state_177684[(9)]);
var inst_177471 = (state_177684[(10)]);
var inst_177476 = (state_177684[(11)]);
var inst_177635 = (state_177684[(23)]);
var inst_177627 = (state_177684[(2)]);
var inst_177628 = [new cljs.core.Keyword(null,"div.row.align-items-center.py-1.g-1","div.row.align-items-center.py-1.g-1",-1656171710),inst_177581,inst_177593,inst_177611,inst_177627];
var inst_177629 = (new cljs.core.PersistentVector(null,5,(5),inst_177569,inst_177628,null));
var inst_177630 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_177629], 0));
var inst_177631 = inst_177472.appendChild(inst_177630);
var inst_177632 = document.querySelector("#menu-button");
var inst_177633 = (function (){var map__177465 = inst_177468;
var game = inst_177468;
var turn = inst_177469;
var user = inst_177471;
var status_bar = inst_177472;
var show_buttons_QMARK_ = inst_177476;
return (function (){
return teg_online.ui.show_menu_BANG_(state);
});
})();
var inst_177634 = inst_177632.addEventListener("click",inst_177633);
var inst_177635__$1 = document.querySelector("#finish-turn-button");
var state_177684__$1 = (function (){var statearr_177711 = state_177684;
(statearr_177711[(24)] = inst_177631);

(statearr_177711[(25)] = inst_177634);

(statearr_177711[(23)] = inst_177635__$1);

return statearr_177711;
})();
if(cljs.core.truth_(inst_177635__$1)){
var statearr_177712_179405 = state_177684__$1;
(statearr_177712_179405[(1)] = (41));

} else {
var statearr_177713_179406 = state_177684__$1;
(statearr_177713_179406[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (33))){
var inst_177476 = (state_177684[(11)]);
var state_177684__$1 = state_177684;
var statearr_177715_179407 = state_177684__$1;
(statearr_177715_179407[(2)] = inst_177476);

(statearr_177715_179407[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (13))){
var inst_177534 = (state_177684[(2)]);
var inst_177535 = inst_177534.add("player-turn");
var state_177684__$1 = state_177684;
var statearr_177716_179408 = state_177684__$1;
(statearr_177716_179408[(2)] = inst_177535);

(statearr_177716_179408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (22))){
var _ = (function (){var statearr_177717 = state_177684;
(statearr_177717[(4)] = cljs.core.rest((state_177684[(4)])));

return statearr_177717;
})();
var state_177684__$1 = state_177684;
var ex177714 = (state_177684__$1[(2)]);
var statearr_177718_179409 = state_177684__$1;
(statearr_177718_179409[(5)] = ex177714);


throw ex177714;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (36))){
var state_177684__$1 = state_177684;
var statearr_177719_179410 = state_177684__$1;
(statearr_177719_179410[(2)] = null);

(statearr_177719_179410[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (41))){
var inst_177468 = (state_177684[(7)]);
var inst_177469 = (state_177684[(9)]);
var inst_177471 = (state_177684[(10)]);
var inst_177472 = (state_177684[(8)]);
var inst_177476 = (state_177684[(11)]);
var inst_177635 = (state_177684[(23)]);
var inst_177637 = (function (){var map__177465 = inst_177468;
var game = inst_177468;
var turn = inst_177469;
var user = inst_177471;
var status_bar = inst_177472;
var show_buttons_QMARK_ = inst_177476;
var temp__5825__auto__ = inst_177635;
var finish_turn_btn = inst_177635;
return (function (){
return teg_online.ui.finish_turn_BANG_.cljs$core$IFn$_invoke$arity$1(state);
});
})();
var inst_177638 = inst_177635.addEventListener("click",inst_177637);
var state_177684__$1 = state_177684;
var statearr_177720_179411 = state_177684__$1;
(statearr_177720_179411[(2)] = inst_177638);

(statearr_177720_179411[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (43))){
var inst_177642 = (state_177684[(26)]);
var inst_177641 = (state_177684[(2)]);
var inst_177642__$1 = document.querySelector("#exchange-button");
var state_177684__$1 = (function (){var statearr_177721 = state_177684;
(statearr_177721[(27)] = inst_177641);

(statearr_177721[(26)] = inst_177642__$1);

return statearr_177721;
})();
if(cljs.core.truth_(inst_177642__$1)){
var statearr_177722_179412 = state_177684__$1;
(statearr_177722_179412[(1)] = (44));

} else {
var statearr_177723_179413 = state_177684__$1;
(statearr_177723_179413[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (29))){
var state_177684__$1 = state_177684;
var statearr_177724_179414 = state_177684__$1;
(statearr_177724_179414[(2)] = null);

(statearr_177724_179414[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (44))){
var inst_177468 = (state_177684[(7)]);
var inst_177469 = (state_177684[(9)]);
var inst_177471 = (state_177684[(10)]);
var inst_177472 = (state_177684[(8)]);
var inst_177476 = (state_177684[(11)]);
var inst_177642 = (state_177684[(26)]);
var inst_177644 = (function (){var map__177465 = inst_177468;
var game = inst_177468;
var turn = inst_177469;
var user = inst_177471;
var status_bar = inst_177472;
var show_buttons_QMARK_ = inst_177476;
var temp__5825__auto__ = inst_177642;
var exchange_btn = inst_177642;
return (function (){
return teg_online.ui.exchange_cards_BANG_(state);
});
})();
var inst_177645 = inst_177642.addEventListener("click",inst_177644);
var inst_177650 = oops.state._STAR_runtime_state_STAR_;
var inst_177651 = (new Error());
var inst_177652 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_177653 = oops.state.prepare_state(inst_177642,inst_177651,inst_177652);
var inst_177654 = (oops.state._STAR_runtime_state_STAR_ = inst_177653);
var state_177684__$1 = (function (){var statearr_177725 = state_177684;
(statearr_177725[(28)] = inst_177645);

(statearr_177725[(29)] = inst_177650);

(statearr_177725[(30)] = inst_177654);

return statearr_177725;
})();
var statearr_177726_179415 = state_177684__$1;
(statearr_177726_179415[(2)] = null);

(statearr_177726_179415[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (6))){
var inst_177472 = (state_177684[(8)]);
var inst_177498 = (inst_177472["innerHTML"] = "");
var state_177684__$1 = state_177684;
var statearr_177727_179416 = state_177684__$1;
(statearr_177727_179416[(2)] = inst_177498);

(statearr_177727_179416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (28))){
var inst_177682 = (state_177684[(2)]);
var state_177684__$1 = state_177684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_177684__$1,inst_177682);
} else {
if((state_val_177685 === (51))){
var inst_177471 = (state_177684[(10)]);
var inst_177468 = (state_177684[(7)]);
var inst_177642 = (state_177684[(26)]);
var inst_177667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_177471,new cljs.core.Keyword(null,"id","id",-1388402092));
var inst_177668 = teg_online.game.can_exchange_QMARK_.cljs$core$IFn$_invoke$arity$2(inst_177468,inst_177667);
var inst_177669 = cljs.core.not(inst_177668);
var inst_177670 = (inst_177642["disabled"] = inst_177669);
var state_177684__$1 = state_177684;
var statearr_177728_179417 = state_177684__$1;
(statearr_177728_179417[(2)] = inst_177670);

(statearr_177728_179417[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (25))){
var inst_177561 = (state_177684[(2)]);
var _ = (function (){var statearr_177729 = state_177684;
(statearr_177729[(4)] = cljs.core.rest((state_177684[(4)])));

return statearr_177729;
})();
var state_177684__$1 = state_177684;
var statearr_177730_179418 = state_177684__$1;
(statearr_177730_179418[(2)] = inst_177561);

(statearr_177730_179418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (34))){
var inst_177598 = (state_177684[(2)]);
var state_177684__$1 = state_177684;
if(cljs.core.truth_(inst_177598)){
var statearr_177731_179419 = state_177684__$1;
(statearr_177731_179419[(1)] = (35));

} else {
var statearr_177732_179420 = state_177684__$1;
(statearr_177732_179420[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (17))){
var state_177684__$1 = state_177684;
var statearr_177733_179421 = state_177684__$1;
(statearr_177733_179421[(2)] = null);

(statearr_177733_179421[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (3))){
var inst_177471 = (state_177684[(10)]);
var inst_177468 = (state_177684[(7)]);
var inst_177504 = (state_177684[(2)]);
var inst_177505 = teg_online.ui.is_my_turn_QMARK_(inst_177471,inst_177468);
var state_177684__$1 = (function (){var statearr_177734 = state_177684;
(statearr_177734[(31)] = inst_177504);

return statearr_177734;
})();
if(inst_177505){
var statearr_177735_179422 = state_177684__$1;
(statearr_177735_179422[(1)] = (9));

} else {
var statearr_177736_179423 = state_177684__$1;
(statearr_177736_179423[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (12))){
var inst_177472 = (state_177684[(8)]);
var _ = (function (){var statearr_177737 = state_177684;
(statearr_177737[(4)] = cljs.core.cons((14),(state_177684[(4)])));

return statearr_177737;
})();
var ___$1 = (function (){var statearr_177738 = state_177684;
(statearr_177738[(4)] = cljs.core.cons((15),(state_177684[(4)])));

return statearr_177738;
})();
var inst_177526 = oops.core.validate_object_access_dynamically(inst_177472,(0),"classList",true,true,false);
var state_177684__$1 = state_177684;
if(inst_177526){
var statearr_177739_179424 = state_177684__$1;
(statearr_177739_179424[(1)] = (16));

} else {
var statearr_177740_179425 = state_177684__$1;
(statearr_177740_179425[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (2))){
var inst_177472 = (state_177684[(8)]);
var _ = (function (){var statearr_177741 = state_177684;
(statearr_177741[(4)] = cljs.core.cons((4),(state_177684[(4)])));

return statearr_177741;
})();
var ___$1 = (function (){var statearr_177742 = state_177684;
(statearr_177742[(4)] = cljs.core.cons((5),(state_177684[(4)])));

return statearr_177742;
})();
var inst_177496 = oops.core.validate_object_access_dynamically(inst_177472,(0),"innerHTML",true,true,true);
var state_177684__$1 = state_177684;
if(inst_177496){
var statearr_177743_179426 = state_177684__$1;
(statearr_177743_179426[(1)] = (6));

} else {
var statearr_177744_179427 = state_177684__$1;
(statearr_177744_179427[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (23))){
var inst_177472 = (state_177684[(8)]);
var inst_177558 = (inst_177472["classList"]);
var state_177684__$1 = state_177684;
var statearr_177745_179428 = state_177684__$1;
(statearr_177745_179428[(2)] = inst_177558);

(statearr_177745_179428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (47))){
var inst_177642 = (state_177684[(26)]);
var _ = (function (){var statearr_177746 = state_177684;
(statearr_177746[(4)] = cljs.core.cons((49),(state_177684[(4)])));

return statearr_177746;
})();
var ___$1 = (function (){var statearr_177747 = state_177684;
(statearr_177747[(4)] = cljs.core.cons((50),(state_177684[(4)])));

return statearr_177747;
})();
var inst_177665 = oops.core.validate_object_access_dynamically(inst_177642,(0),"disabled",true,true,true);
var state_177684__$1 = state_177684;
if(inst_177665){
var statearr_177748_179429 = state_177684__$1;
(statearr_177748_179429[(1)] = (51));

} else {
var statearr_177749_179430 = state_177684__$1;
(statearr_177749_179430[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (35))){
var inst_177600 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177601 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177602 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_177603 = ["button"];
var inst_177604 = cljs.core.PersistentHashMap.fromArrays(inst_177602,inst_177603);
var inst_177605 = [new cljs.core.Keyword(null,"button#exchange-button.btn.btn-secondary.btn-lg","button#exchange-button.btn.btn-secondary.btn-lg",-125640891),inst_177604,"Canje"];
var inst_177606 = (new cljs.core.PersistentVector(null,3,(5),inst_177601,inst_177605,null));
var inst_177607 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_177606];
var inst_177608 = (new cljs.core.PersistentVector(null,2,(5),inst_177600,inst_177607,null));
var state_177684__$1 = state_177684;
var statearr_177750_179431 = state_177684__$1;
(statearr_177750_179431[(2)] = inst_177608);

(statearr_177750_179431[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (19))){
var inst_177472 = (state_177684[(8)]);
var _ = (function (){var statearr_177751 = state_177684;
(statearr_177751[(4)] = cljs.core.cons((21),(state_177684[(4)])));

return statearr_177751;
})();
var ___$1 = (function (){var statearr_177752 = state_177684;
(statearr_177752[(4)] = cljs.core.cons((22),(state_177684[(4)])));

return statearr_177752;
})();
var inst_177556 = oops.core.validate_object_access_dynamically(inst_177472,(0),"classList",true,true,false);
var state_177684__$1 = state_177684;
if(inst_177556){
var statearr_177753_179432 = state_177684__$1;
(statearr_177753_179432[(1)] = (23));

} else {
var statearr_177754_179433 = state_177684__$1;
(statearr_177754_179433[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (11))){
var inst_177469 = (state_177684[(9)]);
var inst_177567 = (state_177684[(2)]);
var state_177684__$1 = (function (){var statearr_177756 = state_177684;
(statearr_177756[(32)] = inst_177567);

return statearr_177756;
})();
if(cljs.core.truth_(inst_177469)){
var statearr_177757_179434 = state_177684__$1;
(statearr_177757_179434[(1)] = (26));

} else {
var statearr_177758_179435 = state_177684__$1;
(statearr_177758_179435[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (9))){
var inst_177472 = (state_177684[(8)]);
var inst_177511 = oops.state._STAR_runtime_state_STAR_;
var inst_177512 = (new Error());
var inst_177513 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_177514 = oops.state.prepare_state(inst_177472,inst_177512,inst_177513);
var inst_177515 = (oops.state._STAR_runtime_state_STAR_ = inst_177514);
var state_177684__$1 = (function (){var statearr_177759 = state_177684;
(statearr_177759[(33)] = inst_177511);

(statearr_177759[(34)] = inst_177515);

return statearr_177759;
})();
var statearr_177760_179436 = state_177684__$1;
(statearr_177760_179436[(2)] = null);

(statearr_177760_179436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (5))){
var _ = (function (){var statearr_177761 = state_177684;
(statearr_177761[(4)] = cljs.core.rest((state_177684[(4)])));

return statearr_177761;
})();
var state_177684__$1 = state_177684;
var ex177755 = (state_177684__$1[(2)]);
var statearr_177762_179437 = state_177684__$1;
(statearr_177762_179437[(5)] = ex177755);


throw ex177755;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (14))){
var inst_177511 = (state_177684[(33)]);
var _ = (function (){var statearr_177763 = state_177684;
(statearr_177763[(4)] = cljs.core.rest((state_177684[(4)])));

return statearr_177763;
})();
var inst_177517 = (state_177684[(2)]);
var inst_177518 = (oops.state._STAR_runtime_state_STAR_ = inst_177511);
var ___$1 = (function (){var temp__5825__auto__ = (state_177684[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_177684__$1 = (function (){var statearr_177764 = state_177684;
(statearr_177764[(35)] = inst_177518);

return statearr_177764;
})();
var statearr_177765_179438 = state_177684__$1;
(statearr_177765_179438[(2)] = inst_177517);

(statearr_177765_179438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (45))){
var state_177684__$1 = state_177684;
var statearr_177766_179439 = state_177684__$1;
(statearr_177766_179439[(2)] = null);

(statearr_177766_179439[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (53))){
var inst_177642 = (state_177684[(26)]);
var inst_177673 = (state_177684[(2)]);
var _ = (function (){var statearr_177767 = state_177684;
(statearr_177767[(4)] = cljs.core.rest((state_177684[(4)])));

return statearr_177767;
})();
var state_177684__$1 = (function (){var statearr_177768 = state_177684;
(statearr_177768[(36)] = inst_177673);

return statearr_177768;
})();
var statearr_177769_179440 = state_177684__$1;
(statearr_177769_179440[(2)] = inst_177642);

(statearr_177769_179440[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (26))){
var inst_177468 = (state_177684[(7)]);
var inst_177569 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177570 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177571 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177572 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_177573 = ["button"];
var inst_177574 = cljs.core.PersistentHashMap.fromArrays(inst_177572,inst_177573);
var inst_177575 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177576 = [new cljs.core.Keyword(null,"i.fas.fa-bars","i.fas.fa-bars",-1831963802)];
var inst_177577 = (new cljs.core.PersistentVector(null,1,(5),inst_177575,inst_177576,null));
var inst_177578 = [new cljs.core.Keyword(null,"button#menu-button.btn.btn-lg.btn-outline-dark","button#menu-button.btn.btn-lg.btn-outline-dark",-701789852),inst_177574,inst_177577];
var inst_177579 = (new cljs.core.PersistentVector(null,3,(5),inst_177571,inst_177578,null));
var inst_177580 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_177579];
var inst_177581 = (new cljs.core.PersistentVector(null,2,(5),inst_177570,inst_177580,null));
var inst_177582 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177583 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177584 = teg_online.game.game_over_QMARK_(inst_177468);
var state_177684__$1 = (function (){var statearr_177770 = state_177684;
(statearr_177770[(22)] = inst_177569);

(statearr_177770[(20)] = inst_177581);

(statearr_177770[(18)] = inst_177582);

(statearr_177770[(17)] = inst_177583);

return statearr_177770;
})();
if(inst_177584){
var statearr_177771_179441 = state_177684__$1;
(statearr_177771_179441[(1)] = (29));

} else {
var statearr_177772_179442 = state_177684__$1;
(statearr_177772_179442[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (16))){
var inst_177472 = (state_177684[(8)]);
var inst_177528 = (inst_177472["classList"]);
var state_177684__$1 = state_177684;
var statearr_177773_179443 = state_177684__$1;
(statearr_177773_179443[(2)] = inst_177528);

(statearr_177773_179443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (38))){
var inst_177468 = (state_177684[(7)]);
var inst_177613 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177614 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_177615 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)];
var inst_177616 = teg_online.ui.finish_turn_enabled_QMARK_.cljs$core$IFn$_invoke$arity$1(state);
var inst_177617 = cljs.core.not(inst_177616);
var inst_177618 = ["button",inst_177617];
var inst_177619 = cljs.core.PersistentHashMap.fromArrays(inst_177615,inst_177618);
var inst_177620 = teg_online.ui.finish_btn_label.cljs$core$IFn$_invoke$arity$1(inst_177468);
var inst_177621 = [new cljs.core.Keyword(null,"button#finish-turn-button.btn.btn-primary.btn-lg","button#finish-turn-button.btn.btn-primary.btn-lg",267614840),inst_177619,inst_177620];
var inst_177622 = (new cljs.core.PersistentVector(null,3,(5),inst_177614,inst_177621,null));
var inst_177623 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_177622];
var inst_177624 = (new cljs.core.PersistentVector(null,2,(5),inst_177613,inst_177623,null));
var state_177684__$1 = state_177684;
var statearr_177774_179444 = state_177684__$1;
(statearr_177774_179444[(2)] = inst_177624);

(statearr_177774_179444[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (30))){
var inst_177587 = teg_online.ui.status_panel_title.cljs$core$IFn$_invoke$arity$1(state);
var state_177684__$1 = state_177684;
var statearr_177775_179445 = state_177684__$1;
(statearr_177775_179445[(2)] = inst_177587);

(statearr_177775_179445[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (10))){
var inst_177472 = (state_177684[(8)]);
var inst_177541 = oops.state._STAR_runtime_state_STAR_;
var inst_177542 = (new Error());
var inst_177543 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_177544 = oops.state.prepare_state(inst_177472,inst_177542,inst_177543);
var inst_177545 = (oops.state._STAR_runtime_state_STAR_ = inst_177544);
var state_177684__$1 = (function (){var statearr_177776 = state_177684;
(statearr_177776[(15)] = inst_177541);

(statearr_177776[(37)] = inst_177545);

return statearr_177776;
})();
var statearr_177777_179446 = state_177684__$1;
(statearr_177777_179446[(2)] = null);

(statearr_177777_179446[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (18))){
var inst_177531 = (state_177684[(2)]);
var _ = (function (){var statearr_177778 = state_177684;
(statearr_177778[(4)] = cljs.core.rest((state_177684[(4)])));

return statearr_177778;
})();
var state_177684__$1 = state_177684;
var statearr_177779_179447 = state_177684__$1;
(statearr_177779_179447[(2)] = inst_177531);

(statearr_177779_179447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (52))){
var state_177684__$1 = state_177684;
var statearr_177780_179448 = state_177684__$1;
(statearr_177780_179448[(2)] = null);

(statearr_177780_179448[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (42))){
var state_177684__$1 = state_177684;
var statearr_177781_179449 = state_177684__$1;
(statearr_177781_179449[(2)] = null);

(statearr_177781_179449[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (37))){
var inst_177476 = (state_177684[(11)]);
var inst_177611 = (state_177684[(2)]);
var state_177684__$1 = (function (){var statearr_177782 = state_177684;
(statearr_177782[(21)] = inst_177611);

return statearr_177782;
})();
if(cljs.core.truth_(inst_177476)){
var statearr_177783_179450 = state_177684__$1;
(statearr_177783_179450[(1)] = (38));

} else {
var statearr_177784_179451 = state_177684__$1;
(statearr_177784_179451[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (8))){
var inst_177472 = (state_177684[(8)]);
var inst_177501 = (state_177684[(2)]);
var _ = (function (){var statearr_177785 = state_177684;
(statearr_177785[(4)] = cljs.core.rest((state_177684[(4)])));

return statearr_177785;
})();
var state_177684__$1 = (function (){var statearr_177786 = state_177684;
(statearr_177786[(38)] = inst_177501);

return statearr_177786;
})();
var statearr_177787_179452 = state_177684__$1;
(statearr_177787_179452[(2)] = inst_177472);

(statearr_177787_179452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_177685 === (49))){
var inst_177650 = (state_177684[(29)]);
var _ = (function (){var statearr_177788 = state_177684;
(statearr_177788[(4)] = cljs.core.rest((state_177684[(4)])));

return statearr_177788;
})();
var inst_177656 = (state_177684[(2)]);
var inst_177657 = (oops.state._STAR_runtime_state_STAR_ = inst_177650);
var ___$1 = (function (){var temp__5825__auto__ = (state_177684[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_177684__$1 = (function (){var statearr_177789 = state_177684;
(statearr_177789[(39)] = inst_177657);

return statearr_177789;
})();
var statearr_177790_179453 = state_177684__$1;
(statearr_177790_179453[(2)] = inst_177656);

(statearr_177790_179453[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$update_status_panel_$_state_machine__18069__auto__ = null;
var teg_online$ui$update_status_panel_$_state_machine__18069__auto____0 = (function (){
var statearr_177791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_177791[(0)] = teg_online$ui$update_status_panel_$_state_machine__18069__auto__);

(statearr_177791[(1)] = (1));

return statearr_177791;
});
var teg_online$ui$update_status_panel_$_state_machine__18069__auto____1 = (function (state_177684){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_177684);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e177792){var ex__18072__auto__ = e177792;
var statearr_177793_179454 = state_177684;
(statearr_177793_179454[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_177684[(4)]))){
var statearr_177794_179455 = state_177684;
(statearr_177794_179455[(1)] = cljs.core.first((state_177684[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179456 = state_177684;
state_177684 = G__179456;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$update_status_panel_$_state_machine__18069__auto__ = function(state_177684){
switch(arguments.length){
case 0:
return teg_online$ui$update_status_panel_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$update_status_panel_$_state_machine__18069__auto____1.call(this,state_177684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$update_status_panel_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$update_status_panel_$_state_machine__18069__auto____0;
teg_online$ui$update_status_panel_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$update_status_panel_$_state_machine__18069__auto____1;
return teg_online$ui$update_status_panel_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_177795 = f__19294__auto__();
(statearr_177795[(6)] = c__19293__auto__);

return statearr_177795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.set_current_snapshot_BANG_ = (function teg_online$ui$set_current_snapshot_BANG_(state,snapshot_idx){
var snapshots = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
var temp__5825__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(snapshots,snapshot_idx,null);
if(cljs.core.truth_(temp__5825__auto__)){
var snapshot = temp__5825__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__177796_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(p1__177796_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692)], null),snapshot_idx),new cljs.core.Keyword(null,"game","game",-441523833),snapshot);
}));
} else {
return null;
}
});
teg_online.ui.set_previous_snapshot_BANG_ = (function teg_online$ui$set_previous_snapshot_BANG_(state){
var temp__5823__auto__ = new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
if(cljs.core.truth_(temp__5823__auto__)){
var selected_snapshot = temp__5823__auto__;
if((selected_snapshot > (0))){
return teg_online.ui.set_current_snapshot_BANG_(state,(selected_snapshot - (1)));
} else {
return null;
}
} else {
return teg_online.ui.set_current_snapshot_BANG_(state,(cljs.core.count(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))) - (2)));
}
});
teg_online.ui.set_next_snapshot_BANG_ = (function teg_online$ui$set_next_snapshot_BANG_(state){
var selected_snapshot = new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
if((selected_snapshot < (cljs.core.count(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))) - (1)))){
return teg_online.ui.set_current_snapshot_BANG_(state,(selected_snapshot + (1)));
} else {
return null;
}
});
teg_online.ui.restart_from_current_snapshot_BANG_ = (function teg_online$ui$restart_from_current_snapshot_BANG_(state){
var selected_snapshot = new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selected_snapshot], 0));

var temp__5825__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),selected_snapshot,null);
if(cljs.core.truth_(temp__5825__auto__)){
var snapshot = temp__5825__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([snapshot], 0));

var old = cljs.core.deref(state);
var new$ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__177797_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(p1__177797_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"snapshots","snapshots",941363956)], null),cljs.core.subvec,(0),(selected_snapshot + (1))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692)], null),null),new cljs.core.Keyword(null,"game","game",-441523833),snapshot);
}));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)], 0));
} else {
return null;
}
});
teg_online.ui.pause_from_current_snapshot_BANG_ = (function teg_online$ui$pause_from_current_snapshot_BANG_(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692)], null),(cljs.core.count(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))) - (1)));
});
teg_online.ui.init_debug_panel_BANG_ = (function teg_online$ui$init_debug_panel_BANG_(state){
var G__177798_179457 = document.querySelector("#debug-panel");
var target_obj_177799_179458 = G__177798_179457;
var _STAR_runtime_state_STAR__orig_val__177801_179459 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__177802_179460 = oops.state.prepare_state(target_obj_177799_179458,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__177802_179460);

try{var parent_obj_177800_179461 = target_obj_177799_179458;
if(oops.core.validate_object_access_dynamically(parent_obj_177800_179461,(0),"innerHTML",true,true,true)){
(parent_obj_177800_179461["innerHTML"] = "");
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__177801_179459);
}
G__177798_179457.appendChild(crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#bottom-bar.row.text-center.py-2.bg-light.justify-content-center.align-items-center.border.border-4","div#bottom-bar.row.text-center.py-2.bg-light.justify-content-center.align-items-center.border.border-4",-1325294533),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#snapshot-print.btn.btn-lg.btn-outline-dark","button#snapshot-print.btn.btn-lg.btn-outline-dark",299631291),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-terminal","i.fas.fa-terminal",491581633)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mx-1","span.mx-1",-1460509123)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#snapshot-copy.btn.btn-lg.btn-outline-dark","button#snapshot-copy.btn.btn-lg.btn-outline-dark",-297427553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-copy","i.fa.fa-copy",1732528857)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#snapshot-range.form-range","input#snapshot-range.form-range",74330166),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(10),new cljs.core.Keyword(null,"step","step",1288888124),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.btn-group-lg","div.btn-group.btn-group-lg",-1376375785),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#snapshot-previous.btn.btn-outline-dark","button#snapshot-previous.btn.btn-outline-dark",-2087996408),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-step-backward","i.fas.fa-step-backward",-619248229)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#snapshot-play.btn.btn-outline-dark","button#snapshot-play.btn.btn-outline-dark",-579096749),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-play","i.fas.fa-play",-721810049)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#snapshot-pause.btn.btn-outline-dark","button#snapshot-pause.btn.btn-outline-dark",-1999756914),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-pause","i.fas.fa-pause",854339760)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#snapshot-next.btn.btn-outline-dark","button#snapshot-next.btn.btn-outline-dark",-1473072102),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-step-forward","i.fas.fa-step-forward",1682738056)], null)], null)], null)], null)], null)], 0)));


var snapshot_previous_179462 = document.getElementById("snapshot-previous");
teg_online.utils.bootstrap.on_click(snapshot_previous_179462,(function (){
return teg_online.ui.set_previous_snapshot_BANG_(state);
}));

var snapshot_next_179463 = document.getElementById("snapshot-next");
teg_online.utils.bootstrap.on_click(snapshot_next_179463,(function (){
return teg_online.ui.set_next_snapshot_BANG_(state);
}));

var snapshot_play_179464 = document.getElementById("snapshot-play");
teg_online.utils.bootstrap.on_click(snapshot_play_179464,(function (){
return teg_online.ui.restart_from_current_snapshot_BANG_(state);
}));

var snapshot_pause_179465 = document.getElementById("snapshot-pause");
teg_online.utils.bootstrap.on_click(snapshot_pause_179465,(function (){
return teg_online.ui.pause_from_current_snapshot_BANG_(state);
}));

var snapshot_range_179466 = document.getElementById("snapshot-range");
teg_online.utils.bootstrap.on_input(snapshot_range_179466,(function (){
return teg_online.ui.set_current_snapshot_BANG_(state,((function (){var target_obj_177803 = snapshot_range_179466;
var _STAR_runtime_state_STAR__orig_val__177805 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__177806 = oops.state.prepare_state(target_obj_177803,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__177806);

try{var next_obj_177804 = ((oops.core.validate_object_access_dynamically(target_obj_177803,(0),"value",true,true,false))?(target_obj_177803["value"]):null);
return next_obj_177804;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__177805);
}})() | 0));
}));

var snapshot_print_179467 = document.getElementById("snapshot-print");
teg_online.utils.bootstrap.on_click(snapshot_print_179467,(function (){
teg_online.utils.bootstrap.show_toast_msg.cljs$core$IFn$_invoke$arity$variadic("Current snapshot printed to the console",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-terminal","i.fas.fa-terminal",491581633)], null)], 0));

return console.log(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
}));

var snapshot_copy = document.getElementById("snapshot-copy");
return teg_online.utils.bootstrap.on_click(snapshot_copy,(function (){
var str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], 0));
return teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1(teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),(new cljs.core.List(null,teg_online.utils.bootstrap.close_modal_btn,null,(1),null)),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-monospace","div.font-monospace",-373872695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"user-select: all;"], null),str], null)], 0)));
}));
});
teg_online.ui.update_debug_panel = (function teg_online$ui$update_debug_panel(state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_178172){
var state_val_178173 = (state_178172[(1)]);
if((state_val_178173 === (65))){
var inst_178090 = (state_178172[(7)]);
var inst_178088 = (state_178172[(2)]);
var inst_178090__$1 = document.getElementById("snapshot-previous");
var inst_178095 = oops.state._STAR_runtime_state_STAR_;
var inst_178096 = (new Error());
var inst_178097 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_178098 = oops.state.prepare_state(inst_178090__$1,inst_178096,inst_178097);
var inst_178099 = (oops.state._STAR_runtime_state_STAR_ = inst_178098);
var state_178172__$1 = (function (){var statearr_178175 = state_178172;
(statearr_178175[(8)] = inst_178088);

(statearr_178175[(7)] = inst_178090__$1);

(statearr_178175[(9)] = inst_178095);

(statearr_178175[(10)] = inst_178099);

return statearr_178175;
})();
var statearr_178176_179468 = state_178172__$1;
(statearr_178176_179468[(2)] = null);

(statearr_178176_179468[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (70))){
var inst_178030 = (state_178172[(11)]);
var inst_178085 = (state_178172[(2)]);
var _ = (function (){var statearr_178177 = state_178172;
(statearr_178177[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178177;
})();
var state_178172__$1 = (function (){var statearr_178178 = state_178172;
(statearr_178178[(12)] = inst_178085);

return statearr_178178;
})();
var statearr_178179_179469 = state_178172__$1;
(statearr_178179_179469[(2)] = inst_178030);

(statearr_178179_179469[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (62))){
var state_178172__$1 = state_178172;
var statearr_178180_179470 = state_178172__$1;
(statearr_178180_179470[(2)] = null);

(statearr_178180_179470[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (74))){
var _ = (function (){var statearr_178181 = state_178172;
(statearr_178181[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178181;
})();
var state_178172__$1 = state_178172;
var ex178174 = (state_178172__$1[(2)]);
var statearr_178182_179471 = state_178172__$1;
(statearr_178182_179471[(5)] = ex178174);


throw ex178174;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (7))){
var state_178172__$1 = state_178172;
var statearr_178183_179472 = state_178172__$1;
(statearr_178183_179472[(2)] = null);

(statearr_178183_179472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (59))){
var inst_178035 = (state_178172[(13)]);
var _ = (function (){var statearr_178184 = state_178172;
(statearr_178184[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178184;
})();
var inst_178041 = (state_178172[(2)]);
var inst_178042 = (oops.state._STAR_runtime_state_STAR_ = inst_178035);
var ___$1 = (function (){var temp__5825__auto__ = (state_178172[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_178172__$1 = (function (){var statearr_178185 = state_178172;
(statearr_178185[(14)] = inst_178042);

return statearr_178185;
})();
var statearr_178186_179473 = state_178172__$1;
(statearr_178186_179473[(2)] = inst_178041);

(statearr_178186_179473[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (86))){
var inst_178136 = (state_178172[(15)]);
var _ = (function (){var statearr_178187 = state_178172;
(statearr_178187[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178187;
})();
var inst_178142 = (state_178172[(2)]);
var inst_178143 = (oops.state._STAR_runtime_state_STAR_ = inst_178136);
var ___$1 = (function (){var temp__5825__auto__ = (state_178172[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_178172__$1 = (function (){var statearr_178188 = state_178172;
(statearr_178188[(16)] = inst_178143);

return statearr_178188;
})();
var statearr_178189_179474 = state_178172__$1;
(statearr_178189_179474[(2)] = inst_178142);

(statearr_178189_179474[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (20))){
var inst_177875 = (state_178172[(17)]);
var inst_177812 = (state_178172[(18)]);
var inst_177897 = (inst_177875["disabled"] = inst_177812);
var state_178172__$1 = state_178172;
var statearr_178190_179475 = state_178172__$1;
(statearr_178190_179475[(2)] = inst_177897);

(statearr_178190_179475[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (72))){
var inst_178131 = (state_178172[(19)]);
var inst_178129 = (state_178172[(2)]);
var inst_178131__$1 = document.getElementById("snapshot-next");
var inst_178136 = oops.state._STAR_runtime_state_STAR_;
var inst_178137 = (new Error());
var inst_178138 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_178139 = oops.state.prepare_state(inst_178131__$1,inst_178137,inst_178138);
var inst_178140 = (oops.state._STAR_runtime_state_STAR_ = inst_178139);
var state_178172__$1 = (function (){var statearr_178192 = state_178172;
(statearr_178192[(20)] = inst_178129);

(statearr_178192[(19)] = inst_178131__$1);

(statearr_178192[(15)] = inst_178136);

(statearr_178192[(21)] = inst_178140);

return statearr_178192;
})();
var statearr_178193_179476 = state_178172__$1;
(statearr_178193_179476[(2)] = null);

(statearr_178193_179476[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (58))){
var inst_178030 = (state_178172[(11)]);
var inst_178058 = (state_178172[(2)]);
var inst_178063 = oops.state._STAR_runtime_state_STAR_;
var inst_178064 = (new Error());
var inst_178065 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_178066 = oops.state.prepare_state(inst_178030,inst_178064,inst_178065);
var inst_178067 = (oops.state._STAR_runtime_state_STAR_ = inst_178066);
var state_178172__$1 = (function (){var statearr_178194 = state_178172;
(statearr_178194[(22)] = inst_178058);

(statearr_178194[(23)] = inst_178063);

(statearr_178194[(24)] = inst_178067);

return statearr_178194;
})();
var statearr_178195_179477 = state_178172__$1;
(statearr_178195_179477[(2)] = null);

(statearr_178195_179477[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (60))){
var _ = (function (){var statearr_178196 = state_178172;
(statearr_178196[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178196;
})();
var state_178172__$1 = state_178172;
var ex178191 = (state_178172__$1[(2)]);
var statearr_178197_179478 = state_178172__$1;
(statearr_178197_179478[(5)] = ex178191);


throw ex178191;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (27))){
var inst_177875 = (state_178172[(17)]);
var inst_177811 = (state_178172[(25)]);
var inst_177925 = (inst_177875["max"] = inst_177811);
var state_178172__$1 = state_178172;
var statearr_178198_179479 = state_178172__$1;
(statearr_178198_179479[(2)] = inst_177925);

(statearr_178198_179479[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (1))){
var inst_177808 = (state_178172[(26)]);
var inst_177815 = (state_178172[(27)]);
var inst_177807 = cljs.core.deref(state);
var inst_177808__$1 = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(inst_177807);
var inst_177809 = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(inst_177808__$1);
var inst_177810 = cljs.core.count(inst_177809);
var inst_177811 = (inst_177810 - (1));
var inst_177812 = cljs.core.empty_QMARK_(inst_177809);
var inst_177813 = new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692).cljs$core$IFn$_invoke$arity$1(inst_177808__$1);
var inst_177815__$1 = document.getElementById("snapshot-print");
var inst_177820 = oops.state._STAR_runtime_state_STAR_;
var inst_177821 = (new Error());
var inst_177822 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_177823 = oops.state.prepare_state(inst_177815__$1,inst_177821,inst_177822);
var inst_177824 = (oops.state._STAR_runtime_state_STAR_ = inst_177823);
var state_178172__$1 = (function (){var statearr_178199 = state_178172;
(statearr_178199[(26)] = inst_177808__$1);

(statearr_178199[(25)] = inst_177811);

(statearr_178199[(18)] = inst_177812);

(statearr_178199[(28)] = inst_177813);

(statearr_178199[(27)] = inst_177815__$1);

(statearr_178199[(29)] = inst_177820);

(statearr_178199[(30)] = inst_177824);

return statearr_178199;
})();
var statearr_178200_179480 = state_178172__$1;
(statearr_178200_179480[(2)] = null);

(statearr_178200_179480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (69))){
var state_178172__$1 = state_178172;
var statearr_178201_179481 = state_178172__$1;
(statearr_178201_179481[(2)] = null);

(statearr_178201_179481[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (24))){
var inst_177875 = (state_178172[(17)]);
var inst_177931 = (state_178172[(2)]);
var inst_177936 = oops.state._STAR_runtime_state_STAR_;
var inst_177937 = (new Error());
var inst_177938 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_177939 = oops.state.prepare_state(inst_177875,inst_177937,inst_177938);
var inst_177940 = (oops.state._STAR_runtime_state_STAR_ = inst_177939);
var state_178172__$1 = (function (){var statearr_178202 = state_178172;
(statearr_178202[(31)] = inst_177931);

(statearr_178202[(32)] = inst_177936);

(statearr_178202[(33)] = inst_177940);

return statearr_178202;
})();
var statearr_178203_179482 = state_178172__$1;
(statearr_178203_179482[(2)] = null);

(statearr_178203_179482[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (55))){
var inst_177808 = (state_178172[(26)]);
var inst_178018 = new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692).cljs$core$IFn$_invoke$arity$1(inst_177808);
var inst_178019 = (inst_178018 == null);
var state_178172__$1 = state_178172;
var statearr_178204_179483 = state_178172__$1;
(statearr_178204_179483[(2)] = inst_178019);

(statearr_178204_179483[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (85))){
var inst_178131 = (state_178172[(19)]);
var inst_178170 = (state_178172[(2)]);
var state_178172__$1 = (function (){var statearr_178205 = state_178172;
(statearr_178205[(34)] = inst_178170);

return statearr_178205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_178172__$1,inst_178131);
} else {
if((state_val_178173 === (39))){
var inst_177875 = (state_178172[(17)]);
var inst_177956 = (state_178172[(2)]);
var inst_177957 = (inst_177875["value"] = inst_177956);
var state_178172__$1 = state_178172;
var statearr_178206_179484 = state_178172__$1;
(statearr_178206_179484[(2)] = inst_177957);

(statearr_178206_179484[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (88))){
var inst_177812 = (state_178172[(18)]);
var state_178172__$1 = state_178172;
if(cljs.core.truth_(inst_177812)){
var statearr_178207_179485 = state_178172__$1;
(statearr_178207_179485[(1)] = (91));

} else {
var statearr_178208_179486 = state_178172__$1;
(statearr_178208_179486[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (46))){
var inst_177965 = (state_178172[(35)]);
var inst_177991 = (state_178172[(2)]);
var _ = (function (){var statearr_178209 = state_178172;
(statearr_178209[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178209;
})();
var state_178172__$1 = (function (){var statearr_178210 = state_178172;
(statearr_178210[(36)] = inst_177991);

return statearr_178210;
})();
var statearr_178211_179487 = state_178172__$1;
(statearr_178211_179487[(2)] = inst_177965);

(statearr_178211_179487[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (4))){
var inst_177820 = (state_178172[(29)]);
var _ = (function (){var statearr_178212 = state_178172;
(statearr_178212[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178212;
})();
var inst_177826 = (state_178172[(2)]);
var inst_177827 = (oops.state._STAR_runtime_state_STAR_ = inst_177820);
var ___$1 = (function (){var temp__5825__auto__ = (state_178172[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_178172__$1 = (function (){var statearr_178213 = state_178172;
(statearr_178213[(37)] = inst_177827);

return statearr_178213;
})();
var statearr_178214_179488 = state_178172__$1;
(statearr_178214_179488[(2)] = inst_177826);

(statearr_178214_179488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (77))){
var inst_178090 = (state_178172[(7)]);
var inst_178126 = (state_178172[(2)]);
var _ = (function (){var statearr_178215 = state_178172;
(statearr_178215[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178215;
})();
var state_178172__$1 = (function (){var statearr_178216 = state_178172;
(statearr_178216[(38)] = inst_178126);

return statearr_178216;
})();
var statearr_178217_179489 = state_178172__$1;
(statearr_178217_179489[(2)] = inst_178090);

(statearr_178217_179489[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (95))){
var inst_177813 = (state_178172[(28)]);
var inst_177811 = (state_178172[(25)]);
var inst_178159 = (inst_177813 >= inst_177811);
var state_178172__$1 = state_178172;
var statearr_178218_179490 = state_178172__$1;
(statearr_178218_179490[(2)] = inst_178159);

(statearr_178218_179490[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (54))){
var inst_177812 = (state_178172[(18)]);
var state_178172__$1 = state_178172;
var statearr_178219_179491 = state_178172__$1;
(statearr_178219_179491[(2)] = inst_177812);

(statearr_178219_179491[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (92))){
var inst_177808 = (state_178172[(26)]);
var inst_178156 = (state_178172[(39)]);
var inst_178155 = new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692).cljs$core$IFn$_invoke$arity$1(inst_177808);
var inst_178156__$1 = (inst_178155 == null);
var state_178172__$1 = (function (){var statearr_178220 = state_178172;
(statearr_178220[(39)] = inst_178156__$1);

return statearr_178220;
})();
if(cljs.core.truth_(inst_178156__$1)){
var statearr_178221_179492 = state_178172__$1;
(statearr_178221_179492[(1)] = (94));

} else {
var statearr_178222_179493 = state_178172__$1;
(statearr_178222_179493[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (15))){
var inst_177845 = (state_178172[(40)]);
var inst_177870 = (state_178172[(2)]);
var _ = (function (){var statearr_178224 = state_178172;
(statearr_178224[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178224;
})();
var state_178172__$1 = (function (){var statearr_178225 = state_178172;
(statearr_178225[(41)] = inst_177870);

return statearr_178225;
})();
var statearr_178226_179494 = state_178172__$1;
(statearr_178226_179494[(2)] = inst_177845);

(statearr_178226_179494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (48))){
var inst_178030 = (state_178172[(11)]);
var inst_178028 = (state_178172[(2)]);
var inst_178030__$1 = document.getElementById("snapshot-pause");
var inst_178035 = oops.state._STAR_runtime_state_STAR_;
var inst_178036 = (new Error());
var inst_178037 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_178038 = oops.state.prepare_state(inst_178030__$1,inst_178036,inst_178037);
var inst_178039 = (oops.state._STAR_runtime_state_STAR_ = inst_178038);
var state_178172__$1 = (function (){var statearr_178227 = state_178172;
(statearr_178227[(42)] = inst_178028);

(statearr_178227[(11)] = inst_178030__$1);

(statearr_178227[(13)] = inst_178035);

(statearr_178227[(43)] = inst_178039);

return statearr_178227;
})();
var statearr_178228_179495 = state_178172__$1;
(statearr_178228_179495[(2)] = null);

(statearr_178228_179495[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (50))){
var _ = (function (){var statearr_178229 = state_178172;
(statearr_178229[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178229;
})();
var state_178172__$1 = state_178172;
var ex178223 = (state_178172__$1[(2)]);
var statearr_178230_179496 = state_178172__$1;
(statearr_178230_179496[(5)] = ex178223);


throw ex178223;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (75))){
var inst_177812 = (state_178172[(18)]);
var state_178172__$1 = state_178172;
if(cljs.core.truth_(inst_177812)){
var statearr_178231_179497 = state_178172__$1;
(statearr_178231_179497[(1)] = (78));

} else {
var statearr_178232_179498 = state_178172__$1;
(statearr_178232_179498[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (21))){
var state_178172__$1 = state_178172;
var statearr_178233_179499 = state_178172__$1;
(statearr_178233_179499[(2)] = null);

(statearr_178233_179499[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (31))){
var inst_177965 = (state_178172[(35)]);
var inst_177963 = (state_178172[(2)]);
var inst_177965__$1 = document.getElementById("snapshot-play");
var inst_177970 = oops.state._STAR_runtime_state_STAR_;
var inst_177971 = (new Error());
var inst_177972 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_177973 = oops.state.prepare_state(inst_177965__$1,inst_177971,inst_177972);
var inst_177974 = (oops.state._STAR_runtime_state_STAR_ = inst_177973);
var state_178172__$1 = (function (){var statearr_178234 = state_178172;
(statearr_178234[(44)] = inst_177963);

(statearr_178234[(35)] = inst_177965__$1);

(statearr_178234[(45)] = inst_177970);

(statearr_178234[(46)] = inst_177974);

return statearr_178234;
})();
var statearr_178235_179500 = state_178172__$1;
(statearr_178235_179500[(2)] = null);

(statearr_178235_179500[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (32))){
var inst_177936 = (state_178172[(32)]);
var _ = (function (){var statearr_178236 = state_178172;
(statearr_178236[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178236;
})();
var inst_177942 = (state_178172[(2)]);
var inst_177943 = (oops.state._STAR_runtime_state_STAR_ = inst_177936);
var ___$1 = (function (){var temp__5825__auto__ = (state_178172[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_178172__$1 = (function (){var statearr_178237 = state_178172;
(statearr_178237[(47)] = inst_177943);

return statearr_178237;
})();
var statearr_178238_179501 = state_178172__$1;
(statearr_178238_179501[(2)] = inst_177942);

(statearr_178238_179501[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (40))){
var inst_177965 = (state_178172[(35)]);
var _ = (function (){var statearr_178239 = state_178172;
(statearr_178239[(4)] = cljs.core.cons((42),(state_178172[(4)])));

return statearr_178239;
})();
var ___$1 = (function (){var statearr_178240 = state_178172;
(statearr_178240[(4)] = cljs.core.cons((43),(state_178172[(4)])));

return statearr_178240;
})();
var inst_177985 = oops.core.validate_object_access_dynamically(inst_177965,(0),"hidden",true,true,true);
var state_178172__$1 = state_178172;
if(inst_177985){
var statearr_178241_179502 = state_178172__$1;
(statearr_178241_179502[(1)] = (44));

} else {
var statearr_178242_179503 = state_178172__$1;
(statearr_178242_179503[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (91))){
var inst_177812 = (state_178172[(18)]);
var state_178172__$1 = state_178172;
var statearr_178244_179504 = state_178172__$1;
(statearr_178244_179504[(2)] = inst_177812);

(statearr_178244_179504[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (56))){
var inst_177965 = (state_178172[(35)]);
var inst_178021 = (state_178172[(2)]);
var inst_178022 = (inst_177965["disabled"] = inst_178021);
var state_178172__$1 = state_178172;
var statearr_178245_179505 = state_178172__$1;
(statearr_178245_179505[(2)] = inst_178022);

(statearr_178245_179505[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (33))){
var _ = (function (){var statearr_178246 = state_178172;
(statearr_178246[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178246;
})();
var state_178172__$1 = state_178172;
var ex178243 = (state_178172__$1[(2)]);
var statearr_178247_179506 = state_178172__$1;
(statearr_178247_179506[(5)] = ex178243);


throw ex178243;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (13))){
var inst_177845 = (state_178172[(40)]);
var inst_177812 = (state_178172[(18)]);
var inst_177867 = (inst_177845["disabled"] = inst_177812);
var state_178172__$1 = state_178172;
var statearr_178248_179507 = state_178172__$1;
(statearr_178248_179507[(2)] = inst_177867);

(statearr_178248_179507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (22))){
var inst_177875 = (state_178172[(17)]);
var inst_177900 = (state_178172[(2)]);
var _ = (function (){var statearr_178249 = state_178172;
(statearr_178249[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178249;
})();
var state_178172__$1 = (function (){var statearr_178250 = state_178172;
(statearr_178250[(48)] = inst_177900);

return statearr_178250;
})();
var statearr_178251_179508 = state_178172__$1;
(statearr_178251_179508[(2)] = inst_177875);

(statearr_178251_179508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (90))){
var inst_178131 = (state_178172[(19)]);
var inst_178167 = (state_178172[(2)]);
var _ = (function (){var statearr_178252 = state_178172;
(statearr_178252[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178252;
})();
var state_178172__$1 = (function (){var statearr_178253 = state_178172;
(statearr_178253[(49)] = inst_178167);

return statearr_178253;
})();
var statearr_178254_179509 = state_178172__$1;
(statearr_178254_179509[(2)] = inst_178131);

(statearr_178254_179509[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (36))){
var inst_177875 = (state_178172[(17)]);
var inst_177960 = (state_178172[(2)]);
var _ = (function (){var statearr_178255 = state_178172;
(statearr_178255[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178255;
})();
var state_178172__$1 = (function (){var statearr_178256 = state_178172;
(statearr_178256[(50)] = inst_177960);

return statearr_178256;
})();
var statearr_178257_179510 = state_178172__$1;
(statearr_178257_179510[(2)] = inst_177875);

(statearr_178257_179510[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (41))){
var inst_177965 = (state_178172[(35)]);
var inst_177994 = (state_178172[(2)]);
var inst_177999 = oops.state._STAR_runtime_state_STAR_;
var inst_178000 = (new Error());
var inst_178001 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_178002 = oops.state.prepare_state(inst_177965,inst_178000,inst_178001);
var inst_178003 = (oops.state._STAR_runtime_state_STAR_ = inst_178002);
var state_178172__$1 = (function (){var statearr_178259 = state_178172;
(statearr_178259[(51)] = inst_177994);

(statearr_178259[(52)] = inst_177999);

(statearr_178259[(53)] = inst_178003);

return statearr_178259;
})();
var statearr_178260_179511 = state_178172__$1;
(statearr_178260_179511[(2)] = null);

(statearr_178260_179511[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (89))){
var state_178172__$1 = state_178172;
var statearr_178261_179512 = state_178172__$1;
(statearr_178261_179512[(2)] = null);

(statearr_178261_179512[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (43))){
var _ = (function (){var statearr_178262 = state_178172;
(statearr_178262[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178262;
})();
var state_178172__$1 = state_178172;
var ex178258 = (state_178172__$1[(2)]);
var statearr_178263_179513 = state_178172__$1;
(statearr_178263_179513[(5)] = ex178258);


throw ex178258;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (61))){
var inst_178030 = (state_178172[(11)]);
var inst_177812 = (state_178172[(18)]);
var inst_178052 = (inst_178030["disabled"] = inst_177812);
var state_178172__$1 = state_178172;
var statearr_178264_179514 = state_178172__$1;
(statearr_178264_179514[(2)] = inst_178052);

(statearr_178264_179514[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (29))){
var inst_177875 = (state_178172[(17)]);
var inst_177928 = (state_178172[(2)]);
var _ = (function (){var statearr_178265 = state_178172;
(statearr_178265[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178265;
})();
var state_178172__$1 = (function (){var statearr_178266 = state_178172;
(statearr_178266[(54)] = inst_177928);

return statearr_178266;
})();
var statearr_178267_179515 = state_178172__$1;
(statearr_178267_179515[(2)] = inst_177875);

(statearr_178267_179515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (44))){
var inst_177813 = (state_178172[(28)]);
var inst_177965 = (state_178172[(35)]);
var inst_177987 = (inst_177813 == null);
var inst_177988 = (inst_177965["hidden"] = inst_177987);
var state_178172__$1 = state_178172;
var statearr_178268_179516 = state_178172__$1;
(statearr_178268_179516[(2)] = inst_177988);

(statearr_178268_179516[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (93))){
var inst_178131 = (state_178172[(19)]);
var inst_178163 = (state_178172[(2)]);
var inst_178164 = (inst_178131["disabled"] = inst_178163);
var state_178172__$1 = state_178172;
var statearr_178269_179517 = state_178172__$1;
(statearr_178269_179517[(2)] = inst_178164);

(statearr_178269_179517[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (6))){
var inst_177815 = (state_178172[(27)]);
var inst_177812 = (state_178172[(18)]);
var inst_177837 = (inst_177815["disabled"] = inst_177812);
var state_178172__$1 = state_178172;
var statearr_178270_179518 = state_178172__$1;
(statearr_178270_179518[(2)] = inst_177837);

(statearr_178270_179518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (28))){
var state_178172__$1 = state_178172;
var statearr_178271_179519 = state_178172__$1;
(statearr_178271_179519[(2)] = null);

(statearr_178271_179519[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (64))){
var inst_178030 = (state_178172[(11)]);
var _ = (function (){var statearr_178272 = state_178172;
(statearr_178272[(4)] = cljs.core.cons((66),(state_178172[(4)])));

return statearr_178272;
})();
var ___$1 = (function (){var statearr_178273 = state_178172;
(statearr_178273[(4)] = cljs.core.cons((67),(state_178172[(4)])));

return statearr_178273;
})();
var inst_178078 = oops.core.validate_object_access_dynamically(inst_178030,(0),"hidden",true,true,true);
var state_178172__$1 = state_178172;
if(inst_178078){
var statearr_178274_179520 = state_178172__$1;
(statearr_178274_179520[(1)] = (68));

} else {
var statearr_178275_179521 = state_178172__$1;
(statearr_178275_179521[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (51))){
var inst_177812 = (state_178172[(18)]);
var state_178172__$1 = state_178172;
if(cljs.core.truth_(inst_177812)){
var statearr_178276_179522 = state_178172__$1;
(statearr_178276_179522[(1)] = (54));

} else {
var statearr_178277_179523 = state_178172__$1;
(statearr_178277_179523[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (25))){
var inst_177908 = (state_178172[(55)]);
var _ = (function (){var statearr_178278 = state_178172;
(statearr_178278[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178278;
})();
var inst_177914 = (state_178172[(2)]);
var inst_177915 = (oops.state._STAR_runtime_state_STAR_ = inst_177908);
var ___$1 = (function (){var temp__5825__auto__ = (state_178172[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_178172__$1 = (function (){var statearr_178279 = state_178172;
(statearr_178279[(56)] = inst_177915);

return statearr_178279;
})();
var statearr_178280_179524 = state_178172__$1;
(statearr_178280_179524[(2)] = inst_177914);

(statearr_178280_179524[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (34))){
var inst_177813 = (state_178172[(28)]);
var state_178172__$1 = state_178172;
if(cljs.core.truth_(inst_177813)){
var statearr_178281_179525 = state_178172__$1;
(statearr_178281_179525[(1)] = (37));

} else {
var statearr_178282_179526 = state_178172__$1;
(statearr_178282_179526[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (17))){
var inst_177875 = (state_178172[(17)]);
var inst_177903 = (state_178172[(2)]);
var inst_177908 = oops.state._STAR_runtime_state_STAR_;
var inst_177909 = (new Error());
var inst_177910 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_177911 = oops.state.prepare_state(inst_177875,inst_177909,inst_177910);
var inst_177912 = (oops.state._STAR_runtime_state_STAR_ = inst_177911);
var state_178172__$1 = (function (){var statearr_178284 = state_178172;
(statearr_178284[(57)] = inst_177903);

(statearr_178284[(55)] = inst_177908);

(statearr_178284[(58)] = inst_177912);

return statearr_178284;
})();
var statearr_178285_179527 = state_178172__$1;
(statearr_178285_179527[(2)] = null);

(statearr_178285_179527[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (3))){
var inst_177845 = (state_178172[(40)]);
var inst_177843 = (state_178172[(2)]);
var inst_177845__$1 = document.getElementById("snapshot-copy");
var inst_177850 = oops.state._STAR_runtime_state_STAR_;
var inst_177851 = (new Error());
var inst_177852 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_177853 = oops.state.prepare_state(inst_177845__$1,inst_177851,inst_177852);
var inst_177854 = (oops.state._STAR_runtime_state_STAR_ = inst_177853);
var state_178172__$1 = (function (){var statearr_178286 = state_178172;
(statearr_178286[(59)] = inst_177843);

(statearr_178286[(40)] = inst_177845__$1);

(statearr_178286[(60)] = inst_177850);

(statearr_178286[(61)] = inst_177854);

return statearr_178286;
})();
var statearr_178287_179528 = state_178172__$1;
(statearr_178287_179528[(2)] = null);

(statearr_178287_179528[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (12))){
var _ = (function (){var statearr_178288 = state_178172;
(statearr_178288[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178288;
})();
var state_178172__$1 = state_178172;
var ex178283 = (state_178172__$1[(2)]);
var statearr_178289_179529 = state_178172__$1;
(statearr_178289_179529[(5)] = ex178283);


throw ex178283;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (2))){
var inst_177815 = (state_178172[(27)]);
var _ = (function (){var statearr_178290 = state_178172;
(statearr_178290[(4)] = cljs.core.cons((4),(state_178172[(4)])));

return statearr_178290;
})();
var ___$1 = (function (){var statearr_178291 = state_178172;
(statearr_178291[(4)] = cljs.core.cons((5),(state_178172[(4)])));

return statearr_178291;
})();
var inst_177835 = oops.core.validate_object_access_dynamically(inst_177815,(0),"disabled",true,true,true);
var state_178172__$1 = state_178172;
if(inst_177835){
var statearr_178292_179530 = state_178172__$1;
(statearr_178292_179530[(1)] = (6));

} else {
var statearr_178293_179531 = state_178172__$1;
(statearr_178293_179531[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (66))){
var inst_178063 = (state_178172[(23)]);
var _ = (function (){var statearr_178294 = state_178172;
(statearr_178294[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178294;
})();
var inst_178069 = (state_178172[(2)]);
var inst_178070 = (oops.state._STAR_runtime_state_STAR_ = inst_178063);
var ___$1 = (function (){var temp__5825__auto__ = (state_178172[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_178172__$1 = (function (){var statearr_178295 = state_178172;
(statearr_178295[(62)] = inst_178070);

return statearr_178295;
})();
var statearr_178296_179532 = state_178172__$1;
(statearr_178296_179532[(2)] = inst_178069);

(statearr_178296_179532[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (23))){
var inst_177875 = (state_178172[(17)]);
var _ = (function (){var statearr_178297 = state_178172;
(statearr_178297[(4)] = cljs.core.cons((25),(state_178172[(4)])));

return statearr_178297;
})();
var ___$1 = (function (){var statearr_178298 = state_178172;
(statearr_178298[(4)] = cljs.core.cons((26),(state_178172[(4)])));

return statearr_178298;
})();
var inst_177923 = oops.core.validate_object_access_dynamically(inst_177875,(0),"max",true,true,true);
var state_178172__$1 = state_178172;
if(inst_177923){
var statearr_178299_179533 = state_178172__$1;
(statearr_178299_179533[(1)] = (27));

} else {
var statearr_178300_179534 = state_178172__$1;
(statearr_178300_179534[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (47))){
var inst_177965 = (state_178172[(35)]);
var _ = (function (){var statearr_178301 = state_178172;
(statearr_178301[(4)] = cljs.core.cons((49),(state_178172[(4)])));

return statearr_178301;
})();
var ___$1 = (function (){var statearr_178302 = state_178172;
(statearr_178302[(4)] = cljs.core.cons((50),(state_178172[(4)])));

return statearr_178302;
})();
var inst_178014 = oops.core.validate_object_access_dynamically(inst_177965,(0),"disabled",true,true,true);
var state_178172__$1 = state_178172;
if(inst_178014){
var statearr_178303_179535 = state_178172__$1;
(statearr_178303_179535[(1)] = (51));

} else {
var statearr_178304_179536 = state_178172__$1;
(statearr_178304_179536[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (35))){
var state_178172__$1 = state_178172;
var statearr_178305_179537 = state_178172__$1;
(statearr_178305_179537[(2)] = null);

(statearr_178305_179537[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (82))){
var inst_178115 = (state_178172[(63)]);
var state_178172__$1 = state_178172;
var statearr_178307_179538 = state_178172__$1;
(statearr_178307_179538[(2)] = inst_178115);

(statearr_178307_179538[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (76))){
var state_178172__$1 = state_178172;
var statearr_178308_179539 = state_178172__$1;
(statearr_178308_179539[(2)] = null);

(statearr_178308_179539[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (19))){
var _ = (function (){var statearr_178309 = state_178172;
(statearr_178309[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178309;
})();
var state_178172__$1 = state_178172;
var ex178306 = (state_178172__$1[(2)]);
var statearr_178310_179540 = state_178172__$1;
(statearr_178310_179540[(5)] = ex178306);


throw ex178306;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (57))){
var inst_178030 = (state_178172[(11)]);
var _ = (function (){var statearr_178311 = state_178172;
(statearr_178311[(4)] = cljs.core.cons((59),(state_178172[(4)])));

return statearr_178311;
})();
var ___$1 = (function (){var statearr_178312 = state_178172;
(statearr_178312[(4)] = cljs.core.cons((60),(state_178172[(4)])));

return statearr_178312;
})();
var inst_178050 = oops.core.validate_object_access_dynamically(inst_178030,(0),"disabled",true,true,true);
var state_178172__$1 = state_178172;
if(inst_178050){
var statearr_178313_179541 = state_178172__$1;
(statearr_178313_179541[(1)] = (61));

} else {
var statearr_178314_179542 = state_178172__$1;
(statearr_178314_179542[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (68))){
var inst_177813 = (state_178172[(28)]);
var inst_178030 = (state_178172[(11)]);
var inst_178080 = (inst_177813 == null);
var inst_178081 = cljs.core.not(inst_178080);
var inst_178082 = (inst_178030["hidden"] = inst_178081);
var state_178172__$1 = state_178172;
var statearr_178315_179543 = state_178172__$1;
(statearr_178315_179543[(2)] = inst_178082);

(statearr_178315_179543[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (11))){
var inst_177850 = (state_178172[(60)]);
var _ = (function (){var statearr_178317 = state_178172;
(statearr_178317[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178317;
})();
var inst_177856 = (state_178172[(2)]);
var inst_177857 = (oops.state._STAR_runtime_state_STAR_ = inst_177850);
var ___$1 = (function (){var temp__5825__auto__ = (state_178172[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_178172__$1 = (function (){var statearr_178318 = state_178172;
(statearr_178318[(64)] = inst_177857);

return statearr_178318;
})();
var statearr_178319_179544 = state_178172__$1;
(statearr_178319_179544[(2)] = inst_177856);

(statearr_178319_179544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (9))){
var inst_177845 = (state_178172[(40)]);
var _ = (function (){var statearr_178320 = state_178172;
(statearr_178320[(4)] = cljs.core.cons((11),(state_178172[(4)])));

return statearr_178320;
})();
var ___$1 = (function (){var statearr_178321 = state_178172;
(statearr_178321[(4)] = cljs.core.cons((12),(state_178172[(4)])));

return statearr_178321;
})();
var inst_177865 = oops.core.validate_object_access_dynamically(inst_177845,(0),"disabled",true,true,true);
var state_178172__$1 = state_178172;
if(inst_177865){
var statearr_178322_179545 = state_178172__$1;
(statearr_178322_179545[(1)] = (13));

} else {
var statearr_178323_179546 = state_178172__$1;
(statearr_178323_179546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (5))){
var _ = (function (){var statearr_178324 = state_178172;
(statearr_178324[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178324;
})();
var state_178172__$1 = state_178172;
var ex178316 = (state_178172__$1[(2)]);
var statearr_178325_179547 = state_178172__$1;
(statearr_178325_179547[(5)] = ex178316);


throw ex178316;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (83))){
var inst_178120 = (state_178172[(2)]);
var state_178172__$1 = state_178172;
var statearr_178326_179548 = state_178172__$1;
(statearr_178326_179548[(2)] = inst_178120);

(statearr_178326_179548[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (14))){
var state_178172__$1 = state_178172;
var statearr_178327_179549 = state_178172__$1;
(statearr_178327_179549[(2)] = null);

(statearr_178327_179549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (45))){
var state_178172__$1 = state_178172;
var statearr_178328_179550 = state_178172__$1;
(statearr_178328_179550[(2)] = null);

(statearr_178328_179550[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (53))){
var inst_177965 = (state_178172[(35)]);
var inst_178025 = (state_178172[(2)]);
var _ = (function (){var statearr_178330 = state_178172;
(statearr_178330[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178330;
})();
var state_178172__$1 = (function (){var statearr_178331 = state_178172;
(statearr_178331[(65)] = inst_178025);

return statearr_178331;
})();
var statearr_178332_179551 = state_178172__$1;
(statearr_178332_179551[(2)] = inst_177965);

(statearr_178332_179551[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (78))){
var inst_177812 = (state_178172[(18)]);
var state_178172__$1 = state_178172;
var statearr_178333_179552 = state_178172__$1;
(statearr_178333_179552[(2)] = inst_177812);

(statearr_178333_179552[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (26))){
var _ = (function (){var statearr_178334 = state_178172;
(statearr_178334[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178334;
})();
var state_178172__$1 = state_178172;
var ex178329 = (state_178172__$1[(2)]);
var statearr_178335_179553 = state_178172__$1;
(statearr_178335_179553[(5)] = ex178329);


throw ex178329;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (16))){
var inst_177875 = (state_178172[(17)]);
var _ = (function (){var statearr_178336 = state_178172;
(statearr_178336[(4)] = cljs.core.cons((18),(state_178172[(4)])));

return statearr_178336;
})();
var ___$1 = (function (){var statearr_178337 = state_178172;
(statearr_178337[(4)] = cljs.core.cons((19),(state_178172[(4)])));

return statearr_178337;
})();
var inst_177895 = oops.core.validate_object_access_dynamically(inst_177875,(0),"disabled",true,true,true);
var state_178172__$1 = state_178172;
if(inst_177895){
var statearr_178338_179554 = state_178172__$1;
(statearr_178338_179554[(1)] = (20));

} else {
var statearr_178339_179555 = state_178172__$1;
(statearr_178339_179555[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (81))){
var inst_177813 = (state_178172[(28)]);
var inst_178117 = (inst_177813 <= (0));
var state_178172__$1 = state_178172;
var statearr_178340_179556 = state_178172__$1;
(statearr_178340_179556[(2)] = inst_178117);

(statearr_178340_179556[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (79))){
var inst_177813 = (state_178172[(28)]);
var inst_178115 = (state_178172[(63)]);
var inst_178114 = (inst_177813 == null);
var inst_178115__$1 = cljs.core.not(inst_178114);
var state_178172__$1 = (function (){var statearr_178342 = state_178172;
(statearr_178342[(63)] = inst_178115__$1);

return statearr_178342;
})();
if(inst_178115__$1){
var statearr_178343_179557 = state_178172__$1;
(statearr_178343_179557[(1)] = (81));

} else {
var statearr_178344_179558 = state_178172__$1;
(statearr_178344_179558[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (38))){
var inst_177811 = (state_178172[(25)]);
var state_178172__$1 = state_178172;
var statearr_178345_179559 = state_178172__$1;
(statearr_178345_179559[(2)] = inst_177811);

(statearr_178345_179559[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (87))){
var _ = (function (){var statearr_178346 = state_178172;
(statearr_178346[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178346;
})();
var state_178172__$1 = state_178172;
var ex178341 = (state_178172__$1[(2)]);
var statearr_178347_179560 = state_178172__$1;
(statearr_178347_179560[(5)] = ex178341);


throw ex178341;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (30))){
var inst_177875 = (state_178172[(17)]);
var _ = (function (){var statearr_178348 = state_178172;
(statearr_178348[(4)] = cljs.core.cons((32),(state_178172[(4)])));

return statearr_178348;
})();
var ___$1 = (function (){var statearr_178349 = state_178172;
(statearr_178349[(4)] = cljs.core.cons((33),(state_178172[(4)])));

return statearr_178349;
})();
var inst_177951 = oops.core.validate_object_access_dynamically(inst_177875,(0),"value",true,true,true);
var state_178172__$1 = state_178172;
if(inst_177951){
var statearr_178350_179561 = state_178172__$1;
(statearr_178350_179561[(1)] = (34));

} else {
var statearr_178351_179562 = state_178172__$1;
(statearr_178351_179562[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (73))){
var inst_178095 = (state_178172[(9)]);
var _ = (function (){var statearr_178352 = state_178172;
(statearr_178352[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178352;
})();
var inst_178101 = (state_178172[(2)]);
var inst_178102 = (oops.state._STAR_runtime_state_STAR_ = inst_178095);
var ___$1 = (function (){var temp__5825__auto__ = (state_178172[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_178172__$1 = (function (){var statearr_178353 = state_178172;
(statearr_178353[(66)] = inst_178102);

return statearr_178353;
})();
var statearr_178354_179563 = state_178172__$1;
(statearr_178354_179563[(2)] = inst_178101);

(statearr_178354_179563[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (96))){
var inst_178161 = (state_178172[(2)]);
var state_178172__$1 = state_178172;
var statearr_178355_179564 = state_178172__$1;
(statearr_178355_179564[(2)] = inst_178161);

(statearr_178355_179564[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (10))){
var inst_177875 = (state_178172[(17)]);
var inst_177873 = (state_178172[(2)]);
var inst_177875__$1 = document.getElementById("snapshot-range");
var inst_177880 = oops.state._STAR_runtime_state_STAR_;
var inst_177881 = (new Error());
var inst_177882 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_177883 = oops.state.prepare_state(inst_177875__$1,inst_177881,inst_177882);
var inst_177884 = (oops.state._STAR_runtime_state_STAR_ = inst_177883);
var state_178172__$1 = (function (){var statearr_178356 = state_178172;
(statearr_178356[(67)] = inst_177873);

(statearr_178356[(17)] = inst_177875__$1);

(statearr_178356[(68)] = inst_177880);

(statearr_178356[(69)] = inst_177884);

return statearr_178356;
})();
var statearr_178357_179565 = state_178172__$1;
(statearr_178357_179565[(2)] = null);

(statearr_178357_179565[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (18))){
var inst_177880 = (state_178172[(68)]);
var _ = (function (){var statearr_178359 = state_178172;
(statearr_178359[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178359;
})();
var inst_177886 = (state_178172[(2)]);
var inst_177887 = (oops.state._STAR_runtime_state_STAR_ = inst_177880);
var ___$1 = (function (){var temp__5825__auto__ = (state_178172[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_178172__$1 = (function (){var statearr_178360 = state_178172;
(statearr_178360[(70)] = inst_177887);

return statearr_178360;
})();
var statearr_178361_179566 = state_178172__$1;
(statearr_178361_179566[(2)] = inst_177886);

(statearr_178361_179566[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (52))){
var state_178172__$1 = state_178172;
var statearr_178362_179567 = state_178172__$1;
(statearr_178362_179567[(2)] = null);

(statearr_178362_179567[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (67))){
var _ = (function (){var statearr_178363 = state_178172;
(statearr_178363[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178363;
})();
var state_178172__$1 = state_178172;
var ex178358 = (state_178172__$1[(2)]);
var statearr_178364_179568 = state_178172__$1;
(statearr_178364_179568[(5)] = ex178358);


throw ex178358;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (71))){
var inst_178090 = (state_178172[(7)]);
var _ = (function (){var statearr_178365 = state_178172;
(statearr_178365[(4)] = cljs.core.cons((73),(state_178172[(4)])));

return statearr_178365;
})();
var ___$1 = (function (){var statearr_178366 = state_178172;
(statearr_178366[(4)] = cljs.core.cons((74),(state_178172[(4)])));

return statearr_178366;
})();
var inst_178110 = oops.core.validate_object_access_dynamically(inst_178090,(0),"disabled",true,true,true);
var state_178172__$1 = state_178172;
if(inst_178110){
var statearr_178367_179569 = state_178172__$1;
(statearr_178367_179569[(1)] = (75));

} else {
var statearr_178368_179570 = state_178172__$1;
(statearr_178368_179570[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (42))){
var inst_177970 = (state_178172[(45)]);
var _ = (function (){var statearr_178369 = state_178172;
(statearr_178369[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178369;
})();
var inst_177976 = (state_178172[(2)]);
var inst_177977 = (oops.state._STAR_runtime_state_STAR_ = inst_177970);
var ___$1 = (function (){var temp__5825__auto__ = (state_178172[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_178172__$1 = (function (){var statearr_178370 = state_178172;
(statearr_178370[(71)] = inst_177977);

return statearr_178370;
})();
var statearr_178371_179571 = state_178172__$1;
(statearr_178371_179571[(2)] = inst_177976);

(statearr_178371_179571[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (80))){
var inst_178090 = (state_178172[(7)]);
var inst_178122 = (state_178172[(2)]);
var inst_178123 = (inst_178090["disabled"] = inst_178122);
var state_178172__$1 = state_178172;
var statearr_178372_179572 = state_178172__$1;
(statearr_178372_179572[(2)] = inst_178123);

(statearr_178372_179572[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (37))){
var inst_177813 = (state_178172[(28)]);
var state_178172__$1 = state_178172;
var statearr_178373_179573 = state_178172__$1;
(statearr_178373_179573[(2)] = inst_177813);

(statearr_178373_179573[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (63))){
var inst_178030 = (state_178172[(11)]);
var inst_178055 = (state_178172[(2)]);
var _ = (function (){var statearr_178374 = state_178172;
(statearr_178374[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178374;
})();
var state_178172__$1 = (function (){var statearr_178375 = state_178172;
(statearr_178375[(72)] = inst_178055);

return statearr_178375;
})();
var statearr_178376_179574 = state_178172__$1;
(statearr_178376_179574[(2)] = inst_178030);

(statearr_178376_179574[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (94))){
var inst_178156 = (state_178172[(39)]);
var state_178172__$1 = state_178172;
var statearr_178377_179575 = state_178172__$1;
(statearr_178377_179575[(2)] = inst_178156);

(statearr_178377_179575[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (8))){
var inst_177815 = (state_178172[(27)]);
var inst_177840 = (state_178172[(2)]);
var _ = (function (){var statearr_178378 = state_178172;
(statearr_178378[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178378;
})();
var state_178172__$1 = (function (){var statearr_178379 = state_178172;
(statearr_178379[(73)] = inst_177840);

return statearr_178379;
})();
var statearr_178380_179576 = state_178172__$1;
(statearr_178380_179576[(2)] = inst_177815);

(statearr_178380_179576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (49))){
var inst_177999 = (state_178172[(52)]);
var _ = (function (){var statearr_178381 = state_178172;
(statearr_178381[(4)] = cljs.core.rest((state_178172[(4)])));

return statearr_178381;
})();
var inst_178005 = (state_178172[(2)]);
var inst_178006 = (oops.state._STAR_runtime_state_STAR_ = inst_177999);
var ___$1 = (function (){var temp__5825__auto__ = (state_178172[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_178172__$1 = (function (){var statearr_178382 = state_178172;
(statearr_178382[(74)] = inst_178006);

return statearr_178382;
})();
var statearr_178383_179577 = state_178172__$1;
(statearr_178383_179577[(2)] = inst_178005);

(statearr_178383_179577[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178173 === (84))){
var inst_178131 = (state_178172[(19)]);
var _ = (function (){var statearr_178384 = state_178172;
(statearr_178384[(4)] = cljs.core.cons((86),(state_178172[(4)])));

return statearr_178384;
})();
var ___$1 = (function (){var statearr_178385 = state_178172;
(statearr_178385[(4)] = cljs.core.cons((87),(state_178172[(4)])));

return statearr_178385;
})();
var inst_178151 = oops.core.validate_object_access_dynamically(inst_178131,(0),"disabled",true,true,true);
var state_178172__$1 = state_178172;
if(inst_178151){
var statearr_178386_179578 = state_178172__$1;
(statearr_178386_179578[(1)] = (88));

} else {
var statearr_178387_179579 = state_178172__$1;
(statearr_178387_179579[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$update_debug_panel_$_state_machine__18069__auto__ = null;
var teg_online$ui$update_debug_panel_$_state_machine__18069__auto____0 = (function (){
var statearr_178388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_178388[(0)] = teg_online$ui$update_debug_panel_$_state_machine__18069__auto__);

(statearr_178388[(1)] = (1));

return statearr_178388;
});
var teg_online$ui$update_debug_panel_$_state_machine__18069__auto____1 = (function (state_178172){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_178172);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e178389){var ex__18072__auto__ = e178389;
var statearr_178390_179580 = state_178172;
(statearr_178390_179580[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_178172[(4)]))){
var statearr_178391_179581 = state_178172;
(statearr_178391_179581[(1)] = cljs.core.first((state_178172[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179582 = state_178172;
state_178172 = G__179582;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$update_debug_panel_$_state_machine__18069__auto__ = function(state_178172){
switch(arguments.length){
case 0:
return teg_online$ui$update_debug_panel_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$update_debug_panel_$_state_machine__18069__auto____1.call(this,state_178172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$update_debug_panel_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$update_debug_panel_$_state_machine__18069__auto____0;
teg_online$ui$update_debug_panel_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$update_debug_panel_$_state_machine__18069__auto____1;
return teg_online$ui$update_debug_panel_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_178392 = f__19294__auto__();
(statearr_178392[(6)] = c__19293__auto__);

return statearr_178392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.update_ui = (function teg_online$ui$update_ui(state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_178407){
var state_val_178408 = (state_178407[(1)]);
if((state_val_178408 === (1))){
var inst_178393 = teg_online.ui.update_players(state);
var state_178407__$1 = state_178407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_178407__$1,(2),inst_178393);
} else {
if((state_val_178408 === (2))){
var inst_178395 = (state_178407[(2)]);
var inst_178396 = teg_online.ui.update_countries(state);
var state_178407__$1 = (function (){var statearr_178409 = state_178407;
(statearr_178409[(7)] = inst_178395);

return statearr_178409;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_178407__$1,(3),inst_178396);
} else {
if((state_val_178408 === (3))){
var inst_178398 = (state_178407[(2)]);
var inst_178399 = teg_online.ui.update_status_panel(state);
var state_178407__$1 = (function (){var statearr_178410 = state_178407;
(statearr_178410[(8)] = inst_178398);

return statearr_178410;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_178407__$1,(4),inst_178399);
} else {
if((state_val_178408 === (4))){
var inst_178401 = (state_178407[(2)]);
var inst_178402 = teg_online.ui.update_debug_panel(state);
var state_178407__$1 = (function (){var statearr_178411 = state_178407;
(statearr_178411[(9)] = inst_178401);

return statearr_178411;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_178407__$1,(5),inst_178402);
} else {
if((state_val_178408 === (5))){
var inst_178404 = (state_178407[(2)]);
var inst_178405 = teg_online.ui.resize_board();
var state_178407__$1 = (function (){var statearr_178412 = state_178407;
(statearr_178412[(10)] = inst_178404);

return statearr_178412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_178407__$1,inst_178405);
} else {
return null;
}
}
}
}
}
});
return (function() {
var teg_online$ui$update_ui_$_state_machine__18069__auto__ = null;
var teg_online$ui$update_ui_$_state_machine__18069__auto____0 = (function (){
var statearr_178413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_178413[(0)] = teg_online$ui$update_ui_$_state_machine__18069__auto__);

(statearr_178413[(1)] = (1));

return statearr_178413;
});
var teg_online$ui$update_ui_$_state_machine__18069__auto____1 = (function (state_178407){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_178407);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e178414){var ex__18072__auto__ = e178414;
var statearr_178415_179583 = state_178407;
(statearr_178415_179583[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_178407[(4)]))){
var statearr_178416_179584 = state_178407;
(statearr_178416_179584[(1)] = cljs.core.first((state_178407[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179585 = state_178407;
state_178407 = G__179585;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$update_ui_$_state_machine__18069__auto__ = function(state_178407){
switch(arguments.length){
case 0:
return teg_online$ui$update_ui_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$update_ui_$_state_machine__18069__auto____1.call(this,state_178407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$update_ui_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$update_ui_$_state_machine__18069__auto____0;
teg_online$ui$update_ui_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$update_ui_$_state_machine__18069__auto____1;
return teg_online$ui$update_ui_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_178417 = f__19294__auto__();
(statearr_178417[(6)] = c__19293__auto__);

return statearr_178417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
if((typeof teg_online !== 'undefined') && (typeof teg_online.ui !== 'undefined') && (typeof teg_online.ui.reset_user_data !== 'undefined')){
} else {
teg_online.ui.reset_user_data = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__178418 = cljs.core.get_global_hierarchy;
return (fexpr__178418.cljs$core$IFn$_invoke$arity$0 ? fexpr__178418.cljs$core$IFn$_invoke$arity$0() : fexpr__178418.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("teg-online.ui","reset-user-data"),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
teg_online.ui.reset_user_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),(function (game){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining","remaining",-138926777),teg_online.game.get_extra_army(game),new cljs.core.Keyword(null,"additions","additions",-1894561789),cljs.core.PersistentArrayMap.EMPTY], null);
}));
teg_online.ui.reset_user_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-asia","teg-online.game/add-army-asia",1320697977),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remaining","remaining",-138926777),teg_online.board.get_continent_bonus(new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621)),new cljs.core.Keyword(null,"continent","continent",615455043),new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621),new cljs.core.Keyword(null,"additions","additions",-1894561789),cljs.core.PersistentArrayMap.EMPTY], null);
}));
teg_online.ui.reset_user_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-europa","teg-online.game/add-army-europa",-1597820532),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remaining","remaining",-138926777),teg_online.board.get_continent_bonus(new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307)),new cljs.core.Keyword(null,"continent","continent",615455043),new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307),new cljs.core.Keyword(null,"additions","additions",-1894561789),cljs.core.PersistentArrayMap.EMPTY], null);
}));
teg_online.ui.reset_user_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-north-america","teg-online.game/add-army-north-america",-486765231),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remaining","remaining",-138926777),teg_online.board.get_continent_bonus(new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879)),new cljs.core.Keyword(null,"continent","continent",615455043),new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879),new cljs.core.Keyword(null,"additions","additions",-1894561789),cljs.core.PersistentArrayMap.EMPTY], null);
}));
teg_online.ui.reset_user_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-south-america","teg-online.game/add-army-south-america",729961181),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remaining","remaining",-138926777),teg_online.board.get_continent_bonus(new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806)),new cljs.core.Keyword(null,"continent","continent",615455043),new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806),new cljs.core.Keyword(null,"additions","additions",-1894561789),cljs.core.PersistentArrayMap.EMPTY], null);
}));
teg_online.ui.reset_user_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-africa","teg-online.game/add-army-africa",-276823043),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remaining","remaining",-138926777),teg_online.board.get_continent_bonus(new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107)),new cljs.core.Keyword(null,"continent","continent",615455043),new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107),new cljs.core.Keyword(null,"additions","additions",-1894561789),cljs.core.PersistentArrayMap.EMPTY], null);
}));
teg_online.ui.reset_user_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-oceania","teg-online.game/add-army-oceania",1374343553),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remaining","remaining",-138926777),teg_online.board.get_continent_bonus(new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402)),new cljs.core.Keyword(null,"continent","continent",615455043),new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402),new cljs.core.Keyword(null,"additions","additions",-1894561789),cljs.core.PersistentArrayMap.EMPTY], null);
}));
teg_online.ui.reset_user_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382),null], null);
}));
teg_online.ui.reset_user_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","regroup","teg-online.game/regroup",1546790374),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected-country","selected-country",-1278309382),null,new cljs.core.Keyword(null,"regroups","regroups",865077182),cljs.core.PersistentVector.EMPTY], null);
}));
teg_online.ui.reset_user_data.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
teg_online.ui.maybe_reset_user_data = (function teg_online$ui$maybe_reset_user_data(state,p__178419,p__178420){
var map__178421 = p__178419;
var map__178421__$1 = cljs.core.__destructure_map(map__178421);
var old_turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178421__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var old_phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178421__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
var map__178422 = p__178420;
var map__178422__$1 = cljs.core.__destructure_map(map__178422);
var new_game = map__178422__$1;
var new_turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178422__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var new_phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178422__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_phase,old_turn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_phase,new_turn], null))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568)], null),teg_online.ui.reset_user_data.cljs$core$IFn$_invoke$arity$1(new_game));
}
});
teg_online.ui.start_fireworks = (function teg_online$ui$start_fireworks(){
var begin_time = Date.now();
var fireworks = teg_online.utils.minimorphic.appear.cljs$core$IFn$_invoke$arity$3(teg_online.utils.minimorphic.make_morph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(0),new cljs.core.Keyword(null,"width","width",-384071477),(function (){var target_obj_178423 = teg_online.ui.world;
var _STAR_runtime_state_STAR__orig_val__178425 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__178426 = oops.state.prepare_state(target_obj_178423,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__178426);

try{var next_obj_178424 = ((oops.core.validate_object_access_dynamically(target_obj_178423,(0),"width",true,true,false))?(target_obj_178423["width"]):null);
return next_obj_178424;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__178425);
}})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var target_obj_178427 = teg_online.ui.world;
var _STAR_runtime_state_STAR__orig_val__178429 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__178430 = oops.state.prepare_state(target_obj_178427,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__178430);

try{var next_obj_178428 = ((oops.core.validate_object_access_dynamically(target_obj_178427,(0),"height",true,true,false))?(target_obj_178427["height"]):null);
return next_obj_178428;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__178429);
}})()], 0)),(2),0.75);
teg_online.ui.world.addMorph(fireworks);

teg_online.utils.minimorphic.on_step(fireworks,(function (){
if(((((Date.now() - begin_time) < (5000))) && (((((function (){var target_obj_178431 = fireworks;
var _STAR_runtime_state_STAR__orig_val__178433 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__178434 = oops.state.prepare_state(target_obj_178431,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__178434);

try{var next_obj_178432 = ((oops.core.validate_object_access_dynamically(target_obj_178431,(0),"alpha",true,true,false))?(target_obj_178431["alpha"]):null);
return next_obj_178432;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__178433);
}})() >= 0.15)) && ((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < 0.15)))))){
var x = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_178435 = fireworks;
var _STAR_runtime_state_STAR__orig_val__178437 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__178438 = oops.state.prepare_state(target_obj_178435,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__178438);

try{var next_obj_178436 = ((oops.core.validate_object_access_dynamically(target_obj_178435,(0),"width",true,true,false))?(target_obj_178435["width"]):null);
return next_obj_178436;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__178437);
}})());
var y = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_178439 = fireworks;
var _STAR_runtime_state_STAR__orig_val__178441 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__178442 = oops.state.prepare_state(target_obj_178439,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__178442);

try{var next_obj_178440 = ((oops.core.validate_object_access_dynamically(target_obj_178439,(0),"height",true,true,false))?(target_obj_178439["height"]):null);
return next_obj_178440;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__178441);
}})());
var amount = ((150) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((300)));
var min = (0);
var max = ((200) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((400)));
return teg_online.utils.minimorphic.fireworks.cljs$core$IFn$_invoke$arity$variadic(teg_online.ui.world,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"amount","amount",364489504),amount,new cljs.core.Keyword(null,"min-magnitude","min-magnitude",-1505754095),min,new cljs.core.Keyword(null,"max-magnitude","max-magnitude",840618693),max], 0));
} else {
return null;
}
}));

var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_178448){
var state_val_178449 = (state_178448[(1)]);
if((state_val_178449 === (1))){
var inst_178443 = cljs.core.async.timeout((6000));
var state_178448__$1 = state_178448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_178448__$1,(2),inst_178443);
} else {
if((state_val_178449 === (2))){
var inst_178445 = (state_178448[(2)]);
var inst_178446 = teg_online.utils.minimorphic.vanish(fireworks,(1));
var state_178448__$1 = (function (){var statearr_178450 = state_178448;
(statearr_178450[(7)] = inst_178445);

return statearr_178450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_178448__$1,inst_178446);
} else {
return null;
}
}
});
return (function() {
var teg_online$ui$start_fireworks_$_state_machine__18069__auto__ = null;
var teg_online$ui$start_fireworks_$_state_machine__18069__auto____0 = (function (){
var statearr_178451 = [null,null,null,null,null,null,null,null];
(statearr_178451[(0)] = teg_online$ui$start_fireworks_$_state_machine__18069__auto__);

(statearr_178451[(1)] = (1));

return statearr_178451;
});
var teg_online$ui$start_fireworks_$_state_machine__18069__auto____1 = (function (state_178448){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_178448);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e178452){var ex__18072__auto__ = e178452;
var statearr_178453_179586 = state_178448;
(statearr_178453_179586[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_178448[(4)]))){
var statearr_178454_179587 = state_178448;
(statearr_178454_179587[(1)] = cljs.core.first((state_178448[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179588 = state_178448;
state_178448 = G__179588;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$start_fireworks_$_state_machine__18069__auto__ = function(state_178448){
switch(arguments.length){
case 0:
return teg_online$ui$start_fireworks_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$start_fireworks_$_state_machine__18069__auto____1.call(this,state_178448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$start_fireworks_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$start_fireworks_$_state_machine__18069__auto____0;
teg_online$ui$start_fireworks_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$start_fireworks_$_state_machine__18069__auto____1;
return teg_online$ui$start_fireworks_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_178455 = f__19294__auto__();
(statearr_178455[(6)] = c__19293__auto__);

return statearr_178455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.maybe_show_forced_exchange_dialog = (function teg_online$ui$maybe_show_forced_exchange_dialog(state,p__178456,p__178457){
var map__178458 = p__178456;
var map__178458__$1 = cljs.core.__destructure_map(map__178458);
var old_turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178458__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var old_phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178458__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
var map__178459 = p__178457;
var map__178459__$1 = cljs.core.__destructure_map(map__178459);
var new_game = map__178459__$1;
var new_turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178459__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var new_phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178459__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
return null;
});
teg_online.ui.maybe_show_secret_goal_dialog = (function teg_online$ui$maybe_show_secret_goal_dialog(state,old_game,new_game){
if(teg_online.game.game_over_QMARK_(new_game)){
return null;
} else {
var user_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"id","id",-1388402092));
var map__178460 = teg_online.game.get_player_goal(new_game,user_id);
var map__178460__$1 = cljs.core.__destructure_map(map__178460);
var secret_goal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178460__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_((function (){var and__5160__auto__ = secret_goal;
if(cljs.core.truth_(and__5160__auto__)){
return (teg_online.game.get_player_goal(old_game,user_id) == null);
} else {
return and__5160__auto__;
}
})())){
return teg_online.utils.bootstrap.alert.cljs$core$IFn$_invoke$arity$variadic("Objetivo secreto",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([secret_goal], 0));
} else {
return null;
}
}
});
teg_online.ui.maybe_show_game_over_dialog = (function teg_online$ui$maybe_show_game_over_dialog(state,old_game,new_game){
if(cljs.core.truth_((function (){var and__5160__auto__ = (new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(old_game) == null);
if(and__5160__auto__){
return new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(new_game);
} else {
return and__5160__auto__;
}
})())){
if(((true) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(new_game))))){
teg_online.ui.start_fireworks();
} else {
}

return teg_online.utils.bootstrap.alert.cljs$core$IFn$_invoke$arity$variadic("Fin del juego",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var winner = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(new_game);
var winner_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(teg_online.game.get_player(new_game,winner));
var secret_goal = teg_online.game.get_player_goal(new_game,winner);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"El ganador es "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fw-bolder.text-nowrap","span.fw-bolder.text-nowrap",1838451643),winner_name], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.m-2","div.row.m-2",-260950428)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-angle-right.me-2","i.fas.fa-angle-right.me-2",1234155401)], null),(cljs.core.truth_((function (){var and__5160__auto__ = secret_goal;
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = (secret_goal.cljs$core$IFn$_invoke$arity$1 ? secret_goal.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070)) : secret_goal.call(null,new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070)));
if(cljs.core.truth_(and__5160__auto____$1)){
var and__5160__auto____$2 = old_game;
if(cljs.core.truth_(and__5160__auto____$2)){
var and__5160__auto____$3 = new_game;
if(cljs.core.truth_(and__5160__auto____$3)){
return winner;
} else {
return and__5160__auto____$3;
}
} else {
return and__5160__auto____$2;
}
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})())?(secret_goal.cljs$core$IFn$_invoke$arity$1 ? secret_goal.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)) : secret_goal.call(null,new cljs.core.Keyword(null,"name","name",1843675177))):(cljs.core.truth_((function (){var fexpr__178461 = (teg_online.game.common_goal.cljs$core$IFn$_invoke$arity$1 ? teg_online.game.common_goal.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070)) : teg_online.game.common_goal.call(null,new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070)));
return (fexpr__178461.cljs$core$IFn$_invoke$arity$3 ? fexpr__178461.cljs$core$IFn$_invoke$arity$3(old_game,new_game,winner) : fexpr__178461.call(null,old_game,new_game,winner));
})())?(teg_online.game.common_goal.cljs$core$IFn$_invoke$arity$1 ? teg_online.game.common_goal.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)) : teg_online.game.common_goal.call(null,new cljs.core.Keyword(null,"name","name",1843675177))):(secret_goal.cljs$core$IFn$_invoke$arity$1 ? secret_goal.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)) : secret_goal.call(null,new cljs.core.Keyword(null,"name","name",1843675177)))))], null)], null)], null);
})()], 0));
} else {
return null;
}
});
teg_online.ui.maybe_show_turn_notification = (function teg_online$ui$maybe_show_turn_notification(state,p__178462,p__178463){
var map__178464 = p__178462;
var map__178464__$1 = cljs.core.__destructure_map(map__178464);
var old_turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178464__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var map__178465 = p__178463;
var map__178465__$1 = cljs.core.__destructure_map(map__178465);
var new_game = map__178465__$1;
var new_turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178465__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
if(teg_online.game.game_over_QMARK_(new_game)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_turn,new_turn)){
return null;
} else {
if((new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))) == null)){
return teg_online.ui.show_toast(((teg_online.ui.is_my_turn_QMARK_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new_game))?"\u00A1Es tu turno!":(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Es el turno de "], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fw-bolder.text-nowrap","span.fw-bolder.text-nowrap",1838451643),teg_online.game.get_current_player_name(new_game)], null),null,(1),null)),(2),null))));
} else {
return null;
}
}
}
});
teg_online.ui.maybe_show_phase_notification = (function teg_online$ui$maybe_show_phase_notification(state,p__178466,p__178467){
var map__178468 = p__178466;
var map__178468__$1 = cljs.core.__destructure_map(map__178468);
var old_turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178468__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var old_phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178468__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
var map__178469 = p__178467;
var map__178469__$1 = cljs.core.__destructure_map(map__178469);
var new_game = map__178469__$1;
var new_turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178469__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var new_phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178469__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
if(teg_online.game.game_over_QMARK_(new_game)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_phase,old_turn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_phase,new_turn], null))){
return null;
} else {
if(((teg_online.ui.is_my_turn_QMARK_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new_game)) && (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new_phase,new cljs.core.Keyword("teg-online.game","add-army-continent","teg-online.game/add-army-continent",-1282273691))))){
return teg_online.ui.show_toast(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Incorporar %1 ej\u00E9rcitos en %2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"remaining","remaining",-138926777)], null)),teg_online.board.get_continent_name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"user-data","user-data",2143823568),new cljs.core.Keyword(null,"continent","continent",615455043)], null)))], 0)));
} else {
return null;
}
}
}
});
teg_online.ui.maybe_show_exchange_notification = (function teg_online$ui$maybe_show_exchange_notification(state,old_game,new_game){
if(teg_online.game.game_over_QMARK_(new_game)){
return null;
} else {
if(teg_online.ui.is_my_turn_QMARK_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new_game)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(old_game),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(new_game))){
var player_id = teg_online.game.get_current_player(new_game);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player_id,new cljs.core.Keyword(null,"exchanges","exchanges",-764358941)], null)) > cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player_id,new cljs.core.Keyword(null,"exchanges","exchanges",-764358941)], null)))){
var exchanges = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player_id,new cljs.core.Keyword(null,"exchanges","exchanges",-764358941)], null));
if((exchanges <= (10))){
return teg_online.ui.show_toast(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("%1 realiz\u00F3 su %2 canje",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.game.get_current_player_name(new_game),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["primer","segundo","tercer","cuarto","quinto","sexto","s\u00E9ptimo","octavo","noveno","d\u00E9cimo"], null),(exchanges - (1)))], 0)));
} else {
return teg_online.ui.show_toast(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("%1 realiz\u00F3 su canje n\u00FAmero %2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.game.get_current_player_name(new_game),exchanges], 0)));
}
} else {
return null;
}
} else {
return null;
}
}
}
});
teg_online.ui.maybe_show_moving_army_effect = (function teg_online$ui$maybe_show_moving_army_effect(state,old_game,new_game){
if(teg_online.game.game_over_QMARK_(new_game)){
return null;
} else {
var seq__178470 = cljs.core.seq(cljs.core.keys(teg_online.board.countries));
var chunk__178471 = null;
var count__178472 = (0);
var i__178473 = (0);
while(true){
if((i__178473 < count__178472)){
var country = chunk__178471.cljs$core$IIndexed$_nth$arity$2(null,i__178473);
var temp__5825__auto___179589 = (teg_online.game.get_army(new_game,country) - teg_online.game.get_army(old_game,country));
if(cljs.core.truth_(temp__5825__auto___179589)){
var delta_army_179590 = temp__5825__auto___179589;
if((delta_army_179590 === (0))){
} else {
teg_online.ui.moved_army_effect(state,country,delta_army_179590);
}
} else {
}


var G__179591 = seq__178470;
var G__179592 = chunk__178471;
var G__179593 = count__178472;
var G__179594 = (i__178473 + (1));
seq__178470 = G__179591;
chunk__178471 = G__179592;
count__178472 = G__179593;
i__178473 = G__179594;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__178470);
if(temp__5825__auto__){
var seq__178470__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__178470__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__178470__$1);
var G__179595 = cljs.core.chunk_rest(seq__178470__$1);
var G__179596 = c__5694__auto__;
var G__179597 = cljs.core.count(c__5694__auto__);
var G__179598 = (0);
seq__178470 = G__179595;
chunk__178471 = G__179596;
count__178472 = G__179597;
i__178473 = G__179598;
continue;
} else {
var country = cljs.core.first(seq__178470__$1);
var temp__5825__auto___179599__$1 = (teg_online.game.get_army(new_game,country) - teg_online.game.get_army(old_game,country));
if(cljs.core.truth_(temp__5825__auto___179599__$1)){
var delta_army_179600 = temp__5825__auto___179599__$1;
if((delta_army_179600 === (0))){
} else {
teg_online.ui.moved_army_effect(state,country,delta_army_179600);
}
} else {
}


var G__179601 = cljs.core.next(seq__178470__$1);
var G__179602 = null;
var G__179603 = (0);
var G__179604 = (0);
seq__178470 = G__179601;
chunk__178471 = G__179602;
count__178472 = G__179603;
i__178473 = G__179604;
continue;
}
} else {
return null;
}
}
break;
}
}
});
teg_online.ui.update_response_item_BANG_ = (function teg_online$ui$update_response_item_BANG_(model_name,response,header,body,select_response_BANG_){
var temp__5823__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(temp__5823__auto__)){
var error = temp__5823__auto__;
var G__178474_179605 = header;
var target_obj_178475_179606 = G__178474_179605;
var _STAR_runtime_state_STAR__orig_val__178477_179607 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__178478_179608 = oops.state.prepare_state(target_obj_178475_179606,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__178478_179608);

try{var parent_obj_178476_179609 = target_obj_178475_179606;
if(oops.core.validate_object_access_dynamically(parent_obj_178476_179609,(0),"innerText",true,true,true)){
(parent_obj_178476_179609["innerText"] = "");
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__178477_179607);
}
G__178474_179605.appendChild(crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.align-items-center.w-100","div.d-flex.align-items-center.w-100",-1061541156),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"status"], null),model_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ms-auto.me-3.text-danger","span.ms-auto.me-3.text-danger",-694765400),"ERROR"], null)], null)], 0)));


var G__178479 = body;
var target_obj_178480_179610 = G__178479;
var _STAR_runtime_state_STAR__orig_val__178482_179611 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__178483_179612 = oops.state.prepare_state(target_obj_178480_179610,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__178483_179612);

try{var parent_obj_178481_179613 = target_obj_178480_179610;
if(oops.core.validate_object_access_dynamically(parent_obj_178481_179613,(0),"innerText",true,true,true)){
(parent_obj_178481_179613["innerText"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = cljs.core.ex_data(error);
if(cljs.core.truth_(temp__5825__auto__)){
var map__178484 = temp__5825__auto__;
var map__178484__$1 = cljs.core.__destructure_map(map__178484);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178484__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (error_msg){
if(clojure.string.blank_QMARK_(error_msg)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_msg)+"\n\n");
}
}),errors));
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(error))));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__178482_179611);
}
return G__178479;
} else {
var delta_score = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(response);
var G__178485_179614 = header;
var target_obj_178486_179615 = G__178485_179614;
var _STAR_runtime_state_STAR__orig_val__178488_179616 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__178489_179617 = oops.state.prepare_state(target_obj_178486_179615,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__178489_179617);

try{var parent_obj_178487_179618 = target_obj_178486_179615;
if(oops.core.validate_object_access_dynamically(parent_obj_178487_179618,(0),"innerText",true,true,true)){
(parent_obj_178487_179618["innerText"] = "");
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__178488_179616);
}
G__178485_179614.appendChild(crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.align-items-center.w-100","div.d-flex.align-items-center.w-100",-1061541156),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"status"], null),model_name], null),(function (){var score = new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(delta_score);
var formatted_score = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((score > (0)))?"+":""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * score).toFixed((2))));
var base_tag = new cljs.core.Keyword(null,"span.ms-auto.me-3","span.ms-auto.me-3",1011691132);
var tag = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_tag)),(1)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((score > (0)))?".text-success":(((score < (0)))?".text-danger":".text-secondary"
)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,formatted_score], null);
})()], null)], 0)));


var G__178490_179619 = body;
var target_obj_178491_179620 = G__178490_179619;
var _STAR_runtime_state_STAR__orig_val__178493_179621 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__178494_179622 = oops.state.prepare_state(target_obj_178491_179620,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__178494_179622);

try{var parent_obj_178492_179623 = target_obj_178491_179620;
if(oops.core.validate_object_access_dynamically(parent_obj_178492_179623,(0),"innerText",true,true,true)){
(parent_obj_178492_179623["innerText"] = "");
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__178493_179621);
}
var target_obj_178495_179624 = G__178490_179619;
var _STAR_runtime_state_STAR__orig_val__178498_179625 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__178499_179626 = oops.state.prepare_state(target_obj_178495_179624,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__178499_179626);

try{var parent_obj_178496_179627 = (function (){var next_obj_178497 = ((oops.core.validate_object_access_dynamically(target_obj_178495_179624,(0),"style",true,true,false))?(target_obj_178495_179624["style"]):null);
return next_obj_178497;
})();
if(oops.core.validate_object_access_dynamically(parent_obj_178496_179627,(0),"max-height",true,true,true)){
(parent_obj_178496_179627["max-height"] = "500px");
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__178498_179625);
}
var target_obj_178500_179628 = G__178490_179619;
var _STAR_runtime_state_STAR__orig_val__178503_179629 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__178504_179630 = oops.state.prepare_state(target_obj_178500_179628,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__178504_179630);

try{var parent_obj_178501_179631 = (function (){var next_obj_178502 = ((oops.core.validate_object_access_dynamically(target_obj_178500_179628,(0),"style",true,true,false))?(target_obj_178500_179628["style"]):null);
return next_obj_178502;
})();
if(oops.core.validate_object_access_dynamically(parent_obj_178501_179631,(0),"overflow",true,true,true)){
(parent_obj_178501_179631["overflow"] = "scroll");
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__178503_179629);
}

var seq__178505_179632 = cljs.core.seq(new cljs.core.Keyword(null,"conversation","conversation",1148767509).cljs$core$IFn$_invoke$arity$1(response));
var chunk__178506_179633 = null;
var count__178507_179634 = (0);
var i__178508_179635 = (0);
while(true){
if((i__178508_179635 < count__178507_179634)){
var conv_179636 = chunk__178506_179633.cljs$core$IIndexed$_nth$arity$2(null,i__178508_179635);
var vec__178517_179637 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(conv_179636,/\n/,(2));
var header_179638__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__178517_179637,(0),null);
var content_179639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__178517_179637,(1),null);
var G__178520_179640 = body;
G__178520_179640.appendChild(crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),header_179638__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),content_179639], null)], null)], null)], 0)));



var G__179641 = seq__178505_179632;
var G__179642 = chunk__178506_179633;
var G__179643 = count__178507_179634;
var G__179644 = (i__178508_179635 + (1));
seq__178505_179632 = G__179641;
chunk__178506_179633 = G__179642;
count__178507_179634 = G__179643;
i__178508_179635 = G__179644;
continue;
} else {
var temp__5825__auto___179645 = cljs.core.seq(seq__178505_179632);
if(temp__5825__auto___179645){
var seq__178505_179646__$1 = temp__5825__auto___179645;
if(cljs.core.chunked_seq_QMARK_(seq__178505_179646__$1)){
var c__5694__auto___179647 = cljs.core.chunk_first(seq__178505_179646__$1);
var G__179648 = cljs.core.chunk_rest(seq__178505_179646__$1);
var G__179649 = c__5694__auto___179647;
var G__179650 = cljs.core.count(c__5694__auto___179647);
var G__179651 = (0);
seq__178505_179632 = G__179648;
chunk__178506_179633 = G__179649;
count__178507_179634 = G__179650;
i__178508_179635 = G__179651;
continue;
} else {
var conv_179652 = cljs.core.first(seq__178505_179646__$1);
var vec__178521_179653 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(conv_179652,/\n/,(2));
var header_179654__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__178521_179653,(0),null);
var content_179655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__178521_179653,(1),null);
var G__178524_179656 = body;
G__178524_179656.appendChild(crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),header_179654__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),content_179655], null)], null)], null)], 0)));



var G__179657 = cljs.core.next(seq__178505_179646__$1);
var G__179658 = null;
var G__179659 = (0);
var G__179660 = (0);
seq__178505_179632 = G__179657;
chunk__178506_179633 = G__179658;
count__178507_179634 = G__179659;
i__178508_179635 = G__179660;
continue;
}
} else {
}
}
break;
}

var G__178525 = body;
G__178525.appendChild(crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.my-3","p.my-3",1487176057),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Actions"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (action){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(action,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stream","stream",1534941648),null], 0))], null);
}),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(response))], null)], 0)));

G__178525.appendChild(crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.my-2","p.my-2",-1911869245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Score"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),"Normalized (mean):   ",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(delta_score) > (0)))?"+":""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(delta_score)).toFixed((2)))),"\n","Absolute (mean):     ",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"absolute","absolute",1655386478).cljs$core$IFn$_invoke$arity$1(delta_score) > (0)))?"+":""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"absolute","absolute",1655386478).cljs$core$IFn$_invoke$arity$1(delta_score).toFixed((2))))], null)], null)], 0)));

G__178525.appendChild((function (){var G__178526 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),"Aplicar"], null)], 0));
teg_online.utils.bootstrap.on_click(G__178526,(function (){
return (select_response_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_response_BANG_.cljs$core$IFn$_invoke$arity$1(response) : select_response_BANG_.call(null,response));
}));

return G__178526;
})());

return G__178525;
}
});
teg_online.ui.make_response_item_BANG_ = (function teg_online$ui$make_response_item_BANG_(idx,model,response_chan,select_response_BANG_){
var model_name = new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(model);
var header = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.align-items-center.w-100","div.d-flex.align-items-center.w-100",-1061541156),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"status"], null),model_name], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spinner-border.spinner-border-sm.ms-auto.me-3","div.spinner-border.spinner-border-sm.ms-auto.me-3",-1235923740)], null)], null)], 0));
var body = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accordion-body","div.accordion-body",1303030834),"Thinking..."], null)], 0));
var item = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accordion-item","div.accordion-item",811899788),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.accordion-header","h2.accordion-header",1143765791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"heading"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.accordion-button.collapsed","button.accordion-button.collapsed",1540860780),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-toggle","data-bs-toggle",-1489706489),"collapse",new cljs.core.Keyword(null,"data-bs-target","data-bs-target",-1732916680),(""+"#collapse"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),(""+"collapse"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null),header], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accordion-collapse.collapse","div.accordion-collapse.collapse",-1413338885),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"collapse"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),(""+"heading"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),new cljs.core.Keyword(null,"data-bs-parent","data-bs-parent",1700978230),"#accordion"], null),body], null)], null);
var c__19293__auto___179661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_178532){
var state_val_178533 = (state_178532[(1)]);
if((state_val_178533 === (1))){
var state_178532__$1 = state_178532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_178532__$1,(2),response_chan);
} else {
if((state_val_178533 === (2))){
var inst_178528 = (state_178532[(2)]);
var inst_178529 = teg_online.utils.async.throw_err(inst_178528);
var inst_178530 = teg_online.ui.update_response_item_BANG_(model_name,inst_178529,header,body,select_response_BANG_);
var state_178532__$1 = state_178532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_178532__$1,inst_178530);
} else {
return null;
}
}
});
return (function() {
var teg_online$ui$make_response_item_BANG__$_state_machine__18069__auto__ = null;
var teg_online$ui$make_response_item_BANG__$_state_machine__18069__auto____0 = (function (){
var statearr_178534 = [null,null,null,null,null,null,null];
(statearr_178534[(0)] = teg_online$ui$make_response_item_BANG__$_state_machine__18069__auto__);

(statearr_178534[(1)] = (1));

return statearr_178534;
});
var teg_online$ui$make_response_item_BANG__$_state_machine__18069__auto____1 = (function (state_178532){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_178532);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e178535){var ex__18072__auto__ = e178535;
var statearr_178536_179662 = state_178532;
(statearr_178536_179662[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_178532[(4)]))){
var statearr_178537_179663 = state_178532;
(statearr_178537_179663[(1)] = cljs.core.first((state_178532[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179664 = state_178532;
state_178532 = G__179664;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$make_response_item_BANG__$_state_machine__18069__auto__ = function(state_178532){
switch(arguments.length){
case 0:
return teg_online$ui$make_response_item_BANG__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$make_response_item_BANG__$_state_machine__18069__auto____1.call(this,state_178532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$make_response_item_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$make_response_item_BANG__$_state_machine__18069__auto____0;
teg_online$ui$make_response_item_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$make_response_item_BANG__$_state_machine__18069__auto____1;
return teg_online$ui$make_response_item_BANG__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_178538 = f__19294__auto__();
(statearr_178538[(6)] = c__19293__auto___179661);

return statearr_178538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));


return item;
});
teg_online.ui.show_ai_response_modal = (function teg_online$ui$show_ai_response_modal(responses){
var selected_response = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var select_response_BANG_ = (function (p1__178539_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(selected_response,p1__178539_SHARP_);
});
var modal = teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.font-monospace","h5.font-monospace",203591762),"Preguntando a la IA"], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.overflow-hidden","div.container.overflow-hidden",690631468),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#accordion.accordion.font-monospace","div#accordion.accordion.font-monospace",142478113),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,model){
var temp__5825__auto__ = (function (){var G__178540 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(model);
return (responses.cljs$core$IFn$_invoke$arity$1 ? responses.cljs$core$IFn$_invoke$arity$1(G__178540) : responses.call(null,G__178540));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var response_chan = temp__5825__auto__;
return teg_online.ui.make_response_item_BANG_(i,model,response_chan,select_response_BANG_);
} else {
return null;
}
}),teg_online.ai.models.models))], null)], null)], null)], 0));
var G__178541_179665 = modal;
makeDraggable(G__178541_179665);

teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$2(G__178541_179665,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),"static",new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),false], null));


var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_178547){
var state_val_178548 = (state_178547[(1)]);
if((state_val_178548 === (1))){
var state_178547__$1 = state_178547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_178547__$1,(2),selected_response);
} else {
if((state_val_178548 === (2))){
var inst_178543 = (state_178547[(2)]);
var inst_178544 = teg_online.utils.async.throw_err(inst_178543);
var inst_178545 = teg_online.utils.bootstrap.hide_modal(modal);
var state_178547__$1 = (function (){var statearr_178549 = state_178547;
(statearr_178549[(7)] = inst_178545);

return statearr_178549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_178547__$1,inst_178544);
} else {
return null;
}
}
});
return (function() {
var teg_online$ui$show_ai_response_modal_$_state_machine__18069__auto__ = null;
var teg_online$ui$show_ai_response_modal_$_state_machine__18069__auto____0 = (function (){
var statearr_178550 = [null,null,null,null,null,null,null,null];
(statearr_178550[(0)] = teg_online$ui$show_ai_response_modal_$_state_machine__18069__auto__);

(statearr_178550[(1)] = (1));

return statearr_178550;
});
var teg_online$ui$show_ai_response_modal_$_state_machine__18069__auto____1 = (function (state_178547){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_178547);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e178551){var ex__18072__auto__ = e178551;
var statearr_178552_179666 = state_178547;
(statearr_178552_179666[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_178547[(4)]))){
var statearr_178553_179667 = state_178547;
(statearr_178553_179667[(1)] = cljs.core.first((state_178547[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179668 = state_178547;
state_178547 = G__179668;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$show_ai_response_modal_$_state_machine__18069__auto__ = function(state_178547){
switch(arguments.length){
case 0:
return teg_online$ui$show_ai_response_modal_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$show_ai_response_modal_$_state_machine__18069__auto____1.call(this,state_178547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$show_ai_response_modal_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$show_ai_response_modal_$_state_machine__18069__auto____0;
teg_online$ui$show_ai_response_modal_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$show_ai_response_modal_$_state_machine__18069__auto____1;
return teg_online$ui$show_ai_response_modal_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_178554 = f__19294__auto__();
(statearr_178554[(6)] = c__19293__auto__);

return statearr_178554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.try_update_ai_BANG_ = (function teg_online$ui$try_update_ai_BANG_(state,p__178556){
var map__178557 = p__178556;
var map__178557__$1 = cljs.core.__destructure_map(map__178557);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__178557__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_178621){
var state_val_178622 = (state_178621[(1)]);
if((state_val_178622 === (7))){
var inst_178569 = (state_178621[(7)]);
var inst_178572 = (state_178621[(2)]);
var inst_178574 = cljs.core.count(inst_178569);
var inst_178575 = (inst_178574 > (1));
var state_178621__$1 = (function (){var statearr_178623 = state_178621;
(statearr_178623[(8)] = inst_178572);

return statearr_178623;
})();
if(cljs.core.truth_(inst_178575)){
var statearr_178624_179669 = state_178621__$1;
(statearr_178624_179669[(1)] = (8));

} else {
var statearr_178625_179670 = state_178621__$1;
(statearr_178625_179670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (20))){
var inst_178559 = (state_178621[(9)]);
var inst_178591 = (state_178621[(10)]);
var inst_178606 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,inst_178559,inst_178591);
var inst_178559__$1 = inst_178606;
var state_178621__$1 = (function (){var statearr_178626 = state_178621;
(statearr_178626[(9)] = inst_178559__$1);

return statearr_178626;
})();
var statearr_178627_179671 = state_178621__$1;
(statearr_178627_179671[(2)] = null);

(statearr_178627_179671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (1))){
var inst_178558 = cljs.core.PersistentVector.EMPTY;
var inst_178559 = inst_178558;
var state_178621__$1 = (function (){var statearr_178628 = state_178621;
(statearr_178628[(9)] = inst_178559);

return statearr_178628;
})();
var statearr_178629_179672 = state_178621__$1;
(statearr_178629_179672[(2)] = null);

(statearr_178629_179672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (4))){
var state_178621__$1 = state_178621;
var statearr_178630_179673 = state_178621__$1;
(statearr_178630_179673[(2)] = teg_online.ai.models.models);

(statearr_178630_179673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (15))){
var inst_178617 = (state_178621[(2)]);
var state_178621__$1 = state_178621;
var statearr_178631_179674 = state_178621__$1;
(statearr_178631_179674[(2)] = inst_178617);

(statearr_178631_179674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (21))){
var inst_178609 = (state_178621[(2)]);
var state_178621__$1 = state_178621;
var statearr_178632_179675 = state_178621__$1;
(statearr_178632_179675[(2)] = inst_178609);

(statearr_178632_179675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (13))){
var inst_178598 = cljs.core.deref(state);
var inst_178599 = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(inst_178598);
var inst_178600 = new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692).cljs$core$IFn$_invoke$arity$1(inst_178599);
var inst_178601 = (inst_178600 == null);
var state_178621__$1 = state_178621;
if(cljs.core.truth_(inst_178601)){
var statearr_178633_179676 = state_178621__$1;
(statearr_178633_179676[(1)] = (16));

} else {
var statearr_178634_179677 = state_178621__$1;
(statearr_178634_179677[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (6))){
var inst_178561 = (state_178621[(11)]);
var inst_178559 = (state_178621[(9)]);
var inst_178568 = (state_178621[(2)]);
var inst_178569 = teg_online.ai.client.ask_BANG_.cljs$core$IFn$_invoke$arity$3(inst_178561,inst_178559,inst_178568);
var inst_178570 = cljs.core.async.timeout((1500));
var state_178621__$1 = (function (){var statearr_178635 = state_178621;
(statearr_178635[(7)] = inst_178569);

return statearr_178635;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_178621__$1,(7),inst_178570);
} else {
if((state_val_178622 === (17))){
var inst_178611 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Game is paused! Ignoring AI response..."], 0));
var state_178621__$1 = state_178621;
var statearr_178636_179678 = state_178621__$1;
(statearr_178636_179678[(2)] = inst_178611);

(statearr_178636_179678[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (3))){
var inst_178619 = (state_178621[(2)]);
var state_178621__$1 = state_178621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_178621__$1,inst_178619);
} else {
if((state_val_178622 === (12))){
var inst_178584 = (state_178621[(2)]);
var inst_178585 = teg_online.utils.async.throw_err(inst_178584);
var state_178621__$1 = state_178621;
var statearr_178637_179679 = state_178621__$1;
(statearr_178637_179679[(2)] = inst_178585);

(statearr_178637_179679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (2))){
var inst_178561 = cljs.core.deref(state);
var inst_178562 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"debug","debug",-1608172596),type);
var state_178621__$1 = (function (){var statearr_178638 = state_178621;
(statearr_178638[(11)] = inst_178561);

return statearr_178638;
})();
if(inst_178562){
var statearr_178639_179680 = state_178621__$1;
(statearr_178639_179680[(1)] = (4));

} else {
var statearr_178640_179681 = state_178621__$1;
(statearr_178640_179681[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (19))){
var state_178621__$1 = state_178621;
var statearr_178641_179682 = state_178621__$1;
(statearr_178641_179682[(2)] = null);

(statearr_178641_179682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (11))){
var inst_178579 = (state_178621[(2)]);
var inst_178580 = teg_online.utils.async.throw_err(inst_178579);
var state_178621__$1 = state_178621;
var statearr_178642_179683 = state_178621__$1;
(statearr_178642_179683[(2)] = inst_178580);

(statearr_178642_179683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (9))){
var inst_178569 = (state_178621[(7)]);
var inst_178582 = (inst_178569.cljs$core$IFn$_invoke$arity$1 ? inst_178569.cljs$core$IFn$_invoke$arity$1(type) : inst_178569.call(null,type));
var state_178621__$1 = state_178621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_178621__$1,(12),inst_178582);
} else {
if((state_val_178622 === (5))){
var inst_178559 = (state_178621[(9)]);
var inst_178565 = (function (){var turn_actions = inst_178559;
return (function (p1__178555_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__178555_SHARP_),type);
});
})();
var inst_178566 = cljs.core.filterv(inst_178565,teg_online.ai.models.models);
var state_178621__$1 = state_178621;
var statearr_178643_179684 = state_178621__$1;
(statearr_178643_179684[(2)] = inst_178566);

(statearr_178643_179684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (14))){
var inst_178615 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Different game! Ignoring AI response..."], 0));
var state_178621__$1 = state_178621;
var statearr_178644_179685 = state_178621__$1;
(statearr_178644_179685[(2)] = inst_178615);

(statearr_178644_179685[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (16))){
var inst_178592 = (state_178621[(12)]);
var inst_178590 = (state_178621[(13)]);
var inst_178603 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"game","game",-441523833),inst_178592);
var state_178621__$1 = (function (){var statearr_178645 = state_178621;
(statearr_178645[(14)] = inst_178603);

return statearr_178645;
})();
if(cljs.core.truth_(inst_178590)){
var statearr_178646_179686 = state_178621__$1;
(statearr_178646_179686[(1)] = (19));

} else {
var statearr_178647_179687 = state_178621__$1;
(statearr_178647_179687[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (10))){
var inst_178587 = (state_178621[(2)]);
var inst_178588 = cljs.core.__destructure_map(inst_178587);
var inst_178589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_178588,new cljs.core.Keyword(null,"original-state","original-state",-1223338677));
var inst_178590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_178588,new cljs.core.Keyword(null,"pass?","pass?",-424635753));
var inst_178591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_178588,new cljs.core.Keyword(null,"actions","actions",-812656882));
var inst_178592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_178588,new cljs.core.Keyword(null,"mutation","mutation",-285823378));
var inst_178593 = cljs.core.deref(state);
var inst_178594 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_178593);
var inst_178595 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_178589);
var inst_178596 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_178594,inst_178595);
var state_178621__$1 = (function (){var statearr_178648 = state_178621;
(statearr_178648[(13)] = inst_178590);

(statearr_178648[(10)] = inst_178591);

(statearr_178648[(12)] = inst_178592);

return statearr_178648;
})();
if(inst_178596){
var statearr_178649_179688 = state_178621__$1;
(statearr_178649_179688[(1)] = (13));

} else {
var statearr_178650_179689 = state_178621__$1;
(statearr_178650_179689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (18))){
var inst_178613 = (state_178621[(2)]);
var state_178621__$1 = state_178621;
var statearr_178651_179690 = state_178621__$1;
(statearr_178651_179690[(2)] = inst_178613);

(statearr_178651_179690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_178622 === (8))){
var inst_178569 = (state_178621[(7)]);
var inst_178577 = teg_online.ui.show_ai_response_modal(inst_178569);
var state_178621__$1 = state_178621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_178621__$1,(11),inst_178577);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var teg_online$ui$try_update_ai_BANG__$_state_machine__18069__auto__ = null;
var teg_online$ui$try_update_ai_BANG__$_state_machine__18069__auto____0 = (function (){
var statearr_178652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_178652[(0)] = teg_online$ui$try_update_ai_BANG__$_state_machine__18069__auto__);

(statearr_178652[(1)] = (1));

return statearr_178652;
});
var teg_online$ui$try_update_ai_BANG__$_state_machine__18069__auto____1 = (function (state_178621){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_178621);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e178653){var ex__18072__auto__ = e178653;
var statearr_178654_179691 = state_178621;
(statearr_178654_179691[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_178621[(4)]))){
var statearr_178655_179692 = state_178621;
(statearr_178655_179692[(1)] = cljs.core.first((state_178621[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179693 = state_178621;
state_178621 = G__179693;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$try_update_ai_BANG__$_state_machine__18069__auto__ = function(state_178621){
switch(arguments.length){
case 0:
return teg_online$ui$try_update_ai_BANG__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$try_update_ai_BANG__$_state_machine__18069__auto____1.call(this,state_178621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$try_update_ai_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$try_update_ai_BANG__$_state_machine__18069__auto____0;
teg_online$ui$try_update_ai_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$try_update_ai_BANG__$_state_machine__18069__auto____1;
return teg_online$ui$try_update_ai_BANG__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_178656 = f__19294__auto__();
(statearr_178656[(6)] = c__19293__auto__);

return statearr_178656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ui.on_state_change = (function teg_online$ui$on_state_change(state,old,new$){
var old_game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(old);
var new_game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(new$);
if((((new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))) == null)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(old_game),new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(old_game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(new_game),new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(new_game)], null))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_game,cljs.core.peek(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"snapshots","snapshots",941363956)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_game], 0));
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_game,new_game)) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(old)),new cljs.core.Keyword(null,"user-data","user-data",2143823568).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new$)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(old),new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(new$))))))){
teg_online.ui.maybe_reset_user_data(state,old_game,new_game);

teg_online.ui.maybe_show_forced_exchange_dialog(state,old_game,new_game);

teg_online.ui.maybe_show_secret_goal_dialog(state,old_game,new_game);

teg_online.ui.maybe_show_game_over_dialog(state,old_game,new_game);

teg_online.ui.maybe_show_turn_notification(state,old_game,new_game);

teg_online.ui.maybe_show_phase_notification(state,old_game,new_game);

teg_online.ui.maybe_show_exchange_notification(state,old_game,new_game);

teg_online.ui.maybe_show_moving_army_effect(state,old_game,new_game);

teg_online.ui.update_ui(state);
} else {
}

if((((new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(new$)) == null)) && ((((!((new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(old)) == null)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(old_game),new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(old_game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(new_game),new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(new_game)], null))))))){
var temp__5825__auto__ = teg_online.game.get_player(new_game,teg_online.game.get_current_player(new_game));
if(cljs.core.truth_(temp__5825__auto__)){
var player = temp__5825__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(player))){
return teg_online.ui.try_update_ai_BANG_(state,player);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
teg_online.ui.initialize = (function teg_online$ui$initialize(state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_178674){
var state_val_178675 = (state_178674[(1)]);
if((state_val_178675 === (1))){
var inst_178658 = teg_online.ui.world.removeAllSubmorphs();
var inst_178659 = teg_online.ui.init_debug_panel_BANG_(state);
var inst_178660 = teg_online.ui.init_map();
var state_178674__$1 = (function (){var statearr_178676 = state_178674;
(statearr_178676[(7)] = inst_178658);

(statearr_178676[(8)] = inst_178659);

return statearr_178676;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_178674__$1,(2),inst_178660);
} else {
if((state_val_178675 === (2))){
var inst_178662 = (state_178674[(2)]);
var inst_178663 = teg_online.ui.init_countries(state);
var state_178674__$1 = (function (){var statearr_178677 = state_178674;
(statearr_178677[(9)] = inst_178662);

return statearr_178677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_178674__$1,(3),inst_178663);
} else {
if((state_val_178675 === (3))){
var inst_178665 = (state_178674[(2)]);
var inst_178666 = (function (){return (function (_,___$1,old,new$){
return teg_online.ui.on_state_change(state,old,new$);
});
})();
var inst_178667 = cljs.core.add_watch(state,new cljs.core.Keyword(null,"state-change","state-change",-496627942),inst_178666);
var inst_178668 = (function (){return (function (p1__178657_SHARP_){
var or__5162__auto__ = p1__178657_SHARP_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"snapshots","snapshots",941363956),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selected-snapshot","selected-snapshot",-388681692),null], null);
}
});
})();
var inst_178669 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"debug","debug",-1608172596),inst_178668);
var inst_178670 = cljs.core.PersistentHashMap.EMPTY;
var inst_178671 = cljs.core.deref(state);
var inst_178672 = teg_online.ui.on_state_change(state,inst_178670,inst_178671);
var state_178674__$1 = (function (){var statearr_178678 = state_178674;
(statearr_178678[(10)] = inst_178665);

(statearr_178678[(11)] = inst_178667);

(statearr_178678[(12)] = inst_178669);

return statearr_178678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_178674__$1,inst_178672);
} else {
return null;
}
}
}
});
return (function() {
var teg_online$ui$initialize_$_state_machine__18069__auto__ = null;
var teg_online$ui$initialize_$_state_machine__18069__auto____0 = (function (){
var statearr_178679 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_178679[(0)] = teg_online$ui$initialize_$_state_machine__18069__auto__);

(statearr_178679[(1)] = (1));

return statearr_178679;
});
var teg_online$ui$initialize_$_state_machine__18069__auto____1 = (function (state_178674){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_178674);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e178680){var ex__18072__auto__ = e178680;
var statearr_178681_179694 = state_178674;
(statearr_178681_179694[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_178674[(4)]))){
var statearr_178682_179695 = state_178674;
(statearr_178682_179695[(1)] = cljs.core.first((state_178674[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__179696 = state_178674;
state_178674 = G__179696;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ui$initialize_$_state_machine__18069__auto__ = function(state_178674){
switch(arguments.length){
case 0:
return teg_online$ui$initialize_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ui$initialize_$_state_machine__18069__auto____1.call(this,state_178674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ui$initialize_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ui$initialize_$_state_machine__18069__auto____0;
teg_online$ui$initialize_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ui$initialize_$_state_machine__18069__auto____1;
return teg_online$ui$initialize_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_178683 = f__19294__auto__();
(statearr_178683[(6)] = c__19293__auto__);

return statearr_178683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});

//# sourceMappingURL=teg_online.ui.js.map
