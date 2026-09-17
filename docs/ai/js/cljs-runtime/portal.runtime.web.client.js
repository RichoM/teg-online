goog.provide('portal.runtime.web.client');
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.web !== 'undefined') && (typeof portal.runtime.web.client !== 'undefined') && (typeof portal.runtime.web.client.connection !== 'undefined')){
} else {
portal.runtime.web.client.connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.web !== 'undefined') && (typeof portal.runtime.web.client !== 'undefined') && (typeof portal.runtime.web.client.session !== 'undefined')){
} else {
portal.runtime.web.client.session = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Keyword("portal.runtime.web.client","id","portal.runtime.web.client/id",964542999)], null));
}
portal.runtime.web.client.request = (function portal$runtime$web$client$request(var_args){
var G__20608 = arguments.length;
switch (G__20608) {
case 1:
return portal.runtime.web.client.request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.runtime.web.client.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(portal.runtime.web.client.request.cljs$core$IFn$_invoke$arity$1 = (function (message){
return portal.runtime.web.client.request.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portal.runtime.web.client","id","portal.runtime.web.client/id",964542999),message);
}));

(portal.runtime.web.client.request.cljs$core$IFn$_invoke$arity$2 = (function (_session_id,message){
var temp__5823__auto__ = cljs.core.deref(portal.runtime.web.client.connection);
if(cljs.core.truth_(temp__5823__auto__)){
var child_window = temp__5823__auto__;
return portal.runtime.read(child_window.portal.ui.rpc.handler(portal.runtime.write(message,cljs.core.deref(portal.runtime.web.client.session))),cljs.core.deref(portal.runtime.web.client.session));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Portal not open",message);
}
}));

(portal.runtime.web.client.request.cljs$lang$maxFixedArity = 2);

portal.runtime.web.client.push_state = (function portal$runtime$web$client$push_state(session_id,new_value){
portal.runtime.web.client.request.cljs$core$IFn$_invoke$arity$2(session_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("portal.rpc","push-state","portal.rpc/push-state",-1138005881),new cljs.core.Keyword(null,"state","state",-1988618099),new_value], null));

portal.runtime.update_selected.cljs$core$IFn$_invoke$arity$2(session_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_value], null));

return new_value;
});

/**
* @constructor
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
portal.runtime.web.client.Portal = (function (session_id){
this.session_id = session_id;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
(portal.runtime.web.client.Portal.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(portal.runtime.sessions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.session_id,new cljs.core.Keyword(null,"selected","selected",574897764)], null)));
}));

(portal.runtime.web.client.Portal.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_this,new_value){
var self__ = this;
var _this__$1 = this;
return portal.runtime.web.client.push_state(self__.session_id,new_value);
}));

(portal.runtime.web.client.Portal.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,(function (){var G__20609 = cljs.core.deref(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20609) : f.call(null,G__20609));
})());
}));

(portal.runtime.web.client.Portal.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,(function (){var G__20610 = cljs.core.deref(this$__$1);
var G__20611 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20610,G__20611) : f.call(null,G__20610,G__20611));
})());
}));

(portal.runtime.web.client.Portal.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,(function (){var G__20612 = cljs.core.deref(this$__$1);
var G__20613 = a;
var G__20614 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20612,G__20613,G__20614) : f.call(null,G__20612,G__20613,G__20614));
})());
}));

(portal.runtime.web.client.Portal.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.deref(this$__$1),a,b,xs));
}));

(portal.runtime.web.client.Portal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-id","session-id",493471176,null)], null);
}));

(portal.runtime.web.client.Portal.cljs$lang$type = true);

(portal.runtime.web.client.Portal.cljs$lang$ctorStr = "portal.runtime.web.client/Portal");

(portal.runtime.web.client.Portal.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"portal.runtime.web.client/Portal");
}));

/**
 * Positional factory function for portal.runtime.web.client/Portal.
 */
portal.runtime.web.client.__GT_Portal = (function portal$runtime$web$client$__GT_Portal(session_id){
return (new portal.runtime.web.client.Portal(session_id));
});

portal.runtime.web.client.make_atom = (function portal$runtime$web$client$make_atom(session_id){
return (new portal.runtime.web.client.Portal(session_id));
});
portal.runtime.web.client.sessions = (function portal$runtime$web$client$sessions(){
if(cljs.core.truth_(cljs.core.deref(portal.runtime.web.client.connection))){
return (new cljs.core.List(null,portal.runtime.web.client.make_atom(new cljs.core.Keyword("portal.runtime.web.client","id","portal.runtime.web.client/id",964542999)),null,(1),null));
} else {
return null;
}
});

//# sourceMappingURL=portal.runtime.web.client.js.map
