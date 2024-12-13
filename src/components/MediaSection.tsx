import Image from 'next/image';

const Port = () => {
  return (
    <div className="flex flex-col h-auto md:h-[900px] w-full justify-center items-center text-center bg-slate-100 p-4 md:p-0">
      <div>
        <h1 className="text-lg md:text-xl text-red-600 font-bold">
          MEDIA & NEWS
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-8 md:mt-16 gap-4">
        {/* First Image */}
        <div className="relative group hover-effect w-64 sm:w-72 md:w-80">
          <Image
            src="/n.jpg"
            alt="High Tower Works 1"
            width={290}
            height={200}
            className="w-full h-auto"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
            <div className="text-center">
              <h3 className="text-white text-sm md:text-md font-bold mt-40 md:mt-80 mr-4 md:mr-9 text-start">
                BUILDINGS <br />
                <div className="h-[2px] bg-red-600 w-20 md:w-32 my-2"></div>
                <span className="text-base md:text-xl">HIGH TOWER WORKS</span>
              </h3>
            </div>
          </div>
          {/* NEW Tag */}
          <div className="absolute top-2 md:top-4 right-2 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white bg-red-600 px-1.5 py-1 rounded-full text-xs md:text-sm font-semibold">
              NEW
            </span>
          </div>
        </div>

        {/* Second Image */}
        <div className="relative group hover-effect w-64 sm:w-72 md:w-80">
          <Image
            src="/n.jpg"
            alt="High Tower Works 2"
            width={290}
            height={200}
            className="w-full h-auto"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
            <div className="text-center">
              <h3 className="text-white text-sm md:text-md font-bold mt-40 md:mt-80 mr-4 md:mr-9 text-start">
                BUILDINGS <br />
                <div className="h-[2px] bg-red-600 w-20 md:w-32 my-2"></div>
                <span className="text-base md:text-xl">HIGH TOWER WORKS</span>
              </h3>
            </div>
          </div>
          {/* NEW Tag */}
          <div className="absolute top-2 md:top-4 right-2 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white bg-red-600 px-1.5 py-1 rounded-full text-xs md:text-sm font-semibold">
              NEW
            </span>
          </div>
        </div>

        {/* Third Image */}
        <div className="relative group hover-effect w-64 sm:w-72 md:w-80">
          <Image
            src="/n.jpg"
            alt="High Tower Works 3"
            width={290}
            height={200}
            className="w-full h-auto"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
            <div className="text-center">
              <h3 className="text-white text-sm md:text-md font-bold mt-40 md:mt-80 mr-4 md:mr-9 text-start">
                BUILDINGS <br />
                <div className="h-[2px] bg-red-600 w-20 md:w-32 my-2"></div>
                <span className="text-base md:text-xl">HIGH TOWER WORKS</span>
              </h3>
            </div>
          </div>
          {/* NEW Tag */}
          <div className="absolute top-2 md:top-4 right-2 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white bg-red-600 px-1.5 py-1 rounded-full text-xs md:text-sm font-semibold">
              NEW
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Port;
