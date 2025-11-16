import CardLayout from '@/components/cards/card-layout';
import ContainerLayout from '@/components/layouts/container-layout';
import SectionLayout from '@/components/layouts/section-layout';
import { whoWeAreItems } from '..';

export default function WhoWeAre() {
  return (
    <SectionLayout>
      <ContainerLayout>
        {/* Header */}
        <div className="text-center pb-6 sm:pb-10">
          <h2 className="text-dark font-avenir font-black text-4xl sm:text-[42px] md:text-[56px] 2xl:text-[72px] leading-[1.1em]">
            Who We Are?
          </h2>
          <div className="border-light-yellow mx-auto border-4 lg:border-6 w-20 sm:w-24 my-3"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whoWeAreItems.map((item) => {
            const Icon = item.icon;
            return (
              <CardLayout
                key={item.id}
                className="icon-box bg-white group hover:bg-primary transition-all duration-500 border-none flex flex-col items-center md:items-start"
              >
                <div>
                  <Icon className="group-hover:text-light-yellow" />
                </div>
                <h3 className="font-avenir text-[28px] text-dark group-hover:text-white my-2.5 md:text-[42px] font-black leading-[1.1em] -tracking-[0.05em]">
                  {item.title}
                </h3>
                <p className="font-avenir text-center md:text-start text-grey group-hover:text-white group-hover:font-medium text-xl leading-[1.5em]">
                  {item.desc}
                </p>
              </CardLayout>
            );
          })}
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
