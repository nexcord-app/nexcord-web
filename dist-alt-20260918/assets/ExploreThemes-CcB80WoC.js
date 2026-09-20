import{e as c,o as C,H as r,ak as f,h as E,c as e,S as a,F as m,m as p,t as L,i as N}from"./ModerationService-JKa8HDPL.js";import{u as d,s as h}from"./Flexbox-CKnPoiWr.js";import{B as M}from"./Text-D1ScQjsd.js";import{I as j}from"./Input-DoZRayyi.js";import{t as x}from"./themes-BwyAXU8s.js";import{S as _}from"./Skeleton-4ICHWQuq.js";import{b as z}from"./useStore-1zAIwTgm.js";import{N as P}from"./Notice-BfoaFfM1.js";import{T as w}from"./ThemeCard-BmtSvr3o.js";import{SearchHeader as B,ExplorePageContainer as F}from"./ExplorePane-Du5j57ra.js";import{M as G}from"./MetaTitle-CbG5DSuq.js";import"./useResizeObserver-5zHNQ4fP.js";import"./_commonjsHelpers-CE1G-McA.js";var I=L("<div>");const b=h("div")`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`,T=h("h3")`
  margin: 16px 0 8px 0;
  font-size: 1rem;
  font-weight: bold;
  color: var(--text-color);
`,O=h(M)`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #24292f;
  color: #ffffff;
  align-self: flex-end;
  &:hover {
    background: #3f4448;
  }
`;function Z(){const[y,u]=c({}),[i,s]=c(!0),{header:S}=z(),[n,v]=c(""),H="https://raw.githubusercontent.com/Nerimity/themes/refs/heads/main/themes.json";C(()=>{S.updateHeader({title:r("8xznXx"),iconName:"explore"}),k()});const k=async()=>{s(!0);try{const t=await fetch(H,{cache:"no-store"});if(!t.ok)throw new Error(`Failed to fetch: ${t.status}`);const o=await t.json();f(()=>{u(o),s(!1)})}catch(t){console.error(t),f(()=>{u({}),s(!1)})}},g=()=>Object.entries(x).filter(([t])=>n()?t.toLowerCase().includes(n().toLowerCase()):!0),l=E(()=>Object.entries(y()).filter(([t])=>!x[t]&&t!=="Template").filter(([t])=>n()?t.toLowerCase().includes(n().toLowerCase()):!0));return e(F,{get children(){return[e(G,{get children(){return r("8xznXx")}}),e(B,{get children(){return[e(j,{get label(){return r("H5N5PP")},onText:v,get value(){return n()},get class(){return d`
            flex: 1;
            min-width: 200px;
            span {
              margin-bottom: 2px;
            }
          `}}),e(O,{label:"GitHub",iconName:"code",margin:[19,0,0,0],href:"https://github.com/Nerimity/themes",target:"_blank",get class(){return d`
            align-self: stretch;
          `}})]}}),e(P,{type:"info",get description(){return r("w9tv3c")}}),e(a,{get when(){return g().length},get children(){return[e(T,{get children(){return r("Dnnlzo")}}),e(b,{get children(){return e(m,{get each(){return g()},children:([t,o])=>e(w,{name:t,themeObj:o,explore:!0})})}})]}}),e(T,{get children(){return r("JQ0SAk")}}),e(b,{get children(){return[e(a,{get when(){return i()},get children(){return e(m,{get each(){return Array(6).fill(null)},children:()=>e(_.Item,{height:"200px",width:"100%"})})}}),e(a,{get when(){return p(()=>!i())()&&l().length>0},get children(){return e(m,{get each(){return l()},children:([t,o])=>e(w,{name:t,themeObj:o,explore:!0})})}}),e(a,{get when(){return p(()=>!i())()&&l().length===0},get children(){var t=I();return N(t,()=>r("3n8oHa")),t}})]}})]}})}export{Z as default};
//# sourceMappingURL=ExploreThemes-CcB80WoC.js.map
