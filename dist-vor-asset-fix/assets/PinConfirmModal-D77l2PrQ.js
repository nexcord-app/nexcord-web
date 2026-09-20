import{b3 as m,b4 as l}from"./useStore-B8c8g-Rg.js";import{M as o,T as d}from"./Text-CVNHmjKJ.js";import{o as c,g as p,c as t}from"./ModerationService--RmbjC5p.js";import{a as g}from"./ClanTag-MlhFir4K.js";import{u as r}from"./Flexbox-DdRgUkVN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useResizeObserver-CpC9RR9B.js";import"./Emoji-CDOypsoU.js";import"./date-BRn35p1W.js";import"./languages-Cb1WEjVH.js";import"./CodeBlock-BMkzsw0g.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-CnIGVF2Z.js";import"./ContextMenu-DlhjvYHX.js";import"./browser-BunxtBnb.js";import"./Input-Cxyj3EM0.js";import"./Notice-DEuV9al1.js";import"./DeleteConfirmModal-Brc2rzZx.js";import"./GlobalEvents-CaCLsBJj.js";import"./Skeleton-B5QliNYZ.js";import"./ServerVerifiedIcon-W43yudYR.js";import"./useJoinServer-Cpi-4iyc.js";const u=r`
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
//# sourceMappingURL=PinConfirmModal-D77l2PrQ.js.map
