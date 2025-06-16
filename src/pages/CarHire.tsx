import React, { useState } from "react";
import { NavBar } from "../screens/Frame/sections/HeroSection/NavBar";
import { FooterSection } from "../screens/Frame/sections/FooterSection/FooterSection";
import { CarHireForm } from "../components/forms/carhire-form";

// Dummy images for the rolodex
const carImages = [
  "/cars/suv-action.jpg",
  "/cars/sedan-action.jpg",
  "/cars/van-action.jpg",
  "/cars/4x4-action.jpg",
];

export const CarHire = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Simple rolodex logic
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <NavBar />

      {/* Rolodex Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-gray-100">
        <img
          src={carImages[currentImage]}
          alt="Car in action"
          className="h-full object-cover rounded-xl shadow-lg transition-all duration-700"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === currentImage ? "bg-blue-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-6 text-center">Explore Kenya with Confidence & Comfort</h3>
          <h3 className="text-3xl font-bold mb-6 text-center">Premium Self-Drive & Chauffeur-Driven Car Hire Services</h3>
          <p className="mb-4 text-lg text-gray-700">
            Whether you're heading into the city, exploring national parks, or embarking on a business trip — Concorde Car Hire offers reliable, well-maintained vehicles for every journey. Choose from a wide range of sedans, SUVs, and 4x4s — all backed by over 30 years of trusted service, AA membership, and full insurance coverage.
          </p>
          <ul className="list-none list-inside mb-6 text-gray-700">
            <li><strong>✔ Self-Drive & Chauffeur Options</strong></li>
            <li><strong>✔ Flexible Daily & Weekly Rates</strong></li>
            <li><strong>✔ Airport Pick-Up & Drop-Off Available</strong></li>
            <li><strong>📍Located at Shell Lavington | Serving Nairobi & Beyond</strong></li>
            <li><em>👉 Start your journey today – browse our fleet or get an instant quote.</em></li>
          </ul>
        </div>
      </section>

      {/* Vehicle Table Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Fleet Showcase</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-3 border">Vehicle Class</th>
                  <th className="py-2 px-3 border">Vehicle Type</th>
                  <th className="py-2 px-3 border">Daily Rate</th>
                  <th className="py-2 px-3 border">Weekly Rate</th>
                  <th className="py-2 px-3 border">Extra per km</th>
                  <th className="py-2 px-3 border">Features</th>
                  <th className="py-2 px-3 border">Use Limitations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-3 border">A</td>
                  <td className="py-2 px-3 border">Nissan Bluebird Sylphy</td>
                  <td className="py-2 px-3 border">Ksh 6,100</td>
                  <td className="py-2 px-3 border">Ksh 36,600</td>
                  <td className="py-2 px-3 border">Ksh 33.00</td>
                  <td className="py-2 px-3 border">A/C, Auto, 2000cc</td>
                  <td className="py-2 px-3 border">Not for game parks</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border">B</td>
                  <td className="py-2 px-3 border">Pajero IO</td>
                  <td className="py-2 px-3 border">Ksh 8,300</td>
                  <td className="py-2 px-3 border">Ksh 49,800</td>
                  <td className="py-2 px-3 border">Ksh 36.00</td>
                  <td className="py-2 px-3 border">A/C,  Small 4WD</td>
                  <td className="py-2 px-3 border">Limited park use</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border">C</td>
                  <td className="py-2 px-3 border">Nissan X-Trail</td>
                  <td className="py-2 px-3 border">Ksh 9,500</td>
                  <td className="py-2 px-3 border">Ksh 57,000</td>
                  <td className="py-2 px-3 border">Ksh 45.00</td>
                  <td className="py-2 px-3 border">A/C, Medium 4WD</td>
                  <td className="py-2 px-3 border">Limited park use</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border">D</td>
                  <td className="py-2 px-3 border">Mitsubishi Pajero (Auto)</td>
                  <td className="py-2 px-3 border">Ksh 10,900</td>
                  <td className="py-2 px-3 border">Ksh 65,400</td>
                  <td className="py-2 px-3 border">Ksh 47.00</td>
                  <td className="py-2 px-3 border">A/C, Roof hatch</td>
                  <td className="py-2 px-3 border">Game park friendly</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border">E</td>
                  <td className="py-2 px-3 border">Toyota Land Cruiser</td>
                  <td className="py-2 px-3 border">Ksh 14,500</td>
                  <td className="py-2 px-3 border">Ksh 87,000</td>
                  <td className="py-2 px-3 border">Ksh 59.00</td>
                  <td className="py-2 px-3 border">A/C, Roof hatch, 4500cc</td>
                  <td className="py-2 px-3 border">Safari ready</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">TERMS & CONDITIONS</h2>
          <h3 className="text-xl font-semibold mb-2">Included Services</h3>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Maintenance and A.A. Kenya membership</li>
            <li>CDW, TP, and TPI insurance</li>
            <li>100 km/day or 700 km/week free usage</li>
            <li>Nairobi Airport pick-up/drop-off available</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Pricing Notes</h3>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Rates are in Kenya Shillings, subject to 16% VAT</li>
            <li>Fuel/oil excluded</li>
            <li>Liability:</li>
            <ul className="list-disc list-inside">
              <li>Category A-C: Kshs 50,000</li>
              <li>Category D: Kshs 70,000</li>
              <li>Category E: Kshs 90,000</li>
            </ul>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Usage Guidelines</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Driver Requirements:</li>
            <ul className="list-disc list-inside">
              <li>Age: 25-70 years</li>
              <li>License: Clean, 3+ years</li>
            </ul>
            <li>Vehicles based in Nairobi – distances calculated from base</li>
            <li>No use allowed beyond Samburu, Maralal, Kitale, Malindi</li>
            <li>Limit long drives to 5–6 hrs/day</li>
            <li>Avoid night driving</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Optional Add-ons</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>🚐 Microbus & 22-Seater Bus Hire Available</li>
            <li>👨🏽‍✈️ Chauffeur services on request</li>
            <li>📦 Long-term rental discounts on request</li>
          </ul>
        </div>
      </section>

      {/* Inquiry Button */}
      <section className="py-8 bg-gray-50 text-center">
        <ul className="list-disc list-inside text-gray-700">
          <li>Book Now- Call +254 715 032 430 / +254 736 267 984</li>
          <li>carhire@concorde.co.ke</li>
          <li>Visit us at Shell Lavington Petrol Station, Opp. Lavington Mall</li>
        </ul>
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Make a Car Hire Inquiry
        </button>
      </section>

      {/* Modal for Car Hire Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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