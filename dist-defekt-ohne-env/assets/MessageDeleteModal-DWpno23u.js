import{ai as m,ak as d,b1 as c}from"./useStore-C1x_XtZn.js";import{M as o,T as g}from"./Text-xQnkEBKO.js";import{o as u,g as p,c as t,H as r}from"./ModerationService-7nF9_67y.js";import{a as h}from"./ClanTag-tgfDpOrD.js";import{u as s}from"./Flexbox-DahX4I5v.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useResizeObserver-DLOEUKTg.js";import"./Emoji-DE4pWG5a.js";import"./date-QVcUUowu.js";import"./languages-CyEDRxRF.js";import"./CodeBlock-CwHB-ntI.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-qOuREi5_.js";import"./ContextMenu-CinibpIf.js";import"./browser-ByxRPPz2.js";import"./Input-ojZsAQjm.js";import"./Notice-B_aSsICh.js";import"./DeleteConfirmModal-CmXpcZod.js";import"./GlobalEvents-D8oaUrNP.js";import"./Skeleton-fDFQMXJb.js";import"./ServerVerifiedIcon-Tsm0_ZSI.js";import"./useJoinServer-DpcK9aNf.js";const f=s`
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
//# sourceMappingURL=MessageDeleteModal-DWpno23u.js.map
