import AboutUsHero from '@/components/hero/aboutus-hero';
import MainLayout from '@/components/layouts/main-layout';
import Team from '@/components/team';
import WhoWeAre from '@/constants/who-we-are';

export const AboutRoute = () => {
  return (
    <MainLayout>
      <AboutUsHero />
      <WhoWeAre />
      <Team />
    </MainLayout>
  );
};
