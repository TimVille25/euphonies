import Nav from '../../components/organisms/Nav';
import Footer from '../../components/organisms/Footer';
import styles from './style.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Nav />
      <main className={styles['l-main']}>{children}</main>
      <Footer />
    </>
  );
}
