import{bG as A,au as I,bH as B,W as z,b as h,M as L,O as ne,aS as V,c as e,E as q,G as J,ac as b,p as W,F as m,u as c,S as g,T as f,C as T,s as v,g as ie,aN as ae,ab as oe,m as N,ak as le,K as D,I as G,H as se,a as ce,aB as ue,V as X,w as Z,af as ee}from"./useStore-C81yKXnX.js";import{I as re}from"./browser-QP6z6XX1.js";import{S as de}from"./ServerVerifiedIcon-CDs7ZnN3.js";import{A as pe}from"./Avatar-CnjpHkJi.js";import{D as H}from"./DropDown-VSE3I8gP.js";import{N as F}from"./Notice-D4YZaiTY.js";import{B as ge}from"./Banner-DWKTKMkk.js";import{b as me,g as he}from"./date-BKAW-sdF.js";import{T as fe}from"./index-Cc3i46HJ.js";import{S as $}from"./Skeleton-C81J_hd6.js";import{M as be}from"./MetaTitle-Dftcq1pS.js";import{I as ve}from"./Input-CGVbQxvr.js";import{u as xe}from"./useJoinServer-VYpKHgtr.js";function P(r,...t){if(!t.length)return r;const i=t.shift();if(U(r)&&U(i)){const l={...r};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(U(i[a])?a in r?l[a]=P(r[a],i[a]):Object.assign(l,{[a]:i[a]}):Array.isArray(i[a])&&Array.isArray(r[a])?l[a]=[...r[a],...i[a]]:Object.assign(l,{[a]:i[a]}));return P(l,...t)}else return i}function U(r){return r&&typeof r=="object"&&!Array.isArray(r)&&r!==null}async function Se(r,t){return A({method:"POST",body:{token:t},url:I.SERVER_URL+"/api"+B.explore(r)+"/bump",useToken:!0})}async function Ke(r,t,i){return A({method:"POST",url:I.SERVER_URL+"/api"+B.explore("bots/"+r),body:{description:t,permissions:i},useToken:!0})}async function Ye(r){return A({method:"GET",url:I.SERVER_URL+"/api"+B.explore("bots/"+r),useToken:!0})}async function K(r){return A({params:r,method:"GET",url:I.SERVER_URL+"/api"+B.explore(""),useToken:!0})}var ye=q("<div>"),we=q("<span>");const Ie=v("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`,Y=v("div")`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  scroll-margin-top: 120px;
`,_={sort:"recently_bumped",filter:"all",search:""};function ke(){const[t]=re(),{header:i}=z(),[l,a]=h(null),[o,s]=h(_),x=()=>o().sort===_.sort&&o().filter===_.filter&&o().search.trim()===_.search,[R,w]=h(null),[S,k]=h(!0),[E,M]=h(null);L(()=>{i.updateHeader({title:t("wNuBUU"),iconName:"explore"}),K({filter:"pinned",sort:"pinned_at"}).then(n=>M(n)).catch(()=>{})}),L(ne(o,()=>{V(()=>{a(null),w(null),k(!0)})}));let p=0;L(()=>{clearTimeout(p);const n=R(),u=o().search.trim(),d={sort:o().sort,filter:o().filter,limit:30,...n?{afterId:n}:{},...u?{search:u}:{}};p=window.setTimeout(()=>{K(d).then(O=>{V(()=>{a([...l()||[],...O]),k(O.length>=30)})})},500)});const j=[{id:"most_bumps",label:t("qjvtE/")},{id:"most_members",label:t("4x0fiT")},{id:"recently_added",label:t("KGpy26")},{id:"recently_bumped",label:t("8YFFDG")},{id:"most_active",label:t("+Kemon")}],C=[{id:"all",label:t("arH/Y0")},{id:"verified",label:t("qvKx/6")}],y=(n,u)=>{const d=[...l()];d[u]={...d[u],...n},a(d)};return e(Ie,{get children(){return[e(be,{children:"Explore Servers"}),(()=>{var n=ye();return J(n,e(b,{margin:0,href:"/app",get label(){return t("gP5z+e")},iconName:"arrow_back"})),W(()=>ee(n,c`
          display: flex;
        `)),n})(),e(m,{gap:10,wrap:!0,get class(){return c`
          flex: 1;
          margin-bottom: 10px;
          margin-top: 10px;
        `},get children(){return[e(ve,{get label(){return t("+1hnsP")},get value(){return o().search},onText:n=>s({...o(),search:n}),get class(){return c`
            flex: 1;
            min-width: 200px;
            span {
              margin-bottom: 2px;
            }
          `}}),e(H,{get title(){return t("L1aQvJ")},items:j,get selectedId(){return o().sort},onChange:n=>s({...o(),sort:n.id})}),e(H,{get title(){return t("G2a9WI")},items:C,get selectedId(){return o().filter},onChange:n=>s({...o(),filter:n.id})})]}}),e(F,{type:"info",get description(){return t("Yvy4Cf",{hours:"3",date:"Monday at 0:00 UTC"})}}),e(F,{get class(){return c`
          margin-bottom: 10px;
        `},type:"warn",get description(){return t("/Ul4+v")}}),e(g,{get when(){return x()},get children(){return[e(f,{get children(){return t("oC5cR6")}}),e(Y,{class:"servers-list-grid",style:{"margin-bottom":"10px"},get children(){return[e(T,{get each(){return E()},children:(n,u)=>e(Q,{update:d=>y(d,u()),publicServer:n})}),e(g,{get when(){return E()===null},get children(){return e(T,{get each(){return Array(4).fill(null)},children:()=>e($.Item,{height:"334px",width:"100%",onInView:()=>{const n=l();n?.length&&w(n[n.length-1]?.id||null)}})})}})]}}),e(f,{style:{"margin-bottom":"10px"},get children(){return t("nybshc")}})]}}),e(Y,{class:"servers-list-grid",get children(){return[e(T,{get each(){return l()},children:(n,u)=>e(Q,{update:d=>y(d,u()),publicServer:n})}),e(g,{get when(){return S()},get children(){return e(T,{get each(){return Array(20).fill(null)},children:()=>e($.Item,{height:"334px",width:"100%",onInView:()=>{const n=l();n?.length&&w(n[n.length-1]?.id||null)}})})}})]}})]}})}const Ee=v(X)`
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
`,Ce=v(X)`
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
`,Te=v(m)`
  align-items: center;
  flex-shrink: 0;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-left: 10px;
  margin-right: 10px;
  opacity: 0.8;
`,_e=c`
  word-break: break-word;
  white-space: pre-line;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,Ae=c`
  margin-top: -40px;
  margin-left: 12px;
`,Be=c`
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
`,Re=v(m)`
  margin-top: 2px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding-top: 10px;
  flex-shrink: 0;
  z-index: 1111;
`;function Q(r){const[t]=re(),i=r.publicServer.server,{joinPublicById:l,joining:a}=xe(),[o,s]=h(!1),x=z(),{createPortal:R}=ie(),{servers:w}=z(),S=()=>w.get(i.id),k=async()=>{a()||await l(r.publicServer.serverId)},E=()=>{const C=108e5-(new Date().getTime()-r.publicServer.bumpedAt),y=new Date(C);return C>0&&Z(t("QuIRoC",{hours:y.getUTCHours(),minutes:y.getUTCMinutes(),seconds:y.getUTCSeconds()}),t("PhAHSp"),"arrow_upward"),R(n=>e(te,{get update(){return r.update},get publicServer(){return r.publicServer},close:n}))},M=()=>new Date().getTime()-r.publicServer.bumpedAt<1440*60*1e3;return e(Ee,{get class(){return ce("serverItemContainer",r.class,r.display&&"display")},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),get children(){return[e(ge,{margin:0,radius:6,get animate(){return o()},get class(){return oe(c`
            width: 100%;
          `,"banner")},get url(){return ae(r.publicServer.server)},get hexColor(){return r.publicServer.server?.hexColor}}),e(pe,{class:Ae,get animate(){return o()},server:i,size:60}),e(Ce,{class:"detailsContainer",gap:1,get children(){return[e(m,{style:{"align-items":"center","margin-bottom":"4px"},gap:5,get children(){return[e(f,{class:_e,size:18,bold:!0,get children(){return i.name}}),e(g,{get when(){return i.verified},get children(){return e(de,{})}})]}}),e(f,{size:14,color:"rgba(255,255,255,0.6)",get children(){return[N(()=>t("EiiIyn")),": ",e(le,{get href(){return D.PROFILE(i.createdBy.id)},get children(){var p=we();return J(p,()=>r.publicServer.server?.createdBy.username),W(()=>ee(p,c`
                font-weight: bold;
              `)),p}})]}})]}}),e(f,{class:Be,size:14,get children(){return r.publicServer.description}}),e(Te,{gap:8,get children(){return[e(m,{gap:5,get children(){return[e(G,{name:"group",size:17,color:"var(--primary-color)"}),e(f,{size:14,get children(){return t("VNb9J+",{count:i._count.serverMembers.toLocaleString()})}})]}}),e(m,{gap:5,get children(){return[e(G,{name:"schedule",size:17,color:"var(--primary-color)"}),e(f,{size:14,get children(){return[N(()=>t("Zfh7BY"))," ",N(()=>(M()?me:he)(r.publicServer.bumpedAt))]}})]}})]}}),e(Re,{gap:8,get children(){return[e(g,{get when(){return S()},get children(){return e(se,{style:{"text-decoration":"none",flex:1,display:"flex"},get href(){return D.SERVER_MESSAGES(S().id,S().defaultChannelId)},get children(){return e(b,{padding:8,margin:0,primary:!0,get class(){return c`
                flex: 1;
              `},iconSize:18,iconName:"login",get label(){return t("s0kdWd")}})}})}}),e(g,{get when(){return!S()},get children(){return e(b,{margin:0,padding:8,iconSize:18,get class(){return c`
              flex: 1;
            `},onClick:k,iconName:"login",primary:!0,get label(){return t("4/otUU")}})}}),e(b,{padding:8,iconSize:18,onClick:E,get class(){return c`
            flex: 1;
          `},margin:0,iconName:"arrow_upward",get label(){return t("8IYB8R",{count:r.publicServer.bumpCount.toLocaleString()})}}),e(g,{get when(){return x.account.hasModeratorPerm()},get children(){return e(b,{margin:0,padding:8,iconSize:18,get href(){return`/app/moderation/servers/${r.publicServer.serverId}`},iconName:"security"})}})]}})]}})}const Me=v(m)`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;function te(r){const[t,i]=h(void 0);let l;const a=()=>{Se(r.publicServer.id,t()).then(s=>{r.update(P(r.publicServer,s)),r.close()}).catch(s=>{i(void 0),Z(s.message),l?.reset()})},o=e(m,{style:{"justify-content":"flex-end",width:"100%"},get children(){return[e(b,{iconName:"close",get onClick(){return r.close},color:"var(--alert-color)",label:"Back"}),e(g,{get when(){return t()},get children(){return e(b,{iconName:"arrow_upward",label:"Bump",onClick:a})}})]}});return e(ue,{get title(){return`Bump ${r.publicServer.server?.name||r.publicServer.botApplication?.botUser.username}`},get close(){return r.close},actionButtons:o,get children(){return e(Me,{get children(){return e(fe,{ref(s){var x=l;typeof x=="function"?x(s):l=s},get sitekey(){return I.TURNSTILE_SITEKEY},onVerify:i,autoResetOnExpire:!0})}})}})}const Qe=Object.freeze(Object.defineProperty({__proto__:null,ServerBumpModal:te,default:ke},Symbol.toStringTag,{value:"Module"}));export{Qe as E,te as S,K as a,Ye as g,Ke as u};
//# sourceMappingURL=ExploreServers-DrytTles.js.map
