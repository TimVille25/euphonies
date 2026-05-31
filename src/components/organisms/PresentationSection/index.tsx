import SectionHeader from '../../molecules/SectionHeader';
import Pilier from '../../molecules/Pilier';
import Stat from '../../molecules/Stat';
import styles from './style.module.css';

const PILIERS = [
  {
    titre: 'Des concerts en lieux choisis',
    description:
      'Chapelles, salles patrimoniales et espaces insolites en Franche-Comté — des lieux dont l\'acoustique magnifie naturellement le chant choral a cappella.',
  },
  {
    titre: 'Un répertoire qui traverse les siècles',
    description:
      'Polyphonies de la Renaissance, motets baroques, lieder romantiques, œuvres contemporaines — un voyage de musique classique qui relie les époques par le seul chant a cappella.',
  },
  {
    titre: 'L\'intimité d\'un chœur de chambre',
    description:
      'À l\'échelle d\'un ensemble de chambre, chaque pupitre s\'entend distinctement : l\'interprétation est précise et vivante, et le contact avec le public devient une part du concert.',
  },
];

const STATS = [
  { value: 4, unit: 'pupitres', label: 'Soprano · Alto · Ténor · Basse' },
  { value: 0, unit: 'instrument', label: 'Voix seules, a cappella' },
];

export default function PresentationSection() {
  return (
    <section id="presentation" className={`${styles['l-section']} ${styles['l-section--parchment']}`}>
      <div className={styles['l-container']}>
        <div className={styles['o-presentation__grid']}>
          <div>
            <SectionHeader
              label="Le chœur"
              heading="Un ensemble vocal de musique classique et contemporaine"
            />
            <p>
              Euphonie<span style={{ color: 'var(--accent)' }}>S</span> est un ensemble vocal de chambre
              basé à Besançon. Nous proposons des concerts de musique classique a cappella
              dans le Doubs et en Franche-Comté.
            </p>
            <p>
              Notre répertoire de chant choral traverse les siècles, de la polyphonie Renaissance à la musique classique et contemporaine.
            </p>
            <p>
              En ensemble de chambre, le chant choral a cappella se vit autrement. Pas de fosse d'orchestre, pas de
              scène lointaine : juste des voix, l'espace acoustique, et vous.
            </p>
            <div className={styles['o-piliers']}>
              {PILIERS.map((p) => (
                <Pilier key={p.titre} titre={p.titre} description={p.description} />
              ))}
            </div>
          </div>
          <div>
            <div className={styles['o-stats']}>
              {STATS.map((s) => (
                <Stat key={s.unit} value={s.value} unit={s.unit} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
