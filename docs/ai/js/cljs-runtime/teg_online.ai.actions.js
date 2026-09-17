goog.provide('teg_online.ai.actions');
teg_online.ai.actions.get_valid_regroups = (function teg_online$ai$actions$get_valid_regroups(game){
var player_id = teg_online.game.get_current_player(game);
var player_countries = cljs.core.set(teg_online.game.player_countries(game,player_id));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (country_id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (neighbour){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [country_id,neighbour], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(player_countries,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053).cljs$core$IFn$_invoke$arity$1((teg_online.board.countries.cljs$core$IFn$_invoke$arity$1 ? teg_online.board.countries.cljs$core$IFn$_invoke$arity$1(country_id) : teg_online.board.countries.call(null,country_id)))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (country_id){
return (teg_online.game.get_army(game,country_id) > (1));
}),player_countries)], 0));
});
teg_online.ai.actions.get_valid_attacks = (function teg_online$ai$actions$get_valid_attacks(game){
var player_id = teg_online.game.get_current_player(game);
var player_countries = cljs.core.set(teg_online.game.player_countries(game,player_id));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (country_id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (neighbour){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [country_id,neighbour], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(player_countries,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053).cljs$core$IFn$_invoke$arity$1((teg_online.board.countries.cljs$core$IFn$_invoke$arity$1 ? teg_online.board.countries.cljs$core$IFn$_invoke$arity$1(country_id) : teg_online.board.countries.call(null,country_id)))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (country_id){
return (teg_online.game.get_army(game,country_id) > (1));
}),player_countries)], 0));
});
if((typeof teg_online !== 'undefined') && (typeof teg_online.ai !== 'undefined') && (typeof teg_online.ai.actions !== 'undefined') && (typeof teg_online.ai.actions.apply_action !== 'undefined')){
} else {
teg_online.ai.actions.apply_action = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30068 = cljs.core.get_global_hierarchy;
return (fexpr__30068.cljs$core$IFn$_invoke$arity$0 ? fexpr__30068.cljs$core$IFn$_invoke$arity$0() : fexpr__30068.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("teg-online.ai.actions","apply-action"),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
teg_online.ai.actions.apply_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.ai.actions","pass","teg-online.ai.actions/pass",1646582976),(function (_,game){
return teg_online.game.finish_action(game);
}));
teg_online.ai.actions.apply_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.ai.actions","add-army","teg-online.ai.actions/add-army",995458616),(function (p__30076,game){
var map__30077 = p__30076;
var map__30077__$1 = cljs.core.__destructure_map(map__30077);
var country = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30077__$1,new cljs.core.Keyword(null,"country","country",312965309));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30077__$1,new cljs.core.Keyword(null,"units","units",-533089095));
if((units > (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Units should be more than zero",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"country-id","country-id",927351142),country,new cljs.core.Keyword(null,"units","units",-533089095),units], null));
}

teg_online.game.assert_country_owner(game,country,teg_online.game.get_current_player(game));

return teg_online.game.add_army(game,country,units);
}));
teg_online.ai.actions.valid_attack_QMARK_ = (function teg_online$ai$actions$valid_attack_QMARK_(game,attacker,defender){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(teg_online.game.country_owner(game,attacker),teg_online.game.country_owner(game,defender))) && ((((teg_online.game.get_army(game,attacker) > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(teg_online.game.country_owner(game,attacker),teg_online.game.get_current_player(game))))));
});
teg_online.ai.actions.apply_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.ai.actions","attack","teg-online.ai.actions/attack",1351128807),(function (p__30093,game){
var map__30095 = p__30093;
var map__30095__$1 = cljs.core.__destructure_map(map__30095);
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30095__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var defender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30095__$1,new cljs.core.Keyword(null,"defender","defender",1458963871));
var move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30095__$1,new cljs.core.Keyword(null,"move","move",-2110884309));
if(teg_online.ai.actions.valid_attack_QMARK_(game,attacker,defender)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid attack",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"attacker","attacker",48869964),attacker,new cljs.core.Keyword(null,"defender","defender",1458963871),defender], null));
}

var vec__30097 = teg_online.game.get_dice_count(game,attacker,defender);
var a_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30097,(0),null);
var d_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30097,(1),null);
var a_throw = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(a_count,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.rand_int,(6))));
var d_throw = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(d_count,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.rand_int,(6))));
var game__$1 = teg_online.game.attack(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attacker,a_throw], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defender,d_throw], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),teg_online.game.get_army(game__$1,defender))){
return teg_online.game.invade(game__$1,attacker,defender,cljs.core.min.cljs$core$IFn$_invoke$arity$variadic((3),move,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(teg_online.game.get_army(game__$1,attacker) - (1))], 0)));
} else {
return game__$1;
}
}));
teg_online.ai.actions.valid_regroup_QMARK_ = (function teg_online$ai$actions$valid_regroup_QMARK_(game,src,dest){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(teg_online.game.country_owner(game,src),teg_online.game.country_owner(game,dest))) && ((teg_online.game.get_army(game,src) > (1))));
});
teg_online.ai.actions.apply_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.ai.actions","regroup","teg-online.ai.actions/regroup",-1305486309),(function (p__30112,game){
var map__30114 = p__30112;
var map__30114__$1 = cljs.core.__destructure_map(map__30114);
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30114__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var destination = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30114__$1,new cljs.core.Keyword(null,"destination","destination",-253872483));
var move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30114__$1,new cljs.core.Keyword(null,"move","move",-2110884309));
if(teg_online.ai.actions.valid_regroup_QMARK_(game,origin,destination)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid regroup",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"origin","origin",1037372088),origin,new cljs.core.Keyword(null,"destination","destination",-253872483),destination], null));
}

return teg_online.game.regroup(game,origin,destination,cljs.core.min.cljs$core$IFn$_invoke$arity$2(move,(teg_online.game.get_army(game,origin) - (1))));
}));
teg_online.ai.actions.pass = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword("teg-online.ai.actions","pass","teg-online.ai.actions/pass",1646582976)], null);
teg_online.ai.actions.add_army = (function teg_online$ai$actions$add_army(var_args){
var args__5903__auto__ = [];
var len__5897__auto___30465 = arguments.length;
var i__5898__auto___30466 = (0);
while(true){
if((i__5898__auto___30466 < len__5897__auto___30465)){
args__5903__auto__.push((arguments[i__5898__auto___30466]));

var G__30468 = (i__5898__auto___30466 + (1));
i__5898__auto___30466 = G__30468;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return teg_online.ai.actions.add_army.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(teg_online.ai.actions.add_army.cljs$core$IFn$_invoke$arity$variadic = (function (p__30123){
var map__30125 = p__30123;
var map__30125__$1 = cljs.core.__destructure_map(map__30125);
var country = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30125__$1,new cljs.core.Keyword(null,"country","country",312965309));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30125__$1,new cljs.core.Keyword(null,"units","units",-533089095));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword("teg-online.ai.actions","add-army","teg-online.ai.actions/add-army",995458616),new cljs.core.Keyword(null,"country","country",312965309),country,new cljs.core.Keyword(null,"units","units",-533089095),units], null);
}));

(teg_online.ai.actions.add_army.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(teg_online.ai.actions.add_army.cljs$lang$applyTo = (function (seq30118){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30118));
}));

teg_online.ai.actions.attack = (function teg_online$ai$actions$attack(var_args){
var args__5903__auto__ = [];
var len__5897__auto___30471 = arguments.length;
var i__5898__auto___30473 = (0);
while(true){
if((i__5898__auto___30473 < len__5897__auto___30471)){
args__5903__auto__.push((arguments[i__5898__auto___30473]));

var G__30475 = (i__5898__auto___30473 + (1));
i__5898__auto___30473 = G__30475;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return teg_online.ai.actions.attack.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(teg_online.ai.actions.attack.cljs$core$IFn$_invoke$arity$variadic = (function (p__30133){
var map__30135 = p__30133;
var map__30135__$1 = cljs.core.__destructure_map(map__30135);
var attacker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30135__$1,new cljs.core.Keyword(null,"attacker","attacker",48869964));
var defender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30135__$1,new cljs.core.Keyword(null,"defender","defender",1458963871));
var move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30135__$1,new cljs.core.Keyword(null,"move","move",-2110884309));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword("teg-online.ai.actions","attack","teg-online.ai.actions/attack",1351128807),new cljs.core.Keyword(null,"attacker","attacker",48869964),attacker,new cljs.core.Keyword(null,"defender","defender",1458963871),defender,new cljs.core.Keyword(null,"move","move",-2110884309),move], null);
}));

(teg_online.ai.actions.attack.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(teg_online.ai.actions.attack.cljs$lang$applyTo = (function (seq30127){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30127));
}));

teg_online.ai.actions.regroup = (function teg_online$ai$actions$regroup(var_args){
var args__5903__auto__ = [];
var len__5897__auto___30478 = arguments.length;
var i__5898__auto___30479 = (0);
while(true){
if((i__5898__auto___30479 < len__5897__auto___30478)){
args__5903__auto__.push((arguments[i__5898__auto___30479]));

var G__30482 = (i__5898__auto___30479 + (1));
i__5898__auto___30479 = G__30482;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return teg_online.ai.actions.regroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(teg_online.ai.actions.regroup.cljs$core$IFn$_invoke$arity$variadic = (function (p__30139){
var map__30140 = p__30139;
var map__30140__$1 = cljs.core.__destructure_map(map__30140);
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30140__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var destination = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30140__$1,new cljs.core.Keyword(null,"destination","destination",-253872483));
var move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30140__$1,new cljs.core.Keyword(null,"move","move",-2110884309));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword("teg-online.ai.actions","regroup","teg-online.ai.actions/regroup",-1305486309),new cljs.core.Keyword(null,"origin","origin",1037372088),origin,new cljs.core.Keyword(null,"destination","destination",-253872483),destination,new cljs.core.Keyword(null,"move","move",-2110884309),move], null);
}));

(teg_online.ai.actions.regroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(teg_online.ai.actions.regroup.cljs$lang$applyTo = (function (seq30137){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30137));
}));

teg_online.ai.actions.valid_QMARK_ = (function teg_online$ai$actions$valid_QMARK_(game,action){
try{teg_online.ai.actions.apply_action.cljs$core$IFn$_invoke$arity$2(action,game);

return true;
}catch (e30161){var error = e30161;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid action:",cljs.core.ex_message(error)], 0));

return false;
}});
teg_online.ai.actions.ensure_valid = (function teg_online$ai$actions$ensure_valid(game,actions){
var valid_actions = cljs.core.vec(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__30164_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(teg_online.ai.actions.pass,p1__30164_SHARP_);
}),cljs.core.filterv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(teg_online.ai.actions.valid_QMARK_,game),actions)));
if(cljs.core.seq(valid_actions)){
return valid_actions;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teg_online.ai.actions.pass], null);
}
});
teg_online.ai.actions.try_apply_action = (function teg_online$ai$actions$try_apply_action(game,action){
try{return teg_online.ai.actions.apply_action.cljs$core$IFn$_invoke$arity$2(action,game);
}catch (e30170){var err = e30170;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR trying to apply action:",err], 0));

return game;
}});
teg_online.ai.actions.mean = (function teg_online$ai$actions$mean(coll){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,coll) / cljs.core.count(coll));
});
/**
 * This function will evaluate f for each of the elements in coll in a separate go block
 * and yielding back to the browser every chunk-size elements to avoid hanging the UI.
 */
teg_online.ai.actions.process_async_BANG_ = (function teg_online$ai$actions$process_async_BANG_(f,coll,chunk_size){
var out_chan = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var chunks = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(chunk_size,coll);
var c__19293__auto___30493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_30204){
var state_val_30205 = (state_30204[(1)]);
if((state_val_30205 === (1))){
var inst_30176 = chunks;
var inst_30178 = cljs.core.PersistentVector.EMPTY;
var inst_30179 = inst_30176;
var inst_30180 = inst_30178;
var state_30204__$1 = (function (){var statearr_30208 = state_30204;
(statearr_30208[(7)] = inst_30179);

(statearr_30208[(8)] = inst_30180);

return statearr_30208;
})();
var statearr_30210_30494 = state_30204__$1;
(statearr_30210_30494[(2)] = null);

(statearr_30210_30494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (2))){
var inst_30179 = (state_30204[(7)]);
var inst_30182 = cljs.core.seq(inst_30179);
var state_30204__$1 = state_30204;
if(inst_30182){
var statearr_30212_30495 = state_30204__$1;
(statearr_30212_30495[(1)] = (4));

} else {
var statearr_30213_30496 = state_30204__$1;
(statearr_30213_30496[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (3))){
var inst_30202 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30204__$1,inst_30202);
} else {
if((state_val_30205 === (4))){
var inst_30179 = (state_30204[(7)]);
var inst_30186 = cljs.core.first(inst_30179);
var inst_30187 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,inst_30186);
var inst_30188 = cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,inst_30187);
var state_30204__$1 = state_30204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30204__$1,(7),inst_30188);
} else {
if((state_val_30205 === (5))){
var inst_30180 = (state_30204[(8)]);
var inst_30198 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_chan,inst_30180);
var state_30204__$1 = state_30204;
var statearr_30218_30497 = state_30204__$1;
(statearr_30218_30497[(2)] = inst_30198);

(statearr_30218_30497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (6))){
var inst_30200 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
var statearr_30222_30498 = state_30204__$1;
(statearr_30222_30498[(2)] = inst_30200);

(statearr_30222_30498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (7))){
var inst_30190 = (state_30204[(2)]);
var inst_30191 = cljs.core.async.timeout((1));
var state_30204__$1 = (function (){var statearr_30223 = state_30204;
(statearr_30223[(9)] = inst_30190);

return statearr_30223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30204__$1,(8),inst_30191);
} else {
if((state_val_30205 === (8))){
var inst_30179 = (state_30204[(7)]);
var inst_30180 = (state_30204[(8)]);
var inst_30190 = (state_30204[(9)]);
var inst_30193 = (state_30204[(2)]);
var inst_30194 = cljs.core.rest(inst_30179);
var inst_30195 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_30180,inst_30190);
var inst_30179__$1 = inst_30194;
var inst_30180__$1 = inst_30195;
var state_30204__$1 = (function (){var statearr_30225 = state_30204;
(statearr_30225[(10)] = inst_30193);

(statearr_30225[(7)] = inst_30179__$1);

(statearr_30225[(8)] = inst_30180__$1);

return statearr_30225;
})();
var statearr_30226_30499 = state_30204__$1;
(statearr_30226_30499[(2)] = null);

(statearr_30226_30499[(1)] = (2));


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
var teg_online$ai$actions$process_async_BANG__$_state_machine__18069__auto__ = null;
var teg_online$ai$actions$process_async_BANG__$_state_machine__18069__auto____0 = (function (){
var statearr_30231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30231[(0)] = teg_online$ai$actions$process_async_BANG__$_state_machine__18069__auto__);

(statearr_30231[(1)] = (1));

return statearr_30231;
});
var teg_online$ai$actions$process_async_BANG__$_state_machine__18069__auto____1 = (function (state_30204){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_30204);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e30232){var ex__18072__auto__ = e30232;
var statearr_30233_30503 = state_30204;
(statearr_30233_30503[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_30204[(4)]))){
var statearr_30234_30505 = state_30204;
(statearr_30234_30505[(1)] = cljs.core.first((state_30204[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30514 = state_30204;
state_30204 = G__30514;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ai$actions$process_async_BANG__$_state_machine__18069__auto__ = function(state_30204){
switch(arguments.length){
case 0:
return teg_online$ai$actions$process_async_BANG__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ai$actions$process_async_BANG__$_state_machine__18069__auto____1.call(this,state_30204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ai$actions$process_async_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ai$actions$process_async_BANG__$_state_machine__18069__auto____0;
teg_online$ai$actions$process_async_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ai$actions$process_async_BANG__$_state_machine__18069__auto____1;
return teg_online$ai$actions$process_async_BANG__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_30237 = f__19294__auto__();
(statearr_30237[(6)] = c__19293__auto___30493);

return statearr_30237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));


return out_chan;
});
teg_online.ai.actions.calculate_score = (function teg_online$ai$actions$calculate_score(var_args){
var G__30242 = arguments.length;
switch (G__30242) {
case 2:
return teg_online.ai.actions.calculate_score.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return teg_online.ai.actions.calculate_score.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.ai.actions.calculate_score.cljs$core$IFn$_invoke$arity$2 = (function (game,mutation){
return teg_online.ai.actions.calculate_score.cljs$core$IFn$_invoke$arity$3(game,mutation,((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(teg_online.game.get_current_phase(game),new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630)))?(10000):(1)));
}));

(teg_online.ai.actions.calculate_score.cljs$core$IFn$_invoke$arity$3 = (function (game,mutation,times){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_30260){
var state_val_30261 = (state_30260[(1)]);
if((state_val_30261 === (1))){
var inst_30245 = (state_30260[(7)]);
var inst_30247 = (state_30260[(8)]);
var inst_30245__$1 = teg_online.ai.scoring.calculate_scores(game);
var inst_30246 = (function (){var initial_scores = inst_30245__$1;
return (function (p1__30238_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30263){
var vec__30264 = p__30263;
var player_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30264,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30264,(1),null);
var map__30268 = (initial_scores.cljs$core$IFn$_invoke$arity$1 ? initial_scores.cljs$core$IFn$_invoke$arity$1(player_id) : initial_scores.call(null,player_id));
var map__30268__$1 = cljs.core.__destructure_map(map__30268);
var absolute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30268__$1,new cljs.core.Keyword(null,"absolute","absolute",1655386478));
var normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30268__$1,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"absolute","absolute",1655386478),(new cljs.core.Keyword(null,"absolute","absolute",1655386478).cljs$core$IFn$_invoke$arity$1(score) - absolute),new cljs.core.Keyword(null,"normalized","normalized",-1887621663),(new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(score) - normalized)], null)], null);
}),teg_online.ai.scoring.calculate_scores(p1__30238_SHARP_)));
});
})();
var inst_30247__$1 = cljs.core.memoize(inst_30246);
var inst_30248 = (function (){var initial_scores = inst_30245__$1;
var calculate_scores_SINGLEQUOTE_ = inst_30247__$1;
return (function (p1__30240_SHARP_){
return cljs.core.update_vals(p1__30240_SHARP_,cljs.core.vector);
});
})();
var inst_30249 = (function (){var initial_scores = inst_30245__$1;
var calculate_scores_SINGLEQUOTE_ = inst_30247__$1;
return (function (p1__30239_SHARP_){
var c__19293__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_30273){
var state_val_30274 = (state_30273[(1)]);
if((state_val_30274 === (1))){
var inst_30271 = calculate_scores_SINGLEQUOTE_(p1__30239_SHARP_);
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30273__$1,inst_30271);
} else {
return null;
}
});
return (function() {
var teg_online$ai$actions$state_machine__18069__auto__ = null;
var teg_online$ai$actions$state_machine__18069__auto____0 = (function (){
var statearr_30275 = [null,null,null,null,null,null,null];
(statearr_30275[(0)] = teg_online$ai$actions$state_machine__18069__auto__);

(statearr_30275[(1)] = (1));

return statearr_30275;
});
var teg_online$ai$actions$state_machine__18069__auto____1 = (function (state_30273){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_30273);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e30276){var ex__18072__auto__ = e30276;
var statearr_30278_30526 = state_30273;
(statearr_30278_30526[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_30273[(4)]))){
var statearr_30279_30527 = state_30273;
(statearr_30279_30527[(1)] = cljs.core.first((state_30273[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30528 = state_30273;
state_30273 = G__30528;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ai$actions$state_machine__18069__auto__ = function(state_30273){
switch(arguments.length){
case 0:
return teg_online$ai$actions$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ai$actions$state_machine__18069__auto____1.call(this,state_30273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ai$actions$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ai$actions$state_machine__18069__auto____0;
teg_online$ai$actions$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ai$actions$state_machine__18069__auto____1;
return teg_online$ai$actions$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_30282 = f__19294__auto__();
(statearr_30282[(6)] = c__19293__auto____$1);

return statearr_30282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto____$1;
});
})();
var inst_30250 = (function (){var initial_scores = inst_30245__$1;
var calculate_scores_SINGLEQUOTE_ = inst_30247__$1;
return (function (){
return (mutation.cljs$core$IFn$_invoke$arity$1 ? mutation.cljs$core$IFn$_invoke$arity$1(game) : mutation.call(null,game));
});
})();
var inst_30251 = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(times,inst_30250);
var inst_30252 = teg_online.ai.actions.process_async_BANG_(inst_30249,inst_30251,(100));
var state_30260__$1 = (function (){var statearr_30294 = state_30260;
(statearr_30294[(7)] = inst_30245__$1);

(statearr_30294[(8)] = inst_30247__$1);

(statearr_30294[(9)] = inst_30248);

return statearr_30294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30260__$1,(2),inst_30252);
} else {
if((state_val_30261 === (2))){
var inst_30248 = (state_30260[(9)]);
var inst_30245 = (state_30260[(7)]);
var inst_30247 = (state_30260[(8)]);
var inst_30254 = (state_30260[(2)]);
var inst_30255 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_30248,inst_30254);
var inst_30256 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.into,inst_30255);
var inst_30257 = (function (){var initial_scores = inst_30245;
var calculate_scores_SINGLEQUOTE_ = inst_30247;
var delta_scores = inst_30256;
return (function (scores){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"absolute","absolute",1655386478),teg_online.ai.actions.mean(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"absolute","absolute",1655386478),scores)),new cljs.core.Keyword(null,"normalized","normalized",-1887621663),teg_online.ai.actions.mean(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"normalized","normalized",-1887621663),scores))], null);
});
})();
var inst_30258 = cljs.core.update_vals(inst_30256,inst_30257);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30260__$1,inst_30258);
} else {
return null;
}
}
});
return (function() {
var teg_online$ai$actions$state_machine__18069__auto__ = null;
var teg_online$ai$actions$state_machine__18069__auto____0 = (function (){
var statearr_30307 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30307[(0)] = teg_online$ai$actions$state_machine__18069__auto__);

(statearr_30307[(1)] = (1));

return statearr_30307;
});
var teg_online$ai$actions$state_machine__18069__auto____1 = (function (state_30260){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_30260);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e30312){var ex__18072__auto__ = e30312;
var statearr_30317_30536 = state_30260;
(statearr_30317_30536[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_30260[(4)]))){
var statearr_30326_30538 = state_30260;
(statearr_30326_30538[(1)] = cljs.core.first((state_30260[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30539 = state_30260;
state_30260 = G__30539;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ai$actions$state_machine__18069__auto__ = function(state_30260){
switch(arguments.length){
case 0:
return teg_online$ai$actions$state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ai$actions$state_machine__18069__auto____1.call(this,state_30260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ai$actions$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ai$actions$state_machine__18069__auto____0;
teg_online$ai$actions$state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ai$actions$state_machine__18069__auto____1;
return teg_online$ai$actions$state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_30331 = f__19294__auto__();
(statearr_30331[(6)] = c__19293__auto__);

return statearr_30331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
}));

(teg_online.ai.actions.calculate_score.cljs$lang$maxFixedArity = 3);

teg_online.ai.actions.make_mutation = (function teg_online$ai$actions$make_mutation(actions){
return (function (game){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (game__$1,action){
return teg_online.ai.actions.try_apply_action(game__$1,action);
}),game,actions);
});
});
if((typeof teg_online !== 'undefined') && (typeof teg_online.ai !== 'undefined') && (typeof teg_online.ai.actions !== 'undefined') && (typeof teg_online.ai.actions.all_actions !== 'undefined')){
} else {
teg_online.ai.actions.all_actions = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30341 = cljs.core.get_global_hierarchy;
return (fexpr__30341.cljs$core$IFn$_invoke$arity$0 ? fexpr__30341.cljs$core$IFn$_invoke$arity$0() : fexpr__30341.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("teg-online.ai.actions","all-actions"),(function (game,_turn_actions){
return new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
teg_online.ai.actions.all_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),(function (game,turn_actions){
var player_id = teg_online.game.get_current_player(game);
var player_countries = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(teg_online.ai.scoring.in_conflict_QMARK_,game),teg_online.game.player_countries(game,player_id)));
var remaining = (teg_online.game.get_extra_army(game) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"units","units",-533089095),turn_actions)));
var combinations = cljs.core.memoize(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.combinations,player_countries));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (part){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (comb){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (country,units){
return teg_online.ai.actions.add_army.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"country","country",312965309),country,new cljs.core.Keyword(null,"units","units",-533089095),units], 0));
}),comb,part),teg_online.ai.actions.pass);
}),combinations(cljs.core.count(part)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.utils.core.partitions.cljs$core$IFn$_invoke$arity$1(remaining)], 0));
}));
teg_online.ai.actions.all_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630),(function (game,_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__30362){
var vec__30363 = p__30362;
var attacker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30363,(0),null);
var defender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30363,(1),null);
var attacker_army = teg_online.game.get_army(game,attacker);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (move){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teg_online.ai.actions.attack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attacker","attacker",48869964),attacker,new cljs.core.Keyword(null,"defender","defender",1458963871),defender,new cljs.core.Keyword(null,"move","move",-2110884309),move], 0))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.min.cljs$core$IFn$_invoke$arity$2((3),(attacker_army - (1))) + (1))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.ai.actions.get_valid_attacks(game)], 0));
}));
teg_online.ai.actions.all_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","regroup","teg-online.game/regroup",1546790374),(function (game,_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__30374){
var vec__30376 = p__30374;
var origin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30376,(0),null);
var destination = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30376,(1),null);
var origin_army = teg_online.game.get_army(game,origin);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (move){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teg_online.ai.actions.regroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"origin","origin",1037372088),origin,new cljs.core.Keyword(null,"destination","destination",-253872483),destination,new cljs.core.Keyword(null,"move","move",-2110884309),move], 0))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),origin_army));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([teg_online.ai.actions.get_valid_regroups(game)], 0));
}));
if((typeof teg_online !== 'undefined') && (typeof teg_online.ai !== 'undefined') && (typeof teg_online.ai.actions !== 'undefined') && (typeof teg_online.ai.actions.random_actions !== 'undefined')){
} else {
teg_online.ai.actions.random_actions = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30395 = cljs.core.get_global_hierarchy;
return (fexpr__30395.cljs$core$IFn$_invoke$arity$0 ? fexpr__30395.cljs$core$IFn$_invoke$arity$0() : fexpr__30395.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("teg-online.ai.actions","random-actions"),(function (game,_turn_actions){
return new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
teg_online.ai.actions.random_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),(function (game,turn_actions){
var player_id = teg_online.game.get_current_player(game);
var actions = cljs.core.PersistentVector.EMPTY;
var countries = cljs.core.set(teg_online.game.player_countries(game,player_id));
var remaining = (teg_online.game.get_extra_army(game) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"units","units",-533089095),turn_actions)));
while(true){
if((remaining <= (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(actions,teg_online.ai.actions.pass);
} else {
var country = cljs.core.rand_nth(cljs.core.vec(countries));
var units = (teg_online.utils.core.rand_int.cljs$core$IFn$_invoke$arity$1(remaining) + (1));
var G__30552 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(actions,teg_online.ai.actions.add_army.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"country","country",312965309),country,new cljs.core.Keyword(null,"units","units",-533089095),units], 0)));
var G__30553 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(countries,country);
var G__30554 = (remaining - units);
actions = G__30552;
countries = G__30553;
remaining = G__30554;
continue;
}
break;
}
}));
teg_online.ai.actions.random_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630),(function (game,_){
var valid_attacks = teg_online.ai.actions.get_valid_attacks(game);
if(cljs.core.seq(valid_attacks)){
var vec__30404 = cljs.core.rand_nth(valid_attacks);
var attacker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30404,(0),null);
var defender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30404,(1),null);
var attacker_army = teg_online.game.get_army(game,attacker);
var move = (teg_online.utils.core.rand_int.cljs$core$IFn$_invoke$arity$1(cljs.core.min.cljs$core$IFn$_invoke$arity$2((3),(attacker_army - (1)))) + (1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teg_online.ai.actions.attack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attacker","attacker",48869964),attacker,new cljs.core.Keyword(null,"defender","defender",1458963871),defender,new cljs.core.Keyword(null,"move","move",-2110884309),move], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teg_online.ai.actions.pass], null);
}
}));
teg_online.ai.actions.random_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","regroup","teg-online.game/regroup",1546790374),(function (game,_){
var valid_regroup = teg_online.ai.actions.get_valid_regroups(game);
if(cljs.core.seq(valid_regroup)){
var vec__30409 = cljs.core.rand_nth(valid_regroup);
var origin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30409,(0),null);
var destination = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30409,(1),null);
var origin_army = teg_online.game.get_army(game,origin);
var move = teg_online.utils.core.rand_int.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.min.cljs$core$IFn$_invoke$arity$2((3),(origin_army - (1))) + (1)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teg_online.ai.actions.regroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"origin","origin",1037372088),origin,new cljs.core.Keyword(null,"destination","destination",-253872483),destination,new cljs.core.Keyword(null,"move","move",-2110884309),move], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teg_online.ai.actions.pass], null);
}
}));
teg_online.ai.actions.random_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teg_online.ai.actions.pass], null);
}));

//# sourceMappingURL=teg_online.ai.actions.js.map
