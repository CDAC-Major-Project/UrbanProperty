import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Pie,
  PieChart,
  Area,
  AreaChart,
  Brush,
  Line,
  LineChart,
} from "recharts";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CountUp from "react-countup";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import { useSelector } from "react-redux";
import { getBuyerSellerBarChart, getMonthlyListedProperty, getPropertyStatus } from "../../../Services/adminAPI";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import toast from "react-hot-toast";

const Analytics = () => {

  const navigate = useNavigate();

  const {token} = useSelector((state) => state.auth);

  const [monthlyListedProperty, setMonthlyListedProperty] = React.useState([]);
  const [totalUser, setTotalUser] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [propertyStatus, setPropertyStatus] = React.useState({});

  console.log("propertyStatus : ", propertyStatus);

  const monthOrder = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

  const lineChart = monthOrder?.map((monthName) => (
    {
      month: monthName,
      listing: monthlyListedProperty[monthName]
    }
  ));

  React.useEffect(() => {
    const fetchAnalyticsData = async () => {
      const loading = toast.loading("Loading...");
      try{
        await getBuyerSellerBarChart(token, setData, setTotalUser);
        await getMonthlyListedProperty(token, setMonthlyListedProperty);
        await getPropertyStatus(token, setPropertyStatus);
        toast.success("Successfully Fetched Analytics Data");
      }catch(err){
        console.log("Error in fetching Analytics Data", err);
      }
      toast.dismiss(loading);
    }
    fetchAnalyticsData();
  }, []);

  const statusLable = ["ACTIVE", "PENDING", "REJECTED", "SOLD"];

  const PieData = statusLable?.map((lableName) => ({
    name: lableName,
    value: propertyStatus[lableName],
  }))

  const PieColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="space-y-10 my-10 ">
      {/* Header Cards */}
      <div className="grid grid-cols-3 gap-5 ">
        {/* Total Users */}
        <div className=" space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <div className="flex items-center justify-between">
            <h5 className="font-medium text-xl">Total Users</h5>
            <PeopleAltOutlinedIcon fontSize="large" sx={{ color: "#4a5565" }} />
          </div>
          {/* total count */}
          <p className="text-4xl font-extrabold text-[#2E3192] ">
            {" "}
            <CountUp duration={5} end={totalUser} />
          </p>
        </div>

        {/* Active Listings */}
        <div className="space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <div className="flex items-center justify-between">
            <h5 className="font-medium text-xl">Active Listings</h5>
            <CorporateFareOutlinedIcon
              fontSize="large"
              sx={{ color: "#4a5565" }}
            />
          </div>

          {/* total Listings */}
          <p className="text-4xl font-extrabold text-[#2E3192] ">
            <CountUp duration={5} end={propertyStatus?.ACTIVE} />
          </p>
        </div>

        {/* Pending Verifications */}
        <div className="space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <div className="flex items-center justify-between">
            <h5 className="font-medium text-xl">Pending Verifications</h5>
            <ErrorOutlineOutlinedIcon
              fontSize="large"
              sx={{ color: "#4a5565" }}
            />
          </div>
          <p className="text-4xl font-extrabold text-[#2E3192] ">
            <CountUp duration={5} end={propertyStatus?.PENDING} />
          </p>
        </div>
      </div>

      {/* bar chart */}
      <div className="border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5">
        <h3 className="text-lg font-medium ">Buyers vs Sellers</h3>
        <p className="text-sm text-gray-600">
          Monthly comparison of user registrations
        </p>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            width={500}
            height={300}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Seller"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="Buyer"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex space-x-5">
        {/* Pie Chart */}
        <div className="border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 w-fit ">
          <h3 className="text-lg font-medium ">Property Verification Status</h3>
          <p className="text-sm text-gray-600">
            Distribution of property verification statuses
          </p>

          <div className="flex items-center justify-center ">
            <PieChart width={400} height={400}>
              <Pie
                data={PieData}
                innerRadius={100}
                outerRadius={130}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                labelLine={false}
              >
                {PieData?.map((data, index) => (
                  <Cell
                    key={data?.name}
                    fill={PieColors[index % PieColors?.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value = Number, name = String) => [
                  `${value}`,
                  name,
                ]}
              />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                iconType="circle"
                align="center"
                formatter={(value, entry, index) =>
                  `${value}: ${PieData[index]?.value}`
                }
              />
            </PieChart>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-1/2 space-y-5 ">
          {/* Verify Property Link */}
          <div className="border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 w-full flex items-center justify-between ">
            {/* Icon and Heading */}
            <div className="flex items-center space-x-3">
              <TaskAltOutlinedIcon sx={{ color: "#00A63E" }} fontSize="large" />
              <div>
                <h3 className="font-semibold">Verify Properties</h3>
                <p className="text-sm text-gray-600">89 pending verification</p>
              </div>
            </div>

            {/* button */}
            <button 
              onClick={() => navigate("/admin/property-verification")}
              className=" cursor-pointer flex items-center space-x-2 border border-gray-300 rounded-lg py-1 px-5 "
            >
              <RemoveRedEyeOutlinedIcon fontSize="small" />
              <p>Review Now</p>
            </button>
          </div>

          {/* Property Type Link */}
          <div className="border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 w-full flex items-center justify-between ">
            {/* Icon and Heading */}
            <div className="flex items-center space-x-3">
              <CorporateFareOutlinedIcon
                sx={{ color: "#155DFC" }}
                fontSize="large"
              />
              <div>
                <h3 className="font-semibold">Property Type</h3>
                <p className="text-sm text-gray-600">
                  Manage property categories
                </p>
              </div>
            </div>

            {/* button */}
            <button 
              onClick={() => navigate("/admin/property-type")}
              className=" cursor-pointer flex items-center space-x-2 border border-gray-300 rounded-lg py-1 px-5 "
            >
              <SettingsOutlinedIcon fontSize="small" />
              <p>Manage Types</p>
            </button>
          </div>

          {/* Amenity */}
          <div className="border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 w-full flex items-center justify-between ">
            {/* Icon and Heading */}
            <div className="flex items-center space-x-3">
              <HomeOutlinedIcon
                sx={{ color: "#00C49F" }}
                fontSize="large"
              />
              <div>
                <h3 className="font-semibold">Amenities</h3>
                <p className="text-sm text-gray-600">1,234 total Amenities</p>
              </div>
            </div>

            {/* button */}
            <button 
              onClick={() => navigate("/admin/amenities")}
              className=" cursor-pointer flex items-center space-x-2 border border-gray-300 rounded-lg py-1 px-5 "
            >
              <WifiOutlinedIcon fontSize="small" />
              <p>Manage Amenities</p>
            </button>
          </div>

          {/* User Management Link */}
          <div className="border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 w-full flex items-center justify-between ">
            {/* Icon and Heading */}
            <div className="flex items-center space-x-3">
              <PeopleAltOutlinedIcon
                sx={{ color: "#9810FA" }}
                fontSize="large"
              />
              <div>
                <h3 className="font-semibold">User Management</h3>
                <p className="text-sm text-gray-600">1,234 total users</p>
              </div>
            </div>

            {/* button */}
            <button 
              onClick={() => navigate("/admin/users")}
              className=" cursor-pointer flex items-center space-x-2 border border-gray-300 rounded-lg py-1 px-5 "
            >
              <ManageAccountsOutlinedIcon fontSize="small" />
              <p>Manage Users</p>
            </button>
          </div>
        </div>
      </div>

      {/* Property Listing Line Chart */}
      <div className="border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5">
        <h3 className="text-lg font-medium ">Property Listings Trend</h3>
        <p className="text-sm text-gray-600">
          Monthly property listings over time
        </p>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={lineChart}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="listing"
              stroke="#8884d8"
              strokeWidth={4} // Increase this value for a thicker line
              activeDot={{ r: 8 }}
            >
              {lineChart?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#82ca9d" />
              ))}
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
