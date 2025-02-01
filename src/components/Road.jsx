import React, { useRef } from "react";
import Way1 from '../components/road_images/way1.jpg';
import Way2 from '../components/road_images/way2.jpg';
import Way3 from '../components/road_images/way3.jpg';
import Way4 from '../components/road_images/way4.jpg'; // Add more images
import Way5 from '../components/road_images/way5.jpg';

const Road = () => {
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

  const cards = [
    {
      image: Way1,
      tag: "Cars",
      title: "Why is Ground Clearance Necessary, and What are a Few Cars with Good Ground Clearance?",
      description:
        "Indian roads are not the best to drive on, with unpredictable terrain of potholes, bumps, speed breakers and more! This is where the importance of ground clearance is seen.",
      date: "22 Jan 2025",
      readTime: "2 Min Read",
    },
    {
      image: Way2,
      tag: "All Vehicle",
      title: "What is the road tax for vehicles in Kerala?",
      description:
        "Road tax is levied on cars, bikes, trucks, and other vehicles. The State and other Union territories in India levy it. Road tax is imposed considering factors like the vehicle's engine.",
      date: "20 Jan 2025",
      readTime: "3 Min Read",
    },
    {
      image: Way3,
      tag: "All Vehicle",
      title: "What is the road tax for vehicles in Karnataka?",
      description:
        "Road tax is levied on cars, bikes, trucks, and other vehicles. The State and other Union territories in India levy it. Road tax is imposed considering factors like the vehicle's engine.",
      date: "17 Jan 2025",
      readTime: "3 Min Read",
    },
    {
      image: Way4,
      tag: "All Vehicle",
      title: "Understanding Road Safety Measures in India",
      description:
        "Learn about road safety measures implemented in India, including traffic rules and vehicle regulations that help ensure a safer journey.",
      date: "15 Jan 2025",
      readTime: "4 Min Read",
    },
    {
      image: Way5,
      tag: "Cars",
      title: "Top Fuel-Efficient Cars in India for 2025",
      description:
        "Discover the most fuel-efficient cars available in India, offering better mileage and savings for car buyers.",
      date: "12 Jan 2025",
      readTime: "3 Min Read",
    },
    {
        image: Way2,
        tag: "All Vehicle",
        title: "What is the road tax for vehicles in Kerala?",
        description:
          "Road tax is levied on cars, bikes, trucks, and other vehicles. The State and other Union territories in India levy it. Road tax is imposed considering factors like the vehicle's engine.",
        date: "20 Jan 2025",
        readTime: "3 Min Read",
      },
      {
        image: Way3,
        tag: "All Vehicle",
        title: "What is the road tax for vehicles in Karnataka?",
        description:
          "Road tax is levied on cars, bikes, trucks, and other vehicles. The State and other Union territories in India levy it. Road tax is imposed considering factors like the vehicle's engine.",
        date: "17 Jan 2025",
        readTime: "3 Min Read",
      },
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 md:px-10 relative">
      <h2 className="text-xl font-bold mb-5 border-b-2 pb-2 border-blue-500">
        Wheels Hub: Pre-Owned, Fresh Finds, and More!
      </h2>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
        >
          ◀
        </button>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth flex-nowrap scrollbar-hide"
        >
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 w-80 flex-shrink-0">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="mt-3">
                <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                  {card.tag}
                </span>
                <h3 className="font-bold mt-2 text-lg">{card.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{card.description}</p>
                <div className="text-gray-500 text-xs flex justify-between mt-4">
                  <span>{card.date}</span>
                  <span>{card.readTime}</span>
                  <span>Gaadi Bazaar</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Road;
