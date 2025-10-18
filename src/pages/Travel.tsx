import React, {useState} from "react";
import { NavBar } from "../screens/Frame/sections/HeroSection/NavBar";
import { FooterSection } from "../screens/Frame/sections/FooterSection/FooterSection";
import { FlightForm } from "../components/forms/flight-form";


const Travel = (): JSX.Element => {

    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    return (
        <>
            {/* Navbar */}
            <NavBar />

            {/* Banner Section */}
            <section className="relative w-full h-[50vh]">
                <div
                    className="absolute inset-0 bg-cover bg-[center_-205px]"
                    style={{ backgroundImage: `url('/Airplane.jpg')` }} // Replace with your banner image path
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                </div>
                <div className="relative flex items-center justify-center h-full">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
                        Custom Air Travel Solutions
                    </h1>
                </div>
            </section>

            {/*Content Section */}
            {/* Content Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-[1280px] mx-auto px-4">
                    <p className="text-lg text-neutral-700 leading-8 text-justify mx-60">
                        At Concorde Safaris, we specialize in offering tailored air travel solutions, ensuring
                        seamless connections to all your travel destinations, both domestic and international.
                        Whether you're looking to fly to an exotic safari destination or a business hub, we will
                        customize your flight experience to suit your preferences and needs.
                    </p>
                    <h3 className="text-2xl font-semibold mt-8 mx-60">Flight Booking Assistance</h3>
                    <div className="flex items-start gap-4 p-6 rounded-lg max-w-3xl mx-auto">
                        
                        <img src="/Assistance.jpg" alt="Flight Booking" className="w-40 h-40 object-cover rounded-md" />
                        
                        <div>
                            <p className="text-gray-700">
                            Booking flights doesn’t have to be stressful. Whether you're planning a safari getaway, a business trip, or a family vacation, 
                            we provide personalized flight booking assistance to ensure you get the best routes, timings, and prices. 
                            Our team has in-depth knowledge of airlines and destinations, allowing us to find the most convenient and 
                            cost-effective flights that align with your schedule and travel goals.
                            </p>
                        </div>
                    </div>
                    <h3 className="text-2xl font-semibold mt-8 mx-60">Exclusive Airline Partnerships</h3>
                    <div className="flex items-start gap-4 p-6 rounded-lg max-w-3xl mx-auto">
                        
                        <img src="/Partnerships.jpg" alt="Airline Partnerships" className="w-40 h-40 object-cover rounded-md" />
                        
                        <div>
                            <p className="text-gray-700">
                            Booking flights doesn’t have to be stressful. Whether you're planning a safari getaway, a business trip, or a family vacation, 
                            we provide personalized flight booking assistance to ensure you get the best routes, timings, and prices. 
                            Our team has in-depth knowledge of airlines and destinations, allowing us to find the most convenient and 
                            cost-effective flights that align with your schedule and travel goals.
                            </p>
                        </div>
                    </div>

                    {/*Table Section */}
                    <div className="grid grid-cols-6 gap-4 mt-4 mx-auto">
                        {/* Row 1 */}
                        <img src="Logos/AirAsia.png" alt="AirAsia" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/AirKenya.png" alt="AirKenya" className="w-full h-auto object-cover rounded-md mt-6" />
                        <img src="Logos/AirArabia.png" alt="Airline 3" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/AirCanada.png" alt="Airline 4" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/AirFrance.png" alt="Airline 5" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/AirIndia.png" alt="Airline 6" className="w-full h-auto object-cover rounded-md" />

                        {/* Row 2 */}
                        <img src="Logos/Airlink.png" alt="Airline 7" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/BritishAirways.png" alt="Airline 8" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/BrusselsAirlines.png" alt="Airline 9" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/DeltaAirLines.png" alt="Airline 10" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/Emirates.png" alt="Airline 11" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/EthopianAir.png" alt="Airline 12" className="w-full h-auto object-cover rounded-md" />

                        {/* Row 3 */}
                        <img src="Logos/EtihadAirways.png" alt="Airline 13" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/IndiGo.png" alt="Airline 14" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/Jambojet.png" alt="Airline 15" className="w-full h-auto object-cover rounded-md mt-6" />
                        <img src="Logos/KenyaAirways.png" alt="Airline 16" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/KLM.png" alt="Airline 17" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/Lufthansa.png" alt="Airline 18" className="w-full h-auto object-cover rounded-md" />

                        {/* Row 4 */}
                        <img src="Logos/Qantas.png" alt="Airline 19" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/QatarAirways.png" alt="Airline 20" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/RwandAir.png" alt="Airline 21" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/SafariLink.png" alt="Airline 22" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/TurkishAirlines.png" alt="Airline 23" className="w-full h-auto object-cover rounded-md" />
                        <img src="Logos/PrecisonAir.png" alt="Airline 24" className="w-full h-auto object-cover rounded-md" />
                    </div>

                    <h3 className="text-2xl font-semibold mt-8 mx-60">Seamless Ticketing Process</h3>
                    <div className="flex items-start gap-4 p-6 rounded-lg max-w-3xl mx-auto">
                        
                        <img src="/Ticketing.jpg" alt="Ticketing" className="w-40 h-40 object-cover rounded-md" />
                        
                        <div>
                            <p className="text-gray-700">
                                Booking your flights with Concorde Safaris is simple and hassle-free.
                                We ensure quick and efficient ticketing with a seamless process from
                                start to finish. Our dedicated team not only assists with booking but
                                also checks you in for your flights and sends your boarding pass
                                directly to you. Whatever your preferences, we make the entire
                                ticketing process stress-free and convenient.
                            </p>
                        </div>
                    </div>
                    <h3 className="text-2xl font-semibold mt-8 mx-60">Customer Support</h3>
                    <div className="flex items-start gap-4 p-6 rounded-lg max-w-3xl mx-auto">
                        
                        <img src="/Service.jpg" alt="Service" className="w-40 h-40 object-cover rounded-md" />
                        
                        <div>
                            <p className="text-gray-700">
                            Our dedicated customer service team is available to aid with booking
                            changes, cancellations, or any queries regarding your flights. Whether
                            you need to adjust your itinerary or inquire about flight status, we are
                            here to offer fast and helpful solutions, ensuring you feel supported
                            throughout your journey.
                            </p>
                        </div>
                    </div>
                    <p className="text-lg text-neutral-700 leading-8 text-justify mx-60">
                        Our dedicated customer service team is available to aid with booking
                        changes, cancellations, or any queries regarding your flights. Whether
                        you need to adjust your itinerary or inquire about flight status, we are
                        here to offer fast and helpful solutions, ensuring you feel supported
                        throughout your journey.
                    </p>
                </div>
            </section>

            {/* Make an Inquiry Button */}
            <div className="mt-8 text-center mb-8">
                <button
                    onClick={openModal}
                    className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
                >
                    Make an Inquiry
                </button>
                </div>
            {/* Modal for TravelForm */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
                        <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                        <FlightForm />
                    </div>
                    </div>
                )}
            {/* Footer */}
            <FooterSection />
        </>
    );
};

export default Travel;