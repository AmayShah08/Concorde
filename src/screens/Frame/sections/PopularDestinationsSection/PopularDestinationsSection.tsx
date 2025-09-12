import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { destinations } from "../../../../data/destinations";

export const PopularDestinationsSection = (): JSX.Element => {
  const navigate = useNavigate();

  // Group destinations by category
  const groupedDestinations = destinations.reduce((acc, destination) => {
    if (!acc[destination.category]) {
      acc[destination.category] = [];
    }
    acc[destination.category].push(destination);
    return acc;
  }, {} as Record<string, typeof destinations>);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Flatten categories for dot navigation
  const categories = Object.keys(groupedDestinations);

  // Scroll to category index
  const scrollToCategory = (idx: number) => {
    if (scrollContainerRef.current) {
      const categoryDivs = scrollContainerRef.current.querySelectorAll(".category-section");
      if (categoryDivs[idx]) {
        categoryDivs[idx].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      }
    }
  };

  // Track active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const categoryDivs = scrollContainerRef.current.querySelectorAll(".category-section");
        let foundIdx = 0;
        for (let i = 0; i < categoryDivs.length; i++) {
          const rect = (categoryDivs[i] as HTMLElement).getBoundingClientRect();
          if (rect.left >= scrollContainerRef.current.getBoundingClientRect().left - 10) {
            foundIdx = i;
            break;
          }
        }
        setActiveIndex(foundIdx);
      }
    };
    const ref = scrollContainerRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      return () => ref.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Popular Destinations</h2>

        {/* Single Scrollable Section */}
        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-8 overflow-x-auto overflow-y-hidden scrollbar-hide px-8 scroll-snap-x scroll-snap-mandatory will-change-transform"
          >
            {Object.entries(groupedDestinations).map(([category, destinations], idx) => (
              <div key={category} className="flex-shrink-0 scroll-snap-align-start category-section">
                {/* Category Title */}
                <h3 className="text-xl font-semibold mb-4">{category}</h3>

                {/* Destinations */}
                <div className="flex space-x-4">
                  {destinations.map((destination) => (
                    <div
                      key={destination.id}
                      className="min-w-[300px] bg-white shadow-md rounded-md cursor-pointer hover:shadow-lg transition-shadow scroll-snap-align-start"
                      onClick={() =>
                        navigate(`/destination/${encodeURIComponent(destination.name)}`)
                      }
                    >
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-48 object-cover rounded-t-md"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-medium">{destination.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {categories.map((_, idx) => (
              <button
                type="button"
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === activeIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={e => {
                  e.preventDefault(); // Prevent default scroll/focus
                  e.stopPropagation(); // Prevent bubbling
                  scrollToCategory(idx);
                  setActiveIndex(idx);
                }}
                tabIndex={0}
                aria-label={`Go to ${categories[idx]}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};