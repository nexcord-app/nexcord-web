import{e as d,c as e,S as h,ax as le,f as T,D as ee,ay as de,az as ce,t as W,i as f,aA as ge,aB as he,z as me,E as pe,m as q,A as we,B as fe,a4 as xe,F as j,aa as ye,C as ve,aC as J,aD as be,ak as Se,o as Ce,aE as Ie,q as K,aF as Be,aG as Ue}from"./ModerationService-CpG_--VM.js";import{c as re}from"./createUpdatedSignal-B_yOfrf7.js";import{a as _,s as U,u as k,F as A}from"./Flexbox-D5klO2LR.js";import{B as ke}from"./Banner-0ZZZbkvm.js";import{B as C,L as $,T as x,a as ne,A as te,M as R}from"./Text-zTrywdpE.js";import{B as Pe,a as Q}from"./Breadcrumb-B3zChS5t.js";import{S as b,a as Y}from"./SettingsBlock-BzKx6hwO.js";import{I as S}from"./Input-DyE3cipz.js";import{f as X}from"./date-yc99Ly_9.js";import{A as Ae,S as Me,a as Ee}from"./ModerationPane-LpjeqdSp.js";import{U as se}from"./UsersAuditLogsPane-C-YkQOvm.js";import{b as G}from"./useStore-BX0H4HHl.js";import{C as De}from"./ConnectionErrorModal-PxjOQfQe.js";import{W as Te}from"./WarnedModal-DCmeoM0A.js";import{N as ae}from"./Notice-BCJa9kR6.js";import{B as _e}from"./Block-vaseDdF1.js";import{a as ze}from"./RadioBox-BCEOX5PF.js";import"./useResizeObserver-D1YIQi8T.js";import"./languages-C3qXs8UH.js";import"./GlobalEvents-zRDY--HT.js";import"./_commonjsHelpers-CE1G-McA.js";import"./logout-NpC9kFev.js";const Ne=U("div")`
  min-width: 260px;
  margin-bottom: 10px;
`;k`
  width: 90px;
`;function Fe(r){const[a,t]=d(""),[s,i]=d(null),[c,u]=d(!1),m=()=>{if(c())return;u(!0),i(null);const n=r.users.map(g=>g.id);le(a(),n).then(()=>{r.done(),r.close()}).catch(g=>i(g)).finally(()=>u(!1))},o=e(_,{style:{"justify-content":"flex-end",flex:1,margin:"5px"},get children(){return e(C,{onClick:m,margin:0,get label(){return c()?"Suspending...":"Suspend"},color:"var(--alert-color)",primary:!0})}});return e($,{get close(){return r.close},get title(){return`Unsuspend ${r.users.length} User(s)`},actionButtons:o,get children(){return e(Ne,{get children(){return[e(S,{label:"Confirm Password",type:"password",get value(){return a()},onText:t}),e(h,{get when(){return s()},get children(){return e(x,{color:"var(--alert-color)",size:12,get children(){return s()?.message}})}})]}})}})}const Re=U("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`,We=k`
  width: 120px;
`;function $e(r){G();const a=()=>({reason:r.suspension.reason||"",suspendFor:Oe(r.suspension.expireAt).toString()||"0"}),[t,s,i]=re(a),[c,u]=d(""),[m,o]=d(null),[n,g]=d(!1),{createPortal:v}=T();ee(()=>{let y=Math.round(parseInt(t().suspendFor));y<0&&(y=0),i("suspendFor",y.toString())});const p=()=>{if(n())return;g(!0),o(null);const y=[r.user.id],B=parseInt(t().suspendFor),M={expireAt:B?Z(B):null,suspendedAt:Date.now(),reason:t().reason||void 0,suspendBy:r.suspension.suspendBy},z={...s().suspendFor?{days:B}:{},...s().reason?{reason:s().reason}:{}};de(c(),y,z).then(()=>{r.done(M),r.close()}).catch(V=>o(V)).finally(()=>g(!1))},D=()=>{const y=parseInt(t().suspendFor),B=y?Z(y):void 0,M=t().reason||void 0;v(z=>e(De,{close:z,get suspensionPreview(){return{expire:B,reason:M,by:{username:r.suspension.suspendBy.username}}}}))},w=e(_,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return[e(C,{onClick:D,margin:0,label:"Preview"}),e(C,{onClick:p,margin:0,get label(){return n()?"Editing...":"Edit Suspension"},primary:!0})]}});return e($,{get close(){return r.close},title:"Edit Suspension",actionButtons:w,ignoreBackgroundClick:!0,get children(){return e(Re,{get children(){return[e(S,{label:"Reason",get value(){return t().reason},onText:y=>i("reason",y)}),e(S,{class:We,label:"Suspend for",type:"number",get value(){return t().suspendFor},onText:y=>i("suspendFor",y),suffix:"days"}),e(x,{size:12,opacity:.7,get class(){return k`
            margin-top: -4px;
          `},children:"0 days will suspend them indefinitely"}),e(S,{label:"Confirm Password",type:"password",get value(){return c()},onText:u}),e(h,{get when(){return m()},get children(){return e(x,{color:"var(--alert-color)",size:12,get children(){return m()?.message}})}})]}})}})}function Z(r){const t=Date.now();return new Date(t+864e5*r).getTime()}function Oe(r){const t=Date.now(),s=new Date(r);return Math.round((s.getTime()-t)/864e5)}const qe=U("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function Le(r){const a=G(),[t,s]=d(""),[i,c]=d(""),[u,m]=d(null),[o,n]=d(!1),{createPortal:g}=T(),v=()=>r.user.account.warnExpiresAt?new Date(r.user.account.warnExpiresAt)<new Date:!0,p=()=>v()?0:r.user.account.warnCount||0,D=()=>{if(o())return;n(!0),m(null);const B=[r.user.id];ce(i(),B,t()).then(()=>{r.done(),r.close()}).catch(M=>m(M)).finally(()=>n(!1))},w=()=>{g(B=>e(Te,{bypassCounter:!0,close:B,get reason(){return t()},get by(){return{username:a.account.user().username}}}))},y=e(_,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return[e(C,{onClick:w,margin:0,label:"Preview"}),e(C,{onClick:D,margin:0,color:"var(--warn-color)",get label(){return o()?"Warning...":"Warn User"},primary:!0})]}});return e($,{get close(){return r.close},title:"Warn User",actionButtons:y,ignoreBackgroundClick:!0,get children(){return e(qe,{get children(){return[e(h,{get when(){return p()>=2},get children(){return e(ae,{type:"warn",description:"This user has been warned more than 2 times. Suspension is recommended."})}}),e(S,{label:"Reason",get value(){return t()},onText:s}),e(S,{label:"Confirm Password",type:"password",get value(){return i()},onText:c}),e(h,{get when(){return u()},get children(){return e(x,{color:"var(--alert-color)",size:12,get children(){return u()?.message}})}})]}})}})}var Ve=W("<div>");const je=U("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function Ye(r){const[a,t]=d(""),[s,i]=d(""),[c,u]=d(null),[m,o]=d(!1),n=()=>{if(m())return;o(!0),u(null);const v=[r.user.id];ge(s(),v,a()).then(()=>{r.done(),r.close()}).catch(p=>u(p)).finally(()=>o(!1))},g=e(_,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(C,{onClick:n,margin:0,color:"var(--warn-color)",get label(){return m()?"Shadow Banning...":"Shadow Ban User"},primary:!0})}});return e($,{get close(){return r.close},title:"Shadow Ban User",actionButtons:g,ignoreBackgroundClick:!0,get children(){return e(je,{get children(){return[(()=>{var v=Ve();return f(v,e(ae,{type:"warn",description:["ONLY shadow ban raiders/spammers.","Last 7 hours of messages will be deleted."]})),v})(),e(S,{label:"Reason",get value(){return a()},onText:t}),e(S,{label:"Confirm Password",type:"password",get value(){return s()},onText:i}),e(h,{get when(){return c()},get children(){return e(x,{color:"var(--alert-color)",size:12,get children(){return c()?.message}})}})]}})}})}const Ge=U("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function He(r){const[a,t]=d(""),[s,i]=d(null),[c,u]=d(!1),m=()=>{if(c())return;u(!0),i(null);const n=[r.user.id];he(a(),n).then(()=>{r.done(),r.close()}).catch(g=>i(g)).finally(()=>u(!1))},o=e(_,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(C,{onClick:m,margin:0,color:"var(--warn-color)",get label(){return c()?"Undoing...":"Undo"},primary:!0})}});return e($,{get close(){return r.close},title:"Undo Shadow Ban User",actionButtons:o,ignoreBackgroundClick:!0,get children(){return e(Ge,{get children(){return[e(S,{label:"Confirm Password",type:"password",get value(){return a()},onText:t}),e(h,{get when(){return s()},get children(){return e(x,{color:"var(--alert-color)",size:12,get children(){return s()?.message}})}})]}})}})}var L=W("<div>"),Je=W("<div style=display:flex;flex-direction:column;gap:4px;margin-bottom:10px>"),Ke=W("<span><br><br>"),Qe=W("<span>");const Xe=U(A)`
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
  margin-top: 10px;
`,Ze=U(A)`
  margin: 10px;
`,er=U(_)`
  display: flex;
  align-items: center;
  margin-left: 30px;
  height: 100%;
  z-index: 11111;
`,rr=U(A)`
  margin-left: 20px;
  margin-right: 20px;
  gap: 4px;
  font-size: 18px;
  z-index: 1111;
  background: rgba(0, 0, 0, 0.86);
  backdrop-filter: blur(34px);
  padding: 10px;
  border-radius: 8px;
`,nr=k`
  && {
    margin: 0;
  }
`,tr=U("button")`
  color: var(--primary-color);
  background-color: transparent;
  border: none;
  align-self: flex-start;
  cursor: pointer;
  user-select: none;
  &:hover {
    text-decoration: underline;
  }
`;function Tr(){const r=G(),a=me(),{width:t}=ve(),[s,i]=d(!1),[c,u]=d(null),[m,o]=d(!1),[n,g]=d(null),v=()=>({email:n()?.account?.email||"",username:n()?.username||"",tag:n()?.tag||"",addedInventoryItems:[],removedInventoryIds:[],emailConfirmed:n()?.account?.emailConfirmed||!1,newPassword:"",password:""}),[p,D,w]=re(v);ee(pe(()=>a.userId,()=>{J(a.userId).then(g)}));const y=()=>s()?"Saving...":"Save Changes",B=async()=>{if(s())return;i(!0),u(null);const l=D();await be(a.userId,l).then(()=>{J(a.userId).then(g),w("password","")}).catch(P=>{w("password",""),u(P.message)}).finally(()=>i(!1))},M=l=>{const P=n()?.inventory.find(I=>parseInt(I.itemId)===l);return p().addedInventoryItems.find(I=>parseInt(I.itemId)===l)?!0:p().removedInventoryIds.find(I=>I===P?.id)?!1:!!P},z=(l,P)=>{Se(()=>{const O=n()?.inventory.find(E=>parseInt(E.itemId)===P),H=p().addedInventoryItems.find(E=>parseInt(E.itemId)===P),I=O||H;let N=[...p().removedInventoryIds],F=[...p().addedInventoryItems];if(I&&("id"in I&&(N=N.filter(E=>E!==I.id)),F=F.filter(E=>E.itemId!==String(P)),w("removedInventoryIds",N),w("addedInventoryItems",F)),l){if(O)return;F.push({itemType:"badge",itemId:String(P)}),w("addedInventoryItems",F);return}if(I&&"id"in I){if(!O)return;N.push(I.id),w("removedInventoryIds",N)}})},V=()=>{w("newPassword",""),o(!m())},ie=()=>n()?.application?.creatorAccount?.user,ue=r.account?.hasOnlyModBadge();return e(h,{get when(){return n()},keyed:!0,get children(){return e(Xe,{get children(){return e(Ze,{get children(){return[e(ke,{get class(){return k`
              margin-bottom: 15px;
            `},margin:0,maxHeight:250,animate:!0,get url(){return xe(n(),"banner")},get hexColor(){return n().hexColor},get children(){return e(er,{get children(){return[q(()=>q(()=>!!n())()&&e(te,{animate:!0,get user(){return n()},get size(){return t()<=1100?70:100}})),e(rr,{get children(){return[(()=>{var l=L();return f(l,()=>n().username),l})(),e(we,{get class(){return k`
                    font-size: 14px;
                  `},get href(){return fe.PROFILE(n().id)},children:"Visit Profile"})]}})]}})}}),e(Pe,{get children(){return[e(Q,{href:"../../",icon:"home",title:"Moderation"}),e(Q,{get title(){return n()?.username},icon:"person"})]}}),e(h,{get when(){return n()?.application},get children(){var l=Je();return f(l,e(x,{size:14,style:{"margin-left":"0px"},children:"Bot Created By"}),null),f(l,e(se,{get user(){return ie()},get class(){return k`
                  border: none;
                  border-radius: 6px;
                  background: rgba(255, 255, 255, 0.05);
                `}}),null),l}}),e(h,{get when(){return n()},get children(){return e(A,{get class(){return k`
                margin-bottom: 10px;
              `},get children(){return[e(dr,{get userId(){return n().id}}),e(h,{when:!ue,get children(){return[e(h,{get when(){return!n()?.shadowBan},get children(){return e(ir,{get user(){return n()},setUser:g})}}),e(h,{get when(){return n()?.account},get children(){return[e(h,{get when(){return!n()?.shadowBan},get children(){return e(ur,{get user(){return n()},setUser:g})}}),e(h,{get when(){return!n()?.suspension},get children(){return e(lr,{get user(){return n()},setUser:g})}})]}})]}})]}})}}),e(h,{get when(){return n()?.account},get children(){return[e(b,{label:"Email",icon:"mail",get children(){return e(S,{get value(){return p().email},onText:l=>w("email",l)})}}),e(b,{label:"Email Confirmed",get children(){return e(ne,{get checked(){return p().emailConfirmed},onChange:l=>w("emailConfirmed",l)})}})]}}),e(b,{label:"Username",icon:"face",get children(){return e(S,{get value(){return p().username},onText:l=>w("username",l)})}}),e(b,{label:"Tag",icon:"sell",get children(){return e(S,{get value(){return p().tag},onText:l=>w("tag",l)})}}),e(Y,{get children(){return[e(b,{icon:"badge",label:"Badges"}),e(j,{each:ye,children:l=>e(sr,{badge:l,get user(){return n()},onBadgeUpdate:z,get hasBadge(){return M(l.bit)}})})]}}),e(tr,{onClick:V,style:{"margin-bottom":"5px","margin-top":"5px"},children:"Change Password"}),e(h,{get when(){return m()},get children(){return e(b,{icon:"password",label:"New Password",description:"Changing the password will log them out everywhere.",get children(){return e(S,{type:"password",get value(){return p().newPassword},onText:l=>w("newPassword",l)})}})}}),e(h,{get when(){return Object.keys(D()).length},get children(){return[e(b,{label:"Confirm Admin Password",icon:"security",get class(){return k`
                margin-top: 10px;
              `},get children(){return e(S,{type:"password",get value(){return p().password},onText:l=>w("password",l)})}}),e(h,{get when(){return c()},get children(){return e(x,{color:"var(--alert-color)",get children(){return c()}})}}),e(C,{iconName:"save",get label(){return y()},get class(){return k`
                align-self: flex-end;
              `},onClick:B})]}}),e(ar,{get userId(){return n()?.id}}),e(or,{get userId(){return n()?.id},get servers(){return n()?.servers}}),e(Ae,{get search(){return n()?.id},style:{margin:0}})]}})}})}})}const sr=r=>{const[a,t]=d(!1);return e(b,{onMouseOver:()=>t(!0),onMouseLeave:()=>t(!1),class:nr,get label(){return r.badge.name()},get description(){return r.badge.description?.()},get icon(){return e(te,{get user(){return{...r.user,badges:r.badge.bit}},size:42,get animate(){return a()}})},onClick:()=>{r.onBadgeUpdate(!r.hasBadge,r.badge.bit)},get children(){return e(ne,{get checked(){return r.hasBadge}})}})},oe=U(_e)`
  margin-bottom: 10px;
  padding: 0;
  min-height: 0;
  flex-direction: column;
  align-items: unset;
`,ar=r=>{const[a,t]=d([]);return Ce(()=>{Ie(r.userId,30).then(t)}),e(Y,{get children(){return[e(b,{icon:"dns",label:"Users With Same IP Address"}),e(oe,{get children(){return e(j,{get each(){return a()},children:s=>e(se,{user:s})})}})]}})},or=r=>{const a=()=>r.servers.sort((t,s)=>t.createdBy.id===r.userId?-1:s.createdBy.id===r.userId?1:0);return e(Y,{get children(){return[e(b,{icon:"dns",label:"Joined Servers"}),e(oe,{get children(){return e(j,{get each(){return a()},children:t=>e(Me,{server:t})})}})]}})};function ir(r){const{createPortal:a}=T(),t=()=>{a?.(o=>e(Ee,{done:n=>r.setUser({...r.user,suspension:n}),close:o,get users(){return[r.user]}}))},s=()=>{a?.(o=>e($e,{done:n=>r.setUser({...r.user,suspension:n}),close:o,get user(){return r.user},get suspension(){return r.user.suspension}}))},i=()=>{a?.(o=>e(Fe,{done:()=>r.setUser({...r.user,suspension:void 0}),close:o,get users(){return[r.user]}}))},c=()=>r.user.suspension?.expireAt?X(r.user.suspension.expireAt):"Never",u=()=>X(r.user.suspension?.suspendedAt),m=()=>(()=>{var o=Ke(),n=o.firstChild,g=n.nextSibling;return f(o,e(x,{size:12,opacity:.8,get children(){return["By"," "]}}),n),f(o,e(x,{size:12,opacity:.6,get children(){return r.user.suspension?.suspendBy.username}}),n),f(o,e(x,{size:12,opacity:.8,get children(){return["At"," "]}}),g),f(o,e(x,{size:12,opacity:.6,get children(){return u()}}),g),f(o,e(x,{size:12,opacity:.8,get children(){return[" ","Expires"]}}),null),f(o,e(x,{size:12,opacity:.6,get children(){return[" ",q(()=>c())]}}),null),o})();return(()=>{var o=L();return f(o,e(h,{get when(){return!r.user?.suspension},get children(){return e(b,{icon:"block",label:"Suspend",description:"Deny this user to access Nerimity",get children(){return e(C,{onClick:t,label:"Suspend",color:"var(--alert-color)",primary:!0})}})}}),null),f(o,e(h,{get when(){return r.user?.suspension},get children(){return e(b,{icon:"block",get label(){return`Suspended for: ${r.user.suspension?.reason}`},get description(){return e(m,{})},get children(){return e(A,{gap:4,get children(){return[e(C,{onClick:s,label:"Edit",margin:0}),e(C,{onClick:i,label:"Unsuspend",color:"var(--alert-color)",primary:!0,margin:0})]}})}})}}),null),o})()}function ur(r){const{createPortal:a}=T(),t=()=>r.user.account?.warnExpiresAt?new Date(r.user.account.warnExpiresAt)<new Date:!0,s=()=>t()?0:r.user.account?.warnCount||0,i=()=>{a?.(u=>e(Le,{done:()=>r.setUser({...r.user,account:{...r.user.account,warnCount:s()+1,warnExpiresAt:new Date().setMonth(new Date().getMonth()+6)}}),close:u,get user(){return r.user}}))},c=()=>(()=>{var u=Qe();return f(u,e(x,{size:12,opacity:.6,children:"Warned"}),null),f(u,e(x,{size:12,opacity:.8,get children(){return[" ",q(()=>s())," "]}}),null),f(u,e(x,{size:12,opacity:.6,children:"time(s) in the last 6 months."}),null),u})();return(()=>{var u=L();return f(u,e(b,{icon:"warning",label:"Warn User",get description(){return e(c,{})},get children(){return e(A,{gap:4,get children(){return e(C,{onClick:i,label:"Warn User",color:"var(--warn-color)",primary:!0,margin:0})}})}})),u})()}function lr(r){const{createPortal:a}=T(),t=()=>{a?.(i=>e(Ye,{done:()=>r.setUser({...r.user,shadowBan:!0}),close:i,get user(){return r.user}}))},s=()=>{a?.(i=>e(He,{done:()=>r.setUser({...r.user,shadowBan:!1}),close:i,get user(){return r.user}}))};return(()=>{var i=L();return f(i,e(b,{icon:"tonality",label:"Shadow Ban (Raid/Spammers)",description:"New messages and posts will be hidden and not be sent.",get children(){return e(A,{gap:4,get children(){return[e(h,{get when(){return!r.user?.shadowBan},get children(){return e(C,{onClick:t,label:"Shadow Ban",color:"var(--warn-color)",primary:!0,margin:0})}}),e(h,{get when(){return r.user?.shadowBan},get children(){return e(C,{onClick:s,label:"Undo",color:"var(--alert-color)",primary:!0,margin:0})}})]}})}})),i})()}const dr=r=>{const{createPortal:a}=T(),t=()=>{const[s,i]=d(""),[c,u]=d(""),[m,o]=d(!1);a(n=>{const g=async()=>{if(!s())return K("Please select a reason");m()||(o(!0),await Be({actionType:Ue.userSuspend,userId:r.userId,reason:s()==="Other"?c():s()}).then(()=>{n()}).catch(v=>K(v.message||v.error)).finally(()=>o(!1)))};return e(R.Root,{close:n,doNotCloseOnBackgroundClick:!0,get children(){return[e(R.Header,{title:"Suggest"}),e(R.Body,{get children(){return e(A,{gap:4,get children(){return[e(ze,{items:[{id:"NSFW",label:"NSFW"},{id:"Racist",label:"Racist"},{id:"Inappropriate Name",label:"Inappropriate Name"},{id:"Other",label:"Other"}],get initialId(){return s()},onChange:v=>i(v.id)}),e(h,{get when(){return s()==="Other"},get children(){return e(S,{placeholder:"Reason",onText:u,get value(){return c()}})}})]}})}}),e(R.Footer,{get children(){return e(R.Button,{label:"Suggest",iconName:"check",onClick:g,primary:!0})}})]}})})};return e(b,{icon:"info",label:"Suggest Action",get children(){return e(C,{onClick:t,label:"Suggest Action",color:"var(--alert-color)",primary:!0})}})};export{Tr as default};
//# sourceMappingURL=UserPage-DcBL-YKT.js.map
