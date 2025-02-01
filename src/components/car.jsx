import React from 'react';
import carImage from '../images/tharcar.webp'; 

const Car = () => {
  return (
    <div className="bg-gray-100 w-full p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Find Your <span className="text-blue-600">Dream Car</span>
          </h1>
          <div className="mt-4 border-b-4 border-blue-600 w-24 mx-auto md:mx-0"></div>
          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
              New Cars
            </button>
            <button className="bg-white text-gray-800 border px-6 py-2 rounded-lg shadow-md hover:border-blue-600">
              Used Cars
            </button>
            <button className="bg-white text-gray-800 border px-6 py-2 rounded-lg shadow-md hover:border-blue-600">
              Sell a Car
            </button>
            <button className="bg-white text-gray-800 border px-6 py-2 rounded-lg shadow-md hover:border-blue-600">
              Auction
            </button>
            <button className="bg-white text-gray-800 border relative px-6 py-2 rounded-lg shadow-md hover:border-blue-600">
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
            Thar Roxx
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
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
            AI Search
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
            Find Cars
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-gray-800 text-xl font-bold border-b-4 border-blue-600 inline-block pb-2">
          Recently Launched Cars
        </h2>
      </div>
    </div>
  );
};

export default Car;
