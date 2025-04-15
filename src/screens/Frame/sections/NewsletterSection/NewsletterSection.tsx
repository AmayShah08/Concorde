import React, { useEffect } from "react";

export const NewsletterSection = (): JSX.Element => {
  useEffect(() => {
    // Dynamically add the Elfsight script to the DOM
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 w-full">
      <div className="max-w-[1280px] mx-auto px-4">

        {/* Elfsight Reviews from Tripadvisor */}
        <div className="mt-12">
          <div
            className="elfsight-app-9576a0e2-3a03-4a10-84f6-233eb7d40d30"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
};