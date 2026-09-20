import{J as E,W as k,b as f,M as F,o as A,c as e,K as N,U as z,T as h,ac as x,u as S,S as R,C as P,dA as V,m as v,E as _,G as $,au as D,p as M,V as w,F as C,s,dB as T,dC as G,dD as H,af as J,a as K}from"./useStore-B0mu5xqR.js";import{E as O}from"./Emoji-Dl_Mqoza.js";import{A as U}from"./Avatar-Dm8O4A-8.js";import{B as W,a as b}from"./Breadcrumb-BbBmT7rf.js";import{F as Y}from"./FileBrowser-CbMrZ7CD.js";import{S as Z}from"./SettingsBlock-C1ny6-Rp.js";import"./_commonjsHelpers-CE1G-McA.js";import"./ServerVerifiedIcon-gLzI5TWF.js";import"./useJoinServer-Dg6-EmYl.js";var q=_("<div>");const L=s("div")`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;s(w)`
  margin-top: 10px;
`;function ue(){const t=E(),{servers:o,header:m,account:d}=k(),[c,u]=f(void 0),[a,r]=f([]);F(()=>{m.updateHeader({title:"Settings - Emojis",serverId:t.serverId,iconName:"settings"})});const g=()=>o.get(t.serverId),I=async i=>{const p=n=>new Promise(l=>setTimeout(l,n)),j=Array.from(i).map(n=>async()=>{const l=n.name.split(".")[0];l&&(await V(t.serverId,l.substring(0,15),n).then(B=>{r(()=>[{...B,uploadedBy:d.user()},...a()])}),await p(800))});for(let n=0;n<j.length;n++)await j[n]?.()};A(()=>{H(t.serverId).then(r)});const y=i=>{r(a().filter(p=>p!==i))};return e(L,{get children(){return[e(W,{get children(){return[e(b,{get href(){return N.SERVER_MESSAGES(t.serverId,g()?.defaultChannelId)},icon:"home",get title(){return g()?.name}}),e(b,{get title(){return z("lfeOwV")}})]}}),e(h,{size:24,style:{"margin-bottom":"10px"},children:"Emojis"}),e(Z,{icon:"face",label:"Custom Emojis",description:"Add your own emojis!",get class(){return S`
          && {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            margin-bottom: 1px;
          }
        `},get children(){return[e(Y,{multiple:!0,accept:"images",ref:u,onChange:I}),e(x,{label:"Add Emojis",onClick:()=>c()?.open()})]}}),e(X,{get count(){return a().length},get serverVerified(){return g()?.verified}}),e(R,{get when(){return a()?.length},get children(){return e(P,{get each(){return a()},children:i=>e(re,{emoji:i,get onDelete(){return y(i)}})})}})]}})}const Q=s("div")`
  margin-bottom: 1px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.06);
  padding-left: 10px;
`,X=t=>{const o=()=>t.serverVerified?200:80;return e(Q,{get children(){return e(h,{size:13,opacity:.6,get children(){return["(",v(()=>t.count),"/",v(()=>o()),")"]}})}})},ee=s(C)`
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
`;function re(t){const[o,m]=f(t.emoji.name),d=E(),c=async()=>{const r=o().trim();if(!r.length)return m(t.emoji.name);await T(d.serverId,t.emoji.id,r)},u=r=>{m(r.target.value.replace(/[^0-9a-zA-Z]/g,"_"))},a=()=>{G(d.serverId,t.emoji.id).then(t.onDelete)};return e(ee,{get children(){return[(()=>{var r=q();return $(r,e(O,{get name(){return t.emoji.name},get animated(){return t.emoji.gif},get url(){return`${D.NERIMITY_CDN}emojis/${t.emoji.id}${t.emoji.gif?".gif":".webp"}`}})),M(()=>J(r,K("markup","largeEmoji"))),r})(),e(w,{get children(){return[e(te,{onblur:c,spellcheck:"false",maxlength:15,get value(){return o()},onInput:u}),e(C,{gap:5,style:{"align-items":"center","margin-left":"15px","margin-top":"5px"},get children(){return[e(U,{get user(){return t.emoji.uploadedBy},size:15}),e(h,{size:13,get children(){return t.emoji.uploadedBy.username}})]}})]}}),e(x,{get class(){return S`
          margin-left: auto;
        `},onClick:a,padding:5,iconSize:16,color:"var(--alert-color)",iconName:"delete"})]}})}export{ue as default};
//# sourceMappingURL=ServerSettingsEmojis-Cgk5c99v.js.map
