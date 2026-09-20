import{s as i,h as n}from"./Flexbox-Cufh4wPc.js";import{c as r,V as a}from"./ModerationService-DpHh3JQr.js";const t=n`
  from {
    transform: scale(1, 0);
  }
  to {
    transform: scale(1, 1);
  }
`,e=n`
  from {
    transform: scale(0, 1);
  }
  to {
    transform: scale(1, 1);
  }
`,s=i("div")`
  display: flex;
  position: relative;
  flex-shrink: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
  user-select: none;
  align-items: center;
  text-decoration: none;

  ${o=>o.handlePosition==="top"||o.handlePosition==="bottom"?"justify-content: center;":""}

  &:after {
    content: "";
    position: absolute;
    width: 3px;
    height: 15px;

    ${o=>o.handlePosition==="left"||!o.handlePosition?"left: 0":void 0};
    ${o=>o.handlePosition==="right"?"right: 0":void 0};

    ${o=>o.handlePosition==="top"?`
      top: 0;
      height: 3px;
      width: 15px;
    `:void 0}

    ${o=>o.handlePosition==="bottom"?`
      bottom: 0;
      height: 3px;
      width: 15px;
    `:void 0}

    border-radius: 3px;
    transition: 0.2s;
  }

  &:hover {
    background-color: var(--drawer-item-hover-background-color);
  }

  && {
    ${o=>o.selected?`
      background-color: var(--drawer-item-background-color);
      &:after {
        animation: ${o.handlePosition==="top"||o.handlePosition==="bottom"?e:t} 0.2s ease-in-out;
        background-color: ${o.handleColor||"var(--primary-color)"};
      } 
      `:void 0}
  }

  && {
    ${o=>o.alert?`
      &:after {
        animation: ${o.handlePosition==="top"||o.handlePosition==="bottom"?e:t} 0.2s ease-in-out;
        background-color: var(--alert-color);
      } 
    `:void 0}
  }
`,c=o=>r(s,a(o,{get"data-selected"(){return!!o.selected}}));export{c as I};
//# sourceMappingURL=LegacyItem-DUHTN840.js.map
