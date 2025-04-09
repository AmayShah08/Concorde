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
        <form className="space-y-4" onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold">Car Hire Inquiry</h3>
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
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Preferred Vehicle Class
                </label>
                <div className="mt-2 space-x-3">
                    <label className="inline-flex items-center space-x-1">
                        <input
                            type="radio"
                            name="vehicleClass"
                            value="A"
                            checked={formData.vehicleClass === "A"}
                            onChange={handleChange}
                            className="text-blue-500 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">A</span>
                    </label>
                    <label className="inline-flex items-center space-x-1">
                        <input
                            type="radio"
                            name="vehicleClass"
                            value="B"
                            checked={formData.vehicleClass === "B"}
                            onChange={handleChange}
                            className="text-blue-500 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">B</span>
                    </label>
                    <label className="inline-flex items-center space-x-1">
                        <input
                            type="radio"
                            name="vehicleClass"
                            value="C"
                            checked={formData.vehicleClass === "C"}
                            onChange={handleChange}
                            className="text-blue-500 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">C</span>
                    </label>
                    <label className="inline-flex items-center space-x-1">
                        <input
                            type="radio"
                            name="vehicleClass"
                            value="D"
                            checked={formData.vehicleClass === "D"}
                            onChange={handleChange}
                            className="text-blue-500 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">D</span>
                    </label>
                    <label className="inline-flex items-center space-x-1">
                        <input
                            type="radio"
                            name="vehicleClass"
                            value="E"
                            checked={formData.vehicleClass === "E"}
                            onChange={handleChange}
                            className="text-blue-500 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">E</span>
                    </label>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Do You Need a Driver?
                </label>
                <div className="mt-2 space-x-3">
                    <label className="inline-flex items-center space-x-1">
                        <input
                            type="radio"
                            name="needDriver"
                            value="Yes"
                            checked={formData.needDriver === "Yes"}
                            onChange={handleChange}
                            className="text-blue-500 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="inline-flex items-center space-x-1">
                        <input
                            type="radio"
                            name="needDriver"
                            value="No"
                            checked={formData.needDriver === "No"}
                            onChange={handleChange}
                            className="text-blue-500 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">No</span>
                    </label>
                </div>
            </div>
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
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
                Submit Inquiry
            </button>
        </form>
    );
};
