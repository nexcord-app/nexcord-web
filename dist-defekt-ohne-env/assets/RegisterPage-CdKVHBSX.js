import{$ as N,U,e as i,o as $,c as e,t as h,i as n,I as K,F as Y,K as q,S as M,m as V,A,r as B,v as f,ae as C}from"./ModerationService-7nF9_67y.js";import{I as c}from"./Input-ojZsAQjm.js";import{B as H}from"./useStore-C1x_XtZn.js";import{T as g,B as O}from"./Text-xQnkEBKO.js";import{P as j,a as D}from"./PageFooter-31voP2kt.js";import{s as l,F as x,u as L}from"./Flexbox-DahX4I5v.js";import{I as W}from"./browser-ByxRPPz2.js";import{T as X}from"./index-YYSn3C9g.js";import{M as J}from"./MetaTitle-Bc2hdpBy.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useResizeObserver-DLOEUKTg.js";import"./Skeleton-fDFQMXJb.js";import"./LogoutModal-C-idJ6HJ.js";import"./logout-BE8Vmg27.js";import"./languages-CyEDRxRF.js";import"./ClanTag-tgfDpOrD.js";import"./Emoji-DE4pWG5a.js";import"./date-QVcUUowu.js";import"./CodeBlock-CwHB-ntI.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-qOuREi5_.js";import"./ContextMenu-CinibpIf.js";import"./Notice-B_aSsICh.js";import"./DeleteConfirmModal-CmXpcZod.js";import"./GlobalEvents-D8oaUrNP.js";import"./ServerVerifiedIcon-Tsm0_ZSI.js";import"./useJoinServer-DpcK9aNf.js";import"./LogoMono-MQmPfyUk.js";var Q=h("<span style=margin-bottom:6px> "),G=h("<form action=# style=display:flex;flex-direction:column>"),Z=h("<div style=margin-top:-4px;font-size:20px>•");const ee=l("div")`
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
//# sourceMappingURL=RegisterPage-CdKVHBSX.js.map
