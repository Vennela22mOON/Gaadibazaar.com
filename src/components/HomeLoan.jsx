import React from "react";
import homeimage from '../images/homeloan.jpg';
import { Link } from "react-router-dom";
const HomeLoan = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-6 md:p-10 rounded-lg shadow-lg">
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">
          “Chola - Over 4 decades of helping millions enter a better life!”
        </h1>
        <p className="mt-4 text-gray-600">
          <span className="font-medium text-red-500">|</span> Doorstep Service
          <span className="mx-2 font-medium text-red-500">|</span> ITR/CIBIL Score NOT mandatory
        </p>
        <Link to='/loan_form'>
        <button
          className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300"
        >
          Apply Home Loan
        </button>
        </Link>
        
      </div>
      <div className="mt-6 md:mt-0 md:ml-10 flex justify-center items-center">
        <img
          src={homeimage}
          alt="Happy family with laptop"
          className="max-w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default HomeLoan;
