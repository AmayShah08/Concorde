import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
  ExternalLink
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const FooterSection = (): JSX.Element => {
  const contactInfo = [
    { 
      icon: <PhoneIcon className="h-5 w-5 text-blue-500" />, 
      title: "Call Us",
      text: (
        <span className="leading-relaxed">
          Safaris: +254 20 3743304 <br /> 
          Car Hire: +254 700 987 654
        </span>
      ) 
    },
    { 
      icon: <MailIcon className="h-5 w-5 text-blue-500" />, 
      title: "Email Us",
      text: (
        <span className="leading-relaxed">
          safaris@concorde.co.ke <br /> 
          carhire@concorde.co.ke
        </span>
      ) 
    },
    { 
      icon: <MapPinIcon className="h-5 w-5 text-blue-500" />, 
      title: "Visit Us",
      text: "2nd Floor, Westlands Square Office, Westlands, Nairobi" 
    },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/#services" },
    { name: "Destinations", path: "/destinations" },
    { name: "Car Hire", path: "/carhire" },
    { name: "Flight Booking", path: "/travel" },
    { name: "Contact", path: "/contact" },
  ];

  const socialIcons = [
    { icon: <FacebookIcon size={18} />, href: "#" },
    { icon: <TwitterIcon size={18} />, href: "#" },
    { icon: <InstagramIcon size={18} />, href: "#" },
    { icon: <YoutubeIcon size={18} />, href: "#" },
  ];

  return (
    <footer className="w-full bg-neutral-900 text-neutral-300 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand & Certifications */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Concorde</h3>
              <p className="text-sm leading-relaxed text-neutral-400 italic">
                "At Concorde we work with you to give flight to your African dream."
              </p>
            </div>
            
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-3">Accredited Member</p>
              <div className="flex gap-3">
                <div className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-help group relative">
                   <img src="/KATA LOGO.png" alt="KATA" className="h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" />
                </div>
                <div className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-help group">
                   <img src="/KATO LOGO.png" alt="KATO" className="h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Details */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Get In Touch</h3>
            <ul className="space-y-6">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase text-neutral-500 tracking-wider mb-1">{item.title}</span>
                    <span className="text-sm text-neutral-300">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Social & Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Connect With Us</h3>
            <div className="flex gap-3 mb-8">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/50">
              <p className="text-xs font-bold text-blue-400 mb-2 underline decoration-blue-400/30">Opening Hours</p>
              <p className="text-xs text-neutral-400">Mon - Fri: 8:00 AM - 5:00 PM</p>
              <p className="text-xs text-neutral-400 mt-1">Sat: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500 text-center">
            © {new Date().getFullYear()} Concorde Safaris Ltd. Designed for Excellence.
          </p>
          <div className="flex gap-6 text-xs text-neutral-500 uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};