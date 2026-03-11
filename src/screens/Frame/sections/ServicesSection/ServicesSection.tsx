import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { X } from "lucide-react";

// 1. Define valid types for our dynamic forms
type ServiceType = 'safari' | 'car' | 'flight';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  type: ServiceType; // Use a type key instead of passing the whole component
}

export const ServicesSection = (): JSX.Element => {
  const services: Service[] = [
    {
      id: 1,
      title: "Custom Safaris",
      description: "Tailor-made journeys through East Africa's most iconic landscapes.",
      icon: "/safaris.svg",
      type: 'safari',
    },
    {
      id: 2,
      title: "Car Rentals",
      description: "Premium 4x4 vehicles and SUVs for self-drive or chauffeur-driven trips.",
      icon: "/Car.svg",
      type: 'car',
    },
    {
      id: 3,
      title: "Flight Booking",
      description: "Domestic and international flight arrangements at competitive rates.",
      icon: "/Flights.svg",
      type: 'flight',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<JSX.Element | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleOverflow = () => {
      document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    };
    handleOverflow();
    return () => { document.body.style.overflow = "unset"; };
  }, [isModalOpen]);

  // 2. Corrected Dynamic Import Logic
  const openModal = async (type: ServiceType) => {
    setIsLoading(true);
    try {
      let Component;
      // Note: Ensure these components use "export default" or adjust the destructuring
      if (type === 'safari') {
        const mod = await import("../../../../components/forms/safari-form");
        Component = mod.SafariForm; // Use mod.default if it's a default export
      } else if (type === 'car') {
        const mod = await import("../../../../components/forms/carhire-form");
        Component = mod.CarHireForm;
      } else {
        const mod = await import("../../../../components/forms/flight-form");
        Component = mod.FlightForm;
      }

      setActiveForm(<Component />);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Failed to load form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setActiveForm(null), 300);
  };

  return (
    <section className="w-full bg-neutral-50 py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Inter',Helvetica]">
            Travel Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            From rugged 4x4 rentals to bespoke safari itineraries, we provide everything 
            you need for a seamless East African adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`group bg-white rounded-2xl border-none shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2 ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}
              onClick={() => openModal(service.type)}
            >
              <CardContent className="p-10 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-6 rounded-2xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <img
                    className="w-16 h-16 group-hover:brightness-0 group-hover:invert transition-all"
                    alt={`${service.title} icon`}
                    src={service.icon}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-['Inter',Helvetica]">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-['Inter',Helvetica]">
                  {service.description}
                </p>
                <span className="mt-6 text-blue-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  {isLoading ? 'Loading...' : 'Inquire Now'} <span className="text-xl">→</span>
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal for Forms */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-[110]">
              <button
                onClick={closeModal}
                className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-10 max-h-[90vh] custom-scrollbar">
               {activeForm}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};