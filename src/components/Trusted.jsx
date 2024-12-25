import React from "react";
import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
const Trusted = () => {
  return (
    <div className="bg-violet-100 flex justify-center items-center flex-col py-20 space-y-4">
      <div>
        <p className="text-sm md:text-2xl space-y-4">1000+ Trusted Company!</p>
      </div>
      <div className="flex flex-col md:space-y-0 space-y-3 md:space-x-14 md:flex-row">
        <div>
          <FaApple className="bg-white p-1 md:p-4 rounded-full  text-[45px] md:text-[100px]" />
        </div>
        <div>
          {" "}
          <FaMicrosoft className="bg-white p-1 md:p-4 rounded-full  text-[45px] md:text-[100px]" />
        </div>
        <div>
          <FaAmazon className="bg-white p-1 md:p-4 rounded-full  text-[45px] md:text-[100px]" />
        </div>
        <div>
          {" "}
          <RiNetflixFill className="bg-white p-1 md:p-4 rounded-full  text-[45px] md:text-[100px]" />
        </div>
        <div>
          <FaYoutube className="bg-white p-1 md:p-4 rounded-full  text-[45px] md:text-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
