/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./dates.json
const dates_namespaceObject = /*#__PURE__*/JSON.parse('{"1":"Tue Apr 02 2024 22:25:50 GMT-0400 (Eastern Daylight Time)","2":"Wed Apr 03 2024 20:37:32 GMT-0400 (Eastern Daylight Time)","3":"Fri Apr 05 2024 20:44:55 GMT-0400 (Eastern Daylight Time)","4":"Wed Apr 10 2024 14:57:56 GMT-0400 (Eastern Daylight Time)","5":"Sun Apr 14 2024 23:40:34 GMT-0400 (Eastern Daylight Time)","6":"Tue Apr 16 2024 21:31:05 GMT-0400 (Eastern Daylight Time)","7":"Wed Apr 17 2024 20:31:42 GMT-0400 (Eastern Daylight Time)","8":{"title":"This is a test title","date":"Sun Apr 28 2024 08:46:22 GMT-0400 (Eastern Daylight Time)"},"9":{"title":"life updates","date":"Fri May 17 2024 23:56:20 GMT-0400 (Eastern Daylight Time)"},"10":{"title":"full of rage","date":"Tue May 21 2024 22:21:39 GMT-0400 (Eastern Daylight Time)"},"11":{"title":"field trip","date":"2024-05-24T02:05:28.685Z"},"12":{"title":"vacation and other plans","date":"Wed Jul 03 2024 09:09:44 GMT-0400 (Eastern Daylight Time)"},"13":{"title":"update","date":"Sun Sep 22 2024 21:43:54 GMT-0400 (Eastern Daylight Time)"},"14":{"title":"mexico and some website updates and some other life updates....!","date":"Wed Dec 04 2024 17:36:14 GMT-0500 (Eastern Standard Time)"}}');
;// ./js/pagination.js

function seez(seed) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}
function rangeit(seed, a, b) {
  return seez(seed) * (b - a) + a;
}
const page = Number.parseInt(
  new URLSearchParams(window.location.search).get('page') || 0
);
const posts = Array.from(document.getElementsByClassName('post'));
let epoch = new Date().valueOf();
const numbers = [1, 2, 3, 1, 3, 3, 1];
document.getElementById('current-page').innerText = page + 1;
if (page != 0) {
  document.getElementById('newer').href = `?page=${Math.max(0, page - 1)}`;
} else {
  document.getElementById('newer').style.color = '#9c0c18';
  document.getElementById('newer').style.cursor = 'not-allowed';
  document.getElementById('newer').disabled = true;
}
if (page != numbers.length - 1) {
  document.getElementById('older').href = `?page=${Math.min(
    numbers.length,
    page + 1
  )}`;
} else {
  document.getElementById('older').style.color = '#9c0c18';
  document.getElementById('older').style.cursor = 'not-allowed';
  document.getElementById('older').disabled = true;
}
let start = numbers.slice(0, page).reduce((a, b) => a + b, 0);
for (let i = start; i < Math.min(start + numbers[page], posts.length); i++) {
  const post = posts[i];
  const dateItem = dates_namespaceObject[post.id] || { "nonexistent": true };
  post.style.display = 'block';
  const datetime = document.createElement('div');
  datetime.className = 'date-time';
  const date = document.createElement('span');
  const time = document.createElement('span');
  date.className = 'date';
  time.className = 'time';
  if (dateItem["nonexistent"]) {
    post.getElementsByClassName('title')[0].innerText = `u forgot an entire object lawl, the id is ${post.id}`
    date.innerText = "it's not here";
    time.innerText = "(he's really stupid sorry)"
  } else {
    if (typeof dateItem["title"] == 'string' || post.getElementsByClassName("title").length == 0 || post.getElementsByClassName("title")[0].innerText == "") {
      try { post.getElementsByClassName("title")[0].remove(); }
      catch (e) { console.log(`${e}random error you don't have to worry about(basically the title is not there but i want to be code efficient. hi!) ${JSON.stringify(dateItem)}`); }
      const postTitle = document.createElement('div');
      const actualTitle = document.createElement('p');
      postTitle.className = 'title'
      actualTitle.className = 'post-title';
      actualTitle.innerText = dateItem['title'] || (post.id + (['st', 'nd', 'rd'][post.id - 1] || 'th'));
      postTitle.appendChild(actualTitle);
      post.insertBefore(postTitle, post.firstChild);
    }
    const datePosted = typeof dateItem == 'string' ? new Date(dateItem) : typeof dateItem["date"] == 'string' ? new Date(dateItem["date"]) : null;
    date.innerText = datePosted ? datePosted.toLocaleDateString() : 'remind webmaster to add a date!';
    time.innerText = datePosted ? datePosted.toLocaleTimeString() : "(stupid sorry)"
  }
  const id = document.createElement('div');
  id.innerHTML = `###${post.id}`;
  post.getElementsByClassName('post-title')[0].appendChild(id);

  datetime.append(date, time);
  post.getElementsByClassName('title')[0].appendChild(datetime);
}

const big_hr = document.createElement('div');
big_hr.className = 'big-hr';
const glow = document.createElement('div');
big_hr.appendChild(glow);
glow.className = 'glow';
for (
  let i = start;
  i <= Math.min(start + numbers[page], posts.length) - 1;
  i++
) {
  epoch += i;
  glow.style.background = `linear-gradient(0.25turn, rgba(0, 0, 0, 0.1), hsl(${rangeit(epoch, 145, 340)},${rangeit(epoch, 35, 98)}%,${rangeit(epoch, 24, 95)}%))`;
  posts[i].appendChild(big_hr.cloneNode(true));
}

/******/ })()
;