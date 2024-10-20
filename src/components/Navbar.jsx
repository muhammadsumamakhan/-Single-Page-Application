import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 shadow-md p-4">
            <div className="flex justify-between items-center max-w-6xl mx-auto border-b-2 border-gray-200">
                <div className="text-3xl font-bold text-white">MSK</div>
                <div className="flex space-x-10">
                    <Link to="/" className="text-gray-100 text-xl hover:text-green-300 transition duration-300">Home</Link>
                    <Link to="/about" className="text-gray-100 text-xl hover:text-green-300 transition duration-300">About</Link>
                    <Link to="/contact" className="text-gray-100 text-xl hover:text-green-300 transition duration-300">Contact</Link>
                    <Link to="/service" className="text-gray-100 text-xl hover:text-green-300 transition duration-300">Services</Link>
                    <Link to="/product" className="text-gray-100 text-xl hover:text-green-300 transition duration-300">Product</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
