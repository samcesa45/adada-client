import ContactForm from '@/features/contact/components/contact-form';
import SectionLayout from '../layouts/section-layout';
import MapWithMarkers from '../map-markers';

export default function Contact() {
  return (
    <div className="flex flex-col-reverse sm:flex-col lg:flex-row">
      <SectionLayout className="w-full">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="w-full">
            <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
              {/* Header */}
              <div className="pb-6 sm:pb-10">
               <h2 className="text-dark font-avenir font-black text-2xl md:text-[32px] leading-[1.1em]">
                  Contact info
                </h2>
                <div className="border-light-yellow border-4 lg:border-6 w-20 sm:w-24 my-3"></div>
              </div>
              <MapWithMarkers />
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className="bg-[#f9f9f9] w-full">
        <div className="w-full mt-8 md:mt-0 bg-[#f9f9f9]">
          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            {/* Header */}
            <div className="pb-6 sm:pb-10">
              <h2 className="text-dark font-avenir font-black text-2xl md:text-[32px] leading-[1.1em]">
                Leave a Message
              </h2>
              <div className="border-light-yellow border-4 lg:border-6 w-20 sm:w-24 my-3"></div>
            </div>
            <ContactForm />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
