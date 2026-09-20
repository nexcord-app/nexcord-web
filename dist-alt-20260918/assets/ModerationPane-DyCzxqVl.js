const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UserPage-BMqgh1Cm.js","assets/ModerationService-JKa8HDPL.js","assets/ModerationService-DRj-JTbk.css","assets/createUpdatedSignal-CNDh-HXG.js","assets/Flexbox-CKnPoiWr.js","assets/Banner-CVIIMr4F.js","assets/Text-D1ScQjsd.js","assets/useResizeObserver-5zHNQ4fP.js","assets/Text-De5mghWJ.css","assets/Breadcrumb-BvtXBWyF.js","assets/SettingsBlock-CSxjoyNS.js","assets/SettingsBlock-Dr9aEj4k.css","assets/Input-DoZRayyi.js","assets/date-DqCgL0Ei.js","assets/languages-zn42qa69.js","assets/UsersAuditLogsPane-0psaAxqk.js","assets/useStore-1zAIwTgm.js","assets/_commonjsHelpers-CE1G-McA.js","assets/ConnectionErrorModal-BUeD84on.js","assets/logout-BFT2zQgK.js","assets/ConnectionErrorModal-hOiI5G0e.css","assets/WarnedModal-BJo3PFKI.js","assets/WarnedModal-BOvwLcgK.css","assets/Notice-BfoaFfM1.js","assets/Notice-7bREXDLX.css","assets/Block-B6c-S7yz.js","assets/RadioBox-Bvwav8gu.js","assets/GlobalEvents-IGv04jiB.js","assets/TicketsPage-LgfKwPEV.js","assets/CreateTicketModal-C32S6ApO.js","assets/TicketItem-Bk_QrcZY.js","assets/ServerPage-DLFeHUlp.js","assets/useJoinServer-PT3ro9QY.js"])))=>i.map(i=>d[i]);
import{e as a,f as te,ah as Be,D as F,c as e,F as O,V as _e,S as d,t as N,i as I,bn as Ue,bo as Re,bp as Ne,bq as Fe,br as Oe,q as de,E as re,bs as Ee,bt as je,A,m as b,bu as We,u as qe,O as He,b as se,C as Ve,a0 as Ye,h as Ge,d as Z,I as we,bv as Ze,am as be,bw as Je,aG as k,bx as ie,o as Ce,by as Ke,bz as Qe,bA as Xe,bB as et,bC as tt,bD as rt,aF as nt,l as ge,_ as he,bE as it,Z as st}from"./ModerationService-JKa8HDPL.js";import{b as V}from"./useStore-1zAIwTgm.js";import{B as w,L as ne,a as X,T as r,A as le,C as at,M as Q}from"./Text-D1ScQjsd.js";import{f as ae}from"./date-DqCgL0Ei.js";import{a as C,u as R,s as B,F as ee}from"./Flexbox-CKnPoiWr.js";import{I as U}from"./Input-DoZRayyi.js";import{C as ot}from"./ConnectionErrorModal-BUeD84on.js";import{f as lt,g as ke,h as Le,i as ze,j as ct}from"./GlobalEvents-IGv04jiB.js";import{S as dt}from"./SettingsBlock-CSxjoyNS.js";import{s as J,U as Ie,a as pe,b as ut,c as gt}from"./UsersAuditLogsPane-0psaAxqk.js";import{a as ht}from"./RadioBox-Bvwav8gu.js";var pt=N("<div style=margin-top:6px;margin-bottom:2px>"),ft=N("<div style=margin-top:2px;margin-bottom:6px>");const mt=B("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`,vt=R`
  width: 120px;
`;function Me(t){const n=V(),[i,c]=a(""),[h,f]=a("7"),[u,l]=a(""),[o,p]=a(null),[L,M]=a(!1),{createPortal:D}=te(),[m,v]=a(!1),[s,x]=a(!1),[S,$]=Be([!1,!1,!1,!1,!1,!1]),g=[{label:"Bypassing Suspensions (Alt)",checked:!1},{label:"Being Racist",checked:!1},{label:"Threating Harm or Violence",checked:!1},{label:"Being Hateful",checked:!1},{label:"Sharing NSFW Content",checked:!1},{label:"Other",checked:!1}];F(()=>{let y=Math.round(parseInt(h()));y<0&&(y=0),f(y.toString())});const T=()=>{const y=g.filter((j,W)=>W===g.length-1?!1:S[W]).map(j=>j.label);return S[g.length-1]&&i()?.trim()&&y.push(i()),new Intl.ListFormat("en").format(y)},q=()=>{if(L())return;M(!0),p(null);const y=t.users.map(W=>W.id),E=parseInt(h()),j={expireAt:E?Se(E):null,suspendedAt:Date.now(),reason:T()||void 0,suspendBy:n.account.user()};Ue({confirmPassword:u(),userIds:y,days:E,reason:T()||void 0,ipBan:m(),deleteRecentMessages:s()}).then(()=>{t.done(j),t.close()}).catch(W=>p(W)).finally(()=>M(!1))},_=()=>{const y=parseInt(h()),E=y?Se(y):void 0,j=T()||void 0;D(W=>e(ot,{close:W,get suspensionPreview(){return{expire:E,reason:j,by:{username:n.account.user().username}}}}))},z=e(C,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return[e(w,{onClick:_,margin:0,label:"Preview"}),e(w,{onClick:q,margin:0,get label(){return L()?"Suspending...":"Suspend"},color:"var(--alert-color)",primary:!0})]}});return e(ne,{get close(){return t.close},get title(){return`Suspend ${t.users.length} User(s)`},actionButtons:z,ignoreBackgroundClick:!0,get children(){return e(mt,{get children(){return[e(O,{each:g,children:(y,E)=>e(X,_e(y,{onChange:j=>$(E(),j),labelSize:14}))}),e(d,{get when(){return S[5]},get children(){return e(U,{label:"Reason",get value(){return i()},onText:c})}}),e(U,{class:vt,label:"Suspend for",type:"number",get value(){return h()},onText:f,suffix:"days"}),e(r,{size:12,opacity:.7,get class(){return R`
            margin-top: -4px;
          `},children:"0 days will suspend them indefinitely"}),(()=>{var y=pt();return I(y,e(X,{labelSize:14,get checked(){return m()},onChange:v,label:"IP ban for a week"})),y})(),(()=>{var y=ft();return I(y,e(X,{labelSize:14,get checked(){return s()},onChange:x,label:"Delete past 7 hours messages & posts (raids only)"})),y})(),e(U,{label:"Confirm Password",type:"password",get value(){return u()},onText:l}),e(d,{get when(){return o()},get children(){return e(r,{color:"var(--alert-color)",size:12,get children(){return o()?.message}})}})]}})}})}function Se(t){const i=Date.now();return new Date(i+864e5*t).getTime()}const xt=B("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function Te(t){const[n,i]=a(""),[c,h]=a(null),[f,u]=a(!1),l=()=>{f()||(u(!0),h(null),Re(n(),t.postIds).then(()=>{t.done(),t.close()}).catch(p=>h(p)).finally(()=>u(!1)))},o=e(C,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(w,{onClick:l,margin:0,get label(){return f()?"Deleting...":"Delete"},color:"var(--alert-color)",primary:!0})}});return e(ne,{get close(){return t.close},get title(){return`Delete ${t.postIds.length} post(s)`},actionButtons:o,ignoreBackgroundClick:!0,color:"var(--alert-color)",get children(){return e(xt,{get children(){return[e(U,{label:"Confirm Password",type:"password",get value(){return n()},onText:i}),e(d,{get when(){return c()},get children(){return e(r,{color:"var(--alert-color)",size:12,get children(){return c()?.message}})}})]}})}})}const St=B("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function yt(t){const[n,i]=a(""),[c,h]=a(null),[f,u]=a(!1),l=()=>{f()||(u(!0),h(null),Ne(n(),t.postId).then(()=>{t.done(),t.close()}).catch(p=>h(p)).finally(()=>u(!1)))},o=e(C,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(w,{onClick:l,margin:0,get label(){return f()?"Announcing...":"Announce"},color:"var(--primary-color)",primary:!0})}});return e(ne,{get close(){return t.close},title:"Announce Post",actionButtons:o,ignoreBackgroundClick:!0,get children(){return e(St,{get children(){return[e(r,{size:14,children:"Announcing a post will show on everyone's Dashboard."}),e(U,{label:"Confirm Password",type:"password",get value(){return n()},onText:i}),e(d,{get when(){return c()},get children(){return e(r,{color:"var(--alert-color)",size:12,get children(){return c()?.message}})}})]}})}})}const wt=B("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function bt(t){const[n,i]=a(""),[c,h]=a(null),[f,u]=a(!1),l=()=>{f()||(u(!0),h(null),Fe(n(),t.postId).then(()=>{t.done(),t.close()}).catch(p=>h(p)).finally(()=>u(!1)))},o=e(C,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(w,{onClick:l,margin:0,get label(){return f()?"Deleting...":"Delete"},color:"var(--primary-color)",primary:!0})}});return e(ne,{get close(){return t.close},title:"Announce Post",actionButtons:o,ignoreBackgroundClick:!0,get children(){return e(wt,{get children(){return[e(r,{size:14,children:"Delete announcement for this post."}),e(U,{label:"Confirm Password",type:"password",get value(){return n()},onText:i}),e(d,{get when(){return c()},get children(){return e(r,{color:"var(--alert-color)",size:12,get children(){return c()?.message}})}})]}})}})}const Ct=B("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function Ae(t){const[n,i]=a(""),[c,h]=a(""),[f,u]=a({"NSFW Server":!1,Other:!1}),[l,o]=a(null),[p,L]=a(!1),M=()=>{const v=[];return Object.keys(f()).forEach(s=>{if(f()[s]){if(s==="Other"){v.push(c());return}f()[s]&&v.push(s)}}),v.join(", ")},D=async()=>{if(!M().trim()){o({message:"Please provide a reason."});return}if(p())return;L(!0),o(null);const v=t.servers.map(S=>S.id);let s=!1,x=!1;for(let S=0;S<v.length;S++){const $=v[S];if(await Oe($,n(),M()).catch(g=>{s=!0,g.path==="password"&&(x=!0,o(g),L(!1))}),x)break}x||(s&&de("Some servers could not be deleted due to an error. Please try again."),lt(t.servers),t.done(),t.close())},m=e(C,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(w,{onClick:D,margin:0,get label(){return p()?"Deleting...":"Delete"},color:"var(--alert-color)",primary:!0})}});return e(ne,{get close(){return t.close},get title(){return`Delete ${t.servers.length} Server(s)`},actionButtons:m,ignoreBackgroundClick:!0,get children(){return e(Ct,{get children(){return[e(O,{get each(){return Object.keys(f())},children:v=>e(X,{label:v,get checked(){return f()[v]||!1},onChange:()=>{u(s=>({...s,[v]:!s[v]}))}})}),e(d,{get when(){return f().Other},get children(){return e(U,{label:"Reason",get value(){return c()},onText:h})}}),e(U,{label:"Confirm Password",type:"password",get value(){return n()},onText:i}),e(d,{get when(){return l()},get children(){return e(r,{color:"var(--alert-color)",size:12,get children(){return l()?.message}})}})]}})}})}var kt=N("<div style=height:10px>");const Lt=B("div")`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  overflow: auto;
`;function zt(t){const[i,c]=a([]),[h,f]=a(void 0),[u,l]=a(!1),[o,p]=a(t.search||""),[L,M]=a(!1);ke()(g=>{c(i().map(T=>J().find(_=>_.id===T.id)?{...T,suspension:g}:T))}),F(re(h,async()=>{if(o())return S();$()}));const m=()=>{const g=i()[i().length-1];f(g?.id)},v=()=>i().slice(0,5);let s=null;const x=g=>{p(g),s&&clearTimeout(s),s=window.setTimeout(()=>{if(f(void 0),c([]),!o().trim()){$();return}M(!0),S()},1e3)},S=()=>{l(!0),Ee(o(),30,h()).then(g=>{c([...i(),...g]),g.length>=30&&l(!1)}).catch(()=>l(!1))},$=()=>{l(!0),je(30,h()).then(g=>{c([...i(),...g]),g.length>=30&&l(!1)}).catch(()=>l(!1))};return e(pe,{class:"pane users",get expanded(){return L()},get style(){return{...L()?void 0:{height:"initial"},...t.noMargin?{margin:0}:{}}},get children(){return[e(d,{get when(){return!t.hideSearchBar},get children(){return e(U,{placeholder:"Search",margin:[10,10,10,30],onText:x,get value(){return o()}})}}),e(d,{get when(){return t.hideSearchBar},get children(){return kt()}}),e(C,{gap:5,itemsCenter:!0,style:{"padding-left":"10px"},get children(){return[e(w,{iconName:"add",iconSize:14,padding:4,onClick:()=>M(!L())}),e(A,{href:"/app/moderation/users",get children(){return e(r,{get children(){return t.title||"Registered Users"}})}})]}}),e(Lt,{class:"list",get children(){return[e(O,{get each(){return b(()=>!L())()?v():i()},children:g=>e(Ie,{user:g})}),e(d,{get when(){return b(()=>!!L())()&&!u()},get children(){return e(w,{iconName:"refresh",label:"Load More",onClick:m})}})]}})]}})}var It=N("<div style=position:absolute;inset:0;background:var(--pane-color);overflow:auto;justify-content:center;display:flex;padding-top:40px;z-index:1111>"),oe=N("<div>"),Mt=N("<div style=height:10px>"),ye=N("<strong>"),Tt=N("<div><div><span>"),At=N('<div style="background:var(--alert-color);border-radius:4px;padding:2px 8px;margin-top:4px;display:inline-block">'),Pt=N('<div style="background:var(--primary-color);border-radius:4px;padding:2px 8px;margin-top:4px;display:inline-block">'),Dt=N("<div style=cursor:initial;overflow:hidden>");ge(()=>he(()=>import("./UserPage-BMqgh1Cm.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27])));ge(()=>he(()=>import("./TicketsPage-LgfKwPEV.js"),__vite__mapDeps([28,1,2,16,17,9,4,6,7,8,10,11,29,23,24,12,30,13,14])));ge(()=>he(()=>import("./ServerPage-DLFeHUlp.js"),__vite__mapDeps([31,1,2,3,15,4,6,7,8,13,14,12,10,11,9,5,27,17,16,32,26,18,19,20])));const[G,$t]=a(null),[H,ue]=a([]),[Bt,_t]=a(),Ut=t=>H().find(n=>n.id===t),Rt=B("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  align-self: center;
  margin-top: 10px;
  a {
    text-decoration: none;
  }
`,Nt=B(ee)`
  overflow: auto;
  flex-shrink: 0;
`,ce=B("div")`
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
`,K=B("div")`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  overflow: auto;
`,fe=R`
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
`,me=R`
  place-self: start;
  margin-top: 3px;
`,P=R`
  &:hover {
    text-decoration: underline;
  }
`,ve=B("div")`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 6px;
`,Ft=B(ee)`
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
  margin-top: 10px;
`;function Ot(){const{account:t,header:n}=V(),[i,c]=a(!1),{isMobileWidth:h}=Ve();F(()=>{t.hasModeratorPerm(!0)&&(n.updateHeader({title:"Moderation",iconName:"security"}),c(!0),G()||We().then($t))});const f=qe(()=>"/app/moderation");return e(d,{get when(){return i()},get children(){return[e(qt,{}),e(d,{get when(){return!f()},get children(){var u=It();return I(u,e(Ft,{get children(){return e(He,{name:"moderationPane"})}})),se(l=>Ye(u,"border-radius",h()?0:"8px")),u}})]}})}const Pe=B(C)`
  flex-shrink: 0;
  align-items: center;
  height: 50px;

  border-radius: 8px;
  backdrop-filter: blur(34px);
  background-color: rgba(0, 0, 0, 0.86);
  padding-left: 15px;
  padding-right: 10px;
  .suspendButton {
    margin-left: auto;
  }
`;function Et(){const{createPortal:t}=te(),n=c=>{ct(c),gt([])},i=()=>{t?.(c=>e(Me,{close:c,get users(){return J()},done:n}))};return e(Pe,{get children(){return[e(r,{get children(){return[b(()=>J().length)," User(s) Selected"]}}),e(w,{class:"suspendButton",onClick:i,label:"Suspend Selected",primary:!0,color:"var(--alert-color)"})]}})}function jt(){const{createPortal:t}=te(),n=()=>{ue([])},i=()=>{t?.(c=>e(Ae,{close:c,get servers(){return H()},done:n}))};return e(Pe,{get children(){return[e(r,{get children(){return[b(()=>H().length)," Server(s) Selected"]}}),e(w,{class:"suspendButton",onClick:i,label:"Delete Selected",primary:!0,color:"var(--alert-color)"})]}})}const Wt=B.div`
  position: sticky;
  right: 0px;
  bottom: 10px;
  left: 0px;
  margin: 10px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;function qt(){const n=V().account?.hasOnlyModBadge();return[e(Rt,{class:"moderation-pane-container",get children(){return[e(Qt,{}),e(Zt,{}),e(d,{when:!n,get children(){return[e(De,{}),e(Ht,{})]}}),e(Nt,{class:"user-columns",gap:5,get children(){return[e(zt,{}),e(Vt,{})]}}),e(Yt,{}),e(Gt,{}),e(er,{}),e(ut,{})]}}),e(d,{get when(){return H().length||J().length},get children(){return e(Wt,{get children(){return[e(d,{get when(){return H().length},get children(){return e(jt,{})}}),e(d,{get when(){return J().length},get children(){return e(Et,{})}})]}})}})]}const Ht=()=>{const{tickets:t}=V();return Ce(async()=>{t.updateModerationTicketNotification()}),(()=>{var n=oe();return I(n,e(d,{get when(){return t.hasModerationTicketNotification()},get children(){var i=oe();return I(i,()=>t.hasModerationTicketNotification()),se(()=>Z(i,R`
            position: absolute;
            top: 10px;
            left: 6px;
            background-color: var(--alert-color);
            border-radius: 50%;
            width: 17px;
            font-size: 0.8em;
            height: 17px;
            display: flex;
            align-items: center;
            justify-content: center;
          `)),i}}),null),I(n,e(dt,{icon:"sell",get description(){return e(d,{get when(){return t.hasModerationTicketNotification()},get children(){return e(r,{size:12,color:"var(--warn-color)",children:"There are ticket(s) waiting for moderator response."})}})},label:"Tickets",get children(){return e(at,{href:"./tickets",get children(){return e(w,{tabIndex:"-1",label:"View Tickets",iconName:"visibility"})}})}}),null),se(()=>Z(n,R`
        position: relative;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 4px;
      `)),n})()};function Vt(){const[t,{mutate:n}]=Ke(it);F(()=>{_t(t()?.length||void 0)});const[i,c]=a(!1),h=()=>t()?.slice(0,5);return ke()(u=>{const l=t();l&&n(l.filter(o=>J().find(p=>p.id!==o.id)))}),e(pe,{class:"pane users",get expanded(){return i()},get style(){return i()?void 0:{height:"initial"}},get children(){return[e(C,{gap:5,itemsCenter:!0,style:{"padding-left":"10px","padding-top":"10px"},get children(){return[e(w,{iconName:"add",iconSize:14,padding:4,onClick:()=>c(!i())}),e(r,{get children(){return["Online Users (",b(()=>t()?.length),")"]}})]}}),e(K,{class:"list",get children(){return e(O,{get each(){return b(()=>!i())()?h():t()},children:u=>e(Ie,{user:u})})}})]}})}function Yt(){const[n,i]=a([]),[c,h]=a(void 0),[f,u]=a(!1),[l,o]=a(""),[p,L]=a(!1),M=Le(),D=ze();M(g=>{i(n().map(T=>g.find(_=>_.id===T.id)?{...T,scheduledForDeletion:{scheduledAt:Date.now()}}:T))}),D(g=>{i(n().map(T=>T.id!==g?T:{...T,scheduledForDeletion:void 0}))}),F(re(c,async()=>{if(l()&&c())return S();$()}));const m=()=>{const g=n()[n().length-1];h(g.id)},v=()=>n().slice(0,5);let s=null;const x=g=>{o(g),s&&clearTimeout(s),s=window.setTimeout(()=>{if(h(void 0),i([]),!l().trim()){$();return}L(!0),S()},1e3)},S=()=>{u(!0),Qe(l(),30,c()).then(g=>{i([...n(),...g]),g.length>=30&&u(!1)}).catch(()=>u(!1))},$=()=>{u(!0),Xe(30,c()).then(g=>{i([...n(),...g]),g.length>=30&&u(!1)}).catch(()=>u(!1))};return e(ce,{class:"pane servers",get expanded(){return p()},get style(){return p()?void 0:{height:"initial"}},get children(){return[e(U,{placeholder:"Search",margin:[10,10,10,30],onText:x,get value(){return l()}}),e(C,{gap:5,itemsCenter:!0,style:{"padding-left":"10px"},get children(){return[e(w,{iconName:"add",iconSize:14,padding:4,onClick:()=>L(!p())}),e(r,{children:"Servers"})]}}),e(K,{class:"list",get children(){return[e(O,{get each(){return b(()=>!p())()?v():n()},children:g=>e(xe,{server:g})}),e(d,{get when(){return b(()=>!!p())()&&!f()},get children(){return e(w,{iconName:"refresh",label:"Load More",onClick:m})}})]}})]}})}function Gt(){const[t,n]=a([]),[i,c]=a(!1),h=Le(),f=ze();h(o=>{n(t().map(p=>o.find(M=>M.id===p.id)?{...p,scheduledForDeletion:{scheduledAt:Date.now()}}:p))}),f(o=>{n(t().map(p=>p.id!==o?p:{...p,scheduledForDeletion:void 0}))}),F(()=>{l()});const u=()=>t().slice(0,5),l=()=>{et().then(o=>{n([...o])})};return e(ce,{class:"pane servers",get expanded(){return i()},get style(){return i()?void 0:{height:"initial"}},get children(){return[e(C,{gap:5,itemsCenter:!0,style:{"padding-left":"10px","margin-top":"10px"},get children(){return[e(w,{iconName:"add",iconSize:14,padding:4,onClick:()=>c(!i())}),e(r,{children:"7 day Active Servers"})]}}),e(K,{class:"list",get children(){return e(O,{get each(){return b(()=>!i())()?u():t()},children:o=>e(xe,{server:o})})}})]}})}function Zt(){const[n,i]=a([]),[c,h]=a(void 0),[f,u]=a(!1),{createPortal:l}=te(),[o,p]=a(!1),L=V();F(re(c,async()=>{m()}));const M=()=>{const s=n()[n().length-1];h(s?.id)},D=()=>n().slice(0,5),m=()=>{u(!0),Je({limit:30,afterId:c()}).then(s=>{s.data.length>=30&&u(!1),i([...n(),...s.data])}).catch(()=>u(!1))},v=s=>{switch(s.actionType){case k.serverDelete:return"Delete Server";case k.postDelete:return"Delete Post";case k.userSuspend:return"Suspend"}};return e(pe,{class:"pane users",get expanded(){return o()},get style(){return{...o()?void 0:{height:"initial"}}},get children(){return[Mt(),e(C,{gap:5,itemsCenter:!0,style:{"padding-left":"10px","padding-top":"0px","flex-shrink":"0"},get children(){return[e(w,{iconName:"add",iconSize:14,padding:4,onClick:()=>p(!o())}),e(r,{children:"Suggestions"})]}}),e(K,{class:"list",get children(){return[e(O,{get each(){return b(()=>!o())()?D():n()},children:s=>e(C,{itemsCenter:!0,gap:8,get class(){return R`
                padding: 4px;
                padding-left: 18px;
              `},get children(){return[e(le,{get user(){return s.suggestBy},size:28}),(()=>{var x=Tt(),S=x.firstChild,$=S.firstChild;return I(x,e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${s.suggestBy.id}`},get children(){return[b(()=>s.suggestBy.username),":",b(()=>s.suggestBy.tag)," "]}})}}),S),I(x,e(r,{size:14,get children(){return["Suggested to ",(()=>{var g=ye();return I(g,()=>v(s)),g})()," "]}}),S),I(x,e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/servers/${s.server?.id}`},get children(){return[b(()=>s.server?.name)," "]}})}}),S),I(x,e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${s.user?.id}`},get children(){return[b(()=>s.user?.username)," "]}})}}),S),I(x,e(d,{get when(){return s.actionType===k.postDelete},get children(){return e(r,{size:14,get children(){return["Made By",e(A,{class:P,get href(){return`/app/moderation/users/${s.post.createdBy.id}`},get children(){return[" ",b(()=>s.post.createdBy.username)]}})]}})}}),S),I($,e(r,{size:12,children:"Reason: "}),null),I($,e(r,{size:12,opacity:.6,get children(){return[(()=>{var g=ye();return I(g,()=>s.reason),g})()," "]}}),null),se(()=>Z(x,R`
                  flex: 1;
                `)),x})(),e(C,{gap:4,get children(){return[e(d,{get when(){return L.account.hasModeratorPerm()},get children(){return[e(d,{get when(){return s.actionType===k.serverDelete},get children(){return e(w,{label:"Delete Server",textSize:12,alert:!0,onClick:()=>{l(x=>e(Ae,{close:x,get servers(){return[{id:s.server.id}]},done:()=>{ie(s.id).then(()=>{i(n().filter(S=>S.id!==s.id))})}}))},margin:0})}}),e(d,{get when(){return s.actionType===k.userSuspend},get children(){return e(w,{label:"Suspend User",textSize:12,alert:!0,onClick:()=>{l(x=>e(Me,{close:x,get users(){return[{id:s.user.id,tag:s.user.tag,username:s.user.username}]},done:()=>{ie(s.id).then(()=>{i(n().filter(S=>S.id!==s.id))})}}))},margin:0})}})]}}),e(d,{get when(){return b(()=>!!L.account.hasModeratorPerm())()&&s.actionType===k.postDelete},get children(){return e(w,{label:"Delete Post",textSize:12,alert:!0,onClick:()=>{l(x=>e(Te,{close:x,get postIds(){return[s.post.id]},done:()=>{ie(s.id).then(()=>{i(n().filter(S=>S.id!==s.id))})}}))},margin:0})}}),e(d,{get when(){return s.actionType===k.postDelete},get children(){return e(w,{iconName:"visibility",iconSize:18,get href(){return"?postId="+s.post.id},margin:0})}}),e(w,{iconName:"close",margin:0,iconSize:18,alert:!0,onClick:()=>{ie(s.id).then(()=>{i(n().filter(x=>x.id!==s.id))})}})]}})]}})}),e(d,{get when(){return b(()=>!!o())()&&!f()},get children(){return e(w,{iconName:"refresh",label:"Load More",onClick:M})}})]}})]}})}function xe(t){const n=ae(t.server.createdAt),i=t.server.createdBy,[c,h]=a(!1),f=Ge(()=>Ut(t.server.id)),u=()=>{if(f()){ue(H().filter(l=>l.id!==t.server.id));return}ue([...H(),t.server])};return(()=>{var l=oe();return l.$$mouseout=()=>h(!1),l.$$mouseover=()=>h(!0),Z(l,fe),I(l,e(X,{onChange:u,get checked(){return f()},get disabled(){return!!t.server.scheduledForDeletion},get class(){return R`
          place-self: start;
          margin-top: 6px;
        `}}),null),I(l,e(A,{get class(){return R`
          display: flex;
          gap: 6px;
          flex: 1;
        `},get href(){return`/app/moderation/servers/${t.server.id}`},get children(){return[e(le,{get animate(){return c()},class:me,get server(){return t.server},size:28}),e(ve,{class:"details",get children(){return[e(r,{get children(){return t.server.name}}),e(C,{gap:3,get children(){return[e(r,{size:12,opacity:.6,children:"Created:"}),e(r,{size:12,children:n})]}}),e(C,{gap:3,get children(){return[e(r,{size:12,opacity:.6,children:"Created By:"}),e(r,{size:12,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${i.id}`},get children(){return[b(()=>i.username),":",b(()=>i.tag)]}})}})]}}),e(d,{get when(){return t.server.messageCount},get children(){return e(C,{gap:3,get children(){return[e(r,{size:12,opacity:.6,children:"Messages:"}),e(r,{size:12,get children(){return t.server.messageCount?.toLocaleString()}}),e(r,{size:12,opacity:.6,children:"User Messages:"}),e(r,{size:12,get children(){return t.server.userMessageCount?.toLocaleString()}})]}})}}),e(C,{gap:2,wrap:!0,get children(){return[e(d,{get when(){return t.server.scheduledForDeletion},get children(){var o=At();return I(o,e(r,{size:12,children:"Scheduled Deletion"})),o}}),e(d,{get when(){return t.server.publicServer},get children(){var o=Pt();return I(o,e(we,{name:"public",size:13})),o}})]}})]}})]}}),null),l})()}const Jt=B(ee)`
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;function Y(t){return e(Jt,{get children(){return[e(r,{size:12,color:"rgba(255,255,255,0.6)",get children(){return t.title}}),e(r,{size:12,get children(){return t.description}})]}})}const Kt=B(C)`
  margin-left: 10px;
  margin-right: 10px;
`;function Qt(){return V(),e(Kt,{gap:5,wrap:!0,get children(){return[e(Y,{title:"Registered Users",get description(){return G()?.totalRegisteredUsers?.toLocaleString()}}),e(Y,{title:"Online Users",get description(){return Bt()?.toLocaleString()}}),e(Y,{title:"Messages",get description(){return G()?.totalCreatedMessages?.toLocaleString()}}),e(Y,{title:"Servers",get description(){return G()?.totalCreatedServers?.toLocaleString()}}),e(Y,{title:"Weekly Registered Users",get description(){return G()?.weeklyRegisteredUsers?.toLocaleString()}}),e(Y,{title:"Weekly Messages",get description(){return G()?.weeklyCreatedMessages?.toLocaleString()}})]}})}function De(t){const[i,c]=a([]),[h,f]=a(void 0),[u,l]=a(!1),[o,p]=a(!1);F(re(h,async()=>{D()}));const L=()=>{const m=i()[i().length-1];f(m.id)},M=()=>i().slice(0,5),D=()=>{l(!0),Ze({limit:30,afterId:h(),search:t.search}).then(m=>{c([...i(),...m]),m.length>=30&&l(!1)}).catch(()=>l(!1))};return e(ce,{class:"pane servers",get expanded(){return o()},get style(){return{...o()?void 0:{height:"initial"},...t.style}},get children(){return[e(C,{gap:5,itemsCenter:!0,style:{"padding-left":"10px","padding-top":"10px"},get children(){return[e(w,{iconName:"add",iconSize:14,padding:4,onClick:()=>p(!o())}),e(r,{children:"Audit Logs"})]}}),e(K,{class:"list",get children(){return[e(O,{get each(){return b(()=>!o())()?M():i()},children:m=>e(Xt,{auditLog:m})}),e(d,{get when(){return b(()=>!!o())()&&!u()},get children(){return e(w,{iconName:"refresh",label:"Load More",onClick:L})}})]}})]}})}function Xt(t){const[n,i]=a(!1),c=ae(t.auditLog.createdAt),h=t.auditLog.actionBy,f=t.auditLog.expireAt?ae(t.auditLog.expireAt):"Never",[u,l]=a(!1),o=()=>{switch(t.auditLog.actionType){case k.userSuspend:return!0;case k.userWarned:return!0;case k.serverDelete:return!0;case k.userShadowBanned:return!0;default:return!1}};return(()=>{var p=Dt();return p.addEventListener("mouseleave",()=>l(!1)),p.addEventListener("mouseenter",()=>l(!0)),Z(p,fe),I(p,e(le,{get animate(){return u()},class:me,user:h,size:28}),null),I(p,e(ve,{class:"details",get children(){return[e(C,{gap:3,itemsCenter:!0,style:{"margin-bottom":"2px"},get children(){return[e(d,{get when(){return t.auditLog.actionType===k.ipBan},get children(){return[e(r,{size:14,get children(){return[b(()=>t.auditLog.count||1)," IP(s) Banned for 7 days"]}}),e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(d,{get when(){return t.auditLog.actionType===k.userWarned},get children(){return[e(r,{size:14,children:"Warned "}),e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(d,{get when(){return t.auditLog.actionType===k.userShadowUnbanned},get children(){return[e(r,{size:14,children:"Undo Shadow Banned "}),e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(d,{get when(){return t.auditLog.actionType===k.userShadowBanned},get children(){return[e(r,{size:14,children:"Shadow Banned "}),e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(d,{get when(){return t.auditLog.actionType===k.userSuspend},get children(){return[e(r,{size:14,children:"Suspend "}),e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(d,{get when(){return t.auditLog.actionType===k.userSuspendUpdate},get children(){return[e(r,{size:14,children:"Updated Suspension for "}),e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(d,{get when(){return t.auditLog.actionType===k.postDelete},get children(){return[e(r,{size:14,children:"Post From "}),e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}}),e(r,{size:14,children:"Was Deleted "})]}}),e(d,{get when(){return t.auditLog.actionType===k.userUnsuspend},get children(){return[e(r,{size:14,children:"Unsuspend "}),e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(d,{get when(){return t.auditLog.actionType===k.userUpdate},get children(){return[e(r,{size:14,children:"Updated "}),e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(d,{get when(){return t.auditLog.actionType===k.serverDelete},get children(){return[e(r,{size:14,children:"Deleted "}),e(r,{size:14,get children(){return t.auditLog.serverName}})]}}),e(d,{get when(){return t.auditLog.actionType===k.serverUndoDelete},get children(){return[e(r,{size:14,children:"Undo Delete "}),e(r,{size:14,get children(){return t.auditLog.serverName}})]}}),e(d,{get when(){return t.auditLog.actionType===k.serverUpdate},get children(){return[e(r,{size:14,children:"Updated "}),e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/servers/${t.auditLog.serverId}`},get children(){return t.auditLog.serverName}})}})]}}),e(r,{size:14,children:"By "}),e(r,{size:14,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${h.id}`},get children(){return[b(()=>h.username),":",b(()=>h.tag)]}})}})]}}),e(C,{gap:3,get children(){return[e(r,{size:12,opacity:.6,get children(){return["At:"," "]}}),e(r,{size:12,children:c})]}}),e(d,{get when(){return n()},get children(){return[e(d,{get when(){return t.auditLog.reason},get children(){return e(C,{gap:3,get children(){return[e(r,{size:12,opacity:.6,get children(){return["Reason:"," "]}}),e(r,{size:12,style:{"white-space":"initial"},get children(){return t.auditLog.reason}})]}})}}),e(d,{get when(){return t.auditLog.actionType===k.userSuspend},get children(){return e(C,{gap:3,get children(){return[e(r,{size:12,opacity:.6,get children(){return["Expires"," "]}}),e(r,{size:12,children:f})]}})}})]}})]}}),null),I(p,e(d,{get when(){return o()},get children(){return e(w,{padding:4,margin:[0,6,0,0],style:{"margin-left":"auto","align-self":"start"},iconName:"arrow_drop_down",onClick:()=>i(!n())})}}),null),p})()}function er(){const[n,i]=a([]),[c,h]=a(void 0),[f,u]=a(!1),[l,o]=a("");let p;const[L,M]=be();Ce(()=>{if(L["search-post-id"]){o(L["search-post-id"]),M({"search-post-id":void 0},{replace:!0});const z=document.querySelector(".main-pane-container");setTimeout(()=>{z.scrollTo(0,z.scrollHeight)},100)}});const[D,m]=a(!1);F(re(c,async()=>{if(l()&&c()||l())return $();g()}));const v=()=>{const z=n()[n().length-1];h(z?.id)},s=()=>n().slice(0,5);let x=null;const S=z=>{o(z),x&&clearTimeout(x),x=window.setTimeout(()=>{if(h(void 0),i([]),!l().trim()){g();return}m(!0),$()},1e3)},$=()=>{u(!0),tt(l(),30,c()).then(z=>{i([...n(),...z.toReversed()]),z.length>=30&&u(!1)}).catch(()=>u(!1))},g=()=>{u(!0),rt(30,c()).then(z=>{i([...n(),...z.toReversed()]),z.length>=30&&u(!1)}).catch(()=>u(!1))},T=z=>{i(n().filter(y=>y.id!==z))},q=z=>{i(n().map(y=>y.id!==z?y:{...y,announcement:!0}))},_=z=>{i(n().map(y=>y.id!==z?y:{...y,announcement:!1}))};return e(ce,{class:"pane posts",ref(z){var y=p;typeof y=="function"?y(z):p=z},get expanded(){return D()},get style(){return D()?void 0:{height:"initial"}},get children(){return[e(U,{placeholder:"Search by post id / user id",margin:[10,10,10,30],onText:S,get value(){return l()}}),e(C,{gap:5,itemsCenter:!0,style:{"padding-left":"10px"},get children(){return[e(w,{iconName:"add",iconSize:14,padding:4,onClick:()=>m(!D())}),e(r,{children:"Posts"})]}}),e(K,{class:"list",get children(){return[e(O,{get each(){return b(()=>!D())()?s():n()},children:z=>e($e,{post:z,onDelete:T,onAnnouncementAdd:q,onAnnouncementRemove:_})}),e(d,{get when(){return b(()=>!!D())()&&!f()},get children(){return e(w,{iconName:"refresh",label:"Load More",onClick:v})}})]}})]}})}function $e(t){const n=V(),i=ae(t.post.createdAt),c=t.post.createdBy,[h,f]=a(!1),[u,l]=be(),{createPortal:o}=te(),p=m=>{m.stopPropagation(),o(v=>e(Te,{close:v,get postIds(){return[t.post.id]},done:()=>t.onDelete?.(t.post.id)}))},L=m=>{m.stopPropagation(),o(v=>e(yt,{close:v,get postId(){return t.post.id},done:()=>t.onAnnouncementAdd?.(t.post.id)}))},M=m=>{m.stopPropagation(),o(v=>e(bt,{close:v,get postId(){return t.post.id},done:()=>t.onAnnouncementRemove?.(t.post.id)}))},D=m=>{m.stopPropagation();const[v,s]=a(""),[x,S]=a(""),[$,g]=a(!1);o(T=>{const q=async()=>{if(!v())return de("Please select a reason");$()||(g(!0),await nt({actionType:k.postDelete,postId:t.post.id,reason:v()==="Other"?x():v()}).then(()=>{T()}).catch(_=>de(_.message||_.error)).finally(()=>g(!1)))};return e(Q.Root,{close:T,doNotCloseOnBackgroundClick:!0,get children(){return[e(Q.Header,{title:"Suggest"}),e(Q.Body,{get children(){return e(ee,{gap:4,get children(){return[e(ht,{items:[{id:"NSFW",label:"NSFW"},{id:"Racist",label:"Racist"},{id:"Hateful",label:"Hateful"},{id:"Other",label:"Other"}],get initialId(){return v()},onChange:_=>s(_.id)}),e(d,{get when(){return v()==="Other"},get children(){return e(U,{placeholder:"Reason",onText:S,get value(){return x()}})}})]}})}}),e(Q.Footer,{get children(){return e(Q.Button,{label:"Suggest",iconName:"check",onClick:q,primary:!0})}})]}})})};return(()=>{var m=oe();return m.$$click=v=>{v.target.closest("."+P)||l({postId:t.post.id})},m.$$mouseout=()=>f(!1),m.$$mouseover=()=>f(!0),Z(m,fe),I(m,e(le,{get animate(){return h()},class:me,user:c,size:28}),null),I(m,e(ve,{class:"details",get children(){return[e(d,{get when(){return t.post.attachments?.length},get children(){return e(we,{style:{"vertical-align":"-2px","margin-right":"4px"},size:14,name:"image",color:"rgba(255,255,255,0.6)"})}}),e(r,{size:14,get children(){return t.post.content}}),e(C,{gap:3,get children(){return[e(r,{size:12,opacity:.6,children:"Created:"}),e(r,{size:12,children:i})]}}),e(C,{gap:3,get children(){return[e(r,{size:12,opacity:.6,children:"Created By:"}),e(r,{size:12,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${c.id}`},get children(){return[b(()=>c.username),":",b(()=>c.tag)]}})}})]}}),e(d,{get when(){return t.post.commentTo},get children(){return e(C,{gap:3,get children(){return[e(r,{size:12,opacity:.6,children:"Replying To:"}),e(r,{size:12,get children(){return e(A,{class:P,get href(){return`/app/moderation/users/${t.post.commentTo?.createdBy.id}`},get children(){return[b(()=>t.post.commentTo?.createdBy.username),":",b(()=>t.post.commentTo?.createdBy.tag)]}})}})]}})}})]}}),null),I(m,e(ee,{style:{"margin-left":"auto"},gap:4,get children(){return[e(d,{get when(){return!n.account.hasOnlyModBadge()},get children(){return[e(d,{get when(){return t.post.announcement},get children(){return e(w,{onClick:M,iconName:"horizontal_rule",label:"Remove Announce",textSize:12,iconSize:16,margin:0,padding:4,color:"var(--alert-color)"})}}),e(d,{get when(){return!t.post.announcement},get children(){return e(w,{onClick:L,iconName:"add",label:"Announce",textSize:12,iconSize:16,margin:0,padding:4})}}),e(w,{onClick:p,iconName:"delete",label:"Delete",textSize:12,iconSize:16,color:"var(--alert-color)",margin:0,padding:4})]}}),e(w,{onClick:D,iconName:"delete",label:"Suggest Delete",textSize:12,iconSize:16,color:"var(--alert-color)",margin:0,padding:4})]}}),null),m})()}st(["mouseover","mouseout","click"]);const gr=Object.freeze(Object.defineProperty({__proto__:null,AuditLogPane:De,Post:$e,Server:xe,default:Ot},Symbol.toStringTag,{value:"Module"}));export{De as A,Ae as D,gr as M,xe as S,zt as U,Me as a};
//# sourceMappingURL=ModerationPane-DyCzxqVl.js.map
