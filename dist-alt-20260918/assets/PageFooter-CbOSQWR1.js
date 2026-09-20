import{b as m,o as b,c as e,H as y,S as f,$ as v,Y as d,s as o,u as c,E as w,Z as k,G as S,m as L,I as D,p as C,x as I,y as F,aw as A,as as T,af as E,a1 as H,ak as u,F as Y}from"./useStore-B0mu5xqR.js";import{I as p}from"./browser-BaK9C9_l.js";import{l as M}from"./logout-H7jibjfq.js";import{S as l}from"./Skeleton-Hm2fqnK3.js";import{A as P}from"./Avatar-Dm8O4A-8.js";const U={start:{day:25,month:10},dayDuration:9},h=Date.now(),z=N(U);function N({start:r,dayDuration:n}){const t=new Date;t.setDate(r.day),t.setMonth(r.month-1),t.setHours(0),t.setMinutes(0);const a=new Date(t);return a.setDate(t.getDate()+n),a.setHours(23),a.setMinutes(59),t.getFullYear()!==a.getFullYear()&&(a.setFullYear(t.getFullYear()),t.setFullYear(t.getFullYear()-1)),h>t.getTime()&&h<a.getTime()}const O=()=>z?"/assets/halloween-logo.png":"/assets/logo.png";var R=w("<a style=text-decoration:none>");const _=o("header")`
  display: flex;
  height: 58px;
  flex-shrink: 0;
  &:after {
    background-color: var(--pane-color);
  }
  border: solid 1px rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  align-self: center;
  margin-top: 14px;
  box-sizing: border-box;

  @media (max-width: 820px) {
    margin-left: 10px;
    margin-right: 10px;
    width: calc(100% - 20px);
  }
`,K=c`
  display: flex;
  align-items: center;
  font-size: 20px;
  align-self: center;
  height: 38px;
  padding-left: 6px;
  padding-right: 6px;
  margin-left: 8px;
  color: white;
  text-decoration: none;
  transition: 0.2s;
  border-radius: 6px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`,$=o("div")`
  margin-left: 10px;
  padding-right: 4px;
  font-weight: bold;
  @media (max-width: 500px) {
    display: none;
  }
`,j=o("img")`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.86);
  backdrop-filter: blur(34px);
`,g=o("nav")`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  margin-right: 4px;

  .register-button div {
    background: #4c93ff;
    background: linear-gradient(to right, #4c93ff 0%, #6a5dff 100%);
    margin-right: 8px;
    &:hover {
      opacity: 0.8;
    }
  }
`,q=o("div")`
  display: flex;
  align-items: center;
  font-size: 14px;
  transition: 0.2s;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  height: 34px;
  padding-left: 8px;
  padding-right: 8px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  && {
    ${r=>r.primary?`
        background-color: var(--primary-color);
        opacity: 0.9;
        transition: 0.2s;
        &:hover {
          opacity: 1;
        }
      `:void 0}
  }
`,G=c`
  margin-right: 5px;
`;function re(r){const[n,t]=m(null);b(async()=>{if(!r.hideAccountInfo){if(!I(F.USER_TOKEN,null))return t(!1);setTimeout(()=>{a()},1e3)}});const a=async()=>{const i=await A().catch(x=>{if(x.code===0)return setTimeout(()=>{a()},5e3),"retrying"});if(i!=="retrying"){if(!i)return t(!1);t(i.user)}};return e(_,{class:"header-container",get children(){return[e(y,{href:"/",class:K,get children(){return[e(j,{get src(){return O()},alt:"logo"}),e($,{children:"Nexcord"})]}}),e(f,{get when(){return!r.hideAccountInfo},get children(){return e(v,{get fallback(){return e(V,{})},get children(){return[e(d,{get when(){return n()===!1},get children(){return e(Z,{})}}),e(d,{get when(){return n()},get children(){return e(X,{get user(){return n()}})}})]}})}})]}})}function V(){return e(g,{class:"navigation-container",get children(){return[e(l.Item,{width:"92px",height:"34px"}),e(l.Item,{width:"112px",height:"34px"}),e(l.Item,{width:"38px",height:"38px",style:{"border-radius":"50%","margin-left":"6px","margin-right":"6px"}})]}})}function X(r){const[n]=p(),t=()=>{M()};return e(g,{class:"navigation-container",get children(){return[e(s,{href:"#",color:"var(--alert-color)",onClick:t,get label(){return n("TDpM63")},icon:"logout"}),e(s,{href:"/app",get label(){return n("wLOS2t")},primary:!0,icon:"open_in_browser"}),e(P,{size:34,get user(){return r.user},get class(){return c`
          margin-left: 6px;
          margin-right: 6px;
        `}})]}})}function Z(){const[r]=p();return e(g,{class:"navigation-container",get children(){return[e(s,{href:"/login",get label(){return r("Sglsl2")},icon:"login"}),e(s,{href:"/register",get label(){return r("dnV8X4")},class:"register-button",icon:"add"})]}})}function s(r){return(()=>{var n=R();return k(n,"click",r.onClick,!0),S(n,e(q,{get primary(){return r.primary||!1},get style(){return{color:r.color}},get children(){return[e(f,{get when(){return r.icon},get children(){return e(D,{get name(){return r.icon},get color(){return r.color},class:G})}}),L(()=>r.label)]}})),C(t=>{var a=r.href,i=r.class;return a!==t.e&&T(n,"href",t.e=a),i!==t.t&&E(n,t.t=i),t},{e:void 0,t:void 0}),n})()}H(["click"]);const B=o(Y)`
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 30px;
  flex-shrink: 0;
`;function ne(){return e(B,{get children(){return[e(u,{decoration:!0,href:"/privacy",children:"Privacy Policy"}),e(u,{decoration:!0,href:"/terms-and-conditions",children:"Terms And Conditions"})]}})}export{re as P,ne as a};
//# sourceMappingURL=PageFooter-CbOSQWR1.js.map
