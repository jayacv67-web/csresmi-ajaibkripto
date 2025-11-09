// JavaScript for Call Center Ajaib

// Update business hours status and current time
function updateBusinessHours() {
  const statusEl = document.getElementById('business-hours-status');
  if (!statusEl) return;
  const now = new Date();
  const hour = now.getHours();
  const isOpen = hour >= 8 && hour < 20;
  const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  statusEl.textContent = (isOpen ? 'Buka Sekarang' : 'Tutup') + ' | ' + timeString;
}

// Animate hero section on load
function animateHero() {
  const title = document.getElementById('hero-title');
  const subtitle = document.getElementById('hero-subtitle');
  const buttons = document.getElementById('hero-buttons');
  const cards = document.getElementById('hero-cards');

  setTimeout(() => {
    if (title) {
      title.classList.remove('opacity-0', 'translate-y-10');
      title.classList.add('opacity-100', 'translate-y-0');
    }
  }, 100);

  setTimeout(() => {
    if (subtitle) {
      subtitle.classList.remove('opacity-0', 'translate-y-10');
      subtitle.classList.add('opacity-100', 'translate-y-0');
    }
  }, 300);

  setTimeout(() => {
    if (buttons) {
      buttons.classList.remove('opacity-0', 'translate-y-10');
      buttons.classList.add('opacity-100', 'translate-y-0');
    }
  }, 500);

  setTimeout(() => {
    if (cards) {
      cards.classList.remove('opacity-0', 'translate-y-10');
      cards.classList.add('opacity-100', 'translate-y-0');
    }
  }, 700);
}

// Handle contact form submission
function handleFormSubmission(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Mohon isi semua field dengan benar.');
    return;
  }

      const whatsappMessage = `Nama: ${name}%0AEmail: ${email}%0APesan: ${message}`;
      const whatsappUrl = `https://wa.me/62818880426?text=${whatsappMessage}`;
  window.open(whatsappUrl, '_blank');

  form.reset();
}

// Initial setup
document.addEventListener('DOMContentLoaded', function() {
  updateBusinessHours();
  animateHero();
  setInterval(updateBusinessHours, 60000);

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmission);
  }
});
