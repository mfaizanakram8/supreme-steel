import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative w-[95%] mx-auto md:ml-[67px] h-screen bg-white mt-32">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Section (Text Content) */}
        <div className="flex-1 flex flex-col justify-center relative z-10">
          {/* Background Image */}
          <div
            className="absolute top-0 left-0 w-full h-[300px] md:h-[450px] mt-32 bg-cover bg-center z-0 hidden md:block"
            style={{ backgroundImage: "url('/sa.jpg')" }}
          ></div>

          {/* Heading */}
          <div className="relative z-30 px-4 mt-10 md:mt-32">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-snug text-gray-900 ml-5 md:ml-20 text-center md:text-left">
              <span className="text-red-600">Finest Steel</span> at the <br />
              Finest Deal.
            </h1>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-lg mt-10 md:mt-6 px-4">
            <p className="text-base md:text-lg lg:text-xl text-gray-700 ml-5 md:ml-20 text-center md:text-left">
              An unmatched expertise in{" "}
              <span className="font-bold text-gray-900">supplying</span>,
              servicing, and distribution to our long list of steadily growing
              customers. Always ensuring our products are of the highest{" "}
              <span className="text-red-600">quality standards</span> and
              parameters.
            </p>
            {/* Call to Action Button */}
            <div className="relative mt-6 inline-block group ml-5 md:ml-20 text-center md:text-left">
              <Link
                href="#"
                className="relative flex items-center justify-center md:justify-start px-6 py-3 bg-red-100 text-white border border-red-600 font-bold overflow-hidden rounded shadow-md transition-all duration-300"
              >
                <span className="absolute inset-0 bg-red-600 border border-red-600 rounded transition-all duration-300 transform group-hover:translate-x-full"></span>
                <span className="relative z-10 group-hover:text-red-600">
                  Get In Touch
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section (Video with Overlay) */}
        <div className="w-full md:w-1/2 relative z-20 mt-10 md:mt-0">
          {/* Video */}
          <div className="relative">
            <video
              src="/sa1.mp4" 
              autoPlay
              loop
              muted
              className="w-full h-[250px] md:h-[500px] object-cover"
            ></video>
            {/* Red Overlay Line */}
            <div className="absolute top-4 md:top-8 left-0 w-full h-8 md:h-12 bg-red-600 opacity-75"></div>
            {/* Text Overlay */}
            <div className="absolute top-4 md:top-10 left-4 text-white font-bold text-lg md:text-2xl">
              Premium Quality
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
