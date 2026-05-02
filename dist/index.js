"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=s(function(g,v){
var i=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs/dist'),N=require('@stdlib/math-base-special-exp/dist');function y(e,r,a){var t;return i(e)||i(r)||i(a)||a<=0?NaN:(t=(e-r)/a,.5*N(-p(t))/a)}v.exports=y
});var o=s(function(h,f){
var d=require('@stdlib/utils-constant-function/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-abs/dist'),z=require('@stdlib/math-base-special-exp/dist');function l(e,r){if(n(e)||n(r)||r<=0)return d(NaN);return a;function a(t){var u;return n(t)?NaN:(u=(t-e)/r,.5*z(-x(u))/r)}}f.exports=l
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=c(),O=o();F(q,"factory",O);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
