import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Car1 from "../images/car1.webp";
import Car2 from "../images/car2.webp";
import Car3 from "../images/car3.webp";
import Car4 from "../images/car4.webp";
import Car5 from "../images/car5.webp";

const Recent_Cars = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const scrollRef = useRef(null);

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

  const carsData = [
    { img: Car1, name: "TOYOTA Corolla Altis", location: "Chennai", year: 2015, km: 100000, fuel: "Petrol", owner: "1st Owner", price: "₹ 8 Lakh*" },
    { img: Car2, name: "TATA MOTORS Zest", location: "Chennai", year: 2017, km: 100000, fuel: "Petrol", owner: "4th Owner", price: "₹ 4 Lakh*" },
    { img: Car3, name: "MARUTI SUZUKI ALTO", location: "Chennai", year: 2020, km: 200000, fuel: "CNG", owner: "1st Owner", price: "₹ 3.5 Lakh*" },
    { img: Car1, name: "TOYOTA Corolla Altis", location: "Chennai", year: 2015, km: 100000, fuel: "Petrol", owner: "1st Owner", price: "₹ 8 Lakh*" },
    { img: Car4, name: "HONDA City", location: "Chennai", year: 2011, km: 120000, fuel: "Petrol", owner: "2nd Owner", price: "₹ 4 Lakh*" },
    { img: Car5, name: "AUDI Q3", location: "Chennai", year: 2015, km: 50000, fuel: "Petrol", owner: "1st Owner", price: "₹ 18 Lakh*" },
    { img: Car1, name: "TOYOTA Corolla Altis", location: "Chennai", year: 2015, km: 100000, fuel: "Petrol", owner: "1st Owner", price: "₹ 8 Lakh*" },
  ];

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  return (
    <div className="relative w-full bg-gray-100 px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">Recently Used Cars</h2>
      <div className="relative flex items-center">
        <button onClick={scrollLeft} className="absolute left-0 z-10 bg-white shadow-md rounded-full p-3 hidden md:flex">❮</button>
        <div ref={scrollRef} className="flex overflow-x-auto gap-4 scrollbar-hide" style={{ scrollBehavior: "smooth" }}>
          {carsData.map((car, index) => (
            <div key={index} className="min-w-[250px] max-w-[300px] bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={car.img} alt={car.name} className="w-full h-40 object-cover cursor-pointer" onClick={() => handleCarClick(car)} />
              <div className="p-3">
                <h3 className="text-lg font-semibold truncate">{car.name}</h3>
                <p className="text-sm text-gray-500">{car.location}</p>
                <p className="text-lg font-bold mt-2">{car.price}</p>
                <button onClick={handleContactClick} className="bg-blue-500 text-white w-full py-2 mt-2 rounded">Contact Seller</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-0 z-10 bg-white shadow-md rounded-full p-3 hidden md:flex">❯</button>
      </div>

      {/* Car Details Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
            <button onClick={() => setSelectedCar(null)} className="absolute top-4 right-4 text-gray-600">✖</button>
            <img src={selectedCar.img} alt={selectedCar.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold">{selectedCar.name}</h3>
            <p className="text-sm text-gray-500">{selectedCar.location}</p>
            <p><strong>Year:</strong> {selectedCar.year}</p>
            <p><strong>KM Driven:</strong> {selectedCar.km} km</p>
            <p><strong>Fuel Type:</strong> {selectedCar.fuel}</p>
            <p><strong>Owner:</strong> {selectedCar.owner}</p>
            <p><strong>Price:</strong> {selectedCar.price}</p>
          </div>
        </div>
      )}

      {/* Contact Seller Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button onClick={() => setShowContactForm(false)} className="absolute top-4 right-4 text-gray-600">✖</button>
            <h3 className="text-xl font-semibold mb-4">Contact Seller</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
              <input type="tel" placeholder="Mobile Number" className="w-full p-2 border rounded" required />
              <textarea placeholder="Message" className="w-full p-2 border rounded" rows="4" required></textarea>
              <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recent_Cars;