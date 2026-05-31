import styles from './style.module.css';

interface EmailLinkProps {
  email: string;
}

export default function EmailLink({ email }: EmailLinkProps) {
  return (
    <a href={`mailto:${email}`} className={styles['m-email-link']}>
      {email}
    </a>
  );
}
