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
import PropertyDetails from "./Pages/PropertyDetails";
import Analytics from "./components/core/Admin/Analytics";
import AdminDashboard from "./Pages/AdminDashboard";
import AboutUs from "./Pages/AboutUs";


function App() {
  const path = useLocation().pathname;

  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-auto  ">
      {
        (path === "/login" || path === "/signup" || path === "/admin") ? null : <Navbar /> // Hide Navbar on Login and SignUp pages
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/seller" element={<Dashboard />} />
        <Route path="/dashboard/buyer" element={<Dashboard />} />
        <Route path="/seller/list-property" element={<ListProperty />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/properties" element={<BrowseAllProperties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route element={<AdminDashboard />} >
          <Route path="/admin" element={<Analytics />} />
          <Route path="/aboutus" element={<AboutUs />} />

        </Route>
      </Routes>
      {
        (path === "/login" || path === "/signup" || path === "/admin") ? null : <Footer /> // Hide Footer on Login and SignUp pages
      }
    </div>
  );
}

export default App;
