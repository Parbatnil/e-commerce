import React, { useState } from "react";
import logo from "/Images/logoo.png";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex bg-violet-100 justify-between items-center px-4 mx-2">
      {/* Logo */}
      <NavLink to="/">
        <img src={logo} alt="E-Commerce" className="h-16" />
      </NavLink>
      {/* Desktop Menu */}

      <div className="hidden md:block">
        <ul className="flex space-x-7 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-violet-600 font-semibold"
                : "hover:text-violet-600 text-blue-900"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-violet-600 font-semibold"
                : "hover:text-violet-600 text-blue-900"
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-violet-600 font-semibold"
                : "hover:text-violet-600 text-blue-900"
            }
          >
            PRODUCTS
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-violet-600 font-semibold"
                : "hover:text-violet-600 text-blue-900"
            }
          >
            CONTACT
          </NavLink>
          <NavLink to="/cart" className="flex relative">
            <FiShoppingCart className="text-violet-800 text-3xl" />
            <span className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-violet-800 border-2 border-white rounded-full -top-1 -right-1">
              100
            </span>
          </NavLink>
        </ul>
      </div>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <IoMdClose className="text-3xl text-blue-900" />
          ) : (
            <CgMenu className="text-3xl text-blue-900" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#bcceeb] z-50">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-violet-600 font-semibold"
                  : "hover:text-violet-600 text-blue-900"
              }
              onClick={toggleMobileMenu}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-violet-600 font-semibold"
                  : "hover:text-violet-600 text-blue-900"
              }
              onClick={toggleMobileMenu}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-violet-600 font-semibold"
                  : "hover:text-violet-600 text-blue-900"
              }
              onClick={toggleMobileMenu}
            >
              PRODUCTS
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-violet-600 font-semibold"
                  : "hover:text-violet-600 text-blue-900"
              }
              onClick={toggleMobileMenu}
            >
              CONTACT
            </NavLink>
            <NavLink
              to="/cart"
              className="flex relative"
              onClick={toggleMobileMenu}
            >
              <FiShoppingCart className="text-violet-800 text-3xl" />
              <span className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-violet-800 border-2 border-white rounded-full -top-1 -right-1">
                100
              </span>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
