// contact.js — EmailJS integration with enhanced validation and notifications
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const btn = document.getElementById("submit-btn");
  const toast = document.getElementById("toast");
  const status = document.getElementById("form-status");

  if (!form) return;

  // EmailJS Configuration
  const EMAILJS_PUBLIC_KEY = "4i2T4kwO5BTP7qPQ6";
  const EMAILJS_SERVICE_ID = "service_kq79dn9";
  const EMAILJS_TEMPLATE_ID = "template_aq2jwhs";

  // Initialize EmailJS if available
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  function showToast(message, type = "success", delay = 4000) {
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.style.display = "block";
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
      toast.style.display = "none";
      toast.className = "toast";
    }, delay);
  }

  function setError(id, msg) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = msg || "";
      el.style.display = msg ? "flex" : "none";
    }
  }

  function setStatus(message, type = "success") {
    if (!status) return;
    status.textContent = message;
    status.className = `form-status ${type}`;
    status.style.display = message ? "flex" : "none";
  }

  function validate() {
    let ok = true;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    setError("err-name", "");
    setError("err-email", "");
    setError("err-subject", "");
    setError("err-message", "");
    setStatus("");

    if (!name || name.length < 2) {
      setError("err-name", "Please enter a valid name (min 2 characters)");
      ok = false;
    }
    
    if (!email) {
      setError("err-email", "Please enter an email address");
      ok = false;
    } else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) {
        setError("err-email", "Please enter a valid email address");
        ok = false;
      }
    }
    
    if (!subject || subject.length < 3) {
      setError("err-subject", "Please add a subject (min 3 characters)");
      ok = false;
    }
    
    if (!message || message.length < 10) {
      setError("err-message", "Message must be at least 10 characters");
      ok = false;
    }

    return ok;
  }

  function setLoading(isLoading) {
    if (isLoading) {
      btn.disabled = true;
      btn.classList.add("loading");
    } else {
      btn.disabled = false;
      btn.classList.remove("loading");
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast("Please fix the errors in the form", "error", 3000);
      return;
    }

    setLoading(true);
    setStatus("Sending your message...", "success");

    const formData = {
      from_name: form.name.value.trim(),
      from_email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
      to_email: "kanwalrai09@gmail.com"
    };

    try {
      // Check if EmailJS is available and configured
      if (typeof emailjs !== "undefined" && EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" && EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID") {
        // Send email using EmailJS
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          to_email: formData.to_email
        });

        // Success
        form.reset();
        setStatus("Message sent successfully! I'll get back to you soon.", "success");
        showToast("Message sent successfully! I'll reply within 48 hours.", "success", 5000);
      } else {
        // Fallback: Use mailto link if EmailJS is not configured
        // This is a temporary solution - you should set up EmailJS for production
        const mailtoLink = `mailto:kanwalrai09@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.from_name} (${formData.from_email})\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
        
        form.reset();
        setStatus("Opening your email client...", "success");
        showToast("Opening email client. Please send the message manually.", "success", 4000);
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("Failed to send message. Please try again or email directly.", "error");
      showToast("Error sending message. Please email me directly at kanwalrai09@gmail.com", "error", 5000);
    } finally {
      setLoading(false);
    }
  });

  // Real-time validation
  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach(input => {
    input.addEventListener("blur", () => {
      validate();
    });
    
    input.addEventListener("input", () => {
      const errorId = `err-${input.id}`;
      const errorEl = document.getElementById(errorId);
      if (errorEl && input.value.trim()) {
        errorEl.textContent = "";
        errorEl.style.display = "none";
      }
    });
  });
});
