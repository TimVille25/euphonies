// On pose js-ready sur <body> avant d'initialiser l'observer.
// Ainsi les éléments ne passent jamais à opacity:0 si JS échoue.
document.body.classList.add('js-ready');

// ── Notes flottantes ──────────────────────────────────────
(function () {
  const canvas = document.getElementById('notes-canvas');
  const ctx = canvas.getContext('2d');

  // Glyphes et palette de couleurs en accord avec la charte
  const GLYPHS = ['♩','♪','♫','♬','♭','♮','♯'];
  const COLORS = [
    '#a8855a', // gold principal
    '#c9a97a', // gold light
    '#7a6f62', // ink muted
    '#3d3830', // ink soft
    '#c9a97a', // gold light (pondération plus forte)
    '#a8855a', // gold principal (pondération plus forte)
  ];

  // Redimensionner le canvas en pixels réels
  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width  = rect.width  * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    W = rect.width;
    H = rect.height;
  }
  let W, H;
  resize();
  window.addEventListener('resize', () => { resize(); });

  // Créer une note avec des propriétés aléatoires
  function makeNote() {
    const size = 14 + Math.random() * 22;
    return {
      x:       Math.random() * W,
      y:       H + size,
      size,
      glyph:   GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      color:   COLORS[Math.floor(Math.random() * COLORS.length)],
      vx:      (Math.random() - 0.5) * 0.3,
      vy:      -(0.18 + Math.random() * 0.22),
      opacity: 0,
      phase:   Math.random() * Math.PI * 2,
      amp:     18 + Math.random() * 24,
      freq:    0.0004 + Math.random() * 0.0004,
      life:    0,
      born:    performance.now(),
      duration: 18000 + Math.random() * 14000,
    };
  }

  // Population initiale — répartie sur toute la hauteur pour éviter
  // que tout apparaisse en même temps au démarrage
  const notes = Array.from({ length: 11 }, () => {
    const n = makeNote();
    n.y = Math.random() * H;
    n.life = Math.random() * n.duration * 0.6;
    return n;
  });

  let last = performance.now();

  function draw(now) {
    const dt = now - last;
    last = now;

    // Effacer
    const rect = canvas.parentElement.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Faire naître une nouvelle note de temps en temps
    if (Math.random() < 0.004) notes.push(makeNote());

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = notes.length - 1; i >= 0; i--) {
      const n = notes[i];
      n.life += dt;

      const progress = n.life / n.duration; // 0 → 1

      // Courbe d'opacité : monte en 20%, plateau jusqu'à 75%, descend jusqu'à 100%
      let alpha;
      if      (progress < 0.20) alpha = progress / 0.20;
      else if (progress < 0.75) alpha = 1;
      else                      alpha = 1 - (progress - 0.75) / 0.25;
      alpha = Math.max(0, alpha) * 0.28; // plus visible

      // Mouvement
      n.x += n.vx + Math.sin(now * n.freq + n.phase) * 0.15;
      n.y += n.vy;

      // Dessiner
      ctx.globalAlpha = alpha;
      ctx.fillStyle   = n.color;
      ctx.font        = `${n.size}px serif`;
      ctx.fillText(n.glyph, n.x, n.y);

      // Supprimer si hors écran ou vie écoulée
      if (n.life >= n.duration || n.y < -n.size * 2) {
        notes.splice(i, 1);
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
})();
// ─────────────────────────────────────────────────────────

// Hamburger
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  burger.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', false);
  });
});

// Fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.a-fade-in').forEach(el => observer.observe(el));
