import React, { useState, useEffect } from "react";
import { NavBar } from "../screens/Frame/sections/HeroSection/NavBar";
import { FooterSection } from "../screens/Frame/sections/FooterSection/FooterSection";
import { CarHireForm } from "../components/forms/carhire-form";
import { X } from "lucide-react";

const CarHire = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isModalOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section - Increased to 90% of Viewport Height */}
      <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <img
            src="/cars/4x4.jpeg"
            alt="4x4 Safari Vehicle"
            // High-performance image settings
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover opacity-60 scale-105" 
          />
          {/* Enhanced overlay for better text readability on large images */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-black/20" /> 
        </div>

        {/* Content Overlay - Centered vertically and horizontally */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto mt-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] drop-shadow-2xl">
            Freedom to Explore <br />
            <span className="text-blue-400">Premium 4x4 Hire</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-100 font-light max-w-3xl mx-auto leading-relaxed">
            Uncompromising reliability for the Kenyan wilderness. 
            Tailored solutions for your ultimate safari journey.
          </p>
          
          <div className="flex justify-center">
            <button
              onClick={openModal}
              className="group relative w-full sm:w-auto bg-blue-600 text-white px-14 py-6 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/40 active:scale-95"
            >
              Make an Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Modal logic remains the same */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-xl relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-8 border-b">
              <h3 className="text-2xl font-bold text-gray-900">Car Hire Inquiry</h3>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={32} className="text-gray-400" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto">
              <CarHireForm />
            </div>
          </div>
        </div>
      )}

      <FooterSection />
    </div>
  );
};

export default CarHire;