import{z,e as h,D as x,E as w,h as S,c as t,m as s,a4 as k,S as v,A as G,B as O,C as W,o as X,O as Y}from"./ModerationService-CpG_--VM.js";import{b as y}from"./useStore-BX0H4HHl.js";import{A as L,F as N,T as m}from"./Text-zTrywdpE.js";import{a as U,s as u,u as V,F as _}from"./Flexbox-D5klO2LR.js";import{S as j}from"./ServerVerifiedIcon-j5MOslrQ.js";import{I as K}from"./browser-By5Llgm9.js";import{B as q}from"./Banner-0ZZZbkvm.js";import{s as r}from"./serverSettingsHeaderPreview-YTyHpjVm.js";import{s as C}from"./ServerSettings-fIhjaZK6.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-D1YIQi8T.js";const J=u("div")`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding-left: 30px;
  flex-shrink: 0;
  overflow: hidden;
  height: 100%;
`,Q=u(_)`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  z-index: 1111;
  background: rgba(0, 0, 0, 0.86);
  backdrop-filter: blur(34px);
  padding: 10px;
  border-radius: 8px;
`,Z=V`
  z-index: 111;
`,ee=u("div")`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat !important;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  ${i=>i.cropPosition}
`,te=u("div")`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  ${i=>i.cropPosition}
`,re=()=>{const[i]=K(),l=z(),{servers:p,serverMembers:c}=y(),a=()=>p.get(l.serverId),E=()=>c.array(l.serverId).length,{width:P}=W(),[$,I]=h(),[A,D]=h(),[B,H]=h({width:0,height:0}),[F,R]=h({width:0,height:0});async function b(e){const n=new Image;return n.src=e,await n.decode(),{width:n.width,height:n.height}}x(w(()=>r.avatar,e=>{e&&b(e).then(H)})),x(w(()=>r.banner,e=>{e&&b(e).then(R)}));const f=()=>P()<=1100?70:100,M=S(()=>{const e=r.avatarPoints,n=$(),o=B();if(!e||!n||!o.width)return"";const d=n.clientWidth/(e[2]-e[0]),g=n.clientHeight/(e[3]-e[1]);return`
      background-position: -${e[0]*d}px -${e[1]*g}px !important;
      background-size: ${o.width*d}px ${o.height*g}px !important;
    `}),T=S(()=>{const e=r.bannerPoints,n=A(),o=F();if(!e||!n||!o.width)return"";const d=n.clientWidth/(e[2]-e[0]),g=n.clientHeight/(e[3]-e[1]);return`
      background-position: -${e[0]*d}px -${e[1]*g}px !important;
      background-size: ${o.width*d}px ${o.height*g}px !important;
      background-repeat: no-repeat !important;
    `});return t(v,{get when(){return a()},get children(){return t(q,{maxHeight:250,animate:!0,get url(){return s(()=>!!(r.banner||r.banner===null))()?void 0:k(a(),"banner")},get hexColor(){return a()?.hexColor},get children(){return[s(()=>s(()=>!!r.banner)()?t(te,{ref:D,get cropPosition(){return T()},get style(){return{background:`url("${r.banner}")`}}}):null),t(J,{get children(){return[t(L,{animate:!0,get url(){return s(()=>!!r.avatar)()?void 0:k(a(),"avatar")},get server(){return a()},get size(){return f()},class:Z,get children(){return s(()=>!!r.avatar)()?t(ee,{ref:I,get cropPosition(){return M()},get style(){return{background:`url("${r.avatar}")`}}}):s(()=>r.avatar===null)()?t(N,{get size(){return f()},get serverOrUser(){return a()},get background(){return a()?.hexColor}}):null}}),t(Q,{get children(){return[t(U,{gap:5,get children(){return[t(m,{get children(){return r.name||a().name}}),t(v,{get when(){return a()?.verified},get children(){return t(j,{})}})]}}),t(m,{size:14,opacity:.8,get children(){return i("KX0ajx",{count:E()})}}),t(m,{size:14,get children(){return t(G,{get href(){return O.SERVER_SETTINGS_GENERAL(a().id)},get children(){return i("leiYGA")}})}})]}})]}})]}})}})},ne=u("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
`;function me(){const i=z(),{servers:l}=y(),p=()=>l.get(i.serverId);return X(async()=>{for(let c=0;c<C.length;c++)await C[c]?.element.preload()}),t(v,{get when(){return p()},get children(){return t(ne,{get children(){return[t(re,{}),t(Y,{name:"settingsPane"})]}})}})}export{me as default};
//# sourceMappingURL=ServerSettingsPane-CsfpDRSO.js.map
