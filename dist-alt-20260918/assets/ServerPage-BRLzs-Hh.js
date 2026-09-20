import{b as g,c as e,F as M,ac as h,aB as F,S as u,T as S,cY as L,s as x,J as z,o as T,m as C,E as b,G as f,aN as R,u as d,L as V,cZ as j,V as B,W as J,g as U,c_ as N,w as D,c$ as q,d0 as E}from"./useStore-C81yKXnX.js";import{c as O}from"./createUpdatedSignal-BgdwjYY3.js";import{U as W,b as G,c as H,A as Y,D as Z}from"./ModerationPane-h966Ie8O.js";import{S as m}from"./SettingsBlock-zYSlJJFm.js";import{I as k}from"./Input-CGVbQxvr.js";import{C as K}from"./Checkbox-cAafcjqo.js";import{B as Q,a as I}from"./Breadcrumb-B2nrXbr4.js";import{B as X}from"./Banner-DWKTKMkk.js";import{A as ee}from"./Avatar-CnjpHkJi.js";import{f as re}from"./date-BKAW-sdF.js";import{k as te,h as ne}from"./GlobalEvents-13pKKKZj.js";import{u as ae}from"./useJoinServer-VYpKHgtr.js";import"./_commonjsHelpers-CE1G-McA.js";import"./ConnectionErrorModal-BTEAVjbL.js";import"./logout-DfWc_cxe.js";const oe=x("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function se(t){const[s,i]=g(""),[a,o]=g(null),[l,r]=g(!1),c=()=>{l()||(r(!0),o(null),L(t.server.id,s()).then(()=>{te(t.server.id),t.done(),t.close()}).catch(v=>o(v)).finally(()=>r(!1)))},p=e(M,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(h,{onClick:c,margin:0,get label(){return l()?"Restoring...":"Restore"},primary:!0})}});return e(F,{get close(){return t.close},get title(){return`Undo Delete ${t.server.name}`},actionButtons:p,ignoreBackgroundClick:!0,get children(){return e(oe,{get children(){return[e(k,{label:"Confirm Password",type:"password",get value(){return s()},onText:i}),e(u,{get when(){return a()},get children(){return e(S,{color:"var(--alert-color)",size:12,get children(){return a()?.message}})}})]}})}})}var ie=b("<div>"),le=b("<div style=display:flex;flex-direction:column;gap:4px;margin-bottom:10px>"),ce=b("<div style=margin-bottom:4px>"),ue=b("<div style=margin-bottom:10px>");function _e(){const t=z(),{width:s}=V(),[i,a]=g(!1),[o,l]=g(null),[r,c]=g(null),p=()=>({name:r()?.name||"",verified:r()?.verified||!1,password:""});ne()(n=>{n[0].id===r()?.id&&c({...r(),scheduledForDeletion:{scheduledAt:Date.now()}})});const[y,P,w]=O(p);T(()=>{E(t.serverId).then(c)});const A=()=>i()?"Saving...":"Save Changes",$=async()=>{if(i())return;a(!0),l(null);const n=P();await j(t.serverId,n).then(()=>{c(()=>({...r(),...n,password:""}))}).catch(_=>{l(_.message)}).finally(()=>a(!1))};return e(u,{get when(){return r()},get children(){return e(de,{get children(){return e(ge,{get children(){return[e(X,{get class(){return d`
              margin-bottom: 15px;
            `},margin:0,maxHeight:250,animate:!0,get url(){return R(r())},get hexColor(){return r().hexColor},get children(){return e(me,{get children(){return[C(()=>r&&e(ee,{animate:!0,get server(){return r()},get size(){return s()<=1100?70:100}})),e(ve,{get children(){return[(()=>{var n=ie();return f(n,()=>r().name),n})(),e(S,{opacity:.7,size:14,get children(){return[C(()=>JSON.stringify(r()._count.serverMembers))," members"]}})]}})]}})}}),e(Q,{get children(){return[e(I,{href:"../../",icon:"home",title:"Moderation"}),e(I,{get title(){return r()?.name},icon:"dns"})]}}),(()=>{var n=le();return f(n,e(S,{size:14,style:{"margin-left":"45px"},children:"Created By"}),null),f(n,e(W,{get user(){return r()?.createdBy},get class(){return d`
                border: none;
                border-radius: 6px;
                background: rgba(255, 255, 255, 0.05);
              `}}),null),n})(),e(u,{get when(){return r()?.publicServer},get children(){return e(he,{get server(){return r()}})}}),e(u,{get when(){return!r()?.scheduledForDeletion},get children(){return e(pe,{get serverId(){return r()?.id}})}}),e(u,{get when(){return r()?.scheduledForDeletion},get children(){return e(fe,{get server(){return r()},done:()=>{c({...r(),scheduledForDeletion:void 0})}})}}),e(m,{label:"Server Name",icon:"edit",get children(){return e(k,{get value(){return y().name},onText:n=>w("name",n)})}}),e(m,{label:"Verified",icon:"verified",get children(){return e(K,{get checked(){return y().verified},onChange:n=>w("verified",n)})}}),(()=>{var n=ce();return f(n,e(G,{title:"Members",get search(){return t.serverId},hideSearchBar:!0,noMargin:!0})),n})(),(()=>{var n=ue();return f(n,e(H,{title:"Server Audit Logs",get search(){return t.serverId},hideSearchBar:!0,noMargin:!0})),n})(),e(Y,{get search(){return t.serverId},style:{margin:0}}),e(u,{get when(){return Object.keys(P()).length},get children(){return[e(m,{label:"Confirm Admin Password",icon:"security",get class(){return d`
                margin-top: 10px;
              `},get children(){return e(k,{type:"password",get value(){return y().password},onText:n=>w("password",n)})}}),e(u,{get when(){return o()},get children(){return e(S,{color:"var(--alert-color)",get children(){return o()}})}}),e(h,{iconName:"save",get label(){return A()},get class(){return d`
                align-self: flex-end;
              `},onClick:$})]}})]}})}})}})}const de=x(B)`
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
  margin-top: 10px;
`,ge=x(B)`
  margin: 10px;
`,me=x(M)`
  display: flex;
  align-items: center;
  margin-left: 30px;
  height: 100%;
  z-index: 11111;
`,ve=x(B)`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  z-index: 1111;
  background: rgba(0, 0, 0, 0.86);
  backdrop-filter: blur(34px);
  padding: 10px;
  border-radius: 8px;
`,he=t=>{const{joinPublicById:s,joining:i}=ae(),a=J(),[o,l]=g(!!t.server.publicServer.pinnedAt),r=()=>a.servers.get(t.server.id),c=async()=>{r()||await s(t.server.id)},p=async()=>{if(o())return N(t.server.id).then(()=>l(!1)).catch(v=>D(v.message));q(t.server.id).then(()=>l(!0)).catch(v=>D(v.message))};return[e(m,{icon:"public",label:"Public Server",get children(){return e(h,{onClick:c,get label(){return C(()=>!!r())()?"Visit":i()?"Joining...":"Join Server"},primary:!0})}}),e(m,{get class(){return d`
          && {
            margin-bottom: 20px;
          }
        `},icon:"public",label:"Pin Server",get children(){return e(h,{onClick:p,get label(){return o()?"Unpin Server":"Pin Server"},get color(){return o()?"var(--alert-color)":"var(--primary-color)"},primary:!0})}})]},pe=t=>{const{createPortal:s}=U(),i=()=>{s(a=>e(Z,{close:a,get servers(){return[{id:t.serverId}]},done:()=>{}}))};return e(m,{get class(){return d`
        && {
          margin-bottom: 20px;
        }
      `},icon:"delete",label:"Delete Server",get children(){return e(h,{onClick:i,label:"Delete Server",color:"var(--alert-color)",primary:!0})}})},fe=t=>{const{createPortal:s}=U(),i=()=>{s(r=>e(se,{close:r,get server(){return t.server},get done(){return t.done}}))},a=7200*60*1e3,o=()=>t.server.scheduledForDeletion.scheduledAt+a,l=()=>re(o());return e(m,{get class(){return d`
        && {
          margin-bottom: 20px;
        }
      `},icon:"undo",label:"Scheduled for Deletion",get description(){return`Server will be deleted ${l()}`},get children(){return e(h,{onClick:i,label:"Undo",color:"var(--alert-color)",primary:!0})}})};export{_e as default};
//# sourceMappingURL=ServerPage-BRLzs-Hh.js.map
