import React, { useState } from "react";

export const SafariForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    adults: "",
    children: "",
    departureDate: "",
    arrivalDate: "",
    flexibleMonths: "",
    safariType: "",
    roomingConfig: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your safari inquiry has been submitted!");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form
        className="space-y-4 bg-white p-6 rounded-lg shadow-md overflow-y-auto max-h-[90vh]"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-semibold">Safari Inquiry</h3>

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
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Country of Origin */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country of Origin
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your country of origin"
          />
        </div>

        {/* Number of Adults and Children */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Adults
          </label>
          <input
            type="number"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter number of adults"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Children and their ages
          </label>
          <input
            type="text"
            name="children"
            value={formData.children}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter number of children and their ages"
          />
        </div>

        {/* Departure and Arrival Dates Side by Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Departure Date
            </label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Arrival Date
            </label>
            <input
              type="date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Flexible Travel Months */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            If dates are flexible, please specify Month(s) of travel
          </label>
          <input
            type="text"
            name="flexibleMonths"
            value={formData.flexibleMonths}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter flexible travel months"
          />
        </div>

        {/* Budget Options in Two Columns */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Budget
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="safariType"
                value="Luxury"
                checked={formData.safariType === "Luxury"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-700">Luxury</span>
            </label>
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="safariType"
                value="Mid-range"
                checked={formData.safariType === "Mid-range"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-700">Mid-range</span>
            </label>
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="safariType"
                value="Budget-friendly"
                checked={formData.safariType === "Budget-friendly"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-700">Budget-friendly</span>
            </label>
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="safariType"
                value="No preference"
                checked={formData.safariType === "No preference"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-700">No preference</span>
            </label>
          </div>
        </div>

        {/* Rooming Configuration */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Rooming Configuration
          </label>
          <input
            type="number"
            name="roomingConfig"
            value={formData.roomingConfig}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter preferred rooming configuration"
          />
        </div>

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