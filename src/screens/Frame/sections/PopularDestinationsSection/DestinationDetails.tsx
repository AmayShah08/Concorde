import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { destinations } from "../../../../data/destinations";
import { FooterSection } from "../FooterSection/FooterSection";
import { NavBar } from "../HeroSection/NavBar";
import { SafariForm } from "../../../../components/forms/safari-form";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const FitBounds = ({ bounds }: { bounds: [[number, number], [number, number]] }) => {
  const map = useMap();

  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds);
    }
  }, [bounds, map]);

  return null;
};

export const DestinationDetails = (): JSX.Element => {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name || ""); // Decode name from the URL
  const destination = destinations.find((dest) => dest.name === decodedName);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  if (!destination) {
    return <div className="text-center text-red-500">Destination not found!</div>;
  }

  const toggleCollapse = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

        {/* Map and Overview Section */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Map Section */}
          <div className="w-full lg:w-1/2 h-96">
            <MapContainer
              className="h-full w-full rounded-lg shadow-md"
              center={[destination.latitude, destination.longitude]} // Fallback center
              zoom={6} // Fallback zoom
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <FitBounds
                bounds={[
                  [destination.bounds.southWest[0], destination.bounds.southWest[1]],
                  [destination.bounds.northEast[0], destination.bounds.northEast[1]],
                ]}
              />
              <Marker position={[destination.latitude, destination.longitude]}>
                <Popup>{destination.name}</Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Overview Section */}
          <div className="w-full lg:w-1/2">
            <p className="text-lg text-gray-700 text-justify">{destination.overview}</p>
          </div>
        </div>

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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {experience.image.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`${experience.title} - ${imgIndex + 1}`}
                        className="w-full h-48 object-cover rounded-md"
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

        {/* Make an Inquiry Button */}
        <div className="mt-8 text-center">
          <button
            onClick={openModal}
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
          >
            Make an Inquiry
          </button>
        </div>
      </div>

      {/* Modal for SafariForm */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <SafariForm />
          </div>
        </div>
      )}

      {/* Footer */}
      <FooterSection />
    </div>
  );
};