// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,i=n.__lookupGetter__,u=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(i.call(r,t)||u.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,f.get),v&&a&&a.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r){return r!=r}function y(r){return Math.abs(r)}var v=Math.floor,p=Math.ceil;function b(r){return r<0?p(r):v(r)}var A=Number.NEGATIVE_INFINITY,_=Number.POSITIVE_INFINITY;function w(r){return r===_||r===A}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var d=Object.prototype.toString;var s=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol.toStringTag:"";var h=m&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return d.call(r);n=r[U],a=U,t=null!=(o=r)&&s.call(o,a);try{r[U]=void 0}catch(t){return d.call(r)}return e=d.call(r),t?r[U]=n:delete r[U],e}:function(r){return d.call(r)},j="function"==typeof Uint32Array;var g="function"==typeof Uint32Array?Uint32Array:null;var N,I="function"==typeof Uint32Array?Uint32Array:void 0;N=function(){var r,t,n;if("function"!=typeof g)return!1;try{t=new g(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(j&&n instanceof Uint32Array||"[object Uint32Array]"===h(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O=N,S="function"==typeof Float64Array;var E="function"==typeof Float64Array?Float64Array:null;var F,H="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,t,n;if("function"!=typeof E)return!1;try{t=new E([1,3.14,-3.14,NaN]),n=t,r=(S&&n instanceof Float64Array||"[object Float64Array]"===h(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?H:function(){throw new Error("not implemented")};var T=F,G="function"==typeof Uint8Array;var P="function"==typeof Uint8Array?Uint8Array:null;var L,V="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,t,n;if("function"!=typeof P)return!1;try{t=new P(t=[1,3.14,-3.14,256,257]),n=t,r=(G&&n instanceof Uint8Array||"[object Uint8Array]"===h(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W=L,M="function"==typeof Uint16Array;var k="function"==typeof Uint16Array?Uint16Array:null;var x,Y="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var r,t,n;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,65536,65537]),n=t,r=(M&&n instanceof Uint16Array||"[object Uint16Array]"===h(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var C,q={uint16:x,uint8:W};(C=new q.uint16(1))[0]=4660;var z,B,D=52===new q.uint8(C.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new T(1),Q=new O(K.buffer),R=J.HIGH,X=J.LOW;function Z(r,t){return K[0]=t,r[0]=Q[R],r[1]=Q[X],r}function $(r,t){return 1===arguments.length?Z([0,0],r):Z(r,t)}var rr,tr,nr=!0===D?1:0,er=new T(1),or=new O(er.buffer);function ar(r){return er[0]=r,or[nr]}!0===D?(rr=1,tr=0):(rr=0,tr=1);var ir={HIGH:rr,LOW:tr},ur=new T(1),fr=new O(ur.buffer),cr=ir.HIGH,lr=ir.LOW;function yr(r,t){return fr[cr]=r,fr[lr]=t,ur[0]}var vr=[0,0];function pr(r,t,n,e){return l(r)||w(r)?(t[e]=r,t[e+n]=0,t):0!==r&&y(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}c((function(r){return pr(r,[0,0],1,0)}),"assign",pr);var br=[0,0],Ar=[0,0];function _r(r,t){var n,e,o,a,i;return 0===t||0===r||l(r)||w(r)?r:(pr(r,br,1,0),t+=br[1],t+=function(r){var t=ar(r);return(t=(2146435072&t)>>>20)-1023|0}(r=br[0]),t<-1074?(o=r,$(vr,0),a=vr[0],a&=2147483647,i=ar(o),yr(a|=i&=2147483648,vr[1])):t>1023?r<0?A:_:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,$(Ar,r),n=Ar[0],n&=2148532223,e*yr(n|=t+1023<<20,Ar[1])))}function wr(r){var t;return l(r)||r===_?r:r===A?0:r>709.782712893384?_:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,o,a,i;return _r(1-(t-(e=r-t)*(a=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=b(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function mr(r,t,n){return l(r)||l(t)||l(n)||n<=0?NaN:.5*wr(-y((r-t)/n))/n}function dr(r,t){return l(r)||l(t)||t<=0?(n=NaN,function(){return n}):function(n){if(l(n))return NaN;return.5*wr(-y((n-r)/t))/t};var n}c(mr,"factory",dr);export{mr as default,dr as factory};
//# sourceMappingURL=mod.js.map
