import{J as A,W as R,b as u,U as t,o as L,c as e,K as x,F,u as S,S as E,C as T,T as C,s as h,V as w,ac as O,m as l,H as B,dE as k,h as M,dF as D}from"./useStore-B0mu5xqR.js";import{A as P}from"./Avatar-Dm8O4A-8.js";import{B as V,a as y}from"./Breadcrumb-BbBmT7rf.js";import{I as $}from"./Input-B_7GKQol.js";import{S as q}from"./SettingsBlock-C1ny6-Rp.js";import{D as z}from"./DropDown-D2LrCkxa.js";import{f as G}from"./date-BKAW-sdF.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-78Qyl67J.js";const j=h(w)`
  gap: 10px;
  padding: 10px;
`;function X(){const n=A(),{servers:s}=R(),[c,m]=u([]),[o,f]=u(""),[d,p]=u("alphabetical"),b=[{id:"alphabetical",label:t("ygeDGt")},{id:"unsorted",label:t("QMRB+2")}],g=()=>{const r=c().filter(i=>i.user.username.toLowerCase().includes(o().trim().toLowerCase())||i.user.id.toLowerCase().includes(o().trim().toLowerCase()));return d()==="alphabetical"?r.sort((i,v)=>i.user.username.localeCompare(v.user.username)):r},a=async()=>{const r=await D(n.serverId);m(r)};L(()=>{a();const r=setInterval(a,1e4);M(()=>clearInterval(r))});const I=()=>s.get(n.serverId);return e(j,{get children(){return[e(V,{get children(){return[e(y,{get href(){return x.SERVER_MESSAGES(n.serverId,I()?.defaultChannelId)},icon:"home",get title(){return I()?.name}}),e(y,{get title(){return t("g/xmWF")}})]}}),e(F,{gap:10,get children(){return[e($,{get label(){return t("Rc0gTL")},get value(){return o()},onText:f,get class(){return S`
            flex: 1;
            min-width: 200px;
            margin: 0;
          `}}),e(z,{get title(){return t("i7PCr/")},items:b,get selectedId(){return d()},onChange:r=>p(r.id),get class(){return S`
            margin: 0;
          `}})]}}),e(E,{get when(){return g().length>0},get fallback(){return e(C,{size:14,opacity:.6,get class(){return S`
              padding: 30px 0;
              text-align: center;
            `},get children(){return t("Sfd+1Z")}})},get children(){return e(T,{get each(){return g()},children:r=>e(J,{ban:r,removeLocalBan:()=>m(i=>i.filter(v=>v.user.id!==r.user.id))})})}})]}})}function J(n){const s=n.ban.user,[c,m]=u(!1),[o,f]=u(!1),d=()=>{c()||(m(!0),f(!0),setTimeout(()=>{k(n.ban.serverId,s.id).finally(()=>{n.removeLocalBan()})},800))},p=h(P)`
    width: 3em;
    height: 3em;
    min-width: 26px;
    min-height: 26px;
    border-radius: 50%;
    flex-shrink: 0;
    transition: all 0.8s ease-in-out;
    transform: ${({removing:a})=>a?"scale(0) rotate(360deg)":"scale(1) rotate(0deg)"};
    opacity: ${({removing:a})=>a?0:1};
  `,b=h(q)`
    transition: all 0.8s ease-in-out;
    opacity: ${({removing:a})=>a?0:1};
    transform: ${({removing:a})=>a?"scale(0.5)":"scale(1)"};
  `,g=h(w)`
    gap: 2px;
  `;return e(b,{get removing(){return o()},get icon(){return e(B,{get href(){return x.PROFILE(s.id)},get children(){return e(p,{user:s,get removing(){return o()}})}})},get label(){return e(B,{get href(){return x.PROFILE(s.id)},style:{"text-decoration":"none"},get children(){return s.username}})},get description(){return e(g,{get children(){return[e(C,{size:12,opacity:.6,get children(){return[l(()=>t("306OyA")),":"," ",l(()=>n.ban.reason||t("A5F+5G"))]}}),e(C,{size:12,opacity:.6,get children(){return[l(()=>t("fVjjTw")),":"," ",l(()=>l(()=>!!n.ban.bannedAt)()?G(n.ban.bannedAt):t("24vSO6"))]}})]}})},get children(){return e(O,{get label(){return l(()=>!!c())()?t("ShYt60"):t("J0KhTV")},color:"var(--alert-color)",iconName:"undo",onClick:d})}})}export{X as default};
//# sourceMappingURL=ServerSettingsBans-DImE4Mu9.js.map
