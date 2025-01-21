import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col justify-center items-center mx-auto mt-18 ">
        {/* Call-to-Action Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 relative bg-violet-100 px-5 sm:px-28 py-5 top-20 rounded-md  z-10 space-y-4 sm:space-y-0 sm:space-x-8">
          {/*  */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold">Ready To Get Started?</h3>
            <h3 className="text-lg">Talk to us today</h3>
          </div>
          <div className="flex justify-center sm:justify-end">
            <NavLink to="/contact">
              <button className="bg-violet-500 text-white px-4 py-3 rounded-md font-bold hover:bg-violet-400">
                Get Started
              </button>
            </NavLink>
          </div>
        </div>

        {/* Main Footer */}
        <footer className="w-full bg-violet-900 text-white mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-8 sm:p-16 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">ECommerce</h3>
              <p>You can easily get what you want</p>
            </div>

            {/* Subscription Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Subscribe to get important updates
              </h3>
              <form action="#" className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your E-mail"
                  className="w-full p-2 border border-gray-300 rounded-md text-black"
                />
                <button
                  type="submit"
                  className="bg-violet-500 text-white px-4 py-2 rounded-md font-bold hover:bg-violet-400 transition-all"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 border rounded-full text-4xl hover:text-[#0077B5] transition-all"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 border rounded-full text-4xl hover:text-black transition-all"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 border rounded-full text-4xl hover:text-pink-400 transition-all"
                >
                  <FaInstagramSquare />
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p>+91 8432932019</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
