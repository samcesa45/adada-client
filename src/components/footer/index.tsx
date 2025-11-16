import { footerLink, galleryItems } from '@/constants';
import { Link } from 'react-router-dom';
import SectionLayout from '../layouts/section-layout';
import ContainerLayout from '../layouts/container-layout';
import logoImg from '/assets/logo/adada_logo.png';
import { Button } from '../ui/buttons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faFacebookF} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <>
      <SectionLayout className="bg-dark">
        <footer className="w-full h-full">
          <ContainerLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-3">
                <img
                  width={100}
                  height={100}
                  className="object-contain h-15 mb-6"
                  src={logoImg}
                  alt="logo Image"
                />
                <p className="font-avenir text-silver-grey leading-8 text-base mb-6">
                  Empowering the youth through education, mentorship, and
                  innovation.
                </p>
                <Button className="bg-primary hover:bg-light-yellow! hover:text-black text-white font-avenir! font-bold text-base leading-5 px-3.5 py-6.5 rounded-none border-0 transition-colors duration-300">
                  Donate Now
                </Button>
              </div>
              {/* useful links */}
              <div className="lg:col-span-2">
                <h3 className="text-white font-avenir font-black text-xl mb-6">
                  Useful links
                </h3>
                <ul className="space-y-3">
                  {footerLink[0]?.links.map((sublink) => (
                    <li
                      key={sublink.href}
                      className={`flex items-center not-last:pb-[calc(15px/2)] `}
                    >
                      <Link
                        to={sublink.href}
                        className="text-silver-grey hover:text-light-yellow hover:border-b-2 hover:border-b-light-yellow  text-sm md:leading-8 sm:text-base"
                      >
                        {sublink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* useful links */}

              {/* contact us */}
              <div className="lg:col-span-3">
                <h3 className="text-white font-avenir font-black text-xl mb-6">
                  Contact us
                </h3>
                <div className="space-y-6">
                  {footerLink[1]?.links.map((sublink) => (
                    <div key={sublink.label}>
                      <h6 className="text-silver-grey font-avenir font-semibold text-sm uppercase mb-2">
                        {sublink.subLabel}
                      </h6>
                      <p className="text-silver-grey text-base leading-7">
                        {sublink.address}
                      </p>
                    </div>
                  ))}
                  <Link
                    to=""
                    className="inline-block text-white font-avenir font-semibold text-sm uppercase border-b-2 border-white hover:text-light-yellow hover:border-light-yellow transition-colors duration-300"
                  >
                    Get Direction
                  </Link>
                </div>
              </div>
              {/* contact us */}

              {/* mailing box and gallery */}
              <div className="lg:col-span-4">
                <h3 className="text-white font-avenir font-black text-xl mb-6">
                  Subscribe to our Newsletters
                </h3>
                <form action="mb-8">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email address..."
                      className="w-full bg-transparent border border-silver-grey text-white placeholder:text-silver-grey px-4 py-3 pr-12 font-avenir text-base focus:outline-none focus:border-light-yellow transition-colors duration-300"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 top-0 h-full px-4 bg-primary hover:bg-light-yellow transition-colors duration-300 flex items-center justify-center"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>

                <div>
                  <h3 className="text-white font-avenir font-black text-xl my-6">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {galleryItems.slice(0, 6).map((item, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden aspect-square"
                      >
                        <img
                          src={item.src}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover cursor-pointer object-center grayscale hover:grayscale-0 transition-all duration-500 ease-in-out group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>

                  {/* social icons */}
                  <div className="flex gap-4 items-center">
                    <Link
                      to=""
                      className="text-white hover:text-primary transition-colors duration-300"
                    >
                       <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5"/>
                    </Link>
                    <Link
                      to=""
                      className="text-white hover:text-primary transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-5 h-5"/>
                    </Link>
                    <Link
                      to=""
                      className="text-white hover:text-primary transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5"/>
                    </Link>
                  </div>
                  {/* social icons */}
                </div>
              </div>
              {/*  mailing box and gallery */}
            </div>
          </ContainerLayout>
        </footer>
      </SectionLayout>
      <section className="flex my-auto mx-auto  bg-[#040B13] transition-colors duration-300  justify-center items-center px-8 pb-10 pt-[27px]">
        <p className="text-silver-grey font-avenir text-sm  md:leading-9  md:text-lg">
          &copy; Adada Education Foundation {new Date().getFullYear()}
        </p>
      </section>
    </>
  );
}
