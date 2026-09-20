import{W as d,c as e,S as a,F as m,I,T as p,ak as w,K as g,s as u,V as f,b as S,M as C,O as k,h as z,ac as s}from"./useStore-C81yKXnX.js";import{t as h}from"./date-BKAW-sdF.js";const b=u(f)`
  background-color: rgb(15, 15, 15);
  margin: 3px;
  margin-bottom: 0;
  border-radius: 6px;
  flex-shrink: 0;
  padding-top: 6px;

  position: sticky;
  bottom: 5px;
  z-index: 11111111;
`,y=u(f)`
  overflow: hidden;
  gap: 2px;
  margin-right: 5px;
`;function _(r){const{voiceUsers:n,channels:t,servers:l}=d(),o=()=>n.currentUser()?.channelId,c=()=>t.get(o()),i=()=>l.get(c()?.serverId),v=()=>i()?`${i()?.name}#${c()?.name}`:c()?.recipient()?.username,x=()=>i()?g.SERVER_MESSAGES(i()?.id,c()?.id):g.INBOX_MESSAGES(c()?.id);return e(a,{get when(){return o()},get children(){return e(b,{get style(){return r?.style},get children(){return[e(m,{get children(){return[e(I,{name:"call",color:"var(--success-color)",size:18,style:{padding:"10px","padding-right":"5px"}}),e(y,{get children(){return[e(p,{size:12,get children(){return["Connected for ",e(D,{get channelId(){return o()}})]}}),e(w,{get href(){return x()},decoration:!0,style:{"font-size":"12px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},get children(){return v()}})]}})]}}),e(M,{get channelId(){return o()}})]}})}})}const E=u(m)`
  gap: 5px;
  padding: 5px;
  padding-top: 0;
  button {
    flex: 1;
  }
`;function M(r){const{channels:n}=d(),t=()=>n.get(r.channelId);return e(E,{get children(){return[e(B,{get channelId(){return r.channelId}}),e(A,{get channelId(){return r.channelId}}),e(s,{margin:0,iconName:"call_end",color:"var(--alert-color)",iconSize:16,onClick:()=>t()?.leaveCall()})]}})}function A(r){const{voiceUsers:{isLocalMicMuted:n,toggleMic:t,deafened:l}}=d(),o=()=>l.enabled;return e(a,{get when(){return!o()},get children(){return[e(a,{get when(){return n()},get children(){return e(s,{margin:0,iconName:"mic_off",iconSize:16,color:"var(--alert-color)",onClick:t})}}),e(a,{get when(){return!n()},get children(){return e(s,{margin:0,iconName:"mic",iconSize:16,color:"var(--success-color)",onClick:t})}})]}})}function B(r){const{voiceUsers:n}=d(),t=()=>n.deafened.enabled;return[e(a,{get when(){return t()},get children(){return e(s,{margin:0,iconName:"headset_off",iconSize:16,color:"var(--alert-color)",get onClick(){return n.toggleDeafen}})}}),e(a,{get when(){return!t()},get children(){return e(s,{margin:0,iconName:"headset_mic",iconSize:16,color:"var(--primary-color)",get onClick(){return n.toggleDeafen}})}})]}function D(r){const{channels:n}=d(),t=()=>n.get(r.channelId),[l,o]=S(null);return C(k(()=>t()?.callJoinedAt,c=>{let i;c&&(o(h(c)),i=window.setInterval(()=>o(h(c)),1e3)),z(()=>{i&&clearInterval(i)})})),e(a,{get when(){return t()?.callJoinedAt},get children(){return e(p,{size:12,opacity:.6,style:{"margin-left":"auto"},get children(){return l()}})}})}export{_ as I};
//# sourceMappingURL=InVoiceActions-C5uhCBOZ.js.map
