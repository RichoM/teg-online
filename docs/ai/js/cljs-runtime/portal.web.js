goog.provide('portal.web');
portal.web.send_BANG_ = portal.runtime.web.launcher.send_BANG_;
goog.exportSymbol('portal.web.send_BANG_', portal.web.send_BANG_);
/**
 * Tap target function.
 */
portal.web.submit = (function portal$web$submit(value){
portal.runtime.update_value(value);

return null;
});
goog.exportSymbol('portal.web.submit', portal.web.submit);
/**
 * Add portal as a tap> target.
 */
portal.web.tap = (function portal$web$tap(){
cljs.core.add_tap(new cljs.core.Var(function(){return portal.web.submit;},new cljs.core.Symbol("portal.web","submit","portal.web/submit",1322595104,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"export","export",214356590),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portal.web","portal.web",1079961926,null),new cljs.core.Symbol(null,"submit","submit",1591216210,null),"portal/web.cljs",22,true,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),"Tap target function.",(cljs.core.truth_(portal.web.submit)?portal.web.submit.cljs$lang$test:null)])));

return null;
});
goog.exportSymbol('portal.web.tap', portal.web.tap);
portal.web.long__GT_short = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("portal.colors","theme","portal.colors/theme",-711122158),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword("portal.launcher","app","portal.launcher/app",1519299179),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword("portal.launcher","host","portal.launcher/host",1596431007),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword("portal.launcher","port","portal.launcher/port",394919248),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword("portal.launcher","window-title","portal.launcher/window-title",-1073598873),new cljs.core.Keyword(null,"window-title","window-title",-2079236731)], null);
portal.web.rename = (function portal$web$rename(options){
return clojure.set.rename_keys(options,portal.web.long__GT_short);
});
/**
 * Set default options for `open`.
 *   Parameters passed directly to either will override defaults.
 */
portal.web.set_defaults_BANG_ = (function portal$web$set_defaults_BANG_(options){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(portal.runtime.default_options,cljs.core.merge,portal.web.rename(options));
});
/**
 * Open a new inspector window.
 */
portal.web.open = (function portal$web$open(var_args){
var G__20752 = arguments.length;
switch (G__20752) {
case 0:
return portal.web.open.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return portal.web.open.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});
goog.exportSymbol('portal.web.open', portal.web.open);

(portal.web.open.cljs$core$IFn$_invoke$arity$0 = (function (){
return portal.web.open.cljs$core$IFn$_invoke$arity$1(null);
}));

(portal.web.open.cljs$core$IFn$_invoke$arity$1 = (function (options){
portal.spec.assert_options(options);

return portal.runtime.web.launcher.open(portal.web.rename(options));
}));

(portal.web.open.cljs$lang$maxFixedArity = 1);

/**
 * Open a new portal window to inspect a particular value.
 * 
 * - value: a value to inspect.
 * - options: see `portal.web/open` for options.
 */
portal.web.inspect = (function portal$web$inspect(var_args){
var G__20754 = arguments.length;
switch (G__20754) {
case 1:
return portal.web.inspect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.web.inspect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(portal.web.inspect.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.web.open.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null));
}));

(portal.web.inspect.cljs$core$IFn$_invoke$arity$2 = (function (value,options){
return portal.web.open.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"value","value",305978217),value));
}));

(portal.web.inspect.cljs$lang$maxFixedArity = 2);

/**
 * Close all current inspector windows.
 */
portal.web.close = (function portal$web$close(){
portal.runtime.web.launcher.close();

return null;
});
goog.exportSymbol('portal.web.close', portal.web.close);
/**
 * Clear all values.
 */
portal.web.clear = (function portal$web$clear(){
portal.runtime.web.launcher.clear();

return null;
});
goog.exportSymbol('portal.web.clear', portal.web.clear);
/**
 * Register a var with portal. For now, the var should be a 1 arity fn.
 * 
 *   Example: `(register! #'identity)`
 * 
 *   The function name and doc string will show up in the command palette.
 */
portal.web.register_BANG_ = (function portal$web$register_BANG_(var$){
portal.runtime.register_BANG_.cljs$core$IFn$_invoke$arity$1(var$);

return null;
});
/**
 * Evaluate ClojureScript source given as a string in the UI runtime.
 */
portal.web.eval_str = (function portal$web$eval_str(var_args){
var G__20756 = arguments.length;
switch (G__20756) {
case 1:
return portal.web.eval_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return portal.web.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(portal.web.eval_str.cljs$core$IFn$_invoke$arity$1 = (function (code){
return portal.web.eval_str.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"all","all",892129742),code,null);
}));

(portal.web.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (_portal,code,opts){
var result = portal.runtime.web.launcher.eval_str(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"code","code",1586293142),code));
var G__20757 = result;
if(cljs.core.not(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__20757);
} else {
return G__20757;
}
}));

(portal.web.eval_str.cljs$lang$maxFixedArity = 3);

/**
 * Get all current portal sessions.
 */
portal.web.sessions = (function portal$web$sessions(){
return portal.runtime.web.client.sessions();
});
if((typeof portal !== 'undefined') && (typeof portal.web !== 'undefined') && (typeof portal.web.init_QMARK_ !== 'undefined')){
} else {
portal.web.init_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
portal.web.init = (function portal$web$init(){
if(cljs.core.truth_(cljs.core.deref(portal.web.init_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(portal.web.init_QMARK_,true);

portal.runtime.web.launcher.init(cljs.core.deref(portal.runtime.default_options));

return portal.shortcuts.add_BANG_(new cljs.core.Keyword("portal.web","init","portal.web/init",2147026124),(function (log){
if(cljs.core.truth_(portal.shortcuts.match_QMARK_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("portal.shortcuts","osx","portal.shortcuts/osx",300522451),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["shift",null,"meta",null,"o",null], null), null),new cljs.core.Keyword("portal.shortcuts","default","portal.shortcuts/default",71461651),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["shift",null,"control",null,"o",null], null), null)], null),log))){
return portal.web.open.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
}));
}
});
setTimeout(portal.web.init,(0));

//# sourceMappingURL=portal.web.js.map
