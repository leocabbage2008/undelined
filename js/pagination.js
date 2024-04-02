const page = new URLSearchParams(window.location.search).get('page') || 0;
// const timeStamps=
const posts = Array.from(document.getElementsByClassName('post'));
const numbers = [1, 2, 3, 3];
let start = numbers.slice(0, page).reduce((a, b) => a + b, 0);
console.log(page);
for (let i = start; i < start + numbers[page]; i++) {
  posts[i].style.visibility = 'visible';
  console.log(i);
}
