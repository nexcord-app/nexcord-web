import{e as l,o as C,H as r,ak as f,h as E,c as e,S as a,F as h,m as d,t as L,i as N}from"./ModerationService--RmbjC5p.js";import{u as p,s as m}from"./Flexbox-DdRgUkVN.js";import{B as M}from"./Text-CVNHmjKJ.js";import{I as j}from"./Input-Cxyj3EM0.js";import{t as x}from"./themes-B-8H8eNJ.js";import{S as _}from"./Skeleton-B5QliNYZ.js";import{b as z}from"./useStore-B8c8g-Rg.js";import{N as P}from"./Notice-DEuV9al1.js";import{T as w}from"./ThemeCard-DBX1h0aX.js";import{SearchHeader as B,ExplorePageContainer as F}from"./ExplorePane-BWWKV28n.js";import{M as G}from"./MetaTitle-EETaEaDk.js";import"./useResizeObserver-CpC9RR9B.js";import"./_commonjsHelpers-Cpj98o6Y.js";var I=L("<div>");const b=m("div")`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`,T=m("h3")`
  margin: 16px 0 8px 0;
  font-size: 1rem;
  font-weight: bold;
  color: var(--text-color);
`,O=m(M)`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #24292f;
  color: #ffffff;
  align-self: flex-end;
  &:hover {
    background: #3f4448;
  }
`;function Z(){const[y,u]=l({}),[s,i]=l(!0),{header:S}=z(),[n,v]=l(""),H="https://raw.githubusercontent.com/Nexcord/themes/refs/heads/main/themes.json";C(()=>{S.updateHeader({title:r("8xznXx"),iconName:"explore"}),k()});const k=async()=>{i(!0);try{const t=await fetch(H,{cache:"no-store"});if(!t.ok)throw new Error(`Failed to fetch: ${t.status}`);const o=await t.json();f(()=>{u(o),i(!1)})}catch(t){console.error(t),f(()=>{u({}),i(!1)})}},g=()=>Object.entries(x).filter(([t])=>n()?t.toLowerCase().includes(n().toLowerCase()):!0),c=E(()=>Object.entries(y()).filter(([t])=>!x[t]&&t!=="Template").filter(([t])=>n()?t.toLowerCase().includes(n().toLowerCase()):!0));return e(F,{get children(){return[e(G,{get children(){return r("8xznXx")}}),e(B,{get children(){return[e(j,{get label(){return r("H5N5PP")},onText:v,get value(){return n()},get class(){return p`
            flex: 1;
            min-width: 200px;
            span {
              margin-bottom: 2px;
            }
          `}}),e(O,{label:"GitHub",iconName:"code",margin:[19,0,0,0],href:"https://github.com/Nerimity/themes",target:"_blank",get class(){return p`
            align-self: stretch;
          `}})]}}),e(P,{type:"info",get description(){return r("w9tv3c")}}),e(a,{get when(){return g().length},get children(){return[e(T,{get children(){return r("Dnnlzo")}}),e(b,{get children(){return e(h,{get each(){return g()},children:([t,o])=>e(w,{name:t,themeObj:o,explore:!0})})}})]}}),e(T,{get children(){return r("JQ0SAk")}}),e(b,{get children(){return[e(a,{get when(){return s()},get children(){return e(h,{get each(){return Array(6).fill(null)},children:()=>e(_.Item,{height:"200px",width:"100%"})})}}),e(a,{get when(){return d(()=>!s())()&&c().length>0},get children(){return e(h,{get each(){return c()},children:([t,o])=>e(w,{name:t,themeObj:o,explore:!0})})}}),e(a,{get when(){return d(()=>!s())()&&c().length===0},get children(){var t=I();return N(t,()=>r("3n8oHa")),t}})]}})]}})}export{Z as default};
//# sourceMappingURL=ExploreThemes-CiOJ0gwJ.js.map
