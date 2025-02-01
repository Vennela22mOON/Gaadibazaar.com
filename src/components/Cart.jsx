import React, { useState, useRef } from "react";
import Car1 from "../images/car1.webp";
import Car2 from "../images/car2.webp";
import Car3 from "../images/car3.webp";
import Car4 from "../images/car4.webp";
import Car5 from "../images/car5.webp";

const Cart = () => {
  const [selectedCar, setSelectedCar] = useState(null); // State to hold selected car details
  const scrollRef = useRef(null);

  // Function to calculate loan EMI
  const calculateEMI = (loanAmount, interestRate, years) => {
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = years * 12;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return emi.toFixed(2);
  };

  // Sample loan parameters (you can customize this)
  const loanInterestRate = 8; // Example interest rate
  const loanTenure = 15; // Example tenure in years

  const carsData = [
    { img: Car1, name: "TOYOTA Corolla Altis", location: "Chennai", year: 2015, km: 100000, fuel: "Petrol", owner: "1st Owner", price: "₹ 8 Lakh*", brand: "Toyota", loanAmount: 800000 },
    { img: Car2, name: "TATA MOTORS Zest", location: "Chennai", year: 2017, km: 100000, fuel: "Petrol", owner: "4th Owner", price: "₹ 4 Lakh*", brand: "TATA", loanAmount: 400000 },
    { img: Car3, name: "MARUTI SUZUKI ALTO", location: "Chennai", year: 2020, km: 200000, fuel: "CNG", owner: "1st Owner", price: "₹ 3.5 Lakh*", brand: "Maruti Suzuki", loanAmount: 350000 },
    { img: Car4, name: "HONDA City [2008-2011]", location: "Chennai", year: 2011, km: 120000, fuel: "Petrol", owner: "2nd Owner", price: "₹ 4 Lakh*", brand: "Honda", loanAmount: 400000 },
    { img: Car5, name: "AUDI Q3 [2015-2020]", location: "Chennai", year: 2015, km: 50000, fuel: "Petrol", owner: "1st Owner", price: "₹ 18 Lakh*", brand: "Audi", loanAmount: 1800000 },
  ];

  // Handle the car click event to open the modal
  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedCar(null);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full bg-gray-100 px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">Popular Used Cars</h2>
      <div className="relative flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white shadow-md rounded-full p-3 hidden md:flex"
        >
          ❮
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {carsData.map((car, index) => (
            <div
              key={index}
              className="min-w-[250px] max-w-[300px] bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0 md:min-w-[280px] lg:min-w-[300px]"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-40 object-cover cursor-pointer"
                onClick={() => handleCarClick(car)} // On click, show the car details
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold truncate">{car.name}</h3>
                <p className="text-sm text-gray-500">{car.location}</p>
                <div className="flex flex-wrap justify-between text-gray-700 text-sm mt-2">
                  <span>{car.year}</span>
                  <span>{car.km} km</span>
                  <span>{car.fuel}</span>
                  <span>{car.owner}</span>
                </div>
                <p className="text-lg font-bold mt-2">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white shadow-md rounded-full p-3 hidden md:flex"
        >
          ❯
        </button>
      </div>

      {/* Modal for showing car details */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            <img
              src={selectedCar.img}
              alt={selectedCar.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold">{selectedCar.name}</h3>
            <p className="text-sm text-gray-500">{selectedCar.location}</p>
            <div className="mt-4 text-gray-700">
              <p><strong>Year:</strong> {selectedCar.year}</p>
              <p><strong>KM Driven:</strong> {selectedCar.km} km</p>
              <p><strong>Fuel Type:</strong> {selectedCar.fuel}</p>
              <p><strong>Owner:</strong> {selectedCar.owner}</p>
              <p><strong>Price:</strong> {selectedCar.price}</p>
              <p><strong>Brand:</strong> {selectedCar.brand}</p>
              <p><strong>Loan EMI:</strong> ₹{calculateEMI(selectedCar.loanAmount, loanInterestRate, loanTenure)} per month</p>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Apply for Loan
              </button>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white">
          View More
        </button>
      </div>
    </div>
  );
};

export default Cart;
