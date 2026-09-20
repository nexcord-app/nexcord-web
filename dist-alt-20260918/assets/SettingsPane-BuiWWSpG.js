import{o as a,c as e,S as i,O as p,u as c}from"./ModerationService-DJHF7x8B.js";import{S as u}from"./SettingsHeader-DelqFlfS.js";import{b as g}from"./useStore-DBb0Z1Ja.js";import{s as h}from"./Flexbox-CtT2pseo.js";import{s as r}from"./Settings-C2scR8C3.js";import"./Text-C_egcRFS.js";import"./useResizeObserver-C51kiEgZ.js";import"./Banner-C75TSNvg.js";import"./settingsHeaderPreview-CMCMlBB1.js";import"./ClanTag-HmJJCvQp.js";import"./Emoji-BZLuU_6X.js";import"./date-2y0WWb20.js";import"./languages-DKaNROAR.js";import"./CodeBlock-D-TymAPw.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-BtudyDaE.js";import"./ContextMenu-D74Pk1Wi.js";import"./browser-R3nOtTKF.js";import"./Input-C6-Ij65G.js";import"./Notice-CRa-IqGB.js";import"./DeleteConfirmModal-DLkL_jIo.js";import"./GlobalEvents-DMigQF6C.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Skeleton-Br6MF7Mb.js";import"./ServerVerifiedIcon-Bomy1K6H.js";import"./useJoinServer-DicVn5o5.js";const l=h("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
`;function K(){const{account:o}=g(),n=()=>o.user();a(async()=>{for(let t=0;t<r.length;t++)await r[t]?.element.preload()});const m=()=>r.find(t=>c(()=>`/app/settings/${t.routePath}`)());return e(i,{get when(){return n()},get children(){return e(l,{get children(){return[e(i,{get when(){return!m()?.hideHeader},get children(){return e(u,{})}}),e(p,{name:"settingsPane"})]}})}})}export{K as default};
//# sourceMappingURL=SettingsPane-BuiWWSpG.js.map
