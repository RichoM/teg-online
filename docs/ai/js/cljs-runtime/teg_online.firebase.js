goog.provide('teg_online.firebase');
teg_online.firebase.collection_id = "games_dev";
teg_online.firebase.sorted_countries = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(teg_online.board.countries)));
teg_online.firebase.destructors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
teg_online.firebase.game__GT_doc = (function teg_online$firebase$game__GT_doc(game){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(game,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"turn-order","turn-order",669259588),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"current-turn","current-turn",-593026573)], null)),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (country){
var map__29447 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),country], null));
var map__29447__$1 = cljs.core.__destructure_map(map__29447);
var owner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29447__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29447__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var used_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29447__$1,new cljs.core.Keyword(null,"used?","used?",-1692940128));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),owner,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"used?","used?",-1692940128),used_QMARK_], null);
}),teg_online.firebase.sorted_countries),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"countries","countries",863192750),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (country){
var map__29448 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),country], null));
var map__29448__$1 = cljs.core.__destructure_map(map__29448);
var army = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29448__$1,new cljs.core.Keyword(null,"army","army",842961270));
var owner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29448__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"army","army",842961270),army,new cljs.core.Keyword(null,"owner","owner",-392611939),owner], null);
}),teg_online.firebase.sorted_countries)], 0));
});
teg_online.firebase.doc__GT_game = (function teg_online$firebase$doc__GT_game(p__29457){
var map__29458 = p__29457;
var map__29458__$1 = cljs.core.__destructure_map(map__29458);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29458__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29458__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var turn_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29458__$1,new cljs.core.Keyword(null,"turn-order","turn-order",669259588));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29458__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var countries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29458__$1,new cljs.core.Keyword(null,"countries","countries",863192750));
var winner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29458__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29458__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var current_turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29458__$1,new cljs.core.Keyword(null,"current-turn","current-turn",-593026573));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"phase","phase",575722892),(cljs.core.truth_(phase)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(new cljs.core.Keyword("teg-online.game","*","teg-online.game/*",-253427444)),phase):null),new cljs.core.Keyword(null,"turn","turn",75759344),turn,new cljs.core.Keyword(null,"turn-order","turn-order",669259588),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,turn_order),new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),current_turn,new cljs.core.Keyword(null,"winner","winner",714604679),(cljs.core.truth_(winner)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(winner):null),new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29460){
var vec__29461 = p__29460;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29461,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29461,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(player,new cljs.core.Keyword(null,"id","id",-1388402092),id)], null);
}),players)),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__29466){
var map__29467 = p__29466;
var map__29467__$1 = cljs.core.__destructure_map(map__29467);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29467__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var owner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29467__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var used_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29467__$1,new cljs.core.Keyword(null,"used?","used?",-1692940128));
var country = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(teg_online.firebase.sorted_countries,idx);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [country,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"country","country",312965309),country,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(new cljs.core.Keyword("teg-online.board","*","teg-online.board/*",783873416)),type),new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(owner),new cljs.core.Keyword(null,"used?","used?",-1692940128),used_QMARK_], null)], null);
}),cards)),new cljs.core.Keyword(null,"countries","countries",863192750),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__29468){
var map__29470 = p__29468;
var map__29470__$1 = cljs.core.__destructure_map(map__29470);
var army = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29470__$1,new cljs.core.Keyword(null,"army","army",842961270));
var owner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29470__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(teg_online.firebase.sorted_countries,idx);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"army","army",842961270),army,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(owner)], null)], null);
}),countries))], null);
});
teg_online.firebase.create_game_BANG_ = (function teg_online$firebase$create_game_BANG_(){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_29536){
var state_val_29537 = (state_29536[(1)]);
if((state_val_29537 === (7))){
var inst_29486 = (state_29536[(7)]);
var state_29536__$1 = state_29536;
var statearr_29550_30277 = state_29536__$1;
(statearr_29550_30277[(2)] = inst_29486);

(statearr_29550_30277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (1))){
var inst_29478 = db.collection(teg_online.firebase.collection_id);
var inst_29480 = teg_online.game.new_game();
var inst_29481 = teg_online.firebase.game__GT_doc(inst_29480);
var inst_29482 = cljs.core.clj__GT_js(inst_29481);
var inst_29483 = inst_29478.add(inst_29482);
var inst_29484 = cljs.core.async.interop.p__GT_c(inst_29483);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29536__$1,(2),inst_29484);
} else {
if((state_val_29537 === (4))){
var inst_29487 = (state_29536[(8)]);
var state_29536__$1 = state_29536;
var statearr_29562_30280 = state_29536__$1;
(statearr_29562_30280[(2)] = inst_29487);

(statearr_29562_30280[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (15))){
var inst_29530 = (state_29536[(2)]);
var _ = (function (){var statearr_29563 = state_29536;
(statearr_29563[(4)] = cljs.core.rest((state_29536[(4)])));

return statearr_29563;
})();
var state_29536__$1 = state_29536;
var statearr_29564_30281 = state_29536__$1;
(statearr_29564_30281[(2)] = inst_29530);

(statearr_29564_30281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (13))){
var inst_29499 = (state_29536[(9)]);
var inst_29527 = (inst_29499["id"]);
var state_29536__$1 = state_29536;
var statearr_29565_30283 = state_29536__$1;
(statearr_29565_30283[(2)] = inst_29527);

(statearr_29565_30283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (6))){
var inst_29486 = (state_29536[(7)]);
var inst_29496 = (function (){throw inst_29486})();
var state_29536__$1 = state_29536;
var statearr_29568_30285 = state_29536__$1;
(statearr_29568_30285[(2)] = inst_29496);

(statearr_29568_30285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (3))){
var inst_29486 = (state_29536[(7)]);
var inst_29489 = cljs.core.ex_data(inst_29486);
var inst_29490 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29489);
var inst_29491 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29490,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_29536__$1 = state_29536;
var statearr_29573_30286 = state_29536__$1;
(statearr_29573_30286[(2)] = inst_29491);

(statearr_29573_30286[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (12))){
var _ = (function (){var statearr_29581 = state_29536;
(statearr_29581[(4)] = cljs.core.rest((state_29536[(4)])));

return statearr_29581;
})();
var state_29536__$1 = state_29536;
var ex29567 = (state_29536__$1[(2)]);
var statearr_29582_30287 = state_29536__$1;
(statearr_29582_30287[(5)] = ex29567);


throw ex29567;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (2))){
var inst_29486 = (state_29536[(7)]);
var inst_29487 = (state_29536[(8)]);
var inst_29486__$1 = (state_29536[(2)]);
var inst_29487__$1 = (inst_29486__$1 instanceof cljs.core.ExceptionInfo);
var state_29536__$1 = (function (){var statearr_29588 = state_29536;
(statearr_29588[(7)] = inst_29486__$1);

(statearr_29588[(8)] = inst_29487__$1);

return statearr_29588;
})();
if(cljs.core.truth_(inst_29487__$1)){
var statearr_29589_30288 = state_29536__$1;
(statearr_29589_30288[(1)] = (3));

} else {
var statearr_29590_30289 = state_29536__$1;
(statearr_29590_30289[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (11))){
var inst_29506 = (state_29536[(10)]);
var _ = (function (){var statearr_29591 = state_29536;
(statearr_29591[(4)] = cljs.core.rest((state_29536[(4)])));

return statearr_29591;
})();
var inst_29514 = (state_29536[(2)]);
var inst_29517 = (oops.state._STAR_runtime_state_STAR_ = inst_29506);
var ___$1 = (function (){var temp__5825__auto__ = (state_29536[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_29536__$1 = (function (){var statearr_29595 = state_29536;
(statearr_29595[(11)] = inst_29517);

return statearr_29595;
})();
var statearr_29597_30291 = state_29536__$1;
(statearr_29597_30291[(2)] = inst_29514);

(statearr_29597_30291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (9))){
var inst_29499 = (state_29536[(9)]);
var _ = (function (){var statearr_29600 = state_29536;
(statearr_29600[(4)] = cljs.core.cons((11),(state_29536[(4)])));

return statearr_29600;
})();
var ___$1 = (function (){var statearr_29607 = state_29536;
(statearr_29607[(4)] = cljs.core.cons((12),(state_29536[(4)])));

return statearr_29607;
})();
var inst_29525 = oops.core.validate_object_access_dynamically(inst_29499,(0),"id",true,true,false);
var state_29536__$1 = state_29536;
if(inst_29525){
var statearr_29615_30292 = state_29536__$1;
(statearr_29615_30292[(1)] = (13));

} else {
var statearr_29617_30293 = state_29536__$1;
(statearr_29617_30293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (5))){
var inst_29494 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
if(cljs.core.truth_(inst_29494)){
var statearr_29619_30295 = state_29536__$1;
(statearr_29619_30295[(1)] = (6));

} else {
var statearr_29624_30296 = state_29536__$1;
(statearr_29624_30296[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (14))){
var state_29536__$1 = state_29536;
var statearr_29642_30297 = state_29536__$1;
(statearr_29642_30297[(2)] = null);

(statearr_29642_30297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (10))){
var inst_29533 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29536__$1,inst_29533);
} else {
if((state_val_29537 === (8))){
var inst_29499 = (state_29536[(9)]);
var inst_29499__$1 = (state_29536[(2)]);
var inst_29506 = oops.state._STAR_runtime_state_STAR_;
var inst_29507 = (new Error());
var inst_29508 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_29509 = oops.state.prepare_state(inst_29499__$1,inst_29507,inst_29508);
var inst_29511 = (oops.state._STAR_runtime_state_STAR_ = inst_29509);
var state_29536__$1 = (function (){var statearr_29692 = state_29536;
(statearr_29692[(9)] = inst_29499__$1);

(statearr_29692[(10)] = inst_29506);

(statearr_29692[(12)] = inst_29511);

return statearr_29692;
})();
var statearr_29708_30299 = state_29536__$1;
(statearr_29708_30299[(2)] = null);

(statearr_29708_30299[(1)] = (9));


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
});
return (function() {
var teg_online$firebase$create_game_BANG__$_state_machine__18069__auto__ = null;
var teg_online$firebase$create_game_BANG__$_state_machine__18069__auto____0 = (function (){
var statearr_29753 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29753[(0)] = teg_online$firebase$create_game_BANG__$_state_machine__18069__auto__);

(statearr_29753[(1)] = (1));

return statearr_29753;
});
var teg_online$firebase$create_game_BANG__$_state_machine__18069__auto____1 = (function (state_29536){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_29536);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e29760){var ex__18072__auto__ = e29760;
var statearr_29770_30300 = state_29536;
(statearr_29770_30300[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_29536[(4)]))){
var statearr_29778_30301 = state_29536;
(statearr_29778_30301[(1)] = cljs.core.first((state_29536[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30302 = state_29536;
state_29536 = G__30302;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$firebase$create_game_BANG__$_state_machine__18069__auto__ = function(state_29536){
switch(arguments.length){
case 0:
return teg_online$firebase$create_game_BANG__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$firebase$create_game_BANG__$_state_machine__18069__auto____1.call(this,state_29536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$firebase$create_game_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$firebase$create_game_BANG__$_state_machine__18069__auto____0;
teg_online$firebase$create_game_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$firebase$create_game_BANG__$_state_machine__18069__auto____1;
return teg_online$firebase$create_game_BANG__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_29806 = f__19294__auto__();
(statearr_29806[(6)] = c__19293__auto__);

return statearr_29806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.firebase.exists_QMARK_ = (function teg_online$firebase$exists_QMARK_(doc_ref){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_29918){
var state_val_29919 = (state_29918[(1)]);
if((state_val_29919 === (7))){
var inst_29863 = (state_29918[(7)]);
var state_29918__$1 = state_29918;
var statearr_29921_30303 = state_29918__$1;
(statearr_29921_30303[(2)] = inst_29863);

(statearr_29921_30303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (1))){
var inst_29860 = doc_ref.get();
var inst_29861 = cljs.core.async.interop.p__GT_c(inst_29860);
var state_29918__$1 = state_29918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29918__$1,(2),inst_29861);
} else {
if((state_val_29919 === (4))){
var inst_29868 = (state_29918[(8)]);
var state_29918__$1 = state_29918;
var statearr_29927_30305 = state_29918__$1;
(statearr_29927_30305[(2)] = inst_29868);

(statearr_29927_30305[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (15))){
var inst_29913 = (state_29918[(2)]);
var _ = (function (){var statearr_29928 = state_29918;
(statearr_29928[(4)] = cljs.core.rest((state_29918[(4)])));

return statearr_29928;
})();
var state_29918__$1 = state_29918;
var statearr_29929_30306 = state_29918__$1;
(statearr_29929_30306[(2)] = inst_29913);

(statearr_29929_30306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (13))){
var inst_29884 = (state_29918[(9)]);
var inst_29910 = (inst_29884["exists"]);
var state_29918__$1 = state_29918;
var statearr_29930_30308 = state_29918__$1;
(statearr_29930_30308[(2)] = inst_29910);

(statearr_29930_30308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (6))){
var inst_29863 = (state_29918[(7)]);
var inst_29881 = (function (){throw inst_29863})();
var state_29918__$1 = state_29918;
var statearr_29943_30309 = state_29918__$1;
(statearr_29943_30309[(2)] = inst_29881);

(statearr_29943_30309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (3))){
var inst_29863 = (state_29918[(7)]);
var inst_29874 = cljs.core.ex_data(inst_29863);
var inst_29875 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29874);
var inst_29876 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29875,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_29918__$1 = state_29918;
var statearr_29960_30310 = state_29918__$1;
(statearr_29960_30310[(2)] = inst_29876);

(statearr_29960_30310[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (12))){
var _ = (function (){var statearr_29963 = state_29918;
(statearr_29963[(4)] = cljs.core.rest((state_29918[(4)])));

return statearr_29963;
})();
var state_29918__$1 = state_29918;
var ex29936 = (state_29918__$1[(2)]);
var statearr_29964_30313 = state_29918__$1;
(statearr_29964_30313[(5)] = ex29936);


throw ex29936;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (2))){
var inst_29863 = (state_29918[(7)]);
var inst_29868 = (state_29918[(8)]);
var inst_29863__$1 = (state_29918[(2)]);
var inst_29868__$1 = (inst_29863__$1 instanceof cljs.core.ExceptionInfo);
var state_29918__$1 = (function (){var statearr_29965 = state_29918;
(statearr_29965[(7)] = inst_29863__$1);

(statearr_29965[(8)] = inst_29868__$1);

return statearr_29965;
})();
if(cljs.core.truth_(inst_29868__$1)){
var statearr_29966_30315 = state_29918__$1;
(statearr_29966_30315[(1)] = (3));

} else {
var statearr_29967_30316 = state_29918__$1;
(statearr_29967_30316[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (11))){
var inst_29889 = (state_29918[(10)]);
var _ = (function (){var statearr_29968 = state_29918;
(statearr_29968[(4)] = cljs.core.rest((state_29918[(4)])));

return statearr_29968;
})();
var inst_29895 = (state_29918[(2)]);
var inst_29896 = (oops.state._STAR_runtime_state_STAR_ = inst_29889);
var ___$1 = (function (){var temp__5825__auto__ = (state_29918[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_29918__$1 = (function (){var statearr_29969 = state_29918;
(statearr_29969[(11)] = inst_29896);

return statearr_29969;
})();
var statearr_29970_30319 = state_29918__$1;
(statearr_29970_30319[(2)] = inst_29895);

(statearr_29970_30319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (9))){
var inst_29884 = (state_29918[(9)]);
var _ = (function (){var statearr_29971 = state_29918;
(statearr_29971[(4)] = cljs.core.cons((11),(state_29918[(4)])));

return statearr_29971;
})();
var ___$1 = (function (){var statearr_29972 = state_29918;
(statearr_29972[(4)] = cljs.core.cons((12),(state_29918[(4)])));

return statearr_29972;
})();
var inst_29905 = oops.core.validate_object_access_dynamically(inst_29884,(0),"exists",true,true,false);
var state_29918__$1 = state_29918;
if(inst_29905){
var statearr_29974_30321 = state_29918__$1;
(statearr_29974_30321[(1)] = (13));

} else {
var statearr_29975_30322 = state_29918__$1;
(statearr_29975_30322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (5))){
var inst_29879 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
if(cljs.core.truth_(inst_29879)){
var statearr_29977_30323 = state_29918__$1;
(statearr_29977_30323[(1)] = (6));

} else {
var statearr_29978_30324 = state_29918__$1;
(statearr_29978_30324[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (14))){
var state_29918__$1 = state_29918;
var statearr_29979_30325 = state_29918__$1;
(statearr_29979_30325[(2)] = null);

(statearr_29979_30325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29919 === (10))){
var inst_29916 = (state_29918[(2)]);
var state_29918__$1 = state_29918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29918__$1,inst_29916);
} else {
if((state_val_29919 === (8))){
var inst_29884 = (state_29918[(9)]);
var inst_29884__$1 = (state_29918[(2)]);
var inst_29889 = oops.state._STAR_runtime_state_STAR_;
var inst_29890 = (new Error());
var inst_29891 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_29892 = oops.state.prepare_state(inst_29884__$1,inst_29890,inst_29891);
var inst_29893 = (oops.state._STAR_runtime_state_STAR_ = inst_29892);
var state_29918__$1 = (function (){var statearr_29982 = state_29918;
(statearr_29982[(9)] = inst_29884__$1);

(statearr_29982[(10)] = inst_29889);

(statearr_29982[(12)] = inst_29893);

return statearr_29982;
})();
var statearr_29983_30327 = state_29918__$1;
(statearr_29983_30327[(2)] = null);

(statearr_29983_30327[(1)] = (9));


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
});
return (function() {
var teg_online$firebase$exists_QMARK__$_state_machine__18069__auto__ = null;
var teg_online$firebase$exists_QMARK__$_state_machine__18069__auto____0 = (function (){
var statearr_29984 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29984[(0)] = teg_online$firebase$exists_QMARK__$_state_machine__18069__auto__);

(statearr_29984[(1)] = (1));

return statearr_29984;
});
var teg_online$firebase$exists_QMARK__$_state_machine__18069__auto____1 = (function (state_29918){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_29918);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e29985){var ex__18072__auto__ = e29985;
var statearr_29986_30328 = state_29918;
(statearr_29986_30328[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_29918[(4)]))){
var statearr_29992_30329 = state_29918;
(statearr_29992_30329[(1)] = cljs.core.first((state_29918[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30330 = state_29918;
state_29918 = G__30330;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$firebase$exists_QMARK__$_state_machine__18069__auto__ = function(state_29918){
switch(arguments.length){
case 0:
return teg_online$firebase$exists_QMARK__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$firebase$exists_QMARK__$_state_machine__18069__auto____1.call(this,state_29918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$firebase$exists_QMARK__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$firebase$exists_QMARK__$_state_machine__18069__auto____0;
teg_online$firebase$exists_QMARK__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$firebase$exists_QMARK__$_state_machine__18069__auto____1;
return teg_online$firebase$exists_QMARK__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_30007 = f__19294__auto__();
(statearr_30007[(6)] = c__19293__auto__);

return statearr_30007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.firebase.on_snapshot = (function teg_online$firebase$on_snapshot(doc_ref,callback){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_30072){
var state_val_30073 = (state_30072[(1)]);
if((state_val_30073 === (7))){
var state_30072__$1 = state_30072;
var statearr_30079_30332 = state_30072__$1;
(statearr_30079_30332[(2)] = null);

(statearr_30079_30332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30073 === (1))){
var inst_30022 = (state_30072[(7)]);
var inst_30029 = (state_30072[(8)]);
var inst_30017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_30022__$1 = doc_ref;
var inst_30025 = oops.state._STAR_runtime_state_STAR_;
var inst_30027 = (new Error());
var inst_30028 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_30029__$1 = oops.state.prepare_state(inst_30022__$1,inst_30027,inst_30028);
var inst_30030 = (oops.state._STAR_runtime_state_STAR_ = inst_30029__$1);
var state_30072__$1 = (function (){var statearr_30081 = state_30072;
(statearr_30081[(9)] = inst_30017);

(statearr_30081[(7)] = inst_30022__$1);

(statearr_30081[(10)] = inst_30025);

(statearr_30081[(8)] = inst_30029__$1);

(statearr_30081[(11)] = inst_30030);

return statearr_30081;
})();
var statearr_30082_30333 = state_30072__$1;
(statearr_30082_30333[(2)] = null);

(statearr_30082_30333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30073 === (4))){
var inst_30025 = (state_30072[(10)]);
var _ = (function (){var statearr_30083 = state_30072;
(statearr_30083[(4)] = cljs.core.rest((state_30072[(4)])));

return statearr_30083;
})();
var inst_30032 = (state_30072[(2)]);
var inst_30034 = (oops.state._STAR_runtime_state_STAR_ = inst_30025);
var ___$1 = (function (){var temp__5825__auto__ = (state_30072[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_30072__$1 = (function (){var statearr_30084 = state_30072;
(statearr_30084[(12)] = inst_30034);

return statearr_30084;
})();
var statearr_30085_30334 = state_30072__$1;
(statearr_30085_30334[(2)] = inst_30032);

(statearr_30085_30334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30073 === (15))){
var inst_30067 = (state_30072[(13)]);
var inst_30070 = (state_30072[(2)]);
var state_30072__$1 = (function (){var statearr_30086 = state_30072;
(statearr_30086[(14)] = inst_30070);

return statearr_30086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30072__$1,inst_30067);
} else {
if((state_val_30073 === (13))){
var state_30072__$1 = state_30072;
var statearr_30088_30336 = state_30072__$1;
(statearr_30088_30336[(2)] = null);

(statearr_30088_30336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30073 === (6))){
var inst_30022 = (state_30072[(7)]);
var inst_30044 = (inst_30022["onSnapshot"]);
var state_30072__$1 = state_30072;
var statearr_30089_30337 = state_30072__$1;
(statearr_30089_30337[(2)] = inst_30044);

(statearr_30089_30337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30073 === (3))){
var inst_30017 = (state_30072[(9)]);
var inst_30067 = (state_30072[(2)]);
var state_30072__$1 = (function (){var statearr_30090 = state_30072;
(statearr_30090[(13)] = inst_30067);

return statearr_30090;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30072__$1,(15),inst_30017);
} else {
if((state_val_30073 === (12))){
var inst_30048 = (state_30072[(15)]);
var inst_30017 = (state_30072[(9)]);
var inst_30022 = (state_30072[(7)]);
var inst_30025 = (state_30072[(10)]);
var inst_30029 = (state_30072[(8)]);
var inst_30049 = (state_30072[(16)]);
var inst_30056 = (inst_30048[(0)]);
var inst_30057 = (function (){var wait = inst_30017;
var target_obj_30018 = inst_30022;
var _STAR_runtime_state_STAR__orig_val__30023 = inst_30025;
var _STAR_runtime_state_STAR__temp_val__30024 = inst_30029;
var call_info_30020 = inst_30048;
var fn_30019 = inst_30049;
return (function (doc){
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(doc) : callback.call(null,doc));

return cljs.core.async.close_BANG_(wait);
});
})();
var inst_30058 = inst_30049.call(inst_30056,inst_30057);
var state_30072__$1 = state_30072;
var statearr_30094_30338 = state_30072__$1;
(statearr_30094_30338[(2)] = inst_30058);

(statearr_30094_30338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30073 === (2))){
var inst_30022 = (state_30072[(7)]);
var _ = (function (){var statearr_30096 = state_30072;
(statearr_30096[(4)] = cljs.core.cons((4),(state_30072[(4)])));

return statearr_30096;
})();
var ___$1 = (function (){var statearr_30100 = state_30072;
(statearr_30100[(4)] = cljs.core.cons((5),(state_30072[(4)])));

return statearr_30100;
})();
var inst_30042 = oops.core.validate_object_access_dynamically(inst_30022,(0),"onSnapshot",true,true,false);
var state_30072__$1 = state_30072;
if(inst_30042){
var statearr_30102_30340 = state_30072__$1;
(statearr_30102_30340[(1)] = (6));

} else {
var statearr_30104_30342 = state_30072__$1;
(statearr_30104_30342[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30073 === (11))){
var inst_30064 = (state_30072[(2)]);
var _ = (function (){var statearr_30107 = state_30072;
(statearr_30107[(4)] = cljs.core.rest((state_30072[(4)])));

return statearr_30107;
})();
var state_30072__$1 = state_30072;
var statearr_30109_30343 = state_30072__$1;
(statearr_30109_30343[(2)] = inst_30064);

(statearr_30109_30343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30073 === (9))){
var inst_30049 = (state_30072[(16)]);
var inst_30053 = (inst_30049 == null);
var inst_30054 = cljs.core.not(inst_30053);
var state_30072__$1 = state_30072;
if(inst_30054){
var statearr_30113_30345 = state_30072__$1;
(statearr_30113_30345[(1)] = (12));

} else {
var statearr_30115_30346 = state_30072__$1;
(statearr_30115_30346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30073 === (5))){
var _ = (function (){var statearr_30116 = state_30072;
(statearr_30116[(4)] = cljs.core.rest((state_30072[(4)])));

return statearr_30116;
})();
var state_30072__$1 = state_30072;
var ex30105 = (state_30072__$1[(2)]);
var statearr_30117_30348 = state_30072__$1;
(statearr_30117_30348[(5)] = ex30105);


throw ex30105;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30073 === (14))){
var inst_30061 = (state_30072[(2)]);
var state_30072__$1 = state_30072;
var statearr_30119_30349 = state_30072__$1;
(statearr_30119_30349[(2)] = inst_30061);

(statearr_30119_30349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30073 === (10))){
var state_30072__$1 = state_30072;
var statearr_30120_30350 = state_30072__$1;
(statearr_30120_30350[(2)] = null);

(statearr_30120_30350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30073 === (8))){
var inst_30022 = (state_30072[(7)]);
var inst_30048 = (state_30072[(15)]);
var inst_30049 = (state_30072[(16)]);
var inst_30047 = (state_30072[(2)]);
var inst_30048__$1 = [inst_30022,inst_30047];
var inst_30049__$1 = (inst_30048__$1[(1)]);
var inst_30050 = oops.state.get_last_access_modifier();
var inst_30051 = oops.core.validate_fn_call_dynamically(inst_30049__$1,inst_30050);
var state_30072__$1 = (function (){var statearr_30121 = state_30072;
(statearr_30121[(15)] = inst_30048__$1);

(statearr_30121[(16)] = inst_30049__$1);

return statearr_30121;
})();
if(inst_30051){
var statearr_30124_30351 = state_30072__$1;
(statearr_30124_30351[(1)] = (9));

} else {
var statearr_30126_30353 = state_30072__$1;
(statearr_30126_30353[(1)] = (10));

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
});
return (function() {
var teg_online$firebase$on_snapshot_$_state_machine__18069__auto__ = null;
var teg_online$firebase$on_snapshot_$_state_machine__18069__auto____0 = (function (){
var statearr_30129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30129[(0)] = teg_online$firebase$on_snapshot_$_state_machine__18069__auto__);

(statearr_30129[(1)] = (1));

return statearr_30129;
});
var teg_online$firebase$on_snapshot_$_state_machine__18069__auto____1 = (function (state_30072){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_30072);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e30130){var ex__18072__auto__ = e30130;
var statearr_30131_30356 = state_30072;
(statearr_30131_30356[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_30072[(4)]))){
var statearr_30132_30357 = state_30072;
(statearr_30132_30357[(1)] = cljs.core.first((state_30072[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30358 = state_30072;
state_30072 = G__30358;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$firebase$on_snapshot_$_state_machine__18069__auto__ = function(state_30072){
switch(arguments.length){
case 0:
return teg_online$firebase$on_snapshot_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$firebase$on_snapshot_$_state_machine__18069__auto____1.call(this,state_30072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$firebase$on_snapshot_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$firebase$on_snapshot_$_state_machine__18069__auto____0;
teg_online$firebase$on_snapshot_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$firebase$on_snapshot_$_state_machine__18069__auto____1;
return teg_online$firebase$on_snapshot_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_30136 = f__19294__auto__();
(statearr_30136[(6)] = c__19293__auto__);

return statearr_30136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.firebase.connect_BANG_ = (function teg_online$firebase$connect_BANG_(doc_id,game_atom){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_30162){
var state_val_30163 = (state_30162[(1)]);
if((state_val_30163 === (1))){
var inst_30142 = (state_30162[(7)]);
var inst_30141 = db.collection(teg_online.firebase.collection_id);
var inst_30142__$1 = inst_30141.doc(doc_id);
var inst_30143 = teg_online.firebase.exists_QMARK_(inst_30142__$1);
var state_30162__$1 = (function (){var statearr_30167 = state_30162;
(statearr_30167[(7)] = inst_30142__$1);

return statearr_30167;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30162__$1,(2),inst_30143);
} else {
if((state_val_30163 === (2))){
var inst_30145 = (state_30162[(2)]);
var state_30162__$1 = state_30162;
if(cljs.core.truth_(inst_30145)){
var statearr_30168_30360 = state_30162__$1;
(statearr_30168_30360[(1)] = (3));

} else {
var statearr_30169_30361 = state_30162__$1;
(statearr_30169_30361[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (3))){
var inst_30142 = (state_30162[(7)]);
var inst_30147 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var inst_30148 = (function (){var doc_ref = inst_30142;
var last_update = inst_30147;
return (function (_,___$1,___$2,game){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(game,cljs.core.deref(last_update))){
return doc_ref.set(cljs.core.clj__GT_js(teg_online.firebase.game__GT_doc(game)));
} else {
return null;
}
});
})();
var inst_30149 = cljs.core.add_watch(game_atom,new cljs.core.Keyword("teg-online.firebase","firebase-connection","teg-online.firebase/firebase-connection",1301126121),inst_30148);
var inst_30150 = (function (){var doc_ref = inst_30142;
var last_update = inst_30147;
return (function (){
return cljs.core.remove_watch(game_atom,new cljs.core.Keyword("teg-online.firebase","firebase-connection","teg-online.firebase/firebase-connection",1301126121));
});
})();
var inst_30151 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(teg_online.firebase.destructors,cljs.core.conj,inst_30150);
var inst_30152 = (function (){var doc_ref = inst_30142;
var last_update = inst_30147;
return (function (doc){
if(cljs.core.truth_((function (){var target_obj_30173 = doc;
var _STAR_runtime_state_STAR__orig_val__30184 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__30185 = oops.state.prepare_state(target_obj_30173,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__30185);

try{var next_obj_30175 = ((oops.core.validate_object_access_dynamically(target_obj_30173,(0),"metadata",true,true,false))?(target_obj_30173["metadata"]):null);
var next_obj_30177 = ((oops.core.validate_object_access_dynamically(next_obj_30175,(0),"hasPendingWrites",true,true,false))?(next_obj_30175["hasPendingWrites"]):null);
return next_obj_30177;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__30184);
}})())){
return null;
} else {
var game = teg_online.firebase.doc__GT_game(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(doc.data(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
cljs.core.reset_BANG_(last_update,game);

return cljs.core.reset_BANG_(game_atom,game);
}
});
})();
var inst_30153 = teg_online.firebase.on_snapshot(inst_30142,inst_30152);
var state_30162__$1 = (function (){var statearr_30207 = state_30162;
(statearr_30207[(8)] = inst_30149);

(statearr_30207[(9)] = inst_30151);

return statearr_30207;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30162__$1,(6),inst_30153);
} else {
if((state_val_30163 === (4))){
var state_30162__$1 = state_30162;
var statearr_30209_30369 = state_30162__$1;
(statearr_30209_30369[(2)] = null);

(statearr_30209_30369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (5))){
var inst_30159 = (state_30162[(2)]);
var state_30162__$1 = state_30162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30162__$1,inst_30159);
} else {
if((state_val_30163 === (6))){
var inst_30155 = (state_30162[(2)]);
var inst_30156 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(teg_online.firebase.destructors,cljs.core.conj,inst_30155);
var state_30162__$1 = (function (){var statearr_30214 = state_30162;
(statearr_30214[(10)] = inst_30156);

return statearr_30214;
})();
var statearr_30215_30373 = state_30162__$1;
(statearr_30215_30373[(2)] = true);

(statearr_30215_30373[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var teg_online$firebase$connect_BANG__$_state_machine__18069__auto__ = null;
var teg_online$firebase$connect_BANG__$_state_machine__18069__auto____0 = (function (){
var statearr_30217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30217[(0)] = teg_online$firebase$connect_BANG__$_state_machine__18069__auto__);

(statearr_30217[(1)] = (1));

return statearr_30217;
});
var teg_online$firebase$connect_BANG__$_state_machine__18069__auto____1 = (function (state_30162){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_30162);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e30219){var ex__18072__auto__ = e30219;
var statearr_30220_30379 = state_30162;
(statearr_30220_30379[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_30162[(4)]))){
var statearr_30221_30380 = state_30162;
(statearr_30221_30380[(1)] = cljs.core.first((state_30162[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30381 = state_30162;
state_30162 = G__30381;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$firebase$connect_BANG__$_state_machine__18069__auto__ = function(state_30162){
switch(arguments.length){
case 0:
return teg_online$firebase$connect_BANG__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$firebase$connect_BANG__$_state_machine__18069__auto____1.call(this,state_30162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$firebase$connect_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$firebase$connect_BANG__$_state_machine__18069__auto____0;
teg_online$firebase$connect_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$firebase$connect_BANG__$_state_machine__18069__auto____1;
return teg_online$firebase$connect_BANG__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_30224 = f__19294__auto__();
(statearr_30224[(6)] = c__19293__auto__);

return statearr_30224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.firebase.disconnect_BANG_ = (function teg_online$firebase$disconnect_BANG_(){
var seq__30227 = cljs.core.seq(cljs.core.first(cljs.core.reset_vals_BANG_(teg_online.firebase.destructors,cljs.core.PersistentVector.EMPTY)));
var chunk__30228 = null;
var count__30229 = (0);
var i__30230 = (0);
while(true){
if((i__30230 < count__30229)){
var destructor = chunk__30228.cljs$core$IIndexed$_nth$arity$2(null,i__30230);
(destructor.cljs$core$IFn$_invoke$arity$0 ? destructor.cljs$core$IFn$_invoke$arity$0() : destructor.call(null));


var G__30383 = seq__30227;
var G__30384 = chunk__30228;
var G__30385 = count__30229;
var G__30386 = (i__30230 + (1));
seq__30227 = G__30383;
chunk__30228 = G__30384;
count__30229 = G__30385;
i__30230 = G__30386;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30227);
if(temp__5825__auto__){
var seq__30227__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30227__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__30227__$1);
var G__30387 = cljs.core.chunk_rest(seq__30227__$1);
var G__30388 = c__5694__auto__;
var G__30389 = cljs.core.count(c__5694__auto__);
var G__30390 = (0);
seq__30227 = G__30387;
chunk__30228 = G__30388;
count__30229 = G__30389;
i__30230 = G__30390;
continue;
} else {
var destructor = cljs.core.first(seq__30227__$1);
(destructor.cljs$core$IFn$_invoke$arity$0 ? destructor.cljs$core$IFn$_invoke$arity$0() : destructor.call(null));


var G__30391 = cljs.core.next(seq__30227__$1);
var G__30392 = null;
var G__30393 = (0);
var G__30394 = (0);
seq__30227 = G__30391;
chunk__30228 = G__30392;
count__30229 = G__30393;
i__30230 = G__30394;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=teg_online.firebase.js.map
