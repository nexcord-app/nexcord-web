import{c as e,U as k,s as i,V as d,W as v,C as y,S as h,m,X as S,g as I,L,d as _,I as c,E as s,G as p,H as f,Y as g,Z as $,$ as z,a0 as N,T as u,u as a,a1 as D}from"./useStore-C81yKXnX.js";import{s as F}from"./Settings-073OYnCH.js";import{I as M}from"./LegacyItem-B-uApzaA.js";import{C as E}from"./ChangelogModal-BMArA1Zd.js";import{D as W}from"./DrawerHeader-DBct5zat.js";import{I as x}from"./browser-QP6z6XX1.js";import{I as A}from"./InVoiceActions-C5uhCBOZ.js";import{S as P}from"./experiments-CZtDbfVz.js";import{l as T}from"./logout-DfWc_cxe.js";import{S as j}from"./SupportBlock-mga8tbzO.js";import{R as H}from"./index-CP5qcWzg.js";import{g as R}from"./languages-T_FTuHOj.js";import"./_commonjsHelpers-CE1G-McA.js";import"./date-BKAW-sdF.js";import"./useAppVersion-C26iW6zP.js";import"./index-Un0jg5rm.js";var U=s("<div style=display:flex;align-items:center;justify-content:center;background:var(--alert-color);border-radius:50%;color:white;width:20px;height:20px;font-size:14px;margin-left:auto;margin-right:8px>!"),V=s("<div class=label>"),Y=s("<div>");const B=i(d)`
  height: 100%;
  padding-left: 2px;
  padding-right: 4px;
`,G=i("div")`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,b=i(M)`
  height: 32px;
  gap: 5px;
  padding-left: ${t=>t.nested?"25px":"10px"};
  margin-left: 3px;
  margin-right: 3px;
  :first {
    background-color: red;
  }

  .label {
    opacity: ${t=>t.selected?1:.6};
    font-size: 14px;
    transition: 0.2s;
    color: white;
  }

  &:hover .label {
    opacity: 1;
  }
`,O=i(d)`
  padding-bottom: 2px;
  margin-top: 8px;
  position: sticky;
  bottom: 0;
  background-color: var(--side-pane-color);
  &[data-mobile-width="true"] {
    padding-bottom: 76px;
  }
`;function X(){const[t]=x();S();const{createPortal:n}=I(),{isMobileWidth:r}=L(),o=()=>n?.(w=>e(E,{close:w})),C=async()=>{await N(),T()};return e(O,{gap:2,get"data-mobile-width"(){return r()},get children(){return[e(j,{}),e(l,{href:"https://github.com/Nerimity/Nerimity-Web",external:!0,icon:"code",get label(){return t("S/DfAY")}}),e(l,{icon:"description",get label(){return t("NCao9S")},get subLabel(){return"Unknown"},onClick:o}),e(l,{color:"var(--alert-color)",icon:"logout",get label(){return t("Mjtx3O")},onClick:C}),e(A,{})]}})}function me(){return e(H,{on:R,get children(){return[e(W,{get text(){return k("3i16p4")}}),e(B,{get children(){return[e(Z,{}),e(X,{})]}})]}})}function Z(){const{tickets:t}=v(),[n]=x();return e(G,{get children(){return e(y,{get each(){return F.filter(r=>!r.hide)},children:r=>e(P,{get id(){return r.experimentId},get children(){return e(J,{get path(){return r.path||"#  "},get icon(){return r.icon},get label(){return r.name()},get children(){return e(h,{get when(){return m(()=>r.path==="tickets")()&&t.hasTicketNotification()},get children(){return e(q,{})}})}})}})})}})}function q(){return U()}function J(t){const n=()=>"/app/settings/"+t.path,r=_(()=>n()+"/*");return e(f,{get href(){return n()},style:{"text-decoration":"none"},get children(){return e(b,{get selected(){return r()},get children(){return[e(c,{get name(){return t.icon},size:18}),(()=>{var o=V();return p(o,()=>t.label),o})(),m(()=>t.children)]}})}})}function l(t){const n=()=>e(b,{get children(){return[e(c,{get name(){return t.icon},get color(){return t.color},size:18}),e(u,{get class(){return a`
            margin-right: auto;
          `},size:14,get children(){return t.label}}),e(u,{size:14,color:"rgba(255,255,255,0.4)",get class(){return a`
            margin-right: 5px;
          `},get children(){return t.subLabel}}),e(h,{get when(){return t.external},get children(){return e(c,{get class(){return a`
              margin-right: 5px;
            `},color:"rgba(255,255,255,0.6)",name:"open_in_new",size:16})}})]}});return e(z,{get children(){return[e(g,{get when(){return t.href},get children(){return e(f,{get href(){return t.href},target:"_blank",rel:"noopener noreferrer",style:{"text-decoration":"none"},children:n})}}),e(g,{get when(){return!t.href},get children(){var r=Y();return $(r,"click",t.onClick,!0),p(r,n),r}})]}})}D(["click"]);export{me as default};
//# sourceMappingURL=SettingsDrawer-Cu8f55uz.js.map
