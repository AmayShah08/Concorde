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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your car hire inquiry has been submitted!");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form
        className="space-y-4 bg-white p-6 rounded-lg shadow-md overflow-y-auto max-h-[90vh]"
        onSubmit={handleSubmit}
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
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="vehicleClass"
                value="A"
                checked={formData.vehicleClass === "A"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-700">A</span>
            </label>
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="vehicleClass"
                value="B"
                checked={formData.vehicleClass === "B"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-700">B</span>
            </label>
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="vehicleClass"
                value="C"
                checked={formData.vehicleClass === "C"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-700">C</span>
            </label>
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="vehicleClass"
                value="D"
                checked={formData.vehicleClass === "D"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-700">D</span>
            </label>
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="vehicleClass"
                value="E"
                checked={formData.vehicleClass === "E"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-700">E</span>
            </label>
          </div>
        </div>

        {/* Do You Need a Driver? Side by Side */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Do You Need a Driver?
          </label>
          <div className="flex items-center gap-4 mt-2">
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="needDriver"
                value="Yes"
                checked={formData.needDriver === "Yes"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-700">Yes</span>
            </label>
            <label className="flex items-center gap-x-2">
              <input
                type="radio"
                name="needDriver"
                value="No"
                checked={formData.needDriver === "No"}
                onChange={handleChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-700">No</span>
            </label>
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter number of days"
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