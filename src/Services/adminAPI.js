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
    return new Error("Error in get Buyer and Seller Count");
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
    return new Error("Error in get Monthly listed Property");
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
    return new Error("Error in get Property Status");
  }
};

// get Pending property Data
export const getPendingPropertyData = async (token, setPendingProperties) => {
  const loading = toast.loading("Loading...");
  try {
    const response = await axios.get(`${baseURL}/admin/pending`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "Application/json",
      },
    });

    if (response?.status !== 200) {
      throw new Error("Something went wront in fetching Pending Properties");
    }
    setPendingProperties(response?.data);
    toast.success("Pending Properties get Successfully");
  } catch (err) {
    console.log("Error : ", err);
    toast.error("Could not get Pending Properties");
  }
  toast.dismiss(loading);
};

export const verifyPendingProperty = async (token, propertyId, cancel, setPendingProperties) => {
  const loading = toast.loading("Loading...");
  try {
    const response = await axios.put(
      `${baseURL}/admin/properties/${propertyId}/approve`, {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response?.status !== 200) {
      throw new Error("Something went wront in fetching Pending Properties");
    }
    cancel(null);
    setPendingProperties(response?.data);
    toast.success("Property Verified SuccessFully");
  } catch (err) {
    console.log("Error : ", err);
    toast.error("Could not Verify Property");
  }
  toast.dismiss(loading);
};
