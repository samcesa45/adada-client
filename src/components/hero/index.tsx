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
    <div className="w-full relative  overflow-hidden pt-[90px] md:pt-[110px]">
     <div className="absolute top-0 left-0 w-full h-[82vh] md:h-full background-slideshow">
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
      <div className="relative z-3 flex flex-col justify-center min-h-[calc(100vh-90px)] md:min-h-[calc(100vh-110px)]">
        <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-20 py-8">
          <div className="max-w-full md:max-w-[500px] lg:max-w-[1000px]">
            <p className="text-white uppercase text-base sm:text-lg font-avenir font-extrabold tracking-[.15em] mb-5">
              Together, we are building opportunities through scholarships,
              mentorship, and skill development.
            </p>
            <div className="h-full title-container lg:mb-5">
              <h1 className="text-white text-[32px] sm:text-[42px] lg:text-[90px] leading-[1.1em] font-avenir font-black">
                Empowering Enugu North's Future Through Education
              </h1>
            </div>
          </div>
          <div className="btn mt-8 w-full xs:w-auto">
            <Button className="bg-primary w-full xs:w-auto hover:bg-light-yellow! hover:text-black text-white font-avenir! font-bold text-base leading-5 px-10 py-[25px]! rounded-none border-0">
              Apply for support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


