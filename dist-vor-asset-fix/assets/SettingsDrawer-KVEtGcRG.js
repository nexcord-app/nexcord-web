import{c as e,H as k,F as d,S as A,m as h,f as E,e as L,o as M,C as $,u as F,I as f,t as x,i as T,A as b,J as V,K as p}from"./ModerationService--RmbjC5p.js";import{b as z,S as D,c as P,e as R}from"./useStore-B8c8g-Rg.js";import{s as _}from"./Settings-DxHGqyWu.js";import{I as N}from"./LegacyItem-1jaDFHQu.js";import{s as i,F as l,a as W,u as y}from"./Flexbox-DdRgUkVN.js";import{T as s}from"./Text-CVNHmjKJ.js";import{C as j}from"./ChangelogModal-D5303csM.js";import{D as q}from"./DrawerHeader-DbFHEn5P.js";import{I as C}from"./browser-BunxtBnb.js";import{I as H}from"./InVoiceActions-CM0h65r4.js";import{S as K}from"./SupportBlock-wI8sNhgL.js";import{R as U}from"./index-Dlit-_69.js";import{g as B}from"./languages-Cb1WEjVH.js";import{L as G}from"./LogoutModal-Be7MkMP9.js";import{g as J}from"./date-BRn35p1W.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useResizeObserver-CpC9RR9B.js";import"./useAppVersion-BRR2aPwY.js";import"./index-CcwfxTkM.js";import"./logout-CA2llaas.js";var O=x("<div style=display:flex;align-items:center;justify-content:center;background:var(--alert-color);border-radius:50%;color:white;width:20px;height:20px;font-size:14px;margin-left:auto;margin-right:8px>!"),Q=x("<div class=label>");const X=i(l)`
  height: 100%;
  padding-left: 2px;
  padding-right: 4px;
`,Y=i("div")`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,Z=i(N)`
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
`;function re(){const[t]=C(),{createPortal:o}=E(),{isMobileWidth:r}=$(),[a,v]=L(),S=()=>o?.(n=>e(j,{close:n})),w=async()=>{o(n=>e(G,{close:n}))},g=()=>p.RELEASE_TIMESTAMP?J(p.RELEASE_TIMESTAMP):"",I=async()=>{const n="Unknown",u=P()?.version,m=await R()?.getAppVersion();return[`App ${n} ${g()?`(${g()})`:""}`,u?`React Native ${u}`:void 0,m?`Electron v${m}`:void 0]};return M(()=>{I().then(v)}),e(ee,{gap:2,get"data-mobile-width"(){return r()},get children(){return[e(te,{get children(){return e(d,{get each(){return a()},children:n=>e(s,{size:12,color:"rgba(255,255,255,0.4)",style:{"user-select":"none"},children:n})})}}),e(K,{}),e(W,{gap:4,style:{"margin-left":"2px",margin:"4px"},get children(){return[e(c,{href:"https://github.com/Nerimity/nerimity-web",external:!0,icon:"code",get label(){return t("IULSwy")}}),e(c,{icon:"description",get label(){return t("TcKqqG")},onClick:S}),e(c,{color:"var(--alert-color)",icon:"logout",get label(){return t("TDpM63")},onClick:w})]}}),e(H,{})]}})}function Ee(){return e(U,{on:B,get children(){return[e(q,{get text(){return k("3i16p4")}}),e(X,{get children(){return[e(ne,{}),e(re,{})]}})]}})}function ne(){const{tickets:t}=z(),[o]=C();return e(Y,{get children(){return e(d,{get each(){return _.filter(r=>!r.hide)},children:r=>e(D,{get id(){return r.experimentId},get children(){return e(ie,{get path(){return r.path||"#  "},get icon(){return r.icon},get label(){return r.name()},get children(){return e(A,{get when(){return h(()=>r.path==="tickets")()&&t.hasTicketNotification()},get children(){return e(oe,{})}})}})}})})}})}function oe(){return O()}function ie(t){const o=()=>"/app/settings/"+t.path,r=F(()=>o()+"/*");return e(b,{get href(){return o()},style:{"text-decoration":"none"},get children(){return e(Z,{get selected(){return r()},get children(){return[e(f,{get name(){return t.icon},size:18}),(()=>{var a=Q();return T(a,()=>t.label),a})(),h(()=>t.children)]}})}})}const ae=y`
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
//# sourceMappingURL=SettingsDrawer-KVEtGcRG.js.map
