import axios from "axios";
import toast from "react-hot-toast";

const baseURL = import.meta.env.VITE_BASE_URL;

// buyer VS seller graph
export const getBuyerSellerBarChart = async (token, setData, setTotalUser) => {
  const loading = toast.loading("Loading...");
  try {
    const response = await axios.get(
      `${baseURL}/users/admin/seller-buyer-count`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
      }
    );

    if (response?.status !== 200) {
      throw new Error("Something went wront in fetching Buyer and Seller count");
    }

    setTotalUser(response?.data?.totalUsers);
    setData(response?.data?.monthlyData);
    toast.success("Successfully fetched Data");
  } catch (err) {
    console.log("Error : ", err);
    toast.error("Could not get Data");
  }
  toast.dismiss(loading);
};
