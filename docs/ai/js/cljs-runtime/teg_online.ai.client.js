goog.provide('teg_online.ai.client');
teg_online.ai.client.SERVER_URL = ((goog.DEBUG)?"http://localhost:3000/ai":"https://teg-online-qlex.onrender.com/ai");
if((typeof teg_online !== 'undefined') && (typeof teg_online.ai !== 'undefined') && (typeof teg_online.ai.client !== 'undefined') && (typeof teg_online.ai.client.reader !== 'undefined')){
} else {
teg_online.ai.client.reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
}
if((typeof teg_online !== 'undefined') && (typeof teg_online.ai !== 'undefined') && (typeof teg_online.ai.client !== 'undefined') && (typeof teg_online.ai.client.writer !== 'undefined')){
} else {
teg_online.ai.client.writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
}
teg_online.ai.client.js_error = (function teg_online$ai$client$js_error(err){
if((err instanceof Error)){
return err;
} else {
return (new Error("ERROR!",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),err], null))));
}
});
teg_online.ai.client.response_text = (function teg_online$ai$client$response_text(var_args){
var G__173314 = arguments.length;
switch (G__173314) {
case 1:
return teg_online.ai.client.response_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return teg_online.ai.client.response_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.ai.client.response_text.cljs$core$IFn$_invoke$arity$1 = (function (response){
return teg_online.ai.client.response_text.cljs$core$IFn$_invoke$arity$2(response,(function (ch,err){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,err);
}));
}));

(teg_online.ai.client.response_text.cljs$core$IFn$_invoke$arity$2 = (function (response,error_handler){
var result_chan = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var G__173315_173515 = response.text();
G__173315_173515.then((function (text){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,text);
}));

G__173315_173515.catch((function (err){
var G__173316 = result_chan;
var G__173317 = teg_online.ai.client.js_error(err);
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(G__173316,G__173317) : error_handler.call(null,G__173316,G__173317));
}));


return result_chan;
}));

(teg_online.ai.client.response_text.cljs$lang$maxFixedArity = 2);

teg_online.ai.client.POST = (function teg_online$ai$client$POST(url,data){
var result_chan = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var G__173318_173516 = fetch(url,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","text/plain"], null),new cljs.core.Keyword(null,"body","body",-2049205669),data], null)));
G__173318_173516.catch((function (err){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,teg_online.ai.client.js_error(err));
}));

G__173318_173516.then((function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,response);
}));


return result_chan;
});
teg_online.ai.client.fetch_response = (function teg_online$ai$client$fetch_response(var_args){
var G__173320 = arguments.length;
switch (G__173320) {
case 1:
return teg_online.ai.client.fetch_response.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return teg_online.ai.client.fetch_response.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.ai.client.fetch_response.cljs$core$IFn$_invoke$arity$1 = (function (data){
return teg_online.ai.client.fetch_response.cljs$core$IFn$_invoke$arity$2(data,cljs.core.PersistentVector.EMPTY);
}));

(teg_online.ai.client.fetch_response.cljs$core$IFn$_invoke$arity$2 = (function (data,errors){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_173396){
var state_val_173397 = (state_173396[(1)]);
if((state_val_173397 === (7))){
var inst_173330 = (state_173396[(2)]);
var state_173396__$1 = state_173396;
var statearr_173398_173518 = state_173396__$1;
(statearr_173398_173518[(2)] = inst_173330);

(statearr_173398_173518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (20))){
var inst_173388 = (state_173396[(2)]);
var _ = (function (){var statearr_173399 = state_173396;
(statearr_173399[(4)] = cljs.core.rest((state_173396[(4)])));

return statearr_173399;
})();
var state_173396__$1 = state_173396;
var statearr_173400_173519 = state_173396__$1;
(statearr_173400_173519[(2)] = inst_173388);

(statearr_173400_173519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (1))){
var state_173396__$1 = state_173396;
var statearr_173401_173520 = state_173396__$1;
(statearr_173401_173520[(2)] = null);

(statearr_173401_173520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (24))){
var state_173396__$1 = state_173396;
var statearr_173402_173521 = state_173396__$1;
(statearr_173402_173521[(2)] = null);

(statearr_173402_173521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (4))){
var inst_173321 = (state_173396[(7)]);
var inst_173321__$1 = (state_173396[(2)]);
var inst_173322 = (inst_173321__$1 instanceof Error);
var state_173396__$1 = (function (){var statearr_173403 = state_173396;
(statearr_173403[(7)] = inst_173321__$1);

return statearr_173403;
})();
if(cljs.core.truth_(inst_173322)){
var statearr_173404_173522 = state_173396__$1;
(statearr_173404_173522[(1)] = (5));

} else {
var statearr_173405_173523 = state_173396__$1;
(statearr_173405_173523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (15))){
var inst_173347 = (state_173396[(2)]);
var inst_173348 = teg_online.utils.async.throw_err(inst_173347);
var state_173396__$1 = state_173396;
var statearr_173406_173524 = state_173396__$1;
(statearr_173406_173524[(2)] = inst_173348);

(statearr_173406_173524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (21))){
var inst_173370 = (state_173396[(2)]);
var inst_173371 = teg_online.utils.async.throw_err(inst_173370);
var state_173396__$1 = state_173396;
var statearr_173407_173525 = state_173396__$1;
(statearr_173407_173525[(2)] = inst_173371);

(statearr_173407_173525[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (13))){
var inst_173350 = [new cljs.core.Keyword(null,"errors","errors",-908790718)];
var inst_173351 = [errors];
var inst_173352 = cljs.core.PersistentHashMap.fromArrays(inst_173350,inst_173351);
var inst_173353 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Too many retries!",inst_173352);
var inst_173354 = (function (){throw inst_173353})();
var state_173396__$1 = state_173396;
var statearr_173408_173526 = state_173396__$1;
(statearr_173408_173526[(2)] = inst_173354);

(statearr_173408_173526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (22))){
var inst_173365 = (state_173396[(8)]);
var inst_173377 = (state_173396[(9)]);
var inst_173376 = (state_173396[(2)]);
var inst_173377__$1 = teg_online.utils.async.throw_err(inst_173376);
var inst_173378 = inst_173365.status;
var state_173396__$1 = (function (){var statearr_173409 = state_173396;
(statearr_173409[(9)] = inst_173377__$1);

(statearr_173409[(10)] = inst_173378);

return statearr_173409;
})();
if(cljs.core.truth_(inst_173377__$1)){
var statearr_173410_173527 = state_173396__$1;
(statearr_173410_173527[(1)] = (23));

} else {
var statearr_173411_173528 = state_173396__$1;
(statearr_173411_173528[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (6))){
var inst_173321 = (state_173396[(7)]);
var inst_173327 = ({"cause":inst_173321});
var inst_173328 = (new Error("ERROR",inst_173327));
var state_173396__$1 = state_173396;
var statearr_173412_173529 = state_173396__$1;
(statearr_173412_173529[(2)] = inst_173328);

(statearr_173412_173529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (25))){
var inst_173378 = (state_173396[(10)]);
var inst_173383 = (state_173396[(2)]);
var inst_173384 = (""+"Response status: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_173378)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_173383));
var inst_173385 = Error(inst_173384);
var inst_173386 = (function (){throw inst_173385})();
var state_173396__$1 = state_173396;
var statearr_173413_173530 = state_173396__$1;
(statearr_173413_173530[(2)] = inst_173386);

(statearr_173413_173530[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (17))){
var inst_173365 = (state_173396[(8)]);
var inst_173364 = (state_173396[(2)]);
var inst_173365__$1 = teg_online.utils.async.throw_err(inst_173364);
var inst_173366 = inst_173365__$1.ok;
var state_173396__$1 = (function (){var statearr_173414 = state_173396;
(statearr_173414[(8)] = inst_173365__$1);

return statearr_173414;
})();
if(cljs.core.truth_(inst_173366)){
var statearr_173415_173531 = state_173396__$1;
(statearr_173415_173531[(1)] = (18));

} else {
var statearr_173416_173532 = state_173396__$1;
(statearr_173416_173532[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (3))){
var inst_173394 = (state_173396[(2)]);
var state_173396__$1 = state_173396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_173396__$1,inst_173394);
} else {
if((state_val_173397 === (12))){
var inst_173336 = (state_173396[(11)]);
var inst_173343 = inst_173336.message;
var inst_173344 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(errors,inst_173343);
var inst_173345 = teg_online.ai.client.fetch_response.cljs$core$IFn$_invoke$arity$2(data,inst_173344);
var state_173396__$1 = state_173396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_173396__$1,(15),inst_173345);
} else {
if((state_val_173397 === (2))){
var _ = (function (){var statearr_173417 = state_173396;
(statearr_173417[(4)] = cljs.core.cons((8),(state_173396[(4)])));

return statearr_173417;
})();
var state_173396__$1 = state_173396;
var statearr_173418_173533 = state_173396__$1;
(statearr_173418_173533[(2)] = null);

(statearr_173418_173533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (23))){
var inst_173377 = (state_173396[(9)]);
var inst_173380 = (""+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_173377));
var state_173396__$1 = state_173396;
var statearr_173419_173534 = state_173396__$1;
(statearr_173419_173534[(2)] = inst_173380);

(statearr_173419_173534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (19))){
var inst_173365 = (state_173396[(8)]);
var inst_173373 = (function (){var response = inst_173365;
return (function (ch,_){
return cljs.core.async.close_BANG_(ch);
});
})();
var inst_173374 = teg_online.ai.client.response_text.cljs$core$IFn$_invoke$arity$2(inst_173365,inst_173373);
var state_173396__$1 = state_173396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_173396__$1,(22),inst_173374);
} else {
if((state_val_173397 === (11))){
var inst_173336 = (state_173396[(2)]);
var inst_173337 = cljs.core.count(errors);
var inst_173338 = (""+"ERROR fetching response. Retry: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_173337));
var inst_173339 = console.error(inst_173338);
var inst_173340 = cljs.core.count(errors);
var inst_173341 = (inst_173340 < (3));
var state_173396__$1 = (function (){var statearr_173420 = state_173396;
(statearr_173420[(11)] = inst_173336);

(statearr_173420[(12)] = inst_173339);

return statearr_173420;
})();
if(cljs.core.truth_(inst_173341)){
var statearr_173421_173535 = state_173396__$1;
(statearr_173421_173535[(1)] = (12));

} else {
var statearr_173422_173536 = state_173396__$1;
(statearr_173422_173536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (9))){
var _ = (function (){var statearr_173423 = state_173396;
(statearr_173423[(4)] = cljs.core.cons((16),(state_173396[(4)])));

return statearr_173423;
})();
var inst_173362 = teg_online.ai.client.POST(teg_online.ai.client.SERVER_URL,data);
var state_173396__$1 = state_173396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_173396__$1,(17),inst_173362);
} else {
if((state_val_173397 === (5))){
var inst_173321 = (state_173396[(7)]);
var state_173396__$1 = state_173396;
var statearr_173425_173537 = state_173396__$1;
(statearr_173425_173537[(2)] = inst_173321);

(statearr_173425_173537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (14))){
var inst_173356 = (state_173396[(2)]);
var state_173396__$1 = state_173396;
var statearr_173426_173538 = state_173396__$1;
(statearr_173426_173538[(2)] = inst_173356);

(statearr_173426_173538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (16))){
var _ = (function (){var statearr_173427 = state_173396;
(statearr_173427[(4)] = cljs.core.rest((state_173396[(4)])));

return statearr_173427;
})();
var state_173396__$1 = state_173396;
var ex173424 = (state_173396__$1[(2)]);
var statearr_173428_173539 = state_173396__$1;
(statearr_173428_173539[(5)] = ex173424);


var statearr_173429_173540 = state_173396__$1;
(statearr_173429_173540[(1)] = (11));

(statearr_173429_173540[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (10))){
var inst_173391 = (state_173396[(2)]);
var _ = (function (){var statearr_173431 = state_173396;
(statearr_173431[(4)] = cljs.core.rest((state_173396[(4)])));

return statearr_173431;
})();
var state_173396__$1 = state_173396;
var statearr_173432_173541 = state_173396__$1;
(statearr_173432_173541[(2)] = inst_173391);

(statearr_173432_173541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173397 === (18))){
var inst_173365 = (state_173396[(8)]);
var inst_173368 = teg_online.ai.client.response_text.cljs$core$IFn$_invoke$arity$1(inst_173365);
var state_173396__$1 = state_173396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_173396__$1,(21),inst_173368);
} else {
if((state_val_173397 === (8))){
var _ = (function (){var statearr_173433 = state_173396;
(statearr_173433[(4)] = cljs.core.rest((state_173396[(4)])));

return statearr_173433;
})();
var state_173396__$1 = state_173396;
var ex173430 = (state_173396__$1[(2)]);
var statearr_173434_173542 = state_173396__$1;
(statearr_173434_173542[(5)] = ex173430);


var statearr_173435_173543 = state_173396__$1;
(statearr_173435_173543[(1)] = (4));

(statearr_173435_173543[(5)] = null);



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
});
return (function() {
var teg_online$ai$client$state_machine__18069__auto__ = null;
var teg_online$ai$client$state_machine__18069__auto____0 = (function (){
var statearr_173436 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_173436[(0)] = teg_online$ai$client$state_machine__18069__auto__);

(statearr_173436[(1)] = (1));

return statearr_173436;
});
var teg_online$ai$client$state_machine__18069__auto____1 = (function (state_173396){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_173396);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e173437){var ex__18072__auto__ = e173437;
var statearr_173438_173544 = state_173396;
(statearr_173438_173544[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_173396[(4)]))){
var statearr_173439_173545 = state_173396;
(statearr_173439_173545[(1)] = cljs.core.first((state_173396[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__173546 = state_173396;
state_173396 = G__173546;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ai$client$state_machine__18069__auto__ = function(state_173396){
switch(arguments.length){
case 0:
return teg_online$ai$client$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ai$client$state_machine__18069__auto____1.call(this,state_173396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ai$client$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ai$client$state_machine__18069__auto____0;
teg_online$ai$client$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ai$client$state_machine__18069__auto____1;
return teg_online$ai$client$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_173440 = f__19294__auto__();
(statearr_173440[(6)] = c__19293__auto__);

return statearr_173440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
}));

(teg_online.ai.client.fetch_response.cljs$lang$maxFixedArity = 2);

teg_online.ai.client.read_response = (function teg_online$ai$client$read_response(response){
if(cljs.core.truth_(response)){
return cognitect.transit.read(teg_online.ai.client.reader,response);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teg_online.ai.actions.pass], null)], null);
}
});
teg_online.ai.client.ask_BANG_ = (function teg_online$ai$client$ask_BANG_(var_args){
var G__173442 = arguments.length;
switch (G__173442) {
case 2:
return teg_online.ai.client.ask_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return teg_online.ai.client.ask_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.ai.client.ask_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,turn_actions){
return teg_online.ai.client.ask_BANG_.cljs$core$IFn$_invoke$arity$3(state,turn_actions,teg_online.ai.models.models);
}));

(teg_online.ai.client.ask_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,turn_actions,enabled_models){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__173443){
var map__173444 = p__173443;
var map__173444__$1 = cljs.core.__destructure_map(map__173444);
var model = map__173444__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__173444__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__173444__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(function (){var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_173493){
var state_val_173494 = (state_173493[(1)]);
if((state_val_173494 === (7))){
var inst_173463 = [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"turn-actions","turn-actions",-1182371916),new cljs.core.Keyword(null,"model","model",331153215)];
var inst_173464 = [game,turn_actions,id];
var inst_173465 = cljs.core.PersistentHashMap.fromArrays(inst_173463,inst_173464);
var inst_173466 = cognitect.transit.write(teg_online.ai.client.writer,inst_173465);
var inst_173467 = teg_online.ai.client.fetch_response.cljs$core$IFn$_invoke$arity$1(inst_173466);
var state_173493__$1 = state_173493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_173493__$1,(10),inst_173467);
} else {
if((state_val_173494 === (1))){
var state_173493__$1 = state_173493;
var statearr_173495_173548 = state_173493__$1;
(statearr_173495_173548[(2)] = null);

(statearr_173495_173548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173494 === (4))){
var inst_173445 = (state_173493[(2)]);
var inst_173446 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_173447 = [inst_173445];
var inst_173448 = cljs.core.PersistentHashMap.fromArrays(inst_173446,inst_173447);
var state_173493__$1 = state_173493;
var statearr_173496_173549 = state_173493__$1;
(statearr_173496_173549[(2)] = inst_173448);

(statearr_173496_173549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173494 === (6))){
var inst_173456 = (function (){return (function (timestamp,data){
return console.log(timestamp,data);
});
})();
var inst_173457 = teg_online.ai.local_handlers.handler_by_id(id);
var inst_173458 = (inst_173457.cljs$core$IFn$_invoke$arity$4 ? inst_173457.cljs$core$IFn$_invoke$arity$4(game,turn_actions,model,inst_173456) : inst_173457.call(null,game,turn_actions,model,inst_173456));
var state_173493__$1 = state_173493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_173493__$1,(9),inst_173458);
} else {
if((state_val_173494 === (3))){
var inst_173491 = (state_173493[(2)]);
var state_173493__$1 = state_173493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_173493__$1,inst_173491);
} else {
if((state_val_173494 === (2))){
var _ = (function (){var statearr_173497 = state_173493;
(statearr_173497[(4)] = cljs.core.cons((5),(state_173493[(4)])));

return statearr_173497;
})();
var state_173493__$1 = state_173493;
if(cljs.core.truth_(local_QMARK_)){
var statearr_173498_173550 = state_173493__$1;
(statearr_173498_173550[(1)] = (6));

} else {
var statearr_173499_173551 = state_173493__$1;
(statearr_173499_173551[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173494 === (11))){
var inst_173476 = (state_173493[(7)]);
var inst_173475 = (state_173493[(8)]);
var inst_173480 = (state_173493[(9)]);
var inst_173477 = (state_173493[(10)]);
var inst_173478 = (state_173493[(11)]);
var inst_173483 = (state_173493[(2)]);
var inst_173484 = teg_online.utils.async.throw_err(inst_173483);
var inst_173485 = teg_online.game.get_current_player(game);
var inst_173486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_173484,inst_173485);
var inst_173487 = [state,inst_173476,inst_173475,inst_173480,inst_173477,inst_173486];
var inst_173488 = cljs.core.PersistentHashMap.fromArrays(inst_173478,inst_173487);
var _ = (function (){var statearr_173501 = state_173493;
(statearr_173501[(4)] = cljs.core.rest((state_173493[(4)])));

return statearr_173501;
})();
var state_173493__$1 = state_173493;
var statearr_173502_173552 = state_173493__$1;
(statearr_173502_173552[(2)] = inst_173488);

(statearr_173502_173552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173494 === (9))){
var inst_173460 = (state_173493[(2)]);
var inst_173461 = teg_online.utils.async.throw_err(inst_173460);
var state_173493__$1 = state_173493;
var statearr_173503_173553 = state_173493__$1;
(statearr_173503_173553[(2)] = inst_173461);

(statearr_173503_173553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173494 === (5))){
var _ = (function (){var statearr_173504 = state_173493;
(statearr_173504[(4)] = cljs.core.rest((state_173493[(4)])));

return statearr_173504;
})();
var state_173493__$1 = state_173493;
var ex173500 = (state_173493__$1[(2)]);
var statearr_173505_173554 = state_173493__$1;
(statearr_173505_173554[(5)] = ex173500);


var statearr_173506_173555 = state_173493__$1;
(statearr_173506_173555[(1)] = (4));

(statearr_173506_173555[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173494 === (10))){
var inst_173469 = (state_173493[(2)]);
var inst_173470 = teg_online.utils.async.throw_err(inst_173469);
var inst_173471 = teg_online.ai.client.read_response(inst_173470);
var state_173493__$1 = state_173493;
var statearr_173507_173556 = state_173493__$1;
(statearr_173507_173556[(2)] = inst_173471);

(statearr_173507_173556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_173494 === (8))){
var inst_173475 = (state_173493[(8)]);
var inst_173477 = (state_173493[(10)]);
var inst_173473 = (state_173493[(2)]);
var inst_173474 = cljs.core.__destructure_map(inst_173473);
var inst_173475__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_173474,new cljs.core.Keyword(null,"actions","actions",-812656882));
var inst_173476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_173474,new cljs.core.Keyword(null,"conversation","conversation",1148767509));
var inst_173477__$1 = teg_online.ai.actions.make_mutation(inst_173475__$1);
var inst_173478 = [new cljs.core.Keyword(null,"original-state","original-state",-1223338677),new cljs.core.Keyword(null,"conversation","conversation",1148767509),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"pass?","pass?",-424635753),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_173479 = cljs.core.last(inst_173475__$1);
var inst_173480 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(teg_online.ai.actions.pass,inst_173479);
var inst_173481 = teg_online.ai.actions.calculate_score.cljs$core$IFn$_invoke$arity$2(game,inst_173477__$1);
var state_173493__$1 = (function (){var statearr_173508 = state_173493;
(statearr_173508[(8)] = inst_173475__$1);

(statearr_173508[(7)] = inst_173476);

(statearr_173508[(10)] = inst_173477__$1);

(statearr_173508[(11)] = inst_173478);

(statearr_173508[(9)] = inst_173480);

return statearr_173508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_173493__$1,(11),inst_173481);
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
var teg_online$ai$client$state_machine__18069__auto__ = null;
var teg_online$ai$client$state_machine__18069__auto____0 = (function (){
var statearr_173509 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_173509[(0)] = teg_online$ai$client$state_machine__18069__auto__);

(statearr_173509[(1)] = (1));

return statearr_173509;
});
var teg_online$ai$client$state_machine__18069__auto____1 = (function (state_173493){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_173493);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e173510){var ex__18072__auto__ = e173510;
var statearr_173511_173557 = state_173493;
(statearr_173511_173557[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_173493[(4)]))){
var statearr_173512_173558 = state_173493;
(statearr_173512_173558[(1)] = cljs.core.first((state_173493[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__173559 = state_173493;
state_173493 = G__173559;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ai$client$state_machine__18069__auto__ = function(state_173493){
switch(arguments.length){
case 0:
return teg_online$ai$client$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ai$client$state_machine__18069__auto____1.call(this,state_173493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ai$client$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ai$client$state_machine__18069__auto____0;
teg_online$ai$client$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ai$client$state_machine__18069__auto____1;
return teg_online$ai$client$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_173513 = f__19294__auto__();
(statearr_173513[(6)] = c__19293__auto__);

return statearr_173513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
})()], null);
}),enabled_models));
}));

(teg_online.ai.client.ask_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=teg_online.ai.client.js.map
