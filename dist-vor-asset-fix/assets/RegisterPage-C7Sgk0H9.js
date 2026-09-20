import{$ as N,U,e as i,o as $,c as e,t as h,i as n,I as K,F as Y,K as q,S as M,m as V,A,r as B,v as f,ae as C}from"./ModerationService--RmbjC5p.js";import{I as c}from"./Input-Cxyj3EM0.js";import{B as H}from"./useStore-B8c8g-Rg.js";import{T as g,B as O}from"./Text-CVNHmjKJ.js";import{P as j,a as D}from"./PageFooter-qkhtqmo-.js";import{s as l,F as x,u as L}from"./Flexbox-DdRgUkVN.js";import{I as W}from"./browser-BunxtBnb.js";import{T as X}from"./index-CDdyw8n8.js";import{M as J}from"./MetaTitle-EETaEaDk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useResizeObserver-CpC9RR9B.js";import"./Skeleton-B5QliNYZ.js";import"./LogoutModal-Be7MkMP9.js";import"./logout-CA2llaas.js";import"./languages-Cb1WEjVH.js";import"./ClanTag-MlhFir4K.js";import"./Emoji-CDOypsoU.js";import"./date-BRn35p1W.js";import"./CodeBlock-BMkzsw0g.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-CnIGVF2Z.js";import"./ContextMenu-DlhjvYHX.js";import"./Notice-DEuV9al1.js";import"./DeleteConfirmModal-Brc2rzZx.js";import"./GlobalEvents-CaCLsBJj.js";import"./ServerVerifiedIcon-W43yudYR.js";import"./useJoinServer-Cpi-4iyc.js";import"./LogoMono-Bbm6vX6Z.js";var Q=h("<span style=margin-bottom:6px> "),G=h("<form action=# style=display:flex;flex-direction:column>"),Z=h("<div style=margin-top:-4px;font-size:20px>•");const ee=l("div")`
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
`,oe=l("div")`
  color: var(--primary-color);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,ne=L`
  margin-top: 20px;
  display: block;
  text-align: center;
`,ae=l(x)`
  background-color: var(--pane-color);
  border: solid 1px rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 6px;
`;function Ue(){const[r]=W(),E=N(),y=U(),[v,p]=i(!1),[a,m]=i({message:"",path:""}),[S,P]=i(""),[R,_]=i(""),[u,k]=i(""),[I,z]=i("");let w="",d;$(()=>{B(f.USER_TOKEN,null)&&y("/app",{replace:!0})});const T=async t=>{t?.preventDefault();const o=E.query.redirect||"/app/explore/servers";if(v())return;if(p(!0),m({message:"",path:""}),u()!==I()){m({message:"Confirm password does not match.",path:"Confirm Password"}),p(!1);return}if(u().length>72){m({message:"Password must be less than 72 characters.",path:"Password"}),p(!1);return}const s=await H(S(),R().trim(),u().trim(),w).catch(b=>{m({message:b.message,path:b.path}),d?.reset()});p(!1),s&&(C(f.USER_TOKEN,s.token),C(f.FIRST_TIME,"true"),y(o))},F=[r("q451B9"),r("o6zCzX"),r("HYmPVO")];return e(ee,{class:"register-page-container",get children(){return[e(J,{get children(){return r("IDEV0s")}}),e(j,{}),e(re,{get children(){return e(te,{get children(){return[(()=>{var t=G();return t.addEventListener("submit",T),n(t,e(oe,{get children(){return r("DCsWdM",{appName:"Nexcord"})}}),null),n(t,e(ae,{gap:5,get children(){return[(()=>{var o=Q(),s=o.firstChild;return n(o,e(K,{name:"info",color:"var(--warn-color)",style:{"vertical-align":"middle","margin-top":"-2px"},size:18}),s),n(o,e(g,{style:{"font-weight":"bold"},color:"var(--warn-color)",get children(){return r("HEk5A7")}}),null),o})(),e(Y,{each:F,children:o=>e(g,{color:"rgba(255, 255, 255, 0.8)",style:{display:"flex",gap:"5px"},size:14,get children(){return[Z()," ",o]}})})]}}),null),n(t,e(c,{margin:[10,0,10,0],get label(){return r("lYdWyn")},type:"email",get error(){return a()},onText:P}),null),n(t,e(c,{margin:[10,0,10,0],get label(){return r("KAAEYY")},get error(){return a()},onText:_}),null),n(t,e(c,{margin:[10,0,10,0],get label(){return r("7Pjr5i")},type:"password",get error(){return a()},onText:k}),null),n(t,e(c,{margin:[10,0,10,0],get label(){return r("7Rg1l/")},type:"password",get error(){return a()},onText:z}),null),n(t,e(X,{ref(o){var s=d;typeof s=="function"?s(o):d=o},get sitekey(){return q.TURNSTILE_SITEKEY},onVerify:o=>w=o,autoResetOnExpire:!0}),null),n(t,e(M,{get when(){return!a().path||a().path==="other"||a().path==="token"},get children(){return e(g,{size:16,color:"var(--alert-color)",get children(){return a().message}})}}),null),n(t,e(g,{style:{"margin-top":"10px"},size:12,opacity:.8,get children(){return r("pUFHY2")}}),null),n(t,e(O,{primary:!0,style:{flex:1},margin:[10,0,0,0],iconName:"login",get label(){return V(()=>!!v())()?r("x1XjVQ"):r("EJcr4j")},onClick:T}),null),t})(),e(A,{class:ne,href:"/login",get children(){return r("TFCoVU")}})]}})}}),e(D,{})]}})}export{Ue as default};
//# sourceMappingURL=RegisterPage-C7Sgk0H9.js.map
