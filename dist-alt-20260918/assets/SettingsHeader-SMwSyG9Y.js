import{e as m,D as H,E as S,c as t,S as u,m as i,H as v,A as L,a4 as N,C as R}from"./ModerationService-CpG_--VM.js";import{b as j,F as J}from"./useStore-BX0H4HHl.js";import{A as O,F as q,T as s}from"./Text-zTrywdpE.js";import{a as D,s as l,u as G,F as K}from"./Flexbox-D5klO2LR.js";import{B as M}from"./Banner-0ZZZbkvm.js";import{s as r}from"./settingsHeaderPreview-1k8aCmYV.js";import{C as Q}from"./ClanTag-BnwlqPvK.js";const V=l("div")`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding-left: 30px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  height: 100%;
`,Z=l(K)`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  z-index: 1111;
  background: rgba(0, 0, 0, 0.86);
  backdrop-filter: blur(34px);
  padding: 10px;
  border-radius: 8px;
`,_=l(D)`
  font-size: 16px;
  margin-bottom: 5px;
  overflow-wrap: anywhere;
  overflow: hidden;
  line-height: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`,ee=G`
  z-index: 111;
`,te=l("div")`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat !important;
  border-radius: 50%;
  ${n=>n.cropPosition}
`,re=l("div")`
  position: absolute;
  inset: 0;
  ${n=>n.cropPosition}
`,ue=n=>{const[C,F]=m(),[k,y]=m(),{account:d,servers:W,friends:E}=j(),a=()=>d.user(),A=()=>W.array().length||"0",B=()=>E.array().filter(e=>e.status===J.FRIENDS).length||"0",{width:T}=R(),[z,I]=m({height:0,width:0}),[P,X]=m({height:0,width:0});H(S(()=>r.avatar,e=>{e&&$(e).then(I)})),H(S(()=>r.banner,e=>{e&&$(e).then(X)}));const h=()=>T()<=500?70:100,Y=()=>{const e=r.avatarPoints;if(!e)return"";const o=h()&&C()?.clientWidth||0,b=h()&&C()?.clientHeight||0,p=z().width,f=z().height,x=e[0],w=e[1],c=o/(e[2]-e[0]),g=b/(e[3]-e[1]);return`
      background-position: -${x*c}px -${w*g}px !important;
      background-size: ${p*c}px ${f*g}px !important;
    `},U=()=>{const e=r.bannerPoints;if(!e)return"";const o=k()?.clientWidth||0,b=k()?.clientHeight||0,p=P().width,f=P().height,x=e[0],w=e[1],c=o/(e[2]-e[0]),g=b/(e[3]-e[1]);return`
      background-position: -${x*c}px -${w*g}px !important;
      background-size: ${p*c}px ${f*g}px !important;
      background-repeat: no-repeat !important;
    `};async function $(e){const o=new Image;return o.src=e,await o.decode(),{width:o.width,height:o.height}}return t(u,{get when(){return a()},get children(){return t(M,{ref:y,maxHeight:250,get margin(){return n.bot?0:void 0},animate:!0,get hexColor(){return n.bot?.hexColor||a()?.hexColor},get url(){return i(()=>!!(r.bannerPoints||r.banner===null))()?void 0:r.banner||N(n.bot||a(),"banner")},get children(){return[t(u,{get when(){return i(()=>!!r.bannerPoints)()&&r.banner!==void 0},get children(){return t(re,{ref:y,get cropPosition(){return U()},get style(){return{background:`url("${r.banner}")`}}})}}),t(V,{get children(){return[t(O,{animate:!0,get user(){return n.bot||d.user()},get size(){return h()},class:ee,get children(){return i(()=>!!r.avatar)()?t(te,{ref:F,get cropPosition(){return Y()},get style(){return{background:`url("${r.avatar}")`}}}):i(()=>r.avatar===null)()?t(q,{get size(){return h()},get serverOrUser(){return n.bot||d.user()},get background(){return(n.bot||d.user()).hexColor}}):null}}),t(Z,{get children(){return[t(_,{get children(){return[t(s,{get children(){return r.username||n.bot?.username||a().username}}),t(u,{get when(){return r.tag||n.bot?.tag||a().tag},get children(){return t(s,{opacity:.7,get children(){return[":",i(()=>r.tag||n.bot?.tag||a().tag)]}})}}),t(u,{get when(){return a()?.profile?.clan},get children(){return t(Q,{get clan(){return a()?.profile?.clan}})}})]}}),t(u,{get when(){return!n.bot},get children(){return[t(D,{gap:5,get children(){return[t(s,{size:14,opacity:.8,get children(){return[i(()=>A())," ",i(()=>v("Tr3jLP"))]}}),t(s,{size:14,children:"•"}),t(s,{size:14,opacity:.8,get children(){return[i(()=>B())," ",i(()=>v("01y3Jv"))]}})]}}),t(s,{size:14,get children(){return t(L,{href:"/app/settings/account",get children(){return v("trW0Ng")}})}})]}})]}})]}})]}})}})};export{ue as S};
//# sourceMappingURL=SettingsHeader-SMwSyG9Y.js.map
