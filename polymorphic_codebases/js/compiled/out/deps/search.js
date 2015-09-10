// Compiled by ClojureScript 1.7.48 {}
goog.provide('deps.search');
goog.require('cljs.core');
deps.search.results = new cljs.core.PersistentArrayMap(null, 3, ["TODO",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 30, ["util.sync",null,"auth.api",null,"field.db",null,"components.maps",null,"server.handler",null,"components.messages",null,"view.dashboard",null,"model.state",null,"field.db.multi",null,"util.error",null,"components.notification",null,"server.core",null,"common.types",null,"view.main",null,"components.chart",null,"util.db",null,"server.log",null,"model.nav",null,"model.entry",null,"util.reader",null,"field.db.compound",null,"util.util",null,"db.core",null,"field.util",null,"util.filetype-icons",null,"auth.db",null,"auth.model",null,"field.render.related",null,"components.general",null,"view.builder",null], null), null),":field/type",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, ["field.db",null,"model.record",null,"view.dashboard",null,"model.state",null,"field.db.multi",null,"common.types",null,"field.muti",null,"field.util.multi",null,"field.api",null,"field.search.multi",null,"field.render.multi",null,"field.db.compound",null,"field.render",null,"view.builder",null], null), null),"FIX",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, ["view.list",null,"field.db",null,"components.maps",null,"server.handler",null,"view.dashboard",null,"model.state",null,"field.db.multi",null,"components.chart",null,"server.log",null,"field.render.file",null,"field.db.compound",null,"util.util",null,"auth.db",null,"view.builder",null], null), null)], null);
deps.search.isSearched = (function deps$search$isSearched(phrases,ns_str){
if(typeof ns_str === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"ns-str","ns-str",-422084972,null))))].join('')));
}

return cljs.core.some.call(null,(function (p1__20567_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,deps.search.results,p1__20567_SHARP_),ns_str);
}),cljs.core.into_array.call(null,phrases)) === true;
});
goog.exportSymbol('deps.search.isSearched', deps.search.isSearched);

//# sourceMappingURL=search.js.map?rel=1441926330407