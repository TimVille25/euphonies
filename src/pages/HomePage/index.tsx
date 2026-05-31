import MainLayout from '../../templates/MainLayout';
import Hero from '../../components/organisms/Hero';
import PresentationSection from '../../components/organisms/PresentationSection';
import ConcertList from '../../components/organisms/ConcertList';
import JoinSection from '../../components/organisms/JoinSection';
import ContactSection from '../../components/organisms/ContactSection';

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <PresentationSection />
      <ConcertList />
      <JoinSection />
      <ContactSection />
    </MainLayout>
  );
}
