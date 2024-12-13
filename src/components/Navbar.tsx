import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaFileAlt, FaTimes, FaBars } from "react-icons/fa";

const NavbarSidebar = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Sidebar (visible on large screens) */}
      <div className="hidden md:flex fixed top-0 left-0 h-full bg-gray-200 w-16 flex-col items-center py-4 shadow-md z-50">
        {/* Menu Button */}
        <div className="mb-8">
          <button
            onClick={toggleMenu}
            className="w-20 mt-7 h-12 flex items-center justify-center bg-red-600 text-white shadow-md text-sm font-bold transform rotate-90"
          >
            MENU
          </button>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center gap-6">
          <Link href="#" className="text-gray-600 hover:text-red-600 transition-all duration-200">
            <FaFacebookF size={24} />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-red-600 transition-all duration-200">
            <FaLinkedinIn size={24} />
          </Link>
        </div>
      </div>

      {/* Navbar for Desktop and Mobile */}
      <div className="fixed top-0 left-0 w-full z-40 bg-white shadow-md pl-0 md:pl-20">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="Supreme Steel Logo" width={150} height={70} />
          </div>

          {/* Desktop Buttons (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="flex items-center gap-2 px-5 py-2 relative bg-red-600 text-white rounded font-bold transition-all duration-300 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white border border-red-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2 z-10 group-hover:text-red-600">
                <FaEnvelope size={18} /> Enquire Now
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-5 py-2 relative border border-red-600 text-red-600 rounded font-bold transition-all duration-300 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-red-600 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2 z-10 group-hover:text-white">
                <FaFileAlt size={18} /> Download Brochure
              </span>
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-red-600 transition-all duration-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Menu with Clip-Path Animation */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-90 text-white z-50 flex flex-col transition-all duration-700 ease-in-out bg-cover ${
          isMenuOpen ? "clip-open" : "clip-closed"
        }`}
        style={{
          backgroundImage: "url('/kk.jpg')",
        }}
      >
        {/* Close Button */}
        <div className="absolute top-6 left-6">
          <button
            onClick={toggleMenu}
            className="text-white bg-red-600 hover:bg-red-800 rounded-full p-2"
            aria-label="Close Menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold">
          <Link
            href="#"
            className="hover:text-red-600 transition-all duration-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:text-red-600 transition-all duration-200"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#"
            className="hover:text-red-600 transition-all duration-200"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="#"
            className="hover:text-red-600 transition-all duration-200"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="#"
            className="hover:text-red-600 transition-all duration-200"
            onClick={toggleMenu}
          >
            Career
          </Link>
          <Link
            href="#"
            className="hover:text-red-600 transition-all duration-200"
            onClick={toggleMenu}
          >
            Calculator
          </Link>
          <Link
            href="#"
            className="hover:text-red-600 transition-all duration-200"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarSidebar;
