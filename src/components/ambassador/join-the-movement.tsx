import ContainerLayout from '../layouts/container-layout';
import SectionLayout from '../layouts/section-layout';
import bgImage from '/assets/images/join-the-movement.jpg';
import CheckIcon from '../svgs/check-icon';
import { Button } from '../ui/buttons';
import CardLayout from '../cards/card-layout';
export const howItworksItems = [
  {
    id: '1',
    icon: CheckIcon,
    desc: `Sign Up Online - Complete the Ambassador registration form.`,
  },
  {
    id: '2',
    icon: CheckIcon,
    desc: `Choose Your Contribution Plan - Monthly, quarterly, or one-time donations.`,
  },
  {
    id: '3',
    icon: CheckIcon,
    desc: `Get Verified - Receive your official Ambassador ID and access to the dashboard.`,
  },
  {
    id: '4',
    icon: CheckIcon,
    desc: `Start Making impact - Track progress, mentor students, or organize local projects.`,
  },
];

export default function JoinTheMovement() {
  return (
    <SectionLayout className="bg-dark py-0!">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <ContainerLayout className="py-16 order-2 md:order-0 px-10!">
          {/* Header */}
          <div className="pb-6 sm:pb-10 lg:pb-12">
            <h2 className="text-white font-avenir font-black text-4xl sm:text-[42px] md:text-[56px] 2xl:text-[72px] leading-[1.1em]">
              How It Works
            </h2>
            <div className="border-light-yellow border-4 lg:border-6 w-20 sm:w-24 my-3"></div>
          </div>
          <div className="space-y-10">
            {howItworksItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex  md:gap-x-6"
                >
                  <div className="elementor-icon mb-4 md:mb-8">
                    <Icon className="text-light-yellow w-[102px] h-[60px]" />
                  </div>
                  <p className="font-avenir font-medium text-silver-grey sm:text-[22px] leading-[1.5em]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col md:flex-row gap-4 inner-box">
            <Button className="text-white h-12 lg:w-[300px] lg:order-2 lg:h-16 hover:bg-primary hover:text-white font-semibold rounded-none shadow-none font-avenir uppercase">
              Join Now
            </Button>
            <Button className="text-dark h-12 lg:w-[300px] lg:order-1 lg:h-16 bg-light-yellow border-light-yellow hover:bg-primary hover:text-white font-semibold rounded-none shadow-none font-avenir uppercase">
              Donate Today
            </Button>
          </div>
        </ContainerLayout>
        <div
          className="relative order-1 md:order-2 min-h-[400px] lg:min-h-[600px] xl:min-h-full bg-cover bg-no-repeat bg-black/50 bg-blend-multiply"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="flex flex-col justify-center absolute top-1/2 lg:top-[60%] left-[20%] -translate-x-[10%] md:left-[50%] md:-translate-x-1/2 -translate-y-1/2">
           <div className='w-full max-w-7xl md:max-w-4xl lg:mx-8'>
            <CardLayout className="rounded-0 shadow-none border-0 bg-primary! min-w-full max-w-4xl">
              <h2 className="text-white font-avenir font-black text-nowrap text-xl mb-2 sm:text-[32px] md:text-[56px] 2xl:text-[72px] leading-[1.1em]">
                Join the Movement
              </h2>
              <p className="font-avenir font-medium text-white sm:text-[22px] leading-[1.5em]">
                Your involvement fuels the vision of an educated and empowered
                Enugu North. Together, we can build a future where every child's
                dream is within reach.
              </p>
            </CardLayout>
              <div className="flex gap-4 pt-6 w-full inner-box md:pt-8">
              <Button className="text-white h-12 w-full! lg:order-2 lg:h-16 hover:bg-primary hover:text-white font-semibold rounded-none shadow-none font-avenir uppercase">
              Become an ambassador
            </Button>
              </div>

           </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
