import React, { useState } from "react";
import Icon from "../icons/gaadiicon.png";
import {
  FaCar,
  FaMotorcycle,
  FaTruck,
  FaBus,
  FaCogs,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  const [selectedOption, setSelectedOption] = useState("Bangalore");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="bg-blue-800 flex flex-wrap justify-between items-center p-4">
        {/* Logo and Main Icons */}
        <div className="flex items-center gap-5 flex-wrap">
          <img src={Icon} alt="Gaadi" className="h-10 w-10" />
          <h1 className="text-white text-xl sm:text-2xl font-bold">Gaadi Bazaar.in</h1>
          {/* Hide some icons on smaller screens */}
          <div className="hidden sm:flex gap-4">
            <h1 className="text-white"><FaCar size={30} /></h1>
            <h1 className="text-white"><FaMotorcycle size={35} /></h1>
            <h1 className="text-white"><FaTruck size={30} /></h1>
            <h1 className="text-white"><FaCogs size={30} /></h1>
            <h1 className="text-white"><FaBus size={30} /></h1>
          </div>
        </div>

        {/* Dropdown and Search */}
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          {/* Dropdown */}
          <div className="relative">
            <select
              value={selectedOption}
              onChange={handleChange}
              className="bg-slate-100 rounded-lg px-4 py-2 text-gray-700 outline-none shadow-md appearance-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            >
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Chennai">Chennai</option>
            </select>
            <FaChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-slate-100 rounded-lg px-4 py-2 text-gray-700 outline-none shadow-md focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            />
            <FaSearch
              size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
