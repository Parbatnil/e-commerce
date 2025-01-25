import React from "react";
import hero from "../../public/Images/heroecommerce.jpg";
import { NavLink } from "react-router-dom";
const HeroSection = ({ text }) => {
  return (
    <div className="  mx-4 xl:mx-44 my-28 flex flex-col-reverse gap-9  md:flex-row lg:mx-20 justify-center items-center">
      <div className=" space-y-5 lg:p-7 ">
        <h5 className="text-md  ">Welcome To</h5>
        <h1 className="text-3xl font-bold">{text}</h1>
        <p>
          An <span className="font-medium text-xl">eCommerce Store</span> offers
          products across categories, enabling customers to browse, search, add
          to cart, checkout, and enjoy seamless delivery.
        </p>
        <NavLink to="/products">
          <button className="bg-violet-500 text-white px-4 py-3 rounded-sm font-bold hover:bg-violet-400">
            SHOP NOW
          </button>
        </NavLink>
      </div>

      <div className="">
        {" "}
        <img src={hero} alt="Top Image" className="h-1/2" />
      </div>
    </div>
  );
};

export default HeroSection;
