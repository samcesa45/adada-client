import { impactStoriesItems } from '@/constants';
import CardLayout from '../cards/card-layout';
import { Button } from '../ui/buttons';
import SectionLayout from '../layouts/section-layout';
import ContainerLayout from '../layouts/container-layout';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../animation';

export default function ImpactStories() {
  return (
    <SectionLayout>
      <ContainerLayout>
        <div className="text-center pb-6 sm:pb-10">
          <h2 className="text-dark font-avenir font-black text-4xl sm:text-[42px] md:text-[56px] 2xl:text-[72px] leading-[1.1em]">
            Impact Stories
          </h2>
          <div className="text-center border-light-yellow mx-auto border-4 lg:border-6 w-20 sm:w-25 my-3"></div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
        >
          {impactStoriesItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants as any}>
              <CardLayout className="border-0 rounded-none!  w-full group transition-all duration-300 ease-in-out ">
                <div className="relative overflow-hidden rounded-none!">
                  <img
                    width={'100%'}
                    height={'100%'}
                    src={item.image}
                    alt=""
                    className="w-[429.1px] h-[294.1px] max-h-full object-cover object-top rounded-none! transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="text-xs text-grey font-avenir flex leading-[1em] font-medium m-[0px_0px_10px_0px] mt-3 mb-1">
                  <div>
                    <span>By Samcesa45</span>
                  </div>
                  <div className="before:content-['|'] before:ml-[0.3rem] before:mr-[0.3rem]">
                    <span>18 Jan, 2024</span>
                  </div>
                </div>
                <div className="my-4">
                  <h4 className="text-dark font-avenir cursor-pointer hover:text-primary font-black sm:m-[0px_0px_10px_0px] sm:text-2xl 2xl:text-[28px] leading-[1.1em]">
                    {item.title}
                  </h4>
                  <p className="text-grey font-avenir text-lg 2xl:text-xl leading-[1.5em] m-[0px_0px_20px_0px]">
                    {item.content}
                  </p>
                  <Button className="text-grey font-medium px-0! pb-0! bg-transparent! border-0 rounded-none border-b-2! border-b-light-grey! hover:text-primary shadow-none font-avenir">
                    Read More
                  </Button>
                </div>
              </CardLayout>
            </motion.div>
          ))}
        </motion.div>
      </ContainerLayout>
    </SectionLayout>
  );
}
