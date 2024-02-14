// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,v,"e"),n=p.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function I(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+I(n):I(n)+r}var _=String.fromCharCode,E=isNaN,N=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,f,s,l,p;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=U.exec(r);n;)(e=r.slice(i,U.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=U.lastIndex,n=U.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){return"string"==typeof r}function j(r){var e,t;if(!k(r))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var V=Object.prototype,O=V.toString,G=V.__defineGetter__,$=V.__defineSetter__,P=V.__lookupGetter__,H=V.__lookupSetter__,W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||H.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(r,e,t.get),o&&$&&$.call(r,e,t.set),r};function C(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return r!=r}function R(r){return Math.abs(r)}var Y=Math.floor,Z=Math.ceil;function M(r){return r<0?Z(r):Y(r)}var X=Number,z=X.NEGATIVE_INFINITY,q=Number.POSITIVE_INFINITY,B=Number.POSITIVE_INFINITY,D=X.NEGATIVE_INFINITY,J=Number.POSITIVE_INFINITY,K=X.NEGATIVE_INFINITY;function Q(r){return r===J||r===K}var rr,er="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),tr=Object.prototype.toString,nr=Object.prototype.hasOwnProperty,ir="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof ir?ir.toStringTag:"",or=er&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return tr.call(r);t=r[ar],a=ar,e=null!=(i=r)&&nr.call(i,a);try{r[ar]=void 0}catch(e){return tr.call(r)}return n=tr.call(r),e?r[ar]=t:delete r[ar],n}:function(r){return tr.call(r)},cr="function"==typeof Uint32Array,ur="function"==typeof Uint32Array?Uint32Array:null,fr="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(cr&&t instanceof Uint32Array||"[object Uint32Array]"===or(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr,lr=rr,pr="function"==typeof Float64Array,yr="function"==typeof Float64Array?Float64Array:null,gr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr([1,3.14,-3.14,NaN]),t=e,r=(pr&&t instanceof Float64Array||"[object Float64Array]"===or(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,hr=sr,wr="function"==typeof Uint8Array,vr="function"==typeof Uint8Array?Uint8Array:null,br="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,256,257]),t=e,r=(wr&&t instanceof Uint8Array||"[object Uint8Array]"===or(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr,Ir=dr,Ar="function"==typeof Uint16Array,_r="function"==typeof Uint16Array?Uint16Array:null,Er="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,e,t;if("function"!=typeof _r)return!1;try{e=new _r(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ar&&t instanceof Uint16Array||"[object Uint16Array]"===or(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Nr,Tr={uint16:mr,uint8:Ir};(Nr=new Tr.uint16(1))[0]=4660;var Sr,Ur,Fr=52===new Tr.uint8(Nr.buffer)[0];!0===Fr?(Sr=1,Ur=0):(Sr=0,Ur=1);var xr={HIGH:Sr,LOW:Ur},kr=new hr(1),jr=new lr(kr.buffer),Vr=xr.HIGH,Or=xr.LOW;function Gr(r,e,t,n){return kr[0]=r,e[n]=jr[Vr],e[n+t]=jr[Or],e}function $r(r){return Gr(r,[0,0],1,0)}C($r,"assign",Gr);var Pr,Hr,Wr=!0===Fr?1:0,Cr=new hr(1),Lr=new lr(Cr.buffer);function Rr(r){return Cr[0]=r,Lr[Wr]}!0===Fr?(Pr=1,Hr=0):(Pr=0,Hr=1);var Yr={HIGH:Pr,LOW:Hr},Zr=new hr(1),Mr=new lr(Zr.buffer),Xr=Yr.HIGH,zr=Yr.LOW;function qr(r,e){return Mr[Xr]=r,Mr[zr]=e,Zr[0]}var Br=[0,0];function Dr(r,e,t,n){return L(r)||Q(r)?(e[n]=r,e[n+t]=0,e):0!==r&&R(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}C((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=[0,0],Kr=[0,0];function Qr(r,e){var t,n,i,a,o,c;return 0===e||0===r||L(r)||Q(r)?r:(Dr(r,Jr,1,0),e+=Jr[1],e+=function(r){var e=Rr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Jr[0]),e<-1074?(i=0,a=r,$r.assign(i,Br,1,0),o=Br[0],o&=2147483647,c=Rr(a),qr(o|=c&=2147483648,Br[1])):e>1023?r<0?D:B:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,$r.assign(r,Kr,1,0),t=Kr[0],t&=2148532223,n*qr(t|=e+1023<<20,Kr[1])))}var re=1.4426950408889634,ee=1/(1<<28);function te(r){var e;return L(r)||r===q?r:r===z?0:r>709.782712893384?q:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ee?1+r:function(r,e,t){var n,i,a,o;return Qr(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(e=M(r<0?re*r-.5:re*r+.5)),1.9082149292705877e-10*e,e)}function ne(r,e,t){return L(r)||L(e)||L(t)||t<=0?NaN:.5*te(-R((r-e)/t))/t}return C(ne,"factory",(function(r,e){return L(r)||L(e)||e<=0?(t=NaN,function(){return t}):function(t){return L(t)?NaN:.5*te(-R((t-r)/e))/e};var t})),ne},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=e();
//# sourceMappingURL=index.js.map
