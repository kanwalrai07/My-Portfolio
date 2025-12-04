// about.js — small tilt effect on portrait and gentle entrance animation
document.addEventListener("DOMContentLoaded", () => {
  const frame = document.getElementById("portraitFrame");
  const img = document.getElementById("portraitImg");

  // Tilt effect (simple)
  if (frame) {
    frame.addEventListener("mousemove", (e) => {
      const r = frame.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      const rx = (-y) * 7; // rotateX
      const ry = (x) * 7;  // rotateY
      frame.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
      if (img) img.style.transform = `scale(1.03) translateZ(8px)`;
    });

    frame.addEventListener("mouseleave", () => {
      frame.style.transform = "";
      if (img) img.style.transform = "";
    });

    // gentle reveal when in view
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          frame.style.transition = "transform 420ms cubic-bezier(.2,.9,.3,1), box-shadow 420ms ease";
          frame.classList.add("inview");
          obs.unobserve(frame);
        }
      });
    }, { threshold: 0.12 });

    obs.observe(frame);
  }

  // small reveal for right card
  const card = document.querySelector(".about-card");
  if (card) {
    const cobs = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
          cobs.unobserve(card);
        }
      });
    }, { threshold: 0.15 });
    card.style.opacity = 0;
    card.style.transform = "translateY(18px)";
    cobs.observe(card);
  }
});
