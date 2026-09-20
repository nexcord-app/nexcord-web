import{aH as R,K as k,aI as B,e as m,D as U,E as W,ak as F,c as e,S as d,F as A,f as Z,a4 as ee,a as re,m as j,t as te,i as ne,b as ie,d as oe,B as H,I as K,A as ae,a3 as le,q as $}from"./ModerationService-DpHh3JQr.js";import{b as z}from"./useStore-DEZEOTom.js";import{I as O}from"./browser-pi_zKfjJ.js";import{u as g,s as y,a as h,F as X}from"./Flexbox-Cufh4wPc.js";import{S as se}from"./ServerVerifiedIcon-B67fkgVt.js";import{T as p,A as ce,C as ue,B as S,L as de}from"./Text-CN5caMAL.js";import{N as Y}from"./Notice-BJ8UrUnj.js";import{B as ge}from"./Banner-DcDL1w1m.js";import{h as me}from"./date-0lMVd4xC.js";import{T as pe}from"./index-D1cHpUhZ.js";import{S as q}from"./Skeleton-DNejdNgG.js";import{M as he}from"./MetaTitle-DPfUkbYB.js";import{u as fe}from"./useJoinServer-D2q3nWLY.js";import{ExploreSearch as be,ExplorePageContainer as ve}from"./ExplorePane-IoQHHlae.js";import{C as xe}from"./ClanTag-C2eIxXmO.js";function P(r,...t){if(!t.length)return r;const n=t.shift();if(N(r)&&N(n)){const a={...r};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(N(n[i])?i in r?a[i]=P(r[i],n[i]):Object.assign(a,{[i]:n[i]}):Array.isArray(n[i])&&Array.isArray(r[i])?a[i]=[...r[i],...n[i]]:Object.assign(a,{[i]:n[i]}));return P(a,...t)}else return n}function N(r){return r&&typeof r=="object"&&!Array.isArray(r)&&r!==null}async function Se(r,t){return R({method:"POST",body:{token:t},url:k.SERVER_URL+"/api"+B.explore(r)+"/bump",useToken:!0})}async function De(r,t,n){return R({method:"POST",url:k.SERVER_URL+"/api"+B.explore("bots/"+r),body:{description:t,permissions:n},useToken:!0})}async function Ge(r){return R({method:"GET",url:k.SERVER_URL+"/api"+B.explore("bots/"+r),useToken:!0})}async function D(r){return R({params:r,method:"GET",url:k.SERVER_URL+"/api"+B.explore(""),useToken:!0})}var ye=te("<span>");const G=y("div")`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
`,M={sort:"recently_bumped",filter:"all",search:""};function we(){const[t]=O(),{header:n}=z(),[a,i]=m(null),[l,f]=m(M),s=()=>l().sort===M.sort&&l().filter===M.filter&&l().search.trim()===M.search,[b,w]=m(null),[v,I]=m(!0),[C,x]=m(null);U(()=>{n.updateHeader({title:t("wNuBUU"),iconName:"explore"}),D({filter:"pinned",sort:"pinned_at"}).then(o=>x(o)).catch(()=>{})}),U(W(l,()=>{F(()=>{i(null),w(null),I(!0)})}));let L=0;U(()=>{clearTimeout(L);const o=b(),c=l().search.trim(),u={sort:l().sort,filter:l().filter,limit:30,...o?{afterId:o}:{},...c?{search:c}:{}};L=window.setTimeout(()=>{D(u).then(V=>{F(()=>{i([...a()||[],...V]),I(V.length>=30)})})},500)});const T=[{id:"most_bumps",label:t("qjvtE/")},{id:"most_members",label:t("4x0fiT")},{id:"recently_added",label:t("KGpy26")},{id:"recently_bumped",label:t("8YFFDG")},{id:"most_active",label:t("+Kemon")}],E=[{id:"all",label:t("arH/Y0")},{id:"verified",label:t("qvKx/6")},{id:"clans",label:t("KSY/+w")}],_=(o,c)=>{const u=[...a()];u[c]={...u[c],...o},i(u)};return e(ve,{get children(){return[e(he,{get children(){return t("wNuBUU")}}),e(be,{sortOpts:T,filterOpts:E,query:l,setQuery:f}),e(Y,{type:"info",get description(){return t("Yvy4Cf",{hours:"3",date:"Monday at 0:00 UTC"})}}),e(Y,{get class(){return g`
          margin-bottom: 10px;
        `},type:"warn",get description(){return t("/Ul4+v")}}),e(d,{get when(){return s()},get children(){return[e(p,{get children(){return t("oC5cR6")}}),e(G,{class:"servers-list-grid",style:{"margin-bottom":"10px"},get children(){return[e(A,{get each(){return C()},children:(o,c)=>e(Q,{update:u=>_(u,c()),publicServer:o})}),e(d,{get when(){return C()===null},get children(){return e(A,{get each(){return Array(4).fill(null)},children:()=>e(q.Item,{height:"334px",width:"100%",onInView:()=>{const o=a();o?.length&&w(o[o.length-1]?.id||null)}})})}})]}}),e(p,{style:{"margin-bottom":"10px"},get children(){return t("nybshc")}})]}}),e(G,{class:"servers-list-grid",get children(){return[e(A,{get each(){return a()},children:(o,c)=>e(Q,{update:u=>_(u,c()),publicServer:o})}),e(d,{get when(){return v()},get children(){return e(A,{get each(){return Array(20).fill(null)},children:()=>e(q.Item,{height:"334px",width:"100%",onInView:()=>{const o=a();o?.length&&w(o[o.length-1]?.id||null)}})})}})]}})]}})}const Ee=y(X)`
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
`,ke=y(X)`
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
`,Ie=y(h)`
  align-items: center;
  flex-shrink: 0;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-left: 10px;
  margin-right: 10px;
  opacity: 0.8;
`,Ce=g`
  word-break: break-word;
  white-space: pre-line;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,Te=g`
  margin-top: -40px;
  margin-left: 12px;
`,_e=g`
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
`,Ae=y(h)`
  margin-top: 2px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding-top: 10px;
  flex-shrink: 0;
  z-index: 1111;
`;function Q(r){const[t]=O(),n=r.publicServer.server,{joinPublicById:a,joining:i}=fe(),[l,f]=m(!1),s=z(),{createPortal:b}=Z(),{servers:w}=z(),v=()=>w.get(n.id),I=async()=>{i()||await a(r.publicServer.serverId)},C=()=>{const T=108e5-(new Date().getTime()-r.publicServer.bumpedAt),E=new Date(T);if(T>0){$(t("QuIRoC",{hours:E.getUTCHours(),minutes:E.getUTCMinutes(),seconds:E.getUTCSeconds()}),t("PhAHSp"),"arrow_upward");return}return b(_=>e(J,{get update(){return r.update},get publicServer(){return r.publicServer},close:_}))};return e(Ee,{get class(){return le("serverItemContainer",r.class,r.display&&"display")},onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),get children(){return[e(ge,{margin:0,radius:6,get animate(){return l()},get class(){return re(g`
            width: 100%;
          `,"banner")},get url(){return ee(r.publicServer.server,"banner")},get hexColor(){return r.publicServer.server?.hexColor}}),e(ce,{class:Te,get animate(){return l()},server:n,size:60}),e(ke,{class:"detailsContainer",gap:1,get children(){return[e(h,{style:{"align-items":"center","margin-bottom":"4px"},gap:5,get children(){return[e(p,{class:Ce,size:18,bold:!0,get children(){return n.name}}),e(d,{get when(){return n.clan},get children(){return e(xe,{get clan(){return n.clan},hovered:!0})}}),e(d,{get when(){return n.verified},get children(){return e(se,{})}})]}}),e(p,{size:14,color:"rgba(255,255,255,0.6)",get children(){return[j(()=>t("EiiIyn")),": ",e(ue,{get href(){return H.PROFILE(n.createdBy.id)},get children(){var x=ye();return ne(x,()=>r.publicServer.server?.createdBy.username),ie(()=>oe(x,g`
                font-weight: bold;
              `)),x}})]}})]}}),e(p,{class:_e,size:14,get children(){return r.publicServer.description}}),e(Ie,{gap:8,get children(){return[e(h,{gap:5,get children(){return[e(K,{name:"group",size:17,color:"var(--primary-color)"}),e(p,{size:14,get children(){return t("VNb9J+",{count:n._count.serverMembers.toLocaleString()})}})]}}),e(h,{gap:5,get children(){return[e(K,{name:"schedule",size:17,color:"var(--primary-color)"}),e(p,{size:14,get children(){return[j(()=>t("Zfh7BY"))," ",j(()=>me(r.publicServer.bumpedAt,!1))]}})]}})]}}),e(Ae,{gap:8,get children(){return[e(d,{get when(){return v()},get children(){return e(ae,{style:{"text-decoration":"none",flex:1,display:"flex"},get href(){return H.SERVER_MESSAGES(v().id,v().defaultChannelId)},get children(){return e(S,{padding:8,margin:0,primary:!0,get class(){return g`
                flex: 1;
              `},iconSize:18,iconName:"login",get label(){return t("s0kdWd")}})}})}}),e(d,{get when(){return!v()},get children(){return e(S,{margin:0,padding:8,iconSize:18,get class(){return g`
              flex: 1;
            `},onClick:I,iconName:"login",primary:!0,get label(){return t("4/otUU")}})}}),e(S,{padding:8,iconSize:18,onClick:C,get class(){return g`
            flex: 1;
          `},margin:0,iconName:"arrow_upward",get label(){return t("8IYB8R",{count:r.publicServer.bumpCount.toLocaleString()})}}),e(d,{get when(){return s.account.hasModeratorPerm(!0)},get children(){return e(S,{margin:0,padding:8,iconSize:18,get href(){return`/app/moderation/servers/${r.publicServer.serverId}`},iconName:"security"})}})]}})]}})}const Me=y(h)`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;function J(r){const[t]=O(),[n,a]=m(void 0);let i;const l=()=>{Se(r.publicServer.id,n()).then(s=>{r.update(P(r.publicServer,s)),r.close()}).catch(s=>{a(void 0),$(s.message),i?.reset()})},f=e(h,{style:{"justify-content":"flex-end",width:"100%"},get children(){return[e(S,{iconName:"close",get onClick(){return r.close},color:"var(--alert-color)",get label(){return t("dj/WM5")}}),e(d,{get when(){return n()},get children(){return e(S,{iconName:"arrow_upward",get label(){return t("5EH7je")},onClick:l})}})]}});return e(de,{get title(){return t("wiqMmA",{name:r.publicServer.server?.name||r.publicServer.botApplication?.botUser.username})},get close(){return r.close},actionButtons:f,get children(){return e(Me,{get children(){return e(pe,{ref(s){var b=i;typeof b=="function"?b(s):i=s},get sitekey(){return k.TURNSTILE_SITEKEY},onVerify:a,autoResetOnExpire:!0})}})}})}const Qe=Object.freeze(Object.defineProperty({__proto__:null,ServerBumpModal:J,default:we},Symbol.toStringTag,{value:"Module"}));export{Qe as E,J as S,D as a,Ge as g,De as u};
//# sourceMappingURL=ExploreServers-uA6n47-p.js.map
