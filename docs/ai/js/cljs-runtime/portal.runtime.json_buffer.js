goog.provide('portal.runtime.json_buffer');
portal.runtime.json_buffer._shift = (function portal$runtime$json_buffer$_shift(this$){
return (this$.cljs$core$IFn$_invoke$arity$0 ? this$.cljs$core$IFn$_invoke$arity$0() : this$.call(null));
});
portal.runtime.json_buffer.shifter = (function portal$runtime$json_buffer$shifter(source){
var this$ = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(0)], null));
return (function (){
var n = this$.n;
var result = (source[n]);
(this$.n = (n + (1)));

return result;
});
});
portal.runtime.json_buffer.__GT_reader = (function portal$runtime$json_buffer$__GT_reader(data){
return portal.runtime.json_buffer.shifter(JSON.parse(data));
});
portal.runtime.json_buffer.push_null = (function portal$runtime$json_buffer$push_null(buffer){
var G__20266 = buffer;
G__20266.push(null);

return G__20266;
});
portal.runtime.json_buffer.push_bool = (function portal$runtime$json_buffer$push_bool(buffer,value){
var G__20267 = buffer;
G__20267.push(value);

return G__20267;
});
portal.runtime.json_buffer.push_long = (function portal$runtime$json_buffer$push_long(buffer,value){
var G__20271 = buffer;
G__20271.push(value);

return G__20271;
});
portal.runtime.json_buffer.push_double = (function portal$runtime$json_buffer$push_double(buffer,value){
var G__20272 = buffer;
G__20272.push(value);

return G__20272;
});
portal.runtime.json_buffer.push_string = (function portal$runtime$json_buffer$push_string(buffer,value){
var G__20275 = buffer;
G__20275.push(value);

return G__20275;
});
portal.runtime.json_buffer.push_value = (function portal$runtime$json_buffer$push_value(buffer,value){
if((value == null)){
return portal.runtime.json_buffer.push_null(buffer);
} else {
if(cljs.core.boolean_QMARK_(value)){
return portal.runtime.json_buffer.push_bool(buffer,value);
} else {
if(cljs.core.int_QMARK_(value)){
return portal.runtime.json_buffer.push_long(buffer,value);
} else {
if(cljs.core.double_QMARK_(value)){
return portal.runtime.json_buffer.push_double(buffer,value);
} else {
if(typeof value === 'string'){
return portal.runtime.json_buffer.push_string(buffer,value);
} else {
return null;
}
}
}
}
}
});
portal.runtime.json_buffer.next_null = (function portal$runtime$json_buffer$next_null(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_bool = (function portal$runtime$json_buffer$next_bool(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_long = (function portal$runtime$json_buffer$next_long(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_double = (function portal$runtime$json_buffer$next_double(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_string = (function portal$runtime$json_buffer$next_string(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_value = (function portal$runtime$json_buffer$next_value(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.with_buffer = (function portal$runtime$json_buffer$with_buffer(f,value){
return JSON.stringify((function (){var G__20283 = (new Array());
var G__20284 = value;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20283,G__20284) : f.call(null,G__20283,G__20284));
})());
});

//# sourceMappingURL=portal.runtime.json_buffer.js.map
