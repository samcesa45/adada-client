import Hero from '@/components/hero';
import MainLayout from '@/components/layouts/main-layout';
import Team from '@/components/team';
import WhoWeAre from '@/constants/who-we-are';

export const AboutRoute = () => {
  return (
    <MainLayout>
      <Hero />
      <WhoWeAre />
      <Team />
    </MainLayout>
  );
};
