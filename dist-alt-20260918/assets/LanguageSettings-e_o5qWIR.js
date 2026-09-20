import{W as j,b,o as A,M as H,U as c,c as e,V as R,C as F,u as v,s as N,g as M,bD as B,bQ as D,T as h,S as u,m as y,E as V,G as Z,p as G,ak as O,F as P,a1 as Q,af as W}from"./useStore-C81yKXnX.js";import{g as L,l as T,a as I,s as Y}from"./languages-T_FTuHOj.js";import{I as q}from"./LegacyItem-B-uApzaA.js";import{I as J}from"./browser-QP6z6XX1.js";import{E as X}from"./Emoji-LHY5apb-.js";import{B as ee,a as z}from"./Breadcrumb-B2nrXbr4.js";import{N as te}from"./Notice-D4YZaiTY.js";import{e as re}from"./index-CouvuDfy.js";import"./Modal-CslZPWEr.js";import{R as ne}from"./index-CP5qcWzg.js";import{I as ae}from"./Input-CGVbQxvr.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Avatar-CnjpHkJi.js";import"./ServerVerifiedIcon-CDs7ZnN3.js";import"./useJoinServer-VYpKHgtr.js";import"./ContextMenu-CBCccNPx.js";import"./useResizeObserver-DorGCpy9.js";import"./Delay-BaU2S7Oe.js";import"./Settings-073OYnCH.js";import"./exploreRoutes-W8UYRAp_.js";import"./ServerSettings-BBriLL-f.js";import"./themes-B2Oj19fV.js";import"./useReminders--8wP4kWR.js";var oe=V("<div>%");const ie=N("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`,se=N(q)`
  padding: 8px;
  gap: 10px;
  padding-left: 10px;
  background-color: rgba(255, 255, 255, 0.04);
  &:hover {
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.4);
  }
  &:after {
    display: none;
  }
`;function Ke(){const{header:r}=j(),[,n]=J(),[a,f]=b(""),[x,o]=b(L()||"en_gb"),[m,_]=b(0),k=(t,s)=>{let i=0,p=0;const d=(g,w)=>{for(const l in g)typeof g[l]=="string"?(i++,w?.[l]&&w?.[l]!==g&&p++):typeof g[l]=="object"&&d(g[l],w?.[l])};d(re,s);const $=p/i*100;_($)};A(async()=>{const t=L()||"en_gb",s=await I(t);k(t.replace("_","-"),s)}),H(()=>{r.updateHeader({title:c("3i16p4")+" - "+c("fHfvZs"),iconName:"settings"})});const S=Object.keys(T),C=t=>t?.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim().toLowerCase()||"",K=()=>{const t=C(a());return t.trim()?S.filter(s=>{const i=T[s],p=C(i.name),d=C(i.nativeName);return p.includes(t)||d.includes(t)}):S},U=async t=>{const s=t;if(t=t.replace("-","_"),document.documentElement.setAttribute("lang",s||"en"),t!=="en_gb"){const i=await I(t);if(!i)return;k(s,i),n.addResources(t,"translation",i)}else _(100);n.changeLanguage(t),Y(t),o(t)};return e(ne,{on:L,get children(){return e(ie,{get children(){return[e(ee,{get children(){return[e(z,{href:"/app",icon:"home",get title(){return c("t5AkH8")}}),e(z,{get title(){return c("fHfvZs")}})]}}),e(ae,{get label(){return c("Rc0gTL")},get value(){return a()},onText:f}),e(te,{type:"warn",get description(){return c("b3VD1A")}}),e(R,{gap:8,get class(){return v`
            margin-top: 8px;
          `},get children(){return e(F,{get each(){return K()},children:t=>e(ce,{get selected(){return x().replace("_","-")===t},onClick:()=>U(t),key:t,get percentTranslated(){return m()}})})}})]}})}})}function ce(r){const{createPortal:n}=M(),a=T[r.key],f=o=>{o.target.tagName!=="A"&&r.onClick()},x=async()=>{window.open("https://hosted.weblate.org/projects/nerimity/-/"+r.key,"_blank")};return e(se,{onclick:f,get selected(){return r.selected},handlePosition:"right",get children(){return[e(X,{get class(){return v`
          height: 30px;
          width: 30px;
          align-self: flex-start;
        `},get name(){return D(a.emoji)},get url(){return B(a.emoji)}}),e(R,{gap:2,get children(){return[e(h,{get children(){return a.name}}),e(u,{get when(){return y(()=>!!a.nativeName)()&&a.nativeName!==a.name},get children(){return e(h,{opacity:.6,size:14,get children(){return a.nativeName}})}}),e(ge,{get contributors(){return a.contributors}})]}}),e(u,{get when(){return y(()=>!!r.percentTranslated)()&&r.selected},get children(){var o=oe(),m=o.firstChild;return o.$$click=x,Z(o,()=>Math.floor(r.percentTranslated||0),m),G(()=>W(o,v`
            margin-left: auto;
            opacity: 0.6;
            cursor: pointer;
            transition: 0.2s;
            font-size: 14px;
            &:hover {
              opacity: 1;
            }
          `)),o}})]}})}const le=N(P)`
  font-size: 14px;
`;function ge(r){return e(P,{get children(){return[e(h,{size:14,style:{"margin-right":"5px"},get children(){return[y(()=>c("YitgM5")),":"]}}),e(F,{get each(){return r.contributors},children:(n,a)=>e(le,{gap:5,get children(){return[e(u,{get when(){return a()>0},children:", "}),e(u,{get when(){return E(n)},get children(){return e(O,{decoration:!0,href:n,target:"_blank",rel:"noopener noreferrer",get children(){return ue(n)}})}}),e(u,{get when(){return!E(n)},get children(){return e(h,{size:14,opacity:.8,children:n})}})]}})})]}})}function E(r){try{return new URL(r),!0}catch{return!1}}function ue(r){const n=r.split("/");return n[n.length-1]}Q(["click"]);export{Ke as default};
//# sourceMappingURL=LanguageSettings-e_o5qWIR.js.map
