import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { CarHireForm } from "../../../../components/forms/carhire-form";
import { FlightForm } from "../../../../components/forms/flight-form";
import { SafariForm } from "../../../../components/forms/safari-form";

export const ServicesSection = (): JSX.Element => {
  // Service data for mapping
  const services = [
    {
      id: 1,
      title: "Custom Safaris",
      icon: "/safaris.svg",
      form: <SafariForm />,
    },
    {
      id: 2,
      title: "Car Rentals",
      icon: "/Car.svg",
      form: <CarHireForm />,
    },
    {
      id: 3,
      title: "Flight Booking",
      icon: "/Flights.svg",
      form: <FlightForm />,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<JSX.Element | null>(null);

  const openModal = (form: JSX.Element) => {
    setActiveForm(form);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveForm(null);
    setIsModalOpen(false);
  };

  return (
    <section className="w-full bg-neutral-50 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl text-center font-normal mb-16 font-['Inter',Helvetica]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-white rounded-lg shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] cursor-pointer"
              onClick={() => openModal(service.form)}
            >
              <CardContent className="p-6 flex flex-col items-center">
                <div className="flex items-center justify-center h-14 mb-4">
                  {/* Increased icon size */}
                  <img
                    className="w-20 h-20"
                    alt={`${service.title} icon`}
                    src={service.icon}
                  />
                </div>
                <h3 className="text-xl text-black font-normal font-['Inter',Helvetica] text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-neutral-600 font-normal font-['Inter',Helvetica] text-center">
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal for Forms */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            {activeForm}
          </div>
        </div>
      )}
    </section>
  );
};