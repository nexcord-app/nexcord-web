import{b as u,g as T,d as f,b7 as b,M as C,O as x,b8 as w,b9 as F,c as t,E as B,G as M,S as o,U as l,p as N,ac as v,V as m,C as g,T as E,F as p,m as O,s as h,af as R,u as _}from"./useStore-C81yKXnX.js";import{B as I,a as i}from"./Breadcrumb-B2nrXbr4.js";import{S as P}from"./SettingsBlock-zYSlJJFm.js";import{C as y}from"./Checkbox-cAafcjqo.js";import{C as A}from"./CreateTicketModal-Db0YFZnA.js";import{T as G,a as d}from"./TicketItem-gX8uMRUG.js";import"./_commonjsHelpers-CE1G-McA.js";import"./DropDown-VSE3I8gP.js";import"./useResizeObserver-DorGCpy9.js";import"./Notice-D4YZaiTY.js";import"./Input-CGVbQxvr.js";import"./Avatar-CnjpHkJi.js";import"./date-BKAW-sdF.js";var $=B("<div>");const j=h("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`,et=()=>{const[n,a]=u([]),{createPortal:s}=T(),r=f(()=>"/app/moderation/*"),[c,k]=u(r()?b.WAITING_FOR_MODERATOR_RESPONSE:void 0);C(x(c,async()=>{const e=await(r()?w:F)({limit:30,status:c()});a(e)}));const S=()=>{s(e=>t(A,{close:e}))};return t(j,{get children(){return[(()=>{var e=$();return M(e,t(I,{get children(){return[t(o,{get when(){return!r()},get children(){return t(i,{href:"/app",icon:"home",get title(){return l("t5AkH8")}})}}),t(o,{get when(){return r()},get children(){return t(i,{href:"/app/moderation",icon:"home",title:"Moderation"})}}),t(i,{get title(){return l("JFif5F")}})]}})),N(()=>R(e,r()?_`
                margin-top: 20px;
              `:"")),e})(),t(o,{get when(){return r()},get children(){return t(H,{get selectedStatus(){return c()},setSelectedStatus:k})}}),t(o,{get when(){return!r()},get children(){return t(P,{icon:"sell",label:"Tickets",get children(){return t(v,{iconName:"add",label:"Create Ticket",onClick:S})}})}}),t(m,{gap:8,get children(){return t(g,{get each(){return n()},children:e=>t(G,{get as(){return r()?"mod":"user"},ticket:e})})}})]}})},D=h(p)`
  border-radius: 4px;
  padding: 4px;
  gap: 6px;
  color: black;
  cursor: pointer;
  user-select: none;
`,H=n=>t(m,{gap:4,get children(){return[t(E,{children:"Filter:"}),t(p,{wrap:!0,gap:4,get children(){return t(g,{get each(){return Object.keys(d("mod"))},children:a=>{const s=d("mod")[a];return t(D,{itemsCenter:!0,onClick:()=>n.setSelectedStatus(n.selectedStatus===Number(a)?void 0:Number(a)),get style(){return{background:s?.color}},get children(){return[t(y,{get checked(){return a===n.selectedStatus?.toString()}}),O(()=>s?.text)]}})}})}})]}});export{et as default};
//# sourceMappingURL=TicketsPage-41PbWFeS.js.map
