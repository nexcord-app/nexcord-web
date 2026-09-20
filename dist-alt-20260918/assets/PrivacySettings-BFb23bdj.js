import{W as d,M as C,c as e,U as t,u,V as g,b as x,s as F,d4 as c}from"./useStore-C81yKXnX.js";import{B as R,a as S}from"./Breadcrumb-B2nrXbr4.js";import{S as l}from"./SettingsBlock-zYSlJJFm.js";import{a as p}from"./RadioBox-300--nE2.js";import{C as w}from"./Checkbox-cAafcjqo.js";import"./_commonjsHelpers-CE1G-McA.js";const O=F("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`,h=F("div")`
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px;
  padding-left: 50px;
`;function y(){const{header:n}=d();return C(()=>{n.updateHeader({title:"Settings - Privacy",iconName:"settings"})}),e(O,{get children(){return[e(R,{get children(){return[e(S,{href:"/app",icon:"home",get title(){return t("t5AkH8")}}),e(S,{get title(){return t("OjjWVm")}})]}}),e(I,{}),e(B,{}),e(D,{})]}})}function I(){const{account:n}=d(),r=()=>n.user()?.lastOnlineStatus,o=[{id:0,label:t("RStKdF")},{id:1,label:t("UPO9j0")},{id:2,label:t("7te3P9")}],i=s=>{const a=s.id;c({lastOnlineStatus:a})};return e(g,{get children(){return[e(l,{get class(){return u`
          margin-top: 10px;
        `},get description(){return t("SciTLR")},header:!0,icon:"schedule",get label(){return t("Ino0EC")}}),e(h,{get children(){return e(p,{onChange:i,items:o,get initialId(){return r()||0}})}})]}})}function B(){const{account:n}=d(),r=()=>n.user()?.friendRequestStatus,o=[{id:0,label:t("DnNO82")},{id:1,label:t("zlux4o")},{id:2,label:t("u7motX")}],i=s=>{const a=s.id;c({friendRequestStatus:a})};return e(g,{get children(){return[e(k,{}),e(l,{get class(){return u`
          margin-top: 10px;
        `},get description(){return t("YA4WDj")},header:!0,icon:"group_add",get label(){return t("9QNwA0")}}),e(h,{get children(){return e(p,{onChange:i,items:o,get initialId(){return r()||0}})}})]}})}const k=()=>{const{account:n}=d(),r=()=>n.user()?.dmStatus,o=[{id:0,label:t("c3KUP8")},{id:1,label:t("9m+X06")},{id:2,label:t("TclEvc")}],i=s=>{const a=s.id;c({dmStatus:a})};return[e(l,{get class(){return u`
          margin-top: 10px;
        `},get description(){return t("PrfIE8")},header:!0,icon:"chat_bubble",get label(){return t("euen58")}}),e(h,{get children(){return e(p,{onChange:i,items:o,get initialId(){return r()||0}})}})]},D=()=>{const n=d(),r=()=>n.account.user(),[o,i]=x(r()?.hideFollowers||!1),[s,a]=x(r()?.hideFollowing||!1);C(()=>{i(r()?.hideFollowers||!1),a(r()?.hideFollowing||!1)});const m=b=>f=>{b==="followers"&&i(f),b==="following"&&a(f),c({hideFollowers:o(),hideFollowing:s()})};return e(g,{get children(){return[e(l,{get class(){return u`
          margin-top: 10px;
        `},header:!0,icon:"person",get label(){return t("nGwhS+")}}),e(l,{get label(){return t("gxCTWL")},get description(){return t("whDbr7")},borderBottomRadius:!1,borderTopRadius:!1,get children(){return e(w,{get checked(){return o()},get onChange(){return m("followers")}})}}),e(l,{get label(){return t("uWvRO3")},get description(){return t("DjnoVX")},borderTopRadius:!1,get children(){return e(w,{get checked(){return s()},get onChange(){return m("following")}})}})]}})};export{y as default};
//# sourceMappingURL=PrivacySettings-BFb23bdj.js.map
