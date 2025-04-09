import React, { useState } from "react";

export const FlightForm = (): JSX.Element => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        passportOrigin: "",
        adults: "",
        children: "",
        departureDate: "",
        arrivalDate: "",
        flexibleMonths: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Your flight inquiry has been submitted!");
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold">Flight Inquiry</h3>
            <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
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
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Passport Origin</label>
                <input
                    type="text"
                    name="passportOrigin"
                    value={formData.passportOrigin}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your passport origin"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Number of Adults</label>
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
                <label className="block text-sm font-medium text-gray-700">Number of Children (&lt;12 years)</label>
                <input
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter number of children"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Departure Date</label>
                <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Arrival Date</label>
                <input
                    type="date"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
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
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
                Submit Inquiry
            </button>
        </form>
    );
};