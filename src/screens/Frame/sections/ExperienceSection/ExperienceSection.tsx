import React from "react";
import { useNavigate } from "react-router-dom";

// Example card data
const cards = [
  { title: "Walk Among Giants", image: "/Exp/Wonder/karisa_walking_safari_1.webp", link: "/experience/safari" },
  { title: "Cycling Around Zanzibar", image: "/experience/beach.jpg", link: "/experience/beach" },
  { title: "Ride with the Wild", image: "/Exp/Wonder/HorsebackSafaris2.jpg", link: "/experience/mountain" },
  { title: "Luxury Cruises", image: "/experience/city.jpg", link: "/experience/city" },
  { title: "Mt. Kenya and Kilimanjaro Hiking", image: "/experience/culture.jpg", link: "/experience/culture" },
  { title: "Journey Back in Time", image: "/Exp/Wonder/Camel_Safaris_4.webp", link: "/experience/wildlife" },
];

export const ExperienceSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);

  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Fancy Title */}
        <h2
          className="text-3xl font-extrabold mb-16 text-center"
          style={{
            fontFamily: "Papyrus",
            color: "#000",
            letterSpacing: "0.05em",
          }}
        >
          A Life of Wonder and Beauty
        </h2>

        {/* Overlapping Cards */}
        <div className="relative flex justify-center items-center h-[400px]">
          <div
            className="relative"
            style={{
              width: `${300 + (cards.length - 1) * (260 - 60)}px`, // card width + (n-1) * (card width - overlap)
              height: "100%",
              left: "50%",
              transform: "translateX(-70%)",
            }}
          >
            {cards.map((card, idx) => {
              const cardWidth = 300; // Increased card width
              const overlap = -60;
              const left = idx * (cardWidth + overlap);
              const isAbove = idx % 2 === 0;
              const top = isAbove ? 0 : 60;
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={card.title}
                  className={`absolute transition-all duration-300 cursor-pointer shadow-lg rounded-xl bg-white group`}
                  style={{
                    left: `${left}px`,
                    top: `${top}px`,
                    width: `${cardWidth}px`,
                    zIndex: isHovered ? 100 : idx + 1,
                    boxShadow: isHovered
                      ? "0 24px 48px rgba(124,58,237,0.18)"
                      : "0 8px 24px rgba(60,60,120,0.12)",
                    transform: isHovered
                      ? "translateY(-48px) scale(1.12)"
                      : "none",
                    overflow: "hidden",
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => navigate(card.link)}
                >
                  <div
                    className="relative w-full h-[220px] rounded-xl"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ borderRadius: "0.75rem" }}
                    />
                    <div
                      className="absolute bottom-0 left-0 w-full p-4 text-center font-semibold text-lg text-white group-hover:text-yellow-200"
                      style={{
                        borderBottomLeftRadius: "0.75rem",
                        borderBottomRightRadius: "0.75rem",
                        background: "none", // Remove background
                      }}
                    >
                      {card.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};