import{J as M,W as C,M as E,c as e,K as w,S as g,a7 as I,u,s as x,ac as R,C as P,dm as B,a5 as T}from"./useStore-C81yKXnX.js";import{S as h}from"./SettingsBlock-zYSlJJFm.js";import{I as O}from"./browser-QP6z6XX1.js";import{B as k,a as S}from"./Breadcrumb-B2nrXbr4.js";import{a as b}from"./RadioBox-300--nE2.js";import{N as _}from"./Notice-D4YZaiTY.js";import{I as A}from"./LegacyItem-B-uApzaA.js";import{A as U}from"./Avatar-CnjpHkJi.js";import"./_commonjsHelpers-CE1G-McA.js";const $=x("div")`
  display: flex;
  flex-direction: column;
  padding: 10px;
`,N=x("div")`
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px;
  padding-left: 50px;
`;function X(){const[f]=O(),i=M(),{header:d,servers:a,account:o,channels:p}=C(),c=()=>a.get(i.serverId),r=()=>p.get(i.channelId);E(()=>{d.updateHeader({title:"Settings - Notifications",serverId:i.serverId,iconName:"settings"})});const t=()=>o.getRawNotificationSettings(r()?.id||i.serverId)?.notificationSoundMode??(r()?.id?null:0),n=()=>o.getRawNotificationSettings(r()?.id||i.serverId)?.notificationPingMode??(r()?.id?null:0),s=()=>[...n()===null?[{id:null,label:"Inherit"}]:[],...n()!==I.MENTIONS_ONLY?[{id:0,label:"Everything"}]:[],{id:1,label:"Mentions Only"},{id:2,label:"Mute"}],m=v=>{o.updateUserNotificationSettings({notificationSoundMode:v.id,channelId:i.channelId,serverId:i.serverId})},l=[...r()?.serverId?[{id:null,label:"Inherit"}]:[],{id:0,label:"Everything"},{id:1,label:"Mentions Only"},{id:2,label:"Mute"}],y=v=>{o.updateUserNotificationSettings({notificationPingMode:v.id,channelId:i.channelId,serverId:i.serverId})};return e($,{get children(){return[e(k,{get children(){return[e(S,{get href(){return w.SERVER_MESSAGES(i.serverId,c()?.defaultChannelId)},icon:"home",get title(){return c()?.name}}),e(S,{get href(){return r()?.serverId?"../":void 0},get title(){return f("gAFs8m")}}),e(g,{get when(){return r()?.serverId},get children(){return e(S,{get title(){return r()?.name}})}})]}}),e(_,{type:"info",description:"These settings will only change for you."}),e(h,{get class(){return u`
          margin-top: 10px;
        `},header:!0,icon:"priority_high",label:"Notification Ping",description:"Display a red notification icon.",get children(){return e(A,{get alert(){return n()!==I.MUTE},style:{"padding-left":"10px","pointer-events":"none"},get children(){return e(U,{server:{hexColor:"rgba(255,255,255)",verified:!1},size:30})}})}}),e(N,{get children(){return e(b,{onChange:y,items:l,get initialId(){return n()}})}}),e(g,{get when(){return n()!==I.MUTE},get children(){return[e(h,{get class(){return u`
            margin-top: 10px;
          `},header:!0,icon:"notifications_active",label:"Notification Sound",description:"Make a notification sound."}),e(N,{get children(){return e(b,{onChange:m,get items(){return s()},get initialId(){return t()}})}})]}}),e(g,{get when(){return!r()?.serverId},get children(){return e(F,{})}})]}})}const F=()=>{const f=M(),i=C(),d=()=>i.channels.getSortedChannelsByServerId(f.serverId,!0).filter(t=>t.type===T.SERVER_TEXT),a=t=>{const n=i.account.getRawNotificationSettings(t),s=n?.notificationPingMode,m=n?.notificationSoundMode,l=s||m;return l!=null},o=()=>d().filter(t=>a(t.id)),p=t=>new Promise(n=>setTimeout(n,t)),c=async()=>{const t=[...o()];for(let n=0;n<t.length;n++){const s=t[n];await B({notificationPingMode:null,notificationSoundMode:null,channelId:s.id}),await p(800)}},r=()=>[...o(),...d().filter(t=>!a(t.id))];return[e(h,{get class(){return u`
          margin-top: 10px;
        `},header:!0,icon:"storage",label:"Channels",description:"Manage notifications per channel.",get children(){return e(g,{get when(){return o().length},get children(){return e(R,{onClick:c,iconName:"refresh",get label(){return`Reset Overrides (${o().length})`}})}})}}),e(P,{get each(){return r()},children:(t,n)=>e(h,{get href(){return"./"+t.id},get class(){return u`
              padding-top: 0;
              padding-bottom: 0;
            `},get label(){return`${a(t.id)?"*":""}${t.name}`},icon:"tag",borderTopRadius:!1,get borderBottomRadius(){return n()===r().length-1}})})]};export{X as default};
//# sourceMappingURL=ServerNotificationSettings-BhOu0GDp.js.map
