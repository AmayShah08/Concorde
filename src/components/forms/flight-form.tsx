import React, { useState } from "react";
import { PlaneTakeoff, PlaneLanding, Users, Globe, Mail, User, Calendar, Award } from "lucide-react";

export const FlightForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    passportOrigin: "",
    adults: "1",
    children: "0",
    departureCity: "",
    destinationCity: "",
    departureDate: "",
    returnDate: "",
    travelClass: "Economy",
    flexibleMonths: "",
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

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form
        action="https://formsubmit.co/travel@concorde.co.ke"
        method="POST"
        className="space-y-6 bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 overflow-y-auto max-h-[85vh] custom-scrollbar"
      >
        {/* FormSubmit Config */}
        <input type="hidden" name="_subject" value={`Flight Inquiry: ${formData.departureCity} to ${formData.destinationCity}`} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        <div className="border-b pb-4">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <PlaneTakeoff className="text-blue-600" /> Flight Inquiry
          </h3>
          <p className="text-gray-500 text-sm mt-1">International & Domestic flight bookings.</p>
        </div>

        {/* SECTION 1: Passenger Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
              <User size={14} /> Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="Full name as per Passport"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
              <Mail size={14} /> Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="email@example.com"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
            <Globe size={14} /> Passport Origin
          </label>
          <input
            type="text"
            name="passportOrigin"
            required
            value={formData.passportOrigin}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="e.g. United Kingdom"
          />
        </div>

        {/* SECTION 2: Route */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
              <PlaneTakeoff size={14} /> Departure City
            </label>
            <input
              type="text"
              name="departureCity"
              required
              value={formData.departureCity}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
              placeholder="e.g. London"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
              <PlaneLanding size={14} /> Destination City
            </label>
            <input
              type="text"
              name="destinationCity"
              required
              value={formData.destinationCity}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
              placeholder="e.g. Nairobi"
            />
          </div>
        </div>

        {/* SECTION 3: Dates & Class */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
              <Calendar size={14} /> Departure
            </label>
            <input
              type="date"
              name="departureDate"
              min={today}
              required
              value={formData.departureDate}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
              <Calendar size={14} /> Return
            </label>
            <input
              type="date"
              name="returnDate"
              min={formData.departureDate || today}
              required
              value={formData.returnDate}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
              <Award size={14} /> Class
            </label>
            <select
              name="travelClass"
              value={formData.travelClass}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 bg-white outline-none"
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business Class</option>
              <option>First Class</option>
            </select>
          </div>
        </div>

        {/* SECTION 4: Passengers */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
              <Users size={14} /> Adults
            </label>
            <input
              type="number"
              name="adults"
              min="1"
              value={formData.adults}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
              <Users size={14} /> Children (&lt;12y)
            </label>
            <input
              type="number"
              name="children"
              min="0"
              value={formData.children}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Flexibility / Special Requests</label>
          <textarea
            name="flexibleMonths"
            rows={2}
            value={formData.flexibleMonths}
            onChange={handleChange}
            className="w-full p-3 mt-1 rounded-xl border border-gray-200 outline-none"
            placeholder="e.g. Flexible dates (+/- 3 days), preferred airline, or dietary needs..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-95"
        >
          Request Flight Quote
        </button>
      </form>
    </div>
  );
};