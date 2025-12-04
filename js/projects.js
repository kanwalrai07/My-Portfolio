// projects.js — filtering + reveal on scroll (robust)
document.addEventListener("DOMContentLoaded", () => {
  try {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".project-card");

    if (filterBtns && filterBtns.length && cards && cards.length) {
      filterBtns.forEach(btn => {
        btn.addEventListener("click", function () {
          filterBtns.forEach(b => b.classList.remove("active"));
          this.classList.add("active");
          const f = this.getAttribute("data-filter");
          cards.forEach(card => {
            const catAttr = card.getAttribute("data-category") || "";
            const categories = catAttr.split(/\s*,\s*/).map(s => s.trim()).filter(Boolean);
            if (f === "all" || categories.includes(f)) {
              card.style.display = "";
              // reveal
              requestAnimationFrame(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              });
            } else {
              // hide with animation then remove from flow
              card.style.opacity = "0";
              card.style.transform = "translateY(18px)";
              setTimeout(() => { card.style.display = "none"; }, 300);
            }
          });
        });
      });
    }

    // Reveal on scroll
    if (cards && cards.length) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      cards.forEach(c => {
        c.style.opacity = "0";
        c.style.transform = "translateY(18px)";
        obs.observe(c);
      });
    }
  } catch (e) {
    console.error("projects.js error", e);
  }
});
