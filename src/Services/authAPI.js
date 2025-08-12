import toast from "react-hot-toast"
import { setToken, setUserDetails } from "../slices/authSlice";



export const logout = (navigate, dispatch) => {
    const loading = toast.loading("Loading");
    try{
        // updating token as null
        dispatch(setToken(null));
        // updating userdetails as null
        dispatch(setUserDetails(null));

        // removing token from localstorage
        localStorage.removeItem("token")
        // removing userdetails from localstroge
        localStorage.removeItem("userDetails");

        toast.success("Logout Successfully");

        navigate("/");
    }catch(err){
        console.log("Error in logout : ", err)
        toast.error("Could not logout");
    }
    toast.dismiss(loading);
}