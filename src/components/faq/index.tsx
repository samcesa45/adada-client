import { useState } from 'react';
import CardLayout from '../cards/card-layout';
import ContainerLayout from '../layouts/container-layout';
import SectionLayout from '../layouts/section-layout';
import { PlusIcon, Minus } from 'lucide-react';
import { faqItems } from '@/constants';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggleAccordion = (id: string | null) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <SectionLayout>
      <ContainerLayout>
        <div className="text-center mx-auto pb-6 sm:pb-10">
          <h2 className="text-dark font-avenir font-black text-4xl sm:text-[42px] md:text-[56px] 2xl:text-[72px] leading-[1.1em]">
            FAQ's
          </h2>
          <div className="border-light-yellow mx-auto border-4 lg:border-6 w-20 sm:w-24 my-3"></div>
        </div>
        <div className="space-y-8">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;
            const isEven = index % 2 === 0;
            return (
              <CardLayout
                key={item.id}
                className={` border-0 accordion-boxshadow transition-all duration-300
                ${isOpen ? (isEven ? 'border-2 border-primary' : 'border-2 border-primary') : 'border-2 border-transparent'}
                 `}
              >
                <button
                  onClick={() => handleToggleAccordion(item.id)}
                  className="w-full cursor-pointer flex justify-between items-center p-5 lg:py-8 lg:px-8 transition-colors duration-200"
                >
                  <h3
                    className={`font-avenir font-black md:leading-[1.1em] md:tracking-[-0.05em] md:text-2xl transition-colors duration-300
                    ${isOpen ? 'text-primary' : 'text-dark'}
                    `}
                  >
                    {item.questions}
                  </h3>
                  <div
                    className={`border-none rounded-none text-center px-[0.4em] py-[0.4em]
                    ${isOpen ? 'bg-primary' : 'bg-silver-grey'}
                    `}
                  >
                    {isOpen ? (
                      <Minus
                        className="text-white text-[1em]! flex  items-center justify-center"
                        size={20}
                      />
                    ) : (
                      <PlusIcon
                        className="text-white text-[1em]! flex  items-center justify-center"
                        size={20}
                      />
                    )}
                  </div>
                </button>

                {/* answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                >
                  <div className="px-6 pb-6">
                    <div
                      className={`transform transition-all duration-500
                    ${
                      isOpen
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                    }
                    `}
                      style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}
                    >
                      <p className="font-avenir text-base text-grey font-semibold">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
                {/* answer */}
              </CardLayout>
            );
          })}
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
