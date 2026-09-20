import{j as Ue,k as Ge,e as A,h as Y,ah as we,ak as We,bh as W,D as V,g as D,a1 as Ke,au as qe,c as l,bi as Se,S as T,t as $,a2 as Z,i as k,b as _,a8 as ee,a6 as te,J as Je,Z as Ce,E as ne,F as K,o as U,d as S,W as Ze,X as be,m as N,aH as pe,K as ke,ad as Qe,v as Ye,z as Xe,C as Ie,a as se,a0 as ve,a4 as et,H as X,I as Oe}from"./ModerationService-DpHh3JQr.js";import{T as tt,s as L,u as Fe}from"./Flexbox-Cufh4wPc.js";import{r as nt}from"./index-1IzJrYOd.js";import{B as fe,A as rt}from"./Text-CN5caMAL.js";import{b as it,I as ot,as as _e}from"./useStore-DEZEOTom.js";import{u as st}from"./useResizeObserver-Dz383fBa.js";import{S as xe}from"./Skeleton-DNejdNgG.js";import{R as Re}from"./index-CNhihNyc.js";import{I as at}from"./Input-C3UKcv4e.js";const le=(e,t)=>{const i=[];for(let n=0;n<t;n+=1)i.push(e+n);return i},ce=e=>Number.isFinite(e)?e:0,ct=e=>e.matches(":focus-within"),lt=e=>e.querySelector(":focus"),ut=e=>{const t=lt(e);return t?(t.click(),!0):!1},dt=(e,t)=>{let i=t,n=0,r=0;for(;i&&e!==i;){const{offsetTop:o,offsetLeft:s,offsetParent:a}=i;if(e.contains(a))n+=o,r+=s;else{n+=o-e.offsetTop,r+=s-e.offsetLeft;break}i=a}return{offsetTop:n,offsetLeft:r}},gt=Ue(),ft=e=>{let t=0,i=0;if(e.borderBoxSize){const{borderBoxSize:n}=e,r=Array.isArray(n)?n[0]:n;t=r.inlineSize,i=r.blockSize}else{const n=e.target.getBoundingClientRect();t=n.width,i=n.height}return{width:t,height:i}},me=(e,t,i)=>{const[n,r]=i?[e,t]:[t,e];return{main:n,cross:r}},he={main:0,cross:0},mt=(e,t)=>e.cross===t.cross,ht=e=>{const t=Ge(gt),[i,n]=A(void 0),r=()=>e.scrollTarget||t?.scrollTarget,o=Y(()=>(e.direction||"vertical")==="horizontal"),[s,a]=we({isMeasured:!1,mainAxisScrollValue:0,target:{...he},container:{...he,offsetMain:0,offsetCross:0},itemSize:{...he}}),c=f=>{const v=f.target,w=r(),y=i(),m=o(),h=ft(f),j=me(h.width,h.height,m);if(v===w)a("target",j);else if(v===y&&(!mt(s.container,j)||!s.isMeasured)){const F=dt(w,y),B=me(F.offsetLeft,F.offsetTop,m);a("container",{...j,offsetMain:B.main,offsetCross:B.cross})}},u=()=>{const f=r();if(f){const v=o()?f.scrollLeft:f.scrollTop;return Math.floor(v)}return 0},d=new ResizeObserver(f=>{We(()=>{f.forEach(v=>c(v)),a({isMeasured:!0,mainAxisScrollValue:u()})})});W(()=>{if(!s.isMeasured)return;const f=o(),v=e.itemSize;let w;typeof v=="function"?w=v(s.container.cross,f):w=v;const y=me(w.width||0,w.height||0,f);a("itemSize",y)});const g=()=>{a("mainAxisScrollValue",u())};return V(()=>{const f=r(),v=i();!f||!v||(f.addEventListener("scroll",g),d.observe(f),d.observe(v),D(()=>{a("isMeasured",!1),f.removeEventListener("scroll",g),d.unobserve(f),d.unobserve(v)}))}),{containerEl:i,setContainerRefEl:n,isDirectionHorizontal:o,measurements:s}},vt=1,xt=e=>{const{total:t,focusPosition:i,positionCount:n,startPosition:r,prevPositions:o,prevStartPosition:s}=e,a=o.length;if(t<=n)return a===n&&s===r?o:le(0,n);const u=r+n,d=y=>y<r||y>=u,g=()=>{if(d(i))return i;let y;return u<t?y=u:y=r-1,y},f=n+vt;if(a!==f){const y=le(r,n);return y.push(g()),y}const v=[];for(let y=0;y<n;y+=1){const m=r+y;o.includes(m)||v.push(m)}const w=g();return o.includes(w)||v.push(w),o.map(y=>d(y)&&y!==w?v.pop():y)},yt=e=>Number.isInteger(e)?e:0,wt=(e,t,i)=>{const[n,r]=we({overscan:0,positionCount:0,maxScrollPosition:0,currentPosition:0});W(()=>{if(!e.isMeasured)return;const a=t.totalItemCount,c=e.itemSize.main,u=e.target.main;Ke(()=>{const g=i()??Math.max(Math.ceil(180/c),2),f=ce(g);r("overscan",f);const v=Math.ceil(u/c),w=yt(Math.min(v+f*2,a));r("positionCount",w),r("maxScrollPosition",a-w)})}),W(()=>{if(!e.isMeasured)return;const a=e.mainAxisScrollValue-e.container.offsetMain,u=Math.floor(a/e.itemSize.main)-n.overscan,d=Math.min(Math.max(0,u),n.maxScrollPosition);r("currentPosition",d)});let o=0;return Y((a=[])=>{if(!e.isMeasured)return a;const c=n.currentPosition,u=xt({total:t.totalItemCount,focusPosition:t.focusPosition,positionCount:n.positionCount,startPosition:c,prevStartPosition:o,prevPositions:a});return o=c,u})};var Ct=$("<div>");const kt=Math.random().toString(36).slice(2,1/0),ye=`virtual-container-${kt}`;let Q;const It=()=>{Q||(Q=document.createElement("style"),Q.type="text/css",Q.textContent=`
      .${ye} {
        position: relative !important;
        flex-shrink: 0 !important;
      }
      .${ye} > * {
        will-change: transform !important;
        box-sizing: border-box !important;
        contain: strict !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
      }
    `,document.head.appendChild(Q))};function Pt(e){It();const[t,i]=we({focusPosition:0,mainAxis:{totalItemCount:0,focusPosition:0,scrollValue:0},crossAxis:{totalItemCount:0}}),{containerEl:n,setContainerRefEl:r,isDirectionHorizontal:o,measurements:s}=ht(e),a=()=>e.items&&e.items.length||0;W(()=>{if(!s.isMeasured)return;const x=ce(e.crossAxisCount?.(s,a())||0);i("crossAxis",{totalItemCount:Math.max(1,x)})}),W(()=>{if(!s.isMeasured)return;const x=a(),C=t.crossAxis.totalItemCount,I=Math.ceil(x/C);i("mainAxis",{totalItemCount:ce(I)}),i("crossAxis",{totalItemCount:C,positions:le(0,t.crossAxis.totalItemCount)})}),W(()=>{const x=Math.floor(t.focusPosition/t.crossAxis.totalItemCount);i("mainAxis","focusPosition",ce(x))});const c=wt(s,t.mainAxis,()=>e.overscan),u=()=>{const x=t.mainAxis.totalItemCount*s.itemSize.main,C=o()?"width":"height",I=o()?"height":"width";return{[C]:`${x}px`,[I]:"100%"}},d=(x,C=0)=>{const I=s.itemSize,E=I.main*x,b=I.cross*C;let z=b,p=E,O=I.cross,H=I.main;return o()&&(z=E,p=b,O=I.main,H=I.cross),{transform:`translate(${z}px, ${p}px)`,width:O?`${O}px`:"",height:H?`${H}px`:""}},g=Y(()=>le(0,t.crossAxis.totalItemCount)),f=Y(()=>e.items||[]),v=(x,C)=>x*t.crossAxis.totalItemCount+C,w=x=>l(Se,{get each(){return c()},children:C=>{const I=Y(()=>{const E=C(),b=x.crossPos;return b===void 0?E:v(E,b)});return l(T,{get when(){return I()<f().length},get children(){return l(Je,{get component(){return e.children},get items(){return f()},get item(){return f()[I()]},get index(){return I()},get tabIndex(){return I()===t.focusPosition?0:-1},get style(){return d(C(),x.crossPos)}})}})}}),y=qe(()=>l(T,{get when(){return t.crossAxis.totalItemCount>1},get fallback(){return l(w,{})},get children(){return l(Se,{get each(){return g()},children:x=>l(w,{get crossPos(){return x()}})})}})),m=()=>{const x=g(),C=c(),E=y().findIndex(b=>b?.matches(":focus-within, :focus"));if(E===-1)return-1;if(t.crossAxis.totalItemCount>1){const b=Math.floor(E/C.length),z=E%C.length,p=x[b],O=C[z];return v(O,p)}return C[E]},h=(x,C)=>{const I=t.focusPosition;let E=I%t.crossAxis.totalItemCount,b=Math.floor(I/t.crossAxis.totalItemCount);C?b+=x:E+=x;const z=v(b,E);if(z<0||z>=a())return;const p=g().indexOf(E);if(p===-1)return;i("focusPosition",z);const O=y(),H=c(),Ee=H.indexOf(b);if(Ee===-1)return;const De=p*H.length+Ee,ge=O[De];ge&&queueMicrotask(()=>{ge.focus(),ge.scrollIntoView({block:"nearest"})})},j=x=>{const{code:C}=x,I=C==="ArrowUp",E=C==="ArrowDown",b=C==="ArrowLeft",z=C==="ArrowRight",p=I||E,O=b||z;if(p||O)h(E||z?1:-1,o()?O:p);else if(C==="Enter"){if(!ut(n()))return}else return;x.preventDefault()},F=()=>{const x=m();i("focusPosition",x===-1?0:x)},B=async()=>{queueMicrotask(()=>{ct(n())||i("focusPosition",0)})};return(()=>{var x=Ct();return x.$$focusout=B,x.$$focusin=F,x.$$keydown=j,Z(r,x),k(x,y),_(C=>{var I=`${ye} ${e.className||""}`,E=u(),b=e.role||"list";return I!==C.e&&(x.className=C.e=I),C.t=ee(x,E,C.t),b!==C.a&&te(x,"role",C.a=b),C},{e:void 0,t:void 0,a:void 0}),x})()}Ce(["keydown","focusin","focusout"]);const M={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0},Et=(e,t)=>String(e.rankedValue).localeCompare(String(t.rankedValue));function Le(e,t,i){i===void 0&&(i={});const{keys:n,threshold:r=M.MATCHES,baseSort:o=Et,sorter:s=u=>u.sort((d,g)=>At(d,g,o))}=i,a=e.reduce(c,[]);return s(a).map(u=>{let{item:d}=u;return d});function c(u,d,g){const f=St(d,n,t,i),{rank:v,keyThreshold:w=r}=f;return v>=w&&u.push({...f,item:d,index:g}),u}}Le.rankings=M;function St(e,t,i,n){if(!t){const o=e;return{rankedValue:o,rank:Ae(o,i,n),keyIndex:-1,keyThreshold:n.threshold}}return Tt(e,t).reduce((o,s,a)=>{let{rank:c,rankedValue:u,keyIndex:d,keyThreshold:g}=o,{itemValue:f,attributes:v}=s,w=Ae(f,i,n),y=u;const{minRanking:m,maxRanking:h,threshold:j}=v;return w<m&&w>=M.MATCHES?w=m:w>h&&(w=h),w>c&&(c=w,d=a,g=j,y=f),{rankedValue:y,rank:c,keyIndex:d,keyThreshold:g}},{rankedValue:e,rank:M.NO_MATCH,keyIndex:-1,keyThreshold:n.threshold})}function Ae(e,t,i){return e=je(e,i),t=je(t,i),t.length>e.length?M.NO_MATCH:e===t?M.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?M.EQUAL:e.startsWith(t)?M.STARTS_WITH:e.includes(` ${t}`)?M.WORD_STARTS_WITH:e.includes(t)?M.CONTAINS:t.length===1?M.NO_MATCH:bt(e).includes(t)?M.ACRONYM:_t(e,t))}function bt(e){let t="";return e.split(" ").forEach(n=>{n.split("-").forEach(o=>{t+=o.substr(0,1)})}),t}function _t(e,t){let i=0,n=0;function r(c,u,d){for(let g=d,f=u.length;g<f;g++)if(u[g]===c)return i+=1,g+1;return-1}function o(c){const u=1/c,d=i/t.length;return M.MATCHES+d*u}const s=r(t[0],e,0);if(s<0)return M.NO_MATCH;n=s;for(let c=1,u=t.length;c<u;c++){const d=t[c];if(n=r(d,e,n),!(n>-1))return M.NO_MATCH}const a=n-s;return o(a)}function At(e,t,i){const{rank:o,keyIndex:s}=e,{rank:a,keyIndex:c}=t;return o===a?s===c?i(e,t):s<c?-1:1:o>a?-1:1}function je(e,t){let{keepDiacritics:i}=t;return e=`${e}`,i||(e=nt(e)),e}function jt(e,t){typeof t=="object"&&(t=t.key);let i;if(typeof t=="function")i=t(e);else if(e==null)i=null;else if(Object.hasOwnProperty.call(e,t))i=e[t];else{if(t.includes("."))return Mt(t,e);i=null}return i==null?[]:Array.isArray(i)?i:[String(i)]}function Mt(e,t){const i=e.split(".");let n=[t];for(let r=0,o=i.length;r<o;r++){const s=i[r];let a=[];for(let c=0,u=n.length;c<u;c++){const d=n[c];if(d!=null)if(Object.hasOwnProperty.call(d,s)){const g=d[s];g!=null&&a.push(g)}else s==="*"&&(a=a.concat(d))}n=a}return Array.isArray(n[0])?[].concat(...n):n}function Tt(e,t){const i=[];for(let n=0,r=t.length;n<r;n++){const o=t[n],s=$t(o),a=jt(e,o);for(let c=0,u=a.length;c<u;c++)i.push({itemValue:a[c],attributes:s})}return i}const Me={maxRanking:1/0,minRanking:-1/0};function $t(e){return typeof e=="string"?Me:{...Me,...e}}var zt=$('<svg xmlns=http://www.w3.org/2000/svg height=20px viewBox="0 0 24 24"width=20px fill=white><path d="M0 0h24v24H0V0z"fill=none></path><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z">'),pt=$("<div>"),Ot=$("<div style=display:flex>"),Ft=$("<span>"),Rt=$("<div class=emojiImage>"),Lt=$("<div class=details><div class=name></div><div class=category>"),Ht=$("<input type=text placeholder=Search>");function Vt(){return zt()}var Pe=40,[re,q]=A([]),[ie,oe]=A([]);function Nt(e,t=7){let i=[],n=[],r=[],o=-1,s=0;for(let a=0;a<e.length;a++){const c=e[a];if(!c)continue;const u={...c.category,type:"category"};let d=r.findIndex(g=>g.id===u.id);d<0&&(r.push(u),d=r.length-1),i[s]||(i[s]=[]),o!==d&&(o=d,a!==0&&(i[s]?.length&&s++,i[s]=[]),i[s].push(u),n.push([(re().length+(i.length-1))*Pe,u]),s++,i[s]=[]),i[s].push(c),i[s]?.length>t&&s++}q([...re(),...i]),oe([...ie(),...n])}function Bt(e,t=7){let i=-1,n=0,r=[],o=[],s=[];for(let a=0;a<e.length;a++){const c=e[a];if(!c)continue;let u=s.indexOf(c.category);if(u<0&&(s.push(c.category),u=s.length-1),r[n]||(r[n]=[]),i!==u){i=u,a!==0&&(r[n]?.length&&n++,r[n]=[]);const d={name:c.category,index:a,type:"category"};r[n].push(d),o.push([(re().length+(r.length-1))*Pe,d]),n++,r[n]=[]}r[n].push(c),r[n]?.length>t&&n++}q([...re(),...r]),oe([...ie(),...o])}function Dt(e,t,i,n=7){const r=Le([...t,...e],i,{keys:["short_names.*","name"]});let o=0,s=[];for(let a=0;a<r.length;a++){const c=r[a];s[o]||(s[o]=[]),s[o].push(c),s[o]?.length>n&&o++}q(s)}function Ut(e,t=7){let i=0,n=[];const r={id:"recent",name:"Recent Emojis",type:"category",customElement:()=>l(Vt,{})};oe([[0,r]]),n[i]=[r],i++;for(let o=0;o<e.length;o++){const s=e[o];n[i]||(n[i]=[]),n[i].push(s),n[i]?.length>t&&i++}q(n)}var Gt=L.div`
  position: relative;
  display: flex;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  height: 350px;
  width: 400px;
  border: solid 1px rgba(255, 255, 255, 0.3);
  color: white;
  overflow: hidden;
  z-index: 1;
`;function Wt(e,t){let i;return()=>{i&&clearTimeout(i),i=window.setTimeout(e,t)}}var Te=e=>[...ie()].reverse().find(t=>e>=t[0])?.[1],Kt=e=>{const[t,i]=A(),[n,r]=A(),[o,s]=A(""),a=e.emojis?.map((f,v)=>({...f,index:v})),c=He().map(f=>{const v=a?.find(y=>y.short_names[0]===f);if(v)return v;const w=e.customEmojis?.find(y=>y.name===f);if(w)return w}).filter(f=>f);_(ne([()=>e.emojis,()=>e?.customEmojis,()=>e.maxRow,o],()=>{if(o())return Dt(a||[],e.customEmojis||[],o(),e.maxRow);oe([]),q([]),c.length&&Ut(c,e.maxRow),e.customEmojis?.length&&Nt(e.customEmojis,e.maxRow),a?.length&&Bt(a,e.maxRow)})),D(()=>{oe([]),q([])}),V(()=>{t()?.addEventListener("scroll",u),r(Te(t()?.scrollTop)),D(()=>{t()?.removeEventListener("scroll",u)})});const u=Wt(()=>{r(Te(t()?.scrollTop))},50),d={primary:e.primaryColor||"#77a8f3"},g=f=>{sn(f.name||f.short_names[0],e.maxRecent||10),e.onEmojiClick?.(f)};return l(tt,{theme:d,get children(){return l(Gt,{get class(){return e.class},get style(){return e.style},get children(){return[l(Zt,{onCategoryClick:()=>s(""),mainProps:e,get scrollElement(){return t()},get selectedCategory(){return n()}}),l(en,{onSearchInput:s,get searchValue(){return o()},onEmojiClick:g,mainProps:e,ref:i})]}})}})},qt=L.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 5px;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 2px;
  z-index: 1;

  &::-webkit-scrollbar {
    display: none;
  }
`,Jt=L.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;

  aspect-ratio: 1/1;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  ${e=>e.selected?`
    &:before {
      position: absolute;
      content: '';
      width: 15px;
      height: 3px;
      background: ${e.theme?.primary};
      bottom: 0;
      border-radius: 8px;
    }
  `:""}
`,Zt=e=>{const t=e.mainProps.spriteUrl,i=r=>{e.onCategoryClick();const o=ie().find(s=>r.id?r.id===s[1].id:r.name===s[1].name)?.[0];o!==void 0&&e.scrollElement?.scrollTo({top:o})},n=r=>{const o=()=>r.selectedCategory?.id?r.selectedCategory?.id===r.category?.id:r.selectedCategory?.name===r.category?.name;return l(Jt,{class:"categoryContainer",onclick:()=>i(r.category),get selected(){return o()},get title(){return r.category?.name},get children(){return[l(T,{get when(){return r.category.customElement},get children(){return r.category.customElement(25)}}),l(T,{get when(){return!r.category.customElement},get children(){return l(ue,{size:25,get index(){return r.category.index},get url(){return r.category.url||t}})}})]}})};return l(qt,{class:"categoriesContainer",get children(){return l(K,{get each(){return ie()},children:([,r],o)=>l(n,{get index(){return o()},get selectedCategory(){return e.selectedCategory},category:r})})}})},Qt=Fe`
  display: flex;
  flex-direction: column;
  margin: 5px;
  overflow: auto;
  flex: 1;
`,Yt=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  aspect-ratio: 1/1;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  height: 40px;
  width: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,Xt=L.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.12);
  flex: 1;
  padding-left: 6px;
  border-radius: 6px;
  height: 25px;
  align-self: center;
  margin-right: 5px;
`,$e=40,en=e=>{const t=e.onEmojiClick,i=e.mainProps.spriteUrl,[n,r]=A(void 0),o=a=>l(Yt,{class:"emojiContainer",get title(){return a.emoji.name||a.emoji.short_names[0]},onclick:()=>t?.(a.emoji),onMouseEnter:()=>r(a.emoji),get children(){return l(ue,{get index(){return N(()=>!!a.emoji.url)()?void 0:a.emoji.index},get url(){return a.emoji.url||i}})}});let s;return U(()=>{e.ref(s)}),(()=>{var a=pt(),c=s;return typeof c=="function"?Z(c,a):s=a,S(a,`${Qt||""} emojisContainer`),k(a,l(on,{get autoFocus(){return e.mainProps.focusOnMount},get onText(){return e.onSearchInput},get value(){return e.searchValue}}),null),k(a,l(Pt,{scrollTarget:s,get items(){return re()},itemSize:{height:Pe},children:u=>(()=>{var d=Ot();return k(d,l(K,{get each(){return u.item},children:g=>l(Ze,{get children(){return[l(be,{get when(){return g.type==="category"},get children(){return l(Xt,{class:"title",get children(){return[l(T,{get when(){return!g.customElement},get children(){return l(ue,{size:15,get index(){return N(()=>!!g.url)()?void 0:g.index},get url(){return g.url||i}})}}),l(T,{get when(){return g.customElement},get children(){return g.customElement(15)}}),(()=>{var f=Ft();return k(f,()=>g.name),f})()]}})}}),l(be,{get when(){return g.type!=="category"},get children(){return l(o,{emoji:g})}})]}})})),_(g=>ee(d,{...u.style,width:"100%"},g)),d})()}),null),k(a,l(T,{get when(){return n()},get children(){return l(nn,{get mainProps(){return e.mainProps},get emoji(){return n()}})}}),null),a})()};function ue(e){const t=()=>e.index===void 0;let i=()=>{e.size=e.size||30;const n={"background-image":`url(${e.url})`,height:e.size+"px",width:e.size+"px","background-size":"contain","background-repeat":"no-repeat"};if(!t()){const r=e.index%$e,o=Math.floor(e.index/$e);n["background-position"]=`${-(r*e.size)}px ${-(o*e.size)}px`,n["background-size"]=40*e.size+"px"}return t()&&(n["background-position"]="center"),n};return(()=>{var n=Rt();return _(r=>{var o=i(),s=!!t();return r.e=ee(n,o,r.e),s!==r.t&&n.classList.toggle("customEmojiImage",r.t=s),r},{e:void 0,t:void 0}),n})()}var tn=L("div")`
  display: flex;
  margin-top: auto;
  gap: 10px;
  align-items: center;
  position: sticky;
  bottom: 0;
  background-color: rgba(99, 99, 99, 0.4);
  padding: 5px;
  backdrop-filter: blur(20px);
  border-radius: 8px;
  width: calc(100% - 15px);
  border: solid 1px rgba(255, 255, 255, 0.2);

  .details {
  }
  .name {
    font-size: 14px;
  }
  .category {
    font-size: 12px;
    opacity: 0.6;
  }
`;function nn(e){const t=e.mainProps.spriteUrl;return l(tn,{get children(){return[l(ue,{get index(){return N(()=>!!e.emoji.url)()?void 0:e.emoji.index},get url(){return e.emoji.url||t}}),(()=>{var i=Lt(),n=i.firstChild,r=n.nextSibling;return k(n,()=>e.emoji.name||e.emoji.short_names.join(" ")),k(r,()=>e.emoji.category.name||e.emoji.category),i})()]}})}var rn=L("div")`
  display: flex;
  gap: 10px;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: rgba(99, 99, 99, 0.4);
  backdrop-filter: blur(20px);
  border-radius: 6px;
  width: calc(100% - 5px);
  z-index: 1;
  border: solid 1px rgba(255, 255, 255, 0.2);
  border-bottom: solid 2px ${e=>e.theme?.primary};
  input {
    padding: 10px;
    background-color: transparent;
    color: white;
    border: none;
    width: 100%;
    outline: none;
  }
`;function on(e){let t;return U(()=>{e.autoFocus!==!1&&t?.focus()}),l(rn,{get children(){var i=Ht();i.$$input=r=>e.onText(r.target.value);var n=t;return typeof n=="function"?Z(n,i):t=i,_(()=>i.value=e.value),i}})}function sn(e,t){let i=He();i=i.filter(n=>n!==e),i.unshift(e),localStorage["nerimity-solid-emoji-pane"]=JSON.stringify(i.splice(0,t))}function He(){return JSON.parse(localStorage["nerimity-solid-emoji-pane"]||"[]")}Ce(["input"]);const an="_outerEmojiPicker_19p1i_1",cn="_gifPickerSearchBarInput_19p1i_5",ln="_tabs_19p1i_54",un="_emojiPicker_19p1i_65",dn="_poweredByKlipy_19p1i_78",gn="_gifPickerSearchBar_19p1i_5",fn="_favoriteToggle_19p1i_113",mn="_active_19p1i_130",hn="_gifPickerContainer_19p1i_135",vn="_gifPickerCategories_19p1i_146",xn="_gap_19p1i_155",yn="_gifPickerSearches_19p1i_160",wn="_gifSearchItem_19p1i_178",Cn="_image_19p1i_191",kn="_name_19p1i_198",In="_starOverlay_19p1i_215",Pn="_gifCategoryItem_19p1i_240",P={outerEmojiPicker:an,gifPickerSearchBarInput:cn,tabs:ln,emojiPicker:un,poweredByKlipy:dn,gifPickerSearchBar:gn,favoriteToggle:fn,active:mn,gifPickerContainer:hn,gifPickerCategories:vn,gap:xn,gifPickerSearches:yn,"no-favorites":"_no-favorites_19p1i_170",gifSearchItem:wn,image:Cn,name:kn,starOverlay:In,gifCategoryItem:Pn},En=async()=>await pe({method:"GET",url:ke.SERVER_URL+"/api/tenor/categories",useToken:!0}),Sn=async(e,t)=>await pe({method:"GET",url:ke.SERVER_URL+"/api/v2/tenor/search",params:{query:e,...t?{pos:t}:{}},useToken:!0}),bn=(e,t)=>{U(()=>{document.addEventListener(e,t),D(()=>{document.removeEventListener(e,t)})})},[ae,ze]=Qe(Ye.FAVORITE_GIFS,{}),G={add:e=>{const t={...ae(),[e.url]:e};ze(t)},remove:e=>{const t={...ae()};delete t[e],ze(t)},isFavorite:e=>!!ae()[e],getFavorites:()=>Object.values(ae())};var J=$("<div>"),Ve=$("<div><div>"),_n=$("<img src=/assets/klipy-powered-by.png>"),Ne=$("<div tabindex=0><img loading=lazy><div>",!0,!1,!1),An=$("<div style=aspect-ratio:1/1;height:initial;align-self:flex-start>");const[R,de]=A("");function jn(e){const t=Xe(),{servers:i}=it(),{paneWidth:n,width:r,height:o,isMobileAgent:s}=Ie(),[a,c]=A(!1),[u,d]=A("EMOJI");V(ne(()=>e.tab,()=>d(e.tab??"EMOJI"))),bn("keydown",m=>{m.key==="Escape"&&e.close()}),U(()=>{ot(),document.addEventListener("mousedown",v),document.addEventListener("keydown",g),document.addEventListener("keyup",f),D(()=>{document.removeEventListener("mousedown",v),document.removeEventListener("keydown",g),document.removeEventListener("keyup",f)})});const g=m=>{m.key==="Shift"&&c(!0)},f=m=>{m.key==="Shift"&&c(!1)},v=m=>{const h=m.target;h.closest(`.${P.outerEmojiPicker}`)||h.closest(".emojiPickerButton")||e.close()};V(ne(r,()=>e.close(),{defer:!0}));const w=()=>i.emojisUpdatedDupName().filter(m=>e.serverId?m.serverId===e.serverId:!0).map(m=>{const h=i.get(m.serverId),j=et(h,"avatar");return{id:m.id,gif:m.gif,webp:m.webp,category:{id:m.serverId,name:h.name,url:j,customElement:j?void 0:F=>rt({size:F,server:{...h,verified:!1}})},name:m.name,url:`${ke.NERIMITY_CDN}emojis/${m.id}.${m.gif&&!m.webp?"gif":"webp"}?size=60`}}).sort((m,h)=>m.category.id===t.serverId?-1:h.category.id===t.serverId?1:0),y=()=>n()<340?{row:4,width:280}:n()<360?{row:5,width:320}:n()<420?{row:6,width:355}:n()<470?{row:7,width:400}:{row:8,width:430};return(()=>{var m=J();return k(m,l(T,{get when(){return N(()=>u()==="EMOJI")()&&_e().length},get children(){return l(Kt,{get class(){return se(P.emojiPicker,"emoji-picker")},get focusOnMount(){return!s()},spriteUrl:"/assets/emojiSprites-17.png",get emojis(){return _e()},get customEmojis(){return w()},onEmojiClick:h=>{if(h.id){const j=h.gif&&h.webp?"wace":h.gif?"ace":"ce";e.onClick(`[${j}:${h.id}:${h.name}]`,a(),!0);return}e.onClick(h.short_names?.[0]||"",a())},primaryColor:"var(--primary-color)",maxRecent:20,get maxRow(){return y()?.row}})}}),null),k(m,l(T,{get when(){return u()==="GIF"},get children(){return l(Mn,{get gifPicked(){return e.gifPicked}})}}),null),k(m,l(T,{get when(){return e.showGifPicker},get children(){var h=J();return k(h,l(T,{get when(){return R().trim()},get children(){return l(fe,{style:{"margin-right":"auto","margin-left":"6px"},iconName:"arrow_back",margin:0,onClick:()=>de("")})}}),null),k(h,l(fe,{iconName:"gif",margin:0,get primary(){return u()==="GIF"},onClick:()=>d("GIF")}),null),k(h,l(fe,{iconName:"face",margin:0,get primary(){return u()==="EMOJI"},onClick:()=>d("EMOJI")}),null),_(()=>S(h,P.tabs)),h}}),null),_(h=>{var j=P.outerEmojiPicker,F=y().width+"px",B=o()+(e.heightOffset||0)+"px";return j!==h.e&&S(m,h.e=j),F!==h.t&&ve(m,"width",h.t=F),B!==h.a&&ve(m,"height",h.a=B),h},{e:void 0,t:void 0,a:void 0}),m})()}const Mn=e=>{const[t,i]=A(!1),[n,r]=A(null);return D(()=>{de("")}),V(ne(R,()=>{n()?.scrollTo(0,0)})),(()=>{var o=J();return Z(r,o),k(o,l(Tn,{get favoritesMode(){return t()},setFavoritesMode:i}),null),k(o,l(T,{get when(){return N(()=>!!R().trim())()&&!t()},get children(){return l(zn,{get scrollElement(){return n()},get gifPicked(){return e.gifPicked},get query(){return R().trim()}})}}),null),k(o,l(On,{get hide(){return!!R().trim()||t()},onPick:s=>de(s.searchterm)}),null),k(o,l(T,{get when(){return t()},get children(){return l($n,{get query(){return R().trim()},get gifPicked(){return e.gifPicked}})}}),null),_(()=>S(o,P.gifPickerContainer)),o})()},Tn=e=>{const{isMobileAgent:t}=Ie(),[i,n]=A(null);let r=null;const o=s=>{r&&clearTimeout(r),r=window.setTimeout(()=>{de(s.target.value),r=null},350)};return U(()=>{t()||i()?.focus()}),(()=>{var s=Ve(),a=s.firstChild;return k(s,l(at,{ref:n,get placeholder(){return N(()=>!!e.favoritesMode)()?X("4KvpyN"):X("6sH/J/",{platform:"KLIPY"})},get value(){return R()},onInput:o,get class(){return P.gifPickerSearchBarInput},get suffix(){return(()=>{var c=_n();return _(()=>S(c,P.poweredByKlipy)),c})()}}),a),a.$$click=()=>e.setFavoritesMode(!e.favoritesMode),k(a,l(Oe,{get name(){return e.favoritesMode?"star":"star_border"},color:"var(--primary-color)"})),_(c=>{var u=P.gifPickerSearchBar,d=se(P.favoriteToggle,e.favoritesMode&&P.active),g=X("xLNdDt");return u!==c.e&&S(s,c.e=u),d!==c.t&&S(a,c.t=d),g!==c.a&&te(a,"title",c.a=g),c},{e:void 0,t:void 0,a:void 0}),s})()},$n=e=>{const t=G.getFavorites,i=()=>{const n=e.query?.toLowerCase();return n?t().filter(r=>r.url.toLowerCase().includes(n)||r.gifUrl.toLowerCase().includes(n)||r.tags?.some(o=>o.toLowerCase().includes(n))):t()};return(()=>{var n=J();return k(n,l(T,{get when(){return i().length===0},get children(){var r=J();return k(r,(()=>{var o=N(()=>!!e.query);return()=>o()?X("GGkDu/"):X("x3znaX")})()),_(()=>S(r,P["no-favorites"])),r}}),null),k(n,l(Re,{on:i,get children(){return l(K,{get each(){return i()},children:(r,o)=>l(Be,{get index(){return o()},get url(){return r.url},onClick:()=>e.gifPicked?.(r),get dimensions(){return{width:r.previewWidth,height:r.previewHeight}},isFavorite:!0})})}}),null),_(()=>S(n,P.gifPickerSearches)),n})()},zn=e=>{let t;const[i,n]=A(!1),[r,o]=A(null),s=()=>r()?.results||[],a=async(c=!1)=>{if(!e.scrollElement||i())return;c||o(null),n(!0);const u=await Sn(e.query,c?r()?.next:void 0);if(!u){n(!1);return}o(c?d=>({...u,results:[...d.results,...u.results]}):u),n(!1)};return V(ne(()=>e.query,()=>{a()})),(()=>{var c=J(),u=t;return typeof u=="function"?Z(u,c):t=c,k(c,l(K,{get each(){return s()},children:(d,g)=>l(Be,{get index(){return g()},get url(){return d.previewUrl},onClick:()=>e.gifPicked?.(d),get dimensions(){return N(()=>!!d.previewHeight)()?{width:d.previewWidth,height:d.previewHeight}:void 0},get isFavorite(){return G.isFavorite(d.previewUrl)}})}),null),k(c,l(Re,{on:r,get children(){return l(K,{get each(){return Array(10).fill(void 0)},children:(d,g)=>l(pn,{get index(){return g()+s().length},onLoadMore:()=>a(!0)})})}}),null),_(()=>S(c,P.gifPickerSearches)),c})()},Be=e=>{const t=()=>e.dimensions?{"aspect-ratio":`${e.dimensions.width} / ${e.dimensions.height}`,height:"initial","align-self":"flex-start"}:{},i=()=>e.dimensions?{width:"100%",height:"initial","object-fit":"contain"}:{};return U(()=>{const n=[...document.querySelectorAll(`.${P.gifSearchItem}`)],r=n[e.index],o=n[e.index-2];if(!o)return;const s=r?.offsetTop,a=o?.offsetTop+o?.clientHeight;r.style.marginTop=`${a-s+8}px`}),(()=>{var n=Ne(),r=n.firstChild,o=r.nextSibling;return r.$$click=()=>e.onClick?.(),o.$$click=s=>{s.stopPropagation(),G.isFavorite(e.url)?G.remove(e.url):G.add({url:e.url,gifUrl:e.url,previewUrl:e.url,previewWidth:e.dimensions?.width||0,previewHeight:e.dimensions?.height||0,tags:R().trim()?[R().trim()]:[]})},k(o,l(Oe,{get name(){return e.isFavorite||G.isFavorite(e.url)?"star":"star_border"},color:"var(--primary-color)"})),_(s=>{var a=P.gifSearchItem,c={...t(),...e.style},u=P.image,d=i(),g=e.url,f=se(P.starOverlay);return a!==s.e&&S(n,s.e=a),s.t=ee(n,c,s.t),u!==s.a&&S(r,s.a=u),s.o=ee(r,d,s.o),g!==s.i&&te(r,"src",s.i=g),f!==s.n&&S(o,s.n=f),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),n})()},pn=e=>{let t;V(()=>{const n=[...document.querySelectorAll(`.${P.gifSearchItem}`)],r=n[e.index],o=n[e.index-2];if(!o)return;const s=r?.offsetTop,a=o?.offsetTop+o?.clientHeight;r.style.marginTop=`${a-s+8}px`});const i=n=>{n[0]?.isIntersecting&&e.onLoadMore?.()};return V(()=>{const n=new IntersectionObserver(i);n.observe(t),D(()=>{n.disconnect()})}),(()=>{var n=An(),r=t;return typeof r=="function"?Z(r,n):t=n,k(n,l(xe.Item,{height:"100%",width:"100%"})),_(()=>S(n,P.gifSearchItem)),n})()},On=e=>{const[t,i]=A([]);return U(()=>{En().then(i)}),(()=>{var n=Ve(),r=n.firstChild;return k(n,l(T,{get when(){return!t().length},get children(){return l(Fn,{})}}),r),k(n,l(K,{get each(){return t()},children:o=>l(Rn,{category:o,onClick:()=>e.onPick(o)})}),r),_(o=>{var s=se(P.gifPickerCategories,Fe`
          flex-wrap: wrap;
          gap: 6px;
        `),a=e.hide?"none":"flex",c=P.gap;return s!==o.e&&S(n,o.e=s),a!==o.t&&ve(n,"display",o.t=a),c!==o.a&&S(r,o.a=c),o},{e:void 0,t:void 0,a:void 0}),n})()};function Fn(){return l(xe.List,{count:20,style:{width:"100%","flex-wrap":"wrap","flex-direction":"row"},get children(){return l(xe.Item,{height:"100px",width:"calc(50% - 5px)"})}})}const Rn=e=>(()=>{var t=Ne(),i=t.firstChild,n=i.nextSibling;return t.$$click=()=>e.onClick?.(),k(n,()=>e.category.searchterm),_(r=>{var o=se(P.gifCategoryItem,e.class),s=P.image,a=e.category.image,c=e.category.searchterm,u=P.name;return o!==r.e&&S(t,r.e=o),s!==r.t&&S(i,r.t=s),a!==r.a&&te(i,"src",r.a=a),c!==r.o&&te(i,"alt",r.o=c),u!==r.i&&S(n,r.i=u),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),t})(),Zn=e=>{const t=(i,n)=>{e.onClick(i),n||e.close()};return l(Vn,{get close(){return e.close},get x(){return e.x},get y(){return e.y},get children(){return l(jn,{get serverId(){return e.serverId},onClick:t,get close(){return e.close}})}})},Ln=L("div")`
  position: absolute;
  inset: 0;
  overflow: hidden;
`,Hn=L("div")`
  position: absolute;
`,Vn=e=>{let t;const{isMobileAgent:i}=Ie(),{width:n,height:r}=st(()=>t),o=()=>{const a={};return i()?{bottom:"0",right:"0"}:(a.top=e.y+"px",a.left=e.x+"px",e.x+n()>window.innerWidth&&(a.left=window.innerWidth-n()+"px"),e.y+r()>window.innerHeight&&(a.top=window.innerHeight-r()+"px"),a)};return l(Ln,{class:"floatingInScreenBGContainer",onClick:a=>{a.target.classList.contains("floatingInScreenBGContainer")&&e.close()},get children(){return l(Hn,{ref(a){var c=t;typeof c=="function"?c(a):t=a},get style(){return o()},get children(){return e.children}})}})};Ce(["click"]);export{jn as E,Zn as F,sn as a,bn as u};
//# sourceMappingURL=EmojiPicker-ChRbEHTW.js.map
