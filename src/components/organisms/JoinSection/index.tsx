import SectionHeader from '../../molecules/SectionHeader';
import Etape from '../../molecules/Etape';
import EncartItem from '../../molecules/EncartItem';
import styles from './style.module.css';

const ETAPES = [
  {
    titre: "Séance d'essai",
    description:
      "Vous participez à une répétition avec partitions et supports transmis à l'avance, pour découvrir l'ensemble vocal de l'intérieur.",
  },
  {
    titre: 'Échange avec la direction artistique',
    description:
      'Un temps de dialogue avec le chef de chœur pour évoquer votre parcours vocal et vos attentes.',
  },
  {
    titre: 'Rencontre avec les choristes',
    description:
      "Un échange avec les membres pour évaluer ensemble l'adéquation avec le projet et le fonctionnement du groupe.",
  },
  {
    titre: 'Décision collégiale',
    description:
      'La décision est prise collectivement, hors de votre présence, puis notifiée dans les meilleurs délais.',
  },
];

const ENCART_ITEMS = [
  'Partitions, enregistrements de travail et supports pédagogiques fournis plusieurs semaines avant les répétitions.',
  "La lecture musicale n'est pas requise — les outils sont conçus pour permettre à chaque choriste de progresser de manière autonome.",
  'Un cadre bienveillant et exigeant, avec un travail approfondi sur la musicalité et l\'interprétation.',
  'Une participation pleine à la vie artistique du chœur, du choix du répertoire aux décisions collectives.',
];

export default function JoinSection() {
  return (
    <section id="rejoindre" className={`${styles['l-section']} ${styles['l-section--parchment']}`}>
      <div className={styles['l-container']}>
        <div className={styles['o-rejoindre__grid']}>
          <div>
            <SectionHeader
              label="Nous rejoindre"
              heading={
                <>
                  Chanter avec Euphonie<span style={{ color: 'var(--accent)' }}>S</span>
                </>
              }
            />
            <p>
              Vous êtes chanteur ou chanteuse et souhaitez rejoindre un ensemble vocal à Besançon ?
              EuphonieS, chœur de chambre a cappella en Franche-Comté, accueille régulièrement de
              nouveaux choristes passionnés de musique classique et de chant choral.
            </p>
            <p>
              L'intégration au chœur se fait à l'issue d'un processus en quatre étapes, conçu pour
              permettre à chaque candidat de vérifier que le projet correspond bien à ses attentes.
            </p>
            <div className={styles['o-etapes']}>
              {ETAPES.map((e) => (
                <Etape key={e.titre} titre={e.titre} description={e.description} />
              ))}
            </div>
          </div>
          <div>
            <div className={styles['o-encart']}>
              <p className={styles['o-encart__titre']}>
                Ce que le chœur <em>vous apporte</em>
              </p>
              {ENCART_ITEMS.map((item) => (
                <EncartItem key={item}>{item}</EncartItem>
              ))}
              <p className={styles['o-encart__note']}>
                « Les répétitions ont lieu une fois par mois, le samedi ou le dimanche, pour préparer
                des concerts donnés à Besançon et dans le Doubs au fil de la saison. »
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
