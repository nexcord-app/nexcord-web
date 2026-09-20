import{W as C,M as A,U as r,e as i,c as e,S as d,s as g,b as c,o as p,V as h}from"./useStore-B0mu5xqR.js";import{C as u}from"./Checkbox-Dmn0FJkh.js";import{B as w,a as f}from"./Breadcrumb-BbBmT7rf.js";import{S as l}from"./SettingsBlock-C1ny6-Rp.js";import{N as x}from"./Notice-24TY465T.js";import"./_commonjsHelpers-CE1G-McA.js";const k=g("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  flex-shrink: 0;
`,D=g("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 10px;
  flex-shrink: 0;
`,H=g("div")`
  position: absolute;
  inset: 0;
  cursor: not-allowed;
`;function N(){const{header:t}=C();A(()=>{t.updateHeader({title:r("mHjLKK"),iconName:"settings"})});const n=i()?.isElectron;return e(k,{get children(){return[e(w,{get children(){return[e(f,{href:"/app",icon:"home",get title(){return r("t5AkH8")}}),e(f,{get title(){return r("1Pd5pN")}})]}}),e(d,{when:!n,get children(){return e(x,{type:"info",get description(){return r("T/3+cv")}})}}),e(D,{get children(){return[e(d,{when:!n,get children(){return e(H,{})}}),e(T,{}),e(M,{}),e(S,{})]}})]}})}function T(){const[t,n]=c(!1),[a,o]=c(!1);p(async()=>{i()?.getAutostart().then(n),i()?.getAutostartMinimized().then(o)});const m=s=>{i()?.setAutostart(s),n(s)},b=s=>{i()?.setAutostartMinimized(s),o(s)};return e(h,{get children(){return[e(l,{icon:"open_in_new",get label(){return r("bT/FH4")},header:!0}),e(l,{onClick:()=>m(!t()),icon:"restart_alt",get label(){return r("Igt4aD")},borderTopRadius:!1,get borderBottomRadius(){return!t()},get children(){return e(u,{get checked(){return t()},onChange:m})}}),e(d,{get when(){return t()},get children(){return e(l,{onClick:()=>b(!a()),icon:"horizontal_rule",get label(){return r("7+jImb")},get description(){return r("sguqMm")},borderTopRadius:!1,get children(){return e(u,{get checked(){return a()},onChange:b})}})}})]}})}function M(){const[t,n]=c(!1);p(async()=>{i()?.getHardwareAccelerationDisabled().then(n)});const a=o=>{i()?.setHardwareAccelerationDisabled(o),n(o)};return e(h,{get children(){return e(l,{onClick:()=>a(!t()),icon:"speed",get label(){return r("9UEuvK")},get description(){return r("ZC0UQE")},get children(){return e(u,{get checked(){return t()}})}})}})}function S(){const[t,n]=c(!1);p(()=>{i()?.getCustomTitlebarDisabled().then(n)});const a=o=>{i()?.setCustomTitlebarDisabled(o),n(o)};return e(h,{get children(){return e(l,{onClick:()=>a(!t()),icon:"speed",get label(){return r("0h6cLW")},get description(){return r("ZC0UQE")},get children(){return e(u,{get checked(){return t()}})}})}})}export{N as default};
//# sourceMappingURL=WindowSettings-BSqvUSXl.js.map
