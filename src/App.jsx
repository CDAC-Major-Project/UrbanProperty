import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import ListProperty from "./Pages/ListProperty";
import React from "react";
import UserProfile from "./Pages/UserProfile";
import BrowseAllProperties from "./Pages/BrowseAllProperties";

function App() {
  const path = useLocation().pathname;

  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-auto  ">
      {
        (path === "/login" || path === "/signup") ? null : <Navbar /> // Hide Navbar on Login and SignUp pages
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/seller" element={<Dashboard />} />
        <Route path="/dashboard/buyer" element={<Dashboard />} />
        <Route path="/seller/list-property" element={<ListProperty />} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="properties" element={<BrowseAllProperties />} />
      </Routes>
      {
        (path === "/login"||path === "/signup") ? null : <Footer /> // Hide Footer on Login and SignUp pages
      }
    </div>
  );
}

export default App;
