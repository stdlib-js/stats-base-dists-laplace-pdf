"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var c=s(function(g,v){
var i=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs/dist'),N=require('@stdlib/math-base-special-exp/dist');function y(a,r,e){var t;return i(a)||i(r)||i(e)||e<=0?NaN:(t=(a-r)/e,.5*N(-p(t))/e)}v.exports=y
});var o=s(function(h,f){
var d=require('@stdlib/utils-constant-function/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-abs/dist'),z=require('@stdlib/math-base-special-exp/dist');function l(a,r){if(n(a)||n(r)||r<=0)return d(NaN);return e;function e(t){var u;return n(t)?NaN:(u=(t-a)/r,.5*z(-x(u))/r)}}f.exports=l
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=c(),O=o();F(q,"factory",O);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
