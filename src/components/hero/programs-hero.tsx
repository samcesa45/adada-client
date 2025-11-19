import heroImg5 from '/assets/images/heroImg5.jpg';

export default function ProgramsHero() {
  return (
    <div className="relative w-full min-h-[500px] md:h-[80vh] pt-[200px] sm:pt-28 overflow-hidden">
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
            <h1 className="text-white text-[42px] lg:text-[90px] leading-[1.1em] font-avenir font-black">
              Overview
            </h1>
          </div>
          <div className="text-white  text-lg font-avenir font-extrabold tracking-wide mb-5">
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
