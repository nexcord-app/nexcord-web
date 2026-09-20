import{o as S,c as e,A as _,S as L,W as D,X as b,e as I,r as j,v as T,f as F,m as M,I as P,t as C,i as y}from"./ModerationService--RmbjC5p.js";import{s as g,u,a as h}from"./Flexbox-DdRgUkVN.js";import{o as U,U as A,V as N}from"./useStore-B8c8g-Rg.js";import{I as w}from"./browser-BunxtBnb.js";import{S as f}from"./Skeleton-B5QliNYZ.js";import{A as Y,C as n,D as E}from"./Text-CVNHmjKJ.js";import{L as H}from"./LogoutModal-Be7MkMP9.js";import{l as k,g as O,a as $,s as z}from"./languages-Cb1WEjVH.js";import{E as R}from"./ClanTag-MlhFir4K.js";import{L as X}from"./LogoMono-Bbm6vX6Z.js";const K={start:{day:25,month:10},dayDuration:9},v=Date.now();V(K);function V({start:r,dayDuration:s}){const t=new Date;t.setDate(r.day),t.setMonth(r.month-1),t.setHours(0),t.setMinutes(0);const a=new Date(t);return a.setDate(t.getDate()+s),a.setHours(23),a.setMinutes(59),t.getFullYear()!==a.getFullYear()&&(a.setFullYear(t.getFullYear()),t.setFullYear(t.getFullYear()-1)),v>t.getTime()&&v<a.getTime()}const q=()=>"/assets/logo.png",W=g("header")`
  display: flex;
  align-items: center;
  height: 58px;
  flex-shrink: 0;
  &:after {
    background-color: var(--pane-color);
  }
  border: solid 1px rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  align-self: center;
  margin-top: 14px;
  box-sizing: border-box;

  @media (max-width: 820px) {
    margin-left: 10px;
    margin-right: 10px;
    width: calc(100% - 20px);
  }
`,B=u`
  display: flex;
  align-items: center;
  font-size: 20px;
  align-self: center;
  height: 38px;
  padding-left: 6px;
  padding-right: 6px;
  margin-left: 8px;
  color: white;
  text-decoration: none;
  transition: 0.2s;
  border-radius: 6px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`,G=g("div")`
  margin-left: 10px;
  padding-right: 4px;
  font-weight: bold;
  @media (max-width: 500px) {
    display: none;
  }
`,J=g("img")`
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.86);
  backdrop-filter: blur(34px);
`,Q=g("nav")`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  margin-right: 4px;

  .register-button {
    background: #4c93ff;
    background: linear-gradient(to right, #4c93ff 0%, #6a5dff 100%);
    margin-right: 8px;
    &:hover {
      opacity: 0.8;
    }
  }
`,Z=g("a")`
  display: flex;
  align-items: center;
  font-size: 14px;
  transition: 0.2s;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  height: 34px;
  padding-left: 8px;
  padding-right: 8px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  && {
    ${r=>r.primary?`
        background-color: var(--primary-color);
        opacity: 0.9;
        transition: 0.2s;
        &:hover {
          opacity: 1;
        }
      `:void 0}
  }
`,ee=u`
  margin-right: 5px;
`,[m,x]=I(null);function ye(r){S(async()=>{if(!r.hideAccountInfo){if(!j(T.USER_TOKEN,null))return x(!1);setTimeout(()=>{s()},1e3)}});const s=async()=>{const t=await U().catch(a=>{if(a.code===0)return setTimeout(()=>{s()},5e3),"retrying"});if(t!=="retrying"){if(!t)return x(!1);x(t.user)}};return e(W,{class:"header-container",get children(){return[e(_,{href:"/",class:B,get children(){return[e(J,{get src(){return q()},alt:"logo"}),e(G,{children:"Nexcord"})]}}),e(Q,{get children(){return e(L,{get when(){return!r.hideAccountInfo},get children(){return e(D,{get fallback(){return e(re,{})},get children(){return[e(b,{get when(){return m()===!1},get children(){return e(ne,{})}}),e(b,{get when(){return m()},get children(){return e(te,{get user(){return m()}})}})]}})}})}})]}})}function re(){return[e(f.Item,{width:"92px",height:"34px"}),e(f.Item,{width:"112px",height:"34px"}),e(f.Item,{width:"38px",height:"38px",style:{"border-radius":"50%","margin-left":"6px","margin-right":"6px"}})]}function te(r){const[s]=w(),{createPortal:t}=F();return[e(p,{href:"#",color:"var(--alert-color)",onClick:()=>{t(l=>e(H,{close:l}))},get label(){return s("TDpM63")},icon:"logout"}),e(p,{href:"/app",get label(){return s("wLOS2t")},primary:!0,icon:"open_in_browser"}),e(Y,{size:34,get user(){return r.user},get class(){return u`
          margin-left: 6px;
          margin-right: 6px;
        `}})]}function ne(){const[r]=w();return[e(p,{href:"/login",get label(){return r("Sglsl2")},icon:"login"}),e(p,{href:"/register",get label(){return r("dnV8X4")},class:"register-button",icon:"add"})]}function p(r){return e(Z,{get href(){return r.href},get onClick(){return r.onClick},get class(){return r.class},get primary(){return r.primary||!1},get style(){return{color:r.color}},get children(){return[e(L,{get when(){return r.icon},get children(){return e(P,{get name(){return r.icon},get color(){return r.color},class:ee})}}),M(()=>r.label)]}})}var ae=C("<span>"),oe=C("<div class=languageDropdown>");const ie=g(h)`
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-top: solid 1px rgba(255, 255, 255, 0.2);
  padding: 18px;

  .language-and-socials {
  }

  @media (max-width: 318px) {
    .footer-links {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    .social-links {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (max-width: 549px) {
    .language-and-socials {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
  }

  @media (max-width: 920px) {
    flex-direction: column-reverse;
  }
`,c=g("img")`
  width: 20px;
  height: 20px;
  filter: grayscale(100%);
  opacity: 65%;
  transition: 0.2s;
  &:hover {
    filter: grayscale(15%);
    opacity: 100%;
  }
`,se=g("svg")`
  width: 20px;
  height: 20px;
  filter: grayscale(100%);
  opacity: 65%;
  transition: 0.2s;
  &:hover {
    filter: grayscale(15%);
    opacity: 100%;
  }
`,i=u`
  display: flex;
  align-items: center;
  justify-content: center;
`,le=g(h)`
  gap: 10px;
  flex-shrink: 0;
`;function ke(){return e(ie,{get children(){return[e(h,{gap:10,class:"footer-links",get children(){return[e(n,{decoration:!0,href:"/privacy",children:"Privacy Policy"}),e(n,{decoration:!0,href:"/terms-and-conditions",children:"Terms And Conditions"})]}}),e(h,{class:"language-and-socials",itemsCenter:!0,gap:10,justifyCenter:!0,get children(){return[e(ce,{}),e(le,{gap:10,class:"social-links",get children(){return[e(n,{class:i,href:"https://nexcord.de/i/nexcord",target:"_blank",rel:"noopener noreferrer",get children(){return e(se,{get children(){return e(X,{})}})}}),e(n,{class:i,href:"https://discord.gg/7PXjkSd",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/discord.svg",alt:"discord"})}}),e(n,{class:i,href:"https://twitter.com/nexcord",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/twitter.svg",alt:"twitter"})}}),e(n,{class:i,href:"https://bsky.app/profile/nexcord.de",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/bluesky.svg",alt:"bluesky"})}}),e(n,{class:i,href:"https://mastodon.social/@nexcord",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/mastodon.svg",alt:"mastodon"})}}),e(n,{class:i,href:"https://www.reddit.com/r/nexcordchat",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/reddit.svg",alt:"reddit"})}}),e(n,{class:i,href:"https://www.threads.com/@nexcord",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/threads.svg",alt:"threads"})}}),e(n,{class:i,href:"https://www.youtube.com/@Nexcord",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/youtube.svg",alt:"youtube"})}}),e(n,{class:i,href:"https://www.producthunt.com/posts/nexcord",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/producthunt.svg",alt:"product hunt"})}}),e(n,{class:i,href:"https://supertigerdev.itch.io/nexcord",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/itchio.svg",alt:"itchio"})}})]}})]}})]}})}const ce=()=>{const[,r]=w(),s=Object.keys(k).map(l=>{const o=k[l];return{id:l.replace("-","_"),get label(){return[e(R,{get class(){return u`
                height: 22px;
                width: 22px;
                align-self: flex-start;
                margin-right: 6px;
              `},get name(){return N(o.emoji)},get url(){return A(o.emoji)}}),(()=>{var d=ae();return y(d,()=>o.nativeName??o.name),d})()]}}}),t=()=>O()||"en-gb",a=async l=>{const o=l.id;if(o!=="en_gb"){const d=await $(o);d&&r.addResources(o,"translation",d)}r.changeLanguage(o),z(o)};return(()=>{var l=oe();return y(l,e(E,{items:s,get selectedId(){return t()},onChange:a})),l})()};export{ye as P,ke as a};
//# sourceMappingURL=PageFooter-qkhtqmo-.js.map
