import{o as m,c as t,T as l,dP as d,dQ as p,u as r,h as c}from"./useStore-C81yKXnX.js";import{a as g}from"./Markup-DMRZKyOZ.js";import{M as o}from"./Modal-CslZPWEr.js";import"./_commonjsHelpers-CE1G-McA.js";import"./CodeBlock-BsdAbro_.js";import"./clipboard-p21MJwK2.js";import"./Emoji-LHY5apb-.js";import"./Avatar-CnjpHkJi.js";import"./ServerVerifiedIcon-CDs7ZnN3.js";import"./useJoinServer-VYpKHgtr.js";import"./MemberContextMenu-CNS6EZX5.js";import"./ContextMenu-CBCccNPx.js";import"./useResizeObserver-DorGCpy9.js";import"./Checkbox-cAafcjqo.js";import"./browser-QP6z6XX1.js";import"./Input-CGVbQxvr.js";import"./Notice-D4YZaiTY.js";import"./date-BKAW-sdF.js";import"./GlobalEvents-13pKKKZj.js";import"./Skeleton-C81J_hd6.js";import"./Emoji-DVVG_-wX.js";import"./Tooltip-CnKtFUaI.js";import"./DropDown-VSE3I8gP.js";import"./createPreloader-DUj4T5Py.js";const u=r`
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
//# sourceMappingURL=PinConfirmModal-B6U8LQR0.js.map
