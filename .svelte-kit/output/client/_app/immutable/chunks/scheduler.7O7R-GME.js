function L(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function G(t){return t()}function et(){return Object.create(null)}function z(t){t.forEach(G)}function F(t){return typeof t=="function"}function it(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let m;function rt(t,n){return t===n?!0:(m||(m=document.createElement("a")),m.href=n,t===m.href)}function st(t){return Object.keys(t).length===0}function M(t,...n){if(t==null){for(const i of n)i(void 0);return L}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ct(t){let n;return M(t,e=>n=e)(),n}function lt(t,n,e){t.$$.on_destroy.push(M(n,e))}function ot(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function ut(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(n.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=n.dirty[o]|r[o];return l}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,l){if(r){const s=P(n,e,i,l);t.p(s,r)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function _t(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function ht(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function dt(t){const n={};for(const e in t)n[e]=!0;return n}function mt(t){return t??""}function pt(t,n,e){return t.set(e),n}function yt(t){return t&&F(t.destroy)?t.destroy:L}let y=!1;function gt(){y=!0}function bt(){y=!1}function R(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:R(1,r,B=>n[e[B]].claim_order,u))-1;i[c]=e[a]+1;const N=a+1;e[N]=c,r=Math.max(N,r)}const l=[],s=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);o>=c;o--)s.push(n[o]);o--}for(;o>=0;o--)s.push(n[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(s[c],a)}}function W(t,n){if(y){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function J(t,n,e){t.insertBefore(n,e||null)}function K(t,n,e){y&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function j(t){return document.createElement(t)}function H(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function vt(){return T(" ")}function Et(){return T("")}function wt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Tt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function Nt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function S(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const Q=["width","height"];function kt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set&&Q.indexOf(i)===-1?t[i]=n[i]:S(t,i,n[i])}function At(t,n){for(const e in n)S(t,e,n[e])}function Lt(t){return t.dataset.svelteH}function Mt(t){let n;return{p(...e){n=e,n.forEach(i=>t.push(i))},r(){n.forEach(e=>t.splice(t.indexOf(e),1))}}}function Pt(t){return t===""?null:+t}function jt(t){return Array.from(t.childNodes)}function C(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,r=!1){C(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function D(t,n,e,i){return O(t,r=>r.nodeName===n,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];e[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(n))}function Ht(t,n,e){return D(t,n,e,j)}function St(t,n,e){return D(t,n,e,H)}function V(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>T(n),!0)}function Ct(t){return V(t," ")}function k(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return-1}function Ot(t,n){const e=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new g(n);C(t);const r=t.splice(e,i-e+1);v(r[0]),v(r[r.length-1]);const l=r.slice(1,r.length-1);if(l.length===0)return new g(n);for(const s of l)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new g(n,l)}function Dt(t,n){n=""+n,t.data!==n&&(t.data=n)}function qt(t,n){t.value=n??""}function Bt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function It(t,n,e){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===n){r.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function Gt(t,n,e){t.classList.toggle(n,!!e)}function X(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}class Y{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(n=!1){this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=H(e.nodeName):this.e=j(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)J(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(v)}}class g extends Y{l=void 0;constructor(n=!1,e){super(n),this.e=this.n=null,this.l=e}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)K(this.t,this.n[e],n)}}function zt(t,n){return new t(n)}let p;function b(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function Ft(t){d().$$.on_mount.push(t)}function Rt(t){d().$$.after_update.push(t)}function Ut(){const t=d();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const l=X(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function Wt(t,n){return d().$$.context.set(t,n),n}function Jt(t){return d().$$.context.get(t)}function Kt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],A=[];let _=[];const E=[],q=Promise.resolve();let w=!1;function Z(){w||(w=!0,q.then(tt))}function Qt(){return Z(),q}function $(t){_.push(t)}function Vt(t){E.push(t)}const x=new Set;let f=0;function tt(){if(f!==0)return;const t=p;do{try{for(;f<h.length;){const n=h[f];f++,b(n),nt(n.$$)}}catch(n){throw h.length=0,f=0,n}for(b(null),h.length=0,f=0;A.length;)A.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];x.has(e)||(x.add(e),e())}_.length=0}while(h.length);for(;E.length;)E.pop()();w=!1,x.clear(),b(t)}function nt(t){if(t.fragment!==null){t.update(),z(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach($)}}function Xt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{rt as $,z as A,Vt as B,wt as C,Ot as D,Gt as E,It as F,xt as G,g as H,qt as I,I as J,H as K,St as L,At as M,F as N,ct as O,kt as P,ht as Q,dt as R,Ut as S,_t as T,Kt as U,Wt as V,Mt as W,Jt as X,Pt as Y,yt as Z,Lt as _,vt as a,Nt as a0,Tt as a1,mt as a2,tt as a3,pt as a4,et as a5,st as a6,$ as a7,Xt as a8,p as a9,b as aa,G as ab,h as ac,Z as ad,gt as ae,bt as af,Rt as b,Ct as c,v as d,Et as e,j as f,Ht as g,jt as h,K as i,S as j,Bt as k,T as l,V as m,Dt as n,Ft as o,A as p,zt as q,ot as r,it as s,Qt as t,at as u,ft as v,ut as w,W as x,L as y,lt as z};