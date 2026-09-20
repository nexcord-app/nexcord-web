import{D as C,H as t,c as e,S as d,e as l,o as g}from"./ModerationService-7nF9_67y.js";import{s as p}from"./Flexbox-DahX4I5v.js";import{b as A,e as i}from"./useStore-C1x_XtZn.js";import{a as u}from"./Text-xQnkEBKO.js";import{B as w,a as f}from"./Breadcrumb-xfmK78bh.js";import{S as c,a as h}from"./SettingsBlock-CMShPInh.js";import{N as x}from"./Notice-B_aSsICh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useResizeObserver-DLOEUKTg.js";const D=p("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  flex-shrink: 0;
`,k=p("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 10px;
  flex-shrink: 0;
`,H=p("div")`
  position: absolute;
  inset: 0;
  cursor: not-allowed;
`;function P(){const{header:r}=A();C(()=>{r.updateHeader({title:t("3i16p4")+" - "+t("1Pd5pN"),iconName:"settings"})});const n=i()?.isElectron;return e(D,{get children(){return[e(w,{get children(){return[e(f,{href:"/app",icon:"home",get title(){return t("t5AkH8")}}),e(f,{get title(){return t("1Pd5pN")}})]}}),e(d,{when:!n,get children(){return e(x,{type:"info",get description(){return t("T/3+cv")}})}}),e(k,{get children(){return[e(d,{when:!n,get children(){return e(H,{})}}),e(S,{}),e(y,{}),e(M,{})]}})]}})}function S(){const[r,n]=l(!1),[a,o]=l(!1);g(async()=>{i()?.getAutostart().then(n),i()?.getAutostartMinimized().then(o)});const m=s=>{i()?.setAutostart(s),n(s)},b=s=>{i()?.setAutostartMinimized(s),o(s)};return e(h,{get children(){return[e(c,{icon:"open_in_new",get label(){return t("bT/FH4")}}),e(c,{onClick:()=>m(!r()),icon:"restart_alt",get label(){return t("Igt4aD")},get children(){return e(u,{get checked(){return r()},onChange:m})}}),e(d,{get when(){return r()},get children(){return e(c,{onClick:()=>b(!a()),icon:"horizontal_rule",get label(){return t("7+jImb")},get description(){return t("sguqMm")},get children(){return e(u,{get checked(){return a()},onChange:b})}})}})]}})}function y(){const[r,n]=l(!1);g(async()=>{i()?.getHardwareAccelerationDisabled().then(n)});const a=o=>{i()?.setHardwareAccelerationDisabled(o),n(o)};return e(h,{get children(){return e(c,{onClick:()=>a(!r()),icon:"speed",get label(){return t("9UEuvK")},get description(){return t("ZC0UQE")},get children(){return e(u,{get checked(){return r()}})}})}})}function M(){const[r,n]=l(!1);g(()=>{i()?.getCustomTitlebarDisabled().then(n)});const a=o=>{i()?.setCustomTitlebarDisabled(o),n(o)};return e(h,{get children(){return e(c,{onClick:()=>a(!r()),icon:"speed",get label(){return t("0h6cLW")},get description(){return t("ZC0UQE")},get children(){return e(u,{get checked(){return r()}})}})}})}export{P as default};
//# sourceMappingURL=WindowSettings-Zn-I7ge7.js.map
