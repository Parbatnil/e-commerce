import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProducts from "./components/FeatureProducts";

const MainPage = () => {
  return (
    <div>
      <HeroSection text="ECommerce Store" />
      <FeatureProducts />
      <Services />

      <Trusted />
    </div>
  );
};

export default MainPage;
