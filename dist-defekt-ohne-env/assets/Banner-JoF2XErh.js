import{e as g,t as c,i as f,c as r,m as b,S as a,b as m,a8 as v,C as x}from"./ModerationService-7nF9_67y.js";import{s as i,F as w}from"./Flexbox-DahX4I5v.js";var y=c("<div>");const $=i(w)`
  display: flex;
  position: relative;
  aspect-ratio: 30/12;
  flex-shrink: 0;
  border-radius: ${e=>e.radius}px;
  overflow: hidden;
  width: 100%;
`,S=i("img")`
  position: absolute;
  inset: 0;
  border-radius: ${e=>e.radius}px;
  filter: brightness(
    ${e=>e.brightness===void 0?"70":e.brightness}%
  );
  object-fit: cover;
  height: 100%;
  width: 100%;
`,C=i("div")`
  position: absolute;
  inset: 0;
  border-radius: ${e=>e.radius}px;
  filter: brightness(
    ${e=>e.brightness===void 0?"70":e.brightness}%
  );
  object-fit: cover;
  height: 100%;
  width: 100%;
  background: ${e=>e.color};
`;function z(e){const{shouldAnimate:u}=x(),[l,s]=g(!1),n=()=>{if(!e.url)return;const t=new URL(e.url);return e.resize&&t.searchParams.set("size",e.resize.toString()),!e.url?.endsWith(".gif")&&!e.url.endsWith("#a")||(!u(l())||!e.animate)&&t.searchParams.set("type","webp"),t.href},d=()=>{const t={flex:"1"};return e.maxHeight!==void 0&&(t["max-height"]=e.maxHeight+"px"),t},o=()=>({padding:(e.margin===void 0?10:e.margin)+"px",display:"flex","flex-shrink":"0",overflow:"hidden"});return(()=>{var t=y();return f(t,r($,{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),get radius(){return e.radius||8},get class(){return e.class},get style(){return d()},get children(){return[r(a,{get when(){return n()},get children(){return r(S,{class:"banner-inner",get radius(){return e.radius||8},get brightness(){return e.brightness},get src(){return n()},alt:"Banner"})}}),r(a,{get when(){return!n()},get children(){return r(C,{class:"banner-inner",get radius(){return e.radius||8},get brightness(){return e.brightness},get color(){return e.hexColor}})}}),b(()=>e.children)]}})),m(h=>v(t,o(),h)),t})()}export{z as B};
//# sourceMappingURL=Banner-JoF2XErh.js.map
