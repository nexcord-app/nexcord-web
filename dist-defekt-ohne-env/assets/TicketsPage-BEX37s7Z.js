import{e as d,f as C,u as b,D as F,E as w,ao as B,c as t,t as N,i as v,S as s,H as m,b as E,d as M,F as p,m as R}from"./ModerationService-7nF9_67y.js";import{W as I,X as O}from"./useStore-C1x_XtZn.js";import{B as _,a as c}from"./Breadcrumb-xfmK78bh.js";import{u as P,F as h,a as k,s as S}from"./Flexbox-DahX4I5v.js";import{B as y,T as A,a as D}from"./Text-xQnkEBKO.js";import{S as H}from"./SettingsBlock-CMShPInh.js";import{C as W}from"./CreateTicketModal-BpBp14q2.js";import{T as $,a as g}from"./TicketItem-BhWkSbFb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useResizeObserver-DLOEUKTg.js";import"./Notice-B_aSsICh.js";import"./Input-ojZsAQjm.js";import"./date-QVcUUowu.js";import"./languages-CyEDRxRF.js";var j=N("<div>");const G=S("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`,ot=()=>{const[n,a]=d([]),{createPortal:o}=C(),r=b(()=>"/app/moderation/*"),[i,T]=d(r()?I.WAITING_FOR_MODERATOR_RESPONSE:void 0);F(w(i,async()=>{const e=await(r()?B:O)({limit:30,status:i(),includeIgnored:!0});a(e)}));const f=()=>{o(e=>t(W,{close:e}))};return t(G,{get children(){return[(()=>{var e=j();return v(e,t(_,{get children(){return[t(s,{get when(){return!r()},get children(){return t(c,{href:"/app",icon:"home",get title(){return m("t5AkH8")}})}}),t(s,{get when(){return r()},get children(){return t(c,{href:"/app/moderation",icon:"home",title:"Moderation"})}}),t(c,{get title(){return m("JFif5F")}})]}})),E(()=>M(e,r()?P`
                margin-top: 20px;
              `:"")),e})(),t(s,{get when(){return r()},get children(){return t(X,{get selectedStatus(){return i()},setSelectedStatus:T})}}),t(s,{get when(){return!r()},get children(){return t(H,{icon:"sell",label:"Tickets",get children(){return t(y,{iconName:"add",label:"Create Ticket",onClick:f})}})}}),t(h,{gap:8,get children(){return t(p,{get each(){return n()},children:e=>t($,{updateTicket:u=>{a(x=>x.map(l=>l.id===u.id?u:l))},get as(){return r()?"mod":"user"},ticket:e})})}})]}})},J=S(k)`
  border-radius: 4px;
  padding: 4px;
  gap: 6px;
  color: black;
  cursor: pointer;
  user-select: none;
`,X=n=>t(h,{gap:4,get children(){return[t(A,{children:"Filter:"}),t(k,{wrap:!0,gap:4,get children(){return t(p,{get each(){return Object.keys(g("mod"))},children:a=>{const o=g("mod")[a];return t(J,{itemsCenter:!0,onClick:()=>n.setSelectedStatus(n.selectedStatus===Number(a)?void 0:Number(a)),get style(){return{background:o?.color}},get children(){return[t(D,{get checked(){return a===n.selectedStatus?.toString()}}),R(()=>o?.text)]}})}})}})]}});export{ot as default};
//# sourceMappingURL=TicketsPage-BEX37s7Z.js.map
