"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button as MUIButton,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BusinessIcon from "@mui/icons-material/Business";

const initialPropertyTypes = [
  { id: 1, name: "Villa", description: "Luxury standalone houses with gardens and premium amenities", count: 45, createdDate: "2024-01-10" },
  { id: 2, name: "Apartment", description: "Multi-story residential buildings with individual units", count: 128, createdDate: "2024-01-10" },
  { id: 3, name: "House", description: "Single-family residential properties", count: 89, createdDate: "2024-01-10" },
  { id: 4, name: "Commercial", description: "Office spaces, retail stores, and business properties", count: 34, createdDate: "2024-01-10" },
  { id: 5, name: "Land", description: "Vacant plots and development land", count: 23, createdDate: "2024-01-10" },
];

export default function PropertyType() {
  const [propertyTypes, setPropertyTypes] = useState(initialPropertyTypes);
  const [open, setOpen] = useState(false);
  const [editingType, setEditingType] = useState(null);
  const [formData, setFormData] = useState({ name: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingType) {
      setPropertyTypes(prev =>
        prev.map(type => (type.id === editingType.id ? { ...type, ...formData } : type))
      );
    } else {
      const newType = {
        id: Math.max(...propertyTypes.map(t => t.id)) + 1,
        ...formData,
        count: 0,
        createdDate: new Date().toISOString().split("T")[0],
      };
      setPropertyTypes(prev => [...prev, newType]);
    }
    setOpen(false);
    setEditingType(null);
    setFormData({ name: "", description: "" });
  };

  const handleEdit = (type) => {
    setEditingType(type);
    setFormData({ name: type.name, description: type.description });
    setOpen(true);
  };

  const handleDelete = (id) => {
    setPropertyTypes(prev => prev.filter(type => type.id !== id));
  };

  const openCreateDialog = () => {
    setEditingType(null);
    setFormData({ name: "", description: "" });
    setOpen(true);
  };

  return (
    <div className="space-y-6 my-10 ">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Property Types</h2>
          <p className="text-gray-500">Manage different categories of properties available on your platform</p>
        </div>
        <MUIButton
          variant="contained"
          startIcon={<AddIcon />}
          onClick={openCreateDialog}
        >
          Add Property Type
        </MUIButton>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm font-medium">Total Types</p>
          <p className="text-2xl font-bold">{propertyTypes.length}</p>
          <p className="text-xs text-gray-500">Property categories</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm font-medium">Total Properties</p>
          <p className="text-2xl font-bold">
            {propertyTypes.reduce((sum, type) => sum + type.count, 0)}
          </p>
          <p className="text-xs text-gray-500">Across all types</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm font-medium">Most Popular</p>
          <p className="text-2xl font-bold">
            {propertyTypes.reduce((max, type) => (type.count > max.count ? type : max), propertyTypes[0])?.name}
          </p>
          <p className="text-xs text-gray-500">
            {propertyTypes.reduce((max, type) => (type.count > max.count ? type : max), propertyTypes[0])?.count} properties
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm font-medium">Average per Type</p>
          <p className="text-2xl font-bold">
            {Math.round(propertyTypes.reduce((sum, type) => sum + type.count, 0) / propertyTypes.length)}
          </p>
          <p className="text-xs text-gray-500">Properties per type</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2">Property Types</h3>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Properties Count</TableCell>
                <TableCell>Created Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {propertyTypes.map(type => (
                <TableRow key={type.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <BusinessIcon fontSize="small" className="text-gray-500" />
                      {type.name}
                    </div>
                  </TableCell>
                  <TableCell className="truncate max-w-xs">{type.description}</TableCell>
                  <TableCell className="text-center font-semibold">{type.count}</TableCell>
                  <TableCell>{type.createdDate}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <IconButton onClick={() => handleEdit(type)}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(type.id)} className="text-red-600">
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
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{editingType ? "Edit Property Type" : "Create Property Type"}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <TextField
              fullWidth
              label="Property Type Name"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
            <TextField
              fullWidth
              label="Description"
              multiline
              minRows={3}
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <MUIButton onClick={() => setOpen(false)} variant="outlined">Cancel</MUIButton>
          <MUIButton onClick={handleSubmit} variant="contained">
            {editingType ? "Update" : "Create"}
          </MUIButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
