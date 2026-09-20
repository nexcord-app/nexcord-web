import{W as P,b as h,M,O as G,aS as B,c as e,E as N,G as D,ac as I,p as F,F as u,u as i,C as L,S as U,s as m,g as Y,aN as $,ab as Q,ak as _,T as g,m as y,K as T,I as z,a as q,V as H,w as K,af as R}from"./useStore-C81yKXnX.js";import{I as O}from"./browser-QP6z6XX1.js";import{A as V}from"./Avatar-CnjpHkJi.js";import{D as X}from"./DropDown-VSE3I8gP.js";import{N as E}from"./Notice-D4YZaiTY.js";import{B as J}from"./Banner-DWKTKMkk.js";import{b as W,g as j}from"./date-BKAW-sdF.js";import{S as Z}from"./Skeleton-C81J_hd6.js";import{M as ee}from"./MetaTitle-Dftcq1pS.js";import{I as te}from"./Input-CGVbQxvr.js";import{a as re,S as ne}from"./ExploreServers-DrytTles.js";import{InviteBotPopup as ie}from"./InviteServerBot-DvNJDezH.js";import{M as S}from"./Modal-CslZPWEr.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-DorGCpy9.js";import"./ServerVerifiedIcon-CDs7ZnN3.js";import"./index-Cc3i46HJ.js";import"./useJoinServer-VYpKHgtr.js";import"./PageFooter-Df0a3Gm7.js";import"./logout-DfWc_cxe.js";import"./ApplicationService-BDcrUZt3.js";import"./Checkbox-cAafcjqo.js";var ae=N("<div>"),oe=N("<span>");const se=m("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`,le=m("div")`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  scroll-margin-top: 120px;
`,ce={sort:"recently_bumped",filter:"all",search:""};function Oe(){const[r]=O(),{header:p}=P(),[a,d]=h(null),[o,b]=h(ce),[f,x]=h(null),[k,w]=h(!0);M(G(o,()=>{p.updateHeader({title:r("FbVPsh"),iconName:"explore"}),B(()=>{d(null),x(null),w(!0)})}));let s=0;M(()=>{clearTimeout(s);const t=f(),l=o().search.trim(),c={sort:o().sort,filter:o().filter,limit:30,...t?{afterId:t}:{},...l?{search:l}:{},type:"bot"};s=window.setTimeout(()=>{re(c).then(A=>{B(()=>{d([...a()||[],...A]),w(A.length>=30)})})},500)});const C=[{id:"most_bumps",label:r("qjvtE/")},{id:"most_members",label:r("4x0fiT")},{id:"recently_added",label:r("KGpy26")},{id:"recently_bumped",label:r("8YFFDG")}];r("arH/Y0"),r("qvKx/6");const v=(t,l)=>{const c=[...a()];c[l]={...c[l],...t},d(c)};return e(se,{get children(){return[e(ee,{children:"Explore Bots"}),(()=>{var t=ae();return D(t,e(I,{margin:0,href:"/app",get label(){return r("gP5z+e")},iconName:"arrow_back"})),F(()=>R(t,i`
          display: flex;
        `)),t})(),e(u,{gap:10,wrap:!0,get class(){return i`
          flex: 1;
          margin-bottom: 10px;
          margin-top: 10px;
        `},get children(){return[e(te,{get label(){return r("+1hnsP")},get value(){return o().search},onText:t=>b({...o(),search:t}),get class(){return i`
            flex: 1;
            min-width: 200px;
            span {
              margin-bottom: 2px;
            }
          `}}),e(X,{get title(){return r("L1aQvJ")},items:C,get selectedId(){return o().sort},onChange:t=>b({...o(),sort:t.id})})]}}),e(E,{type:"info",get description(){return r("6cdGEc",{hours:"3",date:"Monday at 0:00 UTC"})}}),e(E,{get class(){return i`
          margin-bottom: 10px;
        `},type:"warn",get description(){return r("8v2BE8")}}),e(le,{class:"servers-list-grid",get children(){return[e(L,{get each(){return a()},children:(t,l)=>e(xe,{update:c=>v(c,l()),item:t})}),e(U,{get when(){return k()},get children(){return e(L,{get each(){return Array(20).fill(null)},children:()=>e(Z.Item,{height:"334px",width:"100%",onInView:()=>{const t=a();t?.length&&x(t[t.length-1]?.id||null)}})})}})]}})]}})}const me=m(H)`
  background: var(--background-color);
  border: solid 1px rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  user-select: none;
  position: relative;
  overflow: hidden;
  &.display {
    max-height: initial;
    margin-bottom: 10px;
    .banner {
      max-height: 160px;
    }
  }
`,de=m(H)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 8px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 0;
  padding-left: 6px;
  padding-right: 6px;
  flex-shrink: 0;
  z-index: 1111;
`,ue=m.div`
  display: inline-block;
  margin-right: 6px;
  width: 10px;
  border-radius: 50%;
  height: 10px;
`,pe=m(u)`
  align-items: center;
  flex-shrink: 0;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-left: 10px;
  margin-right: 10px;
  opacity: 0.8;
`,ge=i`
  word-break: break-word;
  white-space: pre-line;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,he=i`
  margin-top: -40px;
  margin-left: 12px;
`,be=i`
  margin-top: 12px;
  margin-bottom: 6px;
  word-break: break-word;
  white-space: pre-line;
  flex-shrink: 0;
  margin-bottom: auto;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin-left: 11px;
  margin-right: 11px;
`,fe=m(u)`
  margin-top: 2px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding-top: 10px;
  flex-shrink: 0;
  z-index: 1111;
`;function xe(n){const[r]=O(),p=n.item.botApplication,a=p.botUser,[d,o]=h(!1),b=P(),{createPortal:f}=Y(),x=async()=>{f(s=>e(S.Root,{close:s,desktopMaxWidth:400,get desktopClass(){return i`
          width: 100%;
        `},get children(){return[e(S.Header,{title:"Invite Bot"}),e(S.Body,{get class(){return i`
            overflow: auto;
          `},get children(){return e(ie,{get appId(){return n.item.botApplication?.id},get permissions(){return n.item.botPermissions}})}})]}}))},k=()=>{const v=108e5-(new Date().getTime()-n.item.bumpedAt),t=new Date(v);return v>0&&K(r("QuIRoC",{hours:t.getUTCHours(),minutes:t.getUTCMinutes(),seconds:t.getUTCSeconds()}),r("PhAHSp"),"arrow_upward"),f(l=>e(ne,{get update(){return n.update},get publicServer(){return n.item},close:l}))},w=()=>new Date().getTime()-n.item.bumpedAt<1440*60*1e3;return e(me,{get class(){return q("serverItemContainer",n.class,n.display&&"display")},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),get children(){return[e(J,{margin:0,radius:6,get animate(){return d()},get class(){return Q(i`
            width: 100%;
          `,"banner")},get url(){return $(n.item.botApplication?.botUser)},get hexColor(){return a.hexColor}}),e(V,{class:he,get animate(){return d()},user:a,size:60}),e(de,{class:"detailsContainer",gap:1,get children(){return[e(u,{style:{"align-items":"center","margin-bottom":"4px"},gap:5,get children(){return e(_,{get href(){return T.PROFILE(a.id)},get children(){return e(g,{class:ge,size:18,bold:!0,get children(){return[e(ue,{get style(){return{background:a.online?"var(--status-online)":"var(--status-offline)"}}}),y(()=>a.username)]}})}})}}),e(g,{size:14,color:"rgba(255,255,255,0.6)",get children(){return[y(()=>r("EiiIyn")),": ",e(_,{get href(){return T.PROFILE(p.creatorAccount.user.id)},get children(){var s=oe();return D(s,()=>p.creatorAccount.user.username),F(()=>R(s,i`
                font-weight: bold;
              `)),s}})]}})]}}),e(g,{class:be,size:14,get children(){return n.item.description}}),e(pe,{gap:8,get children(){return[e(u,{gap:5,get children(){return[e(z,{name:"group",size:17,color:"var(--primary-color)"}),e(g,{size:14,get children(){return r("YfOJHL",{count:a._count.servers.toLocaleString()})}})]}}),e(u,{gap:5,get children(){return[e(z,{name:"schedule",size:17,color:"var(--primary-color)"}),e(g,{size:14,get children(){return[y(()=>r("Zfh7BY"))," ",y(()=>(w()?W:j)(n.item.bumpedAt))]}})]}})]}}),e(fe,{gap:8,get children(){return[e(I,{margin:0,padding:8,iconSize:18,get class(){return i`
            flex: 1;
          `},onClick:x,iconName:"add",primary:!0,get label(){return r("blSIhN")}}),e(I,{padding:8,iconSize:18,onClick:k,get class(){return i`
            flex: 1;
          `},margin:0,iconName:"arrow_upward",get label(){return r("8IYB8R",{count:n.item.bumpCount.toLocaleString()})}}),e(U,{get when(){return b.account.hasModeratorPerm()},get children(){return e(I,{margin:0,padding:8,iconSize:18,get href(){return`/app/moderation/users/${n.item.botApplication?.botUser.id}`},iconName:"security"})}})]}})]}})}export{Oe as default};
//# sourceMappingURL=ExploreBots-BTfRWdf4.js.map
