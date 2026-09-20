import{o as a,c as e,S as i,O as p,u as c}from"./ModerationService--RmbjC5p.js";import{S as u}from"./SettingsHeader-DANoQbbh.js";import{b as g}from"./useStore-B8c8g-Rg.js";import{s as h}from"./Flexbox-DdRgUkVN.js";import{s as r}from"./Settings-DxHGqyWu.js";import"./Text-CVNHmjKJ.js";import"./useResizeObserver-CpC9RR9B.js";import"./Banner-Byap_1JA.js";import"./settingsHeaderPreview-D0PI_5up.js";import"./ClanTag-MlhFir4K.js";import"./Emoji-CDOypsoU.js";import"./date-BRn35p1W.js";import"./languages-Cb1WEjVH.js";import"./CodeBlock-BMkzsw0g.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-CnIGVF2Z.js";import"./ContextMenu-DlhjvYHX.js";import"./browser-BunxtBnb.js";import"./Input-Cxyj3EM0.js";import"./Notice-DEuV9al1.js";import"./DeleteConfirmModal-Brc2rzZx.js";import"./GlobalEvents-CaCLsBJj.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Skeleton-B5QliNYZ.js";import"./ServerVerifiedIcon-W43yudYR.js";import"./useJoinServer-Cpi-4iyc.js";const l=h("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
`;function K(){const{account:o}=g(),n=()=>o.user();a(async()=>{for(let t=0;t<r.length;t++)await r[t]?.element.preload()});const m=()=>r.find(t=>c(()=>`/app/settings/${t.routePath}`)());return e(i,{get when(){return n()},get children(){return e(l,{get children(){return[e(i,{get when(){return!m()?.hideHeader},get children(){return e(u,{})}}),e(p,{name:"settingsPane"})]}})}})}export{K as default};
//# sourceMappingURL=SettingsPane-CIz79MUq.js.map
