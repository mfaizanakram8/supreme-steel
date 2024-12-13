

import Link from "next/link";
import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/kk.jpg')", 
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl flex justify-end pt-20 ml-4 lg:ml-48 px-4 lg:px-0">
        {/* Transparent Black Background for Text */}
        <div className="bg-black bg-opacity-70 p-6 lg:p-8 lg:pl-14 rounded-md">
          <h2 className="text-red-500 font-semibold uppercase text-sm lg:text-lg tracking-wide">
            Our Services
          </h2>
          <ul className="mt-6 lg:mt-8 space-y-4 lg:space-y-6 text-white">
            <li className="text-2xl lg:text-4xl font-bold">
              <span className="text-red-500 text-[8px] lg:text-[10px] relative bottom-2 lg:bottom-4 mr-2">01</span>
              Bandsaw Cutting
            </li>
            <li className="text-2xl lg:text-4xl font-bold">
              <span className="text-red-500 text-[8px] lg:text-[10px] relative bottom-2 lg:bottom-4 mr-2">02</span>
              Waterjet Cutting
            </li>
            <li className="text-2xl lg:text-4xl font-bold">
              <span className="text-red-500 text-[8px] lg:text-[10px] relative bottom-2 lg:bottom-4 mr-2">03</span>
              Positive Material Identification{" "}
              <span className="block ml-4 lg:ml-7">(Hand Held Testing)</span>
            </li>
            <li className="text-2xl lg:text-4xl font-bold">
              <span className="text-red-500 text-[8px] lg:text-[10px] relative bottom-2 lg:bottom-4 mr-2">04</span>
              Hardness Testing
            </li>
          </ul>
          <div className="relative mt-4 lg:mt-6 inline-block group text-left hover-effect">
            <Link
              href="#"
              className="relative flex items-center px-4 lg:px-6 py-2 lg:py-3 bg-red-100 text-white border border-red-600 font-bold overflow-hidden rounded shadow-md transition-all duration-300"
            >
              <span className="absolute inset-0 bg-red-600 border border-red-600 rounded transition-all duration-300 transform group-hover:translate-x-full"></span>
              <span className="relative z-10 group-hover:text-red-600">
                View All Services →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
