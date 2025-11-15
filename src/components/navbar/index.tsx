import { navLinks } from '@/constants';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '/assets/logo/adada_logo.png';
import { Button } from '../ui/buttons';
import MobileNav from '../mobile-menu';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 w-full xl:w-[1440px] bg-white mt-0 mb-0  z-9999">
        <nav className="h-[90px] px-4 lg:px-20 xl:h-[110px] flex items-center w-full justify-between">
          <div className="mr-8 lg:mr-[90.5px] flex-1">
            <img
              width={100}
              height={100}
              className="object-contain h-15"
              src={logoImg}
              alt="logo Image"
            />
          </div>
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="mr-[73px] xl:mx-[73px] hidden xl:flex"
              >
                <Link
                  to={link.url}
                  className={`text-sm hover:text-primary text-center lg:text-[18px] lg:leading-5 text-nowrap font-avenir font-black ${location.pathname.startsWith(link.url) ? 'text-primary border-b-4 w-1/2' : ''}`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="inline-block  ml-[73px] mr-6.5">
            <Button className="bg-primary hover:bg-light-yellow! hover:text-black text-white font-avenir! font-bold text-base leading-5 px-[13px] py-[25px]text-white rounded-none border-0">
              Donate Now
            </Button>
          </div>
          {/* hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <img
              aria-hidden
              src="/assets/svgs/hamburger.svg"
              alt="hamburger icon"
              width={40}
              height={40}
              className="object-contain text-black   xl:hidden cursor-pointer"
            />
          </button>
          {/* hamburger */}
        </nav>
      </header>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
