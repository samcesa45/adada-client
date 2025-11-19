import DonateImg5 from '/assets/images/adada/gallery5.jpg';

export default function DonateHero() {
  return (
    <div className="relative w-full min-h-[500px] md:h-dvh pt-[200px] sm:pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <div
          style={{ backgroundImage: `url(${DonateImg5})` }}
          className="w-full h-full bg-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="background-slideshow"></div>
      <div className="relative z-3 flex flex-col justify-center items-center h-full">
        <div className="px-4 sm:px-6 md:px-8 mx-auto lg:px-20 py-8 w-full max-w-7xl">
          <div className="pb-6 sm:pb-10 text-center">
            <h2 className="text-white text-[32px] sm:text-[42px] lg:text-[90px] leading-[1.1em] font-avenir font-black">
              YOUR SUPPORT TRANSFORM LIVES
            </h2>
          </div>
          <p className="text-white max-w-2xl mx-auto  text-lg font-avenir font-extrabold tracking-wide mb-5">
            “Every donation helps empower more youths through education,
            mentorship, and skill training.”
          </p>
        </div>
      </div>
    </div>
  );
}
