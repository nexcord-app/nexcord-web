import{c as e,z as m,F as g,S as h,C as f,u as x,I as v,t as b,i as I,A as S}from"./ModerationService-7nF9_67y.js";import{S as w}from"./ServerDrawerHeader-SE0QKN_G.js";import{b as y}from"./useStore-C1x_XtZn.js";import{s as C}from"./ServerSettings-BEOmwoV3.js";import{I as F}from"./LegacyItem-BmwBjWON.js";import{s as a,F as p}from"./Flexbox-DahX4I5v.js";import{I as P}from"./browser-ByxRPPz2.js";import{I as M}from"./InVoiceActions-Ca8NGdkk.js";import{S as $}from"./SupportBlock-CkO2FZB0.js";import"./ContextMenuServer-vKuRDU3R.js";import"./clipboard-p21MJwK2.js";import"./ContextMenu-CinibpIf.js";import"./useResizeObserver-DLOEUKTg.js";import"./RadioBox-ByiRQdvT.js";import"./Text-xQnkEBKO.js";import"./ExploreServers-Dsyy3ubm.js";import"./ServerVerifiedIcon-Tsm0_ZSI.js";import"./Notice-B_aSsICh.js";import"./Banner-JoF2XErh.js";import"./date-QVcUUowu.js";import"./languages-CyEDRxRF.js";import"./index-YYSn3C9g.js";import"./Skeleton-fDFQMXJb.js";import"./MetaTitle-Bc2hdpBy.js";import"./useJoinServer-DpcK9aNf.js";import"./ExplorePane-CkqsbnaZ.js";import"./Input-ojZsAQjm.js";import"./ClanTag-tgfDpOrD.js";import"./Emoji-DE4pWG5a.js";import"./CodeBlock-CwHB-ntI.js";import"./MemberContextMenu-qOuREi5_.js";import"./DeleteConfirmModal-CmXpcZod.js";import"./GlobalEvents-D8oaUrNP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DrawerHeader-CpjUQykX.js";var k=b("<div class=label>");const z=a(p)`
  height: 100%;
  padding-left: 2px;
  padding-right: 4px;
`,D=a("div")`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 3px;
  flex: 1;
`,A=a(F)`
  height: 32px;
  gap: 5px;
  padding-left: ${t=>t.nested?"25px":"10px"};
  margin-left: 3px;
  margin-right: 3px;

  .label {
    opacity: ${t=>t.selected?1:.6};
    transition: 0.2s;
    font-size: 14px;
    color: var(--text-color);
  }

  &:hover .label {
    opacity: 1;
  }
`;function vt(){return[e(w,{}),e(z,{get children(){return[e(B,{}),e(_,{})]}})]}function B(){const[t]=P(),o=m(),{serverMembers:n,account:i,servers:s}=y(),c=()=>n.get(o.serverId,i.user()?.id),u=()=>s.get(o.serverId),d=r=>!r||u()?.createdById===i.user()?.id?!0:n?.hasPermission(c(),r);return e(D,{get children(){return e(g,{each:C,children:r=>{if(r.hideDrawer)return null;const l=()=>o.path===r.path;return e(h,{get when(){return d(r.requiredRolePermission)},get children(){return e(L,{get path(){return r.path||"#  "},get icon(){return r.icon},get label(){return r.name()},get selected(){return l()}})}})}})}})}function L(t){const o=m(),n=()=>t.nested?t.path:"/app/servers/"+o.serverId+"/settings/"+t.path,i=x(()=>n()+"/*");return e(S,{get href(){return n()},style:{"text-decoration":"none"},get children(){return e(A,{get nested(){return t.nested},get selected(){return i()},get children(){return[e(v,{get name(){return t.icon},size:18}),(()=>{var s=k();return I(s,()=>t.label),s})()]}})}})}const W=a(p)`
  margin-top: 8px;
  position: sticky;
  bottom: 2px;
  background-color: var(--pane-color);
  &[data-mobile-width="true"] {
    padding-bottom: 74px;
  }
`;function _(){const{isMobileWidth:t}=f();return e(W,{gap:2,get"data-mobile-width"(){return t()},get children(){return[e($,{}),e(M,{get style(){return t()?{bottom:"76px"}:{}}})]}})}export{vt as default};
//# sourceMappingURL=ServerSettingsDrawer-Bj_tITQZ.js.map
