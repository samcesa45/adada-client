import heroImg from '/assets/images/adada/hero-image.jpg';
import heroImg2 from '/assets/images/adada/hero-image2.jpg';
import heroImg3 from '/assets/images/adada/hero-image3.jpg';
import heroImg4 from '/assets/images/adada/hero-image4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Button } from '../ui/buttons';

const images = [heroImg, heroImg2, heroImg3, heroImg4];
export default function Hero() {
  return (
    <div className="relative w-full min-h-[500px] pt-[200px] md:h-dvh  sm:pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1200}
          allowTouchMove={false}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                style={{ backgroundImage: `url(${src})` }}
                className="w-full h-full bg-cover bg-center bg-no-repeat kenburns"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="background-slideshow"></div>

      <div className="relative z-3 flex flex-col justify-center h-full">
        <div className="px-4 sm:px-6 md:px-8 lg:px-20 py-8 w-full max-w-7xl">
          <div className="">
            <p className="text-white uppercase text-sm sm:text-[18px] tracking-normal font-avenir font-extrabold md:tracking-[0.15em] mb-5">
              Together, we are building opportunities through scholarships,
              mentorship, and skill development.
            </p>
            <div className="h-full title-container lg:mb-5">
              <h1 className="font-avenir! text-white text-[32px] sm:text-[42px] lg:text-[90px] leading-[1.1em] tracking-wide font-black">
                Empowering Enugu North's Future Through Education
              </h1>
            </div>
          </div>
          <div className="hidden btn md:inline-block  w-full mt-8 sm:w-[196px]">
            <Button className="bg-primary  w-full md:w-[196px]  hover:bg-light-yellow! hover:text-black text-white font-avenir! font-bold text-base leading-5 px-10 py-[25px]! rounded-none border-0">
              Apply for support
            </Button>
          </div>
        </div>
      </div>
      <div className="md:hidden absolute z-2 bottom-0 w-full">
        <Button className="bg-primary w-full hover:bg-light-yellow hover:text-black text-white font-avenir font-bold text-lg py-6 rounded-none border-0 transition-colors duration-300">
          Apply for support
        </Button>
      </div>
    </div>
  );
}
