const trail = []
const newParticle = (e) => {
  const particle = document.createElement("div")
  particle.classList.add("particle")
  particle.style.left = e.clientX
  particle.style.top = e.clientY
  document.body.appendChild(particle)
  return particle
}
document.addEventListener('mousemove', (e) => {
  if (trail.length == 10) {
    trail.pop()
  }
  trail.unshift(newParticle(e))

}, false)