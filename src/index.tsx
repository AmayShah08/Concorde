import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Frame } from "./screens/Frame/Frame";
import { PopularDestinationsSection } from "./screens/Frame/sections/PopularDestinationsSection/PopularDestinationsSection";
import { DestinationDetails } from "./screens/Frame/sections/PopularDestinationsSection/DestinationDetails";
import { ScrollToTop } from "./components/ScrollToTop";
import { AboutUs } from "./pages/AboutUs";
import { Travel } from "./pages/Travel";
import {ContactUs } from "./pages/ContactUs";
import { CarHire } from "./pages/CarHire";
import 'leaflet/dist/leaflet.css';

// Placeholder components for new pages
//const SafarisPage = () => <div>Safaris Page</div>;
//const TravelPage = () => <div>Travel Page</div>;
//const CarHirePage = () => <div>Car Hire Page</div>;
//const AboutPage = () => <div>About Us Page</div>;
//const ContactPage = () => <div>Contact Us Page</div>;

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Frame */}
        <Route path="/" element={<Frame />} />

        {/* Popular Destinations Section */}
        <Route path="/destinations" element={<PopularDestinationsSection />} />

        {/* Destination Details Page */}
        <Route path="/destination/:name" element={<DestinationDetails />} />

        {/* New Pages */}
        <Route path="/travel" element={<Travel />} />
        <Route path="/carhire" element={<CarHire />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  </StrictMode>,
);