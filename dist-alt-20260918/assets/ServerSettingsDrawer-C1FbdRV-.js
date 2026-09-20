import{c as e,z as m,F as g,S as h,C as f,u as x,I as v,t as b,i as I,A as S}from"./ModerationService-DJHF7x8B.js";import{S as w}from"./ServerDrawerHeader-WdRWrfFd.js";import{b as y}from"./useStore-DBb0Z1Ja.js";import{s as C}from"./ServerSettings-wvQC8Io1.js";import{I as F}from"./LegacyItem-CaAmhw0k.js";import{s as a,F as p}from"./Flexbox-CtT2pseo.js";import{I as P}from"./browser-R3nOtTKF.js";import{I as M}from"./InVoiceActions-CuM0kKPg.js";import{S as $}from"./SupportBlock-B9IBjLnu.js";import"./ContextMenuServer-Lbb6XHy7.js";import"./clipboard-p21MJwK2.js";import"./ContextMenu-D74Pk1Wi.js";import"./useResizeObserver-C51kiEgZ.js";import"./RadioBox-BXOPQ5yg.js";import"./Text-C_egcRFS.js";import"./ExploreServers-CzRMR4Cu.js";import"./ServerVerifiedIcon-Bomy1K6H.js";import"./Notice-CRa-IqGB.js";import"./Banner-C75TSNvg.js";import"./date-2y0WWb20.js";import"./languages-DKaNROAR.js";import"./index-DzYNUaJR.js";import"./Skeleton-Br6MF7Mb.js";import"./MetaTitle-rVDlLqe-.js";import"./useJoinServer-DicVn5o5.js";import"./ExplorePane-B9eaqdRw.js";import"./Input-C6-Ij65G.js";import"./ClanTag-HmJJCvQp.js";import"./Emoji-BZLuU_6X.js";import"./CodeBlock-D-TymAPw.js";import"./MemberContextMenu-BtudyDaE.js";import"./DeleteConfirmModal-DLkL_jIo.js";import"./GlobalEvents-DMigQF6C.js";import"./_commonjsHelpers-CE1G-McA.js";import"./DrawerHeader-C1eBnmzV.js";var k=b("<div class=label>");const z=a(p)`
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
//# sourceMappingURL=ServerSettingsDrawer-C1FbdRV-.js.map
