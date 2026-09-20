import{z as A,e as u,H as t,o as L,g as R,c as e,B as x,S as F,F as E,c4 as O,m as l,A as y,c5 as T}from"./ModerationService-DJHF7x8B.js";import{b as k}from"./useStore-DBb0Z1Ja.js";import{D as M,T as B,A as P,B as z}from"./Text-C_egcRFS.js";import{B as $,a as C}from"./Breadcrumb-Buww-gge.js";import{I as q}from"./Input-C6-Ij65G.js";import{a as D,u as S,s as h,F as w}from"./Flexbox-CtT2pseo.js";import{S as H}from"./SettingsBlock-BIzHvMnQ.js";import{f as Q}from"./date-2y0WWb20.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-C51kiEgZ.js";import"./languages-DKaNROAR.js";const V=h(w)`
  gap: 10px;
  padding: 10px;
`;function te(){const n=A(),{servers:s}=k(),[c,m]=u([]),[o,p]=u(""),[d,f]=u("alphabetical"),v=[{id:"alphabetical",label:t("5yHclr")},{id:"unsorted",label:t("QMRB+2")}],g=()=>{const r=c().filter(i=>i.user.username.toLowerCase().includes(o().trim().toLowerCase())||i.user.id.toLowerCase().includes(o().trim().toLowerCase()));return d()==="alphabetical"?r.sort((i,b)=>i.user.username.localeCompare(b.user.username)):r},a=async()=>{const r=await O(n.serverId);m(r)};L(()=>{a();const r=setInterval(a,1e4);R(()=>clearInterval(r))});const I=()=>s.get(n.serverId);return e(V,{get children(){return[e($,{get children(){return[e(C,{get href(){return x.SERVER_MESSAGES(n.serverId,I()?.defaultChannelId)},icon:"home",get title(){return I()?.name}}),e(C,{get title(){return t("g/xmWF")}})]}}),e(D,{gap:10,get children(){return[e(q,{get label(){return t("H5N5PP")},get value(){return o()},onText:p,get class(){return S`
            flex: 1;
            min-width: 200px;
            margin: 0;
          `}}),e(M,{get title(){return t("L1aQvJ")},items:v,get selectedId(){return d()},onChange:r=>f(r.id),get class(){return S`
            margin: 0;
          `}})]}}),e(F,{get when(){return g().length>0},get fallback(){return e(B,{size:14,opacity:.6,get class(){return S`
              padding: 30px 0;
              text-align: center;
            `},get children(){return t("Sfd+1Z")}})},get children(){return e(E,{get each(){return g()},children:r=>e(j,{ban:r,removeLocalBan:()=>m(i=>i.filter(b=>b.user.id!==r.user.id))})})}})]}})}function j(n){const s=n.ban.user,[c,m]=u(!1),[o,p]=u(!1),d=()=>{c()||(m(!0),p(!0),setTimeout(()=>{T(n.ban.serverId,s.id).finally(()=>{n.removeLocalBan()})},800))},f=h(P)`
    width: 3em;
    height: 3em;
    min-width: 26px;
    min-height: 26px;
    border-radius: 50%;
    flex-shrink: 0;
    transition: all 0.8s ease-in-out;
    transform: ${({removing:a})=>a?"scale(0) rotate(360deg)":"scale(1) rotate(0deg)"};
    opacity: ${({removing:a})=>a?0:1};
  `,v=h(H)`
    transition: all 0.8s ease-in-out;
    opacity: ${({removing:a})=>a?0:1};
    transform: ${({removing:a})=>a?"scale(0.5)":"scale(1)"};
  `,g=h(w)`
    gap: 2px;
  `;return e(v,{get removing(){return o()},get icon(){return e(y,{get href(){return x.PROFILE(s.id)},get children(){return e(f,{user:s,get removing(){return o()}})}})},get label(){return e(y,{get href(){return x.PROFILE(s.id)},style:{"text-decoration":"none"},get children(){return s.username}})},get description(){return e(g,{get children(){return[e(B,{size:12,opacity:.6,get children(){return[l(()=>t("306OyA")),":"," ",l(()=>n.ban.reason||t("A5F+5G"))]}}),e(B,{size:12,opacity:.6,get children(){return[l(()=>t("fVjjTw")),":"," ",l(()=>l(()=>!!n.ban.bannedAt)()?Q(n.ban.bannedAt):t("24vSO6"))]}})]}})},get children(){return e(z,{get label(){return l(()=>!!c())()?t("ShYt60"):t("J0KhTV")},color:"var(--alert-color)",iconName:"undo",onClick:d})}})}export{te as default};
//# sourceMappingURL=ServerSettingsBans-7oEh_TTZ.js.map
