import ContainerLayout from '../layouts/container-layout';
import SectionLayout from '../layouts/section-layout';
import { Button } from '../ui/buttons';
import bgImg from '/assets/images/heroImg6.jpg';
export default function BecomeVolunteerHero() {
  return (
    <SectionLayout className="pb-0! relative overflow-hidden pt-0!">
      <div className="relative aspect-16/10 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />
        {/* content */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start">
          <ContainerLayout>
            <div className="flex flex-col">
              <div className="bg-primary py-2 px-3 lg:py-4 lg:px-5 max-w-max mb-8">
                <h2 className="font-avenir text-white font-black text-sm sm:text-xl md:text-[26px] leading-none -tracking-tighter uppercase">
                  #Be part of the transformation!
                </h2>
              </div>
              <p className="font-avenir text-white font-black text-base sm:text-2xl md:text-[42px] lg:text-[66px] leading-[1.1em] -tracking-tighter mb-8 lg:mb-14">
                Join us in shaping the future of education in Enugu North
                through donations, membership, or volunteer programs.
              </p>
              <div className="flex flex-col md:flex-row gap-4 inner-box">
                <Button className="text-white h-12 lg:w-[300px] lg:order-2 lg:h-16 hover:bg-primary hover:text-white font-semibold rounded-none shadow-none font-avenir uppercase">
                  Support the Programs
                </Button>
                <Button className="text-dark h-12 lg:w-[300px] lg:order-1 lg:h-16 bg-light-yellow border-light-yellow hover:bg-primary hover:text-white font-semibold rounded-none shadow-none font-avenir uppercase">
                  Get Involved
                </Button>
              </div>
            </div>
          </ContainerLayout>
        </div>
        {/* content */}
      </div>
    </SectionLayout>
  );
}
