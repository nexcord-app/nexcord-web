import{bl as C,c as n,bm as j,a3 as S,m as l,E as v,G as h,S as _,p as b,I as m,a as w,at as c,u as g,ak as y,af as s,as as B}from"./useStore-B0mu5xqR.js";const R="_block_1hja0_1",z="_clickable_1hja0_12",I="_header_1hja0_18",$="_outerContainer_1hja0_24",x="_details_1hja0_31",E="_label_1hja0_39",L="_description_1hja0_43",M="_icon_1hja0_48",a={block:R,clickable:z,header:I,outerContainer:$,details:x,label:E,description:L,icon:M};var N=v("<img alt>"),T=v("<div>"),A=v("<div><div><div>");function G(e){const f=C(()=>e.children);return n(j,S({get onmouseleave(){return e.onMouseLeave},get onmouseover(){return e.onMouseOver},get component(){return e.href?y:"div"}},()=>e.hrefBlank?{target:"_blank",rel:"noopener noreferrer"}:{},{get state(){return e.historyState},get href(){return e.href},get class(){return w(a.block,c(e.header,a.header),c(e.borderTopRadius===!1,g`
            && {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
              margin-top: 0;
            }
          `),c(e.borderBottomRadius===!1,g`
            && {
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
              margin-bottom: 0;
            }
          `),c(e.borderBottomRadius===!1&&e.borderTopRadius===!1,g`
            && {
              margin-bottom: 1px;
            }
          `),c(e.onClick||e.href,a.clickable),e.class)},get onClick(){return e.onClick},get children(){return[(()=>{var d=A(),u=d.firstChild,k=u.firstChild;return h(d,n(_,{get when(){return e.iconSrc},get fallback(){return l(()=>typeof e.icon=="string")()?n(m,{get name(){return e.icon},size:24}):l(()=>!e.icon)()?n(m,{size:24}):e.icon},get children(){var t=N();return b(r=>{var i=a.icon,o=e.iconSrc;return i!==r.e&&s(t,r.e=i),o!==r.t&&B(t,"src",r.t=o),r},{e:void 0,t:void 0}),t}}),u),h(k,()=>e.label),h(u,n(_,{get when(){return e.description},get children(){var t=T();return h(t,()=>e.description),b(()=>s(t,a.description)),t}}),null),b(t=>{var r=a.outerContainer,i=a.details,o=a.label;return r!==t.e&&s(d,t.e=r),i!==t.t&&s(u,t.t=i),o!==t.a&&s(k,t.a=o),t},{e:void 0,t:void 0,a:void 0}),d})(),l(()=>f()),n(_,{get when(){return l(()=>!f())()&&(e.onClick||e.href)},get children(){return n(m,{size:24,get name(){return l(()=>!!e.hrefBlank)()?"open_in_new":e.onClickIcon||"keyboard_arrow_right"}})}})]}}))}export{G as S,a as s};
//# sourceMappingURL=SettingsBlock-C1ny6-Rp.js.map
