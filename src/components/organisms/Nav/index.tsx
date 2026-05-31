import { useState } from 'react';
import styles from './style.module.css';

const NAV_LINKS = [
  { href: '#presentation', label: 'Le chœur' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#rejoindre', label: 'Rejoindre' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <nav className={styles['o-nav']}>
      <a href="#accueil" className={styles['o-nav__logo']}>
        Euphonie<span>S</span>
      </a>
      <button
        className={`${styles['o-nav__burger']}${open ? ` ${styles['is-open']}` : ''}`}
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul
        className={`${styles['o-nav__links']}${open ? ` ${styles['is-open']}` : ''}`}
        role="list"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={close}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
