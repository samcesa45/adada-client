import heroImg5 from '/assets/images/adada/about-hero.jpg';

export default function AboutUsHero() {
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
          {/* <div className="title-container lg:mt-0 lg:mx-0">
          <h1 className="text-white text-[32px] sm:text-[42px] lg:text-[72px] leading-[1.1em] font-avenir font-black">
            About Us
            </h1>
          </div> */}
          {/* Header */}
          <div className="pb-6 sm:pb-10">
            <h2 className="text-white text-[32px] sm:text-[42px] lg:text-[72px] leading-[1.1em] font-avenir font-black">
              About Us
            </h2>
            <div className="border-light-yellow border-4 lg:border-6 w-20 sm:w-24 my-3"></div>
          </div>
          <p className="text-white max-w-4xl   text-lg font-avenir font-extrabold tracking-wide mb-5">
            The Adada Education Foundation (AEF) is a non-profit organization
            dedicated to empowering the youth of Enugu North Senatorial Zone
            through quality education, mentorship, and skills development.
          </p>
        </div>
      </div>
    </div>
  );
}
