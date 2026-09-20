import{L as h,g as E,E as b,Z as j,p as x,c as t,a3 as y,b as S,o as w,T as v,S as f,aB as C,s as c,X as P,W as z,u as k,ac as I,K as M,a as N,af as L,as as o,b$ as R,a1 as A}from"./useStore-C81yKXnX.js";import{A as B}from"./Avatar-CnjpHkJi.js";import{S as V}from"./ServerVerifiedIcon-CDs7ZnN3.js";import{u as D}from"./useJoinServer-VYpKHgtr.js";var T=b("<img loading=lazy>",!0,!1,!1),F=b("<img loading=lazy style=object-fit:contain;width:60px;height:60px;border-radius:6px>",!0,!1,!1);function $(e){const{hasFocus:u}=h(),{createPortal:l}=E(),d=()=>{l(r=>t(H,y({close:r},e)))},s=()=>{if(!e.custom)return e.url;const r=new URL(e.url);return!u()&&e.animated&&r.searchParams.set("type","webp"),e.resize&&r.searchParams.set("size",e.resize.toString()),r.href};return(()=>{var r=T();return j(r,"click",e.clickable?d:void 0,!0),x(i=>{var a=N(e.class,"emoji"),n=s(),g=e.name,m=e.name;return a!==i.e&&L(r,i.e=a),n!==i.t&&o(r,"src",i.t=n),g!==i.a&&o(r,"alt",i.a=g),m!==i.o&&o(r,"title",i.o=m),i},{e:void 0,t:void 0,a:void 0,o:void 0}),r})()}const J=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  gap: 8px;
  position: relative;
  align-self: center;
  min-width: 200px;

  margin: 10px;
`,W=c.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 6px;
  padding-left: 8px;
  padding-right: 8px;

  word-break: break-word;
  white-space: pre-wrap;
`,G=c.div`
  display: flex;
  flex-direction: column;
`;function H(e){const[u,l]=S(null),{hasFocus:d}=h();return w(()=>{!e.custom||!e.id||R(e.id).then(l)}),t(C,{get close(){return e.close},icon:"face",get title(){return e.custom?"Custom Emoji":"Emoji"},get children(){return t(J,{get children(){return[t(W,{get children(){return[(()=>{var s=F();return x(r=>{var i=e.url+(e.animated&&!d()?"?type=webp":""),a=e.name,n=e.name;return i!==r.e&&o(s,"src",r.e=i),a!==r.t&&o(s,"alt",r.t=a),n!==r.a&&o(s,"title",r.a=n),r},{e:void 0,t:void 0,a:void 0}),s})(),t(G,{get children(){return[t(v,{size:18,get children(){return[":",t(v,{size:18,color:"var(--primary-color)",get children(){return e.name}}),":"]}}),t(v,{size:12,opacity:.6,get children(){return e.custom?"Custom Emoji":"Emoji"}})]}})]}}),t(f,{get when(){return e.custom},get children(){return t(X,{get close(){return e.close},get publicServer(){return u()},get name(){return e.name}})}})]}})}})}const K=c.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 6px;
  padding-left: 12px;
  padding-right: 6px;
  border-radius: 6px;
`,O=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`,U=c.span`
  display: inline;
  vertical-align: 1.3;
`;function X(e){const[u,l]=S(!1),{joinPublicById:d,joining:s}=D(),r=P(),{servers:i}=z(),a=()=>e.publicServer?e.publicServer.server?.id:i.customEmojiNamesToEmoji()?.[e.name]?.serverId,n=()=>e.publicServer?.server||i.get(a()),g=()=>i.get(a()),m=()=>{if(g())return r(M.SERVER_MESSAGES(n().id,n().defaultChannelId));s()||d(a())};return t(f,{get when(){return n()},get children(){return t(K,{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),get children(){return[t(B,{get animate(){return u()},size:40,get server(){return n()}}),t(O,{get children(){return[t(U,{get children(){return[t(v,{size:14,get children(){return n().name}}),t(f,{get when(){return e.publicServer?.server?.verified},get children(){return[" ",t(V,{get class(){return k`
                  vertical-align: -3px;
                `}})]}})]}}),t(I,{onClick:m,styles:{"align-self":"flex-start"},iconName:"login",get label(){return g()?"Visit Server":"Join Server"},margin:0})]}})]}})}})}A(["click"]);export{$ as E};
//# sourceMappingURL=Emoji-LHY5apb-.js.map
