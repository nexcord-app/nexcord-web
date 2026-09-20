import{c as t,S as r,I as o,J as i}from"./ModerationService-CpG_--VM.js";import{s as a,a as c,u as n}from"./Flexbox-D5klO2LR.js";import{C as l}from"./Text-zTrywdpE.js";const s=a(c)`
  align-items: center;
  gap: 4px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;function m(e){return t(s,{get class(){return e.class},get children(){return e.children},get style(){return e.style}})}const u=n`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 8px;
  padding: 5px;
  height: 20px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  color: rgba(255, 255, 255, 0.5);
  margin-right: 14px;

  font-size: 12px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:hover,
  &:last-child {
    color: white;
  }

  &:last-child {
    font-weight: bold;
    &:after {
      display: none;
    }
    &:hover {
      background-color: transparent;
    }
    cursor: default;
    pointer-events: none;
  }

  &:after {
    position: absolute;
    content: ">";
    right: -15px;
    color: rgba(255, 255, 255, 0.5);
    pointer-events: none;
  }
`;function f(e){return t(i,{class:u,get component(){return e.href?l:"div"},get href(){return e.href},get children(){return[t(r,{get when(){return e.icon},get children(){return t(o,{get class(){return n`
            color: inherit;
          `},get style(){return e.title?{"margin-right":"5px"}:void 0},size:22,get name(){return e.icon}})}}),t(r,{get when(){return e.title},get children(){return e.title}})]}})}export{m as B,f as a};
//# sourceMappingURL=Breadcrumb-B3zChS5t.js.map
