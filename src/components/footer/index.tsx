import { footerLinks } from '@/constants';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-light-green w-full h-full">
      <section className="py-14 md:pt-[88px] md:pb-[77px] px-8 max-w-7xl  mx-auto flex flex-col justify-center items-center">
        <p className="font-inter font-semibold italic text-center mb-4 md:leading-8 md:text-2xl">
          Empowering the youth through education, mentorship, and innovation.
        </p>
        <ul className="flex items-center md:gap-4">
          {footerLinks.map((link, index) => (
            <li
              key={link.id}
              className={`p-4 border-r-2 flex items-center ${index === 0 ? 'border-l-2 h-[25px]' : 'border-r-2 h-[25px]'}`}
            >
              <Link
                to={link.url}
                className="text-primary hover:text-primary/55 font-semibold text-sm md:leading-8  md:text-xl"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex  bg-white  justify-center items-center px-8 pb-10 pt-[27px]">
        <p className="text-primary font-bold text-sm  md:leading-9  md:text-lg">
          &copy; Adada Education Foundation {new Date().getFullYear()}
        </p>
      </section>
    </footer>
  );
}
