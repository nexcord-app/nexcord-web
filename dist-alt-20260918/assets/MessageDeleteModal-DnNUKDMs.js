import{o as l,c as e,U as r,T as m,dO as d,u as i,h as c}from"./useStore-C81yKXnX.js";import{a as p}from"./Markup-DMRZKyOZ.js";import{M as o}from"./Modal-CslZPWEr.js";import"./_commonjsHelpers-CE1G-McA.js";import"./CodeBlock-BsdAbro_.js";import"./clipboard-p21MJwK2.js";import"./Emoji-LHY5apb-.js";import"./Avatar-CnjpHkJi.js";import"./ServerVerifiedIcon-CDs7ZnN3.js";import"./useJoinServer-VYpKHgtr.js";import"./MemberContextMenu-CNS6EZX5.js";import"./ContextMenu-CBCccNPx.js";import"./useResizeObserver-DorGCpy9.js";import"./Checkbox-cAafcjqo.js";import"./browser-QP6z6XX1.js";import"./Input-CGVbQxvr.js";import"./Notice-D4YZaiTY.js";import"./date-BKAW-sdF.js";import"./GlobalEvents-13pKKKZj.js";import"./Skeleton-C81J_hd6.js";import"./Emoji-DVVG_-wX.js";import"./Tooltip-CnKtFUaI.js";import"./DropDown-VSE3I8gP.js";import"./createPreloader-DUj4T5Py.js";const g=i`
  overflow: auto;
  max-height: 600px;
`,u=i`
  padding-top: 5px;
  border-radius: 8px;
  margin-top: 5px;

  pointer-events: none;

  && {
    padding: 10px;
    border: solid 1px rgba(255, 255, 255, 0.1);
  }
`,h=i`
  max-height: 800px;
  overflow: hidden;
`;function R(t){const n=()=>{t.close(),d({channelId:t.message.channelId,messageId:t.message.id})};t.instant&&n();const a=s=>{s.key==="Enter"&&(s.preventDefault(),n())};return l(()=>{document.addEventListener("keydown",a),c(()=>{document.removeEventListener("keydown",a)})}),e(o.Root,{desktopMaxWidth:600,desktopMinWidth:400,get close(){return t.close},class:h,get children(){return[e(o.Header,{get title(){return r("gwyEY1")},icon:"delete",alert:!0}),e(o.Body,{class:g,get children(){return[e(m,{size:14,get children(){return r("o3ldBv")}}),e(p,{class:u,hideFloating:!0,get message(){return t.message}})]}}),e(o.Footer,{get children(){return[e(o.Button,{get label(){return r("hN/lnE")},get onClick(){return t.close},iconName:"close"}),e(o.Button,{primary:!0,get label(){return r("jovdNb")},onClick:n,iconName:"delete",color:"var(--alert-color)"})]}})]}})}export{R as default};
//# sourceMappingURL=MessageDeleteModal-DnNUKDMs.js.map
