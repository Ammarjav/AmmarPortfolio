"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SlideItem from './SlideItem';

const slides = [
  {
    id: 1,
    tag: "Featured Project",
    title: "Clinic Log System",
    description: "A high-performance digital ecosystem for modern healthcare management and patient record optimization.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000",
    link: "https://clinic-log.vercel.app/"
  },
  {
    id: 2,
    tag: "Health Tech",
    title: "Ammar Physio",
    description: "Revolutionizing physiotherapy with personalized digital tracking and patient recovery empowerment.",
    image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=2000",
    link: "https://ammarphysio.vercel.app/"
  },
  {
    id: 3,
    tag: "Professional Services",
    title: "Digital Excellence",
    description: "Expert Web Development and Physiotherapy consultations tailored for the modern professional landscape.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000",
    link: "#services"
  }
];

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    duration: 40,
    skipSnaps: false
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // Auto-rotate every 3 seconds as requested

    return () => {
      clearInterval(intervalId);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] min-w-0" key={slide.id}>
              <SlideItem 
                {...slide} 
                isActive={selectedIndex === index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Professional Glassmorphism Style */}
      <button 
        onClick={scrollPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-5 rounded-full bg-white/10 backdrop-blur-xl text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} strokeWidth={2.5} />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-5 rounded-full bg-white/10 backdrop-blur-xl text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={32} strokeWidth={2.5} />
      </button>

      {/* Dots Navigation - Modern Bar Style */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 transition-all duration-700 rounded-full shadow-lg ${
              selectedIndex === index 
                ? 'w-16 bg-white' 
                : 'w-4 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;