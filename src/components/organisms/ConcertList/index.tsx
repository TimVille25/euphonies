import { useEffect, useState } from 'react';
import type { Concert } from '../../../types/concert';
import JsonLd from '../../atoms/JsonLd';
import SectionHeader from '../../molecules/SectionHeader';
import ConcertCard from '../../molecules/ConcertCard';
import styles from './style.module.css';

const CHOIR_URL = 'https://timville25.github.io/euphonies/';

function buildEventSchema(concert: Concert): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: concert.title,
    description: concert.description,
    eventStatus: 'https://schema.org/EventScheduled',
    organizer: {
      '@type': 'MusicGroup',
      name: 'EuphonieS',
      url: CHOIR_URL,
    },
  };
  if (concert.date) {
    schema.startDate = concert.date;
  }
  return schema;
}

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
      {concerts.map((concert) => (
        <JsonLd key={concert.id} schema={buildEventSchema(concert)} />
      ))}
      <div className={styles['l-container']}>
        <SectionHeader label="Agenda" heading={<>Prochains <em>concerts</em></>} />
        <p>Nos concerts de musique classique a cappella sont proposés à Besançon, dans le Doubs et dans toute la Franche-Comté.
          Chaque programme de chant choral est conçu pour favoriser la proximité entre les chanteurs et le public.</p>
        <div className={styles['o-concerts']}>
          {concerts.map((concert) => (
            <ConcertCard key={concert.id} concert={concert} />
          ))}
        </div>
      </div>
    </section>
  );
}
