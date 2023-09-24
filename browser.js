// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function o(r,n,t){var o=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var n,e,a;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!t(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==n)&&(a=4294967295+a+1),a<0?(e=(-a).toString(n),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(n),a||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):i.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var n,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((n=r.precision)>0&&(n-=1),e=o.toExponential(n)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,w,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,b,"e-0$1"),r.alternate&&(e=p.call(e,v,"$1."),e=p.call(e,g,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function E(r,n,t){var e=n-r.length;return e<0?r:r=t?r+j(e):j(e)+r}var A=String.fromCharCode,_=isNaN,O=Array.isArray;function T(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function N(r){var n,t,e,i,u,c,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(e=r[s]))c+=e;else{if(n=void 0!==e.precision,!(e=T(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):A(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=E(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function U(r){var n,t,e,o;for(t=[],o=0,e=S.exec(r);e;)(n=r.slice(o,S.lastIndex-e[0].length)).length&&t.push(n),t.push(x(e)),o=S.lastIndex,e=S.exec(r);return(n=r.slice(o)).length&&t.push(n),t}function B(r){return"string"==typeof r}function F(r){var n,t,e;if(!B(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=U(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return N.apply(null,t)}var I,V=Object.prototype,k=V.toString,P=V.__defineGetter__,L=V.__defineSetter__,M=V.__lookupGetter__,C=V.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(M.call(r,n)||C.call(r,n)?(e=r.__proto__,r.__proto__=V,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,n,t.get),u&&L&&L.call(r,n,t.set),r};var G=I;function R(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var $=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function q(r,n){return null!=r&&Y.call(r,n)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"",J=X()?function(r){var n,t,e;if(null==r)return Z.call(r);t=r[D],n=q(r,D);try{r[D]=void 0}catch(n){return Z.call(r)}return e=Z.call(r),n?r[D]=t:delete r[D],e}:function(r){return Z.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=X();function nr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return H(r)||nr(r)}function er(){return new Function("return this;")()}R(tr,"isPrimitive",H),R(tr,"isObject",nr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="object"==typeof globalThis?globalThis:null,ar=function(r){if(arguments.length){if(!H(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ur)return ur;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=ar.document&&ar.document.childNodes,cr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr,pr=/^\s*function\s*([^(]*)/i;R(lr,"REGEXP",pr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var yr=sr;function br(r){return null!==r&&"object"==typeof r}var vr=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var t,e;if(!yr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(br);function gr(r){var n,t,e,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=pr.exec(e.toString()))return n[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}R(br,"isObjectLikeArray",vr);var dr="function"==typeof $||"object"==typeof cr||"function"==typeof fr?function(r){return gr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"==(n=typeof r)?gr(r).toLowerCase():n};function wr(r){return"function"===dr(r)}var hr=/./;function mr(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function jr(r){return"boolean"==typeof r}var Er=Boolean.prototype.toString,Ar=X();function _r(r){return"object"==typeof r&&(r instanceof K||(Ar?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Or(r){return jr(r)||_r(r)}function Tr(){return new Function("return this;")()}mr(Or,"isPrimitive",jr),mr(Or,"isObject",_r);var Nr="object"==typeof self?self:null,Sr="object"==typeof window?window:null,xr="object"==typeof globalThis?globalThis:null,Ur=function(r){if(arguments.length){if(!jr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Tr()}if(xr)return xr;if(Nr)return Nr;if(Sr)return Sr;throw new Error("unexpected error. Unable to resolve global object.")}(),Br=Ur.document&&Ur.document.childNodes,Fr=Int8Array;function Ir(){return/^\s*function\s*([^(]*)/i}var Vr=/^\s*function\s*([^(]*)/i;function kr(r){return null!==r&&"object"==typeof r}mr(Ir,"REGEXP",Vr);var Pr=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var t,e;if(!yr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(kr);function Lr(r){var n,t,e,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=Vr.exec(e.toString()))return n[1]}return kr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}mr(kr,"isObjectLikeArray",Pr);var Mr="function"==typeof hr||"object"==typeof Fr||"function"==typeof Br?function(r){return Lr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"==(n=typeof r)?Lr(r).toLowerCase():n};function Cr(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&function(r){return"function"===Mr(r)}(r.next)}function Gr(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Rr(r){return"number"==typeof r}var $r=Number,Hr=$r.prototype.toString,Wr=X();function Xr(r){return"object"==typeof r&&(r instanceof $r||(Wr?function(r){try{return Hr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Zr(r){return Rr(r)||Xr(r)}Gr(Zr,"isPrimitive",Rr),Gr(Zr,"isObject",Xr);var Yr="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null,qr=/./;function zr(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Dr(r){return"boolean"==typeof r}var Jr=Boolean.prototype.toString,Kr=X();function Qr(r){return"object"==typeof r&&(r instanceof K||(Kr?function(r){try{return Jr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function rn(r){return Dr(r)||Qr(r)}function nn(){return new Function("return this;")()}zr(rn,"isPrimitive",Dr),zr(rn,"isObject",Qr);var tn="object"==typeof self?self:null,en="object"==typeof window?window:null,on="object"==typeof globalThis?globalThis:null,un=function(r){if(arguments.length){if(!Dr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nn()}if(on)return on;if(tn)return tn;if(en)return en;throw new Error("unexpected error. Unable to resolve global object.")}(),an=un.document&&un.document.childNodes,fn=Int8Array;function cn(){return/^\s*function\s*([^(]*)/i}var ln=/^\s*function\s*([^(]*)/i;function sn(r){return null!==r&&"object"==typeof r}zr(cn,"REGEXP",ln);var pn=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var t,e;if(!yr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(sn);function yn(r){var n,t,e,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=ln.exec(e.toString()))return n[1]}return sn(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}zr(sn,"isObjectLikeArray",pn);var bn="function"==typeof qr||"object"==typeof fn||"function"==typeof an?function(r){return yn(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"==(n=typeof r)?yn(r).toLowerCase():n};function vn(r){return"function"===bn(r)}var gn=Object,dn=/./;function wn(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function hn(r){return"boolean"==typeof r}var mn=Boolean.prototype.toString,jn=X();function En(r){return"object"==typeof r&&(r instanceof K||(jn?function(r){try{return mn.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function An(r){return hn(r)||En(r)}function _n(){return new Function("return this;")()}wn(An,"isPrimitive",hn),wn(An,"isObject",En);var On="object"==typeof self?self:null,Tn="object"==typeof window?window:null,Nn="object"==typeof globalThis?globalThis:null,Sn=function(r){if(arguments.length){if(!hn(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return _n()}if(Nn)return Nn;if(On)return On;if(Tn)return Tn;throw new Error("unexpected error. Unable to resolve global object.")}(),xn=Sn.document&&Sn.document.childNodes,Un=Int8Array;function Bn(){return/^\s*function\s*([^(]*)/i}var Fn=/^\s*function\s*([^(]*)/i;function In(r){return null!==r&&"object"==typeof r}wn(Bn,"REGEXP",Fn);var Vn=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var t,e;if(!yr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(In);function kn(r){var n,t,e,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=Fn.exec(e.toString()))return n[1]}return In(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}wn(In,"isObjectLikeArray",Vn);var Pn,Ln,Mn="function"==typeof dn||"object"==typeof Un||"function"==typeof xn?function(r){return kn(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"==(n=typeof r)?kn(r).toLowerCase():n},Cn=Object.getPrototypeOf;Ln=Object.getPrototypeOf,Pn="function"===Mn(Ln)?Cn:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Gn=Pn,Rn=Object.prototype;function $n(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(n=function(r){return null==r?null:(r=gn(r),Gn(r))}(r),!n||!q(r,"constructor")&&q(n,"constructor")&&vn(n.constructor)&&"[object Function]"===J(n.constructor)&&q(n,"isPrototypeOf")&&vn(n.isPrototypeOf)&&(n===Rn||function(r){var n;for(n in r)if(!q(r,n))return!1;return!0}(r)))}function Hn(r,n){return $n(n)?(q(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",n))}function Wn(r,n,t){var e,o,i,u;if(!Cr(r))throw new TypeError(F("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(n))throw new TypeError(F("invalid argument. Second argument must be a function. Value: `%s`.",n));if(e={invalid:NaN},arguments.length>2&&(i=Hn(e,t)))throw i;return R(o={},"next",a),R(o,"return",f),Yr&&wr(r[Yr])&&R(o,Yr,c),o;function a(){var t;return u?{done:!0}:(t=r.next()).done?(u=!0,t):{value:Rr(t.value)?n(t.value):e.invalid,done:!1}}function f(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return Wn(r[Yr](),n,e)}}function Xn(r){return r!=r}var Zn=Number.POSITIVE_INFINITY,Yn=$r.NEGATIVE_INFINITY;function qn(r){return r===Zn||r===Yn}function zn(r){return Math.abs(r)}var Dn,Jn="function"==typeof Uint32Array,Kn="function"==typeof Uint32Array?Uint32Array:null,Qn="function"==typeof Uint32Array?Uint32Array:void 0;Dn=function(){var r,n;if("function"!=typeof Kn)return!1;try{r=function(r){return Jn&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(n=new Kn(n=[1,3.14,-3.14,4294967296,4294967297]))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Qn:function(){throw new Error("not implemented")};var rt,nt=Dn,tt="function"==typeof Float64Array,et="function"==typeof Float64Array?Float64Array:null,ot="function"==typeof Float64Array?Float64Array:void 0;rt=function(){var r,n;if("function"!=typeof et)return!1;try{r=function(r){return tt&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(n=new et([1,3.14,-3.14,NaN]))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?ot:function(){throw new Error("not implemented")};var it,ut=rt,at="function"==typeof Uint8Array,ft="function"==typeof Uint8Array?Uint8Array:null,ct="function"==typeof Uint8Array?Uint8Array:void 0;it=function(){var r,n;if("function"!=typeof ft)return!1;try{r=function(r){return at&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(n=new ft(n=[1,3.14,-3.14,256,257]))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ct:function(){throw new Error("not implemented")};var lt,st=it,pt="function"==typeof Uint16Array,yt="function"==typeof Uint16Array?Uint16Array:null,bt="function"==typeof Uint16Array?Uint16Array:void 0;lt=function(){var r,n;if("function"!=typeof yt)return!1;try{r=function(r){return pt&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(n=new yt(n=[1,3.14,-3.14,65536,65537]))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?bt:function(){throw new Error("not implemented")};var vt,gt={uint16:lt,uint8:st};(vt=new gt.uint16(1))[0]=4660;var dt=52===new gt.uint8(vt.buffer)[0],wt=!0===dt?1:0,ht=new ut(1),mt=new nt(ht.buffer);function jt(r){return ht[0]=r,mt[wt]}function Et(r,n){var t,e,o,i;return o=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*e-r*n))}var At=-.16666666666666632;function _t(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(At+o*t):r-(o*(.5*n-e*t)-n-e*At)}var Ot,Tt,Nt=2147483647,St=2146435072,xt=1048575,Ut=!0===dt?0:1,Bt=new ut(1),Ft=new nt(Bt.buffer);!0===dt?(Ot=1,Tt=0):(Ot=0,Tt=1);var It={HIGH:Ot,LOW:Tt},Vt=new ut(1),kt=new nt(Vt.buffer),Pt=It.HIGH,Lt=It.LOW;function Mt(r,n){return kt[Pt]=r,kt[Lt]=n,Vt[0]}var Ct,Gt,Rt=Math.floor,$t=1023;!0===dt?(Ct=1,Gt=0):(Ct=0,Gt=1);var Ht={HIGH:Ct,LOW:Gt},Wt=new ut(1),Xt=new nt(Wt.buffer),Zt=Ht.HIGH,Yt=Ht.LOW;function qt(r,n,t,e){return Wt[0]=r,n[e]=Xt[Zt],n[e+t]=Xt[Yt],n}function zt(r){return qt(r,[0,0],1,0)}!function(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}(zt,"assign",qt);var Dt=[0,0];function Jt(r,n){var t,e;return zt.assign(r,Dt,1,0),t=Dt[0],t&=Nt,e=jt(n),Mt(t|=e&=2147483648,Dt[1])}function Kt(r,n,t,e){return Xn(r)||qn(r)?(n[e]=r,n[e+t]=0,n):0!==r&&zn(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}!function(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}((function(r){return Kt(r,[0,0],1,0)}),"assign",Kt);var Qt=[0,0],re=[0,0];function ne(r,n){var t,e;return 0===n||0===r||Xn(r)||qn(r)?r:(Kt(r,Qt,1,0),n+=Qt[1],n+=function(r){var n=jt(r);return(n=(n&St)>>>20)-$t|0}(r=Qt[0]),n<-1074?Jt(0,r):n>1023?r<0?Yn:Zn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,zt.assign(r,re,1,0),t=re[0],t&=2148532223,e*Mt(t|=n+$t<<20,re[1])))}function te(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var ee=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],oe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ie=16777216,ue=5.960464477539063e-8,ae=te(20),fe=te(20),ce=te(20),le=te(20);function se(r,n,t,e,o,i,u,a,f){var c,l,s,p,y,b,v,g,d;for(p=i,d=e[t],g=t,y=0;g>0;y++)l=ue*d|0,le[y]=d-ie*l|0,d=e[g-1]+l,g-=1;if(d=ne(d,o),d-=8*Rt(.125*d),d-=v=0|d,s=0,o>0?(v+=y=le[t-1]>>24-o,le[t-1]-=y<<24-o,s=le[t-1]>>23-o):0===o?s=le[t-1]>>23:d>=.5&&(s=2),s>0){for(v+=1,c=0,y=0;y<t;y++)g=le[y],0===c?0!==g&&(c=1,le[y]=16777216-g):le[y]=16777215-g;if(o>0)switch(o){case 1:le[t-1]&=8388607;break;case 2:le[t-1]&=4194303}2===s&&(d=1-d,0!==c&&(d-=ne(1,o)))}if(0===d){for(g=0,y=t-1;y>=i;y--)g|=le[y];if(0===g){for(b=1;0===le[i-b];b++);for(y=t+1;y<=t+b;y++){for(f[a+y]=ee[u+y],l=0,g=0;g<=a;g++)l+=r[g]*f[a+(y-g)];e[y]=l}return se(r,n,t+=b,e,o,i,u,a,f)}}if(0===d)for(t-=1,o-=24;0===le[t];)t-=1,o-=24;else(d=ne(d,-o))>=ie?(l=ue*d|0,le[t]=d-ie*l|0,o+=24,le[t+=1]=l):le[t]=0|d;for(l=ne(1,o),y=t;y>=0;y--)e[y]=l*le[y],l*=ue;for(y=t;y>=0;y--){for(l=0,b=0;b<=p&&b<=t-y;b++)l+=oe[b]*e[y+b];ce[t-y]=l}for(l=0,y=t;y>=0;y--)l+=ce[y];for(n[0]=0===s?l:-l,l=ce[0]-l,y=1;y<=t;y++)l+=ce[y];return n[1]=0===s?l:-l,7&v}function pe(r,n,t,e){var o,i,u,a,f,c,l;for((i=(t-3)/24|0)<0&&(i=0),a=t-24*(i+1),c=i-(u=e-1),l=u+4,f=0;f<=l;f++)ae[f]=c<0?0:ee[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=u;c++)o+=r[c]*ae[u+(f-c)];fe[f]=o}return se(r,n,4,fe,a,4,i,u,ae)}var ye=Math.round;function be(r,n,t){var e,o,i,u,a;return i=r-1.5707963267341256*(e=ye(.6366197723675814*r)),u=6077100506506192e-26*e,a=n>>20|0,t[0]=i-u,a-(jt(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=i)-(i=o-(u=6077100506303966e-26*e))-u),t[0]=i-u,a-(jt(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=i)-(i=o-(u=20222662487111665e-37*e))-u),t[0]=i-u)),t[1]=i-t[0]-u,e}var ve=1.5707963267341256,ge=6077100506506192e-26,de=2*ge,we=3*ge,he=4*ge,me=[0,0,0],je=[0,0];function Ee(r,n){var t,e,o,i,u,a,f;if((o=jt(r)&Nt|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(o&xt)?be(r,o,n):o<=1073928572?r>0?(f=r-ve,n[0]=f-ge,n[1]=f-n[0]-ge,1):(f=r+ve,n[0]=f+ge,n[1]=f-n[0]+ge,-1):r>0?(f=r-2*ve,n[0]=f-de,n[1]=f-n[0]-de,2):(f=r+2*ve,n[0]=f+de,n[1]=f-n[0]+de,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?be(r,o,n):r>0?(f=r-3*ve,n[0]=f-we,n[1]=f-n[0]-we,3):(f=r+3*ve,n[0]=f+we,n[1]=f-n[0]+we,-3):1075388923===o?be(r,o,n):r>0?(f=r-4*ve,n[0]=f-he,n[1]=f-n[0]-he,4):(f=r+4*ve,n[0]=f+he,n[1]=f-n[0]+he,-4);if(o<1094263291)return be(r,o,n);if(o>=St)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Bt[0]=r,Ft[Ut]}(r),f=Mt(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)me[u]=0|f,f=16777216*(f-me[u]);for(me[2]=f,i=3;0===me[i-1];)i-=1;return a=pe(me,je,e,i),r<0?(n[0]=-je[0],n[1]=-je[1],-a):(n[0]=je[0],n[1]=je[1],a)}var Ae=[0,0];function _e(r){var n;if(n=jt(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Et(r,0);if(n>=2146435072)return NaN;switch(3&Ee(r,Ae)){case 0:return Et(Ae[0],Ae[1]);case 1:return-_t(Ae[0],Ae[1]);case 2:return-Et(Ae[0],Ae[1]);default:return _t(Ae[0],Ae[1])}}var Oe=[0,0],Te=Math.floor,Ne=3.141592653589793;function Se(r){var n,t,e,o;return Xn(r)||qn(r)?NaN:(n=zn(r))>9007199254740992?1:.5==(e=n-(t=Te(n)))?0:(o=e<.25?_e(Ne*e):e<.75?function(r){var n;if(n=jt(r),(n&=Nt)<=1072243195)return n<1045430272?r:_t(r,0);if(n>=St)return NaN;switch(3&Ee(r,Oe)){case 0:return _t(Oe[0],Oe[1]);case 1:return Et(Oe[0],Oe[1]);case 2:return-_t(Oe[0],Oe[1]);default:return-Et(Oe[0],Oe[1])}}(Ne*(e=.5-e)):-_e(Ne*(e=1-e)),t%2==1?-o:o)}var xe=Math.floor;function Ue(r){return function(r){return xe(r)===r}(r/2)}function Be(r){return Ue(r>0?r-1:r+1)}var Fe=Math.floor,Ie=Math.sqrt,Ve=!0===dt?0:1,ke=new ut(1),Pe=new nt(ke.buffer);function Le(r,n){return ke[0]=r,Pe[Ve]=n>>>0,ke[0]}function Me(r){return 0|r}var Ce=!0===dt?1:0,Ge=new ut(1),Re=new nt(Ge.buffer);function $e(r,n){return Ge[0]=r,Re[Ce]=n>>>0,Ge[0]}var He=1048576,We=[1,1.5],Xe=[0,.5849624872207642],Ze=[0,1.350039202129749e-8],Ye=1048576,qe=1083179008,ze=1e300,De=1e-300,Je=[0,0],Ke=[0,0];function Qe(r,n){var t,e,o,i,u,a,f,c,l,s,p,y,b,v;if(Xn(r)||Xn(n))return NaN;if(zt.assign(n,Je,1,0),u=Je[0],0===Je[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ie(r);if(-.5===n)return 1/Ie(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(qn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:zn(r)<1==(n===Zn)?0:Zn}(r,n)}if(zt.assign(r,Je,1,0),i=Je[0],0===Je[1]){if(0===i)return function(r,n){return n===Yn?Zn:n===Zn?0:n>0?Be(n)?r:0:Be(n)?Jt(Zn,r):Zn}(r,n);if(1===r)return 1;if(-1===r&&Be(n))return-1;if(qn(r))return r===Yn?Qe(-0,-n):n<0?0:Zn}if(r<0&&!1===function(r){return Fe(r)===r}(n))return(r-r)/(r-r);if(o=zn(r),t=i&Nt|0,e=u&Nt|0,f=u>>>31|0,a=(a=i>>>31|0)&&Be(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(jt(r)&Nt)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*ze*ze:a*De*De;if(t>1072693248)return 0===f?a*ze*ze:a*De*De;p=function(r,n){var t,e,o,i,u,a;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(a=o)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=Le(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Ke,o)}else p=function(r,n,t){var e,o,i,u,a,f,c,l,s,p,y,b,v,g,d,w,h,m,j,E,A;return m=0,t<He&&(m-=53,t=jt(n*=9007199254740992)),m+=(t>>20)-$t|0,t=1072693248|(j=1048575&t|0),j<=235662?E=0:j<767610?E=1:(E=0,m+=1,t-=He),u=Le(o=(w=(n=$e(n,t))-(c=We[E]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),f=$e(0,e+=E<<18),d=(i=o*o)*i*(0===(A=i)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),f=Le(f=3+(i=u*u)+(d+=(a=h*(w-u*f-u*(n-(f-c))))*(u+o)),0),v=(y=-7.028461650952758e-9*(s=Le(s=(w=u*f)+(h=a*f+(d-(f-3-i))*o),0))+.9617966939259756*(h-(s-w))+Ze[E])-((b=Le(b=(p=.9617967009544373*s)+y+(l=Xe[E])+(g=m),0))-g-l-p),r[0]=b,r[1]=v,r}(Ke,o,t);if(y=(s=(n-(c=Le(n,0)))*p[0]+n*p[1])+(l=c*p[0]),zt.assign(y,Je,1,0),b=Me(Je[0]),v=Me(Je[1]),b>=qe){if(0!=(b-qe|v))return a*ze*ze;if(s+8008566259537294e-32>y-l)return a*ze*ze}else if((b&Nt)>=1083231232){if(0!=(b-3230714880|v))return a*De*De;if(s<=y-l)return a*De*De}return y=function(r,n,t){var e,o,i,u,a,f,c,l,s,p;return s=((l=r&Nt|0)>>20)-$t|0,c=0,l>1071644672&&(o=$e(0,((c=r+(Ye>>s+1)>>>0)&~(xt>>(s=((c&Nt)>>20)-$t|0)))>>>0),c=(c&xt|Ye)>>20-s>>>0,r<0&&(c=-c),n-=o),r=Me(r=jt(f=1-((f=(i=.6931471824645996*(o=Le(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=f-(o=f*f)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=u-(f-i))+f*a)-f))),(r+=c<<20>>>0)>>20<=0?ne(f,c):$e(f,r)}(b,l,s),a*y}function ro(r){var n;return Xn(r)||r===Zn||r===Yn?NaN:((n=Qe(1.618033988749895,r))-Se(r)/n)/2.23606797749979}return function(r){return Wn(r,ro)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBinet=n();
//# sourceMappingURL=browser.js.map
