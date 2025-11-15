import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { navLinks } from '@/constants';
import { Link, useLocation } from 'react-router-dom';

const sidebarVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  exit: {
    x: '100%',
    transition: { type: 'tween', duration: 0.5 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 160 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};
export default function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const scrollRef = useRef(null);
  const location = useLocation();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={sidebarVariants as any}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`w-1/2 h-full fixed right-0 top-0  z-9999 overflow-y-hidden p-4 bg-black text-black`}
        >
          {/* close button */}
          <div className="flex">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              data-drawer-hide="drawer-navigation"
              aria-controls="drawer-navigation"
              className="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-black hover:bg-black-8 hover:text-black/95 cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="h-8 w-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          {/* close button */}

          {/* navlinks */}
          <motion.ul
            className="space-y-10 mt-24 text-center"
            ref={scrollRef}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                variants={linkVariants}
                role="listitem"
                className=" mx-4 font-black font-avenir text-[20px] md:text-[32px] leading-[100%] tracking-[0%]"
              >
                <Link
                  to={link.url}
                  className={`hover:text-light-yellow transition-colors ${location.pathname === link.url ? 'text-light-yellow' : 'text-white'}`}
                >
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
