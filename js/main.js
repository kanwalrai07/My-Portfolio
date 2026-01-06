// main.js — small helpers (menu toggle + particles init)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");
  const body = document.body;
  
  if (toggle && nav) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      nav.classList.toggle("active");
      // Prevent body scroll when menu is open
      if (nav.classList.contains("active")) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "";
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (nav.classList.contains("active") && !nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove("active");
        body.style.overflow = "";
      }
    });
    
    // Close menu when clicking on a link (mobile)
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 980) {
          nav.classList.remove("active");
          body.style.overflow = "";
        }
      });
    });
  }

  // particles (if particles.js present)
  try {
    if (window.particlesJS) {
      // load config file if present
      if (typeof window.particlesConfig === "object") {
        particlesJS("particles-js", window.particlesConfig);
      } else {
        // fallback small config
        particlesJS("particles-js", {
          "particles": {
            "number": {"value": 40},
            "color": {"value": "#ff6600"},
            "shape": {"type": "circle"}
          },
          "interactivity": { "events": { "onhover": {"enable": true, "mode": "repulse"} } }
        });
      }
    }
  } catch (e) {
    console.warn("particles init error", e);
  }
});
