import { Button } from '../ui/buttons';
import heroImg5 from '/assets/images/adada/gallery1.jpg';

export default function AmbassadorHero() {
  return (
    <div className="relative w-full min-h-[500px] md:h-[90vh] pt-[200px] sm:pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <div
          style={{ backgroundImage: `url(${heroImg5})` }}
          className="w-full h-full bg-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="background-slideshow"></div>
      <div className="relative z-3 flex flex-col justify-center h-full">
        <div className="px-4 sm:px-6 md:px-8 lg:px-20 py-8 w-full max-w-7xl">
          <div className="title-container lg:mt-0 lg:mx-0">
            <h1 className="text-white text-[32px] sm:text-[42px] lg:text-[72px] leading-[1.1em] font-avenir font-black">
              Become an Adada Development Ambassador
            </h1>
          </div>
          <p className="text-white  text-lg font-avenir font-extrabold tracking-wide mb-5">
            As an ambassador, you play an active role in funding scholarships,
            mentoring students, and promoting skill acquisition
          </p>
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
