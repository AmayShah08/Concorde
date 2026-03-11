import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { destinations } from "../../../../data/destinations";

const PopularDestinationsSection = (): JSX.Element => {
  const navigate = useNavigate();

  const groupedDestinations = destinations.reduce((acc, destination) => {
    if (!acc[destination.category]) {
      acc[destination.category] = [];
    }
    acc[destination.category].push(destination);
    return acc;
  }, {} as Record<string, typeof destinations>);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = Object.keys(groupedDestinations);

  const scrollToCategory = (idx: number) => {
    if (scrollContainerRef.current) {
      const categoryDivs = scrollContainerRef.current.querySelectorAll(".category-section");
      if (categoryDivs[idx]) {
        categoryDivs[idx].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const categoryDivs = scrollContainerRef.current.querySelectorAll(".category-section");
        let foundIdx = 0;
        const containerLeft = scrollContainerRef.current.getBoundingClientRect().left;
        
        for (let i = 0; i < categoryDivs.length; i++) {
          const rect = (categoryDivs[i] as HTMLElement).getBoundingClientRect();
          if (rect.left >= containerLeft - 50) {
            foundIdx = i;
            break;
          }
        }
        setActiveIndex(foundIdx);
      }
    };
    
    const ref = scrollContainerRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll, { passive: true });
      return () => ref.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="w-full bg-gray-100 py-10 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-neutral-800">
          Popular Destinations
        </h2>

        <div className="relative">
          {/* Responsive changes:
              1. Changed padding (px-2 on mobile vs px-8 on desktop)
              2. Added snap-x and snap-mandatory for "magnetic" scrolling
          */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 md:space-x-12 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {Object.entries(groupedDestinations).map(([category, categoryDestinations]) => (
              <div key={category} className="flex-shrink-0 snap-start category-section w-[85vw] md:w-auto">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-neutral-700">{category}</h3>

                <div className="flex space-x-4">
                  {categoryDestinations.map((destination) => (
                    <div
                      key={destination.id}
                      className="w-[260px] md:min-w-[300px] bg-white shadow-sm rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-all snap-center"
                      onClick={() => navigate(`/destination/${encodeURIComponent(destination.name)}`)}
                    >
                      <div className="relative h-40 md:h-48 overflow-hidden">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-base md:text-lg font-medium text-neutral-800">{destination.name}</h4>
                        <p className="text-sm text-blue-600 mt-1 font-semibold">View Details →</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation - Optimized for touch */}
          <div className="flex justify-center mt-4 gap-3">
            {categories.map((_, idx) => (
              <button
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
                }`}
                onClick={() => scrollToCategory(idx)}
                aria-label={`Go to ${categories[idx]}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinationsSection;