!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];return o?t&&"function"==typeof btoa?(e=function(e){return e=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),"/*# ".concat(e," */")}(o),t=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")})),[n].concat(t).concat([e]).join("\n")):[n].join("\n"):n}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){n(2),e.exports=n(5)},function(e,t,n){var o=n(3),r=n(4);n={insert:"head",singleton:!1};o(r="string"==typeof(r=r.__esModule?r.default:r)?[[e.i,r,""]]:r,n),e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r,i=(r={},function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],u=n[c]||0,d="".concat(c," ").concat(u);n[c]=u+1,u=s(d),i={css:i[1],media:i[2],sourceMap:i[3]},-1!==u?(a[u].references++,a[u].updater(i)):a.push({identifier:d,updater:function(e,t){var n,o,r,i;return r=t.singleton?(i=m++,n=p=p||l(t),o=f.bind(null,n,i,!1),f.bind(null,n,i,!0)):(n=l(t),o=function(e,t,n){var o=n.css,r=n.media;n=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,n,t),function(){!function(e){null!==e.parentNode&&e.parentNode.removeChild(e)}(n)}),o(e),function(t){t?t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap||o(e=t):r()}}(i,t),references:1}),o.push(d)}return o}function l(e){var t,o=document.createElement("style"),r=e.attributes||{};if(void 0!==r.nonce||(t=n.nc)&&(r.nonce=t),Object.keys(r).forEach((function(e){o.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(o);else{if(!(e=i(e.insert||"head")))throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}return o}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){n=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css,e.styleSheet?e.styleSheet.cssText=d(t,n):(o=document.createTextNode(n),(n=e.childNodes)[t]&&e.removeChild(n[t]),n.length?e.insertBefore(o,n[t]):e.appendChild(o))}var p=null,m=0;e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o=void 0===o?Boolean(window&&document&&document.all&&!window.atob):o);var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}e=c(e,t);for(var i=0;i<n.length;i++){var l=s(n[i]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=e}}}},function(e,t,n){"use strict";n.r(t);var o=n(0);(o=n.n(o)()(!1)).push([e.i,'.plus-icon{width:40px!important;height:40px!important;color:#fff}.widget-box{padding:10px;background:#add8e6;border-radius:50%;box-shadow:3px 3px 6px -3px #000;cursor:pointer;z-index:100000;left:0;margin:40px;opacity:.7}.plus-widget-continer{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-between;justify-content:space-between}.annoflow-tooltip{cursor:pointer;background:#000;padding:10px;border-radius:6px;color:#fff;position:relative;left:-20px}.annoflow-tooltip:before{content:" ";position:absolute;top:50%;right:100%;margin-top:-5px;border:5px solid transparent;border-right-color:#000}.annoflow-tooltip{-webkit-animation:myfirst 2s infinite;animation:myfirst 2s infinite;-webkit-animation-direction:alternate;animation-direction:alternate}@-webkit-keyframes myfirst{0%{left:-20px}50%{left:20px}to{left:-20px}}@keyframes myfirst{0%{left:-20px}50%{left:20px}to{left:-20px}}.widget-box:hover{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;opacity:1}-webkit-keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-3deg);transform:rotate(-3deg)}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none}}@-webkit-keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none}}@keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none}}.comment-box{box-shadow:3px 3px 15px -3px #000;width:300px;background:#fff;padding:10px;border-radius:10px;z-index:1000000000000}.comments-container{max-height:200px}.comment-box.left{right:0;top:0;position:absolute}.comment-box.left.up,.comment-box.up{right:0;position:absolute;top:-100px}.comment-box.right.up{left:0;position:absolute;top:-100px}.comment-container{border-bottom:solid;border-color:#add8e6;border-width:1px;padding:4px;margin:10px 0}.user-container{display:-webkit-flex;display:flex;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center}.user-name{opacity:.6}.profile-image{border-radius:50%}.name-comment{margin-left:10px;font-size:14px}.dialog-box{box-shadow:3px 3px 15px -3px #000;width:300px;background:#fff;padding:10px;border-radius:10px;z-index:1000000000000;position:relative;top:20px}.dialog-box.left{right:300px}.dialog-box.left.up{right:0;position:absolute;top:-200px}.dialog-box.right.up{left:0}.dialog-box.right.up,.dialog-box.up{position:absolute;top:-200px}.comments-container{max-height:300px;overflow:auto;margin-bottom:10px}.buttons-container{display:-webkit-flex;display:flex;-webkit-justify-content:flex-end;justify-content:flex-end}.submit-button{margin-top:10px;display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;color:#17a2b8;border:1px solid #17a2b8}.submit-button:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.submit-button[disabled]{opacity:.65}.cancel-button{margin-top:10px;display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;color:red;border:1px solid red}.cacel-button:hover{color:#fff;background-color:red;border-color:red}.comment-textarea{width:100%;max-width:300px;padding:8px;border-radius:5px;resize:vertical;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.comment-textarea:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgb(0 123 255/25%)}.buttons-box{-webkit-justify-content:space-between;justify-content:space-between}.App,.buttons-box{display:-webkit-flex;display:flex}.App{-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;justify-content:space-around;font-size:16px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}.dot{background-color:#add8e6;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;color:#000;font-size:13px;width:20px;height:20px;border-radius:17px;padding:4px;box-sizing:content-box}.dot:focus{background-color:red!important;transition:height .25s ease,width .25s ease;-webkit-transform:translate(0);transform:translate(0)}@-webkit-keyframes blinker{50%{opacity:0}}@keyframes blinker{50%{opacity:0}}.dot:focus:after,.dot:focus:before{content:"";display:block;position:absolute;top:0;right:0;bottom:0;left:0;border-radius:50%;border:1px solid red}.dot:focus:before{-webkit-animation:ripple 2s linear infinite;animation:ripple 2s linear infinite}.dot:focus:after{-webkit-animation:ripple 2s linear 1s infinite;animation:ripple 2s linear 1s infinite}@-webkit-keyframes ripple{0%{-webkit-transform:scale(1)}75%{-webkit-transform:scale(1.75);opacity:1}to{-webkit-transform:scale(2);opacity:0}}@keyframes ripple{0%{-webkit-transform:scale(1);transform:scale(1)}75%{-webkit-transform:scale(1.75);transform:scale(1.75);opacity:1}to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}',""]),t.default=o},function(e,t){(this["webpackJsonpdots-client"]=this["webpackJsonpdots-client"]||[]).push([[0],{31:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";function o(e){window.parent.postMessage(e,"*")}function r(e,t){E[e]?E[e].push(t):E[e]=[t]}function i(e,t){!E[e]||-1!==(t=(e=E[e]).indexOf(t))&&(e[t]=function(){})}function a(e){e.createADot;var t=e.handler,n=(e=Object(x.useState)(!1),(e=Object(N.a)(e,2))[0]),a=e[1],s=(e=Object(x.useState)(!1),(e=Object(N.a)(e,2))[0],e[1]);function c(e){window.document.getElementsByTagName("body")[0].style.cursor=e?"pointer":"default"}Object(x.useEffect)((function(){console.log("onUserInfoWidget"),r("userInfo",l)}),[]);var l=function e(t){i("userInfo",e),s("1"===t.returnUser)};return Object(_.jsxs)("div",{dir:"ltr",className:"plus-widget-continer",children:[Object(_.jsx)("div",{className:"widget-box",style:n?{background:"black"}:{},onClick:function(){if(s(!1),n)return window.removeEventListener("click",t,!0),function(){for(var e=window.document.getElementsByTagName("iframe"),t=0;t<e.length;t++)e[t].style.pointerEvents="all"}(),a(!1),c(!1),void o({type:"iframe-state"});(function(){for(var e=window.document.getElementsByTagName("iframe"),t=0;t<e.length;t++)e[t].style.pointerEvents="none"})(),c(!0),a(!0),o({type:"iframe-state"}),console.log("bind"),window.addEventListener("click",t,!0)},"data-widget":n,"data-tip":"hello world",children:Object(_.jsx)(I.a,{height:"40px",width:"40px",icon:S.a,className:"plus-icon","data-widget":n})}),!1]})}function s(e){e.changeAllDotsPosition;var t=e.reset,n=(e=Object(x.useState)(!1),(e=Object(N.a)(e,2))[0],e[1]);Object(x.useEffect)((function(){r("userInfo",a)}),[]);var a=function e(t){i("userInfo",e),n("1"===t.returnUser)};return Object(_.jsxs)("div",{dir:"ltr",className:"plus-widget-continer",children:[Object(_.jsx)("div",{className:"widget-box",onClick:function(){o("toggle"),n(!1),setTimeout((function(){t(!0)}),100)},children:Object(_.jsx)(I.a,{height:"40px",width:"40px",icon:S.b,className:"plus-icon"})}),!1]})}function c(e){var t=e.comments;e=e.openPos;return Object(_.jsx)("div",{className:"comment-box ".concat(e),children:Object(_.jsx)("div",{className:"comments-container",children:t&&t.map((function(e){return Object(_.jsx)(L,{content:e.content,author:e.author,color:e.color,authorImageUrl:e.authorImageUrl})}))})})}function l(e,t){M!==e&&(console.log("url change"),t(),M=e),setTimeout((function(){l(window.location.href,t)}),1e3)}function u(e,t){if(!e.target.getAttribute("data-widget"))return t(e),e.target.getAttribute("data-allow")||(e.stopPropagation(),e.preventDefault()),!1;window.document.removeEventListener("click",u)}function d(e){(e=window.document.getElementById(e.id))&&(B(!0),e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.focus(),setTimeout((function(){B(!1)}),500))}n.r(t);var f,p,m=n(11),b=n(4),h=n.n(b),g=n(6),x=n(1),w=n.n(x),v=n(7),y=n.n(v),j=(t=(n(31),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP;t=t.getTTFB;n(e),o(e),r(e),i(e),t(e)}))}),b=n(14),n.n(b)),k=(v=(p=Object(g.a)(h.a.mark((function e(t,n){var o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.url=window.location.pathname,e.next=3,j()({method:"post",url:"http://localhost:4000/public/dot/"+k(),data:n});case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)}))),function(e,t){return p.apply(this,arguments)}),b=(f=Object(g.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://localhost:4000/public/dots/"+k());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),function(e){return f.apply(this,arguments)}),function(){return new URLSearchParams(window.location.search).get("id")}),O={sendPostRequest:v,getDots:b},N=n(3),I=n(9),S=n(10),C=[],E={},_=n(0),T=(n(54),n(25)),L=(n(55),function(e){var t=e.content,n=e.author;e.color,e=e.authorImageUrl;return Object(_.jsx)("div",{className:"comment-container",children:Object(_.jsxs)("div",{className:"user-container",children:[Object(_.jsx)(T.a,{src:e||"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",className:"profile-image",width:"36px",height:"36px"}),Object(_.jsxs)("div",{className:"name-comment",children:[Object(_.jsx)("div",{className:"user-name",children:n}),Object(_.jsxs)("div",{className:"comment-text",children:[" ",t]})]})]})})}),U=(n(56),function(e){var t=e.onSubmit,n=void 0===(l=e.comments)?[]:l,o=e.submitCallback,r=e.onSubmitReturn,i=void 0===(c=e.authorName)?"Anonymous":c,a=void 0===(l=e.authorImageUrl)?"":l,s=e.onClose,c=e.openPos,l=Object(x.useState)(""),u=(e=Object(N.a)(l,2))[0],d=e[1];l=Object(x.useState)(!0),l=(e=Object(N.a)(l,2))[0];return e[1],Object(_.jsxs)("div",{className:"dialog-box ".concat(c),children:[Object(_.jsx)("div",{className:"comments-container",children:n&&n.map((function(e){return Object(_.jsx)(L,{content:null==e?void 0:e.content,author:null==e?void 0:e.authorName,color:null==e?void 0:e.color,authorImageUrl:null==e?void 0:e.authorImageUrl})}))}),l&&!n.length?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("textarea",{className:"comment-textarea",rows:"6",onChange:function(e){d(e.target.value)}}),Object(_.jsxs)("div",{className:"buttons-box",children:[Object(_.jsx)("div",{className:"submit-button",disabled:!u,onClick:function(){u&&(o([{content:u,authorName:i,authorImageUrl:a}]),t({comment:u,authorName:i,authorImageUrl:a},r))},"data-allow":"true",children:"Submit"}),Object(_.jsx)("div",{className:"cancel-button",disabled:!u,onClick:function(){s()},"data-allow":"true",children:"Cancel"})]})]}):null]})}),M="",B=function(){};function P(e){"http://localhost:3000"===e.origin&&"redirect"===e.data.type&&e.data.url&&window.location.pathname!==e.data.url&&(window.location.pathname=e.data.url)}function D(e){for(var t=e,n=0,o=0;null!==t;)o+=V(t),n+=J(t),t=t.offsetParent||t.parentNode;return{left:o,top:n}}function A(e){return e&&void 0!==e.offsetWidth?e.offsetWidth:0}function z(e){return e&&void 0!==e.offsetHeight?e.offsetHeight:0}function H(e){oe=e}function R(e){re()}function W(){G=!0}function F(e,t,n){var o="";return e+200>n.scrollWidth&&(o+=" left"),e-200<0&&(o+=" right"),t+200>n.scrollHeight&&(o+=" up"),t-200<0&&(o+=" down"),o}function X(e){var t,n,r,i,a,s,c;G&&(t=e.pageX,n=e.pageY,r=function(e){for(var t=e.path,n=((i=t[0]).offsetLeft,i.offsetTop,i.offsetHeight),o=i.offsetWidth,r=(e=(i.className,i.id),(i=function(){for(var e,n=t[0],o=0,r=0;null!==n;)r+=(e=n)&&void 0!==e.offsetLeft?e.offsetLeft:0,o+=(e=n)&&void 0!==e.offsetTop?e.offsetTop:0,n=n.offsetParent||n.parentNode;return{left:r,top:o}}()).left),i=i.top,a=1;a<t.length;)n=n||t[a].offsetHeight,o=o||t[a].offsetWidth,a++;return{offsetLeft:r,offsetTop:i,offsetHeight:n,offsetWidth:o,className:"",elementId:e}}(e),i=document.getElementsByTagName("body")[0],(a=document.createElement("DIV")).style.position="absolute",a.style.left=t+"px",a.style.top=n+"px",a.classList=["root-dot"],a.style.zIndex=1e5,i.appendChild(a),G=!1,c=Object(g.a)(h.a.mark((function a(s,c){var l;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return G=!0,a.next=3,O.sendPostRequest("",Object(m.a)(Object(m.a)(Object(m.a)({posX:t+"px",posY:n+"px"},r),s),{},{author:s.authorName,email:ee,path:function(e){for(var t=e.target,n="";t.parentNode;){for(var o=t.parentNode,r=o.children,i=0;i<r.length;i++)if(r[i]===t){n+=t.nodeName+"["+i+"]/";break}t=o}return n}(e),screenHeight:i.offsetHeight,screenWidth:i.offsetWidth}));case 3:l=a.sent,c(l),$.push(l),o("pull"),re();case 8:case"end":return a.stop()}}),a)}))),s=function(e,t){return c.apply(this,arguments)},y.a.render(Object(_.jsx)(w.a.StrictMode,{children:Object(_.jsx)(Z,{setShouldRender:se,disableClickEvent:ce,posX:t+"px",posY:n+"px",showBoxInit:!0,stickyDotInit:!1,onClose:W,dotNumber:$.length+1,children:Object(_.jsx)(U,{disableClickEvent:ce,onSubmit:s,dotId:"",authorName:K,authorImageUrl:Q,openPos:F(t,n,i)})})}),a))}setTimeout((function(){o({type:"iframe-ready"})}),1e3);var Y,q,V=function(e){return e&&void 0!==e.offsetLeft?e.offsetLeft:0},J=function(e){return e&&void 0!==e.offsetTop?e.offsetTop:0},Z=(n(57),function(e){function t(){f(!1)}var n=e.showBoxInit,r=e.dotId,i=(e.url,e.stickyDotInit),a=e.children,s=e.onClose,c=e.comments,l=e.hideOnMouseLeave,u=(e.status,e.dotNumber),d=Object(x.useState)(n),f=(n=(e=Object(N.a)(d,2))[0],e[1]),p=(d=Object(x.useState)(i),i=(e=Object(N.a)(d,2))[0],e[1]),m=(d=Object(x.useState)(""),(e=Object(N.a)(d,2))[0]),b=e[1],h=(d=Object(x.useState)(!1),(e=Object(N.a)(d,2))[0]),g=e[1],v=(d=Object(x.useState)(c),c=(e=Object(N.a)(d,2))[0],e[1]),y=(d=Object(x.useState)(""),d=(e=Object(N.a)(d,2))[0],e[1]);e=Object(x.useRef)(null),c=w.a.cloneElement(a,{submitCallback:function(e){v(e),p(!0),f(!1),g(!0)},onSubmitReturn:function(e){b(e._id)},onClose:function(){s(),t(),p(!1)},comments:c});return Object(_.jsxs)("div",{className:"App",ref:e,onMouseLeave:function(e){(l||h)&&(s(),t(),e.target.closest(".root-dot").style.zIndex=1e5)},tabindex:"0",dir:"ltr",onFocus:function(){y("focus")},children:[i?Object(_.jsx)("div",{className:"dot "+d,onMouseOver:function(e){return e=e,o({id:r}),e.target.closest(".root-dot").style.zIndex=2e5,void f(!0)},tabindex:"0",id:"".concat(r||m),onClick:function(e){o({type:"openDot",id:r||m})},children:u}):null,n?c:null]})}),G=!0,K="Anonymous",Q="",$=[],ee="",te="active",ne=null,oe=!1,re=(q=Object(g.a)(h.a.mark((function e(t){var n,o,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=window.document.getElementsByClassName("root-dot");0<o.length;)(r=o[0]).remove?r.remove():r.parentNode.removeChild(r);if(!t){e.next=6;break}n=$,e.next=10;break;case 6:return e.next=8,O.getDots();case 8:n=e.sent,$=n;case 10:ie(n);case 11:case"end":return e.stop()}}),e)}))),function(e){return q.apply(this,arguments)}),ie=(v=(Y=Object(g.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.document.addEventListener("DOMContentLoaded",Object(g.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r("userInfo",ue),r("reset",R),B=H,r("on-dot",d),window.addEventListener("message",P,!1),M=window.location.href,l(window.location.href,re),e.next=7,O.getDots();case 7:t=e.sent,function(){var e=document.getElementsByTagName("body")[0],t=document.createElement("DIV");t.style.position="fixed",t.style.zIndex=1e5,t.style.left=0,t.style.top="50px",e.appendChild(t),y.a.render(Object(_.jsx)(w.a.StrictMode,{children:Object(_.jsx)(a,{createADot:X,handler:function(e){u(e,X)}})}),t),(t=document.createElement("DIV")).style.position="fixed",t.style.zIndex=1e5,t.style.left=0,t.style.top="150px",e.appendChild(t),y.a.render(Object(_.jsx)(w.a.StrictMode,{children:Object(_.jsx)(s,{createADot:X,handler:function(e){u(e,X)},reset:re,returnUser:ne})}),t)}(),ie($=t);case 11:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)}))),function(){return Y.apply(this,arguments)}),function(e){for(var t=0;t<e.length;t++){var n=e[t];ae(n)}}),ae=function(e){var t,n,r,i,a,s,l,u,d,f;e.url===window.location.pathname&&(t=e.posX,n=e.posY,r=e.comments,i=e._id,a=e.url,s=e.status,l=e.dotNumber,u=document.getElementsByTagName("body")[0],(d=document.createElement("div")).style.position="absolute",d.style.zIndex=1e5,(f=function(e){try{var t=e.path,n=0,o=0,r=0,i=0;if(!t)return;for(var a=t.split("/").reverse(),s=document.getElementsByTagName("body")[0],c=(f=0,(d=a).map((function(e,t){"BODY"===e.split("[")[0]&&(f=t)})),d.splice(f+1)),l=0;l<c.length;l++)s=s.children[(u=c[l]).substring(u.lastIndexOf("[")+1,u.lastIndexOf("]"))],n+=V(s),o=A(s)?A(s):o,i=z(s)?z(s):i,r+=J(s);return{currentNode:s,offsetLeft:n,offsetWidth:o,offsetTop:r,offsetHeight:i}}catch(e){return!1}var u,d,f}(e))||o({id:i,type:"unSurePos"}),d.style.left=f?function(e,t){try{var n=D(t.currentNode),o=(Number(e.posX.split("p")[0])-e.offsetLeft)/e.offsetWidth,r=t.currentNode.offsetWidth||t.offsetWidth;return n.left+r*o+"px"}catch(t){return Number(e.posX.split("p")[0])}}(e,f):t,d.style.top=f?function(e,t){try{var n=D(t.currentNode),o=(Number(e.posY.split("p")[0])-e.offsetTop)/e.offsetHeight,r=t.currentNode.offsetHeight||t.offsetHeight;return n.top+r*o+"px"}catch(t){return Number(e.posY.split("p")[0])}}(e,f):n,d.classList=["root-dot","dot-"+l].join(" "),u.appendChild(d),y.a.render(Object(_.jsx)(w.a.StrictMode,{children:Object(_.jsx)(Z,{setShouldRender:se,disableClickEvent:ce,posX:t,posY:n,showBoxInit:!1,stickyDotInit:"resolved"!==s&&"resolved"!==te||te===s,comments:r,dotId:i,url:a,onClose:W,status:s,hideOnMouseLeave:!0,dotNumber:l,children:Object(_.jsx)(c,{comments:r,openPos:F(Number(e.posX.split("p")[0]),Number(e.posY.split("p")[0]),u)})})}),d))},se=function(e){G=e};t();var ce=function(){window.document.removeEventListener("click",le)},le=function(e){u(e,X)},ue=function(e){K=e.name,Q=e.authorImageUrl,ee=e.email,ne=e.returnUser};function de(){re(!0)}v(),t();var fe,pe,me,be,he=!(window.onscroll=function(){ge(de,500)}),ge=function(e,t){he||!G||oe||(he=!0,setTimeout((function(){e(),he=!1}),t))};window.addEventListener("message",(function(e){"http://localhost:3000"===e.origin&&(C="on-dot"===e.data.type?C.filter((function(e){return"on-dot"!==e.type})):C).push({type:e.data.type,data:e.data})}),!1),setInterval((function(){C.forEach((function(e){var t=e.type,n=e.data;(E[t]||[]).forEach((function(e){e(n)}))})),C=[]}),700),r("status-change",(function(e){e&&e.status&&(te=e.status)})),r("reset-from-store",de),window._fs_run_in_iframe=!0,window._fs_debug=!1,window._fs_host="fullstory.com",window._fs_script="edge.fullstory.com/s/fs.js",window._fs_org="13B8FZ",window._fs_namespace="FS",b=window,v=document,t=window._fs_namespace,fe="user",t in b?b.console&&b.console.log&&b.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'):((me=b[t]=function(e,t,n){me.q?me.q.push([e,t,n]):me._api(e,t,n)}).q=[],(pe=v.createElement("script")).async=1,pe.crossOrigin="anonymous",pe.src="https://"+window._fs_script,(be=v.getElementsByTagName("script")[0]).parentNode.insertBefore(pe,be),me.identify=function(e,t,n){me(fe,{uid:e},n),t&&me(fe,t,n)},me.setUserVars=function(e,t){me(fe,e,t)},me.event=function(e,t,n){me("event",{n:e,p:t},n)},me.anonymize=function(){me.identify(!1)},me.shutdown=function(){me("rec",!1)},me.restart=function(){me("rec",!0)},me.log=function(e,t){me("log",[e,t])},me.consent=function(e){me("consent",!arguments.length||e)},me.identifyAccount=function(e,t){pe="account",(t=t||{}).acctId=e,me(pe,t)},me.clearUserCookie=function(){},me.setVars=function(e,t){me("setVars",[e,t])},me._w={},be="XMLHttpRequest",me._w[be]=b[be],be="fetch",me._w[be]=b[be],b[be]&&(b[be]=function(){return me._w[be].apply(this,arguments)}),me._v="1.3.0")}},[[58,1,2]]])}]);