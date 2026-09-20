import{c as e,z as m,F as g,S as h,C as f,u as x,I as v,t as b,i as I,A as S}from"./ModerationService-DpHh3JQr.js";import{S as w}from"./ServerDrawerHeader-CcLZ6Ncp.js";import{b as y}from"./useStore-DEZEOTom.js";import{s as C}from"./ServerSettings-QEWg6zed.js";import{I as F}from"./LegacyItem-DUHTN840.js";import{s as a,F as p}from"./Flexbox-Cufh4wPc.js";import{I as P}from"./browser-pi_zKfjJ.js";import{I as M}from"./InVoiceActions-D1YmlOhl.js";import{S as $}from"./SupportBlock-CIVJPmbJ.js";import"./ContextMenuServer-4TvwiEi4.js";import"./clipboard-p21MJwK2.js";import"./ContextMenu-C52aux8K.js";import"./useResizeObserver-Dz383fBa.js";import"./RadioBox-H9DE4S8y.js";import"./Text-CN5caMAL.js";import"./ExploreServers-uA6n47-p.js";import"./ServerVerifiedIcon-B67fkgVt.js";import"./Notice-BJ8UrUnj.js";import"./Banner-DcDL1w1m.js";import"./date-0lMVd4xC.js";import"./languages-hMGia7zW.js";import"./index-D1cHpUhZ.js";import"./Skeleton-DNejdNgG.js";import"./MetaTitle-DPfUkbYB.js";import"./useJoinServer-D2q3nWLY.js";import"./ExplorePane-IoQHHlae.js";import"./Input-C3UKcv4e.js";import"./ClanTag-C2eIxXmO.js";import"./Emoji-D70FO0A0.js";import"./CodeBlock-D7JIZP_V.js";import"./MemberContextMenu-CpzYJwQm.js";import"./DeleteConfirmModal-DPJxjp5o.js";import"./GlobalEvents-ClnSa_YK.js";import"./_commonjsHelpers-CE1G-McA.js";import"./DrawerHeader-C3znK4gv.js";var k=b("<div class=label>");const z=a(p)`
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
//# sourceMappingURL=ServerSettingsDrawer-DRI0Vx48.js.map
