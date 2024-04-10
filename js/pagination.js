const page = Number.parseInt(new URLSearchParams(window.location.search).get('page') || 0);
// const timeStamps=
const posts = Array.from(document.getElementsByClassName('post'));
const numbers = [3, 1];
document.getElementById("current-page").innerText = page + 1;
if (page != 0) {
  document.getElementById("newer").href = `?page=${Math.max(0, page - 1)}`;
}
if (page != numbers.length) {
  document.getElementById("older").href = `?page=${Math.min(numbers.length, page + 1)}`;
}
let start = numbers.slice(0, page).reduce((a, b) => a + b, 0);
for (let i = start; i < Math.min(start + numbers[page], posts.length); i++) {
  posts[i].style.display = 'block';
}
