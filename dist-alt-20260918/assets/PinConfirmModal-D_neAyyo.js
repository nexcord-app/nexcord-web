import{b3 as m,b4 as l}from"./useStore-DEZEOTom.js";import{M as o,T as d}from"./Text-CN5caMAL.js";import{o as c,g as p,c as t}from"./ModerationService-DpHh3JQr.js";import{a as g}from"./ClanTag-C2eIxXmO.js";import{u as r}from"./Flexbox-Cufh4wPc.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-Dz383fBa.js";import"./Emoji-D70FO0A0.js";import"./date-0lMVd4xC.js";import"./languages-hMGia7zW.js";import"./CodeBlock-D7JIZP_V.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-CpzYJwQm.js";import"./ContextMenu-C52aux8K.js";import"./browser-pi_zKfjJ.js";import"./Input-C3UKcv4e.js";import"./Notice-BJ8UrUnj.js";import"./DeleteConfirmModal-DPJxjp5o.js";import"./GlobalEvents-ClnSa_YK.js";import"./Skeleton-DNejdNgG.js";import"./ServerVerifiedIcon-B67fkgVt.js";import"./useJoinServer-D2q3nWLY.js";const u=r`
  overflow: auto;
  max-height: 600px;
`,h=r`
  padding-top: 5px;
  border-radius: 8px;
  margin-top: 5px;

  pointer-events: none;

  && {
    padding: 10px;
    border: solid 1px rgba(255, 255, 255, 0.1);
  }
`,f=r`
  max-height: 800px;
  overflow: hidden;
`;function K(e){const i=()=>{if(e.close(),e.message.pinned){m(e.message.channelId,e.message.id);return}l(e.message.channelId,e.message.id)};e.instant&&i();const s=a=>{a.key==="Enter"&&(a.preventDefault(),i())};c(()=>{document.addEventListener("keydown",s),p(()=>{document.removeEventListener("keydown",s)})});const n=e.message.pinned;return t(o.Root,{desktopMaxWidth:600,desktopMinWidth:400,get close(){return e.close},class:f,get children(){return[t(o.Header,{alert:!!n,title:n?"Unpin Message?":"Pin Message?",icon:"keep"}),t(o.Body,{class:u,get children(){return[t(d,{size:14,children:n?"Would you like to unpin this message?":"Would you like to pin this message?"}),t(g,{class:h,hideFloating:!0,get message(){return e.message}})]}}),t(o.Footer,{get children(){return[t(o.Button,{label:n?"Don't Unpin":"Don't Pin",get onClick(){return e.close},iconName:"close"}),t(o.Button,{primary:!0,label:n?"Unpin":"Pin",onClick:i,iconName:"keep",color:n?"var(--alert-color)":null})]}})]}})}export{K as default};
//# sourceMappingURL=PinConfirmModal-D_neAyyo.js.map
