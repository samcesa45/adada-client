import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { eventsItems } from '@/constants';
import CardLayout from '../cards/card-layout';
import { Button } from '../ui/buttons';
import PaginationBars from './pagination-bars';
import SectionLayout from '../layouts/section-layout';
import ContainerLayout from '../layouts/container-layout';
import { motion } from 'motion/react';
import { containerVariants } from '../animation';

export default function UpcomingEvents() {
  const swiperRef = useRef<any>(null);

  return (
    <SectionLayout>
      <ContainerLayout>
        {/* Header */}
        <div className="text-center pb-6 sm:pb-10">
          <h2 className="text-dark font-avenir font-black text-4xl sm:text-[42px] md:text-[56px] 2xl:text-[72px] leading-[1.1em]">
            Upcoming Events
          </h2>
          <div className="border-light-yellow mx-auto border-4 lg:border-6 w-20 sm:w-24 my-3"></div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Swiper */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{
              clickable: false,
              enabled: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="relative"
          >
            {eventsItems.map((item) => (
              <SwiperSlide key={item.id}>
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

                  <div className="text-xs text-grey font-avenir flex leading-[1em] font-medium mt-3 mb-1 px-8">
                    <div>
                      <span>By Samcesa45</span>
                    </div>
                    <div className="before:content-['|'] before:ml-[0.3rem] before:mr-[0.3rem]">
                      <span>18 Jan, 2024</span>
                    </div>
                  </div>

                  <div className="my-4 px-8">
                    <h4 className="text-dark font-avenir cursor-pointer hover:text-primary font-black sm:mb-2 sm:text-2xl 2xl:text-[28px] leading-[1.1em]">
                      {item.title}
                    </h4>

                    <p className="text-grey font-avenir text-lg 2xl:text-xl leading-[1.5em] mb-5">
                      {item.content}
                    </p>

                    <Button className="text-dark inner-box h-10! hover:bg-primary hover:text-white font-semibold rounded-none shadow-none font-avenir uppercase">
                      Join Event
                    </Button>
                  </div>
                </CardLayout>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Pagination Bars */}
        <PaginationBars swiperRef={swiperRef} />
      </ContainerLayout>
    </SectionLayout>
  );
}
