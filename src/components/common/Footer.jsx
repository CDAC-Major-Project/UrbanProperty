
import logo from "../../assets/logos/logo.png";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const Footer = () => {
  return (
    <div className="bg-[#F0F0F8] py-20 " >
    <div className=" grid grid-cols-4 gap-5 mx-auto w-10/12" >

        <img src={logo} />

        <div className="space-y-4" >
            <h5 className="font-bold text-[#393993]" >Other Links</h5>
            <ul className="space-y-2"> 
            <li className="text-[#464699] text-sm" >About PSB Alliance</li>
            <li className="text-[#464699] text-sm" >Terms and Conditions</li>
            <li className="text-[#464699] text-sm" >Privacy Policy</li>
            <li className="text-[#464699] text-sm" >Disclimer</li>
            </ul>
        </div>

        <div className="space-y-4" >
            <h5 className="font-bold text-[#393993]" >Help</h5>
            <ul className="space-y-2">
            <li className="text-[#464699] text-sm" >FAQ</li>
            <li className="text-[#464699] text-sm" >FAQ - ICB eAuction</li>
            <li className="text-[#464699] text-sm" >User Manual</li>
            <li className="text-[#464699] text-sm" >User Manual - IBC eAuction</li>
            </ul>
        </div>

        <div className="space-y-4">
            <h5 className="font-bold text-[#393993]" >Contact Us</h5>
            <ul>
            <li className="space-x-2" ><EmailIcon fontSize="small" htmlColor="#2E2E8C" /><span className="text-[#464699] text-sm" >support.urbanbid@gmail.com</span></li>
            <li className="space-x-2" ><LocalPhoneIcon fontSize="small" htmlColor="#2E2E8C" /><span className="text-[#464699] text-sm" >Toll Free Number +000000000</span></li>
            <li className="space-x-2" ><WatchLaterIcon fontSize="small" htmlColor="#2E2E8C" /><span className="text-[#464699] text-sm" >Working Hours - 09 AM to 07 PM <br/>(as per bank working days)</span></li>
            </ul>
        </div>
    </div>
    </div>
  );
};

export default Footer;
