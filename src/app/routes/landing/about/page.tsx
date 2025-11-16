import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Team from '@/components/team';

export const AboutRoute = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="min-h-screen w-full">
        <main className="flex flex-col  mx-auto overflow-hidden">
          <Team />
        </main>
      </div>
      <Footer />
    </>
  );
};
