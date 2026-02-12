import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-16 w-full">
      
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">Ecomzy</h2>
          <p className="mt-4 text-sm text-gray-400">
            Your one-stop shop for quality products at unbeatable prices.
            Shop smart. Shop easy. Shop Ecomzy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:text-white duration-200">Home</NavLink></li>
            <li><NavLink to="/cart" className="hover:text-white duration-200">Cart</NavLink></li>
            <li><NavLink to="/about" className="hover:text-white duration-200">About</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white duration-200">Contact</NavLink></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white duration-200 cursor-pointer">FAQ</li>
            <li className="hover:text-white duration-200 cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white duration-200 cursor-pointer">Returns</li>
            <li className="hover:text-white duration-200 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get updates about new products and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 text-black rounded-l-md outline-none"
            />
            <button className="bg-green-600 px-4 py-2 text-white rounded-r-md hover:bg-green-700 duration-300">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ecomzy. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
