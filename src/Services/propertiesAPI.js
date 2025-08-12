import axios from "axios";
import toast from "react-hot-toast";

const baseURL = import.meta.env.VITE_BASE_URL;

// buyers saved properies
export const getSavedProperties = async (userId, token) => {
  let array = [];
  const loading = toast.loading("Loading");
  try {
    const response = await axios.get(`${baseURL}/users/${userId}/favorites`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response?.status !== 200) {
      throw new Error(
        "Something went wront in fetching buyer saved properties"
      );
    }

    toast.success("Fetched Saved Properties");
    array = response?.data;
  } catch (err) {
    toast.error("Error");
    console.log("error", err);
  }
  toast.dismiss(loading);
  return array;
};

// Perticular property Detail
export const getPropertyById = async (propertyId, setPropertyDetail) => {
  const loading = toast.loading("Loading");
  try {
    const response = await axios.get(`${baseURL}/properties/${propertyId}`);

    if (response?.status !== 200) {
      throw new Error(
        "Something went wront in fetching Perticular property Details"
      );
    }    
    setPropertyDetail(response?.data);
    toast.success("Fetched Details");

  } catch (err) {
    toast.error("Property Not Found");
    console.log("error", err);
  }
  toast.dismiss(loading);
};


// get all properties
export const getAllProperties = async (setProperties) => {
  const loading = toast.loading("Loading...");
  try{
    const response = await axios.get(`${baseURL}/properties`);
    if (response?.status !== 200) {
      throw new Error(
        "Something went wront in fetching All properties"
      );
    }
    
    setProperties(response?.data);
    toast.success("Fetched Properties");
  }catch(err){
    console.log("Error : ", err);
    toast.error("Properties not found");
  }
  toast.dismiss(loading);
}

// Sellers My properties
export const getMyProperties = async () => {
  const loading = toast.loading("Loading...");
  try{
    // const response = await axios.get(`${baseURL}`);
  }catch(err){
    console.log("Error : ", err);
    toast.error("Properties not found");
  }
  toast.dismiss(loading);
}