import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, Chip } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSavedProperties } from "../Services/propertiesAPI";
import defaultImage from "../assets/Images/defaultHouseImage.jpeg";
import CircularProgress from "@mui/material/CircularProgress";
import { setSavedBuyerProperties } from "../slices/PropertiesSlice";
import { getMyProperties } from "../Services/propertiesAPI";
import EditProperty from "../components/core/Seller_Property/EditProperty";

export default function Dashboard() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [displayProperties, setDisplayProperties] = React.useState([]);
  const { token, userDetails } = useSelector((state) => state.auth);

  const [editProperty, setEditProperty] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      if (userDetails?.role === "BUYER") {
        const data = await getSavedProperties(userDetails?.id, token);
        setDisplayProperties(data);
        dispatch(setSavedBuyerProperties(data));
      }else{
        const data = await getMyProperties(userDetails?.id, token);
        setDisplayProperties(data);
      }
    };

    fetchData();
  }, [userDetails]);

  return (
    <div className="bg-[#F9FAFB] min-h-screen ">
      <div className="w-11/12 mx-auto mt-50  space-y-10 ">
        {/* Welcome Section */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-5xl ">
              Welcome back, {userDetails?.firstName}!
            </h3>
            <h6 className="text-gray-600 text-lg">
              {location === "/dashboard/seller"
                ? "Manage your property listings"
                : "Find your dream property today"}
            </h6>
          </div>

          {location === "/dashboard/seller" && (
            <Button
              onClick={() => navigate("/seller/list-property")}
              variant="outlined"
              size="medium"
              className="flex gap-2 items-center shadow-md hover:shadow-lg transition-all duration-200 "
              sx={{bgcolor:"#000000", ":hover":{
                bgcolor: "#1B1B1B"
              }}}
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
                {displayProperties?.length > 0 ? (
                  displayProperties?.map((property, index) => (
                    <div
                      key={index}
                      class="p-4 grid grid-cols-6 gap-10 border border-gray-200 bg-gray-50 rounded-lg shadow-md  "
                    >
                      <div className="col-span-1 ">
                        <img
                          src={
                            property?.images?.length > 0
                              ? property?.images[0]
                              : defaultImage
                          }
                          className="object-cover w-full aspect-square rounded-xl"
                        />
                      </div>
                      <div className="col-span-4  flex flex-col justify-center -gap-10 ">
                        <div className="flex items-start gap-5 ">
                          <h3 className="text-2xl font-semibold max-w-150 ">
                            {property.title}
                          </h3>
                          {userDetails?.role !== "BUYER" && (
                            <Chip
                              label={property.status}
                              color={
                                property.status === "ACTIVE"
                                  ? "success"
                                  : "warning"
                              }
                              size="large"
                            />
                          )}
                        </div>
                        <p className="text-gray-600">
                          {property?.address} {property?.city} {property?.state}
                        </p>
                        <p className="text-lg font-bold text-blue-600">
                          {property?.startingPrice.toLocaleString()}
                        </p>
                      </div>

                      <div className="col-span-1 justify-center flex flex-col gap-5">
                        {location === "/dashboard/seller" && (
                          <Button
                            variant="outlined"
                            size="medium"
                            className="flex gap-2 items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-200 "
                            onClick={() => setEditProperty(property)}
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
                          onClick={() => navigate(`/property/${property?.id}`)}
                        >
                          <span className="text-white font-semibold">View</span>
                          <VisibilityIcon className="text-white" />
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="border h-full flex items-center justify-center " ><CircularProgress  sx={{color:"#000000"}} size={100} /></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        editProperty && <EditProperty data={editProperty} close={setEditProperty} />
      }
    </div>
  );
}
