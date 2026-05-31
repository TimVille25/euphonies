import styles from './style.module.css';

interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return <span className={styles['a-tag']}>{children}</span>;
}
