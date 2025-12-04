// contact.js — improved form validation + simulated send + optional EmailJS
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const btn = document.getElementById("submit-btn");
  const toast = document.getElementById("toast");
  const status = document.getElementById("form-status");

  if (!form) return;

  function showToast(message, delay = 3500) {
    if (!toast) return;
    toast.textContent = message;
    toast.style.display = "block";
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
      toast.style.display = "none";
    }, delay);
  }

  function setError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg || "";
  }

  function validate() {
    let ok = true;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // reset
    setError("err-name", "");
    setError("err-email", "");
    setError("err-subject", "");
    setError("err-message", "");
    status.textContent = "";

    if (!name) { setError("err-name", "Please enter your name"); ok = false }
    if (!email) { setError("err-email", "Please enter an email"); ok = false }
    else {
      // simple email regex
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) { setError("err-email", "Invalid email address"); ok = false }
    }
    if (!subject) { setError("err-subject", "Please add a subject"); ok = false }
    if (!message || message.length < 8) { setError("err-message", "Message must be 8+ characters"); ok = false }

    return ok;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) return;

    // disable UI
    btn.disabled = true;
    const prevText = btn.textContent;
    btn.textContent = "Sending...";

    // If you use EmailJS client-side, uncomment and replace service/template IDs above and here:
    // if (window.emailjs && typeof emailjs.sendForm === "function") {
    //   emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID","#contact-form")
    //     .then(() => { form.reset(); showToast("Message sent — thank you!"); })
    //     .catch(() => { showToast("Failed to send email. Message stored locally."); })
    //     .finally(() => { btn.disabled=false; btn.textContent=prevText; });
    //   return;
    // }

    // Fallback: simulate a send (replace this with real API if available)
    setTimeout(() => {
      form.reset();
      showToast("Message sent — thank you! I'll reply soon.");
      status.textContent = "Message sent successfully.";
      btn.disabled = false;
      btn.textContent = prevText;
    }, 900);
  });
});
