function B(){}function D(t,n){for(const e in n)t[e]=n[e];return t}function I(t){return t()}function tt(){return Object.create(null)}function O(t){t.forEach(I)}function nt(t){return typeof t=="function"}function et(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let m;function it(t,n){return t===n?!0:(m||(m=document.createElement("a")),m.href=n,t===m.href)}function lt(t){return Object.keys(t).length===0}function G(t,...n){if(t==null){for(const i of n)i(void 0);return B}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ct(t,n,e){t.$$.on_destroy.push(G(n,e))}function rt(t,n,e,i){if(t){const l=L(t,n,e,i);return t[0](l)}}function L(t,n,e,i){return t[1]&&i?D(e.ctx.slice(),t[1](i(n))):e.ctx}function st(t,n,e,i){if(t[2]&&i){const l=t[2](i(e));if(n.dirty===void 0)return l;if(typeof l=="object"){const s=[],c=Math.max(n.dirty.length,l.length);for(let o=0;o<c;o+=1)s[o]=n.dirty[o]|l[o];return s}return n.dirty|l}return n.dirty}function ot(t,n,e,i,l,s){if(l){const c=L(n,e,i,s);t.p(c,l)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ut(t){return t??""}function ft(t,n,e){return t.set(e),n}let g=!1;function _t(){g=!0}function dt(){g=!1}function z(t,n,e,i){for(;t<n;){const l=t+(n-t>>1);e(l)<=i?t=l+1:n=l}return t}function F(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<n.length;a++){const u=n[a];u.claim_order!==void 0&&r.push(u)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let l=0;for(let r=0;r<n.length;r++){const a=n[r].claim_order,u=(l>0&&n[e[l]].claim_order<=a?l+1:z(1,l,q=>n[e[q]].claim_order,a))-1;i[r]=e[u]+1;const N=u+1;e[N]=r,l=Math.max(N,l)}const s=[],c=[];let o=n.length-1;for(let r=e[l]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);o>=r;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);s.reverse(),c.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<c.length;r++){for(;a<s.length&&c[r].claim_order>=s[a].claim_order;)a++;const u=a<s.length?s[a]:null;t.insertBefore(c[r],u)}}function R(t,n){if(g){for(F(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function U(t,n,e){t.insertBefore(n,e||null)}function W(t,n,e){g&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function M(t){return document.createElement(t)}function H(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function mt(){return w(" ")}function pt(){return w("")}function gt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function yt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function J(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function xt(t,n){for(const e in n)J(t,e,n[e])}function Et(t){return t.dataset.svelteH}function vt(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,n,e,i,l=!1){P(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const r=e(o);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const r=e(o);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function C(t,n,e,i){return j(t,l=>l.nodeName===n,l=>{const s=[];for(let c=0;c<l.attributes.length;c++){const o=l.attributes[c];e[o.name]||s.push(o.name)}s.forEach(c=>l.removeAttribute(c))},()=>i(n))}function Tt(t,n,e){return C(t,n,e,M)}function wt(t,n,e){return C(t,n,e,H)}function K(t,n){return j(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>w(n),!0)}function Nt(t){return K(t," ")}function k(t,n,e){for(let i=e;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===n)return i}return-1}function kt(t,n){const e=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new b(n);P(t);const l=t.splice(e,i-e+1);E(l[0]),E(l[l.length-1]);const s=l.slice(1,l.length-1);if(s.length===0)return new b(n);for(const c of s)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(n,s)}function At(t,n){n=""+n,t.data!==n&&(t.data=n)}function Lt(t,n){t.value=n??""}function Mt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Ht(t,n,e){for(let i=0;i<t.options.length;i+=1){const l=t.options[i];if(l.__value===n){l.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function Pt(t,n,e){t.classList.toggle(n,!!e)}function Q(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}class V{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(n=!1){this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=H(e.nodeName):this.e=M(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)U(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(E)}}class b extends V{l=void 0;constructor(n=!1,e){super(n),this.e=this.n=null,this.l=e}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)W(this.t,this.n[e],n)}}function jt(t,n){return new t(n)}let p;function y(t){p=t}function h(){if(!p)throw new Error("Function called outside component initialization");return p}function Ct(t){h().$$.on_mount.push(t)}function St(t){h().$$.after_update.push(t)}function qt(){const t=h();return(n,e,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[n];if(l){const s=Q(n,e,{cancelable:i});return l.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}function Bt(t,n){return h().$$.context.set(t,n),n}function Dt(t){return h().$$.context.get(t)}function It(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],A=[];let _=[];const v=[],S=Promise.resolve();let T=!1;function X(){T||(T=!0,S.then(Z))}function Ot(){return X(),S}function Y(t){_.push(t)}function Gt(t){v.push(t)}const x=new Set;let f=0;function Z(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const n=d[f];f++,y(n),$(n.$$)}}catch(n){throw d.length=0,f=0,n}for(y(null),d.length=0,f=0;A.length;)A.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];x.has(e)||(x.add(e),e())}_.length=0}while(d.length);for(;v.length;)v.pop()();T=!1,x.clear(),y(t)}function $(t){if(t.fragment!==null){t.update(),O(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Y)}}function zt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{Y as $,O as A,Gt as B,gt as C,kt as D,Pt as E,Ht as F,ht as G,b as H,Lt as I,D as J,H as K,wt as L,xt as M,nt as N,Dt as O,Et as P,it as Q,yt as R,bt as S,It as T,ut as U,Z as V,qt as W,Bt as X,ft as Y,tt as Z,lt as _,mt as a,zt as a0,p as a1,y as a2,I as a3,d as a4,X as a5,_t as a6,dt as a7,St as b,Nt as c,E as d,pt as e,M as f,Tt as g,vt as h,W as i,J as j,Mt as k,w as l,K as m,At as n,Ct as o,A as p,jt as q,rt as r,et as s,Ot as t,ot as u,at as v,st as w,R as x,B as y,ct as z};