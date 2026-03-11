import React, { useState } from "react";
import { User, Mail, Users, Car, Calendar, Navigation } from "lucide-react";

export const CarHireForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    pax: "1",
    vehicleClass: "4x4 Safari Land Cruiser",
    needDriver: "Yes",
    startDate: "",
    endDate: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        action="https://formsubmit.co/carhire@concorde.co.ke"
        method="POST"
        className="space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
      >
        {/* FormSubmit Configuration */}
        <input type="hidden" name="_subject" value={`Car Hire Inquiry: ${formData.fullName}`} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        {/* Optional: <input type="hidden" name="_next" value="https://yourdomain.com/thanks" /> */}

        <div className="border-b pb-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Car className="text-blue-600" /> Car Hire Details
          </h3>
        </div>

        {/* Name & Email */}
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
              className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              placeholder="Jane Doe"
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
              className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              placeholder="jane@example.com"
            />
          </div>
        </div>

        {/* Vehicle Class & Pax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
              <Car size={14} /> Vehicle Class
            </label>
            <select
              name="vehicleClass"
              value={formData.vehicleClass}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:border-blue-500 outline-none"
            >
              <option>4x4 Safari Land Cruiser</option>
              <option>SUV (Rav4/Prado)</option>
              <option>Safari Van</option>
              <option>Saloon Car</option>
              <option>Luxury Sedan</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
              <Users size={14} /> Passengers
            </label>
            <input
              type="number"
              name="pax"
              min="1"
              value={formData.pax}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 outline-none"
            />
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
              <Calendar size={14} /> Hire Start
            </label>
            <input
              type="date"
              name="startDate"
              min={today}
              required
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
              <Calendar size={14} /> Hire End
            </label>
            <input
              type="date"
              name="endDate"
              min={formData.startDate || today}
              required
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 outline-none"
            />
          </div>
        </div>

        {/* Driver Selection - Modern Toggles */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
            <Navigation size={14} /> Need a Professional Driver?
          </label>
          <div className="flex gap-4">
            {["Yes", "No"].map((choice) => (
              <label 
                key={choice}
                className={`flex-1 text-center p-3 rounded-xl border-2 cursor-pointer transition-all font-bold ${
                  formData.needDriver === choice 
                  ? "border-blue-600 bg-blue-50 text-blue-600" 
                  : "border-gray-100 text-gray-400 hover:border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="needDriver"
                  value={choice}
                  checked={formData.needDriver === choice}
                  onChange={handleChange}
                  className="hidden"
                />
                {choice === "Yes" ? "Chauffeur Driven" : "Self Drive"}
              </label>
            ))}
          </div>
        </div>

        {/* Additional Message */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase">Special Requirements</label>
          <textarea
            name="message"
            rows={3}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-200 outline-none"
            placeholder="E.g. Baby seat required, Airport pickup..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95"
        >
          Check Availability
        </button>
      </form>
    </div>
  );
};