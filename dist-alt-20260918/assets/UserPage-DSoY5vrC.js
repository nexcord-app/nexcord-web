import{b as d,c as e,F as A,ac as C,aB as D,S as c,T as w,bo as Q,s as U,u as k,W as V,g as _,M as O,bp as X,bq as Z,E as z,G as p,br as ee,bs as re,J as ne,O as te,bt as R,m as $,H as se,K as ae,an as oe,V as B,C as F,ax as ie,L as ue,bu as le,bv as de,bw as ce,az as ge,o as he,bx as me}from"./useStore-C81yKXnX.js";import{c as j}from"./createUpdatedSignal-BgdwjYY3.js";import{B as pe}from"./Banner-DWKTKMkk.js";import{A as Y}from"./Avatar-CnjpHkJi.js";import{B as we,a as N}from"./Breadcrumb-B2nrXbr4.js";import{S as y}from"./SettingsBlock-zYSlJJFm.js";import{I as v}from"./Input-CGVbQxvr.js";import{C as H}from"./Checkbox-cAafcjqo.js";import{f as q}from"./date-BKAW-sdF.js";import{U as G,A as fe,S as xe,a as be}from"./ModerationPane-h966Ie8O.js";import{C as ye}from"./ConnectionErrorModal-BTEAVjbL.js";import{W as ve}from"./WarnedModal-ERnRsqqf.js";import{N as J}from"./Notice-D4YZaiTY.js";import"./_commonjsHelpers-CE1G-McA.js";import"./GlobalEvents-13pKKKZj.js";import"./logout-DfWc_cxe.js";const Ce=U("div")`
  min-width: 260px;
  margin-bottom: 10px;
`;k`
  width: 90px;
`;function Se(r){const[a,t]=d(""),[s,o]=d(null),[g,i]=d(!1),f=()=>{if(g())return;i(!0),o(null);const l=r.users.map(m=>m.id);Q(a(),l).then(()=>{r.done(),r.close()}).catch(m=>o(m)).finally(()=>i(!1))},n=e(A,{style:{"justify-content":"flex-end",flex:1,margin:"5px"},get children(){return e(C,{onClick:f,margin:0,get label(){return g()?"Suspending...":"Suspend"},color:"var(--alert-color)",primary:!0})}});return e(D,{get close(){return r.close},get title(){return`Unsuspend ${r.users.length} User(s)`},actionButtons:n,get children(){return e(Ce,{get children(){return[e(v,{label:"Confirm Password",type:"password",get value(){return a()},onText:t}),e(c,{get when(){return s()},get children(){return e(w,{color:"var(--alert-color)",size:12,get children(){return s()?.message}})}})]}})}})}const Be=U("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`,Ue=k`
  width: 120px;
`;function ke(r){V();const a=()=>({reason:r.suspension.reason||"",suspendFor:Pe(r.suspension.expireAt).toString()||"0"}),[t,s,o]=j(a),[g,i]=d(""),[f,n]=d(null),[l,m]=d(!1),{createPortal:h}=_();O(()=>{let x=Math.round(parseInt(t().suspendFor));x<0&&(x=0),o("suspendFor",x.toString())});const P=()=>{if(l())return;m(!0),n(null);const x=[r.user.id],S=parseInt(t().suspendFor),I={expireAt:S?L(S):null,suspendedAt:Date.now(),reason:t().reason||void 0,suspendBy:r.suspension.suspendBy},M={...s().suspendFor?{days:S}:{},...s().reason?{reason:s().reason}:{}};X(g(),x,M).then(()=>{r.done(I),r.close()}).catch(u=>n(u)).finally(()=>m(!1))},b=()=>{const x=parseInt(t().suspendFor),S=x?L(x):void 0,I=t().reason||void 0;h(M=>e(ye,{close:M,get suspensionPreview(){return{expire:S,reason:I,by:{username:r.suspension.suspendBy.username}}}}))},E=e(A,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return[e(C,{onClick:b,margin:0,label:"Preview"}),e(C,{onClick:P,margin:0,get label(){return l()?"Editing...":"Edit Suspension"},primary:!0})]}});return e(D,{get close(){return r.close},title:"Edit Suspension",actionButtons:E,ignoreBackgroundClick:!0,get children(){return e(Be,{get children(){return[e(v,{label:"Reason",get value(){return t().reason},onText:x=>o("reason",x)}),e(v,{class:Ue,label:"Suspend for",type:"number",get value(){return t().suspendFor},onText:x=>o("suspendFor",x),suffix:"days"}),e(w,{size:12,opacity:.7,get class(){return k`
            margin-top: -4px;
          `},children:"0 days will suspend them indefinitely"}),e(v,{label:"Confirm Password",type:"password",get value(){return g()},onText:i}),e(c,{get when(){return f()},get children(){return e(w,{color:"var(--alert-color)",size:12,get children(){return f()?.message}})}})]}})}})}function L(r){const t=Date.now();return new Date(t+864e5*r).getTime()}function Pe(r){const t=Date.now(),s=new Date(r);return Math.round((s.getTime()-t)/864e5)}const Ie=U("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function Ae(r){const a=V(),[t,s]=d(""),[o,g]=d(""),[i,f]=d(null),[n,l]=d(!1),{createPortal:m}=_(),h=()=>r.user.account.warnExpiresAt?new Date(r.user.account.warnExpiresAt)<new Date:!0,P=()=>h()?0:r.user.account.warnCount||0,b=()=>{if(n())return;l(!0),f(null);const S=[r.user.id];Z(o(),S,t()).then(()=>{r.done(),r.close()}).catch(I=>f(I)).finally(()=>l(!1))},E=()=>{m(S=>e(ve,{bypassCounter:!0,close:S,get reason(){return t()},get by(){return{username:a.account.user().username}}}))},x=e(A,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return[e(C,{onClick:E,margin:0,label:"Preview"}),e(C,{onClick:b,margin:0,color:"var(--warn-color)",get label(){return n()?"Warning...":"Warn User"},primary:!0})]}});return e(D,{get close(){return r.close},title:"Warn User",actionButtons:x,ignoreBackgroundClick:!0,get children(){return e(Ie,{get children(){return[e(c,{get when(){return P()>=2},get children(){return e(J,{type:"warn",description:"This user has been warned more than 2 times. Suspension is recommended."})}}),e(v,{label:"Reason",get value(){return t()},onText:s}),e(v,{label:"Confirm Password",type:"password",get value(){return o()},onText:g}),e(c,{get when(){return i()},get children(){return e(w,{color:"var(--alert-color)",size:12,get children(){return i()?.message}})}})]}})}})}var Ee=z("<div>");const Me=U("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function De(r){const[a,t]=d(""),[s,o]=d(""),[g,i]=d(null),[f,n]=d(!1),l=()=>{if(f())return;n(!0),i(null);const h=[r.user.id];ee(s(),h,a()).then(()=>{r.done(),r.close()}).catch(P=>i(P)).finally(()=>n(!1))},m=e(A,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(C,{onClick:l,margin:0,color:"var(--warn-color)",get label(){return f()?"Shadow Banning...":"Shadow Ban User"},primary:!0})}});return e(D,{get close(){return r.close},title:"Shadow Ban User",actionButtons:m,ignoreBackgroundClick:!0,get children(){return e(Me,{get children(){return[(()=>{var h=Ee();return p(h,e(J,{type:"warn",description:["ONLY shadow ban raiders/spammers.","Last 7 hours of messages will be deleted."]})),h})(),e(v,{label:"Reason",get value(){return a()},onText:t}),e(v,{label:"Confirm Password",type:"password",get value(){return s()},onText:o}),e(c,{get when(){return g()},get children(){return e(w,{color:"var(--alert-color)",size:12,get children(){return g()?.message}})}})]}})}})}const _e=U("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function ze(r){const[a,t]=d(""),[s,o]=d(null),[g,i]=d(!1),f=()=>{if(g())return;i(!0),o(null);const l=[r.user.id];re(a(),l).then(()=>{r.done(),r.close()}).catch(m=>o(m)).finally(()=>i(!1))},n=e(A,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(C,{onClick:f,margin:0,color:"var(--warn-color)",get label(){return g()?"Undoing...":"Undo"},primary:!0})}});return e(D,{get close(){return r.close},title:"Undo Shadow Ban User",actionButtons:n,ignoreBackgroundClick:!0,get children(){return e(_e,{get children(){return[e(v,{label:"Confirm Password",type:"password",get value(){return a()},onText:t}),e(c,{get when(){return s()},get children(){return e(w,{color:"var(--alert-color)",size:12,get children(){return s()?.message}})}})]}})}})}var W=z("<div>"),Te=z("<div style=display:flex;flex-direction:column;gap:4px;margin-bottom:10px>"),$e=z("<span><br><br>"),We=z("<span>");const Fe=U(B)`
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
  margin-top: 10px;
`,Re=U(B)`
  margin: 10px;
`,Ne=U(A)`
  display: flex;
  align-items: center;
  margin-left: 30px;
  height: 100%;
  z-index: 11111;
`,qe=U(B)`
  margin-left: 20px;
  margin-right: 20px;
  gap: 4px;
  font-size: 18px;
  z-index: 1111;
  background: rgba(0, 0, 0, 0.86);
  backdrop-filter: blur(34px);
  padding: 10px;
  border-radius: 8px;
`,Le=k`
  && {
    margin: 0;
    &:not(:last-child) {
      border-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`,Ve=U("button")`
  color: var(--primary-color);
  background-color: transparent;
  border: none;
  align-self: flex-start;
  cursor: pointer;
  user-select: none;
  &:hover {
    text-decoration: underline;
  }
`;function gr(){const r=ne(),{width:a}=ue(),[t,s]=d(!1),[o,g]=d(null),[i,f]=d(!1),[n,l]=d(null),m=()=>({email:n()?.account?.email||"",username:n()?.username||"",tag:n()?.tag||"",badges:n()?.badges||0,emailConfirmed:n()?.account?.emailConfirmed||!1,newPassword:"",password:""}),[h,P,b]=j(m);O(te(()=>r.userId,()=>{R(r.userId).then(l)}));const E=()=>t()?"Saving...":"Save Changes",x=async()=>{if(t())return;s(!0),g(null);const u=P();await le(r.userId,u).then(()=>{R(r.userId).then(l),b("password","")}).catch(T=>{b("password",""),g(T.message)}).finally(()=>s(!1))},S=(u,T)=>{if(u){b("badges",de(h().badges,T));return}b("badges",ce(h().badges,T))},I=()=>{b("newPassword",""),f(!i())},M=()=>n()?.application?.creatorAccount?.user;return e(c,{get when(){return n()},keyed:!0,get children(){return e(Fe,{get children(){return e(Re,{get children(){return[e(pe,{get class(){return k`
              margin-bottom: 15px;
            `},margin:0,maxHeight:250,animate:!0,get url(){return oe(n())},get hexColor(){return n().hexColor},get children(){return e(Ne,{get children(){return[$(()=>$(()=>!!n())()&&e(Y,{animate:!0,get user(){return n()},get size(){return a()<=1100?70:100}})),e(qe,{get children(){return[(()=>{var u=W();return p(u,()=>n().username),u})(),e(se,{get class(){return k`
                    font-size: 14px;
                  `},get href(){return ae.PROFILE(n().id)},children:"Visit Profile"})]}})]}})}}),e(we,{get children(){return[e(N,{href:"../../",icon:"home",title:"Moderation"}),e(N,{get title(){return n()?.username},icon:"person"})]}}),e(c,{get when(){return n()?.application},get children(){var u=Te();return p(u,e(w,{size:14,style:{"margin-left":"0px"},children:"Bot Created By"}),null),p(u,e(G,{get user(){return M()},get class(){return k`
                  border: none;
                  border-radius: 6px;
                  background: rgba(255, 255, 255, 0.05);
                `}}),null),u}}),e(c,{get when(){return n()},get children(){return e(B,{get class(){return k`
                margin-bottom: 10px;
              `},get children(){return[e(c,{get when(){return!n()?.shadowBan},get children(){return e(He,{get user(){return n()},setUser:l})}}),e(c,{get when(){return n()?.account},get children(){return[e(c,{get when(){return!n()?.shadowBan},get children(){return e(Ge,{get user(){return n()},setUser:l})}}),e(c,{get when(){return!n()?.suspension},get children(){return e(Je,{get user(){return n()},setUser:l})}})]}})]}})}}),e(c,{get when(){return n()?.account},get children(){return[e(y,{label:"Email",icon:"mail",get children(){return e(v,{get value(){return h().email},onText:u=>b("email",u)})}}),e(y,{label:"Email Confirmed",get children(){return e(H,{get checked(){return h().emailConfirmed},onChange:u=>b("emailConfirmed",u)})}})]}}),e(y,{label:"Username",icon:"face",get children(){return e(v,{get value(){return h().username},onText:u=>b("username",u)})}}),e(y,{label:"Tag",icon:"sell",get children(){return e(v,{get value(){return h().tag},onText:u=>b("tag",u)})}}),e(y,{icon:"badge",label:"Badges",header:!0}),e(B,{gap:1,get children(){return e(F,{each:ie,children:u=>e(Oe,{badge:u,get user(){return n()},get badges(){return h().badges},onBadgeUpdate:S})})}}),e(Ve,{onClick:I,style:{"margin-bottom":"5px","margin-top":"5px"},children:"Change Password"}),e(c,{get when(){return i()},get children(){return e(y,{icon:"password",label:"New Password",description:"Changing the password will log them out everywhere.",get children(){return e(v,{type:"password",get value(){return h().newPassword},onText:u=>b("newPassword",u)})}})}}),e(c,{get when(){return Object.keys(P()).length},get children(){return[e(y,{label:"Confirm Admin Password",icon:"security",get class(){return k`
                margin-top: 10px;
              `},get children(){return e(v,{type:"password",get value(){return h().password},onText:u=>b("password",u)})}}),e(c,{get when(){return o()},get children(){return e(w,{color:"var(--alert-color)",get children(){return o()}})}}),e(C,{iconName:"save",get label(){return E()},get class(){return k`
                align-self: flex-end;
              `},onClick:x})]}}),e(je,{get userId(){return n()?.id}}),e(Ye,{get userId(){return n()?.id},get servers(){return n()?.servers}}),e(fe,{get search(){return n()?.id},style:{margin:0}})]}})}})}})}const Oe=r=>{const[a,t]=d(!1);return e(y,{onMouseOver:()=>t(!0),onMouseLeave:()=>t(!1),class:Le,get label(){return r.badge.name},get description(){return r.badge.description},get icon(){return e(Y,{get user(){return{...r.user,badges:r.badge.bit}},size:42,get animate(){return a()}})},get children(){return e(H,{get checked(){return ge(r.badges,r.badge.bit)},onChange:s=>r.onBadgeUpdate(s,r.badge.bit)})}})},K=U(B)`
  background: rgba(255, 255, 255, 0.05);
  margin-bottom: 10px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`,je=r=>{const[a,t]=d([]);return he(()=>{me(r.userId,30).then(t)}),e(B,{get children(){return[e(y,{icon:"dns",borderBottomRadius:!1,label:"Users With Same IP Address"}),e(K,{get children(){return e(F,{get each(){return a()},children:s=>e(G,{user:s})})}})]}})},Ye=r=>{const a=()=>r.servers.sort((t,s)=>t.createdBy.id===r.userId?-1:s.createdBy.id===r.userId?1:0);return e(B,{get children(){return[e(y,{icon:"dns",borderBottomRadius:!1,label:"Joined Servers"}),e(K,{get children(){return e(F,{get each(){return a()},children:t=>e(xe,{server:t})})}})]}})};function He(r){const{createPortal:a}=_(),t=()=>{a?.(n=>e(be,{done:l=>r.setUser({...r.user,suspension:l}),close:n,get users(){return[r.user]}}))},s=()=>{a?.(n=>e(ke,{done:l=>r.setUser({...r.user,suspension:l}),close:n,get user(){return r.user},get suspension(){return r.user.suspension}}))},o=()=>{a?.(n=>e(Se,{done:()=>r.setUser({...r.user,suspension:void 0}),close:n,get users(){return[r.user]}}))},g=()=>r.user.suspension?.expireAt?q(r.user.suspension.expireAt):"Never",i=()=>q(r.user.suspension?.suspendedAt),f=()=>(()=>{var n=$e(),l=n.firstChild,m=l.nextSibling;return p(n,e(w,{size:12,opacity:.8,get children(){return["By"," "]}}),l),p(n,e(w,{size:12,opacity:.6,get children(){return r.user.suspension?.suspendBy.username}}),l),p(n,e(w,{size:12,opacity:.8,get children(){return["At"," "]}}),m),p(n,e(w,{size:12,opacity:.6,get children(){return i()}}),m),p(n,e(w,{size:12,opacity:.8,get children(){return[" ","Expires"]}}),null),p(n,e(w,{size:12,opacity:.6,get children(){return[" ",$(()=>g())]}}),null),n})();return(()=>{var n=W();return p(n,e(c,{get when(){return!r.user?.suspension},get children(){return e(y,{icon:"block",label:"Suspend",description:"Deny this user to access Nexcord",get children(){return e(C,{onClick:t,label:"Suspend",color:"var(--alert-color)",primary:!0})}})}}),null),p(n,e(c,{get when(){return r.user?.suspension},get children(){return e(y,{icon:"block",get label(){return`Suspended for: ${r.user.suspension?.reason}`},get description(){return e(f,{})},get children(){return e(B,{gap:4,get children(){return[e(C,{onClick:s,label:"Edit",margin:0}),e(C,{onClick:o,label:"Unsuspend",color:"var(--alert-color)",primary:!0,margin:0})]}})}})}}),null),n})()}function Ge(r){const{createPortal:a}=_(),t=()=>r.user.account?.warnExpiresAt?new Date(r.user.account.warnExpiresAt)<new Date:!0,s=()=>t()?0:r.user.account?.warnCount||0,o=()=>{a?.(i=>e(Ae,{done:()=>r.setUser({...r.user,account:{...r.user.account,warnCount:s()+1,warnExpiresAt:new Date().setMonth(new Date().getMonth()+6)}}),close:i,get user(){return r.user}}))},g=()=>(()=>{var i=We();return p(i,e(w,{size:12,opacity:.6,children:"Warned"}),null),p(i,e(w,{size:12,opacity:.8,get children(){return[" ",$(()=>s())," "]}}),null),p(i,e(w,{size:12,opacity:.6,children:"time(s) in the last 6 months."}),null),i})();return(()=>{var i=W();return p(i,e(y,{icon:"warning",label:"Warn User",get description(){return e(g,{})},get children(){return e(B,{gap:4,get children(){return e(C,{onClick:o,label:"Warn User",color:"var(--warn-color)",primary:!0,margin:0})}})}})),i})()}function Je(r){const{createPortal:a}=_(),t=()=>{a?.(o=>e(De,{done:()=>r.setUser({...r.user,shadowBan:!0}),close:o,get user(){return r.user}}))},s=()=>{a?.(o=>e(ze,{done:()=>r.setUser({...r.user,shadowBan:!1}),close:o,get user(){return r.user}}))};return(()=>{var o=W();return p(o,e(y,{icon:"tonality",label:"Shadow Ban (Raid/Spammers)",description:"New messages and posts will be hidden and not be sent.",get children(){return e(B,{gap:4,get children(){return[e(c,{get when(){return!r.user?.shadowBan},get children(){return e(C,{onClick:t,label:"Shadow Ban",color:"var(--warn-color)",primary:!0,margin:0})}}),e(c,{get when(){return r.user?.shadowBan},get children(){return e(C,{onClick:s,label:"Undo",color:"var(--alert-color)",primary:!0,margin:0})}})]}})}})),o})()}export{gr as default};
//# sourceMappingURL=UserPage-DSoY5vrC.js.map
