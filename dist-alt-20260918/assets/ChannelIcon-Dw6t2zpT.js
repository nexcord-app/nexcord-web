import{c as n,S as t,I as s,T as l,a5 as c,s as a,au as u,bD as g,F as h}from"./useStore-C81yKXnX.js";const d=a(h)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;
  user-select: none;

  background-color: rgba(255, 255, 255, 0.1);
  padding: 4px;
  border-radius: 4px;
`,m=a("img")`
  border-radius: 4px;
  height: 18px;
  width: 18px;
  object-fit: scale-down;
`,x=e=>{const i=()=>{if(e.icon.includes(".")){const r=new URL(`${u.NERIMITY_CDN}emojis/${e.icon}${!e.hovered&&e.icon?.endsWith(".gif")?"?type=webp":""}`);return r.searchParams.set("size","36"),r.href}return g(e.icon)},o=()=>{if(e.type===c.CATEGORY)return"segment"};return n(d,{get class(){return e.class},get children(){return[n(t,{get when(){return!e.icon},get children(){return n(t,{get when(){return e.type!==c.SERVER_TEXT},get fallback(){return n(l,{color:"rgba(255,255,255,0.6)",children:"#"})},get children(){return n(s,{get name(){return o()},color:"rgba(255,255,255,0.6)",size:18})}})}}),n(t,{get when(){return e.icon},get children(){return n(m,{get src(){return i()}})}})]}})};export{x as C};
//# sourceMappingURL=ChannelIcon-Dw6t2zpT.js.map
