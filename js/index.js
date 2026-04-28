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

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});
