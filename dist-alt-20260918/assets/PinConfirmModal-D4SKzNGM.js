import{b3 as m,b4 as l}from"./useStore-BX0H4HHl.js";import{M as o,T as d}from"./Text-zTrywdpE.js";import{o as c,g as p,c as t}from"./ModerationService-CpG_--VM.js";import{a as g}from"./ClanTag-BnwlqPvK.js";import{u as r}from"./Flexbox-D5klO2LR.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-D1YIQi8T.js";import"./Emoji-D_Yz5f1a.js";import"./date-yc99Ly_9.js";import"./languages-C3qXs8UH.js";import"./CodeBlock-DUGxk4-g.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-DYkTaQk-.js";import"./ContextMenu-FDFJu1Xf.js";import"./browser-By5Llgm9.js";import"./Input-DyE3cipz.js";import"./Notice-BCJa9kR6.js";import"./DeleteConfirmModal-DBKaQEyB.js";import"./GlobalEvents-zRDY--HT.js";import"./Skeleton-BaeE1obR.js";import"./ServerVerifiedIcon-j5MOslrQ.js";import"./useJoinServer-Cvhy-yig.js";const u=r`
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
//# sourceMappingURL=PinConfirmModal-D4SKzNGM.js.map
