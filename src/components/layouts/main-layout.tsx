import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full flex flex-col mx-auto overflow-hidden">
        {children}
      </main>

      <Footer />
    </>
  );
}
