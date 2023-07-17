import{s as le,v as M,p as Z,e as G,g as w,c as D,h as T,i as B,d as j,A as U,k as C,N as H,J as oe,K as ae,l as P,m as R,z}from"../chunks/scheduler.d2f032b3.js";import{S as ce,i as ue,d as S,v as fe,j as re,k as me,m as de,b as he,t as _e,l as pe,a as y,e as b,g as k,n as g,A as O,s as I}from"../chunks/index.4e9dc73d.js";import{A as $}from"../chunks/AuthCheck.c05066c3.js";import{c as N,u as L,a as W,g as V,o as Q,W as X}from"../chunks/firebase.ac0b247d.js";const be=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{console:ge}=be,A="src/routes/login/username/+page.svelte";function ee(i){let e,t,a,n,o,s,l,u,E,f=i[1]&&Y(i),m=!i[3]&&i[5]&&q(i),d=i[3]&&!i[2]&&!i[1]&&F(i),h=i[2]&&J(i);const v={c:function(){e=w("form"),t=w("input"),a=D(),n=w("div"),f&&f.c(),o=D(),m&&m.c(),s=D(),d&&d.c(),l=D(),h&&h.c(),this.h()},l:function(c){e=T(c,"FORM",{class:!0});var p=B(e);t=T(p,"INPUT",{type:!0,placeholder:!0,class:!0}),a=j(p),n=T(p,"DIV",{class:!0});var r=B(n);f&&f.l(r),o=j(r),m&&m.l(r),s=j(r),d&&d.l(r),l=j(r),h&&h.l(r),r.forEach(b),p.forEach(b),this.h()},h:function(){k(t,"type","text"),k(t,"placeholder","Username"),k(t,"class","input w-full"),U(t,"input-error",!i[3]&&i[5]),U(t,"input-warning",i[4]),U(t,"input-success",i[2]&&i[3]&&!i[1]),C(t,A,73,6,1868),k(n,"class","my-4 min-h-16 px-8 w-full"),C(n,A,83,6,2190),k(e,"class","w-2/5"),C(e,A,72,4,1798)},m:function(c,p){y(c,e,p),g(e,t),H(t,i[0]),g(e,a),g(e,n),f&&f.m(n,null),g(n,o),m&&m.m(n,null),g(n,s),d&&d.m(n,null),g(n,l),h&&h.m(n,null),u||(E=[O(t,"input",i[9]),O(t,"input",i[7],!1,!1,!1,!1),O(e,"submit",oe(i[8]),!1,!0,!1,!1)],u=!0)},p:function(c,p){p&1&&t.value!==c[0]&&H(t,c[0]),p&40&&U(t,"input-error",!c[3]&&c[5]),p&16&&U(t,"input-warning",c[4]),p&14&&U(t,"input-success",c[2]&&c[3]&&!c[1]),c[1]?f?f.p(c,p):(f=Y(c),f.c(),f.m(n,o)):f&&(f.d(1),f=null),!c[3]&&c[5]?m||(m=q(c),m.c(),m.m(n,s)):m&&(m.d(1),m=null),c[3]&&!c[2]&&!c[1]?d?d.p(c,p):(d=F(c),d.c(),d.m(n,l)):d&&(d.d(1),d=null),c[2]?h?h.p(c,p):(h=J(c),h.c(),h.m(n,null)):h&&(h.d(1),h=null)},d:function(c){c&&b(e),f&&f.d(),m&&m.d(),d&&d.d(),h&&h.d(),u=!1,ae(E)}};return S("SvelteRegisterBlock",{block:v,id:ee.name,type:"else",source:"(63:2) {:else}",ctx:i}),v}function te(i){let e,t,a,n,o=i[6].username+"",s,l,u,E="(Usernames cannot be changed)",f,m,d="Upload Profile Image";const h={c:function(){e=w("p"),t=P("Your username is "),a=w("span"),n=P("@"),s=P(o),l=D(),u=w("p"),u.textContent=E,f=D(),m=w("a"),m.textContent=d,this.h()},l:function(_){e=T(_,"P",{class:!0});var c=B(e);t=R(c,"Your username is "),a=T(c,"SPAN",{class:!0});var p=B(a);n=R(p,"@"),s=R(p,o),p.forEach(b),c.forEach(b),l=j(_),u=T(_,"P",{class:!0,["data-svelte-h"]:!0}),z(u)!=="svelte-9l80or"&&(u.textContent=E),f=j(_),m=T(_,"A",{class:!0,href:!0,["data-svelte-h"]:!0}),z(m)!=="svelte-vogdig"&&(m.textContent=d),this.h()},h:function(){k(a,"class","text-success font-bold"),C(a,A,65,23,1560),k(e,"class","text-lg"),C(e,A,64,4,1517),k(u,"class","text-sm"),C(u,A,69,4,1655),k(m,"class","btn btn-primary"),k(m,"href","/login/photo"),C(m,A,70,4,1712)},m:function(_,c){y(_,e,c),g(e,t),g(e,a),g(a,n),g(a,s),y(_,l,c),y(_,u,c),y(_,f,c),y(_,m,c)},p:function(_,c){c&64&&o!==(o=_[6].username+"")&&I(s,o)},d:function(_){_&&(b(e),b(l),b(u),b(f),b(m))}};return S("SvelteRegisterBlock",{block:h,id:te.name,type:"if",source:"(55:2) {#if $userData?.username}",ctx:i}),h}function Y(i){let e,t,a,n;const o={c:function(){e=w("p"),t=P("Checking availability of @"),a=P(i[0]),n=P("..."),this.h()},l:function(l){e=T(l,"P",{class:!0});var u=B(e);t=R(u,"Checking availability of @"),a=R(u,i[0]),n=R(u,"..."),u.forEach(b),this.h()},h:function(){k(e,"class","text-secondary"),C(e,A,85,10,2262)},m:function(l,u){y(l,e,u),g(e,t),g(e,a),g(e,n)},p:function(l,u){u&1&&I(a,l[0])},d:function(l){l&&b(e)}};return S("SvelteRegisterBlock",{block:o,id:Y.name,type:"if",source:"(76:8) {#if loading}",ctx:i}),o}function q(i){let e,t="must be 3-16 characters long, alphanumeric only";const a={c:function(){e=w("p"),e.textContent=t,this.h()},l:function(o){e=T(o,"P",{class:!0,["data-svelte-h"]:!0}),z(e)!=="svelte-1wurl8l"&&(e.textContent=t),this.h()},h:function(){k(e,"class","text-error text-sm"),C(e,A,89,10,2393)},m:function(o,s){y(o,e,s)},d:function(o){o&&b(e)}};return S("SvelteRegisterBlock",{block:a,id:q.name,type:"if",source:"(80:8) {#if !isValid && isTouched}",ctx:i}),a}function F(i){let e,t,a,n;const o={c:function(){e=w("p"),t=P("@"),a=P(i[0]),n=P(" is not available"),this.h()},l:function(l){e=T(l,"P",{class:!0});var u=B(e);t=R(u,"@"),a=R(u,i[0]),n=R(u," is not available"),u.forEach(b),this.h()},h:function(){k(e,"class","text-warning text-sm"),C(e,A,95,10,2574)},m:function(l,u){y(l,e,u),g(e,t),g(e,a),g(e,n)},p:function(l,u){u&1&&I(a,l[0])},d:function(l){l&&b(e)}};return S("SvelteRegisterBlock",{block:o,id:F.name,type:"if",source:"(86:8) {#if isValid && !isAvailable && !loading}",ctx:i}),o}function J(i){let e,t,a;const n={c:function(){e=w("button"),t=P("Confirm username @"),a=P(i[0]),this.h()},l:function(s){e=T(s,"BUTTON",{class:!0});var l=B(e);t=R(l,"Confirm username @"),a=R(l,i[0]),l.forEach(b),this.h()},h:function(){k(e,"class","btn btn-success"),C(e,A,101,10,2714)},m:function(s,l){y(s,e,l),g(e,t),g(e,a)},p:function(s,l){l&1&&I(a,s[0])},d:function(s){s&&b(e)}};return S("SvelteRegisterBlock",{block:n,id:J.name,type:"if",source:"(92:8) {#if isAvailable}",ctx:i}),n}function ne(i){let e;function t(s,l){var u;return(u=s[6])!=null&&u.username?te:ee}let a=t(i),n=a(i);const o={c:function(){n.c(),e=G()},l:function(l){n.l(l),e=G()},m:function(l,u){n.m(l,u),y(l,e,u)},p:function(l,u){a===(a=t(l))&&n?n.p(l,u):(n.d(1),n=a(l),n&&(n.c(),n.m(e.parentNode,e)))},d:function(l){l&&b(e),n.d(l)}};return S("SvelteRegisterBlock",{block:o,id:ne.name,type:"slot",source:"(54:0) <AuthCheck>",ctx:i}),o}function K(i){let e,t;e=new $({props:{$$slots:{default:[ne]},$$scope:{ctx:i}},$$inline:!0});const a={c:function(){re(e.$$.fragment)},l:function(o){me(e.$$.fragment,o)},m:function(o,s){de(e,o,s),t=!0},p:function(o,[s]){const l={};s&4223&&(l.$$scope={dirty:s,ctx:o}),e.$set(l)},i:function(o){t||(he(e.$$.fragment,o),t=!0)},o:function(o){_e(e.$$.fragment,o),t=!1},d:function(o){pe(e,o)}};return S("SvelteRegisterBlock",{block:a,id:K.name,type:"component",source:"",ctx:i}),a}const x=/^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;function ke(i,e,t){let a,n,o,s,l;M(L,"user"),Z(i,L,r=>t(11,s=r)),M(W,"userData"),Z(i,W,r=>t(6,l=r));let{$$slots:u={},$$scope:E}=e;fe("Page",u,[]);let f="",m=!1,d=!1,h;function v(){if(t(2,d=!1),clearTimeout(h),!a){t(1,m=!1);return}t(1,m=!0),h=setTimeout(async()=>{console.log("checking availability of",f);const r=V(N,"usernames",f),ie=await Q(r).then(se=>se.exists());t(2,d=!ie),t(1,m=!1)},500)}async function _(){console.log("confirming username",f);const r=X(N);r.set(V(N,"usernames",f),{uid:s==null?void 0:s.uid}),r.set(V(N,"users",s.uid),{username:f,photoURL:(s==null?void 0:s.photoURL)??null,published:!0,bio:"I am the Walrus",links:[{title:"Test Link",url:"https://kung.foo",icon:"custom"}]}),await r.commit(),t(0,f=""),t(2,d=!1)}const c=[];Object.keys(e).forEach(r=>{!~c.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&ge.warn(`<Page> was created with unknown prop '${r}'`)});function p(){f=this.value,t(0,f)}return i.$capture_state=()=>({AuthCheck:$,db:N,user:L,userData:W,doc:V,getDoc:Q,writeBatch:X,username:f,loading:m,isAvailable:d,debounceTimer:h,re:x,checkAvailability:v,confirmUsername:_,isValid:a,isTaken:o,isTouched:n,$user:s,$userData:l}),i.$inject_state=r=>{"username"in r&&t(0,f=r.username),"loading"in r&&t(1,m=r.loading),"isAvailable"in r&&t(2,d=r.isAvailable),"debounceTimer"in r&&(h=r.debounceTimer),"isValid"in r&&t(3,a=r.isValid),"isTaken"in r&&t(4,o=r.isTaken),"isTouched"in r&&t(5,n=r.isTouched)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),i.$$.update=()=>{i.$$.dirty&1&&t(3,a=(f==null?void 0:f.length)>2&&f.length<16&&x.test(f)),i.$$.dirty&1&&t(5,n=f.length>0),i.$$.dirty&14&&t(4,o=a&&!d&&!m)},[f,m,d,a,o,n,l,v,_,p]}class Ce extends ce{constructor(e){super(e),ue(this,e,ke,K,le,{}),S("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:K.name})}}export{Ce as component};
