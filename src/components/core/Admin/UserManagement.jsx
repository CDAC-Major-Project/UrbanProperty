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
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const UserManagement = () => {
  const initialUsers = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      role: "seller",
      status: "active",
      joinDate: "2024-01-15",
      propertiesCount: 5,
      lastActive: "2024-01-20",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      role: "buyer",
      status: "active",
      joinDate: "2024-01-12",
      propertiesCount: 0,
      lastActive: "2024-01-19",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike.wilson@email.com",
      role: "seller",
      status: "active",
      joinDate: "2024-01-10",
      propertiesCount: 3,
      lastActive: "2024-01-18",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      role: "buyer",
      status: "inactive",
      joinDate: "2024-01-08",
      propertiesCount: 0,
      lastActive: "2024-01-10",
    },
    {
      id: 5,
      name: "Robert Brown",
      email: "robert.b@email.com",
      role: "seller",
      status: "suspended",
      joinDate: "2024-01-05",
      propertiesCount: 2,
      lastActive: "2024-01-15",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      email: "lisa.anderson@email.com",
      role: "buyer",
      status: "active",
      joinDate: "2024-01-03",
      propertiesCount: 0,
      lastActive: "2024-01-20",
    },
  ];

  const [filterRoles, setFilterRoles] = React.useState("");

  const [filterUserByName, setFilterUserByName] = React.useState(""); //
  const [debouncedFilterUser] = useDebounce(filterUserByName, 500);

  const [displayUsers, setDisplayUsers] = React.useState(initialUsers);

  // search user by name
  React.useEffect(() => {
    if (debouncedFilterUser === "") {
      setDisplayUsers(initialUsers);
    } else {
      const data = initialUsers?.filter((user) => {
        if (
          user?.name
            ?.toLowerCase()
            ?.includes(debouncedFilterUser?.toLowerCase()) ||
          user?.email
            ?.toLowerCase()
            ?.includes(debouncedFilterUser?.toLowerCase())
        ) {
          return user;
        }
      });

      setDisplayUsers(data);
    }
  }, [debouncedFilterUser]);

  //   search user by roles
  
  const filterUserRole = () => {
    if(filterRoles === ""){
        setDisplayUsers(initialUsers);
    }else{
        const data = initialUsers?.filter((user) => user?.role === filterRoles);
        setDisplayUsers(data);
    }
  }
  React.useEffect(() => {
    filterUserRole();
  }, [filterRoles])


  return (
    <div className="my-10 space-y-5 ">
      <div>
        <h1 className="text-black text-2xl font-semibold">Users</h1>
        <p className="text-gray-600">Manage user accounts and profiles</p>
      </div>

      <div className="grid grid-cols-4 gap-5 ">
        {/* Total Users */}
        <div className=" space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <div className="flex items-center justify-between">
            <h5 className="font-medium text-xl">Total Users</h5>
            <PeopleAltOutlinedIcon fontSize="large" sx={{ color: "#4a5565" }} />
          </div>
          {/* total count */}
          <div>
            <p className="text-4xl font-extrabold text-black ">
              <CountUp duration={5} end={1234} />
            </p>
            <p className="text-xs text-gray-600">Registered users</p>
          </div>
        </div>

        {/* Active Users */}
        <div className="space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <div className="flex items-center justify-between">
            <h5 className="font-medium text-xl">Active Users</h5>
          </div>

          <div>
            <p className="text-4xl font-extrabold text-green-600 ">
              <CountUp duration={5} end={3546} />
            </p>
            <p className="text-xs text-gray-600">Currently active</p>
          </div>
        </div>

        {/* sellers */}
        <div className="space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <div className="flex items-center justify-between">
            <h5 className="font-medium text-xl">Sellers</h5>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-[#155DFC] ">
              <CountUp duration={5} end={3} />
            </p>
            <p className="text-xs text-gray-600">Property sellers</p>
          </div>
        </div>

        {/* buyers */}
        <div className=" space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <div className="flex items-center justify-between">
            <h5 className="font-medium text-xl">Buyers</h5>
          </div>
          {/* total count */}
          <div>
            <p className="text-4xl font-extrabold text-[#A91FFA] ">
              <CountUp duration={5} end={3} />
            </p>
            <p className="text-xs text-gray-600">Property buyers</p>
          </div>
        </div>
      </div>

      {/* User table */}
      <div className=" space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5">
        {/* filter */}
        <div className="flex gap-5">
          <div className=" w-1/2 border border-gray-400 hover:border-gray-700 p-2 rounded-xl flex items-center gap-3">
            <SearchIcon sx={{ color: "#303087" }} />
            <input
              type="text"
              onChange={(e) => setFilterUserByName(e.target.value)}
              placeholder="Search users by name or email..."
              className="outline-none text-gray-700 w-full "
            />
          </div>

          <div className="flex w-1/2 space-x-4 ">
            <Select
              value={filterRoles}
              onChange={(e) => setFilterRoles(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                borderRadius: "10px",
                height: "43px",
              }}
              className="w-1/2"
            >
              <MenuItem value="">All Roles</MenuItem>
              <MenuItem value={"buyer"}>Buyer</MenuItem>
              <MenuItem value={"seller"}>Seller</MenuItem>
            </Select>
            
          </div>
        </div>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "16px" }}
                ></TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  User
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Role
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Status
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Properties
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Join Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayUsers?.map((user, index) => (
                <TableRow key={index} className="hover:bg-gray-100">
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    <div className="flex gap-2">
                      <button
                        className="p-2 rounded-full hover:bg-red-100 transition-colors"
                        onClick={""}
                        title="Delete"
                      >
                        <DeleteIcon
                          fontSize="small"
                          sx={{ color: "#e53935" }}
                        />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    <div className="flex flex-col">
                      <span className="text-md font-semibold text-black">
                        {user?.name}
                      </span>
                      <span className="text-xs text-gray-600">
                        {user?.email}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {user?.role}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                        user?.status === "active"
                          ? "bg-black text-white font-semibold"
                          : "bg-gray-100 text-black font-semibold"
                      }`}
                    >
                      {user?.status.charAt(0).toUpperCase() +
                        user?.status?.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {user?.propertiesCount}
                  </TableCell>
                  <TableCell sx={{ color: "#000000", textWrap: "nowrap" }}>
                    {new Date(user?.joinDate).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default UserManagement;
