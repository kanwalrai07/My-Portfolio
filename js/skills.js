// skills.js — animate skill bars + hover effects + percentage display
document.addEventListener("DOMContentLoaded", () => {
  try {
    const skillItems = document.querySelectorAll(".skill-item");
    
    // Add percentage display to each skill
    skillItems.forEach(item => {
      const skillLevel = item.querySelector(".skill-level");
      const skillName = item.querySelector(".skill-name");
      if (skillLevel && skillName) {
        const level = parseFloat(skillLevel.getAttribute("data-level")) || 0;
        const percentage = Math.round(level * 100);
        const percentageSpan = document.createElement("span");
        percentageSpan.className = "skill-percentage";
        percentageSpan.textContent = `${percentage}%`;
        skillName.appendChild(percentageSpan);
      }
    });

    const bars = document.querySelectorAll(".skill-level");
    if (bars && bars.length) {
      // Observe the skills section container for better performance
      const skillsSection = document.querySelector(".skills-section");
      if (!skillsSection) return;

      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate all bars when section is visible
            bars.forEach((bar, index) => {
              setTimeout(() => {
                const lvl = Math.max(0, Math.min(1, parseFloat(bar.getAttribute("data-level")) || 1));
                bar.style.transform = `scaleX(${lvl})`;
                bar.style.transition = "transform 1.8s cubic-bezier(.2,.8,.2,1)";
                bar.classList.add("animated");
                
                // Animate percentage
                const percentageEl = bar.closest(".skill-item")?.querySelector(".skill-percentage");
                if (percentageEl) {
                  const targetPercent = Math.round(lvl * 100);
                  let current = 0;
                  const increment = targetPercent / 60; // 60 frames for smooth animation
                  const timer = setInterval(() => {
                    current += increment;
                    if (current >= targetPercent) {
                      current = targetPercent;
                      clearInterval(timer);
                    }
                    percentageEl.textContent = `${Math.round(current)}%`;
                  }, 30);
                }
              }, index * 100); // Stagger animation
            });
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: "0px 0px -100px 0px" });

      // Initialize all bars at 0
      bars.forEach(b => {
        b.style.transform = "scaleX(0)";
      });

      // Observe the skills section
      obs.observe(skillsSection);
    }

    const items = document.querySelectorAll(".skill-item");
    items.forEach(it => {
      it.addEventListener("mouseenter", () => {
        it.style.transform = "translateY(-6px)";
        it.style.boxShadow = "0 12px 26px rgba(0,0,0,0.25)";
      });
      it.addEventListener("mouseleave", () => {
        it.style.transform = "";
        it.style.boxShadow = "";
      });
    });

    // Animate timeline items
    const timelineItems = document.querySelectorAll(".timeline-item");
    if (timelineItems && timelineItems.length) {
      const timelineObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            timelineObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      timelineItems.forEach(item => {
        timelineObs.observe(item);
      });
    }
  } catch (e) {
    console.error("skills.js error:", e);
  }
});
