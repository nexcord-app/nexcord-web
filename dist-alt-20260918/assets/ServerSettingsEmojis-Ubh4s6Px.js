import{z as E,e as h,D as k,H as i,o as z,c0 as N,c as e,B as R,S as A,F as P,c1 as _,m as x,t as $,i as D,K as M,b as T,d as V,a3 as G,c2 as H,c3 as K}from"./ModerationService-DJHF7x8B.js";import{b as Y}from"./useStore-DBb0Z1Ja.js";import{E as L}from"./ClanTag-HmJJCvQp.js";import{T as b,B as I,A as W}from"./Text-C_egcRFS.js";import{B as Z,a as j}from"./Breadcrumb-Buww-gge.js";import{F as q}from"./FileBrowser-DX9BXOgA.js";import{u as S,F as w,a as B,s}from"./Flexbox-CtT2pseo.js";import{S as J}from"./SettingsBlock-BIzHvMnQ.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Emoji-BZLuU_6X.js";import"./useResizeObserver-C51kiEgZ.js";import"./date-2y0WWb20.js";import"./languages-DKaNROAR.js";import"./CodeBlock-D-TymAPw.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-BtudyDaE.js";import"./ContextMenu-D74Pk1Wi.js";import"./browser-R3nOtTKF.js";import"./Input-C6-Ij65G.js";import"./Notice-CRa-IqGB.js";import"./DeleteConfirmModal-DLkL_jIo.js";import"./GlobalEvents-DMigQF6C.js";import"./Skeleton-Br6MF7Mb.js";import"./ServerVerifiedIcon-Bomy1K6H.js";import"./useJoinServer-DicVn5o5.js";var O=$("<div>");const Q=s("div")`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;s(w)`
  margin-top: 10px;
`;function Fe(){const t=E(),{servers:a,header:c,account:l}=Y(),[u,g]=h(void 0),[o,r]=h([]);k(()=>{c.updateHeader({title:i("3i16p4")+" - "+i("FI5I02"),serverId:t.serverId,iconName:"settings"})});const p=()=>a.get(t.serverId),y=async m=>{const f=n=>new Promise(d=>setTimeout(d,n)),v=Array.from(m).map(n=>async()=>{const d=n.name.split(".")[0];d&&(await _(t.serverId,d.substring(0,15),n).then(F=>{r(()=>[{...F,uploadedBy:l.user()},...o()])}),await f(800))});for(let n=0;n<v.length;n++)await v[n]?.()};z(()=>{N(t.serverId).then(r)});const C=m=>{r(o().filter(f=>f!==m))};return e(Q,{get children(){return[e(Z,{get children(){return[e(j,{get href(){return R.SERVER_MESSAGES(t.serverId,p()?.defaultChannelId)},icon:"home",get title(){return p()?.name}}),e(j,{get title(){return i("FI5I02")}})]}}),e(b,{size:24,style:{"margin-bottom":"10px"},get children(){return i("FI5I02")}}),e(J,{icon:"face",get label(){return i("uzNLGt")},get description(){return i("WMvYgE")},get class(){return S`
          && {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            margin-bottom: 1px;
          }
        `},get children(){return[e(q,{multiple:!0,accept:"images",ref:g,onChange:y}),e(I,{get label(){return i("g2z6yK")},onClick:()=>u()?.open()})]}}),e(X,{get count(){return o().length},get serverVerified(){return p()?.verified}}),e(A,{get when(){return o()?.length},get children(){return e(P,{get each(){return o()},children:m=>e(re,{emoji:m,get onDelete(){return C(m)}})})}})]}})}const U=s("div")`
  margin-bottom: 1px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.06);
  padding-left: 10px;
`,X=t=>{const a=()=>t.serverVerified?200:80;return e(U,{get children(){return e(b,{size:13,opacity:.6,get children(){return["(",x(()=>t.count),"/",x(()=>a()),")"]}})}})},ee=s(B)`
  align-items: center;

  margin-bottom: 2px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.06);

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  &:not(:last-child) {
    border-radius: 0;
    margin-bottom: 1px;
  }
`,te=s("input")`
  background-color: transparent;
  color: white;
  border: none;
  margin-left: 10px;
  padding: 5px;
  max-width: 110px;
`;function re(t){const[a,c]=h(t.emoji.name),l=E(),u=async()=>{const r=a().trim();if(!r.length)return c(t.emoji.name);await H(l.serverId,t.emoji.id,r)},g=r=>{c(r.target.value.replace(/[^0-9a-zA-Z]/g,"_"))},o=()=>{K(l.serverId,t.emoji.id).then(t.onDelete)};return e(ee,{get children(){return[(()=>{var r=O();return D(r,e(L,{get name(){return t.emoji.name},get animated(){return t.emoji.gif},get url(){return`${M.NERIMITY_CDN}emojis/${t.emoji.id}${t.emoji.gif&&!t.emoji.webp?".gif":".webp"}`}})),T(()=>V(r,G("markup","largeEmoji"))),r})(),e(w,{get children(){return[e(te,{onblur:u,spellcheck:"false",maxlength:15,get value(){return a()},onInput:g}),e(B,{gap:5,style:{"align-items":"center","margin-left":"15px","margin-top":"5px"},get children(){return[e(W,{get user(){return t.emoji.uploadedBy},size:15}),e(b,{size:13,get children(){return t.emoji.uploadedBy.username}})]}})]}}),e(I,{get class(){return S`
          margin-left: auto;
        `},onClick:o,padding:5,iconSize:16,color:"var(--alert-color)",iconName:"delete"})]}})}export{Fe as default};
//# sourceMappingURL=ServerSettingsEmojis-Ubh4s6Px.js.map
