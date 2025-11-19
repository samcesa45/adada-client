import MasonryGallery from './masonry-gallery';
import SectionLayout from '../layouts/section-layout';
import ContainerLayout from '../layouts/container-layout';
import { mainGalleryItems } from '@/constants';

export default function Gallery() {
  return (
    <SectionLayout>
      <ContainerLayout>
        {/* Header */}
        <div className="text-center pb-6 sm:pb-10">
          <h2 className="text-dark font-avenir font-black text-4xl sm:text-[42px] md:text-[56px] 2xl:text-[72px] leading-[1.1em]">
            Our Gallery
          </h2>
          <div className="border-light-yellow mx-auto border-4 lg:border-6 w-20 sm:w-24 my-3"></div>
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
