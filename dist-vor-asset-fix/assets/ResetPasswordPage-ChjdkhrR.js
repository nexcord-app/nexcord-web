import{$ as L,U,e as n,am as Y,c as e,t as _,i as s,m as y,S as $,ae as K,v as M,A as B}from"./ModerationService--RmbjC5p.js";import{I as S}from"./Input-Cxyj3EM0.js";import{P as H,Q}from"./useStore-B8c8g-Rg.js";import{T as h,B as T}from"./Text-CVNHmjKJ.js";import{P as k,a as N}from"./PageFooter-qkhtqmo-.js";import{s as w,F as E,u as V}from"./Flexbox-DdRgUkVN.js";import{I as q}from"./browser-BunxtBnb.js";import{M as W}from"./MetaTitle-EETaEaDk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useResizeObserver-CpC9RR9B.js";import"./Skeleton-B5QliNYZ.js";import"./LogoutModal-Be7MkMP9.js";import"./logout-CA2llaas.js";import"./languages-Cb1WEjVH.js";import"./ClanTag-MlhFir4K.js";import"./Emoji-CDOypsoU.js";import"./date-BRn35p1W.js";import"./CodeBlock-BMkzsw0g.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-CnIGVF2Z.js";import"./ContextMenu-DlhjvYHX.js";import"./Notice-DEuV9al1.js";import"./DeleteConfirmModal-Brc2rzZx.js";import"./GlobalEvents-CaCLsBJj.js";import"./ServerVerifiedIcon-W43yudYR.js";import"./useJoinServer-Cpi-4iyc.js";import"./LogoMono-Bbm6vX6Z.js";var R=_("<form action=# style=display:flex;flex-direction:column>");const z=w("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
`,D=w(E)`
  height: 100%;
  border-radius: 8px;
  margin: 8px;
  margin-top: 0;
  margin-bottom: 0;
  overflow: auto;
  flex: 1;
`,F=w(E)`
  width: 300px;
  margin: auto;
  padding: 10px;
`,I=w("div")`
  color: var(--primary-color);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`,X=V`
  margin-top: 20px;
  display: block;
  text-align: center;
`;function be(){const[t]=q(),m=L(),u=U(),[x,a]=n({message:"",path:""}),[g,i]=n(!1),[P,l]=n(""),[c,r]=n(""),[p,d]=n(""),[f]=Y(),b=async o=>{o?.preventDefault();const G=m.query.redirect||"/app";if(g())return;if(i(!0),l(""),a({message:"",path:""}),c()!==p()){a({message:t("fXPX/q"),path:"Confirm Password"}),i(!1);return}const v=await H(f.code,f.userId,c()).catch(C=>{a({message:C.message,path:C.path}),i(!1)});v&&v.token&&(l(t("HbvnW4")),setTimeout(()=>{K(M.USER_TOKEN,v.token),u(G)},2e3))};return[e(W,{children:"Reset Password"}),e($,{get when(){return y(()=>!!f.userId)()&&f.code},get fallback(){return e(j,{})},get children(){return e(z,{class:"login-page-container",get children(){return[e(k,{}),e(D,{get children(){return e(F,{class:"container",get children(){var o=R();return o.addEventListener("submit",b),s(o,e(I,{get children(){return t("41YPSg")}}),null),s(o,e(S,{margin:[10,0,10,0],get label(){return t("G2Tbmg")},type:"password",onText:r}),null),s(o,e(S,{margin:[10,0,10,0],get label(){return t("qYguf4")},type:"password",onText:d}),null),s(o,e(h,{size:14,color:"var(--alert-color)",get children(){return x().message}}),null),s(o,e(h,{size:14,color:"var(--success-color)",get children(){return P()}}),null),s(o,e(T,{primary:!0,style:{flex:1},margin:[10,0,0,0],iconName:"key",get label(){return y(()=>!!g())()?t("8WFbGc"):t("3GMjK2")},onClick:b}),null),o}})}}),e(N,{})]}})}})]}const j=()=>{const[t]=q(),[m,u]=n(!1),[x,a]=n({message:"",path:""}),[g,i]=n(""),[P,l]=n(""),c=async r=>{if(r?.preventDefault(),m())return;u(!0),l(""),a({message:"",path:""});const p=await Q(g().trim()).catch(d=>{a({message:d.message,path:d.path})});p&&l(p.message),u(!1)};return e(z,{class:"login-page-container",get children(){return[e(k,{}),e(D,{get children(){return e(F,{class:"container",get children(){return[(()=>{var r=R();return r.addEventListener("submit",c),s(r,e(I,{get children(){return t("41YPSg")}}),null),s(r,e(S,{margin:[10,0,10,0],get label(){return t("kDUfDb")},type:"text",onText:i}),null),s(r,e(h,{size:14,color:"var(--alert-color)",get children(){return x().message}}),null),s(r,e(h,{size:14,color:"var(--success-color)",get children(){return P()}}),null),s(r,e(T,{primary:!0,style:{flex:1},margin:[10,0,0,0],iconName:"mail",get label(){return y(()=>!!m())()?t("QrgNDV"):t("E1GYNC")},onClick:c}),null),r})(),e(B,{class:X,href:"/login",get children(){return t("TFCoVU")}})]}})}}),e(N,{})]}})};export{be as default};
//# sourceMappingURL=ResetPasswordPage-ChjdkhrR.js.map
