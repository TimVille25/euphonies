import SectionHeader from '../../molecules/SectionHeader';
import Pilier from '../../molecules/Pilier';
import Stat from '../../molecules/Stat';
import styles from './style.module.css';

const PILIERS = [
  {
    titre: 'Des concerts en lieux choisis',
    description:
      'Chapelles, salles patrimoniales, espaces insolites — des lieux dont l\'acoustique et l\'atmosphère magnifient naturellement le chant choral.',
  },
  {
    titre: 'Un répertoire qui traverse les siècles',
    description:
      'Polyphonies de la Renaissance, motets baroques, mélodies romantiques, créations contemporaines — un voyage musical qui relie les époques par la seule voix.',
  },
  {
    titre: 'L\'intimité d\'un petit ensemble',
    description:
      'Douze voix, c\'est l\'échelle où l\'on entend chaque pupitre, où l\'interprétation est précise et vivante, où le contact avec le public devient une part du concert.',
  },
];

const STATS = [
  { value: 12, unit: 'voix', label: 'Un ensemble intime' },
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
              heading={<>La voix humaine, <em>à portée de main</em></>}
            />
            <p>
              Euphonie<span style={{ color: 'var(--color-gold)' }}>S</span> est un ensemble vocal de
              douze voix basé à Besançon. Nous proposons des concerts de musique chorale classique et
              Renaissance dans le Doubs et en Franche-Comté.
            </p>
            <p>
              Notre répertoire puise dans la grande tradition classique et polyphonique, de la
              Renaissance aux compositeurs d'aujourd'hui. Des œuvres choisies pour leur beauté, leur
              profondeur, et l'émotion singulière que seules des voix humaines chantant ensemble savent
              produire.
            </p>
            <p>
              À douze chanteurs, la musique se vit différemment. Pas de fosse d'orchestre, pas de
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
