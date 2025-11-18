import { ambassadorItems } from '@/constants';
import ContainerLayout from '../layouts/container-layout';
import SectionLayout from '../layouts/section-layout';
import CardLayout from '../cards/card-layout';
import { containerVariants } from '../animation';
import { motion } from 'motion/react';

export default function WhyBecomeAmbassador() {
  return (
    <SectionLayout>
      <ContainerLayout>
        {/* Header */}
        <div className="text-center pb-6 sm:pb-10">
          <h2 className="text-dark font-avenir font-black text-4xl sm:text-[42px] md:text-[56px] 2xl:text-[72px] leading-[1.1em]">
            Why Become an Ambassador?
          </h2>
          <div className="border-light-yellow mx-auto border-4 lg:border-6 w-20 sm:w-24 my-3"></div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {ambassadorItems.map((item) => (
              <CardLayout
                className="border-0 rounded-none! inner-box w-full group transition-all duration-300 ease-in-out pb-8"
                padding="0"
              >
                <div className="relative overflow-hidden rounded-none!">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-[294px] object-cover object-top rounded-none transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="my-4 px-8">
                  <h4 className="text-dark font-avenir cursor-pointer hover:text-primary font-black sm:mb-2 sm:text-2xl 2xl:text-[28px] leading-[1.1em]">
                    {item.title}
                  </h4>

                  <p className="text-grey font-avenir text-lg 2xl:text-xl leading-[1.5em] mb-5">
                    {item.content}
                  </p>
                </div>
              </CardLayout>
            ))}
          </div>
        </motion.div>
      </ContainerLayout>
    </SectionLayout>
  );
}
