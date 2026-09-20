import{D as L,H as t,c as e,I as P,S as k,f as _,e as h,r as Q,v as p,aM as V,ad as Y,o as $,g as H,F as X,t as R,b as q,a6 as G,ae as j,b8 as Z,m as ee,h as te}from"./ModerationService-DJHF7x8B.js";import{T as y,C as U,B as N,D as re,M as u}from"./Text-C_egcRFS.js";import{a as w,F as C,u as x,s as S}from"./Flexbox-CtT2pseo.js";import{b as M,e as D,a_ as ne,a$ as oe,a9 as ie}from"./useStore-DBb0Z1Ja.js";import{B as ae,a as B}from"./Breadcrumb-Buww-gge.js";import{S as T,a as W}from"./SettingsBlock-BIzHvMnQ.js";import{N as se}from"./Notice-CRa-IqGB.js";import{B as J}from"./Block-Di9C9f_D.js";import{I as b}from"./Input-C6-Ij65G.js";import{E as ce}from"./EmojiPicker-BHCQNhWM.js";import{e as z}from"./emojiToUrl-CBcAlSxf.js";import{U as F}from"./UserActivity-C2e_S-2t.js";import"./useResizeObserver-C51kiEgZ.js";import"./_commonjsHelpers-CE1G-McA.js";import"./index-1IzJrYOd.js";import"./Skeleton-Br6MF7Mb.js";import"./index-MrgJRm3H.js";import"./date-2y0WWb20.js";import"./languages-DKaNROAR.js";import"./Activity-De4vrugB.js";var le=R("<img height=40 width=40 style=object-fit:contain>"),ue=R("<div><a target=_blank href=https://discord.gg/kdArWJ8DU2>https://discord.gg/kdArWJ8DU2");const ge=S("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  flex-shrink: 0;
`,de=S("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 10px;
  flex-shrink: 0;
`,me=S("div")`
  position: absolute;
  inset: 0;
  z-index: 1111;
  cursor: not-allowed;
`,pe=S("div")`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 10px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  padding: 10px;

  margin-bottom: 6px;
`,O=S("div")`
  padding: 2px;
  background: rgba(255, 255, 255, 0.04);
  flex: 1;
  border-radius: 8px;
  padding-left: 6px;
  padding-right: 6px;
  min-width: 250px;
  .activityImage {
    background: rgba(0, 0, 0, 0.2);
  }
`;function We(){const{header:i}=M();L(()=>{i.updateHeader({title:t("3i16p4")+" - "+t("7wUU7C"),iconName:"settings"})});const n=D()?.isElectron;return e(ge,{get children(){return[e(ae,{get children(){return[e(B,{href:"/app",icon:"home",get title(){return t("t5AkH8")}}),e(B,{get title(){return t("7wUU7C")}})]}}),e(pe,{get children(){return[e(w,{gap:12,itemsCenter:!0,get children(){return[e(P,{name:"extension"}),e(C,{gap:4,get children(){return[e(y,{size:14,get children(){return t("NPuux8")}}),e(y,{size:12,opacity:.6,get children(){return t("pv4+yw")}})]}})]}}),e(w,{gap:6,itemsCenter:!0,justifyCenter:!0,wrap:!0,get class(){return x`
            margin-top: 6px;
          `},get children(){return[e(O,{get children(){return e(F,{get exampleActivity(){return{action:t("ghW18c"),name:"YouTube",startedAt:Date.now()-3e3,endsAt:Date.now()+1e4,imgSrc:"https://nerimity.com/assets/logo.png",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",title:"Why Nerimity is the best",subtitle:"Good YouTuber"}}})}}),e(O,{get children(){return e(F,{get exampleActivity(){return{action:t("IBAofj"),name:"Spotify",startedAt:Date.now()-3e4,endsAt:Date.now()+1e5,imgSrc:"https://nerimity.com/assets/logo.png",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",title:"Ner Ner Nerimity!",subtitle:"Nerimity"}}})}})]}}),e(w,{get class(){return x`
            align-self: flex-end;
          `},gap:6,wrap:!0,get children(){return[e(U,{target:"_blank",rel:"noopener noreferrer",href:"https://addons.mozilla.org/firefox/addon/nerimity-rpc",get children(){return e(N,{margin:[10,0,0,0],iconName:"extension",primary:!0,get label(){return t("Vzq6tt",{store:"Firefox Add-ons"})}})}}),e(U,{target:"_blank",rel:"noopener noreferrer",href:"https://chromewebstore.google.com/detail/nerimity-rpc/lgboikjogeocndkamelapkbngmfjfgaf",get children(){return e(N,{margin:[10,0,0,0],iconName:"extension",primary:!0,get label(){return t("Vzq6tt",{store:"Chrome Web Store"})}})}})]}})]}}),e(ye,{}),e(xe,{}),e(k,{when:!n,get children(){return e(se,{type:"info",get description(){return t("T/3+cv")}})}}),e(de,{get children(){return[e(k,{when:!n,get children(){return e(me,{})}}),e(he,{})]}})]}})}function he(){const[i,n]=h([]),[o,s]=Y(p.PROGRAM_ACTIVITY_STATUS,[]),{createPortal:g}=_(),c=()=>{D()?.getRunningPrograms(JSON.parse(JSON.stringify(o()))).then(n)},l=()=>{D()?.restartActivityStatus(JSON.parse(JSON.stringify(o())))},m=(r,d)=>{const f=[...o()];f[r]=d,s(f),l()},a=(r,d)=>{g(f=>e(fe,{onEdit:A=>m(r,A),program:d,close:f}))};$(()=>{if(!D()?.isElectron)return;c();const r=window.setInterval(()=>{c()},3e3);H(()=>{window.clearInterval(r)})});const v=()=>i().map(r=>({id:r.filename,label:r.name,description:r.filename,data:r})),E=r=>{const d={...r.data,action:t("CwnjXN")};s([...o(),d]),c(),l()},I=r=>{s(o().filter(d=>d!==r)),c(),l()},K=r=>{if(r)return z(r)};return e(W,{get children(){return[e(T,{icon:"gamepad",get label(){return t("gOVADg")},get description(){return t("MF8Uw0")},get children(){return e(k,{get when(){return o().length+1},keyed:!0,get children(){return e(re,{onChange:E,get items(){return v()},get class(){return x`
              width: 200px;
            `}})}})}}),e(X,{get each(){return o()},children:(r,d)=>e(J,{get children(){return e(w,{gap:12,get class(){return x`
                flex: 1;
                align-items: center;
              `},get children(){return[e(k,{get when(){return K(r.emoji)},children:f=>(()=>{var A=le();return q(()=>G(A,"src",f())),A})()}),e(C,{gap:4,get class(){return x`
                  flex: 1;
                `},get children(){return[e(w,{gap:5,itemsCenter:!0,get children(){return[e(y,{bold:!0,get children(){return r.action}}),e(y,{opacity:.8,get children(){return r.name}})]}}),e(y,{opacity:.6,size:14,get children(){return r.filename}})]}}),e(w,{get children(){return[e(N,{iconName:"delete",onClick:()=>I(r),get label(){return t("iN06z6")},color:"var(--alert-color)"}),e(N,{iconName:"edit",get label(){return t("ROKIAX")},onClick:()=>a(d(),r)})]}})]}})}})})]}})}const fe=i=>{const[n,o]=h(i.program),[s,g]=h(!1),c=M(),l=a=>{const v=c.servers.customEmojiNamesToEmoji()[a],I=ie(a)||`${v.id}.${v.gif?"gif":"webp"}`;o({...n(),emoji:I}),g(!1)},m=te(()=>{if(n().emoji)return z(n().emoji)});return e(u.Root,{get close(){return i.close},get children(){return[e(u.Header,{get title(){return t("jpQQ0F")},icon:"edit"}),e(u.Body,{get class(){return x`
          overflow: auto;
          min-width: 420px;
        `},get children(){return e(C,{padding:6,gap:6,get children(){return[e(b,{get label(){return t("9w/LrN")},get value(){return n().filename},onText:a=>o({...n(),filename:a})}),e(b,{get label(){return t("EYUieT")},get value(){return n().action},onText:a=>o({...n(),action:a})}),e(b,{get label(){return t("EYdkoS")},get value(){return n().name},onText:a=>o({...n(),name:a})}),e(W,{get children(){return[e(T,{get label(){return t("0BuCNw")},get icon(){return m()?void 0:"face"},get iconSrc(){return m()},onClick:()=>g(!s()),onClickIcon:"keyboard_arrow_down"}),e(k,{get when(){return s()},get children(){return e(J,{style:{display:"flex","margin-top":"-1px",padding:"0"},get children(){return e(ce,{close:()=>{},onClick:l})}})}})]}})]}})}}),e(u.Footer,{get children(){return[e(u.Button,{get label(){return t("dj/WM5")},get onClick(){return i.close},iconName:"close",alert:!0}),e(u.Button,{get label(){return t("5E9MNs")},onClick:()=>{i.onEdit(n()),i.close()},iconName:"edit",primary:!0})]}})]}})},ye=()=>{const{createPortal:i}=_(),n=ne(),[o,s]=h(Q(p.DISCORD_USER_ID,"")),g=()=>{const c=o()?.trim();if(!c){j(p.DISCORD_USER_ID,""),n.restart();return}i(l=>e(we,{close:()=>{j(p.DISCORD_USER_ID,""),s(""),n.restart(),l()},onJoinedClick:()=>{j(p.DISCORD_USER_ID,c),s(c),n.restart(),l()}}))};return e(T,{get label(){return t("SFzbOF")},get description(){return t("IVjuXq")},get children(){return e(b,{get placeholder(){return t("TZfT92")},onText:s,get value(){return o()},onBlur:g})}})},we=i=>e(u.Root,{get close(){return i.close},doNotCloseOnBackgroundClick:!0,desktopMaxWidth:500,get children(){return[e(u.Header,{get title(){return t("SFzbOF")},icon:"edit"}),e(u.Body,{get children(){return e(C,{padding:6,gap:6,get children(){return e(y,{get children(){return[ee(()=>t("tJ+htD")),ue()]}})}})}}),e(u.Footer,{get children(){return[e(u.Button,{get label(){return t("UOJW54")},alert:!0,get onClick(){return i.close},iconName:"close"}),e(u.Button,{get label(){return t("9+aQac")},get onClick(){return i.onJoinedClick},primary:!0,iconName:"check"})]}})]}}),xe=()=>{const i=oe(),n=V(p.LASTFM,{username:"",apiKey:""}),[o,s]=h(n.username),[g,c]=h(n.apiKey),[l,m]=h(!1),a=()=>{Z(p.LASTFM,{username:o().trim(),apiKey:g().trim()}),i.restart()};return e(T,{get label(){return t("fF31a5")},get description(){return t("t0MTiW")},get children(){return e(C,{gap:6,get children(){return[e(b,{get placeholder(){return t("L01CY5")},onText:s,get value(){return o()},onBlur:a}),e(b,{get placeholder(){return t("vWWOJh")},onText:c,get value(){return g()},onBlur:a,get type(){return l()?"text":"password"},get suffix(){return e(P,{get name(){return l()?"visibility_off":"visibility"},size:18,style:{cursor:"pointer",opacity:.6,"padding-right":"10px","flex-shrink":0,"align-self":"center"},onClick:()=>m(!l())})}})]}})}})};export{We as default};
//# sourceMappingURL=ActivityStatus-BuxyNbg_.js.map
