import{b as f,W as E,o as L,i as N,c as e,F as b,ac as w,U as o,u as B,S as h,C as u,m as C,E as y,G as d,s as a,V as F,aS as k}from"./useStore-C81yKXnX.js";import{I as H}from"./Input-CGVbQxvr.js";import{t as T,D as x,a as M}from"./themes-B2Oj19fV.js";import{S as G}from"./Skeleton-C81J_hd6.js";import{N as P}from"./Notice-D4YZaiTY.js";import"./_commonjsHelpers-CE1G-McA.js";var U=y("<strong>"),z=y("<div>: "),D=y("<div>");const I=a("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`,j=a("div")`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`,S=a("h3")`
  margin: 16px 0 8px 0;
  font-size: 1rem;
  font-weight: bold;
  color: var(--text-color);
`,R=a(F)`
  background: var(--pane-color);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`,V=a(b)`
  flex-wrap: wrap;
  gap: 6px;
`,A=a("div")`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,W=a(w)`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #24292f;
  color: #ffffff;
  align-self: flex-end;
  &:hover {
    background: #3f4448;
  }
`;function _(n){const l=n.themeObj.colors||{},i=n.themeObj.maintainers||[],s=l["pane-color"]||x["pane-color"],m=l["text-color"]||x["text-color"];return e(R,{style:{background:s,color:m},get children(){return[(()=>{var r=U();return d(r,()=>n.name),r})(),e(h,{get when(){return i.length},get children(){var r=z(),g=r.firstChild;return d(r,()=>o("OVMsWP"),g),d(r,()=>i.join(", "),null),r}}),e(V,{get children(){return e(u,{get each(){return Object.values({...x,...l})},children:r=>e(A,{style:{"background-color":r}})})}}),e(w,{get label(){return o("vYUBVU")},onClick:()=>M(n.name,{[n.name]:n.themeObj})})]}})}function Z(){const[n,l]=f({}),[i,s]=f(!0),{header:m}=E(),[r,g]=f(""),O="https://raw.githubusercontent.com/Nerimity/themes/refs/heads/main/themes.json";L(()=>{m.updateHeader({title:o("8xznXx"),iconName:"explore"}),$()});const $=async()=>{s(!0);try{const t=await fetch(O,{cache:"no-store"});if(!t.ok)throw new Error(`Failed to fetch: ${t.status}`);const c=await t.json();k(()=>{l(c),s(!1)})}catch(t){console.error(t),k(()=>{l({}),s(!1)})}},v=()=>Object.entries(T).filter(([t])=>r()?t.toLowerCase().includes(r().toLowerCase()):!0),p=N(()=>Object.entries(n()).filter(([t])=>!T[t]&&t!=="Template").filter(([t])=>r()?t.toLowerCase().includes(r().toLowerCase()):!0));return e(I,{get children(){return[e(b,{style:{"margin-bottom":"10px"},get children(){return e(w,{margin:0,href:"/app",label:"Back",iconName:"arrow_back"})}}),e(P,{type:"info",get children(){return o("w9tv3c")}}),e(b,{style:{"justify-content":"space-between","margin-bottom":"10px"},wrap:!0,get children(){return[e(H,{get label(){return o("+1hnsP")},onText:g,get value(){return r()},get class(){return B`
            flex: 1;
            min-width: 200px;
          `}}),e(W,{label:"GitHub",iconName:"code",margin:[0,0,0,4],onClick:()=>window.open("https://github.com/Nerimity/themes","_blank")})]}}),e(h,{get when(){return v().length},get children(){return[e(S,{get children(){return o("Dnnlzo")}}),e(j,{get children(){return e(u,{get each(){return v()},children:([t,c])=>e(_,{name:t,themeObj:c})})}})]}}),e(S,{get children(){return o("JQ0SAk")}}),e(j,{get children(){return[e(h,{get when(){return i()},get children(){return e(u,{get each(){return Array(6).fill(null)},children:()=>e(G.Item,{height:"200px",width:"100%"})})}}),e(h,{get when(){return C(()=>!i())()&&p().length>0},get children(){return e(u,{get each(){return p()},children:([t,c])=>e(_,{name:t,themeObj:c})})}}),e(h,{get when(){return C(()=>!i())()&&p().length===0},get children(){var t=D();return d(t,()=>o("3n8oHa")),t}})]}})]}})}export{Z as default};
//# sourceMappingURL=ExploreThemes-DcybYs_y.js.map
