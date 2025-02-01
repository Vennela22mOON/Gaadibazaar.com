import React from "react";
import CarImage from "../images/red_car.avif"; 
import RupeeIcon from '../images/rupees_icon.png';

const RegisterCar = () => {
  return (
    <div className="relative w-full bg-gray-100">
      <div className="relative w-full max-w-7xl mx-auto px-5 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            Sell Your Cars at <br />
            <span className="text-black">Best Price !</span>
            <span className="text-blue-500"> GaadiBazaar</span>
          </h1>
          <p className="text-gray-600 text-lg mt-3">
            is a trusted platform to sell your cars to verified buyers and get the best value.
          </p>
        </div>
        <div className="relative md:w-1/2 flex justify-center">
          <img src={CarImage} alt="Car" className="w-full max-w-lg md:max-w-xl" />
          <img src={RupeeIcon} alt="₹" className="absolute top-0 left-5 w-10" />
          <img src={RupeeIcon} alt="₹" className="absolute top-10 right-10 w-10" />
          <img src={RupeeIcon} alt="₹" className="absolute bottom-5 left-20 w-10" />
        </div>
      </div>

      {/* Registration Input Box */}
      <div className="absolute left-1/2 bottom-[-40px] transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mb-7">
        <h3 className="text-lg font-semibold text-gray-800">GaadiBazaar</h3>
        <label className="block text-sm font-semibold text-gray-600 mt-2">
          VEHICLE REGISTRATION NUMBER
        </label>
        <div className="flex items-center mt-2 border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Enter the Registration Number"
            className="flex-1 px-4 py-2 outline-none text-gray-700"
          />
          <button className="bg-blue-500 text-white px-5 py-2">Enter</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterCar;
