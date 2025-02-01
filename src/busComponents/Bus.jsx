import React, { useState } from "react";
import carImage from "../busComponents/busImages.jsx/bus1.jpg";
const Bus = () => {
  const [showAISearchForm, setShowAISearchForm] = useState(false);
  const handleAISearchClick = () => {
    setShowAISearchForm((prev) => !prev); 
  };
  const handleButtonClick = (action) => {
    alert(`You clicked on: ${action}`);
  };

  return (
    <div className="bg-gray-100 w-full p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Find Your <span className="text-blue-600">Dream Bus</span>
          </h1>
          <div className="mt-4 border-b-4 border-blue-600 w-24 mx-auto md:mx-0"></div>
          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <button
              onClick={() => handleButtonClick("New Cars")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
            >
              New Buses
            </button>
            <button
              onClick={() => handleButtonClick("Used Cars")}
              className="bg-white text-gray-800 border px-6 py-2 rounded-lg shadow-md hover:border-blue-600"
            >
              Used Buses
            </button>
            <button
              onClick={() => handleButtonClick("Sell a Car")}
              className="bg-white text-gray-800 border px-6 py-2 rounded-lg shadow-md hover:border-blue-600"
            >
              Sell a Bus
            </button>
            <button
              onClick={() => handleButtonClick("Auction")}
              className="bg-white text-gray-800 border px-6 py-2 rounded-lg shadow-md hover:border-blue-600"
            >
              Auction
            </button>
            <button
              onClick={() => handleButtonClick("Avail Loan")}
              className="bg-white text-gray-800 border relative px-6 py-2 rounded-lg shadow-md hover:border-blue-600"
            >
              Avail Loan
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
            </button>
          </div>
        </div>
        <div className="relative w-full md:w-1/2">
          <img src={carImage} alt="Car" className="rounded-lg shadow-md" />
          <div className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full font-bold text-lg shadow-md">
            Skyliner
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Search Cars or Brands"
          className="flex-grow bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={handleAISearchClick}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
          >
            AI Search
          </button>
          <button
            onClick={() => handleButtonClick("Find Cars")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
          >
            Find Buses
          </button>
        </div>
      </div>
      {showAISearchForm && (
        <div className="mt-6 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">AI Search Form</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Car Model or Features"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              onClick={() => alert("Searching using AI...")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>
      )}
      <div className="mt-8">
        <h2 className="text-gray-800 text-xl font-bold border-b-4 border-blue-600 inline-block pb-2">
          Recently Launched Buses
        </h2>
      </div>
    </div>
  );
};

export default Bus;
