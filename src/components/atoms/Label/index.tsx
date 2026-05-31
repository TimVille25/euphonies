import styles from './style.module.css';

interface LabelProps {
  children: React.ReactNode;
}

export default function Label({ children }: LabelProps) {
  return <span className={styles['a-label']}>{children}</span>;
}
