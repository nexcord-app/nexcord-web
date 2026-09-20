import{z as V,e as m,f as X,u as Y,c as e,o as N,t as G,i as R,S as g,H as L,b as P,C as ee,g as U,ap as te,a8 as re,d as se,aq as ne,m as T,F as $,ab as O,B as D,a9 as H,q as b,ar as ae,as as oe}from"./ModerationService--RmbjC5p.js";import{Y as ie,Z as ce,b as J,_ as z,$ as ue,a0 as le,W as ge}from"./useStore-B8c8g-Rg.js";import{f as de}from"./date-BRn35p1W.js";import{u as me}from"./GlobalEvents-CaCLsBJj.js";import{a as he,M as pe,I as fe}from"./ClanTag-MlhFir4K.js";import{T as ke,a as W}from"./TicketItem-DxbQa9nb.js";import{M as B,B as F,C as j,A as Me,T as I,a as we}from"./Text-CVNHmjKJ.js";import{B as xe,a as S}from"./Breadcrumb-BZQ8xzGe.js";import{F as be}from"./FileBrowser-cn7IW26p.js";import{u as d,a as p,F as C,s as x}from"./Flexbox-DdRgUkVN.js";import{I as ve}from"./Input-Cxyj3EM0.js";import{N as Ie}from"./Notice-DEuV9al1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./languages-Cb1WEjVH.js";import"./Emoji-CDOypsoU.js";import"./useResizeObserver-CpC9RR9B.js";import"./CodeBlock-BMkzsw0g.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-CnIGVF2Z.js";import"./ContextMenu-DlhjvYHX.js";import"./browser-BunxtBnb.js";import"./DeleteConfirmModal-Brc2rzZx.js";import"./Skeleton-B5QliNYZ.js";import"./ServerVerifiedIcon-W43yudYR.js";import"./useJoinServer-Cpi-4iyc.js";var q=G("<div>"),Se=G("<div>/50 messages");const Te=x("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`,Ce=x(p)`
  border-radius: 4px;
  padding: 4px;
  gap: 6px;
  color: black;
  cursor: pointer;
  user-select: none;
`,ye=t=>e(p,{wrap:!0,gap:4,style:{"justify-content":"end"},get children(){return e($,{get each(){return Object.keys(W("mod")).splice(1)},children:s=>{const n=W("mod")[s];return e(Ce,{itemsCenter:!0,onClick:()=>t.setSelectedStatus(t.selectedStatus===Number(s)?void 0:Number(s)),get style(){return{background:n?.color}},get children(){return[e(we,{get checked(){return s===t.selectedStatus?.toString()}}),T(()=>n?.text)]}})}})}}),Re=x(C)`
  border-top: solid 1px rgba(255, 255, 255, 0.2);

  &[data-isMod="true"] {
    .markup .modShowMessagesButton {
      display: flex;
    }
  }
`,Be=x(p)`
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 4px;
  padding-right: 4px;
`,Fe=x(C)`
  overflow: auto;
`;x(p)``;const Ne=d`
  width: 600px;
  height: 60vh;
  min-height: 90vh;
`,$e=d`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Ae=d`
  && {
    background-color: rgba(255, 255, 255, 0.1);
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`,Ee=t=>{let s;const[n,o]=m(null),[a,f]=m(null);return N(()=>{ne(t.channelId,t.messageId).then(u=>{o(u.messages),f(u.channel),s?.querySelector(`#message-${t.messageId}`)?.scrollIntoView({block:"center"})})}),e(B.Root,{get close(){return t.close},class:Ne,get children(){return[e(B.Header,{get title(){return T(()=>!a())()?"Loading...":`${a()?.name?`#${a()?.name}`:"DMs"}${a()?.server?.name?` - ${a()?.server?.name}`:""}`}}),e(B.Body,{class:$e,get children(){return e(Fe,{ref(u){var c=s;typeof c=="function"?c(u):s=u},get children(){return e($,{get each(){return n()||[]},children:(u,c)=>e(he,{message:u,get beforeMessage(){return n()?.[c()-1]},get class(){return u.id===t.messageId?Ae:""},hideFloating:!0})})}})}})]}})};function ut(){const{height:t}=ee(),s=V(),[n,o]=m(null),[a,f]=m([]),{createPortal:u}=X(),c=Y(()=>"/app/moderation/*");me()(({messageId:r,channelId:i})=>{u(h=>e(Ee,{close:h,messageId:r,channelId:i}))}),N(async()=>{k();const r=120*1e3,i=window.setInterval(()=>k(),r);U(()=>{window.clearInterval(i)})});const k=async()=>{const r=await(c()?te:ie)(s.id);if(o(r),!r)return;const i=a().length?a()[a().length-1]?.id:"0",h=await ce(r.channelId,{afterMessageId:i});f(i==="0"?h:[...a(),...h])};return e(Te,{get children(){return[(()=>{var r=q();return R(r,e(xe,{get children(){return[e(g,{get when(){return c()},get children(){return e(S,{href:"/app/moderation",icon:"home",title:"Moderation"})}}),e(g,{get when(){return!c()},get children(){return e(S,{href:"/app",icon:"home",get title(){return L("t5AkH8")}})}}),e(S,{get title(){return L("JFif5F")},get href(){return c()?"/app/moderation/tickets":"/app/settings/tickets"}}),e(S,{title:"Ticket"})]}})),P(i=>re(r,c()?{"margin-top":"20px"}:{},i)),r})(),e(g,{get when(){return n()},get children(){return[e(Ie,{type:"info",description:"Page updates every 2 minutes."}),(()=>{var r=q();return R(r,e(ke,{get as(){return c()?"mod":"user"},get ticket(){return n()},updateTicket:o,disableClick:!0})),P(()=>se(r,d`
            ${t()>=500?`
            position: sticky;
            z-index: 111111;
            top: ${c()?"10px":"50px"};
          `:""};
          `)),r})(),e(Le,{get messages(){return a()}}),(()=>{var r=Se(),i=r.firstChild;return R(r,()=>a()?.length||0,i),r})(),e(g,{get when(){return a()?.length<50},get children(){return e(_e,{get ticket(){return n()},updateTicket:o,get channelId(){return n().channelId},setMessages:f,get messages(){return a()}})}})]}})]}})}const _e=t=>{const{tickets:s}=J(),n=V(),[o,a]=m(void 0),[f,u]=m(),[c,v]=m(""),[k,r]=m(),i=Y(()=>"/app/moderation/*");N(()=>{setTimeout(()=>{s.updateTicketNotification()},2e3),document.addEventListener("paste",h),U(()=>{document.removeEventListener("paste",h)})});const h=M=>{const l=M.clipboardData?.files[0];l&&l.type.startsWith("image")&&r(()=>l)},Z=M=>{const l=M[0];r(()=>l)},K=async()=>{const M=o();if(M===void 0&&i()){b("You must select a status.");return}const l=c().trim();if(!l.length){b("Your message cannot be empty.");return}const y=k();if(r(void 0),v(""),!l)return;let A;if(y){const w=await ae(t.channelId,{file:y}).catch(Q=>{b(Q.message)});if(!w)return;A=w.fileId}const E=await ue({content:l,nexcordCdnFileId:A,channelId:t.channelId}).catch(w=>{b(w.message),v(l),r(()=>y)});if(!E)return;const _=await(i()?oe:le)(n.id,M||ge.WAITING_FOR_MODERATOR_RESPONSE).catch(w=>{b(w.message)});s.updateModerationTicketNotification(),s.updateTicketNotification(),_&&t.updateTicket(_),a(void 0),t.setMessages([...t.messages,E])};return e(C,{gap:4,get children(){return[e(g,{get when(){return i()||!z.includes(t.ticket.status)},get children(){return e(ve,{type:"textarea",get class(){return d`
            flex: 1;
          `},onText:v,get value(){return c()},minHeight:120,placeholder:"Message"})}}),e(g,{get when(){return i()},get children(){return e(ye,{get selectedStatus(){return o()},setSelectedStatus:a})}}),e(g,{get when(){return i()||!z.includes(t.ticket.status)},get children(){return e(p,{gap:4,get class(){return d`
            justify-content: space-between;
            margin-top: 4px;
          `},get children(){return[e(be,{ref:u,accept:"images",onChange:Z}),e(g,{get when(){return!k()},get children(){return e(F,{label:"Attach",iconName:"attach_file",margin:0,get class(){return d`
                flex-shrink: 0;
                height: 26px;
              `},get onClick(){return f()?.open}})}}),e(g,{get when(){return k()},get children(){return e(F,{label:"Remove Attachment",iconName:"close",color:"var(--alert-color)",margin:0,get class(){return d`
                flex-shrink: 0;
                height: 26px;
              `},onClick:()=>r(void 0)})}}),e(F,{label:"Send",iconName:"send",margin:0,get class(){return d`
              flex-shrink: 0;
              height: 26px;
            `},onClick:K})]}})}})]}})},Le=t=>{const{account:s}=J(),n=()=>O(s.user()?.badges||0,H.FOUNDER.bit)||O(s.user()?.badges||0,H.ADMIN.bit);return e(Re,{get"data-isMod"(){return n()},get children(){return e($,{get each(){return t.messages},children:o=>e(Pe,{message:o})})}})},Pe=t=>{const[s,n]=m(!1),o=()=>t.message.createdBy;return e(Be,{gap:6,onmouseenter:()=>n(!0),onmouseleave:()=>n(!1),get children(){return[e(j,{get href(){return D.PROFILE(o().id)},get children(){return e(Me,{get user(){return o()},size:30,get animate(){return s()}})}}),e(C,{gap:4,get children(){return[e(p,{gap:4,itemsCenter:!0,get children(){return[e(p,{itemsCenter:!0,get children(){return e(j,{get href(){return D.PROFILE(o().id)},get children(){return[e(I,{get children(){return["@",T(()=>o().username)]}}),e(I,{opacity:.6,get children(){return[":",T(()=>o().tag)]}})]}})}}),e(I,{opacity:.6,size:12,get children(){return de(t.message.createdAt)}})]}}),e(I,{size:14,get class(){return d`
            word-break: break-word;
            white-space: pre-line;
          `},get children(){return e(pe,{get message(){return t.message},get text(){return t.message.content||""}})}}),e(g,{get when(){return t.message.attachments?.[0]?.provider==="local"},get children(){return e(fe,{get attachment(){return t.message.attachments?.[0]},widthOffset:-70})}})]}})]}})};export{ut as default};
//# sourceMappingURL=TicketPage-Bb_KSz_U.js.map
