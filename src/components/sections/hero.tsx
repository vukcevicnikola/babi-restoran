'use client';
import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/lib/utils';

const SLIDES = [
  {
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3',
    label: 'Signature Dishes',
  },
  {
    image:
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3',
    label: 'Our Kitchen',
  },
];

const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden px-4 md:mx-auto md:max-w-7xl">
      {/* Gradient background area */}
      <div className="h-2 w-full"></div>

      {/* Embla Carousel */}
      <div className="border-secondary/20 relative w-full rounded-2xl border">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {SLIDES.map((slide, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%]">
                <div className="relative h-[60vh] w-full overflow-hidden rounded-2xl md:h-[80vh] lg:h-[85vh]">
                  <Image
                    src={slide.image}
                    alt={`Restaurant ${slide.label.toLowerCase()} - fine dining experience`}
                    fill
                    className="h-full w-full object-cover object-center"
                    priority={index === 0}
                    sizes="100vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform">
          <div className="flex gap-2">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="px-1 py-2"
              >
                <div
                  className={cn(
                    'h-0.5 w-6 rounded-full transition-colors',
                    index === selectedIndex
                      ? 'bg-white'
                      : 'bg-white/40 hover:bg-white/60',
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
