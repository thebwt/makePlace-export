function g(){}const ut=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function I(){return Object.create(null)}function v(t){t.forEach(Q)}function P(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Bt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ht(t,e,n){t.$$.on_destroy.push(_t(e,n))}function Ft(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let c=0;c<s;c+=1)l[c]=e.dirty[c]|r[c];return l}return e.dirty|r}return e.dirty}function Gt(t,e,n,i,r,l){if(r){const s=U(e,n,i,l);t.p(s,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Jt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Kt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Qt(t){const e={};for(const n in t)e[n]=!0;return e}function Ut(t){return t&&P(t.destroy)?t.destroy:g}const V=typeof window<"u";let dt=V?()=>window.performance.now():()=>Date.now(),W=V?t=>requestAnimationFrame(t):g;const w=new Set;function X(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&W(X)}function ht(t){let e;return w.size===0&&W(X),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let R=!1;function mt(){R=!0}function pt(){R=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,_=(r>0&&e[n[r]].claim_order<=u?r+1:yt(1,r,h=>e[n[h]].claim_order,u))-1;i[o]=n[_]+1;const a=_+1;n[a]=o,r=Math.max(a,r)}const l=[],s=[];let c=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(l.push(e[o-1]);c>=o;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);l.reverse(),s.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<s.length;o++){for(;u<l.length&&s[o].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(s[o],_)}}function $t(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=tt("style");return xt(Y(t),e),e.sheet}function xt(t,e){return $t(t.head||t,e),e.sheet}function wt(t,e){if(R){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){R&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function tt(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Xt(){return G(" ")}function Yt(){return G("")}function Zt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function te(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:et(t,i,e[i])}function ee(t,e){Object.keys(e).forEach(n=>{Et(t,n,e[n])})}function Et(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:et(t,e,n)}function kt(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){Nt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function it(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||l.push(c.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ne(t,e,n){return it(t,e,n,tt)}function ie(t,e,n){return it(t,e,n,vt)}function At(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function re(t){return At(t," ")}function se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e){t.value=e??""}function oe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function le(t,e,n){t.classList[n?"add":"remove"](e)}function rt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ue(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ae(t,e){return new t(e)}const O=new Map;let T=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:bt(e),rules:{}};return O.set(t,n),n}function J(t,e,n,i,r,l,s,c=0){const o=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=o){const $=e+(n-e)*l(y);u+=y*100+`%{${s($,1-$)}}
`}const _=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${jt(_)}_${c}`,h=Y(t),{stylesheet:f,rules:d}=O.get(h)||Ct(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,T+=1,a}function St(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),T-=r,T||Dt())}function Dt(){W(()=>{T||(O.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Z(e)}),O.clear())})}let N;function k(t){N=t}function A(){if(!N)throw new Error("Function called outside component initialization");return N}function fe(t){A().$$.on_mount.push(t)}function _e(t){A().$$.after_update.push(t)}function de(){const t=A();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=rt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function he(t,e){return A().$$.context.set(t,e),e}function me(t){return A().$$.context.get(t)}function pe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const x=[],K=[],S=[],H=[],st=Promise.resolve();let F=!1;function ct(){F||(F=!0,st.then(ot))}function ye(){return ct(),st}function M(t){S.push(t)}function ge(t){H.push(t)}const z=new Set;let b=0;function ot(){if(b!==0)return;const t=N;do{try{for(;b<x.length;){const e=x[b];b++,k(e),Ot(e.$$)}}catch(e){throw x.length=0,b=0,e}for(k(null),x.length=0,b=0;K.length;)K.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];z.has(n)||(z.add(n),n())}S.length=0}while(x.length);for(;H.length;)H.pop()();F=!1,z.clear(),k(t)}function Ot(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let E;function Tt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function B(t,e,n){t.dispatchEvent(rt(`${e?"intro":"outro"}${n}`))}const D=new Set;let p;function $e(){p={r:0,c:[],p}}function be(){p.r||v(p.c),p=p.p}function Mt(t,e){t&&t.i&&(D.delete(t),t.i(e))}function xe(t,e,n,i){if(t&&t.o){if(D.has(t))return;D.add(t),p.c.push(()=>{D.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Pt={duration:0};function we(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),s=i?0:1,c=null,o=null,u=null;function _(){u&&St(t,u)}function a(f,d){const m=f.b-s;return d*=Math.abs(m),{a:s,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=ut,tick:$=g,css:q}=l||Pt,L={start:dt()+d,b:f};f||(L.group=p,p.r+=1),c||o?o=L:(q&&(_(),u=J(t,s,f,m,d,y,q)),f&&$(0,1),c=a(L,m),M(()=>B(t,f,"start")),ht(j=>{if(o&&j>o.start&&(c=a(o,m),o=null,B(t,c.b,"start"),q&&(_(),u=J(t,s,c.b,c.duration,0,y,l.css))),c){if(j>=c.end)$(s=c.b,1-s),B(t,c.b,"end"),o||(c.b?_():--c.group.r||v(c.group.c)),c=null;else if(j>=c.start){const lt=j-c.start;s=c.a+c.d*y(lt/c.duration),$(s,1-s)}}return!!(c||o)}))}return{run(f){P(l)?Tt().then(()=>{l=l(r),h(f)}):h(f)},end(){_(),c=o=null}}}function ve(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],c=e[l];if(c){for(const o in s)o in c||(i[o]=1);for(const o in c)r[o]||(n[o]=c[o],r[o]=1);t[l]=c}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ee(t){return typeof t=="object"&&t!==null?t:{}}function ke(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ne(t){t&&t.c()}function Ae(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||M(()=>{const s=t.$$.on_mount.map(Q).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),l.forEach(M)}function qt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(x.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function je(t,e,n,i,r,l,s,c=[-1]){const o=N;k(t);const u=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:I(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};s&&s(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return u.ctx&&r(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),_&&Lt(t,a)),h}):[],u.update(),_=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){mt();const a=kt(e.target);u.fragment&&u.fragment.l(a),a.forEach(Z)}else u.fragment&&u.fragment.c();e.intro&&Mt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),pt(),ot()}k(o)}class Ce{$destroy(){qt(this,1),this.$destroy=g}$on(e,n){if(!P(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ht as $,qt as A,ye as B,g as C,Ft as D,at as E,ue as F,te as G,wt as H,Zt as I,Gt as J,It as K,Wt as L,ve as M,Kt as N,Jt as O,vt as P,ie as Q,Ee as R,Ce as S,he as T,pe as U,ee as V,Ut as W,P as X,v as Y,M as Z,we as _,Xt as a,me as a0,Qt as a1,de as a2,le as a3,Bt as a4,ce as a5,ke as a6,ge as a7,Vt as b,re as c,be as d,Yt as e,Mt as f,$e as g,Z as h,je as i,_e as j,tt as k,ne as l,kt as m,et as n,fe as o,oe as p,G as q,At as r,zt as s,xe as t,se as u,K as v,ae as w,Ne as x,Ae as y,Rt as z};
