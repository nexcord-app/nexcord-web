import{E as T,G as j,p as O,af as J,a as Q,at as N,u,W,M as Y,U as t,e as S,c as e,F as f,I as H,V as k,T as b,ak as B,ac as A,S as C,s as v,g as $,b as D,x as L,y as w,a2 as X,o as G,C as q,aI as _,dl as Z,m as K,i as ee,bX as te,h as re,as as ne}from"./useStore-C81yKXnX.js";import{B as oe,a as P}from"./Breadcrumb-B2nrXbr4.js";import{s as ie,S as R}from"./SettingsBlock-zYSlJJFm.js";import{N as ae}from"./Notice-D4YZaiTY.js";import{D as se}from"./DropDown-VSE3I8gP.js";import{I}from"./Input-CGVbQxvr.js";import{E as ce}from"./EmojiPicker-Bzrd2rmw.js";import{M as s}from"./Modal-CslZPWEr.js";import{e as z}from"./emojiToUrl-DRaDW-q8.js";import{U as F}from"./UserActivity-DHotpRLp.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-DorGCpy9.js";import"./index-1IzJrYOd.js";import"./Avatar-CnjpHkJi.js";import"./Skeleton-C81J_hd6.js";import"./date-BKAW-sdF.js";import"./Activity-CJQIAwqE.js";var le=T("<div>");function de(o){return(()=>{var n=le();return j(n,()=>o.children),O(()=>J(n,Q(ie.block,N(o.borderTopRadius===!1,u`&& {border-top-left-radius: 0; border-top-right-radius: 0; margin-top: 0;}`),N(o.borderBottomRadius===!1,u`&& {border-bottom-left-radius: 0; border-bottom-right-radius: 0; margin-bottom: 0;}`),N(o.borderBottomRadius===!1&&o.borderTopRadius===!1,u`&& {margin-bottom: 1px;}`),o.class))),n})()}var ue=T("<img height=40 width=40 style=object-fit:contain>"),ge=T('<div><div style="background:rgba(255, 255, 255, 0.05);margin-top:-1px">'),me=T("<div><a target=_blank href=https://discord.gg/kdArWJ8DU2>https://discord.gg/kdArWJ8DU2");const pe=v("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  flex-shrink: 0;
`,he=v("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 10px;
  flex-shrink: 0;
`,fe=v("div")`
  position: absolute;
  inset: 0;
  z-index: 1111;
  cursor: not-allowed;
`,be=v("div")`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 10px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  padding: 10px;

  margin-bottom: 6px;
`,M=v("div")`
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
`;function Oe(){const{header:o}=W();Y(()=>{o.updateHeader({title:t("3i16p4")+" - "+t("7wUU7C"),iconName:"settings"})});const n=S()?.isElectron;return e(pe,{get children(){return[e(oe,{get children(){return[e(P,{href:"/app",icon:"home",get title(){return t("t5AkH8")}}),e(P,{get title(){return t("7wUU7C")}})]}}),e(be,{get children(){return[e(f,{gap:12,itemsCenter:!0,get children(){return[e(H,{name:"extension"}),e(k,{gap:4,get children(){return[e(b,{size:14,get children(){return t("NPuux8")}}),e(b,{size:12,opacity:.6,get children(){return t("pv4+yw")}})]}})]}}),e(f,{gap:6,itemsCenter:!0,justifyCenter:!0,wrap:!0,get class(){return u`
            margin-top: 6px;
          `},get children(){return[e(M,{get children(){return e(F,{get exampleActivity(){return{action:t("ghW18c"),name:"YouTube",startedAt:Date.now()-3e3,endsAt:Date.now()+1e4,imgSrc:"https://nerimity.com/assets/logo.png",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",title:"Why Nexcord is the best",subtitle:"Good YouTuber"}}})}}),e(M,{get children(){return e(F,{get exampleActivity(){return{action:t("IBAofj"),name:"Spotify",startedAt:Date.now()-3e4,endsAt:Date.now()+1e5,imgSrc:"https://nerimity.com/assets/logo.png",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",title:"Ner Ner Nexcord!",subtitle:"Nexcord"}}})}})]}}),e(f,{get class(){return u`
            align-self: flex-end;
          `},gap:6,wrap:!0,get children(){return[e(B,{target:"_blank",rel:"noopener noreferrer",href:"https://addons.mozilla.org/en-GB/firefox/addon/nerimity-rpc",get children(){return e(A,{margin:[10,0,0,0],iconName:"extension",primary:!0,get label(){return t("Vzq6tt",{store:"Firefox Add-ons"})}})}}),e(B,{target:"_blank",rel:"noopener noreferrer",href:"https://chromewebstore.google.com/detail/nerimity-rpc/lgboikjogeocndkamelapkbngmfjfgaf",get children(){return e(A,{margin:[10,0,0,0],iconName:"extension",primary:!0,get label(){return t("Vzq6tt",{store:"Chrome Web Store"})}})}})]}})]}}),e(ke,{}),e(C,{when:!n,get children(){return e(ae,{type:"info",get description(){return t("T/3+cv")}})}}),e(he,{get children(){return[e(C,{when:!n,get children(){return e(fe,{})}}),e(xe,{})]}})]}})}function xe(){const[o,n]=D([]),[i,c]=X(w.PROGRAM_ACTIVITY_STATUS,[]),{createPortal:p}=$(),l=()=>{S()?.getRunningPrograms(i()).then(n)},g=()=>{S()?.restartActivityStatus(i())},x=(r,d)=>{const h=[...i()];h[r]=d,c(h),g()},a=(r,d)=>{p(h=>e(we,{onEdit:y=>x(r,y),program:d,close:h}))};G(()=>{if(!S()?.isElectron)return;l();const r=window.setInterval(()=>{l()},3e3);re(()=>{window.clearInterval(r)})});const m=()=>o().map(r=>({id:r.filename,label:r.name,description:r.filename,data:r})),U=r=>{const d={...r.data,action:t("CwnjXN")};c([...i(),d]),l(),g()},E=r=>{c(i().filter(d=>d!==r)),l(),g()},V=r=>{if(r)return z(r)};return e(k,{get children(){return[e(R,{icon:"gamepad",get label(){return t("gOVADg")},get description(){return t("MF8Uw0")},get header(){return!!i().length},get children(){return e(C,{get when(){return i().length+1},keyed:!0,get children(){return e(se,{onChange:U,get items(){return m()},get class(){return u`
              width: 200px;
            `}})}})}}),e(q,{get each(){return i()},children:(r,d)=>e(de,{borderTopRadius:!1,get borderBottomRadius(){return d()===i().length-1},get children(){return e(f,{gap:12,get class(){return u`
                flex: 1;
                align-items: center;
              `},get children(){return[e(C,{get when(){return V(r.emoji)},children:h=>(()=>{var y=ue();return O(()=>ne(y,"src",h())),y})()}),e(k,{gap:4,get class(){return u`
                  flex: 1;
                `},get children(){return[e(f,{gap:5,itemsCenter:!0,get children(){return[e(b,{bold:!0,get children(){return r.action}}),e(b,{opacity:.8,get children(){return r.name}})]}}),e(b,{opacity:.6,size:14,get children(){return r.filename}})]}}),e(f,{get children(){return[e(A,{iconName:"delete",onClick:()=>E(r),get label(){return t("dkeeHL")},color:"var(--alert-color)"}),e(A,{iconName:"edit",get label(){return t("yKWzYO")},onClick:()=>a(d(),r)})]}})]}})}})})]}})}const we=o=>{const[n,i]=D(o.program),[c,p]=D(!1),l=W(),g=a=>{const m=l.servers.customEmojiNamesToEmoji()[a],E=te(a)||`${m.id}.${m.gif?"gif":"webp"}`;i({...n(),emoji:E}),p(!1)},x=ee(()=>{if(n().emoji)return z(n().emoji)});return e(s.Root,{get close(){return o.close},get children(){return[e(s.Header,{get title(){return t("jpQQ0F")},icon:"edit"}),e(s.Body,{get class(){return u`
          overflow: auto;
          min-width: 420px;
        `},get children(){return e(k,{padding:6,gap:6,get children(){return[e(I,{get label(){return t("9w/LrN")},get value(){return n().filename},onText:a=>i({...n(),filename:a})}),e(I,{get label(){return t("EYUieT")},get value(){return n().action},onText:a=>i({...n(),action:a})}),e(I,{get label(){return t("EYdkoS")},get value(){return n().name},onText:a=>i({...n(),name:a})}),(()=>{var a=ge(),m=a.firstChild;return j(a,e(R,{get header(){return c()},get label(){return t("0BuCNw")},get icon(){return x()?void 0:"face"},get iconSrc(){return x()},onClick:()=>p(!c()),onClickIcon:"keyboard_arrow_down"}),m),j(m,e(C,{get when(){return c()},get children(){return e(ce,{close:()=>{},onClick:g})}})),a})()]}})}}),e(s.Footer,{get children(){return[e(s.Button,{get label(){return t("uTU2cL")},get onClick(){return o.close},iconName:"close",alert:!0}),e(s.Button,{get label(){return t("u6ZSPf")},onClick:()=>{o.onEdit(n()),o.close()},iconName:"edit",primary:!0})]}})]}})},ke=()=>{const{createPortal:o}=$(),n=Z(),[i,c]=D(L(w.DISCORD_USER_ID,"")),p=()=>{const l=i()?.trim();if(!l){_(w.DISCORD_USER_ID,""),n.restart();return}o(g=>e(Ce,{close:()=>{_(w.DISCORD_USER_ID,""),c(""),n.restart(),g()},onJoinedClick:()=>{_(w.DISCORD_USER_ID,l),c(l),n.restart(),g()}}))};return e(R,{get label(){return t("SFzbOF")},get description(){return t("IVjuXq")},get children(){return e(I,{get placeholder(){return t("TZfT92")},onText:c,get value(){return i()},onBlur:p})}})},Ce=o=>e(s.Root,{get close(){return o.close},doNotCloseOnBackgroundClick:!0,desktopMaxWidth:500,get children(){return[e(s.Header,{get title(){return t("SFzbOF")},icon:"edit"}),e(s.Body,{get children(){return e(k,{padding:6,gap:6,get children(){return e(b,{get children(){return[K(()=>t("tJ+htD")),me()]}})}})}}),e(s.Footer,{get children(){return[e(s.Button,{get label(){return t("YIMSSZ")},alert:!0,get onClick(){return o.close},iconName:"close"}),e(s.Button,{get label(){return t("9+aQac")},get onClick(){return o.onJoinedClick},primary:!0,iconName:"check"})]}})]}});export{Oe as default};
//# sourceMappingURL=ActivityStatus-CePlHF6_.js.map
