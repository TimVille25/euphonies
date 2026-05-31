import type { Concert } from '../../../types/concert';
import Tag from '../../atoms/Tag';
import styles from './style.module.css';

interface ConcertCardProps {
  concert: Concert;
}

export default function ConcertCard({ concert }: ConcertCardProps) {
  return (
    <article className={styles['m-concert']}>
      <div className={styles['m-concert__date']}>
        <div className={styles['m-concert__jour']}>{concert.day}</div>
        <div className={styles['m-concert__mois']}>{concert.month}</div>
      </div>
      <div className={styles['m-concert__info']}>
        <h3>{concert.title}</h3>
        <p>{concert.description}</p>
      </div>
      <div className={styles['m-concert__tag']}>
        <Tag>{concert.tag}</Tag>
      </div>
    </article>
  );
}
