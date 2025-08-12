import React, { useRef } from "react";
import Logo from "../../assets/logos/logo.png"
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { logout } from "../../Services/authAPI";

const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation().pathname;
    const dispatch = useDispatch();

    const {token, userDetails} = useSelector((state) => state.auth);

    const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

    // ref to profile icon
    const dialogRef = useRef(null);

    const closeOnClickOutSide = (e) => {
        if(isDropDownOpen && dialogRef.current && !dialogRef.current.contains(e.target)){
            setIsDropDownOpen(false);
        }
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', closeOnClickOutSide);
        return () => document.removeEventListener('mousedown', closeOnClickOutSide);
    }, [isDropDownOpen])

  return (
    <div className={`absolute left-1/2 -translate-x-1/2 z-30 w-full ${location != "/" && "bg-[#303087]"} `}>
        <div className={` flex w-11/12 mx-auto items-center justify-between`} >
            {/* logo */}
            <img src={Logo} className='h-35' />
            {/* links */}
            <div className='' >
                <nav>
                    <ul className=' text-white font-semibold space-x-5 text-xl flex flex-row items-center' >
                        <li onClick={() => navigate("/")} className='cursor-pointer flex flex-col group '>Home <span className={` ${location === "/" ? "bg-red-500 h-0.5" : "group-hover:bg-red-500 h-0.5"} `} ></span></li>
                        {
                            token !== null && <li onClick={() => { userDetails?.role === "BUYER" ? navigate("/dashboard/buyer") : navigate("/dashboard/seller") }} className='cursor-pointer flex flex-col group ' >Dashboard<span className={` ${( location === "/dashboard/seller" || location === "/dashboard/buyer" ) ? "bg-red-500 h-0.5" : "group-hover:bg-red-500 h-0.5"} `} ></span></li>
                        }
                        {
                            token !== null && userDetails !== null && userDetails?.role === "BUYER" && <div className="text-white font-semibold space-x-5 text-xl flex flex-row items-center" >
                                <li onClick={() => navigate("/properties")} className='cursor-pointer flex flex-col group ' >Browse<span className={` ${ location === "/properties" ? "bg-red-500 h-0.5" : "group-hover:bg-red-500 h-0.5"} `} ></span></li>
                            </div>
                        }
                        <li className='cursor-pointer flex flex-col group ' >About Us <span className={` ${location === "/" ? "bg-red-500 h-0.5" : "group-hover:bg-red-500 h-0.5"} `} ></span></li>
                        <li className='cursor-pointer flex flex-col group ' >Contact Us <span className={` ${location === "/" ? "bg-red-500 h-0.5" : "group-hover:bg-red-500 h-0.5"} `} ></span></li>
                    </ul>
                </nav>
            </div>

            {/* buttons */}
            {
                token !==  null ? (
                    <div className="flex items-center gap-2" >
                        <div className='  bg-red-500 text-sm font-semibold text-white px-7 py-2 rounded-full' >
                            {userDetails?.role}
                        </div>

                        <div className="relative" ref={dialogRef} >
                            <div onClick={() => setIsDropDownOpen((prev) => !prev)} >
                                <AccountCircleOutlinedIcon sx={{color:"#FFFFFF"}} fontSize="large" className="cursor-pointer" />
                            </div>
                            {
                                isDropDownOpen && <div className="absolute top-10 right-0 bg-[#2C333F] text-[#eff0f1] border border-[#7d8083] rounded-md" >
                                    <div onClick={() => {navigate("/profile"); setIsDropDownOpen(false)}} className=" py-2 text-sm px-5 flex items-center gap-1 hover:bg-gray-500 cursor-pointer " > <PermIdentityOutlinedIcon fontSize="small" /> Profile</div>
                                    <div className="h-0.5 bg-[#7d8083] w-full " ></div>
                                    <div onClick={() => logout(navigate, dispatch)} className=" py-2  text-sm px-5 flex items-center gap-1 hover:bg-gray-500 cursor-pointer" > <LogoutOutlinedIcon fontSize="small" /> Logout</div>
                                </div>
                            }
                        </div>
                    </div>
                ) : (
                    <div className=' flex flex-row gap-5 items-center' >
                        <button onClick={() => navigate("/login")} className=' cursor-pointer bg-black hover:bg-gray-700 text-sm font-semibold text-white px-7 py-2 rounded-full'>Login</button>
                        <button onClick={() => navigate("/signup")} className=' cursor-pointer bg-[#00BCFF] hover:bg-[#0099CC] text-sm font-semibold text-white px-4 py-2 rounded-full'>Sign Up</button>
                    </div>
                )
            }

        </div>
    </div>
  )
}

export default Navbar