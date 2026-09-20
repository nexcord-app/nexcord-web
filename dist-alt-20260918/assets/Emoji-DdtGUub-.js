import{L as s,c as t,S as o,u as c,s as a,au as h,bD as l}from"./useStore-B0mu5xqR.js";import{T as u}from"./Tooltip-BRibjVCh.js";const g=a("img")`
  border-radius: 4px;
  height: 18px;
  width: 18px;
  flex-shrink: 0;
`,d=c`
  display: flex;
  align-items: center;
  justify-content: center;
`,w=e=>{const{hasFocus:n}=s(),r=()=>{if(e.icon.includes(".")){const i=new URL(`${h.NERIMITY_CDN}emojis/${e.icon}${(!e.hovered||!n())&&e.icon?.endsWith(".gif")?"?type=webp":""}`);return e.resize&&i.searchParams.set("size",e.resize.toString()),i.href}return l(e.icon)};return t(o,{get when(){return e.icon},get children(){return t(u,{get tooltip(){return e.title},anchor:"right",class:d,get children(){return t(g,{get src(){return r()},get style(){return{height:`${e.size}px`,width:`${e.size}px`}}})}})}})};export{w as E};
//# sourceMappingURL=Emoji-DdtGUub-.js.map
