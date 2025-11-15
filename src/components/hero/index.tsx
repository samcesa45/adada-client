import heroImg from '/assets/images/goodheart-img.jpg';
import heroImg2 from '/assets/images/adada-img.jpg';
import heroImg3 from '/assets/images/goodheart-img2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Button } from '../ui/buttons';

const images = [heroImg, heroImg2, heroImg3];
export default function Hero() {
  return (
    <div className="w-full relative h-[80vh] md:h-screen overflow-hidden background-slideshow mt-22 lg:mt-27">
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
      <div className="absolute inner top-[35%] md:top-[20%] xl:top-[20%] z-4 max-w-[635px] lg:max-w-7xl">
        <div className="px-7.5 md:px-20">
          <div className="text-white uppercase text-lg font-avenir font-extrabold tracking-[.15em] mb-5 md:max-w-[500px] lg:max-w-[800px]">
            Together, we are building opportunities through scholarships,
            mentorship, and skill development.
          </div>
          <div className="h-full title-container lg:m-[0px_0px_20px_0px]">
            <h1 className="text-white text-[42px] lg:text-[90px] leading-[1.1em] font-avenir font-black md:max-w-[800px] lg:max-w-[1000px]">
              Empowering Enugu North's Future Through Education
            </h1>
          </div>
        </div>
        <div className="btn mt-8 w-full xs:w-[106px] xs:mx-7.5 md:mx-20">
          <Button className="bg-primary w-full xs:w-[196px] hover:bg-light-yellow! hover:text-black text-white font-avenir! font-bold text-base leading-5 px-10 py-[25px]! rounded-none border-0">
            Apply for support
          </Button>
        </div>
      </div>
    </div>
  );
}
