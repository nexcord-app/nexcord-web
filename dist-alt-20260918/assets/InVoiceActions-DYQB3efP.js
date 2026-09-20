import{b as u}from"./useStore-BX0H4HHl.js";import{c as e,S as a,I,B as g,e as w,D as S,E as C,g as k}from"./ModerationService-CpG_--VM.js";import{a as p,s as d,F as f}from"./Flexbox-D5klO2LR.js";import{C as b,T as h,B as s}from"./Text-zTrywdpE.js";import{t as m}from"./date-yc99Ly_9.js";import{R as y}from"./browser-By5Llgm9.js";const z=d(f)`
  background-color: rgb(15, 15, 15);
  margin: 3px;
  margin-bottom: 0;
  border-radius: 6px;
  flex-shrink: 0;
  padding-top: 6px;

  position: sticky;
  bottom: 5px;
  z-index: 11111111;
`,E=d(f)`
  overflow: hidden;
  gap: 2px;
  margin-right: 5px;
`;function G(t){const{voiceUsers:n,channels:r,servers:l}=u(),o=()=>n.currentUser()?.channelId,i=()=>r.get(o()),c=()=>l.get(i()?.serverId),v=()=>c()?`${c()?.name}#${i()?.name}`:i()?.recipient()?.username,x=()=>c()?g.SERVER_MESSAGES(c()?.id,i()?.id):g.INBOX_MESSAGES(i()?.id);return e(a,{get when(){return o()},get children(){return e(z,{get style(){return t?.style},get children(){return[e(p,{get children(){return[e(I,{name:"call",color:"var(--success-color)",size:18,style:{padding:"10px","padding-right":"5px"}}),e(E,{get children(){return[e(N,{get channelId(){return o()}}),e(b,{get href(){return x()},decoration:!0,style:{"font-size":"12px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},get children(){return v()}})]}})]}}),e(D,{get channelId(){return o()}})]}})}})}const B=d(p)`
  gap: 5px;
  padding: 5px;
  padding-top: 0;
  button {
    flex: 1;
  }
`;function D(t){const{channels:n}=u(),r=()=>n.get(t.channelId);return e(B,{get children(){return[e(M,{get channelId(){return t.channelId}}),e(A,{get channelId(){return t.channelId}}),e(s,{margin:0,iconName:"call_end",color:"var(--alert-color)",iconSize:16,onClick:()=>r()?.leaveCall()})]}})}function A(t){const{voiceUsers:{isLocalMicMuted:n,toggleMic:r,deafened:l}}=u(),o=()=>l.enabled;return e(a,{get when(){return!o()},get children(){return[e(a,{get when(){return n()},get children(){return e(s,{margin:0,iconName:"mic_off",iconSize:16,color:"var(--alert-color)",onClick:r})}}),e(a,{get when(){return!n()},get children(){return e(s,{margin:0,iconName:"mic",iconSize:16,color:"var(--success-color)",onClick:r})}})]}})}function M(t){const{voiceUsers:n}=u(),r=()=>n.deafened.enabled;return[e(a,{get when(){return r()},get children(){return e(s,{margin:0,iconName:"headset_off",iconSize:16,color:"var(--alert-color)",get onClick(){return n.toggleDeafen}})}}),e(a,{get when(){return!r()},get children(){return e(s,{margin:0,iconName:"headset_mic",iconSize:16,color:"var(--primary-color)",get onClick(){return n.toggleDeafen}})}})]}function N(t){const{channels:n}=u(),r=()=>n.get(t.channelId),[l,o]=w(null);return S(C(()=>r()?.callJoinedAt,i=>{let c;i&&(o(m(i)),c=window.setInterval(()=>o(m(i)),1e3)),k(()=>{c&&clearInterval(c)})})),e(a,{get when(){return r()?.callJoinedAt},get children(){return e(h,{size:12,style:{"font-variant-numeric":"tabular-nums"},get children(){return e(y,{key:"snATwk",get options(){return{time:l()}},get children(){return["Connected for",e(h,{size:12,opacity:.6,children:"time"})]}})}})}})}export{G as I};
//# sourceMappingURL=InVoiceActions-DYQB3efP.js.map
