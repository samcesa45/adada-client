import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Mission from '@/components/mission';
import OurPrograms from '@/components/our-programs';
import Gallery from '@/components/gallery';
import ImpactStories from '@/components/impact-stories';
import UpcomingEvents from '@/components/events';

export const HomeRoute = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="min-h-screen w-full">
        <main className="flex flex-col max-w-[1920px] mx-auto overflow-hidden">
          <Mission />
          <OurPrograms />
          <Gallery />
          <ImpactStories />
          <UpcomingEvents />
        </main>
      </div>
      <Footer />
    </>
  );
};
