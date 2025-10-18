import { StrictMode, lazy, Suspense } from "react"; // ⬅️ Ensure lazy and Suspense are imported
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import 'leaflet/dist/leaflet.css';

// 1. STATIC IMPORTS (Only for the main application shell/layout)
import { Frame } from "./screens/Frame/Frame";

// 2. DYNAMIC IMPORTS (These will create separate, load-on-demand chunks)
// Ensure all these components use 'export default' in their respective files.

const PopularDestinationsSection = lazy(() => 
  import("./screens/Frame/sections/PopularDestinationsSection/PopularDestinationsSection")
);

const DestinationDetails = lazy(() => 
  import("./screens/Frame/sections/PopularDestinationsSection/DestinationDetails")
);

const Travel = lazy(() => import("./pages/Travel"));
const CarHire = lazy(() => import("./pages/CarHire"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));


createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      {/* 3. WRAP Routes with Suspense */}
      <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
          {/* Main Frame (Static) */}
          <Route path="/" element={<Frame />} />

          {/* Dynamic Routes (Now code-split) */}
          <Route path="/destinations" element={<PopularDestinationsSection />} />
          <Route path="/destination/:name" element={<DestinationDetails />} />

          {/* Other Dynamic Pages */}
          <Route path="/travel" element={<Travel />} />
          <Route path="/carhire" element={<CarHire />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Suspense>
    </Router>
  </StrictMode>,
);