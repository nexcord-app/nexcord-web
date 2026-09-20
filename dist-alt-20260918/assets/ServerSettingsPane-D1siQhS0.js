import{J as g,W as u,L as m,c as e,F as v,T as i,S as d,H as x,K as f,aN as S,s as l,u as w,V as b,aO as C,Q as P}from"./useStore-B0mu5xqR.js";import{A as y}from"./Avatar-Dm8O4A-8.js";import{S as z}from"./ServerVerifiedIcon-gLzI5TWF.js";import{I as c}from"./browser-BaK9C9_l.js";import{B as E}from"./Banner-CmLVL7yq.js";import"./_commonjsHelpers-CE1G-McA.js";const H=l("div")`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding-left: 30px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  height: 100%;
`,I=l(b)`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  z-index: 1111;
  background: rgba(0, 0, 0, 0.86);
  backdrop-filter: blur(34px);
  padding: 10px;
  border-radius: 8px;
`,A=w`
  z-index: 111;
`,R=()=>{const[n]=c(),t=g(),{servers:s,serverMembers:a}=u(),r=()=>s.get(t.serverId),h=()=>a.array(t.serverId).length,{width:p}=m();return e(d,{get when(){return r()},get children(){return e(E,{maxHeight:250,animate:!0,get url(){return o.banner||S(r())},get hexColor(){return r()?.hexColor},get children(){return e(H,{get children(){return[e(y,{animate:!0,get url(){return o.avatar},get server(){return r()},get size(){return p()<=1100?70:100},class:A}),e(I,{get children(){return[e(v,{gap:5,get children(){return[e(i,{get children(){return o.name||r().name}}),e(d,{get when(){return r()?.verified},get children(){return e(z,{})}})]}}),e(i,{size:14,opacity:.8,get children(){return n("KX0ajx",{count:h()})}}),e(i,{size:14,get children(){return e(x,{get href(){return f.SERVER_SETTINGS_GENERAL(r().id)},get children(){return n("leiYGA")}})}})]}})]}})}})}})},T=l("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 900px;
  align-self: center;
`,[o,K]=C({});function L(){const[n]=c(),t=g(),{servers:s}=u(),a=()=>s.get(t.serverId);return e(d,{get when(){return a()},get children(){return e(T,{get children(){return[e(R,{}),e(P,{name:"settingsPane"})]}})}})}export{L as default,o as serverSettingsHeaderPreview,K as setServerSettingsHeaderPreview};
//# sourceMappingURL=ServerSettingsPane-D1siQhS0.js.map
