import{D as p,c as r,S as x,t as f,i as c,F as h,f as b,b as v,d as k}from"./ModerationService-JKa8HDPL.js";import{s as C,u as s}from"./Flexbox-CKnPoiWr.js";import{b as E,a_ as i,a$ as S,e as l,c as y}from"./useStore-1zAIwTgm.js";import{B,a as o}from"./Breadcrumb-BvtXBWyF.js";import{S as w}from"./SettingsBlock-CSxjoyNS.js";import{a as A,L as I}from"./Text-D1ScQjsd.js";import{I as m}from"./browser-BM56HFVq.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-5zHNQ4fP.js";var d=f("<div>");const N=C("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;function T(){const{header:e}=E(),[n]=m();return p(()=>{e.updateHeader({title:n("3i16p4")+" - "+n("qtGjZK"),iconName:"settings"})}),r(N,{get children(){return[r(B,{get children(){return[r(o,{href:"/app",icon:"home",get title(){return n("t5AkH8")}}),r(o,{get title(){return n("qtGjZK")}})]}}),r(x,{get when(){return!i.length},get children(){var t=d();return c(t,()=>n("0KGo6+")),t}}),r(h,{each:i,children:t=>r(R,{experiment:t})})]}})}const P=s`
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
`,R=e=>{const{createPortal:n}=b(),{experiment:t,toggleExperiment:a}=S(()=>e.experiment.id),u=()=>!!(e.experiment.electron&&!l()?.isElectron||e.experiment.reactNative&&!y()?.isReactNative);return r(w,{get class(){return u()?P:void 0},onClick:()=>{e.experiment.reloadRequired&&n(g=>r(q,{close:g})),e.experiment.onToggle?.(),a()},get label(){return e.experiment.name},get description(){return e.experiment.description},get children(){return r(A,{get checked(){return!!t()}})}})},q=e=>{const n=()=>l()?.relaunchApp(),[t]=m();return r(I,{get title(){return t("2d4JKu")},get close(){return e.close},ignoreBackgroundClick:!0,get actionButtonsArr(){return[{label:t("39Tmye"),onClick:e.close},{label:t("3SCJF/"),primary:!0,onClick:n}]},get children(){var a=d();return c(a,()=>t("44Ft+P")),v(()=>k(a,s`
          padding: 10px;
          max-width: 230px;
          text-align: center;
        `)),a}})};export{T as default};
//# sourceMappingURL=ExperimentSettings-BYRudZ29.js.map
