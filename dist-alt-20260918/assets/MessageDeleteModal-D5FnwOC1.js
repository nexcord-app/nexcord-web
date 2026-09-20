import{ak as m,am as d,b3 as c}from"./useStore-DBb0Z1Ja.js";import{M as o,T as g}from"./Text-C_egcRFS.js";import{o as u,g as p,c as t,H as r}from"./ModerationService-DJHF7x8B.js";import{a as h}from"./ClanTag-HmJJCvQp.js";import{u as s}from"./Flexbox-CtT2pseo.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-C51kiEgZ.js";import"./Emoji-BZLuU_6X.js";import"./date-2y0WWb20.js";import"./languages-DKaNROAR.js";import"./CodeBlock-D-TymAPw.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-BtudyDaE.js";import"./ContextMenu-D74Pk1Wi.js";import"./browser-R3nOtTKF.js";import"./Input-C6-Ij65G.js";import"./Notice-CRa-IqGB.js";import"./DeleteConfirmModal-DLkL_jIo.js";import"./GlobalEvents-DMigQF6C.js";import"./Skeleton-Br6MF7Mb.js";import"./ServerVerifiedIcon-Bomy1K6H.js";import"./useJoinServer-DicVn5o5.js";const f=s`
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
//# sourceMappingURL=MessageDeleteModal-D5FnwOC1.js.map
