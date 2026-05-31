import SectionHeader from '../../molecules/SectionHeader';
import EmailLink from '../../molecules/EmailLink';
import styles from './style.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={`${styles['l-section']} ${styles['l-section--light']}`}>
      <div className={styles['l-container']}>
        <div className={styles['o-contact']}>
          <SectionHeader
            label="Contact"
            heading={
              <>
                Écrire à Euphonie<span style={{ color: 'var(--accent)' }}>S</span>
              </>
            }
            center
          />
          <p>
            Pour toute question sur le chœur, une séance d'essai ou simplement pour en savoir plus,
            n'hésitez pas à nous écrire.
          </p>
          <EmailLink email="contact@euphonies.fr" />
          <p className={styles['o-contact__note']}>Nous vous répondrons dans les meilleurs délais.</p>
        </div>
      </div>
    </section>
  );
}
