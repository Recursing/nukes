(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function A(){}function re(e){return e()}function V(){return Object.create(null)}function P(e){e.forEach(re)}function ae(e){return typeof e=="function"}function fe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let I;function X(e,t){return I||(I=document.createElement("a")),I.href=t,e===I.href}function de(e){return Object.keys(e).length===0}function o(e,t){e.appendChild(t)}function ie(e,t,n){e.insertBefore(t,n||null)}function K(e){e.parentNode&&e.parentNode.removeChild(e)}function me(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function w(){return S(" ")}function Y(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function he(e){return Array.from(e.childNodes)}function C(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Z(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let M;function T(e){M=e}function pe(){if(!M)throw new Error("Function called outside component initialization");return M}function _e(e){pe().$$.on_mount.push(e)}const k=[],ee=[],F=[],te=[],ge=Promise.resolve();let H=!1;function ye(){H||(H=!0,ge.then(oe))}function x(e){F.push(e)}const B=new Set;let v=0;function oe(){if(v!==0)return;const e=M;do{try{for(;v<k.length;){const t=k[v];v++,T(t),be(t.$$)}}catch(t){throw k.length=0,v=0,t}for(T(null),k.length=0,v=0;ee.length;)ee.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];B.has(n)||(B.add(n),n())}F.length=0}while(k.length);for(;te.length;)te.pop()();H=!1,B.clear(),T(e)}function be(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const we=new Set;function ve(e,t){e&&e.i&&(we.delete(e),e.i(t))}function ke(e,t,n,r){const{fragment:l,after_update:i}=e.$$;l&&l.m(t,n),r||x(()=>{const c=e.$$.on_mount.map(re).filter(ae);e.$$.on_destroy?e.$$.on_destroy.push(...c):P(c),e.$$.on_mount=[]}),i.forEach(x)}function $e(e,t){const n=e.$$;n.fragment!==null&&(P(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function De(e,t){e.$$.dirty[0]===-1&&(k.push(e),ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Le(e,t,n,r,l,i,c,_=[-1]){const h=M;T(e);const a=e.$$={fragment:null,ctx:[],props:i,update:A,not_equal:l,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:V(),dirty:_,skip_bound:!1,root:t.target||h.$$.root};c&&c(a.root);let g=!1;if(a.ctx=n?n(e,t.props||{},(u,f,...s)=>{const y=s.length?s[0]:f;return a.ctx&&l(a.ctx[u],a.ctx[u]=y)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](y),g&&De(e,u)),f}):[],a.update(),g=!0,P(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const u=he(t.target);a.fragment&&a.fragment.l(u),u.forEach(K)}else a.fragment&&a.fragment.c();t.intro&&ve(e.$$.fragment),ke(e,t.target,t.anchor,t.customElement),oe()}T(h)}class Ee{$destroy(){$e(this,1),this.$destroy=A}$on(t,n){if(!ae(n))return A;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!de(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(e){return e==null?void 0:e.toLocaleString(void 0,{style:"percent",maximumFractionDigits:2})}async function se(e){return await(await fetch(e)).json()}async function Se(){const t=["https://manifold.markets/jack/will-a-nuclear-weapon-detonate-in-n-6edbcd23a9f1","https://manifold.markets/AndyMartin/will-a-nuclear-weapon-be-launched-i-015e44ed91f5","https://manifold.markets/AmmonLam/will-a-nuclear-weapon-cause-over-10"].map(async n=>{const r=n.split("/").pop(),l=await se("https://manifold.markets/api/v0/slug/"+r);return l.lastUpdatedTime,{url:n,title:"Manifold: "+l.question,probability:J(l.probability),embed_url:n.replace("manifold.markets/","manifold.markets/embed/"),close_time:l.closeTime,last_activity_time:l.lastUpdatedTime}});return Promise.all(t)}async function Te(){return(await se("https://large-goose-21.deno.dev")).map(n=>{var r,l,i;return{url:`https://www.metaculus.com${n.page_url}`,title:"Metaculus: "+n.title_short,probability:(n.metaculus_prediction?J((r=n.metaculus_prediction)==null?void 0:r.full)+" (metaculus), ":"")+(J((i=(l=n.community_prediction)==null?void 0:l.full)==null?void 0:i.q2)+" (community)"),embed_url:`https://www.metaculus.com/questions/embed/${n.id}`,close_time:new Date(n.close_time).getTime(),last_activity_time:new Date(n.last_activity_time).getTime()}})}async function Ae(){const e=await Se(),t=await Te();return[...e,...t]}function ne(e,t,n){const r=e.slice();return r[3]=t[n],r[4]=t,r[5]=n,r}function le(e){let t,n,r,l,i=e[3].title+"",c,_,h,a,g,u,f,s,y=e[3].probability+"",d,$,D,q=new Date(e[3].close_time).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"2-digit"})+"",z,N,R,L,O=new Date(e[3].last_activity_time).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"2-digit"})+"",U,j,G,W,Q;function ce(){return e[1](e[3],e[4],e[5])}function ue(){return e[2](e[3],e[4],e[5])}return{c(){t=p("tr"),n=p("td"),r=p("p"),l=p("a"),c=S(i),h=w(),a=p("iframe"),f=w(),s=p("td"),d=S(y),$=w(),D=p("td"),z=S(q),R=w(),L=p("td"),U=S(O),G=w(),m(l,"href",_=e[3].url),Z(a,"display",e[3].active?"block":"none"),X(a.src,g=e[3].embed_url)||m(a,"src",g),m(a,"title",u=e[3].title),m(a,"frameborder","0"),m(a,"width","600"),m(a,"height","300"),m(a,"class","svelte-ixf578"),m(r,"class","iframe-container svelte-ixf578"),m(D,"style",N=e[3].close_time<=Date.now()?"color:red":""),m(L,"style",j=e[3].last_activity_time>Date.now()?"color:red":"")},m(E,b){ie(E,t,b),o(t,n),o(n,r),o(r,l),o(l,c),o(r,h),o(r,a),o(t,f),o(t,s),o(s,d),o(t,$),o(t,D),o(D,z),o(t,R),o(t,L),o(L,U),o(t,G),W||(Q=[Y(r,"mouseenter",ce),Y(r,"mouseleave",ue)],W=!0)},p(E,b){e=E,b&1&&i!==(i=e[3].title+"")&&C(c,i),b&1&&_!==(_=e[3].url)&&m(l,"href",_),b&1&&Z(a,"display",e[3].active?"block":"none"),b&1&&!X(a.src,g=e[3].embed_url)&&m(a,"src",g),b&1&&u!==(u=e[3].title)&&m(a,"title",u),b&1&&y!==(y=e[3].probability+"")&&C(d,y),b&1&&q!==(q=new Date(e[3].close_time).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"2-digit"})+"")&&C(z,q),b&1&&N!==(N=e[3].close_time<=Date.now()?"color:red":"")&&m(D,"style",N),b&1&&O!==(O=new Date(e[3].last_activity_time).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"2-digit"})+"")&&C(U,O),b&1&&j!==(j=e[3].last_activity_time>Date.now()?"color:red":"")&&m(L,"style",j)},d(E){E&&K(t),W=!1,P(Q)}}}function Me(e){let t,n,r,l,i,c,_,h,a,g,u=e[0],f=[];for(let s=0;s<u.length;s+=1)f[s]=le(ne(e,u,s));return{c(){t=p("main"),n=p("h1"),n.textContent="Are we getting nuked?",r=w(),l=p("div"),i=p("table"),c=p("thead"),c.innerHTML=`<tr><th>Prediction</th> 
          <th>Probability</th> 
          <th>Close Date</th> 
          <th>Last Update</th></tr>`,_=w(),h=p("tbody");for(let s=0;s<f.length;s+=1)f[s].c();a=w(),g=p("div"),g.innerHTML=`<p>If you want to receive a phone call when one of these markets implies a
      probability higher than 30%, please text me on:</p> 
    <ul class="contacts-list svelte-ixf578"><li><a href="https://wa.me/00393461388774">Whatsapp</a></li> 
      <li><a href="https://signal.me/#p/+393461388774">Signal</a></li> 
      <li><a href="https://t.me/recursing">Telegram</a></li> 
      <li><a href="https://forum.effectivealtruism.org/users/lorenzo-buonanno">EA Forum</a></li> 
      <li><a href="https://www.lesswrong.com/users/lorenzo-buonanno">LessWrong</a></li> 
      <li><a href="https://www.facebook.com/profile.php?id=100073337767772">Facebook</a></li> 
      <li><a href="https://twitter.com/L___orenzo">Twitter</a></li></ul> 
    <p>Write something like &quot;I want you to call this number if a prediction
      markets implies a 30% probability of nuclear war, I accept that there
      might be false alarms&quot;. I will send you a text to verify that you own that
      number, and will add it to a list of numbers that automatically get called
      once one of the markets above implies a &gt;30% probability of nukes.</p> 
    <p>This is very heavily inspired from <a href="https://hasrussialaunchednukesyet.com/">hasrussialaunchednukesyet.com</a>
      (but even more extremely hacky).
      <br/>
      See the script that checks the markets and makes the phone calls
      <a href="https://gist.github.com/Recursing/a9f88e0160435d97a35f6d9abe70c338">here.</a></p>`,m(n,"class","svelte-ixf578"),m(l,"class","card"),m(g,"class","explainer svelte-ixf578")},m(s,y){ie(s,t,y),o(t,n),o(t,r),o(t,l),o(l,i),o(i,c),o(i,_),o(i,h);for(let d=0;d<f.length;d+=1)f[d].m(h,null);o(t,a),o(t,g)},p(s,[y]){if(y&1){u=s[0];let d;for(d=0;d<u.length;d+=1){const $=ne(s,u,d);f[d]?f[d].p($,y):(f[d]=le($),f[d].c(),f[d].m(h,null))}for(;d<f.length;d+=1)f[d].d(1);f.length=u.length}},i:A,o:A,d(s){s&&K(t),me(f,s)}}}function Pe(e,t,n){let r=[];return _e(async()=>{n(0,r=(await Ae()).map(c=>({...c,active:!1})))}),[r,(c,_,h)=>{n(0,_[h].active=!0,r)},(c,_,h)=>{n(0,_[h].active=!1,r)}]}class qe extends Ee{constructor(t){super(),Le(this,t,Pe,Me,fe,{})}}new qe({target:document.getElementById("app")});
