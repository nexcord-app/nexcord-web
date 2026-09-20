import{b as d,M as u,c as r,C as g,a,at as s,T as b,s as n,V as x,F as l}from"./useStore-C81yKXnX.js";const h=n(x)``;function z(e){const[i,o]=d(e.initialId);u(()=>{o(e.initialId)});const c=t=>{t.id!==i()&&(o(t.id),e.onChange?.(t))};return r(h,{get style(){return e.style},get children(){return r(g,{get each(){return e.items},children:t=>r(f,{onClick:()=>c(t),item:t,get selected(){return t.id===i()}})})}})}const C=n(l)`
  position: relative;
  width: ${e=>e.size||10}px;
  height: ${e=>e.size||10}px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: 0.2s;
  border: solid ${e=>(e.size||10)/2}px transparent;

  &:after {
    position: absolute;
    content: "";
    inset: -${e=>(e.size||10)/2}px;
    border: solid 1px rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }

  &.selected {
    background-color: white;
    border-color: var(--primary-color);
  }
  flex-shrink: 0;
`,k=n(l)`
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 8px;
  transition: 0.2s;
  user-select: none;
  flex-shrink: 0;

  .label {
    color: white;
  }

  &:not(.selected):hover {
    .radio-box-circle {
      background-color: rgba(255, 255, 255, 0.6);
      border-color: rgba(0, 0, 0, 0.4);
    }
  }
`;function f(e){return r(k,{get class(){return a(e.class,s(e.selected,"selected"))},gap:5,get onClick(){return e.onClick},get children(){return[r(C,{get size(){return e.checkboxSize},get class(){return a("radio-box-circle",s(e.selected,"selected"))},get classList(){return{selected:e.selected}}}),r(b,{class:"label",get size(){return e.labelSize},get children(){return e.item.label}})]}})}export{f as R,z as a};
//# sourceMappingURL=RadioBox-300--nE2.js.map
