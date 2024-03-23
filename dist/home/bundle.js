(()=>{"use strict";var n,e,t,o,i,r,a,s,c,l,d,p,u,m,f={732:(n,e,t)=>{t.d(e,{A:()=>f});var o=t(601),i=t.n(o),r=t(314),a=t.n(r),s=t(417),c=t.n(s),l=new URL(t(364),t.b),d=new URL(t(236),t.b),p=a()(i()),u=c()(l),m=c()(d);p.push([n.id,`* {\n  margin: 0;\n  padding: 0;\n}\nul {\n  list-style-type: none;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  background-image: url(${u});\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/* removes margin from pre which is the code block */\npre {\n  margin: 0;\n}\n#info span {\n  font-weight: 600;\n}\n#info {\n  color: #ffd6ff;\n  font-weight: 600;\n  background-color: rgb(164 113 211 / 90%);\n  padding: 5px;\n  position: relative;\n  width: fit-content;\n  margin: auto;\n  padding: 10px;\n  border: white double;\n}\n#banner {\n  background: url(${m});\n  background-size: 50%;\n  background-position: 548px 322px;\n  background-attachment: fixed;\n  /* position: relative; */\n  padding: 50px 0px;\n}\n#banner-pic {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n  object-position: 0 90%;\n}\n#title {\n  /* position: absolute; */\n  position: relative;\n  float: right;\n  color: white;\n  font-size: 80px;\n  margin-right: 20px;\n  margin-top: -60px;\n}\n/*\n+---------------------+\n|      attention      |\n+---------------------+\n| ***************     |\n| end of banner stuff |\n| ***************     |\n+---------------------+\n*/\n\n#main {\n  display: grid;\n  grid-template-columns: 20% 60% 20%;\n  align-content: space-around;\n  margin: 100px;\n  margin-bottom: 0px;\n}\n#main .sidebar-left *,\n#main .sidebar-right {\n  font-size: 24px;\n  color: white;\n}\n.sidebar-right {\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n.sidebar-right > div {\n  width: 100%;\n}\n\n.content {\n  color: purple;\n  font-size: xx-large;\n}\n\n.content h1 {\n  color: #ffd6ff;\n}\n\n.post-title {\n  display: inline-block;\n}\n.post-title .hr {\n  height: 3px;\n  width: 200px;\n  background: #ffd6ff;\n  /* overflow: hidden; */\n}\n@keyframes animatedBackground {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: 200px;\n  }\n}\n.post-title .hr .glow {\n  width: 200px;\n  height: 3px;\n  position: relative;\n  background-size: 100px;\n  background-position: 0 0;\n  background: linear-gradient(0.25turn, rgba(0, 0, 0, 0.1), #ffa0ff);\n  animation: animatedBackground 2s linear infinite;\n}\n\n.colorbar {\n  position: absolute;\n  margin-top: -80px;\n  padding-bottom: 20px;\n  left: 10px;\n  height: 100%;\n  width: 50px;\n  background: linear-gradient(\n    0.5turn,\n    rgba(182, 134, 185, 1),\n    rgba(51, 1, 37, 1)\n  );\n}\n\n.particle {\n  position: absolute;\n  height: 10px;\n  width: 10px;\n  background-color: red;\n}\n\n#canvas {\n  /* position: absolute; */\n  width: 100%;\n  height: 100vh;\n  z-index: 999;\n  background: cadetblue;\n  top: 0;\n  left: 0;\n}\n`,""]);const f=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=i(m,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var c=o(n,i),l=0;l<r.length;l++){var d=t(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},364:(n,e,t)=>{n.exports=t.p+"d21b33eb031ee2aa0765.jpg"},236:(n,e,t)=>{n.exports=t.p+"f37c896b589718a9bc88.jpg"}},g={};function h(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return f[n](t,t.exports,h),t.exports}h.m=f,h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var e=h.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,h.nc=void 0,n=h(72),e=h.n(n),t=h(825),o=h.n(t),i=h(659),r=h.n(i),a=h(56),s=h.n(a),c=h(540),l=h.n(c),d=h(113),p=h.n(d),u=h(732),(m={}).styleTagTransform=p(),m.setAttributes=s(),m.insert=r().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(u.A,m),u.A&&u.A.locals&&u.A.locals,(async()=>(console.log({result:"success",info:{sitename:"undelined",views:1058,hits:2488,created_at:"Sun, 28 Jan 2024 20:58:03 -0000",last_updated:"Thu, 21 Mar 2024 00:15:59 -0000",domain:null,tags:["blog"],timeAccessed:"2024-03-23T04:25:55.267Z"}}),{result:"success",info:{sitename:"undelined",views:1058,hits:2488,created_at:"Sun, 28 Jan 2024 20:58:03 -0000",last_updated:"Thu, 21 Mar 2024 00:15:59 -0000",domain:null,tags:["blog"],timeAccessed:"2024-03-23T04:25:55.267Z"}}))().then((n=>{document.getElementById("info").innerHTML=JSON.stringify(n.info,void 0,4).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,(function(n){let e="#BDE0FE;font-size:120%;";return/^"/.test(n)?e=/:$/.test(n)?"pink":"lightblue":/null/.test(n)&&(e="#56CFE1"),'<span style="color:'+e+'">'+n+"</span>"}))})),window.mobileCheck=function(){let n=!1;var e;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(n=!0),n},window.onload=()=>{window.mobileCheck()&&(window.location.href="https://sorry_man_mobile_users_not_allowed.org")},(()=>{let n=[];document.getElementById("canvas").append(((n,e,t,o)=>{const i=document.createElementNS("http://www.w3.org/2000/svg","line");return i.setAttribute("class","line"),i.setAttribute("x1",0),i.setAttribute("y1",0),i.setAttribute("x2",100),i.setAttribute("y2",100),i})()),document.addEventListener("mousemove",(e=>{n=Array.from(document.getElementsByClassName("particle")),n.unshift((n=>{const e=document.createElement("div");return e.style.left=n.pageX+"px",e.style.top=n.pageY+"px",e.classList.add("particle","active"),e})(e));for(const e of n.slice(30))document.body.removeChild(e);n=n.slice(0,30);for(const e of n)document.body.appendChild(e)}),!1)})()})();