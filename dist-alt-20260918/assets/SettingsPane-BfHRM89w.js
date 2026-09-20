import{o as a,c as e,S as i,O as p,u as c}from"./ModerationService-JKa8HDPL.js";import{S as u}from"./SettingsHeader-CdpmdPQU.js";import{b as g}from"./useStore-1zAIwTgm.js";import{s as h}from"./Flexbox-CKnPoiWr.js";import{s as r}from"./Settings-COE5c76O.js";import"./Text-D1ScQjsd.js";import"./useResizeObserver-5zHNQ4fP.js";import"./Banner-CVIIMr4F.js";import"./settingsHeaderPreview-CyCwfoxf.js";import"./ClanTag-DJCmGglO.js";import"./Emoji-CBS3HK9g.js";import"./date-DqCgL0Ei.js";import"./languages-zn42qa69.js";import"./CodeBlock-CwKQuSal.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-CvJksU59.js";import"./ContextMenu-DhGNygfK.js";import"./browser-BM56HFVq.js";import"./Input-DoZRayyi.js";import"./Notice-BfoaFfM1.js";import"./DeleteConfirmModal-Cu3EoCaP.js";import"./GlobalEvents-IGv04jiB.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Skeleton-4ICHWQuq.js";import"./ServerVerifiedIcon-DUdLvsuu.js";import"./useJoinServer-PT3ro9QY.js";const l=h("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
`;function K(){const{account:o}=g(),n=()=>o.user();a(async()=>{for(let t=0;t<r.length;t++)await r[t]?.element.preload()});const m=()=>r.find(t=>c(()=>`/app/settings/${t.routePath}`)());return e(i,{get when(){return n()},get children(){return e(l,{get children(){return[e(i,{get when(){return!m()?.hideHeader},get children(){return e(u,{})}}),e(p,{name:"settingsPane"})]}})}})}export{K as default};
//# sourceMappingURL=SettingsPane-BfHRM89w.js.map
