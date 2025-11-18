import WhyBecomeAmbassador from '@/components/ambassador';
import JoinTheMovement from '@/components/ambassador/join-the-movement';
import AmbassadorHero from '@/components/hero/ambassador-hero';
import MainLayout from '@/components/layouts/main-layout';
import BecomeVolunteerHero from '@/components/programs/become-volunteerhero';

export const AmbassadorsRoute = () => {
  return (
    <MainLayout>
      <AmbassadorHero />
      <WhyBecomeAmbassador />
      <JoinTheMovement />
      <BecomeVolunteerHero />
    </MainLayout>
  );
};
