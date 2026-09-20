import{c as e,z as m,F as g,S as h,C as f,u as x,I as v,t as b,i as I,A as S}from"./ModerationService--RmbjC5p.js";import{S as w}from"./ServerDrawerHeader-C4Ex6ZTm.js";import{b as y}from"./useStore-B8c8g-Rg.js";import{s as C}from"./ServerSettings-B9RXBeXC.js";import{I as F}from"./LegacyItem-1jaDFHQu.js";import{s as a,F as p}from"./Flexbox-DdRgUkVN.js";import{I as P}from"./browser-BunxtBnb.js";import{I as M}from"./InVoiceActions-CM0h65r4.js";import{S as $}from"./SupportBlock-wI8sNhgL.js";import"./ContextMenuServer-BEuyK-P7.js";import"./clipboard-p21MJwK2.js";import"./ContextMenu-DlhjvYHX.js";import"./useResizeObserver-CpC9RR9B.js";import"./RadioBox-CEVB8pDD.js";import"./Text-CVNHmjKJ.js";import"./ExploreServers-CM1H2ztZ.js";import"./ServerVerifiedIcon-W43yudYR.js";import"./Notice-DEuV9al1.js";import"./Banner-Byap_1JA.js";import"./date-BRn35p1W.js";import"./languages-Cb1WEjVH.js";import"./index-CDdyw8n8.js";import"./Skeleton-B5QliNYZ.js";import"./MetaTitle-EETaEaDk.js";import"./useJoinServer-Cpi-4iyc.js";import"./ExplorePane-BWWKV28n.js";import"./Input-Cxyj3EM0.js";import"./ClanTag-MlhFir4K.js";import"./Emoji-CDOypsoU.js";import"./CodeBlock-BMkzsw0g.js";import"./MemberContextMenu-CnIGVF2Z.js";import"./DeleteConfirmModal-Brc2rzZx.js";import"./GlobalEvents-CaCLsBJj.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DrawerHeader-DbFHEn5P.js";var k=b("<div class=label>");const z=a(p)`
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
//# sourceMappingURL=ServerSettingsDrawer-H-iM0cGe.js.map
