import{b as s,M as l,O as o,c as t,I as i,S as d,T as b,a as g,at as u,s as h,u as k}from"./useStore-B0mu5xqR.js";const a=k`
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: 0.2s;
  color: transparent;
  transition: 0.2s;
  padding: 3px;
  border: solid 1px rgba(255, 255, 255, 0.2);
`,x=h("div")`
  display: flex;
  gap: 10px;
  align-items: center;
  user-select: none;
  cursor: pointer;

  &:hover .${a} {
    background: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.3);
  }

  &.selected .${a} {
    background-color: var(--primary-color);
    color: white;
  }
`;function f(e){const[r,c]=s(e.checked||!1);return l(o(()=>e.checked,()=>c(e.checked))),t(x,{get style(){return e.style},get class(){return g("checkbox",e.class,u(r(),"selected"))},onClick:()=>{if(e.disabled)return;const n=!r();!e.disableLocalUpdate&&c(n),e.onChange?.(n)},get children(){return[t(i,{size:13,get style(){return e.boxStyles},class:a,name:"check"}),t(d,{get when(){return e.label},get children(){return t(b,{get size(){return e.labelSize},style:{"word-break":"break-word"},get children(){return e.label}})}})]}})}export{f as C};
//# sourceMappingURL=Checkbox-Dmn0FJkh.js.map
