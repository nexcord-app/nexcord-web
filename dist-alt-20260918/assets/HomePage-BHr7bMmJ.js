import{c as e,T as n,E as f,G as v,ac as l,s as c,X as L,b as _,F as m,V as u,u as S,w as A,I as B}from"./useStore-B0mu5xqR.js";import{P as F,a as D}from"./PageFooter-CbOSQWR1.js";import{I as y}from"./browser-BaK9C9_l.js";import{g as O}from"./index-Un0jg5rm.js";import{C as z}from"./ContextMenu-CqZZtMph.js";import"./_commonjsHelpers-CE1G-McA.js";import"./logout-H7jibjfq.js";import"./Skeleton-Hm2fqnK3.js";import"./Avatar-Dm8O4A-8.js";import"./useResizeObserver-78Qyl67J.js";var R=f("<a href=/register>"),$=f('<a href=https://github.com/Nerimity/nerimity-web target=_blank rel="noopener noreferrer">'),j=f("<img src=/assets/apple.svg width=24>"),H=f("<img src=/assets/linux.svg width=24>");const T=c("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  z-index: 1111;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    max-width: 400px;
    aspect-ratio: 1/1;
    width: 50%;
    background-color: var(--primary-color);
    align-self: center;
    border-radius: 9999px;
    filter: blur(200px);
    opacity: 0.6;
    z-index: -1;
  }
`,U=c("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 8px;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 8px;
  flex: 1;
`,E=c("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 490px;
  text-align: center;
  flex-shrink: 0;
  .slogan {
    background: #4c93ff;
    background: linear-gradient(to right, #4c93ff 0%, #6a5dff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,J=c("div")`
  margin-top: 10px;
  display: flex;
  margin-left: -5px;

  a {
    text-decoration: none;
    div {
      width: 130px;
    }
  }
  .get-started-button {
    background: #4c93ff;
    background: linear-gradient(to right, #4c93ff 0%, #6a5dff 100%);
  }
`,V=c("a")`
  margin-bottom: 26px;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--primary-color);
  text-decoration: none;
  padding: 6px;
  font-size: 14px;
  padding-left: 12px;
  padding-right: 12px;
`;function ae(){const[t]=y(),x="https://github.com/Nerimity/nerimity-web/commits/main";return e(T,{class:"home-page-container",get children(){return[e(F,{}),e(U,{class:"content",get children(){return[e(E,{class:"top-container",get children(){return[e(V,{href:x,target:"_blank",rel:"noopener noreferrer",get children(){return"Unknown Version"}}),e(n,{class:"slogan",size:36,bold:!0,get children(){return t("y0jN+e")}}),e(n,{size:18,opacity:.7,style:{"margin-top":"10px","margin-bottom":"10px"},get children(){return t("HMSZnl")}}),e(J,{class:"buttons-container",get children(){return[(()=>{var o=R();return v(o,e(l,{class:"get-started-button",iconName:"open_in_browser",get label(){return t("3NwJOa")},color:"white"})),o})(),(()=>{var o=$();return v(o,e(l,{color:"white",iconName:"code",get label(){return t("Qheupk")}})),o})()]}}),e(Z,{})]}}),e(Q,{})]}}),e(D,{})]}})}const g=S`
  :nth-child(2) {
    margin-left: 0;
    text-align: end;
  }

  text-align: start;
`,Z=()=>{const[t]=y(),x=L(),[o,h]=_(),[C,b]=_(),s=async(r,d)=>{if(r==="android"){window.open("https://github.com/Nerimity/NerimityReactNative/releases/latest","_blank");return}const a=await O(),w=a.filter(p=>{if(p.platform!==r)return!1;if(d){if(p.ext===d)return!0;if(r==="macos"){const k=p.name.toLowerCase();if(d==="arm64")return k.includes("arm64");if(d==="x64")return p.ext==="dmg"&&!k.includes("arm64")}return!1}return!0});if(w.length===0){A("No platforms found"),console.log(a);return}if(w[0]?.downloadUrl){window.open(w[0].downloadUrl,"_blank");return}},N=r=>{if(r.preventDefault(),r.stopPropagation(),o()){h(void 0);return}const a=r.currentTarget.getBoundingClientRect();h({x:a.left,y:a.bottom+5})},M=r=>{if(r.preventDefault(),r.stopPropagation(),C()){b(void 0);return}const a=r.currentTarget.getBoundingClientRect();b({x:a.left,y:a.bottom+5})},P=[{label:"Intel",icon:"laptop_mac",onClick:()=>s("macos","x64")},{label:"Apple Silicon (M1/M2/M3/...)",icon:"laptop_mac",onClick:()=>s("macos","arm64")}],I=[{label:"Debian/Ubuntu (deb)",icon:"download",onClick:()=>s("linux","deb")},{label:"AppImage",icon:"download",onClick:()=>s("linux","AppImage")}];return e(u,{gap:10,itemsCenter:!0,style:{"margin-top":"10px"},get children(){return[e(n,{size:16,opacity:.7,style:{},get children(){return t("ffjDRY")}}),e(m,{wrap:!0,justifyCenter:!0,get children(){return[e(l,{onClick:()=>x("/register"),color:"",get customChildren(){return e(u,{class:g,get children(){return[e(n,{get children(){return t("DAxbAK")}}),e(n,{opacity:.8,size:12,children:"web"})]}})},iconName:"public",primary:!0}),e(l,{onClick:()=>s("windows"),color:"",get customChildren(){return e(u,{class:g,get children(){return[e(n,{children:"Windows"}),e(n,{opacity:.8,size:12,children:"exe"})]}})},iconName:"grid_view",primary:!0}),e(l,{onClick:r=>N(r),color:"",get customChildren(){return e(m,{itemsCenter:!0,get children(){return[j(),e(u,{class:g,get children(){return[e(n,{children:"macOS"}),e(n,{opacity:.8,size:12,children:"dmg"})]}})]}})},primary:!0}),e(l,{onClick:()=>s("android"),color:"#31a952",get customChildren(){return e(u,{class:g,get children(){return[e(n,{children:"Android"}),e(n,{opacity:.8,size:12,children:"apk"})]}})},iconName:"android",primary:!0}),e(l,{onClick:r=>M(r),color:"#db5c13",get customChildren(){return e(m,{itemsCenter:!0,get children(){return[H(),e(u,{class:g,get children(){return[e(n,{children:"Linux"}),e(n,{opacity:.8,size:12,children:"deb / AppImage"})]}})]}})},primary:!0})]}}),e(z,{items:P,get position(){return o()},onClose:()=>h(void 0)}),e(z,{items:I,get position(){return C()},onClose:()=>b(void 0)})]}})},K=c("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 800px;
  gap: 10px;
  column-gap: 20px;
  align-self: center;
  margin-top: 100px;

  padding: 10px;
  z-index: 1111;
  margin: 10px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 90%;
    width: 100%;
  }
`;function Q(){const[t]=y();return e(K,{get children(){return[e(i,{icon:"gif",get label(){return t("efRCZI")}}),e(i,{icon:"preview",get label(){return t("38euYK")}}),e(i,{icon:"sell",get label(){return t("vwvqrH")}}),e(i,{icon:"add",get label(){return t("Em7E2o")}}),e(i,{icon:"dns",get label(){return t("d5l2b/")}}),e(i,{icon:"explore",get label(){return t("lIkfZr")}}),e(i,{icon:"volunteer_activism",get label(){return t("+3BzoW")}}),e(i,{icon:"code",get label(){return t("JsoUx7")}}),e(i,{icon:"account_circle",get label(){return t("/fJQ3j")}})]}})}const W=c(m)`
  align-items: center;
  border: solid 1px rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 6px;
  padding-right: 14px;
`;function i(t){return e(W,{gap:10,get children(){return[e(B,{style:{background:"rgba(255,255,255,0.06)",padding:"10px","border-radius":"12px"},get name(){return t.icon},size:26}),e(n,{size:14,opacity:.7,get children(){return t.label}})]}})}export{ae as default};
//# sourceMappingURL=HomePage-BHr7bMmJ.js.map
