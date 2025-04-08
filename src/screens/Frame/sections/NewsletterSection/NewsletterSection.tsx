import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const NewsletterSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      quote: '"Amazing service! Our trip to Paris was perfectly planned."',
      avatar: "/mask-group.png",
      initials: "SJ",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      quote: '"Best travel agency I\'ve ever worked with!"',
      avatar: "/mask-group-1.png",
      initials: "MC",
    },
    {
      id: 3,
      name: "Emma Wilson",
      location: "London, UK",
      quote: '"Unforgettable experience in Bali thanks to TravelEase."',
      avatar: "/mask-group-2.png",
      initials: "EW",
    },
  ];

  return (
    <section className="py-20 w-full">
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-4xl text-center font-normal mb-12 leading-9 font-['Inter',Helvetica]">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-neutral-50 rounded-lg border-0"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-6">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-black font-normal text-base leading-4 font-['Inter',Helvetica]">
                      {testimonial.name}
                    </p>
                    <p className="text-neutral-600 font-normal text-base leading-4 mt-2 font-['Inter',Helvetica]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-neutral-600 font-normal text-base leading-normal font-['Inter',Helvetica]">
                  {testimonial.quote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
