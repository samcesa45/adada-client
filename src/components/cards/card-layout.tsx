type CardProps = {
  children: React.ReactNode;
  padding?: string;
  rounded?: string;
  shadow?: string;
  border?: string;
  borderColor?: string;
  color?: string;
  className: string;
};
export default function CardLayout({
  children,
  padding = 'p-4',
  rounded = '',
  shadow = 'shadow-none',
  border = 'border',
  borderColor = 'border-light-grey',
  color = 'bg-white',
  className,
}: CardProps) {
  return (
    <div
      className={`${padding} ${rounded} ${shadow} ${border} ${borderColor} ${color} ${className}`}
    >
      {children}
    </div>
  );
}
