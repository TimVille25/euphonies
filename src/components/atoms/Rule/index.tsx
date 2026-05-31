import styles from './style.module.css';

interface RuleProps {
  center?: boolean;
}

export default function Rule({ center = false }: RuleProps) {
  return (
    <div
      className={`${styles['a-rule']}${center ? ` ${styles['a-rule--center']}` : ''}`}
    />
  );
}
