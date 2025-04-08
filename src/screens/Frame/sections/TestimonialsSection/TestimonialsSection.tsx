import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Service data for mapping
  const services = [
    {
      id: 1,
      title: "Car Rentals",
      description: "Explore with comfort and freedom",
      icon: "/frame-4.svg",
    },
    {
      id: 2,
      title: "Flight Booking",
      description: "Best deals on international flights",
      icon: "/frame-2.svg",
    },
    {
      id: 3,
      title: "Hotel Booking",
      description: "Luxury stays at amazing prices",
      icon: "/frame-5.svg",
    },
  ];

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
              className="bg-white rounded-lg shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a]"
            >
              <CardContent className="p-6 flex flex-col items-center">
                <div className="flex items-center justify-center h-11 mb-2">
                  <img
                    className="w-9 h-9"
                    alt={`${service.title} icon`}
                    src={service.icon}
                  />
                </div>
                <h3 className="text-xl text-black font-normal font-['Inter',Helvetica] text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-neutral-600 font-normal font-['Inter',Helvetica] text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
