import React, { useEffect } from "react";

export const NewsletterSection = (): JSX.Element => {
  useEffect(() => {
    // Check if script already exists to avoid duplicates on re-renders
    const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.defer = true; // Use defer for better performance
      document.body.appendChild(script);

      return () => {
        // Only remove if it was this component that added it
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <section className="py-12 md:py-20 w-full bg-white">
      {/* 1. Changed py-20 to py-12 on mobile to reduce excessive white space.
          2. Added overflow-hidden to prevent widgets from creating horizontal scrollbars.
      */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-800">
            What Our Travelers Say
          </h2>
          <p className="text-neutral-600 mt-2 text-sm md:text-base">
            Trusted reviews from our community on Tripadvisor
          </p>
        </div>

        {/* First Elfsight Reviews Widget */}
        <div className="mt-8 md:mt-12 transition-all duration-500">
          <div
            className="elfsight-app-9576a0e2-3a03-4a10-84f6-233eb7d40d30"
            data-elfsight-app-lazy
          ></div>
        </div>

        {/* Second Elfsight Reviews Widget */}
        <div className="mt-8 md:mt-12 transition-all duration-500">
          <div
            className="elfsight-app-02568262-d321-4f97-ae9a-d6f6ca8577bc"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
};