import React from "react";
import {
  getAllAmenities,
  getAllPropertyType,
} from "../../../Services/propertiesAPI";
import { useSelector } from "react-redux";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import * as yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useRef } from "react";

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

const EditProperty = ({ data, close }) => {
  const obj = {
    id:data?.id,
    sellerId: data?.seller?.id,
    title: data?.title,
    description: data?.description,
    address: data?.address,
    city: data?.city,
    state: data?.state,
    zipCode: data?.zipCode,
    startingPrice: data?.startingPrice,
    propertyTypeId: data?.propertyType?.id,
    amenityIds: data?.amenities?.map((amenity) => amenity?.id),
    details: {
      numBedrooms: data?.details?.numBedrooms,
      numBathrooms: data?.details?.numBathrooms,
      sizeSqft: data?.details?.sizeSqft,
      buildYear: data?.details?.buildYear,
    },
  };

  const { token } = useSelector((state) => state.auth);

  const [amenities, setAmenities] = React.useState([]);
  const [propertyType, setPropertyType] = React.useState(null);
  const [formData, setFormData] = React.useState(obj);
  const [errors, setErrors] = React.useState(null);

  console.log("formData : ", formData);
  console.log("data", data)

  const photoRef = React.useRef(null);
  const [propertyImages, setPropertyImages] = React.useState(null);
  console.log("property image : ", propertyImages);
  const [previewImages, setPreviewImages] = React.useState(
    data?.images?.length !== 0 ? data?.images[0] : null
  );

  const previewImage = (e) => {
    if (e?.target?.files && e?.target?.files[0]) {
      const file = e?.target?.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setPreviewImages(event.target.result);
      };
    }
  };

  const imageHandler = (e) => {
    if (e?.target?.files && e?.target?.files[0]) {
      const file = e?.target?.files[0];
      setPropertyImages(file);
      previewImage(e);
    }
  };

  const editPopUpRef = useRef(null);

  const closeOnClickOutSide = (e) => {

    if(e.target.closest(".MuiPaper-root") || e.target.closest(".MuiAutocomplete-popper")){
        return;
    }

    if (editPopUpRef.current && !editPopUpRef.current.contains(e.target)) {
      close(null);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", closeOnClickOutSide);
    return () => document.removeEventListener("mousedown", closeOnClickOutSide);
  }, []);

  // amenity and property type
  React.useEffect(() => {
    getAllPropertyType(token, setPropertyType);
    getAllAmenities(token, setAmenities);
  }, []);

  // validation
    const propertySchema = yup.object().shape({
      image: yup.mixed().required("Image is required"),
      title: yup.string().required("Title is required"),
      description: yup.string().required("Description is required"),
      address: yup.string().required("Address is required"),
      city: yup.string().required("City is required"),
      state: yup.string().required("State is required"),
      zipCode: yup.number().required("Zipcode is required"),
      startingPrice: yup
        .number()
        .typeError("Price must be a number")
        .min(500, "Minimum price is 500")
        .max(100000000, "Maximum price is 10 crore")
        .required("Price is required"),
      propertyTypeId: yup
        .number()
        .typeError("Select property type")
        .required("Property type is required"),
      amenityIds: yup
        .array()
        .of(yup.number())
        .min(1, "Select at least one amenity"),
      details: yup.object().shape({
        numBedrooms: yup
          .number()
          .typeError("Enter number of bedrooms")
          .min(1, "At least 1 bedroom")
          .required("Number of bedrooms is required"),
        numBathrooms: yup
          .number()
          .typeError("Enter number of bathrooms")
          .min(1, "At least 1 bathroom")
          .required("Number of bathrooms is required"),
        sizeSqft: yup
          .number()
          .typeError("Enter size in sqft")
          .min(100, "Minimum size is 100 sqft")
          .required("Size is required"),
        buildYear: yup
          .number()
          .typeError("Enter build year")
          .min(1800, "Year must be after 1800")
          .max(new Date().getFullYear(), "Year cannot be in the future")
          .required("Build year is required"),
      }),
    });

  const editPropertyHandler = async () => {
    try{
        await propertySchema.validate({...formData, image: data?.images?.length !== 0 ? "" : ""}, { abortEarly: false });
    }catch(err){
      console.log("Error at editing the property : ", err);
    }
  };

  return (
    <div className=" fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div
        ref={editPopUpRef}
        className=" overflow-y-auto h-[95vh] border-2 rounded-lg border-red-300 max-w-4xl mx-auto"
      >
        <form className="p-5 bg-white space-y-6">
          {/* Basic Information */}
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Edit Property</h3>
            <CloseOutlinedIcon
              fontSize="large"
              onClick={() => close(null)}
              className="cursor-pointer"
            />
          </div>

          {/* image */}
          <div className=" flex items-center gap-5">
            <div className="w-2/8">
              {previewImages !== null ? (
                <div>
                  <h3 className="text-medium text-black font-semibold">
                    Selected Images
                  </h3>
                  <div className="relative w-full aspect-square">
                    <img
                      src={previewImages}
                      className="object-cover rounded-2xl w-full h-full"
                    />
                    <div
                      onClick={() => {
                        setPropertyImages(null);
                        setPreviewImages(null);
                      }}
                      className="p-1 cursor-pointer rounded-full bg-black/80 z-10 absolute top-2 right-2 "
                    >
                      <CloseIcon fontSize="medium" sx={{ color: "#FFFFFF" }} />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    ref={photoRef}
                    multiple
                    className="hidden"
                    onChange={(event) => imageHandler(event)}
                  />

                  <div
                    className=" cursor-pointer border-2 border-dashed border-gray-300 rounded-lg  aspect-square w-full flex items-center justify-center"
                    onClick={() => photoRef.current && photoRef.current.click()}
                  >
                    <div className="space-y-1">
                      <div className=" w-fit mx-auto cursor-pointer border border-dashed border-black outline-none p-3 bg-gray-300  rounded-full ">
                        <CloudUploadIcon />
                      </div>
                      <p className="text-sm text-gray-500">
                        PNG, JPG up to 10MB
                      </p>
                      <p className="text-sm text-gray-500">
                        Click to browse a file
                      </p>
                    </div>
                  </div>

                  <div>
                    {errors?.image && (
                      <span className="font-semibold text-xs text-red-500">
                        {errors?.image}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* title and property type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                <p className="text-medium text-black font-semibold">
                  Property Title
                </p>
                <div>
                  <input
                    type="text"
                    value={formData?.title}
                    placeholder="Enter property title"
                    className="outline-none border border-gray-300 rounded-md p-2 w-full"
                    onChange={(e) =>
                      setFormData((prev) => {
                        return { ...prev, title: e.target.value };
                      })
                    }
                  />
                  {errors?.title && (
                    <span className="font-semibold text-xs text-red-500">
                      {errors?.title}
                    </span>
                  )}
                </div>
              </label>

              <label>
                <p className="text-medium text-black font-semibold">
                  Property Type
                </p>

                <div>
                  <Select
                    value={formData?.propertyTypeId}
                    onChange={(e) =>
                      setFormData((prev) => {
                        return { ...prev, propertyTypeId: e.target.value };
                      })
                    }
                    size="small"
                    className="w-full"
                  >
                    {propertyType?.map((type) => (
                      <MenuItem key={type?.id} value={type?.id}>
                        {type?.name}
                      </MenuItem>
                    ))}
                  </Select>

                  {errors?.propertyTypeId && (
                    <span className="font-semibold text-xs text-red-500">
                      {errors?.propertyTypeId}
                    </span>
                  )}
                </div>
              </label>
            </div>

            {/* Description */}
            <label>
              <p className="text-medium text-black font-semibold">
                Description
              </p>
              <div>
                <textarea
                  type="text"
                  placeholder="Describe your property in detail..."
                  rows={4}
                  className="outline-none border border-gray-300 rounded-md p-2 w-full"
                  value={formData?.description}
                  onChange={(e) =>
                    setFormData((prev) => {
                      return { ...prev, description: e.target.value };
                    })
                  }
                />

                {errors?.description && (
                  <span className="font-semibold text-xs text-red-500">
                    {errors?.description}
                  </span>
                )}
              </div>
            </label>

            {/* address */}
            <label>
              <p className="text-medium text-black font-semibold">Address</p>
              <div>
                <input
                  type="text"
                  placeholder="Enter property address"
                  className="outline-none border border-gray-300 rounded-md p-2 w-full"
                  value={formData?.address}
                  onChange={(e) =>
                    setFormData((prev) => {
                      return { ...prev, address: e.target.value };
                    })
                  }
                />

                {errors?.address && (
                  <span className="font-semibold text-xs text-red-500">
                    {errors?.address}
                  </span>
                )}
              </div>
            </label>

            {/* City and State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                <p className="text-medium text-black font-semibold">City</p>
                <div>
                  <input
                    type="text"
                    placeholder="Enter city"
                    className="outline-none border border-gray-300 rounded-md p-2 w-full"
                    value={formData?.city}
                    onChange={(e) =>
                      setFormData((prev) => {
                        return { ...prev, city: e.target.value };
                      })
                    }
                  />

                  {errors?.city && (
                    <span className="font-semibold text-xs text-red-500">
                      {errors?.city}
                    </span>
                  )}
                </div>
              </label>

              <label>
                <p className="text-medium text-black font-semibold">State</p>
                <div>
                  <Autocomplete
                    options={stateOptions}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Enter state" />
                    )}
                    value={formData?.state}
                    onChange={(event, newValue) => {
                      setFormData((prev) => ({ ...prev, state: newValue }));
                    }}
                  />

                  {errors?.state && (
                    <span className="font-semibold text-xs text-red-500">
                      {errors?.state}
                    </span>
                  )}
                </div>
              </label>
            </div>

            {/* price and buildyear */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                <p className="text-medium text-black font-semibold">Price</p>
                <div>
                  <input
                    placeholder="e.g., 2500000"
                    type="number"
                    className="outline-none border border-gray-300 rounded-md p-2 w-full"
                    value={formData?.startingPrice}
                    onChange={(e) =>
                      setFormData((prev) => {
                        return { ...prev, startingPrice: e.target.value };
                      })
                    }
                  />
                  {errors?.startingPrice && (
                    <span className="font-semibold text-xs text-red-500">
                      {errors?.startingPrice}
                    </span>
                  )}
                </div>
              </label>

              <label>
                <p className="text-medium text-black font-semibold">Build</p>
                <div>
                  <input
                    type="number"
                    placeholder="Enter build year"
                    className="outline-none border border-gray-300 rounded-md p-2 w-full"
                    value={formData?.details?.buildYear}
                    onChange={(e) =>
                      setFormData((prev) => {
                        return {
                          ...prev,
                          details: {
                            ...prev?.details,
                            buildYear: e.target.value,
                          },
                        };
                      })
                    }
                  />

                  {errors?.["details.buildYear"] && (
                    <span className="font-semibold text-xs text-red-500">
                      {errors?.["details.buildYear"]}
                    </span>
                  )}
                </div>
              </label>
            </div>

            {/* zip code and Bedrooms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                <p className="text-medium text-black font-semibold">Zipcode</p>
                <div>
                  <input
                    placeholder="Enter Zipcode"
                    type="number"
                    className="outline-none border border-gray-300 rounded-md p-2 w-full"
                    value={formData?.zipCode}
                    onChange={(e) =>
                      setFormData((prev) => {
                        return { ...prev, zipCode: e.target.value };
                      })
                    }
                  />

                  {errors?.zipCode && (
                    <span className="font-semibold text-xs text-red-500">
                      ZipCode is required
                    </span>
                  )}
                </div>
              </label>

              <label>
                <p className="text-medium text-black font-semibold">Bedroom</p>
                <div>
                  <input
                    type="number"
                    placeholder="Enter no. of Bedroom"
                    className="outline-none border border-gray-300 rounded-md p-2 w-full"
                    value={formData?.details?.numBedrooms}
                    onChange={(e) =>
                      setFormData((prev) => {
                        return {
                          ...prev,
                          details: {
                            ...prev?.details,
                            numBedrooms: e.target.value,
                          },
                        };
                      })
                    }
                  />

                  {errors?.["details.numBedrooms"] && (
                    <span className="font-semibold text-xs text-red-500">
                      {errors?.["details.numBedrooms"]}
                    </span>
                  )}
                </div>
              </label>
            </div>

            {/* BathRoom and Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                <p className="text-medium text-black font-semibold">Bathroom</p>
                <div>
                  <input
                    placeholder="Enter no. of Bathroom"
                    type="number"
                    className="outline-none border border-gray-300 rounded-md p-2 w-full"
                    value={formData?.details?.numBathrooms}
                    onChange={(e) =>
                      setFormData((prev) => {
                        return {
                          ...prev,
                          details: {
                            ...prev?.details,
                            numBathrooms: e.target.value,
                          },
                        };
                      })
                    }
                  />

                  {errors?.["details.numBathrooms"] && (
                    <span className="font-semibold text-xs text-red-500">
                      {errors?.["details.numBathrooms"]}
                    </span>
                  )}
                </div>
              </label>

              <label>
                <p className="text-medium text-black font-semibold">Size</p>
                <div>
                  <input
                    type="number"
                    placeholder="Enter no. Size in Sqft"
                    className="outline-none border border-gray-300 rounded-md p-2 w-full"
                    value={formData?.details?.sizeSqft}
                    onChange={(e) =>
                      setFormData((prev) => {
                        return {
                          ...prev,
                          details: {
                            ...prev?.details,
                            sizeSqft: e.target.value,
                          },
                        };
                      })
                    }
                  />
                  {errors?.["details.sizeSqft"] && (
                    <span className="font-semibold text-xs text-red-500">
                      {errors?.["details.sizeSqft"]}
                    </span>
                  )}
                </div>
              </label>
            </div>

            {/* amenities and buildyear */}
            <label>
              <p className="text-medium text-black font-semibold">Amenities</p>
              <div>
                <div className="flex items-start gap-2 flex-wrap  ">
                  {amenities?.map((amenity, index) => (
                    <div
                      key={index}
                      className={` cursor-pointer flex items-center gap-2 px-2 py-1 rounded-full border-4 transition-all duration-200 hover:shadow-lg focus:ring-2 ${
                        formData?.amenityIds?.includes(amenity?.id)
                          ? "bg-green-600 text-white border-green-300 hover:bg-green-500 focus:ring-green-500"
                          : "bg-red-50 text-red-800 border-red-200 hover:bg-red-100 focus:ring-red-400"
                      } `}
                      onClick={() =>
                        setFormData((prev) => {
                          const amenityIds = Array.isArray(prev.amenityIds)
                            ? prev.amenityIds
                            : [];
                          const alreadySelected = amenityIds?.includes(
                            amenity?.id
                          );
                          return {
                            ...prev,
                            amenityIds: alreadySelected
                              ? prev?.amenityIds?.filter(
                                  (id) => id !== amenity?.id
                                )
                              : [
                                  ...(Array.isArray(prev.amenityIds)
                                    ? prev.amenityIds
                                    : []),
                                  amenity?.id,
                                ],
                          };
                        })
                      }
                    >
                      <p className="text-nowrap font-semibold ">
                        {amenity?.name}
                      </p>
                      <div className="cursor-pointer">
                        {formData?.amenityIds?.includes(amenity?.id) ? (
                          <ClearIcon />
                        ) : (
                          <AddIcon />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {errors?.amenityIds && (
                  <span className="font-semibold text-xs text-red-500">
                    {errors?.amenityIds}
                  </span>
                )}
              </div>
            </label>
          </div>

          <button
            type="button"
            className=" cursor-pointer w-full py-2 text-white font-semibold bg-gradient-to-r from-black to-black hover:from-gray-900 hover:to-gray-900 shadow-md hover:shadow-lg transition-all duration-200"
            onClick={() => editPropertyHandler()}
          >
            Edit Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProperty;
