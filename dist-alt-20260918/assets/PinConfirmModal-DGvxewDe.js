import{o as m,c as t,T as l,dP as d,dQ as p,u as r,h as c}from"./useStore-B0mu5xqR.js";import{a as g}from"./Markup-Dds-Xr4n.js";import{M as o}from"./Modal-DBA6raav.js";import"./_commonjsHelpers-CE1G-McA.js";import"./CodeBlock-Dd4o3zhY.js";import"./clipboard-p21MJwK2.js";import"./Emoji-Dl_Mqoza.js";import"./Avatar-Dm8O4A-8.js";import"./ServerVerifiedIcon-gLzI5TWF.js";import"./useJoinServer-Dg6-EmYl.js";import"./MemberContextMenu-C-xRS5K9.js";import"./ContextMenu-CqZZtMph.js";import"./useResizeObserver-78Qyl67J.js";import"./Checkbox-Dmn0FJkh.js";import"./browser-BaK9C9_l.js";import"./Input-B_7GKQol.js";import"./Notice-24TY465T.js";import"./date-BKAW-sdF.js";import"./GlobalEvents-Z7kgH4CP.js";import"./Skeleton-Hm2fqnK3.js";import"./Emoji-DdtGUub-.js";import"./Tooltip-BRibjVCh.js";import"./DropDown-D2LrCkxa.js";import"./createPreloader-RjVQKHtN.js";const u=r`
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
`;function R(e){const i=()=>{if(e.close(),e.message.pinned){d(e.message.channelId,e.message.id);return}p(e.message.channelId,e.message.id)};e.instant&&i();const s=a=>{a.key==="Enter"&&(a.preventDefault(),i())};m(()=>{document.addEventListener("keydown",s),c(()=>{document.removeEventListener("keydown",s)})});const n=e.message.pinned;return t(o.Root,{desktopMaxWidth:600,desktopMinWidth:400,get close(){return e.close},class:f,get children(){return[t(o.Header,{alert:!!n,title:n?"Unpin Message?":"Pin Message?",icon:"keep"}),t(o.Body,{class:u,get children(){return[t(l,{size:14,children:n?"Would you like to unpin this message?":"Would you like to pin this message?"}),t(g,{class:h,hideFloating:!0,get message(){return e.message}})]}}),t(o.Footer,{get children(){return[t(o.Button,{label:n?"Don't Unpin":"Don't Pin",get onClick(){return e.close},iconName:"close"}),t(o.Button,{primary:!0,label:n?"Unpin":"Pin",onClick:i,iconName:"keep",color:n?"var(--alert-color)":null})]}})]}})}export{R as default};
//# sourceMappingURL=PinConfirmModal-DGvxewDe.js.map
