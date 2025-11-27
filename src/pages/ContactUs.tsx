import React, { useState } from "react";
import { NavBar } from "../screens/Frame/sections/HeroSection/NavBar";
import { FooterSection } from "../screens/Frame/sections/FooterSection/FooterSection";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Bold } from "lucide-react";

const ContactUs = (): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    //Function to open Google Maps with the given coordinates in a new tab
    const openGoogleMaps = (lat: number, lng: number) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        window.open(url, "_blank");
    };

    return (
        <>
            {/* Navbar */}
            <NavBar />

            {/* Our Offices Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-[1280px] mx-auto px-4 mt-12">
                <h2 className="text-3xl font-bold mb-4 text-center mx-60">Contact Us</h2>
                    <p className="text-lg text-neutral-700 leading-8 text-justify mb-6">
                    At Concorde Safaris Ltd, we're here to assist you with all your travel and car hire needs. Whether you're planning a safari 
                    adventure or require reliable transportation, our team is ready to help.​
                    </p>
                    <h2 className="text-3xl font-bold text-center mb-8">📍Our Offices</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Nairobi Office */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold">Safari & Travel</h3>
                            <p className="text-gray-700">
                                2nd Floor, Westlands Square Office<br />
                                Next to Shell Petrol Station<br />
                                P.o. Box 48829-00100<br />
                                Nairobi, Kenya<br />
                                Office Hours: Mon-Fri: 9:00 AM - 5:00 PM<br />
                                Sat, Sun & Public Holidays: <strong>Closed</strong>
                            </p>
                            <MapContainer
                                className="h-64 w-90 rounded-lg shadow-md z-0"
                                center={[-1.2631623, 36.8019044]} // Nairobi Office coordinates
                                zoom={16}
                                scrollWheelZoom={false}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker
                                    position={[-1.2631623, 36.8019044]}
                                    eventHandlers={{
                                        click: () => {
                                            openGoogleMaps(-1.2631623, 36.8019044);
                                        },
                                    }}
                                >
                                    <Popup>Main Office</Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                        {/* Car Hire Office */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold">Car Hire</h3>
                            <p className="text-gray-700">
                                St. Austin Shell in Lavington<br />
                                P.O. Box 25053-00603<br />
                                Nairobi, Kenya<br /> < br /><br />
                            </p>
                            <MapContainer
                                className="h-64 w-90 rounded-lg shadow-md mt-6 z-0"
                                center={[-1.2788448, 36.7700661]} // Car Hire Office coordinates
                                zoom={16}
                                scrollWheelZoom={false}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker
                                    position={[-1.2788448, 36.7700661]}
                                    eventHandlers={{
                                        click: () => {
                                            openGoogleMaps(-1.2788448, 36.7700661);
                                        },
                                    }}
                                >
                                    <Popup>Car Hire Office</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get in Touch and Office Hours Section */}
            <section className="py-16 bg-white">
                <div className="max-w-[1280px] mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Get in Touch Section */}
                        <div>
                            <h2 className="text-3xl font-bold text-left mb-8">📞Get in Touch</h2>
                            <h3 className="text-xl font-bold">Safaris Inquiries:</h3>
                            <p className="text-gray-700">Phone: +254 20 3743304</p>
                            <p className="text-gray-700 mb-4">Email: safaris@concorde.co.ke</p>

                            <h3 className="text-xl font-bold">Flight Inquiries:</h3>
                            <p className="text-gray-700">Phone: +254 20 3743304</p>
                            <p className="text-gray-700 mb-4">Email: tours@concorde.co.ke</p>

                            <h3 className="text-xl font-bold">Car Hire Inquiries:</h3>
                            <p className="text-gray-700">Phone: +254 700 987 654</p>
                            <p className="text-gray-700 mb-4">Email: carhire@concorde.co.ke</p>
                        </div>

                        {/* Office Hours Section */}
                        <div>
                        <h2 className="text-3xl font-bold text-left mb-8">🏢Office Hours</h2>
                            <p className="text-lg text-gray-700">
                                Monday - Friday: 8:00 AM - 5:00 PM<br />
                                Saturday: 9:00 AM - 1:00 PM<br />
                                Sunday & Public Holidays: Closed
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Message Section */}
            <section className="py-0 bg-white mb-8">
                <div className="max-w-[1280px] mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                    <button
                        onClick={openModal}
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
                    >
                        Contact Us
                    </button>
                </div>
            </section>

            {/* Contact Us Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Number</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    placeholder="Your Phone Number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    placeholder="Your Message"
                                    rows={4}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Footer */}
            <FooterSection />
        </>
    );
};

export default ContactUs;