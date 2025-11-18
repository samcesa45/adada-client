import Hero from '@/components/hero';
import Mission from '@/components/mission';
import OurPrograms from '@/components/our-programs';
import Gallery from '@/components/gallery';
import ImpactStories from '@/components/impact-stories';
import UpcomingEvents from '@/components/events';
import Faq from '@/components/faq';
import MainLayout from '@/components/layouts/main-layout';
import BecomeVolunteerHero from '@/components/programs/become-volunteerhero';

export const HomeRoute = () => {
  return (
    <MainLayout>
      <Hero />
      <Mission />
      <OurPrograms />
      <Gallery />
      <ImpactStories />
      <UpcomingEvents />
      <Faq />
      <BecomeVolunteerHero />
    </MainLayout>
  );
};
