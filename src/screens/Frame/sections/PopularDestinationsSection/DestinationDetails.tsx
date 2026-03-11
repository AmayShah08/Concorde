import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { destinations } from "../../../../data/destinations";
import { FooterSection } from "../FooterSection/FooterSection";
import { NavBar } from "../HeroSection/NavBar";
import { SafariForm } from "../../../../components/forms/safari-form";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { X, ChevronDown, ChevronUp } from "lucide-react"; // Better icons for mobile

const FitBounds = ({ bounds }: { bounds: [[number, number], [number, number]] }) => {
  const map = useMap();
  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, { padding: [20, 20] }); // Added padding for better mobile framing
    }
  }, [bounds, map]);
  return null;
};

const DestinationDetails = (): JSX.Element => {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name || "");
  const destination = destinations.find((dest) => dest.name === decodedName);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!destination) {
    return <div className="text-center text-red-500 py-20">Destination not found!</div>;
  }

  const toggleCollapse = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="flex-grow pt-16 md:pt-24">
        {/* Hero Banner - Responsive Height */}
        <div
          className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center mb-6"
          style={{ backgroundImage: `url(${destination.image})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
             <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center drop-shadow-lg">
                {destination.name}
             </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
          {/* Map and Overview Section - Stacked on Mobile, Side-by-Side on Desktop */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Map Section - Fixed aspect ratio for mobile */}
            <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[450px] relative z-0">
              <MapContainer
                className="h-full w-full rounded-xl shadow-lg"
                center={[destination.latitude, destination.longitude]}
                zoom={6}
                scrollWheelZoom={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; OpenStreetMap'
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
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800">About {destination.name}</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {destination.overview}
              </p>
              <div className="mt-6">
                 <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full md:w-auto bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
                  >
                    Make an Inquiry
                  </button>
              </div>
            </div>
          </div>

          {/* Top Experiences Section */}
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-800 border-b pb-2">
              Top Experiences
            </h2>
            <div className="space-y-4">
              {destination.top_experiences.map((experience, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
                  <button
                    className={`w-full flex justify-between items-center px-5 py-4 text-left transition-colors ${
                      expandedIndex === index ? "bg-blue-50" : "hover:bg-gray-50"
                    }`}
                    onClick={() => toggleCollapse(index)}
                  >
                    <span className="text-lg font-semibold text-neutral-700">{experience.title}</span>
                    {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>

                  {expandedIndex === index && (
                    <div className="p-5 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-gray-600 mb-6 leading-relaxed">{experience.description}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {experience.image.map((img, imgIndex) => (
                          <div 
                            key={imgIndex} 
                            className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
                            onClick={() => setSelectedImage(img)}
                          >
                            <img
                              src={img}
                              alt={`${experience.title} ${imgIndex + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Inquiry Modal - Fully Responsive Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">Inquiry Form</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <SafariForm />
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white p-2">
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

      <FooterSection />
    </div>
  );
};

export default DestinationDetails;