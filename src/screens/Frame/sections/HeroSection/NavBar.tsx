import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react"; // Import icons for the hamburger menu
import { SafariForm } from "../../../../components/forms/safari-form";
import { CarHireForm } from "../../../../components/forms/carhire-form";
import { FlightForm } from "../../../../components/forms/flight-form";

export const NavBar = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const [activeForm, setActiveForm] = useState<"safari" | "carhire" | "flight">("safari");
  const [isScrolled, setIsScrolled] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if modal opens
  };
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Safaris", href: "/" },
    { label: "Travel", href: "/travel" },
    { label: "Car Hire", href: "/carhire" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "h-16 bg-white shadow-md" : "h-20 md:h-24 bg-gray-100"
      }`}
    >
      <div className="container mx-auto h-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className={`flex-shrink-0 transition-all duration-300 ${isScrolled ? "h-12" : "h-16"}`}>
            <Link to="/">
              <img className="h-full w-auto" alt="Logo" src="/Final-Logo.png" />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="font-medium text-sm lg:text-base text-neutral-700 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="default"
              className="bg-neutral-800 text-white rounded-lg"
              onClick={openModal}
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button - Hidden on Desktop */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neutral-700"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu Dropdown */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-4">
          <button onClick={() => setIsMobileMenuOpen(false)} className="self-end p-2"><X /></button>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-lg font-semibold text-neutral-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            className="w-full bg-neutral-800 text-white mt-4"
            onClick={openModal}
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Modal for Forms - Made responsive with w-11/12 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-4 md:p-6 relative max-h-[90vh] overflow-y-auto">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">✕</button>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6 mt-4">
              {["safari", "carhire", "flight"].map((type) => (
                <Button
                  key={type}
                  variant="outline"
                  className={`px-3 py-1 text-xs md:text-sm ${activeForm === type ? "bg-neutral-800 text-white" : ""}`}
                  onClick={() => setActiveForm(type as any)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)} Form
                </Button>
              ))}
            </div>
            {activeForm === "safari" && <SafariForm />}
            {activeForm === "carhire" && <CarHireForm />}
            {activeForm === "flight" && <FlightForm />}
          </div>
        </div>
      )}
    </header>
  );
};