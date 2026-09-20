import{e as b,o as w,D as y,E as C,c as r,S as o,W as v,X as k}from"./ModerationService-JKa8HDPL.js";import{s as a,a as L}from"./Flexbox-CKnPoiWr.js";import{T as u}from"./Text-D1ScQjsd.js";const E=a("div")`
  display: flex;
  flex-direction: column;
  margin: ${e=>e.margin!==void 0?typeof e.margin=="object"?e.margin.join("px "):e.margin:0}px;

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="datetime-local"] {
    color-scheme: dark;
  }
`,F=a(u)`
  margin-bottom: 4px;
  margin-left: 2px;
`,m=a(u)`
  margin-top: 4px;
  margin-left: 2px;
`,I=a("input")`
  outline: none;
  background: transparent;
  width: 100%;
  border: none;
  color: white;
  padding: 10px;
`,z=a("textarea")`
  outline: none;
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
  color: white;
  padding: 10px;
  max-height: 200px;
`,S=a(u)`
  padding-left: 10px;
  margin-right: -10px;
  place-self: center;
  white-space: nowrap;
`,T=a(u)`
  place-self: center;
  padding-right: 10px;
`,A=a(L)`
  position: relative;
  border-radius: 8px;
  border: solid 1px rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.6);
  border-bottom: solid 1px rgba(255, 255, 255, 0.3);
  transition: 0.2s;
  cursor: text;
  ${e=>e.focused?`border-bottom: solid 1px ${e.primaryColor||"var(--primary-color)"};`:""}
`;function _(e){const[x,l]=b(!1);let n;w(()=>{e.ref?.(n)});const c=()=>{if(e.error&&typeof e.error!="string"){const t=e.errorName||e.label;if(Array.isArray(t)){if(t.map(i=>i.toLowerCase()).includes(e.error.path.toLowerCase()))return e.error.message}else if(t?.toLowerCase()===e.error.path?.toLowerCase())return e.error.message}if(typeof e.error=="string")return e.error},g=t=>{t?.preventDefault(),n?.focus()};y(C(()=>e.value,()=>{h()}));function h(){n?.tagName==="TEXTAREA"&&(n.style.height="5px",n.style.height=n.scrollHeight-20+"px")}const d=t=>{e.onInput?.(t),h(),e.onText?.(t.target.value)},s=t=>{l(!1),e.onBlur?.(t)},f=t=>{l(!0),e.onFocus?.(t)};return r(E,{get margin(){return e.margin},get class(){return e.class},get children(){return[r(o,{get when(){return e.label},get children(){return r(F,{size:14,color:"rgba(255, 255, 255, 0.8)",get children(){return e.label}})}}),r(A,{get primaryColor(){return e.primaryColor},get focused(){return x()},get children(){return[r(o,{get when(){return e.prefix},get children(){return r(S,{opacity:.6,onmousedown:g,size:12,get children(){return e.prefix}})}}),r(o,{get when(){return e.type==="textarea"},get children(){return r(z,{get maxlength(){return e.maxLength},get placeholder(){return e.placeholder},get style(){return{"min-height":e.minHeight?`${e.minHeight}px`:void 0,height:`${e.height}px`}},ref(t){var i=n;typeof i=="function"?i(t):n=t},onfocus:f,onblur:s,onInput:d,get value(){return e.value||""}})}}),r(o,{get when(){return e.type!=="textarea"},get children(){return r(I,{get disabled(){return e.disabled},get onchange(){return e.onChange},get maxlength(){return e.maxLength},get placeholder(){return e.placeholder},ref(t){var i=n;typeof i=="function"?i(t):n=t},onfocus:f,onblur:s,onInput:d,get type(){return e.type||"text"},get value(){return e.value||""},get onClick(){return e.onClick}})}}),r(o,{get when(){return e.suffix},get children(){return r(v,{get fallback(){return e.suffix},get children(){return r(k,{get when(){return typeof e.suffix=="string"},get children(){return r(T,{opacity:.6,onmousedown:g,size:12,get children(){return e.suffix}})}})}})}})]}}),r(o,{get when(){return c()},get children(){return r(m,{color:"var(--alert-color)",size:14,get children(){return c()}})}}),r(o,{get when(){return e.success},get children(){return r(m,{color:"var(--success-color)",size:14,get children(){return e.success}})}})]}})}export{_ as I};
//# sourceMappingURL=Input-DoZRayyi.js.map
