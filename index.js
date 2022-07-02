// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return n({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__,l=e,y=function(t,n,r){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(t,n)||c.call(t,n)?(e=t.__proto__,t.__proto__=o,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,n,r.get),p&&f&&f.call(t,n,r.set),t},p=r()?l:y,b=function(t,n,r){p(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})},d=function(t){return t!=t},A=function(t){return Math.abs(t)},v=Math.floor,_=Math.ceil,w=v,m=_,s=function(t){return t<0?m(t):w(t)},h=Number.NEGATIVE_INFINITY,U=Number.POSITIVE_INFINITY,g=U,j=h,N=function(t){return t===g||t===j},I="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),O=Object.prototype.toString,S=O,E=function(t){return S.call(t)},F=Object.prototype.hasOwnProperty,T=function(t,n){return null!=t&&F.call(t,n)},H="function"==typeof Symbol?Symbol.toStringTag:"",G=T,P=H,L=O,V=E,W=function(t){var n,r,e;if(null==t)return L.call(t);r=t[P],n=G(t,P);try{t[P]=void 0}catch(n){return L.call(t)}return e=L.call(t),n?t[P]=r:delete t[P],e},x=I&&"symbol"==typeof Symbol.toStringTag?W:V,M=x,k="function"==typeof Uint32Array,Y="function"==typeof Uint32Array?Uint32Array:null,C=function(t){return k&&t instanceof Uint32Array||"[object Uint32Array]"===M(t)},q=Y,z=function(){var t,n;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,4294967296,4294967297]),t=C(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},B="function"==typeof Uint32Array?Uint32Array:void 0,D=function(){throw new Error("not implemented")},J=z()?B:D,K=x,Q="function"==typeof Float64Array,R="function"==typeof Float64Array?Float64Array:null,X=function(t){return Q&&t instanceof Float64Array||"[object Float64Array]"===K(t)},Z=R,$=function(){var t,n;if("function"!=typeof Z)return!1;try{n=new Z([1,3.14,-3.14,NaN]),t=X(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t},tt="function"==typeof Float64Array?Float64Array:void 0,nt=function(){throw new Error("not implemented")},rt=$()?tt:nt,et=x,ot="function"==typeof Uint8Array,ut="function"==typeof Uint8Array?Uint8Array:null,it=function(t){return ot&&t instanceof Uint8Array||"[object Uint8Array]"===et(t)},ft=ut,at=function(){var t,n;if("function"!=typeof ft)return!1;try{n=new ft(n=[1,3.14,-3.14,256,257]),t=it(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},ct="function"==typeof Uint8Array?Uint8Array:void 0,lt=function(){throw new Error("not implemented")},yt=at()?ct:lt,pt=x,bt="function"==typeof Uint16Array,dt="function"==typeof Uint16Array?Uint16Array:null,At=function(t){return bt&&t instanceof Uint16Array||"[object Uint16Array]"===pt(t)},vt=dt,_t=function(){var t,n;if("function"!=typeof vt)return!1;try{n=new vt(n=[1,3.14,-3.14,65536,65537]),t=At(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},wt="function"==typeof Uint16Array?Uint16Array:void 0,mt=function(){throw new Error("not implemented")},st={uint16:_t()?wt:mt,uint8:yt};(t=new st.uint16(1))[0]=4660;var ht,Ut,gt=52===new st.uint8(t.buffer)[0];!0===gt?(ht=1,Ut=0):(ht=0,Ut=1);var jt,Nt,It=J,Ot={HIGH:ht,LOW:Ut},St=new rt(1),Et=new It(St.buffer),Ft=Ot.HIGH,Tt=Ot.LOW,Ht=function(t,n){return St[0]=n,t[0]=Et[Ft],t[1]=Et[Tt],t},Gt=function(t,n){return 1===arguments.length?Ht([0,0],t):Ht(t,n)},Pt=Gt,Lt=J,Vt=!0===gt?1:0,Wt=new rt(1),xt=new Lt(Wt.buffer),Mt=function(t){return Wt[0]=t,xt[Vt]};!0===gt?(jt=1,Nt=0):(jt=0,Nt=1);var kt=J,Yt={HIGH:jt,LOW:Nt},Ct=new rt(1),qt=new kt(Ct.buffer),zt=Yt.HIGH,Bt=Yt.LOW,Dt=function(t,n){return qt[zt]=t,qt[Bt]=n,Ct[0]},Jt=Pt,Kt=Mt,Qt=Dt,Rt=[0,0],Xt=N,Zt=d,$t=A,tn=function(t,n){return Zt(n)||Xt(n)?(t[0]=n,t[1]=0,t):0!==n&&$t(n)<22250738585072014e-324?(t[0]=4503599627370496*n,t[1]=-52,t):(t[0]=n,t[1]=0,t)},nn=function(t,n){return 1===arguments.length?tn([0,0],t):tn(t,n)},rn=Mt,en=function(t){var n=rn(t);return(n=(2146435072&n)>>>20)-1023|0},on=U,un=h,fn=d,an=N,cn=function(t,n){var r,e;return Jt(Rt,t),r=Rt[0],r&=2147483647,e=Kt(n),Qt(r|=e&=2147483648,Rt[1])},ln=nn,yn=en,pn=Pt,bn=Dt,dn=[0,0],An=[0,0],vn=function(t,n){var r,e;return 0===n||0===t||fn(t)||an(t)?t:(ln(dn,t),n+=dn[1],(n+=yn(t=dn[0]))<-1074?cn(0,t):n>1023?t<0?un:on:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,pn(An,t),r=An[0],r&=2148532223,e*bn(r|=n+1023<<20,An[1])))},_n=vn,wn=function(t){return 0===t?.16666666666666602:.16666666666666602+t*(t*(6613756321437934e-20+t*(4.1381367970572385e-8*t-16533902205465252e-22))-.0027777777777015593)},mn=d,sn=s,hn=h,Un=U,gn=function(t,n,r){var e,o,u;return u=(e=t-n)-(o=e*e)*wn(o),_n(1-(n-e*u/(2-u)-t),r)},jn=1.4426950408889634,Nn=1/(1<<28),In=function(t){var n;return mn(t)||t===Un?t:t===hn?0:t>709.782712893384?Un:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<Nn?1+t:(n=sn(t<0?jn*t-.5:jn*t+.5),gn(t-.6931471803691238*n,1.9082149292705877e-10*n,n))};function On(t,n,r){return d(t)||d(n)||d(r)||r<=0?NaN:.5*In(-A((t-n)/r))/r}var Sn=function(t){return function(){return t}};return b(On,"factory",(function(t,n){return d(t)||d(n)||n<=0?Sn(NaN):function(r){return d(r)?NaN:.5*In(-A((r-t)/n))/n}})),On},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).pdf=n();
//# sourceMappingURL=index.js.map
