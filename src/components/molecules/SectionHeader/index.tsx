import Label from '../../atoms/Label';
import Rule from '../../atoms/Rule';
import styles from './style.module.css';

interface SectionHeaderProps {
  label: string;
  heading: React.ReactNode;
  center?: boolean;
}

export default function SectionHeader({ label, heading, center = false }: SectionHeaderProps) {
  return (
    <div className={`${styles['m-section-header']}${center ? ` ${styles['m-section-header--center']}` : ''}`}>
      <Label>{label}</Label>
      <h2>{heading}</h2>
      <Rule center={center} />
    </div>
  );
}
