import React from "react";
import { DestinationSection } from "./sections/DestinationSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { NavBar } from "./sections/HeroSection/NavBar";
import { NewsletterSection } from "./sections/NewsletterSection/NewsletterSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { PopularDestinationsSection } from "./sections/PopularDestinationsSection/PopularDestinationsSection";

export const Frame = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero and Destination sections */}
      <section className="w-full">
        <NavBar />
      </section>

      <section className="w-full">
        <DestinationSection />
      </section>

      <section className="w-full">
        <PopularDestinationsSection />
      </section>

      <section className="w-full">
        <NewsletterSection />
      </section>

      <section className="w-full">
        <ServicesSection />
      </section>

      <section className="w-full">
        <FooterSection />
      </section>
    </div>
  );
};
