import styles from './style.module.css';

interface StatNumberProps {
  value: string | number;
  unit: string;
}

export default function StatNumber({ value, unit }: StatNumberProps) {
  return (
    <div className={styles['a-stat-number']}>
      {value}
      <span>{unit}</span>
    </div>
  );
}
