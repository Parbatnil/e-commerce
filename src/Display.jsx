import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contacts from "./Contacts";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Error from "./Error";
import MainPage from "./MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Display = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Display;
