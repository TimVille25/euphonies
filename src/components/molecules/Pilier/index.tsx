import styles from './style.module.css';

interface PilierProps {
  titre: string;
  description: string;
}

export default function Pilier({ titre, description }: PilierProps) {
  return (
    <div className={styles['m-pilier']}>
      <p className={styles['m-pilier__titre']}>{titre}</p>
      <p className={styles['m-pilier__desc']}>{description}</p>
    </div>
  );
}
