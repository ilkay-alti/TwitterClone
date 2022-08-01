const Og=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Og();function Rg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var A={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _i=Symbol.for("react.element"),Ng=Symbol.for("react.portal"),Ag=Symbol.for("react.fragment"),Dg=Symbol.for("react.strict_mode"),Lg=Symbol.for("react.profiler"),Mg=Symbol.for("react.provider"),bg=Symbol.for("react.context"),$g=Symbol.for("react.forward_ref"),jg=Symbol.for("react.suspense"),Ug=Symbol.for("react.memo"),Fg=Symbol.for("react.lazy"),Ic=Symbol.iterator;function zg(e){return e===null||typeof e!="object"?null:(e=Ic&&e[Ic]||e["@@iterator"],typeof e=="function"?e:null)}var Nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ad=Object.assign,Dd={};function mr(e,t,n){this.props=e,this.context=t,this.refs=Dd,this.updater=n||Nd}mr.prototype.isReactComponent={};mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ld(){}Ld.prototype=mr.prototype;function Yl(e,t,n){this.props=e,this.context=t,this.refs=Dd,this.updater=n||Nd}var Jl=Yl.prototype=new Ld;Jl.constructor=Yl;Ad(Jl,mr.prototype);Jl.isPureReactComponent=!0;var kc=Array.isArray,Md=Object.prototype.hasOwnProperty,Xl={current:null},bd={key:!0,ref:!0,__self:!0,__source:!0};function $d(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Md.call(t,r)&&!bd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:_i,type:e,key:o,ref:s,props:i,_owner:Xl.current}}function Bg(e,t){return{$$typeof:_i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zl(e){return typeof e=="object"&&e!==null&&e.$$typeof===_i}function Vg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Cc=/\/+/g;function Js(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vg(""+e.key):t.toString(36)}function eo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case _i:case Ng:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Js(s,0):r,kc(i)?(n="",e!=null&&(n=e.replace(Cc,"$&/")+"/"),eo(i,t,n,"",function(u){return u})):i!=null&&(Zl(i)&&(i=Bg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Cc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",kc(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Js(o,a);s+=eo(o,t,n,l,i)}else if(l=zg(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Js(o,a++),s+=eo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Mi(e,t,n){if(e==null)return e;var r=[],i=0;return eo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Wg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},to={transition:null},Hg={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:to,ReactCurrentOwner:Xl};M.Children={map:Mi,forEach:function(e,t,n){Mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mi(e,function(){t++}),t},toArray:function(e){return Mi(e,function(t){return t})||[]},only:function(e){if(!Zl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=mr;M.Fragment=Ag;M.Profiler=Lg;M.PureComponent=Yl;M.StrictMode=Dg;M.Suspense=jg;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hg;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ad({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Xl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Md.call(t,l)&&!bd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:_i,type:e.type,key:i,ref:o,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:bg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mg,_context:e},e.Consumer=e};M.createElement=$d;M.createFactory=function(e){var t=$d.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:$g,render:e}};M.isValidElement=Zl;M.lazy=function(e){return{$$typeof:Fg,_payload:{_status:-1,_result:e},_init:Wg}};M.memo=function(e,t){return{$$typeof:Ug,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=to.transition;to.transition={};try{e()}finally{to.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return ye.current.useCallback(e,t)};M.useContext=function(e){return ye.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};M.useEffect=function(e,t){return ye.current.useEffect(e,t)};M.useId=function(){return ye.current.useId()};M.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ye.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};M.useRef=function(e){return ye.current.useRef(e)};M.useState=function(e){return ye.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ye.current.useTransition()};M.version="18.2.0";(function(e){e.exports=M})(A);const Ge=Rg(A.exports);var Wa={},eu={exports:{}},Ne={},jd={exports:{}},Ud={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,D){var L=P.length;P.push(D);e:for(;0<L;){var J=L-1>>>1,re=P[J];if(0<i(re,D))P[J]=D,P[L]=re,L=J;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],L=P.pop();if(L!==D){P[0]=L;e:for(var J=0,re=P.length,Di=re>>>1;J<Di;){var ln=2*(J+1)-1,Ys=P[ln],un=ln+1,Li=P[un];if(0>i(Ys,L))un<re&&0>i(Li,Ys)?(P[J]=Li,P[un]=L,J=un):(P[J]=Ys,P[ln]=L,J=ln);else if(un<re&&0>i(Li,L))P[J]=Li,P[un]=L,J=un;else break e}}return D}function i(P,D){var L=P.sortIndex-D.sortIndex;return L!==0?L:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function w(P){if(y=!1,m(P),!v)if(n(l)!==null)v=!0,qs(I);else{var D=n(u);D!==null&&Qs(w,D.startTime-P)}}function I(P,D){v=!1,y&&(y=!1,p(E),E=-1),g=!0;var L=d;try{for(m(D),h=n(l);h!==null&&(!(h.expirationTime>D)||P&&!F());){var J=h.callback;if(typeof J=="function"){h.callback=null,d=h.priorityLevel;var re=J(h.expirationTime<=D);D=e.unstable_now(),typeof re=="function"?h.callback=re:h===n(l)&&r(l),m(D)}else r(l);h=n(l)}if(h!==null)var Di=!0;else{var ln=n(u);ln!==null&&Qs(w,ln.startTime-D),Di=!1}return Di}finally{h=null,d=L,g=!1}}var C=!1,_=null,E=-1,R=5,O=-1;function F(){return!(e.unstable_now()-O<R)}function Le(){if(_!==null){var P=e.unstable_now();O=P;var D=!0;try{D=_(!0,P)}finally{D?ft():(C=!1,_=null)}}else C=!1}var ft;if(typeof f=="function")ft=function(){f(Le)};else if(typeof MessageChannel<"u"){var an=new MessageChannel,Ec=an.port2;an.port1.onmessage=Le,ft=function(){Ec.postMessage(null)}}else ft=function(){x(Le,0)};function qs(P){_=P,C||(C=!0,ft())}function Qs(P,D){E=x(function(){P(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,qs(I))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var L=d;d=D;try{return P()}finally{d=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=d;d=P;try{return D()}finally{d=L}},e.unstable_scheduleCallback=function(P,D,L){var J=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,P){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=L+re,P={id:c++,callback:D,priorityLevel:P,startTime:L,expirationTime:re,sortIndex:-1},L>J?(P.sortIndex=L,t(u,P),n(l)===null&&P===n(u)&&(y?(p(E),E=-1):y=!0,Qs(w,L-J))):(P.sortIndex=re,t(l,P),v||g||(v=!0,qs(I))),P},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(P){var D=d;return function(){var L=d;d=D;try{return P.apply(this,arguments)}finally{d=L}}}})(Ud);(function(e){e.exports=Ud})(jd);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=A.exports,Oe=jd.exports;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zd=new Set,Qr={};function Ln(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(Qr[e]=t,e=0;e<t.length;e++)zd.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ha=Object.prototype.hasOwnProperty,Kg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tc={},Pc={};function Gg(e){return Ha.call(Pc,e)?!0:Ha.call(Tc,e)?!1:Kg.test(e)?Pc[e]=!0:(Tc[e]=!0,!1)}function qg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qg(e,t,n,r){if(t===null||typeof t>"u"||qg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var tu=/[\-:]([a-z])/g;function nu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tu,nu);ue[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tu,nu);ue[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tu,nu);ue[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function ru(e,t,n,r){var i=ue.hasOwnProperty(t)?ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qg(t,n,i,r)&&(n=null),r||i===null?Gg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bi=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),iu=Symbol.for("react.strict_mode"),Ka=Symbol.for("react.profiler"),Bd=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),ou=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),qa=Symbol.for("react.suspense_list"),su=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Wd=Symbol.for("react.offscreen"),xc=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=xc&&e[xc]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Xs;function Rr(e){if(Xs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xs=t&&t[1]||""}return`
`+Xs+e}var Zs=!1;function ea(e,t){if(!e||Zs)return"";Zs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Zs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rr(e):""}function Yg(e){switch(e.tag){case 5:return Rr(e.type);case 16:return Rr("Lazy");case 13:return Rr("Suspense");case 19:return Rr("SuspenseList");case 0:case 2:case 15:return e=ea(e.type,!1),e;case 11:return e=ea(e.type.render,!1),e;case 1:return e=ea(e.type,!0),e;default:return""}}function Qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case jn:return"Portal";case Ka:return"Profiler";case iu:return"StrictMode";case Ga:return"Suspense";case qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vd:return(e.displayName||"Context")+".Consumer";case Bd:return(e._context.displayName||"Context")+".Provider";case ou:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case su:return t=e.displayName||null,t!==null?t:Qa(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return Qa(e(t))}catch{}}return null}function Jg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(t);case 8:return t===iu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xg(e){var t=Hd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $i(e){e._valueTracker||(e._valueTracker=Xg(e))}function Kd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Oc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gd(e,t){t=t.checked,t!=null&&ru(e,"checked",t,!1)}function Ja(e,t){Gd(e,t);var n=Xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xa(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xa(e,t,n){(t!=="number"||vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nr=Array.isArray;function Jn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Za(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Nr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xt(n)}}function qd(e,t){var n=Xt(t.value),r=Xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ac(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function el(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ji,Yd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ji=ji||document.createElement("div"),ji.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zg=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){Zg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jr[t]=jr[e]})});function Jd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jr.hasOwnProperty(e)&&jr[e]?(""+t).trim():t+"px"}function Xd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ev=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(e,t){if(t){if(ev[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rl=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,Xn=null,Zn=null;function Dc(e){if(e=Ii(e)){if(typeof il!="function")throw Error(S(280));var t=e.stateNode;t&&(t=os(t),il(e.stateNode,e.type,t))}}function Zd(e){Xn?Zn?Zn.push(e):Zn=[e]:Xn=e}function eh(){if(Xn){var e=Xn,t=Zn;if(Zn=Xn=null,Dc(e),t)for(e=0;e<t.length;e++)Dc(t[e])}}function th(e,t){return e(t)}function nh(){}var ta=!1;function rh(e,t,n){if(ta)return e(t,n);ta=!0;try{return th(e,t,n)}finally{ta=!1,(Xn!==null||Zn!==null)&&(nh(),eh())}}function Jr(e,t){var n=e.stateNode;if(n===null)return null;var r=os(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var ol=!1;if(_t)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){ol=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{ol=!1}function tv(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ur=!1,yo=null,wo=!1,sl=null,nv={onError:function(e){Ur=!0,yo=e}};function rv(e,t,n,r,i,o,s,a,l){Ur=!1,yo=null,tv.apply(nv,arguments)}function iv(e,t,n,r,i,o,s,a,l){if(rv.apply(this,arguments),Ur){if(Ur){var u=yo;Ur=!1,yo=null}else throw Error(S(198));wo||(wo=!0,sl=u)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ih(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lc(e){if(Mn(e)!==e)throw Error(S(188))}function ov(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Lc(i),e;if(o===r)return Lc(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function oh(e){return e=ov(e),e!==null?sh(e):null}function sh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sh(e);if(t!==null)return t;e=e.sibling}return null}var ah=Oe.unstable_scheduleCallback,Mc=Oe.unstable_cancelCallback,sv=Oe.unstable_shouldYield,av=Oe.unstable_requestPaint,X=Oe.unstable_now,lv=Oe.unstable_getCurrentPriorityLevel,lu=Oe.unstable_ImmediatePriority,lh=Oe.unstable_UserBlockingPriority,_o=Oe.unstable_NormalPriority,uv=Oe.unstable_LowPriority,uh=Oe.unstable_IdlePriority,ts=null,nt=null;function cv(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(ts,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:hv,fv=Math.log,dv=Math.LN2;function hv(e){return e>>>=0,e===0?32:31-(fv(e)/dv|0)|0}var Ui=64,Fi=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ar(a):(o&=s,o!==0&&(r=Ar(o)))}else s=n&~i,s!==0?r=Ar(s):o!==0&&(r=Ar(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function pv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Qe(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=pv(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ch(){var e=Ui;return Ui<<=1,(Ui&4194240)===0&&(Ui=64),e}function na(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function gv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function uu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $=0;function fh(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var dh,cu,hh,ph,mh,ll=!1,zi=[],zt=null,Bt=null,Vt=null,Xr=new Map,Zr=new Map,At=[],vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bc(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function kr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ii(t),t!==null&&cu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function yv(e,t,n,r,i){switch(t){case"focusin":return zt=kr(zt,e,t,n,r,i),!0;case"dragenter":return Bt=kr(Bt,e,t,n,r,i),!0;case"mouseover":return Vt=kr(Vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Xr.set(o,kr(Xr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Zr.set(o,kr(Zr.get(o)||null,e,t,n,r,i)),!0}return!1}function gh(e){var t=pn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=ih(n),t!==null){e.blockedOn=t,mh(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rl=r,n.target.dispatchEvent(r),rl=null}else return t=Ii(n),t!==null&&cu(t),e.blockedOn=n,!1;t.shift()}return!0}function $c(e,t,n){no(e)&&n.delete(t)}function wv(){ll=!1,zt!==null&&no(zt)&&(zt=null),Bt!==null&&no(Bt)&&(Bt=null),Vt!==null&&no(Vt)&&(Vt=null),Xr.forEach($c),Zr.forEach($c)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,ll||(ll=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,wv)))}function ei(e){function t(i){return Cr(i,e)}if(0<zi.length){Cr(zi[0],e);for(var n=1;n<zi.length;n++){var r=zi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&Cr(zt,e),Bt!==null&&Cr(Bt,e),Vt!==null&&Cr(Vt,e),Xr.forEach(t),Zr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)gh(n),n.blockedOn===null&&At.shift()}var er=Pt.ReactCurrentBatchConfig,Eo=!0;function _v(e,t,n,r){var i=$,o=er.transition;er.transition=null;try{$=1,fu(e,t,n,r)}finally{$=i,er.transition=o}}function Sv(e,t,n,r){var i=$,o=er.transition;er.transition=null;try{$=4,fu(e,t,n,r)}finally{$=i,er.transition=o}}function fu(e,t,n,r){if(Eo){var i=ul(e,t,n,r);if(i===null)da(e,t,r,Io,n),bc(e,r);else if(yv(i,e,t,n,r))r.stopPropagation();else if(bc(e,r),t&4&&-1<vv.indexOf(e)){for(;i!==null;){var o=Ii(i);if(o!==null&&dh(o),o=ul(e,t,n,r),o===null&&da(e,t,r,Io,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else da(e,t,r,null,n)}}var Io=null;function ul(e,t,n,r){if(Io=null,e=au(r),e=pn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ih(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Io=e,null}function vh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lv()){case lu:return 1;case lh:return 4;case _o:case uv:return 16;case uh:return 536870912;default:return 16}default:return 16}}var Ut=null,du=null,ro=null;function yh(){if(ro)return ro;var e,t=du,n=t.length,r,i="value"in Ut?Ut.value:Ut.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ro=i.slice(e,1<r?1-r:void 0)}function io(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function jc(){return!1}function Ae(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Bi:jc,this.isPropagationStopped=jc,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=Ae(gr),Ei=Q({},gr,{view:0,detail:0}),Ev=Ae(Ei),ra,ia,Tr,ns=Q({},Ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(ra=e.screenX-Tr.screenX,ia=e.screenY-Tr.screenY):ia=ra=0,Tr=e),ra)},movementY:function(e){return"movementY"in e?e.movementY:ia}}),Uc=Ae(ns),Iv=Q({},ns,{dataTransfer:0}),kv=Ae(Iv),Cv=Q({},Ei,{relatedTarget:0}),oa=Ae(Cv),Tv=Q({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=Ae(Tv),xv=Q({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ov=Ae(xv),Rv=Q({},gr,{data:0}),Fc=Ae(Rv),Nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dv[e])?!!t[e]:!1}function pu(){return Lv}var Mv=Q({},Ei,{key:function(e){if(e.key){var t=Nv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Av[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(e){return e.type==="keypress"?io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bv=Ae(Mv),$v=Q({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zc=Ae($v),jv=Q({},Ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),Uv=Ae(jv),Fv=Q({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=Ae(Fv),Bv=Q({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=Ae(Bv),Wv=[9,13,27,32],mu=_t&&"CompositionEvent"in window,Fr=null;_t&&"documentMode"in document&&(Fr=document.documentMode);var Hv=_t&&"TextEvent"in window&&!Fr,wh=_t&&(!mu||Fr&&8<Fr&&11>=Fr),Bc=String.fromCharCode(32),Vc=!1;function _h(e,t){switch(e){case"keyup":return Wv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function Kv(e,t){switch(e){case"compositionend":return Sh(t);case"keypress":return t.which!==32?null:(Vc=!0,Bc);case"textInput":return e=t.data,e===Bc&&Vc?null:e;default:return null}}function Gv(e,t){if(Fn)return e==="compositionend"||!mu&&_h(e,t)?(e=yh(),ro=du=Ut=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wh&&t.locale!=="ko"?null:t.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qv[e.type]:t==="textarea"}function Eh(e,t,n,r){Zd(r),t=ko(t,"onChange"),0<t.length&&(n=new hu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zr=null,ti=null;function Qv(e){Dh(e,0)}function rs(e){var t=Vn(e);if(Kd(t))return e}function Yv(e,t){if(e==="change")return t}var Ih=!1;if(_t){var sa;if(_t){var aa="oninput"in document;if(!aa){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),aa=typeof Hc.oninput=="function"}sa=aa}else sa=!1;Ih=sa&&(!document.documentMode||9<document.documentMode)}function Kc(){zr&&(zr.detachEvent("onpropertychange",kh),ti=zr=null)}function kh(e){if(e.propertyName==="value"&&rs(ti)){var t=[];Eh(t,ti,e,au(e)),rh(Qv,t)}}function Jv(e,t,n){e==="focusin"?(Kc(),zr=t,ti=n,zr.attachEvent("onpropertychange",kh)):e==="focusout"&&Kc()}function Xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rs(ti)}function Zv(e,t){if(e==="click")return rs(t)}function ey(e,t){if(e==="input"||e==="change")return rs(t)}function ty(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:ty;function ni(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ha.call(t,i)||!Je(e[i],t[i]))return!1}return!0}function Gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qc(e,t){var n=Gc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gc(n)}}function Ch(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ch(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Th(){for(var e=window,t=vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vo(e.document)}return t}function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ny(e){var t=Th(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ch(n.ownerDocument.documentElement,n)){if(r!==null&&gu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=qc(n,o);var s=qc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ry=_t&&"documentMode"in document&&11>=document.documentMode,zn=null,cl=null,Br=null,fl=!1;function Qc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||zn==null||zn!==vo(r)||(r=zn,"selectionStart"in r&&gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&ni(Br,r)||(Br=r,r=ko(cl,"onSelect"),0<r.length&&(t=new hu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function Vi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bn={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},la={},Ph={};_t&&(Ph=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function is(e){if(la[e])return la[e];if(!Bn[e])return e;var t=Bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ph)return la[e]=t[n];return e}var xh=is("animationend"),Oh=is("animationiteration"),Rh=is("animationstart"),Nh=is("transitionend"),Ah=new Map,Yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){Ah.set(e,t),Ln(t,[e])}for(var ua=0;ua<Yc.length;ua++){var ca=Yc[ua],iy=ca.toLowerCase(),oy=ca[0].toUpperCase()+ca.slice(1);nn(iy,"on"+oy)}nn(xh,"onAnimationEnd");nn(Oh,"onAnimationIteration");nn(Rh,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(Nh,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function Jc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,iv(r,t,void 0,e),e.currentTarget=null}function Dh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Jc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Jc(i,a,u),o=l}}}if(wo)throw e=sl,wo=!1,sl=null,e}function V(e,t){var n=t[gl];n===void 0&&(n=t[gl]=new Set);var r=e+"__bubble";n.has(r)||(Lh(t,e,2,!1),n.add(r))}function fa(e,t,n){var r=0;t&&(r|=4),Lh(n,e,r,t)}var Wi="_reactListening"+Math.random().toString(36).slice(2);function ri(e){if(!e[Wi]){e[Wi]=!0,zd.forEach(function(n){n!=="selectionchange"&&(sy.has(n)||fa(n,!1,e),fa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wi]||(t[Wi]=!0,fa("selectionchange",!1,t))}}function Lh(e,t,n,r){switch(vh(t)){case 1:var i=_v;break;case 4:i=Sv;break;default:i=fu}n=i.bind(null,t,n,e),i=void 0,!ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function da(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=pn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}rh(function(){var u=o,c=au(n),h=[];e:{var d=Ah.get(e);if(d!==void 0){var g=hu,v=e;switch(e){case"keypress":if(io(n)===0)break e;case"keydown":case"keyup":g=bv;break;case"focusin":v="focus",g=oa;break;case"focusout":v="blur",g=oa;break;case"beforeblur":case"afterblur":g=oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Uv;break;case xh:case Oh:case Rh:g=Pv;break;case Nh:g=zv;break;case"scroll":g=Ev;break;case"wheel":g=Vv;break;case"copy":case"cut":case"paste":g=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=zc}var y=(t&4)!==0,x=!y&&e==="scroll",p=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Jr(f,p),w!=null&&y.push(ii(f,w,m)))),x)break;f=f.return}0<y.length&&(d=new g(d,v,null,n,c),h.push({event:d,listeners:y}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==rl&&(v=n.relatedTarget||n.fromElement)&&(pn(v)||v[St]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?pn(v):null,v!==null&&(x=Mn(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Uc,w="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=zc,w="onPointerLeave",p="onPointerEnter",f="pointer"),x=g==null?d:Vn(g),m=v==null?d:Vn(v),d=new y(w,f+"leave",g,n,c),d.target=x,d.relatedTarget=m,w=null,pn(c)===u&&(y=new y(p,f+"enter",v,n,c),y.target=m,y.relatedTarget=x,w=y),x=w,g&&v)t:{for(y=g,p=v,f=0,m=y;m;m=$n(m))f++;for(m=0,w=p;w;w=$n(w))m++;for(;0<f-m;)y=$n(y),f--;for(;0<m-f;)p=$n(p),m--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=$n(y),p=$n(p)}y=null}else y=null;g!==null&&Xc(h,d,g,y,!1),v!==null&&x!==null&&Xc(h,x,v,y,!0)}}e:{if(d=u?Vn(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var I=Yv;else if(Wc(d))if(Ih)I=ey;else{I=Xv;var C=Jv}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=Zv);if(I&&(I=I(e,u))){Eh(h,I,n,c);break e}C&&C(e,d,u),e==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Xa(d,"number",d.value)}switch(C=u?Vn(u):window,e){case"focusin":(Wc(C)||C.contentEditable==="true")&&(zn=C,cl=u,Br=null);break;case"focusout":Br=cl=zn=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,Qc(h,n,c);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":Qc(h,n,c)}var _;if(mu)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Fn?_h(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(wh&&n.locale!=="ko"&&(Fn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Fn&&(_=yh()):(Ut=c,du="value"in Ut?Ut.value:Ut.textContent,Fn=!0)),C=ko(u,E),0<C.length&&(E=new Fc(E,e,null,n,c),h.push({event:E,listeners:C}),_?E.data=_:(_=Sh(n),_!==null&&(E.data=_)))),(_=Hv?Kv(e,n):Gv(e,n))&&(u=ko(u,"onBeforeInput"),0<u.length&&(c=new Fc("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=_))}Dh(h,t)})}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Jr(e,n),o!=null&&r.unshift(ii(e,o,i)),o=Jr(e,t),o!=null&&r.push(ii(e,o,i))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Jr(n,o),l!=null&&s.unshift(ii(n,l,a))):i||(l=Jr(n,o),l!=null&&s.push(ii(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var ay=/\r\n?/g,ly=/\u0000|\uFFFD/g;function Zc(e){return(typeof e=="string"?e:""+e).replace(ay,`
`).replace(ly,"")}function Hi(e,t,n){if(t=Zc(t),Zc(e)!==t&&n)throw Error(S(425))}function Co(){}var dl=null,hl=null;function pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ml=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,ef=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof ef<"u"?function(e){return ef.resolve(null).then(e).catch(fy)}:ml;function fy(e){setTimeout(function(){throw e})}function ha(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ei(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vr=Math.random().toString(36).slice(2),tt="__reactFiber$"+vr,oi="__reactProps$"+vr,St="__reactContainer$"+vr,gl="__reactEvents$"+vr,dy="__reactListeners$"+vr,hy="__reactHandles$"+vr;function pn(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tf(e);e!==null;){if(n=e[tt])return n;e=tf(e)}return t}e=n,n=e.parentNode}return null}function Ii(e){return e=e[tt]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function os(e){return e[oi]||null}var vl=[],Wn=-1;function rn(e){return{current:e}}function W(e){0>Wn||(e.current=vl[Wn],vl[Wn]=null,Wn--)}function B(e,t){Wn++,vl[Wn]=e.current,e.current=t}var Zt={},pe=rn(Zt),Ee=rn(!1),In=Zt;function lr(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ie(e){return e=e.childContextTypes,e!=null}function To(){W(Ee),W(pe)}function nf(e,t,n){if(pe.current!==Zt)throw Error(S(168));B(pe,t),B(Ee,n)}function Mh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Jg(e)||"Unknown",i));return Q({},n,r)}function Po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,In=pe.current,B(pe,e),B(Ee,Ee.current),!0}function rf(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Mh(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,W(Ee),W(pe),B(pe,e)):W(Ee),B(Ee,n)}var ht=null,ss=!1,pa=!1;function bh(e){ht===null?ht=[e]:ht.push(e)}function py(e){ss=!0,bh(e)}function on(){if(!pa&&ht!==null){pa=!0;var e=0,t=$;try{var n=ht;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,ss=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),ah(lu,on),i}finally{$=t,pa=!1}}return null}var Hn=[],Kn=0,xo=null,Oo=0,Me=[],be=0,kn=null,mt=1,gt="";function cn(e,t){Hn[Kn++]=Oo,Hn[Kn++]=xo,xo=e,Oo=t}function $h(e,t,n){Me[be++]=mt,Me[be++]=gt,Me[be++]=kn,kn=e;var r=mt;e=gt;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var o=32-Qe(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,mt=1<<32-Qe(t)+i|n<<i|r,gt=o+e}else mt=1<<o|n<<i|r,gt=e}function vu(e){e.return!==null&&(cn(e,1),$h(e,1,0))}function yu(e){for(;e===xo;)xo=Hn[--Kn],Hn[Kn]=null,Oo=Hn[--Kn],Hn[Kn]=null;for(;e===kn;)kn=Me[--be],Me[be]=null,gt=Me[--be],Me[be]=null,mt=Me[--be],Me[be]=null}var Pe=null,Te=null,K=!1,Ke=null;function jh(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function of(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Te=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kn!==null?{id:mt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Te=null,!0):!1;default:return!1}}function yl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(K){var t=Te;if(t){var n=t;if(!of(e,t)){if(yl(e))throw Error(S(418));t=Wt(n.nextSibling);var r=Pe;t&&of(e,t)?jh(r,n):(e.flags=e.flags&-4097|2,K=!1,Pe=e)}}else{if(yl(e))throw Error(S(418));e.flags=e.flags&-4097|2,K=!1,Pe=e}}}function sf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Ki(e){if(e!==Pe)return!1;if(!K)return sf(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pl(e.type,e.memoizedProps)),t&&(t=Te)){if(yl(e))throw Uh(),Error(S(418));for(;t;)jh(e,t),t=Wt(t.nextSibling)}if(sf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Pe?Wt(e.stateNode.nextSibling):null;return!0}function Uh(){for(var e=Te;e;)e=Wt(e.nextSibling)}function ur(){Te=Pe=null,K=!1}function wu(e){Ke===null?Ke=[e]:Ke.push(e)}var my=Pt.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ro=rn(null),No=null,Gn=null,_u=null;function Su(){_u=Gn=No=null}function Eu(e){var t=Ro.current;W(Ro),e._currentValue=t}function _l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){No=e,_u=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Se=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(_u!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(No===null)throw Error(S(308));Gn=e,No.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var mn=null;function Iu(e){mn===null?mn=[e]:mn.push(e)}function Fh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Iu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(b&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Et(e,n)}return i=r.interleaved,i===null?(t.next=t,Iu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Et(e,n)}function oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uu(e,n)}}function af(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ao(e,t,n,r){var i=e.updateQueue;Nt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(d=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(g,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(g,h,d):v,d==null)break e;h=Q({},h,d);break e;case 2:Nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Tn|=s,e.lanes=s,e.memoizedState=h}}function lf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Bh=new Fd.Component().refs;function Sl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var as={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Gt(e),o=wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ht(e,o,i),t!==null&&(Ye(t,e,i,r),oo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Gt(e),o=wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ht(e,o,i),t!==null&&(Ye(t,e,i,r),oo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Gt(e),i=wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ht(e,i,r),t!==null&&(Ye(t,e,r,n),oo(t,e,r))}};function uf(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ni(n,r)||!ni(i,o):!0}function Vh(e,t,n){var r=!1,i=Zt,o=t.contextType;return typeof o=="object"&&o!==null?o=Fe(o):(i=Ie(t)?In:pe.current,r=t.contextTypes,o=(r=r!=null)?lr(e,i):Zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=as,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function cf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&as.enqueueReplaceState(t,t.state,null)}function El(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Bh,ku(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Fe(o):(o=Ie(t)?In:pe.current,i.context=lr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Sl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&as.enqueueReplaceState(i,i.state,null),Ao(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Bh&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Gi(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ff(e){var t=e._init;return t(e._payload)}function Wh(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=qt(p,f),p.index=0,p.sibling=null,p}function o(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Sa(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var I=m.type;return I===Un?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Rt&&ff(I)===f.type)?(w=i(f,m.props),w.ref=Pr(p,f,m),w.return=p,w):(w=fo(m.type,m.key,m.props,null,p.mode,w),w.ref=Pr(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ea(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,I){return f===null||f.tag!==7?(f=_n(m,p.mode,w,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Sa(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case bi:return m=fo(f.type,f.key,f.props,null,p.mode,m),m.ref=Pr(p,null,f),m.return=p,m;case jn:return f=Ea(f,p.mode,m),f.return=p,f;case Rt:var w=f._init;return h(p,w(f._payload),m)}if(Nr(f)||Er(f))return f=_n(f,p.mode,m,null),f.return=p,f;Gi(p,f)}return null}function d(p,f,m,w){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case bi:return m.key===I?l(p,f,m,w):null;case jn:return m.key===I?u(p,f,m,w):null;case Rt:return I=m._init,d(p,f,I(m._payload),w)}if(Nr(m)||Er(m))return I!==null?null:c(p,f,m,w,null);Gi(p,m)}return null}function g(p,f,m,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case bi:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,I);case jn:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,I);case Rt:var C=w._init;return g(p,f,m,C(w._payload),I)}if(Nr(w)||Er(w))return p=p.get(m)||null,c(f,p,w,I,null);Gi(f,w)}return null}function v(p,f,m,w){for(var I=null,C=null,_=f,E=f=0,R=null;_!==null&&E<m.length;E++){_.index>E?(R=_,_=null):R=_.sibling;var O=d(p,_,m[E],w);if(O===null){_===null&&(_=R);break}e&&_&&O.alternate===null&&t(p,_),f=o(O,f,E),C===null?I=O:C.sibling=O,C=O,_=R}if(E===m.length)return n(p,_),K&&cn(p,E),I;if(_===null){for(;E<m.length;E++)_=h(p,m[E],w),_!==null&&(f=o(_,f,E),C===null?I=_:C.sibling=_,C=_);return K&&cn(p,E),I}for(_=r(p,_);E<m.length;E++)R=g(_,p,E,m[E],w),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?E:R.key),f=o(R,f,E),C===null?I=R:C.sibling=R,C=R);return e&&_.forEach(function(F){return t(p,F)}),K&&cn(p,E),I}function y(p,f,m,w){var I=Er(m);if(typeof I!="function")throw Error(S(150));if(m=I.call(m),m==null)throw Error(S(151));for(var C=I=null,_=f,E=f=0,R=null,O=m.next();_!==null&&!O.done;E++,O=m.next()){_.index>E?(R=_,_=null):R=_.sibling;var F=d(p,_,O.value,w);if(F===null){_===null&&(_=R);break}e&&_&&F.alternate===null&&t(p,_),f=o(F,f,E),C===null?I=F:C.sibling=F,C=F,_=R}if(O.done)return n(p,_),K&&cn(p,E),I;if(_===null){for(;!O.done;E++,O=m.next())O=h(p,O.value,w),O!==null&&(f=o(O,f,E),C===null?I=O:C.sibling=O,C=O);return K&&cn(p,E),I}for(_=r(p,_);!O.done;E++,O=m.next())O=g(_,p,E,O.value,w),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?E:O.key),f=o(O,f,E),C===null?I=O:C.sibling=O,C=O);return e&&_.forEach(function(Le){return t(p,Le)}),K&&cn(p,E),I}function x(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Un&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case bi:e:{for(var I=m.key,C=f;C!==null;){if(C.key===I){if(I=m.type,I===Un){if(C.tag===7){n(p,C.sibling),f=i(C,m.props.children),f.return=p,p=f;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Rt&&ff(I)===C.type){n(p,C.sibling),f=i(C,m.props),f.ref=Pr(p,C,m),f.return=p,p=f;break e}n(p,C);break}else t(p,C);C=C.sibling}m.type===Un?(f=_n(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=fo(m.type,m.key,m.props,null,p.mode,w),w.ref=Pr(p,f,m),w.return=p,p=w)}return s(p);case jn:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=Ea(m,p.mode,w),f.return=p,p=f}return s(p);case Rt:return C=m._init,x(p,f,C(m._payload),w)}if(Nr(m))return v(p,f,m,w);if(Er(m))return y(p,f,m,w);Gi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Sa(m,p.mode,w),f.return=p,p=f),s(p)):n(p,f)}return x}var cr=Wh(!0),Hh=Wh(!1),ki={},rt=rn(ki),si=rn(ki),ai=rn(ki);function gn(e){if(e===ki)throw Error(S(174));return e}function Cu(e,t){switch(B(ai,t),B(si,e),B(rt,ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:el(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=el(t,e)}W(rt),B(rt,t)}function fr(){W(rt),W(si),W(ai)}function Kh(e){gn(ai.current);var t=gn(rt.current),n=el(t,e.type);t!==n&&(B(si,e),B(rt,n))}function Tu(e){si.current===e&&(W(rt),W(si))}var G=rn(0);function Do(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=[];function Pu(){for(var e=0;e<ma.length;e++)ma[e]._workInProgressVersionPrimary=null;ma.length=0}var so=Pt.ReactCurrentDispatcher,ga=Pt.ReactCurrentBatchConfig,Cn=0,q=null,te=null,ie=null,Lo=!1,Vr=!1,li=0,gy=0;function ce(){throw Error(S(321))}function xu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function Ou(e,t,n,r,i,o){if(Cn=o,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,so.current=e===null||e.memoizedState===null?_y:Sy,e=n(r,i),Vr){o=0;do{if(Vr=!1,li=0,25<=o)throw Error(S(301));o+=1,ie=te=null,t.updateQueue=null,so.current=Ey,e=n(r,i)}while(Vr)}if(so.current=Mo,t=te!==null&&te.next!==null,Cn=0,ie=te=q=null,Lo=!1,t)throw Error(S(300));return e}function Ru(){var e=li!==0;return li=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?q.memoizedState=ie=e:ie=ie.next=e,ie}function ze(){if(te===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?q.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(S(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?q.memoizedState=ie=e:ie=ie.next=e}return ie}function ui(e,t){return typeof t=="function"?t(e):t}function va(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Cn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,q.lanes|=c,Tn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Je(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,q.lanes|=o,Tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ya(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Je(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Gh(){}function qh(e,t){var n=q,r=ze(),i=t(),o=!Je(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,Nu(Jh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,ci(9,Yh.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(S(349));(Cn&30)!==0||Qh(n,t,i)}return i}function Qh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yh(e,t,n,r){t.value=n,t.getSnapshot=r,Xh(t)&&Zh(e)}function Jh(e,t,n){return n(function(){Xh(t)&&Zh(e)})}function Xh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function Zh(e){var t=Et(e,1);t!==null&&Ye(t,e,1,-1)}function df(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:e},t.queue=e,e=e.dispatch=wy.bind(null,q,e),[t.memoizedState,e]}function ci(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ep(){return ze().memoizedState}function ao(e,t,n,r){var i=et();q.flags|=e,i.memoizedState=ci(1|t,n,void 0,r===void 0?null:r)}function ls(e,t,n,r){var i=ze();r=r===void 0?null:r;var o=void 0;if(te!==null){var s=te.memoizedState;if(o=s.destroy,r!==null&&xu(r,s.deps)){i.memoizedState=ci(t,n,o,r);return}}q.flags|=e,i.memoizedState=ci(1|t,n,o,r)}function hf(e,t){return ao(8390656,8,e,t)}function Nu(e,t){return ls(2048,8,e,t)}function tp(e,t){return ls(4,2,e,t)}function np(e,t){return ls(4,4,e,t)}function rp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ip(e,t,n){return n=n!=null?n.concat([e]):null,ls(4,4,rp.bind(null,t,e),n)}function Au(){}function op(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sp(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ap(e,t,n){return(Cn&21)===0?(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n):(Je(n,t)||(n=ch(),q.lanes|=n,Tn|=n,e.baseState=!0),t)}function vy(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=ga.transition;ga.transition={};try{e(!1),t()}finally{$=n,ga.transition=r}}function lp(){return ze().memoizedState}function yy(e,t,n){var r=Gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},up(e))cp(t,n);else if(n=Fh(e,t,n,r),n!==null){var i=ve();Ye(n,e,r,i),fp(n,t,r)}}function wy(e,t,n){var r=Gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(up(e))cp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Je(a,s)){var l=t.interleaved;l===null?(i.next=i,Iu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Fh(e,t,i,r),n!==null&&(i=ve(),Ye(n,e,r,i),fp(n,t,r))}}function up(e){var t=e.alternate;return e===q||t!==null&&t===q}function cp(e,t){Vr=Lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fp(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uu(e,n)}}var Mo={readContext:Fe,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},_y={readContext:Fe,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:hf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ao(4194308,4,rp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return ao(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yy.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:df,useDebugValue:Au,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=df(!1),t=e[0];return e=vy.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,i=et();if(K){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),oe===null)throw Error(S(349));(Cn&30)!==0||Qh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,hf(Jh.bind(null,r,o,e),[e]),r.flags|=2048,ci(9,Yh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=et(),t=oe.identifierPrefix;if(K){var n=gt,r=mt;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sy={readContext:Fe,useCallback:op,useContext:Fe,useEffect:Nu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:np,useMemo:sp,useReducer:va,useRef:ep,useState:function(){return va(ui)},useDebugValue:Au,useDeferredValue:function(e){var t=ze();return ap(t,te.memoizedState,e)},useTransition:function(){var e=va(ui)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Gh,useSyncExternalStore:qh,useId:lp,unstable_isNewReconciler:!1},Ey={readContext:Fe,useCallback:op,useContext:Fe,useEffect:Nu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:np,useMemo:sp,useReducer:ya,useRef:ep,useState:function(){return ya(ui)},useDebugValue:Au,useDeferredValue:function(e){var t=ze();return te===null?t.memoizedState=e:ap(t,te.memoizedState,e)},useTransition:function(){var e=ya(ui)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Gh,useSyncExternalStore:qh,useId:lp,unstable_isNewReconciler:!1};function dr(e,t){try{var n="",r=t;do n+=Yg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function wa(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Il(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Iy=typeof WeakMap=="function"?WeakMap:Map;function dp(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$o||($o=!0,Dl=r),Il(e,t)},n}function hp(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Il(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Il(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Iy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=$y.bind(null,e,t,n),t.then(e,e))}function mf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gf(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ky=Pt.ReactCurrentOwner,Se=!1;function ge(e,t,n,r){t.child=e===null?Hh(t,null,n,r):cr(t,e.child,n,r)}function vf(e,t,n,r,i){n=n.render;var o=t.ref;return tr(t,i),r=Ou(e,t,n,r,o,i),n=Ru(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(K&&n&&vu(t),t.flags|=1,ge(e,t,r,i),t.child)}function yf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,pp(e,t,o,r,i)):(e=fo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ni,n(s,r)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function pp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ni(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Se=!0);else return t.lanes=e.lanes,It(e,t,i)}return kl(e,t,n,r,i)}function mp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Qn,Ce),Ce|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Qn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(Qn,Ce),Ce|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(Qn,Ce),Ce|=r;return ge(e,t,i,n),t.child}function gp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kl(e,t,n,r,i){var o=Ie(n)?In:pe.current;return o=lr(t,o),tr(t,i),n=Ou(e,t,n,r,o,i),r=Ru(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(K&&r&&vu(t),t.flags|=1,ge(e,t,n,i),t.child)}function wf(e,t,n,r,i){if(Ie(n)){var o=!0;Po(t)}else o=!1;if(tr(t,i),t.stateNode===null)lo(e,t),Vh(t,n,r),El(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=Ie(n)?In:pe.current,u=lr(t,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&cf(t,s,r,u),Nt=!1;var d=t.memoizedState;s.state=d,Ao(t,r,s,i),l=t.memoizedState,a!==r||d!==l||Ee.current||Nt?(typeof c=="function"&&(Sl(t,n,c,r),l=t.memoizedState),(a=Nt||uf(t,n,a,r,d,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,zh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:We(t.type,a),s.props=u,h=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fe(l):(l=Ie(n)?In:pe.current,l=lr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&cf(t,s,r,l),Nt=!1,d=t.memoizedState,s.state=d,Ao(t,r,s,i);var v=t.memoizedState;a!==h||d!==v||Ee.current||Nt?(typeof g=="function"&&(Sl(t,n,g,r),v=t.memoizedState),(u=Nt||uf(t,n,u,r,d,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Cl(e,t,n,r,o,i)}function Cl(e,t,n,r,i,o){gp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&rf(t,n,!1),It(e,t,o);r=t.stateNode,ky.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=cr(t,e.child,null,o),t.child=cr(t,null,a,o)):ge(e,t,a,o),t.memoizedState=r.state,i&&rf(t,n,!0),t.child}function vp(e){var t=e.stateNode;t.pendingContext?nf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nf(e,t.context,!1),Cu(e,t.containerInfo)}function _f(e,t,n,r,i){return ur(),wu(i),t.flags|=256,ge(e,t,n,r),t.child}var Tl={dehydrated:null,treeContext:null,retryLane:0};function Pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function yp(e,t,n){var r=t.pendingProps,i=G.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(G,i&1),e===null)return wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=fs(s,r,0,null),e=_n(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Pl(n),t.memoizedState=Tl,e):Du(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Cy(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=qt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=qt(a,o):(o=_n(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Pl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Tl,r}return o=e.child,e=o.sibling,r=qt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Du(e,t){return t=fs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qi(e,t,n,r){return r!==null&&wu(r),cr(t,e.child,null,n),e=Du(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cy(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=wa(Error(S(422))),qi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fs({mode:"visible",children:r.children},i,0,null),o=_n(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&cr(t,e.child,null,s),t.child.memoizedState=Pl(s),t.memoizedState=Tl,o);if((t.mode&1)===0)return qi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=wa(o,r,void 0),qi(e,t,s,r)}if(a=(s&e.childLanes)!==0,Se||a){if(r=oe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Et(e,i),Ye(r,e,i,-1))}return Uu(),r=wa(Error(S(421))),qi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Te=Wt(i.nextSibling),Pe=t,K=!0,Ke=null,e!==null&&(Me[be++]=mt,Me[be++]=gt,Me[be++]=kn,mt=e.id,gt=e.overflow,kn=t),t=Du(t,r.children),t.flags|=4096,t)}function Sf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_l(e.return,t,n)}function _a(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ge(e,t,r.children,n),r=G.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sf(e,n,t);else if(e.tag===19)Sf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(G,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Do(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_a(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Do(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_a(t,!0,n,null,o);break;case"together":_a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function lo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ty(e,t,n){switch(t.tag){case 3:vp(t),ur();break;case 5:Kh(t);break;case 1:Ie(t.type)&&Po(t);break;case 4:Cu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Ro,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(G,G.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?yp(e,t,n):(B(G,G.current&1),e=It(e,t,n),e!==null?e.sibling:null);B(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return wp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,mp(e,t,n)}return It(e,t,n)}var _p,xl,Sp,Ep;_p=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xl=function(){};Sp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gn(rt.current);var o=null;switch(n){case"input":i=Ya(e,i),r=Ya(e,r),o=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":i=Za(e,i),r=Za(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Co)}tl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ep=function(e,t,n,r){n!==r&&(t.flags|=4)};function xr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Py(e,t,n){var r=t.pendingProps;switch(yu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ie(t.type)&&To(),fe(t),null;case 3:return r=t.stateNode,fr(),W(Ee),W(pe),Pu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ke!==null&&(bl(Ke),Ke=null))),xl(e,t),fe(t),null;case 5:Tu(t);var i=gn(ai.current);if(n=t.type,e!==null&&t.stateNode!=null)Sp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return fe(t),null}if(e=gn(rt.current),Ki(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[tt]=t,r[oi]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Dr.length;i++)V(Dr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Oc(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Nc(r,o),V("invalid",r)}tl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Hi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Hi(r.textContent,a,e),i=["children",""+a]):Qr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":$i(r),Rc(r,o,!0);break;case"textarea":$i(r),Ac(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Co)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[tt]=t,e[oi]=r,_p(e,t,!1,!1),t.stateNode=e;e:{switch(s=nl(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dr.length;i++)V(Dr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Oc(e,r),i=Ya(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),V("invalid",e);break;case"textarea":Nc(e,r),i=Za(e,r),V("invalid",e);break;default:i=r}tl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Xd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Yd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Yr(e,l):typeof l=="number"&&Yr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Qr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&V("scroll",e):l!=null&&ru(e,o,l,s))}switch(n){case"input":$i(e),Rc(e,r,!1);break;case"textarea":$i(e),Ac(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Jn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)Ep(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=gn(ai.current),gn(rt.current),Ki(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(o=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Hi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return fe(t),null;case 13:if(W(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Te!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Uh(),ur(),t.flags|=98560,o=!1;else if(o=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[tt]=t}else ur(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fe(t),o=!1}else Ke!==null&&(bl(Ke),Ke=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(G.current&1)!==0?ne===0&&(ne=3):Uu())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return fr(),xl(e,t),e===null&&ri(t.stateNode.containerInfo),fe(t),null;case 10:return Eu(t.type._context),fe(t),null;case 17:return Ie(t.type)&&To(),fe(t),null;case 19:if(W(G),o=t.memoizedState,o===null)return fe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)xr(o,!1);else{if(ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Do(e),s!==null){for(t.flags|=128,xr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&X()>hr&&(t.flags|=128,r=!0,xr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Do(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!K)return fe(t),null}else 2*X()-o.renderingStartTime>hr&&n!==1073741824&&(t.flags|=128,r=!0,xr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=X(),t.sibling=null,n=G.current,B(G,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return ju(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ce&1073741824)!==0&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function xy(e,t){switch(yu(t),t.tag){case 1:return Ie(t.type)&&To(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fr(),W(Ee),W(pe),Pu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Tu(t),null;case 13:if(W(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(G),null;case 4:return fr(),null;case 10:return Eu(t.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var Qi=!1,he=!1,Oy=typeof WeakSet=="function"?WeakSet:Set,T=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function Ol(e,t,n){try{n()}catch(r){Y(e,t,r)}}var Ef=!1;function Ry(e,t){if(dl=Eo,e=Th(),gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hl={focusedElem:e,selectionRange:n},Eo=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:We(t.type,y),x);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){Y(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=Ef,Ef=!1,v}function Wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ol(t,n,o)}i=i.next}while(i!==r)}}function us(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ip(e){var t=e.alternate;t!==null&&(e.alternate=null,Ip(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[oi],delete t[gl],delete t[dy],delete t[hy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kp(e){return e.tag===5||e.tag===3||e.tag===4}function If(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Co));else if(r!==4&&(e=e.child,e!==null))for(Nl(e,t,n),e=e.sibling;e!==null;)Nl(e,t,n),e=e.sibling}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}var ae=null,He=!1;function xt(e,t,n){for(n=n.child;n!==null;)Cp(e,t,n),n=n.sibling}function Cp(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(ts,n)}catch{}switch(n.tag){case 5:he||qn(n,t);case 6:var r=ae,i=He;ae=null,xt(e,t,n),ae=r,He=i,ae!==null&&(He?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(He?(e=ae,n=n.stateNode,e.nodeType===8?ha(e.parentNode,n):e.nodeType===1&&ha(e,n),ei(e)):ha(ae,n.stateNode));break;case 4:r=ae,i=He,ae=n.stateNode.containerInfo,He=!0,xt(e,t,n),ae=r,He=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Ol(n,t,s),i=i.next}while(i!==r)}xt(e,t,n);break;case 1:if(!he&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,t,a)}xt(e,t,n);break;case 21:xt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,xt(e,t,n),he=r):xt(e,t,n);break;default:xt(e,t,n)}}function kf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Oy),t.forEach(function(r){var i=Uy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ae=a.stateNode,He=!1;break e;case 3:ae=a.stateNode.containerInfo,He=!0;break e;case 4:ae=a.stateNode.containerInfo,He=!0;break e}a=a.return}if(ae===null)throw Error(S(160));Cp(o,s,i),ae=null,He=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Y(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tp(t,e),t=t.sibling}function Tp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Ze(e),r&4){try{Wr(3,e,e.return),us(3,e)}catch(y){Y(e,e.return,y)}try{Wr(5,e,e.return)}catch(y){Y(e,e.return,y)}}break;case 1:Ve(t,e),Ze(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(Ve(t,e),Ze(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var i=e.stateNode;try{Yr(i,"")}catch(y){Y(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Gd(i,o),nl(a,s);var u=nl(a,o);for(s=0;s<l.length;s+=2){var c=l[s],h=l[s+1];c==="style"?Xd(i,h):c==="dangerouslySetInnerHTML"?Yd(i,h):c==="children"?Yr(i,h):ru(i,c,h,u)}switch(a){case"input":Ja(i,o);break;case"textarea":qd(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Jn(i,!!o.multiple,g,!1):d!==!!o.multiple&&(o.defaultValue!=null?Jn(i,!!o.multiple,o.defaultValue,!0):Jn(i,!!o.multiple,o.multiple?[]:"",!1))}i[oi]=o}catch(y){Y(e,e.return,y)}}break;case 6:if(Ve(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Y(e,e.return,y)}}break;case 3:if(Ve(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ei(t.containerInfo)}catch(y){Y(e,e.return,y)}break;case 4:Ve(t,e),Ze(e);break;case 13:Ve(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bu=X())),r&4&&kf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||c,Ve(t,e),he=u):Ve(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(T=e,c=e.child;c!==null;){for(h=T=c;T!==null;){switch(d=T,g=d.child,d.tag){case 0:case 11:case 14:case 15:Wr(4,d,d.return);break;case 1:qn(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){Y(r,n,y)}}break;case 5:qn(d,d.return);break;case 22:if(d.memoizedState!==null){Tf(h);continue}}g!==null?(g.return=d,T=g):Tf(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jd("display",s))}catch(y){Y(e,e.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){Y(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ve(t,e),Ze(e),r&4&&kf(e);break;case 21:break;default:Ve(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yr(i,""),r.flags&=-33);var o=If(e);Al(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=If(e);Nl(e,a,s);break;default:throw Error(S(161))}}catch(l){Y(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ny(e,t,n){T=e,Pp(e)}function Pp(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Qi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||he;a=Qi;var u=he;if(Qi=s,(he=l)&&!u)for(T=i;T!==null;)s=T,l=s.child,s.tag===22&&s.memoizedState!==null?Pf(i):l!==null?(l.return=s,T=l):Pf(i);for(;o!==null;)T=o,Pp(o),o=o.sibling;T=i,Qi=a,he=u}Cf(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,T=o):Cf(e)}}function Cf(e){for(;T!==null;){var t=T;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:he||us(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&lf(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lf(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ei(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}he||t.flags&512&&Rl(t)}catch(d){Y(t,t.return,d)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Tf(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Pf(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{us(4,t)}catch(l){Y(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Y(t,i,l)}}var o=t.return;try{Rl(t)}catch(l){Y(t,o,l)}break;case 5:var s=t.return;try{Rl(t)}catch(l){Y(t,s,l)}}}catch(l){Y(t,t.return,l)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var Ay=Math.ceil,bo=Pt.ReactCurrentDispatcher,Lu=Pt.ReactCurrentOwner,je=Pt.ReactCurrentBatchConfig,b=0,oe=null,ee=null,le=0,Ce=0,Qn=rn(0),ne=0,fi=null,Tn=0,cs=0,Mu=0,Hr=null,_e=null,bu=0,hr=1/0,dt=null,$o=!1,Dl=null,Kt=null,Yi=!1,Ft=null,jo=0,Kr=0,Ll=null,uo=-1,co=0;function ve(){return(b&6)!==0?X():uo!==-1?uo:uo=X()}function Gt(e){return(e.mode&1)===0?1:(b&2)!==0&&le!==0?le&-le:my.transition!==null?(co===0&&(co=ch()),co):(e=$,e!==0||(e=window.event,e=e===void 0?16:vh(e.type)),e)}function Ye(e,t,n,r){if(50<Kr)throw Kr=0,Ll=null,Error(S(185));Si(e,n,r),((b&2)===0||e!==oe)&&(e===oe&&((b&2)===0&&(cs|=n),ne===4&&Dt(e,le)),ke(e,r),n===1&&b===0&&(t.mode&1)===0&&(hr=X()+500,ss&&on()))}function ke(e,t){var n=e.callbackNode;mv(e,t);var r=So(e,e===oe?le:0);if(r===0)n!==null&&Mc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mc(n),t===1)e.tag===0?py(xf.bind(null,e)):bh(xf.bind(null,e)),cy(function(){(b&6)===0&&on()}),n=null;else{switch(fh(r)){case 1:n=lu;break;case 4:n=lh;break;case 16:n=_o;break;case 536870912:n=uh;break;default:n=_o}n=Mp(n,xp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xp(e,t){if(uo=-1,co=0,(b&6)!==0)throw Error(S(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=So(e,e===oe?le:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Uo(e,r);else{t=r;var i=b;b|=2;var o=Rp();(oe!==e||le!==t)&&(dt=null,hr=X()+500,wn(e,t));do try{My();break}catch(a){Op(e,a)}while(1);Su(),bo.current=o,b=i,ee!==null?t=0:(oe=null,le=0,t=ne)}if(t!==0){if(t===2&&(i=al(e),i!==0&&(r=i,t=Ml(e,i))),t===1)throw n=fi,wn(e,0),Dt(e,r),ke(e,X()),n;if(t===6)Dt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Dy(i)&&(t=Uo(e,r),t===2&&(o=al(e),o!==0&&(r=o,t=Ml(e,o))),t===1))throw n=fi,wn(e,0),Dt(e,r),ke(e,X()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:fn(e,_e,dt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=bu+500-X(),10<t)){if(So(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ml(fn.bind(null,e,_e,dt),t);break}fn(e,_e,dt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Qe(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ay(r/1960))-r,10<r){e.timeoutHandle=ml(fn.bind(null,e,_e,dt),r);break}fn(e,_e,dt);break;case 5:fn(e,_e,dt);break;default:throw Error(S(329))}}}return ke(e,X()),e.callbackNode===n?xp.bind(null,e):null}function Ml(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=Uo(e,t),e!==2&&(t=_e,_e=n,t!==null&&bl(t)),e}function bl(e){_e===null?_e=e:_e.push.apply(_e,e)}function Dy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Je(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Mu,t&=~cs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function xf(e){if((b&6)!==0)throw Error(S(327));nr();var t=So(e,0);if((t&1)===0)return ke(e,X()),null;var n=Uo(e,t);if(e.tag!==0&&n===2){var r=al(e);r!==0&&(t=r,n=Ml(e,r))}if(n===1)throw n=fi,wn(e,0),Dt(e,t),ke(e,X()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,_e,dt),ke(e,X()),null}function $u(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(hr=X()+500,ss&&on())}}function Pn(e){Ft!==null&&Ft.tag===0&&(b&6)===0&&nr();var t=b;b|=1;var n=je.transition,r=$;try{if(je.transition=null,$=1,e)return e()}finally{$=r,je.transition=n,b=t,(b&6)===0&&on()}}function ju(){Ce=Qn.current,W(Qn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,uy(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(yu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&To();break;case 3:fr(),W(Ee),W(pe),Pu();break;case 5:Tu(r);break;case 4:fr();break;case 13:W(G);break;case 19:W(G);break;case 10:Eu(r.type._context);break;case 22:case 23:ju()}n=n.return}if(oe=e,ee=e=qt(e.current,null),le=Ce=t,ne=0,fi=null,Mu=cs=Tn=0,_e=Hr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}mn=null}return e}function Op(e,t){do{var n=ee;try{if(Su(),so.current=Mo,Lo){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lo=!1}if(Cn=0,ie=te=q=null,Vr=!1,li=0,Lu.current=null,n===null||n.return===null){ne=1,fi=t,ee=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=le,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=mf(s);if(g!==null){g.flags&=-257,gf(g,s,a,o,t),g.mode&1&&pf(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if((t&1)===0){pf(o,u,t),Uu();break e}l=Error(S(426))}}else if(K&&a.mode&1){var x=mf(s);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),gf(x,s,a,o,t),wu(dr(l,a));break e}}o=l=dr(l,a),ne!==4&&(ne=2),Hr===null?Hr=[o]:Hr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=dp(o,l,t);af(o,p);break e;case 1:a=l;var f=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Kt===null||!Kt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=hp(o,a,t);af(o,w);break e}}o=o.return}while(o!==null)}Ap(n)}catch(I){t=I,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Rp(){var e=bo.current;return bo.current=Mo,e===null?Mo:e}function Uu(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||(Tn&268435455)===0&&(cs&268435455)===0||Dt(oe,le)}function Uo(e,t){var n=b;b|=2;var r=Rp();(oe!==e||le!==t)&&(dt=null,wn(e,t));do try{Ly();break}catch(i){Op(e,i)}while(1);if(Su(),b=n,bo.current=r,ee!==null)throw Error(S(261));return oe=null,le=0,ne}function Ly(){for(;ee!==null;)Np(ee)}function My(){for(;ee!==null&&!sv();)Np(ee)}function Np(e){var t=Lp(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?Ap(e):ee=t,Lu.current=null}function Ap(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Py(n,t,Ce),n!==null){ee=n;return}}else{if(n=xy(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function fn(e,t,n){var r=$,i=je.transition;try{je.transition=null,$=1,by(e,t,n,r)}finally{je.transition=i,$=r}return null}function by(e,t,n,r){do nr();while(Ft!==null);if((b&6)!==0)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(gv(e,o),e===oe&&(ee=oe=null,le=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Yi||(Yi=!0,Mp(_o,function(){return nr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=je.transition,je.transition=null;var s=$;$=1;var a=b;b|=4,Lu.current=null,Ry(e,n),Tp(n,e),ny(hl),Eo=!!dl,hl=dl=null,e.current=n,Ny(n),av(),b=a,$=s,je.transition=o}else e.current=n;if(Yi&&(Yi=!1,Ft=e,jo=i),o=e.pendingLanes,o===0&&(Kt=null),cv(n.stateNode),ke(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($o)throw $o=!1,e=Dl,Dl=null,e;return(jo&1)!==0&&e.tag!==0&&nr(),o=e.pendingLanes,(o&1)!==0?e===Ll?Kr++:(Kr=0,Ll=e):Kr=0,on(),null}function nr(){if(Ft!==null){var e=fh(jo),t=je.transition,n=$;try{if(je.transition=null,$=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,jo=0,(b&6)!==0)throw Error(S(331));var i=b;for(b|=4,T=e.current;T!==null;){var o=T,s=o.child;if((T.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Wr(8,c,o)}var h=c.child;if(h!==null)h.return=c,T=h;else for(;T!==null;){c=T;var d=c.sibling,g=c.return;if(Ip(c),c===u){T=null;break}if(d!==null){d.return=g,T=d;break}T=g}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}T=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,T=s;else e:for(;T!==null;){if(o=T,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Wr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,T=p;break e}T=o.return}}var f=e.current;for(T=f;T!==null;){s=T;var m=s.child;if((s.subtreeFlags&2064)!==0&&m!==null)m.return=s,T=m;else e:for(s=f;T!==null;){if(a=T,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:us(9,a)}}catch(I){Y(a,a.return,I)}if(a===s){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(b=i,on(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(ts,e)}catch{}r=!0}return r}finally{$=n,je.transition=t}}return!1}function Of(e,t,n){t=dr(n,t),t=dp(e,t,1),e=Ht(e,t,1),t=ve(),e!==null&&(Si(e,1,t),ke(e,t))}function Y(e,t,n){if(e.tag===3)Of(e,e,n);else for(;t!==null;){if(t.tag===3){Of(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=dr(n,e),e=hp(t,e,1),t=Ht(t,e,1),e=ve(),t!==null&&(Si(t,1,e),ke(t,e));break}}t=t.return}}function $y(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(le&n)===n&&(ne===4||ne===3&&(le&130023424)===le&&500>X()-bu?wn(e,0):Mu|=n),ke(e,t)}function Dp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Fi,Fi<<=1,(Fi&130023424)===0&&(Fi=4194304)));var n=ve();e=Et(e,t),e!==null&&(Si(e,t,n),ke(e,n))}function jy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dp(e,n)}function Uy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Dp(e,n)}var Lp;Lp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Se=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Se=!1,Ty(e,t,n);Se=(e.flags&131072)!==0}else Se=!1,K&&(t.flags&1048576)!==0&&$h(t,Oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;lo(e,t),e=t.pendingProps;var i=lr(t,pe.current);tr(t,n),i=Ou(null,t,r,e,i,n);var o=Ru();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(o=!0,Po(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ku(t),i.updater=as,t.stateNode=i,i._reactInternals=t,El(t,r,e,n),t=Cl(null,t,r,!0,o,n)):(t.tag=0,K&&o&&vu(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(lo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=zy(r),e=We(r,e),i){case 0:t=kl(null,t,r,e,n);break e;case 1:t=wf(null,t,r,e,n);break e;case 11:t=vf(null,t,r,e,n);break e;case 14:t=yf(null,t,r,We(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),kl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),wf(e,t,r,i,n);case 3:e:{if(vp(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,zh(e,t),Ao(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=dr(Error(S(423)),t),t=_f(e,t,r,n,i);break e}else if(r!==i){i=dr(Error(S(424)),t),t=_f(e,t,r,n,i);break e}else for(Te=Wt(t.stateNode.containerInfo.firstChild),Pe=t,K=!0,Ke=null,n=Hh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===i){t=It(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Kh(t),e===null&&wl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,pl(r,i)?s=null:o!==null&&pl(r,o)&&(t.flags|=32),gp(e,t),ge(e,t,s,n),t.child;case 6:return e===null&&wl(t),null;case 13:return yp(e,t,n);case 4:return Cu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),vf(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,B(Ro,r._currentValue),r._currentValue=s,o!==null)if(Je(o.value,s)){if(o.children===i.children&&!Ee.current){t=It(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=wt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_l(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),_l(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,tr(t,n),i=Fe(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=We(r,t.pendingProps),i=We(r.type,i),yf(e,t,r,i,n);case 15:return pp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),lo(e,t),t.tag=1,Ie(r)?(e=!0,Po(t)):e=!1,tr(t,n),Vh(t,r,i),El(t,r,i,n),Cl(null,t,r,!0,e,n);case 19:return wp(e,t,n);case 22:return mp(e,t,n)}throw Error(S(156,t.tag))};function Mp(e,t){return ah(e,t)}function Fy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new Fy(e,t,n,r)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zy(e){if(typeof e=="function")return Fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ou)return 11;if(e===su)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Fu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Un:return _n(n.children,i,o,t);case iu:s=8,i|=8;break;case Ka:return e=$e(12,n,t,i|2),e.elementType=Ka,e.lanes=o,e;case Ga:return e=$e(13,n,t,i),e.elementType=Ga,e.lanes=o,e;case qa:return e=$e(19,n,t,i),e.elementType=qa,e.lanes=o,e;case Wd:return fs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bd:s=10;break e;case Vd:s=9;break e;case ou:s=11;break e;case su:s=14;break e;case Rt:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=$e(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function _n(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function fs(e,t,n,r){return e=$e(22,e,r,t),e.elementType=Wd,e.lanes=n,e.stateNode={isHidden:!1},e}function Sa(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function Ea(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function By(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=na(0),this.expirationTimes=na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zu(e,t,n,r,i,o,s,a,l){return e=new By(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ku(o),e}function Vy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bp(e){if(!e)return Zt;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Mh(e,n,t)}return t}function $p(e,t,n,r,i,o,s,a,l){return e=zu(n,r,!0,e,i,o,s,a,l),e.context=bp(null),n=e.current,r=ve(),i=Gt(n),o=wt(r,i),o.callback=t!=null?t:null,Ht(n,o,i),e.current.lanes=i,Si(e,i,r),ke(e,r),e}function ds(e,t,n,r){var i=t.current,o=ve(),s=Gt(i);return n=bp(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(i,t,s),e!==null&&(Ye(e,i,s,o),oo(e,i,s)),s}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bu(e,t){Rf(e,t),(e=e.alternate)&&Rf(e,t)}function Wy(){return null}var jp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vu(e){this._internalRoot=e}hs.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));ds(e,t,null,null)};hs.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){ds(null,e,null,null)}),t[St]=null}};function hs(e){this._internalRoot=e}hs.prototype.unstable_scheduleHydration=function(e){if(e){var t=ph();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&gh(e)}};function Wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nf(){}function Hy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Fo(s);o.call(u)}}var s=$p(t,r,e,0,null,!1,!1,"",Nf);return e._reactRootContainer=s,e[St]=s.current,ri(e.nodeType===8?e.parentNode:e),Pn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Fo(l);a.call(u)}}var l=zu(e,0,!1,null,null,!1,!1,"",Nf);return e._reactRootContainer=l,e[St]=l.current,ri(e.nodeType===8?e.parentNode:e),Pn(function(){ds(t,l,n,r)}),l}function ms(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Fo(s);a.call(l)}}ds(t,s,e,i)}else s=Hy(n,t,e,i,r);return Fo(s)}dh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(uu(t,n|1),ke(t,X()),(b&6)===0&&(hr=X()+500,on()))}break;case 13:Pn(function(){var r=Et(e,1);if(r!==null){var i=ve();Ye(r,e,1,i)}}),Bu(e,1)}};cu=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=ve();Ye(t,e,134217728,n)}Bu(e,134217728)}};hh=function(e){if(e.tag===13){var t=Gt(e),n=Et(e,t);if(n!==null){var r=ve();Ye(n,e,t,r)}Bu(e,t)}};ph=function(){return $};mh=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};il=function(e,t,n){switch(t){case"input":if(Ja(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=os(r);if(!i)throw Error(S(90));Kd(r),Ja(r,i)}}}break;case"textarea":qd(e,n);break;case"select":t=n.value,t!=null&&Jn(e,!!n.multiple,t,!1)}};th=$u;nh=Pn;var Ky={usingClientEntryPoint:!1,Events:[Ii,Vn,os,Zd,eh,$u]},Or={findFiberByHostInstance:pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Gy={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=oh(e),e===null?null:e.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||Wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{ts=Ji.inject(Gy),nt=Ji}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ky;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wu(t))throw Error(S(200));return Vy(e,t,null,n)};Ne.createRoot=function(e,t){if(!Wu(e))throw Error(S(299));var n=!1,r="",i=jp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zu(e,1,!1,null,null,n,!1,r,i),e[St]=t.current,ri(e.nodeType===8?e.parentNode:e),new Vu(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=oh(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Pn(e)};Ne.hydrate=function(e,t,n){if(!ps(t))throw Error(S(200));return ms(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Wu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=jp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=$p(t,null,e,1,n!=null?n:null,i,!1,o,s),e[St]=t.current,ri(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new hs(t)};Ne.render=function(e,t,n){if(!ps(t))throw Error(S(200));return ms(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!ps(e))throw Error(S(40));return e._reactRootContainer?(Pn(function(){ms(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};Ne.unstable_batchedUpdates=$u;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ps(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ms(e,t,n,!1,r)};Ne.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ne})(eu);var Af=eu.exports;Wa.createRoot=Af.createRoot,Wa.hydrateRoot=Af.hydrateRoot;function zo(){return zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zo.apply(this,arguments)}var vn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vn||(vn={}));var Df=function(e){return e},Lf="beforeunload",qy="popstate";function Qy(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var _=r.location,E=_.pathname,R=_.search,O=_.hash,F=i.state||{};return[F.idx,Df({pathname:E,search:R,hash:O,state:F.usr||null,key:F.key||"default"})]}var s=null;function a(){if(s)g.call(s),s=null;else{var _=vn.Pop,E=o(),R=E[0],O=E[1];if(g.length){if(R!=null){var F=c-R;F&&(s={action:_,location:O,retry:function(){I(F*-1)}},I(F))}}else f(_)}}r.addEventListener(qy,a);var l=vn.Pop,u=o(),c=u[0],h=u[1],d=bf(),g=bf();c==null&&(c=0,i.replaceState(zo({},i.state,{idx:c}),""));function v(_){return typeof _=="string"?_:Jy(_)}function y(_,E){return E===void 0&&(E=null),Df(zo({pathname:h.pathname,hash:"",search:""},typeof _=="string"?yr(_):_,{state:E,key:Yy()}))}function x(_,E){return[{usr:_.state,key:_.key,idx:E},v(_)]}function p(_,E,R){return!g.length||(g.call({action:_,location:E,retry:R}),!1)}function f(_){l=_;var E=o();c=E[0],h=E[1],d.call({action:l,location:h})}function m(_,E){var R=vn.Push,O=y(_,E);function F(){m(_,E)}if(p(R,O,F)){var Le=x(O,c+1),ft=Le[0],an=Le[1];try{i.pushState(ft,"",an)}catch{r.location.assign(an)}f(R)}}function w(_,E){var R=vn.Replace,O=y(_,E);function F(){w(_,E)}if(p(R,O,F)){var Le=x(O,c),ft=Le[0],an=Le[1];i.replaceState(ft,"",an),f(R)}}function I(_){i.go(_)}var C={get action(){return l},get location(){return h},createHref:v,push:m,replace:w,go:I,back:function(){I(-1)},forward:function(){I(1)},listen:function(E){return d.push(E)},block:function(E){var R=g.push(E);return g.length===1&&r.addEventListener(Lf,Mf),function(){R(),g.length||r.removeEventListener(Lf,Mf)}}};return C}function Mf(e){e.preventDefault(),e.returnValue=""}function bf(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function Yy(){return Math.random().toString(36).substr(2,8)}function Jy(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,s=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function yr(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Up=A.exports.createContext(null),Hu=A.exports.createContext(null),gs=A.exports.createContext({outlet:null,matches:[]});function lt(e,t){if(!e)throw new Error(t)}function Xy(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?yr(t):t,i=zp(r.pathname||"/",n);if(i==null)return null;let o=Fp(e);Zy(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=l0(o[a],i);return s}function Fp(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(s.relativePath.startsWith(r)||lt(!1),s.relativePath=s.relativePath.slice(r.length));let a=Sn([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(i.index===!0&&lt(!1),Fp(i.children,t,l,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:s0(a,i.index),routesMeta:l})}),t}function Zy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:a0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const e0=/^:\w+$/,t0=3,n0=2,r0=1,i0=10,o0=-2,$f=e=>e==="*";function s0(e,t){let n=e.split("/"),r=n.length;return n.some($f)&&(r+=o0),t&&(r+=n0),n.filter(i=>!$f(i)).reduce((i,o)=>i+(e0.test(o)?t0:o===""?r0:i0),r)}function a0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function l0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=u0({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;o.push({params:r,pathname:Sn([i,c.pathname]),pathnameBase:Bp(Sn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Sn([i,c.pathnameBase]))}return o}function u0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=c0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";s=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=f0(a[h]||""),u},{}),pathname:o,pathnameBase:s,pattern:e}}function c0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function f0(e,t){try{return decodeURIComponent(e)}catch{return e}}function d0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?yr(e):e;return{pathname:n?n.startsWith("/")?n:h0(n,t):t,search:m0(r),hash:g0(i)}}function h0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function p0(e,t,n){let r=typeof e=="string"?yr(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}o=a>=0?t[a]:"/"}let s=d0(r,o);return i&&i!=="/"&&i.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function zp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const Sn=e=>e.join("/").replace(/\/\/+/g,"/"),Bp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),m0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,g0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ci(){return A.exports.useContext(Hu)!=null}function Vp(){return Ci()||lt(!1),A.exports.useContext(Hu).location}function v0(){Ci()||lt(!1);let{basename:e,navigator:t}=A.exports.useContext(Up),{matches:n}=A.exports.useContext(gs),{pathname:r}=Vp(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=A.exports.useRef(!1);return A.exports.useEffect(()=>{o.current=!0}),A.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=p0(a,JSON.parse(i),r);e!=="/"&&(u.pathname=Sn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state)},[e,t,i,r])}const y0=A.exports.createContext(null);function w0(e){let t=A.exports.useContext(gs).outlet;return t&&A.exports.createElement(y0.Provider,{value:e},t)}function _0(e,t){Ci()||lt(!1);let{matches:n}=A.exports.useContext(gs),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let s=Vp(),a;if(t){var l;let d=typeof t=="string"?yr(t):t;o==="/"||((l=d.pathname)==null?void 0:l.startsWith(o))||lt(!1),a=d}else a=s;let u=a.pathname||"/",c=o==="/"?u:u.slice(o.length)||"/",h=Xy(e,{pathname:c});return S0(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:Sn([o,d.pathname]),pathnameBase:d.pathnameBase==="/"?o:Sn([o,d.pathnameBase])})),n)}function S0(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>A.exports.createElement(gs.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function E0(e){let{to:t,replace:n,state:r}=e;Ci()||lt(!1);let i=v0();return A.exports.useEffect(()=>{i(t,{replace:n,state:r})}),null}function I0(e){return w0(e.context)}function Lr(e){lt(!1)}function k0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=vn.Pop,navigator:o,static:s=!1}=e;Ci()&&lt(!1);let a=Bp(t),l=A.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=yr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,v=A.exports.useMemo(()=>{let y=zp(u,a);return y==null?null:{pathname:y,search:c,hash:h,state:d,key:g}},[a,u,c,h,d,g]);return v==null?null:A.exports.createElement(Up.Provider,{value:l},A.exports.createElement(Hu.Provider,{children:n,value:{location:v,navigationType:i}}))}function C0(e){let{children:t,location:n}=e;return _0($l(t),n)}function $l(e){let t=[];return A.exports.Children.forEach(e,n=>{if(!A.exports.isValidElement(n))return;if(n.type===A.exports.Fragment){t.push.apply(t,$l(n.props.children));return}n.type!==Lr&&lt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=$l(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function T0(e){let{basename:t,children:n,window:r}=e,i=A.exports.useRef();i.current==null&&(i.current=Qy({window:r}));let o=i.current,[s,a]=A.exports.useState({action:o.action,location:o.location});return A.exports.useLayoutEffect(()=>o.listen(a),[o]),A.exports.createElement(k0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}var Wp={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(s==="object")if(o.toString===Object.prototype.toString)for(var l in o)t.call(o,l)&&o[l]&&r.push(l);else r.push(o.toString())}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Wp);const P0=Wp.exports;var Hp={exports:{}},Kp={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=A.exports;function x0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var O0=typeof Object.is=="function"?Object.is:x0,R0=pr.useState,N0=pr.useEffect,A0=pr.useLayoutEffect,D0=pr.useDebugValue;function L0(e,t){var n=t(),r=R0({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return A0(function(){i.value=n,i.getSnapshot=t,Ia(i)&&o({inst:i})},[e,n,t]),N0(function(){return Ia(i)&&o({inst:i}),e(function(){Ia(i)&&o({inst:i})})},[e]),D0(n),n}function Ia(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!O0(e,n)}catch{return!0}}function M0(e,t){return t()}var b0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?M0:L0;Kp.useSyncExternalStore=pr.useSyncExternalStore!==void 0?pr.useSyncExternalStore:b0;(function(e){e.exports=Kp})(Hp);var Gp={exports:{}},qp={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=A.exports,$0=Hp.exports;function j0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var U0=typeof Object.is=="function"?Object.is:j0,F0=$0.useSyncExternalStore,z0=vs.useRef,B0=vs.useEffect,V0=vs.useMemo,W0=vs.useDebugValue;qp.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=z0(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=V0(function(){function l(g){if(!u){if(u=!0,c=g,g=r(g),i!==void 0&&s.hasValue){var v=s.value;if(i(v,g))return h=v}return h=g}if(v=h,U0(c,g))return v;var y=r(g);return i!==void 0&&i(v,y)?v:(c=g,h=y)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(t())},d===null?void 0:function(){return l(d())}]},[t,n,r,i]);var a=F0(e,o[0],o[1]);return B0(function(){s.hasValue=!0,s.value=a},[a]),W0(a),a};(function(e){e.exports=qp})(Gp);function H0(e){e()}let Qp=H0;const K0=e=>Qp=e,G0=()=>Qp,en=Ge.createContext(null);function Yp(){return A.exports.useContext(en)}const q0=()=>{throw new Error("uSES not initialized!")};let Jp=q0;const Q0=e=>{Jp=e},Y0=(e,t)=>e===t;function J0(e=en){const t=e===en?Yp:()=>A.exports.useContext(e);return function(r,i=Y0){const{store:o,subscription:s,getServerState:a}=t(),l=Jp(s.addNestedSub,o.getState,a||o.getState,r,i);return A.exports.useDebugValue(l),l}}const pt=J0();var Xp={exports:{}},j={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=typeof Symbol=="function"&&Symbol.for,Ku=se?Symbol.for("react.element"):60103,Gu=se?Symbol.for("react.portal"):60106,ys=se?Symbol.for("react.fragment"):60107,ws=se?Symbol.for("react.strict_mode"):60108,_s=se?Symbol.for("react.profiler"):60114,Ss=se?Symbol.for("react.provider"):60109,Es=se?Symbol.for("react.context"):60110,qu=se?Symbol.for("react.async_mode"):60111,Is=se?Symbol.for("react.concurrent_mode"):60111,ks=se?Symbol.for("react.forward_ref"):60112,Cs=se?Symbol.for("react.suspense"):60113,X0=se?Symbol.for("react.suspense_list"):60120,Ts=se?Symbol.for("react.memo"):60115,Ps=se?Symbol.for("react.lazy"):60116,Z0=se?Symbol.for("react.block"):60121,ew=se?Symbol.for("react.fundamental"):60117,tw=se?Symbol.for("react.responder"):60118,nw=se?Symbol.for("react.scope"):60119;function De(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ku:switch(e=e.type,e){case qu:case Is:case ys:case _s:case ws:case Cs:return e;default:switch(e=e&&e.$$typeof,e){case Es:case ks:case Ps:case Ts:case Ss:return e;default:return t}}case Gu:return t}}}function Zp(e){return De(e)===Is}j.AsyncMode=qu;j.ConcurrentMode=Is;j.ContextConsumer=Es;j.ContextProvider=Ss;j.Element=Ku;j.ForwardRef=ks;j.Fragment=ys;j.Lazy=Ps;j.Memo=Ts;j.Portal=Gu;j.Profiler=_s;j.StrictMode=ws;j.Suspense=Cs;j.isAsyncMode=function(e){return Zp(e)||De(e)===qu};j.isConcurrentMode=Zp;j.isContextConsumer=function(e){return De(e)===Es};j.isContextProvider=function(e){return De(e)===Ss};j.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ku};j.isForwardRef=function(e){return De(e)===ks};j.isFragment=function(e){return De(e)===ys};j.isLazy=function(e){return De(e)===Ps};j.isMemo=function(e){return De(e)===Ts};j.isPortal=function(e){return De(e)===Gu};j.isProfiler=function(e){return De(e)===_s};j.isStrictMode=function(e){return De(e)===ws};j.isSuspense=function(e){return De(e)===Cs};j.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ys||e===Is||e===_s||e===ws||e===Cs||e===X0||typeof e=="object"&&e!==null&&(e.$$typeof===Ps||e.$$typeof===Ts||e.$$typeof===Ss||e.$$typeof===Es||e.$$typeof===ks||e.$$typeof===ew||e.$$typeof===tw||e.$$typeof===nw||e.$$typeof===Z0)};j.typeOf=De;(function(e){e.exports=j})(Xp);var em=Xp.exports,rw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},iw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tm={};tm[em.ForwardRef]=rw;tm[em.Memo]=iw;var ow={exports:{}},U={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qu=Symbol.for("react.element"),Yu=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),Os=Symbol.for("react.strict_mode"),Rs=Symbol.for("react.profiler"),Ns=Symbol.for("react.provider"),As=Symbol.for("react.context"),sw=Symbol.for("react.server_context"),Ds=Symbol.for("react.forward_ref"),Ls=Symbol.for("react.suspense"),Ms=Symbol.for("react.suspense_list"),bs=Symbol.for("react.memo"),$s=Symbol.for("react.lazy"),aw=Symbol.for("react.offscreen"),nm;nm=Symbol.for("react.module.reference");function Be(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qu:switch(e=e.type,e){case xs:case Rs:case Os:case Ls:case Ms:return e;default:switch(e=e&&e.$$typeof,e){case sw:case As:case Ds:case $s:case bs:case Ns:return e;default:return t}}case Yu:return t}}}U.ContextConsumer=As;U.ContextProvider=Ns;U.Element=Qu;U.ForwardRef=Ds;U.Fragment=xs;U.Lazy=$s;U.Memo=bs;U.Portal=Yu;U.Profiler=Rs;U.StrictMode=Os;U.Suspense=Ls;U.SuspenseList=Ms;U.isAsyncMode=function(){return!1};U.isConcurrentMode=function(){return!1};U.isContextConsumer=function(e){return Be(e)===As};U.isContextProvider=function(e){return Be(e)===Ns};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qu};U.isForwardRef=function(e){return Be(e)===Ds};U.isFragment=function(e){return Be(e)===xs};U.isLazy=function(e){return Be(e)===$s};U.isMemo=function(e){return Be(e)===bs};U.isPortal=function(e){return Be(e)===Yu};U.isProfiler=function(e){return Be(e)===Rs};U.isStrictMode=function(e){return Be(e)===Os};U.isSuspense=function(e){return Be(e)===Ls};U.isSuspenseList=function(e){return Be(e)===Ms};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xs||e===Rs||e===Os||e===Ls||e===Ms||e===aw||typeof e=="object"&&e!==null&&(e.$$typeof===$s||e.$$typeof===bs||e.$$typeof===Ns||e.$$typeof===As||e.$$typeof===Ds||e.$$typeof===nm||e.getModuleId!==void 0)};U.typeOf=Be;(function(e){e.exports=U})(ow);function lw(){const e=G0();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const jf={notify(){},get:()=>[]};function uw(e,t){let n,r=jf;function i(h){return l(),r.subscribe(h)}function o(){r.notify()}function s(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=lw())}function u(){n&&(n(),n=void 0,r.clear(),r=jf)}const c={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:s,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const cw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fw=cw?A.exports.useLayoutEffect:A.exports.useEffect;var js={exports:{}},Us={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dw=A.exports,hw=Symbol.for("react.element"),pw=Symbol.for("react.fragment"),mw=Object.prototype.hasOwnProperty,gw=dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vw={key:!0,ref:!0,__self:!0,__source:!0};function rm(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)mw.call(t,r)&&!vw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hw,type:e,key:o,ref:s,props:i,_owner:gw.current}}Us.Fragment=pw;Us.jsx=rm;Us.jsxs=rm;(function(e){e.exports=Us})(js);const Ju=js.exports.Fragment,k=js.exports.jsx,Z=js.exports.jsxs;function yw({store:e,context:t,children:n,serverState:r}){const i=A.exports.useMemo(()=>{const a=uw(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),o=A.exports.useMemo(()=>e.getState(),[e]);return fw(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),o!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,o]),k((t||en).Provider,{value:i,children:n})}function im(e=en){const t=e===en?Yp:()=>A.exports.useContext(e);return function(){const{store:r}=t();return r}}const ww=im();function _w(e=en){const t=e===en?ww:im(e);return function(){return t().dispatch}}const Fs=_w();Q0(Gp.exports.useSyncExternalStoreWithSelector);K0(eu.exports.unstable_batchedUpdates);function qe(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function tn(e){return!!e&&!!e[H]}function kt(e){return!!e&&(function(t){if(!t||typeof t!="object")return!1;var n=Object.getPrototypeOf(t);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===Ow}(e)||Array.isArray(e)||!!e[Hf]||!!e.constructor[Hf]||Xu(e)||Zu(e))}function xn(e,t,n){n===void 0&&(n=!1),wr(e)===0?(n?Object.keys:ir)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function wr(e){var t=e[H];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Xu(e)?2:Zu(e)?3:0}function rr(e,t){return wr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Sw(e,t){return wr(e)===2?e.get(t):e[t]}function om(e,t,n){var r=wr(e);r===2?e.set(t,n):r===3?(e.delete(t),e.add(n)):e[t]=n}function sm(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Xu(e){return Pw&&e instanceof Map}function Zu(e){return xw&&e instanceof Set}function dn(e){return e.o||e.t}function ec(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=lm(e);delete t[H];for(var n=ir(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function tc(e,t){return t===void 0&&(t=!1),nc(e)||tn(e)||!kt(e)||(wr(e)>1&&(e.set=e.add=e.clear=e.delete=Ew),Object.freeze(e),t&&xn(e,function(n,r){return tc(r,!0)},!0)),e}function Ew(){qe(2)}function nc(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function it(e){var t=zl[e];return t||qe(18,e),t}function Iw(e,t){zl[e]||(zl[e]=t)}function jl(){return di}function ka(e,t){t&&(it("Patches"),e.u=[],e.s=[],e.v=t)}function Bo(e){Ul(e),e.p.forEach(kw),e.p=null}function Ul(e){e===di&&(di=e.l)}function Uf(e){return di={p:[],l:di,h:e,m:!0,_:0}}function kw(e){var t=e[H];t.i===0||t.i===1?t.j():t.O=!0}function Ca(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||it("ES5").S(t,e,r),r?(n[H].P&&(Bo(t),qe(4)),kt(e)&&(e=Vo(t,e),t.l||Wo(t,e)),t.u&&it("Patches").M(n[H].t,e,t.u,t.s)):e=Vo(t,n,[]),Bo(t),t.u&&t.v(t.u,t.s),e!==am?e:void 0}function Vo(e,t,n){if(nc(t))return t;var r=t[H];if(!r)return xn(t,function(o,s){return Ff(e,r,t,o,s,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Wo(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=ec(r.k):r.o;xn(r.i===3?new Set(i):i,function(o,s){return Ff(e,r,i,o,s,n)}),Wo(e,i,!1),n&&e.u&&it("Patches").R(r,n,e.u,e.s)}return r.o}function Ff(e,t,n,r,i,o){if(tn(i)){var s=Vo(e,i,o&&t&&t.i!==3&&!rr(t.D,r)?o.concat(r):void 0);if(om(n,r,s),!tn(s))return;e.m=!1}if(kt(i)&&!nc(i)){if(!e.h.F&&e._<1)return;Vo(e,i),t&&t.A.l||Wo(e,i)}}function Wo(e,t,n){n===void 0&&(n=!1),e.h.F&&e.m&&tc(t,n)}function Ta(e,t){var n=e[H];return(n?dn(n):e)[t]}function zf(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Lt(e){e.P||(e.P=!0,e.l&&Lt(e.l))}function Pa(e){e.o||(e.o=ec(e.t))}function Fl(e,t,n){var r=Xu(t)?it("MapSet").N(t,n):Zu(t)?it("MapSet").T(t,n):e.g?function(i,o){var s=Array.isArray(i),a={i:s?1:0,A:o?o.A:jl(),P:!1,I:!1,D:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=a,u=hi;s&&(l=[a],u=Mr);var c=Proxy.revocable(l,u),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(t,n):it("ES5").J(t,n);return(n?n.A:jl()).p.push(r),r}function Cw(e){return tn(e)||qe(22,e),function t(n){if(!kt(n))return n;var r,i=n[H],o=wr(n);if(i){if(!i.P&&(i.i<4||!it("ES5").K(i)))return i.t;i.I=!0,r=Bf(n,o),i.I=!1}else r=Bf(n,o);return xn(r,function(s,a){i&&Sw(i.t,s)===a||om(r,s,t(a))}),o===3?new Set(r):r}(e)}function Bf(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return ec(e)}function Tw(){function e(o,s){var a=i[o];return a?a.enumerable=s:i[o]=a={configurable:!0,enumerable:s,get:function(){var l=this[H];return hi.get(l,o)},set:function(l){var u=this[H];hi.set(u,o,l)}},a}function t(o){for(var s=o.length-1;s>=0;s--){var a=o[s][H];if(!a.P)switch(a.i){case 5:r(a)&&Lt(a);break;case 4:n(a)&&Lt(a)}}}function n(o){for(var s=o.t,a=o.k,l=ir(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==H){var h=s[c];if(h===void 0&&!rr(s,c))return!0;var d=a[c],g=d&&d[H];if(g?g.t!==h:!sm(d,h))return!0}}var v=!!s[H];return l.length!==ir(s).length+(v?0:1)}function r(o){var s=o.k;if(s.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(s,s.length-1);if(a&&!a.get)return!0;for(var l=0;l<s.length;l++)if(!s.hasOwnProperty(l))return!0;return!1}var i={};Iw("ES5",{J:function(o,s){var a=Array.isArray(o),l=function(c,h){if(c){for(var d=Array(h.length),g=0;g<h.length;g++)Object.defineProperty(d,""+g,e(g,!0));return d}var v=lm(h);delete v[H];for(var y=ir(v),x=0;x<y.length;x++){var p=y[x];v[p]=e(p,c||!!v[p].enumerable)}return Object.create(Object.getPrototypeOf(h),v)}(a,o),u={i:a?5:4,A:s?s.A:jl(),P:!1,I:!1,D:{},l:s,t:o,k:l,o:null,O:!1,C:!1};return Object.defineProperty(l,H,{value:u,writable:!0}),l},S:function(o,s,a){a?tn(s)&&s[H].A===o&&t(o.p):(o.u&&function l(u){if(u&&typeof u=="object"){var c=u[H];if(c){var h=c.t,d=c.k,g=c.D,v=c.i;if(v===4)xn(d,function(m){m!==H&&(h[m]!==void 0||rr(h,m)?g[m]||l(d[m]):(g[m]=!0,Lt(c)))}),xn(h,function(m){d[m]!==void 0||rr(d,m)||(g[m]=!1,Lt(c))});else if(v===5){if(r(c)&&(Lt(c),g.length=!0),d.length<h.length)for(var y=d.length;y<h.length;y++)g[y]=!1;else for(var x=h.length;x<d.length;x++)g[x]=!0;for(var p=Math.min(d.length,h.length),f=0;f<p;f++)d.hasOwnProperty(f)||(g[f]=!0),g[f]===void 0&&l(d[f])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var Vf,di,rc=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Pw=typeof Map<"u",xw=typeof Set<"u",Wf=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",am=rc?Symbol.for("immer-nothing"):((Vf={})["immer-nothing"]=!0,Vf),Hf=rc?Symbol.for("immer-draftable"):"__$immer_draftable",H=rc?Symbol.for("immer-state"):"__$immer_state",Ow=""+Object.prototype.constructor,ir=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,lm=Object.getOwnPropertyDescriptors||function(e){var t={};return ir(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},zl={},hi={get:function(e,t){if(t===H)return e;var n=dn(e);if(!rr(n,t))return function(i,o,s){var a,l=zf(o,s);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!kt(r)?r:r===Ta(e.t,t)?(Pa(e),e.o[t]=Fl(e.A.h,r,e)):r},has:function(e,t){return t in dn(e)},ownKeys:function(e){return Reflect.ownKeys(dn(e))},set:function(e,t,n){var r=zf(dn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Ta(dn(e),t),o=i==null?void 0:i[H];if(o&&o.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(sm(n,i)&&(n!==void 0||rr(e.t,t)))return!0;Pa(e),Lt(e)}return e.o[t]===n&&typeof n!="number"&&(n!==void 0||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return Ta(e.t,t)!==void 0||t in e.t?(e.D[t]=!1,Pa(e),Lt(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=dn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){qe(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){qe(12)}},Mr={};xn(hi,function(e,t){Mr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Mr.deleteProperty=function(e,t){return Mr.set.call(this,e,t,void 0)},Mr.set=function(e,t,n){return hi.set.call(this,e[0],t,n,e[0])};var Rw=function(){function e(n){var r=this;this.g=Wf,this.F=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var l=r;return function(y){var x=this;y===void 0&&(y=a);for(var p=arguments.length,f=Array(p>1?p-1:0),m=1;m<p;m++)f[m-1]=arguments[m];return l.produce(y,function(w){var I;return(I=o).call.apply(I,[x,w].concat(f))})}}var u;if(typeof o!="function"&&qe(6),s!==void 0&&typeof s!="function"&&qe(7),kt(i)){var c=Uf(r),h=Fl(r,i,void 0),d=!0;try{u=o(h),d=!1}finally{d?Bo(c):Ul(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return ka(c,s),Ca(y,c)},function(y){throw Bo(c),y}):(ka(c,s),Ca(u,c))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===am&&(u=void 0),r.F&&tc(u,!0),s){var g=[],v=[];it("Patches").M(i,u,g,v),s(g,v)}return u}qe(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(u,function(g){return i.apply(void 0,[g].concat(h))})};var s,a,l=r.produce(i,o,function(u,c){s=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,s,a]}):[l,s,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){kt(n)||qe(8),tn(n)&&(n=Cw(n));var r=Uf(this),i=Fl(this,n,void 0);return i[H].C=!0,Ul(r),i},t.finishDraft=function(n,r){var i=n&&n[H],o=i.A;return ka(o,r),Ca(void 0,o)},t.setAutoFreeze=function(n){this.F=n},t.setUseProxies=function(n){n&&!Wf&&qe(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=it("Patches").$;return tn(n)?s(n,r):this.produce(n,function(a){return s(a,r)})},e}(),Re=new Rw,um=Re.produce;Re.produceWithPatches.bind(Re);Re.setAutoFreeze.bind(Re);Re.setUseProxies.bind(Re);Re.applyPatches.bind(Re);Re.createDraft.bind(Re);Re.finishDraft.bind(Re);function Nw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Gf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kf(Object(n),!0).forEach(function(r){Nw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function de(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var qf=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),xa=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ho={INIT:"@@redux/INIT"+xa(),REPLACE:"@@redux/REPLACE"+xa(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+xa()}};function Aw(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function cm(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(de(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(de(1));return n(cm)(e,t)}if(typeof e!="function")throw new Error(de(2));var i=e,o=t,s=[],a=s,l=!1;function u(){a===s&&(a=s.slice())}function c(){if(l)throw new Error(de(3));return o}function h(y){if(typeof y!="function")throw new Error(de(4));if(l)throw new Error(de(5));var x=!0;return u(),a.push(y),function(){if(!!x){if(l)throw new Error(de(6));x=!1,u();var f=a.indexOf(y);a.splice(f,1),s=null}}}function d(y){if(!Aw(y))throw new Error(de(7));if(typeof y.type>"u")throw new Error(de(8));if(l)throw new Error(de(9));try{l=!0,o=i(o,y)}finally{l=!1}for(var x=s=a,p=0;p<x.length;p++){var f=x[p];f()}return y}function g(y){if(typeof y!="function")throw new Error(de(10));i=y,d({type:Ho.REPLACE})}function v(){var y,x=h;return y={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(de(11));function m(){f.next&&f.next(c())}m();var w=x(m);return{unsubscribe:w}}},y[qf]=function(){return this},y}return d({type:Ho.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:g},r[qf]=v,r}function Dw(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Ho.INIT});if(typeof r>"u")throw new Error(de(12));if(typeof n(void 0,{type:Ho.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(de(13))})}function Lw(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),s;try{Dw(n)}catch(a){s=a}return function(l,u){if(l===void 0&&(l={}),s)throw s;for(var c=!1,h={},d=0;d<o.length;d++){var g=o[d],v=n[g],y=l[g],x=v(y,u);if(typeof x>"u")throw u&&u.type,new Error(de(14));h[g]=x,c=c||x!==y}return c=c||o.length!==Object.keys(l).length,c?h:l}}function Ko(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function Mw(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(de(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(l){return l(s)});return o=Ko.apply(void 0,a)(i.dispatch),Gf(Gf({},i),{},{dispatch:o})}}}function fm(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(s){return function(a){return typeof a=="function"?a(i,o,e):s(a)}}};return t}var dm=fm();dm.withExtraArgument=fm;const Qf=dm;var bw=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),$w=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Go=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},jw=Object.defineProperty,Uw=Object.defineProperties,Fw=Object.getOwnPropertyDescriptors,Yf=Object.getOwnPropertySymbols,zw=Object.prototype.hasOwnProperty,Bw=Object.prototype.propertyIsEnumerable,Jf=function(e,t,n){return t in e?jw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Qt=function(e,t){for(var n in t||(t={}))zw.call(t,n)&&Jf(e,n,t[n]);if(Yf)for(var r=0,i=Yf(t);r<i.length;r++){var n=i[r];Bw.call(t,n)&&Jf(e,n,t[n])}return e},Oa=function(e,t){return Uw(e,Fw(t))},Vw=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{a(n.next(l))}catch(u){i(u)}},s=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,s)};a((n=n.apply(e,t)).next())})},Ww=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ko:Ko.apply(null,arguments)};function Hw(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var Kw=function(e){bw(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Go([void 0],n[0].concat(this)))):new(t.bind.apply(t,Go([void 0],n.concat(this))))},t}(Array);function Bl(e){return kt(e)?um(e,function(){}):e}function Gw(e){return typeof e=="boolean"}function qw(){return function(t){return Qw(t)}}function Qw(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new Kw;return n&&(Gw(n)?r.push(Qf):r.push(Qf.withExtraArgument(n.extraArgument))),r}var Yw=!0;function Jw(e){var t=qw(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,s=o===void 0?t():o,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,g;if(typeof i=="function")g=i;else if(Hw(i))g=Lw(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=s;typeof v=="function"&&(v=v(t));var y=Mw.apply(void 0,v),x=Ko;l&&(x=Ww(Qt({trace:!Yw},typeof l=="object"&&l)));var p=[y];Array.isArray(d)?p=Go([y],d):typeof d=="function"&&(p=d(p));var f=x.apply(void 0,p);return cm(g,c,f)}function Yt(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Qt(Qt({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function hm(e){var t={},n=[],r,i={addCase:function(o,s){var a=typeof o=="string"?o:o.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=s,i},addMatcher:function(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function Xw(e){return typeof e=="function"}function Zw(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?hm(t):[t,n,r],o=i[0],s=i[1],a=i[2],l;if(Xw(e))l=function(){return Bl(e())};else{var u=Bl(e);l=function(){return u}}function c(h,d){h===void 0&&(h=l());var g=Go([o[d.type]],s.filter(function(v){var y=v.matcher;return y(d)}).map(function(v){var y=v.reducer;return y}));return g.filter(function(v){return!!v}).length===0&&(g=[a]),g.reduce(function(v,y){if(y)if(tn(v)){var x=v,p=y(x,d);return typeof p>"u"?v:p}else{if(kt(v))return um(v,function(f){return y(f,d)});var p=y(v,d);if(typeof p>"u"){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return v},h)}return c.getInitialState=l,c}function e1(e,t){return e+"/"+t}function pm(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Bl(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},s={},a={};i.forEach(function(c){var h=r[c],d=e1(t,c),g,v;"reducer"in h?(g=h.reducer,v=h.prepare):g=h,o[c]=g,s[d]=g,a[c]=v?Yt(d,v):Yt(d)});function l(){var c=typeof e.extraReducers=="function"?hm(e.extraReducers):[e.extraReducers],h=c[0],d=h===void 0?{}:h,g=c[1],v=g===void 0?[]:g,y=c[2],x=y===void 0?void 0:y,p=Qt(Qt({},d),s);return Zw(n,p,v,x)}var u;return{name:t,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:o,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var t1="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",n1=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=t1[Math.random()*64|0];return t},r1=["name","message","stack","code"],Ra=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Xf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),i1=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=r1;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};function ic(e,t,n){var r=Yt(e+"/fulfilled",function(l,u,c,h){return{payload:l,meta:Oa(Qt({},h||{}),{arg:c,requestId:u,requestStatus:"fulfilled"})}}),i=Yt(e+"/pending",function(l,u,c){return{payload:void 0,meta:Oa(Qt({},c||{}),{arg:u,requestId:l,requestStatus:"pending"})}}),o=Yt(e+"/rejected",function(l,u,c,h,d){return{payload:h,error:(n&&n.serializeError||i1)(l||"Rejected"),meta:Oa(Qt({},d||{}),{arg:c,requestId:u,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function l(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return l.prototype.abort=function(){},l}();function a(l){return function(u,c,h){var d=n!=null&&n.idGenerator?n.idGenerator(l):n1(),g=new s,v,y=new Promise(function(m,w){return g.signal.addEventListener("abort",function(){return w({name:"AbortError",message:v||"Aborted"})})}),x=!1;function p(m){x&&(v=m,g.abort())}var f=function(){return Vw(this,null,function(){var m,w,I,C,_,E;return $w(this,function(R){switch(R.label){case 0:return R.trys.push([0,4,,5]),C=(m=n==null?void 0:n.condition)==null?void 0:m.call(n,l,{getState:c,extra:h}),s1(C)?[4,C]:[3,2];case 1:C=R.sent(),R.label=2;case 2:if(C===!1)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return x=!0,u(i(d,l,(w=n==null?void 0:n.getPendingMeta)==null?void 0:w.call(n,{requestId:d,arg:l},{getState:c,extra:h}))),[4,Promise.race([y,Promise.resolve(t(l,{dispatch:u,getState:c,extra:h,requestId:d,signal:g.signal,rejectWithValue:function(O,F){return new Ra(O,F)},fulfillWithValue:function(O,F){return new Xf(O,F)}})).then(function(O){if(O instanceof Ra)throw O;return O instanceof Xf?r(O.payload,d,l,O.meta):r(O,d,l)})])];case 3:return I=R.sent(),[3,5];case 4:return _=R.sent(),I=_ instanceof Ra?o(null,d,l,_.payload,_.meta):o(_,d,l),[3,5];case 5:return E=n&&!n.dispatchConditionRejection&&o.match(I)&&I.meta.condition,E||u(I),[2,I]}})})}();return Object.assign(f,{abort:p,requestId:d,arg:l,unwrap:function(){return f.then(o1)}})}}return Object.assign(a,{pending:i,rejected:o,fulfilled:r,typePrefix:e})}function o1(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function s1(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var oc="listenerMiddleware";Yt(oc+"/add");Yt(oc+"/removeAll");Yt(oc+"/remove");Tw();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},a1=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},gm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,h=(o&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(mm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a1(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw Error();const d=o<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l1=function(e){const t=mm(e);return gm.encodeByteArray(t,!0)},vm=function(e){return l1(e).replace(/\./g,"")},u1=function(e){try{return gm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function f1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function ym(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function d1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h1(){const e=me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function wm(){return typeof indexedDB=="object"}function _m(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function p1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="FirebaseError";class sn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=m1,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?g1(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new sn(i,a,r)}}function g1(e,t){return e.replace(v1,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const v1=/\{\$([^}]+)}/g;function y1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function pi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Zf(o)&&Zf(s)){if(!pi(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zf(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function br(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function $r(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function w1(e,t){const n=new _1(e,t);return n.subscribe.bind(n)}class _1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");S1(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Na),i.error===void 0&&(i.error=Na),i.complete===void 0&&(i.complete=Na);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S1(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Na(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=1e3,I1=2,k1=4*60*60*1e3,C1=.5;function ed(e,t=E1,n=I1){const r=t*Math.pow(n,e),i=Math.round(C1*r*(Math.random()-.5)*2);return Math.min(k1,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){return e&&e._delegate?e._delegate:e}class ut{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new c1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(x1(t))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=hn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=hn){return this.instances.has(t)}getOptions(t=hn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:P1(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=hn){return this.component?this.component.multipleInstances?t:hn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function P1(e){return e===hn?void 0:e}function x1(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new T1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(z||(z={}));const R1={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},N1=z.INFO,A1={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},D1=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=A1[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class sc{constructor(t){this.name=t,this._logLevel=N1,this._logHandler=D1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?R1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const L1=(e,t)=>t.some(n=>e instanceof n);let td,nd;function M1(){return td||(td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b1(){return nd||(nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sm=new WeakMap,Vl=new WeakMap,Em=new WeakMap,Aa=new WeakMap,ac=new WeakMap;function $1(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Jt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Sm.set(n,e)}).catch(()=>{}),ac.set(t,e),t}function j1(e){if(Vl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Vl.set(e,t)}let Wl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Vl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Em.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function U1(e){Wl=e(Wl)}function F1(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Da(this),t,...n);return Em.set(r,t.sort?t.sort():[t]),Jt(r)}:b1().includes(e)?function(...t){return e.apply(Da(this),t),Jt(Sm.get(this))}:function(...t){return Jt(e.apply(Da(this),t))}}function z1(e){return typeof e=="function"?F1(e):(e instanceof IDBTransaction&&j1(e),L1(e,M1())?new Proxy(e,Wl):e)}function Jt(e){if(e instanceof IDBRequest)return $1(e);if(Aa.has(e))return Aa.get(e);const t=z1(e);return t!==e&&(Aa.set(e,t),ac.set(t,e)),t}const Da=e=>ac.get(e);function Im(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Jt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Jt(s.result),l.oldVersion,l.newVersion,Jt(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const B1=["get","getKey","getAll","getAllKeys","count"],V1=["put","add","delete","clear"],La=new Map;function rd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(La.get(t))return La.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=V1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||B1.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return La.set(t,o),o}U1(e=>({...e,get:(t,n,r)=>rd(t,n)||e.get(t,n,r),has:(t,n)=>!!rd(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(H1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function H1(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hl="@firebase/app",id="0.7.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new sc("@firebase/app"),K1="@firebase/app-compat",G1="@firebase/analytics-compat",q1="@firebase/analytics",Q1="@firebase/app-check-compat",Y1="@firebase/app-check",J1="@firebase/auth",X1="@firebase/auth-compat",Z1="@firebase/database",e_="@firebase/database-compat",t_="@firebase/functions",n_="@firebase/functions-compat",r_="@firebase/installations",i_="@firebase/installations-compat",o_="@firebase/messaging",s_="@firebase/messaging-compat",a_="@firebase/performance",l_="@firebase/performance-compat",u_="@firebase/remote-config",c_="@firebase/remote-config-compat",f_="@firebase/storage",d_="@firebase/storage-compat",h_="@firebase/firestore",p_="@firebase/firestore-compat",m_="firebase",g_="9.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="[DEFAULT]",v_={[Hl]:"fire-core",[K1]:"fire-core-compat",[q1]:"fire-analytics",[G1]:"fire-analytics-compat",[Y1]:"fire-app-check",[Q1]:"fire-app-check-compat",[J1]:"fire-auth",[X1]:"fire-auth-compat",[Z1]:"fire-rtdb",[e_]:"fire-rtdb-compat",[t_]:"fire-fn",[n_]:"fire-fn-compat",[r_]:"fire-iid",[i_]:"fire-iid-compat",[o_]:"fire-fcm",[s_]:"fire-fcm-compat",[a_]:"fire-perf",[l_]:"fire-perf-compat",[u_]:"fire-rc",[c_]:"fire-rc-compat",[f_]:"fire-gcs",[d_]:"fire-gcs-compat",[h_]:"fire-fst",[p_]:"fire-fst-compat","fire-js":"fire-js",[m_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=new Map,Kl=new Map;function y_(e,t){try{e.container.addComponent(t)}catch(n){lc.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ct(e){const t=e.name;if(Kl.has(t))return lc.debug(`There were multiple attempts to register component ${t}.`),!1;Kl.set(t,e);for(const n of qo.values())y_(n,e);return!0}function _r(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},On=new bn("app","Firebase",w_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=g_;function S_(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:km,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw On.create("bad-app-name",{appName:String(r)});const i=qo.get(r);if(i){if(pi(e,i.options)&&pi(n,i.config))return i;throw On.create("duplicate-app",{appName:r})}const o=new O1(r);for(const a of Kl.values())o.addComponent(a);const s=new __(e,n,o);return qo.set(r,s),s}function Cm(e=km){const t=qo.get(e);if(!t)throw On.create("no-app",{appName:e});return t}function ot(e,t,n){var r;let i=(r=v_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),lc.warn(a.join(" "));return}Ct(new ut(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="firebase-heartbeat-database",I_=1,mi="firebase-heartbeat-store";let Ma=null;function Tm(){return Ma||(Ma=Im(E_,I_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(mi)}}}).catch(e=>{throw On.create("storage-open",{originalErrorMessage:e.message})})),Ma}async function k_(e){var t;try{return(await Tm()).transaction(mi).objectStore(mi).get(Pm(e))}catch(n){throw On.create("storage-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message})}}async function od(e,t){var n;try{const i=(await Tm()).transaction(mi,"readwrite");return await i.objectStore(mi).put(t,Pm(e)),i.done}catch(r){throw On.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function Pm(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=1024,T_=30*24*60*60*1e3;class P_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new O_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=T_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sd(),{heartbeatsToSend:n,unsentEntries:r}=x_(this._heartbeatsCache.heartbeats),i=vm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sd(){return new Date().toISOString().substring(0,10)}function x_(e,t=C_){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),ad(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ad(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class O_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wm()?_m().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await k_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return od(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return od(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ad(e){return vm(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(e){Ct(new ut("platform-logger",t=>new W1(t),"PRIVATE")),Ct(new ut("heartbeat",t=>new P_(t),"PRIVATE")),ot(Hl,id,e),ot(Hl,id,"esm2017"),ot("fire-js","")}R_("");function uc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function xm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const N_=xm,Om=new bn("auth","Firebase",xm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=new sc("@firebase/auth");function ho(e,...t){ld.logLevel<=z.ERROR&&ld.error(`Auth (${zs}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e,...t){throw cc(e,...t)}function st(e,...t){return cc(e,...t)}function A_(e,t,n){const r=Object.assign(Object.assign({},N_()),{[t]:n});return new bn("auth","Firebase",r).create(t,{appName:e.name})}function cc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Om.create(e,...t)}function N(e,t,...n){if(!e)throw cc(t,...n)}function vt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ho(t),new Error(t)}function Tt(e,t){e||vt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=new Map;function yt(e){Tt(e instanceof Function,"Expected a class definition");let t=ud.get(e);return t?(Tt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ud.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(e,t){const n=_r(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(pi(o,t!=null?t:{}))return i;Xe(i,"already-initialized")}return n.initialize({options:t})}function L_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function M_(){return cd()==="http:"||cd()==="https:"}function cd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(M_()||ym()||"connection"in navigator)?navigator.onLine:!0}function $_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Tt(n>t,"Short delay should be less than long delay!"),this.isMobile=f1()||d1()}get(){return b_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(e,t){Tt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new Pi(3e4,6e4);function xi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Oi(e,t,n,r,i={}){return Nm(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Ti(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Rm.fetch()(Am(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Nm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},j_),t);try{const i=new F_(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Xi(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xi(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Xi(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Xi(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw A_(e,c,u);Xe(e,c)}}catch(i){if(i instanceof sn)throw i;Xe(e,"network-request-failed")}}async function Ri(e,t,n,r,i={}){const o=await Oi(e,t,n,r,i);return"mfaPendingCredential"in o&&Xe(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Am(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?fc(e.config,i):`${e.config.apiScheme}://${i}`}class F_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),U_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=st(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(e,t){return Oi(e,"POST","/v1/accounts:delete",t)}async function B_(e,t){return Oi(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function V_(e,t=!1){const n=ct(e),r=await n.getIdToken(t),i=dc(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Gr(ba(i.auth_time)),issuedAtTime:Gr(ba(i.iat)),expirationTime:Gr(ba(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ba(e){return Number(e)*1e3}function dc(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const o=u1(r);return o?JSON.parse(o):(ho("Failed to decode base64 JWT payload"),null)}catch(o){return ho("Caught error parsing JWT payload as JSON",(t=o)===null||t===void 0?void 0:t.toString()),null}}function W_(e){const t=dc(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof sn&&H_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function H_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gr(this.lastLoginAt),this.creationTime=Gr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await gi(e,B_(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Q_(o.providerUserInfo):[],a=q_(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Dm(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,h)}async function G_(e){const t=ct(e);await Qo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function q_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Q_(e){return e.map(t=>{var{providerId:n}=t,r=uc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(e,t){const n=await Nm(e,{},async()=>{const r=Ti({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Am(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rm.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):W_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Y_(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new vi;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class En{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=uc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Dm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await gi(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return V_(this,t)}reload(){return G_(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new En(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await gi(this,z_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:I,providerData:C,stsTokenManager:_}=n;N(m&&_,t,"internal-error");const E=vi.fromJSON(this.name,_);N(typeof m=="string",t,"internal-error"),Ot(h,t.name),Ot(d,t.name),N(typeof w=="boolean",t,"internal-error"),N(typeof I=="boolean",t,"internal-error"),Ot(g,t.name),Ot(v,t.name),Ot(y,t.name),Ot(x,t.name),Ot(p,t.name),Ot(f,t.name);const R=new En({uid:m,auth:t,email:d,emailVerified:w,displayName:h,isAnonymous:I,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:E,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(R.providerData=C.map(O=>Object.assign({},O))),x&&(R._redirectEventId=x),R}static async _fromIdTokenResponse(t,n,r=!1){const i=new vi;i.updateFromServerResponse(n);const o=new En({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Qo(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Lm.type="NONE";const fd=Lm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(e,t,n){return`firebase:${e}:${t}:${n}`}class or{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=po(this.userKey,i.apiKey,o),this.fullPersistenceKey=po("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?En._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new or(yt(fd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||yt(fd);const s=po(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const h=En._fromJSON(t,c);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new or(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new or(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if($m(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Mm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Um(t))return"Blackberry";if(Fm(t))return"Webos";if(hc(t))return"Safari";if((t.includes("chrome/")||bm(t))&&!t.includes("edge/"))return"Chrome";if(jm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mm(e=me()){return/firefox\//i.test(e)}function hc(e=me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function bm(e=me()){return/crios\//i.test(e)}function $m(e=me()){return/iemobile/i.test(e)}function jm(e=me()){return/android/i.test(e)}function Um(e=me()){return/blackberry/i.test(e)}function Fm(e=me()){return/webos/i.test(e)}function Bs(e=me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function J_(e=me()){var t;return Bs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function X_(){return h1()&&document.documentMode===10}function zm(e=me()){return Bs(e)||jm(e)||Fm(e)||Um(e)||/windows phone/i.test(e)||$m(e)}function Z_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(e,t=[]){let n;switch(e){case"Browser":n=dd(me());break;case"Worker":n=`${dd(me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hd(this),this.idTokenSubscription=new hd(this),this.beforeStateQueue=new eS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Om,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await or.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await Qo(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=$_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?ct(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new bn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&yt(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await or.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return N(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Bm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Vs(e){return ct(e)}class hd{constructor(t){this.auth=t,this.observer=null,this.addObserver=w1(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return vt("not implemented")}_getIdTokenResponse(t){return vt("not implemented")}_linkToIdToken(t,n){return vt("not implemented")}_getReauthenticationResolver(t){return vt("not implemented")}}async function nS(e,t){return Oi(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(e,t){return Ri(e,"POST","/v1/accounts:signInWithPassword",xi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(e,t){return Ri(e,"POST","/v1/accounts:signInWithEmailLink",xi(e,t))}async function oS(e,t){return Ri(e,"POST","/v1/accounts:signInWithEmailLink",xi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends pc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new yi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new yi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return rS(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iS(t,{email:this._email,oobCode:this._password});default:Xe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return nS(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oS(t,{idToken:n,email:this._email,oobCode:this._password});default:Xe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t){return Ri(e,"POST","/v1/accounts:signInWithIdp",xi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="http://localhost";class Rn extends pc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Rn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=uc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Rn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return sr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,sr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,sr(t,n)}buildRequest(){const t={requestUri:sS,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ti(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lS(e){const t=br($r(e)).link,n=t?br($r(t)).deep_link_id:null,r=br($r(e)).deep_link_id;return(r?br($r(r)).link:null)||r||n||t||e}class mc{constructor(t){var n,r,i,o,s,a;const l=br($r(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=aS((i=l.mode)!==null&&i!==void 0?i:null);N(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=lS(t);try{return new mc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.providerId=Sr.PROVIDER_ID}static credential(t,n){return yi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=mc.parseLink(n);return N(r,"argument-error"),yi._fromEmailAndCode(t,r.code,r.tenantId)}}Sr.PROVIDER_ID="password";Sr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Vm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Ni{constructor(){super("facebook.com")}static credential(t){return Rn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Rn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Ni{constructor(){super("github.com")}static credential(t){return Rn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Ni{constructor(){super("twitter.com")}static credential(t,n){return Rn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(e,t){return Ri(e,"POST","/v1/accounts:signUp",xi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await En._fromIdTokenResponse(t,r,i),s=pd(r);return new Nn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=pd(r);return new Nn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function pd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends sn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Yo(t,n,r,i)}}function Wm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(e,o,t,r):o})}async function cS(e,t,n=!1){const r=await gi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Nn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const s=await gi(e,Wm(i,o,t,e),n);N(s.idToken,i,"internal-error");const a=dc(s.idToken);N(a,i,"internal-error");const{sub:l}=a;return N(e.uid===l,i,"user-mismatch"),Nn._forOperation(e,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Xe(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(e,t,n=!1){const r="signIn",i=await Wm(e,r,t),o=await Nn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function dS(e,t){return Hm(Vs(e),t)}async function hS(e,t,n){const r=Vs(e),i=await uS(r,{returnSecureToken:!0,email:t,password:n}),o=await Nn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function pS(e,t,n){return dS(ct(e),Sr.credential(t,n))}function mS(e,t,n,r){return ct(e).onAuthStateChanged(t,n,r)}function gS(e,t){return ct(e).updateCurrentUser(t)}function vS(e){return ct(e).signOut()}const Jo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(){const e=me();return hc(e)||Bs(e)}const wS=1e3,_S=10;class Gm extends Km{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yS()&&Z_(),this.fallbackToPolling=zm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);X_()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,_S):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},wS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Gm.type="LOCAL";const SS=Gm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm extends Km{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}qm.type="SESSION";const Qm=qm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ws(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await ES(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ws.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=gc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(d.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}function kS(e){at().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function CS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function PS(){return Ym()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="firebaseLocalStorageDb",xS=1,Xo="firebaseLocalStorage",Xm="fbase_key";class Ai{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hs(e,t){return e.transaction([Xo],t?"readwrite":"readonly").objectStore(Xo)}function OS(){const e=indexedDB.deleteDatabase(Jm);return new Ai(e).toPromise()}function ql(){const e=indexedDB.open(Jm,xS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Xo,{keyPath:Xm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Xo)?t(r):(r.close(),await OS(),t(await ql()))})})}async function md(e,t,n){const r=Hs(e,!0).put({[Xm]:t,value:n});return new Ai(r).toPromise()}async function RS(e,t){const n=Hs(e,!1).get(t),r=await new Ai(n).toPromise();return r===void 0?null:r.value}function gd(e,t){const n=Hs(e,!0).delete(t);return new Ai(n).toPromise()}const NS=800,AS=3;class Zm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ql(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>AS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ym()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ws._getInstance(PS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await CS(),!this.activeServiceWorker)return;this.sender=new IS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||TS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ql();return await md(t,Jo,"1"),await gd(t,Jo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>md(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>RS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>gd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Hs(i,!1).getAll();return new Ai(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zm.type="LOCAL";const DS=Zm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function MS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=st("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",LS().appendChild(r)})}function bS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Pi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(e,t){return t?yt(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends pc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return sr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return sr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return sr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function jS(e){return Hm(e.auth,new vc(e),e.bypassAuthState)}function US(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),fS(n,new vc(e),e.bypassAuthState)}async function FS(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),cS(n,new vc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return jS;case"linkViaPopup":case"linkViaRedirect":return FS;case"reauthViaPopup":case"reauthViaRedirect":return US;default:Xe(this.auth,"internal-error")}}resolve(t){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new Pi(2e3,1e4);class Yn extends eg{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const t=gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,zS.get())};t()}}Yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="pendingRedirect",mo=new Map;class VS extends eg{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=mo.get(this.auth._key());if(!t){try{const r=await WS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}mo.set(this.auth._key(),t)}return this.bypassAuthState||mo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WS(e,t){const n=GS(t),r=KS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function HS(e,t){mo.set(e._key(),t)}function KS(e){return yt(e._redirectPersistence)}function GS(e){return po(BS,e.config.apiKey,e.name)}async function qS(e,t,n=!1){const r=Vs(e),i=$S(r,t),s=await new VS(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=10*60*1e3;class YS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!JS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!tg(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(st(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=QS&&this.cachedEventUids.clear(),this.cachedEventUids.has(vd(t))}saveEventToCache(t){this.cachedEventUids.add(vd(t)),this.lastProcessedEventTime=Date.now()}}function vd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function tg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function JS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tg(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(e,t={}){return Oi(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eE=/^https?/;async function tE(e){if(e.config.emulator)return;const{authorizedDomains:t}=await XS(e);for(const n of t)try{if(nE(n))return}catch{}Xe(e,"unauthorized-domain")}function nE(e){const t=Gl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!eE.test(n))return!1;if(ZS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=new Pi(3e4,6e4);function yd(){const e=at().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function iE(e){return new Promise((t,n)=>{var r,i,o;function s(){yd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yd(),n(st(e,"network-request-failed"))},timeout:rE.get()})}if(!((i=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=at().gapi)===null||o===void 0)&&o.load)s();else{const a=bS("iframefcb");return at()[a]=()=>{gapi.load?s():n(st(e,"network-request-failed"))},MS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw go=null,t})}let go=null;function oE(e){return go=go||iE(e),go}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=new Pi(5e3,15e3),aE="__/auth/iframe",lE="emulator/auth/iframe",uE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fE(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?fc(t,lE):`https://${e.config.authDomain}/${aE}`,r={apiKey:t.apiKey,appName:e.name,v:zs},i=cE.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ti(r).slice(1)}`}async function dE(e){const t=await oE(e),n=at().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:fE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uE,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=st(e,"network-request-failed"),a=at().setTimeout(()=>{o(s)},sE.get());function l(){at().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pE=500,mE=600,gE="_blank",vE="http://localhost";class wd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yE(e,t,n,r=pE,i=mE){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hE),{width:r.toString(),height:i.toString(),top:o,left:s}),u=me().toLowerCase();n&&(a=bm(u)?gE:n),Mm(u)&&(t=t||vE,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(J_(u)&&a!=="_self")return wE(t||"",a),new wd(null);const h=window.open(t||"",a,c);N(h,e,"popup-blocked");try{h.focus()}catch{}return new wd(h)}function wE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="__/auth/handler",SE="emulator/auth/handler";function _d(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:zs,eventId:i};if(t instanceof Vm){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",y1(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof Ni){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${EE(e)}?${Ti(a).slice(1)}`}function EE({config:e}){return e.emulator?fc(e,SE):`https://${e.authDomain}/${_E}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="webStorageSupport";class IE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qm,this._completeRedirectFn=qS,this._overrideRedirectResult=HS}async _openPopup(t,n,r,i){var o;Tt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=_d(t,n,r,Gl(),i);return yE(t,s,gc())}async _openRedirect(t,n,r,i){return await this._originValidation(t),kS(_d(t,n,r,Gl(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Tt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await dE(t),r=new YS(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send($a,{type:$a},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[$a];s!==void 0&&n(!!s),Xe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tE(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return zm()||hc()||Bs()}}const kE=IE;var Sd="@firebase/auth",Ed="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PE(e){Ct(new ut("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{N(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),N(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bm(e)},c=new tS(a,l,u);return L_(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ct(new ut("auth-internal",t=>{const n=Vs(t.getProvider("auth").getImmediate());return(r=>new CE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(Sd,Ed,TE(e)),ot(Sd,Ed,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(e=Cm()){const t=_r(e,"auth");return t.isInitialized()?t.getImmediate():D_(e,{popupRedirectResolver:kE,persistence:[DS,SS,Qm]})}PE("Browser");var OE="firebase",RE="9.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot(OE,RE,"app");const ng="@firebase/installations",yc="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=1e4,ig=`w:${yc}`,og="FIS_v2",NE="https://firebaseinstallations.googleapis.com/v1",AE=60*60*1e3,DE="installations",LE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},An=new bn(DE,LE,ME);function sg(e){return e instanceof sn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag({projectId:e}){return`${NE}/projects/${e}/installations`}function lg(e){return{token:e.token,requestStatus:2,expiresIn:$E(e.expiresIn),creationTime:Date.now()}}async function ug(e,t){const r=(await t.json()).error;return An.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function cg({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function bE(e,{refreshToken:t}){const n=cg(e);return n.append("Authorization",jE(t)),n}async function fg(e){const t=await e();return t.status>=500&&t.status<600?e():t}function $E(e){return Number(e.replace("s","000"))}function jE(e){return`${og} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ag(e),i=cg(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:og,appId:e.appId,sdkVersion:ig},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await fg(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:lg(u.authToken)}}else throw await ug("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=/^[cdef][\w-]{21}$/,Ql="";function BE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=VE(e);return zE.test(n)?n:Ql}catch{return Ql}}function VE(e){return FE(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Map;function pg(e,t){const n=Ks(e);mg(n,t),WE(n,t)}function mg(e,t){const n=hg.get(e);if(!!n)for(const r of n)r(t)}function WE(e,t){const n=HE();n&&n.postMessage({key:e,fid:t}),KE()}let yn=null;function HE(){return!yn&&"BroadcastChannel"in self&&(yn=new BroadcastChannel("[Firebase] FID Change"),yn.onmessage=e=>{mg(e.data.key,e.data.fid)}),yn}function KE(){hg.size===0&&yn&&(yn.close(),yn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="firebase-installations-database",qE=1,Dn="firebase-installations-store";let ja=null;function wc(){return ja||(ja=Im(GE,qE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Dn)}}})),ja}async function Zo(e,t){const n=Ks(e),i=(await wc()).transaction(Dn,"readwrite"),o=i.objectStore(Dn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&pg(e,t.fid),t}async function gg(e){const t=Ks(e),r=(await wc()).transaction(Dn,"readwrite");await r.objectStore(Dn).delete(t),await r.done}async function Gs(e,t){const n=Ks(e),i=(await wc()).transaction(Dn,"readwrite"),o=i.objectStore(Dn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&pg(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _c(e){let t;const n=await Gs(e.appConfig,r=>{const i=QE(r),o=YE(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Ql?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function QE(e){const t=e||{fid:BE(),registrationStatus:0};return vg(t)}function YE(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(An.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=JE(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:XE(e)}:{installationEntry:t}}async function JE(e,t){try{const n=await UE(e,t);return Zo(e.appConfig,n)}catch(n){throw sg(n)&&n.customData.serverCode===409?await gg(e.appConfig):await Zo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function XE(e){let t=await Id(e.appConfig);for(;t.registrationStatus===1;)await dg(100),t=await Id(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _c(e);return r||n}return t}function Id(e){return Gs(e,t=>{if(!t)throw An.create("installation-not-found");return vg(t)})}function vg(e){return ZE(e)?{fid:e.fid,registrationStatus:0}:e}function ZE(e){return e.registrationStatus===1&&e.registrationTime+rg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI({appConfig:e,heartbeatServiceProvider:t},n){const r=tI(e,n),i=bE(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:ig,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await fg(()=>fetch(r,a));if(l.ok){const u=await l.json();return lg(u)}else throw await ug("Generate Auth Token",l)}function tI(e,{fid:t}){return`${ag(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(e,t=!1){let n;const r=await Gs(e.appConfig,o=>{if(!yg(o))throw An.create("not-registered");const s=o.authToken;if(!t&&iI(s))return o;if(s.requestStatus===1)return n=nI(e,t),o;{if(!navigator.onLine)throw An.create("app-offline");const a=sI(o);return n=rI(e,a),a}});return n?await n:r.authToken}async function nI(e,t){let n=await kd(e.appConfig);for(;n.authToken.requestStatus===1;)await dg(100),n=await kd(e.appConfig);const r=n.authToken;return r.requestStatus===0?Sc(e,t):r}function kd(e){return Gs(e,t=>{if(!yg(t))throw An.create("not-registered");const n=t.authToken;return aI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function rI(e,t){try{const n=await eI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Zo(e.appConfig,r),n}catch(n){if(sg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await gg(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Zo(e.appConfig,r)}throw n}}function yg(e){return e!==void 0&&e.registrationStatus===2}function iI(e){return e.requestStatus===2&&!oI(e)}function oI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+AE}function sI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function aI(e){return e.requestStatus===1&&e.requestTime+rg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(e){const t=e,{installationEntry:n,registrationPromise:r}=await _c(t);return r?r.catch(console.error):Sc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(e,t=!1){const n=e;return await cI(n),(await Sc(n,t)).token}async function cI(e){const{registrationPromise:t}=await _c(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(e){if(!e||!e.options)throw Ua("App Configuration");if(!e.name)throw Ua("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ua(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ua(e){return An.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="installations",dI="installations-internal",hI=e=>{const t=e.getProvider("app").getImmediate(),n=fI(t),r=_r(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},pI=e=>{const t=e.getProvider("app").getImmediate(),n=_r(t,wg).getImmediate();return{getId:()=>lI(n),getToken:i=>uI(n,i)}};function mI(){Ct(new ut(wg,hI,"PUBLIC")),Ct(new ut(dI,pI,"PRIVATE"))}mI();ot(ng,yc);ot(ng,yc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="analytics",gI="firebase_id",vI="origin",yI=60*1e3,wI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_g="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new sc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function _I(e,t){const n=document.createElement("script");n.src=`${_g}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function SI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function EI(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Sg(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){xe.error(a)}e("config",i,o)}async function II(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Sg(n);for(const l of s){const u=a.find(h=>h.measurementId===l),c=u&&t[u.appId];if(c)o.push(c);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){xe.error(o)}}function kI(e,t,n,r){async function i(o,s,a){try{o==="event"?await II(e,t,n,s,a):o==="config"?await EI(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){xe.error(l)}}return i}function CI(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=kI(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function TI(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(_g))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ue=new bn("analytics","Analytics",PI);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=30,OI=1e3;class RI{constructor(t={},n=OI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Eg=new RI;function NI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function AI(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:NI(r)},o=wI.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ue.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function DI(e,t=Eg,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Ue.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ue.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new bI;return setTimeout(async()=>{a.abort()},n!==void 0?n:yI),Ig({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Ig(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Eg){var o,s;const{appId:a,measurementId:l}=e;try{await LI(r,t)}catch(u){if(l)return xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(o=u)===null||o===void 0?void 0:o.message}]`),{appId:a,measurementId:l};throw u}try{const u=await AI(e);return i.deleteThrottleMetadata(a),u}catch(u){const c=u;if(!MI(c)){if(i.deleteThrottleMetadata(a),l)return xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?ed(n,i.intervalMillis,xI):ed(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(a,d),xe.debug(`Calling attemptFetch again in ${h} millis`),Ig(e,d,r,i)}}function LI(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Ue.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function MI(e){if(!(e instanceof sn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class bI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function $I(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(){var e;if(wm())try{await _m()}catch(t){return xe.warn(Ue.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return xe.warn(Ue.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function UI(e,t,n,r,i,o,s){var a;const l=DI(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&xe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>xe.error(g)),t.push(l);const u=jI().then(g=>{if(g)return r.getId()}),[c,h]=await Promise.all([l,u]);TI()||_I(o,c.measurementId),i("js",new Date);const d=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return d[vI]="firebase",d.update=!0,h!=null&&(d[gI]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(t){this.app=t}_delete(){return delete qr[this.app.options.appId],Promise.resolve()}}let qr={},Cd=[];const Td={};let Fa="dataLayer",zI="gtag",Pd,kg,xd=!1;function BI(){const e=[];if(ym()&&e.push("This is a browser extension environment."),p1()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ue.create("invalid-analytics-context",{errorInfo:t});xe.warn(n.message)}}function VI(e,t,n){BI();const r=e.options.appId;if(!r)throw Ue.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ue.create("no-api-key");if(qr[r]!=null)throw Ue.create("already-exists",{id:r});if(!xd){SI(Fa);const{wrappedGtag:o,gtagCore:s}=CI(qr,Cd,Td,Fa,zI);kg=o,Pd=s,xd=!0}return qr[r]=UI(e,Cd,Td,t,Pd,Fa,n),new FI(e)}function WI(e=Cm()){e=ct(e);const t=_r(e,es);return t.isInitialized()?t.getImmediate():HI(e)}function HI(e,t={}){const n=_r(e,es);if(n.isInitialized()){const i=n.getImmediate();if(pi(t,n.getOptions()))return i;throw Ue.create("already-initialized")}return n.initialize({options:t})}function KI(e,t,n,r){e=ct(e),$I(kg,qr[e.app.options.appId],t,n,r).catch(i=>xe.error(i))}const Od="@firebase/analytics",Rd="0.8.0";function GI(){Ct(new ut(es,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return VI(r,i,n)},"PUBLIC")),Ct(new ut("analytics-internal",e,"PRIVATE")),ot(Od,Rd),ot(Od,Rd,"esm2017");function e(t){try{const n=t.getProvider(es).getImmediate();return{logEvent:(r,i,o)=>KI(n,r,i,o)}}catch(n){throw Ue.create("interop-component-reg-failed",{reason:n})}}}GI();const qI={apiKey:"AIzaSyD4PQkPIfcDB7xZlK_Hmakm0HZbUlfpd7E",authDomain:"twitterrrrr-a7b69.firebaseapp.com",projectId:"twitterrrrr-a7b69",storageBucket:"twitterrrrr-a7b69.appspot.com",messagingSenderId:"845447790177",appId:"1:845447790177:web:3a39bd689254c1210cf420"},Cg=S_(qI);WI(Cg);const wi=xE(Cg),QI={name:"",email:"",phone:"",mounth:"",day:"",year:"",password:"",error:null},YI=ic("auth/register",async({name:e,email:t,password:n},{rejectWithValue:r})=>{try{await hS(wi,t,n),gS(wi,{displayName:e})}catch(i){return r(i.code)}}),JI=ic("auth/login",async({email:e,password:t},{rejectWithValue:n})=>{try{await pS(wi,e,t)}catch(r){return n(r.code)}});ic("auth/singOut",async()=>{await vS(wi)});const Tg=pm({name:"auth",initialState:QI,reducers:{changeName:(e,t)=>{e.name=t.payload},changeEmail:(e,t)=>{e.email=t.payload},changePassword:(e,t)=>{e.password=t.payload},changePhone:(e,t)=>{e.phone=t.payload},changeMounth:(e,t)=>{e.mounth=t.payload},changeDay:(e,t)=>{e.day=t.payload},changeYear:(e,t)=>{e.year=t.payload}},extraReducers:e=>{e.addCase(YI.rejected,(t,n)=>{t.error=n.payload}).addCase(JI.rejected,(t,n)=>{t.error=n.payload})}}),{changeName:XI,changeYear:ZI,changeDay:ek,changeMounth:tk,changePhone:nk,changeEmail:rk,changePassword:Ek}=Tg.actions,ik=Tg.reducer;function za({...e}){const[t,n]=Ge.useState(!1),r=Fs(),i=o=>{e.placeholder==="Day"&&(r(ek(o.target.value)),n(!0)),e.placeholder==="Mounth"&&(r(tk(o.target.value)),n(!0)),e.placeholder==="Year"&&(r(ZI(o.target.value)),n(!0))};return console.log(pt(o=>o.auth)),Z("label",{className:`${e.css} relative block`,children:[Z("select",{onChange:i,className:"w-full h-14 border-2 outline-none bg-black px-3  border-[#333639] focus:border-[#1D9BF0] rounded-lg peer relative pt-3",children:[k("option",{value:"",selected:!0,disabled:!0,hidden:!0}),e.dataSource.map((o,s)=>k("option",{value:o,children:o},s))]}),k("small",{className:P0({"absolute flex text-lg top-1/2 text-[#E7E9EA] left-3 -translate-y-1/2 cursor-text pointer-events-none scale-[0.8333] peer-focus:scale-[0.8333]  peer-focus:top-3  peer-focus:text-[#1D9BF0] transition-all":!0,"top-3":t===!0}),children:e.placeholder})]})}function Ba({...e}){const[t,n]=Ge.useState(0),r=Fs(),i=o=>{e.placeholder==="Name"&&(r(XI(o.target.value)),n(o.target.value.length)),e.placeholder==="Email"&&(r(rk(o.target.value)),n(o.target.value.length)),e.placeholder==="Phone"&&(r(nk(o.target.value)),n(o.target.value.length))};return console.log(pt(o=>o.auth)),Z("label",{className:"block relative py-3 ",children:[k("input",{className:`${e.css} w-full  h-16 border-2 outline-none bg-black px-3  border-[#333639] rounded-lg focus:border-[#1D9BF0] peer`,type:e.type,maxLength:e.maxLength,required:!0,onChange:i}),k("small",{className:" absolute flex text-lg text-[#E7E9EA] top-1/2 left-3 -translate-y-1/2 cursor-text pointer-events-none peer-valid:scale-[0.8333] peer-focus:scale-[0.8333] peer-focus:top-6 peer-valid:top-6 peer-valid:text-[#1D9BF0] peer-focus:text-[#1D9BF0] transition-all",children:e.placeholder}),Z("small",{className:" absolute flex text-lg text-[#E7E9EA]  right-2 -translate-y-1/2 cursor-text pointer-events-none top-6 scale-[0.8333] invisible  peer-focus:visible ",children:[t," / ",e.maxLength]})]})}const ok=()=>{const[e,t]=Ge.useState(!1),[n,r]=Ge.useState([]),[i,o]=Ge.useState([]),[s,a]=Ge.useState([]);return Ge.useEffect(()=>{r(["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]),o(["January","February","March","April","May","June","July","August","September","October","November","December"]),a(["1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"])},[]),Z("div",{children:[k(Ba,{type:"text",placeholder:"Name",maxLength:"50"}),e?k(Ba,{type:"tel",placeholder:"Phone",maxLength:"30"}):k(Ba,{type:"text",placeholder:"Email",maxLength:"30"}),k("div",{className:"text-right",children:k("span",{onClick:()=>{t(!e)},className:"cursor-pointer text-[#1D9BF0] underline-offset-2  ",children:e?"Switch to email":"Switch to phone"})}),Z("div",{className:"mt-5",children:[k("h3",{className:"text-[15px] text-[#E7E9EA] mb-2 font-bold",children:"Date of birth"}),k("p",{className:"text[#71767B] text-[14px]",children:"This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else."})]}),Z("div",{className:"my-4 flex flex-row gap-x-4",children:[k(za,{dataSource:i,placeholder:"Mounth",css:" basis-1/2"}),k(za,{dataSource:n,placeholder:"Day",css:" basis-1/4"}),k(za,{dataSource:s,placeholder:"Year",css:" basis-1/4"})]})]})};function Va({...e}){return k("div",{className:"p-3",children:Z("button",{className:" flex flex-col py-3  w-full  h-16 border-2 outline-none bg-black px-3  border-[#333639] rounded-lg  ",children:[k("div",{className:"  flex text-lg text-[#E7E9EA] left-3 -translate-y-1/2 scale-[0.8333]   ",children:e.placeholder}),k("div",{className:`${e.css} -mt-3 mx-2`,children:e.defaultValue})]})})}const sk=({setPage:e})=>{const t=pt(s=>s.auth.email);pt(s=>s.auth.phone);const n=pt(s=>s.auth.name),r=pt(s=>s.auth.day),i=pt(s=>s.auth.mounth),o=pt(s=>s.auth.year);return Z("div",{children:[k(Va,{placeholder:"Name",defaultValue:n,setPage:e}),k(Va,{placeholder:"Email",defaultValue:t,setPage:e}),k(Va,{placeholder:"Birth Date",defaultValue:i+" "+r+","+o,setPage:e})]})},ak=()=>k("div",{children:"OtherInfo"}),lk="/TwitterClone/assets/Close.a9c6718f.svg",uk="/TwitterClone/assets/BackArrow.efeee6ba.svg",ck={emailModal:!1,googleModal:!1,appleModal:!1,page:0},Pg=pm({name:"login",initialState:ck,reducers:{stateChangeEmail:e=>{e.emailModal=!e.emailModal},stateChangePage:(e,t)=>{e.page=t.payload}}}),{stateChangeEmail:xg,stateChangeGoogle:Ik,stateChangeApple:kk,stateChangePage:Ck}=Pg.actions,fk=Pg.reducer,dk=()=>{const[e,t]=A.exports.useState(0),n=["Create your account","Personal Info","Other"],r=Fs(),i=()=>e===0?k(ok,{}):e===1?k(sk,{}):k(ak,{});return k(Ju,{children:Z("div",{className:"absolute m-auto top-0 left-0 bottom-0 right-0 bg-black w-[600px] h-[650px] text-[#E7E9EA] rounded-2xl",children:[Z("div",{className:"flex items-center h-[53px] px-4 text-xl font-bold  ",children:[k("button",{className:"min-w-[56px] h-[28px]  ",children:k("h1",{className:"h-[28px] w-[28px] rounded-full hover:opacity-100 hover:bg-white hover:bg-opacity-20 p-1 ",children:e===0?k("button",{onClick:()=>{r(xg())},children:k("img",{src:lk,className:" pb-3",alt:"logo"})}):k("button",{onClick:()=>{t(e-1)},children:k("img",{src:uk,className:" pb-3",alt:"logo"})})})}),Z("h1",{children:["Step ",e+1," of ",n.length]})]}),k("div",{className:"px-20  ",children:Z("div",{children:[k("h1",{className:"h-[76px] flex items-center text-[31px] font-bold text-white",children:n[e]}),i()]})}),k("div",{className:"px-20 ",children:k("button",{disabled:e===n.length-1,onClick:()=>{t(e+1)},className:"w-full h-[50px] bg-white rounded-full text-black my-6  ",children:e===0?"Next":e===1?"Sign Up":"Finish"})})]})})},hk="/TwitterClone/assets/Logo.329419cc.svg",pk="/TwitterClone/assets/Logo2.55401de0.svg";function Zi({children:e,...t}){return k("button",{className:`${t.css} border border-white bg-white rounded-full flex items-center justify-center min-w-[300px] min-h-[40px] text-black text-[15px]  py-[2px] px-[10px]`,...t,children:e})}const mk=()=>{const e=pt(n=>n.login.emailModal),t=Fs();return Z(Ju,{children:[e?k(dk,{}):null,Z("div",{className:"flex grid-cols-2 h-full ",children:[k("div",{className:"bg-login-bg bg-center w-full flex justify-center items-center p-8",children:k("img",{src:hk,className:"max-h-[380px]",alt:"logo"})}),k("div",{className:" min-w-[45vw] bg-black p-4 flex items-center ",children:k("div",{className:"p-5",children:Z("div",{className:"text-[#E7E9EA] font-extrabold  ",children:[k("img",{src:pk,className:" pb-3",alt:"logo"}),k("h1",{className:"my-12 text-[64px] tracking-[-1.2px]",children:"Happening now"}),k("h3",{className:"mb-8 text-[31px]",children:"Join Twitter today."}),k(Zi,{css:"mb-[20px]",children:"Sign up with Google"}),k(Zi,{children:"Sign up with Apple"}),Z("div",{className:"flex justify-center items-center my-1 max-w-[300px]",children:[k("div",{className:"flex-auto h-[2px] bg-white opacity-20"}),k("div",{className:"mx-2 text-[15px]",children:"or"}),k("div",{className:"flex-auto h-[2px] bg-white opacity-20"})]}),k(Zi,{onClick:()=>{t(xg())},css:"bg-[#1A8CD8] border-[#1A8CD8] text-white mb-[8px]",children:"Sign up with phone or email"}),Z("h5",{className:"text-[11px] mb-5 text-[#71767B]",children:["By signing up, you agree to the Terms of Service and Privacy",k("br",{}),"Policy, including Cookie Use."]}),Z("div",{className:"mt-10",children:[k("h3",{className:"mb-5",children:"Already have an account?"}),k(Zi,{css:"bg-[#000] text-[#1D9BF0] border-[#1D9BF0]",children:"Sign in"})]})]})})})]})]})},gk=()=>k("div",{children:"Login"}),vk=()=>k("div",{children:"Register"}),yk=()=>{const[e,t]=Ge.useState(null);return Ge.useEffect(()=>{console.log("ben cal\u0131st\u0131m"),mS(wi,n=>{console.log(n),t(!!n)})},[]),e},wk=()=>yk()?k(I0,{}):k(E0,{to:"/login"}),_k=()=>k(Ju,{children:Z(C0,{children:[k(Lr,{element:k(wk,{})}),k(Lr,{path:"/*",exact:!0,element:k(mk,{})}),k(Lr,{path:"/login",element:k(gk,{})}),k(Lr,{path:"/register",element:k(vk,{})})]})});const Sk=Jw({reducer:{auth:ik,login:fk}});Wa.createRoot(document.getElementById("root")).render(k(Ge.StrictMode,{children:k(yw,{store:Sk,children:k(T0,{children:k(_k,{})})})}));
