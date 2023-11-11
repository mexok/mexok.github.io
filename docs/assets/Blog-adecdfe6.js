var b=Object.defineProperty;var M=(t,e,a)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var g=(t,e,a)=>(M(t,typeof e!="symbol"?e+"":e,a),a);import{a as f}from"./axios-c0bebe37.js";import{d as v,r as p,i as k,S as j,o as s,c as i,a as n,b as _,t as h,M as x,p as y,m as L,e as T,F as B,f as D,u as w,g as A,h as H,j as N}from"./index-7006037f.js";function V(t,e){for(const a in t)if(t[a].content===e)return t[a]}class P{constructor(){g(this,"articles",[])}}const S={class:"article"},C=["innerHTML"],F=["href"],O=n("br",null,null,-1),R=v({__name:"Article",props:{article:Object},setup(t){var c;const e=t,a=p({content:""}),r=k(j.MarkdownParser,new x);return f.get(`/articles/${(c=e.article)==null?void 0:c.content}/content.md`).then(function(o){a.content=r.parse(o.data)}),(o,m)=>{var l,u,d;return s(),i("div",S,[n("div",{innerHTML:a.content},null,8,C),n("div",null,[_(" Author: "),n("a",{href:"/authors/"+((l=t.article)==null?void 0:l.author)},h((u=t.article)==null?void 0:u.author),9,F),O,_(" Date: "+h((d=t.article)==null?void 0:d.date),1)])])}}}),z={class:"article"},E=["innerHTML"],I=["href"],q=n("br",null,null,-1),G=["href"],J=v({__name:"ArticlePreview",props:{article:Object},setup(t){var r;const e=t,a=p({preview:""});return f.get(`/articles/${(r=e.article)==null?void 0:r.content}/preview.md`).then(function(c){a.preview=y.sanitize(L.parse(c.data))}),(c,o)=>{var m,l,u,d,$;return s(),i("div",z,[n("h2",null,h((m=t.article)==null?void 0:m.title),1),n("div",{innerHTML:a.preview},null,8,E),n("div",null,[_(" Author: "),n("a",{href:"/authors/"+((l=t.article)==null?void 0:l.author)},h((u=t.article)==null?void 0:u.author),9,I),q,_(" Date: "+h((d=t.article)==null?void 0:d.date),1)]),n("a",{href:"/blog/"+(($=t.article)==null?void 0:$.content)},"Read",8,G)])}}}),K={key:0},Q=n("h1",null,"Articles:",-1),U=n("br",null,null,-1),W=n("br",null,null,-1),X={key:1},et=v({__name:"Blog",setup(t){const e=p({metadata:new P});f.get("/articles/metadata.json").then(function(r){e.metadata=r.data});const a=T(()=>{const r=N();return V(e.metadata.articles,r.params.article)});return(r,c)=>r.$route.params.article?w(a)?(s(),i("div",X,[A(R,{article:w(a)},null,8,["article"])])):H("",!0):(s(),i("div",K,[Q,U,(s(!0),i(B,null,D(e.metadata.articles,o=>(s(),i("div",null,[A(J,{article:o},null,8,["article"]),W]))),256))]))}});export{et as default};
