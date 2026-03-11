import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { experiences, Experience } from "../../../../data/experience";
import { NavBar } from "../HeroSection/NavBar";
import { FooterSection } from "../FooterSection/FooterSection";
import { SafariForm } from "../../../../components/forms/safari-form";
import { X } from "lucide-react"; // Ensure lucide-react is installed

const ExperienceDetails = (): JSX.Element => {
  const params = useParams<Record<string, string>>();
  const param = params.name || params.slug || "";
  const decoded = decodeURIComponent(param || "");

  const experience: Experience | undefined =
    experiences.find((e) => e.title === decoded) ||
    experiences.find((e) => e.link.endsWith(decoded)) ||
    experiences.find((e) => encodeURIComponent(e.title) === param) ||
    experiences[0];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Experience not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />

      {/* Hero - Responsive Height and Text Scaling */}
      <div
        className="relative w-full h-56 sm:h-80 md:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${experience.images[0]})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-md">
            {experience.title}
          </h1>
          <p className="mt-2 text-sm md:text-xl font-light max-w-2xl opacity-90">
            {experience.subHeading}
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 md:py-16 flex-grow">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left Column: Overview & Gallery */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
                Overview
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {experience.description}
              </p>
            </section>

            {/* Gallery - Better Grid Spacing */}
            <section>
              <h3 className="text-xl font-semibold mb-4">Photo Gallery</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {experience.images.map((src, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(src)}
                    className="group relative overflow-hidden rounded-xl shadow-sm aspect-[4/3]"
                  >
                    <img
                      src={src}
                      alt={`${experience.title} ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar (Sticky on Desktop) */}
          <aside className="space-y-6">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Highlights</h3>
                <ul className="space-y-3">
                  {experience.highlights.map((h, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="mr-2 text-blue-500">•</span>
                      <span className="text-sm md:text-base">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Practical Details</h3>
                <ul className="space-y-3">
                  {experience.practicalDetails.map((p, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="mr-2 text-blue-500">✓</span>
                      <span className="text-sm md:text-base">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-neutral-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg active:scale-95"
              >
                Inquire About This Experience
              </button>
            </div>
          </aside>
        </div>

        {/* Info Section */}
        <section className="mt-16 p-8 bg-blue-50 rounded-3xl border border-blue-100">
          <h4 className="text-xl font-bold mb-3 text-blue-900">Plan Your Trip</h4>
          <p className="text-gray-700 max-w-3xl leading-relaxed">
            Every {experience.title} experience is unique. We specialize in tailoring 
            itineraries to your specific interests, whether you're looking for luxury, 
            adventure, or family-friendly options.
          </p>
        </section>
      </main>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full">
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Experience gallery"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}

      {/* Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative max-h-[90vh] flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-lg px-2">Book Experience</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <SafariForm />
            </div>
          </div>
        </div>
      )}

      <FooterSection />
    </div>
  );
};

export default ExperienceDetails;