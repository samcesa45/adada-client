import { useEffect, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './mason-gallery.css';

type Item = {
  src: string;
  alt?: string;
  cols?: number;
  rows?: number;
};

type Props = {
  items: Item[];
  defaultCols?: number;
  gap?: number;
  rowHeight?: number;
};

const BREAKPOINTS = {
  sm: 640,
  md: 900,
  lg: 1280,
};

export default function MasonryGallery({
  items,
  defaultCols = 4,
  gap = 24,
  rowHeight = 8,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const naturalSizes = useRef<Record<number, { w: number; h: number }>>({});
  const [spans, setSpans] = useState<Record<number, number>>({});
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [cols, setCols] = useState<number>(defaultCols);
  const [isMobile, setIsMobile] = useState(false);

  const updateCols = () => {
    const w = window.innerWidth;
    setIsMobile(w < BREAKPOINTS.md); // Mobile if less than 900px

    if (w < BREAKPOINTS.sm) setCols(1);
    else if (w < BREAKPOINTS.md) setCols(2);
    else if (w < BREAKPOINTS.lg) setCols(3);
    else setCols(defaultCols);
  };

  // Responsive columns
  useEffect(() => {
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, [defaultCols]);

  // Compute span for a single index
  const computeSpan = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    if (!containerWidth) return;

    const columnCount = cols;
    const colGap = gap;

    const colWidth =
      (containerWidth - (columnCount - 1) * colGap) / columnCount;
    const itemCols = Math.min(items[index].cols ?? 1, columnCount);
    const img = naturalSizes.current[index];
    if (!img) return;

    const itemWidth = itemCols * colWidth + (itemCols - 1) * colGap;
    const itemHeight = Math.round((img.h / img.w) * itemWidth);
    const span = Math.max(1, Math.ceil(itemHeight / rowHeight));

    setSpans((prev) => {
      if (prev[index] === span) return prev;
      return { ...prev, [index]: span };
    });
  };

  // Recompute all spans when cols/size change
  useEffect(() => {
    Object.keys(naturalSizes.current).forEach((k) => computeSpan(Number(k)));

    const ro = new ResizeObserver(() => {
      Object.keys(naturalSizes.current).forEach((k) => computeSpan(Number(k)));
    });

    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [cols, gap, rowHeight]);

  // Memoize the grid container's style
  const gridContainerStyle = useMemo(
    () => ({
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gridAutoRows: `${rowHeight}px`,
      gap: `${gap}px`,
    }),
    [cols, gap, rowHeight],
  );

  // Handle image load
  const handleLoad = (
    index: number,
    meta: { naturalWidth: number; naturalHeight: number },
  ) => {
    naturalSizes.current[index] = {
      w: meta.naturalWidth,
      h: meta.naturalHeight,
    };
    setLoadedImages((prev) => new Set(prev).add(index));
    computeSpan(index);
  };

  // Mobile Carousel View
  if (isMobile) {
    return (
      <div className="w-full">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="gallery-swiper"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt ?? `gallery-${i}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  // Desktop Masonry View
  return (
    <div className="w-full" ref={containerRef}>
      <div style={gridContainerStyle}>
        {items.map((item, i) => {
          const colSpan = Math.min(item.cols ?? 1, cols);
          const rowSpan = item.rows ?? spans[i] ?? 1;
          const isLoaded = loadedImages.has(i);

          return (
            <div
              key={i}
              style={{
                gridColumnEnd: `span ${colSpan}`,
                gridRowEnd: `span ${rowSpan}`,
                opacity: isLoaded ? 1 : 0,
              }}
              className="relative w-full h-full overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
            >
              <img
                src={item.src}
                alt={item.alt ?? `gallery-${i}`}
                sizes={
                  cols === 1
                    ? '100vw'
                    : cols === 2
                      ? '(max-width: 900px) 50vw, 33vw'
                      : '(max-width: 1280px) 33vw, 25vw'
                }
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                onLoad={(e) => {
                  const img = e.currentTarget;
                  handleLoad(i, {
                    naturalWidth: img.naturalWidth,
                    naturalHeight: img.naturalHeight,
                  });
                }}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
