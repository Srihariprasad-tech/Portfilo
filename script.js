document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------
     1. TERMINAL TYPEWRITER EFFECT
  --------------------------------------------------- */
  const lines = [
    { el: document.getElementById('typeLine1'), text: 'somshubra_roy', delay: 40 },
    { el: document.getElementById('typeLine2'), text: 'Software Developer — Fresher', delay: 35 },
    { el: document.getElementById('typeLine3'), text: 'echo "Let\'s build something great."', delay: 30 }
  ];

  function typeLine(index) {
    if (index >= lines.length) return;
    const { el, text, delay } = lines[index];
    if (!el) return;
    let i = 0;
    const interval = setInterval(() => {
      el.textContent = text.slice(0, i + 1);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setTimeout(() => typeLine(index + 1), 350);
      }
    }, delay);
  }
  typeLine(0);

  /* ---------------------------------------------------
     2. MOBILE NAV TOGGLE
  --------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ---------------------------------------------------
     3. ACTIVE NAV TAB ON SCROLL
  --------------------------------------------------- */
  const sections = document.querySelectorAll('section[id], header[id]');
  const tabs = document.querySelectorAll('.nav-links .tab');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tabs.forEach(tab => {
          tab.classList.toggle('active', tab.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(section => navObserver.observe(section));

  /* ---------------------------------------------------
     4. SCROLL REVEAL ANIMATIONS
  --------------------------------------------------- */
  const revealTargets = document.querySelectorAll(
    '.section-title, .about-grid, .timeline-item, .skill-category, .project-card, .cert-item, .contact-grid, .file-tag'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');

        // Animate skill bars when the skills section comes into view
        if (entry.target.classList.contains('skill-category')) {
          entry.target.querySelectorAll('.bar i').forEach(bar => {
            bar.style.width = bar.style.width || bar.getAttribute('style');
          });
        }
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => revealObserver.observe(el));

  /* ---------------------------------------------------
     5. BACK-TO-TOP BUTTON
  --------------------------------------------------- */
  const toTop = document.getElementById('toTop');

  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 500);
  });

  toTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------------------------------------------------
     6. CONTACT FORM (front-end only — connect to your
        own backend / form service like Formspree)
  --------------------------------------------------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    // 🔧 Replace this with a real submission (e.g. fetch() to Formspree,
    // EmailJS, or your own API endpoint) using your GitHub/email details.
    status.textContent = 'Message ready — connect this form to your email service to go live.';
    form.reset();
    setTimeout(() => { status.textContent = ''; }, 5000);
  });

  /* ---------------------------------------------------
     7. FOOTER YEAR
  --------------------------------------------------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------------------------------------------------
     8. NAVBAR SHADOW ON SCROLL
  --------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10 ? '0 6px 20px rgba(0,0,0,0.35)' : 'none';
  });

});
