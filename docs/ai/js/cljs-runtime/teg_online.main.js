goog.provide('teg_online.main');
cljs.core.enable_console_print_BANG_();
if((typeof teg_online !== 'undefined') && (typeof teg_online.main !== 'undefined') && (typeof teg_online.main.state !== 'undefined')){
} else {
teg_online.main.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game","game",-441523833),teg_online.game.new_game(),new cljs.core.Keyword(null,"game-id","game-id",385578016),null], null));
}
teg_online.main.ask_user_name = (function teg_online$main$ask_user_name(){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_113553){
var state_val_113554 = (state_113553[(1)]);
if((state_val_113554 === (7))){
var inst_113547 = (teg_online.main.ask_user_name.cljs$core$IFn$_invoke$arity$0 ? teg_online.main.ask_user_name.cljs$core$IFn$_invoke$arity$0() : teg_online.main.ask_user_name.call(null));
var state_113553__$1 = state_113553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_113553__$1,(9),inst_113547);
} else {
if((state_val_113554 === (1))){
var inst_113535 = teg_online.utils.bootstrap.prompt("Nombre de usuario:","");
var state_113553__$1 = state_113553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_113553__$1,(2),inst_113535);
} else {
if((state_val_113554 === (4))){
var state_113553__$1 = state_113553;
var statearr_113555_114117 = state_113553__$1;
(statearr_113555_114117[(2)] = "");

(statearr_113555_114117[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113554 === (6))){
var inst_113542 = (state_113553[(7)]);
var state_113553__$1 = state_113553;
var statearr_113556_114118 = state_113553__$1;
(statearr_113556_114118[(2)] = inst_113542);

(statearr_113556_114118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113554 === (3))){
var inst_113537 = (state_113553[(8)]);
var state_113553__$1 = state_113553;
var statearr_113557_114119 = state_113553__$1;
(statearr_113557_114119[(2)] = inst_113537);

(statearr_113557_114119[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113554 === (2))){
var inst_113537 = (state_113553[(8)]);
var inst_113537__$1 = (state_113553[(2)]);
var state_113553__$1 = (function (){var statearr_113558 = state_113553;
(statearr_113558[(8)] = inst_113537__$1);

return statearr_113558;
})();
if(cljs.core.truth_(inst_113537__$1)){
var statearr_113559_114120 = state_113553__$1;
(statearr_113559_114120[(1)] = (3));

} else {
var statearr_113560_114121 = state_113553__$1;
(statearr_113560_114121[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113554 === (9))){
var inst_113549 = (state_113553[(2)]);
var state_113553__$1 = state_113553;
var statearr_113561_114122 = state_113553__$1;
(statearr_113561_114122[(2)] = inst_113549);

(statearr_113561_114122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113554 === (5))){
var inst_113542 = (state_113553[(7)]);
var inst_113541 = (state_113553[(2)]);
var inst_113542__$1 = clojure.string.trim(inst_113541);
var inst_113543 = cljs.core.empty_QMARK_(inst_113542__$1);
var inst_113544 = (!(inst_113543));
var state_113553__$1 = (function (){var statearr_113562 = state_113553;
(statearr_113562[(7)] = inst_113542__$1);

return statearr_113562;
})();
if(inst_113544){
var statearr_113563_114123 = state_113553__$1;
(statearr_113563_114123[(1)] = (6));

} else {
var statearr_113564_114124 = state_113553__$1;
(statearr_113564_114124[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113554 === (8))){
var inst_113551 = (state_113553[(2)]);
var state_113553__$1 = state_113553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_113553__$1,inst_113551);
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
var teg_online$main$ask_user_name_$_state_machine__18069__auto__ = null;
var teg_online$main$ask_user_name_$_state_machine__18069__auto____0 = (function (){
var statearr_113565 = [null,null,null,null,null,null,null,null,null];
(statearr_113565[(0)] = teg_online$main$ask_user_name_$_state_machine__18069__auto__);

(statearr_113565[(1)] = (1));

return statearr_113565;
});
var teg_online$main$ask_user_name_$_state_machine__18069__auto____1 = (function (state_113553){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_113553);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e113566){var ex__18072__auto__ = e113566;
var statearr_113567_114125 = state_113553;
(statearr_113567_114125[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_113553[(4)]))){
var statearr_113568_114126 = state_113553;
(statearr_113568_114126[(1)] = cljs.core.first((state_113553[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__114127 = state_113553;
state_113553 = G__114127;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$main$ask_user_name_$_state_machine__18069__auto__ = function(state_113553){
switch(arguments.length){
case 0:
return teg_online$main$ask_user_name_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$main$ask_user_name_$_state_machine__18069__auto____1.call(this,state_113553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$main$ask_user_name_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$main$ask_user_name_$_state_machine__18069__auto____0;
teg_online$main$ask_user_name_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$main$ask_user_name_$_state_machine__18069__auto____1;
return teg_online$main$ask_user_name_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_113569 = f__19294__auto__();
(statearr_113569[(6)] = c__19293__auto__);

return statearr_113569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.main.get_this_user = (function teg_online$main$get_this_user(){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_113653){
var state_val_113654 = (state_113653[(1)]);
if((state_val_113654 === (7))){
var state_113653__$1 = state_113653;
var statearr_113655_114128 = state_113653__$1;
(statearr_113655_114128[(2)] = null);

(statearr_113655_114128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (20))){
var inst_113618 = (state_113653[(7)]);
var inst_113621 = (state_113653[(8)]);
var inst_113641 = cljs.core.clj__GT_js(inst_113618);
var inst_113642 = JSON.stringify(inst_113641);
var inst_113643 = (inst_113621["teg-online.this-user"] = inst_113642);
var state_113653__$1 = state_113653;
var statearr_113656_114129 = state_113653__$1;
(statearr_113656_114129[(2)] = inst_113643);

(statearr_113656_114129[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (1))){
var inst_113572 = (state_113653[(9)]);
var inst_113572__$1 = localStorage;
var inst_113575 = oops.state._STAR_runtime_state_STAR_;
var inst_113576 = (new Error());
var inst_113577 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_113578 = oops.state.prepare_state(inst_113572__$1,inst_113576,inst_113577);
var inst_113579 = (oops.state._STAR_runtime_state_STAR_ = inst_113578);
var state_113653__$1 = (function (){var statearr_113657 = state_113653;
(statearr_113657[(9)] = inst_113572__$1);

(statearr_113657[(10)] = inst_113575);

(statearr_113657[(11)] = inst_113579);

return statearr_113657;
})();
var statearr_113658_114130 = state_113653__$1;
(statearr_113658_114130[(2)] = null);

(statearr_113658_114130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (4))){
var inst_113575 = (state_113653[(10)]);
var _ = (function (){var statearr_113659 = state_113653;
(statearr_113659[(4)] = cljs.core.rest((state_113653[(4)])));

return statearr_113659;
})();
var inst_113581 = (state_113653[(2)]);
var inst_113582 = (oops.state._STAR_runtime_state_STAR_ = inst_113575);
var ___$1 = (function (){var temp__5825__auto__ = (state_113653[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_113653__$1 = (function (){var statearr_113660 = state_113653;
(statearr_113660[(12)] = inst_113582);

return statearr_113660;
})();
var statearr_113661_114131 = state_113653__$1;
(statearr_113661_114131[(2)] = inst_113581);

(statearr_113661_114131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (15))){
var inst_113621 = (state_113653[(8)]);
var inst_113612 = (state_113653[(2)]);
var inst_113613 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_113614 = cljs.core.random_uuid();
var inst_113615 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_113614));
var inst_113616 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_113615);
var inst_113617 = [inst_113616,inst_113612];
var inst_113618 = cljs.core.PersistentHashMap.fromArrays(inst_113613,inst_113617);
var inst_113621__$1 = localStorage;
var inst_113624 = oops.state._STAR_runtime_state_STAR_;
var inst_113625 = (new Error());
var inst_113626 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_113627 = oops.state.prepare_state(inst_113621__$1,inst_113625,inst_113626);
var inst_113628 = (oops.state._STAR_runtime_state_STAR_ = inst_113627);
var state_113653__$1 = (function (){var statearr_113662 = state_113653;
(statearr_113662[(7)] = inst_113618);

(statearr_113662[(8)] = inst_113621__$1);

(statearr_113662[(13)] = inst_113624);

(statearr_113662[(14)] = inst_113628);

return statearr_113662;
})();
var statearr_113663_114132 = state_113653__$1;
(statearr_113663_114132[(2)] = null);

(statearr_113663_114132[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (21))){
var state_113653__$1 = state_113653;
var statearr_113664_114133 = state_113653__$1;
(statearr_113664_114133[(2)] = null);

(statearr_113664_114133[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (13))){
var inst_113610 = teg_online.main.ask_user_name();
var state_113653__$1 = state_113653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_113653__$1,(15),inst_113610);
} else {
if((state_val_113654 === (22))){
var inst_113621 = (state_113653[(8)]);
var inst_113646 = (state_113653[(2)]);
var _ = (function (){var statearr_113665 = state_113653;
(statearr_113665[(4)] = cljs.core.rest((state_113653[(4)])));

return statearr_113665;
})();
var state_113653__$1 = (function (){var statearr_113666 = state_113653;
(statearr_113666[(15)] = inst_113646);

return statearr_113666;
})();
var statearr_113667_114134 = state_113653__$1;
(statearr_113667_114134[(2)] = inst_113621);

(statearr_113667_114134[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (6))){
var inst_113572 = (state_113653[(9)]);
var inst_113592 = (inst_113572["teg-online.this-user"]);
var state_113653__$1 = state_113653;
var statearr_113668_114135 = state_113653__$1;
(statearr_113668_114135[(2)] = inst_113592);

(statearr_113668_114135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (17))){
var inst_113618 = (state_113653[(7)]);
var inst_113649 = (state_113653[(2)]);
var state_113653__$1 = (function (){var statearr_113669 = state_113653;
(statearr_113669[(16)] = inst_113649);

return statearr_113669;
})();
var statearr_113670_114136 = state_113653__$1;
(statearr_113670_114136[(2)] = inst_113618);

(statearr_113670_114136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (3))){
var inst_113604 = (state_113653[(17)]);
var inst_113604__$1 = (state_113653[(2)]);
var state_113653__$1 = (function (){var statearr_113671 = state_113653;
(statearr_113671[(17)] = inst_113604__$1);

return statearr_113671;
})();
if(cljs.core.truth_(inst_113604__$1)){
var statearr_113672_114137 = state_113653__$1;
(statearr_113672_114137[(1)] = (12));

} else {
var statearr_113673_114138 = state_113653__$1;
(statearr_113673_114138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (12))){
var inst_113604 = (state_113653[(17)]);
var inst_113606 = JSON.parse(inst_113604);
var inst_113607 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_113606,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_113608 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_113607,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword);
var state_113653__$1 = state_113653;
var statearr_113675_114139 = state_113653__$1;
(statearr_113675_114139[(2)] = inst_113608);

(statearr_113675_114139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (2))){
var inst_113572 = (state_113653[(9)]);
var _ = (function (){var statearr_113676 = state_113653;
(statearr_113676[(4)] = cljs.core.cons((4),(state_113653[(4)])));

return statearr_113676;
})();
var ___$1 = (function (){var statearr_113677 = state_113653;
(statearr_113677[(4)] = cljs.core.cons((5),(state_113653[(4)])));

return statearr_113677;
})();
var inst_113590 = oops.core.validate_object_access_dynamically(inst_113572,(1),"teg-online.this-user",true,true,false);
var state_113653__$1 = state_113653;
if(inst_113590){
var statearr_113678_114140 = state_113653__$1;
(statearr_113678_114140[(1)] = (6));

} else {
var statearr_113679_114141 = state_113653__$1;
(statearr_113679_114141[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (19))){
var _ = (function (){var statearr_113680 = state_113653;
(statearr_113680[(4)] = cljs.core.rest((state_113653[(4)])));

return statearr_113680;
})();
var state_113653__$1 = state_113653;
var ex113674 = (state_113653__$1[(2)]);
var statearr_113681_114142 = state_113653__$1;
(statearr_113681_114142[(5)] = ex113674);


throw ex113674;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (11))){
var inst_113601 = (state_113653[(2)]);
var _ = (function (){var statearr_113683 = state_113653;
(statearr_113683[(4)] = cljs.core.rest((state_113653[(4)])));

return statearr_113683;
})();
var state_113653__$1 = state_113653;
var statearr_113684_114143 = state_113653__$1;
(statearr_113684_114143[(2)] = inst_113601);

(statearr_113684_114143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (9))){
var inst_113595 = (state_113653[(18)]);
var state_113653__$1 = state_113653;
var statearr_113685_114144 = state_113653__$1;
(statearr_113685_114144[(2)] = inst_113595);

(statearr_113685_114144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (5))){
var _ = (function (){var statearr_113686 = state_113653;
(statearr_113686[(4)] = cljs.core.rest((state_113653[(4)])));

return statearr_113686;
})();
var state_113653__$1 = state_113653;
var ex113682 = (state_113653__$1[(2)]);
var statearr_113687_114145 = state_113653__$1;
(statearr_113687_114145[(5)] = ex113682);


throw ex113682;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (14))){
var inst_113651 = (state_113653[(2)]);
var state_113653__$1 = state_113653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_113653__$1,inst_113651);
} else {
if((state_val_113654 === (16))){
var inst_113621 = (state_113653[(8)]);
var _ = (function (){var statearr_113688 = state_113653;
(statearr_113688[(4)] = cljs.core.cons((18),(state_113653[(4)])));

return statearr_113688;
})();
var ___$1 = (function (){var statearr_113689 = state_113653;
(statearr_113689[(4)] = cljs.core.cons((19),(state_113653[(4)])));

return statearr_113689;
})();
var inst_113639 = oops.core.validate_object_access_dynamically(inst_113621,(2),"teg-online.this-user",true,true,true);
var state_113653__$1 = state_113653;
if(inst_113639){
var statearr_113690_114146 = state_113653__$1;
(statearr_113690_114146[(1)] = (20));

} else {
var statearr_113691_114147 = state_113653__$1;
(statearr_113691_114147[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (10))){
var state_113653__$1 = state_113653;
var statearr_113692_114148 = state_113653__$1;
(statearr_113692_114148[(2)] = null);

(statearr_113692_114148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (18))){
var inst_113624 = (state_113653[(13)]);
var _ = (function (){var statearr_113693 = state_113653;
(statearr_113693[(4)] = cljs.core.rest((state_113653[(4)])));

return statearr_113693;
})();
var inst_113630 = (state_113653[(2)]);
var inst_113631 = (oops.state._STAR_runtime_state_STAR_ = inst_113624);
var ___$1 = (function (){var temp__5825__auto__ = (state_113653[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_113653__$1 = (function (){var statearr_113694 = state_113653;
(statearr_113694[(19)] = inst_113631);

return statearr_113694;
})();
var statearr_113695_114149 = state_113653__$1;
(statearr_113695_114149[(2)] = inst_113630);

(statearr_113695_114149[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113654 === (8))){
var inst_113595 = (state_113653[(18)]);
var inst_113595__$1 = (state_113653[(2)]);
var inst_113596 = (inst_113595__$1 == null);
var inst_113597 = cljs.core.not(inst_113596);
var state_113653__$1 = (function (){var statearr_113696 = state_113653;
(statearr_113696[(18)] = inst_113595__$1);

return statearr_113696;
})();
if(inst_113597){
var statearr_113697_114150 = state_113653__$1;
(statearr_113697_114150[(1)] = (9));

} else {
var statearr_113698_114151 = state_113653__$1;
(statearr_113698_114151[(1)] = (10));

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
});
return (function() {
var teg_online$main$get_this_user_$_state_machine__18069__auto__ = null;
var teg_online$main$get_this_user_$_state_machine__18069__auto____0 = (function (){
var statearr_113699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_113699[(0)] = teg_online$main$get_this_user_$_state_machine__18069__auto__);

(statearr_113699[(1)] = (1));

return statearr_113699;
});
var teg_online$main$get_this_user_$_state_machine__18069__auto____1 = (function (state_113653){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_113653);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e113700){var ex__18072__auto__ = e113700;
var statearr_113701_114152 = state_113653;
(statearr_113701_114152[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_113653[(4)]))){
var statearr_113702_114153 = state_113653;
(statearr_113702_114153[(1)] = cljs.core.first((state_113653[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__114154 = state_113653;
state_113653 = G__114154;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$main$get_this_user_$_state_machine__18069__auto__ = function(state_113653){
switch(arguments.length){
case 0:
return teg_online$main$get_this_user_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$main$get_this_user_$_state_machine__18069__auto____1.call(this,state_113653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$main$get_this_user_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$main$get_this_user_$_state_machine__18069__auto____0;
teg_online$main$get_this_user_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$main$get_this_user_$_state_machine__18069__auto____1;
return teg_online$main$get_this_user_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_113703 = f__19294__auto__();
(statearr_113703[(6)] = c__19293__auto__);

return statearr_113703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.main.show_main_menu = (function teg_online$main$show_main_menu(){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_113744){
var state_val_113745 = (state_113744[(1)]);
if((state_val_113745 === (1))){
var inst_113704 = (state_113744[(7)]);
var inst_113704__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var inst_113705 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113706 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data-bs-dismiss","data-bs-dismiss",-572315973)];
var inst_113707 = ["button","modal"];
var inst_113708 = cljs.core.PersistentHashMap.fromArrays(inst_113706,inst_113707);
var inst_113709 = [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-lg","button.btn.btn-primary.btn-lg",613853517),inst_113708,"Crear partida"];
var inst_113710 = (new cljs.core.PersistentVector(null,3,(5),inst_113705,inst_113709,null));
var inst_113711 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_113710], 0));
var inst_113712 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113713 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data-bs-dismiss","data-bs-dismiss",-572315973)];
var inst_113714 = ["button","modal"];
var inst_113715 = cljs.core.PersistentHashMap.fromArrays(inst_113713,inst_113714);
var inst_113716 = [new cljs.core.Keyword(null,"button.btn.btn-secondary.btn-lg","button.btn.btn-secondary.btn-lg",-1973099630),inst_113715,"Entrar a partida existente"];
var inst_113717 = (new cljs.core.PersistentVector(null,3,(5),inst_113712,inst_113716,null));
var inst_113718 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_113717], 0));
var inst_113719 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113721 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_113711];
var inst_113722 = (new cljs.core.PersistentVector(null,2,(5),inst_113720,inst_113721,null));
var inst_113723 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113724 = [new cljs.core.Keyword(null,"div.row.m-1","div.row.m-1",-801341908)];
var inst_113725 = (new cljs.core.PersistentVector(null,1,(5),inst_113723,inst_113724,null));
var inst_113726 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113727 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_113718];
var inst_113728 = (new cljs.core.PersistentVector(null,2,(5),inst_113726,inst_113727,null));
var inst_113729 = [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),inst_113722,inst_113725,inst_113728];
var inst_113730 = (new cljs.core.PersistentVector(null,4,(5),inst_113719,inst_113729,null));
var inst_113731 = teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),inst_113730], 0));
var inst_113732 = (function (){var action = inst_113704__$1;
var new_game_btn = inst_113711;
var join_game_btn = inst_113718;
var modal = inst_113731;
return (function (){
return cljs.core.reset_BANG_(action,new cljs.core.Keyword(null,"new-game","new-game",167241648));
});
})();
var inst_113733 = teg_online.utils.bootstrap.on_click(inst_113711,inst_113732);
var inst_113734 = (function (){var action = inst_113704__$1;
var new_game_btn = inst_113711;
var join_game_btn = inst_113718;
var modal = inst_113731;
return (function (){
return cljs.core.reset_BANG_(action,new cljs.core.Keyword(null,"join-game","join-game",1384817180));
});
})();
var inst_113735 = teg_online.utils.bootstrap.on_click(inst_113718,inst_113734);
var inst_113736 = [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087)];
var inst_113737 = ["static",false];
var inst_113738 = cljs.core.PersistentHashMap.fromArrays(inst_113736,inst_113737);
var inst_113739 = teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$2(inst_113731,inst_113738);
var state_113744__$1 = (function (){var statearr_113746 = state_113744;
(statearr_113746[(7)] = inst_113704__$1);

(statearr_113746[(8)] = inst_113733);

(statearr_113746[(9)] = inst_113735);

return statearr_113746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_113744__$1,(2),inst_113739);
} else {
if((state_val_113745 === (2))){
var inst_113704 = (state_113744[(7)]);
var inst_113741 = (state_113744[(2)]);
var inst_113742 = cljs.core.deref(inst_113704);
var state_113744__$1 = (function (){var statearr_113747 = state_113744;
(statearr_113747[(10)] = inst_113741);

return statearr_113747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_113744__$1,inst_113742);
} else {
return null;
}
}
});
return (function() {
var teg_online$main$show_main_menu_$_state_machine__18069__auto__ = null;
var teg_online$main$show_main_menu_$_state_machine__18069__auto____0 = (function (){
var statearr_113748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_113748[(0)] = teg_online$main$show_main_menu_$_state_machine__18069__auto__);

(statearr_113748[(1)] = (1));

return statearr_113748;
});
var teg_online$main$show_main_menu_$_state_machine__18069__auto____1 = (function (state_113744){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_113744);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e113749){var ex__18072__auto__ = e113749;
var statearr_113750_114155 = state_113744;
(statearr_113750_114155[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_113744[(4)]))){
var statearr_113751_114156 = state_113744;
(statearr_113751_114156[(1)] = cljs.core.first((state_113744[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__114157 = state_113744;
state_113744 = G__114157;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$main$show_main_menu_$_state_machine__18069__auto__ = function(state_113744){
switch(arguments.length){
case 0:
return teg_online$main$show_main_menu_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$main$show_main_menu_$_state_machine__18069__auto____1.call(this,state_113744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$main$show_main_menu_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$main$show_main_menu_$_state_machine__18069__auto____0;
teg_online$main$show_main_menu_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$main$show_main_menu_$_state_machine__18069__auto____1;
return teg_online$main$show_main_menu_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_113752 = f__19294__auto__();
(statearr_113752[(6)] = c__19293__auto__);

return statearr_113752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.main.try_to_join = (function teg_online$main$try_to_join(state){
var map__113753 = cljs.core.deref(state);
var map__113753__$1 = cljs.core.__destructure_map(map__113753);
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113753__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113753__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var map__113754 = user;
var map__113754__$1 = cljs.core.__destructure_map(map__113754);
var user_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113754__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var user_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113754__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.contains_QMARK_((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"players","players",-1361554569)) : game.call(null,new cljs.core.Keyword(null,"players","players",-1361554569))),user_id)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"game","game",-441523833),teg_online.game.join_game,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user_id,user_name], 0));
}
});
teg_online.main.show_waiting_dialog = (function teg_online$main$show_waiting_dialog(state){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_113871){
var state_val_113872 = (state_113871[(1)]);
if((state_val_113872 === (7))){
var state_113871__$1 = state_113871;
var statearr_113873_114158 = state_113871__$1;
(statearr_113873_114158[(2)] = null);

(statearr_113873_114158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113872 === (1))){
var inst_113757 = (state_113871[(7)]);
var inst_113758 = (state_113871[(8)]);
var inst_113759 = (state_113871[(9)]);
var inst_113791 = (state_113871[(10)]);
var inst_113756 = cljs.core.deref(state);
var inst_113757__$1 = cljs.core.__destructure_map(inst_113756);
var inst_113758__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_113757__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var inst_113759__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_113757__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var inst_113760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_113757__$1,new cljs.core.Keyword(null,"game-id","game-id",385578016));
var inst_113761 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_113758__$1);
var inst_113762 = teg_online.game.get_players(inst_113759__$1);
var inst_113763 = cljs.core.first(inst_113762);
var inst_113764 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_113763);
var inst_113765 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_113761,inst_113764);
var inst_113766 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113767 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data-bs-dismiss","data-bs-dismiss",-572315973)];
var inst_113768 = ["button","modal"];
var inst_113769 = cljs.core.PersistentHashMap.fromArrays(inst_113767,inst_113768);
var inst_113770 = [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-lg","button.btn.btn-primary.btn-lg",613853517),inst_113769,"Iniciar partida"];
var inst_113771 = (new cljs.core.PersistentVector(null,3,(5),inst_113766,inst_113770,null));
var inst_113772 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_113771], 0));
var inst_113773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113774 = [new cljs.core.Keyword(null,"ol.list-group","ol.list-group",-1141276931)];
var inst_113775 = (new cljs.core.PersistentVector(null,1,(5),inst_113773,inst_113774,null));
var inst_113776 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_113775], 0));
var inst_113777 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113778 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113779 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113780 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113781 = [new cljs.core.Keyword(null,"span","span",1394872991),"C\u00F3digo de la partida: "];
var inst_113782 = (new cljs.core.PersistentVector(null,2,(5),inst_113780,inst_113781,null));
var inst_113783 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113784 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_113785 = ["user-select: all;"];
var inst_113786 = cljs.core.PersistentHashMap.fromArrays(inst_113784,inst_113785);
var inst_113787 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113788 = [new cljs.core.Keyword(null,"href","href",-793805698)];
var inst_113791__$1 = location;
var inst_113794 = oops.state._STAR_runtime_state_STAR_;
var inst_113795 = (new Error());
var inst_113796 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_113797 = oops.state.prepare_state(inst_113791__$1,inst_113795,inst_113796);
var inst_113798 = (oops.state._STAR_runtime_state_STAR_ = inst_113797);
var state_113871__$1 = (function (){var statearr_113874 = state_113871;
(statearr_113874[(7)] = inst_113757__$1);

(statearr_113874[(8)] = inst_113758__$1);

(statearr_113874[(9)] = inst_113759__$1);

(statearr_113874[(11)] = inst_113760);

(statearr_113874[(12)] = inst_113765);

(statearr_113874[(13)] = inst_113772);

(statearr_113874[(14)] = inst_113776);

(statearr_113874[(15)] = inst_113777);

(statearr_113874[(16)] = inst_113778);

(statearr_113874[(17)] = inst_113779);

(statearr_113874[(18)] = inst_113782);

(statearr_113874[(19)] = inst_113783);

(statearr_113874[(20)] = inst_113786);

(statearr_113874[(21)] = inst_113787);

(statearr_113874[(22)] = inst_113788);

(statearr_113874[(10)] = inst_113791__$1);

(statearr_113874[(23)] = inst_113794);

(statearr_113874[(24)] = inst_113798);

return statearr_113874;
})();
var statearr_113875_114159 = state_113871__$1;
(statearr_113875_114159[(2)] = null);

(statearr_113875_114159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113872 === (4))){
var inst_113794 = (state_113871[(23)]);
var _ = (function (){var statearr_113876 = state_113871;
(statearr_113876[(4)] = cljs.core.rest((state_113871[(4)])));

return statearr_113876;
})();
var inst_113800 = (state_113871[(2)]);
var inst_113801 = (oops.state._STAR_runtime_state_STAR_ = inst_113794);
var ___$1 = (function (){var temp__5825__auto__ = (state_113871[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__17301__auto__ = temp__5825__auto__;
throw e__17301__auto__;
} else {
return null;
}
})();
var state_113871__$1 = (function (){var statearr_113877 = state_113871;
(statearr_113877[(25)] = inst_113801);

return statearr_113877;
})();
var statearr_113878_114160 = state_113871__$1;
(statearr_113878_114160[(2)] = inst_113800);

(statearr_113878_114160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113872 === (6))){
var inst_113791 = (state_113871[(10)]);
var inst_113811 = (inst_113791["href"]);
var state_113871__$1 = state_113871;
var statearr_113879_114161 = state_113871__$1;
(statearr_113879_114161[(2)] = inst_113811);

(statearr_113879_114161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113872 === (3))){
var inst_113788 = (state_113871[(22)]);
var inst_113760 = (state_113871[(11)]);
var inst_113787 = (state_113871[(21)]);
var inst_113786 = (state_113871[(20)]);
var inst_113783 = (state_113871[(19)]);
var inst_113782 = (state_113871[(18)]);
var inst_113779 = (state_113871[(17)]);
var inst_113778 = (state_113871[(16)]);
var inst_113776 = (state_113871[(14)]);
var inst_113765 = (state_113871[(12)]);
var inst_113817 = (state_113871[(2)]);
var inst_113818 = [inst_113817];
var inst_113819 = cljs.core.PersistentHashMap.fromArrays(inst_113788,inst_113818);
var inst_113820 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_113760));
var inst_113821 = [new cljs.core.Keyword(null,"a","a",-2123407586),inst_113819,inst_113820];
var inst_113822 = (new cljs.core.PersistentVector(null,3,(5),inst_113787,inst_113821,null));
var inst_113823 = [new cljs.core.Keyword(null,"span.fw-bolder.text-nowrap","span.fw-bolder.text-nowrap",1838451643),inst_113786,inst_113822];
var inst_113824 = (new cljs.core.PersistentVector(null,3,(5),inst_113783,inst_113823,null));
var inst_113825 = [new cljs.core.Keyword(null,"h2","h2",-372662728),inst_113782,inst_113824];
var inst_113826 = (new cljs.core.PersistentVector(null,3,(5),inst_113779,inst_113825,null));
var inst_113827 = [new cljs.core.Keyword(null,"div.row.text-center","div.row.text-center",-1851285567),inst_113826];
var inst_113828 = (new cljs.core.PersistentVector(null,2,(5),inst_113778,inst_113827,null));
var inst_113829 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113830 = [new cljs.core.Keyword(null,"div.row.m-2","div.row.m-2",-260950428)];
var inst_113831 = (new cljs.core.PersistentVector(null,1,(5),inst_113829,inst_113830,null));
var inst_113832 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113833 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113834 = [new cljs.core.Keyword(null,"h3","h3",2067611163),"Esperando jugadores..."];
var inst_113835 = (new cljs.core.PersistentVector(null,2,(5),inst_113833,inst_113834,null));
var inst_113836 = [new cljs.core.Keyword(null,"div.row.text-center","div.row.text-center",-1851285567),inst_113835];
var inst_113837 = (new cljs.core.PersistentVector(null,2,(5),inst_113832,inst_113836,null));
var inst_113838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113839 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113840 = [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),inst_113776];
var inst_113841 = (new cljs.core.PersistentVector(null,2,(5),inst_113839,inst_113840,null));
var inst_113842 = [new cljs.core.Keyword(null,"div.row.fs-3","div.row.fs-3",1049916721),inst_113841];
var inst_113843 = (new cljs.core.PersistentVector(null,2,(5),inst_113838,inst_113842,null));
var state_113871__$1 = (function (){var statearr_113880 = state_113871;
(statearr_113880[(26)] = inst_113828);

(statearr_113880[(27)] = inst_113831);

(statearr_113880[(28)] = inst_113837);

(statearr_113880[(29)] = inst_113843);

return statearr_113880;
})();
if(cljs.core.truth_(inst_113765)){
var statearr_113881_114162 = state_113871__$1;
(statearr_113881_114162[(1)] = (9));

} else {
var statearr_113882_114163 = state_113871__$1;
(statearr_113882_114163[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113872 === (12))){
var inst_113868 = (state_113871[(2)]);
var inst_113869 = cljs.core.remove_watch(state,new cljs.core.Keyword("teg-online.main","waiting-for-players","teg-online.main/waiting-for-players",-1692030004));
var state_113871__$1 = (function (){var statearr_113883 = state_113871;
(statearr_113883[(30)] = inst_113868);

return statearr_113883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_113871__$1,inst_113869);
} else {
if((state_val_113872 === (2))){
var inst_113791 = (state_113871[(10)]);
var _ = (function (){var statearr_113884 = state_113871;
(statearr_113884[(4)] = cljs.core.cons((4),(state_113871[(4)])));

return statearr_113884;
})();
var ___$1 = (function (){var statearr_113885 = state_113871;
(statearr_113885[(4)] = cljs.core.cons((5),(state_113871[(4)])));

return statearr_113885;
})();
var inst_113809 = oops.core.validate_object_access_dynamically(inst_113791,(0),"href",true,true,false);
var state_113871__$1 = state_113871;
if(inst_113809){
var statearr_113886_114164 = state_113871__$1;
(statearr_113886_114164[(1)] = (6));

} else {
var statearr_113887_114165 = state_113871__$1;
(statearr_113887_114165[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113872 === (11))){
var inst_113828 = (state_113871[(26)]);
var inst_113831 = (state_113871[(27)]);
var inst_113837 = (state_113871[(28)]);
var inst_113843 = (state_113871[(29)]);
var inst_113777 = (state_113871[(15)]);
var inst_113757 = (state_113871[(7)]);
var inst_113758 = (state_113871[(8)]);
var inst_113759 = (state_113871[(9)]);
var inst_113760 = (state_113871[(11)]);
var inst_113765 = (state_113871[(12)]);
var inst_113772 = (state_113871[(13)]);
var inst_113776 = (state_113871[(14)]);
var inst_113850 = (state_113871[(2)]);
var inst_113851 = [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),inst_113828,inst_113831,inst_113837,inst_113843,inst_113850];
var inst_113852 = (new cljs.core.PersistentVector(null,6,(5),inst_113777,inst_113851,null));
var inst_113853 = teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),inst_113852], 0));
var inst_113854 = (function (){var map__113755 = inst_113757;
var user = inst_113758;
var game = inst_113759;
var game_id = inst_113760;
var host_QMARK_ = inst_113765;
var start_game_btn = inst_113772;
var player_list = inst_113776;
var modal = inst_113853;
return (function (game__$1){
var target_obj_113889_114166 = start_game_btn;
var _STAR_runtime_state_STAR__orig_val__113891_114167 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__113892_114168 = oops.state.prepare_state(target_obj_113889_114166,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__113892_114168);

try{var parent_obj_113890_114169 = target_obj_113889_114166;
if(oops.core.validate_object_access_dynamically(parent_obj_113890_114169,(0),"disabled",true,true,true)){
(parent_obj_113890_114169["disabled"] = (cljs.core.count((game__$1.cljs$core$IFn$_invoke$arity$1 ? game__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"players","players",-1361554569)) : game__$1.call(null,new cljs.core.Keyword(null,"players","players",-1361554569)))) <= (1)));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__113891_114167);
}
var target_obj_113893_114170 = player_list;
var _STAR_runtime_state_STAR__orig_val__113895_114171 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__113896_114172 = oops.state.prepare_state(target_obj_113893_114170,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__113896_114172);

try{var parent_obj_113894_114173 = target_obj_113893_114170;
if(oops.core.validate_object_access_dynamically(parent_obj_113894_114173,(0),"innerHTML",true,true,true)){
(parent_obj_113894_114173["innerHTML"] = "");
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__113895_114171);
}
var seq__113897_114174 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,teg_online.game.get_players(game__$1)));
var chunk__113898_114175 = null;
var count__113899_114176 = (0);
var i__113900_114177 = (0);
while(true){
if((i__113900_114177 < count__113899_114176)){
var vec__113909_114178 = chunk__113898_114175.cljs$core$IIndexed$_nth$arity$2(null,i__113900_114177);
var idx_114179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113909_114178,(0),null);
var map__113912_114180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113909_114178,(1),null);
var map__113912_114181__$1 = cljs.core.__destructure_map(map__113912_114180);
var name_114182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113912_114181__$1,new cljs.core.Keyword(null,"name","name",1843675177));
player_list.appendChild(crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),(idx_114179 + (1)),". ",name_114182], null)], 0)));


var G__114183 = seq__113897_114174;
var G__114184 = chunk__113898_114175;
var G__114185 = count__113899_114176;
var G__114186 = (i__113900_114177 + (1));
seq__113897_114174 = G__114183;
chunk__113898_114175 = G__114184;
count__113899_114176 = G__114185;
i__113900_114177 = G__114186;
continue;
} else {
var temp__5825__auto___114187 = cljs.core.seq(seq__113897_114174);
if(temp__5825__auto___114187){
var seq__113897_114188__$1 = temp__5825__auto___114187;
if(cljs.core.chunked_seq_QMARK_(seq__113897_114188__$1)){
var c__5694__auto___114189 = cljs.core.chunk_first(seq__113897_114188__$1);
var G__114190 = cljs.core.chunk_rest(seq__113897_114188__$1);
var G__114191 = c__5694__auto___114189;
var G__114192 = cljs.core.count(c__5694__auto___114189);
var G__114193 = (0);
seq__113897_114174 = G__114190;
chunk__113898_114175 = G__114191;
count__113899_114176 = G__114192;
i__113900_114177 = G__114193;
continue;
} else {
var vec__113913_114194 = cljs.core.first(seq__113897_114188__$1);
var idx_114195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113913_114194,(0),null);
var map__113916_114196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113913_114194,(1),null);
var map__113916_114197__$1 = cljs.core.__destructure_map(map__113916_114196);
var name_114198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113916_114197__$1,new cljs.core.Keyword(null,"name","name",1843675177));
player_list.appendChild(crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),(idx_114195 + (1)),". ",name_114198], null)], 0)));


var G__114199 = cljs.core.next(seq__113897_114188__$1);
var G__114200 = null;
var G__114201 = (0);
var G__114202 = (0);
seq__113897_114174 = G__114199;
chunk__113898_114175 = G__114200;
count__113899_114176 = G__114201;
i__113900_114177 = G__114202;
continue;
}
} else {
}
}
break;
}

if(teg_online.game.game_started_QMARK_(game__$1)){
return teg_online.utils.bootstrap.hide_modal(modal);
} else {
return null;
}
});
})();
var inst_113856 = (function (){var host_QMARK_ = inst_113765;
var user = inst_113758;
var game_id = inst_113760;
var start_game_btn = inst_113772;
var game = inst_113759;
var player_list = inst_113776;
var map__113755 = inst_113757;
var modal = inst_113853;
var update_modal = inst_113854;
return (function (_,___$1,___$2,p__113855){
var map__113917 = p__113855;
var map__113917__$1 = cljs.core.__destructure_map(map__113917);
var game__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113917__$1,new cljs.core.Keyword(null,"game","game",-441523833));
update_modal(game__$1);

return teg_online.main.try_to_join(state);
});
})();
var inst_113857 = cljs.core.add_watch(state,new cljs.core.Keyword("teg-online.main","waiting-for-players","teg-online.main/waiting-for-players",-1692030004),inst_113856);
var inst_113858 = cljs.core.deref(state);
var inst_113859 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_113858);
var inst_113860 = inst_113854(inst_113859);
var inst_113861 = (function (){var host_QMARK_ = inst_113765;
var user = inst_113758;
var game_id = inst_113760;
var start_game_btn = inst_113772;
var game = inst_113759;
var player_list = inst_113776;
var map__113755 = inst_113757;
var modal = inst_113853;
var update_modal = inst_113854;
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(teg_online.game.start_game,teg_online.game.distribute_goals,teg_online.game.distribute_countries));
});
})();
var inst_113862 = teg_online.utils.bootstrap.on_click(inst_113772,inst_113861);
var inst_113863 = [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087)];
var inst_113864 = ["static",false];
var inst_113865 = cljs.core.PersistentHashMap.fromArrays(inst_113863,inst_113864);
var inst_113866 = teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$2(inst_113853,inst_113865);
var state_113871__$1 = (function (){var statearr_113918 = state_113871;
(statearr_113918[(31)] = inst_113857);

(statearr_113918[(32)] = inst_113860);

(statearr_113918[(33)] = inst_113862);

return statearr_113918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_113871__$1,(12),inst_113866);
} else {
if((state_val_113872 === (9))){
var inst_113772 = (state_113871[(13)]);
var inst_113845 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113846 = [new cljs.core.Keyword(null,"div.row.mt-3","div.row.mt-3",1951320261),inst_113772];
var inst_113847 = (new cljs.core.PersistentVector(null,2,(5),inst_113845,inst_113846,null));
var state_113871__$1 = state_113871;
var statearr_113919_114203 = state_113871__$1;
(statearr_113919_114203[(2)] = inst_113847);

(statearr_113919_114203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113872 === (5))){
var _ = (function (){var statearr_113920 = state_113871;
(statearr_113920[(4)] = cljs.core.rest((state_113871[(4)])));

return statearr_113920;
})();
var state_113871__$1 = state_113871;
var ex113888 = (state_113871__$1[(2)]);
var statearr_113921_114204 = state_113871__$1;
(statearr_113921_114204[(5)] = ex113888);


throw ex113888;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113872 === (10))){
var state_113871__$1 = state_113871;
var statearr_113922_114205 = state_113871__$1;
(statearr_113922_114205[(2)] = null);

(statearr_113922_114205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_113872 === (8))){
var inst_113814 = (state_113871[(2)]);
var _ = (function (){var statearr_113923 = state_113871;
(statearr_113923[(4)] = cljs.core.rest((state_113871[(4)])));

return statearr_113923;
})();
var state_113871__$1 = state_113871;
var statearr_113924_114206 = state_113871__$1;
(statearr_113924_114206[(2)] = inst_113814);

(statearr_113924_114206[(1)] = (4));


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
var teg_online$main$show_waiting_dialog_$_state_machine__18069__auto__ = null;
var teg_online$main$show_waiting_dialog_$_state_machine__18069__auto____0 = (function (){
var statearr_113925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_113925[(0)] = teg_online$main$show_waiting_dialog_$_state_machine__18069__auto__);

(statearr_113925[(1)] = (1));

return statearr_113925;
});
var teg_online$main$show_waiting_dialog_$_state_machine__18069__auto____1 = (function (state_113871){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_113871);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e113926){var ex__18072__auto__ = e113926;
var statearr_113927_114207 = state_113871;
(statearr_113927_114207[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_113871[(4)]))){
var statearr_113928_114208 = state_113871;
(statearr_113928_114208[(1)] = cljs.core.first((state_113871[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__114209 = state_113871;
state_113871 = G__114209;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$main$show_waiting_dialog_$_state_machine__18069__auto__ = function(state_113871){
switch(arguments.length){
case 0:
return teg_online$main$show_waiting_dialog_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$main$show_waiting_dialog_$_state_machine__18069__auto____1.call(this,state_113871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$main$show_waiting_dialog_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$main$show_waiting_dialog_$_state_machine__18069__auto____0;
teg_online$main$show_waiting_dialog_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$main$show_waiting_dialog_$_state_machine__18069__auto____1;
return teg_online$main$show_waiting_dialog_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_113929 = f__19294__auto__();
(statearr_113929[(6)] = c__19293__auto__);

return statearr_113929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.main.show_new_game_dialog = (function teg_online$main$show_new_game_dialog(){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_114018){
var state_val_114019 = (state_114018[(1)]);
if((state_val_114019 === (1))){
var inst_113931 = (state_114018[(7)]);
var inst_113986 = (state_114018[(8)]);
var inst_113987 = (state_114018[(9)]);
var inst_113991 = (state_114018[(10)]);
var inst_113930 = (function (){return (function (form){
var regex = /elements\[(\d+)\]\[(\w+)\]/;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__114020){
var vec__114021 = p__114020;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114021,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114021,(1),null);
var vec__114024 = cljs.core.re_matches(regex,key);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114024,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114024,(1),null);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114024,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),(index | 0),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key__$1),new cljs.core.Keyword(null,"value","value",305978217),val], null);
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Object.fromEntries((new FormData(form)))));
});
})();
var inst_113931__$1 = (function (){var get_form_data = inst_113930;
return (function (form){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__114027){
var map__114028 = p__114027;
var map__114028__$1 = cljs.core.__destructure_map(map__114028);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114028__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114028__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type)], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__114029){
var vec__114030 = p__114029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114030,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114030,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__114033){
var map__114034 = p__114033;
var map__114034__$1 = cljs.core.__destructure_map(map__114034);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114034__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114034__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
}),values))], 0));
}),cljs.core.group_by(new cljs.core.Keyword(null,"index","index",-1531685915),get_form_data(form))));
});
})();
var inst_113932 = (function (){var get_form_data = inst_113930;
var get_players = inst_113931__$1;
return (function (idx){
var input = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg.text-center","input.form-control.form-control-lg.text-center",-627983263),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),(""+"elements["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+"][name]"),new cljs.core.Keyword(null,"value","value",305978217),(""+"Jugador "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1)))),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null)], 0));
var row = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),input], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-center","td.text-center",-860992628),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-select.form-select-lg.text-center","select.form-select.form-select-lg.text-center",-1875676822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"elements["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+"][type]")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"human"], null),"human"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__114035){
var map__114036 = p__114035;
var map__114036__$1 = cljs.core.__destructure_map(map__114036);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114036__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114036__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subs.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),(1))], null),display_name], null);
}),teg_online.ai.models.models),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"debug"], null),"all (debug)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-center","td.text-center",-860992628),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg.btn-outline-danger","button.btn.btn-lg.btn-outline-danger",-1319743589),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-trash","i.fas.fa-trash",25003308)], null)], null)], null)], null)], 0));
var G__114037_114210 = input;
G__114037_114210.addEventListener("keyup",(function (){
if(cljs.core.truth_(input.checkValidity())){
var target_obj_114038 = input;
var _STAR_runtime_state_STAR__orig_val__114044 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__114045 = oops.state.prepare_state(target_obj_114038,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__114045);

try{var call_info_114040 = (function (){var target_obj_114041 = (function (){var next_obj_114042 = ((oops.core.validate_object_access_dynamically(target_obj_114038,(0),"classList",true,true,false))?(target_obj_114038["classList"]):null);
return next_obj_114042;
})();
return [target_obj_114041,(function (){var next_obj_114043 = ((oops.core.validate_object_access_dynamically(target_obj_114041,(0),"remove",true,true,false))?(target_obj_114041["remove"]):null);
return next_obj_114043;
})()];
})();
var fn_114039 = (call_info_114040[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_114039,oops.state.get_last_access_modifier())){
if((!((fn_114039 == null)))){
return fn_114039.call((call_info_114040[(0)]),"is-invalid");
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__114044);
}} else {
var target_obj_114046 = input;
var _STAR_runtime_state_STAR__orig_val__114052 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__114053 = oops.state.prepare_state(target_obj_114046,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__114053);

try{var call_info_114048 = (function (){var target_obj_114049 = (function (){var next_obj_114050 = ((oops.core.validate_object_access_dynamically(target_obj_114046,(0),"classList",true,true,false))?(target_obj_114046["classList"]):null);
return next_obj_114050;
})();
return [target_obj_114049,(function (){var next_obj_114051 = ((oops.core.validate_object_access_dynamically(target_obj_114049,(0),"add",true,true,false))?(target_obj_114049["add"]):null);
return next_obj_114051;
})()];
})();
var fn_114047 = (call_info_114048[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_114047,oops.state.get_last_access_modifier())){
if((!((fn_114047 == null)))){
return fn_114047.call((call_info_114048[(0)]),"is-invalid");
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__114052);
}}
}));


var G__114054_114211 = row.querySelector("button");
teg_online.utils.bootstrap.on_click(G__114054_114211,(function (){
return row.remove();
}));


return row;
});
})();
var inst_113933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113934 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"aria-label","aria-label",455891514)];
var inst_113935 = ["button","Agregar jugador"];
var inst_113936 = cljs.core.PersistentHashMap.fromArrays(inst_113934,inst_113935);
var inst_113937 = [new cljs.core.Keyword(null,"button.btn.btn-secondary.btn-lg","button.btn.btn-secondary.btn-lg",-1973099630),inst_113936,"Agregar jugador"];
var inst_113938 = (new cljs.core.PersistentVector(null,3,(5),inst_113933,inst_113937,null));
var inst_113939 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_113938], 0));
var inst_113940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113941 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"aria-label","aria-label",455891514)];
var inst_113942 = ["button","Iniciar partida"];
var inst_113943 = cljs.core.PersistentHashMap.fromArrays(inst_113941,inst_113942);
var inst_113944 = [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-lg","button.btn.btn-primary.btn-lg",613853517),inst_113943,"Iniciar partida!"];
var inst_113945 = (new cljs.core.PersistentVector(null,3,(5),inst_113940,inst_113944,null));
var inst_113946 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_113945], 0));
var inst_113947 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113948 = [new cljs.core.Keyword(null,"novalidate","novalidate",-572717086)];
var inst_113949 = [true];
var inst_113950 = cljs.core.PersistentHashMap.fromArrays(inst_113948,inst_113949);
var inst_113951 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113952 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113953 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113954 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113955 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113956 = [new cljs.core.Keyword(null,"th.text-center","th.text-center",738072305),"Nombre"];
var inst_113957 = (new cljs.core.PersistentVector(null,2,(5),inst_113955,inst_113956,null));
var inst_113958 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113959 = [new cljs.core.Keyword(null,"th.text-center","th.text-center",738072305),"Tipo"];
var inst_113960 = (new cljs.core.PersistentVector(null,2,(5),inst_113958,inst_113959,null));
var inst_113961 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113962 = [new cljs.core.Keyword(null,"th.text-center","th.text-center",738072305)];
var inst_113963 = (new cljs.core.PersistentVector(null,1,(5),inst_113961,inst_113962,null));
var inst_113964 = [new cljs.core.Keyword(null,"tr","tr",-1424774646),inst_113957,inst_113960,inst_113963];
var inst_113965 = (new cljs.core.PersistentVector(null,4,(5),inst_113954,inst_113964,null));
var inst_113966 = [new cljs.core.Keyword(null,"thead","thead",-291875296),inst_113965];
var inst_113967 = (new cljs.core.PersistentVector(null,2,(5),inst_113953,inst_113966,null));
var inst_113968 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113969 = [new cljs.core.Keyword(null,"tbody","tbody",-80678300)];
var inst_113970 = (new cljs.core.PersistentVector(null,1,(5),inst_113968,inst_113969,null));
var inst_113971 = [new cljs.core.Keyword(null,"table.table.table-borderless.text-center","table.table.table-borderless.text-center",136004563),inst_113967,inst_113970];
var inst_113972 = (new cljs.core.PersistentVector(null,3,(5),inst_113952,inst_113971,null));
var inst_113973 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_113972];
var inst_113974 = (new cljs.core.PersistentVector(null,2,(5),inst_113951,inst_113973,null));
var inst_113975 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113976 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113977 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_113939];
var inst_113978 = (new cljs.core.PersistentVector(null,2,(5),inst_113976,inst_113977,null));
var inst_113979 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113980 = [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),inst_113946];
var inst_113981 = (new cljs.core.PersistentVector(null,2,(5),inst_113979,inst_113980,null));
var inst_113982 = [new cljs.core.Keyword(null,"div.row.justify-content-center","div.row.justify-content-center",754397026),inst_113978,inst_113981];
var inst_113983 = (new cljs.core.PersistentVector(null,3,(5),inst_113975,inst_113982,null));
var inst_113984 = [new cljs.core.Keyword(null,"form.container.needs-validation","form.container.needs-validation",1378913771),inst_113950,inst_113974,inst_113983];
var inst_113985 = (new cljs.core.PersistentVector(null,4,(5),inst_113947,inst_113984,null));
var inst_113986__$1 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_113985], 0));
var inst_113987__$1 = (function (){var get_form_data = inst_113930;
var get_players = inst_113931__$1;
var make_element_BANG_ = inst_113932;
var add_player_btn = inst_113939;
var start_game_btn = inst_113946;
var form = inst_113986__$1;
return (function (){
var tbody = form.querySelector("tbody");
var idx = tbody.querySelectorAll("tr").length;
var row = make_element_BANG_(idx);
return tbody.appendChild(row);
});
})();
var inst_113988 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_113989 = [new cljs.core.Keyword(null,"div.container-fluid.font-monospace","div.container-fluid.font-monospace",51918908),inst_113986__$1];
var inst_113990 = (new cljs.core.PersistentVector(null,2,(5),inst_113988,inst_113989,null));
var inst_113991__$1 = teg_online.utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),inst_113990], 0));
var inst_113993 = (function (){var form = inst_113986__$1;
var get_form_data = inst_113930;
var start_game_btn = inst_113946;
var G__113992 = inst_113939;
var make_element_BANG_ = inst_113932;
var add_player_BANG_ = inst_113987__$1;
var add_player_btn = inst_113939;
var modal = inst_113991__$1;
var get_players = inst_113931__$1;
return (function (){
var tbody = form.querySelector("tbody");
var indices = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915),get_form_data(form)));
if((cljs.core.count(indices) < (8))){
var idx = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,indices);
var row = make_element_BANG_((cljs.core.truth_(idx)?(idx + (1)):(0)));
return tbody.appendChild(row);
} else {
return null;
}
});
})();
var inst_113994 = teg_online.utils.bootstrap.on_click(inst_113939,inst_113993);
var inst_113996 = (function (){var form = inst_113986__$1;
var get_form_data = inst_113930;
var G__113995 = inst_113946;
var start_game_btn = inst_113946;
var make_element_BANG_ = inst_113932;
var add_player_BANG_ = inst_113987__$1;
var add_player_btn = inst_113939;
var modal = inst_113991__$1;
var get_players = inst_113931__$1;
return (function (){
if(cljs.core.truth_((function (){var and__5160__auto__ = form.checkValidity();
if(cljs.core.truth_(and__5160__auto__)){
return ((((2) <= cljs.core.count(get_players(form)))) && ((cljs.core.count(get_players(form)) <= (8))));
} else {
return and__5160__auto__;
}
})())){
return teg_online.utils.bootstrap.hide_modal(modal);
} else {
return null;
}
});
})();
var inst_113997 = teg_online.utils.bootstrap.on_click(inst_113946,inst_113996);
var inst_113998 = (0);
var state_114018__$1 = (function (){var statearr_114055 = state_114018;
(statearr_114055[(7)] = inst_113931__$1);

(statearr_114055[(8)] = inst_113986__$1);

(statearr_114055[(9)] = inst_113987__$1);

(statearr_114055[(10)] = inst_113991__$1);

(statearr_114055[(11)] = inst_113994);

(statearr_114055[(12)] = inst_113997);

(statearr_114055[(13)] = inst_113998);

return statearr_114055;
})();
var statearr_114056_114212 = state_114018__$1;
(statearr_114056_114212[(2)] = null);

(statearr_114056_114212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_114019 === (2))){
var inst_113998 = (state_114018[(13)]);
var inst_114000 = (inst_113998 < (4));
var state_114018__$1 = state_114018;
if(cljs.core.truth_(inst_114000)){
var statearr_114057_114213 = state_114018__$1;
(statearr_114057_114213[(1)] = (4));

} else {
var statearr_114058_114214 = state_114018__$1;
(statearr_114058_114214[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_114019 === (3))){
var inst_113991 = (state_114018[(10)]);
var inst_114009 = (state_114018[(2)]);
var inst_114010 = [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087)];
var inst_114011 = ["static",false];
var inst_114012 = cljs.core.PersistentHashMap.fromArrays(inst_114010,inst_114011);
var inst_114013 = teg_online.utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$2(inst_113991,inst_114012);
var state_114018__$1 = (function (){var statearr_114059 = state_114018;
(statearr_114059[(14)] = inst_114009);

return statearr_114059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_114018__$1,(7),inst_114013);
} else {
if((state_val_114019 === (4))){
var inst_113987 = (state_114018[(9)]);
var inst_113998 = (state_114018[(13)]);
var inst_114002 = (inst_113987.cljs$core$IFn$_invoke$arity$0 ? inst_113987.cljs$core$IFn$_invoke$arity$0() : inst_113987.call(null));
var inst_114003 = (inst_113998 + (1));
var inst_113998__$1 = inst_114003;
var state_114018__$1 = (function (){var statearr_114060 = state_114018;
(statearr_114060[(15)] = inst_114002);

(statearr_114060[(13)] = inst_113998__$1);

return statearr_114060;
})();
var statearr_114061_114215 = state_114018__$1;
(statearr_114061_114215[(2)] = null);

(statearr_114061_114215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_114019 === (5))){
var state_114018__$1 = state_114018;
var statearr_114062_114216 = state_114018__$1;
(statearr_114062_114216[(2)] = null);

(statearr_114062_114216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_114019 === (6))){
var inst_114007 = (state_114018[(2)]);
var state_114018__$1 = state_114018;
var statearr_114063_114217 = state_114018__$1;
(statearr_114063_114217[(2)] = inst_114007);

(statearr_114063_114217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_114019 === (7))){
var inst_113931 = (state_114018[(7)]);
var inst_113986 = (state_114018[(8)]);
var inst_114015 = (state_114018[(2)]);
var inst_114016 = (inst_113931.cljs$core$IFn$_invoke$arity$1 ? inst_113931.cljs$core$IFn$_invoke$arity$1(inst_113986) : inst_113931.call(null,inst_113986));
var state_114018__$1 = (function (){var statearr_114064 = state_114018;
(statearr_114064[(16)] = inst_114015);

return statearr_114064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_114018__$1,inst_114016);
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
var teg_online$main$show_new_game_dialog_$_state_machine__18069__auto__ = null;
var teg_online$main$show_new_game_dialog_$_state_machine__18069__auto____0 = (function (){
var statearr_114065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_114065[(0)] = teg_online$main$show_new_game_dialog_$_state_machine__18069__auto__);

(statearr_114065[(1)] = (1));

return statearr_114065;
});
var teg_online$main$show_new_game_dialog_$_state_machine__18069__auto____1 = (function (state_114018){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_114018);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e114066){var ex__18072__auto__ = e114066;
var statearr_114067_114218 = state_114018;
(statearr_114067_114218[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_114018[(4)]))){
var statearr_114068_114219 = state_114018;
(statearr_114068_114219[(1)] = cljs.core.first((state_114018[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__114220 = state_114018;
state_114018 = G__114220;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$main$show_new_game_dialog_$_state_machine__18069__auto__ = function(state_114018){
switch(arguments.length){
case 0:
return teg_online$main$show_new_game_dialog_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$main$show_new_game_dialog_$_state_machine__18069__auto____1.call(this,state_114018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$main$show_new_game_dialog_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$main$show_new_game_dialog_$_state_machine__18069__auto____0;
teg_online$main$show_new_game_dialog_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$main$show_new_game_dialog_$_state_machine__18069__auto____1;
return teg_online$main$show_new_game_dialog_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_114069 = f__19294__auto__();
(statearr_114069[(6)] = c__19293__auto__);

return statearr_114069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.main.start_game_BANG_ = (function teg_online$main$start_game_BANG_(state,players){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"game","game",-441523833),(function (game){
return teg_online.game.distribute_countries.cljs$core$IFn$_invoke$arity$1(teg_online.game.distribute_goals(teg_online.game.start_game(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (game__$1,p__114070){
var map__114071 = p__114070;
var map__114071__$1 = cljs.core.__destructure_map(map__114071);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114071__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114071__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return teg_online.game.join_game(game__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()))),name,type);
}),game,players))));
}));
});
teg_online.main.init = (function teg_online$main$init(){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_114080){
var state_val_114081 = (state_114080[(1)]);
if((state_val_114081 === (1))){
var inst_114072 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["HELLO"], 0));
var inst_114073 = teg_online.ui.initialize(teg_online.main.state);
var inst_114074 = teg_online.main.show_new_game_dialog();
var state_114080__$1 = (function (){var statearr_114082 = state_114080;
(statearr_114082[(7)] = inst_114072);

(statearr_114082[(8)] = inst_114073);

return statearr_114082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_114080__$1,(2),inst_114074);
} else {
if((state_val_114081 === (2))){
var inst_114076 = (state_114080[(2)]);
var inst_114077 = teg_online.main.start_game_BANG_(teg_online.main.state,inst_114076);
var inst_114078 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["BYE"], 0));
var state_114080__$1 = (function (){var statearr_114083 = state_114080;
(statearr_114083[(9)] = inst_114077);

return statearr_114083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_114080__$1,inst_114078);
} else {
return null;
}
}
});
return (function() {
var teg_online$main$init_$_state_machine__18069__auto__ = null;
var teg_online$main$init_$_state_machine__18069__auto____0 = (function (){
var statearr_114084 = [null,null,null,null,null,null,null,null,null,null];
(statearr_114084[(0)] = teg_online$main$init_$_state_machine__18069__auto__);

(statearr_114084[(1)] = (1));

return statearr_114084;
});
var teg_online$main$init_$_state_machine__18069__auto____1 = (function (state_114080){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_114080);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e114085){var ex__18072__auto__ = e114085;
var statearr_114086_114221 = state_114080;
(statearr_114086_114221[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_114080[(4)]))){
var statearr_114087_114222 = state_114080;
(statearr_114087_114222[(1)] = cljs.core.first((state_114080[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__114223 = state_114080;
state_114080 = G__114223;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$main$init_$_state_machine__18069__auto__ = function(state_114080){
switch(arguments.length){
case 0:
return teg_online$main$init_$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$main$init_$_state_machine__18069__auto____1.call(this,state_114080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$main$init_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$main$init_$_state_machine__18069__auto____0;
teg_online$main$init_$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$main$init_$_state_machine__18069__auto____1;
return teg_online$main$init_$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_114088 = f__19294__auto__();
(statearr_114088[(6)] = c__19293__auto__);

return statearr_114088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.main.reload_begin_STAR_ = (function teg_online$main$reload_begin_STAR_(done){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_114092){
var state_val_114093 = (state_114092[(1)]);
if((state_val_114093 === (1))){
var inst_114089 = teg_online.firebase.disconnect_BANG_();
var inst_114090 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_114092__$1 = (function (){var statearr_114094 = state_114092;
(statearr_114094[(7)] = inst_114089);

return statearr_114094;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_114092__$1,inst_114090);
} else {
return null;
}
});
return (function() {
var teg_online$main$reload_begin_STAR__$_state_machine__18069__auto__ = null;
var teg_online$main$reload_begin_STAR__$_state_machine__18069__auto____0 = (function (){
var statearr_114095 = [null,null,null,null,null,null,null,null];
(statearr_114095[(0)] = teg_online$main$reload_begin_STAR__$_state_machine__18069__auto__);

(statearr_114095[(1)] = (1));

return statearr_114095;
});
var teg_online$main$reload_begin_STAR__$_state_machine__18069__auto____1 = (function (state_114092){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_114092);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e114096){var ex__18072__auto__ = e114096;
var statearr_114097_114224 = state_114092;
(statearr_114097_114224[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_114092[(4)]))){
var statearr_114098_114225 = state_114092;
(statearr_114098_114225[(1)] = cljs.core.first((state_114092[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__114226 = state_114092;
state_114092 = G__114226;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$main$reload_begin_STAR__$_state_machine__18069__auto__ = function(state_114092){
switch(arguments.length){
case 0:
return teg_online$main$reload_begin_STAR__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$main$reload_begin_STAR__$_state_machine__18069__auto____1.call(this,state_114092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$main$reload_begin_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$main$reload_begin_STAR__$_state_machine__18069__auto____0;
teg_online$main$reload_begin_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$main$reload_begin_STAR__$_state_machine__18069__auto____1;
return teg_online$main$reload_begin_STAR__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_114099 = f__19294__auto__();
(statearr_114099[(6)] = c__19293__auto__);

return statearr_114099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});
teg_online.main.reload_end_STAR_ = (function teg_online$main$reload_end_STAR_(done){
var c__19293__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19294__auto__ = (function (){var switch__18068__auto__ = (function (state_114105){
var state_val_114106 = (state_114105[(1)]);
if((state_val_114106 === (1))){
var inst_114100 = teg_online.ui.initialize(teg_online.main.state);
var state_114105__$1 = state_114105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_114105__$1,(2),inst_114100);
} else {
if((state_val_114106 === (2))){
var inst_114102 = (state_114105[(2)]);
var inst_114103 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_114105__$1 = (function (){var statearr_114107 = state_114105;
(statearr_114107[(7)] = inst_114102);

return statearr_114107;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_114105__$1,inst_114103);
} else {
return null;
}
}
});
return (function() {
var teg_online$main$reload_end_STAR__$_state_machine__18069__auto__ = null;
var teg_online$main$reload_end_STAR__$_state_machine__18069__auto____0 = (function (){
var statearr_114108 = [null,null,null,null,null,null,null,null];
(statearr_114108[(0)] = teg_online$main$reload_end_STAR__$_state_machine__18069__auto__);

(statearr_114108[(1)] = (1));

return statearr_114108;
});
var teg_online$main$reload_end_STAR__$_state_machine__18069__auto____1 = (function (state_114105){
while(true){
var ret_value__18070__auto__ = (function (){try{while(true){
var result__18071__auto__ = switch__18068__auto__(state_114105);
if(cljs.core.keyword_identical_QMARK_(result__18071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18071__auto__;
}
break;
}
}catch (e114109){var ex__18072__auto__ = e114109;
var statearr_114110_114227 = state_114105;
(statearr_114110_114227[(2)] = ex__18072__auto__);


if(cljs.core.seq((state_114105[(4)]))){
var statearr_114111_114228 = state_114105;
(statearr_114111_114228[(1)] = cljs.core.first((state_114105[(4)])));

} else {
throw ex__18072__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__114229 = state_114105;
state_114105 = G__114229;
continue;
} else {
return ret_value__18070__auto__;
}
break;
}
});
teg_online$main$reload_end_STAR__$_state_machine__18069__auto__ = function(state_114105){
switch(arguments.length){
case 0:
return teg_online$main$reload_end_STAR__$_state_machine__18069__auto____0.call(this);
case 1:
return teg_online$main$reload_end_STAR__$_state_machine__18069__auto____1.call(this,state_114105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
teg_online$main$reload_end_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$0 = teg_online$main$reload_end_STAR__$_state_machine__18069__auto____0;
teg_online$main$reload_end_STAR__$_state_machine__18069__auto__.cljs$core$IFn$_invoke$arity$1 = teg_online$main$reload_end_STAR__$_state_machine__18069__auto____1;
return teg_online$main$reload_end_STAR__$_state_machine__18069__auto__;
})()
})();
var state__19295__auto__ = (function (){var statearr_114112 = f__19294__auto__();
(statearr_114112[(6)] = c__19293__auto__);

return statearr_114112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19295__auto__);
}));

return c__19293__auto__;
});

//# sourceMappingURL=teg_online.main.js.map
