import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../icons/gaadiicon.png";
import {
  FaCar,
  FaMotorcycle,
  FaTruck,
  FaBus,
  FaCogs,
  FaSearch,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [selectedOption, setSelectedOption] = useState("Bangalore");
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoginFormVisible(false);
    setIsLoggedIn(true);
  };

  return (
    <div className="bg-blue-800">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img src={Icon} alt="Gaadi" className="h-10 w-10" />
          <h1 className="text-white text-xl sm:text-2xl font-bold">Gaadi Bazaar.in</h1>
        </div>
        <div className="hidden md:flex gap-4">
          <Link to='/'>
          <FaCar size={25} className="text-white" />
          </Link>
          <Link to='/bikes'>
          <FaMotorcycle size={30} className="text-white" />
          </Link>
          <Link to='/trucks'>
          <FaTruck size={25} className="text-white" />
          </Link>
          <Link to='/buses'>
          <FaBus size={25} className="text-white" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <select
              value={selectedOption}
              onChange={handleChange}
              className="bg-slate-100 rounded-lg px-4 py-2 text-gray-700 outline-none shadow-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-slate-100 rounded-lg px-4 py-2 text-gray-700 outline-none shadow-md focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {!isLoggedIn && (
            <button
              onClick={() => setIsLoginFormVisible(!isLoginFormVisible)}
              className="bg-white text-blue-800 px-4 py-2 rounded-lg shadow-md font-medium hover:bg-blue-100"
            >
              Sign In / Login
            </button>
          )}
        </div>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-blue-700 p-4">
          <div className="flex gap-3">
            <FaCar size={25} className="text-white" />
            <FaMotorcycle size={30} className="text-white" />
            <FaTruck size={25} className="text-white" />
            <FaCogs size={25} className="text-white" />
            <FaBus size={25} className="text-white" />
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <select
              value={selectedOption}
              onChange={handleChange}
              className="bg-slate-100 rounded-lg px-4 py-2 text-gray-700 outline-none shadow-md focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
            </select>

            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="bg-slate-100 rounded-lg px-4 py-2 text-gray-700 outline-none shadow-md focus:ring-2 focus:ring-blue-500 w-full"
              />
              <FaSearch size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {!isLoggedIn && (
            <button
              onClick={() => setIsLoginFormVisible(!isLoginFormVisible)}
              className="bg-white text-blue-800 px-4 py-2 rounded-lg shadow-md font-medium hover:bg-blue-100 w-full"
            >
              Sign In / Login
            </button>
          )}
        </div>
      )}
      {isLoginFormVisible && !isLoggedIn && (
        <div className="flex justify-center items-center mt-4">
          <form
            onSubmit={handleLogin}
            className="bg-white p-6 rounded-lg shadow-md w-full sm:w-2/3 md:w-1/3"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800">Login</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-800 text-white px-4 py-2 rounded-lg w-full font-medium hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {isLoggedIn && (
        <div className="text-center mt-4 text-green-600 font-medium">
          You have successfully logged in!
        </div>
      )}
    </div>
  );
}

export default Navbar;
