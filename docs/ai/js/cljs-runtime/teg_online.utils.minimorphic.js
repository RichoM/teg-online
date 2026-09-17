goog.provide('teg_online.utils.minimorphic');
teg_online.utils.minimorphic.set_attrs_BANG_ = (function teg_online$utils$minimorphic$set_attrs_BANG_(morph,attrs){
var seq__157650_157883 = cljs.core.seq(attrs);
var chunk__157651_157884 = null;
var count__157652_157885 = (0);
var i__157653_157886 = (0);
while(true){
if((i__157653_157886 < count__157652_157885)){
var vec__157666_157887 = chunk__157651_157884.cljs$core$IIndexed$_nth$arity$2(null,i__157653_157886);
var k_157888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157666_157887,(0),null);
var v_157889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157666_157887,(1),null);
var target_obj_157669_157890 = morph;
var _STAR_runtime_state_STAR__orig_val__157670_157891 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157671_157892 = oops.state.prepare_state(target_obj_157669_157890,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157671_157892);

try{oops.core.set_selector_dynamically(target_obj_157669_157890,k_157888,cljs.core.clj__GT_js(v_157889));

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157670_157891);
}

var G__157893 = seq__157650_157883;
var G__157894 = chunk__157651_157884;
var G__157895 = count__157652_157885;
var G__157896 = (i__157653_157886 + (1));
seq__157650_157883 = G__157893;
chunk__157651_157884 = G__157894;
count__157652_157885 = G__157895;
i__157653_157886 = G__157896;
continue;
} else {
var temp__5825__auto___157897 = cljs.core.seq(seq__157650_157883);
if(temp__5825__auto___157897){
var seq__157650_157898__$1 = temp__5825__auto___157897;
if(cljs.core.chunked_seq_QMARK_(seq__157650_157898__$1)){
var c__5694__auto___157899 = cljs.core.chunk_first(seq__157650_157898__$1);
var G__157900 = cljs.core.chunk_rest(seq__157650_157898__$1);
var G__157901 = c__5694__auto___157899;
var G__157902 = cljs.core.count(c__5694__auto___157899);
var G__157903 = (0);
seq__157650_157883 = G__157900;
chunk__157651_157884 = G__157901;
count__157652_157885 = G__157902;
i__157653_157886 = G__157903;
continue;
} else {
var vec__157672_157904 = cljs.core.first(seq__157650_157898__$1);
var k_157905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157672_157904,(0),null);
var v_157906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157672_157904,(1),null);
var target_obj_157675_157907 = morph;
var _STAR_runtime_state_STAR__orig_val__157676_157908 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157677_157909 = oops.state.prepare_state(target_obj_157675_157907,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157677_157909);

try{oops.core.set_selector_dynamically(target_obj_157675_157907,k_157905,cljs.core.clj__GT_js(v_157906));

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157676_157908);
}

var G__157910 = cljs.core.next(seq__157650_157898__$1);
var G__157911 = null;
var G__157912 = (0);
var G__157913 = (0);
seq__157650_157883 = G__157910;
chunk__157651_157884 = G__157911;
count__157652_157885 = G__157912;
i__157653_157886 = G__157913;
continue;
}
} else {
}
}
break;
}

return morph;
});
teg_online.utils.minimorphic.make_morph = (function teg_online$utils$minimorphic$make_morph(var_args){
var args__5903__auto__ = [];
var len__5897__auto___157914 = arguments.length;
var i__5898__auto___157915 = (0);
while(true){
if((i__5898__auto___157915 < len__5897__auto___157914)){
args__5903__auto__.push((arguments[i__5898__auto___157915]));

var G__157916 = (i__5898__auto___157915 + (1));
i__5898__auto___157915 = G__157916;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return teg_online.utils.minimorphic.make_morph.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(teg_online.utils.minimorphic.make_morph.cljs$core$IFn$_invoke$arity$variadic = (function (p__157679){
var map__157680 = p__157679;
var map__157680__$1 = cljs.core.__destructure_map(map__157680);
var attrs = map__157680__$1;
return teg_online.utils.minimorphic.set_attrs_BANG_((new Morph()),attrs);
}));

(teg_online.utils.minimorphic.make_morph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(teg_online.utils.minimorphic.make_morph.cljs$lang$applyTo = (function (seq157678){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq157678));
}));

teg_online.utils.minimorphic.make_sprite = (function teg_online$utils$minimorphic$make_sprite(var_args){
var args__5903__auto__ = [];
var len__5897__auto___157917 = arguments.length;
var i__5898__auto___157918 = (0);
while(true){
if((i__5898__auto___157918 < len__5897__auto___157917)){
args__5903__auto__.push((arguments[i__5898__auto___157918]));

var G__157919 = (i__5898__auto___157918 + (1));
i__5898__auto___157918 = G__157919;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return teg_online.utils.minimorphic.make_sprite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(teg_online.utils.minimorphic.make_sprite.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__157683){
var map__157684 = p__157683;
var map__157684__$1 = cljs.core.__destructure_map(map__157684);
var attrs = map__157684__$1;
return teg_online.utils.minimorphic.set_attrs_BANG_((new Sprite(form)),attrs);
}));

(teg_online.utils.minimorphic.make_sprite.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(teg_online.utils.minimorphic.make_sprite.cljs$lang$applyTo = (function (seq157681){
var G__157682 = cljs.core.first(seq157681);
var seq157681__$1 = cljs.core.next(seq157681);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__157682,seq157681__$1);
}));

teg_online.utils.minimorphic.make_ellipse = (function teg_online$utils$minimorphic$make_ellipse(var_args){
var args__5903__auto__ = [];
var len__5897__auto___157920 = arguments.length;
var i__5898__auto___157921 = (0);
while(true){
if((i__5898__auto___157921 < len__5897__auto___157920)){
args__5903__auto__.push((arguments[i__5898__auto___157921]));

var G__157922 = (i__5898__auto___157921 + (1));
i__5898__auto___157921 = G__157922;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return teg_online.utils.minimorphic.make_ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(teg_online.utils.minimorphic.make_ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (p__157686){
var map__157687 = p__157686;
var map__157687__$1 = cljs.core.__destructure_map(map__157687);
var attrs = map__157687__$1;
return teg_online.utils.minimorphic.set_attrs_BANG_((new Ellipse()),attrs);
}));

(teg_online.utils.minimorphic.make_ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(teg_online.utils.minimorphic.make_ellipse.cljs$lang$applyTo = (function (seq157685){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq157685));
}));

teg_online.utils.minimorphic.make_label = (function teg_online$utils$minimorphic$make_label(var_args){
var args__5903__auto__ = [];
var len__5897__auto___157923 = arguments.length;
var i__5898__auto___157924 = (0);
while(true){
if((i__5898__auto___157924 < len__5897__auto___157923)){
args__5903__auto__.push((arguments[i__5898__auto___157924]));

var G__157925 = (i__5898__auto___157924 + (1));
i__5898__auto___157924 = G__157925;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return teg_online.utils.minimorphic.make_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(teg_online.utils.minimorphic.make_label.cljs$core$IFn$_invoke$arity$variadic = (function (text,p__157690){
var map__157691 = p__157690;
var map__157691__$1 = cljs.core.__destructure_map(map__157691);
var attrs = map__157691__$1;
return teg_online.utils.minimorphic.set_attrs_BANG_((new Label(text)),attrs);
}));

(teg_online.utils.minimorphic.make_label.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(teg_online.utils.minimorphic.make_label.cljs$lang$applyTo = (function (seq157688){
var G__157689 = cljs.core.first(seq157688);
var seq157688__$1 = cljs.core.next(seq157688);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__157689,seq157688__$1);
}));

teg_online.utils.minimorphic.load_form = (function teg_online$utils$minimorphic$load_form(path){
var c__18350__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18351__auto__ = (function (){var switch__18205__auto__ = (function (state_157710){
var state_val_157711 = (state_157710[(1)]);
if((state_val_157711 === (1))){
var inst_157692 = Form.loadImage(path);
var inst_157693 = cljs.core.async.interop.p__GT_c(inst_157692);
var state_157710__$1 = state_157710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_157710__$1,(2),inst_157693);
} else {
if((state_val_157711 === (2))){
var inst_157695 = (state_157710[(7)]);
var inst_157696 = (state_157710[(8)]);
var inst_157695__$1 = (state_157710[(2)]);
var inst_157696__$1 = (inst_157695__$1 instanceof cljs.core.ExceptionInfo);
var state_157710__$1 = (function (){var statearr_157712 = state_157710;
(statearr_157712[(7)] = inst_157695__$1);

(statearr_157712[(8)] = inst_157696__$1);

return statearr_157712;
})();
if(cljs.core.truth_(inst_157696__$1)){
var statearr_157713_157926 = state_157710__$1;
(statearr_157713_157926[(1)] = (3));

} else {
var statearr_157714_157927 = state_157710__$1;
(statearr_157714_157927[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157711 === (3))){
var inst_157695 = (state_157710[(7)]);
var inst_157698 = cljs.core.ex_data(inst_157695);
var inst_157699 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_157698);
var inst_157700 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_157699,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_157710__$1 = state_157710;
var statearr_157715_157928 = state_157710__$1;
(statearr_157715_157928[(2)] = inst_157700);

(statearr_157715_157928[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157711 === (4))){
var inst_157696 = (state_157710[(8)]);
var state_157710__$1 = state_157710;
var statearr_157716_157929 = state_157710__$1;
(statearr_157716_157929[(2)] = inst_157696);

(statearr_157716_157929[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157711 === (5))){
var inst_157703 = (state_157710[(2)]);
var state_157710__$1 = state_157710;
if(cljs.core.truth_(inst_157703)){
var statearr_157717_157930 = state_157710__$1;
(statearr_157717_157930[(1)] = (6));

} else {
var statearr_157718_157931 = state_157710__$1;
(statearr_157718_157931[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157711 === (6))){
var inst_157695 = (state_157710[(7)]);
var inst_157705 = (function (){throw inst_157695})();
var state_157710__$1 = state_157710;
var statearr_157719_157932 = state_157710__$1;
(statearr_157719_157932[(2)] = inst_157705);

(statearr_157719_157932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157711 === (7))){
var inst_157695 = (state_157710[(7)]);
var state_157710__$1 = state_157710;
var statearr_157720_157933 = state_157710__$1;
(statearr_157720_157933[(2)] = inst_157695);

(statearr_157720_157933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157711 === (8))){
var inst_157708 = (state_157710[(2)]);
var state_157710__$1 = state_157710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_157710__$1,inst_157708);
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
var teg_online$utils$minimorphic$load_form_$_state_machine__18206__auto__ = null;
var teg_online$utils$minimorphic$load_form_$_state_machine__18206__auto____0 = (function (){
var statearr_157721 = [null,null,null,null,null,null,null,null,null];
(statearr_157721[(0)] = teg_online$utils$minimorphic$load_form_$_state_machine__18206__auto__);

(statearr_157721[(1)] = (1));

return statearr_157721;
});
var teg_online$utils$minimorphic$load_form_$_state_machine__18206__auto____1 = (function (state_157710){
while(true){
var ret_value__18207__auto__ = (function (){try{while(true){
var result__18208__auto__ = switch__18205__auto__(state_157710);
if(cljs.core.keyword_identical_QMARK_(result__18208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18208__auto__;
}
break;
}
}catch (e157722){var ex__18209__auto__ = e157722;
var statearr_157723_157934 = state_157710;
(statearr_157723_157934[(2)] = ex__18209__auto__);


if(cljs.core.seq((state_157710[(4)]))){
var statearr_157724_157935 = state_157710;
(statearr_157724_157935[(1)] = cljs.core.first((state_157710[(4)])));

} else {
throw ex__18209__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__157936 = state_157710;
state_157710 = G__157936;
continue;
} else {
return ret_value__18207__auto__;
}
break;
}
});
teg_online$utils$minimorphic$load_form_$_state_machine__18206__auto__ = function(state_157710){
switch(arguments.length){
case 0:
return teg_online$utils$minimorphic$load_form_$_state_machine__18206__auto____0.call(this);
case 1:
return teg_online$utils$minimorphic$load_form_$_state_machine__18206__auto____1.call(this,state_157710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$utils$minimorphic$load_form_$_state_machine__18206__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$utils$minimorphic$load_form_$_state_machine__18206__auto____0;
teg_online$utils$minimorphic$load_form_$_state_machine__18206__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$utils$minimorphic$load_form_$_state_machine__18206__auto____1;
return teg_online$utils$minimorphic$load_form_$_state_machine__18206__auto__;
})()
})();
var state__18352__auto__ = (function (){var statearr_157725 = f__18351__auto__();
(statearr_157725[(6)] = c__18350__auto__);

return statearr_157725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18352__auto__);
}));

return c__18350__auto__;
});
teg_online.utils.minimorphic.tint = cljs.core.memoize((function (form,color){
var img = (function (){var target_obj_157726 = form;
var _STAR_runtime_state_STAR__orig_val__157728 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157729 = oops.state.prepare_state(target_obj_157726,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157729);

try{var next_obj_157727 = ((oops.core.validate_object_access_dynamically(target_obj_157726,(0),"img",true,true,false))?(target_obj_157726["img"]):null);
return next_obj_157727;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157728);
}})();
var w = (function (){var target_obj_157730 = img;
var _STAR_runtime_state_STAR__orig_val__157732 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157733 = oops.state.prepare_state(target_obj_157730,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157733);

try{var next_obj_157731 = ((oops.core.validate_object_access_dynamically(target_obj_157730,(0),"width",true,true,false))?(target_obj_157730["width"]):null);
return next_obj_157731;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157732);
}})();
var h = (function (){var target_obj_157734 = img;
var _STAR_runtime_state_STAR__orig_val__157736 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157737 = oops.state.prepare_state(target_obj_157734,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157737);

try{var next_obj_157735 = ((oops.core.validate_object_access_dynamically(target_obj_157734,(0),"height",true,true,false))?(target_obj_157734["height"]):null);
return next_obj_157735;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157736);
}})();
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var target_obj_157738_157937 = canvas;
var _STAR_runtime_state_STAR__orig_val__157740_157938 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157741_157939 = oops.state.prepare_state(target_obj_157738_157937,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157741_157939);

try{var parent_obj_157739_157940 = target_obj_157738_157937;
if(oops.core.validate_object_access_dynamically(parent_obj_157739_157940,(0),"width",true,true,true)){
(parent_obj_157739_157940["width"] = w);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157740_157938);
}
var target_obj_157742_157941 = canvas;
var _STAR_runtime_state_STAR__orig_val__157744_157942 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157745_157943 = oops.state.prepare_state(target_obj_157742_157941,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157745_157943);

try{var parent_obj_157743_157944 = target_obj_157742_157941;
if(oops.core.validate_object_access_dynamically(parent_obj_157743_157944,(0),"height",true,true,true)){
(parent_obj_157743_157944["height"] = h);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157744_157942);
}
var target_obj_157746_157945 = ctx;
var _STAR_runtime_state_STAR__orig_val__157748_157946 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157749_157947 = oops.state.prepare_state(target_obj_157746_157945,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157749_157947);

try{var parent_obj_157747_157948 = target_obj_157746_157945;
if(oops.core.validate_object_access_dynamically(parent_obj_157747_157948,(0),"fillStyle",true,true,true)){
(parent_obj_157747_157948["fillStyle"] = color);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157748_157946);
}
ctx.drawImage(img,(0),(0));

var target_obj_157750_157949 = ctx;
var _STAR_runtime_state_STAR__orig_val__157752_157950 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157753_157951 = oops.state.prepare_state(target_obj_157750_157949,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157753_157951);

try{var parent_obj_157751_157952 = target_obj_157750_157949;
if(oops.core.validate_object_access_dynamically(parent_obj_157751_157952,(0),"globalCompositeOperation",true,true,true)){
(parent_obj_157751_157952["globalCompositeOperation"] = "source-atop");
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157752_157950);
}
ctx.fillRect((0),(0),w,h);

var result_img = (new Image());
var result_chan = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var target_obj_157754_157953 = result_img;
var _STAR_runtime_state_STAR__orig_val__157756_157954 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157757_157955 = oops.state.prepare_state(target_obj_157754_157953,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157757_157955);

try{var parent_obj_157755_157956 = target_obj_157754_157953;
if(oops.core.validate_object_access_dynamically(parent_obj_157755_157956,(0),"onload",true,true,true)){
(parent_obj_157755_157956["onload"] = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,(new Form(result_img)));
}));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157756_157954);
}
var target_obj_157758_157957 = result_img;
var _STAR_runtime_state_STAR__orig_val__157760_157958 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157761_157959 = oops.state.prepare_state(target_obj_157758_157957,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157761_157959);

try{var parent_obj_157759_157960 = target_obj_157758_157957;
if(oops.core.validate_object_access_dynamically(parent_obj_157759_157960,(0),"src",true,true,true)){
(parent_obj_157759_157960["src"] = canvas.toDataURL());
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157760_157958);
}
return result_chan;
}));
teg_online.utils.minimorphic.on_mouse_enter = (function teg_online$utils$minimorphic$on_mouse_enter(morph,callback){
var G__157762 = morph;
G__157762.on("mouseEnter",callback);

return G__157762;
});
teg_online.utils.minimorphic.on_mouse_move = (function teg_online$utils$minimorphic$on_mouse_move(morph,callback){
var G__157763 = morph;
G__157763.on("mouseMove",callback);

return G__157763;
});
teg_online.utils.minimorphic.on_mouse_leave = (function teg_online$utils$minimorphic$on_mouse_leave(morph,callback){
var G__157764 = morph;
G__157764.on("mouseLeave",callback);

return G__157764;
});
teg_online.utils.minimorphic.on_mouse_down = (function teg_online$utils$minimorphic$on_mouse_down(morph,callback){
var G__157765 = morph;
G__157765.on("mouseDown",callback);

return G__157765;
});
teg_online.utils.minimorphic.on_mouse_up = (function teg_online$utils$minimorphic$on_mouse_up(morph,callback){
var G__157766 = morph;
G__157766.on("mouseUp",callback);

return G__157766;
});
teg_online.utils.minimorphic.on_step = (function teg_online$utils$minimorphic$on_step(morph,callback){
var G__157767 = morph;
G__157767.on("step",callback);

return G__157767;
});
teg_online.utils.minimorphic.make_draggable = (function teg_online$utils$minimorphic$make_draggable(morph){
var picked_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var offset = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return teg_online.utils.minimorphic.on_mouse_up(teg_online.utils.minimorphic.on_mouse_down(teg_online.utils.minimorphic.on_step(morph,(function (){
if(cljs.core.truth_(cljs.core.deref(picked_QMARK_))){
var target_obj_157768_157961 = morph;
var _STAR_runtime_state_STAR__orig_val__157770_157962 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157771_157963 = oops.state.prepare_state(target_obj_157768_157961,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157771_157963);

try{var parent_obj_157769_157964 = target_obj_157768_157961;
if(oops.core.validate_object_access_dynamically(parent_obj_157769_157964,(0),"center",true,true,true)){
(parent_obj_157769_157964["center"] = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((function (){var fexpr__157772 = cljs.core.deref(offset);
return (fexpr__157772.cljs$core$IFn$_invoke$arity$1 ? fexpr__157772.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : fexpr__157772.call(null,new cljs.core.Keyword(null,"x","x",2099068185)));
})() + (function (){var target_obj_157773 = World.cursor;
var _STAR_runtime_state_STAR__orig_val__157775 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157776 = oops.state.prepare_state(target_obj_157773,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157776);

try{var next_obj_157774 = ((oops.core.validate_object_access_dynamically(target_obj_157773,(0),"x",true,true,false))?(target_obj_157773["x"]):null);
return next_obj_157774;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157775);
}})()),new cljs.core.Keyword(null,"y","y",-1757859776),((function (){var fexpr__157777 = cljs.core.deref(offset);
return (fexpr__157777.cljs$core$IFn$_invoke$arity$1 ? fexpr__157777.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : fexpr__157777.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)));
})() + (function (){var target_obj_157778 = World.cursor;
var _STAR_runtime_state_STAR__orig_val__157780 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157781 = oops.state.prepare_state(target_obj_157778,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157781);

try{var next_obj_157779 = ((oops.core.validate_object_access_dynamically(target_obj_157778,(0),"y",true,true,false))?(target_obj_157778["y"]):null);
return next_obj_157779;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157780);
}})())], null)));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157770_157962);
}
var map__157782 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_157784 = morph;
var _STAR_runtime_state_STAR__orig_val__157786 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157787 = oops.state.prepare_state(target_obj_157784,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157787);

try{var next_obj_157785 = ((oops.core.validate_object_access_dynamically(target_obj_157784,(0),"center",true,true,false))?(target_obj_157784["center"]):null);
return next_obj_157785;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157786);
}})());
var map__157782__$1 = cljs.core.__destructure_map(map__157782);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157782__$1,"x");
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157782__$1,"y");
var map__157783 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_157788 = morph;
var _STAR_runtime_state_STAR__orig_val__157791 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157792 = oops.state.prepare_state(target_obj_157788,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157792);

try{var next_obj_157789 = ((oops.core.validate_object_access_dynamically(target_obj_157788,(0),"owner",true,true,false))?(target_obj_157788["owner"]):null);
var next_obj_157790 = ((oops.core.validate_object_access_dynamically(next_obj_157789,(0),"center",true,true,false))?(next_obj_157789["center"]):null);
return next_obj_157790;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157791);
}})());
var map__157783__$1 = cljs.core.__destructure_map(map__157783);
var ox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157783__$1,"x");
var oy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157783__$1,"y");
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - ox),(y - oy)], null)], 0));
} else {
return null;
}
})),(function (){
cljs.core.reset_BANG_(offset,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((function (){var target_obj_157793 = morph;
var _STAR_runtime_state_STAR__orig_val__157796 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157797 = oops.state.prepare_state(target_obj_157793,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157797);

try{var next_obj_157794 = ((oops.core.validate_object_access_dynamically(target_obj_157793,(0),"center",true,true,false))?(target_obj_157793["center"]):null);
var next_obj_157795 = ((oops.core.validate_object_access_dynamically(next_obj_157794,(0),"x",true,true,false))?(next_obj_157794["x"]):null);
return next_obj_157795;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157796);
}})() - (function (){var target_obj_157798 = World.cursor;
var _STAR_runtime_state_STAR__orig_val__157800 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157801 = oops.state.prepare_state(target_obj_157798,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157801);

try{var next_obj_157799 = ((oops.core.validate_object_access_dynamically(target_obj_157798,(0),"x",true,true,false))?(target_obj_157798["x"]):null);
return next_obj_157799;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157800);
}})()),new cljs.core.Keyword(null,"y","y",-1757859776),((function (){var target_obj_157802 = morph;
var _STAR_runtime_state_STAR__orig_val__157805 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157806 = oops.state.prepare_state(target_obj_157802,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157806);

try{var next_obj_157803 = ((oops.core.validate_object_access_dynamically(target_obj_157802,(0),"center",true,true,false))?(target_obj_157802["center"]):null);
var next_obj_157804 = ((oops.core.validate_object_access_dynamically(next_obj_157803,(0),"y",true,true,false))?(next_obj_157803["y"]):null);
return next_obj_157804;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157805);
}})() - (function (){var target_obj_157807 = World.cursor;
var _STAR_runtime_state_STAR__orig_val__157809 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157810 = oops.state.prepare_state(target_obj_157807,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157810);

try{var next_obj_157808 = ((oops.core.validate_object_access_dynamically(target_obj_157807,(0),"y",true,true,false))?(target_obj_157807["y"]):null);
return next_obj_157808;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157809);
}})())], null));

return cljs.core.reset_BANG_(picked_QMARK_,true);
})),(function (){
return cljs.core.reset_BANG_(picked_QMARK_,false);
}));
});
teg_online.utils.minimorphic.vanish = (function teg_online$utils$minimorphic$vanish(morph,seconds){
return teg_online.utils.minimorphic.on_step(morph,(function (_,delta){
var alpha = ((function (){var target_obj_157811 = morph;
var _STAR_runtime_state_STAR__orig_val__157813 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157814 = oops.state.prepare_state(target_obj_157811,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157814);

try{var next_obj_157812 = ((oops.core.validate_object_access_dynamically(target_obj_157811,(0),"alpha",true,true,false))?(target_obj_157811["alpha"]):null);
return next_obj_157812;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157813);
}})() - (delta / seconds));
var target_obj_157815_157965 = morph;
var _STAR_runtime_state_STAR__orig_val__157817_157966 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157818_157967 = oops.state.prepare_state(target_obj_157815_157965,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157818_157967);

try{var parent_obj_157816_157968 = target_obj_157815_157965;
if(oops.core.validate_object_access_dynamically(parent_obj_157816_157968,(0),"alpha",true,true,true)){
(parent_obj_157816_157968["alpha"] = alpha);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157817_157966);
}
if((alpha < 0.01)){
return morph.remove();
} else {
return null;
}
}));
});
teg_online.utils.minimorphic.translate = (function teg_online$utils$minimorphic$translate(morph,dx,dy,seconds){
return teg_online.utils.minimorphic.on_step(morph,(function (_,delta){
var target_obj_157819_157972 = morph;
var _STAR_runtime_state_STAR__orig_val__157821_157974 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157822_157975 = oops.state.prepare_state(target_obj_157819_157972,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157822_157975);

try{var parent_obj_157820_157976 = target_obj_157819_157972;
if(oops.core.validate_object_access_dynamically(parent_obj_157820_157976,(0),"x",true,true,true)){
(parent_obj_157820_157976["x"] = ((function (){var target_obj_157823 = morph;
var _STAR_runtime_state_STAR__orig_val__157825 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157826 = oops.state.prepare_state(target_obj_157823,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157826);

try{var next_obj_157824 = ((oops.core.validate_object_access_dynamically(target_obj_157823,(0),"x",true,true,false))?(target_obj_157823["x"]):null);
return next_obj_157824;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157825);
}})() + (delta * (dx / seconds))));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157821_157974);
}
var target_obj_157827 = morph;
var _STAR_runtime_state_STAR__orig_val__157829 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157830 = oops.state.prepare_state(target_obj_157827,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157830);

try{var parent_obj_157828_157977 = target_obj_157827;
if(oops.core.validate_object_access_dynamically(parent_obj_157828_157977,(0),"y",true,true,true)){
(parent_obj_157828_157977["y"] = ((function (){var target_obj_157831 = morph;
var _STAR_runtime_state_STAR__orig_val__157833 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157834 = oops.state.prepare_state(target_obj_157831,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157834);

try{var next_obj_157832 = ((oops.core.validate_object_access_dynamically(target_obj_157831,(0),"y",true,true,false))?(target_obj_157831["y"]):null);
return next_obj_157832;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157833);
}})() + (delta * (dy / seconds))));
} else {
}

return target_obj_157827;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157829);
}}));
});
teg_online.utils.minimorphic.appear = (function teg_online$utils$minimorphic$appear(var_args){
var G__157836 = arguments.length;
switch (G__157836) {
case 2:
return teg_online.utils.minimorphic.appear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return teg_online.utils.minimorphic.appear.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.utils.minimorphic.appear.cljs$core$IFn$_invoke$arity$2 = (function (morph,seconds){
return teg_online.utils.minimorphic.appear.cljs$core$IFn$_invoke$arity$3(morph,seconds,(1));
}));

(teg_online.utils.minimorphic.appear.cljs$core$IFn$_invoke$arity$3 = (function (morph,seconds,max_alpha){
var effect = teg_online.utils.minimorphic.make_morph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(0)], 0));
teg_online.utils.minimorphic.on_step(effect,(function (_,delta){
var alpha = ((function (){var target_obj_157837 = morph;
var _STAR_runtime_state_STAR__orig_val__157839 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157840 = oops.state.prepare_state(target_obj_157837,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157840);

try{var next_obj_157838 = ((oops.core.validate_object_access_dynamically(target_obj_157837,(0),"alpha",true,true,false))?(target_obj_157837["alpha"]):null);
return next_obj_157838;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157839);
}})() + (delta / seconds));
var target_obj_157841_157984 = morph;
var _STAR_runtime_state_STAR__orig_val__157843_157985 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157844_157986 = oops.state.prepare_state(target_obj_157841_157984,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157844_157986);

try{var parent_obj_157842_157987 = target_obj_157841_157984;
if(oops.core.validate_object_access_dynamically(parent_obj_157842_157987,(0),"alpha",true,true,true)){
(parent_obj_157842_157987["alpha"] = alpha);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157843_157985);
}
if((alpha >= max_alpha)){
var target_obj_157845_157988 = morph;
var _STAR_runtime_state_STAR__orig_val__157847_157989 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157848_157990 = oops.state.prepare_state(target_obj_157845_157988,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157848_157990);

try{var parent_obj_157846_157991 = target_obj_157845_157988;
if(oops.core.validate_object_access_dynamically(parent_obj_157846_157991,(0),"alpha",true,true,true)){
(parent_obj_157846_157991["alpha"] = max_alpha);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157847_157989);
}
return effect.remove();
} else {
return null;
}
}));

World.current.addMorph(effect);

return morph;
}));

(teg_online.utils.minimorphic.appear.cljs$lang$maxFixedArity = 3);

teg_online.utils.minimorphic.fireworks = (function teg_online$utils$minimorphic$fireworks(var_args){
var args__5903__auto__ = [];
var len__5897__auto___157992 = arguments.length;
var i__5898__auto___157993 = (0);
while(true){
if((i__5898__auto___157993 < len__5897__auto___157992)){
args__5903__auto__.push((arguments[i__5898__auto___157993]));

var G__157994 = (i__5898__auto___157993 + (1));
i__5898__auto___157993 = G__157994;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return teg_online.utils.minimorphic.fireworks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(teg_online.utils.minimorphic.fireworks.cljs$core$IFn$_invoke$arity$variadic = (function (morph,point,p__157853){
var map__157854 = p__157853;
var map__157854__$1 = cljs.core.__destructure_map(map__157854);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__157854__$1,new cljs.core.Keyword(null,"amount","amount",364489504),(200));
var min_magnitude = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__157854__$1,new cljs.core.Keyword(null,"min-magnitude","min-magnitude",-1505754095),(50));
var max_magnitude = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__157854__$1,new cljs.core.Keyword(null,"max-magnitude","max-magnitude",840618693),(300));
var make_particle = (function (dx,dy,color){
var delta_alpha = -0.92;
var particle = teg_online.utils.minimorphic.make_morph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"center","center",-748944368),point,new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(1),new cljs.core.Keyword(null,"color","color",1011675173),color], 0));
return teg_online.utils.minimorphic.on_step(particle,(function (_,delta){
var target_obj_157855_157995 = particle;
var _STAR_runtime_state_STAR__orig_val__157857_157996 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157858_157997 = oops.state.prepare_state(target_obj_157855_157995,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157858_157997);

try{var parent_obj_157856_157998 = target_obj_157855_157995;
if(oops.core.validate_object_access_dynamically(parent_obj_157856_157998,(0),"x",true,true,true)){
(parent_obj_157856_157998["x"] = ((function (){var target_obj_157859 = particle;
var _STAR_runtime_state_STAR__orig_val__157861 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157862 = oops.state.prepare_state(target_obj_157859,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157862);

try{var next_obj_157860 = ((oops.core.validate_object_access_dynamically(target_obj_157859,(0),"x",true,true,false))?(target_obj_157859["x"]):null);
return next_obj_157860;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157861);
}})() + (dx * delta)));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157857_157996);
}
var target_obj_157863_157999 = particle;
var _STAR_runtime_state_STAR__orig_val__157865_158000 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157866_158001 = oops.state.prepare_state(target_obj_157863_157999,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157866_158001);

try{var parent_obj_157864_158002 = target_obj_157863_157999;
if(oops.core.validate_object_access_dynamically(parent_obj_157864_158002,(0),"y",true,true,true)){
(parent_obj_157864_158002["y"] = ((function (){var target_obj_157867 = particle;
var _STAR_runtime_state_STAR__orig_val__157869 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157870 = oops.state.prepare_state(target_obj_157867,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157870);

try{var next_obj_157868 = ((oops.core.validate_object_access_dynamically(target_obj_157867,(0),"y",true,true,false))?(target_obj_157867["y"]):null);
return next_obj_157868;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157869);
}})() + (dy * delta)));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157865_158000);
}
var target_obj_157871_158004 = particle;
var _STAR_runtime_state_STAR__orig_val__157873_158005 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157874_158006 = oops.state.prepare_state(target_obj_157871_158004,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157874_158006);

try{var parent_obj_157872_158007 = target_obj_157871_158004;
if(oops.core.validate_object_access_dynamically(parent_obj_157872_158007,(0),"alpha",true,true,true)){
(parent_obj_157872_158007["alpha"] = ((function (){var target_obj_157875 = particle;
var _STAR_runtime_state_STAR__orig_val__157877 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157878 = oops.state.prepare_state(target_obj_157875,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157878);

try{var next_obj_157876 = ((oops.core.validate_object_access_dynamically(target_obj_157875,(0),"alpha",true,true,false))?(target_obj_157875["alpha"]):null);
return next_obj_157876;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157877);
}})() + (delta_alpha * delta)));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157873_158005);
}
if(((function (){var target_obj_157879 = particle;
var _STAR_runtime_state_STAR__orig_val__157881 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__157882 = oops.state.prepare_state(target_obj_157879,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__157882);

try{var next_obj_157880 = ((oops.core.validate_object_access_dynamically(target_obj_157879,(0),"alpha",true,true,false))?(target_obj_157879["alpha"]):null);
return next_obj_157880;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__157881);
}})() <= 0.001)){
return particle.remove();
} else {
return null;
}
}));
});
var colors = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","yellow","green","blue"], null);
var color = cljs.core.rand_nth(colors);
var i = (0);
while(true){
if((i < amount)){
var angle_158009 = (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * (350));
var magnitude_158010 = (min_magnitude + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((max_magnitude - min_magnitude)));
var o_158011 = (Math.sin(angle_158009) * magnitude_158010);
var a_158012 = (Math.cos(angle_158009) * magnitude_158010);
morph.addMorph(make_particle(a_158012,o_158011,color));

var G__158013 = (i + (1));
i = G__158013;
continue;
} else {
return null;
}
break;
}
}));

(teg_online.utils.minimorphic.fireworks.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(teg_online.utils.minimorphic.fireworks.cljs$lang$applyTo = (function (seq157850){
var G__157851 = cljs.core.first(seq157850);
var seq157850__$1 = cljs.core.next(seq157850);
var G__157852 = cljs.core.first(seq157850__$1);
var seq157850__$2 = cljs.core.next(seq157850__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__157851,G__157852,seq157850__$2);
}));


//# sourceMappingURL=teg_online.utils.minimorphic.js.map
