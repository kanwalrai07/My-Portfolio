// particles-config.js - small config object used by main.js
window.particlesConfig = {
  particles: {
    number: { value: 40, density: { enable: true, value_area: 800 } },
    color: { value: ["#ff00ff","#00ffff","#ffd166"] },
    shape: { type: "circle" },
    opacity: { value: 0.45 },
    size: { value: 3 },
    line_linked: { enable: true, distance: 140, color: "#2b2b2b", opacity: 0.12, width: 1 },
    move: { enable: true, speed: 2, out_mode: "out" }
  },
  interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "repulse" } } },
  retina_detect: true
};
