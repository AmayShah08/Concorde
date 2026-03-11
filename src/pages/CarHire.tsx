import React, { useState, useEffect } from "react";
import { NavBar } from "../screens/Frame/sections/HeroSection/NavBar";
import { FooterSection } from "../screens/Frame/sections/FooterSection/FooterSection";
import { CarHireForm } from "../components/forms/carhire-form";
import { X } from "lucide-react"; // Assuming you are using lucide-react as in previous steps

const CarHire = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isModalOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section - Height adjusted for mobile (60vh) vs desktop (70vh) */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/cars/4x4.jpeg"
            alt="4x4 Safari Vehicle"
            className="w-full h-full object-cover opacity-50 scale-105" // slight scale prevents white edges
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-2xl">
            Freedom to explore safari options... 
            <span className="block text-blue-400 mt-2">Consider a 4x4 at Concorde!</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 font-medium">
            Personalized car hire solutions for the Kenyan terrain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              Make an Inquiry
            </button>
            <a 
              href="#fleet" // You can add a fleet section below later
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300"
            >
              View Our Fleet
            </a>
          </div>
        </div>
      </section>

      {/* Fleet Section Placeholder (Good for SEO and Responsiveness) */}
      <section id="fleet" className="py-16 bg-neutral-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-neutral-800">Reliable Vehicles for Every Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            From rugged 4x4 Land Cruisers for the deep bush to comfortable SUVs for city transfers, 
            our fleet is maintained to the highest safety standards.
          </p>
          
          {/* Mobile-friendly grid for cars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Car Card */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 group">
                <div className="overflow-hidden rounded-xl mb-4">
                    <img src="/cars/4x4.jpeg" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" alt="Land Cruiser" />
                </div>
                <h3 className="text-xl font-bold mb-1">Safari Land Cruiser</h3>
                <p className="text-sm text-gray-500 mb-4">Manual/Automatic • 4x4 • 7-Seater</p>
                <button onClick={openModal} className="text-blue-600 font-bold hover:underline">Enquire Now →</button>
            </div>
            {/* Add more cars as needed */}
          </div>
        </div>
      </section>

      {/* Modal - Fully Responsive for all screen heights */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-xl relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">Car Hire Inquiry</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={28} className="text-gray-500" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
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