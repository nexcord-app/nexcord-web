import{aj as k,X as C,b as o,o as E,c as e,E as N,G as a,S as R,T as q,ac as L,m as z,H as d,aV as I,aI as K,y as f,s,V as y,u as M,x as V}from"./useStore-B0mu5xqR.js";import{I as h}from"./Input-B_7GKQol.js";import{P as _,a as A}from"./PageFooter-CbOSQWR1.js";import{I as D}from"./browser-BaK9C9_l.js";import{M as j}from"./MetaTitle-D10L0znK.js";import"./_commonjsHelpers-CE1G-McA.js";import"./logout-H7jibjfq.js";import"./Skeleton-Hm2fqnK3.js";import"./Avatar-Dm8O4A-8.js";var B=N("<form action=# style=display:flex;flex-direction:column>");const F=s("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
`,G=s(y)`
  height: 100%;
  border-radius: 8px;
  margin: 8px;
  margin-top: 0;
  margin-bottom: 0;
  overflow: auto;
  flex: 1;
`,H=s(y)`
  width: 300px;
  margin: auto;
  padding: 10px;
`,O=s("div")`
  color: var(--primary-color);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`,x=M`
  margin-top: 20px;
  display: block;
  text-align: center;
`;function te(){const[r]=D(),S=k(),i=C(),[l,c]=o(!1),[n,g]=o({message:"",path:""}),[w,v]=o(""),[b,T]=o("");E(()=>{V(f.USER_TOKEN,null)&&i("/app",{replace:!0})});const m=async t=>{t?.preventDefault();const P=S.query.redirect||"/app";if(l())return;c(!0),g({message:"",path:""});const u=await I(w().trim(),b().trim()).catch(p=>{g({message:p.message,path:p.path||"unk"})});c(!1),u&&(K(f.USER_TOKEN,u.token),i(P))};return e(F,{class:"login-page-container",get children(){return[e(j,{get children(){return r("fP/c5d")}}),e(_,{}),e(G,{get children(){return e(H,{class:"container",get children(){return[(()=>{var t=B();return t.addEventListener("submit",m),a(t,e(O,{get children(){return r("WqVaBm")}}),null),a(t,e(h,{margin:[10,0,10,0],get label(){return r("SYDkRi")},errorName:["email","usernameAndTag"],type:"text",get error(){return n()},onText:v}),null),a(t,e(h,{margin:[10,0,10,0],get label(){return r("VpswP2")},type:"password",get error(){return n()},onText:T}),null),a(t,e(R,{get when(){return n().path==="unk"},get children(){return e(q,{size:16,color:"var(--alert-color)",get children(){return n().message}})}}),null),a(t,e(L,{primary:!0,styles:{flex:1},margin:[10,0,0,0],iconName:"login",get label(){return z(()=>!!l())()?r("APX5NR"):r("aszLDp")},onClick:m}),null),t})(),e(d,{class:x,href:"/reset-password",get children(){return r("3GMjK2")}}),e(d,{class:x,href:"/register",get children(){return r("1szYwa")}})]}})}}),e(A,{})]}})}export{te as default};
//# sourceMappingURL=LoginPage-BvMVG9u7.js.map
