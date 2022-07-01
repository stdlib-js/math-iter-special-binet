// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBinet=n()}(this,(function(){"use strict";function r(r){var n=r.default;if("function"==typeof n){var t=function(){return n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return n({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,n,t){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,n,t.get),y&&f&&f.call(r,n,t.set),r},v=e,y=l,p=t()?v:y;var s=function(r,n,t){p(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},b=s,d=/./;var w=function(r){return"boolean"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return m&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,g=h;var _=function(r){return g.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,n){return null!=r&&A.call(r,n)},N="function"==typeof Symbol?Symbol.toStringTag:"",E=O,U=N,S=h;var P=_,T=function(r){var n,t,e;if(null==r)return S.call(r);t=r[U],n=E(r,U);try{r[U]=void 0}catch(n){return S.call(r)}return e=S.call(r),n?r[U]=t:delete r[U],e},F=j()?T:P,I=Boolean.prototype.toString;var x=F,G=function(r){try{return I.call(r),!0}catch(r){return!1}},V=j();var B=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===x(r)))},H=w,L=B;var M=b,k=function(r){return H(r)||L(r)},W=B;M(k,"isPrimitive",w),M(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},z="object"==typeof q?q:null;module.exports=z;var D=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),nr=rr.document&&rr.document.childNodes,tr=Int8Array,er=d,or=nr,ur=tr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var fr=function(){return/^\s*function\s*([^(]*)/i},ar=fr;b(ar,"REGEXP",fr());var cr=ar,lr=F;var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},yr=vr;var pr=function(r){return null!==r&&"object"==typeof r};b(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!yr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(pr));var sr=pr;var br=F,dr=cr.REGEXP,wr=function(r){return sr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var mr=function(r){var n,t,e;if(("Object"===(t=br(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=dr.exec(e.toString()))return n[1]}return wr(r)?"Buffer":t},jr=mr;var hr=mr;var gr=function(r){var n;return null===r?"null":"object"===(n=typeof r)?jr(r).toLowerCase():n},_r=function(r){return hr(r).toLowerCase()},Ar=ir()?_r:gr;var Or=function(r){return"function"===Ar(r)},Nr=Or;var Er=function(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&Nr(r.next)};var Ur=function(r){return"number"==typeof r},Sr=Number,Pr=Sr.prototype.toString;var Tr=F,Fr=Sr,Ir=function(r){try{return Pr.call(r),!0}catch(r){return!1}},xr=j();var Gr=function(r){return"object"==typeof r&&(r instanceof Fr||(xr?Ir(r):"[object Number]"===Tr(r)))},Vr=Ur,Br=Gr;var Hr=b,Lr=function(r){return Vr(r)||Br(r)},Mr=Gr;Hr(Lr,"isPrimitive",Ur),Hr(Lr,"isObject",Mr);var kr=Lr,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=vr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var qr=function(r){return r.__proto__},zr=F,Dr=qr;var Jr=function(r){var n=Dr(r);return n||null===n?n:"[object Function]"===zr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rn=Or,nn=function(r){return null==r?null:(r=Object(r),Zr(r))},tn=O,en=F,on=Object.prototype;var un=function(r){var n;return!!$r(r)&&(!(n=nn(r))||!tn(r,"constructor")&&tn(n,"constructor")&&rn(n.constructor)&&"[object Function]"===en(n.constructor)&&tn(n,"isPrototypeOf")&&rn(n.isPrototypeOf)&&(n===on||function(r){var n;for(n in r)if(!tn(r,n))return!1;return!0}(r)))},fn=un,an=O;var cn=b,ln=Or,vn=Er,yn=kr.isPrimitive,pn=Cr,sn=function(r,n){return fn(n)?(an(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")};var bn=function r(n,t,e){var o,u,i,f;if(!vn(n))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+n+"`.");if(!ln(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(o={invalid:NaN},arguments.length>2&&(i=sn(o,e)))throw i;return cn(u={},"next",a),cn(u,"return",c),pn&&ln(n[pn])&&cn(u,pn,l),u;function a(){var r;return f?{done:!0}:(r=n.next()).done?(f=!0,r):{value:yn(r.value)?t(r.value):o.invalid,done:!1}}function c(r){return f=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(n[pn](),t,o)}},dn=bn;var wn=function(r){return r!=r},mn=Number.POSITIVE_INFINITY,jn=Sr.NEGATIVE_INFINITY,hn=mn,gn=jn;var _n=function(r){return r===hn||r===gn};var An=function(r){return Math.abs(r)},On=F,Nn="function"==typeof Uint32Array;var En="function"==typeof Uint32Array?Uint32Array:null,Un=function(r){return Nn&&r instanceof Uint32Array||"[object Uint32Array]"===On(r)},Sn=En;var Pn=function(){var r,n;if("function"!=typeof Sn)return!1;try{n=new Sn(n=[1,3.14,-3.14,4294967296,4294967297]),r=Un(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Tn="function"==typeof Uint32Array?Uint32Array:void 0,Fn=function(){throw new Error("not implemented")},In=Pn()?Tn:Fn,xn=F,Gn="function"==typeof Float64Array;var Vn="function"==typeof Float64Array?Float64Array:null,Bn=function(r){return Gn&&r instanceof Float64Array||"[object Float64Array]"===xn(r)},Hn=Vn;var Ln=function(){var r,n;if("function"!=typeof Hn)return!1;try{n=new Hn([1,3.14,-3.14,NaN]),r=Bn(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var Mn="function"==typeof Float64Array?Float64Array:void 0,kn=function(){throw new Error("not implemented")},Wn=Ln()?Mn:kn,Cn=F,Rn="function"==typeof Uint8Array;var Xn="function"==typeof Uint8Array?Uint8Array:null,Yn=function(r){return Rn&&r instanceof Uint8Array||"[object Uint8Array]"===Cn(r)},qn=Xn;var zn=function(){var r,n;if("function"!=typeof qn)return!1;try{n=new qn(n=[1,3.14,-3.14,256,257]),r=Yn(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Dn="function"==typeof Uint8Array?Uint8Array:void 0,Jn=function(){throw new Error("not implemented")},Kn=zn()?Dn:Jn,Qn=F,Zn="function"==typeof Uint16Array;var $n="function"==typeof Uint16Array?Uint16Array:null,rt=function(r){return Zn&&r instanceof Uint16Array||"[object Uint16Array]"===Qn(r)},nt=$n;var tt=function(){var r,n;if("function"!=typeof nt)return!1;try{n=new nt(n=[1,3.14,-3.14,65536,65537]),r=rt(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var et,ot="function"==typeof Uint16Array?Uint16Array:void 0,ut=function(){throw new Error("not implemented")},it={uint16:tt()?ot:ut,uint8:Kn};(et=new it.uint16(1))[0]=4660;var ft=52===new it.uint8(et.buffer)[0],at=In,ct=!0===ft?1:0,lt=new Wn(1),vt=new at(lt.buffer);var yt=function(r){return lt[0]=r,vt[ct]};var pt=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},st=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var bt=function(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*pt(u),e+=o*o*st(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))},dt=-.16666666666666632;var wt=function(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(dt+o*t):r-(o*(.5*n-e*t)-n-e*dt)},mt=In,jt=!0===ft?0:1,ht=new Wn(1),gt=new mt(ht.buffer);var _t,At,Ot=function(r){return ht[0]=r,gt[jt]};!0===ft?(_t=1,At=0):(_t=0,At=1);var Nt=In,Et={HIGH:_t,LOW:At},Ut=new Wn(1),St=new Nt(Ut.buffer),Pt=Et.HIGH,Tt=Et.LOW;var Ft,It,xt=function(r,n){return St[Pt]=r,St[Tt]=n,Ut[0]},Gt=xt,Vt=Math.floor;!0===ft?(Ft=1,It=0):(Ft=0,It=1);var Bt=In,Ht={HIGH:Ft,LOW:It},Lt=new Wn(1),Mt=new Bt(Lt.buffer),kt=Ht.HIGH,Wt=Ht.LOW;var Ct=function(r,n){return Lt[0]=n,r[0]=Mt[kt],r[1]=Mt[Wt],r};var Rt=function(r,n){return 1===arguments.length?Ct([0,0],r):Ct(r,n)},Xt=Rt,Yt=Xt,qt=yt,zt=Gt,Dt=[0,0];var Jt=function(r,n){var t,e;return Yt(Dt,r),t=Dt[0],t&=2147483647,e=qt(n),zt(t|=e&=2147483648,Dt[1])},Kt=_n,Qt=wn,Zt=An;var $t=function(r,n){return Qt(n)||Kt(n)?(r[0]=n,r[1]=0,r):0!==n&&Zt(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var re=function(r,n){return 1===arguments.length?$t([0,0],r):$t(r,n)},ne=yt;var te=function(r){var n=ne(r);return(n=(2146435072&n)>>>20)-1023|0},ee=mn,oe=jn,ue=wn,ie=_n,fe=Jt,ae=re,ce=te,le=Xt,ve=Gt,ye=[0,0],pe=[0,0];var se=function(r,n){var t,e;return 0===n||0===r||ue(r)||ie(r)?r:(ae(ye,r),n+=ye[1],(n+=ce(r=ye[0]))<-1074?fe(0,r):n>1023?r<0?oe:ee:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,le(pe,r),t=pe[0],t&=2148532223,e*ve(t|=n+1023<<20,pe[1])))},be=se;var de=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var we=Vt,me=be,je=function(r){return de(0,r)},he=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ge=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],_e=16777216,Ae=5.960464477539063e-8,Oe=je(20),Ne=je(20),Ee=je(20),Ue=je(20);function Se(r,n,t,e,o,u,i,f,a){var c,l,v,y,p,s,b,d,w;for(y=u,w=e[t],d=t,p=0;d>0;p++)l=Ae*w|0,Ue[p]=w-_e*l|0,w=e[d-1]+l,d-=1;if(w=me(w,o),w-=8*we(.125*w),w-=b=0|w,v=0,o>0?(b+=p=Ue[t-1]>>24-o,Ue[t-1]-=p<<24-o,v=Ue[t-1]>>23-o):0===o?v=Ue[t-1]>>23:w>=.5&&(v=2),v>0){for(b+=1,c=0,p=0;p<t;p++)d=Ue[p],0===c?0!==d&&(c=1,Ue[p]=16777216-d):Ue[p]=16777215-d;if(o>0)switch(o){case 1:Ue[t-1]&=8388607;break;case 2:Ue[t-1]&=4194303}2===v&&(w=1-w,0!==c&&(w-=me(1,o)))}if(0===w){for(d=0,p=t-1;p>=u;p--)d|=Ue[p];if(0===d){for(s=1;0===Ue[u-s];s++);for(p=t+1;p<=t+s;p++){for(a[f+p]=he[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return Se(r,n,t+=s,e,o,u,i,f,a)}}if(0===w)for(t-=1,o-=24;0===Ue[t];)t-=1,o-=24;else(w=me(w,-o))>=_e?(l=Ae*w|0,Ue[t]=w-_e*l|0,o+=24,Ue[t+=1]=l):Ue[t]=0|w;for(l=me(1,o),p=t;p>=0;p--)e[p]=l*Ue[p],l*=Ae;for(p=t;p>=0;p--){for(l=0,s=0;s<=y&&s<=t-p;s++)l+=ge[s]*e[p+s];Ee[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Ee[p];for(n[0]=0===v?l:-l,l=Ee[0]-l,p=1;p<=t;p++)l+=Ee[p];return n[1]=0===v?l:-l,7&b}var Pe=function(r,n,t,e){var o,u,i,f,a,c,l;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)Oe[a]=c<0?0:he[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Oe[i+(a-c)];Ne[a]=o}return 4,Se(r,n,4,Ne,f,4,u,i,Oe)},Te=Math.round,Fe=yt;var Ie=yt,xe=Ot,Ge=Gt,Ve=Pe,Be=function(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Te(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(Fe(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(Fe(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e},He=1.5707963267341256,Le=6077100506506192e-26,Me=2*Le,ke=3*Le,We=4*Le,Ce=[0,0,0],Re=[0,0];var Xe=function(r,n){var t,e,o,u,i,f,a;if((o=2147483647&Ie(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Be(r,o,n):o<=1073928572?r>0?(a=r-He,n[0]=a-Le,n[1]=a-n[0]-Le,1):(a=r+He,n[0]=a+Le,n[1]=a-n[0]+Le,-1):r>0?(a=r-2*He,n[0]=a-Me,n[1]=a-n[0]-Me,2):(a=r+2*He,n[0]=a+Me,n[1]=a-n[0]+Me,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Be(r,o,n):r>0?(a=r-3*He,n[0]=a-ke,n[1]=a-n[0]-ke,3):(a=r+3*He,n[0]=a+ke,n[1]=a-n[0]+ke,-3):1075388923===o?Be(r,o,n):r>0?(a=r-4*He,n[0]=a-We,n[1]=a-n[0]-We,4):(a=r+4*He,n[0]=a+We,n[1]=a-n[0]+We,-4);if(o<1094263291)return Be(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=xe(r),a=Ge(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Ce[i]=0|a,a=16777216*(a-Ce[i]);for(Ce[2]=a,u=3;0===Ce[u-1];)u-=1;return f=Ve(Ce,Re,e,u),r<0?(n[0]=-Re[0],n[1]=-Re[1],-f):(n[0]=Re[0],n[1]=Re[1],f)},Ye=yt,qe=bt,ze=wt,De=Xe,Je=[0,0];var Ke=yt,Qe=bt,Ze=wt,$e=Xe,ro=[0,0];var no=wn,to=_n,eo=An,oo=function(r){var n;if(n=Ye(r),(n&=2147483647)<=1072243195)return n<1044381696?1:qe(r,0);if(n>=2146435072)return NaN;switch(3&De(r,Je)){case 0:return qe(Je[0],Je[1]);case 1:return-ze(Je[0],Je[1]);case 2:return-qe(Je[0],Je[1]);default:return ze(Je[0],Je[1])}},uo=function(r){var n;if(n=Ke(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Ze(r,0);if(n>=2146435072)return NaN;switch(3&$e(r,ro)){case 0:return Ze(ro[0],ro[1]);case 1:return Qe(ro[0],ro[1]);case 2:return-Ze(ro[0],ro[1]);default:return-Qe(ro[0],ro[1])}},io=Vt,fo=3.141592653589793;var ao=function(r){var n,t,e,o;return no(r)||to(r)?NaN:(n=eo(r))>9007199254740992?1:.5===(e=n-(t=io(n)))?0:(o=e<.25?oo(fo*e):e<.75?uo(fo*(e=.5-e)):-oo(fo*(e=1-e)),t%2==1?-o:o)},co=Vt;var lo=function(r){return co(r)===r},vo=lo;var yo=function(r){return vo(r/2)};var po=function(r){return yo(r>0?r-1:r+1)},so=Math.sqrt,bo=In,wo=!0===ft?0:1,mo=new Wn(1),jo=new bo(mo.buffer);var ho=function(r,n){return mo[0]=r,jo[wo]=n>>>0,mo[0]},go=ho;var _o=function(r){return 0|r},Ao=po,Oo=Jt,No=jn,Eo=mn;var Uo=function(r,n){return n===No?Eo:n===Eo?0:n>0?Ao(n)?r:0:Ao(n)?Oo(Eo,r):Eo},So=yt;var Po=function(r,n){return(2147483647&So(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},To=An,Fo=mn;var Io=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:To(r)<1==(n===Fo)?0:Fo},xo=In,Go=!0===ft?1:0,Vo=new Wn(1),Bo=new xo(Vo.buffer);var Ho=function(r,n){return Vo[0]=r,Bo[Go]=n>>>0,Vo[0]};var Lo=yt,Mo=go,ko=Ho,Wo=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Co=1048576,Ro=[1,1.5],Xo=[0,.5849624872207642],Yo=[0,1.350039202129749e-8];var qo=go,zo=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Do=yt,Jo=Ho,Ko=go,Qo=_o,Zo=be,$o=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},ru=2147483647,nu=1048575,tu=1048576;var eu=wn,ou=po,uu=_n,iu=lo,fu=so,au=An,cu=Xt,lu=go,vu=_o,yu=jn,pu=mn,su=Uo,bu=Po,du=Io,wu=function(r,n,t){var e,o,u,i,f,a,c,l,v,y,p,s,b,d,w,m,j,h,g,_;return h=0,t<Co&&(h-=53,t=Lo(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(g=1048575&t|0),g<=235662?_=0:g<767610?_=1:(_=0,h+=1,t-=Co),e=524288+(t>>1|536870912),f=(j=1/((n=ko(n,t))+(c=Ro[_])))*((m=n-c)-(i=Mo(o=m*j,0))*(a=ko(0,e+=_<<18))-i*(n-(a-c))),w=(u=o*o)*u*Wo(u),a=Mo(a=3+(u=i*i)+(w+=f*(i+o)),0),b=(p=-7.028461650952758e-9*(v=Mo(v=(m=i*a)+(j=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(j-(v-m))+Yo[_])-((s=Mo(s=(y=.9617967009544373*v)+p+(l=Xo[_])+(d=h),0))-d-l-y),r[0]=s,r[1]=b,r},mu=function(r,n){var t,e,o,u,i;return t=(i=1.9259629911266175e-8*(o=n-1)-1.4426950408889634*(o*o*zo(o)))-((e=qo(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r},ju=function(r,n,t){var e,o,u,i,f,a,c,l,v;return v=((l=r&ru|0)>>20)-1023|0,c=0,l>1071644672&&(o=Jo(0,((c=r+(tu>>v+1)>>>0)&~(nu>>(v=((c&ru)>>20)-1023|0)))>>>0),c=(c&nu|tu)>>20-v>>>0,r<0&&(c=-c),n-=o),f=(i=.6931471805599453*(t-((o=Ko(o=t+n,0))-n))+-1.904654299957768e-9*o)-((a=(u=.6931471824645996*o)+i)-u),e=a-(o=a*a)*$o(o),r=Do(a=1-(a*e/(e-2)-(f+a*f)-a)),r=Qo(r),a=(r+=c<<20>>>0)>>20<=0?Zo(a,c):Jo(a,r)},hu=2147483647,gu=1083179008,_u=1e300,Au=1e-300,Ou=[0,0],Nu=[0,0];var Eu=function r(n,t){var e,o,u,i,f,a,c,l,v,y,p,s,b,d;if(eu(n)||eu(t))return NaN;if(cu(Ou,t),f=Ou[0],0===Ou[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return fu(n);if(-.5===t)return 1/fu(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(uu(t))return du(n,t)}if(cu(Ou,n),i=Ou[0],0===Ou[1]){if(0===i)return su(n,t);if(1===n)return 1;if(-1===n&&ou(t))return-1;if(uu(n))return n===yu?r(-0,-t):t<0?0:pu}if(n<0&&!1===iu(t))return(n-n)/(n-n);if(u=au(n),e=i&hu|0,o=f&hu|0,c=f>>>31|0,a=(a=i>>>31|0)&&ou(t)?-1:1,o>1105199104){if(o>1139802112)return bu(n,t);if(e<1072693247)return 1===c?a*_u*_u:a*Au*Au;if(e>1072693248)return 0===c?a*_u*_u:a*Au*Au;p=mu(Nu,u)}else p=wu(Nu,u,e);if(y=(t-(l=lu(t,0)))*p[0]+t*p[1],v=l*p[0],cu(Ou,s=y+v),b=vu(Ou[0]),d=vu(Ou[1]),b>=gu){if(0!=(b-gu|d))return a*_u*_u;if(y+8008566259537294e-32>s-v)return a*_u*_u}else if((b&hu)>=1083231232){if(0!=(b-3230714880|d))return a*Au*Au;if(y<=s-v)return a*Au*Au}return a*(s=ju(b,v,y))},Uu=wn,Su=ao,Pu=Eu,Tu=mn,Fu=jn;var Iu=function(r){var n;return Uu(r)||r===Tu||r===Fu?NaN:((n=Pu(1.618033988749895,r))-Su(r)/n)/2.23606797749979};return function(r){return dn(r,Iu)}}));
//# sourceMappingURL=index.js.map
