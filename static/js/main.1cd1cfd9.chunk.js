(this["webpackJsonpantd-demo"]=this["webpackJsonpantd-demo"]||[]).push([[0],{139:function(e,t,c){},140:function(e,t,c){},234:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(35),r=c.n(s),i=c(47),j=(c(139),c(37)),o=c(12),d=c(237),l=c(241),b=c(243),O=c(246),u=c(245),h=(c(140),c(6)),x=function(){return Object(h.jsx)("h2",{children:"My Cart Content"})},m=c(50),p=c(120),f=c.n(p),g={products:null,isLoading:!1,isLoaded:!1},y=Object(n.createContext)(),C=function(e,t){switch(console.log("Pinned dispatched",t),t.type){case"GET_PRODUCTS_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0,isLoaded:!1});case"GET_PRODUCTS_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,isLoaded:!0,products:t.payload.products});case"GET_PRODUCTS_FAILURE":return Object(m.a)(Object(m.a)({},e),{},{products:null,isLoading:!1,isLoaded:!1});default:throw new Error("Unknown action: ".concat(t.type))}},S=function(e){e({type:"GET_PRODUCTS_REQUEST"}),f.a.get("https://molly0414.github.io/react-demo/data/items.json").then((function(t){e({type:"GET_PRODUCTS_SUCCESS",payload:{products:t.data}})})).catch((function(t){console.error(t),e({type:"GET_PRODUCTS_FAILURE"})}))},T=function(e){var t=e.children,c=Object(n.useReducer)(C,g),a=Object(j.a)(c,2),s=a[0],r=a[1];return Object(h.jsx)(y.Provider,{value:{state:s,dispatch:r},children:t})},v=c(58),L=c(38),E=c(57),w=c(238),U=c(242),R=w.a.Meta,_=function(e){var t=e.data;return null===t?Object(h.jsxs)(w.a,{style:{height:300},children:[Object(h.jsx)(U.a,{loading:"true"}),Object(h.jsx)(R,{title:"",description:""})]}):Object(h.jsx)(i.b,{to:{pathname:"/item/"+t.id,state:t},children:Object(h.jsx)(w.a,{hoverable:!0,cover:Object(h.jsx)("img",{alt:t.title,src:t.image}),children:Object(h.jsx)(R,{title:t.name,description:"NT$ "+t.price})})})},N=function(e){var t=e.searchKeyword,c=Object(n.useContext)(y),a=c.state,s=c.dispatch,r=a.products,i=a.isLoading,j=a.isLoaded,o=r&&r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||!t}));return Object(n.useEffect)((function(){S(s)}),[s]),i?Object(h.jsx)(v.a,{gutter:[24,24],children:new Array(8).fill(null).map((function(e,t){var c=t+1;return Object(h.jsx)(L.a,{xs:24,sm:12,md:8,xl:6,children:Object(h.jsx)(_,{data:null})},c)}))}):j&&o.length>0?Object(h.jsx)(v.a,{gutter:[24,24],children:o.map((function(e){return Object(h.jsx)(L.a,{xs:12,sm:8,md:6,xl:4,children:Object(h.jsx)(_,{data:e})},e.id)}))}):Object(h.jsx)(E.a,{})},P=c(240),D=c(236),F=c(239),I=c(244),M=c(129),A=P.a.Option;var G=function(){var e=Object(o.g)().id,t=Object(n.useContext)(y),c=t.state,a=t.dispatch,s=c.products,r=c.isLoading,i=c.isLoaded;if(Object(n.useEffect)((function(){S(a)}),[a]),r)return Object(h.jsx)("div",{className:"center-content",children:Object(h.jsx)(D.a,{size:"large"})});for(var j,d,l=[],b=1;b<(j=2,d=10,Math.floor(Math.random()*(d-j+1))+j);b++)l.push(Object(h.jsx)(A,{value:b,children:b},b));if(i&&s){var O=s.find((function(t){return t.id.toString()===e}));return Object(h.jsxs)(v.a,{gutter:[24,24],children:[Object(h.jsx)(L.a,{xs:24,sm:6,children:Object(h.jsx)(F.a,{src:O.image})}),Object(h.jsxs)(L.a,{xs:24,sm:18,children:[Object(h.jsx)("h1",{className:"title",children:O.name}),Object(h.jsxs)("h1",{className:"price",children:["NT$ ",O.price]}),Object(h.jsxs)(I.b,{children:[Object(h.jsx)(P.a,{defaultValue:"1",style:{width:60},children:l}),Object(h.jsx)(M.a,{type:"primary",icon:Object(h.jsx)(u.a,{}),children:"ADD TO CART"})]})]})]})}return Object(h.jsx)(E.a,{})},k=d.a.Header,K=d.a.Content,z=d.a.Footer,B=l.a.Search;var H=function(){var e=Object(o.f)(),t=Object(n.useState)("home"),c=Object(j.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),l=Object(j.a)(r,2),m=l[0],p=l[1];return Object(h.jsx)(T,{children:Object(h.jsxs)(d.a,{className:"layout",children:[Object(h.jsxs)(k,{className:"header",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)(i.b,{to:"/",children:"Test Logo"})}),Object(h.jsx)(B,{className:"search hidden-sm",placeholder:"Input search text",allowClear:!0,onSearch:function(t){p(t),e("/")}}),Object(h.jsxs)(b.a,{className:"menu",theme:"light",onClick:function(e){return s(e.key)},selectedKeys:[a],mode:"horizontal",children:[Object(h.jsx)(b.a.Item,{icon:Object(h.jsx)(O.a,{}),children:Object(h.jsx)(i.b,{to:"/",children:"Home"})},"home"),Object(h.jsx)(b.a.Item,{icon:Object(h.jsx)(u.a,{}),children:Object(h.jsx)(i.b,{to:"/my-cart",children:"My Cart"})},"cart")]})]}),Object(h.jsx)(K,{className:"site-layout-content",children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",element:Object(h.jsx)(N,{searchKeyword:m})}),Object(h.jsx)(o.a,{path:"/my-cart",element:Object(h.jsx)(x,{})}),Object(h.jsx)(o.a,{path:"/item/:id",element:Object(h.jsx)(G,{})})]})}),Object(h.jsx)(z,{style:{textAlign:"center"},children:"\xa92021 Created by Molly Wu"})]})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,247)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(i.a,{basename:"/react-demo",children:Object(h.jsx)(H,{})})}),document.getElementById("root")),J()}},[[234,1,2]]]);
//# sourceMappingURL=main.1cd1cfd9.chunk.js.map