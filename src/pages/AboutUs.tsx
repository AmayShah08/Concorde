import React from "react";
import { NavBar } from "../screens/Frame/sections/HeroSection/NavBar"; // Adjust the path based on your project structure
import { FooterSection } from "../screens/Frame/sections/FooterSection/FooterSection"; // Adjust the path based on your project structure

export const AboutUs = (): JSX.Element => {
    return (
        <>
            {/* Navbar */}
            <NavBar />

            {/* About Us Content */}
            <section className="py-20 w-full bg-neutral-50">
                <div className="max-w-[1280px] mx-60 px-4">
                    {/* Image Aligned to the left */}
                        <img
                            src="/Concorde.png"
                            alt="About Us"
                            className="float-left mr-6 mb-4 w-[600px] h-auto rounded-lg shadow-md"
                        />
                    </div>

                    {/* Content Section */}
                    <h2 className="text-4xl font-bold mb-4 text-center mx-60">About Concorde Car Hire & Safaris</h2>
                    <p className="text-lg text-neutral-700 leading-8 text-justify mx-60">
                        Founded in 1973, Concorde Car Hire was inspired by the iconic supersonic jet, Concorde —
                        a timeless symbol of innovation, speed, and elegance. While the aircraft now belongs to
                        history, its spirit of excellence lives on in our commitment to delivering top-tier,
                        personalized car hire services across Kenya. For over 30 years, we’ve chosen to remain
                        intentionally small and interactive, prioritizing quality over scale. Our clients aren’t just
                        served — they’re guided, supported, and welcomed like family.
                    </p>
                    <p className="text-lg text-neutral-700 leading-8 mt-4 text-justify mx-60">
                        In the mid-90s, growing demand from our car hire clientele sparked the natural evolution
                        into Concorde Safaris. Two decades later, we’ve become a trusted Destination Management
                        Company, known for crafting tailor-made African experiences that reflect each traveler’s
                        unique interests and dreams. From solo adventurers and families to university groups, NGO
                        teams, and diplomatic staff, we curate everything from classic Big Five safaris to immersive
                        cultural journeys — always with a personal touch.
                    </p>
                    <h3 className="text-2xl font-semibold mb-4 mt-8 mx-60">
                        Where We Take You
                    </h3>
                    <p className="text-lg text-neutral-700 leading-8 text-justify mx-60">
                    Our safaris span the best of Africa — both the iconic and the off-the-beaten-path:
                    </p>
                    <ul className="list-disc list-inside mt-4 text-lg text-neutral-700 leading-8 mx-60">
                        <li className="mb-2">East Africa: Kenya, Uganda, Tanzania, Zanzibar, Rwanda</li>
                        <li className="mb-2">Southern Africa: South Africa, Namibia, Botswana, Zambia, Zimbabwe</li>
                        <li className="mb-2">North Africa: Egypt, Ethiopia</li>
                        <li className="mb-2">Indian Ocean Escapes: Mauritius, Seychelles, and Madagascar</li>
                    </ul>
                    <p className="text-lg text-neutral-700 leading-8 mt-4 text-justify mx-60">
                    Whether by road or air, our safaris are designed to be immersive, unforgettable, and soul-stirring.
                    </p>
                    <h3 className="text-2xl font-semibold mb-4 mt-8 mx-60">
                        Why Choose Concorde?
                    </h3>
                    <ul className="list-none list-inside mt-4 text-lg text-neutral-700 leading-8 text-justify mx-60">
                        <li className="mb-2">
                        🧭 <strong>Personalised Service:</strong> We’re known for our warm, interactive approach. Our 
                        clients feel guided, supported, and truly cared for — especially in unfamiliar environments.
                        </li>
                        <li className="mb-2">
                        📆 <strong>Extensive Experience:</strong>With over two decades of safari planning under our belt, 
                        we’ve built a reputation for reliability and excellence across varied clientele.
                        </li>
                        <li className="mb-2">
                        🌍 <strong>Comprehensive Regional Coverage:</strong>We offer customized safaris across Eastern, 
                        Southern, and Northern Africa, along with exotic island destinations like Mauritius, Seychelles, 
                        and Madagascar.
                        </li>
                        <li className="mb-2">
                        ✈️ <strong>Expert Flight Coordination:</strong>Our team scouts the best routes and rates globally 
                        to create seamless, flights-inclusive safari packages — saving you time and hassle.
                        </li>
                        <li className="mb-2">
                        🦁 <strong>Knowledgeable Guides:</strong>Our guides are not only skilled drivers and game spotters, 
                        but also storytellers — passionate about sharing the history, culture, and wildlife of their homelands.
                        </li>
                        <li className="mb-2">
                        🚗 <strong>Reliable Vehicle Fleet:</strong>Our vehicles are handpicked for local conditions and expertly 
                        maintained to ensure comfort and reliability in even the most rugged terrains.
                        </li>
                        <li className="mb-2">
                        📞 <strong>Support:</strong>Clients have access to dedicated after-hours emergency contact numbers, 
                        with staff available to provide prompt assistance, always ensuring a seamless and stress-free experience.
                        </li>                    
                    </ul>
                    <h3 className="text-2xl font-semibold mb-4 mt-8 mx-60">
                        Visit Us
                        </h3>
                    <p className="text-lg text-neutral-700 leading-8 mt-4 text-justify mx-60">
                    We’re based at Westlands Square Offices in Nairobi’s vibrant Westlands area — a secure, convenient hub for 
                    all your travel arrangements.
                    </p>
            </section>

            {/* Footer */}
            <FooterSection />
        </>
    );
};
