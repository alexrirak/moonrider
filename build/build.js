!function(e){var t=this.webpackHotUpdate;this.webpackHotUpdate=function(e,a){!function(e,t){if(!w[e]||!A[e])return;for(var a in A[e]=!1,t)Object.prototype.hasOwnProperty.call(t,a)&&(f[a]=t[a]);0==--g&&0===y&&k()}(e,a),t&&t(e,a)};var a,s=!0,n="6a4f94c95f1a1f13ce32",r={},o=[],i=[];function c(e){var t=P[e];if(!t)return I;var s=function(s){return t.hot.active?(P[s]?-1===P[s].parents.indexOf(e)&&P[s].parents.push(e):(o=[e],a=s),-1===t.children.indexOf(s)&&t.children.push(s)):(console.warn("[HMR] unexpected require("+s+") from disposed module "+e),o=[]),I(s)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(t){I[e]=t}}};for(var r in I)Object.prototype.hasOwnProperty.call(I,r)&&"e"!==r&&"t"!==r&&Object.defineProperty(s,r,n(r));return s.e=function(e){return"ready"===u&&h("prepare"),y++,I.e(e).then(t,(function(e){throw t(),e}));function t(){y--,"prepare"===u&&(v[e]||T(e),0===y&&0===g&&k())}},s.t=function(e,t){return 1&t&&(e=s(e)),I.t(e,-2&t)},s}function d(t){var s={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:a!==t,active:!0,accept:function(e,t){if(void 0===e)s._selfAccepted=!0;else if("function"==typeof e)s._selfAccepted=e;else if("object"==typeof e)for(var a=0;a<e.length;a++)s._acceptedDependencies[e[a]]=t||function(){};else s._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)s._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)s._declinedDependencies[e[t]]=!0;else s._declinedDependencies[e]=!0},dispose:function(e){s._disposeHandlers.push(e)},addDisposeHandler:function(e){s._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=s._disposeHandlers.indexOf(e);t>=0&&s._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(f={})[t]=e[t],h("ready");break;case"ready":x(t);break;case"prepare":case"check":case"dispose":case"apply":(b=b||[]).push(t)}},check:E,apply:R,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:r[t]};return a=void 0,s}var l=[],u="idle";function h(e){u=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var m,f,p,b,g=0,y=0,v={},A={},w={};function S(e){return+e+""===e?+e:e}function E(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return s=e,h("check"),(t=1e4,t=t||1e4,new Promise((function(e,a){if("undefined"==typeof XMLHttpRequest)return a(new Error("No browser support"));try{var s=new XMLHttpRequest,r=I.p+""+n+".hot-update.json";s.open("GET",r,!0),s.timeout=t,s.send(null)}catch(e){return a(e)}s.onreadystatechange=function(){if(4===s.readyState)if(0===s.status)a(new Error("Manifest request to "+r+" timed out."));else if(404===s.status)e();else if(200!==s.status&&304!==s.status)a(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(s.responseText)}catch(e){return void a(e)}e(t)}}}))).then((function(e){if(!e)return h(N()?"ready":"idle"),null;A={},v={},w=e.c,p=e.h,h("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));f={};return T(0),"prepare"===u&&0===y&&0===g&&k(),t}));var t}function T(e){w[e]?(A[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=I.p+""+e+"."+n+".hot-update.js",document.head.appendChild(t)}(e)):v[e]=!0}function k(){h("ready");var e=m;if(m=null,e)if(s)Promise.resolve().then((function(){return R(s)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var a in f)Object.prototype.hasOwnProperty.call(f,a)&&t.push(S(a));e.resolve(t)}}function R(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function t(s){var i,c,d,l,u;function m(e){for(var t=[e],a={},s=t.map((function(e){return{chain:[e],id:e}}));s.length>0;){var n=s.pop(),r=n.id,o=n.chain;if((l=P[r])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:r};if(l.hot._main)return{type:"unaccepted",chain:o,moduleId:r};for(var i=0;i<l.parents.length;i++){var c=l.parents[i],d=P[c];if(d){if(d.hot._declinedDependencies[r])return{type:"declined",chain:o.concat([c]),moduleId:r,parentId:c};-1===t.indexOf(c)&&(d.hot._acceptedDependencies[r]?(a[c]||(a[c]=[]),g(a[c],[r])):(delete a[c],t.push(c),s.push({chain:o.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:a}}function g(e,t){for(var a=0;a<t.length;a++){var s=t[a];-1===e.indexOf(s)&&e.push(s)}}N();var y={},v=[],A={},E=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var T in f)if(Object.prototype.hasOwnProperty.call(f,T)){var k;u=S(T),k=f[T]?m(u):{type:"disposed",moduleId:T};var R=!1,x=!1,C=!1,M="";switch(k.chain&&(M="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":s.onDeclined&&s.onDeclined(k),s.ignoreDeclined||(R=new Error("Aborted because of self decline: "+k.moduleId+M));break;case"declined":s.onDeclined&&s.onDeclined(k),s.ignoreDeclined||(R=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+M));break;case"unaccepted":s.onUnaccepted&&s.onUnaccepted(k),s.ignoreUnaccepted||(R=new Error("Aborted because "+u+" is not accepted"+M));break;case"accepted":s.onAccepted&&s.onAccepted(k),x=!0;break;case"disposed":s.onDisposed&&s.onDisposed(k),C=!0;break;default:throw new Error("Unexception type "+k.type)}if(R)return h("abort"),Promise.reject(R);if(x)for(u in A[u]=f[u],g(v,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,u)&&(y[u]||(y[u]=[]),g(y[u],k.outdatedDependencies[u]));C&&(g(v,[k.moduleId]),A[u]=E)}var j,D=[];for(c=0;c<v.length;c++)u=v[c],P[u]&&P[u].hot._selfAccepted&&A[u]!==E&&!P[u].hot._selfInvalidated&&D.push({module:u,parents:P[u].parents.slice(),errorHandler:P[u].hot._selfAccepted});h("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)}));var L,O,Z=v.slice();for(;Z.length>0;)if(u=Z.pop(),l=P[u]){var _={},U=l.hot._disposeHandlers;for(d=0;d<U.length;d++)(i=U[d])(_);for(r[u]=_,l.hot.active=!1,delete P[u],delete y[u],d=0;d<l.children.length;d++){var F=P[l.children[d]];F&&((j=F.parents.indexOf(u))>=0&&F.parents.splice(j,1))}}for(u in y)if(Object.prototype.hasOwnProperty.call(y,u)&&(l=P[u]))for(O=y[u],d=0;d<O.length;d++)L=O[d],(j=l.children.indexOf(L))>=0&&l.children.splice(j,1);h("apply"),void 0!==p&&(n=p,p=void 0);for(u in f=void 0,A)Object.prototype.hasOwnProperty.call(A,u)&&(e[u]=A[u]);var q=null;for(u in y)if(Object.prototype.hasOwnProperty.call(y,u)&&(l=P[u])){O=y[u];var B=[];for(c=0;c<O.length;c++)if(L=O[c],i=l.hot._acceptedDependencies[L]){if(-1!==B.indexOf(i))continue;B.push(i)}for(c=0;c<B.length;c++){i=B[c];try{i(O)}catch(e){s.onErrored&&s.onErrored({type:"accept-errored",moduleId:u,dependencyId:O[c],error:e}),s.ignoreErrored||q||(q=e)}}}for(c=0;c<D.length;c++){var H=D[c];u=H.module,o=H.parents,a=u;try{I(u)}catch(e){if("function"==typeof H.errorHandler)try{H.errorHandler(e)}catch(t){s.onErrored&&s.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,originalError:e}),s.ignoreErrored||q||(q=t),q||(q=e)}else s.onErrored&&s.onErrored({type:"self-accept-errored",moduleId:u,error:e}),s.ignoreErrored||q||(q=e)}}if(q)return h("fail"),Promise.reject(q);if(b)return t(s).then((function(e){return v.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return h("idle"),new Promise((function(e){e(v)}))}(t=t||{})}function N(){if(b)return f||(f={}),b.forEach(x),b=void 0,!0}function x(t){Object.prototype.hasOwnProperty.call(f,t)||(f[t]=e[t])}var P={};function I(t){if(P[t])return P[t].exports;var a=P[t]={i:t,l:!1,exports:{},hot:d(t),parents:(i=o,o=[],i),children:[]};return e[t].call(a.exports,a,a.exports,c(t)),a.l=!0,a.exports}I.m=e,I.c=P,I.d=function(e,t,a){I.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},I.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,t){if(1&t&&(e=I(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(I.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)I.d(a,s,function(t){return e[t]}.bind(null,s));return a},I.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(t,"a",t),t},I.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},I.p="",I.h=function(){return n},c(41)(I.s=41)}([function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return _l})),a.d(t,"b",(function(){return Zd})),a.d(t,"c",(function(){return Ed})),a.d(t,"d",(function(){return md})),a.d(t,"e",(function(){return Bl})),a.d(t,"f",(function(){return _d})),a.d(t,"g",(function(){return E})),a.d(t,"h",(function(){return Fd})),a.d(t,"i",(function(){return Hl})),a.d(t,"j",(function(){return zl})),a.d(t,"k",(function(){return _})),a.d(t,"l",(function(){return du})),a.d(t,"m",(function(){return pt})),a.d(t,"n",(function(){return z})),a.d(t,"o",(function(){return H})),a.d(t,"p",(function(){return id})),a.d(t,"q",(function(){return A})),a.d(t,"r",(function(){return rt})),a.d(t,"s",(function(){return b})),a.d(t,"t",(function(){return sd})),a.d(t,"u",(function(){return su})),a.d(t,"v",(function(){return bu})),a.d(t,"w",(function(){return pu})),a.d(t,"x",(function(){return Id})),a.d(t,"y",(function(){return pd})),a.d(t,"z",(function(){return bd})),a.d(t,"A",(function(){return ud})),a.d(t,"B",(function(){return au})),a.d(t,"C",(function(){return mu})),a.d(t,"D",(function(){return jd})),a.d(t,"E",(function(){return gd})),a.d(t,"F",(function(){return Nd})),a.d(t,"G",(function(){return xd})),a.d(t,"H",(function(){return Md})),a.d(t,"I",(function(){return jl})),a.d(t,"J",(function(){return Ml})),a.d(t,"K",(function(){return kd})),a.d(t,"L",(function(){return ou})),a.d(t,"M",(function(){return Jl})),a.d(t,"N",(function(){return Kl})),a.d(t,"O",(function(){return Ql})),a.d(t,"P",(function(){return Yl})),a.d(t,"Q",(function(){return Xl})),a.d(t,"R",(function(){return $l})),a.d(t,"S",(function(){return gu})),a.d(t,"T",(function(){return Rl})),a.d(t,"U",(function(){return Nl})),a.d(t,"V",(function(){return Dd})),a.d(t,"W",(function(){return Ld})),a.d(t,"X",(function(){return nu})),a.d(t,"Y",(function(){return ru})),a.d(t,"Z",(function(){return Tl})),a.d(t,"ab",(function(){return vl})),a.d(t,"bb",(function(){return vd})),a.d(t,"cb",(function(){return yd})),a.d(t,"db",(function(){return hu})),a.d(t,"eb",(function(){return fu})),a.d(t,"fb",(function(){return eu})),a.d(t,"gb",(function(){return m})),a.d(t,"hb",(function(){return Gl})),a.d(t,"ib",(function(){return Il})),a.d(t,"jb",(function(){return Pl})),a.d(t,"kb",(function(){return tu})),a.d(t,"lb",(function(){return Cd})),a.d(t,"mb",(function(){return wl}));var s=a(3),n=a(6),r=a(5),o=a(1),i=a(4);const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="10.7.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new r.b("@firebase/firestore");function h(){return u.logLevel}function m(e){u.setLogLevel(e)}function f(e,...t){if(u.logLevel<=r.a.DEBUG){const a=t.map(g);u.debug(`Firestore (${l}): ${e}`,...a)}}function p(e,...t){if(u.logLevel<=r.a.ERROR){const a=t.map(g);u.error(`Firestore (${l}): ${e}`,...a)}}function b(e,...t){if(u.logLevel<=r.a.WARN){const a=t.map(g);u.warn(`Firestore (${l}): ${e}`,...a)}}function g(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw p(t),new Error(t)}function v(e,t){e||y()}function A(e,t){e||y()}function w(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends o.c{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class R{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(d.UNAUTHENTICATED))}shutdown(){}}class N{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class x{constructor(e){this.t=e,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let a=this.i;const s=e=>this.i!==a?(a=this.i,t(e)):Promise.resolve();let n=new T;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new T,e.enqueueRetryable(()=>s(this.currentUser))};const r=()=>{const t=n;e.enqueueRetryable(async()=>{await t.promise,await s(this.currentUser)})},o=e=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),n.resolve(),n=new T)}},0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(v("string"==typeof t.accessToken),new k(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return v(null===e||"string"==typeof e),new d(e)}}class P{constructor(e,t,a){this.l=e,this.h=t,this.P=a,this.type="FirstParty",this.user=d.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class I{constructor(e,t,a){this.l=e,this.h=t,this.P=a}getToken(){return Promise.resolve(new P(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const a=e=>{null!=e.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const a=e.token!==this.R;return this.R=e.token,f("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>a(t))};const s=e=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>s(e)),setTimeout(()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?s(e):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(v("string"==typeof e.token),this.R=e.token,new C(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),a=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(a);else for(let t=0;t<e;t++)a[t]=Math.floor(256*Math.random());return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let a="";for(;a.length<20;){const s=j(40);for(let n=0;n<s.length;++n)a.length<20&&s[n]<t&&(a+=e.charAt(s[n]%e.length))}return a}}function L(e,t){return e<t?-1:e>t?1:0}function O(e,t,a){return e.length===t.length&&e.every((e,s)=>a(e,t[s]))}function Z(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _.fromMillis(Date.now())}static fromDate(e){return _.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),a=Math.floor(1e6*(e-1e3*t));return new _(t,a)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new _(0,0))}static max(){return new U(new _(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t,a){void 0===t?t=0:t>e.length&&y(),void 0===a?a=e.length-t:a>e.length-t&&y(),this.segments=e,this.offset=t,this.len=a}get length(){return this.len}isEqual(e){return 0===F.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof F?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,a=this.limit();t<a;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const a=Math.min(e.length,t.length);for(let s=0;s<a;s++){const a=e.get(s),n=t.get(s);if(a<n)return-1;if(a>n)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends F{construct(e,t,a){return new q(e,t,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const a of e){if(a.indexOf("//")>=0)throw new E(S.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);t.push(...a.split("/").filter(e=>e.length>0))}return new q(t)}static emptyPath(){return new q([])}}const B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends F{construct(e,t,a){return new H(e,t,a)}static isValidIdentifier(e){return B.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(e){const t=[];let a="",s=0;const n=()=>{if(0===a.length)throw new E(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(a),a=""};let r=!1;for(;s<e.length;){const t=e[s];if("\\"===t){if(s+1===e.length)throw new E(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[s+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=t,s+=2}else"`"===t?(r=!r,s++):"."!==t||r?(a+=t,s++):(n(),s++)}if(n(),r)throw new E(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new H(t)}static emptyPath(){return new H([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(q.fromString(e))}static fromName(e){return new z(q.fromString(e).popFirst(5))}static empty(){return new z(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===q.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new q(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t,a,s){this.indexId=e,this.collectionGroup=t,this.fields=a,this.indexState=s}}function G(e){return e.fields.find(e=>2===e.kind)}function J(e){return e.fields.filter(e=>2!==e.kind)}V.UNKNOWN_ID=-1;class W{constructor(e,t){this.fieldPath=e,this.kind=t}}class K{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new K(0,X.min())}}function Q(e,t){const a=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,n=U.fromTimestamp(1e9===s?new _(a+1,0):new _(a,s));return new X(n,z.empty(),t)}function Y(e){return new X(e.readTime,e.key,-1)}class X{constructor(e,t,a){this.readTime=e,this.documentKey=t,this.largestBatchId=a}static min(){return new X(U.min(),z.empty(),-1)}static max(){return new X(U.max(),z.empty(),-1)}}function $(e,t){let a=e.readTime.compareTo(t.readTime);return 0!==a?a:(a=z.comparator(e.documentKey,t.documentKey),0!==a?a:L(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class te{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e){if(e.code!==S.FAILED_PRECONDITION||e.message!==ee)throw e;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new se((a,s)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(a,s)},this.catchCallback=e=>{this.wrapFailure(t,e).next(a,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof se?t:se.resolve(t)}catch(e){return se.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):se.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):se.reject(t)}static resolve(e){return new se((t,a)=>{t(e)})}static reject(e){return new se((t,a)=>{a(e)})}static waitFor(e){return new se((t,a)=>{let s=0,n=0,r=!1;e.forEach(e=>{++s,e.next(()=>{++n,r&&n===s&&t()},e=>a(e))}),r=!0,n===s&&t()})}static or(e){let t=se.resolve(!1);for(const a of e)t=t.next(e=>e?se.resolve(e):a());return t}static forEach(e,t){const a=[];return e.forEach((e,s)=>{a.push(t.call(this,e,s))}),this.waitFor(a)}static mapArray(e,t){return new se((a,s)=>{const n=e.length,r=new Array(n);let o=0;for(let i=0;i<n;i++){const c=i;t(e[c]).next(e=>{r[c]=e,++o,o===n&&a(r)},e=>s(e))}})}static doWhile(e,t){return new se((a,s)=>{const n=()=>{!0===e()?t().next(()=>{n()},s):a()};n()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new T,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new ie(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{const a=he(t.target.error);this.V.reject(new ie(e,a))}}static open(e,t,a,s){try{return new ne(t,e.transaction(s,a))}catch(e){throw new ie(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(f("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new de(t)}}class re{constructor(e,t,a){this.name=e,this.version=t,this.p=a,12.2===re.S(Object(o.p)())&&p("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return f("SimpleDb","Removing database:",e),le(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Object(o.r)())return!1;if(re.C())return!0;const e=Object(o.p)(),t=re.S(e),a=0<t&&t<10,s=re.v(e),n=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||a||n)}static C(){var t;return void 0!==e&&"YES"===(null===(t=e.env)||void 0===t?void 0:t.F)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),a=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(a)}static v(e){const t=e.match(/Android ([\d.]+)/i),a=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(a)}async O(e){return this.db||(f("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,a)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=e=>{const a=e.target.result;t(a)},s.onblocked=()=>{a(new ie(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=t=>{const s=t.target.error;"VersionError"===s.name?a(new E(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===s.name?a(new E(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+s)):a(new ie(e,s))},s.onupgradeneeded=e=>{f("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.p.N(t,s.transaction,e.oldVersion,this.version).next(()=>{f("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,a,s){const n="readonly"===t;let r=0;for(;;){++r;try{this.db=await this.O(e);const t=ne.open(this.db,e,n?"readonly":"readwrite",a),r=s(t).next(e=>(t.g(),e)).catch(e=>(t.abort(e),se.reject(e))).toPromise();return r.catch(()=>{}),await t.m,r}catch(e){const t=e,a="FirebaseError"!==t.name&&r<3;if(f("SimpleDb","Transaction failed with error:",t.message,"Retrying:",a),this.close(),!a)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class oe{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return le(this.k.delete())}}class ie extends E{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ce(e){return"IndexedDbTransactionError"===e.name}class de{constructor(e){this.store=e}put(e,t){let a;return void 0!==t?(f("SimpleDb","PUT",this.store.name,e,t),a=this.store.put(t,e)):(f("SimpleDb","PUT",this.store.name,"<auto-key>",e),a=this.store.put(e)),le(a)}add(e){return f("SimpleDb","ADD",this.store.name,e,e),le(this.store.add(e))}get(e){return le(this.store.get(e)).next(t=>(void 0===t&&(t=null),f("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return f("SimpleDb","DELETE",this.store.name,e),le(this.store.delete(e))}count(){return f("SimpleDb","COUNT",this.store.name),le(this.store.count())}W(e,t){const a=this.options(e,t);if(a.index||"function"!=typeof this.store.getAll){const e=this.cursor(a),t=[];return this.G(e,(e,a)=>{t.push(a)}).next(()=>t)}{const e=this.store.getAll(a.range);return new se((t,a)=>{e.onerror=e=>{a(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}j(e,t){const a=this.store.getAll(e,null===t?void 0:t);return new se((e,t)=>{a.onerror=e=>{t(e.target.error)},a.onsuccess=t=>{e(t.target.result)}})}H(e,t){f("SimpleDb","DELETE ALL",this.store.name);const a=this.options(e,t);a.J=!1;const s=this.cursor(a);return this.G(s,(e,t,a)=>a.delete())}Y(e,t){let a;t?a=e:(a={},t=e);const s=this.cursor(a);return this.G(s,t)}Z(e){const t=this.cursor({});return new se((a,s)=>{t.onerror=e=>{const t=he(e.target.error);s(t)},t.onsuccess=t=>{const s=t.target.result;s?e(s.primaryKey,s.value).next(e=>{e?s.continue():a()}):a()}})}G(e,t){const a=[];return new se((s,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{const n=e.target.result;if(!n)return void s();const r=new oe(n),o=t(n.primaryKey,n.value,r);if(o instanceof se){const e=o.catch(e=>(r.done(),se.reject(e)));a.push(e)}r.isDone?s():null===r.$?n.continue():n.continue(r.$)}}).next(()=>se.waitFor(a))}options(e,t){let a;return void 0!==e&&("string"==typeof e?a=e:t=e),{index:a,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const a=this.store.index(e.index);return e.J?a.openKeyCursor(e.range,t):a.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function le(e){return new se((t,a)=>{e.onsuccess=e=>{const a=e.target.result;t(a)},e.onerror=e=>{const t=he(e.target.error);a(t)}})}let ue=!1;function he(e){const t=re.S(Object(o.p)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ue||(ue=!0,setTimeout(()=>{throw e},0)),e}}return e}class me{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}ee(e){f("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{f("IndexBackiller","Documents written: "+await this.X.te())}catch(e){ce(e)?f("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await ae(e)}await this.ee(6e4)})}}class fe{constructor(e,t){this.localStore=e,this.persistence=t}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ne(t,e))}ne(e,t){const a=new Set;let s=t,n=!0;return se.doWhile(()=>!0===n&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!a.has(t))return f("IndexBackiller","Processing collection: "+t),this.re(e,t,s).next(e=>{s-=e,a.add(t)});n=!1})).next(()=>t-s)}re(e,t,a){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,a).next(a=>{const n=a.changes;return this.localStore.indexManager.updateIndexEntries(e,n).next(()=>this.ie(s,a)).next(a=>(f("IndexBackiller","Updating offset: "+a),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>n.size)}))}ie(e,t){let a=e;return t.changes.forEach((e,t)=>{const s=Y(t);$(s,a)>0&&(a=s)}),new X(a.readTime,a.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}function be(e){return null==e}function ge(e){return 0===e&&1/e==-1/0}function ye(e){return"number"==typeof e&&Number.isInteger(e)&&!ge(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){let t="";for(let a=0;a<e.length;a++)t.length>0&&(t=we(t)),t=Ae(e.get(a),t);return we(t)}function Ae(e,t){let a=t;const s=e.length;for(let t=0;t<s;t++){const s=e.charAt(t);switch(s){case"\0":a+="";break;case"":a+="";break;default:a+=s}}return a}function we(e){return e+""}function Se(e){const t=e.length;if(v(t>=2),2===t)return v(""===e.charAt(0)&&""===e.charAt(1)),q.emptyPath();const a=t-2,s=[];let n="";for(let r=0;r<t;){const t=e.indexOf("",r);switch((t<0||t>a)&&y(),e.charAt(t+1)){case"":const a=e.substring(r,t);let o;0===n.length?o=a:(n+=a,o=n,n=""),s.push(o);break;case"":n+=e.substring(r,t),n+="\0";break;case"":n+=e.substring(r,t+1);break;default:y()}r=t+2}return new q(s)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe._e=-1;const Ee=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t){return[e,ve(t)]}function ke(e,t,a){return[e,ve(t),a]}const Re={},Ne=["prefixPath","collectionGroup","readTime","documentId"],xe=["prefixPath","collectionGroup","documentId"],Pe=["collectionGroup","readTime","prefixPath","documentId"],Ie=["canonicalId","targetId"],Ce=["targetId","path"],Me=["path","targetId"],je=["collectionId","parent"],De=["indexId","uid"],Le=["uid","sequenceNumber"],Oe=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ze=["indexId","uid","orderedDocumentKey"],_e=["userId","collectionPath","documentId"],Ue=["userId","collectionPath","largestBatchId"],Fe=["userId","collectionGroup","largestBatchId"],qe=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Be=[...qe,"documentOverlays"],He=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ze=He,Ve=[...ze,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends te{constructor(e,t){super(),this.ae=e,this.currentSequenceNumber=t}}function Je(e,t){const a=w(e);return re.M(a.ae,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e){let t=0;for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&t++;return t}function Ke(e,t){for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&t(a,e[a])}function Qe(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.comparator=e,this.root=t||$e.EMPTY}insert(e,t){return new Ye(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const a=this.comparator(e,t.key);if(0===a)return t.value;a<0?t=t.left:a>0&&(t=t.right)}return null}indexOf(e){let t=0,a=this.root;for(;!a.isEmpty();){const s=this.comparator(e,a.key);if(0===s)return t+a.left.size;s<0?a=a.left:(t+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,a)=>(e(t,a),!1))}toString(){const e=[];return this.inorderTraversal((t,a)=>(e.push(`${t}:${a}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xe(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xe(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xe(this.root,e,this.comparator,!0)}}class Xe{constructor(e,t,a,s){this.isReverse=s,this.nodeStack=[];let n=1;for(;!e.isEmpty();)if(n=t?a(e.key,t):1,t&&s&&(n*=-1),n<0)e=this.isReverse?e.left:e.right;else{if(0===n){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,t,a,s,n){this.key=e,this.value=t,this.color=null!=a?a:$e.RED,this.left=null!=s?s:$e.EMPTY,this.right=null!=n?n:$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,a,s,n){return new $e(null!=e?e:this.key,null!=t?t:this.value,null!=a?a:this.color,null!=s?s:this.left,null!=n?n:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,a){let s=this;const n=a(e,s.key);return s=n<0?s.copy(null,null,null,s.left.insert(e,t,a),null):0===n?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,a)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let a,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===t(e,s.key)){if(s.right.isEmpty())return $e.EMPTY;a=s.right.min(),s=s.copy(a.key,a.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1,$e.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,a,s,n){return this}insert(e,t,a){return new $e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,a)=>(e(t),!1))}forEachInRange(e,t){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const s=a.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let a;for(a=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tt(this.data.getIterator())}getIteratorFrom(e){return new tt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof et))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),a=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=a.getNext().key;if(0!==this.comparator(e,s))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new et(this.comparator);return t.data=e,t}}class tt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function at(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.fields=e,e.sort(H.comparator)}static empty(){return new st([])}unionWith(e){let t=new et(H.comparator);for(const e of this.fields)t=t.add(e);for(const a of e)t=t.add(a);return new st(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return O(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new nt("Invalid base64 string: "+e):e}}(e);return new ot(t)}static fromUint8Array(e){const t=function(e){let t="";for(let a=0;a<e.length;++a)t+=String.fromCharCode(e[a]);return t}(e);return new ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let a=0;a<e.length;a++)t[a]=e.charCodeAt(a);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const it=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ct(e){if(v(!!e),"string"==typeof e){let t=0;const a=it.exec(e);if(v(!!a),a[1]){let e=a[1];e=(e+"000000000").substr(0,9),t=Number(e)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:dt(e.seconds),nanos:dt(e.nanos)}}function dt(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function lt(e){return"string"==typeof e?ot.fromBase64String(e):ot.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){var t,a;return"server_timestamp"===(null===(a=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===a?void 0:a.stringValue)}function ht(e){const t=e.mapValue.fields.__previous_value__;return ut(t)?ht(t):t}function mt(e){const t=ct(e.mapValue.fields.__local_write_time__.timestampValue);return new _(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,a,s,n,r,o,i,c){this.databaseId=e,this.appId=t,this.persistenceKey=a,this.host=s,this.ssl=n,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=i,this.useFetchStreams=c}}class pt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new pt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof pt&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},gt={nullValue:"NULL_VALUE"};function yt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ut(e)?4:Ct(e)?9007199254740991:10:y()}function vt(e,t){if(e===t)return!0;const a=yt(e);if(a!==yt(t))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return mt(e).isEqual(mt(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const a=ct(e.timestampValue),s=ct(t.timestampValue);return a.seconds===s.seconds&&a.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return lt(e.bytesValue).isEqual(lt(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return dt(e.geoPointValue.latitude)===dt(t.geoPointValue.latitude)&&dt(e.geoPointValue.longitude)===dt(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return dt(e.integerValue)===dt(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const a=dt(e.doubleValue),s=dt(t.doubleValue);return a===s?ge(a)===ge(s):isNaN(a)&&isNaN(s)}return!1}(e,t);case 9:return O(e.arrayValue.values||[],t.arrayValue.values||[],vt);case 10:return function(e,t){const a=e.mapValue.fields||{},s=t.mapValue.fields||{};if(We(a)!==We(s))return!1;for(const e in a)if(a.hasOwnProperty(e)&&(void 0===s[e]||!vt(a[e],s[e])))return!1;return!0}(e,t);default:return y()}}function At(e,t){return void 0!==(e.values||[]).find(e=>vt(e,t))}function wt(e,t){if(e===t)return 0;const a=yt(e),s=yt(t);if(a!==s)return L(a,s);switch(a){case 0:case 9007199254740991:return 0;case 1:return L(e.booleanValue,t.booleanValue);case 2:return function(e,t){const a=dt(e.integerValue||e.doubleValue),s=dt(t.integerValue||t.doubleValue);return a<s?-1:a>s?1:a===s?0:isNaN(a)?isNaN(s)?0:-1:1}(e,t);case 3:return St(e.timestampValue,t.timestampValue);case 4:return St(mt(e),mt(t));case 5:return L(e.stringValue,t.stringValue);case 6:return function(e,t){const a=lt(e),s=lt(t);return a.compareTo(s)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const a=e.split("/"),s=t.split("/");for(let e=0;e<a.length&&e<s.length;e++){const t=L(a[e],s[e]);if(0!==t)return t}return L(a.length,s.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const a=L(dt(e.latitude),dt(t.latitude));return 0!==a?a:L(dt(e.longitude),dt(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const a=e.values||[],s=t.values||[];for(let e=0;e<a.length&&e<s.length;++e){const t=wt(a[e],s[e]);if(t)return t}return L(a.length,s.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===bt.mapValue&&t===bt.mapValue)return 0;if(e===bt.mapValue)return 1;if(t===bt.mapValue)return-1;const a=e.fields||{},s=Object.keys(a),n=t.fields||{},r=Object.keys(n);s.sort(),r.sort();for(let e=0;e<s.length&&e<r.length;++e){const t=L(s[e],r[e]);if(0!==t)return t;const o=wt(a[s[e]],n[r[e]]);if(0!==o)return o}return L(s.length,r.length)}(e.mapValue,t.mapValue);default:throw y()}}function St(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return L(e,t);const a=ct(e),s=ct(t),n=L(a.seconds,s.seconds);return 0!==n?n:L(a.nanos,s.nanos)}function Et(e){return function e(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(e){const t=ct(e);return`time(${t.seconds},${t.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(e){return lt(e).toBase64()}(t.bytesValue):"referenceValue"in t?function(e){return z.fromName(e).toString()}(t.referenceValue):"geoPointValue"in t?function(e){return`geo(${e.latitude},${e.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let a="[",s=!0;for(const n of t.values||[])s?s=!1:a+=",",a+=e(n);return a+"]"}(t.arrayValue):"mapValue"in t?function(t){const a=Object.keys(t.fields||{}).sort();let s="{",n=!0;for(const r of a)n?n=!1:s+=",",s+=`${r}:${e(t.fields[r])}`;return s+"}"}(t.mapValue):y()}(e)}function Tt(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function kt(e){return!!e&&"integerValue"in e}function Rt(e){return!!e&&"arrayValue"in e}function Nt(e){return!!e&&"nullValue"in e}function xt(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Pt(e){return!!e&&"mapValue"in e}function It(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ke(e.mapValue.fields,(e,a)=>t.mapValue.fields[e]=It(a)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let a=0;a<(e.arrayValue.values||[]).length;++a)t.arrayValue.values[a]=It(e.arrayValue.values[a]);return t}return Object.assign({},e)}function Ct(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Mt(e){return"nullValue"in e?gt:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Tt(pt.empty(),z.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:y()}function jt(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Tt(pt.empty(),z.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?bt:y()}function Dt(e,t){const a=wt(e.value,t.value);return 0!==a?a:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Lt(e,t){const a=wt(e.value,t.value);return 0!==a?a:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let a=0;a<e.length-1;++a)if(t=(t.mapValue.fields||{})[e.get(a)],!Pt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=It(t)}setAll(e){let t=H.emptyPath(),a={},s=[];e.forEach((e,n)=>{if(!t.isImmediateParentOf(n)){const e=this.getFieldsMap(t);this.applyChanges(e,a,s),a={},s=[],t=n.popLast()}e?a[n.lastSegment()]=It(e):s.push(n.lastSegment())});const n=this.getFieldsMap(t);this.applyChanges(n,a,s)}delete(e){const t=this.field(e.popLast());Pt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let a=0;a<e.length;++a){let s=t.mapValue.fields[e.get(a)];Pt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(a)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,a){Ke(t,(t,a)=>e[t]=a);for(const t of a)delete e[t]}clone(){return new Ot(It(this.value))}}function Zt(e){const t=[];return Ke(e.fields,(e,a)=>{const s=new H([e]);if(Pt(a)){const e=Zt(a.mapValue).fields;if(0===e.length)t.push(s);else for(const a of e)t.push(s.child(a))}else t.push(s)}),new st(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class _t{constructor(e,t,a,s,n,r,o){this.key=e,this.documentType=t,this.version=a,this.readTime=s,this.createTime=n,this.data=r,this.documentState=o}static newInvalidDocument(e){return new _t(e,0,U.min(),U.min(),U.min(),Ot.empty(),0)}static newFoundDocument(e,t,a,s){return new _t(e,1,t,U.min(),a,s,0)}static newNoDocument(e,t){return new _t(e,2,t,U.min(),U.min(),Ot.empty(),0)}static newUnknownDocument(e,t){return new _t(e,3,t,U.min(),U.min(),Ot.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){this.position=e,this.inclusive=t}}function Ft(e,t,a){let s=0;for(let n=0;n<e.position.length;n++){const r=t[n],o=e.position[n];if(s=r.field.isKeyField()?z.comparator(z.fromName(o.referenceValue),a.key):wt(o,a.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function qt(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let a=0;a<e.position.length;a++)if(!vt(e.position[a],t.position[a]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ht(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{}class Vt extends zt{constructor(e,t,a){super(),this.field=e,this.op=t,this.value=a}static create(e,t,a){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,a):new ea(e,t,a):"array-contains"===t?new na(e,a):"in"===t?new ra(e,a):"not-in"===t?new oa(e,a):"array-contains-any"===t?new ia(e,a):new Vt(e,t,a)}static createKeyFieldInFilter(e,t,a){return"in"===t?new ta(e,a):new aa(e,a)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(wt(t,this.value)):null!==t&&yt(this.value)===yt(t)&&this.matchesComparison(wt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends zt{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new Gt(e,t)}matches(e){return Jt(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Jt(e){return"and"===e.op}function Wt(e){return"or"===e.op}function Kt(e){return Qt(e)&&Jt(e)}function Qt(e){for(const t of e.filters)if(t instanceof Gt)return!1;return!0}function Yt(e,t){return e instanceof Vt?function(e,t){return t instanceof Vt&&e.op===t.op&&e.field.isEqual(t.field)&&vt(e.value,t.value)}(e,t):e instanceof Gt?function(e,t){return t instanceof Gt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,a,s)=>e&&Yt(a,t.filters[s]),!0)}(e,t):void y()}function Xt(e,t){const a=e.filters.concat(t);return Gt.create(a,e.op)}function $t(e){return e instanceof Vt?function(e){return`${e.field.canonicalString()} ${e.op} ${Et(e.value)}`}(e):e instanceof Gt?function(e){return e.op.toString()+" {"+e.getFilters().map($t).join(" ,")+"}"}(e):"Filter"}class ea extends Vt{constructor(e,t,a){super(e,t,a),this.key=z.fromName(a.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class ta extends Vt{constructor(e,t){super(e,"in",t),this.keys=sa("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class aa extends Vt{constructor(e,t){super(e,"not-in",t),this.keys=sa("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sa(e,t){var a;return((null===(a=t.arrayValue)||void 0===a?void 0:a.values)||[]).map(e=>z.fromName(e.referenceValue))}class na extends Vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Rt(t)&&At(t.arrayValue,this.value)}}class ra extends Vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&At(this.value.arrayValue,t)}}class oa extends Vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(At(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!At(this.value.arrayValue,t)}}class ia extends Vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Rt(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>At(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t=null,a=[],s=[],n=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=a,this.filters=s,this.limit=n,this.startAt=r,this.endAt=o,this.ce=null}}function da(e,t=null,a=[],s=[],n=null,r=null,o=null){return new ca(e,t,a,s,n,r,o)}function la(e){const t=w(e);if(null===t.ce){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>function e(t){if(t instanceof Vt)return t.field.canonicalString()+t.op.toString()+Et(t.value);if(Kt(t))return t.filters.map(t=>e(t)).join(",");{const a=t.filters.map(t=>e(t)).join(",");return`${t.op}(${a})`}}(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),be(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Et(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Et(e)).join(",")),t.ce=e}return t.ce}function ua(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let a=0;a<e.orderBy.length;a++)if(!Ht(e.orderBy[a],t.orderBy[a]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let a=0;a<e.filters.length;a++)if(!Yt(e.filters[a],t.filters[a]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!qt(e.startAt,t.startAt)&&qt(e.endAt,t.endAt)}function ha(e){return z.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function ma(e,t){return e.filters.filter(e=>e instanceof Vt&&e.field.isEqual(t))}function fa(e,t,a){let s=gt,n=!0;for(const a of ma(e,t)){let e=gt,t=!0;switch(a.op){case"<":case"<=":e=Mt(a.value);break;case"==":case"in":case">=":e=a.value;break;case">":e=a.value,t=!1;break;case"!=":case"not-in":e=gt}Dt({value:s,inclusive:n},{value:e,inclusive:t})<0&&(s=e,n=t)}if(null!==a)for(let r=0;r<e.orderBy.length;++r)if(e.orderBy[r].field.isEqual(t)){const e=a.position[r];Dt({value:s,inclusive:n},{value:e,inclusive:a.inclusive})<0&&(s=e,n=a.inclusive);break}return{value:s,inclusive:n}}function pa(e,t,a){let s=bt,n=!0;for(const a of ma(e,t)){let e=bt,t=!0;switch(a.op){case">=":case">":e=jt(a.value),t=!1;break;case"==":case"in":case"<=":e=a.value;break;case"<":e=a.value,t=!1;break;case"!=":case"not-in":e=bt}Lt({value:s,inclusive:n},{value:e,inclusive:t})>0&&(s=e,n=t)}if(null!==a)for(let r=0;r<e.orderBy.length;++r)if(e.orderBy[r].field.isEqual(t)){const e=a.position[r];Lt({value:s,inclusive:n},{value:e,inclusive:a.inclusive})>0&&(s=e,n=a.inclusive);break}return{value:s,inclusive:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t=null,a=[],s=[],n=null,r="F",o=null,i=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=a,this.filters=s,this.limit=n,this.limitType=r,this.startAt=o,this.endAt=i,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ga(e,t,a,s,n,r,o,i){return new ba(e,t,a,s,n,r,o,i)}function ya(e){return new ba(e)}function va(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Aa(e){return null!==e.collectionGroup}function wa(e){const t=w(e);if(null===t.le){t.le=[];const e=new Set;for(const a of t.explicitOrderBy)t.le.push(a),e.add(a.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new et(H.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new Bt(s,a))}),e.has(H.keyField().canonicalString())||t.le.push(new Bt(H.keyField(),a))}return t.le}function Sa(e){const t=w(e);return t.he||(t.he=Ea(t,wa(e))),t.he}function Ea(e,t){if("F"===e.limitType)return da(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new Bt(e.field,t)});const a=e.endAt?new Ut(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ut(e.startAt.position,e.startAt.inclusive):null;return da(e.path,e.collectionGroup,t,e.filters,e.limit,a,s)}}function Ta(e,t){const a=e.filters.concat([t]);return new ba(e.path,e.collectionGroup,e.explicitOrderBy.slice(),a,e.limit,e.limitType,e.startAt,e.endAt)}function ka(e,t,a){return new ba(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,a,e.startAt,e.endAt)}function Ra(e,t){return ua(Sa(e),Sa(t))&&e.limitType===t.limitType}function Na(e){return`${la(Sa(e))}|lt:${e.limitType}`}function xa(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>$t(e)).join(", ")}]`),be(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Et(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Et(e)).join(",")),`Target(${t})`}(Sa(e))}; limitType=${e.limitType})`}function Pa(e,t){return t.isFoundDocument()&&function(e,t){const a=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(a):z.isDocumentKey(e.path)?e.path.isEqual(a):e.path.isImmediateParentOf(a)}(e,t)&&function(e,t){for(const a of wa(e))if(!a.field.isKeyField()&&null===t.data.field(a.field))return!1;return!0}(e,t)&&function(e,t){for(const a of e.filters)if(!a.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,a){const s=Ft(e,t,a);return e.inclusive?s<=0:s<0}(e.startAt,wa(e),t))&&!(e.endAt&&!function(e,t,a){const s=Ft(e,t,a);return e.inclusive?s>=0:s>0}(e.endAt,wa(e),t))}(e,t)}function Ia(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ca(e){return(t,a)=>{let s=!1;for(const n of wa(e)){const e=Ma(n,t,a);if(0!==e)return e;s=s||n.field.isKeyField()}return 0}}function Ma(e,t,a){const s=e.field.isKeyField()?z.comparator(t.key,a.key):function(e,t,a){const s=t.data.field(e),n=a.data.field(e);return null!==s&&null!==n?wt(s,n):y()}(e.field,t,a);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return y()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),a=this.inner[t];if(void 0!==a)for(const[t,s]of a)if(this.equalsFn(t,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const a=this.mapKeyFn(e),s=this.inner[a];if(void 0===s)return this.inner[a]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),a=this.inner[t];if(void 0===a)return!1;for(let s=0;s<a.length;s++)if(this.equalsFn(a[s][0],e))return 1===a.length?delete this.inner[t]:a.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ke(this.inner,(t,a)=>{for(const[t,s]of a)e(t,s)})}isEmpty(){return Qe(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=new Ye(z.comparator);function La(){return Da}const Oa=new Ye(z.comparator);function Za(...e){let t=Oa;for(const a of e)t=t.insert(a.key,a);return t}function _a(e){let t=Oa;return e.forEach((e,a)=>t=t.insert(e,a.overlayedDocument)),t}function Ua(){return qa()}function Fa(){return qa()}function qa(){return new ja(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ba=new Ye(z.comparator),Ha=new et(z.comparator);function za(...e){let t=Ha;for(const a of e)t=t.add(a);return t}const Va=new et(L);function Ga(){return Va}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ge(t)?"-0":t}}function Wa(e){return{integerValue:""+e}}function Ka(e,t){return ye(t)?Wa(t):Ja(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this._=void 0}}function Ya(e,t,a){return e instanceof es?function(e,t){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ut(t)&&(t=ht(t)),t&&(a.fields.__previous_value__=t),{mapValue:a}}(a,t):e instanceof ts?as(e,t):e instanceof ss?ns(e,t):function(e,t){const a=$a(e,t),s=os(a)+os(e.Ie);return kt(a)&&kt(e.Ie)?Wa(s):Ja(e.serializer,s)}(e,t)}function Xa(e,t,a){return e instanceof ts?as(e,t):e instanceof ss?ns(e,t):a}function $a(e,t){return e instanceof rs?function(e){return kt(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class es extends Qa{}class ts extends Qa{constructor(e){super(),this.elements=e}}function as(e,t){const a=is(t);for(const t of e.elements)a.some(e=>vt(e,t))||a.push(t);return{arrayValue:{values:a}}}class ss extends Qa{constructor(e){super(),this.elements=e}}function ns(e,t){let a=is(t);for(const t of e.elements)a=a.filter(e=>!vt(e,t));return{arrayValue:{values:a}}}class rs extends Qa{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function os(e){return dt(e.integerValue||e.doubleValue)}function is(e){return Rt(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.field=e,this.transform=t}}class ds{constructor(e,t){this.version=e,this.transformResults=t}}class ls{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ls}static exists(e){return new ls(void 0,e)}static updateTime(e){return new ls(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function us(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class hs{}function ms(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Es(e.key,ls.none()):new ys(e.key,e.data,ls.none());{const a=e.data,s=Ot.empty();let n=new et(H.comparator);for(let e of t.fields)if(!n.has(e)){let t=a.field(e);null===t&&e.length>1&&(e=e.popLast(),t=a.field(e)),null===t?s.delete(e):s.set(e,t),n=n.add(e)}return new vs(e.key,s,new st(n.toArray()),ls.none())}}function fs(e,t,a){e instanceof ys?function(e,t,a){const s=e.value.clone(),n=ws(e.fieldTransforms,t,a.transformResults);s.setAll(n),t.convertToFoundDocument(a.version,s).setHasCommittedMutations()}(e,t,a):e instanceof vs?function(e,t,a){if(!us(e.precondition,t))return void t.convertToUnknownDocument(a.version);const s=ws(e.fieldTransforms,t,a.transformResults),n=t.data;n.setAll(As(e)),n.setAll(s),t.convertToFoundDocument(a.version,n).setHasCommittedMutations()}(e,t,a):function(e,t,a){t.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,a)}function ps(e,t,a,s){return e instanceof ys?function(e,t,a,s){if(!us(e.precondition,t))return a;const n=e.value.clone(),r=Ss(e.fieldTransforms,s,t);return n.setAll(r),t.convertToFoundDocument(t.version,n).setHasLocalMutations(),null}(e,t,a,s):e instanceof vs?function(e,t,a,s){if(!us(e.precondition,t))return a;const n=Ss(e.fieldTransforms,s,t),r=t.data;return r.setAll(As(e)),r.setAll(n),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===a?null:a.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,a,s):function(e,t,a){return us(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):a}(e,t,a)}function bs(e,t){let a=null;for(const s of e.fieldTransforms){const e=t.data.field(s.field),n=$a(s.transform,e||null);null!=n&&(null===a&&(a=Ot.empty()),a.set(s.field,n))}return a||null}function gs(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&O(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof ts&&t instanceof ts||e instanceof ss&&t instanceof ss?O(e.elements,t.elements,vt):e instanceof rs&&t instanceof rs?vt(e.Ie,t.Ie):e instanceof es&&t instanceof es}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ys extends hs{constructor(e,t,a,s=[]){super(),this.key=e,this.value=t,this.precondition=a,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vs extends hs{constructor(e,t,a,s,n=[]){super(),this.key=e,this.data=t,this.fieldMask=a,this.precondition=s,this.fieldTransforms=n,this.type=1}getFieldMask(){return this.fieldMask}}function As(e){const t=new Map;return e.fieldMask.fields.forEach(a=>{if(!a.isEmpty()){const s=e.data.field(a);t.set(a,s)}}),t}function ws(e,t,a){const s=new Map;v(e.length===a.length);for(let n=0;n<a.length;n++){const r=e[n],o=r.transform,i=t.data.field(r.field);s.set(r.field,Xa(o,i,a[n]))}return s}function Ss(e,t,a){const s=new Map;for(const n of e){const e=n.transform,r=a.data.field(n.field);s.set(n.field,Ya(e,r,t))}return s}class Es extends hs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ts extends hs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,a,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=a,this.mutations=s}applyToRemoteDocument(e,t){const a=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const s=this.mutations[t];s.key.isEqual(e.key)&&fs(s,e,a[t])}}applyToLocalView(e,t){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(t=ps(a,e,t,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(t=ps(a,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const a=Fa();return this.mutations.forEach(s=>{const n=e.get(s.key),r=n.overlayedDocument;let o=this.applyToLocalView(r,n.mutatedFields);o=t.has(s.key)?null:o;const i=ms(r,o);null!==i&&a.set(s.key,i),r.isValidDocument()||r.convertToNoDocument(U.min())}),a}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),za())}isEqual(e){return this.batchId===e.batchId&&O(this.mutations,e.mutations,(e,t)=>gs(e,t))&&O(this.baseMutations,e.baseMutations,(e,t)=>gs(e,t))}}class Rs{constructor(e,t,a,s){this.batch=e,this.commitVersion=t,this.mutationResults=a,this.docVersions=s}static from(e,t,a){v(e.mutations.length===a.length);let s=Ba;const n=e.mutations;for(let e=0;e<n.length;e++)s=s.insert(n[e].key,a[e].version);return new Rs(e,t,a,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xs{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ps,Is;function Cs(e){switch(e){default:return y();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Ms(e){if(void 0===e)return p("GRPC error has no .code"),S.UNKNOWN;switch(e){case Ps.OK:return S.OK;case Ps.CANCELLED:return S.CANCELLED;case Ps.UNKNOWN:return S.UNKNOWN;case Ps.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ps.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ps.INTERNAL:return S.INTERNAL;case Ps.UNAVAILABLE:return S.UNAVAILABLE;case Ps.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ps.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ps.NOT_FOUND:return S.NOT_FOUND;case Ps.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ps.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ps.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ps.ABORTED:return S.ABORTED;case Ps.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ps.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ps.DATA_LOSS:return S.DATA_LOSS;default:return y()}}(Is=Ps||(Ps={}))[Is.OK=0]="OK",Is[Is.CANCELLED=1]="CANCELLED",Is[Is.UNKNOWN=2]="UNKNOWN",Is[Is.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Is[Is.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Is[Is.NOT_FOUND=5]="NOT_FOUND",Is[Is.ALREADY_EXISTS=6]="ALREADY_EXISTS",Is[Is.PERMISSION_DENIED=7]="PERMISSION_DENIED",Is[Is.UNAUTHENTICATED=16]="UNAUTHENTICATED",Is[Is.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Is[Is.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Is[Is.ABORTED=10]="ABORTED",Is[Is.OUT_OF_RANGE=11]="OUT_OF_RANGE",Is[Is.UNIMPLEMENTED=12]="UNIMPLEMENTED",Is[Is.INTERNAL=13]="INTERNAL",Is[Is.UNAVAILABLE=14]="UNAVAILABLE",Is[Is.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let js=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new i.d([4294967295,4294967295],0);function Os(e){const t=Ds().encode(e),a=new i.e;return a.update(t),new Uint8Array(a.digest())}function Zs(e){const t=new DataView(e.buffer),a=t.getUint32(0,!0),s=t.getUint32(4,!0),n=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new i.d([a,s],0),new i.d([n,r],0)]}class _s{constructor(e,t,a){if(this.bitmap=e,this.padding=t,this.hashCount=a,t<0||t>=8)throw new Us("Invalid padding: "+t);if(a<0)throw new Us("Invalid hash count: "+a);if(e.length>0&&0===this.hashCount)throw new Us("Invalid hash count: "+a);if(0===e.length&&0!==t)throw new Us("Invalid padding when bitmap length is 0: "+t);this.Te=8*e.length-t,this.Ee=i.d.fromNumber(this.Te)}de(e,t,a){let s=e.add(t.multiply(i.d.fromNumber(a)));return 1===s.compare(Ls)&&(s=new i.d([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;const t=Os(e),[a,s]=Zs(t);for(let e=0;e<this.hashCount;e++){const t=this.de(a,s,e);if(!this.Ae(t))return!1}return!0}static create(e,t,a){const s=e%8==0?0:8-e%8,n=new Uint8Array(Math.ceil(e/8)),r=new _s(n,s,t);return a.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Te)return;const t=Os(e),[a,s]=Zs(t);for(let e=0;e<this.hashCount;e++){const t=this.de(a,s,e);this.Re(t)}}Re(e){const t=Math.floor(e/8),a=e%8;this.bitmap[t]|=1<<a}}class Us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t,a,s,n){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=a,this.documentUpdates=s,this.resolvedLimboDocuments=n}static createSynthesizedRemoteEventForCurrentChange(e,t,a){const s=new Map;return s.set(e,qs.createSynthesizedTargetChangeForCurrentChange(e,t,a)),new Fs(U.min(),s,new Ye(L),La(),za())}}class qs{constructor(e,t,a,s,n){this.resumeToken=e,this.current=t,this.addedDocuments=a,this.modifiedDocuments=s,this.removedDocuments=n}static createSynthesizedTargetChangeForCurrentChange(e,t,a){return new qs(a,t,za(),za(),za())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t,a,s){this.Ve=e,this.removedTargetIds=t,this.key=a,this.me=s}}class Hs{constructor(e,t){this.targetId=e,this.fe=t}}class zs{constructor(e,t,a=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=a,this.cause=s}}class Vs{constructor(){this.ge=0,this.pe=Ws(),this.ye=ot.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=za(),t=za(),a=za();return this.pe.forEach((s,n)=>{switch(n){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:a=a.add(s);break;default:y()}}),new qs(this.ye,this.we,e,t,a)}Fe(){this.Se=!1,this.pe=Ws()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,v(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Gs{constructor(e){this.Le=e,this.ke=new Map,this.qe=La(),this.Qe=Js(),this.Ke=new Ye(L)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const a=this.ze(t);switch(e.state){case 0:this.je(t)&&a.Ce(e.resumeToken);break;case 1:a.Ne(),a.be||a.Fe(),a.Ce(e.resumeToken);break;case 2:a.Ne(),a.be||this.removeTarget(t);break;case 3:this.je(t)&&(a.Be(),a.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),a.Ce(e.resumeToken));break;default:y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,a)=>{this.je(a)&&t(a)})}Je(e){const t=e.targetId,a=e.fe.count,s=this.Ye(t);if(s){const n=s.target;if(ha(n))if(0===a){const e=new z(n.path);this.We(t,e,_t.newNoDocument(e,U.min()))}else v(1===a);else{const s=this.Ze(t);if(s!==a){const a=this.Xe(e),n=a?this.et(a,e,s):1;if(0!==n){this.He(t);const e=2===n?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}null==js||js.tt(function(e,t,a,s,n){var r,o,i,c,d,l;const u={localCacheCount:e,existenceFilterCount:t.count,databaseId:a.database,projectId:a.projectId},h=t.unchangedNames;return h&&(u.bloomFilter={applied:0===n,hashCount:null!==(r=null==h?void 0:h.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(c=null===(i=null===(o=null==h?void 0:h.bits)||void 0===o?void 0:o.bitmap)||void 0===i?void 0:i.length)&&void 0!==c?c:0,padding:null!==(l=null===(d=null==h?void 0:h.bits)||void 0===d?void 0:d.padding)&&void 0!==l?l:0,mightContain:e=>{var t;return null!==(t=null==s?void 0:s.mightContain(e))&&void 0!==t&&t}}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(s,e.fe,this.Le.nt(),a,n))}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:a="",padding:s=0},hashCount:n=0}=t;let r,o;try{r=lt(a).toUint8Array()}catch(e){if(e instanceof nt)return b("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new _s(r,s,n)}catch(e){return b(e instanceof Us?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Te?null:o}et(e,t,a){return t.fe.count===a-this.rt(e,t.targetId)?0:2}rt(e,t){const a=this.Le.getRemoteKeysForTarget(t);let s=0;return a.forEach(a=>{const n=this.Le.nt(),r=`projects/${n.projectId}/databases/${n.database}/documents/${a.path.canonicalString()}`;e.mightContain(r)||(this.We(t,a,null),s++)}),s}it(e){const t=new Map;this.ke.forEach((a,s)=>{const n=this.Ye(s);if(n){if(a.current&&ha(n.target)){const t=new z(n.target.path);null!==this.qe.get(t)||this.st(s,t)||this.We(s,t,_t.newNoDocument(t,e))}a.De&&(t.set(s,a.ve()),a.Fe())}});let a=za();this.Qe.forEach((e,t)=>{let s=!0;t.forEachWhile(e=>{const t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(s=!1,!1)}),s&&(a=a.add(e))}),this.qe.forEach((t,a)=>a.setReadTime(e));const s=new Fs(e,t,this.Ke,this.qe,a);return this.qe=La(),this.Qe=Js(),this.Ke=new Ye(L),s}Ue(e,t){if(!this.je(e))return;const a=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,a),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,a){if(!this.je(e))return;const s=this.ze(e);this.st(e,t)?s.Me(t,1):s.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),a&&(this.qe=this.qe.insert(t,a))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new Vs,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new et(L),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=null!==this.Ye(e);return t||f("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Vs),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Js(){return new Ye(z.comparator)}function Ws(){return new Ye(z.comparator)}const Ks={asc:"ASCENDING",desc:"DESCENDING"},Qs={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ys={and:"AND",or:"OR"};class Xs{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $s(e,t){return e.useProto3Json||be(t)?t:{value:t}}function en(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tn(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function an(e,t){return en(e,t.toTimestamp())}function sn(e){return v(!!e),U.fromTimestamp(function(e){const t=ct(e);return new _(t.seconds,t.nanos)}(e))}function nn(e,t){return function(e){return new q(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function rn(e){const t=q.fromString(e);return v(Rn(t)),t}function on(e,t){return nn(e.databaseId,t.path)}function cn(e,t){const a=rn(t);if(a.get(1)!==e.databaseId.projectId)throw new E(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+e.databaseId.projectId);if(a.get(3)!==e.databaseId.database)throw new E(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+e.databaseId.database);return new z(hn(a))}function dn(e,t){return nn(e.databaseId,t)}function ln(e){const t=rn(e);return 4===t.length?q.emptyPath():hn(t)}function un(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function hn(e){return v(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function mn(e,t,a){return{name:on(e,t),fields:a.value.mapValue.fields}}function fn(e,t,a){const s=cn(e,t.name),n=sn(t.updateTime),r=t.createTime?sn(t.createTime):U.min(),o=new Ot({mapValue:{fields:t.fields}}),i=_t.newFoundDocument(s,n,r,o);return a&&i.setHasCommittedMutations(),a?i.setHasCommittedMutations():i}function pn(e,t){let a;if(t instanceof ys)a={update:mn(e,t.key,t.value)};else if(t instanceof Es)a={delete:on(e,t.key)};else if(t instanceof vs)a={update:mn(e,t.key,t.data),updateMask:kn(t.fieldMask)};else{if(!(t instanceof Ts))return y();a={verify:on(e,t.key)}}return t.fieldTransforms.length>0&&(a.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const a=t.transform;if(a instanceof es)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ts)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ss)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof rs)return{fieldPath:t.field.canonicalString(),increment:a.Ie};throw y()}(0,e))),t.precondition.isNone||(a.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:an(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:y()}(e,t.precondition)),a}function bn(e,t){const a=t.currentDocument?function(e){return void 0!==e.updateTime?ls.updateTime(sn(e.updateTime)):void 0!==e.exists?ls.exists(e.exists):ls.none()}(t.currentDocument):ls.none(),s=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let a=null;if("setToServerValue"in t)v("REQUEST_TIME"===t.setToServerValue),a=new es;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];a=new ts(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];a=new ss(e)}else"increment"in t?a=new rs(e,t.increment):y();const s=H.fromServerFormat(t.fieldPath);return new cs(s,a)}(e,t)):[];if(t.update){t.update.name;const n=cn(e,t.update.name),r=new Ot({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new st(t.map(e=>H.fromServerFormat(e)))}(t.updateMask);return new vs(n,r,e,a,s)}return new ys(n,r,a,s)}if(t.delete){const s=cn(e,t.delete);return new Es(s,a)}if(t.verify){const s=cn(e,t.verify);return new Ts(s,a)}return y()}function gn(e,t){return{documents:[dn(e,t.path)]}}function yn(e,t){const a={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(a.parent=dn(e,s),a.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(a.parent=dn(e,s.popLast()),a.structuredQuery.from=[{collectionId:s.lastSegment()}]);const n=function(e){if(0!==e.length)return function e(t){return t instanceof Vt?function(e){if("=="===e.op){if(xt(e.value))return{unaryFilter:{field:En(e.field),op:"IS_NAN"}};if(Nt(e.value))return{unaryFilter:{field:En(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(xt(e.value))return{unaryFilter:{field:En(e.field),op:"IS_NOT_NAN"}};if(Nt(e.value))return{unaryFilter:{field:En(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(e.field),op:wn(e.op),value:e.value}}}(t):t instanceof Gt?function(t){const a=t.getFilters().map(t=>e(t));return 1===a.length?a[0]:{compositeFilter:{op:Sn(t.op),filters:a}}}(t):y()}(Gt.create(e,"and"))}(t.filters);n&&(a.structuredQuery.where=n);const r=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:En(e.field),direction:An(e.dir)}}(e))}(t.orderBy);r&&(a.structuredQuery.orderBy=r);const o=$s(e,t.limit);return null!==o&&(a.structuredQuery.limit=o),t.startAt&&(a.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(a.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),a}function vn(e){let t=ln(e.parent);const a=e.structuredQuery,s=a.from?a.from.length:0;let n=null;if(s>0){v(1===s);const e=a.from[0];e.allDescendants?n=e.collectionId:t=t.child(e.collectionId)}let r=[];a.where&&(r=function(e){const t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Tn(e.unaryFilter.field);return Vt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const a=Tn(e.unaryFilter.field);return Vt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Tn(e.unaryFilter.field);return Vt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const n=Tn(e.unaryFilter.field);return Vt.create(n,"!=",{nullValue:"NULL_VALUE"});default:return y()}}(t):void 0!==t.fieldFilter?function(e){return Vt.create(Tn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Gt.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return y()}}(t.compositeFilter.op))}(t):y()}(e);return t instanceof Gt&&Kt(t)?t.getFilters():[t]}(a.where));let o=[];a.orderBy&&(o=function(e){return e.map(e=>function(e){return new Bt(Tn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(a.orderBy));let i=null;a.limit&&(i=function(e){let t;return t="object"==typeof e?e.value:e,be(t)?null:t}(a.limit));let c=null;a.startAt&&(c=function(e){const t=!!e.before,a=e.values||[];return new Ut(a,t)}(a.startAt));let d=null;return a.endAt&&(d=function(e){const t=!e.before,a=e.values||[];return new Ut(a,t)}(a.endAt)),ga(t,n,o,r,i,"F",c,d)}function An(e){return Ks[e]}function wn(e){return Qs[e]}function Sn(e){return Ys[e]}function En(e){return{fieldPath:e.canonicalString()}}function Tn(e){return H.fromServerFormat(e.fieldPath)}function kn(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Rn(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,a,s,n=U.min(),r=U.min(),o=ot.EMPTY_BYTE_STRING,i=null){this.target=e,this.targetId=t,this.purpose=a,this.sequenceNumber=s,this.snapshotVersion=n,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=i}withSequenceNumber(e){return new Nn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.ut=e}}function Pn(e,t){const a=t.key,s={prefixPath:a.getCollectionPath().popLast().toArray(),collectionGroup:a.collectionGroup,documentId:a.path.lastSegment(),readTime:In(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())s.document=function(e,t){return{name:on(e,t.key),fields:t.data.value.mapValue.fields,updateTime:en(e,t.version.toTimestamp()),createTime:en(e,t.createTime.toTimestamp())}}(e.ut,t);else if(t.isNoDocument())s.noDocument={path:a.path.toArray(),readTime:Cn(t.version)};else{if(!t.isUnknownDocument())return y();s.unknownDocument={path:a.path.toArray(),version:Cn(t.version)}}return s}function In(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Cn(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Mn(e){const t=new _(e.seconds,e.nanoseconds);return U.fromTimestamp(t)}function jn(e,t){const a=(t.baseMutations||[]).map(t=>bn(e.ut,t));for(let e=0;e<t.mutations.length-1;++e){const a=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const s=t.mutations[e+1];a.updateTransforms=s.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const s=t.mutations.map(t=>bn(e.ut,t)),n=_.fromMillis(t.localWriteTimeMs);return new ks(t.batchId,n,a,s)}function Dn(e){const t=Mn(e.readTime),a=void 0!==e.lastLimboFreeSnapshotVersion?Mn(e.lastLimboFreeSnapshotVersion):U.min();let s;return s=function(e){return void 0!==e.documents}(e.query)?function(e){return v(1===e.documents.length),Sa(ya(ln(e.documents[0])))}(e.query):function(e){return Sa(vn(e))}(e.query),new Nn(s,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,a,ot.fromBase64String(e.resumeToken))}function Ln(e,t){const a=Cn(t.snapshotVersion),s=Cn(t.lastLimboFreeSnapshotVersion);let n;n=ha(t.target)?gn(e.ut,t.target):yn(e.ut,t.target);const r=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:la(t.target),readTime:a,resumeToken:r,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:n}}function On(e){const t=vn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ka(t,t.limit,"L"):t}function Zn(e,t){return new Ns(t.largestBatchId,bn(e.ut,t.overlayMutation))}function _n(e,t){const a=t.path.lastSegment();return[e,ve(t.path.popLast()),a]}function Un(e,t,a,s){return{indexId:e,uid:t.uid||"",sequenceNumber:a,readTime:Cn(s.readTime),documentKey:ve(s.documentKey.path),largestBatchId:s.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{getBundleMetadata(e,t){return qn(e).get(t).next(e=>{if(e)return function(e){return{id:e.bundleId,createTime:Mn(e.createTime),version:e.version}}(e)})}saveBundleMetadata(e,t){return qn(e).put(function(e){return{bundleId:e.id,createTime:Cn(sn(e.createTime)),version:e.version}}(t))}getNamedQuery(e,t){return Bn(e).get(t).next(e=>{if(e)return function(e){return{name:e.name,query:On(e.bundledQuery),readTime:Mn(e.readTime)}}(e)})}saveNamedQuery(e,t){return Bn(e).put(function(e){return{name:e.name,readTime:Cn(sn(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function qn(e){return Je(e,"bundles")}function Bn(e){return Je(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this.serializer=e,this.userId=t}static ct(e,t){const a=t.uid||"";return new Hn(e,a)}getOverlay(e,t){return zn(e).get(_n(this.userId,t)).next(e=>e?Zn(this.serializer,e):null)}getOverlays(e,t){const a=Ua();return se.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&a.set(t,e)})).next(()=>a)}saveOverlays(e,t,a){const s=[];return a.forEach((a,n)=>{const r=new Ns(t,n);s.push(this.lt(e,r))}),se.waitFor(s)}removeOverlaysForBatchId(e,t,a){const s=new Set;t.forEach(e=>s.add(ve(e.getCollectionPath())));const n=[];return s.forEach(t=>{const s=IDBKeyRange.bound([this.userId,t,a],[this.userId,t,a+1],!1,!0);n.push(zn(e).H("collectionPathOverlayIndex",s))}),se.waitFor(n)}getOverlaysForCollection(e,t,a){const s=Ua(),n=ve(t),r=IDBKeyRange.bound([this.userId,n,a],[this.userId,n,Number.POSITIVE_INFINITY],!0);return zn(e).W("collectionPathOverlayIndex",r).next(e=>{for(const t of e){const e=Zn(this.serializer,t);s.set(e.getKey(),e)}return s})}getOverlaysForCollectionGroup(e,t,a,s){const n=Ua();let r;const o=IDBKeyRange.bound([this.userId,t,a],[this.userId,t,Number.POSITIVE_INFINITY],!0);return zn(e).Y({index:"collectionGroupOverlayIndex",range:o},(e,t,a)=>{const o=Zn(this.serializer,t);n.size()<s||o.largestBatchId===r?(n.set(o.getKey(),o),r=o.largestBatchId):a.done()}).next(()=>n)}lt(e,t){return zn(e).put(function(e,t,a){const[s,n,r]=_n(t,a.mutation.key);return{userId:t,collectionPath:n,documentId:r,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:pn(e.ut,a.mutation)}}(this.serializer,this.userId,t))}}function zn(e){return Je(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(dt(e.integerValue));else if("doubleValue"in e){const a=dt(e.doubleValue);isNaN(a)?this.Tt(t,13):(this.Tt(t,15),ge(a)?t.Et(0):t.Et(a))}else if("timestampValue"in e){const a=e.timestampValue;this.Tt(t,20),"string"==typeof a?t.dt(a):(t.dt(""+(a.seconds||"")),t.Et(a.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(lt(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){const a=e.geoPointValue;this.Tt(t,45),t.Et(a.latitude||0),t.Et(a.longitude||0)}else"mapValue"in e?Ct(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):y()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){const a=e.fields||{};this.Tt(t,55);for(const e of Object.keys(a))this.At(e,t),this.Pt(a[e],t)}yt(e,t){const a=e.values||[];this.Tt(t,50);for(const e of a)this.Pt(e,t)}ft(e,t){this.Tt(t,37),z.fromName(e).path.forEach(e=>{this.Tt(t,60),this.wt(e,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}function Gn(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Jn(e){const t=64-function(e){let t=0;for(let a=0;a<8;++a){const s=Gn(255&e[a]);if(t+=s,8!==s)break}return t}(e);return Math.ceil(t/8)}Vn.St=new Vn;class Wn{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){const t=e[Symbol.iterator]();let a=t.next();for(;!a.done;)this.Dt(a.value),a=t.next();this.Ct()}vt(e){const t=e[Symbol.iterator]();let a=t.next();for(;!a.done;)this.Ft(a.value),a=t.next();this.Mt()}xt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Dt(e);else if(e<2048)this.Dt(960|e>>>6),this.Dt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Dt(480|e>>>12),this.Dt(128|63&e>>>6),this.Dt(128|63&e);else{const e=t.codePointAt(0);this.Dt(240|e>>>18),this.Dt(128|63&e>>>12),this.Dt(128|63&e>>>6),this.Dt(128|63&e)}}this.Ct()}Ot(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ft(e);else if(e<2048)this.Ft(960|e>>>6),this.Ft(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ft(480|e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e);else{const e=t.codePointAt(0);this.Ft(240|e>>>18),this.Ft(128|63&e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e)}}this.Mt()}Nt(e){const t=this.Bt(e),a=Jn(t);this.Lt(1+a),this.buffer[this.position++]=255&a;for(let e=t.length-a;e<t.length;++e)this.buffer[this.position++]=255&t[e]}kt(e){const t=this.Bt(e),a=Jn(t);this.Lt(1+a),this.buffer[this.position++]=~(255&a);for(let e=t.length-a;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),a=0!=(128&t[0]);t[0]^=a?255:128;for(let e=1;e<t.length;++e)t[e]^=a?255:0;return t}Dt(e){const t=255&e;0===t?(this.Qt(0),this.Qt(255)):255===t?(this.Qt(255),this.Qt(0)):this.Qt(t)}Ft(e){const t=255&e;0===t?(this.$t(0),this.$t(255)):255===t?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){const t=e+this.position;if(t<=this.buffer.length)return;let a=2*this.buffer.length;a<t&&(a=t);const s=new Uint8Array(a);s.set(this.buffer),this.buffer=s}}class Kn{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class Qn{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class Yn{constructor(){this.Wt=new Wn,this.Gt=new Kn(this.Wt),this.zt=new Qn(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return 0===e?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,a,s){this.indexId=e,this.documentKey=t,this.arrayValue=a,this.directionalValue=s}Ht(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,a=new Uint8Array(t);return a.set(this.directionalValue,0),t!==e?a.set([0],this.directionalValue.length):++a[a.length-1],new Xn(this.indexId,this.documentKey,this.arrayValue,a)}}function $n(e,t){let a=e.indexId-t.indexId;return 0!==a?a:(a=er(e.arrayValue,t.arrayValue),0!==a?a:(a=er(e.directionalValue,t.directionalValue),0!==a?a:z.comparator(e.documentKey,t.documentKey)))}function er(e,t){for(let a=0;a<e.length&&a<t.length;++a){const s=e[a]-t[a];if(0!==s)return s}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.Jt=new et((e,t)=>H.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const t of e.filters){const e=t;e.isInequality()?this.Jt=this.Jt.add(e):this.Zt.push(e)}}get Xt(){return this.Jt.size>1}en(e){if(v(e.collectionGroup===this.collectionId),this.Xt)return!1;const t=G(e);if(void 0!==t&&!this.tn(t))return!1;const a=J(e);let s=new Set,n=0,r=0;for(;n<a.length&&this.tn(a[n]);++n)s=s.add(a[n].fieldPath.canonicalString());if(n===a.length)return!0;if(this.Jt.size>0){const e=this.Jt.getIterator().getNext();if(!s.has(e.field.canonicalString())){const t=a[n];if(!this.nn(e,t)||!this.rn(this.Yt[r++],t))return!1}++n}for(;n<a.length;++n){const e=a[n];if(r>=this.Yt.length||!this.rn(this.Yt[r++],e))return!1}return!0}sn(){if(this.Xt)return null;let e=new et(H.comparator);const t=[];for(const a of this.Zt)if(!a.field.isKeyField())if("array-contains"===a.op||"array-contains-any"===a.op)t.push(new W(a.field,2));else{if(e.has(a.field))continue;e=e.add(a.field),t.push(new W(a.field,0))}for(const a of this.Yt)a.field.isKeyField()||e.has(a.field)||(e=e.add(a.field),t.push(new W(a.field,"asc"===a.dir?0:1)));return new V(V.UNKNOWN_ID,this.collectionId,t,K.empty())}tn(e){for(const t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const a="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===a}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e){if(0===e.getFilters().length)return[];const t=function e(t){if(v(t instanceof Vt||t instanceof Gt),t instanceof Vt)return t;if(1===t.filters.length)return e(t.filters[0]);const a=t.filters.map(t=>e(t));let s=Gt.create(a,t.op);return s=cr(s),rr(s)?s:(v(s instanceof Gt),v(Jt(s)),v(s.filters.length>1),s.filters.reduce((e,t)=>or(e,t)))}(function e(t){var a,s;if(v(t instanceof Vt||t instanceof Gt),t instanceof Vt){if(t instanceof ra){const e=(null===(s=null===(a=t.value.arrayValue)||void 0===a?void 0:a.values)||void 0===s?void 0:s.map(e=>Vt.create(t.field,"==",e)))||[];return Gt.create(e,"or")}return t}const n=t.filters.map(t=>e(t));return Gt.create(n,t.op)}(e));return v(rr(t)),sr(t)||nr(t)?[t]:t.getFilters()}function sr(e){return e instanceof Vt}function nr(e){return e instanceof Gt&&Kt(e)}function rr(e){return sr(e)||nr(e)||function(e){if(e instanceof Gt&&Wt(e)){for(const t of e.getFilters())if(!sr(t)&&!nr(t))return!1;return!0}return!1}(e)}function or(e,t){let a;return v(e instanceof Vt||e instanceof Gt),v(t instanceof Vt||t instanceof Gt),a=e instanceof Vt?t instanceof Vt?function(e,t){return Gt.create([e,t],"and")}(e,t):ir(e,t):t instanceof Vt?ir(t,e):function(e,t){if(v(e.filters.length>0&&t.filters.length>0),Jt(e)&&Jt(t))return Xt(e,t.getFilters());const a=Wt(e)?e:t,s=Wt(e)?t:e,n=a.filters.map(e=>or(e,s));return Gt.create(n,"or")}(e,t),cr(a)}function ir(e,t){if(Jt(t))return Xt(t,e.getFilters());{const a=t.filters.map(t=>or(e,t));return Gt.create(a,"or")}}function cr(e){if(v(e instanceof Vt||e instanceof Gt),e instanceof Vt)return e;const t=e.getFilters();if(1===t.length)return cr(t[0]);if(Qt(e))return e;const a=t.map(e=>cr(e)),s=[];return a.forEach(t=>{t instanceof Vt?s.push(t):t instanceof Gt&&(t.op===e.op?s.push(...t.filters):s.push(t))}),1===s.length?s[0]:Gt.create(s,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dr{constructor(){this.on=new lr}addToCollectionParentIndex(e,t){return this.on.add(t),se.resolve()}getCollectionParents(e,t){return se.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return se.resolve()}deleteFieldIndex(e,t){return se.resolve()}deleteAllFieldIndexes(e){return se.resolve()}createTargetIndexes(e,t){return se.resolve()}getDocumentsMatchingTarget(e,t){return se.resolve(null)}getIndexType(e,t){return se.resolve(0)}getFieldIndexes(e,t){return se.resolve([])}getNextCollectionGroupToUpdate(e){return se.resolve(null)}getMinOffset(e,t){return se.resolve(X.min())}getMinOffsetFromCollectionGroup(e,t){return se.resolve(X.min())}updateCollectionGroup(e,t,a){return se.resolve()}updateIndexEntries(e,t){return se.resolve()}}class lr{constructor(){this.index={}}add(e){const t=e.lastSegment(),a=e.popLast(),s=this.index[t]||new et(q.comparator),n=!s.has(a);return this.index[t]=s.add(a),n}has(e){const t=e.lastSegment(),a=e.popLast(),s=this.index[t];return s&&s.has(a)}getEntries(e){return(this.index[e]||new et(q.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Uint8Array(0);class hr{constructor(e,t){this.user=e,this.databaseId=t,this._n=new lr,this.an=new ja(e=>la(e),(e,t)=>ua(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this._n.has(t)){const a=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this._n.add(t)});const n={collectionId:a,parent:ve(s)};return mr(e).put(n)}return se.resolve()}getCollectionParents(e,t){const a=[],s=IDBKeyRange.bound([t,""],[Z(t),""],!1,!0);return mr(e).W(s).next(e=>{for(const s of e){if(s.collectionId!==t)break;a.push(Se(s.parent))}return a})}addFieldIndex(e,t){const a=pr(e),s=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}}(t);delete s.indexId;const n=a.add(s);if(t.indexState){const a=br(e);return n.next(e=>{a.put(Un(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return n.next()}deleteFieldIndex(e,t){const a=pr(e),s=br(e),n=fr(e);return a.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>n.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=pr(e),a=fr(e),s=br(e);return t.H().next(()=>a.H()).next(()=>s.H())}createTargetIndexes(e,t){return se.forEach(this.un(t),t=>this.getIndexType(e,t).next(a=>{if(0===a||1===a){const a=new tr(t).sn();if(null!=a)return this.addFieldIndex(e,a)}}))}getDocumentsMatchingTarget(e,t){const a=fr(e);let s=!0;const n=new Map;return se.forEach(this.un(t),t=>this.cn(e,t).next(e=>{s&&(s=!!e),n.set(t,e)})).next(()=>{if(s){let e=za();const s=[];return se.forEach(n,(n,r)=>{f("IndexedDbIndexManager",`Using index ${function(e){return`id=${e.indexId}|cg=${e.collectionGroup}|f=${e.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`}(n)} to execute ${la(t)}`);const o=function(e,t){const a=G(t);if(void 0===a)return null;for(const t of ma(e,a.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(r,n),i=function(e,t){const a=new Map;for(const s of J(t))for(const t of ma(e,s.fieldPath))switch(t.op){case"==":case"in":a.set(s.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return a.set(s.fieldPath.canonicalString(),t.value),Array.from(a.values())}return null}(r,n),c=function(e,t){const a=[];let s=!0;for(const n of J(t)){const t=0===n.kind?fa(e,n.fieldPath,e.startAt):pa(e,n.fieldPath,e.startAt);a.push(t.value),s&&(s=t.inclusive)}return new Ut(a,s)}(r,n),d=function(e,t){const a=[];let s=!0;for(const n of J(t)){const t=0===n.kind?pa(e,n.fieldPath,e.endAt):fa(e,n.fieldPath,e.endAt);a.push(t.value),s&&(s=t.inclusive)}return new Ut(a,s)}(r,n),l=this.ln(n,r,c),u=this.ln(n,r,d),h=this.hn(n,r,i),m=this.Pn(n.indexId,o,l,c.inclusive,u,d.inclusive,h);return se.forEach(m,n=>a.j(n,t.limit).next(t=>{t.forEach(t=>{const a=z.fromSegments(t.documentKey);e.has(a)||(e=e.add(a),s.push(a))})}))}).next(()=>s)}return se.resolve(null)})}un(e){let t=this.an.get(e);return t||(t=0===e.filters.length?[e]:ar(Gt.create(e.filters,"and")).map(t=>da(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,t),t)}Pn(e,t,a,s,n,r,o){const i=(null!=t?t.length:1)*Math.max(a.length,n.length),c=i/(null!=t?t.length:1),d=[];for(let l=0;l<i;++l){const i=t?this.In(t[l/c]):ur,u=this.Tn(e,i,a[l%c],s),h=this.En(e,i,n[l%c],r),m=o.map(t=>this.Tn(e,i,t,!0));d.push(...this.createRange(u,h,m))}return d}Tn(e,t,a,s){const n=new Xn(e,z.empty(),t,a);return s?n:n.Ht()}En(e,t,a,s){const n=new Xn(e,z.empty(),t,a);return s?n.Ht():n}cn(e,t){const a=new tr(t),s=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(e=>{let t=null;for(const s of e)a.en(s)&&(!t||s.fields.length>t.fields.length)&&(t=s);return t})}getIndexType(e,t){let a=2;const s=this.un(t);return se.forEach(s,t=>this.cn(e,t).next(e=>{e?0!==a&&e.fields.length<function(e){let t=new et(H.comparator),a=!1;for(const s of e.filters)for(const e of s.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?a=!0:t=t.add(e.field));for(const a of e.orderBy)a.field.isKeyField()||(t=t.add(a.field));return t.size+(a?1:0)}(t)&&(a=1):a=0})).next(()=>function(e){return null!==e.limit}(t)&&s.length>1&&2===a?1:a)}dn(e,t){const a=new Yn;for(const s of J(e)){const e=t.data.field(s.fieldPath);if(null==e)return null;const n=a.jt(s.kind);Vn.St.ht(e,n)}return a.Ut()}In(e){const t=new Yn;return Vn.St.ht(e,t.jt(0)),t.Ut()}An(e,t){const a=new Yn;return Vn.St.ht(Tt(this.databaseId,t),a.jt(function(e){const t=J(e);return 0===t.length?0:t[t.length-1].kind}(e))),a.Ut()}hn(e,t,a){if(null===a)return[];let s=[];s.push(new Yn);let n=0;for(const r of J(e)){const e=a[n++];for(const a of s)if(this.Rn(t,r.fieldPath)&&Rt(e))s=this.Vn(s,r,e);else{const t=a.jt(r.kind);Vn.St.ht(e,t)}}return this.mn(s)}ln(e,t,a){return this.hn(e,t,a.position)}mn(e){const t=[];for(let a=0;a<e.length;++a)t[a]=e[a].Ut();return t}Vn(e,t,a){const s=[...e],n=[];for(const e of a.arrayValue.values||[])for(const a of s){const s=new Yn;s.seed(a.Ut()),Vn.St.ht(e,s.jt(t.kind)),n.push(s)}return n}Rn(e,t){return!!e.filters.find(e=>e instanceof Vt&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const a=pr(e),s=br(e);return(t?a.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):a.W()).next(e=>{const t=[];return se.forEach(e,e=>s.get([e.indexId,this.uid]).next(a=>{t.push(function(e,t){const a=t?new K(t.sequenceNumber,new X(Mn(t.readTime),new z(Se(t.documentKey)),t.largestBatchId)):K.empty(),s=e.fields.map(([e,t])=>new W(H.fromServerFormat(e),t));return new V(e.indexId,e.collectionGroup,s,a)}(e,a))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const a=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==a?a:L(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,a){const s=pr(e),n=br(e);return this.fn(e).next(e=>s.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>se.forEach(t,t=>n.put(Un(t.indexId,this.user,e,a)))))}updateIndexEntries(e,t){const a=new Map;return se.forEach(t,(t,s)=>{const n=a.get(t.collectionGroup);return(n?se.resolve(n):this.getFieldIndexes(e,t.collectionGroup)).next(n=>(a.set(t.collectionGroup,n),se.forEach(n,a=>this.gn(e,t,a).next(t=>{const n=this.pn(s,a);return t.isEqual(n)?se.resolve():this.yn(e,s,a,t,n)}))))})}wn(e,t,a,s){return fr(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.An(a,t.key),documentKey:t.key.path.toArray()})}Sn(e,t,a,s){return fr(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.An(a,t.key),t.key.path.toArray()])}gn(e,t,a){const s=fr(e);let n=new et($n);return s.Y({index:"documentKeyIndex",range:IDBKeyRange.only([a.indexId,this.uid,this.An(a,t)])},(e,s)=>{n=n.add(new Xn(a.indexId,t,s.arrayValue,s.directionalValue))}).next(()=>n)}pn(e,t){let a=new et($n);const s=this.dn(t,e);if(null==s)return a;const n=G(t);if(null!=n){const r=e.data.field(n.fieldPath);if(Rt(r))for(const n of r.arrayValue.values||[])a=a.add(new Xn(t.indexId,e.key,this.In(n),s))}else a=a.add(new Xn(t.indexId,e.key,ur,s));return a}yn(e,t,a,s,n){f("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const r=[];return function(e,t,a,s,n){const r=e.getIterator(),o=t.getIterator();let i=at(r),c=at(o);for(;i||c;){let e=!1,t=!1;if(i&&c){const s=a(i,c);s<0?t=!0:s>0&&(e=!0)}else null!=i?t=!0:e=!0;e?(s(c),c=at(o)):t?(n(i),i=at(r)):(i=at(r),c=at(o))}}(s,n,$n,s=>{r.push(this.wn(e,t,a,s))},s=>{r.push(this.Sn(e,t,a,s))}),se.waitFor(r)}fn(e){let t=1;return br(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,a,s)=>{s.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,a){a=a.sort((e,t)=>$n(e,t)).filter((e,t,a)=>!t||0!==$n(e,a[t-1]));const s=[];s.push(e);for(const n of a){const a=$n(n,e),r=$n(n,t);if(0===a)s[0]=e.Ht();else if(a>0&&r<0)s.push(n),s.push(n.Ht());else if(r>0)break}s.push(t);const n=[];for(let e=0;e<s.length;e+=2){if(this.bn(s[e],s[e+1]))return[];const t=[s[e].indexId,this.uid,s[e].arrayValue,s[e].directionalValue,ur,[]],a=[s[e+1].indexId,this.uid,s[e+1].arrayValue,s[e+1].directionalValue,ur,[]];n.push(IDBKeyRange.bound(t,a))}return n}bn(e,t){return $n(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(gr)}getMinOffset(e,t){return se.mapArray(this.un(t),t=>this.cn(e,t).next(e=>e||y())).next(gr)}}function mr(e){return Je(e,"collectionParents")}function fr(e){return Je(e,"indexEntries")}function pr(e){return Je(e,"indexConfiguration")}function br(e){return Je(e,"indexState")}function gr(e){v(0!==e.length);let t=e[0].indexState.offset,a=t.largestBatchId;for(let s=1;s<e.length;s++){const n=e[s].indexState.offset;$(n,t)<0&&(t=n),a<n.largestBatchId&&(a=n.largestBatchId)}return new X(t.readTime,t.documentKey,a)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vr{constructor(e,t,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=a}static withCacheSize(e){return new vr(e,vr.DEFAULT_COLLECTION_PERCENTILE,vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(e,t,a){const s=e.store("mutations"),n=e.store("documentMutations"),r=[],o=IDBKeyRange.only(a.batchId);let i=0;const c=s.Y({range:o},(e,t,a)=>(i++,a.delete()));r.push(c.next(()=>{v(1===i)}));const d=[];for(const e of a.mutations){const s=ke(t,e.key.path,a.batchId);r.push(n.delete(s)),d.push(e.key)}return se.waitFor(r).next(()=>d)}function wr(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw y();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr.DEFAULT_COLLECTION_PERCENTILE=10,vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vr.DEFAULT=new vr(41943040,vr.DEFAULT_COLLECTION_PERCENTILE,vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vr.DISABLED=new vr(-1,0,0);class Sr{constructor(e,t,a,s){this.userId=e,this.serializer=t,this.indexManager=a,this.referenceDelegate=s,this.Dn={}}static ct(e,t,a,s){v(""!==e.uid);const n=e.isAuthenticated()?e.uid:"";return new Sr(n,t,a,s)}checkEmpty(e){let t=!0;const a=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Tr(e).Y({index:"userMutationsIndex",range:a},(e,a,s)=>{t=!1,s.done()}).next(()=>t)}addMutationBatch(e,t,a,s){const n=kr(e),r=Tr(e);return r.add({}).next(o=>{v("number"==typeof o);const i=new ks(o,t,a,s),c=function(e,t,a){const s=a.baseMutations.map(t=>pn(e.ut,t)),n=a.mutations.map(t=>pn(e.ut,t));return{userId:t,batchId:a.batchId,localWriteTimeMs:a.localWriteTime.toMillis(),baseMutations:s,mutations:n}}(this.serializer,this.userId,i),d=[];let l=new et((e,t)=>L(e.canonicalString(),t.canonicalString()));for(const e of s){const t=ke(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),d.push(r.put(c)),d.push(n.put(t,Re))}return l.forEach(t=>{d.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Dn[o]=i.keys()}),se.waitFor(d).next(()=>i)})}lookupMutationBatch(e,t){return Tr(e).get(t).next(e=>e?(v(e.userId===this.userId),jn(this.serializer,e)):null)}Cn(e,t){return this.Dn[t]?se.resolve(this.Dn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const a=e.keys();return this.Dn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const a=t+1,s=IDBKeyRange.lowerBound([this.userId,a]);let n=null;return Tr(e).Y({index:"userMutationsIndex",range:s},(e,t,s)=>{t.userId===this.userId&&(v(t.batchId>=a),n=jn(this.serializer,t)),s.done()}).next(()=>n)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let a=-1;return Tr(e).Y({index:"userMutationsIndex",range:t,reverse:!0},(e,t,s)=>{a=t.batchId,s.done()}).next(()=>a)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Tr(e).W("userMutationsIndex",t).next(e=>e.map(e=>jn(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const a=Te(this.userId,t.path),s=IDBKeyRange.lowerBound(a),n=[];return kr(e).Y({range:s},(a,s,r)=>{const[o,i,c]=a,d=Se(i);if(o===this.userId&&t.path.isEqual(d))return Tr(e).get(c).next(e=>{if(!e)throw y();v(e.userId===this.userId),n.push(jn(this.serializer,e))});r.done()}).next(()=>n)}getAllMutationBatchesAffectingDocumentKeys(e,t){let a=new et(L);const s=[];return t.forEach(t=>{const n=Te(this.userId,t.path),r=IDBKeyRange.lowerBound(n),o=kr(e).Y({range:r},(e,s,n)=>{const[r,o,i]=e,c=Se(o);r===this.userId&&t.path.isEqual(c)?a=a.add(i):n.done()});s.push(o)}),se.waitFor(s).next(()=>this.vn(e,a))}getAllMutationBatchesAffectingQuery(e,t){const a=t.path,s=a.length+1,n=Te(this.userId,a),r=IDBKeyRange.lowerBound(n);let o=new et(L);return kr(e).Y({range:r},(e,t,n)=>{const[r,i,c]=e,d=Se(i);r===this.userId&&a.isPrefixOf(d)?d.length===s&&(o=o.add(c)):n.done()}).next(()=>this.vn(e,o))}vn(e,t){const a=[],s=[];return t.forEach(t=>{s.push(Tr(e).get(t).next(e=>{if(null===e)throw y();v(e.userId===this.userId),a.push(jn(this.serializer,e))}))}),se.waitFor(s).next(()=>a)}removeMutationBatch(e,t){return Ar(e.ae,this.userId,t).next(a=>(e.addOnCommittedListener(()=>{this.Fn(t.batchId)}),se.forEach(a,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return se.resolve();const a=IDBKeyRange.lowerBound(function(e){return[e]}(this.userId)),s=[];return kr(e).Y({range:a},(e,t,a)=>{if(e[0]===this.userId){const t=Se(e[1]);s.push(t)}else a.done()}).next(()=>{v(0===s.length)})})}containsKey(e,t){return Er(e,this.userId,t)}Mn(e){return Rr(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Er(e,t,a){const s=Te(t,a.path),n=s[1],r=IDBKeyRange.lowerBound(s);let o=!1;return kr(e).Y({range:r,J:!0},(e,a,s)=>{const[r,i,c]=e;r===t&&i===n&&(o=!0),s.done()}).next(()=>o)}function Tr(e){return Je(e,"mutations")}function kr(e){return Je(e,"documentMutations")}function Rr(e){return Je(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Nr(0)}static Nn(){return new Nr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next(t=>{const a=new Nr(t.highestTargetId);return t.highestTargetId=a.next(),this.Ln(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(e=>U.fromTimestamp(new _(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,a){return this.Bn(e).next(s=>(s.highestListenSequenceNumber=t,a&&(s.lastRemoteSnapshotVersion=a.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Ln(e,s)))}addTargetData(e,t){return this.kn(e,t).next(()=>this.Bn(e).next(a=>(a.targetCount+=1,this.qn(t,a),this.Ln(e,a))))}updateTargetData(e,t){return this.kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Pr(e).delete(t.targetId)).next(()=>this.Bn(e)).next(t=>(v(t.targetCount>0),t.targetCount-=1,this.Ln(e,t)))}removeTargets(e,t,a){let s=0;const n=[];return Pr(e).Y((r,o)=>{const i=Dn(o);i.sequenceNumber<=t&&null===a.get(i.targetId)&&(s++,n.push(this.removeTargetData(e,i)))}).next(()=>se.waitFor(n)).next(()=>s)}forEachTarget(e,t){return Pr(e).Y((e,a)=>{const s=Dn(a);t(s)})}Bn(e){return Ir(e).get("targetGlobalKey").next(e=>(v(null!==e),e))}Ln(e,t){return Ir(e).put("targetGlobalKey",t)}kn(e,t){return Pr(e).put(Ln(this.serializer,t))}qn(e,t){let a=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,a=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,a=!0),a}getTargetCount(e){return this.Bn(e).next(e=>e.targetCount)}getTargetData(e,t){const a=la(t),s=IDBKeyRange.bound([a,Number.NEGATIVE_INFINITY],[a,Number.POSITIVE_INFINITY]);let n=null;return Pr(e).Y({range:s,index:"queryTargetsIndex"},(e,a,s)=>{const r=Dn(a);ua(t,r.target)&&(n=r,s.done())}).next(()=>n)}addMatchingKeys(e,t,a){const s=[],n=Cr(e);return t.forEach(t=>{const r=ve(t.path);s.push(n.put({targetId:a,path:r})),s.push(this.referenceDelegate.addReference(e,a,t))}),se.waitFor(s)}removeMatchingKeys(e,t,a){const s=Cr(e);return se.forEach(t,t=>{const n=ve(t.path);return se.waitFor([s.delete([a,n]),this.referenceDelegate.removeReference(e,a,t)])})}removeMatchingKeysForTargetId(e,t){const a=Cr(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return a.delete(s)}getMatchingKeysForTargetId(e,t){const a=IDBKeyRange.bound([t],[t+1],!1,!0),s=Cr(e);let n=za();return s.Y({range:a,J:!0},(e,t,a)=>{const s=Se(e[1]),r=new z(s);n=n.add(r)}).next(()=>n)}containsKey(e,t){const a=ve(t.path),s=IDBKeyRange.bound([a],[Z(a)],!1,!0);let n=0;return Cr(e).Y({index:"documentTargetsIndex",J:!0,range:s},([e,t],a,s)=>{0!==e&&(n++,s.done())}).next(()=>n>0)}_t(e,t){return Pr(e).get(t).next(e=>e?Dn(e):null)}}function Pr(e){return Je(e,"targets")}function Ir(e){return Je(e,"targetGlobal")}function Cr(e){return Je(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr([e,t],[a,s]){const n=L(e,a);return 0===n?L(t,s):n}class jr{constructor(e){this.Qn=e,this.buffer=new et(Mr),this.Kn=0}$n(){return++this.Kn}Un(e){const t=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Mr(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Dr{constructor(e,t,a){this.garbageCollector=e,this.asyncQueue=t,this.localStore=a,this.Wn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return null!==this.Wn}Gn(e){f("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ce(e)?f("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ae(e)}await this.Gn(3e5)})}}class Lr{constructor(e,t){this.zn=e,this.params=t}calculateTargetCount(e,t){return this.zn.jn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return se.resolve(pe._e);const a=new jr(t);return this.zn.forEachTarget(e,e=>a.Un(e.sequenceNumber)).next(()=>this.zn.Hn(e,e=>a.Un(e))).next(()=>a.maxValue)}removeTargets(e,t,a){return this.zn.removeTargets(e,t,a)}removeOrphanedDocuments(e,t){return this.zn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(f("LruGarbageCollector","Garbage collection skipped; disabled"),se.resolve(yr)):this.getCacheSize(e).next(a=>a<this.params.cacheSizeCollectionThreshold?(f("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yr):this.Jn(e,t))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,t){let a,s,n,o,i,c,d;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(f("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),s=this.params.maximumSequenceNumbersToCollect):s=t,o=Date.now(),this.nthSequenceNumber(e,s))).next(s=>(a=s,i=Date.now(),this.removeTargets(e,a,t))).next(t=>(n=t,c=Date.now(),this.removeOrphanedDocuments(e,a))).next(e=>(d=Date.now(),h()<=r.a.DEBUG&&f("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${s} in `+(i-o)+"ms\n"+`\tRemoved ${n} targets in `+(c-i)+"ms\n"+`\tRemoved ${e} documents in `+(d-c)+"ms\n"+`Total Duration: ${d-l}ms`),se.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:n,documentsRemoved:e})))}}function Or(e,t){return new Lr(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t){this.db=e,this.garbageCollector=Or(this,t)}jn(e){const t=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Yn(e){let t=0;return this.Hn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Hn(e,t){return this.Zn(e,(e,a)=>t(a))}addReference(e,t,a){return _r(e,a)}removeReference(e,t,a){return _r(e,a)}removeTargets(e,t,a){return this.db.getTargetCache().removeTargets(e,t,a)}markPotentiallyOrphaned(e,t){return _r(e,t)}Xn(e,t){return function(e,t){let a=!1;return Rr(e).Z(s=>Er(e,s,t).next(e=>(e&&(a=!0),se.resolve(!e)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){const a=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let n=0;return this.Zn(e,(r,o)=>{if(o<=t){const t=this.Xn(e,r).next(t=>{if(!t)return n++,a.getEntry(e,r).next(()=>(a.removeEntry(r,U.min()),Cr(e).delete(function(e){return[0,ve(e.path)]}(r))))});s.push(t)}}).next(()=>se.waitFor(s)).next(()=>a.apply(e)).next(()=>n)}removeTarget(e,t){const a=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,a)}updateLimboDocument(e,t){return _r(e,t)}Zn(e,t){const a=Cr(e);let s,n=pe._e;return a.Y({index:"documentTargetsIndex"},([e,a],{path:r,sequenceNumber:o})=>{0===e?(n!==pe._e&&t(new z(Se(s)),n),n=o,s=r):n=pe._e}).next(()=>{n!==pe._e&&t(new z(Se(s)),n)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function _r(e,t){return Cr(e).put(function(e,t){return{targetId:0,path:ve(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.changes=new ja(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const a=this.changes.get(t);return void 0!==a?se.resolve(a):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,a){return zr(e).put(a)}removeEntry(e,t,a){return zr(e).delete(function(e,t){const a=e.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],In(t),a[a.length-1]]}(t,a))}updateMetadata(e,t){return this.getMetadata(e).next(a=>(a.byteSize+=t,this.er(e,a)))}getEntry(e,t){let a=_t.newInvalidDocument(t);return zr(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Vr(t))},(e,s)=>{a=this.tr(t,s)}).next(()=>a)}nr(e,t){let a={size:0,document:_t.newInvalidDocument(t)};return zr(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Vr(t))},(e,s)=>{a={document:this.tr(t,s),size:wr(s)}}).next(()=>a)}getEntries(e,t){let a=La();return this.rr(e,t,(e,t)=>{const s=this.tr(e,t);a=a.insert(e,s)}).next(()=>a)}ir(e,t){let a=La(),s=new Ye(z.comparator);return this.rr(e,t,(e,t)=>{const n=this.tr(e,t);a=a.insert(e,n),s=s.insert(e,wr(t))}).next(()=>({documents:a,sr:s}))}rr(e,t,a){if(t.isEmpty())return se.resolve();let s=new et(Jr);t.forEach(e=>s=s.add(e));const n=IDBKeyRange.bound(Vr(s.first()),Vr(s.last())),r=s.getIterator();let o=r.getNext();return zr(e).Y({index:"documentKeyIndex",range:n},(e,t,s)=>{const n=z.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Jr(o,n)<0;)a(o,null),o=r.getNext();o&&o.isEqual(n)&&(a(o,t),o=r.hasNext()?r.getNext():null),o?s.U(Vr(o)):s.done()}).next(()=>{for(;o;)a(o,null),o=r.hasNext()?r.getNext():null})}getDocumentsMatchingQuery(e,t,a,s,n){const r=t.path,o=[r.popLast().toArray(),r.lastSegment(),In(a.readTime),a.documentKey.path.isEmpty()?"":a.documentKey.path.lastSegment()],i=[r.popLast().toArray(),r.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return zr(e).W(IDBKeyRange.bound(o,i,!0)).next(e=>{null==n||n.incrementDocumentReadCount(e.length);let a=La();for(const n of e){const e=this.tr(z.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);e.isFoundDocument()&&(Pa(t,e)||s.has(e.key))&&(a=a.insert(e.key,e))}return a})}getAllFromCollectionGroup(e,t,a,s){let n=La();const r=Gr(t,a),o=Gr(t,X.max());return zr(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(r,o,!0)},(e,t,a)=>{const r=this.tr(z.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);n=n.insert(r.key,r),n.size===s&&a.done()}).next(()=>n)}newChangeBuffer(e){return new Br(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Hr(e).get("remoteDocumentGlobalKey").next(e=>(v(!!e),e))}er(e,t){return Hr(e).put("remoteDocumentGlobalKey",t)}tr(e,t){if(t){const e=function(e,t){let a;if(t.document)a=fn(e.ut,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=z.fromSegments(t.noDocument.path),s=Mn(t.noDocument.readTime);a=_t.newNoDocument(e,s),t.hasCommittedMutations&&a.setHasCommittedMutations()}else{if(!t.unknownDocument)return y();{const e=z.fromSegments(t.unknownDocument.path),s=Mn(t.unknownDocument.version);a=_t.newUnknownDocument(e,s)}}return t.readTime&&a.setReadTime(function(e){const t=new _(e[0],e[1]);return U.fromTimestamp(t)}(t.readTime)),a}(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(U.min()))return e}return _t.newInvalidDocument(e)}}function qr(e){return new Fr(e)}class Br extends Ur{constructor(e,t){super(),this._r=e,this.trackRemovals=t,this.ar=new ja(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let a=0,s=new et((e,t)=>L(e.canonicalString(),t.canonicalString()));return this.changes.forEach((n,r)=>{const o=this.ar.get(n);if(t.push(this._r.removeEntry(e,n,o.readTime)),r.isValidDocument()){const i=Pn(this._r.serializer,r);s=s.add(n.path.popLast());const c=wr(i);a+=c-o.size,t.push(this._r.addEntry(e,n,i))}else if(a-=o.size,this.trackRemovals){const a=Pn(this._r.serializer,r.convertToNoDocument(U.min()));t.push(this._r.addEntry(e,n,a))}}),s.forEach(a=>{t.push(this._r.indexManager.addToCollectionParentIndex(e,a))}),t.push(this._r.updateMetadata(e,a)),se.waitFor(t)}getFromCache(e,t){return this._r.nr(e,t).next(e=>(this.ar.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this._r.ir(e,t).next(({documents:e,sr:t})=>(t.forEach((t,a)=>{this.ar.set(t,{size:a,readTime:e.get(t).readTime})}),e))}}function Hr(e){return Je(e,"remoteDocumentGlobal")}function zr(e){return Je(e,"remoteDocumentsV14")}function Vr(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Gr(e,t){const a=t.documentKey.path.toArray();return[e,In(t.readTime),a.slice(0,a.length-2),a.length>0?a[a.length-1]:""]}function Jr(e,t){const a=e.path.toArray(),s=t.path.toArray();let n=0;for(let e=0;e<a.length-2&&e<s.length-2;++e)if(n=L(a[e],s[e]),n)return n;return n=L(a.length,s.length),n||(n=L(a[a.length-2],s[s.length-2]),n||L(a[a.length-1],s[s.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Wr{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,a,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=a,this.indexManager=s}getDocument(e,t){let a=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(a=s,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==a&&ps(a.mutation,e,st.empty(),_.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,za()).next(()=>t))}getLocalViewOfDocuments(e,t,a=za()){const s=Ua();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,a).next(e=>{let t=Za();return e.forEach((e,a)=>{t=t.insert(e,a.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const a=Ua();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,za()))}populateOverlays(e,t,a){const s=[];return a.forEach(e=>{t.has(e)||s.push(e)}),this.documentOverlayCache.getOverlays(e,s).next(e=>{e.forEach((e,a)=>{t.set(e,a)})})}computeViews(e,t,a,s){let n=La();const r=qa(),o=qa();return t.forEach((e,t)=>{const o=a.get(t.key);s.has(t.key)&&(void 0===o||o.mutation instanceof vs)?n=n.insert(t.key,t):void 0!==o?(r.set(t.key,o.mutation.getFieldMask()),ps(o.mutation,t,o.mutation.getFieldMask(),_.now())):r.set(t.key,st.empty())}),this.recalculateAndSaveOverlays(e,n).next(e=>(e.forEach((e,t)=>r.set(e,t)),t.forEach((e,t)=>{var a;return o.set(e,new Wr(t,null!==(a=r.get(e))&&void 0!==a?a:null))}),o))}recalculateAndSaveOverlays(e,t){const a=qa();let s=new Ye((e,t)=>e-t),n=za();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const n of e)n.keys().forEach(e=>{const r=t.get(e);if(null===r)return;let o=a.get(e)||st.empty();o=n.applyToLocalView(r,o),a.set(e,o);const i=(s.get(n.batchId)||za()).add(e);s=s.insert(n.batchId,i)})}).next(()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),i=s.key,c=s.value,d=Fa();c.forEach(e=>{if(!n.has(e)){const s=ms(t.get(e),a.get(e));null!==s&&d.set(e,s),n=n.add(e)}}),r.push(this.documentOverlayCache.saveOverlays(e,i,d))}return se.waitFor(r)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,a,s){return function(e){return z.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Aa(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,a,s):this.getDocumentsMatchingCollectionQuery(e,t,a,s)}getNextDocuments(e,t,a,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,a,s).next(n=>{const r=s-n.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,a.largestBatchId,s-n.size):se.resolve(Ua());let o=-1,i=n;return r.next(t=>se.forEach(t,(t,a)=>(o<a.largestBatchId&&(o=a.largestBatchId),n.get(t)?se.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{i=i.insert(t,e)}))).next(()=>this.populateOverlays(e,t,n)).next(()=>this.computeViews(e,i,t,za())).next(e=>({batchId:o,changes:_a(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(e=>{let t=Za();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,a,s){const n=t.collectionGroup;let r=Za();return this.indexManager.getCollectionParents(e,n).next(o=>se.forEach(o,o=>{const i=function(e,t){return new ba(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(n));return this.getDocumentsMatchingCollectionQuery(e,i,a,s).next(e=>{e.forEach((e,t)=>{r=r.insert(e,t)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,a,s){let n;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,a.largestBatchId).next(r=>(n=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,a,n,s))).next(e=>{n.forEach((t,a)=>{const s=a.getKey();null===e.get(s)&&(e=e.insert(s,_t.newInvalidDocument(s)))});let a=Za();return e.forEach((e,s)=>{const r=n.get(e);void 0!==r&&ps(r.mutation,s,st.empty(),_.now()),Pa(t,s)&&(a=a.insert(e,s))}),a})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return se.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(e){return{id:e.id,version:e.version,createTime:sn(e.createTime)}}(t)),se.resolve()}getNamedQuery(e,t){return se.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(e){return{name:e.name,query:On(e.bundledQuery),readTime:sn(e.readTime)}}(t)),se.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.overlays=new Ye(z.comparator),this.lr=new Map}getOverlay(e,t){return se.resolve(this.overlays.get(t))}getOverlays(e,t){const a=Ua();return se.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&a.set(t,e)})).next(()=>a)}saveOverlays(e,t,a){return a.forEach((a,s)=>{this.lt(e,t,s)}),se.resolve()}removeOverlaysForBatchId(e,t,a){const s=this.lr.get(a);return void 0!==s&&(s.forEach(e=>this.overlays=this.overlays.remove(e)),this.lr.delete(a)),se.resolve()}getOverlaysForCollection(e,t,a){const s=Ua(),n=t.length+1,r=new z(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===n&&e.largestBatchId>a&&s.set(e.getKey(),e)}return se.resolve(s)}getOverlaysForCollectionGroup(e,t,a,s){let n=new Ye((e,t)=>e-t);const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>a){let t=n.get(e.largestBatchId);null===t&&(t=Ua(),n=n.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Ua(),i=n.getIterator();for(;i.hasNext()&&(i.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=s)););return se.resolve(o)}lt(e,t,a){const s=this.overlays.get(a.key);if(null!==s){const e=this.lr.get(s.largestBatchId).delete(a.key);this.lr.set(s.largestBatchId,e)}this.overlays=this.overlays.insert(a.key,new Ns(t,a));let n=this.lr.get(t);void 0===n&&(n=za(),this.lr.set(t,n)),this.lr.set(t,n.add(a.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.hr=new et($r.Pr),this.Ir=new et($r.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const a=new $r(e,t);this.hr=this.hr.add(a),this.Ir=this.Ir.add(a)}Er(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.dr(new $r(e,t))}Ar(e,t){e.forEach(e=>this.removeReference(e,t))}Rr(e){const t=new z(new q([])),a=new $r(t,e),s=new $r(t,e+1),n=[];return this.Ir.forEachInRange([a,s],e=>{this.dr(e),n.push(e.key)}),n}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new z(new q([])),a=new $r(t,e),s=new $r(t,e+1);let n=za();return this.Ir.forEachInRange([a,s],e=>{n=n.add(e.key)}),n}containsKey(e){const t=new $r(e,0),a=this.hr.firstAfterOrEqual(t);return null!==a&&e.isEqual(a.key)}}class $r{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return z.comparator(e.key,t.key)||L(e.gr,t.gr)}static Tr(e,t){return L(e.gr,t.gr)||z.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new et($r.Pr)}checkEmpty(e){return se.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,a,s){const n=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new ks(n,t,a,s);this.mutationQueue.push(r);for(const t of s)this.yr=this.yr.add(new $r(t.key,n)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return se.resolve(r)}lookupMutationBatch(e,t){return se.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const a=t+1,s=this.Sr(a),n=s<0?0:s;return se.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return se.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return se.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const a=new $r(t,0),s=new $r(t,Number.POSITIVE_INFINITY),n=[];return this.yr.forEachInRange([a,s],e=>{const t=this.wr(e.gr);n.push(t)}),se.resolve(n)}getAllMutationBatchesAffectingDocumentKeys(e,t){let a=new et(L);return t.forEach(e=>{const t=new $r(e,0),s=new $r(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([t,s],e=>{a=a.add(e.gr)})}),se.resolve(this.br(a))}getAllMutationBatchesAffectingQuery(e,t){const a=t.path,s=a.length+1;let n=a;z.isDocumentKey(n)||(n=n.child(""));const r=new $r(new z(n),0);let o=new et(L);return this.yr.forEachWhile(e=>{const t=e.key.path;return!!a.isPrefixOf(t)&&(t.length===s&&(o=o.add(e.gr)),!0)},r),se.resolve(this.br(o))}br(e){const t=[];return e.forEach(e=>{const a=this.wr(e);null!==a&&t.push(a)}),t}removeMutationBatch(e,t){v(0===this.Dr(t.batchId,"removed")),this.mutationQueue.shift();let a=this.yr;return se.forEach(t.mutations,s=>{const n=new $r(s.key,t.batchId);return a=a.delete(n),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=a})}Fn(e){}containsKey(e,t){const a=new $r(t,0),s=this.yr.firstAfterOrEqual(a);return se.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,se.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.Cr=e,this.docs=new Ye(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const a=t.key,s=this.docs.get(a),n=s?s.size:0,r=this.Cr(t);return this.docs=this.docs.insert(a,{document:t.mutableCopy(),size:r}),this.size+=r-n,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const a=this.docs.get(t);return se.resolve(a?a.document.mutableCopy():_t.newInvalidDocument(t))}getEntries(e,t){let a=La();return t.forEach(e=>{const t=this.docs.get(e);a=a.insert(e,t?t.document.mutableCopy():_t.newInvalidDocument(e))}),se.resolve(a)}getDocumentsMatchingQuery(e,t,a,s){let n=La();const r=t.path,o=new z(r.child("")),i=this.docs.getIteratorFrom(o);for(;i.hasNext();){const{key:e,value:{document:o}}=i.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||$(Y(o),a)<=0||(s.has(o.key)||Pa(t,o))&&(n=n.insert(o.key,o.mutableCopy()))}return se.resolve(n)}getAllFromCollectionGroup(e,t,a,s){y()}vr(e,t){return se.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new ao(this)}getSize(e){return se.resolve(this.size)}}class ao extends Ur{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach((a,s)=>{s.isValidDocument()?t.push(this._r.addEntry(e,s)):this._r.removeEntry(a)}),se.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.persistence=e,this.Fr=new ja(e=>la(e),ua),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Xr,this.targetCount=0,this.Nr=Nr.On()}forEachTarget(e,t){return this.Fr.forEach((e,a)=>t(a)),se.resolve()}getLastRemoteSnapshotVersion(e){return se.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return se.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),se.resolve(this.highestTargetId)}setTargetsMetadata(e,t,a){return a&&(this.lastRemoteSnapshotVersion=a),t>this.Mr&&(this.Mr=t),se.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new Nr(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,se.resolve()}updateTargetData(e,t){return this.kn(t),se.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,se.resolve()}removeTargets(e,t,a){let s=0;const n=[];return this.Fr.forEach((r,o)=>{o.sequenceNumber<=t&&null===a.get(o.targetId)&&(this.Fr.delete(r),n.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)}),se.waitFor(n).next(()=>s)}getTargetCount(e){return se.resolve(this.targetCount)}getTargetData(e,t){const a=this.Fr.get(t)||null;return se.resolve(a)}addMatchingKeys(e,t,a){return this.Or.Er(t,a),se.resolve()}removeMatchingKeys(e,t,a){this.Or.Ar(t,a);const s=this.persistence.referenceDelegate,n=[];return s&&t.forEach(t=>{n.push(s.markPotentiallyOrphaned(e,t))}),se.waitFor(n)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),se.resolve()}getMatchingKeysForTargetId(e,t){const a=this.Or.mr(t);return se.resolve(a)}containsKey(e,t){return se.resolve(this.Or.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.Br={},this.overlays={},this.Lr=new pe(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new so(this),this.indexManager=new dr,this.remoteDocumentCache=function(e){return new to(e)}(e=>this.referenceDelegate.Qr(e)),this.serializer=new xn(t),this.Kr=new Qr(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Yr,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let a=this.Br[e.toKey()];return a||(a=new eo(t,this.referenceDelegate),this.Br[e.toKey()]=a),a}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,a){f("MemoryPersistence","Starting transaction:",e);const s=new ro(this.Lr.next());return this.referenceDelegate.$r(),a(s).next(e=>this.referenceDelegate.Ur(s).next(()=>e)).toPromise().then(e=>(s.raiseOnCommittedEvent(),e))}Wr(e,t){return se.or(Object.values(this.Br).map(a=>()=>a.containsKey(e,t)))}}class ro extends te{constructor(e){super(),this.currentSequenceNumber=e}}class oo{constructor(e){this.persistence=e,this.Gr=new Xr,this.zr=null}static jr(e){return new oo(e)}get Hr(){if(this.zr)return this.zr;throw y()}addReference(e,t,a){return this.Gr.addReference(a,t),this.Hr.delete(a.toString()),se.resolve()}removeReference(e,t,a){return this.Gr.removeReference(a,t),this.Hr.add(a.toString()),se.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),se.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(e=>this.Hr.add(e.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Hr.add(e.toString()))}).next(()=>a.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return se.forEach(this.Hr,a=>{const s=z.fromPath(a);return this.Jr(e,s).next(e=>{e||t.removeEntry(s,U.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(e=>{e?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return se.or([()=>se.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.serializer=e}N(e,t,a,s){const n=new ne("createOrUpgrade",t);a<1&&s>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ee,{unique:!0}),e.createObjectStore("documentMutations")}(e),co(e),function(e){e.createObjectStore("remoteDocuments")}(e));let r=se.resolve();return a<3&&s>=3&&(0!==a&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),co(e)),r=r.next(()=>function(e){const t=e.store("targetGlobal"),a={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",a)}(n))),a<4&&s>=4&&(0!==a&&(r=r.next(()=>function(e,t){return t.store("mutations").W().next(a=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ee,{unique:!0});const s=t.store("mutations"),n=a.map(e=>s.put(e));return se.waitFor(n)})}(e,n))),r=r.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),a<5&&s>=5&&(r=r.next(()=>this.Zr(n))),a<6&&s>=6&&(r=r.next(()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(n)))),a<7&&s>=7&&(r=r.next(()=>this.ei(n))),a<8&&s>=8&&(r=r.next(()=>this.ti(e,n))),a<9&&s>=9&&(r=r.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),a<10&&s>=10&&(r=r.next(()=>this.ni(n))),a<11&&s>=11&&(r=r.next(()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),a<12&&s>=12&&(r=r.next(()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:_e});t.createIndex("collectionPathOverlayIndex",Ue,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Fe,{unique:!1})}(e)})),a<13&&s>=13&&(r=r.next(()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Ne});t.createIndex("documentKeyIndex",xe),t.createIndex("collectionGroupIndex",Pe)}(e)).next(()=>this.ri(e,n)).next(()=>e.deleteObjectStore("remoteDocuments"))),a<14&&s>=14&&(r=r.next(()=>this.ii(e,n))),a<15&&s>=15&&(r=r.next(()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:De}).createIndex("sequenceNumberIndex",Le,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Oe}).createIndex("documentKeyIndex",Ze,{unique:!1})}(e))),r}Xr(e){let t=0;return e.store("remoteDocuments").Y((e,a)=>{t+=wr(a)}).next(()=>{const a={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",a)})}Zr(e){const t=e.store("mutationQueues"),a=e.store("mutations");return t.W().next(t=>se.forEach(t,t=>{const s=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return a.W("userMutationsIndex",s).next(a=>se.forEach(a,a=>{v(a.userId===t.userId);const s=jn(this.serializer,a);return Ar(e,t.userId,s).next(()=>{})}))}))}ei(e){const t=e.store("targetDocuments"),a=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{const s=[];return a.Y((a,n)=>{const r=new q(a),o=function(e){return[0,ve(e)]}(r);s.push(t.get(o).next(a=>a?se.resolve():(a=>t.put({targetId:0,path:ve(a),sequenceNumber:e.highestListenSequenceNumber}))(r)))}).next(()=>se.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:je});const a=t.store("collectionParents"),s=new lr,n=e=>{if(s.add(e)){const t=e.lastSegment(),s=e.popLast();return a.put({collectionId:t,parent:ve(s)})}};return t.store("remoteDocuments").Y({J:!0},(e,t)=>{const a=new q(e);return n(a.popLast())}).next(()=>t.store("documentMutations").Y({J:!0},([e,t,a],s)=>{const r=Se(t);return n(r.popLast())}))}ni(e){const t=e.store("targets");return t.Y((e,a)=>{const s=Dn(a),n=Ln(this.serializer,s);return t.put(n)})}ri(e,t){const a=t.store("remoteDocuments"),s=[];return a.Y((e,a)=>{const n=t.store("remoteDocumentsV14"),r=function(e){return e.document?new z(q.fromString(e.document.name).popFirst(5)):e.noDocument?z.fromSegments(e.noDocument.path):e.unknownDocument?z.fromSegments(e.unknownDocument.path):y()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(a).path.toArray(),o={prefixPath:r.slice(0,r.length-2),collectionGroup:r[r.length-2],documentId:r[r.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(n.put(o))}).next(()=>se.waitFor(s))}ii(e,t){const a=t.store("mutations"),s=qr(this.serializer),n=new no(oo.jr,this.serializer.ut);return a.W().next(e=>{const a=new Map;return e.forEach(e=>{var t;let s=null!==(t=a.get(e.userId))&&void 0!==t?t:za();jn(this.serializer,e).keys().forEach(e=>s=s.add(e)),a.set(e.userId,s)}),se.forEach(a,(e,a)=>{const r=new d(a),o=Hn.ct(this.serializer,r),i=n.getIndexManager(r),c=Sr.ct(r,this.serializer,i,n.referenceDelegate);return new Kr(s,c,o,i).recalculateAndSaveOverlaysForDocumentKeys(new Ge(t,pe._e),e).next()})})}}function co(e){e.createObjectStore("targetDocuments",{keyPath:Ce}).createIndex("documentTargetsIndex",Me,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Ie,{unique:!0}),e.createObjectStore("targetGlobal")}const lo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class uo{constructor(e,t,a,s,n,r,o,i,c,d,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=a,this.si=n,this.window=r,this.document=o,this.oi=c,this._i=d,this.ai=l,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=e=>Promise.resolve(),!uo.D())throw new E(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Zr(this,s),this.Ii=t+"main",this.serializer=new xn(i),this.Ti=new re(this.Ii,this.ai,new io(this.serializer)),this.qr=new xr(this.referenceDelegate,this.serializer),this.remoteDocumentCache=qr(this.serializer),this.Kr=new Fn,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,!1===d&&p("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(S.FAILED_PRECONDITION,lo);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new pe(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>mo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(e=>{e||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(t=>this.isPrimary&&!t?this.pi(e).next(()=>!1):!!t&&this.yi(e).next(()=>!0))).catch(e=>{if(ce(e))return f("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return f("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return ho(e).get("owner").next(e=>se.resolve(this.wi(e)))}Si(e){return mo(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=Je(e,"clientMetadata");return t.W().next(e=>{const a=this.Ci(e,18e5),s=e.filter(e=>-1===a.indexOf(e));return se.forEach(s,e=>t.delete(e.clientId)).next(()=>s)})}).catch(()=>[]);if(this.Ei)for(const t of e)this.Ei.removeItem(this.vi(t.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?se.resolve(!0):ho(e).get("owner").next(t=>{if(null!==t&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)){if(this.wi(t)&&this.networkEnabled)return!0;if(!this.wi(t)){if(!t.allowTabSynchronization)throw new E(S.FAILED_PRECONDITION,lo);return!1}}return!(!this.networkEnabled||!this.inForeground)||mo(e).W().next(e=>void 0===this.Ci(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,a=!this.inForeground&&e.inForeground,s=this.networkEnabled===e.networkEnabled;if(t||a&&s)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&f("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Ge(e,pe._e);return this.pi(t).next(()=>this.Si(t))}),this.Ti.close(),this.Ni()}Ci(e,t){return e.filter(e=>this.Di(e.updateTimeMs,t)&&!this.Fi(e.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>mo(e).W().next(e=>this.Ci(e,18e5).map(e=>e.clientId)))}get started(){return this.kr}getMutationQueue(e,t){return Sr.ct(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new hr(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return Hn.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,t,a){f("IndexedDbPersistence","Starting transaction:",e);const s="readonly"===t?"readonly":"readwrite",n=function(e){return 15===e?Ve:14===e?ze:13===e?He:12===e?Be:11===e?qe:void y()}(this.ai);let r;return this.Ti.runTransaction(e,s,n,s=>(r=new Ge(s,this.Lr?this.Lr.next():pe._e),"readwrite-primary"===t?this.fi(r).next(e=>!!e||this.gi(r)).next(t=>{if(!t)throw p(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new E(S.FAILED_PRECONDITION,ee);return a(r)}).next(e=>this.yi(r).next(()=>e)):this.Li(r).next(()=>a(r)))).then(e=>(r.raiseOnCommittedEvent(),e))}Li(e){return ho(e).get("owner").next(e=>{if(null!==e&&this.Di(e.leaseTimestampMs,5e3)&&!this.Fi(e.ownerId)&&!this.wi(e)&&!(this._i||this.allowTabSynchronization&&e.allowTabSynchronization))throw new E(S.FAILED_PRECONDITION,lo)})}yi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ho(e).put("owner",t)}static D(){return re.D()}pi(e){const t=ho(e);return t.get("owner").next(e=>this.wi(e)?(f("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):se.resolve())}Di(e,t){const a=Date.now();return!(e<a-t||e>a&&(p(`Detected an update time that is in the future: ${e} > ${a}`),1))}Ai(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground="visible"===this.document.visibilityState)}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ui=()=>{this.Mi();const e=/(?:Version|Mobile)\/1[456]/;Object(o.s)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var t;try{const a=null!==(null===(t=this.Ei)||void 0===t?void 0:t.getItem(this.vi(e)));return f("IndexedDbPersistence",`Client '${e}' ${a?"is":"is not"} zombied in LocalStorage`),a}catch(e){return p("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){p("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch(e){}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ho(e){return Je(e,"owner")}function mo(e){return Je(e,"clientMetadata")}function fo(e,t){let a=e.projectId;return e.isDefaultDatabase||(a+="."+e.database),"firestore/"+t+"/"+a+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class po{constructor(e,t,a,s){this.targetId=e,this.fromCache=t,this.ki=a,this.qi=s}static Qi(e,t){let a=za(),s=za();for(const e of t.docChanges)switch(e.type){case 0:a=a.add(e.doc.key);break;case 1:s=s.add(e.doc.key)}return new po(e,t.fromCache,a,s)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,a,s){const n={result:null};return this.zi(e,t).next(e=>{n.result=e}).next(()=>{if(!n.result)return this.ji(e,t,s,a).next(e=>{n.result=e})}).next(()=>{if(n.result)return;const a=new bo;return this.Hi(e,t,a).next(s=>{if(n.result=s,this.$i)return this.Ji(e,t,a,s.size)})}).next(()=>n.result)}Ji(e,t,a,s){return a.documentReadCount<this.Ui?(h()<=r.a.DEBUG&&f("QueryEngine","SDK will not create cache indexes for query:",xa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),se.resolve()):(h()<=r.a.DEBUG&&f("QueryEngine","Query:",xa(t),"scans",a.documentReadCount,"local documents and returns",s,"documents as results."),a.documentReadCount>this.Wi*s?(h()<=r.a.DEBUG&&f("QueryEngine","The SDK decides to create cache indexes for query:",xa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sa(t))):se.resolve())}zi(e,t){if(va(t))return se.resolve(null);let a=Sa(t);return this.indexManager.getIndexType(e,a).next(s=>0===s?null:(null!==t.limit&&1===s&&(t=ka(t,null,"F"),a=Sa(t)),this.indexManager.getDocumentsMatchingTarget(e,a).next(s=>{const n=za(...s);return this.Gi.getDocuments(e,n).next(s=>this.indexManager.getMinOffset(e,a).next(a=>{const r=this.Yi(t,s);return this.Zi(t,r,n,a.readTime)?this.zi(e,ka(t,null,"F")):this.Xi(e,r,t,a)}))})))}ji(e,t,a,s){return va(t)||s.isEqual(U.min())?se.resolve(null):this.Gi.getDocuments(e,a).next(n=>{const o=this.Yi(t,n);return this.Zi(t,o,a,s)?se.resolve(null):(h()<=r.a.DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xa(t)),this.Xi(e,o,t,Q(s,-1)).next(e=>e))})}Yi(e,t){let a=new et(Ca(e));return t.forEach((t,s)=>{Pa(e,s)&&(a=a.add(s))}),a}Zi(e,t,a,s){if(null===e.limit)return!1;if(a.size!==t.size)return!0;const n="F"===e.limitType?t.last():t.first();return!!n&&(n.hasPendingWrites||n.version.compareTo(s)>0)}Hi(e,t,a){return h()<=r.a.DEBUG&&f("QueryEngine","Using full collection scan to execute query:",xa(t)),this.Gi.getDocumentsMatchingQuery(e,t,X.min(),a)}Xi(e,t,a,s){return this.Gi.getDocumentsMatchingQuery(e,a,s).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,a,s){this.persistence=e,this.es=t,this.serializer=s,this.ts=new Ye(L),this.ns=new ja(e=>la(e),ua),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(a)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kr(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}function vo(e,t,a,s){return new yo(e,t,a,s)}async function Ao(e,t){const a=w(e);return await a.persistence.runTransaction("Handle user change","readonly",e=>{let s;return a.mutationQueue.getAllMutationBatches(e).next(n=>(s=n,a.os(t),a.mutationQueue.getAllMutationBatches(e))).next(t=>{const n=[],r=[];let o=za();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return a.localDocuments.getDocuments(e,o).next(e=>({_s:e,removedBatchIds:n,addedBatchIds:r}))})})}function wo(e){const t=w(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.qr.getLastRemoteSnapshotVersion(e))}function So(e,t,a){let s=za(),n=za();return a.forEach(e=>s=s.add(e)),t.getEntries(e,s).next(e=>{let s=La();return a.forEach((a,r)=>{const o=e.get(a);r.isFoundDocument()!==o.isFoundDocument()&&(n=n.add(a)),r.isNoDocument()&&r.version.isEqual(U.min())?(t.removeEntry(a,r.readTime),s=s.insert(a,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(r),s=s.insert(a,r)):f("LocalStore","Ignoring outdated watch update for ",a,". Current version:",o.version," Watch version:",r.version)}),{us:s,cs:n}})}function Eo(e,t){const a=w(e);return a.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),a.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function To(e,t){const a=w(e);return a.persistence.runTransaction("Allocate target","readwrite",e=>{let s;return a.qr.getTargetData(e,t).next(n=>n?(s=n,se.resolve(s)):a.qr.allocateTargetId(e).next(n=>(s=new Nn(t,n,"TargetPurposeListen",e.currentSequenceNumber),a.qr.addTargetData(e,s).next(()=>s))))}).then(e=>{const s=a.ts.get(e.targetId);return(null===s||e.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(a.ts=a.ts.insert(e.targetId,e),a.ns.set(t,e.targetId)),e})}async function ko(e,t,a){const s=w(e),n=s.ts.get(t),r=a?"readwrite":"readwrite-primary";try{a||await s.persistence.runTransaction("Release target",r,e=>s.persistence.referenceDelegate.removeTarget(e,n))}catch(e){if(!ce(e))throw e;f("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}s.ts=s.ts.remove(t),s.ns.delete(n.target)}function Ro(e,t,a){const s=w(e);let n=U.min(),r=za();return s.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,a){const s=w(e),n=s.ns.get(a);return void 0!==n?se.resolve(s.ts.get(n)):s.qr.getTargetData(t,a)}(s,e,Sa(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(e,t.targetId).next(e=>{r=e})}).next(()=>s.es.getDocumentsMatchingQuery(e,t,a?n:U.min(),a?r:za())).next(e=>(Po(s,Ia(t),e),{documents:e,ls:r})))}function No(e,t){const a=w(e),s=w(a.qr),n=a.ts.get(t);return n?Promise.resolve(n.target):a.persistence.runTransaction("Get target data","readonly",e=>s._t(e,t).next(e=>e?e.target:null))}function xo(e,t){const a=w(e),s=a.rs.get(t)||U.min();return a.persistence.runTransaction("Get new document changes","readonly",e=>a.ss.getAllFromCollectionGroup(e,t,Q(s,-1),Number.MAX_SAFE_INTEGER)).then(e=>(Po(a,t,e),e))}function Po(e,t,a){let s=e.rs.get(t)||U.min();a.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.rs.set(t,s)}async function Io(e,t,a=za()){const s=await To(e,Sa(On(t.bundledQuery))),n=w(e);return n.persistence.runTransaction("Save named query","readwrite",e=>{const r=sn(t.readTime);if(s.snapshotVersion.compareTo(r)>=0)return n.Kr.saveNamedQuery(e,t);const o=s.withResumeToken(ot.EMPTY_BYTE_STRING,r);return n.ts=n.ts.insert(o.targetId,o),n.qr.updateTargetData(e,o).next(()=>n.qr.removeMatchingKeysForTargetId(e,s.targetId)).next(()=>n.qr.addMatchingKeys(e,a,s.targetId)).next(()=>n.Kr.saveNamedQuery(e,t))})}function Co(e,t){return`firestore_clients_${e}_${t}`}function Mo(e,t,a){let s=`firestore_mutations_${e}_${a}`;return t.isAuthenticated()&&(s+="_"+t.uid),s}function jo(e,t){return`firestore_targets_${e}_${t}`}class Do{constructor(e,t,a,s){this.user=e,this.batchId=t,this.state=a,this.error=s}static Ts(e,t,a){const s=JSON.parse(a);let n,r="object"==typeof s&&-1!==["pending","acknowledged","rejected"].indexOf(s.state)&&(void 0===s.error||"object"==typeof s.error);return r&&s.error&&(r="string"==typeof s.error.message&&"string"==typeof s.error.code,r&&(n=new E(s.error.code,s.error.message))),r?new Do(e,t,s.state,n):(p("SharedClientState",`Failed to parse mutation state for ID '${t}': ${a}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Lo{constructor(e,t,a){this.targetId=e,this.state=t,this.error=a}static Ts(e,t){const a=JSON.parse(t);let s,n="object"==typeof a&&-1!==["not-current","current","rejected"].indexOf(a.state)&&(void 0===a.error||"object"==typeof a.error);return n&&a.error&&(n="string"==typeof a.error.message&&"string"==typeof a.error.code,n&&(s=new E(a.error.code,a.error.message))),n?new Lo(e,a.state,s):(p("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Oo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ts(e,t){const a=JSON.parse(t);let s="object"==typeof a&&a.activeTargetIds instanceof Array,n=Ga();for(let e=0;s&&e<a.activeTargetIds.length;++e)s=ye(a.activeTargetIds[e]),n=n.add(a.activeTargetIds[e]);return s?new Oo(e,n):(p("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Zo{constructor(e,t){this.clientId=e,this.onlineState=t}static Ts(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Zo(t.clientId,t.onlineState):(p("SharedClientState","Failed to parse online state: "+e),null)}}class _o{constructor(){this.activeTargetIds=Ga()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Uo{constructor(e,t,a,s,n){this.window=e,this.si=t,this.persistenceKey=a,this.Rs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new Ye(L),this.started=!1,this.ps=[];const r=a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=n,this.ys=Co(this.persistenceKey,this.Rs),this.ws=function(e){return"firestore_sequence_number_"+e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new _o),this.Ss=new RegExp(`^firestore_clients_${r}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${r}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${r}_(\\d+)$`),this.Cs=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.vs=function(e){return"firestore_bundle_loaded_v2_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const t of e){if(t===this.Rs)continue;const e=this.getItem(Co(this.persistenceKey,t));if(e){const a=Oo.Ts(t,e);a&&(this.gs=this.gs.insert(a.clientId,a))}}this.Fs();const t=this.storage.getItem(this.Cs);if(t){const e=this.Ms(t);e&&this.xs(e)}for(const e of this.ps)this.fs(e);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let t=!1;return this.gs.forEach((a,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,t,a){this.Ns(e,t,a),this.Bs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(jo(this.persistenceKey,e));if(a){const s=Lo.Ts(e,a);s&&(t=s.state)}}return this.Ls.ds(e),this.Fs(),t}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(jo(this.persistenceKey,e))}updateQueryState(e,t,a){this.ks(e,t,a)}handleUserChange(e,t,a){t.forEach(e=>{this.Bs(e)}),this.currentUser=e,a.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return f("SharedClientState","READ",e,t),t}setItem(e,t){f("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){f("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){const t=e;if(t.storageArea===this.storage){if(f("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ys)return void p("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Ss.test(t.key)){if(null==t.newValue){const e=this.Ks(t.key);return this.$s(e,null)}{const e=this.Us(t.key,t.newValue);if(e)return this.$s(e.clientId,e)}}else if(this.bs.test(t.key)){if(null!==t.newValue){const e=this.Ws(t.key,t.newValue);if(e)return this.Gs(e)}}else if(this.Ds.test(t.key)){if(null!==t.newValue){const e=this.zs(t.key,t.newValue);if(e)return this.js(e)}}else if(t.key===this.Cs){if(null!==t.newValue){const e=this.Ms(t.newValue);if(e)return this.xs(e)}}else if(t.key===this.ws){const e=function(e){let t=pe._e;if(null!=e)try{const a=JSON.parse(e);v("number"==typeof a),t=a}catch(e){p("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==pe._e&&this.sequenceNumberHandler(e)}else if(t.key===this.vs){const e=this.Hs(t.newValue);await Promise.all(e.map(e=>this.syncEngine.Js(e)))}}else this.ps.push(t)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,t,a){const s=new Do(this.currentUser,e,t,a),n=Mo(this.persistenceKey,this.currentUser,e);this.setItem(n,s.Es())}Bs(e){const t=Mo(this.persistenceKey,this.currentUser,e);this.removeItem(t)}qs(e){const t={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(t))}ks(e,t,a){const s=jo(this.persistenceKey,e),n=new Lo(e,t,a);this.setItem(s,n.Es())}Qs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.vs,t)}Ks(e){const t=this.Ss.exec(e);return t?t[1]:null}Us(e,t){const a=this.Ks(e);return Oo.Ts(a,t)}Ws(e,t){const a=this.bs.exec(e),s=Number(a[1]),n=void 0!==a[2]?a[2]:null;return Do.Ts(new d(n),s,t)}zs(e,t){const a=this.Ds.exec(e),s=Number(a[1]);return Lo.Ts(s,t)}Ms(e){return Zo.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);f("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,t){const a=t?this.gs.insert(e,t):this.gs.remove(e),s=this.Os(this.gs),n=this.Os(a),r=[],o=[];return n.forEach(e=>{s.has(e)||r.push(e)}),s.forEach(e=>{n.has(e)||o.push(e)}),this.syncEngine.Xs(r,o).then(()=>{this.gs=a})}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let t=Ga();return e.forEach((e,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class Fo{constructor(){this.eo=new _o,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,a){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,a){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new _o,Promise.resolve()}handleUserChange(e,t,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{ro(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho=null;function zo(){return null===Ho?Ho=268435456+Math.round(2147483648*Math.random()):Ho++,"0x"+Ho.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Vo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="WebChannelConnection";class Wo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=t+"://"+e.host,this.fo=`projects/${a}/databases/${s}`,this.po="(default)"===this.databaseId.database?"project_id="+a:`project_id=${a}&database_id=${s}`}get yo(){return!1}wo(e,t,a,s,n){const r=zo(),o=this.So(e,t);f("RestConnection",`Sending RPC '${e}' ${r}:`,o,a);const i={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(i,s,n),this.Do(e,o,i,a).then(t=>(f("RestConnection",`Received RPC '${e}' ${r}: `,t),t),t=>{throw b("RestConnection",`RPC '${e}' ${r} failed with error: `,t,"url: ",o,"request:",a),t})}Co(e,t,a,s,n,r){return this.wo(e,t,a,s,n)}bo(e,t,a){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,a)=>e[a]=t),a&&a.headers.forEach((t,a)=>e[a]=t)}So(e,t){const a=Vo[e];return`${this.mo}/v1/${t}:${a}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,a,s){const n=zo();return new Promise((r,o)=>{const c=new i.h;c.setWithCredentials(!0),c.listenOnce(i.c.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case i.a.NO_ERROR:const t=c.getResponseJson();f(Jo,`XHR for RPC '${e}' ${n} received:`,JSON.stringify(t)),r(t);break;case i.a.TIMEOUT:f(Jo,`RPC '${e}' ${n} timed out`),o(new E(S.DEADLINE_EXCEEDED,"Request time out"));break;case i.a.HTTP_ERROR:const a=c.getStatus();if(f(Jo,`RPC '${e}' ${n} failed with status:`,a,"response text:",c.getResponseText()),a>0){let e=c.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(t)>=0?t:S.UNKNOWN}(t.status);o(new E(e,t.message))}else o(new E(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else o(new E(S.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f(Jo,`RPC '${e}' ${n} completed.`)}});const d=JSON.stringify(s);f(Jo,`RPC '${e}' ${n} sending request:`,s),c.send(t,"POST",d,a,15)})}vo(e,t,a){const s=zo(),n=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Object(i.i)(),o=Object(i.j)(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;void 0!==d&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,t,a),c.encodeInitMessageHeaders=!0;const l=n.join("");f(Jo,`Creating RPC '${e}' stream ${s}: ${l}`,c);const u=r.createWebChannel(l,c);let h=!1,m=!1;const p=new Go({co:t=>{m?f(Jo,`Not sending because RPC '${e}' stream ${s} is closed:`,t):(h||(f(Jo,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),f(Jo,`RPC '${e}' stream ${s} sending:`,t),u.send(t))},lo:()=>u.close()}),g=(e,t,a)=>{e.listen(t,e=>{try{a(e)}catch(e){setTimeout(()=>{throw e},0)}})};return g(u,i.g.EventType.OPEN,()=>{m||f(Jo,`RPC '${e}' stream ${s} transport opened.`)}),g(u,i.g.EventType.CLOSE,()=>{m||(m=!0,f(Jo,`RPC '${e}' stream ${s} transport closed`),p.Ro())}),g(u,i.g.EventType.ERROR,t=>{m||(m=!0,b(Jo,`RPC '${e}' stream ${s} transport errored:`,t),p.Ro(new E(S.UNAVAILABLE,"The operation could not be completed")))}),g(u,i.g.EventType.MESSAGE,t=>{var a;if(!m){const n=t.data[0];v(!!n);const r=n,o=r.error||(null===(a=r[0])||void 0===a?void 0:a.error);if(o){f(Jo,`RPC '${e}' stream ${s} received error:`,o);const t=o.status;let a=function(e){const t=Ps[e];if(void 0!==t)return Ms(t)}(t),n=o.message;void 0===a&&(a=S.INTERNAL,n="Unknown error status: "+t+" with message "+o.message),m=!0,p.Ro(new E(a,n)),u.close()}else f(Jo,`RPC '${e}' stream ${s} received:`,n),p.Vo(n)}}),g(o,i.b.STAT_EVENT,t=>{t.stat===i.f.PROXY?f(Jo,`RPC '${e}' stream ${s} detected buffering proxy`):t.stat===i.f.NOPROXY&&f(Jo,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.Ao()},0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(){return"undefined"!=typeof window?window:null}function Qo(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(e){return new Xs(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,a=1e3,s=1.5,n=6e4){this.si=e,this.timerId=t,this.Fo=a,this.Mo=s,this.xo=n,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),a=Math.max(0,Date.now()-this.Bo),s=Math.max(0,t-a);s>0&&f("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${a} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t,a,s,n,r,o,i){this.si=e,this.Ko=a,this.$o=s,this.connection=n,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=i,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Xo(e,t)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==e?this.zo.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===S.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,a])=>{this.Uo===t&&this.s_(e,a)},t=>{e(()=>{const e=new E(S.UNKNOWN,"Fetching auth token failed: "+t.message);return this.o_(e)})})}s_(e,t){const a=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{a(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(e=>{a(()=>this.o_(e))}),this.stream.onMessage(e=>{a(()=>this.onMessage(e))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return f("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ei extends $o{constructor(e,t,a,s,n,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,a,s,r),this.serializer=n}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();const t=function(e,t){let a;if("targetChange"in t){t.targetChange;const s=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:y()}(t.targetChange.targetChangeType||"NO_CHANGE"),n=t.targetChange.targetIds||[],r=function(e,t){return e.useProto3Json?(v(void 0===t||"string"==typeof t),ot.fromBase64String(t||"")):(v(void 0===t||t instanceof Uint8Array),ot.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,i=o&&function(e){const t=void 0===e.code?S.UNKNOWN:Ms(e.code);return new E(t,e.message||"")}(o);a=new zs(s,n,r,i||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const n=cn(e,s.document.name),r=sn(s.document.updateTime),o=s.document.createTime?sn(s.document.createTime):U.min(),i=new Ot({mapValue:{fields:s.document.fields}}),c=_t.newFoundDocument(n,r,o,i),d=s.targetIds||[],l=s.removedTargetIds||[];a=new Bs(d,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const n=cn(e,s.document),r=s.readTime?sn(s.readTime):U.min(),o=_t.newNoDocument(n,r),i=s.removedTargetIds||[];a=new Bs([],i,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const n=cn(e,s.document),r=s.removedTargetIds||[];a=new Bs([],r,n,null)}else{if(!("filter"in t))return y();{t.filter;const e=t.filter;e.targetId;const{count:s=0,unchangedNames:n}=e,r=new xs(s,n),o=e.targetId;a=new Hs(o,r)}}return a}(this.serializer,e),a=function(e){if(!("targetChange"in e))return U.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?U.min():t.readTime?sn(t.readTime):U.min()}(e);return this.listener.a_(t,a)}u_(e){const t={};t.database=un(this.serializer),t.addTarget=function(e,t){let a;const s=t.target;if(a=ha(s)?{documents:gn(e,s)}:{query:yn(e,s)},a.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){a.resumeToken=tn(e,t.resumeToken);const s=$s(e,t.expectedCount);null!==s&&(a.expectedCount=s)}else if(t.snapshotVersion.compareTo(U.min())>0){a.readTime=en(e,t.snapshotVersion.toTimestamp());const s=$s(e,t.expectedCount);null!==s&&(a.expectedCount=s)}return a}(this.serializer,e);const a=function(e,t){const a=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return y()}}(t.purpose);return null==a?null:{"goog-listen-tags":a}}(this.serializer,e);a&&(t.labels=a),this.e_(t)}c_(e){const t={};t.database=un(this.serializer),t.removeTarget=e,this.e_(t)}}class ti extends $o{constructor(e,t,a,s,n,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,a,s,r),this.serializer=n,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){if(v(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const t=function(e,t){return e&&e.length>0?(v(void 0!==t),e.map(e=>function(e,t){let a=e.updateTime?sn(e.updateTime):sn(t);return a.isEqual(U.min())&&(a=sn(t)),new ds(a,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),a=sn(e.commitTime);return this.listener.I_(a,t)}return v(!e.writeResults||0===e.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=un(this.serializer),this.e_(e)}P_(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>pn(this.serializer,e))};this.e_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends class{}{constructor(e,t,a,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=a,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new E(S.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,a){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,n])=>this.connection.wo(e,t,a,s,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(S.UNKNOWN,e.toString())})}Co(e,t,a,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,r])=>this.connection.Co(e,t,a,n,r,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(S.UNKNOWN,e.toString())})}terminate(){this.d_=!0}}class si{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_("Connection failed 1 times. Most recent error: "+e.toString()),this.p_("Offline")))}set(e){this.S_(),this.V_=0,"Online"===e&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(p(t),this.f_=!1):f("OnlineStateTracker",t)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,a,s,n){this.localStore=e,this.datastore=t,this.asyncQueue=a,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=n,this.F_.ro(e=>{a.enqueueAndForget(async()=>{mi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=w(e);t.C_.add(4),await oi(t),t.M_.set("Unknown"),t.C_.delete(4),await ri(t)}(this))})}),this.M_=new si(a,s)}}async function ri(e){if(mi(e))for(const t of e.v_)await t(!0)}async function oi(e){for(const t of e.v_)await t(!1)}function ii(e,t){const a=w(e);a.D_.has(t.targetId)||(a.D_.set(t.targetId,t),hi(a)?ui(a):Ci(a).Ho()&&di(a,t))}function ci(e,t){const a=w(e),s=Ci(a);a.D_.delete(t),s.Ho()&&li(a,t),0===a.D_.size&&(s.Ho()?s.Zo():mi(a)&&a.M_.set("Unknown"))}function di(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const a=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(a)}Ci(e).u_(t)}function li(e,t){e.x_.Oe(t),Ci(e).c_(t)}function ui(e){e.x_=new Gs({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Ci(e).start(),e.M_.g_()}function hi(e){return mi(e)&&!Ci(e).jo()&&e.D_.size>0}function mi(e){return 0===w(e).C_.size}function fi(e){e.x_=void 0}async function pi(e){e.D_.forEach((t,a)=>{di(e,t)})}async function bi(e,t){fi(e),hi(e)?(e.M_.w_(t),ui(e)):e.M_.set("Unknown")}async function gi(e,t,a){if(e.M_.set("Online"),t instanceof zs&&2===t.state&&t.cause)try{await async function(e,t){const a=t.cause;for(const s of t.targetIds)e.D_.has(s)&&(await e.remoteSyncer.rejectListen(s,a),e.D_.delete(s),e.x_.removeTarget(s))}(e,t)}catch(a){f("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),a),await yi(e,a)}else if(t instanceof Bs?e.x_.$e(t):t instanceof Hs?e.x_.Je(t):e.x_.Ge(t),!a.isEqual(U.min()))try{const t=await wo(e.localStore);a.compareTo(t)>=0&&await function(e,t){const a=e.x_.it(t);return a.targetChanges.forEach((a,s)=>{if(a.resumeToken.approximateByteSize()>0){const n=e.D_.get(s);n&&e.D_.set(s,n.withResumeToken(a.resumeToken,t))}}),a.targetMismatches.forEach((t,a)=>{const s=e.D_.get(t);if(!s)return;e.D_.set(t,s.withResumeToken(ot.EMPTY_BYTE_STRING,s.snapshotVersion)),li(e,t);const n=new Nn(s.target,t,a,s.sequenceNumber);di(e,n)}),e.remoteSyncer.applyRemoteEvent(a)}(e,a)}catch(t){f("RemoteStore","Failed to raise snapshot:",t),await yi(e,t)}}async function yi(e,t,a){if(!ce(t))throw t;e.C_.add(1),await oi(e),e.M_.set("Offline"),a||(a=()=>wo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await a(),e.C_.delete(1),await ri(e)})}function vi(e,t){return t().catch(a=>yi(e,a,t))}async function Ai(e){const t=w(e),a=Mi(t);let s=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;wi(t);)try{const e=await Eo(t.localStore,s);if(null===e){0===t.b_.length&&a.Zo();break}s=e.batchId,Si(t,e)}catch(e){await yi(t,e)}Ei(t)&&Ti(t)}function wi(e){return mi(e)&&e.b_.length<10}function Si(e,t){e.b_.push(t);const a=Mi(e);a.Ho()&&a.h_&&a.P_(t.mutations)}function Ei(e){return mi(e)&&!Mi(e).jo()&&e.b_.length>0}function Ti(e){Mi(e).start()}async function ki(e){Mi(e).E_()}async function Ri(e){const t=Mi(e);for(const a of e.b_)t.P_(a.mutations)}async function Ni(e,t,a){const s=e.b_.shift(),n=Rs.from(s,t,a);await vi(e,()=>e.remoteSyncer.applySuccessfulWrite(n)),await Ai(e)}async function xi(e,t){t&&Mi(e).h_&&await async function(e,t){if(function(e){return Cs(e)&&e!==S.ABORTED}(t.code)){const a=e.b_.shift();Mi(e).Yo(),await vi(e,()=>e.remoteSyncer.rejectFailedWrite(a.batchId,t)),await Ai(e)}}(e,t),Ei(e)&&Ti(e)}async function Pi(e,t){const a=w(e);a.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const s=mi(a);a.C_.add(3),await oi(a),s&&a.M_.set("Unknown"),await a.remoteSyncer.handleCredentialChange(t),a.C_.delete(3),await ri(a)}async function Ii(e,t){const a=w(e);t?(a.C_.delete(2),await ri(a)):t||(a.C_.add(2),await oi(a),a.M_.set("Unknown"))}function Ci(e){return e.O_||(e.O_=function(e,t,a){const s=w(e);return s.A_(),new ei(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,a)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{ho:pi.bind(null,e),Io:bi.bind(null,e),a_:gi.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),hi(e)?ui(e):e.M_.set("Unknown")):(await e.O_.stop(),fi(e))})),e.O_}function Mi(e){return e.N_||(e.N_=function(e,t,a){const s=w(e);return s.A_(),new ti(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,a)}(e.datastore,e.asyncQueue,{ho:ki.bind(null,e),Io:xi.bind(null,e),T_:Ri.bind(null,e),I_:Ni.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Ai(e)):(await e.N_.stop(),e.b_.length>0&&(f("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ji{constructor(e,t,a,s,n){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=a,this.op=s,this.removalCallback=n,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,a,s,n){const r=Date.now()+a,o=new ji(e,t,r,s,n);return o.start(a),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Di(e,t){if(p("AsyncQueue",`${t}: ${e}`),ce(e))return new E(S.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.comparator=e?(t,a)=>e(t,a)||z.comparator(t.key,a.key):(e,t)=>z.comparator(e.key,t.key),this.keyedMap=Za(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new Li(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,a)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Li))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=a.getNext().key;if(!e.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const a=new Li;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=t,a}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.B_=new Ye(z.comparator)}track(e){const t=e.doc.key,a=this.B_.get(t);a?0!==e.type&&3===a.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==a.type?this.B_=this.B_.insert(t,{type:a.type,doc:e.doc}):2===e.type&&2===a.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===a.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===a.type?this.B_=this.B_.remove(t):1===e.type&&2===a.type?this.B_=this.B_.insert(t,{type:1,doc:a.doc}):0===e.type&&1===a.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):y():this.B_=this.B_.insert(t,e)}L_(){const e=[];return this.B_.inorderTraversal((t,a)=>{e.push(a)}),e}}class Zi{constructor(e,t,a,s,n,r,o,i,c){this.query=e,this.docs=t,this.oldDocs=a,this.docChanges=s,this.mutatedKeys=n,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=i,this.hasCachedResults=c}static fromInitialDocuments(e,t,a,s,n){const r=[];return t.forEach(e=>{r.push({type:0,doc:e})}),new Zi(e,t,Li.emptySet(t),r,a,s,!0,!1,n)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,a=e.docChanges;if(t.length!==a.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==a[e].type||!t[e].doc.isEqual(a[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.k_=void 0,this.listeners=[]}}class Ui{constructor(){this.queries=new ja(e=>Na(e),Ra),this.onlineState="Unknown",this.q_=new Set}}async function Fi(e,t){const a=w(e),s=t.query;let n=!1,r=a.queries.get(s);if(r||(n=!0,r=new _i),n)try{r.k_=await a.onListen(s)}catch(e){const a=Di(e,`Initialization of query '${xa(t.query)}' failed`);return void t.onError(a)}a.queries.set(s,r),r.listeners.push(t),t.Q_(a.onlineState),r.k_&&t.K_(r.k_)&&zi(a)}async function qi(e,t){const a=w(e),s=t.query;let n=!1;const r=a.queries.get(s);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),n=0===r.listeners.length)}if(n)return a.queries.delete(s),a.onUnlisten(s)}function Bi(e,t){const a=w(e);let s=!1;for(const e of t){const t=e.query,n=a.queries.get(t);if(n){for(const t of n.listeners)t.K_(e)&&(s=!0);n.k_=e}}s&&zi(a)}function Hi(e,t,a){const s=w(e),n=s.queries.get(t);if(n)for(const e of n.listeners)e.onError(a);s.queries.delete(t)}function zi(e){e.q_.forEach(e=>{e.next()})}class Vi{constructor(e,t,a){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=a||{}}K_(e){if(!this.options.includeMetadataChanges){const t=[];for(const a of e.docChanges)3!==a.type&&t.push(a);e=new Zi(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){if(!e.fromCache)return!0;const a="Offline"!==t;return(!this.options.J_||!a)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}z_(e){if(e.docChanges.length>0)return!0;const t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}H_(e){e=Zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){this.Y_=e,this.byteLength=t}Z_(){return"metadata"in this.Y_}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.serializer=e}hs(e){return cn(this.serializer,e)}Ps(e){return e.metadata.exists?fn(this.serializer,e.document,!1):_t.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return sn(e)}}class Wi{constructor(e,t,a){this.X_=e,this.localStore=t,this.serializer=a,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Ki(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++t;const a=q.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(a.get(a.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ta(e){const t=new Map,a=new Ji(this.serializer);for(const s of e)if(s.metadata.queries){const e=a.hs(s.metadata.name);for(const a of s.metadata.queries){const s=(t.get(a)||za()).add(e);t.set(a,s)}}return t}async complete(){const e=await async function(e,t,a,s){const n=w(e);let r=za(),o=La();for(const e of a){const a=t.hs(e.metadata.name);e.document&&(r=r.add(a));const s=t.Ps(e);s.setReadTime(t.Is(e.metadata.readTime)),o=o.insert(a,s)}const i=n.ss.newChangeBuffer({trackRemovals:!0}),c=await To(n,function(e){return Sa(ya(q.fromString("__bundle__/docs/"+e)))}(s));return n.persistence.runTransaction("Apply bundle documents","readwrite",e=>So(e,i,o).next(t=>(i.apply(e),t)).next(t=>n.qr.removeMatchingKeysForTargetId(e,c.targetId).next(()=>n.qr.addMatchingKeys(e,r,c.targetId)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,t.us,t.cs)).next(()=>t.us)))}(this.localStore,new Ji(this.serializer),this.documents,this.X_.id),t=this.ta(this.documents);for(const e of this.queries)await Io(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function Ki(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.key=e}}class Yi{constructor(e){this.key=e}}class Xi{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=za(),this.mutatedKeys=za(),this._a=Ca(e),this.aa=new Li(this._a)}get ua(){return this.ia}ca(e,t){const a=t?t.la:new Oi,s=t?t.aa:this.aa;let n=t?t.mutatedKeys:this.mutatedKeys,r=s,o=!1;const i="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((e,t)=>{const d=s.get(e),l=Pa(this.query,t)?t:null,u=!!d&&this.mutatedKeys.has(d.key),h=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let m=!1;d&&l?d.data.isEqual(l.data)?u!==h&&(a.track({type:3,doc:l}),m=!0):this.ha(d,l)||(a.track({type:2,doc:l}),m=!0,(i&&this._a(l,i)>0||c&&this._a(l,c)<0)&&(o=!0)):!d&&l?(a.track({type:0,doc:l}),m=!0):d&&!l&&(a.track({type:1,doc:d}),m=!0,(i||c)&&(o=!0)),m&&(l?(r=r.add(l),n=h?n.add(e):n.delete(e)):(r=r.delete(e),n=n.delete(e)))}),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),n=n.delete(e.key),a.track({type:1,doc:e})}return{aa:r,la:a,Zi:o,mutatedKeys:n}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,a,s){const n=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const r=e.la.L_();r.sort((e,t)=>function(e,t){const a=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return a(e)-a(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this._a(e.doc,t.doc)),this.Pa(a),s=null!=s&&s;const o=t&&!s?this.Ia():[],i=0===this.oa.size&&this.current&&!s?1:0,c=i!==this.sa;return this.sa=i,0!==r.length||c?{snapshot:new Zi(this.query,e.aa,n,r,e.mutatedKeys,0===i,c,!1,!!a&&a.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({aa:this.aa,la:new Oi,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=za(),this.aa.forEach(e=>{this.Ea(e.key)&&(this.oa=this.oa.add(e.key))});const t=[];return e.forEach(e=>{this.oa.has(e)||t.push(new Yi(e))}),this.oa.forEach(a=>{e.has(a)||t.push(new Qi(a))}),t}da(e){this.ia=e.ls,this.oa=za();const t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return Zi.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class $i{constructor(e,t,a){this.query=e,this.targetId=t,this.view=a}}class ec{constructor(e){this.key=e,this.Ra=!1}}class tc{constructor(e,t,a,s,n,r){this.localStore=e,this.remoteStore=t,this.eventManager=a,this.sharedClientState=s,this.currentUser=n,this.maxConcurrentLimboResolutions=r,this.Va={},this.ma=new ja(e=>Na(e),Ra),this.fa=new Map,this.ga=new Set,this.pa=new Ye(z.comparator),this.ya=new Map,this.wa=new Xr,this.Sa={},this.ba=new Map,this.Da=Nr.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function ac(e,t){const a=xc(e);let s,n;const r=a.ma.get(t);if(r)s=r.targetId,a.sharedClientState.addLocalQueryTarget(s),n=r.view.Aa();else{const e=await To(a.localStore,Sa(t)),r=a.sharedClientState.addLocalQueryTarget(e.targetId);s=e.targetId,n=await sc(a,t,s,"current"===r,e.resumeToken),a.isPrimaryClient&&ii(a.remoteStore,e)}return n}async function sc(e,t,a,s,n){e.va=(t,a,s)=>async function(e,t,a,s){let n=t.view.ca(a);n.Zi&&(n=await Ro(e.localStore,t.query,!1).then(({documents:e})=>t.view.ca(e,n)));const r=s&&s.targetChanges.get(t.targetId),o=s&&null!=s.targetMismatches.get(t.targetId),i=t.view.applyChanges(n,e.isPrimaryClient,r,o);return fc(e,t.targetId,i.Ta),i.snapshot}(e,t,a,s);const r=await Ro(e.localStore,t,!0),o=new Xi(t,r.ls),i=o.ca(r.documents),c=qs.createSynthesizedTargetChangeForCurrentChange(a,s&&"Offline"!==e.onlineState,n),d=o.applyChanges(i,e.isPrimaryClient,c);fc(e,a,d.Ta);const l=new $i(t,a,o);return e.ma.set(t,l),e.fa.has(a)?e.fa.get(a).push(t):e.fa.set(a,[t]),d.snapshot}async function nc(e,t){const a=w(e),s=a.ma.get(t),n=a.fa.get(s.targetId);if(n.length>1)return a.fa.set(s.targetId,n.filter(e=>!Ra(e,t))),void a.ma.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(s.targetId),a.sharedClientState.isActiveQueryTarget(s.targetId)||await ko(a.localStore,s.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(s.targetId),ci(a.remoteStore,s.targetId),hc(a,s.targetId)}).catch(ae)):(hc(a,s.targetId),await ko(a.localStore,s.targetId,!0))}async function rc(e,t){const a=w(e);try{const e=await function(e,t){const a=w(e),s=t.snapshotVersion;let n=a.ts;return a.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const r=a.ss.newChangeBuffer({trackRemovals:!0});n=a.ts;const o=[];t.targetChanges.forEach((r,i)=>{const c=n.get(i);if(!c)return;o.push(a.qr.removeMatchingKeys(e,r.removedDocuments,i).next(()=>a.qr.addMatchingKeys(e,r.addedDocuments,i)));let d=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(i)?d=d.withResumeToken(ot.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):r.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(r.resumeToken,s)),n=n.insert(i,d),function(e,t,a){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size>0)}(c,d,r)&&o.push(a.qr.updateTargetData(e,d))});let i=La(),c=za();if(t.documentUpdates.forEach(s=>{t.resolvedLimboDocuments.has(s)&&o.push(a.persistence.referenceDelegate.updateLimboDocument(e,s))}),o.push(So(e,r,t.documentUpdates).next(e=>{i=e.us,c=e.cs})),!s.isEqual(U.min())){const t=a.qr.getLastRemoteSnapshotVersion(e).next(t=>a.qr.setTargetsMetadata(e,e.currentSequenceNumber,s));o.push(t)}return se.waitFor(o).next(()=>r.apply(e)).next(()=>a.localDocuments.getLocalViewOfDocuments(e,i,c)).next(()=>i)}).then(e=>(a.ts=n,e))}(a.localStore,t);t.targetChanges.forEach((e,t)=>{const s=a.ya.get(t);s&&(v(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?s.Ra=!0:e.modifiedDocuments.size>0?v(s.Ra):e.removedDocuments.size>0&&(v(s.Ra),s.Ra=!1))}),await gc(a,e,t)}catch(e){await ae(e)}}function oc(e,t,a){const s=w(e);if(s.isPrimaryClient&&0===a||!s.isPrimaryClient&&1===a){const e=[];s.ma.forEach((a,s)=>{const n=s.view.Q_(t);n.snapshot&&e.push(n.snapshot)}),function(e,t){const a=w(e);a.onlineState=t;let s=!1;a.queries.forEach((e,a)=>{for(const e of a.listeners)e.Q_(t)&&(s=!0)}),s&&zi(a)}(s.eventManager,t),e.length&&s.Va.a_(e),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ic(e,t,a){const s=w(e);s.sharedClientState.updateQueryState(t,"rejected",a);const n=s.ya.get(t),r=n&&n.key;if(r){let e=new Ye(z.comparator);e=e.insert(r,_t.newNoDocument(r,U.min()));const a=za().add(r),n=new Fs(U.min(),new Map,new Ye(L),e,a);await rc(s,n),s.pa=s.pa.remove(r),s.ya.delete(t),bc(s)}else await ko(s.localStore,t,!1).then(()=>hc(s,t,a)).catch(ae)}async function cc(e,t){const a=w(e),s=t.batch.batchId;try{const e=await function(e,t){const a=w(e);return a.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const s=t.batch.keys(),n=a.ss.newChangeBuffer({trackRemovals:!0});return function(e,t,a,s){const n=a.batch,r=n.keys();let o=se.resolve();return r.forEach(e=>{o=o.next(()=>s.getEntry(t,e)).next(t=>{const r=a.docVersions.get(e);v(null!==r),t.version.compareTo(r)<0&&(n.applyToRemoteDocument(t,a),t.isValidDocument()&&(t.setReadTime(a.commitVersion),s.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,n))}(a,e,t,n).next(()=>n.apply(e)).next(()=>a.mutationQueue.performConsistencyCheck(e)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(e,s,t.batch.batchId)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=za();for(let a=0;a<e.mutationResults.length;++a)e.mutationResults[a].transformResults.length>0&&(t=t.add(e.batch.mutations[a].key));return t}(t))).next(()=>a.localDocuments.getDocuments(e,s))})}(a.localStore,t);uc(a,s,null),lc(a,s),a.sharedClientState.updateMutationState(s,"acknowledged"),await gc(a,e)}catch(e){await ae(e)}}async function dc(e,t,a){const s=w(e);try{const e=await function(e,t){const a=w(e);return a.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let s;return a.mutationQueue.lookupMutationBatch(e,t).next(t=>(v(null!==t),s=t.keys(),a.mutationQueue.removeMutationBatch(e,t))).next(()=>a.mutationQueue.performConsistencyCheck(e)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(e,s,t)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,s)).next(()=>a.localDocuments.getDocuments(e,s))})}(s.localStore,t);uc(s,t,a),lc(s,t),s.sharedClientState.updateMutationState(t,"rejected",a),await gc(s,e)}catch(a){await ae(a)}}function lc(e,t){(e.ba.get(t)||[]).forEach(e=>{e.resolve()}),e.ba.delete(t)}function uc(e,t,a){const s=w(e);let n=s.Sa[s.currentUser.toKey()];if(n){const e=n.get(t);e&&(a?e.reject(a):e.resolve(),n=n.remove(t)),s.Sa[s.currentUser.toKey()]=n}}function hc(e,t,a=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.fa.get(t))e.ma.delete(s),a&&e.Va.Fa(s,a);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(t=>{e.wa.containsKey(t)||mc(e,t)})}function mc(e,t){e.ga.delete(t.path.canonicalString());const a=e.pa.get(t);null!==a&&(ci(e.remoteStore,a),e.pa=e.pa.remove(t),e.ya.delete(a),bc(e))}function fc(e,t,a){for(const s of a)s instanceof Qi?(e.wa.addReference(s.key,t),pc(e,s)):s instanceof Yi?(f("SyncEngine","Document no longer in limbo: "+s.key),e.wa.removeReference(s.key,t),e.wa.containsKey(s.key)||mc(e,s.key)):y()}function pc(e,t){const a=t.key,s=a.path.canonicalString();e.pa.get(a)||e.ga.has(s)||(f("SyncEngine","New document in limbo: "+a),e.ga.add(s),bc(e))}function bc(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const a=new z(q.fromString(t)),s=e.Da.next();e.ya.set(s,new ec(a)),e.pa=e.pa.insert(a,s),ii(e.remoteStore,new Nn(Sa(ya(a.path)),s,"TargetPurposeLimboResolution",pe._e))}}async function gc(e,t,a){const s=w(e),n=[],r=[],o=[];s.ma.isEmpty()||(s.ma.forEach((e,i)=>{o.push(s.va(i,t,a).then(e=>{if((e||a)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(i.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){n.push(e);const t=po.Qi(i.targetId,e);r.push(t)}}))}),await Promise.all(o),s.Va.a_(n),await async function(e,t){const a=w(e);try{await a.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>se.forEach(t,t=>se.forEach(t.ki,s=>a.persistence.referenceDelegate.addReference(e,t.targetId,s)).next(()=>se.forEach(t.qi,s=>a.persistence.referenceDelegate.removeReference(e,t.targetId,s)))))}catch(e){if(!ce(e))throw e;f("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=a.ts.get(t),s=e.snapshotVersion,n=e.withLastLimboFreeSnapshotVersion(s);a.ts=a.ts.insert(t,n)}}}(s.localStore,r))}async function yc(e,t){const a=w(e);if(!a.currentUser.isEqual(t)){f("SyncEngine","User change. New user:",t.toKey());const e=await Ao(a.localStore,t);a.currentUser=t,function(e,t){e.ba.forEach(e=>{e.forEach(e=>{e.reject(new E(S.CANCELLED,t))})}),e.ba.clear()}(a,"'waitForPendingWrites' promise is rejected due to a user change."),a.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await gc(a,e._s)}}function vc(e,t){const a=w(e),s=a.ya.get(t);if(s&&s.Ra)return za().add(s.key);{let e=za();const s=a.fa.get(t);if(!s)return e;for(const t of s){const s=a.ma.get(t);e=e.unionWith(s.view.ua)}return e}}async function Ac(e,t){const a=w(e),s=await Ro(a.localStore,t.query,!0),n=t.view.da(s);return a.isPrimaryClient&&fc(a,t.targetId,n.Ta),n}async function wc(e,t){const a=w(e);return xo(a.localStore,t).then(e=>gc(a,e))}async function Sc(e,t,a,s){const n=w(e),r=await function(e,t){const a=w(e),s=w(a.mutationQueue);return a.persistence.runTransaction("Lookup mutation documents","readonly",e=>s.Cn(e,t).next(t=>t?a.localDocuments.getDocuments(e,t):se.resolve(null)))}(n.localStore,t);null!==r?("pending"===a?await Ai(n.remoteStore):"acknowledged"===a||"rejected"===a?(uc(n,t,s||null),lc(n,t),function(e,t){w(w(e).mutationQueue).Fn(t)}(n.localStore,t)):y(),await gc(n,r)):f("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Ec(e,t,a){const s=w(e),n=[],r=[];for(const e of t){let t;const a=s.fa.get(e);if(a&&0!==a.length){t=await To(s.localStore,Sa(a[0]));for(const e of a){const t=s.ma.get(e),a=await Ac(s,t);a.snapshot&&r.push(a.snapshot)}}else{const a=await No(s.localStore,e);t=await To(s.localStore,a),await sc(s,Tc(a),e,!1,t.resumeToken)}n.push(t)}return s.Va.a_(r),n}function Tc(e){return ga(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function kc(e){return function(e){return w(w(e).persistence).Bi()}(w(e).localStore)}async function Rc(e,t,a,s){const n=w(e);if(n.Ca)return void f("SyncEngine","Ignoring unexpected query state notification.");const r=n.fa.get(t);if(r&&r.length>0)switch(a){case"current":case"not-current":{const e=await xo(n.localStore,Ia(r[0])),s=Fs.createSynthesizedRemoteEventForCurrentChange(t,"current"===a,ot.EMPTY_BYTE_STRING);await gc(n,e,s);break}case"rejected":await ko(n.localStore,t,!0),hc(n,t,s);break;default:y()}}async function Nc(e,t,a){const s=xc(e);if(s.Ca){for(const e of t){if(s.fa.has(e)){f("SyncEngine","Adding an already active target "+e);continue}const t=await No(s.localStore,e),a=await To(s.localStore,t);await sc(s,Tc(t),a.targetId,!1,a.resumeToken),ii(s.remoteStore,a)}for(const e of a)s.fa.has(e)&&await ko(s.localStore,e,!1).then(()=>{ci(s.remoteStore,e),hc(s,e)}).catch(ae)}}function xc(e){const t=w(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=rc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=vc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ic.bind(null,t),t.Va.a_=Bi.bind(null,t.eventManager),t.Va.Fa=Hi.bind(null,t.eventManager),t}function Pc(e){const t=w(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=cc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=dc.bind(null,t),t}class Ic{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Yo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return vo(this.persistence,new go,e.initialUser,this.serializer)}createPersistence(e){return new no(oo.jr,this.serializer)}createSharedClientState(e){return new Fo}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Cc extends Ic{constructor(e,t,a){super(),this.xa=e,this.cacheSizeBytes=t,this.forceOwnership=a,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await Pc(this.xa.syncEngine),await Ai(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return vo(this.persistence,new go,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const a=this.persistence.referenceDelegate.garbageCollector;return new Dr(a,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const a=new fe(t,this.persistence);return new me(e.asyncQueue,a)}createPersistence(e){const t=fo(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),a=void 0!==this.cacheSizeBytes?vr.withCacheSize(this.cacheSizeBytes):vr.DEFAULT;return new uo(this.synchronizeTabs,t,e.clientId,a,e.asyncQueue,Ko(),Qo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Fo}}class Mc extends Cc{constructor(e,t){super(e,t,!1),this.xa=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xa.syncEngine;this.sharedClientState instanceof Uo&&(this.sharedClientState.syncEngine={Ys:Sc.bind(null,t),Zs:Rc.bind(null,t),Xs:Nc.bind(null,t),Bi:kc.bind(null,t),Js:wc.bind(null,t)},await this.sharedClientState.start()),await this.persistence.mi(async e=>{await async function(e,t){const a=w(e);if(xc(a),Pc(a),!0===t&&!0!==a.Ca){const e=a.sharedClientState.getAllActiveQueryTargets(),t=await Ec(a,e.toArray());a.Ca=!0,await Ii(a.remoteStore,!0);for(const e of t)ii(a.remoteStore,e)}else if(!1===t&&!1!==a.Ca){const e=[];let t=Promise.resolve();a.fa.forEach((s,n)=>{a.sharedClientState.isLocalQueryTarget(n)?e.push(n):t=t.then(()=>(hc(a,n),ko(a.localStore,n,!0))),ci(a.remoteStore,n)}),await t,await Ec(a,e),function(e){const t=w(e);t.ya.forEach((e,a)=>{ci(t.remoteStore,a)}),t.wa.Vr(),t.ya=new Map,t.pa=new Ye(z.comparator)}(a),a.Ca=!1,await Ii(a.remoteStore,!1)}}(this.xa.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Ko();if(!Uo.D(t))throw new E(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const a=fo(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Uo(t,e.asyncQueue,a,e.clientId,e.initialUser)}}class jc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oc(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=yc.bind(null,this.syncEngine),await Ii(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ui}createDatastore(e){const t=Yo(e.databaseInfo.databaseId),a=function(e){return new Wo(e)}(e.databaseInfo);return function(e,t,a,s){return new ai(e,t,a,s)}(e.authCredentials,e.appCheckCredentials,a,t)}createRemoteStore(e){return function(e,t,a,s,n){return new ni(e,t,a,s,n)}(this.localStore,this.datastore,e.asyncQueue,e=>oc(this.syncEngine,e,0),Bo.D()?new Bo:new qo)}createSyncEngine(e,t){return function(e,t,a,s,n,r,o){const i=new tc(e,t,a,s,n,r);return o&&(i.Ca=!0),i}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=w(e);f("RemoteStore","RemoteStore shutting down."),t.C_.add(5),await oi(t),t.F_.shutdown(),t.M_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(e,t=10240){let a=0;return{async read(){if(a<e.byteLength){const s={value:e.slice(a,a+t),done:!1};return a+=t,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):p("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t){this.Ba=e,this.serializer=t,this.metadata=new T,this.buffer=new Uint8Array,this.La=new TextDecoder("utf-8"),this.ka().then(e=>{e&&e.Z_()?this.metadata.resolve(e.Y_.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.Y_)))},e=>this.metadata.reject(e))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const e=await this.qa();if(null===e)return null;const t=this.La.decode(e),a=Number(t);isNaN(a)&&this.Qa(`length string (${t}) is not valid number`);const s=await this.Ka(a);return new Gi(JSON.parse(s),e.length+a)}$a(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async qa(){for(;this.$a()<0&&!await this.Ua(););if(0===this.buffer.length)return null;const e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const t=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qa(e){throw this.Ba.cancel(),new Error("Invalid bundle format: "+e)}async Ua(){const e=await this.Ba.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const a=w(e),s=un(a.serializer)+"/documents",n={documents:t.map(e=>on(a.serializer,e))},r=await a.Co("BatchGetDocuments",s,n,t.length),o=new Map;r.forEach(e=>{const t=function(e,t){return"found"in t?function(e,t){v(!!t.found),t.found.name,t.found.updateTime;const a=cn(e,t.found.name),s=sn(t.found.updateTime),n=t.found.createTime?sn(t.found.createTime):U.min(),r=new Ot({mapValue:{fields:t.found.fields}});return _t.newFoundDocument(a,s,n,r)}(e,t):"missing"in t?function(e,t){v(!!t.missing),v(!!t.readTime);const a=cn(e,t.missing),s=sn(t.readTime);return _t.newNoDocument(a,s)}(e,t):y()}(a.serializer,e);o.set(t.key.toString(),t)});const i=[];return t.forEach(e=>{const t=o.get(e.toString());v(!!t),i.push(t)}),i}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Es(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const a=z.fromPath(t);this.mutations.push(new Ts(a,this.precondition(a)))}),await async function(e,t){const a=w(e),s=un(a.serializer)+"/documents",n={writes:t.map(e=>pn(a.serializer,e))};await a.wo("Commit",s,n)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw y();t=U.min()}const a=this.readVersions.get(e.key.toString());if(a){if(!t.isEqual(a))throw new E(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(U.min())?ls.exists(!1):ls.updateTime(t):ls.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(U.min()))throw new E(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ls.updateTime(t)}return ls.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t,a,s,n){this.asyncQueue=e,this.datastore=t,this.options=a,this.updateFunction=s,this.deferred=n,this.Wa=a.maxAttempts,this.zo=new Xo(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const e=new Zc(this.datastore),t=this.za(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.ja(e)}))}).catch(e=>{this.ja(e)})})}za(e){try{const t=this.updateFunction(e);return!be(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Cs(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t,a,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=a,this.databaseInfo=s,this.user=d.UNAUTHENTICATED,this.clientId=D.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(a,async e=>{f("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(a,e=>(f("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const a=Di(t,"Failed to shutdown persistence");e.reject(a)}}),e.promise}}async function Fc(e,t){e.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const a=await e.getConfiguration();await t.initialize(a);let s=a.initialUser;e.setCredentialChangeListener(async e=>{s.isEqual(e)||(await Ao(t.localStore,e),s=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function qc(e,t){e.asyncQueue.verifyOperationInProgress();const a=await Hc(e);f("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(a,s),e.setCredentialChangeListener(e=>Pi(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,a)=>Pi(t.remoteStore,a)),e._onlineComponents=t}function Bc(e){return"FirebaseError"===e.name?e.code===S.FAILED_PRECONDITION||e.code===S.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Hc(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){f("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fc(e,e._uninitializedComponentsProvider._offline)}catch(t){const a=t;if(!Bc(a))throw a;b("Error using user provided cache. Falling back to memory cache: "+a),await Fc(e,new Ic)}}else f("FirestoreClient","Using default OfflineComponentProvider"),await Fc(e,new Ic);return e._offlineComponents}async function zc(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(f("FirestoreClient","Using user provided OnlineComponentProvider"),await qc(e,e._uninitializedComponentsProvider._online)):(f("FirestoreClient","Using default OnlineComponentProvider"),await qc(e,new jc))),e._onlineComponents}function Vc(e){return Hc(e).then(e=>e.persistence)}function Gc(e){return Hc(e).then(e=>e.localStore)}function Jc(e){return zc(e).then(e=>e.remoteStore)}function Wc(e){return zc(e).then(e=>e.syncEngine)}function Kc(e){return zc(e).then(e=>e.datastore)}async function Qc(e){const t=await zc(e),a=t.eventManager;return a.onListen=ac.bind(null,t.syncEngine),a.onUnlisten=nc.bind(null,t.syncEngine),a}function Yc(e,t,a={}){const s=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,a,s,n){const r=new Lc({next:r=>{t.enqueueAndForget(()=>qi(e,o));const i=r.docs.has(a);!i&&r.fromCache?n.reject(new E(S.UNAVAILABLE,"Failed to get document because the client is offline.")):i&&r.fromCache&&s&&"server"===s.source?n.reject(new E(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):n.resolve(r)},error:e=>n.reject(e)}),o=new Vi(ya(a.path),r,{includeMetadataChanges:!0,J_:!0});return Fi(e,o)}(await Qc(e),e.asyncQueue,t,a,s)),s.promise}function Xc(e,t,a={}){const s=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,a,s,n){const r=new Lc({next:a=>{t.enqueueAndForget(()=>qi(e,o)),a.fromCache&&"server"===s.source?n.reject(new E(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):n.resolve(a)},error:e=>n.reject(e)}),o=new Vi(a,r,{includeMetadataChanges:!0,J_:!0});return Fi(e,o)}(await Qc(e),e.asyncQueue,t,a,s)),s.promise}function $c(e,t,a,s){const n=function(e,t){let a;return a="string"==typeof e?Ds().encode(e):e,function(e,t){return new Oc(e,t)}(function(e,t){if(e instanceof Uint8Array)return Dc(e,t);if(e instanceof ArrayBuffer)return Dc(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),t)}(a,Yo(t));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,a){const s=w(e);(async function(e,t,a){try{const s=await t.getMetadata();if(await function(e,t){const a=w(e),s=sn(t.createTime);return a.persistence.runTransaction("hasNewerBundle","readonly",e=>a.Kr.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(s)>=0)}(e.localStore,s))return await t.close(),a._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(s)),Promise.resolve(new Set);a._updateProgress(Ki(s));const n=new Wi(s,e.localStore,t.serializer);let r=await t.Ma();for(;r;){const e=await n.ea(r);e&&a._updateProgress(e),r=await t.Ma()}const o=await n.complete();return await gc(e,o.ra,void 0),await function(e,t){const a=w(e);return a.persistence.runTransaction("Save bundle","readwrite",e=>a.Kr.saveBundleMetadata(e,t))}(e.localStore,s),a._completeWith(o.progress),Promise.resolve(o.na)}catch(e){return b("SyncEngine","Loading bundle failed with "+e),a._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(s,t,a).then(e=>{s.sharedClientState.notifyBundleLoaded(e)})}(await Wc(e),n,s)})}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ed(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const td=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(e,t,a){if(!a)throw new E(S.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function sd(e,t,a,s){if(!0===t&&!0===s)throw new E(S.INVALID_ARGUMENT,`${e} and ${a} cannot be used together.`)}function nd(e){if(!z.isDocumentKey(e))throw new E(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function rd(e){if(z.isDocumentKey(e))throw new E(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function od(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":y()}function id(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const a=od(e);throw new E(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${a}`)}}return e}function cd(e,t){if(t<=0)throw new E(S.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){var t,a;if(void 0===e.host){if(void 0!==e.ssl)throw new E(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ed(null!==(a=e.experimentalLongPollingOptions)&&void 0!==a?a:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new E(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new E(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new E(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ld{constructor(e,t,a,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=a,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dd(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new R;switch(e.type){case"firstParty":return new I(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new E(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=td.get(e);t&&(f("ComponentProvider","Removing Datastore"),td.delete(e),t.terminate())}(this),Promise.resolve()}}function ud(e,t,a,s={}){var n;const r=(e=id(e,ld))._getSettings(),i=`${t}:${a}`;if("firestore.googleapis.com"!==r.host&&r.host!==i&&b("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:i,ssl:!1})),s.mockUserToken){let t,a;if("string"==typeof s.mockUserToken)t=s.mockUserToken,a=d.MOCK_USER;else{t=Object(o.h)(s.mockUserToken,null===(n=e._app)||void 0===n?void 0:n.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new E(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new d(r)}e._authCredentials=new N(new k(t,a))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t,a){this.converter=t,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new hd(this.firestore,e,this._query)}}class md{constructor(e,t,a){this.converter=t,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fd(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new md(this.firestore,e,this._key)}}class fd extends hd{constructor(e,t,a){super(e,t,ya(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new md(this.firestore,null,new z(e))}withConverter(e){return new fd(this.firestore,e,this._path)}}function pd(e,t,...a){if(e=Object(o.o)(e),ad("collection","path",t),e instanceof ld){const s=q.fromString(t,...a);return rd(s),new fd(e,null,s)}{if(!(e instanceof md||e instanceof fd))throw new E(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(q.fromString(t,...a));return rd(s),new fd(e.firestore,null,s)}}function bd(e,t){if(e=id(e,ld),ad("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new E(S.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new hd(e,null,function(e){return new ba(q.emptyPath(),e)}(t))}function gd(e,t,...a){if(e=Object(o.o)(e),1===arguments.length&&(t=D.newId()),ad("doc","path",t),e instanceof ld){const s=q.fromString(t,...a);return nd(s),new md(e,null,new z(s))}{if(!(e instanceof md||e instanceof fd))throw new E(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(q.fromString(t,...a));return nd(s),new md(e.firestore,e instanceof fd?e.converter:null,new z(s))}}function yd(e,t){return e=Object(o.o)(e),t=Object(o.o)(t),(e instanceof md||e instanceof fd)&&(t instanceof md||t instanceof fd)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function vd(e,t){return e=Object(o.o)(e),t=Object(o.o)(t),e instanceof hd&&t instanceof hd&&e.firestore===t.firestore&&Ra(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ad{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Xo(this,"async_queue_retry"),this.iu=()=>{const e=Qo();e&&f("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const e=Qo();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=Qo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const t=new T;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ce(e))throw e;f("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const t=this.Ja.then(()=>(this.tu=!0,e().catch(e=>{this.eu=e,this.tu=!1;throw p("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),e}).then(e=>(this.tu=!1,e))));return this.Ja=t,t}enqueueAfterDelay(e,t,a){this.su(),this.ru.indexOf(e)>-1&&(t=0);const s=ji.createAndSchedule(this,e,t,a,e=>this.au(e));return this.Xa.push(s),s}su(){this.eu&&y()}verifyOperationInProgress(){}async uu(){let e;do{e=this.Ja,await e}while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Xa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}function wd(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const a=e;for(const e of t)if(e in a&&"function"==typeof a[e])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Sd{constructor(){this._progressObserver={},this._taskCompletionResolver=new T,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,a){this._progressObserver={next:e,error:t,complete:a}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=-1;class Td extends ld{constructor(e,t,a,s){super(e,t,a,s),this.type="firestore",this._queue=new Ad,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rd(this),this._firestoreClient.terminate()}}function kd(e){return e._firestoreClient||Rd(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Rd(e){var t,a,s;const n=e._freezeSettings(),r=function(e,t,a,s){return new ft(e,t,a,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ed(s.experimentalLongPollingOptions),s.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Uc(e._authCredentials,e._appCheckCredentials,e._queue,r),(null===(a=n.localCache)||void 0===a?void 0:a._offlineComponentProvider)&&(null===(s=n.localCache)||void 0===s?void 0:s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:n.localCache.kind,_offline:n.localCache._offlineComponentProvider,_online:n.localCache._onlineComponentProvider})}function Nd(e,t){Od(e=id(e,Td));const a=kd(e);if(a._uninitializedComponentsProvider)throw new E(S.FAILED_PRECONDITION,"SDK cache is already specified.");b("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const s=e._freezeSettings(),n=new jc;return Pd(a,n,new Cc(n,s.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function xd(e){Od(e=id(e,Td));const t=kd(e);if(t._uninitializedComponentsProvider)throw new E(S.FAILED_PRECONDITION,"SDK cache is already specified.");b("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const a=e._freezeSettings(),s=new jc;return Pd(t,s,new Mc(s,a.cacheSizeBytes))}function Pd(e,t,a){const s=new T;return e.asyncQueue.enqueue(async()=>{try{await Fc(e,a),await qc(e,t),s.resolve()}catch(e){const t=e;if(!Bc(t))throw t;b("Error enabling indexeddb cache. Falling back to memory cache: "+t),s.reject(t)}}).then(()=>s.promise)}function Id(e){if(e._initialized&&!e._terminated)throw new E(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new T;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!re.D())return Promise.resolve();const t=e+"main";await re.delete(t)}(fo(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function Cd(e){return function(e){const t=new T;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t){const a=w(e);mi(a.remoteStore)||f("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=w(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e))}(a.localStore);if(-1===e)return void t.resolve();const s=a.ba.get(e)||[];s.push(t),a.ba.set(e,s)}catch(e){const a=Di(e,"Initialization of waitForPendingWrites() operation failed");t.reject(a)}}(await Wc(e),t)),t.promise}(kd(e=id(e,Td)))}function Md(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Vc(e),a=await Jc(e);return t.setNetworkEnabled(!0),function(e){const t=w(e);return t.C_.delete(0),ri(t)}(a)})}(kd(e=id(e,Td)))}function jd(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Vc(e),a=await Jc(e);return t.setNetworkEnabled(!1),async function(e){const t=w(e);t.C_.add(0),await oi(t),t.M_.set("Offline")}(a)})}(kd(e=id(e,Td)))}function Dd(e,t){const a=kd(e=id(e,Td)),s=new Sd;return $c(a,e._databaseId,t,s),s}function Ld(e,t){return function(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const a=w(e);return a.persistence.runTransaction("Get named query","readonly",e=>a.Kr.getNamedQuery(e,t))}(await Gc(e),t))}(kd(e=id(e,Td)),t).then(t=>t?new hd(e,null,t.query):null)}function Od(e){if(e._initialized||e._terminated)throw new E(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zd{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zd(ot.fromBase64String(e))}catch(e){throw new E(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Zd(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ud{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=/^__.*__$/;class Bd{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return null!==this.fieldMask?new vs(e,this.data,this.fieldMask,t,this.fieldTransforms):new ys(e,this.data,t,this.fieldTransforms)}}class Hd{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return new vs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function zd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Vd{constructor(e,t,a,s,n,r){this.settings=e,this.databaseId=t,this.serializer=a,this.ignoreUndefinedProperties=s,void 0===n&&this.Pu(),this.fieldTransforms=n||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Vd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;const a=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.Tu({path:a,du:!1});return s.Au(e),s}Ru(e){var t;const a=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.Tu({path:a,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return ul(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(0===e.length)throw this.mu("Document fields must not be empty");if(zd(this.Iu)&&qd.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class Gd{constructor(e,t,a){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=a||Yo(e)}pu(e,t,a,s=!1){return new Vd({Iu:e,methodName:t,gu:a,path:H.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jd(e){const t=e._freezeSettings(),a=Yo(e._databaseId);return new Gd(e._databaseId,!!t.ignoreUndefinedProperties,a)}function Wd(e,t,a,s,n,r={}){const o=e.pu(r.merge||r.mergeFields?2:0,t,a,n);il("Data must be an object, but it was:",o,s);const i=rl(s,o);let c,d;if(r.merge)c=new st(o.fieldMask),d=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const s of r.mergeFields){const n=cl(t,s,a);if(!o.contains(n))throw new E(S.INVALID_ARGUMENT,`Field '${n}' is specified in your field mask but missing from your input data.`);hl(e,n)||e.push(n)}c=new st(e),d=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,d=o.fieldTransforms;return new Bd(new Ot(i),c,d)}class Kd extends Ud{_toFieldTransform(e){if(2!==e.Iu)throw 1===e.Iu?e.mu(this._methodName+"() can only appear at the top level of your update data"):e.mu(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Kd}}function Qd(e,t,a){return new Vd({Iu:3,gu:t.settings.gu,methodName:e._methodName,du:a},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Yd extends Ud{_toFieldTransform(e){return new cs(e.path,new es)}isEqual(e){return e instanceof Yd}}class Xd extends Ud{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){const t=Qd(this,e,!0),a=this.yu.map(e=>nl(e,t)),s=new ts(a);return new cs(e.path,s)}isEqual(e){return this===e}}class $d extends Ud{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){const t=Qd(this,e,!0),a=this.yu.map(e=>nl(e,t)),s=new ss(a);return new cs(e.path,s)}isEqual(e){return this===e}}class el extends Ud{constructor(e,t){super(e),this.wu=t}_toFieldTransform(e){const t=new rs(e.serializer,Ka(e.serializer,this.wu));return new cs(e.path,t)}isEqual(e){return this===e}}function tl(e,t,a,s){const n=e.pu(1,t,a);il("Data must be an object, but it was:",n,s);const r=[],i=Ot.empty();Ke(s,(e,s)=>{const c=ll(t,e,a);s=Object(o.o)(s);const d=n.Ru(c);if(s instanceof Kd)r.push(c);else{const e=nl(s,d);null!=e&&(r.push(c),i.set(c,e))}});const c=new st(r);return new Hd(i,c,n.fieldTransforms)}function al(e,t,a,s,n,r){const i=e.pu(1,t,a),c=[cl(t,s,a)],d=[n];if(r.length%2!=0)throw new E(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<r.length;e+=2)c.push(cl(t,r[e])),d.push(r[e+1]);const l=[],u=Ot.empty();for(let e=c.length-1;e>=0;--e)if(!hl(l,c[e])){const t=c[e];let a=d[e];a=Object(o.o)(a);const s=i.Ru(t);if(a instanceof Kd)l.push(t);else{const e=nl(a,s);null!=e&&(l.push(t),u.set(t,e))}}const h=new st(l);return new Hd(u,h,i.fieldTransforms)}function sl(e,t,a,s=!1){return nl(a,e.pu(s?4:3,t))}function nl(e,t){if(ol(e=Object(o.o)(e)))return il("Unsupported field value:",t,e),rl(e,t);if(e instanceof Ud)return function(e,t){if(!zd(t.Iu))throw t.mu(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.mu(e._methodName+"() is not currently supported inside arrays");const a=e._toFieldTransform(t);a&&t.fieldTransforms.push(a)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&4!==t.Iu)throw t.mu("Nested arrays are not supported");return function(e,t){const a=[];let s=0;for(const n of e){let e=nl(n,t.Vu(s));null==e&&(e={nullValue:"NULL_VALUE"}),a.push(e),s++}return{arrayValue:{values:a}}}(e,t)}return function(e,t){if(null===(e=Object(o.o)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ka(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const a=_.fromDate(e);return{timestampValue:en(t.serializer,a)}}if(e instanceof _){const a=new _(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:en(t.serializer,a)}}if(e instanceof Fd)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Zd)return{bytesValue:tn(t.serializer,e._byteString)};if(e instanceof md){const a=t.databaseId,s=e.firestore._databaseId;if(!s.isEqual(a))throw t.mu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:nn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.mu("Unsupported field value: "+od(e))}(e,t)}function rl(e,t){const a={};return Qe(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ke(e,(e,s)=>{const n=nl(s,t.Eu(e));null!=n&&(a[e]=n)}),{mapValue:{fields:a}}}function ol(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof _||e instanceof Fd||e instanceof Zd||e instanceof md||e instanceof Ud)}function il(e,t,a){if(!ol(a)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(a)){const s=od(a);throw"an object"===s?t.mu(e+" a custom object"):t.mu(e+" "+s)}}function cl(e,t,a){if((t=Object(o.o)(t))instanceof _d)return t._internalPath;if("string"==typeof t)return ll(e,t);throw ul("Field path arguments must be of type string or ",e,!1,void 0,a)}const dl=new RegExp("[~\\*/\\[\\]]");function ll(e,t,a){if(t.search(dl)>=0)throw ul(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,a);try{return new _d(...t.split("."))._internalPath}catch(s){throw ul(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,a)}}function ul(e,t,a,s,n){const r=s&&!s.isEmpty(),o=void 0!==n;let i=`Function ${t}() called with invalid data`;a&&(i+=" (via `toFirestore()`)"),i+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=" in field "+s),o&&(c+=" in document "+n),c+=")"),new E(S.INVALID_ARGUMENT,i+e+c)}function hl(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t,a,s,n){this._firestore=e,this._userDataWriter=t,this._key=a,this._document=s,this._converter=n}get id(){return this._key.path.lastSegment()}get ref(){return new md(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new fl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(pl("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class fl extends ml{data(){return super.data()}}function pl(e,t){return"string"==typeof t?ll(e,t):t instanceof _d?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new E(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gl{}class yl extends gl{}function vl(e,t,...a){let s=[];t instanceof gl&&s.push(t),s=s.concat(a),function(e){const t=e.filter(e=>e instanceof Sl).length,a=e.filter(e=>e instanceof Al).length;if(t>1||t>0&&a>0)throw new E(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(s);for(const t of s)e=t._apply(e);return e}class Al extends yl{constructor(e,t,a){super(),this._field=e,this._op=t,this._value=a,this.type="where"}static _create(e,t,a){return new Al(e,t,a)}_apply(e){const t=this._parse(e);return Zl(e._query,t),new hd(e.firestore,e.converter,Ta(e._query,t))}_parse(e){const t=Jd(e.firestore);return function(e,t,a,s,n,r,o){let i;if(n.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new E(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){Ol(o,r);const t=[];for(const a of o)t.push(Ll(s,e,a));i={arrayValue:{values:t}}}else i=Ll(s,e,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||Ol(o,r),i=sl(a,t,o,"in"===r||"not-in"===r);return Vt.create(n,r,i)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function wl(e,t,a){const s=t,n=pl("where",e);return Al._create(n,s,a)}class Sl extends gl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Sl(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:Gt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let a=e;const s=t.getFlattenedFilters();for(const e of s)Zl(a,e),a=Ta(a,e)}(e._query,t),new hd(e.firestore,e.converter,Ta(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class El extends yl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new El(e,t)}_apply(e){const t=function(e,t,a){if(null!==e.startAt)throw new E(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new E(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Bt(t,a)}(e._query,this._field,this._direction);return new hd(e.firestore,e.converter,function(e,t){const a=e.explicitOrderBy.concat([t]);return new ba(e.path,e.collectionGroup,a,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Tl(e,t="asc"){const a=t,s=pl("orderBy",e);return El._create(s,a)}class kl extends yl{constructor(e,t,a){super(),this.type=e,this._limit=t,this._limitType=a}static _create(e,t,a){return new kl(e,t,a)}_apply(e){return new hd(e.firestore,e.converter,ka(e._query,this._limit,this._limitType))}}function Rl(e){return cd("limit",e),kl._create("limit",e,"F")}function Nl(e){return cd("limitToLast",e),kl._create("limitToLast",e,"L")}class xl extends yl{constructor(e,t,a){super(),this.type=e,this._docOrFields=t,this._inclusive=a}static _create(e,t,a){return new xl(e,t,a)}_apply(e){const t=Dl(e,this.type,this._docOrFields,this._inclusive);return new hd(e.firestore,e.converter,function(e,t){return new ba(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Pl(...e){return xl._create("startAt",e,!0)}function Il(...e){return xl._create("startAfter",e,!1)}class Cl extends yl{constructor(e,t,a){super(),this.type=e,this._docOrFields=t,this._inclusive=a}static _create(e,t,a){return new Cl(e,t,a)}_apply(e){const t=Dl(e,this.type,this._docOrFields,this._inclusive);return new hd(e.firestore,e.converter,function(e,t){return new ba(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Ml(...e){return Cl._create("endBefore",e,!1)}function jl(...e){return Cl._create("endAt",e,!0)}function Dl(e,t,a,s){if(a[0]=Object(o.o)(a[0]),a[0]instanceof ml)return function(e,t,a,s,n){if(!s)throw new E(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const r=[];for(const a of wa(e))if(a.field.isKeyField())r.push(Tt(t,s.key));else{const e=s.data.field(a.field);if(ut(e))throw new E(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=a.field.canonicalString();throw new E(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}r.push(e)}return new Ut(r,n)}(e._query,e.firestore._databaseId,t,a[0]._document,s);{const n=Jd(e.firestore);return function(e,t,a,s,n,r){const o=e.explicitOrderBy;if(n.length>o.length)throw new E(S.INVALID_ARGUMENT,`Too many arguments provided to ${s}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const i=[];for(let r=0;r<n.length;r++){const c=n[r];if(o[r].field.isKeyField()){if("string"!=typeof c)throw new E(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${s}(), but got a ${typeof c}`);if(!Aa(e)&&-1!==c.indexOf("/"))throw new E(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${s}() must be a plain document ID, but '${c}' contains a slash.`);const a=e.path.child(q.fromString(c));if(!z.isDocumentKey(a))throw new E(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${s}() must result in a valid document path, but '${a}' is not because it contains an odd number of segments.`);const n=new z(a);i.push(Tt(t,n))}else{const e=sl(a,s,c);i.push(e)}}return new Ut(i,r)}(e._query,e.firestore._databaseId,n,t,a,s)}}function Ll(e,t,a){if("string"==typeof(a=Object(o.o)(a))){if(""===a)throw new E(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Aa(t)&&-1!==a.indexOf("/"))throw new E(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${a}' contains a '/' character.`);const s=t.path.child(q.fromString(a));if(!z.isDocumentKey(s))throw new E(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Tt(e,new z(s))}if(a instanceof md)return Tt(e,a._key);throw new E(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${od(a)}.`)}function Ol(e,t){if(!Array.isArray(e)||0===e.length)throw new E(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Zl(e,t){const a=function(e,t){for(const a of e)for(const e of a.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==a)throw a===t.op?new E(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${a.toString()}' filters.`)}class _l{convertValue(e,t="none"){switch(yt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const a={};return Ke(e,(e,s)=>{a[e]=this.convertValue(s,t)}),a}convertGeoPoint(e){return new Fd(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const a=ht(e);return null==a?null:this.convertValue(a,t);case"estimate":return this.convertTimestamp(mt(e));default:return null}}convertTimestamp(e){const t=ct(e);return new _(t.seconds,t.nanos)}convertDocumentKey(e,t){const a=q.fromString(e);v(Rn(a));const s=new pt(a.get(1),a.get(3)),n=new z(a.popFirst(5));return s.isEqual(t)||p(`Document ${n} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(e,t,a){let s;return s=e?a&&(a.merge||a.mergeFields)?e.toFirestore(t,a):e.toFirestore(t):t,s}class Fl extends _l{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zd(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new md(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ql{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bl extends ml{constructor(e,t,a,s,n,r){super(e,t,a,s,r),this._firestore=e,this._firestoreImpl=e,this.metadata=n}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const a=this._document.data.field(pl("DocumentSnapshot.get",e));if(null!==a)return this._userDataWriter.convertValue(a,t.serverTimestamps)}}}class Hl extends Bl{data(e={}){return super.data(e)}}class zl{constructor(e,t,a,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ql(s.hasPendingWrites,s.fromCache),this.query=a}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(a=>{e.call(t,new Hl(this._firestore,this._userDataWriter,a.key,a,new ql(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(a=>{const s=new Hl(e._firestore,e._userDataWriter,a.doc.key,a.doc,new ql(e._snapshot.mutatedKeys.has(a.doc.key),e._snapshot.fromCache),e.query.converter);return a.doc,{type:"added",doc:s,oldIndex:-1,newIndex:t++}})}{let a=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const s=new Hl(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ql(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let n=-1,r=-1;return 0!==t.type&&(n=a.indexOf(t.doc.key),a=a.delete(t.doc.key)),1!==t.type&&(a=a.add(t.doc),r=a.indexOf(t.doc.key)),{type:Vl(t.type),doc:s,oldIndex:n,newIndex:r}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Vl(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}function Gl(e,t){return e instanceof Bl&&t instanceof Bl?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof zl&&t instanceof zl&&e._firestore===t._firestore&&vd(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(e){e=id(e,md);const t=id(e.firestore,Td);return Yc(kd(t),e._key).then(a=>iu(t,e,a))}class Wl extends _l{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zd(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new md(this.firestore,null,t)}}function Kl(e){e=id(e,md);const t=id(e.firestore,Td),a=kd(t),s=new Wl(t);return function(e,t){const a=new T;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,a){try{const s=await function(e,t){const a=w(e);return a.persistence.runTransaction("read document","readonly",e=>a.localDocuments.getDocument(e,t))}(e,t);s.isFoundDocument()?a.resolve(s):s.isNoDocument()?a.resolve(null):a.reject(new E(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const s=Di(e,`Failed to get document '${t} from cache`);a.reject(s)}}(await Gc(e),t,a)),a.promise}(a,e._key).then(a=>new Bl(t,s,e._key,a,new ql(null!==a&&a.hasLocalMutations,!0),e.converter))}function Ql(e){e=id(e,md);const t=id(e.firestore,Td);return Yc(kd(t),e._key,{source:"server"}).then(a=>iu(t,e,a))}function Yl(e){e=id(e,hd);const t=id(e.firestore,Td),a=kd(t),s=new Wl(t);return bl(e._query),Xc(a,e._query).then(a=>new zl(t,s,e,a))}function Xl(e){e=id(e,hd);const t=id(e.firestore,Td),a=kd(t),s=new Wl(t);return function(e,t){const a=new T;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,a){try{const s=await Ro(e,t,!0),n=new Xi(t,s.ls),r=n.ca(s.documents),o=n.applyChanges(r,!1);a.resolve(o.snapshot)}catch(e){const s=Di(e,`Failed to execute query '${t} against cache`);a.reject(s)}}(await Gc(e),t,a)),a.promise}(a,e._query).then(a=>new zl(t,s,e,a))}function $l(e){e=id(e,hd);const t=id(e.firestore,Td),a=kd(t),s=new Wl(t);return Xc(a,e._query,{source:"server"}).then(a=>new zl(t,s,e,a))}function eu(e,t,a){e=id(e,md);const s=id(e.firestore,Td),n=Ul(e.converter,t,a);return ou(s,[Wd(Jd(s),"setDoc",e._key,n,null!==e.converter,a).toMutation(e._key,ls.none())])}function tu(e,t,a,...s){e=id(e,md);const n=id(e.firestore,Td),r=Jd(n);let i;return i="string"==typeof(t=Object(o.o)(t))||t instanceof _d?al(r,"updateDoc",e._key,t,a,s):tl(r,"updateDoc",e._key,t),ou(n,[i.toMutation(e._key,ls.exists(!0))])}function au(e){return ou(id(e.firestore,Td),[new Es(e._key,ls.none())])}function su(e,t){const a=id(e.firestore,Td),s=gd(e),n=Ul(e.converter,t);return ou(a,[Wd(Jd(e.firestore),"addDoc",s._key,n,null!==e.converter,{}).toMutation(s._key,ls.exists(!1))]).then(()=>s)}function nu(e,...t){var a,s,n;e=Object(o.o)(e);let r={includeMetadataChanges:!1},i=0;"object"!=typeof t[i]||wd(t[i])||(r=t[i],i++);const c={includeMetadataChanges:r.includeMetadataChanges};if(wd(t[i])){const e=t[i];t[i]=null===(a=e.next)||void 0===a?void 0:a.bind(e),t[i+1]=null===(s=e.error)||void 0===s?void 0:s.bind(e),t[i+2]=null===(n=e.complete)||void 0===n?void 0:n.bind(e)}let d,l,u;if(e instanceof md)l=id(e.firestore,Td),u=ya(e._key.path),d={next:a=>{t[i]&&t[i](iu(l,e,a))},error:t[i+1],complete:t[i+2]};else{const a=id(e,hd);l=id(a.firestore,Td),u=a._query;const s=new Wl(l);d={next:e=>{t[i]&&t[i](new zl(l,s,a,e))},error:t[i+1],complete:t[i+2]},bl(e._query)}return function(e,t,a,s){const n=new Lc(s),r=new Vi(t,n,a);return e.asyncQueue.enqueueAndForget(async()=>Fi(await Qc(e),r)),()=>{n.Na(),e.asyncQueue.enqueueAndForget(async()=>qi(await Qc(e),r))}}(kd(l),u,c,d)}function ru(e,t){return function(e,t){const a=new Lc(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){w(e).q_.add(t),t.next()}(await Qc(e),a)),()=>{a.Na(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){w(e).q_.delete(t)}(await Qc(e),a))}}(kd(e=id(e,Td)),wd(t)?t:{next:t})}function ou(e,t){return function(e,t){const a=new T;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,a){const s=Pc(e);try{const e=await function(e,t){const a=w(e),s=_.now(),n=t.reduce((e,t)=>e.add(t.key),za());let r,o;return a.persistence.runTransaction("Locally write mutations","readwrite",e=>{let i=La(),c=za();return a.ss.getEntries(e,n).next(e=>{i=e,i.forEach((e,t)=>{t.isValidDocument()||(c=c.add(e))})}).next(()=>a.localDocuments.getOverlayedDocuments(e,i)).next(n=>{r=n;const o=[];for(const e of t){const t=bs(e,r.get(e.key).overlayedDocument);null!=t&&o.push(new vs(e.key,t,Zt(t.value.mapValue),ls.exists(!0)))}return a.mutationQueue.addMutationBatch(e,s,o,t)}).next(t=>{o=t;const s=t.applyToLocalDocumentSet(r,c);return a.documentOverlayCache.saveOverlays(e,t.batchId,s)})}).then(()=>({batchId:o.batchId,changes:_a(r)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(e.batchId),function(e,t,a){let s=e.Sa[e.currentUser.toKey()];s||(s=new Ye(L)),s=s.insert(t,a),e.Sa[e.currentUser.toKey()]=s}(s,e.batchId,a),await gc(s,e.changes),await Ai(s.remoteStore)}catch(e){const t=Di(e,"Failed to persist write");a.reject(t)}}(await Wc(e),t,a)),a.promise}(kd(e),t)}function iu(e,t,a){const s=a.docs.get(t._key),n=new Wl(e);return new Bl(e,n,t._key,s,new ql(a.hasPendingWrites,a.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cu={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Jd(e)}set(e,t,a){this._verifyNotCommitted();const s=lu(e,this._firestore),n=Ul(s.converter,t,a),r=Wd(this._dataReader,"WriteBatch.set",s._key,n,null!==s.converter,a);return this._mutations.push(r.toMutation(s._key,ls.none())),this}update(e,t,a,...s){this._verifyNotCommitted();const n=lu(e,this._firestore);let r;return r="string"==typeof(t=Object(o.o)(t))||t instanceof _d?al(this._dataReader,"WriteBatch.update",n._key,t,a,s):tl(this._dataReader,"WriteBatch.update",n._key,t),this._mutations.push(r.toMutation(n._key,ls.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=lu(e,this._firestore);return this._mutations=this._mutations.concat(new Es(t._key,ls.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function lu(e,t){if((e=Object(o.o)(e)).firestore!==t)throw new E(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Jd(e)}get(e){const t=lu(e,this._firestore),a=new Fl(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return y();const s=e[0];if(s.isFoundDocument())return new ml(this._firestore,a,s.key,s,t.converter);if(s.isNoDocument())return new ml(this._firestore,a,t._key,null,t.converter);throw y()})}set(e,t,a){const s=lu(e,this._firestore),n=Ul(s.converter,t,a),r=Wd(this._dataReader,"Transaction.set",s._key,n,null!==s.converter,a);return this._transaction.set(s._key,r),this}update(e,t,a,...s){const n=lu(e,this._firestore);let r;return r="string"==typeof(t=Object(o.o)(t))||t instanceof _d?al(this._dataReader,"Transaction.update",n._key,t,a,s):tl(this._dataReader,"Transaction.update",n._key,t),this._transaction.update(n._key,r),this}delete(e){const t=lu(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=lu(e,this._firestore),a=new Wl(this._firestore);return super.get(e).then(e=>new Bl(this._firestore,a,t._key,e._document,new ql(!1,!1),t.converter))}}function hu(e,t,a){e=id(e,Td);const s=Object.assign(Object.assign({},cu),a);return function(e){if(e.maxAttempts<1)throw new E(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(e,t,a){const s=new T;return e.asyncQueue.enqueueAndForget(async()=>{const n=await Kc(e);new _c(e.asyncQueue,n,a,t,s).run()}),s.promise}(kd(e),a=>t(new uu(e,a)),s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(){return new Kd("deleteField")}function fu(){return new Yd("serverTimestamp")}function pu(...e){return new Xd("arrayUnion",e)}function bu(...e){return new $d("arrayRemove",e)}function gu(e){return new el("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){l=e}(s.SDK_VERSION),Object(s._registerComponent)(new n.a("firestore",(e,{instanceIdentifier:a,options:s})=>{const n=e.getProvider("app").getImmediate(),r=new Td(new x(e.getProvider("auth-internal")),new M(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pt(e.options.projectId,t)}(n,a),n);return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC").setMultipleInstances(!0)),Object(s.registerVersion)(c,"4.4.0",e),Object(s.registerVersion)(c,"4.4.0","esm2017")}()}).call(this,a(8))},function(e,t,a){"use strict";(function(e,s){a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return S})),a.d(t,"c",(function(){return w})),a.d(t,"d",(function(){return r})),a.d(t,"e",(function(){return i})),a.d(t,"f",(function(){return D})),a.d(t,"g",(function(){return N})),a.d(t,"h",(function(){return p})),a.d(t,"i",(function(){return I})),a.d(t,"j",(function(){return x})),a.d(t,"k",(function(){return d})),a.d(t,"l",(function(){return m})),a.d(t,"m",(function(){return h})),a.d(t,"n",(function(){return l})),a.d(t,"o",(function(){return L})),a.d(t,"p",(function(){return b})),a.d(t,"q",(function(){return g})),a.d(t,"r",(function(){return v})),a.d(t,"s",(function(){return y})),a.d(t,"t",(function(){return R})),a.d(t,"u",(function(){return j})),a.d(t,"v",(function(){return A}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(e){const t=[];let a=0;for(let s=0;s<e.length;s++){let n=e.charCodeAt(s);n<128?t[a++]=n:n<2048?(t[a++]=n>>6|192,t[a++]=63&n|128):55296==(64512&n)&&s+1<e.length&&56320==(64512&e.charCodeAt(s+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++s)),t[a++]=n>>18|240,t[a++]=n>>12&63|128,t[a++]=n>>6&63|128,t[a++]=63&n|128):(t[a++]=n>>12|224,t[a++]=n>>6&63|128,t[a++]=63&n|128)}return t},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let t=0;t<e.length;t+=3){const n=e[t],r=t+1<e.length,o=r?e[t+1]:0,i=t+2<e.length,c=i?e[t+2]:0,d=n>>2,l=(3&n)<<4|o>>4;let u=(15&o)<<2|c>>6,h=63&c;i||(h=64,r||(u=64)),s.push(a[d],a[l],a[u],a[h])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let a=0,s=0;for(;a<e.length;){const n=e[a++];if(n<128)t[s++]=String.fromCharCode(n);else if(n>191&&n<224){const r=e[a++];t[s++]=String.fromCharCode((31&n)<<6|63&r)}else if(n>239&&n<365){const r=((7&n)<<18|(63&e[a++])<<12|(63&e[a++])<<6|63&e[a++])-65536;t[s++]=String.fromCharCode(55296+(r>>10)),t[s++]=String.fromCharCode(56320+(1023&r))}else{const r=e[a++],o=e[a++];t[s++]=String.fromCharCode((15&n)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const a=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let t=0;t<e.length;){const n=a[e.charAt(t++)],r=t<e.length?a[e.charAt(t)]:0;++t;const i=t<e.length?a[e.charAt(t)]:64;++t;const c=t<e.length?a[e.charAt(t)]:64;if(++t,null==n||null==r||null==i||null==c)throw new o;const d=n<<2|r>>4;if(s.push(d),64!==i){const e=r<<4&240|i>>2;if(s.push(e),64!==c){const e=i<<6&192|c;s.push(e)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i=function(e){return function(e){const t=n(e);return r.encodeByteArray(t,!0)}(e).replace(/\./g,"")},c=function(e){try{return r.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function d(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const a in t)t.hasOwnProperty(a)&&"__proto__"!==a&&(e[a]=d(e[a],t[a]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=()=>{try{return l().__FIREBASE_DEFAULTS__||(()=>{if(void 0===s||void 0===s.env)return;const e=s.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&c(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},h=e=>{const t=(e=>{var t,a;return null===(a=null===(t=u())||void 0===t?void 0:t.emulatorHosts)||void 0===a?void 0:a[e]})(e);if(!t)return;const a=t.lastIndexOf(":");if(a<=0||a+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(a+1),10);return"["===t[0]?[t.substring(1,a-1),s]:[t.substring(0,a),s]},m=()=>{var e;return null===(e=u())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,a))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a=t||"demo-project",s=e.iat||0,n=e.sub||e.user_id;if(!n)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:"https://securetoken.google.com/"+a,aud:a,iat:s,exp:s+3600,auth_time:s,sub:n,user_id:n,firebase:{sign_in_provider:"custom",identities:{}}},e);return[i(JSON.stringify({alg:"none",type:"JWT"})),i(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function g(){return"object"==typeof self&&self.self===self}function y(){return!function(){var t;const a=null===(t=u())||void 0===t?void 0:t.forceEnvironment;if("node"===a)return!0;if("browser"===a)return!1;try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v(){try{return"object"==typeof indexedDB}catch(e){return!1}}function A(){return new Promise((e,t)=>{try{let a=!0;const s="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(s);n.onsuccess=()=>{n.result.close(),a||self.indexedDB.deleteDatabase(s),e(!0)},n.onupgradeneeded=()=>{a=!1},n.onerror=()=>{var e;t((null===(e=n.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class w extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name="FirebaseError",Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){const a=t[0]||{},s=`${this.service}/${e}`,n=this.errors[e],r=n?function(e,t){return e.replace(E,(e,a)=>{const s=t[a];return null!=s?String(s):`<${a}?>`})}(n,a):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new w(s,o,a)}}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){return JSON.parse(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const k=function(e){let t={},a={},s={},n="";try{const r=e.split(".");t=T(c(r[0])||""),a=T(c(r[1])||""),n=r[2],s=a.d||{},delete a.d}catch(e){}return{header:t,claims:a,data:s,signature:n}},R=function(e){const t=k(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function x(e,t){if(e===t)return!0;const a=Object.keys(e),s=Object.keys(t);for(const n of a){if(!s.includes(n))return!1;const a=e[n],r=t[n];if(P(a)&&P(r)){if(!x(a,r))return!1}else if(a!==r)return!1}for(const e of s)if(!a.includes(e))return!1;return!0}function P(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){const a=new C(e,t);return a.subscribe.bind(a)}class C{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,a){let s;if(void 0===e&&void 0===t&&void 0===a)throw new Error("Missing Observer.");s=function(e,t){if("object"!=typeof e||null===e)return!1;for(const a of t)if(a in e&&"function"==typeof e[a])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:a},void 0===s.next&&(s.next=M),void 0===s.error&&(s.error=M),void 0===s.complete&&(s.complete=M);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(e){}}),this.observers.push(s),n}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const j=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})};function D(e,t=1e3,a=2){const s=t*Math.pow(a,e),n=Math.round(.5*s*(Math.random()-.5)*2);return Math.min(144e5,s+n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){return e&&e._delegate?e._delegate:e}}).call(this,a(7),a(8))},function(e,t){const a={OFF:"#111",WHITE:"#f0f0f0",DARKRED:"#5A354B",RED:"#f971c3",BRIGHTRED:"#ffd3ee",DARKBLUE:"#2B4D4C",BLUE:"#6ff9ea",BRIGHTBLUE:"#d7fdf9",YELLOW:"#fff568",UI_ACCENT:"#08bfa2",UI_ACCENT2:"#f01978"};a.schemes={default:{name:"Super Medium",off:"#111",primary:a.RED,primarybright:a.BRIGHTRED,secondary:a.BLUE,secondarybright:a.BRIGHTBLUE,tertiary:a.YELLOW},blue:{name:"Star Warrior",off:"#111",primary:"#1e4482",primarybright:"#0B4BB3",secondary:"#c27727",secondarybright:"#FFD840",tertiary:"#d7fdf9"},purple:{name:"Galactic Royal",off:"#111",primary:"#6A39B3",primarybright:"#B685FF",secondary:"#FAF239",secondarybright:"#FFFC9E",tertiary:"#50FFF2"},green:{name:"Space Joker",off:"#111",primary:"#779E37",primarybright:"#C0FF59",secondary:"#6A39B3",secondarybright:"#B685FF",tertiary:"#FAFAFA"},yellow:{name:"Solar Flare",off:"#111",primary:"#C2C04C",primarybright:"#FAF761",secondary:"#E03A3E",secondarybright:"#FA7578",tertiary:"#278ECC"},red:{name:"Trail Blazer",off:"#111",primary:"#E03A3E",primarybright:"#FA7578",secondary:"#DADADA",secondarybright:"#EFEFEF",tertiary:"#666"},rgb:{name:"Mint Choco",off:"#111",primary:"#34eb89",primarYBRIGht:"#40fb95",secondary:"#34ebd8",secondarybright:"#40fbeA",tertiary:"#eb3434"},cheetah:{name:"Cheetah SoL",off:"#111",primary:"#c27727",primarYBright:"#e68319",secondary:"#635c54",secondarybright:"#8a857f",tertiary:"#ebebeb"},black:{name:"Ash Nova",off:"#111",primary:"#555",primarybright:"#808080",secondary:"#FFF",secondarybright:"#FFF",tertiary:"#B8B8B8"}},a.options=Object.keys(a.schemes),"undefined"==typeof localStorage?a.initial="default":a.initial=a.schemes[localStorage.getItem("colorScheme")||"default"],e.exports=a},function(e,t,a){"use strict";a.r(t),a.d(t,"FirebaseError",(function(){return r.c})),a.d(t,"SDK_VERSION",(function(){return _})),a.d(t,"_DEFAULT_ENTRY_NAME",(function(){return k})),a.d(t,"_addComponent",(function(){return P})),a.d(t,"_addOrOverwriteComponent",(function(){return I})),a.d(t,"_apps",(function(){return N})),a.d(t,"_clearComponents",(function(){return D})),a.d(t,"_components",(function(){return x})),a.d(t,"_getProvider",(function(){return M})),a.d(t,"_registerComponent",(function(){return C})),a.d(t,"_removeServiceInstance",(function(){return j})),a.d(t,"deleteApp",(function(){return B})),a.d(t,"getApp",(function(){return F})),a.d(t,"getApps",(function(){return q})),a.d(t,"initializeApp",(function(){return U})),a.d(t,"onLog",(function(){return z})),a.d(t,"registerVersion",(function(){return H})),a.d(t,"setLogLevel",(function(){return V}));var s=a(6),n=a(5),r=a(1);let o,i;const c=new WeakMap,d=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakMap;let m={get(e,t,a){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return b(e[t])},set:(e,t,a)=>(e[t]=a,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),b(c.get(this))}:function(...t){return b(e.apply(g(this),t))}:function(t,...a){const s=e.call(g(this),t,...a);return l.set(s,t.sort?t.sort():[t]),b(s)}}function p(e){return"function"==typeof e?f(e):(e instanceof IDBTransaction&&function(e){if(d.has(e))return;const t=new Promise((t,a)=>{const s=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",r),e.removeEventListener("abort",r)},n=()=>{t(),s()},r=()=>{a(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",n),e.addEventListener("error",r),e.addEventListener("abort",r)});d.set(e,t)}(e),t=e,(o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,m):e);var t}function b(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,a)=>{const s=()=>{e.removeEventListener("success",n),e.removeEventListener("error",r)},n=()=>{t(b(e.result)),s()},r=()=>{a(e.error),s()};e.addEventListener("success",n),e.addEventListener("error",r)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),h.set(t,e),t}(e);if(u.has(e))return u.get(e);const t=p(e);return t!==e&&(u.set(e,t),h.set(t,e)),t}const g=e=>h.get(e);const y=["get","getKey","getAll","getAllKeys","count"],v=["put","add","delete","clear"],A=new Map;function w(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(A.get(t))return A.get(t);const a=t.replace(/FromIndex$/,""),s=t!==a,n=v.includes(a);if(!(a in(s?IDBIndex:IDBObjectStore).prototype)||!n&&!y.includes(a))return;const r=async function(e,...t){const r=this.transaction(e,n?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(t.shift())),(await Promise.all([o[a](...t),n&&r.done]))[0]};return A.set(t,r),r}m=(e=>({...e,get:(t,a,s)=>w(t,a)||e.get(t,a,s),has:(t,a)=>!!w(t,a)||e.has(t,a)}))(m);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const E="@firebase/app",T=new n.b("@firebase/app"),k="[DEFAULT]",R={[E]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},N=new Map,x=new Map;function P(e,t){try{e.container.addComponent(t)}catch(a){T.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,a)}}function I(e,t){e.container.addOrOverwriteComponent(t)}function C(e){const t=e.name;if(x.has(t))return T.debug(`There were multiple attempts to register component ${t}.`),!1;x.set(t,e);for(const t of N.values())P(t,e);return!0}function M(e,t){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(t)}function j(e,t,a=k){M(e,t).clearInstance(a)}function D(){x.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},O=new r.b("app","Firebase",L);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new s.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw O.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _="10.7.1";function U(e,t={}){let a=e;if("object"!=typeof t){t={name:t}}const n=Object.assign({name:k,automaticDataCollectionEnabled:!1},t),o=n.name;if("string"!=typeof o||!o)throw O.create("bad-app-name",{appName:String(o)});if(a||(a=Object(r.l)()),!a)throw O.create("no-options");const i=N.get(o);if(i){if(Object(r.j)(a,i.options)&&Object(r.j)(n,i.config))return i;throw O.create("duplicate-app",{appName:o})}const c=new s.b(o);for(const e of x.values())c.addComponent(e);const d=new Z(a,n,c);return N.set(o,d),d}function F(e=k){const t=N.get(e);if(!t&&e===k&&Object(r.l)())return U();if(!t)throw O.create("no-app",{appName:e});return t}function q(){return Array.from(N.values())}async function B(e){const t=e.name;N.has(t)&&(N.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function H(e,t,a){var n;let r=null!==(n=R[e])&&void 0!==n?n:e;a&&(r+="-"+a);const o=r.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void T.warn(e.join(" "))}C(new s.a(r+"-version",()=>({library:r,version:t}),"VERSION"))}function z(e,t){if(null!==e&&"function"!=typeof e)throw O.create("invalid-log-argument");Object(n.d)(e,t)}function V(e){Object(n.c)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="firebase-heartbeat-store";let J=null;function W(){return J||(J=function(e,t,{blocked:a,upgrade:s,blocking:n,terminated:r}={}){const o=indexedDB.open(e,t),i=b(o);return s&&o.addEventListener("upgradeneeded",e=>{s(b(o.result),e.oldVersion,e.newVersion,b(o.transaction),e)}),a&&o.addEventListener("blocked",e=>a(e.oldVersion,e.newVersion,e)),i.then(e=>{r&&e.addEventListener("close",()=>r()),n&&e.addEventListener("versionchange",e=>n(e.oldVersion,e.newVersion,e))}).catch(()=>{}),i}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(G)}}}).catch(e=>{throw O.create("idb-open",{originalErrorMessage:e.message})})),J}async function K(e,t){try{const a=(await W()).transaction(G,"readwrite"),s=a.objectStore(G);await s.put(t,Q(e)),await a.done}catch(e){if(e instanceof r.c)T.warn(e.message);else{const t=O.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});T.warn(t.message)}}}function Q(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=X();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==s&&!this._heartbeatsCache.heartbeats.some(e=>e.date===s))return this._heartbeatsCache.heartbeats.push({date:s,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=X(),{heartbeatsToSend:a,unsentEntries:s}=function(e,t=1024){const a=[];let s=e.slice();for(const n of e){const e=a.find(e=>e.agent===n.agent);if(e){if(e.dates.push(n.date),ee(a)>t){e.dates.pop();break}}else if(a.push({agent:n.agent,dates:[n.date]}),ee(a)>t){a.pop();break}s=s.slice(1)}return{heartbeatsToSend:a,unsentEntries:s}}(this._heartbeatsCache.heartbeats),n=Object(r.e)(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function X(){return(new Date).toISOString().substring(0,10)}class ${constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(r.r)()&&Object(r.v)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=await W();return await t.transaction(G).objectStore(G).get(Q(e))}catch(e){if(e instanceof r.c)T.warn(e.message);else{const t=O.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});T.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return K(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return K(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}}}function ee(e){return Object(r.e)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;te="",C(new s.a("platform-logger",e=>new S(e),"PRIVATE")),C(new s.a("heartbeat",e=>new Y(e),"PRIVATE")),H(E,"0.9.25",te),H(E,"0.9.25","esm2017"),H("fire-js","")},function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return ds})),a.d(t,"b",(function(){return us})),a.d(t,"c",(function(){return ls})),a.d(t,"d",(function(){return bs})),a.d(t,"e",(function(){return ps})),a.d(t,"f",(function(){return hs})),a.d(t,"g",(function(){return ms})),a.d(t,"h",(function(){return fs})),a.d(t,"i",(function(){return is})),a.d(t,"j",(function(){return cs}));var s,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},r={},o=o||{},i=n||self;function c(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function d(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var l="closure_uid_"+(1e9*Math.random()>>>0),u=0;function h(e,t,a){return e.call.apply(e.bind,arguments)}function m(e,t,a){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,s),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function f(e,t,a){return(f=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:m).apply(null,arguments)}function p(e,t){var a=Array.prototype.slice.call(arguments,1);return function(){var t=a.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function b(e,t){function a(){}a.prototype=t.prototype,e.$=t.prototype,e.prototype=new a,e.prototype.constructor=e,e.ac=function(e,a,s){for(var n=Array(arguments.length-2),r=2;r<arguments.length;r++)n[r-2]=arguments[r];return t.prototype[a].apply(e,n)}}function g(){this.s=this.s,this.o=this.o}g.prototype.s=!1,g.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,l)&&e[l]||(e[l]=++u))},g.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const y=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let a=0;a<e.length;a++)if(a in e&&e[a]===t)return a;return-1};function v(e){const t=e.length;if(0<t){const a=Array(t);for(let s=0;s<t;s++)a[s]=e[s];return a}return[]}function A(e,t){for(let t=1;t<arguments.length;t++){const a=arguments[t];if(c(a)){const t=e.length||0,s=a.length||0;e.length=t+s;for(let n=0;n<s;n++)e[t+n]=a[n]}else e.push(a)}}function w(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(e){}return e}();function E(e){return/^[\s\xa0]*$/.test(e)}function T(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function k(e){return-1!=T().indexOf(e)}function R(e){return R[" "](e),e}R[" "]=function(){};var N,x,P,I=k("Opera"),C=k("Trident")||k("MSIE"),M=k("Edge"),j=M||C,D=k("Gecko")&&!(-1!=T().toLowerCase().indexOf("webkit")&&!k("Edge"))&&!(k("Trident")||k("MSIE"))&&!k("Edge"),L=-1!=T().toLowerCase().indexOf("webkit")&&!k("Edge");function O(){var e=i.document;return e?e.documentMode:void 0}e:{var Z="",_=(x=T(),D?/rv:([^\);]+)(\)|;)/.exec(x):M?/Edge\/([\d\.]+)/.exec(x):C?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(x):L?/WebKit\/(\S+)/.exec(x):I?/(?:Version)[ \/]?(\S+)/.exec(x):void 0);if(_&&(Z=_?_[1]:""),C){var U=O();if(null!=U&&U>parseFloat(Z)){N=String(U);break e}}N=Z}if(i.document&&C){var F=O();P=F||(parseInt(N,10)||void 0)}else P=void 0;var q=P;function B(e,t){if(w.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var a=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(D){e:{try{R(t.nodeName);var n=!0;break e}catch(e){}n=!1}n||(t=null)}}else"mouseover"==a?t=e.fromElement:"mouseout"==a&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:H[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&B.$.h.call(this)}}b(B,w);var H={2:"touch",3:"pen",4:"mouse"};B.prototype.h=function(){B.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),V=0;function G(e,t,a,s,n){this.listener=e,this.proxy=null,this.src=t,this.type=a,this.capture=!!s,this.la=n,this.key=++V,this.fa=this.ia=!1}function J(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function W(e,t,a){for(const s in e)t.call(a,e[s],s,e)}function K(e){const t={};for(const a in e)t[a]=e[a];return t}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y(e,t){let a,s;for(let t=1;t<arguments.length;t++){for(a in s=arguments[t],s)e[a]=s[a];for(let t=0;t<Q.length;t++)a=Q[t],Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}}function X(e){this.src=e,this.g={},this.h=0}function $(e,t){var a=t.type;if(a in e.g){var s,n=e.g[a],r=y(n,t);(s=0<=r)&&Array.prototype.splice.call(n,r,1),s&&(J(t),0==e.g[a].length&&(delete e.g[a],e.h--))}}function ee(e,t,a,s){for(var n=0;n<e.length;++n){var r=e[n];if(!r.fa&&r.listener==t&&r.capture==!!a&&r.la==s)return n}return-1}X.prototype.add=function(e,t,a,s,n){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=ee(e,t,s,n);return-1<o?(t=e[o],a||(t.ia=!1)):((t=new G(t,this.src,r,!!s,n)).ia=a,e.push(t)),t};var te="closure_lm_"+(1e6*Math.random()|0),ae={};function se(e,t,a,s,n){if(s&&s.once)return function e(t,a,s,n,r){if(Array.isArray(a)){for(var o=0;o<a.length;o++)e(t,a[o],s,n,r);return null}return s=le(s),t&&t[z]?t.P(a,s,d(n)?!!n.capture:!!n,r):ne(t,a,s,!0,n,r)}(e,t,a,s,n);if(Array.isArray(t)){for(var r=0;r<t.length;r++)se(e,t[r],a,s,n);return null}return a=le(a),e&&e[z]?e.O(t,a,d(s)?!!s.capture:!!s,n):ne(e,t,a,!1,s,n)}function ne(e,t,a,s,n,r){if(!t)throw Error("Invalid event type");var o=d(n)?!!n.capture:!!n,i=ce(e);if(i||(e[te]=i=new X(e)),(a=i.add(t,a,s,o,r)).proxy)return a;if(s=function(){const e=ie;return function t(a){return e.call(t.src,t.listener,a)}}(),a.proxy=s,s.src=e,s.listener=a,e.addEventListener)S||(n=o),void 0===n&&(n=!1),e.addEventListener(t.toString(),s,n);else if(e.attachEvent)e.attachEvent(oe(t.toString()),s);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(s)}return a}function re(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[z])$(t.i,e);else{var a=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(a,s,e.capture):t.detachEvent?t.detachEvent(oe(a),s):t.addListener&&t.removeListener&&t.removeListener(s),(a=ce(t))?($(a,e),0==a.h&&(a.src=null,t[te]=null)):J(e)}}}function oe(e){return e in ae?ae[e]:ae[e]="on"+e}function ie(e,t){if(e.fa)e=!0;else{t=new B(t,this);var a=e.listener,s=e.la||e.src;e.ia&&re(e),e=a.call(s,t)}return e}function ce(e){return(e=e[te])instanceof X?e:null}var de="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(e){return"function"==typeof e?e:(e[de]||(e[de]=function(t){return e.handleEvent(t)}),e[de])}function ue(){g.call(this),this.i=new X(this),this.S=this,this.J=null}function he(e,t){var a,s=e.J;if(s)for(a=[];s;s=s.J)a.push(s);if(e=e.S,s=t.type||t,"string"==typeof t)t=new w(t,e);else if(t instanceof w)t.target=t.target||e;else{var n=t;Y(t=new w(s,e),n)}if(n=!0,a)for(var r=a.length-1;0<=r;r--){var o=t.g=a[r];n=me(o,s,!0,t)&&n}if(n=me(o=t.g=e,s,!0,t)&&n,n=me(o,s,!1,t)&&n,a)for(r=0;r<a.length;r++)n=me(o=t.g=a[r],s,!1,t)&&n}function me(e,t,a,s){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var n=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==a){var i=o.listener,c=o.la||o.src;o.ia&&$(e.i,o),n=!1!==i.call(c,s)&&n}}return n&&!s.defaultPrevented}b(ue,g),ue.prototype[z]=!0,ue.prototype.removeEventListener=function(e,t,a,s){!function e(t,a,s,n,r){if(Array.isArray(a))for(var o=0;o<a.length;o++)e(t,a[o],s,n,r);else n=d(n)?!!n.capture:!!n,s=le(s),t&&t[z]?(t=t.i,(a=String(a).toString())in t.g&&(-1<(s=ee(o=t.g[a],s,n,r))&&(J(o[s]),Array.prototype.splice.call(o,s,1),0==o.length&&(delete t.g[a],t.h--)))):t&&(t=ce(t))&&(a=t.g[a.toString()],t=-1,a&&(t=ee(a,s,n,r)),(s=-1<t?a[t]:null)&&re(s))}(this,e,t,a,s)},ue.prototype.N=function(){if(ue.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var a=t.g[e],s=0;s<a.length;s++)J(a[s]);delete t.g[e],t.h--}}this.J=null},ue.prototype.O=function(e,t,a,s){return this.i.add(String(e),t,!1,a,s)},ue.prototype.P=function(e,t,a,s){return this.i.add(String(e),t,!0,a,s)};var fe=i.JSON.stringify;function pe(){var e=Se;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var be=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new ge,e=>e.reset());class ge{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ye(e){var t=1;e=e.split(":");const a=[];for(;0<t&&e.length;)a.push(e.shift()),t--;return e.length&&a.push(e.join(":")),a}function ve(e){i.setTimeout(()=>{throw e},0)}let Ae,we=!1,Se=new class{constructor(){this.h=this.g=null}add(e,t){const a=be.get();a.set(e,t),this.h?this.h.next=a:this.g=a,this.h=a}},Ee=()=>{const e=i.Promise.resolve(void 0);Ae=()=>{e.then(Te)}};var Te=()=>{for(var e;e=pe();){try{e.h.call(e.g)}catch(e){ve(e)}var t=be;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}we=!1};function ke(e,t){ue.call(this),this.h=e||1,this.g=t||i,this.j=f(this.qb,this),this.l=Date.now()}function Re(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Ne(e,t,a){if("function"==typeof e)a&&(e=f(e,a));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=f(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}b(ke,ue),(s=ke.prototype).ga=!1,s.T=null,s.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),he(this,"tick"),this.ga&&(Re(this),this.start()))}},s.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.N=function(){ke.$.N.call(this),Re(this),delete this.g};class xe extends g{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=Ne(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);const a=t.h;t.h=null,t.m.apply(null,a)}(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(e){g.call(this),this.h=e,this.g={}}b(Pe,g);var Ie=[];function Ce(e,t,a,s){Array.isArray(a)||(a&&(Ie[0]=a.toString()),a=Ie);for(var n=0;n<a.length;n++){var r=se(t,a[n],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Me(e){W(e.g,(function(e,t){this.g.hasOwnProperty(t)&&re(e)}),e),e.g={}}function je(){this.g=!0}function De(e,t,a,s){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var a=JSON.parse(t);if(a)for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var s=a[e];if(!(2>s.length)){var n=s[1];if(Array.isArray(n)&&!(1>n.length)){var r=n[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<n.length;o++)n[o]=""}}}return fe(a)}catch(e){return t}}(e,a)+(s?" "+s:"")}))}Pe.prototype.N=function(){Pe.$.N.call(this),Me(this)},Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},je.prototype.Ea=function(){this.g=!1},je.prototype.info=function(){};var Le={},Oe=null;function Ze(){return Oe=Oe||new ue}function _e(e){w.call(this,Le.Ta,e)}function Ue(e){const t=Ze();he(t,new _e(t))}function Fe(e,t){w.call(this,Le.STAT_EVENT,e),this.stat=t}function qe(e){const t=Ze();he(t,new Fe(t,e))}function Be(e,t){w.call(this,Le.Ua,e),this.size=t}function He(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}Le.Ta="serverreachability",b(_e,w),Le.STAT_EVENT="statevent",b(Fe,w),Le.Ua="timingevent",b(Be,w);var ze={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ve={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ge(){}function Je(e){return e.h||(e.h=e.i())}function We(){}Ge.prototype.h=null;var Ke,Qe={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ye(){w.call(this,"d")}function Xe(){w.call(this,"c")}function $e(){}function et(e,t,a,s){this.l=e,this.j=t,this.m=a,this.W=s||1,this.U=new Pe(this),this.P=at,e=j?125:void 0,this.V=new ke(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new tt}function tt(){this.i=null,this.g="",this.h=!1}b(Ye,w),b(Xe,w),b($e,Ge),$e.prototype.g=function(){return new XMLHttpRequest},$e.prototype.i=function(){return{}},Ke=new $e;var at=45e3,st={},nt={};function rt(e,t,a){e.L=1,e.A=Tt(vt(t)),e.u=a,e.S=!0,ot(e,null)}function ot(e,t){e.G=Date.now(),lt(e),e.B=vt(e.A);var a=e.B,s=e.W;Array.isArray(s)||(s=[String(s)]),Zt(a.i,"t",s),e.o=0,a=e.l.J,e.h=new tt,e.g=La(e.l,a?t:null,!e.u),0<e.O&&(e.M=new xe(f(e.Pa,e,e.g),e.O)),Ce(e.U,e.g,"readystatechange",e.nb),t=e.I?K(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Ue(),function(e,t,a,s,n,r){e.info((function(){if(e.g)if(r)for(var o="",i=r.split("&"),c=0;c<i.length;c++){var d=i[c].split("=");if(1<d.length){var l=d[0];d=d[1];var u=l.split("_");o=2<=u.length&&"type"==u[1]?o+(l+"=")+d+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+n+"]: "+t+"\n"+a+"\n"+o}))}(e.j,e.v,e.B,e.m,e.W,e.u)}function it(e){return!!e.g&&("GET"==e.v&&2!=e.L&&e.l.Ha)}function ct(e,t,a){let s,n=!0;for(;!e.J&&e.o<a.length;){if(s=dt(e,a),s==nt){4==t&&(e.s=4,qe(14),n=!1),De(e.j,e.m,null,"[Incomplete Response]");break}if(s==st){e.s=4,qe(15),De(e.j,e.m,a,"[Invalid Chunk]"),n=!1;break}De(e.j,e.m,s,null),pt(e,s)}it(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=a.length||e.h.h||(e.s=1,qe(16),n=!1),e.i=e.i&&n,n?0<a.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+a.length),Na(t),t.M=!0,qe(11))):(De(e.j,e.m,a,"[Invalid Chunked Response]"),ft(e),mt(e))}function dt(e,t){var a=e.o,s=t.indexOf("\n",a);return-1==s?nt:(a=Number(t.substring(a,s)),isNaN(a)?st:(s+=1)+a>t.length?nt:(t=t.slice(s,s+a),e.o=s+a,t))}function lt(e){e.Y=Date.now()+e.P,ut(e,e.P)}function ut(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=He(f(e.lb,e),t)}function ht(e){e.C&&(i.clearTimeout(e.C),e.C=null)}function mt(e){0==e.l.H||e.J||Ia(e.l,e)}function ft(e){ht(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Re(e.V),Me(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function pt(e,t){try{var a=e.l;if(0!=a.H&&(a.g==e||Ht(a.i,e)))if(!e.K&&Ht(a.i,e)&&3==a.H){try{var s=a.Ja.g.parse(t)}catch(e){s=null}if(Array.isArray(s)&&3==s.length){var n=s;if(0==n[0]){e:if(!a.u){if(a.g){if(!(a.g.G+3e3<e.G))break e;Pa(a),va(a)}Ra(a),qe(18)}}else a.Fa=n[1],0<a.Fa-a.V&&37500>n[2]&&a.G&&0==a.A&&!a.v&&(a.v=He(f(a.ib,a),6e3));if(1>=Bt(a.i)&&a.oa){try{a.oa()}catch(e){}a.oa=void 0}}else Ma(a,11)}else if((e.K||a.g==e)&&Pa(a),!E(t))for(n=a.Ja.g.parse(t),t=0;t<n.length;t++){let d=n[t];if(a.V=d[0],d=d[1],2==a.H)if("c"==d[0]){a.K=d[1],a.pa=d[2];const t=d[3];null!=t&&(a.ra=t,a.l.info("VER="+a.ra));const n=d[4];null!=n&&(a.Ga=n,a.l.info("SVER="+a.Ga));const l=d[5];null!=l&&"number"==typeof l&&0<l&&(s=1.5*l,a.L=s,a.l.info("backChannelRequestTimeoutMs_="+s)),s=a;const u=e.g;if(u){const e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=s.i;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(zt(r,r.h),r.h=null))}if(s.F){const e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(s.Da=e,Et(s.I,s.F,e))}}a.H=3,a.h&&a.h.Ba(),a.ca&&(a.S=Date.now()-e.G,a.l.info("Handshake RTT: "+a.S+"ms"));var o=e;if((s=a).wa=Da(s,s.J?s.pa:null,s.Y),o.K){Vt(s.i,o);var i=o,c=s.L;c&&i.setTimeout(c),i.C&&(ht(i),lt(i)),s.g=o}else ka(s);0<a.j.length&&wa(a)}else"stop"!=d[0]&&"close"!=d[0]||Ma(a,7);else 3==a.H&&("stop"==d[0]||"close"==d[0]?"stop"==d[0]?Ma(a,7):ya(a):"noop"!=d[0]&&a.h&&a.h.Aa(d),a.A=0)}Ue()}catch(e){}}function bt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(c(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var a=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(c(e)||"string"==typeof e){var t=[];e=e.length;for(var a=0;a<e;a++)t.push(a);return t}t=[],a=0;for(const s in e)t[a++]=s;return t}}}(e),s=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(c(e)){for(var t=[],a=e.length,s=0;s<a;s++)t.push(e[s]);return t}for(s in t=[],a=0,e)t[a++]=e[s];return t}(e),n=s.length,r=0;r<n;r++)t.call(void 0,s[r],a&&a[r],e)}(s=et.prototype).setTimeout=function(e){this.P=e},s.nb=function(e){e=e.target;const t=this.M;t&&3==ha(e)?t.l():this.Pa(e)},s.Pa=function(e){try{if(e==this.g)e:{const u=ha(this.g);var t=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||j||this.g&&(this.h.h||this.g.ja()||ma(this.g)))){this.J||4!=u||7==t||Ue(),ht(this);var a=this.g.da();this.ca=a;t:if(it(this)){var s=ma(this.g);e="";var n=s.length,r=4==ha(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ft(this),mt(this);var o="";break t}this.h.i=new i.TextDecoder}for(t=0;t<n;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==n-1});s.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==a,function(e,t,a,s,n,r,o){e.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+n+"]: "+t+"\n"+a+"\n"+r+" "+o}))}(this.j,this.v,this.B,this.m,this.W,u,a),this.i){if(this.aa&&!this.K){t:{if(this.g){var c,d=this.g;if((c=d.g?d.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(c)){var l=c;break t}}l=null}if(!(a=l)){this.i=!1,this.s=3,qe(12),ft(this),mt(this);break e}De(this.j,this.m,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pt(this,a)}this.S?(ct(this,u,o),j&&this.i&&3==u&&(Ce(this.U,this.V,"tick",this.mb),this.V.start())):(De(this.j,this.m,o,null),pt(this,o)),4==u&&ft(this),this.i&&!this.J&&(4==u?Ia(this.l,this):(this.i=!1,lt(this)))}else(function(e){const t={};e=(e.g&&2<=ha(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<e.length;s++){if(E(e[s]))continue;var a=ye(e[s]);const n=a[0];if("string"!=typeof(a=a[1]))continue;a=a.trim();const r=t[n]||[];t[n]=r,r.push(a)}!function(e,t){for(const a in e)t.call(void 0,e[a],a,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==a&&0<o.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),ft(this),mt(this)}}}catch(e){}},s.mb=function(){if(this.g){var e=ha(this.g),t=this.g.ja();this.o<t.length&&(ht(this),ct(this,e,t),this.i&&4!=e&&lt(this))}},s.cancel=function(){this.J=!0,ft(this)},s.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.B),2!=this.L&&(Ue(),qe(17)),ft(this),this.s=2,mt(this)):ut(this,this.Y-e)};var gt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof yt){this.h=e.h,At(this,e.j),this.s=e.s,this.g=e.g,wt(this,e.m),this.l=e.l;var t=e.i,a=new jt;a.i=t.i,t.g&&(a.g=new Map(t.g),a.h=t.h),St(this,a),this.o=e.o}else e&&(t=String(e).match(gt))?(this.h=!1,At(this,t[1]||"",!0),this.s=kt(t[2]||""),this.g=kt(t[3]||"",!0),wt(this,t[4]),this.l=kt(t[5]||"",!0),St(this,t[6]||"",!0),this.o=kt(t[7]||"")):(this.h=!1,this.i=new jt(null,this.h))}function vt(e){return new yt(e)}function At(e,t,a){e.j=a?kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function wt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function St(e,t,a){t instanceof jt?(e.i=t,function(e,t){t&&!e.j&&(Dt(e),e.i=null,e.g.forEach((function(e,t){var a=t.toLowerCase();t!=a&&(Lt(this,t),Zt(this,a,e))}),e)),e.j=t}(e.i,e.h)):(a||(t=Rt(t,Ct)),e.i=new jt(t,e.h))}function Et(e,t,a){e.i.set(t,a)}function Tt(e){return Et(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Rt(e,t,a){return"string"==typeof e?(e=encodeURI(e).replace(t,Nt),a&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Nt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}yt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Rt(t,xt,!0),":");var a=this.g;return(a||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Rt(t,xt,!0),"@"),e.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(a=this.m)&&e.push(":",String(a))),(a=this.l)&&(this.g&&"/"!=a.charAt(0)&&e.push("/"),e.push(Rt(a,"/"==a.charAt(0)?It:Pt,!0))),(a=this.i.toString())&&e.push("?",a),(a=this.o)&&e.push("#",Rt(a,Mt)),e.join("")};var xt=/[#\/\?@]/g,Pt=/[#\?:]/g,It=/[#\?]/g,Ct=/[#\?@]/g,Mt=/#/g;function jt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Dt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var a=0;a<e.length;a++){var s=e[a].indexOf("="),n=null;if(0<=s){var r=e[a].substring(0,s);n=e[a].substring(s+1)}else r=e[a];t(r,n?decodeURIComponent(n.replace(/\+/g," ")):"")}}}(e.i,(function(t,a){e.add(decodeURIComponent(t.replace(/\+/g," ")),a)})))}function Lt(e,t){Dt(e),t=_t(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ot(e,t){return Dt(e),t=_t(e,t),e.g.has(t)}function Zt(e,t,a){Lt(e,t),0<a.length&&(e.i=null,e.g.set(_t(e,t),v(a)),e.h+=a.length)}function _t(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(s=jt.prototype).add=function(e,t){Dt(this),this.i=null,e=_t(this,e);var a=this.g.get(e);return a||this.g.set(e,a=[]),a.push(t),this.h+=1,this},s.forEach=function(e,t){Dt(this),this.g.forEach((function(a,s){a.forEach((function(a){e.call(t,a,s,this)}),this)}),this)},s.ta=function(){Dt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),a=[];for(let s=0;s<t.length;s++){const n=e[s];for(let e=0;e<n.length;e++)a.push(t[s])}return a},s.Z=function(e){Dt(this);let t=[];if("string"==typeof e)Ot(this,e)&&(t=t.concat(this.g.get(_t(this,e))));else{e=Array.from(this.g.values());for(let a=0;a<e.length;a++)t=t.concat(e[a])}return t},s.set=function(e,t){return Dt(this),this.i=null,Ot(this,e=_t(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},s.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var a=0;a<t.length;a++){var s=t[a];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var n=r;""!==o[s]&&(n+="="+encodeURIComponent(String(o[s]))),e.push(n)}}return this.i=e.join("&")};function Ut(e){this.l=e||Ft,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.g&&i.g.Ka&&i.g.Ka()&&i.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ft=10;function qt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Bt(e){return e.h?1:e.g?e.g.size:0}function Ht(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function zt(e,t){e.g?e.g.add(t):e.h=t}function Vt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Gt(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const a of e.g.values())t=t.concat(a.F);return t}return v(e.i)}Ut.prototype.cancel=function(){if(this.i=Gt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};function Jt(){this.g=new class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}}}function Wt(e,t,a){const s=a||"";try{bt(e,(function(e,a){let n=e;d(e)&&(n=fe(e)),t.push(s+a+"="+encodeURIComponent(n))}))}catch(e){throw t.push(s+"type="+encodeURIComponent("_badmap")),e}}function Kt(e,t,a,s,n){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,n(s)}catch(e){}}function Qt(e){this.l=e.ec||null,this.j=e.ob||!1}function Yt(e,t){ue.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Xt,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b(Qt,Ge),Qt.prototype.g=function(){return new Yt(this.l,this.j)},Qt.prototype.i=function(e){return function(){return e}}({}),b(Yt,ue);var Xt=0;function $t(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function ea(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ta(e)}function ta(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(s=Yt.prototype).open=function(e,t){if(this.readyState!=Xt)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ta(this)},s.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||i).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ea(this)),this.readyState=Xt},s.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ta(this)),this.g&&(this.readyState=3,ta(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$t(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},s.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ea(this):ta(this),3==this.readyState&&$t(this)}},s.Za=function(e){this.g&&(this.response=this.responseText=e,ea(this))},s.Ya=function(e){this.g&&(this.response=e,ea(this))},s.ka=function(){this.g&&ea(this)},s.setRequestHeader=function(e,t){this.v.append(e,t)},s.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var a=t.next();!a.done;)a=a.value,e.push(a[0]+": "+a[1]),a=t.next();return e.join("\r\n")},Object.defineProperty(Yt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var aa=i.JSON.parse;function sa(e){ue.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=na,this.L=this.M=!1}b(sa,ue);var na="",ra=/^https?$/i,oa=["POST","PUT"];function ia(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ca(e),la(e)}function ca(e){e.F||(e.F=!0,he(e,"complete"),he(e,"error"))}function da(e){if(e.h&&void 0!==o&&(!e.C[1]||4!=ha(e)||2!=e.da()))if(e.v&&4==ha(e))Ne(e.La,0,e);else if(he(e,"readystatechange"),4==ha(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var a;if(!(a=t)){var s;if(s=0===o){var n=String(e.I).match(gt)[1]||null;!n&&i.self&&i.self.location&&(n=i.self.location.protocol.slice(0,-1)),s=!ra.test(n?n.toLowerCase():"")}a=s}if(a)he(e,"complete"),he(e,"success");else{e.m=6;try{var r=2<ha(e)?e.g.statusText:""}catch(e){r=""}e.j=r+" ["+e.da()+"]",ca(e)}}finally{la(e)}}}function la(e,t){if(e.g){ua(e);const a=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||he(e,"ready");try{a.onreadystatechange=s}catch(e){}}}function ua(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(i.clearTimeout(e.A),e.A=null)}function ha(e){return e.g?e.g.readyState:0}function ma(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case na:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function fa(e){let t="";return W(e,(function(e,a){t+=a,t+=":",t+=e,t+="\r\n"})),t}function pa(e,t,a){e:{for(s in a){var s=!1;break e}s=!0}s||(a=fa(a),"string"==typeof e?null!=a&&encodeURIComponent(String(a)):Et(e,t,a))}function ba(e,t,a){return a&&a.internalChannelParams&&a.internalChannelParams[e]||t}function ga(e){this.Ga=0,this.j=[],this.l=new je,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ba("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ba("baseRetryDelayMs",5e3,e),this.hb=ba("retryDelaySeedMs",1e4,e),this.eb=ba("forwardChannelMaxRetries",2,e),this.xa=ba("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ut(e&&e.concurrentRequestLimit),this.Ja=new Jt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ya(e){if(Aa(e),3==e.H){var t=e.W++,a=vt(e.I);if(Et(a,"SID",e.K),Et(a,"RID",t),Et(a,"TYPE","terminate"),Ea(e,a),(t=new et(e,e.l,t)).L=2,t.A=Tt(vt(a)),a=!1,i.navigator&&i.navigator.sendBeacon)try{a=i.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!a&&i.Image&&((new Image).src=t.A,a=!0),a||(t.g=La(t.l,null),t.g.ha(t.A)),t.G=Date.now(),lt(t)}ja(e)}function va(e){e.g&&(Na(e),e.g.cancel(),e.g=null)}function Aa(e){va(e),e.u&&(i.clearTimeout(e.u),e.u=null),Pa(e),e.i.cancel(),e.m&&("number"==typeof e.m&&i.clearTimeout(e.m),e.m=null)}function wa(e){if(!qt(e.i)&&!e.m){e.m=!0;var t=e.Na;Ae||Ee(),we||(Ae(),we=!0),Se.add(t,e),e.C=0}}function Sa(e,t){var a;a=t?t.m:e.W++;const s=vt(e.I);Et(s,"SID",e.K),Et(s,"RID",a),Et(s,"AID",e.V),Ea(e,s),e.o&&e.s&&pa(s,e.o,e.s),a=new et(e,e.l,a,e.C+1),null===e.o&&(a.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ta(e,a,1e3),a.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),zt(e.i,a),rt(a,s,t)}function Ea(e,t){e.na&&W(e.na,(function(e,a){Et(t,a,e)})),e.h&&bt({},(function(e,a){Et(t,a,e)}))}function Ta(e,t,a){a=Math.min(e.j.length,a);var s=e.h?f(e.h.Va,e.h,e):null;e:{var n=e.j;let t=-1;for(;;){const e=["count="+a];-1==t?0<a?(t=n[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let o=0;o<a;o++){let a=n[o].g;const i=n[o].map;if(a-=t,0>a)t=Math.max(0,n[o].g-100),r=!1;else try{Wt(i,e,"req"+a+"_")}catch(e){s&&s(i)}}if(r){s=e.join("&");break e}}}return e=e.j.splice(0,a),t.F=e,s}function ka(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ae||Ee(),we||(Ae(),we=!0),Se.add(t,e),e.A=0}}function Ra(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=He(f(e.Ma,e),Ca(e,e.A)),e.A++,!0)}function Na(e){null!=e.B&&(i.clearTimeout(e.B),e.B=null)}function xa(e){e.g=new et(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=vt(e.wa);Et(t,"RID","rpc"),Et(t,"SID",e.K),Et(t,"AID",e.V),Et(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Et(t,"TO",e.qa),Et(t,"TYPE","xmlhttp"),Ea(e,t),e.o&&e.s&&pa(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var a=e.g;e=e.pa,a.L=1,a.A=Tt(vt(t)),a.u=null,a.S=!0,ot(a,e)}function Pa(e){null!=e.v&&(i.clearTimeout(e.v),e.v=null)}function Ia(e,t){var a=null;if(e.g==t){Pa(e),Na(e),e.g=null;var s=2}else{if(!Ht(e.i,t))return;a=t.F,Vt(e.i,t),s=1}if(0!=e.H)if(t.i)if(1==s){a=t.u?t.u.length:0,t=Date.now()-t.G;var n=e.C;he(s=Ze(),new Be(s,a)),wa(e)}else ka(e);else if(3==(n=t.s)||0==n&&0<t.ca||!(1==s&&function(e,t){return!(Bt(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=He(f(e.Na,e,t),Ca(e,e.C)),e.C++,!0))}(e,t)||2==s&&Ra(e)))switch(a&&0<a.length&&(t=e.i,t.i=t.i.concat(a)),n){case 1:Ma(e,5);break;case 4:Ma(e,10);break;case 3:Ma(e,6);break;default:Ma(e,2)}}function Ca(e,t){let a=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(a*=2),a*t}function Ma(e,t){if(e.l.info("Error code "+t),2==t){var a=null;e.h&&(a=null);var s=f(e.pb,e);a||(a=new yt("//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||At(a,"https"),Tt(a)),function(e,t){const a=new je;if(i.Image){const s=new Image;s.onload=p(Kt,a,s,"TestLoadImage: loaded",!0,t),s.onerror=p(Kt,a,s,"TestLoadImage: error",!1,t),s.onabort=p(Kt,a,s,"TestLoadImage: abort",!1,t),s.ontimeout=p(Kt,a,s,"TestLoadImage: timeout",!1,t),i.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=e}else t(!1)}(a.toString(),s)}else qe(2);e.H=0,e.h&&e.h.za(t),ja(e),Aa(e)}function ja(e){if(e.H=0,e.ma=[],e.h){const t=Gt(e.i);0==t.length&&0==e.j.length||(A(e.ma,t),A(e.ma,e.j),e.i.i.length=0,v(e.j),e.j.length=0),e.h.ya()}}function Da(e,t,a){var s=a instanceof yt?vt(a):new yt(a);if(""!=s.g)t&&(s.g=t+"."+s.g),wt(s,s.m);else{var n=i.location;s=n.protocol,t=t?t+"."+n.hostname:n.hostname,n=+n.port;var r=new yt(null);s&&At(r,s),t&&(r.g=t),n&&wt(r,n),a&&(r.l=a),s=r}return a=e.F,t=e.Da,a&&t&&Et(s,a,t),Et(s,"VER",e.ra),Ea(e,s),s}function La(e,t,a){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ha&&!e.va?new sa(new Qt({ob:a})):new sa(e.va)).Oa(e.J),t}function Oa(){}function Za(){if(C&&!(10<=Number(q)))throw Error("Environmental error: no available transport.")}function _a(e,t){ue.call(this),this.g=new ga(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!E(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!E(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new qa(this)}function Ua(e){Ye.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const a in t){e=a;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Fa(){Xe.call(this),this.status=1}function qa(e){this.g=e}function Ba(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Ha(e,t,a){a||(a=0);var s=Array(16);if("string"==typeof t)for(var n=0;16>n;++n)s[n]=t.charCodeAt(a++)|t.charCodeAt(a++)<<8|t.charCodeAt(a++)<<16|t.charCodeAt(a++)<<24;else for(n=0;16>n;++n)s[n]=t[a++]|t[a++]<<8|t[a++]<<16|t[a++]<<24;t=e.g[0],a=e.g[1],n=e.g[2];var r=e.g[3],o=t+(r^a&(n^r))+s[0]+3614090360&4294967295;o=(a=(n=(r=(t=(a=(n=(r=(t=(a=(n=(r=(t=(a=(n=(r=(t=(a=(n=(r=(t=(a=(n=(r=(t=(a=(n=(r=(t=(a=(n=(r=(t=(a=(n=(r=(t=(a=(n=(r=(t=(a=(n=(r=(t=(a=(n=(r=(t=(a=(n=(r=(t=(a=(n=(r=(t=(a=(n=(r=(t=a+(o<<7&4294967295|o>>>25))+((o=r+(n^t&(a^n))+s[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=n+(a^r&(t^a))+s[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=a+(t^n&(r^t))+s[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^a&(n^r))+s[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(n^t&(a^n))+s[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=n+(a^r&(t^a))+s[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=a+(t^n&(r^t))+s[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^a&(n^r))+s[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(n^t&(a^n))+s[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=n+(a^r&(t^a))+s[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=a+(t^n&(r^t))+s[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^a&(n^r))+s[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(n^t&(a^n))+s[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=n+(a^r&(t^a))+s[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=a+(t^n&(r^t))+s[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(n^r&(a^n))+s[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(a^n&(t^a))+s[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=n+(t^a&(r^t))+s[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=a+(r^t&(n^r))+s[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^r&(a^n))+s[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(a^n&(t^a))+s[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=n+(t^a&(r^t))+s[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=a+(r^t&(n^r))+s[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^r&(a^n))+s[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(a^n&(t^a))+s[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=n+(t^a&(r^t))+s[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=a+(r^t&(n^r))+s[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^r&(a^n))+s[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(a^n&(t^a))+s[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=n+(t^a&(r^t))+s[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=a+(r^t&(n^r))+s[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(a^n^r)+s[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^a^n)+s[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=n+(r^t^a)+s[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=a+(n^r^t)+s[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(a^n^r)+s[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^a^n)+s[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=n+(r^t^a)+s[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=a+(n^r^t)+s[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(a^n^r)+s[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^a^n)+s[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=n+(r^t^a)+s[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=a+(n^r^t)+s[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(a^n^r)+s[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^a^n)+s[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=n+(r^t^a)+s[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=a+(n^r^t)+s[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^(a|~r))+s[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(a^(t|~n))+s[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=n+(t^(r|~a))+s[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=a+(r^(n|~t))+s[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(n^(a|~r))+s[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(a^(t|~n))+s[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=n+(t^(r|~a))+s[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=a+(r^(n|~t))+s[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(n^(a|~r))+s[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(a^(t|~n))+s[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=n+(t^(r|~a))+s[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=a+(r^(n|~t))+s[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(t=a+((o=t+(n^(a|~r))+s[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(a^(t|~n))+s[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((n=r+((o=n+(t^(r|~a))+s[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(n+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+n&4294967295,e.g[3]=e.g[3]+r&4294967295}function za(e,t){this.h=t;for(var a=[],s=!0,n=e.length-1;0<=n;n--){var r=0|e[n];s&&r==t||(a[n]=r,s=!1)}this.g=a}(s=sa.prototype).Oa=function(e){this.M=e},s.ha=function(e,t,a,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ke.g(),this.C=this.u?Je(this.u):Je(Ke),this.g.onreadystatechange=f(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void ia(this,e)}if(e=a||"",a=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var n in s)a.set(n,s[n]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const e of s.keys())a.set(e,s.get(e))}s=Array.from(a.keys()).find(e=>"content-type"==e.toLowerCase()),n=i.FormData&&e instanceof i.FormData,!(0<=y(oa,t))||s||n||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of a)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ua(this),0<this.B&&((this.L=function(e){return C&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=f(this.ua,this)):this.A=Ne(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){ia(this,e)}},s.ua=function(){void 0!==o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,he(this,"timeout"),this.abort(8))},s.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,he(this,"complete"),he(this,"abort"),la(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),la(this,!0)),sa.$.N.call(this)},s.La=function(){this.s||(this.G||this.v||this.l?da(this):this.kb())},s.kb=function(){da(this)},s.isActive=function(){return!!this.g},s.da=function(){try{return 2<ha(this)?this.g.status:-1}catch(e){return-1}},s.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},s.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),aa(t)}},s.Ia=function(){return this.m},s.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(s=ga.prototype).ra=8,s.H=1,s.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const n=new et(this,this.l,e);let r=this.s;if(this.U&&(r?(r=K(r),Y(r,this.U)):r=this.U),null!==this.o||this.O||(n.I=r,r=null),this.P)e:{for(var t=0,a=0;a<this.j.length;a++){var s=this.j[a];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if(4096<(t+=s)){t=a;break e}if(4096===t||a===this.j.length-1){t=a+1;break e}}t=1e3}else t=1e3;t=Ta(this,n,t),Et(a=vt(this.I),"RID",e),Et(a,"CVER",22),this.F&&Et(a,"X-HTTP-Session-Id",this.F),Ea(this,a),r&&(this.O?t="headers="+encodeURIComponent(String(fa(r)))+"&"+t:this.o&&pa(a,this.o,r)),zt(this.i,n),this.bb&&Et(a,"TYPE","init"),this.P?(Et(a,"$req",t),Et(a,"SID","null"),n.aa=!0,rt(n,a,null)):rt(n,a,t),this.H=2}}else 3==this.H&&(e?Sa(this,e):0==this.j.length||qt(this.i)||Sa(this))},s.Ma=function(){if(this.u=null,xa(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=He(f(this.jb,this),e)}},s.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,qe(10),va(this),xa(this))},s.ib=function(){null!=this.v&&(this.v=null,va(this),Ra(this),qe(19))},s.pb=function(e){e?(this.l.info("Successfully pinged google.com"),qe(2)):(this.l.info("Failed to ping google.com"),qe(1))},s.isActive=function(){return!!this.h&&this.h.isActive(this)},(s=Oa.prototype).Ba=function(){},s.Aa=function(){},s.za=function(){},s.ya=function(){},s.isActive=function(){return!0},s.Va=function(){},Za.prototype.g=function(e,t){return new _a(e,t)},b(_a,ue),_a.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,a=this.h||void 0;qe(0),e.Y=t,e.na=a||{},e.G=e.aa,e.I=Da(e,null,e.Y),wa(e)},_a.prototype.close=function(){ya(this.g)},_a.prototype.u=function(e){var t=this.g;if("string"==typeof e){var a={};a.__data__=e,e=a}else this.v&&((a={}).__data__=fe(e),e=a);t.j.push(new class{constructor(e,t){this.g=e,this.map=t}}(t.fb++,e)),3==t.H&&wa(t)},_a.prototype.N=function(){this.g.h=null,delete this.j,ya(this.g),delete this.g,_a.$.N.call(this)},b(Ua,Ye),b(Fa,Xe),b(qa,Oa),qa.prototype.Ba=function(){he(this.g,"a")},qa.prototype.Aa=function(e){he(this.g,new Ua(e))},qa.prototype.za=function(e){he(this.g,new Fa)},qa.prototype.ya=function(){he(this.g,"b")},b(Ba,(function(){this.blockSize=-1})),Ba.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Ba.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var a=t-this.blockSize,s=this.m,n=this.h,r=0;r<t;){if(0==n)for(;r<=a;)Ha(this,e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(s[n++]=e.charCodeAt(r++),n==this.blockSize){Ha(this,s),n=0;break}}else for(;r<t;)if(s[n++]=e[r++],n==this.blockSize){Ha(this,s),n=0;break}}this.h=n,this.i+=t},Ba.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var a=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&a,a/=256;for(this.j(e),e=Array(16),t=a=0;4>t;++t)for(var s=0;32>s;s+=8)e[a++]=this.g[t]>>>s&255;return e};var Va={};function Ga(e){return-128<=e&&128>e?function(e,t){var a=Va;return Object.prototype.hasOwnProperty.call(a,e)?a[e]:a[e]=t(e)}(e,(function(e){return new za([0|e],0>e?-1:0)})):new za([0|e],0>e?-1:0)}function Ja(e){if(isNaN(e)||!isFinite(e))return Ka;if(0>e)return es(Ja(-e));for(var t=[],a=1,s=0;e>=a;s++)t[s]=e/a|0,a*=Wa;return new za(t,0)}var Wa=4294967296,Ka=Ga(0),Qa=Ga(1),Ya=Ga(16777216);function Xa(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function $a(e){return-1==e.h}function es(e){for(var t=e.g.length,a=[],s=0;s<t;s++)a[s]=~e.g[s];return new za(a,~e.h).add(Qa)}function ts(e,t){return e.add(es(t))}function as(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ss(e,t){this.g=e,this.h=t}function ns(e,t){if(Xa(t))throw Error("division by zero");if(Xa(e))return new ss(Ka,Ka);if($a(e))return t=ns(es(e),t),new ss(es(t.g),es(t.h));if($a(t))return t=ns(e,es(t)),new ss(es(t.g),t.h);if(30<e.g.length){if($a(e)||$a(t))throw Error("slowDivide_ only works with positive integers.");for(var a=Qa,s=t;0>=s.X(e);)a=rs(a),s=rs(s);var n=os(a,1),r=os(s,1);for(s=os(s,2),a=os(a,2);!Xa(s);){var o=r.add(s);0>=o.X(e)&&(n=n.add(a),r=o),s=os(s,1),a=os(a,1)}return t=ts(e,n.R(t)),new ss(n,t)}for(n=Ka;0<=e.X(t);){for(a=Math.max(1,Math.floor(e.ea()/t.ea())),s=48>=(s=Math.ceil(Math.log(a)/Math.LN2))?1:Math.pow(2,s-48),o=(r=Ja(a)).R(t);$a(o)||0<o.X(e);)o=(r=Ja(a-=s)).R(t);Xa(r)&&(r=Qa),n=n.add(r),e=ts(e,o)}return new ss(n,e)}function rs(e){for(var t=e.g.length+1,a=[],s=0;s<t;s++)a[s]=e.D(s)<<1|e.D(s-1)>>>31;return new za(a,e.h)}function os(e,t){var a=t>>5;t%=32;for(var s=e.g.length-a,n=[],r=0;r<s;r++)n[r]=0<t?e.D(r+a)>>>t|e.D(r+a+1)<<32-t:e.D(r+a);return new za(n,e.h)}(s=za.prototype).ea=function(){if($a(this))return-es(this).ea();for(var e=0,t=1,a=0;a<this.g.length;a++){var s=this.D(a);e+=(0<=s?s:Wa+s)*t,t*=Wa}return e},s.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(Xa(this))return"0";if($a(this))return"-"+es(this).toString(e);for(var t=Ja(Math.pow(e,6)),a=this,s="";;){var n=ns(a,t).g,r=((0<(a=ts(a,n.R(t))).g.length?a.g[0]:a.h)>>>0).toString(e);if(Xa(a=n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}},s.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},s.X=function(e){return $a(e=ts(this,e))?-1:Xa(e)?0:1},s.abs=function(){return $a(this)?es(this):this},s.add=function(e){for(var t=Math.max(this.g.length,e.g.length),a=[],s=0,n=0;n<=t;n++){var r=s+(65535&this.D(n))+(65535&e.D(n)),o=(r>>>16)+(this.D(n)>>>16)+(e.D(n)>>>16);s=o>>>16,r&=65535,o&=65535,a[n]=o<<16|r}return new za(a,-2147483648&a[a.length-1]?-1:0)},s.R=function(e){if(Xa(this)||Xa(e))return Ka;if($a(this))return $a(e)?es(this).R(es(e)):es(es(this).R(e));if($a(e))return es(this.R(es(e)));if(0>this.X(Ya)&&0>e.X(Ya))return Ja(this.ea()*e.ea());for(var t=this.g.length+e.g.length,a=[],s=0;s<2*t;s++)a[s]=0;for(s=0;s<this.g.length;s++)for(var n=0;n<e.g.length;n++){var r=this.D(s)>>>16,o=65535&this.D(s),i=e.D(n)>>>16,c=65535&e.D(n);a[2*s+2*n]+=o*c,as(a,2*s+2*n),a[2*s+2*n+1]+=r*c,as(a,2*s+2*n+1),a[2*s+2*n+1]+=o*i,as(a,2*s+2*n+1),a[2*s+2*n+2]+=r*i,as(a,2*s+2*n+2)}for(s=0;s<t;s++)a[s]=a[2*s+1]<<16|a[2*s];for(s=t;s<2*t;s++)a[s]=0;return new za(a,0)},s.gb=function(e){return ns(this,e).h},s.and=function(e){for(var t=Math.max(this.g.length,e.g.length),a=[],s=0;s<t;s++)a[s]=this.D(s)&e.D(s);return new za(a,this.h&e.h)},s.or=function(e){for(var t=Math.max(this.g.length,e.g.length),a=[],s=0;s<t;s++)a[s]=this.D(s)|e.D(s);return new za(a,this.h|e.h)},s.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),a=[],s=0;s<t;s++)a[s]=this.D(s)^e.D(s);return new za(a,this.h^e.h)},Za.prototype.createWebChannel=Za.prototype.g,_a.prototype.send=_a.prototype.u,_a.prototype.open=_a.prototype.m,_a.prototype.close=_a.prototype.close,ze.NO_ERROR=0,ze.TIMEOUT=8,ze.HTTP_ERROR=6,Ve.COMPLETE="complete",We.EventType=Qe,Qe.OPEN="a",Qe.CLOSE="b",Qe.ERROR="c",Qe.MESSAGE="d",ue.prototype.listen=ue.prototype.O,sa.prototype.listenOnce=sa.prototype.P,sa.prototype.getLastError=sa.prototype.Sa,sa.prototype.getLastErrorCode=sa.prototype.Ia,sa.prototype.getStatus=sa.prototype.da,sa.prototype.getResponseJson=sa.prototype.Wa,sa.prototype.getResponseText=sa.prototype.ja,sa.prototype.send=sa.prototype.ha,sa.prototype.setWithCredentials=sa.prototype.Oa,Ba.prototype.digest=Ba.prototype.l,Ba.prototype.reset=Ba.prototype.reset,Ba.prototype.update=Ba.prototype.j,za.prototype.add=za.prototype.add,za.prototype.multiply=za.prototype.R,za.prototype.modulo=za.prototype.gb,za.prototype.compare=za.prototype.X,za.prototype.toNumber=za.prototype.ea,za.prototype.toString=za.prototype.toString,za.prototype.getBits=za.prototype.D,za.fromNumber=Ja,za.fromString=function e(t,a){if(0==t.length)throw Error("number format error: empty string");if(2>(a=a||10)||36<a)throw Error("radix out of range: "+a);if("-"==t.charAt(0))return es(e(t.substring(1),a));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=Ja(Math.pow(a,8)),n=Ka,r=0;r<t.length;r+=8){var o=Math.min(8,t.length-r),i=parseInt(t.substring(r,r+o),a);8>o?(o=Ja(Math.pow(a,o)),n=n.R(o).add(Ja(i))):n=(n=n.R(s)).add(Ja(i))}return n};var is=r.createWebChannelTransport=function(){return new Za},cs=r.getStatEventTarget=function(){return Ze()},ds=r.ErrorCode=ze,ls=r.EventType=Ve,us=r.Event=Le,hs=r.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ms=(r.FetchXmlHttpFactory=Qt,r.WebChannel=We),fs=r.XhrIo=sa,ps=r.Md5=Ba,bs=r.Integer=za}).call(this,a(7))},function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return u}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=[];var n;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(n||(n={}));const r={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},o=n.INFO,i={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},c=(e,t,...a)=>{if(t<e.logLevel)return;const s=(new Date).toISOString(),n=i[t];if(!n)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[n](`[${s}]  ${e.name}:`,...a)};class d{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?r[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}function l(e){s.forEach(t=>{t.setLogLevel(e)})}function u(e,t){for(const a of s){let s=null;t&&t.level&&(s=r[t.level]),a.userLogHandler=null===e?null:(t,a,...r)=>{const o=r.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");a>=(null!=s?s:t.logLevel)&&e({level:n[a].toLowerCase(),message:o,args:r,type:t.name})}}}},function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o}));var s=a(1);class n{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class r{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new s.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&e.resolve(a)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const a=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),s=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(a)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:a})}catch(e){if(s)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class i{constructor(e,t){this._delegate=e,this.firebase=t,Object(r._addComponent)(e,new n.a("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(r.deleteApp)(this._delegate)))}_getService(e,t=r._DEFAULT_ENTRY_NAME){var a;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return s.isInitialized()||"EXPLICIT"!==(null===(a=s.getComponent())||void 0===a?void 0:a.instantiationMode)||s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=r._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(r._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){Object(r._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},d=new s.b("app-compat","Firebase",c);const l=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},a={__esModule:!0,initializeApp:function(n,o={}){const i=r.initializeApp(n,o);if(Object(s.g)(t,i.name))return t[i.name];const c=new e(i,a);return t[i.name]=c,c},app:n,registerVersion:r.registerVersion,setLogLevel:r.setLogLevel,onLog:r.onLog,apps:null,SDK_VERSION:r.SDK_VERSION,INTERNAL:{registerComponent:function(t){const o=t.name,i=o.replace("-compat","");if(r._registerComponent(t)&&"PUBLIC"===t.type){const r=(e=n())=>{if("function"!=typeof e[i])throw d.create("invalid-app-argument",{appName:o});return e[i]()};void 0!==t.serviceProps&&Object(s.k)(r,t.serviceProps),a[i]=r,e.prototype[i]=function(...e){return this._getService.bind(this,o).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?a[i]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){if("serverAuth"===t)return null;return t},modularAPIs:r}};function n(e){if(e=e||r._DEFAULT_ENTRY_NAME,!Object(s.g)(t,e))throw d.create("no-app",{appName:e});return t[e]}return a.default=a,Object.defineProperty(a,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),n.App=e,a}(i);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(s.k)(t,e)},createSubscribe:s.i,ErrorFactory:s.b,deepExtend:s.k}),t}(),u=new o.b("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if(Object(s.q)()&&void 0!==self.firebase){u.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&u.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const h=l;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var m;Object(r.registerVersion)("@firebase/app-compat","0.2.25",m);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const f=new Map,p={activated:!1,tokenObservers:[]},b={initialized:!1,enabled:!1};function g(e){return f.get(e)||Object.assign({},p)}function y(){return b}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v="https://content-firebaseappcheck.googleapis.com/v1",A=3e4,w=96e4;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(e,t,a,s,n){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=a,this.lowerBound=s,this.upperBound=n,this.pending=null,this.nextErrorWaitInterval=s,s>n)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new s.a,this.pending.promise.catch(e=>{}),await(t=this.getNextRun(e),new Promise(e=>{setTimeout(e,t)})),this.pending.resolve(),await this.pending.promise,this.pending=new s.a,this.pending.promise.catch(e=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(e){this.retryPolicy(e)?this.process(!1).catch(()=>{}):this.stop()}var t;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}const E={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},T=new s.b("appCheck","AppCheck",E);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function k(e=!1){var t;return e?null===(t=self.grecaptcha)||void 0===t?void 0:t.enterprise:self.grecaptcha}function R(e){if(!g(e).activated)throw T.create("use-before-activation",{appName:e.name})}function N(e){const t=Math.round(e/1e3),a=Math.floor(t/86400),s=Math.floor((t-3600*a*24)/3600),n=Math.floor((t-3600*a*24-3600*s)/60),r=t-3600*a*24-3600*s-60*n;let o="";return a&&(o+=x(a)+"d:"),s&&(o+=x(s)+"h:"),o+=x(n)+"m:"+x(r)+"s",o}function x(e){return 0===e?"00":e>=10?e.toString():"0"+e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P({url:e,body:t},a){const s={"Content-Type":"application/json"},n=a.getImmediate({optional:!0});if(n){const e=await n.getHeartbeatsHeader();e&&(s["X-Firebase-Client"]=e)}const r={method:"POST",body:JSON.stringify(t),headers:s};let o,i;try{o=await fetch(e,r)}catch(e){throw T.create("fetch-network-error",{originalErrorMessage:null==e?void 0:e.message})}if(200!==o.status)throw T.create("fetch-status-error",{httpStatus:o.status});try{i=await o.json()}catch(e){throw T.create("fetch-parse-error",{originalErrorMessage:null==e?void 0:e.message})}const c=i.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw T.create("fetch-parse-error",{originalErrorMessage:"ttl field (timeToLive) is not in standard Protobuf Duration format: "+i.ttl});const d=1e3*Number(c[1]),l=Date.now();return{token:i.token,expireTimeMillis:l+d,issuedAtTimeMillis:l}}function I(e,t){const{projectId:a,appId:s,apiKey:n}=e.options;return{url:`${v}/projects/${a}/apps/${s}:exchangeDebugToken?key=${n}`,body:{debug_token:t}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="firebase-app-check-store";let M=null;function j(){return M||(M=new Promise((e,t)=>{try{const a=indexedDB.open("firebase-app-check-database",1);a.onsuccess=t=>{e(t.target.result)},a.onerror=e=>{var a;t(T.create("storage-open",{originalErrorMessage:null===(a=e.target.error)||void 0===a?void 0:a.message}))},a.onupgradeneeded=e=>{const t=e.target.result;switch(e.oldVersion){case 0:t.createObjectStore(C,{keyPath:"compositeKey"})}}}catch(e){t(T.create("storage-open",{originalErrorMessage:null==e?void 0:e.message}))}}),M)}async function D(e,t){const a=(await j()).transaction(C,"readwrite"),s=a.objectStore(C).put({compositeKey:e,value:t});return new Promise((e,t)=>{s.onsuccess=t=>{e()},a.onerror=e=>{var a;t(T.create("storage-set",{originalErrorMessage:null===(a=e.target.error)||void 0===a?void 0:a.message}))}})}async function L(e){const t=(await j()).transaction(C,"readonly"),a=t.objectStore(C).get(e);return new Promise((e,s)=>{a.onsuccess=t=>{const a=t.target.result;e(a?a.value:void 0)},t.onerror=e=>{var t;s(T.create("storage-get",{originalErrorMessage:null===(t=e.target.error)||void 0===t?void 0:t.message}))}})}function O(e){return`${e.options.appId}-${e.name}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=new o.b("@firebase/app-check");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _(e){if(Object(s.r)()){let t=void 0;try{t=await function(e){return L(O(e))}(e)}catch(e){Z.warn("Failed to read token from IndexedDB. Error: "+e)}return t}}function U(e,t){return Object(s.r)()?function(e,t){return D(O(e),t)}(e,t).catch(e=>{Z.warn("Failed to write token to IndexedDB. Error: "+e)}):Promise.resolve()}async function F(){let e=void 0;try{e=await L("debug-token")}catch(e){}if(e)return e;{const e=Object(s.u)();return(t=e,D("debug-token",t)).catch(e=>Z.warn("Failed to persist debug token to IndexedDB. Error: "+e)),e}var t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return y().enabled}async function B(){const e=y();if(e.enabled&&e.token)return e.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H={error:"UNKNOWN_ERROR"};async function z(e,t=!1){const a=e.app;R(a);const s=g(a);let n=s.token,r=void 0;if(n&&!Q(n)&&(s.token=void 0,n=void 0),!n){const e=await s.cachedTokenPromise;e&&(Q(e)?n=e:await U(a,void 0))}if(!t&&n&&Q(n))return{token:n.token};let o,i=!1;if(q()){s.exchangeTokenPromise||(s.exchangeTokenPromise=P(I(a,await B()),e.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),i=!0);const t=await s.exchangeTokenPromise;return await U(a,t),s.token=t,{token:t.token}}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),i=!0),n=await g(a).exchangeTokenPromise}catch(e){"appCheck/throttled"===e.code?Z.warn(e.message):Z.error(e),r=e}return n?r?o=Q(n)?{token:n.token,internalError:r}:Y(r):(o={token:n.token},s.token=n,await U(a,n)):o=Y(r),i&&K(a,o),o}async function V(e){const t=e.app;R(t);const{provider:a}=g(t);if(q()){const a=await B(),{token:s}=await P(I(t,a),e.heartbeatServiceProvider);return{token:s}}{const{token:e}=await a.getToken();return{token:e}}}function G(e,t,a,s){const{app:n}=e,r=g(n),o={next:a,error:s,type:t};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Q(r.token)){const t=r.token;Promise.resolve().then(()=>{a({token:t.token}),W(e)}).catch(()=>{})}r.cachedTokenPromise.then(()=>W(e))}function J(e,t){const a=g(e),s=a.tokenObservers.filter(e=>e.next!==t);0===s.length&&a.tokenRefresher&&a.tokenRefresher.isRunning()&&a.tokenRefresher.stop(),a.tokenObservers=s}function W(e){const{app:t}=e,a=g(t);let s=a.tokenRefresher;s||(s=function(e){const{app:t}=e;return new S(async()=>{let a;if(a=g(t).token?await z(e,!0):await z(e),a.error)throw a.error;if(a.internalError)throw a.internalError},()=>!0,()=>{const e=g(t);if(e.token){let t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5;const a=e.token.expireTimeMillis-3e5;return t=Math.min(t,a),Math.max(0,t-Date.now())}return 0},A,w)}(e),a.tokenRefresher=s),!s.isRunning()&&a.isTokenAutoRefreshEnabled&&s.start()}function K(e,t){const a=g(e).tokenObservers;for(const e of a)try{"EXTERNAL"===e.type&&null!=t.error?e.error(t.error):e.next(t)}catch(e){}}function Q(e){return e.expireTimeMillis-Date.now()>0}function Y(e){return{token:(t=H,s.d.encodeString(JSON.stringify(t),!1)),error:e};var t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=g(this.app);for(const t of e)J(this.app,t.next);return Promise.resolve()}}function $(e,t){const a=new s.a;g(e).reCAPTCHAState={initialized:a};const n=ae(e),r=k(!1);return r?te(e,t,r,n,a):function(e){const t=document.createElement("script");t.src="https://www.google.com/recaptcha/api.js",t.onload=e,document.head.appendChild(t)}(()=>{const s=k(!1);if(!s)throw new Error("no recaptcha");te(e,t,s,n,a)}),a.promise}function ee(e,t){const a=new s.a;g(e).reCAPTCHAState={initialized:a};const n=ae(e),r=k(!0);return r?te(e,t,r,n,a):function(e){const t=document.createElement("script");t.src="https://www.google.com/recaptcha/enterprise.js",t.onload=e,document.head.appendChild(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{const s=k(!0);if(!s)throw new Error("no recaptcha");te(e,t,s,n,a)}),a.promise}function te(e,t,a,s,n){a.ready(()=>{!function(e,t,a,s){const n=a.render(s,{sitekey:t,size:"invisible",callback:()=>{g(e).reCAPTCHAState.succeeded=!0},"error-callback":()=>{g(e).reCAPTCHAState.succeeded=!1}}),r=g(e);r.reCAPTCHAState=Object.assign(Object.assign({},r.reCAPTCHAState),{widgetId:n})}(e,t,a,s),n.resolve(a)})}function ae(e){const t="fire_app_check_"+e.name,a=document.createElement("div");return a.id=t,a.style.display="none",document.body.appendChild(a),t}async function se(e){R(e);const t=g(e).reCAPTCHAState,a=await t.initialized.promise;return new Promise((t,s)=>{const n=g(e).reCAPTCHAState;a.ready(()=>{t(a.execute(n.widgetId,{action:"fire_app_check"}))})})}class ne{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t,a;ce(this._throttleData);const s=await se(this._app).catch(e=>{throw T.create("recaptcha-error")});if(!(null===(e=g(this._app).reCAPTCHAState)||void 0===e?void 0:e.succeeded))throw T.create("recaptcha-error");let n;try{n=await P(function(e,t){const{projectId:a,appId:s,apiKey:n}=e.options;return{url:`${v}/projects/${a}/apps/${s}:exchangeRecaptchaV3Token?key=${n}`,body:{recaptcha_v3_token:t}}}(this._app,s),this._heartbeatServiceProvider)}catch(e){throw(null===(t=e.code)||void 0===t?void 0:t.includes("fetch-status-error"))?(this._throttleData=ie(Number(null===(a=e.customData)||void 0===a?void 0:a.httpStatus),this._throttleData),T.create("throttled",{time:N(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):e}return this._throttleData=null,n}initialize(e){this._app=e,this._heartbeatServiceProvider=Object(r._getProvider)(e,"heartbeat"),$(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof ne&&this._siteKey===e._siteKey}}class re{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t,a;ce(this._throttleData);const s=await se(this._app).catch(e=>{throw T.create("recaptcha-error")});if(!(null===(e=g(this._app).reCAPTCHAState)||void 0===e?void 0:e.succeeded))throw T.create("recaptcha-error");let n;try{n=await P(function(e,t){const{projectId:a,appId:s,apiKey:n}=e.options;return{url:`${v}/projects/${a}/apps/${s}:exchangeRecaptchaEnterpriseToken?key=${n}`,body:{recaptcha_enterprise_token:t}}}(this._app,s),this._heartbeatServiceProvider)}catch(e){throw(null===(t=e.code)||void 0===t?void 0:t.includes("fetch-status-error"))?(this._throttleData=ie(Number(null===(a=e.customData)||void 0===a?void 0:a.httpStatus),this._throttleData),T.create("throttled",{time:N(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):e}return this._throttleData=null,n}initialize(e){this._app=e,this._heartbeatServiceProvider=Object(r._getProvider)(e,"heartbeat"),ee(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof re&&this._siteKey===e._siteKey}}class oe{constructor(e){this._customProviderOptions=e}async getToken(){const e=await this._customProviderOptions.getToken(),t=Object(s.t)(e.token),a=null!==t&&t<Date.now()&&t>0?1e3*t:Date.now();return Object.assign(Object.assign({},e),{issuedAtTimeMillis:a})}initialize(e){this._app=e}isEqual(e){return e instanceof oe&&this._customProviderOptions.getToken.toString()===e._customProviderOptions.getToken.toString()}}function ie(e,t){if(404===e||403===e)return{backoffCount:1,allowRequestsAfter:Date.now()+864e5,httpStatus:e};{const a=t?t.backoffCount:0,n=Object(s.f)(a,1e3,2);return{backoffCount:a+1,allowRequestsAfter:Date.now()+n,httpStatus:e}}}function ce(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw T.create("throttled",{time:N(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e=Object(r.getApp)(),t){e=Object(s.o)(e);const a=Object(r._getProvider)(e,"app-check");if(y().initialized||function(){const e=Object(s.n)(),t=y();if(t.initialized=!0,"string"!=typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==e.FIREBASE_APPCHECK_DEBUG_TOKEN)return;t.enabled=!0;const a=new s.a;t.token=a,"string"==typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN?a.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):a.resolve(F())}(),q()&&B().then(e=>console.log(`App Check debug token: ${e}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),a.isInitialized()){const s=a.getImmediate(),n=a.getOptions();if(n.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&n.provider.isEqual(t.provider))return s;throw T.create("already-initialized",{appName:e.name})}const n=a.initialize({options:t});return function(e,t,a){const s=function(e,t){return f.set(e,t),f.get(e)}(e,Object.assign({},p));s.activated=!0,s.provider=t,s.cachedTokenPromise=_(e).then(t=>(t&&Q(t)&&(s.token=t,K(e,{token:t.token})),t)),s.isTokenAutoRefreshEnabled=void 0===a?e.automaticDataCollectionEnabled:a,s.provider.initialize(e)}(e,t.provider,t.isTokenAutoRefreshEnabled),g(e).isTokenAutoRefreshEnabled&&G(n,"INTERNAL",()=>{}),n}Object(r._registerComponent)(new n.a("app-check",e=>function(e,t){return new X(e,t)}(e.getProvider("app").getImmediate(),e.getProvider("heartbeat")),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{e.getProvider("app-check-internal").initialize()})),Object(r._registerComponent)(new n.a("app-check-internal",e=>function(e){return{getToken:t=>z(e,t),getLimitedUseToken:()=>V(e),addTokenListener:t=>G(e,"INTERNAL",t),removeTokenListener:t=>J(e.app,t)}}(e.getProvider("app-check").getImmediate()),"PUBLIC").setInstantiationMode("EXPLICIT")),Object(r.registerVersion)("@firebase/app-check","0.8.1");const le={"use-before-activation":"App Check is being used before activate() is called for FirebaseApp {$appName}. Call activate() before instantiating other Firebase services."},ue=new s.b("appCheck","AppCheck",le);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(e){this.app=e}activate(e,t){let a;a="string"==typeof e?new ne(e):e instanceof re||e instanceof ne||e instanceof oe?e:new oe({getToken:e.getToken}),this._delegate=de(this.app,{provider:a,isTokenAutoRefreshEnabled:t})}setTokenAutoRefreshEnabled(e){if(!this._delegate)throw ue.create("use-before-activation",{appName:this.app.name});!function(e,t){const a=g(e.app);a.tokenRefresher&&(!0===t?a.tokenRefresher.start():a.tokenRefresher.stop()),a.isTokenAutoRefreshEnabled=t}(this._delegate,e)}getToken(e){if(!this._delegate)throw ue.create("use-before-activation",{appName:this.app.name});return async function(e,t){const a=await z(e,t);if(a.error)throw a.error;return{token:a.token}}(this._delegate,e)}onTokenChanged(e,t,a){if(!this._delegate)throw ue.create("use-before-activation",{appName:this.app.name});return function(e,t,a,s){let n=()=>{},r=()=>{};return n=null!=t.next?t.next.bind(t):t,null!=t.error?r=t.error.bind(t):a&&(r=a),G(e,"EXTERNAL",n,r),()=>J(e.app,n)}(this._delegate,e,t)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=e=>{const t=e.getProvider("app-compat").getImmediate();return new he(t)};h.INTERNAL.registerComponent(new n.a("appCheck-compat",me,"PUBLIC").setServiceProps({ReCaptchaEnterpriseProvider:re,ReCaptchaV3Provider:ne,CustomProvider:oe})),h.registerVersion("@firebase/app-check-compat","0.3.8");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
h.registerVersion("firebase","10.7.1","app-compat");var fe=a(0);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pe(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new fe.g("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){if("undefined"==typeof Uint8Array)throw new fe.g("unimplemented","Uint8Arrays are not available in this environment.")}function ge(){if(!Object(fe.r)())throw new fe.g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ye{constructor(e){this._delegate=e}static fromBase64String(e){return ge(),new ye(fe.b.fromBase64String(e))}static fromUint8Array(e){return be(),new ye(fe.b.fromUint8Array(e))}toBase64(){return ge(),this._delegate.toBase64()}toUint8Array(){return be(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const a=e;for(const e of t)if(e in a&&"function"==typeof a[e])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Ae{enableIndexedDbPersistence(e,t){return Object(fe.F)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(fe.G)(e._delegate)}clearIndexedDbPersistence(e){return Object(fe.x)(e._delegate)}}class we{constructor(e,t,a){this._delegate=t,this._persistenceProvider=a,this.INTERNAL={delete:()=>this.terminate()},e instanceof fe.m||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(fe.s)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,a={}){Object(fe.A)(this._delegate,e,t,a)}enableNetwork(){return Object(fe.H)(this._delegate)}disableNetwork(){return Object(fe.D)(this._delegate)}enablePersistence(e){let t=!1,a=!1;return e&&(t=!!e.synchronizeTabs,a=!!e.experimentalForceOwningTab,Object(fe.t)("synchronizeTabs",t,"experimentalForceOwningTab",a)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,a)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(fe.lb)(this._delegate)}onSnapshotsInSync(e){return Object(fe.Y)(this._delegate,e)}get app(){if(!this._appCompat)throw new fe.g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Le(this,Object(fe.y)(this._delegate,e))}catch(e){throw Ne(e,"collection()","Firestore.collection()")}}doc(e){try{return new Re(this,Object(fe.E)(this._delegate,e))}catch(e){throw Ne(e,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Me(this,Object(fe.z)(this._delegate,e))}catch(e){throw Ne(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(fe.db)(this._delegate,t=>e(new Ee(this,t)))}batch(){return Object(fe.K)(this._delegate),new Te(new fe.l(this._delegate,e=>Object(fe.L)(this._delegate,e)))}loadBundle(e){return Object(fe.V)(this._delegate,e)}namedQuery(e){return Object(fe.W)(this._delegate,e).then(e=>e?new Me(this,e):null)}}class Se extends fe.a{constructor(e){super(),this.firestore=e}convertBytes(e){return new ye(new fe.b(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Re.forKey(t,this.firestore,null)}}class Ee{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Se(e)}get(e){const t=Oe(e);return this._delegate.get(t).then(e=>new Ie(this._firestore,new fe.e(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,a){const s=Oe(e);return a?(pe("Transaction.set",a),this._delegate.set(s,t,a)):this._delegate.set(s,t),this}update(e,t,a,...s){const n=Oe(e);return 2===arguments.length?this._delegate.update(n,t):this._delegate.update(n,t,a,...s),this}delete(e){const t=Oe(e);return this._delegate.delete(t),this}}class Te{constructor(e){this._delegate=e}set(e,t,a){const s=Oe(e);return a?(pe("WriteBatch.set",a),this._delegate.set(s,t,a)):this._delegate.set(s,t),this}update(e,t,a,...s){const n=Oe(e);return 2===arguments.length?this._delegate.update(n,t):this._delegate.update(n,t,a,...s),this}delete(e){const t=Oe(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ke{constructor(e,t,a){this._firestore=e,this._userDataWriter=t,this._delegate=a}fromFirestore(e,t){const a=new fe.i(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ce(this._firestore,a),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const a=ke.INSTANCES;let s=a.get(e);s||(s=new WeakMap,a.set(e,s));let n=s.get(t);return n||(n=new ke(e,new Se(e),t),s.set(t,n)),n}}ke.INSTANCES=new WeakMap;class Re{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Se(e)}static forPath(e,t,a){if(e.length%2!=0)throw new fe.g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Re(t,new fe.d(t._delegate,a,new fe.n(e)))}static forKey(e,t,a){return new Re(t,new fe.d(t._delegate,a,e))}get id(){return this._delegate.id}get parent(){return new Le(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Le(this.firestore,Object(fe.y)(this._delegate,e))}catch(e){throw Ne(e,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=Object(s.o)(e))instanceof fe.d&&Object(fe.cb)(this._delegate,e)}set(e,t){t=pe("DocumentReference.set",t);try{return t?Object(fe.fb)(this._delegate,e,t):Object(fe.fb)(this._delegate,e)}catch(e){throw Ne(e,"setDoc()","DocumentReference.set()")}}update(e,t,...a){try{return 1===arguments.length?Object(fe.kb)(this._delegate,e):Object(fe.kb)(this._delegate,e,t,...a)}catch(e){throw Ne(e,"updateDoc()","DocumentReference.update()")}}delete(){return Object(fe.B)(this._delegate)}onSnapshot(...e){const t=xe(e),a=Pe(e,e=>new Ie(this.firestore,new fe.e(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(fe.X)(this._delegate,t,a)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Object(fe.N)(this._delegate):"server"===(null==e?void 0:e.source)?Object(fe.O)(this._delegate):Object(fe.M)(this._delegate),t.then(e=>new Ie(this.firestore,new fe.e(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new Re(this.firestore,e?this._delegate.withConverter(ke.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ne(e,t,a){return e.message=e.message.replace(t,a),e}function xe(e){for(const t of e)if("object"==typeof t&&!ve(t))return t;return{}}function Pe(e,t){var a,s;let n;return n=ve(e[0])?e[0]:ve(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{n.next&&n.next(t(e))},error:null===(a=n.error)||void 0===a?void 0:a.bind(n),complete:null===(s=n.complete)||void 0===s?void 0:s.bind(n)}}class Ie{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Re(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(fe.hb)(this._delegate,e._delegate)}}class Ce extends Ie{data(e){const t=this._delegate.data(e);return this._delegate._converter||Object(fe.q)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Me{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Se(e)}where(e,t,a){try{return new Me(this.firestore,Object(fe.ab)(this._delegate,Object(fe.mb)(e,t,a)))}catch(e){throw Ne(e,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Me(this.firestore,Object(fe.ab)(this._delegate,Object(fe.Z)(e,t)))}catch(e){throw Ne(e,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Me(this.firestore,Object(fe.ab)(this._delegate,Object(fe.T)(e)))}catch(e){throw Ne(e,"limit()","Query.limit()")}}limitToLast(e){try{return new Me(this.firestore,Object(fe.ab)(this._delegate,Object(fe.U)(e)))}catch(e){throw Ne(e,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Me(this.firestore,Object(fe.ab)(this._delegate,Object(fe.jb)(...e)))}catch(e){throw Ne(e,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Me(this.firestore,Object(fe.ab)(this._delegate,Object(fe.ib)(...e)))}catch(e){throw Ne(e,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Me(this.firestore,Object(fe.ab)(this._delegate,Object(fe.J)(...e)))}catch(e){throw Ne(e,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Me(this.firestore,Object(fe.ab)(this._delegate,Object(fe.I)(...e)))}catch(e){throw Ne(e,"endAt()","Query.endAt()")}}isEqual(e){return Object(fe.bb)(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Object(fe.Q)(this._delegate):"server"===(null==e?void 0:e.source)?Object(fe.R)(this._delegate):Object(fe.P)(this._delegate),t.then(e=>new De(this.firestore,new fe.j(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=xe(e),a=Pe(e,e=>new De(this.firestore,new fe.j(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(fe.X)(this._delegate,t,a)}withConverter(e){return new Me(this.firestore,e?this._delegate.withConverter(ke.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class je{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ce(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class De{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Me(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ce(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new je(this._firestore,e))}forEach(e,t){this._delegate.forEach(a=>{e.call(t,new Ce(this._firestore,a))})}isEqual(e){return Object(fe.hb)(this._delegate,e._delegate)}}class Le extends Me{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Re(this.firestore,e):null}doc(e){try{return new Re(this.firestore,void 0===e?Object(fe.E)(this._delegate):Object(fe.E)(this._delegate,e))}catch(e){throw Ne(e,"doc()","CollectionReference.doc()")}}add(e){return Object(fe.u)(this._delegate,e).then(e=>new Re(this.firestore,e))}isEqual(e){return Object(fe.cb)(this._delegate,e._delegate)}withConverter(e){return new Le(this.firestore,e?this._delegate.withConverter(ke.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Oe(e){return Object(fe.p)(e,fe.d)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(...e){this._delegate=new fe.f(...e)}static documentId(){return new Ze(fe.o.keyField().canonicalString())}isEqual(e){return(e=Object(s.o)(e))instanceof fe.f&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(fe.eb)();return e._methodName="FieldValue.serverTimestamp",new _e(e)}static delete(){const e=Object(fe.C)();return e._methodName="FieldValue.delete",new _e(e)}static arrayUnion(...e){const t=Object(fe.w)(...e);return t._methodName="FieldValue.arrayUnion",new _e(t)}static arrayRemove(...e){const t=Object(fe.v)(...e);return t._methodName="FieldValue.arrayRemove",new _e(t)}static increment(e){const t=Object(fe.S)(e);return t._methodName="FieldValue.increment",new _e(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue={Firestore:we,GeoPoint:fe.h,Timestamp:fe.k,Blob:ye,Transaction:Ee,WriteBatch:Te,DocumentReference:Re,DocumentSnapshot:Ie,Query:Me,QueryDocumentSnapshot:Ce,QuerySnapshot:De,CollectionReference:Le,FieldPath:Ze,FieldValue:_e,setLogLevel:function(e){Object(fe.gb)(e)},CACHE_SIZE_UNLIMITED:fe.c};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fe,qe;qe=(e,t)=>new we(e,t,new Ae),(Fe=h).INTERNAL.registerComponent(new n.a("firestore-compat",e=>{const t=e.getProvider("app-compat").getImmediate(),a=e.getProvider("firestore").getImmediate();return qe(t,a)},"PUBLIC").setServiceProps(Object.assign({},Ue))),Fe.registerVersion("@firebase/firestore-compat","0.3.23");const Be=a(100),He=/(fuc)|(ass)|(nig)|(shit)|(retard)/gi;if(AFRAME.registerComponent("leaderboard",{schema:{apiKey:{type:"string"},authDomain:{type:"string"},databaseURL:{type:"string"},projectId:{type:"string"},storageBucket:{type:"string"},messagingSenderId:{type:"string"},appId:{type:"string"},captchaKey:{type:"string"},challengeId:{default:""},difficulty:{default:""},beatmapCharacteristic:{default:""},inVR:{default:!1},gameMode:{type:"string"},menuSelectedChallengeId:{default:""},isVictory:{default:!1}},init:function(){this.qualifyingIndex=void 0,this.scores=[],this.maxStreaks=[],this.eventDetail={scores:this.scores,maxStreaks:this.maxStreaks},this.addEventDetail={scoreData:void 0,maxStreakData:void 0,index:void 0},this.username=localStorage.getItem("moonriderusername")||"Super Zealot",this.el.addEventListener("leaderboardusername",e=>{this.username=e.detail.value,localStorage.setItem("moonriderusername",this.username)}),this.el.addEventListener("leaderboardsubmit",this.addScore.bind(this)),this.el.addEventListener("leaderboardmaxstreakssubmit",this.addMaxStreak.bind(this)),this.el.addEventListener("leaderboardswitchtostreaks",this.switchToMaxStreaks.bind(this)),this.el.addEventListener("leaderboardswitchtoscore",this.switchToScores.bind(this))},update:function(e){const t={apiKey:this.data.apiKey,authDomain:this.data.authDomain,databaseURL:this.data.databaseURL,projectId:this.data.projectId,storageBucket:this.data.storageBucket,messagingSenderId:this.data.messagingSenderId,appId:this.data.appId};if(!h.apps.length&&this.data.apiKey){if(h.initializeApp(t)){0;h.appCheck().activate(this.data.captchaKey,!0)}this.firestore=h.firestore(),this.firestore.settings({}),this.scoreDB=this.firestore.collection("scores"),this.maxStreakDB=this.firestore.collection("maxStreaks")}return!e.isVictory&&this.data.isVictory&&(this.checkLeaderboardQualify(),this.checkMaxStreaksQualify()),this.data.difficulty&&e.difficulty!==this.data.difficulty||this.data.menuSelectedChallengeId&&e.menuSelectedChallengeId!==this.data.menuSelectedChallengeId?(this.fetchScores(this.data.menuSelectedChallengeId),void this.fetchMaxStreaks(this.data.menuSelectedChallengeId)):this.data.challengeId&&e.challengeId!==this.data.challengeId?(this.fetchScores(this.data.challengeId),void this.fetchMaxStreaks(this.data.challengeId)):void 0},addScore:function(){this.add("score",e=>e.score,this.scoreDB,"scoreData","leaderboardscoreadded")},addMaxStreak:function(){this.add("maxStreak",e=>e.maxCombo,this.maxStreakDB,"maxStreakData","leaderboardmaxstreakadded")},add:function(e,t,a,s,n){const r=this.el.sceneEl.systems.state.state;if(!r.isVictory||!r.inVR)return;const o={accuracy:r.score.accuracy,challengeId:r.challenge.id,gameMode:this.data.gameMode,[e]:t(r.score),username:this.username,difficulty:this.data.difficulty||r.challenge.difficulty,time:new Date};Be.includes(this.username.toLowerCase())||this.username.match(He)||a.add(o),this.addEventDetail[s]=o,this.el.emit(n,this.addEventDetail,!1)},fetchScores:function(e){this.fetch(e,this.scoreDB,"score",this.scores,"leaderboard")},fetchMaxStreaks:function(e){this.fetch(e,this.maxStreakDB,"maxStreak",this.maxStreaks,"leaderboardMaxStreaks")},fetch:function(e,t,a,s,n){if("ride"===this.data.gameMode)return;const r=this.el.sceneEl.systems.state.state;t.where("challengeId","==",e).where("difficulty","==",r.menuSelectedChallenge.id?r.menuSelectedChallenge.difficulty:r.challenge.difficulty).where("gameMode","==",this.data.gameMode).orderBy(a,"desc").orderBy("time","asc").limit(10).get().then(t=>{this.eventDetail.challengeId=e,s.length=0,t.empty||t.forEach(e=>s.push(e.data())),this.el.sceneEl.emit(n,this.eventDetail,!1)}).catch(e=>{console.error("[firestore]",e)})},switchToMaxStreaks:function(){this.el.sceneEl.emit("leaderboardUpdateDisplayMode","MAX_STREAK")},switchToScores:function(){this.el.sceneEl.emit("leaderboardUpdateDisplayMode","SCORE")},checkLeaderboardQualify:function(){this.checkQualify(this.scores,this.el.sceneEl.systems.state.state.score.score,e=>e.score,"leaderboardqualify")},checkMaxStreaksQualify:function(){this.checkQualify(this.maxStreaks,this.el.sceneEl.systems.state.state.score.maxCombo,e=>e.maxStreak,"leaderboardmaxstreaksqualify")},checkQualify:function(e,t,a,s){if(!AFRAME.utils.getUrlParameter("dot"))if(e.length<10)this.el.sceneEl.emit(s,e.length,!1);else for(let n=0;n<e.length;n++)if(t>a(e[n]))return void this.el.sceneEl.emit(s,n,!1)}}),window.AFRAME){const t=["leaderboard"],a=[],s=[];if(e.hot.dispose(e=>{e.needsReplace=!0,t.forEach(e=>{delete AFRAME.components[e];const t=AFRAME.scenes[0].querySelectorAll(`[${e}]`);for(let a=0;a<t.length;a++)t[a].isEntity&&(t[a].setAttribute("data-__hot-"+e,JSON.stringify(t[a].getDOMAttribute(e))),t[a].removeAttribute(e))}),a.forEach(e=>{delete AFRAME.shaders[e];const t=AFRAME.scenes[0].querySelectorAll("[material]");for(let a=0;a<t.length;a++)t[a].isEntity&&t[a].getAttribute("material").shader===e&&(t[a].setAttribute("data-__hot-material",JSON.stringify(t[a].getDOMAttribute("material"))),t[a].removeAttribute("material"))}),s.forEach(e=>{delete AFRAME.systems[e],delete AFRAME.scenes[0].systems[e]})}),e.hot.data&&e.hot.data.needsReplace){t.forEach(e=>{const t="data-__hot-"+e,a=document.querySelectorAll(`[${t}]`);for(let s=0;s<a.length;s++)a[s].setAttribute(e,JSON.parse(a[s].getAttribute(t)),!0),a[s].removeAttribute(t)});const e="data-__hot-material",a=document.querySelectorAll(`[${e}]`);for(let t=0;t<a.length;t++)a[t].setAttribute("material",JSON.parse(a[t].getAttribute(e)),!0),a[t].removeAttribute(e)}e.hot.accept()}}]);