goog.provide('portal.resources');
portal.resources.resource = (function portal$resources$resource(_resource_name){
return null;
});
if((typeof portal !== 'undefined') && (typeof portal.resources !== 'undefined') && (typeof portal.resources.resources !== 'undefined')){
} else {
portal.resources.resources = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
portal.resources.inline = (function portal$resources$inline(resourece_name){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(portal.resources.resources),resourece_name);
});

//# sourceMappingURL=portal.resources.js.map
