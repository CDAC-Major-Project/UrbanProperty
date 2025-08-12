import React from 'react'
import Picture1 from "../assets/Images/signup.jpg"
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { Button } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useParams } from 'react-router-dom';
import { getPropertyById } from '../Services/propertiesAPI';
import coverPhoto from '../assets/Images/defaultimage .jpeg';

const property = {
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
    };

const PropertyDetails = () => {

  const {id} = useParams();

    const [propertyDetail, setPropertyDetail] = React.useState(null);

    console.log("propertyDetail : ", propertyDetail);
  React.useEffect(() => {
    if(id !== null){
        getPropertyById(id, setPropertyDetail);
    }
  }, [id])

  const randomNumber = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;

  return (
    <div className='w-full h-min-screen bg-[#F9FAFB] ' >
        {/* hero section - image section */}
        <div className=' mt-35 w-screen h-[80vh] relative' >
            <img src={propertyDetail?.images.length > 0 ? propertyDetail?.images[0] : coverPhoto} className='object-cover object-center aspect-video w-full h-full' />
            <div className='absolute bottom-10 left-1/2 -translate-x-1/2 p-4 bg-black/80 w-11/12 rounded-2xl flex justify-between ' >
                {/* property name and address */}
                <div>
                    <h1 className='text-4xl text-white font-bold'>{propertyDetail?.title}</h1> 
                    <p className='text-lg  text-white flex items-center '> <PlaceOutlinedIcon fontSize="small" /> {propertyDetail?.address}, {propertyDetail?.city}, {propertyDetail?.state}</p>
                </div>
                {/* property price */}
                <div className='flex flex-col items-end' >
                    <h2 className='text-3xl font-semibold text-white'>₹{propertyDetail?.startingPrice.toLocaleString()}</h2>
                    <p className='font-semibold text-white'>{randomNumber.toLocaleString()} sqft</p>
                </div>
            </div>
        </div>

        <div className='w-11/12 mx-auto my-10 space-y-5 ' >
            <div className='w-full grid grid-cols-3 space-x-5' >
                <div className='col-span-2 space-y-5 ' >
                    <div className=' h-fit w-full border-2 border-gray-300 bg-white items-center grid grid-cols-4 rounded-2xl shadow-gray-300 shadow-lg p-10' >
                        <div className='col-span-1 flex  space-x-5 ' >
                            <LocalHotelOutlinedIcon className='text-[#155DFC]' fontSize='large' />
                            <div>
                                <p className='text-3xl font-bold' >{property?.beds}</p>
                                <p>Bedrooms</p>
                            </div>
                        </div>
                        <div className='col-span-1 flex space-x-5 ' >
                            <BathtubOutlinedIcon className='text-[#155DFC]' fontSize='large' />
                            <div>
                                <p className='text-3xl font-bold' >{property?.baths}</p>
                                <p>Bathrooms</p>
                            </div>
                        </div>
                        <div className='col-span-1 flex space-x-5 ' >
                            <MapOutlinedIcon className='text-[#155DFC]' fontSize='large' />
                            <div>
                                <p className='text-3xl font-bold' >{property?.area_sqft}</p>
                                <p>Sq Ft</p>
                            </div>
                        </div>
                        <div className='col-span-1 flex space-x-5 ' >
                            <CalendarTodayIcon className='text-[#155DFC]' fontSize='large' />
                            <div>
                                <p className='text-3xl font-bold' >2019</p>
                                <p>Year Built</p>
                            </div>
                        </div>
                    </div>


                    {/* property description */}
                    <div className=' space-y-2 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5' >
                        <p className='text-lg text-black font-semibold '>Property Description</p>
                        <p className='text-gray-600' >{propertyDetail?.description}</p>
                    </div>

                </div>

                <div className=' h-fit border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-8 col-span-1 space-y-2 ' >

                    <p className='text-lg font-medium text-center text-black' >Interested in this property?</p>
                    <p className='text-center text-[#00A63E] font-bold text-3xl' >₹{propertyDetail?.startingPrice.toLocaleString()}</p>
                    <p className='text-center text-gray-500' >₹{property?.area_sqft}/sqft</p>
                    <p className='w-full border-t-2 border-gray-400 my-3'></p>
                    <Button 
                        variant='contained' 
                        color="success" 
                        size='large'
                        sx={{fontWeight:800, padding: "5px 0px", fontSize: "1.2rem", width:"100%"}}    
                    >
                        <span className='text-xl' >Buy This Property</span>
                    </Button>
                </div>
            </div>

            <div className=' space-y-3 w-full border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5' >
                <p className='text-lg font-medium text-black' >Amenities</p>
                <div className='flex flex-wrap gap-2' >
                    {
                        propertyDetail?.amenities?.length > 0 && propertyDetail?.amenities?.map((amenity, index) => (
                            <div key={index} className='bg-[#BBBBBB] rounded-lg w-fit px-2 py-1' >
                                <p className='text-black text-base' >{amenity?.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyDetails;