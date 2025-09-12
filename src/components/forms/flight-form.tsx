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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <form
                action="https://formsubmit.co/tours@concorde.co.ke"
                method="POST"
                className="space-y-4 bg-white p-6 rounded-lg shadow-md overflow-y-auto max-h-[90vh]"
            >
                <h3 className="text-xl font-semibold">Flight Inquiry</h3>

                {/* Hidden custom label fields for FormSubmit */}
                <input type="hidden" name="_subject" value="Flight Inquiry" />
                <input type="hidden" name="Full Name" value={formData.fullName} />
                <input type="hidden" name="Email Address" value={formData.email} />
                <input type="hidden" name="Passport Origin" value={formData.passportOrigin} />
                <input type="hidden" name="Number of Adults" value={formData.adults} />
                <input type="hidden" name="Number of Children (<12 years)" value={formData.children} />
                <input type="hidden" name="Departure Date" value={formData.departureDate} />
                <input type="hidden" name="Arrival Date" value={formData.arrivalDate} />
                <input type="hidden" name="Flexible Travel Months" value={formData.flexibleMonths} />

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

                {/* Passport Origin */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Passport Origin
                    </label>
                    <input
                        type="text"
                        name="passportOrigin"
                        value={formData.passportOrigin}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your passport origin"
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
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter number of adults"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Number of Children (&lt;12 years)
                    </label>
                    <input
                        type="number"
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter number of children"
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
                            required
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
                            required
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