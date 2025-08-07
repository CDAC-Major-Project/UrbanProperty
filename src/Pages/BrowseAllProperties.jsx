import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Picture1 from "../assets/Images/signup.jpg";
import Picture2 from "../assets/Images/Agricultural.png";
import Picture3 from "../assets/Images/banner1.png";
import Picture4 from "../assets/Images/banner2.png";
import Picture5 from "../assets/Images/industrial.png";
import Picture6 from "../assets/Images/Other.png";
import Picture7 from "../assets/Images/Property1.png";
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Button from "@mui/material/Button";
import { useDebounce } from "use-debounce";

const BrowseAllProperties = () => {
  const properties = [
    {
      title: "Modern Villa with Pool",
      price: 2500000,
      location: "Beverly Hills, CA",
      beds: 5,
      baths: 4,
      area_sqft: 4200,
      actions: {
        view_details: true,
        contact: true,
      },
      photo: Picture1,
      property_type: "residential",
    },
    {
      title: "Luxury Apartment Downtown",
      price: 1750000,
      location: "Los Angeles, CA",
      beds: 3,
      baths: 2,
      area_sqft: 2800,
      actions: {
        view_details: true,
        contact: true,
      },
      photo: Picture2,
      property_type: "residential",
    },
    {
      title: "Cozy Cottage Retreat",
      price: 950000,
      location: "Napa Valley, CA",
      beds: 2,
      baths: 2,
      area_sqft: 1800,
      actions: {
        view_details: true,
        contact: true,
      },
      photo: Picture3,
      property_type: "agricultural",
    },
    {
      title: "Beachfront Mansion",
      price: 4900000,
      location: "Malibu, CA",
      beds: 6,
      baths: 5,
      area_sqft: 5600,
      actions: {
        view_details: true,
        contact: true,
      },
      photo: Picture4,
      property_type: "agricultural",
    },
    {
      title: "Urban Penthouse Suite",
      price: 3200000,
      location: "New York, NY",
      beds: 4,
      baths: 3,
      area_sqft: 3500,
      actions: {
        view_details: true,
        contact: true,
      },
      photo: Picture5,
      property_type: "commercial",
    },
    {
      title: "Suburban Family Home",
      price: 1150000,
      location: "Austin, TX",
      beds: 4,
      baths: 3,
      area_sqft: 3000,
      actions: {
        view_details: true,
        contact: true,
      },
      photo: Picture6,
      property_type: "industrial",
    },
    {
      title: "Golf Course Villa",
      price: 2100000,
      location: "Scottsdale, AZ",
      beds: 5,
      baths: 4,
      area_sqft: 4100,
      actions: {
        view_details: true,
        contact: true,
      },
      photo: Picture7,
      property_type: "residential",
    },
    {
      title: "Lake House Escape",
      price: 1650000,
      location: "Lake Tahoe, NV",
      beds: 3,
      baths: 2,
      area_sqft: 2600,
      actions: {
        view_details: true,
        contact: true,
      },
      photo: Picture1,
      property_type: "agricultural",
    },
    {
      title: "Mountain View Chalet",
      price: 2700000,
      location: "Aspen, CO",
      beds: 4,
      baths: 3,
      area_sqft: 3700,
      actions: {
        view_details: true,
        contact: true,
      },
      photo: Picture2,
      property_type: "commercial",
    },
    {
      title: "Eco-Friendly Smart Home",
      price: 1300000,
      location: "Portland, OR",
      beds: 3,
      baths: 3,
      area_sqft: 2400,
      actions: {
        view_details: true,
        contact: true,
      },
      photo: Picture3,
      property_type: "industrial",
    },
  ];

  const [filterPropertyType, setFilterPropertyType] = React.useState("");
  const [filterPropertyByName, setFilterPropertyByName] = React.useState("");
  const [debouncedFilterPropertyByName] = useDebounce(
    filterPropertyByName,
    500
  );
  const [filterPropertyByPrice, setFilterPropertyByPrice] = React.useState("");

  const [displayProperties, setDisplayProperties] = React.useState(properties);

  // filter properies on the based on Price Range
  React.useEffect(() => {
    if (filterPropertyByPrice === "") {
      filterPropertyByType();
    } else {
      const rangeArray = filterPropertyByPrice?.split("-");

      const minPrice = rangeArray?.length > 0 && parseInt(rangeArray[0]);
      const maxPrice = rangeArray?.length > 0 && parseInt(rangeArray[1]);

      const filteredProperties = displayProperties?.filter((property) => {
        if (property?.price >= minPrice && property?.price <= maxPrice) {
          return property;
        }
      });

      setDisplayProperties(filteredProperties);
    }
  }, [filterPropertyByPrice]);

  // filter properties based on name
  React.useEffect(() => {
    if (debouncedFilterPropertyByName === "") {
      setDisplayProperties(properties);
    } else {
      const filteredProperties = properties?.filter((property) =>
        property?.title
          .toLowerCase()
          .includes(debouncedFilterPropertyByName.toLowerCase())
      );
      setDisplayProperties(filteredProperties);
    }
  }, [debouncedFilterPropertyByName]);

  // filter properties based on type
  const filterPropertyByType = () => {
    if (filterPropertyType === "") {
      setDisplayProperties(properties);
    } else {
      const filteredProperties = properties?.filter(
        (property) => property?.property_type === filterPropertyType
      );
      setDisplayProperties(filteredProperties);
    }
  }

  React.useEffect(() => {
    filterPropertyByType();
  }, [filterPropertyType]);

  return (
    <div className="mt-35 bg-[#F9FAFB] ">
      <div className="w-11/12 mx-auto  my-10 space-y-10 ">
        {/* filters */}
        <div className="rounded-xl p-7 shadow-2xl bg-white flex items-center space-x-4 ">
          <div className=" w-1/2 border border-gray-400 hover:border-gray-700 p-2 rounded-xl flex items-center gap-3">
            <SearchIcon sx={{ color: "#303087" }} />
            <input
              type="text"
              onChange={(e) => setFilterPropertyByName(e.target.value)}
              placeholder="Search properties..."
              className="outline-none text-gray-700 w-full "
            />
          </div>

          <div className="flex w-1/2 space-x-4 ">
            <Select
              value={filterPropertyType}
              onChange={(e) => setFilterPropertyType(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                borderRadius: "10px",
                height: "43px",
              }}
              className="w-1/2"
            >
              <MenuItem value="">Property Type</MenuItem>
              <MenuItem value={"residential"}>Residential</MenuItem>
              <MenuItem value={"commercial"}>Commercial</MenuItem>
              <MenuItem value={"agricultural"}>Agricultural</MenuItem>
              <MenuItem value={"industrial"}>Industrial</MenuItem>
            </Select>

            <Select
              value={filterPropertyByPrice}
              onChange={(e) => setFilterPropertyByPrice(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                borderRadius: "10px",
                height: "43px",
              }}
              className="w-1/2"
            >
              <MenuItem value="">Price Range</MenuItem>
              <MenuItem value="1000000-1500000">10,00000 - 15,00000</MenuItem>
              <MenuItem value="1600000-2000000">16,00000 - 20,00000</MenuItem>
              <MenuItem value="2100000-2500000">21,00000 - 25,00000</MenuItem>
              <MenuItem value="2600000-3000000">26,00000 - 30,00000</MenuItem>
            </Select>
          </div>
        </div>

        {/* property cards */}
        <div className=" min-h-screen grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {displayProperties?.map((property, index) => (
            <div
              key={index}
              className=" h-fit relative border border-gray-400 rounded-2xl hover:shadow-2xl "
            >
              {/* like */}
              <div className="absolute top-2 right-2 bg-white z-50 rounded-md px-2.5 py-1.5 flex items-center justify-center cursor-pointer">
                <FavoriteBorderIcon fontSize="small" />
              </div>

              {/* property image */}
              <div className="overflow-hidden rounded-t-2xl min-w-full ">
                <img
                  src={property.photo}
                  className=" cursor-pointer hover:scale-[110%] duration-150 rounded-t-2xl object-cover w-full aspect-video"
                />
              </div>

              {/* property details */}
              <div className="p-4 space-y-1 ">
                <h2 className="font-semibold text-lg ">{property?.title}</h2>
                <h3 className="font-semibold text-xl text-[#303087]">
                  ₹ {property?.price.toLocaleString("en-IN")}
                </h3>
                <p className="text-[#5b626b] flex items-center gap-1 -ml-1 ">
                  {" "}
                  <PlaceOutlinedIcon fontSize="small" /> {property?.location}
                </p>
                <div className="grid grid-cols-3">
                  <div className="text-nowrap flex items-center gap-1">
                    <LocalHotelOutlinedIcon />
                    <span>{property?.beds} Beds</span>
                  </div>
                  <div className="text-nowrap flex items-center gap-1">
                    <BathtubOutlinedIcon />
                    <span>{property?.baths} Baths</span>
                  </div>
                  <div className="text-nowrap flex items-center gap-1">
                    <MapOutlinedIcon />
                    <span>{property?.area_sqft} sqft</span>
                  </div>
                </div>

                {/* button */}
                <div className="mt-8">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#000000",
                      "&:hover": { bgcolor: "#1B1B1B" },
                    }}
                    className="w-full"
                  >
                    <span className="font-semibold">View Details</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseAllProperties;
