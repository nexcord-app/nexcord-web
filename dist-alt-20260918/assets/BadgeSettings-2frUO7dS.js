import{W as g,M as p,c as e,U as d,ay as r,E as m,G as o,u as h,C as S,S as B,s as v,b as E}from"./useStore-C81yKXnX.js";import{B as R,a as l}from"./Breadcrumb-B2nrXbr4.js";import{S as s}from"./SettingsBlock-zYSlJJFm.js";import{A}from"./Avatar-CnjpHkJi.js";import{N as _}from"./Notice-D4YZaiTY.js";import"./_commonjsHelpers-CE1G-McA.js";var c=m("<div>");const y=v("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  flex-shrink: 0;
`;function P(){const{header:t}=g();p(()=>{t.updateHeader({title:"Settings - Badges",iconName:"settings"})});const a=[r.CAT_EARS_BLUE,r.CAT_EARS_WHITE,r.FOX_EARS_GOLD,r.FOX_EARS_BROWN];return e(y,{get children(){return[e(R,{get children(){return[e(l,{href:"/app",icon:"home",get title(){return d("t5AkH8")}}),e(l,{get title(){return d("rXTkFU")}})]}}),e(_,{description:"Support this project by donating money.",type:"error",title:"Donations",icon:"favorite"}),e(T,{}),e(u,{get badges(){return[r.SUPPORTER]},price:10}),e(u,{badges:a,price:3}),e(u,{get badges(){return[{...r.PALESTINE,description:"Can be obtained by going to Account -> Profile"}]},price:0})]}})}const u=t=>{const a=g(),n=()=>a.account.user();return e(B,{get when(){return n()},get children(){var i=c();return o(i,e(s,{header:!0,get label(){return`$${t.price} Badges`},icon:"favorite"}),null),o(i,e(S,{get each(){return t.badges},children:(b,f)=>e(k,{get user(){return n()},badge:b,get index(){return f()},get length(){return t.badges.length}})}),null),i}})},k=t=>{const[a,n]=E(!1);return e(s,{onMouseOver:()=>n(!0),onMouseLeave:()=>n(!1),get label(){return t.badge.name},get borderBottomRadius(){return t.index===t.length-1},borderTopRadius:!1,get description(){return t.badge.description},get icon(){return e(A,{get user(){return{...t.user,badges:t.badge.bit}},size:42,get animate(){return a()}})}})},T=()=>(()=>{var t=c();return o(t,e(s,{label:"Support Methods",icon:"info",header:!0}),null),o(t,e(s,{label:"Ko-Fi",borderBottomRadius:!1,borderTopRadius:!1,iconSrc:"/assets/kofi.png",href:"https://ko-fi.com/supertiger",hrefBlank:!0}),null),o(t,e(s,{borderTopRadius:!1,get class(){return h`
          img {
            border-radius: 50%;
          }
        `},label:"Boosty",iconSrc:"/assets/boosty.jpg",href:"https://boosty.to/supertigerdev/donate",hrefBlank:!0}),null),t})();export{P as default};
//# sourceMappingURL=BadgeSettings-2frUO7dS.js.map
