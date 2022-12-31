var x=Object.defineProperty;var y=(t,e,a)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var g=(t,e,a)=>(y(t,typeof e!="symbol"?e+"":e,a),a);import{a as f,p as w,m as k}from"./marked.esm-86da1c5f.js";import{d as v,r as $,o as i,c as s,a as n,t as l,b as m,e as L,F as M,f as T,u as A,g as b,h as B,i as D}from"./index-e7c9b4db.js";function H(t,e){for(const a in t)if(t[a].content===e)return t[a]}class N{constructor(){g(this,"articles",[])}}const V={class:"article"},j=["innerHTML"],z=["href"],C=n("br",null,null,-1),F=v({__name:"Article",props:{article:Object},setup(t){var r;const e=t,a=$({content:""});return f.get(`/articles/${(r=e.article)==null?void 0:r.content}/content.md`).then(function(c){a.content=w.sanitize(k.parse(c.data))}),(c,_)=>{var o,u,d,h;return i(),s("div",V,[n("h2",null,l((o=t.article)==null?void 0:o.title),1),n("div",{innerHTML:a.content},null,8,j),n("div",null,[m(" Author: "),n("a",{href:"/authors/"+((u=t.article)==null?void 0:u.author)},l((d=t.article)==null?void 0:d.author),9,z),C,m(" Date: "+l((h=t.article)==null?void 0:h.date),1)])])}}}),O={class:"article"},R=["innerHTML"],E=["href"],P=n("br",null,null,-1),S=["href"],q=v({__name:"ArticlePreview",props:{article:Object},setup(t){var r;const e=t,a=$({preview:""});return f.get(`/articles/${(r=e.article)==null?void 0:r.content}/preview.md`).then(function(c){a.preview=w.sanitize(k.parse(c.data))}),(c,_)=>{var o,u,d,h,p;return i(),s("div",O,[n("h2",null,l((o=t.article)==null?void 0:o.title),1),n("div",{innerHTML:a.preview},null,8,R),n("div",null,[m(" Author: "),n("a",{href:"/authors/"+((u=t.article)==null?void 0:u.author)},l((d=t.article)==null?void 0:d.author),9,E),P,m(" Date: "+l((h=t.article)==null?void 0:h.date),1)]),n("a",{href:"/blog/"+((p=t.article)==null?void 0:p.content)},"Read",8,S)])}}}),G={key:0},I=n("h1",null,"Articles:",-1),J=n("br",null,null,-1),K=n("br",null,null,-1),Q={key:1},Y=v({__name:"Blog",setup(t){const e=$({metadata:new N});f.get("/articles/metadata.json").then(function(r){e.metadata=r.data});const a=L(()=>{const r=D();return H(e.metadata.articles,r.params.article)});return(r,c)=>r.$route.params.article?A(a)?(i(),s("div",Q,[b(F,{article:A(a)},null,8,["article"])])):B("",!0):(i(),s("div",G,[I,J,(i(!0),s(M,null,T(e.metadata.articles,_=>(i(),s("div",null,[b(q,{article:_},null,8,["article"]),K]))),256))]))}});export{Y as default};
