import{J as R,aY as z,c as e,E as A,G as N,s as b,X as O,b as a,o as G,V as l,F as d,T as o,U as c,m as K,u as w,S as m,ac as L,C as M,az as P,cF as T,a4 as _,bw as k,bv as D,x as X,y as Y,K as j}from"./useStore-C81yKXnX.js";import{P as q,a as H}from"./PageFooter-Df0a3Gm7.js";import{g as U}from"./ApplicationService-BDcrUZt3.js";import{A as y}from"./Avatar-CnjpHkJi.js";import{D as V}from"./DropDown-VSE3I8gP.js";import{C as $}from"./Checkbox-cAafcjqo.js";import"./_commonjsHelpers-CE1G-McA.js";import"./browser-QP6z6XX1.js";import"./logout-DfWc_cxe.js";import"./Skeleton-C81J_hd6.js";import"./useResizeObserver-DorGCpy9.js";var J=A("<div style=display:flex;padding-top:20px;padding-bottom:20px;margin:auto>");const Q=b("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`,W=b("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 8px;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 8px;
  flex: 1;
  align-items: center;
`;function me(){const r=R(),[i]=z(),n=()=>i.perms?parseInt(i.perms):0;return e(Q,{get children(){return[e(q,{}),e(W,{class:"content",get children(){var t=J();return N(t,e(Z,{get appId(){return r.appId},get permissions(){return n()}})),t}}),e(H,{})]}})}const Z=r=>{const i=O(),[n,t]=a(null),[u,B]=a([]),[p,C]=a(r.permissions??0),[h,I]=a(null),[E,v]=a(!1),[f,g]=a(null),[x,S]=a(null);G(async()=>{if(!X(Y.USER_TOKEN,null)){i(j.LOGIN(location.pathname+location.search),{replace:!0});return}const s=await U(r.appId,!0);t(s.bot),B(s.servers)});const F=async()=>{if(g(null),S(null),!h()){g(c("X52xTx"));return}E()||(v(!0),T(h(),r.appId,p()).then(()=>S("Bot added to the server.")).catch(s=>g(s.message)).finally(()=>v(!1)))};return e(m,{get when(){return n()},get children(){return e(l,{style:{overflow:"auto",margin:"auto"},gap:12,get children(){return[e(d,{itemsCenter:!0,gap:12,get children(){return[e(l,{gap:12,get children(){return e(y,{animate:!0,get user(){return n()},size:80})}}),e(l,{gap:8,get children(){return[e(o,{bold:!0,size:18,get children(){return n()?.username}}),e(d,{gap:8,get children(){return[e(o,{get children(){return c("z8v5Qs")}}),e(y,{animate:!0,get user(){return n().application.creatorAccount.user},size:24}),e(o,{get children(){return[K(()=>n().application.creatorAccount.user.username)," "]}})]}})]}})]}}),e(ee,{get permissions(){return p()},setPermissions:C}),e(V,{onChange:s=>I(s.id),get title(){return c("GYPvtr")},get class(){return w`
            flex: 1;
            width: 100%;
          `},get items(){return u().map(s=>({label:s.name,id:s.id}))}}),e(m,{get when(){return f()},get children(){return e(o,{color:"var(--alert-color)",get children(){return f()}})}}),e(m,{get when(){return x()},get children(){return e(o,{color:"var(--success-color)",get children(){return x()}})}}),e(L,{get label(){return c("Y/ceCj")},iconName:"add",primary:!0,margin:0,styles:{"align-self":"stretch"},onClick:F})]}})}})},ee=r=>{const i=Object.values(_),n=t=>{const u=P(r.permissions,t);r.setPermissions(u?k(r.permissions,t):D(r.permissions,t))};return e(l,{gap:8,get class(){return w`
        flex: 1;
        width: 100%;
      `},get children(){return[e(o,{opacity:.8,get children(){return c("eXGKVB")}}),e(l,{gap:12,get children(){return e(M,{each:i,children:t=>e(d,{gap:8,get children(){return e($,{get checked(){return P(r.permissions,t.bit)},onChange:()=>n(t.bit),get label(){return t.name()}})}})})}})]}})};export{Z as InviteBotPopup,me as default};
//# sourceMappingURL=InviteServerBot-DvNJDezH.js.map
