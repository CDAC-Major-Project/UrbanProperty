import Residential from "../../../assets/logos/key.svg";
import Commercial from "../../../assets/logos/apartment.svg"
import Agricultural from "../../../assets/logos/planting.svg";
import Industrial from "../../../assets/logos/factory.svg";
import Other from "../../../assets/logos/other-black.svg";

const Auction_Available = () => {
  return (
    <div className="space-y-15 py-10 " >
      <h1 className="text-4xl font-bold text-center text-[#8F53AA] ">
        Auctions <span className="text-[#0D2A6E]">Available</span>
      </h1>

      <div className="grid grid-cols-5 w-10/12 mx-auto">
        <div className="flex flex-col items-center gap-3 border-r ">
            <img src={Residential} className="w-10" />
            <p className="text-center text-[#212529] font-medium" >Residential</p>
            <p className="text-center font-bold text-3xl text-[#8F53AA]" >4904</p>
        </div>

        <div className="flex flex-col items-center gap-3 border-r">
            <img src={Commercial} className="w-10" />
            <p className="text-center text-[#212529] font-medium" >Commercial</p>
            <p className="text-center font-bold text-3xl text-[#8F53AA]" >671</p>
        </div>

        <div className="flex flex-col items-center gap-3 border-r">
            <img src={Agricultural} className="w-10" />
            <p className="text-center text-[#212529] font-medium" >Agricultural</p>
            <p className="text-center font-bold text-3xl text-[#8F53AA]" >48</p>
        </div>

        <div className="flex flex-col items-center gap-3 border-r">
            <img src={Industrial} className="w-10" />
            <p className="text-center text-[#212529] font-medium" >Industrial</p>
            <p className="text-center font-bold text-3xl text-[#8F53AA]" >352</p>
        </div>

        <div className="flex flex-col items-center gap-3 ">
            <img src={Other} className="w-10" />
            <p className="text-center text-[#212529] font-medium" >Other</p>
            <p className="text-center font-bold text-3xl text-[#8F53AA]" >551</p>
        </div>
      </div>
    </div>
  );
};

export default Auction_Available;
