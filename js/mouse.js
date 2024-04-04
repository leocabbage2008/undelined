let trail = [];
let inWindow = false;

document.addEventListener('mouseleave', () => {
  inWindow = false;
});
document.addEventListener('mouseenter', () => {
  inWindow = true;
});

const centripetalCatmullRomSpline = (P0, P1, P2, P3, t) => {
  const t2 = t * t;
  const t3 = t * t * t;
  const Qx =
    0.5 *
    ((-t3 + 2 * t2 - t) * P0[0] +
      (3 * t3 - 5 * t2 + 2) * P1[0] +
      (-3 * t3 + 4 * t2 + t) * P2[0] +
      (t3 - t2) * P3[0]);
  const Qy =
    0.5 *
    ((-t3 + 2 * t2 - t) * P0[1] +
      (3 * t3 - 5 * t2 + 2) * P1[1] +
      (-3 * t3 + 4 * t2 + t) * P2[1] +
      (t3 - t2) * P3[1]);
  return [Qx, Qy];
};

setInterval(() => {
  if (trail.length > 0) {
    const currentTime = Date.now();
    while (
      trail.length > 0 &&
      currentTime - trail[trail.length - 1].timestamp > 300
    ) {
      trail.pop();
    }
    updateSpline();
  }
}, 1);

document.addEventListener(
  'mousemove',
  (e) => {
    // Add new point to the beginning at current mouse position with timestamp
    if (inWindow) {
      trail.unshift({ point: [e.clientX, e.clientY], timestamp: Date.now() });
      document.getElementById('circle').setAttribute('cx', e.clientX);
      document.getElementById('circle').setAttribute('cy', e.clientY);
      updateSpline();
    }
  },
  false
);

function updateSpline() {
  // Generate spline curve
  const splinePoints = [];
  if (trail.length >= 4) {
    for (let i = 1; i < trail.length - 2; i++) {
      for (let t = 0; t < 1; t += .5) {
        const Q = centripetalCatmullRomSpline(
          trail[i - 1].point,
          trail[i].point,
          trail[i + 1].point,
          trail[i + 2].point,
          t
        );
        splinePoints.push(Q[0], Q[1]);
      }
    }
  }
  document
    .getElementById('spline')
    .setAttribute('points', splinePoints.join(' '));
  // console.log(trail[trail.length - 1].point)
}
