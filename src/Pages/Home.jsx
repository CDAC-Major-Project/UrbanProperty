import React from "react";
import HeroSection from "../components/core/HomeComponent/HeroSection";
import Tech_Purpose from "../components/core/HomeComponent/Tech_Purpose";
import Banners from "../components/core/HomeComponent/Banners";
import Property_Available from "../components/core/HomeComponent/Property_Available";
import Auction_Available from "../components/core/HomeComponent/Auction_Available";
import Frequently_Questions from "../components/core/HomeComponent/Frequently_Questions";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <Tech_Purpose />
      <Banners />
      <Property_Available />
      <Auction_Available />
      <Frequently_Questions />
    </div>
  );
};

export default Home;
