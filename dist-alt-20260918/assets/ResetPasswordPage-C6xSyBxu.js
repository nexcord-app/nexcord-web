import{aj as F,X as L,b as n,aY as _,c as e,E as H,G as s,T as h,ac as T,m as y,S as K,b4 as M,aI as U,y as V,s as w,V as k,H as X,b5 as $,u as j}from"./useStore-C81yKXnX.js";import{I as v}from"./Input-CGVbQxvr.js";import{P as E,a as N}from"./PageFooter-Df0a3Gm7.js";import{I as q}from"./browser-QP6z6XX1.js";import{M as W}from"./MetaTitle-Dftcq1pS.js";import"./_commonjsHelpers-CE1G-McA.js";import"./logout-DfWc_cxe.js";import"./Skeleton-C81J_hd6.js";import"./Avatar-CnjpHkJi.js";var I=H("<form action=# style=display:flex;flex-direction:column>");const R=w("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
`,z=w(k)`
  height: 100%;
  border-radius: 8px;
  margin: 8px;
  margin-top: 0;
  margin-bottom: 0;
  overflow: auto;
  flex: 1;
`,D=w(k)`
  width: 300px;
  margin: auto;
  padding: 10px;
`,G=w("div")`
  color: var(--primary-color);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`,A=j`
  margin-top: 20px;
  display: block;
  text-align: center;
`;function ne(){const[t]=q(),u=F(),g=L(),[x,o]=n({message:"",path:""}),[m,l]=n(!1),[P,i]=n(""),[c,r]=n(""),[d,p]=n(""),[f]=_(),S=async a=>{a?.preventDefault();const Y=u.query.redirect||"/app";if(m())return;if(l(!0),i(""),o({message:"",path:""}),c()!==d()){o({message:t("fXPX/q"),path:"Confirm Password"}),l(!1);return}const b=await M(f.code,f.userId,c()).catch(C=>{o({message:C.message,path:C.path}),l(!1)});b&&b.token&&(i(t("HbvnW4")),setTimeout(()=>{U(V.USER_TOKEN,b.token),g(Y)},2e3))};return[e(W,{children:"Reset Password"}),e(K,{get when(){return y(()=>!!f.userId)()&&f.code},get fallback(){return e(B,{})},get children(){return e(R,{class:"login-page-container",get children(){return[e(E,{}),e(z,{get children(){return e(D,{class:"container",get children(){var a=I();return a.addEventListener("submit",S),s(a,e(G,{get children(){return t("41YPSg")}}),null),s(a,e(v,{margin:[10,0,10,0],get label(){return t("G2Tbmg")},type:"password",onText:r}),null),s(a,e(v,{margin:[10,0,10,0],get label(){return t("qYguf4")},type:"password",onText:p}),null),s(a,e(h,{size:14,color:"var(--alert-color)",get children(){return x().message}}),null),s(a,e(h,{size:14,color:"var(--success-color)",get children(){return P()}}),null),s(a,e(T,{primary:!0,styles:{flex:1},margin:[10,0,0,0],iconName:"key",get label(){return y(()=>!!m())()?t("8WFbGc"):t("3GMjK2")},onClick:S}),null),a}})}}),e(N,{})]}})}})]}const B=()=>{const[t]=q(),[u,g]=n(!1),[x,o]=n({message:"",path:""}),[m,l]=n(""),[P,i]=n(""),c=async r=>{if(r?.preventDefault(),u())return;g(!0),i(""),o({message:"",path:""});const d=await $(m().trim()).catch(p=>{o({message:p.message,path:p.path})});d&&i(d.message),g(!1)};return e(R,{class:"login-page-container",get children(){return[e(E,{}),e(z,{get children(){return e(D,{class:"container",get children(){return[(()=>{var r=I();return r.addEventListener("submit",c),s(r,e(G,{get children(){return t("41YPSg")}}),null),s(r,e(v,{margin:[10,0,10,0],get label(){return t("kDUfDb")},type:"text",onText:l}),null),s(r,e(h,{size:14,color:"var(--alert-color)",get children(){return x().message}}),null),s(r,e(h,{size:14,color:"var(--success-color)",get children(){return P()}}),null),s(r,e(T,{primary:!0,styles:{flex:1},margin:[10,0,0,0],iconName:"mail",get label(){return y(()=>!!u())()?t("QrgNDV"):t("E1GYNC")},onClick:c}),null),r})(),e(X,{class:A,href:"/login",get children(){return t("TFCoVU")}})]}})}}),e(N,{})]}})};export{ne as default};
//# sourceMappingURL=ResetPasswordPage-C6xSyBxu.js.map
