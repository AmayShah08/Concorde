import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { SafariForm } from "../../../../components/forms/safari-form";
import { CarHireForm } from "../../../../components/forms/carhire-form";
import { FlightForm } from "../../../../components/forms/flight-form";

export const NavBar = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<"safari" | "carhire" | "flight">("safari");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Navigation menu items data
  const navItems = [
    { label: "Safaris", href: "/safaris" },
    { label: "Travel", href: "/travel" },
    { label: "Car Hire", href: "/carhire" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full h-16 bg-white border-b">
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="h-20">
            <Link to="/">
              <img className="h-full" alt="Logo" src="/Final-Logo.png" />
            </Link>
          </div>

          {/* Navigation */}
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex space-x-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    asChild
                    className="font-normal text-base text-neutral-700"
                  >
                    <Link to={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Book Now Button */}
          <Button
            variant="default"
            className="h-10 px-4 bg-neutral-800 text-white rounded-lg"
            onClick={openModal}
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Modal for Forms */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="flex justify-center space-x-4 mb-4">
              <Button
                variant="outline"
                className={`px-4 py-2 ${activeForm === "safari" ? "bg-neutral-800 text-white" : ""}`}
                onClick={() => setActiveForm("safari")}
              >
                Safari Form
              </Button>
              <Button
                variant="outline"
                className={`px-4 py-2 ${activeForm === "carhire" ? "bg-neutral-800 text-white" : ""}`}
                onClick={() => setActiveForm("carhire")}
              >
                Car Hire Form
              </Button>
              <Button
                variant="outline"
                className={`px-4 py-2 ${activeForm === "flight" ? "bg-neutral-800 text-white" : ""}`}
                onClick={() => setActiveForm("flight")}
              >
                Flight Form
              </Button>
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