import Property from "../../../assets/Images/Property1.png"
import Banner from "../../../assets/Images/banner2.png"
import Agriculture from "../../../assets/Images/Agricultural.png"
import Industrial from "../../../assets/Images/industrial.png"
import Other from "../../../assets/Images/Other.png"

const Property_Available = () => {
  return (
    <div className="bg-[#2E3192] space-y-15 py-10 ">
      <h1 className="text-4xl font-bold text-center text-white ">
        Properties Available
      </h1>
      <div className="flex justify-between w-10/12 mx-auto" >
        <div className="flex flex-col items-center gap-3 ">
          <img
            src={Property}
            className="w-50 border-2 border-white rounded-2xl"
          />
          <div >
            <p className="text-center text-white font-medium">Residential</p>
            <p className=" text-center font-bold text-xl text-white">42600</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 ">
          <img
            src={Banner}
            className="w-50 h-45 border-2 object-cover border-white rounded-2xl"
          />
          <div >
            <p className="text-center text-white font-medium">Commercial</p>
            <p className=" text-center font-bold text-xl text-white">6476</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 ">
          <img
            src={Agriculture}
            className="w-50 border-2 border-white rounded-2xl"
          />
          <div >
            <p className="text-center text-white font-medium">Agricultural</p>
            <p className=" text-center font-bold text-xl text-white">179</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 ">
          <img
            src={Industrial}
            className="w-50 border-2 border-white rounded-2xl"
          />
          <div >
            <p className="text-center text-white font-medium">Industrial</p>
            <p className=" text-center font-bold text-xl text-white">3414</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 ">
          <img
            src={Other}
            className="w-50 border-2 border-white rounded-2xl"
          />
          <div >
            <p className="text-center text-white font-medium">Other</p>
            <p className=" text-center font-bold text-xl text-white">5217</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property_Available;
