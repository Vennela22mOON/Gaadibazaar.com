import React, { useState, useEffect } from "react";
import image1 from '../images/car1.webp';
import image2 from '../images/car2.webp';
import image3 from '../images/car3.webp';
import image4 from '../images/car4.webp';
import image5 from '../images/car5.webp';
import image6 from '../images/car6.webp';
import image7 from '../images/car1.webp';
import image8 from '../images/car2.webp';
import image9 from '../images/car3.webp';
import image10 from '../images/car4.webp';

const Cart = () => {
  const cars = [
    {
      image: image1,
      brand: "Brand Suziki",
      price: "₹15,00,000",
      emi: "₹25,000/month",
    },
    {
      image: image2,
      brand: "Brand Hyundai",
      price: "₹18,00,000",
      emi: "₹30,000/month",
    },
    {
      image: image3,
      brand: "Brand Tata Motors",
      price: "₹12,00,000",
      emi: "₹20,000/month",
    },
    {
      image: image4,
      brand: "Brand Honda",
      price: "₹20,00,000",
      emi: "₹35,000/month",
    },
    {
      image: image5,
      brand: "Brand Skoda",
      price: "₹22,00,000",
      emi: "₹40,000/month",
    },
    {
      image: image6,
      brand: "Brand Renault",
      price: "₹14,50,000",
      emi: "₹22,000/month",
    },
    {
      image: image7,
      brand: "Brand Toyoto",
      price: "₹19,00,000",
      emi: "₹32,000/month",
    },
    {
      image: image8,
      brand: "Brand Nissan",
      price: "₹21,00,000",
      emi: "₹38,000/month",
    },
    {
      image: image9,
      brand: "Brand MG Motor",
      price: "₹17,00,000",
      emi: "₹28,000/month",
    },
    {
      image: image10,
      brand: "Brand Ford",
      price: "₹23,00,000",
      emi: "₹42,000/month",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cars.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cars.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cars.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [cars.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex justify-center items-center">
        <img
          src={cars[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{cars[currentIndex].brand}</h2>
        <p className="text-gray-700">Showroom Price: {cars[currentIndex].price}</p>
        <p className="text-gray-600">EMI Starting at: {cars[currentIndex].emi}</p>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-900 focus:outline-none"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-900 focus:outline-none"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Cart;
