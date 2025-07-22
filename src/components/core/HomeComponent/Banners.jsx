import banner1 from "../../../assets/Images/Hassle-free properties_icon1.svg";
import banner2 from '../../../assets/Images/Hassle-free properties_icon2.svg'
import banner3 from '../../../assets/Images/Hassle-free properties_icon3.svg'


const Banners = () => {
  return (
    <div className=" my-20 mx-auto w-10/12 " >
        <h1 className='text-4xl font-bold text-center text-[#0D2A6E]' >Hassle-free <span className='text-[#8F53AA]' >properties search</span></h1>
    
        <div className='grid grid-cols-3 mt-10 ' >
          <div className='flex flex-col items-center ' >
            <img src={banner1} />
            <p className='  text-center w-[65%] text-xl font-bold text-[#212529]' >One convenient <br></br>solution, from "search" to "connect"</p>
            <p className='w-1/2 text-center text-[#696969] ' >Find your ideal space among the 10,000+ listings spanning all areas.</p>
          </div>

          <div className='flex flex-col items-center '  >
            <img src={banner2} />
            <p className='  text-center w-[65%] text-xl font-bold text-[#212529]' >Research listings in all area</p>
            <p className='w-1/2 text-center text-[#696969] '  >Updated daily, listings include all property types & are marketed by leading brokerages.</p>
          </div>

          <div className='flex flex-col items-center ' >
            <img src={banner3} />
            <p className='  text-center w-[65%] text-xl font-bold text-[#212529]' >Reliable, up-to-date listings inventory</p>
            <p className='w-1/2 text-center text-[#696969] ' >Research the market, find your space, and connect, all with our intuitive and easy-to-use platform.</p>
          </div>
        </div>
    
    </div>
  )
}

export default Banners