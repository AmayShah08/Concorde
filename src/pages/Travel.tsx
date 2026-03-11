import React, { useState } from "react";
import { NavBar } from "../screens/Frame/sections/HeroSection/NavBar";
import { FooterSection } from "../screens/Frame/sections/FooterSection/FooterSection";
import { FlightForm } from "../components/forms/flight-form";
import { X } from "lucide-react";

const Travel = (): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Airline Logos Array for cleaner rendering
    const airlines = [
        "AirAsia", "AirKenya", "AirArabia", "AirCanada", "AirFrance", "AirIndia",
        "Airlink", "BritishAirways", "BrusselsAirlines", "DeltaAirLines", "Emirates", "EthopianAir",
        "EtihadAirways", "IndiGo", "Jambojet", "KenyaAirways", "KLM", "Lufthansa",
        "Qantas", "QatarAirways", "RwandAir", "SafariLink", "TurkishAirlines", "PrecisonAir"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <NavBar />

            {/* Banner Section - Adjusted height for mobile */}
            <section className="relative w-full h-[40vh] md:h-[50vh] pt-16">
                <div
                    className="absolute inset-0 bg-cover bg-center md:bg-[center_-205px]"
                    style={{ backgroundImage: `url('/Airplane.jpg')` }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative flex items-center justify-center h-full px-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center drop-shadow-lg">
                        Custom Air Travel Solutions
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
                    
                    {/* Intro Paragraph - Removed fixed mx-60 */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                            At Concorde Safaris, we specialize in offering tailored air travel solutions, ensuring
                            seamless connections to all your travel destinations, both domestic and international.
                            Whether you're looking to fly to an exotic safari destination or a business hub, we will
                            customize your flight experience to suit your preferences and needs.
                        </p>
                    </div>

                    {/* Features Grid - Side-by-Side on Desktop, Stacked on Mobile */}
                    <div className="space-y-12">
                        {[
                            {
                                title: "Flight Booking Assistance",
                                img: "/Assistance.jpg",
                                text: "Booking flights doesn’t have to be stressful. Whether you're planning a safari getaway or a business trip, we provide personalized assistance to ensure you get the best routes, timings, and prices."
                            },
                            {
                                title: "Exclusive Airline Partnerships",
                                img: "/Partnerships.jpg",
                                text: "Our team has in-depth knowledge of airlines and destinations, allowing us to find the most convenient and cost-effective flights that align with your schedule and travel goals."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-white p-6 rounded-2xl shadow-sm`}>
                                <div className="w-full md:w-1/3">
                                    <img src={feature.img} alt={feature.title} className="w-full h-48 md:h-64 object-cover rounded-xl shadow-inner" />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-2xl font-bold mb-4 text-blue-900">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Airline Logo Grid - Responsive columns */}
                    <div className="mt-20">
                        <h3 className="text-2xl font-bold text-center mb-10 text-neutral-800">Our Trusted Partners</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {airlines.map((airline) => (
                                <div key={airline} className="p-2 hover:scale-110 transition-transform">
                                    <img 
                                        src={`Logos/${airline}.png`} 
                                        alt={airline} 
                                        className="max-h-12 w-auto mx-auto object-contain" 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Features - 2 Column Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mt-20">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-2xl">🎟️</span> Seamless Ticketing
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                We ensure quick and efficient ticketing. Our dedicated team not only assists with booking but also checks you in and sends your boarding pass directly to you.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-2xl">📞</span> 24/7 Customer Support
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Our team is available for booking changes, cancellations, or itinerary adjustments, ensuring you feel supported throughout your entire journey.
                            </p>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-16 text-center">
                        <button
                            onClick={openModal}
                            className="w-full md:w-auto bg-blue-600 text-white py-4 px-10 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                        >
                            Make a Flight Inquiry
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal - Optimized for mobile scrolling */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative max-h-[90vh] flex flex-col">
                        <div className="flex justify-between items-center p-5 border-b">
                            <h3 className="text-xl font-bold">Flight Inquiry</h3>
                            <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto">
                            <FlightForm />
                        </div>
                    </div>
                </div>
            )}

            <FooterSection />
        </div>
    );
};

export default Travel;