let trail = []
const SIZE = 30
const newParticle = (e) => {
  const particle = document.createElement("div");
  particle.style.left = e.pageX + "px";
  particle.style.top = e.pageY + "px";
  particle.classList.add("particle", "active");
  return particle
}
document.addEventListener('mousemove', (e) => {
  trail = Array.from(document.getElementsByClassName("particle"))
  trail.unshift(newParticle(e))
  for (const i of trail.slice(SIZE)) document.body.removeChild(i)
  trail = trail.slice(0, SIZE)
  for (const i of trail) document.body.appendChild(i)
}, false)