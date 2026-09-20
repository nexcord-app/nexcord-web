import{o as a,c as e,S as i,O as p,u as c}from"./ModerationService-DpHh3JQr.js";import{S as u}from"./SettingsHeader-wt0krlmh.js";import{b as g}from"./useStore-DEZEOTom.js";import{s as h}from"./Flexbox-Cufh4wPc.js";import{s as r}from"./Settings-BL-e6MbI.js";import"./Text-CN5caMAL.js";import"./useResizeObserver-Dz383fBa.js";import"./Banner-DcDL1w1m.js";import"./settingsHeaderPreview-D1Vem5s7.js";import"./ClanTag-C2eIxXmO.js";import"./Emoji-D70FO0A0.js";import"./date-0lMVd4xC.js";import"./languages-hMGia7zW.js";import"./CodeBlock-D7JIZP_V.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-CpzYJwQm.js";import"./ContextMenu-C52aux8K.js";import"./browser-pi_zKfjJ.js";import"./Input-C3UKcv4e.js";import"./Notice-BJ8UrUnj.js";import"./DeleteConfirmModal-DPJxjp5o.js";import"./GlobalEvents-ClnSa_YK.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Skeleton-DNejdNgG.js";import"./ServerVerifiedIcon-B67fkgVt.js";import"./useJoinServer-D2q3nWLY.js";const l=h("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
`;function K(){const{account:o}=g(),n=()=>o.user();a(async()=>{for(let t=0;t<r.length;t++)await r[t]?.element.preload()});const m=()=>r.find(t=>c(()=>`/app/settings/${t.routePath}`)());return e(i,{get when(){return n()},get children(){return e(l,{get children(){return[e(i,{get when(){return!m()?.hideHeader},get children(){return e(u,{})}}),e(p,{name:"settingsPane"})]}})}})}export{K as default};
//# sourceMappingURL=SettingsPane-Cnm1cZPA.js.map
