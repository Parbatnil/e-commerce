import React from "react";
import HeroSection from "./components/HeroSection";
import aboutImage from "../public/Images/Shopping.jpeg"; // Replace with your image path

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <HeroSection text="ECommerce" />

      {/* About Content */}
      <div className="mt-12 px-6 lg:px-32 py-12 bg-violet-100 mx-[10%] md:mx-[15%] rounded-3xl">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Welcome to our eCommerce platform, where shopping meets
              convenience. Our platform provides a wide variety of products to
              cater to your every need. From high-quality items to excellent
              customer support, we ensure a smooth shopping experience.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Join us on a journey of hassle-free online shopping, and let us
              bring the world of possibilities to your doorstep. Whether you're
              looking for the latest trends or daily essentials, we've got you
              covered.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={aboutImage}
              alt="About Us"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
