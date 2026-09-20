import{W as g,M as p,c as e,U as a,S as x,E as s,C as f,g as h,s as E,u as l,e as c,G as b,T as k,p as C,aB as v,af as y}from"./useStore-C81yKXnX.js";import{B as R,a as i}from"./Breadcrumb-B2nrXbr4.js";import{E as o,u as S}from"./experiments-CZtDbfVz.js";import{S as B}from"./SettingsBlock-zYSlJJFm.js";import{C as w}from"./Checkbox-cAafcjqo.js";import"./_commonjsHelpers-CE1G-McA.js";var q=s("<div>There are currently no experiments available."),A=s("<div>");const N=E("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;function j(){const{header:t}=g();return p(()=>{t.updateHeader({title:"Settings - Experiments",iconName:"settings"})}),e(N,{get children(){return[e(R,{get children(){return[e(i,{href:"/app",icon:"home",get title(){return a("t5AkH8")}}),e(i,{get title(){return a("qtGjZK")}})]}}),e(x,{get when(){return!o.length},get children(){return q()}}),e(f,{each:o,children:r=>e(I,{experiment:r})})]}})}const T=l`
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
`,I=t=>{const{createPortal:r}=h(),{experiment:n,toggleExperiment:d}=S(()=>t.experiment.id),u=()=>!!(t.experiment.electron&&!c()?.isElectron);return e(B,{get class(){return u()?T:void 0},onClick:()=>{t.experiment.reloadRequired&&r(m=>e(M,{close:m})),t.experiment.onToggle?.(),d()},get label(){return t.experiment.name},get description(){return t.experiment.description},get children(){return e(w,{get checked(){return!!n()}})}})},M=t=>{const r=()=>c()?.relaunchApp();return e(v,{title:"Reload Required",get close(){return t.close},ignoreBackgroundClick:!0,get actionButtonsArr(){return[{label:"Restart Later",onClick:t.close},{label:"Restart Now",primary:!0,onClick:r}]},get children(){var n=A();return b(n,e(k,{children:"Nexcord needs to be restarted to take effect."})),C(()=>y(n,l`
          padding: 10px;
          max-width: 230px;
          text-align: center;
        `)),n}})};export{j as default};
//# sourceMappingURL=ExperimentSettings-o-QoQC4J.js.map
