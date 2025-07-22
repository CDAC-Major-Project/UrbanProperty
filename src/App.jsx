import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Login from "./Pages/Login";

function App() {
  const path = useLocation().pathname;
  console.log("path", path);

  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-auto  ">
      {
        path === "/login" ? null : <Navbar /> // Hide Navbar on Login page
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {
        path === "/login" ? null : <Footer /> // Hide Footer on Login page
      }
    </div>
  );
}

export default App;
