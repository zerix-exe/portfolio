// ═══════════════════════════════════════════
//  INDEX PAGE — js/index.js
// ═══════════════════════════════════════════

// ── Modal documents ──────────────────────
function openDoc(src, title) {
  const modal = document.getElementById('docModal');
  document.getElementById('docModalTitle').textContent = title;
  document.getElementById('docFrame').src = src;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDoc() {
  const modal = document.getElementById('docModal');
  modal.classList.remove('open');
  document.getElementById('docFrame').src = '';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeDoc(); closeContactPopup(); }
});

// ── Menu mobile ───────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// ── Contact popup ─────────────────────────
function toggleContactPopup(e) {
  e.stopPropagation();
  const overlay = document.getElementById('contactOverlay');
  overlay.classList.toggle('open');
}

function closeContactPopup() {
  document.getElementById('contactOverlay')?.classList.remove('open');
}

// Fermer avec Escape

// ── Nav highlight au scroll ───────────────
(function () {
  const SECTION_IDS = ['about', 'competences', 'parcours', 'certifications', 'projets-section'];
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    const scrollY = window.scrollY + 120;
    let current = '';
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) current = id;
    });
    navLinks.forEach(a => {
      a.classList.remove('nav-active');
      if (current && a.getAttribute('href') === '#' + current) a.classList.add('nav-active');
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
