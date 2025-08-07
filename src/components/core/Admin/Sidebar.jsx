import React from "react";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Logout from "../../common/Logout"; // Assuming you have a Logout component for confirmation dialog

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <InsertChartOutlinedIcon fontSize="small" />,
    },
    {
      name: "Property Verification",
      path: "/admin/verification",
      icon: <TaskAltOutlinedIcon fontSize="small" />,
    },
    {
      name: "Property Types",
      path: "/admin/users",
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
  const [activeItem, setActiveItem] = React.useState("Dashboard");

  return (
    <div className="h-screen min-w-fit w-[330px] flex flex-col justify-between border border-red-500">
      <div className="flex flex-col gap-2 p-5 ">
        {menuItems?.map((items, index) => (
          <div
            key={index}
            className={` hover:bg-gray-100 hover:text-black flex items-center space-x-2 cursor-pointer text-[#757575] p-2 py-2 rounded-xl ${
              activeItem === items?.name ? "bg-black text-white" : ""
            } `}
            onClick={() => setActiveItem(items?.name)}
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
