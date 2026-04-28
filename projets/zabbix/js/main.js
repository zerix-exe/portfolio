// ═══════════════════════════════════════════
//  ZABBIX PAGE — Lightbox
// ═══════════════════════════════════════════

function openLightbox(src, caption) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-caption').textContent = caption || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// Fermer avec Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Clic sur l'image hero l'ouvre aussi
document.querySelector('.project-hero-img')?.addEventListener('click', function() {
  openLightbox(this.src, this.alt);
});
