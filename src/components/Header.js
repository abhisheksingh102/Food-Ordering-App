import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img className="w-36 h-auto" src={LOGO_URL} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8">
          <span className="text-sm text-gray-600">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </span>
          <Link
            to="/"
            className="hover:text-pink-500 text-gray-800 font-semibold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-pink-500 text-gray-800 font-semibold"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-pink-500 text-gray-800 font-semibold"
          >
            Contact Us
          </Link>
          <Link
            to="/grocery"
            className="hover:text-pink-500 text-gray-800 font-semibold"
          >
            Grocery
          </Link>
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => setBtnName(!btnName)}
          >
            {btnName ? "Login" : "Logout"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
