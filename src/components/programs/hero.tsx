import heroImg5 from '/assets/images/heroImg5.jpg';
export default function ProgramsHero() {
  return (
    <div className="w-full relative h-[60vh] md:h-[80vh] overflow-hidden background-slideshow mt-22 lg:mt-27">
      <div
        style={{ backgroundImage: `url(${heroImg5})` }}
        className="w-full h-full bg-cover bg-center bg-no-repeat"
      />
      <div className="absolute inner top-[35%] md:top-[20%] xl:top-[20%] z-4 max-w-[635px] lg:max-w-7xl">
        <div className="px-7.5 md:px-20">
          <div className="h-full title-container lg:mt-0 lg:mx-0 lg:mb-5">
            <h1 className="text-white text-[42px] lg:text-[90px] leading-[1.1em] font-avenir font-black md:max-w-[800px] lg:max-w-[1000px]">
              Overview
            </h1>
          </div>
          <div className="text-white  text-lg font-avenir font-extrabold tracking-wide mb-5 md:max-w-[500px] lg:max-w-[800px]">
            At Adada Education Foundation (AEF), we believe that empowering
            young people begins with access to education and practical skills.
            Our programs are designed to build courage, confidence, and
            competitiveness in youths across Enugu North — combining formal
            education with skill acquisition and mentorship.
          </div>
        </div>
      </div>
    </div>
  );
}
