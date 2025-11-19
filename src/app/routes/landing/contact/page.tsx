import Contact from '@/components/contact';
import InneHero from '@/components/hero/inner-hero';
import MainLayout from '@/components/layouts/main-layout';

export const ContactRoute = () => {
  return (
    <MainLayout>
      <InneHero
        title="Get in Touch With Us"
        para="We'd love to hear from you! Whether you're a student, donor, or partner, your voice matters. Reach out and be part of Adada's mission to empower the youth of Enugu North"
      />
      <Contact />
    </MainLayout>
  );
};
