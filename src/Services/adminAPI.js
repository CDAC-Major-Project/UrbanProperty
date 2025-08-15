import axios from "axios";
import toast from "react-hot-toast";

const baseURL = import.meta.env.VITE_BASE_URL;

// buyer VS seller graph
export const getBuyerSellerBarChart = async (token, setData, setTotalUser) => {
  try {
    const response = await axios.get(
      `${baseURL}/admin/dashboard/seller-buyer-count`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
      }
    );

    if (response?.status !== 200) {
      throw new Error(
        "Something went wront in fetching Buyer and Seller count"
      );
    }

    setTotalUser(response?.data?.totalUsers);
    setData(response?.data?.monthlyData);
  } catch (err) {
    console.log("Error : ", err);
    toast.error("Could not get Data");
  }
};

export const getMonthlyListedProperty = async (
  token,
  setMonthlyListedProperty
) => {
  try {
    const response = await axios.get(
      `${baseURL}/admin/dashboard/monthly-property-stats`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
      }
    );

    if (response?.status !== 200) {
      throw new Error(
        "Something went wront in fetching Monthly Property Listing"
      );
    }

    setMonthlyListedProperty(response?.data);
  } catch (err) {
    console.log("Error : ", err);
    toast.error("Could not get Monthly listing");
  }
};

export const getPropertyStatus = async (token, setPropertyStatus) => {
  try {
    const response = await axios.get(
      `${baseURL}/admin/dashboard/property-status-counts`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
      }
    );

    if (response?.status !== 200) {
      throw new Error(
        "Something went wront in fetching Monthly Property Status"
      );
    }

    setPropertyStatus(response?.data);
  } catch (err) {
    console.log("Error : ", err);
    toast.error("Could not get Property Status");
  }
};
