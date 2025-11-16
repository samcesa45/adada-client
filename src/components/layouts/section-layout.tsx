type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function SectionLayout({ children, className }: Props) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>{children}</section>
  );
}
