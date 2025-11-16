import ContainerLayout from '../layouts/container-layout';
import SectionLayout from '../layouts/section-layout';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { teamItems } from '@/constants';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../animation';

export default function Team() {
  return (
    <SectionLayout className="bg-dark my-16">
      <ContainerLayout>
        {/* Header */}
        <div className="text-center pb-6 sm:pb-10">
          <h2 className="text-white font-avenir font-black text-4xl sm:text-[42px] md:text-[56px] 2xl:text-[72px] leading-[1.1em]">
            Meet Our Team
          </h2>
          <div className="border-light-yellow mx-auto border-4 lg:border-6 w-20 sm:w-24 my-3"></div>
        </div>
        <div className="mx-auto pb-6 sm:pb-14">
          <p className="text-white text-center font-avenir text-base sm:text-[20px] leading-[1.5em]">
            Behind every success story is a team of passionate educators,
            professionals, and community leaders the Adada Development
            Ambassadors — who contribute their time, expertise, and resources to
            ensure that the Foundation's mission continues to thrive.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamItems.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants as any}
              className="group relative overflow-hidden"
            >
              <figure className="relative overflow-hidden  aspect-square">
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {/* social icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                  <div className="flex gap-4 items-center justify-center transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <Link
                      to=""
                      className="text-white shadow-lg hover:text-primary transition-all duration-300 transform hover:scale-105"
                    >
                      <FontAwesomeIcon icon={faFacebook} size={'2x'} />
                    </Link>
                    <Link
                      to=""
                      className="text-white shadow-lg hover:text-primary transition-all duration-300 transform hover:scale-105"
                    >
                      <FontAwesomeIcon icon={faInstagram} size={'2x'} />
                    </Link>
                    <Link
                      to=""
                      className="text-white shadow-lg hover:text-primary transition-all duration-300 transform hover:scale-105"
                    >
                      <FontAwesomeIcon icon={faXTwitter} size={'2x'} />
                    </Link>
                  </div>
                </div>
                {/* social icons */}
              </figure>
              {/* member info */}
              <div className="pt-[25px]">
                <h3 className="text-light-yellow font-avenir font-black text-2xl leading-[1.1em] mb-2.5">
                  {member.name}
                </h3>
                <div className="text-white text-base leading-[1.5em] font-avenir mb-3.5">
                  {member.position}
                </div>
              </div>
              {/* member info */}
            </motion.div>
          ))}
        </motion.div>
      </ContainerLayout>
    </SectionLayout>
  );
}
