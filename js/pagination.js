const page = new URLSearchParams(window.location.search).get('page') || 0;
// const timeStamps=
const posts = Array.from(document.getElementsByClassName('post'));
const numbers = [3, 0];
let start = numbers.slice(0, page).reduce((a, b) => a + b, 0);
for (let i = start; i < Math.min(start + numbers[page], posts.length); i++) {
  posts[i].style.display = 'block';
}
