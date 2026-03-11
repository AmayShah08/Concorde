import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons for the hamburger menu


export const NavBar = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "h-16 bg-white/80 backdrop-blur-md shadow-md border-b border-white/10" 
          : "h-20 bg-white/30 backdrop-blur-sm" 
      }`}
    >
      <div className="container mx-auto h-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo Section */}
<div className="flex-shrink-0 flex items-center h-full">
  <Link to="/" className="block">
    <img 
      className={`transition-all duration-500 ease-in-out w-auto object-contain ${
        isScrolled 
          ? "max-h-16" // Size when scrolled (smaller)
          : "max-h-20" // Original natural size (larger but contained)
      }`} 
      alt="Logo" 
      src="/Final-Logo.png" 
    />
  </Link>
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`font-bold text-sm uppercase tracking-widest transition-colors ${
                  isScrolled ? "text-neutral-800 hover:text-blue-600" : "text-black hover:text-blue-400 drop-shadow-sm"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors ${isScrolled ? "text-neutral-800" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};