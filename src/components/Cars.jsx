import React, { useRef } from "react";
import Car1 from '../images/car1.webp';
import Car2 from '../images/car2.webp';
import Car3 from '../images/car3.webp';
import Car4 from '../images/car4.webp';
import Car5 from '../images/car5.webp';

const Cars = () => {
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
    { img: Car3, name: "MARUTI SUZUKI ALTO", location: "Chennai", year: 0, km: 200000, fuel: "CNG", owner: "1st Owner", price: "₹ 3.5 Lakh*" },
    { img: Car1, name: "TOYOTA Corolla Altis", location: "Chennai", year: 2015, km: 100000, fuel: "Petrol", owner: "1st Owner", price: "₹ 8 Lakh*" },
    { img: Car4, name: "HONDA City [2008-2011]", location: "Chennai", year: 0, km: 200000, fuel: "Petrol", owner: "2nd Owner", price: "₹ 4 Lakh*" },
    { img: Car1, name: "TOYOTA Corolla Altis", location: "Chennai", year: 2015, km: 100000, fuel: "Petrol", owner: "1st Owner", price: "₹ 8 Lakh*" },
    { img: Car5, name: "AUDI Q3 [2015-2020]", location: "Chennai", year: 2015, km: 50000, fuel: "Petrol", owner: "1st Owner", price: "₹ 18 Lakh*" },
    { img: Car1, name: "TOYOTA Corolla Altis", location: "Chennai", year: 2015, km: 100000, fuel: "Petrol", owner: "1st Owner", price: "₹ 8 Lakh*" },
  ];

  return (
    <div className="relative w-full bg-gray-100 px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">Popular Used Cars</h2>

      {/* Scroll Container */}
      <div className="relative flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white shadow-md rounded-full p-3 hidden md:flex"
        >
          ❮
        </button>

        {/* Car Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {carsData.map((car, index) => (
            <div key={index} className="min-w-[250px] max-w-[300px] bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={car.img} alt={car.name} className="w-full h-40 object-cover" />
              <div className="p-3">
                <h3 className="text-lg font-semibold truncate">{car.name}</h3>
                <p className="text-sm text-gray-500">{car.location}</p>
                <div className="flex justify-between text-gray-700 text-sm mt-2">
                  <span>{car.year}</span>
                  <span>{car.km} km</span>
                  <span>{car.fuel}</span>
                  <span>{car.owner}</span>
                </div>
                <p className="text-lg font-bold mt-2">{car.price}</p>
                <button className="bg-blue-500 text-white w-full py-2 mt-2 rounded">Contact Seller</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white shadow-md rounded-full p-3 hidden md:flex"
        >
          ❯
        </button>
      </div>

      {/* View More Button */}
      <div className="mt-6 flex justify-center">
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white">
          View More
        </button>
      </div>
    </div>
  );
};

export default Cars;
