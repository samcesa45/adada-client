import { navLinks } from '@/constants';
import { NavLink } from 'react-router-dom';
import logoImg from '/assets/logo/adada_logo.png';
import { Button } from '../ui/buttons';
import MobileNav from '../mobile-menu';
import { useState } from 'react';

export default function Navbar() {
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
                className="mr-[50px] xl:mx-[50px] hidden xl:flex"
              >
                <NavLink
                  to={link.url}
                  end={link.url === '/'}
                  className={({ isActive }) =>
                    `group relative inline-flex transition-colors duration-300 text-sm hover:text-primary text-center lg:text-[18px] lg:leading-5 text-nowrap font-avenir font-black ${isActive ? 'text-primary' : ''}`
                  }
                >
                  {/* {link.text} */}
                  <span className="relative inline-block">
                    {/* text */}
                    <span className="relative z-10">{link.text}</span>

                    {/* underline */}
                    <span className="absolute top-6 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </NavLink>
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
