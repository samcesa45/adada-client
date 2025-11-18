import CardLayout from '../cards/card-layout';
import ContainerLayout from '../layouts/container-layout';
import SectionLayout from '../layouts/section-layout';
import gradImg from '/assets/images/graduation-cap.jpg';
import trainingImg from '/assets/images/online-learning.jpg';
import careerImg from '/assets/images/career.jpg';
export default function KeyPrograms() {
  return (
    <SectionLayout>
      <ContainerLayout>
        {/* Header */}
        <div className="text-center pb-6 sm:pb-10">
          <h2 className="text-dark font-avenir font-black text-4xl sm:text-[42px] md:text-[56px] 2xl:text-[72px] leading-[1.1em]">
            Our Key Programs
          </h2>
          <div className="border-light-yellow mx-auto border-4 lg:border-6 w-20 sm:w-24 my-3"></div>
        </div>
        <div className="grid grid-cols-1 items-center">
          <CardLayout className="icon-box group relative  bg-white border-none grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-avenir text-[28px] text-dark my-2.5 md:text-[42px] font-black leading-[1.1em] -tracking-[0.05em]">
                Adada Scholarship Scheme
              </h3>
              <div>
                <ul>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Providing financial support for talented but underprivileged
                    students in secondary schools and tertiary institutions.
                  </li>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Students are selected through a transparent application
                    process, ensuring equal opportunity for all.
                  </li>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    "Education is not a priviledge - it's a right we're proud to
                    protect."
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <h3 className="font-avenir text-xl text-dark mb-4 leading-[1.1em] -tracking-[0.05em]">
                  Focus Areas:
                </h3>
                <ul>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Tuition Support
                  </li>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Learning Materials
                  </li>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Academic Mentorship
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative overflow-hidden aspect-square">
              <img
                src={gradImg}
                alt="Graduation Cap"
                className="w-full h-full object-cover rounded-xl object-center transition-all duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          </CardLayout>
          <CardLayout className="icon-box group relative  bg-white border-none grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative overflow-hidden aspect-square">
              <img
                src={trainingImg}
                alt="Online Learning"
                className="w-full h-full object-cover rounded-xl object-center transition-all duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div>
              <h3 className="font-avenir text-[28px] my-2.5 md:text-[42px] font-black leading-[1.1em] -tracking-[0.05em]">
                Skill Acquisition & Empowerment Program
              </h3>
              <div>
                <ul>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Hands-on training programs that prepare young people for
                    self-employment and innovation in their communities.
                  </li>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    We partner with vocational centers and institutions to teach
                    practical skills that lead to sustainable livelihoods.
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <h3 className="font-avenir text-xl font-black mb-4 leading-[1.1em] -tracking-[0.05em]">
                  Focus Areas:
                </h3>
                <ul>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    ICT
                  </li>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Tailoring
                  </li>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Welding
                  </li>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Catering
                  </li>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Hairdressing
                  </li>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Digital Skills
                  </li>
                </ul>
              </div>
            </div>
          </CardLayout>
          <CardLayout className="icon-box group relative  bg-white border-none grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-avenir text-[28px] my-2.5 md:text-[42px] font-black leading-[1.1em] -tracking-[0.05em]">
                University & Institutional Partnerships
              </h3>
              <div>
                <ul>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Through collaborations with institutions such as the
                    University of Nigeria, Nsuka (UNN), AEF facilitates
                    workshops, joint research, and academic competitions that
                    inspire innovation.
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <h3 className="font-avenir text-xl font-black mb-4 leading-[1.1em] -tracking-[0.05em]">
                  Focus Areas:
                </h3>
                <ul>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    University Grants
                  </li>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Student Competitions
                  </li>
                  <li className="font-avenir list-disc md:text-start text-grey text-xl leading-[1.5em]">
                    Research Support
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative overflow-hidden aspect-square">
              <img
                src={careerImg}
                alt="Graduation Cap"
                className="w-full h-full object-cover rounded-xl object-center transition-all duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          </CardLayout>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
