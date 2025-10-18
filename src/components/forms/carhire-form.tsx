import React, { useState } from "react";

export const CarHireForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    pax: "",
    vehicleClass: "",
    needDriver: "",
    days: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form
        action="https://formsubmit.co/carhire@concorde.co.ke" // <-- your recipient email
        method="POST"
        className="space-y-4 bg-white p-6 rounded-lg shadow-md overflow-y-auto max-h-[90vh]"
      >
        <h3 className="text-xl font-semibold">Car Hire Inquiry</h3>

        {/* Name and Email Side by Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Number of Pax */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Pax
          </label>
          <input
            type="number"
            name="pax"
            value={formData.pax}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter number of passengers"
          />
        </div>

        {/* Preferred Vehicle Class in Two Columns */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Vehicle Class
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {["A", "B", "C", "D", "E"].map((v) => (
              <label key={v} className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="vehicleClass"
                  value={v}
                  checked={formData.vehicleClass === v}
                  onChange={handleChange}
                  required
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="text-gray-700">{v}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Do You Need a Driver? Side by Side */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Do You Need a Driver?
          </label>
          <div className="flex items-center gap-4 mt-2">
            {["Yes", "No"].map((v) => (
              <label key={v} className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="needDriver"
                  value={v}
                  checked={formData.needDriver === v}
                  onChange={handleChange}
                  required
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="text-gray-700">{v}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Number of Days */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Days
          </label>
          <input
            type="number"
            name="days"
            value={formData.days}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter number of days"
          />
        </div>

        {/* Hidden Inputs for Email Subject and Form Data */}
        <input type="hidden" name="_subject" value="Car Hire Inquiry" />
        <input type="hidden" name="Full Name" value={formData.fullName} />
        <input type="hidden" name="Email Address" value={formData.email} />
        <input type="hidden" name="Number of Pax" value={formData.pax} />
        <input type="hidden" name="Preferred Vehicle Class" value={formData.vehicleClass} />
        <input type="hidden" name="Need Driver" value={formData.needDriver} />
        <input type="hidden" name="Number of Days" value={formData.days} />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};