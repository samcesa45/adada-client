import CardLayout from '../cards/card-layout';
import { Button } from '../ui/buttons';
import graduateImg from '/assets/images/graduate.jpg';
import giftImg from '/assets/images/gift.jpg';
import SectionLayout from '../layouts/section-layout';
import ContainerLayout from '../layouts/container-layout';

export default function OurPrograms() {
  return (
    <SectionLayout className="bg-primary">
      <ContainerLayout>
        {/* Header */}
        <div className="text-center pb-6 sm:pb-10">
          <h2 className="text-white font-avenir font-black text-4xl sm:text-[42px] md:text-[56px] 2xl:text-[72px] leading-[1.1em]">
            Our Programs
          </h2>
          <div className="border-light-yellow mx-auto border-4 lg:border-6 w-20 sm:w-24 my-3"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-[60px] items-center">
          <CardLayout className="bg-white shadow-none border-0 rounded-xl p-6 max-w-[681px] max-h-[300px]">
            <h3 className="font-avenir  text-3xl sm:text-[32px] leading-10 font-bold mb-4">
              Education
            </h3>
            <p className="text-[#5c5c5c] font-avenir text-base sm:text-[20px] leading-[1.5em] mb-3">
              Discover our educational and empowerment initiatives; from
              scholarships to skill acquisition and mentorship programs —
              designed to equip youths with tools for lifelong success.
            </p>
            <Button className="bg-primary hover:bg-light-yellow! hover:text-black text-white font-avenir! font-bold text-base leading-5 px-[13px] py-[25px]text-white rounded-none border-0">
              Read More
            </Button>
          </CardLayout>
          <div>
            <img src={graduateImg} alt="Graduate Image" />
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-[60px] items-center">
            <div className="lg:-mt-16">
              <img src={giftImg} alt="Gift Image" />
            </div>
            <CardLayout className="shadow-none border-0 rounded-xl p-6 max-w-[681px] max-h-[267px]">
              <h3 className="font-avenir  text-3xl sm:text-[32px] leading-10 font-bold mb-4">
                Donation
              </h3>
              <p className="text-[#5c5c5c] font-avenir text-base sm:text-[20px] leading-[1.5em] mb-3">
                Your generosity changes lives. Every contribution you make helps
                a student go to school, gain valuable skills, and build a
                brighter future for Enugu North.
              </p>
              <Button className="bg-primary hover:bg-light-yellow! hover:text-black text-white font-avenir! font-bold text-base leading-5 px-[13px] py-[25px]text-white rounded-none border-0">
                Read More
              </Button>
            </CardLayout>
          </div>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
