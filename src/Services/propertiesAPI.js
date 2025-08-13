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
  try {
    const response = await axios.get(`${baseURL}/properties`);
    if (response?.status !== 200) {
      throw new Error("Something went wront in fetching All properties");
    }

    setProperties(response?.data);
    toast.success("Fetched Properties");
  } catch (err) {
    console.log("Error : ", err);
    toast.error("Properties not found");
  }
  toast.dismiss(loading);
};

// Sellers My properties
export const getMyProperties = async (id, token) => {
  let array = [];
  const loading = toast.loading("Loading...");
  try {
    const response = await axios.get(`${baseURL}/properties/seller/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "Application/json",
      },
    });

    if (response?.status !== 200) {
      throw new Error("Something went wront in fetching My properties");
    }
  
    array = response?.data;
    toast.success("Fetched Properties");
  } catch (err) {
    console.log("Error : ", err);
    toast.error("Properties not found");
  }
  toast.dismiss(loading);
  return array;
};

// upload photo
// export const uploadPhoto = async () => {
//   const loading = toast.loading("Loading...");
//   try {
//     const response = axios.post(`${baseURL}/properties/${propertyId}/images`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     if (response?.status !== 200) {
//       throw new Error("Something went wront in uploading image");
//     }
//     console.log("res : ", response);

//     toast.success("Image Uploaded");
//   } catch (err) {
//     console.log("Error : ", err);
//     toast.error("Could not upload");
//   }
//   toast.dismiss(loading);
// };


// get all property type
export const getAllPropertyType = async (token, setPropertyType) => {
  try{
    const response = await axios.get(`${baseURL}/property-types`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "Application/json",
      },
    });

    if (response?.status !== 200) {
      throw new Error("Something went wront in fetching property type");
    }    

    setPropertyType(response?.data);
  }catch(err){
    console.log("Error : ", err)
  }
} 