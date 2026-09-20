import{W as w,M as B,U as I,c as e,S as l,s as k,V as v,a2 as X,o as D,aJ as K,C as H,h as W,E,G as x,T as N,m as C,b as M,aK as Y,aL as q,F as L,u as g,ac as G,X as J,i as Q,au as Z,af as y,p as O,aq as j,as as R,I as ee,K as te}from"./useStore-C81yKXnX.js";import{P as _,a as re,b as ne}from"./PostsArea-JNSBvYoL.js";import{A as ie}from"./Avatar-CnjpHkJi.js";import{D as oe}from"./Delay-BaU2S7Oe.js";import{g as se,a as ae}from"./Activity-CJQIAwqE.js";import{S as V}from"./Skeleton-C81J_hd6.js";import{M as ce}from"./MetaTitle-Dftcq1pS.js";import{I as F}from"./Item-JqsanXxW.js";import{e as le}from"./emojiToUrl-DRaDW-q8.js";import"./_commonjsHelpers-CE1G-McA.js";import"./date-BKAW-sdF.js";import"./Markup-DMRZKyOZ.js";import"./CodeBlock-BsdAbro_.js";import"./clipboard-p21MJwK2.js";import"./Emoji-LHY5apb-.js";import"./ServerVerifiedIcon-CDs7ZnN3.js";import"./useJoinServer-VYpKHgtr.js";import"./MemberContextMenu-CNS6EZX5.js";import"./ContextMenu-CBCccNPx.js";import"./useResizeObserver-DorGCpy9.js";import"./Checkbox-cAafcjqo.js";import"./browser-QP6z6XX1.js";import"./Input-CGVbQxvr.js";import"./Notice-D4YZaiTY.js";import"./Modal-CslZPWEr.js";import"./GlobalEvents-13pKKKZj.js";import"./Emoji-DVVG_-wX.js";import"./Tooltip-CnKtFUaI.js";import"./DropDown-VSE3I8gP.js";import"./createPreloader-DUj4T5Py.js";import"./MessagePane-CMV2uTw4.js";import"./EmojiPicker-Bzrd2rmw.js";import"./index-1IzJrYOd.js";import"./FileBrowser-eEyl3MlZ.js";import"./match-sorter.esm--8NSWd1a.js";import"./LegacyItem-B-uApzaA.js";import"./userStatus-Cd3lZMeP.js";import"./ConnectionErrorModal-BTEAVjbL.js";import"./logout-DfWc_cxe.js";import"./useAppVersion-C26iW6zP.js";import"./index-Un0jg5rm.js";import"./index-BHfeOVyO.js";import"./ContextMenuServer-BT3TsDae.js";import"./RadioBox-300--nE2.js";import"./ExploreServers-DrytTles.js";import"./Banner-DWKTKMkk.js";import"./index-Cc3i46HJ.js";import"./ColorPicker-CcKZ7Cv_.js";import"./useReminders--8wP4kWR.js";import"./CreateTicketModal-Db0YFZnA.js";import"./useChannelNotice-BYvq5GFc.js";import"./ChannelService-BZ2UQuYN.js";import"./ChannelIcon-Dw6t2zpT.js";import"./ServerGeneralSettings-B1RJNh2s.js";import"./createUpdatedSignal-BgdwjYY3.js";import"./SettingsBlock-zYSlJJFm.js";import"./DeleteConfirmModal-BYsQ7dDb.js";import"./Breadcrumb-B2nrXbr4.js";import"./ServerSettingsPane-YAKZQ6NW.js";import"./index-CP5qcWzg.js";var ue=E("<div style=display:flex;text-align:center;flex-direction:column;align-items:center;justify-content:center;background:rgba(255,255,255,0.04);width:100%;height:100%;border-radius:8px>"),de=E("<div style=pointer-events:none>"),ge=E("<img>"),pe=E("<div><div></div><span>");const me=k(v)`
  justify-content: center;
  align-items: center;
`,he=k(v)`
  place-self: stretch;
  border-radius: 8px;
  flex: 1;
  margin: 30px;
  width: 100%;
  max-width: 700px;
  align-self: center;
`;function Ot(){const{header:r,account:a}=w();return B(()=>{r.updateHeader({title:I("t5AkH8"),iconName:"dashboard"})}),e(me,{get children(){return[e(ce,{children:"Dashboard"}),e(he,{gap:10,get children(){return e(l,{get when(){return a.user()},get children(){return[e(fe,{}),e(Ie,{}),e(be,{})]}})}})]}})}const[P,U]=X("hiddenAnnouncementIds",[]),fe=()=>{const[r,a]=X("announcementsCache",[]);return D(async()=>{const i=await K().catch(()=>{});i&&(P().forEach(t=>{i.find(c=>c.id===t)||U(P().filter(c=>c!==c))}),a(i))}),e(l,{get when(){return r().length},get children(){return e(v,{gap:8,style:{"margin-left":"6px","margin-right":"6px"},get children(){return e(v,{gap:4,get children(){return e(H,{get each(){return r()},children:i=>e(l,{get when(){return!P().includes(i.id)},get children(){return e(xe,{post:i})}})})}})}})}})},xe=r=>{const a=w();D(()=>{a.posts.pushPost(r.post)});const i=()=>a.posts.cachedPost(r.post.id);return e(l,{get when(){return i()},get children(){return e(v,{gap:6,get class(){return g`
          position: relative;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          overflow: hidden;

          && {
            .announcementPostInner {
              border: none;
              &:before {
                border: none;
              }
            }
          }
        `},get children(){return[e(G,{onclick:t=>{t.stopPropagation(),t.preventDefault(),U(P().concat([r.post.id]))},iconName:"close",get class(){return g`
            position: absolute;
            right: 10px;
            top: 10px;
            z-index: 1;
          `},alert:!0,padding:4,iconSize:14,margin:0}),e(ne,{get post(){return i()},class:"announcementPostInner"})]}})}})},ve=k(L)`
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  border-radius: 50%;
  height: 18px;
  width: 18px;
  font-size: 12px;
  ${r=>r.selected?`
    background: white;
    color: var(--primary-color);  
  `:""}
`,z=r=>e(F.Root,{gap:4,get onClick(){return r.onClick},handlePosition:"bottom",get selected(){return r.selected},get children(){return[e(F.Icon,{get children(){return r.icon}}),e(F.Label,{get children(){return r.label}}),C(()=>r.suffix)]}});function be(){const[r,a]=M("FEED"),[i,t]=M(0);D(async()=>{const u=await Y();t(u)});const c=()=>e(l,{get when(){return i()},get children(){return e(ve,{get selected(){return r()==="NOTIFICATIONS"},get children(){return i()}})}});return B(async()=>{r()==="NOTIFICATIONS"&&(await q(),t(0))}),e(v,{get class(){return g`
        background-color: rgba(255, 255, 255, 0.07);
        border-radius: 8px;
        margin-left: 6px;
        margin-right: 6px;
      `},get children(){return[e(L,{gap:5,style:{"margin-bottom":"5px","margin-left":"5px",height:"28px","margin-top":"6px"},get children(){return[e(z,{get label(){return I("Xbp4xk")},get selected(){return r()==="FEED"},onClick:()=>a("FEED"),icon:"home"}),e(z,{get label(){return I("xmOx+C")},get selected(){return r()==="DISCOVER"},icon:"public",onClick:()=>a("DISCOVER")}),e(z,{get label(){return I("9F7kZT")},get selected(){return r()==="NOTIFICATIONS"},onClick:()=>a("NOTIFICATIONS"),icon:"notifications",get suffix(){return e(c,{})}})]}}),e(oe,{get children(){return[e(l,{get when(){return r()==="FEED"},get children(){return e(_,{showFeed:!0,style:{"margin-left":"5px","margin-right":"5px"},showCreateNew:!0})}}),e(l,{get when(){return r()==="DISCOVER"},get children(){return e(_,{showDiscover:!0,style:{"margin-left":"5px","margin-right":"5px"},showCreateNew:!0})}}),e(l,{get when(){return r()==="NOTIFICATIONS"},get children(){return e(re,{style:{"margin-left":"5px","margin-right":"5px"}})}})]}})]}})}const ye=k(L)`
  display: flex;
  gap: 8px;
  height: 80px;
  margin-left: 5px;
  margin-right: 5px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`,Ie=()=>{const{account:r,users:a}=w(),i=w();let t,c=!1,u=!1,m=0,b=0;const T=n=>{document.addEventListener("mousemove",A,{passive:!0}),document.addEventListener("mouseup",o,{once:!0}),t&&(c=!0,u=!1,m=n.pageX-t.offsetLeft,b=t.scrollLeft,t.classList.add("dragging"))},A=n=>{if(!c||!t)return;const S=n.pageX-t.offsetLeft-m;!u&&Math.abs(S)>4&&(u=!0),t.scrollLeft=b-S},o=n=>{document.removeEventListener("mousemove",A),n.preventDefault(),n.stopPropagation(),t&&(c=!1,t.classList.remove("dragging"))},s=n=>{u&&(n.preventDefault(),n.stopPropagation(),u=!1)},p=n=>{t&&(n.preventDefault(),t.scrollLeft+=n.deltaY)},h=()=>i.users.presencesArray().filter(d=>d.activity&&!a.get(d.userId)?.bot&&!i.friends.hasBeenBlockedByMe(d.userId)).sort((d,S)=>S.activity.startedAt-d.activity.startedAt),f=()=>r.lastAuthenticatedAt();return D(()=>{t?.addEventListener("click",s),W(()=>{t?.removeEventListener("click",s)})}),e(ye,{ref(n){var d=t;typeof d=="function"?d(n):t=n},onwheel:p,onmousedown:T,get children(){return[e(l,{get when(){return!f()},get children(){return e(V.List,{count:5,style:{"flex-direction":"row"},get children(){return e(V.Item,{height:"80px",width:"240px"})}})}}),e(l,{get when(){return C(()=>!!f())()&&!h().length},get children(){var n=ue();return x(n,e(N,{size:14,opacity:.6,get children(){return I("BcNOxQ")}})),n}}),e(l,{get when(){return C(()=>!!f())()&&h().length},get children(){return e(H,{get each(){return h()},children:n=>e(Se,{presence:n})})}})]}})},we=k(L)`
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  display: flex;
  padding: 4px;
  flex-shrink: 0;
  position: relative;
  z-index: 11;

  overflow: hidden;

  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,$=g`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,Ce=g`
  aspect-ratio: 1/1;
  height: 100%;
  object-fit: contain;
  border-radius: 6px;

  &.videoActivityImg {
    object-fit: contain;
    aspect-ratio: 16/9;
    flex-shrink: 0;
  }
`,ke=g`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 4px;
  max-width: 180px;
  overflow: hidden;
  padding-top: 2px;
  padding-bottom: 2px;
`,Ae=g`
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  filter: blur(50px) brightness(0.6);
  z-index: -1;
  inset: -20px;
`,Se=r=>{const a=J(),i=w(),t=()=>r.presence.activity,c=()=>i.users.get(r.presence.userId),u=()=>t().emoji,m=Q(()=>{if(t()?.emoji)return le(t()?.emoji);if(t()?.imgSrc)return`${Z.NERIMITY_CDN}proxy/${encodeURIComponent(t()?.imgSrc)}/a`}),b=()=>ae(t()),T=()=>!!b().isVideo&&!t()?.endsAt,A=()=>!!b().isVideo&&!!t()?.startedAt&&!!t()?.endsAt;return e(we,{onClick:()=>a(te.PROFILE(r.presence.userId)),get children(){return[e(l,{get when(){return m()},get children(){return[(()=>{var o=de();return y(o,Ae),O(s=>j(o,"background-image",`url(${m()})`)),o})(),(()=>{var o=ge();return R(o,"draggable",!1),y(o,Ce),O(s=>{var p=m(),h=!!(T()||A()),f=u()?"transparent":"black";return p!==s.e&&R(o,"src",s.e=p),h!==s.t&&o.classList.toggle("videoActivityImg",s.t=h),f!==s.a&&j(o,"background-color",s.a=f),s},{e:void 0,t:void 0,a:void 0}),o})()]}}),(()=>{var o=pe(),s=o.firstChild,p=s.nextSibling;return y(o,ke),x(s,e(ie,{get user(){return c()},size:20}),null),x(s,e(N,{class:$,size:14,bold:!0,get children(){return c()?.username}}),null),y(p,$),x(p,e(ee,{get name(){return se(t())},size:14,get class(){return g`
              vertical-align: -2px;
            `},color:"var(--primary-color)"}),null),x(p,e(N,{size:14,opacity:.7,get children(){return[" ",C(()=>r.presence.activity?.name)]}}),null),x(o,e(l,{get when(){return t().title},get children(){return e(N,{size:12,opacity:.7,class:$,get children(){return[" ",C(()=>t().title)]}})}}),null),O(()=>y(s,g`
            display: flex;
            gap: 8px;
            align-items: center;
          `)),o})()]}})};export{Ot as default};
//# sourceMappingURL=DashboardPane-B4RTLmCd.js.map
