var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,s){function i(e){try{o(n.next(e))}catch(e){s(e)}}function l(e){try{o(n["throw"](e))}catch(e){s(e)}}function o(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(i,l)}o((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,a,s,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(e){return function(t){return o([e,t])}}function o(i){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(s=i[0]&2?a["return"]:i[0]?a["throw"]||((s=a["return"])&&s.call(a),0):a.next)&&!(s=s.call(a,i[1])).done)return s;if(a=0,s)i=[i[0]&2,s.value];switch(i[0]){case 0:case 1:s=i;break;case 4:r.label++;return{value:i[1],done:false};case 5:r.label++;a=i[1];i=[0];continue;case 7:i=r.ops.pop();r.trys.pop();continue;default:if(!(s=r.trys,s=s.length>0&&s[s.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!s||i[1]>s[0]&&i[1]<s[3])){r.label=i[1];break}if(i[0]===6&&r.label<s[1]){r.label=s[1];s=i;break}if(s&&r.label<s[2]){r.label=s[2];r.ops.push(i);break}if(s[2])r.ops.pop();r.trys.pop();continue}i=t.call(e,r)}catch(e){i=[6,e];a=0}finally{n=s=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n={allRenderFn:true,cmpDidLoad:true,cmpDidUnload:false,cmpDidUpdate:false,cmpDidRender:false,cmpWillLoad:false,cmpWillUpdate:false,cmpWillRender:false,connectedCallback:false,disconnectedCallback:false,element:false,event:false,hasRenderFn:true,lifecycle:true,hostListener:false,hostListenerTargetWindow:false,hostListenerTargetDocument:false,hostListenerTargetBody:false,hostListenerTargetParent:false,hostListenerTarget:false,member:true,method:false,mode:false,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:true,propNumber:false,propString:true,propMutable:false,reflect:false,scoped:false,shadowDom:true,slot:true,slotRelocation:true,state:false,style:true,svg:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,watchCallback:false,taskQueue:true,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,hydrateClientSide:false,isDebug:false,isDev:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,cssAnnotations:true};var a="ama-gallery-stencil";var s=window;var i=document;var l={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var o=!!i.documentElement.attachShadow;var f=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var u=new WeakMap;var c=function(e){return u.get(e)};var $=e("d",function(e,t){return u.set(t.$lazyInstance$=e,t)});var v=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return u.set(e,t)}};var d=function(e,t){return t in e};var h=function(e){return console.error(e)};var m=function(e,r,n){var a=e.$lazyBundleIds$;return t.import("./"+a+".entry.js"+"").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},h)};var p=new Map;var g=s.__stencil_cssshim;var y=0;var b=false;var w=[];var S=[];var R=[];var _=function(e){return function(t){e.push(t);if(!b){b=true;l.raf(T)}}};var x=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){h(e)}}e.length=0};var N=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){h(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var T=function(){y++;x(w);var e=(l.$flags$&6)===2?performance.now()+7*Math.ceil(y*(1/22)):Infinity;N(S,e);N(R,e);if(S.length>0){R.push.apply(R,S);S.length=0}if(b=w.length+S.length+R.length>0){l.raf(T)}else{y=0}};var C=_(S);var k={};var L=function(e){return e!=null};var E=function(e){return e.toLowerCase()};var A=function(e){return["object","function"].includes(typeof e)};function j(e){return"__sc_import_"+e.replace(/\s|-/g,"_")}var P=e("c",function(){if(!(s.CSS&&s.CSS.supports&&s.CSS.supports("color","var(--c)"))){return t.import("./p-f57d4852.system.js")}return Promise.resolve()});var B=e("a",function(){return __awaiter(r,void 0,void 0,function(){var e,r,n;return __generator(this,function(l){switch(l.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(i.querySelectorAll("script")).find(function(e){return e.src.includes("/"+a+".esm.js")||e.getAttribute("data-namespace")===a});n=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,s.location.href));O(n.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-a8fc097f.system.js")];case 2:l.sent();l.label=3;case 3:return[2,n.href]}})})});var O=function(e){var t=j(a);try{s[t]=new Function("w","return import(w);")}catch(n){var r=new Map;s[t]=function(n){var a=new URL(n,e).href;var l=r.get(a);if(!l){var o=i.createElement("script");o.type="module";o.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));l=new Promise(function(e){o.onload=function(){e(s[t].m);o.remove()}});r.set(a,l);i.head.appendChild(o)}return l}}};var U="hydrated";var M=new WeakMap;var z=function(e,t){var r=p.get(e);if(f){r=r||new CSSStyleSheet;r.replace(t)}else{r=t}p.set(e,r)};var I=function(e,t,r,n){var a=W(t,r);var s=p.get(a);e=e.nodeType===11?e:i;if(s){if(typeof s==="string"){e=e.head||e;var l=M.get(e);var o=void 0;if(!l){M.set(e,l=new Set)}if(!l.has(a)){{if(g){o=g.createHostStyle(n,a,s);var f=o["s-sc"];if(f){a=f;l=null}}else{o=i.createElement("style");o.innerHTML=s}e.appendChild(o)}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([s])}}return a};var D=function(e,t,r){var n=I(o&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t.$tagName$,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var W=function(e,t){return"sc-"+e};var H=e("e",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var s=false;var i=false;var l;var o;var f=[];var u=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!A(a)){a=String(a)}if(s&&i){f[f.length-1].$text$+=a}else{f.push(s?{$flags$:0,$text$:a}:a)}i=s}}};u(r);if(t){{l=t.key||undefined}{o=t.name}{var c=t.className||t.class;if(c){t.class=typeof c!=="object"?c:Object.keys(c).filter(function(e){return c[e]}).join(" ")}}}if(typeof e==="function"){return e(t,f,F)}var $={$flags$:0,$tag$:e,$children$:f.length>0?f:null,$elm$:undefined,$attrs$:t};{$.$key$=l}{$.$name$=o}return $});var V=e("g",{});var F={forEach:function(e,t){return e.map(q).forEach(t)},map:function(e,t){return e.map(q).map(t).map(Q)}};var q=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var Q=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var G=function(e,t,r,n,a,s){if(r===n){return}if(t==="class"&&!a){{var i=K(r);var o=K(e.className).filter(function(e){return!i.includes(e)});e.className=o.concat(K(n).filter(function(e){return!o.includes(e)})).join(" ")}}else if(t==="style"){{for(var f in r){if(!n||n[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in n){if(!r||n[f]!==r[f]){if(f.includes("-")){e.style.setProperty(f,n[f])}else{e.style[f]=n[f]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!d(e,t)){if(d(e,E(t))){t=E(t.substring(2))}else{t=E(t[2])+t.substring(3)}if(r){l.rel(e,t,r,false)}if(n){l.ael(e,t,n,false)}}else{var u=d(e,t);var c=A(n);if((u||c&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!u||s&4||a)&&!c){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var K=function(e){return!e?[]:e.split(" ")};var J=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var s=e&&e.$attrs$||k;var i=t.$attrs$||k;{for(n in s){if(i[n]==null&&s[n]!=null){G(a,n,s[n],undefined,r,t.$flags$)}}}for(n in i){G(a,n,s[n],i[n],r,t.$flags$)}};var X;var Y;var Z;var ee=false;var te=false;var re=false;var ne=false;var ae=function(e,t,r,n){var a=t.$children$[r];var s=0;var l;var o;var f;if(!ee){re=true;if(a.$tag$==="slot"){if(X){n.classList.add(X+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(L(a.$text$)){a.$elm$=i.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=i.createTextNode("")}else{l=a.$elm$=i.createElement(a.$flags$&2?"slot-fb":a.$tag$);{J(null,a,ne)}if(L(X)&&l["s-si"]!==X){l.classList.add(l["s-si"]=X)}if(a.$children$){for(s=0;s<a.$children$.length;++s){o=ae(e,a,s,l);if(o){l.appendChild(o)}}}}{a.$elm$["s-hn"]=Z;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=Y;a.$elm$["s-sn"]=a.$name$||"";f=e&&e.$children$&&e.$children$[r];if(f&&f.$tag$===a.$tag$&&e.$elm$){se(e.$elm$,false)}}}return a.$elm$};var se=function(e,t){l.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==Z&&a["s-ol"]){ce(a).insertBefore(a,ue(a));a["s-ol"].remove();a["s-ol"]=undefined;re=true}if(t){se(a,t)}}l.$flags$&=~1};var ie=function(e,t,r,n,a,s){var i=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(i.shadowRoot&&E(i.tagName)===Z){i=i.shadowRoot}for(;a<=s;++a){if(n[a]){l=ae(null,r,a,e);if(l){n[a].$elm$=l;i.insertBefore(l,ue(t))}}}};var le=function(e,t,r,n){for(;t<=r;++t){if(L(e[t])){n=e[t].$elm$;me(e[t],true);{te=true;if(n["s-ol"]){n["s-ol"].remove()}else{se(n,true)}}n.remove()}}};var oe=function(e,t,r,n){var a=0;var s=0;var i=0;var l=0;var o=t.length-1;var f=t[0];var u=t[o];var c=n.length-1;var $=n[0];var v=n[c];var d;var h;while(a<=o&&s<=c){if(f==null){f=t[++a]}else if(u==null){u=t[--o]}else if($==null){$=n[++s]}else if(v==null){v=n[--c]}else if(fe(f,$)){$e(f,$);f=t[++a];$=n[++s]}else if(fe(u,v)){$e(u,v);u=t[--o];v=n[--c]}else if(fe(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){se(f.$elm$.parentNode,false)}$e(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=t[++a];v=n[--c]}else if(fe(u,$)){if(f.$tag$==="slot"||v.$tag$==="slot"){se(u.$elm$.parentNode,false)}$e(u,$);e.insertBefore(u.$elm$,f.$elm$);u=t[--o];$=n[++s]}else{i=-1;{for(l=a;l<=o;++l){if(t[l]&&L(t[l].$key$)&&t[l].$key$===$.$key$){i=l;break}}}if(i>=0){h=t[i];if(h.$tag$!==$.$tag$){d=ae(t&&t[s],r,i,e)}else{$e(h,$);t[i]=undefined;d=h.$elm$}$=n[++s]}else{d=ae(t&&t[s],r,s,e);$=n[++s]}if(d){{ce(f.$elm$).insertBefore(d,ue(f.$elm$))}}}}if(a>o){ie(e,n[c+1]==null?null:n[c+1].$elm$,r,n,s,c)}else if(s>c){le(t,a,o)}};var fe=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}return true}return false};var ue=function(e){return e&&e["s-ol"]||e};var ce=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var $e=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var s;if(!L(t.$text$)){{if(t.$tag$==="slot");else{J(e,t,ne)}}if(L(n)&&L(a)){oe(r,n,t,a)}else if(L(a)){if(L(e.$text$)){r.textContent=""}ie(r,null,t,a,0,a.length-1)}else if(L(n)){le(n,0,n.length-1)}}else if(s=r["s-cr"]){s.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var ve=function(e,t,r,n,a,s,i,l){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){i=t["s-sn"];t.hidden=false;for(s=0;s<a;s++){if(r[s]["s-hn"]!==t["s-hn"]){l=r[s].nodeType;if(i!==""){if(l===1&&i===r[s].getAttribute("slot")){t.hidden=true;break}}else{if(l===1||l===3&&r[s].textContent.trim()!==""){t.hidden=true;break}}}}}ve(t)}}};var de=[];var he=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var s=0;var i;var l;var o;var f;for(r=t.length;n<r;n++){i=t[n];if(i["s-sr"]&&(l=i["s-cr"])){o=l.parentNode.childNodes;f=i["s-sn"];for(a=o.length-1;a>=0;a--){l=o[a];if(!l["s-cn"]&&!l["s-nr"]&&l["s-hn"]!==i["s-hn"]){s=l.nodeType;if((s===3||s===8)&&f===""||s===1&&l.getAttribute("slot")===null&&f===""||s===1&&l.getAttribute("slot")===f){if(!de.some(function(e){return e.nodeToRelocate===l})){te=true;l["s-sn"]=f;de.push({slotRefNode:i,nodeToRelocate:l})}}}}}if(i.nodeType===1){he(i)}}};var me=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){me(e,t)})}};var pe=function(e){return e&&e.$tag$===V};var ge=function(e,t,r,n){var a=t.$vnode$||{$flags$:0};Z=E(e.tagName);if(pe(n)){n.$tag$=null}else{n=H(null,null,n)}n.$flags$|=4;t.$vnode$=n;n.$elm$=a.$elm$=e.shadowRoot||e;{X=e["s-sc"]}{Y=e["s-cr"];ee=o&&(r.$flags$&1)!==0;re=te=false}$e(a,n);{if(re){he(n.$elm$);for(var s=0;s<de.length;s++){var f=de[s];if(!f.nodeToRelocate["s-ol"]){var u=i.createTextNode("");u["s-nr"]=f.nodeToRelocate;f.nodeToRelocate.parentNode.insertBefore(f.nodeToRelocate["s-ol"]=u,f.nodeToRelocate)}}l.$flags$|=1;for(var s=0;s<de.length;s++){var f=de[s];var c=f.slotRefNode.parentNode;var $=f.slotRefNode.nextSibling;var u=f.nodeToRelocate["s-ol"];while(u=u.previousSibling){var v=u["s-nr"];if(v&&v){if(v["s-sn"]===f.nodeToRelocate["s-sn"]){if(c===v.parentNode){if((v=v.nextSibling)&&v&&!v["s-nr"]){$=v;break}}}}}if(!$&&c!==f.nodeToRelocate.parentNode||f.nodeToRelocate.nextSibling!==$){if(f.nodeToRelocate!==$){c.insertBefore(f.nodeToRelocate,$)}}}l.$flags$&=~1}if(te){ve(n.$elm$)}de.length=0}};var ye=function(e,t){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(n){switch(n.label){case 0:if(!(e&&e[t]))return[3,4];n.label=1;case 1:n.trys.push([1,3,,4]);return[4,e[t]()];case 2:n.sent();return[3,4];case 3:r=n.sent();h(r);return[3,4];case 4:return[2]}})})};var be=function(e,t,n,a){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(s){{t.$flags$|=16}r=t.$lazyInstance$;{C(function(){return we(e,t,n,r,a)})}return[2]})})};var we=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){D(e,r,t.$modeName$)}{{t.$flags$|=4;try{ge(e,t,r,n.render())}catch(e){h(e)}t.$flags$&=~4}}if(g){g.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}Se(e,t)};var Se=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&512)){t.$flags$|=512;{e.classList.add(U)}{ye(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){i.documentElement.classList.add(U);{setTimeout(function(){return l.$flags$|=2},999)}}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var Re=function(e){if((l.$flags$&1)===0){var t=c(e);if(g){g.removeHost(e)}var r=t.$lazyInstance$}};var _e=function(e,t){if(e!=null&&!A(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var xe=function(e,t){return c(e).$instanceValues$.get(t)};var Ne=function(e,t,r,n){var a=c(e);var s=a.$hostElement$;var i=a.$instanceValues$.get(t);var l=a.$flags$;r=_e(r,n.$members$[t][0]);if(r!==i&&(!(l&8)||i===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if((l&(4|2|16))===2){be(s,a,n,false)}}}};var Te=function(e,t,r){if(t.$members$){var a=Object.entries(t.$members$);var s=e.prototype;a.forEach(function(e){var r=e[0],a=e[1][0];if(a&31||n.state){Object.defineProperty(s,r,{get:function(){return xe(this,r)},set:function(e){Ne(this,r,e,t)},configurable:true,enumerable:true})}});if(r&1){var i=new Map;s.attributeChangedCallback=function(e,t,r){var n=i.get(e);this[n]=r===null&&typeof this[n]==="boolean"?false:r};e.observedAttributes=a.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n})}}return e};var Ce=function(e,n,a,s,i){return __awaiter(r,void 0,void 0,function(){var r,l,o;return __generator(this,function(f){switch(f.label){case 0:if(!((n.$flags$&256)===0))return[3,4];n.$flags$|=256;return[4,m(a,n,s)];case 1:i=f.sent();if(!i.isProxied){Te(i,a,2);i.isProxied=true}{n.$flags$|=8}try{new i(n)}catch(e){h(e)}{n.$flags$&=~8}ke(n.$lazyInstance$);if(!(!i.isStyleRegistered&&i.style))return[3,4];r=i.style;l=W(a.$tagName$,n.$modeName$);if(!(a.$flags$&8))return[3,3];return[4,t.import("./p-1563a874.system.js").then(function(e){return e.scopeCss(r,l,false)})];case 2:r=f.sent();f.label=3;case 3:z(l,r);i.isStyleRegistered=true;f.label=4;case 4:o=n.$ancestorComponent$;if(o&&!o["s-lr"]&&o["s-rc"]){o["s-rc"].push(function(){return Ce(e,n,a)})}else{be(e,n,a,true)}return[2]}})})};var ke=function(e){};var Le=function(e,t){if((l.$flags$&1)===0){var r=c(e);if(!(r.$flags$&1)){r.$flags$|=1;var a=void 0;if(!a){if(t.$flags$&4||t.$flags$&8){Ee(e)}}{var s=e;while(s=s.parentNode||s.host){if(s["s-init"]&&!s["s-lr"]||n.hydrateClientSide&&s.nodeType===1&&s.hasAttribute("s-id")){r.$ancestorComponent$=s;(s["s-al"]=s["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{Ce(e,r,t)}}ke(r.$lazyInstance$)}};var Ee=function(e,t){var r;{r=""}t=e["s-cr"]=i.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Ae=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=i.head;var f=s.customElements;var u=a.querySelector("meta[charset]");var $=i.createElement("style");Object.assign(l,t);l.$resourcesUrl$=new URL(t.resourcesUrl||"/",s.location.href).href;if(t.syncQueue){l.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};if(!o&&a.$flags$&1){a.$flags$|=8}var s=a.$tagName$;var i=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}v(t);if(a.$flags$&1){if(o){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){Le(this,a)};t.prototype.disconnectedCallback=function(){Re(this)};t.prototype["s-init"]=function(){var e=c(this);if(e.$lazyInstance$){Se(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){{var e=c(this);be(this,e,a,false)}};t.prototype.componentOnReady=function(){return c(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(s)&&!f.get(s)){r.push(s);f.define(s,Te(i,a,1))}})});$.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";$.setAttribute("data-styles","");a.insertBefore($,u?u.nextSibling:a.firstChild)});var je=e("f",function(e){return c(e).$hostElement$})}}});