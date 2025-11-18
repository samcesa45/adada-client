import ProgramsHero from '@/components/hero/programs-hero';
import MainLayout from '@/components/layouts/main-layout';
import BecomeVolunteerHero from '@/components/programs/become-volunteerhero';
import KeyPrograms from '@/components/programs/key-programs';
import Testimonials from '@/components/testimonials';

export const ProgramsRoute = () => {
  return (
    <MainLayout>
      <ProgramsHero />
      <KeyPrograms />
      <Testimonials />
      <BecomeVolunteerHero />
    </MainLayout>
  );
};
