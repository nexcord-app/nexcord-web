import{am as R,$ as q,U as G,e as a,o as _,c as e,t as S,i as o,S as A,m as K,A as f,r as M,v as h,ae as $}from"./ModerationService--RmbjC5p.js";import{I as x}from"./Input-Cxyj3EM0.js";import{D as z,E as B}from"./useStore-B8c8g-Rg.js";import{T as D,B as w}from"./Text-CVNHmjKJ.js";import{P as F,a as I}from"./PageFooter-qkhtqmo-.js";import{s as i,F as v,u as U}from"./Flexbox-DdRgUkVN.js";import{I as O}from"./browser-BunxtBnb.js";import{M as V}from"./MetaTitle-EETaEaDk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useResizeObserver-CpC9RR9B.js";import"./Skeleton-B5QliNYZ.js";import"./LogoutModal-Be7MkMP9.js";import"./logout-CA2llaas.js";import"./languages-Cb1WEjVH.js";import"./ClanTag-MlhFir4K.js";import"./Emoji-CDOypsoU.js";import"./date-BRn35p1W.js";import"./CodeBlock-BMkzsw0g.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-CnIGVF2Z.js";import"./ContextMenu-DlhjvYHX.js";import"./Notice-DEuV9al1.js";import"./DeleteConfirmModal-Brc2rzZx.js";import"./GlobalEvents-CaCLsBJj.js";import"./ServerVerifiedIcon-W43yudYR.js";import"./useJoinServer-Cpi-4iyc.js";import"./LogoMono-Bbm6vX6Z.js";var W=S("<form action=# style=display:flex;flex-direction:column>"),Y=S("<img src=/assets/Google.svg width=20px style=margin-right:10px>");const j=i("div")`
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
//# sourceMappingURL=LoginPage-CkrXmvai.js.map
