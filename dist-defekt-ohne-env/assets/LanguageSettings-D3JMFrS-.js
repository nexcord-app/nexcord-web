import{e as w,o as A,D as H,c as e,F as R,f as B,S as u,m as L,t as D,i as M,b as Z,d as V,Z as O}from"./ModerationService-7nF9_67y.js";import{T as f,C as Y}from"./Text-xQnkEBKO.js";import{F as E,u as v,s as N,a as P}from"./Flexbox-DahX4I5v.js";import{g as b,a as I,l as y,s as q}from"./languages-CyEDRxRF.js";import{I as G}from"./LegacyItem-BmwBjWON.js";import{b as J,U as Q,V as W}from"./useStore-C1x_XtZn.js";import{I as T}from"./browser-ByxRPPz2.js";import{E as X}from"./ClanTag-tgfDpOrD.js";import{B as ee,a as z}from"./Breadcrumb-xfmK78bh.js";import{N as te}from"./Notice-B_aSsICh.js";import{e as re}from"./index-Dp6hFdbX.js";import{R as ne}from"./index-Bn30b_tF.js";import{I as ae}from"./Input-ojZsAQjm.js";import"./useResizeObserver-DLOEUKTg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Emoji-DE4pWG5a.js";import"./date-QVcUUowu.js";import"./CodeBlock-CwHB-ntI.js";import"./clipboard-p21MJwK2.js";import"./MemberContextMenu-qOuREi5_.js";import"./ContextMenu-CinibpIf.js";import"./DeleteConfirmModal-CmXpcZod.js";import"./GlobalEvents-D8oaUrNP.js";import"./Skeleton-fDFQMXJb.js";import"./ServerVerifiedIcon-Tsm0_ZSI.js";import"./useJoinServer-DpcK9aNf.js";import"./Delay-HVlibBmN.js";import"./Settings-BBgYIeXj.js";import"./exploreRoutes-ph6fD7AD.js";import"./ServerSettings-BEOmwoV3.js";import"./themes-BU5RCYci.js";import"./useReminders-B9JKVct5.js";var oe=D("<div>%");const ie=N("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`,se=N(G)`
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
`;function Ze(){const[r]=T(),{header:i}=J(),[,n]=T(),[c,h]=w(""),[a,m]=w(b()||"en_gb"),[K,_]=w(0),S=(t,s)=>{let o=0,p=0;const d=(g,C)=>{for(const l in g)typeof g[l]=="string"?(o++,C?.[l]&&C?.[l]!==g&&p++):typeof g[l]=="object"&&d(g[l],C?.[l])};d(re,s);const j=p/o*100;_(j)};A(async()=>{const t=b()||"en_gb",s=await I(t);S(t.replace("_","-"),s)}),H(()=>{i.updateHeader({title:r("3i16p4")+" - "+r("fHfvZs"),iconName:"settings"})});const k=Object.keys(y),x=t=>t?.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim().toLowerCase()||"",U=()=>{const t=x(c());return t.trim()?k.filter(s=>{const o=y[s],p=x(o.name),d=x(o.nativeName);return p.includes(t)||d.includes(t)}):k},$=async t=>{const s=t;if(t=t.replace("-","_"),document.documentElement.setAttribute("lang",s||"en"),t!=="en_gb"){const o=await I(t);if(!o)return;S(s,o),n.addResources(t,"translation",o)}else _(100);n.changeLanguage(t),q(t),m(t)};return e(ne,{on:b,get children(){return e(ie,{get children(){return[e(ee,{get children(){return[e(z,{href:"/app",icon:"home",get title(){return r("t5AkH8")}}),e(z,{get title(){return r("fHfvZs")}})]}}),e(ae,{get label(){return r("Rc0gTL")},get value(){return c()},onText:h}),e(te,{type:"warn",get description(){return r("b3VD1A")}}),e(E,{gap:8,get class(){return v`
            margin-top: 8px;
          `},get children(){return e(R,{get each(){return U()},children:t=>e(ce,{get selected(){return a().replace("_","-")===t},onClick:()=>$(t),key:t,get percentTranslated(){return K()}})})}})]}})}})}function ce(r){const{createPortal:i}=B(),n=y[r.key],c=a=>{a.target.tagName!=="A"&&r.onClick()},h=async()=>{window.open("https://hosted.weblate.org/projects/nexcord/-/"+r.key,"_blank")};return e(se,{onclick:c,get selected(){return r.selected},handlePosition:"right",get children(){return[e(X,{get class(){return v`
          height: 30px;
          width: 30px;
          align-self: flex-start;
        `},get name(){return W(n.emoji)},get url(){return Q(n.emoji)}}),e(E,{gap:2,get children(){return[e(f,{get children(){return n.name}}),e(u,{get when(){return L(()=>!!n.nativeName)()&&n.nativeName!==n.name},get children(){return e(f,{opacity:.6,size:14,get children(){return n.nativeName}})}}),e(ge,{get contributors(){return n.contributors}})]}}),e(u,{get when(){return L(()=>!!r.percentTranslated)()&&r.selected},get children(){var a=oe(),m=a.firstChild;return a.$$click=h,M(a,()=>Math.floor(r.percentTranslated||0),m),Z(()=>V(a,v`
            margin-left: auto;
            opacity: 0.6;
            cursor: pointer;
            transition: 0.2s;
            font-size: 14px;
            &:hover {
              opacity: 1;
            }
          `)),a}})]}})}const le=N(P)`
  font-size: 14px;
`;function ge(r){const[i]=T();return e(P,{get children(){return[e(f,{size:14,style:{"margin-right":"5px"},get children(){return[L(()=>i("YitgM5")),":"]}}),e(R,{get each(){return r.contributors},children:(n,c)=>e(le,{gap:5,get children(){return[e(u,{get when(){return c()>0},children:", "}),e(u,{get when(){return F(n)},get children(){return e(Y,{decoration:!0,href:n,target:"_blank",rel:"noopener noreferrer",get children(){return ue(n)}})}}),e(u,{get when(){return!F(n)},get children(){return e(f,{size:14,opacity:.8,children:n})}})]}})})]}})}function F(r){try{return new URL(r),!0}catch{return!1}}function ue(r){const i=r.split("/");return i[i.length-1]}O(["click"]);export{Ze as default};
//# sourceMappingURL=LanguageSettings-D3JMFrS-.js.map
