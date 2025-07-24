
import Logo from "../../assets/logos/logo.png"
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation().pathname;

    // #303087

  return (
    <div className={`absolute left-1/2 -translate-x-1/2 z-30 w-full ${location != "/" && "bg-[#303087]"} `}>
        <div className={` flex w-11/12 mx-auto items-center justify-between`} >
            {/* logo */}
            <img src={Logo} className='h-35' />
            {/* links */}
            <div className='' >
                <nav>
                    <ul className=' text-white font-semibold space-x-5 text-xl flex flex-row items-center' >
                        <li className='cursor-pointer flex flex-col group '>Home <span className='group-hover:bg-red-500 h-0.5' ></span></li>
                        <li className='cursor-pointer flex flex-col group ' >Buy <span className='group-hover:bg-red-500 h-0.5' ></span></li>
                        <li className='cursor-pointer flex flex-col group ' >Sell <span className='group-hover:bg-red-500 h-0.5' ></span></li>
                        <li className='cursor-pointer flex flex-col group ' >About Us <span className='group-hover:bg-red-500 h-0.5' ></span></li>
                        <li className='cursor-pointer flex flex-col group ' >Contact Us <span className='group-hover:bg-red-500 h-0.5' ></span></li>
                    </ul>
                </nav>
            </div>

            {/* buttons */}
            <div className=' flex flex-row gap-5 items-center' >
                <button onClick={() => navigate("/login")} className=' cursor-pointer bg-black hover:bg-gray-700 text-sm font-semibold text-white px-7 py-2 rounded-full'>Login</button>
                <button onClick={() => navigate("/signup")} className=' cursor-pointer bg-[#00BCFF] hover:bg-[#0099CC] text-sm font-semibold text-white px-4 py-2 rounded-full'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar