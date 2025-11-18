import MasonryGallery from './masonry-gallery';
import SectionLayout from '../layouts/section-layout';
import ContainerLayout from '../layouts/container-layout';
import { mainGalleryItems } from '@/constants';

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
            items={mainGalleryItems}
            defaultCols={4}
            gap={24}
            rowHeight={50}
          />
          {/* Masonry Grid */}
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
