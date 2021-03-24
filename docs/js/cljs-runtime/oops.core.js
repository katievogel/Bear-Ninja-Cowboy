goog.provide('oops.core');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__53052 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__53052)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__53052)){
var G__53054 = (console["error"]);
var G__53055 = msg;
var G__53056 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__53053 = oops.state.get_console_reporter();
return (fexpr__53053.cljs$core$IFn$_invoke$arity$3 ? fexpr__53053.cljs$core$IFn$_invoke$arity$3(G__53054,G__53055,G__53056) : fexpr__53053.call(null,G__53054,G__53055,G__53056));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__53052)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53052)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__53057 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__53057)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__53057)){
var G__53059 = (console["warn"]);
var G__53060 = msg;
var G__53061 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__53058 = oops.state.get_console_reporter();
return (fexpr__53058.cljs$core$IFn$_invoke$arity$3 ? fexpr__53058.cljs$core$IFn$_invoke$arity$3(G__53059,G__53060,G__53061) : fexpr__53058.call(null,G__53059,G__53060,G__53061));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__53057)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53057)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53134 = arguments.length;
var i__4737__auto___53135 = (0);
while(true){
if((i__4737__auto___53135 < len__4736__auto___53134)){
args__4742__auto__.push((arguments[i__4737__auto___53135]));

var G__53136 = (i__4737__auto___53135 + (1));
i__4737__auto___53135 = G__53136;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__53064){
var vec__53065 = p__53064;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53065,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__53068_53137 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__53068_53137)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__53068_53137)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__53068_53137)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__53068_53137)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53068_53137)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq53062){
var G__53063 = cljs.core.first(seq53062);
var seq53062__$1 = cljs.core.next(seq53062);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53063,seq53062__$1);
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
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
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

var and__4115__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)):true):true);
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5737__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5737__auto__ == null)){
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
var descriptor_53069 = temp__5737__auto__;
var temp__5737__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_53069);
if((temp__5737__auto____$1 == null)){
return true;
} else {
var reason_53070 = temp__5737__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_53070,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
}
}
} else {
return true;
}
} else {
return and__4115__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_53072 = oops.config.get_child_factory();
var child_factory_53072__$1 = (function (){var G__53073 = child_factory_53072;
var G__53073__$1 = (((G__53073 instanceof cljs.core.Keyword))?G__53073.fqn:null);
switch (G__53073__$1) {
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
return child_factory_53072;

}
})();

var child_obj_53071 = (child_factory_53072__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_53072__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_53072__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_53071);
} else {
}

return child_obj_53071;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_53076 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_53076);

return selector_path_53076;
} else {
var selector_path_53077 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_53077);

return selector_path_53077;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5739__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var issue_53078 = temp__5739__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_53078);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_53087 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_53087,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_53080 = (function (){var path_53079 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_53079,(0));

return path_53079;
})();
var len_53081 = path_53080.length;
var i_53082 = (0);
var obj_53083 = obj;
while(true){
if((i_53082 < len_53081)){
var mode_53084 = (path_53080[i_53082]);
var key_53085 = (path_53080[(i_53082 + (1))]);
var next_obj_53086 = oops.core.get_key_dynamically(obj_53083,key_53085,mode_53084);
var G__53088 = mode_53084;
switch (G__53088) {
case (0):
var G__53158 = (i_53082 + (2));
var G__53159 = next_obj_53086;
i_53082 = G__53158;
obj_53083 = G__53159;
continue;

break;
case (1):
if((!((next_obj_53086 == null)))){
var G__53161 = (i_53082 + (2));
var G__53162 = next_obj_53086;
i_53082 = G__53161;
obj_53083 = G__53162;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_53086 == null)))){
var G__53163 = (i_53082 + (2));
var G__53164 = next_obj_53086;
i_53082 = G__53163;
obj_53083 = G__53164;
continue;
} else {
var G__53165 = (i_53082 + (2));
var G__53166 = oops.core.punch_key_dynamically_BANG_.call(null,obj_53083,key_53085);
i_53082 = G__53165;
obj_53083 = G__53166;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53088)].join('')));

}
} else {
return obj_53083;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_53114 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_53114,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_53090 = (function (){var path_53089 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_53089,(0));

return path_53089;
})();
var len_53091 = path_53090.length;
if((len_53091 < (4))){
return [obj,(function (){var path_53093 = path_53090;
var len_53094 = path_53093.length;
var i_53095 = (0);
var obj_53096 = obj;
while(true){
if((i_53095 < len_53094)){
var mode_53097 = (path_53093[i_53095]);
var key_53098 = (path_53093[(i_53095 + (1))]);
var next_obj_53099 = oops.core.get_key_dynamically(obj_53096,key_53098,mode_53097);
var G__53115 = mode_53097;
switch (G__53115) {
case (0):
var G__53170 = (i_53095 + (2));
var G__53171 = next_obj_53099;
i_53095 = G__53170;
obj_53096 = G__53171;
continue;

break;
case (1):
if((!((next_obj_53099 == null)))){
var G__53172 = (i_53095 + (2));
var G__53173 = next_obj_53099;
i_53095 = G__53172;
obj_53096 = G__53173;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_53099 == null)))){
var G__53174 = (i_53095 + (2));
var G__53175 = next_obj_53099;
i_53095 = G__53174;
obj_53096 = G__53175;
continue;
} else {
var G__53176 = (i_53095 + (2));
var G__53177 = oops.core.punch_key_dynamically_BANG_.call(null,obj_53096,key_53098);
i_53095 = G__53176;
obj_53096 = G__53177;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53115)].join('')));

}
} else {
return obj_53096;
}
break;
}
})()];
} else {
var target_obj_53092 = (function (){var path_53100 = path_53090.slice((0),(len_53091 - (2)));
var len_53101 = path_53100.length;
var i_53102 = (0);
var obj_53103 = obj;
while(true){
if((i_53102 < len_53101)){
var mode_53104 = (path_53100[i_53102]);
var key_53105 = (path_53100[(i_53102 + (1))]);
var next_obj_53106 = oops.core.get_key_dynamically(obj_53103,key_53105,mode_53104);
var G__53116 = mode_53104;
switch (G__53116) {
case (0):
var G__53179 = (i_53102 + (2));
var G__53180 = next_obj_53106;
i_53102 = G__53179;
obj_53103 = G__53180;
continue;

break;
case (1):
if((!((next_obj_53106 == null)))){
var G__53181 = (i_53102 + (2));
var G__53182 = next_obj_53106;
i_53102 = G__53181;
obj_53103 = G__53182;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_53106 == null)))){
var G__53183 = (i_53102 + (2));
var G__53184 = next_obj_53106;
i_53102 = G__53183;
obj_53103 = G__53184;
continue;
} else {
var G__53185 = (i_53102 + (2));
var G__53186 = oops.core.punch_key_dynamically_BANG_.call(null,obj_53103,key_53105);
i_53102 = G__53185;
obj_53103 = G__53186;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53116)].join('')));

}
} else {
return obj_53103;
}
break;
}
})();
return [target_obj_53092,(function (){var path_53107 = [(path_53090[(len_53091 - (2))]),(path_53090[(len_53091 - (1))])];
var len_53108 = path_53107.length;
var i_53109 = (0);
var obj_53110 = target_obj_53092;
while(true){
if((i_53109 < len_53108)){
var mode_53111 = (path_53107[i_53109]);
var key_53112 = (path_53107[(i_53109 + (1))]);
var next_obj_53113 = oops.core.get_key_dynamically(obj_53110,key_53112,mode_53111);
var G__53117 = mode_53111;
switch (G__53117) {
case (0):
var G__53190 = (i_53109 + (2));
var G__53191 = next_obj_53113;
i_53109 = G__53190;
obj_53110 = G__53191;
continue;

break;
case (1):
if((!((next_obj_53113 == null)))){
var G__53192 = (i_53109 + (2));
var G__53193 = next_obj_53113;
i_53109 = G__53192;
obj_53110 = G__53193;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_53113 == null)))){
var G__53194 = (i_53109 + (2));
var G__53195 = next_obj_53113;
i_53109 = G__53194;
obj_53110 = G__53195;
continue;
} else {
var G__53196 = (i_53109 + (2));
var G__53197 = oops.core.punch_key_dynamically_BANG_.call(null,obj_53110,key_53112);
i_53109 = G__53196;
obj_53110 = G__53197;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53117)].join('')));

}
} else {
return obj_53110;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_53132 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_53132,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_53119 = (function (){var path_53118 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_53118,(1));

return path_53118;
})();
var len_53122 = path_53119.length;
var parent_obj_path_53123 = path_53119.slice((0),(len_53122 - (2)));
var key_53120 = (path_53119[(len_53122 - (1))]);
var mode_53121 = (path_53119[(len_53122 - (2))]);
var parent_obj_53124 = (function (){var path_53125 = parent_obj_path_53123;
var len_53126 = path_53125.length;
var i_53127 = (0);
var obj_53128 = obj;
while(true){
if((i_53127 < len_53126)){
var mode_53129 = (path_53125[i_53127]);
var key_53130 = (path_53125[(i_53127 + (1))]);
var next_obj_53131 = oops.core.get_key_dynamically(obj_53128,key_53130,mode_53129);
var G__53133 = mode_53129;
switch (G__53133) {
case (0):
var G__53201 = (i_53127 + (2));
var G__53202 = next_obj_53131;
i_53127 = G__53201;
obj_53128 = G__53202;
continue;

break;
case (1):
if((!((next_obj_53131 == null)))){
var G__53203 = (i_53127 + (2));
var G__53204 = next_obj_53131;
i_53127 = G__53203;
obj_53128 = G__53204;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_53131 == null)))){
var G__53206 = (i_53127 + (2));
var G__53207 = next_obj_53131;
i_53127 = G__53206;
obj_53128 = G__53207;
continue;
} else {
var G__53208 = (i_53127 + (2));
var G__53209 = oops.core.punch_key_dynamically_BANG_.call(null,obj_53128,key_53130);
i_53127 = G__53208;
obj_53128 = G__53209;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53133)].join('')));

}
} else {
return obj_53128;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_53124,key_53120,val,mode_53121);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
