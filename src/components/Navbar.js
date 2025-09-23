import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400"
        >
          Dasunika Bandara
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 transition-colors"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 transition-colors"
          >
            Contact
          </Link>
          {/* Dark Mode Toggle */}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
