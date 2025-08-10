import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"; // Only keeping Table-related imports from MUI
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AmenitiesPopup from "./AmenitiesPopup";

// Sample data for amenities
const initialAmenities = [
  {
    id: 1,
    name: "Swimming Pool",
    description: "Private or shared swimming pool facility",
    isActive: true,
    usageCount: 89,
    createdDate: "2024-01-10",
  },
  {
    id: 2,
    name: "Parking",
    description: "Dedicated parking space for vehicles",
    isActive: true,
    usageCount: 156,
    createdDate: "2024-01-10",
  },
  {
    id: 3,
    name: "WiFi",
    description: "High-speed internet connectivity",
    isActive: true,
    usageCount: 234,
    createdDate: "2024-01-10",
  },
  {
    id: 4,
    name: "Gym/Fitness Center",
    description: "On-site fitness and exercise facilities",
    isActive: true,
    usageCount: 67,
    createdDate: "2024-01-10",
  },
  {
    id: 5,
    name: "Security",
    description: "24/7 security and surveillance system",
    isActive: true,
    usageCount: 198,
    createdDate: "2024-01-10",
  },
  {
    id: 6,
    name: "Garden",
    description: "Landscaped garden and green spaces",
    isActive: false,
    usageCount: 45,
    createdDate: "2024-01-10",
  },
];

export default function Amenities() {
  // State for managing the list of amenities
  const [amenities, setAmenities] = useState(initialAmenities);
  
  const [editAmenities, setEditAmenities] = React.useState(null);
  const [editFlag, setEditFlag] = React.useState(false);
  const [addFlag, setAddFlag] = React.useState(false);

  return (
    <div className="space-y-6 my-10">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Amenities</h2>
          <p className="text-gray-500">
            Manage property amenities and features available on your platform
          </p>
        </div>
        {/* Button to open the Add/Edit Amenity Modal (using HTML button with Tailwind) */}
        <button
          type="button"
          className="font-semibold flex items-center gap-2 bg-black hover:bg-gray-900 cursor-pointer text-white p-2 rounded-lg shadow shadow-gray-400"
          onClick={() => setAddFlag(true)}
        >
          <AddIcon fontSize="small" />
          Add Amenity
        </button>
      </div>

      {/* Stats Cards Section */}
      <div className="grid gap-4 md:grid-cols-4">
        {/* Total Amenities Card */}
        <div className="space-y-3 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <p className="font-medium text-xl">Total Amenities</p>
          <p className="text-4xl font-semibold">{amenities.length}</p>
          <p className="text-xs text-gray-500">Available amenities</p>
        </div>

        {/* Active Amenities Card */}
        <div className="space-y-3 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <p className="font-medium text-xl">Active Amenities</p>
          <p className="text-4xl font-semibold text-green-600">
            {amenities.filter((a) => a.isActive).length}
          </p>
          <p className="text-xs text-gray-500">Currently active</p>
        </div>

        {/* Most Used Amenity Card */}
        <div className="space-y-3 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <p className="font-medium text-xl">Most Used</p>
          <p className="text-4xl font-semibold">
            {
              amenities.reduce(
                (max, amenity) =>
                  amenity.usageCount > max.usageCount ? amenity : max,
                amenities[0]
              )?.name
            }
          </p>
          <p className="text-xs text-gray-500">
            {
              amenities.reduce(
                (max, amenity) =>
                  amenity.usageCount > max.usageCount ? amenity : max,
                amenities[0]
              )?.usageCount
            }{" "}
            properties
          </p>
        </div>

        {/* Average Usage Card */}
        <div className="space-y-3 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <p className="font-medium text-xl">Average Usage</p>
          <p className="text-4xl font-semibold">
            {Math.round(
              amenities.reduce((sum, amenity) => sum + amenity.usageCount, 0) /
                amenities.length
            )}
          </p>
          <p className="text-xs text-gray-500">Per amenity</p>
        </div>
      </div>

      {/* Amenities Table Section (Using Material-UI Table) */}
      <div className="space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5">
        <div>
          <h3 className="font-semibold text-xl">Amenities</h3>
          <p className="text-sm text-gray-500">
            Manage your property amenities
          </p>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px", whiteSpace: "nowrap" }}>
                  Actions
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px", whiteSpace: "nowrap"}}>
                  Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px", whiteSpace: "nowrap" }}>
                  Description
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px", whiteSpace: "nowrap" }}>
                  Usage Count
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px", whiteSpace: "nowrap" }}>
                  Status
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px", whiteSpace: "nowrap" }}>
                  Created Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {amenities.map((amenity) => (
                <TableRow key={amenity.id}>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    <div className="flex gap-2">
                      {/* Edit button with Lucide icon and Tailwind styling */}
                      <button
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        onClick={() => {setEditAmenities(amenity); setEditFlag(true)}}
                        title="Edit"
                      >
                        <EditIcon fontSize="small" sx={{color:"#000000"}} />
                      </button>
                      {/* Delete button with Lucide icon and Tailwind styling */}
                      <button
                        className="p-2 rounded-full hover:bg-red-100 transition-colors"
                        onClick={""}
                        title="Delete"
                      >
                        <DeleteIcon fontSize="small" sx={{color:"#e53935"}} />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    <div className="flex items-center gap-2">
                      {amenity.name}
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#000000", textWrap: "nowrap" }}
                    className="truncate max-w-xs"
                  >
                    {amenity.description}
                  </TableCell>
                  <TableCell
                    sx={{ color: "#000000", textWrap: "nowrap" }}
                    className="text-center font-semibold"
                  >
                    {amenity.usageCount}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    <div className="flex items-center gap-2 justify-between ">
                      {/* Custom badge styling with Tailwind classes */}
                      <span
                        className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                          amenity.isActive
                            ? "bg-black text-white font-semibold"
                            : "bg-gray-100 text-black font-semibold"
                        }`}
                      >
                        {amenity.isActive ? "Active" : "Inactive"}
                      </span>
                      {/* Custom toggle switch using HTML checkbox and Tailwind */}
                      <label htmlFor={`switch-${amenity.id}`} className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          id={`switch-${amenity.id}`}
                          className="sr-only peer"
                          checked={amenity.isActive}
                          onChange={""}
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {amenity.createdDate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Popup */}
      {
        (editFlag || addFlag ) && <AmenitiesPopup data={editAmenities} setData={setEditAmenities} close={ editFlag === true ? setEditFlag : setAddFlag } />
      }
    </div>
  );
}
