
import { IoIosArrowRoundDown } from "react-icons/io";

const CTASection = () => {
  return (
    <div className=" px-6 ">
      <div className="w-full bg-[#2B518E] text-white p-8 rounded-3xl relative overflow-hidden">
        {/* Background gradient and shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/20 to-transparent blur-2xl"></div>

        {/* Content */}
        <div className="relative z-10 bg-[#ffffff0d] rounded-3xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            {/* Left Section */}
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
                Simplify Society Living with <span className="text-white/90">My Society Needs</span>
              </h2>
              <p className="text-base md:text-lg text-gray-200 mb-8">
                Streamline management, enhance resident communication, and handle vendors effortlessly — all in one place.  
                Let’s make your community smarter and more connected.
              </p>

            
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <p className="text-2xl md:text-3xl font-bold mb-2">Get a Reply Within 12 Hours!</p>
              <p className="text-sm md:text-base text-gray-300">
                Our support team is ready to assist your society today.
              </p>
                <span className="no-underline py-5">
                <button className="px-10 flex justify-center border-none  items-center py-3 bg-white text-[#2B518E] font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 gap-2">
                  Get in Touch <IoIosArrowRoundDown className=" text-lg"/>
                </button>
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
