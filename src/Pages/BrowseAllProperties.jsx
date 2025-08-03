import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Picture1 from "../assets/Images/signup.jpg"
import Picture2 from "../assets/Images/Agricultural.png"
import Picture3 from "../assets/Images/banner1.png"
import Picture4 from "../assets/Images/banner2.png"
import Picture5 from "../assets/Images/industrial.png"
import Picture6 from "../assets/Images/Other.png"
import Picture7 from "../assets/Images/Property1.png"
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const BrowseAllProperties = () => {

  const properties = [
  {
    "title": "Modern Villa with Pool",
    "price": "$2,500,000",
    "location": "Beverly Hills, CA",
    "beds": 5,
    "baths": 4,
    "area_sqft": 4200,
    "actions": {
      "view_details": true,
      "contact": true
    },
    photo:Picture1
  },
  {
    "title": "Luxury Apartment Downtown",
    "price": "$1,750,000",
    "location": "Los Angeles, CA",
    "beds": 3,
    "baths": 2,
    "area_sqft": 2800,
    "actions": {
      "view_details": true,
      "contact": true
    },
    photo:Picture2
  },
  {
    "title": "Cozy Cottage Retreat",
    "price": "$950,000",
    "location": "Napa Valley, CA",
    "beds": 2,
    "baths": 2,
    "area_sqft": 1800,
    "actions": {
      "view_details": true,
      "contact": true
    },
    photo:Picture3
  },
  {
    "title": "Beachfront Mansion",
    "price": "$4,900,000",
    "location": "Malibu, CA",
    "beds": 6,
    "baths": 5,
    "area_sqft": 5600,
    "actions": {
      "view_details": true,
      "contact": true
    },
    photo:Picture4
  },
  {
    "title": "Urban Penthouse Suite",
    "price": "$3,200,000",
    "location": "New York, NY",
    "beds": 4,
    "baths": 3,
    "area_sqft": 3500,
    "actions": {
      "view_details": true,
      "contact": true
    },
    photo:Picture5
  },
  {
    "title": "Suburban Family Home",
    "price": "$1,150,000",
    "location": "Austin, TX",
    "beds": 4,
    "baths": 3,
    "area_sqft": 3000,
    "actions": {
      "view_details": true,
      "contact": true
    },
    photo:Picture6
  },
  {
    "title": "Golf Course Villa",
    "price": "$2,100,000",
    "location": "Scottsdale, AZ",
    "beds": 5,
    "baths": 4,
    "area_sqft": 4100,
    "actions": {
      "view_details": true,
      "contact": true
    },
    photo:Picture7
  },
  {
    "title": "Lake House Escape",
    "price": "$1,650,000",
    "location": "Lake Tahoe, NV",
    "beds": 3,
    "baths": 2,
    "area_sqft": 2600,
    "actions": {
      "view_details": true,
      "contact": true
    },
    photo:Picture1
  },
  {
    "title": "Mountain View Chalet",
    "price": "$2,700,000",
    "location": "Aspen, CO",
    "beds": 4,
    "baths": 3,
    "area_sqft": 3700,
    "actions": {
      "view_details": true,
      "contact": true
    },
    photo:Picture2
  },
  {
    "title": "Eco-Friendly Smart Home",
    "price": "$1,300,000",
    "location": "Portland, OR",
    "beds": 3,
    "baths": 3,
    "area_sqft": 2400,
    "actions": {
      "view_details": true,
      "contact": true
    },
    photo:Picture3
  }
]

  

  return (
    <div className="mt-35 bg-[#F9FAFB] ">
      <div className="w-11/12 mx-auto  my-10 space-y-10 ">

        {/* filters */}
        <div className="rounded-xl p-7 shadow-2xl bg-white flex items-center space-x-4 ">
          <div className=" w-1/2 border border-gray-400 hover:border-gray-700 p-2 rounded-xl flex items-center gap-3">
            <SearchIcon sx={{ color: "#303087" }} />
            <input
              type="text"
              placeholder="Search properties..."
              className="outline-none text-gray-700 w-full "
            />
          </div>

          <div className="flex w-1/2 space-x-4 ">
              <Select
                value={""}
                onChange={""}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                    borderRadius:"10px",
                    height:"43px"
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
                value={""}
                onChange={""}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                    borderRadius:"10px",
                    height:"43px"
                }}
                className="w-1/2"
              >
                <MenuItem value="">Price Range</MenuItem>
                <MenuItem value={"1000000-1500000"}>10,00000 - 15,00000</MenuItem>
                <MenuItem value={"1600000-2000000"}>16,00000 - 20,00000</MenuItem>
                <MenuItem value={"2100000-2500000"}>21,00000 - 25,00000</MenuItem>
                <MenuItem value={"2600000-3000000"}>26,00000 - 30,00000</MenuItem>
              </Select>
                
          </div>
        </div>

        {/* property cards */}
        <div className=" min-h-screen grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 " >
                {
                  properties?.map((property, index) => (
                  <div key={index} className=" relative border border-gray-400 rounded-2xl hover:shadow-2xl " >
                  
                    {/* like */}
                    <div className="absolute top-2 right-2 bg-white z-50 rounded-md px-2.5 py-1.5 flex items-center justify-center cursor-pointer" >
                      <FavoriteBorderIcon fontSize="small" />
                    </div>

                    {/* property image */}
                    <div className="overflow-hidden rounded-t-2xl " >
                      <img src={property.photo} className=" hover:scale-[110%] duration-150 rounded-t-2xl object-cover w-full aspect-video" />
                    </div>
                    
                    {/* property details */}
                    <div>
                      <h2>{property?.title}</h2>
                      <h3>{property?.price}</h3>
                      <p>{property?.location}</p>
                      <div>
                        <div>
                          <AirlineSeatFlatIcon />
                          <span>{property?.beds} Beds</span>
                        </div>
                        <div>
                          <BathtubIcon />
                          <span>{property?.baths} Baths</span>
                        </div>
                        <div>
                          <CropSquareIcon/>
                          <span>{property?.area_sqft} sqft</span>
                        </div>
                      </div>
                      <button></button>
                    </div>
                  </div>
                  ))
                }

        </div>

      </div>
    </div>
  );
};

export default BrowseAllProperties;
