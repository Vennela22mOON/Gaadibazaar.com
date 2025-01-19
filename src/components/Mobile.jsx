import React from "react";
import mobileImage from "../images/brands.webp"; 

const Mobile = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 px-6">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 text-center lg:text-left">
            Download the <span className="text-black">GaadiBazaar</span> Mobile App
          </h2>
          <p className="text-lg text-gray-700 mt-4 text-center lg:text-left">
            for faster, easier and exclusive deals
          </p>
          <div className="flex mt-6 gap-4">
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Play_Store_badge_EN.svg"
                alt="Download on Google Play"
                className="h-10"
              />
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>
        <div className="relative w-full lg:w-auto">
          <img
            src={mobileImage}
            alt="Mobile Mockup"
            className="w-full lg:w-[300px] shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
