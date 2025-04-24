import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

export const FooterSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    { icon: <PhoneIcon className="h-4 w-4" />, text: ( <>Safaris: +254 20 3743304 <br /> Car Hire: +254 20 4448953/4 </> ) },
    { icon: <MailIcon className="h-4 w-4" />, text: ( <>Safaris: safaris@concorde.co.ke <br /> Car Hire: carhire@concorde.co.ke <br /> Flights: tours@concorde.co.ke</>) },
    { icon: <MapPinIcon className="h-4 w-4" />, text: "2nd Floor, Westlands Square Office, Westlands" },
  ];

  // Quick links data
  const quickLinks = ["About Us", "Services", "Destinations", "Contact"];

  // Social media icons
  const socialIcons = [
    <FacebookIcon className="h-4 w-4" key="facebook" />,
    <TwitterIcon className="h-4 w-4" key="twitter" />,
    <InstagramIcon className="h-4 w-4" key="instagram" />,
    <YoutubeIcon className="h-4 w-4" key="youtube" />,
  ];

  return (
    <footer className="w-full bg-neutral-800 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="font-normal text-xl text-white">Concorde Safaris Limited</h3>
            <p className="font-normal text-base text-neutral-400">
              At Concorde we work with you to give flight to your African dream.
            </p>
             {/* KATA & KATO Images */}
              <div className="flex space-x-4">
              <img
                src="/KATA LOGO.png"
                alt="KATA"
                className="w-24 h-20 object-cover rounded-md"
              />
              <img
                src="/KATO LOGO.png"
                alt="KATO"
                className="w-24 h-20 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-normal text-base text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-normal text-base text-neutral-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="font-normal text-base text-white">Contact Us</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span className="font-normal text-base text-neutral-400">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="font-normal text-base text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-700 text-center">
          <p className="font-normal text-base text-neutral-400">
            © 2025 Concorde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
