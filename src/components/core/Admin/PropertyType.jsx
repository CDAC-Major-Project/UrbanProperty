"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BusinessIcon from "@mui/icons-material/Business";
import EditPropertyTypePopup from "./PropertyTypePopup";


const initialPropertyTypes = [
  {
    id: 1,
    name: "Villa",
    description: "Luxury standalone houses with gardens and premium amenities",
    count: 45,
    createdDate: "2024-01-10",
  },
  {
    id: 2,
    name: "Apartment",
    description: "Multi-story residential buildings with individual units",
    count: 128,
    createdDate: "2024-01-10",
  },
  {
    id: 3,
    name: "House",
    description: "Single-family residential properties",
    count: 89,
    createdDate: "2024-01-10",
  },
  {
    id: 4,
    name: "Commercial",
    description: "Office spaces, retail stores, and business properties",
    count: 34,
    createdDate: "2024-01-10",
  },
  {
    id: 5,
    name: "Land",
    description: "Vacant plots and development land",
    count: 23,
    createdDate: "2024-01-10",
  },
];

export default function PropertyType() {
  const [propertyTypes, setPropertyTypes] = useState(initialPropertyTypes);
//   const [open, setOpen] = useState(false);
//   const [editingType, setEditingType] = useState(null);
//   const [formData, setFormData] = useState({ name: "", description: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editingType) {
//       setPropertyTypes((prev) =>
//         prev.map((type) =>
//           type.id === editingType.id ? { ...type, ...formData } : type
//         )
//       );
//     } else {
//       const newType = {
//         id: Math.max(...propertyTypes.map((t) => t.id)) + 1,
//         ...formData,
//         count: 0,
//         createdDate: new Date().toISOString().split("T")[0],
//       };
//       setPropertyTypes((prev) => [...prev, newType]);
//     }
//     setOpen(false);
//     setEditingType(null);
//     setFormData({ name: "", description: "" });
//   };

//   const handleEdit = (type) => {
//     setEditingType(type);
//     setFormData({ name: type.name, description: type.description });
//     setOpen(true);
//   };

  const handleDelete = (id) => {
    setPropertyTypes((prev) => prev.filter((type) => type.id !== id));
  };

//   const openCreateDialog = () => {
//     setEditingType(null);
//     setFormData({ name: "", description: "" });
//     setOpen(true);
//   };

  const [editPropertyType, setEditPropertyType] = React.useState(null);
  const [editFlag, setEditFlag] = React.useState(false);
  const [addFlag, setAddFlag] = React.useState(false);

  return (
    <div className="space-y-6 my-10 ">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Property Types</h2>
          <p className="text-gray-500">
            Manage different categories of properties available on your platform
          </p>
        </div>
        <button
          type="button"
          className=" font-semibold flex items-center gap-2 bg-black hover:bg-gray-900 cursor-pointer text-white p-2 rounded-lg shadow shadow-gray-400 "
          onClick={() => setAddFlag(true)}
        >
          <AddIcon fontSize="small" />
          Add Property Type
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="space-y-3 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <p className="font-medium text-xl">Total Types</p>
          <p className="text-4xl font-semibold">{propertyTypes.length}</p>
          <p className="text-xs text-gray-500">Property categories</p>
        </div>
        <div className="space-y-3 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <p className="font-medium text-xl">Total Properties</p>
          <p className="text-4xl font-semibold">
            {propertyTypes.reduce((sum, type) => sum + type.count, 0)}
          </p>
          <p className="text-xs text-gray-500">Across all types</p>
        </div>
        <div className="space-y-3 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <p className="font-medium text-xl">Most Popular</p>
          <p className="text-4xl font-semibold">
            {
              propertyTypes.reduce(
                (max, type) => (type.count > max.count ? type : max),
                propertyTypes[0]
              )?.name
            }
          </p>
          <p className="text-xs text-gray-500">
            {
              propertyTypes.reduce(
                (max, type) => (type.count > max.count ? type : max),
                propertyTypes[0]
              )?.count
            }{" "}
            properties
          </p>
        </div>
        <div className="space-y-3 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <p className="font-medium text-xl">Average per Type</p>
          <p className="text-4xl font-semibold">
            {Math.round(
              propertyTypes.reduce((sum, type) => sum + type.count, 0) /
                propertyTypes.length
            )}
          </p>
          <p className="text-xs text-gray-500">Properties per type</p>
        </div>
      </div>

      {/* Table */}
      <div className="space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5">
        <div>
          <h3 className="font-semibold text-xl">Property Types</h3>
          <p className="text-sm text-gray-500">
            Manage your property categories
          </p>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }} >Name</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }} >Description</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }} >Properties Count</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }} >Created Date</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }} >Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {propertyTypes.map((type) => (
                <TableRow key={type.id}>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }} >
                    <div className="flex items-center gap-2">
                      <BusinessIcon
                        fontSize="small"
                        className="text-gray-500"
                      />
                      {type.name}
                    </div>
                  </TableCell>
                  <TableCell  sx={{ color: "#000000", textWrap: "nowrap" }} className="truncate max-w-xs">
                    {type.description}
                  </TableCell>
                  <TableCell  sx={{ color: "#000000", textWrap: "nowrap" }} className="text-center font-semibold">
                    {type.count}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }} >{type.createdDate}</TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }} >
                    <div className="flex gap-2">
                      <IconButton onClick={() => {setEditPropertyType(type); setEditFlag(true)}}>
                        <EditIcon fontSize="small" sx={{color:"#000000"}} />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDelete(type.id)}
                        sx={{color:"#e53935"}}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Dialog */}
    {
        (editFlag || addFlag ) && <EditPropertyTypePopup data={editPropertyType} setData={setEditPropertyType} close={ editFlag === true ? setEditFlag : setAddFlag } />
    }

      {/* <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          {editingType ? "Edit Property Type" : "Create Property Type"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <TextField
              fullWidth
              label="Property Type Name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
            <TextField
              fullWidth
              label="Description"
              multiline
              minRows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <MUIButton onClick={() => setOpen(false)} variant="outlined">
            Cancel
          </MUIButton>
          <MUIButton onClick={handleSubmit} variant="contained">
            {editingType ? "Update" : "Create"}
          </MUIButton>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}
