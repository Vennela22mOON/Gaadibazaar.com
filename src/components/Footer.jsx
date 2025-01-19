import React from "react";
import { FaFacebookF, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 w-full">
      {/* Features Section */}
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-2xl mb-2">
            <i className="fas fa-car"></i>
          </div>
          <p className="font-semibold">Buy Cars</p>
        </div>
        <div>
          <div className="text-2xl mb-2">
            <i className="fas fa-car-side"></i>
          </div>
          <p className="font-semibold">Sell Cars</p>
        </div>
        <div>
          <div className="text-2xl mb-2">
            <i className="fas fa-gavel"></i>
          </div>
          <p className="font-semibold">Auction</p>
        </div>
        <div>
          <div className="text-2xl mb-2">
            <i className="fas fa-coins"></i>
          </div>
          <p className="font-semibold">Loan</p>
        </div>
        <div>
          <div className="text-2xl mb-2">
            <i className="fas fa-star"></i>
          </div>
          <p className="font-semibold">Recommend a Car</p>
        </div>
        <div>
          <div className="text-2xl mb-2">
            <i className="fas fa-calculator"></i>
          </div>
          <p className="font-semibold">EMI Calculator</p>
        </div>
        <div>
          <div className="text-2xl mb-2">
            <i className="fas fa-car-crash"></i>
          </div>
          <p className="font-semibold">Car Valuation</p>
        </div>
        <div>
          <div className="text-2xl mb-2">
            <i className="fas fa-balance-scale"></i>
          </div>
          <p className="font-semibold">Compare</p>
        </div>
        <div>
          <div className="text-2xl mb-2">
            <i className="fas fa-car"></i>
          </div>
          <p className="font-semibold">Car Dealers</p>
        </div>
        <div>
          <div className="text-2xl mb-2">
            <i className="fas fa-gift"></i>
          </div>
          <p className="font-semibold">Offers</p>
        </div>
      </div>

      {/* Social Section */}
      <div className="bg-gray-200 py-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-700 text-center sm:text-left">
            <p>Get in touch</p>
            <div className="flex justify-center sm:justify-start gap-4 mt-2">
              <FaFacebookF className="text-xl hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="text-xl hover:text-blue-400 cursor-pointer" />
              <FaPinterest className="text-xl hover:text-red-600 cursor-pointer" />
              <FaYoutube className="text-xl hover:text-red-500 cursor-pointer" />
            </div>
          </div>

          <div className="text-gray-700 text-center sm:text-right">
            <p>
              <span className="font-bold">Top Brands:</span> MARUTI SUZUKI /
              MAHINDRA / HYUNDAI / TATA MOTORS / TOYOTA / HONDA / KIA / RENAULT
              / NISSAN / VOLKSWAGEN / SKODA / MORRIS GARAGES
            </p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center text-sm space-y-2">
          <p>
            © Copyright GaadiBazaar 2025. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Policy
            </a>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
            <a href="#" className="hover:underline">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
