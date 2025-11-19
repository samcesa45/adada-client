type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function SectionLayout({ children, className }: Props) {
  return (
    <section className={`py-8 sm:py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}
