// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16483__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16483__auto__){
return or__16483__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16483__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16483__auto__)){
return or__16483__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27333_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27333_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27338 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27339 = null;
var count__27340 = (0);
var i__27341 = (0);
while(true){
if((i__27341 < count__27340)){
var n = cljs.core._nth.call(null,chunk__27339,i__27341);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27342 = seq__27338;
var G__27343 = chunk__27339;
var G__27344 = count__27340;
var G__27345 = (i__27341 + (1));
seq__27338 = G__27342;
chunk__27339 = G__27343;
count__27340 = G__27344;
i__27341 = G__27345;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27338);
if(temp__4425__auto__){
var seq__27338__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27338__$1)){
var c__17267__auto__ = cljs.core.chunk_first.call(null,seq__27338__$1);
var G__27346 = cljs.core.chunk_rest.call(null,seq__27338__$1);
var G__27347 = c__17267__auto__;
var G__27348 = cljs.core.count.call(null,c__17267__auto__);
var G__27349 = (0);
seq__27338 = G__27346;
chunk__27339 = G__27347;
count__27340 = G__27348;
i__27341 = G__27349;
continue;
} else {
var n = cljs.core.first.call(null,seq__27338__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27350 = cljs.core.next.call(null,seq__27338__$1);
var G__27351 = null;
var G__27352 = (0);
var G__27353 = (0);
seq__27338 = G__27350;
chunk__27339 = G__27351;
count__27340 = G__27352;
i__27341 = G__27353;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps__$1 = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps__$1)){
return null;
} else {
return topo_sort_STAR_.call(null,deps__$1,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps__$1){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps__$1,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps__$1,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps__$1);

var seq__27392_27399 = cljs.core.seq.call(null,deps__$1);
var chunk__27393_27400 = null;
var count__27394_27401 = (0);
var i__27395_27402 = (0);
while(true){
if((i__27395_27402 < count__27394_27401)){
var dep_27403 = cljs.core._nth.call(null,chunk__27393_27400,i__27395_27402);
topo_sort_helper_STAR_.call(null,dep_27403,(depth + (1)),state);

var G__27404 = seq__27392_27399;
var G__27405 = chunk__27393_27400;
var G__27406 = count__27394_27401;
var G__27407 = (i__27395_27402 + (1));
seq__27392_27399 = G__27404;
chunk__27393_27400 = G__27405;
count__27394_27401 = G__27406;
i__27395_27402 = G__27407;
continue;
} else {
var temp__4425__auto___27408 = cljs.core.seq.call(null,seq__27392_27399);
if(temp__4425__auto___27408){
var seq__27392_27409__$1 = temp__4425__auto___27408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27392_27409__$1)){
var c__17267__auto___27410 = cljs.core.chunk_first.call(null,seq__27392_27409__$1);
var G__27411 = cljs.core.chunk_rest.call(null,seq__27392_27409__$1);
var G__27412 = c__17267__auto___27410;
var G__27413 = cljs.core.count.call(null,c__17267__auto___27410);
var G__27414 = (0);
seq__27392_27399 = G__27411;
chunk__27393_27400 = G__27412;
count__27394_27401 = G__27413;
i__27395_27402 = G__27414;
continue;
} else {
var dep_27415 = cljs.core.first.call(null,seq__27392_27409__$1);
topo_sort_helper_STAR_.call(null,dep_27415,(depth + (1)),state);

var G__27416 = cljs.core.next.call(null,seq__27392_27409__$1);
var G__27417 = null;
var G__27418 = (0);
var G__27419 = (0);
seq__27392_27399 = G__27416;
chunk__27393_27400 = G__27417;
count__27394_27401 = G__27418;
i__27395_27402 = G__27419;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps__$1,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps__$1);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps__$1,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27396){
var vec__27398 = p__27396;
var x = cljs.core.nth.call(null,vec__27398,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27398,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27398,x,xs,get_deps__$1){
return (function (p1__27354_SHARP_){
return clojure.set.difference.call(null,p1__27354_SHARP_,x);
});})(vec__27398,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27432 = cljs.core.seq.call(null,provides);
var chunk__27433 = null;
var count__27434 = (0);
var i__27435 = (0);
while(true){
if((i__27435 < count__27434)){
var prov = cljs.core._nth.call(null,chunk__27433,i__27435);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27436_27444 = cljs.core.seq.call(null,requires);
var chunk__27437_27445 = null;
var count__27438_27446 = (0);
var i__27439_27447 = (0);
while(true){
if((i__27439_27447 < count__27438_27446)){
var req_27448 = cljs.core._nth.call(null,chunk__27437_27445,i__27439_27447);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27448,prov);

var G__27449 = seq__27436_27444;
var G__27450 = chunk__27437_27445;
var G__27451 = count__27438_27446;
var G__27452 = (i__27439_27447 + (1));
seq__27436_27444 = G__27449;
chunk__27437_27445 = G__27450;
count__27438_27446 = G__27451;
i__27439_27447 = G__27452;
continue;
} else {
var temp__4425__auto___27453 = cljs.core.seq.call(null,seq__27436_27444);
if(temp__4425__auto___27453){
var seq__27436_27454__$1 = temp__4425__auto___27453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27436_27454__$1)){
var c__17267__auto___27455 = cljs.core.chunk_first.call(null,seq__27436_27454__$1);
var G__27456 = cljs.core.chunk_rest.call(null,seq__27436_27454__$1);
var G__27457 = c__17267__auto___27455;
var G__27458 = cljs.core.count.call(null,c__17267__auto___27455);
var G__27459 = (0);
seq__27436_27444 = G__27456;
chunk__27437_27445 = G__27457;
count__27438_27446 = G__27458;
i__27439_27447 = G__27459;
continue;
} else {
var req_27460 = cljs.core.first.call(null,seq__27436_27454__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27460,prov);

var G__27461 = cljs.core.next.call(null,seq__27436_27454__$1);
var G__27462 = null;
var G__27463 = (0);
var G__27464 = (0);
seq__27436_27444 = G__27461;
chunk__27437_27445 = G__27462;
count__27438_27446 = G__27463;
i__27439_27447 = G__27464;
continue;
}
} else {
}
}
break;
}

var G__27465 = seq__27432;
var G__27466 = chunk__27433;
var G__27467 = count__27434;
var G__27468 = (i__27435 + (1));
seq__27432 = G__27465;
chunk__27433 = G__27466;
count__27434 = G__27467;
i__27435 = G__27468;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27432);
if(temp__4425__auto__){
var seq__27432__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27432__$1)){
var c__17267__auto__ = cljs.core.chunk_first.call(null,seq__27432__$1);
var G__27469 = cljs.core.chunk_rest.call(null,seq__27432__$1);
var G__27470 = c__17267__auto__;
var G__27471 = cljs.core.count.call(null,c__17267__auto__);
var G__27472 = (0);
seq__27432 = G__27469;
chunk__27433 = G__27470;
count__27434 = G__27471;
i__27435 = G__27472;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27432__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27440_27473 = cljs.core.seq.call(null,requires);
var chunk__27441_27474 = null;
var count__27442_27475 = (0);
var i__27443_27476 = (0);
while(true){
if((i__27443_27476 < count__27442_27475)){
var req_27477 = cljs.core._nth.call(null,chunk__27441_27474,i__27443_27476);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27477,prov);

var G__27478 = seq__27440_27473;
var G__27479 = chunk__27441_27474;
var G__27480 = count__27442_27475;
var G__27481 = (i__27443_27476 + (1));
seq__27440_27473 = G__27478;
chunk__27441_27474 = G__27479;
count__27442_27475 = G__27480;
i__27443_27476 = G__27481;
continue;
} else {
var temp__4425__auto___27482__$1 = cljs.core.seq.call(null,seq__27440_27473);
if(temp__4425__auto___27482__$1){
var seq__27440_27483__$1 = temp__4425__auto___27482__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27440_27483__$1)){
var c__17267__auto___27484 = cljs.core.chunk_first.call(null,seq__27440_27483__$1);
var G__27485 = cljs.core.chunk_rest.call(null,seq__27440_27483__$1);
var G__27486 = c__17267__auto___27484;
var G__27487 = cljs.core.count.call(null,c__17267__auto___27484);
var G__27488 = (0);
seq__27440_27473 = G__27485;
chunk__27441_27474 = G__27486;
count__27442_27475 = G__27487;
i__27443_27476 = G__27488;
continue;
} else {
var req_27489 = cljs.core.first.call(null,seq__27440_27483__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27489,prov);

var G__27490 = cljs.core.next.call(null,seq__27440_27483__$1);
var G__27491 = null;
var G__27492 = (0);
var G__27493 = (0);
seq__27440_27473 = G__27490;
chunk__27441_27474 = G__27491;
count__27442_27475 = G__27492;
i__27443_27476 = G__27493;
continue;
}
} else {
}
}
break;
}

var G__27494 = cljs.core.next.call(null,seq__27432__$1);
var G__27495 = null;
var G__27496 = (0);
var G__27497 = (0);
seq__27432 = G__27494;
chunk__27433 = G__27495;
count__27434 = G__27496;
i__27435 = G__27497;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 * in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require__ = goog.require;

goog.isProvided__ = goog.isProvided_;

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency__ = goog.addDependency;

goog.addDependency = (function() { 
var G__27506__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency__,args);
};
var G__27506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27507__i = 0, G__27507__a = new Array(arguments.length -  0);
while (G__27507__i < G__27507__a.length) {G__27507__a[G__27507__i] = arguments[G__27507__i + 0]; ++G__27507__i;}
  args = new cljs.core.IndexedSeq(G__27507__a,0);
} 
return G__27506__delegate.call(this,args);};
G__27506.cljs$lang$maxFixedArity = 0;
G__27506.cljs$lang$applyTo = (function (arglist__27508){
var args = cljs.core.seq(arglist__27508);
return G__27506__delegate(args);
});
G__27506.cljs$core$IFn$_invoke$arity$variadic = G__27506__delegate;
return G__27506;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = (function (src,reload){
if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27502_27509 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27503_27510 = null;
var count__27504_27511 = (0);
var i__27505_27512 = (0);
while(true){
if((i__27505_27512 < count__27504_27511)){
var ns_27513 = cljs.core._nth.call(null,chunk__27503_27510,i__27505_27512);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27513);

var G__27514 = seq__27502_27509;
var G__27515 = chunk__27503_27510;
var G__27516 = count__27504_27511;
var G__27517 = (i__27505_27512 + (1));
seq__27502_27509 = G__27514;
chunk__27503_27510 = G__27515;
count__27504_27511 = G__27516;
i__27505_27512 = G__27517;
continue;
} else {
var temp__4425__auto___27518 = cljs.core.seq.call(null,seq__27502_27509);
if(temp__4425__auto___27518){
var seq__27502_27519__$1 = temp__4425__auto___27518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27502_27519__$1)){
var c__17267__auto___27520 = cljs.core.chunk_first.call(null,seq__27502_27519__$1);
var G__27521 = cljs.core.chunk_rest.call(null,seq__27502_27519__$1);
var G__27522 = c__17267__auto___27520;
var G__27523 = cljs.core.count.call(null,c__17267__auto___27520);
var G__27524 = (0);
seq__27502_27509 = G__27521;
chunk__27503_27510 = G__27522;
count__27504_27511 = G__27523;
i__27505_27512 = G__27524;
continue;
} else {
var ns_27525 = cljs.core.first.call(null,seq__27502_27519__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27525);

var G__27526 = cljs.core.next.call(null,seq__27502_27519__$1);
var G__27527 = null;
var G__27528 = (0);
var G__27529 = (0);
seq__27502_27509 = G__27526;
chunk__27503_27510 = G__27527;
count__27504_27511 = G__27528;
i__27505_27512 = G__27529;
continue;
}
} else {
}
}
break;
}
} else {
}

var reload_QMARK_ = (function (){var or__16483__auto__ = reload;
if(cljs.core.truth_(or__16483__auto__)){
return or__16483__auto__;
} else {
return goog.cljsReloadAll__;
}
})();
if(cljs.core.truth_(reload_QMARK_)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require__(src);
});
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27530 = cljs.core._EQ_;
var expr__27531 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27530.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27531))){
return ((function (pred__27530,expr__27531){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e27533){if((e27533 instanceof Error)){
var e = e27533;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27533;

}
}})());
});
;})(pred__27530,expr__27531))
} else {
if(cljs.core.truth_(pred__27530.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27531))){
return ((function (pred__27530,expr__27531){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27530,expr__27531){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27530,expr__27531))
);

return deferred.addErrback(((function (deferred,pred__27530,expr__27531){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27530,expr__27531))
);
});
;})(pred__27530,expr__27531))
} else {
return ((function (pred__27530,expr__27531){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27530,expr__27531))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27534,callback){
var map__27537 = p__27534;
var map__27537__$1 = ((((!((map__27537 == null)))?((((map__27537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27537):map__27537);
var file_msg = map__27537__$1;
var request_url = cljs.core.get.call(null,map__27537__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27537,map__27537__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27537,map__27537__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto__){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto__){
return (function (state_27561){
var state_val_27562 = (state_27561[(1)]);
if((state_val_27562 === (7))){
var inst_27557 = (state_27561[(2)]);
var state_27561__$1 = state_27561;
var statearr_27563_27583 = state_27561__$1;
(statearr_27563_27583[(2)] = inst_27557);

(statearr_27563_27583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (1))){
var state_27561__$1 = state_27561;
var statearr_27564_27584 = state_27561__$1;
(statearr_27564_27584[(2)] = null);

(statearr_27564_27584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (4))){
var inst_27541 = (state_27561[(7)]);
var inst_27541__$1 = (state_27561[(2)]);
var state_27561__$1 = (function (){var statearr_27565 = state_27561;
(statearr_27565[(7)] = inst_27541__$1);

return statearr_27565;
})();
if(cljs.core.truth_(inst_27541__$1)){
var statearr_27566_27585 = state_27561__$1;
(statearr_27566_27585[(1)] = (5));

} else {
var statearr_27567_27586 = state_27561__$1;
(statearr_27567_27586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (6))){
var state_27561__$1 = state_27561;
var statearr_27568_27587 = state_27561__$1;
(statearr_27568_27587[(2)] = null);

(statearr_27568_27587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (3))){
var inst_27559 = (state_27561[(2)]);
var state_27561__$1 = state_27561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27561__$1,inst_27559);
} else {
if((state_val_27562 === (2))){
var state_27561__$1 = state_27561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27561__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27562 === (11))){
var inst_27553 = (state_27561[(2)]);
var state_27561__$1 = (function (){var statearr_27569 = state_27561;
(statearr_27569[(8)] = inst_27553);

return statearr_27569;
})();
var statearr_27570_27588 = state_27561__$1;
(statearr_27570_27588[(2)] = null);

(statearr_27570_27588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (9))){
var inst_27547 = (state_27561[(9)]);
var inst_27545 = (state_27561[(10)]);
var inst_27549 = inst_27547.call(null,inst_27545);
var state_27561__$1 = state_27561;
var statearr_27571_27589 = state_27561__$1;
(statearr_27571_27589[(2)] = inst_27549);

(statearr_27571_27589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (5))){
var inst_27541 = (state_27561[(7)]);
var inst_27543 = figwheel.client.file_reloading.blocking_load.call(null,inst_27541);
var state_27561__$1 = state_27561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27561__$1,(8),inst_27543);
} else {
if((state_val_27562 === (10))){
var inst_27545 = (state_27561[(10)]);
var inst_27551 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27545);
var state_27561__$1 = state_27561;
var statearr_27572_27590 = state_27561__$1;
(statearr_27572_27590[(2)] = inst_27551);

(statearr_27572_27590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (8))){
var inst_27547 = (state_27561[(9)]);
var inst_27541 = (state_27561[(7)]);
var inst_27545 = (state_27561[(2)]);
var inst_27546 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27547__$1 = cljs.core.get.call(null,inst_27546,inst_27541);
var state_27561__$1 = (function (){var statearr_27573 = state_27561;
(statearr_27573[(9)] = inst_27547__$1);

(statearr_27573[(10)] = inst_27545);

return statearr_27573;
})();
if(cljs.core.truth_(inst_27547__$1)){
var statearr_27574_27591 = state_27561__$1;
(statearr_27574_27591[(1)] = (9));

} else {
var statearr_27575_27592 = state_27561__$1;
(statearr_27575_27592[(1)] = (10));

}

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
});})(c__19667__auto__))
;
return ((function (switch__19601__auto__,c__19667__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19602__auto__ = null;
var figwheel$client$file_reloading$state_machine__19602__auto____0 = (function (){
var statearr_27579 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27579[(0)] = figwheel$client$file_reloading$state_machine__19602__auto__);

(statearr_27579[(1)] = (1));

return statearr_27579;
});
var figwheel$client$file_reloading$state_machine__19602__auto____1 = (function (state_27561){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_27561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e27580){if((e27580 instanceof Object)){
var ex__19605__auto__ = e27580;
var statearr_27581_27593 = state_27561;
(statearr_27581_27593[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27594 = state_27561;
state_27561 = G__27594;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19602__auto__ = function(state_27561){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19602__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19602__auto____1.call(this,state_27561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19602__auto____0;
figwheel$client$file_reloading$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19602__auto____1;
return figwheel$client$file_reloading$state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto__))
})();
var state__19669__auto__ = (function (){var statearr_27582 = f__19668__auto__.call(null);
(statearr_27582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto__);

return statearr_27582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto__))
);

return c__19667__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27595,callback){
var map__27598 = p__27595;
var map__27598__$1 = ((((!((map__27598 == null)))?((((map__27598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27598):map__27598);
var file_msg = map__27598__$1;
var namespace = cljs.core.get.call(null,map__27598__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27598,map__27598__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27598,map__27598__$1,file_msg,namespace))
);

return goog.require(cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27600){
var map__27603 = p__27600;
var map__27603__$1 = ((((!((map__27603 == null)))?((((map__27603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27603):map__27603);
var file_msg = map__27603__$1;
var namespace = cljs.core.get.call(null,map__27603__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16471__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16471__auto__){
var or__16483__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16483__auto__)){
return or__16483__auto__;
} else {
var or__16483__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16483__auto____$1)){
return or__16483__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16471__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27605,callback){
var map__27608 = p__27605;
var map__27608__$1 = ((((!((map__27608 == null)))?((((map__27608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27608):map__27608);
var file_msg = map__27608__$1;
var request_url = cljs.core.get.call(null,map__27608__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27608__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19667__auto___27696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___27696,out){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___27696,out){
return (function (state_27678){
var state_val_27679 = (state_27678[(1)]);
if((state_val_27679 === (1))){
var inst_27656 = cljs.core.nth.call(null,files,(0),null);
var inst_27657 = cljs.core.nthnext.call(null,files,(1));
var inst_27658 = files;
var state_27678__$1 = (function (){var statearr_27680 = state_27678;
(statearr_27680[(7)] = inst_27658);

(statearr_27680[(8)] = inst_27657);

(statearr_27680[(9)] = inst_27656);

return statearr_27680;
})();
var statearr_27681_27697 = state_27678__$1;
(statearr_27681_27697[(2)] = null);

(statearr_27681_27697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (2))){
var inst_27658 = (state_27678[(7)]);
var inst_27661 = (state_27678[(10)]);
var inst_27661__$1 = cljs.core.nth.call(null,inst_27658,(0),null);
var inst_27662 = cljs.core.nthnext.call(null,inst_27658,(1));
var inst_27663 = (inst_27661__$1 == null);
var inst_27664 = cljs.core.not.call(null,inst_27663);
var state_27678__$1 = (function (){var statearr_27682 = state_27678;
(statearr_27682[(11)] = inst_27662);

(statearr_27682[(10)] = inst_27661__$1);

return statearr_27682;
})();
if(inst_27664){
var statearr_27683_27698 = state_27678__$1;
(statearr_27683_27698[(1)] = (4));

} else {
var statearr_27684_27699 = state_27678__$1;
(statearr_27684_27699[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (3))){
var inst_27676 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27678__$1,inst_27676);
} else {
if((state_val_27679 === (4))){
var inst_27661 = (state_27678[(10)]);
var inst_27666 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27661);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27678__$1,(7),inst_27666);
} else {
if((state_val_27679 === (5))){
var inst_27672 = cljs.core.async.close_BANG_.call(null,out);
var state_27678__$1 = state_27678;
var statearr_27685_27700 = state_27678__$1;
(statearr_27685_27700[(2)] = inst_27672);

(statearr_27685_27700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (6))){
var inst_27674 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27686_27701 = state_27678__$1;
(statearr_27686_27701[(2)] = inst_27674);

(statearr_27686_27701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (7))){
var inst_27662 = (state_27678[(11)]);
var inst_27668 = (state_27678[(2)]);
var inst_27669 = cljs.core.async.put_BANG_.call(null,out,inst_27668);
var inst_27658 = inst_27662;
var state_27678__$1 = (function (){var statearr_27687 = state_27678;
(statearr_27687[(7)] = inst_27658);

(statearr_27687[(12)] = inst_27669);

return statearr_27687;
})();
var statearr_27688_27702 = state_27678__$1;
(statearr_27688_27702[(2)] = null);

(statearr_27688_27702[(1)] = (2));


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
});})(c__19667__auto___27696,out))
;
return ((function (switch__19601__auto__,c__19667__auto___27696,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19602__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19602__auto____0 = (function (){
var statearr_27692 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27692[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19602__auto__);

(statearr_27692[(1)] = (1));

return statearr_27692;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19602__auto____1 = (function (state_27678){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_27678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e27693){if((e27693 instanceof Object)){
var ex__19605__auto__ = e27693;
var statearr_27694_27703 = state_27678;
(statearr_27694_27703[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27704 = state_27678;
state_27678 = G__27704;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19602__auto__ = function(state_27678){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19602__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19602__auto____1.call(this,state_27678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19602__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19602__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___27696,out))
})();
var state__19669__auto__ = (function (){var statearr_27695 = f__19668__auto__.call(null);
(statearr_27695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___27696);

return statearr_27695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___27696,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27705,opts){
var map__27709 = p__27705;
var map__27709__$1 = ((((!((map__27709 == null)))?((((map__27709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27709):map__27709);
var eval_body__$1 = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16471__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16471__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16471__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27711){var e = e27711;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps__$1 = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps__$1){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps__$1){
return (function (p1__27712_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27712_SHARP_),n);
});})(deps__$1))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps__$1))
,deps__$1));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27717){
var vec__27718 = p__27717;
var k = cljs.core.nth.call(null,vec__27718,(0),null);
var v = cljs.core.nth.call(null,vec__27718,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27719){
var vec__27720 = p__27719;
var k = cljs.core.nth.call(null,vec__27720,(0),null);
var v = cljs.core.nth.call(null,vec__27720,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27724,p__27725){
var map__27972 = p__27724;
var map__27972__$1 = ((((!((map__27972 == null)))?((((map__27972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27972):map__27972);
var opts = map__27972__$1;
var before_jsload = cljs.core.get.call(null,map__27972__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27972__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27972__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27973 = p__27725;
var map__27973__$1 = ((((!((map__27973 == null)))?((((map__27973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27973):map__27973);
var msg = map__27973__$1;
var files = cljs.core.get.call(null,map__27973__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27973__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27973__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28126){
var state_val_28127 = (state_28126[(1)]);
if((state_val_28127 === (7))){
var inst_27989 = (state_28126[(7)]);
var inst_27987 = (state_28126[(8)]);
var inst_27988 = (state_28126[(9)]);
var inst_27990 = (state_28126[(10)]);
var inst_27995 = cljs.core._nth.call(null,inst_27988,inst_27990);
var inst_27996 = figwheel.client.file_reloading.eval_body.call(null,inst_27995,opts);
var inst_27997 = (inst_27990 + (1));
var tmp28128 = inst_27989;
var tmp28129 = inst_27987;
var tmp28130 = inst_27988;
var inst_27987__$1 = tmp28129;
var inst_27988__$1 = tmp28130;
var inst_27989__$1 = tmp28128;
var inst_27990__$1 = inst_27997;
var state_28126__$1 = (function (){var statearr_28131 = state_28126;
(statearr_28131[(7)] = inst_27989__$1);

(statearr_28131[(8)] = inst_27987__$1);

(statearr_28131[(9)] = inst_27988__$1);

(statearr_28131[(11)] = inst_27996);

(statearr_28131[(10)] = inst_27990__$1);

return statearr_28131;
})();
var statearr_28132_28218 = state_28126__$1;
(statearr_28132_28218[(2)] = null);

(statearr_28132_28218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (20))){
var inst_28030 = (state_28126[(12)]);
var inst_28038 = figwheel.client.file_reloading.sort_files.call(null,inst_28030);
var state_28126__$1 = state_28126;
var statearr_28133_28219 = state_28126__$1;
(statearr_28133_28219[(2)] = inst_28038);

(statearr_28133_28219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (27))){
var state_28126__$1 = state_28126;
var statearr_28134_28220 = state_28126__$1;
(statearr_28134_28220[(2)] = null);

(statearr_28134_28220[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (1))){
var inst_27979 = (state_28126[(13)]);
var inst_27976 = before_jsload.call(null,files);
var inst_27977 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27978 = (function (){return ((function (inst_27979,inst_27976,inst_27977,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27721_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27721_SHARP_);
});
;})(inst_27979,inst_27976,inst_27977,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27979__$1 = cljs.core.filter.call(null,inst_27978,files);
var inst_27980 = cljs.core.not_empty.call(null,inst_27979__$1);
var state_28126__$1 = (function (){var statearr_28135 = state_28126;
(statearr_28135[(14)] = inst_27976);

(statearr_28135[(13)] = inst_27979__$1);

(statearr_28135[(15)] = inst_27977);

return statearr_28135;
})();
if(cljs.core.truth_(inst_27980)){
var statearr_28136_28221 = state_28126__$1;
(statearr_28136_28221[(1)] = (2));

} else {
var statearr_28137_28222 = state_28126__$1;
(statearr_28137_28222[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (24))){
var state_28126__$1 = state_28126;
var statearr_28138_28223 = state_28126__$1;
(statearr_28138_28223[(2)] = null);

(statearr_28138_28223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (39))){
var inst_28080 = (state_28126[(16)]);
var state_28126__$1 = state_28126;
var statearr_28139_28224 = state_28126__$1;
(statearr_28139_28224[(2)] = inst_28080);

(statearr_28139_28224[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (46))){
var inst_28121 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
var statearr_28140_28225 = state_28126__$1;
(statearr_28140_28225[(2)] = inst_28121);

(statearr_28140_28225[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (4))){
var inst_28024 = (state_28126[(2)]);
var inst_28025 = cljs.core.List.EMPTY;
var inst_28026 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28025);
var inst_28027 = (function (){return ((function (inst_28024,inst_28025,inst_28026,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27722_SHARP_){
var and__16471__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27722_SHARP_);
if(cljs.core.truth_(and__16471__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27722_SHARP_));
} else {
return and__16471__auto__;
}
});
;})(inst_28024,inst_28025,inst_28026,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28028 = cljs.core.filter.call(null,inst_28027,files);
var inst_28029 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28030 = cljs.core.concat.call(null,inst_28028,inst_28029);
var state_28126__$1 = (function (){var statearr_28141 = state_28126;
(statearr_28141[(17)] = inst_28024);

(statearr_28141[(18)] = inst_28026);

(statearr_28141[(12)] = inst_28030);

return statearr_28141;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28142_28226 = state_28126__$1;
(statearr_28142_28226[(1)] = (16));

} else {
var statearr_28143_28227 = state_28126__$1;
(statearr_28143_28227[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (15))){
var inst_28014 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
var statearr_28144_28228 = state_28126__$1;
(statearr_28144_28228[(2)] = inst_28014);

(statearr_28144_28228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (21))){
var inst_28040 = (state_28126[(19)]);
var inst_28040__$1 = (state_28126[(2)]);
var inst_28041 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28040__$1);
var state_28126__$1 = (function (){var statearr_28145 = state_28126;
(statearr_28145[(19)] = inst_28040__$1);

return statearr_28145;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28126__$1,(22),inst_28041);
} else {
if((state_val_28127 === (31))){
var inst_28124 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28126__$1,inst_28124);
} else {
if((state_val_28127 === (32))){
var inst_28080 = (state_28126[(16)]);
var inst_28085 = inst_28080.cljs$lang$protocol_mask$partition0$;
var inst_28086 = (inst_28085 & (64));
var inst_28087 = inst_28080.cljs$core$ISeq$;
var inst_28088 = (inst_28086) || (inst_28087);
var state_28126__$1 = state_28126;
if(cljs.core.truth_(inst_28088)){
var statearr_28146_28229 = state_28126__$1;
(statearr_28146_28229[(1)] = (35));

} else {
var statearr_28147_28230 = state_28126__$1;
(statearr_28147_28230[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (40))){
var inst_28101 = (state_28126[(20)]);
var inst_28100 = (state_28126[(2)]);
var inst_28101__$1 = cljs.core.get.call(null,inst_28100,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28102 = cljs.core.get.call(null,inst_28100,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28103 = cljs.core.not_empty.call(null,inst_28101__$1);
var state_28126__$1 = (function (){var statearr_28148 = state_28126;
(statearr_28148[(21)] = inst_28102);

(statearr_28148[(20)] = inst_28101__$1);

return statearr_28148;
})();
if(cljs.core.truth_(inst_28103)){
var statearr_28149_28231 = state_28126__$1;
(statearr_28149_28231[(1)] = (41));

} else {
var statearr_28150_28232 = state_28126__$1;
(statearr_28150_28232[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (33))){
var state_28126__$1 = state_28126;
var statearr_28151_28233 = state_28126__$1;
(statearr_28151_28233[(2)] = false);

(statearr_28151_28233[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (13))){
var inst_28000 = (state_28126[(22)]);
var inst_28004 = cljs.core.chunk_first.call(null,inst_28000);
var inst_28005 = cljs.core.chunk_rest.call(null,inst_28000);
var inst_28006 = cljs.core.count.call(null,inst_28004);
var inst_27987 = inst_28005;
var inst_27988 = inst_28004;
var inst_27989 = inst_28006;
var inst_27990 = (0);
var state_28126__$1 = (function (){var statearr_28152 = state_28126;
(statearr_28152[(7)] = inst_27989);

(statearr_28152[(8)] = inst_27987);

(statearr_28152[(9)] = inst_27988);

(statearr_28152[(10)] = inst_27990);

return statearr_28152;
})();
var statearr_28153_28234 = state_28126__$1;
(statearr_28153_28234[(2)] = null);

(statearr_28153_28234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (22))){
var inst_28043 = (state_28126[(23)]);
var inst_28040 = (state_28126[(19)]);
var inst_28044 = (state_28126[(24)]);
var inst_28048 = (state_28126[(25)]);
var inst_28043__$1 = (state_28126[(2)]);
var inst_28044__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28043__$1);
var inst_28045 = (function (){var all_files = inst_28040;
var res_SINGLEQUOTE_ = inst_28043__$1;
var res = inst_28044__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28043,inst_28040,inst_28044,inst_28048,inst_28043__$1,inst_28044__$1,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27723_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27723_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28043,inst_28040,inst_28044,inst_28048,inst_28043__$1,inst_28044__$1,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28046 = cljs.core.filter.call(null,inst_28045,inst_28043__$1);
var inst_28047 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28048__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28047);
var inst_28049 = cljs.core.not_empty.call(null,inst_28048__$1);
var state_28126__$1 = (function (){var statearr_28154 = state_28126;
(statearr_28154[(23)] = inst_28043__$1);

(statearr_28154[(26)] = inst_28046);

(statearr_28154[(24)] = inst_28044__$1);

(statearr_28154[(25)] = inst_28048__$1);

return statearr_28154;
})();
if(cljs.core.truth_(inst_28049)){
var statearr_28155_28235 = state_28126__$1;
(statearr_28155_28235[(1)] = (23));

} else {
var statearr_28156_28236 = state_28126__$1;
(statearr_28156_28236[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (36))){
var state_28126__$1 = state_28126;
var statearr_28157_28237 = state_28126__$1;
(statearr_28157_28237[(2)] = false);

(statearr_28157_28237[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (41))){
var inst_28101 = (state_28126[(20)]);
var inst_28105 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28106 = cljs.core.map.call(null,inst_28105,inst_28101);
var inst_28107 = cljs.core.pr_str.call(null,inst_28106);
var inst_28108 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28107)].join('');
var inst_28109 = figwheel.client.utils.log.call(null,inst_28108);
var state_28126__$1 = state_28126;
var statearr_28158_28238 = state_28126__$1;
(statearr_28158_28238[(2)] = inst_28109);

(statearr_28158_28238[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (43))){
var inst_28102 = (state_28126[(21)]);
var inst_28112 = (state_28126[(2)]);
var inst_28113 = cljs.core.not_empty.call(null,inst_28102);
var state_28126__$1 = (function (){var statearr_28159 = state_28126;
(statearr_28159[(27)] = inst_28112);

return statearr_28159;
})();
if(cljs.core.truth_(inst_28113)){
var statearr_28160_28239 = state_28126__$1;
(statearr_28160_28239[(1)] = (44));

} else {
var statearr_28161_28240 = state_28126__$1;
(statearr_28161_28240[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (29))){
var inst_28080 = (state_28126[(16)]);
var inst_28043 = (state_28126[(23)]);
var inst_28040 = (state_28126[(19)]);
var inst_28046 = (state_28126[(26)]);
var inst_28044 = (state_28126[(24)]);
var inst_28048 = (state_28126[(25)]);
var inst_28076 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28079 = (function (){var all_files = inst_28040;
var res_SINGLEQUOTE_ = inst_28043;
var res = inst_28044;
var files_not_loaded = inst_28046;
var dependencies_that_loaded = inst_28048;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28080,inst_28043,inst_28040,inst_28046,inst_28044,inst_28048,inst_28076,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28078){
var map__28162 = p__28078;
var map__28162__$1 = ((((!((map__28162 == null)))?((((map__28162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28162):map__28162);
var namespace = cljs.core.get.call(null,map__28162__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28080,inst_28043,inst_28040,inst_28046,inst_28044,inst_28048,inst_28076,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28080__$1 = cljs.core.group_by.call(null,inst_28079,inst_28046);
var inst_28082 = (inst_28080__$1 == null);
var inst_28083 = cljs.core.not.call(null,inst_28082);
var state_28126__$1 = (function (){var statearr_28164 = state_28126;
(statearr_28164[(16)] = inst_28080__$1);

(statearr_28164[(28)] = inst_28076);

return statearr_28164;
})();
if(inst_28083){
var statearr_28165_28241 = state_28126__$1;
(statearr_28165_28241[(1)] = (32));

} else {
var statearr_28166_28242 = state_28126__$1;
(statearr_28166_28242[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (44))){
var inst_28102 = (state_28126[(21)]);
var inst_28115 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28102);
var inst_28116 = cljs.core.pr_str.call(null,inst_28115);
var inst_28117 = [cljs.core.str("not required: "),cljs.core.str(inst_28116)].join('');
var inst_28118 = figwheel.client.utils.log.call(null,inst_28117);
var state_28126__$1 = state_28126;
var statearr_28167_28243 = state_28126__$1;
(statearr_28167_28243[(2)] = inst_28118);

(statearr_28167_28243[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (6))){
var inst_28021 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
var statearr_28168_28244 = state_28126__$1;
(statearr_28168_28244[(2)] = inst_28021);

(statearr_28168_28244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (28))){
var inst_28046 = (state_28126[(26)]);
var inst_28073 = (state_28126[(2)]);
var inst_28074 = cljs.core.not_empty.call(null,inst_28046);
var state_28126__$1 = (function (){var statearr_28169 = state_28126;
(statearr_28169[(29)] = inst_28073);

return statearr_28169;
})();
if(cljs.core.truth_(inst_28074)){
var statearr_28170_28245 = state_28126__$1;
(statearr_28170_28245[(1)] = (29));

} else {
var statearr_28171_28246 = state_28126__$1;
(statearr_28171_28246[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (25))){
var inst_28044 = (state_28126[(24)]);
var inst_28060 = (state_28126[(2)]);
var inst_28061 = cljs.core.not_empty.call(null,inst_28044);
var state_28126__$1 = (function (){var statearr_28172 = state_28126;
(statearr_28172[(30)] = inst_28060);

return statearr_28172;
})();
if(cljs.core.truth_(inst_28061)){
var statearr_28173_28247 = state_28126__$1;
(statearr_28173_28247[(1)] = (26));

} else {
var statearr_28174_28248 = state_28126__$1;
(statearr_28174_28248[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (34))){
var inst_28095 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
if(cljs.core.truth_(inst_28095)){
var statearr_28175_28249 = state_28126__$1;
(statearr_28175_28249[(1)] = (38));

} else {
var statearr_28176_28250 = state_28126__$1;
(statearr_28176_28250[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (17))){
var state_28126__$1 = state_28126;
var statearr_28177_28251 = state_28126__$1;
(statearr_28177_28251[(2)] = recompile_dependents);

(statearr_28177_28251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (3))){
var state_28126__$1 = state_28126;
var statearr_28178_28252 = state_28126__$1;
(statearr_28178_28252[(2)] = null);

(statearr_28178_28252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (12))){
var inst_28017 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
var statearr_28179_28253 = state_28126__$1;
(statearr_28179_28253[(2)] = inst_28017);

(statearr_28179_28253[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (2))){
var inst_27979 = (state_28126[(13)]);
var inst_27986 = cljs.core.seq.call(null,inst_27979);
var inst_27987 = inst_27986;
var inst_27988 = null;
var inst_27989 = (0);
var inst_27990 = (0);
var state_28126__$1 = (function (){var statearr_28180 = state_28126;
(statearr_28180[(7)] = inst_27989);

(statearr_28180[(8)] = inst_27987);

(statearr_28180[(9)] = inst_27988);

(statearr_28180[(10)] = inst_27990);

return statearr_28180;
})();
var statearr_28181_28254 = state_28126__$1;
(statearr_28181_28254[(2)] = null);

(statearr_28181_28254[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (23))){
var inst_28043 = (state_28126[(23)]);
var inst_28040 = (state_28126[(19)]);
var inst_28046 = (state_28126[(26)]);
var inst_28044 = (state_28126[(24)]);
var inst_28048 = (state_28126[(25)]);
var inst_28051 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28053 = (function (){var all_files = inst_28040;
var res_SINGLEQUOTE_ = inst_28043;
var res = inst_28044;
var files_not_loaded = inst_28046;
var dependencies_that_loaded = inst_28048;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28043,inst_28040,inst_28046,inst_28044,inst_28048,inst_28051,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28052){
var map__28182 = p__28052;
var map__28182__$1 = ((((!((map__28182 == null)))?((((map__28182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28182):map__28182);
var request_url = cljs.core.get.call(null,map__28182__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28043,inst_28040,inst_28046,inst_28044,inst_28048,inst_28051,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28054 = cljs.core.reverse.call(null,inst_28048);
var inst_28055 = cljs.core.map.call(null,inst_28053,inst_28054);
var inst_28056 = cljs.core.pr_str.call(null,inst_28055);
var inst_28057 = figwheel.client.utils.log.call(null,inst_28056);
var state_28126__$1 = (function (){var statearr_28184 = state_28126;
(statearr_28184[(31)] = inst_28051);

return statearr_28184;
})();
var statearr_28185_28255 = state_28126__$1;
(statearr_28185_28255[(2)] = inst_28057);

(statearr_28185_28255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (35))){
var state_28126__$1 = state_28126;
var statearr_28186_28256 = state_28126__$1;
(statearr_28186_28256[(2)] = true);

(statearr_28186_28256[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (19))){
var inst_28030 = (state_28126[(12)]);
var inst_28036 = figwheel.client.file_reloading.expand_files.call(null,inst_28030);
var state_28126__$1 = state_28126;
var statearr_28187_28257 = state_28126__$1;
(statearr_28187_28257[(2)] = inst_28036);

(statearr_28187_28257[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (11))){
var state_28126__$1 = state_28126;
var statearr_28188_28258 = state_28126__$1;
(statearr_28188_28258[(2)] = null);

(statearr_28188_28258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (9))){
var inst_28019 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
var statearr_28189_28259 = state_28126__$1;
(statearr_28189_28259[(2)] = inst_28019);

(statearr_28189_28259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (5))){
var inst_27989 = (state_28126[(7)]);
var inst_27990 = (state_28126[(10)]);
var inst_27992 = (inst_27990 < inst_27989);
var inst_27993 = inst_27992;
var state_28126__$1 = state_28126;
if(cljs.core.truth_(inst_27993)){
var statearr_28190_28260 = state_28126__$1;
(statearr_28190_28260[(1)] = (7));

} else {
var statearr_28191_28261 = state_28126__$1;
(statearr_28191_28261[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (14))){
var inst_28000 = (state_28126[(22)]);
var inst_28009 = cljs.core.first.call(null,inst_28000);
var inst_28010 = figwheel.client.file_reloading.eval_body.call(null,inst_28009,opts);
var inst_28011 = cljs.core.next.call(null,inst_28000);
var inst_27987 = inst_28011;
var inst_27988 = null;
var inst_27989 = (0);
var inst_27990 = (0);
var state_28126__$1 = (function (){var statearr_28192 = state_28126;
(statearr_28192[(7)] = inst_27989);

(statearr_28192[(8)] = inst_27987);

(statearr_28192[(9)] = inst_27988);

(statearr_28192[(32)] = inst_28010);

(statearr_28192[(10)] = inst_27990);

return statearr_28192;
})();
var statearr_28193_28262 = state_28126__$1;
(statearr_28193_28262[(2)] = null);

(statearr_28193_28262[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (45))){
var state_28126__$1 = state_28126;
var statearr_28194_28263 = state_28126__$1;
(statearr_28194_28263[(2)] = null);

(statearr_28194_28263[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (26))){
var inst_28043 = (state_28126[(23)]);
var inst_28040 = (state_28126[(19)]);
var inst_28046 = (state_28126[(26)]);
var inst_28044 = (state_28126[(24)]);
var inst_28048 = (state_28126[(25)]);
var inst_28063 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28065 = (function (){var all_files = inst_28040;
var res_SINGLEQUOTE_ = inst_28043;
var res = inst_28044;
var files_not_loaded = inst_28046;
var dependencies_that_loaded = inst_28048;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28043,inst_28040,inst_28046,inst_28044,inst_28048,inst_28063,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28064){
var map__28195 = p__28064;
var map__28195__$1 = ((((!((map__28195 == null)))?((((map__28195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28195):map__28195);
var namespace = cljs.core.get.call(null,map__28195__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28195__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28043,inst_28040,inst_28046,inst_28044,inst_28048,inst_28063,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28066 = cljs.core.map.call(null,inst_28065,inst_28044);
var inst_28067 = cljs.core.pr_str.call(null,inst_28066);
var inst_28068 = figwheel.client.utils.log.call(null,inst_28067);
var inst_28069 = (function (){var all_files = inst_28040;
var res_SINGLEQUOTE_ = inst_28043;
var res = inst_28044;
var files_not_loaded = inst_28046;
var dependencies_that_loaded = inst_28048;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28043,inst_28040,inst_28046,inst_28044,inst_28048,inst_28063,inst_28065,inst_28066,inst_28067,inst_28068,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28043,inst_28040,inst_28046,inst_28044,inst_28048,inst_28063,inst_28065,inst_28066,inst_28067,inst_28068,state_val_28127,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28070 = setTimeout(inst_28069,(10));
var state_28126__$1 = (function (){var statearr_28197 = state_28126;
(statearr_28197[(33)] = inst_28068);

(statearr_28197[(34)] = inst_28063);

return statearr_28197;
})();
var statearr_28198_28264 = state_28126__$1;
(statearr_28198_28264[(2)] = inst_28070);

(statearr_28198_28264[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (16))){
var state_28126__$1 = state_28126;
var statearr_28199_28265 = state_28126__$1;
(statearr_28199_28265[(2)] = reload_dependents);

(statearr_28199_28265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (38))){
var inst_28080 = (state_28126[(16)]);
var inst_28097 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28080);
var state_28126__$1 = state_28126;
var statearr_28200_28266 = state_28126__$1;
(statearr_28200_28266[(2)] = inst_28097);

(statearr_28200_28266[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (30))){
var state_28126__$1 = state_28126;
var statearr_28201_28267 = state_28126__$1;
(statearr_28201_28267[(2)] = null);

(statearr_28201_28267[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (10))){
var inst_28000 = (state_28126[(22)]);
var inst_28002 = cljs.core.chunked_seq_QMARK_.call(null,inst_28000);
var state_28126__$1 = state_28126;
if(inst_28002){
var statearr_28202_28268 = state_28126__$1;
(statearr_28202_28268[(1)] = (13));

} else {
var statearr_28203_28269 = state_28126__$1;
(statearr_28203_28269[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (18))){
var inst_28034 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
if(cljs.core.truth_(inst_28034)){
var statearr_28204_28270 = state_28126__$1;
(statearr_28204_28270[(1)] = (19));

} else {
var statearr_28205_28271 = state_28126__$1;
(statearr_28205_28271[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (42))){
var state_28126__$1 = state_28126;
var statearr_28206_28272 = state_28126__$1;
(statearr_28206_28272[(2)] = null);

(statearr_28206_28272[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (37))){
var inst_28092 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
var statearr_28207_28273 = state_28126__$1;
(statearr_28207_28273[(2)] = inst_28092);

(statearr_28207_28273[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (8))){
var inst_27987 = (state_28126[(8)]);
var inst_28000 = (state_28126[(22)]);
var inst_28000__$1 = cljs.core.seq.call(null,inst_27987);
var state_28126__$1 = (function (){var statearr_28208 = state_28126;
(statearr_28208[(22)] = inst_28000__$1);

return statearr_28208;
})();
if(inst_28000__$1){
var statearr_28209_28274 = state_28126__$1;
(statearr_28209_28274[(1)] = (10));

} else {
var statearr_28210_28275 = state_28126__$1;
(statearr_28210_28275[(1)] = (11));

}

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
});})(c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19601__auto__,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19602__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19602__auto____0 = (function (){
var statearr_28214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28214[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19602__auto__);

(statearr_28214[(1)] = (1));

return statearr_28214;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19602__auto____1 = (function (state_28126){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_28126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e28215){if((e28215 instanceof Object)){
var ex__19605__auto__ = e28215;
var statearr_28216_28276 = state_28126;
(statearr_28216_28276[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28277 = state_28126;
state_28126 = G__28277;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19602__auto__ = function(state_28126){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19602__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19602__auto____1.call(this,state_28126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19602__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19602__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19669__auto__ = (function (){var statearr_28217 = f__19668__auto__.call(null);
(statearr_28217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto__);

return statearr_28217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto__,map__27972,map__27972__$1,opts,before_jsload,on_jsload,reload_dependents,map__27973,map__27973__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19667__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28280,link){
var map__28283 = p__28280;
var map__28283__$1 = ((((!((map__28283 == null)))?((((map__28283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28283):map__28283);
var file = cljs.core.get.call(null,map__28283__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28283,map__28283__$1,file){
return (function (p1__28278_SHARP_,p2__28279_SHARP_){
if(cljs.core._EQ_.call(null,p1__28278_SHARP_,p2__28279_SHARP_)){
return p1__28278_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28283,map__28283__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28289){
var map__28290 = p__28289;
var map__28290__$1 = ((((!((map__28290 == null)))?((((map__28290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28290):map__28290);
var match_length = cljs.core.get.call(null,map__28290__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28290__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28285_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28285_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args28292 = [];
var len__17522__auto___28295 = arguments.length;
var i__17523__auto___28296 = (0);
while(true){
if((i__17523__auto___28296 < len__17522__auto___28295)){
args28292.push((arguments[i__17523__auto___28296]));

var G__28297 = (i__17523__auto___28296 + (1));
i__17523__auto___28296 = G__28297;
continue;
} else {
}
break;
}

var G__28294 = args28292.length;
switch (G__28294) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28292.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28299){
var map__28302 = p__28299;
var map__28302__$1 = ((((!((map__28302 == null)))?((((map__28302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28302):map__28302);
var f_data = map__28302__$1;
var file = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,file));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28304,files_msg){
var map__28311 = p__28304;
var map__28311__$1 = ((((!((map__28311 == null)))?((((map__28311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28311):map__28311);
var opts = map__28311__$1;
var on_cssload = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28313_28317 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
var chunk__28314_28318 = null;
var count__28315_28319 = (0);
var i__28316_28320 = (0);
while(true){
if((i__28316_28320 < count__28315_28319)){
var f_28321 = cljs.core._nth.call(null,chunk__28314_28318,i__28316_28320);
figwheel.client.file_reloading.reload_css_file.call(null,f_28321);

var G__28322 = seq__28313_28317;
var G__28323 = chunk__28314_28318;
var G__28324 = count__28315_28319;
var G__28325 = (i__28316_28320 + (1));
seq__28313_28317 = G__28322;
chunk__28314_28318 = G__28323;
count__28315_28319 = G__28324;
i__28316_28320 = G__28325;
continue;
} else {
var temp__4425__auto___28326 = cljs.core.seq.call(null,seq__28313_28317);
if(temp__4425__auto___28326){
var seq__28313_28327__$1 = temp__4425__auto___28326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28313_28327__$1)){
var c__17267__auto___28328 = cljs.core.chunk_first.call(null,seq__28313_28327__$1);
var G__28329 = cljs.core.chunk_rest.call(null,seq__28313_28327__$1);
var G__28330 = c__17267__auto___28328;
var G__28331 = cljs.core.count.call(null,c__17267__auto___28328);
var G__28332 = (0);
seq__28313_28317 = G__28329;
chunk__28314_28318 = G__28330;
count__28315_28319 = G__28331;
i__28316_28320 = G__28332;
continue;
} else {
var f_28333 = cljs.core.first.call(null,seq__28313_28327__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28333);

var G__28334 = cljs.core.next.call(null,seq__28313_28327__$1);
var G__28335 = null;
var G__28336 = (0);
var G__28337 = (0);
seq__28313_28317 = G__28334;
chunk__28314_28318 = G__28335;
count__28315_28319 = G__28336;
i__28316_28320 = G__28337;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28311,map__28311__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28311,map__28311__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440745223849