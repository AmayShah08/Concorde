import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { experiences, Experience } from "../../../../data/experience";
import { NavBar } from "../HeroSection/NavBar";
import { FooterSection } from "../FooterSection/FooterSection";
import { SafariForm } from "../../../../components/forms/safari-form";

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

  const openImageModal = (src: string) => setSelectedImage(src);
  const closeImageModal = () => setSelectedImage(null);

  const openInquiry = () => setIsModalOpen(true);
  const closeInquiry = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero */}
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${experience.images[0]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-x-0 bottom-4 text-center text-white">
          <h1 className="text-4xl font-bold">{experience.title}</h1>
          <p className="mt-1 text-lg">{experience.subHeading}</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 flex-grow">
        {/* Overview & Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold">
              {experience.title}
            </h2>

            <p className="text-lg text-gray-700">
              <strong>{experience.title}:</strong> {experience.description}
            </p>

            {/* Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {experience.images.map((src, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => openImageModal(src)}
                  className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-200"
                >
                  <img
                    src={src}
                    alt={`${experience.title} ${idx + 1}`}
                    className="w-full h-40 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Highlights & Practical Details sidebar */}
          <aside className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Highlights</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {experience.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Practical Details</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {experience.practicalDetails.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={openInquiry}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Make an Inquiry
              </button>
            </div>
          </aside>
        </div>

        {/* Additional content area (if needed) */}
        <section className="mt-12">
          <h4 className="text-lg font-semibold mb-3">More about this experience</h4>
          <p className="text-gray-700">
            Explore itineraries, recommended durations, and optional extras for {experience.title}.
            Contact us for a tailored quote.
          </p>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeImageModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-2 text-white text-2xl z-10"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Expanded"
              className="w-full h-auto max-h-[90vh] object-contain rounded-md shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Inquiry modal with SafariForm */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative overflow-auto max-h-[90vh]">
            <button
              onClick={closeInquiry}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              ✕
            </button>
            <SafariForm />
          </div>
        </div>
      )}

      <FooterSection />
    </div>
  );
};

export default ExperienceDetails;