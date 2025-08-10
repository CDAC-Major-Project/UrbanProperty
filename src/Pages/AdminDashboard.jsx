import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/core/Admin/Sidebar";

const AdminDashboard = () => {
  const path = useLocation().pathname;

  return (
    <div className="flex min-h-screen w-full ">
      <Sidebar />
      <div className=" flex flex-col w-full h-screen ">
        {/* <div> */}
          <div className="p-5 border-b border-gray-300 ">
            <h1 className="font-semibold text-2xl">
              {path === "/admin" ? "Dashboard" : path === "/admin/property-verification" ? "Property Verification" : path === "/admin/property-type" ? "Property type" : path === "/admin/amenities" ? "Amenities" : path === "/admin/users" ? "User Management" : ""}
            </h1>
          </div>
          <div className=" flex-1 overflow-y-auto w-full">
            <div className="mx-auto w-11/12 max-w-[1000px] min-h-[calc(100vh-73px)]" >
              <Outlet />
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AdminDashboard;