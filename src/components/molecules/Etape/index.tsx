import styles from './style.module.css';

interface EtapeProps {
  titre: string;
  description: string;
}

export default function Etape({ titre, description }: EtapeProps) {
  return (
    <div className={styles['m-etape']}>
      <div className={styles['m-etape__num']} aria-hidden="true" />
      <div className={styles['m-etape__body']}>
        <h4>{titre}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
