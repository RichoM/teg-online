goog.provide('teg_online.game');
teg_online.game.new_game = (function teg_online$game$new_game(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"countries","countries",863192750),cljs.core.reduce_kv((function (p1__29101_SHARP_,p2__29102_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29101_SHARP_,p2__29102_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),p2__29102_SHARP_,new cljs.core.Keyword(null,"owner","owner",-392611939),null,new cljs.core.Keyword(null,"army","army",842961270),(0)], null));
}),cljs.core.PersistentArrayMap.EMPTY,teg_online.board.countries),new cljs.core.Keyword(null,"cards","cards",169174038),teg_online.utils.core.index_by(new cljs.core.Keyword(null,"country","country",312965309),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29103){
var vec__29104 = p__29103;
var country = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29104,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29104,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"country","country",312965309),country,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"owner","owner",-392611939),null,new cljs.core.Keyword(null,"used?","used?",-1692940128),false], null);
}),teg_online.board.cards)),new cljs.core.Keyword(null,"turn-order","turn-order",669259588),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"phase","phase",575722892),null,new cljs.core.Keyword(null,"turn","turn",75759344),null,new cljs.core.Keyword(null,"winner","winner",714604679),null,new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),null], null);
});
teg_online.game.new_player = (function teg_online$game$new_player(id,name,type){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"goal","goal",-2073396501),null,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true,new cljs.core.Keyword(null,"exchanges","exchanges",-764358941),(0),new cljs.core.Keyword(null,"type","type",1174270348),type], null);
});
teg_online.game.game_started_QMARK_ = (function teg_online$game$game_started_QMARK_(game){
return (!(((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"turn","turn",75759344)) : game.call(null,new cljs.core.Keyword(null,"turn","turn",75759344))) == null)));
});
teg_online.game.game_over_QMARK_ = (function teg_online$game$game_over_QMARK_(game){
return (!(((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"winner","winner",714604679)) : game.call(null,new cljs.core.Keyword(null,"winner","winner",714604679))) == null)));
});
teg_online.game.get_players = (function teg_online$game$get_players(game){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"players","players",-1361554569)) : game.call(null,new cljs.core.Keyword(null,"players","players",-1361554569))),(game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"turn-order","turn-order",669259588)) : game.call(null,new cljs.core.Keyword(null,"turn-order","turn-order",669259588))));
});
teg_online.game.get_player = (function teg_online$game$get_player(game,player_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player_id], null));
});
teg_online.game.get_current_player = (function teg_online$game$get_current_player(p__29113){
var map__29114 = p__29113;
var map__29114__$1 = cljs.core.__destructure_map(map__29114);
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29114__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var turn_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29114__$1,new cljs.core.Keyword(null,"turn-order","turn-order",669259588));
if(cljs.core.truth_(turn)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(turn_order,cljs.core.mod(turn,cljs.core.count(turn_order)));
} else {
return null;
}
});
teg_online.game.get_current_player_name = (function teg_online$game$get_current_player_name(game){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(teg_online.game.get_player(game,teg_online.game.get_current_player(game)));
});
teg_online.game.get_current_phase = (function teg_online$game$get_current_phase(p__29117){
var map__29118 = p__29117;
var map__29118__$1 = cljs.core.__destructure_map(map__29118);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29118__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
return phase;
});
teg_online.game.get_army = (function teg_online$game$get_army(game,country_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),country_id,new cljs.core.Keyword(null,"army","army",842961270)], null));
});
teg_online.game.player_countries = (function teg_online$game$player_countries(game,player_id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.group_by(new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.vals(new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(game))),player_id));
});
teg_online.game.player_army_count = (function teg_online$game$player_army_count(game,player_id){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"army","army",842961270),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.group_by(new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.vals(new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(game))),player_id)));
});
teg_online.game.still_playing_QMARK_ = (function teg_online$game$still_playing_QMARK_(game,player_id){
var and__5160__auto__ = cljs.core.seq(teg_online.game.player_countries(game,player_id));
if(and__5160__auto__){
return new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(teg_online.game.get_player(game,player_id));
} else {
return and__5160__auto__;
}
});
teg_online.game.calculate_extra_army = (function teg_online$game$calculate_extra_army(var_args){
var G__29133 = arguments.length;
switch (G__29133) {
case 1:
return teg_online.game.calculate_extra_army.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return teg_online.game.calculate_extra_army.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.game.calculate_extra_army.cljs$core$IFn$_invoke$arity$1 = (function (game){
return teg_online.game.calculate_extra_army.cljs$core$IFn$_invoke$arity$2(game,teg_online.game.get_current_player(game));
}));

(teg_online.game.calculate_extra_army.cljs$core$IFn$_invoke$arity$2 = (function (p__29138,player_id){
var map__29139 = p__29138;
var map__29139__$1 = cljs.core.__destructure_map(map__29139);
var game = map__29139__$1;
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29139__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var turn_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29139__$1,new cljs.core.Keyword(null,"turn-order","turn-order",669259588));
if(cljs.core.truth_(turn)){
var player_count = cljs.core.count(turn_order);
var pred__29144 = cljs.core._GT_;
var expr__29146 = turn;
if(cljs.core.truth_((pred__29144.cljs$core$IFn$_invoke$arity$2 ? pred__29144.cljs$core$IFn$_invoke$arity$2(player_count,expr__29146) : pred__29144.call(null,player_count,expr__29146)))){
return (5);
} else {
if(cljs.core.truth_((function (){var G__29153 = ((2) * player_count);
var G__29155 = expr__29146;
return (pred__29144.cljs$core$IFn$_invoke$arity$2 ? pred__29144.cljs$core$IFn$_invoke$arity$2(G__29153,G__29155) : pred__29144.call(null,G__29153,G__29155));
})())){
return (3);
} else {
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((3),Math.floor((cljs.core.count(teg_online.game.player_countries(game,player_id)) / (2))));
}
}
} else {
return null;
}
}));

(teg_online.game.calculate_extra_army.cljs$lang$maxFixedArity = 2);

teg_online.game.get_extra_army = (function teg_online$game$get_extra_army(game){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),new cljs.core.Keyword(null,"extra-army","extra-army",-1408930582)], null));
});
teg_online.game.country_exists_QMARK_ = (function teg_online$game$country_exists_QMARK_(game,country_id){
return cljs.core.contains_QMARK_((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"countries","countries",863192750)) : game.call(null,new cljs.core.Keyword(null,"countries","countries",863192750))),country_id);
});
teg_online.game.country_owner = (function teg_online$game$country_owner(game,country_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),country_id,new cljs.core.Keyword(null,"owner","owner",-392611939)], null));
});
teg_online.game.is_next_player_the_first_player_QMARK_ = (function teg_online$game$is_next_player_the_first_player_QMARK_(p__29160){
var map__29162 = p__29160;
var map__29162__$1 = cljs.core.__destructure_map(map__29162);
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29162__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29162__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
return (cljs.core.mod((turn + (1)),cljs.core.count(players)) === (0));
});
teg_online.game.player_continents = (function teg_online$game$player_continents(game,player_id){
var countries = cljs.core.set(teg_online.game.player_countries(game,player_id));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (continent){
return clojure.set.subset_QMARK_(teg_online.board.get_countries_by_continent(continent),countries);
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621),new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307),new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879),new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806),new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107),new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402)], null));
});
teg_online.game.get_dice_count = (function teg_online$game$get_dice_count(game,attacker_id,defender_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.min.cljs$core$IFn$_invoke$arity$2((3),(teg_online.game.get_army(game,attacker_id) - (1))),cljs.core.min.cljs$core$IFn$_invoke$arity$2((3),teg_online.game.get_army(game,defender_id))], null);
});
teg_online.game.player_countries_by_continent = (function teg_online$game$player_countries_by_continent(game,player_id){
return cljs.core.group_by(new cljs.core.Keyword(null,"continent","continent",615455043),cljs.core.map.cljs$core$IFn$_invoke$arity$2(teg_online.board.countries,teg_online.game.player_countries(game,player_id)));
});
teg_online.game.get_player_goal = (function teg_online$game$get_player_goal(game,player_id){
var temp__5825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player_id,new cljs.core.Keyword(null,"goal","goal",-2073396501)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var goal_idx = temp__5825__auto__;
if((goal_idx < cljs.core.count(teg_online.game.occupation_goals))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(teg_online.game.occupation_goals,goal_idx);
} else {
var players = teg_online.game.get_players(game);
var player_idx = (goal_idx - cljs.core.count(teg_online.game.occupation_goals));
var G__29169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(players,player_idx);
var G__29170 = player_idx;
return (teg_online.game.destruction_goal.cljs$core$IFn$_invoke$arity$2 ? teg_online.game.destruction_goal.cljs$core$IFn$_invoke$arity$2(G__29169,G__29170) : teg_online.game.destruction_goal.call(null,G__29169,G__29170));
}
} else {
return null;
}
});
teg_online.game.draw_card_QMARK_ = (function teg_online$game$draw_card_QMARK_(game){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),new cljs.core.Keyword(null,"draw-card?","draw-card?",1953281860)], null));
});
teg_online.game.get_player_cards = (function teg_online$game$get_player_cards(game,player_id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"country","country",312965309),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29174_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_id,new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(p1__29174_SHARP_));
}),cljs.core.vals((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cards","cards",169174038)) : game.call(null,new cljs.core.Keyword(null,"cards","cards",169174038))))));
});
teg_online.game.get_free_cards = (function teg_online$game$get_free_cards(game){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"country","country",312965309),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29175_SHARP_){
return (new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(p1__29175_SHARP_) == null);
}),cljs.core.vals((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cards","cards",169174038)) : game.call(null,new cljs.core.Keyword(null,"cards","cards",169174038))))));
});
teg_online.game.group_cards_by_type = (function teg_online$game$group_cards_by_type(game,cards){
var grouped_cards = cljs.core.group_by(new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.map.cljs$core$IFn$_invoke$arity$2((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cards","cards",169174038)) : game.call(null,new cljs.core.Keyword(null,"cards","cards",169174038))),cards));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (grouped_cards__$1,card){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(grouped_cards__$1,new cljs.core.Keyword("teg-online.board","balloon","teg-online.board/balloon",-1151281314),cljs.core.conj,card),new cljs.core.Keyword("teg-online.board","cannon","teg-online.board/cannon",-1934932787),cljs.core.conj,card),new cljs.core.Keyword("teg-online.board","ship","teg-online.board/ship",-2015442089),cljs.core.conj,card);
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(grouped_cards,new cljs.core.Keyword("teg-online.board","all","teg-online.board/all",-922758672)),(grouped_cards.cljs$core$IFn$_invoke$arity$1 ? grouped_cards.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","all","teg-online.board/all",-922758672)) : grouped_cards.call(null,new cljs.core.Keyword("teg-online.board","all","teg-online.board/all",-922758672))));
});
teg_online.game.valid_exchange_QMARK_ = (function teg_online$game$valid_exchange_QMARK_(game,cards){
var cards__$1 = teg_online.game.group_cards_by_type(game,cljs.core.set(cards));
var or__5162__auto__ = (cljs.core.count(cljs.core.keys(cards__$1)) >= (3));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some((function (p__29188){
var vec__29189 = p__29188;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29189,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29189,(1),null);
return (cljs.core.count(c) >= (3));
}),cards__$1);
}
});
teg_online.game.can_exchange_QMARK_ = (function teg_online$game$can_exchange_QMARK_(var_args){
var G__29197 = arguments.length;
switch (G__29197) {
case 1:
return teg_online.game.can_exchange_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return teg_online.game.can_exchange_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.game.can_exchange_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (game){
return teg_online.game.can_exchange_QMARK_.cljs$core$IFn$_invoke$arity$2(game,teg_online.game.get_current_player(game));
}));

(teg_online.game.can_exchange_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (game,player_id){
return teg_online.game.valid_exchange_QMARK_(game,teg_online.game.get_player_cards(game,player_id));
}));

(teg_online.game.can_exchange_QMARK_.cljs$lang$maxFixedArity = 2);

teg_online.game.get_exchange_bonus = (function teg_online$game$get_exchange_bonus(var_args){
var G__29199 = arguments.length;
switch (G__29199) {
case 1:
return teg_online.game.get_exchange_bonus.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return teg_online.game.get_exchange_bonus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.game.get_exchange_bonus.cljs$core$IFn$_invoke$arity$1 = (function (game){
return teg_online.game.get_exchange_bonus.cljs$core$IFn$_invoke$arity$2(game,teg_online.game.get_current_player(game));
}));

(teg_online.game.get_exchange_bonus.cljs$core$IFn$_invoke$arity$2 = (function (game,player_id){
var exchanges = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player_id,new cljs.core.Keyword(null,"exchanges","exchanges",-764358941)], null),(0));
var bonus = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7),(10)], null),cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(5)),(15)));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bonus,exchanges);
}));

(teg_online.game.get_exchange_bonus.cljs$lang$maxFixedArity = 2);

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630),new cljs.core.Keyword("teg-online.game","game-phase","teg-online.game/game-phase",-584565989));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("teg-online.game","regroup","teg-online.game/regroup",1546790374),new cljs.core.Keyword("teg-online.game","game-phase","teg-online.game/game-phase",-584565989));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),new cljs.core.Keyword("teg-online.game","game-phase","teg-online.game/game-phase",-584565989));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("teg-online.game","add-army-1","teg-online.game/add-army-1",-776333194),new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("teg-online.game","add-army-2","teg-online.game/add-army-2",-1960014725),new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("teg-online.game","add-army-continent","teg-online.game/add-army-continent",-1282273691),new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("teg-online.game","add-army-asia","teg-online.game/add-army-asia",1320697977),new cljs.core.Keyword("teg-online.game","add-army-continent","teg-online.game/add-army-continent",-1282273691));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("teg-online.game","add-army-europa","teg-online.game/add-army-europa",-1597820532),new cljs.core.Keyword("teg-online.game","add-army-continent","teg-online.game/add-army-continent",-1282273691));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("teg-online.game","add-army-north-america","teg-online.game/add-army-north-america",-486765231),new cljs.core.Keyword("teg-online.game","add-army-continent","teg-online.game/add-army-continent",-1282273691));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("teg-online.game","add-army-south-america","teg-online.game/add-army-south-america",729961181),new cljs.core.Keyword("teg-online.game","add-army-continent","teg-online.game/add-army-continent",-1282273691));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("teg-online.game","add-army-africa","teg-online.game/add-army-africa",-276823043),new cljs.core.Keyword("teg-online.game","add-army-continent","teg-online.game/add-army-continent",-1282273691));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("teg-online.game","add-army-oceania","teg-online.game/add-army-oceania",1374343553),new cljs.core.Keyword("teg-online.game","add-army-continent","teg-online.game/add-army-continent",-1282273691));
teg_online.game.common_goal = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ocupar 30 pa\u00EDses",new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),(function (_,new_game,player_id){
return (cljs.core.count(teg_online.game.player_countries(new_game,player_id)) >= (30));
})], null);
teg_online.game.occupation_goals = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ocupar \u00C1frica, 5 pa\u00EDses de Am\u00E9rica del Norte y 4 pa\u00EDses de Europa",new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),(function (_,new_game,player_id){
var countries = teg_online.game.player_countries_by_continent(new_game,player_id);
return (((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107)) : countries.call(null,new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107)))) >= cljs.core.count(teg_online.board.get_countries_by_continent(new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107))))) && ((((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879)) : countries.call(null,new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879)))) >= (5))) && ((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307)) : countries.call(null,new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307)))) >= (4))))));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ocupar Am\u00E9rica del Sur, 7 pa\u00EDses de Europa y 3 pa\u00EDses lim\u00EDtrofes entre s\u00ED en cualquier lugar del mapa",new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),(function (_,new_game,player_id){
var countries = teg_online.game.player_countries(new_game,player_id);
var triplets = teg_online.board.neighbour_triplets(countries);
return cljs.core.some((function (triplet){
var countries_without_triplet = cljs.core.group_by(new cljs.core.Keyword(null,"continent","continent",615455043),cljs.core.map.cljs$core$IFn$_invoke$arity$2(teg_online.board.countries,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(triplet,countries)));
return (((cljs.core.count((countries_without_triplet.cljs$core$IFn$_invoke$arity$1 ? countries_without_triplet.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806)) : countries_without_triplet.call(null,new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806)))) >= cljs.core.count(teg_online.board.get_countries_by_continent(new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806))))) && ((cljs.core.count((countries_without_triplet.cljs$core$IFn$_invoke$arity$1 ? countries_without_triplet.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307)) : countries_without_triplet.call(null,new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307)))) >= (7))));
}),triplets);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ocupar Asia y 2 pa\u00EDses de Am\u00E9rica del Sur",new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),(function (_,new_game,player_id){
var countries = teg_online.game.player_countries_by_continent(new_game,player_id);
return (((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621)) : countries.call(null,new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621)))) >= cljs.core.count(teg_online.board.get_countries_by_continent(new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621))))) && ((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806)) : countries.call(null,new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806)))) >= (2))));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ocupar Europa, 4 pa\u00EDses de Asia y 2 pa\u00EDses de Am\u00E9rica del Sur",new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),(function (_,new_game,player_id){
var countries = teg_online.game.player_countries_by_continent(new_game,player_id);
return (((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307)) : countries.call(null,new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307)))) >= cljs.core.count(teg_online.board.get_countries_by_continent(new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307))))) && ((((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621)) : countries.call(null,new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621)))) >= (4))) && ((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806)) : countries.call(null,new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806)))) >= (2))))));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ocupar am\u00E9rica del Norte, 2 pa\u00EDses de Ocean\u00EDa y 4 de Asia",new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),(function (_,new_game,player_id){
var countries = teg_online.game.player_countries_by_continent(new_game,player_id);
return (((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879)) : countries.call(null,new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879)))) >= cljs.core.count(teg_online.board.get_countries_by_continent(new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879))))) && ((((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402)) : countries.call(null,new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402)))) >= (2))) && ((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621)) : countries.call(null,new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621)))) >= (4))))));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ocupar 2 pa\u00EDses de Ocean\u00EDa, 2 pa\u00EDses de \u00C1frica, 2 pa\u00EDses de Am\u00E9rica del Sur, 3 pa\u00EDses de Europa, 4 de Am\u00E9rica del Norte y 3 de Asia",new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),(function (_,new_game,player_id){
var countries = teg_online.game.player_countries_by_continent(new_game,player_id);
return (((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402)) : countries.call(null,new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402)))) >= (2))) && ((((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107)) : countries.call(null,new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107)))) >= (2))) && ((((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806)) : countries.call(null,new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806)))) >= (2))) && ((((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307)) : countries.call(null,new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307)))) >= (3))) && ((((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879)) : countries.call(null,new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879)))) >= (4))) && ((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621)) : countries.call(null,new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621)))) >= (3))))))))))));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ocupar Ocean\u00EDa, Am\u00E9rica del Norte y 2 pa\u00EDses de Europa",new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),(function (_,new_game,player_id){
var countries = teg_online.game.player_countries_by_continent(new_game,player_id);
return (((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879)) : countries.call(null,new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879)))) >= cljs.core.count(teg_online.board.get_countries_by_continent(new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879))))) && ((((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402)) : countries.call(null,new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402)))) >= cljs.core.count(teg_online.board.get_countries_by_continent(new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402))))) && ((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307)) : countries.call(null,new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307)))) >= (2))))));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ocupar Am\u00E9rica del Sur, \u00C1frica y 4 pa\u00EDses de Asia",new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),(function (_,new_game,player_id){
var countries = teg_online.game.player_countries_by_continent(new_game,player_id);
return (((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806)) : countries.call(null,new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806)))) >= cljs.core.count(teg_online.board.get_countries_by_continent(new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806))))) && ((((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107)) : countries.call(null,new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107)))) >= cljs.core.count(teg_online.board.get_countries_by_continent(new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107))))) && ((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621)) : countries.call(null,new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621)))) >= (4))))));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ocupar Ocean\u00EDa, \u00C1frica y 5 pa\u00EDses de Am\u00E9rica del Norte",new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),(function (_,new_game,player_id){
var countries = teg_online.game.player_countries_by_continent(new_game,player_id);
return (((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402)) : countries.call(null,new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402)))) >= cljs.core.count(teg_online.board.get_countries_by_continent(new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402))))) && ((((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107)) : countries.call(null,new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107)))) >= cljs.core.count(teg_online.board.get_countries_by_continent(new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107))))) && ((cljs.core.count((countries.cljs$core$IFn$_invoke$arity$1 ? countries.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879)) : countries.call(null,new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879)))) >= (5))))));
})], null)], null);
teg_online.game.destruction_goal = (function teg_online$game$destruction_goal(var_args){
var G__29203 = arguments.length;
switch (G__29203) {
case 1:
return teg_online.game.destruction_goal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return teg_online.game.destruction_goal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.game.destruction_goal.cljs$core$IFn$_invoke$arity$1 = (function (p__29210){
var map__29211 = p__29210;
var map__29211__$1 = cljs.core.__destructure_map(map__29211);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29211__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29211__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Destruir al ej\u00E9rcito del jugador %1",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0)),new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),(function (old_game,new_game,_){
return (((((teg_online.game.get_player(old_game,id) == null)) || (cljs.core.seq(teg_online.game.player_countries(old_game,id))))) && (cljs.core.empty_QMARK_(teg_online.game.player_countries(new_game,id))));
})], null);
}));

(teg_online.game.destruction_goal.cljs$core$IFn$_invoke$arity$2 = (function (player,player_idx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(teg_online.game.destruction_goal.cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"secret-name","secret-name",84935125),teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Destruir al ej\u00E9rcito del jugador %1",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(player_idx + (1))], 0)));
}));

(teg_online.game.destruction_goal.cljs$lang$maxFixedArity = 2);

teg_online.game.assert_valid_country = (function teg_online$game$assert_valid_country(game,country){
if(teg_online.game.country_exists_QMARK_(game,country)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Country %1 does not exist",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([country], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"country-id","country-id",927351142),country], null));
}

if(cljs.core.truth_(teg_online.game.country_owner(game,country))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Country %1 has no owner",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([country], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"country-id","country-id",927351142),country], null));
}
});
teg_online.game.assert_neighbours = (function teg_online$game$assert_neighbours(game,country_1,country_2){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(teg_online.board.countries,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [country_1,new cljs.core.Keyword(null,"neighbours","neighbours",1596930053)], null)),country_2)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Countries %1 and %2 are not neighbours",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([country_1,country_2], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"countries","countries",863192750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [country_1,country_2], null)], null));
}
});
teg_online.game.assert_country_owner = (function teg_online$game$assert_country_owner(game,country_id,player_id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_id,teg_online.game.country_owner(game,country_id))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Country %1 doesn't belong to player %2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([country_id,player_id], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"country","country",312965309),country_id,new cljs.core.Keyword(null,"player","player",-97687400),player_id], null));
}
});
teg_online.game.assert_country_owner_any = (function teg_online$game$assert_country_owner_any(game,country_id,players){
if(cljs.core.contains_QMARK_(players,teg_online.game.country_owner(game,country_id))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Country %1 doesn't belong to any of the following players: %2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([country_id,cljs.core.keys(players)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"country","country",312965309),country_id,new cljs.core.Keyword(null,"players","players",-1361554569),players], null));
}
});
teg_online.game.assert_valid_throw = (function teg_online$game$assert_valid_throw(game,country_id,allowed,throw$){
var throw_count = cljs.core.count(throw$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allowed,throw_count)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Country %1 is allowed to throw %2 dice but threw %3",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([country_id,allowed,throw_count], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"country","country",312965309),country_id,new cljs.core.Keyword(null,"allowed","allowed",1436019743),allowed,new cljs.core.Keyword(null,"throw","throw",-1044625833),throw$], null));
}
});
teg_online.game.assert_valid_phase = (function teg_online$game$assert_valid_phase(game,expected_phase){
var actual_phase = (game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"phase","phase",575722892)) : game.call(null,new cljs.core.Keyword(null,"phase","phase",575722892)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(actual_phase,expected_phase)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Game should be in phase %1 but was %2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected_phase,actual_phase], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"expected","expected",1583670997),expected_phase,new cljs.core.Keyword(null,"actual","actual",107306363),actual_phase], null));
}
});
teg_online.game.assert_zero_army = (function teg_online$game$assert_zero_army(game,country_id){
var army = teg_online.game.get_army(game,country_id);
if((army === (0))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Country %1 should have 0 army but it had %2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([country_id,army], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"country","country",312965309),country_id,new cljs.core.Keyword(null,"army","army",842961270),army], null));
}
});
teg_online.game.assert_valid_invading_army = (function teg_online$game$assert_valid_invading_army(game,attacker_id,moving_army){
if((moving_army < (1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Country %1 should invade with at least 1 army",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attacker_id], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"country","country",312965309),attacker_id,new cljs.core.Keyword(null,"army","army",842961270),moving_army], null));
} else {
}

var max_army = cljs.core.min.cljs$core$IFn$_invoke$arity$2((3),(teg_online.game.get_army(game,attacker_id) - (1)));
if((moving_army > max_army)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Country %1 should invade with at most %2 army",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attacker_id,max_army], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"country","country",312965309),attacker_id,new cljs.core.Keyword(null,"army","army",842961270),moving_army], null));
} else {
return null;
}
});
teg_online.game.assert_valid_regrouping_army = (function teg_online$game$assert_valid_regrouping_army(game,src_id,moving_army){
if((moving_army < (1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Country %1 should regroup with at least 1 army",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src_id], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"country","country",312965309),src_id,new cljs.core.Keyword(null,"army","army",842961270),moving_army], null));
} else {
}

var max_army = (teg_online.game.get_army(game,src_id) - (1));
if((moving_army > max_army)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Country %1 should regroup with at most %2 army",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src_id,max_army], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"country","country",312965309),src_id,new cljs.core.Keyword(null,"army","army",842961270),moving_army], null));
} else {
return null;
}
});
teg_online.game.reset_current_turn = (function teg_online$game$reset_current_turn(game){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"draw-card?","draw-card?",1953281860),false,new cljs.core.Keyword(null,"extra-army","extra-army",-1408930582),teg_online.game.calculate_extra_army.cljs$core$IFn$_invoke$arity$1(game)], null));
});
teg_online.game.next_turn = (function teg_online$game$next_turn(game){
return teg_online.game.reset_current_turn(cljs.core.update.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"turn","turn",75759344),cljs.core.inc));
});
teg_online.game.get_next_phase_add_army = (function teg_online$game$get_next_phase_add_army(var_args){
var args__5903__auto__ = [];
var len__5897__auto___29574 = arguments.length;
var i__5898__auto___29575 = (0);
while(true){
if((i__5898__auto___29575 < len__5897__auto___29574)){
args__5903__auto__.push((arguments[i__5898__auto___29575]));

var G__29576 = (i__5898__auto___29575 + (1));
i__5898__auto___29575 = G__29576;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return teg_online.game.get_next_phase_add_army.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(teg_online.game.get_next_phase_add_army.cljs$core$IFn$_invoke$arity$variadic = (function (game,next_player,p__29216){
var vec__29217 = p__29216;
var begin_continent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29217,(0),null);
var continents = teg_online.game.player_continents(game,next_player);
var G__29220 = (cljs.core.truth_(begin_continent)?cljs.core.fnext(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__29212_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__29212_SHARP_,begin_continent);
}),continents)):cljs.core.first(continents));
var G__29220__$1 = (((G__29220 instanceof cljs.core.Keyword))?G__29220.fqn:null);
switch (G__29220__$1) {
case "teg-online.board/asia":
return new cljs.core.Keyword("teg-online.game","add-army-asia","teg-online.game/add-army-asia",1320697977);

break;
case "teg-online.board/europa":
return new cljs.core.Keyword("teg-online.game","add-army-europa","teg-online.game/add-army-europa",-1597820532);

break;
case "teg-online.board/north-america":
return new cljs.core.Keyword("teg-online.game","add-army-north-america","teg-online.game/add-army-north-america",-486765231);

break;
case "teg-online.board/south-america":
return new cljs.core.Keyword("teg-online.game","add-army-south-america","teg-online.game/add-army-south-america",729961181);

break;
case "teg-online.board/africa":
return new cljs.core.Keyword("teg-online.game","add-army-africa","teg-online.game/add-army-africa",-276823043);

break;
case "teg-online.board/oceania":
return new cljs.core.Keyword("teg-online.game","add-army-oceania","teg-online.game/add-army-oceania",1374343553);

break;
default:
return new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173);

}
}));

(teg_online.game.get_next_phase_add_army.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(teg_online.game.get_next_phase_add_army.cljs$lang$applyTo = (function (seq29213){
var G__29214 = cljs.core.first(seq29213);
var seq29213__$1 = cljs.core.next(seq29213);
var G__29215 = cljs.core.first(seq29213__$1);
var seq29213__$2 = cljs.core.next(seq29213__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29214,G__29215,seq29213__$2);
}));

if((typeof teg_online !== 'undefined') && (typeof teg_online.game !== 'undefined') && (typeof teg_online.game.get_next_phase !== 'undefined')){
} else {
teg_online.game.get_next_phase = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29221 = cljs.core.get_global_hierarchy;
return (fexpr__29221.cljs$core$IFn$_invoke$arity$0 ? fexpr__29221.cljs$core$IFn$_invoke$arity$0() : fexpr__29221.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("teg-online.game","get-next-phase"),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
teg_online.game.get_next_phase.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-1","teg-online.game/add-army-1",-776333194),(function (p__29222){
var map__29223 = p__29222;
var map__29223__$1 = cljs.core.__destructure_map(map__29223);
var game = map__29223__$1;
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29223__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29223__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
if(teg_online.game.is_next_player_the_first_player_QMARK_(game)){
return new cljs.core.Keyword("teg-online.game","add-army-2","teg-online.game/add-army-2",-1960014725);
} else {
return new cljs.core.Keyword("teg-online.game","add-army-1","teg-online.game/add-army-1",-776333194);
}
}));
teg_online.game.get_next_phase.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-2","teg-online.game/add-army-2",-1960014725),(function (p__29228){
var map__29229 = p__29228;
var map__29229__$1 = cljs.core.__destructure_map(map__29229);
var game = map__29229__$1;
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29229__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29229__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
if(teg_online.game.is_next_player_the_first_player_QMARK_(game)){
return new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630);
} else {
return new cljs.core.Keyword("teg-online.game","add-army-2","teg-online.game/add-army-2",-1960014725);
}
}));
teg_online.game.get_next_phase.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),(function (p__29234){
var map__29236 = p__29234;
var map__29236__$1 = cljs.core.__destructure_map(map__29236);
var game = map__29236__$1;
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29236__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29236__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
if(teg_online.game.is_next_player_the_first_player_QMARK_(game)){
return new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630);
} else {
return teg_online.game.get_next_phase_add_army(game,teg_online.game.get_current_player(teg_online.game.next_turn(game)));
}
}));
teg_online.game.get_next_phase.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630),(function (_){
return new cljs.core.Keyword("teg-online.game","regroup","teg-online.game/regroup",1546790374);
}));
teg_online.game.get_next_phase.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","regroup","teg-online.game/regroup",1546790374),(function (p__29241){
var map__29242 = p__29241;
var map__29242__$1 = cljs.core.__destructure_map(map__29242);
var game = map__29242__$1;
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29242__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29242__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
if(teg_online.game.is_next_player_the_first_player_QMARK_(game)){
return teg_online.game.get_next_phase_add_army(game,teg_online.game.get_current_player(teg_online.game.next_turn(game)));
} else {
return new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630);
}
}));
teg_online.game.get_next_phase.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-asia","teg-online.game/add-army-asia",1320697977),(function (game){
return teg_online.game.get_next_phase_add_army.cljs$core$IFn$_invoke$arity$variadic(game,teg_online.game.get_current_player(game),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("teg-online.board","asia","teg-online.board/asia",1548335621)], 0));
}));
teg_online.game.get_next_phase.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-europa","teg-online.game/add-army-europa",-1597820532),(function (game){
return teg_online.game.get_next_phase_add_army.cljs$core$IFn$_invoke$arity$variadic(game,teg_online.game.get_current_player(game),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("teg-online.board","europa","teg-online.board/europa",-736172307)], 0));
}));
teg_online.game.get_next_phase.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-north-america","teg-online.game/add-army-north-america",-486765231),(function (game){
return teg_online.game.get_next_phase_add_army.cljs$core$IFn$_invoke$arity$variadic(game,teg_online.game.get_current_player(game),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("teg-online.board","north-america","teg-online.board/north-america",1731099879)], 0));
}));
teg_online.game.get_next_phase.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-south-america","teg-online.game/add-army-south-america",729961181),(function (game){
return teg_online.game.get_next_phase_add_army.cljs$core$IFn$_invoke$arity$variadic(game,teg_online.game.get_current_player(game),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("teg-online.board","south-america","teg-online.board/south-america",-1088138806)], 0));
}));
teg_online.game.get_next_phase.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-africa","teg-online.game/add-army-africa",-276823043),(function (game){
return teg_online.game.get_next_phase_add_army.cljs$core$IFn$_invoke$arity$variadic(game,teg_online.game.get_current_player(game),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("teg-online.board","africa","teg-online.board/africa",-1468977107)], 0));
}));
teg_online.game.get_next_phase.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-oceania","teg-online.game/add-army-oceania",1374343553),(function (game){
return teg_online.game.get_next_phase_add_army.cljs$core$IFn$_invoke$arity$variadic(game,teg_online.game.get_current_player(game),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("teg-online.board","oceania","teg-online.board/oceania",885173402)], 0));
}));
teg_online.game.next_phase = (function teg_online$game$next_phase(game){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.Keyword(null,"phase","phase",575722892),teg_online.game.get_next_phase.cljs$core$IFn$_invoke$arity$1(game));
});
if((typeof teg_online !== 'undefined') && (typeof teg_online.game !== 'undefined') && (typeof teg_online.game.finish_action_STAR_ !== 'undefined')){
} else {
teg_online.game.finish_action_STAR_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29254 = cljs.core.get_global_hierarchy;
return (fexpr__29254.cljs$core$IFn$_invoke$arity$0 ? fexpr__29254.cljs$core$IFn$_invoke$arity$0() : fexpr__29254.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("teg-online.game","finish-action*"),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
teg_online.game.finish_action_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army","teg-online.game/add-army",-986135173),(function (game){
return teg_online.game.next_turn(teg_online.game.next_phase(game));
}));
teg_online.game.finish_action_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","add-army-continent","teg-online.game/add-army-continent",-1282273691),(function (game){
return teg_online.game.next_phase(game);
}));
teg_online.game.finish_action_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630),(function (game){
return teg_online.game.next_phase(game);
}));
teg_online.game.finish_action_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("teg-online.game","regroup","teg-online.game/regroup",1546790374),(function (game){
return teg_online.game.next_turn(teg_online.game.next_phase(game));
}));
teg_online.game.with_winner_check = (function teg_online$game$with_winner_check(action){
return (function() { 
var G__29649__delegate = function (game,args){
if(cljs.core.truth_((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"winner","winner",714604679)) : game.call(null,new cljs.core.Keyword(null,"winner","winner",714604679))))){
return game;
} else {
var player_id = teg_online.game.get_current_player(game);
var validator_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(teg_online.game.get_player_goal(game,player_id),new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),cljs.core.constantly(false));
var new_game = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(action,game,args);
if(cljs.core.truth_((function (){var and__5160__auto__ = ((new_game.cljs$core$IFn$_invoke$arity$1 ? new_game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"winner","winner",714604679)) : new_game.call(null,new cljs.core.Keyword(null,"winner","winner",714604679))) == null);
if(and__5160__auto__){
var or__5162__auto__ = (validator_fn.cljs$core$IFn$_invoke$arity$3 ? validator_fn.cljs$core$IFn$_invoke$arity$3(game,new_game,player_id) : validator_fn.call(null,game,new_game,player_id));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var fexpr__29267 = (teg_online.game.common_goal.cljs$core$IFn$_invoke$arity$1 ? teg_online.game.common_goal.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070)) : teg_online.game.common_goal.call(null,new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070)));
return (fexpr__29267.cljs$core$IFn$_invoke$arity$3 ? fexpr__29267.cljs$core$IFn$_invoke$arity$3(game,new_game,player_id) : fexpr__29267.call(null,game,new_game,player_id));
}
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_game,new cljs.core.Keyword(null,"winner","winner",714604679),player_id);
} else {
return new_game;
}
}
};
var G__29649 = function (game,var_args){
var args = null;
if (arguments.length > 1) {
var G__29691__i = 0, G__29691__a = new Array(arguments.length -  1);
while (G__29691__i < G__29691__a.length) {G__29691__a[G__29691__i] = arguments[G__29691__i + 1]; ++G__29691__i;}
  args = new cljs.core.IndexedSeq(G__29691__a,0,null);
} 
return G__29649__delegate.call(this,game,args);};
G__29649.cljs$lang$maxFixedArity = 1;
G__29649.cljs$lang$applyTo = (function (arglist__29694){
var game = cljs.core.first(arglist__29694);
var args = cljs.core.rest(arglist__29694);
return G__29649__delegate(game,args);
});
G__29649.cljs$core$IFn$_invoke$arity$variadic = G__29649__delegate;
return G__29649;
})()
;
});
teg_online.game.join_game = (function teg_online$game$join_game(game,id,name,type){
if(cljs.core.contains_QMARK_((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"players","players",-1361554569)) : game.call(null,new cljs.core.Keyword(null,"players","players",-1361554569))),id)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Player with id %1 already joined",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.Keyword(null,"turn-order","turn-order",669259588),cljs.core.conj,id),new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.assoc,id,teg_online.game.new_player(id,name,type));
}
});
teg_online.game.start_game = (function teg_online$game$start_game(game){
return teg_online.game.reset_current_turn(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(game,new cljs.core.Keyword(null,"turn","turn",75759344),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword("teg-online.game","add-army-1","teg-online.game/add-army-1",-776333194)], 0)));
});
teg_online.game.distribute_countries = (function teg_online$game$distribute_countries(var_args){
var G__29271 = arguments.length;
switch (G__29271) {
case 1:
return teg_online.game.distribute_countries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return teg_online.game.distribute_countries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(teg_online.game.distribute_countries.cljs$core$IFn$_invoke$arity$1 = (function (game){
return teg_online.game.distribute_countries.cljs$core$IFn$_invoke$arity$2(game,cljs.core.shuffle(cljs.core.keys(teg_online.board.countries)));
}));

(teg_online.game.distribute_countries.cljs$core$IFn$_invoke$arity$2 = (function (game,countries){
var countries_for_player = teg_online.utils.core.deal(countries,teg_online.game.get_players(game));
var temp = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(game);
var seq__29274_29756 = cljs.core.seq(countries_for_player);
var chunk__29275_29757 = null;
var count__29276_29758 = (0);
var i__29277_29759 = (0);
while(true){
if((i__29277_29759 < count__29276_29758)){
var vec__29338_29765 = chunk__29275_29757.cljs$core$IIndexed$_nth$arity$2(null,i__29277_29759);
var map__29341_29766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338_29765,(0),null);
var map__29341_29767__$1 = cljs.core.__destructure_map(map__29341_29766);
var player_29768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29341_29767__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var countries_29769__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338_29765,(1),null);
var seq__29342_29774 = cljs.core.seq(countries_29769__$1);
var chunk__29343_29775 = null;
var count__29344_29776 = (0);
var i__29345_29777 = (0);
while(true){
if((i__29345_29777 < count__29344_29776)){
var country_29783 = chunk__29343_29775.cljs$core$IIndexed$_nth$arity$2(null,i__29345_29777);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(temp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),country_29783], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),country_29783,new cljs.core.Keyword(null,"owner","owner",-392611939),player_29768,new cljs.core.Keyword(null,"army","army",842961270),(1)], null));


var G__29797 = seq__29342_29774;
var G__29798 = chunk__29343_29775;
var G__29799 = count__29344_29776;
var G__29800 = (i__29345_29777 + (1));
seq__29342_29774 = G__29797;
chunk__29343_29775 = G__29798;
count__29344_29776 = G__29799;
i__29345_29777 = G__29800;
continue;
} else {
var temp__5825__auto___29801 = cljs.core.seq(seq__29342_29774);
if(temp__5825__auto___29801){
var seq__29342_29805__$1 = temp__5825__auto___29801;
if(cljs.core.chunked_seq_QMARK_(seq__29342_29805__$1)){
var c__5694__auto___29807 = cljs.core.chunk_first(seq__29342_29805__$1);
var G__29808 = cljs.core.chunk_rest(seq__29342_29805__$1);
var G__29809 = c__5694__auto___29807;
var G__29810 = cljs.core.count(c__5694__auto___29807);
var G__29811 = (0);
seq__29342_29774 = G__29808;
chunk__29343_29775 = G__29809;
count__29344_29776 = G__29810;
i__29345_29777 = G__29811;
continue;
} else {
var country_29812 = cljs.core.first(seq__29342_29805__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(temp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),country_29812], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),country_29812,new cljs.core.Keyword(null,"owner","owner",-392611939),player_29768,new cljs.core.Keyword(null,"army","army",842961270),(1)], null));


var G__29818 = cljs.core.next(seq__29342_29805__$1);
var G__29820 = null;
var G__29821 = (0);
var G__29822 = (0);
seq__29342_29774 = G__29818;
chunk__29343_29775 = G__29820;
count__29344_29776 = G__29821;
i__29345_29777 = G__29822;
continue;
}
} else {
}
}
break;
}


var G__29824 = seq__29274_29756;
var G__29825 = chunk__29275_29757;
var G__29826 = count__29276_29758;
var G__29827 = (i__29277_29759 + (1));
seq__29274_29756 = G__29824;
chunk__29275_29757 = G__29825;
count__29276_29758 = G__29826;
i__29277_29759 = G__29827;
continue;
} else {
var temp__5825__auto___29828 = cljs.core.seq(seq__29274_29756);
if(temp__5825__auto___29828){
var seq__29274_29829__$1 = temp__5825__auto___29828;
if(cljs.core.chunked_seq_QMARK_(seq__29274_29829__$1)){
var c__5694__auto___29830 = cljs.core.chunk_first(seq__29274_29829__$1);
var G__29831 = cljs.core.chunk_rest(seq__29274_29829__$1);
var G__29832 = c__5694__auto___29830;
var G__29834 = cljs.core.count(c__5694__auto___29830);
var G__29835 = (0);
seq__29274_29756 = G__29831;
chunk__29275_29757 = G__29832;
count__29276_29758 = G__29834;
i__29277_29759 = G__29835;
continue;
} else {
var vec__29362_29836 = cljs.core.first(seq__29274_29829__$1);
var map__29365_29837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29362_29836,(0),null);
var map__29365_29838__$1 = cljs.core.__destructure_map(map__29365_29837);
var player_29839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29365_29838__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var countries_29840__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29362_29836,(1),null);
var seq__29366_29842 = cljs.core.seq(countries_29840__$1);
var chunk__29367_29843 = null;
var count__29368_29844 = (0);
var i__29369_29845 = (0);
while(true){
if((i__29369_29845 < count__29368_29844)){
var country_29846 = chunk__29367_29843.cljs$core$IIndexed$_nth$arity$2(null,i__29369_29845);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(temp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),country_29846], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),country_29846,new cljs.core.Keyword(null,"owner","owner",-392611939),player_29839,new cljs.core.Keyword(null,"army","army",842961270),(1)], null));


var G__29848 = seq__29366_29842;
var G__29849 = chunk__29367_29843;
var G__29850 = count__29368_29844;
var G__29851 = (i__29369_29845 + (1));
seq__29366_29842 = G__29848;
chunk__29367_29843 = G__29849;
count__29368_29844 = G__29850;
i__29369_29845 = G__29851;
continue;
} else {
var temp__5825__auto___29852__$1 = cljs.core.seq(seq__29366_29842);
if(temp__5825__auto___29852__$1){
var seq__29366_29853__$1 = temp__5825__auto___29852__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29366_29853__$1)){
var c__5694__auto___29854 = cljs.core.chunk_first(seq__29366_29853__$1);
var G__29855 = cljs.core.chunk_rest(seq__29366_29853__$1);
var G__29856 = c__5694__auto___29854;
var G__29857 = cljs.core.count(c__5694__auto___29854);
var G__29858 = (0);
seq__29366_29842 = G__29855;
chunk__29367_29843 = G__29856;
count__29368_29844 = G__29857;
i__29369_29845 = G__29858;
continue;
} else {
var country_29859 = cljs.core.first(seq__29366_29853__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(temp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),country_29859], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),country_29859,new cljs.core.Keyword(null,"owner","owner",-392611939),player_29839,new cljs.core.Keyword(null,"army","army",842961270),(1)], null));


var G__29864 = cljs.core.next(seq__29366_29853__$1);
var G__29865 = null;
var G__29866 = (0);
var G__29867 = (0);
seq__29366_29842 = G__29864;
chunk__29367_29843 = G__29865;
count__29368_29844 = G__29866;
i__29369_29845 = G__29867;
continue;
}
} else {
}
}
break;
}


var G__29869 = cljs.core.next(seq__29274_29829__$1);
var G__29870 = null;
var G__29871 = (0);
var G__29872 = (0);
seq__29274_29756 = G__29869;
chunk__29275_29757 = G__29870;
count__29276_29758 = G__29871;
i__29277_29759 = G__29872;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(temp);
}));

(teg_online.game.distribute_countries.cljs$lang$maxFixedArity = 2);

teg_online.game.distribute_goals = (function teg_online$game$distribute_goals(game){
var goals = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var rand_goal = (function (){
while(true){
var goal = cljs.core.rand_int((15));
if(cljs.core.contains_QMARK_(cljs.core.deref(goals),goal)){
continue;
} else {
return goal;
}
break;
}
});
var temp = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(game);
return cljs.core.deref(temp);
});
teg_online.game.add_army = teg_online.game.with_winner_check((function (game,country,army){
teg_online.game.assert_valid_country(game,country);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),country,new cljs.core.Keyword(null,"army","army",842961270)], null),cljs.core._PLUS_,army);
}));
teg_online.game.attack = teg_online.game.with_winner_check((function (game,p__29394,p__29397){
var vec__29407 = p__29394;
var attacker_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29407,(0),null);
var attacker_throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29407,(1),null);
var vec__29410 = p__29397;
var defender_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29410,(0),null);
var defender_throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29410,(1),null);
teg_online.game.assert_valid_country(game,attacker_id);

teg_online.game.assert_valid_country(game,defender_id);

teg_online.game.assert_neighbours(game,attacker_id,defender_id);

var current_player_29901 = teg_online.game.get_current_player(game);
teg_online.game.assert_country_owner(game,attacker_id,current_player_29901);

teg_online.game.assert_country_owner_any(game,defender_id,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"players","players",-1361554569)) : game.call(null,new cljs.core.Keyword(null,"players","players",-1361554569))),current_player_29901));

var vec__29416_29907 = teg_online.game.get_dice_count(game,attacker_id,defender_id);
var a_count_29908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29416_29907,(0),null);
var d_count_29909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29416_29907,(1),null);
teg_online.game.assert_valid_throw(game,attacker_id,a_count_29908,attacker_throw);

teg_online.game.assert_valid_throw(game,defender_id,d_count_29909,defender_throw);

teg_online.game.assert_valid_phase(game,new cljs.core.Keyword("teg-online.game","attack","teg-online.game/attack",-1298769630));

var dice_count = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.count(attacker_throw),cljs.core.count(defender_throw));
var attacker_wins = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,d){
return (a > d);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(dice_count,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,attacker_throw)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(dice_count,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,defender_throw)));
var defender_hits = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,attacker_wins));
var attacker_hits = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,attacker_wins));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),defender_id,new cljs.core.Keyword(null,"army","army",842961270)], null),cljs.core._,defender_hits),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),attacker_id,new cljs.core.Keyword(null,"army","army",842961270)], null),cljs.core._,attacker_hits);
}));
teg_online.game.invade = teg_online.game.with_winner_check((function (game,attacker_id,defender_id,moving_army){
teg_online.game.assert_valid_country(game,attacker_id);

teg_online.game.assert_valid_country(game,defender_id);

teg_online.game.assert_neighbours(game,attacker_id,defender_id);

teg_online.game.assert_zero_army(game,defender_id);

teg_online.game.assert_valid_invading_army(game,attacker_id,moving_army);

var current_player = teg_online.game.get_current_player(game);
teg_online.game.assert_country_owner(game,attacker_id,current_player);

teg_online.game.assert_country_owner_any(game,defender_id,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"players","players",-1361554569)) : game.call(null,new cljs.core.Keyword(null,"players","players",-1361554569))),current_player));

return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),attacker_id,new cljs.core.Keyword(null,"army","army",842961270)], null),cljs.core._,moving_army),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),defender_id,new cljs.core.Keyword(null,"army","army",842961270)], null),cljs.core._PLUS_,moving_army),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),defender_id,new cljs.core.Keyword(null,"owner","owner",-392611939)], null),current_player),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),new cljs.core.Keyword(null,"draw-card?","draw-card?",1953281860)], null),true);
}));
teg_online.game.regroup = teg_online.game.with_winner_check((function (game,src_id,dst_id,moving_army){
teg_online.game.assert_valid_country(game,src_id);

teg_online.game.assert_valid_country(game,dst_id);

teg_online.game.assert_neighbours(game,src_id,dst_id);

teg_online.game.assert_valid_regrouping_army(game,src_id,moving_army);

var current_player_29920 = teg_online.game.get_current_player(game);
teg_online.game.assert_country_owner(game,src_id,current_player_29920);

teg_online.game.assert_country_owner(game,dst_id,current_player_29920);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),src_id,new cljs.core.Keyword(null,"army","army",842961270)], null),cljs.core._,moving_army),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),dst_id,new cljs.core.Keyword(null,"army","army",842961270)], null),cljs.core._PLUS_,moving_army);
}));
teg_online.game.finish_action = teg_online.game.with_winner_check((function (game){
var game_SINGLEQUOTE_ = teg_online.game.finish_action_STAR_.cljs$core$IFn$_invoke$arity$1(game);
var current_player = teg_online.game.get_current_player(game_SINGLEQUOTE_);
if(cljs.core.not(teg_online.game.still_playing_QMARK_(game_SINGLEQUOTE_,current_player))){
return (teg_online.game.finish_action.cljs$core$IFn$_invoke$arity$1 ? teg_online.game.finish_action.cljs$core$IFn$_invoke$arity$1(game_SINGLEQUOTE_) : teg_online.game.finish_action.call(null,game_SINGLEQUOTE_));
} else {
return game_SINGLEQUOTE_;
}
}));
teg_online.game.surrender = teg_online.game.with_winner_check((function (game,player_id){
var game_SINGLEQUOTE_ = cljs.core.assoc_in(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player_id,new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null),false);
var still_playing = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(teg_online.game.still_playing_QMARK_,game_SINGLEQUOTE_),(game_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? game_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"turn-order","turn-order",669259588)) : game_SINGLEQUOTE_.call(null,new cljs.core.Keyword(null,"turn-order","turn-order",669259588))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(still_playing))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_SINGLEQUOTE_,new cljs.core.Keyword(null,"winner","winner",714604679),cljs.core.first(still_playing));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_id,teg_online.game.get_current_player(game_SINGLEQUOTE_))){
return teg_online.game.finish_action(game_SINGLEQUOTE_);
} else {
return game_SINGLEQUOTE_;
}
}
}));
teg_online.game.draw_card = teg_online.game.with_winner_check((function (game,country_id){
if(cljs.core.truth_(teg_online.game.draw_card_QMARK_(game))){
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),country_id,new cljs.core.Keyword(null,"owner","owner",-392611939)], null)))){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),country_id,new cljs.core.Keyword(null,"owner","owner",-392611939)], null),teg_online.game.get_current_player(game)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),country_id,new cljs.core.Keyword(null,"used?","used?",-1692940128)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),new cljs.core.Keyword(null,"draw-card?","draw-card?",1953281860)], null),false);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(teg_online.utils.core.format.cljs$core$IFn$_invoke$arity$variadic("Current player is not allowed to draw card %1 because it belongs to other player!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([country_id], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"country","country",312965309),country_id], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Current player is not allowed to draw card!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game","game",-441523833),game], null));
}
}));
teg_online.game.check_unused_cards = teg_online.game.with_winner_check((function (game){
var player = teg_online.game.get_current_player(game);
var countries = cljs.core.set(teg_online.game.player_countries(game,player));
var cards = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(countries,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"country","country",312965309),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"used?","used?",-1692940128),cljs.core.map.cljs$core$IFn$_invoke$arity$2((game.cljs$core$IFn$_invoke$arity$1 ? game.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cards","cards",169174038)) : game.call(null,new cljs.core.Keyword(null,"cards","cards",169174038))),teg_online.game.get_player_cards(game,player)))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (game__$1,card){
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750),card,new cljs.core.Keyword(null,"army","army",842961270)], null),cljs.core._PLUS_,(2)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),card,new cljs.core.Keyword(null,"used?","used?",-1692940128)], null),true);
}),game,cards);
}));
teg_online.game.exchange_cards = teg_online.game.with_winner_check((function (game,p__29427){
var vec__29431 = p__29427;
var card_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29431,(0),null);
var card_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29431,(1),null);
var card_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29431,(2),null);
var player_id = teg_online.game.get_current_player(game);
if(clojure.set.subset_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([card_1,card_2,card_3]),cljs.core.set(teg_online.game.get_player_cards(game,player_id)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Current player doesn't own the cards being exchanged",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_1,card_2,card_3], null)], null));
}

if(cljs.core.truth_(teg_online.game.valid_exchange_QMARK_(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_1,card_2,card_3], null)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cards are not eligible for exchange",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_1,card_2,card_3], null)], null));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),card_1,new cljs.core.Keyword(null,"owner","owner",-392611939)], null),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),card_1,new cljs.core.Keyword(null,"used?","used?",-1692940128)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),card_2,new cljs.core.Keyword(null,"owner","owner",-392611939)], null),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),card_2,new cljs.core.Keyword(null,"used?","used?",-1692940128)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),card_3,new cljs.core.Keyword(null,"owner","owner",-392611939)], null),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),card_3,new cljs.core.Keyword(null,"used?","used?",-1692940128)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-turn","current-turn",-593026573),new cljs.core.Keyword(null,"extra-army","extra-army",-1408930582)], null),cljs.core._PLUS_,teg_online.game.get_exchange_bonus.cljs$core$IFn$_invoke$arity$2(game,player_id)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player_id,new cljs.core.Keyword(null,"exchanges","exchanges",-764358941)], null),cljs.core.inc);
}));

//# sourceMappingURL=teg_online.game.js.map
