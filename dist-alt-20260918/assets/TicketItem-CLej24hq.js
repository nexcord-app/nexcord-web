import{c as t,S as l,m as a,T as n,u as r,V as d,F as c,ak as u,K as g,bm as m,E as x,s as h,b7 as o,bn as i}from"./useStore-B0mu5xqR.js";import{A as k}from"./Avatar-Dm8O4A-8.js";import{f as p}from"./date-BKAW-sdF.js";var y=x("<div style=display:flex;align-items:center;justify-content:center;background:var(--alert-color);border-radius:50%;color:white;width:20px;height:20px;font-size:14px>!");function S(){return y()}const f=h("div")`
  background-color: ${e=>e.bgColor};
  border-radius: 6px;
  padding: 2px;
  padding-left: 6px;
  padding-right: 6px;
  font-size: 16px;
  color: black;
`,R=r`
  display: flex;
  flex-direction: row;
  user-select: none;
  background-color: rgba(46, 49, 52, 1);
  border-radius: 6px;
  gap: 4px;
  padding: 6px;
`,T={[i.QUESTION]:"Question",[i.ACCOUNT]:"Account",[i.ABUSE]:"Abuse",[i.OTHER]:"Other",[i.SERVER_VERIFICATION]:"Verify Server"},O=e=>{const s=()=>b(e.as)[e.ticket.status];return t(m,{get component(){return e.disableClick?"div":u},get href(){return`./${e.ticket.id}`},class:R,get children(){return[t(l,{get when(){return a(()=>e.as==="user")()&&e.ticket.seen===!1},get children(){return t(S,{})}}),t(n,{opacity:.4,get class(){return r`width`},get children(){return["#",a(()=>e.ticket.id)]}}),t(d,{get class(){return r`
          align-items: start;
        `},get children(){return[t(c,{gap:4,itemsCenter:!0,get children(){return t(f,{get bgColor(){return s()?.color},get children(){return s()?.text}})}}),t(c,{get class(){return r`
            margin-top: 2px;
          `},get children(){return t(n,{size:14,get children(){return e.ticket.title}})}}),t(n,{size:12,opacity:.4,get children(){return T[e.ticket.category]}}),t(l,{get when(){return e.ticket.openedBy},get children(){return t(u,{get href(){return g.PROFILE(e.ticket.openedBy?.id)},get children(){return t(c,{itemsCenter:!0,gap:4,get class(){return r`
                padding: 4px;
                border-radius: 4px;
                transition: 0.2s;
                margin-left: -4px;
                &:hover {
                  background-color: rgba(0, 0, 0, 0.3);
                }
              `},get children(){return[t(k,{get user(){return e.ticket.openedBy},size:18}),t(n,{size:12,get children(){return[a(()=>e.ticket.openedBy?.username),":",a(()=>e.ticket.openedBy?.tag)]}})]}})}})}}),t(d,{gap:4,get class(){return r`
            align-items: flex-start;
            margin-top: 4px;
          `},get children(){return t(n,{color:"white",size:12,get children(){return p(e.ticket.lastUpdatedAt)}})}})]}})]}})},b=e=>({[o.CLOSED_AS_DONE]:{text:"Resolved",color:"var(--success-color)"},[o.CLOSED_AS_INVALID]:{text:"Invalid",color:"var(--alert-color)"},[o.WAITING_FOR_MODERATOR_RESPONSE]:{text:e==="user"?"Reply Sent":"Response Needed",color:e==="user"?"var(--primary-color)":"var(--warn-color)"},[o.WAITING_FOR_USER_RESPONSE]:{text:e==="user"?"Response Needed":"Reply Sent",color:e==="user"?"var(--warn-color)":"var(--primary-color)"}});export{O as T,b as a};
//# sourceMappingURL=TicketItem-CLej24hq.js.map
