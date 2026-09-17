goog.provide('teg_online.ai.local_handlers');
teg_online.ai.local_handlers.get_random_actions_BANG_ = (function teg_online$ai$local_handlers$get_random_actions_BANG_(game,turn_actions,_,___$1){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_30612){
var state_val_30613 = (state_30612[(1)]);
if((state_val_30613 === (7))){
var inst_30575 = (state_30612[(2)]);
var state_30612__$1 = state_30612;
var statearr_30616_31062 = state_30612__$1;
(statearr_30616_31062[(2)] = inst_30575);

(statearr_30616_31062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30613 === (1))){
var state_30612__$1 = state_30612;
var statearr_30617_31063 = state_30612__$1;
(statearr_30617_31063[(2)] = null);

(statearr_30617_31063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30613 === (4))){
var inst_30551 = (state_30612[(7)]);
var inst_30551__$1 = (state_30612[(2)]);
var inst_30563 = (inst_30551__$1 instanceof Error);
var state_30612__$1 = (function (){var statearr_30618 = state_30612;
(statearr_30618[(7)] = inst_30551__$1);

return statearr_30618;
})();
if(cljs.core.truth_(inst_30563)){
var statearr_30620_31068 = state_30612__$1;
(statearr_30620_31068[(1)] = (5));

} else {
var statearr_30624_31069 = state_30612__$1;
(statearr_30624_31069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30613 === (6))){
var inst_30551 = (state_30612[(7)]);
var inst_30572 = ({"cause":inst_30551});
var inst_30573 = (new Error("ERROR",inst_30572));
var state_30612__$1 = state_30612;
var statearr_30625_31070 = state_30612__$1;
(statearr_30625_31070[(2)] = inst_30573);

(statearr_30625_31070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30613 === (3))){
var inst_30609 = (state_30612[(2)]);
var state_30612__$1 = state_30612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30612__$1,inst_30609);
} else {
if((state_val_30613 === (12))){
var inst_30595 = (state_30612[(8)]);
var inst_30594 = (state_30612[(9)]);
var inst_30604 = (state_30612[(2)]);
var inst_30605 = [inst_30595,inst_30604];
var inst_30606 = cljs.core.PersistentHashMap.fromArrays(inst_30594,inst_30605);
var ___$2 = (function (){var statearr_30627 = state_30612;
(statearr_30627[(4)] = cljs.core.rest((state_30612[(4)])));

return statearr_30627;
})();
var state_30612__$1 = state_30612;
var statearr_30631_31071 = state_30612__$1;
(statearr_30631_31071[(2)] = inst_30606);

(statearr_30631_31071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30613 === (2))){
var inst_30581 = (state_30612[(10)]);
var inst_30587 = (state_30612[(11)]);
var ___$2 = (function (){var statearr_30636 = state_30612;
(statearr_30636[(4)] = cljs.core.cons((8),(state_30612[(4)])));

return statearr_30636;
})();
var inst_30581__$1 = teg_online.game.get_current_player(game);
var inst_30583 = (function (){var player_id = inst_30581__$1;
return (function (){
return teg_online.ai.actions.random_actions.cljs$core$IFn$_invoke$arity$2(game,turn_actions);
});
})();
var inst_30584 = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(inst_30583);
var inst_30585 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((1000),inst_30584);
var inst_30586 = cljs.core.vec(inst_30585);
var inst_30587__$1 = cljs.core.rand_nth(inst_30586);
var inst_30588 = teg_online.ai.actions.make_mutation(inst_30587__$1);
var inst_30589 = teg_online.ai.actions.calculate_score.cljs$core$IFn$_invoke$arity$2(game,inst_30588);
var state_30612__$1 = (function (){var statearr_30639 = state_30612;
(statearr_30639[(10)] = inst_30581__$1);

(statearr_30639[(11)] = inst_30587__$1);

return statearr_30639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30612__$1,(9),inst_30589);
} else {
if((state_val_30613 === (11))){
var inst_30600 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30601 = [teg_online.ai.actions.pass];
var inst_30602 = (new cljs.core.PersistentVector(null,1,(5),inst_30600,inst_30601,null));
var state_30612__$1 = state_30612;
var statearr_30644_31072 = state_30612__$1;
(statearr_30644_31072[(2)] = inst_30602);

(statearr_30644_31072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30613 === (9))){
var inst_30581 = (state_30612[(10)]);
var inst_30591 = (state_30612[(2)]);
var inst_30592 = teg_online.utils.async.throw_err(inst_30591);
var inst_30593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30592,inst_30581);
var inst_30594 = [new cljs.core.Keyword(null,"conversation","conversation",1148767509),new cljs.core.Keyword(null,"actions","actions",-812656882)];
var inst_30595 = cljs.core.PersistentVector.EMPTY;
var inst_30596 = new cljs.core.Keyword(null,"absolute","absolute",1655386478).cljs$core$IFn$_invoke$arity$1(inst_30593);
var inst_30597 = (inst_30596 > (0));
var state_30612__$1 = (function (){var statearr_30645 = state_30612;
(statearr_30645[(9)] = inst_30594);

(statearr_30645[(8)] = inst_30595);

return statearr_30645;
})();
if(cljs.core.truth_(inst_30597)){
var statearr_30647_31073 = state_30612__$1;
(statearr_30647_31073[(1)] = (10));

} else {
var statearr_30648_31074 = state_30612__$1;
(statearr_30648_31074[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30613 === (5))){
var inst_30551 = (state_30612[(7)]);
var state_30612__$1 = state_30612;
var statearr_30650_31076 = state_30612__$1;
(statearr_30650_31076[(2)] = inst_30551);

(statearr_30650_31076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30613 === (10))){
var inst_30587 = (state_30612[(11)]);
var state_30612__$1 = state_30612;
var statearr_30651_31077 = state_30612__$1;
(statearr_30651_31077[(2)] = inst_30587);

(statearr_30651_31077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30613 === (8))){
var ___$2 = (function (){var statearr_30652 = state_30612;
(statearr_30652[(4)] = cljs.core.rest((state_30612[(4)])));

return statearr_30652;
})();
var state_30612__$1 = state_30612;
var ex30649 = (state_30612__$1[(2)]);
var statearr_30654_31078 = state_30612__$1;
(statearr_30654_31078[(5)] = ex30649);


var statearr_30657_31079 = state_30612__$1;
(statearr_30657_31079[(1)] = (4));

(statearr_30657_31079[(5)] = null);



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
var teg_online$ai$local_handlers$get_random_actions_BANG__$_state_machine__18069__auto__ = null;
var teg_online$ai$local_handlers$get_random_actions_BANG__$_state_machine__18069__auto____0 = (function (){
var statearr_30659 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30659[(0)] = teg_online$ai$local_handlers$get_random_actions_BANG__$_state_machine__18069__auto__);

(statearr_30659[(1)] = (1));

return statearr_30659;
});
var teg_online$ai$local_handlers$get_random_actions_BANG__$_state_machine__18069__auto____1 = (function (state_30612){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_30612);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e30664){var ex__18072__auto__ = e30664;
var statearr_30669_31084 = state_30612;
(statearr_30669_31084[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_30612[(4)]))){
var statearr_30670_31085 = state_30612;
(statearr_30670_31085[(1)] = cljs.core.first((state_30612[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31086 = state_30612;
state_30612 = G__31086;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ai$local_handlers$get_random_actions_BANG__$_state_machine__18069__auto__ = function(state_30612){
switch(arguments.length){
case 0:
return teg_online$ai$local_handlers$get_random_actions_BANG__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ai$local_handlers$get_random_actions_BANG__$_state_machine__18069__auto____1.call(this,state_30612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ai$local_handlers$get_random_actions_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ai$local_handlers$get_random_actions_BANG__$_state_machine__18069__auto____0;
teg_online$ai$local_handlers$get_random_actions_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ai$local_handlers$get_random_actions_BANG__$_state_machine__18069__auto____1;
return teg_online$ai$local_handlers$get_random_actions_BANG__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_30679 = f__19294__auto__();
(statearr_30679[(6)] = c__19293__auto__);

return statearr_30679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ai.local_handlers.get_best_actions_BANG_ = (function teg_online$ai$local_handlers$get_best_actions_BANG_(game,turn_actions,_,___$1){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_30830){
var state_val_30835 = (state_30830[(1)]);
if((state_val_30835 === (7))){
var inst_30690 = (state_30830[(2)]);
var state_30830__$1 = state_30830;
var statearr_30836_31087 = state_30830__$1;
(statearr_30836_31087[(2)] = inst_30690);

(statearr_30836_31087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (1))){
var state_30830__$1 = state_30830;
var statearr_30837_31088 = state_30830__$1;
(statearr_30837_31088[(2)] = null);

(statearr_30837_31088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (4))){
var inst_30681 = (state_30830[(7)]);
var inst_30681__$1 = (state_30830[(2)]);
var inst_30682 = (inst_30681__$1 instanceof Error);
var state_30830__$1 = (function (){var statearr_30838 = state_30830;
(statearr_30838[(7)] = inst_30681__$1);

return statearr_30838;
})();
if(cljs.core.truth_(inst_30682)){
var statearr_30839_31090 = state_30830__$1;
(statearr_30839_31090[(1)] = (5));

} else {
var statearr_30840_31091 = state_30830__$1;
(statearr_30840_31091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (15))){
var inst_30743 = (state_30830[(8)]);
var inst_30705 = (state_30830[(9)]);
var inst_30696 = (state_30830[(10)]);
var inst_30707 = (state_30830[(11)]);
var inst_30709 = (state_30830[(12)]);
var inst_30711 = (state_30830[(13)]);
var inst_30713 = (state_30830[(14)]);
var inst_30743__$1 = (state_30830[(2)]);
var inst_30748 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ACTION:",inst_30743__$1], 0));
var inst_30750 = [new cljs.core.Keyword(null,"conversation","conversation",1148767509),new cljs.core.Keyword(null,"actions","actions",-812656882)];
var inst_30758 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30759 = cljs.core.count(inst_30705);
var inst_30765 = (function (){var player_id = inst_30696;
var all_actions = inst_30705;
var sort_normalized = inst_30707;
var sort_absolute = inst_30709;
var best_normalized = inst_30711;
var best_absolute = inst_30713;
var best = inst_30743__$1;
return (function (scored_action){
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(scored_action,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stream","stream",1534941648),null], 0));
});
})();
var inst_30778 = cljs.core.deref(inst_30707);
var inst_30783 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_30765,inst_30778);
var inst_30788 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",inst_30783);
var inst_30789 = (""+"Options ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30759)+")"+"\n\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30788));
var inst_30790 = [inst_30789];
var inst_30791 = (new cljs.core.PersistentVector(null,1,(5),inst_30758,inst_30790,null));
var inst_30792 = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(inst_30743__$1);
var inst_30793 = new cljs.core.Keyword(null,"absolute","absolute",1655386478).cljs$core$IFn$_invoke$arity$1(inst_30792);
var inst_30794 = (inst_30793 > 0.0);
var state_30830__$1 = (function (){var statearr_30847 = state_30830;
(statearr_30847[(8)] = inst_30743__$1);

(statearr_30847[(15)] = inst_30748);

(statearr_30847[(16)] = inst_30750);

(statearr_30847[(17)] = inst_30791);

return statearr_30847;
})();
if(cljs.core.truth_(inst_30794)){
var statearr_30848_31093 = state_30830__$1;
(statearr_30848_31093[(1)] = (16));

} else {
var statearr_30849_31094 = state_30830__$1;
(statearr_30849_31094[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (13))){
var inst_30711 = (state_30830[(13)]);
var inst_30738 = cljs.core.deref(inst_30711);
var state_30830__$1 = state_30830;
var statearr_30854_31096 = state_30830__$1;
(statearr_30854_31096[(2)] = inst_30738);

(statearr_30854_31096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (6))){
var inst_30681 = (state_30830[(7)]);
var inst_30687 = ({"cause":inst_30681});
var inst_30688 = (new Error("ERROR",inst_30687));
var state_30830__$1 = state_30830;
var statearr_30855_31099 = state_30830__$1;
(statearr_30855_31099[(2)] = inst_30688);

(statearr_30855_31099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (17))){
var inst_30803 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30810 = [teg_online.ai.actions.pass];
var inst_30816 = (new cljs.core.PersistentVector(null,1,(5),inst_30803,inst_30810,null));
var state_30830__$1 = state_30830;
var statearr_30856_31100 = state_30830__$1;
(statearr_30856_31100[(2)] = inst_30816);

(statearr_30856_31100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (3))){
var inst_30824 = (state_30830[(2)]);
var state_30830__$1 = state_30830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30830__$1,inst_30824);
} else {
if((state_val_30835 === (12))){
var inst_30735 = (state_30830[(2)]);
var state_30830__$1 = state_30830;
if(cljs.core.truth_(inst_30735)){
var statearr_30857_31101 = state_30830__$1;
(statearr_30857_31101[(1)] = (13));

} else {
var statearr_30858_31102 = state_30830__$1;
(statearr_30858_31102[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (2))){
var inst_30696 = (state_30830[(10)]);
var ___$2 = (function (){var statearr_30863 = state_30830;
(statearr_30863[(4)] = cljs.core.cons((8),(state_30830[(4)])));

return statearr_30863;
})();
var inst_30696__$1 = teg_online.game.get_current_player(game);
var inst_30697 = (function (){var player_id = inst_30696__$1;
return (function (actions){
var c__19293__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_30892){
var state_val_30893 = (state_30892[(1)]);
if((state_val_30893 === (7))){
var inst_30873 = (state_30892[(2)]);
var state_30892__$1 = state_30892;
var statearr_30896_31104 = state_30892__$1;
(statearr_30896_31104[(2)] = inst_30873);

(statearr_30896_31104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30893 === (1))){
var state_30892__$1 = state_30892;
var statearr_30898_31105 = state_30892__$1;
(statearr_30898_31105[(2)] = null);

(statearr_30898_31105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30893 === (4))){
var inst_30864 = (state_30892[(7)]);
var inst_30864__$1 = (state_30892[(2)]);
var inst_30865 = (inst_30864__$1 instanceof Error);
var state_30892__$1 = (function (){var statearr_30900 = state_30892;
(statearr_30900[(7)] = inst_30864__$1);

return statearr_30900;
})();
if(cljs.core.truth_(inst_30865)){
var statearr_30901_31106 = state_30892__$1;
(statearr_30901_31106[(1)] = (5));

} else {
var statearr_30902_31107 = state_30892__$1;
(statearr_30902_31107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30893 === (6))){
var inst_30864 = (state_30892[(7)]);
var inst_30870 = ({"cause":inst_30864});
var inst_30871 = (new Error("ERROR",inst_30870));
var state_30892__$1 = state_30892;
var statearr_30904_31109 = state_30892__$1;
(statearr_30904_31109[(2)] = inst_30871);

(statearr_30904_31109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30893 === (3))){
var inst_30890 = (state_30892[(2)]);
var state_30892__$1 = state_30892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30892__$1,inst_30890);
} else {
if((state_val_30893 === (2))){
var ___$3 = (function (){var statearr_30907 = state_30892;
(statearr_30907[(4)] = cljs.core.cons((8),(state_30892[(4)])));

return statearr_30907;
})();
var inst_30879 = teg_online.ai.actions.make_mutation(actions);
var inst_30880 = teg_online.ai.actions.calculate_score.cljs$core$IFn$_invoke$arity$2(game,inst_30879);
var state_30892__$1 = state_30892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30892__$1,(9),inst_30880);
} else {
if((state_val_30893 === (9))){
var inst_30882 = (state_30892[(2)]);
var inst_30883 = teg_online.utils.async.throw_err(inst_30882);
var inst_30884 = [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_30885 = (player_id.cljs$core$IFn$_invoke$arity$1 ? player_id.cljs$core$IFn$_invoke$arity$1(inst_30883) : player_id.call(null,inst_30883));
var inst_30886 = [actions,inst_30885];
var inst_30887 = cljs.core.PersistentHashMap.fromArrays(inst_30884,inst_30886);
var ___$3 = (function (){var statearr_30914 = state_30892;
(statearr_30914[(4)] = cljs.core.rest((state_30892[(4)])));

return statearr_30914;
})();
var state_30892__$1 = state_30892;
var statearr_30915_31113 = state_30892__$1;
(statearr_30915_31113[(2)] = inst_30887);

(statearr_30915_31113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30893 === (5))){
var inst_30864 = (state_30892[(7)]);
var state_30892__$1 = state_30892;
var statearr_30917_31115 = state_30892__$1;
(statearr_30917_31115[(2)] = inst_30864);

(statearr_30917_31115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30893 === (8))){
var ___$3 = (function (){var statearr_30918 = state_30892;
(statearr_30918[(4)] = cljs.core.rest((state_30892[(4)])));

return statearr_30918;
})();
var state_30892__$1 = state_30892;
var ex30910 = (state_30892__$1[(2)]);
var statearr_30919_31116 = state_30892__$1;
(statearr_30919_31116[(5)] = ex30910);


var statearr_30920_31117 = state_30892__$1;
(statearr_30920_31117[(1)] = (4));

(statearr_30920_31117[(5)] = null);



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
var teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto__ = null;
var teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto____0 = (function (){
var statearr_30924 = [null,null,null,null,null,null,null,null];
(statearr_30924[(0)] = teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto__);

(statearr_30924[(1)] = (1));

return statearr_30924;
});
var teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto____1 = (function (state_30892){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_30892);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e30927){var ex__18072__auto__ = e30927;
var statearr_30928_31119 = state_30892;
(statearr_30928_31119[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_30892[(4)]))){
var statearr_30929_31122 = state_30892;
(statearr_30929_31122[(1)] = cljs.core.first((state_30892[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31123 = state_30892;
state_30892 = G__31123;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto__ = function(state_30892){
switch(arguments.length){
case 0:
return teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto____1.call(this,state_30892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto____0;
teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto____1;
return teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_30934 = f__19294__auto__();
(statearr_30934[(6)] = c__19293__auto____$1);

return statearr_30934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto____$1;
});
})();
var inst_30699 = teg_online.ai.actions.all_actions.cljs$core$IFn$_invoke$arity$2(game,turn_actions);
var inst_30700 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((1000),inst_30699);
var inst_30701 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_30697,inst_30700);
var inst_30702 = cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,inst_30701);
var state_30830__$1 = (function (){var statearr_30938 = state_30830;
(statearr_30938[(10)] = inst_30696__$1);

return statearr_30938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30830__$1,(9),inst_30702);
} else {
if((state_val_30835 === (11))){
var inst_30722 = (state_30830[(18)]);
var state_30830__$1 = state_30830;
var statearr_30940_31124 = state_30830__$1;
(statearr_30940_31124[(2)] = inst_30722);

(statearr_30940_31124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (9))){
var inst_30696 = (state_30830[(10)]);
var inst_30705 = (state_30830[(9)]);
var inst_30707 = (state_30830[(11)]);
var inst_30709 = (state_30830[(12)]);
var inst_30711 = (state_30830[(13)]);
var inst_30722 = (state_30830[(18)]);
var inst_30704 = (state_30830[(2)]);
var inst_30705__$1 = teg_online.utils.async.throw_err(inst_30704);
var inst_30706 = (function (){var player_id = inst_30696;
var all_actions = inst_30705__$1;
return (function (){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"score","score",-1963588780)),cljs.core._GT_,all_actions);
});
})();
var inst_30707__$1 = (new cljs.core.Delay(inst_30706,null));
var inst_30708 = (function (){var player_id = inst_30696;
var all_actions = inst_30705__$1;
var sort_normalized = inst_30707__$1;
return (function (){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"score","score",-1963588780)),cljs.core._GT_,all_actions);
});
})();
var inst_30709__$1 = (new cljs.core.Delay(inst_30708,null));
var inst_30710 = (function (){var player_id = inst_30696;
var all_actions = inst_30705__$1;
var sort_normalized = inst_30707__$1;
var sort_absolute = inst_30709__$1;
return (function (){
return cljs.core.first(cljs.core.deref(sort_normalized));
});
})();
var inst_30711__$1 = (new cljs.core.Delay(inst_30710,null));
var inst_30712 = (function (){var player_id = inst_30696;
var all_actions = inst_30705__$1;
var sort_normalized = inst_30707__$1;
var sort_absolute = inst_30709__$1;
var best_normalized = inst_30711__$1;
return (function (){
return cljs.core.first(cljs.core.deref(sort_absolute));
});
})();
var inst_30713 = (new cljs.core.Delay(inst_30712,null));
var inst_30718 = cljs.core.deref(inst_30711__$1);
var inst_30719 = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(inst_30718);
var inst_30720 = new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(inst_30719);
var inst_30722__$1 = (inst_30720 > (0));
var state_30830__$1 = (function (){var statearr_30942 = state_30830;
(statearr_30942[(9)] = inst_30705__$1);

(statearr_30942[(11)] = inst_30707__$1);

(statearr_30942[(12)] = inst_30709__$1);

(statearr_30942[(13)] = inst_30711__$1);

(statearr_30942[(14)] = inst_30713);

(statearr_30942[(18)] = inst_30722__$1);

return statearr_30942;
})();
if(cljs.core.truth_(inst_30722__$1)){
var statearr_30950_31128 = state_30830__$1;
(statearr_30950_31128[(1)] = (10));

} else {
var statearr_30951_31129 = state_30830__$1;
(statearr_30951_31129[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (5))){
var inst_30681 = (state_30830[(7)]);
var state_30830__$1 = state_30830;
var statearr_30953_31130 = state_30830__$1;
(statearr_30953_31130[(2)] = inst_30681);

(statearr_30953_31130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (14))){
var inst_30713 = (state_30830[(14)]);
var inst_30741 = cljs.core.deref(inst_30713);
var state_30830__$1 = state_30830;
var statearr_30955_31131 = state_30830__$1;
(statearr_30955_31131[(2)] = inst_30741);

(statearr_30955_31131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (16))){
var inst_30743 = (state_30830[(8)]);
var inst_30796 = new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(inst_30743);
var state_30830__$1 = state_30830;
var statearr_30961_31132 = state_30830__$1;
(statearr_30961_31132[(2)] = inst_30796);

(statearr_30961_31132[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (10))){
var inst_30711 = (state_30830[(13)]);
var inst_30728 = cljs.core.deref(inst_30711);
var inst_30729 = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(inst_30728);
var inst_30730 = new cljs.core.Keyword(null,"absolute","absolute",1655386478).cljs$core$IFn$_invoke$arity$1(inst_30729);
var inst_30731 = (inst_30730 > (0));
var state_30830__$1 = state_30830;
var statearr_30966_31133 = state_30830__$1;
(statearr_30966_31133[(2)] = inst_30731);

(statearr_30966_31133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (18))){
var inst_30791 = (state_30830[(17)]);
var inst_30750 = (state_30830[(16)]);
var inst_30819 = (state_30830[(2)]);
var inst_30820 = [inst_30791,inst_30819];
var inst_30821 = cljs.core.PersistentHashMap.fromArrays(inst_30750,inst_30820);
var ___$2 = (function (){var statearr_30967 = state_30830;
(statearr_30967[(4)] = cljs.core.rest((state_30830[(4)])));

return statearr_30967;
})();
var state_30830__$1 = state_30830;
var statearr_30968_31138 = state_30830__$1;
(statearr_30968_31138[(2)] = inst_30821);

(statearr_30968_31138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (8))){
var ___$2 = (function (){var statearr_30971 = state_30830;
(statearr_30971[(4)] = cljs.core.rest((state_30830[(4)])));

return statearr_30971;
})();
var state_30830__$1 = state_30830;
var ex30962 = (state_30830__$1[(2)]);
var statearr_30972_31144 = state_30830__$1;
(statearr_30972_31144[(5)] = ex30962);


var statearr_30973_31149 = state_30830__$1;
(statearr_30973_31149[(1)] = (4));

(statearr_30973_31149[(5)] = null);



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
});
return (function() {
var teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto__ = null;
var teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto____0 = (function (){
var statearr_30979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30979[(0)] = teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto__);

(statearr_30979[(1)] = (1));

return statearr_30979;
});
var teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto____1 = (function (state_30830){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_30830);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e30982){var ex__18072__auto__ = e30982;
var statearr_30983_31160 = state_30830;
(statearr_30983_31160[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_30830[(4)]))){
var statearr_30984_31168 = state_30830;
(statearr_30984_31168[(1)] = cljs.core.first((state_30830[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31170 = state_30830;
state_30830 = G__31170;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto__ = function(state_30830){
switch(arguments.length){
case 0:
return teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto____1.call(this,state_30830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto____0;
teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto____1;
return teg_online$ai$local_handlers$get_best_actions_BANG__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_30989 = f__19294__auto__();
(statearr_30989[(6)] = c__19293__auto__);

return statearr_30989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ai.local_handlers.get_placeholder_actions_BANG_ = (function teg_online$ai$local_handlers$get_placeholder_actions_BANG_(game,turn_actions,model,log){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_31018){
var state_val_31019 = (state_31018[(1)]);
if((state_val_31019 === (1))){
var state_31018__$1 = state_31018;
var statearr_31021_31197 = state_31018__$1;
(statearr_31021_31197[(2)] = null);

(statearr_31021_31197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (2))){
var _ = (function (){var statearr_31022 = state_31018;
(statearr_31022[(4)] = cljs.core.cons((8),(state_31018[(4)])));

return statearr_31022;
})();
var inst_31006 = [new cljs.core.Keyword(null,"conversation","conversation",1148767509),new cljs.core.Keyword(null,"actions","actions",-812656882)];
var inst_31008 = cljs.core.PersistentVector.EMPTY;
var inst_31009 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31010 = [teg_online.ai.actions.pass];
var inst_31011 = (new cljs.core.PersistentVector(null,1,(5),inst_31009,inst_31010,null));
var inst_31012 = [inst_31008,inst_31011];
var inst_31013 = cljs.core.PersistentHashMap.fromArrays(inst_31006,inst_31012);
var ___$1 = (function (){var statearr_31024 = state_31018;
(statearr_31024[(4)] = cljs.core.rest((state_31018[(4)])));

return statearr_31024;
})();
var state_31018__$1 = state_31018;
var statearr_31025_31221 = state_31018__$1;
(statearr_31025_31221[(2)] = inst_31013);

(statearr_31025_31221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (3))){
var inst_31016 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31018__$1,inst_31016);
} else {
if((state_val_31019 === (4))){
var inst_30991 = (state_31018[(7)]);
var inst_30991__$1 = (state_31018[(2)]);
var inst_30992 = (inst_30991__$1 instanceof Error);
var state_31018__$1 = (function (){var statearr_31030 = state_31018;
(statearr_31030[(7)] = inst_30991__$1);

return statearr_31030;
})();
if(cljs.core.truth_(inst_30992)){
var statearr_31031_31224 = state_31018__$1;
(statearr_31031_31224[(1)] = (5));

} else {
var statearr_31032_31225 = state_31018__$1;
(statearr_31032_31225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (5))){
var inst_30991 = (state_31018[(7)]);
var state_31018__$1 = state_31018;
var statearr_31037_31226 = state_31018__$1;
(statearr_31037_31226[(2)] = inst_30991);

(statearr_31037_31226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (6))){
var inst_30991 = (state_31018[(7)]);
var inst_30997 = ({"cause":inst_30991});
var inst_30998 = (new Error("ERROR",inst_30997));
var state_31018__$1 = state_31018;
var statearr_31039_31227 = state_31018__$1;
(statearr_31039_31227[(2)] = inst_30998);

(statearr_31039_31227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (7))){
var inst_31000 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31040_31228 = state_31018__$1;
(statearr_31040_31228[(2)] = inst_31000);

(statearr_31040_31228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (8))){
var _ = (function (){var statearr_31041 = state_31018;
(statearr_31041[(4)] = cljs.core.rest((state_31018[(4)])));

return statearr_31041;
})();
var state_31018__$1 = state_31018;
var ex31038 = (state_31018__$1[(2)]);
var statearr_31043_31229 = state_31018__$1;
(statearr_31043_31229[(5)] = ex31038);


var statearr_31047_31230 = state_31018__$1;
(statearr_31047_31230[(1)] = (4));

(statearr_31047_31230[(5)] = null);



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
var teg_online$ai$local_handlers$get_placeholder_actions_BANG__$_state_machine__18069__auto__ = null;
var teg_online$ai$local_handlers$get_placeholder_actions_BANG__$_state_machine__18069__auto____0 = (function (){
var statearr_31049 = [null,null,null,null,null,null,null,null];
(statearr_31049[(0)] = teg_online$ai$local_handlers$get_placeholder_actions_BANG__$_state_machine__18069__auto__);

(statearr_31049[(1)] = (1));

return statearr_31049;
});
var teg_online$ai$local_handlers$get_placeholder_actions_BANG__$_state_machine__18069__auto____1 = (function (state_31018){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_31018);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e31050){var ex__18072__auto__ = e31050;
var statearr_31051_31234 = state_31018;
(statearr_31051_31234[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_31018[(4)]))){
var statearr_31053_31235 = state_31018;
(statearr_31053_31235[(1)] = cljs.core.first((state_31018[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31237 = state_31018;
state_31018 = G__31237;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$ai$local_handlers$get_placeholder_actions_BANG__$_state_machine__18069__auto__ = function(state_31018){
switch(arguments.length){
case 0:
return teg_online$ai$local_handlers$get_placeholder_actions_BANG__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$ai$local_handlers$get_placeholder_actions_BANG__$_state_machine__18069__auto____1.call(this,state_31018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$ai$local_handlers$get_placeholder_actions_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$ai$local_handlers$get_placeholder_actions_BANG__$_state_machine__18069__auto____0;
teg_online$ai$local_handlers$get_placeholder_actions_BANG__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$ai$local_handlers$get_placeholder_actions_BANG__$_state_machine__18069__auto____1;
return teg_online$ai$local_handlers$get_placeholder_actions_BANG__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_31054 = f__19294__auto__();
(statearr_31054[(6)] = c__19293__auto__);

return statearr_31054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.ai.local_handlers.handler_by_id = (function teg_online$ai$local_handlers$handler_by_id(model_id){
var G__31057 = model_id;
var G__31057__$1 = (((G__31057 instanceof cljs.core.Keyword))?G__31057.fqn:null);
switch (G__31057__$1) {
case "random":
return teg_online.ai.local_handlers.get_random_actions_BANG_;

break;
case "best":
return teg_online.ai.local_handlers.get_best_actions_BANG_;

break;
default:
return teg_online.ai.local_handlers.get_placeholder_actions_BANG_;

}
});

//# sourceMappingURL=teg_online.ai.local_handlers.js.map
