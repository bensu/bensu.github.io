// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26232__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26233__i = 0, G__26233__a = new Array(arguments.length -  0);
while (G__26233__i < G__26233__a.length) {G__26233__a[G__26233__i] = arguments[G__26233__i + 0]; ++G__26233__i;}
  args = new cljs.core.IndexedSeq(G__26233__a,0);
} 
return G__26232__delegate.call(this,args);};
G__26232.cljs$lang$maxFixedArity = 0;
G__26232.cljs$lang$applyTo = (function (arglist__26234){
var args = cljs.core.seq(arglist__26234);
return G__26232__delegate(args);
});
G__26232.cljs$core$IFn$_invoke$arity$variadic = G__26232__delegate;
return G__26232;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26235){
var map__26238 = p__26235;
var map__26238__$1 = ((((!((map__26238 == null)))?((((map__26238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26238):map__26238);
var message = cljs.core.get.call(null,map__26238__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26238__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16483__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16483__auto__)){
return or__16483__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16471__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16471__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16471__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19667__auto___26368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___26368,ch){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___26368,ch){
return (function (state_26342){
var state_val_26343 = (state_26342[(1)]);
if((state_val_26343 === (7))){
var inst_26338 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
var statearr_26344_26369 = state_26342__$1;
(statearr_26344_26369[(2)] = inst_26338);

(statearr_26344_26369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (1))){
var state_26342__$1 = state_26342;
var statearr_26345_26370 = state_26342__$1;
(statearr_26345_26370[(2)] = null);

(statearr_26345_26370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (4))){
var inst_26306 = (state_26342[(7)]);
var inst_26306__$1 = (state_26342[(2)]);
var state_26342__$1 = (function (){var statearr_26346 = state_26342;
(statearr_26346[(7)] = inst_26306__$1);

return statearr_26346;
})();
if(cljs.core.truth_(inst_26306__$1)){
var statearr_26347_26371 = state_26342__$1;
(statearr_26347_26371[(1)] = (5));

} else {
var statearr_26348_26372 = state_26342__$1;
(statearr_26348_26372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (13))){
var state_26342__$1 = state_26342;
var statearr_26349_26373 = state_26342__$1;
(statearr_26349_26373[(2)] = null);

(statearr_26349_26373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (6))){
var state_26342__$1 = state_26342;
var statearr_26350_26374 = state_26342__$1;
(statearr_26350_26374[(2)] = null);

(statearr_26350_26374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (3))){
var inst_26340 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26342__$1,inst_26340);
} else {
if((state_val_26343 === (12))){
var inst_26313 = (state_26342[(8)]);
var inst_26326 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26313);
var inst_26327 = cljs.core.first.call(null,inst_26326);
var inst_26328 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26327);
var inst_26329 = console.warn("Figwheel: Not loading code with warnings - ",inst_26328);
var state_26342__$1 = state_26342;
var statearr_26351_26375 = state_26342__$1;
(statearr_26351_26375[(2)] = inst_26329);

(statearr_26351_26375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (2))){
var state_26342__$1 = state_26342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26342__$1,(4),ch);
} else {
if((state_val_26343 === (11))){
var inst_26322 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
var statearr_26352_26376 = state_26342__$1;
(statearr_26352_26376[(2)] = inst_26322);

(statearr_26352_26376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (9))){
var inst_26312 = (state_26342[(9)]);
var inst_26324 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26312,opts);
var state_26342__$1 = state_26342;
if(cljs.core.truth_(inst_26324)){
var statearr_26353_26377 = state_26342__$1;
(statearr_26353_26377[(1)] = (12));

} else {
var statearr_26354_26378 = state_26342__$1;
(statearr_26354_26378[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (5))){
var inst_26306 = (state_26342[(7)]);
var inst_26312 = (state_26342[(9)]);
var inst_26308 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26309 = (new cljs.core.PersistentArrayMap(null,2,inst_26308,null));
var inst_26310 = (new cljs.core.PersistentHashSet(null,inst_26309,null));
var inst_26311 = figwheel.client.focus_msgs.call(null,inst_26310,inst_26306);
var inst_26312__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26311);
var inst_26313 = cljs.core.first.call(null,inst_26311);
var inst_26314 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26312__$1,opts);
var state_26342__$1 = (function (){var statearr_26355 = state_26342;
(statearr_26355[(8)] = inst_26313);

(statearr_26355[(9)] = inst_26312__$1);

return statearr_26355;
})();
if(cljs.core.truth_(inst_26314)){
var statearr_26356_26379 = state_26342__$1;
(statearr_26356_26379[(1)] = (8));

} else {
var statearr_26357_26380 = state_26342__$1;
(statearr_26357_26380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (14))){
var inst_26332 = (state_26342[(2)]);
var state_26342__$1 = state_26342;
var statearr_26358_26381 = state_26342__$1;
(statearr_26358_26381[(2)] = inst_26332);

(statearr_26358_26381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (10))){
var inst_26334 = (state_26342[(2)]);
var state_26342__$1 = (function (){var statearr_26359 = state_26342;
(statearr_26359[(10)] = inst_26334);

return statearr_26359;
})();
var statearr_26360_26382 = state_26342__$1;
(statearr_26360_26382[(2)] = null);

(statearr_26360_26382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26343 === (8))){
var inst_26313 = (state_26342[(8)]);
var inst_26316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26317 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26313);
var inst_26318 = cljs.core.async.timeout.call(null,(1000));
var inst_26319 = [inst_26317,inst_26318];
var inst_26320 = (new cljs.core.PersistentVector(null,2,(5),inst_26316,inst_26319,null));
var state_26342__$1 = state_26342;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26342__$1,(11),inst_26320);
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
});})(c__19667__auto___26368,ch))
;
return ((function (switch__19601__auto__,c__19667__auto___26368,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19602__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19602__auto____0 = (function (){
var statearr_26364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26364[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19602__auto__);

(statearr_26364[(1)] = (1));

return statearr_26364;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19602__auto____1 = (function (state_26342){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_26342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e26365){if((e26365 instanceof Object)){
var ex__19605__auto__ = e26365;
var statearr_26366_26383 = state_26342;
(statearr_26366_26383[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26384 = state_26342;
state_26342 = G__26384;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19602__auto__ = function(state_26342){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19602__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19602__auto____1.call(this,state_26342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19602__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19602__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___26368,ch))
})();
var state__19669__auto__ = (function (){var statearr_26367 = f__19668__auto__.call(null);
(statearr_26367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___26368);

return statearr_26367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___26368,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26385_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26385_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_26392 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26392){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26390 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26391 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26390,_STAR_print_newline_STAR_26391,base_path_26392){
return (function() { 
var G__26393__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26394__i = 0, G__26394__a = new Array(arguments.length -  0);
while (G__26394__i < G__26394__a.length) {G__26394__a[G__26394__i] = arguments[G__26394__i + 0]; ++G__26394__i;}
  args = new cljs.core.IndexedSeq(G__26394__a,0);
} 
return G__26393__delegate.call(this,args);};
G__26393.cljs$lang$maxFixedArity = 0;
G__26393.cljs$lang$applyTo = (function (arglist__26395){
var args = cljs.core.seq(arglist__26395);
return G__26393__delegate(args);
});
G__26393.cljs$core$IFn$_invoke$arity$variadic = G__26393__delegate;
return G__26393;
})()
;})(_STAR_print_fn_STAR_26390,_STAR_print_newline_STAR_26391,base_path_26392))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26391;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26390;
}}catch (e26389){if((e26389 instanceof Error)){
var e = e26389;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26392], null));
} else {
var e = e26389;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26392))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26396){
var map__26403 = p__26396;
var map__26403__$1 = ((((!((map__26403 == null)))?((((map__26403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26403):map__26403);
var opts = map__26403__$1;
var build_id = cljs.core.get.call(null,map__26403__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26403,map__26403__$1,opts,build_id){
return (function (p__26405){
var vec__26406 = p__26405;
var map__26407 = cljs.core.nth.call(null,vec__26406,(0),null);
var map__26407__$1 = ((((!((map__26407 == null)))?((((map__26407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26407):map__26407);
var msg = map__26407__$1;
var msg_name = cljs.core.get.call(null,map__26407__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26406,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26406,map__26407,map__26407__$1,msg,msg_name,_,map__26403,map__26403__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26406,map__26407,map__26407__$1,msg,msg_name,_,map__26403,map__26403__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26403,map__26403__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26413){
var vec__26414 = p__26413;
var map__26415 = cljs.core.nth.call(null,vec__26414,(0),null);
var map__26415__$1 = ((((!((map__26415 == null)))?((((map__26415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26415):map__26415);
var msg = map__26415__$1;
var msg_name = cljs.core.get.call(null,map__26415__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26414,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26417){
var map__26427 = p__26417;
var map__26427__$1 = ((((!((map__26427 == null)))?((((map__26427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26427):map__26427);
var on_compile_warning = cljs.core.get.call(null,map__26427__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26427__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26427,map__26427__$1,on_compile_warning,on_compile_fail){
return (function (p__26429){
var vec__26430 = p__26429;
var map__26431 = cljs.core.nth.call(null,vec__26430,(0),null);
var map__26431__$1 = ((((!((map__26431 == null)))?((((map__26431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26431):map__26431);
var msg = map__26431__$1;
var msg_name = cljs.core.get.call(null,map__26431__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26430,(1));
var pred__26433 = cljs.core._EQ_;
var expr__26434 = msg_name;
if(cljs.core.truth_(pred__26433.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26434))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26433.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26434))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26427,map__26427__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto__,msg_hist,msg_names,msg){
return (function (state_26635){
var state_val_26636 = (state_26635[(1)]);
if((state_val_26636 === (7))){
var inst_26569 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26637_26678 = state_26635__$1;
(statearr_26637_26678[(2)] = inst_26569);

(statearr_26637_26678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (20))){
var inst_26597 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26597)){
var statearr_26638_26679 = state_26635__$1;
(statearr_26638_26679[(1)] = (22));

} else {
var statearr_26639_26680 = state_26635__$1;
(statearr_26639_26680[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (27))){
var inst_26609 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26610 = figwheel.client.heads_up.display_warning.call(null,inst_26609);
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(30),inst_26610);
} else {
if((state_val_26636 === (1))){
var inst_26557 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26557)){
var statearr_26640_26681 = state_26635__$1;
(statearr_26640_26681[(1)] = (2));

} else {
var statearr_26641_26682 = state_26635__$1;
(statearr_26641_26682[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (24))){
var inst_26625 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26642_26683 = state_26635__$1;
(statearr_26642_26683[(2)] = inst_26625);

(statearr_26642_26683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (4))){
var inst_26633 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26635__$1,inst_26633);
} else {
if((state_val_26636 === (15))){
var inst_26585 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26586 = figwheel.client.format_messages.call(null,inst_26585);
var inst_26587 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26588 = figwheel.client.heads_up.display_error.call(null,inst_26586,inst_26587);
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(18),inst_26588);
} else {
if((state_val_26636 === (21))){
var inst_26627 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26643_26684 = state_26635__$1;
(statearr_26643_26684[(2)] = inst_26627);

(statearr_26643_26684[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (31))){
var inst_26616 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(34),inst_26616);
} else {
if((state_val_26636 === (32))){
var state_26635__$1 = state_26635;
var statearr_26644_26685 = state_26635__$1;
(statearr_26644_26685[(2)] = null);

(statearr_26644_26685[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (33))){
var inst_26621 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26645_26686 = state_26635__$1;
(statearr_26645_26686[(2)] = inst_26621);

(statearr_26645_26686[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (13))){
var inst_26575 = (state_26635[(2)]);
var inst_26576 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26577 = figwheel.client.format_messages.call(null,inst_26576);
var inst_26578 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26579 = figwheel.client.heads_up.display_error.call(null,inst_26577,inst_26578);
var state_26635__$1 = (function (){var statearr_26646 = state_26635;
(statearr_26646[(7)] = inst_26575);

return statearr_26646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(14),inst_26579);
} else {
if((state_val_26636 === (22))){
var inst_26599 = figwheel.client.heads_up.clear.call(null);
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(25),inst_26599);
} else {
if((state_val_26636 === (29))){
var inst_26623 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26647_26687 = state_26635__$1;
(statearr_26647_26687[(2)] = inst_26623);

(statearr_26647_26687[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (6))){
var inst_26565 = figwheel.client.heads_up.clear.call(null);
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(9),inst_26565);
} else {
if((state_val_26636 === (28))){
var inst_26614 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26614)){
var statearr_26648_26688 = state_26635__$1;
(statearr_26648_26688[(1)] = (31));

} else {
var statearr_26649_26689 = state_26635__$1;
(statearr_26649_26689[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (25))){
var inst_26601 = (state_26635[(2)]);
var inst_26602 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26603 = figwheel.client.heads_up.display_warning.call(null,inst_26602);
var state_26635__$1 = (function (){var statearr_26650 = state_26635;
(statearr_26650[(8)] = inst_26601);

return statearr_26650;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(26),inst_26603);
} else {
if((state_val_26636 === (34))){
var inst_26618 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26651_26690 = state_26635__$1;
(statearr_26651_26690[(2)] = inst_26618);

(statearr_26651_26690[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (17))){
var inst_26629 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26652_26691 = state_26635__$1;
(statearr_26652_26691[(2)] = inst_26629);

(statearr_26652_26691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (3))){
var inst_26571 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26571)){
var statearr_26653_26692 = state_26635__$1;
(statearr_26653_26692[(1)] = (10));

} else {
var statearr_26654_26693 = state_26635__$1;
(statearr_26654_26693[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (12))){
var inst_26631 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26655_26694 = state_26635__$1;
(statearr_26655_26694[(2)] = inst_26631);

(statearr_26655_26694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (2))){
var inst_26559 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26559)){
var statearr_26656_26695 = state_26635__$1;
(statearr_26656_26695[(1)] = (5));

} else {
var statearr_26657_26696 = state_26635__$1;
(statearr_26657_26696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (23))){
var inst_26607 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26607)){
var statearr_26658_26697 = state_26635__$1;
(statearr_26658_26697[(1)] = (27));

} else {
var statearr_26659_26698 = state_26635__$1;
(statearr_26659_26698[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (19))){
var inst_26594 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26595 = figwheel.client.heads_up.append_message.call(null,inst_26594);
var state_26635__$1 = state_26635;
var statearr_26660_26699 = state_26635__$1;
(statearr_26660_26699[(2)] = inst_26595);

(statearr_26660_26699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (11))){
var inst_26583 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26583)){
var statearr_26661_26700 = state_26635__$1;
(statearr_26661_26700[(1)] = (15));

} else {
var statearr_26662_26701 = state_26635__$1;
(statearr_26662_26701[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (9))){
var inst_26567 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26663_26702 = state_26635__$1;
(statearr_26663_26702[(2)] = inst_26567);

(statearr_26663_26702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (5))){
var inst_26561 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(8),inst_26561);
} else {
if((state_val_26636 === (14))){
var inst_26581 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26664_26703 = state_26635__$1;
(statearr_26664_26703[(2)] = inst_26581);

(statearr_26664_26703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (26))){
var inst_26605 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26665_26704 = state_26635__$1;
(statearr_26665_26704[(2)] = inst_26605);

(statearr_26665_26704[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (16))){
var inst_26592 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26592)){
var statearr_26666_26705 = state_26635__$1;
(statearr_26666_26705[(1)] = (19));

} else {
var statearr_26667_26706 = state_26635__$1;
(statearr_26667_26706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (30))){
var inst_26612 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26668_26707 = state_26635__$1;
(statearr_26668_26707[(2)] = inst_26612);

(statearr_26668_26707[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (10))){
var inst_26573 = figwheel.client.heads_up.clear.call(null);
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(13),inst_26573);
} else {
if((state_val_26636 === (18))){
var inst_26590 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26669_26708 = state_26635__$1;
(statearr_26669_26708[(2)] = inst_26590);

(statearr_26669_26708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (8))){
var inst_26563 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26670_26709 = state_26635__$1;
(statearr_26670_26709[(2)] = inst_26563);

(statearr_26670_26709[(1)] = (7));


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
});})(c__19667__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19601__auto__,c__19667__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19602__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19602__auto____0 = (function (){
var statearr_26674 = [null,null,null,null,null,null,null,null,null];
(statearr_26674[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19602__auto__);

(statearr_26674[(1)] = (1));

return statearr_26674;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19602__auto____1 = (function (state_26635){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_26635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e26675){if((e26675 instanceof Object)){
var ex__19605__auto__ = e26675;
var statearr_26676_26710 = state_26635;
(statearr_26676_26710[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26711 = state_26635;
state_26635 = G__26711;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19602__auto__ = function(state_26635){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19602__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19602__auto____1.call(this,state_26635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19602__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19602__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto__,msg_hist,msg_names,msg))
})();
var state__19669__auto__ = (function (){var statearr_26677 = f__19668__auto__.call(null);
(statearr_26677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto__);

return statearr_26677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto__,msg_hist,msg_names,msg))
);

return c__19667__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19667__auto___26774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___26774,ch){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___26774,ch){
return (function (state_26757){
var state_val_26758 = (state_26757[(1)]);
if((state_val_26758 === (1))){
var state_26757__$1 = state_26757;
var statearr_26759_26775 = state_26757__$1;
(statearr_26759_26775[(2)] = null);

(statearr_26759_26775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26758 === (2))){
var state_26757__$1 = state_26757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26757__$1,(4),ch);
} else {
if((state_val_26758 === (3))){
var inst_26755 = (state_26757[(2)]);
var state_26757__$1 = state_26757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26757__$1,inst_26755);
} else {
if((state_val_26758 === (4))){
var inst_26745 = (state_26757[(7)]);
var inst_26745__$1 = (state_26757[(2)]);
var state_26757__$1 = (function (){var statearr_26760 = state_26757;
(statearr_26760[(7)] = inst_26745__$1);

return statearr_26760;
})();
if(cljs.core.truth_(inst_26745__$1)){
var statearr_26761_26776 = state_26757__$1;
(statearr_26761_26776[(1)] = (5));

} else {
var statearr_26762_26777 = state_26757__$1;
(statearr_26762_26777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26758 === (5))){
var inst_26745 = (state_26757[(7)]);
var inst_26747 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26745);
var state_26757__$1 = state_26757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26757__$1,(8),inst_26747);
} else {
if((state_val_26758 === (6))){
var state_26757__$1 = state_26757;
var statearr_26763_26778 = state_26757__$1;
(statearr_26763_26778[(2)] = null);

(statearr_26763_26778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26758 === (7))){
var inst_26753 = (state_26757[(2)]);
var state_26757__$1 = state_26757;
var statearr_26764_26779 = state_26757__$1;
(statearr_26764_26779[(2)] = inst_26753);

(statearr_26764_26779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26758 === (8))){
var inst_26749 = (state_26757[(2)]);
var state_26757__$1 = (function (){var statearr_26765 = state_26757;
(statearr_26765[(8)] = inst_26749);

return statearr_26765;
})();
var statearr_26766_26780 = state_26757__$1;
(statearr_26766_26780[(2)] = null);

(statearr_26766_26780[(1)] = (2));


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
});})(c__19667__auto___26774,ch))
;
return ((function (switch__19601__auto__,c__19667__auto___26774,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19602__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19602__auto____0 = (function (){
var statearr_26770 = [null,null,null,null,null,null,null,null,null];
(statearr_26770[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19602__auto__);

(statearr_26770[(1)] = (1));

return statearr_26770;
});
var figwheel$client$heads_up_plugin_$_state_machine__19602__auto____1 = (function (state_26757){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_26757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e26771){if((e26771 instanceof Object)){
var ex__19605__auto__ = e26771;
var statearr_26772_26781 = state_26757;
(statearr_26772_26781[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26782 = state_26757;
state_26757 = G__26782;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19602__auto__ = function(state_26757){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19602__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19602__auto____1.call(this,state_26757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19602__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19602__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___26774,ch))
})();
var state__19669__auto__ = (function (){var statearr_26773 = f__19668__auto__.call(null);
(statearr_26773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___26774);

return statearr_26773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___26774,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto__){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto__){
return (function (state_26803){
var state_val_26804 = (state_26803[(1)]);
if((state_val_26804 === (1))){
var inst_26798 = cljs.core.async.timeout.call(null,(3000));
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26803__$1,(2),inst_26798);
} else {
if((state_val_26804 === (2))){
var inst_26800 = (state_26803[(2)]);
var inst_26801 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26803__$1 = (function (){var statearr_26805 = state_26803;
(statearr_26805[(7)] = inst_26800);

return statearr_26805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26803__$1,inst_26801);
} else {
return null;
}
}
});})(c__19667__auto__))
;
return ((function (switch__19601__auto__,c__19667__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19602__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19602__auto____0 = (function (){
var statearr_26809 = [null,null,null,null,null,null,null,null];
(statearr_26809[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19602__auto__);

(statearr_26809[(1)] = (1));

return statearr_26809;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19602__auto____1 = (function (state_26803){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_26803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e26810){if((e26810 instanceof Object)){
var ex__19605__auto__ = e26810;
var statearr_26811_26813 = state_26803;
(statearr_26811_26813[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26814 = state_26803;
state_26803 = G__26814;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19602__auto__ = function(state_26803){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19602__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19602__auto____1.call(this,state_26803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19602__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19602__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto__))
})();
var state__19669__auto__ = (function (){var statearr_26812 = f__19668__auto__.call(null);
(statearr_26812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto__);

return statearr_26812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto__))
);

return c__19667__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26815){
var map__26822 = p__26815;
var map__26822__$1 = ((((!((map__26822 == null)))?((((map__26822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26822):map__26822);
var ed = map__26822__$1;
var formatted_exception = cljs.core.get.call(null,map__26822__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26822__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26822__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26824_26828 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26825_26829 = null;
var count__26826_26830 = (0);
var i__26827_26831 = (0);
while(true){
if((i__26827_26831 < count__26826_26830)){
var msg_26832 = cljs.core._nth.call(null,chunk__26825_26829,i__26827_26831);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26832);

var G__26833 = seq__26824_26828;
var G__26834 = chunk__26825_26829;
var G__26835 = count__26826_26830;
var G__26836 = (i__26827_26831 + (1));
seq__26824_26828 = G__26833;
chunk__26825_26829 = G__26834;
count__26826_26830 = G__26835;
i__26827_26831 = G__26836;
continue;
} else {
var temp__4425__auto___26837 = cljs.core.seq.call(null,seq__26824_26828);
if(temp__4425__auto___26837){
var seq__26824_26838__$1 = temp__4425__auto___26837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26824_26838__$1)){
var c__17267__auto___26839 = cljs.core.chunk_first.call(null,seq__26824_26838__$1);
var G__26840 = cljs.core.chunk_rest.call(null,seq__26824_26838__$1);
var G__26841 = c__17267__auto___26839;
var G__26842 = cljs.core.count.call(null,c__17267__auto___26839);
var G__26843 = (0);
seq__26824_26828 = G__26840;
chunk__26825_26829 = G__26841;
count__26826_26830 = G__26842;
i__26827_26831 = G__26843;
continue;
} else {
var msg_26844 = cljs.core.first.call(null,seq__26824_26838__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26844);

var G__26845 = cljs.core.next.call(null,seq__26824_26838__$1);
var G__26846 = null;
var G__26847 = (0);
var G__26848 = (0);
seq__26824_26828 = G__26845;
chunk__26825_26829 = G__26846;
count__26826_26830 = G__26847;
i__26827_26831 = G__26848;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26849){
var map__26852 = p__26849;
var map__26852__$1 = ((((!((map__26852 == null)))?((((map__26852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26852):map__26852);
var w = map__26852__$1;
var message = cljs.core.get.call(null,map__26852__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16471__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16471__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16471__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26860 = cljs.core.seq.call(null,plugins);
var chunk__26861 = null;
var count__26862 = (0);
var i__26863 = (0);
while(true){
if((i__26863 < count__26862)){
var vec__26864 = cljs.core._nth.call(null,chunk__26861,i__26863);
var k = cljs.core.nth.call(null,vec__26864,(0),null);
var plugin = cljs.core.nth.call(null,vec__26864,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26866 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26860,chunk__26861,count__26862,i__26863,pl_26866,vec__26864,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26866.call(null,msg_hist);
});})(seq__26860,chunk__26861,count__26862,i__26863,pl_26866,vec__26864,k,plugin))
);
} else {
}

var G__26867 = seq__26860;
var G__26868 = chunk__26861;
var G__26869 = count__26862;
var G__26870 = (i__26863 + (1));
seq__26860 = G__26867;
chunk__26861 = G__26868;
count__26862 = G__26869;
i__26863 = G__26870;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26860);
if(temp__4425__auto__){
var seq__26860__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26860__$1)){
var c__17267__auto__ = cljs.core.chunk_first.call(null,seq__26860__$1);
var G__26871 = cljs.core.chunk_rest.call(null,seq__26860__$1);
var G__26872 = c__17267__auto__;
var G__26873 = cljs.core.count.call(null,c__17267__auto__);
var G__26874 = (0);
seq__26860 = G__26871;
chunk__26861 = G__26872;
count__26862 = G__26873;
i__26863 = G__26874;
continue;
} else {
var vec__26865 = cljs.core.first.call(null,seq__26860__$1);
var k = cljs.core.nth.call(null,vec__26865,(0),null);
var plugin = cljs.core.nth.call(null,vec__26865,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26875 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26860,chunk__26861,count__26862,i__26863,pl_26875,vec__26865,k,plugin,seq__26860__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26875.call(null,msg_hist);
});})(seq__26860,chunk__26861,count__26862,i__26863,pl_26875,vec__26865,k,plugin,seq__26860__$1,temp__4425__auto__))
);
} else {
}

var G__26876 = cljs.core.next.call(null,seq__26860__$1);
var G__26877 = null;
var G__26878 = (0);
var G__26879 = (0);
seq__26860 = G__26876;
chunk__26861 = G__26877;
count__26862 = G__26878;
i__26863 = G__26879;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args26880 = [];
var len__17522__auto___26883 = arguments.length;
var i__17523__auto___26884 = (0);
while(true){
if((i__17523__auto___26884 < len__17522__auto___26883)){
args26880.push((arguments[i__17523__auto___26884]));

var G__26885 = (i__17523__auto___26884 + (1));
i__17523__auto___26884 = G__26885;
continue;
} else {
}
break;
}

var G__26882 = args26880.length;
switch (G__26882) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26880.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__17529__auto__ = [];
var len__17522__auto___26891 = arguments.length;
var i__17523__auto___26892 = (0);
while(true){
if((i__17523__auto___26892 < len__17522__auto___26891)){
args__17529__auto__.push((arguments[i__17523__auto___26892]));

var G__26893 = (i__17523__auto___26892 + (1));
i__17523__auto___26892 = G__26893;
continue;
} else {
}
break;
}

var argseq__17530__auto__ = ((((0) < args__17529__auto__.length))?(new cljs.core.IndexedSeq(args__17529__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17530__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26888){
var map__26889 = p__26888;
var map__26889__$1 = ((((!((map__26889 == null)))?((((map__26889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26889):map__26889);
var opts = map__26889__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26887){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26887));
});

//# sourceMappingURL=client.js.map?rel=1440745221240