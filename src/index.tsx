import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import 'leaflet/dist/leaflet.css';
import "./index.css"; // Ensure your Tailwind/Global CSS is here

// Static Layout Parts
import { Frame } from "./screens/Frame/Frame";

// Dynamic Pages
const PopularDestinationsSection = lazy(() => import("./screens/Frame/sections/PopularDestinationsSection/PopularDestinationsSection"));
const DestinationDetails = lazy(() => import("./screens/Frame/sections/PopularDestinationsSection/DestinationDetails"));
const ExperienceDetails = lazy(() => import("./screens/Frame/sections/ExperienceSection/ExperienceDetails"));
const Travel = lazy(() => import("./pages/Travel"));
const CarHire = lazy(() => import("./pages/CarHire"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

// Simple Loader Component
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      {/* Use a better fallback than a simple div */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Frame />} />

          {/* Destination Routes */}
          <Route path="/destinations" element={<PopularDestinationsSection />} />
          <Route path="/destination/:name" element={<DestinationDetails />} />

          {/* Experience Routes */}
          <Route path="/experience/:name" element={<ExperienceDetails />} />

          {/* Main Navigation Pages */}
          <Route path="/travel" element={<Travel />} />
          <Route path="/carhire" element={<CarHire />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* 404 Catch-All Route */}
          <Route path="*" element={
            <div className="h-screen flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-6xl font-bold text-blue-600">404</h1>
              <p className="text-xl text-gray-600 mt-4">Oops! The destination you're looking for doesn't exist.</p>
              <a href="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold">Return Home</a>
            </div>
          } />
        </Routes>
      </Suspense>
    </Router>
  </StrictMode>
);