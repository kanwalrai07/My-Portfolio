// particles-config.js — particles.js config (guarded)
document.addEventListener("DOMContentLoaded", () => {
  try {
    if (typeof particlesJS === "undefined") {
      console.warn("particles.js not loaded — include the library to enable background particles.");
      return;
    }
    particlesJS("particles-js", {
      particles: {
        number: { value: 70, density: { enable: true, value_area: 800 } },
        color: { value: ["#ff00ff", "#00ffff", "#ffff00"] },
        shape: { type: "circle" },
        opacity: { value: 0.45, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 140, color: "#ff00ff", opacity: 0.28, width: 1 },
        move: { enable: true, speed: 1.8, random: true, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
      },
      retina_detect: true
    });
  } catch (e) {
    console.error("particles-config error", e);
  }
});
