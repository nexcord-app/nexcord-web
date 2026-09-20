import{c as e,C as a,L as l,s as o,V as n,d as s,I as c,T as p,H as u}from"./useStore-C81yKXnX.js";import{e as m}from"./exploreRoutes-W8UYRAp_.js";import{I as d}from"./LegacyItem-B-uApzaA.js";import{D as g}from"./DrawerHeader-DBct5zat.js";import{I as h}from"./browser-QP6z6XX1.js";import{I as x}from"./InVoiceActions-C5uhCBOZ.js";import{S as f}from"./SupportBlock-mga8tbzO.js";import"./_commonjsHelpers-CE1G-McA.js";import"./date-BKAW-sdF.js";const b=o(n)`
  height: 100%;
`,I=o("div")`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  overflow: auto;
`,C=o(d)`
  height: 32px;
  gap: 5px;
  padding-left: 10px;
  margin-left: 3px;
  margin-right: 3px;

  .label {
    opacity: ${t=>t.selected?1:.6};
    transition: 0.2s;
  }

  &:hover .label {
    opacity: 1;
  }
`;function T(){return e(b,{get children(){return[e(w,{}),e(F,{})]}})}function w(){const[t]=h();return e(I,{get children(){return[e(g,{get text(){return t("DVcLt9")}}),e(a,{each:m,children:r=>e(y,{get path(){return r.path||"#  "},get icon(){return r.icon},get label(){return r.name()}})})]}})}function y(t){const r=()=>"/app/explore/"+t.path,i=s(()=>r()+"/*");return e(u,{get href(){return r()},style:{"text-decoration":"none"},get children(){return e(C,{get selected(){return i()},get children(){return[e(c,{get name(){return t.icon},size:18}),e(p,{class:"label",size:14,get children(){return t.label}})]}})}})}const D=o(n)`
  margin-bottom: 2px;
  &[data-mobile-width="true"] {
    padding-bottom: 74px;
  }
`;function F(){const{isMobileWidth:t}=l();return e(D,{gap:2,get"data-mobile-width"(){return t()},get children(){return[e(f,{}),e(x,{get style(){return t()?{bottom:"76px"}:{}}})]}})}export{T as default};
//# sourceMappingURL=ExploreDrawer-ne81paqS.js.map
