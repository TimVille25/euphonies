import styles from './style.module.css';

export default function Footer() {
  return (
    <footer className={styles['o-footer']}>
      <p className={styles['o-footer__seo']}>
        Basé à Besançon, EuphonieS est un chœur de chambre composé de douze chanteurs. L&rsquo;ensemble vocal interprète un répertoire de musique classique et contemporaine a cappella lors de concerts en Bourgogne-Franche-Comté. Les programmes mettent à l&rsquo;honneur la polyphonie, le chant choral et la richesse des répertoires vocaux européens. EuphonieS se produit dans des églises, chapelles, salles patrimoniales et lieux culturels afin de proposer des concerts intimistes favorisant la proximité entre les artistes et le public. L&rsquo;ensemble participe à la diffusion de la musique chorale à Besançon, dans le Doubs et plus largement en Franche-Comté.
      </p>
      <p>Euphonie<span>S</span> — Ensemble vocal · Association loi 1901</p>
    </footer>
  );
}
