import{J as G,b as m,g as Z,d as U,c as e,o as F,E as J,G as R,S as g,U as _,p as P,L as ee,m as S,C as A,W as Y,az as O,u as d,ba as D,F as p,ac as N,V as C,s as w,ak as z,K as H,T as I,ay as V,w as v,bb as te,bc as re,bd as se,be as ne,b7 as ae,bf as oe,h as q,bg as ie,bh as ce,bi as ue,av as le,af as ge}from"./useStore-B0mu5xqR.js";import{f as de}from"./date-BKAW-sdF.js";import{u as me}from"./GlobalEvents-Z7kgH4CP.js";import{a as he,M as pe,I as fe}from"./Markup-Dds-Xr4n.js";import{T as ke,a as W}from"./TicketItem-CLej24hq.js";import{A as Me}from"./Avatar-Dm8O4A-8.js";import{B as be,a as y}from"./Breadcrumb-BbBmT7rf.js";import{C as we}from"./Checkbox-Dmn0FJkh.js";import{F as ve}from"./FileBrowser-CbMrZ7CD.js";import{I as xe}from"./Input-B_7GKQol.js";import{M as B}from"./Modal-DBA6raav.js";import{N as Ie}from"./Notice-24TY465T.js";import"./_commonjsHelpers-CE1G-McA.js";import"./CodeBlock-Dd4o3zhY.js";import"./clipboard-p21MJwK2.js";import"./Emoji-Dl_Mqoza.js";import"./ServerVerifiedIcon-gLzI5TWF.js";import"./useJoinServer-Dg6-EmYl.js";import"./MemberContextMenu-C-xRS5K9.js";import"./ContextMenu-CqZZtMph.js";import"./useResizeObserver-78Qyl67J.js";import"./browser-BaK9C9_l.js";import"./Skeleton-Hm2fqnK3.js";import"./Emoji-DdtGUub-.js";import"./Tooltip-BRibjVCh.js";import"./DropDown-D2LrCkxa.js";import"./createPreloader-RjVQKHtN.js";var j=J("<div>"),ye=J("<div>/50 messages");const Se=w("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`,Ce=w(p)`
  border-radius: 4px;
  padding: 4px;
  gap: 6px;
  color: black;
  cursor: pointer;
  user-select: none;
`,Te=t=>e(p,{wrap:!0,gap:4,style:{"justify-content":"end"},get children(){return e(A,{get each(){return Object.keys(W("mod")).splice(1)},children:s=>{const n=W("mod")[s];return e(Ce,{itemsCenter:!0,onClick:()=>t.setSelectedStatus(t.selectedStatus===Number(s)?void 0:Number(s)),get style(){return{background:n?.color}},get children(){return[e(we,{get checked(){return s===t.selectedStatus?.toString()}}),S(()=>n?.text)]}})}})}}),Re=w(C)`
  border-top: solid 1px rgba(255, 255, 255, 0.2);

  &[data-isMod="true"] {
    .markup .modShowMessagesButton {
      display: flex;
    }
  }
`,Ne=w(p)`
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 4px;
  padding-right: 4px;
`,Be=w(C)`
  overflow: auto;
`;w(p)``;const Fe=d`
  width: 600px;
  height: 60vh;
  min-height: 90vh;
`,Ae=d`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Ee=d`
  && {
    background-color: rgba(255, 255, 255, 0.1);
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`,$e=t=>{let s;const[n,i]=m(null),[a,f]=m(null);return F(()=>{oe(t.channelId,t.messageId).then(u=>{i(u.messages),f(u.channel),s?.querySelector(`#message-${t.messageId}`)?.scrollIntoView({block:"center"})})}),e(B.Root,{get close(){return t.close},class:Fe,get children(){return[e(B.Header,{get title(){return S(()=>!a())()?"Loading...":`${a()?.name?`#${a()?.name}`:"DMs"}${a()?.server?.name?` - ${a()?.server?.name}`:""}`}}),e(B.Body,{class:Ae,get children(){return e(Be,{ref(u){var c=s;typeof c=="function"?c(u):s=u},get children(){return e(A,{get each(){return n()||[]},children:(u,c)=>e(he,{message:u,get beforeMessage(){return n()?.[c()-1]},get class(){return u.id===t.messageId?Ee:""},hideFloating:!0})})}})}})]}})};function gt(){const{height:t}=ee(),s=G(),[n,i]=m(null),[a,f]=m([]),{createPortal:u}=Z(),c=U(()=>"/app/moderation/*");me()(({messageId:r,channelId:o})=>{u(h=>e($e,{close:h,messageId:r,channelId:o}))}),F(async()=>{k();const r=120*1e3,o=window.setInterval(()=>k(),r);q(()=>{window.clearInterval(o)})});const k=async()=>{const r=await(c()?ie:ce)(s.id);if(i(r),!r)return;const o=a().length?a()[a().length-1]?.id:"0",h=await ue(r.channelId,{afterMessageId:o});f(o==="0"?h:[...a(),...h])};return e(Se,{get children(){return[(()=>{var r=j();return R(r,e(be,{get children(){return[e(g,{get when(){return c()},get children(){return e(y,{href:"/app/moderation",icon:"home",title:"Moderation"})}}),e(g,{get when(){return!c()},get children(){return e(y,{href:"/app",icon:"home",get title(){return _("t5AkH8")}})}}),e(y,{get title(){return _("JFif5F")},get href(){return c()?"/app/moderation/tickets":"/app/settings/tickets"}}),e(y,{title:"Ticket"})]}})),P(o=>le(r,c()?{"margin-top":"20px"}:{},o)),r})(),e(g,{get when(){return n()},get children(){return[e(Ie,{type:"info",description:"Page updates every 2 minutes."}),(()=>{var r=j();return R(r,e(ke,{get as(){return c()?"mod":"user"},get ticket(){return n()},disableClick:!0})),P(()=>ge(r,d`
            ${t()>=500?`
            position: sticky;
            z-index: 111111;
            top: ${c()?"10px":"50px"};
          `:""};
          `)),r})(),e(_e,{get messages(){return a()}}),(()=>{var r=ye(),o=r.firstChild;return R(r,()=>a()?.length||0,o),r})(),e(g,{get when(){return a()?.length<50},get children(){return e(Le,{get ticket(){return n()},updateTicket:i,get channelId(){return n().channelId},setMessages:f,get messages(){return a()}})}})]}})]}})}const Le=t=>{const{tickets:s}=Y(),n=G(),[i,a]=m(void 0),[f,u]=m(),[c,x]=m(""),[k,r]=m(),o=U(()=>"/app/moderation/*");F(()=>{setTimeout(()=>{s.updateTicketNotification()},2e3),document.addEventListener("paste",h),q(()=>{document.removeEventListener("paste",h)})});const h=M=>{const l=M.clipboardData?.files[0];l&&l.type.startsWith("image")&&r(()=>l)},K=M=>{const l=M[0];r(()=>l)},Q=async()=>{const M=i();if(M===void 0&&o()){v("You must select a status.");return}const l=c().trim();if(!l.length){v("Your message cannot be empty.");return}const T=k();if(r(void 0),x(""),!l)return;let E;if(T){const b=await te(t.channelId,{file:T}).catch(X=>{v(X.message)});if(!b)return;E=b.fileId}const $=await re({content:l,nerimityCdnFileId:E,channelId:t.channelId}).catch(b=>{v(b.message),x(l),r(()=>T)});if(!$)return;const L=await(o()?se:ne)(n.id,M||ae.WAITING_FOR_MODERATOR_RESPONSE).catch(b=>{v(b.message)});s.updateModerationTicketNotification(),s.updateTicketNotification(),L&&t.updateTicket(L),a(void 0),t.setMessages([...t.messages,$])};return e(C,{gap:4,get children(){return[e(g,{get when(){return o()||!D.includes(t.ticket.status)},get children(){return e(xe,{type:"textarea",get class(){return d`
            flex: 1;
          `},onText:x,get value(){return c()},minHeight:120,placeholder:"Message"})}}),e(g,{get when(){return o()},get children(){return e(Te,{get selectedStatus(){return i()},setSelectedStatus:a})}}),e(g,{get when(){return o()||!D.includes(t.ticket.status)},get children(){return e(p,{gap:4,get class(){return d`
            justify-content: space-between;
            margin-top: 4px;
          `},get children(){return[e(ve,{ref:u,accept:"images",onChange:K}),e(g,{get when(){return!k()},get children(){return e(N,{label:"Attach",iconName:"attach_file",margin:0,get class(){return d`
                flex-shrink: 0;
                height: 26px;
              `},get onClick(){return f()?.open}})}}),e(g,{get when(){return k()},get children(){return e(N,{label:"Remove Attachment",iconName:"close",color:"var(--alert-color)",margin:0,get class(){return d`
                flex-shrink: 0;
                height: 26px;
              `},onClick:()=>r(void 0)})}}),e(N,{label:"Send",iconName:"send",margin:0,get class(){return d`
              flex-shrink: 0;
              height: 26px;
            `},onClick:Q})]}})}})]}})},_e=t=>{const{account:s}=Y(),n=()=>O(s.user()?.badges||0,V.FOUNDER.bit)||O(s.user()?.badges||0,V.ADMIN.bit);return e(Re,{get"data-isMod"(){return n()},get children(){return e(A,{get each(){return t.messages},children:i=>e(Pe,{message:i})})}})},Pe=t=>{const[s,n]=m(!1),i=()=>t.message.createdBy;return e(Ne,{gap:6,onmouseenter:()=>n(!0),onmouseleave:()=>n(!1),get children(){return[e(z,{get href(){return H.PROFILE(i().id)},get children(){return e(Me,{get user(){return i()},size:30,get animate(){return s()}})}}),e(C,{gap:4,get children(){return[e(p,{gap:4,itemsCenter:!0,get children(){return[e(p,{itemsCenter:!0,get children(){return e(z,{get href(){return H.PROFILE(i().id)},get children(){return[e(I,{get children(){return["@",S(()=>i().username)]}}),e(I,{opacity:.6,get children(){return[":",S(()=>i().tag)]}})]}})}}),e(I,{opacity:.6,size:12,get children(){return de(t.message.createdAt)}})]}}),e(I,{size:14,get class(){return d`
            word-break: break-word;
            white-space: pre-line;
          `},get children(){return e(pe,{get message(){return t.message},get text(){return t.message.content||""}})}}),e(g,{get when(){return t.message.attachments?.[0]?.provider==="local"},get children(){return e(fe,{get attachment(){return t.message.attachments?.[0]},widthOffset:-70})}})]}})]}})};export{gt as default};
//# sourceMappingURL=TicketPage-CCMiibcc.js.map
