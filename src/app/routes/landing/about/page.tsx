import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Team from '@/components/team';
import WhoWeAre from '@/constants/who-we-are';

export const AboutRoute = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="min-h-screen w-full">
        <main className="flex flex-col  mx-auto overflow-hidden">
          <WhoWeAre />
          <Team />
        </main>
      </div>
      <Footer />
    </>
  );
};
