import Image from "next/image";
import React from "react";

type Feature = {
  imageSrc: string;
  title: string;

};

const AboutSection: React.FC = () => {
  const features: Feature[] = [
    {
      imageSrc: "/alpha.png",
      title: "ISO 9001-2008 Certified",
   
    },
    {
      imageSrc: "/alpha1.png",
      title: "Qualified QA Experts",
   
    },
    {
      imageSrc: "/alpha2.png",
      title: " 16+ Years of Excellence",
   
    },
    {
      imageSrc: "/alpha3.png",
      title: "Reputed Name in ME & Africa",
   
    },
  ];

  return (
    <div className="w-full p-8  flex flex-col items-center md:p-48 space-y-8 md:flex-row md:space-y-0 md:space-x-16 bg-gray-50">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-lg md:text-xl font-bold text-red-600 mb-10">
          About Supreme Steel
        </h2>
        <p className="text-gray-700 text-base md:text-4xl leading-relaxed font-100">
          We have an unmatched expertise in supplying, servicing and
          distribution of metals to our long list of steadily growing customers.
        </p>
        <div className="h-1 w-16 bg-red-600 mt-6"></div>
      </div>

      {/* Right Features Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-1/2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <Image
              src={feature.imageSrc}
              alt={feature.title}
              width={200}
              height={200}
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
            <h3 className="font-semibold text-gray-800 text-lg md:text-xl">
              {feature.title}
            </h3>
       
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
