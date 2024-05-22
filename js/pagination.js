import dates from '../dates.json';
const page = Number.parseInt(
  new URLSearchParams(window.location.search).get('page') || 0
);
const posts = Array.from(document.getElementsByClassName('post'));
const numbers = [2, 3, 3, 1];
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
  const dateItem = dates[post.id] || { "nonexistent": true };
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
    if (typeof dateItem["title"] == 'string' && (post.getElementsByClassName("title").length == 0 || post.getElementsByClassName("title")[0].innerText == "")) {
      try { post.getElementsByClassName("title")[0].remove(); }
      catch { console.log("random error you don't have to worry about"); }
      const postTitle = document.createElement('div');
      const actualTitle = document.createElement('p');
      postTitle.className = 'title'
      actualTitle.className = 'post-title';
      actualTitle.innerText = dateItem['title'];
      postTitle.appendChild(actualTitle);
      post.insertBefore(postTitle, post.firstChild);
    }
    const datePosted = typeof dateItem == 'string' ? new Date(dateItem) : typeof dateItem["date"] == 'string' ? new Date(dateItem["date"]) : null;
    date.innerText = datePosted ? datePosted.toLocaleDateString() : 'remind webmaster to add a date!';
    time.innerText = datePosted ? datePosted.toLocaleTimeString() : "(he's stupid sorry)"
  }
  datetime.append(date, time);
  console.log(post);
  post.getElementsByClassName('title')[0].appendChild(datetime);
}

const big_hr = document.createElement('div');
big_hr.className = 'big-hr';
const glow = document.createElement('div');
glow.className = 'glow';
big_hr.appendChild(glow);
for (
  let i = start;
  i < Math.min(start + numbers[page], posts.length) - 1;
  i++
) {
  posts[i].after(big_hr.cloneNode(true));
}
