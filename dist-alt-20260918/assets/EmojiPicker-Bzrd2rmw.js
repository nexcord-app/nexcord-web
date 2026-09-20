import{k as Re,n as Le,b as z,i as J,aO as me,aS as Ve,cp as H,M as D,h as U,aG as Ne,bl as Fe,E as T,ap as Y,G as E,p as j,c as l,cq as we,S as A,av as ge,as as ee,a1 as he,bm as He,O as q,cr as De,s as L,C as ie,o as B,af as _,$ as Ue,Y as ke,m as te,u as Ge,bG as je,au as ve,J as Be,W as We,L as xe,cn as Ee,ab as Je,ac as ae,Z as Me,aZ as qe,aq as ue}from"./useStore-C81yKXnX.js";import{r as Ke}from"./index-1IzJrYOd.js";import{A as Ze}from"./Avatar-CnjpHkJi.js";import{u as Qe}from"./useResizeObserver-DorGCpy9.js";import{S as Pe}from"./Skeleton-C81J_hd6.js";const ne=(e,t)=>{const n=[];for(let r=0;r<t;r+=1)n.push(e+r);return n},X=e=>Number.isFinite(e)?e:0,Ye=e=>e.matches(":focus-within"),Xe=e=>e.querySelector(":focus"),et=e=>{const t=Xe(e);return t?(t.click(),!0):!1},tt=(e,t)=>{let n=t,r=0,o=0;for(;n&&e!==n;){const{offsetTop:i,offsetLeft:a,offsetParent:s}=n;if(e.contains(s))r+=i,o+=a;else{r+=i-e.offsetTop,o+=a-e.offsetLeft;break}n=s}return{offsetTop:r,offsetLeft:o}},nt=Re(),rt=e=>{let t=0,n=0;if(e.borderBoxSize){const{borderBoxSize:r}=e,o=Array.isArray(r)?r[0]:r;t=o.inlineSize,n=o.blockSize}else{const r=e.target.getBoundingClientRect();t=r.width,n=r.height}return{width:t,height:n}},ce=(e,t,n)=>{const[r,o]=n?[e,t]:[t,e];return{main:r,cross:o}},le={main:0,cross:0},ot=(e,t)=>e.cross===t.cross,it=e=>{const t=Le(nt),[n,r]=z(void 0),o=()=>e.scrollTarget||t?.scrollTarget,i=J(()=>(e.direction||"vertical")==="horizontal"),[a,s]=me({isMeasured:!1,mainAxisScrollValue:0,target:{...le},container:{...le,offsetMain:0,offsetCross:0},itemSize:{...le}}),c=f=>{const g=f.target,y=o(),v=n(),x=i(),w=rt(f),M=ce(w.width,w.height,x);if(g===y)s("target",M);else if(g===v&&(!ot(a.container,M)||!a.isMeasured)){const R=tt(y,v),N=ce(R.offsetLeft,R.offsetTop,x);s("container",{...M,offsetMain:N.main,offsetCross:N.cross})}},u=()=>{const f=o();if(f){const g=i()?f.scrollLeft:f.scrollTop;return Math.floor(g)}return 0},d=new ResizeObserver(f=>{Ve(()=>{f.forEach(g=>c(g)),s({isMeasured:!0,mainAxisScrollValue:u()})})});H(()=>{if(!a.isMeasured)return;const f=i(),g=e.itemSize;let y;typeof g=="function"?y=g(a.container.cross,f):y=g;const v=ce(y.width||0,y.height||0,f);s("itemSize",v)});const m=()=>{s("mainAxisScrollValue",u())};return D(()=>{const f=o(),g=n();!f||!g||(f.addEventListener("scroll",m),d.observe(f),d.observe(g),U(()=>{s("isMeasured",!1),f.removeEventListener("scroll",m),d.unobserve(f),d.unobserve(g)}))}),{containerEl:n,setContainerRefEl:r,isDirectionHorizontal:i,measurements:a}},st=1,at=e=>{const{total:t,focusPosition:n,positionCount:r,startPosition:o,prevPositions:i,prevStartPosition:a}=e,s=i.length;if(t<=r)return s===r&&a===o?i:ne(0,r);const u=o+r,d=v=>v<o||v>=u,m=()=>{if(d(n))return n;let v;return u<t?v=u:v=o-1,v},f=r+st;if(s!==f){const v=ne(o,r);return v.push(m()),v}const g=[];for(let v=0;v<r;v+=1){const x=o+v;i.includes(x)||g.push(x)}const y=m();return i.includes(y)||g.push(y),i.map(v=>d(v)&&v!==y?g.pop():v)},ct=e=>Number.isInteger(e)?e:0,lt=(e,t,n)=>{const[r,o]=me({overscan:0,positionCount:0,maxScrollPosition:0,currentPosition:0});H(()=>{if(!e.isMeasured)return;const s=t.totalItemCount,c=e.itemSize.main,u=e.target.main;Ne(()=>{const m=n()??Math.max(Math.ceil(180/c),2),f=X(m);o("overscan",f);const g=Math.ceil(u/c),y=ct(Math.min(g+f*2,s));o("positionCount",y),o("maxScrollPosition",s-y)})}),H(()=>{if(!e.isMeasured)return;const s=e.mainAxisScrollValue-e.container.offsetMain,u=Math.floor(s/e.itemSize.main)-r.overscan,d=Math.min(Math.max(0,u),r.maxScrollPosition);o("currentPosition",d)});let i=0;return J((s=[])=>{if(!e.isMeasured)return s;const c=r.currentPosition,u=at({total:t.totalItemCount,focusPosition:t.focusPosition,positionCount:r.positionCount,startPosition:c,prevStartPosition:i,prevPositions:s});return i=c,u})};var ut=T("<div>");const dt=Math.random().toString(36).slice(2,1/0),de=`virtual-container-${dt}`;let W;const ft=()=>{W||(W=document.createElement("style"),W.type="text/css",W.textContent=`
      .${de} {
        position: relative !important;
        flex-shrink: 0 !important;
      }
      .${de} > * {
        will-change: transform !important;
        box-sizing: border-box !important;
        contain: strict !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
      }
    `,document.head.appendChild(W))};function mt(e){ft();const[t,n]=me({focusPosition:0,mainAxis:{totalItemCount:0,focusPosition:0,scrollValue:0},crossAxis:{totalItemCount:0}}),{containerEl:r,setContainerRefEl:o,isDirectionHorizontal:i,measurements:a}=it(e),s=()=>e.items&&e.items.length||0;H(()=>{if(!a.isMeasured)return;const h=X(e.crossAxisCount?.(a,s())||0);n("crossAxis",{totalItemCount:Math.max(1,h)})}),H(()=>{if(!a.isMeasured)return;const h=s(),C=t.crossAxis.totalItemCount,k=Math.ceil(h/C);n("mainAxis",{totalItemCount:X(k)}),n("crossAxis",{totalItemCount:C,positions:ne(0,t.crossAxis.totalItemCount)})}),H(()=>{const h=Math.floor(t.focusPosition/t.crossAxis.totalItemCount);n("mainAxis","focusPosition",X(h))});const c=lt(a,t.mainAxis,()=>e.overscan),u=()=>{const h=t.mainAxis.totalItemCount*a.itemSize.main,C=i()?"width":"height",k=i()?"height":"width";return{[C]:`${h}px`,[k]:"100%"}},d=(h,C=0)=>{const k=a.itemSize,P=k.main*h,I=k.cross*C;let p=I,$=P,O=k.cross,V=k.main;return i()&&(p=P,$=I,O=k.main,V=k.cross),{transform:`translate(${p}px, ${$}px)`,width:O?`${O}px`:"",height:V?`${V}px`:""}},m=J(()=>ne(0,t.crossAxis.totalItemCount)),f=J(()=>e.items||[]),g=(h,C)=>h*t.crossAxis.totalItemCount+C,y=h=>l(we,{get each(){return c()},children:C=>{const k=J(()=>{const P=C(),I=h.crossPos;return I===void 0?P:g(P,I)});return l(A,{get when(){return k()<f().length},get children(){return l(He,{get component(){return e.children},get items(){return f()},get item(){return f()[k()]},get index(){return k()},get tabIndex(){return k()===t.focusPosition?0:-1},get style(){return d(C(),h.crossPos)}})}})}}),v=Fe(()=>l(A,{get when(){return t.crossAxis.totalItemCount>1},get fallback(){return l(y,{})},get children(){return l(we,{get each(){return m()},children:h=>l(y,{get crossPos(){return h()}})})}})),x=()=>{const h=m(),C=c(),P=v().findIndex(I=>I?.matches(":focus-within, :focus"));if(P===-1)return-1;if(t.crossAxis.totalItemCount>1){const I=Math.floor(P/C.length),p=P%C.length,$=h[I],O=C[p];return g(O,$)}return C[P]},w=(h,C)=>{const k=t.focusPosition;let P=k%t.crossAxis.totalItemCount,I=Math.floor(k/t.crossAxis.totalItemCount);C?I+=h:P+=h;const p=g(I,P);if(p<0||p>=s())return;const $=m().indexOf(P);if($===-1)return;n("focusPosition",p);const O=v(),V=c(),Ce=V.indexOf(I);if(Ce===-1)return;const Oe=$*V.length+Ce,se=O[Oe];se&&queueMicrotask(()=>{se.focus(),se.scrollIntoView({block:"nearest"})})},M=h=>{const{code:C}=h,k=C==="ArrowUp",P=C==="ArrowDown",I=C==="ArrowLeft",p=C==="ArrowRight",$=k||P,O=I||p;if($||O)w(P||p?1:-1,i()?O:$);else if(C==="Enter"){if(!et(r()))return}else return;h.preventDefault()},R=()=>{const h=x();n("focusPosition",h===-1?0:h)},N=async()=>{queueMicrotask(()=>{Ye(r())||n("focusPosition",0)})};return(()=>{var h=ut();return h.$$focusout=N,h.$$focusin=R,h.$$keydown=M,Y(o,h),E(h,v),j(C=>{var k=`${de} ${e.className||""}`,P=u(),I=e.role||"list";return k!==C.e&&(h.className=C.e=k),C.t=ge(h,P,C.t),I!==C.a&&ee(h,"role",C.a=I),C},{e:void 0,t:void 0,a:void 0}),h})()}he(["keydown","focusin","focusout"]);const b={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0},gt=(e,t)=>String(e.rankedValue).localeCompare(String(t.rankedValue));function Te(e,t,n){n===void 0&&(n={});const{keys:r,threshold:o=b.MATCHES,baseSort:i=gt,sorter:a=u=>u.sort((d,m)=>yt(d,m,i))}=n,s=e.reduce(c,[]);return a(s).map(u=>{let{item:d}=u;return d});function c(u,d,m){const f=ht(d,r,t,n),{rank:g,keyThreshold:y=o}=f;return g>=y&&u.push({...f,item:d,index:m}),u}}Te.rankings=b;function ht(e,t,n,r){if(!t){const i=e;return{rankedValue:i,rank:Ie(i,n,r),keyIndex:-1,keyThreshold:r.threshold}}return kt(e,t).reduce((i,a,s)=>{let{rank:c,rankedValue:u,keyIndex:d,keyThreshold:m}=i,{itemValue:f,attributes:g}=a,y=Ie(f,n,r),v=u;const{minRanking:x,maxRanking:w,threshold:M}=g;return y<x&&y>=b.MATCHES?y=x:y>w&&(y=w),y>c&&(c=y,d=s,m=M,v=f),{rankedValue:v,rank:c,keyIndex:d,keyThreshold:m}},{rankedValue:e,rank:b.NO_MATCH,keyIndex:-1,keyThreshold:r.threshold})}function Ie(e,t,n){return e=be(e,n),t=be(t,n),t.length>e.length?b.NO_MATCH:e===t?b.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?b.EQUAL:e.startsWith(t)?b.STARTS_WITH:e.includes(` ${t}`)?b.WORD_STARTS_WITH:e.includes(t)?b.CONTAINS:t.length===1?b.NO_MATCH:vt(e).includes(t)?b.ACRONYM:xt(e,t))}function vt(e){let t="";return e.split(" ").forEach(r=>{r.split("-").forEach(i=>{t+=i.substr(0,1)})}),t}function xt(e,t){let n=0,r=0;function o(c,u,d){for(let m=d,f=u.length;m<f;m++)if(u[m]===c)return n+=1,m+1;return-1}function i(c){const u=1/c,d=n/t.length;return b.MATCHES+d*u}const a=o(t[0],e,0);if(a<0)return b.NO_MATCH;r=a;for(let c=1,u=t.length;c<u;c++){const d=t[c];if(r=o(d,e,r),!(r>-1))return b.NO_MATCH}const s=r-a;return i(s)}function yt(e,t,n){const{rank:i,keyIndex:a}=e,{rank:s,keyIndex:c}=t;return i===s?a===c?n(e,t):a<c?-1:1:i>s?-1:1}function be(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=Ke(e)),e}function Ct(e,t){typeof t=="object"&&(t=t.key);let n;if(typeof t=="function")n=t(e);else if(e==null)n=null;else if(Object.hasOwnProperty.call(e,t))n=e[t];else{if(t.includes("."))return wt(t,e);n=null}return n==null?[]:Array.isArray(n)?n:[String(n)]}function wt(e,t){const n=e.split(".");let r=[t];for(let o=0,i=n.length;o<i;o++){const a=n[o];let s=[];for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d!=null)if(Object.hasOwnProperty.call(d,a)){const m=d[a];m!=null&&s.push(m)}else a==="*"&&(s=s.concat(d))}r=s}return Array.isArray(r[0])?[].concat(...r):r}function kt(e,t){const n=[];for(let r=0,o=t.length;r<o;r++){const i=t[r],a=Et(i),s=Ct(e,i);for(let c=0,u=s.length;c<u;c++)n.push({itemValue:s[c],attributes:a})}return n}const Se={maxRanking:1/0,minRanking:-1/0};function Et(e){return typeof e=="string"?Se:{...Se,...e}}var Pt=T('<svg xmlns=http://www.w3.org/2000/svg height=20px viewBox="0 0 24 24"width=20px fill=white><path d="M0 0h24v24H0V0z"fill=none></path><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z">'),It=T("<div>"),bt=T("<div style=display:flex>"),St=T("<span>"),At=T("<div class=emojiImage>"),_t=T("<div class=details><div class=name></div><div class=category>"),jt=T("<input type=text placeholder=Search>");function Mt(){return Pt()}var ye=40,[K,G]=z([]),[Z,Q]=z([]);function Tt(e,t=7){let n=[],r=[],o=[],i=-1,a=0;for(let s=0;s<e.length;s++){const c=e[s];if(!c)continue;const u={...c.category,type:"category"};let d=o.findIndex(m=>m.id===u.id);d<0&&(o.push(u),d=o.length-1),n[a]||(n[a]=[]),i!==d&&(i=d,s!==0&&(n[a]?.length&&a++,n[a]=[]),n[a].push(u),r.push([(K().length+(n.length-1))*ye,u]),a++,n[a]=[]),n[a].push(c),n[a]?.length>t&&a++}G([...K(),...n]),Q([...Z(),...r])}function zt(e,t=7){let n=-1,r=0,o=[],i=[],a=[];for(let s=0;s<e.length;s++){const c=e[s];if(!c)continue;let u=a.indexOf(c.category);if(u<0&&(a.push(c.category),u=a.length-1),o[r]||(o[r]=[]),n!==u){n=u,s!==0&&(o[r]?.length&&r++,o[r]=[]);const d={name:c.category,index:s,type:"category"};o[r].push(d),i.push([(K().length+(o.length-1))*ye,d]),r++,o[r]=[]}o[r].push(c),o[r]?.length>t&&r++}G([...K(),...o]),Q([...Z(),...i])}function pt(e,t,n,r=7){const o=Te([...t,...e],n,{keys:["short_names.*","name"]});let i=0,a=[];for(let s=0;s<o.length;s++){const c=o[s];a[i]||(a[i]=[]),a[i].push(c),a[i]?.length>r&&i++}G(a)}function $t(e,t=7){let n=0,r=[];const o={id:"recent",name:"Recent Emojis",type:"category",customElement:()=>l(Mt,{})};Q([[0,o]]),r[n]=[o],n++;for(let i=0;i<e.length;i++){const a=e[i];r[n]||(r[n]=[]),r[n].push(a),r[n]?.length>t&&n++}G(r)}var Ot=L.div`
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
`;function Rt(e,t){let n;return()=>{n&&clearTimeout(n),n=window.setTimeout(e,t)}}var Ae=e=>[...Z()].reverse().find(t=>e>=t[0])?.[1],Lt=e=>{const[t,n]=z(),[r,o]=z(),[i,a]=z(""),s=e.emojis?.map((f,g)=>({...f,index:g})),c=ze().map(f=>{const g=s?.find(v=>v.short_names[0]===f);if(g)return g;const y=e.customEmojis?.find(v=>v.name===f);if(y)return y}).filter(f=>f);j(q([()=>e.emojis,()=>e?.customEmojis,()=>e.maxRow,i],()=>{if(i())return pt(s||[],e.customEmojis||[],i(),e.maxRow);Q([]),G([]),c.length&&$t(c,e.maxRow),e.customEmojis?.length&&Tt(e.customEmojis,e.maxRow),s?.length&&zt(s,e.maxRow)})),U(()=>{Q([]),G([])}),D(()=>{t()?.addEventListener("scroll",u),o(Ae(t()?.scrollTop)),U(()=>{t()?.removeEventListener("scroll",u)})});const u=Rt(()=>{o(Ae(t()?.scrollTop))},50),d={primary:e.primaryColor||"#77a8f3"},m=f=>{Kt(f.name||f.short_names[0],e.maxRecent||10),e.onEmojiClick?.(f)};return l(De,{theme:d,get children(){return l(Ot,{get class(){return e.class},get style(){return e.style},get children(){return[l(Ft,{onCategoryClick:()=>a(""),mainProps:e,get scrollElement(){return t()},get selectedCategory(){return r()}}),l(Gt,{onSearchInput:a,get searchValue(){return i()},onEmojiClick:m,mainProps:e,ref:n})]}})}})},Vt=L.div`
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
`,Nt=L.button`
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
`,Ft=e=>{const t=e.mainProps.spriteUrl,n=o=>{e.onCategoryClick();const i=Z().find(a=>o.id?o.id===a[1].id:o.name===a[1].name)?.[0];i!==void 0&&e.scrollElement?.scrollTo({top:i})},r=o=>{const i=()=>o.selectedCategory?.id?o.selectedCategory?.id===o.category?.id:o.selectedCategory?.name===o.category?.name;return l(Nt,{class:"categoryContainer",onclick:()=>n(o.category),get selected(){return i()},get title(){return o.category?.name},get children(){return[l(A,{get when(){return o.category.customElement},get children(){return o.category.customElement(25)}}),l(A,{get when(){return!o.category.customElement},get children(){return l(re,{size:25,get index(){return o.category.index},get url(){return o.category.url||t}})}})]}})};return l(Vt,{class:"categoriesContainer",get children(){return l(ie,{get each(){return Z()},children:([,o],i)=>l(r,{get index(){return i()},get selectedCategory(){return e.selectedCategory},category:o})})}})},Ht=Ge`
  display: flex;
  flex-direction: column;
  margin: 5px;
  overflow: auto;
  flex: 1;
`,Dt=L.div`
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
`,Ut=L.div`
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
`,_e=40,Gt=e=>{const t=e.onEmojiClick,n=e.mainProps.spriteUrl,[r,o]=z(void 0),i=s=>l(Dt,{class:"emojiContainer",get title(){return s.emoji.name||s.emoji.short_names[0]},onclick:()=>t?.(s.emoji),onMouseEnter:()=>o(s.emoji),get children(){return l(re,{get index(){return te(()=>!!s.emoji.url)()?void 0:s.emoji.index},get url(){return s.emoji.url||n}})}});let a;return B(()=>{e.ref(a)}),(()=>{var s=It(),c=a;return typeof c=="function"?Y(c,s):a=s,_(s,`${Ht||""} emojisContainer`),E(s,l(qt,{get autoFocus(){return e.mainProps.focusOnMount},get onText(){return e.onSearchInput},get value(){return e.searchValue}}),null),E(s,l(mt,{scrollTarget:a,get items(){return K()},itemSize:{height:ye},children:u=>(()=>{var d=bt();return E(d,l(ie,{get each(){return u.item},children:m=>l(Ue,{get children(){return[l(ke,{get when(){return m.type==="category"},get children(){return l(Ut,{class:"title",get children(){return[l(A,{get when(){return!m.customElement},get children(){return l(re,{size:15,get index(){return te(()=>!!m.url)()?void 0:m.index},get url(){return m.url||n}})}}),l(A,{get when(){return m.customElement},get children(){return m.customElement(15)}}),(()=>{var f=St();return E(f,()=>m.name),f})()]}})}}),l(ke,{get when(){return m.type!=="category"},get children(){return l(i,{emoji:m})}})]}})})),j(m=>ge(d,{...u.style,width:"100%"},m)),d})()}),null),E(s,l(A,{get when(){return r()},get children(){return l(Wt,{get mainProps(){return e.mainProps},get emoji(){return r()}})}}),null),s})()};function re(e){const t=()=>e.index===void 0;let n=()=>{e.size=e.size||30;const r={"background-image":`url(${e.url})`,height:e.size+"px",width:e.size+"px","background-size":"contain","background-repeat":"no-repeat"};if(!t()){const o=e.index%_e,i=Math.floor(e.index/_e);r["background-position"]=`${-(o*e.size)}px ${-(i*e.size)}px`,r["background-size"]=40*e.size+"px"}return t()&&(r["background-position"]="center"),r};return(()=>{var r=At();return j(o=>{var i=n(),a=!!t();return o.e=ge(r,i,o.e),a!==o.t&&r.classList.toggle("customEmojiImage",o.t=a),o},{e:void 0,t:void 0}),r})()}var Bt=L("div")`
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
`;function Wt(e){const t=e.mainProps.spriteUrl;return l(Bt,{get children(){return[l(re,{get index(){return te(()=>!!e.emoji.url)()?void 0:e.emoji.index},get url(){return e.emoji.url||t}}),(()=>{var n=_t(),r=n.firstChild,o=r.nextSibling;return E(r,()=>e.emoji.name||e.emoji.short_names.join(" ")),E(o,()=>e.emoji.category.name||e.emoji.category),n})()]}})}var Jt=L("div")`
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
`;function qt(e){let t;return B(()=>{e.autoFocus!==!1&&t?.focus()}),l(Jt,{get children(){var n=jt();n.$$input=o=>e.onText(o.target.value);var r=t;return typeof r=="function"?Y(r,n):t=n,j(()=>n.value=e.value),n}})}function Kt(e,t){let n=ze();n=n.filter(r=>r!==e),n.unshift(e),localStorage["nerimity-solid-emoji-pane"]=JSON.stringify(n.splice(0,t))}function ze(){return JSON.parse(localStorage["nerimity-solid-emoji-pane"]||"[]")}he(["input"]);const Zt="_outerEmojiPicker_84hif_1",Qt="_gifPickerSearchBar_84hif_5",Yt="_tabs_84hif_54",Xt="_emojiPicker_84hif_65",en="_gifPickerContainer_84hif_102",tn="_gifPickerCategories_84hif_114",nn="_gap_84hif_124",rn="_gifCategoryItem_84hif_129",on="_image_84hif_141",sn="_name_84hif_148",S={outerEmojiPicker:Zt,gifPickerSearchBar:Qt,tabs:Yt,emojiPicker:Xt,gifPickerContainer:en,gifPickerCategories:tn,gap:nn,gifCategoryItem:rn,image:on,name:sn},an=async()=>await je({method:"GET",url:ve.SERVER_URL+"/api/tenor/categories",useToken:!0}),cn=async e=>await je({method:"GET",url:ve.SERVER_URL+"/api/tenor/search",params:{query:e},useToken:!0}),ln=(e,t)=>{B(()=>{document.addEventListener(e,t),U(()=>{document.removeEventListener(e,t)})})};var fe=T("<div>"),un=T('<div><input placeholder="Search GIFs">'),pe=T("<div><div>"),dn=T("<div tabindex=0><img loading=lazy>",!0,!1,!1),fn=T("<div tabindex=0><img loading=lazy><div>",!0,!1,!1);const[F,oe]=z("");function mn(e){const t=Be(),{servers:n}=We(),{paneWidth:r,width:o,height:i,isMobileAgent:a}=xe(),[s,c]=z(!1),[u,d]=z("EMOJI");D(q(()=>e.tab,()=>d(e.tab??"EMOJI"))),ln("keydown",x=>{x.key==="Escape"&&e.close()}),B(()=>{qe(),document.addEventListener("mousedown",g),document.addEventListener("keydown",m),document.addEventListener("keyup",f),U(()=>{document.removeEventListener("mousedown",g),document.removeEventListener("keydown",m),document.removeEventListener("keyup",f)})});const m=x=>{x.key==="Shift"&&c(!0)},f=x=>{x.key==="Shift"&&c(!1)},g=x=>{x.target.closest(`.${S.outerEmojiPicker}`)||x.target.closest(".emojiPickerButton")||e.close()};D(q(o,e.close,{defer:!0}));const y=()=>n.emojisUpdatedDupName().map(x=>{const w=n.get(x.serverId),M=w.avatarUrl();return{id:x.id,category:{id:x.serverId,name:w.name,url:M,customElement:M?void 0:R=>Ze({size:R,server:{...w,verified:!1}})},name:x.name,url:`${ve.NERIMITY_CDN}emojis/${x.id}.${x.gif?"gif":"webp"}?size=60`}}).sort((x,w)=>x.category.id===t.serverId?-1:w.category.id===t.serverId?1:0),v=()=>r()<340?{row:4,width:280}:r()<360?{row:5,width:320}:r()<420?{row:6,width:355}:r()<470?{row:7,width:400}:{row:8,width:430};return(()=>{var x=fe();return E(x,l(A,{get when(){return te(()=>u()==="EMOJI")()&&Ee().length},get children(){return l(Lt,{get class(){return Je(S.emojiPicker,"emoji-picker")},get focusOnMount(){return!a()},spriteUrl:"/assets/emojiSprites-16.png",get emojis(){return Ee()},get customEmojis(){return y()},onEmojiClick:w=>e.onClick(w.name||w.short_names[0],s()),primaryColor:"var(--primary-color)",maxRecent:20,get maxRow(){return v()?.row}})}}),null),E(x,l(A,{get when(){return u()==="GIF"},get children(){return l(gn,{get gifPicked(){return e.gifPicked}})}}),null),E(x,l(A,{get when(){return e.showGifPicker},get children(){var w=fe();return E(w,l(A,{get when(){return F().trim()},get children(){return l(ae,{styles:{"margin-right":"auto","margin-left":"6px"},iconName:"arrow_back",margin:0,onClick:()=>oe("")})}}),null),E(w,l(ae,{iconName:"gif",margin:0,get primary(){return u()==="GIF"},onClick:()=>d("GIF")}),null),E(w,l(ae,{iconName:"face",margin:0,get primary(){return u()==="EMOJI"},onClick:()=>d("EMOJI")}),null),j(()=>_(w,S.tabs)),w}}),null),j(w=>{var M=S.outerEmojiPicker,R=v().width+"px",N=i()+(e.heightOffset||0)+"px";return M!==w.e&&_(x,w.e=M),R!==w.t&&ue(x,"width",w.t=R),N!==w.a&&ue(x,"height",w.a=N),w},{e:void 0,t:void 0,a:void 0}),x})()}const gn=e=>{let t;return U(()=>{oe("")}),D(q(F,()=>{t?.scrollTo(0,0)})),(()=>{var n=fe(),r=t;return typeof r=="function"?Y(r,n):t=n,E(n,l(hn,{}),null),E(n,l(A,{get when(){return F().trim()},get children(){return l(vn,{get gifPicked(){return e.gifPicked},get query(){return F().trim()}})}}),null),E(n,l(yn,{get hide(){return!!F().trim()},onPick:o=>oe(o.searchterm)}),null),j(()=>_(n,S.gifPickerContainer)),n})()},hn=()=>{const{isMobileAgent:e}=xe();let t,n=null;const r=o=>{n&&clearTimeout(n),n=window.setTimeout(()=>{oe(o.target.value),n=null},350)};return B(()=>{e()||t?.focus()}),(()=>{var o=un(),i=o.firstChild;i.$$input=r;var a=t;return typeof a=="function"?Y(a,i):t=i,j(()=>_(o,S.gifPickerSearchBar)),j(()=>i.value=F()),o})()},vn=e=>{const[t,n]=z(null);return D(q(()=>e.query,()=>{n(null),cn(e.query).then(n)})),(()=>{var r=pe(),o=r.firstChild;return E(r,l(A,{get when(){return!t()},get children(){return l($e,{})}}),o),E(r,l(ie,{get each(){return t()},children:i=>l(xn,{get url(){return i.previewUrl},onClick:()=>e.gifPicked?.(i)})}),o),j(i=>{var a=S.gifPickerCategories,s=S.gap;return a!==i.e&&_(r,i.e=a),s!==i.t&&_(o,i.t=s),i},{e:void 0,t:void 0}),r})()},xn=e=>(()=>{var t=dn(),n=t.firstChild;return Me(n,"click",e.onClick,!0),j(r=>{var o=S.gifCategoryItem,i=S.image,a=e.url;return o!==r.e&&_(t,r.e=o),i!==r.t&&_(n,r.t=i),a!==r.a&&ee(n,"src",r.a=a),r},{e:void 0,t:void 0,a:void 0}),t})(),yn=e=>{const[t,n]=z([]);return B(()=>{an().then(n)}),(()=>{var r=pe(),o=r.firstChild;return E(r,l(A,{get when(){return!t().length},get children(){return l($e,{})}}),o),E(r,l(ie,{get each(){return t()},children:i=>l(Cn,{category:i,onClick:()=>e.onPick(i)})}),o),j(i=>{var a=S.gifPickerCategories,s=e.hide?"none":"flex",c=S.gap;return a!==i.e&&_(r,i.e=a),s!==i.t&&ue(r,"display",i.t=s),c!==i.a&&_(o,i.a=c),i},{e:void 0,t:void 0,a:void 0}),r})()};function $e(){return l(Pe.List,{count:20,style:{width:"100%","flex-wrap":"wrap","flex-direction":"row"},get children(){return l(Pe.Item,{height:"100px",width:"calc(50% - 5px)"})}})}const Cn=e=>(()=>{var t=fn(),n=t.firstChild,r=n.nextSibling;return Me(t,"click",e.onClick,!0),E(r,()=>e.category.searchterm),j(o=>{var i=S.gifCategoryItem,a=S.image,s=e.category.image,c=e.category.searchterm,u=S.name;return i!==o.e&&_(t,o.e=i),a!==o.t&&_(n,o.t=a),s!==o.a&&ee(n,"src",o.a=s),c!==o.o&&ee(n,"alt",o.o=c),u!==o.i&&_(r,o.i=u),o},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),t})(),_n=e=>{const t=(n,r)=>{e.onClick(n),r||e.close()};return l(En,{get close(){return e.close},get x(){return e.x},get y(){return e.y},get children(){return l(mn,{onClick:t,get close(){return e.close}})}})},wn=L("div")`
  position: absolute;
  inset: 0;
  overflow: hidden;
`,kn=L("div")`
  position: absolute;
`,En=e=>{let t;const{isMobileAgent:n}=xe(),{width:r,height:o}=Qe(()=>t),i=()=>{const s={};return n()?{bottom:"0",right:"0"}:(s.top=e.y+"px",s.left=e.x+"px",e.x+r()>window.innerWidth&&(s.left=window.innerWidth-r()+"px"),e.y+o()>window.innerHeight&&(s.top=window.innerHeight-o()+"px"),s)};return l(wn,{class:"floatingInScreenBGContainer",onClick:s=>{s.target.classList.contains("floatingInScreenBGContainer")&&e.close()},get children(){return l(kn,{ref(s){var c=t;typeof c=="function"?c(s):t=s},get style(){return i()},get children(){return e.children}})}})};he(["input","click"]);export{mn as E,_n as F,Kt as a,ln as u};
//# sourceMappingURL=EmojiPicker-Bzrd2rmw.js.map
