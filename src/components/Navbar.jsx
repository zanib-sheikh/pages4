import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react"; // Import icons
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Linkkk from "../assets/Linkkk.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const location = useLocation(); // Get current route

  // Function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-[10px] font-kanit z-20 left-0 w-full bg-transparent">
        <div className="container mx-auto flex justify-between items-center px-2 py-3">
          
          {/* Logo */}
          <div className="flex items-center">
            <img src={Linkkk} alt="Logo" className="w-10 h-10" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-12 pr-8 text-white font-roboto ml-auto">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/fala", label: "FALA" },
              { path: "/our-impact", label: "Our Impact" },
              { path: "/media", label: "Media" },
              { path: "/blog", label: "Blog" },
            ].map(({ path, label }) => (
              <li key={path} className="cursor-pointer">
                <Link
                  to={path}
                  className={`transition-colors ${
                    isActive(path) ? "font-extrabold  text-[#92ffd5]" : "hover:text-green-500"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Give Now Button */}
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button className="hidden md:block bg-[#76B99A] text-white px-4 py-2 rounded-md hover:bg-green-500 transition">
              Give Now
            </button>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation (Collapsible Menu) */}
        <div
          className={`md:hidden fixed top-[100px] left-0 w-full bg-[#706FAB] text-white transition-transform transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <ul className="text-center py-4 space-y-4">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/fala", label: "FALA" },
              { path: "/our-impact", label: "Our Impact" },
              { path: "/media", label: "Media" },
              { path: "/blog", label: "Blog" },
            ].map(({ path, label }) => (
              <li key={path} className="cursor-pointer">
                <Link
                  to={path}
                  className={`block py-2 transition-colors ${
                    isActive(path) ? "font-bold text-green-400" : "hover:text-gray-300"
                  }`}
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <button className="bg-[#76B99A] text-white px-4 py-2 mt-2 rounded-md hover:bg-green-500 transition">
                Give Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
