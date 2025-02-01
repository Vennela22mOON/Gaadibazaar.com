import React from 'react';

const LoanForm = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-blue-900">Home Loan Application Form</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input type="text" placeholder="Enter your full name" className="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Monthly Income (in USD)</label>
          <input type="number" placeholder="Enter your monthly income" className="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Current Debt (if any)</label>
          <input type="number" placeholder="Enter your current debt" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">CIBIL Score</label>
          <input type="number" placeholder="Enter your CIBIL score" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Property Type</label>
          <select className="w-full px-4 py-2 border rounded-lg">
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="land">Land</option>
            <option value="commercial">Commercial Property</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Property Value (in USD)</label>
          <input type="number" placeholder="Enter the property value" className="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Down Payment (in USD)</label>
          <input type="number" placeholder="Enter your down payment" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Loan Amount Requested (in USD)</label>
          <input type="number" placeholder="Enter the loan amount requested" className="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Loan Term (in years)</label>
          <select className="w-full px-4 py-2 border rounded-lg">
            <option value="10">10 years</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="25">25 years</option>
            <option value="30">30 years</option>
          </select>
        </div>
        <button type="submit" className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
