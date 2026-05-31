import styles from './style.module.css';

interface CtaLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function CtaLink({ href, children }: CtaLinkProps) {
  return (
    <a href={href} className={styles['m-cta-link']}>
      {children}
    </a>
  );
}
