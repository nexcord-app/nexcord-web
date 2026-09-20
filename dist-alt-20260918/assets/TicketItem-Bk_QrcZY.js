import{c as t,S as o,m as r,B as x,J as S,t as T,aw as R,q as C}from"./ModerationService-JKa8HDPL.js";import{a1 as v,a as b,W as s,a2 as a}from"./useStore-1zAIwTgm.js";import{u as i,F as m,a as u,s as p}from"./Flexbox-CKnPoiWr.js";import{T as n,B as E,C as h,A as I}from"./Text-D1ScQjsd.js";import{f as N}from"./date-DqCgL0Ei.js";var A=T("<div style=display:flex;align-items:center;justify-content:center;background:var(--alert-color);border-radius:50%;color:white;width:20px;height:20px;font-size:14px>!");function O(){return A()}const w=p("div")`
  background-color: ${e=>e.bgColor};
  border-radius: 6px;
  padding: 2px;
  padding-left: 6px;
  padding-right: 6px;
  font-size: 16px;
  color: black;
`,B=i`
  display: flex;
  flex-direction: row;
  user-select: none;
  background-color: rgba(46, 49, 52, 1);
  border-radius: 6px;
  gap: 4px;
  padding: 6px;
`,_={[a.QUESTION]:"Question",[a.ACCOUNT]:"Account",[a.ABUSE]:"Abuse",[a.OTHER]:"Other",[a.SERVER_VERIFICATION]:"Verify Server"},P=e=>{const d=b(),g=()=>U(e.as)[e.ticket.status],{updateModerationTicketNotification:k}=v();let l=!1;const f=c=>{c.preventDefault(),c.stopPropagation(),!l&&(l=!0,R(e.ticket.id).then(()=>{k(),e.updateTicket({...e.ticket,ignoredByUsers:[...e.ticket.ignoredByUsers||[],{userId:d.user().id}]})}).catch(y=>{C(y.message)}).finally(()=>{l=!1}))};return t(S,{get component(){return e.disableClick?"div":h},get href(){return`./${e.ticket.id}`},class:B,get children(){return[t(o,{get when(){return r(()=>e.as==="user")()&&e.ticket.seen===!1},get children(){return t(O,{})}}),t(n,{opacity:.4,get class(){return i`width`},get children(){return["#",r(()=>e.ticket.id)]}}),t(m,{get class(){return i`
          align-items: start;
        `},get children(){return[t(u,{gap:4,itemsCenter:!0,get children(){return[t(w,{get bgColor(){return g()?.color},get children(){return g()?.text}}),t(o,{get when(){return r(()=>e.as==="mod")()&&!e.ticket.ignoredByUsers?.find(c=>c.userId===d.user().id)},get children(){return t(E,{label:"Mute",iconName:"volume_off",alert:!0,padding:2,iconSize:18,onClick:f,primary:!0})}})," ",t(o,{get when(){return r(()=>e.as==="mod")()&&e.ticket.ignoredByUsers?.length},get children(){return t(n,{size:12,opacity:.4,get children(){return["Muted by ",r(()=>e.ticket.ignoredByUsers?.length)," mod(s)"]}})}})]}}),t(u,{get class(){return i`
            margin-top: 2px;
          `},get children(){return t(n,{size:14,get children(){return e.ticket.title}})}}),t(n,{size:12,opacity:.4,get children(){return _[e.ticket.category]}}),t(o,{get when(){return e.ticket.openedBy},get children(){return t(h,{get href(){return x.PROFILE(e.ticket.openedBy?.id)},get children(){return t(u,{itemsCenter:!0,gap:4,get class(){return i`
                padding: 4px;
                border-radius: 4px;
                transition: 0.2s;
                margin-left: -4px;
                &:hover {
                  background-color: rgba(0, 0, 0, 0.3);
                }
              `},get children(){return[t(I,{get user(){return e.ticket.openedBy},size:18}),t(n,{size:12,get children(){return[r(()=>e.ticket.openedBy?.username),":",r(()=>e.ticket.openedBy?.tag)]}})]}})}})}}),t(m,{gap:4,get class(){return i`
            align-items: flex-start;
            margin-top: 4px;
          `},get children(){return t(n,{color:"white",size:12,get children(){return N(e.ticket.lastUpdatedAt)}})}})]}})]}})},U=e=>({[s.CLOSED_AS_DONE]:{text:"Resolved",color:"var(--success-color)"},[s.CLOSED_AS_INVALID]:{text:"Invalid",color:"var(--alert-color)"},[s.WAITING_FOR_MODERATOR_RESPONSE]:{text:e==="user"?"Reply Sent":"Response Needed",color:e==="user"?"var(--primary-color)":"var(--warn-color)"},[s.WAITING_FOR_USER_RESPONSE]:{text:e==="user"?"Response Needed":"Reply Sent",color:e==="user"?"var(--warn-color)":"var(--primary-color)"}});export{P as T,U as a};
//# sourceMappingURL=TicketItem-Bk_QrcZY.js.map
