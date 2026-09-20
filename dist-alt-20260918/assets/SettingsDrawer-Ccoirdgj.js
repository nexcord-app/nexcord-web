import{c as e,H as w,F as d,S as A,m as h,f as E,e as L,o as M,C as $,u as F,I as f,t as x,i as T,A as b,J as V,K as p}from"./ModerationService-CpG_--VM.js";import{b as z,S as D,c as P,e as N}from"./useStore-BX0H4HHl.js";import{s as R}from"./Settings-Ig9stBeJ.js";import{I as _}from"./LegacyItem-2NqxbUt-.js";import{s as i,F as l,a as W,u as y}from"./Flexbox-D5klO2LR.js";import{T as s}from"./Text-zTrywdpE.js";import{C as j}from"./ChangelogModal-D5OlUfJj.js";import{D as q}from"./DrawerHeader-dcN6141K.js";import{I as C}from"./browser-By5Llgm9.js";import{I as H}from"./InVoiceActions-DYQB3efP.js";import{S as K}from"./SupportBlock-CPLhbewK.js";import{R as U}from"./index-Co71UFv5.js";import{g as B}from"./languages-C3qXs8UH.js";import{L as G}from"./LogoutModal-C48aLyOF.js";import{g as J}from"./date-yc99Ly_9.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-D1YIQi8T.js";import"./useAppVersion-Ds6nV-eT.js";import"./index-Un0jg5rm.js";import"./logout-NpC9kFev.js";var O=x("<div style=display:flex;align-items:center;justify-content:center;background:var(--alert-color);border-radius:50%;color:white;width:20px;height:20px;font-size:14px;margin-left:auto;margin-right:8px>!"),Q=x("<div class=label>");const X=i(l)`
  height: 100%;
  padding-left: 2px;
  padding-right: 4px;
`,Y=i("div")`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,Z=i(_)`
  height: 32px;
  gap: 5px;
  padding-left: ${t=>t.nested?"25px":"10px"};
  margin-left: 3px;
  margin-right: 3px;

  .label {
    opacity: ${t=>t.selected?1:.6};
    font-size: 14px;
    transition: 0.2s;
    color: var(--text-color);
  }

  &:hover .label {
    opacity: 1;
  }
`,ee=i(l)`
  padding-bottom: 2px;
  margin-top: 8px;
  position: sticky;
  bottom: 0;
  background-color: var(--side-pane-color);
  &[data-mobile-width="true"] {
    padding-bottom: 76px;
  }
`,te=i(l)`
  margin-left: 3px;
  margin-right: 3px;
`;function re(){const[t]=C(),{createPortal:o}=E(),{isMobileWidth:r}=$(),[a,v]=L(),S=()=>o?.(n=>e(j,{close:n})),I=async()=>{o(n=>e(G,{close:n}))},g=()=>p.RELEASE_TIMESTAMP?J(p.RELEASE_TIMESTAMP):"",k=async()=>{const n="Unknown",u=P()?.version,m=await N()?.getAppVersion();return[`App ${n} ${g()?`(${g()})`:""}`,u?`React Native ${u}`:void 0,m?`Electron v${m}`:void 0]};return M(()=>{k().then(v)}),e(ee,{gap:2,get"data-mobile-width"(){return r()},get children(){return[e(te,{get children(){return e(d,{get each(){return a()},children:n=>e(s,{size:12,color:"rgba(255,255,255,0.4)",style:{"user-select":"none"},children:n})})}}),e(K,{}),e(W,{gap:4,style:{"margin-left":"2px",margin:"4px"},get children(){return[e(c,{href:"https://github.com/Nerimity/Nerimity-Web",external:!0,icon:"code",get label(){return t("IULSwy")}}),e(c,{icon:"description",get label(){return t("TcKqqG")},onClick:S}),e(c,{color:"var(--alert-color)",icon:"logout",get label(){return t("TDpM63")},onClick:I})]}}),e(H,{})]}})}function Ee(){return e(U,{on:B,get children(){return[e(q,{get text(){return w("3i16p4")}}),e(X,{get children(){return[e(ne,{}),e(re,{})]}})]}})}function ne(){const{tickets:t}=z(),[o]=C();return e(Y,{get children(){return e(d,{get each(){return R.filter(r=>!r.hide)},children:r=>e(D,{get id(){return r.experimentId},get children(){return e(ie,{get path(){return r.path||"#  "},get icon(){return r.icon},get label(){return r.name()},get children(){return e(A,{get when(){return h(()=>r.path==="tickets")()&&t.hasTicketNotification()},get children(){return e(oe,{})}})}})}})})}})}function oe(){return O()}function ie(t){const o=()=>"/app/settings/"+t.path,r=F(()=>o()+"/*");return e(b,{get href(){return o()},style:{"text-decoration":"none"},get children(){return e(Z,{get selected(){return r()},get children(){return[e(f,{get name(){return t.icon},size:18}),(()=>{var a=Q();return T(a,()=>t.label),a})(),h(()=>t.children)]}})}})}const ae=y`
  display: flex;
  padding: 5px;
  flex-direction: column;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
  align-items: center;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.05);
  text-align: center;
  justify-content: center;
  gap: 4px;
`;function c(t){return e(V,{get component(){return t.href?b:"div"},get href(){return t.href},class:ae,target:"_blank",rel:"noopener noreferrer",get onClick(){return t.onClick},style:{"text-decoration":"none"},get children(){return[e(f,{get name(){return t.icon},get color(){return t.color},size:18}),e(s,{size:14,get children(){return t.label}}),e(s,{size:14,color:"rgba(255,255,255,0.4)",get class(){return y`
          margin-right: 5px;
        `},get children(){return t.subLabel}})]}})}export{Ee as default};
//# sourceMappingURL=SettingsDrawer-Ccoirdgj.js.map
