import React, { useState } from "react";
import { NavBar } from "../screens/Frame/sections/HeroSection/NavBar";
import { FooterSection } from "../screens/Frame/sections/FooterSection/FooterSection";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Phone, Mail, Clock, MapPin, X } from "lucide-react";

// Fix for Leaflet default icon issues in some environments
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ContactUs = (): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openGoogleMaps = (lat: number, lng: number) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        window.open(url, "_blank");
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <NavBar />

            {/* Header Section */}
            <section className="pt-32 pb-12 bg-neutral-900 text-white text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                        At Concorde Safaris Ltd, we're here to assist you with all your travel and car hire needs. 
                        Whether you're planning a safari adventure or require reliable transportation, our team is ready to help.
                    </p>
                </div>
            </section>

            {/* Our Offices Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
                        <MapPin className="text-blue-600" /> Our Offices
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Safari & Travel Office */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-blue-900 mb-2">Safari & Travel</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    2nd Floor, Westlands Square Office, Next to Shell Petrol Station<br />
                                    P.o. Box 48829-00100, Nairobi, Kenya
                                </p>
                            </div>
                            <div className="rounded-xl overflow-hidden h-72 border border-gray-200 z-0">
                                <MapContainer
                                    className="h-full w-full"
                                    center={[-1.2631623, 36.8019044]}
                                    zoom={15}
                                    scrollWheelZoom={false}
                                >
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    <Marker 
                                        position={[-1.2631623, 36.8019044]}
                                        eventHandlers={{ click: () => openGoogleMaps(-1.2631623, 36.8019044) }}
                                    >
                                        <Popup>Main Office - Westlands Square</Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                            <button 
                                onClick={() => openGoogleMaps(-1.2631623, 36.8019044)}
                                className="mt-4 text-sm text-blue-600 font-semibold hover:underline self-start"
                            >
                                Open in Google Maps →
                            </button>
                        </div>

                        {/* Car Hire Office */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-blue-900 mb-2">Car Hire</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    St. Austin Shell in Lavington<br />
                                    P.O. Box 25053-00603, Nairobi, Kenya
                                </p>
                                <div className="h-[24px]" /> {/* Spacer to align maps */}
                            </div>
                            <div className="rounded-xl overflow-hidden h-72 border border-gray-200 z-0">
                                <MapContainer
                                    className="h-full w-full"
                                    center={[-1.2788448, 36.7700661]}
                                    zoom={15}
                                    scrollWheelZoom={false}
                                >
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    <Marker 
                                        position={[-1.2788448, 36.7700661]}
                                        eventHandlers={{ click: () => openGoogleMaps(-1.2788448, 36.7700661) }}
                                    >
                                        <Popup>Car Hire - Lavington</Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                            <button 
                                onClick={() => openGoogleMaps(-1.2788448, 36.7700661)}
                                className="mt-4 text-sm text-blue-600 font-semibold hover:underline self-start"
                            >
                                Open in Google Maps →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Contact & Hours */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        
                        {/* Column 1: Safaris/Flights */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><Phone size={24}/></div>
                                <h3 className="text-xl font-bold">Safaris & Flights</h3>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Call Us</p>
                                <p className="text-lg text-gray-800">+254 20 3743304</p>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email Support</p>
                                <p className="text-gray-800 underline">safaris@concorde.co.ke</p>
                                <p className="text-gray-800 underline">tours@concorde.co.ke</p>
                            </div>
                        </div>

                        {/* Column 2: Car Hire */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600"><Phone size={24}/></div>
                                <h3 className="text-xl font-bold">Car Hire</h3>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Call Us</p>
                                <p className="text-lg text-gray-800">+254 700 987 654</p>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email Support</p>
                                <p className="text-gray-800 underline">carhire@concorde.co.ke</p>
                            </div>
                        </div>

                        {/* Column 3: Hours */}
                        <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="text-orange-500" />
                                <h3 className="text-xl font-bold">Office Hours</h3>
                            </div>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Mon - Fri</span>
                                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Saturday</span>
                                    <span className="font-semibold">9:00 AM - 1:00 PM</span>
                                </li>
                                <li className="flex justify-between text-red-500">
                                    <span>Sun & Holidays</span>
                                    <span className="font-semibold">Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-20 text-center">
                        <div className="inline-block p-1 bg-blue-50 rounded-2xl">
                            <button
                                onClick={openModal}
                                className="bg-blue-600 text-white py-4 px-12 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1"
                            >
                                Send Us a Message
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Improved Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative overflow-hidden">
                        <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
                            <h3 className="text-2xl font-bold">Get in Touch</h3>
                            <button onClick={closeModal} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                        <form className="p-8 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                                <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+254..." />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                                    <input type="email" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                <textarea className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="How can we help?" rows={4}></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <FooterSection />
        </div>
    );
};

export default ContactUs;