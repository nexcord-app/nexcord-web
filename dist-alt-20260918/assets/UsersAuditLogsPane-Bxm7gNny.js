import{e as g,h as R,t as C,i as b,c as e,B as _,m as c,S as s,A as P,b as j,d as D,a3 as O,Z as q,D as G,E as H,bF as J,bG as K,F as T}from"./ModerationService-DpHh3JQr.js";import{u as p,a as k,s as y,F as Z}from"./Flexbox-Cufh4wPc.js";import{a as Q,C as V,A as W,T as r,B as U}from"./Text-CN5caMAL.js";import{f as $}from"./date-0lMVd4xC.js";import{I as X}from"./Input-C3UKcv4e.js";const[z,B]=g([]);var Y=C("<div>");const ee=y("div")`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  overflow: hidden;

  ${t=>t.expanded?"resize: vertical; height: 500px;":"  max-height: 500px;"}

  flex-shrink: 0;
  margin: 5px;
  margin-left: 10px;
  margin-right: 10px;
  min-height: 80px;
`,te=y(ee)``,re=p`
  display: flex;
  flex-shrink: 0;
  gap: 5px;
  padding: 5px;
  padding-left: 16px;
  cursor: pointer;
  transition: 0.2s;
  text-decoration: none;
  color: white;

  border-top: solid 1px rgba(0, 0, 0, 0.4);
  padding-top: 10px;
  padding-bottom: 10px;

  .checkbox {
    margin-right: 10px;
  }

  &:hover {
    background-color: rgb(66, 66, 66);
  }
`,ne=y("div")`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 6px;
`,ie=t=>z().find(m=>m.id===t);function fe(t){const m=$(t.user.joinedAt),[l,h]=g(!1),d=R(()=>ie(t.user.id)),x=()=>{if(d()){B(z().filter(i=>i.id!==t.user.id));return}B([...z(),t.user])};return(()=>{var i=Y();return i.$$mouseout=()=>h(!1),i.$$mouseover=()=>h(!0),b(i,e(Q,{get checked(){return d()},onChange:x}),null),b(i,e(P,{get href(){return`/app/moderation/users/${t.user.id}`},get class(){return p`
          display: flex;
          gap: 6px;
          flex: 1;
        `},get children(){return[e(V,{get href(){return _.PROFILE(t.user.id)},get children(){return e(W,{get animate(){return l()},get user(){return t.user},size:28,get class(){return p`
              margin-top: 2px;
            `}})}}),e(ne,{class:"details",get children(){return[e(k,{get children(){return[e(r,{size:14,get children(){return t.user.username}}),e(r,{size:14,opacity:.6,get children(){return[":",c(()=>t.user.tag)]}})]}}),e(k,{gap:3,itemsCenter:!0,get children(){return[e(r,{size:12,opacity:.6,children:"Registered:"}),e(r,{size:12,children:m}),e(s,{get when(){return t.user.suspension},get children(){return e(r,{size:12,style:{background:"var(--alert-color)","border-radius":"4px",padding:"3px"},children:"Banned"})}}),e(s,{get when(){return t.user.shadowBan},get children(){return e(r,{size:12,style:{background:"var(--warn-color)","border-radius":"4px",padding:"3px"},children:"Shadow Banned"})}}),e(s,{get when(){return t.user.bot},get children(){return e(r,{size:12,style:{background:"var(--primary-color)","border-radius":"4px",padding:"3px"},children:"Bot"})}})]}})]}})]}}),null),j(()=>D(i,O(re,t.class))),i})()}q(["mouseover","mouseout"]);var ae=C("<div style=height:10px>"),se=C("<div>");const de=y("div")`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  overflow: auto;
`;function xe(t){const[l,h]=g([]),[d,x]=g([]),[i,n]=g([]),[a,u]=g(void 0),[L,w]=g(!1),[f,E]=g(t.search||""),[v,S]=g(t.alwaysExpanded??!1);G(H(a,async()=>{A()}));const M=()=>{const o=l()[l().length-1];u(o?.id)},F=()=>l().slice(0,5);let I=null;const N=o=>{E(o),I&&clearTimeout(I),I=window.setTimeout(()=>{u(void 0),h([]),A(),f().trim()&&S(!0)},1e3)},A=()=>{w(!0),(t.serverId?J({serverId:t.serverId,limit:30,afterId:a()}):K({limit:30,afterId:a(),...f().trim?{query:f().trim()}:{}})).then(o=>{h([...l(),...o.auditLogs]),x([...new Set([...d(),...o.users])]),n([...new Set([...i(),...o.servers])]),o.auditLogs.length>=30&&w(!1)}).catch(()=>w(!1))};return e(te,{class:"pane users",get expanded(){return v()},get style(){return{...v()?void 0:{height:"initial"},...t.noMargin?{margin:0}:{},...t.alwaysExpanded?{height:"initial",resize:"none"}:void 0}},get children(){return[e(s,{get when(){return!t.hideSearchBar},get children(){return e(X,{placeholder:"Search",margin:[10,10,10,30],onText:N,get value(){return f()}})}}),e(s,{get when(){return t.hideSearchBar},get children(){return ae()}}),e(k,{gap:5,itemsCenter:!0,get style(){return{"padding-left":"10px","padding-top":t.alwaysExpanded?"4px":"0px","flex-shrink":"0"}},get children(){return[e(s,{get when(){return!t.alwaysExpanded},get children(){return e(U,{iconName:"add",iconSize:14,padding:4,onClick:()=>S(!v())})}}),e(r,{get children(){return t.title||"User Audit Logs"}})]}}),e(de,{class:"list",get children(){return[e(T,{get each(){return c(()=>!v())()?F():l()},children:o=>e(ce,{get users(){return d()},get servers(){return i()},item:o})}),e(s,{get when(){return c(()=>!!v())()&&!L()},get children(){return e(U,{iconName:"refresh",label:"Load More",onClick:M})}})]}})]}})}const oe=y(Z)`
  border-top: solid 1px rgba(0, 0, 0, 0.4);
  padding: 6px;
`,ce=t=>{const m=()=>{const n=t.item.actionById;if(n)return t.users.find(a=>a.id===n)},l=()=>{const n=t.item.serverId;if(n)return t.servers.find(a=>a.id===n)},h=()=>t.item.data?.serverName||l()?.name,d=()=>{const n=t.item.data?.kickedUserId,a=t.item.data?.unbannedUserId,u=t.item.data?.bannedUserId;return!n&&!u&&!a?void 0:{user:t.users.find(f=>f.id===(n||u||a)),action:n?"Kicked":a?"Unbanned":"Banned"}},x=()=>Object.entries(t.item.data||{}),i=()=>$(t.item.createdAt);return e(oe,{get children(){return[e(r,{size:14,get children(){return t.item.actionType}}),e(r,{size:14,get children(){return[e(r,{size:14,opacity:.6,children:"By:"})," ",c(()=>m()?.username)]}}),e(s,{get when(){return d()},get children(){return e(r,{size:14,get children(){return[e(r,{size:14,opacity:.6,get children(){return[c(()=>d()?.action),":"]}})," ",c(()=>d()?.user?.username)]}})}}),e(s,{get when(){return h()!==void 0},get children(){return e(r,{size:14,get children(){return[e(r,{size:14,opacity:.6,children:"Server:"})," ",c(()=>h())]}})}}),e(s,{get when(){return t.item.reason},get children(){return e(r,{size:14,opacity:.6,get children(){return["Reason: ",c(()=>t.item.reason)]}})}}),e(r,{size:14,opacity:.6,get children(){return["At ",c(()=>i())]}}),e(s,{get when(){return!d()},get children(){var n=se();return b(n,e(T,{get each(){return x()},children:([a,u])=>e(r,{size:14,get children(){return[e(r,{size:14,opacity:.6,get children(){return[a,":"]}})," ",c(()=>typeof u=="string"?u:JSON.stringify(u))," "]}})})),n}})]}})};export{fe as U,te as a,xe as b,B as c,z as s};
//# sourceMappingURL=UsersAuditLogsPane-Bxm7gNny.js.map
