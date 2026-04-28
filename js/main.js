// ═══════════════════════════════════════════
//  PORTFOLIO TITOUAN MURÉ — Global JS
// ═══════════════════════════════════════════

// ── Reveal on scroll ──────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Nav active link ────────────────────────
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href').split('/').pop();
  if (href === currentPage) link.classList.add('active');
});

// ── Smooth scroll for anchor links ────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = document.querySelector('.nav')?.offsetHeight || 52;
      window.scrollTo({ top: target.offsetTop - navH - 20, behavior: 'smooth' });
    }
  });
});

// ── Nav shadow on scroll ───────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  nav.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(0,0,0,0.08)'
    : 'none';
});
