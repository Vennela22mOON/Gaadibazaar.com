import React, { useState } from "react";
import { FaCar, FaMotorcycle, FaTruck, FaTractor } from "react-icons/fa";
import { GiGasPump, GiElectric } from "react-icons/gi";
import { MdOutlineDirectionsCar, MdOutlineElectricCar } from "react-icons/md";

const Brands = () => {
  const [activeTab, setActiveTab] = useState("Brand");

  const tabs = ["Brand", "Fuel", "Budget", "Body Type"];

  const brands = [
    { name: "Maruti Suzuki", icon: <FaCar className="text-blue-500 text-2xl" /> },
    { name: "Mahindra", icon: <FaCar className="text-gray-500 text-2xl" /> },
    { name: "Hyundai", icon: <FaCar className="text-green-500 text-2xl" /> },
    { name: "Tata Motors", icon: <FaTruck className="text-yellow-500 text-2xl" /> },
    { name: "Toyota", icon: <FaCar className="text-red-500 text-2xl" /> },
    { name: "Honda", icon: <FaMotorcycle className="text-indigo-500 text-2xl" /> },
    { name: "Kia", icon: <FaCar className="text-purple-500 text-2xl" /> },
    { name: "Renault", icon: <FaCar className="text-orange-500 text-2xl" /> },
    { name: "Nissan", icon: <FaCar className="text-teal-500 text-2xl" /> },
    { name: "Volkswagen", icon: <FaCar className="text-pink-500 text-2xl" /> },
    { name: "Skoda", icon: <FaCar className="text-cyan-500 text-2xl" /> },
    { name: "Morris Garages", icon: <FaCar className="text-lime-500 text-2xl" /> },
  ];

  const fuelTypes = [
    { type: "Petrol", icon: <GiGasPump className="text-red-500 text-2xl" /> },
    { type: "Diesel", icon: <GiGasPump className="text-yellow-500 text-2xl" /> },
    { type: "Electric", icon: <GiElectric className="text-green-500 text-2xl" /> },
    { type: "Hybrid", icon: <GiElectric className="text-blue-500 text-2xl" /> },
  ];

  const budgetOptions = [
    { range: "Under $10,000", icon: <MdOutlineDirectionsCar className="text-blue-500 text-2xl" /> },
    { range: "$10,000 - $20,000", icon: <MdOutlineElectricCar className="text-green-500 text-2xl" /> },
    { range: "$20,000 - $30,000", icon: <FaCar className="text-yellow-500 text-2xl" /> },
    { range: "$30,000 - $50,000", icon: <FaTruck className="text-red-500 text-2xl" /> },
    { range: "Above $50,000", icon: <FaTractor className="text-purple-500 text-2xl" /> },
  ];

  return (
    <div className="p-4">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center bg-gray-200 p-2 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === tab ? "bg-blue-500 text-white" : "bg-white text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Brand" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all"
              >
                {brand.icon}
                <span className="mt-2 text-sm font-medium text-gray-800">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Fuel" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
            {fuelTypes.map((fuel, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all"
              >
                {fuel.icon}
                <span className="mt-2 text-sm font-medium text-gray-800">
                  {fuel.type}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Budget" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
            {budgetOptions.map((budget, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all"
              >
                {budget.icon}
                <span className="mt-2 text-sm font-medium text-gray-800">
                  {budget.range}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab !== "Brand" && activeTab !== "Fuel" && activeTab !== "Budget" && (
          <div className="text-center mt-4 text-gray-600">
            <p>Content for {activeTab} tab coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;
