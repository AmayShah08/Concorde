import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { destinations } from "../../../../data/rolodex";

export const DestinationSection = (): JSX.Element => {
  // Use loop and duration for smoother transitions
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 30 
  }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden group">
      {/* Carousel Container */}
      <div className="h-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex h-full">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="flex-[0_0_100%] min-w-0 relative h-full overflow-hidden"
            >
              {/* Animated Background Image */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out ${
                  index === selectedIndex ? "scale-110" : "scale-100"
                }`}
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                {/* Gradient Overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
              </div>

              {/* Central Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                <div className={`transition-all duration-1000 delay-300 transform ${
                  index === selectedIndex ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
                        <MapPin size={14} className="text-blue-400" /> Discover Africa
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
                        {destination.title}
                    </h2>
                    <p className="max-w-xl text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-lg font-light">
                        {destination.description}
                    </p>
                    <div className="mt-10">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-xl">
                            Explore Destination
                        </Button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Navigation - Hidden on mobile, shown on group hover on desktop */}
      <div className="hidden md:block">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
          onClick={scrollNext}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>

      {/* Progress Indicators (Dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-500 rounded-full h-1.5 ${
              index === selectedIndex ? "w-10 bg-blue-500" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};