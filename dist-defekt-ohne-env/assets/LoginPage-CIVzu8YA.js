import{am as R,$ as q,U as G,e as a,o as _,c as e,t as S,i as o,S as A,m as K,A as f,r as M,v as h,ae as $}from"./ModerationService-7nF9_67y.js";import{I as x}from"./Input-ojZsAQjm.js";import{D as z,E as B}from"./useStore-C1x_XtZn.js";import{T as D,B as w}from"./Text-xQnkEBKO.js";import{P as F,a as I}from"./PageFooter-31voP2kt.js";import{s as i,F as v,u as U}from"./Flexbox-DahX4I5v.js";import{I as O}from"./browser-ByxRPPz2.js";import{M as V}from"./MetaTitle-Bc2hdpBy.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useResizeObserver-DLOEUKTg.js";import"./Skeleton-fDFQMXJb.js";import"./LogoutModal-C-idJ6HJ.js";import"./logout-BE8Vmg27.js";import"./languages-CyEDRxRF.js";import"./ClanTag-tgfDpOrD.js";import"./Emoji-DE4pWG5a.js";import"./date-QVcUUowu.js";import"./CodeBlock-CwHB-ntI.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-qOuREi5_.js";import"./ContextMenu-CinibpIf.js";import"./Notice-B_aSsICh.js";import"./DeleteConfirmModal-CmXpcZod.js";import"./GlobalEvents-D8oaUrNP.js";import"./ServerVerifiedIcon-Tsm0_ZSI.js";import"./useJoinServer-DpcK9aNf.js";import"./LogoMono-MQmPfyUk.js";var W=S("<form action=# style=display:flex;flex-direction:column>"),Y=S("<img src=/assets/Google.svg width=20px style=margin-right:10px>");const j=i("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
`,H=i(v)`
  height: 100%;
  border-radius: 8px;
  margin: 8px;
  margin-top: 0;
  margin-bottom: 0;
  overflow: auto;
  flex: 1;
`,X=i(v)`
  width: 300px;
  margin: auto;
  padding: 10px;
`,J=i("div")`
  color: var(--primary-color);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`,y=U`
  margin-top: 20px;
  display: block;
  text-align: center;
`;function Te(){const[l]=R(),[r]=O(),P=q(),m=G(),[c,p]=a(!1),[n,g]=a({message:"",path:""}),[b,k]=a(""),[T,C]=a("");_(()=>{M(h.USER_TOKEN,null)&&m("/app",{replace:!0}),l.code&&s(void 0,l.code)});const s=async(t,L)=>{t?.preventDefault();const N=P.query.redirect||"/app";if(c())return;p(!0),g({message:"",path:""});const u=await z(b().trim(),T().trim(),L).catch(d=>{g({message:d.message,path:d.path||"unk"})});p(!1),u&&($(h.USER_TOKEN,u.token),m(N))},E=async()=>{B(!0).then(t=>{window.location.href=t})};return e(j,{class:"login-page-container",get children(){return[e(V,{get children(){return r("fP/c5d")}}),e(F,{}),e(H,{get children(){return e(X,{class:"container",get children(){return[(()=>{var t=W();return t.addEventListener("submit",s),o(t,e(J,{get children(){return r("WqVaBm")}}),null),o(t,e(x,{margin:[10,0,10,0],get label(){return r("SYDkRi")},errorName:["email","usernameAndTag"],type:"text",get error(){return n()},onText:k}),null),o(t,e(x,{margin:[10,0,10,0],get label(){return r("VpswP2")},type:"password",get error(){return n()},onText:C}),null),o(t,e(A,{get when(){return n().path==="unk"},get children(){return e(D,{size:16,color:"var(--alert-color)",get children(){return n().message}})}}),null),o(t,e(w,{primary:!0,style:{flex:1},margin:[10,0,0,0],iconName:"login",get label(){return K(()=>!!c())()?r("APX5NR"):r("Sglsl2")},onClick:s}),null),t})(),e(w,{get customChildrenLeft(){return Y()},onclick:E,label:"Login with Google",margin:[10,0,0,0],padding:8}),e(f,{class:y,href:"/reset-password",get children(){return r("3GMjK2")}}),e(f,{class:y,href:"/register",get children(){return r("1szYwa")}})]}})}}),e(I,{})]}})}export{Te as default};
//# sourceMappingURL=LoginPage-CIVzu8YA.js.map
