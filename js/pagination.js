const page = Number.parseInt(new URLSearchParams(window.location.search).get('page') || 0);
// const timeStamps=
const posts = Array.from(document.getElementsByClassName('post'));
const numbers = [3, 2];
document.getElementById("current-page").innerText = page + 1;
if (page != 0) {
  document.getElementById("newer").href = `?page=${Math.max(0, page - 1)}`;
}
if (page != numbers.length - 1) {
  document.getElementById("older").href = `?page=${Math.min(numbers.length, page + 1)}`;
}
let start = numbers.slice(0, page).reduce((a, b) => a + b, 0);
for (let i = start; i < Math.min(start + numbers[page], posts.length); i++) {
  posts[i].style.display = 'block';
}
const big_hr = document.createElement('div');
big_hr.className = 'big-hr';
const glow = document.createElement('div');
glow.className = 'glow';
big_hr.appendChild(glow);
for (let i = start; i < Math.min(start + numbers[page], posts.length) - 1; i++) {
  posts[i].after(big_hr.cloneNode(true));
}

