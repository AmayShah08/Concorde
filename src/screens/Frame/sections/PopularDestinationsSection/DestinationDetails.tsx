import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { destinations } from "../../../../data/destinations";
import { FooterSection } from "../FooterSection/FooterSection";
import { NavBar } from "../HeroSection/NavBar";

export const DestinationDetails = (): JSX.Element => {
    const { name } = useParams<{ name: string }>();
    const decodedName = decodeURIComponent(name || ""); // Decode name from the URL
    const destination = destinations.find((dest) => dest.name === decodedName);
  
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
    if (!destination) {
      return <div className="text-center text-red-500">Destination not found!</div>;
    }
  
    const toggleCollapse = (index: number) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };
  
    return (
      <div className="flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <NavBar />
        <div className="container mx-auto px-4 py-12 flex-grow">
          {/* Hero Banner */}
          <div
            className="relative w-full h-64 bg-cover bg-center rounded-lg mb-6"
            style={{ backgroundImage: `url(${destination.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg" />
            <h1 className="absolute inset-x-0 bottom-4 text-center text-white text-4xl font-bold">
              {destination.name}
            </h1>
          </div>
  
          <p className="text-lg text-gray-700 mb-6 text-justify">{destination.overview}</p>
  
          <h2 className="text-2xl font-semibold mb-4">Top Experiences</h2>
          <div className="space-y-4">
            {destination.top_experiences.map((experience, index) => (
              <div key={index} className="border border-gray-300 rounded-md">
                {/* Collapsible Header */}
                <button
                  className="w-full flex justify-between items-center bg-gray-100 px-4 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-200"
                  onClick={() => toggleCollapse(index)}
                >
                  <span>{experience.title}</span>
                  <span>{expandedIndex === index ? "-" : "+"}</span>
                </button>
  
                {/* Collapsible Content */}
                {expandedIndex === index && (
                <div className="p-4 bg-white">
                    <p className="text-gray-700 mb-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-4 justify-between">
                    {experience.image.map((img, imgIndex) => (
                        <img
                        key={imgIndex}
                        src={img}
                        alt={`${experience.title} - ${imgIndex + 1}`}
                        className="w-1/45 h-48 object-cover rounded-md"
                        />
                    ))}
                    </div>
                </div>
                )}
              </div>
            ))}
          </div>
  
          <h2 className="text-2xl font-semibold mb-4 mt-8">Best Time to Visit</h2>
          <ul className="list-disc list-inside">
            {destination.time_to_visits.map((time_to_visit, index) => (
              <li key={index}>
                <span className="font-bold">{time_to_visit.months}</span> {time_to_visit.reason}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Footer */}
        <FooterSection />
      </div>
    );
  };