import{ai as m,ak as d,b1 as c}from"./useStore-1zAIwTgm.js";import{M as o,T as g}from"./Text-D1ScQjsd.js";import{o as u,g as p,c as t,H as r}from"./ModerationService-JKa8HDPL.js";import{a as h}from"./ClanTag-DJCmGglO.js";import{u as s}from"./Flexbox-CKnPoiWr.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-5zHNQ4fP.js";import"./Emoji-CBS3HK9g.js";import"./date-DqCgL0Ei.js";import"./languages-zn42qa69.js";import"./CodeBlock-CwKQuSal.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-CvJksU59.js";import"./ContextMenu-DhGNygfK.js";import"./browser-BM56HFVq.js";import"./Input-DoZRayyi.js";import"./Notice-BfoaFfM1.js";import"./DeleteConfirmModal-Cu3EoCaP.js";import"./GlobalEvents-IGv04jiB.js";import"./Skeleton-4ICHWQuq.js";import"./ServerVerifiedIcon-DUdLvsuu.js";import"./useJoinServer-PT3ro9QY.js";const f=s`
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
//# sourceMappingURL=MessageDeleteModal-CquFDNhW.js.map
