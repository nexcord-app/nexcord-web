import{b5 as m,b6 as l}from"./useStore-DBb0Z1Ja.js";import{M as o,T as d}from"./Text-C_egcRFS.js";import{o as c,g as p,c as t}from"./ModerationService-DJHF7x8B.js";import{a as g}from"./ClanTag-HmJJCvQp.js";import{u as r}from"./Flexbox-CtT2pseo.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-C51kiEgZ.js";import"./Emoji-BZLuU_6X.js";import"./date-2y0WWb20.js";import"./languages-DKaNROAR.js";import"./CodeBlock-D-TymAPw.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-BtudyDaE.js";import"./ContextMenu-D74Pk1Wi.js";import"./browser-R3nOtTKF.js";import"./Input-C6-Ij65G.js";import"./Notice-CRa-IqGB.js";import"./DeleteConfirmModal-DLkL_jIo.js";import"./GlobalEvents-DMigQF6C.js";import"./Skeleton-Br6MF7Mb.js";import"./ServerVerifiedIcon-Bomy1K6H.js";import"./useJoinServer-DicVn5o5.js";const u=r`
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
//# sourceMappingURL=PinConfirmModal-50wVK_0n.js.map
