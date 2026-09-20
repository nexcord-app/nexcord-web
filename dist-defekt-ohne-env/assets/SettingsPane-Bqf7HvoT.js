import{o as a,c as e,S as i,O as p,u as c}from"./ModerationService-7nF9_67y.js";import{S as u}from"./SettingsHeader-BbYCRRNo.js";import{b as g}from"./useStore-C1x_XtZn.js";import{s as h}from"./Flexbox-DahX4I5v.js";import{s as r}from"./Settings-BBgYIeXj.js";import"./Text-xQnkEBKO.js";import"./useResizeObserver-DLOEUKTg.js";import"./Banner-JoF2XErh.js";import"./settingsHeaderPreview-DHQ-inXn.js";import"./ClanTag-tgfDpOrD.js";import"./Emoji-DE4pWG5a.js";import"./date-QVcUUowu.js";import"./languages-CyEDRxRF.js";import"./CodeBlock-CwHB-ntI.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-qOuREi5_.js";import"./ContextMenu-CinibpIf.js";import"./browser-ByxRPPz2.js";import"./Input-ojZsAQjm.js";import"./Notice-B_aSsICh.js";import"./DeleteConfirmModal-CmXpcZod.js";import"./GlobalEvents-D8oaUrNP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Skeleton-fDFQMXJb.js";import"./ServerVerifiedIcon-Tsm0_ZSI.js";import"./useJoinServer-DpcK9aNf.js";const l=h("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
`;function K(){const{account:o}=g(),n=()=>o.user();a(async()=>{for(let t=0;t<r.length;t++)await r[t]?.element.preload()});const m=()=>r.find(t=>c(()=>`/app/settings/${t.routePath}`)());return e(i,{get when(){return n()},get children(){return e(l,{get children(){return[e(i,{get when(){return!m()?.hideHeader},get children(){return e(u,{})}}),e(p,{name:"settingsPane"})]}})}})}export{K as default};
//# sourceMappingURL=SettingsPane-Bqf7HvoT.js.map
