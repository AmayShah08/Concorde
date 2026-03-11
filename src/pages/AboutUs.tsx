import React from "react";
import { NavBar } from "../screens/Frame/sections/HeroSection/NavBar";
import { FooterSection } from "../screens/Frame/sections/FooterSection/FooterSection";

const AboutUs = (): JSX.Element => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <NavBar />

            {/* About Us Content */}
            <section className="py-12 md:py-20 w-full bg-neutral-50 pt-24 md:pt-32">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
                    
                    {/* Header - Centered and responsive font size */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-neutral-800">
                        About Concorde Car Hire & Safaris
                    </h2>

                    {/* Main Content Area */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        
                        {/* Image Section - Takes full width on mobile, 40% on desktop */}
                        <figure className="w-full lg:w-5/12 shrink-0">
                            <img
                                src="/Concorde.png"
                                alt="About Us"
                                className="w-full h-auto rounded-2xl shadow-lg border border-neutral-200"
                            />
                            <figcaption className="mt-3 text-sm text-neutral-600 italic text-center lg:text-left">
                                Our vehicles on the fore of Concorde's maiden flight in 1975
                            </figcaption>
                        </figure>

                        {/* Text Content - Responsive alignment */}
                        <div className="w-full lg:w-7/12 space-y-6">
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed text-justify md:text-left">
                                Founded in 1973, Concorde Car Hire was inspired by the iconic supersonic jet, Concorde —
                                a timeless symbol of innovation, speed, and elegance. While the aircraft now belongs to
                                history, its spirit of excellence lives on in our commitment to delivering top-tier,
                                personalized car hire services across Kenya. For over 30 years, we’ve chosen to remain
                                intentionally small and interactive, prioritizing quality over scale. Our clients aren’t just
                                served — they’re guided, supported, and welcomed like family.
                            </p>
                            
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed text-justify md:text-left">
                                In the mid-90s, growing demand from our car hire clientele sparked the natural evolution
                                into Concorde Safaris. Three decades later, we’ve become a trusted Destination Management
                                Company, known for crafting tailor-made African experiences that reflect each traveler’s
                                unique interests and dreams.
                            </p>
                        </div>
                    </div>

                    {/* Lower Sections - Full width for readability */}
                    <div className="mt-12 space-y-12">
                        
                        {/* Where We Take You */}
                        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-neutral-100">
                            <h3 className="text-2xl font-bold mb-4 text-neutral-800">Where We Take You</h3>
                            <p className="text-lg text-neutral-700 mb-6">
                                Our safaris span the best of Africa — both the iconic and the off-the-beaten-path:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="p-4 bg-neutral-50 rounded-xl">
                                    <span className="font-bold block text-blue-600 mb-1">East Africa</span>
                                    <span className="text-sm">Kenya, Uganda, Tanzania, Zanzibar, Rwanda</span>
                                </div>
                                <div className="p-4 bg-neutral-50 rounded-xl">
                                    <span className="font-bold block text-blue-600 mb-1">Southern Africa</span>
                                    <span className="text-sm">South Africa, Namibia, Botswana, Zambia, Zimbabwe</span>
                                </div>
                                <div className="p-4 bg-neutral-50 rounded-xl">
                                    <span className="font-bold block text-blue-600 mb-1">North Africa</span>
                                    <span className="text-sm">Egypt, Ethiopia</span>
                                </div>
                                <div className="p-4 bg-neutral-50 rounded-xl">
                                    <span className="font-bold block text-blue-600 mb-1">Islands</span>
                                    <span className="text-sm">Mauritius, Seychelles, and Madagascar</span>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Concorde */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-neutral-800">Why Choose Concorde?</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { emoji: "🧭", title: "Personalised Service", desc: "We’re known for our warm, interactive approach. Our clients feel guided and truly cared for." },
                                    { emoji: "📆", title: "Extensive Experience", desc: "With over two decades of safari planning, we’ve built a reputation for reliability." },
                                    { emoji: "🌍", title: "Regional Coverage", desc: "Customized safaris across Eastern, Southern, and Northern Africa and exotic islands." },
                                    { emoji: "✈️", title: "Flight Coordination", desc: "Our team scouts the best routes globally to create seamless, inclusive packages." },
                                    { emoji: "🦁", title: "Knowledgeable Guides", desc: "Our guides are storytellers, passionate about sharing history, culture, and wildlife." },
                                    { emoji: "🚗", title: "Reliable Vehicle Fleet", desc: "Handpicked for local conditions and expertly maintained for comfort in rugged terrains." },
                                    { emoji: "📞", title: "24/7 Support", desc: "Access to dedicated emergency contacts for prompt assistance and stress-free travel." }
                                ].map((item, index) => (
                                    <li key={index} className="flex gap-4 p-4 hover:bg-white hover:shadow-md rounded-2xl transition-all">
                                        <span className="text-3xl shrink-0">{item.emoji}</span>
                                        <div>
                                            <h4 className="font-bold text-neutral-800">{item.title}</h4>
                                            <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Visit Us */}
                        <div className="text-center py-10 border-t border-neutral-200">
                            <h3 className="text-2xl font-bold mb-4 text-neutral-800">Visit Us</h3>
                            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                                We’re based at Westlands Square Offices in Nairobi’s vibrant Westlands area — a secure, convenient hub for 
                                all your travel arrangements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <FooterSection />
        </div>
    );
};

export default AboutUs;