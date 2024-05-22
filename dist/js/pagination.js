/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/pagination.js":
/*!**************************!*\
  !*** ./js/pagination.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dates_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dates.json */ \"./dates.json\");\n\nconst page = Number.parseInt(\n  new URLSearchParams(window.location.search).get('page') || 0\n);\nconst posts = Array.from(document.getElementsByClassName('post'));\nconst numbers = [2, 3, 3, 1];\ndocument.getElementById('current-page').innerText = page + 1;\nif (page != 0) {\n  document.getElementById('newer').href = `?page=${Math.max(0, page - 1)}`;\n} else {\n  document.getElementById('newer').style.color = '#9c0c18';\n  document.getElementById('newer').style.cursor = 'not-allowed';\n  document.getElementById('newer').disabled = true;\n}\nif (page != numbers.length - 1) {\n  document.getElementById('older').href = `?page=${Math.min(\n    numbers.length,\n    page + 1\n  )}`;\n} else {\n  document.getElementById('older').style.color = '#9c0c18';\n  document.getElementById('older').style.cursor = 'not-allowed';\n  document.getElementById('older').disabled = true;\n}\nlet start = numbers.slice(0, page).reduce((a, b) => a + b, 0);\nfor (let i = start; i < Math.min(start + numbers[page], posts.length); i++) {\n  const post = posts[i];\n  const dateItem = _dates_json__WEBPACK_IMPORTED_MODULE_0__[post.id] || { \"nonexistent\": true };\n  post.style.display = 'block';\n  const datetime = document.createElement('div');\n  datetime.className = 'date-time';\n  const date = document.createElement('span');\n  const time = document.createElement('span');\n  date.className = 'date';\n  time.className = 'time';\n  if (dateItem[\"nonexistent\"]) {\n    post.getElementsByClassName('title')[0].innerText = `u forgot an entire object lawl, the id is ${post.id}`\n    date.innerText = \"it's not here\";\n    time.innerText = \"(he's really stupid sorry)\"\n  } else {\n    if (typeof dateItem[\"title\"] == 'string' && (post.getElementsByClassName(\"title\").length == 0 || post.getElementsByClassName(\"title\")[0].innerText == \"\")) {\n      try { post.getElementsByClassName(\"title\")[0].remove(); }\n      catch { console.log(\"random error you don't have to worry about\"); }\n      const postTitle = document.createElement('div');\n      const actualTitle = document.createElement('p');\n      postTitle.className = 'title'\n      actualTitle.className = 'post-title';\n      actualTitle.innerText = dateItem['title'];\n      postTitle.appendChild(actualTitle);\n      post.insertBefore(postTitle, post.firstChild);\n    }\n    const datePosted = typeof dateItem == 'string' ? new Date(dateItem) : typeof dateItem[\"date\"] == 'string' ? new Date(dateItem[\"date\"]) : null;\n    date.innerText = datePosted ? datePosted.toLocaleDateString() : 'remind webmaster to add a date!';\n    time.innerText = datePosted ? datePosted.toLocaleTimeString() : \"(he's stupid sorry)\"\n  }\n  datetime.append(date, time);\n  console.log(post);\n  post.getElementsByClassName('title')[0].appendChild(datetime);\n}\n\nconst big_hr = document.createElement('div');\nbig_hr.className = 'big-hr';\nconst glow = document.createElement('div');\nglow.className = 'glow';\nbig_hr.appendChild(glow);\nfor (\n  let i = start;\n  i < Math.min(start + numbers[page], posts.length) - 1;\n  i++\n) {\n  posts[i].after(big_hr.cloneNode(true));\n}\n\n\n//# sourceURL=webpack://blogtemplate/./js/pagination.js?");

/***/ }),

/***/ "./dates.json":
/*!********************!*\
  !*** ./dates.json ***!
  \********************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"1\":\"Tue Apr 02 2024 22:25:50 GMT-0400 (Eastern Daylight Time)\",\"2\":\"Wed Apr 03 2024 20:37:32 GMT-0400 (Eastern Daylight Time)\",\"3\":\"Fri Apr 05 2024 20:44:55 GMT-0400 (Eastern Daylight Time)\",\"4\":\"Wed Apr 10 2024 14:57:56 GMT-0400 (Eastern Daylight Time)\",\"5\":\"Sun Apr 14 2024 23:40:34 GMT-0400 (Eastern Daylight Time)\",\"6\":\"Tue Apr 16 2024 21:31:05 GMT-0400 (Eastern Daylight Time)\",\"7\":\"Wed Apr 17 2024 20:31:42 GMT-0400 (Eastern Daylight Time)\",\"8\":{\"title\":\"This is a test title\",\"date\":\"Sun Apr 28 2024 08:46:22 GMT-0400 (Eastern Daylight Time)\"},\"9\":{\"title\":\"life updates\",\"date\":\"Fri May 17 2024 23:56:20 GMT-0400 (Eastern Daylight Time)\"},\"10\":{\"title\":\"full of rage\",\"date\":\"Tue May 21 2024 22:21:39 GMT-0400 (Eastern Daylight Time)\"}}');\n\n//# sourceURL=webpack://blogtemplate/./dates.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/pagination.js");
/******/ 	
/******/ })()
;