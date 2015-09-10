// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t28404 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28404 = (function (fn_handler,f,meta28405){
this.fn_handler = fn_handler;
this.f = f;
this.meta28405 = meta28405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28406,meta28405__$1){
var self__ = this;
var _28406__$1 = this;
return (new cljs.core.async.t28404(self__.fn_handler,self__.f,meta28405__$1));
});

cljs.core.async.t28404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28406){
var self__ = this;
var _28406__$1 = this;
return self__.meta28405;
});

cljs.core.async.t28404.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28404.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28404.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28405","meta28405",-1831923587,null)], null);
});

cljs.core.async.t28404.cljs$lang$type = true;

cljs.core.async.t28404.cljs$lang$ctorStr = "cljs.core.async/t28404";

cljs.core.async.t28404.cljs$lang$ctorPrWriter = (function (this__17062__auto__,writer__17063__auto__,opt__17064__auto__){
return cljs.core._write.call(null,writer__17063__auto__,"cljs.core.async/t28404");
});

cljs.core.async.__GT_t28404 = (function cljs$core$async$fn_handler_$___GT_t28404(fn_handler__$1,f__$1,meta28405){
return (new cljs.core.async.t28404(fn_handler__$1,f__$1,meta28405));
});

}

return (new cljs.core.async.t28404(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args28409 = [];
var len__17522__auto___28412 = arguments.length;
var i__17523__auto___28413 = (0);
while(true){
if((i__17523__auto___28413 < len__17522__auto___28412)){
args28409.push((arguments[i__17523__auto___28413]));

var G__28414 = (i__17523__auto___28413 + (1));
i__17523__auto___28413 = G__28414;
continue;
} else {
}
break;
}

var G__28411 = args28409.length;
switch (G__28411) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28409.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args28416 = [];
var len__17522__auto___28419 = arguments.length;
var i__17523__auto___28420 = (0);
while(true){
if((i__17523__auto___28420 < len__17522__auto___28419)){
args28416.push((arguments[i__17523__auto___28420]));

var G__28421 = (i__17523__auto___28420 + (1));
i__17523__auto___28420 = G__28421;
continue;
} else {
}
break;
}

var G__28418 = args28416.length;
switch (G__28418) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28416.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28423 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28423);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28423,ret){
return (function (){
return fn1.call(null,val_28423);
});})(val_28423,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args28424 = [];
var len__17522__auto___28427 = arguments.length;
var i__17523__auto___28428 = (0);
while(true){
if((i__17523__auto___28428 < len__17522__auto___28427)){
args28424.push((arguments[i__17523__auto___28428]));

var G__28429 = (i__17523__auto___28428 + (1));
i__17523__auto___28428 = G__28429;
continue;
} else {
}
break;
}

var G__28426 = args28424.length;
switch (G__28426) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28424.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17367__auto___28431 = n;
var x_28432 = (0);
while(true){
if((x_28432 < n__17367__auto___28431)){
(a[x_28432] = (0));

var G__28433 = (x_28432 + (1));
x_28432 = G__28433;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28434 = (i + (1));
i = G__28434;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28438 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28438 = (function (alt_flag,flag,meta28439){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28439 = meta28439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28440,meta28439__$1){
var self__ = this;
var _28440__$1 = this;
return (new cljs.core.async.t28438(self__.alt_flag,self__.flag,meta28439__$1));
});})(flag))
;

cljs.core.async.t28438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28440){
var self__ = this;
var _28440__$1 = this;
return self__.meta28439;
});})(flag))
;

cljs.core.async.t28438.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28438.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28438.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28438.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28439","meta28439",-1933888414,null)], null);
});})(flag))
;

cljs.core.async.t28438.cljs$lang$type = true;

cljs.core.async.t28438.cljs$lang$ctorStr = "cljs.core.async/t28438";

cljs.core.async.t28438.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17062__auto__,writer__17063__auto__,opt__17064__auto__){
return cljs.core._write.call(null,writer__17063__auto__,"cljs.core.async/t28438");
});})(flag))
;

cljs.core.async.__GT_t28438 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28438(alt_flag__$1,flag__$1,meta28439){
return (new cljs.core.async.t28438(alt_flag__$1,flag__$1,meta28439));
});})(flag))
;

}

return (new cljs.core.async.t28438(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28444 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28444 = (function (alt_handler,flag,cb,meta28445){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28445 = meta28445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28446,meta28445__$1){
var self__ = this;
var _28446__$1 = this;
return (new cljs.core.async.t28444(self__.alt_handler,self__.flag,self__.cb,meta28445__$1));
});

cljs.core.async.t28444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28446){
var self__ = this;
var _28446__$1 = this;
return self__.meta28445;
});

cljs.core.async.t28444.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28445","meta28445",1912136690,null)], null);
});

cljs.core.async.t28444.cljs$lang$type = true;

cljs.core.async.t28444.cljs$lang$ctorStr = "cljs.core.async/t28444";

cljs.core.async.t28444.cljs$lang$ctorPrWriter = (function (this__17062__auto__,writer__17063__auto__,opt__17064__auto__){
return cljs.core._write.call(null,writer__17063__auto__,"cljs.core.async/t28444");
});

cljs.core.async.__GT_t28444 = (function cljs$core$async$alt_handler_$___GT_t28444(alt_handler__$1,flag__$1,cb__$1,meta28445){
return (new cljs.core.async.t28444(alt_handler__$1,flag__$1,cb__$1,meta28445));
});

}

return (new cljs.core.async.t28444(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28447_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28447_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28448_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28448_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16483__auto__ = wport;
if(cljs.core.truth_(or__16483__auto__)){
return or__16483__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28449 = (i + (1));
i = G__28449;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16483__auto__ = ret;
if(cljs.core.truth_(or__16483__auto__)){
return or__16483__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16471__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16471__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16471__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__17529__auto__ = [];
var len__17522__auto___28455 = arguments.length;
var i__17523__auto___28456 = (0);
while(true){
if((i__17523__auto___28456 < len__17522__auto___28455)){
args__17529__auto__.push((arguments[i__17523__auto___28456]));

var G__28457 = (i__17523__auto___28456 + (1));
i__17523__auto___28456 = G__28457;
continue;
} else {
}
break;
}

var argseq__17530__auto__ = ((((1) < args__17529__auto__.length))?(new cljs.core.IndexedSeq(args__17529__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17530__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28452){
var map__28453 = p__28452;
var map__28453__$1 = ((((!((map__28453 == null)))?((((map__28453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28453):map__28453);
var opts = map__28453__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28450){
var G__28451 = cljs.core.first.call(null,seq28450);
var seq28450__$1 = cljs.core.next.call(null,seq28450);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28451,seq28450__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args28458 = [];
var len__17522__auto___28508 = arguments.length;
var i__17523__auto___28509 = (0);
while(true){
if((i__17523__auto___28509 < len__17522__auto___28508)){
args28458.push((arguments[i__17523__auto___28509]));

var G__28510 = (i__17523__auto___28509 + (1));
i__17523__auto___28509 = G__28510;
continue;
} else {
}
break;
}

var G__28460 = args28458.length;
switch (G__28460) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28458.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19667__auto___28512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___28512){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___28512){
return (function (state_28484){
var state_val_28485 = (state_28484[(1)]);
if((state_val_28485 === (7))){
var inst_28480 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28486_28513 = state_28484__$1;
(statearr_28486_28513[(2)] = inst_28480);

(statearr_28486_28513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (1))){
var state_28484__$1 = state_28484;
var statearr_28487_28514 = state_28484__$1;
(statearr_28487_28514[(2)] = null);

(statearr_28487_28514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (4))){
var inst_28463 = (state_28484[(7)]);
var inst_28463__$1 = (state_28484[(2)]);
var inst_28464 = (inst_28463__$1 == null);
var state_28484__$1 = (function (){var statearr_28488 = state_28484;
(statearr_28488[(7)] = inst_28463__$1);

return statearr_28488;
})();
if(cljs.core.truth_(inst_28464)){
var statearr_28489_28515 = state_28484__$1;
(statearr_28489_28515[(1)] = (5));

} else {
var statearr_28490_28516 = state_28484__$1;
(statearr_28490_28516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (13))){
var state_28484__$1 = state_28484;
var statearr_28491_28517 = state_28484__$1;
(statearr_28491_28517[(2)] = null);

(statearr_28491_28517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (6))){
var inst_28463 = (state_28484[(7)]);
var state_28484__$1 = state_28484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28484__$1,(11),to,inst_28463);
} else {
if((state_val_28485 === (3))){
var inst_28482 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28484__$1,inst_28482);
} else {
if((state_val_28485 === (12))){
var state_28484__$1 = state_28484;
var statearr_28492_28518 = state_28484__$1;
(statearr_28492_28518[(2)] = null);

(statearr_28492_28518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (2))){
var state_28484__$1 = state_28484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28484__$1,(4),from);
} else {
if((state_val_28485 === (11))){
var inst_28473 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
if(cljs.core.truth_(inst_28473)){
var statearr_28493_28519 = state_28484__$1;
(statearr_28493_28519[(1)] = (12));

} else {
var statearr_28494_28520 = state_28484__$1;
(statearr_28494_28520[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (9))){
var state_28484__$1 = state_28484;
var statearr_28495_28521 = state_28484__$1;
(statearr_28495_28521[(2)] = null);

(statearr_28495_28521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (5))){
var state_28484__$1 = state_28484;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28496_28522 = state_28484__$1;
(statearr_28496_28522[(1)] = (8));

} else {
var statearr_28497_28523 = state_28484__$1;
(statearr_28497_28523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (14))){
var inst_28478 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28498_28524 = state_28484__$1;
(statearr_28498_28524[(2)] = inst_28478);

(statearr_28498_28524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (10))){
var inst_28470 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28499_28525 = state_28484__$1;
(statearr_28499_28525[(2)] = inst_28470);

(statearr_28499_28525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (8))){
var inst_28467 = cljs.core.async.close_BANG_.call(null,to);
var state_28484__$1 = state_28484;
var statearr_28500_28526 = state_28484__$1;
(statearr_28500_28526[(2)] = inst_28467);

(statearr_28500_28526[(1)] = (10));


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
});})(c__19667__auto___28512))
;
return ((function (switch__19601__auto__,c__19667__auto___28512){
return (function() {
var cljs$core$async$state_machine__19602__auto__ = null;
var cljs$core$async$state_machine__19602__auto____0 = (function (){
var statearr_28504 = [null,null,null,null,null,null,null,null];
(statearr_28504[(0)] = cljs$core$async$state_machine__19602__auto__);

(statearr_28504[(1)] = (1));

return statearr_28504;
});
var cljs$core$async$state_machine__19602__auto____1 = (function (state_28484){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_28484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e28505){if((e28505 instanceof Object)){
var ex__19605__auto__ = e28505;
var statearr_28506_28527 = state_28484;
(statearr_28506_28527[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28528 = state_28484;
state_28484 = G__28528;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$state_machine__19602__auto__ = function(state_28484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19602__auto____1.call(this,state_28484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19602__auto____0;
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19602__auto____1;
return cljs$core$async$state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___28512))
})();
var state__19669__auto__ = (function (){var statearr_28507 = f__19668__auto__.call(null);
(statearr_28507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___28512);

return statearr_28507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___28512))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28712){
var vec__28713 = p__28712;
var v = cljs.core.nth.call(null,vec__28713,(0),null);
var p = cljs.core.nth.call(null,vec__28713,(1),null);
var job = vec__28713;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19667__auto___28895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___28895,res,vec__28713,v,p,job,jobs,results){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___28895,res,vec__28713,v,p,job,jobs,results){
return (function (state_28718){
var state_val_28719 = (state_28718[(1)]);
if((state_val_28719 === (1))){
var state_28718__$1 = state_28718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28718__$1,(2),res,v);
} else {
if((state_val_28719 === (2))){
var inst_28715 = (state_28718[(2)]);
var inst_28716 = cljs.core.async.close_BANG_.call(null,res);
var state_28718__$1 = (function (){var statearr_28720 = state_28718;
(statearr_28720[(7)] = inst_28715);

return statearr_28720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28718__$1,inst_28716);
} else {
return null;
}
}
});})(c__19667__auto___28895,res,vec__28713,v,p,job,jobs,results))
;
return ((function (switch__19601__auto__,c__19667__auto___28895,res,vec__28713,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0 = (function (){
var statearr_28724 = [null,null,null,null,null,null,null,null];
(statearr_28724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__);

(statearr_28724[(1)] = (1));

return statearr_28724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1 = (function (state_28718){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_28718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e28725){if((e28725 instanceof Object)){
var ex__19605__auto__ = e28725;
var statearr_28726_28896 = state_28718;
(statearr_28726_28896[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28897 = state_28718;
state_28718 = G__28897;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__ = function(state_28718){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1.call(this,state_28718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___28895,res,vec__28713,v,p,job,jobs,results))
})();
var state__19669__auto__ = (function (){var statearr_28727 = f__19668__auto__.call(null);
(statearr_28727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___28895);

return statearr_28727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___28895,res,vec__28713,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28728){
var vec__28729 = p__28728;
var v = cljs.core.nth.call(null,vec__28729,(0),null);
var p = cljs.core.nth.call(null,vec__28729,(1),null);
var job = vec__28729;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17367__auto___28898 = n;
var __28899 = (0);
while(true){
if((__28899 < n__17367__auto___28898)){
var G__28730_28900 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28730_28900) {
case "compute":
var c__19667__auto___28902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28899,c__19667__auto___28902,G__28730_28900,n__17367__auto___28898,jobs,results,process,async){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (__28899,c__19667__auto___28902,G__28730_28900,n__17367__auto___28898,jobs,results,process,async){
return (function (state_28743){
var state_val_28744 = (state_28743[(1)]);
if((state_val_28744 === (1))){
var state_28743__$1 = state_28743;
var statearr_28745_28903 = state_28743__$1;
(statearr_28745_28903[(2)] = null);

(statearr_28745_28903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (2))){
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28743__$1,(4),jobs);
} else {
if((state_val_28744 === (3))){
var inst_28741 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28743__$1,inst_28741);
} else {
if((state_val_28744 === (4))){
var inst_28733 = (state_28743[(2)]);
var inst_28734 = process.call(null,inst_28733);
var state_28743__$1 = state_28743;
if(cljs.core.truth_(inst_28734)){
var statearr_28746_28904 = state_28743__$1;
(statearr_28746_28904[(1)] = (5));

} else {
var statearr_28747_28905 = state_28743__$1;
(statearr_28747_28905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (5))){
var state_28743__$1 = state_28743;
var statearr_28748_28906 = state_28743__$1;
(statearr_28748_28906[(2)] = null);

(statearr_28748_28906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (6))){
var state_28743__$1 = state_28743;
var statearr_28749_28907 = state_28743__$1;
(statearr_28749_28907[(2)] = null);

(statearr_28749_28907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (7))){
var inst_28739 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28750_28908 = state_28743__$1;
(statearr_28750_28908[(2)] = inst_28739);

(statearr_28750_28908[(1)] = (3));


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
});})(__28899,c__19667__auto___28902,G__28730_28900,n__17367__auto___28898,jobs,results,process,async))
;
return ((function (__28899,switch__19601__auto__,c__19667__auto___28902,G__28730_28900,n__17367__auto___28898,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0 = (function (){
var statearr_28754 = [null,null,null,null,null,null,null];
(statearr_28754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__);

(statearr_28754[(1)] = (1));

return statearr_28754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1 = (function (state_28743){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_28743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e28755){if((e28755 instanceof Object)){
var ex__19605__auto__ = e28755;
var statearr_28756_28909 = state_28743;
(statearr_28756_28909[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28910 = state_28743;
state_28743 = G__28910;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__ = function(state_28743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1.call(this,state_28743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__;
})()
;})(__28899,switch__19601__auto__,c__19667__auto___28902,G__28730_28900,n__17367__auto___28898,jobs,results,process,async))
})();
var state__19669__auto__ = (function (){var statearr_28757 = f__19668__auto__.call(null);
(statearr_28757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___28902);

return statearr_28757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(__28899,c__19667__auto___28902,G__28730_28900,n__17367__auto___28898,jobs,results,process,async))
);


break;
case "async":
var c__19667__auto___28911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28899,c__19667__auto___28911,G__28730_28900,n__17367__auto___28898,jobs,results,process,async){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (__28899,c__19667__auto___28911,G__28730_28900,n__17367__auto___28898,jobs,results,process,async){
return (function (state_28770){
var state_val_28771 = (state_28770[(1)]);
if((state_val_28771 === (1))){
var state_28770__$1 = state_28770;
var statearr_28772_28912 = state_28770__$1;
(statearr_28772_28912[(2)] = null);

(statearr_28772_28912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (2))){
var state_28770__$1 = state_28770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28770__$1,(4),jobs);
} else {
if((state_val_28771 === (3))){
var inst_28768 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28770__$1,inst_28768);
} else {
if((state_val_28771 === (4))){
var inst_28760 = (state_28770[(2)]);
var inst_28761 = async.call(null,inst_28760);
var state_28770__$1 = state_28770;
if(cljs.core.truth_(inst_28761)){
var statearr_28773_28913 = state_28770__$1;
(statearr_28773_28913[(1)] = (5));

} else {
var statearr_28774_28914 = state_28770__$1;
(statearr_28774_28914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (5))){
var state_28770__$1 = state_28770;
var statearr_28775_28915 = state_28770__$1;
(statearr_28775_28915[(2)] = null);

(statearr_28775_28915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (6))){
var state_28770__$1 = state_28770;
var statearr_28776_28916 = state_28770__$1;
(statearr_28776_28916[(2)] = null);

(statearr_28776_28916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28771 === (7))){
var inst_28766 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
var statearr_28777_28917 = state_28770__$1;
(statearr_28777_28917[(2)] = inst_28766);

(statearr_28777_28917[(1)] = (3));


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
});})(__28899,c__19667__auto___28911,G__28730_28900,n__17367__auto___28898,jobs,results,process,async))
;
return ((function (__28899,switch__19601__auto__,c__19667__auto___28911,G__28730_28900,n__17367__auto___28898,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0 = (function (){
var statearr_28781 = [null,null,null,null,null,null,null];
(statearr_28781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__);

(statearr_28781[(1)] = (1));

return statearr_28781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1 = (function (state_28770){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_28770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e28782){if((e28782 instanceof Object)){
var ex__19605__auto__ = e28782;
var statearr_28783_28918 = state_28770;
(statearr_28783_28918[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28919 = state_28770;
state_28770 = G__28919;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__ = function(state_28770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1.call(this,state_28770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__;
})()
;})(__28899,switch__19601__auto__,c__19667__auto___28911,G__28730_28900,n__17367__auto___28898,jobs,results,process,async))
})();
var state__19669__auto__ = (function (){var statearr_28784 = f__19668__auto__.call(null);
(statearr_28784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___28911);

return statearr_28784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(__28899,c__19667__auto___28911,G__28730_28900,n__17367__auto___28898,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28920 = (__28899 + (1));
__28899 = G__28920;
continue;
} else {
}
break;
}

var c__19667__auto___28921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___28921,jobs,results,process,async){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___28921,jobs,results,process,async){
return (function (state_28806){
var state_val_28807 = (state_28806[(1)]);
if((state_val_28807 === (1))){
var state_28806__$1 = state_28806;
var statearr_28808_28922 = state_28806__$1;
(statearr_28808_28922[(2)] = null);

(statearr_28808_28922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (2))){
var state_28806__$1 = state_28806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28806__$1,(4),from);
} else {
if((state_val_28807 === (3))){
var inst_28804 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28806__$1,inst_28804);
} else {
if((state_val_28807 === (4))){
var inst_28787 = (state_28806[(7)]);
var inst_28787__$1 = (state_28806[(2)]);
var inst_28788 = (inst_28787__$1 == null);
var state_28806__$1 = (function (){var statearr_28809 = state_28806;
(statearr_28809[(7)] = inst_28787__$1);

return statearr_28809;
})();
if(cljs.core.truth_(inst_28788)){
var statearr_28810_28923 = state_28806__$1;
(statearr_28810_28923[(1)] = (5));

} else {
var statearr_28811_28924 = state_28806__$1;
(statearr_28811_28924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (5))){
var inst_28790 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28806__$1 = state_28806;
var statearr_28812_28925 = state_28806__$1;
(statearr_28812_28925[(2)] = inst_28790);

(statearr_28812_28925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (6))){
var inst_28787 = (state_28806[(7)]);
var inst_28792 = (state_28806[(8)]);
var inst_28792__$1 = cljs.core.async.chan.call(null,(1));
var inst_28793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28794 = [inst_28787,inst_28792__$1];
var inst_28795 = (new cljs.core.PersistentVector(null,2,(5),inst_28793,inst_28794,null));
var state_28806__$1 = (function (){var statearr_28813 = state_28806;
(statearr_28813[(8)] = inst_28792__$1);

return statearr_28813;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28806__$1,(8),jobs,inst_28795);
} else {
if((state_val_28807 === (7))){
var inst_28802 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28814_28926 = state_28806__$1;
(statearr_28814_28926[(2)] = inst_28802);

(statearr_28814_28926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (8))){
var inst_28792 = (state_28806[(8)]);
var inst_28797 = (state_28806[(2)]);
var state_28806__$1 = (function (){var statearr_28815 = state_28806;
(statearr_28815[(9)] = inst_28797);

return statearr_28815;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28806__$1,(9),results,inst_28792);
} else {
if((state_val_28807 === (9))){
var inst_28799 = (state_28806[(2)]);
var state_28806__$1 = (function (){var statearr_28816 = state_28806;
(statearr_28816[(10)] = inst_28799);

return statearr_28816;
})();
var statearr_28817_28927 = state_28806__$1;
(statearr_28817_28927[(2)] = null);

(statearr_28817_28927[(1)] = (2));


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
});})(c__19667__auto___28921,jobs,results,process,async))
;
return ((function (switch__19601__auto__,c__19667__auto___28921,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0 = (function (){
var statearr_28821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__);

(statearr_28821[(1)] = (1));

return statearr_28821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1 = (function (state_28806){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_28806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e28822){if((e28822 instanceof Object)){
var ex__19605__auto__ = e28822;
var statearr_28823_28928 = state_28806;
(statearr_28823_28928[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28929 = state_28806;
state_28806 = G__28929;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__ = function(state_28806){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1.call(this,state_28806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___28921,jobs,results,process,async))
})();
var state__19669__auto__ = (function (){var statearr_28824 = f__19668__auto__.call(null);
(statearr_28824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___28921);

return statearr_28824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___28921,jobs,results,process,async))
);


var c__19667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto__,jobs,results,process,async){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto__,jobs,results,process,async){
return (function (state_28862){
var state_val_28863 = (state_28862[(1)]);
if((state_val_28863 === (7))){
var inst_28858 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
var statearr_28864_28930 = state_28862__$1;
(statearr_28864_28930[(2)] = inst_28858);

(statearr_28864_28930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (20))){
var state_28862__$1 = state_28862;
var statearr_28865_28931 = state_28862__$1;
(statearr_28865_28931[(2)] = null);

(statearr_28865_28931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (1))){
var state_28862__$1 = state_28862;
var statearr_28866_28932 = state_28862__$1;
(statearr_28866_28932[(2)] = null);

(statearr_28866_28932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (4))){
var inst_28827 = (state_28862[(7)]);
var inst_28827__$1 = (state_28862[(2)]);
var inst_28828 = (inst_28827__$1 == null);
var state_28862__$1 = (function (){var statearr_28867 = state_28862;
(statearr_28867[(7)] = inst_28827__$1);

return statearr_28867;
})();
if(cljs.core.truth_(inst_28828)){
var statearr_28868_28933 = state_28862__$1;
(statearr_28868_28933[(1)] = (5));

} else {
var statearr_28869_28934 = state_28862__$1;
(statearr_28869_28934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (15))){
var inst_28840 = (state_28862[(8)]);
var state_28862__$1 = state_28862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28862__$1,(18),to,inst_28840);
} else {
if((state_val_28863 === (21))){
var inst_28853 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
var statearr_28870_28935 = state_28862__$1;
(statearr_28870_28935[(2)] = inst_28853);

(statearr_28870_28935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (13))){
var inst_28855 = (state_28862[(2)]);
var state_28862__$1 = (function (){var statearr_28871 = state_28862;
(statearr_28871[(9)] = inst_28855);

return statearr_28871;
})();
var statearr_28872_28936 = state_28862__$1;
(statearr_28872_28936[(2)] = null);

(statearr_28872_28936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (6))){
var inst_28827 = (state_28862[(7)]);
var state_28862__$1 = state_28862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28862__$1,(11),inst_28827);
} else {
if((state_val_28863 === (17))){
var inst_28848 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
if(cljs.core.truth_(inst_28848)){
var statearr_28873_28937 = state_28862__$1;
(statearr_28873_28937[(1)] = (19));

} else {
var statearr_28874_28938 = state_28862__$1;
(statearr_28874_28938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (3))){
var inst_28860 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28862__$1,inst_28860);
} else {
if((state_val_28863 === (12))){
var inst_28837 = (state_28862[(10)]);
var state_28862__$1 = state_28862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28862__$1,(14),inst_28837);
} else {
if((state_val_28863 === (2))){
var state_28862__$1 = state_28862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28862__$1,(4),results);
} else {
if((state_val_28863 === (19))){
var state_28862__$1 = state_28862;
var statearr_28875_28939 = state_28862__$1;
(statearr_28875_28939[(2)] = null);

(statearr_28875_28939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (11))){
var inst_28837 = (state_28862[(2)]);
var state_28862__$1 = (function (){var statearr_28876 = state_28862;
(statearr_28876[(10)] = inst_28837);

return statearr_28876;
})();
var statearr_28877_28940 = state_28862__$1;
(statearr_28877_28940[(2)] = null);

(statearr_28877_28940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (9))){
var state_28862__$1 = state_28862;
var statearr_28878_28941 = state_28862__$1;
(statearr_28878_28941[(2)] = null);

(statearr_28878_28941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (5))){
var state_28862__$1 = state_28862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28879_28942 = state_28862__$1;
(statearr_28879_28942[(1)] = (8));

} else {
var statearr_28880_28943 = state_28862__$1;
(statearr_28880_28943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (14))){
var inst_28842 = (state_28862[(11)]);
var inst_28840 = (state_28862[(8)]);
var inst_28840__$1 = (state_28862[(2)]);
var inst_28841 = (inst_28840__$1 == null);
var inst_28842__$1 = cljs.core.not.call(null,inst_28841);
var state_28862__$1 = (function (){var statearr_28881 = state_28862;
(statearr_28881[(11)] = inst_28842__$1);

(statearr_28881[(8)] = inst_28840__$1);

return statearr_28881;
})();
if(inst_28842__$1){
var statearr_28882_28944 = state_28862__$1;
(statearr_28882_28944[(1)] = (15));

} else {
var statearr_28883_28945 = state_28862__$1;
(statearr_28883_28945[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (16))){
var inst_28842 = (state_28862[(11)]);
var state_28862__$1 = state_28862;
var statearr_28884_28946 = state_28862__$1;
(statearr_28884_28946[(2)] = inst_28842);

(statearr_28884_28946[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (10))){
var inst_28834 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
var statearr_28885_28947 = state_28862__$1;
(statearr_28885_28947[(2)] = inst_28834);

(statearr_28885_28947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (18))){
var inst_28845 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
var statearr_28886_28948 = state_28862__$1;
(statearr_28886_28948[(2)] = inst_28845);

(statearr_28886_28948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (8))){
var inst_28831 = cljs.core.async.close_BANG_.call(null,to);
var state_28862__$1 = state_28862;
var statearr_28887_28949 = state_28862__$1;
(statearr_28887_28949[(2)] = inst_28831);

(statearr_28887_28949[(1)] = (10));


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
});})(c__19667__auto__,jobs,results,process,async))
;
return ((function (switch__19601__auto__,c__19667__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0 = (function (){
var statearr_28891 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__);

(statearr_28891[(1)] = (1));

return statearr_28891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1 = (function (state_28862){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_28862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e28892){if((e28892 instanceof Object)){
var ex__19605__auto__ = e28892;
var statearr_28893_28950 = state_28862;
(statearr_28893_28950[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28951 = state_28862;
state_28862 = G__28951;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__ = function(state_28862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1.call(this,state_28862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto__,jobs,results,process,async))
})();
var state__19669__auto__ = (function (){var statearr_28894 = f__19668__auto__.call(null);
(statearr_28894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto__);

return statearr_28894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto__,jobs,results,process,async))
);

return c__19667__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args28952 = [];
var len__17522__auto___28955 = arguments.length;
var i__17523__auto___28956 = (0);
while(true){
if((i__17523__auto___28956 < len__17522__auto___28955)){
args28952.push((arguments[i__17523__auto___28956]));

var G__28957 = (i__17523__auto___28956 + (1));
i__17523__auto___28956 = G__28957;
continue;
} else {
}
break;
}

var G__28954 = args28952.length;
switch (G__28954) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28952.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args28959 = [];
var len__17522__auto___28962 = arguments.length;
var i__17523__auto___28963 = (0);
while(true){
if((i__17523__auto___28963 < len__17522__auto___28962)){
args28959.push((arguments[i__17523__auto___28963]));

var G__28964 = (i__17523__auto___28963 + (1));
i__17523__auto___28963 = G__28964;
continue;
} else {
}
break;
}

var G__28961 = args28959.length;
switch (G__28961) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28959.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args28966 = [];
var len__17522__auto___29019 = arguments.length;
var i__17523__auto___29020 = (0);
while(true){
if((i__17523__auto___29020 < len__17522__auto___29019)){
args28966.push((arguments[i__17523__auto___29020]));

var G__29021 = (i__17523__auto___29020 + (1));
i__17523__auto___29020 = G__29021;
continue;
} else {
}
break;
}

var G__28968 = args28966.length;
switch (G__28968) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28966.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19667__auto___29023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___29023,tc,fc){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___29023,tc,fc){
return (function (state_28994){
var state_val_28995 = (state_28994[(1)]);
if((state_val_28995 === (7))){
var inst_28990 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_28996_29024 = state_28994__$1;
(statearr_28996_29024[(2)] = inst_28990);

(statearr_28996_29024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (1))){
var state_28994__$1 = state_28994;
var statearr_28997_29025 = state_28994__$1;
(statearr_28997_29025[(2)] = null);

(statearr_28997_29025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (4))){
var inst_28971 = (state_28994[(7)]);
var inst_28971__$1 = (state_28994[(2)]);
var inst_28972 = (inst_28971__$1 == null);
var state_28994__$1 = (function (){var statearr_28998 = state_28994;
(statearr_28998[(7)] = inst_28971__$1);

return statearr_28998;
})();
if(cljs.core.truth_(inst_28972)){
var statearr_28999_29026 = state_28994__$1;
(statearr_28999_29026[(1)] = (5));

} else {
var statearr_29000_29027 = state_28994__$1;
(statearr_29000_29027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (13))){
var state_28994__$1 = state_28994;
var statearr_29001_29028 = state_28994__$1;
(statearr_29001_29028[(2)] = null);

(statearr_29001_29028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (6))){
var inst_28971 = (state_28994[(7)]);
var inst_28977 = p.call(null,inst_28971);
var state_28994__$1 = state_28994;
if(cljs.core.truth_(inst_28977)){
var statearr_29002_29029 = state_28994__$1;
(statearr_29002_29029[(1)] = (9));

} else {
var statearr_29003_29030 = state_28994__$1;
(statearr_29003_29030[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (3))){
var inst_28992 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28994__$1,inst_28992);
} else {
if((state_val_28995 === (12))){
var state_28994__$1 = state_28994;
var statearr_29004_29031 = state_28994__$1;
(statearr_29004_29031[(2)] = null);

(statearr_29004_29031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (2))){
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28994__$1,(4),ch);
} else {
if((state_val_28995 === (11))){
var inst_28971 = (state_28994[(7)]);
var inst_28981 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28994__$1,(8),inst_28981,inst_28971);
} else {
if((state_val_28995 === (9))){
var state_28994__$1 = state_28994;
var statearr_29005_29032 = state_28994__$1;
(statearr_29005_29032[(2)] = tc);

(statearr_29005_29032[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (5))){
var inst_28974 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28975 = cljs.core.async.close_BANG_.call(null,fc);
var state_28994__$1 = (function (){var statearr_29006 = state_28994;
(statearr_29006[(8)] = inst_28974);

return statearr_29006;
})();
var statearr_29007_29033 = state_28994__$1;
(statearr_29007_29033[(2)] = inst_28975);

(statearr_29007_29033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (14))){
var inst_28988 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_29008_29034 = state_28994__$1;
(statearr_29008_29034[(2)] = inst_28988);

(statearr_29008_29034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (10))){
var state_28994__$1 = state_28994;
var statearr_29009_29035 = state_28994__$1;
(statearr_29009_29035[(2)] = fc);

(statearr_29009_29035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (8))){
var inst_28983 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
if(cljs.core.truth_(inst_28983)){
var statearr_29010_29036 = state_28994__$1;
(statearr_29010_29036[(1)] = (12));

} else {
var statearr_29011_29037 = state_28994__$1;
(statearr_29011_29037[(1)] = (13));

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
});})(c__19667__auto___29023,tc,fc))
;
return ((function (switch__19601__auto__,c__19667__auto___29023,tc,fc){
return (function() {
var cljs$core$async$state_machine__19602__auto__ = null;
var cljs$core$async$state_machine__19602__auto____0 = (function (){
var statearr_29015 = [null,null,null,null,null,null,null,null,null];
(statearr_29015[(0)] = cljs$core$async$state_machine__19602__auto__);

(statearr_29015[(1)] = (1));

return statearr_29015;
});
var cljs$core$async$state_machine__19602__auto____1 = (function (state_28994){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_28994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e29016){if((e29016 instanceof Object)){
var ex__19605__auto__ = e29016;
var statearr_29017_29038 = state_28994;
(statearr_29017_29038[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29039 = state_28994;
state_28994 = G__29039;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$state_machine__19602__auto__ = function(state_28994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19602__auto____1.call(this,state_28994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19602__auto____0;
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19602__auto____1;
return cljs$core$async$state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___29023,tc,fc))
})();
var state__19669__auto__ = (function (){var statearr_29018 = f__19668__auto__.call(null);
(statearr_29018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___29023);

return statearr_29018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___29023,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto__){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto__){
return (function (state_29086){
var state_val_29087 = (state_29086[(1)]);
if((state_val_29087 === (1))){
var inst_29072 = init;
var state_29086__$1 = (function (){var statearr_29088 = state_29086;
(statearr_29088[(7)] = inst_29072);

return statearr_29088;
})();
var statearr_29089_29104 = state_29086__$1;
(statearr_29089_29104[(2)] = null);

(statearr_29089_29104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (2))){
var state_29086__$1 = state_29086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29086__$1,(4),ch);
} else {
if((state_val_29087 === (3))){
var inst_29084 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29086__$1,inst_29084);
} else {
if((state_val_29087 === (4))){
var inst_29075 = (state_29086[(8)]);
var inst_29075__$1 = (state_29086[(2)]);
var inst_29076 = (inst_29075__$1 == null);
var state_29086__$1 = (function (){var statearr_29090 = state_29086;
(statearr_29090[(8)] = inst_29075__$1);

return statearr_29090;
})();
if(cljs.core.truth_(inst_29076)){
var statearr_29091_29105 = state_29086__$1;
(statearr_29091_29105[(1)] = (5));

} else {
var statearr_29092_29106 = state_29086__$1;
(statearr_29092_29106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (5))){
var inst_29072 = (state_29086[(7)]);
var state_29086__$1 = state_29086;
var statearr_29093_29107 = state_29086__$1;
(statearr_29093_29107[(2)] = inst_29072);

(statearr_29093_29107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (6))){
var inst_29075 = (state_29086[(8)]);
var inst_29072 = (state_29086[(7)]);
var inst_29079 = f.call(null,inst_29072,inst_29075);
var inst_29072__$1 = inst_29079;
var state_29086__$1 = (function (){var statearr_29094 = state_29086;
(statearr_29094[(7)] = inst_29072__$1);

return statearr_29094;
})();
var statearr_29095_29108 = state_29086__$1;
(statearr_29095_29108[(2)] = null);

(statearr_29095_29108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (7))){
var inst_29082 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
var statearr_29096_29109 = state_29086__$1;
(statearr_29096_29109[(2)] = inst_29082);

(statearr_29096_29109[(1)] = (3));


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
});})(c__19667__auto__))
;
return ((function (switch__19601__auto__,c__19667__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19602__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19602__auto____0 = (function (){
var statearr_29100 = [null,null,null,null,null,null,null,null,null];
(statearr_29100[(0)] = cljs$core$async$reduce_$_state_machine__19602__auto__);

(statearr_29100[(1)] = (1));

return statearr_29100;
});
var cljs$core$async$reduce_$_state_machine__19602__auto____1 = (function (state_29086){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_29086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e29101){if((e29101 instanceof Object)){
var ex__19605__auto__ = e29101;
var statearr_29102_29110 = state_29086;
(statearr_29102_29110[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29111 = state_29086;
state_29086 = G__29111;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19602__auto__ = function(state_29086){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19602__auto____1.call(this,state_29086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19602__auto____0;
cljs$core$async$reduce_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19602__auto____1;
return cljs$core$async$reduce_$_state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto__))
})();
var state__19669__auto__ = (function (){var statearr_29103 = f__19668__auto__.call(null);
(statearr_29103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto__);

return statearr_29103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto__))
);

return c__19667__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args29112 = [];
var len__17522__auto___29164 = arguments.length;
var i__17523__auto___29165 = (0);
while(true){
if((i__17523__auto___29165 < len__17522__auto___29164)){
args29112.push((arguments[i__17523__auto___29165]));

var G__29166 = (i__17523__auto___29165 + (1));
i__17523__auto___29165 = G__29166;
continue;
} else {
}
break;
}

var G__29114 = args29112.length;
switch (G__29114) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29112.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto__){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto__){
return (function (state_29139){
var state_val_29140 = (state_29139[(1)]);
if((state_val_29140 === (7))){
var inst_29121 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29141_29168 = state_29139__$1;
(statearr_29141_29168[(2)] = inst_29121);

(statearr_29141_29168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (1))){
var inst_29115 = cljs.core.seq.call(null,coll);
var inst_29116 = inst_29115;
var state_29139__$1 = (function (){var statearr_29142 = state_29139;
(statearr_29142[(7)] = inst_29116);

return statearr_29142;
})();
var statearr_29143_29169 = state_29139__$1;
(statearr_29143_29169[(2)] = null);

(statearr_29143_29169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (4))){
var inst_29116 = (state_29139[(7)]);
var inst_29119 = cljs.core.first.call(null,inst_29116);
var state_29139__$1 = state_29139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29139__$1,(7),ch,inst_29119);
} else {
if((state_val_29140 === (13))){
var inst_29133 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29144_29170 = state_29139__$1;
(statearr_29144_29170[(2)] = inst_29133);

(statearr_29144_29170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (6))){
var inst_29124 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
if(cljs.core.truth_(inst_29124)){
var statearr_29145_29171 = state_29139__$1;
(statearr_29145_29171[(1)] = (8));

} else {
var statearr_29146_29172 = state_29139__$1;
(statearr_29146_29172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (3))){
var inst_29137 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29139__$1,inst_29137);
} else {
if((state_val_29140 === (12))){
var state_29139__$1 = state_29139;
var statearr_29147_29173 = state_29139__$1;
(statearr_29147_29173[(2)] = null);

(statearr_29147_29173[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (2))){
var inst_29116 = (state_29139[(7)]);
var state_29139__$1 = state_29139;
if(cljs.core.truth_(inst_29116)){
var statearr_29148_29174 = state_29139__$1;
(statearr_29148_29174[(1)] = (4));

} else {
var statearr_29149_29175 = state_29139__$1;
(statearr_29149_29175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (11))){
var inst_29130 = cljs.core.async.close_BANG_.call(null,ch);
var state_29139__$1 = state_29139;
var statearr_29150_29176 = state_29139__$1;
(statearr_29150_29176[(2)] = inst_29130);

(statearr_29150_29176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (9))){
var state_29139__$1 = state_29139;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29151_29177 = state_29139__$1;
(statearr_29151_29177[(1)] = (11));

} else {
var statearr_29152_29178 = state_29139__$1;
(statearr_29152_29178[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (5))){
var inst_29116 = (state_29139[(7)]);
var state_29139__$1 = state_29139;
var statearr_29153_29179 = state_29139__$1;
(statearr_29153_29179[(2)] = inst_29116);

(statearr_29153_29179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (10))){
var inst_29135 = (state_29139[(2)]);
var state_29139__$1 = state_29139;
var statearr_29154_29180 = state_29139__$1;
(statearr_29154_29180[(2)] = inst_29135);

(statearr_29154_29180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29140 === (8))){
var inst_29116 = (state_29139[(7)]);
var inst_29126 = cljs.core.next.call(null,inst_29116);
var inst_29116__$1 = inst_29126;
var state_29139__$1 = (function (){var statearr_29155 = state_29139;
(statearr_29155[(7)] = inst_29116__$1);

return statearr_29155;
})();
var statearr_29156_29181 = state_29139__$1;
(statearr_29156_29181[(2)] = null);

(statearr_29156_29181[(1)] = (2));


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
});})(c__19667__auto__))
;
return ((function (switch__19601__auto__,c__19667__auto__){
return (function() {
var cljs$core$async$state_machine__19602__auto__ = null;
var cljs$core$async$state_machine__19602__auto____0 = (function (){
var statearr_29160 = [null,null,null,null,null,null,null,null];
(statearr_29160[(0)] = cljs$core$async$state_machine__19602__auto__);

(statearr_29160[(1)] = (1));

return statearr_29160;
});
var cljs$core$async$state_machine__19602__auto____1 = (function (state_29139){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_29139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e29161){if((e29161 instanceof Object)){
var ex__19605__auto__ = e29161;
var statearr_29162_29182 = state_29139;
(statearr_29162_29182[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29183 = state_29139;
state_29139 = G__29183;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$state_machine__19602__auto__ = function(state_29139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19602__auto____1.call(this,state_29139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19602__auto____0;
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19602__auto____1;
return cljs$core$async$state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto__))
})();
var state__19669__auto__ = (function (){var statearr_29163 = f__19668__auto__.call(null);
(statearr_29163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto__);

return statearr_29163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto__))
);

return c__19667__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17119__auto__ = (((_ == null))?null:_);
var m__17120__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17119__auto__)]);
if(!((m__17120__auto__ == null))){
return m__17120__auto__.call(null,_);
} else {
var m__17120__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17120__auto____$1 == null))){
return m__17120__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17119__auto__ = (((m == null))?null:m);
var m__17120__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17119__auto__)]);
if(!((m__17120__auto__ == null))){
return m__17120__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17120__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17120__auto____$1 == null))){
return m__17120__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17119__auto__ = (((m == null))?null:m);
var m__17120__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17119__auto__)]);
if(!((m__17120__auto__ == null))){
return m__17120__auto__.call(null,m,ch);
} else {
var m__17120__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17120__auto____$1 == null))){
return m__17120__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17119__auto__ = (((m == null))?null:m);
var m__17120__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17119__auto__)]);
if(!((m__17120__auto__ == null))){
return m__17120__auto__.call(null,m);
} else {
var m__17120__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17120__auto____$1 == null))){
return m__17120__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t29409 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29409 = (function (mult,ch,cs,meta29410){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29410 = meta29410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29411,meta29410__$1){
var self__ = this;
var _29411__$1 = this;
return (new cljs.core.async.t29409(self__.mult,self__.ch,self__.cs,meta29410__$1));
});})(cs))
;

cljs.core.async.t29409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29411){
var self__ = this;
var _29411__$1 = this;
return self__.meta29410;
});})(cs))
;

cljs.core.async.t29409.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29409.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29409.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29409.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29409.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29409.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29410","meta29410",490355035,null)], null);
});})(cs))
;

cljs.core.async.t29409.cljs$lang$type = true;

cljs.core.async.t29409.cljs$lang$ctorStr = "cljs.core.async/t29409";

cljs.core.async.t29409.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17062__auto__,writer__17063__auto__,opt__17064__auto__){
return cljs.core._write.call(null,writer__17063__auto__,"cljs.core.async/t29409");
});})(cs))
;

cljs.core.async.__GT_t29409 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29409(mult__$1,ch__$1,cs__$1,meta29410){
return (new cljs.core.async.t29409(mult__$1,ch__$1,cs__$1,meta29410));
});})(cs))
;

}

return (new cljs.core.async.t29409(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19667__auto___29630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___29630,cs,m,dchan,dctr,done){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___29630,cs,m,dchan,dctr,done){
return (function (state_29542){
var state_val_29543 = (state_29542[(1)]);
if((state_val_29543 === (7))){
var inst_29538 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29544_29631 = state_29542__$1;
(statearr_29544_29631[(2)] = inst_29538);

(statearr_29544_29631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (20))){
var inst_29443 = (state_29542[(7)]);
var inst_29453 = cljs.core.first.call(null,inst_29443);
var inst_29454 = cljs.core.nth.call(null,inst_29453,(0),null);
var inst_29455 = cljs.core.nth.call(null,inst_29453,(1),null);
var state_29542__$1 = (function (){var statearr_29545 = state_29542;
(statearr_29545[(8)] = inst_29454);

return statearr_29545;
})();
if(cljs.core.truth_(inst_29455)){
var statearr_29546_29632 = state_29542__$1;
(statearr_29546_29632[(1)] = (22));

} else {
var statearr_29547_29633 = state_29542__$1;
(statearr_29547_29633[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (27))){
var inst_29485 = (state_29542[(9)]);
var inst_29414 = (state_29542[(10)]);
var inst_29490 = (state_29542[(11)]);
var inst_29483 = (state_29542[(12)]);
var inst_29490__$1 = cljs.core._nth.call(null,inst_29483,inst_29485);
var inst_29491 = cljs.core.async.put_BANG_.call(null,inst_29490__$1,inst_29414,done);
var state_29542__$1 = (function (){var statearr_29548 = state_29542;
(statearr_29548[(11)] = inst_29490__$1);

return statearr_29548;
})();
if(cljs.core.truth_(inst_29491)){
var statearr_29549_29634 = state_29542__$1;
(statearr_29549_29634[(1)] = (30));

} else {
var statearr_29550_29635 = state_29542__$1;
(statearr_29550_29635[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (1))){
var state_29542__$1 = state_29542;
var statearr_29551_29636 = state_29542__$1;
(statearr_29551_29636[(2)] = null);

(statearr_29551_29636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (24))){
var inst_29443 = (state_29542[(7)]);
var inst_29460 = (state_29542[(2)]);
var inst_29461 = cljs.core.next.call(null,inst_29443);
var inst_29423 = inst_29461;
var inst_29424 = null;
var inst_29425 = (0);
var inst_29426 = (0);
var state_29542__$1 = (function (){var statearr_29552 = state_29542;
(statearr_29552[(13)] = inst_29424);

(statearr_29552[(14)] = inst_29426);

(statearr_29552[(15)] = inst_29425);

(statearr_29552[(16)] = inst_29460);

(statearr_29552[(17)] = inst_29423);

return statearr_29552;
})();
var statearr_29553_29637 = state_29542__$1;
(statearr_29553_29637[(2)] = null);

(statearr_29553_29637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (39))){
var state_29542__$1 = state_29542;
var statearr_29557_29638 = state_29542__$1;
(statearr_29557_29638[(2)] = null);

(statearr_29557_29638[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (4))){
var inst_29414 = (state_29542[(10)]);
var inst_29414__$1 = (state_29542[(2)]);
var inst_29415 = (inst_29414__$1 == null);
var state_29542__$1 = (function (){var statearr_29558 = state_29542;
(statearr_29558[(10)] = inst_29414__$1);

return statearr_29558;
})();
if(cljs.core.truth_(inst_29415)){
var statearr_29559_29639 = state_29542__$1;
(statearr_29559_29639[(1)] = (5));

} else {
var statearr_29560_29640 = state_29542__$1;
(statearr_29560_29640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (15))){
var inst_29424 = (state_29542[(13)]);
var inst_29426 = (state_29542[(14)]);
var inst_29425 = (state_29542[(15)]);
var inst_29423 = (state_29542[(17)]);
var inst_29439 = (state_29542[(2)]);
var inst_29440 = (inst_29426 + (1));
var tmp29554 = inst_29424;
var tmp29555 = inst_29425;
var tmp29556 = inst_29423;
var inst_29423__$1 = tmp29556;
var inst_29424__$1 = tmp29554;
var inst_29425__$1 = tmp29555;
var inst_29426__$1 = inst_29440;
var state_29542__$1 = (function (){var statearr_29561 = state_29542;
(statearr_29561[(13)] = inst_29424__$1);

(statearr_29561[(14)] = inst_29426__$1);

(statearr_29561[(15)] = inst_29425__$1);

(statearr_29561[(18)] = inst_29439);

(statearr_29561[(17)] = inst_29423__$1);

return statearr_29561;
})();
var statearr_29562_29641 = state_29542__$1;
(statearr_29562_29641[(2)] = null);

(statearr_29562_29641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (21))){
var inst_29464 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29566_29642 = state_29542__$1;
(statearr_29566_29642[(2)] = inst_29464);

(statearr_29566_29642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (31))){
var inst_29490 = (state_29542[(11)]);
var inst_29494 = done.call(null,null);
var inst_29495 = cljs.core.async.untap_STAR_.call(null,m,inst_29490);
var state_29542__$1 = (function (){var statearr_29567 = state_29542;
(statearr_29567[(19)] = inst_29494);

return statearr_29567;
})();
var statearr_29568_29643 = state_29542__$1;
(statearr_29568_29643[(2)] = inst_29495);

(statearr_29568_29643[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (32))){
var inst_29484 = (state_29542[(20)]);
var inst_29485 = (state_29542[(9)]);
var inst_29482 = (state_29542[(21)]);
var inst_29483 = (state_29542[(12)]);
var inst_29497 = (state_29542[(2)]);
var inst_29498 = (inst_29485 + (1));
var tmp29563 = inst_29484;
var tmp29564 = inst_29482;
var tmp29565 = inst_29483;
var inst_29482__$1 = tmp29564;
var inst_29483__$1 = tmp29565;
var inst_29484__$1 = tmp29563;
var inst_29485__$1 = inst_29498;
var state_29542__$1 = (function (){var statearr_29569 = state_29542;
(statearr_29569[(20)] = inst_29484__$1);

(statearr_29569[(9)] = inst_29485__$1);

(statearr_29569[(22)] = inst_29497);

(statearr_29569[(21)] = inst_29482__$1);

(statearr_29569[(12)] = inst_29483__$1);

return statearr_29569;
})();
var statearr_29570_29644 = state_29542__$1;
(statearr_29570_29644[(2)] = null);

(statearr_29570_29644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (40))){
var inst_29510 = (state_29542[(23)]);
var inst_29514 = done.call(null,null);
var inst_29515 = cljs.core.async.untap_STAR_.call(null,m,inst_29510);
var state_29542__$1 = (function (){var statearr_29571 = state_29542;
(statearr_29571[(24)] = inst_29514);

return statearr_29571;
})();
var statearr_29572_29645 = state_29542__$1;
(statearr_29572_29645[(2)] = inst_29515);

(statearr_29572_29645[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (33))){
var inst_29501 = (state_29542[(25)]);
var inst_29503 = cljs.core.chunked_seq_QMARK_.call(null,inst_29501);
var state_29542__$1 = state_29542;
if(inst_29503){
var statearr_29573_29646 = state_29542__$1;
(statearr_29573_29646[(1)] = (36));

} else {
var statearr_29574_29647 = state_29542__$1;
(statearr_29574_29647[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (13))){
var inst_29433 = (state_29542[(26)]);
var inst_29436 = cljs.core.async.close_BANG_.call(null,inst_29433);
var state_29542__$1 = state_29542;
var statearr_29575_29648 = state_29542__$1;
(statearr_29575_29648[(2)] = inst_29436);

(statearr_29575_29648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (22))){
var inst_29454 = (state_29542[(8)]);
var inst_29457 = cljs.core.async.close_BANG_.call(null,inst_29454);
var state_29542__$1 = state_29542;
var statearr_29576_29649 = state_29542__$1;
(statearr_29576_29649[(2)] = inst_29457);

(statearr_29576_29649[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (36))){
var inst_29501 = (state_29542[(25)]);
var inst_29505 = cljs.core.chunk_first.call(null,inst_29501);
var inst_29506 = cljs.core.chunk_rest.call(null,inst_29501);
var inst_29507 = cljs.core.count.call(null,inst_29505);
var inst_29482 = inst_29506;
var inst_29483 = inst_29505;
var inst_29484 = inst_29507;
var inst_29485 = (0);
var state_29542__$1 = (function (){var statearr_29577 = state_29542;
(statearr_29577[(20)] = inst_29484);

(statearr_29577[(9)] = inst_29485);

(statearr_29577[(21)] = inst_29482);

(statearr_29577[(12)] = inst_29483);

return statearr_29577;
})();
var statearr_29578_29650 = state_29542__$1;
(statearr_29578_29650[(2)] = null);

(statearr_29578_29650[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (41))){
var inst_29501 = (state_29542[(25)]);
var inst_29517 = (state_29542[(2)]);
var inst_29518 = cljs.core.next.call(null,inst_29501);
var inst_29482 = inst_29518;
var inst_29483 = null;
var inst_29484 = (0);
var inst_29485 = (0);
var state_29542__$1 = (function (){var statearr_29579 = state_29542;
(statearr_29579[(20)] = inst_29484);

(statearr_29579[(9)] = inst_29485);

(statearr_29579[(21)] = inst_29482);

(statearr_29579[(27)] = inst_29517);

(statearr_29579[(12)] = inst_29483);

return statearr_29579;
})();
var statearr_29580_29651 = state_29542__$1;
(statearr_29580_29651[(2)] = null);

(statearr_29580_29651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (43))){
var state_29542__$1 = state_29542;
var statearr_29581_29652 = state_29542__$1;
(statearr_29581_29652[(2)] = null);

(statearr_29581_29652[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (29))){
var inst_29526 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29582_29653 = state_29542__$1;
(statearr_29582_29653[(2)] = inst_29526);

(statearr_29582_29653[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (44))){
var inst_29535 = (state_29542[(2)]);
var state_29542__$1 = (function (){var statearr_29583 = state_29542;
(statearr_29583[(28)] = inst_29535);

return statearr_29583;
})();
var statearr_29584_29654 = state_29542__$1;
(statearr_29584_29654[(2)] = null);

(statearr_29584_29654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (6))){
var inst_29474 = (state_29542[(29)]);
var inst_29473 = cljs.core.deref.call(null,cs);
var inst_29474__$1 = cljs.core.keys.call(null,inst_29473);
var inst_29475 = cljs.core.count.call(null,inst_29474__$1);
var inst_29476 = cljs.core.reset_BANG_.call(null,dctr,inst_29475);
var inst_29481 = cljs.core.seq.call(null,inst_29474__$1);
var inst_29482 = inst_29481;
var inst_29483 = null;
var inst_29484 = (0);
var inst_29485 = (0);
var state_29542__$1 = (function (){var statearr_29585 = state_29542;
(statearr_29585[(20)] = inst_29484);

(statearr_29585[(9)] = inst_29485);

(statearr_29585[(29)] = inst_29474__$1);

(statearr_29585[(30)] = inst_29476);

(statearr_29585[(21)] = inst_29482);

(statearr_29585[(12)] = inst_29483);

return statearr_29585;
})();
var statearr_29586_29655 = state_29542__$1;
(statearr_29586_29655[(2)] = null);

(statearr_29586_29655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (28))){
var inst_29501 = (state_29542[(25)]);
var inst_29482 = (state_29542[(21)]);
var inst_29501__$1 = cljs.core.seq.call(null,inst_29482);
var state_29542__$1 = (function (){var statearr_29587 = state_29542;
(statearr_29587[(25)] = inst_29501__$1);

return statearr_29587;
})();
if(inst_29501__$1){
var statearr_29588_29656 = state_29542__$1;
(statearr_29588_29656[(1)] = (33));

} else {
var statearr_29589_29657 = state_29542__$1;
(statearr_29589_29657[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (25))){
var inst_29484 = (state_29542[(20)]);
var inst_29485 = (state_29542[(9)]);
var inst_29487 = (inst_29485 < inst_29484);
var inst_29488 = inst_29487;
var state_29542__$1 = state_29542;
if(cljs.core.truth_(inst_29488)){
var statearr_29590_29658 = state_29542__$1;
(statearr_29590_29658[(1)] = (27));

} else {
var statearr_29591_29659 = state_29542__$1;
(statearr_29591_29659[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (34))){
var state_29542__$1 = state_29542;
var statearr_29592_29660 = state_29542__$1;
(statearr_29592_29660[(2)] = null);

(statearr_29592_29660[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (17))){
var state_29542__$1 = state_29542;
var statearr_29593_29661 = state_29542__$1;
(statearr_29593_29661[(2)] = null);

(statearr_29593_29661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (3))){
var inst_29540 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29542__$1,inst_29540);
} else {
if((state_val_29543 === (12))){
var inst_29469 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29594_29662 = state_29542__$1;
(statearr_29594_29662[(2)] = inst_29469);

(statearr_29594_29662[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (2))){
var state_29542__$1 = state_29542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29542__$1,(4),ch);
} else {
if((state_val_29543 === (23))){
var state_29542__$1 = state_29542;
var statearr_29595_29663 = state_29542__$1;
(statearr_29595_29663[(2)] = null);

(statearr_29595_29663[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (35))){
var inst_29524 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29596_29664 = state_29542__$1;
(statearr_29596_29664[(2)] = inst_29524);

(statearr_29596_29664[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (19))){
var inst_29443 = (state_29542[(7)]);
var inst_29447 = cljs.core.chunk_first.call(null,inst_29443);
var inst_29448 = cljs.core.chunk_rest.call(null,inst_29443);
var inst_29449 = cljs.core.count.call(null,inst_29447);
var inst_29423 = inst_29448;
var inst_29424 = inst_29447;
var inst_29425 = inst_29449;
var inst_29426 = (0);
var state_29542__$1 = (function (){var statearr_29597 = state_29542;
(statearr_29597[(13)] = inst_29424);

(statearr_29597[(14)] = inst_29426);

(statearr_29597[(15)] = inst_29425);

(statearr_29597[(17)] = inst_29423);

return statearr_29597;
})();
var statearr_29598_29665 = state_29542__$1;
(statearr_29598_29665[(2)] = null);

(statearr_29598_29665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (11))){
var inst_29443 = (state_29542[(7)]);
var inst_29423 = (state_29542[(17)]);
var inst_29443__$1 = cljs.core.seq.call(null,inst_29423);
var state_29542__$1 = (function (){var statearr_29599 = state_29542;
(statearr_29599[(7)] = inst_29443__$1);

return statearr_29599;
})();
if(inst_29443__$1){
var statearr_29600_29666 = state_29542__$1;
(statearr_29600_29666[(1)] = (16));

} else {
var statearr_29601_29667 = state_29542__$1;
(statearr_29601_29667[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (9))){
var inst_29471 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29602_29668 = state_29542__$1;
(statearr_29602_29668[(2)] = inst_29471);

(statearr_29602_29668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (5))){
var inst_29421 = cljs.core.deref.call(null,cs);
var inst_29422 = cljs.core.seq.call(null,inst_29421);
var inst_29423 = inst_29422;
var inst_29424 = null;
var inst_29425 = (0);
var inst_29426 = (0);
var state_29542__$1 = (function (){var statearr_29603 = state_29542;
(statearr_29603[(13)] = inst_29424);

(statearr_29603[(14)] = inst_29426);

(statearr_29603[(15)] = inst_29425);

(statearr_29603[(17)] = inst_29423);

return statearr_29603;
})();
var statearr_29604_29669 = state_29542__$1;
(statearr_29604_29669[(2)] = null);

(statearr_29604_29669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (14))){
var state_29542__$1 = state_29542;
var statearr_29605_29670 = state_29542__$1;
(statearr_29605_29670[(2)] = null);

(statearr_29605_29670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (45))){
var inst_29532 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29606_29671 = state_29542__$1;
(statearr_29606_29671[(2)] = inst_29532);

(statearr_29606_29671[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (26))){
var inst_29474 = (state_29542[(29)]);
var inst_29528 = (state_29542[(2)]);
var inst_29529 = cljs.core.seq.call(null,inst_29474);
var state_29542__$1 = (function (){var statearr_29607 = state_29542;
(statearr_29607[(31)] = inst_29528);

return statearr_29607;
})();
if(inst_29529){
var statearr_29608_29672 = state_29542__$1;
(statearr_29608_29672[(1)] = (42));

} else {
var statearr_29609_29673 = state_29542__$1;
(statearr_29609_29673[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (16))){
var inst_29443 = (state_29542[(7)]);
var inst_29445 = cljs.core.chunked_seq_QMARK_.call(null,inst_29443);
var state_29542__$1 = state_29542;
if(inst_29445){
var statearr_29610_29674 = state_29542__$1;
(statearr_29610_29674[(1)] = (19));

} else {
var statearr_29611_29675 = state_29542__$1;
(statearr_29611_29675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (38))){
var inst_29521 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29612_29676 = state_29542__$1;
(statearr_29612_29676[(2)] = inst_29521);

(statearr_29612_29676[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (30))){
var state_29542__$1 = state_29542;
var statearr_29613_29677 = state_29542__$1;
(statearr_29613_29677[(2)] = null);

(statearr_29613_29677[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (10))){
var inst_29424 = (state_29542[(13)]);
var inst_29426 = (state_29542[(14)]);
var inst_29432 = cljs.core._nth.call(null,inst_29424,inst_29426);
var inst_29433 = cljs.core.nth.call(null,inst_29432,(0),null);
var inst_29434 = cljs.core.nth.call(null,inst_29432,(1),null);
var state_29542__$1 = (function (){var statearr_29614 = state_29542;
(statearr_29614[(26)] = inst_29433);

return statearr_29614;
})();
if(cljs.core.truth_(inst_29434)){
var statearr_29615_29678 = state_29542__$1;
(statearr_29615_29678[(1)] = (13));

} else {
var statearr_29616_29679 = state_29542__$1;
(statearr_29616_29679[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (18))){
var inst_29467 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29617_29680 = state_29542__$1;
(statearr_29617_29680[(2)] = inst_29467);

(statearr_29617_29680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (42))){
var state_29542__$1 = state_29542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29542__$1,(45),dchan);
} else {
if((state_val_29543 === (37))){
var inst_29414 = (state_29542[(10)]);
var inst_29501 = (state_29542[(25)]);
var inst_29510 = (state_29542[(23)]);
var inst_29510__$1 = cljs.core.first.call(null,inst_29501);
var inst_29511 = cljs.core.async.put_BANG_.call(null,inst_29510__$1,inst_29414,done);
var state_29542__$1 = (function (){var statearr_29618 = state_29542;
(statearr_29618[(23)] = inst_29510__$1);

return statearr_29618;
})();
if(cljs.core.truth_(inst_29511)){
var statearr_29619_29681 = state_29542__$1;
(statearr_29619_29681[(1)] = (39));

} else {
var statearr_29620_29682 = state_29542__$1;
(statearr_29620_29682[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29543 === (8))){
var inst_29426 = (state_29542[(14)]);
var inst_29425 = (state_29542[(15)]);
var inst_29428 = (inst_29426 < inst_29425);
var inst_29429 = inst_29428;
var state_29542__$1 = state_29542;
if(cljs.core.truth_(inst_29429)){
var statearr_29621_29683 = state_29542__$1;
(statearr_29621_29683[(1)] = (10));

} else {
var statearr_29622_29684 = state_29542__$1;
(statearr_29622_29684[(1)] = (11));

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
});})(c__19667__auto___29630,cs,m,dchan,dctr,done))
;
return ((function (switch__19601__auto__,c__19667__auto___29630,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19602__auto__ = null;
var cljs$core$async$mult_$_state_machine__19602__auto____0 = (function (){
var statearr_29626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29626[(0)] = cljs$core$async$mult_$_state_machine__19602__auto__);

(statearr_29626[(1)] = (1));

return statearr_29626;
});
var cljs$core$async$mult_$_state_machine__19602__auto____1 = (function (state_29542){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_29542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e29627){if((e29627 instanceof Object)){
var ex__19605__auto__ = e29627;
var statearr_29628_29685 = state_29542;
(statearr_29628_29685[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29686 = state_29542;
state_29542 = G__29686;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19602__auto__ = function(state_29542){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19602__auto____1.call(this,state_29542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19602__auto____0;
cljs$core$async$mult_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19602__auto____1;
return cljs$core$async$mult_$_state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___29630,cs,m,dchan,dctr,done))
})();
var state__19669__auto__ = (function (){var statearr_29629 = f__19668__auto__.call(null);
(statearr_29629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___29630);

return statearr_29629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___29630,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args29687 = [];
var len__17522__auto___29690 = arguments.length;
var i__17523__auto___29691 = (0);
while(true){
if((i__17523__auto___29691 < len__17522__auto___29690)){
args29687.push((arguments[i__17523__auto___29691]));

var G__29692 = (i__17523__auto___29691 + (1));
i__17523__auto___29691 = G__29692;
continue;
} else {
}
break;
}

var G__29689 = args29687.length;
switch (G__29689) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29687.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17119__auto__ = (((m == null))?null:m);
var m__17120__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17119__auto__)]);
if(!((m__17120__auto__ == null))){
return m__17120__auto__.call(null,m,ch);
} else {
var m__17120__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17120__auto____$1 == null))){
return m__17120__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17119__auto__ = (((m == null))?null:m);
var m__17120__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17119__auto__)]);
if(!((m__17120__auto__ == null))){
return m__17120__auto__.call(null,m,ch);
} else {
var m__17120__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17120__auto____$1 == null))){
return m__17120__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17119__auto__ = (((m == null))?null:m);
var m__17120__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17119__auto__)]);
if(!((m__17120__auto__ == null))){
return m__17120__auto__.call(null,m);
} else {
var m__17120__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17120__auto____$1 == null))){
return m__17120__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17119__auto__ = (((m == null))?null:m);
var m__17120__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17119__auto__)]);
if(!((m__17120__auto__ == null))){
return m__17120__auto__.call(null,m,state_map);
} else {
var m__17120__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17120__auto____$1 == null))){
return m__17120__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17119__auto__ = (((m == null))?null:m);
var m__17120__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17119__auto__)]);
if(!((m__17120__auto__ == null))){
return m__17120__auto__.call(null,m,mode);
} else {
var m__17120__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17120__auto____$1 == null))){
return m__17120__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__17529__auto__ = [];
var len__17522__auto___29706 = arguments.length;
var i__17523__auto___29707 = (0);
while(true){
if((i__17523__auto___29707 < len__17522__auto___29706)){
args__17529__auto__.push((arguments[i__17523__auto___29707]));

var G__29708 = (i__17523__auto___29707 + (1));
i__17523__auto___29707 = G__29708;
continue;
} else {
}
break;
}

var argseq__17530__auto__ = ((((3) < args__17529__auto__.length))?(new cljs.core.IndexedSeq(args__17529__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17530__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29700){
var map__29701 = p__29700;
var map__29701__$1 = ((((!((map__29701 == null)))?((((map__29701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29701):map__29701);
var opts = map__29701__$1;
var statearr_29703_29709 = state;
(statearr_29703_29709[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29701,map__29701__$1,opts){
return (function (val){
var statearr_29704_29710 = state;
(statearr_29704_29710[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29701,map__29701__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29705_29711 = state;
(statearr_29705_29711[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29696){
var G__29697 = cljs.core.first.call(null,seq29696);
var seq29696__$1 = cljs.core.next.call(null,seq29696);
var G__29698 = cljs.core.first.call(null,seq29696__$1);
var seq29696__$2 = cljs.core.next.call(null,seq29696__$1);
var G__29699 = cljs.core.first.call(null,seq29696__$2);
var seq29696__$3 = cljs.core.next.call(null,seq29696__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29697,G__29698,G__29699,seq29696__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t29875 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29875 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29876){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29876 = meta29876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29877,meta29876__$1){
var self__ = this;
var _29877__$1 = this;
return (new cljs.core.async.t29875(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29876__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29877){
var self__ = this;
var _29877__$1 = this;
return self__.meta29876;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29875.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29875.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29875.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29875.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29875.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29875.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29875.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29875.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29875.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29876","meta29876",-1361043205,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29875.cljs$lang$type = true;

cljs.core.async.t29875.cljs$lang$ctorStr = "cljs.core.async/t29875";

cljs.core.async.t29875.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17062__auto__,writer__17063__auto__,opt__17064__auto__){
return cljs.core._write.call(null,writer__17063__auto__,"cljs.core.async/t29875");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29875 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29875(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29876){
return (new cljs.core.async.t29875(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29876));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29875(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19667__auto___30038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___30038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___30038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29975){
var state_val_29976 = (state_29975[(1)]);
if((state_val_29976 === (7))){
var inst_29893 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
var statearr_29977_30039 = state_29975__$1;
(statearr_29977_30039[(2)] = inst_29893);

(statearr_29977_30039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (20))){
var inst_29905 = (state_29975[(7)]);
var state_29975__$1 = state_29975;
var statearr_29978_30040 = state_29975__$1;
(statearr_29978_30040[(2)] = inst_29905);

(statearr_29978_30040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (27))){
var state_29975__$1 = state_29975;
var statearr_29979_30041 = state_29975__$1;
(statearr_29979_30041[(2)] = null);

(statearr_29979_30041[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (1))){
var inst_29881 = (state_29975[(8)]);
var inst_29881__$1 = calc_state.call(null);
var inst_29883 = (inst_29881__$1 == null);
var inst_29884 = cljs.core.not.call(null,inst_29883);
var state_29975__$1 = (function (){var statearr_29980 = state_29975;
(statearr_29980[(8)] = inst_29881__$1);

return statearr_29980;
})();
if(inst_29884){
var statearr_29981_30042 = state_29975__$1;
(statearr_29981_30042[(1)] = (2));

} else {
var statearr_29982_30043 = state_29975__$1;
(statearr_29982_30043[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (24))){
var inst_29935 = (state_29975[(9)]);
var inst_29928 = (state_29975[(10)]);
var inst_29949 = (state_29975[(11)]);
var inst_29949__$1 = inst_29928.call(null,inst_29935);
var state_29975__$1 = (function (){var statearr_29983 = state_29975;
(statearr_29983[(11)] = inst_29949__$1);

return statearr_29983;
})();
if(cljs.core.truth_(inst_29949__$1)){
var statearr_29984_30044 = state_29975__$1;
(statearr_29984_30044[(1)] = (29));

} else {
var statearr_29985_30045 = state_29975__$1;
(statearr_29985_30045[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (4))){
var inst_29896 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
if(cljs.core.truth_(inst_29896)){
var statearr_29986_30046 = state_29975__$1;
(statearr_29986_30046[(1)] = (8));

} else {
var statearr_29987_30047 = state_29975__$1;
(statearr_29987_30047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (15))){
var inst_29922 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
if(cljs.core.truth_(inst_29922)){
var statearr_29988_30048 = state_29975__$1;
(statearr_29988_30048[(1)] = (19));

} else {
var statearr_29989_30049 = state_29975__$1;
(statearr_29989_30049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (21))){
var inst_29927 = (state_29975[(12)]);
var inst_29927__$1 = (state_29975[(2)]);
var inst_29928 = cljs.core.get.call(null,inst_29927__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29929 = cljs.core.get.call(null,inst_29927__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29930 = cljs.core.get.call(null,inst_29927__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29975__$1 = (function (){var statearr_29990 = state_29975;
(statearr_29990[(12)] = inst_29927__$1);

(statearr_29990[(13)] = inst_29929);

(statearr_29990[(10)] = inst_29928);

return statearr_29990;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29975__$1,(22),inst_29930);
} else {
if((state_val_29976 === (31))){
var inst_29957 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
if(cljs.core.truth_(inst_29957)){
var statearr_29991_30050 = state_29975__$1;
(statearr_29991_30050[(1)] = (32));

} else {
var statearr_29992_30051 = state_29975__$1;
(statearr_29992_30051[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (32))){
var inst_29934 = (state_29975[(14)]);
var state_29975__$1 = state_29975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29975__$1,(35),out,inst_29934);
} else {
if((state_val_29976 === (33))){
var inst_29927 = (state_29975[(12)]);
var inst_29905 = inst_29927;
var state_29975__$1 = (function (){var statearr_29993 = state_29975;
(statearr_29993[(7)] = inst_29905);

return statearr_29993;
})();
var statearr_29994_30052 = state_29975__$1;
(statearr_29994_30052[(2)] = null);

(statearr_29994_30052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (13))){
var inst_29905 = (state_29975[(7)]);
var inst_29912 = inst_29905.cljs$lang$protocol_mask$partition0$;
var inst_29913 = (inst_29912 & (64));
var inst_29914 = inst_29905.cljs$core$ISeq$;
var inst_29915 = (inst_29913) || (inst_29914);
var state_29975__$1 = state_29975;
if(cljs.core.truth_(inst_29915)){
var statearr_29995_30053 = state_29975__$1;
(statearr_29995_30053[(1)] = (16));

} else {
var statearr_29996_30054 = state_29975__$1;
(statearr_29996_30054[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (22))){
var inst_29935 = (state_29975[(9)]);
var inst_29934 = (state_29975[(14)]);
var inst_29933 = (state_29975[(2)]);
var inst_29934__$1 = cljs.core.nth.call(null,inst_29933,(0),null);
var inst_29935__$1 = cljs.core.nth.call(null,inst_29933,(1),null);
var inst_29936 = (inst_29934__$1 == null);
var inst_29937 = cljs.core._EQ_.call(null,inst_29935__$1,change);
var inst_29938 = (inst_29936) || (inst_29937);
var state_29975__$1 = (function (){var statearr_29997 = state_29975;
(statearr_29997[(9)] = inst_29935__$1);

(statearr_29997[(14)] = inst_29934__$1);

return statearr_29997;
})();
if(cljs.core.truth_(inst_29938)){
var statearr_29998_30055 = state_29975__$1;
(statearr_29998_30055[(1)] = (23));

} else {
var statearr_29999_30056 = state_29975__$1;
(statearr_29999_30056[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (36))){
var inst_29927 = (state_29975[(12)]);
var inst_29905 = inst_29927;
var state_29975__$1 = (function (){var statearr_30000 = state_29975;
(statearr_30000[(7)] = inst_29905);

return statearr_30000;
})();
var statearr_30001_30057 = state_29975__$1;
(statearr_30001_30057[(2)] = null);

(statearr_30001_30057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (29))){
var inst_29949 = (state_29975[(11)]);
var state_29975__$1 = state_29975;
var statearr_30002_30058 = state_29975__$1;
(statearr_30002_30058[(2)] = inst_29949);

(statearr_30002_30058[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (6))){
var state_29975__$1 = state_29975;
var statearr_30003_30059 = state_29975__$1;
(statearr_30003_30059[(2)] = false);

(statearr_30003_30059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (28))){
var inst_29945 = (state_29975[(2)]);
var inst_29946 = calc_state.call(null);
var inst_29905 = inst_29946;
var state_29975__$1 = (function (){var statearr_30004 = state_29975;
(statearr_30004[(15)] = inst_29945);

(statearr_30004[(7)] = inst_29905);

return statearr_30004;
})();
var statearr_30005_30060 = state_29975__$1;
(statearr_30005_30060[(2)] = null);

(statearr_30005_30060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (25))){
var inst_29971 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
var statearr_30006_30061 = state_29975__$1;
(statearr_30006_30061[(2)] = inst_29971);

(statearr_30006_30061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (34))){
var inst_29969 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
var statearr_30007_30062 = state_29975__$1;
(statearr_30007_30062[(2)] = inst_29969);

(statearr_30007_30062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (17))){
var state_29975__$1 = state_29975;
var statearr_30008_30063 = state_29975__$1;
(statearr_30008_30063[(2)] = false);

(statearr_30008_30063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (3))){
var state_29975__$1 = state_29975;
var statearr_30009_30064 = state_29975__$1;
(statearr_30009_30064[(2)] = false);

(statearr_30009_30064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (12))){
var inst_29973 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29975__$1,inst_29973);
} else {
if((state_val_29976 === (2))){
var inst_29881 = (state_29975[(8)]);
var inst_29886 = inst_29881.cljs$lang$protocol_mask$partition0$;
var inst_29887 = (inst_29886 & (64));
var inst_29888 = inst_29881.cljs$core$ISeq$;
var inst_29889 = (inst_29887) || (inst_29888);
var state_29975__$1 = state_29975;
if(cljs.core.truth_(inst_29889)){
var statearr_30010_30065 = state_29975__$1;
(statearr_30010_30065[(1)] = (5));

} else {
var statearr_30011_30066 = state_29975__$1;
(statearr_30011_30066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (23))){
var inst_29934 = (state_29975[(14)]);
var inst_29940 = (inst_29934 == null);
var state_29975__$1 = state_29975;
if(cljs.core.truth_(inst_29940)){
var statearr_30012_30067 = state_29975__$1;
(statearr_30012_30067[(1)] = (26));

} else {
var statearr_30013_30068 = state_29975__$1;
(statearr_30013_30068[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (35))){
var inst_29960 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
if(cljs.core.truth_(inst_29960)){
var statearr_30014_30069 = state_29975__$1;
(statearr_30014_30069[(1)] = (36));

} else {
var statearr_30015_30070 = state_29975__$1;
(statearr_30015_30070[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (19))){
var inst_29905 = (state_29975[(7)]);
var inst_29924 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29905);
var state_29975__$1 = state_29975;
var statearr_30016_30071 = state_29975__$1;
(statearr_30016_30071[(2)] = inst_29924);

(statearr_30016_30071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (11))){
var inst_29905 = (state_29975[(7)]);
var inst_29909 = (inst_29905 == null);
var inst_29910 = cljs.core.not.call(null,inst_29909);
var state_29975__$1 = state_29975;
if(inst_29910){
var statearr_30017_30072 = state_29975__$1;
(statearr_30017_30072[(1)] = (13));

} else {
var statearr_30018_30073 = state_29975__$1;
(statearr_30018_30073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (9))){
var inst_29881 = (state_29975[(8)]);
var state_29975__$1 = state_29975;
var statearr_30019_30074 = state_29975__$1;
(statearr_30019_30074[(2)] = inst_29881);

(statearr_30019_30074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (5))){
var state_29975__$1 = state_29975;
var statearr_30020_30075 = state_29975__$1;
(statearr_30020_30075[(2)] = true);

(statearr_30020_30075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (14))){
var state_29975__$1 = state_29975;
var statearr_30021_30076 = state_29975__$1;
(statearr_30021_30076[(2)] = false);

(statearr_30021_30076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (26))){
var inst_29935 = (state_29975[(9)]);
var inst_29942 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29935);
var state_29975__$1 = state_29975;
var statearr_30022_30077 = state_29975__$1;
(statearr_30022_30077[(2)] = inst_29942);

(statearr_30022_30077[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (16))){
var state_29975__$1 = state_29975;
var statearr_30023_30078 = state_29975__$1;
(statearr_30023_30078[(2)] = true);

(statearr_30023_30078[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (38))){
var inst_29965 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
var statearr_30024_30079 = state_29975__$1;
(statearr_30024_30079[(2)] = inst_29965);

(statearr_30024_30079[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (30))){
var inst_29935 = (state_29975[(9)]);
var inst_29929 = (state_29975[(13)]);
var inst_29928 = (state_29975[(10)]);
var inst_29952 = cljs.core.empty_QMARK_.call(null,inst_29928);
var inst_29953 = inst_29929.call(null,inst_29935);
var inst_29954 = cljs.core.not.call(null,inst_29953);
var inst_29955 = (inst_29952) && (inst_29954);
var state_29975__$1 = state_29975;
var statearr_30025_30080 = state_29975__$1;
(statearr_30025_30080[(2)] = inst_29955);

(statearr_30025_30080[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (10))){
var inst_29881 = (state_29975[(8)]);
var inst_29901 = (state_29975[(2)]);
var inst_29902 = cljs.core.get.call(null,inst_29901,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29903 = cljs.core.get.call(null,inst_29901,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29904 = cljs.core.get.call(null,inst_29901,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29905 = inst_29881;
var state_29975__$1 = (function (){var statearr_30026 = state_29975;
(statearr_30026[(16)] = inst_29903);

(statearr_30026[(17)] = inst_29904);

(statearr_30026[(18)] = inst_29902);

(statearr_30026[(7)] = inst_29905);

return statearr_30026;
})();
var statearr_30027_30081 = state_29975__$1;
(statearr_30027_30081[(2)] = null);

(statearr_30027_30081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (18))){
var inst_29919 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
var statearr_30028_30082 = state_29975__$1;
(statearr_30028_30082[(2)] = inst_29919);

(statearr_30028_30082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (37))){
var state_29975__$1 = state_29975;
var statearr_30029_30083 = state_29975__$1;
(statearr_30029_30083[(2)] = null);

(statearr_30029_30083[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (8))){
var inst_29881 = (state_29975[(8)]);
var inst_29898 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29881);
var state_29975__$1 = state_29975;
var statearr_30030_30084 = state_29975__$1;
(statearr_30030_30084[(2)] = inst_29898);

(statearr_30030_30084[(1)] = (10));


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
});})(c__19667__auto___30038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19601__auto__,c__19667__auto___30038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19602__auto__ = null;
var cljs$core$async$mix_$_state_machine__19602__auto____0 = (function (){
var statearr_30034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30034[(0)] = cljs$core$async$mix_$_state_machine__19602__auto__);

(statearr_30034[(1)] = (1));

return statearr_30034;
});
var cljs$core$async$mix_$_state_machine__19602__auto____1 = (function (state_29975){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_29975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e30035){if((e30035 instanceof Object)){
var ex__19605__auto__ = e30035;
var statearr_30036_30085 = state_29975;
(statearr_30036_30085[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30086 = state_29975;
state_29975 = G__30086;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19602__auto__ = function(state_29975){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19602__auto____1.call(this,state_29975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19602__auto____0;
cljs$core$async$mix_$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19602__auto____1;
return cljs$core$async$mix_$_state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___30038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19669__auto__ = (function (){var statearr_30037 = f__19668__auto__.call(null);
(statearr_30037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___30038);

return statearr_30037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___30038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17119__auto__ = (((p == null))?null:p);
var m__17120__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17119__auto__)]);
if(!((m__17120__auto__ == null))){
return m__17120__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17120__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17120__auto____$1 == null))){
return m__17120__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17119__auto__ = (((p == null))?null:p);
var m__17120__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17119__auto__)]);
if(!((m__17120__auto__ == null))){
return m__17120__auto__.call(null,p,v,ch);
} else {
var m__17120__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17120__auto____$1 == null))){
return m__17120__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args30089 = [];
var len__17522__auto___30092 = arguments.length;
var i__17523__auto___30093 = (0);
while(true){
if((i__17523__auto___30093 < len__17522__auto___30092)){
args30089.push((arguments[i__17523__auto___30093]));

var G__30094 = (i__17523__auto___30093 + (1));
i__17523__auto___30093 = G__30094;
continue;
} else {
}
break;
}

var G__30091 = args30089.length;
switch (G__30091) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30089.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17119__auto__ = (((p == null))?null:p);
var m__17120__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17119__auto__)]);
if(!((m__17120__auto__ == null))){
return m__17120__auto__.call(null,p);
} else {
var m__17120__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17120__auto____$1 == null))){
return m__17120__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17119__auto__ = (((p == null))?null:p);
var m__17120__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17119__auto__)]);
if(!((m__17120__auto__ == null))){
return m__17120__auto__.call(null,p,v);
} else {
var m__17120__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17120__auto____$1 == null))){
return m__17120__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args30097 = [];
var len__17522__auto___30222 = arguments.length;
var i__17523__auto___30223 = (0);
while(true){
if((i__17523__auto___30223 < len__17522__auto___30222)){
args30097.push((arguments[i__17523__auto___30223]));

var G__30224 = (i__17523__auto___30223 + (1));
i__17523__auto___30223 = G__30224;
continue;
} else {
}
break;
}

var G__30099 = args30097.length;
switch (G__30099) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30097.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16483__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16483__auto__)){
return or__16483__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16483__auto__,mults){
return (function (p1__30096_SHARP_){
if(cljs.core.truth_(p1__30096_SHARP_.call(null,topic))){
return p1__30096_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30096_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16483__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30100 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30100 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30101){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30101 = meta30101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30102,meta30101__$1){
var self__ = this;
var _30102__$1 = this;
return (new cljs.core.async.t30100(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30101__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30102){
var self__ = this;
var _30102__$1 = this;
return self__.meta30101;
});})(mults,ensure_mult))
;

cljs.core.async.t30100.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30100.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30100.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30100.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30100.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30100.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30100.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30100.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30101","meta30101",-174420462,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t30100.cljs$lang$type = true;

cljs.core.async.t30100.cljs$lang$ctorStr = "cljs.core.async/t30100";

cljs.core.async.t30100.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17062__auto__,writer__17063__auto__,opt__17064__auto__){
return cljs.core._write.call(null,writer__17063__auto__,"cljs.core.async/t30100");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30100 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t30100(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30101){
return (new cljs.core.async.t30100(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30101));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30100(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19667__auto___30226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___30226,mults,ensure_mult,p){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___30226,mults,ensure_mult,p){
return (function (state_30174){
var state_val_30175 = (state_30174[(1)]);
if((state_val_30175 === (7))){
var inst_30170 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30176_30227 = state_30174__$1;
(statearr_30176_30227[(2)] = inst_30170);

(statearr_30176_30227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (20))){
var state_30174__$1 = state_30174;
var statearr_30177_30228 = state_30174__$1;
(statearr_30177_30228[(2)] = null);

(statearr_30177_30228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (1))){
var state_30174__$1 = state_30174;
var statearr_30178_30229 = state_30174__$1;
(statearr_30178_30229[(2)] = null);

(statearr_30178_30229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (24))){
var inst_30153 = (state_30174[(7)]);
var inst_30162 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30153);
var state_30174__$1 = state_30174;
var statearr_30179_30230 = state_30174__$1;
(statearr_30179_30230[(2)] = inst_30162);

(statearr_30179_30230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (4))){
var inst_30105 = (state_30174[(8)]);
var inst_30105__$1 = (state_30174[(2)]);
var inst_30106 = (inst_30105__$1 == null);
var state_30174__$1 = (function (){var statearr_30180 = state_30174;
(statearr_30180[(8)] = inst_30105__$1);

return statearr_30180;
})();
if(cljs.core.truth_(inst_30106)){
var statearr_30181_30231 = state_30174__$1;
(statearr_30181_30231[(1)] = (5));

} else {
var statearr_30182_30232 = state_30174__$1;
(statearr_30182_30232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (15))){
var inst_30147 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30183_30233 = state_30174__$1;
(statearr_30183_30233[(2)] = inst_30147);

(statearr_30183_30233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (21))){
var inst_30167 = (state_30174[(2)]);
var state_30174__$1 = (function (){var statearr_30184 = state_30174;
(statearr_30184[(9)] = inst_30167);

return statearr_30184;
})();
var statearr_30185_30234 = state_30174__$1;
(statearr_30185_30234[(2)] = null);

(statearr_30185_30234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (13))){
var inst_30129 = (state_30174[(10)]);
var inst_30131 = cljs.core.chunked_seq_QMARK_.call(null,inst_30129);
var state_30174__$1 = state_30174;
if(inst_30131){
var statearr_30186_30235 = state_30174__$1;
(statearr_30186_30235[(1)] = (16));

} else {
var statearr_30187_30236 = state_30174__$1;
(statearr_30187_30236[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (22))){
var inst_30159 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
if(cljs.core.truth_(inst_30159)){
var statearr_30188_30237 = state_30174__$1;
(statearr_30188_30237[(1)] = (23));

} else {
var statearr_30189_30238 = state_30174__$1;
(statearr_30189_30238[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (6))){
var inst_30105 = (state_30174[(8)]);
var inst_30153 = (state_30174[(7)]);
var inst_30155 = (state_30174[(11)]);
var inst_30153__$1 = topic_fn.call(null,inst_30105);
var inst_30154 = cljs.core.deref.call(null,mults);
var inst_30155__$1 = cljs.core.get.call(null,inst_30154,inst_30153__$1);
var state_30174__$1 = (function (){var statearr_30190 = state_30174;
(statearr_30190[(7)] = inst_30153__$1);

(statearr_30190[(11)] = inst_30155__$1);

return statearr_30190;
})();
if(cljs.core.truth_(inst_30155__$1)){
var statearr_30191_30239 = state_30174__$1;
(statearr_30191_30239[(1)] = (19));

} else {
var statearr_30192_30240 = state_30174__$1;
(statearr_30192_30240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (25))){
var inst_30164 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30193_30241 = state_30174__$1;
(statearr_30193_30241[(2)] = inst_30164);

(statearr_30193_30241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (17))){
var inst_30129 = (state_30174[(10)]);
var inst_30138 = cljs.core.first.call(null,inst_30129);
var inst_30139 = cljs.core.async.muxch_STAR_.call(null,inst_30138);
var inst_30140 = cljs.core.async.close_BANG_.call(null,inst_30139);
var inst_30141 = cljs.core.next.call(null,inst_30129);
var inst_30115 = inst_30141;
var inst_30116 = null;
var inst_30117 = (0);
var inst_30118 = (0);
var state_30174__$1 = (function (){var statearr_30194 = state_30174;
(statearr_30194[(12)] = inst_30117);

(statearr_30194[(13)] = inst_30115);

(statearr_30194[(14)] = inst_30118);

(statearr_30194[(15)] = inst_30116);

(statearr_30194[(16)] = inst_30140);

return statearr_30194;
})();
var statearr_30195_30242 = state_30174__$1;
(statearr_30195_30242[(2)] = null);

(statearr_30195_30242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (3))){
var inst_30172 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30174__$1,inst_30172);
} else {
if((state_val_30175 === (12))){
var inst_30149 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30196_30243 = state_30174__$1;
(statearr_30196_30243[(2)] = inst_30149);

(statearr_30196_30243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (2))){
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30174__$1,(4),ch);
} else {
if((state_val_30175 === (23))){
var state_30174__$1 = state_30174;
var statearr_30197_30244 = state_30174__$1;
(statearr_30197_30244[(2)] = null);

(statearr_30197_30244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (19))){
var inst_30105 = (state_30174[(8)]);
var inst_30155 = (state_30174[(11)]);
var inst_30157 = cljs.core.async.muxch_STAR_.call(null,inst_30155);
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30174__$1,(22),inst_30157,inst_30105);
} else {
if((state_val_30175 === (11))){
var inst_30129 = (state_30174[(10)]);
var inst_30115 = (state_30174[(13)]);
var inst_30129__$1 = cljs.core.seq.call(null,inst_30115);
var state_30174__$1 = (function (){var statearr_30198 = state_30174;
(statearr_30198[(10)] = inst_30129__$1);

return statearr_30198;
})();
if(inst_30129__$1){
var statearr_30199_30245 = state_30174__$1;
(statearr_30199_30245[(1)] = (13));

} else {
var statearr_30200_30246 = state_30174__$1;
(statearr_30200_30246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (9))){
var inst_30151 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30201_30247 = state_30174__$1;
(statearr_30201_30247[(2)] = inst_30151);

(statearr_30201_30247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (5))){
var inst_30112 = cljs.core.deref.call(null,mults);
var inst_30113 = cljs.core.vals.call(null,inst_30112);
var inst_30114 = cljs.core.seq.call(null,inst_30113);
var inst_30115 = inst_30114;
var inst_30116 = null;
var inst_30117 = (0);
var inst_30118 = (0);
var state_30174__$1 = (function (){var statearr_30202 = state_30174;
(statearr_30202[(12)] = inst_30117);

(statearr_30202[(13)] = inst_30115);

(statearr_30202[(14)] = inst_30118);

(statearr_30202[(15)] = inst_30116);

return statearr_30202;
})();
var statearr_30203_30248 = state_30174__$1;
(statearr_30203_30248[(2)] = null);

(statearr_30203_30248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (14))){
var state_30174__$1 = state_30174;
var statearr_30207_30249 = state_30174__$1;
(statearr_30207_30249[(2)] = null);

(statearr_30207_30249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (16))){
var inst_30129 = (state_30174[(10)]);
var inst_30133 = cljs.core.chunk_first.call(null,inst_30129);
var inst_30134 = cljs.core.chunk_rest.call(null,inst_30129);
var inst_30135 = cljs.core.count.call(null,inst_30133);
var inst_30115 = inst_30134;
var inst_30116 = inst_30133;
var inst_30117 = inst_30135;
var inst_30118 = (0);
var state_30174__$1 = (function (){var statearr_30208 = state_30174;
(statearr_30208[(12)] = inst_30117);

(statearr_30208[(13)] = inst_30115);

(statearr_30208[(14)] = inst_30118);

(statearr_30208[(15)] = inst_30116);

return statearr_30208;
})();
var statearr_30209_30250 = state_30174__$1;
(statearr_30209_30250[(2)] = null);

(statearr_30209_30250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (10))){
var inst_30117 = (state_30174[(12)]);
var inst_30115 = (state_30174[(13)]);
var inst_30118 = (state_30174[(14)]);
var inst_30116 = (state_30174[(15)]);
var inst_30123 = cljs.core._nth.call(null,inst_30116,inst_30118);
var inst_30124 = cljs.core.async.muxch_STAR_.call(null,inst_30123);
var inst_30125 = cljs.core.async.close_BANG_.call(null,inst_30124);
var inst_30126 = (inst_30118 + (1));
var tmp30204 = inst_30117;
var tmp30205 = inst_30115;
var tmp30206 = inst_30116;
var inst_30115__$1 = tmp30205;
var inst_30116__$1 = tmp30206;
var inst_30117__$1 = tmp30204;
var inst_30118__$1 = inst_30126;
var state_30174__$1 = (function (){var statearr_30210 = state_30174;
(statearr_30210[(12)] = inst_30117__$1);

(statearr_30210[(13)] = inst_30115__$1);

(statearr_30210[(14)] = inst_30118__$1);

(statearr_30210[(17)] = inst_30125);

(statearr_30210[(15)] = inst_30116__$1);

return statearr_30210;
})();
var statearr_30211_30251 = state_30174__$1;
(statearr_30211_30251[(2)] = null);

(statearr_30211_30251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (18))){
var inst_30144 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30212_30252 = state_30174__$1;
(statearr_30212_30252[(2)] = inst_30144);

(statearr_30212_30252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (8))){
var inst_30117 = (state_30174[(12)]);
var inst_30118 = (state_30174[(14)]);
var inst_30120 = (inst_30118 < inst_30117);
var inst_30121 = inst_30120;
var state_30174__$1 = state_30174;
if(cljs.core.truth_(inst_30121)){
var statearr_30213_30253 = state_30174__$1;
(statearr_30213_30253[(1)] = (10));

} else {
var statearr_30214_30254 = state_30174__$1;
(statearr_30214_30254[(1)] = (11));

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
});})(c__19667__auto___30226,mults,ensure_mult,p))
;
return ((function (switch__19601__auto__,c__19667__auto___30226,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19602__auto__ = null;
var cljs$core$async$state_machine__19602__auto____0 = (function (){
var statearr_30218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30218[(0)] = cljs$core$async$state_machine__19602__auto__);

(statearr_30218[(1)] = (1));

return statearr_30218;
});
var cljs$core$async$state_machine__19602__auto____1 = (function (state_30174){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_30174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e30219){if((e30219 instanceof Object)){
var ex__19605__auto__ = e30219;
var statearr_30220_30255 = state_30174;
(statearr_30220_30255[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30256 = state_30174;
state_30174 = G__30256;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$state_machine__19602__auto__ = function(state_30174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19602__auto____1.call(this,state_30174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19602__auto____0;
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19602__auto____1;
return cljs$core$async$state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___30226,mults,ensure_mult,p))
})();
var state__19669__auto__ = (function (){var statearr_30221 = f__19668__auto__.call(null);
(statearr_30221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___30226);

return statearr_30221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___30226,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args30257 = [];
var len__17522__auto___30260 = arguments.length;
var i__17523__auto___30261 = (0);
while(true){
if((i__17523__auto___30261 < len__17522__auto___30260)){
args30257.push((arguments[i__17523__auto___30261]));

var G__30262 = (i__17523__auto___30261 + (1));
i__17523__auto___30261 = G__30262;
continue;
} else {
}
break;
}

var G__30259 = args30257.length;
switch (G__30259) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30257.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args30264 = [];
var len__17522__auto___30267 = arguments.length;
var i__17523__auto___30268 = (0);
while(true){
if((i__17523__auto___30268 < len__17522__auto___30267)){
args30264.push((arguments[i__17523__auto___30268]));

var G__30269 = (i__17523__auto___30268 + (1));
i__17523__auto___30268 = G__30269;
continue;
} else {
}
break;
}

var G__30266 = args30264.length;
switch (G__30266) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30264.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args30271 = [];
var len__17522__auto___30342 = arguments.length;
var i__17523__auto___30343 = (0);
while(true){
if((i__17523__auto___30343 < len__17522__auto___30342)){
args30271.push((arguments[i__17523__auto___30343]));

var G__30344 = (i__17523__auto___30343 + (1));
i__17523__auto___30343 = G__30344;
continue;
} else {
}
break;
}

var G__30273 = args30271.length;
switch (G__30273) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30271.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19667__auto___30346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___30346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___30346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30312){
var state_val_30313 = (state_30312[(1)]);
if((state_val_30313 === (7))){
var state_30312__$1 = state_30312;
var statearr_30314_30347 = state_30312__$1;
(statearr_30314_30347[(2)] = null);

(statearr_30314_30347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (1))){
var state_30312__$1 = state_30312;
var statearr_30315_30348 = state_30312__$1;
(statearr_30315_30348[(2)] = null);

(statearr_30315_30348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (4))){
var inst_30276 = (state_30312[(7)]);
var inst_30278 = (inst_30276 < cnt);
var state_30312__$1 = state_30312;
if(cljs.core.truth_(inst_30278)){
var statearr_30316_30349 = state_30312__$1;
(statearr_30316_30349[(1)] = (6));

} else {
var statearr_30317_30350 = state_30312__$1;
(statearr_30317_30350[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (15))){
var inst_30308 = (state_30312[(2)]);
var state_30312__$1 = state_30312;
var statearr_30318_30351 = state_30312__$1;
(statearr_30318_30351[(2)] = inst_30308);

(statearr_30318_30351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (13))){
var inst_30301 = cljs.core.async.close_BANG_.call(null,out);
var state_30312__$1 = state_30312;
var statearr_30319_30352 = state_30312__$1;
(statearr_30319_30352[(2)] = inst_30301);

(statearr_30319_30352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (6))){
var state_30312__$1 = state_30312;
var statearr_30320_30353 = state_30312__$1;
(statearr_30320_30353[(2)] = null);

(statearr_30320_30353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (3))){
var inst_30310 = (state_30312[(2)]);
var state_30312__$1 = state_30312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30312__$1,inst_30310);
} else {
if((state_val_30313 === (12))){
var inst_30298 = (state_30312[(8)]);
var inst_30298__$1 = (state_30312[(2)]);
var inst_30299 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30298__$1);
var state_30312__$1 = (function (){var statearr_30321 = state_30312;
(statearr_30321[(8)] = inst_30298__$1);

return statearr_30321;
})();
if(cljs.core.truth_(inst_30299)){
var statearr_30322_30354 = state_30312__$1;
(statearr_30322_30354[(1)] = (13));

} else {
var statearr_30323_30355 = state_30312__$1;
(statearr_30323_30355[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (2))){
var inst_30275 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30276 = (0);
var state_30312__$1 = (function (){var statearr_30324 = state_30312;
(statearr_30324[(9)] = inst_30275);

(statearr_30324[(7)] = inst_30276);

return statearr_30324;
})();
var statearr_30325_30356 = state_30312__$1;
(statearr_30325_30356[(2)] = null);

(statearr_30325_30356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (11))){
var inst_30276 = (state_30312[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30312,(10),Object,null,(9));
var inst_30285 = chs__$1.call(null,inst_30276);
var inst_30286 = done.call(null,inst_30276);
var inst_30287 = cljs.core.async.take_BANG_.call(null,inst_30285,inst_30286);
var state_30312__$1 = state_30312;
var statearr_30326_30357 = state_30312__$1;
(statearr_30326_30357[(2)] = inst_30287);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30312__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (9))){
var inst_30276 = (state_30312[(7)]);
var inst_30289 = (state_30312[(2)]);
var inst_30290 = (inst_30276 + (1));
var inst_30276__$1 = inst_30290;
var state_30312__$1 = (function (){var statearr_30327 = state_30312;
(statearr_30327[(10)] = inst_30289);

(statearr_30327[(7)] = inst_30276__$1);

return statearr_30327;
})();
var statearr_30328_30358 = state_30312__$1;
(statearr_30328_30358[(2)] = null);

(statearr_30328_30358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (5))){
var inst_30296 = (state_30312[(2)]);
var state_30312__$1 = (function (){var statearr_30329 = state_30312;
(statearr_30329[(11)] = inst_30296);

return statearr_30329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30312__$1,(12),dchan);
} else {
if((state_val_30313 === (14))){
var inst_30298 = (state_30312[(8)]);
var inst_30303 = cljs.core.apply.call(null,f,inst_30298);
var state_30312__$1 = state_30312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30312__$1,(16),out,inst_30303);
} else {
if((state_val_30313 === (16))){
var inst_30305 = (state_30312[(2)]);
var state_30312__$1 = (function (){var statearr_30330 = state_30312;
(statearr_30330[(12)] = inst_30305);

return statearr_30330;
})();
var statearr_30331_30359 = state_30312__$1;
(statearr_30331_30359[(2)] = null);

(statearr_30331_30359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (10))){
var inst_30280 = (state_30312[(2)]);
var inst_30281 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30312__$1 = (function (){var statearr_30332 = state_30312;
(statearr_30332[(13)] = inst_30280);

return statearr_30332;
})();
var statearr_30333_30360 = state_30312__$1;
(statearr_30333_30360[(2)] = inst_30281);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30312__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (8))){
var inst_30294 = (state_30312[(2)]);
var state_30312__$1 = state_30312;
var statearr_30334_30361 = state_30312__$1;
(statearr_30334_30361[(2)] = inst_30294);

(statearr_30334_30361[(1)] = (5));


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
});})(c__19667__auto___30346,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19601__auto__,c__19667__auto___30346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19602__auto__ = null;
var cljs$core$async$state_machine__19602__auto____0 = (function (){
var statearr_30338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30338[(0)] = cljs$core$async$state_machine__19602__auto__);

(statearr_30338[(1)] = (1));

return statearr_30338;
});
var cljs$core$async$state_machine__19602__auto____1 = (function (state_30312){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_30312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e30339){if((e30339 instanceof Object)){
var ex__19605__auto__ = e30339;
var statearr_30340_30362 = state_30312;
(statearr_30340_30362[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30363 = state_30312;
state_30312 = G__30363;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$state_machine__19602__auto__ = function(state_30312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19602__auto____1.call(this,state_30312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19602__auto____0;
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19602__auto____1;
return cljs$core$async$state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___30346,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19669__auto__ = (function (){var statearr_30341 = f__19668__auto__.call(null);
(statearr_30341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___30346);

return statearr_30341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___30346,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args30365 = [];
var len__17522__auto___30421 = arguments.length;
var i__17523__auto___30422 = (0);
while(true){
if((i__17523__auto___30422 < len__17522__auto___30421)){
args30365.push((arguments[i__17523__auto___30422]));

var G__30423 = (i__17523__auto___30422 + (1));
i__17523__auto___30422 = G__30423;
continue;
} else {
}
break;
}

var G__30367 = args30365.length;
switch (G__30367) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30365.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19667__auto___30425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___30425,out){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___30425,out){
return (function (state_30397){
var state_val_30398 = (state_30397[(1)]);
if((state_val_30398 === (7))){
var inst_30377 = (state_30397[(7)]);
var inst_30376 = (state_30397[(8)]);
var inst_30376__$1 = (state_30397[(2)]);
var inst_30377__$1 = cljs.core.nth.call(null,inst_30376__$1,(0),null);
var inst_30378 = cljs.core.nth.call(null,inst_30376__$1,(1),null);
var inst_30379 = (inst_30377__$1 == null);
var state_30397__$1 = (function (){var statearr_30399 = state_30397;
(statearr_30399[(7)] = inst_30377__$1);

(statearr_30399[(9)] = inst_30378);

(statearr_30399[(8)] = inst_30376__$1);

return statearr_30399;
})();
if(cljs.core.truth_(inst_30379)){
var statearr_30400_30426 = state_30397__$1;
(statearr_30400_30426[(1)] = (8));

} else {
var statearr_30401_30427 = state_30397__$1;
(statearr_30401_30427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (1))){
var inst_30368 = cljs.core.vec.call(null,chs);
var inst_30369 = inst_30368;
var state_30397__$1 = (function (){var statearr_30402 = state_30397;
(statearr_30402[(10)] = inst_30369);

return statearr_30402;
})();
var statearr_30403_30428 = state_30397__$1;
(statearr_30403_30428[(2)] = null);

(statearr_30403_30428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (4))){
var inst_30369 = (state_30397[(10)]);
var state_30397__$1 = state_30397;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30397__$1,(7),inst_30369);
} else {
if((state_val_30398 === (6))){
var inst_30393 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
var statearr_30404_30429 = state_30397__$1;
(statearr_30404_30429[(2)] = inst_30393);

(statearr_30404_30429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (3))){
var inst_30395 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30397__$1,inst_30395);
} else {
if((state_val_30398 === (2))){
var inst_30369 = (state_30397[(10)]);
var inst_30371 = cljs.core.count.call(null,inst_30369);
var inst_30372 = (inst_30371 > (0));
var state_30397__$1 = state_30397;
if(cljs.core.truth_(inst_30372)){
var statearr_30406_30430 = state_30397__$1;
(statearr_30406_30430[(1)] = (4));

} else {
var statearr_30407_30431 = state_30397__$1;
(statearr_30407_30431[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (11))){
var inst_30369 = (state_30397[(10)]);
var inst_30386 = (state_30397[(2)]);
var tmp30405 = inst_30369;
var inst_30369__$1 = tmp30405;
var state_30397__$1 = (function (){var statearr_30408 = state_30397;
(statearr_30408[(10)] = inst_30369__$1);

(statearr_30408[(11)] = inst_30386);

return statearr_30408;
})();
var statearr_30409_30432 = state_30397__$1;
(statearr_30409_30432[(2)] = null);

(statearr_30409_30432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (9))){
var inst_30377 = (state_30397[(7)]);
var state_30397__$1 = state_30397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30397__$1,(11),out,inst_30377);
} else {
if((state_val_30398 === (5))){
var inst_30391 = cljs.core.async.close_BANG_.call(null,out);
var state_30397__$1 = state_30397;
var statearr_30410_30433 = state_30397__$1;
(statearr_30410_30433[(2)] = inst_30391);

(statearr_30410_30433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (10))){
var inst_30389 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
var statearr_30411_30434 = state_30397__$1;
(statearr_30411_30434[(2)] = inst_30389);

(statearr_30411_30434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (8))){
var inst_30377 = (state_30397[(7)]);
var inst_30378 = (state_30397[(9)]);
var inst_30376 = (state_30397[(8)]);
var inst_30369 = (state_30397[(10)]);
var inst_30381 = (function (){var cs = inst_30369;
var vec__30374 = inst_30376;
var v = inst_30377;
var c = inst_30378;
return ((function (cs,vec__30374,v,c,inst_30377,inst_30378,inst_30376,inst_30369,state_val_30398,c__19667__auto___30425,out){
return (function (p1__30364_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30364_SHARP_);
});
;})(cs,vec__30374,v,c,inst_30377,inst_30378,inst_30376,inst_30369,state_val_30398,c__19667__auto___30425,out))
})();
var inst_30382 = cljs.core.filterv.call(null,inst_30381,inst_30369);
var inst_30369__$1 = inst_30382;
var state_30397__$1 = (function (){var statearr_30412 = state_30397;
(statearr_30412[(10)] = inst_30369__$1);

return statearr_30412;
})();
var statearr_30413_30435 = state_30397__$1;
(statearr_30413_30435[(2)] = null);

(statearr_30413_30435[(1)] = (2));


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
});})(c__19667__auto___30425,out))
;
return ((function (switch__19601__auto__,c__19667__auto___30425,out){
return (function() {
var cljs$core$async$state_machine__19602__auto__ = null;
var cljs$core$async$state_machine__19602__auto____0 = (function (){
var statearr_30417 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30417[(0)] = cljs$core$async$state_machine__19602__auto__);

(statearr_30417[(1)] = (1));

return statearr_30417;
});
var cljs$core$async$state_machine__19602__auto____1 = (function (state_30397){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_30397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e30418){if((e30418 instanceof Object)){
var ex__19605__auto__ = e30418;
var statearr_30419_30436 = state_30397;
(statearr_30419_30436[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30437 = state_30397;
state_30397 = G__30437;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$state_machine__19602__auto__ = function(state_30397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19602__auto____1.call(this,state_30397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19602__auto____0;
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19602__auto____1;
return cljs$core$async$state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___30425,out))
})();
var state__19669__auto__ = (function (){var statearr_30420 = f__19668__auto__.call(null);
(statearr_30420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___30425);

return statearr_30420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___30425,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args30438 = [];
var len__17522__auto___30487 = arguments.length;
var i__17523__auto___30488 = (0);
while(true){
if((i__17523__auto___30488 < len__17522__auto___30487)){
args30438.push((arguments[i__17523__auto___30488]));

var G__30489 = (i__17523__auto___30488 + (1));
i__17523__auto___30488 = G__30489;
continue;
} else {
}
break;
}

var G__30440 = args30438.length;
switch (G__30440) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30438.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19667__auto___30491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___30491,out){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___30491,out){
return (function (state_30464){
var state_val_30465 = (state_30464[(1)]);
if((state_val_30465 === (7))){
var inst_30446 = (state_30464[(7)]);
var inst_30446__$1 = (state_30464[(2)]);
var inst_30447 = (inst_30446__$1 == null);
var inst_30448 = cljs.core.not.call(null,inst_30447);
var state_30464__$1 = (function (){var statearr_30466 = state_30464;
(statearr_30466[(7)] = inst_30446__$1);

return statearr_30466;
})();
if(inst_30448){
var statearr_30467_30492 = state_30464__$1;
(statearr_30467_30492[(1)] = (8));

} else {
var statearr_30468_30493 = state_30464__$1;
(statearr_30468_30493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (1))){
var inst_30441 = (0);
var state_30464__$1 = (function (){var statearr_30469 = state_30464;
(statearr_30469[(8)] = inst_30441);

return statearr_30469;
})();
var statearr_30470_30494 = state_30464__$1;
(statearr_30470_30494[(2)] = null);

(statearr_30470_30494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (4))){
var state_30464__$1 = state_30464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30464__$1,(7),ch);
} else {
if((state_val_30465 === (6))){
var inst_30459 = (state_30464[(2)]);
var state_30464__$1 = state_30464;
var statearr_30471_30495 = state_30464__$1;
(statearr_30471_30495[(2)] = inst_30459);

(statearr_30471_30495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (3))){
var inst_30461 = (state_30464[(2)]);
var inst_30462 = cljs.core.async.close_BANG_.call(null,out);
var state_30464__$1 = (function (){var statearr_30472 = state_30464;
(statearr_30472[(9)] = inst_30461);

return statearr_30472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30464__$1,inst_30462);
} else {
if((state_val_30465 === (2))){
var inst_30441 = (state_30464[(8)]);
var inst_30443 = (inst_30441 < n);
var state_30464__$1 = state_30464;
if(cljs.core.truth_(inst_30443)){
var statearr_30473_30496 = state_30464__$1;
(statearr_30473_30496[(1)] = (4));

} else {
var statearr_30474_30497 = state_30464__$1;
(statearr_30474_30497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (11))){
var inst_30441 = (state_30464[(8)]);
var inst_30451 = (state_30464[(2)]);
var inst_30452 = (inst_30441 + (1));
var inst_30441__$1 = inst_30452;
var state_30464__$1 = (function (){var statearr_30475 = state_30464;
(statearr_30475[(10)] = inst_30451);

(statearr_30475[(8)] = inst_30441__$1);

return statearr_30475;
})();
var statearr_30476_30498 = state_30464__$1;
(statearr_30476_30498[(2)] = null);

(statearr_30476_30498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (9))){
var state_30464__$1 = state_30464;
var statearr_30477_30499 = state_30464__$1;
(statearr_30477_30499[(2)] = null);

(statearr_30477_30499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (5))){
var state_30464__$1 = state_30464;
var statearr_30478_30500 = state_30464__$1;
(statearr_30478_30500[(2)] = null);

(statearr_30478_30500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (10))){
var inst_30456 = (state_30464[(2)]);
var state_30464__$1 = state_30464;
var statearr_30479_30501 = state_30464__$1;
(statearr_30479_30501[(2)] = inst_30456);

(statearr_30479_30501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (8))){
var inst_30446 = (state_30464[(7)]);
var state_30464__$1 = state_30464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30464__$1,(11),out,inst_30446);
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
});})(c__19667__auto___30491,out))
;
return ((function (switch__19601__auto__,c__19667__auto___30491,out){
return (function() {
var cljs$core$async$state_machine__19602__auto__ = null;
var cljs$core$async$state_machine__19602__auto____0 = (function (){
var statearr_30483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30483[(0)] = cljs$core$async$state_machine__19602__auto__);

(statearr_30483[(1)] = (1));

return statearr_30483;
});
var cljs$core$async$state_machine__19602__auto____1 = (function (state_30464){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_30464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e30484){if((e30484 instanceof Object)){
var ex__19605__auto__ = e30484;
var statearr_30485_30502 = state_30464;
(statearr_30485_30502[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30503 = state_30464;
state_30464 = G__30503;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$state_machine__19602__auto__ = function(state_30464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19602__auto____1.call(this,state_30464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19602__auto____0;
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19602__auto____1;
return cljs$core$async$state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___30491,out))
})();
var state__19669__auto__ = (function (){var statearr_30486 = f__19668__auto__.call(null);
(statearr_30486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___30491);

return statearr_30486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___30491,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30511 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30511 = (function (map_LT_,f,ch,meta30512){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30512 = meta30512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30513,meta30512__$1){
var self__ = this;
var _30513__$1 = this;
return (new cljs.core.async.t30511(self__.map_LT_,self__.f,self__.ch,meta30512__$1));
});

cljs.core.async.t30511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30513){
var self__ = this;
var _30513__$1 = this;
return self__.meta30512;
});

cljs.core.async.t30511.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30511.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30511.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30514 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30514 = (function (map_LT_,f,ch,meta30512,_,fn1,meta30515){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30512 = meta30512;
this._ = _;
this.fn1 = fn1;
this.meta30515 = meta30515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30516,meta30515__$1){
var self__ = this;
var _30516__$1 = this;
return (new cljs.core.async.t30514(self__.map_LT_,self__.f,self__.ch,self__.meta30512,self__._,self__.fn1,meta30515__$1));
});})(___$1))
;

cljs.core.async.t30514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30516){
var self__ = this;
var _30516__$1 = this;
return self__.meta30515;
});})(___$1))
;

cljs.core.async.t30514.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30504_SHARP_){
return f1.call(null,(((p1__30504_SHARP_ == null))?null:self__.f.call(null,p1__30504_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30514.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30512","meta30512",2090621203,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t30511","cljs.core.async/t30511",901164342,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30515","meta30515",-220468474,null)], null);
});})(___$1))
;

cljs.core.async.t30514.cljs$lang$type = true;

cljs.core.async.t30514.cljs$lang$ctorStr = "cljs.core.async/t30514";

cljs.core.async.t30514.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17062__auto__,writer__17063__auto__,opt__17064__auto__){
return cljs.core._write.call(null,writer__17063__auto__,"cljs.core.async/t30514");
});})(___$1))
;

cljs.core.async.__GT_t30514 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30514(map_LT___$1,f__$1,ch__$1,meta30512__$1,___$2,fn1__$1,meta30515){
return (new cljs.core.async.t30514(map_LT___$1,f__$1,ch__$1,meta30512__$1,___$2,fn1__$1,meta30515));
});})(___$1))
;

}

return (new cljs.core.async.t30514(self__.map_LT_,self__.f,self__.ch,self__.meta30512,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16471__auto__ = ret;
if(cljs.core.truth_(and__16471__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16471__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t30511.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30512","meta30512",2090621203,null)], null);
});

cljs.core.async.t30511.cljs$lang$type = true;

cljs.core.async.t30511.cljs$lang$ctorStr = "cljs.core.async/t30511";

cljs.core.async.t30511.cljs$lang$ctorPrWriter = (function (this__17062__auto__,writer__17063__auto__,opt__17064__auto__){
return cljs.core._write.call(null,writer__17063__auto__,"cljs.core.async/t30511");
});

cljs.core.async.__GT_t30511 = (function cljs$core$async$map_LT__$___GT_t30511(map_LT___$1,f__$1,ch__$1,meta30512){
return (new cljs.core.async.t30511(map_LT___$1,f__$1,ch__$1,meta30512));
});

}

return (new cljs.core.async.t30511(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30520 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30520 = (function (map_GT_,f,ch,meta30521){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30521 = meta30521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30522,meta30521__$1){
var self__ = this;
var _30522__$1 = this;
return (new cljs.core.async.t30520(self__.map_GT_,self__.f,self__.ch,meta30521__$1));
});

cljs.core.async.t30520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30522){
var self__ = this;
var _30522__$1 = this;
return self__.meta30521;
});

cljs.core.async.t30520.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30520.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30520.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30520.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30520.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30520.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30521","meta30521",-324920850,null)], null);
});

cljs.core.async.t30520.cljs$lang$type = true;

cljs.core.async.t30520.cljs$lang$ctorStr = "cljs.core.async/t30520";

cljs.core.async.t30520.cljs$lang$ctorPrWriter = (function (this__17062__auto__,writer__17063__auto__,opt__17064__auto__){
return cljs.core._write.call(null,writer__17063__auto__,"cljs.core.async/t30520");
});

cljs.core.async.__GT_t30520 = (function cljs$core$async$map_GT__$___GT_t30520(map_GT___$1,f__$1,ch__$1,meta30521){
return (new cljs.core.async.t30520(map_GT___$1,f__$1,ch__$1,meta30521));
});

}

return (new cljs.core.async.t30520(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30526 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30526 = (function (filter_GT_,p,ch,meta30527){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30527 = meta30527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30528,meta30527__$1){
var self__ = this;
var _30528__$1 = this;
return (new cljs.core.async.t30526(self__.filter_GT_,self__.p,self__.ch,meta30527__$1));
});

cljs.core.async.t30526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30528){
var self__ = this;
var _30528__$1 = this;
return self__.meta30527;
});

cljs.core.async.t30526.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30526.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30526.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30526.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30526.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30526.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30526.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30527","meta30527",-1128629997,null)], null);
});

cljs.core.async.t30526.cljs$lang$type = true;

cljs.core.async.t30526.cljs$lang$ctorStr = "cljs.core.async/t30526";

cljs.core.async.t30526.cljs$lang$ctorPrWriter = (function (this__17062__auto__,writer__17063__auto__,opt__17064__auto__){
return cljs.core._write.call(null,writer__17063__auto__,"cljs.core.async/t30526");
});

cljs.core.async.__GT_t30526 = (function cljs$core$async$filter_GT__$___GT_t30526(filter_GT___$1,p__$1,ch__$1,meta30527){
return (new cljs.core.async.t30526(filter_GT___$1,p__$1,ch__$1,meta30527));
});

}

return (new cljs.core.async.t30526(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args30529 = [];
var len__17522__auto___30573 = arguments.length;
var i__17523__auto___30574 = (0);
while(true){
if((i__17523__auto___30574 < len__17522__auto___30573)){
args30529.push((arguments[i__17523__auto___30574]));

var G__30575 = (i__17523__auto___30574 + (1));
i__17523__auto___30574 = G__30575;
continue;
} else {
}
break;
}

var G__30531 = args30529.length;
switch (G__30531) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30529.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19667__auto___30577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___30577,out){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___30577,out){
return (function (state_30552){
var state_val_30553 = (state_30552[(1)]);
if((state_val_30553 === (7))){
var inst_30548 = (state_30552[(2)]);
var state_30552__$1 = state_30552;
var statearr_30554_30578 = state_30552__$1;
(statearr_30554_30578[(2)] = inst_30548);

(statearr_30554_30578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (1))){
var state_30552__$1 = state_30552;
var statearr_30555_30579 = state_30552__$1;
(statearr_30555_30579[(2)] = null);

(statearr_30555_30579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (4))){
var inst_30534 = (state_30552[(7)]);
var inst_30534__$1 = (state_30552[(2)]);
var inst_30535 = (inst_30534__$1 == null);
var state_30552__$1 = (function (){var statearr_30556 = state_30552;
(statearr_30556[(7)] = inst_30534__$1);

return statearr_30556;
})();
if(cljs.core.truth_(inst_30535)){
var statearr_30557_30580 = state_30552__$1;
(statearr_30557_30580[(1)] = (5));

} else {
var statearr_30558_30581 = state_30552__$1;
(statearr_30558_30581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (6))){
var inst_30534 = (state_30552[(7)]);
var inst_30539 = p.call(null,inst_30534);
var state_30552__$1 = state_30552;
if(cljs.core.truth_(inst_30539)){
var statearr_30559_30582 = state_30552__$1;
(statearr_30559_30582[(1)] = (8));

} else {
var statearr_30560_30583 = state_30552__$1;
(statearr_30560_30583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (3))){
var inst_30550 = (state_30552[(2)]);
var state_30552__$1 = state_30552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30552__$1,inst_30550);
} else {
if((state_val_30553 === (2))){
var state_30552__$1 = state_30552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30552__$1,(4),ch);
} else {
if((state_val_30553 === (11))){
var inst_30542 = (state_30552[(2)]);
var state_30552__$1 = state_30552;
var statearr_30561_30584 = state_30552__$1;
(statearr_30561_30584[(2)] = inst_30542);

(statearr_30561_30584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (9))){
var state_30552__$1 = state_30552;
var statearr_30562_30585 = state_30552__$1;
(statearr_30562_30585[(2)] = null);

(statearr_30562_30585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (5))){
var inst_30537 = cljs.core.async.close_BANG_.call(null,out);
var state_30552__$1 = state_30552;
var statearr_30563_30586 = state_30552__$1;
(statearr_30563_30586[(2)] = inst_30537);

(statearr_30563_30586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (10))){
var inst_30545 = (state_30552[(2)]);
var state_30552__$1 = (function (){var statearr_30564 = state_30552;
(statearr_30564[(8)] = inst_30545);

return statearr_30564;
})();
var statearr_30565_30587 = state_30552__$1;
(statearr_30565_30587[(2)] = null);

(statearr_30565_30587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (8))){
var inst_30534 = (state_30552[(7)]);
var state_30552__$1 = state_30552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30552__$1,(11),out,inst_30534);
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
});})(c__19667__auto___30577,out))
;
return ((function (switch__19601__auto__,c__19667__auto___30577,out){
return (function() {
var cljs$core$async$state_machine__19602__auto__ = null;
var cljs$core$async$state_machine__19602__auto____0 = (function (){
var statearr_30569 = [null,null,null,null,null,null,null,null,null];
(statearr_30569[(0)] = cljs$core$async$state_machine__19602__auto__);

(statearr_30569[(1)] = (1));

return statearr_30569;
});
var cljs$core$async$state_machine__19602__auto____1 = (function (state_30552){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_30552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e30570){if((e30570 instanceof Object)){
var ex__19605__auto__ = e30570;
var statearr_30571_30588 = state_30552;
(statearr_30571_30588[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30589 = state_30552;
state_30552 = G__30589;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$state_machine__19602__auto__ = function(state_30552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19602__auto____1.call(this,state_30552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19602__auto____0;
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19602__auto____1;
return cljs$core$async$state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___30577,out))
})();
var state__19669__auto__ = (function (){var statearr_30572 = f__19668__auto__.call(null);
(statearr_30572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___30577);

return statearr_30572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___30577,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args30590 = [];
var len__17522__auto___30593 = arguments.length;
var i__17523__auto___30594 = (0);
while(true){
if((i__17523__auto___30594 < len__17522__auto___30593)){
args30590.push((arguments[i__17523__auto___30594]));

var G__30595 = (i__17523__auto___30594 + (1));
i__17523__auto___30594 = G__30595;
continue;
} else {
}
break;
}

var G__30592 = args30590.length;
switch (G__30592) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30590.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto__){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto__){
return (function (state_30762){
var state_val_30763 = (state_30762[(1)]);
if((state_val_30763 === (7))){
var inst_30758 = (state_30762[(2)]);
var state_30762__$1 = state_30762;
var statearr_30764_30805 = state_30762__$1;
(statearr_30764_30805[(2)] = inst_30758);

(statearr_30764_30805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (20))){
var inst_30728 = (state_30762[(7)]);
var inst_30739 = (state_30762[(2)]);
var inst_30740 = cljs.core.next.call(null,inst_30728);
var inst_30714 = inst_30740;
var inst_30715 = null;
var inst_30716 = (0);
var inst_30717 = (0);
var state_30762__$1 = (function (){var statearr_30765 = state_30762;
(statearr_30765[(8)] = inst_30715);

(statearr_30765[(9)] = inst_30714);

(statearr_30765[(10)] = inst_30717);

(statearr_30765[(11)] = inst_30739);

(statearr_30765[(12)] = inst_30716);

return statearr_30765;
})();
var statearr_30766_30806 = state_30762__$1;
(statearr_30766_30806[(2)] = null);

(statearr_30766_30806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (1))){
var state_30762__$1 = state_30762;
var statearr_30767_30807 = state_30762__$1;
(statearr_30767_30807[(2)] = null);

(statearr_30767_30807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (4))){
var inst_30703 = (state_30762[(13)]);
var inst_30703__$1 = (state_30762[(2)]);
var inst_30704 = (inst_30703__$1 == null);
var state_30762__$1 = (function (){var statearr_30768 = state_30762;
(statearr_30768[(13)] = inst_30703__$1);

return statearr_30768;
})();
if(cljs.core.truth_(inst_30704)){
var statearr_30769_30808 = state_30762__$1;
(statearr_30769_30808[(1)] = (5));

} else {
var statearr_30770_30809 = state_30762__$1;
(statearr_30770_30809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (15))){
var state_30762__$1 = state_30762;
var statearr_30774_30810 = state_30762__$1;
(statearr_30774_30810[(2)] = null);

(statearr_30774_30810[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (21))){
var state_30762__$1 = state_30762;
var statearr_30775_30811 = state_30762__$1;
(statearr_30775_30811[(2)] = null);

(statearr_30775_30811[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (13))){
var inst_30715 = (state_30762[(8)]);
var inst_30714 = (state_30762[(9)]);
var inst_30717 = (state_30762[(10)]);
var inst_30716 = (state_30762[(12)]);
var inst_30724 = (state_30762[(2)]);
var inst_30725 = (inst_30717 + (1));
var tmp30771 = inst_30715;
var tmp30772 = inst_30714;
var tmp30773 = inst_30716;
var inst_30714__$1 = tmp30772;
var inst_30715__$1 = tmp30771;
var inst_30716__$1 = tmp30773;
var inst_30717__$1 = inst_30725;
var state_30762__$1 = (function (){var statearr_30776 = state_30762;
(statearr_30776[(8)] = inst_30715__$1);

(statearr_30776[(9)] = inst_30714__$1);

(statearr_30776[(10)] = inst_30717__$1);

(statearr_30776[(14)] = inst_30724);

(statearr_30776[(12)] = inst_30716__$1);

return statearr_30776;
})();
var statearr_30777_30812 = state_30762__$1;
(statearr_30777_30812[(2)] = null);

(statearr_30777_30812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (22))){
var state_30762__$1 = state_30762;
var statearr_30778_30813 = state_30762__$1;
(statearr_30778_30813[(2)] = null);

(statearr_30778_30813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (6))){
var inst_30703 = (state_30762[(13)]);
var inst_30712 = f.call(null,inst_30703);
var inst_30713 = cljs.core.seq.call(null,inst_30712);
var inst_30714 = inst_30713;
var inst_30715 = null;
var inst_30716 = (0);
var inst_30717 = (0);
var state_30762__$1 = (function (){var statearr_30779 = state_30762;
(statearr_30779[(8)] = inst_30715);

(statearr_30779[(9)] = inst_30714);

(statearr_30779[(10)] = inst_30717);

(statearr_30779[(12)] = inst_30716);

return statearr_30779;
})();
var statearr_30780_30814 = state_30762__$1;
(statearr_30780_30814[(2)] = null);

(statearr_30780_30814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (17))){
var inst_30728 = (state_30762[(7)]);
var inst_30732 = cljs.core.chunk_first.call(null,inst_30728);
var inst_30733 = cljs.core.chunk_rest.call(null,inst_30728);
var inst_30734 = cljs.core.count.call(null,inst_30732);
var inst_30714 = inst_30733;
var inst_30715 = inst_30732;
var inst_30716 = inst_30734;
var inst_30717 = (0);
var state_30762__$1 = (function (){var statearr_30781 = state_30762;
(statearr_30781[(8)] = inst_30715);

(statearr_30781[(9)] = inst_30714);

(statearr_30781[(10)] = inst_30717);

(statearr_30781[(12)] = inst_30716);

return statearr_30781;
})();
var statearr_30782_30815 = state_30762__$1;
(statearr_30782_30815[(2)] = null);

(statearr_30782_30815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (3))){
var inst_30760 = (state_30762[(2)]);
var state_30762__$1 = state_30762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30762__$1,inst_30760);
} else {
if((state_val_30763 === (12))){
var inst_30748 = (state_30762[(2)]);
var state_30762__$1 = state_30762;
var statearr_30783_30816 = state_30762__$1;
(statearr_30783_30816[(2)] = inst_30748);

(statearr_30783_30816[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (2))){
var state_30762__$1 = state_30762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30762__$1,(4),in$);
} else {
if((state_val_30763 === (23))){
var inst_30756 = (state_30762[(2)]);
var state_30762__$1 = state_30762;
var statearr_30784_30817 = state_30762__$1;
(statearr_30784_30817[(2)] = inst_30756);

(statearr_30784_30817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (19))){
var inst_30743 = (state_30762[(2)]);
var state_30762__$1 = state_30762;
var statearr_30785_30818 = state_30762__$1;
(statearr_30785_30818[(2)] = inst_30743);

(statearr_30785_30818[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (11))){
var inst_30728 = (state_30762[(7)]);
var inst_30714 = (state_30762[(9)]);
var inst_30728__$1 = cljs.core.seq.call(null,inst_30714);
var state_30762__$1 = (function (){var statearr_30786 = state_30762;
(statearr_30786[(7)] = inst_30728__$1);

return statearr_30786;
})();
if(inst_30728__$1){
var statearr_30787_30819 = state_30762__$1;
(statearr_30787_30819[(1)] = (14));

} else {
var statearr_30788_30820 = state_30762__$1;
(statearr_30788_30820[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (9))){
var inst_30750 = (state_30762[(2)]);
var inst_30751 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30762__$1 = (function (){var statearr_30789 = state_30762;
(statearr_30789[(15)] = inst_30750);

return statearr_30789;
})();
if(cljs.core.truth_(inst_30751)){
var statearr_30790_30821 = state_30762__$1;
(statearr_30790_30821[(1)] = (21));

} else {
var statearr_30791_30822 = state_30762__$1;
(statearr_30791_30822[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (5))){
var inst_30706 = cljs.core.async.close_BANG_.call(null,out);
var state_30762__$1 = state_30762;
var statearr_30792_30823 = state_30762__$1;
(statearr_30792_30823[(2)] = inst_30706);

(statearr_30792_30823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (14))){
var inst_30728 = (state_30762[(7)]);
var inst_30730 = cljs.core.chunked_seq_QMARK_.call(null,inst_30728);
var state_30762__$1 = state_30762;
if(inst_30730){
var statearr_30793_30824 = state_30762__$1;
(statearr_30793_30824[(1)] = (17));

} else {
var statearr_30794_30825 = state_30762__$1;
(statearr_30794_30825[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (16))){
var inst_30746 = (state_30762[(2)]);
var state_30762__$1 = state_30762;
var statearr_30795_30826 = state_30762__$1;
(statearr_30795_30826[(2)] = inst_30746);

(statearr_30795_30826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (10))){
var inst_30715 = (state_30762[(8)]);
var inst_30717 = (state_30762[(10)]);
var inst_30722 = cljs.core._nth.call(null,inst_30715,inst_30717);
var state_30762__$1 = state_30762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30762__$1,(13),out,inst_30722);
} else {
if((state_val_30763 === (18))){
var inst_30728 = (state_30762[(7)]);
var inst_30737 = cljs.core.first.call(null,inst_30728);
var state_30762__$1 = state_30762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30762__$1,(20),out,inst_30737);
} else {
if((state_val_30763 === (8))){
var inst_30717 = (state_30762[(10)]);
var inst_30716 = (state_30762[(12)]);
var inst_30719 = (inst_30717 < inst_30716);
var inst_30720 = inst_30719;
var state_30762__$1 = state_30762;
if(cljs.core.truth_(inst_30720)){
var statearr_30796_30827 = state_30762__$1;
(statearr_30796_30827[(1)] = (10));

} else {
var statearr_30797_30828 = state_30762__$1;
(statearr_30797_30828[(1)] = (11));

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
});})(c__19667__auto__))
;
return ((function (switch__19601__auto__,c__19667__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19602__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19602__auto____0 = (function (){
var statearr_30801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30801[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19602__auto__);

(statearr_30801[(1)] = (1));

return statearr_30801;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19602__auto____1 = (function (state_30762){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_30762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e30802){if((e30802 instanceof Object)){
var ex__19605__auto__ = e30802;
var statearr_30803_30829 = state_30762;
(statearr_30803_30829[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30830 = state_30762;
state_30762 = G__30830;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19602__auto__ = function(state_30762){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19602__auto____1.call(this,state_30762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19602__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19602__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto__))
})();
var state__19669__auto__ = (function (){var statearr_30804 = f__19668__auto__.call(null);
(statearr_30804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto__);

return statearr_30804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto__))
);

return c__19667__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args30831 = [];
var len__17522__auto___30834 = arguments.length;
var i__17523__auto___30835 = (0);
while(true){
if((i__17523__auto___30835 < len__17522__auto___30834)){
args30831.push((arguments[i__17523__auto___30835]));

var G__30836 = (i__17523__auto___30835 + (1));
i__17523__auto___30835 = G__30836;
continue;
} else {
}
break;
}

var G__30833 = args30831.length;
switch (G__30833) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30831.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args30838 = [];
var len__17522__auto___30841 = arguments.length;
var i__17523__auto___30842 = (0);
while(true){
if((i__17523__auto___30842 < len__17522__auto___30841)){
args30838.push((arguments[i__17523__auto___30842]));

var G__30843 = (i__17523__auto___30842 + (1));
i__17523__auto___30842 = G__30843;
continue;
} else {
}
break;
}

var G__30840 = args30838.length;
switch (G__30840) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30838.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args30845 = [];
var len__17522__auto___30896 = arguments.length;
var i__17523__auto___30897 = (0);
while(true){
if((i__17523__auto___30897 < len__17522__auto___30896)){
args30845.push((arguments[i__17523__auto___30897]));

var G__30898 = (i__17523__auto___30897 + (1));
i__17523__auto___30897 = G__30898;
continue;
} else {
}
break;
}

var G__30847 = args30845.length;
switch (G__30847) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30845.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19667__auto___30900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___30900,out){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___30900,out){
return (function (state_30871){
var state_val_30872 = (state_30871[(1)]);
if((state_val_30872 === (7))){
var inst_30866 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30873_30901 = state_30871__$1;
(statearr_30873_30901[(2)] = inst_30866);

(statearr_30873_30901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (1))){
var inst_30848 = null;
var state_30871__$1 = (function (){var statearr_30874 = state_30871;
(statearr_30874[(7)] = inst_30848);

return statearr_30874;
})();
var statearr_30875_30902 = state_30871__$1;
(statearr_30875_30902[(2)] = null);

(statearr_30875_30902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (4))){
var inst_30851 = (state_30871[(8)]);
var inst_30851__$1 = (state_30871[(2)]);
var inst_30852 = (inst_30851__$1 == null);
var inst_30853 = cljs.core.not.call(null,inst_30852);
var state_30871__$1 = (function (){var statearr_30876 = state_30871;
(statearr_30876[(8)] = inst_30851__$1);

return statearr_30876;
})();
if(inst_30853){
var statearr_30877_30903 = state_30871__$1;
(statearr_30877_30903[(1)] = (5));

} else {
var statearr_30878_30904 = state_30871__$1;
(statearr_30878_30904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (6))){
var state_30871__$1 = state_30871;
var statearr_30879_30905 = state_30871__$1;
(statearr_30879_30905[(2)] = null);

(statearr_30879_30905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (3))){
var inst_30868 = (state_30871[(2)]);
var inst_30869 = cljs.core.async.close_BANG_.call(null,out);
var state_30871__$1 = (function (){var statearr_30880 = state_30871;
(statearr_30880[(9)] = inst_30868);

return statearr_30880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30871__$1,inst_30869);
} else {
if((state_val_30872 === (2))){
var state_30871__$1 = state_30871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30871__$1,(4),ch);
} else {
if((state_val_30872 === (11))){
var inst_30851 = (state_30871[(8)]);
var inst_30860 = (state_30871[(2)]);
var inst_30848 = inst_30851;
var state_30871__$1 = (function (){var statearr_30881 = state_30871;
(statearr_30881[(7)] = inst_30848);

(statearr_30881[(10)] = inst_30860);

return statearr_30881;
})();
var statearr_30882_30906 = state_30871__$1;
(statearr_30882_30906[(2)] = null);

(statearr_30882_30906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (9))){
var inst_30851 = (state_30871[(8)]);
var state_30871__$1 = state_30871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30871__$1,(11),out,inst_30851);
} else {
if((state_val_30872 === (5))){
var inst_30848 = (state_30871[(7)]);
var inst_30851 = (state_30871[(8)]);
var inst_30855 = cljs.core._EQ_.call(null,inst_30851,inst_30848);
var state_30871__$1 = state_30871;
if(inst_30855){
var statearr_30884_30907 = state_30871__$1;
(statearr_30884_30907[(1)] = (8));

} else {
var statearr_30885_30908 = state_30871__$1;
(statearr_30885_30908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (10))){
var inst_30863 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30886_30909 = state_30871__$1;
(statearr_30886_30909[(2)] = inst_30863);

(statearr_30886_30909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (8))){
var inst_30848 = (state_30871[(7)]);
var tmp30883 = inst_30848;
var inst_30848__$1 = tmp30883;
var state_30871__$1 = (function (){var statearr_30887 = state_30871;
(statearr_30887[(7)] = inst_30848__$1);

return statearr_30887;
})();
var statearr_30888_30910 = state_30871__$1;
(statearr_30888_30910[(2)] = null);

(statearr_30888_30910[(1)] = (2));


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
});})(c__19667__auto___30900,out))
;
return ((function (switch__19601__auto__,c__19667__auto___30900,out){
return (function() {
var cljs$core$async$state_machine__19602__auto__ = null;
var cljs$core$async$state_machine__19602__auto____0 = (function (){
var statearr_30892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30892[(0)] = cljs$core$async$state_machine__19602__auto__);

(statearr_30892[(1)] = (1));

return statearr_30892;
});
var cljs$core$async$state_machine__19602__auto____1 = (function (state_30871){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_30871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e30893){if((e30893 instanceof Object)){
var ex__19605__auto__ = e30893;
var statearr_30894_30911 = state_30871;
(statearr_30894_30911[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30912 = state_30871;
state_30871 = G__30912;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$state_machine__19602__auto__ = function(state_30871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19602__auto____1.call(this,state_30871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19602__auto____0;
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19602__auto____1;
return cljs$core$async$state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___30900,out))
})();
var state__19669__auto__ = (function (){var statearr_30895 = f__19668__auto__.call(null);
(statearr_30895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___30900);

return statearr_30895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___30900,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args30913 = [];
var len__17522__auto___30983 = arguments.length;
var i__17523__auto___30984 = (0);
while(true){
if((i__17523__auto___30984 < len__17522__auto___30983)){
args30913.push((arguments[i__17523__auto___30984]));

var G__30985 = (i__17523__auto___30984 + (1));
i__17523__auto___30984 = G__30985;
continue;
} else {
}
break;
}

var G__30915 = args30913.length;
switch (G__30915) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30913.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19667__auto___30987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___30987,out){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___30987,out){
return (function (state_30953){
var state_val_30954 = (state_30953[(1)]);
if((state_val_30954 === (7))){
var inst_30949 = (state_30953[(2)]);
var state_30953__$1 = state_30953;
var statearr_30955_30988 = state_30953__$1;
(statearr_30955_30988[(2)] = inst_30949);

(statearr_30955_30988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (1))){
var inst_30916 = (new Array(n));
var inst_30917 = inst_30916;
var inst_30918 = (0);
var state_30953__$1 = (function (){var statearr_30956 = state_30953;
(statearr_30956[(7)] = inst_30918);

(statearr_30956[(8)] = inst_30917);

return statearr_30956;
})();
var statearr_30957_30989 = state_30953__$1;
(statearr_30957_30989[(2)] = null);

(statearr_30957_30989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (4))){
var inst_30921 = (state_30953[(9)]);
var inst_30921__$1 = (state_30953[(2)]);
var inst_30922 = (inst_30921__$1 == null);
var inst_30923 = cljs.core.not.call(null,inst_30922);
var state_30953__$1 = (function (){var statearr_30958 = state_30953;
(statearr_30958[(9)] = inst_30921__$1);

return statearr_30958;
})();
if(inst_30923){
var statearr_30959_30990 = state_30953__$1;
(statearr_30959_30990[(1)] = (5));

} else {
var statearr_30960_30991 = state_30953__$1;
(statearr_30960_30991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (15))){
var inst_30943 = (state_30953[(2)]);
var state_30953__$1 = state_30953;
var statearr_30961_30992 = state_30953__$1;
(statearr_30961_30992[(2)] = inst_30943);

(statearr_30961_30992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (13))){
var state_30953__$1 = state_30953;
var statearr_30962_30993 = state_30953__$1;
(statearr_30962_30993[(2)] = null);

(statearr_30962_30993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (6))){
var inst_30918 = (state_30953[(7)]);
var inst_30939 = (inst_30918 > (0));
var state_30953__$1 = state_30953;
if(cljs.core.truth_(inst_30939)){
var statearr_30963_30994 = state_30953__$1;
(statearr_30963_30994[(1)] = (12));

} else {
var statearr_30964_30995 = state_30953__$1;
(statearr_30964_30995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (3))){
var inst_30951 = (state_30953[(2)]);
var state_30953__$1 = state_30953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30953__$1,inst_30951);
} else {
if((state_val_30954 === (12))){
var inst_30917 = (state_30953[(8)]);
var inst_30941 = cljs.core.vec.call(null,inst_30917);
var state_30953__$1 = state_30953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30953__$1,(15),out,inst_30941);
} else {
if((state_val_30954 === (2))){
var state_30953__$1 = state_30953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30953__$1,(4),ch);
} else {
if((state_val_30954 === (11))){
var inst_30933 = (state_30953[(2)]);
var inst_30934 = (new Array(n));
var inst_30917 = inst_30934;
var inst_30918 = (0);
var state_30953__$1 = (function (){var statearr_30965 = state_30953;
(statearr_30965[(10)] = inst_30933);

(statearr_30965[(7)] = inst_30918);

(statearr_30965[(8)] = inst_30917);

return statearr_30965;
})();
var statearr_30966_30996 = state_30953__$1;
(statearr_30966_30996[(2)] = null);

(statearr_30966_30996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (9))){
var inst_30917 = (state_30953[(8)]);
var inst_30931 = cljs.core.vec.call(null,inst_30917);
var state_30953__$1 = state_30953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30953__$1,(11),out,inst_30931);
} else {
if((state_val_30954 === (5))){
var inst_30921 = (state_30953[(9)]);
var inst_30918 = (state_30953[(7)]);
var inst_30926 = (state_30953[(11)]);
var inst_30917 = (state_30953[(8)]);
var inst_30925 = (inst_30917[inst_30918] = inst_30921);
var inst_30926__$1 = (inst_30918 + (1));
var inst_30927 = (inst_30926__$1 < n);
var state_30953__$1 = (function (){var statearr_30967 = state_30953;
(statearr_30967[(12)] = inst_30925);

(statearr_30967[(11)] = inst_30926__$1);

return statearr_30967;
})();
if(cljs.core.truth_(inst_30927)){
var statearr_30968_30997 = state_30953__$1;
(statearr_30968_30997[(1)] = (8));

} else {
var statearr_30969_30998 = state_30953__$1;
(statearr_30969_30998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (14))){
var inst_30946 = (state_30953[(2)]);
var inst_30947 = cljs.core.async.close_BANG_.call(null,out);
var state_30953__$1 = (function (){var statearr_30971 = state_30953;
(statearr_30971[(13)] = inst_30946);

return statearr_30971;
})();
var statearr_30972_30999 = state_30953__$1;
(statearr_30972_30999[(2)] = inst_30947);

(statearr_30972_30999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (10))){
var inst_30937 = (state_30953[(2)]);
var state_30953__$1 = state_30953;
var statearr_30973_31000 = state_30953__$1;
(statearr_30973_31000[(2)] = inst_30937);

(statearr_30973_31000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (8))){
var inst_30926 = (state_30953[(11)]);
var inst_30917 = (state_30953[(8)]);
var tmp30970 = inst_30917;
var inst_30917__$1 = tmp30970;
var inst_30918 = inst_30926;
var state_30953__$1 = (function (){var statearr_30974 = state_30953;
(statearr_30974[(7)] = inst_30918);

(statearr_30974[(8)] = inst_30917__$1);

return statearr_30974;
})();
var statearr_30975_31001 = state_30953__$1;
(statearr_30975_31001[(2)] = null);

(statearr_30975_31001[(1)] = (2));


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
});})(c__19667__auto___30987,out))
;
return ((function (switch__19601__auto__,c__19667__auto___30987,out){
return (function() {
var cljs$core$async$state_machine__19602__auto__ = null;
var cljs$core$async$state_machine__19602__auto____0 = (function (){
var statearr_30979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30979[(0)] = cljs$core$async$state_machine__19602__auto__);

(statearr_30979[(1)] = (1));

return statearr_30979;
});
var cljs$core$async$state_machine__19602__auto____1 = (function (state_30953){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_30953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e30980){if((e30980 instanceof Object)){
var ex__19605__auto__ = e30980;
var statearr_30981_31002 = state_30953;
(statearr_30981_31002[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31003 = state_30953;
state_30953 = G__31003;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$state_machine__19602__auto__ = function(state_30953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19602__auto____1.call(this,state_30953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19602__auto____0;
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19602__auto____1;
return cljs$core$async$state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___30987,out))
})();
var state__19669__auto__ = (function (){var statearr_30982 = f__19668__auto__.call(null);
(statearr_30982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___30987);

return statearr_30982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___30987,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args31004 = [];
var len__17522__auto___31078 = arguments.length;
var i__17523__auto___31079 = (0);
while(true){
if((i__17523__auto___31079 < len__17522__auto___31078)){
args31004.push((arguments[i__17523__auto___31079]));

var G__31080 = (i__17523__auto___31079 + (1));
i__17523__auto___31079 = G__31080;
continue;
} else {
}
break;
}

var G__31006 = args31004.length;
switch (G__31006) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31004.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19667__auto___31082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19667__auto___31082,out){
return (function (){
var f__19668__auto__ = (function (){var switch__19601__auto__ = ((function (c__19667__auto___31082,out){
return (function (state_31048){
var state_val_31049 = (state_31048[(1)]);
if((state_val_31049 === (7))){
var inst_31044 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
var statearr_31050_31083 = state_31048__$1;
(statearr_31050_31083[(2)] = inst_31044);

(statearr_31050_31083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (1))){
var inst_31007 = [];
var inst_31008 = inst_31007;
var inst_31009 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31048__$1 = (function (){var statearr_31051 = state_31048;
(statearr_31051[(7)] = inst_31008);

(statearr_31051[(8)] = inst_31009);

return statearr_31051;
})();
var statearr_31052_31084 = state_31048__$1;
(statearr_31052_31084[(2)] = null);

(statearr_31052_31084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (4))){
var inst_31012 = (state_31048[(9)]);
var inst_31012__$1 = (state_31048[(2)]);
var inst_31013 = (inst_31012__$1 == null);
var inst_31014 = cljs.core.not.call(null,inst_31013);
var state_31048__$1 = (function (){var statearr_31053 = state_31048;
(statearr_31053[(9)] = inst_31012__$1);

return statearr_31053;
})();
if(inst_31014){
var statearr_31054_31085 = state_31048__$1;
(statearr_31054_31085[(1)] = (5));

} else {
var statearr_31055_31086 = state_31048__$1;
(statearr_31055_31086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (15))){
var inst_31038 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
var statearr_31056_31087 = state_31048__$1;
(statearr_31056_31087[(2)] = inst_31038);

(statearr_31056_31087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (13))){
var state_31048__$1 = state_31048;
var statearr_31057_31088 = state_31048__$1;
(statearr_31057_31088[(2)] = null);

(statearr_31057_31088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (6))){
var inst_31008 = (state_31048[(7)]);
var inst_31033 = inst_31008.length;
var inst_31034 = (inst_31033 > (0));
var state_31048__$1 = state_31048;
if(cljs.core.truth_(inst_31034)){
var statearr_31058_31089 = state_31048__$1;
(statearr_31058_31089[(1)] = (12));

} else {
var statearr_31059_31090 = state_31048__$1;
(statearr_31059_31090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (3))){
var inst_31046 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31048__$1,inst_31046);
} else {
if((state_val_31049 === (12))){
var inst_31008 = (state_31048[(7)]);
var inst_31036 = cljs.core.vec.call(null,inst_31008);
var state_31048__$1 = state_31048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31048__$1,(15),out,inst_31036);
} else {
if((state_val_31049 === (2))){
var state_31048__$1 = state_31048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31048__$1,(4),ch);
} else {
if((state_val_31049 === (11))){
var inst_31016 = (state_31048[(10)]);
var inst_31012 = (state_31048[(9)]);
var inst_31026 = (state_31048[(2)]);
var inst_31027 = [];
var inst_31028 = inst_31027.push(inst_31012);
var inst_31008 = inst_31027;
var inst_31009 = inst_31016;
var state_31048__$1 = (function (){var statearr_31060 = state_31048;
(statearr_31060[(11)] = inst_31026);

(statearr_31060[(12)] = inst_31028);

(statearr_31060[(7)] = inst_31008);

(statearr_31060[(8)] = inst_31009);

return statearr_31060;
})();
var statearr_31061_31091 = state_31048__$1;
(statearr_31061_31091[(2)] = null);

(statearr_31061_31091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (9))){
var inst_31008 = (state_31048[(7)]);
var inst_31024 = cljs.core.vec.call(null,inst_31008);
var state_31048__$1 = state_31048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31048__$1,(11),out,inst_31024);
} else {
if((state_val_31049 === (5))){
var inst_31016 = (state_31048[(10)]);
var inst_31012 = (state_31048[(9)]);
var inst_31009 = (state_31048[(8)]);
var inst_31016__$1 = f.call(null,inst_31012);
var inst_31017 = cljs.core._EQ_.call(null,inst_31016__$1,inst_31009);
var inst_31018 = cljs.core.keyword_identical_QMARK_.call(null,inst_31009,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31019 = (inst_31017) || (inst_31018);
var state_31048__$1 = (function (){var statearr_31062 = state_31048;
(statearr_31062[(10)] = inst_31016__$1);

return statearr_31062;
})();
if(cljs.core.truth_(inst_31019)){
var statearr_31063_31092 = state_31048__$1;
(statearr_31063_31092[(1)] = (8));

} else {
var statearr_31064_31093 = state_31048__$1;
(statearr_31064_31093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (14))){
var inst_31041 = (state_31048[(2)]);
var inst_31042 = cljs.core.async.close_BANG_.call(null,out);
var state_31048__$1 = (function (){var statearr_31066 = state_31048;
(statearr_31066[(13)] = inst_31041);

return statearr_31066;
})();
var statearr_31067_31094 = state_31048__$1;
(statearr_31067_31094[(2)] = inst_31042);

(statearr_31067_31094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (10))){
var inst_31031 = (state_31048[(2)]);
var state_31048__$1 = state_31048;
var statearr_31068_31095 = state_31048__$1;
(statearr_31068_31095[(2)] = inst_31031);

(statearr_31068_31095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31049 === (8))){
var inst_31008 = (state_31048[(7)]);
var inst_31016 = (state_31048[(10)]);
var inst_31012 = (state_31048[(9)]);
var inst_31021 = inst_31008.push(inst_31012);
var tmp31065 = inst_31008;
var inst_31008__$1 = tmp31065;
var inst_31009 = inst_31016;
var state_31048__$1 = (function (){var statearr_31069 = state_31048;
(statearr_31069[(14)] = inst_31021);

(statearr_31069[(7)] = inst_31008__$1);

(statearr_31069[(8)] = inst_31009);

return statearr_31069;
})();
var statearr_31070_31096 = state_31048__$1;
(statearr_31070_31096[(2)] = null);

(statearr_31070_31096[(1)] = (2));


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
});})(c__19667__auto___31082,out))
;
return ((function (switch__19601__auto__,c__19667__auto___31082,out){
return (function() {
var cljs$core$async$state_machine__19602__auto__ = null;
var cljs$core$async$state_machine__19602__auto____0 = (function (){
var statearr_31074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31074[(0)] = cljs$core$async$state_machine__19602__auto__);

(statearr_31074[(1)] = (1));

return statearr_31074;
});
var cljs$core$async$state_machine__19602__auto____1 = (function (state_31048){
while(true){
var ret_value__19603__auto__ = (function (){try{while(true){
var result__19604__auto__ = switch__19601__auto__.call(null,state_31048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19604__auto__;
}
break;
}
}catch (e31075){if((e31075 instanceof Object)){
var ex__19605__auto__ = e31075;
var statearr_31076_31097 = state_31048;
(statearr_31076_31097[(5)] = ex__19605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31098 = state_31048;
state_31048 = G__31098;
continue;
} else {
return ret_value__19603__auto__;
}
break;
}
});
cljs$core$async$state_machine__19602__auto__ = function(state_31048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19602__auto____1.call(this,state_31048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19602__auto____0;
cljs$core$async$state_machine__19602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19602__auto____1;
return cljs$core$async$state_machine__19602__auto__;
})()
;})(switch__19601__auto__,c__19667__auto___31082,out))
})();
var state__19669__auto__ = (function (){var statearr_31077 = f__19668__auto__.call(null);
(statearr_31077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19667__auto___31082);

return statearr_31077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19669__auto__);
});})(c__19667__auto___31082,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440745227681