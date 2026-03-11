import React, { useRef, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { destinations } from "../../../../data/destinations";

const PopularDestinationsSection = (): JSX.Element => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. Memoize grouping so it doesn't recalculate on every state change
  const groupedDestinations = useMemo(() => {
    return destinations.reduce((acc, destination) => {
      if (!acc[destination.category]) acc[destination.category] = [];
      acc[destination.category].push(destination);
      return acc;
    }, {} as Record<string, typeof destinations>);
  }, []);

  const categories = Object.keys(groupedDestinations);

  // 2. Optimized Scroll Function
  const scrollToCategory = (idx: number) => {
    if (scrollContainerRef.current) {
      const categoryDivs = scrollContainerRef.current.querySelectorAll(".category-section");
      if (categoryDivs[idx]) {
        categoryDivs[idx].scrollIntoView({ 
          behavior: "smooth", 
          block: "nearest", 
          inline: "start" 
        });
      }
    }
  };

  // 3. PERFORMANCE FIX: Use Intersection Observer instead of Scroll Listener
  useEffect(() => {
    const observerOptions = {
      root: scrollContainerRef.current,
      threshold: 0.6, // Trigger when 60% of the category is visible
      rootMargin: "0px"
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = categories.indexOf(entry.target.getAttribute("data-category") || "");
          if (index !== -1) setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Select all sections to observe
    const targets = scrollContainerRef.current?.querySelectorAll(".category-section");
    targets?.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [categories]);

  return (
    <section className="w-full bg-gray-50 py-10 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-neutral-800">
          Popular Destinations
        </h2>

        <div className="relative">
          {/* PERFORMANCE FIX: Added will-change and transform: translateZ(0) to trigger GPU */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 md:space-x-12 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory touch-pan-x"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              willChange: 'transform'
            }}
          >
            {Object.entries(groupedDestinations).map(([category, categoryDestinations]) => (
              <div 
                key={category} 
                data-category={category}
                className="flex-shrink-0 snap-start category-section w-[85vw] md:w-auto"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-neutral-700">{category}</h3>

                <div className="flex space-x-4">
                  {categoryDestinations.map((destination) => (
                    <div
                      key={destination.id}
                      className="w-[260px] md:min-w-[300px] bg-white shadow-sm rounded-xl overflow-hidden cursor-pointer transition-all snap-center hover:shadow-md active:scale-95"
                      style={{ transform: 'translateZ(0)' }} // GPU Layer Promotion
                      onClick={() => navigate(`/destination/${encodeURIComponent(destination.name)}`)}
                    >
                      <div className="relative h-40 md:h-48 overflow-hidden bg-gray-200">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          loading="lazy"
                          decoding="async" // Offloads image decoding from main thread
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
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