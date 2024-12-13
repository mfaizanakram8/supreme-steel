import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 p-6 md:p-10 lg:p-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Section: Logo and Description */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0 text-center lg:text-left">
            <div className="flex items-start justify-center lg:justify-start">
              <Image
                src="/footer-logo.png"
                alt="Supreme Steel Logo"
                width={50}
                height={50}
                className="h-12 mr-4"
              />
              <p className="text-sm text-gray-700">
                Supreme Steel has an unmatched expertise in supplying servicing
                and distribution of ferrous and non-ferrous metals to our long
                list of steadily growing customers.
              </p>
            </div>
          </div>

          {/* Center Section: Partners */}
          <div className="w-full lg:w-1/3 flex justify-center items-center space-x-4 mb-6 lg:mb-0">
            <Image
              src="/ic.png"
              alt="IQ Logo"
              width={80}
              height={80}
              className="h-16"
            />
            <Image
              src="/iso-certificate.png"
              alt="ISO 9001 Logo"
              width={80}
              height={80}
              className="h-16"
            />
          </div>

          {/* Right Section: Contact Details */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:flex-row lg:justify-end lg:space-x-6 space-y-4 lg:space-y-0">
            <div className="flex flex-col items-center space-y-4 lg:items-start lg:space-y-0">
              <Image
                src="/new.png"
                alt="Acier Logo"
                width={90}
                height={50}
                className="h-12"
              />
              <Image
                src="/logo.jpg"
                alt="Micro Metals Logo"
                width={120}
                height={50}
                className="h-12"
              />
            </div>
            <div className="flex space-x-4 mt-4 lg:mt-0 justify-center">
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Image
                  src="/wa.png"
                  alt="WhatsApp"
                  className="h-6"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Image
                  src="/fb.png"
                  alt="Facebook"
                  className="h-6"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Image
                  src="/link.png"
                  alt="LinkedIn"
                  className="h-6"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Image
                  src="/you.png"
                  alt="YouTube"
                  className="h-6"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Image
                  src="/ins.png"
                  alt="Instagram"
                  className="h-6"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-8 flex flex-wrap justify-center lg:justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-sm text-gray-700 text-center lg:text-left">
            <p>
              Email:{" "}
              <a
                href="mailto:info@supremesteel.org"
                className="text-blue-600 hover:underline"
              >
                info@supremesteel.org
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:enquiry-ff@supremesteel.org"
                className="text-blue-600 hover:underline"
              >
                Enquiry-ff@supremesteel.org
              </a>
            </p>
          </div>
          <div className="text-sm text-gray-700 text-center lg:text-left">
            <p>
              Phone:{" "}
              <a
                href="tel:+9714599939"
                className="text-blue-600 hover:underline"
              >
                +971 4 599939
              </a>
            </p>
            <a
              href="/brochure.pdf"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-sm text-gray-500 flex flex-wrap justify-center lg:justify-between items-center space-y-2 lg:space-y-0">
          <span>© 2024 SUPREME STEEL. All Rights Reserved</span>
          <span>
            Design & Developed by{" "}
            <Link
              href="https://tequila.ae"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              nayimanzil.org
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
