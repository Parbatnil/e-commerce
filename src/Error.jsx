import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import errorImg from "../public/Images/error.png";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-[#e6dfe7] px-4 space-y-4 py-10">
        {/* Error Image */}
        <div>
          <img src={errorImg} alt="error" className="h-40 sm:h-72" />
        </div>

        {/* Error Title */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center">
          404 Page not found!
        </h1>

        {/* Error Description */}
        <div className="text-center text-lg sm:text-2xl px-2">
          <p>This page is not available. Sorry about that.</p>
          <p>Try searching for something else.</p>
        </div>

        {/* Go Back Button */}
        <div>
          <button className="bg-violet-500 text-white px-4 py-2 rounded-md font-bold hover:bg-violet-400 transition-all">
            <NavLink to="/" className="flex justify-center items-center">
              <IoChevronBackSharp className="text-white text-2xl mr-2" />
              Go Back
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
