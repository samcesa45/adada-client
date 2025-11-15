import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';

export const HomeRoute = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="min-h-screen font-helvetica w-full px-20">
        <main className="flex flex-col max-w-[1920px] mx-auto overflow-hidden">
          <div>
            <p className="text-black font-bold kumbh-sans text-3xl pt-20">
              Welcome to home
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
