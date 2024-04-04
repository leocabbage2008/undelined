(()=>{"use strict";var n={732:(n,e,t)=>{t.d(e,{A:()=>m});var o=t(601),i=t.n(o),r=t(314),a=t.n(r),s=t(417),c=t.n(s),l=new URL(t(364),t.b),d=new URL(t(236),t.b),p=a()(i()),u=c()(l),f=c()(d);p.push([n.id,`* {\n  margin: 0;\n  padding: 0;\n  /* pointer-events: auto; */\n}\nul {\n  list-style-type: none;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  cursor: none;\n}\n#main {\n  background-image: url(${u});\n  background-attachment: fixed;\n}\na {\n  color: rgb(220, 20, 60) !important;\n\n  text-decoration: inherit;\n}\na:hover {\n  text-decoration: underline;\n}\n\npre {\n  margin: 0;\n}\n\n/* start of banner stuff */\n#info span {\n  font-weight: 600;\n}\n#info {\n  color: #ffd6ff;\n  font-weight: 600;\n  background-color: rgb(164 113 211 / 90%);\n  padding: 5px;\n  position: relative;\n  width: fit-content;\n  margin: auto;\n  padding: 10px;\n  border: white double;\n}\n#banner {\n  background: url(${f});\n  background-size: 50%;\n  background-position: 548px 322px;\n  background-attachment: fixed;\n  padding: 50px 0px;\n}\n#banner-pic {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n  object-position: 0 90%;\n}\n#title {\n  position: relative;\n  float: right;\n  color: white;\n  font-size: 80px;\n  margin-right: 20px;\n  margin-top: -60px;\n}\n/* end of banner stuff */\n\n/* content stuff */\n#main {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  align-content: space-around;\n  padding: 60px 50px 100px 90px;\n  column-gap: 15px;\n  width: calc(100% - 140px);\n}\n.sidebar-left,\n.sidebar-right {\n  color: white;\n  font-size: 24px;\n  border: thick double white;\n  padding: 10px;\n}\n.sidebar-right {\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n.sidebar-right > div {\n  width: 100%;\n}\n/* ------- */\n\n/* start of hr stuff */\n.post-title .hr {\n  height: 3px;\n  width: 200px;\n  background: #ffd6ff;\n}\n\n@keyframes anime {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: 200px;\n  }\n}\n\n@keyframes big-anime {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: 400px;\n  }\n}\n.big-hr .glow {\n  text-align: center;\n  width: 400px;\n  height: 5px;\n  background: linear-gradient(0.25turn, rgba(0, 0, 0, 0.1), #ffa0ff);\n  margin: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  animation: big-anime 4s linear infinite;\n}\n\n.hr .glow {\n  width: 200px;\n  height: 3px;\n  background: linear-gradient(0.25turn, rgba(0, 0, 0, 0.1), #ffffff);\n  animation: anime 2s linear infinite;\n}\n/* ------------ */\n\n/* COLORBAR */\n.colorbar {\n  position: absolute;\n  margin-top: 20px;\n  padding-bottom: 20px;\n  left: 10px;\n  height: 100%;\n  width: 50px;\n  background: linear-gradient(\n    0.5turn,\n    rgba(182, 134, 185, 1),\n    rgba(51, 1, 37, 1)\n  );\n}\n/* ---------- */\n\n#canvas {\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 999;\n}\n\n#canvas * {\n  pointer-events: none;\n}\n\n.post {\n  display: none;\n  color: #ffd6ff;\n}\n\n.post .title {\n  font-size: 24px;\n  color: #ffd6ff;\n}\n\n.edits li {\n  list-style: circle;\n  list-style-position: inside;\n}\n\n.person {\n  border: thick double white;\n}\n\n.sidebar-left > :nth-child(3) {\n  font-size: 20px;\n}\n\n.edits li {\n  font-size: 15px;\n}\n\n.cast {\n  margin-top: 20px;\n}\n\n.cast > :not(:last-child) {\n  margin-bottom: 20px;\n}\n\n.name {\n  font-size: 20px;\n  color: crimson;\n}\n\n.person {\n  padding: 10px;\n}\n`,""]);const m=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=i(f,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var c=o(n,i),l=0;l<r.length;l++){var d=t(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},364:(n,e,t)=>{n.exports=t.p+"d21b33eb031ee2aa0765.jpg"},236:(n,e,t)=>{n.exports=t.p+"f37c896b589718a9bc88.jpg"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=o[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n+"../"})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(async()=>(console.log({result:"success",info:{sitename:"undelined",views:1218,hits:2692,created_at:"Sun, 28 Jan 2024 20:58:03 -0000",last_updated:"Wed, 03 Apr 2024 03:16:32 -0000",domain:null,tags:["blog","retro"],timeAccessed:"2024-04-04T00:59:17.622Z"}}),{result:"success",info:{sitename:"undelined",views:1218,hits:2692,created_at:"Sun, 28 Jan 2024 20:58:03 -0000",last_updated:"Wed, 03 Apr 2024 03:16:32 -0000",domain:null,tags:["blog","retro"],timeAccessed:"2024-04-04T00:59:17.622Z"}}))().then((n=>{document.getElementById("info").innerHTML=JSON.stringify(n.info,void 0,4).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,(function(n){let e="#BDE0FE;font-size:120%;";return/^"/.test(n)?e=/:$/.test(n)?"pink":"lightblue":/null/.test(n)&&(e="#56CFE1"),'<span style="color:'+e+'">'+n+"</span>"}))})),(()=>{let n=[],e=!1;document.addEventListener("mouseleave",(()=>{e=!1})),document.addEventListener("mouseenter",(()=>{e=!0}));const t=(n,e,t,o,i)=>{const r=i*i,a=i*i*i;return[.5*((2*r-a-i)*n[0]+(3*a-5*r+2)*e[0]+(-3*a+4*r+i)*t[0]+(a-r)*o[0]),.5*((2*r-a-i)*n[1]+(3*a-5*r+2)*e[1]+(-3*a+4*r+i)*t[1]+(a-r)*o[1])]};function o(){const e=[];if(n.length>=4)for(let o=1;o<n.length-2;o++)for(let i=0;i<1;i+=.5){const r=t(n[o-1].point,n[o].point,n[o+1].point,n[o+2].point,i);e.push(r[0],r[1])}document.getElementById("spline").setAttribute("points",e.join(" "))}setInterval((()=>{if(n.length>0){const e=Date.now();for(;n.length>0&&e-n[n.length-1].timestamp>300;)n.pop();o()}}),1),document.addEventListener("mousemove",(t=>{e&&(n.unshift({point:[t.clientX,t.clientY],timestamp:Date.now()}),document.getElementById("circle").setAttribute("cx",t.clientX),document.getElementById("circle").setAttribute("cy",t.clientY),o())}),!1)})(),(()=>{const n=new URLSearchParams(window.location.search).get("page")||0,e=Array.from(document.getElementsByClassName("post")),t=[3,0];let o=t.slice(0,n).reduce(((n,e)=>n+e),0);for(let i=o;i<Math.min(o+t[n],e.length);i++)e[i].style.display="block"})(),(()=>{var n=t(72),e=t.n(n),o=t(825),i=t.n(o),r=t(659),a=t.n(r),s=t(56),c=t.n(s),l=t(540),d=t.n(l),p=t(113),u=t.n(p),f=t(732),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const g=()=>{console.log(window.innerWidth,window.innerHeight),(window.innerWidth<1e3||window.innerHeight<900)&&window.location.assign("../lowl.html")};window.onresize=()=>{g()},window.mobileCheck=function(){let n=!1;var e;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(n=!0),n},window.onload=()=>{window.mobileCheck()&&(window.location.href="https://sorry_man_mobile_users_not_allowed.org"),g()}})()})();