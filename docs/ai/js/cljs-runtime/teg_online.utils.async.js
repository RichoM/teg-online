goog.provide('teg_online.utils.async');
teg_online.utils.async.chan__GT_promise = (function teg_online$utils$async$chan__GT_promise(ch){

return (new Promise((function (res,rej){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(ch,(function (p1__22119_SHARP_){
if((p1__22119_SHARP_ instanceof Error)){
return (rej.cljs$core$IFn$_invoke$arity$1 ? rej.cljs$core$IFn$_invoke$arity$1(p1__22119_SHARP_) : rej.call(null,p1__22119_SHARP_));
} else {
return (res.cljs$core$IFn$_invoke$arity$1 ? res.cljs$core$IFn$_invoke$arity$1(p1__22119_SHARP_) : res.call(null,p1__22119_SHARP_));
}
}));
})));
});
/**
 * Take from channel ch while data is available (without blocking/parking) until
 * the timeout is closed or no more data is immediately available.
 * Results are accumulated using the reducer function f and the initial value init.
 */
teg_online.utils.async.reduce_until_timeout_BANG_ = (function teg_online$utils$async$reduce_until_timeout_BANG_(f,init,ch,t){
var c__18873__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18874__auto__ = (function (){var switch__18099__auto__ = (function (state_22149){
var state_val_22150 = (state_22149[(1)]);
if((state_val_22150 === (1))){
var inst_22120 = init;
var inst_22121 = inst_22120;
var state_22149__$1 = (function (){var statearr_22151 = state_22149;
(statearr_22151[(7)] = inst_22121);

return statearr_22151;
})();
var statearr_22152_22173 = state_22149__$1;
(statearr_22152_22173[(2)] = null);

(statearr_22152_22173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (2))){
var inst_22121 = (state_22149[(7)]);
var inst_22126 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22132 = (function (){var ret = inst_22121;
var c__18873__auto____$1 = inst_22131;
return (function (){
var f__18874__auto__ = (function (){var switch__18099__auto__ = (function (state_22129){
var state_val_22130 = (state_22129[(1)]);
if((state_val_22130 === (1))){
var inst_22127 = cljs.core.async.poll_BANG_(ch);
var state_22129__$1 = state_22129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22129__$1,inst_22127);
} else {
return null;
}
});
return (function() {
var teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto__ = null;
var teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto____0 = (function (){
var statearr_22153 = [null,null,null,null,null,null,null];
(statearr_22153[(0)] = teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto__);

(statearr_22153[(1)] = (1));

return statearr_22153;
});
var teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto____1 = (function (state_22129){
while(true){
var ret_value__18101__auto__ = (function (){try{while(true){
var result__18102__auto__ = switch__18099__auto__(state_22129);
if(cljs.core.keyword_identical_QMARK_(result__18102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18102__auto__;
}
break;
}
}catch (e22154){var ex__18103__auto__ = e22154;
var statearr_22155_22174 = state_22129;
(statearr_22155_22174[(2)] = ex__18103__auto__);


if(cljs.core.seq((state_22129[(4)]))){
var statearr_22156_22175 = state_22129;
(statearr_22156_22175[(1)] = cljs.core.first((state_22129[(4)])));

} else {
throw ex__18103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22176 = state_22129;
state_22129 = G__22176;
continue;
} else {
return ret_value__18101__auto__;
}
break;
}
});
teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto__ = function(state_22129){
switch(arguments.length){
case 0:
return teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto____0.call(this);
case 1:
return teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto____1.call(this,state_22129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto____0;
teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto____1;
return teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto__;
})()
})();
var state__18875__auto__ = (function (){var statearr_22157 = f__18874__auto__();
(statearr_22157[(6)] = c__18873__auto____$1);

return statearr_22157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18875__auto__);
});
})();
var inst_22133 = cljs.core.async.impl.dispatch.run(inst_22132);
var inst_22134 = [t,inst_22131];
var inst_22135 = (new cljs.core.PersistentVector(null,2,(5),inst_22126,inst_22134,null));
var state_22149__$1 = (function (){var statearr_22158 = state_22149;
(statearr_22158[(8)] = inst_22133);

return statearr_22158;
})();
return cljs.core.async.ioc_alts_BANG_(state_22149__$1,(4),inst_22135);
} else {
if((state_val_22150 === (3))){
var inst_22147 = (state_22149[(2)]);
var state_22149__$1 = state_22149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22149__$1,inst_22147);
} else {
if((state_val_22150 === (4))){
var inst_22138 = (state_22149[(9)]);
var inst_22137 = (state_22149[(2)]);
var inst_22138__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22137,(0),null);
var inst_22139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22137,(1),null);
var state_22149__$1 = (function (){var statearr_22159 = state_22149;
(statearr_22159[(9)] = inst_22138__$1);

(statearr_22159[(10)] = inst_22139);

return statearr_22159;
})();
if(cljs.core.truth_(inst_22138__$1)){
var statearr_22160_22177 = state_22149__$1;
(statearr_22160_22177[(1)] = (5));

} else {
var statearr_22161_22178 = state_22149__$1;
(statearr_22161_22178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (5))){
var inst_22121 = (state_22149[(7)]);
var inst_22138 = (state_22149[(9)]);
var inst_22141 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_22121,inst_22138) : f.call(null,inst_22121,inst_22138));
var inst_22121__$1 = inst_22141;
var state_22149__$1 = (function (){var statearr_22162 = state_22149;
(statearr_22162[(7)] = inst_22121__$1);

return statearr_22162;
})();
var statearr_22163_22179 = state_22149__$1;
(statearr_22163_22179[(2)] = null);

(statearr_22163_22179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (6))){
var inst_22121 = (state_22149[(7)]);
var state_22149__$1 = state_22149;
var statearr_22164_22180 = state_22149__$1;
(statearr_22164_22180[(2)] = inst_22121);

(statearr_22164_22180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22150 === (7))){
var inst_22145 = (state_22149[(2)]);
var state_22149__$1 = state_22149;
var statearr_22165_22181 = state_22149__$1;
(statearr_22165_22181[(2)] = inst_22145);

(statearr_22165_22181[(1)] = (3));


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
});
return (function() {
var teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto__ = null;
var teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto____0 = (function (){
var statearr_22166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22166[(0)] = teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto__);

(statearr_22166[(1)] = (1));

return statearr_22166;
});
var teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto____1 = (function (state_22149){
while(true){
var ret_value__18101__auto__ = (function (){try{while(true){
var result__18102__auto__ = switch__18099__auto__(state_22149);
if(cljs.core.keyword_identical_QMARK_(result__18102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18102__auto__;
}
break;
}
}catch (e22167){var ex__18103__auto__ = e22167;
var statearr_22168_22182 = state_22149;
(statearr_22168_22182[(2)] = ex__18103__auto__);


if(cljs.core.seq((state_22149[(4)]))){
var statearr_22169_22183 = state_22149;
(statearr_22169_22183[(1)] = cljs.core.first((state_22149[(4)])));

} else {
throw ex__18103__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22184 = state_22149;
state_22149 = G__22184;
continue;
} else {
return ret_value__18101__auto__;
}
break;
}
});
teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto__ = function(state_22149){
switch(arguments.length){
case 0:
return teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto____0.call(this);
case 1:
return teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto____1.call(this,state_22149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto____0;
teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto____1;
return teg_online$utils$async$reduce_until_timeout_BANG__$_state_machine__18100__auto__;
})()
})();
var state__18875__auto__ = (function (){var statearr_22170 = f__18874__auto__();
(statearr_22170[(6)] = c__18873__auto__);

return statearr_22170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18875__auto__);
}));

return c__18873__auto__;
});
teg_online.utils.async.throw_err = (function teg_online$utils$async$throw_err(e){
if((e instanceof Error)){
throw e;
} else {
}

return e;
});

//# sourceMappingURL=teg_online.utils.async.js.map
