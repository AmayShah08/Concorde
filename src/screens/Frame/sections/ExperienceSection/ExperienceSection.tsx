import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cards = [
  { title: "Walk Among Giants", image: "/Exp/Wonder/safari1.webp", link: "/experience/safari" },
  { title: "Cycling Around Zanzibar", image: "/Exp/Wonder/cycling1.jpg", link: "/experience/cycling" },
  { title: "Ride with the Wild", image: "/Exp/Wonder/horseback2.jpg", link: "/experience/horseback" },
  { title: "Luxury Cruises", image: "/Exp/Wonder/cruise1.jpg", link: "/experience/cruise" },
  { title: "Mountain Hiking", image: "/Exp/Wonder/mt1.jpg", link: "/experience/mountains" },
  { title: "Journey Back in Time", image: "/Exp/Wonder/camel4.webp", link: "/experience/camel" },
];

export const ExperienceSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="w-full py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 italic">
            A Life of Wonder and Beauty
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Mobile Layout: Scrollable List */}
        <div className="flex md:hidden overflow-x-auto gap-4 pb-8 no-scrollbar">
          {cards.map((card) => (
            <div 
              key={card.title}
              onClick={() => navigate(card.link)}
              className="min-w-[280px] h-[350px] relative rounded-2xl overflow-hidden shadow-md"
            >
              <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xl">{card.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout: Fancy Overlapping Cards */}
        <div className="hidden md:flex justify-center items-center h-[500px] relative">
          <div 
            className="relative flex"
            style={{ width: `${(cards.length * 200) + 100}px` }} 
          >
            {cards.map((card, idx) => {
              const isHovered = hoveredIdx === idx;
              const isAbove = idx % 2 === 0;

              return (
                <div
                  key={card.title}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => navigate(card.link)}
                  className="relative transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    width: "240px",
                    marginLeft: idx === 0 ? "0" : "-80px", // The Overlap
                    zIndex: isHovered ? 50 : idx,
                    transform: `translateY(${isHovered ? (isAbove ? -40 : 40) : (isAbove ? 0 : 60)}px) scale(${isHovered ? 1.1 : 1})`,
                  }}
                >
                  <div className={`
                    relative h-[380px] w-full rounded-2xl overflow-hidden transition-shadow duration-500
                    ${isHovered ? "shadow-2xl ring-4 ring-white" : "shadow-xl"}
                  `}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
                    />
                    
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                      <h3 className={`
                        text-white font-bold leading-tight transition-colors duration-300
                        ${isHovered ? "text-amber-300 text-2xl" : "text-lg"}
                      `}>
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12 hidden md:block">
          <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">
            — Hover over a journey to explore —
          </p>
        </div>
      </div>
    </section>
  );
};