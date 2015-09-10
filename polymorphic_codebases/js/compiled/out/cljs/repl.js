// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27281_27295 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27282_27296 = null;
var count__27283_27297 = (0);
var i__27284_27298 = (0);
while(true){
if((i__27284_27298 < count__27283_27297)){
var f_27299 = cljs.core._nth.call(null,chunk__27282_27296,i__27284_27298);
cljs.core.println.call(null,"  ",f_27299);

var G__27300 = seq__27281_27295;
var G__27301 = chunk__27282_27296;
var G__27302 = count__27283_27297;
var G__27303 = (i__27284_27298 + (1));
seq__27281_27295 = G__27300;
chunk__27282_27296 = G__27301;
count__27283_27297 = G__27302;
i__27284_27298 = G__27303;
continue;
} else {
var temp__4425__auto___27304 = cljs.core.seq.call(null,seq__27281_27295);
if(temp__4425__auto___27304){
var seq__27281_27305__$1 = temp__4425__auto___27304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27281_27305__$1)){
var c__17267__auto___27306 = cljs.core.chunk_first.call(null,seq__27281_27305__$1);
var G__27307 = cljs.core.chunk_rest.call(null,seq__27281_27305__$1);
var G__27308 = c__17267__auto___27306;
var G__27309 = cljs.core.count.call(null,c__17267__auto___27306);
var G__27310 = (0);
seq__27281_27295 = G__27307;
chunk__27282_27296 = G__27308;
count__27283_27297 = G__27309;
i__27284_27298 = G__27310;
continue;
} else {
var f_27311 = cljs.core.first.call(null,seq__27281_27305__$1);
cljs.core.println.call(null,"  ",f_27311);

var G__27312 = cljs.core.next.call(null,seq__27281_27305__$1);
var G__27313 = null;
var G__27314 = (0);
var G__27315 = (0);
seq__27281_27295 = G__27312;
chunk__27282_27296 = G__27313;
count__27283_27297 = G__27314;
i__27284_27298 = G__27315;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27316 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16483__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16483__auto__)){
return or__16483__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27316);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27316)))?cljs.core.second.call(null,arglists_27316):arglists_27316));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27285 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27286 = null;
var count__27287 = (0);
var i__27288 = (0);
while(true){
if((i__27288 < count__27287)){
var vec__27289 = cljs.core._nth.call(null,chunk__27286,i__27288);
var name = cljs.core.nth.call(null,vec__27289,(0),null);
var map__27290 = cljs.core.nth.call(null,vec__27289,(1),null);
var map__27290__$1 = ((((!((map__27290 == null)))?((((map__27290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27290):map__27290);
var doc = cljs.core.get.call(null,map__27290__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27290__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27317 = seq__27285;
var G__27318 = chunk__27286;
var G__27319 = count__27287;
var G__27320 = (i__27288 + (1));
seq__27285 = G__27317;
chunk__27286 = G__27318;
count__27287 = G__27319;
i__27288 = G__27320;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27285);
if(temp__4425__auto__){
var seq__27285__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27285__$1)){
var c__17267__auto__ = cljs.core.chunk_first.call(null,seq__27285__$1);
var G__27321 = cljs.core.chunk_rest.call(null,seq__27285__$1);
var G__27322 = c__17267__auto__;
var G__27323 = cljs.core.count.call(null,c__17267__auto__);
var G__27324 = (0);
seq__27285 = G__27321;
chunk__27286 = G__27322;
count__27287 = G__27323;
i__27288 = G__27324;
continue;
} else {
var vec__27292 = cljs.core.first.call(null,seq__27285__$1);
var name = cljs.core.nth.call(null,vec__27292,(0),null);
var map__27293 = cljs.core.nth.call(null,vec__27292,(1),null);
var map__27293__$1 = ((((!((map__27293 == null)))?((((map__27293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27293):map__27293);
var doc = cljs.core.get.call(null,map__27293__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27293__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27325 = cljs.core.next.call(null,seq__27285__$1);
var G__27326 = null;
var G__27327 = (0);
var G__27328 = (0);
seq__27285 = G__27325;
chunk__27286 = G__27326;
count__27287 = G__27327;
i__27288 = G__27328;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1440745222558