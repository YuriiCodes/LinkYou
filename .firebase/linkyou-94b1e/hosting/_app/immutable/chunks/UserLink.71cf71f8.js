import{s as L,g as m,c as E,l as j,h as d,i as v,d as P,m as S,D as b,k as _,w as y}from"./scheduler.d2f032b3.js";import{S as q,i as x,d as U,v as A,e as w,g as l,a as C,n as h,s as D}from"./index.4e9dc73d.js";function B(s,e){const n={},u={},f={$$scope:1};let o=s.length;for(;o--;){const c=s[o],r=e[o];if(r){for(const i in c)i in r||(u[i]=1);for(const i in r)f[i]||(n[i]=r[i],f[i]=1);s[o]=r}else for(const i in c)f[i]=1}for(const c in u)c in n||(n[c]=void 0);return n}function G(s){return typeof s=="object"&&s!==null?s:{}}const g="src/lib/components/UserLink.svelte";function p(s){let e,n,u,f,o,c;const r={c:function(){e=m("a"),n=m("img"),f=E(),o=m("span"),c=j(s[2]),this.h()},l:function(t){e=d(t,"A",{href:!0,class:!0});var a=v(e);n=d(a,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),f=P(a),o=d(a,"SPAN",{class:!0});var k=v(o);c=S(k,s[2]),k.forEach(w),a.forEach(w),this.h()},h:function(){b(n.src,u=`/${s[0]}.png`)||l(n,"src",u),l(n,"alt",s[0]),l(n,"width","32"),l(n,"height","32"),l(n,"class","w-8"),_(n,g,9,2,267),l(o,"class","text-lg text-white font-bold"),_(o,g,10,2,344),l(e,"href",s[1]),l(e,"class","stack w-full max-w-md text-center bg-base-300 flex justify-center items-center p-4 rounded-lg not-prose no-underline"),_(e,g,8,0,125)},m:function(t,a){C(t,e,a),h(e,n),h(e,f),h(e,o),h(o,c)},p:function(t,[a]){a&1&&!b(n.src,u=`/${t[0]}.png`)&&l(n,"src",u),a&1&&l(n,"alt",t[0]),a&4&&D(c,t[2]),a&2&&l(e,"href",t[1])},i:y,o:y,d:function(t){t&&w(e)}};return U("SvelteRegisterBlock",{block:r,id:p.name,type:"component",source:"",ctx:s}),r}function N(s,e,n){let{$$slots:u={},$$scope:f}=e;A("UserLink",u,[]);let{icon:o="default"}=e,{url:c="foo"}=e,{title:r="some cool title"}=e;const i=["icon","url","title"];return Object.keys(e).forEach(t=>{!~i.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<UserLink> was created with unknown prop '${t}'`)}),s.$$set=t=>{"icon"in t&&n(0,o=t.icon),"url"in t&&n(1,c=t.url),"title"in t&&n(2,r=t.title)},s.$capture_state=()=>({icon:o,url:c,title:r}),s.$inject_state=t=>{"icon"in t&&n(0,o=t.icon),"url"in t&&n(1,c=t.url),"title"in t&&n(2,r=t.title)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),[o,c,r]}class I extends q{constructor(e){super(e),x(this,e,N,p,L,{icon:0,url:1,title:2}),U("SvelteRegisterComponent",{component:this,tagName:"UserLink",options:e,id:p.name})}get icon(){throw new Error("<UserLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set icon(e){throw new Error("<UserLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get url(){throw new Error("<UserLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set url(e){throw new Error("<UserLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get title(){throw new Error("<UserLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set title(e){throw new Error("<UserLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{I as U,G as a,B as g};
