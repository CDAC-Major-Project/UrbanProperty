import React from "react";
import CountUp from "react-countup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PropertyVerificationPopup from "./PropertyVerificationPopup";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "use-debounce";

const PropertyVerification = () => {
  const propertyVerificationData = [
    {
      id: 1,
      sellerName: "Rahul Sharma",
      property_type: "commercial",
      tittle: "Prime Office Space",
      description:
        "Spacious office space located in the city center, ideal for startups and businesses.",
      address: "45 MG Road",
      city: "Pune",
      state: "Maharashtra",
      price: 8500000,
      status: "pending",
      created_at: "2025-07-01",
    },
    {
      id: 2,
      sellerName: "Priya Verma",
      property_type: "residential",
      tittle: "2BHK Modern Apartment",
      description:
        "Fully furnished apartment with modern amenities and parking space.",
      address: "12 Green Park Colony",
      city: "Indore",
      state: "Madhya Pradesh",
      price: 4500000,
      status: "pending",
      created_at: "2025-07-02",
    },
    {
      id: 3,
      sellerName: "Amit Patel",
      property_type: "industrial",
      tittle: "Manufacturing Unit",
      description:
        "Large-scale industrial unit suitable for textile production with ample power supply.",
      address: "Plot 32, Industrial Area",
      city: "Ahmedabad",
      state: "Gujarat",
      price: 15000000,
      status: "pending",
      created_at: "2025-07-03",
    },
    {
      id: 4,
      sellerName: "Sneha Nair",
      property_type: "residential",
      tittle: "Luxury Villa",
      description: "4BHK villa with swimming pool and landscaped garden.",
      address: "Rosewood Estate",
      city: "Bengaluru",
      state: "Karnataka",
      price: 25000000,
      status: "pending",
      created_at: "2025-07-04",
    },
    {
      id: 5,
      sellerName: "Vikram Singh",
      property_type: "commercial",
      tittle: "Retail Shop Space",
      description: "Shop space in a busy market area with heavy footfall.",
      address: "Shop No. 5, Market Street",
      city: "Jaipur",
      state: "Rajasthan",
      price: 5500000,
      status: "pending",
      created_at: "2025-07-05",
    },
    {
      id: 6,
      sellerName: "Neha Gupta",
      property_type: "industrial",
      tittle: "Warehouse Facility",
      description: "5000 sq ft warehouse near highway for easy logistics.",
      address: "NH-48 Highway",
      city: "Surat",
      state: "Gujarat",
      price: 8000000,
      status: "pending",
      created_at: "2025-07-06",
    },
    {
      id: 7,
      sellerName: "Rohit Kumar",
      property_type: "residential",
      tittle: "Studio Apartment",
      description: "Compact and affordable studio apartment ideal for singles.",
      address: "B-104, Sunrise Apartments",
      city: "Delhi",
      state: "Delhi",
      price: 1800000,
      status: "pending",
      created_at: "2025-07-07",
    },
    {
      id: 8,
      sellerName: "Anjali Mehta",
      property_type: "commercial",
      tittle: "Restaurant Space",
      description:
        "Fully equipped restaurant space with kitchen and seating area.",
      address: "Near City Mall",
      city: "Chandigarh",
      state: "Punjab",
      price: 7000000,
      status: "pending",
      created_at: "2025-07-08",
    },
    {
      id: 9,
      sellerName: "Manoj Joshi",
      property_type: "industrial",
      tittle: "Cold Storage Facility",
      description: "Modern cold storage with temperature control systems.",
      address: "Sector 15, Industrial Zone",
      city: "Nagpur",
      state: "Maharashtra",
      price: 12000000,
      status: "pending",
      created_at: "2025-07-09",
    },
    {
      id: 10,
      sellerName: "Kavita Rao",
      property_type: "residential",
      tittle: "Penthouse Apartment",
      description: "Top floor penthouse with panoramic city views.",
      address: "Skyline Towers",
      city: "Hyderabad",
      state: "Telangana",
      price: 35000000,
      status: "pending",
      created_at: "2025-07-10",
    },
    {
      id: 11,
      sellerName: "Suresh Babu",
      property_type: "commercial",
      tittle: "IT Office Space",
      description:
        "Fully furnished IT office with high-speed internet and meeting rooms.",
      address: "Cyber Hub",
      city: "Gurgaon",
      state: "Haryana",
      price: 18000000,
      status: "pending",
      created_at: "2025-07-11",
    },
    {
      id: 12,
      sellerName: "Pooja Sharma",
      property_type: "industrial",
      tittle: "Steel Fabrication Plant",
      description:
        "Well-equipped fabrication plant with machinery and staff quarters.",
      address: "Plot 88, Industrial Layout",
      city: "Bhopal",
      state: "Madhya Pradesh",
      price: 20000000,
      status: "pending",
      created_at: "2025-07-12",
    },
    {
      id: 13,
      sellerName: "Arjun Desai",
      property_type: "residential",
      tittle: "Townhouse",
      description: "3BHK townhouse with private garden and garage.",
      address: "Sunrise Residency",
      city: "Vadodara",
      state: "Gujarat",
      price: 6000000,
      status: "pending",
      created_at: "2025-07-13",
    },
    {
      id: 14,
      sellerName: "Ritu Kapoor",
      property_type: "commercial",
      tittle: "Coworking Space",
      description:
        "Shared coworking office with modern interiors and conference rooms.",
      address: "WorkHub Center",
      city: "Mumbai",
      state: "Maharashtra",
      price: 15000000,
      status: "pending",
      created_at: "2025-07-14",
    },
    {
      id: 15,
      sellerName: "Ajay Yadav",
      property_type: "industrial",
      tittle: "Textile Factory",
      description: "Large textile production unit with latest machines.",
      address: "Sector 8 Industrial Park",
      city: "Ludhiana",
      state: "Punjab",
      price: 25000000,
      status: "pending",
      created_at: "2025-07-15",
    },
    {
      id: 16,
      sellerName: "Meera Iyer",
      property_type: "residential",
      tittle: "Beachside Cottage",
      description: "Cozy 2BHK cottage near the beach with sea view.",
      address: "Palm Beach Road",
      city: "Goa",
      state: "Goa",
      price: 12000000,
      status: "pending",
      created_at: "2025-07-16",
    },
    {
      id: 17,
      sellerName: "Rajesh Kumar",
      property_type: "commercial",
      tittle: "Showroom Space",
      description: "Premium showroom space with glass frontage.",
      address: "Main Market Road",
      city: "Kanpur",
      state: "Uttar Pradesh",
      price: 8000000,
      status: "pending",
      created_at: "2025-07-17",
    },
    {
      id: 18,
      sellerName: "Shweta Singh",
      property_type: "industrial",
      tittle: "Food Processing Unit",
      description: "Fully functional food processing unit with licenses.",
      address: "Agro Industrial Estate",
      city: "Patna",
      state: "Bihar",
      price: 14000000,
      status: "pending",
      created_at: "2025-07-18",
    },
    {
      id: 19,
      sellerName: "Karan Malhotra",
      property_type: "residential",
      tittle: "Luxury Duplex",
      description: "Spacious duplex with modern design and rooftop garden.",
      address: "Hill View Residency",
      city: "Shimla",
      state: "Himachal Pradesh",
      price: 22000000,
      status: "pending",
      created_at: "2025-07-19",
    },
    {
      id: 20,
      sellerName: "Divya Jain",
      property_type: "commercial",
      tittle: "Banquet Hall",
      description: "Large banquet hall with modern lighting and sound system.",
      address: "City Center Plaza",
      city: "Noida",
      state: "Uttar Pradesh",
      price: 30000000,
      status: "pending",
      created_at: "2025-07-20",
    },
  ];

  const [filterProperty, setFilterProperty] = React.useState("");
  const [ debouncedFilterProperty] = useDebounce(filterProperty, 500);

  const [displayProperties, setDisplayProperties] = React.useState(
    propertyVerificationData
  );

  React.useEffect(() => {
    if(debouncedFilterProperty === ""){
      setDisplayProperties(propertyVerificationData);
    }else{
      const data = propertyVerificationData?.filter((property) => {
        if(property?.tittle?.toLowerCase()?.includes(debouncedFilterProperty?.toLowerCase()) || property?.sellerName?.toLowerCase()?.includes(debouncedFilterProperty?.toLowerCase()) || property?.address?.toLowerCase()?.includes(debouncedFilterProperty?.toLowerCase())){
          return property;
        }
      })

      setDisplayProperties(data);
    }
  }, [debouncedFilterProperty]);

  const [propertyVerificationPopupData, setPropertyVerificationPopupData] =
    React.useState(null);

  return (
    <div className="my-10 space-y-5 ">
      <div>
        <h1 className="text-black text-2xl font-semibold">
          Property Verification
        </h1>
        <p className="text-gray-600">
          Review and verify property listings submitted by sellers
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {/* Pending Verifications */}
        <div className="space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <h5 className="font-medium text-xl">Pending Verifications</h5>

          <div>
            <p className="text-4xl font-semibold text-red-500 ">
              <CountUp duration={5} end={89} />
            </p>
            <p className="text-sm text-gray-500">Properties awaiting review</p>
          </div>
        </div>

        {/* Verified Properties Today */}
        <div className="space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <h5 className="font-medium text-xl">Verified Today</h5>

          <div>
            <p className="text-4xl font-semibold text-green-500 ">
              <CountUp duration={5} end={12} />
            </p>
            <p className="text-sm text-gray-500">Properties approved</p>
          </div>
        </div>
      </div>

      {/* property table */}
      <div className=" space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5">
        <div>
          <h5 className="font-semibold text-xl">Property Verification</h5>
          <p className="text-sm text-gray-500">
            Properties waiting for verification
          </p>
        </div>
        {/* filter */}
        <div className=" w-full border border-gray-400 hover:border-gray-700 p-2 rounded-xl flex items-center gap-3">
          <SearchIcon sx={{ color: "#303087" }} />
          <input
            type="text"
            onChange={(e) => setFilterProperty(e.target.value)}
            placeholder="Search properties, seller, or locations..."
            className="outline-none text-gray-700 w-full "
          />
        </div>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Actions
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Title
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Seller
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Type
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Price
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Location
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Submitted
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayProperties?.map((property, index) => (
                <TableRow key={index} className="hover:bg-gray-100">
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    <div
                      className="cursor-pointer shadow shadow-gray-400 border border-gray-400 flex items-center justify-center w-fit px-2 py-1 rounded "
                      onClick={() => setPropertyVerificationPopupData(property)}
                    >
                      <RemoveRedEyeOutlinedIcon fontSize="small" />
                    </div>
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {property?.tittle}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {property?.sellerName}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {property?.property_type}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    ₹{property?.price.toLocaleString()}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {property?.address}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {new Date(property?.created_at).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {
        /* Property Verification Popup */
        propertyVerificationPopupData && (
          <PropertyVerificationPopup
            data={propertyVerificationPopupData}
            cancel={setPropertyVerificationPopupData}
          />
        )
      }
    </div>
  );
};

export default PropertyVerification;
