goog.provide('teg_online.ai.response');
if((typeof teg_online !== 'undefined') && (typeof teg_online.ai !== 'undefined') && (typeof teg_online.ai.response !== 'undefined') && (typeof teg_online.ai.response.parse_response !== 'undefined')){
} else {
teg_online.ai.response.parse_response = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30534 = cljs.core.get_global_hierarchy;
return (fexpr__30534.cljs$core$IFn$_invoke$arity$0 ? fexpr__30534.cljs$core$IFn$_invoke$arity$0() : fexpr__30534.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("teg-online.ai.response","parse-response"),(function (game,_turn_actions,_response){
return new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
teg_online.ai.response.parse_response.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),(function (game,turn_actions,response){
try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response], 0));

var actions = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("paso",clojure.string.trim(clojure.string.lower_case(response))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teg_online.ai.actions.pass], null):teg_online.ai.actions.ensure_valid(game,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__30545){
var vec__30547 = p__30545;
var country_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30547,(0),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30547,(1),null);
var country_id = teg_online.board.find_country_by_name(country_name);
var units__$1 = cljs.core.parse_long(clojure.string.trim(units));
if(cljs.core.truth_((function (){var and__5160__auto__ = country_id;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.pos_int_QMARK_(units__$1);
} else {
return and__5160__auto__;
}
})())){
return teg_online.ai.actions.add_army.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"country","country",312965309),country_id,new cljs.core.Keyword(null,"units","units",-533089095),units__$1], 0));
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/);
}),clojure.string.split_lines(response)))));
var seq__30556_30714 = cljs.core.seq(actions);
var chunk__30557_30715 = null;
var count__30558_30716 = (0);
var i__30559_30717 = (0);
while(true){
if((i__30559_30717 < count__30558_30716)){
var action_30721 = chunk__30557_30715.cljs$core$IIndexed$_nth$arity$2(null,i__30559_30717);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([action_30721], 0));


var G__30724 = seq__30556_30714;
var G__30725 = chunk__30557_30715;
var G__30726 = count__30558_30716;
var G__30727 = (i__30559_30717 + (1));
seq__30556_30714 = G__30724;
chunk__30557_30715 = G__30725;
count__30558_30716 = G__30726;
i__30559_30717 = G__30727;
continue;
} else {
var temp__5825__auto___30732 = cljs.core.seq(seq__30556_30714);
if(temp__5825__auto___30732){
var seq__30556_30736__$1 = temp__5825__auto___30732;
if(cljs.core.chunked_seq_QMARK_(seq__30556_30736__$1)){
var c__5694__auto___30740 = cljs.core.chunk_first(seq__30556_30736__$1);
var G__30744 = cljs.core.chunk_rest(seq__30556_30736__$1);
var G__30745 = c__5694__auto___30740;
var G__30746 = cljs.core.count(c__5694__auto___30740);
var G__30747 = (0);
seq__30556_30714 = G__30744;
chunk__30557_30715 = G__30745;
count__30558_30716 = G__30746;
i__30559_30717 = G__30747;
continue;
} else {
var action_30749 = cljs.core.first(seq__30556_30736__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([action_30749], 0));


var G__30751 = cljs.core.next(seq__30556_30736__$1);
var G__30752 = null;
var G__30753 = (0);
var G__30754 = (0);
seq__30556_30714 = G__30751;
chunk__30557_30715 = G__30752;
count__30558_30716 = G__30753;
i__30559_30717 = G__30754;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(teg_online.game.get_extra_army(game),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(turn_actions,actions))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(actions,teg_online.ai.actions.pass);
} else {
return actions;
}
}catch (e30543){var error = e30543;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR parsing-response!",error], 0));

return null;
}}));
teg_online.ai.response.parse_response.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630),(function (game,turn_actions,response){
try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response], 0));

var actions = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("paso",clojure.string.trim(clojure.string.lower_case(response))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teg_online.ai.actions.pass], null):teg_online.ai.actions.ensure_valid(game,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__30619){
var vec__30621 = p__30619;
var attacker_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30621,(0),null);
var defender_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30621,(1),null);
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30621,(2),null);
var attacker = teg_online.board.find_country_by_name(attacker_name);
var defender = teg_online.board.find_country_by_name(defender_name);
var move__$1 = cljs.core.parse_long(clojure.string.trim(move));
if(cljs.core.truth_((function (){var and__5160__auto__ = attacker;
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = defender;
if(cljs.core.truth_(and__5160__auto____$1)){
return cljs.core.pos_int_QMARK_(move__$1);
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})())){
return teg_online.ai.actions.attack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attacker","attacker",48869964),attacker,new cljs.core.Keyword(null,"defender","defender",1458963871),defender,new cljs.core.Keyword(null,"move","move",-2110884309),move__$1], 0));
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/);
}),clojure.string.split_lines(response)))));
var seq__30632_30760 = cljs.core.seq(actions);
var chunk__30633_30761 = null;
var count__30634_30762 = (0);
var i__30635_30763 = (0);
while(true){
if((i__30635_30763 < count__30634_30762)){
var action_30764 = chunk__30633_30761.cljs$core$IIndexed$_nth$arity$2(null,i__30635_30763);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([action_30764], 0));


var G__30766 = seq__30632_30760;
var G__30767 = chunk__30633_30761;
var G__30768 = count__30634_30762;
var G__30769 = (i__30635_30763 + (1));
seq__30632_30760 = G__30766;
chunk__30633_30761 = G__30767;
count__30634_30762 = G__30768;
i__30635_30763 = G__30769;
continue;
} else {
var temp__5825__auto___30770 = cljs.core.seq(seq__30632_30760);
if(temp__5825__auto___30770){
var seq__30632_30771__$1 = temp__5825__auto___30770;
if(cljs.core.chunked_seq_QMARK_(seq__30632_30771__$1)){
var c__5694__auto___30772 = cljs.core.chunk_first(seq__30632_30771__$1);
var G__30773 = cljs.core.chunk_rest(seq__30632_30771__$1);
var G__30774 = c__5694__auto___30772;
var G__30775 = cljs.core.count(c__5694__auto___30772);
var G__30776 = (0);
seq__30632_30760 = G__30773;
chunk__30633_30761 = G__30774;
count__30634_30762 = G__30775;
i__30635_30763 = G__30776;
continue;
} else {
var action_30777 = cljs.core.first(seq__30632_30771__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([action_30777], 0));


var G__30779 = cljs.core.next(seq__30632_30771__$1);
var G__30780 = null;
var G__30781 = (0);
var G__30782 = (0);
seq__30632_30760 = G__30779;
chunk__30633_30761 = G__30780;
count__30634_30762 = G__30781;
i__30635_30763 = G__30782;
continue;
}
} else {
}
}
break;
}

return actions;
}catch (e30615){var error = e30615;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR!",error], 0));

return null;
}}));
teg_online.ai.response.parse_response.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","regroup","teg-online.game/regroup",1546790374),(function (game,turn_actions,response){
try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response], 0));

var invalid_regroups = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30655){
var map__30656 = p__30655;
var map__30656__$1 = cljs.core.__destructure_map(map__30656);
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30656__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var destination = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30656__$1,new cljs.core.Keyword(null,"destination","destination",-253872483));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [destination,origin], null);
}),turn_actions));
var actions = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("paso",clojure.string.trim(response)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teg_online.ai.actions.pass], null):teg_online.ai.actions.ensure_valid(game,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__30658){
var vec__30660 = p__30658;
var src_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(0),null);
var dest_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(1),null);
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(2),null);
var src = teg_online.board.find_country_by_name(src_name);
var dest = teg_online.board.find_country_by_name(dest_name);
var move__$1 = cljs.core.parse_long(clojure.string.trim(move));
if(cljs.core.truth_((function (){var and__5160__auto__ = src;
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = dest;
if(cljs.core.truth_(and__5160__auto____$1)){
return ((cljs.core.pos_int_QMARK_(move__$1)) && (cljs.core.not((function (){var G__30668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,dest], null);
return (invalid_regroups.cljs$core$IFn$_invoke$arity$1 ? invalid_regroups.cljs$core$IFn$_invoke$arity$1(G__30668) : invalid_regroups.call(null,G__30668));
})())));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})())){
return teg_online.ai.actions.regroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"origin","origin",1037372088),src,new cljs.core.Keyword(null,"destination","destination",-253872483),dest,new cljs.core.Keyword(null,"move","move",-2110884309),move__$1], 0));
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/);
}),clojure.string.split_lines(response)))));
var seq__30674_30798 = cljs.core.seq(actions);
var chunk__30675_30799 = null;
var count__30676_30800 = (0);
var i__30677_30801 = (0);
while(true){
if((i__30677_30801 < count__30676_30800)){
var action_30802 = chunk__30675_30799.cljs$core$IIndexed$_nth$arity$2(null,i__30677_30801);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([action_30802], 0));


var G__30804 = seq__30674_30798;
var G__30805 = chunk__30675_30799;
var G__30806 = count__30676_30800;
var G__30807 = (i__30677_30801 + (1));
seq__30674_30798 = G__30804;
chunk__30675_30799 = G__30805;
count__30676_30800 = G__30806;
i__30677_30801 = G__30807;
continue;
} else {
var temp__5825__auto___30808 = cljs.core.seq(seq__30674_30798);
if(temp__5825__auto___30808){
var seq__30674_30809__$1 = temp__5825__auto___30808;
if(cljs.core.chunked_seq_QMARK_(seq__30674_30809__$1)){
var c__5694__auto___30811 = cljs.core.chunk_first(seq__30674_30809__$1);
var G__30812 = cljs.core.chunk_rest(seq__30674_30809__$1);
var G__30813 = c__5694__auto___30811;
var G__30814 = cljs.core.count(c__5694__auto___30811);
var G__30815 = (0);
seq__30674_30798 = G__30812;
chunk__30675_30799 = G__30813;
count__30676_30800 = G__30814;
i__30677_30801 = G__30815;
continue;
} else {
var action_30817 = cljs.core.first(seq__30674_30809__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([action_30817], 0));


var G__30826 = cljs.core.next(seq__30674_30809__$1);
var G__30827 = null;
var G__30828 = (0);
var G__30829 = (0);
seq__30674_30798 = G__30826;
chunk__30675_30799 = G__30827;
count__30676_30800 = G__30828;
i__30677_30801 = G__30829;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(teg_online.ai.actions.pass,cljs.core.last(actions))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(actions,teg_online.ai.actions.pass);
} else {
return actions;
}
}catch (e30653){var error = e30653;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR!",error], 0));

return null;
}}));

//# sourceMappingURL=teg_online.ai.response.js.map
