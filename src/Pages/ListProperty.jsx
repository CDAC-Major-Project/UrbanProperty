import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Menu } from "@mui/material";
import React from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ListProperty = () => {
  const propertyTypeOptions = [
    "Residential",
    "Commercial",
    "Agricultural",
    "Industrial",
  ];

  const stateOptions = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const photoRef = React.useRef(null);
  const [propertyImages, setPropertyImages] = React.useState([]);
  
  console.log("images -> ", propertyImages)
  

  const previewImage = (e) => {
    if(e.target.files && e.target.files[0]){
      const reader = new FileReader();
      reader.onload = (event) => {
        setPropertyImages(event.target.result);
      }
    }
  }

  const imageHandler = (e) => {
    console.log("files : ", e.target.files)
    if(e.target.files){
      setPropertyImages([...propertyImages, { key: propertyImages.length, image:e.target.files[0]}]);
      previewImage(e);
    }
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className=" mt-40 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            List New Property
          </h1>
          <p className="text-gray-600">
            Fill in the details to list your property
          </p>
        </div>

        <form className="border border-[#9b9baf] rounded-xl p-5 mb-10 bg-white space-y-6">
          {/* Basic Information */}
          <div>
            <h3 className="text-2xl font-semibold">Basic Information</h3>
            <p className="text-medium text-gray-600">
              Provide basic details about your property
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* title and property type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                <p className="text-medium text-black font-semibold">
                  Property Title
                </p>
                <input
                  placeholder="Enter property title"
                  className="outline-none border border-gray-300 rounded-md p-2 w-full"
                />
              </label>

              <label>
                <p className="text-medium text-black font-semibold">
                  Property Type
                </p>

                <Select
                  // value={age}
                  // onChange={handleChange}
                  size="small"
                  className="w-full"
                  displayEmpty
                >
                  {propertyTypeOptions.map((type, index) => (
                    <MenuItem key={index} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </label>
            </div>

            {/* Description */}
            <label>
              <p className="text-medium text-black font-semibold">
                Description
              </p>
              <textarea
                placeholder="Describe your property in detail..."
                rows={4}
                className="outline-none border border-gray-300 rounded-md p-2 w-full"
              />
            </label>

            {/* price and address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                <p className="text-medium text-black font-semibold">Price</p>
                <input
                  placeholder="e.g., 2500000"
                  type="number"
                  className="outline-none border border-gray-300 rounded-md p-2 w-full"
                />
              </label>

              <label>
                <p className="text-medium text-black font-semibold">Address</p>
                <input
                  placeholder="Enter property address"
                  className="outline-none border border-gray-300 rounded-md p-2 w-full"
                />
              </label>
            </div>

            {/* City and State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                <p className="text-medium text-black font-semibold">City</p>
                <input
                  placeholder="Enter city"
                  className="outline-none border border-gray-300 rounded-md p-2 w-full"
                />
              </label>

              <label>
                <p className="text-medium text-black font-semibold">State</p>
                <Autocomplete
                  displayEmpty
                  options={stateOptions}
                  size="small"
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Enter state" />
                  )}
                />
              </label>
            </div>
          </div>

          {/* image */}
          <div>
            <img src={propertyImages[0]?.image} />
            <input
                type="file"
                accept="image/*"
                ref={photoRef}
                className="hidden"
                onChange={(event) => imageHandler(event)}
            />
            <div 
                className=" cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-8  space-y-2 text-center"
                onClick={() => photoRef.current && photoRef.current.click() }
            >
              {/* <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" /> */}
              <p className="text-gray-600">
                Drag and drop your photos here, or click to browse
              </p>
              <p className="text-sm text-gray-500">PNG, JPG up to 10MB each, Max 4 photo</p>
              <div
                className=" w-fit mx-auto cursor-pointer border border-dashed border-black outline-none p-3 bg-gray-300  rounded-full "
               >
                <CloudUploadIcon/>
              </div>
            </div>
          </div>

          <button
            type="button"

            className=" cursor-pointer w-full py-2 text-white font-semibold bg-gradient-to-r from-black to-black hover:from-gray-900 hover:to-gray-900 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListProperty;
