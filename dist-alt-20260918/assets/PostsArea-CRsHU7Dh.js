const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PhotoEditor-tqJv0raI.js","assets/useStore-B0mu5xqR.js","assets/_commonjsHelpers-CE1G-McA.js","assets/useStore-BUWMmi7x.css","assets/useResizeObserver-78Qyl67J.js","assets/ColorPicker-DSENDl9J.js","assets/ColorPicker-C9ZxXJcG.css","assets/PhotoEditor-CH_YCvBS.css"])))=>i.map(i=>d[i]);
import{W as Z,c as t,a3 as Ee,aY as de,b as y,M as $,w as We,i as ye,E as V,G as u,T as v,U as L,S as f,H as ce,K as G,p as T,m as D,I as N,C as H,ak as ie,X as He,g as we,ab as z,ac as M,ap as Ve,Y as ne,$ as Ae,au as je,L as Be,cy as Ye,cz as Ge,af as p,u as b,aq as Re,a1 as qe,O as ue,V as R,F as B,aB as Xe,aS as Je,cA as Ke,aO as Qe,o as be,az as Te,a as Ze,s as q,cB as et,ay as Le,h as ve,cq as tt,l as nt,aQ as ke,bj as rt,_ as ot,cC as it,as as st,cD as at,cE as oe}from"./useStore-B0mu5xqR.js";import{f as K,b as ct}from"./date-BKAW-sdF.js";import{f as lt,M as le,I as dt,S as ut,O as gt,i as ht,R as mt,y as ft,c as Pe,b as _e}from"./Markup-Dds-Xr4n.js";import{A as ee}from"./Avatar-Dm8O4A-8.js";import{I as xe}from"./Input-B_7GKQol.js";import{A as ze,f as De,d as Me,e as Ct}from"./MessagePane-DLovmr_e.js";import{F as wt}from"./FileBrowser-CbMrZ7CD.js";import{E as yt}from"./EmojiPicker-Ck71MS-f.js";import{I as me}from"./LegacyItem-BWKWa33k.js";import{S as bt}from"./Skeleton-Hm2fqnK3.js";import{N as vt}from"./Notice-24TY465T.js";import{T as xt}from"./Tooltip-BRibjVCh.js";import{u as pt}from"./useResizeObserver-78Qyl67J.js";import{R as kt}from"./RadioBox-7l78EuRt.js";import{M as Pt}from"./MetaTitle-D10L0znK.js";import{D as _t}from"./DropDown-D2LrCkxa.js";import{M as O}from"./Modal-DBA6raav.js";import{U as fe}from"./ContextMenuServer-C8IOCIXK.js";import{C as It}from"./ContextMenu-CqZZtMph.js";import{M as St}from"./MemberContextMenu-C-xRS5K9.js";import{C as Et}from"./CreateTicketModal-NY6KipxR.js";const At="_postContainer_642wm_1",Bt="_disableClick_642wm_24",Rt="_postInnerContainer_642wm_28",Tt="_postInnerInnerContainer_642wm_35",Lt="_botTag_642wm_44",zt="_postDetailsContainer_642wm_54",Dt="_postUsernameStyle_642wm_59",Mt="_translationArea_642wm_66",$t="_title_642wm_81",Ft="_translationSource_642wm_85",Ut="_postContentContainer_642wm_91",Ot="_editIconStyles_642wm_98",Nt="_postActionsContainer_642wm_104",Wt="_postButtonStyle_642wm_110",Ht="_notLiked_642wm_119",Vt="_icon_642wm_126",jt="_viewsStyle_642wm_129",Yt="_rightActions_642wm_140",Gt="_replyToContainer_642wm_146",qt="_pinnedContainer_642wm_152",Xt="_embedContainer_642wm_158",Jt="_pollEmbedContainer_642wm_164",Kt="_pollChoicesContainer_642wm_175",Qt="_notAllowed_642wm_180",Zt="_footer_642wm_183",en="_votes_642wm_189",tn="_voteButton_642wm_192",nn="_pollChoiceContainer_642wm_197",rn="_radioBoxItem_642wm_216",on="_percentText_642wm_226",sn="_progressBarContainer_642wm_232",m={postContainer:At,disableClick:Bt,postInnerContainer:Rt,postInnerInnerContainer:Tt,botTag:Lt,postDetailsContainer:zt,postUsernameStyle:Dt,translationArea:Mt,title:$t,translationSource:Ft,postContentContainer:Ut,editIconStyles:Ot,postActionsContainer:Nt,postButtonStyle:Wt,notLiked:Ht,icon:Vt,viewsStyle:jt,rightActions:Yt,replyToContainer:Gt,pinnedContainer:qt,embedContainer:Xt,pollEmbedContainer:Jt,pollChoicesContainer:Kt,notAllowed:Qt,footer:Zt,votes:en,voteButton:tn,pollChoiceContainer:nn,radioBoxItem:rn,percentText:on,progressBarContainer:sn};var $e=V("<div><div>"),an=V("<div tabindex=0>"),cn=V("<div>Bot"),Q=V("<div>"),ln=V("<div><span> <span>(<!>)"),dn=V("<div><div></div><div><span>");const re=new Date;re.setUTCFullYear(2024);re.setUTCDate(5);re.setUTCMonth(7);re.setUTCHours(9);re.setUTCMinutes(54);const un=re.getTime();function te(e){const{posts:n}=Z();if(e.post.repost){n.pushPost(e.post.repost);const w=()=>n.cachedPost(e.post.repost?.id);return t(te,Ee(e,{get post(){return w()},reposted:!0}))}const[r,o]=de(),[a,i]=y(!1),[h,c]=y(null),[s,C]=y(e.pinned),[l,k]=y(),[P,x]=y(!1);$(()=>{if(P()&&!l()){if(!e.post.content)return;lt(e.post.content).then(k).catch(()=>We("Translation failed"))}});const S=ye(()=>{if(e.post.commentToId)return n.cachedPost(e.post.commentToId)});let E={x:0,y:0},j=!1;const X=w=>{E={x:w.clientX,y:w.clientY},j=!!window.getSelection()?.toString()},W=w=>{r.postId===e.post.id||e.disableClick||e.post.deleted||w.target.closest(".button")||w.target.closest(".imageEmbedContainer")||w.target.closest(".pollEmbedContainer")||w.target.closest(".mention.timestamp")||w.target.closest(".spoiler")||w.target.closest("a")||E.x!==w.clientX&&E.y!==w.clientY||j||o({postId:e.post.id})},J=w=>{w?.preventDefault(),c({x:w.clientX,y:w.clientY})};return(()=>{var w=an();return w.addEventListener("mouseleave",()=>i(!1)),w.addEventListener("mouseenter",()=>i(!0)),w.$$click=W,w.$$mousedown=X,u(w,t(St,{get position(){return h()},get user(){return e.post.createdBy},get userId(){return e.post.createdBy?.id},onClose:()=>c(null)}),null),u(w,t(f,{get when(){return e.post.deleted},get children(){return t(v,{get children(){return L("Jz5F8Y")}})}}),null),u(w,t(f,{get when(){return e.post.block},get children(){return t(v,{children:"This user has blocked you."})}}),null),u(w,t(f,{get when(){return D(()=>!e.post.deleted)()&&!e.post.block},get children(){return[t(f,{get when(){return s()},get children(){return t(vn,{})}}),t(f,{get when(){return e.reposted},get children(){return t(xn,{get post(){return e.post},get showRepostsAsSelf(){return e.showRepostsAsSelf}})}}),t(f,{get when(){return S()},get children(){return t(bn,{get user(){return S().createdBy}})}}),(()=>{var _=$e(),d=_.firstChild;return u(_,t(ce,{onClick:g=>g.stopPropagation(),get href(){return G.PROFILE(e.post.createdBy?.id)},onContextMenu:J,get children(){return t(ee,{resize:96,get animate(){return a()},class:"avatar",get user(){return e.post.createdBy},size:40})}}),d),u(d,t(gn,{onRequestUserContextMenu:J,get hovered(){return a()},get showFullDate(){return e.showFullDate},get post(){return e.post}}),null),u(d,t(hn,{get post(){return e.post},get hovered(){return a()},get translatePost(){return P()},get translatedContent(){return l()}}),null),u(d,t(mn,{onTogglePinned:()=>C(!s()),get primaryColor(){return e.primaryColor},get hideDelete(){return e.hideDelete},get post(){return e.post},get pinned(){return s()},translatePost:P,setTranslatePost:x}),null),T(g=>{var I=z(m.postInnerContainer,"postInnerContainer"),F=z(m.postInnerInnerContainer,"postInnerInnerContainer");return I!==g.e&&p(_,g.e=I),F!==g.t&&p(d,g.t=F),g},{e:void 0,t:void 0}),_})()]}}),null),T(_=>{var d=z("postItem",e.class,m.postContainer,e.disableClick&&m.disableClick,e.primaryColor&&b`
            .markup a {
              color: ${e.primaryColor};
            }
            .markup blockquote {
              border-left-color: ${e.primaryColor};
            }
          `),g=e.bgColor;return d!==_.e&&p(w,_.e=d),g!==_.t&&Re(w,"background-color",_.t=g),_},{e:void 0,t:void 0}),w})()}const gn=e=>(()=>{var n=Q();return u(n,t(ie,{get onContextMenu(){return e.onRequestUserContextMenu},get class(){return m.postUsernameStyle},style:{color:"white"},onClick:r=>r.stopPropagation(),decoration:!0,get href(){return G.PROFILE(e.post.createdBy?.id)},get children(){return e.post.createdBy?.username}}),null),u(n,t(f,{get when(){return e.post.createdBy.bot},get children(){var r=cn();return T(()=>p(r,m.botTag)),r}}),null),u(n,t(v,{style:{"flex-shrink":0},get title(){return K(e.post.createdAt)},size:12,color:"rgba(255,255,255,0.5)",get children(){return(e.showFullDate?K:ct)(e.post.createdAt)}}),null),T(()=>p(n,z(m.postDetailsContainer,"postDetailsContainer"))),n})(),hn=e=>(()=>{var n=Q();return u(n,t(le,{get text(){return e.post.content||""},get post(){return e.post}}),null),u(n,t(f,{get when(){return e.post.editedAt},get children(){return t(N,{name:"edit",get class(){return m.editIconStyles},size:14,get title(){return`Edited at ${K(e.post.editedAt)}`}})}}),null),u(n,t(fn,{get post(){return e.post},get hovered(){return e.hovered}}),null),u(n,t(f,{get when(){return D(()=>!!e.translatePost)()&&e.translatedContent},get children(){var r=ln(),o=r.firstChild,a=o.firstChild,i=a.nextSibling,h=i.firstChild,c=h.nextSibling;return c.nextSibling,u(o,()=>L("vMDTtw"),a),u(i,()=>e.translatedContent?.src,c),u(r,t(le,{get text(){return e.translatedContent.translationString},get post(){return e.post}}),null),T(s=>{var C=m.translationArea,l=m.title,k=m.translationSource;return C!==s.e&&p(r,s.e=C),l!==s.t&&p(o,s.t=l),k!==s.a&&p(i,s.a=k),s},{e:void 0,t:void 0,a:void 0}),r}}),null),T(()=>p(n,m.postContentContainer)),n})(),mn=e=>{const n=He(),{account:r}=Z(),[o,a]=y(!1),{createPortal:i}=we(),[,h]=de(),c=()=>h({postId:e.post.id}),s=()=>e.post?.likedBy?.length,C=()=>e.post?.reposts?.find(g=>g.createdBy.id===r.user()?.id),l=()=>s()?"favorite":"favorite_border",k=async()=>{if(!o()){if(a(!0),s()){await e.post.unlike(),a(!1);return}await e.post.like(),a(!1)}},P=()=>{C()?e.post.unRepostPost():e.post.repostPost()},x=()=>i?.(g=>t(Jn,{close:g,get post(){return e.post}})),[S,E]=y(!1),j=async()=>{S()||(E(!0),e.pinned?await Ye(e.post.id).finally(()=>E(!1)):await Ge(e.post.id).finally(()=>E(!1)),e.onTogglePinned?.())},X=()=>{i(g=>t(Et,{close:g,get ticket(){return{id:"ABUSE",userId:e.post.createdBy.id,messageId:`https://nerimity.com/p/${e.post.id}`}}}))},W=()=>i?.(g=>t(Qn,{close:g,get post(){return e.post}})),J=()=>e.post.createdAt>un,w=()=>e.post.createdBy?.id===r.user()?.id&&!e.hideDelete,_=()=>e.post.createdBy?.id!==r.user()?.id,d=g=>{if(g.target instanceof Element){const I=g.target?.getBoundingClientRect();i(F=>t(It,{get items(){return[...w()?[{label:e.pinned?"Unpin":"Pin",onClick:j,alert:e.pinned,icon:"keep"},{label:"Edit",onClick:W,icon:"edit"},{separator:!0},{label:"Delete",onClick:x,alert:!0,icon:"delete"}]:[],...r.hasModeratorPerm()?[{label:"Moderation Pane",onClick:()=>n("/app/moderation?search-post-id="+e.post.id),icon:"security"}]:[],{label:L("M/vFkz"),onClick:()=>{e.setTranslatePost?.(!e.translatePost())},icon:"translate"},{separator:!0},{label:"Copy Post",onClick:()=>{e.post.content?.trim()&&navigator.clipboard.writeText(e.post.content)},icon:"content_copy"},{label:L("x7WiI4"),onClick:()=>{navigator.clipboard.writeText(je.APP_URL+"/p/"+e.post.id)},icon:"content_copy"},{label:L("qwviVJ"),icon:"content_copy",onClick:()=>{navigator.clipboard.writeText(e.post.id)}},..._()?[{separator:!0},{label:"Report",onClick:X,alert:!0,icon:"flag"}]:[]]},position:I,onClose:F,triggerClassName:"post-more-button"}),"post-context-menu",!0)}};return(()=>{var g=$e(),I=g.firstChild;return u(g,t(M,{margin:0,onClick:k,iconSize:16,get class(){return m.postButtonStyle},color:"var(--alert-color)",get primary(){return!!s()},get iconClass(){return z(m.icon,!s()&&m.notLiked)},get iconName(){return l()},get label(){return e.post._count?.likedBy.toLocaleString()}}),I),u(g,t(M,{margin:0,onClick:c,iconSize:16,get class(){return m.postButtonStyle},get color(){return e.primaryColor},get iconClass(){return m.icon},iconName:"comment",get label(){return e.post._count?.comments.toLocaleString()}}),I),u(g,t(M,{margin:0,onClick:P,iconSize:16,get class(){return m.postButtonStyle},color:"var(--success-color)",get primary(){return!!C()},get iconClass(){return m.icon},iconName:"repeat",get label(){return e.post._count?.reposts.toLocaleString()}}),I),u(g,t(f,{get when(){return J()},get children(){return t(xt,{tooltip:"Estimated Views",get children(){return t(M,{margin:0,iconSize:16,color:"rgba(255,255,255,0.6)",get class(){return z(m.postButtonStyle,m.viewsStyle)},get iconClass(){return m.icon},iconName:"visibility",get label(){return e.post.views.toLocaleString()}})}})}}),I),u(I,t(M,{onclick:d,margin:0,iconSize:16,get class(){return z(m.postButtonStyle,"post-more-button")},get iconClass(){return m.icon},iconName:"more_vert"})),T(F=>{var se=z(m.postActionsContainer,"postActions"),ae=m.rightActions;return se!==F.e&&p(g,F.e=se),ae!==F.t&&p(I,F.t=ae),F},{e:void 0,t:void 0}),g})()};function fn(e){let n;const{width:r}=pt(()=>n?.parentElement?.parentElement?.parentElement),o=()=>e.post.embed?.origUrl?.match(ft),a=()=>e.post.content?.match(ht)?.[1];return(()=>{var i=Q(),h=n;return typeof h=="function"?Ve(h,i):n=i,u(i,t(f,{get when(){return e.post.attachments?.[0]},get children(){return t(dt,{get attachment(){return e.post.attachments?.[0]},widthOffset:-50,customHeight:1120,get customWidth(){return r()}})}}),null),u(i,t(Ae,{get children(){return[t(ne,{get when(){return a()},children:c=>t(ut,{get code(){return c()}})}),t(ne,{get when(){return o()},children:c=>t(Cn,{get code(){return c()[3]},get embed(){return e.post.embed},get shorts(){return c()[1].endsWith("shorts")},get containerWidth(){return r()}})}),t(ne,{get when(){return e.post.embed},get children(){return t(gt,{get message(){return{embed:e.post.embed,content:e.post.content}},customWidthOffset:-50,customHeight:1120,get customWidth(){return r()}})}})]}}),null),u(i,t(f,{get when(){return e.post.poll},get children(){return t(wn,{get poll(){return e.post.poll},get post(){return e.post}})}}),null),T(()=>p(i,z("embeds",m.embedContainer))),i})()}const Cn=e=>{const{height:n}=Be(),r=-64,o=()=>{if(e.shorts){const i=Pe(e.containerWidth+r,600),h=e.containerWidth<=600?n()/1.4:n()/2;return _e(1080,1920,i,h)}const a=Pe(e.containerWidth+r,600);return _e(1920,1080,a,999999)};return t(mt,Ee(e,{get style(){return o()}}))},wn=e=>{const n=()=>e.poll.votedUsers[0]?.pollChoiceId,[r,o]=y(null);$(()=>{o(n()||null)});const a=async()=>{await e.post.votePoll(r())};return(()=>{var i=dn(),h=i.firstChild,c=h.nextSibling,s=c.firstChild;return u(h,t(H,{get each(){return e.poll.choices},children:C=>t(yn,{get post(){return e.post},get votedChoiceId(){return n()},get poll(){return e.poll},choice:C,get selectedId(){return r()},setSelected:o})})),u(s,t(v,{size:12,get children(){return[D(()=>e.poll._count.votedUsers)," "]}}),null),u(s,t(v,{size:12,opacity:.6,children:"votes"}),null),u(c,t(f,{get when(){return D(()=>!!r())()&&!n()},get children(){return t(M,{onClick:a,get class(){return m.voteButton},primary:!0,label:"Vote",iconName:"check",padding:4,margin:0,iconSize:16})}}),null),T(C=>{var l=z("pollEmbedContainer",m.pollEmbedContainer),k=z(m.pollChoicesContainer,n()&&m.notAllowed),P=m.footer,x=m.votes;return l!==C.e&&p(i,C.e=l),k!==C.t&&p(h,C.t=k),P!==C.a&&p(c,C.a=P),x!==C.o&&p(s,C.o=x),C},{e:void 0,t:void 0,a:void 0,o:void 0}),i})()},yn=e=>{const n=Z(),r=()=>Math.round(100*e.choice._count.votedUsers/e.poll._count.votedUsers||0),o=()=>!!(e.votedChoiceId||n.account.user()?.id===e.post.createdBy.id);return(()=>{var a=Q();return a.$$click=()=>e.setSelected(e.choice.id===e.selectedId?null:e.choice.id),u(a,t(kt,{checkboxSize:8,get class(){return z(!e.votedChoiceId&&m.radioBoxItem)},get item(){return{id:"0",label:e.choice.content}},labelSize:14,get selected(){return e.selectedId===e.choice.id}}),null),u(a,t(f,{get when(){return o()},get children(){return t(v,{opacity:.8,size:12,get class(){return m.percentText},get children(){return[D(()=>r()),"%"]}})}}),null),u(a,t(f,{get when(){return o()},get children(){var i=Q();return T(h=>{var c=m.progressBarContainer,s=`${r()}%`;return c!==h.e&&p(i,h.e=c),s!==h.t&&Re(i,"width",h.t=s),h},{e:void 0,t:void 0}),i}}),null),T(()=>p(a,z(m.pollChoiceContainer,e.votedChoiceId===e.choice.id&&"selected"))),a})()},bn=e=>(()=>{var n=Q();return u(n,t(v,{size:14,style:{"margin-right":"5px"},children:"Replying to"}),null),u(n,t(ie,{decoration:!0,style:{"font-size":"14px","line-height":"1"},get href(){return G.PROFILE(e.user?.id)},get children(){return e.user?.username}}),null),T(()=>p(n,m.replyToContainer)),n})(),vn=()=>(()=>{var e=Q();return u(e,t(N,{name:"keep",color:"var(--primary-color)",size:16}),null),u(e,t(v,{size:14,style:{"margin-right":"5px"},children:"Pinned"}),null),T(()=>p(e,m.pinnedContainer)),e})(),xn=e=>{const n=ye(()=>e.post.reposts.map(r=>r.createdBy));return(()=>{var r=Q();return u(r,t(N,{name:"repeat",color:"var(--success-color)",size:16}),null),u(r,t(v,{size:14,style:{"margin-right":"5px"},get children(){return[t(f,{get when(){return e.showRepostsAsSelf},children:"Reposted"}),t(f,{get when(){return!e.showRepostsAsSelf},get children(){return["Reposted by"," ",t(H,{get each(){return n()},children:(o,a)=>[D(()=>a()?", ":null),t(ie,{style:{"line-height":"1"},decoration:!0,get href(){return G.PROFILE(o?.id)},get children(){return o?.username}})]})]}})]}}),null),T(()=>p(r,m.pinnedContainer)),r})()};qe(["mousedown","click"]);var pn=V("<div>"),kn=V("<img alt>"),Ce=V("<strong style=display:inline-block;max-width:200px;vertical-align:bottom>username"),Ie=V("<div style=opacity:0.6;font-size:14px;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical>");const Pn=nt(()=>ot(()=>import("./PhotoEditor-tqJv0raI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),_n=q(R)`
  background: rgba(0, 0, 0, 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px rgba(255, 255, 255, 0.2);
  border-top: none;
  transition: 0.2s;
  &[data-focused="true"] {
    border-bottom-color: var(--primary-color);
    border-bottom-width: 2px;
  }
`,In=q(R)`
  margin-bottom: 6px;
`,Sn=q(B)`
  position: relative;
  align-self: end;
  margin: 4px;
`,En=q("div")`
  position: absolute;
  top: 50px;
  right: -10px;
  z-index: 111111;
`;function Se(e){const{posts:n,account:r}=Z(),o=()=>Te(r.user()?.badges||0,Le.SUPPORTER.bit),[a,i]=y(""),{isPortalOpened:h}=we(),[c,s]=y(void 0),[C,l]=y(),[k,P]=y(!1),[x,S]=y(void 0),{createPortal:E}=we(),[j,X]=y(!1),[W,J]=y(!1),[w,_]=Qe([""]);be(()=>{document.addEventListener("paste",I),ve(()=>{document.removeEventListener("paste",I)})});const d=A=>{s(()=>A)},g=async()=>{const A=await De(c());E(U=>t(Pn,{done:d,src:A,close:U}))},I=A=>{const U=A.clipboardData?.files[0];U&&U.type.startsWith("image")&&s(()=>U)},F=A=>{const U=A.item(0)||void 0;s(()=>U)},se=()=>{const A=a(),U=Me(a().trim()),ge=[...w];e.postId?n.cachedPost(e.postId)?.submitReply({content:U,attachment:c(),poll:W()?{choices:ge}:void 0}).then(he=>{he||i(A)}):(console.log(ge),n.submitPost({content:U,file:c(),poll:W()?{choices:ge}:void 0}).then(he=>{he||i(A)})),i(""),_(ke([""])),s(void 0)},ae=(A,U)=>{x().focus(),x().setRangeText(`:${A}: `,x().selectionStart,x().selectionEnd,"end"),i(x().value),U||P(!1)},Oe=A=>{x().focus(),x().setRangeText(`${A.url} `,x().selectionStart,x().selectionEnd,"end"),i(x().value),P(!1)},Ne=()=>{const A=!W();J(A),A||_(ke([""]))},pe=()=>j()||a().length;return t(In,{get children(){return[t(ze,{hideEmojiPicker:!0,get class(){return b`
          && {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            margin-bottom: 0;
          }
        `},get primaryColor(){return e.primaryColor},get inputElement(){return x()},updateText:i}),t(_n,{get"data-focused"(){return j()},get style(){return{"background-color":e.bgColor}},get children(){return[t(xe,{get primaryColor(){return e.primaryColor},get maxLength(){return o()?1500:500},margin:[0,0,4,0],onBlur:()=>setTimeout(()=>X(!1),100),onFocus:()=>setTimeout(()=>X(!0),100),get minHeight(){return pe()?60:void 0},get class(){return z(b`
              div {
                background-color: transparent;
                border: transparent;
              }
            `,"newPostInput")},ref:S,get placeholder(){return D(()=>!!e.postId)()?L("2EvnR6"):L("kNU1GQ")},onText:i,get value(){return a()},type:"textarea"}),t(An,{get textArea(){return x()},get content(){return a()},updateContent:i}),t(f,{get when(){return W()},get children(){return t($n,{options:w,setOptions:_})}}),t(f,{get when(){return c()},get children(){return t(Nn,{cancel:()=>s(void 0),get file(){return c()},onEditClick:g})}}),t(Sn,{gap:6,get children(){return[t(wt,{accept:"images",ref:l,onChange:F}),t(M,{margin:0,padding:5,get color(){return e.primaryColor},get class(){return b`
              width: 20px;
              height: 20px;
            `},iconSize:16,onClick:()=>C()?.open(),iconName:"attach_file"}),t(M,{margin:0,padding:5,get color(){return e.primaryColor},get class(){return b`
              width: 20px;
              height: 20px;
            `},iconSize:16,onClick:Ne,iconName:"checklist"}),t(M,{margin:0,padding:5,get color(){return e.primaryColor},get class(){return Ze("emojiPickerButton",b`
                width: 20px;
                height: 20px;
              `)},iconSize:16,onClick:()=>P(!k()),iconName:"face"}),t(M,{margin:0,padding:5,get color(){return e.primaryColor},iconSize:16,onClick:se,get label(){return D(()=>!!e.postId)()?L("vL5XUG"):L("G47mHj")},iconName:"send"}),t(f,{get when(){return k()},get children(){return t(En,{get children(){return t(yt,{showGifPicker:!0,close:()=>P(!1),gifPicked:Oe,onClick:ae})}})}})]}})]}}),t(f,{get when(){return pe()},get children(){return t(vt,{type:"warn",get class(){return b`
            margin-top: 6px;
          `},description:"Self-harm content is not allowed, account action will be taken."})}})]}})}function An(e){const[n,r]=y(""),[o,a]=y(!1),i=()=>a(!0),h=l=>{a(l.target.closest(".newPostInput")===e.textArea?.parentElement?.parentElement)},c=()=>{if(e.textArea?.selectionStart!==e.textArea?.selectionEnd)return a(!1);a(!0);const l=Mn(e.textArea);r(l)},s=()=>{o()&&c()};$(()=>{e.textArea?.addEventListener("focus",i),document.addEventListener("click",h),document.addEventListener("selectionchange",s),ve(()=>{e.textArea?.removeEventListener("focus",i),document.removeEventListener("click",h),document.removeEventListener("selectionchange",s)})});const C=()=>n().startsWith("@");return $(ue(()=>e.content,c)),t(f,{get when(){return D(()=>!!o())()&&C()},get children(){return t(Rn,{get updateContent(){return e.updateContent},get content(){return e.content},get search(){return n().substring(1)},get textAreaEl(){return e.textArea}})}})}function Bn(e){if(!e)return null;try{const n=document.createElement("span");n.style.cssText=`
      position: absolute;
      left: -9999px; /* Hide off-screen */
      top: 0;
      white-space: pre-wrap; /* Preserve whitespace */
    `;const r=window.getComputedStyle(e);n.style.font=r.font,n.style.padding=r.padding,n.style.border=r.border,n.style.letterSpacing=r.letterSpacing,n.style.textTransform=r.textTransform,document.body.appendChild(n);const o=e.value,a=e.selectionStart,i=o.substring(0,a);n.textContent=i;const h=n.offsetWidth,c=n.offsetHeight,s=e.getBoundingClientRect(),C=s.left+h,l=s.top+c;return document.body.removeChild(n),{x:C,y:l}}catch(n){return console.error("Error getting cursor position:",n),null}}function Rn(e){const[n,r]=y([]),o=l=>{Tn(e.textAreaEl,e.search,`${l?.username}:${l?.tag} `,e.content,e.updateContent)},[a,,,i]=Ct(()=>n().length,e.textAreaEl,l=>o(n()[l]));let h;const[c,s]=y({top:"0px",left:"0px",textAreaWidth:0}),C=async()=>{if(!e.search.trim()){r([]);return}const l=await it(e.search);i(0),r(l);const k=Bn(e.textAreaEl),P=e.textAreaEl?.getBoundingClientRect();k&&P&&s({top:`${k.y}px`,left:`${P.left}px`,textAreaWidth:P?.width})};return $(ue(()=>e.search,()=>{window.clearTimeout(h),h=window.setTimeout(C,500)})),t(f,{get when(){return n().length},get children(){return t(rt,{get children(){return t(R,{get class(){return b`
            background: var(--pane-color);
            position: absolute;
            margin-left: 10px;
            max-height: 200px;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 6px;
            border-radius: 6px;
            border: solid 1px rgba(255, 255, 255, 0.2);
            z-index: 11111111111111111111111111111111;
          `},get style(){return{...c(),"max-width":`${c().textAreaWidth-30}px`}},get children(){return t(H,{get each(){return n()},children:(l,k)=>t(Dn,{onHover:()=>i(k()),get selected(){return a()===k()},onClick:o,user:l})})}})}})}})}function Tn(e,n,r,o,a){const i=e.selectionStart,h=Ln(o,i-n.length,n.length),c=h.slice(0,i-n.length)+r+h.slice(i-n.length);a(c),e.focus(),e.selectionStart=i+(r.length-n.length),e.selectionEnd=i+(r.length-n.length)}function Ln(e,n,r){return e.substring(0,n)+e.substring(n+r)}const zn=q(B)`
  padding: 6px;
  &[data-selected="true"] {
    background: rgba(255, 255, 255, 0.08);
  }
  border-radius: 4px;
`;function Dn(e){let n;return $(()=>{e.selected&&n?.scrollIntoView({block:"nearest",inline:"nearest"})}),t(zn,{gap:6,itemsCenter:!0,get onmousemove(){return e.onHover},get"data-selected"(){return e.selected},onclick:()=>e.onClick(e.user),ref(r){var o=n;typeof o=="function"?o(r):n=r},get children(){return[t(ee,{get user(){return e.user},size:30}),(()=>{var r=pn();return u(r,()=>e.user.username),r})()]}})}function Mn(e){if(!e)return"";const n=e.selectionStart;return e.value.substring(0,n).split(/\s+/).reverse()[0]}const $n=e=>{const n=(r,o)=>{e.setOptions(r,o)};return t(R,{gap:6,style:{margin:"10px"},get children(){return[t(v,{get children(){return L("rR6WoS")}}),t(R,{gap:4,get children(){return t(tt,{get each(){return e.options},children:(r,o)=>t(Fn,{index:o,onText:a=>n(o,a),get value(){return r()},get showAddButton(){return D(()=>o===e.options.length-1)()&&e.options.length<=5},onAddClick:()=>e.setOptions([...e.options,""])})})}})]}})},Fn=e=>t(B,{itemsCenter:!0,gap:4,get children(){return[t(xe,{get placeholder(){return L("jEkFcZ",{number:e.index+1})},get value(){return e.value},maxLength:56,get onText(){return e.onText}}),t(f,{get when(){return e.showAddButton},get children(){return t(M,{margin:0,iconName:"add",get onClick(){return e.onAddClick}})}})]}}),Un=q(B)`
  align-items: center;
  margin: 10px;
`,On=b`
  aspect-ratio: 16/9;
  object-fit: contain;
  flex-shrink: 0;
  max-width: 50px;
  max-height: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 6px;
`;function Nn(e){const[n,r]=y(void 0);return $(async()=>{const o=await De(e.file);r(o)}),t(Un,{gap:6,get children(){return[t(N,{name:"attach_file",size:17,color:"var(--primary-color)"}),(()=>{var o=kn();return p(o,On),T(()=>st(o,"src",n())),o})(),t(v,{get children(){return e.file.name}}),t(B,{gap:4,get children(){return[t(M,{iconName:"brush",get onClick(){return e.onEditClick},iconSize:14,padding:5,margin:0}),t(M,{iconName:"close",get onClick(){return e.cancel},iconSize:14,padding:5,color:"var(--alert-color)",margin:0})]}})]}})}const Wn=q(R)`
  scroll-margin-top: 50px;
  padding: 10px;

  border-bottom: solid 1px rgba(255, 255, 255, 0.2);

  &:first-child {
    border-top: solid 1px rgba(255, 255, 255, 0.2);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }
`,Fe=q(B)`
  align-items: center;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  padding: 5px;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;function Hn(e){const[n,r]=y([]);return $(async()=>{const o=await Ke(e.postId);return r(o)}),t(R,{gap:3,get children(){return t(H,{get each(){return n()},children:o=>t(ie,{get href(){return G.PROFILE(o.likedBy.id)},get children(){return t(Fe,{gap:10,get children(){return[t(ee,{get user(){return o.likedBy},size:20}),t(B,{style:{"margin-right":"auto"},get children(){return[t(v,{get children(){return o.likedBy.username}}),t(v,{opacity:.6,get children(){return[":",D(()=>o.likedBy.tag)]}})]}}),t(v,{opacity:.6,size:12,get children(){return K(o.createdAt)}})]}})}})})}})}function Vn(e){const[n,r]=y([]),o=async()=>{const a=await et(e.postId);return r(a)};return $(()=>{o()}),t(R,{gap:3,get children(){return t(H,{get each(){return n()},children:a=>t(ie,{get href(){return G.PROFILE(a.createdBy.id)},get children(){return t(Fe,{gap:10,get children(){return[t(ee,{get user(){return a.createdBy},size:20}),t(B,{style:{"margin-right":"auto"},get children(){return[t(v,{get children(){return a.createdBy.username}}),t(v,{opacity:.6,get children(){return[":",D(()=>a.createdBy.tag)]}})]}}),t(v,{opacity:.6,size:12,get children(){return K(a.createdAt)}})]}})}})})}})}const Ue=q(R)`
  overflow: auto;
`;function jn(e){const[n,r]=y(!1),[o,a]=y("mostLiked7Days"),{posts:i}=Z(),[h,c]=y(0);let s;$(()=>{e.pinnedPosts?.length&&Je(()=>{for(let d=0;d<e.pinnedPosts.length;d++){const g=e.pinnedPosts[d];i.pushPost(g)}})});const C=ye(()=>e.pinnedPosts?.length?e.pinnedPosts.map(d=>i.cachedPost(d.id)).filter(d=>d):[]),l=()=>e.showDiscover?i.cachedDiscover():e.showFeed?k(i.cachedFeed()):e.showFeed?i.cachedFeed():e.userId?i.cachedUserPosts(e.userId):i.cachedPost(e.postId)?.cachedComments(),k=d=>{const g=[];return d.filter(I=>I.repost?.id?g.includes(I.repost?.id)?!1:(g.push(I.repost?.id),!0):!0)};$(async()=>{if(e.userId){if(e.showLiked)return i.fetchUserLikedPosts(e.userId);r(!0);const d=await i.fetchUserPosts(e.userId,e.showReplies);c(d?.length||0),r(!1)}});const P=async()=>{if(!e.showFeed)return;r(!0);const d=await i.fetchFeed();c(d?.length||0),r(!1)};let x;const S=async()=>{x&&x.abort(),x=new AbortController;const d=o();if(!e.showDiscover)return;r(!0);const g=await i.fetchDiscover(d,x.signal);c(g?.length||0),r(!1)},E=async()=>{if(!e.postId)return;r(!0);const d=await i.cachedPost(e.postId)?.loadComments();c(d?.length||0),r(!1)};$(ue([()=>e.postId,o],()=>{P(),S(),E()}));const j=()=>h()>=30,X=async()=>{if(n())return;r(!0);const d=await i.cachedPost(e.postId)?.loadMoreComments();c(d?.length||0),r(!1)},W=async()=>{if(n())return;r(!0);const d=await i.fetchMoreUserPosts(e.userId,e.showReplies);c(d?.length||0),r(!1)},J=async()=>{if(n())return;r(!0);const d=await i.fetchMoreFeed();c(d?.length||0),r(!1)},w=async()=>{if(n())return;r(!0);const d=await i.fetchMoreDiscover(o());c(d?.length||0),r(!1)},_=()=>{e.postId&&X(),e.userId&&W(),e.showFeed&&J(),e.showDiscover&&w()};return t(Ue,{gap:2,get style(){return e.style},get children(){return[t(f,{get when(){return D(()=>!!e.showCreateNew)()&&(!e.showDiscover||!o())},get children(){return t(Se,{get bgColor(){return e.bgColor},get primaryColor(){return e.primaryColor}})}}),t(f,{get when(){return e.postId},get children(){return t(Se,{get bgColor(){return e.bgColor},get primaryColor(){return e.primaryColor},get postId(){return e.postId}})}}),t(f,{get when(){return e.showDiscover},get children(){return t(_t,{get class(){return b`
            margin-left: 2px;
            margin-bottom: 6px;
          `},onChange:d=>a(d.id==="0"?void 0:d.id),get selectedId(){return o()||"0"},items:[{id:"0",label:"Latest"},{id:"mostLiked7Days",label:"Most Liked (7 days)"},{id:"mostLiked30days",label:"Most Liked (30 days)"},{id:"mostLikedAllTime",label:"Most Liked (All time)"}]})}}),t(R,{ref(d){var g=s;typeof g=="function"?g(d):s=d},get children(){return[t(H,{get each(){return C()},children:d=>t(te,{get bgColor(){return e.bgColor},post:d,pinned:!0,get primaryColor(){return e.primaryColor}})}),t(H,{get each(){return l()},children:(d,g)=>t(te,{get bgColor(){return e.bgColor},post:d,get showRepostsAsSelf(){return e.userId},get primaryColor(){return e.primaryColor}})}),t(f,{get when(){return j()||n()},get children(){return t(H,{get each(){return Array(10).fill(0)},children:()=>t(bt.Item,{get class(){return b`
                  && {
                    border-radius: 0;
                    border-top: solid 1px rgba(255, 255, 255, 0.2);
                  }
                `},onInView:()=>_(),height:"100px",width:"100%"})})}})]}})]}})}const Y=b`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function Yn(e){const{posts:n}=Z(),[,r]=de(),o=()=>{n.pushPost(e.notification.post);const s=()=>n.cachedPost(e.notification.post?.id);return t(B,{gap:6,onclick:()=>r({postId:e.notification.post?.id}),get children(){return[t(N,{get class(){return b`
            margin-top: -2px;
          `},name:"reply",color:"var(--primary-color)"}),t(R,{gap:2,class:Y,style:{width:"100%"},get children(){return t(te,{get post(){return s()},disableClick:!0,get class(){return b`
              && {
                margin: 0;
                padding: 0;
                background: none;
                &:hover {
                  background: none;
                }
                box-shadow: none;
                &::before {
                  border: none;
                }
                &:first-child {
                  border: none;
                }
              }
            `}})}})]}})},a=()=>{n.pushPost(e.notification.post);const s=()=>n.cachedPost(e.notification.post?.id);return t(B,{gap:6,onclick:()=>r({postId:e.notification.post?.id}),get children(){return[t(N,{get class(){return b`
            margin-top: 6px;
          `},name:"alternate_email",color:"var(--primary-color)"}),t(R,{gap:2,class:Y,style:{width:"100%"},get children(){return t(te,{get post(){return s()},disableClick:!0,get class(){return b`
              && {
                margin: 0;
                padding: 0;
                background: none;
                &:hover {
                  background: none;
                }
                box-shadow: none;
                &::before {
                  border: none;
                }
                &:first-child {
                  border: none;
                }
              }
            `}})}})]}})},i=()=>t(ce,{get href(){return G.PROFILE(e.notification.by.id)},style:{"text-decoration":"none"},get children(){return t(B,{gap:6,get children(){return[t(N,{get class(){return b`
              margin-top: 4px;
            `},name:"add_circle",color:"var(--primary-color)"}),t(ee,{get class(){return b`
              margin-left: 6px;
              margin-right: 6px;
            `},get user(){return e.notification.by},size:30}),t(B,{gap:6,style:{"align-items":"center"},class:Y,get children(){return[t(v,{size:14,class:Y,get children(){return t(fe,{key:"gyq/go",get options(){return{username:e.notification.by.username}},get children(){return[(()=>{var s=Ce();return p(s,Y),s})(),"followed you!"]}})}}),t(v,{opacity:.6,size:12,get children(){return K(e.notification.createdAt)}})]}})]}})}}),h=()=>{n.pushPost(e.notification.post);const s=()=>n.cachedPost(e.notification.post?.id);return t(B,{gap:6,onclick:()=>r({postId:e.notification.post?.id}),get children(){return[t(N,{get class(){return b`
            margin-top: 4px;
          `},name:"favorite",color:"var(--alert-color)"}),t(ce,{onclick:l=>l.stopPropagation(),get href(){return G.PROFILE(e.notification.by.id)},style:{"margin-left":"6px","margin-right":"6px"},get children(){return t(ee,{get user(){return e.notification.by},size:30})}}),t(R,{gap:2,style:{overflow:"hidden"},get children(){return[t(B,{gap:6,style:{"align-items":"center"},get children(){return[t(v,{size:14,class:Y,get children(){return t(fe,{key:"SRN07h",get options(){return{username:e.notification.by.username}},get children(){return[(()=>{var l=Ce();return p(l,Y),l})(),"liked your post!"]}})}}),t(v,{opacity:.6,size:12,get children(){return K(e.notification.createdAt)}})]}}),(()=>{var l=Ie();return u(l,t(f,{get when(){return!s()?.deleted},get children(){return t(le,{get text(){return s()?.content||""}})}}),null),u(l,t(f,{get when(){return s()?.deleted},get children(){return L("Jz5F8Y")}}),null),l})()]}})]}})},c=()=>{n.pushPost(e.notification.post);const s=()=>n.cachedPost(e.notification.post?.id);return t(B,{gap:6,onclick:()=>r({postId:e.notification.post?.id}),get children(){return[t(N,{get class(){return b`
            margin-top: 4px;
          `},name:"repeat",color:"var(--success-color)"}),t(ce,{onclick:l=>l.stopPropagation(),get href(){return G.PROFILE(e.notification.by.id)},style:{"margin-left":"6px","margin-right":"6px"},get children(){return t(ee,{get user(){return e.notification.by},size:30})}}),t(R,{gap:2,style:{overflow:"hidden"},get children(){return[t(B,{gap:6,style:{"align-items":"center"},get children(){return[t(v,{size:14,class:Y,get children(){return t(fe,{key:"kh1NkZ",get options(){return{username:e.notification.by.username}},get children(){return[(()=>{var l=Ce();return p(l,Y),l})(),"reposted your post!"]}})}}),t(v,{opacity:.6,size:12,get children(){return K(e.notification.createdAt)}})]}}),(()=>{var l=Ie();return u(l,t(f,{get when(){return!s()?.deleted},get children(){return t(le,{get text(){return s()?.content||""}})}}),null),u(l,t(f,{get when(){return s()?.deleted},get children(){return L("Jz5F8Y")}}),null),l})()]}})]}})};return t(Wn,{get children(){return[t(f,{get when(){return e.notification.type===oe.LIKED},get children(){return t(h,{})}}),t(f,{get when(){return e.notification.type===oe.FOLLOWED},get children(){return t(i,{})}}),t(f,{get when(){return e.notification.type===oe.REPLIED},get children(){return t(o,{})}}),t(f,{get when(){return e.notification.type===oe.REPOSTED},get children(){return t(c,{})}}),t(f,{get when(){return e.notification.type===oe.MENTIONED},get children(){return t(a,{})}})]}})}function vr(e){const[n,r]=y([]);return be(async()=>{const o=await at();r(o)}),t(Ue,{get style(){return e.style},get children(){return t(H,{get each(){return n()},children:o=>t(Yn,{notification:o})})}})}function xr(e){const[n,r]=de(),[o,a]=y("comments"),{paneWidth:i}=Be(),h=()=>n.postId,{posts:c}=Z(),s=()=>c.cachedPost(h()),[C,l]=y([]),k=()=>C().map(S=>c.cachedPost(S));$(ue(()=>n.postId,async S=>{l([]),a("comments"),S&&P(S)}));const P=async S=>{const E=await c.fetchAndPushPost(S);return E&&l([E.id,...C()]),E?.commentToId&&P(E.commentToId),E};return t(Xe,{close:()=>{r({postId:void 0})},title:"Post",get class(){return b`
        display: flex;
        flex-direction: column;
        width: 610px;
        max-height: 800px;
        height: calc(100% - 20px);
      `},get children(){return[t(Pt,{get children(){return D(()=>!!(!s()||s()?.deleted))()?"Post":`${s()?.createdBy.username}: ${s()?.content}`}}),t(R,{style:{overflow:"auto",height:"100%"},get children(){return t(f,{get when(){return s()},get children(){return[t(R,{get children(){return t(H,{get each(){return k()},children:S=>t(te,{showFullDate:!0,post:S})})}}),t(B,{gap:6,style:{"margin-top":"10px","margin-bottom":"10px"},get children(){return t(f,{get when(){return!s()?.block},get children(){return[t(me,{handlePosition:"bottom",get selected(){return o()==="comments"},style:{padding:"8px",gap:"4px"},onClick:()=>a("comments"),get children(){return[t(N,{size:14,name:"comment"}),t(v,{size:14,get color(){return o()==="comments"?"white":"rgba(255,255,255,0.6)"},get children(){return`Replies (${s()?._count?.comments})`}})]}}),t(me,{handlePosition:"bottom",get selected(){return o()==="likes"},style:{padding:"8px",gap:"4px"},onClick:()=>a("likes"),get children(){return[t(N,{size:14,name:"favorite"}),t(v,{size:14,get color(){return o()==="likes"?"white":"rgba(255,255,255,0.6)"},get children(){return`Likes (${s()?._count?.likedBy})`}})]}}),t(me,{handlePosition:"bottom",get selected(){return o()==="reposts"},style:{padding:"8px",gap:"4px"},onClick:()=>a("reposts"),get children(){return[t(N,{size:14,name:"repeat"}),t(v,{size:14,get color(){return o()==="reposts"?"white":"rgba(255,255,255,0.6)"},get children(){return`Reposts (${s()?._count?.reposts})`}})]}})]}})}}),t(Ae,{get children(){return[t(ne,{get when(){return o()==="comments"},get children(){return t(jn,{style:{overflow:"initial"},get postId(){return s()?.id}})}}),t(ne,{get when(){return o()==="likes"},get children(){return t(Hn,{get postId(){return s()?.id}})}}),t(ne,{get when(){return o()==="reposts"},get children(){return t(Vn,{get postId(){return s()?.id}})}})]}})]}})}})]}})}const Gn=b`
  pointer-events: none;
  border-radius: 8px;
  margin-top: 5px;

  && {
    &:before {
      border-bottom: none;
    }
    padding: 10px;
    border: solid 1px rgba(255, 255, 255, 0.1);
  }
`,qn=b`
  max-height: 800px;
  overflow: hidden;
`,Xn=b`
  overflow: auto;
  max-height: 600px;
`;function Jn(e){const n=()=>{e.close(),e.post.delete()},r=o=>{o.key==="Enter"&&(o.preventDefault(),n())};return be(()=>{document.addEventListener("keydown",r),ve(()=>{document.removeEventListener("keydown",r)})}),t(O.Root,{desktopMaxWidth:600,desktopMinWidth:400,get close(){return e.close},class:qn,get children(){return[t(O.Header,{title:"Delete Post?",icon:"delete",alert:!0}),t(O.Body,{class:Xn,get children(){return[t(v,{size:14,get children(){return L("c9Anm1")}}),t(te,{hideDelete:!0,class:Gn,get post(){return e.post}})]}}),t(O.Footer,{get children(){return[t(O.Button,{label:"Don't Delete",get onClick(){return e.close},iconName:"close"}),t(O.Button,{primary:!0,label:"Delete",onClick:n,iconName:"delete",color:"var(--alert-color)"})]}})]}})}const Kn=b`
  max-width: 600px;
  max-height: 600px;
  width: 100%;
  overflow: hidden;
`;function Qn(e){const[n,r]=y(e.post.content||""),o=Z(),[a,i]=y(),h=()=>Te(o.account.user()?.badges||0,Le.SUPPORTER.bit),c=()=>{const s=Me(n().trim());e.close(),e.post.editPost(s)};return t(O.Root,{get close(){return e.close},class:Kn,desktopMaxWidth:600,desktopMinWidth:400,get children(){return[t(O.Header,{title:"Edit Post",icon:"edit"}),t(O.Body,{get children(){return[t(ze,{showGifPicker:!0,get class(){return b`
            && {
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
              margin-bottom: 0;
            }
          `},get inputElement(){return a()},updateText:r}),t(xe,{ref:i,get maxLength(){return h()?1500:500},type:"textarea",minHeight:40,get class(){return b`
            div {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
              border-top: none;
              background-color: rgba(0, 0, 0, 0.6);
            }
          `},get value(){return n()},onText:r})]}}),t(O.Footer,{get children(){return[t(O.Button,{label:"Don't Edit",get onClick(){return e.close},iconName:"close",alert:!0}),t(O.Button,{label:"Edit",onClick:c,primary:!0,iconName:"edit"})]}})]}})}export{jn as P,xr as V,vr as a,te as b};
//# sourceMappingURL=PostsArea-CRsHU7Dh.js.map
