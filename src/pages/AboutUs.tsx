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
                <div className="max-w-[1280px] mx-auto px-4">
                    {/* Image Above the Content */}
                    <div className="mb-8 flex justify-center">
                        <img
                            src="/Concorde.png"
                            alt="About Us"
                            className="w-full max-w-[400px] h-auto rounded-lg shadow-md"
                        />
                    </div>

                    {/* Content Section */}
                    <h2 className="text-4xl font-bold mb-4 text-center">About Us</h2>
                    <h3 className="text-2xl font-semibold mb-8">
                        About Concorde Car Hire
                    </h3>
                    <p className="text-lg text-neutral-700 leading-8 text-justify">
                        Founded in 1973, Concorde Car Hire draws inspiration from the
                        legendary supersonic jet, Concorde — a symbol of innovation, speed,
                        and elegance. While the aircraft itself is now part of history, its
                        legacy of excellence lives on through our commitment to top-tier,
                        personalized car hire services in Kenya.
                    </p>
                    <p className="text-lg text-neutral-700 leading-8 mt-4 text-justify">
                        For over 30 years, we’ve remained intentionally small and
                        interactive, choosing quality over scale. Our clients aren’t just
                        served — they’re guided, supported, and welcomed like family.
                    </p>
                    <h3 className="text-2xl font-semibold mb-4 mt-8">
                        The evolution into Concorde Safaris
                    </h3>
                    <p className="text-lg text-neutral-700 leading-8 text-justify">
                        In the mid-90s, in response to increasing demand from our car hire clients, 
                        Concorde Safaris was born. Two decades on, we’ve grown into a trusted 
                        Destination Management Company, renowned for tailor-made African experiences 
                        that speak to the heart of each traveler.
                    </p>
                    <p className="text-lg text-neutral-700 leading-8 mt-4 text-justify">
                        We work with a diverse range of clients — from solo adventurers and families to 
                        university groups, NGO teams, and diplomatic staff. Whether you're after a classic 
                        Big Five safari or a special-interest cultural expedition, we craft experiences as 
                        unique as you are.
                    </p>
                    <h3 className="text-2xl font-semibold mb-4 mt-8">
                        Where We Take You
                    </h3>
                    <p className="text-lg text-neutral-700 leading-8 text-justify">
                    Our safaris span the best of Africa — both the iconic and the off-the-beaten-path:
                    </p>
                    <ul className="list-disc list-inside mt-4 text-lg text-neutral-700 leading-8">
                        <li className="mb-2">East Africa: Kenya, Uganda, Tanzania, Zanzibar, Rwanda</li>
                        <li className="mb-2">Southern Africa: South Africa, Namibia, Botswana, Zambia, Zimbabwe</li>
                        <li className="mb-2">North Africa: Egypt, Ethiopia</li>
                        <li className="mb-2">Indian Ocean Escapes: Mauritius, Seychelles, and Madagascar</li>
                    </ul>
                    <p className="text-lg text-neutral-700 leading-8 mt-4 text-justify">
                    Whether by road or air, our safaris are designed to be immersive, unforgettable, and soul-stirring.
                    </p>
                    <h3 className="text-2xl font-semibold mb-4 mt-8">
                        Why Choose Concorde?
                    </h3>
                    <ul className="list-none list-inside mt-4 text-lg text-neutral-700 leading-8">
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
                    <h3 className="text-2xl font-semibold mb-4 mt-8">
                        Visit Us
                        </h3>
                    <p className="text-lg text-neutral-700 leading-8 mt-4 text-justify">
                    We’re based at Westlands Square Offices in Nairobi’s vibrant Westlands area — a secure, convenient hub for 
                    all your travel arrangements.
                    </p>
                    <p className="text-lg text-neutral-700 leading-8 mt-4 text-justify">
                    Concorde Car Hire and Concorde Safaris are proud associate members of the well-established Concorde Group 
                    of Companies in Kenya — a testament to our enduring commitment to service and excellence.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <FooterSection />
        </>
    );
};
