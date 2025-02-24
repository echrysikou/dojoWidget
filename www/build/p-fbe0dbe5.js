const e="taktakwidget";const t={allRenderFn:true,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,cmpDidLoad:false,cmpDidRender:false,cmpDidUnload:false,cmpDidUpdate:false,cmpShouldUpdate:false,cmpWillLoad:true,cmpWillRender:false,cmpWillUpdate:false,connectedCallback:false,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:false,element:false,event:false,experimentalScopedSlotChanges:false,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:false,hostListenerTarget:false,hostListenerTargetBody:false,hostListenerTargetDocument:false,hostListenerTargetParent:false,hostListenerTargetWindow:false,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,hydratedSelectorName:"hydrated",initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:false,mode:false,observeAttribute:true,profile:false,prop:true,propBoolean:false,propMutable:true,propNumber:false,propString:true,reflect:true,scoped:false,scopedSlotTextContentFix:false,scriptDataOpts:false,shadowDelegatesFocus:false,shadowDom:true,slot:false,slotChildNodesFix:false,slotRelocation:false,state:true,style:true,svg:false,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:false,vdomKey:true,vdomListener:true,vdomPropOrAttr:true,vdomRef:false,vdomRender:true,vdomStyle:true,vdomText:true,vdomXlink:false,watchCallback:true};const n={API_URL:"https://services.taktak.atc.gr/api/v1",PLATFORM_URL:"https://platform.dev.taktak.atc.gr",STRIPE_PUBLISHABLE_KEY:"pk_test_51PbI26HsEMJqyycKszbjCmMmcxLbTZrgFsIp2PIemUfWWaPfcM17teJZzE20XXVxZgPnaI1jdBW328YohTheq3Tt00wcDnEbpn",CDN_PATH:"https://echrysikou.github.io/dojoWidget/dist"};var s=Object.defineProperty;var l=(e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:true})};var r=new WeakMap;var o=e=>r.get(e);var a=(e,t)=>r.set(t.t=e,t);var i=(e,t)=>{const n={l:0,$hostElement$:e,o:t,i:new Map};{n.u=new Promise((e=>n.v=e));e["s-p"]=[];e["s-rc"]=[]}return r.set(e,n)};var f=(e,t)=>t in e;var c=(e,t)=>(0,console.error)(e,t);var u=new Map;var v=(e,t,n)=>{const s=e.p.replace(/-/g,"_");const l=e.h;if(!l){return void 0}const r=u.get(l);if(r){return r[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((e=>{{u.set(l,e)}return e[s]}),c)};var d=new Map;var p="{visibility:hidden}.hydrated{visibility:inherit}";var h="slot-fb{display:contents}slot-fb[hidden]{display:none}";var m=typeof window!=="undefined"?window:{};var y=m.document||{head:{}};var b={l:0,m:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)};var w=e=>Promise.resolve(e);var g=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();var S=false;var $=[];var k=[];var C=(e,t)=>n=>{e.push(n);if(!S){S=true;if(t&&b.l&4){L(T)}else{b.raf(T)}}};var E=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){c(e)}}e.length=0};var T=()=>{E($);{E(k);if(S=$.length>0){b.raf(T)}}};var L=e=>w().then(e);var j=C(k,true);var x={};var P=e=>e!=null;var M=e=>{e=typeof e;return e==="object"||e==="function"};function O(e){var t,n,s;return(s=(n=(t=e.head)==null?void 0:t.querySelector('meta[name="csp-nonce"]'))==null?void 0:n.getAttribute("content"))!=null?s:void 0}var D={};l(D,{err:()=>A,map:()=>F,ok:()=>R,unwrap:()=>U,unwrapErr:()=>W});var R=e=>({isOk:true,isErr:false,value:e});var A=e=>({isOk:false,isErr:true,value:e});function F(e,t){if(e.isOk){const n=t(e.value);if(n instanceof Promise){return n.then((e=>R(e)))}else{return R(n)}}if(e.isErr){const t=e.value;return A(t)}throw"should never get here"}var U=e=>{if(e.isOk){return e.value}else{throw e.value}};var W=e=>{if(e.isErr){return e.value}else{throw e.value}};var N=(e,t="")=>{{return()=>{}}};var H=(e,t)=>{{return()=>{}}};var I=(e,t,...n)=>{let s=null;let l=null;let r=false;let o=false;const a=[];const i=t=>{for(let n=0;n<t.length;n++){s=t[n];if(Array.isArray(s)){i(s)}else if(s!=null&&typeof s!=="boolean"){if(r=typeof e!=="function"&&!M(s)){s=String(s)}if(r&&o){a[a.length-1].S+=s}else{a.push(r?_(null,s):s)}o=r}}};i(n);if(t){if(t.key){l=t.key}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}const f=_(e,null);f.$=t;if(a.length>0){f.k=a}{f.C=l}return f};var _=(e,t)=>{const n={l:0,T:e,S:t,L:null,k:null};{n.$=null}{n.C=null}return n};var B={};var z=e=>e&&e.T===B;var q=(e,t)=>{if(e!=null&&!M(e)){if(t&1){return String(e)}return e}return e};var K=(e,t,n)=>{const s=b.ce(t,n);e.dispatchEvent(s);return s};var X=new WeakMap;var Z=(e,t,n)=>{let s=d.get(e);if(g&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=t}else{s.replaceSync(t)}}else{s=t}d.set(e,s)};var J=(e,t,n)=>{var s;const l=V(t);const r=d.get(l);e=e.nodeType===11?e:y;if(r){if(typeof r==="string"){e=e.head||e;let n=X.get(e);let o;if(!n){X.set(e,n=new Set)}if(!n.has(l)){{o=y.createElement("style");o.innerHTML=r;const n=(s=b.j)!=null?s:O(y);if(n!=null){o.setAttribute("nonce",n)}if(!(t.l&1)){if(e.nodeName==="HEAD"){const t=e.querySelectorAll("link[rel=preconnect]");const n=t.length>0?t[t.length-1].nextSibling:document.querySelector("style");e.insertBefore(o,n)}else if("host"in e){e.prepend(o)}else{e.append(o)}}if(t.l&1&&e.nodeName!=="HEAD"){e.insertBefore(o,null)}}if(t.l&4){o.innerHTML+=h}if(n){n.add(l)}}}else if(!e.adoptedStyleSheets.includes(r)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]}}return l};var Q=e=>{const t=e.o;const n=e.$hostElement$;const s=t.l;const l=N("attachStyles",t.p);const r=J(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);if(s&10&&s&2){n["s-sc"]=r;n.classList.add(r+"-h")}l()};var V=(e,t)=>"sc-"+e.p;var Y=(e,t,n,s,l,r)=>{if(n!==s){let o=f(e,t);let a=t.toLowerCase();if(t==="class"){const t=e.classList;const l=ee(n);const r=ee(s);t.remove(...l.filter((e=>e&&!r.includes(e))));t.add(...r.filter((e=>e&&!l.includes(e))))}else if(t==="style"){{for(const t in n){if(!s||s[t]==null){if(t.includes("-")){e.style.removeProperty(t)}else{e.style[t]=""}}}}for(const t in s){if(!n||s[t]!==n[t]){if(t.includes("-")){e.style.setProperty(t,s[t])}else{e.style[t]=s[t]}}}}else if(t==="key");else if(!o&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(f(m,a)){t=a.slice(2)}else{t=a[2]+t.slice(3)}if(n||s){const l=t.endsWith(te);t=t.replace(ne,"");if(n){b.rel(e,t,n,l)}if(s){b.ael(e,t,s,l)}}}else{const a=M(s);if((o||a&&s!==null)&&!l){try{if(!e.tagName.includes("-")){const l=s==null?"":s;if(t==="list"){o=false}else if(n==null||e[t]!=l){if(typeof e.__lookupSetter__(t)==="function"){e[t]=l}else{e.setAttribute(t,l)}}}else{e[t]=s}}catch(e){}}if(s==null||s===false){if(s!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!o||r&4||l)&&!a){s=s===true?"":s;{e.setAttribute(t,s)}}}}};var G=/\s/;var ee=e=>!e?[]:e.split(G);var te="Capture";var ne=new RegExp(te+"$");var se=(e,t,n)=>{const s=t.L.nodeType===11&&t.L.host?t.L.host:t.L;const l=e&&e.$||x;const r=t.$||x;{for(const e of le(Object.keys(l))){if(!(e in r)){Y(s,e,l[e],void 0,n,t.l)}}}for(const e of le(Object.keys(r))){Y(s,e,l[e],r[e],n,t.l)}};function le(e){return e.includes("ref")?[...e.filter((e=>e!=="ref")),"ref"]:e}var re;var oe;var ae=false;var ie=false;var fe=(e,n,s,l)=>{const r=n.k[s];let o=0;let a;let i;if(r.S!==null){a=r.L=y.createTextNode(r.S)}else{a=r.L=y.createElement(!ae&&t.slotRelocation&&r.l&2?"slot-fb":r.T);{se(null,r,ie)}const n=a.getRootNode();const s=!n.querySelector("body");if(!s&&t.scoped&&P(re)&&a["s-si"]!==re){a.classList.add(a["s-si"]=re)}if(r.k){for(o=0;o<r.k.length;++o){i=fe(e,r,o);if(i){a.appendChild(i)}}}}a["s-hn"]=oe;return a};var ce=(e,t,n,s,l,r)=>{let o=e;let a;if(o.shadowRoot&&o.tagName===oe){o=o.shadowRoot}for(;l<=r;++l){if(s[l]){a=fe(null,n,l);if(a){s[l].L=a;he(o,a,t)}}}};var ue=(e,t,n)=>{for(let s=t;s<=n;++s){const t=e[s];if(t){const e=t.L;if(e){e.remove()}}}};var ve=(e,t,n,s,l=false)=>{let r=0;let o=0;let a=0;let i=0;let f=t.length-1;let c=t[0];let u=t[f];let v=s.length-1;let d=s[0];let p=s[v];let h;let m;while(r<=f&&o<=v){if(c==null){c=t[++r]}else if(u==null){u=t[--f]}else if(d==null){d=s[++o]}else if(p==null){p=s[--v]}else if(de(c,d,l)){pe(c,d,l);c=t[++r];d=s[++o]}else if(de(u,p,l)){pe(u,p,l);u=t[--f];p=s[--v]}else if(de(c,p,l)){pe(c,p,l);he(e,c.L,u.L.nextSibling);c=t[++r];p=s[--v]}else if(de(u,d,l)){pe(u,d,l);he(e,u.L,c.L);u=t[--f];d=s[++o]}else{a=-1;{for(i=r;i<=f;++i){if(t[i]&&t[i].C!==null&&t[i].C===d.C){a=i;break}}}if(a>=0){m=t[a];if(m.T!==d.T){h=fe(t&&t[o],n,a)}else{pe(m,d,l);t[a]=void 0;h=m.L}d=s[++o]}else{h=fe(t&&t[o],n,o);d=s[++o]}if(h){{he(c.L.parentNode,h,c.L)}}}}if(r>f){ce(e,s[v+1]==null?null:s[v+1].L,n,s,o,v)}else if(o>v){ue(t,r,f)}};var de=(e,t,n=false)=>{if(e.T===t.T){if(!n){return e.C===t.C}return true}return false};var pe=(e,n,s=false)=>{const l=n.L=e.L;const r=e.k;const o=n.k;const a=n.S;if(a===null){{{se(e,n,ie)}}if(r!==null&&o!==null){ve(l,r,n,o,s)}else if(o!==null){if(e.S!==null){l.textContent=""}ce(l,null,n,o,0,o.length-1)}else if(!s&&t.updatable&&r!==null){ue(r,0,r.length-1)}}else if(e.S!==a){l.data=a}};var he=(e,t,n)=>{const s=e==null?void 0:e.insertBefore(t,n);return s};var me=(e,t,n=false)=>{const s=e.$hostElement$;const l=e.o;const r=e.P||_(null,null);const o=z(t)?t:I(null,null,t);oe=s.tagName;if(l.M){o.$=o.$||{};l.M.map((([e,t])=>o.$[t]=s[e]))}if(n&&o.$){for(const e of Object.keys(o.$)){if(s.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){o.$[e]=s[e]}}}o.T=null;o.l|=4;e.P=o;o.L=r.L=s.shadowRoot||s;{re=s["s-sc"]}ae=(l.l&1)!==0;pe(r,o,n)};var ye=(e,t)=>{if(t&&!e.O&&t["s-p"]){t["s-p"].push(new Promise((t=>e.O=t)))}};var be=(e,t)=>{{e.l|=16}if(e.l&4){e.l|=512;return}ye(e,e.D);const n=()=>we(e,t);return j(n)};var we=(e,t)=>{const n=e.$hostElement$;const s=N("scheduleUpdate",e.o.p);const l=e.t;if(!l){throw new Error(`Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`)}let r;if(t){{r=xe(l,"componentWillLoad")}}s();return ge(r,(()=>$e(e,l,t)))};var ge=(e,t)=>Se(e)?e.then(t).catch((e=>{console.error(e);t()})):t();var Se=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";var $e=async(e,t,n)=>{var s;const l=e.$hostElement$;const r=N("update",e.o.p);const o=l["s-rc"];if(n){Q(e)}const a=N("render",e.o.p);{Ce(e,t,l,n)}if(o){o.map((e=>e()));l["s-rc"]=void 0}a();r();{const t=(s=l["s-p"])!=null?s:[];const n=()=>Te(e);if(t.length===0){n()}else{Promise.all(t).then(n);e.l|=4;t.length=0}}};var ke=null;var Ce=(e,t,n,s)=>{try{ke=t;t=t.render();{e.l&=~16}{e.l|=2}{{{me(e,t,s)}}}}catch(t){c(t,e.$hostElement$)}ke=null;return null};var Ee=()=>ke;var Te=e=>{const t=e.o.p;const n=e.$hostElement$;const s=N("postUpdate",t);const l=e.D;if(!(e.l&64)){e.l|=64;{Pe(n)}s();{e.v(n);if(!l){je()}}}else{s()}{if(e.O){e.O();e.O=void 0}if(e.l&512){L((()=>be(e,false)))}e.l&=~(4|512)}};var Le=e=>{{const t=o(e);const n=t.$hostElement$.isConnected;if(n&&(t.l&(2|16))===2){be(t,false)}return n}};var je=t=>{{Pe(y.documentElement)}L((()=>K(m,"appload",{detail:{namespace:e}})))};var xe=(e,t,n)=>{if(e&&e[t]){try{return e[t](n)}catch(e){c(e)}}return void 0};var Pe=e=>{var n;return e.classList.add((n=t.hydratedSelectorName)!=null?n:"hydrated")};var Me=(e,t)=>o(e).i.get(t);var Oe=(e,t,n,s)=>{const l=o(e);if(!l){throw new Error(`Couldn't find host element for "${s.p}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`)}const r=l.$hostElement$;const a=l.i.get(t);const i=l.l;const f=l.t;n=q(n,s.R[t][0]);const u=Number.isNaN(a)&&Number.isNaN(n);const v=n!==a&&!u;if((!(i&8)||a===void 0)&&v){l.i.set(t,n);if(f){if(s.A&&i&128){const e=s.A[t];if(e){e.map((e=>{try{f[e](n,a,t)}catch(e){c(e,r)}}))}}if((i&(2|16))===2){be(l,false)}}}};var De=(e,t,n)=>{var s,l;const r=e.prototype;if(t.R||(t.A||e.watchers)){if(e.watchers&&!t.A){t.A=e.watchers}const a=Object.entries((s=t.R)!=null?s:{});a.map((([e,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(r,e,{get(){return Me(this,e)},set(n){Oe(this,e,n,t)},configurable:true,enumerable:true})}}));if(n&1){const n=new Map;r.attributeChangedCallback=function(e,s,l){b.jmp((()=>{var a;const i=n.get(e);if(this.hasOwnProperty(i)){l=this[i];delete this[i]}else if(r.hasOwnProperty(i)&&typeof this[i]==="number"&&this[i]==l){return}else if(i==null){const n=o(this);const r=n==null?void 0:n.l;if(r&&!(r&8)&&r&128&&l!==s){const r=n.t;const o=(a=t.A)==null?void 0:a[e];o==null?void 0:o.forEach((t=>{if(r[t]!=null){r[t].call(r,l,s,e)}}))}return}this[i]=l===null&&typeof this[i]==="boolean"?false:l}))};e.observedAttributes=Array.from(new Set([...Object.keys((l=t.A)!=null?l:{}),...a.filter((([e,t])=>t[0]&15)).map((([e,s])=>{var l;const r=s[1]||e;n.set(r,e);if(s[0]&512){(l=t.M)==null?void 0:l.push([e,r])}return r}))]))}}return e};var Re=async(e,t,n,s)=>{let l;if((t.l&32)===0){t.l|=32;const s=n.h;if(s){const e=v(n);if(e&&"then"in e){const t=H();l=await e;t()}else{l=e}if(!l){throw new Error(`Constructor for "${n.p}#${t.F}" was not found`)}if(!l.isProxied){{n.A=l.watchers}De(l,n,2);l.isProxied=true}const s=N("createInstance",n.p);{t.l|=8}try{new l(t)}catch(e){c(e)}{t.l&=~8}{t.l|=128}s()}else{l=e.constructor;const n=e.localName;customElements.whenDefined(n).then((()=>t.l|=128))}if(l&&l.style){let e;if(typeof l.style==="string"){e=l.style}const t=V(n);if(!d.has(t)){const s=N("registerStyles",n.p);Z(t,e,!!(n.l&1));s()}}}const r=t.D;const o=()=>be(t,true);if(r&&r["s-rc"]){r["s-rc"].push(o)}else{o()}};var Ae=e=>{};var Fe=e=>{if((b.l&1)===0){const t=o(e);const n=t.o;const s=N("connectedCallback",n.p);if(!(t.l&1)){t.l|=1;{let n=e;while(n=n.parentNode||n.host){if(n["s-p"]){ye(t,t.D=n);break}}}if(n.R){Object.entries(n.R).map((([t,[n]])=>{if(n&31&&e.hasOwnProperty(t)){const n=e[t];delete e[t];e[t]=n}}))}{Re(e,t,n)}}else{if(t==null?void 0:t.t);else if(t==null?void 0:t.u){t.u.then((()=>Ae()))}}s()}};var Ue=e=>{};var We=async e=>{if((b.l&1)===0){const t=o(e);if(t==null?void 0:t.t);else if(t==null?void 0:t.u){t.u.then((()=>Ue()))}}};var Ne=(e,t={})=>{var n;const s=N();const l=[];const r=t.exclude||[];const a=m.customElements;const f=y.head;const c=f.querySelector("meta[charset]");const u=y.createElement("style");const v=[];let d;let w=true;Object.assign(b,t);b.m=new URL(t.resourcesUrl||"./",y.baseURI).href;let g=false;e.map((e=>{e[1].map((t=>{var n;const s={l:t[0],p:t[1],R:t[2],U:t[3]};if(s.l&4){g=true}{s.R=t[2]}{s.M=[]}{s.A=(n=t[4])!=null?n:{}}const f=s.p;const c=class extends HTMLElement{constructor(e){super(e);this.hasRegisteredEventListeners=false;e=this;i(e,s);if(s.l&1){{if(!e.shadowRoot){{e.attachShadow({mode:"open"})}}else{if(e.shadowRoot.mode!=="open"){throw new Error(`Unable to re-use existing shadow root for ${s.p}! Mode is set to ${e.shadowRoot.mode} but Stencil only supports open shadow roots.`)}}}}}connectedCallback(){o(this);if(!this.hasRegisteredEventListeners){this.hasRegisteredEventListeners=true}if(d){clearTimeout(d);d=null}if(w){v.push(this)}else{b.jmp((()=>Fe(this)))}}disconnectedCallback(){b.jmp((()=>We(this)))}componentOnReady(){return o(this).u}};s.h=e[0];if(!r.includes(f)&&!a.get(f)){l.push(f);a.define(f,De(c,s,1))}}))}));if(l.length>0){if(g){u.textContent+=h}{u.textContent+=l.sort()+p}if(u.innerHTML.length){u.setAttribute("data-styles","");const e=(n=b.j)!=null?n:O(y);if(e!=null){u.setAttribute("nonce",e)}f.insertBefore(u,c?c.nextSibling:f.firstChild)}}w=false;if(v.length){v.map((e=>e.connectedCallback()))}else{{b.jmp((()=>d=setTimeout(je,30)))}}s()};var He=e=>b.j=e;export{n as E,B as H,Ne as b,Le as f,Ee as g,I as h,w as p,a as r,He as s};
//# sourceMappingURL=p-fbe0dbe5.js.map