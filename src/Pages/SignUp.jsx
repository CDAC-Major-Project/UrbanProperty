import { useState } from "react";
import SighupPhoto from "../assets/Images/signup.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const SignUp = () => {
  const [userType, setUserType] = useState("BUYER");
  const navigate = useNavigate();

  const data = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: null,
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*\d)(?=.*[#@$*])[A-Za-z\d#@$*]{5,20}$/,
        "Password must contain a digit, lowercase letter, special character [#@$*] and be 5-20 characters long"
      ),
    confirmPassword: yup.string().required(),
    phoneNumber: yup.number().required(),
  });

  const [formData, setFormData] = React.useState(data);
  const [errors, setErrors] = React.useState(null);

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isconfirmPasswordVisible, setIsconfirmPasswordVisible] =
    React.useState(false);

  const submitHandler = async () => {
    let loading = toast.loading("Loading...");
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      const response = await axios.post(
        "http://192.168.2.119:8080/api/v1/users/register",
        { ...formData, role: userType }
      );

      if (response?.status !== 201) {
        throw new Error("Something went wrong in Sign up");
      }
      toast.success("SignUp Successfully");
      navigate("/login");
    } catch (error) {
      console.log("error", error);
      toast.error("Could not SignUp");
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      setErrors(errors);
    }
    toast.dismiss(loading);
  };

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
              onClick={() => setUserType("BUYER")}
              className={`${
                userType === "BUYER" ? "bg-[#0099CC]" : ""
              } font-semibold text-white py-2 px-5 rounded-full transition-all duration-200 cursor-pointer `}
            >
              Buyer
            </button>

            <button
              onClick={() => setUserType("SELLER")}
              className={`${
                userType === "SELLER" ? "bg-[#0099CC]" : ""
              } font-semibold text-white py-2 px-5 rounded-full transition-all duration-200 cursor-pointer `}
            >
              Seller
            </button>
          </div>

          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5 ">
              <lable className="space-y-2">
                <p className="text-white text-sm ">
                  First Name <span className="text-red-500">*</span>
                </p>
                <div>
                  <input
                    type="text"
                    value={formData?.firstName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    placeholder="Enter first name"
                    className="w-full bg-[#0099CC] text-black rounded-lg outline-none px-3 py-1.5"
                    required
                  />
                  {errors?.firstName && (
                    <span className="font-semibold text-xs text-black">
                      First name is required
                    </span>
                  )}
                </div>
              </lable>
              <lable className="space-y-2">
                <p className="text-white text-sm ">
                  Last Name <span className="text-red-500">*</span>
                </p>
                <div>
                  <input
                    type="text"
                    value={formData?.lastName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    placeholder="Enter last name"
                    className="w-full bg-[#0099CC] text-black rounded-lg outline-none px-3 py-1.5"
                    required
                  />
                  {errors?.lastName && (
                    <span className="font-semibold text-xs text-black">
                      Last name is required
                    </span>
                  )}
                </div>
              </lable>
            </div>

            <div className="grid grid-cols-2 gap-5 ">
              <lable className="space-y-2">
                <p className="text-white text-sm ">
                  Email Address <span className="text-red-500">*</span>
                </p>
                <div>
                  <input
                    type="email"
                    value={formData?.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="Enter email address"
                    className="w-full bg-[#0099CC] text-black rounded-lg outline-none px-3 py-1.5"
                    required
                  />
                  {errors?.email && (
                    <span className="font-semibold text-xs text-black">
                      email is required
                    </span>
                  )}
                </div>
              </lable>

              <lable className="space-y-2">
                <p className="text-white text-sm ">
                  Contact Number <span className="text-red-500">*</span>
                </p>
                <div>
                  <input
                    type="Number"
                    value={formData?.phoneNumber}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phoneNumber: e.target.value,
                      }))
                    }
                    placeholder="Enter email address"
                    className="w-full bg-[#0099CC] text-black rounded-lg outline-none px-3 py-1.5"
                    required
                  />
                  {errors?.phoneNumber && (
                    <span className="font-semibold text-xs text-black">
                      Phone Number is required
                    </span>
                  )}
                </div>
              </lable>
            </div>

            <div className="grid grid-cols-2 gap-5 ">
              <lable className="space-y-2 col-span-1 ">
                <p className="text-white text-sm ">
                  Password <span className="text-red-500">*</span>
                </p>
                <div>
                  <div className="relative" >
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      value={formData?.password}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      placeholder="Enter password"
                      className="w-full bg-[#0099CC] text-black rounded-lg outline-none px-3 py-1.5"
                      required
                    />

                    <button type="button" onClick={() => setIsPasswordVisible((prev) => !prev)} className=" cursor-pointer absolute top-1.5 right-2 ">
                      {isPasswordVisible ? (
                        <RemoveRedEyeOutlinedIcon fontSize="small" />
                      ) : (
                        <VisibilityOffOutlinedIcon fontSize="small" />
                      )}
                    </button>
                  </div>
                  {errors?.password && (
                    <span className="font-semibold text-xs text-black">
                      Length b/w 5-10, digits, lowercase, special character
                    </span>
                  )}
                </div>
              </lable>
              <lable className="space-y-2 col-span-1 ">
                <p className="text-white text-sm ">
                  Confirm Password <span className="text-red-500">*</span>
                </p>
                <div className="relative" >
                  <input
                    type={isconfirmPasswordVisible ? "text" : "password"}
                    value={formData?.confirmPassword}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      }))
                    }
                    placeholder="Confirm password"
                    className="w-full bg-[#0099CC] text-black rounded-lg outline-none px-3 py-1.5"
                    required
                  />
                  <button type="button" onClick={() => setIsconfirmPasswordVisible((prev) => !prev)} className=" cursor-pointer absolute top-1.5 right-2 ">
                      {isconfirmPasswordVisible ? (
                        <RemoveRedEyeOutlinedIcon fontSize="small" />
                      ) : (
                        <VisibilityOffOutlinedIcon fontSize="small" />
                      )}
                    </button>
                  {errors?.confirmPassword && (
                    <span className="font-semibold text-xs text-black">
                      Confirm Password is required
                    </span>
                  )}
                </div>
              </lable>
            </div>

            <button
              onClick={() => submitHandler()}
              type="button"
              className="bg-black font-semibold text-white cursor-pointer px-4 py-2 rounded-lg"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
