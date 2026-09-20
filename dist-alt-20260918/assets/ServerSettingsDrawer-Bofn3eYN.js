import{c as e,z as m,F as g,S as h,C as f,u as x,I as v,t as b,i as I,A as S}from"./ModerationService-CpG_--VM.js";import{S as w}from"./ServerDrawerHeader-C9oR9Jv_.js";import{b as y}from"./useStore-BX0H4HHl.js";import{s as C}from"./ServerSettings-fIhjaZK6.js";import{I as F}from"./LegacyItem-2NqxbUt-.js";import{s as a,F as p}from"./Flexbox-D5klO2LR.js";import{I as P}from"./browser-By5Llgm9.js";import{I as M}from"./InVoiceActions-DYQB3efP.js";import{S as $}from"./SupportBlock-CPLhbewK.js";import"./ContextMenuServer-WKK9lxg1.js";import"./clipboard-p21MJwK2.js";import"./ContextMenu-FDFJu1Xf.js";import"./useResizeObserver-D1YIQi8T.js";import"./RadioBox-BCEOX5PF.js";import"./Text-zTrywdpE.js";import"./ExploreServers-CgHKVrhb.js";import"./ServerVerifiedIcon-j5MOslrQ.js";import"./Notice-BCJa9kR6.js";import"./Banner-0ZZZbkvm.js";import"./date-yc99Ly_9.js";import"./languages-C3qXs8UH.js";import"./index-CF-yd-jw.js";import"./Skeleton-BaeE1obR.js";import"./MetaTitle-BFpzHpXS.js";import"./useJoinServer-Cvhy-yig.js";import"./ExplorePane-DWUdpb48.js";import"./Input-DyE3cipz.js";import"./ClanTag-BnwlqPvK.js";import"./Emoji-D_Yz5f1a.js";import"./CodeBlock-DUGxk4-g.js";import"./MemberContextMenu-DYkTaQk-.js";import"./DeleteConfirmModal-DBKaQEyB.js";import"./GlobalEvents-zRDY--HT.js";import"./_commonjsHelpers-CE1G-McA.js";import"./DrawerHeader-dcN6141K.js";var k=b("<div class=label>");const z=a(p)`
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
//# sourceMappingURL=ServerSettingsDrawer-Bofn3eYN.js.map
