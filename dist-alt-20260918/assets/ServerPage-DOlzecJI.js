import{e as g,c as e,S as m,bH as $,z as N,o as _,m as x,t as B,i as S,a4 as z,C as q,bI as j,bJ as J,f as I,bK as V,q as C,bL as H,aF as W,aG as E}from"./ModerationService-DpHh3JQr.js";import{c as G}from"./createUpdatedSignal-DWVGhoOi.js";import{U as K,A as Q,D as X}from"./ModerationPane-CbdUBJCX.js";import{U as Y,b as Z}from"./UsersAuditLogsPane-Bxm7gNny.js";import{B as f,L as ee,T as w,a as re,A as te,M as b}from"./Text-CN5caMAL.js";import{S as v}from"./SettingsBlock-DKlh9Lz3.js";import{I as k}from"./Input-C3UKcv4e.js";import{B as ne,a as F}from"./Breadcrumb-DaqW7yf5.js";import{B as ae}from"./Banner-DcDL1w1m.js";import{a as R,s as y,u as p,F as P}from"./Flexbox-Cufh4wPc.js";import{f as oe}from"./date-0lMVd4xC.js";import{k as se,h as ie}from"./GlobalEvents-ClnSa_YK.js";import{b as U}from"./useStore-DEZEOTom.js";import{u as le}from"./useJoinServer-D2q3nWLY.js";import{a as ce}from"./RadioBox-H9DE4S8y.js";import"./ConnectionErrorModal-C4jv6DAP.js";import"./logout-Cheb7eVj.js";import"./useResizeObserver-Dz383fBa.js";import"./languages-hMGia7zW.js";import"./_commonjsHelpers-CE1G-McA.js";const ue=y("div")`
  min-width: 260px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
`;function de(t){const[o,c]=g(""),[a,s]=g(null),[i,l]=g(!1),r=()=>{i()||(l(!0),s(null),$(t.server.id,o()).then(()=>{se(t.server.id),t.done(),t.close()}).catch(d=>s(d)).finally(()=>l(!1)))},u=e(R,{style:{"justify-content":"flex-end",flex:1,margin:"5px",gap:"4px"},get children(){return e(f,{onClick:r,margin:0,get label(){return i()?"Restoring...":"Restore"},primary:!0})}});return e(ee,{get close(){return t.close},get title(){return`Undo Delete ${t.server.name}`},actionButtons:u,ignoreBackgroundClick:!0,get children(){return e(ue,{get children(){return[e(k,{label:"Confirm Password",type:"password",get value(){return o()},onText:c}),e(m,{get when(){return a()},get children(){return e(w,{color:"var(--alert-color)",size:12,get children(){return a()?.message}})}})]}})}})}var ge=B("<div>"),me=B("<div style=display:flex;flex-direction:column;gap:4px;margin-bottom:10px>"),he=B("<div style=margin-bottom:4px>"),pe=B("<div style=margin-bottom:10px>");function Ve(){const t=U(),o=N(),{width:c}=q(),[a,s]=g(!1),[i,l]=g(null),[r,u]=g(null),d=()=>({name:r()?.name||"",verified:r()?.verified||!1,password:""});ie()(n=>{n[0].id===r()?.id&&u({...r(),scheduledForDeletion:{scheduledAt:Date.now()}})});const[h,A,D]=G(d);_(()=>{j(o.serverId).then(u)});const O=()=>a()?"Saving...":"Save Changes",L=async()=>{if(a())return;s(!0),l(null);const n=A();await J(o.serverId,n).then(()=>{u(()=>({...r(),...n,password:""}))}).catch(T=>{l(T.message)}).finally(()=>s(!1))};return e(m,{get when(){return r()},get children(){return e(ve,{get children(){return e(fe,{get children(){return[e(ae,{get class(){return p`
              margin-bottom: 15px;
            `},margin:0,maxHeight:250,animate:!0,get url(){return z(r(),"banner")},get hexColor(){return r().hexColor},get children(){return e(Se,{get children(){return[x(()=>r&&e(te,{animate:!0,get server(){return r()},get size(){return c()<=1100?70:100}})),e(be,{get children(){return[(()=>{var n=ge();return S(n,()=>r().name),n})(),e(w,{opacity:.7,size:14,get children(){return[x(()=>JSON.stringify(r()._count.serverMembers))," members"]}})]}})]}})}}),e(ne,{get children(){return[e(F,{href:"../../",icon:"home",title:"Moderation"}),e(F,{get title(){return r()?.name},icon:"dns"})]}}),(()=>{var n=me();return S(n,e(w,{size:14,style:{"margin-left":"45px"},children:"Created By"}),null),S(n,e(Y,{get user(){return r()?.createdBy},get class(){return p`
                border: none;
                border-radius: 6px;
                background: rgba(255, 255, 255, 0.05);
              `}}),null),n})(),e(m,{get when(){return r()?.publicServer},get children(){return e(xe,{get server(){return r()}})}}),e(m,{get when(){return x(()=>!t.account.hasOnlyModBadge())()&&!r()?.scheduledForDeletion},get children(){return e(ye,{get serverId(){return r()?.id}})}}),e(m,{get when(){return!r()?.scheduledForDeletion},get children(){return e(we,{get serverId(){return r()?.id}})}}),e(m,{get when(){return x(()=>!t.account.hasOnlyModBadge())()&&r()?.scheduledForDeletion},get children(){return e(Ce,{get server(){return r()},done:()=>{u({...r(),scheduledForDeletion:void 0})}})}}),e(v,{label:"Server Name",icon:"edit",get children(){return e(k,{get value(){return h().name},onText:n=>D("name",n)})}}),e(v,{label:"Verified",icon:"verified",get children(){return e(re,{get checked(){return h().verified},onChange:n=>D("verified",n)})}}),(()=>{var n=he();return S(n,e(K,{title:"Members",get search(){return o.serverId},hideSearchBar:!0,noMargin:!0})),n})(),(()=>{var n=pe();return S(n,e(Z,{title:"Server Audit Logs",get search(){return o.serverId},hideSearchBar:!0,noMargin:!0})),n})(),e(Q,{get search(){return o.serverId},style:{margin:0}}),e(m,{get when(){return Object.keys(A()).length},get children(){return[e(v,{label:"Confirm Admin Password",icon:"security",get class(){return p`
                margin-top: 10px;
              `},get children(){return e(k,{type:"password",get value(){return h().password},onText:n=>D("password",n)})}}),e(m,{get when(){return i()},get children(){return e(w,{color:"var(--alert-color)",get children(){return i()}})}}),e(f,{iconName:"save",get label(){return O()},get class(){return p`
                align-self: flex-end;
              `},onClick:L})]}})]}})}})}})}const ve=y(P)`
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
  margin-top: 10px;
`,fe=y(P)`
  margin: 10px;
`,Se=y(R)`
  display: flex;
  align-items: center;
  margin-left: 30px;
  height: 100%;
  z-index: 11111;
`,be=y(P)`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  z-index: 1111;
  background: rgba(0, 0, 0, 0.86);
  backdrop-filter: blur(34px);
  padding: 10px;
  border-radius: 8px;
`,xe=t=>{const{joinPublicById:o,joining:c}=le(),a=U(),[s,i]=g(!!t.server.publicServer.pinnedAt),l=()=>a.servers.get(t.server.id),r=async()=>{l()||await o(t.server.id)},u=async()=>{if(s())return V(t.server.id).then(()=>i(!1)).catch(d=>C(d.message));H(t.server.id).then(()=>i(!0)).catch(d=>C(d.message))};return[e(v,{icon:"public",label:"Public Server",get children(){return e(f,{onClick:r,get label(){return x(()=>!!l())()?"Visit":c()?"Joining...":"Join Server"},primary:!0})}}),e(v,{get class(){return p`
          && {
            margin-bottom: 20px;
          }
        `},icon:"public",label:"Pin Server",get children(){return e(f,{onClick:u,get label(){return s()?"Unpin Server":"Pin Server"},get color(){return s()?"var(--alert-color)":"var(--primary-color)"},primary:!0})}})]},ye=t=>{const{createPortal:o}=I(),c=()=>{o(a=>e(X,{close:a,get servers(){return[{id:t.serverId}]},done:()=>{}}))};return e(v,{get class(){return p`
        && {
          margin-bottom: 20px;
        }
      `},icon:"delete",label:"Delete Server",get children(){return e(f,{onClick:c,label:"Delete Server",color:"var(--alert-color)",primary:!0})}})},we=t=>{const{createPortal:o}=I(),c=()=>{const[a,s]=g(""),[i,l]=g(""),[r,u]=g(!1);o(d=>{const M=async()=>{if(!a())return C("Please select a reason");r()||(u(!0),await W({actionType:E.serverDelete,serverId:t.serverId,reason:a()==="Other"?i():a()}).then(()=>{d()}).catch(h=>C(h.message||h.error)).finally(()=>u(!1)))};return e(b.Root,{close:d,doNotCloseOnBackgroundClick:!0,get children(){return[e(b.Header,{title:"Suggest"}),e(b.Body,{get children(){return e(P,{gap:4,get children(){return[e(ce,{items:[{id:"NSFW",label:"NSFW"},{id:"Racist",label:"Racist"},{id:"Inappropriate Name",label:"Inappropriate Name"},{id:"Other",label:"Other"}],get initialId(){return a()},onChange:h=>s(h.id)}),e(m,{get when(){return a()==="Other"},get children(){return e(k,{placeholder:"Reason",onText:l,get value(){return i()}})}})]}})}}),e(b.Footer,{get children(){return e(b.Button,{label:"Suggest",iconName:"check",onClick:M,primary:!0})}})]}})})};return e(v,{get class(){return p`
        && {
          margin-bottom: 20px;
        }
      `},icon:"info",label:"Suggest Action",get children(){return e(f,{onClick:c,label:"Suggest Action",color:"var(--alert-color)",primary:!0})}})},Ce=t=>{const{createPortal:o}=I(),c=()=>{o(l=>e(de,{close:l,get server(){return t.server},get done(){return t.done}}))},a=7200*60*1e3,s=()=>t.server.scheduledForDeletion.scheduledAt+a,i=()=>oe(s());return e(v,{get class(){return p`
        && {
          margin-bottom: 20px;
        }
      `},icon:"undo",label:"Scheduled for Deletion",get description(){return`Server will be deleted ${i()}`},get children(){return e(f,{onClick:c,label:"Undo",color:"var(--alert-color)",primary:!0})}})};export{Ve as default};
//# sourceMappingURL=ServerPage-DOlzecJI.js.map
