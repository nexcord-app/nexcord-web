import{ai as m,ak as d,b1 as c}from"./useStore-DEZEOTom.js";import{M as o,T as g}from"./Text-CN5caMAL.js";import{o as u,g as p,c as t,H as r}from"./ModerationService-DpHh3JQr.js";import{a as h}from"./ClanTag-C2eIxXmO.js";import{u as s}from"./Flexbox-Cufh4wPc.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-Dz383fBa.js";import"./Emoji-D70FO0A0.js";import"./date-0lMVd4xC.js";import"./languages-hMGia7zW.js";import"./CodeBlock-D7JIZP_V.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-CpzYJwQm.js";import"./ContextMenu-C52aux8K.js";import"./browser-pi_zKfjJ.js";import"./Input-C3UKcv4e.js";import"./Notice-BJ8UrUnj.js";import"./DeleteConfirmModal-DPJxjp5o.js";import"./GlobalEvents-ClnSa_YK.js";import"./Skeleton-DNejdNgG.js";import"./ServerVerifiedIcon-B67fkgVt.js";import"./useJoinServer-D2q3nWLY.js";const f=s`
  overflow: auto;
  max-height: 600px;
`,y=s`
  padding-top: 5px;
  border-radius: 8px;
  margin-top: 5px;

  pointer-events: none;

  && {
    padding: 10px;
    border: solid 1px rgba(255, 255, 255, 0.1);
  }
`,x=s`
  max-height: 800px;
  overflow: hidden;
`;function j(e){const l=d(),n=()=>{e.close(),e.message.local||e.message.sentStatus===m.FAILED?l.locallyRemoveMessage(e.message.channelId,e.message.id):c({channelId:e.message.channelId,messageId:e.message.id})};e.instant&&n();const a=i=>{i.key==="Enter"&&(i.preventDefault(),n())};return u(()=>{document.addEventListener("keydown",a),p(()=>{document.removeEventListener("keydown",a)})}),t(o.Root,{desktopMaxWidth:600,desktopMinWidth:400,get close(){return e.close},class:x,get children(){return[t(o.Header,{get title(){return r("gwyEY1")},icon:"delete",alert:!0}),t(o.Body,{class:f,get children(){return[t(g,{size:14,get children(){return r("o3ldBv")}}),t(h,{class:y,hideFloating:!0,get message(){return e.message}})]}}),t(o.Footer,{get children(){return[t(o.Button,{get label(){return r("hN/lnE")},get onClick(){return e.close},iconName:"close"}),t(o.Button,{primary:!0,get label(){return r("iN06z6")},onClick:n,iconName:"delete",color:"var(--alert-color)"})]}})]}})}export{j as default};
//# sourceMappingURL=MessageDeleteModal-CQzF3eq0.js.map
