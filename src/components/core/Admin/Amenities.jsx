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
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Sample data for amenities
const initialAmenities = [
  {
    id: 1,
    name: "Swimming Pool",
    description: "Private or shared swimming pool facility",
    icon: <PoolOutlinedIcon fontSize="small" />,
    isActive: true,
    usageCount: 89,
    createdDate: "2024-01-10",
  },
  {
    id: 2,
    name: "Parking",
    description: "Dedicated parking space for vehicles",
    icon: <DirectionsCarOutlinedIcon fontSize="small" />,
    isActive: true,
    usageCount: 156,
    createdDate: "2024-01-10",
  },
  {
    id: 3,
    name: "WiFi",
    description: "High-speed internet connectivity",
    icon: <WifiOutlinedIcon fontSize="small" />,
    isActive: true,
    usageCount: 234,
    createdDate: "2024-01-10",
  },
  {
    id: 4,
    name: "Gym/Fitness Center",
    description: "On-site fitness and exercise facilities",
    icon: <FitnessCenterOutlinedIcon fontSize="small" />,
    isActive: true,
    usageCount: 67,
    createdDate: "2024-01-10",
  },
  {
    id: 5,
    name: "Security",
    description: "24/7 security and surveillance system",
    icon: <ShieldOutlinedIcon fontSize="small" />,
    isActive: true,
    usageCount: 198,
    createdDate: "2024-01-10",
  },
  {
    id: 6,
    name: "Garden",
    description: "Landscaped garden and green spaces",
    icon: <ParkOutlinedIcon fontSize="small" />,
    isActive: false,
    usageCount: 45,
    createdDate: "2024-01-10",
  },
];

export default function Amenities() {
  // State for managing the list of amenities
  const [amenities, setAmenities] = useState(initialAmenities);
  // State for controlling the open/close state of the dialog (custom modal)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // State for storing the amenity being edited (null for new amenity)
  const [editingAmenity, setEditingAmenity] = useState(null);
  // State for managing form data in the dialog
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    icon: "Wifi", // Default icon
    isActive: true, // Default status
  });

  // Handles form submission for creating or updating an amenity
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (editingAmenity) {
      // If editingAmenity exists, update the existing amenity
      setAmenities((prev) =>
        prev.map((amenity) =>
          amenity.id === editingAmenity.id
            ? { ...amenity, ...formData } // Update matching amenity
            : amenity // Keep others as they are
        )
      );
    } else {
      // If no editingAmenity, create a new amenity
      const newAmenity = {
        id: Math.max(...amenities.map((a) => a.id)) + 1, // Generate a unique ID
        ...formData, // Spread form data
        usageCount: 0, // New amenities start with 0 usage
        createdDate: new Date().toISOString().split("T")[0], // Set current date
      };
      setAmenities((prev) => [...prev, newAmenity]); // Add new amenity to the list
    }

    // Close dialog, reset editing state and form data
    setIsDialogOpen(false);
    setEditingAmenity(null);
    setFormData({ name: "", description: "", icon: "Wifi", isActive: true });
  };

  // Handles opening the dialog for editing an existing amenity
  const handleEdit = (amenity) => {
    setEditingAmenity(amenity); // Set the amenity to be edited
    setFormData({
      name: amenity.name,
      description: amenity.description,
      icon: amenity.icon,
      isActive: amenity.isActive,
    }); // Populate form with existing amenity data
    setIsDialogOpen(true); // Open the dialog
  };

  // Handles deleting an amenity by its ID
  const handleDelete = (id) => {
    setAmenities((prev) => prev.filter((amenity) => amenity.id !== id)); // Remove amenity from list
  };

  // Toggles the 'isActive' status of an amenity
  const toggleAmenityStatus = (id) => {
    setAmenities((prev) =>
      prev.map((amenity) =>
        amenity.id === id
          ? { ...amenity, isActive: !amenity.isActive } // Toggle status
          : amenity
      )
    );
  };

  // Handles opening the dialog for creating a new amenity
  const openCreateDialog = () => {
    setEditingAmenity(null); // Clear editing state
    setFormData({ name: "", description: "", icon: "Wifi", isActive: true }); // Reset form data
    setIsDialogOpen(true); // Open the dialog
  };

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
          onClick={openCreateDialog}
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
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Description
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Usage Count
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Status
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Created Date
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {amenities.map((amenity) => (
                <TableRow key={amenity.id}>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    <div className="flex items-center gap-2">
                      {amenity.icon}
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
                    <div className="flex items-center gap-2">
                      {/* Custom badge styling with Tailwind classes */}
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          amenity.isActive
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
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
                          onChange={() => toggleAmenityStatus(amenity.id)}
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {amenity.createdDate}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    <div className="flex gap-2">
                      {/* Edit button with Lucide icon and Tailwind styling */}
                      <button
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        onClick={() => handleEdit(amenity)}
                        title="Edit"
                      >
                        <EditIcon fontSize="small" sx={{color:"#000000"}} />
                      </button>
                      {/* Delete button with Lucide icon and Tailwind styling */}
                      <button
                        className="p-2 rounded-full hover:bg-red-100 transition-colors"
                        onClick={() => handleDelete(amenity.id)}
                        title="Delete"
                      >
                        <DeleteIcon fontSize="small" sx={{color:"#e53935"}} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Custom Modal for Add/Edit Amenity (using HTML and Tailwind) */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {editingAmenity ? "Edit Amenity" : "Create Amenity"}
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl font-semibold"
                onClick={() => setIsDialogOpen(false)}
              >
                &times;
              </button>
            </div>
            {/* Modal Description */}
            <p className="text-sm text-gray-600 mb-4">
              {editingAmenity
                ? "Update the amenity details below."
                : "Add a new amenity to your platform."}
            </p>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Amenity Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="e.g., Swimming Pool, Parking, WiFi"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  rows="3"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Describe this amenity..."
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="icon" className="block text-sm font-medium text-gray-700 mb-1">
                  Icon
                </label>
                <select
                  id="icon"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.icon}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, icon: e.target.value }))
                  }
                >
                  <option value="Wifi">WiFi</option>
                  <option value="Car">Parking</option>
                  <option value="Waves">Swimming Pool</option>
                  <option value="Dumbbell">Gym</option>
                  <option value="Shield">Security</option>
                  <option value="TreePine">Garden</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isActiveModal" // Different ID to avoid conflict with table switch
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={formData.isActive}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      isActive: e.target.checked,
                    }))
                  }
                />
                <label htmlFor="isActiveModal" className="text-sm font-medium text-gray-700">
                  Active
                </label>
              </div>
              {/* Modal Footer Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  {editingAmenity ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
