const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UserPage-DSoY5vrC.js","assets/useStore-C81yKXnX.js","assets/_commonjsHelpers-CE1G-McA.js","assets/useStore-BUWMmi7x.css","assets/createUpdatedSignal-BgdwjYY3.js","assets/Banner-DWKTKMkk.js","assets/Avatar-CnjpHkJi.js","assets/Avatar-DLPSOBPV.css","assets/Breadcrumb-B2nrXbr4.js","assets/SettingsBlock-zYSlJJFm.js","assets/SettingsBlock-vQeKZdQS.css","assets/Input-CGVbQxvr.js","assets/Checkbox-cAafcjqo.js","assets/date-BKAW-sdF.js","assets/ConnectionErrorModal-BTEAVjbL.js","assets/logout-DfWc_cxe.js","assets/ConnectionErrorModal-hOiI5G0e.css","assets/WarnedModal-ERnRsqqf.js","assets/WarnedModal-BzmXmmZa.css","assets/Notice-D4YZaiTY.js","assets/Notice-BZ0MYVi3.css","assets/GlobalEvents-13pKKKZj.js","assets/TicketsPage-41PbWFeS.js","assets/CreateTicketModal-Db0YFZnA.js","assets/DropDown-VSE3I8gP.js","assets/useResizeObserver-DorGCpy9.js","assets/DropDown-BLKRodaf.css","assets/TicketItem-gX8uMRUG.js","assets/ServerPage-BRLzs-Hh.js","assets/useJoinServer-VYpKHgtr.js"])))=>i.map(i=>d[i]);
import{W as ge,b as l,g as ie,aO as Pe,M as E,c as e,F as S,ac as C,aB as J,C as F,a3 as De,S as u,T as r,u as N,E as O,G as $,cG as Ue,s as M,cH as Be,cI as $e,cJ as _e,cK as Re,w as Ne,O as X,cL as Ee,bz as Fe,H as P,m as v,cM as Oe,cN as je,V as Z,cO as We,d as He,Q as qe,p as ce,L as Ve,i as we,ak as Le,K as Ke,a as Ye,I as he,cP as Ge,aY as ke,af as re,o as Ce,cQ as Qe,cR as Je,cS as Xe,cT as Ze,cU as et,cV as tt,cW as A,l as fe,_ as me,aq as Se,cX as rt,a1 as nt}from"./useStore-C81yKXnX.js";import{A as se}from"./Avatar-CnjpHkJi.js";import{f as Q}from"./date-BKAW-sdF.js";import{C as G}from"./Checkbox-cAafcjqo.js";import{I as _}from"./Input-CGVbQxvr.js";import{C as it}from"./ConnectionErrorModal-BTEAVjbL.js";import{f as st,g as be,h as Ie,i as ze,j as at}from"./GlobalEvents-13pKKKZj.js";import{S as ot}from"./SettingsBlock-zYSlJJFm.js";var lt=O("<div style=margin-top:6px;margin-bottom:2px>"),ct=O("<div style=margin-top:2px;margin-bottom:6px>");const dt=M("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`,ut=N`
  width: 120px;
`;function gt(t){const i=ge(),[n,c]=l(""),[d,h]=l("7"),[o,s]=l(""),[a,g]=l(null),[w,m]=l(!1),{createPortal:x}=ie(),[b,L]=l(!1),[y,U]=l(!1),[z,T]=Pe([!1,!1,!1,!1,!1,!1]),f=[{label:"Bypassing Suspensions (Alt)",checked:!1},{label:"Being Racist",checked:!1},{label:"Threating Harm or Violence",checked:!1},{label:"Being Hateful",checked:!1},{label:"Sharing NSFW Content",checked:!1},{label:"Other",checked:!1}];E(()=>{let p=Math.round(parseInt(d()));p<0&&(p=0),h(p.toString())});const I=()=>{const p=f.filter((W,H)=>H===f.length-1?!1:z[H]).map(W=>W.label);return z[f.length-1]&&n()?.trim()&&p.push(n()),new Intl.ListFormat("en").format(p)},D=()=>{if(w())return;m(!0),g(null);const p=t.users.map(H=>H.id),j=parseInt(d()),W={expireAt:j?ye(j):null,suspendedAt:Date.now(),reason:I()||void 0,suspendBy:i.account.user()};Ue({confirmPassword:o(),userIds:p,days:j,reason:I()||void 0,ipBan:b(),deleteRecentMessages:y()}).then(()=>{t.done(W),t.close()}).catch(H=>g(H)).finally(()=>m(!1))},q=()=>{const p=parseInt(d()),j=p?ye(p):void 0,W=I()||void 0;x(H=>e(it,{close:H,get suspensionPreview(){return{expire:j,reason:W,by:{username:i.account.user().username}}}}))},k=e(S,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return[e(C,{onClick:q,margin:0,label:"Preview"}),e(C,{onClick:D,margin:0,get label(){return w()?"Suspending...":"Suspend"},color:"var(--alert-color)",primary:!0})]}});return e(J,{get close(){return t.close},get title(){return`Suspend ${t.users.length} User(s)`},actionButtons:k,ignoreBackgroundClick:!0,get children(){return e(dt,{get children(){return[e(F,{each:f,children:(p,j)=>e(G,De(p,{onChange:W=>T(j(),W),labelSize:14}))}),e(u,{get when(){return z[5]},get children(){return e(_,{label:"Reason",get value(){return n()},onText:c})}}),e(_,{class:ut,label:"Suspend for",type:"number",get value(){return d()},onText:h,suffix:"days"}),e(r,{size:12,opacity:.7,get class(){return N`
            margin-top: -4px;
          `},children:"0 days will suspend them indefinitely"}),(()=>{var p=lt();return $(p,e(G,{labelSize:14,get checked(){return b()},onChange:L,label:"IP ban for a week"})),p})(),(()=>{var p=ct();return $(p,e(G,{labelSize:14,get checked(){return y()},onChange:U,label:"Delete past 7 hours of messages (raids only)"})),p})(),e(_,{label:"Confirm Password",type:"password",get value(){return o()},onText:s}),e(u,{get when(){return a()},get children(){return e(r,{color:"var(--alert-color)",size:12,get children(){return a()?.message}})}})]}})}})}function ye(t){const n=Date.now();return new Date(n+864e5*t).getTime()}const ht=M("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function ft(t){const[i,n]=l(""),[c,d]=l(null),[h,o]=l(!1),s=()=>{h()||(o(!0),d(null),Be(i(),t.postIds).then(()=>{t.done(),t.close()}).catch(g=>d(g)).finally(()=>o(!1)))},a=e(S,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(C,{onClick:s,margin:0,get label(){return h()?"Deleting...":"Delete"},color:"var(--alert-color)",primary:!0})}});return e(J,{get close(){return t.close},get title(){return`Delete ${t.postIds.length} post(s)`},actionButtons:a,ignoreBackgroundClick:!0,color:"var(--alert-color)",get children(){return e(ht,{get children(){return[e(_,{label:"Confirm Password",type:"password",get value(){return i()},onText:n}),e(u,{get when(){return c()},get children(){return e(r,{color:"var(--alert-color)",size:12,get children(){return c()?.message}})}})]}})}})}const mt=M("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function pt(t){const[i,n]=l(""),[c,d]=l(null),[h,o]=l(!1),s=()=>{h()||(o(!0),d(null),$e(i(),t.postId).then(()=>{t.done(),t.close()}).catch(g=>d(g)).finally(()=>o(!1)))},a=e(S,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(C,{onClick:s,margin:0,get label(){return h()?"Announcing...":"Announce"},color:"var(--primary-color)",primary:!0})}});return e(J,{get close(){return t.close},title:"Announce Post",actionButtons:a,ignoreBackgroundClick:!0,get children(){return e(mt,{get children(){return[e(r,{size:14,children:"Announcing a post will show on everyone's Dashboard."}),e(_,{label:"Confirm Password",type:"password",get value(){return i()},onText:n}),e(u,{get when(){return c()},get children(){return e(r,{color:"var(--alert-color)",size:12,get children(){return c()?.message}})}})]}})}})}const vt=M("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function xt(t){const[i,n]=l(""),[c,d]=l(null),[h,o]=l(!1),s=()=>{h()||(o(!0),d(null),_e(i(),t.postId).then(()=>{t.done(),t.close()}).catch(g=>d(g)).finally(()=>o(!1)))},a=e(S,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(C,{onClick:s,margin:0,get label(){return h()?"Deleting...":"Delete"},color:"var(--primary-color)",primary:!0})}});return e(J,{get close(){return t.close},title:"Announce Post",actionButtons:a,ignoreBackgroundClick:!0,get children(){return e(vt,{get children(){return[e(r,{size:14,children:"Delete announcement for this post."}),e(_,{label:"Confirm Password",type:"password",get value(){return i()},onText:n}),e(u,{get when(){return c()},get children(){return e(r,{color:"var(--alert-color)",size:12,get children(){return c()?.message}})}})]}})}})}const St=M("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function yt(t){const[i,n]=l(""),[c,d]=l(""),[h,o]=l({"NSFW Server":!1,Other:!1}),[s,a]=l(null),[g,w]=l(!1),m=()=>{const L=[];return Object.keys(h()).forEach(y=>{if(h()[y]){if(y==="Other"){L.push(c());return}h()[y]&&L.push(y)}}),L.join(", ")},x=async()=>{if(!m().trim()){a({message:"Please provide a reason."});return}if(g())return;w(!0),a(null);const L=t.servers.map(z=>z.id);let y=!1,U=!1;for(let z=0;z<L.length;z++){const T=L[z];if(await Re(T,i(),m()).catch(f=>{y=!0,f.path==="password"&&(U=!0,a(f),w(!1))}),U)break}U||(y&&Ne("Some servers could not be deleted due to an error. Please try again."),st(t.servers),t.done(),t.close())},b=e(S,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(C,{onClick:x,margin:0,get label(){return g()?"Deleting...":"Delete"},color:"var(--alert-color)",primary:!0})}});return e(J,{get close(){return t.close},get title(){return`Delete ${t.servers.length} Server(s)`},actionButtons:b,ignoreBackgroundClick:!0,get children(){return e(St,{get children(){return[e(F,{get each(){return Object.keys(h())},children:L=>e(G,{label:L,get checked(){return h()[L]||!1},onChange:()=>{o(y=>({...y,[L]:!y[L]}))}})}),e(u,{get when(){return h().Other},get children(){return e(_,{label:"Reason",get value(){return c()},onText:d})}}),e(_,{label:"Confirm Password",type:"password",get value(){return i()},onText:n}),e(u,{get when(){return s()},get children(){return e(r,{color:"var(--alert-color)",size:12,get children(){return s()?.message}})}})]}})}})}var wt=O("<div style=height:10px>");const Lt=M("div")`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  overflow: auto;
`;function kt(t){const[n,c]=l([]),[d,h]=l(void 0),[o,s]=l(!1),[a,g]=l(t.search||""),[w,m]=l(!1);be()(f=>{c(n().map(I=>R().find(q=>q.id===I.id)?{...I,suspension:f}:I))}),E(X(d,async()=>{if(a())return z();T()}));const b=()=>{const f=n()[n().length-1];h(f?.id)},L=()=>n().slice(0,5);let y=null;const U=f=>{g(f),y&&clearTimeout(y),y=window.setTimeout(()=>{if(h(void 0),c([]),!a().trim()){T();return}m(!0),z()},1e3)},z=()=>{s(!0),Ee(a(),30,d()).then(f=>{c([...n(),...f]),f.length>=30&&s(!1)}).catch(()=>s(!1))},T=()=>{s(!0),Fe(30,d()).then(f=>{c([...n(),...f]),f.length>=30&&s(!1)}).catch(()=>s(!1))};return e(ae,{class:"pane users",get expanded(){return w()},get style(){return{...w()?void 0:{height:"initial"},...t.noMargin?{margin:0}:{}}},get children(){return[e(u,{get when(){return!t.hideSearchBar},get children(){return e(_,{placeholder:"Search",margin:[10,10,10,30],onText:U,get value(){return a()}})}}),e(u,{get when(){return t.hideSearchBar},get children(){return wt()}}),e(S,{gap:5,itemsCenter:!0,style:{"padding-left":"10px"},get children(){return[e(C,{iconName:"add",iconSize:14,padding:4,onClick:()=>m(!w())}),e(P,{href:"/app/moderation/users",get children(){return e(r,{get children(){return t.title||"Registered Users"}})}})]}}),e(Lt,{class:"list",get children(){return[e(F,{get each(){return v(()=>!w())()?L():n()},children:f=>e(ve,{user:f})}),e(u,{get when(){return v(()=>!!w())()&&!o()},get children(){return e(C,{iconName:"refresh",label:"Load More",onClick:b})}})]}})]}})}var Ct=O("<div style=height:10px>");const bt=M("div")`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  overflow: auto;
`;function It(t){const[n,c]=l([]),[d,h]=l([]),[o,s]=l([]),[a,g]=l(void 0),[w,m]=l(!1),[x,b]=l(t.search||""),[L,y]=l(t.alwaysExpanded??!1);E(X(a,async()=>{I()}));const U=()=>{const D=n()[n().length-1];g(D?.id)},z=()=>n().slice(0,5);let T=null;const f=D=>{b(D),T&&clearTimeout(T),T=window.setTimeout(()=>{g(void 0),c([]),I(),x().trim()&&y(!0)},1e3)},I=()=>{m(!0),(t.serverId?Oe({serverId:t.serverId,limit:30,afterId:a()}):je({limit:30,afterId:a(),...x().trim?{query:x().trim()}:{}})).then(D=>{c([...n(),...D.auditLogs]),h([...new Set([...d(),...D.users])]),s([...new Set([...o(),...D.servers])]),D.auditLogs.length>=30&&m(!1)}).catch(()=>m(!1))};return e(ae,{class:"pane users",get expanded(){return L()},get style(){return{...L()?void 0:{height:"initial"},...t.noMargin?{margin:0}:{},...t.alwaysExpanded?{height:"initial",resize:"none"}:void 0}},get children(){return[e(u,{get when(){return!t.hideSearchBar},get children(){return e(_,{placeholder:"Search",margin:[10,10,10,30],onText:f,get value(){return x()}})}}),e(u,{get when(){return t.hideSearchBar},get children(){return Ct()}}),e(S,{gap:5,itemsCenter:!0,get style(){return{"padding-left":"10px","padding-top":t.alwaysExpanded?"4px":"0px","flex-shrink":"0"}},get children(){return[e(u,{get when(){return!t.alwaysExpanded},get children(){return e(C,{iconName:"add",iconSize:14,padding:4,onClick:()=>y(!L())})}}),e(r,{get children(){return t.title||"User Audit Logs"}})]}}),e(bt,{class:"list",get children(){return[e(F,{get each(){return v(()=>!L())()?z():n()},children:D=>e(Mt,{get users(){return d()},get servers(){return o()},item:D})}),e(u,{get when(){return v(()=>!!L())()&&!w()},get children(){return e(C,{iconName:"refresh",label:"Load More",onClick:U})}})]}})]}})}const zt=M(Z)`
  border-top: solid 1px rgba(0, 0, 0, 0.4);
  padding: 6px;
`,Mt=t=>{const i=()=>{const o=t.item.actionById;if(o)return t.users.find(s=>s.id===o)},n=()=>{const o=t.item.serverId;if(o)return t.servers.find(s=>s.id===o)},c=()=>t.item.data?.serverName||n()?.name,d=()=>{const o=t.item.data?.kickedUserId,s=t.item.data?.unbannedUserId,a=t.item.data?.bannedUserId;return!o&&!a&&!s?void 0:{user:t.users.find(m=>m.id===(o||a||s)),action:o?"Kicked":s?"Unbanned":"Banned"}},h=()=>Q(t.item.createdAt);return e(zt,{get children(){return[e(r,{size:14,get children(){return t.item.actionType}}),e(r,{size:14,get children(){return[e(r,{size:14,opacity:.6,children:"By:"})," ",v(()=>i()?.username)]}}),e(u,{get when(){return d()},get children(){return e(r,{size:14,get children(){return[e(r,{size:14,opacity:.6,get children(){return[v(()=>d()?.action),":"]}})," ",v(()=>d()?.user?.username)]}})}}),e(u,{get when(){return c()!==void 0},get children(){return e(r,{size:14,get children(){return[e(r,{size:14,opacity:.6,children:"Server:"})," ",v(()=>c())]}})}}),e(r,{size:14,opacity:.6,get children(){return["At ",v(()=>h())]}})]}})};var Tt=O("<div style=position:absolute;inset:0;background:var(--pane-color);overflow:auto;justify-content:center;display:flex;padding-top:40px;z-index:1111>"),de=O("<div>"),At=O('<div style="background:var(--alert-color);border-radius:4px;padding:2px 8px;margin-top:4px;display:inline-block">'),Pt=O('<div style="background:var(--primary-color);border-radius:4px;padding:2px 8px;margin-top:4px;display:inline-block">'),Dt=O("<div style=cursor:initial;overflow:hidden>");fe(()=>me(()=>import("./UserPage-DSoY5vrC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])));fe(()=>me(()=>import("./TicketsPage-41PbWFeS.js"),__vite__mapDeps([22,1,2,3,8,9,10,12,23,24,25,26,19,20,11,27,6,7,13])));fe(()=>me(()=>import("./ServerPage-BRLzs-Hh.js"),__vite__mapDeps([28,1,2,3,4,9,10,11,12,8,5,6,7,13,21,29,14,15,16])));const[Y,Ut]=l(null),[R,ne]=l([]),[V,ue]=l([]),[Bt,$t]=l(),_t=t=>V().find(i=>i.id===t),Rt=t=>R().find(i=>i.id===t),Nt=M("div")`
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
`,Et=M(Z)`
  overflow: auto;
  flex-shrink: 0;
`,ee=M("div")`
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
`,ae=M(ee)``,te=M("div")`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  overflow: auto;
`,oe=N`
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
`,pe=N`
  place-self: start;
  margin-top: 3px;
`,B=N`
  &:hover {
    text-decoration: underline;
  }
`,le=M("div")`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 6px;
`,Ft=M(Z)`
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
  margin-top: 10px;
`;function Ot(){const{account:t,header:i}=ge(),[n,c]=l(!1),{isMobileWidth:d}=Ve();E(()=>{t.hasModeratorPerm(!0)&&(i.updateHeader({title:"Moderation",iconName:"security"}),c(!0),Y()||We().then(Ut))});const h=He(()=>"/app/moderation");return e(u,{get when(){return n()},get children(){return[e(qt,{}),e(u,{get when(){return!h()},get children(){var o=Tt();return $(o,e(Ft,{get children(){return e(qe,{name:"moderationPane"})}})),ce(s=>{var a=d()?0:"8px 8px 8px 0",g=d()?0:"8px";return a!==s.e&&Se(o,"margin",s.e=a),g!==s.t&&Se(o,"border-radius",s.t=g),s},{e:void 0,t:void 0}),o}})]}})}const Me=M(S)`
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
`;function jt(){const{createPortal:t}=ie(),i=c=>{at(c),ne([])},n=()=>{t?.(c=>e(gt,{close:c,get users(){return R()},done:i}))};return e(Me,{get children(){return[e(r,{get children(){return[v(()=>R().length)," User(s) Selected"]}}),e(C,{class:"suspendButton",onClick:n,label:"Suspend Selected",primary:!0,color:"var(--alert-color)"})]}})}function Wt(){const{createPortal:t}=ie(),i=()=>{ue([])},n=()=>{t?.(c=>e(yt,{close:c,get servers(){return V()},done:i}))};return e(Me,{get children(){return[e(r,{get children(){return[v(()=>V().length)," Server(s) Selected"]}}),e(C,{class:"suspendButton",onClick:n,label:"Delete Selected",primary:!0,color:"var(--alert-color)"})]}})}const Ht=M.div`
  position: sticky;
  right: 0px;
  bottom: 10px;
  left: 0px;
  margin: 10px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;function qt(){return[e(Nt,{class:"moderation-pane-container",get children(){return[e(Xt,{}),e(Te,{}),e(Vt,{}),e(Et,{class:"user-columns",gap:5,get children(){return[e(kt,{}),e(Kt,{})]}}),e(Yt,{}),e(Gt,{}),e(er,{}),e(It,{})]}}),e(u,{get when(){return V().length||R().length},get children(){return e(Ht,{get children(){return[e(u,{get when(){return V().length},get children(){return e(Wt,{})}}),e(u,{get when(){return R().length},get children(){return e(jt,{})}})]}})}})]}const Vt=()=>{const{tickets:t}=ge();return Ce(async()=>{t.updateModerationTicketNotification()}),(()=>{var i=de();return $(i,e(u,{get when(){return t.hasModerationTicketNotification()},get children(){var n=de();return $(n,e(he,{name:"error",color:"var(--alert-color)",size:18})),ce(()=>re(n,N`
            position: absolute;
            top: 10px;
            left: 6px;
          `)),n}}),null),$(i,e(ot,{icon:"sell",get description(){return e(u,{get when(){return t.hasModerationTicketNotification()},get children(){return e(r,{size:12,color:"var(--warn-color)",children:"There are ticket(s) waiting for moderator response."})}})},label:"Tickets",get children(){return e(Le,{href:"./tickets",get children(){return e(C,{tabIndex:"-1",label:"View Tickets",iconName:"visibility"})}})}}),null),ce(()=>re(i,N`
        position: relative;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 4px;
      `)),i})()};function Kt(){const[t,{mutate:i}]=Qe(rt);E(()=>{$t(t()?.length||void 0)});const[n,c]=l(!1),d=()=>t()?.slice(0,5);return be()(o=>{const s=t();s&&i(s.filter(a=>R().find(g=>g.id!==a.id)))}),e(ae,{class:"pane users",get expanded(){return n()},get style(){return n()?void 0:{height:"initial"}},get children(){return[e(S,{gap:5,itemsCenter:!0,style:{"padding-left":"10px","padding-top":"10px"},get children(){return[e(C,{iconName:"add",iconSize:14,padding:4,onClick:()=>c(!n())}),e(r,{get children(){return["Online Users (",v(()=>t()?.length),")"]}})]}}),e(te,{class:"list",get children(){return e(F,{get each(){return v(()=>!n())()?d():t()},children:o=>e(ve,{user:o})})}})]}})}function Yt(){const[i,n]=l([]),[c,d]=l(void 0),[h,o]=l(!1),[s,a]=l(""),[g,w]=l(!1),m=Ie(),x=ze();m(f=>{n(i().map(I=>f.find(q=>q.id===I.id)?{...I,scheduledForDeletion:{scheduledAt:Date.now()}}:I))}),x(f=>{n(i().map(I=>I.id!==f?I:{...I,scheduledForDeletion:void 0}))}),E(X(c,async()=>{if(s()&&c())return z();T()}));const b=()=>{const f=i()[i().length-1];d(f.id)},L=()=>i().slice(0,5);let y=null;const U=f=>{a(f),y&&clearTimeout(y),y=window.setTimeout(()=>{if(d(void 0),n([]),!s().trim()){T();return}w(!0),z()},1e3)},z=()=>{o(!0),Je(s(),30,c()).then(f=>{n([...i(),...f]),f.length>=30&&o(!1)}).catch(()=>o(!1))},T=()=>{o(!0),Xe(30,c()).then(f=>{n([...i(),...f]),f.length>=30&&o(!1)}).catch(()=>o(!1))};return e(ee,{class:"pane servers",get expanded(){return g()},get style(){return g()?void 0:{height:"initial"}},get children(){return[e(_,{placeholder:"Search",margin:[10,10,10,30],onText:U,get value(){return s()}}),e(S,{gap:5,itemsCenter:!0,style:{"padding-left":"10px"},get children(){return[e(C,{iconName:"add",iconSize:14,padding:4,onClick:()=>w(!g())}),e(r,{children:"Servers"})]}}),e(te,{class:"list",get children(){return[e(F,{get each(){return v(()=>!g())()?L():i()},children:f=>e(xe,{server:f})}),e(u,{get when(){return v(()=>!!g())()&&!h()},get children(){return e(C,{iconName:"refresh",label:"Load More",onClick:b})}})]}})]}})}function Gt(){const[t,i]=l([]),[n,c]=l(!1),d=Ie(),h=ze();d(a=>{i(t().map(g=>a.find(m=>m.id===g.id)?{...g,scheduledForDeletion:{scheduledAt:Date.now()}}:g))}),h(a=>{i(t().map(g=>g.id!==a?g:{...g,scheduledForDeletion:void 0}))}),E(()=>{s()});const o=()=>t().slice(0,5),s=()=>{Ze().then(a=>{i([...a])})};return e(ee,{class:"pane servers",get expanded(){return n()},get style(){return n()?void 0:{height:"initial"}},get children(){return[e(S,{gap:5,itemsCenter:!0,style:{"padding-left":"10px","margin-top":"10px"},get children(){return[e(C,{iconName:"add",iconSize:14,padding:4,onClick:()=>c(!n())}),e(r,{children:"7 day Active Servers"})]}}),e(te,{class:"list",get children(){return e(F,{get each(){return v(()=>!n())()?o():t()},children:a=>e(xe,{server:a})})}})]}})}function ve(t){const i=Q(t.user.joinedAt),[n,c]=l(!1),d=we(()=>Rt(t.user.id)),h=()=>{if(d()){ne(R().filter(s=>s.id!==t.user.id));return}ne([...R(),t.user])};return e(P,{onMouseOver:()=>c(!0),onMouseOut:()=>c(!1),get href(){return`/app/moderation/users/${t.user.id}`},onclick:s=>{s.target.closest(".checkbox")&&s.preventDefault()},get class(){return Ye(oe,t.class)},get children(){return[e(G,{get checked(){return d()},onChange:h}),e(Le,{get href(){return Ke.PROFILE(t.user.id)},get children(){return e(se,{get animate(){return n()},get user(){return t.user},size:28,get class(){return N`
            margin-top: 2px;
          `}})}}),e(le,{class:"details",get children(){return[e(S,{get children(){return[e(r,{size:14,get children(){return t.user.username}}),e(r,{size:14,opacity:.6,get children(){return[":",v(()=>t.user.tag)]}})]}}),e(S,{gap:3,itemsCenter:!0,get children(){return[e(r,{size:12,opacity:.6,children:"Registered:"}),e(r,{size:12,children:i}),e(u,{get when(){return t.user.suspension},get children(){return e(r,{size:12,style:{background:"var(--alert-color)","border-radius":"4px",padding:"3px"},children:"Banned"})}}),e(u,{get when(){return t.user.shadowBan},get children(){return e(r,{size:12,style:{background:"var(--warn-color)","border-radius":"4px",padding:"3px"},children:"Shadow Banned"})}}),e(u,{get when(){return t.user.bot},get children(){return e(r,{size:12,style:{background:"var(--primary-color)","border-radius":"4px",padding:"3px"},children:"Bot"})}})]}})]}})]}})}function xe(t){const i=Q(t.server.createdAt),n=t.server.createdBy,[c,d]=l(!1),h=a=>{a.target instanceof Element&&a.target.closest(".checkbox")&&(a.preventDefault(),a.stopPropagation())},o=we(()=>_t(t.server.id)),s=()=>{if(o()){ue(V().filter(a=>a.id!==t.server.id));return}ue([...V(),t.server])};return e(P,{onClick:h,onMouseOver:()=>d(!0),onMouseOut:()=>d(!1),get href(){return`/app/moderation/servers/${t.server.id}`},class:oe,get children(){return[e(G,{onChange:s,get checked(){return o()},get disabled(){return!!t.server.scheduledForDeletion},get class(){return N`
          place-self: start;
          margin-top: 6px;
        `}}),e(se,{get animate(){return c()},class:pe,get server(){return t.server},size:28}),e(le,{class:"details",get children(){return[e(r,{get children(){return t.server.name}}),e(S,{gap:3,get children(){return[e(r,{size:12,opacity:.6,children:"Created:"}),e(r,{size:12,children:i})]}}),e(S,{gap:3,get children(){return[e(r,{size:12,opacity:.6,children:"Created By:"}),e(r,{size:12,get children(){return e(P,{class:B,get href(){return`/app/moderation/users/${n.id}`},get children(){return[v(()=>n.username),":",v(()=>n.tag)]}})}})]}}),e(u,{get when(){return t.server.messageCount},get children(){return e(S,{gap:3,get children(){return[e(r,{size:12,opacity:.6,children:"Messages:"}),e(r,{size:12,get children(){return t.server.messageCount?.toLocaleString()}}),e(r,{size:12,opacity:.6,children:"User Messages:"}),e(r,{size:12,get children(){return t.server.userMessageCount?.toLocaleString()}})]}})}}),e(S,{gap:2,wrap:!0,get children(){return[e(u,{get when(){return t.server.scheduledForDeletion},get children(){var a=At();return $(a,e(r,{size:12,children:"Scheduled Deletion"})),a}}),e(u,{get when(){return t.server.publicServer},get children(){var a=Pt();return $(a,e(he,{name:"public",size:13})),a}})]}})]}})]}})}const Qt=M(Z)`
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;function K(t){return e(Qt,{get children(){return[e(r,{size:12,color:"rgba(255,255,255,0.6)",get children(){return t.title}}),e(r,{size:12,get children(){return t.description}})]}})}const Jt=M(S)`
  margin-left: 10px;
  margin-right: 10px;
`;function Xt(){return e(Jt,{gap:5,wrap:!0,get children(){return[e(K,{title:"Registered Users",get description(){return Y()?.totalRegisteredUsers?.toLocaleString()}}),e(K,{title:"Online Users",get description(){return Bt()?.toLocaleString()}}),e(K,{title:"Messages",get description(){return Y()?.totalCreatedMessages?.toLocaleString()}}),e(K,{title:"Servers",get description(){return Y()?.totalCreatedServers?.toLocaleString()}}),e(K,{title:"Weekly Registered Users",get description(){return Y()?.weeklyRegisteredUsers?.toLocaleString()}}),e(K,{title:"Weekly Messages",get description(){return Y()?.weeklyCreatedMessages?.toLocaleString()}})]}})}function Te(t){const[n,c]=l([]),[d,h]=l(void 0),[o,s]=l(!1),[a,g]=l(!1);E(X(d,async()=>{x()}));const w=()=>{const b=n()[n().length-1];h(b.id)},m=()=>n().slice(0,5),x=()=>{s(!0),Ge({limit:30,afterId:d(),search:t.search}).then(b=>{c([...n(),...b]),b.length>=30&&s(!1)}).catch(()=>s(!1))};return e(ee,{class:"pane servers",get expanded(){return a()},get style(){return{...a()?void 0:{height:"initial"},...t.style}},get children(){return[e(S,{gap:5,itemsCenter:!0,style:{"padding-left":"10px","padding-top":"10px"},get children(){return[e(C,{iconName:"add",iconSize:14,padding:4,onClick:()=>g(!a())}),e(r,{children:"Audit Logs"})]}}),e(te,{class:"list",get children(){return[e(F,{get each(){return v(()=>!a())()?m():n()},children:b=>e(Zt,{auditLog:b})}),e(u,{get when(){return v(()=>!!a())()&&!o()},get children(){return e(C,{iconName:"refresh",label:"Load More",onClick:w})}})]}})]}})}function Zt(t){const[i,n]=l(!1),c=Q(t.auditLog.createdAt),d=t.auditLog.actionBy,h=t.auditLog.expireAt?Q(t.auditLog.expireAt):"Never",[o,s]=l(!1),a=()=>{switch(t.auditLog.actionType){case A.userSuspend:return!0;case A.userWarned:return!0;case A.serverDelete:return!0;case A.userShadowBanned:return!0;default:return!1}};return(()=>{var g=Dt();return g.addEventListener("mouseleave",()=>s(!1)),g.addEventListener("mouseenter",()=>s(!0)),re(g,oe),$(g,e(se,{get animate(){return o()},class:pe,user:d,size:28}),null),$(g,e(le,{class:"details",get children(){return[e(S,{gap:3,itemsCenter:!0,style:{"margin-bottom":"2px"},get children(){return[e(u,{get when(){return t.auditLog.actionType===A.ipBan},get children(){return[e(r,{size:14,get children(){return[v(()=>t.auditLog.count||1)," IP(s) Banned for 7 days"]}}),e(r,{size:14,get children(){return e(P,{class:B,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(u,{get when(){return t.auditLog.actionType===A.userWarned},get children(){return[e(r,{size:14,children:"Warned "}),e(r,{size:14,get children(){return e(P,{class:B,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(u,{get when(){return t.auditLog.actionType===A.userShadowUnbanned},get children(){return[e(r,{size:14,children:"Undo Shadow Banned "}),e(r,{size:14,get children(){return e(P,{class:B,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(u,{get when(){return t.auditLog.actionType===A.userShadowBanned},get children(){return[e(r,{size:14,children:"Shadow Banned "}),e(r,{size:14,get children(){return e(P,{class:B,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(u,{get when(){return t.auditLog.actionType===A.userSuspend},get children(){return[e(r,{size:14,children:"Suspend "}),e(r,{size:14,get children(){return e(P,{class:B,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(u,{get when(){return t.auditLog.actionType===A.userSuspendUpdate},get children(){return[e(r,{size:14,children:"Updated Suspension for "}),e(r,{size:14,get children(){return e(P,{class:B,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(u,{get when(){return t.auditLog.actionType===A.postDelete},get children(){return[e(r,{size:14,children:"Post From "}),e(r,{size:14,get children(){return e(P,{class:B,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}}),e(r,{size:14,children:"Was Deleted "})]}}),e(u,{get when(){return t.auditLog.actionType===A.userUnsuspend},get children(){return[e(r,{size:14,children:"Unsuspend "}),e(r,{size:14,get children(){return e(P,{class:B,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(u,{get when(){return t.auditLog.actionType===A.userUpdate},get children(){return[e(r,{size:14,children:"Updated "}),e(r,{size:14,get children(){return e(P,{class:B,get href(){return`/app/moderation/users/${t.auditLog.userId}`},get children(){return t.auditLog.username}})}})]}}),e(u,{get when(){return t.auditLog.actionType===A.serverDelete},get children(){return[e(r,{size:14,children:"Deleted "}),e(r,{size:14,get children(){return t.auditLog.serverName}})]}}),e(u,{get when(){return t.auditLog.actionType===A.serverUndoDelete},get children(){return[e(r,{size:14,children:"Undo Delete "}),e(r,{size:14,get children(){return t.auditLog.serverName}})]}}),e(u,{get when(){return t.auditLog.actionType===A.serverUpdate},get children(){return[e(r,{size:14,children:"Updated "}),e(r,{size:14,get children(){return e(P,{class:B,get href(){return`/app/moderation/servers/${t.auditLog.serverId}`},get children(){return t.auditLog.serverName}})}})]}}),e(r,{size:14,children:"By "}),e(r,{size:14,get children(){return e(P,{class:B,get href(){return`/app/moderation/users/${d.id}`},get children(){return[v(()=>d.username),":",v(()=>d.tag)]}})}})]}}),e(S,{gap:3,get children(){return[e(r,{size:12,opacity:.6,get children(){return["At:"," "]}}),e(r,{size:12,children:c})]}}),e(u,{get when(){return i()},get children(){return[e(u,{get when(){return t.auditLog.reason},get children(){return e(S,{gap:3,get children(){return[e(r,{size:12,opacity:.6,get children(){return["Reason:"," "]}}),e(r,{size:12,style:{"white-space":"initial"},get children(){return t.auditLog.reason}})]}})}}),e(u,{get when(){return t.auditLog.actionType===A.userSuspend},get children(){return e(S,{gap:3,get children(){return[e(r,{size:12,opacity:.6,get children(){return["Expires"," "]}}),e(r,{size:12,children:h})]}})}})]}})]}}),null),$(g,e(u,{get when(){return a()},get children(){return e(C,{padding:4,margin:[0,6,0,0],styles:{"margin-left":"auto","align-self":"start"},iconName:"arrow_drop_down",onClick:()=>n(!i())})}}),null),g})()}function er(){const[i,n]=l([]),[c,d]=l(void 0),[h,o]=l(!1),[s,a]=l("");let g;const[w,m]=ke();Ce(()=>{if(w["search-post-id"]){a(w["search-post-id"]),m({"search-post-id":void 0},{replace:!0});const k=document.querySelector(".main-pane-container");setTimeout(()=>{k.scrollTo(0,k.scrollHeight)},100)}});const[x,b]=l(!1);E(X(c,async()=>{if(s()&&c()||s())return T();f()}));const L=()=>{const k=i()[i().length-1];d(k?.id)},y=()=>i().slice(0,5);let U=null;const z=k=>{a(k),U&&clearTimeout(U),U=window.setTimeout(()=>{if(d(void 0),n([]),!s().trim()){f();return}b(!0),T()},1e3)},T=()=>{o(!0),et(s(),30,c()).then(k=>{n([...i(),...k.toReversed()]),k.length>=30&&o(!1)}).catch(()=>o(!1))},f=()=>{o(!0),tt(30,c()).then(k=>{n([...i(),...k.toReversed()]),k.length>=30&&o(!1)}).catch(()=>o(!1))},I=k=>{n(i().filter(p=>p.id!==k))},D=k=>{n(i().map(p=>p.id!==k?p:{...p,announcement:!0}))},q=k=>{n(i().map(p=>p.id!==k?p:{...p,announcement:!1}))};return e(ee,{class:"pane posts",ref(k){var p=g;typeof p=="function"?p(k):g=k},get expanded(){return x()},get style(){return x()?void 0:{height:"initial"}},get children(){return[e(_,{placeholder:"Search by post id / user id",margin:[10,10,10,30],onText:z,get value(){return s()}}),e(S,{gap:5,itemsCenter:!0,style:{"padding-left":"10px"},get children(){return[e(C,{iconName:"add",iconSize:14,padding:4,onClick:()=>b(!x())}),e(r,{children:"Posts"})]}}),e(te,{class:"list",get children(){return[e(F,{get each(){return v(()=>!x())()?y():i()},children:k=>e(Ae,{post:k,onDelete:I,onAnnouncementAdd:D,onAnnouncementRemove:q})}),e(u,{get when(){return v(()=>!!x())()&&!h()},get children(){return e(C,{iconName:"refresh",label:"Load More",onClick:L})}})]}})]}})}function Ae(t){const i=Q(t.post.createdAt),n=t.post.createdBy,[c,d]=l(!1),[h,o]=ke(),{createPortal:s}=ie(),a=m=>{m.stopPropagation(),s(x=>e(ft,{close:x,get postIds(){return[t.post.id]},done:()=>t.onDelete?.(t.post.id)}))},g=m=>{m.stopPropagation(),s(x=>e(pt,{close:x,get postId(){return t.post.id},done:()=>t.onAnnouncementAdd?.(t.post.id)}))},w=m=>{m.stopPropagation(),s(x=>e(xt,{close:x,get postId(){return t.post.id},done:()=>t.onAnnouncementRemove?.(t.post.id)}))};return(()=>{var m=de();return m.$$click=x=>{x.target.closest("."+B)||o({postId:t.post.id})},m.$$mouseout=()=>d(!1),m.$$mouseover=()=>d(!0),re(m,oe),$(m,e(se,{get animate(){return c()},class:pe,user:n,size:28}),null),$(m,e(le,{class:"details",get children(){return[e(u,{get when(){return t.post.attachments?.length},get children(){return e(he,{style:{"vertical-align":"-2px","margin-right":"4px"},size:14,name:"image",color:"rgba(255,255,255,0.6)"})}}),e(r,{size:14,get children(){return t.post.content}}),e(S,{gap:3,get children(){return[e(r,{size:12,opacity:.6,children:"Created:"}),e(r,{size:12,children:i})]}}),e(S,{gap:3,get children(){return[e(r,{size:12,opacity:.6,children:"Created By:"}),e(r,{size:12,get children(){return e(P,{class:B,get href(){return`/app/moderation/users/${n.id}`},get children(){return[v(()=>n.username),":",v(()=>n.tag)]}})}})]}}),e(u,{get when(){return t.post.commentTo},get children(){return e(S,{gap:3,get children(){return[e(r,{size:12,opacity:.6,children:"Replying To:"}),e(r,{size:12,get children(){return e(P,{class:B,get href(){return`/app/moderation/users/${t.post.commentTo?.createdBy.id}`},get children(){return[v(()=>t.post.commentTo?.createdBy.username),":",v(()=>t.post.commentTo?.createdBy.tag)]}})}})]}})}})]}}),null),$(m,e(Z,{style:{"margin-left":"auto"},gap:4,get children(){return[e(u,{get when(){return t.post.announcement},get children(){return e(C,{onClick:w,iconName:"horizontal_rule",label:"Remove Announce",textSize:12,iconSize:16,margin:0,padding:4,color:"var(--alert-color)"})}}),e(u,{get when(){return!t.post.announcement},get children(){return e(C,{onClick:g,iconName:"add",label:"Announce",textSize:12,iconSize:16,margin:0,padding:4})}}),e(C,{onClick:a,iconName:"delete",label:"Delete",textSize:12,iconSize:16,color:"var(--alert-color)",margin:0,padding:4})]}}),null),m})()}nt(["mouseover","mouseout","click"]);const cr=Object.freeze(Object.defineProperty({__proto__:null,AuditLogPane:Te,Post:Ae,Server:xe,User:ve,UserPaneContainer:ae,default:Ot,selectedUsers:R,setSelectedUsers:ne},Symbol.toStringTag,{value:"Module"}));export{Te as A,yt as D,cr as M,xe as S,ve as U,gt as a,kt as b,It as c};
//# sourceMappingURL=ModerationPane-h966Ie8O.js.map
