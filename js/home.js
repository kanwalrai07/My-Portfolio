// home.js — simple typewriter for hero subtitle (guarded)
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typewriter-text");
  if (!el) return;

  const phrases = ["Software & Cloud Engineering", "BSCS Student", "C++ · AWS · Web Dev"];
  let p = 0, i = 0, deleting = false;

  function tick() {
    const full = phrases[p];
    if (deleting) {
      i = Math.max(0, i - 1);
      el.textContent = full.substring(0, i);
      if (i === 0) {
        deleting = false;
        p = (p + 1) % phrases.length;
        setTimeout(tick, 300);
        return;
      }
    } else {
      i = Math.min(full.length, i + 1);
      el.textContent = full.substring(0, i);
      if (i === full.length) {
        deleting = true;
        setTimeout(tick, 900);
        return;
      }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }

  setTimeout(tick, 600);
});
