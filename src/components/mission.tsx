import { missionItems } from '@/constants';
import CardLayout from './cards/card-layout';
import SectionLayout from './layouts/section-layout';
import ContainerLayout from './layouts/container-layout';

export default function Mission() {
  return (
    <SectionLayout>
      <ContainerLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionItems.map((item) => (
            <CardLayout
              key={item.id}
              className="flex gap-6 shadow-none rounded-xl"
            >
              <div className="size-14 sm:size-18 flex items-center justify-center shrink-0 rounded-[50%] bg-primary">
                <img width={30} height={30} src={item.image} alt="bulb icon" />
              </div>
              <div>
                <h4 className="font-avenir  text-3xl sm:text-[40px] leading-10 font-bold mb-4 ">
                  {item.title}
                </h4>
                <p className="text-[#5c5c5c] font-avenir text-base sm:text-[20px] leading-[1.5em]">
                  {item.content}
                </p>
              </div>
            </CardLayout>
          ))}
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
