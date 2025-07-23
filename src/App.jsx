import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  const path = useLocation().pathname;
  console.log("path", path);

  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-auto  ">
      {
        (path === "/login" || path === "/signup") ? null : <Navbar /> // Hide Navbar on Login and SignUp pages
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {
        (path === "/login"||path === "/signup") ? null : <Footer /> // Hide Footer on Login and SignUp pages
      }
    </div>
  );
}

export default App;
