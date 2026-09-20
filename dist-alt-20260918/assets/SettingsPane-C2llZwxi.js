import{b as w,W as v,L as T,M as E,O as I,c as e,m as a,T as s,S as d,F as S,H as _,U as m,an as j,s as c,u as M,V as U,ah as B,aO as L,Q as N,d as R}from"./useStore-C81yKXnX.js";import{A as X}from"./Avatar-CnjpHkJi.js";import{B as Y}from"./Banner-DWKTKMkk.js";import{s as J}from"./Settings-073OYnCH.js";const Q=c("div")`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding-left: 30px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  height: 100%;
`,V=c(U)`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  z-index: 1111;
  background: rgba(0, 0, 0, 0.86);
  backdrop-filter: blur(34px);
  padding: 10px;
  border-radius: 8px;
`,q=c(S)`
  font-size: 16px;
  margin-bottom: 5px;
  overflow-wrap: anywhere;
  overflow: hidden;
  line-height: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`,G=M`
  z-index: 111;
`,K=c("div")`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat !important;
  border-radius: 50%;
  ${r=>r.cropPosition}
`,Z=r=>{const[g,l]=w(),{account:u,servers:p,friends:y}=v(),o=()=>u.user(),P=()=>p.array().length||"0",z=()=>y.array().filter(t=>t.status===B.FRIENDS).length||"0",{width:C}=T(),[f,k]=w({height:0,width:0});E(I(()=>n.avatar,t=>{t&&$(t).then(k)}));const h=()=>C()<=500?70:100,H=()=>{const t=n.avatarPoints;if(!t)return"";const i=h()&&g()?.clientWidth||0,W=h()&&g()?.clientHeight||0,A=f().width,D=f().height,F=t[0],O=t[1],x=i/(t[2]-t[0]),b=W/(t[3]-t[1]);return`
      background-position: -${F*x}px -${O*b}px !important;
      background-size: ${A*x}px ${D*b}px !important;
    `};async function $(t){const i=new Image;return i.src=t,await i.decode(),{width:i.width,height:i.height}}return e(d,{get when(){return o()},get children(){return e(Y,{maxHeight:250,get margin(){return r.bot?0:void 0},animate:!0,get hexColor(){return r.bot?.hexColor||o()?.hexColor},get url(){return n.banner||j(r.bot||o())},get children(){return e(Q,{get children(){return[e(X,{animate:!0,get user(){return r.bot||u.user()},get size(){return h()},class:G,get children(){return a(()=>!!n.avatar)()?e(K,{ref:l,get cropPosition(){return H()},get style(){return{background:`url("${n.avatar}")`}}}):null}}),e(V,{get children(){return[e(q,{get children(){return[e(s,{get children(){return n.username||r.bot?.username||o().username}}),e(s,{opacity:.7,get children(){return[":",a(()=>n.tag||r.bot?.tag||o().tag)]}})]}}),e(d,{get when(){return!r.bot},get children(){return[e(S,{gap:5,get children(){return[e(s,{size:14,opacity:.8,get children(){return[a(()=>P())," ",a(()=>m("Tr3jLP"))]}}),e(s,{size:14,children:"•"}),e(s,{size:14,opacity:.8,get children(){return[a(()=>z())," ",a(()=>m("01y3Jv"))]}})]}}),e(s,{size:14,get children(){return e(_,{href:"/app/settings/account",get children(){return m("trW0Ng")}})}})]}})]}})]}})}})}})},ee=c("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
`,[n,te]=L({});function re(){const{account:r}=v(),g=()=>r.user(),l=()=>J.find(u=>R(()=>`/app/settings/${u.routePath}`)());return e(d,{get when(){return g()},get children(){return e(ee,{get children(){return[e(d,{get when(){return!l()?.hideHeader},get children(){return e(Z,{})}}),e(N,{name:"settingsPane"})]}})}})}const oe=Object.freeze(Object.defineProperty({__proto__:null,default:re,setSettingsHeaderPreview:te,settingsHeaderPreview:n},Symbol.toStringTag,{value:"Module"}));export{Z as S,oe as a,te as s};
//# sourceMappingURL=SettingsPane-C2llZwxi.js.map
