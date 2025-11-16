// import masonry1 from '/assets/images/chief1.jpg';
// import masonry2 from '/assets/images/jude.jpg';
// import masonry3 from '/assets/images/ordinal.jpg';
// import masonry4 from '/assets/images/cardinal.jpg';
// import masonry5 from '/assets/images/chinedu_onuh.jpg';
// import masonry6 from '/assets/images/jude.jpg';
// import masonry7 from '/assets/images/chief1.jpg';
import MasonryGallery from './masonry-gallery';
import SectionLayout from '../layouts/section-layout';
import ContainerLayout from '../layouts/container-layout';
import event1 from '/assets/images/goodheart-event1.jpg';
import event2 from '/assets/images/goodheart-event2.jpg';
import event3 from '/assets/images/goodheart-event3.jpg';
import event4 from '/assets/images/goodheart-event4.jpg';
import event5 from '/assets/images/goodheart-event5.jpg';
import event6 from '/assets/images/goodheart-event6.jpg';
import event7 from '/assets/images/goodheart-img.jpg';

const items = [
  { src: event1, cols: 1 },
  { src: event2, cols: 2 },
  { src: event3, cols: 1 },
  { src: event4, cols: 1 },
  { src: event5, cols: 1 },
  { src: event7, cols: 2 },
  { src: event6, cols: 1 },
];

export default function Gallery() {
  return (
    <SectionLayout>
      <ContainerLayout>
        <div className="mb-6 md:mb-8 text-center">
          <h4 className="font-kumbhSans fontx-bold mb-3 text-[14px] leading-[18px] tracking-[1.8px] opacity-90 uppercase text-[#28282E]">
            PORTFOLIO
          </h4>
          <h3 className="font-kumbhSans font-semibold text-[#28282E] text-[24px] -tracking-[0.2px] mb-3.5 leading-7 md:text-[47px] md:leading-[52px] ">
            Our Gallery
          </h3>
        </div>
        <div>
          {/*Masonry Grid*/}
          <MasonryGallery
            items={items}
            defaultCols={4}
            gap={24}
            rowHeight={100}
          />
          {/* Masonry Grid */}
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
