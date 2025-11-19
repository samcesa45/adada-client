import ContainerLayout from '../layouts/container-layout';
import SectionLayout from '../layouts/section-layout';

export const causes = [
  {
    id: 1,
    title: 'Access to Quality Education',
    description:
      'Providing financial support, scholarships, and essential learning resources to ensure that children and youth—regardless of background—can pursue their educational goals without barriers.',
  },
  {
    id: 2,
    title: 'Mentorship & Personal Development',
    description:
      'Connecting students with experienced mentors who guide them academically, professionally, and personally to help them discover their strengths and build confidence.',
  },
  {
    id: 3,
    title: 'Skills Acquisition & Youth Empowerment',
    description:
      'Equipping young people with relevant technical, digital, and vocational skills that prepare them for a competitive job market and entrepreneurial opportunities.',
  },
  {
    id: 4,
    title: 'Community Support & Educational Outreach',
    description:
      'Collaborating with local schools, educators, and stakeholders to uplift educational standards and create environments where students can thrive.',
  },
  {
    id: 5,
    title: 'Support for Vulnerable & Underserved Groups',
    description:
      'Identifying and supporting orphans, children in rural communities, and youths facing financial or social challenges—ensuring they are not left behind.',
  },
];
export const campaignMissionSection = {
  heading: 'Our Campaign Mission',
  intro:
    'Our mission is to ignite a movement that empowers the youth of Enugu North through accessible education, mentorship, and skills development.',
  list: [
    {
      description:
        'Providing wider and accessible educational opportunities for students at all levels.',
    },
    {
      description:
        'Guiding youths toward purpose, confidence, and leadership through sustainable mentorship programs.',
    },
    {
      description:
        'Equipping youths with practical skills that lead to economic empowerment and long-term success.',
    },
    {
      description:
        'Mobilizing the community to actively support youth growth and development.',
    },
    {
      description:
        'Ensuring every child has the tools to succeed, regardless of their socioeconomic background.',
    },
  ],
  closing:
    'Our campaign is more than an initiative — it is a collective effort to secure a brighter, more prosperous future for Enugu North.',
};

export default function DonationCause() {
  return (
    <>
      <SectionLayout>
        <ContainerLayout>
          <h2 className="font-avenir font-black text-lg sm:text-[28px] md:text-[36px] lg:text-[46px] leading-[1.1em] -tracking-wider mb-5">
            About the Causes
          </h2>
          <p className="text-base font-avenir text-grey md:text-lg leading-[1.5em]">
            The Adada Education Foundation (AEF) is committed to driving
            meaningful change across Enugu North Senatorial Zone by addressing
            the core challenges that limit access to quality education and
            personal development. Our causes are centered on creating
            opportunities, nurturing potential, and enabling long-term community
            empowerment. Through targeted programs, scholarships, mentorship,
            and skill-building initiatives, we aim to bridge educational gaps,
            support vulnerable students, and lay a strong foundation for future
            leaders. Each cause is rooted in our belief that education is the
            most powerful tool for transforming lives and communities. Our work
            focuses on:
          </p>
          {causes.map((item) => (
            <div key={item.id}>
              <h4 className="font-avenir font-black text-lg sm:text-[28px]  leading-[1.1em] -tracking-wider my-5">
                {item.title}
              </h4>
              <p className="text-base font-avenir text-grey md:text-lg leading-[1.5em]">
                {item.description}
              </p>
            </div>
          ))}
        </ContainerLayout>
      </SectionLayout>
      <SectionLayout>
        <ContainerLayout>
          <h2 className="font-avenir font-black text-lg sm:text-[28px] md:text-[36px] lg:text-[46px] leading-[1.1em] -tracking-wider mb-5">
            {campaignMissionSection.heading}
          </h2>
          <p className="text-base font-avenir text-grey md:text-lg leading-[1.5em]">
            {campaignMissionSection.intro}
          </p>
          {campaignMissionSection.list.map((item) => (
            <ul key={item.description}>
              <li className="text-base font-avenir text-grey md:text-lg leading-[1.5em]">
                {item.description}
              </li>
            </ul>
          ))}
        </ContainerLayout>
      </SectionLayout>
    </>
  );
}
