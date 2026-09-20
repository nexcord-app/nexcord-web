import{o as l,c as e,U as r,T as m,dO as d,u as i,h as c}from"./useStore-B0mu5xqR.js";import{a as p}from"./Markup-Dds-Xr4n.js";import{M as o}from"./Modal-DBA6raav.js";import"./_commonjsHelpers-CE1G-McA.js";import"./CodeBlock-Dd4o3zhY.js";import"./clipboard-p21MJwK2.js";import"./Emoji-Dl_Mqoza.js";import"./Avatar-Dm8O4A-8.js";import"./ServerVerifiedIcon-gLzI5TWF.js";import"./useJoinServer-Dg6-EmYl.js";import"./MemberContextMenu-C-xRS5K9.js";import"./ContextMenu-CqZZtMph.js";import"./useResizeObserver-78Qyl67J.js";import"./Checkbox-Dmn0FJkh.js";import"./browser-BaK9C9_l.js";import"./Input-B_7GKQol.js";import"./Notice-24TY465T.js";import"./date-BKAW-sdF.js";import"./GlobalEvents-Z7kgH4CP.js";import"./Skeleton-Hm2fqnK3.js";import"./Emoji-DdtGUub-.js";import"./Tooltip-BRibjVCh.js";import"./DropDown-D2LrCkxa.js";import"./createPreloader-RjVQKHtN.js";const g=i`
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
//# sourceMappingURL=MessageDeleteModal-Bgfq6Mht.js.map
