import { useState } from 'react';
import ContainerLayout from '../layouts/container-layout';
import SectionLayout from '../layouts/section-layout';
import QuoteIcon from '../svgs/quote';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import { testimonialItems } from '@/constants';
import { containerVariants, itemVariants } from '../animation';

export default function Testimonials() {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };
  return (
    <SectionLayout>
      <ContainerLayout>
        {/* Header */}
        <div className="text-center pb-6 sm:pb-10">
          <h2 className="text-dark font-avenir font-black text-4xl sm:text-[42px] md:text-[56px] 2xl:text-[72px] leading-[1.1em]">
            Testimonials
          </h2>
          <div className="border-light-yellow mx-auto border-4 lg:border-6 w-20 sm:w-24 my-3"></div>
        </div>
        {/* testimonials */}
        <Swiper
          modules={[Pagination, EffectCoverflow]}
          speed={1400}
          slidesPerView={1}
          spaceBetween={0}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          pagination={{
            clickable: false,
            enabled: false,
          }}
          className="relative mb-12"
        >
          {testimonialItems.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="flex flex-col items-center px-4 md:px-12 justify-center">
                <QuoteIcon className="text-primary mb-8" />
                <p className="font-avenir max-w-4xl font-extrabold text-center text-base md:text-[32px] leading-[1.4em] w-full mb-10">
                  {client.desc}
                </p>
                {/* thumbnail nav */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex justify-center items-center gap-4 mb-8 flex-wrap"
                >
                  {testimonialItems.map((client, index) => (
                    <motion.button
                      variants={itemVariants as any}
                      key={client.id}
                      onClick={() => handleThumbnailClick(index)}
                      className={`relative rounded-full overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none 
                    ${activeIndex === index ? 'size-14 md:size-18 ring-4 ring-orange-500 opacity-100' : 'size-14 md:size-18 opacity-10'}`}
                      aria-label={`View testimonial from ${client.name}`}
                    >
                      <img
                        src={client.src}
                        alt={client.name}
                        className={`w-full h-full object-center object-cover transition-all duration-300 ${activeIndex === index ? 'size-14 md:size-18 ring-4 ring-orange-500 opacity-100' : 'size-14 md:size-18 opacity-40'}`}
                      />
                    </motion.button>
                  ))}
                </motion.div>
                {/* thumbnail nav */}
                {/* client name & desc */}
                <div className="text-center">
                  <h3 className="font-avenir text-dark font-medium leading-[1.1em] text-xl md:text-2xl">
                    {client.name}
                  </h3>
                  <p>{client.position}</p>
                </div>
                {/* client name & desc */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* testimonials */}
      </ContainerLayout>
    </SectionLayout>
  );
}
