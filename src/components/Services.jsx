import React from "react";
import { TbBus } from "react-icons/tb";
import { SiSpringsecurity } from "react-icons/si";

import { GiReturnArrow } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
const Services = () => {
  return (
    <div className=" flex flex-col md:flex-row  w-[60%] mx-auto my-5  space-y-2 md:space-x-6 md:space-y-0">
      {/* 1st div */}
      <div className="bg-violet-100 h-48 flex flex-col items-center justify-center w-[95%] md:w-1/3 rounded-md ">
        <div>
          <TbBus className="bg-white text-[4rem] p-5 rounded-full text-violet-900" />
        </div>
        <p className="font-semibold text-xs md:text-md">
          Super fast and free delivery
        </p>
      </div>
      {/* 2nd div */}
      <div className=" h-48 flex flex-col items-center justify-center  w-[95%] md:w-1/3 space-y-5">
        <div className="bg-violet-100 w-full flex justify-center items-center space-x-3 py-3 rounded-md">
          <div>
            <MdSecurity className="bg-white text-[4rem] p-5 rounded-full text-violet-900" />
          </div>
          <p className="font-semibold text-xs md:text-md">
            Non-Contact Shipping
          </p>
        </div>
        <div className="bg-violet-100 w-full flex justify-center items-center space-x-3 py-3 rounded-md">
          <div>
            <GiReturnArrow className="bg-white text-[4rem] p-5 rounded-full text-violet-900" />
          </div>
          <p className="font-semibold text-xs md:text-md">
            Money Back Guaranted
          </p>
        </div>
      </div>
      {/* 3rd div  */}
      <div className="bg-violet-100 h-48 flex flex-col items-center justify-center w-[95%] md:w-1/3 rounded-md">
        <div>
          <SiSpringsecurity className="bg-white text-[4rem] p-5 rounded-full text-violet-900" />
        </div>
        <p className="font-semibold text-xs md:text-md">
          Super Secure Payment system
        </p>
      </div>
    </div>
  );
};

export default Services;
