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
import { getPendingPropertyData } from "../../../Services/adminAPI"; 
import { useSelector } from "react-redux";

const PropertyVerification = () => {
  
  const {token} = useSelector((state) => state.auth);


  const [pendingProperties, setPendingProperties] = React.useState([]);
  const [filterProperty, setFilterProperty] = React.useState("");
  const [ debouncedFilterProperty] = useDebounce(filterProperty, 500);
  const [displayProperties, setDisplayProperties] = React.useState(
    pendingProperties
  );

  // backend fn  on initial render
  React.useEffect(() => {
    getPendingPropertyData(token, setPendingProperties);
  }, []);

  // updating the display array after getting the data from the backend
  React.useEffect(() => {
    setDisplayProperties(pendingProperties);
  }, [pendingProperties])

  // filtering the properties
  React.useEffect(() => {
    if(debouncedFilterProperty === ""){
      setDisplayProperties(pendingProperties);
    }else{
      const data = pendingProperties?.filter((property) => {
        if(property?.title?.toLowerCase()?.includes(debouncedFilterProperty?.toLowerCase()) || property?.sellerName?.toLowerCase()?.includes(debouncedFilterProperty?.toLowerCase()) || property?.address?.toLowerCase()?.includes(debouncedFilterProperty?.toLowerCase())){
          return property;
        }
      })

      setDisplayProperties(data);
    }
  }, [debouncedFilterProperty]);

  // property verification popup data
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
              <CountUp duration={5} end={pendingProperties?.length} />
            </p>
            <p className="text-sm text-gray-500">Properties awaiting review</p>
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
                    {property?.title}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {property?.sellerName}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {property?.propertyTypeName}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    ₹{property?.startingPrice?.toLocaleString()}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {property?.address}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {new Date(property?.createdTime).toLocaleDateString()}
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
            setPendingProperties={setPendingProperties}
          />
        )
      }
    </div>
  );
};

export default PropertyVerification;
