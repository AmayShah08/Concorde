import React, { useState } from "react";
import { NavBar } from "../screens/Frame/sections/HeroSection/NavBar";
import { FooterSection } from "../screens/Frame/sections/FooterSection/FooterSection";
import { CarHireForm } from "../components/forms/carhire-form";

const CarHire = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <NavBar />

      {/* Hero Section with 4x4 Image and Message */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900">
        <img
          src="/cars/4x4.jpeg"
          alt="4x4 Safari Vehicle"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Freedom to explore safari options...consider a 4x4 at Concorde!
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Please feel free to contact us.
          </p>
          <button
            onClick={openModal}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Make a Car Hire Inquiry
          </button>
        </div>
      </section>

      {/* Modal for Car Hire Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
            <CarHireForm />
          </div>
        </div>
      )}

      <FooterSection />
    </>
  );
};

export default CarHire;