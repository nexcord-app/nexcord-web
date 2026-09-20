import{L as g,E as h,G as o,c as t,m as c,S as s,p as f,s as i,V as b,av as m}from"./useStore-C81yKXnX.js";var x=h("<div>");const v=i(b)`
  display: flex;
  position: relative;
  aspect-ratio: 30/12;
  flex-shrink: 0;
  border-radius: ${e=>e.radius}px;
  overflow: hidden;
  width: 100%;
`,w=i("img")`
  position: absolute;
  inset: 0;
  border-radius: ${e=>e.radius}px;
  filter: brightness(
    ${e=>e.brightness===void 0?"70":e.brightness}%
  );
  object-fit: cover;
  height: 100%;
  width: 100%;
`,y=i("div")`
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
`;function S(e){const{hasFocus:a}=g(),n=()=>{if(!e.url)return;const r=new URL(e.url);return e.resize&&r.searchParams.set("size",e.resize.toString()),e.url?.endsWith(".gif")&&(!a()||!e.animate)&&r.searchParams.set("type","webp"),r.href},u=()=>{const r={flex:"1"};return e.maxHeight!==void 0&&(r["max-height"]=e.maxHeight+"px"),r},l=()=>({padding:(e.margin===void 0?10:e.margin)+"px",display:"flex","flex-shrink":"0",overflow:"hidden"});return(()=>{var r=x();return o(r,t(v,{get radius(){return e.radius||8},get class(){return e.class},get style(){return u()},get children(){return[t(s,{get when(){return n()},get children(){return t(w,{class:"banner-inner",get radius(){return e.radius||8},get brightness(){return e.brightness},get src(){return n()},alt:"Banner"})}}),t(s,{get when(){return!n()},get children(){return t(y,{class:"banner-inner",get radius(){return e.radius||8},get brightness(){return e.brightness},get color(){return e.hexColor}})}}),c(()=>e.children)]}})),f(d=>m(r,l(),d)),r})()}export{S as B};
//# sourceMappingURL=Banner-DWKTKMkk.js.map
