// projects.js — simple filter + image error handling
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  // Filter functionality
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.getAttribute("data-filter");
      cards.forEach(c => {
        if (f === "all" || c.dataset.category.includes(f)) {
          c.style.display = "";
        } else {
          c.style.display = "none";
        }
      });
    });
  });

  // Handle missing project images
  const projectImages = document.querySelectorAll(".project-img img");
  projectImages.forEach(img => {
    img.addEventListener("error", function () {
      const projectImg = this.closest(".project-img");
      if (projectImg && !projectImg.querySelector(".img-placeholder")) {
        this.style.display = "none";
        const placeholder = document.createElement("div");
        placeholder.className = "img-placeholder";
        placeholder.style.cssText = "width:100%;height:160px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, rgba(255,102,0,0.1), rgba(255,140,0,0.1));border-radius:8px;color:var(--primary);font-weight:800;font-size:1.1rem;text-align:center;padding:20px";
        placeholder.textContent = "Project Image";
        projectImg.appendChild(placeholder);
      }
    });
  });
});
