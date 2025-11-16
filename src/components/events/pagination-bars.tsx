import { useEffect, useState, useCallback } from 'react';

export default function PaginationBars({ swiperRef }: { swiperRef: any }) {
  const [activePage, setActivePage] = useState(0);
  const [pages, setPages] = useState(1);

  const computePages = useCallback(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    //total slides count
    const totalSlides = swiper.slides ? swiper.slides.length : 0;

    //actual slides per view from the current breakpoint
    const perView =
      swiper.params.slidesPerView === 'auto'
        ? 1
        : Number(swiper.params.slidesPerView) || 1;

    const slidesPerPage = Math.max(1, Math.floor(perView));

    //calculate total pages
    const totalPages = Math.max(1, Math.ceil(totalSlides / slidesPerPage));
    setPages(totalPages);

    // Calculate which page we're on based on active index
    const currentSlideIndex = swiper.activeIndex || swiper.realIndex || 0;
    const currentPage = Math.floor(currentSlideIndex / slidesPerPage);
    setActivePage(currentPage);
  }, [swiperRef]);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    computePages();

    const onSlide = () => computePages();
    const onResize = () => {
      setTimeout(() => computePages(), 100);
    };

    swiper.on('slideChange', onSlide);
    swiper.on('breakpoint', onResize);
    window.addEventListener('resize', onResize);

    return () => {
      swiper.off('slideChange', onSlide);
      swiper.off('breakpoint', onResize);
      window.removeEventListener('resize', onResize);
    };
  }, [swiperRef, computePages]);

  const handleClick = (pageIndex: number) => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const perView =
      swiper.params.slidesPerView === 'auto'
        ? 1
        : Number(swiper.params.slidesPerView) || 1;

    const slidesPerPage = Math.max(1, Math.floor(perView));
    const targetSlide = pageIndex * slidesPerPage;

    swiper.slideTo(targetSlide, 600, true);
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-8 events-pagination">
      {Array.from({ length: pages }).map((_, i) => (
        <span
          key={i}
          role="button"
          tabIndex={0}
          aria-label={`Go to page ${i + 1}`}
          onClick={() => handleClick(i)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleClick(i);
            }
          }}
          className={`block h-2 cursor-pointer transition-all duration-300 focus:outline-none ${
            i === activePage ? 'bg-primary w-12' : 'bg-gray-300 w-10'
          }`}
        ></span>
      ))}
    </div>
  );
}
