// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,u=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;var c=n,l=function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(i.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,n.get),v&&u&&u.call(r,t,n.set),r},y=t()?c:l;var v=function(r,t,n){y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})};var p=function(r){return r!=r};var b=function(r){return Math.abs(r)},A=Math.floor,_=Math.ceil,w=A,m=_;var d=function(r){return r<0?m(r):w(r)},U=Number.NEGATIVE_INFINITY,h=Number.POSITIVE_INFINITY,s=h,j=U;var g=function(r){return r===s||r===j};var N=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var I=function(){return N&&"symbol"==typeof Symbol.toStringTag},O=Object.prototype.toString,S=O;var E=function(r){return S.call(r)},F=Object.prototype.hasOwnProperty;var H=function(r,t){return null!=r&&F.call(r,t)},T="function"==typeof Symbol?Symbol.toStringTag:"",G=H,P=T,L=O;var V=E,W=function(r){var t,n,e;if(null==r)return L.call(r);n=r[P],t=G(r,P);try{r[P]=void 0}catch(t){return L.call(r)}return e=L.call(r),t?r[P]=n:delete r[P],e},M=I()?W:V,k=M,x="function"==typeof Uint32Array;var Y="function"==typeof Uint32Array?Uint32Array:null,C=function(r){return x&&r instanceof Uint32Array||"[object Uint32Array]"===k(r)},q=Y;var z=function(){var r,t;if("function"!=typeof q)return!1;try{t=new q(t=[1,3.14,-3.14,4294967296,4294967297]),r=C(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var B="function"==typeof Uint32Array?Uint32Array:void 0,D=function(){throw new Error("not implemented")},J=z()?B:D,K=M,Q="function"==typeof Float64Array;var R="function"==typeof Float64Array?Float64Array:null,X=function(r){return Q&&r instanceof Float64Array||"[object Float64Array]"===K(r)},Z=R;var $=function(){var r,t;if("function"!=typeof Z)return!1;try{t=new Z([1,3.14,-3.14,NaN]),r=X(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var rr="function"==typeof Float64Array?Float64Array:void 0,tr=function(){throw new Error("not implemented")},nr=$()?rr:tr,er=M,or="function"==typeof Uint8Array;var ar="function"==typeof Uint8Array?Uint8Array:null,ur=function(r){return or&&r instanceof Uint8Array||"[object Uint8Array]"===er(r)},ir=ar;var fr=function(){var r,t;if("function"!=typeof ir)return!1;try{t=new ir(t=[1,3.14,-3.14,256,257]),r=ur(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var cr="function"==typeof Uint8Array?Uint8Array:void 0,lr=function(){throw new Error("not implemented")},yr=fr()?cr:lr,vr=M,pr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null,Ar=function(r){return pr&&r instanceof Uint16Array||"[object Uint16Array]"===vr(r)},_r=br;var wr=function(){var r,t;if("function"!=typeof _r)return!1;try{t=new _r(t=[1,3.14,-3.14,65536,65537]),r=Ar(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var mr,dr="function"==typeof Uint16Array?Uint16Array:void 0,Ur=function(){throw new Error("not implemented")},hr={uint16:wr()?dr:Ur,uint8:yr};(mr=new hr.uint16(1))[0]=4660;var sr,jr,gr=52===new hr.uint8(mr.buffer)[0];!0===gr?(sr=1,jr=0):(sr=0,jr=1);var Nr=J,Ir={HIGH:sr,LOW:jr},Or=new nr(1),Sr=new Nr(Or.buffer),Er=Ir.HIGH,Fr=Ir.LOW;var Hr=function(r,t){return Or[0]=t,r[0]=Sr[Er],r[1]=Sr[Fr],r};var Tr=function(r,t){return 1===arguments.length?Hr([0,0],r):Hr(r,t)},Gr=J,Pr=!0===gr?1:0,Lr=new nr(1),Vr=new Gr(Lr.buffer);var Wr,Mr,kr=function(r){return Lr[0]=r,Vr[Pr]};!0===gr?(Wr=1,Mr=0):(Wr=0,Mr=1);var xr=J,Yr={HIGH:Wr,LOW:Mr},Cr=new nr(1),qr=new xr(Cr.buffer),zr=Yr.HIGH,Br=Yr.LOW;var Dr=function(r,t){return qr[zr]=r,qr[Br]=t,Cr[0]},Jr=Tr,Kr=kr,Qr=Dr,Rr=[0,0];var Xr=g,Zr=p,$r=b;var rt=function(r,t){return Zr(t)||Xr(t)?(r[0]=t,r[1]=0,r):0!==t&&$r(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var tt=kr;var nt=function(r){var t=tt(r);return(t=(2146435072&t)>>>20)-1023|0},et=h,ot=U,at=p,ut=g,it=function(r,t){var n,e;return Jr(Rr,r),n=Rr[0],n&=2147483647,e=Kr(t),Qr(n|=e&=2147483648,Rr[1])},ft=function(r,t){return 1===arguments.length?rt([0,0],r):rt(r,t)},ct=nt,lt=Tr,yt=Dr,vt=[0,0],pt=[0,0];var bt=function(r,t){var n,e;return 0===t||0===r||at(r)||ut(r)?r:(ft(vt,r),t+=vt[1],(t+=ct(r=vt[0]))<-1074?it(0,r):t>1023?r<0?ot:et:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,lt(pt,r),n=pt[0],n&=2148532223,e*yt(n|=t+1023<<20,pt[1])))};var At=bt,_t=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var wt=p,mt=d,dt=U,Ut=h,ht=function(r,t,n){var e,o,a;return a=(e=r-t)-(o=e*e)*_t(o),At(1-(t-e*a/(2-a)-r),n)};var st=function(r){var t;return wt(r)||r===Ut?r:r===dt?0:r>709.782712893384?Ut:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(t=mt(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),ht(r-.6931471803691238*t,1.9082149292705877e-10*t,t))};function jt(r,t,n){return p(r)||p(t)||p(n)||n<=0?NaN:.5*st(-b((r-t)/n))/n}var gt=function(r){return function(){return r}};function Nt(r,t){return p(r)||p(t)||t<=0?gt(NaN):function(n){if(p(n))return NaN;return.5*st(-b((n-r)/t))/t}}v(jt,"factory",Nt);export{jt as default,Nt as factory};
//# sourceMappingURL=mod.js.map
