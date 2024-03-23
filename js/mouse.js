let trail = []
const SIZE = 30
const newParticle = (e) => {
  const particle = document.createElement("div");
  particle.style.left = e.pageX + "px";
  particle.style.top = e.pageY + "px";
  particle.classList.add("particle", "active");
  return particle
}
const newSVG = (x1, y1, x2, y2) => {
  const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  newLine.setAttribute("class", "line")
  newLine.setAttribute('x1', x1);
  newLine.setAttribute('y1', y1);
  newLine.setAttribute('x2', x2);
  newLine.setAttribute('y2', y2);
  return newLine;
}
document.getElementById("canvas").append(newSVG(0, 0, 100, 100));

document.addEventListener('mousemove', (e) => {
  trail = Array.from(document.getElementsByClassName("particle"))
  trail.unshift(newParticle(e))
  for (const i of trail.slice(SIZE)) document.body.removeChild(i)
  trail = trail.slice(0, SIZE)
  for (const i of trail) {
    document.body.appendChild(i)
  }
}, false)