import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavBar = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Car Rentals", href: "#" },
    { label: "Holiday Packages", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="w-full h-16 bg-white border-b">
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="h-8">
            <h1 className="font-normal text-2xl text-black">Concorde</h1>
          </div>

          {/* Navigation */}
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex space-x-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className="font-normal text-base text-neutral-700"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Book Now Button */}
          <Button
            variant="default"
            className="h-10 px-4 bg-neutral-800 text-white rounded-lg"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};
