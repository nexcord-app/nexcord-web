import{c as t,J as p,W as g,C as h,S as f,L as x,s as a,V as m,d as v,I as b,E as I,G as S,H as w}from"./useStore-B0mu5xqR.js";import{S as y}from"./ServerDrawerHeader-ByrSdNOj.js";import{s as C}from"./ServerSettings-CGzfCX2G.js";import{I as P}from"./LegacyItem-BWKWa33k.js";import{I as F}from"./browser-BaK9C9_l.js";import{I as M}from"./InVoiceActions-1ohLRQlx.js";import{S as $}from"./SupportBlock-CyWo_o-G.js";import"./_commonjsHelpers-CE1G-McA.js";import"./ContextMenuServer-C8IOCIXK.js";import"./clipboard-p21MJwK2.js";import"./ContextMenu-CqZZtMph.js";import"./useResizeObserver-78Qyl67J.js";import"./RadioBox-7l78EuRt.js";import"./ExploreServers-BqeV-3eT.js";import"./ServerVerifiedIcon-gLzI5TWF.js";import"./Avatar-Dm8O4A-8.js";import"./DropDown-D2LrCkxa.js";import"./Notice-24TY465T.js";import"./Banner-CmLVL7yq.js";import"./date-BKAW-sdF.js";import"./index-BFYysACN.js";import"./Skeleton-Hm2fqnK3.js";import"./MetaTitle-D10L0znK.js";import"./Input-B_7GKQol.js";import"./useJoinServer-Dg6-EmYl.js";import"./Modal-DBA6raav.js";import"./DrawerHeader-uBkmEzGE.js";var k=I("<div class=label>");const D=a(m)`
  height: 100%;
  padding-left: 2px;
  padding-right: 4px;
`,L=a("div")`
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 3px;
  flex: 1;
`,W=a(P)`
  height: 32px;
  gap: 5px;
  padding-left: ${e=>e.nested?"25px":"10px"};
  margin-left: 3px;
  margin-right: 3px;

  .label {
    opacity: ${e=>e.selected?1:.6};
    transition: 0.2s;
    font-size: 14px;
    color: white;
  }

  &:hover .label {
    opacity: 1;
  }
`;function ce(){return t(D,{get children(){return[t(z,{}),t(H,{})]}})}function z(){const[e]=F(),n=p(),{serverMembers:o,account:i,servers:s}=g(),c=()=>o.get(n.serverId,i.user()?.id),d=()=>s.get(n.serverId),u=r=>!r||d()?.createdById===i.user()?.id?!0:c()?.hasPermission(r);return[t(y,{}),t(L,{get children(){return t(h,{each:C,children:r=>{if(r.hideDrawer)return null;const l=()=>n.path===r.path;return t(f,{get when(){return u(r.requiredRolePermission)},get children(){return t(A,{get path(){return r.path||"#  "},get icon(){return r.icon},get label(){return r.name()},get selected(){return l()}})}})}})}})]}function A(e){const n=p(),o=()=>e.nested?e.path:"/app/servers/"+n.serverId+"/settings/"+e.path,i=v(()=>o()+"/*");return t(w,{get href(){return o()},style:{"text-decoration":"none"},get children(){return t(W,{get nested(){return e.nested},get selected(){return i()},get children(){return[t(b,{get name(){return e.icon},size:18}),(()=>{var s=k();return S(s,()=>e.label),s})()]}})}})}const B=a(m)`
  margin-top: 8px;
  position: sticky;
  bottom: 2px;
  background-color: var(--pane-color);
  &[data-mobile-width="true"] {
    padding-bottom: 74px;
  }
`;function H(){const{isMobileWidth:e}=x();return t(B,{gap:2,get"data-mobile-width"(){return e()},get children(){return[t($,{}),t(M,{get style(){return e()?{bottom:"76px"}:{}}})]}})}export{ce as default};
//# sourceMappingURL=ServerSettingsDrawer-DUUvcp1Z.js.map
