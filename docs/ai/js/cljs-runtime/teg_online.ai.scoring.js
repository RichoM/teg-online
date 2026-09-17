goog.provide('teg_online.ai.scoring');
teg_online.ai.scoring.connected_countries = (function teg_online$ai$scoring$connected_countries(game,country){
var frontier = [country];
var reached = cljs.core.PersistentHashSet.createAsIfByAssoc([country]);
while(true){
if(cljs.core.empty_QMARK_(frontier)){
return reached;
} else {
var current = frontier.shift();
var owner = new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1((function (){var G__29569 = new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(game);
return (current.cljs$core$IFn$_invoke$arity$1 ? current.cljs$core$IFn$_invoke$arity$1(G__29569) : current.call(null,G__29569));
})());
var neighbours = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (reached,current,owner,frontier){
return (function (p1__29477_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1((function (){var G__29572 = new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(game);
return (p1__29477_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29477_SHARP_.cljs$core$IFn$_invoke$arity$1(G__29572) : p1__29477_SHARP_.call(null,G__29572));
})()));
});})(reached,current,owner,frontier))
,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053).cljs$core$IFn$_invoke$arity$1((current.cljs$core$IFn$_invoke$arity$1 ? current.cljs$core$IFn$_invoke$arity$1(teg_online.board.countries) : current.call(null,teg_online.board.countries)))));
var seq__29577_29987 = cljs.core.seq(neighbours);
var chunk__29578_29988 = null;
var count__29579_29989 = (0);
var i__29580_29990 = (0);
while(true){
if((i__29580_29990 < count__29579_29989)){
var neigbour_29991 = chunk__29578_29988.cljs$core$IIndexed$_nth$arity$2(null,i__29580_29990);
if(cljs.core.truth_((reached.cljs$core$IFn$_invoke$arity$1 ? reached.cljs$core$IFn$_invoke$arity$1(neigbour_29991) : reached.call(null,neigbour_29991)))){
} else {
frontier.push(neigbour_29991);
}


var G__29993 = seq__29577_29987;
var G__29994 = chunk__29578_29988;
var G__29995 = count__29579_29989;
var G__29996 = (i__29580_29990 + (1));
seq__29577_29987 = G__29993;
chunk__29578_29988 = G__29994;
count__29579_29989 = G__29995;
i__29580_29990 = G__29996;
continue;
} else {
var temp__5825__auto___29997 = cljs.core.seq(seq__29577_29987);
if(temp__5825__auto___29997){
var seq__29577_29998__$1 = temp__5825__auto___29997;
if(cljs.core.chunked_seq_QMARK_(seq__29577_29998__$1)){
var c__5694__auto___29999 = cljs.core.chunk_first(seq__29577_29998__$1);
var G__30001 = cljs.core.chunk_rest(seq__29577_29998__$1);
var G__30002 = c__5694__auto___29999;
var G__30003 = cljs.core.count(c__5694__auto___29999);
var G__30004 = (0);
seq__29577_29987 = G__30001;
chunk__29578_29988 = G__30002;
count__29579_29989 = G__30003;
i__29580_29990 = G__30004;
continue;
} else {
var neigbour_30006 = cljs.core.first(seq__29577_29998__$1);
if(cljs.core.truth_((reached.cljs$core$IFn$_invoke$arity$1 ? reached.cljs$core$IFn$_invoke$arity$1(neigbour_30006) : reached.call(null,neigbour_30006)))){
} else {
frontier.push(neigbour_30006);
}


var G__30008 = cljs.core.next(seq__29577_29998__$1);
var G__30009 = null;
var G__30010 = (0);
var G__30011 = (0);
seq__29577_29987 = G__30008;
chunk__29578_29988 = G__30009;
count__29579_29989 = G__30010;
i__29580_29990 = G__30011;
continue;
}
} else {
}
}
break;
}

var G__30012 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(reached,neighbours);
reached = G__30012;
continue;
}
break;
}
});
teg_online.ai.scoring.player_empires = (function teg_online$ai$scoring$player_empires(game,player_id){
var empires = cljs.core.PersistentVector.EMPTY;
var G__29661 = teg_online.game.player_countries(game,player_id);
var vec__29669 = G__29661;
var seq__29670 = cljs.core.seq(vec__29669);
var first__29671 = cljs.core.first(seq__29670);
var seq__29670__$1 = cljs.core.next(seq__29670);
var country = first__29671;
var rest = seq__29670__$1;
var empires__$1 = empires;
var G__29661__$1 = G__29661;
while(true){
var empires__$2 = empires__$1;
var vec__29745 = G__29661__$1;
var seq__29746 = cljs.core.seq(vec__29745);
var first__29747 = cljs.core.first(seq__29746);
var seq__29746__$1 = cljs.core.next(seq__29746);
var country__$1 = first__29747;
var rest__$1 = seq__29746__$1;
if(cljs.core.truth_(country__$1)){
var empire = teg_online.ai.scoring.connected_countries(game,country__$1);
var G__30015 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(empires__$2,empire);
var G__30016 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(empire,rest__$1);
empires__$1 = G__30015;
G__29661__$1 = G__30016;
continue;
} else {
return empires__$2;
}
break;
}
});
teg_online.ai.scoring.in_conflict_QMARK_ = (function teg_online$ai$scoring$in_conflict_QMARK_(game,country){
var owner = new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1((function (){var G__29819 = new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(game);
return (country.cljs$core$IFn$_invoke$arity$1 ? country.cljs$core$IFn$_invoke$arity$1(G__29819) : country.call(null,G__29819));
})());
return cljs.core.boolean$(cljs.core.some((function (neighbour){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1((function (){var G__29841 = new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(game);
return (neighbour.cljs$core$IFn$_invoke$arity$1 ? neighbour.cljs$core$IFn$_invoke$arity$1(G__29841) : neighbour.call(null,G__29841));
})()));
}),new cljs.core.Keyword(null,"neighbours","neighbours",1596930053).cljs$core$IFn$_invoke$arity$1((country.cljs$core$IFn$_invoke$arity$1 ? country.cljs$core$IFn$_invoke$arity$1(teg_online.board.countries) : country.call(null,teg_online.board.countries)))));
});
teg_online.ai.scoring.split_active = (function teg_online$ai$scoring$split_active(game,empire){
var conflicts = cljs.core.group_by(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(teg_online.ai.scoring.in_conflict_QMARK_,game),empire);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(conflicts.cljs$core$IFn$_invoke$arity$1 ? conflicts.cljs$core$IFn$_invoke$arity$1(true) : conflicts.call(null,true)),(conflicts.cljs$core$IFn$_invoke$arity$1 ? conflicts.cljs$core$IFn$_invoke$arity$1(false) : conflicts.call(null,false))], null);
});
teg_online.ai.scoring.count_army = (function teg_online$ai$scoring$count_army(game,countries){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"army","army",842961270),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(game),countries)));
});
teg_online.ai.scoring.borders = (function teg_online$ai$scoring$borders(game,countries){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (country){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (neighbour){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [country,neighbour], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (neighbour){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(teg_online.game.country_owner(game,country),teg_online.game.country_owner(game,neighbour));
}),new cljs.core.Keyword(null,"neighbours","neighbours",1596930053).cljs$core$IFn$_invoke$arity$1((country.cljs$core$IFn$_invoke$arity$1 ? country.cljs$core$IFn$_invoke$arity$1(teg_online.board.countries) : country.call(null,teg_online.board.countries)))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([countries], 0));
});
teg_online.ai.scoring.border_strengh = (function teg_online$ai$scoring$border_strengh(army,enemy_army){
return ((army - enemy_army) / (army + enemy_army));
});
teg_online.ai.scoring.border_advantage = (function teg_online$ai$scoring$border_advantage(game,empire){
var empire_borders = teg_online.ai.scoring.borders(game,empire);
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29923){
var vec__29924 = p__29923;
var country = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29924,(0),null);
var neighbour = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29924,(1),null);
return (teg_online.ai.scoring.border_strengh(teg_online.game.get_army(game,country),teg_online.game.get_army(game,neighbour)) + (1));
}),empire_borders)) / cljs.core.count(empire_borders));
});
teg_online.ai.scoring.p_BANG_ = (function teg_online$ai$scoring$p_BANG_(label,value){
return value;
});
teg_online.ai.scoring.empire_score = (function teg_online$ai$scoring$empire_score(game,empire){
var vec__29957 = teg_online.ai.scoring.split_active(game,empire);
var active_countries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29957,(0),null);
var inactive_countries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29957,(1),null);
var active_armies = teg_online.ai.scoring.count_army(game,active_countries);
var inactive_armies = teg_online.ai.scoring.count_army(game,inactive_countries);
var isolated_by_continent = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(cljs.core.group_by((function (p1__29938_SHARP_){
return new cljs.core.Keyword(null,"continent","continent",615455043).cljs$core$IFn$_invoke$arity$1((p1__29938_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29938_SHARP_.cljs$core$IFn$_invoke$arity$1(teg_online.board.countries) : p1__29938_SHARP_.call(null,teg_online.board.countries)));
}),inactive_countries)));
teg_online.ai.scoring.p_BANG_("EMPIRE",empire);

return (((teg_online.ai.scoring.p_BANG_("Armies",(active_armies + (0.75 * inactive_armies))) * teg_online.ai.scoring.p_BANG_("Countries",cljs.core.count(empire))) * teg_online.ai.scoring.p_BANG_("Continents",cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,isolated_by_continent))) * teg_online.ai.scoring.p_BANG_("Border",teg_online.ai.scoring.border_advantage(game,empire)));
});
teg_online.ai.scoring.player_absolute_score = (function teg_online$ai$scoring$player_absolute_score(game,player_id){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(teg_online.ai.scoring.empire_score,game),teg_online.ai.scoring.player_empires(game,player_id)));
});
teg_online.ai.scoring.calculate_scores = (function teg_online$ai$scoring$calculate_scores(game){
var absolute_scores = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(teg_online.ai.scoring.player_absolute_score,game),new cljs.core.Keyword(null,"turn-order","turn-order",669259588).cljs$core$IFn$_invoke$arity$1(game));
var total_score = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,absolute_scores);
return cljs.core.zipmap(new cljs.core.Keyword(null,"turn-order","turn-order",669259588).cljs$core$IFn$_invoke$arity$1(game),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (absolute_score){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"absolute","absolute",1655386478),absolute_score,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),(absolute_score / total_score)], null);
}),absolute_scores));
});

//# sourceMappingURL=teg_online.ai.scoring.js.map
