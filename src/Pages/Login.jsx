import BlackLogo from "../assets/logos/black_logo.png";
import React from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import * as yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUserDetails } from "../slices/authSlice";

const Login = () => {

  const baseURL = import.meta.env.VITE_BASE_URL;
  
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });


  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [errors, setErrors] = React.useState(null);
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*\d)(?=.*[#@$*])[A-Za-z\d#@$*]{5,20}$/,
        "Password must contain a digit, lowercase letter, special character [#@$*] and be 5-20 characters long"
      ),
  });

  const submitHandler = async () => {
    const toastid = toast.loading("Loading...");
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      const response = await axios.post(
        `${baseURL}/users/login`,
        formData
      );
      console.log("res ", response)
      if (response?.status !== 200) {
        throw new Error("Something went wront in Login");
      }
      localStorage.setItem("token", JSON.stringify(response?.data?.token));
      localStorage.setItem("userDetails", JSON.stringify(response?.data?.userDetails));

      dispatch(setToken(response?.data?.token));
      dispatch(setUserDetails(response?.data?.userDetails));

      if(response?.data?.userDetails?.role === "BUYER"){
        navigate("/dashboard/buyer");
      }else{
        navigate("/dashboard/seller");
      }

      toast.success("Login Successfully");
    } catch (err) {
      toast.error("Could not Login");
      console.log("error", err);
      const errors = {};
      err.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      setErrors(errors);
    }
    toast.dismiss(toastid);
  };

  return (
    <div className="w-screen h-screen bg-[#E8F0FE] flex items-center justify-center">
      <div className=" px-10 bg-white shadow-xl w-1/3 h-3/4 rounded-4xl shadow-gray-600 flex flex-col items-center justify-center">
        <div>
          <img src={BlackLogo} className="w-2/3 mx-auto" />
          <h1 className="font-bold text-[#253F7C] text-3xl text-nowrap ">
            Welcome to UrbanBid
          </h1>
        </div>

        <div className="my-4 w-full flex flex-col gap-5">
          <lable>
            <span className="text-[#253F7C] font-semibold">Email</span>
            <div>
              <input
                type="text"
                className="border p-2 w-full"
                value={formData?.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />

              {errors?.email && (
                <span className="font-semibold text-xs text-black">
                  email is required
                </span>
              )}
            </div>
          </lable>

          <lable>
            <span className="text-[#253F7C] font-semibold">Password</span>
            <div>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  className="border p-2 w-full"
                  value={formData?.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
                <button
                  type="button"
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                  className=" cursor-pointer absolute top-2 right-2 "
                >
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
          <button
            type="button"
            className="cursor-pointer bg-[#253F7C] w-full font-semibold text-white py-2 px-4 rounded"
            onClick={() => submitHandler()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
