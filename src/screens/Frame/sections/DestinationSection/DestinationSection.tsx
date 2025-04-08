import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { destinations } from "../../../../data/rolodex"; // Import destinations

export const DestinationSection = (): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0); // Track the active slide index
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]); // Store slide positions

  // Update the active slide index when the carousel changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Initialize the carousel and set up event listeners
  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative w-full h-[80vh]">
      {/* Static Text Content */}
      <div className="absolute inset-x-0 top-0 z-10 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-5xl font-medium font-['Roboto',Helvetica] tracking-normal mb-4 md:mb-8 text-white drop-shadow-lg">
              Your Next Destination Awaits
            </h2>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40" />
              </div>

              {/* Title and Description */}
              <div className="absolute left-20 top-[80%] -translate-y-1/2 z-20 text-white bg-gray-200 bg-opacity-50 border border-white p-4 rounded-md w-[300px] break-words">
                <h3 className="text-xl font-semibold">{destination.title}</h3>
                <p className="text-sm">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 z-20"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 z-20"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};