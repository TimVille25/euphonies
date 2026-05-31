import StatNumber from '../../atoms/StatNumber';
import styles from './style.module.css';

interface StatProps {
  value: string | number;
  unit: string;
  label: string;
}

export default function Stat({ value, unit, label }: StatProps) {
  return (
    <div className={styles['m-stat']}>
      <StatNumber value={value} unit={unit} />
      <p className={styles['m-stat__label']}>{label}</p>
    </div>
  );
}
