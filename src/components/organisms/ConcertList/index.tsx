import { useEffect, useState } from 'react';
import type { Concert } from '../../../types/concert';
import SectionHeader from '../../molecules/SectionHeader';
import ConcertCard from '../../molecules/ConcertCard';
import styles from './style.module.css';

export default function ConcertList() {
  const [concerts, setConcerts] = useState<Concert[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}concerts.json`)
      .then((r) => r.json())
      .then((data: Concert[]) => setConcerts(data))
      .catch(() => {});
  }, []);

  return (
    <section id="agenda" className={`${styles['l-section']} ${styles['l-section--light']}`}>
      <div className={styles['l-container']}>
        <SectionHeader label="Agenda" heading={<>Prochains <em>concerts</em></>} />
        <p>On chante bientôt près de chez vous. Restez à l'écoute.</p>
        <div className={styles['o-concerts']}>
          {concerts.map((concert) => (
            <ConcertCard key={concert.id} concert={concert} />
          ))}
        </div>
      </div>
    </section>
  );
}
