import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Frame } from "./screens/Frame/Frame";
import { PopularDestinationsSection } from "./screens/Frame/sections/PopularDestinationsSection/PopularDestinationsSection";
import { DestinationDetails } from "./screens/Frame/sections/PopularDestinationsSection/DestinationDetails";
import { ScrollToTop } from "./components/ScrollToTop";

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
      </Routes>
    </Router>
  </StrictMode>,
);