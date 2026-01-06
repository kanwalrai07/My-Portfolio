// home.js — Rotating text slider with smooth fade animation
document.addEventListener("DOMContentLoaded", () => {
  const rotatingText = document.getElementById("rotating-text");
  if (!rotatingText) return;

  const roles = [
    "BSCS Student",
    "Software & Cloud Engineer",
    "C++ & AWS Developer",
    "Full Stack Web Developer"
  ];

  let currentIndex = 0;
  let isAnimating = false;

  function rotateText() {
    if (isAnimating) return;
    isAnimating = true;

    // Fade out
    rotatingText.classList.add("fade-out");
    
    setTimeout(() => {
      // Change text
      currentIndex = (currentIndex + 1) % roles.length;
      rotatingText.textContent = roles[currentIndex];
      
      // Fade in
      rotatingText.classList.remove("fade-out");
      rotatingText.classList.add("fade-in");
      
      setTimeout(() => {
        rotatingText.classList.remove("fade-in");
        isAnimating = false;
      }, 500);
    }, 500);
  }

  // Start rotation after initial delay
  setTimeout(() => {
    setInterval(rotateText, 3000); // Change every 3 seconds
  }, 2000); // Wait 2 seconds before first rotation
});
