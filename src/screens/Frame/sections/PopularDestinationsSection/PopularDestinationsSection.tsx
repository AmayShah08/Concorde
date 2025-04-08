import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { destinations } from "../../../../data/destinations";

export const PopularDestinationsSection = (): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Popular Destinations</h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-gray-200"
            onClick={scrollLeft}
          >
            &#8249;
          </button>

          {/* Side-Scrolling Cards */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-8 overflow-x-auto scrollbar-hide px-8"
          >
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="min-w-[350px] bg-white shadow-md rounded-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() =>
                  navigate(`/destination/${encodeURIComponent(destination.name)}`) // Use name in URL
                }
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-56 object-cover rounded-t-md"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium">{destination.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-gray-200"
            onClick={scrollRight}
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};