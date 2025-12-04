// skills.js — animate skill bars and reveal timeline items
document.addEventListener("DOMContentLoaded", () => {
  try {
    // Animate skill bars
    const bars = document.querySelectorAll(".skill-level");
    if (bars.length) {
      const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const level = parseFloat(el.getAttribute("data-level")) || 1;
            el.style.transition = "transform 1.6s cubic-bezier(.2,.8,.2,1)";
            el.style.transform = `scaleX(${Math.max(0, Math.min(1, level))})`;
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.35 });

      bars.forEach(b => {
        b.style.transform = "scaleX(0)";
        obs.observe(b);
      });
    }

    // Reveal timeline items (staggered)
    const tItems = document.querySelectorAll(".timeline-item");
    if (tItems.length) {
      const tObs = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            // add visible class with small stagger
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, 80 * (Array.from(tItems).indexOf(entry.target) + 1));
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      tItems.forEach(it => tObs.observe(it));
    }
  } catch (e) {
    console.error("skills.js error:", e);
  }
});
