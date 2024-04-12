// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function r(t,i,r){return s(t)||s(i)||s(r)||r<=0?NaN:.5*n(-e((t-i)/r))/r}function m(t,r){return s(t)||s(r)||r<=0?i(NaN):function(i){if(s(i))return NaN;return.5*n(-e((i-t)/r))/r}}t(r,"factory",m);export{r as default,m as factory};
//# sourceMappingURL=index.mjs.map
