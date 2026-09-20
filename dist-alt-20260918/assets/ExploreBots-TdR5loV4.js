import{e as b,D as A,E as H,ak as M,c as e,F as _,S as T,f as R,a4 as O,a as D,m as v,B as E,t as G,i as Y,b as q,d as Q,I as L,a3 as V,q as X}from"./ModerationService-DpHh3JQr.js";import{b as P}from"./useStore-DEZEOTom.js";import{I as F}from"./browser-pi_zKfjJ.js";import{u as a,s as p,a as f,F as N}from"./Flexbox-Cufh4wPc.js";import{A as $,C as z,T as h,B as k,o as j}from"./Text-CN5caMAL.js";import{N as B}from"./Notice-BJ8UrUnj.js";import{B as J}from"./Banner-DcDL1w1m.js";import{h as K}from"./date-0lMVd4xC.js";import{S as Z}from"./Skeleton-DNejdNgG.js";import{M as W}from"./MetaTitle-DPfUkbYB.js";import{a as ee,S as te}from"./ExploreServers-uA6n47-p.js";import{ExploreSearch as re,ExplorePageContainer as ne}from"./ExplorePane-IoQHHlae.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-Dz383fBa.js";import"./languages-hMGia7zW.js";import"./ServerVerifiedIcon-B67fkgVt.js";import"./index-D1cHpUhZ.js";import"./useJoinServer-D2q3nWLY.js";import"./ClanTag-C2eIxXmO.js";import"./Emoji-D70FO0A0.js";import"./CodeBlock-D7JIZP_V.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-CpzYJwQm.js";import"./ContextMenu-C52aux8K.js";import"./Input-C3UKcv4e.js";import"./DeleteConfirmModal-DPJxjp5o.js";import"./GlobalEvents-ClnSa_YK.js";var ie=G("<span>");const oe=p("div")`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  scroll-margin-top: 120px;
`,ae={sort:"recently_bumped",filter:"online_bots",search:""};function Ye(){const[t]=F(),{header:d}=P(),[n,c]=b(null),[o,y]=b(ae),[x,w]=b(null),[m,I]=b(!0);A(H(o,()=>{d.updateHeader({title:t("FbVPsh"),iconName:"explore"}),M(()=>{c(null),w(null),I(!0)})}));let u=0;A(()=>{clearTimeout(u);const i=x(),s=o().search.trim(),l={sort:o().sort,filter:o().filter,limit:30,...i?{afterId:i}:{},...s?{search:s}:{},type:"bot"};u=window.setTimeout(()=>{ee(l).then(C=>{M(()=>{c([...n()||[],...C]),I(C.length>=30)})})},500)});const g=[{id:"most_bumps",label:t("qjvtE/")},{id:"most_members",label:t("4x0fiT")},{id:"recently_added",label:t("KGpy26")},{id:"recently_bumped",label:t("8YFFDG")}],S=[{id:"all",label:t("arH/Y0")},{id:"online_bots",label:t("/8gh40")},{id:"offline_bots",label:t("HdrG0z")}],U=(i,s)=>{const l=[...n()];l[s]={...l[s],...i},c(l)};return e(ne,{get children(){return[e(W,{get children(){return t("FbVPsh")}}),e(re,{sortOpts:g,filterOpts:S,query:o,setQuery:y}),e(B,{type:"info",get description(){return t("6cdGEc",{hours:"3",date:"Monday at 0:00 UTC"})}}),e(B,{get class(){return a`
          margin-bottom: 10px;
        `},type:"warn",get description(){return t("8v2BE8")}}),e(oe,{class:"servers-list-grid",get children(){return[e(_,{get each(){return n()},children:(i,s)=>e(he,{update:l=>U(l,s()),item:i})}),e(T,{get when(){return m()},get children(){return e(_,{get each(){return Array(20).fill(null)},children:()=>e(Z.Item,{height:"334px",width:"100%",onInView:()=>{const i=n();i?.length&&w(i[i.length-1]?.id||null)}})})}})]}})]}})}const se=p(N)`
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
`,le=p(N)`
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
`,ce=p.div`
  display: inline-block;
  margin-right: 6px;
  width: 10px;
  border-radius: 50%;
  height: 10px;
`,me=p(f)`
  align-items: center;
  flex-shrink: 0;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-left: 10px;
  margin-right: 10px;
  opacity: 0.8;
`,pe=a`
  word-break: break-word;
  white-space: pre-line;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,de=a`
  margin-top: -40px;
  margin-left: 12px;
`,ue=a`
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
`,ge=p(f)`
  margin-top: 2px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding-top: 10px;
  flex-shrink: 0;
  z-index: 1111;
`;function he(r){const[t]=F(),d=r.item.botApplication,n=d.botUser,[c,o]=b(!1),y=P(),{createPortal:x}=R(),w=()=>{const u=108e5-(new Date().getTime()-r.item.bumpedAt),g=new Date(u);return u>0&&X(t("QuIRoC",{hours:g.getUTCHours(),minutes:g.getUTCMinutes(),seconds:g.getUTCSeconds()}),t("PhAHSp"),"arrow_upward"),x(S=>e(te,{get update(){return r.update},get publicServer(){return r.item},close:S}))};return e(se,{get class(){return V("serverItemContainer",r.class,r.display&&"display")},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),get children(){return[e(J,{margin:0,radius:6,get animate(){return c()},get class(){return D(a`
            width: 100%;
          `,"banner")},get url(){return O(r.item.botApplication?.botUser,"banner")},get hexColor(){return n.hexColor}}),e($,{class:de,get animate(){return c()},user:n,size:60}),e(le,{class:"detailsContainer",gap:1,get children(){return[e(f,{style:{"align-items":"center","margin-bottom":"4px"},gap:5,get children(){return e(z,{get href(){return E.PROFILE(n.id)},get children(){return e(h,{class:pe,size:18,bold:!0,get children(){return[e(ce,{get style(){return{background:n.online?"var(--status-online)":"var(--status-offline)"}}}),v(()=>n.username)]}})}})}}),e(h,{size:14,color:"rgba(255,255,255,0.6)",get children(){return[v(()=>t("EiiIyn")),": ",e(z,{get href(){return E.PROFILE(d.creatorAccount.user.id)},get children(){var m=ie();return Y(m,()=>d.creatorAccount.user.username),q(()=>Q(m,a`
                font-weight: bold;
              `)),m}})]}})]}}),e(h,{class:ue,size:14,get children(){return r.item.description}}),e(me,{gap:8,get children(){return[e(f,{gap:5,get children(){return[e(L,{name:"group",size:17,color:"var(--primary-color)"}),e(h,{size:14,get children(){return t("YfOJHL",{count:n._count.servers.toLocaleString()})}})]}}),e(f,{gap:5,get children(){return[e(L,{name:"schedule",size:17,color:"var(--primary-color)"}),e(h,{size:14,get children(){return[v(()=>t("Zfh7BY"))," ",v(()=>K(r.item.bumpedAt,!1))]}})]}})]}}),e(ge,{gap:8,get children(){return[e(k,{margin:0,padding:8,iconSize:18,get class(){return a`
            flex: 1;
          `},onClick:()=>j(x,r.item.botApplication?.id,r.item.botPermissions),iconName:"add",primary:!0,get label(){return t("blSIhN")}}),e(k,{padding:8,iconSize:18,onClick:w,get class(){return a`
            flex: 1;
          `},margin:0,iconName:"arrow_upward",get label(){return t("8IYB8R",{count:r.item.bumpCount.toLocaleString()})}}),e(T,{get when(){return y.account.hasModeratorPerm(!0)},get children(){return e(k,{margin:0,padding:8,iconSize:18,get href(){return`/app/moderation/users/${r.item.botApplication?.botUser.id}`},iconName:"security"})}})]}})]}})}export{Ye as default};
//# sourceMappingURL=ExploreBots-TdR5loV4.js.map
