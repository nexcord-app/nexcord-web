import{o as a,c as e,S as i,O as p,u as c}from"./ModerationService-CpG_--VM.js";import{S as u}from"./SettingsHeader-SMwSyG9Y.js";import{b as g}from"./useStore-BX0H4HHl.js";import{s as h}from"./Flexbox-D5klO2LR.js";import{s as r}from"./Settings-Ig9stBeJ.js";import"./Text-zTrywdpE.js";import"./useResizeObserver-D1YIQi8T.js";import"./Banner-0ZZZbkvm.js";import"./settingsHeaderPreview-1k8aCmYV.js";import"./ClanTag-BnwlqPvK.js";import"./Emoji-D_Yz5f1a.js";import"./date-yc99Ly_9.js";import"./languages-C3qXs8UH.js";import"./CodeBlock-DUGxk4-g.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-DYkTaQk-.js";import"./ContextMenu-FDFJu1Xf.js";import"./browser-By5Llgm9.js";import"./Input-DyE3cipz.js";import"./Notice-BCJa9kR6.js";import"./DeleteConfirmModal-DBKaQEyB.js";import"./GlobalEvents-zRDY--HT.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Skeleton-BaeE1obR.js";import"./ServerVerifiedIcon-j5MOslrQ.js";import"./useJoinServer-Cvhy-yig.js";const l=h("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
`;function K(){const{account:o}=g(),n=()=>o.user();a(async()=>{for(let t=0;t<r.length;t++)await r[t]?.element.preload()});const m=()=>r.find(t=>c(()=>`/app/settings/${t.routePath}`)());return e(i,{get when(){return n()},get children(){return e(l,{get children(){return[e(i,{get when(){return!m()?.hideHeader},get children(){return e(u,{})}}),e(p,{name:"settingsPane"})]}})}})}export{K as default};
//# sourceMappingURL=SettingsPane-xAx7jKY0.js.map
