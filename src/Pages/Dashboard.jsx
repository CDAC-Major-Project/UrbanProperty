import image from "../assets/Images/banner1.png";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, Chip } from "@mui/material";

import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const myProperties = [
    {
      id: 1,
      title: "Modern Villa",
      location: "Beverly Hills",
      price: "$2,500,000",
      status: "Active",
      views: 45,
      inquiries: 8,
      image: image,
    },
    {
      id: 2,
      title: "Downtown Loft",
      location: "Manhattan",
      price: "$1,200,000",
      status: "Pending",
      views: 32,
      inquiries: 12,
      image: image,
    },
    {
      id: 3,
      title: "Downtown Loft",
      location: "Manhattan",
      price: "$1,200,000",
      status: "Pending",
      views: 32,
      inquiries: 12,
      image: image,
    },
    {
      id: 4,
      title: "Downtown Loft",
      location: "Manhattan",
      price: "$1,200,000",
      status: "Pending",
      views: 32,
      inquiries: 12,
      image: image,
    },
    {
      id: 5,
      title: "Downtown Loft",
      location: "Manhattan",
      price: "$1,200,000",
      status: "Pending",
      views: 32,
      inquiries: 12,
      image: image,
    },
  ];

  const location = useLocation().pathname;

  return (
    <div className="bg-[#F9FAFB] min-h-screen ">
      <div className="w-11/12 mx-auto mt-50  space-y-10 ">
        {/* Welcome Section */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-5xl ">Welcome back, Alex!</h3>
            <h6 className="text-gray-600 text-lg">
              {location === "/dashboard/seller"
                ? "Manage your property listings"
                : "Find your dream property today"}
            </h6>
          </div>

          {location === "/dashboard/seller" && (
            <Button
              variant="outlined"
              size="medium"
              className="flex gap-2 items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-200 "
            >
              <AddIcon className="text-white" />
              <span className="text-white font-semibold ">
                List New Property
              </span>
            </Button>
          )}
        </div>

        {/* My Properties */}
        <div className="border border-[#9b9baf] rounded-xl p-5 mb-10 max-w-[7xl]">
          <div className="space-y-5">
            <div>
              <h2 className="text-3xl font-bold">
                {" "}
                {location === "/dashboard/seller"
                  ? "My Properties"
                  : "Saved Properties"}
              </h2>
              <p className="text-lg ">
                {" "}
                {location === "/dashboard/seller"
                  ? "Manage your property listings"
                  : "The ones that caught your eye."}{" "}
              </p>
            </div>
            <div>
              <div class="flex flex-col gap-2 h-[80vh] overflow-y-auto">
                {myProperties.map((property) => (
                  <div class="p-4 flex items-center justify-between border border-gray-200 bg-gray-50 rounded-lg shadow-md  ">
                    <div className="flex items-center gap-10">
                      <img
                        src={property.image}
                        className="object-cover w-1/4 rounded-xl "
                      />

                      <div>
                        <div className="flex items-center gap-5 ">
                          <h3 className="text-2xl font-semibold max-w-100 ">
                            {property.title}
                          </h3>
                          <Chip
                            label={property.status}
                            color={
                              property.status === "Active"
                                ? "success"
                                : "warning"
                            }
                            size="large"
                          />
                        </div>
                        <p className="text-gray-600 max-w-100 ">
                          {property.location}
                        </p>
                        <p className="text-lg font-bold text-blue-600">
                          {property.price}
                        </p>
                      </div>
                    </div>

                    <div className=" flex flex-col gap-5">
                      {location === "/dashboard/seller" && (
                        <Button
                          variant="outlined"
                          size="medium"
                          className="flex gap-2 items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-200 "
                        >
                          <span className="text-white font-semibold ">
                            Edit
                          </span>
                          <ModeEditOutlineIcon className="text-white" />
                        </Button>
                      )}
                      <Button
                        variant="outlined"
                        size="medium"
                        className="flex gap-2 items-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transition-all duration-200 "
                      >
                        <span className="text-white font-semibold">View</span>
                        <VisibilityIcon className="text-white" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className=" cursor-pointer w-full py-2 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-200 "
            >
              {location === "/dashboard/seller"
                ? "View All Properties"
                : "View All Saved Properties"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
