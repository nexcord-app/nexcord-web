import{D as k,H as n,c as e,a9 as t,e as x,o as O,t as R,i as l,F as B,m as D,S as y,aa as C,ab as v,q as U,d as H,I as P,b as w,a0 as A,Z as L}from"./ModerationService-7nF9_67y.js";import{u as f,s as z}from"./Flexbox-DahX4I5v.js";import{b as h,aR as F,aN as G}from"./useStore-C1x_XtZn.js";import{B as $,a as _}from"./Breadcrumb-xfmK78bh.js";import{S as u,a as S}from"./SettingsBlock-CMShPInh.js";import{a as q,A as T}from"./Text-xQnkEBKO.js";import{N as I}from"./Notice-B_aSsICh.js";import{B as W}from"./Block-CHmo8hJw.js";import{b as M}from"./date-QVcUUowu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useResizeObserver-DLOEUKTg.js";import"./languages-CyEDRxRF.js";var X=R("<div><div class=badge-name style=border-radius:4px;padding:3px;font-weight:bold;font-size:12px></div><div class=badge-desc>"),K=R("<div>");const Y=z("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  flex-shrink: 0;
`;function le(){const{header:r}=h();k(()=>{r.updateHeader({title:n("3i16p4")+" - "+n("rXTkFU"),iconName:"settings"})});const c=[t.DEER_EARS_WHITE,t.DEER_EARS_HORNS_DARK,t.DEER_EARS_HORNS,t.GOAT_HORNS,t.GOAT_EARS_WHITE,t.WOLF_EARS,t.DOG_SHIBA,t.DOG_EARS_BROWN,t.BUNNY_EARS_MAID,t.BUNNY_EARS_BLACK,t.CAT_EARS_PURPLE,t.CAT_EARS_BLUE,t.CAT_EARS_WHITE,t.CAT_EARS_MAID,t.FOX_EARS_GOLD,t.FOX_EARS_BROWN],d=()=>{const i=n("7K42wT"),s=n("ZShvX5");return n("uw1xma",{account:i,profile:s})};return e(Y,{get children(){return[e($,{get children(){return[e(_,{href:"/app",icon:"home",get title(){return n("t5AkH8")}}),e(_,{get title(){return n("rXTkFU")}})]}}),e(J,{}),e(I,{get description(){return n("CT7vJA")},type:"error",get title(){return n("+OMS2Q")},icon:"favorite"}),e(V,{}),e(p,{get badges(){return[t.SUPPORTER]},price:9.99}),e(p,{badges:c,price:4.99}),e(p,{get badges(){return[{...t.PALESTINE,description:d}]},price:0})]}})}const p=r=>{const c=h(),d=()=>c.account.user();return e(y,{get when(){return d()},get children(){return e(S,{get children(){return[e(u,{get label(){return n("Okudcq",{price:`$${r.price}`})},icon:"favorite"}),e(W,{get class(){return f`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(164px, 1fr));
            gap: 6px;
            justify-items: center;
            padding: 6px;
          `},get children(){return e(B,{get each(){return r.badges},children:(i,s)=>e(j,{get user(){return d()},badge:i,get index(){return s()},get length(){return r.badges.length}})})}})]}})}})},Z=f`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
  gap: 8px;
  position: relative;
  box-sizing: border-box;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--background-color);
    opacity: 0.2;
    z-index: -1;
    border-radius: 8px;
    pointer-events: none;
  }
  .badge-desc {
    font-size: 12px;
    opacity: 0.6;
    text-align: center;
  }
`,j=r=>{const[c,d]=x(!1);return(()=>{var i=X(),s=i.firstChild,b=s.nextSibling;return i.addEventListener("mouseleave",()=>d(!1)),i.$$mouseover=()=>d(!0),H(i,Z),l(i,e(T,{get user(){return{...r.user,badges:r.badge.bit}},size:52,get animate(){return c()}}),s),l(s,e(y,{get when(){return r.badge.icon},get children(){return e(P,{get name(){return r.badge.icon},size:14,get color(){return r.badge.textColor||"rgba(0, 0, 0, 0.7)"},style:{"margin-right":"4px","vertical-align":"middle"}})}}),null),l(s,()=>r.badge.name(),null),l(b,()=>r.badge.description?.()),w(g=>{var a=r.badge.color,o=r.badge.textColor||"rgba(0, 0, 0, 0.7)";return a!==g.e&&A(s,"background",g.e=a),o!==g.t&&A(s,"color",g.t=o),g},{e:void 0,t:void 0}),i})()},V=()=>e(S,{get children(){return[e(u,{get label(){return n("2HWt55")},icon:"info"}),e(u,{label:"Ko-Fi",iconSrc:"/assets/kofi.svg",href:"https://ko-fi.com/supertiger",hrefBlank:!0}),e(u,{get class(){return f`
          img {
            border-radius: 50%;
          }
        `},label:"Boosty",iconSrc:"/assets/boosty.jpg",href:"https://boosty.to/supertigerdev/donate",hrefBlank:!0})]}}),J=()=>{const r=h(),[c,d]=x([]),i=()=>r.account.user();O(()=>{F().then(d)});const s=()=>c().filter(a=>a.itemType==="badge"),b=()=>{const a=s().map(m=>{const E=C.find(N=>N.bit===parseInt(m.itemId));return{...E,acquiredAt:m.acquiredAt,enabled:v(i()?.badges||0,E.bit)}});return a.find(m=>m.name()===t.PALESTINE.name())||a.unshift({...t.PALESTINE,acquiredAt:0,enabled:v(i()?.badges||0,t.PALESTINE.bit)}),a},g=a=>{if(a.removable===!1)return U(n("Tb/ih0"),n("m1gfV3"),"error");G(a.bit).then(o=>{r.account.setUser({badges:o.badges})})};return(()=>{var a=K();return l(a,e(I,{type:"info",get description(){return n("DuUFUg")},style:{"margin-bottom":"12px"}}),null),l(a,e(S,{get children(){return[e(u,{get label(){return n("x0NzZw",{count:b().length})},icon:"badge"}),e(B,{get each(){return b()},children:o=>e(u,{onClick:()=>g(o),get label(){return o.name?.()},get description(){return D(()=>!!o.acquiredAt)()?n("Y12Go5",{date:M().datetime.mediumDate.format(o.acquiredAt)}):void 0},get icon(){return e(T,{get user(){return{...i(),badges:o.bit}},size:40})},get children(){return e(q,{style:{"pointer-events":"none"},get checked(){return o.enabled},get disabled(){return!o.removable}})}})})]}}),null),a})()};L(["mouseover"]);export{le as default};
//# sourceMappingURL=BadgeSettings-CNtD8YWq.js.map
