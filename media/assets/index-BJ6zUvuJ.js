(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const r of u)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(u){const r={};return u.integrity&&(r.integrity=u.integrity),u.referrerPolicy&&(r.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?r.credentials="include":u.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(u){if(u.ep)return;u.ep=!0;const r=s(u);fetch(u.href,r)}})();function Xm(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var Wr={exports:{}},ja={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function Qm(){if(_p)return ja;_p=1;var d=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(o,u,r){var h=null;if(r!==void 0&&(h=""+r),u.key!==void 0&&(h=""+u.key),"key"in u){r={};for(var v in u)v!=="key"&&(r[v]=u[v])}else r=u;return u=r.ref,{$$typeof:d,type:o,key:h,ref:u!==void 0?u:null,props:r}}return ja.Fragment=n,ja.jsx=s,ja.jsxs=s,ja}var yp;function Zm(){return yp||(yp=1,Wr.exports=Qm()),Wr.exports}var Qe=Zm(),eu={exports:{}},F={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function Km(){if(xp)return F;xp=1;var d=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),r=Symbol.for("react.consumer"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),$=Symbol.iterator;function N(m){return m===null||typeof m!="object"?null:(m=$&&m[$]||m["@@iterator"],typeof m=="function"?m:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,J={};function ve(m,M,q){this.props=m,this.context=M,this.refs=J,this.updater=q||H}ve.prototype.isReactComponent={},ve.prototype.setState=function(m,M){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,M,"setState")},ve.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function et(){}et.prototype=ve.prototype;function Ot(m,M,q){this.props=m,this.context=M,this.refs=J,this.updater=q||H}var Ue=Ot.prototype=new et;Ue.constructor=Ot,k(Ue,ve.prototype),Ue.isPureReactComponent=!0;var wt=Array.isArray,ae={H:null,A:null,T:null,S:null,V:null},ft=Object.prototype.hasOwnProperty;function ht(m,M,q,V,Y,de){return q=de.ref,{$$typeof:d,type:m,key:M,ref:q!==void 0?q:null,props:de}}function pt(m,M){return ht(m.type,M,void 0,void 0,void 0,m.props)}function Ht(m){return typeof m=="object"&&m!==null&&m.$$typeof===d}function Ki(m){var M={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(q){return M[q]})}var bl=/\/+/g;function st(m,M){return typeof m=="object"&&m!==null&&m.key!=null?Ki(""+m.key):M.toString(36)}function pi(){}function vi(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(pi,pi):(m.status="pending",m.then(function(M){m.status==="pending"&&(m.status="fulfilled",m.value=M)},function(M){m.status==="pending"&&(m.status="rejected",m.reason=M)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function ot(m,M,q,V,Y){var de=typeof m;(de==="undefined"||de==="boolean")&&(m=null);var I=!1;if(m===null)I=!0;else switch(de){case"bigint":case"string":case"number":I=!0;break;case"object":switch(m.$$typeof){case d:case n:I=!0;break;case D:return I=m._init,ot(I(m._payload),M,q,V,Y)}}if(I)return Y=Y(m),I=V===""?"."+st(m,0):V,wt(Y)?(q="",I!=null&&(q=I.replace(bl,"$&/")+"/"),ot(Y,M,q,"",function(Vl){return Vl})):Y!=null&&(Ht(Y)&&(Y=pt(Y,q+(Y.key==null||m&&m.key===Y.key?"":(""+Y.key).replace(bl,"$&/")+"/")+I)),M.push(Y)),1;I=0;var Tt=V===""?".":V+":";if(wt(m))for(var ze=0;ze<m.length;ze++)V=m[ze],de=Tt+st(V,ze),I+=ot(V,M,q,de,Y);else if(ze=N(m),typeof ze=="function")for(m=ze.call(m),ze=0;!(V=m.next()).done;)V=V.value,de=Tt+st(V,ze++),I+=ot(V,M,q,de,Y);else if(de==="object"){if(typeof m.then=="function")return ot(vi(m),M,q,V,Y);throw M=String(m),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return I}function T(m,M,q){if(m==null)return m;var V=[],Y=0;return ot(m,V,"","",function(de){return M.call(q,de,Y++)}),V}function U(m){if(m._status===-1){var M=m._result;M=M(),M.then(function(q){(m._status===0||m._status===-1)&&(m._status=1,m._result=q)},function(q){(m._status===0||m._status===-1)&&(m._status=2,m._result=q)}),m._status===-1&&(m._status=0,m._result=M)}if(m._status===1)return m._result.default;throw m._result}var Z=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function Ce(){}return F.Children={map:T,forEach:function(m,M,q){T(m,function(){M.apply(this,arguments)},q)},count:function(m){var M=0;return T(m,function(){M++}),M},toArray:function(m){return T(m,function(M){return M})||[]},only:function(m){if(!Ht(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},F.Component=ve,F.Fragment=s,F.Profiler=u,F.PureComponent=Ot,F.StrictMode=o,F.Suspense=x,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,F.__COMPILER_RUNTIME={__proto__:null,c:function(m){return ae.H.useMemoCache(m)}},F.cache=function(m){return function(){return m.apply(null,arguments)}},F.cloneElement=function(m,M,q){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var V=k({},m.props),Y=m.key,de=void 0;if(M!=null)for(I in M.ref!==void 0&&(de=void 0),M.key!==void 0&&(Y=""+M.key),M)!ft.call(M,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&M.ref===void 0||(V[I]=M[I]);var I=arguments.length-2;if(I===1)V.children=q;else if(1<I){for(var Tt=Array(I),ze=0;ze<I;ze++)Tt[ze]=arguments[ze+2];V.children=Tt}return ht(m.type,Y,void 0,void 0,de,V)},F.createContext=function(m){return m={$$typeof:h,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:r,_context:m},m},F.createElement=function(m,M,q){var V,Y={},de=null;if(M!=null)for(V in M.key!==void 0&&(de=""+M.key),M)ft.call(M,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(Y[V]=M[V]);var I=arguments.length-2;if(I===1)Y.children=q;else if(1<I){for(var Tt=Array(I),ze=0;ze<I;ze++)Tt[ze]=arguments[ze+2];Y.children=Tt}if(m&&m.defaultProps)for(V in I=m.defaultProps,I)Y[V]===void 0&&(Y[V]=I[V]);return ht(m,de,void 0,void 0,null,Y)},F.createRef=function(){return{current:null}},F.forwardRef=function(m){return{$$typeof:v,render:m}},F.isValidElement=Ht,F.lazy=function(m){return{$$typeof:D,_payload:{_status:-1,_result:m},_init:U}},F.memo=function(m,M){return{$$typeof:S,type:m,compare:M===void 0?null:M}},F.startTransition=function(m){var M=ae.T,q={};ae.T=q;try{var V=m(),Y=ae.S;Y!==null&&Y(q,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(Ce,Z)}catch(de){Z(de)}finally{ae.T=M}},F.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},F.use=function(m){return ae.H.use(m)},F.useActionState=function(m,M,q){return ae.H.useActionState(m,M,q)},F.useCallback=function(m,M){return ae.H.useCallback(m,M)},F.useContext=function(m){return ae.H.useContext(m)},F.useDebugValue=function(){},F.useDeferredValue=function(m,M){return ae.H.useDeferredValue(m,M)},F.useEffect=function(m,M,q){var V=ae.H;if(typeof q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(m,M)},F.useId=function(){return ae.H.useId()},F.useImperativeHandle=function(m,M,q){return ae.H.useImperativeHandle(m,M,q)},F.useInsertionEffect=function(m,M){return ae.H.useInsertionEffect(m,M)},F.useLayoutEffect=function(m,M){return ae.H.useLayoutEffect(m,M)},F.useMemo=function(m,M){return ae.H.useMemo(m,M)},F.useOptimistic=function(m,M){return ae.H.useOptimistic(m,M)},F.useReducer=function(m,M,q){return ae.H.useReducer(m,M,q)},F.useRef=function(m){return ae.H.useRef(m)},F.useState=function(m){return ae.H.useState(m)},F.useSyncExternalStore=function(m,M,q){return ae.H.useSyncExternalStore(m,M,q)},F.useTransition=function(){return ae.H.useTransition()},F.version="19.1.0",F}var Sp;function pu(){return Sp||(Sp=1,eu.exports=Km()),eu.exports}var ll=pu();const ce=Xm(ll);var tu={exports:{}},Ya={},lu={exports:{}},iu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function Im(){return Ep||(Ep=1,function(d){function n(T,U){var Z=T.length;T.push(U);e:for(;0<Z;){var Ce=Z-1>>>1,m=T[Ce];if(0<u(m,U))T[Ce]=U,T[Z]=m,Z=Ce;else break e}}function s(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var U=T[0],Z=T.pop();if(Z!==U){T[0]=Z;e:for(var Ce=0,m=T.length,M=m>>>1;Ce<M;){var q=2*(Ce+1)-1,V=T[q],Y=q+1,de=T[Y];if(0>u(V,Z))Y<m&&0>u(de,V)?(T[Ce]=de,T[Y]=Z,Ce=Y):(T[Ce]=V,T[q]=Z,Ce=q);else if(Y<m&&0>u(de,Z))T[Ce]=de,T[Y]=Z,Ce=Y;else break e}}return U}function u(T,U){var Z=T.sortIndex-U.sortIndex;return Z!==0?Z:T.id-U.id}if(d.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;d.unstable_now=function(){return r.now()}}else{var h=Date,v=h.now();d.unstable_now=function(){return h.now()-v}}var x=[],S=[],D=1,$=null,N=3,H=!1,k=!1,J=!1,ve=!1,et=typeof setTimeout=="function"?setTimeout:null,Ot=typeof clearTimeout=="function"?clearTimeout:null,Ue=typeof setImmediate<"u"?setImmediate:null;function wt(T){for(var U=s(S);U!==null;){if(U.callback===null)o(S);else if(U.startTime<=T)o(S),U.sortIndex=U.expirationTime,n(x,U);else break;U=s(S)}}function ae(T){if(J=!1,wt(T),!k)if(s(x)!==null)k=!0,ft||(ft=!0,st());else{var U=s(S);U!==null&&ot(ae,U.startTime-T)}}var ft=!1,ht=-1,pt=5,Ht=-1;function Ki(){return ve?!0:!(d.unstable_now()-Ht<pt)}function bl(){if(ve=!1,ft){var T=d.unstable_now();Ht=T;var U=!0;try{e:{k=!1,J&&(J=!1,Ot(ht),ht=-1),H=!0;var Z=N;try{t:{for(wt(T),$=s(x);$!==null&&!($.expirationTime>T&&Ki());){var Ce=$.callback;if(typeof Ce=="function"){$.callback=null,N=$.priorityLevel;var m=Ce($.expirationTime<=T);if(T=d.unstable_now(),typeof m=="function"){$.callback=m,wt(T),U=!0;break t}$===s(x)&&o(x),wt(T)}else o(x);$=s(x)}if($!==null)U=!0;else{var M=s(S);M!==null&&ot(ae,M.startTime-T),U=!1}}break e}finally{$=null,N=Z,H=!1}U=void 0}}finally{U?st():ft=!1}}}var st;if(typeof Ue=="function")st=function(){Ue(bl)};else if(typeof MessageChannel<"u"){var pi=new MessageChannel,vi=pi.port2;pi.port1.onmessage=bl,st=function(){vi.postMessage(null)}}else st=function(){et(bl,0)};function ot(T,U){ht=et(function(){T(d.unstable_now())},U)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(T){T.callback=null},d.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pt=0<T?Math.floor(1e3/T):5},d.unstable_getCurrentPriorityLevel=function(){return N},d.unstable_next=function(T){switch(N){case 1:case 2:case 3:var U=3;break;default:U=N}var Z=N;N=U;try{return T()}finally{N=Z}},d.unstable_requestPaint=function(){ve=!0},d.unstable_runWithPriority=function(T,U){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var Z=N;N=T;try{return U()}finally{N=Z}},d.unstable_scheduleCallback=function(T,U,Z){var Ce=d.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Ce+Z:Ce):Z=Ce,T){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=Z+m,T={id:D++,callback:U,priorityLevel:T,startTime:Z,expirationTime:m,sortIndex:-1},Z>Ce?(T.sortIndex=Z,n(S,T),s(x)===null&&T===s(S)&&(J?(Ot(ht),ht=-1):J=!0,ot(ae,Z-Ce))):(T.sortIndex=m,n(x,T),k||H||(k=!0,ft||(ft=!0,st()))),T},d.unstable_shouldYield=Ki,d.unstable_wrapCallback=function(T){var U=N;return function(){var Z=N;N=U;try{return T.apply(this,arguments)}finally{N=Z}}}}(iu)),iu}var Cp;function Jm(){return Cp||(Cp=1,lu.exports=Im()),lu.exports}var nu={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function Fm(){if(Ap)return ut;Ap=1;var d=pu();function n(x){var S="https://react.dev/errors/"+x;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)S+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+x+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(n(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal");function r(x,S,D){var $=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:$==null?null:""+$,children:x,containerInfo:S,implementation:D}}var h=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(x,S){if(x==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ut.createPortal=function(x,S){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(n(299));return r(x,S,null,D)},ut.flushSync=function(x){var S=h.T,D=o.p;try{if(h.T=null,o.p=2,x)return x()}finally{h.T=S,o.p=D,o.d.f()}},ut.preconnect=function(x,S){typeof x=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,o.d.C(x,S))},ut.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},ut.preinit=function(x,S){if(typeof x=="string"&&S&&typeof S.as=="string"){var D=S.as,$=v(D,S.crossOrigin),N=typeof S.integrity=="string"?S.integrity:void 0,H=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;D==="style"?o.d.S(x,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:$,integrity:N,fetchPriority:H}):D==="script"&&o.d.X(x,{crossOrigin:$,integrity:N,fetchPriority:H,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},ut.preinitModule=function(x,S){if(typeof x=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var D=v(S.as,S.crossOrigin);o.d.M(x,{crossOrigin:D,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&o.d.M(x)},ut.preload=function(x,S){if(typeof x=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var D=S.as,$=v(D,S.crossOrigin);o.d.L(x,D,{crossOrigin:$,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},ut.preloadModule=function(x,S){if(typeof x=="string")if(S){var D=v(S.as,S.crossOrigin);o.d.m(x,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:D,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else o.d.m(x)},ut.requestFormReset=function(x){o.d.r(x)},ut.unstable_batchedUpdates=function(x,S){return x(S)},ut.useFormState=function(x,S,D){return h.H.useFormState(x,S,D)},ut.useFormStatus=function(){return h.H.useHostTransitionStatus()},ut.version="19.1.0",ut}var Op;function Pm(){if(Op)return nu.exports;Op=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(n){console.error(n)}}return d(),nu.exports=Fm(),nu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function Wm(){if(wp)return Ya;wp=1;var d=Jm(),n=pu(),s=Pm();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function r(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(r(e)!==e)throw Error(o(188))}function x(e){var t=e.alternate;if(!t){if(t=r(e),t===null)throw Error(o(188));return t!==e?null:e}for(var l=e,i=t;;){var a=l.return;if(a===null)break;var c=a.alternate;if(c===null){if(i=a.return,i!==null){l=i;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===l)return v(a),e;if(c===i)return v(a),t;c=c.sibling}throw Error(o(188))}if(l.return!==i.return)l=a,i=c;else{for(var f=!1,p=a.child;p;){if(p===l){f=!0,l=a,i=c;break}if(p===i){f=!0,i=a,l=c;break}p=p.sibling}if(!f){for(p=c.child;p;){if(p===l){f=!0,l=c,i=a;break}if(p===i){f=!0,i=c,l=a;break}p=p.sibling}if(!f)throw Error(o(189))}}if(l.alternate!==i)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var D=Object.assign,$=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),et=Symbol.for("react.provider"),Ot=Symbol.for("react.consumer"),Ue=Symbol.for("react.context"),wt=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),ht=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Ht=Symbol.for("react.activity"),Ki=Symbol.for("react.memo_cache_sentinel"),bl=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=bl&&e[bl]||e["@@iterator"],typeof e=="function"?e:null)}var pi=Symbol.for("react.client.reference");function vi(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pi?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case ve:return"Profiler";case J:return"StrictMode";case ae:return"Suspense";case ft:return"SuspenseList";case Ht:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case Ue:return(e.displayName||"Context")+".Provider";case Ot:return(e._context.displayName||"Context")+".Consumer";case wt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ht:return t=e.displayName||null,t!==null?t:vi(e.type)||"Memo";case pt:t=e._payload,e=e._init;try{return vi(e(t))}catch{}}return null}var ot=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Ce=[],m=-1;function M(e){return{current:e}}function q(e){0>m||(e.current=Ce[m],Ce[m]=null,m--)}function V(e,t){m++,Ce[m]=e.current,e.current=t}var Y=M(null),de=M(null),I=M(null),Tt=M(null);function ze(e,t){switch(V(I,t),V(de,e),V(Y,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zh(t),e=Kh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Y),V(Y,e)}function Vl(){q(Y),q(de),q(I)}function Uo(e){e.memoizedState!==null&&V(Tt,e);var t=Y.current,l=Kh(t,e.type);t!==l&&(V(de,e),V(Y,l))}function cs(e){de.current===e&&(q(Y),q(de)),Tt.current===e&&(q(Tt),Na._currentValue=Z)}var Ho=Object.prototype.hasOwnProperty,qo=d.unstable_scheduleCallback,Lo=d.unstable_cancelCallback,Ev=d.unstable_shouldYield,Cv=d.unstable_requestPaint,ol=d.unstable_now,Av=d.unstable_getCurrentPriorityLevel,Ou=d.unstable_ImmediatePriority,wu=d.unstable_UserBlockingPriority,rs=d.unstable_NormalPriority,Ov=d.unstable_LowPriority,Tu=d.unstable_IdlePriority,wv=d.log,Tv=d.unstable_setDisableYieldValue,Xn=null,Rt=null;function Nl(e){if(typeof wv=="function"&&Tv(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Xn,e)}catch{}}var zt=Math.clz32?Math.clz32:Dv,Rv=Math.log,zv=Math.LN2;function Dv(e){return e>>>=0,e===0?32:31-(Rv(e)/zv|0)|0}var us=256,ds=4194304;function bi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fs(e,t,l){var i=e.pendingLanes;if(i===0)return 0;var a=0,c=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var p=i&134217727;return p!==0?(i=p&~c,i!==0?a=bi(i):(f&=p,f!==0?a=bi(f):l||(l=p&~e,l!==0&&(a=bi(l))))):(p=i&~c,p!==0?a=bi(p):f!==0?a=bi(f):l||(l=i&~e,l!==0&&(a=bi(l)))),a===0?0:t!==0&&t!==a&&(t&c)===0&&(c=a&-a,l=t&-t,c>=l||c===32&&(l&4194048)!==0)?t:a}function Qn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Mv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ru(){var e=us;return us<<=1,(us&4194048)===0&&(us=256),e}function zu(){var e=ds;return ds<<=1,(ds&62914560)===0&&(ds=4194304),e}function jo(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Zn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bv(e,t,l,i,a,c){var f=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var p=e.entanglements,b=e.expirationTimes,C=e.hiddenUpdates;for(l=f&~l;0<l;){var w=31-zt(l),z=1<<w;p[w]=0,b[w]=-1;var A=C[w];if(A!==null)for(C[w]=null,w=0;w<A.length;w++){var O=A[w];O!==null&&(O.lane&=-536870913)}l&=~z}i!==0&&Du(e,i,0),c!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=c&~(f&~t))}function Du(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-zt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|l&4194090}function Mu(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var i=31-zt(l),a=1<<i;a&t|e[i]&t&&(e[i]|=t),l&=~a}}function Yo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Go(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bu(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:hp(e.type))}function $v(e,t){var l=U.p;try{return U.p=e,t()}finally{U.p=l}}var Ul=Math.random().toString(36).slice(2),ct="__reactFiber$"+Ul,_t="__reactProps$"+Ul,Ii="__reactContainer$"+Ul,Xo="__reactEvents$"+Ul,kv="__reactListeners$"+Ul,Vv="__reactHandles$"+Ul,$u="__reactResources$"+Ul,Kn="__reactMarker$"+Ul;function Qo(e){delete e[ct],delete e[_t],delete e[Xo],delete e[kv],delete e[Vv]}function Ji(e){var t=e[ct];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Ii]||l[ct]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Ph(e);e!==null;){if(l=e[ct])return l;e=Ph(e)}return t}e=l,l=e.parentNode}return null}function Fi(e){if(e=e[ct]||e[Ii]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function In(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Pi(e){var t=e[$u];return t||(t=e[$u]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[Kn]=!0}var ku=new Set,Vu={};function mi(e,t){Wi(e,t),Wi(e+"Capture",t)}function Wi(e,t){for(Vu[e]=t,e=0;e<t.length;e++)ku.add(t[e])}var Nv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nu={},Uu={};function Uv(e){return Ho.call(Uu,e)?!0:Ho.call(Nu,e)?!1:Nv.test(e)?Uu[e]=!0:(Nu[e]=!0,!1)}function hs(e,t,l){if(Uv(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function ps(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function ml(e,t,l,i){if(i===null)e.removeAttribute(l);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+i)}}var Zo,Hu;function en(e){if(Zo===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Zo=t&&t[1]||"",Hu=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zo+e+Hu}var Ko=!1;function Io(e,t){if(!e||Ko)return"";Ko=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(O){var A=O}Reflect.construct(e,[],z)}else{try{z.call()}catch(O){A=O}e.call(z.prototype)}}else{try{throw Error()}catch(O){A=O}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(O){if(O&&A&&typeof O.stack=="string")return[O.stack,A.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),f=c[0],p=c[1];if(f&&p){var b=f.split(`
`),C=p.split(`
`);for(a=i=0;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;for(;a<C.length&&!C[a].includes("DetermineComponentFrameRoot");)a++;if(i===b.length||a===C.length)for(i=b.length-1,a=C.length-1;1<=i&&0<=a&&b[i]!==C[a];)a--;for(;1<=i&&0<=a;i--,a--)if(b[i]!==C[a]){if(i!==1||a!==1)do if(i--,a--,0>a||b[i]!==C[a]){var w=`
`+b[i].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=i&&0<=a);break}}}finally{Ko=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?en(l):""}function Hv(e){switch(e.tag){case 26:case 27:case 5:return en(e.type);case 16:return en("Lazy");case 13:return en("Suspense");case 19:return en("SuspenseList");case 0:case 15:return Io(e.type,!1);case 11:return Io(e.type.render,!1);case 1:return Io(e.type,!0);case 31:return en("Activity");default:return""}}function qu(e){try{var t="";do t+=Hv(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qv(e){var t=Lu(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,c=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(f){i=""+f,c.call(this,f)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(f){i=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vs(e){e._valueTracker||(e._valueTracker=qv(e))}function ju(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),i="";return e&&(i=Lu(e)?e.checked?"true":"false":e.value),e=i,e!==l?(t.setValue(e),!0):!1}function bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Lv=/[\n"\\]/g;function Lt(e){return e.replace(Lv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jo(e,t,l,i,a,c,f,p){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Fo(e,f,qt(t)):l!=null?Fo(e,f,qt(l)):i!=null&&e.removeAttribute("value"),a==null&&c!=null&&(e.defaultChecked=!!c),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+qt(p):e.removeAttribute("name")}function Yu(e,t,l,i,a,c,f,p){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||l!=null){if(!(c!=="submit"&&c!=="reset"||t!=null))return;l=l!=null?""+qt(l):"",t=t!=null?""+qt(t):l,p||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=p?e.checked:!!i,e.defaultChecked=!!i,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Fo(e,t,l){t==="number"&&bs(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function tn(e,t,l,i){if(e=e.options,t){t={};for(var a=0;a<l.length;a++)t["$"+l[a]]=!0;for(l=0;l<e.length;l++)a=t.hasOwnProperty("$"+e[l].value),e[l].selected!==a&&(e[l].selected=a),a&&i&&(e[l].defaultSelected=!0)}else{for(l=""+qt(l),t=null,a=0;a<e.length;a++){if(e[a].value===l){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Gu(e,t,l){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+qt(l):""}function Xu(e,t,l,i){if(t==null){if(i!=null){if(l!=null)throw Error(o(92));if(ot(i)){if(1<i.length)throw Error(o(93));i=i[0]}l=i}l==null&&(l=""),t=l}l=qt(t),e.defaultValue=l,i=e.textContent,i===l&&i!==""&&i!==null&&(e.value=i)}function ln(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var jv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qu(e,t,l){var i=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,l):typeof l!="number"||l===0||jv.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Zu(e,t,l){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,l!=null){for(var i in l)!l.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&l[a]!==i&&Qu(e,a,i)}else for(var c in t)t.hasOwnProperty(c)&&Qu(e,c,t[c])}function Po(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ms(e){return Gv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Wo=null;function ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nn=null,an=null;function Ku(e){var t=Fi(e);if(t&&(e=t.stateNode)){var l=e[_t]||null;e:switch(e=t.stateNode,t.type){case"input":if(Jo(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Lt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var i=l[t];if(i!==e&&i.form===e.form){var a=i[_t]||null;if(!a)throw Error(o(90));Jo(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<l.length;t++)i=l[t],i.form===e.form&&ju(i)}break e;case"textarea":Gu(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&tn(e,!!l.multiple,t,!1)}}}var tc=!1;function Iu(e,t,l){if(tc)return e(t,l);tc=!0;try{var i=e(t);return i}finally{if(tc=!1,(nn!==null||an!==null)&&(lo(),nn&&(t=nn,e=an,an=nn=null,Ku(t),e)))for(t=0;t<e.length;t++)Ku(e[t])}}function Jn(e,t){var l=e.stateNode;if(l===null)return null;var i=l[_t]||null;if(i===null)return null;l=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(o(231,t,typeof l));return l}var gl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lc=!1;if(gl)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){lc=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{lc=!1}var Hl=null,ic=null,gs=null;function Ju(){if(gs)return gs;var e,t=ic,l=t.length,i,a="value"in Hl?Hl.value:Hl.textContent,c=a.length;for(e=0;e<l&&t[e]===a[e];e++);var f=l-e;for(i=1;i<=f&&t[l-i]===a[c-i];i++);return gs=a.slice(e,1<i?1-i:void 0)}function _s(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ys(){return!0}function Fu(){return!1}function yt(e){function t(l,i,a,c,f){this._reactName=l,this._targetInst=a,this.type=i,this.nativeEvent=c,this.target=f,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(l=e[p],this[p]=l?l(c):c[p]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ys:Fu,this.isPropagationStopped=Fu,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ys)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ys)},persist:function(){},isPersistent:ys}),t}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=yt(gi),Pn=D({},gi,{view:0,detail:0}),Xv=yt(Pn),nc,ac,Wn,Ss=D({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(nc=e.screenX-Wn.screenX,ac=e.screenY-Wn.screenY):ac=nc=0,Wn=e),nc)},movementY:function(e){return"movementY"in e?e.movementY:ac}}),Pu=yt(Ss),Qv=D({},Ss,{dataTransfer:0}),Zv=yt(Qv),Kv=D({},Pn,{relatedTarget:0}),sc=yt(Kv),Iv=D({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=yt(Iv),Fv=D({},gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pv=yt(Fv),Wv=D({},gi,{data:0}),Wu=yt(Wv),eb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ib(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lb[e])?!!t[e]:!1}function oc(){return ib}var nb=D({},Pn,{key:function(e){if(e.key){var t=eb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(e){return e.type==="keypress"?_s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ab=yt(nb),sb=D({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=yt(sb),ob=D({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),cb=yt(ob),rb=D({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),ub=yt(rb),db=D({},Ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fb=yt(db),hb=D({},gi,{newState:0,oldState:0}),pb=yt(hb),vb=[9,13,27,32],cc=gl&&"CompositionEvent"in window,ea=null;gl&&"documentMode"in document&&(ea=document.documentMode);var bb=gl&&"TextEvent"in window&&!ea,td=gl&&(!cc||ea&&8<ea&&11>=ea),ld=" ",id=!1;function nd(e,t){switch(e){case"keyup":return vb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function mb(e,t){switch(e){case"compositionend":return ad(t);case"keypress":return t.which!==32?null:(id=!0,ld);case"textInput":return e=t.data,e===ld&&id?null:e;default:return null}}function gb(e,t){if(sn)return e==="compositionend"||!cc&&nd(e,t)?(e=Ju(),gs=ic=Hl=null,sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return td&&t.locale!=="ko"?null:t.data;default:return null}}var _b={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_b[e.type]:t==="textarea"}function od(e,t,l,i){nn?an?an.push(i):an=[i]:nn=i,t=co(t,"onChange"),0<t.length&&(l=new xs("onChange","change",null,l,i),e.push({event:l,listeners:t}))}var ta=null,la=null;function yb(e){jh(e,0)}function Es(e){var t=In(e);if(ju(t))return e}function cd(e,t){if(e==="change")return t}var rd=!1;if(gl){var rc;if(gl){var uc="oninput"in document;if(!uc){var ud=document.createElement("div");ud.setAttribute("oninput","return;"),uc=typeof ud.oninput=="function"}rc=uc}else rc=!1;rd=rc&&(!document.documentMode||9<document.documentMode)}function dd(){ta&&(ta.detachEvent("onpropertychange",fd),la=ta=null)}function fd(e){if(e.propertyName==="value"&&Es(la)){var t=[];od(t,la,e,ec(e)),Iu(yb,t)}}function xb(e,t,l){e==="focusin"?(dd(),ta=t,la=l,ta.attachEvent("onpropertychange",fd)):e==="focusout"&&dd()}function Sb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Es(la)}function Eb(e,t){if(e==="click")return Es(t)}function Cb(e,t){if(e==="input"||e==="change")return Es(t)}function Ab(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:Ab;function ia(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),i=Object.keys(t);if(l.length!==i.length)return!1;for(i=0;i<l.length;i++){var a=l[i];if(!Ho.call(t,a)||!Dt(e[a],t[a]))return!1}return!0}function hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pd(e,t){var l=hd(e);e=0;for(var i;l;){if(l.nodeType===3){if(i=e+l.textContent.length,e<=t&&i>=t)return{node:l,offset:t-e};e=i}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=hd(l)}}function vd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=bs(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=bs(e.document)}return t}function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ob=gl&&"documentMode"in document&&11>=document.documentMode,on=null,fc=null,na=null,hc=!1;function md(e,t,l){var i=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hc||on==null||on!==bs(i)||(i=on,"selectionStart"in i&&dc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),na&&ia(na,i)||(na=i,i=co(fc,"onSelect"),0<i.length&&(t=new xs("onSelect","select",null,t,l),e.push({event:t,listeners:i}),t.target=on)))}function _i(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var cn={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionrun:_i("Transition","TransitionRun"),transitionstart:_i("Transition","TransitionStart"),transitioncancel:_i("Transition","TransitionCancel"),transitionend:_i("Transition","TransitionEnd")},pc={},gd={};gl&&(gd=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);function yi(e){if(pc[e])return pc[e];if(!cn[e])return e;var t=cn[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in gd)return pc[e]=t[l];return e}var _d=yi("animationend"),yd=yi("animationiteration"),xd=yi("animationstart"),wb=yi("transitionrun"),Tb=yi("transitionstart"),Rb=yi("transitioncancel"),Sd=yi("transitionend"),Ed=new Map,vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vc.push("scrollEnd");function Wt(e,t){Ed.set(e,t),mi(t,[e])}var Cd=new WeakMap;function jt(e,t){if(typeof e=="object"&&e!==null){var l=Cd.get(e);return l!==void 0?l:(t={value:e,source:t,stack:qu(t)},Cd.set(e,t),t)}return{value:e,source:t,stack:qu(t)}}var Yt=[],rn=0,bc=0;function Cs(){for(var e=rn,t=bc=rn=0;t<e;){var l=Yt[t];Yt[t++]=null;var i=Yt[t];Yt[t++]=null;var a=Yt[t];Yt[t++]=null;var c=Yt[t];if(Yt[t++]=null,i!==null&&a!==null){var f=i.pending;f===null?a.next=a:(a.next=f.next,f.next=a),i.pending=a}c!==0&&Ad(l,a,c)}}function As(e,t,l,i){Yt[rn++]=e,Yt[rn++]=t,Yt[rn++]=l,Yt[rn++]=i,bc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function mc(e,t,l,i){return As(e,t,l,i),Os(e)}function un(e,t){return As(e,null,null,t),Os(e)}function Ad(e,t,l){e.lanes|=l;var i=e.alternate;i!==null&&(i.lanes|=l);for(var a=!1,c=e.return;c!==null;)c.childLanes|=l,i=c.alternate,i!==null&&(i.childLanes|=l),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(a=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,a&&t!==null&&(a=31-zt(l),e=c.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=l|536870912),c):null}function Os(e){if(50<Ra)throw Ra=0,Er=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var dn={};function zb(e,t,l,i){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,l,i){return new zb(e,t,l,i)}function gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _l(e,t){var l=e.alternate;return l===null?(l=Mt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Od(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ws(e,t,l,i,a,c){var f=0;if(i=e,typeof e=="function")gc(e)&&(f=1);else if(typeof e=="string")f=Mm(e,l,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ht:return e=Mt(31,l,t,a),e.elementType=Ht,e.lanes=c,e;case k:return xi(l.children,a,c,t);case J:f=8,a|=24;break;case ve:return e=Mt(12,l,t,a|2),e.elementType=ve,e.lanes=c,e;case ae:return e=Mt(13,l,t,a),e.elementType=ae,e.lanes=c,e;case ft:return e=Mt(19,l,t,a),e.elementType=ft,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case et:case Ue:f=10;break e;case Ot:f=9;break e;case wt:f=11;break e;case ht:f=14;break e;case pt:f=16,i=null;break e}f=29,l=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Mt(f,l,t,a),t.elementType=e,t.type=i,t.lanes=c,t}function xi(e,t,l,i){return e=Mt(7,e,i,t),e.lanes=l,e}function _c(e,t,l){return e=Mt(6,e,null,t),e.lanes=l,e}function yc(e,t,l){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var fn=[],hn=0,Ts=null,Rs=0,Gt=[],Xt=0,Si=null,yl=1,xl="";function Ei(e,t){fn[hn++]=Rs,fn[hn++]=Ts,Ts=e,Rs=t}function wd(e,t,l){Gt[Xt++]=yl,Gt[Xt++]=xl,Gt[Xt++]=Si,Si=e;var i=yl;e=xl;var a=32-zt(i)-1;i&=~(1<<a),l+=1;var c=32-zt(t)+a;if(30<c){var f=a-a%5;c=(i&(1<<f)-1).toString(32),i>>=f,a-=f,yl=1<<32-zt(t)+a|l<<a|i,xl=c+e}else yl=1<<c|l<<a|i,xl=e}function xc(e){e.return!==null&&(Ei(e,1),wd(e,1,0))}function Sc(e){for(;e===Ts;)Ts=fn[--hn],fn[hn]=null,Rs=fn[--hn],fn[hn]=null;for(;e===Si;)Si=Gt[--Xt],Gt[Xt]=null,xl=Gt[--Xt],Gt[Xt]=null,yl=Gt[--Xt],Gt[Xt]=null}var vt=null,Ve=null,he=!1,Ci=null,cl=!1,Ec=Error(o(519));function Ai(e){var t=Error(o(418,""));throw oa(jt(t,e)),Ec}function Td(e){var t=e.stateNode,l=e.type,i=e.memoizedProps;switch(t[ct]=e,t[_t]=i,l){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(l=0;l<Da.length;l++)le(Da[l],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),Yu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),vs(t);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),Xu(t,i.value,i.defaultValue,i.children),vs(t)}l=i.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||i.suppressHydrationWarning===!0||Qh(t.textContent,l)?(i.popover!=null&&(le("beforetoggle",t),le("toggle",t)),i.onScroll!=null&&le("scroll",t),i.onScrollEnd!=null&&le("scrollend",t),i.onClick!=null&&(t.onclick=ro),t=!0):t=!1,t||Ai(e)}function Rd(e){for(vt=e.return;vt;)switch(vt.tag){case 5:case 13:cl=!1;return;case 27:case 3:cl=!0;return;default:vt=vt.return}}function aa(e){if(e!==vt)return!1;if(!he)return Rd(e),he=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Hr(e.type,e.memoizedProps)),l=!l),l&&Ve&&Ai(e),Rd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){Ve=tl(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}Ve=null}}else t===27?(t=Ve,ti(e.type)?(e=Yr,Yr=null,Ve=e):Ve=t):Ve=vt?tl(e.stateNode.nextSibling):null;return!0}function sa(){Ve=vt=null,he=!1}function zd(){var e=Ci;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),Ci=null),e}function oa(e){Ci===null?Ci=[e]:Ci.push(e)}var Cc=M(null),Oi=null,Sl=null;function ql(e,t,l){V(Cc,t._currentValue),t._currentValue=l}function El(e){e._currentValue=Cc.current,q(Cc)}function Ac(e,t,l){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===l)break;e=e.return}}function Oc(e,t,l,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var c=a.dependencies;if(c!==null){var f=a.child;c=c.firstContext;e:for(;c!==null;){var p=c;c=a;for(var b=0;b<t.length;b++)if(p.context===t[b]){c.lanes|=l,p=c.alternate,p!==null&&(p.lanes|=l),Ac(c.return,l,e),i||(f=null);break e}c=p.next}}else if(a.tag===18){if(f=a.return,f===null)throw Error(o(341));f.lanes|=l,c=f.alternate,c!==null&&(c.lanes|=l),Ac(f,l,e),f=null}else f=a.child;if(f!==null)f.return=a;else for(f=a;f!==null;){if(f===e){f=null;break}if(a=f.sibling,a!==null){a.return=f.return,f=a;break}f=f.return}a=f}}function ca(e,t,l,i){e=null;for(var a=t,c=!1;a!==null;){if(!c){if((a.flags&524288)!==0)c=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var f=a.alternate;if(f===null)throw Error(o(387));if(f=f.memoizedProps,f!==null){var p=a.type;Dt(a.pendingProps.value,f.value)||(e!==null?e.push(p):e=[p])}}else if(a===Tt.current){if(f=a.alternate,f===null)throw Error(o(387));f.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Na):e=[Na])}a=a.return}e!==null&&Oc(t,e,l,i),t.flags|=262144}function zs(e){for(e=e.firstContext;e!==null;){if(!Dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wi(e){Oi=e,Sl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return Dd(Oi,e)}function Ds(e,t){return Oi===null&&wi(e),Dd(e,t)}function Dd(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Sl===null){if(e===null)throw Error(o(308));Sl=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sl=Sl.next=t;return l}var Db=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Mb=d.unstable_scheduleCallback,Bb=d.unstable_NormalPriority,Ge={$$typeof:Ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wc(){return{controller:new Db,data:new Map,refCount:0}}function ra(e){e.refCount--,e.refCount===0&&Mb(Bb,function(){e.controller.abort()})}var ua=null,Tc=0,pn=0,vn=null;function $b(e,t){if(ua===null){var l=ua=[];Tc=0,pn=zr(),vn={status:"pending",value:void 0,then:function(i){l.push(i)}}}return Tc++,t.then(Md,Md),t}function Md(){if(--Tc===0&&ua!==null){vn!==null&&(vn.status="fulfilled");var e=ua;ua=null,pn=0,vn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function kb(e,t){var l=[],i={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<l.length;a++)(0,l[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),i}var Bd=T.S;T.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&$b(e,t),Bd!==null&&Bd(e,t)};var Ti=M(null);function Rc(){var e=Ti.current;return e!==null?e:Oe.pooledCache}function Ms(e,t){t===null?V(Ti,Ti.current):V(Ti,t.pool)}function $d(){var e=Rc();return e===null?null:{parent:Ge._currentValue,pool:e}}var da=Error(o(460)),kd=Error(o(474)),Bs=Error(o(542)),zc={then:function(){}};function Vd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $s(){}function Nd(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then($s,$s),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hd(e),e;default:if(typeof t.status=="string")t.then($s,$s);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hd(e),e}throw fa=t,da}}var fa=null;function Ud(){if(fa===null)throw Error(o(459));var e=fa;return fa=null,e}function Hd(e){if(e===da||e===Bs)throw Error(o(483))}var Ll=!1;function Dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function jl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Yl(e,t,l){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(be&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Os(e),Ad(e,null,l),t}return As(e,i,t,l),Os(e)}function ha(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,l|=i,t.lanes=l,Mu(e,l)}}function Bc(e,t){var l=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,l===i)){var a=null,c=null;if(l=l.firstBaseUpdate,l!==null){do{var f={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};c===null?a=c=f:c=c.next=f,l=l.next}while(l!==null);c===null?a=c=t:c=c.next=t}else a=c=t;l={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var $c=!1;function pa(){if($c){var e=vn;if(e!==null)throw e}}function va(e,t,l,i){$c=!1;var a=e.updateQueue;Ll=!1;var c=a.firstBaseUpdate,f=a.lastBaseUpdate,p=a.shared.pending;if(p!==null){a.shared.pending=null;var b=p,C=b.next;b.next=null,f===null?c=C:f.next=C,f=b;var w=e.alternate;w!==null&&(w=w.updateQueue,p=w.lastBaseUpdate,p!==f&&(p===null?w.firstBaseUpdate=C:p.next=C,w.lastBaseUpdate=b))}if(c!==null){var z=a.baseState;f=0,w=C=b=null,p=c;do{var A=p.lane&-536870913,O=A!==p.lane;if(O?(se&A)===A:(i&A)===A){A!==0&&A===pn&&($c=!0),w!==null&&(w=w.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var K=e,G=p;A=t;var Se=l;switch(G.tag){case 1:if(K=G.payload,typeof K=="function"){z=K.call(Se,z,A);break e}z=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=G.payload,A=typeof K=="function"?K.call(Se,z,A):K,A==null)break e;z=D({},z,A);break e;case 2:Ll=!0}}A=p.callback,A!==null&&(e.flags|=64,O&&(e.flags|=8192),O=a.callbacks,O===null?a.callbacks=[A]:O.push(A))}else O={lane:A,tag:p.tag,payload:p.payload,callback:p.callback,next:null},w===null?(C=w=O,b=z):w=w.next=O,f|=A;if(p=p.next,p===null){if(p=a.shared.pending,p===null)break;O=p,p=O.next,O.next=null,a.lastBaseUpdate=O,a.shared.pending=null}}while(!0);w===null&&(b=z),a.baseState=b,a.firstBaseUpdate=C,a.lastBaseUpdate=w,c===null&&(a.shared.lanes=0),Fl|=f,e.lanes=f,e.memoizedState=z}}function qd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Ld(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)qd(l[e],t)}var bn=M(null),ks=M(0);function jd(e,t){e=zl,V(ks,e),V(bn,t),zl=e|t.baseLanes}function kc(){V(ks,zl),V(bn,bn.current)}function Vc(){zl=ks.current,q(bn),q(ks)}var Gl=0,W=null,ye=null,Le=null,Vs=!1,mn=!1,Ri=!1,Ns=0,ba=0,gn=null,Vb=0;function He(){throw Error(o(321))}function Nc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Dt(e[l],t[l]))return!1;return!0}function Uc(e,t,l,i,a,c){return Gl=c,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Of:wf,Ri=!1,c=l(i,a),Ri=!1,mn&&(c=Gd(t,l,i,a)),Yd(e),c}function Yd(e){T.H=Ys;var t=ye!==null&&ye.next!==null;if(Gl=0,Le=ye=W=null,Vs=!1,ba=0,gn=null,t)throw Error(o(300));e===null||Ie||(e=e.dependencies,e!==null&&zs(e)&&(Ie=!0))}function Gd(e,t,l,i){W=e;var a=0;do{if(mn&&(gn=null),ba=0,mn=!1,25<=a)throw Error(o(301));if(a+=1,Le=ye=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}T.H=Yb,c=t(l,i)}while(mn);return c}function Nb(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?ma(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(W.flags|=1024),t}function Hc(){var e=Ns!==0;return Ns=0,e}function qc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Lc(e){if(Vs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Vs=!1}Gl=0,Le=ye=W=null,mn=!1,ba=Ns=0,gn=null}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?W.memoizedState=Le=e:Le=Le.next=e,Le}function je(){if(ye===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Le===null?W.memoizedState:Le.next;if(t!==null)Le=t,ye=e;else{if(e===null)throw W.alternate===null?Error(o(467)):Error(o(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Le===null?W.memoizedState=Le=e:Le=Le.next=e}return Le}function jc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ma(e){var t=ba;return ba+=1,gn===null&&(gn=[]),e=Nd(gn,e,t),t=W,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Of:wf),e}function Us(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ma(e);if(e.$$typeof===Ue)return rt(e)}throw Error(o(438,String(e)))}function Yc(e){var t=null,l=W.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var i=W.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=jc(),W.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),i=0;i<e;i++)l[i]=Ki;return t.index++,l}function Cl(e,t){return typeof t=="function"?t(e):t}function Hs(e){var t=je();return Gc(t,ye,e)}function Gc(e,t,l){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=l;var a=e.baseQueue,c=i.pending;if(c!==null){if(a!==null){var f=a.next;a.next=c.next,c.next=f}t.baseQueue=a=c,i.pending=null}if(c=e.baseState,a===null)e.memoizedState=c;else{t=a.next;var p=f=null,b=null,C=t,w=!1;do{var z=C.lane&-536870913;if(z!==C.lane?(se&z)===z:(Gl&z)===z){var A=C.revertLane;if(A===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),z===pn&&(w=!0);else if((Gl&A)===A){C=C.next,A===pn&&(w=!0);continue}else z={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},b===null?(p=b=z,f=c):b=b.next=z,W.lanes|=A,Fl|=A;z=C.action,Ri&&l(c,z),c=C.hasEagerState?C.eagerState:l(c,z)}else A={lane:z,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},b===null?(p=b=A,f=c):b=b.next=A,W.lanes|=z,Fl|=z;C=C.next}while(C!==null&&C!==t);if(b===null?f=c:b.next=p,!Dt(c,e.memoizedState)&&(Ie=!0,w&&(l=vn,l!==null)))throw l;e.memoizedState=c,e.baseState=f,e.baseQueue=b,i.lastRenderedState=c}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Xc(e){var t=je(),l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=e;var i=l.dispatch,a=l.pending,c=t.memoizedState;if(a!==null){l.pending=null;var f=a=a.next;do c=e(c,f.action),f=f.next;while(f!==a);Dt(c,t.memoizedState)||(Ie=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),l.lastRenderedState=c}return[c,i]}function Xd(e,t,l){var i=W,a=je(),c=he;if(c){if(l===void 0)throw Error(o(407));l=l()}else l=t();var f=!Dt((ye||a).memoizedState,l);f&&(a.memoizedState=l,Ie=!0),a=a.queue;var p=Kd.bind(null,i,a,e);if(ga(2048,8,p,[e]),a.getSnapshot!==t||f||Le!==null&&Le.memoizedState.tag&1){if(i.flags|=2048,_n(9,qs(),Zd.bind(null,i,a,l,t),null),Oe===null)throw Error(o(349));c||(Gl&124)!==0||Qd(i,t,l)}return l}function Qd(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=W.updateQueue,t===null?(t=jc(),W.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Zd(e,t,l,i){t.value=l,t.getSnapshot=i,Id(t)&&Jd(e)}function Kd(e,t,l){return l(function(){Id(t)&&Jd(e)})}function Id(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Dt(e,l)}catch{return!0}}function Jd(e){var t=un(e,2);t!==null&&Nt(t,e,2)}function Qc(e){var t=xt();if(typeof e=="function"){var l=e;if(e=l(),Ri){Nl(!0);try{l()}finally{Nl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cl,lastRenderedState:e},t}function Fd(e,t,l,i){return e.baseState=l,Gc(e,ye,typeof i=="function"?i:Cl)}function Ub(e,t,l,i,a){if(js(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){c.listeners.push(f)}};T.T!==null?l(!0):c.isTransition=!1,i(c),l=t.pending,l===null?(c.next=t.pending=c,Pd(t,c)):(c.next=l.next,t.pending=l.next=c)}}function Pd(e,t){var l=t.action,i=t.payload,a=e.state;if(t.isTransition){var c=T.T,f={};T.T=f;try{var p=l(a,i),b=T.S;b!==null&&b(f,p),Wd(e,t,p)}catch(C){Zc(e,t,C)}finally{T.T=c}}else try{c=l(a,i),Wd(e,t,c)}catch(C){Zc(e,t,C)}}function Wd(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(i){ef(e,t,i)},function(i){return Zc(e,t,i)}):ef(e,t,l)}function ef(e,t,l){t.status="fulfilled",t.value=l,tf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Pd(e,l)))}function Zc(e,t,l){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=l,tf(t),t=t.next;while(t!==i)}e.action=null}function tf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function lf(e,t){return t}function nf(e,t){if(he){var l=Oe.formState;if(l!==null){e:{var i=W;if(he){if(Ve){t:{for(var a=Ve,c=cl;a.nodeType!==8;){if(!c){a=null;break t}if(a=tl(a.nextSibling),a===null){a=null;break t}}c=a.data,a=c==="F!"||c==="F"?a:null}if(a){Ve=tl(a.nextSibling),i=a.data==="F!";break e}}Ai(i)}i=!1}i&&(t=l[0])}}return l=xt(),l.memoizedState=l.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lf,lastRenderedState:t},l.queue=i,l=Ef.bind(null,W,i),i.dispatch=l,i=Qc(!1),c=Pc.bind(null,W,!1,i.queue),i=xt(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,l=Ub.bind(null,W,a,c,l),a.dispatch=l,i.memoizedState=e,[t,l,!1]}function af(e){var t=je();return sf(t,ye,e)}function sf(e,t,l){if(t=Gc(e,t,lf)[0],e=Hs(Cl)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ma(t)}catch(f){throw f===da?Bs:f}else i=t;t=je();var a=t.queue,c=a.dispatch;return l!==t.memoizedState&&(W.flags|=2048,_n(9,qs(),Hb.bind(null,a,l),null)),[i,c,e]}function Hb(e,t){e.action=t}function of(e){var t=je(),l=ye;if(l!==null)return sf(t,l,e);je(),t=t.memoizedState,l=je();var i=l.queue.dispatch;return l.memoizedState=e,[t,i,!1]}function _n(e,t,l,i){return e={tag:e,create:l,deps:i,inst:t,next:null},t=W.updateQueue,t===null&&(t=jc(),W.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(i=l.next,l.next=e,e.next=i,t.lastEffect=e),e}function qs(){return{destroy:void 0,resource:void 0}}function cf(){return je().memoizedState}function Ls(e,t,l,i){var a=xt();i=i===void 0?null:i,W.flags|=e,a.memoizedState=_n(1|t,qs(),l,i)}function ga(e,t,l,i){var a=je();i=i===void 0?null:i;var c=a.memoizedState.inst;ye!==null&&i!==null&&Nc(i,ye.memoizedState.deps)?a.memoizedState=_n(t,c,l,i):(W.flags|=e,a.memoizedState=_n(1|t,c,l,i))}function rf(e,t){Ls(8390656,8,e,t)}function uf(e,t){ga(2048,8,e,t)}function df(e,t){return ga(4,2,e,t)}function ff(e,t){return ga(4,4,e,t)}function hf(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pf(e,t,l){l=l!=null?l.concat([e]):null,ga(4,4,hf.bind(null,t,e),l)}function Kc(){}function vf(e,t){var l=je();t=t===void 0?null:t;var i=l.memoizedState;return t!==null&&Nc(t,i[1])?i[0]:(l.memoizedState=[e,t],e)}function bf(e,t){var l=je();t=t===void 0?null:t;var i=l.memoizedState;if(t!==null&&Nc(t,i[1]))return i[0];if(i=e(),Ri){Nl(!0);try{e()}finally{Nl(!1)}}return l.memoizedState=[i,t],i}function Ic(e,t,l){return l===void 0||(Gl&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=_h(),W.lanes|=e,Fl|=e,l)}function mf(e,t,l,i){return Dt(l,t)?l:bn.current!==null?(e=Ic(e,l,i),Dt(e,t)||(Ie=!0),e):(Gl&42)===0?(Ie=!0,e.memoizedState=l):(e=_h(),W.lanes|=e,Fl|=e,t)}function gf(e,t,l,i,a){var c=U.p;U.p=c!==0&&8>c?c:8;var f=T.T,p={};T.T=p,Pc(e,!1,t,l);try{var b=a(),C=T.S;if(C!==null&&C(p,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var w=kb(b,i);_a(e,t,w,Vt(e))}else _a(e,t,i,Vt(e))}catch(z){_a(e,t,{then:function(){},status:"rejected",reason:z},Vt())}finally{U.p=c,T.T=f}}function qb(){}function Jc(e,t,l,i){if(e.tag!==5)throw Error(o(476));var a=_f(e).queue;gf(e,a,t,Z,l===null?qb:function(){return yf(e),l(i)})}function _f(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cl,lastRenderedState:Z},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cl,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yf(e){var t=_f(e).next.queue;_a(e,t,{},Vt())}function Fc(){return rt(Na)}function xf(){return je().memoizedState}function Sf(){return je().memoizedState}function Lb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Vt();e=jl(l);var i=Yl(t,e,l);i!==null&&(Nt(i,t,l),ha(i,t,l)),t={cache:wc()},e.payload=t;return}t=t.return}}function jb(e,t,l){var i=Vt();l={lane:i,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},js(e)?Cf(t,l):(l=mc(e,t,l,i),l!==null&&(Nt(l,e,i),Af(l,t,i)))}function Ef(e,t,l){var i=Vt();_a(e,t,l,i)}function _a(e,t,l,i){var a={lane:i,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(js(e))Cf(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var f=t.lastRenderedState,p=c(f,l);if(a.hasEagerState=!0,a.eagerState=p,Dt(p,f))return As(e,t,a,0),Oe===null&&Cs(),!1}catch{}finally{}if(l=mc(e,t,a,i),l!==null)return Nt(l,e,i),Af(l,t,i),!0}return!1}function Pc(e,t,l,i){if(i={lane:2,revertLane:zr(),action:i,hasEagerState:!1,eagerState:null,next:null},js(e)){if(t)throw Error(o(479))}else t=mc(e,l,i,2),t!==null&&Nt(t,e,2)}function js(e){var t=e.alternate;return e===W||t!==null&&t===W}function Cf(e,t){mn=Vs=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Af(e,t,l){if((l&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,l|=i,t.lanes=l,Mu(e,l)}}var Ys={readContext:rt,use:Us,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He},Of={readContext:rt,use:Us,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:rf,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Ls(4194308,4,hf.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){Ls(4,2,e,t)},useMemo:function(e,t){var l=xt();t=t===void 0?null:t;var i=e();if(Ri){Nl(!0);try{e()}finally{Nl(!1)}}return l.memoizedState=[i,t],i},useReducer:function(e,t,l){var i=xt();if(l!==void 0){var a=l(t);if(Ri){Nl(!0);try{l(t)}finally{Nl(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=jb.bind(null,W,e),[i.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:function(e){e=Qc(e);var t=e.queue,l=Ef.bind(null,W,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Kc,useDeferredValue:function(e,t){var l=xt();return Ic(l,e,t)},useTransition:function(){var e=Qc(!1);return e=gf.bind(null,W,e.queue,!0,!1),xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var i=W,a=xt();if(he){if(l===void 0)throw Error(o(407));l=l()}else{if(l=t(),Oe===null)throw Error(o(349));(se&124)!==0||Qd(i,t,l)}a.memoizedState=l;var c={value:l,getSnapshot:t};return a.queue=c,rf(Kd.bind(null,i,c,e),[e]),i.flags|=2048,_n(9,qs(),Zd.bind(null,i,c,l,t),null),l},useId:function(){var e=xt(),t=Oe.identifierPrefix;if(he){var l=xl,i=yl;l=(i&~(1<<32-zt(i)-1)).toString(32)+l,t="«"+t+"R"+l,l=Ns++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=Vb++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Fc,useFormState:nf,useActionState:nf,useOptimistic:function(e){var t=xt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Pc.bind(null,W,!0,l),l.dispatch=t,[e,t]},useMemoCache:Yc,useCacheRefresh:function(){return xt().memoizedState=Lb.bind(null,W)}},wf={readContext:rt,use:Us,useCallback:vf,useContext:rt,useEffect:uf,useImperativeHandle:pf,useInsertionEffect:df,useLayoutEffect:ff,useMemo:bf,useReducer:Hs,useRef:cf,useState:function(){return Hs(Cl)},useDebugValue:Kc,useDeferredValue:function(e,t){var l=je();return mf(l,ye.memoizedState,e,t)},useTransition:function(){var e=Hs(Cl)[0],t=je().memoizedState;return[typeof e=="boolean"?e:ma(e),t]},useSyncExternalStore:Xd,useId:xf,useHostTransitionStatus:Fc,useFormState:af,useActionState:af,useOptimistic:function(e,t){var l=je();return Fd(l,ye,e,t)},useMemoCache:Yc,useCacheRefresh:Sf},Yb={readContext:rt,use:Us,useCallback:vf,useContext:rt,useEffect:uf,useImperativeHandle:pf,useInsertionEffect:df,useLayoutEffect:ff,useMemo:bf,useReducer:Xc,useRef:cf,useState:function(){return Xc(Cl)},useDebugValue:Kc,useDeferredValue:function(e,t){var l=je();return ye===null?Ic(l,e,t):mf(l,ye.memoizedState,e,t)},useTransition:function(){var e=Xc(Cl)[0],t=je().memoizedState;return[typeof e=="boolean"?e:ma(e),t]},useSyncExternalStore:Xd,useId:xf,useHostTransitionStatus:Fc,useFormState:of,useActionState:of,useOptimistic:function(e,t){var l=je();return ye!==null?Fd(l,ye,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Yc,useCacheRefresh:Sf},yn=null,ya=0;function Gs(e){var t=ya;return ya+=1,yn===null&&(yn=[]),Nd(yn,e,t)}function xa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Xs(e,t){throw t.$$typeof===$?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Tf(e){var t=e._init;return t(e._payload)}function Rf(e){function t(y,g){if(e){var E=y.deletions;E===null?(y.deletions=[g],y.flags|=16):E.push(g)}}function l(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function i(y){for(var g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function a(y,g){return y=_l(y,g),y.index=0,y.sibling=null,y}function c(y,g,E){return y.index=E,e?(E=y.alternate,E!==null?(E=E.index,E<g?(y.flags|=67108866,g):E):(y.flags|=67108866,g)):(y.flags|=1048576,g)}function f(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function p(y,g,E,R){return g===null||g.tag!==6?(g=_c(E,y.mode,R),g.return=y,g):(g=a(g,E),g.return=y,g)}function b(y,g,E,R){var L=E.type;return L===k?w(y,g,E.props.children,R,E.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===pt&&Tf(L)===g.type)?(g=a(g,E.props),xa(g,E),g.return=y,g):(g=ws(E.type,E.key,E.props,null,y.mode,R),xa(g,E),g.return=y,g)}function C(y,g,E,R){return g===null||g.tag!==4||g.stateNode.containerInfo!==E.containerInfo||g.stateNode.implementation!==E.implementation?(g=yc(E,y.mode,R),g.return=y,g):(g=a(g,E.children||[]),g.return=y,g)}function w(y,g,E,R,L){return g===null||g.tag!==7?(g=xi(E,y.mode,R,L),g.return=y,g):(g=a(g,E),g.return=y,g)}function z(y,g,E){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=_c(""+g,y.mode,E),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case N:return E=ws(g.type,g.key,g.props,null,y.mode,E),xa(E,g),E.return=y,E;case H:return g=yc(g,y.mode,E),g.return=y,g;case pt:var R=g._init;return g=R(g._payload),z(y,g,E)}if(ot(g)||st(g))return g=xi(g,y.mode,E,null),g.return=y,g;if(typeof g.then=="function")return z(y,Gs(g),E);if(g.$$typeof===Ue)return z(y,Ds(y,g),E);Xs(y,g)}return null}function A(y,g,E,R){var L=g!==null?g.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return L!==null?null:p(y,g,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case N:return E.key===L?b(y,g,E,R):null;case H:return E.key===L?C(y,g,E,R):null;case pt:return L=E._init,E=L(E._payload),A(y,g,E,R)}if(ot(E)||st(E))return L!==null?null:w(y,g,E,R,null);if(typeof E.then=="function")return A(y,g,Gs(E),R);if(E.$$typeof===Ue)return A(y,g,Ds(y,E),R);Xs(y,E)}return null}function O(y,g,E,R,L){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return y=y.get(E)||null,p(g,y,""+R,L);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case N:return y=y.get(R.key===null?E:R.key)||null,b(g,y,R,L);case H:return y=y.get(R.key===null?E:R.key)||null,C(g,y,R,L);case pt:var ee=R._init;return R=ee(R._payload),O(y,g,E,R,L)}if(ot(R)||st(R))return y=y.get(E)||null,w(g,y,R,L,null);if(typeof R.then=="function")return O(y,g,E,Gs(R),L);if(R.$$typeof===Ue)return O(y,g,E,Ds(g,R),L);Xs(g,R)}return null}function K(y,g,E,R){for(var L=null,ee=null,j=g,X=g=0,Fe=null;j!==null&&X<E.length;X++){j.index>X?(Fe=j,j=null):Fe=j.sibling;var fe=A(y,j,E[X],R);if(fe===null){j===null&&(j=Fe);break}e&&j&&fe.alternate===null&&t(y,j),g=c(fe,g,X),ee===null?L=fe:ee.sibling=fe,ee=fe,j=Fe}if(X===E.length)return l(y,j),he&&Ei(y,X),L;if(j===null){for(;X<E.length;X++)j=z(y,E[X],R),j!==null&&(g=c(j,g,X),ee===null?L=j:ee.sibling=j,ee=j);return he&&Ei(y,X),L}for(j=i(j);X<E.length;X++)Fe=O(j,y,X,E[X],R),Fe!==null&&(e&&Fe.alternate!==null&&j.delete(Fe.key===null?X:Fe.key),g=c(Fe,g,X),ee===null?L=Fe:ee.sibling=Fe,ee=Fe);return e&&j.forEach(function(si){return t(y,si)}),he&&Ei(y,X),L}function G(y,g,E,R){if(E==null)throw Error(o(151));for(var L=null,ee=null,j=g,X=g=0,Fe=null,fe=E.next();j!==null&&!fe.done;X++,fe=E.next()){j.index>X?(Fe=j,j=null):Fe=j.sibling;var si=A(y,j,fe.value,R);if(si===null){j===null&&(j=Fe);break}e&&j&&si.alternate===null&&t(y,j),g=c(si,g,X),ee===null?L=si:ee.sibling=si,ee=si,j=Fe}if(fe.done)return l(y,j),he&&Ei(y,X),L;if(j===null){for(;!fe.done;X++,fe=E.next())fe=z(y,fe.value,R),fe!==null&&(g=c(fe,g,X),ee===null?L=fe:ee.sibling=fe,ee=fe);return he&&Ei(y,X),L}for(j=i(j);!fe.done;X++,fe=E.next())fe=O(j,y,X,fe.value,R),fe!==null&&(e&&fe.alternate!==null&&j.delete(fe.key===null?X:fe.key),g=c(fe,g,X),ee===null?L=fe:ee.sibling=fe,ee=fe);return e&&j.forEach(function(Gm){return t(y,Gm)}),he&&Ei(y,X),L}function Se(y,g,E,R){if(typeof E=="object"&&E!==null&&E.type===k&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case N:e:{for(var L=E.key;g!==null;){if(g.key===L){if(L=E.type,L===k){if(g.tag===7){l(y,g.sibling),R=a(g,E.props.children),R.return=y,y=R;break e}}else if(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===pt&&Tf(L)===g.type){l(y,g.sibling),R=a(g,E.props),xa(R,E),R.return=y,y=R;break e}l(y,g);break}else t(y,g);g=g.sibling}E.type===k?(R=xi(E.props.children,y.mode,R,E.key),R.return=y,y=R):(R=ws(E.type,E.key,E.props,null,y.mode,R),xa(R,E),R.return=y,y=R)}return f(y);case H:e:{for(L=E.key;g!==null;){if(g.key===L)if(g.tag===4&&g.stateNode.containerInfo===E.containerInfo&&g.stateNode.implementation===E.implementation){l(y,g.sibling),R=a(g,E.children||[]),R.return=y,y=R;break e}else{l(y,g);break}else t(y,g);g=g.sibling}R=yc(E,y.mode,R),R.return=y,y=R}return f(y);case pt:return L=E._init,E=L(E._payload),Se(y,g,E,R)}if(ot(E))return K(y,g,E,R);if(st(E)){if(L=st(E),typeof L!="function")throw Error(o(150));return E=L.call(E),G(y,g,E,R)}if(typeof E.then=="function")return Se(y,g,Gs(E),R);if(E.$$typeof===Ue)return Se(y,g,Ds(y,E),R);Xs(y,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,g!==null&&g.tag===6?(l(y,g.sibling),R=a(g,E),R.return=y,y=R):(l(y,g),R=_c(E,y.mode,R),R.return=y,y=R),f(y)):l(y,g)}return function(y,g,E,R){try{ya=0;var L=Se(y,g,E,R);return yn=null,L}catch(j){if(j===da||j===Bs)throw j;var ee=Mt(29,j,null,y.mode);return ee.lanes=R,ee.return=y,ee}finally{}}}var xn=Rf(!0),zf=Rf(!1),Qt=M(null),rl=null;function Xl(e){var t=e.alternate;V(Xe,Xe.current&1),V(Qt,e),rl===null&&(t===null||bn.current!==null||t.memoizedState!==null)&&(rl=e)}function Df(e){if(e.tag===22){if(V(Xe,Xe.current),V(Qt,e),rl===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(rl=e)}}else Ql()}function Ql(){V(Xe,Xe.current),V(Qt,Qt.current)}function Al(e){q(Qt),rl===e&&(rl=null),q(Xe)}var Xe=M(0);function Qs(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||jr(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Wc(e,t,l,i){t=e.memoizedState,l=l(i,t),l=l==null?t:D({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var er={enqueueSetState:function(e,t,l){e=e._reactInternals;var i=Vt(),a=jl(i);a.payload=t,l!=null&&(a.callback=l),t=Yl(e,a,i),t!==null&&(Nt(t,e,i),ha(t,e,i))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var i=Vt(),a=jl(i);a.tag=1,a.payload=t,l!=null&&(a.callback=l),t=Yl(e,a,i),t!==null&&(Nt(t,e,i),ha(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Vt(),i=jl(l);i.tag=2,t!=null&&(i.callback=t),t=Yl(e,i,l),t!==null&&(Nt(t,e,l),ha(t,e,l))}};function Mf(e,t,l,i,a,c,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,f):t.prototype&&t.prototype.isPureReactComponent?!ia(l,i)||!ia(a,c):!0}function Bf(e,t,l,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,i),t.state!==e&&er.enqueueReplaceState(t,t.state,null)}function zi(e,t){var l=t;if("ref"in t){l={};for(var i in t)i!=="ref"&&(l[i]=t[i])}if(e=e.defaultProps){l===t&&(l=D({},l));for(var a in e)l[a]===void 0&&(l[a]=e[a])}return l}var Zs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $f(e){Zs(e)}function kf(e){console.error(e)}function Vf(e){Zs(e)}function Ks(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Nf(e,t,l){try{var i=e.onCaughtError;i(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function tr(e,t,l){return l=jl(l),l.tag=3,l.payload={element:null},l.callback=function(){Ks(e,t)},l}function Uf(e){return e=jl(e),e.tag=3,e}function Hf(e,t,l,i){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var c=i.value;e.payload=function(){return a(c)},e.callback=function(){Nf(t,l,i)}}var f=l.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Nf(t,l,i),typeof a!="function"&&(Pl===null?Pl=new Set([this]):Pl.add(this));var p=i.stack;this.componentDidCatch(i.value,{componentStack:p!==null?p:""})})}function Gb(e,t,l,i,a){if(l.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=l.alternate,t!==null&&ca(t,l,a,!0),l=Qt.current,l!==null){switch(l.tag){case 13:return rl===null?Ar():l.alternate===null&&Ne===0&&(Ne=3),l.flags&=-257,l.flags|=65536,l.lanes=a,i===zc?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([i]):t.add(i),wr(e,i,a)),!1;case 22:return l.flags|=65536,i===zc?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([i]):l.add(i)),wr(e,i,a)),!1}throw Error(o(435,l.tag))}return wr(e,i,a),Ar(),!1}if(he)return t=Qt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Ec&&(e=Error(o(422),{cause:i}),oa(jt(e,l)))):(i!==Ec&&(t=Error(o(423),{cause:i}),oa(jt(t,l))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=jt(i,l),a=tr(e.stateNode,i,a),Bc(e,a),Ne!==4&&(Ne=2)),!1;var c=Error(o(520),{cause:i});if(c=jt(c,l),Ta===null?Ta=[c]:Ta.push(c),Ne!==4&&(Ne=2),t===null)return!0;i=jt(i,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=a&-a,l.lanes|=e,e=tr(l.stateNode,i,e),Bc(l,e),!1;case 1:if(t=l.type,c=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Pl===null||!Pl.has(c))))return l.flags|=65536,a&=-a,l.lanes|=a,a=Uf(a),Hf(a,e,l,i),Bc(l,a),!1}l=l.return}while(l!==null);return!1}var qf=Error(o(461)),Ie=!1;function tt(e,t,l,i){t.child=e===null?zf(t,null,l,i):xn(t,e.child,l,i)}function Lf(e,t,l,i,a){l=l.render;var c=t.ref;if("ref"in i){var f={};for(var p in i)p!=="ref"&&(f[p]=i[p])}else f=i;return wi(t),i=Uc(e,t,l,f,c,a),p=Hc(),e!==null&&!Ie?(qc(e,t,a),Ol(e,t,a)):(he&&p&&xc(t),t.flags|=1,tt(e,t,i,a),t.child)}function jf(e,t,l,i,a){if(e===null){var c=l.type;return typeof c=="function"&&!gc(c)&&c.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=c,Yf(e,t,c,i,a)):(e=ws(l.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!rr(e,a)){var f=c.memoizedProps;if(l=l.compare,l=l!==null?l:ia,l(f,i)&&e.ref===t.ref)return Ol(e,t,a)}return t.flags|=1,e=_l(c,i),e.ref=t.ref,e.return=t,t.child=e}function Yf(e,t,l,i,a){if(e!==null){var c=e.memoizedProps;if(ia(c,i)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=i=c,rr(e,a))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,Ol(e,t,a)}return lr(e,t,l,i,a)}function Gf(e,t,l){var i=t.pendingProps,a=i.children,c=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=c!==null?c.baseLanes|l:l,e!==null){for(a=t.child=e.child,c=0;a!==null;)c=c|a.lanes|a.childLanes,a=a.sibling;t.childLanes=c&~i}else t.childLanes=0,t.child=null;return Xf(e,t,i,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ms(t,c!==null?c.cachePool:null),c!==null?jd(t,c):kc(),Df(t);else return t.lanes=t.childLanes=536870912,Xf(e,t,c!==null?c.baseLanes|l:l,l)}else c!==null?(Ms(t,c.cachePool),jd(t,c),Ql(),t.memoizedState=null):(e!==null&&Ms(t,null),kc(),Ql());return tt(e,t,a,l),t.child}function Xf(e,t,l,i){var a=Rc();return a=a===null?null:{parent:Ge._currentValue,pool:a},t.memoizedState={baseLanes:l,cachePool:a},e!==null&&Ms(t,null),kc(),Df(t),e!==null&&ca(e,t,i,!0),null}function Is(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function lr(e,t,l,i,a){return wi(t),l=Uc(e,t,l,i,void 0,a),i=Hc(),e!==null&&!Ie?(qc(e,t,a),Ol(e,t,a)):(he&&i&&xc(t),t.flags|=1,tt(e,t,l,a),t.child)}function Qf(e,t,l,i,a,c){return wi(t),t.updateQueue=null,l=Gd(t,i,l,a),Yd(e),i=Hc(),e!==null&&!Ie?(qc(e,t,c),Ol(e,t,c)):(he&&i&&xc(t),t.flags|=1,tt(e,t,l,c),t.child)}function Zf(e,t,l,i,a){if(wi(t),t.stateNode===null){var c=dn,f=l.contextType;typeof f=="object"&&f!==null&&(c=rt(f)),c=new l(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=er,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},Dc(t),f=l.contextType,c.context=typeof f=="object"&&f!==null?rt(f):dn,c.state=t.memoizedState,f=l.getDerivedStateFromProps,typeof f=="function"&&(Wc(t,l,f,i),c.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(f=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),f!==c.state&&er.enqueueReplaceState(c,c.state,null),va(t,i,c,a),pa(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var p=t.memoizedProps,b=zi(l,p);c.props=b;var C=c.context,w=l.contextType;f=dn,typeof w=="object"&&w!==null&&(f=rt(w));var z=l.getDerivedStateFromProps;w=typeof z=="function"||typeof c.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,w||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p||C!==f)&&Bf(t,c,i,f),Ll=!1;var A=t.memoizedState;c.state=A,va(t,i,c,a),pa(),C=t.memoizedState,p||A!==C||Ll?(typeof z=="function"&&(Wc(t,l,z,i),C=t.memoizedState),(b=Ll||Mf(t,l,b,i,A,C,f))?(w||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=C),c.props=i,c.state=C,c.context=f,i=b):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,Mc(e,t),f=t.memoizedProps,w=zi(l,f),c.props=w,z=t.pendingProps,A=c.context,C=l.contextType,b=dn,typeof C=="object"&&C!==null&&(b=rt(C)),p=l.getDerivedStateFromProps,(C=typeof p=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==z||A!==b)&&Bf(t,c,i,b),Ll=!1,A=t.memoizedState,c.state=A,va(t,i,c,a),pa();var O=t.memoizedState;f!==z||A!==O||Ll||e!==null&&e.dependencies!==null&&zs(e.dependencies)?(typeof p=="function"&&(Wc(t,l,p,i),O=t.memoizedState),(w=Ll||Mf(t,l,w,i,A,O,b)||e!==null&&e.dependencies!==null&&zs(e.dependencies))?(C||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,O,b),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,O,b)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=O),c.props=i,c.state=O,c.context=b,i=w):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,Is(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,l=i&&typeof l.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=xn(t,e.child,null,a),t.child=xn(t,null,l,a)):tt(e,t,l,a),t.memoizedState=c.state,e=t.child):e=Ol(e,t,a),e}function Kf(e,t,l,i){return sa(),t.flags|=256,tt(e,t,l,i),t.child}var ir={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nr(e){return{baseLanes:e,cachePool:$d()}}function ar(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Zt),e}function If(e,t,l){var i=t.pendingProps,a=!1,c=(t.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),f&&(a=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(a?Xl(t):Ql(),he){var p=Ve,b;if(b=p){e:{for(b=p,p=cl;b.nodeType!==8;){if(!p){p=null;break e}if(b=tl(b.nextSibling),b===null){p=null;break e}}p=b}p!==null?(t.memoizedState={dehydrated:p,treeContext:Si!==null?{id:yl,overflow:xl}:null,retryLane:536870912,hydrationErrors:null},b=Mt(18,null,null,0),b.stateNode=p,b.return=t,t.child=b,vt=t,Ve=null,b=!0):b=!1}b||Ai(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return jr(p)?t.lanes=32:t.lanes=536870912,null;Al(t)}return p=i.children,i=i.fallback,a?(Ql(),a=t.mode,p=Js({mode:"hidden",children:p},a),i=xi(i,a,l,null),p.return=t,i.return=t,p.sibling=i,t.child=p,a=t.child,a.memoizedState=nr(l),a.childLanes=ar(e,f,l),t.memoizedState=ir,i):(Xl(t),sr(t,p))}if(b=e.memoizedState,b!==null&&(p=b.dehydrated,p!==null)){if(c)t.flags&256?(Xl(t),t.flags&=-257,t=or(e,t,l)):t.memoizedState!==null?(Ql(),t.child=e.child,t.flags|=128,t=null):(Ql(),a=i.fallback,p=t.mode,i=Js({mode:"visible",children:i.children},p),a=xi(a,p,l,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,xn(t,e.child,null,l),i=t.child,i.memoizedState=nr(l),i.childLanes=ar(e,f,l),t.memoizedState=ir,t=a);else if(Xl(t),jr(p)){if(f=p.nextSibling&&p.nextSibling.dataset,f)var C=f.dgst;f=C,i=Error(o(419)),i.stack="",i.digest=f,oa({value:i,source:null,stack:null}),t=or(e,t,l)}else if(Ie||ca(e,t,l,!1),f=(l&e.childLanes)!==0,Ie||f){if(f=Oe,f!==null&&(i=l&-l,i=(i&42)!==0?1:Yo(i),i=(i&(f.suspendedLanes|l))!==0?0:i,i!==0&&i!==b.retryLane))throw b.retryLane=i,un(e,i),Nt(f,e,i),qf;p.data==="$?"||Ar(),t=or(e,t,l)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Ve=tl(p.nextSibling),vt=t,he=!0,Ci=null,cl=!1,e!==null&&(Gt[Xt++]=yl,Gt[Xt++]=xl,Gt[Xt++]=Si,yl=e.id,xl=e.overflow,Si=t),t=sr(t,i.children),t.flags|=4096);return t}return a?(Ql(),a=i.fallback,p=t.mode,b=e.child,C=b.sibling,i=_l(b,{mode:"hidden",children:i.children}),i.subtreeFlags=b.subtreeFlags&65011712,C!==null?a=_l(C,a):(a=xi(a,p,l,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,p=e.child.memoizedState,p===null?p=nr(l):(b=p.cachePool,b!==null?(C=Ge._currentValue,b=b.parent!==C?{parent:C,pool:C}:b):b=$d(),p={baseLanes:p.baseLanes|l,cachePool:b}),a.memoizedState=p,a.childLanes=ar(e,f,l),t.memoizedState=ir,i):(Xl(t),l=e.child,e=l.sibling,l=_l(l,{mode:"visible",children:i.children}),l.return=t,l.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=l,t.memoizedState=null,l)}function sr(e,t){return t=Js({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Js(e,t){return e=Mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function or(e,t,l){return xn(t,e.child,null,l),e=sr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jf(e,t,l){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ac(e.return,t,l)}function cr(e,t,l,i,a){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:l,tailMode:a}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=l,c.tailMode=a)}function Ff(e,t,l){var i=t.pendingProps,a=i.revealOrder,c=i.tail;if(tt(e,t,i.children,l),i=Xe.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jf(e,l,t);else if(e.tag===19)Jf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(V(Xe,i),a){case"forwards":for(l=t.child,a=null;l!==null;)e=l.alternate,e!==null&&Qs(e)===null&&(a=l),l=l.sibling;l=a,l===null?(a=t.child,t.child=null):(a=l.sibling,l.sibling=null),cr(t,!1,a,l,c);break;case"backwards":for(l=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Qs(e)===null){t.child=a;break}e=a.sibling,a.sibling=l,l=a,a=e}cr(t,!0,l,null,c);break;case"together":cr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ol(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Fl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ca(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,l=_l(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=_l(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function rr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&zs(e)))}function Xb(e,t,l){switch(t.tag){case 3:ze(t,t.stateNode.containerInfo),ql(t,Ge,e.memoizedState.cache),sa();break;case 27:case 5:Uo(t);break;case 4:ze(t,t.stateNode.containerInfo);break;case 10:ql(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Xl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?If(e,t,l):(Xl(t),e=Ol(e,t,l),e!==null?e.sibling:null);Xl(t);break;case 19:var a=(e.flags&128)!==0;if(i=(l&t.childLanes)!==0,i||(ca(e,t,l,!1),i=(l&t.childLanes)!==0),a){if(i)return Ff(e,t,l);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),V(Xe,Xe.current),i)break;return null;case 22:case 23:return t.lanes=0,Gf(e,t,l);case 24:ql(t,Ge,e.memoizedState.cache)}return Ol(e,t,l)}function Pf(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!rr(e,l)&&(t.flags&128)===0)return Ie=!1,Xb(e,t,l);Ie=(e.flags&131072)!==0}else Ie=!1,he&&(t.flags&1048576)!==0&&wd(t,Rs,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,a=i._init;if(i=a(i._payload),t.type=i,typeof i=="function")gc(i)?(e=zi(i,e),t.tag=1,t=Zf(null,t,i,e,l)):(t.tag=0,t=lr(null,t,i,e,l));else{if(i!=null){if(a=i.$$typeof,a===wt){t.tag=11,t=Lf(null,t,i,e,l);break e}else if(a===ht){t.tag=14,t=jf(null,t,i,e,l);break e}}throw t=vi(i)||i,Error(o(306,t,""))}}return t;case 0:return lr(e,t,t.type,t.pendingProps,l);case 1:return i=t.type,a=zi(i,t.pendingProps),Zf(e,t,i,a,l);case 3:e:{if(ze(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var c=t.memoizedState;a=c.element,Mc(e,t),va(t,i,null,l);var f=t.memoizedState;if(i=f.cache,ql(t,Ge,i),i!==c.cache&&Oc(t,[Ge],l,!0),pa(),i=f.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Kf(e,t,i,l);break e}else if(i!==a){a=jt(Error(o(424)),t),oa(a),t=Kf(e,t,i,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ve=tl(e.firstChild),vt=t,he=!0,Ci=null,cl=!0,l=zf(t,null,i,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(sa(),i===a){t=Ol(e,t,l);break e}tt(e,t,i,l)}t=t.child}return t;case 26:return Is(e,t),e===null?(l=lp(t.type,null,t.pendingProps,null))?t.memoizedState=l:he||(l=t.type,e=t.pendingProps,i=uo(I.current).createElement(l),i[ct]=t,i[_t]=e,it(i,l,e),Ke(i),t.stateNode=i):t.memoizedState=lp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Uo(t),e===null&&he&&(i=t.stateNode=Wh(t.type,t.pendingProps,I.current),vt=t,cl=!0,a=Ve,ti(t.type)?(Yr=a,Ve=tl(i.firstChild)):Ve=a),tt(e,t,t.pendingProps.children,l),Is(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((a=i=Ve)&&(i=_m(i,t.type,t.pendingProps,cl),i!==null?(t.stateNode=i,vt=t,Ve=tl(i.firstChild),cl=!1,a=!0):a=!1),a||Ai(t)),Uo(t),a=t.type,c=t.pendingProps,f=e!==null?e.memoizedProps:null,i=c.children,Hr(a,c)?i=null:f!==null&&Hr(a,f)&&(t.flags|=32),t.memoizedState!==null&&(a=Uc(e,t,Nb,null,null,l),Na._currentValue=a),Is(e,t),tt(e,t,i,l),t.child;case 6:return e===null&&he&&((e=l=Ve)&&(l=ym(l,t.pendingProps,cl),l!==null?(t.stateNode=l,vt=t,Ve=null,e=!0):e=!1),e||Ai(t)),null;case 13:return If(e,t,l);case 4:return ze(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=xn(t,null,i,l):tt(e,t,i,l),t.child;case 11:return Lf(e,t,t.type,t.pendingProps,l);case 7:return tt(e,t,t.pendingProps,l),t.child;case 8:return tt(e,t,t.pendingProps.children,l),t.child;case 12:return tt(e,t,t.pendingProps.children,l),t.child;case 10:return i=t.pendingProps,ql(t,t.type,i.value),tt(e,t,i.children,l),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,wi(t),a=rt(a),i=i(a),t.flags|=1,tt(e,t,i,l),t.child;case 14:return jf(e,t,t.type,t.pendingProps,l);case 15:return Yf(e,t,t.type,t.pendingProps,l);case 19:return Ff(e,t,l);case 31:return i=t.pendingProps,l=t.mode,i={mode:i.mode,children:i.children},e===null?(l=Js(i,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=_l(e.child,i),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return Gf(e,t,l);case 24:return wi(t),i=rt(Ge),e===null?(a=Rc(),a===null&&(a=Oe,c=wc(),a.pooledCache=c,c.refCount++,c!==null&&(a.pooledCacheLanes|=l),a=c),t.memoizedState={parent:i,cache:a},Dc(t),ql(t,Ge,a)):((e.lanes&l)!==0&&(Mc(e,t),va(t,null,null,l),pa()),a=e.memoizedState,c=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ql(t,Ge,i)):(i=c.cache,ql(t,Ge,i),i!==a.cache&&Oc(t,[Ge],l,!0))),tt(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function wl(e){e.flags|=4}function Wf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!op(t)){if(t=Qt.current,t!==null&&((se&4194048)===se?rl!==null:(se&62914560)!==se&&(se&536870912)===0||t!==rl))throw fa=zc,kd;e.flags|=8192}}function Fs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zu():536870912,e.lanes|=t,An|=t)}function Sa(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var i=null;l!==null;)l.alternate!==null&&(i=l),l=l.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,i=0;if(t)for(var a=e.child;a!==null;)l|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)l|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=l,t}function Qb(e,t,l){var i=t.pendingProps;switch(Sc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return l=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),El(Ge),Vl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(aa(t)?wl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zd())),Be(t),null;case 26:return l=t.memoizedState,e===null?(wl(t),l!==null?(Be(t),Wf(t,l)):(Be(t),t.flags&=-16777217)):l?l!==e.memoizedState?(wl(t),Be(t),Wf(t,l)):(Be(t),t.flags&=-16777217):(e.memoizedProps!==i&&wl(t),Be(t),t.flags&=-16777217),null;case 27:cs(t),l=I.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&wl(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Be(t),null}e=Y.current,aa(t)?Td(t):(e=Wh(a,i,l),t.stateNode=e,wl(t))}return Be(t),null;case 5:if(cs(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&wl(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Be(t),null}if(e=Y.current,aa(t))Td(t);else{switch(a=uo(I.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?a.createElement(l,{is:i.is}):a.createElement(l)}}e[ct]=t,e[_t]=i;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(it(e,l,i),l){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&wl(t)}}return Be(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&wl(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=I.current,aa(t)){if(e=t.stateNode,l=t.memoizedProps,i=null,a=vt,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[ct]=t,e=!!(e.nodeValue===l||i!==null&&i.suppressHydrationWarning===!0||Qh(e.nodeValue,l)),e||Ai(t)}else e=uo(e).createTextNode(i),e[ct]=t,t.stateNode=e}return Be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=aa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(o(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));a[ct]=t}else sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),a=!1}else a=zd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Al(t),t):(Al(t),null)}if(Al(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=i!==null,e=e!==null&&e.memoizedState!==null,l){i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var c=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==a&&(i.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),Fs(t,t.updateQueue),Be(t),null;case 4:return Vl(),e===null&&$r(t.stateNode.containerInfo),Be(t),null;case 10:return El(t.type),Be(t),null;case 19:if(q(Xe),a=t.memoizedState,a===null)return Be(t),null;if(i=(t.flags&128)!==0,c=a.rendering,c===null)if(i)Sa(a,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Qs(e),c!==null){for(t.flags|=128,Sa(a,!1),e=c.updateQueue,t.updateQueue=e,Fs(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Od(l,e),l=l.sibling;return V(Xe,Xe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ol()>eo&&(t.flags|=128,i=!0,Sa(a,!1),t.lanes=4194304)}else{if(!i)if(e=Qs(c),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Fs(t,e),Sa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!he)return Be(t),null}else 2*ol()-a.renderingStartTime>eo&&l!==536870912&&(t.flags|=128,i=!0,Sa(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(e=a.last,e!==null?e.sibling=c:t.child=c,a.last=c)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ol(),t.sibling=null,e=Xe.current,V(Xe,i?e&1|2:e&1),t):(Be(t),null);case 22:case 23:return Al(t),Vc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(l&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),l=t.updateQueue,l!==null&&Fs(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==l&&(t.flags|=2048),e!==null&&q(Ti),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),El(Ge),Be(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Zb(e,t){switch(Sc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return El(Ge),Vl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return cs(t),null;case 13:if(Al(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Xe),null;case 4:return Vl(),null;case 10:return El(t.type),null;case 22:case 23:return Al(t),Vc(),e!==null&&q(Ti),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return El(Ge),null;case 25:return null;default:return null}}function eh(e,t){switch(Sc(t),t.tag){case 3:El(Ge),Vl();break;case 26:case 27:case 5:cs(t);break;case 4:Vl();break;case 13:Al(t);break;case 19:q(Xe);break;case 10:El(t.type);break;case 22:case 23:Al(t),Vc(),e!==null&&q(Ti);break;case 24:El(Ge)}}function Ea(e,t){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var a=i.next;l=a;do{if((l.tag&e)===e){i=void 0;var c=l.create,f=l.inst;i=c(),f.destroy=i}l=l.next}while(l!==a)}}catch(p){Ae(t,t.return,p)}}function Zl(e,t,l){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var c=a.next;i=c;do{if((i.tag&e)===e){var f=i.inst,p=f.destroy;if(p!==void 0){f.destroy=void 0,a=t;var b=l,C=p;try{C()}catch(w){Ae(a,b,w)}}}i=i.next}while(i!==c)}}catch(w){Ae(t,t.return,w)}}function th(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Ld(t,l)}catch(i){Ae(e,e.return,i)}}}function lh(e,t,l){l.props=zi(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(i){Ae(e,t,i)}}function Ca(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof l=="function"?e.refCleanup=l(i):l.current=i}}catch(a){Ae(e,t,a)}}function ul(e,t){var l=e.ref,i=e.refCleanup;if(l!==null)if(typeof i=="function")try{i()}catch(a){Ae(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){Ae(e,t,a)}else l.current=null}function ih(e){var t=e.type,l=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&i.focus();break e;case"img":l.src?i.src=l.src:l.srcSet&&(i.srcset=l.srcSet)}}catch(a){Ae(e,e.return,a)}}function ur(e,t,l){try{var i=e.stateNode;pm(i,e.type,l,t),i[_t]=t}catch(a){Ae(e,e.return,a)}}function nh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ti(e.type)||e.tag===4}function dr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ti(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fr(e,t,l){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=ro));else if(i!==4&&(i===27&&ti(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(fr(e,t,l),e=e.sibling;e!==null;)fr(e,t,l),e=e.sibling}function Ps(e,t,l){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(i!==4&&(i===27&&ti(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Ps(e,t,l),e=e.sibling;e!==null;)Ps(e,t,l),e=e.sibling}function ah(e){var t=e.stateNode,l=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);it(t,i,l),t[ct]=e,t[_t]=l}catch(c){Ae(e,e.return,c)}}var Tl=!1,qe=!1,hr=!1,sh=typeof WeakSet=="function"?WeakSet:Set,Je=null;function Kb(e,t){if(e=e.containerInfo,Nr=mo,e=bd(e),dc(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var i=l.getSelection&&l.getSelection();if(i&&i.rangeCount!==0){l=i.anchorNode;var a=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{l.nodeType,c.nodeType}catch{l=null;break e}var f=0,p=-1,b=-1,C=0,w=0,z=e,A=null;t:for(;;){for(var O;z!==l||a!==0&&z.nodeType!==3||(p=f+a),z!==c||i!==0&&z.nodeType!==3||(b=f+i),z.nodeType===3&&(f+=z.nodeValue.length),(O=z.firstChild)!==null;)A=z,z=O;for(;;){if(z===e)break t;if(A===l&&++C===a&&(p=f),A===c&&++w===i&&(b=f),(O=z.nextSibling)!==null)break;z=A,A=z.parentNode}z=O}l=p===-1||b===-1?null:{start:p,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ur={focusedElem:e,selectionRange:l},mo=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,c=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,l=t,a=c.memoizedProps,c=c.memoizedState,i=l.stateNode;try{var K=zi(l.type,a,l.elementType===l.type);e=i.getSnapshotBeforeUpdate(K,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(G){Ae(l,l.return,G)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Lr(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function oh(e,t,l){var i=l.flags;switch(l.tag){case 0:case 11:case 15:Kl(e,l),i&4&&Ea(5,l);break;case 1:if(Kl(e,l),i&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(f){Ae(l,l.return,f)}else{var a=zi(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ae(l,l.return,f)}}i&64&&th(l),i&512&&Ca(l,l.return);break;case 3:if(Kl(e,l),i&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Ld(e,t)}catch(f){Ae(l,l.return,f)}}break;case 27:t===null&&i&4&&ah(l);case 26:case 5:Kl(e,l),t===null&&i&4&&ih(l),i&512&&Ca(l,l.return);break;case 12:Kl(e,l);break;case 13:Kl(e,l),i&4&&uh(e,l),i&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=im.bind(null,l),xm(e,l))));break;case 22:if(i=l.memoizedState!==null||Tl,!i){t=t!==null&&t.memoizedState!==null||qe,a=Tl;var c=qe;Tl=i,(qe=t)&&!c?Il(e,l,(l.subtreeFlags&8772)!==0):Kl(e,l),Tl=a,qe=c}break;case 30:break;default:Kl(e,l)}}function ch(e){var t=e.alternate;t!==null&&(e.alternate=null,ch(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Qo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,St=!1;function Rl(e,t,l){for(l=l.child;l!==null;)rh(e,t,l),l=l.sibling}function rh(e,t,l){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Xn,l)}catch{}switch(l.tag){case 26:qe||ul(l,t),Rl(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:qe||ul(l,t);var i=De,a=St;ti(l.type)&&(De=l.stateNode,St=!1),Rl(e,t,l),Ba(l.stateNode),De=i,St=a;break;case 5:qe||ul(l,t);case 6:if(i=De,a=St,De=null,Rl(e,t,l),De=i,St=a,De!==null)if(St)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(l.stateNode)}catch(c){Ae(l,t,c)}else try{De.removeChild(l.stateNode)}catch(c){Ae(l,t,c)}break;case 18:De!==null&&(St?(e=De,Fh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),La(e)):Fh(De,l.stateNode));break;case 4:i=De,a=St,De=l.stateNode.containerInfo,St=!0,Rl(e,t,l),De=i,St=a;break;case 0:case 11:case 14:case 15:qe||Zl(2,l,t),qe||Zl(4,l,t),Rl(e,t,l);break;case 1:qe||(ul(l,t),i=l.stateNode,typeof i.componentWillUnmount=="function"&&lh(l,t,i)),Rl(e,t,l);break;case 21:Rl(e,t,l);break;case 22:qe=(i=qe)||l.memoizedState!==null,Rl(e,t,l),qe=i;break;default:Rl(e,t,l)}}function uh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{La(e)}catch(l){Ae(t,t.return,l)}}function Ib(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sh),t;default:throw Error(o(435,e.tag))}}function pr(e,t){var l=Ib(e);t.forEach(function(i){var a=nm.bind(null,e,i);l.has(i)||(l.add(i),i.then(a,a))})}function Bt(e,t){var l=t.deletions;if(l!==null)for(var i=0;i<l.length;i++){var a=l[i],c=e,f=t,p=f;e:for(;p!==null;){switch(p.tag){case 27:if(ti(p.type)){De=p.stateNode,St=!1;break e}break;case 5:De=p.stateNode,St=!1;break e;case 3:case 4:De=p.stateNode.containerInfo,St=!0;break e}p=p.return}if(De===null)throw Error(o(160));rh(c,f,a),De=null,St=!1,c=a.alternate,c!==null&&(c.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)dh(t,e),t=t.sibling}var el=null;function dh(e,t){var l=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bt(t,e),$t(e),i&4&&(Zl(3,e,e.return),Ea(3,e),Zl(5,e,e.return));break;case 1:Bt(t,e),$t(e),i&512&&(qe||l===null||ul(l,l.return)),i&64&&Tl&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?i:l.concat(i))));break;case 26:var a=el;if(Bt(t,e),$t(e),i&512&&(qe||l===null||ul(l,l.return)),i&4){var c=l!==null?l.memoizedState:null;if(i=e.memoizedState,l===null)if(i===null)if(e.stateNode===null){e:{i=e.type,l=e.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":c=a.getElementsByTagName("title")[0],(!c||c[Kn]||c[ct]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=a.createElement(i),a.head.insertBefore(c,a.querySelector("head > title"))),it(c,i,l),c[ct]=e,Ke(c),i=c;break e;case"link":var f=ap("link","href",a).get(i+(l.href||""));if(f){for(var p=0;p<f.length;p++)if(c=f[p],c.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&c.getAttribute("rel")===(l.rel==null?null:l.rel)&&c.getAttribute("title")===(l.title==null?null:l.title)&&c.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){f.splice(p,1);break t}}c=a.createElement(i),it(c,i,l),a.head.appendChild(c);break;case"meta":if(f=ap("meta","content",a).get(i+(l.content||""))){for(p=0;p<f.length;p++)if(c=f[p],c.getAttribute("content")===(l.content==null?null:""+l.content)&&c.getAttribute("name")===(l.name==null?null:l.name)&&c.getAttribute("property")===(l.property==null?null:l.property)&&c.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&c.getAttribute("charset")===(l.charSet==null?null:l.charSet)){f.splice(p,1);break t}}c=a.createElement(i),it(c,i,l),a.head.appendChild(c);break;default:throw Error(o(468,i))}c[ct]=e,Ke(c),i=c}e.stateNode=i}else sp(a,e.type,e.stateNode);else e.stateNode=np(a,i,e.memoizedProps);else c!==i?(c===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):c.count--,i===null?sp(a,e.type,e.stateNode):np(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ur(e,e.memoizedProps,l.memoizedProps)}break;case 27:Bt(t,e),$t(e),i&512&&(qe||l===null||ul(l,l.return)),l!==null&&i&4&&ur(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Bt(t,e),$t(e),i&512&&(qe||l===null||ul(l,l.return)),e.flags&32){a=e.stateNode;try{ln(a,"")}catch(O){Ae(e,e.return,O)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,ur(e,a,l!==null?l.memoizedProps:a)),i&1024&&(hr=!0);break;case 6:if(Bt(t,e),$t(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,l=e.stateNode;try{l.nodeValue=i}catch(O){Ae(e,e.return,O)}}break;case 3:if(po=null,a=el,el=fo(t.containerInfo),Bt(t,e),el=a,$t(e),i&4&&l!==null&&l.memoizedState.isDehydrated)try{La(t.containerInfo)}catch(O){Ae(e,e.return,O)}hr&&(hr=!1,fh(e));break;case 4:i=el,el=fo(e.stateNode.containerInfo),Bt(t,e),$t(e),el=i;break;case 12:Bt(t,e),$t(e);break;case 13:Bt(t,e),$t(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(yr=ol()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,pr(e,i)));break;case 22:a=e.memoizedState!==null;var b=l!==null&&l.memoizedState!==null,C=Tl,w=qe;if(Tl=C||a,qe=w||b,Bt(t,e),qe=w,Tl=C,$t(e),i&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(l===null||b||Tl||qe||Di(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){b=l=t;try{if(c=b.stateNode,a)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{p=b.stateNode;var z=b.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null;p.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(O){Ae(b,b.return,O)}}}else if(t.tag===6){if(l===null){b=t;try{b.stateNode.nodeValue=a?"":b.memoizedProps}catch(O){Ae(b,b.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(l=i.retryQueue,l!==null&&(i.retryQueue=null,pr(e,l))));break;case 19:Bt(t,e),$t(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,pr(e,i)));break;case 30:break;case 21:break;default:Bt(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{for(var l,i=e.return;i!==null;){if(nh(i)){l=i;break}i=i.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var a=l.stateNode,c=dr(e);Ps(e,c,a);break;case 5:var f=l.stateNode;l.flags&32&&(ln(f,""),l.flags&=-33);var p=dr(e);Ps(e,p,f);break;case 3:case 4:var b=l.stateNode.containerInfo,C=dr(e);fr(e,C,b);break;default:throw Error(o(161))}}catch(w){Ae(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;fh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Kl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)oh(e,t.alternate,t),t=t.sibling}function Di(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zl(4,t,t.return),Di(t);break;case 1:ul(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&lh(t,t.return,l),Di(t);break;case 27:Ba(t.stateNode);case 26:case 5:ul(t,t.return),Di(t);break;case 22:t.memoizedState===null&&Di(t);break;case 30:Di(t);break;default:Di(t)}e=e.sibling}}function Il(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,c=t,f=c.flags;switch(c.tag){case 0:case 11:case 15:Il(a,c,l),Ea(4,c);break;case 1:if(Il(a,c,l),i=c,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(C){Ae(i,i.return,C)}if(i=c,a=i.updateQueue,a!==null){var p=i.stateNode;try{var b=a.shared.hiddenCallbacks;if(b!==null)for(a.shared.hiddenCallbacks=null,a=0;a<b.length;a++)qd(b[a],p)}catch(C){Ae(i,i.return,C)}}l&&f&64&&th(c),Ca(c,c.return);break;case 27:ah(c);case 26:case 5:Il(a,c,l),l&&i===null&&f&4&&ih(c),Ca(c,c.return);break;case 12:Il(a,c,l);break;case 13:Il(a,c,l),l&&f&4&&uh(a,c);break;case 22:c.memoizedState===null&&Il(a,c,l),Ca(c,c.return);break;case 30:break;default:Il(a,c,l)}t=t.sibling}}function vr(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&ra(l))}function br(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ra(e))}function dl(e,t,l,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hh(e,t,l,i),t=t.sibling}function hh(e,t,l,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:dl(e,t,l,i),a&2048&&Ea(9,t);break;case 1:dl(e,t,l,i);break;case 3:dl(e,t,l,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ra(e)));break;case 12:if(a&2048){dl(e,t,l,i),e=t.stateNode;try{var c=t.memoizedProps,f=c.id,p=c.onPostCommit;typeof p=="function"&&p(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Ae(t,t.return,b)}}else dl(e,t,l,i);break;case 13:dl(e,t,l,i);break;case 23:break;case 22:c=t.stateNode,f=t.alternate,t.memoizedState!==null?c._visibility&2?dl(e,t,l,i):Aa(e,t):c._visibility&2?dl(e,t,l,i):(c._visibility|=2,Sn(e,t,l,i,(t.subtreeFlags&10256)!==0)),a&2048&&vr(f,t);break;case 24:dl(e,t,l,i),a&2048&&br(t.alternate,t);break;default:dl(e,t,l,i)}}function Sn(e,t,l,i,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var c=e,f=t,p=l,b=i,C=f.flags;switch(f.tag){case 0:case 11:case 15:Sn(c,f,p,b,a),Ea(8,f);break;case 23:break;case 22:var w=f.stateNode;f.memoizedState!==null?w._visibility&2?Sn(c,f,p,b,a):Aa(c,f):(w._visibility|=2,Sn(c,f,p,b,a)),a&&C&2048&&vr(f.alternate,f);break;case 24:Sn(c,f,p,b,a),a&&C&2048&&br(f.alternate,f);break;default:Sn(c,f,p,b,a)}t=t.sibling}}function Aa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,i=t,a=i.flags;switch(i.tag){case 22:Aa(l,i),a&2048&&vr(i.alternate,i);break;case 24:Aa(l,i),a&2048&&br(i.alternate,i);break;default:Aa(l,i)}t=t.sibling}}var Oa=8192;function En(e){if(e.subtreeFlags&Oa)for(e=e.child;e!==null;)ph(e),e=e.sibling}function ph(e){switch(e.tag){case 26:En(e),e.flags&Oa&&e.memoizedState!==null&&$m(el,e.memoizedState,e.memoizedProps);break;case 5:En(e);break;case 3:case 4:var t=el;el=fo(e.stateNode.containerInfo),En(e),el=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Oa,Oa=16777216,En(e),Oa=t):En(e));break;default:En(e)}}function vh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var i=t[l];Je=i,mh(i,e)}vh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bh(e),e=e.sibling}function bh(e){switch(e.tag){case 0:case 11:case 15:wa(e),e.flags&2048&&Zl(9,e,e.return);break;case 3:wa(e);break;case 12:wa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ws(e)):wa(e);break;default:wa(e)}}function Ws(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var i=t[l];Je=i,mh(i,e)}vh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zl(8,t,t.return),Ws(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Ws(t));break;default:Ws(t)}e=e.sibling}}function mh(e,t){for(;Je!==null;){var l=Je;switch(l.tag){case 0:case 11:case 15:Zl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var i=l.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ra(l.memoizedState.cache)}if(i=l.child,i!==null)i.return=l,Je=i;else e:for(l=e;Je!==null;){i=Je;var a=i.sibling,c=i.return;if(ch(i),i===l){Je=null;break e}if(a!==null){a.return=c,Je=a;break e}Je=c}}}var Jb={getCacheForType:function(e){var t=rt(Ge),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},Fb=typeof WeakMap=="function"?WeakMap:Map,be=0,Oe=null,te=null,se=0,me=0,kt=null,Jl=!1,Cn=!1,mr=!1,zl=0,Ne=0,Fl=0,Mi=0,gr=0,Zt=0,An=0,Ta=null,Et=null,_r=!1,yr=0,eo=1/0,to=null,Pl=null,lt=0,Wl=null,On=null,wn=0,xr=0,Sr=null,gh=null,Ra=0,Er=null;function Vt(){if((be&2)!==0&&se!==0)return se&-se;if(T.T!==null){var e=pn;return e!==0?e:zr()}return Bu()}function _h(){Zt===0&&(Zt=(se&536870912)===0||he?Ru():536870912);var e=Qt.current;return e!==null&&(e.flags|=32),Zt}function Nt(e,t,l){(e===Oe&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Tn(e,0),ei(e,se,Zt,!1)),Zn(e,l),((be&2)===0||e!==Oe)&&(e===Oe&&((be&2)===0&&(Mi|=l),Ne===4&&ei(e,se,Zt,!1)),fl(e))}function yh(e,t,l){if((be&6)!==0)throw Error(o(327));var i=!l&&(t&124)===0&&(t&e.expiredLanes)===0||Qn(e,t),a=i?em(e,t):Or(e,t,!0),c=i;do{if(a===0){Cn&&!i&&ei(e,t,0,!1);break}else{if(l=e.current.alternate,c&&!Pb(l)){a=Or(e,t,!1),c=!1;continue}if(a===2){if(c=t,e.errorRecoveryDisabledLanes&c)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var p=e;a=Ta;var b=p.current.memoizedState.isDehydrated;if(b&&(Tn(p,f).flags|=256),f=Or(p,f,!1),f!==2){if(mr&&!b){p.errorRecoveryDisabledLanes|=c,Mi|=c,a=4;break e}c=Et,Et=a,c!==null&&(Et===null?Et=c:Et.push.apply(Et,c))}a=f}if(c=!1,a!==2)continue}}if(a===1){Tn(e,0),ei(e,t,0,!0);break}e:{switch(i=e,c=a,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ei(i,t,Zt,!Jl);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(a=yr+300-ol(),10<a)){if(ei(i,t,Zt,!Jl),fs(i,0,!0)!==0)break e;i.timeoutHandle=Ih(xh.bind(null,i,l,Et,to,_r,t,Zt,Mi,An,Jl,c,2,-0,0),a);break e}xh(i,l,Et,to,_r,t,Zt,Mi,An,Jl,c,0,-0,0)}}break}while(!0);fl(e)}function xh(e,t,l,i,a,c,f,p,b,C,w,z,A,O){if(e.timeoutHandle=-1,z=t.subtreeFlags,(z&8192||(z&16785408)===16785408)&&(Va={stylesheets:null,count:0,unsuspend:Bm},ph(t),z=km(),z!==null)){e.cancelPendingCommit=z(Th.bind(null,e,t,c,l,i,a,f,p,b,w,1,A,O)),ei(e,c,f,!C);return}Th(e,t,c,l,i,a,f,p,b)}function Pb(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var i=0;i<l.length;i++){var a=l[i],c=a.getSnapshot;a=a.value;try{if(!Dt(c(),a))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ei(e,t,l,i){t&=~gr,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var c=31-zt(a),f=1<<c;i[c]=-1,a&=~f}l!==0&&Du(e,l,t)}function lo(){return(be&6)===0?(za(0),!1):!0}function Cr(){if(te!==null){if(me===0)var e=te.return;else e=te,Sl=Oi=null,Lc(e),yn=null,ya=0,e=te;for(;e!==null;)eh(e.alternate,e),e=e.return;te=null}}function Tn(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,bm(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Cr(),Oe=e,te=l=_l(e.current,null),se=t,me=0,kt=null,Jl=!1,Cn=Qn(e,t),mr=!1,An=Zt=gr=Mi=Fl=Ne=0,Et=Ta=null,_r=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-zt(i),c=1<<a;t|=e[a],i&=~c}return zl=t,Cs(),l}function Sh(e,t){W=null,T.H=Ys,t===da||t===Bs?(t=Ud(),me=3):t===kd?(t=Ud(),me=4):me=t===qf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,te===null&&(Ne=1,Ks(e,jt(t,e.current)))}function Eh(){var e=T.H;return T.H=Ys,e===null?Ys:e}function Ch(){var e=T.A;return T.A=Jb,e}function Ar(){Ne=4,Jl||(se&4194048)!==se&&Qt.current!==null||(Cn=!0),(Fl&134217727)===0&&(Mi&134217727)===0||Oe===null||ei(Oe,se,Zt,!1)}function Or(e,t,l){var i=be;be|=2;var a=Eh(),c=Ch();(Oe!==e||se!==t)&&(to=null,Tn(e,t)),t=!1;var f=Ne;e:do try{if(me!==0&&te!==null){var p=te,b=kt;switch(me){case 8:Cr(),f=6;break e;case 3:case 2:case 9:case 6:Qt.current===null&&(t=!0);var C=me;if(me=0,kt=null,Rn(e,p,b,C),l&&Cn){f=0;break e}break;default:C=me,me=0,kt=null,Rn(e,p,b,C)}}Wb(),f=Ne;break}catch(w){Sh(e,w)}while(!0);return t&&e.shellSuspendCounter++,Sl=Oi=null,be=i,T.H=a,T.A=c,te===null&&(Oe=null,se=0,Cs()),f}function Wb(){for(;te!==null;)Ah(te)}function em(e,t){var l=be;be|=2;var i=Eh(),a=Ch();Oe!==e||se!==t?(to=null,eo=ol()+500,Tn(e,t)):Cn=Qn(e,t);e:do try{if(me!==0&&te!==null){t=te;var c=kt;t:switch(me){case 1:me=0,kt=null,Rn(e,t,c,1);break;case 2:case 9:if(Vd(c)){me=0,kt=null,Oh(t);break}t=function(){me!==2&&me!==9||Oe!==e||(me=7),fl(e)},c.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:Vd(c)?(me=0,kt=null,Oh(t)):(me=0,kt=null,Rn(e,t,c,7));break;case 5:var f=null;switch(te.tag){case 26:f=te.memoizedState;case 5:case 27:var p=te;if(!f||op(f)){me=0,kt=null;var b=p.sibling;if(b!==null)te=b;else{var C=p.return;C!==null?(te=C,io(C)):te=null}break t}}me=0,kt=null,Rn(e,t,c,5);break;case 6:me=0,kt=null,Rn(e,t,c,6);break;case 8:Cr(),Ne=6;break e;default:throw Error(o(462))}}tm();break}catch(w){Sh(e,w)}while(!0);return Sl=Oi=null,T.H=i,T.A=a,be=l,te!==null?0:(Oe=null,se=0,Cs(),Ne)}function tm(){for(;te!==null&&!Ev();)Ah(te)}function Ah(e){var t=Pf(e.alternate,e,zl);e.memoizedProps=e.pendingProps,t===null?io(e):te=t}function Oh(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Qf(l,t,t.pendingProps,t.type,void 0,se);break;case 11:t=Qf(l,t,t.pendingProps,t.type.render,t.ref,se);break;case 5:Lc(t);default:eh(l,t),t=te=Od(t,zl),t=Pf(l,t,zl)}e.memoizedProps=e.pendingProps,t===null?io(e):te=t}function Rn(e,t,l,i){Sl=Oi=null,Lc(t),yn=null,ya=0;var a=t.return;try{if(Gb(e,a,t,l,se)){Ne=1,Ks(e,jt(l,e.current)),te=null;return}}catch(c){if(a!==null)throw te=a,c;Ne=1,Ks(e,jt(l,e.current)),te=null;return}t.flags&32768?(he||i===1?e=!0:Cn||(se&536870912)!==0?e=!1:(Jl=e=!0,(i===2||i===9||i===3||i===6)&&(i=Qt.current,i!==null&&i.tag===13&&(i.flags|=16384))),wh(t,e)):io(t)}function io(e){var t=e;do{if((t.flags&32768)!==0){wh(t,Jl);return}e=t.return;var l=Qb(t.alternate,t,zl);if(l!==null){te=l;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);Ne===0&&(Ne=5)}function wh(e,t){do{var l=Zb(e.alternate,e);if(l!==null){l.flags&=32767,te=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){te=e;return}te=e=l}while(e!==null);Ne=6,te=null}function Th(e,t,l,i,a,c,f,p,b){e.cancelPendingCommit=null;do no();while(lt!==0);if((be&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=bc,Bv(e,l,c,f,p,b),e===Oe&&(te=Oe=null,se=0),On=t,Wl=e,wn=l,xr=c,Sr=a,gh=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,am(rs,function(){return Bh(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=T.T,T.T=null,a=U.p,U.p=2,f=be,be|=4;try{Kb(e,t,l)}finally{be=f,U.p=a,T.T=i}}lt=1,Rh(),zh(),Dh()}}function Rh(){if(lt===1){lt=0;var e=Wl,t=On,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var i=U.p;U.p=2;var a=be;be|=4;try{dh(t,e);var c=Ur,f=bd(e.containerInfo),p=c.focusedElem,b=c.selectionRange;if(f!==p&&p&&p.ownerDocument&&vd(p.ownerDocument.documentElement,p)){if(b!==null&&dc(p)){var C=b.start,w=b.end;if(w===void 0&&(w=C),"selectionStart"in p)p.selectionStart=C,p.selectionEnd=Math.min(w,p.value.length);else{var z=p.ownerDocument||document,A=z&&z.defaultView||window;if(A.getSelection){var O=A.getSelection(),K=p.textContent.length,G=Math.min(b.start,K),Se=b.end===void 0?G:Math.min(b.end,K);!O.extend&&G>Se&&(f=Se,Se=G,G=f);var y=pd(p,G),g=pd(p,Se);if(y&&g&&(O.rangeCount!==1||O.anchorNode!==y.node||O.anchorOffset!==y.offset||O.focusNode!==g.node||O.focusOffset!==g.offset)){var E=z.createRange();E.setStart(y.node,y.offset),O.removeAllRanges(),G>Se?(O.addRange(E),O.extend(g.node,g.offset)):(E.setEnd(g.node,g.offset),O.addRange(E))}}}}for(z=[],O=p;O=O.parentNode;)O.nodeType===1&&z.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<z.length;p++){var R=z[p];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}mo=!!Nr,Ur=Nr=null}finally{be=a,U.p=i,T.T=l}}e.current=t,lt=2}}function zh(){if(lt===2){lt=0;var e=Wl,t=On,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var i=U.p;U.p=2;var a=be;be|=4;try{oh(e,t.alternate,t)}finally{be=a,U.p=i,T.T=l}}lt=3}}function Dh(){if(lt===4||lt===3){lt=0,Cv();var e=Wl,t=On,l=wn,i=gh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?lt=5:(lt=0,On=Wl=null,Mh(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Pl=null),Go(l),t=t.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Xn,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=T.T,a=U.p,U.p=2,T.T=null;try{for(var c=e.onRecoverableError,f=0;f<i.length;f++){var p=i[f];c(p.value,{componentStack:p.stack})}}finally{T.T=t,U.p=a}}(wn&3)!==0&&no(),fl(e),a=e.pendingLanes,(l&4194090)!==0&&(a&42)!==0?e===Er?Ra++:(Ra=0,Er=e):Ra=0,za(0)}}function Mh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ra(t)))}function no(e){return Rh(),zh(),Dh(),Bh()}function Bh(){if(lt!==5)return!1;var e=Wl,t=xr;xr=0;var l=Go(wn),i=T.T,a=U.p;try{U.p=32>l?32:l,T.T=null,l=Sr,Sr=null;var c=Wl,f=wn;if(lt=0,On=Wl=null,wn=0,(be&6)!==0)throw Error(o(331));var p=be;if(be|=4,bh(c.current),hh(c,c.current,f,l),be=p,za(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Xn,c)}catch{}return!0}finally{U.p=a,T.T=i,Mh(e,t)}}function $h(e,t,l){t=jt(l,t),t=tr(e.stateNode,t,2),e=Yl(e,t,2),e!==null&&(Zn(e,2),fl(e))}function Ae(e,t,l){if(e.tag===3)$h(e,e,l);else for(;t!==null;){if(t.tag===3){$h(t,e,l);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pl===null||!Pl.has(i))){e=jt(l,e),l=Uf(2),i=Yl(t,l,2),i!==null&&(Hf(l,i,t,e),Zn(i,2),fl(i));break}}t=t.return}}function wr(e,t,l){var i=e.pingCache;if(i===null){i=e.pingCache=new Fb;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(l)||(mr=!0,a.add(l),e=lm.bind(null,e,t,l),t.then(e,e))}function lm(e,t,l){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Oe===e&&(se&l)===l&&(Ne===4||Ne===3&&(se&62914560)===se&&300>ol()-yr?(be&2)===0&&Tn(e,0):gr|=l,An===se&&(An=0)),fl(e)}function kh(e,t){t===0&&(t=zu()),e=un(e,t),e!==null&&(Zn(e,t),fl(e))}function im(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),kh(e,l)}function nm(e,t){var l=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(l=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),kh(e,l)}function am(e,t){return qo(e,t)}var ao=null,zn=null,Tr=!1,so=!1,Rr=!1,Bi=0;function fl(e){e!==zn&&e.next===null&&(zn===null?ao=zn=e:zn=zn.next=e),so=!0,Tr||(Tr=!0,om())}function za(e,t){if(!Rr&&so){Rr=!0;do for(var l=!1,i=ao;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var c=0;else{var f=i.suspendedLanes,p=i.pingedLanes;c=(1<<31-zt(42|e)+1)-1,c&=a&~(f&~p),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(l=!0,Hh(i,c))}else c=se,c=fs(i,i===Oe?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||Qn(i,c)||(l=!0,Hh(i,c));i=i.next}while(l);Rr=!1}}function sm(){Vh()}function Vh(){so=Tr=!1;var e=0;Bi!==0&&(vm()&&(e=Bi),Bi=0);for(var t=ol(),l=null,i=ao;i!==null;){var a=i.next,c=Nh(i,t);c===0?(i.next=null,l===null?ao=a:l.next=a,a===null&&(zn=l)):(l=i,(e!==0||(c&3)!==0)&&(so=!0)),i=a}za(e)}function Nh(e,t){for(var l=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var f=31-zt(c),p=1<<f,b=a[f];b===-1?((p&l)===0||(p&i)!==0)&&(a[f]=Mv(p,t)):b<=t&&(e.expiredLanes|=p),c&=~p}if(t=Oe,l=se,l=fs(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,l===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Lo(i),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Qn(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(i!==null&&Lo(i),Go(l)){case 2:case 8:l=wu;break;case 32:l=rs;break;case 268435456:l=Tu;break;default:l=rs}return i=Uh.bind(null,e),l=qo(l,i),e.callbackPriority=t,e.callbackNode=l,t}return i!==null&&i!==null&&Lo(i),e.callbackPriority=2,e.callbackNode=null,2}function Uh(e,t){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(no()&&e.callbackNode!==l)return null;var i=se;return i=fs(e,e===Oe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(yh(e,i,t),Nh(e,ol()),e.callbackNode!=null&&e.callbackNode===l?Uh.bind(null,e):null)}function Hh(e,t){if(no())return null;yh(e,t,!0)}function om(){mm(function(){(be&6)!==0?qo(Ou,sm):Vh()})}function zr(){return Bi===0&&(Bi=Ru()),Bi}function qh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ms(""+e)}function Lh(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function cm(e,t,l,i,a){if(t==="submit"&&l&&l.stateNode===a){var c=qh((a[_t]||null).action),f=i.submitter;f&&(t=(t=f[_t]||null)?qh(t.formAction):f.getAttribute("formAction"),t!==null&&(c=t,f=null));var p=new xs("action","action",null,i,a);e.push({event:p,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Bi!==0){var b=f?Lh(a,f):new FormData(a);Jc(l,{pending:!0,data:b,method:a.method,action:c},null,b)}}else typeof c=="function"&&(p.preventDefault(),b=f?Lh(a,f):new FormData(a),Jc(l,{pending:!0,data:b,method:a.method,action:c},c,b))},currentTarget:a}]})}}for(var Dr=0;Dr<vc.length;Dr++){var Mr=vc[Dr],rm=Mr.toLowerCase(),um=Mr[0].toUpperCase()+Mr.slice(1);Wt(rm,"on"+um)}Wt(_d,"onAnimationEnd"),Wt(yd,"onAnimationIteration"),Wt(xd,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(wb,"onTransitionRun"),Wt(Tb,"onTransitionStart"),Wt(Rb,"onTransitionCancel"),Wt(Sd,"onTransitionEnd"),Wi("onMouseEnter",["mouseout","mouseover"]),Wi("onMouseLeave",["mouseout","mouseover"]),Wi("onPointerEnter",["pointerout","pointerover"]),Wi("onPointerLeave",["pointerout","pointerover"]),mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mi("onBeforeInput",["compositionend","keypress","textInput","paste"]),mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Da));function jh(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var i=e[l],a=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var f=i.length-1;0<=f;f--){var p=i[f],b=p.instance,C=p.currentTarget;if(p=p.listener,b!==c&&a.isPropagationStopped())break e;c=p,a.currentTarget=C;try{c(a)}catch(w){Zs(w)}a.currentTarget=null,c=b}else for(f=0;f<i.length;f++){if(p=i[f],b=p.instance,C=p.currentTarget,p=p.listener,b!==c&&a.isPropagationStopped())break e;c=p,a.currentTarget=C;try{c(a)}catch(w){Zs(w)}a.currentTarget=null,c=b}}}}function le(e,t){var l=t[Xo];l===void 0&&(l=t[Xo]=new Set);var i=e+"__bubble";l.has(i)||(Yh(t,e,2,!1),l.add(i))}function Br(e,t,l){var i=0;t&&(i|=4),Yh(l,e,i,t)}var oo="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[oo]){e[oo]=!0,ku.forEach(function(l){l!=="selectionchange"&&(dm.has(l)||Br(l,!1,e),Br(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oo]||(t[oo]=!0,Br("selectionchange",!1,t))}}function Yh(e,t,l,i){switch(hp(t)){case 2:var a=Um;break;case 8:a=Hm;break;default:a=Kr}l=a.bind(null,t,l,e),a=void 0,!lc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,l,{capture:!0,passive:a}):e.addEventListener(t,l,!0):a!==void 0?e.addEventListener(t,l,{passive:a}):e.addEventListener(t,l,!1)}function kr(e,t,l,i,a){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var p=i.stateNode.containerInfo;if(p===a)break;if(f===4)for(f=i.return;f!==null;){var b=f.tag;if((b===3||b===4)&&f.stateNode.containerInfo===a)return;f=f.return}for(;p!==null;){if(f=Ji(p),f===null)return;if(b=f.tag,b===5||b===6||b===26||b===27){i=c=f;continue e}p=p.parentNode}}i=i.return}Iu(function(){var C=c,w=ec(l),z=[];e:{var A=Ed.get(e);if(A!==void 0){var O=xs,K=e;switch(e){case"keypress":if(_s(l)===0)break e;case"keydown":case"keyup":O=ab;break;case"focusin":K="focus",O=sc;break;case"focusout":K="blur",O=sc;break;case"beforeblur":case"afterblur":O=sc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=cb;break;case _d:case yd:case xd:O=Jv;break;case Sd:O=ub;break;case"scroll":case"scrollend":O=Xv;break;case"wheel":O=fb;break;case"copy":case"cut":case"paste":O=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=ed;break;case"toggle":case"beforetoggle":O=pb}var G=(t&4)!==0,Se=!G&&(e==="scroll"||e==="scrollend"),y=G?A!==null?A+"Capture":null:A;G=[];for(var g=C,E;g!==null;){var R=g;if(E=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||E===null||y===null||(R=Jn(g,y),R!=null&&G.push(Ma(g,R,E))),Se)break;g=g.return}0<G.length&&(A=new O(A,K,null,l,w),z.push({event:A,listeners:G}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",A&&l!==Wo&&(K=l.relatedTarget||l.fromElement)&&(Ji(K)||K[Ii]))break e;if((O||A)&&(A=w.window===w?w:(A=w.ownerDocument)?A.defaultView||A.parentWindow:window,O?(K=l.relatedTarget||l.toElement,O=C,K=K?Ji(K):null,K!==null&&(Se=r(K),G=K.tag,K!==Se||G!==5&&G!==27&&G!==6)&&(K=null)):(O=null,K=C),O!==K)){if(G=Pu,R="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(G=ed,R="onPointerLeave",y="onPointerEnter",g="pointer"),Se=O==null?A:In(O),E=K==null?A:In(K),A=new G(R,g+"leave",O,l,w),A.target=Se,A.relatedTarget=E,R=null,Ji(w)===C&&(G=new G(y,g+"enter",K,l,w),G.target=E,G.relatedTarget=Se,R=G),Se=R,O&&K)t:{for(G=O,y=K,g=0,E=G;E;E=Dn(E))g++;for(E=0,R=y;R;R=Dn(R))E++;for(;0<g-E;)G=Dn(G),g--;for(;0<E-g;)y=Dn(y),E--;for(;g--;){if(G===y||y!==null&&G===y.alternate)break t;G=Dn(G),y=Dn(y)}G=null}else G=null;O!==null&&Gh(z,A,O,G,!1),K!==null&&Se!==null&&Gh(z,Se,K,G,!0)}}e:{if(A=C?In(C):window,O=A.nodeName&&A.nodeName.toLowerCase(),O==="select"||O==="input"&&A.type==="file")var L=cd;else if(sd(A))if(rd)L=Cb;else{L=Sb;var ee=xb}else O=A.nodeName,!O||O.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?C&&Po(C.elementType)&&(L=cd):L=Eb;if(L&&(L=L(e,C))){od(z,L,l,w);break e}ee&&ee(e,A,C),e==="focusout"&&C&&A.type==="number"&&C.memoizedProps.value!=null&&Fo(A,"number",A.value)}switch(ee=C?In(C):window,e){case"focusin":(sd(ee)||ee.contentEditable==="true")&&(on=ee,fc=C,na=null);break;case"focusout":na=fc=on=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,md(z,l,w);break;case"selectionchange":if(Ob)break;case"keydown":case"keyup":md(z,l,w)}var j;if(cc)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else sn?nd(e,l)&&(X="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(X="onCompositionStart");X&&(td&&l.locale!=="ko"&&(sn||X!=="onCompositionStart"?X==="onCompositionEnd"&&sn&&(j=Ju()):(Hl=w,ic="value"in Hl?Hl.value:Hl.textContent,sn=!0)),ee=co(C,X),0<ee.length&&(X=new Wu(X,e,null,l,w),z.push({event:X,listeners:ee}),j?X.data=j:(j=ad(l),j!==null&&(X.data=j)))),(j=bb?mb(e,l):gb(e,l))&&(X=co(C,"onBeforeInput"),0<X.length&&(ee=new Wu("onBeforeInput","beforeinput",null,l,w),z.push({event:ee,listeners:X}),ee.data=j)),cm(z,e,C,l,w)}jh(z,t)})}function Ma(e,t,l){return{instance:e,listener:t,currentTarget:l}}function co(e,t){for(var l=t+"Capture",i=[];e!==null;){var a=e,c=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||c===null||(a=Jn(e,l),a!=null&&i.unshift(Ma(e,a,c)),a=Jn(e,t),a!=null&&i.push(Ma(e,a,c))),e.tag===3)return i;e=e.return}return[]}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gh(e,t,l,i,a){for(var c=t._reactName,f=[];l!==null&&l!==i;){var p=l,b=p.alternate,C=p.stateNode;if(p=p.tag,b!==null&&b===i)break;p!==5&&p!==26&&p!==27||C===null||(b=C,a?(C=Jn(l,c),C!=null&&f.unshift(Ma(l,C,b))):a||(C=Jn(l,c),C!=null&&f.push(Ma(l,C,b)))),l=l.return}f.length!==0&&e.push({event:t,listeners:f})}var fm=/\r\n?/g,hm=/\u0000|\uFFFD/g;function Xh(e){return(typeof e=="string"?e:""+e).replace(fm,`
`).replace(hm,"")}function Qh(e,t){return t=Xh(t),Xh(e)===t}function ro(){}function xe(e,t,l,i,a,c){switch(l){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ln(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ln(e,""+i);break;case"className":ps(e,"class",i);break;case"tabIndex":ps(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ps(e,l,i);break;case"style":Zu(e,i,c);break;case"data":if(t!=="object"){ps(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(l);break}i=ms(""+i),e.setAttribute(l,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(l==="formAction"?(t!=="input"&&xe(e,t,"name",a.name,a,null),xe(e,t,"formEncType",a.formEncType,a,null),xe(e,t,"formMethod",a.formMethod,a,null),xe(e,t,"formTarget",a.formTarget,a,null)):(xe(e,t,"encType",a.encType,a,null),xe(e,t,"method",a.method,a,null),xe(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(l);break}i=ms(""+i),e.setAttribute(l,i);break;case"onClick":i!=null&&(e.onclick=ro);break;case"onScroll":i!=null&&le("scroll",e);break;case"onScrollEnd":i!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(l=i.__html,l!=null){if(a.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}l=ms(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(l,""+i):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":i===!0?e.setAttribute(l,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(l,i):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(l,i):e.removeAttribute(l);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(l):e.setAttribute(l,i);break;case"popover":le("beforetoggle",e),le("toggle",e),hs(e,"popover",i);break;case"xlinkActuate":ml(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ml(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ml(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ml(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ml(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ml(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ml(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ml(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ml(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":hs(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Yv.get(l)||l,hs(e,l,i))}}function Vr(e,t,l,i,a,c){switch(l){case"style":Zu(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(l=i.__html,l!=null){if(a.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"children":typeof i=="string"?ln(e,i):(typeof i=="number"||typeof i=="bigint")&&ln(e,""+i);break;case"onScroll":i!=null&&le("scroll",e);break;case"onScrollEnd":i!=null&&le("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ro);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vu.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),t=l.slice(2,a?l.length-7:void 0),c=e[_t]||null,c=c!=null?c[l]:null,typeof c=="function"&&e.removeEventListener(t,c,a),typeof i=="function")){typeof c!="function"&&c!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,i,a);break e}l in e?e[l]=i:i===!0?e.setAttribute(l,""):hs(e,l,i)}}}function it(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var i=!1,a=!1,c;for(c in l)if(l.hasOwnProperty(c)){var f=l[c];if(f!=null)switch(c){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:xe(e,t,c,f,l,null)}}a&&xe(e,t,"srcSet",l.srcSet,l,null),i&&xe(e,t,"src",l.src,l,null);return;case"input":le("invalid",e);var p=c=f=a=null,b=null,C=null;for(i in l)if(l.hasOwnProperty(i)){var w=l[i];if(w!=null)switch(i){case"name":a=w;break;case"type":f=w;break;case"checked":b=w;break;case"defaultChecked":C=w;break;case"value":c=w;break;case"defaultValue":p=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(o(137,t));break;default:xe(e,t,i,w,l,null)}}Yu(e,c,p,b,C,f,a,!1),vs(e);return;case"select":le("invalid",e),i=f=c=null;for(a in l)if(l.hasOwnProperty(a)&&(p=l[a],p!=null))switch(a){case"value":c=p;break;case"defaultValue":f=p;break;case"multiple":i=p;default:xe(e,t,a,p,l,null)}t=c,l=f,e.multiple=!!i,t!=null?tn(e,!!i,t,!1):l!=null&&tn(e,!!i,l,!0);return;case"textarea":le("invalid",e),c=a=i=null;for(f in l)if(l.hasOwnProperty(f)&&(p=l[f],p!=null))switch(f){case"value":i=p;break;case"defaultValue":a=p;break;case"children":c=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(o(91));break;default:xe(e,t,f,p,l,null)}Xu(e,i,a,c),vs(e);return;case"option":for(b in l)if(l.hasOwnProperty(b)&&(i=l[b],i!=null))switch(b){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:xe(e,t,b,i,l,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(i=0;i<Da.length;i++)le(Da[i],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in l)if(l.hasOwnProperty(C)&&(i=l[C],i!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:xe(e,t,C,i,l,null)}return;default:if(Po(t)){for(w in l)l.hasOwnProperty(w)&&(i=l[w],i!==void 0&&Vr(e,t,w,i,l,void 0));return}}for(p in l)l.hasOwnProperty(p)&&(i=l[p],i!=null&&xe(e,t,p,i,l,null))}function pm(e,t,l,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,c=null,f=null,p=null,b=null,C=null,w=null;for(O in l){var z=l[O];if(l.hasOwnProperty(O)&&z!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":b=z;default:i.hasOwnProperty(O)||xe(e,t,O,null,i,z)}}for(var A in i){var O=i[A];if(z=l[A],i.hasOwnProperty(A)&&(O!=null||z!=null))switch(A){case"type":c=O;break;case"name":a=O;break;case"checked":C=O;break;case"defaultChecked":w=O;break;case"value":f=O;break;case"defaultValue":p=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:O!==z&&xe(e,t,A,O,i,z)}}Jo(e,f,p,b,C,w,c,a);return;case"select":O=f=p=A=null;for(c in l)if(b=l[c],l.hasOwnProperty(c)&&b!=null)switch(c){case"value":break;case"multiple":O=b;default:i.hasOwnProperty(c)||xe(e,t,c,null,i,b)}for(a in i)if(c=i[a],b=l[a],i.hasOwnProperty(a)&&(c!=null||b!=null))switch(a){case"value":A=c;break;case"defaultValue":p=c;break;case"multiple":f=c;default:c!==b&&xe(e,t,a,c,i,b)}t=p,l=f,i=O,A!=null?tn(e,!!l,A,!1):!!i!=!!l&&(t!=null?tn(e,!!l,t,!0):tn(e,!!l,l?[]:"",!1));return;case"textarea":O=A=null;for(p in l)if(a=l[p],l.hasOwnProperty(p)&&a!=null&&!i.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:xe(e,t,p,null,i,a)}for(f in i)if(a=i[f],c=l[f],i.hasOwnProperty(f)&&(a!=null||c!=null))switch(f){case"value":A=a;break;case"defaultValue":O=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(o(91));break;default:a!==c&&xe(e,t,f,a,i,c)}Gu(e,A,O);return;case"option":for(var K in l)if(A=l[K],l.hasOwnProperty(K)&&A!=null&&!i.hasOwnProperty(K))switch(K){case"selected":e.selected=!1;break;default:xe(e,t,K,null,i,A)}for(b in i)if(A=i[b],O=l[b],i.hasOwnProperty(b)&&A!==O&&(A!=null||O!=null))switch(b){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:xe(e,t,b,A,i,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in l)A=l[G],l.hasOwnProperty(G)&&A!=null&&!i.hasOwnProperty(G)&&xe(e,t,G,null,i,A);for(C in i)if(A=i[C],O=l[C],i.hasOwnProperty(C)&&A!==O&&(A!=null||O!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:xe(e,t,C,A,i,O)}return;default:if(Po(t)){for(var Se in l)A=l[Se],l.hasOwnProperty(Se)&&A!==void 0&&!i.hasOwnProperty(Se)&&Vr(e,t,Se,void 0,i,A);for(w in i)A=i[w],O=l[w],!i.hasOwnProperty(w)||A===O||A===void 0&&O===void 0||Vr(e,t,w,A,i,O);return}}for(var y in l)A=l[y],l.hasOwnProperty(y)&&A!=null&&!i.hasOwnProperty(y)&&xe(e,t,y,null,i,A);for(z in i)A=i[z],O=l[z],!i.hasOwnProperty(z)||A===O||A==null&&O==null||xe(e,t,z,A,i,O)}var Nr=null,Ur=null;function uo(e){return e.nodeType===9?e:e.ownerDocument}function Zh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Hr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qr=null;function vm(){var e=window.event;return e&&e.type==="popstate"?e===qr?!1:(qr=e,!0):(qr=null,!1)}var Ih=typeof setTimeout=="function"?setTimeout:void 0,bm=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,mm=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(e){return Jh.resolve(null).then(e).catch(gm)}:Ih;function gm(e){setTimeout(function(){throw e})}function ti(e){return e==="head"}function Fh(e,t){var l=t,i=0,a=0;do{var c=l.nextSibling;if(e.removeChild(l),c&&c.nodeType===8)if(l=c.data,l==="/$"){if(0<i&&8>i){l=i;var f=e.ownerDocument;if(l&1&&Ba(f.documentElement),l&2&&Ba(f.body),l&4)for(l=f.head,Ba(l),f=l.firstChild;f;){var p=f.nextSibling,b=f.nodeName;f[Kn]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||l.removeChild(f),f=p}}if(a===0){e.removeChild(c),La(t);return}a--}else l==="$"||l==="$?"||l==="$!"?a++:i=l.charCodeAt(0)-48;else i=0;l=c}while(l);La(t)}function Lr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Lr(l),Qo(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function _m(e,t,l,i){for(;e.nodeType===1;){var a=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Kn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=tl(e.nextSibling),e===null)break}return null}function ym(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=tl(e.nextSibling),e===null))return null;return e}function jr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function xm(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var i=function(){t(),l.removeEventListener("DOMContentLoaded",i)};l.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function tl(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Yr=null;function Ph(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function Wh(e,t,l){switch(t=uo(l),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ba(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qo(e)}var Kt=new Map,ep=new Set;function fo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Dl=U.d;U.d={f:Sm,r:Em,D:Cm,C:Am,L:Om,m:wm,X:Rm,S:Tm,M:zm};function Sm(){var e=Dl.f(),t=lo();return e||t}function Em(e){var t=Fi(e);t!==null&&t.tag===5&&t.type==="form"?yf(t):Dl.r(e)}var Mn=typeof document>"u"?null:document;function tp(e,t,l){var i=Mn;if(i&&typeof t=="string"&&t){var a=Lt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),ep.has(a)||(ep.add(a),e={rel:e,crossOrigin:l,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),it(t,"link",e),Ke(t),i.head.appendChild(t)))}}function Cm(e){Dl.D(e),tp("dns-prefetch",e,null)}function Am(e,t){Dl.C(e,t),tp("preconnect",e,t)}function Om(e,t,l){Dl.L(e,t,l);var i=Mn;if(i&&e&&t){var a='link[rel="preload"][as="'+Lt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+Lt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+Lt(l.imageSizes)+'"]')):a+='[href="'+Lt(e)+'"]';var c=a;switch(t){case"style":c=Bn(e);break;case"script":c=$n(e)}Kt.has(c)||(e=D({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Kt.set(c,e),i.querySelector(a)!==null||t==="style"&&i.querySelector($a(c))||t==="script"&&i.querySelector(ka(c))||(t=i.createElement("link"),it(t,"link",e),Ke(t),i.head.appendChild(t)))}}function wm(e,t){Dl.m(e,t);var l=Mn;if(l&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Lt(i)+'"][href="'+Lt(e)+'"]',c=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=$n(e)}if(!Kt.has(c)&&(e=D({rel:"modulepreload",href:e},t),Kt.set(c,e),l.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ka(c)))return}i=l.createElement("link"),it(i,"link",e),Ke(i),l.head.appendChild(i)}}}function Tm(e,t,l){Dl.S(e,t,l);var i=Mn;if(i&&e){var a=Pi(i).hoistableStyles,c=Bn(e);t=t||"default";var f=a.get(c);if(!f){var p={loading:0,preload:null};if(f=i.querySelector($a(c)))p.loading=5;else{e=D({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Kt.get(c))&&Gr(e,l);var b=f=i.createElement("link");Ke(b),it(b,"link",e),b._p=new Promise(function(C,w){b.onload=C,b.onerror=w}),b.addEventListener("load",function(){p.loading|=1}),b.addEventListener("error",function(){p.loading|=2}),p.loading|=4,ho(f,t,i)}f={type:"stylesheet",instance:f,count:1,state:p},a.set(c,f)}}}function Rm(e,t){Dl.X(e,t);var l=Mn;if(l&&e){var i=Pi(l).hoistableScripts,a=$n(e),c=i.get(a);c||(c=l.querySelector(ka(a)),c||(e=D({src:e,async:!0},t),(t=Kt.get(a))&&Xr(e,t),c=l.createElement("script"),Ke(c),it(c,"link",e),l.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(a,c))}}function zm(e,t){Dl.M(e,t);var l=Mn;if(l&&e){var i=Pi(l).hoistableScripts,a=$n(e),c=i.get(a);c||(c=l.querySelector(ka(a)),c||(e=D({src:e,async:!0,type:"module"},t),(t=Kt.get(a))&&Xr(e,t),c=l.createElement("script"),Ke(c),it(c,"link",e),l.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(a,c))}}function lp(e,t,l,i){var a=(a=I.current)?fo(a):null;if(!a)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Bn(l.href),l=Pi(a).hoistableStyles,i=l.get(t),i||(i={type:"style",instance:null,count:0,state:null},l.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Bn(l.href);var c=Pi(a).hoistableStyles,f=c.get(e);if(f||(a=a.ownerDocument||a,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,f),(c=a.querySelector($a(e)))&&!c._p&&(f.instance=c,f.state.loading=5),Kt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Kt.set(e,l),c||Dm(a,e,l,f.state))),t&&i===null)throw Error(o(528,""));return f}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=$n(l),l=Pi(a).hoistableScripts,i=l.get(t),i||(i={type:"script",instance:null,count:0,state:null},l.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Bn(e){return'href="'+Lt(e)+'"'}function $a(e){return'link[rel="stylesheet"]['+e+"]"}function ip(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Dm(e,t,l,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),it(t,"link",l),Ke(t),e.head.appendChild(t))}function $n(e){return'[src="'+Lt(e)+'"]'}function ka(e){return"script[async]"+e}function np(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Lt(l.href)+'"]');if(i)return t.instance=i,Ke(i),i;var a=D({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ke(i),it(i,"style",a),ho(i,l.precedence,e),t.instance=i;case"stylesheet":a=Bn(l.href);var c=e.querySelector($a(a));if(c)return t.state.loading|=4,t.instance=c,Ke(c),c;i=ip(l),(a=Kt.get(a))&&Gr(i,a),c=(e.ownerDocument||e).createElement("link"),Ke(c);var f=c;return f._p=new Promise(function(p,b){f.onload=p,f.onerror=b}),it(c,"link",i),t.state.loading|=4,ho(c,l.precedence,e),t.instance=c;case"script":return c=$n(l.src),(a=e.querySelector(ka(c)))?(t.instance=a,Ke(a),a):(i=l,(a=Kt.get(c))&&(i=D({},l),Xr(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ke(a),it(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ho(i,l.precedence,e));return t.instance}function ho(e,t,l){for(var i=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,c=a,f=0;f<i.length;f++){var p=i[f];if(p.dataset.precedence===t)c=p;else if(c!==a)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Gr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var po=null;function ap(e,t,l){if(po===null){var i=new Map,a=po=new Map;a.set(l,i)}else a=po,i=a.get(l),i||(i=new Map,a.set(l,i));if(i.has(e))return i;for(i.set(e,null),l=l.getElementsByTagName(e),a=0;a<l.length;a++){var c=l[a];if(!(c[Kn]||c[ct]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var f=c.getAttribute(t)||"";f=e+f;var p=i.get(f);p?p.push(c):i.set(f,[c])}}return i}function sp(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Mm(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function op(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Va=null;function Bm(){}function $m(e,t,l){if(Va===null)throw Error(o(475));var i=Va;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=Bn(l.href),c=e.querySelector($a(a));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=vo.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=c,Ke(c);return}c=e.ownerDocument||e,l=ip(l),(a=Kt.get(a))&&Gr(l,a),c=c.createElement("link"),Ke(c);var f=c;f._p=new Promise(function(p,b){f.onload=p,f.onerror=b}),it(c,"link",l),t.instance=c}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=vo.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function km(){if(Va===null)throw Error(o(475));var e=Va;return e.stylesheets&&e.count===0&&Qr(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&Qr(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function vo(){if(this.count--,this.count===0){if(this.stylesheets)Qr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bo=null;function Qr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bo=new Map,t.forEach(Vm,e),bo=null,vo.call(e))}function Vm(e,t){if(!(t.state.loading&4)){var l=bo.get(e);if(l)var i=l.get(null);else{l=new Map,bo.set(e,l);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<a.length;c++){var f=a[c];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(l.set(f.dataset.precedence,f),i=f)}i&&l.set(null,i)}a=t.instance,f=a.getAttribute("data-precedence"),c=l.get(f)||i,c===i&&l.set(null,a),l.set(f,a),this.count++,i=vo.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),c?c.parentNode.insertBefore(a,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Na={$$typeof:Ue,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Nm(e,t,l,i,a,c,f,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jo(0),this.hiddenUpdates=jo(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=c,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function cp(e,t,l,i,a,c,f,p,b,C,w,z){return e=new Nm(e,t,l,f,p,b,C,z),t=1,c===!0&&(t|=24),c=Mt(3,null,null,t),e.current=c,c.stateNode=e,t=wc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:l,cache:t},Dc(c),e}function rp(e){return e?(e=dn,e):dn}function up(e,t,l,i,a,c){a=rp(a),i.context===null?i.context=a:i.pendingContext=a,i=jl(t),i.payload={element:l},c=c===void 0?null:c,c!==null&&(i.callback=c),l=Yl(e,i,t),l!==null&&(Nt(l,e,t),ha(l,e,t))}function dp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Zr(e,t){dp(e,t),(e=e.alternate)&&dp(e,t)}function fp(e){if(e.tag===13){var t=un(e,67108864);t!==null&&Nt(t,e,67108864),Zr(e,67108864)}}var mo=!0;function Um(e,t,l,i){var a=T.T;T.T=null;var c=U.p;try{U.p=2,Kr(e,t,l,i)}finally{U.p=c,T.T=a}}function Hm(e,t,l,i){var a=T.T;T.T=null;var c=U.p;try{U.p=8,Kr(e,t,l,i)}finally{U.p=c,T.T=a}}function Kr(e,t,l,i){if(mo){var a=Ir(i);if(a===null)kr(e,t,i,go,l),pp(e,i);else if(Lm(a,e,t,l,i))i.stopPropagation();else if(pp(e,i),t&4&&-1<qm.indexOf(e)){for(;a!==null;){var c=Fi(a);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var f=bi(c.pendingLanes);if(f!==0){var p=c;for(p.pendingLanes|=2,p.entangledLanes|=2;f;){var b=1<<31-zt(f);p.entanglements[1]|=b,f&=~b}fl(c),(be&6)===0&&(eo=ol()+500,za(0))}}break;case 13:p=un(c,2),p!==null&&Nt(p,c,2),lo(),Zr(c,2)}if(c=Ir(i),c===null&&kr(e,t,i,go,l),c===a)break;a=c}a!==null&&i.stopPropagation()}else kr(e,t,i,null,l)}}function Ir(e){return e=ec(e),Jr(e)}var go=null;function Jr(e){if(go=null,e=Ji(e),e!==null){var t=r(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=h(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return go=e,null}function hp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Av()){case Ou:return 2;case wu:return 8;case rs:case Ov:return 32;case Tu:return 268435456;default:return 32}default:return 32}}var Fr=!1,li=null,ii=null,ni=null,Ua=new Map,Ha=new Map,ai=[],qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pp(e,t){switch(e){case"focusin":case"focusout":li=null;break;case"dragenter":case"dragleave":ii=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":Ua.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(t.pointerId)}}function qa(e,t,l,i,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:l,eventSystemFlags:i,nativeEvent:c,targetContainers:[a]},t!==null&&(t=Fi(t),t!==null&&fp(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Lm(e,t,l,i,a){switch(t){case"focusin":return li=qa(li,e,t,l,i,a),!0;case"dragenter":return ii=qa(ii,e,t,l,i,a),!0;case"mouseover":return ni=qa(ni,e,t,l,i,a),!0;case"pointerover":var c=a.pointerId;return Ua.set(c,qa(Ua.get(c)||null,e,t,l,i,a)),!0;case"gotpointercapture":return c=a.pointerId,Ha.set(c,qa(Ha.get(c)||null,e,t,l,i,a)),!0}return!1}function vp(e){var t=Ji(e.target);if(t!==null){var l=r(t);if(l!==null){if(t=l.tag,t===13){if(t=h(l),t!==null){e.blockedOn=t,$v(e.priority,function(){if(l.tag===13){var i=Vt();i=Yo(i);var a=un(l,i);a!==null&&Nt(a,l,i),Zr(l,i)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Ir(e.nativeEvent);if(l===null){l=e.nativeEvent;var i=new l.constructor(l.type,l);Wo=i,l.target.dispatchEvent(i),Wo=null}else return t=Fi(l),t!==null&&fp(t),e.blockedOn=l,!1;t.shift()}return!0}function bp(e,t,l){_o(e)&&l.delete(t)}function jm(){Fr=!1,li!==null&&_o(li)&&(li=null),ii!==null&&_o(ii)&&(ii=null),ni!==null&&_o(ni)&&(ni=null),Ua.forEach(bp),Ha.forEach(bp)}function yo(e,t){e.blockedOn===t&&(e.blockedOn=null,Fr||(Fr=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,jm)))}var xo=null;function mp(e){xo!==e&&(xo=e,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){xo===e&&(xo=null);for(var t=0;t<e.length;t+=3){var l=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Jr(i||l)===null)continue;break}var c=Fi(l);c!==null&&(e.splice(t,3),t-=3,Jc(c,{pending:!0,data:a,method:l.method,action:i},i,a))}}))}function La(e){function t(b){return yo(b,e)}li!==null&&yo(li,e),ii!==null&&yo(ii,e),ni!==null&&yo(ni,e),Ua.forEach(t),Ha.forEach(t);for(var l=0;l<ai.length;l++){var i=ai[l];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ai.length&&(l=ai[0],l.blockedOn===null);)vp(l),l.blockedOn===null&&ai.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(i=0;i<l.length;i+=3){var a=l[i],c=l[i+1],f=a[_t]||null;if(typeof c=="function")f||mp(l);else if(f){var p=null;if(c&&c.hasAttribute("formAction")){if(a=c,f=c[_t]||null)p=f.formAction;else if(Jr(a)!==null)continue}else p=f.action;typeof p=="function"?l[i+1]=p:(l.splice(i,3),i-=3),mp(l)}}}function Pr(e){this._internalRoot=e}So.prototype.render=Pr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var l=t.current,i=Vt();up(l,i,e,t,null,null)},So.prototype.unmount=Pr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;up(e.current,2,null,e,null,null),lo(),t[Ii]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bu();e={blockedOn:null,target:e,priority:t};for(var l=0;l<ai.length&&t!==0&&t<ai[l].priority;l++);ai.splice(l,0,e),l===0&&vp(e)}};var gp=n.version;if(gp!=="19.1.0")throw Error(o(527,gp,"19.1.0"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=x(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Ym={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Xn=Eo.inject(Ym),Rt=Eo}catch{}}return Ya.createRoot=function(e,t){if(!u(e))throw Error(o(299));var l=!1,i="",a=$f,c=kf,f=Vf,p=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=cp(e,1,!1,null,null,l,i,a,c,f,p,null),e[Ii]=t.current,$r(e),new Pr(t)},Ya.hydrateRoot=function(e,t,l){if(!u(e))throw Error(o(299));var i=!1,a="",c=$f,f=kf,p=Vf,b=null,C=null;return l!=null&&(l.unstable_strictMode===!0&&(i=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(c=l.onUncaughtError),l.onCaughtError!==void 0&&(f=l.onCaughtError),l.onRecoverableError!==void 0&&(p=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(b=l.unstable_transitionCallbacks),l.formState!==void 0&&(C=l.formState)),t=cp(e,1,!0,t,l??null,i,a,c,f,p,b,C),t.context=rp(null),l=t.current,i=Vt(),i=Yo(i),a=jl(i),a.callback=null,Yl(l,a,i),l=i,t.current.lanes=l,Zn(t,l),fl(t),e[Ii]=t.current,$r(e),new So(t)},Ya.version="19.1.0",Ya}var Tp;function eg(){if(Tp)return tu.exports;Tp=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(n){console.error(n)}}return d(),tu.exports=Wm(),tu.exports}var tg=eg();/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lg=new Set(["children","localName","ref","style","className"]),Rp=new WeakMap,zp=(d,n,s,o,u)=>{const r=u==null?void 0:u[n];r===void 0?(d[n]=s,s==null&&n in HTMLElement.prototype&&d.removeAttribute(n)):s!==o&&((h,v,x)=>{let S=Rp.get(h);S===void 0&&Rp.set(h,S=new Map);let D=S.get(v);x!==void 0?D===void 0?(S.set(v,D={handleEvent:x}),h.addEventListener(v,D)):D.handleEvent=x:D!==void 0&&(S.delete(v),h.removeEventListener(v,D))})(d,r,s)},re=({react:d,tagName:n,elementClass:s,events:o,displayName:u})=>{const r=new Set(Object.keys(o??{})),h=d.forwardRef((v,x)=>{const S=d.useRef(new Map),D=d.useRef(null),$={},N={};for(const[H,k]of Object.entries(v))lg.has(H)?$[H==="className"?"class":H]=k:r.has(H)||H in s.prototype?N[H]=k:$[H]=k;return d.useLayoutEffect(()=>{if(D.current===null)return;const H=new Map;for(const k in N)zp(D.current,k,v[k],S.current.get(k),o),S.current.delete(k),H.set(k,v[k]);for(const[k,J]of S.current)zp(D.current,k,void 0,J,o);S.current=H}),d.useLayoutEffect(()=>{var H;(H=D.current)==null||H.removeAttribute("defer-hydration")},[]),$.suppressHydrationWarning=!0,d.createElement(n,{...$,ref:d.useCallback(H=>{D.current=H,typeof x=="function"?x(H):x!==null&&(x.current=H)},[x])})});return h.displayName=u??s.name,h};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const To=globalThis,vu=To.ShadowRoot&&(To.ShadyCSS===void 0||To.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bu=Symbol(),Dp=new WeakMap;let iv=class{constructor(n,s,o){if(this._$cssResult$=!0,o!==bu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=s}get styleSheet(){let n=this.o;const s=this.t;if(vu&&n===void 0){const o=s!==void 0&&s.length===1;o&&(n=Dp.get(s)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),o&&Dp.set(s,n))}return n}toString(){return this.cssText}};const Mo=d=>new iv(typeof d=="string"?d:d+"",void 0,bu),ie=(d,...n)=>{const s=d.length===1?d[0]:n.reduce((o,u,r)=>o+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(u)+d[r+1],d[0]);return new iv(s,d,bu)},ig=(d,n)=>{if(vu)d.adoptedStyleSheets=n.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of n){const o=document.createElement("style"),u=To.litNonce;u!==void 0&&o.setAttribute("nonce",u),o.textContent=s.cssText,d.appendChild(o)}},Mp=vu?d=>d:d=>d instanceof CSSStyleSheet?(n=>{let s="";for(const o of n.cssRules)s+=o.cssText;return Mo(s)})(d):d;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ng,defineProperty:ag,getOwnPropertyDescriptor:sg,getOwnPropertyNames:og,getOwnPropertySymbols:cg,getPrototypeOf:rg}=Object,ui=globalThis,Bp=ui.trustedTypes,ug=Bp?Bp.emptyScript:"",au=ui.reactiveElementPolyfillSupport,Ka=(d,n)=>d,Ro={toAttribute(d,n){switch(n){case Boolean:d=d?ug:null;break;case Object:case Array:d=d==null?d:JSON.stringify(d)}return d},fromAttribute(d,n){let s=d;switch(n){case Boolean:s=d!==null;break;case Number:s=d===null?null:Number(d);break;case Object:case Array:try{s=JSON.parse(d)}catch{s=null}}return s}},mu=(d,n)=>!ng(d,n),$p={attribute:!0,type:String,converter:Ro,reflect:!1,useDefault:!1,hasChanged:mu};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ui.litPropertyMetadata??(ui.litPropertyMetadata=new WeakMap);let Vn=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??(this.l=[])).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,s=$p){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(n,s),!s.noAccessor){const o=Symbol(),u=this.getPropertyDescriptor(n,o,s);u!==void 0&&ag(this.prototype,n,u)}}static getPropertyDescriptor(n,s,o){const{get:u,set:r}=sg(this.prototype,n)??{get(){return this[s]},set(h){this[s]=h}};return{get:u,set(h){const v=u==null?void 0:u.call(this);r==null||r.call(this,h),this.requestUpdate(n,v,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??$p}static _$Ei(){if(this.hasOwnProperty(Ka("elementProperties")))return;const n=rg(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(Ka("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ka("properties"))){const s=this.properties,o=[...og(s),...cg(s)];for(const u of o)this.createProperty(u,s[u])}const n=this[Symbol.metadata];if(n!==null){const s=litPropertyMetadata.get(n);if(s!==void 0)for(const[o,u]of s)this.elementProperties.set(o,u)}this._$Eh=new Map;for(const[s,o]of this.elementProperties){const u=this._$Eu(s,o);u!==void 0&&this._$Eh.set(u,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const s=[];if(Array.isArray(n)){const o=new Set(n.flat(1/0).reverse());for(const u of o)s.unshift(Mp(u))}else n!==void 0&&s.push(Mp(n));return s}static _$Eu(n,s){const o=s.attribute;return o===!1?void 0:typeof o=="string"?o:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var n;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(n=this.constructor.l)==null||n.forEach(s=>s(this))}addController(n){var s;(this._$EO??(this._$EO=new Set)).add(n),this.renderRoot!==void 0&&this.isConnected&&((s=n.hostConnected)==null||s.call(n))}removeController(n){var s;(s=this._$EO)==null||s.delete(n)}_$E_(){const n=new Map,s=this.constructor.elementProperties;for(const o of s.keys())this.hasOwnProperty(o)&&(n.set(o,this[o]),delete this[o]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ig(n,this.constructor.elementStyles),n}connectedCallback(){var n;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$EO)==null||n.forEach(s=>{var o;return(o=s.hostConnected)==null?void 0:o.call(s)})}enableUpdating(n){}disconnectedCallback(){var n;(n=this._$EO)==null||n.forEach(s=>{var o;return(o=s.hostDisconnected)==null?void 0:o.call(s)})}attributeChangedCallback(n,s,o){this._$AK(n,o)}_$ET(n,s){var r;const o=this.constructor.elementProperties.get(n),u=this.constructor._$Eu(n,o);if(u!==void 0&&o.reflect===!0){const h=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:Ro).toAttribute(s,o.type);this._$Em=n,h==null?this.removeAttribute(u):this.setAttribute(u,h),this._$Em=null}}_$AK(n,s){var r,h;const o=this.constructor,u=o._$Eh.get(n);if(u!==void 0&&this._$Em!==u){const v=o.getPropertyOptions(u),x=typeof v.converter=="function"?{fromAttribute:v.converter}:((r=v.converter)==null?void 0:r.fromAttribute)!==void 0?v.converter:Ro;this._$Em=u,this[u]=x.fromAttribute(s,v.type)??((h=this._$Ej)==null?void 0:h.get(u))??null,this._$Em=null}}requestUpdate(n,s,o){var u;if(n!==void 0){const r=this.constructor,h=this[n];if(o??(o=r.getPropertyOptions(n)),!((o.hasChanged??mu)(h,s)||o.useDefault&&o.reflect&&h===((u=this._$Ej)==null?void 0:u.get(n))&&!this.hasAttribute(r._$Eu(n,o))))return;this.C(n,s,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,s,{useDefault:o,reflect:u,wrapped:r},h){o&&!(this._$Ej??(this._$Ej=new Map)).has(n)&&(this._$Ej.set(n,h??s??this[n]),r!==!0||h!==void 0)||(this._$AL.has(n)||(this.hasUpdated||o||(s=void 0),this._$AL.set(n,s)),u===!0&&this._$Em!==n&&(this._$Eq??(this._$Eq=new Set)).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,h]of this._$Ep)this[r]=h;this._$Ep=void 0}const u=this.constructor.elementProperties;if(u.size>0)for(const[r,h]of u){const{wrapped:v}=h,x=this[r];v!==!0||this._$AL.has(r)||x===void 0||this.C(r,void 0,h,x)}}let n=!1;const s=this._$AL;try{n=this.shouldUpdate(s),n?(this.willUpdate(s),(o=this._$EO)==null||o.forEach(u=>{var r;return(r=u.hostUpdate)==null?void 0:r.call(u)}),this.update(s)):this._$EM()}catch(u){throw n=!1,this._$EM(),u}n&&this._$AE(s)}willUpdate(n){}_$AE(n){var s;(s=this._$EO)==null||s.forEach(o=>{var u;return(u=o.hostUpdated)==null?void 0:u.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(n){}firstUpdated(n){}};Vn.elementStyles=[],Vn.shadowRootOptions={mode:"open"},Vn[Ka("elementProperties")]=new Map,Vn[Ka("finalized")]=new Map,au==null||au({ReactiveElement:Vn}),(ui.reactiveElementVersions??(ui.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ia=globalThis,zo=Ia.trustedTypes,kp=zo?zo.createPolicy("lit-html",{createHTML:d=>d}):void 0,nv="$lit$",ri=`lit$${Math.random().toFixed(9).slice(2)}$`,av="?"+ri,dg=`<${av}>`,Hi=document,Ja=()=>Hi.createComment(""),Fa=d=>d===null||typeof d!="object"&&typeof d!="function",gu=Array.isArray,fg=d=>gu(d)||typeof(d==null?void 0:d[Symbol.iterator])=="function",su=`[ 	
\f\r]`,Ga=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vp=/-->/g,Np=/>/g,$i=RegExp(`>|${su}(?:([^\\s"'>=/]+)(${su}*=${su}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Up=/'/g,Hp=/"/g,sv=/^(?:script|style|textarea|title)$/i,hg=d=>(n,...s)=>({_$litType$:d,strings:n,values:s}),B=hg(1),hl=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),qp=new WeakMap,Ni=Hi.createTreeWalker(Hi,129);function ov(d,n){if(!gu(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return kp!==void 0?kp.createHTML(n):n}const pg=(d,n)=>{const s=d.length-1,o=[];let u,r=n===2?"<svg>":n===3?"<math>":"",h=Ga;for(let v=0;v<s;v++){const x=d[v];let S,D,$=-1,N=0;for(;N<x.length&&(h.lastIndex=N,D=h.exec(x),D!==null);)N=h.lastIndex,h===Ga?D[1]==="!--"?h=Vp:D[1]!==void 0?h=Np:D[2]!==void 0?(sv.test(D[2])&&(u=RegExp("</"+D[2],"g")),h=$i):D[3]!==void 0&&(h=$i):h===$i?D[0]===">"?(h=u??Ga,$=-1):D[1]===void 0?$=-2:($=h.lastIndex-D[2].length,S=D[1],h=D[3]===void 0?$i:D[3]==='"'?Hp:Up):h===Hp||h===Up?h=$i:h===Vp||h===Np?h=Ga:(h=$i,u=void 0);const H=h===$i&&d[v+1].startsWith("/>")?" ":"";r+=h===Ga?x+dg:$>=0?(o.push(S),x.slice(0,$)+nv+x.slice($)+ri+H):x+ri+($===-2?v:H)}return[ov(d,r+(d[s]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),o]};class Pa{constructor({strings:n,_$litType$:s},o){let u;this.parts=[];let r=0,h=0;const v=n.length-1,x=this.parts,[S,D]=pg(n,s);if(this.el=Pa.createElement(S,o),Ni.currentNode=this.el.content,s===2||s===3){const $=this.el.content.firstChild;$.replaceWith(...$.childNodes)}for(;(u=Ni.nextNode())!==null&&x.length<v;){if(u.nodeType===1){if(u.hasAttributes())for(const $ of u.getAttributeNames())if($.endsWith(nv)){const N=D[h++],H=u.getAttribute($).split(ri),k=/([.?@])?(.*)/.exec(N);x.push({type:1,index:r,name:k[2],strings:H,ctor:k[1]==="."?bg:k[1]==="?"?mg:k[1]==="@"?gg:Bo}),u.removeAttribute($)}else $.startsWith(ri)&&(x.push({type:6,index:r}),u.removeAttribute($));if(sv.test(u.tagName)){const $=u.textContent.split(ri),N=$.length-1;if(N>0){u.textContent=zo?zo.emptyScript:"";for(let H=0;H<N;H++)u.append($[H],Ja()),Ni.nextNode(),x.push({type:2,index:++r});u.append($[N],Ja())}}}else if(u.nodeType===8)if(u.data===av)x.push({type:2,index:r});else{let $=-1;for(;($=u.data.indexOf(ri,$+1))!==-1;)x.push({type:7,index:r}),$+=ri.length-1}r++}}static createElement(n,s){const o=Hi.createElement("template");return o.innerHTML=n,o}}function Nn(d,n,s=d,o){var h,v;if(n===hl)return n;let u=o!==void 0?(h=s._$Co)==null?void 0:h[o]:s._$Cl;const r=Fa(n)?void 0:n._$litDirective$;return(u==null?void 0:u.constructor)!==r&&((v=u==null?void 0:u._$AO)==null||v.call(u,!1),r===void 0?u=void 0:(u=new r(d),u._$AT(d,s,o)),o!==void 0?(s._$Co??(s._$Co=[]))[o]=u:s._$Cl=u),u!==void 0&&(n=Nn(d,u._$AS(d,n.values),u,o)),n}let vg=class{constructor(n,s){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){const{el:{content:s},parts:o}=this._$AD,u=((n==null?void 0:n.creationScope)??Hi).importNode(s,!0);Ni.currentNode=u;let r=Ni.nextNode(),h=0,v=0,x=o[0];for(;x!==void 0;){if(h===x.index){let S;x.type===2?S=new Un(r,r.nextSibling,this,n):x.type===1?S=new x.ctor(r,x.name,x.strings,this,n):x.type===6&&(S=new _g(r,this,n)),this._$AV.push(S),x=o[++v]}h!==(x==null?void 0:x.index)&&(r=Ni.nextNode(),h++)}return Ni.currentNode=Hi,u}p(n){let s=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(n,o,s),s+=o.strings.length-2):o._$AI(n[s])),s++}};class Un{get _$AU(){var n;return((n=this._$AM)==null?void 0:n._$AU)??this._$Cv}constructor(n,s,o,u){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=n,this._$AB=s,this._$AM=o,this.options=u,this._$Cv=(u==null?void 0:u.isConnected)??!0}get parentNode(){let n=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(n==null?void 0:n.nodeType)===11&&(n=s.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,s=this){n=Nn(this,n,s),Fa(n)?n===Q||n==null||n===""?(this._$AH!==Q&&this._$AR(),this._$AH=Q):n!==this._$AH&&n!==hl&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):fg(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==Q&&Fa(this._$AH)?this._$AA.nextSibling.data=n:this.T(Hi.createTextNode(n)),this._$AH=n}$(n){var r;const{values:s,_$litType$:o}=n,u=typeof o=="number"?this._$AC(n):(o.el===void 0&&(o.el=Pa.createElement(ov(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)==null?void 0:r._$AD)===u)this._$AH.p(s);else{const h=new vg(u,this),v=h.u(this.options);h.p(s),this.T(v),this._$AH=h}}_$AC(n){let s=qp.get(n.strings);return s===void 0&&qp.set(n.strings,s=new Pa(n)),s}k(n){gu(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let o,u=0;for(const r of n)u===s.length?s.push(o=new Un(this.O(Ja()),this.O(Ja()),this,this.options)):o=s[u],o._$AI(r),u++;u<s.length&&(this._$AR(o&&o._$AB.nextSibling,u),s.length=u)}_$AR(n=this._$AA.nextSibling,s){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,s);n&&n!==this._$AB;){const u=n.nextSibling;n.remove(),n=u}}setConnected(n){var s;this._$AM===void 0&&(this._$Cv=n,(s=this._$AP)==null||s.call(this,n))}}class Bo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,s,o,u,r){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=n,this.name=s,this._$AM=u,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Q}_$AI(n,s=this,o,u){const r=this.strings;let h=!1;if(r===void 0)n=Nn(this,n,s,0),h=!Fa(n)||n!==this._$AH&&n!==hl,h&&(this._$AH=n);else{const v=n;let x,S;for(n=r[0],x=0;x<r.length-1;x++)S=Nn(this,v[o+x],s,x),S===hl&&(S=this._$AH[x]),h||(h=!Fa(S)||S!==this._$AH[x]),S===Q?n=Q:n!==Q&&(n+=(S??"")+r[x+1]),this._$AH[x]=S}h&&!u&&this.j(n)}j(n){n===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}}class bg extends Bo{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===Q?void 0:n}}class mg extends Bo{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==Q)}}class gg extends Bo{constructor(n,s,o,u,r){super(n,s,o,u,r),this.type=5}_$AI(n,s=this){if((n=Nn(this,n,s,0)??Q)===hl)return;const o=this._$AH,u=n===Q&&o!==Q||n.capture!==o.capture||n.once!==o.once||n.passive!==o.passive,r=n!==Q&&(o===Q||u);u&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,n):this._$AH.handleEvent(n)}}class _g{constructor(n,s,o){this.element=n,this.type=6,this._$AN=void 0,this._$AM=s,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(n){Nn(this,n)}}const yg={I:Un},ou=Ia.litHtmlPolyfillSupport;ou==null||ou(Pa,Un),(Ia.litHtmlVersions??(Ia.litHtmlVersions=[])).push("3.3.0");const cv=(d,n,s)=>{const o=(s==null?void 0:s.renderBefore)??n;let u=o._$litPart$;if(u===void 0){const r=(s==null?void 0:s.renderBefore)??null;o._$litPart$=u=new Un(n.insertBefore(Ja(),r),r,void 0,s??{})}return u._$AI(d),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ui=globalThis;let il=class extends Vn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const n=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=n.firstChild),n}update(n){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=cv(s,this.renderRoot,this.renderOptions)}connectedCallback(){var n;super.connectedCallback(),(n=this._$Do)==null||n.setConnected(!0)}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this._$Do)==null||n.setConnected(!1)}render(){return hl}};var lv;il._$litElement$=!0,il.finalized=!0,(lv=Ui.litElementHydrateSupport)==null||lv.call(Ui,{LitElement:il});const cu=Ui.litElementPolyfillSupport;cu==null||cu({LitElement:il});(Ui.litElementVersions??(Ui.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xg={attribute:!0,type:String,converter:Ro,reflect:!1,hasChanged:mu},Sg=(d=xg,n,s)=>{const{kind:o,metadata:u}=s;let r=globalThis.litPropertyMetadata.get(u);if(r===void 0&&globalThis.litPropertyMetadata.set(u,r=new Map),o==="setter"&&((d=Object.create(d)).wrapped=!0),r.set(s.name,d),o==="accessor"){const{name:h}=s;return{set(v){const x=n.get.call(this);n.set.call(this,v),this.requestUpdate(h,x,d)},init(v){return v!==void 0&&this.C(h,void 0,d,v),v}}}if(o==="setter"){const{name:h}=s;return function(v){const x=this[h];n.call(this,v),this.requestUpdate(h,x,d)}}throw Error("Unsupported decorator location: "+o)};function _(d){return(n,s)=>typeof s=="object"?Sg(d,n,s):((o,u,r)=>{const h=u.hasOwnProperty(r);return u.constructor.createProperty(r,o),h?Object.getOwnPropertyDescriptor(u,r):void 0})(d,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(d){return _({...d,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wa=(d,n,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof n!="object"&&Object.defineProperty(d,n,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(d,n){return(s,o,u)=>{const r=h=>{var v;return((v=h.renderRoot)==null?void 0:v.querySelector(d))??null};if(n){const{get:h,set:v}=typeof o=="object"?s:u??(()=>{const x=Symbol();return{get(){return this[x]},set(S){this[x]=S}}})();return Wa(s,o,{get(){let x=h.call(this);return x===void 0&&(x=r(this),(x!==null||this.hasUpdated)&&v.call(this,x)),x}})}return Wa(s,o,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Eg;function Cg(d){return(n,s)=>Wa(n,s,{get(){return(this.renderRoot??Eg??(Eg=document.createDocumentFragment())).querySelectorAll(d)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function al(d){return(n,s)=>{const{slot:o,selector:u}=d??{},r="slot"+(o?`[name=${o}]`:":not([name])");return Wa(n,s,{get(){var x;const h=(x=this.renderRoot)==null?void 0:x.querySelector(r),v=(h==null?void 0:h.assignedElements(d))??[];return u===void 0?v:v.filter(S=>S.matches(u))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ag(d){return(n,s)=>{const{slot:o}={},u="slot"+(o?`[name=${o}]`:":not([name])");return Wa(n,s,{get(){var h;const r=(h=this.renderRoot)==null?void 0:h.querySelector(u);return(r==null?void 0:r.assignedNodes(d))??[]}})}}const uu="1.15.0",Lp="__vscodeElements_disableRegistryWarning__";class ue extends il{get version(){return uu}}const ne=d=>n=>{if(!customElements.get(d)){customElements.define(d,n);return}if(Lp in window)return;const o=document.createElement(d),u=o==null?void 0:o.version;let r="";u?u!==uu?(r+="is already registered by a different version of VSCode Elements. ",r+=`This version is "${uu}", while the other one is "${u}".`):r+="is already registered by the same version of VSCode Elements. ":(console.warn(d,"is already registered by an unknown custom element handler class."),r+="is already registered by an unknown custom element handler class."),console.warn(`[VSCode Elements] ${d} ${r}
To suppress this warning, set window.${Lp} to true`)},oe=ie`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`,Og=16,wg=13,Tg=Og/wg;function _u(){return navigator.userAgent.indexOf("Linux")>-1?'system-ui, "Ubuntu", "Droid Sans", sans-serif':navigator.userAgent.indexOf("Mac")>-1?"-apple-system, BlinkMacSystemFont, sans-serif":navigator.userAgent.indexOf("Windows")>-1?'"Segoe WPC", "Segoe UI", sans-serif':"sans-serif"}const Rg=Mo(_u()),zg=[oe,ie`
    :host {
      background-color: var(--vscode-badge-background, #616161);
      border: 1px solid var(--vscode-contrastBorder, transparent);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      font-family: var(--vscode-font-family, ${Rg});
      font-size: 11px;
      font-weight: 400;
      line-height: 14px;
      min-width: 18px;
      padding: 2px 3px;
      text-align: center;
      white-space: nowrap;
    }

    :host([variant='counter']) {
      border-radius: 11px;
      line-height: 11px;
      min-height: 18px;
      min-width: 18px;
      padding: 3px 6px;
    }

    :host([variant='activity-bar-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 20px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      font-size: 9px;
      font-weight: 600;
      line-height: 16px;
      padding: 0 4px;
    }

    :host([variant='tab-header-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 10px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      line-height: 10px;
      min-height: 16px;
      min-width: 16px;
      padding: 3px 5px;
    }
  `];var rv=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let es=class extends ue{constructor(){super(...arguments),this.variant="default"}render(){return B` <slot></slot> `}};es.styles=zg;rv([_({reflect:!0})],es.prototype,"variant",void 0);es=rv([ne("vscode-badge")],es);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yu={ATTRIBUTE:1,CHILD:2,PROPERTY:3},xu=d=>(...n)=>({_$litDirective$:d,values:n});class Su{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,s,o){this._$Ct=n,this._$AM=s,this._$Ci=o}_$AS(n,s){return this.update(n,s)}update(n,s){return this.render(...s)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=xu(class extends Su{constructor(d){var n;if(super(d),d.type!==yu.ATTRIBUTE||d.name!=="class"||((n=d.strings)==null?void 0:n.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(d){return" "+Object.keys(d).filter(n=>d[n]).join(" ")+" "}update(d,[n]){var o,u;if(this.st===void 0){this.st=new Set,d.strings!==void 0&&(this.nt=new Set(d.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in n)n[r]&&!((o=this.nt)!=null&&o.has(r))&&this.st.add(r);return this.render(n)}const s=d.element.classList;for(const r of this.st)r in n||(s.remove(r),this.st.delete(r));for(const r in n){const h=!!n[r];h===this.st.has(r)||(u=this.nt)!=null&&u.has(r)||(h?(s.add(r),this.st.add(r)):(s.remove(r),this.st.delete(r)))}return hl}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=d=>d??Q;class Dg extends Su{constructor(n){if(super(n),this._prevProperties={},n.type!==yu.PROPERTY||n.name!=="style")throw new Error("The `stylePropertyMap` directive must be used in the `style` property")}update(n,[s]){return Object.entries(s).forEach(([o,u])=>{this._prevProperties[o]!==u&&(o.startsWith("--")?n.element.style.setProperty(o,u):n.element.style[o]=u,this._prevProperties[o]=u)}),hl}render(n){return hl}}const bt=xu(Dg),Mg=[oe,ie`
    :host {
      color: var(--vscode-icon-foreground, #cccccc);
      display: inline-block;
    }

    .codicon[class*='codicon-'] {
      display: block;
    }

    .icon,
    .button {
      background-color: transparent;
      display: block;
      padding: 0;
    }

    .button {
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      color: currentColor;
      cursor: pointer;
      padding: 2px;
    }

    .button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
    }

    .button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    .button:focus {
      outline: none;
    }

    .button:focus-visible {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    @keyframes icon-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation-name: icon-spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `];var Xi=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r},Za;let Jt=Za=class extends ue{constructor(){super(...arguments),this.label="",this.name="",this.size=16,this.spin=!1,this.spinDuration=1.5,this.actionIcon=!1,this._onButtonClick=n=>{this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:n}}))}}connectedCallback(){super.connectedCallback();const{href:n,nonce:s}=this._getStylesheetConfig();Za.stylesheetHref=n,Za.nonce=s}_getStylesheetConfig(){const n=document.getElementById("vscode-codicon-stylesheet"),s=(n==null?void 0:n.getAttribute("href"))||void 0,o=(n==null?void 0:n.nonce)||void 0;if(!n){let u="[VSCode Elements] To use the Icon component, the codicons.css file must be included in the page with the id `vscode-codicon-stylesheet`! ";u+="See https://vscode-elements.github.io/components/icon/ for more details.",console.warn(u)}return{nonce:o,href:s}}render(){const{stylesheetHref:n,nonce:s}=Za,o=B`<span
      class=${ge({codicon:!0,["codicon-"+this.name]:!0,spin:this.spin})}
      .style=${bt({animationDuration:String(this.spinDuration)+"s",fontSize:this.size+"px",height:this.size+"px",width:this.size+"px"})}
    ></span>`,u=this.actionIcon?B` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${o}
        </button>`:B` <span class="icon" aria-hidden="true" role="presentation"
          >${o}</span
        >`;return B`
      <link
        rel="stylesheet"
        href=${we(n)}
        nonce=${we(s)}
      >
      ${u}
    `}};Jt.styles=Mg;Jt.stylesheetHref="";Jt.nonce="";Xi([_()],Jt.prototype,"label",void 0);Xi([_({type:String})],Jt.prototype,"name",void 0);Xi([_({type:Number})],Jt.prototype,"size",void 0);Xi([_({type:Boolean,reflect:!0})],Jt.prototype,"spin",void 0);Xi([_({type:Number,attribute:"spin-duration"})],Jt.prototype,"spinDuration",void 0);Xi([_({type:Boolean,reflect:!0,attribute:"action-icon"})],Jt.prototype,"actionIcon",void 0);Jt=Za=Xi([ne("vscode-icon")],Jt);const Bg=Mo(_u()),$g=[oe,ie`
    :host {
      background-color: var(--vscode-button-background, #0078d4);
      border-color: var(--vscode-button-border, transparent);
      border-style: solid;
      border-radius: 2px;
      border-width: 1px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      display: inline-block;
      font-family: var(--vscode-font-family, ${Bg});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 22px;
      overflow: hidden;
      padding: 1px 13px;
      user-select: none;
      white-space: nowrap;
    }

    :host([secondary]) {
      color: var(--vscode-button-secondaryForeground, #cccccc);
      background-color: var(--vscode-button-secondaryBackground, #313131);
      border-color: var(
        --vscode-button-border,
        var(--vscode-button-secondaryBackground, rgba(255, 255, 255, 0.07))
      );
    }

    :host([disabled]) {
      cursor: default;
      opacity: 0.4;
      pointer-events: none;
    }

    :host(:hover) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([disabled]:hover) {
      background-color: var(--vscode-button-background, #0078d4);
    }

    :host([secondary]:hover) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:hover) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host(:focus),
    :host(:active) {
      outline: none;
    }

    :host(:focus) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: 2px;
    }

    :host([disabled]:focus) {
      background-color: var(--vscode-button-background, #0078d4);
      outline: 0;
    }

    :host([secondary]:focus) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:focus) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    ::slotted(*) {
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
    }

    ::slotted(*:first-child) {
      margin-left: 0;
    }

    ::slotted(vscode-icon) {
      color: inherit;
    }

    .wrapper {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
    }

    slot {
      align-items: center;
      display: flex;
      height: 100%;
    }

    .icon {
      color: inherit;
      display: block;
      margin-right: 3px;
    }

    .icon-after {
      color: inherit;
      display: block;
      margin-left: 3px;
    }
  `];var dt=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let Ye=class extends ue{get form(){return this._internals.form}constructor(){super(),this.autofocus=!1,this.tabIndex=0,this.secondary=!1,this.role="button",this.disabled=!1,this.icon="",this.iconSpin=!1,this.iconAfter="",this.iconAfterSpin=!1,this.focused=!1,this.name=void 0,this.type="button",this.value="",this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this)),this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.autofocus&&(this.tabIndex<0&&(this.tabIndex=0),this.updateComplete.then(()=>{this.focus(),this.requestUpdate()})),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}update(n){super.update(n),n.has("value")&&this._internals.setFormValue(this.value),n.has("disabled")&&(this.disabled?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):this.tabIndex=this._prevTabindex)}_executeAction(){this.type==="submit"&&this._internals.form&&this._internals.form.requestSubmit(),this.type==="reset"&&this._internals.form&&this._internals.form.reset()}_handleKeyDown(n){if((n.key==="Enter"||n.key===" ")&&!this.hasAttribute("disabled")){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:new MouseEvent("click")}}));const s=new MouseEvent("click",{bubbles:!0,cancelable:!0});s.synthetic=!0,this.dispatchEvent(s),this._executeAction()}}_handleClick(n){n.synthetic||this.hasAttribute("disabled")||(this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:n}})),this._executeAction())}render(){const n=this.icon!=="",s=this.iconAfter!=="",o={wrapper:!0,"has-icon-before":n,"has-icon-after":s},u=n?B`<vscode-icon
          name=${this.icon}
          ?spin=${this.iconSpin}
          spin-duration=${we(this.iconSpinDuration)}
          class="icon"
        ></vscode-icon>`:Q,r=s?B`<vscode-icon
          name=${this.iconAfter}
          ?spin=${this.iconAfterSpin}
          spin-duration=${we(this.iconAfterSpinDuration)}
          class="icon-after"
        ></vscode-icon>`:Q;return B`
      <span class=${ge(o)}>
        ${u}
        <slot></slot>
        ${r}
      </span>
    `}};Ye.styles=$g;Ye.formAssociated=!0;dt([_({type:Boolean,reflect:!0})],Ye.prototype,"autofocus",void 0);dt([_({type:Number,reflect:!0})],Ye.prototype,"tabIndex",void 0);dt([_({type:Boolean,reflect:!0})],Ye.prototype,"secondary",void 0);dt([_({reflect:!0})],Ye.prototype,"role",void 0);dt([_({type:Boolean,reflect:!0})],Ye.prototype,"disabled",void 0);dt([_()],Ye.prototype,"icon",void 0);dt([_({type:Boolean,reflect:!0,attribute:"icon-spin"})],Ye.prototype,"iconSpin",void 0);dt([_({type:Number,reflect:!0,attribute:"icon-spin-duration"})],Ye.prototype,"iconSpinDuration",void 0);dt([_({attribute:"icon-after"})],Ye.prototype,"iconAfter",void 0);dt([_({type:Boolean,reflect:!0,attribute:"icon-after-spin"})],Ye.prototype,"iconAfterSpin",void 0);dt([_({type:Number,reflect:!0,attribute:"icon-after-spin-duration"})],Ye.prototype,"iconAfterSpinDuration",void 0);dt([_({type:Boolean,reflect:!0})],Ye.prototype,"focused",void 0);dt([_({type:String,reflect:!0})],Ye.prototype,"name",void 0);dt([_({reflect:!0})],Ye.prototype,"type",void 0);dt([_()],Ye.prototype,"value",void 0);Ye=dt([ne("vscode-button")],Ye);var kg=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};class Eu extends ue{constructor(){super(),this.focused=!1,this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1}}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}attributeChangedCallback(n,s,o){super.attributeChangedCallback(n,s,o),n==="disabled"&&this.hasAttribute("disabled")?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):n==="disabled"&&!this.hasAttribute("disabled")&&(this.tabIndex=this._prevTabindex)}}kg([_({type:Boolean,reflect:!0})],Eu.prototype,"focused",void 0);var Vg=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};const uv=d=>{class n extends d{constructor(){super(...arguments),this._label="",this._slottedText=""}set label(o){this._label=o,this._slottedText===""&&this.setAttribute("aria-label",o)}get label(){return this._label}_handleSlotChange(){this._slottedText=this.textContent?this.textContent.trim():"",this._slottedText!==""&&this.setAttribute("aria-label",this._slottedText)}_renderLabelAttribute(){return this._slottedText===""?B`<span class="label-attr">${this._label}</span>`:B`${Q}`}}return Vg([_()],n.prototype,"label",null),n},dv=[ie`
    :host {
      color: var(--vscode-foreground, #cccccc);
      display: inline-block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
    }

    :host(:focus) {
      outline: none;
    }

    :host([disabled]) {
      opacity: 0.4;
    }

    .wrapper {
      cursor: pointer;
      display: block;
      font-size: var(--vscode-font-size, 13px);
      margin-bottom: 4px;
      margin-top: 4px;
      min-height: 18px;
      position: relative;
      user-select: none;
    }

    :host([disabled]) .wrapper {
      cursor: default;
    }

    input {
      position: absolute;
      height: 1px;
      left: 9px;
      margin: 0;
      top: 17px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap;
    }

    .icon {
      align-items: center;
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      background-size: 16px;
      border: 1px solid var(--vscode-settings-checkboxBorder, #3c3c3c);
      box-sizing: border-box;
      color: var(--vscode-settings-checkboxForeground, #cccccc);
      display: flex;
      height: 18px;
      justify-content: center;
      left: 0;
      margin-left: 0;
      margin-right: 9px;
      padding: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 18px;
    }

    .icon.before-empty-label {
      margin-right: 0;
    }

    .label {
      cursor: pointer;
      display: block;
      min-height: 18px;
      min-width: 18px;
    }

    .label-inner {
      display: block;
      opacity: 0.9;
      padding-left: 27px;
    }

    .label-inner.empty {
      padding-left: 0;
    }

    :host([disabled]) .label {
      cursor: default;
    }
  `],Ng=[oe,dv,ie`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 3px;
    }

    .indeterminate-icon {
      background-color: currentColor;
      position: absolute;
      height: 1px;
      width: 12px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var Pt=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let nt=class extends uv(Eu){set checked(n){this._checked=n,this._manageRequired(),this.requestUpdate()}get checked(){return this._checked}set required(n){this._required=n,this._manageRequired(),this.requestUpdate()}get required(){return this._required}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.autofocus=!1,this._checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name=void 0,this.value="",this.disabled=!1,this.indeterminate=!1,this._required=!1,this.type="checkbox",this._handleClick=n=>{n.preventDefault(),!this.disabled&&this._toggleState()},this._handleKeyDown=n=>{var s;!this.disabled&&(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),n.key===" "&&this._toggleState(),n.key==="Enter"&&((s=this._internals.form)==null||s.requestSubmit()))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.updateComplete.then(()=>{this._manageRequired(),this._setActualFormValue()})}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeyDown)}update(n){super.update(n),n.has("checked")&&(this.ariaChecked=this.checked?"true":"false")}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(n,s){n&&(this.checked=!0)}_setActualFormValue(){let n="";this.checked?n=this.value?this.value:"on":n=null,this._internals.setFormValue(n)}_toggleState(){this.checked=!this.checked,this.indeterminate=!1,this._setActualFormValue(),this._manageRequired(),this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_manageRequired(){!this.checked&&this.required?this._internals.setValidity({valueMissing:!0},"Please check this box if you want to proceed.",this._inputEl??void 0):this._internals.setValidity({})}render(){const n=ge({icon:!0,checked:this.checked,indeterminate:this.indeterminate}),s=ge({"label-inner":!0}),o=B`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="check-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
      />
    </svg>`,u=this.checked&&!this.indeterminate?o:Q,r=this.indeterminate?B`<span class="indeterminate-icon"></span>`:Q;return B`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="checkbox"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
        >
        <div class=${n}>${r}${u}</div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${s}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};nt.styles=Ng;nt.formAssociated=!0;nt.shadowRootOptions={...il.shadowRootOptions,delegatesFocus:!0};Pt([_({type:Boolean,reflect:!0})],nt.prototype,"autofocus",void 0);Pt([_({type:Boolean,reflect:!0})],nt.prototype,"checked",null);Pt([_({type:Boolean,reflect:!0,attribute:"default-checked"})],nt.prototype,"defaultChecked",void 0);Pt([_({type:Boolean,reflect:!0})],nt.prototype,"invalid",void 0);Pt([_({reflect:!0})],nt.prototype,"name",void 0);Pt([_()],nt.prototype,"value",void 0);Pt([_({type:Boolean,reflect:!0})],nt.prototype,"disabled",void 0);Pt([_({type:Boolean,reflect:!0})],nt.prototype,"indeterminate",void 0);Pt([_({type:Boolean,reflect:!0})],nt.prototype,"required",null);Pt([_()],nt.prototype,"type",void 0);Pt([at("#input")],nt.prototype,"_inputEl",void 0);nt=Pt([ne("vscode-checkbox")],nt);const Ug=[oe,ie`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-checkbox) {
      margin-right: 20px;
    }

    ::slotted(vscode-checkbox:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox:last-child) {
      margin-bottom: 0;
    }
  `];var Cu=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let qi=class extends ue{constructor(){super(...arguments),this.role="group",this.variant="horizontal"}render(){return B`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};qi.styles=Ug;Cu([_({reflect:!0})],qi.prototype,"role",void 0);Cu([_({reflect:!0})],qi.prototype,"variant",void 0);qi=Cu([ne("vscode-checkbox-group")],qi);const Hg=[oe,ie`
    .collapsible {
      background-color: var(--vscode-sideBar-background, #181818);
    }

    .collapsible-header {
      align-items: center;
      background-color: var(--vscode-sideBarSectionHeader-background, #181818);
      cursor: pointer;
      display: flex;
      height: 22px;
      line-height: 22px;
      user-select: none;
    }

    .collapsible-header:focus {
      opacity: 1;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
      outline-color: var(--vscode-focusBorder, #0078d4);
    }

    .title {
      color: var(--vscode-sideBarTitle-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: 11px;
      font-weight: 700;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .title .description {
      font-weight: 400;
      margin-left: 10px;
      text-transform: none;
      opacity: 0.6;
    }

    .header-icon {
      color: var(--vscode-icon-foreground, #cccccc);
      display: block;
      flex-shrink: 0;
      margin: 0 3px;
    }

    .collapsible.open .header-icon {
      transform: rotate(90deg);
    }

    .header-slots {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: auto;
      margin-right: 4px;
    }

    .actions {
      display: none;
    }

    .collapsible.open .actions {
      display: block;
    }

    .header-slots slot {
      display: flex;
      max-height: 22px;
      overflow: hidden;
    }

    .header-slots slot::slotted(div) {
      align-items: center;
      display: flex;
    }

    .collapsible-body {
      display: none;
      overflow: hidden;
    }

    .collapsible.open .collapsible-body {
      display: block;
    }
  `];var $o=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let Li=class extends ue{constructor(){super(...arguments),this.title="",this.description="",this.open=!1}_emitToggleEvent(){this.dispatchEvent(new CustomEvent("vsc-collapsible-toggle",{detail:{open:this.open}}))}_onHeaderClick(){this.open=!this.open,this._emitToggleEvent()}_onHeaderKeyDown(n){n.key==="Enter"&&(this.open=!this.open,this._emitToggleEvent())}render(){const n=ge({collapsible:!0,open:this.open}),s=B`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="header-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
      />
    </svg>`,o=this.description?B`<span class="description">${this.description}</span>`:Q;return B`
      <div class=${n}>
        <div
          class="collapsible-header"
          tabindex="0"
          title=${this.title}
          @click=${this._onHeaderClick}
          @keydown=${this._onHeaderKeyDown}
        >
          ${s}
          <h3 class="title">${this.title}${o}</h3>
          <div class="header-slots">
            <div class="actions"><slot name="actions"></slot></div>
            <div class="decorations"><slot name="decorations"></slot></div>
          </div>
        </div>
        <div class="collapsible-body" part="body">
          <slot></slot>
        </div>
      </div>
    `}};Li.styles=Hg;$o([_({type:String})],Li.prototype,"title",void 0);$o([_()],Li.prototype,"description",void 0);$o([_({type:Boolean,reflect:!0})],Li.prototype,"open",void 0);Li=$o([ne("vscode-collapsible")],Li);const qg=[oe,ie`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      outline: none;
      position: relative;
    }

    .context-menu-item {
      background-color: var(--vscode-menu-background, #1f1f1f);
      color: var(--vscode-menu-foreground, #cccccc);
      display: flex;
      user-select: none;
      white-space: nowrap;
    }

    .ruler {
      border-bottom: 1px solid var(--vscode-menu-separatorBackground, #454545);
      display: block;
      margin: 0 0 4px;
      padding-top: 4px;
      width: 100%;
    }

    .context-menu-item a {
      align-items: center;
      border-color: transparent;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-menu-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex: 1 1 auto;
      height: 2em;
      margin-left: 4px;
      margin-right: 4px;
      outline: none;
      position: relative;
      text-decoration: inherit;
    }

    :host([selected]) .context-menu-item a {
      background-color: var(--vscode-menu-selectionBackground, #0078d4);
      border-color: var(--vscode-menu-selectionBorder, transparent);
      color: var(--vscode-menu-selectionForeground, #ffffff);
    }

    .label {
      background: none;
      display: flex;
      flex: 1 1 auto;
      font-size: 12px;
      line-height: 1;
      padding: 0 22px;
      text-decoration: none;
    }

    .keybinding {
      display: block;
      flex: 2 1 auto;
      line-height: 1;
      padding: 0 22px;
      text-align: right;
    }
  `];var Hn=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let Ml=class extends ue{constructor(){super(...arguments),this.label="",this.keybinding="",this.value="",this.separator=!1,this.tabindex=0}onItemClick(){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{label:this.label,keybinding:this.keybinding,value:this.value||this.label,separator:this.separator,tabindex:this.tabindex},bubbles:!0,composed:!0}))}render(){return B`
      ${this.separator?B`
            <div class="context-menu-item separator">
              <span class="ruler"></span>
            </div>
          `:B`
            <div class="context-menu-item">
              <a @click=${this.onItemClick}>
                ${this.label?B`<span class="label">${this.label}</span>`:Q}
                ${this.keybinding?B`<span class="keybinding">${this.keybinding}</span>`:Q}
              </a>
            </div>
          `}
    `}};Ml.styles=qg;Hn([_({type:String})],Ml.prototype,"label",void 0);Hn([_({type:String})],Ml.prototype,"keybinding",void 0);Hn([_({type:String})],Ml.prototype,"value",void 0);Hn([_({type:Boolean,reflect:!0})],Ml.prototype,"separator",void 0);Hn([_({type:Number})],Ml.prototype,"tabindex",void 0);Ml=Hn([ne("vscode-context-menu-item")],Ml);const Lg=[oe,ie`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      position: relative;
    }

    .context-menu {
      background-color: var(--vscode-menu-background, #1f1f1f);
      border-color: var(--vscode-menu-border, #454545);
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      box-shadow: 0 2px 8px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.36));
      color: var(--vscode-menu-foreground, #cccccc);
      padding: 4px 0;
      white-space: nowrap;
    }

    .context-menu:focus {
      outline: 0;
    }
  `];var fi=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let nl=class extends ue{set data(n){this._data=n;const s=[];n.forEach((o,u)=>{o.separator||s.push(u)}),this._clickableItemIndexes=s}get data(){return this._data}set show(n){this._show=n,this._selectedClickableItemIndex=-1,n&&this.updateComplete.then(()=>{this._wrapperEl&&this._wrapperEl.focus(),requestAnimationFrame(()=>{document.addEventListener("click",this._onClickOutsideBound,{once:!0})})})}get show(){return this._show}constructor(){super(),this.preventClose=!1,this.tabIndex=0,this._selectedClickableItemIndex=-1,this._show=!1,this._data=[],this._clickableItemIndexes=[],this._onClickOutsideBound=this._onClickOutside.bind(this),this.addEventListener("keydown",this._onKeyDown)}_onClickOutside(n){n.composedPath().includes(this)||(this.show=!1)}_onKeyDown(n){const{key:s}=n;switch((s==="ArrowUp"||s==="ArrowDown"||s==="Escape"||s==="Enter")&&n.preventDefault(),s){case"ArrowUp":this._handleArrowUp();break;case"ArrowDown":this._handleArrowDown();break;case"Escape":this._handleEscape();break;case"Enter":this._handleEnter();break}}_handleArrowUp(){this._selectedClickableItemIndex===0?this._selectedClickableItemIndex=this._clickableItemIndexes.length-1:this._selectedClickableItemIndex-=1}_handleArrowDown(){this._selectedClickableItemIndex+1<this._clickableItemIndexes.length?this._selectedClickableItemIndex+=1:this._selectedClickableItemIndex=0}_handleEscape(){this.show=!1,document.removeEventListener("click",this._onClickOutsideBound)}_dispatchSelectEvent(n){const{keybinding:s,label:o,value:u,separator:r,tabindex:h}=n;this.dispatchEvent(new CustomEvent("vsc-context-menu-select",{detail:{keybinding:s,label:o,separator:r,tabindex:h,value:u}}))}_dispatchLegacySelectEvent(n){const{keybinding:s,label:o,value:u,separator:r,tabindex:h}=n,v={keybinding:s,label:o,value:u,separator:r,tabindex:h};this.dispatchEvent(new CustomEvent("vsc-select",{detail:v,bubbles:!0,composed:!0}))}_handleEnter(){if(this._selectedClickableItemIndex===-1)return;const n=this._clickableItemIndexes[this._selectedClickableItemIndex],o=this._wrapperEl.querySelectorAll("vscode-context-menu-item")[n];this._dispatchLegacySelectEvent(o),this._dispatchSelectEvent(o),this.preventClose||(this.show=!1,document.removeEventListener("click",this._onClickOutsideBound))}_onItemClick(n){const s=n.currentTarget;this._dispatchLegacySelectEvent(s),this._dispatchSelectEvent(s),this.preventClose||(this.show=!1)}_onItemMouseOver(n){const s=n.target,o=s.dataset.index?+s.dataset.index:-1,u=this._clickableItemIndexes.findIndex(r=>r===o);u!==-1&&(this._selectedClickableItemIndex=u)}_onItemMouseOut(){this._selectedClickableItemIndex=-1}render(){if(!this._show)return B`${Q}`;const n=this._clickableItemIndexes[this._selectedClickableItemIndex];return B`
      <div class="context-menu" tabindex="0">
        ${this.data?this.data.map(({label:s="",keybinding:o="",value:u="",separator:r=!1,tabindex:h=0},v)=>B`
                <vscode-context-menu-item
                  label=${s}
                  keybinding=${o}
                  value=${u}
                  ?separator=${r}
                  ?selected=${v===n}
                  tabindex=${h}
                  @vsc-click=${this._onItemClick}
                  @mouseover=${this._onItemMouseOver}
                  @mouseout=${this._onItemMouseOut}
                  data-index=${v}
                ></vscode-context-menu-item>
              `):B`<slot></slot>`}
      </div>
    `}};nl.styles=Lg;fi([_({type:Array,attribute:!1})],nl.prototype,"data",null);fi([_({type:Boolean,reflect:!0,attribute:"prevent-close"})],nl.prototype,"preventClose",void 0);fi([_({type:Boolean,reflect:!0})],nl.prototype,"show",null);fi([_({type:Number,reflect:!0})],nl.prototype,"tabIndex",void 0);fi([P()],nl.prototype,"_selectedClickableItemIndex",void 0);fi([P()],nl.prototype,"_show",void 0);fi([at(".context-menu")],nl.prototype,"_wrapperEl",void 0);nl=fi([ne("vscode-context-menu")],nl);const jg=[oe,ie`
    :host {
      background-color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 1px;
      margin-bottom: 10px;
      margin-top: 10px;
      opacity: 0.4;
    }
  `];var fv=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let ts=class extends ue{constructor(){super(...arguments),this.role="separator"}render(){return B``}};ts.styles=jg;fv([_({reflect:!0})],ts.prototype,"role",void 0);ts=fv([ne("vscode-divider")],ts);const Yg=[oe,ie`
    :host {
      display: block;
      max-width: 727px;
    }
  `];var qn=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r},Vi;(function(d){d.HORIZONTAL="horizontal",d.VERTICAL="vertical"})(Vi||(Vi={}));const Gg=d=>["vscode-textfield","vscode-textarea"].includes(d.tagName.toLocaleLowerCase()),Xg=d=>d.tagName.toLocaleLowerCase()==="vscode-single-select",Qg=d=>d.tagName.toLocaleLowerCase()==="vscode-multi-select",jp=d=>d.tagName.toLocaleLowerCase()==="vscode-checkbox",Yp=d=>d.tagName.toLocaleLowerCase()==="vscode-radio";let Bl=class extends ue{constructor(){super(...arguments),this.breakpoint=490,this._responsive=!1,this._firstUpdateComplete=!1,this._resizeObserverCallbackBound=this._resizeObserverCallback.bind(this)}set responsive(n){this._responsive=n,this._firstUpdateComplete&&(n?this._activateResponsiveLayout():this._deactivateResizeObserver())}get responsive(){return this._responsive}get data(){return this._collectFormData()}_collectFormData(){const n=["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select","vscode-checkbox","vscode-radio"].join(","),s=this.querySelectorAll(n),o={};return s.forEach(u=>{if(!u.hasAttribute("name"))return;const r=u.getAttribute("name");r&&(jp(u)&&u.checked?o[r]=Array.isArray(o[r])?[...o[r],u.value]:[u.value]:Qg(u)?o[r]=u.value:jp(u)&&!u.checked?o[r]=Array.isArray(o[r])?o[r]:[]:Yp(u)&&u.checked||Gg(u)||Xg(u)?o[r]=u.value:Yp(u)&&!u.checked&&(o[r]=o[r]?o[r]:""))}),o}_toggleCompactLayout(n){this._assignedFormGroups.forEach(s=>{s.dataset.originalVariant||(s.dataset.originalVariant=s.variant);const o=s.dataset.originalVariant;n===Vi.VERTICAL&&o==="horizontal"?s.variant="vertical":s.variant=o,s.querySelectorAll("vscode-checkbox-group, vscode-radio-group").forEach(r=>{r.dataset.originalVariant||(r.dataset.originalVariant=r.variant);const h=r.dataset.originalVariant;n===Vi.HORIZONTAL&&h===Vi.HORIZONTAL?r.variant="horizontal":r.variant="vertical"})})}_resizeObserverCallback(n){let s=0;for(const u of n)s=u.contentRect.width;const o=s<this.breakpoint?Vi.VERTICAL:Vi.HORIZONTAL;o!==this._currentFormGroupLayout&&(this._toggleCompactLayout(o),this._currentFormGroupLayout=o)}_activateResponsiveLayout(){this._resizeObserver=new ResizeObserver(this._resizeObserverCallbackBound),this._resizeObserver.observe(this._wrapperElement)}_deactivateResizeObserver(){var n;(n=this._resizeObserver)==null||n.disconnect(),this._resizeObserver=null}firstUpdated(){this._firstUpdateComplete=!0,this._responsive&&this._activateResponsiveLayout()}render(){return B`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Bl.styles=Yg;qn([_({type:Boolean,reflect:!0})],Bl.prototype,"responsive",null);qn([_({type:Number})],Bl.prototype,"breakpoint",void 0);qn([_({type:Object})],Bl.prototype,"data",null);qn([at(".wrapper")],Bl.prototype,"_wrapperElement",void 0);qn([al({selector:"vscode-form-group"})],Bl.prototype,"_assignedFormGroups",void 0);Bl=qn([ne("vscode-form-container")],Bl);const Zg=[oe,ie`
    :host {
      --label-right-margin: 14px;
      --label-width: 150px;

      display: block;
      margin: 15px 0;
    }

    :host([variant='settings-group']) {
      margin: 0;
      padding: 12px 14px 18px;
      max-width: 727px;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper,
    :host([variant='settings-group']) .wrapper {
      display: block;
    }

    :host([variant='horizontal']) ::slotted(vscode-checkbox-group),
    :host([variant='horizontal']) ::slotted(vscode-radio-group) {
      width: calc(100% - calc(var(--label-width) + var(--label-right-margin)));
    }

    :host([variant='horizontal']) ::slotted(vscode-label) {
      margin-right: var(--label-right-margin);
      text-align: right;
      width: var(--label-width);
    }

    :host([variant='settings-group']) ::slotted(vscode-label) {
      height: 18px;
      line-height: 18px;
      margin-bottom: 4px;
      margin-right: 0;
      padding: 0;
    }

    ::slotted(vscode-form-helper) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-form-helper),
    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      display: block;
      margin-left: 0;
    }

    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      margin-bottom: 0;
      margin-top: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-label),
    :host([variant='settings-group']) ::slotted(vscode-label) {
      display: block;
      margin-left: 0;
      text-align: left;
    }

    :host([variant='settings-group']) ::slotted(vscode-inputbox),
    :host([variant='settings-group']) ::slotted(vscode-textfield),
    :host([variant='settings-group']) ::slotted(vscode-textarea),
    :host([variant='settings-group']) ::slotted(vscode-single-select),
    :host([variant='settings-group']) ::slotted(vscode-multi-select) {
      margin-top: 9px;
    }

    ::slotted(vscode-button:first-child) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-button) {
      margin-left: 0;
    }

    ::slotted(vscode-button) {
      margin-right: 4px;
    }
  `];var hv=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let ls=class extends ue{constructor(){super(...arguments),this.variant="horizontal"}render(){return B`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};ls.styles=Zg;hv([_({reflect:!0})],ls.prototype,"variant",void 0);ls=hv([ne("vscode-form-group")],ls);const Kg=[oe,ie`
    :host {
      display: block;
      line-height: 1.4em;
      margin-bottom: 4px;
      margin-top: 4px;
      max-width: 720px;
      opacity: 0.9;
    }

    :host([vertical]) {
      margin-left: 0;
    }
  `];var Ig=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};const du=new CSSStyleSheet;du.replaceSync(`
  vscode-form-helper * {
    margin: 0;
  }

  vscode-form-helper *:not(:last-child) {
    margin-bottom: 8px;
  }
`);let Do=class extends ue{constructor(){super(),this._injectLightDOMStyles()}_injectLightDOMStyles(){document.adoptedStyleSheets.find(s=>s===du)||document.adoptedStyleSheets.push(du)}render(){return B`<slot></slot>`}};Do.styles=Kg;Do=Ig([ne("vscode-form-helper")],Do);let Gp=0;const pv=(d="")=>(Gp++,`${d}${Gp}`),Jg=[oe,ie`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-radio) {
      margin-right: 20px;
    }

    ::slotted(vscode-radio:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-radio) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-radio:last-child) {
      margin-bottom: 0;
    }
  `];var Ln=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let pl=class extends ue{constructor(){super(...arguments),this.variant="horizontal",this.role="radiogroup",this._focusedRadio=-1,this._checkedRadio=-1,this._firstContentLoaded=!1,this._onKeyDownBound=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeyDownBound)}_uncheckPreviousChecked(n,s){n!==-1&&(this._radios[n].checked=!1),s!==-1&&(this._radios[s].tabIndex=-1)}_afterCheck(){this._focusedRadio=this._checkedRadio,this._radios[this._checkedRadio].checked=!0,this._radios[this._checkedRadio].tabIndex=0,this._radios[this._checkedRadio].focus()}_checkPrev(){const n=this._radios.findIndex(u=>u.checked),s=this._radios.findIndex(u=>u.focused),o=s!==-1?s:n;this._uncheckPreviousChecked(n,s),o===-1?this._checkedRadio=this._radios.length-1:o-1>=0?this._checkedRadio=o-1:this._checkedRadio=this._radios.length-1,this._afterCheck()}_checkNext(){const n=this._radios.findIndex(u=>u.checked),s=this._radios.findIndex(u=>u.focused),o=s!==-1?s:n;this._uncheckPreviousChecked(n,s),o===-1?this._checkedRadio=0:o+1<this._radios.length?this._checkedRadio=o+1:this._checkedRadio=0,this._afterCheck()}_onKeyDown(n){const{key:s}=n;["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(s)&&n.preventDefault(),(s==="ArrowRight"||s==="ArrowDown")&&this._checkNext(),(s==="ArrowLeft"||s==="ArrowUp")&&this._checkPrev()}_onChange(n){const s=this._radios.findIndex(o=>o===n.target);s!==-1&&(this._focusedRadio!==-1&&(this._radios[this._focusedRadio].tabIndex=-1),this._checkedRadio!==-1&&this._checkedRadio!==s&&(this._radios[this._checkedRadio].checked=!1),this._focusedRadio=s,this._checkedRadio=s,this._radios[s].tabIndex=0)}_onSlotChange(){if(!this._firstContentLoaded){const n=this._radios.findIndex(s=>s.autofocus);n>-1&&(this._focusedRadio=n),this._firstContentLoaded=!0}this._radios.forEach((n,s)=>{this._focusedRadio>-1?n.tabIndex=s===this._focusedRadio?0:-1:n.tabIndex=s===0?0:-1})}render(){return B`
      <div class="wrapper">
        <slot
          @slotchange=${this._onSlotChange}
          @vsc-change=${this._onChange}
        ></slot>
      </div>
    `}};pl.styles=Jg;Ln([_({reflect:!0})],pl.prototype,"variant",void 0);Ln([_({reflect:!0})],pl.prototype,"role",void 0);Ln([al({selector:"vscode-radio"})],pl.prototype,"_radios",void 0);Ln([P()],pl.prototype,"_focusedRadio",void 0);Ln([P()],pl.prototype,"_checkedRadio",void 0);pl=Ln([ne("vscode-radio-group")],pl);const Fg=[oe,ie`
    :host {
      display: inline-block;
      height: 40px;
      position: relative;
      width: 320px;
    }

    :host([cols]) {
      width: auto;
    }

    :host([rows]) {
      height: auto;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      inset: 0 0 auto 0;
      height: 6px;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    textarea {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(--vscode-settings-textInputBorder, transparent);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 100%;
      width: 100%;
    }

    :host([cols]) textarea {
      width: auto;
    }

    :host([rows]) textarea {
      height: auto;
    }

    :host([invalid]) textarea,
    :host(:invalid) textarea {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    textarea.monospace {
      background-color: var(--vscode-editor-background, #1f1f1f);
      color: var(--vscode-editor-foreground, #cccccc);
      font-family: var(--vscode-editor-font-family, monospace);
      font-size: var(--vscode-editor-font-size, 14px);
      font-weight: var(--vscode-editor-font-weight, normal);
    }

    .textarea.monospace::placeholder {
      color: var(
        --vscode-editor-inlineValuesForeground,
        rgba(255, 255, 255, 0.5)
      );
    }

    textarea.cursor-pointer {
      cursor: pointer;
    }

    textarea:focus {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    textarea::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    textarea::-webkit-scrollbar-track {
      background-color: transparent;
    }

    textarea::-webkit-scrollbar {
      width: 14px;
    }

    textarea::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    textarea:hover::-webkit-scrollbar-thumb {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
    }

    textarea::-webkit-scrollbar-thumb:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    textarea::-webkit-scrollbar-thumb:active {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    textarea::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    textarea::-webkit-resizer {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJxjYMAOZuIQZ5j5//9/rJJESczEKYGsG6cEXgAAsEEefMxkua4AAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      background-position: right bottom;
    }
  `];var $e=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let _e=class extends ue{set value(n){this._value=n,this._internals.setFormValue(n)}get value(){return this._value}get wrappedElement(){return this._textareaEl}get form(){return this._internals.form}get type(){return"textarea"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}set minlength(n){this.minLength=n}get minlength(){return this.minLength}set maxlength(n){this.maxLength=n}get maxlength(){return this.maxLength}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.invalid=!1,this.label="",this.maxLength=void 0,this.minLength=void 0,this.rows=void 0,this.cols=void 0,this.name=void 0,this.placeholder=void 0,this.readonly=!1,this.resize="none",this.required=!1,this.spellcheck=!1,this.monospace=!1,this._value="",this._textareaPointerCursor=!1,this._shadow=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._textareaEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._textareaEl.value)})}updated(n){const s=["maxLength","minLength","required"];for(const o of n.keys())if(s.includes(String(o))){this.updateComplete.then(()=>{this._setValidityFromInput()});break}}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(n,s){this.updateComplete.then(()=>{this._value=n})}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_setValidityFromInput(){this._internals.setValidity(this._textareaEl.validity,this._textareaEl.validationMessage,this._textareaEl)}_dataChanged(){this._value=this._textareaEl.value,this._internals.setFormValue(this._textareaEl.value)}_handleChange(n){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:n}}))}_handleInput(n){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:n.data,originalEvent:n}}))}_handleMouseMove(n){if(this._textareaEl.clientHeight>=this._textareaEl.scrollHeight){this._textareaPointerCursor=!1;return}const s=14,o=1,u=this._textareaEl.getBoundingClientRect(),r=n.clientX;this._textareaPointerCursor=r>=u.left+u.width-s-o*2}_handleScroll(){this._shadow=this._textareaEl.scrollTop>0}render(){return B`
      <div
        class=${ge({shadow:!0,visible:this._shadow})}
      ></div>
      <textarea
        autocomplete=${we(this.autocomplete)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        id="textarea"
        class=${ge({monospace:this.monospace,"cursor-pointer":this._textareaPointerCursor})}
        maxlength=${we(this.maxLength)}
        minlength=${we(this.minLength)}
        rows=${we(this.rows)}
        cols=${we(this.cols)}
        name=${we(this.name)}
        placeholder=${we(this.placeholder)}
        ?readonly=${this.readonly}
        .style=${bt({resize:this.resize})}
        ?required=${this.required}
        spellcheck=${this.spellcheck}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @mousemove=${this._handleMouseMove}
        @scroll=${this._handleScroll}
        .value=${this._value}
      ></textarea>
    `}};_e.styles=Fg;_e.formAssociated=!0;_e.shadowRootOptions={...il.shadowRootOptions,delegatesFocus:!0};$e([_()],_e.prototype,"autocomplete",void 0);$e([_({type:Boolean,reflect:!0})],_e.prototype,"autofocus",void 0);$e([_({attribute:"default-value"})],_e.prototype,"defaultValue",void 0);$e([_({type:Boolean,reflect:!0})],_e.prototype,"disabled",void 0);$e([_({type:Boolean,reflect:!0})],_e.prototype,"invalid",void 0);$e([_({attribute:!1})],_e.prototype,"label",void 0);$e([_({type:Number})],_e.prototype,"maxLength",void 0);$e([_({type:Number})],_e.prototype,"minLength",void 0);$e([_({type:Number})],_e.prototype,"rows",void 0);$e([_({type:Number})],_e.prototype,"cols",void 0);$e([_()],_e.prototype,"name",void 0);$e([_()],_e.prototype,"placeholder",void 0);$e([_({type:Boolean,reflect:!0})],_e.prototype,"readonly",void 0);$e([_()],_e.prototype,"resize",void 0);$e([_({type:Boolean,reflect:!0})],_e.prototype,"required",void 0);$e([_({type:Boolean})],_e.prototype,"spellcheck",void 0);$e([_({type:Boolean,reflect:!0})],_e.prototype,"monospace",void 0);$e([_()],_e.prototype,"value",null);$e([at("#textarea")],_e.prototype,"_textareaEl",void 0);$e([P()],_e.prototype,"_value",void 0);$e([P()],_e.prototype,"_textareaPointerCursor",void 0);$e([P()],_e.prototype,"_shadow",void 0);_e=$e([ne("vscode-textarea")],_e);const Xp=Mo(_u()),Pg=[oe,ie`
    :host {
      align-items: center;
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(
        --vscode-settings-textInputBorder,
        var(--vscode-settings-textInputBackground, #3c3c3c)
      );
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: inline-flex;
      max-width: 100%;
      position: relative;
      width: 320px;
    }

    :host([focused]) {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    :host([invalid]),
    :host(:invalid) {
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    :host([invalid]) input,
    :host(:invalid) input {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
    }

    ::slotted([slot='content-before']) {
      display: block;
      margin-left: 2px;
    }

    ::slotted([slot='content-after']) {
      display: block;
      margin-right: 2px;
    }

    slot[name='content-before'],
    slot[name='content-after'] {
      align-items: center;
      display: flex;
    }

    input {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border: 0;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, ${Xp});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 18px;
      outline: none;
      padding-bottom: 3px;
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 3px;
      width: 100%;
    }

    input:read-only:not([type='file']) {
      cursor: not-allowed;
    }

    input::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    input[type='file'] {
      line-height: 24px;
      padding-bottom: 0;
      padding-left: 2px;
      padding-top: 0;
    }

    input[type='file']::file-selector-button {
      background-color: var(--vscode-button-background, #0078d4);
      border: 0;
      border-radius: 2px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      font-family: var(--vscode-font-family, ${Xp});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 20px;
      padding: 0 14px;
    }

    input[type='file']::file-selector-button:hover {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }
  `];var Me=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let pe=class extends ue{set type(n){const s=["color","date","datetime-local","email","file","month","number","password","search","tel","text","time","url","week"];this._type=s.includes(n)?n:"text"}get type(){return this._type}set value(n){this.type!=="file"&&(this._value=n,this._internals.setFormValue(n)),this.updateComplete.then(()=>{this._setValidityFromInput()})}get value(){return this._value}set minlength(n){this.minLength=n}get minlength(){return this.minLength}set maxlength(n){this.maxLength=n}get maxlength(){return this.maxLength}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._setValidityFromInput(),this._internals.checkValidity()}reportValidity(){return this._setValidityFromInput(),this._internals.reportValidity()}get wrappedElement(){return this._inputEl}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.focused=!1,this.invalid=!1,this.label="",this.max=void 0,this.maxLength=void 0,this.min=void 0,this.minLength=void 0,this.multiple=!1,this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.step=void 0,this._value="",this._type="text",this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._inputEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._inputEl.value)})}attributeChangedCallback(n,s,o){super.attributeChangedCallback(n,s,o),["max","maxlength","min","minlength","pattern","required","step"].includes(n)&&this.updateComplete.then(()=>{this._setValidityFromInput()})}formResetCallback(){this.value=this.defaultValue,this.requestUpdate()}formStateRestoreCallback(n,s){this.value=n}_dataChanged(){if(this._value=this._inputEl.value,this.type==="file"&&this._inputEl.files)for(const n of this._inputEl.files)this._internals.setFormValue(n);else this._internals.setFormValue(this._inputEl.value)}_setValidityFromInput(){this._inputEl&&this._internals.setValidity(this._inputEl.validity,this._inputEl.validationMessage,this._inputEl)}_onInput(n){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:n.data,originalEvent:n}}))}_onChange(n){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:n}}))}_onFocus(){this.focused=!0}_onBlur(){this.focused=!1}_onKeyDown(n){var s;n.key==="Enter"&&this._internals.form&&((s=this._internals.form)==null||s.requestSubmit())}render(){return B`
      <slot name="content-before"></slot>
      <input
        id="input"
        type=${this.type}
        ?autofocus=${this.autofocus}
        autocomplete=${we(this.autocomplete)}
        aria-label=${this.label}
        ?disabled=${this.disabled}
        max=${we(this.max)}
        maxlength=${we(this.maxLength)}
        min=${we(this.min)}
        minlength=${we(this.minLength)}
        ?multiple=${this.multiple}
        name=${we(this.name)}
        pattern=${we(this.pattern)}
        placeholder=${we(this.placeholder)}
        ?readonly=${this.readonly}
        ?required=${this.required}
        step=${we(this.step)}
        .value=${this._value}
        @blur=${this._onBlur}
        @change=${this._onChange}
        @focus=${this._onFocus}
        @input=${this._onInput}
        @keydown=${this._onKeyDown}
      >
      <slot name="content-after"></slot>
    `}};pe.styles=Pg;pe.formAssociated=!0;pe.shadowRootOptions={...il.shadowRootOptions,delegatesFocus:!0};Me([_()],pe.prototype,"autocomplete",void 0);Me([_({type:Boolean,reflect:!0})],pe.prototype,"autofocus",void 0);Me([_({attribute:"default-value"})],pe.prototype,"defaultValue",void 0);Me([_({type:Boolean,reflect:!0})],pe.prototype,"disabled",void 0);Me([_({type:Boolean,reflect:!0})],pe.prototype,"focused",void 0);Me([_({type:Boolean,reflect:!0})],pe.prototype,"invalid",void 0);Me([_({attribute:!1})],pe.prototype,"label",void 0);Me([_({type:Number})],pe.prototype,"max",void 0);Me([_({type:Number})],pe.prototype,"maxLength",void 0);Me([_({type:Number})],pe.prototype,"min",void 0);Me([_({type:Number})],pe.prototype,"minLength",void 0);Me([_({type:Boolean,reflect:!0})],pe.prototype,"multiple",void 0);Me([_({reflect:!0})],pe.prototype,"name",void 0);Me([_()],pe.prototype,"pattern",void 0);Me([_()],pe.prototype,"placeholder",void 0);Me([_({type:Boolean,reflect:!0})],pe.prototype,"readonly",void 0);Me([_({type:Boolean,reflect:!0})],pe.prototype,"required",void 0);Me([_({type:Number})],pe.prototype,"step",void 0);Me([_({reflect:!0})],pe.prototype,"type",null);Me([_()],pe.prototype,"value",null);Me([at("#input")],pe.prototype,"_inputEl",void 0);Me([P()],pe.prototype,"_value",void 0);Me([P()],pe.prototype,"_type",void 0);pe=Me([ne("vscode-textfield")],pe);const Wg=[oe,ie`
    :host {
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: 600;
      line-height: ${Tg};
      cursor: default;
      display: block;
      padding: 5px 0;
    }

    .wrapper {
      display: block;
    }

    .wrapper.required:after {
      content: ' *';
    }

    ::slotted(.normal) {
      font-weight: normal;
    }

    ::slotted(.lightened) {
      color: var(--vscode-foreground, #cccccc);
      opacity: 0.9;
    }
  `];var ko=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let ji=class extends ue{constructor(){super(...arguments),this.required=!1,this._id="",this._htmlFor="",this._connected=!1}set htmlFor(n){this._htmlFor=n,this.setAttribute("for",n),this._connected&&this._connectWithTarget()}get htmlFor(){return this._htmlFor}set id(n){this._id=n}get id(){return this._id}attributeChangedCallback(n,s,o){super.attributeChangedCallback(n,s,o)}connectedCallback(){super.connectedCallback(),this._connected=!0,this._id===""&&(this._id=pv("vscode-label-"),this.setAttribute("id",this._id)),this._connectWithTarget()}_getTarget(){let n=null;if(this._htmlFor){const s=this.getRootNode({composed:!1});s&&(n=s.querySelector(`#${this._htmlFor}`))}return n}async _connectWithTarget(){await this.updateComplete;const n=this._getTarget();(n instanceof pl||n instanceof qi)&&n.setAttribute("aria-labelledby",this._id);let s="";this.textContent&&(s=this.textContent.trim()),(n instanceof pe||n instanceof _e)&&(n.label=s)}_handleClick(){const n=this._getTarget();n&&"focus"in n&&n.focus()}render(){return B`
      <label
        class=${ge({wrapper:!0,required:this.required})}
        @click=${this._handleClick}
        ><slot></slot
      ></label>
    `}};ji.styles=Wg;ko([_({reflect:!0,attribute:"for"})],ji.prototype,"htmlFor",null);ko([_()],ji.prototype,"id",null);ko([_({type:Boolean,reflect:!0})],ji.prototype,"required",void 0);ji=ko([ne("vscode-label")],ji);const Au=B`
  <span class="icon">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
      />
    </svg>
  </span>
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:e_}=yg,Qp=()=>document.createComment(""),Xa=(d,n,s)=>{var r;const o=d._$AA.parentNode,u=n===void 0?d._$AB:n._$AA;if(s===void 0){const h=o.insertBefore(Qp(),u),v=o.insertBefore(Qp(),u);s=new e_(h,v,d,d.options)}else{const h=s._$AB.nextSibling,v=s._$AM,x=v!==d;if(x){let S;(r=s._$AQ)==null||r.call(s,d),s._$AM=d,s._$AP!==void 0&&(S=d._$AU)!==v._$AU&&s._$AP(S)}if(h!==u||x){let S=s._$AA;for(;S!==h;){const D=S.nextSibling;o.insertBefore(S,u),S=D}}}return s},ki=(d,n,s=d)=>(d._$AI(n,s),d),t_={},l_=(d,n=t_)=>d._$AH=n,i_=d=>d._$AH,ru=d=>{var o;(o=d._$AP)==null||o.call(d,!1,!0);let n=d._$AA;const s=d._$AB.nextSibling;for(;n!==s;){const u=n.nextSibling;n.remove(),n=u}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zp=(d,n,s)=>{const o=new Map;for(let u=n;u<=s;u++)o.set(d[u],u);return o},n_=xu(class extends Su{constructor(d){if(super(d),d.type!==yu.CHILD)throw Error("repeat() can only be used in text expressions")}dt(d,n,s){let o;s===void 0?s=n:n!==void 0&&(o=n);const u=[],r=[];let h=0;for(const v of d)u[h]=o?o(v,h):h,r[h]=s(v,h),h++;return{values:r,keys:u}}render(d,n,s){return this.dt(d,n,s).values}update(d,[n,s,o]){const u=i_(d),{values:r,keys:h}=this.dt(n,s,o);if(!Array.isArray(u))return this.ut=h,r;const v=this.ut??(this.ut=[]),x=[];let S,D,$=0,N=u.length-1,H=0,k=r.length-1;for(;$<=N&&H<=k;)if(u[$]===null)$++;else if(u[N]===null)N--;else if(v[$]===h[H])x[H]=ki(u[$],r[H]),$++,H++;else if(v[N]===h[k])x[k]=ki(u[N],r[k]),N--,k--;else if(v[$]===h[k])x[k]=ki(u[$],r[k]),Xa(d,x[k+1],u[$]),$++,k--;else if(v[N]===h[H])x[H]=ki(u[N],r[H]),Xa(d,u[$],u[N]),N--,H++;else if(S===void 0&&(S=Zp(h,H,k),D=Zp(v,$,N)),S.has(v[$]))if(S.has(v[N])){const J=D.get(h[H]),ve=J!==void 0?u[J]:null;if(ve===null){const et=Xa(d,u[$]);ki(et,r[H]),x[H]=et}else x[H]=ki(ve,r[H]),Xa(d,u[$],ve),u[J]=null;H++}else ru(u[N]),N--;else ru(u[$]),$++;for(;H<=k;){const J=Xa(d,x[k+1]);ki(J,r[H]),x[H++]=J}for(;$<=N;){const J=u[$++];J!==null&&ru(J)}return this.ut=h,l_(d,x),hl}});var os=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let di=class extends ue{constructor(){super(...arguments),this.description="",this.selected=!1,this.disabled=!1,this._initialized=!1,this._handleSlotChange=()=>{this._initialized&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._initialized=!0})}willUpdate(n){this._initialized&&(n.has("description")||n.has("value")||n.has("selected")||n.has("disabled"))&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}render(){return B`<slot @slotchange=${this._handleSlotChange}></slot>`}};di.styles=oe;os([_({type:String})],di.prototype,"value",void 0);os([_({type:String})],di.prototype,"description",void 0);os([_({type:Boolean,reflect:!0})],di.prototype,"selected",void 0);os([_({type:Boolean,reflect:!0})],di.prototype,"disabled",void 0);di=os([ne("vscode-option")],di);const a_=(d,n)=>{const s={match:!1,ranges:[]},o=d.toLowerCase(),u=n.toLowerCase(),r=o.split(" ");let h=0;return r.forEach((v,x)=>{if(x>0&&(h+=r[x-1].length+1),s.match)return;const S=v.indexOf(u),D=u.length;S===0&&(s.match=!0,s.ranges.push([h+S,Math.min(h+S+D,d.length)]))}),s},s_=(d,n)=>{const s={match:!1,ranges:[]};return d.toLowerCase().indexOf(n.toLowerCase())===0&&(s.match=!0,s.ranges=[[0,n.length]]),s},o_=(d,n)=>{const s={match:!1,ranges:[]},o=d.toLowerCase().indexOf(n.toLowerCase());return o>-1&&(s.match=!0,s.ranges=[[o,o+n.length]]),s},c_=(d,n)=>{const s={match:!1,ranges:[]};let o=0,u=0;const r=n.length-1,h=d.toLowerCase(),v=n.toLowerCase();for(let x=0;x<=r;x++){if(u=h.indexOf(v[x],o),u===-1)return{match:!1,ranges:[]};s.match=!0,s.ranges.push([u,u+1]),o=u+1}return s},r_=(d,n,s)=>{const o=[];return d.forEach(u=>{let r;switch(s){case"startsWithPerTerm":r=a_(u.label,n);break;case"startsWith":r=s_(u.label,n);break;case"contains":r=o_(u.label,n);break;default:r=c_(u.label,n)}r.match&&o.push({...u,ranges:r.ranges})}),o},Co=d=>{const n=[];return d===" "?(n.push(B`&nbsp;`),n):(d.indexOf(" ")===0&&n.push(B`&nbsp;`),n.push(B`${d.trimStart().trimEnd()}`),d.lastIndexOf(" ")===d.length-1&&n.push(B`&nbsp;`),n)},u_=(d,n)=>{const s=[],o=n.length;return o<1?B`${d}`:(n.forEach((u,r)=>{const h=d.substring(u[0],u[1]);r===0&&u[0]!==0&&s.push(...Co(d.substring(0,n[0][0]))),r>0&&r<o&&u[0]-n[r-1][1]!==0&&s.push(...Co(d.substring(n[r-1][1],u[0]))),s.push(B`<b>${Co(h)}</b>`),r===o-1&&u[1]<d.length&&s.push(...Co(d.substring(u[1],d.length)))}),s)};function vv(d,n){let s=0;if(n<0||!d[n]||!d[n+1])return s;for(let o=n+1;o<d.length;o++)if(!d[o].disabled){s=o;break}return s}function bv(d,n){let s=0;if(n<0||!d[n]||!d[n-1])return s;for(let o=n-1;o>=0;o--)if(!d[o].disabled){s=o;break}return s}var Re=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};const Ao=10,oi=22;class Ee extends ue{set disabled(n){this._disabled=n,this.ariaDisabled=n?"true":"false",n===!0?(this._originalTabIndex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this._originalTabIndex??0,this._originalTabIndex=void 0),this.requestUpdate()}get disabled(){return this._disabled}set filter(n){["contains","fuzzy","startsWith","startsWithPerTerm"].includes(n)?this._filter=n:(this._filter="fuzzy",console.warn(`[VSCode Webview Elements] Invalid filter: "${n}", fallback to default. Valid values are: "contains", "fuzzy", "startsWith", "startsWithPerm".`,this))}get filter(){return this._filter}set options(n){this._options=n.map((s,o)=>({...s,index:o}))}get options(){return this._options.map(({label:n,value:s,description:o,selected:u,disabled:r})=>({label:n,value:s,description:o,selected:u,disabled:r}))}constructor(){super(),this.ariaExpanded="false",this.creatable=!1,this.combobox=!1,this.invalid=!1,this.focused=!1,this.open=!1,this.position="below",this.tabIndex=0,this._firstUpdateCompleted=!1,this._activeIndex=-1,this._currentDescription="",this._filter="fuzzy",this._filterPattern="",this._selectedIndex=-1,this._selectedIndexes=[],this._options=[],this._value="",this._values=[],this._listScrollTop=0,this._isPlaceholderOptionActive=!1,this._isBeingFiltered=!1,this._multiple=!1,this._valueOptionIndexMap={},this._isHoverForbidden=!1,this._disabled=!1,this._originalTabIndex=void 0,this._onClickOutside=n=>{n.composedPath().findIndex(u=>u===this)===-1&&(this._toggleDropdown(!1),window.removeEventListener("click",this._onClickOutside))},this._onMouseMove=()=>{this._isHoverForbidden=!1,window.removeEventListener("mousemove",this._onMouseMove)},this._onComponentKeyDown=n=>{[" ","ArrowUp","ArrowDown","Escape"].includes(n.key)&&(n.stopPropagation(),n.preventDefault()),n.key==="Enter"&&this._onEnterKeyDown(n),n.key===" "&&this._onSpaceKeyDown(),n.key==="Escape"&&this._toggleDropdown(!1),n.key==="ArrowUp"&&this._onArrowUpKeyDown(),n.key==="ArrowDown"&&this._onArrowDownKeyDown()},this._onComponentFocus=()=>{this.focused=!0},this._onComponentBlur=()=>{this.focused=!1},this.addEventListener("vsc-option-state-change",n=>{n.stopPropagation(),this._setStateFromSlottedElements(),this.requestUpdate()})}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onComponentKeyDown),this.addEventListener("focus",this._onComponentFocus),this.addEventListener("blur",this._onComponentBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onComponentKeyDown),this.removeEventListener("focus",this._onComponentFocus),this.removeEventListener("blur",this._onComponentBlur)}firstUpdated(n){this._firstUpdateCompleted=!0}willUpdate(n){n.has("required")&&this._firstUpdateCompleted&&this._manageRequired()}get _filteredOptions(){return!this.combobox||this._filterPattern===""?this._options:r_(this._options,this._filterPattern,this._filter)}get _currentOptions(){return this.combobox?this._filteredOptions:this._options}get _isSuggestedOptionVisible(){if(!(this.combobox&&this.creatable))return!1;const n=typeof this._valueOptionIndexMap[this._filterPattern]<"u",s=this._filterPattern.length>0;return!n&&s}_manageRequired(){}_setStateFromSlottedElements(){const n=[];let s=0;const o=this._assignedOptions??[],u=[],r=[];this._valueOptionIndexMap={},o.forEach((h,v)=>{const{innerText:x,description:S,disabled:D}=h,$=typeof h.value=="string"?h.value:x.trim(),N=h.selected??!1,H={label:x.trim(),value:$,description:S,selected:N,index:s,disabled:D};s=n.push(H),N&&!this._multiple&&(this._activeIndex=v),N&&(u.push(n.length-1),r.push($)),this._valueOptionIndexMap[H.value]=H.index}),this._options=n,u.length>0&&(this._selectedIndex=u[0],this._selectedIndexes=u,this._value=r[0],this._values=r),!this._multiple&&!this.combobox&&u.length===0&&(this._selectedIndex=this._options.length>0?0:-1)}async _toggleDropdown(n){this.open=n,this.ariaExpanded=String(n),n&&!this._multiple&&(this._activeIndex=this._selectedIndex),n&&!this._multiple&&!this.combobox&&(this._activeIndex=this._selectedIndex,this._activeIndex>Ao-1&&(await this.updateComplete,this._listElement.scrollTop=Math.floor(this._activeIndex*oi))),n?window.addEventListener("click",this._onClickOutside):window.removeEventListener("click",this._onClickOutside)}_createSuggestedOption(){const n=this._options.length,s=document.createElement("vscode-option");return s.value=this._filterPattern,cv(this._filterPattern,s),this.appendChild(s),n}_dispatchChangeEvent(){this._multiple?this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndexes:this._selectedIndexes,value:this._values}})):this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndex:this._selectedIndex,value:this._value}})),this.dispatchEvent(new Event("change")),this.dispatchEvent(new Event("input"))}async _createAndSelectSuggestedOption(){}_onFaceClick(){this._toggleDropdown(!this.open),this._multiple&&(this._activeIndex=0)}_toggleComboboxDropdown(){this._filterPattern="",this._toggleDropdown(!this.open),this._multiple&&(this._activeIndex=-1)}_onComboboxButtonClick(){this._toggleComboboxDropdown()}_onComboboxButtonKeyDown(n){n.key==="Enter"&&this._toggleComboboxDropdown()}_onOptionMouseOver(n){if(this._isHoverForbidden)return;const s=n.target;s.matches(".option")&&(s.matches(".placeholder")?(this._isPlaceholderOptionActive=!0,this._activeIndex=-1):(this._isPlaceholderOptionActive=!1,this._activeIndex=Number(this.combobox?s.dataset.filteredIndex:s.dataset.index)))}_onPlaceholderOptionMouseOut(){this._isPlaceholderOptionActive=!1}_onNoOptionsClick(n){n.stopPropagation()}_onEnterKeyDown(n){if(this._isBeingFiltered=!1,n!=null&&n.composedPath?n.composedPath().find(r=>r.matches?r.matches("vscode-button.button-accept"):!1):!1)return;const o=this.combobox?this._filteredOptions:this._options,u=!this.open;this._toggleDropdown(u),!this._multiple&&!u&&this._selectedIndex!==this._activeIndex&&(this._selectedIndex=this._activeIndex>-1?o[this._activeIndex].index:-1,this._value=this._selectedIndex>-1?this._options[this._selectedIndex].value:"",this._dispatchChangeEvent()),this.combobox&&(this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(!this._multiple&&!u&&(this._selectedIndex=this._activeIndex>-1?this._filteredOptions[this._activeIndex].index:-1),!this._multiple&&u&&this.updateComplete.then(()=>{this._scrollActiveElementToTop()}))),this._multiple&&u&&(this._activeIndex=0)}_onSpaceKeyDown(){if(!this.open){this._toggleDropdown(!0);return}if(this.open&&this._multiple&&this._activeIndex>-1){const n=this.combobox?this._filteredOptions:this._options,s=n[this._activeIndex],o=[];this._options[s.index].selected=!s.selected,n.forEach(({index:u})=>{const{selected:r}=this._options[u];r&&o.push(u)}),this._selectedIndexes=o}}_scrollActiveElementToTop(){this._listElement.scrollTop=Math.floor(this._activeIndex*oi)}async _adjustOptionListScrollPos(n,s){let o=this.combobox?this._filteredOptions.length:this._options.length;if(this._isSuggestedOptionVisible&&(o+=1),o<=Ao)return;this._isHoverForbidden=!0,window.addEventListener("mousemove",this._onMouseMove);const r=this._listElement.scrollTop,h=s*oi,v=h>=r&&h<=r+Ao*oi-oi;n==="down"&&(v||(this._listElement.scrollTop=s*oi-(Ao-1)*oi)),n==="up"&&(v||(this._listElement.scrollTop=Math.floor(this._activeIndex*oi)))}_onArrowUpKeyDown(){if(this.open){if(this._activeIndex<=0&&!(this.combobox&&this.creatable))return;if(this._isPlaceholderOptionActive){const n=this._currentOptions.length-1;this._activeIndex=n,this._isPlaceholderOptionActive=!1}else{const n=this.combobox?this._filteredOptions:this._options,s=bv(n,this._activeIndex);s>-1&&(this._activeIndex=s,this._adjustOptionListScrollPos("up",s))}}}_onArrowDownKeyDown(){let n=this.combobox?this._filteredOptions.length:this._options.length;const s=this.combobox?this._filteredOptions:this._options,o=this._isSuggestedOptionVisible;if(o&&(n+=1),this.open){if(this._isPlaceholderOptionActive&&this._activeIndex===-1)return;if(o&&this._activeIndex===n-2)this._isPlaceholderOptionActive=!0,this._adjustOptionListScrollPos("down",n-1),this._activeIndex=-1;else if(this._activeIndex<n-1){const u=vv(s,this._activeIndex);u>-1&&(this._activeIndex=u,this._adjustOptionListScrollPos("down",u))}}}_onSlotChange(){this._setStateFromSlottedElements(),this.requestUpdate()}_onComboboxInputFocus(n){n.target.select(),this._isBeingFiltered=!1,this._filterPattern=""}_onComboboxInputBlur(){this._isBeingFiltered=!1}_onComboboxInputInput(n){this._isBeingFiltered=!0,this._filterPattern=n.target.value,this._activeIndex=-1,this._toggleDropdown(!0)}_onComboboxInputClick(){this._isBeingFiltered=this._filterPattern!=="",this._toggleDropdown(!0)}_onOptionClick(n){this._isBeingFiltered=!1}_renderOptions(){const n=this.combobox?this._filteredOptions:this._options;return B`
      <ul
        class="options"
        @click=${this._onOptionClick}
        @mouseover=${this._onOptionMouseOver}
      >
        ${n_(n,s=>s.index,(s,o)=>{var v;const u={active:o===this._activeIndex&&!s.disabled,disabled:s.disabled,option:!0,selected:s.selected},r={"checkbox-icon":!0,checked:s.selected},h=((v=s.ranges)==null?void 0:v.length)??!1?u_(s.label,s.ranges??[]):s.label;return B`
              <li
                class=${ge(u)}
                data-index=${s.index}
                data-filtered-index=${o}
              >
                ${this._multiple?B`<span class=${ge(r)}></span
                      ><span class="option-label">${h}</span>`:h}
              </li>
            `})}
        ${this._renderPlaceholderOption(n.length<1)}
      </ul>
    `}_renderPlaceholderOption(n){return!this.combobox||this._valueOptionIndexMap[this._filterPattern]?Q:this.creatable&&this._filterPattern.length>0?B`<li
        class=${ge({option:!0,placeholder:!0,active:this._isPlaceholderOptionActive})}
        @mouseout=${this._onPlaceholderOptionMouseOut}
      >
        Add "${this._filterPattern}"
      </li>`:n?B`<li class="no-options" @click=${this._onNoOptionsClick}>
            No options
          </li>`:Q}_renderDescription(){if(!this._options[this._activeIndex])return Q;const{description:n}=this._options[this._activeIndex];return n?B`<div class="description">${n}</div>`:Q}_renderSelectFace(){return B`${Q}`}_renderMultiSelectLabel(){switch(this._selectedIndexes.length){case 0:return B`<span class="select-face-badge no-item"
          >No items selected</span
        >`;case 1:return B`<span class="select-face-badge">1 item selected</span>`;default:return B`<span class="select-face-badge"
          >${this._selectedIndexes.length} items selected</span
        >`}}_renderComboboxFace(){var s;let n="";return this._isBeingFiltered?n=this._filterPattern:n=this._selectedIndex>-1?((s=this._options[this._selectedIndex])==null?void 0:s.label)??"":"",B`
      <div class="combobox-face face">
        ${this._multiple?this._renderMultiSelectLabel():Q}
        <input
          class="combobox-input"
          spellcheck="false"
          type="text"
          autocomplete="off"
          .value=${n}
          @focus=${this._onComboboxInputFocus}
          @blur=${this._onComboboxInputBlur}
          @input=${this._onComboboxInputInput}
          @click=${this._onComboboxInputClick}
        >
        <button
          class="combobox-button"
          type="button"
          @click=${this._onComboboxButtonClick}
          @keydown=${this._onComboboxButtonKeyDown}
        >
          ${Au}
        </button>
      </div>
    `}_renderDropdownControls(){return B`${Q}`}_renderDropdown(){const n=ge({dropdown:!0,multiple:this._multiple});return B`
      <div class=${n}>
        ${this.position==="above"?this._renderDescription():Q}
        ${this._renderOptions()} ${this._renderDropdownControls()}
        ${this.position==="below"?this._renderDescription():Q}
      </div>
    `}render(){return B`
      <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
      ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
      ${this.open?this._renderDropdown():Q}
    `}}Re([_({type:String,reflect:!0,attribute:"aria-expanded"})],Ee.prototype,"ariaExpanded",void 0);Re([_({type:Boolean,reflect:!0})],Ee.prototype,"creatable",void 0);Re([_({type:Boolean,reflect:!0})],Ee.prototype,"combobox",void 0);Re([_({type:Boolean,reflect:!0})],Ee.prototype,"disabled",null);Re([_({type:Boolean,reflect:!0})],Ee.prototype,"invalid",void 0);Re([_()],Ee.prototype,"filter",null);Re([_({type:Boolean,reflect:!0})],Ee.prototype,"focused",void 0);Re([_({type:Boolean,reflect:!0})],Ee.prototype,"open",void 0);Re([_({type:Array})],Ee.prototype,"options",null);Re([_({reflect:!0})],Ee.prototype,"position",void 0);Re([_({type:Number,attribute:!0,reflect:!0})],Ee.prototype,"tabIndex",void 0);Re([al({flatten:!0,selector:"vscode-option"})],Ee.prototype,"_assignedOptions",void 0);Re([P()],Ee.prototype,"_activeIndex",void 0);Re([P()],Ee.prototype,"_currentDescription",void 0);Re([P()],Ee.prototype,"_filter",void 0);Re([P()],Ee.prototype,"_filteredOptions",null);Re([P()],Ee.prototype,"_filterPattern",void 0);Re([P()],Ee.prototype,"_selectedIndex",void 0);Re([P()],Ee.prototype,"_selectedIndexes",void 0);Re([P()],Ee.prototype,"_options",void 0);Re([P()],Ee.prototype,"_value",void 0);Re([P()],Ee.prototype,"_values",void 0);Re([P()],Ee.prototype,"_listScrollTop",void 0);Re([P()],Ee.prototype,"_isPlaceholderOptionActive",void 0);Re([P()],Ee.prototype,"_isBeingFiltered",void 0);Re([at(".options")],Ee.prototype,"_listElement",void 0);const mv=[oe,ie`
    :host {
      display: inline-block;
      max-width: 100%;
      outline: none;
      position: relative;
      width: 320px;
    }

    .main-slot {
      display: none;
    }

    .select-face,
    .combobox-face {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-dropdownForeground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      position: relative;
      user-select: none;
      width: 100%;
    }

    :host([invalid]) .select-face,
    :host(:invalid) .select-face,
    :host([invalid]) .combobox-face,
    :host(:invalid) .combobox-face {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .select-face {
      cursor: pointer;
      display: block;
      padding: 3px 4px;
    }

    .select-face .text {
      display: block;
      height: 18px;
      overflow: hidden;
    }

    .select-face.multiselect {
      padding: 0;
    }

    .select-face-badge {
      background-color: var(--vscode-badge-background, #616161);
      border-radius: 2px;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      flex-shrink: 0;
      font-size: 11px;
      line-height: 16px;
      margin: 2px;
      padding: 2px 3px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .select-face-badge.no-item {
      background-color: transparent;
      color: inherit;
    }

    .combobox-face {
      display: flex;
    }

    :host(:focus) .select-face,
    :host(:focus) .combobox-face,
    :host([focused]) .select-face,
    :host([focused]) .combobox-face {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    .combobox-input {
      background-color: transparent;
      box-sizing: border-box;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      line-height: 16px;
      padding: 4px;
      width: 100%;
    }

    .combobox-input:focus {
      outline: none;
    }

    .combobox-button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 2px;
      box-sizing: content-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex-shrink: 0;
      height: 16px;
      justify-content: center;
      margin: 1px 1px 0 0;
      padding: 3px;
      width: 22px;
    }

    .combobox-button:hover,
    .combobox-button:focus-visible {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    .combobox-button:focus-visible {
      outline: none;
    }

    .icon {
      color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 14px;
      pointer-events: none;
      width: 14px;
    }

    .select-face .icon {
      position: absolute;
      right: 6px;
      top: 5px;
    }

    .icon svg {
      color: var(--vscode-foreground, #cccccc);
      height: 100%;
      width: 100%;
    }

    .dropdown {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownListBorder, #454545);
      border-radius: 0 0 3px 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      left: 0;
      padding-bottom: 2px;
      position: absolute;
      top: 100%;
      width: 100%;
      z-index: var(--dropdown-z-index, 2);
    }

    :host([position='above']) .dropdown {
      border-radius: 3px 3px 0 0;
      bottom: 26px;
      padding-bottom: 0;
      padding-top: 2px;
      top: auto;
    }

    :host(:focus) .dropdown,
    :host([focused]) .dropdown {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    .options {
      box-sizing: border-box;
      cursor: pointer;
      list-style: none;
      margin: 0;
      max-height: 222px;
      overflow: auto;
      padding: 1px;
    }

    .option {
      align-items: center;
      box-sizing: border-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 22px;
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      padding: 1px 3px;
      user-select: none;
      outline-color: transparent;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
    }

    .option b {
      color: var(--vscode-list-highlightForeground, #2aaaff);
    }

    .option.active b {
      color: var(--vscode-list-focusHighlightForeground, #2aaaff);
    }

    .option:not(.disabled):hover {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      color: var(--vscode-list-hoverForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option:hover,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option:hover {
      outline-style: dotted;
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-width: 1px;
    }

    .option.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .option.active,
    .option.active:hover {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
      outline-style: solid;
      outline-width: 1px;
    }

    .no-options {
      align-items: center;
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      color: var(--vscode-foreground, #cccccc);
      cursor: default;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      opacity: 0.85;
      padding: 1px 3px;
      user-select: none;
    }

    .placeholder {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .placeholder span {
      font-weight: bold;
    }

    .placeholder:not(.disabled):hover {
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option.active,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option.active:hover {
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-style: dashed;
    }

    .option-label {
      display: block;
      pointer-events: none;
      width: 100%;
    }

    .dropdown.multiple .option.selected {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      outline-color: var(--vscode-list-hoverBackground, #2a2d2e);
    }

    .dropdown.multiple .option.selected.active {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
    }

    .checkbox-icon {
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      border: 1px solid currentColor;
      border-radius: 2px;
      box-sizing: border-box;
      height: 14px;
      margin-right: 5px;
      overflow: hidden;
      position: relative;
      width: 14px;
    }

    .checkbox-icon.checked:before,
    .checkbox-icon.checked:after {
      content: '';
      display: block;
      height: 5px;
      position: absolute;
      transform: rotate(-45deg);
      width: 10px;
    }

    .checkbox-icon.checked:before {
      background-color: var(--vscode-foreground, #cccccc);
      left: 1px;
      top: 2.5px;
    }

    .checkbox-icon.checked:after {
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      left: 1px;
      top: -0.5px;
    }

    .dropdown-controls {
      display: flex;
      justify-content: flex-end;
      padding: 4px;
    }

    .dropdown-controls :not(:last-child) {
      margin-right: 4px;
    }

    .action-icon {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      padding: 0;
      width: 24px;
    }

    .action-icon:focus {
      outline: none;
    }

    .action-icon:focus-visible {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }

    .description {
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-style: solid;
      border-width: 1px 0 0;
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.3;
      padding: 6px 4px;
      word-wrap: break-word;
    }

    :host([position='above']) .description {
      border-width: 0 0 1px;
    }
  `];var Qi=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let Ft=class extends Ee{set selectedIndexes(n){const s=[];n.forEach(o=>{typeof this._options[o]<"u"&&(s.includes(o)||(this._options[o].selected=!0,s.push(o)))}),this._selectedIndexes=s}get selectedIndexes(){return this._selectedIndexes}set value(n){const s=Array.isArray(n)?n.map(o=>String(o)):[String(n)];this._values=[],this._selectedIndexes.forEach(o=>{this._options[o].selected=!1}),this._selectedIndexes=[],s.forEach(o=>{typeof this._valueOptionIndexMap[o]=="number"&&(this._selectedIndexes.push(this._valueOptionIndexMap[o]),this._options[this._valueOptionIndexMap[o]].selected=!0,this._values.push(o))}),this._selectedIndexes.length>0?this._requestedValueToSetLater=[]:this._requestedValueToSetLater=Array.isArray(n)?n:[n],this._setFormValue(),this._manageRequired()}get value(){return this._values}get form(){return this._internals.form}get type(){return"select-multiple"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.defaultValue=[],this.required=!1,this.name=void 0,this._requestedValueToSetLater=[],this._onOptionClick=n=>{const o=n.composedPath().find(h=>"matches"in h?h.matches("li.option"):!1);if(!o)return;if(o.classList.contains("placeholder")){this._createAndSelectSuggestedOption();return}const r=Number(o.dataset.index);if(this._options[r]){if(this._options[r].disabled)return;this._options[r].selected=!this._options[r].selected}this._selectedIndexes=[],this._values=[],this._options.forEach(h=>{h.selected&&(this._selectedIndexes.push(h.index),this._values.push(h.value))}),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()},this._multiple=!0,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setDefaultValue(),this._manageRequired()})}formResetCallback(){this.updateComplete.then(()=>{this.value=this.defaultValue})}formStateRestoreCallback(n,s){const o=Array.from(n.entries()).map(u=>String(u[1]));this.updateComplete.then(()=>{this.value=o})}_setDefaultValue(){if(Array.isArray(this.defaultValue)&&this.defaultValue.length>0){const n=this.defaultValue.map(s=>String(s));this.value=n}}_manageRequired(){const{value:n}=this;n.length===0&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._faceElement):this._internals.setValidity({})}_setFormValue(){const n=new FormData;this._values.forEach(s=>{n.append(this.name??"",s)}),this._internals.setFormValue(n)}async _createAndSelectSuggestedOption(){var o;super._createAndSelectSuggestedOption();const n=this._createSuggestedOption();await this.updateComplete,this.selectedIndexes=[...this.selectedIndexes,n],this._dispatchChangeEvent();const s=new CustomEvent("vsc-multi-select-create-option",{detail:{value:((o=this._options[n])==null?void 0:o.value)??""}});this.dispatchEvent(s),this._toggleDropdown(!1),this._isPlaceholderOptionActive=!1}_onSlotChange(){super._onSlotChange(),this._requestedValueToSetLater.length>0&&this.options.forEach((n,s)=>{this._requestedValueToSetLater.includes(n.value)&&(this._selectedIndexes.push(s),this._values.push(n.value),this._options[s].selected=!0,this._requestedValueToSetLater=this._requestedValueToSetLater.filter(o=>o!==n.value))})}_onMultiAcceptClick(){this._toggleDropdown(!1)}_onMultiDeselectAllClick(){this._selectedIndexes=[],this._values=[],this._options=this._options.map(n=>({...n,selected:!1})),this._manageRequired(),this._dispatchChangeEvent()}_onMultiSelectAllClick(){this._selectedIndexes=[],this._values=[],this._options=this._options.map(n=>({...n,selected:!0})),this._options.forEach((n,s)=>{this._selectedIndexes.push(s),this._values.push(n.value),this._dispatchChangeEvent()}),this._setFormValue(),this._manageRequired()}_renderLabel(){switch(this._selectedIndexes.length){case 0:return B`<span class="select-face-badge no-item"
          >No items selected</span
        >`;case 1:return B`<span class="select-face-badge">1 item selected</span>`;default:return B`<span class="select-face-badge"
          >${this._selectedIndexes.length} items selected</span
        >`}}_renderSelectFace(){return B`
      <div
        class="select-face face multiselect"
        @click=${this._onFaceClick}
        tabindex=${this.tabIndex>-1?0:-1}
      >
        ${this._renderLabel()} ${Au}
      </div>
    `}_renderDropdownControls(){return this._filteredOptions.length>0?B`
          <div class="dropdown-controls">
            <button
              type="button"
              @click=${this._onMultiSelectAllClick}
              title="Select all"
              class="action-icon"
              id="select-all"
            >
              <vscode-icon name="checklist"></vscode-icon>
            </button>
            <button
              type="button"
              @click=${this._onMultiDeselectAllClick}
              title="Deselect all"
              class="action-icon"
              id="select-none"
            >
              <vscode-icon name="clear-all"></vscode-icon>
            </button>
            <vscode-button
              class="button-accept"
              @click=${this._onMultiAcceptClick}
              >OK</vscode-button
            >
          </div>
        `:B`${Q}`}};Ft.styles=mv;Ft.shadowRootOptions={...il.shadowRootOptions,delegatesFocus:!0};Ft.formAssociated=!0;Qi([_({type:Array,attribute:"default-value"})],Ft.prototype,"defaultValue",void 0);Qi([_({type:Boolean,reflect:!0})],Ft.prototype,"required",void 0);Qi([_({reflect:!0})],Ft.prototype,"name",void 0);Qi([_({type:Array,attribute:!1})],Ft.prototype,"selectedIndexes",null);Qi([_({type:Array})],Ft.prototype,"value",null);Qi([at(".face")],Ft.prototype,"_faceElement",void 0);Ft=Qi([ne("vscode-multi-select")],Ft);const d_=[oe,ie`
    :host {
      align-items: center;
      display: block;
      height: 28px;
      margin: 0;
      outline: none;
      width: 28px;
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke: transparent;
      stroke-width: 2px;
    }

    .indeterminate-indicator-1 {
      fill: none;
      stroke: var(--vscode-progressBar-background, #0078d4);
      stroke-width: 2px;
      stroke-linecap: square;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `];var Vo=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let Yi=class extends ue{constructor(){super(...arguments),this.ariaLabel="Loading",this.ariaLive="assertive",this.role="alert"}render(){return B`<svg class="progress" part="progress" viewBox="0 0 16 16">
      <circle
        class="background"
        part="background"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
      <circle
        class="indeterminate-indicator-1"
        part="indeterminate-indicator-1"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
    </svg>`}};Yi.styles=d_;Vo([_({reflect:!0,attribute:"aria-label"})],Yi.prototype,"ariaLabel",void 0);Vo([_({reflect:!0,attribute:"aria-live"})],Yi.prototype,"ariaLive",void 0);Vo([_({reflect:!0})],Yi.prototype,"role",void 0);Yi=Vo([ne("vscode-progress-ring")],Yi);const f_=[oe,dv,ie`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 9px;
    }

    .icon.checked:before {
      background-color: currentColor;
      border-radius: 4px;
      content: '';
      height: 8px;
      left: 50%;
      margin: -4px 0 0 -4px;
      position: absolute;
      top: 50%;
      width: 8px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var At=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let Ze=class extends uv(Eu){constructor(){super(),this.autofocus=!1,this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name="",this.value="",this.disabled=!1,this.required=!1,this.role="radio",this.tabIndex=0,this._slottedText="",this.type="radio",this._handleClick=()=>{this.disabled||this.checked||(this._checkButton(),this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0})))},this._handleKeyDown=n=>{var s;!this.disabled&&(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),n.key===" "&&!this.checked&&(this.checked=!0,this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0}))),n.key==="Enter"&&((s=this._internals.form)==null||s.requestSubmit()))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("click",this._handleClick),this._handleValueChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeyDown),this.removeEventListener("click",this._handleClick)}update(n){super.update(n),n.has("checked")&&this._handleValueChange(),n.has("required")&&this._handleValueChange()}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formResetCallback(){this._getRadios().forEach(s=>{s.checked=s.defaultChecked}),this.updateComplete.then(()=>{this._handleValueChange()})}formStateRestoreCallback(n,s){this.value===n&&n!==""&&(this.checked=!0)}_dispatchCustomEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_getRadios(){const n=this.getRootNode({composed:!0});if(!n)return[];const s=n.querySelectorAll(`vscode-radio[name="${this.name}"]`);return Array.from(s)}_uncheckOthers(n){n.forEach(s=>{s!==this&&(s.checked=!1)})}_checkButton(){const n=this._getRadios();this.checked=!0,n.forEach(s=>{s!==this&&(s.checked=!1)})}setComponentValidity(n){n?this._internals.setValidity({}):this._internals.setValidity({valueMissing:!0},"Please select one of these options.",this._inputEl)}_setGroupValidity(n,s){this.updateComplete.then(()=>{n.forEach(o=>{o.setComponentValidity(s)})})}_setActualFormValue(){let n="";this.checked?n=this.value?this.value:"on":n=null,this._internals.setFormValue(n)}_handleValueChange(){const n=this._getRadios(),s=n.some(o=>o.required);if(this._setActualFormValue(),this.checked)this._uncheckOthers(n),this._setGroupValidity(n,!0);else{const o=!!n.find(r=>r.checked),u=s&&!o;this._setGroupValidity(n,!u)}}render(){const n=ge({icon:!0,checked:this.checked}),s=ge({"label-inner":!0,"is-slot-empty":this._slottedText===""});return B`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="radio"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
          tabindex=${this.tabIndex}
        >
        <div class=${n}></div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${s}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};Ze.styles=f_;Ze.formAssociated=!0;Ze.shadowRootOptions={...il.shadowRootOptions,delegatesFocus:!0};At([_({type:Boolean,reflect:!0})],Ze.prototype,"autofocus",void 0);At([_({type:Boolean,reflect:!0})],Ze.prototype,"checked",void 0);At([_({type:Boolean,reflect:!0,attribute:"default-checked"})],Ze.prototype,"defaultChecked",void 0);At([_({type:Boolean,reflect:!0})],Ze.prototype,"invalid",void 0);At([_({reflect:!0})],Ze.prototype,"name",void 0);At([_()],Ze.prototype,"value",void 0);At([_({type:Boolean,reflect:!0})],Ze.prototype,"disabled",void 0);At([_({type:Boolean,reflect:!0})],Ze.prototype,"required",void 0);At([_({reflect:!0})],Ze.prototype,"role",void 0);At([_({type:Number,reflect:!0})],Ze.prototype,"tabIndex",void 0);At([P()],Ze.prototype,"_slottedText",void 0);At([at("#input")],Ze.prototype,"_inputEl",void 0);At([_()],Ze.prototype,"type",void 0);Ze=At([ne("vscode-radio")],Ze);var hi=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let Ut=class extends Ee{set selectedIndex(n){this._selectedIndex=n,this._options[n]?(this._activeIndex=n,this._value=this._options[n].value,this._internals.setFormValue(this._value),this._manageRequired()):(this._value="",this._internals.setFormValue(""),this._manageRequired())}get selectedIndex(){return this._selectedIndex}set value(n){this._options[this._selectedIndex]&&(this._options[this._selectedIndex].selected=!1),this._selectedIndex=this._options.findIndex(s=>s.value===n),this._selectedIndex>-1?(this._options[this._selectedIndex].selected=!0,this._value=n,this._requestedValueToSetLater=""):(this._value="",this._requestedValueToSetLater=n),this._internals.setFormValue(this._value),this._manageRequired()}get value(){var n;return this._options[this._selectedIndex]?((n=this._options[this._selectedIndex])==null?void 0:n.value)??"":""}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}updateInputValue(){if(!this.combobox)return;const n=this.renderRoot.querySelector(".combobox-input");n&&(n.value=this._options[this._selectedIndex]?this._options[this._selectedIndex].label:"")}constructor(){super(),this.defaultValue="",this.role="listbox",this.name=void 0,this.required=!1,this._requestedValueToSetLater="",this._multiple=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._manageRequired()})}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(n,s){this.updateComplete.then(()=>{this.value=n})}get type(){return"select-one"}get form(){return this._internals.form}async _createAndSelectSuggestedOption(){var o;const n=this._createSuggestedOption();await this.updateComplete,this.selectedIndex=n,this._dispatchChangeEvent();const s=new CustomEvent("vsc-single-select-create-option",{detail:{value:((o=this._options[n])==null?void 0:o.value)??""}});this.dispatchEvent(s),this._toggleDropdown(!1),this._isPlaceholderOptionActive=!1}_onSlotChange(){if(super._onSlotChange(),this._requestedValueToSetLater){const n=this._options.findIndex(s=>s.value===this._requestedValueToSetLater);n>0&&(this._selectedIndex=n,this._requestedValueToSetLater="")}this._selectedIndex>-1&&this._options.length>0?(this._internals.setFormValue(this._options[this._selectedIndex].value),this._manageRequired()):(this._internals.setFormValue(null),this._manageRequired())}_onArrowUpKeyDown(){if(super._onArrowUpKeyDown(),this.open||this._selectedIndex<=0)return;const n=this.combobox?this._filteredOptions:this._options,s=bv(n,this._activeIndex);this._filterPattern="",this._selectedIndex=s,this._activeIndex=s,this._value=s>-1?this._options[s].value:"",this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent()}_onArrowDownKeyDown(){if(super._onArrowDownKeyDown(),this.open||this._selectedIndex>=this._options.length-1)return;const n=this.combobox?this._filteredOptions:this._options,s=vv(n,this._activeIndex);this._filterPattern="",this._selectedIndex=s,this._activeIndex=s,this._value=s>-1?this._options[s].value:"",this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent()}_onEnterKeyDown(n){super._onEnterKeyDown(n),this.updateInputValue(),this._internals.setFormValue(this._value),this._manageRequired()}_onOptionClick(n){super._onOptionClick(n);const o=n.composedPath().find(r=>{const h=r;if("matches"in h)return h.matches("li.option")});if(!o||o.matches(".disabled"))return;o.classList.contains("placeholder")?this.creatable&&this._createAndSelectSuggestedOption():(this._selectedIndex=Number(o.dataset.index),this._value=this._options[this._selectedIndex].value,this._toggleDropdown(!1),this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_manageRequired(){const{value:n}=this;n===""&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._face):this._internals.setValidity({})}_renderSelectFace(){var s;const n=((s=this._options[this._selectedIndex])==null?void 0:s.label)??"";return B`
      <div
        class="select-face face"
        @click=${this._onFaceClick}
        tabindex=${this.tabIndex>-1?0:-1}
      >
        <span class="text">${n}</span> ${Au}
      </div>
    `}};Ut.styles=mv;Ut.shadowRootOptions={...il.shadowRootOptions,delegatesFocus:!0};Ut.formAssociated=!0;hi([_({attribute:"default-value"})],Ut.prototype,"defaultValue",void 0);hi([_({type:String,attribute:!0,reflect:!0})],Ut.prototype,"role",void 0);hi([_({reflect:!0})],Ut.prototype,"name",void 0);hi([_({type:Number,attribute:"selected-index"})],Ut.prototype,"selectedIndex",null);hi([_({type:String})],Ut.prototype,"value",null);hi([_({type:Boolean,reflect:!0})],Ut.prototype,"required",void 0);hi([at(".face")],Ut.prototype,"_face",void 0);Ut=hi([ne("vscode-single-select")],Ut);const h_=[oe,ie`
    :host {
      display: block;
      position: relative;
    }

    .scrollable-container {
      height: 100%;
      overflow: auto;
    }

    .scrollable-container::-webkit-scrollbar {
      cursor: default;
      width: 0;
    }

    .scrollable-container {
      scrollbar-width: none;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      height: 3px;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    .scrollbar-track {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 10px;
      z-index: 100;
    }

    .scrollbar-track.hidden {
      display: none;
    }

    .scrollbar-thumb {
      background-color: transparent;
      min-height: var(--min-thumb-height, 20px);
      opacity: 0;
      position: absolute;
      right: 0;
      width: 10px;
    }

    .scrollbar-thumb.visible {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 1;
      transition: opacity 100ms;
    }

    .scrollbar-thumb.fade {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 0;
      transition: opacity 800ms;
    }

    .scrollbar-thumb.visible:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    .scrollbar-thumb.visible.active,
    .scrollbar-thumb.visible.active:hover {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    .prevent-interaction {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 99;
    }

    .content {
      overflow: hidden;
    }
  `];var mt=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let Pe=class extends ue{constructor(){super(...arguments),this.shadow=!0,this.scrolled=!1,this._isDragging=!1,this._thumbHeight=0,this._thumbY=0,this._thumbVisible=!1,this._thumbFade=!1,this._thumbActive=!1,this._scrollThumbStartY=0,this._mouseStartY=0,this._scrollbarVisible=!0,this._scrollbarTrackZ=0,this._resizeObserverCallback=()=>{this._updateScrollbar()},this._onSlotChange=()=>{this._zIndexFix()},this._onScrollThumbMouseMoveBound=this._onScrollThumbMouseMove.bind(this),this._onScrollThumbMouseUpBound=this._onScrollThumbMouseUp.bind(this),this._onComponentMouseOverBound=this._onComponentMouseOver.bind(this),this._onComponentMouseOutBound=this._onComponentMouseOut.bind(this)}set scrollPos(n){this._scrollableContainer.scrollTop=n}get scrollPos(){return this._scrollableContainer?this._scrollableContainer.scrollTop:0}get scrollMax(){return this._scrollableContainer?this._scrollableContainer.scrollHeight:0}connectedCallback(){super.connectedCallback(),this._hostResizeObserver=new ResizeObserver(this._resizeObserverCallback),this._contentResizeObserver=new ResizeObserver(this._resizeObserverCallback),this.requestUpdate(),this.updateComplete.then(()=>{this._scrollableContainer.addEventListener("scroll",this._onScrollableContainerScroll.bind(this)),this._hostResizeObserver.observe(this),this._contentResizeObserver.observe(this._contentElement)}),this.addEventListener("mouseover",this._onComponentMouseOverBound),this.addEventListener("mouseout",this._onComponentMouseOutBound)}disconnectedCallback(){super.disconnectedCallback(),this._hostResizeObserver.unobserve(this),this._hostResizeObserver.disconnect(),this._contentResizeObserver.unobserve(this._contentElement),this._contentResizeObserver.disconnect(),this.removeEventListener("mouseover",this._onComponentMouseOverBound),this.removeEventListener("mouseout",this._onComponentMouseOutBound)}_updateScrollbar(){const n=this.getBoundingClientRect(),s=this._contentElement.getBoundingClientRect();n.height>=s.height?this._scrollbarVisible=!1:(this._scrollbarVisible=!0,this._thumbHeight=n.height*(n.height/s.height)),this.requestUpdate()}_zIndexFix(){let n=0;this._assignedElements.forEach(s=>{if("style"in s){const o=window.getComputedStyle(s).zIndex;/([0-9-])+/g.test(o)&&(n=Number(o)>n?Number(o):n)}}),this._scrollbarTrackZ=n+1,this.requestUpdate()}_onScrollThumbMouseDown(n){const s=this.getBoundingClientRect(),o=this._scrollThumbElement.getBoundingClientRect();this._mouseStartY=n.screenY,this._scrollThumbStartY=o.top-s.top,this._isDragging=!0,this._thumbActive=!0,document.addEventListener("mousemove",this._onScrollThumbMouseMoveBound),document.addEventListener("mouseup",this._onScrollThumbMouseUpBound)}_onScrollThumbMouseMove(n){const s=this._scrollThumbStartY+(n.screenY-this._mouseStartY);let o=0;const u=this.getBoundingClientRect().height,r=this._scrollThumbElement.getBoundingClientRect().height,h=this._contentElement.getBoundingClientRect().height;s<0?o=0:s>u-r?o=u-r:o=s,this._thumbY=o,this._scrollableContainer.scrollTop=o/(u-r)*(h-u)}_onScrollThumbMouseUp(n){this._isDragging=!1,this._thumbActive=!1;const s=this.getBoundingClientRect(),{x:o,y:u,width:r,height:h}=s,{pageX:v,pageY:x}=n;(v>o+r||v<o||x>u+h||x<u)&&(this._thumbFade=!0,this._thumbVisible=!1),document.removeEventListener("mousemove",this._onScrollThumbMouseMoveBound),document.removeEventListener("mouseup",this._onScrollThumbMouseUpBound)}_onScrollableContainerScroll(){const n=this._scrollableContainer.scrollTop;this.scrolled=n>0;const s=this.getBoundingClientRect().height,o=this._scrollThumbElement.getBoundingClientRect().height,r=this._contentElement.getBoundingClientRect().height-s,h=n/r;this._thumbY=h*(s-o)}_onComponentMouseOver(){this._thumbVisible=!0,this._thumbFade=!1}_onComponentMouseOut(){this._thumbActive||(this._thumbVisible=!1,this._thumbFade=!0)}render(){return B`
      <div
        class="scrollable-container"
        .style=${bt({userSelect:this._isDragging?"none":"auto"})}
      >
        <div
          class=${ge({shadow:!0,visible:this.scrolled})}
          .style=${bt({zIndex:String(this._scrollbarTrackZ)})}
        ></div>
        ${this._isDragging?B`<div class="prevent-interaction"></div>`:Q}
        <div
          class=${ge({"scrollbar-track":!0,hidden:!this._scrollbarVisible})}
        >
          <div
            class=${ge({"scrollbar-thumb":!0,visible:this._thumbVisible,fade:this._thumbFade,active:this._thumbActive})}
            .style=${bt({height:`${this._thumbHeight}px`,top:`${this._thumbY}px`})}
            @mousedown=${this._onScrollThumbMouseDown}
          ></div>
        </div>
        <div class="content">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
      </div>
    `}};Pe.styles=h_;mt([_({type:Boolean,reflect:!0})],Pe.prototype,"shadow",void 0);mt([_({type:Boolean,reflect:!0})],Pe.prototype,"scrolled",void 0);mt([_({type:Number,attribute:"scroll-pos"})],Pe.prototype,"scrollPos",null);mt([_({type:Number,attribute:"scroll-max"})],Pe.prototype,"scrollMax",null);mt([P()],Pe.prototype,"_isDragging",void 0);mt([P()],Pe.prototype,"_thumbHeight",void 0);mt([P()],Pe.prototype,"_thumbY",void 0);mt([P()],Pe.prototype,"_thumbVisible",void 0);mt([P()],Pe.prototype,"_thumbFade",void 0);mt([P()],Pe.prototype,"_thumbActive",void 0);mt([at(".content")],Pe.prototype,"_contentElement",void 0);mt([at(".scrollbar-thumb",!0)],Pe.prototype,"_scrollThumbElement",void 0);mt([at(".scrollable-container")],Pe.prototype,"_scrollableContainer",void 0);mt([al()],Pe.prototype,"_assignedElements",void 0);Pe=mt([ne("vscode-scrollable")],Pe);const p_=[oe,ie`
    :host {
      --separator-border: var(--vscode-editorWidget-border, transparent);

      border: 1px solid var(--vscode-editorWidget-border);
      display: block;
      overflow: hidden;
      position: relative;
    }

    ::slotted(*) {
      height: 100%;
      width: 100%;
    }

    ::slotted(vscode-split-layout) {
      border: 0;
    }

    .wrapper {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .wrapper.horizontal {
      flex-direction: column;
    }

    .start {
      box-sizing: border-box;
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start {
      border-right: 1px solid var(--separator-border);
    }

    :host([split='horizontal']) .start {
      border-bottom: 1px solid var(--separator-border);
    }

    .end {
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start,
    :host([split='vertical']) .end {
      height: 100%;
    }

    :host([split='horizontal']) .start,
    :host([split='horizontal']) .end {
      width: 100%;
    }

    .handle-overlay {
      display: none;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .handle-overlay.active {
      display: block;
    }

    .handle-overlay.split-vertical {
      cursor: ew-resize;
    }

    .handle-overlay.split-horizontal {
      cursor: ns-resize;
    }

    .handle {
      background-color: transparent;
      position: absolute;
      z-index: 2;
    }

    .handle.hover {
      transition: background-color 0.1s ease-out 0.3s;
      background-color: var(--vscode-sash-hoverBorder);
    }

    .handle.hide {
      background-color: transparent;
      transition: background-color 0.1s ease-out;
    }

    .handle.split-vertical {
      cursor: ew-resize;
      height: 100%;
    }

    .handle.split-horizontal {
      cursor: ns-resize;
      width: 100%;
    }
  `];var gt=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r},fu;const Kp="50%",v_=4,Oo=d=>{if(!d)return{value:0,unit:"pixel"};let n,s;d.endsWith("%")?(n="percent",s=+d.substring(0,d.length-1)):d.endsWith("px")?(n="pixel",s=+d.substring(0,d.length-2)):(n="pixel",s=+d);const o=isNaN(s)?0:s;return{unit:n,value:o}},wo=(d,n)=>n===0?0:Math.min(100,d/n*100),Ip=(d,n)=>n*(d/100);let We=fu=class extends ue{set split(n){this._split!==n&&(this._split=n,this.resetHandlePosition())}get split(){return this._split}set handlePosition(n){this._rawHandlePosition=n,this._handlePositionPropChanged()}get handlePosition(){return this._rawHandlePosition}set fixedPane(n){this._fixedPane=n,this._fixedPanePropChanged()}get fixedPane(){return this._fixedPane}constructor(){super(),this._split="vertical",this.resetOnDblClick=!1,this.handleSize=4,this.initialHandlePosition=Kp,this._fixedPane="none",this._handlePosition=0,this._isDragActive=!1,this._hover=!1,this._hide=!1,this._boundRect=new DOMRect,this._handleOffset=0,this._wrapperObserved=!1,this._fixedPaneSize=0,this._handleResize=n=>{const s=n[0].contentRect,{width:o,height:u}=s;this._boundRect=s;const r=this.split==="vertical"?o:u;this.fixedPane==="start"&&(this._handlePosition=this._fixedPaneSize),this.fixedPane==="end"&&(this._handlePosition=r-this._fixedPaneSize)},this._handleMouseUp=n=>{this._isDragActive=!1,n.target!==this&&(this._hover=!1,this._hide=!0),window.removeEventListener("mouseup",this._handleMouseUp),window.removeEventListener("mousemove",this._handleMouseMove);const{width:s,height:o}=this._boundRect,u=this.split==="vertical"?s:o,r=wo(this._handlePosition,u);this.dispatchEvent(new CustomEvent("vsc-split-layout-change",{detail:{position:this._handlePosition,positionInPercentage:r},composed:!0}))},this._handleMouseMove=n=>{const{clientX:s,clientY:o}=n,{left:u,top:r,height:h,width:v}=this._boundRect,x=this.split==="vertical",S=x?v:h,D=x?s-u:o-r;this._handlePosition=Math.max(0,Math.min(D-this._handleOffset+this.handleSize/2,S)),this.fixedPane==="start"&&(this._fixedPaneSize=this._handlePosition),this.fixedPane==="end"&&(this._fixedPaneSize=S-this._handlePosition)},this._resizeObserver=new ResizeObserver(this._handleResize)}resetHandlePosition(){if(!this._wrapperEl){this._handlePosition=0;return}const{width:n,height:s}=this._wrapperEl.getBoundingClientRect(),o=this.split==="vertical"?n:s,{value:u,unit:r}=Oo(this.initialHandlePosition??Kp);r==="percent"?this._handlePosition=Ip(u,o):this._handlePosition=u}connectedCallback(){super.connectedCallback()}firstUpdated(n){this.fixedPane!=="none"&&(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0),this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:s,unit:o}=this.handlePosition?Oo(this.handlePosition):Oo(this.initialHandlePosition);this._setPosition(s,o),this._initFixedPane()}_handlePositionPropChanged(){if(this.handlePosition&&this._wrapperEl){this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:n,unit:s}=Oo(this.handlePosition);this._setPosition(n,s)}}_fixedPanePropChanged(){this._wrapperEl&&this._initFixedPane()}_initFixedPane(){if(this.fixedPane==="none")this._wrapperObserved&&(this._resizeObserver.unobserve(this._wrapperEl),this._wrapperObserved=!1);else{const{width:n,height:s}=this._boundRect,o=this.split==="vertical"?n:s;this._fixedPaneSize=this.fixedPane==="start"?this._handlePosition:o-this._handlePosition,this._wrapperObserved||(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0)}}_setPosition(n,s){const{width:o,height:u}=this._boundRect,r=this.split==="vertical"?o:u;this._handlePosition=s==="percent"?Ip(n,r):n}_handleMouseOver(){this._hover=!0,this._hide=!1}_handleMouseOut(n){n.buttons!==1&&(this._hover=!1,this._hide=!0)}_handleMouseDown(n){n.stopPropagation(),n.preventDefault(),this._boundRect=this._wrapperEl.getBoundingClientRect();const{left:s,top:o}=this._boundRect,{left:u,top:r}=this._handleEl.getBoundingClientRect(),h=n.clientX-s,v=n.clientY-o;this.split==="vertical"&&(this._handleOffset=h-(u-s)),this.split==="horizontal"&&(this._handleOffset=v-(r-o)),this._isDragActive=!0,window.addEventListener("mouseup",this._handleMouseUp),window.addEventListener("mousemove",this._handleMouseMove)}_handleDblClick(){this.resetOnDblClick&&this.resetHandlePosition()}_handleSlotChange(){[...this._nestedLayoutsAtStart,...this._nestedLayoutsAtEnd].forEach(s=>{s instanceof fu&&s.resetHandlePosition()})}render(){const{width:n,height:s}=this._boundRect,o=this.split==="vertical"?n:s,u=this.fixedPane!=="none"?`${this._handlePosition}px`:`${wo(this._handlePosition,o)}%`;let r="";this.fixedPane==="start"?r=`0 0 ${this._fixedPaneSize}px`:r=`1 1 ${wo(this._handlePosition,o)}%`;let h="";this.fixedPane==="end"?h=`0 0 ${this._fixedPaneSize}px`:h=`1 1 ${wo(o-this._handlePosition,o)}%`;const v={left:this.split==="vertical"?u:"0",top:this.split==="vertical"?"0":u},x=this.handleSize??v_;this.split==="vertical"&&(v.marginLeft=`${0-x/2}px`,v.width=`${x}px`),this.split==="horizontal"&&(v.height=`${x}px`,v.marginTop=`${0-x/2}px`);const S=ge({"handle-overlay":!0,active:this._isDragActive,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"}),D=ge({handle:!0,hover:this._hover,hide:this._hide,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"}),$={wrapper:!0,horizontal:this.split==="horizontal"};return B`
      <div class=${ge($)}>
        <div class="start" .style=${bt({flex:r})}>
          <slot name="start" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="end" .style=${bt({flex:h})}>
          <slot name="end" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class=${S}></div>
        <div
          class=${D}
          .style=${bt(v)}
          @mouseover=${this._handleMouseOver}
          @mouseout=${this._handleMouseOut}
          @mousedown=${this._handleMouseDown}
          @dblclick=${this._handleDblClick}
        ></div>
      </div>
    `}};We.styles=p_;gt([_({reflect:!0})],We.prototype,"split",null);gt([_({type:Boolean,reflect:!0,attribute:"reset-on-dbl-click"})],We.prototype,"resetOnDblClick",void 0);gt([_({type:Number,reflect:!0,attribute:"handle-size"})],We.prototype,"handleSize",void 0);gt([_({reflect:!0,attribute:"initial-handle-position"})],We.prototype,"initialHandlePosition",void 0);gt([_({attribute:"handle-position"})],We.prototype,"handlePosition",null);gt([_({attribute:"fixed-pane"})],We.prototype,"fixedPane",null);gt([P()],We.prototype,"_handlePosition",void 0);gt([P()],We.prototype,"_isDragActive",void 0);gt([P()],We.prototype,"_hover",void 0);gt([P()],We.prototype,"_hide",void 0);gt([at(".wrapper")],We.prototype,"_wrapperEl",void 0);gt([at(".handle")],We.prototype,"_handleEl",void 0);gt([al({slot:"start",selector:"vscode-split-layout"})],We.prototype,"_nestedLayoutsAtStart",void 0);gt([al({slot:"end",selector:"vscode-split-layout"})],We.prototype,"_nestedLayoutsAtEnd",void 0);We=fu=gt([ne("vscode-split-layout")],We);const b_=[oe,ie`
    :host {
      border-bottom: 1px solid transparent;
      cursor: pointer;
      display: block;
      margin-bottom: -1px;
      overflow: hidden;
      padding: 7px 8px;
      text-overflow: ellipsis;
      user-select: none;
      white-space: nowrap;
    }

    :host([active]) {
      border-bottom-color: var(--vscode-panelTitle-activeForeground);
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) {
      border-bottom: 0;
      margin-bottom: 0;
      padding: 0;
    }

    :host(:focus-visible) {
      outline: none;
    }

    .wrapper {
      align-items: center;
      color: var(--vscode-foreground);
      display: flex;
      min-height: 20px;
      overflow: inherit;
      text-overflow: inherit;
      position: relative;
    }

    .wrapper.panel {
      color: var(--vscode-panelTitle-inactiveForeground);
    }

    .wrapper.panel.active,
    .wrapper.panel:hover {
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) .wrapper {
      display: flex;
      font-size: 11px;
      height: 31px;
      padding: 2px 10px;
      text-transform: uppercase;
    }

    .main {
      overflow: inherit;
      text-overflow: inherit;
    }

    .active-indicator {
      display: none;
    }

    .active-indicator.panel.active {
      border-top: 1px solid var(--vscode-panelTitle-activeBorder);
      bottom: 4px;
      display: block;
      left: 8px;
      pointer-events: none;
      position: absolute;
      right: 8px;
    }

    :host(:focus-visible) .wrapper {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host(:focus-visible) .wrapper.panel {
      outline-offset: -2px;
    }

    slot[name='content-before']::slotted(vscode-badge) {
      margin-right: 8px;
    }

    slot[name='content-after']::slotted(vscode-badge) {
      margin-left: 8px;
    }
  `];var jn=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let It=class extends ue{constructor(){super(...arguments),this.active=!1,this.ariaControls="",this.panel=!1,this.role="tab",this.tabId=-1}attributeChangedCallback(n,s,o){if(super.attributeChangedCallback(n,s,o),n==="active"){const u=o!==null;this.ariaSelected=u?"true":"false",this.tabIndex=u?0:-1}}render(){return B`
      <div
        class=${ge({wrapper:!0,active:this.active,panel:this.panel})}
      >
        <div class="before"><slot name="content-before"></slot></div>
        <div class="main"><slot></slot></div>
        <div class="after"><slot name="content-after"></slot></div>
        <span
          class=${ge({"active-indicator":!0,active:this.active,panel:this.panel})}
        ></span>
      </div>
    `}};It.styles=b_;jn([_({type:Boolean,reflect:!0})],It.prototype,"active",void 0);jn([_({reflect:!0,attribute:"aria-controls"})],It.prototype,"ariaControls",void 0);jn([_({type:Boolean,reflect:!0})],It.prototype,"panel",void 0);jn([_({reflect:!0})],It.prototype,"role",void 0);jn([_({type:Number,reflect:!0,attribute:"tab-id"})],It.prototype,"tabId",void 0);It=jn([ne("vscode-tab-header")],It);const m_=[oe,ie`
    :host {
      display: block;
      overflow: hidden;
    }

    :host(:focus-visible) {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host([panel]) {
      background-color: var(--vscode-panel-background);
    }
  `];var Yn=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let vl=class extends ue{constructor(){super(...arguments),this.hidden=!1,this.ariaLabelledby="",this.panel=!1,this.role="tabpanel",this.tabIndex=0}render(){return B` <slot></slot> `}};vl.styles=m_;Yn([_({type:Boolean,reflect:!0})],vl.prototype,"hidden",void 0);Yn([_({reflect:!0,attribute:"aria-labelledby"})],vl.prototype,"ariaLabelledby",void 0);Yn([_({type:Boolean,reflect:!0})],vl.prototype,"panel",void 0);Yn([_({reflect:!0})],vl.prototype,"role",void 0);Yn([_({type:Number,reflect:!0})],vl.prototype,"tabIndex",void 0);vl=Yn([ne("vscode-tab-panel")],vl);const g_=[oe,ie`
    :host {
      display: table;
      table-layout: fixed;
      width: 100%;
    }

    ::slotted(vscode-table-row:nth-child(even)) {
      background-color: var(--vsc-row-even-background);
    }

    ::slotted(vscode-table-row:nth-child(odd)) {
      background-color: var(--vsc-row-odd-background);
    }
  `];var gv=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let is=class extends ue{constructor(){super(...arguments),this.role="rowgroup"}render(){return B` <slot></slot> `}};is.styles=g_;gv([_({reflect:!0})],is.prototype,"role",void 0);is=gv([ne("vscode-table-body")],is);const __=[oe,ie`
    :host {
      border-bottom-color: var(--vscode-editorGroup-border);
      border-bottom-style: solid;
      border-bottom-width: var(--vsc-row-border-bottom-width);
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      height: 24px;
      overflow: hidden;
      padding-left: 10px;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: nowrap;
    }

    :host([compact]) {
      display: block;
      height: auto;
      padding-bottom: 5px;
      width: 100% !important;
    }

    :host([compact]:first-child) {
      padding-top: 10px;
    }

    :host([compact]:last-child) {
      padding-bottom: 10px;
    }

    .wrapper {
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }

    .column-label {
      font-weight: bold;
    }
  `];var No=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let Gi=class extends ue{constructor(){super(...arguments),this.role="cell",this.columnLabel="",this.compact=!1}render(){const n=this.columnLabel?B`<div class="column-label" role="presentation">
          ${this.columnLabel}
        </div>`:Q;return B`
      <div class="wrapper">
        ${n}
        <slot></slot>
      </div>
    `}};Gi.styles=__;No([_({reflect:!0})],Gi.prototype,"role",void 0);No([_({attribute:"column-label"})],Gi.prototype,"columnLabel",void 0);No([_({type:Boolean,reflect:!0})],Gi.prototype,"compact",void 0);Gi=No([ne("vscode-table-cell")],Gi);const y_=[oe,ie`
    :host {
      background-color: var(--vscode-keybindingTable-headerBackground);
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  `];var _v=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let ns=class extends ue{constructor(){super(...arguments),this.role="rowgroup"}render(){return B` <slot></slot> `}};ns.styles=y_;_v([_({reflect:!0})],ns.prototype,"role",void 0);ns=_v([ne("vscode-table-header")],ns);const x_=[oe,ie`
    :host {
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: bold;
      line-height: 20px;
      overflow: hidden;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 0;
      padding-top: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .wrapper {
      box-sizing: inherit;
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }
  `];var yv=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let as=class extends ue{constructor(){super(...arguments),this.role="columnheader"}render(){return B`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};as.styles=x_;yv([_({reflect:!0})],as.prototype,"role",void 0);as=yv([ne("vscode-table-header-cell")],as);const S_=[oe,ie`
    :host {
      border-top-color: var(--vscode-editorGroup-border);
      border-top-style: solid;
      border-top-width: var(--vsc-row-border-top-width);
      display: var(--vsc-row-display);
      width: 100%;
    }
  `];var xv=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let ss=class extends ue{constructor(){super(...arguments),this.role="row"}render(){return B` <slot></slot> `}};ss.styles=S_;xv([_({reflect:!0})],ss.prototype,"role",void 0);ss=xv([ne("vscode-table-row")],ss);const Jp=(d,n)=>typeof d=="number"&&!Number.isNaN(d)?d/n*100:typeof d=="string"&&/^[0-9.]+$/.test(d)?Number(d)/n*100:typeof d=="string"&&/^[0-9.]+%$/.test(d)?Number(d.substring(0,d.length-1)):typeof d=="string"&&/^[0-9.]+px$/.test(d)?Number(d.substring(0,d.length-2))/n*100:null,E_=[oe,ie`
    :host {
      display: block;
      --vsc-row-even-background: transparent;
      --vsc-row-odd-background: transparent;
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 0;
      --vsc-row-display: table-row;
    }

    :host([bordered]),
    :host([bordered-rows]) {
      --vsc-row-border-bottom-width: 1px;
    }

    :host([compact]) {
      --vsc-row-display: block;
    }

    :host([bordered][compact]),
    :host([bordered-rows][compact]) {
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 1px;
    }

    :host([zebra]) {
      --vsc-row-even-background: var(--vscode-keybindingTable-rowsBackground);
    }

    :host([zebra-odd]) {
      --vsc-row-odd-background: var(--vscode-keybindingTable-rowsBackground);
    }

    ::slotted(vscode-table-row) {
      width: 100%;
    }

    .wrapper {
      height: 100%;
      max-width: 100%;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .wrapper.select-disabled {
      user-select: none;
    }

    .wrapper.resize-cursor {
      cursor: ew-resize;
    }

    .wrapper.compact-view .header-slot-wrapper {
      height: 0;
      overflow: hidden;
    }

    .scrollable {
      height: 100%;
    }

    .scrollable:before {
      background-color: transparent;
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
    }

    .wrapper:not(.compact-view) .scrollable:not([scrolled]):before {
      background-color: var(--vscode-editorGroup-border);
    }

    .sash {
      visibility: hidden;
    }

    :host([bordered-columns]) .sash,
    :host([bordered]) .sash {
      visibility: visible;
    }

    :host([resizable]) .wrapper:hover .sash {
      visibility: visible;
    }

    .sash {
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
    }

    .wrapper.compact-view .sash {
      display: none;
    }

    .sash.resizable {
      cursor: ew-resize;
    }

    .sash-visible {
      background-color: var(--vscode-editorGroup-border);
      height: 100%;
      position: absolute;
      top: 30px;
      width: 1px;
    }

    .sash.hover .sash-visible {
      background-color: var(--vscode-sash-hoverBorder);
      transition: background-color 50ms linear 300ms;
    }

    .sash .sash-clickable {
      background-color: transparent;
      height: 100%;
      left: -2px;
      position: absolute;
      width: 5px;
    }
  `];var ke=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};const Fp=100;let Te=class extends ue{constructor(){super(...arguments),this.role="table",this.resizable=!1,this.responsive=!1,this.bordered=!1,this.borderedColumns=!1,this.borderedRows=!1,this.breakpoint=300,this.minColumnWidth="50px",this.delayedResizing=!1,this.compact=!1,this.zebra=!1,this.zebraOdd=!1,this._sashPositions=[],this._isDragging=!1,this._sashHovers=[],this._columns=[],this._activeSashElementIndex=-1,this._activeSashCursorOffset=0,this._componentX=0,this._componentH=0,this._componentW=0,this._headerCells=[],this._cellsOfFirstRow=[],this._prevHeaderHeight=0,this._prevComponentHeight=0,this._componentResizeObserverCallback=()=>{this._memoizeComponentDimensions(),this._updateResizeHandlersSize(),this.responsive&&this._toggleCompactView(),this._resizeTableBody()},this._headerResizeObserverCallback=()=>{this._updateResizeHandlersSize()},this._bodyResizeObserverCallback=()=>{this._resizeTableBody()},this._onResizingMouseMove=n=>{n.stopPropagation(),this._updateActiveSashPosition(n.pageX),this.delayedResizing?this._resizeColumns(!1):this._resizeColumns(!0)},this._onResizingMouseUp=n=>{this._resizeColumns(!0),this._updateActiveSashPosition(n.pageX),this._sashHovers[this._activeSashElementIndex]=!1,this._isDragging=!1,this._activeSashElementIndex=-1,document.removeEventListener("mousemove",this._onResizingMouseMove),document.removeEventListener("mouseup",this._onResizingMouseUp)}}set columns(n){this._columns=n,this.isConnected&&this._initDefaultColumnSizes()}get columns(){return this._columns}connectedCallback(){super.connectedCallback(),this._memoizeComponentDimensions(),this._initDefaultColumnSizes()}disconnectedCallback(){var n,s,o;super.disconnectedCallback(),(n=this._componentResizeObserver)==null||n.unobserve(this),(s=this._componentResizeObserver)==null||s.disconnect(),(o=this._bodyResizeObserver)==null||o.disconnect()}_px2Percent(n){return n/this._componentW*100}_percent2Px(n){return this._componentW*n/100}_memoizeComponentDimensions(){const n=this.getBoundingClientRect();this._componentH=n.height,this._componentW=n.width,this._componentX=n.x}_queryHeaderCells(){const n=this._assignedHeaderElements;return n&&n[0]?Array.from(n[0].querySelectorAll("vscode-table-header-cell")):[]}_getHeaderCells(){return this._headerCells.length||(this._headerCells=this._queryHeaderCells()),this._headerCells}_queryCellsOfFirstRow(){const n=this._assignedBodyElements;return n&&n[0]?Array.from(n[0].querySelectorAll("vscode-table-row:first-child vscode-table-cell")):[]}_getCellsOfFirstRow(){return this._cellsOfFirstRow.length||(this._cellsOfFirstRow=this._queryCellsOfFirstRow()),this._cellsOfFirstRow}_resizeTableBody(){let n=0,s=0;const o=this.getBoundingClientRect().height;this._assignedHeaderElements&&this._assignedHeaderElements.length&&(n=this._assignedHeaderElements[0].getBoundingClientRect().height),this._assignedBodyElements&&this._assignedBodyElements.length&&(s=this._assignedBodyElements[0].getBoundingClientRect().height);const u=s-n-o;this._scrollableElement.style.height=u>0?`${o-n}px`:"auto"}_initResizeObserver(){this._componentResizeObserver=new ResizeObserver(this._componentResizeObserverCallback),this._componentResizeObserver.observe(this),this._headerResizeObserver=new ResizeObserver(this._headerResizeObserverCallback),this._headerResizeObserver.observe(this._headerElement)}_calcColWidthPercentages(){const n=this._getHeaderCells().length;let s=this.columns.slice(0,n);const o=s.filter(r=>r==="auto").length+n-s.length;let u=100;if(s=s.map(r=>{const h=Jp(r,this._componentW);return h===null?"auto":(u-=h,h)}),s.length<n)for(let r=s.length;r<n;r++)s.push("auto");return s=s.map(r=>r==="auto"?u/o:r),s}_initHeaderCellSizes(n){this._getHeaderCells().forEach((s,o)=>{s.style.width=`${n[o]}%`})}_initBodyColumnSizes(n){this._getCellsOfFirstRow().forEach((s,o)=>{s.style.width=`${n[o]}%`})}_initSashes(n){const s=n.length;let o=0;this._sashPositions=[],n.forEach((u,r)=>{if(r<s-1){const h=o+u;this._sashPositions.push(h),o=h}})}_initDefaultColumnSizes(){const n=this._calcColWidthPercentages();this._initHeaderCellSizes(n),this._initBodyColumnSizes(n),this._initSashes(n)}_updateResizeHandlersSize(){const n=this._headerElement.getBoundingClientRect();if(n.height===this._prevHeaderHeight&&this._componentH===this._prevComponentHeight)return;this._prevHeaderHeight=n.height,this._prevComponentHeight=this._componentH;const s=this._componentH-n.height;this._sashVisibleElements.forEach(o=>{o.style.height=`${s}px`,o.style.top=`${n.height}px`})}_applyCompactViewColumnLabels(){const s=this._getHeaderCells().map(u=>u.innerText);this.querySelectorAll("vscode-table-row").forEach(u=>{u.querySelectorAll("vscode-table-cell").forEach((h,v)=>{h.columnLabel=s[v],h.compact=!0})})}_clearCompactViewColumnLabels(){this.querySelectorAll("vscode-table-cell").forEach(n=>{n.columnLabel="",n.compact=!1})}_toggleCompactView(){const s=this.getBoundingClientRect().width<this.breakpoint;this.compact!==s&&(this.compact=s,s?this._applyCompactViewColumnLabels():this._clearCompactViewColumnLabels())}_onDefaultSlotChange(){this._assignedElements.forEach(n=>{if(n.tagName.toLowerCase()==="vscode-table-header"){n.slot="header";return}if(n.tagName.toLowerCase()==="vscode-table-body"){n.slot="body";return}})}_onHeaderSlotChange(){this._headerCells=this._queryHeaderCells()}_onBodySlotChange(){if(this._initDefaultColumnSizes(),this._initResizeObserver(),this._updateResizeHandlersSize(),!this._bodyResizeObserver){const n=this._assignedBodyElements[0]??null;n&&(this._bodyResizeObserver=new ResizeObserver(this._bodyResizeObserverCallback),this._bodyResizeObserver.observe(n))}}_onSashMouseOver(n){if(this._isDragging)return;const s=n.currentTarget,o=Number(s.dataset.index);this._sashHovers[o]=!0,this.requestUpdate()}_onSashMouseOut(n){if(n.stopPropagation(),this._isDragging)return;const s=n.currentTarget,o=Number(s.dataset.index);this._sashHovers[o]=!1,this.requestUpdate()}_onSashMouseDown(n){n.stopPropagation();const{pageX:s,currentTarget:o}=n,u=o,r=Number(u.dataset.index),v=u.getBoundingClientRect().x;this._isDragging=!0,this._activeSashElementIndex=r,this._sashHovers[this._activeSashElementIndex]=!0,this._activeSashCursorOffset=this._px2Percent(s-v);const x=this._getHeaderCells();this._headerCellsToResize=[],this._headerCellsToResize.push(x[r]),x[r+1]&&(this._headerCellsToResize[1]=x[r+1]);const D=this._bodySlot.assignedElements()[0].querySelectorAll("vscode-table-row:first-child > vscode-table-cell");this._cellsToResize=[],this._cellsToResize.push(D[r]),D[r+1]&&this._cellsToResize.push(D[r+1]),document.addEventListener("mousemove",this._onResizingMouseMove),document.addEventListener("mouseup",this._onResizingMouseUp)}_updateActiveSashPosition(n){const{prevSashPos:s,nextSashPos:o}=this._getSashPositions();let u=Jp(this.minColumnWidth,this._componentW);u===null&&(u=0);const r=s?s+u:u,h=o?o-u:Fp-u;let v=this._px2Percent(n-this._componentX-this._percent2Px(this._activeSashCursorOffset));v=Math.max(v,r),v=Math.min(v,h),this._sashPositions[this._activeSashElementIndex]=v,this.requestUpdate()}_getSashPositions(){const n=this._sashPositions[this._activeSashElementIndex],s=this._sashPositions[this._activeSashElementIndex-1]||0,o=this._sashPositions[this._activeSashElementIndex+1]||Fp;return{sashPos:n,prevSashPos:s,nextSashPos:o}}_resizeColumns(n=!0){const{sashPos:s,prevSashPos:o,nextSashPos:u}=this._getSashPositions(),r=s-o,h=u-s,v=`${r}%`,x=`${h}%`;this._headerCellsToResize[0].style.width=v,this._headerCellsToResize[1]&&(this._headerCellsToResize[1].style.width=x),n&&(this._cellsToResize[0].style.width=v,this._cellsToResize[1]&&(this._cellsToResize[1].style.width=x))}render(){const n=this._sashPositions.map((o,u)=>{const r=ge({sash:!0,hover:this._sashHovers[u],resizable:this.resizable}),h=`${o}%`;return this.resizable?B`
            <div
              class=${r}
              data-index=${u}
              .style=${bt({left:h})}
              @mousedown=${this._onSashMouseDown}
              @mouseover=${this._onSashMouseOver}
              @mouseout=${this._onSashMouseOut}
            >
              <div class="sash-visible"></div>
              <div class="sash-clickable"></div>
            </div>
          `:B`<div
            class=${r}
            data-index=${u}
            .style=${bt({left:h})}
          >
            <div class="sash-visible"></div>
          </div>`}),s=ge({wrapper:!0,"select-disabled":this._isDragging,"resize-cursor":this._isDragging,"compact-view":this.compact});return B`
      <div class=${s}>
        <div class="header">
          <slot name="caption"></slot>
          <div class="header-slot-wrapper">
            <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
          </div>
        </div>
        <vscode-scrollable class="scrollable">
          <div>
            <slot name="body" @slotchange=${this._onBodySlotChange}></slot>
          </div>
        </vscode-scrollable>
        ${n}
        <slot @slotchange=${this._onDefaultSlotChange}></slot>
      </div>
    `}};Te.styles=E_;ke([_({reflect:!0})],Te.prototype,"role",void 0);ke([_({type:Boolean,reflect:!0})],Te.prototype,"resizable",void 0);ke([_({type:Boolean,reflect:!0})],Te.prototype,"responsive",void 0);ke([_({type:Boolean,reflect:!0})],Te.prototype,"bordered",void 0);ke([_({type:Boolean,reflect:!0,attribute:"bordered-columns"})],Te.prototype,"borderedColumns",void 0);ke([_({type:Boolean,reflect:!0,attribute:"bordered-rows"})],Te.prototype,"borderedRows",void 0);ke([_({type:Number})],Te.prototype,"breakpoint",void 0);ke([_({type:Array})],Te.prototype,"columns",null);ke([_({attribute:"min-column-width"})],Te.prototype,"minColumnWidth",void 0);ke([_({type:Boolean,reflect:!0,attribute:"delayed-resizing"})],Te.prototype,"delayedResizing",void 0);ke([_({type:Boolean,reflect:!0})],Te.prototype,"compact",void 0);ke([_({type:Boolean,reflect:!0})],Te.prototype,"zebra",void 0);ke([_({type:Boolean,reflect:!0,attribute:"zebra-odd"})],Te.prototype,"zebraOdd",void 0);ke([at('slot[name="body"]')],Te.prototype,"_bodySlot",void 0);ke([at(".header")],Te.prototype,"_headerElement",void 0);ke([at(".scrollable")],Te.prototype,"_scrollableElement",void 0);ke([Cg(".sash-visible")],Te.prototype,"_sashVisibleElements",void 0);ke([al({flatten:!0,selector:"vscode-table-header, vscode-table-body"})],Te.prototype,"_assignedElements",void 0);ke([al({slot:"header",flatten:!0,selector:"vscode-table-header"})],Te.prototype,"_assignedHeaderElements",void 0);ke([al({slot:"body",flatten:!0,selector:"vscode-table-body"})],Te.prototype,"_assignedBodyElements",void 0);ke([P()],Te.prototype,"_sashPositions",void 0);ke([P()],Te.prototype,"_isDragging",void 0);Te=ke([ne("vscode-table")],Te);const C_=[oe,ie`
    :host {
      display: block;
    }

    .header {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      width: 100%;
    }

    .header {
      border-bottom-color: var(--vscode-settings-headerBorder);
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    .header.panel {
      background-color: var(--vscode-panel-background);
      border-bottom-width: 0;
      box-sizing: border-box;
      padding-left: 8px;
      padding-right: 8px;
    }

    slot[name='addons'] {
      display: block;
      margin-left: auto;
    }
  `];var Gn=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let $l=class extends ue{constructor(){super(),this.panel=!1,this.role="tablist",this.selectedIndex=0,this._tabHeaders=[],this._tabPanels=[],this._componentId="",this._tabFocus=0,this._componentId=pv()}attributeChangedCallback(n,s,o){super.attributeChangedCallback(n,s,o),n==="selected-index"&&this._setActiveTab(),n==="panel"&&(this._tabHeaders.forEach(u=>u.panel=o!==null),this._tabPanels.forEach(u=>u.panel=o!==null))}_dispatchSelectEvent(){this.dispatchEvent(new CustomEvent("vsc-select",{detail:{selectedIndex:this.selectedIndex},composed:!0})),this.dispatchEvent(new CustomEvent("vsc-tabs-select",{detail:{selectedIndex:this.selectedIndex},composed:!0}))}_setActiveTab(){this._tabFocus=this.selectedIndex,this._tabPanels.forEach((n,s)=>{n.hidden=s!==this.selectedIndex}),this._tabHeaders.forEach((n,s)=>{n.active=s===this.selectedIndex})}_focusPrevTab(){this._tabFocus===0?this._tabFocus=this._tabHeaders.length-1:this._tabFocus-=1}_focusNextTab(){this._tabFocus===this._tabHeaders.length-1?this._tabFocus=0:this._tabFocus+=1}_onHeaderKeyDown(n){(n.key==="ArrowLeft"||n.key==="ArrowRight")&&(n.preventDefault(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","-1"),n.key==="ArrowLeft"?this._focusPrevTab():n.key==="ArrowRight"&&this._focusNextTab(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","0"),this._tabHeaders[this._tabFocus].focus()),n.key==="Enter"&&(n.preventDefault(),this.selectedIndex=this._tabFocus,this._dispatchSelectEvent())}_moveHeadersToHeaderSlot(){const n=this._mainSlotElements.filter(s=>s instanceof It);n.length>0&&n.forEach(s=>s.setAttribute("slot","header"))}_onMainSlotChange(){this._moveHeadersToHeaderSlot(),this._tabPanels=this._mainSlotElements.filter(n=>n instanceof vl),this._tabPanels.forEach((n,s)=>{n.ariaLabelledby=`t${this._componentId}-h${s}`,n.id=`t${this._componentId}-p${s}`,n.panel=this.panel}),this._setActiveTab()}_onHeaderSlotChange(){this._tabHeaders=this._headerSlotElements.filter(n=>n instanceof It),this._tabHeaders.forEach((n,s)=>{n.tabId=s,n.id=`t${this._componentId}-h${s}`,n.ariaControls=`t${this._componentId}-p${s}`,n.panel=this.panel,n.active=s===this.selectedIndex})}_onHeaderClick(n){const o=n.composedPath().find(u=>u instanceof It);o&&(this.selectedIndex=o.tabId,this._setActiveTab(),this._dispatchSelectEvent())}render(){return B`
      <div
        class=${ge({header:!0,panel:this.panel})}
        @click=${this._onHeaderClick}
        @keydown=${this._onHeaderKeyDown}
      >
        <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        <slot name="addons"></slot>
      </div>
      <slot @slotchange=${this._onMainSlotChange}></slot>
    `}};$l.styles=C_;Gn([_({type:Boolean,reflect:!0})],$l.prototype,"panel",void 0);Gn([_({reflect:!0})],$l.prototype,"role",void 0);Gn([_({type:Number,reflect:!0,attribute:"selected-index"})],$l.prototype,"selectedIndex",void 0);Gn([al({slot:"header"})],$l.prototype,"_headerSlotElements",void 0);Gn([al()],$l.prototype,"_mainSlotElements",void 0);$l=Gn([ne("vscode-tabs")],$l);const A_=[oe,ie`
    :host {
      display: inline-flex;
    }

    button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 5px;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      outline-offset: -1px;
      outline-width: 1px;
      padding: 0;
      user-select: none;
    }

    button:focus-visible {
      outline-color: var(--vscode-focusBorder, #0078d4);
      outline-style: solid;
    }

    button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    button.checked {
      background-color: var(
        --vscode-inputOption-activeBackground,
        rgba(36, 137, 219, 0.51)
      );
      outline-color: var(--vscode-inputOption-activeBorder, #2488db);
      outline-style: solid;
      color: var(--vscode-inputOption-activeForeground, #ffffff);
    }

    button.checked vscode-icon {
      color: var(--vscode-inputOption-activeForeground, #ffffff);
    }

    vscode-icon {
      display: block;
      padding: 3px;
    }

    slot:not(.empty) {
      align-items: center;
      display: flex;
      height: 22px;
      padding: 0 5px 0 2px;
    }

    slot.textOnly:not(.empty) {
      padding: 0 5px;
    }
  `];var Zi=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let kl=class extends ue{constructor(){super(...arguments),this.icon="",this.label=void 0,this.toggleable=!1,this.checked=!1,this._isSlotEmpty=!0}_handleSlotChange(){var n;this._isSlotEmpty=!((((n=this._assignedNodes)==null?void 0:n.length)??0)>0)}_handleButtonClick(){this.toggleable&&(this.checked=!this.checked,this.dispatchEvent(new Event("change")))}render(){const n=this.checked?"true":"false";return B`
      <button
        type="button"
        aria-label=${we(this.label)}
        role=${we(this.toggleable?"switch":void 0)}
        aria-checked=${we(this.toggleable?n:void 0)}
        class=${ge({checked:this.toggleable&&this.checked})}
        @click=${this._handleButtonClick}
      >
        ${this.icon?B`<vscode-icon name=${this.icon}></vscode-icon>`:Q}
        <slot
          @slotchange=${this._handleSlotChange}
          class=${ge({empty:this._isSlotEmpty,textOnly:!this.icon})}
        ></slot>
      </button>
    `}};kl.styles=A_;Zi([_({reflect:!0})],kl.prototype,"icon",void 0);Zi([_()],kl.prototype,"label",void 0);Zi([_({type:Boolean,reflect:!0})],kl.prototype,"toggleable",void 0);Zi([_({type:Boolean,reflect:!0})],kl.prototype,"checked",void 0);Zi([P()],kl.prototype,"_isSlotEmpty",void 0);Zi([Ag()],kl.prototype,"_assignedNodes",void 0);kl=Zi([ne("vscode-toolbar-button")],kl);const O_=[oe,ie`
    :host {
      gap: 4px;
      display: flex;
      align-items: center;
    }
  `];var w_=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};let hu=class extends ue{render(){return B` <slot></slot> `}};hu.styles=O_;hu=w_([ne("vscode-toolbar-container")],hu);const T_=[oe,ie`
    :host {
      --hover-outline-color: transparent;
      --hover-outline-style: solid;
      --hover-outline-width: 0;
      --selected-outline-color: transparent;
      --selected-outline-style: solid;
      --selected-outline-width: 0;

      display: block;
      outline: none;
      user-select: none;
    }

    .wrapper {
      height: 100%;
    }

    li {
      list-style: none;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
    }

    ul {
      position: relative;
    }

    :host([indent-guides]) ul ul:before {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: var(--indent-guide-pos);
      top: 0;
      pointer-events: none;
      width: 1px;
      z-index: 1;
    }

    .contents {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      outline-offset: -1px;
      padding-right: 12px;
    }

    .multi .contents {
      align-items: flex-start;
    }

    .contents:hover {
      cursor: pointer;
    }

    .arrow-container {
      align-items: center;
      display: flex;
      height: 22px;
      justify-content: center;
      padding-left: 8px;
      padding-right: 6px;
      width: 16px;
    }

    .icon-arrow {
      color: currentColor;
      display: block;
    }

    .theme-icon {
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
    }

    .image-icon {
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: 16px;
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
      height: 22px;
      width: 16px;
    }

    .multi .contents .theme-icon {
      margin-top: 3px;
    }

    .text-content {
      display: flex;
      line-height: 22px;
    }

    .single .text-content {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .description {
      font-size: 0.9em;
      line-height: 22px;
      margin-left: 0.5em;
      opacity: 0.95;
      white-space: pre;
    }

    .actions {
      display: none;
    }

    .contents.selected > .actions,
    .contents.focused > .actions,
    .contents:hover > .actions {
      display: flex;
    }

    .decorations {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: 5px;
    }

    .filled-circle {
      margin-right: 3px;
      opacity: 0.4;
    }

    .decoration-text {
      font-size: 90%;
      font-weight: 600;
      margin-right: 3px;
      opacity: 0.75;
    }

    .filled-circle,
    .decoration-text {
      color: var(--color, currentColor);
    }

    .contents:hover .filled-circle,
    .contents:hover .decoration-text {
      color: var(--hover-color, var(--color));
    }

    .contents.focused .filled-circle,
    .contents.focused .decoration-text {
      color: var(--focused-color, var(--color));
    }

    .contents.selected .filled-circle,
    .contents.selected .decoration-text {
      color: var(--selected-color, var(--color));
    }

    /* Theme colors */
    :host(:focus) .wrapper.has-not-focused-item {
      outline: 1px solid var(--vscode-focusBorder);
    }

    :host(:focus) .contents.selected,
    :host(:focus) .contents.focused.selected {
      color: var(--vscode-list-activeSelectionForeground);
      background-color: var(--vscode-list-activeSelectionBackground);
    }

    :host(:focus) .contents.selected .icon-arrow,
    :host(:focus) .contents.selected.focused .icon-arrow,
    :host(:focus) .contents.selected .theme-icon,
    :host(:focus) .contents.selected.focused .theme-icon,
    :host(:focus) .contents.selected .action-icon,
    :host(:focus) .contents.selected.focused .action-icon {
      color: var(--vscode-list-activeSelectionIconForeground);
    }

    :host(:focus) .contents.focused {
      color: var(--vscode-list-focusForeground);
      background-color: var(--vscode-list-focusBackground);
    }

    :host(:focus) .contents.selected.focused {
      outline-color: var(
        --vscode-list-focusAndSelectionOutline,
        var(--vscode-list-focusOutline)
      );
    }

    .contents:hover {
      background-color: var(--vscode-list-hoverBackground);
      color: var(--vscode-list-hoverForeground);
    }

    .contents:hover,
    .contents.selected:hover {
      outline-color: var(--hover-outline-color);
      outline-style: var(--hover-outline-style);
      outline-width: var(--hover-outline-width);
    }

    .contents.selected,
    .contents.selected.focused {
      background-color: var(--vscode-list-inactiveSelectionBackground);
      color: var(--vscode-list-inactiveSelectionForeground);
    }

    .contents.selected,
    .contents.selected.focused {
      outline-color: var(--selected-outline-color);
      outline-style: var(--selected-outline-style);
      outline-width: var(--selected-outline-width);
    }

    .contents.selected .theme-icon {
      color: var(--vscode-list-inactiveSelectionIconForeground);
    }

    .contents.focused {
      background-color: var(--vscode-list-inactiveFocusBackground);
      outline: 1px dotted var(--vscode-list-inactiveFocusOutline);
    }

    :host(:focus) .contents.focused {
      outline: 1px solid var(--vscode-list-focusOutline);
    }

    :host([indent-guides]) ul ul:before {
      background-color: var(--vscode-tree-inactiveIndentGuidesStroke);
    }

    :host([indent-guides]) ul ul.has-active-item:before {
      background-color: var(--vscode-tree-indentGuidesStroke);
    }
  `];var sl=function(d,n,s,o){var u=arguments.length,r=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,s):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,n,s,o);else for(var v=d.length-1;v>=0;v--)(h=d[v])&&(r=(u<3?h(r):u>3?h(n,s,r):h(n,s))||r);return u>3&&r&&Object.defineProperty(n,s,r),r};const R_=30,z_=16,Pp=3,Sv=(d,n=[])=>{const s=[];return d.forEach((o,u)=>{const r=[...n,u],h={...o,path:r};o.subItems&&(h.subItems=Sv(o.subItems,r)),s.push(h)}),s},Qa=d=>{var n;return!!(d.subItems&&Array.isArray(d.subItems)&&((n=d==null?void 0:d.subItems)==null?void 0:n.length)>0)};let Ct=class extends ue{constructor(){super(...arguments),this.indent=8,this.arrows=!1,this.multiline=!1,this.tabindex=0,this.indentGuides=!1,this._data=[],this._selectedItem=null,this._focusedItem=null,this._selectedBranch=null,this._focusedBranch=null,this._handleComponentKeyDownBound=this._handleComponentKeyDown.bind(this)}set data(n){const s=this._data;this._data=Sv(n),this.requestUpdate("data",s)}get data(){return this._data}closeAll(){this._closeSubTreeRecursively(this.data),this.requestUpdate()}deselectAll(){this._deselectItemsRecursively(this.data),this.requestUpdate()}getItemByPath(n){return this._getItemByPath(n)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleComponentKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleComponentKeyDownBound)}_getItemByPath(n){let s=this._data,o=null;return n.forEach((u,r)=>{r===n.length-1?o=s[u]:s=s[u].subItems}),o}_handleActionClick(n){n.stopPropagation();const s=n.target,o=s.dataset.itemPath,u=s.dataset.index;let r=null,h="",v="";if(o){const x=o.split("/").map(S=>Number(S));if(r=this._getItemByPath(x),r!=null&&r.actions){const S=Number(u);r.actions[S]&&(h=r.actions[S].actionId)}r!=null&&r.value&&(v=r.value)}this.dispatchEvent(new CustomEvent("vsc-run-action",{detail:{actionId:h,item:r,value:v}})),this.dispatchEvent(new CustomEvent("vsc-tree-action",{detail:{actionId:h,item:r,value:v}}))}_renderIconVariant(n){const{type:s,value:o}=n;return s==="themeicon"?B`<vscode-icon name=${o} class="theme-icon"></vscode-icon>`:B`<span
        class="image-icon"
        .style=${bt({backgroundImage:`url(${o})`})}
      ></span>`}_renderIcon(n){const s={branch:{value:"folder",type:"themeicon"},open:{value:"folder-opened",type:"themeicon"},leaf:{value:"file",type:"themeicon"}};if(n.iconUrls)n.iconUrls.branch&&(s.branch={value:n.iconUrls.branch,type:"image"}),n.iconUrls.leaf&&(s.leaf={value:n.iconUrls.leaf,type:"image"}),n.iconUrls.open&&(s.open={value:n.iconUrls.open,type:"image"});else if(typeof n.icons=="object")n.icons.branch&&(s.branch={value:n.icons.branch,type:"themeicon"}),n.icons.leaf&&(s.leaf={value:n.icons.leaf,type:"themeicon"}),n.icons.open&&(s.open={value:n.icons.open,type:"themeicon"});else if(!n.icons)return B`${Q}`;return Qa(n)?n.open?this._renderIconVariant(s.open):this._renderIconVariant(s.branch):this._renderIconVariant(s.leaf)}_renderArrow(n){if(!this.arrows||!Qa(n))return B`${Q}`;const{open:s=!1}=n;return B`
      <div class="arrow-container">
        <vscode-icon name=${s?"chevron-down":"chevron-right"} class="icon-arrow"></vscode-icon>
      </div>
    `}_renderActions(n){const s=[];return n.actions&&Array.isArray(n.actions)&&n.actions.forEach((o,u)=>{var r;if(o.icon){const h=B`<vscode-icon
            name=${o.icon}
            action-icon
            title=${we(o.tooltip)}
            data-item-path=${we((r=n.path)==null?void 0:r.join("/"))}
            data-index=${u}
            class="action-icon"
            @click=${this._handleActionClick}
          ></vscode-icon>`;s.push(h)}}),s.length>0?B`<div class="actions">${s}</div>`:B`${Q}`}_renderDecorations(n){const s=[];return n.decorations&&Array.isArray(n.decorations)&&n.decorations.forEach(o=>{const{appearance:u="text",visibleWhen:r="always",content:h="",color:v="",focusedColor:x="",hoverColor:S="",selectedColor:D=""}=o,$=`visible-when-${r}`,N={};switch(v&&(N["--color"]=v),x&&(N["--focused-color"]=x),S&&(N["--hover-color"]=S),D&&(N["--selected-color"]=D),u){case"counter-badge":s.push(B`<vscode-badge
                variant="counter"
                class=${["counter-badge",$].join(" ")}
                part="counter-badge-decoration"
                >${h}</vscode-badge
              >`);break;case"filled-circle":s.push(B`<vscode-icon
                name="circle-filled"
                size="14"
                class=${["filled-circle",$].join(" ")}
                part="filled-circle-decoration"
                .style=${bt(N)}
              ></vscode-icon>`);break;case"text":s.push(B`<div
                class=${["decoration-text",$].join(" ")}
                part="caption-decoration"
                .style=${bt(N)}
              >
                ${h}
              </div>`);break}}),s.length>0?B`<div class="decorations" part="decorations">
        ${s}
      </div>`:B`${Q}`}_renderTreeItem(n,s){const{open:o=!1,label:u,description:r="",tooltip:h,selected:v=!1,focused:x=!1,subItems:S=[]}=n,{path:D,itemType:$,hasFocusedItem:N=!1,hasSelectedItem:H=!1}=s,k=D.length-1,J=["contents"],ve=o?["open"]:[],et=k*this.indent,Ot=this.arrows&&$==="leaf"?R_+et:et,Ue=this._renderArrow(n),wt=this._renderIcon(n),ae=this.arrows?et+z_:et+Pp,ft=o&&$==="branch"?B`<ul
            .style=${bt({"--indent-guide-pos":`${ae}px`})}
            class=${ge({"has-active-item":N||H})}
          >
            ${this._renderTree(S,D)}
          </ul>`:Q,ht=r?B`<span class="description" part="description">${r}</span>`:Q,pt=this._renderActions(n),Ht=this._renderDecorations(n);return ve.push($),v&&J.push("selected"),x&&J.push("focused"),B`
      <li data-path=${D.join("/")} class=${ve.join(" ")}>
        <div
          class=${J.join(" ")}
          .style=${bt({paddingLeft:`${Ot+Pp}px`})}
        >
          ${Ue}${wt}<span
            class="text-content"
            part="text-content"
            title=${we(h)}
            >${u}${ht}</span
          >
          ${pt} ${Ht}
        </div>
        ${ft}
      </li>
    `}_renderTree(n,s=[]){const o=[];return n?(n.forEach((u,r)=>{const h=[...s,r],v=Qa(u)?"branch":"leaf",{selected:x=!1,focused:S=!1,hasFocusedItem:D=!1,hasSelectedItem:$=!1}=u;x&&(this._selectedItem=u),S&&(this._focusedItem=u),o.push(this._renderTreeItem(u,{path:h,itemType:v,hasFocusedItem:D,hasSelectedItem:$}))}),o):Q}_selectItem(n){var o,u;this._selectedItem&&(this._selectedItem.selected=!1),this._focusedItem&&(this._focusedItem.focused=!1),this._selectedItem=n,n.selected=!0,this._focusedItem=n,n.focused=!0,this._selectedBranch&&(this._selectedBranch.hasSelectedItem=!1);let s=null;if((o=n.path)!=null&&o.length&&n.path.length>1&&(s=this._getItemByPath(n.path.slice(0,-1))),Qa(n))this._selectedBranch=n,n.hasSelectedItem=!0,n.open=!n.open,n.open?(this._selectedBranch=n,n.hasSelectedItem=!0):s&&(this._selectedBranch=s,s.hasSelectedItem=!0);else if((u=n.path)!=null&&u.length&&n.path.length>1){const r=this._getItemByPath(n.path.slice(0,-1));r&&(this._selectedBranch=r,r.hasSelectedItem=!0)}else this._selectedBranch=n,n.hasSelectedItem=!0;this._emitSelectEvent(this._selectedItem,this._selectedItem.path.join("/")),this.requestUpdate()}_focusItem(n){var u,r;this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=n,n.focused=!0;const s=!!((u=n==null?void 0:n.subItems)!=null&&u.length);this._focusedBranch&&(this._focusedBranch.hasFocusedItem=!1);let o=null;(r=n.path)!=null&&r.length&&n.path.length>1&&(o=this._getItemByPath(n.path.slice(0,-1))),s?n.open?(this._focusedBranch=n,n.hasFocusedItem=!0):!n.open&&o&&(this._focusedBranch=o,o.hasFocusedItem=!0):o&&(this._focusedBranch=o,o.hasFocusedItem=!0)}_closeSubTreeRecursively(n){n.forEach(s=>{s.open=!1,s.subItems&&s.subItems.length>0&&this._closeSubTreeRecursively(s.subItems)})}_deselectItemsRecursively(n){n.forEach(s=>{s.selected&&(s.selected=!1),s.subItems&&s.subItems.length>0&&this._deselectItemsRecursively(s.subItems)})}_emitSelectEvent(n,s){const{icons:o,label:u,open:r,value:h}=n,v={icons:o,itemType:Qa(n)?"branch":"leaf",label:u,open:r||!1,value:h||u,path:s};this.dispatchEvent(new CustomEvent("vsc-select",{bubbles:!0,composed:!0,detail:v})),this.dispatchEvent(new CustomEvent("vsc-tree-select",{detail:v}))}_focusPrevItem(){var s;if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:n}=this._focusedItem;if(n&&(n==null?void 0:n.length)>0){const o=n[n.length-1],u=n.length>1;if(o>0){const r=[...n];r[r.length-1]=o-1;const h=this._getItemByPath(r);let v=h;if(h!=null&&h.open&&((s=h.subItems)!=null&&s.length)){const{subItems:x}=h;v=x[x.length-1]}this._focusItem(v)}else if(u){const r=[...n];r.pop(),this._focusItem(this._getItemByPath(r))}}else this._focusItem(this._data[0])}_focusNextItem(){if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:n,open:s}=this._focusedItem;if(s&&Array.isArray(this._focusedItem.subItems)&&this._focusedItem.subItems.length>0){this._focusItem(this._focusedItem.subItems[0]);return}const o=[...n];o[o.length-1]+=1;let u=this._getItemByPath(o);u?this._focusItem(u):(o.pop(),o.length>0&&(o[o.length-1]+=1,u=this._getItemByPath(o),u&&this._focusItem(u)))}_handleClick(n){const o=n.composedPath().find(u=>u.tagName&&u.tagName.toUpperCase()==="LI");if(o){const r=(o.dataset.path||"").split("/").map(v=>Number(v)),h=this._getItemByPath(r);this._selectItem(h)}else this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=null}_handleComponentKeyDown(n){const s=[" ","ArrowDown","ArrowUp","Enter","Escape"],o=n.key;s.includes(n.key)&&(n.stopPropagation(),n.preventDefault()),o==="Escape"&&(this._focusedItem=null),o==="ArrowUp"&&this._focusPrevItem(),o==="ArrowDown"&&this._focusNextItem(),(o==="Enter"||o===" ")&&this._focusedItem&&this._selectItem(this._focusedItem)}render(){const n=ge({multi:this.multiline,single:!this.multiline,wrapper:!0,"has-not-focused-item":!this._focusedItem,"selection-none":!this._selectedItem,"selection-single":this._selectedItem!==null});return B`
      <div @click=${this._handleClick} class=${n}>
        <ul>
          ${this._renderTree(this._data)}
        </ul>
      </div>
    `}};Ct.styles=T_;sl([_({type:Array,reflect:!1})],Ct.prototype,"data",null);sl([_({type:Number})],Ct.prototype,"indent",void 0);sl([_({type:Boolean,reflect:!0})],Ct.prototype,"arrows",void 0);sl([_({type:Boolean,reflect:!0})],Ct.prototype,"multiline",void 0);sl([_({type:Number,reflect:!0})],Ct.prototype,"tabindex",void 0);sl([_({type:Boolean,reflect:!0,attribute:"indent-guides"})],Ct.prototype,"indentGuides",void 0);sl([P()],Ct.prototype,"_selectedItem",void 0);sl([P()],Ct.prototype,"_focusedItem",void 0);sl([P()],Ct.prototype,"_selectedBranch",void 0);sl([P()],Ct.prototype,"_focusedBranch",void 0);Ct=sl([ne("vscode-tree")],Ct);re({tagName:"vscode-badge",elementClass:es,react:ce,displayName:"VscodeBadge"});const D_=re({tagName:"vscode-button",elementClass:Ye,react:ce,displayName:"VscodeButton"});re({tagName:"vscode-checkbox",elementClass:nt,react:ce,displayName:"VscodeCheckbox",events:{onChange:"change"}});re({tagName:"vscode-checkbox-group",elementClass:qi,react:ce,displayName:"VscodeCheckboxGroup"});re({tagName:"vscode-collapsible",elementClass:Li,react:ce,displayName:"VscodeCollapsible"});re({tagName:"vscode-context-menu",elementClass:nl,react:ce,displayName:"VscodeContextMenu",events:{onVscContextMenuSelect:"vsc-context-menu-select"}});re({tagName:"vscode-context-menu-item",elementClass:Ml,react:ce,displayName:"VscodeContextMenuItem"});const M_=re({tagName:"vscode-divider",elementClass:ts,react:ce,displayName:"VscodeDivider"});re({tagName:"vscode-form-container",elementClass:Bl,react:ce,displayName:"VscodeFormContainer"});const B_=re({tagName:"vscode-form-group",elementClass:ls,react:ce,displayName:"VscodeFormGroup"});re({tagName:"vscode-form-helper",elementClass:Do,react:ce,displayName:"VscodeFormHelper"});re({tagName:"vscode-icon",elementClass:Jt,react:ce,displayName:"VscodeIcon"});re({tagName:"vscode-label",elementClass:ji,react:ce,displayName:"VscodeLabel"});re({tagName:"vscode-multi-select",elementClass:Ft,react:ce,displayName:"VscodeMultiSelect",events:{onChange:"change",onInvalid:"invalid",onVscMultiSelectCreateOption:"vsc-multi-select-create-option"}});const Wp=re({tagName:"vscode-option",elementClass:di,react:ce,displayName:"VscodeOption"});re({tagName:"vscode-progress-ring",elementClass:Yi,react:ce,displayName:"VscodeProgressRing"});re({tagName:"vscode-radio",elementClass:Ze,react:ce,displayName:"VscodeRadio",events:{onChange:"change",onInvalid:"invalid"}});re({tagName:"vscode-radio-group",elementClass:pl,react:ce,displayName:"VscodeRadioGroup",events:{onChange:"change"}});re({tagName:"vscode-scrollable",elementClass:Pe,react:ce,displayName:"VscodeScrollable"});const ev=re({tagName:"vscode-single-select",elementClass:Ut,react:ce,displayName:"VscodeSingleSelect",events:{onChange:"change",onInvalid:"invalid",onVscSingleSelectCreateOption:"vsc-single-select-create-option"}});re({tagName:"vscode-split-layout",elementClass:We,react:ce,displayName:"VscodeSplitLayout",events:{onVscSplitLayoutChange:"vsc-split-layout-change"}});re({tagName:"vscode-tab-header",elementClass:It,react:ce,displayName:"VscTabHeader"});re({tagName:"vscode-table",elementClass:Te,react:ce,displayName:"VscodeTable"});re({tagName:"vscode-table-body",elementClass:is,react:ce,displayName:"VscodeTableBody"});re({tagName:"vscode-table-cell",elementClass:Gi,react:ce,displayName:"VscodeTableCell"});re({tagName:"vscode-table-header",elementClass:ns,react:ce,displayName:"VscodeTableHeader"});re({tagName:"vscode-table-header-cell",elementClass:as,react:ce,displayName:"VscodeTableHeaderCell"});re({tagName:"vscode-table-row",elementClass:ss,react:ce,displayName:"VscodeTableRow"});re({tagName:"vscode-tab-panel",elementClass:vl,react:ce,displayName:"VscodeTabPanel"});re({tagName:"vscode-tabs",elementClass:$l,react:ce,events:{onVscTabsSelect:"vsc-tabs-select"},displayName:"VscodeTabs"});re({tagName:"vscode-textarea",elementClass:_e,react:ce,displayName:"VscodeTextarea",events:{onChange:"change",onInput:"input",onInvalid:"invalid"}});const $_=re({tagName:"vscode-textfield",elementClass:pe,react:ce,displayName:"VscodeTextfield",events:{onChange:"change",onInput:"input",onInvalid:"invalid"}});re({tagName:"vscode-tree",elementClass:Ct,react:ce,displayName:"VscodeTree",events:{onVscTreeAction:"vsc-tree-action",onVscTreeSelect:"vsc-tree-select"}});const k_=[{publicKey:"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",privateKey:"0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",balance:1e4},{publicKey:"0x70997970C51812dc3A010C7d01b50e0d17dc79C8",privateKey:"0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",balance:1e4},{publicKey:"0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",privateKey:"0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a",balance:1e4},{publicKey:"0x90F79bf6EB2c4f870365E785982E1f101E93b906",privateKey:"0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6",balance:1e4},{publicKey:"0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",privateKey:"0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a",balance:1e4},{publicKey:"0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",privateKey:"0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba",balance:1e4},{publicKey:"0x976EA74026E726554dB657fA54763abd0C3a0aa9",privateKey:"0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e",balance:1e4},{publicKey:"0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",privateKey:"0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356",balance:1e4},{publicKey:"0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f",privateKey:"0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97",balance:1e4},{publicKey:"0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",privateKey:"0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6",balance:1e4}],ci={log:"log",runCommand:"command",createTerminal:"createTerminal",getSolFiles:"getSolFiles",getAbi:"getAbi"},tv={anvilTerminal:"anvilTerminal",commandTerminal:"commandTerminal"},V_=typeof acquireVsCodeApi=="function",kn=V_?acquireVsCodeApi():{postMessage:d=>{console.log("[Mock vscode.postMessage]",d)}};function N_(){const[d,n]=ll.useState(),[s]=ll.useState(k_),[o,u]=ll.useState(s[0].privateKey),[r,h]=ll.useState(""),[v,x]=ll.useState(null),[S,D]=ll.useState(null),[$,N]=ll.useState([]);window.addEventListener("message",k=>{const{id:J,data:ve}=k.data;J===ci.getSolFiles&&(n(ve),h(ve[0].filePath+":"+ve[0].name)),J===ci.getAbi&&(x(ve),D(ve.abi[0]))}),ll.useEffect(()=>{kn.postMessage({id:ci.getSolFiles})},[]),ll.useEffect(()=>{if(r==="")return;const k=r.match(/\/([^\/]+\.sol):([^\/]+)$/),J=k?`/${k[1]}/${k[2]}.json`:"";kn.postMessage({id:ci.getAbi,data:J}),N([])},[r]);const H=()=>{let k=`forge create --rpc-url http://localhost:8545 --private-key ${o} ${r} --broadcast`;$.length>0&&(k+=" --constructor-args",$.forEach(J=>{k+=` ${J}`})),kn.postMessage({id:ci.createTerminal,data:tv.commandTerminal}),kn.postMessage({id:ci.createTerminal,data:tv.anvilTerminal}),kn.postMessage({id:ci.log,data:k}),kn.postMessage({id:ci.runCommand,data:k})};return Qe.jsxs("div",{children:[Qe.jsx("h1",{children:"SlotMatrix"}),Qe.jsx("p",{children:"Code. Deploy. Inspect. All in One Matrix."}),Qe.jsx(M_,{}),Qe.jsxs("div",{children:[Qe.jsx("p",{children:"Accounts"}),Qe.jsx(ev,{onChange:k=>{u(k.target.value)},children:s.map((k,J)=>Qe.jsx(Wp,{value:k.privateKey,children:k.publicKey.slice(0,6)+"..."+k.publicKey.slice(-6)+`  (${k.balance} ETH)`},J))})]}),Qe.jsxs("div",{children:[Qe.jsx("p",{children:"Contract"}),Qe.jsx(ev,{onChange:k=>{h(k.target.value)},style:{marginBottom:"10px"},children:d!==void 0&&d.map((k,J)=>Qe.jsx(Wp,{value:k.filePath+":"+k.name,children:k.name+".sol"},J))})]}),S!==null&&S.type==="constructor"&&Qe.jsx(B_,{children:Qe.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:S.inputs.map((k,J)=>Qe.jsx($_,{value:$[J]===void 0?"":$[J],placeholder:k.name,onChange:ve=>{const et=ve.target.value;N(Ot=>{const Ue=[...Ot];return Ue[J]=et,Ue})}},J))})}),Qe.jsx("div",{children:Qe.jsx(D_,{onClick:H,children:"Deploy"})})]})}tg.createRoot(document.getElementById("root")).render(Qe.jsx(ll.StrictMode,{children:Qe.jsx(N_,{})}));
