import { Button } from '../ui/buttons';
import heroImg5 from '/assets/images/adada/gallery1.jpg';

export default function AmbassadorHero() {
  return (
    <div className="relative min-h-[60vh]  md:min-h-screen pt-[90x] md:pt-[110px] background-slideshow">
      <div
        style={{ backgroundImage: `url(${heroImg5})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />
      {/* <div className="absolute inner top-[35%] lg:top-[30%] z-4 max-w-[635px] lg:max-w-7xl"> */}
      <div className="relative z-4 flex items-center min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-110px)] -bottom-30 md:bottom-0">
        <div className="px-7.5 md:px-20">
          <div className="h-full title-container lg:mt-0 lg:mx-0 lg:mb-5">
            <h1 className="text-white text-3xl sm:text-[42px] lg:text-[90px] leading-[1.1em] font-avenir font-black md:max-w-[800px] lg:max-w-[1000px]">
              Become an Adada Development Ambassador
            </h1>
          </div>
          <div className="text-white  text-lg font-avenir font-extrabold tracking-wide mb-5 md:max-w-[500px] lg:max-w-[800px]">
            As an ambassador, you play an active role in funding scholarships,
            mentoring students, and promoting skill acquisition
          </div>
          <div className="flex flex-col md:flex-row gap-4 inner-box">
            <Button className="text-dark h-12 lg:w-[300px] lg:order-1 lg:h-16 bg-light-yellow border-light-yellow hover:bg-primary hover:text-white font-semibold rounded-none shadow-none font-avenir uppercase">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
