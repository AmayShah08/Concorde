import React, { useState } from "react";
import { User, Mail, Globe, Users, Calendar, Wallet, BedDouble } from "lucide-react";

export const SafariForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    adults: "1",
    children: "",
    departureDate: "",
    arrivalDate: "",
    flexibleMonths: "",
    safariType: "Mid-range",
    roomingConfig: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Get today's date in YYYY-MM-DD format for date picker validation
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form
        action="https://formsubmit.co/safaris.travel@concorde.co.ke"
        method="POST"
        className="space-y-8 bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 overflow-y-auto max-h-[85vh] custom-scrollbar"
      >
        <div className="border-b pb-4">
          <h3 className="text-2xl font-bold text-gray-900">Plan Your Safari</h3>
          <p className="text-gray-500 text-sm mt-1">Tell us your preferences and we'll craft the perfect itinerary.</p>
        </div>

        {/* Hidden FormSubmit Configuration */}
        <input type="hidden" name="_subject" value={`New Safari Inquiry from ${formData.fullName}`} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        {/* SECTION 1: Personal Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-wider">
            <User size={16} /> 1. Contact Details
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Country of Origin *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="e.g. United Kingdom"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="+1 234 567 890"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: Travel Dates */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-wider">
            <Calendar size={16} /> 2. Dates & Flexibility
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Approx. Arrival Date</label>
              <input
                type="date"
                name="arrivalDate"
                min={today}
                value={formData.arrivalDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Approx. Departure Date</label>
              <input
                type="date"
                name="departureDate"
                min={formData.arrivalDate || today}
                value={formData.departureDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Flexible Travel Months</label>
            <input
              type="text"
              name="flexibleMonths"
              value={formData.flexibleMonths}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="e.g. Flexible for June or July 2024"
            />
          </div>
        </div>

        {/* SECTION 3: Group & Accommodation */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-wider">
            <Users size={16} /> 3. Group Size & Rooms
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Number of Adults</label>
              <input
                type="number"
                name="adults"
                min="1"
                value={formData.adults}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Children (Ages)</label>
              <input
                type="text"
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="e.g. 2 children (ages 8 and 12)"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Rooming Configuration</label>
            <textarea
              name="roomingConfig"
              rows={2}
              value={formData.roomingConfig}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="e.g. 1 Double room, 1 Twin room"
            />
          </div>
        </div>

        {/* SECTION 4: Budget */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-wider">
            <Wallet size={16} /> 4. Preferred Safari Tier
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Luxury", "Mid-range", "Budget-friendly", "No preference"].map((tier) => (
              <label 
                key={tier}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  formData.safariType === tier 
                  ? "border-blue-500 bg-blue-50 text-blue-700" 
                  : "border-gray-100 bg-gray-50 text-gray-600 hover:border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="safariType"
                  value={tier}
                  checked={formData.safariType === tier}
                  onChange={handleChange}
                  className="hidden"
                />
                <span className="text-xs font-bold text-center">{tier}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl hover:bg-blue-700 transform active:scale-95 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
          >
            Send My Inquiry
          </button>
          <p className="text-center text-xs text-gray-400 mt-4 italic">
            Your inquiry will be sent directly to our safari experts at Concorde.
          </p>
        </div>
      </form>
    </div>
  );
};