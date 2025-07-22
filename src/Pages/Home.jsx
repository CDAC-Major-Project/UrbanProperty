
import HeroSection from "../components/core/HeroSection";
import Tech_Purpose from "../components/core/Tech_Purpose";
import Banners from "../components/core/Banners";
import Property_Available from "../components/core/Property_Available";
import Auction_Available from "../components/core/Auction_Available";
import Frequently_Questions from "../components/core/Frequently_Questions";

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
