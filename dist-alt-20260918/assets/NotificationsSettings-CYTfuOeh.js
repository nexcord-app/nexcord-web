import{c as e,E as g,Z as O,p as N,s as I,a1 as A,as as h,W as R,M as k,U as r,b as f,cj as T,y as s,dc as D,S as E,G as c,T as B,V as v,a2 as x,u as M,dd as y,cg as S,de as F,df as L,ac as w,b2 as P,b1 as U}from"./useStore-C81yKXnX.js";import{C as _}from"./Checkbox-cAafcjqo.js";import{B as V,a as b}from"./Breadcrumb-B2nrXbr4.js";import{S as d}from"./SettingsBlock-zYSlJJFm.js";import{D as $}from"./DropDown-VSE3I8gP.js";import{a as H}from"./RadioBox-300--nE2.js";import"./_commonjsHelpers-CE1G-McA.js";import"./useResizeObserver-DorGCpy9.js";var W=g("<input type=range>");const Y=I("div")`
  display: flex;
  gap: 10px;
  align-items: center;
  user-select: none;
  cursor: pointer;

 
`;function G(t){return e(Y,{class:"slider",get children(){var n=W();return n.$$input=i=>t.onChange?.(i.target.value),O(n,"pointerup",t.onEnd,!0),N(i=>{var o=t.min,l=t.max;return o!==i.e&&h(n,"min",i.e=o),l!==i.t&&h(n,"max",i.t=l),i},{e:void 0,t:void 0}),N(()=>n.value=t.value),n}})}A(["pointerup","input"]);var K=g("<div style=display:flex>"),q=g("<div style=margin-left:auto;flex-shrink:0>"),Z=g("<div>");const j=I("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;function de(){const{header:t}=R();return k(()=>{t.updateHeader({title:"Settings - Notifications",iconName:"settings"})}),e(j,{get children(){return[e(V,{get children(){return[e(b,{href:"/app",icon:"home",get title(){return r("t5AkH8")}}),e(b,{get title(){return r("TdkYU5")}})]}}),e(z,{}),e(Q,{}),e(X,{}),e(ee,{})]}})}function z(){const[t,n]=f(T(s.ENABLE_DESKTOP_NOTIFICATION,!1)),i=async()=>{n(!t()),y(s.ENABLE_DESKTOP_NOTIFICATION,t()),await Notification.requestPermission(),t()&&new Notification("It worked.",{body:"Desktop notifications enabled!",icon:"/assets/logo.png"})};return e(d,{icon:"dvr",get label(){return r("4rgvD0")},get description(){return r("OvDPwe")},get children(){return e(_,{onChange:i,get checked(){return t()}})}})}function Q(){const[t,n]=f(T(s.ARE_NOTIFICATIONS_MUTED,!1)),i=()=>{n(!t()),y(s.ARE_NOTIFICATIONS_MUTED,t()),!t()&&S({force:!0})},[o,l]=f(D(s.NOTIFICATION_VOLUME,10)),p=()=>{F(s.NOTIFICATION_VOLUME,o()),S({force:!0})};return e(v,{get children(){return[e(d,{icon:"notifications_active",get label(){return r("e48anT")},get description(){return r("KUD1WI")},get children(){return e(_,{onChange:i,get checked(){return!t()}})}}),e(E,{get when(){return!t()},get children(){return e(d,{icon:"volume_up",get label(){return r("1RmWYm")},get description(){return r("+W9yGK")},get children(){var a=K();return c(a,e(G,{onEnd:p,get value(){return o()},min:0,max:100,onChange:l}),null),c(a,e(B,{style:{width:"30px","text-align":"center"},get children(){return o()}}),null),a}})}})]}})}function X(){return e(v,{get children(){return[e(d,{header:!0,icon:"music_note",get label(){return r("e48anT")},get description(){return r("JNsAyC")}}),e(d,{icon:"chat",get label(){return r("QZBX6j")},get description(){return r("01lrh7")},borderTopRadius:!1,borderBottomRadius:!1,get children(){return e(m,{typeId:"MESSAGE"})}}),e(d,{icon:"alternate_email",get label(){return r("msdgXQ")},get description(){return r("kfLxIp")},borderTopRadius:!1,borderBottomRadius:!1,get children(){return e(m,{typeId:"MESSAGE_MENTION"})}}),e(d,{icon:"calendar_today",get label(){return r("9RDskx")},get description(){return r("f4TapH")},borderTopRadius:!1,get children(){return e(m,{typeId:"REMINDER"})}})]}})}function m(t){const[n,i]=x(s.NOTIFICATION_SOUNDS,{}),o=()=>n()[t.typeId]||P(t.typeId)||"default",l=a=>a.charAt(0).toUpperCase()+a.slice(1),p=(a,u)=>{a.stopPropagation(),U(u)};return e($,{get selectedId(){return o()},get items(){return L.map(a=>({id:a,onClick:()=>i({...n(),[t.typeId]:a}),label:a==="nerimity-mute"?r("PVRq/b"):l(a.replaceAll("-"," ")),suffix:e(E,{when:a!=="nerimity-mute",get children(){var u=q();return c(u,e(w,{onClick:C=>p(C,a),styles:{"margin-left":"6px","flex-shrink":0},iconName:"play_circle",margin:0,padding:4,iconSize:16})),u}})}))}})}const J=I("div")`
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px;
  padding-left: 50px;
`;function ee(){const[t,n]=x(s.IN_APP_NOTIFICATIONS_PREVIEW,"INHERIT"),i=[{id:"OFF",label:r("Hv2CZ5")},{id:"MENTIONS_ONLY",label:r("bfe0Y9")},{id:"INHERIT",label:r("cnYWLd")},{id:"ALL",label:r("Sq0GsY")}];return(()=>{var o=Z();return c(o,e(d,{get class(){return M`
          margin-top: 10px;
        `},header:!0,icon:"priority_high",get label(){return r("6S+BT7")},get description(){return r("vV5qHb")}}),null),c(o,e(J,{get children(){return e(H,{onChange:l=>n(l.id),items:i,get initialId(){return t()}})}}),null),o})()}export{de as default};
//# sourceMappingURL=NotificationsSettings-CYTfuOeh.js.map
