import DonateSection from '@/components/donate';
import DonateHero from '@/components/hero/donate-hero';
import MainLayout from '@/components/layouts/main-layout';

export const DonationRoute = () => {
  return (
    <MainLayout>
      <DonateHero />
      <DonateSection />
    </MainLayout>
  );
};
