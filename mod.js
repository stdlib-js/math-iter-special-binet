// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;function d(r,n){return null!=r&&w.call(r,n)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var n,t,e;if(null==r)return s.call(r);t=r[m],n=d(r,m);try{r[m]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[m]=t:delete r[m],e}:function(r){return s.call(r)},h=Boolean.prototype.toString;var A=b();function g(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return h.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||g(r)}function N(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",g);var O="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var F=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return N()}if(O)return O;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function H(r){return null!==r&&"object"==typeof r}function x(r){var n,t,e,o;if(("Object"===(t=j(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=V.exec(e.toString()))return n[1]}return H(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(H,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!G(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(H));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(r){return x(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?x(r).toLowerCase():n};function L(r){return"function"===B(r)}function M(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=b();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&d(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!G(r)}(r)&&(n=function(r){return null==r?null:(r=Object(r),J(r))}(r),!n||!d(r,"constructor")&&d(n,"constructor")&&L(n.constructor)&&"[object Function]"===j(n.constructor)&&d(n,"isPrototypeOf")&&L(n.isPrototypeOf)&&(n===K||function(r){var n;for(n in r)if(!d(r,n))return!1;return!0}(r)))}function Z(r,n){return Q(n)?(d(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(r,n,t){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,t)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var t;return i?{done:!0}:(t=r.next()).done?(i=!0,t):{value:k(t.value)?n(t.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),n,e)}}function rr(r){return r!=r}var nr=Number.POSITIVE_INFINITY,tr=W.NEGATIVE_INFINITY;function er(r){return r===nr||r===tr}function or(r){return Math.abs(r)}var ur="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var fr,ar="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ur&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Float64Array;var yr="function"==typeof Float64Array?Float64Array:null;var vr,pr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr([1,3.14,-3.14,NaN]),t=n,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var br=vr,sr="function"==typeof Uint8Array;var wr="function"==typeof Uint8Array?Uint8Array:null;var dr,mr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,n,t;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,256,257]),t=n,r=(sr&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr=dr,hr="function"==typeof Uint16Array;var Ar="function"==typeof Uint16Array?Uint16Array:null;var gr,_r="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,n,t;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,65536,65537]),t=n,r=(hr&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Nr,Or={uint16:gr,uint8:jr};(Nr=new Or.uint16(1))[0]=4660;var Ur=52===new Or.uint8(Nr.buffer)[0],Sr=!0===Ur?1:0,Er=new br(1),Fr=new cr(Er.buffer);function Ir(r){return Er[0]=r,Fr[Sr]}function Pr(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var Tr=-.16666666666666632;function Vr(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(Tr+o*t):r-(o*(.5*n-e*t)-n-e*Tr)}var Gr,Hr,xr=!0===Ur?0:1,Br=new br(1),Lr=new cr(Br.buffer);!0===Ur?(Gr=1,Hr=0):(Gr=0,Hr=1);var Mr={HIGH:Gr,LOW:Hr},kr=new br(1),Wr=new cr(kr.buffer),Cr=Mr.HIGH,Yr=Mr.LOW;function qr(r,n){return Wr[Cr]=r,Wr[Yr]=n,kr[0]}var Rr,Xr,zr=Math.floor;!0===Ur?(Rr=1,Xr=0):(Rr=0,Xr=1);var Dr={HIGH:Rr,LOW:Xr},Jr=new br(1),Kr=new cr(Jr.buffer),Qr=Dr.HIGH,Zr=Dr.LOW;function $r(r,n){return Jr[0]=n,r[0]=Kr[Qr],r[1]=Kr[Zr],r}function rn(r,n){return 1===arguments.length?$r([0,0],r):$r(r,n)}var nn=[0,0];function tn(r,n){var t,e;return rn(nn,r),t=nn[0],t&=2147483647,e=Ir(n),qr(t|=e&=2147483648,nn[1])}function en(r,n){return rr(n)||er(n)?(r[0]=n,r[1]=0,r):0!==n&&or(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var on=[0,0],un=[0,0];function fn(r,n){var t,e;return 0===n||0===r||rr(r)||er(r)?r:(function(r,n){1===arguments.length?en([0,0],r):en(r,n)}(on,r),n+=on[1],n+=function(r){var n=Ir(r);return(n=(2146435072&n)>>>20)-1023|0}(r=on[0]),n<-1074?tn(0,r):n>1023?r<0?tr:nr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,rn(un,r),t=un[0],t&=2148532223,e*qr(t|=n+1023<<20,un[1])))}function an(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var cn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ln=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],yn=5.960464477539063e-8,vn=an(20),pn=an(20),bn=an(20),sn=an(20);function wn(r,n,t,e,o,u,i,f,a){var c,l,y,v,p,b,s,w,d;for(v=u,d=e[t],w=t,p=0;w>0;p++)l=yn*d|0,sn[p]=d-16777216*l|0,d=e[w-1]+l,w-=1;if(d=fn(d,o),d-=8*zr(.125*d),d-=s=0|d,y=0,o>0?(s+=p=sn[t-1]>>24-o,sn[t-1]-=p<<24-o,y=sn[t-1]>>23-o):0===o?y=sn[t-1]>>23:d>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<t;p++)w=sn[p],0===c?0!==w&&(c=1,sn[p]=16777216-w):sn[p]=16777215-w;if(o>0)switch(o){case 1:sn[t-1]&=8388607;break;case 2:sn[t-1]&=4194303}2===y&&(d=1-d,0!==c&&(d-=fn(1,o)))}if(0===d){for(w=0,p=t-1;p>=u;p--)w|=sn[p];if(0===w){for(b=1;0===sn[u-b];b++);for(p=t+1;p<=t+b;p++){for(a[f+p]=cn[i+p],l=0,w=0;w<=f;w++)l+=r[w]*a[f+(p-w)];e[p]=l}return wn(r,n,t+=b,e,o,u,i,f,a)}}if(0===d)for(t-=1,o-=24;0===sn[t];)t-=1,o-=24;else(d=fn(d,-o))>=16777216?(l=yn*d|0,sn[t]=d-16777216*l|0,o+=24,sn[t+=1]=l):sn[t]=0|d;for(l=fn(1,o),p=t;p>=0;p--)e[p]=l*sn[p],l*=yn;for(p=t;p>=0;p--){for(l=0,b=0;b<=v&&b<=t-p;b++)l+=ln[b]*e[p+b];bn[t-p]=l}for(l=0,p=t;p>=0;p--)l+=bn[p];for(n[0]=0===y?l:-l,l=bn[0]-l,p=1;p<=t;p++)l+=bn[p];return n[1]=0===y?l:-l,7&s}function dn(r,n,t,e){var o,u,i,f,a,c,l;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)vn[a]=c<0?0:cn[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*vn[i+(a-c)];pn[a]=o}return 4,wn(r,n,4,pn,f,4,u,i,vn)}var mn=Math.round;function jn(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=mn(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(Ir(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(Ir(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var hn=1.5707963267341256,An=6077100506506192e-26,gn=2*An,_n=4*An,Nn=[0,0,0],On=[0,0];function Un(r,n){var t,e,o,u,i,f,a;if((o=2147483647&Ir(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?jn(r,o,n):o<=1073928572?r>0?(a=r-hn,n[0]=a-An,n[1]=a-n[0]-An,1):(a=r+hn,n[0]=a+An,n[1]=a-n[0]+An,-1):r>0?(a=r-2*hn,n[0]=a-gn,n[1]=a-n[0]-gn,2):(a=r+2*hn,n[0]=a+gn,n[1]=a-n[0]+gn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?jn(r,o,n):r>0?(a=r-3*hn,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*hn,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===o?jn(r,o,n):r>0?(a=r-4*hn,n[0]=a-_n,n[1]=a-n[0]-_n,4):(a=r+4*hn,n[0]=a+_n,n[1]=a-n[0]+_n,-4);if(o<1094263291)return jn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Br[0]=r,Lr[xr]}(r),a=qr(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Nn[i]=0|a,a=16777216*(a-Nn[i]);for(Nn[2]=a,u=3;0===Nn[u-1];)u-=1;return f=dn(Nn,On,e,u),r<0?(n[0]=-On[0],n[1]=-On[1],-f):(n[0]=On[0],n[1]=On[1],f)}var Sn=[0,0];function En(r){var n;if(n=Ir(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Pr(r,0);if(n>=2146435072)return NaN;switch(3&Un(r,Sn)){case 0:return Pr(Sn[0],Sn[1]);case 1:return-Vr(Sn[0],Sn[1]);case 2:return-Pr(Sn[0],Sn[1]);default:return Vr(Sn[0],Sn[1])}}var Fn=[0,0];var In=3.141592653589793;function Pn(r){var n,t,e,o;return rr(r)||er(r)?NaN:(n=or(r))>9007199254740992?1:.5===(e=n-(t=zr(n)))?0:(o=e<.25?En(In*e):e<.75?function(r){var n;if(n=Ir(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Vr(r,0);if(n>=2146435072)return NaN;switch(3&Un(r,Fn)){case 0:return Vr(Fn[0],Fn[1]);case 1:return Pr(Fn[0],Fn[1]);case 2:return-Vr(Fn[0],Fn[1]);default:return-Pr(Fn[0],Fn[1])}}(In*(e=.5-e)):-En(In*(e=1-e)),t%2==1?-o:o)}function Tn(r){return zr(r)===r}function Vn(r){return Tn(r/2)}function Gn(r){return Vn(r>0?r-1:r+1)}var Hn=Math.sqrt,xn=!0===Ur?0:1,Bn=new br(1),Ln=new cr(Bn.buffer);function Mn(r,n){return Bn[0]=r,Ln[xn]=n>>>0,Bn[0]}function kn(r){return 0|r}var Wn=!0===Ur?1:0,Cn=new br(1),Yn=new cr(Cn.buffer);function qn(r,n){return Cn[0]=r,Yn[Wn]=n>>>0,Cn[0]}var Rn=[1,1.5],Xn=[0,.5849624872207642],zn=[0,1.350039202129749e-8];var Dn=1e300,Jn=1e-300,Kn=[0,0],Qn=[0,0];function Zn(r,n){var t,e,o,u,i,f,a,c,l,y,v,p,b,s;if(rr(r)||rr(n))return NaN;if(rn(Kn,n),i=Kn[0],0===Kn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Hn(r);if(-.5===n)return 1/Hn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(er(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:or(r)<1==(n===nr)?0:nr}(r,n)}if(rn(Kn,r),u=Kn[0],0===Kn[1]){if(0===u)return function(r,n){return n===tr?nr:n===nr?0:n>0?Gn(n)?r:0:Gn(n)?tn(nr,r):nr}(r,n);if(1===r)return 1;if(-1===r&&Gn(n))return-1;if(er(r))return r===tr?Zn(-0,-n):n<0?0:nr}if(r<0&&!1===Tn(n))return(r-r)/(r-r);if(o=or(r),t=2147483647&u|0,e=2147483647&i|0,a=i>>>31|0,f=(f=u>>>31|0)&&Gn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Ir(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Dn*Dn:f*Jn*Jn;if(t>1072693248)return 0===a?f*Dn*Dn:f*Jn*Jn;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Mn(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Qn,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p,b,s,w,d,m,j,h,A,g,_;return h=0,t<1048576&&(h-=53,t=Ir(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(A=1048575&t|0),A<=235662?g=0:A<767610?g=1:(g=0,h+=1,t-=1048576),i=Mn(o=(m=(n=qn(n,t))-(c=Rn[g]))*(j=1/(n+c)),0),e=524288+(t>>1|536870912),a=qn(0,e+=g<<18),d=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Mn(a=3+(u=i*i)+(d+=(f=j*(m-i*a-i*(n-(a-c))))*(i+o)),0),s=(p=-7.028461650952758e-9*(y=Mn(y=(m=i*a)+(j=f*a+(d-(a-3-u))*o),0))+.9617966939259756*(j-(y-m))+zn[g])-((b=Mn(b=(v=.9617967009544373*y)+p+(l=Xn[g])+(w=h),0))-w-l-v),r[0]=b,r[1]=s,r}(Qn,o,t);if(y=(n-(c=Mn(n,0)))*v[0]+n*v[1],l=c*v[0],rn(Kn,p=y+l),b=kn(Kn[0]),s=kn(Kn[1]),b>=1083179008){if(0!=(b-1083179008|s))return f*Dn*Dn;if(y+8008566259537294e-32>p-l)return f*Dn*Dn}else if((2147483647&b)>=1083231232){if(0!=(b-3230714880|s))return f*Jn*Jn;if(y<=p-l)return f*Jn*Jn}return p=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=u=qn(0,e)),r=kn(r=Ir(c=1-((c=(i=.6931471824645996*(u=Mn(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?fn(c,l):qn(c,r)}(b,l,y),f*p}function $n(r){var n;return rr(r)||r===nr||r===tr?NaN:((n=Zn(1.618033988749895,r))-Pn(r)/n)/2.23606797749979}function rt(r){return $(r,$n)}export{rt as default};
//# sourceMappingURL=mod.js.map
