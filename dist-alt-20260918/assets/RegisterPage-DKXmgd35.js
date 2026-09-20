import{aj as U,X as F,b as i,o as V,c as e,E as h,G as a,I as Y,T as g,C as $,au as q,S as H,ac as K,m as M,H as j,aU as A,aI as C,y as f,s as l,V as x,u as O,x as D}from"./useStore-C81yKXnX.js";import{I as u}from"./Input-CGVbQxvr.js";import{P as L,a as X}from"./PageFooter-Df0a3Gm7.js";import{I as B}from"./browser-QP6z6XX1.js";import{T as W}from"./index-Cc3i46HJ.js";import{M as G}from"./MetaTitle-Dftcq1pS.js";import"./_commonjsHelpers-CE1G-McA.js";import"./logout-DfWc_cxe.js";import"./Skeleton-C81J_hd6.js";import"./Avatar-CnjpHkJi.js";var J=h("<span style=margin-bottom:6px> "),Q=h("<form action=# style=display:flex;flex-direction:column>"),Z=h("<div style=margin-top:-4px;font-size:20px>•");const ee=l("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`,re=l(x)`
  height: 100%;
  border-radius: 8px;
  margin: 8px;
  margin-top: 0;
  margin-bottom: 0;
  overflow: auto;
  flex: 1;
`,te=l(x)`
  width: 300px;
  margin: auto;
  padding: 10px;
`,ne=l("div")`
  color: var(--primary-color);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,ae=O`
  margin-top: 20px;
  display: block;
  text-align: center;
`,oe=l(x)`
  background-color: var(--pane-color);
  border: solid 1px rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 6px;
`;function he(){const[r]=B(),E=U(),y=F(),[v,c]=i(!1),[o,p]=i({message:"",path:""}),[S,P]=i(""),[I,R]=i(""),[m,_]=i(""),[k,z]=i("");let b="",d;V(()=>{D(f.USER_TOKEN,null)&&y("/app",{replace:!0})});const w=async t=>{t?.preventDefault();const n=E.query.redirect||"/app/explore/servers";if(v())return;if(c(!0),p({message:"",path:""}),m()!==k()){p({message:"Confirm password does not match.",path:"Confirm Password"}),c(!1);return}if(m().length>72){p({message:"Password must be less than 72 characters.",path:"Password"}),c(!1);return}const s=await A(S(),I().trim(),m().trim(),b).catch(T=>{p({message:T.message,path:T.path}),d?.reset()});c(!1),s&&(C(f.USER_TOKEN,s.token),C(f.FIRST_TIME,"true"),y(n))},N=[r("q451B9"),r("o6zCzX"),r("HYmPVO")];return e(ee,{class:"register-page-container",get children(){return[e(G,{get children(){return r("IDEV0s")}}),e(L,{}),e(re,{get children(){return e(te,{get children(){return[(()=>{var t=Q();return t.addEventListener("submit",w),a(t,e(ne,{get children(){return r("DCsWdM",{appName:"Nexcord"})}}),null),a(t,e(oe,{gap:5,get children(){return[(()=>{var n=J(),s=n.firstChild;return a(n,e(Y,{name:"info",color:"var(--warn-color)",style:{"vertical-align":"middle","margin-top":"-2px"},size:18}),s),a(n,e(g,{style:{"font-weight":"bold"},color:"var(--warn-color)",get children(){return r("HEk5A7")}}),null),n})(),e($,{each:N,children:n=>e(g,{color:"rgba(255, 255, 255, 0.8)",style:{display:"flex",gap:"5px"},size:14,get children(){return[Z()," ",n]}})})]}}),null),a(t,e(u,{margin:[10,0,10,0],get label(){return r("lYdWyn")},type:"email",get error(){return o()},onText:P}),null),a(t,e(u,{margin:[10,0,10,0],get label(){return r("KAAEYY")},get error(){return o()},onText:R}),null),a(t,e(u,{margin:[10,0,10,0],get label(){return r("7Pjr5i")},type:"password",get error(){return o()},onText:_}),null),a(t,e(u,{margin:[10,0,10,0],get label(){return r("7Rg1l/")},type:"password",get error(){return o()},onText:z}),null),a(t,e(W,{ref(n){var s=d;typeof s=="function"?s(n):d=n},get sitekey(){return q.TURNSTILE_SITEKEY},onVerify:n=>b=n,autoResetOnExpire:!0}),null),a(t,e(H,{get when(){return!o().path||o().path==="other"||o().path==="token"},get children(){return e(g,{size:16,color:"var(--alert-color)",get children(){return o().message}})}}),null),a(t,e(g,{style:{"margin-top":"10px"},size:12,opacity:.8,get children(){return r("pUFHY2")}}),null),a(t,e(K,{primary:!0,styles:{flex:1},margin:[10,0,0,0],iconName:"login",get label(){return M(()=>!!v())()?r("x1XjVQ"):r("EJcr4j")},onClick:w}),null),t})(),e(j,{class:ae,href:"/login",get children(){return r("TFCoVU")}})]}})}}),e(X,{})]}})}export{he as default};
//# sourceMappingURL=RegisterPage-DKXmgd35.js.map
