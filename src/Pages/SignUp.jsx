import { useState } from "react";
import SighupPhoto from "../assets/Images/signup.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userType, setUserType] = useState("buyer");
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-[#2D3285] ">
      <div className="w-11/12 h-full mx-auto flex items-center ">
        <div className="w-1/2 space-y-10 ">
          <h1 className="text-white font-bold text-4xl ">
            Welcome to Your Property Journey!
          </h1>
          <img
            src={SighupPhoto}
            className=" ml-10 w-3/4 object-fit rounded-4xl"
          />
        </div>

        <div className="w-1/2">
          <div className="flex w-fit p-1 gap-x-1 my-6 rounded-full bg-black ">
            <button
              onClick={() => setUserType("buyer")}
              className={`${
                userType === "buyer" ? "bg-[#0099CC]" : ""
              } font-semibold text-white py-2 px-5 rounded-full transition-all duration-200 cursor-pointer `}
            >
              Buyer
            </button>

            <button
              onClick={() => setUserType("seller")}
              className={`${
                userType === "seller" ? "bg-[#0099CC]" : ""
              } font-semibold text-white py-2 px-5 rounded-full transition-all duration-200 cursor-pointer `}
            >
              Seller
            </button>
          </div>

          <form className="flex flex-col gap-5" >
            <div className="grid grid-cols-2 gap-5 ">
              <lable className="space-y-2" >
                <p className="text-white text-sm ">
                  First Name <span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full bg-[#0099CC] text-black rounded-lg outline-none px-3 py-1.5"
                  required
                />
              </lable>
              <lable className="space-y-2" >
                <p className="text-white text-sm ">
                  Last Name <span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full bg-[#0099CC] text-black rounded-lg outline-none px-3 py-1.5"
                  required
                />
              </lable>
            </div>

            <lable className="space-y-2" >
              <p className="text-white text-sm ">
                Email Address <span className="text-red-500">*</span>
              </p>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full bg-[#0099CC] text-black rounded-lg outline-none px-3 py-1.5"
                required
              />
            </lable>

            <div className="grid grid-cols-2 gap-5 ">
              <lable className="space-y-2" >
                <p className="text-white text-sm ">
                  Password <span className="text-red-500">*</span>
                </p>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full bg-[#0099CC] text-black rounded-lg outline-none px-3 py-1.5"
                  required
                />
              </lable>
              <lable className="space-y-2" >
                <p className="text-white text-sm ">
                  Confirm Password <span className="text-red-500">*</span>
                </p>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full bg-[#0099CC] text-black rounded-lg outline-none px-3 py-1.5"
                  required
                />
              </lable>
            </div>

            <button
                onClick={() => navigate("/dashboard/seller")}
                type="button"
                className="bg-black font-semibold text-white cursor-pointer px-4 py-2 rounded-lg"
            >Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
