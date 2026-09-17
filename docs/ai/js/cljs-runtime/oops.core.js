goog.provide('oops.core');
goog.scope(function(){
  oops.core.goog$module$goog$object = goog.module.get('goog.object');
});
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__29077 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__29077)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__29077)){
var G__29079 = (console["error"]);
var G__29080 = msg;
var G__29081 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__29078 = oops.state.get_console_reporter();
return (fexpr__29078.cljs$core$IFn$_invoke$arity$3 ? fexpr__29078.cljs$core$IFn$_invoke$arity$3(G__29079,G__29080,G__29081) : fexpr__29078.call(null,G__29079,G__29080,G__29081));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__29077)){
return null;
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29077))));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__29087 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__29087)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__29087)){
var G__29090 = (console["warn"]);
var G__29091 = msg;
var G__29092 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__29089 = oops.state.get_console_reporter();
return (fexpr__29089.cljs$core$IFn$_invoke$arity$3 ? fexpr__29089.cljs$core$IFn$_invoke$arity$3(G__29090,G__29091,G__29092) : fexpr__29089.call(null,G__29090,G__29091,G__29092));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__29087)){
return null;
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29087))));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__5903__auto__ = [];
var len__5897__auto___29420 = arguments.length;
var i__5898__auto___29421 = (0);
while(true){
if((i__5898__auto___29421 < len__5897__auto___29420)){
args__5903__auto__.push((arguments[i__5898__auto___29421]));

var G__29428 = (i__5898__auto___29421 + (1));
i__5898__auto___29421 = G__29428;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__29104){
var vec__29105 = p__29104;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29105,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__29109_29430 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__29109_29430)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__29109_29430)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__29109_29430)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__29109_29430)){
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29109_29430))));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq29101){
var G__29102 = cljs.core.first(seq29101);
var seq29101__$1 = cljs.core.next(seq29101);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29102,seq29101__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((cljs.core.boolean_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((typeof obj === 'number')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((typeof obj === 'string')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__5160__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(oops.core.goog$module$goog$object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)):true):true);
if(cljs.core.truth_(and__5160__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5827__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5827__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
return true;

}
}
} else {
var descriptor_29125 = temp__5827__auto__;
var temp__5827__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_29125);
if((temp__5827__auto____$1 == null)){
return true;
} else {
var reason_29126 = temp__5827__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_29126,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
}
}
} else {
return true;
}
} else {
return and__5160__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(typeof fn === 'function'){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_29205 = oops.config.get_child_factory();
var child_factory_29205__$1 = (function (){var G__29214 = child_factory_29205;
var G__29214__$1 = (((G__29214 instanceof cljs.core.Keyword))?G__29214.fqn:null);
switch (G__29214__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_29205;

}
})();

var child_obj_29204 = (child_factory_29205__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_29205__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_29205__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_29204);
} else {
}

return child_obj_29204;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_29223 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_29223);

return selector_path_29223;
} else {
var selector_path_29224 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_29224);

return selector_path_29224;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5829__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5829__auto__ == null)){
return null;
} else {
var issue_29236 = temp__5829__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_29236);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_29286 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_29286,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_29278 = (function (){var path_29276 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_29276,(0));

return path_29276;
})();
var len_29279 = path_29278.length;
var i_29280 = (0);
var obj_29281 = obj;
while(true){
if((i_29280 < len_29279)){
var mode_29282 = (path_29278[i_29280]);
var key_29283 = (path_29278[(i_29280 + (1))]);
var next_obj_29284 = oops.core.get_key_dynamically(obj_29281,key_29283,mode_29282);
var G__29309 = mode_29282;
switch (G__29309) {
case (0):
var G__29462 = (i_29280 + (2));
var G__29463 = next_obj_29284;
i_29280 = G__29462;
obj_29281 = G__29463;
continue;

break;
case (1):
if((!((next_obj_29284 == null)))){
var G__29464 = (i_29280 + (2));
var G__29465 = next_obj_29284;
i_29280 = G__29464;
obj_29281 = G__29465;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29284 == null)))){
var G__29466 = (i_29280 + (2));
var G__29467 = next_obj_29284;
i_29280 = G__29466;
obj_29281 = G__29467;
continue;
} else {
var G__29478 = (i_29280 + (2));
var G__29479 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29281,key_29283);
i_29280 = G__29478;
obj_29281 = G__29479;
continue;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29309))));

}
} else {
return obj_29281;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_29346 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_29346,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_29322 = (function (){var path_29321 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_29321,(0));

return path_29321;
})();
var len_29323 = path_29322.length;
if((len_29323 < (4))){
return [obj,(function (){var path_29325 = path_29322;
var len_29326 = path_29325.length;
var i_29327 = (0);
var obj_29328 = obj;
while(true){
if((i_29327 < len_29326)){
var mode_29329 = (path_29325[i_29327]);
var key_29330 = (path_29325[(i_29327 + (1))]);
var next_obj_29331 = oops.core.get_key_dynamically(obj_29328,key_29330,mode_29329);
var G__29352 = mode_29329;
switch (G__29352) {
case (0):
var G__29500 = (i_29327 + (2));
var G__29501 = next_obj_29331;
i_29327 = G__29500;
obj_29328 = G__29501;
continue;

break;
case (1):
if((!((next_obj_29331 == null)))){
var G__29504 = (i_29327 + (2));
var G__29505 = next_obj_29331;
i_29327 = G__29504;
obj_29328 = G__29505;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29331 == null)))){
var G__29506 = (i_29327 + (2));
var G__29507 = next_obj_29331;
i_29327 = G__29506;
obj_29328 = G__29507;
continue;
} else {
var G__29508 = (i_29327 + (2));
var G__29509 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29328,key_29330);
i_29327 = G__29508;
obj_29328 = G__29509;
continue;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29352))));

}
} else {
return obj_29328;
}
break;
}
})()];
} else {
var target_obj_29324 = (function (){var path_29332 = path_29322.slice((0),(len_29323 - (2)));
var len_29333 = path_29332.length;
var i_29334 = (0);
var obj_29335 = obj;
while(true){
if((i_29334 < len_29333)){
var mode_29336 = (path_29332[i_29334]);
var key_29337 = (path_29332[(i_29334 + (1))]);
var next_obj_29338 = oops.core.get_key_dynamically(obj_29335,key_29337,mode_29336);
var G__29359 = mode_29336;
switch (G__29359) {
case (0):
var G__29518 = (i_29334 + (2));
var G__29519 = next_obj_29338;
i_29334 = G__29518;
obj_29335 = G__29519;
continue;

break;
case (1):
if((!((next_obj_29338 == null)))){
var G__29525 = (i_29334 + (2));
var G__29526 = next_obj_29338;
i_29334 = G__29525;
obj_29335 = G__29526;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29338 == null)))){
var G__29529 = (i_29334 + (2));
var G__29530 = next_obj_29338;
i_29334 = G__29529;
obj_29335 = G__29530;
continue;
} else {
var G__29531 = (i_29334 + (2));
var G__29532 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29335,key_29337);
i_29334 = G__29531;
obj_29335 = G__29532;
continue;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29359))));

}
} else {
return obj_29335;
}
break;
}
})();
return [target_obj_29324,(function (){var path_29339 = [(path_29322[(len_29323 - (2))]),(path_29322[(len_29323 - (1))])];
var len_29340 = path_29339.length;
var i_29341 = (0);
var obj_29342 = target_obj_29324;
while(true){
if((i_29341 < len_29340)){
var mode_29343 = (path_29339[i_29341]);
var key_29344 = (path_29339[(i_29341 + (1))]);
var next_obj_29345 = oops.core.get_key_dynamically(obj_29342,key_29344,mode_29343);
var G__29365 = mode_29343;
switch (G__29365) {
case (0):
var G__29547 = (i_29341 + (2));
var G__29548 = next_obj_29345;
i_29341 = G__29547;
obj_29342 = G__29548;
continue;

break;
case (1):
if((!((next_obj_29345 == null)))){
var G__29549 = (i_29341 + (2));
var G__29550 = next_obj_29345;
i_29341 = G__29549;
obj_29342 = G__29550;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29345 == null)))){
var G__29551 = (i_29341 + (2));
var G__29552 = next_obj_29345;
i_29341 = G__29551;
obj_29342 = G__29552;
continue;
} else {
var G__29553 = (i_29341 + (2));
var G__29554 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29342,key_29344);
i_29341 = G__29553;
obj_29342 = G__29554;
continue;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29365))));

}
} else {
return obj_29342;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_29397 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_29397,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_29380 = (function (){var path_29377 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_29377,(1));

return path_29377;
})();
var len_29387 = path_29380.length;
var parent_obj_path_29388 = path_29380.slice((0),(len_29387 - (2)));
var key_29383 = (path_29380[(len_29387 - (1))]);
var mode_29385 = (path_29380[(len_29387 - (2))]);
var parent_obj_29389 = (function (){var path_29390 = parent_obj_path_29388;
var len_29391 = path_29390.length;
var i_29392 = (0);
var obj_29393 = obj;
while(true){
if((i_29392 < len_29391)){
var mode_29394 = (path_29390[i_29392]);
var key_29395 = (path_29390[(i_29392 + (1))]);
var next_obj_29396 = oops.core.get_key_dynamically(obj_29393,key_29395,mode_29394);
var G__29404 = mode_29394;
switch (G__29404) {
case (0):
var G__29571 = (i_29392 + (2));
var G__29572 = next_obj_29396;
i_29392 = G__29571;
obj_29393 = G__29572;
continue;

break;
case (1):
if((!((next_obj_29396 == null)))){
var G__29578 = (i_29392 + (2));
var G__29579 = next_obj_29396;
i_29392 = G__29578;
obj_29393 = G__29579;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29396 == null)))){
var G__29583 = (i_29392 + (2));
var G__29584 = next_obj_29396;
i_29392 = G__29583;
obj_29393 = G__29584;
continue;
} else {
var G__29585 = (i_29392 + (2));
var G__29586 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29393,key_29395);
i_29392 = G__29585;
obj_29393 = G__29586;
continue;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29404))));

}
} else {
return obj_29393;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_29389,key_29383,val,mode_29385);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
