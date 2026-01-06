// about.js — portrait image handling and animations
document.addEventListener("DOMContentLoaded", () => {
  const portraitImg = document.getElementById("portraitImg");
  const portraitFrame = document.getElementById("portraitFrame");

  // Handle missing image gracefully
  if (portraitImg) {
    portraitImg.addEventListener("error", function() {
      // If image fails to load, create a placeholder
      this.style.display = "none";
      if (portraitFrame && !portraitFrame.querySelector(".placeholder")) {
        const placeholder = document.createElement("div");
        placeholder.className = "placeholder";
        placeholder.style.cssText = "width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, rgba(255,0,255,0.1), rgba(0,255,255,0.1));color:#fff;font-weight:800;font-size:1.2rem";
        placeholder.textContent = "KR";
        portraitFrame.appendChild(placeholder);
      }
    });
  }

  // Add subtle hover effect to portrait frame
  if (portraitFrame) {
    portraitFrame.addEventListener("mouseenter", () => {
      portraitFrame.style.transform = "scale(1.02)";
      portraitFrame.style.transition = "transform 0.3s ease";
    });
    portraitFrame.addEventListener("mouseleave", () => {
      portraitFrame.style.transform = "scale(1)";
    });
  }
});
