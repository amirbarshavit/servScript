!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];return o?t&&"function"==typeof btoa?(e=function(e){return e=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),"/*# ".concat(e," */")}(o),t=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")})),[n].concat(t).concat([e]).join("\n")):[n].join("\n"):n}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){n(2),e.exports=n(5)},function(e,t,n){var o=n(3),r=n(4);n={insert:"head",singleton:!1};o(r="string"==typeof(r=r.__esModule?r.default:r)?[[e.i,r,""]]:r,n),e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r,a=(r={},function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],s=t.base?a[0]+t.base:a[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1,l=c(d),a={css:a[1],media:a[2],sourceMap:a[3]},-1!==l?(i[l].references++,i[l].updater(a)):i.push({identifier:d,updater:function(e,t){var n,o,r,a;return r=t.singleton?(a=m++,n=p=p||u(t),o=f.bind(null,n,a,!1),f.bind(null,n,a,!0)):(n=u(t),o=function(e,t,n){var o=n.css,r=n.media;n=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,n,t),function(){!function(e){null!==e.parentNode&&e.parentNode.removeChild(e)}(n)}),o(e),function(t){t?t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap||o(e=t):r()}}(a,t),references:1}),o.push(d)}return o}function u(e){var t,o=document.createElement("style"),r=e.attributes||{};if(void 0!==r.nonce||(t=n.nc)&&(r.nonce=t),Object.keys(r).forEach((function(e){o.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(o);else{if(!(e=a(e.insert||"head")))throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}return o}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,o){n=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css,e.styleSheet?e.styleSheet.cssText=d(t,n):(o=document.createTextNode(n),(n=e.childNodes)[t]&&e.removeChild(n[t]),n.length?e.insertBefore(o,n[t]):e.appendChild(o))}var p=null,m=0;e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o=void 0===o?Boolean(window&&document&&document.all&&!window.atob):o);var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}e=s(e,t);for(var a=0;a<n.length;a++){var u=c(n[a]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=e}}}},function(e,t,n){"use strict";n.r(t);var o=n(0);(o=n.n(o)()(!1)).push([e.i,".plus-icon{width:40px!important;height:40px!important;color:#fff}.widget-box{position:fixed;padding:10px;background:#add8e6;width:60px;border-radius:50%;box-shadow:3px 3px 15px -3px #000;cursor:pointer;z-index:100000;right:0;margin:40px}.widget-box:hover{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:rotateIn;animation-name:rotateIn}-webkit-keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none}}@-webkit-keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none}}@keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none}}.comment-text{background:#add8e6;border-radius:6px;padding:4px;text-align:center}.comment-container{border:1px solid #add8e6;padding:4px;margin:10px 0}.user-container{height:50px;display:-webkit-flex;display:flex;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center}.user-name{margin-left:10px;text-transform:capitalize}.profile-image{border-radius:50%}.dialog-box{box-shadow:3px 3px 15px -3px #000;width:300px;background:#fff;padding:10px;border-radius:10px;z-index:1000000000000;position:relative;right:160px;top:20px}.comments-container{max-height:300px;overflow:auto;margin-bottom:10px}.buttons-container{display:-webkit-flex;display:flex;-webkit-justify-content:flex-end;justify-content:flex-end}.submit-button{margin-top:10px;display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;color:#17a2b8;border:1px solid #17a2b8}.submit-button:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.submit-button[disabled]{opacity:.65}.comment-textarea{width:100%;padding:8px;border-radius:5px;resize:vertical;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.comment-textarea:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgb(0 123 255/25%)}.App{-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;justify-content:space-around}.App,.dot{display:-webkit-flex;display:flex}.dot{background-color:#add8e6;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;font-size:calc(10px + 2vmin);color:#fff;width:20px;height:20px;border-radius:10px}.dot:focus{background-color:red!important}.dot{-webkit-animation:blinker 2s linear infinite;animation:blinker 2s linear infinite}@-webkit-keyframes blinker{50%{opacity:0}}@keyframes blinker{50%{opacity:0}}",""]),t.default=o},function(e,t){(this["webpackJsonpdots-client"]=this["webpackJsonpdots-client"]||[]).push([[0],{31:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";function o(e){e.createADot;var t=e.handler,n=(e=Object(w.useState)(!1),(e=Object(S.a)(e,2))[0]),o=e[1];return Object(L.jsx)("div",{className:"widget-box",style:n?{background:"black"}:{},onClick:function(){if(n)return window.removeEventListener("click",t,!0),console.log("unbind"),void o(!1);o(!0),console.log("bind"),window.addEventListener("click",t,!0)},"data-widget":n,children:Object(L.jsx)(C.a,{height:"40px",width:"40px",icon:E.a,className:"plus-icon","data-widget":n})})}function r(e){window.addEventListener("message",e,!1)}function a(e){window.parent.postMessage(e,"*")}function i(e){e.changeAllDotsPosition;var t=e.reset,n=(e=Object(w.useState)("false"),(e=Object(S.a)(e,2))[0],e[1]);return Object(L.jsx)("div",{className:"widget-box",onClick:function(){a("toggle"),t(),n((function(e){return!e}))},children:Object(L.jsx)(C.a,{height:"40px",width:"40px",icon:E.b,className:"plus-icon"})})}function c(e){return e=e.comments,Object(L.jsx)("div",{className:"dialog-box",children:Object(L.jsx)("div",{className:"comments-container",children:e&&e.map((function(e){return Object(L.jsx)(M,{content:e.content,author:e.author,color:e.color,authorImageUrl:e.authorImageUrl})}))})})}function s(e){var t=e.showBoxInit,n=e.dotId,o=e.url,i=e.stickyDotInit,c=e.children,s=e.onClose,u=e.comments,l=void 0===(f=e.status)?"active":f,d=Object(w.useState)(t),f=(e=Object(S.a)(d,2))[0],p=e[1],m=(t=Object(w.useState)(i),e=(d=Object(S.a)(t,2))[0],d[1]),b=(i=Object(w.useState)(""),d=(t=Object(S.a)(i,2))[0],t[1]),h=(i=Object(w.useState)(u),u=(t=Object(S.a)(i,2))[0],t[1]),g=(i=Object(w.useState)(""),i=(t=Object(S.a)(i,2))[0],t[1]);t=Object(w.useRef)(null);Object(w.useEffect)((function(){r(v)}),[]),Object(w.useEffect)((function(){!function e(t,n){t!=U&&(U=t,n()),U=window.location.href,setTimeout((function(){e(window.location.href,n)}),1e3)}(window.location.href,x)}),[]);var x=function(){var e=!o||o===window.location.href;m(e)},v=function(e){(e=e.data)&&e.status&&("all"===e.status||e.status===l?m(!0):m(!1))};u=j.a.cloneElement(c,{submitCallback:function(e){h(e),m(!0),p(!1)},onSubmitReturn:function(e){b(e._id)},comments:u});return Object(L.jsxs)("div",{className:"App",ref:t,onMouseLeave:function(e){s(),p(!1)},tabindex:"0",onFocus:function(){g("focus")},children:[e?Object(L.jsx)("div",{className:"dot "+i,onMouseOver:function(e){return e=e,a({id:n}),e.target.closest(".root-dot").style.zIndex=2e5,void p(!0)},tabindex:"0",id:n||d}):null,f?u:null]})}function u(){A=!0}function l(e){var t,n,o,r,i,c;A&&(t=e.pageX,n=e.pageY,o=function(){for(var t=e.path,n=(e.pageX,e.pageY,t[0]),o=n.offsetLeft,r=n.offsetTop,a=n.offsetHeight,i=n.offsetWidth,c=n.className,s=n.id,u=0;void 0===r||!c&&!s&&u<t.length;)o=t[u].offsetLeft,r=t[u].offsetTop,a=t[u].offsetHeight,i=t[u].offsetWidth,c=t[u].className,s=t[u].id,u++;return{offsetLeft:o,offsetTop:r,offsetHeight:a,offsetWidth:i,className:c,elementId:s}}(),i=document.getElementsByTagName("body")[0],(r=document.createElement("DIV")).style.position="absolute",r.style.left=t+"px",r.style.top=n+"px",r.classList=["root-dot"],r.style.zIndex=1e5,i.appendChild(r),A=!1,c=Object(v.a)(x.a.mark((function r(i,c){var s;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return A=!0,r.next=3,N.sendPostRequest("",Object(h.a)(Object(h.a)(Object(h.a)({posX:t+"px",posY:n+"px"},o),i),{},{author:i.authorName,path:function(e){for(var t=e.target,n="";t.parentNode;){for(var o=t.parentNode,r=o.children,a=0;a<r.length;a++)if(r[a]===t){n+=t.nodeName+"["+a+"]/";break}t=o}return n}(e)}));case 3:s=r.sent,c(s),a("pull");case 6:case"end":return r.stop()}}),r)}))),i=function(e,t){return c.apply(this,arguments)},k.a.render(Object(L.jsx)(j.a.StrictMode,{children:Object(L.jsx)(s,{setShouldRender:F,disableClickEvent:H,addEventListener:X,posX:t+"px",posY:n+"px",showBoxInit:!0,stickyDotInit:!1,onClose:u,children:Object(L.jsx)(D,{disableClickEvent:H,onSubmit:i,dotId:"",authorName:B,authorImageUrl:R})})}),r))}n.r(t);var d,f,p,m,b,h=n(11),g=n(3),x=n.n(g),v=n(6),w=n(1),j=n.n(w),y=n(7),k=n.n(y),O=(t=(n(31),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP;t=t.getTTFB;n(e),o(e),r(e),a(e),t(e)}))}),g=n(14),n.n(g)),I=(y=(b=Object(v.a)(x.a.mark((function e(t,n){var o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.url=window.location.href,console.log(n),e.next=4,O()({method:"post",url:"http://localhost:4000/public/dot/"+I(),data:n});case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)}))),function(e,t){return b.apply(this,arguments)}),g=(m=Object(v.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("http://localhost:4000/public/dots/"+I());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)}),function(){return new URLSearchParams(window.location.search).get("id")}),N={sendPostRequest:y,getDots:g},S=n(5),C=n(9),E=n(10),L=n(0),T=(n(54),n(25)),M=(n(55),function(e){var t=e.content,n=e.author;e.color,e=e.authorImageUrl;return Object(L.jsxs)("div",{className:"comment-container",children:[Object(L.jsxs)("div",{className:"user-container",children:[Object(L.jsx)(T.a,{src:e||"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",className:"profile-image",width:"36px",height:"36px"}),Object(L.jsx)("span",{className:"user-name",children:n})]}),Object(L.jsxs)("div",{className:"comment-text",children:[" ",t]})]})}),D=(n(56),function(e){var t,n=e.onSubmit,o=void 0===(t=e.comments)?[]:t,r=e.submitCallback,a=e.onSubmitReturn,i=void 0===(t=e.authorName)?"Anonymouse":t,c=void 0===(t=e.authorImageUrl)?"":t,s=(e=Object(w.useState)(""),(t=Object(S.a)(e,2))[0]),u=t[1];e=Object(w.useState)(!0),e=(t=Object(S.a)(e,2))[0];return t[1],Object(L.jsxs)("div",{className:"dialog-box",children:[Object(L.jsx)("div",{className:"comments-container",children:o&&o.map((function(e){return Object(L.jsx)(M,{content:null==e?void 0:e.content,author:null==e?void 0:e.authorName,color:null==e?void 0:e.color,authorImageUrl:null==e?void 0:e.authorImageUrl})}))}),e&&!o.length?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("textarea",{className:"comment-textarea",rows:"6",onChange:function(e){u(e.target.value)}}),Object(L.jsx)("div",{className:"submit-button",variant:"outline-info",disabled:!s,onClick:function(){s&&(r([{content:s,authorName:i,authorImageUrl:c}]),n({comment:s,authorName:i,authorImageUrl:c},a))},"data-allow":"true",children:"Submit"})]}):null]})}),U=(n(57),""),A=!0,B="",R="",z=(p=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout(Object(v.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=window.document.getElementsByClassName("root-dot"),n=0;n<t.length;n++)t[n].innerHTML="";return e.next=4,P();case 4:case"end":return e.stop()}}),e)}))),100);case 1:case"end":return e.stop()}}),e)}))),function(){return p.apply(this,arguments)}),P=(g=(f=Object(v.a)(x.a.mark((function e(){var t,n,r,a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementsByTagName("body")[0],(n=document.createElement("DIV")).style.position="fixed",n.style.zIndex=1e5,n.style.right=0,n.style.top="50px",t.appendChild(n),k.a.render(Object(L.jsx)(j.a.StrictMode,{children:Object(L.jsx)(o,{createADot:l,handler:Y})}),n),(n=document.createElement("DIV")).style.position="fixed",n.style.zIndex=1e5,n.style.right=0,n.style.top="150px",t.appendChild(n),k.a.render(Object(L.jsx)(j.a.StrictMode,{children:Object(L.jsx)(i,{createADot:l,handler:Y,reset:z})}),n),(n=document.createElement("DIV")).style.position="fixed",n.style.zIndex=1e5,n.style.right=0,n.style.top="50px",e.next=22,N.getDots();case 22:for(r=e.sent,a=0;a<r.length;a++)c=r[a],_(c);case 24:case"end":return e.stop()}}),e)}))),function(){return f.apply(this,arguments)}),d=Object(v.a)(x.a.mark((function e(){var t,n,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getDots();case 2:for(t=e.sent,n=0;n<t.length;n++)o=t[n],_(o);case 4:case"end":return e.stop()}}),e)}))),function(){return d.apply(this,arguments)}),_=function(e){var t=e.posX,n=e.posY,o=e.comments,r=e._id,a=e.url,i=e.status,l=document.getElementsByTagName("body")[0],d=document.createElement("div");d.style.position="absolute",d.style.zIndex=1e5;var f,p,m=function(){var t,n;if(o=e.path){for(var o=o.split("/").reverse(),r=document.getElementsByTagName("body")[0],a=(n=0,(o=o).map((function(e,t){"BODY"===e.split("[")[0]&&(n=t)})),o.splice(n+1)),i=0;i<a.length;i++)r=r.children[(t=a[i]).substring(t.lastIndexOf("[")+1,t.lastIndexOf("]"))];return r}}();d.style.left=(f=e,p=m,f=(Number(f.posX.split("p")[0])-f.offsetLeft)/f.offsetWidth,p.offsetLeft+p.offsetWidth*f+"px"),d.style.top=(f=e,m=m,f=(Number(f.posY.split("p")[0])-f.offsetTop)/f.offsetHeight,m.offsetTop+m.offsetHeight*f+"px"),d.classList=["root-dot"],l.appendChild(d),k.a.render(Object(L.jsx)(j.a.StrictMode,{children:Object(L.jsx)(s,{setShouldRender:F,disableClickEvent:H,addEventListener:X,posX:t,posY:n,showBoxInit:!1,stickyDotInit:!0,comments:o,dotId:r,url:a,onClose:u,status:i,children:Object(L.jsx)(c,{comments:o})})}),d)},F=function(e){A=e};t();var H=function(){window.document.removeEventListener("click",Y)},Y=function e(t){if(!t.target.getAttribute("data-widget"))return l(t),t.target.getAttribute("data-allow")||(t.stopPropagation(),t.preventDefault()),!1;window.document.removeEventListener("click",e)},X=function(){setTimeout((function(){return window.document.addEventListener("click",l)}),200)};g(),r((function(e){"http://localhost:3000"!==e.origin||void 0!==e.data.type||(e=window.document.getElementById(e.data))&&(e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.focus())})),r((function(e){"userInfo"===e.data.type&&(B=e.data.name,R=e.data.authorImageUrl)})),r((function(e){"reset"===e.data.type&&(console.log("123",e),z())}))}},[[58,1,2]]])}]);