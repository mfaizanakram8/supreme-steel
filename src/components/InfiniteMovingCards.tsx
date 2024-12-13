import Image from "next/image";
import React from "react";
import Link from "next/link";

const products = [
  {
    name: "Stainless Steel",
    image: "/1.webp", 
  },
  {
    name: "Alloy & Carbon Steels",
    image: "/2.webp", 
  },
  {
    name: "Tool Steel/ Die Steel",
    image: "/3.webp", 
  },
  {
    name: "Aluminum",
    image: "/4.webp", 
  },
];

const InfiniteMovingCards: React.FC = () => {
  return (
    <>
      <div className="cursor"></div> 
      <section className="w-[90%] mx-auto py-16 overflow-hidden bg-transparent p-0 md:p-20">
        <h2 className="text-center text-red-600 text-lg font-bold tracking-wide mb-8">
          OUR PRODUCTS
        </h2>
        <div className="relative flex items-center overflow-hidden">
          {/* Scrolling Container */}
          <div className="flex animate-marquee">
            {products.map((product, index) => (
              <div
                key={index}
                className="min-w-[200px] sm:min-w-[240px] md:min-w-[274px] mx-2 sm:mx-4 shadow-lg rounded-md overflow-hidden transition-transform hover:scale-105 relative group hover-effect"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={274} 
                  height={336}
                  className="object-cover transition-all duration-500"
                />
                {/* Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-4 py-2 bg-transparent text-white font-semibold rounded shadow hover:bg-transparent hover:text-white transition-all duration-300 transform group-hover:scale-105 mr-4 relative overflow-hidden">
                    <span className="absolute inset-0 bg-red-600 h-full w-0 group-hover:w-full transition-all duration-500 transform group-hover:translate-x-0"></span>
                    <span className="relative z-10">Explore Now →</span>
                  </button>
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-all duration-300">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* View All Products Button with Dynamic Curtain Effect */}
        <div className="relative mt-6 inline-block group mx-auto sm:ml-20 text-center sm:text-left">
          <Link
            href="#"
            className="relative flex items-center justify-center px-4 sm:px-6 py-3 bg-red-100 text-white border border-red-600 font-bold overflow-hidden rounded shadow-md transition-all duration-300"
          >
            <span className="absolute inset-0 bg-red-600 border border-red-600 rounded transition-all duration-300 transform group-hover:translate-x-full"></span>
            <span className="relative z-10 group-hover:text-red-600">
              View All Products →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default InfiniteMovingCards;
