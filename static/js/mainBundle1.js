!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];return o?t&&"function"==typeof btoa?(e=function(e){return e=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),"/*# ".concat(e," */")}(o),t=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")})),[n].concat(t).concat([e]).join("\n")):[n].join("\n"):n}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){n(2),e.exports=n(5)},function(e,t,n){var o=n(3),r=n(4);n={insert:"head",singleton:!1};o(r="string"==typeof(r=r.__esModule?r.default:r)?[[e.i,r,""]]:r,n),e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r,a=(r={},function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],s=t.base?a[0]+t.base:a[0],u=n[s]||0,d="".concat(s," ").concat(u);n[s]=u+1,u=c(d),a={css:a[1],media:a[2],sourceMap:a[3]},-1!==u?(i[u].references++,i[u].updater(a)):i.push({identifier:d,updater:function(e,t){var n,o,r,a;return r=t.singleton?(a=m++,n=p=p||l(t),o=f.bind(null,n,a,!1),f.bind(null,n,a,!0)):(n=l(t),o=function(e,t,n){var o=n.css,r=n.media;n=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,n,t),function(){!function(e){null!==e.parentNode&&e.parentNode.removeChild(e)}(n)}),o(e),function(t){t?t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap||o(e=t):r()}}(a,t),references:1}),o.push(d)}return o}function l(e){var t,o=document.createElement("style"),r=e.attributes||{};if(void 0!==r.nonce||(t=n.nc)&&(r.nonce=t),Object.keys(r).forEach((function(e){o.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(o);else{if(!(e=a(e.insert||"head")))throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}return o}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){n=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css,e.styleSheet?e.styleSheet.cssText=d(t,n):(o=document.createTextNode(n),(n=e.childNodes)[t]&&e.removeChild(n[t]),n.length?e.insertBefore(o,n[t]):e.appendChild(o))}var p=null,m=0;e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o=void 0===o?Boolean(window&&document&&document.all&&!window.atob):o);var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}e=s(e,t);for(var a=0;a<n.length;a++){var l=c(n[a]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=e}}}},function(e,t,n){"use strict";n.r(t);var o=n(0);(o=n.n(o)()(!1)).push([e.i,'.plus-icon{width:40px!important;height:40px!important;color:#fff}.widget-box{position:fixed;padding:10px;background:#add8e6;border-radius:50%;box-shadow:3px 3px 15px -3px #000;cursor:pointer;z-index:100000;left:0;margin:40px}.widget-box:hover{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:rotateIn;animation-name:rotateIn}-webkit-keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none}}@-webkit-keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none}}@keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none}}.comment-container{border-bottom:solid;border-color:#add8e6;border-width:1px;padding:4px;margin:10px 0}.user-container{display:-webkit-flex;display:flex;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center}.user-name{text-transform:capitalize;opacity:.6}.profile-image{border-radius:50%}.name-comment{margin-left:10px;font-size:14px}.dialog-box{box-shadow:3px 3px 15px -3px #000;width:300px;background:#fff;padding:10px;border-radius:10px;z-index:1000000000000;position:relative;top:20px}.comments-container{max-height:300px;overflow:auto;margin-bottom:10px}.buttons-container{display:-webkit-flex;display:flex;-webkit-justify-content:flex-end;justify-content:flex-end}.submit-button{margin-top:10px;display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;color:#17a2b8;border:1px solid #17a2b8}.submit-button:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.submit-button[disabled]{opacity:.65}.cancel-button{margin-top:10px;display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;color:red;border:1px solid red}.cacel-button:hover{color:#fff;background-color:red;border-color:red}.comment-textarea{width:100%;max-width:280px;padding:8px;border-radius:5px;resize:vertical;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.comment-textarea:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgb(0 123 255/25%)}.buttons-box{-webkit-justify-content:space-between;justify-content:space-between}.App,.buttons-box{display:-webkit-flex;display:flex}.App{-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;justify-content:space-around;font-size:16px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}.dot{background-color:#add8e6;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;color:#000;font-size:13px;width:20px;height:20px;border-radius:10px}.dot:focus{background-color:red!important}@-webkit-keyframes blinker{50%{opacity:0}}@keyframes blinker{50%{opacity:0}}',""]),t.default=o},function(e,t){(this["webpackJsonpdots-client"]=this["webpackJsonpdots-client"]||[]).push([[0],{31:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";function o(e){e.createADot;var t=e.handler,n=(e=Object(N.useState)(!1),(e=Object(M.a)(e,2))[0]),o=e[1];return Object(B.jsx)("div",{className:"widget-box",style:n?{background:"black"}:{},onClick:function(){if(n)return window.removeEventListener("click",t,!0),function(){for(var e=window.document.getElementsByTagName("iframe"),t=0;t<e.length;t++)e[t].style.pointerEvents="all"}(),void o(!1);(function(){for(var e=window.document.getElementsByTagName("iframe"),t=0;t<e.length;t++)e[t].style.pointerEvents="none"})(),o(!0),console.log("bind"),window.addEventListener("click",t,!0)},"data-widget":n,children:Object(B.jsx)(D.a,{height:"40px",width:"40px",icon:U.a,className:"plus-icon","data-widget":n})})}function r(e){window.addEventListener("message",e,!1)}function a(e){window.parent.postMessage(e,"*")}function i(e){e.changeAllDotsPosition;var t=e.reset,n=(e=Object(N.useState)("false"),(e=Object(M.a)(e,2))[0],e[1]);return Object(B.jsx)("div",{className:"widget-box",onClick:function(){a("toggle"),t(),n((function(e){return!e}))},children:Object(B.jsx)(D.a,{height:"40px",width:"40px",icon:U.b,className:"plus-icon"})})}function c(e){return e=e.comments,Object(B.jsx)("div",{className:"dialog-box",children:Object(B.jsx)("div",{className:"comments-container",children:e&&e.map((function(e){return Object(B.jsx)(R,{content:e.content,author:e.author,color:e.color,authorImageUrl:e.authorImageUrl})}))})})}function s(e,t){P!==e&&(console.log("url change"),t(),P=e),setTimeout((function(){s(window.location.href,t)}),1e3)}function l(e,t){if(!e.target.getAttribute("data-widget"))return t(e),e.target.getAttribute("data-allow")||(e.stopPropagation(),e.preventDefault()),!1;window.document.removeEventListener("click",l)}function u(e){var t;console.log(e.origin,"http://localhost:3000"),"http://localhost:3000"===e.origin&&void 0===e.data.type&&(t=window.document.getElementById(e.data.id))&&(t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),t.focus())}function d(e){"http://localhost:3000"===e.origin&&"redirect"===e.data.type&&e.data.url&&window.location.pathname!==e.data.url&&(window.location.pathname=e.data.url)}function f(e){for(var t=e,n=0,o=0;null!==t;)o+=t.offsetLeft,n+=t.offsetTop,t=t.offsetParent;return{left:o,top:n}}function p(e){"reset"===e.data.type&&(console.log("123",e),X())}function m(){F=!0}function b(e){var t,n,o,r,i,c;F&&(t=e.pageX,n=e.pageY,o=function(e){for(var t,n=e.path,o=((t=n[0]).offsetLeft,t.offsetTop,t.offsetHeight),r=t.offsetWidth,a=t.className,i=(e=t.id,(t=function(){for(var e=n[0],t=0,o=0;null!==e;)o+=e.offsetLeft,t+=e.offsetTop,e=e.offsetParent;return{left:o,top:t}}()).left),c=t.top,s=1;s<n.length;)o=o||n[s].offsetHeight,r=r||n[s].offsetWidth,s++;return{offsetLeft:i,offsetTop:c,offsetHeight:o,offsetWidth:r,className:a,elementId:e}}(e),i=document.getElementsByTagName("body")[0],(r=document.createElement("DIV")).style.position="absolute",r.style.left=t+"px",r.style.top=n+"px",r.classList=["root-dot"],r.style.zIndex=1e5,i.appendChild(r),F=!1,c=Object(O.a)(k.a.mark((function r(i,c){var s;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return F=!0,r.next=3,T.sendPostRequest("",Object(j.a)(Object(j.a)(Object(j.a)({posX:t+"px",posY:n+"px"},o),i),{},{author:i.authorName,path:function(e){for(var t=e.target,n="";t.parentNode;){for(var o=t.parentNode,r=o.children,a=0;a<r.length;a++)if(r[a]===t){n+=t.nodeName+"["+a+"]/";break}t=o}return n}(e)}));case 3:s=r.sent,c(s),Y.push(s),a("pull");case 7:case"end":return r.stop()}}),r)}))),i=function(e,t){return c.apply(this,arguments)},C.a.render(Object(B.jsx)(I.a.StrictMode,{children:Object(B.jsx)(_,{setShouldRender:q,disableClickEvent:G,posX:t+"px",posY:n+"px",showBoxInit:!0,stickyDotInit:!1,onClose:m,dotNumber:Y.length,children:Object(B.jsx)(z,{disableClickEvent:G,onSubmit:i,dotId:"",authorName:H,authorImageUrl:W})})}),r))}n.r(t);var h,g,x,v,w,j=n(11),y=n(3),k=n.n(y),O=n(6),N=n(1),I=n.n(N),S=n(7),C=n.n(S),E=(t=(n(31),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP;t=t.getTTFB;n(e),o(e),r(e),a(e),t(e)}))}),y=n(14),n.n(y)),L=(S=(w=Object(O.a)(k.a.mark((function e(t,n){var o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.url=window.location.pathname,console.log(n),e.next=4,E()({method:"post",url:"http://localhost:4000/public/dot/"+L(),data:n});case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)}))),function(e,t){return w.apply(this,arguments)}),y=(v=Object(O.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("http://localhost:4000/public/dots/"+L());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),function(e){return v.apply(this,arguments)}),function(){return new URLSearchParams(window.location.search).get("id")}),T={sendPostRequest:S,getDots:y},M=n(4),D=n(9),U=n(10),B=n(0),A=(n(54),n(25)),R=(n(55),function(e){var t=e.content,n=e.author;e.color,e=e.authorImageUrl;return Object(B.jsx)("div",{className:"comment-container",children:Object(B.jsxs)("div",{className:"user-container",children:[Object(B.jsx)(A.a,{src:e||"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",className:"profile-image",width:"36px",height:"36px"}),Object(B.jsxs)("div",{className:"name-comment",children:[Object(B.jsx)("div",{className:"user-name",children:n}),Object(B.jsxs)("div",{className:"comment-text",children:[" ",t]})]})]})})}),z=(n(56),function(e){var t=e.onSubmit,n=void 0===(s=e.comments)?[]:s,o=e.submitCallback,r=e.onSubmitReturn,a=void 0===(s=e.authorName)?"Anonymouse":s,i=void 0===(s=e.authorImageUrl)?"":s,c=e.onClose,s=Object(N.useState)(""),l=(e=Object(M.a)(s,2))[0],u=e[1];s=Object(N.useState)(!0),s=(e=Object(M.a)(s,2))[0];return e[1],Object(B.jsxs)("div",{className:"dialog-box",children:[Object(B.jsx)("div",{className:"comments-container",children:n&&n.map((function(e){return Object(B.jsx)(R,{content:null==e?void 0:e.content,author:null==e?void 0:e.authorName,color:null==e?void 0:e.color,authorImageUrl:null==e?void 0:e.authorImageUrl})}))}),s&&!n.length?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("textarea",{className:"comment-textarea",rows:"6",onChange:function(e){u(e.target.value)}}),Object(B.jsxs)("div",{className:"buttons-box",children:[Object(B.jsx)("div",{className:"submit-button",disabled:!l,onClick:function(){l&&(o([{content:l,authorName:a,authorImageUrl:i}]),t({comment:l,authorName:a,authorImageUrl:i},r))},"data-allow":"true",children:"Submit"}),Object(B.jsx)("div",{className:"cancel-button",disabled:!l,onClick:function(){console.log("dadas"),c()},"data-allow":"true",children:"Cancel"})]})]}):null]})}),P="",_=(n(57),function(e){var t=e.showBoxInit,n=e.dotId,o=(e.url,e.stickyDotInit),i=e.children,c=e.onClose,s=e.comments,l=e.hideOnMouseLeave,u=void 0===(f=e.status)?"active":f,d=e.dotNumber,f=Object(N.useState)(t),p=(t=(e=Object(M.a)(f,2))[0],e[1]),m=(f=Object(N.useState)(o),o=(e=Object(M.a)(f,2))[0],e[1]),b=(f=Object(N.useState)(""),(e=Object(M.a)(f,2))[0]),h=e[1],g=(f=Object(N.useState)(!1),(e=Object(M.a)(f,2))[0]),x=e[1],v=(f=Object(N.useState)(s),s=(e=Object(M.a)(f,2))[0],e[1]),w=(f=Object(N.useState)(""),f=(e=Object(M.a)(f,2))[0],e[1]);e=Object(N.useRef)(null);function j(){p(!1)}Object(N.useEffect)((function(){return r(y),function(){window.removeEventListener("message",y)}}),[]);var y=function(e){(e=e.data)&&e.status&&("all"===e.status||e.status===u?m(!0):m(!1))};s=I.a.cloneElement(i,{submitCallback:function(e){v(e),m(!0),p(!1),x(!0)},onSubmitReturn:function(e){h(e._id)},onClose:function(){c(),j(),m(!1)},comments:s});return Object(B.jsxs)("div",{className:"App",ref:e,onMouseLeave:function(){(l||g)&&(c(),j())},tabindex:"0",dir:"ltr",onFocus:function(){w("focus")},children:[o?Object(B.jsx)("div",{className:"dot "+f,onMouseOver:function(e){return e=e,a({id:n}),e.target.closest(".root-dot").style.zIndex=2e5,void p(!0)},tabindex:"0",id:n||b,onClick:function(e){a({type:"openDot",id:n||b})},children:d}):null,t?s:null]})}),F=!0,H="",W="",Y=[],X=(x=Object(O.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout(Object(O.a)(k.a.mark((function e(){var o,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=window.document.getElementsByClassName("root-dot"),r=0;r<o.length;r++)o[r].innerHTML="";if(!t){e.next=6;break}n=Y,e.next=10;break;case 6:return e.next=8,T.getDots();case 8:n=e.sent,Y=n;case 10:return e.next=12,J(n);case 12:case"end":return e.stop()}}),e)}))),100);case 1:case"end":return e.stop()}}),e)}))),function(e){return x.apply(this,arguments)}),J=(y=(g=Object(O.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.document.addEventListener("DOMContentLoaded",Object(O.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(Q),r(p),r(u),r(d),P=window.location.href,s(window.location.href,X),function(){var e=document.getElementsByTagName("body")[0],t=document.createElement("DIV");t.style.position="fixed",t.style.zIndex=1e5,t.style.left=0,t.style.top="50px",e.appendChild(t),C.a.render(Object(B.jsx)(I.a.StrictMode,{children:Object(B.jsx)(o,{createADot:b,handler:function(e){l(e,b)}})}),t),(t=document.createElement("DIV")).style.position="fixed",t.style.zIndex=1e5,t.style.right=0,t.style.top="150px",e.appendChild(t),C.a.render(Object(B.jsx)(I.a.StrictMode,{children:Object(B.jsx)(i,{createADot:b,handler:function(e){l(e,b)},reset:X})}),t)}(),e.next=8,T.getDots();case 8:t=e.sent,J(Y=t);case 11:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)}))),function(){return g.apply(this,arguments)}),h=Object(O.a)(k.a.mark((function e(t){var n,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(console.log("dots",t),n=0;n<t.length;n++)o=t[n],V(o);case 2:case"end":return e.stop()}}),e)}))),function(e){return h.apply(this,arguments)}),V=function(e){var t,n,o,r,a,i,s,l,u,d,p,b,h;e.url===window.location.pathname&&(t=e.posX,n=e.posY,o=e.comments,r=e._id,a=e.url,i=e.status,s=e.dotNumber,l=document.getElementsByTagName("body")[0],(u=document.createElement("div")).style.position="absolute",u.style.zIndex=1e5,d=function(e){var t,n,o=0,r=0,a=0;if(e=e.path){e=e.split("/").reverse();for(var i=document.getElementsByTagName("body")[0],c=(n=0,(e=e).map((function(e,t){"BODY"===e.split("[")[0]&&(n=t)})),e.splice(n+1)),s=0;s<c.length;s++)o+=(i=i.children[(t=c[s]).substring(t.lastIndexOf("[")+1,t.lastIndexOf("]"))]).offsetLeft,r+=i.offsetWidth,a+=i.offsetTop;return{currentNode:i,offsetLeft:o,offsetWidth:r,offsetTop:a}}}(e),u.style.left=(p=e,h=f((b=d).currentNode),p=(Number(p.posX.split("p")[0])-p.offsetLeft)/p.offsetWidth,h.left+b.currentNode.offsetWidth*p+"px"),u.style.top=(p=e,d=f((e=d).currentNode),p=(Number(p.posY.split("p")[0])-p.offsetTop)/p.offsetHeight,d.top+e.currentNode.offsetHeight*p+"px"),u.classList=["root-dot"],l.appendChild(u),C.a.render(Object(B.jsx)(I.a.StrictMode,{children:Object(B.jsx)(_,{setShouldRender:q,disableClickEvent:G,posX:t,posY:n,showBoxInit:!1,stickyDotInit:!0,comments:o,dotId:r,url:a,onClose:m,status:i,hideOnMouseLeave:!0,dotNumber:s,children:Object(B.jsx)(c,{comments:o})})}),u))},q=function(e){F=e};t();var G=function(){window.document.removeEventListener("click",K)},K=function(e){l(e,b)},Q=function(e){"userInfo"===e.data.type&&(H=e.data.name,W=e.data.authorImageUrl)};y(),t();var Z=!(window.onscroll=function(){$((function(){X(!0)}),500)}),$=function(e,t){Z||(Z=!0,setTimeout((function(){e(),Z=!1}),t))}}},[[58,1,2]]])}]);