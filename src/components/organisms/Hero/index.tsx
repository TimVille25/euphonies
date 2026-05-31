import { useEffect, useRef } from 'react';
import CtaLink from '../../molecules/CtaLink';
import styles from './style.module.css';

const GLYPHS = ['♩', '♪', '♫', '♬', '♭', '♮', '♯'];
const COLORS = [
  '#ecb62a',
  '#f2c84d',
  '#9c9080',
  '#c8a23a',
  '#f2c84d',
  '#ecb62a',
];

interface Note {
  x: number;
  y: number;
  size: number;
  glyph: string;
  color: string;
  vx: number;
  vy: number;
  phase: number;
  amp: number;
  freq: number;
  life: number;
  duration: number;
}

function makeNote(W: number, H: number): Note {
  const size = 14 + Math.random() * 22;
  return {
    x: Math.random() * W,
    y: H + size,
    size,
    glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    vx: (Math.random() - 0.5) * 0.3,
    vy: -(0.18 + Math.random() * 0.22),
    phase: Math.random() * Math.PI * 2,
    amp: 18 + Math.random() * 24,
    freq: 0.0004 + Math.random() * 0.0004,
    life: 0,
    duration: 18000 + Math.random() * 14000,
  };
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let animId: number;

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas!.width = W * devicePixelRatio;
      canvas!.height = H * devicePixelRatio;
      ctx!.scale(devicePixelRatio, devicePixelRatio);
    }

    resize();
    window.addEventListener('resize', resize);

    const notes: Note[] = Array.from({ length: 11 }, () => {
      const n = makeNote(W, H);
      n.y = Math.random() * H;
      n.life = Math.random() * n.duration * 0.6;
      return n;
    });

    let last = performance.now();

    function draw(now: number) {
      const dt = now - last;
      last = now;

      ctx!.clearRect(0, 0, W, H);
      if (Math.random() < 0.004) notes.push(makeNote(W, H));

      ctx!.textAlign = 'center';
      ctx!.textBaseline = 'middle';

      for (let i = notes.length - 1; i >= 0; i--) {
        const n = notes[i];
        n.life += dt;
        const progress = n.life / n.duration;

        let alpha: number;
        if (progress < 0.2) alpha = progress / 0.2;
        else if (progress < 0.75) alpha = 1;
        else alpha = 1 - (progress - 0.75) / 0.25;
        alpha = Math.max(0, alpha) * 0.28;

        n.x += n.vx + Math.sin(now * n.freq + n.phase) * 0.15;
        n.y += n.vy;

        ctx!.globalAlpha = alpha;
        ctx!.fillStyle = n.color;
        ctx!.font = `${n.size}px serif`;
        ctx!.fillText(n.glyph, n.x, n.y);

        if (n.life >= n.duration || n.y < -n.size * 2) {
          notes.splice(i, 1);
        }
      }

      ctx!.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="accueil" className={styles['o-hero']}>
      <canvas ref={canvasRef} className={styles['o-hero__canvas']} aria-hidden="true" />
      <div className={styles['o-hero__content']}>
        <p className={styles['o-hero__eyebrow']}>Ensemble vocal classique à Besançon</p>
        <h1>
          Euphonie<span>S</span>
          <span className={styles['o-hero__tagline']}>Musique Renaissance, classique et contemporaine a cappella en Franche-Comté</span>
        </h1>
        <div className={styles['o-hero__rule']} />
        <CtaLink href="#presentation">Découvrir le projet</CtaLink>
      </div>
    </section>
  );
}
