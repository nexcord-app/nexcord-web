import{c as e,z as m,F as g,S as h,C as f,u as x,I as v,t as b,i as I,A as S}from"./ModerationService-JKa8HDPL.js";import{S as w}from"./ServerDrawerHeader-B6XFKize.js";import{b as y}from"./useStore-1zAIwTgm.js";import{s as C}from"./ServerSettings-v2KnheWa.js";import{I as F}from"./LegacyItem-BD4CtrW6.js";import{s as a,F as p}from"./Flexbox-CKnPoiWr.js";import{I as P}from"./browser-BM56HFVq.js";import{I as M}from"./InVoiceActions-CGK0jap1.js";import{S as $}from"./SupportBlock-CCmMeCDu.js";import"./ContextMenuServer-D1rvmrW2.js";import"./clipboard-p21MJwK2.js";import"./ContextMenu-DhGNygfK.js";import"./useResizeObserver-5zHNQ4fP.js";import"./RadioBox-Bvwav8gu.js";import"./Text-D1ScQjsd.js";import"./ExploreServers-EvIrkBRx.js";import"./ServerVerifiedIcon-DUdLvsuu.js";import"./Notice-BfoaFfM1.js";import"./Banner-CVIIMr4F.js";import"./date-DqCgL0Ei.js";import"./languages-zn42qa69.js";import"./index-CA-fueae.js";import"./Skeleton-4ICHWQuq.js";import"./MetaTitle-CbG5DSuq.js";import"./useJoinServer-PT3ro9QY.js";import"./ExplorePane-Du5j57ra.js";import"./Input-DoZRayyi.js";import"./ClanTag-DJCmGglO.js";import"./Emoji-CBS3HK9g.js";import"./CodeBlock-CwKQuSal.js";import"./MemberContextMenu-CvJksU59.js";import"./DeleteConfirmModal-Cu3EoCaP.js";import"./GlobalEvents-IGv04jiB.js";import"./_commonjsHelpers-CE1G-McA.js";import"./DrawerHeader-BxI6oPEM.js";var k=b("<div class=label>");const z=a(p)`
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
//# sourceMappingURL=ServerSettingsDrawer-Cx8pyjYc.js.map
