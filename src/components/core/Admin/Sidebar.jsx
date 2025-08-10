import React from "react";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Logout from "../../common/Logout"; // Assuming you have a Logout component for confirmation dialog
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <InsertChartOutlinedIcon fontSize="small" />,
    },
    {
      name: "Property Verification",
      path: "/admin/property-verification",
      icon: <TaskAltOutlinedIcon fontSize="small" />,
    },
    {
      name: "Property Types",
      path: "/admin/property-type",
      icon: <ApartmentOutlinedIcon fontSize="small" />,
    },
    {
      name: "Amenities",
      path: "/admin/properties",
      icon: <HomeOutlinedIcon fontSize="small" />,
    },
    {
      name: "User Management",
      path: "/admin/reports",
      icon: <PeopleAltOutlinedIcon fontSize="small" />,
    },
  ];

  const [isLogoutOpen, setIsLogoutOpen] = React.useState(false);
  // const [activeItem, setActiveItem] = React.useState("Dashboard");

  const path = useLocation().pathname;
 
  const navigate = useNavigate();

  return (
    <div className=" h-screen min-w-fit w-[330px] flex flex-col justify-between border-r border-gray-300">
      <div className="flex flex-col gap-2 p-5 ">
        {menuItems?.map((items, index) => (
          <div
            key={index}
            className={` ${path !== items?.path && "hover:bg-gray-100 hover:text-black"} flex items-center space-x-2 cursor-pointer text-[#757575] p-2 py-2 rounded-xl ${
              path === items?.path ? "bg-black text-white" : ""
            } `}
            onClick={() => { navigate(items?.path);}}
          >
            {items.icon}
            <span className="text-sm font-semibold text-nowrap ">
              {items.name}
            </span>
          </div>
        ))}
      </div>
        
        {
            isLogoutOpen === true && <Logout close={setIsLogoutOpen} />
        }

      <div>
        <div className="border-b border-gray-300"></div>
        <div
          onClick={() => setIsLogoutOpen(true)}
          className={` p-5 hover:bg-gray-100 text-black flex items-center space-x-2 cursor-pointer rounded-xl`}
        >
          <LogoutOutlinedIcon fontSize="small" />
          <span className="text-sm font-semibold text-nowrap ">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
