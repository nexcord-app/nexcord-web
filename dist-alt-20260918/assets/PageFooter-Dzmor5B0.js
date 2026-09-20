import{o as S,c as e,A as _,S as L,W as D,X as w,e as I,r as j,v as T,f as F,m as M,I as P,t as C,i as b}from"./ModerationService-DpHh3JQr.js";import{s as g,u as d,a as h}from"./Flexbox-Cufh4wPc.js";import{o as U,U as A,V as N}from"./useStore-DEZEOTom.js";import{I as y}from"./browser-pi_zKfjJ.js";import{S as m}from"./Skeleton-DNejdNgG.js";import{A as Y,C as n,D as E}from"./Text-CN5caMAL.js";import{L as H}from"./LogoutModal-CU_iC9mQ.js";import{l as k,g as O,a as $,s as z}from"./languages-hMGia7zW.js";import{E as R}from"./ClanTag-C2eIxXmO.js";import{L as X}from"./LogoMono-CtphE0K0.js";const K={start:{day:25,month:10},dayDuration:9},v=Date.now();V(K);function V({start:t,dayDuration:s}){const r=new Date;r.setDate(t.day),r.setMonth(t.month-1),r.setHours(0),r.setMinutes(0);const a=new Date(r);return a.setDate(r.getDate()+s),a.setHours(23),a.setMinutes(59),r.getFullYear()!==a.getFullYear()&&(a.setFullYear(r.getFullYear()),r.setFullYear(r.getFullYear()-1)),v>r.getTime()&&v<a.getTime()}const q=()=>"/assets/logo.png",W=g("header")`
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
`,B=d`
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
    ${t=>t.primary?`
        background-color: var(--primary-color);
        opacity: 0.9;
        transition: 0.2s;
        &:hover {
          opacity: 1;
        }
      `:void 0}
  }
`,ee=d`
  margin-right: 5px;
`,[f,x]=I(null);function be(t){S(async()=>{if(!t.hideAccountInfo){if(!j(T.USER_TOKEN,null))return x(!1);setTimeout(()=>{s()},1e3)}});const s=async()=>{const r=await U().catch(a=>{if(a.code===0)return setTimeout(()=>{s()},5e3),"retrying"});if(r!=="retrying"){if(!r)return x(!1);x(r.user)}};return e(W,{class:"header-container",get children(){return[e(_,{href:"/",class:B,get children(){return[e(J,{get src(){return q()},alt:"logo"}),e(G,{children:"Nexcord"})]}}),e(Q,{get children(){return e(L,{get when(){return!t.hideAccountInfo},get children(){return e(D,{get fallback(){return e(te,{})},get children(){return[e(w,{get when(){return f()===!1},get children(){return e(ne,{})}}),e(w,{get when(){return f()},get children(){return e(re,{get user(){return f()}})}})]}})}})}})]}})}function te(){return[e(m.Item,{width:"92px",height:"34px"}),e(m.Item,{width:"112px",height:"34px"}),e(m.Item,{width:"38px",height:"38px",style:{"border-radius":"50%","margin-left":"6px","margin-right":"6px"}})]}function re(t){const[s]=y(),{createPortal:r}=F();return[e(p,{href:"#",color:"var(--alert-color)",onClick:()=>{r(l=>e(H,{close:l}))},get label(){return s("TDpM63")},icon:"logout"}),e(p,{href:"/app",get label(){return s("wLOS2t")},primary:!0,icon:"open_in_browser"}),e(Y,{size:34,get user(){return t.user},get class(){return d`
          margin-left: 6px;
          margin-right: 6px;
        `}})]}function ne(){const[t]=y();return[e(p,{href:"/login",get label(){return t("Sglsl2")},icon:"login"}),e(p,{href:"/register",get label(){return t("dnV8X4")},class:"register-button",icon:"add"})]}function p(t){return e(Z,{get href(){return t.href},get onClick(){return t.onClick},get class(){return t.class},get primary(){return t.primary||!1},get style(){return{color:t.color}},get children(){return[e(L,{get when(){return t.icon},get children(){return e(P,{get name(){return t.icon},get color(){return t.color},class:ee})}}),M(()=>t.label)]}})}var ae=C("<span>"),ie=C("<div class=languageDropdown>");const oe=g(h)`
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
`,o=d`
  display: flex;
  align-items: center;
  justify-content: center;
`,le=g(h)`
  gap: 10px;
  flex-shrink: 0;
`;function ke(){return e(oe,{get children(){return[e(h,{gap:10,class:"footer-links",get children(){return[e(n,{decoration:!0,href:"/privacy",children:"Privacy Policy"}),e(n,{decoration:!0,href:"/terms-and-conditions",children:"Terms And Conditions"})]}}),e(h,{class:"language-and-socials",itemsCenter:!0,gap:10,justifyCenter:!0,get children(){return[e(ce,{}),e(le,{gap:10,class:"social-links",get children(){return[e(n,{class:o,href:"https://nerimity.com/i/nerimity",target:"_blank",rel:"noopener noreferrer",get children(){return e(se,{get children(){return e(X,{})}})}}),e(n,{class:o,href:"https://discord.gg/7PXjkSd",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/discord.svg",alt:"discord"})}}),e(n,{class:o,href:"https://twitter.com/nerimity",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/twitter.svg",alt:"twitter"})}}),e(n,{class:o,href:"https://bsky.app/profile/nerimity.com",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/bluesky.svg",alt:"bluesky"})}}),e(n,{class:o,href:"https://mastodon.social/@nerimity",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/mastodon.svg",alt:"mastodon"})}}),e(n,{class:o,href:"https://www.reddit.com/r/nerimitychat",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/reddit.svg",alt:"reddit"})}}),e(n,{class:o,href:"https://www.threads.com/@nerimity",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/threads.svg",alt:"threads"})}}),e(n,{class:o,href:"https://www.youtube.com/@Nerimity",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/youtube.svg",alt:"youtube"})}}),e(n,{class:o,href:"https://www.producthunt.com/posts/nerimity",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/producthunt.svg",alt:"product hunt"})}}),e(n,{class:o,href:"https://supertigerdev.itch.io/nerimity",target:"_blank",rel:"noopener noreferrer",get children(){return e(c,{src:"/assets/itchio.svg",alt:"itchio"})}})]}})]}})]}})}const ce=()=>{const[,t]=y(),s=Object.keys(k).map(l=>{const i=k[l];return{id:l.replace("-","_"),get label(){return[e(R,{get class(){return d`
                height: 22px;
                width: 22px;
                align-self: flex-start;
                margin-right: 6px;
              `},get name(){return N(i.emoji)},get url(){return A(i.emoji)}}),(()=>{var u=ae();return b(u,()=>i.nativeName??i.name),u})()]}}}),r=()=>O()||"en-gb",a=async l=>{const i=l.id;if(i!=="en_gb"){const u=await $(i);u&&t.addResources(i,"translation",u)}t.changeLanguage(i),z(i)};return(()=>{var l=ie();return b(l,e(E,{items:s,get selectedId(){return r()},onChange:a})),l})()};export{be as P,ke as a};
//# sourceMappingURL=PageFooter-Dzmor5B0.js.map
