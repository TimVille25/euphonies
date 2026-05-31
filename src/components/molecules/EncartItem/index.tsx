import styles from './style.module.css';

interface EncartItemProps {
  children: React.ReactNode;
}

export default function EncartItem({ children }: EncartItemProps) {
  return <div className={styles['m-encart-item']}>{children}</div>;
}
