import{s as o,F as d,a as l}from"./Flexbox-DdRgUkVN.js";import{T as u}from"./Text-CVNHmjKJ.js";import{e as g,D as b,c as r,F as x,a3 as a,a7 as s}from"./ModerationService--RmbjC5p.js";const h=o(d)``;function R(e){const[i,n]=g(e.initialId);b(()=>{n(e.initialId)});const c=t=>{t.id!==i()&&(n(t.id),e.onChange?.(t))};return r(h,{get style(){return e.style},get children(){return r(x,{get each(){return e.items},children:t=>r(k,{onClick:()=>c(t),item:t,get selected(){return t.id===i()}})})}})}const m=o(l)`
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
`,f=o(l)`
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
`;function k(e){return r(f,{get class(){return a(e.class,s(e.selected,"selected"))},gap:5,get onClick(){return e.onClick},get children(){return[r(m,{get size(){return e.checkboxSize},get class(){return a("radio-box-circle",s(e.selected,"selected"))},get classList(){return{selected:e.selected}}}),r(u,{class:"label",get size(){return e.labelSize},get children(){return e.item.label}})]}})}export{k as R,R as a};
//# sourceMappingURL=RadioBox-CEVB8pDD.js.map
