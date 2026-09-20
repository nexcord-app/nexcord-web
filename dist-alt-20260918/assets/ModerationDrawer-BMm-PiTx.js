import{c as t,F as l,S as u,m as a,u as d,I as g,t as o,i as c,A as p}from"./ModerationService-DJHF7x8B.js";import{b as h}from"./useStore-DBb0Z1Ja.js";import{I as m}from"./LegacyItem-CaAmhw0k.js";import{s as n,F as f}from"./Flexbox-CtT2pseo.js";import{D as x}from"./DrawerHeader-C1eBnmzV.js";import{R as b}from"./index-MrgJRm3H.js";import{g as v}from"./languages-DKaNROAR.js";import"./_commonjsHelpers-CE1G-McA.js";var y=o("<div style=display:flex;align-items:center;justify-content:center;background:var(--alert-color);border-radius:50%;color:white;width:20px;height:20px;font-size:14px;margin-left:auto;margin-right:8px>"),k=o("<div class=label>");const C=n(f)`
  height: 100%;
  padding-left: 2px;
  padding-right: 4px;
`,w=n("div")`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,I=n(m)`
  height: 32px;
  gap: 5px;
  padding-left: ${e=>e.nested?"25px":"10px"};
  margin-left: 3px;
  margin-right: 3px;
  :first {
    background-color: red;
  }

  .label {
    opacity: ${e=>e.selected?1:.6};
    font-size: 14px;
    transition: 0.2s;
    color: var(--text-color);
  }

  &:hover .label {
    opacity: 1;
  }
`;function A(){return t(b,{on:v,get children(){return[t(x,{text:"Moderation Pane"}),t(C,{get children(){return t(M,{})}})]}})}const $=[{name:()=>"Legacy",path:"",icon:"science"},{name:()=>"Users",path:"users",icon:"account_circle"},{name:()=>"Tickets",path:"tickets",icon:"sell"}];function M(){const{tickets:e}=h();return t(w,{get children(){return t(l,{each:$,children:r=>t(D,{get path(){return r.path||""},get icon(){return r.icon},get label(){return r.name()},get children(){return t(u,{get when(){return a(()=>r.path==="tickets")()&&e.hasModerationTicketNotification()},get children(){return t(_,{get count(){return e.hasModerationTicketNotification()}})}})}})})}})}function _(e){return(()=>{var r=y();return c(r,()=>e.count||"!"),r})()}function D(e){const r=()=>"/app/moderation/"+e.path,s=d(()=>r());return t(p,{get href(){return r()},style:{"text-decoration":"none"},get children(){return t(I,{get selected(){return s()},get children(){return[t(g,{get name(){return e.icon},size:18}),(()=>{var i=k();return c(i,()=>e.label),i})(),a(()=>e.children)]}})}})}export{A as default};
//# sourceMappingURL=ModerationDrawer-BMm-PiTx.js.map
